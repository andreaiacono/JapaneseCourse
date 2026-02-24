// ============================================================
// Japanese Language Course — Core Data Model
// ============================================================
// Designed for an in-memory PWA with no backend.
// All content is loaded from static JSON files that conform
// to these interfaces.
// ============================================================

// ─────────────────────────────────────────────
// 1. SHARED PRIMITIVES
// ─────────────────────────────────────────────

/** ISO 639 language tag, e.g. "ja", "en" */
type LangCode = string;

/** JLPT level, N5 = easiest, N1 = hardest */
type JLPTLevel = "N5" | "N4" | "N3" | "N2" | "N1";

/**
 * A single Japanese string annotated with its reading and
 * an optional English gloss.  Used everywhere a word or
 * phrase needs to be displayed with furigana support.
 */
interface AnnotatedText {
    ja: string;          // surface form:  食べる
    reading: string;     // hiragana/katakana reading: たべる
    romaji?: string;     // romanisation: taberu
    en: string;          // English gloss: "to eat"
}

/**
 * A full example sentence with progressive disclosure:
 * show/hide romaji and translation independently.
 */
interface ExampleSentence {
    ja: string;           // 私は毎日日本語を勉強します。
    furigana?: string;    // わたしはまいにちにほんごをべんきょうします。
    romaji?: string;
    en: string;
    note?: string;        // e.g. "polite register"
}

// ─────────────────────────────────────────────
// 2. WRITING SYSTEM
// ─────────────────────────────────────────────

type KanaScript = "hiragana" | "katakana";

interface KanaCharacter {
    id: string;           // e.g. "hira-ka", "kata-shi"
    character: string;    // か
    romaji: string;       // ka
    script: KanaScript;
    group: string;        // "k-row", "s-row", "dakuten", "combination", etc.
    strokeOrder?: string; // URL or inline SVG path data
    mnemonicImageUrl?: string;
    examples: AnnotatedText[]; // words using this kana
}

interface KanjiEntry {
    id: string;           // "kanji-食"
    character: string;    // 食
    onyomi: string[];     // ["ショク", "ジキ"]
    kunyomi: string[];    // ["た.べる", "く.う"]
    meaning: string[];    // ["eat", "food", "meal"]
    jlptLevel: JLPTLevel;
    strokeCount: number;
    radicals: string[];   // ["人", "良"]
    strokeOrder?: string; // SVG or URL
    compounds: AnnotatedText[];   // 食べ物, 食事, 朝食 …
    exampleSentences: ExampleSentence[];
    tags?: string[];      // ["food", "daily-life"]
}

// ─────────────────────────────────────────────
// 3. VOCABULARY
// ─────────────────────────────────────────────

type WordClass =
| "noun" | "verb-u" | "verb-ru" | "verb-irregular"
| "i-adjective" | "na-adjective" | "adverb"
| "particle" | "conjunction" | "expression" | "counter";

interface VocabEntry {
    id: string;           // "vocab-taberu"
    word: AnnotatedText;
    alternateWritings?: string[];   // kana-only or kanji variants
    wordClass: WordClass;
    jlptLevel: JLPTLevel;
    tags: string[];       // ["food", "daily-life", "N5"]
    exampleSentences: ExampleSentence[];
    antonyms?: string[];  // vocab IDs
    synonyms?: string[];  // vocab IDs
    srsData?: SRSData;    // populated at runtime, not stored in static data
}

// ─────────────────────────────────────────────
// 4. GRAMMAR
// ─────────────────────────────────────────────

/**
 * A single grammar pattern, e.g. 〜ている, 〜なければならない.
 * Each pattern is the atom of a grammar lesson.
 */
interface GrammarPoint {
    id: string;             // "grammar-te-iru"
    title: string;          // "〜ている (ongoing action / state)"
    jlptLevel: JLPTLevel;
    summary: string;        // one-sentence plain-English description
    formation: string;      // "Verb て-form + いる/います"
    explanation: string;    // markdown-friendly detailed explanation
    usageNotes: string[];   // edge-cases, common mistakes, register notes
    examples: ExampleSentence[];
    relatedPatterns: string[];  // grammar point IDs
    contrastedWith?: {          // explicit contrast: X vs Y
        patternId: string;
        note: string;
    }[];
    tags: string[];         // ["verb", "aspect", "N4"]
}

// ─────────────────────────────────────────────
// 5. EXERCISES & QUIZZES
// ─────────────────────────────────────────────

type ExerciseType =
| "multiple-choice"       // pick the correct answer
| "fill-in-blank"         // type or select a missing word/particle
| "sentence-construction" // drag words into order
| "translation-ja-en"     // translate a Japanese sentence
| "translation-en-ja"     // produce Japanese from English
| "reading"               // read a passage, answer comprehension questions
| "kana-recognition"      // flash-card style kana drill
| "kanji-recognition"     // pick meaning/reading of a kanji
| "listening";             // audio clip → transcription or comprehension

interface ExerciseBase {
    id: string;
    type: ExerciseType;
    prompt: string;           // instruction shown to user
    hint?: string;
    explanation?: string;     // shown after answering
    /** IDs of grammar points / vocab / kanji this exercise targets */
    targets: string[];
    difficulty: 1 | 2 | 3;   // within-lesson granularity
}

interface MultipleChoiceExercise extends ExerciseBase {
    type: "multiple-choice";
    question: string;
    choices: { id: string; text: string }[];
    correctChoiceId: string;
}

interface FillInBlankExercise extends ExerciseBase {
    type: "fill-in-blank";
    /** Use {{blank}} as placeholder, e.g. "毎日 {{blank}} 食べます" */
    sentenceTemplate: string;
    acceptedAnswers: string[];   // normalised, e.g. ["ご飯を", "ごはんを"]
    wordBankOptions?: string[];  // optional word bank; omit for free-type
}

interface SentenceConstructionExercise extends ExerciseBase {
    type: "sentence-construction";
    targetSentence: string;      // correct answer
    scrambledTokens: string[];   // shuffled word/particle tokens
}

interface TranslationExercise extends ExerciseBase {
    type: "translation-ja-en" | "translation-en-ja";
    sourceText: string;
    referenceAnswer: string;
    /** Keywords that must appear in a valid answer (loose grading) */
    requiredKeywords?: string[];
}

/** Union of all exercise shapes */
type Exercise =
| MultipleChoiceExercise
| FillInBlankExercise
| SentenceConstructionExercise
| TranslationExercise;

// ─────────────────────────────────────────────
// 6. LESSON & CHAPTER
// ─────────────────────────────────────────────

/**
 * A Lesson is the smallest teachable unit.
 * One lesson = one concept + drills + a short quiz.
 */
interface Lesson {
    id: string;               // "lesson-te-form-intro"
    slug: string;             // URL-friendly: "te-form-intro"
    title: string;
    subtitle?: string;
    jlptLevel: JLPTLevel;
    estimatedMinutes: number;

    /** Free-form markdown/HTML content blocks, rendered in order */
    contentBlocks: ContentBlock[];

    /** IDs from GrammarPoint, VocabEntry, KanjiEntry, KanaCharacter */
    introduces: string[];

    /** Exercises embedded in the lesson flow (interleaved with content) */
    practiceExercises: Exercise[];

    /** Short quiz at the end of the lesson */
    quiz: Exercise[];

    prerequisites: string[];  // lesson IDs that should be completed first
    tags: string[];
}

type ContentBlock =
| { type: "text";       markdown: string }
| { type: "example";    sentence: ExampleSentence }
| { type: "table";      headers: string[]; rows: string[][] }
| { type: "tip";        markdown: string }
| { type: "warning";    markdown: string }   // common mistake
| { type: "conjugation-table"; verbId: string; forms: ConjugationRow[] }
| { type: "comparison"; items: { label: string; markdown: string }[] };

interface ConjugationRow {
    form: string;    // "Plain present", "Polite past", "て-form" …
    affirmative: AnnotatedText;
    negative: AnnotatedText;
}

/**
 * A Chapter groups lessons thematically and maps to a JLPT level.
 */
interface Chapter {
    id: string;             // "chapter-n5-verbs"
    slug: string;
    title: string;
    description: string;
    jlptLevel: JLPTLevel;
    order: number;          // display order within its level
    lessons: string[];      // ordered lesson IDs
    coverImageUrl?: string;
    color?: string;         // hex accent for UI theming
}

/**
 * A Unit groups chapters by JLPT level / course section.
 */
interface Unit {
    id: string;            // "unit-n5"
    title: string;         // "Beginner — N5"
    jlptLevel: JLPTLevel;
    description: string;
    order: number;
    chapters: string[];    // ordered chapter IDs
}

// ─────────────────────────────────────────────
// 7. FULL COURSE (root object)
// ─────────────────────────────────────────────

interface Course {
    id: string;
    title: string;         // "Complete Japanese"
    version: string;       // semver, e.g. "1.0.0"
    targetLanguage: LangCode;     // "ja"
    interfaceLanguage: LangCode;  // "en"
    units: Unit[];

    // Flat registries — all entities by ID for O(1) lookup
    chapters:       Record<string, Chapter>;
    lessons:        Record<string, Lesson>;
    grammarPoints:  Record<string, GrammarPoint>;
    vocabEntries:   Record<string, VocabEntry>;
    kanjiEntries:   Record<string, KanjiEntry>;
    kanaCharacters: Record<string, KanaCharacter>;
}

// ─────────────────────────────────────────────
// 8. USER PROGRESS & SRS
// ─────────────────────────────────────────────

/**
 * Spaced Repetition System state for a single item.
 * Algorithm: SM-2 (same as Anki).
 * Stored in localStorage / IndexedDB, NOT in static course data.
 */
interface SRSData {
    itemId: string;
    itemType: "kanji" | "vocab" | "grammar" | "kana";
    easeFactor: number;      // SM-2 EF, starts at 2.5
    interval: number;        // days until next review
    repetitions: number;     // consecutive correct reviews
    nextReviewDate: string;  // ISO 8601
    lastReviewDate?: string;
}

type LessonStatus = "locked" | "available" | "in-progress" | "completed";

interface LessonProgress {
    lessonId: string;
    status: LessonStatus;
    score?: number;          // 0–100 from most recent quiz attempt
    completedAt?: string;    // ISO 8601
    attempts: number;
}

interface UserProgress {
    userId: string;          // generated UUID, stored locally
    createdAt: string;
    lastActiveAt: string;
    lessons: Record<string, LessonProgress>;
    srs: Record<string, SRSData>;
    /** Running tally of XP / streak for gamification */
    stats: {
        totalXP: number;
        currentStreak: number;   // consecutive days
        longestStreak: number;
        reviewsDue: number;      // derived, recomputed on load
    };
}

// ─────────────────────────────────────────────
// 9. SAMPLE DATA SKETCH
// ─────────────────────────────────────────────
// Shows how a minimal real entry looks — useful as a template
// for content authors filling in the JSON files.

const sampleGrammarPoint: GrammarPoint = {
    id: "grammar-te-iru",
    title: "〜ている (ongoing action / resultant state)",
    jlptLevel: "N5",
    summary: "Attaches to the て-form of a verb to express an action in progress or a state that results from a completed action.",
    formation: "Verb (て-form) + いる / います",
    explanation: `
## Two core meanings

**1. Action in progress** (like English "-ing"):
> 食べている — is eating

**2. Resultant state** (the action is done; its effect persists):
> 結婚している — is married (= got married, and still is)

The distinction depends on the **Aktionsart** (inherent aspect) of the verb.
Verbs of activity (食べる, 走る) → in-progress.
Verbs of change of state (結婚する, 死ぬ) → resultant state.2
  `.trim(),
    usageNotes: [
        "In casual speech, いる contracts to る: 食べてる.",
        "Do not confuse 知っている (know = resultant state) with 知る (come to know).",
        "The polite form is 〜ています; the plain form is 〜ている.",
    ],
    examples: [
        {
            ja: "今、本を読んでいます。",
            furigana: "いま、ほんをよんでいます。",
            romaji: "Ima, hon wo yonde imasu.",
            en: "I am reading a book right now.",
        },
        {
            ja: "彼女はもう結婚しています。",
            furigana: "かのじょはもうけっこんしています。",
            romaji: "Kanojo wa mou kekkon shite imasu.",
            en: "She is already married.",
        },
    ],
    relatedPatterns: ["grammar-te-form", "grammar-te-ita"],
    contrastedWith: [
        { patternId: "grammar-te-ita", note: "〜ていた is the past equivalent: was doing / had done." },
    ],
    tags: ["verb", "aspect", "progressive", "N5"],
};

const sampleLesson: Lesson = {
    id: "lesson-te-iru-intro",
    slug: "te-iru-intro",
    title: "〜ている: Actions in Progress",
    jlptLevel: "N5",
    estimatedMinutes: 15,
    introduces: ["grammar-te-iru"],
    prerequisites: ["lesson-te-form"],
    tags: ["verb", "grammar", "N5"],
    contentBlocks: [
        {
            type: "text",
            markdown: "In Japanese, you attach **〜ている** to the て-form of a verb to say something is currently happening.",
        },
        {
            type: "example",
            sentence: {
                ja: "今、ご飯を食べています。",
                romaji: "Ima, gohan wo tabete imasu.",
                en: "I am eating right now.",
            },
        },
        {
            type: "tip",
            markdown: "In casual speech you can drop the **い**: 食べてる sounds perfectly natural.",
        },
        {
            type: "conjugation-table",
            verbId: "vocab-taberu",
            forms: [
                {
                    form: "Plain present",
                    affirmative: { ja: "食べている", reading: "たべている", en: "is eating" },
                    negative:    { ja: "食べていない", reading: "たべていない", en: "is not eating" },
                },
                {
                    form: "Polite present",
                    affirmative: { ja: "食べています", reading: "たべています", en: "is eating (polite)" },
                    negative:    { ja: "食べていません", reading: "たべていません", en: "is not eating (polite)" },
                },
            ],
        },
    ],
    practiceExercises: [
        {
            id: "ex-te-iru-1",
            type: "fill-in-blank",
            prompt: "Complete the sentence with the correct form of 飲む.",
            sentenceTemplate: "彼はビールを{{blank}}。",
            acceptedAnswers: ["飲んでいます", "飲んでいる", "飲んでる"],
            hint: "Use 〜ている in polite form.",
            explanation: "飲む → 飲んで (て-form) + います",
            targets: ["grammar-te-iru", "vocab-nomu"],
            difficulty: 1,
        } as FillInBlankExercise,
    ],
    quiz: [
        {
            id: "quiz-te-iru-1",
            type: "multiple-choice",
            prompt: "Which sentence means 'She is studying Japanese'?",
            question: "Choose the correct translation.",
            choices: [
                { id: "a", text: "彼女は日本語を勉強した。" },
                { id: "b", text: "彼女は日本語を勉強している。" },
                { id: "c", text: "彼女は日本語を勉強する。" },
                { id: "d", text: "彼女は日本語を勉強したい。" },
            ],
            correctChoiceId: "b",
            explanation: "〜している = currently doing. した = did (past). する = will do. したい = want to do.",
            targets: ["grammar-te-iru"],
            difficulty: 1,
        } as MultipleChoiceExercise,
    ],
};

// Export everything
export type {
    LangCode, JLPTLevel,
        AnnotatedText, ExampleSentence,
        KanaScript, KanaCharacter, KanjiEntry,
        VocabEntry, WordClass,
        GrammarPoint,
        ExerciseType, Exercise,
        MultipleChoiceExercise, FillInBlankExercise,
        SentenceConstructionExercise, TranslationExercise,
        ContentBlock, ConjugationRow,
        Lesson, Chapter, Unit, Course,
        SRSData, LessonStatus, LessonProgress, UserProgress,
};

export { sampleGrammarPoint, sampleLesson };