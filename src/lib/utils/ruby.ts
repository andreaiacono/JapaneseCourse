// ============================================================
// Inline furigana notation for course text
// ============================================================
//
// Example sentences carry their reading in a `furigana` field, and reading
// tales use [kanji, reading] segments. Neither works for the rest of a lesson:
// prose and tips are markdown rendered by a regex pass, and exercise choices
// and table cells are bare strings compared and displayed as-is. Turning those
// into segment arrays would mean an AST for the markdown and a type change for
// every choice.
//
// So above-level kanji is annotated in place:
//
//     彼{かれ}は先生です。
//
// which reads fine as plain text and renders as ruby. Only kanji the reference
// doesn't teach is annotated — the point is to keep the promise that finishing
// the 294 makes every lesson readable, not to gloss everything.

/** kanji followed by {reading}. Built fresh per use — a shared /g regex carries
 *  lastIndex between calls, which makes .test() alternate true/false. */
const rubyRe = () => /([一-鿿]+)\{([ぁ-んァ-ヶー]+)\}/g;

const escapeHtml = (s: string): string =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/**
 * Render the annotation as <ruby>. `showReading` false drops the reading and
 * shows the kanji alone, so the furigana toggle works here as it does on
 * example sentences.
 *
 * The input is escaped: this output is used with {@html}.
 */
export function renderRuby(text: string, showReading = true): string {
  return escapeHtml(text ?? '').replace(rubyRe(), (_m, kanji, reading) =>
    showReading ? `<ruby>${kanji}<rt>${reading}</rt></ruby>` : kanji
  );
}

/** The plain written form, annotations removed — for TTS and for comparisons. */
export function stripRuby(text: string): string {
  return (text ?? '').replace(rubyRe(), '$1');
}

/** True if the text carries any annotation. */
export function hasRuby(text: string): boolean {
  return rubyRe().test(text ?? '');
}
