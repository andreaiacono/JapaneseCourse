import { readFileSync, writeFileSync } from 'node:fs';
import { makeTokenizer, toKana } from './furigana.mjs';

// Batch/gloss files are read from, and output written to, this directory.
const SCRATCH = process.env.VOCAB_DIR || 'scripts/vocab-batches';
const REPO = process.cwd();
const BATCH = process.argv[2] || 'vocab-batch.json';
const GLOSS = process.argv[3] || 'vocab-glosses.json';
const batch = JSON.parse(readFileSync(`${SCRATCH}/${BATCH}`, 'utf8'));
const tok = await makeTokenizer();

// ── existing vocab (dupe check) ──────────────────────────────────────────────
const { n5Vocab } = await import(`${REPO}/src/lib/data/course/n5-vocab.ts`);
const haveJa = new Set(Object.values(n5Vocab).map((v) => v.word.ja));
const haveId = new Set(Object.keys(n5Vocab));

// ── kana → Hepburn romaji ────────────────────────────────────────────────────
const R = {
  あ:'a',い:'i',う:'u',え:'e',お:'o',か:'ka',き:'ki',く:'ku',け:'ke',こ:'ko',
  さ:'sa',し:'shi',す:'su',せ:'se',そ:'so',た:'ta',ち:'chi',つ:'tsu',て:'te',と:'to',
  な:'na',に:'ni',ぬ:'nu',ね:'ne',の:'no',は:'ha',ひ:'hi',ふ:'fu',へ:'he',ほ:'ho',
  ま:'ma',み:'mi',む:'mu',め:'me',も:'mo',や:'ya',ゆ:'yu',よ:'yo',
  ら:'ra',り:'ri',る:'ru',れ:'re',ろ:'ro',わ:'wa',を:'o',ん:'n',
  が:'ga',ぎ:'gi',ぐ:'gu',げ:'ge',ご:'go',ざ:'za',じ:'ji',ず:'zu',ぜ:'ze',ぞ:'zo',
  だ:'da',ぢ:'ji',づ:'zu',で:'de',ど:'do',ば:'ba',び:'bi',ぶ:'bu',べ:'be',ぼ:'bo',
  ぱ:'pa',ぴ:'pi',ぷ:'pu',ぺ:'pe',ぽ:'po',
  きゃ:'kya',きゅ:'kyu',きょ:'kyo',しゃ:'sha',しゅ:'shu',しょ:'sho',ちゃ:'cha',ちゅ:'chu',ちょ:'cho',
  にゃ:'nya',にゅ:'nyu',にょ:'nyo',ひゃ:'hya',ひゅ:'hyu',ひょ:'hyo',みゃ:'mya',みゅ:'myu',みょ:'myo',
  りゃ:'rya',りゅ:'ryu',りょ:'ryo',ぎゃ:'gya',ぎゅ:'gyu',ぎょ:'gyo',じゃ:'ja',じゅ:'ju',じょ:'jo',
  びゃ:'bya',びゅ:'byu',びょ:'byo',ぴゃ:'pya',ぴゅ:'pyu',ぴょ:'pyo'
};
const kataToHira = (s) => s.replace(/[ァ-ヶ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60));
function romaji(kanaRaw) {
  const kana = kataToHira(kanaRaw);
  let out = '';
  for (let i = 0; i < kana.length; ) {
    const two = kana.slice(i, i + 2);
    if (R[two]) { out += R[two]; i += 2; continue; }
    const c = kana[i];
    if (c === 'っ') { const n = R[kana.slice(i + 1, i + 3)] || R[kana[i + 1]] || ''; out += n[0] || ''; i += 1; continue; }
    if (c === 'ー') { out += out.slice(-1); i += 1; continue; }
    out += R[c] ?? c; i += 1;
  }
  return out;
}

// ── build ────────────────────────────────────────────────────────────────────
const KANJI = /[一-鿿]/;
const idFor = (r, ja) => {
  let base = 'vocab-' + romaji(r).replace(/[^a-z]/g, '');
  let id = base, n = 2;
  while (haveId.has(id)) { id = base + '-' + n++; }
  haveId.add(id);
  return id;
};

const badReadings = [], dupes = [], entries = [];
for (const [ja, reading, wordClass, theme, exJa, exEn, inlineGloss] of batch) {
  if (haveJa.has(ja)) { dupes.push(ja); continue; }
  // validate headword reading against kuromoji (only for kanji-bearing single words)
  if (KANJI.test(ja)) {
    const gen = toKana(tok, ja);
    if (gen !== reading) badReadings.push(`${ja}  mine=${reading}  kuromoji=${gen}`);
  }
  const furigana = toKana(tok, exJa);
  const id = idFor(reading, ja);
  entries.push({ id, ja, reading, romaji: romaji(reading), inlineGloss, wordClass, theme,
    exJa, exFuri: furigana, exRomaji: cap(romaji(furigana.replace(/、/g,' ').replace(/。/g,''))), exEn });
}

function cap(s){ return s.charAt(0).toUpperCase()+s.slice(1); }

console.log(`batch: ${batch.length} | new: ${entries.length} | dupes skipped: ${dupes.length ? dupes.join(' ') : 'none'}`);
console.log(`\nHEADWORD READING MISMATCHES (review — mine vs kuromoji):`);
console.log(badReadings.length ? '  ' + badReadings.join('\n  ') : '  none');

// The en meaning — I stored exEn as the example's English; the word's own gloss
// I take from a parallel map below. Fill word gloss from batch meaning file if present.
let glosses = {}; try { glosses = JSON.parse(readFileSync(`${SCRATCH}/${GLOSS}`, 'utf8')); } catch {}
let missGloss = [];
const TS = entries.map((e) => {
  const gloss = e.inlineGloss ?? glosses[e.ja];
  if (!gloss) missGloss.push(e.ja);
  const tags = `['${e.wordClass === 'noun' ? e.theme : e.wordClass}', '${e.theme}', 'N5']`.replace("'"+e.theme+"', '"+e.theme+"'", "'"+e.theme+"'");
  return `  '${e.id}': {
    id: '${e.id}',
    word: { ja: '${e.ja}', reading: '${e.reading}', romaji: '${e.romaji}', en: ${JSON.stringify(gloss ?? '?')} },
    wordClass: '${e.wordClass}',
    jlptLevel: 'N5',
    tags: ['${e.wordClass}', '${e.theme}', 'N5'],
    exampleSentences: [
      { ja: '${e.exJa}', furigana: '${e.exFuri}', en: ${JSON.stringify(e.exEn)} },
    ],
  },`;
}).join('\n');
console.log('\nmissing glosses:', missGloss.length ? missGloss.join(' ') : 'none');
writeFileSync(`${SCRATCH}/vocab-generated.ts`, TS);
console.log(`\nwrote ${entries.length} entries -> vocab-generated.ts`);
