<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { audioManager } from '$lib/services/AudioManager';
  import type { Character } from '$lib/models/Character';
  import { getKunReadings, getOnReadings } from '$lib/models/Character';

  const LEVELS: ('N5' | 'N4')[] = ['N5', 'N4'];

  let selectedLevel: 'N5' | 'N4' = 'N5';
  let kanjiByLevel: Record<'N5' | 'N4', Character[]> = { N5: [], N4: [] };

  onMount(async () => {
    const { dataLoader } = await import('$lib/services/loader');
    kanjiByLevel = {
      N5: dataLoader.getCharacters('kanji_n5'),
      N4: dataLoader.getCharacters('kanji_n4'),
    };
  });

  onDestroy(() => audioManager.stop());

  $: kanji = kanjiByLevel[selectedLevel];

  function playHover(char: Character) {
    const audio = char.readings[0]?.audioPath;
    if (audio) audioManager.play(audio);
  }
</script>

<div class="page">
  <div class="page-header">
    <h2>Kanji Reference</h2>
    <p class="subtitle">Hover over a character to hear its reading</p>
  </div>

  <div class="level-tabs">
    {#each LEVELS as level}
      <button
        class="level-tab"
        class:active={selectedLevel === level}
        on:click={() => (selectedLevel = level)}
      >
        {level}
        <span class="count">({kanjiByLevel[level].length})</span>
      </button>
    {/each}
  </div>

  <div class="kanji-grid">
    {#each kanji as char (char.character)}
      {@const kun = getKunReadings(char)}
      {@const on = getOnReadings(char)}
      {@const hasAudio = char.readings.length > 0}
      <button
        class="kanji-card"
        class:has-audio={hasAudio}
        on:mouseenter={() => playHover(char)}
        tabindex="-1"
      >
        <span class="kanji-char japanese">{char.character}</span>
        <span class="kanji-meaning">{char.meaning ?? '—'}</span>
        {#if kun.length > 0}
          <span class="readings kun japanese">{kun.map((r) => r.text).join('、')}</span>
        {/if}
        {#if on.length > 0}
          <span class="readings on japanese">{on.map((r) => r.text).join('、')}</span>
        {/if}
      </button>
    {/each}
  </div>
</div>

<style>
  .page {
    max-width: 960px;
    margin: 0 auto;
  }

  .page-header {
    margin-bottom: 1.25rem;
  }

  h2 {
    font-size: 1.6rem;
    margin-bottom: 0.2rem;
  }

  .subtitle {
    color: var(--text-muted);
    font-size: 0.9rem;
  }

  .level-tabs {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .level-tab {
    padding: 0.45rem 1.1rem;
    border-radius: 20px;
    border: 1.5px solid var(--border);
    background: var(--bg-card);
    color: var(--text-secondary);
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.12s, border-color 0.12s, color 0.12s;
  }

  .level-tab:hover {
    background: var(--bg-toggle-active);
    border-color: var(--primary);
    color: var(--primary);
  }

  .level-tab.active {
    background: var(--primary);
    border-color: var(--primary);
    color: white;
  }

  .count {
    font-size: 0.8em;
    font-weight: 400;
    opacity: 0.8;
  }

  .kanji-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(105px, 1fr));
    gap: 6px;
  }

  .kanji-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.6rem 0.3rem 0.5rem;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 7px;
    cursor: default;
    transition: background 0.1s, border-color 0.1s;
    box-shadow: var(--shadow-card);
    gap: 0.15rem;
    min-height: 115px;
    text-align: center;
  }

  .kanji-card.has-audio {
    cursor: pointer;
  }

  .kanji-card.has-audio:hover {
    background: var(--bg-toggle-active);
    border-color: var(--border-focus);
  }

  .kanji-char {
    font-size: 2.8rem;
    line-height: 1.1;
    color: var(--text-dark);
  }

  .kanji-meaning {
    font-size: 0.82rem;
    color: var(--text-secondary);
    font-weight: 500;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0 0.2rem;
  }

  .readings {
    font-size: 0.76rem;
    color: var(--text-muted);
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0 0.2rem;
    line-height: 1.3;
  }

  .readings.on {
    color: var(--text-hint);
  }

  @media (max-width: 480px) {
    .kanji-grid {
      grid-template-columns: repeat(auto-fill, minmax(85px, 1fr));
      gap: 4px;
    }

    .kanji-char {
      font-size: 2.2rem;
    }
  }
</style>
