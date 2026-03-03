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

  'chapter-existence-location': {
    id: 'chapter-existence-location',
    slug: 'existence-location',
    title: 'Existence & Location',
    description: 'Say where things and people are using あります, います, and location particles.',
    jlptLevel: 'N5',
    order: 4,
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
    order: 5,
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
    order: 6,
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
    order: 7,
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
    order: 8,
    lessons: [
      'lesson-tai',
      'lesson-te-kudasai',
      'lesson-koto-ga-dekiru',
      'lesson-ta-koto-ga-aru',
    ],
    color: '#5c6bc0',
  },

  'chapter-reading': {
    id: 'chapter-reading',
    slug: 'reading-practice',
    title: 'Reading Practice',
    description: 'Read short tales written entirely in kana and N5 kanji you already know.',
    jlptLevel: 'N5',
    order: 9,
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
    'chapter-existence-location',
    'chapter-verbs-present',
    'chapter-adjectives',
    'chapter-verbs-past-te',
    'chapter-want-ability',
    'chapter-reading',
  ],
};
