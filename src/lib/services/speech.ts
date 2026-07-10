// ============================================================
// Japanese text-to-speech via the Web Speech API
// ============================================================
//
// The app's recorded MP3s only cover isolated kana and single kanji
// readings — there are none for whole words or sentences. To voice
// arbitrary Japanese (kana, kanji words, full sentences) on the grammar
// and vocab reference pages we use the browser's built-in SpeechSynthesis,
// which does on-device TTS and needs no assets.
//
// Note on input: always pass the *written* form (with kanji) for phrases,
// not the kana reading — bare kana loses particle context (は as a particle
// must be read "wa", but kana は reads "ha"). The engine resolves this from
// the kanji form.

import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const speechSupported = browser && 'speechSynthesis' in window;

/** The text currently being spoken, or null. Lets buttons show an active state. */
export const speaking = writable<string | null>(null);

let jaVoice: SpeechSynthesisVoice | null = null;
// Hold a reference to the active utterance: Chrome can garbage-collect it
// mid-speech otherwise, which stops playback with no error.
let active: SpeechSynthesisUtterance | null = null;

function refreshVoice(): void {
  if (!speechSupported) return;
  const voices = window.speechSynthesis.getVoices();
  jaVoice =
    voices.find((v) => v.lang === 'ja-JP') ??
    voices.find((v) => v.lang?.toLowerCase().startsWith('ja')) ??
    null;
}

if (speechSupported) {
  refreshVoice();
  // Voices frequently load asynchronously (empty on first getVoices()).
  window.speechSynthesis.onvoiceschanged = refreshVoice;
}

/** Whether a Japanese voice is currently available (may be false until voices load). */
export function hasJapaneseVoice(): boolean {
  return !!jaVoice;
}

/** Speak a Japanese string. Cancels anything currently playing. */
export function speak(text: string): void {
  if (!speechSupported) return;
  const clean = text?.trim();
  if (!clean) return;

  const synth = window.speechSynthesis;
  // Only cancel when something is actually queued — an immediate cancel()→speak()
  // on an idle engine can swallow the new utterance in some Chrome builds.
  if (synth.speaking || synth.pending) synth.cancel();
  // Voices may have loaded since module init; make sure we have the best one.
  if (!jaVoice) refreshVoice();

  const utterance = new SpeechSynthesisUtterance(clean);
  utterance.lang = 'ja-JP';
  if (jaVoice) utterance.voice = jaVoice;
  utterance.rate = 0.9; // a touch slower, easier for learners
  utterance.onstart = () => speaking.set(clean);
  utterance.onend = () => {
    speaking.set(null);
    active = null;
  };
  utterance.onerror = () => {
    speaking.set(null);
    active = null;
  };

  active = utterance;
  synth.speak(utterance);
  // Chrome can get stuck in a paused state after prior interactions.
  if (synth.paused) synth.resume();
}

/** Stop any in-progress speech. */
export function stopSpeaking(): void {
  if (!speechSupported) return;
  window.speechSynthesis.cancel();
  speaking.set(null);
  active = null;
}
