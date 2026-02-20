<script lang="ts">
  import { audioManager } from '$lib/services/AudioManager';

  export let audioPath: string;
  export let label = '';

  let isPlaying = false;

  async function handleClick() {
    isPlaying = true;
    await audioManager.play(audioPath);
    isPlaying = false;
  }
</script>

<button
  on:click={handleClick}
  class="audio-btn"
  class:has-label={!!label}
  class:playing={isPlaying}
  title="Play pronunciation"
  aria-label="Play pronunciation"
>
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    {#if isPlaying}
      <rect x="6" y="4" width="4" height="16" rx="1" />
      <rect x="14" y="4" width="4" height="16" rx="1" />
    {:else}
      <polygon points="5,3 19,12 5,21" />
    {/if}
  </svg>
  {#if label}<span>{label}</span>{/if}
</button>

<style>
  .audio-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 50%;
    width: 38px;
    height: 38px;
    cursor: pointer;
    transition:
      background 0.15s,
      transform 0.1s;
    flex-shrink: 0;
    justify-content: center;
  }

  .audio-btn.has-label {
    border-radius: 20px;
    padding: 0 1rem;
    width: auto;
    height: 38px;
  }

  .audio-btn:hover {
    background: var(--primary-dark);
  }

  .audio-btn:active {
    transform: scale(0.94);
  }

  .audio-btn.playing {
    background: var(--primary-darker);
  }
</style>
