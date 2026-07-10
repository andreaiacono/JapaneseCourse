// ============================================================
// Playback of pre-generated neural TTS clips (grammar + vocab)
// ============================================================
//
// Plays the committed MP3s produced by scripts/generate-tts.mjs. The voice
// and playback speed come from settings; speed is applied live via
// <audio>.playbackRate with pitch preserved, so slowing down doesn't
// distort the voice. Falls back to the browser's Web Speech API only if a
// clip is somehow missing.

import { get, writable } from 'svelte/store';
import { base } from '$app/paths';
import { settings } from '$lib/stores/settingsStore';
import ttsManifest from '$lib/data/tts-manifest.json';
import { speak as webSpeak, speechSupported } from './speech';

const manifest = ttsManifest as Record<string, string>;

/** The text currently playing (for button active state), or null. */
export const nowPlaying = writable<string | null>(null);

let audio: HTMLAudioElement | null = null;

/** Whether a pre-generated clip exists for this text. */
export function hasClip(text: string): boolean {
  return !!manifest[text?.trim()];
}

/** Play the clip for a Japanese string using the current voice and speed. */
export function playText(text: string): void {
  const clean = text?.trim();
  if (!clean) return;

  const hash = manifest[clean];
  if (!hash) {
    // No committed clip — fall back to browser TTS (may be silent without a voice).
    if (speechSupported) webSpeak(clean);
    return;
  }

  const s = get(settings);
  const voice = s.ttsVoice ?? 'nanami';
  const rate = s.ttsRate ?? 0.9;

  if (audio) {
    audio.onended = null;
    audio.onerror = null;
    audio.pause();
  }

  audio = new Audio(`${base}/audio/tts/${voice}/${hash}.mp3`);
  // Slow/speed playback without shifting pitch.
  const a = audio as HTMLAudioElement & {
    preservesPitch?: boolean;
    mozPreservesPitch?: boolean;
    webkitPreservesPitch?: boolean;
  };
  a.preservesPitch = true;
  a.mozPreservesPitch = true;
  a.webkitPreservesPitch = true;
  audio.playbackRate = rate;
  audio.onplay = () => nowPlaying.set(clean);
  audio.onended = () => nowPlaying.set(null);
  audio.onerror = () => nowPlaying.set(null);
  audio.play().catch(() => nowPlaying.set(null));
}

/** Stop any in-progress playback. */
export function stopPlayback(): void {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
  nowPlaying.set(null);
}
