export interface Word {
  word: string;
  reading: string;
  meaning: string;
  kanji: string;
  audioPath?: string;
  jlptLevel: 'N5' | 'N4';
}

export function getDisplayText(word: Word): string {
  return `${word.word} (${word.reading})`;
}

export function matchesMeaning(word: Word, answer: string): boolean {
  const normalized = answer.toLowerCase().trim();
  const meanings = word.meaning
    .toLowerCase()
    .split(/[,/]/)
    .map((m) => m.trim());
  return meanings.some((m) => m === normalized);
}
