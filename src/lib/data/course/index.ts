import type { Course } from '../../models/Course.js';
import { n5Grammar } from './n5-grammar.js';
import { n5Vocab } from './n5-vocab.js';
import { n5Lessons } from './n5-lessons.js';
import { n5Chapters, n5Unit } from './n5-chapters.js';

export const n5Course: Course = {
  id: 'course-japanese-n5',
  title: 'Japanese N5',
  version: '1.0.0',
  targetLanguage: 'ja',
  interfaceLanguage: 'en',
  units: [n5Unit],
  chapters: n5Chapters,
  lessons: n5Lessons,
  grammarPoints: n5Grammar,
  vocabEntries: n5Vocab,
};
