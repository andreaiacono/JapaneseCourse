<script lang="ts">
  import type { Character } from '$lib/models/Character';
  import { getKunReadings, getOnReadings } from '$lib/models/Character';
  import AudioButton from './AudioButton.svelte';

  export let character: Character;

  $: isKanji = character.characterType.startsWith('kanji');
  $: kunReadings = isKanji ? getKunReadings(character) : [];
  $: onReadings = isKanji ? getOnReadings(character) : [];
</script>

<div class="character-display">
  <div class="character japanese">{character.character}</div>

  {#if character.meaning}
    <div class="info">{character.meaning}</div>
  {:else if character.romaji}
    <div class="info">{character.romaji}</div>
  {/if}

  <div class="readings">
    {#if isKanji}
      {#if kunReadings.length > 0}
        <div class="reading-group">
          <h3 class="reading-label">Kun-yomi</h3>
          {#each kunReadings as reading}
            <div class="reading-row">
              <span class="japanese reading-text">{reading.text}</span>
              <AudioButton audioPath={reading.audioPath} />
            </div>
          {/each}
        </div>
      {/if}

      {#if onReadings.length > 0}
        <div class="reading-group">
          <h3 class="reading-label">On-yomi</h3>
          {#each onReadings as reading}
            <div class="reading-row">
              <span class="japanese reading-text">{reading.text}</span>
              <AudioButton audioPath={reading.audioPath} />
            </div>
          {/each}
        </div>
      {/if}
    {:else}
      {#each character.readings as reading}
        <div class="reading-row">
          <span class="reading-text">{reading.text}</span>
          <AudioButton audioPath={reading.audioPath} />
        </div>
      {/each}
    {/if}
  </div>
</div>

<style>
  .character-display {
    text-align: center;
    padding: 2rem 1rem;
  }

  .character {
    font-size: 9rem;
    line-height: 1.1;
    margin-bottom: 0.75rem;
    color: var(--text-dark);
  }

  .info {
    font-size: 1.6rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
  }

  .readings {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
  }

  .reading-group {
    width: 100%;
    max-width: 360px;
  }

  .reading-label {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 0.5rem;
  }

  .reading-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    margin: 0.4rem 0;
  }

  .reading-text {
    font-size: 1.25rem;
    min-width: 4rem;
    text-align: right;
  }
</style>
