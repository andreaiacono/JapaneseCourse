import type { Character } from '$lib/models/Character';
import { getAllReadingTexts } from '$lib/models/Character';

export type QuestionType =
  | 'character_to_reading'
  | 'character_to_meaning'
  | 'reading_to_character'
  | 'audio';

export type InteractionMode = 'selection' | 'typing';

export interface QuizQuestion {
  type: QuestionType;
  interactionMode: InteractionMode;
  question?: string;
  prompt: string;
  options: string[];
  correctAnswer: string;
  character: Character;
  audioPath?: string;
}

export interface QuizProgress {
  total: number;
  answered: number;
  correct: number;
  remaining: number;
}

export interface QuizResults {
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

function pickRandom<T>(arr: T[], n: number, exclude?: Set<T>): T[] {
  const available = exclude ? arr.filter((x) => !exclude.has(x)) : [...arr];
  return shuffleArray(available).slice(0, n);
}

export class QuizEngine {
  private questions: QuizQuestion[] = [];
  private currentIndex = 0;
  private correctCount = 0;
  private answeredCount = 0;

  startQuiz(
    characters: Character[],
    interactionModes: InteractionMode[] = ['selection']
  ): void {
    this.questions = [];
    this.currentIndex = 0;
    this.correctCount = 0;
    this.answeredCount = 0;

    if (characters.length === 0) return;

    for (const char of shuffleArray(characters)) {
      const question = this.generateQuestion(char, characters, interactionModes);
      if (question) this.questions.push(question);
    }
  }

  private generateQuestion(
    char: Character,
    allChars: Character[],
    interactionModes: InteractionMode[]
  ): QuizQuestion | null {
    const isKana = char.characterType === 'hiragana' || char.characterType === 'katakana';
    const mode = interactionModes[Math.floor(Math.random() * interactionModes.length)];

    if (isKana) {
      let q: QuizQuestion | null;
      if (mode === 'typing') {
        q = this.makeCharToReadingQuestion(char, allChars);
      } else {
        const hasAudio = char.readings.length > 0;
        if (hasAudio && Math.random() < 0.5) {
          q = this.makeAudioQuestion(char, allChars);
        } else {
          q = this.makeCharToReadingQuestion(char, allChars);
        }
      }
      if (q) q.interactionMode = mode;
      return q;
    }

    // Non-kana always uses selection mode
    const types: QuestionType[] = ['character_to_reading', 'audio'];
    if (char.meaning) {
      types.push('character_to_meaning', 'reading_to_character');
    }
    const questionType = types[Math.floor(Math.random() * types.length)];

    switch (questionType) {
      case 'character_to_reading':
        return this.makeCharToReadingQuestion(char, allChars);
      case 'character_to_meaning':
        return this.makeCharToMeaningQuestion(char, allChars);
      case 'reading_to_character':
        return this.makeReadingToCharQuestion(char, allChars);
      case 'audio':
        return this.makeAudioQuestion(char, allChars);
    }
  }

  private makeCharToReadingQuestion(char: Character, allChars: Character[]): QuizQuestion | null {
    const isKana = char.characterType === 'hiragana' || char.characterType === 'katakana';
    const correct = isKana ? (char.romaji ?? '') : (() => {
      const readings = getAllReadingTexts(char);
      return readings[Math.floor(Math.random() * readings.length)];
    })();
    if (!correct) return null;

    const prompt = isKana
      ? 'What is the romaji for this character?'
      : 'What is a reading for this kanji?';

    const sameType = allChars.filter(
      (c) => c.characterType === char.characterType && c.character !== char.character
    );

    const options = [correct];
    const shuffled = shuffleArray(sameType);

    for (const c of shuffled) {
      if (options.length >= 4) break;
      const reading = isKana
        ? (c.romaji ?? '')
        : (() => {
            const texts = getAllReadingTexts(c);
            return texts[Math.floor(Math.random() * texts.length)];
          })();
      if (reading && !options.includes(reading)) options.push(reading);
    }

    if (options.length < 4) return null;

    return {
      type: 'character_to_reading',
      interactionMode: 'selection',
      question: char.character,
      prompt,
      options: shuffleArray(options),
      correctAnswer: correct,
      character: char
    };
  }

  private makeCharToMeaningQuestion(char: Character, allChars: Character[]): QuizQuestion | null {
    if (!char.meaning) return null;
    const correct = char.meaning
      .split(',')[0]
      .trim()
      .replace(/^\w/, (c) => c.toUpperCase());

    const sameType = allChars.filter(
      (c) => c.characterType === char.characterType && c.character !== char.character && !!c.meaning
    );

    const options = [correct];
    for (const c of shuffleArray(sameType)) {
      if (options.length >= 4) break;
      const meaning = c.meaning!.split(',')[0].trim().replace(/^\w/, (ch) => ch.toUpperCase());
      if (!options.includes(meaning)) options.push(meaning);
    }

    if (options.length < 4) return null;

    return {
      type: 'character_to_meaning',
      interactionMode: 'selection',
      question: char.character,
      prompt: 'What is the meaning of this kanji?',
      options: shuffleArray(options),
      correctAnswer: correct,
      character: char
    };
  }

  private makeReadingToCharQuestion(char: Character, allChars: Character[]): QuizQuestion | null {
    const readings = getAllReadingTexts(char);
    if (readings.length === 0) return null;
    const reading = readings[Math.floor(Math.random() * readings.length)];
    const correct = char.character;

    const sameType = allChars.filter(
      (c) => c.characterType === char.characterType && c.character !== char.character
    );

    const distractors = pickRandom(
      sameType.map((c) => c.character),
      3,
      new Set([correct])
    );
    if (distractors.length < 3) return null;

    return {
      type: 'reading_to_character',
      interactionMode: 'selection',
      question: reading,
      prompt: `Which character can be read as "${reading}"?`,
      options: shuffleArray([correct, ...distractors]),
      correctAnswer: correct,
      character: char
    };
  }

  private makeAudioQuestion(char: Character, allChars: Character[]): QuizQuestion | null {
    if (char.readings.length === 0) return null;
    const reading = char.readings[Math.floor(Math.random() * char.readings.length)];

    const isKana = char.characterType === 'hiragana' || char.characterType === 'katakana';
    const correct = isKana ? char.character : reading.text;
    const prompt = isKana ? 'Which character is this?' : 'What is this pronunciation?';

    const sameType = allChars.filter(
      (c) => c.characterType === char.characterType && c.character !== char.character
    );

    const options = [correct];
    for (const c of shuffleArray(sameType)) {
      if (options.length >= 4) break;
      const option = isKana
        ? c.character
        : (() => {
            const texts = getAllReadingTexts(c);
            return texts[Math.floor(Math.random() * texts.length)];
          })();
      if (option && !options.includes(option)) options.push(option);
    }

    if (options.length < 4) return null;

    return {
      type: 'audio',
      interactionMode: 'selection',
      prompt,
      options: shuffleArray(options),
      correctAnswer: correct,
      character: char,
      audioPath: reading.audioPath
    };
  }

  getNextQuestion(): QuizQuestion | null {
    if (this.currentIndex >= this.questions.length) return null;
    return this.questions[this.currentIndex++];
  }

  checkAnswer(answer: string): boolean {
    if (this.currentIndex === 0) return false;
    const question = this.questions[this.currentIndex - 1];
    const isCorrect = answer === question.correctAnswer;
    if (isCorrect) this.correctCount++;
    this.answeredCount++;
    return isCorrect;
  }

  checkTypedAnswer(answer: string): boolean {
    if (this.currentIndex === 0) return false;
    const question = this.questions[this.currentIndex - 1];
    const isCorrect = answer.trim().toLowerCase() === question.correctAnswer.trim().toLowerCase();
    if (isCorrect) this.correctCount++;
    this.answeredCount++;
    return isCorrect;
  }

  getProgress(): QuizProgress {
    return {
      total: this.questions.length,
      answered: this.answeredCount,
      correct: this.correctCount,
      remaining: this.questions.length - this.answeredCount
    };
  }

  getResults(): QuizResults {
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
