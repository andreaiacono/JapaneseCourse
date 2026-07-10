<script lang="ts">
  import { playText, nowPlaying } from '$lib/services/ttsAudio';

  export let text: string;
  export let label = 'Play pronunciation';

  $: active = $nowPlaying === text?.trim();
</script>

<button
  class="speak-btn"
  class:active
  on:click|stopPropagation={() => playText(text)}
  title={label}
  aria-label={label}
>
  <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 10v4h3.5L11 18V6L6.5 10H3z" fill="currentColor" />
    <path d="M14.5 9a3.5 3.5 0 0 1 0 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
    <path d="M16.5 6.5a7 7 0 0 1 0 11" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" opacity="0.65" />
  </svg>
</button>

<style>
  .speak-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    flex-shrink: 0;
    padding: 0;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg-secondary-btn);
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.15s;
  }

  .speak-btn:hover {
    background: var(--bg-toggle-active);
    color: var(--primary);
    border-color: var(--primary);
  }

  .speak-btn.active {
    background: var(--primary);
    color: var(--primary-text);
    border-color: var(--primary);
  }
</style>
