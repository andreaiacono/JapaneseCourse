// ============================================================
// Per-item mastery, accumulated from the kana and kanji quizzes
// ============================================================
//
// The quizzes used to keep score in component state and throw it away on
// unmount, so nothing outside a single sitting knew which characters you
// actually know. This store is the memory: both engines record every answer
// here, and /progress reads it.
//
// It is deliberately NOT a testing surface of its own — a spaced-repetition
// Review page was built once and removed for duplicating the quizzes. This
// only records what the quizzes ask; /progress links back into them.

import { writable, derived, get } from 'svelte/store';
import { browser } from '$app/environment';
import type { Word } from '$lib/models/Word';

const STORAGE_KEY = 'japanesestudy_mastery';

/** Consecutive correct answers needed before an item counts as known. */
export const KNOWN_STREAK = 3;

/**
 * 'grammar' is keyed by grammar point id (grammar-wa-desu); the others by the
 * character or word itself. Grammar is fed only by course lessons — the kana
 * and kanji quizzes don't test it.
 */
export type MasteryKind = 'kana' | 'kanji' | 'word' | 'grammar';
export type MasteryLevel = 'unseen' | 'learning' | 'known' | 'shaky';

export interface ItemStat {
  seen: number;
  correct: number;
  /** Consecutive correct; reset to 0 on a wrong answer. */
  streak: number;
  /** Highest streak ever reached — distinguishes "shaky" from "still learning". */
  best: number;
  /** ISO date (YYYY-MM-DD) of the last answer. */
  last: string;
}

export interface DayActivity {
  answered: number;
  correct: number;
}

export interface MasteryData {
  kana: Record<string, ItemStat>;
  kanji: Record<string, ItemStat>;
  word: Record<string, ItemStat>;
  grammar: Record<string, ItemStat>;
  history: Record<string, DayActivity>;
}

function emptyData(): MasteryData {
  return { kana: {}, kanji: {}, word: {}, grammar: {}, history: {} };
}

function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

function load(): MasteryData {
  if (!browser) return emptyData();
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return { ...emptyData(), ...JSON.parse(stored) };
  } catch {
    // ignore
  }
  return emptyData();
}

export const mastery = writable<MasteryData>(load());

if (browser) {
  mastery.subscribe((v) => localStorage.setItem(STORAGE_KEY, JSON.stringify(v)));
}

function bump(bucket: Record<string, ItemStat>, id: string, correct: boolean, today: string): void {
  const s = bucket[id] ?? { seen: 0, correct: 0, streak: 0, best: 0, last: today };
  s.seen += 1;
  if (correct) {
    s.correct += 1;
    s.streak += 1;
    if (s.streak > s.best) s.best = s.streak;
  } else {
    s.streak = 0;
  }
  s.last = today;
  bucket[id] = s;
}

function bumpHistory(d: MasteryData, correct: boolean, today: string): void {
  const day = d.history[today] ?? { answered: 0, correct: 0 };
  day.answered += 1;
  if (correct) day.correct += 1;
  d.history[today] = day;
}

/** Record one answer. `id` is the character for kana/kanji, the word for words. */
export function record(kind: MasteryKind, id: string, correct: boolean): void {
  if (!id) return;
  const today = todayISO();
  mastery.update((d) => {
    bump(d[kind], id, correct, today);
    bumpHistory(d, correct, today);
    return d;
  });
}

export interface MasteryRef {
  kind: MasteryKind;
  id: string;
}

/**
 * Record one answer that exercised several items at once — a course exercise
 * can drill three kana ("write あおい") or two grammar points. Each item is
 * credited, but the answer counts once in the activity history.
 */
export function recordAll(refs: MasteryRef[], correct: boolean): void {
  const seen = refs.filter((r) => r.id);
  if (seen.length === 0) return;
  const today = todayISO();
  mastery.update((d) => {
    for (const r of seen) bump(d[r.kind], r.id, correct, today);
    bumpHistory(d, correct, today);
    return d;
  });
}

/**
 * Record a kanji-quiz answer. The quiz asks about words, so credit both the
 * word and the kanji that owns it — kanji mastery here means recognising it
 * inside a word, not reciting its readings.
 */
export function recordWord(word: Word, correct: boolean): void {
  const today = todayISO();
  mastery.update((d) => {
    bump(d.word, word.word, correct, today);
    if (word.kanji) bump(d.kanji, word.kanji, correct, today);
    bumpHistory(d, correct, today);
    return d;
  });
}

export function levelOf(stat: ItemStat | undefined): MasteryLevel {
  if (!stat || stat.seen === 0) return 'unseen';
  if (stat.streak >= KNOWN_STREAK) return 'known';
  // Reached "known" before but has since been missed.
  if (stat.best >= KNOWN_STREAK) return 'shaky';
  return 'learning';
}

export function getLevel(kind: MasteryKind, id: string): MasteryLevel {
  return levelOf(get(mastery)[kind][id]);
}

export interface KindSummary {
  known: number;
  shaky: number;
  learning: number;
  unseen: number;
  total: number;
}

/** Summarise a known universe of ids (so "unseen" counts items never quizzed). */
export function summarise(data: MasteryData, kind: MasteryKind, ids: string[]): KindSummary {
  const out: KindSummary = { known: 0, shaky: 0, learning: 0, unseen: 0, total: ids.length };
  for (const id of ids) out[levelOf(data[kind][id])]++;
  return out;
}

/** Items answered wrong most recently first — what /progress offers to re-quiz. */
export function weakest(data: MasteryData, kind: MasteryKind, ids: string[], limit = 20): string[] {
  return ids
    .map((id) => ({ id, s: data[kind][id] }))
    .filter((x) => x.s && x.s.seen > 0 && x.s.streak < KNOWN_STREAK)
    .sort((a, b) => a.s!.correct / a.s!.seen - b.s!.correct / b.s!.seen)
    .slice(0, limit)
    .map((x) => x.id);
}

export const totalAnswered = derived(mastery, ($m) =>
  Object.values($m.history).reduce((n, d) => n + d.answered, 0)
);

/** Wipe all mastery data (offered on the progress page). */
export function resetMastery(): void {
  mastery.set(emptyData());
}
