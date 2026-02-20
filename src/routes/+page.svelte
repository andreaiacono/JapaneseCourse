<script lang="ts">
  import CharacterDisplay from '$lib/components/CharacterDisplay.svelte';
  import {
    currentType,
    currentIndex,
    currentCharacter,
    currentCharacters
  } from '$lib/stores/characterStore';

  const CHARACTER_TYPES = [
    { value: 'hiragana', label: 'Hiragana' },
    { value: 'katakana', label: 'Katakana' },
    { value: 'kanji_n5', label: 'Kanji N5' },
    { value: 'kanji_n4', label: 'Kanji N4' }
  ];

  function handleTypeChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    currentType.set(target.value);
    currentIndex.set(0);
  }

  function handlePrevious() {
    currentIndex.update((i) => Math.max(0, i - 1));
  }

  function handleNext() {
    currentIndex.update((i) => Math.min($currentCharacters.length - 1, i + 1));
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') handlePrevious();
    else if (event.key === 'ArrowRight') handleNext();
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="study-view">
  <div class="controls">
    <select value={$currentType} on:change={handleTypeChange} class="type-select">
      {#each CHARACTER_TYPES as { value, label }}
        <option {value}>{label}</option>
      {/each}
    </select>

    <span class="progress-info">
      {$currentIndex + 1} / {$currentCharacters.length}
    </span>
  </div>

  <div class="card">
    {#if $currentCharacter}
      <CharacterDisplay character={$currentCharacter} />
    {:else}
      <div class="empty">No characters available</div>
    {/if}
  </div>

  <div class="navigation">
    <button on:click={handlePrevious} disabled={$currentIndex === 0} class="nav-btn">
      Previous
    </button>
    <button
      on:click={handleNext}
      disabled={$currentIndex >= $currentCharacters.length - 1}
      class="nav-btn"
    >
      Next
    </button>
  </div>

  <p class="keyboard-hint">Use arrow keys to navigate</p>
</div>

<style>
  .study-view {
    max-width: 700px;
    margin: 0 auto;
  }

  .controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    gap: 1rem;
  }

  .type-select {
    padding: 0.55rem 1rem;
    font-size: 1rem;
    border: 2px solid var(--border);
    border-radius: 8px;
    background: var(--bg-input);
    color: var(--text);
    cursor: pointer;
    transition: border-color 0.15s;
  }

  .type-select:focus {
    outline: none;
    border-color: var(--border-focus);
  }

  .progress-info {
    font-size: 1rem;
    color: var(--text-muted);
  }

  .card {
    background: var(--bg-card);
    border-radius: 12px;
    box-shadow: var(--shadow-card);
    min-height: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .navigation {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1.5rem;
  }

  .nav-btn {
    padding: 0.7rem 2rem;
    font-size: 1rem;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.15s;
  }

  .nav-btn:hover:not(:disabled) {
    background: var(--primary-dark);
  }

  .nav-btn:disabled {
    background: var(--disabled-bg);
    cursor: not-allowed;
  }

  .empty {
    padding: 4rem;
    text-align: center;
    color: var(--text-hint);
  }

  .keyboard-hint {
    text-align: center;
    font-size: 0.8rem;
    color: var(--text-hint);
    margin-top: 0.75rem;
  }
</style>
