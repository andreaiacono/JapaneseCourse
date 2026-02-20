import type { Character, Reading } from '$lib/models/Character';
import type { Word } from '$lib/models/Word';

export interface ManifestKanaEntry {
  character: string;
  romaji: string;
  audioFiles: string[];
}

export interface ManifestReadingEntry {
  text: string;
  readingType: 'kun' | 'on';
  audioFile: string;
}

export interface ManifestWordEntry {
  word: string;
  reading: string;
  meaning: string;
  kanji: string;
  audioFile: string | null;
  jlptLevel: string;
}

export interface ManifestKanjiEntry {
  character: string;
  meaning: string;
  jlptLevel: string;
  readings: ManifestReadingEntry[];
  words: ManifestWordEntry[];
}

export interface AudioManifest {
  hiragana: ManifestKanaEntry[];
  katakana: ManifestKanaEntry[];
  kanji_n5: ManifestKanjiEntry[];
  kanji_n4: ManifestKanjiEntry[];
}

export class DataLoader {
  private characters: Map<string, Character[]> = new Map();
  private wordsByLevel: Map<string, Word[]> = new Map([
    ['N5', []],
    ['N4', []]
  ]);
  private wordsByKanji: Map<string, Word[]> = new Map();

  constructor(private manifest: AudioManifest) {}

  loadAll(): void {
    this.loadKana('hiragana', this.manifest.hiragana);
    this.loadKana('katakana', this.manifest.katakana);
    this.loadKanji('kanji_n5', 'N5', this.manifest.kanji_n5);
    this.loadKanji('kanji_n4', 'N4', this.manifest.kanji_n4);
  }

  private loadKana(type: string, entries: ManifestKanaEntry[]): void {
    const chars: Character[] = entries.map((entry) => ({
      character: entry.character,
      characterType: type as Character['characterType'],
      romaji: entry.romaji,
      readings: entry.audioFiles.map(
        (audioFile): Reading => ({
          text: entry.romaji,
          audioPath: audioFile
        })
      )
    }));
    this.characters.set(type, chars);
  }

  private loadKanji(type: string, level: 'N5' | 'N4', entries: ManifestKanjiEntry[]): void {
    const chars: Character[] = entries.map((entry) => ({
      character: entry.character,
      characterType: type as Character['characterType'],
      meaning: entry.meaning || undefined,
      jlptLevel: level,
      readings: entry.readings.map(
        (r): Reading => ({
          text: r.text,
          audioPath: r.audioFile,
          readingType: r.readingType
        })
      )
    }));
    this.characters.set(type, chars);

    const levelWords = this.wordsByLevel.get(level) ?? [];
    for (const entry of entries) {
      const words: Word[] = entry.words.map((w) => ({
        word: w.word,
        reading: w.reading,
        meaning: w.meaning,
        kanji: w.kanji,
        audioPath: w.audioFile ?? undefined,
        jlptLevel: level
      }));

      if (words.length > 0) {
        this.wordsByKanji.set(entry.character, words);
        levelWords.push(...words);
      }
    }
    this.wordsByLevel.set(level, levelWords);
  }

  getCharacters(type: string): Character[] {
    return this.characters.get(type) ?? [];
  }

  getAllCharacters(): Map<string, Character[]> {
    return new Map(this.characters);
  }

  getWords(jlptLevel?: 'N5' | 'N4'): Word[] {
    if (!jlptLevel) {
      return [...(this.wordsByLevel.get('N5') ?? []), ...(this.wordsByLevel.get('N4') ?? [])];
    }
    return this.wordsByLevel.get(jlptLevel) ?? [];
  }

  getWordsByKanji(kanji: string): Word[] {
    return this.wordsByKanji.get(kanji) ?? [];
  }

  getWordsByLevels(levels: ('N5' | 'N4')[]): Word[] {
    return levels.flatMap((l) => this.wordsByLevel.get(l) ?? []);
  }
}
