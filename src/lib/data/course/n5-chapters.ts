import type { Chapter, Unit } from '../../models/Course.js';

export const n5Chapters: Record<string, Chapter> = {
  'chapter-writing': {
    id: 'chapter-writing',
    slug: 'writing-systems',
    title: 'The Writing Systems',
    description: 'Learn hiragana, katakana, dakuten, and yōon characters.',
    jlptLevel: 'N5',
    order: 1,
    lessons: [
      'lesson-hiragana-1',
      'lesson-hiragana-2',
      'lesson-hiragana-3',
      'lesson-hiragana-4',
      'lesson-hiragana-5',
      'lesson-katakana-1',
      'lesson-katakana-2',
      'lesson-dakuten-youon',
    ],
    color: '#1a73e8',
  },

  'chapter-basic-sentences': {
    id: 'chapter-basic-sentences',
    slug: 'basic-sentences',
    title: 'Basic Sentences',
    description: 'Master the fundamental sentence patterns: は〜です, demonstratives, の, and questions.',
    jlptLevel: 'N5',
    order: 2,
    lessons: [
      'lesson-wa-desu',
      'lesson-kore-sore-are',
      'lesson-no-possessive',
      'lesson-ka-question',
    ],
    color: '#0f9d58',
  },

  'chapter-numbers-time': {
    id: 'chapter-numbers-time',
    slug: 'numbers-time',
    title: 'Numbers & Time',
    description: 'Count to 100, tell the time, and talk about days and dates.',
    jlptLevel: 'N5',
    order: 3,
    lessons: [
      'lesson-numbers',
      'lesson-time',
      'lesson-dates',
    ],
    color: '#f4b400',
  },

  'chapter-counters': {
    id: 'chapter-counters',
    slug: 'counters',
    title: 'Counting Things',
    description: 'Count objects, people, and animals with the generic 〜つ counter and the shaped counters 〜人, 〜枚, 〜本, 〜匹, 〜台.',
    jlptLevel: 'N5',
    order: 4,
    lessons: [
      'lesson-counters-tsu',
      'lesson-counters-nin',
      'lesson-counters-objects',
    ],
    color: '#e8710a',
  },

  'chapter-existence-location': {
    id: 'chapter-existence-location',
    slug: 'existence-location',
    title: 'Existence & Location',
    description: 'Say where things and people are using あります, います, and location particles.',
    jlptLevel: 'N5',
    order: 5,
    lessons: [
      'lesson-arimasu-imasu',
      'lesson-ni-de-location',
      'lesson-kosoado-place',
    ],
    color: '#db4437',
  },

  'chapter-verbs-present': {
    id: 'chapter-verbs-present',
    slug: 'verbs-present',
    title: 'Verbs — Present',
    description: 'Learn verb groups, polite present 〜ます, negative 〜ません, and the object particle を.',
    jlptLevel: 'N5',
    order: 6,
    lessons: [
      'lesson-verb-groups',
      'lesson-masu-form',
      'lesson-masen-form',
      'lesson-wo-object',
    ],
    color: '#ab47bc',
  },

  'chapter-adjectives': {
    id: 'chapter-adjectives',
    slug: 'adjectives',
    title: 'Adjectives',
    description: 'Use い-adjectives, な-adjectives, and their past tense forms.',
    jlptLevel: 'N5',
    order: 7,
    lessons: [
      'lesson-i-adjectives',
      'lesson-na-adjectives',
      'lesson-adj-past',
    ],
    color: '#00acc1',
  },

  'chapter-verbs-past-te': {
    id: 'chapter-verbs-past-te',
    slug: 'verbs-past-te',
    title: 'Verbs — Past & Te-form',
    description: 'Form past tense 〜た/〜ました, master the て-form, and use 〜ている.',
    jlptLevel: 'N5',
    order: 8,
    lessons: [
      'lesson-ta-form',
      'lesson-te-form',
      'lesson-te-iru',
    ],
    color: '#ff7043',
  },

  'chapter-want-ability': {
    id: 'chapter-want-ability',
    slug: 'want-ability',
    title: 'Want & Ability',
    description: 'Express wants, requests, ability, and past experience.',
    jlptLevel: 'N5',
    order: 9,
    lessons: [
      'lesson-tai',
      'lesson-te-kudasai',
      'lesson-koto-ga-dekiru',
      'lesson-ta-koto-ga-aru',
    ],
    color: '#5c6bc0',
  },

  'chapter-suggestions-permission': {
    id: 'chapter-suggestions-permission',
    slug: 'suggestions-permission',
    title: 'Suggestions & Permission',
    description: 'Talk about ranges with 〜から/〜まで, make invitations with 〜ましょう/〜ませんか, and give or refuse permission with 〜てもいい/〜てはいけない.',
    jlptLevel: 'N5',
    order: 10,
    lessons: [
      'lesson-kara-made',
      'lesson-invitations',
      'lesson-permission',
    ],
    color: '#00897b',
  },

  'chapter-comparing-connecting': {
    id: 'chapter-comparing-connecting',
    slug: 'comparing-connecting',
    title: 'Comparing & Connecting',
    description: 'Give reasons with 〜から/〜ので, contrast with 〜が/〜けど, and compare things with 〜より, 〜のほうが and 一番.',
    jlptLevel: 'N5',
    order: 11,
    lessons: [
      'lesson-kara-node',
      'lesson-ga-kedo',
      'lesson-comparison',
    ],
    color: '#c2185b',
  },

  'chapter-time-sequence': {
    id: 'chapter-time-sequence',
    slug: 'time-sequence',
    title: 'Time & Sequence',
    description: 'Say when things happen with 〜とき, order events with 〜前に/〜後で, and do two things at once with 〜ながら.',
    jlptLevel: 'N5',
    order: 12,
    lessons: [
      'lesson-toki',
      'lesson-mae-ato',
      'lesson-nagara',
    ],
    color: '#6d4c41',
  },

  'chapter-particles-questions': {
    id: 'chapter-particles-questions',
    slug: 'particles-questions',
    title: 'Particles & Questions',
    description: 'Add the direction particle 〜へ and the listing particle 〜や, ask with question words, and colour speech with 〜ね/〜よ.',
    jlptLevel: 'N5',
    order: 13,
    lessons: [
      'lesson-he-ya',
      'lesson-question-words',
      'lesson-ne-yo',
    ],
    color: '#3949ab',
  },

  'chapter-wants-guesses': {
    id: 'chapter-wants-guesses',
    slug: 'wants-guesses',
    title: 'Wants, Guesses & Degree',
    description: 'Want things with 〜がほしい, ask politely not to with 〜ないでください, guess with 〜でしょう, and say how often with よく/ときどき/あまり/ぜんぜん.',
    jlptLevel: 'N5',
    order: 14,
    lessons: [
      'lesson-hoshii-naide',
      'lesson-deshou-mada',
      'lesson-adverbs',
    ],
    color: '#00838f',
  },

  'chapter-reading': {
    id: 'chapter-reading',
    slug: 'reading-practice',
    title: 'Reading Practice',
    description: 'Read short tales written entirely in kana and N5 kanji you already know.',
    jlptLevel: 'N5',
    order: 15,
    lessons: ['reading-pochi', 'reading-morning', 'reading-shopping'],
    color: '#7c4dff',
  },
};

export const n5Unit: Unit = {
  id: 'unit-n5',
  title: 'N5 Beginner',
  jlptLevel: 'N5',
  description: 'Complete beginner Japanese — from writing systems to expressing wants and ability.',
  order: 1,
  chapters: [
    'chapter-writing',
    'chapter-basic-sentences',
    'chapter-numbers-time',
    'chapter-counters',
    'chapter-existence-location',
    'chapter-verbs-present',
    'chapter-adjectives',
    'chapter-verbs-past-te',
    'chapter-want-ability',
    'chapter-suggestions-permission',
    'chapter-comparing-connecting',
    'chapter-time-sequence',
    'chapter-particles-questions',
    'chapter-wants-guesses',
    'chapter-reading',
  ],
};
