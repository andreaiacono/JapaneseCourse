// ============================================================
// Japanese Language Course — Core Data Model
// ============================================================

/** ISO 639 language tag, e.g. "ja", "en" */
export type LangCode = string;

/** JLPT level, N5 = easiest, N1 = hardest */
export type JLPTLevel = 'N5' | 'N4' | 'N3' | 'N2' | 'N1';

export interface AnnotatedText {
  ja: string;
  reading: string;
  romaji?: string;
  en: string;
}

export interface ExampleSentence {
  ja: string;
  furigana?: string;
  romaji?: string;
  en: string;
  note?: string;
}

export type WordClass =
  | 'noun'
  | 'verb-u'
  | 'verb-ru'
  | 'verb-irregular'
  | 'i-adjective'
  | 'na-adjective'
  | 'adverb'
  | 'particle'
  | 'conjunction'
  | 'expression'
  | 'counter';

export interface VocabEntry {
  id: string;
  word: AnnotatedText;
  alternateWritings?: string[];
  wordClass: WordClass;
  jlptLevel: JLPTLevel;
  tags: string[];
  exampleSentences: ExampleSentence[];
  antonyms?: string[];
  synonyms?: string[];
}

export interface GrammarPoint {
  id: string;
  title: string;
  jlptLevel: JLPTLevel;
  summary: string;
  formation: string;
  explanation: string;
  usageNotes: string[];
  examples: ExampleSentence[];
  relatedPatterns: string[];
  contrastedWith?: { patternId: string; note: string }[];
  tags: string[];
}

export type ExerciseType =
  | 'multiple-choice'
  | 'fill-in-blank'
  | 'sentence-construction';

export interface ExerciseBase {
  id: string;
  type: ExerciseType;
  prompt: string;
  hint?: string;
  explanation?: string;
  targets: string[];
  difficulty: 1 | 2 | 3;
}

export interface MultipleChoiceExercise extends ExerciseBase {
  type: 'multiple-choice';
  question: string;
  choices: { id: string; text: string }[];
  correctChoiceId: string;
}

export interface FillInBlankExercise extends ExerciseBase {
  type: 'fill-in-blank';
  sentenceTemplate: string;
  acceptedAnswers: string[];
  wordBankOptions?: string[];
}

export interface SentenceConstructionExercise extends ExerciseBase {
  type: 'sentence-construction';
  targetSentence: string;
  scrambledTokens: string[];
}

export type Exercise =
  | MultipleChoiceExercise
  | FillInBlankExercise
  | SentenceConstructionExercise;

export interface ConjugationRow {
  form: string;
  affirmative: AnnotatedText;
  negative: AnnotatedText;
}

export type ContentBlock =
  | { type: 'text'; markdown: string }
  | { type: 'example'; sentence: ExampleSentence }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'tip'; markdown: string }
  | { type: 'warning'; markdown: string }
  | { type: 'conjugation-table'; verbId: string; forms: ConjugationRow[] }
  | { type: 'comparison'; items: { label: string; markdown: string }[] };

export interface Lesson {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  jlptLevel: JLPTLevel;
  estimatedMinutes: number;
  contentBlocks: ContentBlock[];
  introduces: string[];
  practiceExercises: Exercise[];
  quiz: Exercise[];
  prerequisites: string[];
  tags: string[];
}

export interface Chapter {
  id: string;
  slug: string;
  title: string;
  description: string;
  jlptLevel: JLPTLevel;
  order: number;
  lessons: string[];
  color?: string;
}

export interface Unit {
  id: string;
  title: string;
  jlptLevel: JLPTLevel;
  description: string;
  order: number;
  chapters: string[];
}

export interface Course {
  id: string;
  title: string;
  version: string;
  targetLanguage: LangCode;
  interfaceLanguage: LangCode;
  units: Unit[];
  chapters: Record<string, Chapter>;
  lessons: Record<string, Lesson>;
  grammarPoints: Record<string, GrammarPoint>;
  vocabEntries: Record<string, VocabEntry>;
}

// ─────────────────────────────────────────────
// User Progress & SRS
// ─────────────────────────────────────────────

export interface SRSData {
  itemId: string;
  itemType: 'kanji' | 'vocab' | 'grammar' | 'kana';
  easeFactor: number;
  interval: number;
  repetitions: number;
  nextReviewDate: string;
  lastReviewDate?: string;
}

export type LessonStatus = 'locked' | 'available' | 'in-progress' | 'completed';

export interface LessonProgress {
  lessonId: string;
  status: LessonStatus;
  score?: number;
  completedAt?: string;
  attempts: number;
}

export interface CourseProgress {
  userId: string;
  createdAt: string;
  lastActiveDate: string;
  lessons: Record<string, LessonProgress>;
  stats: {
    totalXP: number;
    currentStreak: number;
    longestStreak: number;
    lastActiveDate: string;
  };
}
