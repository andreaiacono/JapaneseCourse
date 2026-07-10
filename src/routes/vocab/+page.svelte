<script lang="ts">
  import { tick } from 'svelte';
  import { n5Vocab } from '$lib/data/course/n5-vocab.js';
  import type { VocabEntry, WordClass } from '$lib/models/Course.js';
  import SpeakButton from '$lib/components/SpeakButton.svelte';

  const vocabList: VocabEntry[] = Object.values(n5Vocab);

  // Filter groups over wordClass, in a sensible order. Only groups with entries are shown.
  const GROUPS: { key: string; label: string; classes: WordClass[] }[] = [
    { key: 'noun', label: 'Nouns', classes: ['noun'] },
    { key: 'verb', label: 'Verbs', classes: ['verb-u', 'verb-ru', 'verb-irregular'] },
    { key: 'adjective', label: 'Adjectives', classes: ['i-adjective', 'na-adjective'] },
    { key: 'adverb', label: 'Adverbs', classes: ['adverb'] },
    { key: 'counter', label: 'Counters', classes: ['counter'] },
    { key: 'other', label: 'Other', classes: ['particle', 'conjunction', 'expression'] },
  ];
  const availableGroups = GROUPS.filter((grp) =>
    vocabList.some((v) => grp.classes.includes(v.wordClass))
  );

  // Short display label + color group for each wordClass badge.
  const CLASS_LABEL: Record<WordClass, string> = {
    noun: 'noun',
    'verb-u': 'u-verb',
    'verb-ru': 'ru-verb',
    'verb-irregular': 'irr. verb',
    'i-adjective': 'i-adj',
    'na-adjective': 'na-adj',
    adverb: 'adverb',
    particle: 'particle',
    conjunction: 'conj.',
    expression: 'expr.',
    counter: 'counter',
  };

  function classGroup(wc: WordClass): string {
    return GROUPS.find((g) => g.classes.includes(wc))?.key ?? 'other';
  }

  let search = '';
  let activeGroup: string | null = null;
  let showRomaji = true;
  const expanded: Record<string, boolean> = {};

  function matchesSearch(v: VocabEntry, q: string): boolean {
    if (!q) return true;
    const needle = q.toLowerCase();
    const haystack = [
      v.word.ja,
      v.word.reading,
      v.word.romaji ?? '',
      v.word.en,
      (v.alternateWritings ?? []).join(' '),
      v.tags.join(' '),
      v.exampleSentences.map((e) => `${e.ja} ${e.furigana ?? ''} ${e.romaji ?? ''} ${e.en}`).join(' '),
    ]
      .join(' ')
      .toLowerCase();
    return haystack.includes(needle);
  }

  $: activeClasses = activeGroup
    ? (availableGroups.find((g) => g.key === activeGroup)?.classes ?? [])
    : null;

  $: filtered = vocabList.filter(
    (v) => (!activeClasses || activeClasses.includes(v.wordClass)) && matchesSearch(v, search)
  );

  function toggle(id: string) {
    expanded[id] = !expanded[id];
  }

  function expandAll() {
    for (const v of filtered) expanded[v.id] = true;
  }

  function collapseAll() {
    for (const v of vocabList) expanded[v.id] = false;
  }

  function entryLabel(id: string): string {
    const v = n5Vocab[id];
    return v ? v.word.ja : id;
  }

  /** Open a linked entry (e.g. antonym) and scroll it into view, clearing filters that would hide it. */
  async function openEntry(id: string) {
    if (!n5Vocab[id]) return;
    search = '';
    activeGroup = null;
    expanded[id] = true;
    await tick();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
</script>

<div class="vocab-page">
  <div class="page-header">
    <div class="title-row">
      <div>
        <h1>N5 Vocabulary</h1>
        <p class="subtitle">{vocabList.length} words for absolute beginners</p>
      </div>
      <button
        class="romaji-toggle"
        class:active={showRomaji}
        on:click={() => (showRomaji = !showRomaji)}
      >
        {showRomaji ? 'Hide Romaji' : 'Show Romaji'}
      </button>
    </div>

    <input
      class="search"
      type="search"
      placeholder="Search word, reading, or meaning…"
      bind:value={search}
      aria-label="Search vocabulary"
    />

    <div class="filters">
      <button class="filter-pill" class:active={activeGroup === null} on:click={() => (activeGroup = null)}>
        All
      </button>
      {#each availableGroups as grp}
        <button
          class="filter-pill"
          class:active={activeGroup === grp.key}
          on:click={() => (activeGroup = activeGroup === grp.key ? null : grp.key)}
        >
          {grp.label}
        </button>
      {/each}
    </div>

    <div class="result-row">
      <span class="result-count">
        {filtered.length}
        {filtered.length === 1 ? 'word' : 'words'}
        {#if activeGroup || search}(filtered){/if}
      </span>
      <div class="bulk-actions">
        <button class="link-btn" on:click={expandAll}>Expand all</button>
        <span class="dot">·</span>
        <button class="link-btn" on:click={collapseAll}>Collapse all</button>
      </div>
    </div>
  </div>

  {#if filtered.length === 0}
    <div class="empty">No words match your search.</div>
  {/if}

  <div class="vocab-grid">
    {#each filtered as v (v.id)}
      <div class="vocab-card" id={v.id} class:open={expanded[v.id]}>
        <div class="card-main">
          <button class="word-toggle" on:click={() => toggle(v.id)} aria-expanded={expanded[v.id]}>
            <div class="word-block">
              <div class="word-line">
                <span class="word-ja japanese">{v.word.ja}</span>
                <span class="class-badge class-{classGroup(v.wordClass)}">{CLASS_LABEL[v.wordClass]}</span>
              </div>
              {#if v.word.reading && v.word.reading !== v.word.ja}
                <span class="word-reading japanese">{v.word.reading}</span>
              {/if}
              {#if v.word.romaji && showRomaji}
                <span class="word-romaji">{v.word.romaji}</span>
              {/if}
              <span class="word-en">{v.word.en}</span>
            </div>
          </button>
          <div class="card-actions">
            <SpeakButton text={v.word.ja} label="Play {v.word.ja}" />
            <button
              class="chevron-btn"
              on:click={() => toggle(v.id)}
              aria-label={expanded[v.id] ? 'Collapse' : 'Expand'}
            >
              <svg
                class="chevron"
                class:rotated={expanded[v.id]}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
              >
                <polyline points="6,9 12,15 18,9" />
              </svg>
            </button>
          </div>
        </div>

        {#if expanded[v.id]}
          <div class="card-details">
            {#if v.alternateWritings && v.alternateWritings.length > 0}
              <div class="alt-writings">
                <span class="detail-label">Also written:</span>
                <span class="japanese">{v.alternateWritings.join('、')}</span>
              </div>
            {/if}

            {#if v.exampleSentences.length > 0}
              <div class="examples">
                {#each v.exampleSentences as ex}
                  <div class="example">
                    <div class="example-head">
                      <p class="example-ja japanese">{ex.ja}</p>
                      <SpeakButton text={ex.ja} label="Play sentence" />
                    </div>
                    {#if ex.furigana}
                      <p class="example-furigana japanese">{ex.furigana}</p>
                    {/if}
                    {#if ex.romaji && showRomaji}
                      <p class="example-romaji">{ex.romaji}</p>
                    {/if}
                    <p class="example-en">{ex.en}</p>
                  </div>
                {/each}
              </div>
            {/if}

            {#if v.antonyms && v.antonyms.some((id) => n5Vocab[id])}
              <div class="links-row">
                <span class="detail-label">Antonym:</span>
                {#each v.antonyms as id}
                  {#if n5Vocab[id]}
                    <button class="link-chip japanese" on:click={() => openEntry(id)}>{entryLabel(id)}</button>
                  {/if}
                {/each}
              </div>
            {/if}

            {#if v.synonyms && v.synonyms.some((id) => n5Vocab[id])}
              <div class="links-row">
                <span class="detail-label">Synonym:</span>
                {#each v.synonyms as id}
                  {#if n5Vocab[id]}
                    <button class="link-chip japanese" on:click={() => openEntry(id)}>{entryLabel(id)}</button>
                  {/if}
                {/each}
              </div>
            {/if}

            {#if v.tags.filter((t) => t !== 'N5').length > 0}
              <div class="tags">
                {#each v.tags.filter((t) => t !== 'N5') as tag}
                  <span class="tag-chip">{tag}</span>
                {/each}
              </div>
            {/if}
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>

<style>
  .vocab-page {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  /* Header */
  .page-header {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: var(--shadow-card);
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .title-row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
  }

  .title-row h1 {
    font-size: 1.6rem;
    font-weight: 800;
    color: var(--text-dark);
    margin: 0 0 0.2rem;
  }

  .subtitle {
    font-size: 0.9rem;
    color: var(--text-muted);
    margin: 0;
  }

  .romaji-toggle {
    flex-shrink: 0;
    background: var(--bg-secondary-btn);
    color: var(--text-secondary-btn);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 0.45rem 0.8rem;
    font-size: 0.82rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.15s;
  }

  .romaji-toggle:hover {
    background: var(--bg-secondary-btn-hover);
  }

  .romaji-toggle.active {
    background: var(--bg-toggle-active);
    color: var(--primary);
    border-color: var(--primary);
  }

  .search {
    width: 100%;
    background: var(--bg-input);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 0.6rem 0.8rem;
    font-size: 0.95rem;
    color: var(--text);
  }

  .search:focus {
    outline: none;
    border-color: var(--border-focus);
  }

  .filters {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .filter-pill {
    background: var(--bg-secondary-btn);
    color: var(--text-secondary);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 0.25rem 0.75rem;
    font-size: 0.8rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s;
  }

  .filter-pill:hover {
    background: var(--bg-secondary-btn-hover);
  }

  .filter-pill.active {
    background: var(--primary);
    color: var(--primary-text);
    border-color: var(--primary);
  }

  .result-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .result-count {
    font-size: 0.82rem;
    color: var(--text-muted);
  }

  .bulk-actions {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  .link-btn {
    background: none;
    border: none;
    color: var(--primary);
    font-size: 0.82rem;
    cursor: pointer;
    padding: 0;
  }

  .link-btn:hover {
    text-decoration: underline;
  }

  .dot {
    color: var(--text-hint);
  }

  .empty {
    text-align: center;
    padding: 2.5rem 1rem;
    color: var(--text-muted);
  }

  /* Grid of cards */
  .vocab-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 0.75rem;
    align-items: start;
  }

  .vocab-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 12px;
    box-shadow: var(--shadow-card);
    overflow: hidden;
    scroll-margin-top: 5rem;
  }

  .vocab-card.open {
    border-color: var(--primary);
  }

  .card-main {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .word-toggle {
    flex: 1;
    min-width: 0;
    display: flex;
    padding: 0.9rem 0 0.9rem 1rem;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    border-radius: 12px 0 0 0;
  }

  .word-toggle:hover {
    background: var(--bg-card-hover);
  }

  .card-actions {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.9rem 0.85rem 0 0.25rem;
  }

  .chevron-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.15rem;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--text-muted);
    border-radius: 6px;
  }

  .chevron-btn:hover {
    background: var(--bg-secondary-btn-hover);
  }

  .word-block {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    min-width: 0;
  }

  .word-line {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .word-ja {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-dark);
    line-height: 1.2;
  }

  .class-badge {
    font-size: 0.68rem;
    font-weight: 700;
    padding: 0.1rem 0.4rem;
    border-radius: 4px;
    white-space: nowrap;
  }

  .class-noun {
    background: var(--bg-toggle-active);
    color: var(--primary);
  }

  .class-verb {
    background: var(--correct-bg);
    color: var(--correct-text);
  }

  .class-adjective {
    background: #fff3e0;
    color: #e65100;
  }

  :global([data-theme='dark']) .class-adjective {
    background: #3e2200;
    color: #ffb74d;
  }

  .class-adverb,
  .class-counter,
  .class-other {
    background: var(--bg-secondary-btn);
    color: var(--text-secondary);
  }

  .word-reading {
    font-size: 0.9rem;
    color: var(--text-muted);
  }

  .word-romaji {
    font-size: 0.82rem;
    font-style: italic;
    color: var(--text-muted);
  }

  .word-en {
    font-size: 0.92rem;
    color: var(--text-secondary);
    margin-top: 0.15rem;
  }

  .chevron {
    flex-shrink: 0;
    margin-top: 0.35rem;
    color: var(--text-muted);
    transition: transform 0.2s;
  }

  .chevron.rotated {
    transform: rotate(180deg);
  }

  /* Details */
  .card-details {
    padding: 0 1rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    border-top: 1px solid var(--border);
    padding-top: 0.85rem;
  }

  .detail-label {
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--text-muted);
  }

  .alt-writings {
    display: flex;
    align-items: baseline;
    gap: 0.4rem;
    font-size: 0.92rem;
    color: var(--text-secondary);
  }

  .examples {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .example {
    background: var(--bg);
    border-left: 3px solid var(--primary);
    border-radius: 6px;
    padding: 0.55rem 0.75rem;
  }

  .example-head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.5rem;
  }

  .example-ja {
    font-size: 1rem;
    color: var(--text-dark);
    margin: 0;
  }

  .example-furigana {
    font-size: 0.82rem;
    color: var(--text-muted);
    margin: 0.15rem 0 0;
  }

  .example-romaji {
    font-size: 0.8rem;
    font-style: italic;
    color: var(--text-muted);
    margin: 0.15rem 0 0;
  }

  .example-en {
    font-size: 0.85rem;
    color: var(--text-secondary);
    margin: 0.3rem 0 0;
  }

  .links-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.4rem;
  }

  .link-chip {
    background: var(--bg-toggle-active);
    color: var(--primary);
    border: none;
    border-radius: 6px;
    padding: 0.2rem 0.55rem;
    font-size: 0.9rem;
    cursor: pointer;
    transition: opacity 0.15s;
  }

  .link-chip:hover {
    opacity: 0.8;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
  }

  .tag-chip {
    background: var(--bg-secondary-btn);
    color: var(--text-muted);
    border-radius: 4px;
    padding: 0.15rem 0.45rem;
    font-size: 0.72rem;
  }

  @media (max-width: 560px) {
    .title-row h1 {
      font-size: 1.3rem;
    }

    .vocab-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
