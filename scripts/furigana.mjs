// Generate a full-kana transcription for a Japanese sentence, and validate the
// generator against the sentences that already carry hand-written furigana.
import kuromoji from 'kuromoji';
import { createRequire } from 'node:module';
import path from 'node:path';

const require = createRequire(import.meta.url);
const dicPath = path.join(require.resolve('kuromoji'), '../../dict');

const KANJI = /[一-鿿]/;
const kataToHira = (s) =>
  s.replace(/[ァ-ヶ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60));

export function makeTokenizer() {
  return new Promise((resolve, reject) =>
    kuromoji.builder({ dicPath }).build((err, t) => (err ? reject(err) : resolve(t)))
  );
}

// Cases where IPADIC picks the wrong reading. Each was caught by validating
// against the hand-written furigana already in the course.
const CORRECTIONS = [
  ['なにです', 'なんです'],   // 何です → なんです, never なにです
  ['なにの', 'なんの'],       // 何の
  ['なにと', 'なんと'],
  ['ななじ', 'しちじ'],       // 七時
  // 九時 → くじ, but NOT きゅうじつ (休日) — the bare string replace would eat it.
  [/きゅうじ(?!つ)/g, 'くじ'],
  ['いちかい', 'いっかい'],   // 一回 / 一階
  ['ににん', 'ふたり'],       // 二人
  ['よんにん', 'よにん'],     // 四人
  ['にっぽん', 'にほん'],     // 日本 — にほん is the everyday reading
  ['じゅうふん', 'じゅっぷん'] // 十分 (ten minutes)
];

// Katakana loanwords keep their script (furigana over katakana is not a thing);
// only kanji-bearing tokens are converted to their kana reading.
export function toKana(tokenizer, sentence) {
  let out = '';
  for (const t of tokenizer.tokenize(sentence)) {
    if (!KANJI.test(t.surface_form) || !t.reading || t.reading === '*') out += t.surface_form;
    else out += kataToHira(t.reading);
  }
  return CORRECTIONS.reduce(
    (s, [from, to]) => (from instanceof RegExp ? s.replace(from, to) : s.split(from).join(to)),
    out
  );
}

// Run directly: re-validate against the course's hand-written furigana.
if (process.argv[1]?.endsWith('furigana.mjs')) {
  const tokenizer = await makeTokenizer();
  const REPO = process.cwd();
  const { n5Grammar } = await import(`${REPO}/src/lib/data/course/n5-grammar.ts`);
  const { n5Vocab } = await import(`${REPO}/src/lib/data/course/n5-vocab.ts`);

  const pairs = [];
  const walk = (o) => {
    if (!o || typeof o !== 'object') return;
    if (typeof o.ja === 'string' && o.furigana && KANJI.test(o.ja)) pairs.push([o.ja, o.furigana]);
    for (const v of Object.values(o)) walk(v);
  };
  walk(n5Grammar);
  walk(n5Vocab);

  let match = 0;
  const diffs = [];
  for (const [ja, human] of pairs) {
    const gen = toKana(tokenizer, ja);
    if (gen === human) match++;
    else if (diffs.length < 15) diffs.push([ja, human, gen]);
  }
  console.log(`validation set (hand-written furigana): ${pairs.length}`);
  console.log(`generator matches exactly             : ${match} (${Math.round((match / pairs.length) * 100)}%)`);
  for (const [ja, h, g] of diffs) console.log(`${ja}\n  human: ${h}\n  gen  : ${g}`);
}
