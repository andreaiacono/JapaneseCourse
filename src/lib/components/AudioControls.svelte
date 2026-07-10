<script lang="ts">
  import { settings, type TtsVoice } from '$lib/stores/settingsStore';
  import { stopPlayback } from '$lib/services/ttsAudio';

  function setVoice(v: TtsVoice) {
    stopPlayback();
    settings.update((s) => ({ ...s, ttsVoice: v }));
  }

  function setRate(e: Event) {
    const val = +(e.currentTarget as HTMLInputElement).value;
    settings.update((s) => ({ ...s, ttsRate: val }));
  }
</script>

<div class="audio-controls">
  <div class="voice-seg" role="group" aria-label="Voice">
    <button
      type="button"
      class:active={$settings.ttsVoice === 'nanami'}
      on:click={() => setVoice('nanami')}
    >
      Nanami <span class="voice-sex">♀</span>
    </button>
    <button
      type="button"
      class:active={$settings.ttsVoice === 'keita'}
      on:click={() => setVoice('keita')}
    >
      Keita <span class="voice-sex">♂</span>
    </button>
  </div>

  <label class="speed">
    <span class="speed-label">Speed</span>
    <input
      type="range"
      min="0.5"
      max="1.25"
      step="0.05"
      value={$settings.ttsRate}
      on:input={setRate}
      aria-label="Playback speed"
    />
    <span class="speed-val">{$settings.ttsRate.toFixed(2)}×</span>
  </label>
</div>

<style>
  .audio-controls {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.75rem 1rem;
    padding: 0.6rem 0.8rem;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 10px;
  }

  .voice-seg {
    display: inline-flex;
    border: 1px solid var(--border);
    border-radius: 8px;
    overflow: hidden;
  }

  .voice-seg button {
    background: var(--bg-card);
    color: var(--text-secondary);
    border: none;
    padding: 0.35rem 0.75rem;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.15s;
  }

  .voice-seg button + button {
    border-left: 1px solid var(--border);
  }

  .voice-seg button:hover {
    background: var(--bg-card-hover);
  }

  .voice-seg button.active {
    background: var(--bg-toggle-active);
    color: var(--primary);
    font-weight: 700;
  }

  .voice-sex {
    opacity: 0.75;
    font-weight: 400;
  }

  .speed {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex: 1;
    min-width: 180px;
  }

  .speed-label {
    font-size: 0.85rem;
    color: var(--text-secondary);
    font-weight: 600;
  }

  .speed input[type='range'] {
    flex: 1;
    accent-color: var(--primary);
    min-width: 90px;
  }

  .speed-val {
    font-size: 0.82rem;
    color: var(--text-muted);
    font-variant-numeric: tabular-nums;
    min-width: 3ch;
    text-align: right;
  }
</style>
