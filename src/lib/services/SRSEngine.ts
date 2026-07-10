// ============================================================
// Spaced-Repetition Engine — SM-2 (SuperMemo 2) algorithm
// ============================================================
//
// Pure, deterministic functions over SRSData. No I/O, no globals —
// the caller supplies "today" so the scheduling is testable and the
// store (srsStore.ts) owns persistence.

import type { SRSData } from '$lib/models/Course.js';

/** The four review outcomes the UI offers, mapped to SM-2 quality scores. */
export type ReviewGrade = 'again' | 'hard' | 'good' | 'easy';

/** SM-2 quality (0–5). <3 is a lapse. */
const GRADE_QUALITY: Record<ReviewGrade, number> = {
  again: 2,
  hard: 3,
  good: 4,
  easy: 5,
};

const DEFAULT_EASE = 2.5;
const MIN_EASE = 1.3;

// ─────────────────────────────────────────────
// Date helpers (date-only ISO, e.g. "2026-07-10")
// ─────────────────────────────────────────────

/** Format a Date as a local (not UTC) calendar date, e.g. "2026-07-10". */
export function toISODate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

// Parse and serialize both in local time so the arithmetic is timezone-consistent
// (mixing local parse with a UTC serialize would be off by a day east/west of UTC).
function addDays(iso: string, days: number): string {
  const d = new Date(iso + 'T00:00:00');
  d.setDate(d.getDate() + days);
  return toISODate(d);
}

// ─────────────────────────────────────────────
// Core API
// ─────────────────────────────────────────────

/** Fresh SRS state for an item that has never been reviewed. Due immediately. */
export function createSRSData(itemId: string, itemType: SRSData['itemType'], today: string): SRSData {
  return {
    itemId,
    itemType,
    easeFactor: DEFAULT_EASE,
    interval: 0,
    repetitions: 0,
    nextReviewDate: today,
  };
}

/**
 * Apply a review outcome and return the updated SRSData (immutably).
 * `today` is a date-only ISO string; the caller provides it so callers
 * in tests can pin the date.
 */
export function reviewItem(data: SRSData, grade: ReviewGrade, today: string): SRSData {
  const q = GRADE_QUALITY[grade];

  let { easeFactor, interval, repetitions } = data;

  if (q < 3) {
    // Lapse — reset the streak and make it due again the same day.
    repetitions = 0;
    interval = 0;
  } else {
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * easeFactor);
    }
    repetitions += 1;
  }

  // SM-2 ease adjustment. Always applied, even on a lapse.
  easeFactor = easeFactor + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
  if (easeFactor < MIN_EASE) easeFactor = MIN_EASE;

  return {
    ...data,
    easeFactor,
    interval,
    repetitions,
    lastReviewDate: today,
    nextReviewDate: addDays(today, interval),
  };
}

/** True if the item is due for review on or before `today`. */
export function isDue(data: SRSData, today: string): boolean {
  return data.nextReviewDate <= today;
}

/**
 * Human-readable summary of when a given grade would next schedule the item,
 * e.g. "1d", "6d", "2wk". Used to label the grade buttons. Non-mutating.
 */
export function previewInterval(data: SRSData, grade: ReviewGrade, today: string): string {
  const next = reviewItem(data, grade, today);
  const d = next.interval;
  if (d <= 0) return 'today';
  if (d === 1) return '1d';
  if (d < 7) return `${d}d`;
  if (d < 30) return `${Math.round(d / 7)}wk`;
  return `${Math.round(d / 30)}mo`;
}
