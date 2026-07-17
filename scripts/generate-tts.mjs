// ============================================================
// Pre-generate neural TTS audio for every Japanese string in the app
// ============================================================
//
// Synthesizes an MP3 per unique Japanese string for each voice, using
// Microsoft edge-tts (free, no API key). Files are committed as static assets
// and played by the app at runtime — so end users need no TTS voice of their
// own, and playback speed is controlled live via <audio>.playbackRate.
//
// Covers every surface that speaks Japanese:
//   - kana        — each character (basic, dakuten, youon)
//   - kanji       — each kun/on reading, and each example word
//   - vocab       — each word and example sentence
//   - grammar     — each example sentence
//   - lessons     — example-block sentences + reading-tale sentences
// Kana and kanji used to play recorded MP3s instead; those recordings were the
// app's only data source (the filenames were the schema), which is why the
// character data now lives in kanaData.ts and data/kanji/*.json.
//
// Run:  npx tsx scripts/generate-tts.mjs
// Needs the `edge-tts` CLI on PATH, or set EDGE_TTS=/path/to/edge-tts.
// Idempotent: existing files are skipped, so re-running only fills gaps.

import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { n5Vocab } from '../src/lib/data/course/n5-vocab.ts';
import { n5Grammar } from '../src/lib/data/course/n5-grammar.ts';
import { n5Lessons } from '../src/lib/data/course/n5-lessons.ts';
import { n5ReadingLessons } from '../src/lib/data/course/n5-readings.ts';
import {
  HIRAGANA_BASIC,
  HIRAGANA_DAKUTEN,
  HIRAGANA_YOUON,
  KATAKANA_BASIC,
  KATAKANA_DAKUTEN,
  KATAKANA_YOUON
} from '../src/lib/data/kanaData.ts';

const pExecFile = promisify(execFile);

const EDGE = process.env.EDGE_TTS || 'edge-tts';
const VOICES = { nanami: 'ja-JP-NanamiNeural', keita: 'ja-JP-KeitaNeural' };
const OUT_DIR = 'static/audio/tts';
const MANIFEST = 'src/lib/data/tts-manifest.json';
const CONCURRENCY = 8;

const readJson = (p) => JSON.parse(readFileSync(p, 'utf8'));

// ── Collect the unique Japanese strings to voice ────────────────────────────
const texts = new Set();

// Kana: the character itself is what gets spoken.
for (const c of [
  ...HIRAGANA_BASIC,
  ...HIRAGANA_DAKUTEN,
  ...HIRAGANA_YOUON,
  ...KATAKANA_BASIC,
  ...KATAKANA_DAKUTEN,
  ...KATAKANA_YOUON
]) {
  texts.add(c.character);
}

// Kanji: each reading, plus each example word. A bare kanji is never spoken —
// it has no single pronunciation.
for (const file of ['src/lib/data/kanji/n5-kanji.json', 'src/lib/data/kanji/n4-kanji.json']) {
  for (const entry of readJson(file)) {
    for (const r of [...(entry.kun_yomi ?? []), ...(entry.on_yomi ?? [])]) texts.add(r);
    for (const w of entry.words ?? []) if (w.word) texts.add(w.word);
  }
}

for (const v of Object.values(n5Vocab)) {
  if (v.word?.ja) texts.add(v.word.ja);
  for (const ex of v.exampleSentences ?? []) if (ex.ja) texts.add(ex.ja);
}
for (const g of Object.values(n5Grammar)) {
  for (const ex of g.examples ?? []) if (ex.ja) texts.add(ex.ja);
}

// Course lessons: example-block sentences, and reading-tale sentences rebuilt
// from their furigana segments into the written form. The lesson player voices
// the same reconstruction, so this join must match it exactly (see
// reconstructReading in course/[slug]/+page.svelte).
const reconstructReading = (segments) =>
  segments.map((s) => (Array.isArray(s) ? s[0] : s)).join('');

const collectLessonAudio = (lessons) => {
  for (const lesson of Object.values(lessons)) {
    for (const block of lesson.contentBlocks ?? []) {
      if (block.type === 'example' && block.sentence?.ja) texts.add(block.sentence.ja);
      if (block.type === 'reading') {
        for (const sentence of block.sentences ?? []) {
          const ja = reconstructReading(sentence.segments);
          if (ja) texts.add(ja);
        }
      }
    }
  }
};
collectLessonAudio(n5Lessons);
collectLessonAudio(n5ReadingLessons);

const list = [...texts];

const hash = (t) => createHash('sha256').update(t).digest('hex').slice(0, 16);

for (const voiceKey of Object.keys(VOICES)) {
  mkdirSync(`${OUT_DIR}/${voiceKey}`, { recursive: true });
}

// ── Build the manifest + the task list of missing files ─────────────────────
const manifest = {};
const tasks = [];
let skipped = 0;
for (const text of list) {
  const h = hash(text);
  manifest[text] = h;
  for (const [voiceKey, voiceName] of Object.entries(VOICES)) {
    const file = `${OUT_DIR}/${voiceKey}/${h}.mp3`;
    if (existsSync(file)) skipped++;
    else tasks.push({ voiceKey, voiceName, text, file });
  }
}

console.log(
  `${list.length} unique strings × ${Object.keys(VOICES).length} voices → ` +
    `${tasks.length} to generate, ${skipped} already present`
);

// ── Generate with a small concurrency pool ──────────────────────────────────
let done = 0;
let failed = 0;
let idx = 0;
async function worker() {
  while (idx < tasks.length) {
    const t = tasks[idx++];
    try {
      // Normal rate (+0%); the app slows playback live via playbackRate.
      await pExecFile(EDGE, ['--voice', t.voiceName, '--text', t.text, '--write-media', t.file]);
      done++;
      if (done % 40 === 0) console.log(`… ${done}/${tasks.length} generated`);
    } catch (e) {
      failed++;
      console.error(`FAIL [${t.voiceKey}] ${t.text}: ${e.message}`);
    }
  }
}
await Promise.all(Array.from({ length: CONCURRENCY }, worker));

// ── Write the manifest (text → hash) ────────────────────────────────────────
writeFileSync(MANIFEST, JSON.stringify(manifest));
console.log(
  `Done. generated=${done} failed=${failed} skipped=${skipped}. ` +
    `Manifest: ${Object.keys(manifest).length} entries → ${MANIFEST}`
);
if (failed > 0) process.exitCode = 1;
