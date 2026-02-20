export interface Reading {
  text: string;
  audioPath: string;
  readingType?: 'kun' | 'on';
}

export interface Character {
  character: string;
  characterType: 'hiragana' | 'katakana' | 'kanji_n5' | 'kanji_n4';
  romaji?: string;
  meaning?: string;
  readings: Reading[];
  jlptLevel?: 'N5' | 'N4';
}

export function getKunReadings(char: Character): Reading[] {
  return char.readings.filter((r) => r.readingType === 'kun');
}

export function getOnReadings(char: Character): Reading[] {
  return char.readings.filter((r) => r.readingType === 'on');
}

export function getAllReadingTexts(char: Character): string[] {
  return char.readings.map((r) => r.text);
}
