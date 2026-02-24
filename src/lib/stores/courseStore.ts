import { writable, derived, get } from 'svelte/store';
import { browser } from '$app/environment';
import type { CourseProgress, LessonProgress, LessonStatus } from '$lib/models/Course.js';

const STORAGE_KEY = 'japanesestudy_course';

function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

function defaultProgress(): CourseProgress {
  return {
    userId: generateUUID(),
    createdAt: new Date().toISOString(),
    lastActiveDate: todayISO(),
    lessons: {},
    stats: {
      totalXP: 0,
      currentStreak: 1,
      longestStreak: 1,
      lastActiveDate: todayISO()
    }
  };
}

function loadProgress(): CourseProgress {
  if (!browser) return defaultProgress();
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored) as CourseProgress;
    }
  } catch {
    // ignore
  }
  return defaultProgress();
}

export const courseProgress = writable<CourseProgress>(loadProgress());

if (browser) {
  courseProgress.subscribe((value) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  });
}

// ─────────────────────────────────────────────
// Derived stores
// ─────────────────────────────────────────────

export const totalXP = derived(courseProgress, ($p) => $p.stats.totalXP);
export const currentStreak = derived(courseProgress, ($p) => $p.stats.currentStreak);

// ─────────────────────────────────────────────
// Helper functions
// ─────────────────────────────────────────────

/** Returns the status of a lesson given prerequisite lesson IDs */
export function getLessonStatus(lessonId: string, prerequisites: string[]): LessonStatus {
  const progress = get(courseProgress);
  const lessonProg = progress.lessons[lessonId];

  if (lessonProg?.status === 'completed') return 'completed';
  if (lessonProg?.status === 'in-progress') return 'in-progress';

  // Check if all prerequisites are completed
  const allPrereqsDone = prerequisites.every((prereqId) => {
    return progress.lessons[prereqId]?.status === 'completed';
  });

  if (allPrereqsDone) return 'available';
  return 'locked';
}

/** Returns true if the lesson is available to take (not locked) */
export function isLessonAvailable(lessonId: string, prerequisites: string[]): boolean {
  const status = getLessonStatus(lessonId, prerequisites);
  return status === 'available' || status === 'in-progress' || status === 'completed';
}

/** Call when user starts a lesson */
export function startLesson(lessonId: string): void {
  courseProgress.update((progress) => {
    const existing = progress.lessons[lessonId];
    if (!existing || existing.status === 'available') {
      progress.lessons[lessonId] = {
        lessonId,
        status: 'in-progress',
        attempts: (existing?.attempts ?? 0)
      };
    }
    return progress;
  });
}

/** Call when user completes the quiz. score is 0–100. */
export function markLessonComplete(lessonId: string, score: number): void {
  courseProgress.update((progress) => {
    const existing = progress.lessons[lessonId];
    const attempts = (existing?.attempts ?? 0) + 1;
    const xpEarned = 100 + (score >= 80 ? 50 : 0);

    progress.lessons[lessonId] = {
      lessonId,
      status: 'completed',
      score,
      completedAt: new Date().toISOString(),
      attempts
    };

    progress.stats.totalXP += xpEarned;

    // Update streak
    const today = todayISO();
    const lastActive = progress.stats.lastActiveDate;
    if (lastActive) {
      const last = new Date(lastActive);
      const now = new Date(today);
      const diffDays = Math.round((now.getTime() - last.getTime()) / 86400000);
      if (diffDays === 1) {
        progress.stats.currentStreak += 1;
        if (progress.stats.currentStreak > progress.stats.longestStreak) {
          progress.stats.longestStreak = progress.stats.currentStreak;
        }
      } else if (diffDays > 1) {
        progress.stats.currentStreak = 1;
      }
      // diffDays === 0 means same day, no change to streak
    }
    progress.stats.lastActiveDate = today;
    progress.lastActiveDate = today;

    return progress;
  });
}

/** Returns LessonProgress or undefined */
export function getLessonProgress(lessonId: string): LessonProgress | undefined {
  return get(courseProgress).lessons[lessonId];
}

/** Count completed lessons */
export function getCompletedCount(lessonIds: string[]): number {
  const progress = get(courseProgress);
  return lessonIds.filter((id) => progress.lessons[id]?.status === 'completed').length;
}
