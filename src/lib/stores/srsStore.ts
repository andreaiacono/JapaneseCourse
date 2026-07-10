import { writable, get } from 'svelte/store';
import { browser } from '$app/environment';
import type { SRSData } from '$lib/models/Course.js';
import {
  createSRSData,
  reviewItem,
  isDue,
  toISODate,
  type ReviewGrade,
} from '$lib/services/SRSEngine.js';

const STORAGE_KEY = 'japanesestudy_srs';

/** Map of itemId → SRSData for every item the user has ever reviewed. */
type SRSMap = Record<string, SRSData>;

function loadMap(): SRSMap {
  if (!browser) return {};
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored) as SRSMap;
  } catch {
    // ignore corrupt storage
  }
  return {};
}

export const srsMap = writable<SRSMap>(loadMap());

if (browser) {
  srsMap.subscribe((value) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  });
}

/** Today as a date-only ISO string. */
export function today(): string {
  return toISODate(new Date());
}

/** SRSData for an item, or undefined if it has never been reviewed. */
export function getSRS(itemId: string): SRSData | undefined {
  return get(srsMap)[itemId];
}

/**
 * Grade an item. Creates fresh SRSData on first review, then applies the
 * SM-2 update and persists it. Returns the updated SRSData.
 */
export function gradeItem(
  itemId: string,
  itemType: SRSData['itemType'],
  grade: ReviewGrade
): SRSData {
  const now = today();
  const current = getSRS(itemId) ?? createSRSData(itemId, itemType, now);
  const updated = reviewItem(current, grade, now);
  srsMap.update((m) => ({ ...m, [itemId]: updated }));
  return updated;
}

/** IDs of items (of the given type) that exist in the map and are due today. */
export function getDueIds(itemType: SRSData['itemType'], allIds: string[]): string[] {
  const now = today();
  const m = get(srsMap);
  return allIds.filter((id) => {
    const data = m[id];
    return data && data.itemType === itemType && isDue(data, now);
  });
}

/** IDs of items (of the given type) the user has never reviewed. */
export function getNewIds(itemType: SRSData['itemType'], allIds: string[]): string[] {
  const m = get(srsMap);
  return allIds.filter((id) => !m[id]);
}

/** Count of items of a type that have been learned (seen at least once). */
export function getLearnedCount(itemType: SRSData['itemType'], allIds: string[]): number {
  const m = get(srsMap);
  return allIds.filter((id) => m[id]?.itemType === itemType).length;
}
