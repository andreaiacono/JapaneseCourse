<script lang="ts">
  import {
    settings,
    JAPANESE_FONTS,
    type JapaneseFontId,
    type TtsVoice
  } from '$lib/stores/settingsStore';
  import { playText, stopPlayback, nowPlaying } from '$lib/services/ttsAudio';

  // Sample sentence used for the font preview and the voice/speed preview.
  // It must exist in the TTS manifest, and it mixes kanji, kana and a particle.
  const SAMPLE = '私の名前は田中です。';

  const VOICES: { id: TtsVoice; label: string; sex: string; note: string }[] = [
    { id: 'nanami', label: 'Nanami', sex: '♀', note: 'Female voice' },
    { id: 'keita', label: 'Keita', sex: '♂', note: 'Male voice' }
  ];

  function setFont(id: JapaneseFontId) {
    settings.update((s) => ({ ...s, japaneseFont: id }));
  }

  function setVoice(v: TtsVoice) {
    stopPlayback();
    settings.update((s) => ({ ...s, ttsVoice: v }));
    playText(SAMPLE);
  }

  function setRate(e: Event) {
    const val = +(e.currentTarget as HTMLInputElement).value;
    settings.update((s) => ({ ...s, ttsRate: val }));
  }

  $: playing = $nowPlaying === SAMPLE;
</script>

<svelte:head>
  <title>Settings — Japanese Study</title>
  <!-- The layout only loads the selected font's stylesheet. Load them all here so
       every preview renders in its real face rather than a fallback. -->
  {#each JAPANESE_FONTS as font}
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family={font.googleFont}&display=swap" />
  {/each}
</svelte:head>

<div class="settings">
  <header class="page-head">
    <h1>Settings</h1>
    <p class="subtitle">Preferences are saved on this device.</p>
  </header>

  <section class="card">
    <div class="section-head">
      <h2>Japanese font</h2>
      <p class="hint">Used everywhere Japanese text is shown.</p>
    </div>

    <div class="font-list">
      {#each JAPANESE_FONTS as font}
        <button
          type="button"
          class="font-option"
          class:active={$settings.japaneseFont === font.id}
          on:click={() => setFont(font.id)}
          aria-pressed={$settings.japaneseFont === font.id}
        >
          <span class="font-sample" style="font-family: {font.stack}">{SAMPLE}</span>
          <span class="font-name">{font.label}</span>
        </button>
      {/each}
    </div>
  </section>

  <section class="card">
    <div class="section-head">
      <h2>Voice</h2>
      <p class="hint">Used for word and sentence audio in Grammar and Vocab.</p>
    </div>

    <div class="voice-list">
      {#each VOICES as voice}
        <button
          type="button"
          class="voice-option"
          class:active={$settings.ttsVoice === voice.id}
          on:click={() => setVoice(voice.id)}
          aria-pressed={$settings.ttsVoice === voice.id}
        >
          <span class="voice-name">{voice.label} <span class="voice-sex">{voice.sex}</span></span>
          <span class="voice-note">{voice.note}</span>
        </button>
      {/each}
    </div>
  </section>

  <section class="card">
    <div class="section-head">
      <h2>Speed</h2>
      <p class="hint">Slows the audio down without changing the pitch.</p>
    </div>

    <div class="speed-row">
      <span class="speed-end">Slower</span>
      <input
        type="range"
        min="0.5"
        max="1.25"
        step="0.05"
        value={$settings.ttsRate}
        on:input={setRate}
        on:change={() => playText(SAMPLE)}
        aria-label="Playback speed"
      />
      <span class="speed-end">Faster</span>
      <span class="speed-val">{$settings.ttsRate.toFixed(2)}×</span>
    </div>
  </section>

  <div class="preview-bar">
    <button type="button" class="preview-btn" class:playing on:click={() => playText(SAMPLE)}>
      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 10v4h3.5L11 18V6L6.5 10H3z" fill="currentColor" />
        <path
          d="M14.5 9a3.5 3.5 0 0 1 0 6"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
        />
        <path
          d="M16.5 6.5a7 7 0 0 1 0 11"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
          opacity="0.65"
        />
      </svg>
      {playing ? 'Playing…' : 'Preview'}
    </button>
    <span class="preview-text">{SAMPLE}</span>
  </div>
</div>

<style>
  .settings {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    max-width: 720px;
    margin: 0 auto;
  }

  .page-head h1 {
    margin: 0;
    font-size: 1.6rem;
    color: var(--text-dark);
  }

  .subtitle {
    margin: 0.25rem 0 0;
    color: var(--text-muted);
    font-size: 0.9rem;
  }

  .card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 1.1rem 1.2rem;
    box-shadow: var(--shadow-card);
  }

  .section-head h2 {
    margin: 0;
    font-size: 1.05rem;
    color: var(--text-dark);
  }

  .hint {
    margin: 0.2rem 0 0;
    font-size: 0.85rem;
    color: var(--text-muted);
  }

  .font-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 0.9rem;
  }

  .font-option {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.7rem 0.9rem;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    cursor: pointer;
    text-align: left;
    transition: all 0.15s;
  }

  .font-option:hover {
    background: var(--bg-card-hover);
  }

  .font-option.active {
    background: var(--bg-toggle-active);
    border-color: var(--primary);
  }

  .font-sample {
    font-size: 1.3rem;
    color: var(--text);
    line-height: 1.4;
  }

  .font-option.active .font-sample,
  .font-option.active .font-name {
    color: var(--primary);
  }

  .font-name {
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--text-secondary);
    white-space: nowrap;
  }

  .voice-list {
    display: flex;
    gap: 0.6rem;
    margin-top: 0.9rem;
    flex-wrap: wrap;
  }

  .voice-option {
    flex: 1;
    min-width: 140px;
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    padding: 0.7rem 0.9rem;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    cursor: pointer;
    text-align: left;
    transition: all 0.15s;
  }

  .voice-option:hover {
    background: var(--bg-card-hover);
  }

  .voice-option.active {
    background: var(--bg-toggle-active);
    border-color: var(--primary);
  }

  .voice-name {
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--text-dark);
  }

  .voice-option.active .voice-name {
    color: var(--primary);
  }

  .voice-sex {
    font-weight: 400;
    opacity: 0.75;
  }

  .voice-note {
    font-size: 0.8rem;
    color: var(--text-muted);
  }

  .speed-row {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    margin-top: 0.9rem;
  }

  .speed-row input[type='range'] {
    flex: 1;
    accent-color: var(--primary);
    min-width: 100px;
  }

  .speed-end {
    font-size: 0.78rem;
    color: var(--text-muted);
    white-space: nowrap;
  }

  .speed-val {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-secondary);
    font-variant-numeric: tabular-nums;
    min-width: 4ch;
    text-align: right;
  }

  .preview-bar {
    display: flex;
    align-items: center;
    gap: 0.9rem;
    padding: 0.8rem 1rem;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 12px;
  }

  .preview-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.5rem 0.9rem;
    background: var(--primary);
    color: var(--primary-text);
    border: none;
    border-radius: 8px;
    font-size: 0.88rem;
    font-weight: 600;
    cursor: pointer;
    flex-shrink: 0;
    transition: background 0.15s;
  }

  .preview-btn:hover {
    background: var(--primary-dark);
  }

  .preview-btn.playing {
    background: var(--primary-darker);
  }

  .preview-text {
    font-family: var(--japanese-font);
    font-size: 1.15rem;
    color: var(--text);
  }
</style>
