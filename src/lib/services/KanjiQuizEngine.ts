import type { Word } from '$lib/models/Word';
import { matchesMeaning } from '$lib/models/Word';
import type { DataLoader } from './DataLoader';
import { KanjiSimilarityMap, findSimilarMeanings } from '$lib/data/kanjiSimilarity';

export type KanjiQuizType = 'reading' | 'listening';
export type InteractionMode = 'selection' | 'typing';

export interface KanjiQuizQuestion {
  word: Word;
  quizType: KanjiQuizType;
  interactionMode: InteractionMode;
  correctAnswer: string;
  displayText: string;
  prompt: string;
  audioPath?: string;
  options?: Word[];
}

export interface KanjiQuizProgress {
  total: number;
  answered: number;
  correct: number;
  remaining: number;
}

export interface KanjiQuizResults {
  total: number;
  correct: number;
  incorrect: number;
  percentage: number;
}

function shuffleArray<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export class KanjiQuizEngine {
  private questions: KanjiQuizQuestion[] = [];
  private currentIndex = 0;
  private correctCount = 0;
  private answeredCount = 0;
  private similarityMap = new KanjiSimilarityMap();

  constructor(private dataLoader: DataLoader) {}

  startQuiz(
    quizTypes: KanjiQuizType[],
    interactionModes: InteractionMode[],
    jlptLevels: ('N5' | 'N4')[]
  ): boolean {
    this.questions = [];
    this.currentIndex = 0;
    this.correctCount = 0;
    this.answeredCount = 0;

    let allWords = this.dataLoader.getWordsByLevels(jlptLevels);
    if (allWords.length === 0) return false;

    // If listening-only, restrict to words that have audio
    if (quizTypes.length === 1 && quizTypes[0] === 'listening') {
      allWords = allWords.filter((w) => w.audioPath);
    }
    if (allWords.length === 0) return false;

    const shuffled = shuffleArray(allWords);

    for (const word of shuffled) {
      // For words without audio, fall back to reading if available
      let availableTypes = [...quizTypes];
      if (!word.audioPath) availableTypes = availableTypes.filter((t) => t !== 'listening');
      if (availableTypes.length === 0) continue;

      const quizType = availableTypes[Math.floor(Math.random() * availableTypes.length)];
      const interactionMode = interactionModes[Math.floor(Math.random() * interactionModes.length)];

      const question = this.generateQuestion(word, quizType, interactionMode, allWords);
      if (question) this.questions.push(question);
    }

    return this.questions.length > 0;
  }

  private generateQuestion(
    word: Word,
    quizType: KanjiQuizType,
    interactionMode: InteractionMode,
    allWords: Word[]
  ): KanjiQuizQuestion | null {
    const displayText =
      quizType === 'reading' ? `${word.word} (${word.reading})` : '';
    const prompt =
      quizType === 'reading'
        ? 'What is the meaning of this word?'
        : 'Listen and select the meaning';

    if (interactionMode === 'selection') {
      const options = this.generateDistractors(word, quizType, allWords);
      if (options.length < 9) return null;
      return {
        word,
        quizType,
        interactionMode,
        correctAnswer: word.meaning,
        displayText,
        prompt,
        audioPath: word.audioPath,
        options
      };
    }

    return {
      word,
      quizType,
      interactionMode,
      correctAnswer: word.meaning,
      displayText,
      prompt,
      audioPath: word.audioPath
    };
  }

  private generateDistractors(
    correctWord: Word,
    quizType: KanjiQuizType,
    allWords: Word[]
  ): Word[] {
    const selected: Word[] = [correctWord];
    const usedMeanings = new Set([correctWord.meaning.toLowerCase()]);

    if (quizType === 'reading') {
      // Get words with visually similar kanji
      const similarKanji = this.similarityMap.getVisuallySimilarKanji(correctWord.kanji);
      for (const kanji of similarKanji) {
        if (selected.length >= 9) break;
        const kanjiWords = this.dataLoader.getWordsByKanji(kanji);
        for (const w of kanjiWords) {
          if (!usedMeanings.has(w.meaning.toLowerCase())) {
            selected.push(w);
            usedMeanings.add(w.meaning.toLowerCase());
            if (selected.length >= 5) break;
          }
        }
      }

      // Get words with similar English meanings
      if (selected.length < 9) {
        const allMeanings = [...new Set(allWords.map((w) => w.meaning))];
        const similar = findSimilarMeanings(correctWord.meaning, allMeanings, 3);
        const predefined = this.similarityMap.getSimilarEnglishWords(correctWord.meaning);
        const combined = [...new Set([...similar, ...predefined])];

        for (const meaning of combined) {
          if (selected.length >= 9) break;
          if (!usedMeanings.has(meaning.toLowerCase())) {
            const match = allWords.find((w) => w.meaning.toLowerCase() === meaning.toLowerCase());
            if (match) {
              selected.push(match);
              usedMeanings.add(match.meaning.toLowerCase());
            }
          }
        }
      }
    } else {
      // Listening: get other words with the same kanji
      const sameKanjiWords = this.dataLoader.getWordsByKanji(correctWord.kanji);
      for (const w of sameKanjiWords) {
        if (selected.length >= 6) break;
        if (!usedMeanings.has(w.meaning.toLowerCase()) && w.audioPath) {
          selected.push(w);
          usedMeanings.add(w.meaning.toLowerCase());
        }
      }

      // Fill with visually similar kanji words
      if (selected.length < 9) {
        const similarKanji = this.similarityMap.getVisuallySimilarKanji(correctWord.kanji);
        for (const kanji of similarKanji) {
          if (selected.length >= 9) break;
          const kanjiWords = this.dataLoader.getWordsByKanji(kanji);
          for (const w of kanjiWords) {
            if (!usedMeanings.has(w.meaning.toLowerCase()) && w.audioPath) {
              selected.push(w);
              usedMeanings.add(w.meaning.toLowerCase());
              if (selected.length >= 9) break;
            }
          }
        }
      }
    }

    // Fill remaining with random words
    if (selected.length < 9) {
      const remaining = shuffleArray(allWords.filter((w) => !usedMeanings.has(w.meaning.toLowerCase())));
      for (const w of remaining) {
        if (selected.length >= 9) break;
        selected.push(w);
        usedMeanings.add(w.meaning.toLowerCase());
      }
    }

    return shuffleArray(selected).slice(0, 9);
  }

  getNextQuestion(): KanjiQuizQuestion | null {
    if (this.currentIndex >= this.questions.length) return null;
    return this.questions[this.currentIndex++];
  }

  checkTypedAnswer(answer: string): boolean {
    if (this.currentIndex === 0) return false;
    const question = this.questions[this.currentIndex - 1];
    const isCorrect = matchesMeaning(question.word, answer);
    if (isCorrect) this.correctCount++;
    this.answeredCount++;
    return isCorrect;
  }

  checkSelectedAnswer(selectedWord: Word): boolean {
    if (this.currentIndex === 0) return false;
    const question = this.questions[this.currentIndex - 1];
    const isCorrect =
      selectedWord.meaning.toLowerCase() === question.word.meaning.toLowerCase();
    if (isCorrect) this.correctCount++;
    this.answeredCount++;
    return isCorrect;
  }

  getCurrentCorrectAnswer(): string | null {
    if (this.currentIndex === 0) return null;
    return this.questions[this.currentIndex - 1].correctAnswer;
  }

  getProgress(): KanjiQuizProgress {
    return {
      total: this.questions.length,
      answered: this.answeredCount,
      correct: this.correctCount,
      remaining: this.questions.length - this.answeredCount
    };
  }

  getResults(): KanjiQuizResults {
    const total = this.questions.length;
    return {
      total,
      correct: this.correctCount,
      incorrect: total - this.correctCount,
      percentage: total > 0 ? Math.round((this.correctCount / total) * 100) : 0
    };
  }

  reset(): void {
    this.questions = [];
    this.currentIndex = 0;
    this.correctCount = 0;
    this.answeredCount = 0;
  }
}
