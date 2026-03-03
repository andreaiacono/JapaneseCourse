import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const JAPANESE_FONTS = [
  {
    id: 'noto-sans',
    label: 'Noto Sans JP',
    stack: "'Noto Sans JP', 'Yu Gothic', 'Hiragino Sans', 'Meiryo', sans-serif",
    googleFont: 'Noto+Sans+JP:wght@400;700'
  },
  {
    id: 'noto-serif',
    label: 'Noto Serif JP',
    stack: "'Noto Serif JP', 'Yu Mincho', 'Hiragino Mincho ProN', serif",
    googleFont: 'Noto+Serif+JP:wght@400;700'
  },
  {
    id: 'biz-udgothic',
    label: 'BIZ UDPGothic',
    stack: "'BIZ UDPGothic', 'Noto Sans JP', sans-serif",
    googleFont: 'BIZ+UDPGothic:wght@400;700'
  },
  {
    id: 'zen-kaku',
    label: 'Zen Kaku Gothic',
    stack: "'Zen Kaku Gothic New', 'Noto Sans JP', sans-serif",
    googleFont: 'Zen+Kaku+Gothic+New:wght@400;700'
  },
  {
    id: 'sawarabi-mincho',
    label: 'Sawarabi Mincho',
    stack: "'Sawarabi Mincho', 'Yu Mincho', 'Hiragino Mincho ProN', serif",
    googleFont: 'Sawarabi+Mincho'
  }
] as const;

export type JapaneseFontId = (typeof JAPANESE_FONTS)[number]['id'];

export interface Settings {
  autoPlayAudio: boolean;
  japaneseFont: JapaneseFontId;
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
  japaneseFont: 'noto-sans',
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
