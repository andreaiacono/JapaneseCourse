<script lang="ts">
  import { tick } from 'svelte';
  import { n5Grammar } from '$lib/data/course/n5-grammar.js';
  import type { GrammarPoint } from '$lib/models/Course.js';
  import SpeakButton from '$lib/components/SpeakButton.svelte';

  const grammarList: GrammarPoint[] = Object.values(n5Grammar);

  // Curated category filters (only those that actually occur), in a sensible order.
  const CATEGORY_ORDER = [
    'particle', 'verb', 'adjective', 'na-adjective',
    'te-form', 'polite', 'negative', 'past-tense', 'location',
  ];
  const availableTags = CATEGORY_ORDER.filter((tag) =>
    grammarList.some((g) => g.tags.includes(tag))
  );

  let search = '';
  let activeTag: string | null = null;
  let showRomaji = true;
  const expanded: Record<string, boolean> = {};

  function matchesSearch(g: GrammarPoint, q: string): boolean {
    if (!q) return true;
    const needle = q.toLowerCase();
    const haystack = [
      g.title,
      g.summary,
      g.explanation,
      g.formation,
      g.tags.join(' '),
      g.examples.map((e) => `${e.ja} ${e.furigana ?? ''} ${e.romaji ?? ''} ${e.en}`).join(' '),
    ]
      .join(' ')
      .toLowerCase();
    return haystack.includes(needle);
  }

  $: filtered = grammarList.filter(
    (g) => (!activeTag || g.tags.includes(activeTag)) && matchesSearch(g, search)
  );

  function toggle(id: string) {
    expanded[id] = !expanded[id];
  }

  function expandAll() {
    for (const g of filtered) expanded[g.id] = true;
  }

  function collapseAll() {
    for (const g of grammarList) expanded[g.id] = false;
  }

  /** Look up a related/contrasted pattern's display title, falling back to its id. */
  function patternTitle(id: string): string {
    return n5Grammar[id]?.title ?? id;
  }

  /** Open a related pattern and scroll it into view (clears filters that would hide it). */
  async function openPattern(id: string) {
    if (!n5Grammar[id]) return;
    search = '';
    activeTag = null;
    expanded[id] = true;
    await tick();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
</script>

<div class="grammar-page">
  <div class="page-header">
    <div class="title-row">
      <div>
        <h1>N5 Grammar Reference</h1>
        <p class="subtitle">{grammarList.length} grammar points for absolute beginners</p>
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
      placeholder="Search grammar, meaning, or example…"
      bind:value={search}
      aria-label="Search grammar points"
    />

    <div class="filters">
      <button class="tag-pill" class:active={activeTag === null} on:click={() => (activeTag = null)}>
        All
      </button>
      {#each availableTags as tag}
        <button
          class="tag-pill"
          class:active={activeTag === tag}
          on:click={() => (activeTag = activeTag === tag ? null : tag)}
        >
          {tag}
        </button>
      {/each}
    </div>

    <div class="result-row">
      <span class="result-count">
        {filtered.length}
        {filtered.length === 1 ? 'point' : 'points'}
        {#if activeTag || search}(filtered){/if}
      </span>
      <div class="bulk-actions">
        <button class="link-btn" on:click={expandAll}>Expand all</button>
        <span class="dot">·</span>
        <button class="link-btn" on:click={collapseAll}>Collapse all</button>
      </div>
    </div>
  </div>

  {#if filtered.length === 0}
    <div class="empty">No grammar points match your search.</div>
  {/if}

  <div class="grammar-list">
    {#each filtered as g (g.id)}
      <div class="grammar-card" id={g.id} class:open={expanded[g.id]}>
        <button class="card-header" on:click={() => toggle(g.id)} aria-expanded={expanded[g.id]}>
          <div class="header-main">
            <span class="grammar-title japanese">{g.title}</span>
            <span class="grammar-summary">{g.summary}</span>
          </div>
          <svg
            class="chevron"
            class:rotated={expanded[g.id]}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
          >
            <polyline points="6,9 12,15 18,9" />
          </svg>
        </button>

        {#if expanded[g.id]}
          <div class="card-body">
            <div class="formation">
              {#each g.formation.split('\n') as line}
                <div class="formation-line japanese">{line}</div>
              {/each}
            </div>

            <p class="explanation">{g.explanation}</p>

            {#if g.usageNotes.length > 0}
              <div class="section">
                <h4 class="section-title">Usage notes</h4>
                <ul class="usage-notes">
                  {#each g.usageNotes as note}
                    <li>{note}</li>
                  {/each}
                </ul>
              </div>
            {/if}

            {#if g.examples.length > 0}
              <div class="section">
                <h4 class="section-title">Examples</h4>
                <div class="examples">
                  {#each g.examples as ex}
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
                      {#if ex.note}
                        <p class="example-note">{ex.note}</p>
                      {/if}
                    </div>
                  {/each}
                </div>
              </div>
            {/if}

            {#if g.contrastedWith && g.contrastedWith.length > 0}
              <div class="section">
                <h4 class="section-title">Compare with</h4>
                {#each g.contrastedWith as c}
                  <div class="contrast">
                    <button class="contrast-pattern japanese" on:click={() => openPattern(c.patternId)}>
                      {patternTitle(c.patternId)}
                    </button>
                    <span class="contrast-note">{c.note}</span>
                  </div>
                {/each}
              </div>
            {/if}

            <div class="card-footer">
              {#if g.relatedPatterns.length > 0}
                <div class="related">
                  <span class="related-label">Related:</span>
                  {#each g.relatedPatterns as rp}
                    {#if n5Grammar[rp]}
                      <button class="related-chip japanese" on:click={() => openPattern(rp)}>
                        {patternTitle(rp)}
                      </button>
                    {/if}
                  {/each}
                </div>
              {/if}
              <div class="tags">
                {#each g.tags as tag}
                  <button
                    class="tag-chip"
                    class:selectable={availableTags.includes(tag)}
                    on:click={() => availableTags.includes(tag) && (activeTag = tag)}
                  >
                    {tag}
                  </button>
                {/each}
              </div>
            </div>
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>

<style>
  .grammar-page {
    max-width: 780px;
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

  .tag-pill {
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

  .tag-pill:hover {
    background: var(--bg-secondary-btn-hover);
  }

  .tag-pill.active {
    background: var(--bg-toggle-active);
    color: var(--primary);
    border-color: var(--primary);
    font-weight: 700;
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

  /* Grammar cards */
  .grammar-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .grammar-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 12px;
    box-shadow: var(--shadow-card);
    overflow: hidden;
    scroll-margin-top: 5rem;
  }

  .grammar-card.open {
    border-color: var(--primary);
  }

  .card-header {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.25rem;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
  }

  .card-header:hover {
    background: var(--bg-card-hover);
  }

  .header-main {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    min-width: 0;
  }

  .grammar-title {
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--text-dark);
  }

  .grammar-summary {
    font-size: 0.85rem;
    color: var(--text-muted);
    line-height: 1.4;
  }

  .chevron {
    flex-shrink: 0;
    color: var(--text-muted);
    transition: transform 0.2s;
  }

  .chevron.rotated {
    transform: rotate(180deg);
  }

  /* Card body */
  .card-body {
    padding: 0 1.25rem 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-top: 1px solid var(--border);
    padding-top: 1rem;
  }

  .formation {
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 0.75rem 1rem;
  }

  .formation-line {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--text-dark);
    line-height: 1.6;
  }

  .explanation {
    font-size: 0.92rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin: 0;
  }

  .section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .section-title {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-muted);
    margin: 0;
  }

  .usage-notes {
    margin: 0;
    padding-left: 1.1rem;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  .usage-notes li {
    font-size: 0.88rem;
    color: var(--text-secondary);
    line-height: 1.5;
  }

  .examples {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .example {
    background: var(--bg);
    border-left: 3px solid var(--primary);
    border-radius: 6px;
    padding: 0.6rem 0.85rem;
  }

  .example-head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.5rem;
  }

  .example-ja {
    font-size: 1.05rem;
    color: var(--text-dark);
    margin: 0;
  }

  .example-furigana {
    font-size: 0.85rem;
    color: var(--text-muted);
    margin: 0.15rem 0 0;
  }

  .example-romaji {
    font-size: 0.82rem;
    font-style: italic;
    color: var(--text-muted);
    margin: 0.15rem 0 0;
  }

  .example-en {
    font-size: 0.88rem;
    color: var(--text-secondary);
    margin: 0.3rem 0 0;
  }

  .example-note {
    font-size: 0.8rem;
    color: var(--text-muted);
    margin: 0.3rem 0 0;
  }

  .contrast {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    background: var(--bg);
    border-radius: 8px;
    padding: 0.6rem 0.85rem;
  }

  .contrast-pattern {
    align-self: flex-start;
    background: none;
    border: none;
    padding: 0;
    font-size: 0.92rem;
    font-weight: 700;
    color: var(--primary);
    cursor: pointer;
  }

  .contrast-pattern:hover {
    text-decoration: underline;
  }

  .contrast-note {
    font-size: 0.85rem;
    color: var(--text-secondary);
    line-height: 1.5;
  }

  /* Footer */
  .card-footer {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    padding-top: 0.25rem;
  }

  .related {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.4rem;
  }

  .related-label {
    font-size: 0.8rem;
    color: var(--text-muted);
    font-weight: 600;
  }

  .related-chip {
    background: var(--bg-toggle-active);
    color: var(--primary);
    border: none;
    border-radius: 6px;
    padding: 0.2rem 0.55rem;
    font-size: 0.82rem;
    cursor: pointer;
    transition: opacity 0.15s;
  }

  .related-chip:hover {
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
    border: none;
    border-radius: 4px;
    padding: 0.15rem 0.45rem;
    font-size: 0.72rem;
    cursor: default;
  }

  .tag-chip.selectable {
    cursor: pointer;
  }

  .tag-chip.selectable:hover {
    background: var(--bg-secondary-btn-hover);
    color: var(--text-secondary);
  }

  @media (max-width: 560px) {
    .title-row h1 {
      font-size: 1.3rem;
    }

    .card-header {
      padding: 0.85rem 1rem;
    }

    .card-body {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
</style>
