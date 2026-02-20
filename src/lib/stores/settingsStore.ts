import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export interface Settings {
  autoPlayAudio: boolean;
  quizSettings: {
    defaultQuestionCount: number;
    selectedTypes: string[];
  };
  kanjiQuizSettings: {
    defaultQuestionCount: number;
    quizType: 'reading' | 'listening';
    interactionMode: 'selection' | 'typing';
    selectedLevels: ('N5' | 'N4')[];
  };
}

const defaultSettings: Settings = {
  autoPlayAudio: true,
  quizSettings: {
    defaultQuestionCount: 10,
    selectedTypes: ['hiragana']
  },
  kanjiQuizSettings: {
    defaultQuestionCount: 10,
    quizType: 'reading',
    interactionMode: 'selection',
    selectedLevels: ['N5']
  }
};

function loadSettings(): Settings {
  if (!browser) return defaultSettings;
  try {
    const stored = localStorage.getItem('japanesestudy_settings');
    if (stored) {
      return { ...defaultSettings, ...JSON.parse(stored) };
    }
  } catch {
    // ignore
  }
  return defaultSettings;
}

export const settings = writable<Settings>(loadSettings());

if (browser) {
  settings.subscribe((value) => {
    localStorage.setItem('japanesestudy_settings', JSON.stringify(value));
  });
}
