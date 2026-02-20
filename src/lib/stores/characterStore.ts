import { writable, derived } from 'svelte/store';
import type { Character } from '$lib/models/Character';

export const characters = writable<Map<string, Character[]>>(new Map());
export const isLoading = writable(true);
export const loadError = writable<string | null>(null);

export const currentType = writable<string>('hiragana');
export const currentIndex = writable<number>(0);

export const currentCharacters = derived(
  [characters, currentType],
  ([$characters, $currentType]) => $characters.get($currentType) ?? []
);

export const currentCharacter = derived(
  [currentCharacters, currentIndex],
  ([$currentCharacters, $currentIndex]) => $currentCharacters[$currentIndex] ?? null
);

export async function initData(): Promise<void> {
  isLoading.set(true);
  try {
    const { dataLoader } = await import('$lib/services/loader');
    characters.set(dataLoader.getAllCharacters());
  } catch (err) {
    loadError.set(err instanceof Error ? err.message : 'Failed to load data');
  } finally {
    isLoading.set(false);
  }
}
