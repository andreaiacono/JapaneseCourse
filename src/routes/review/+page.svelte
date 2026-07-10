<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { base } from '$app/paths';
  import { n5Vocab } from '$lib/data/course/n5-vocab.js';
  import { characters } from '$lib/stores/characterStore';
  import { getKunReadings, getOnReadings, type Character } from '$lib/models/Character';
  import type { SRSData } from '$lib/models/Course.js';
  import { srsMap, gradeItem, getSRS, today } from '$lib/stores/srsStore.js';
  import { createSRSData, previewInterval, isDue, type ReviewGrade } from '$lib/services/SRSEngine.js';

  const GRADES: { grade: ReviewGrade; label: string; key: string }[] = [
    { grade: 'again', label: 'Again', key: '1' },
    { grade: 'hard', label: 'Hard', key: '2' },
    { grade: 'good', label: 'Good', key: '3' },
    { grade: 'easy', label: 'Easy', key: '4' },
  ];

  type Mode = 'vocab' | 'kanji';
  type Phase = 'setup' | 'reviewing' | 'done';

  let phase: Phase = 'setup';
  let mode: Mode = 'vocab';
  let kanjiLevels = { N5: true, N4: false };
  let newCount = 10;
  let showRomaji = true;

  const nowStr = today();
  const vocabIds = Object.keys(n5Vocab);

  // ── Item pools (reactive) ──────────────────────────────────────────────────
  $: kanjiChars = [
    ...(kanjiLevels.N5 ? ($characters.get('kanji_n5') ?? []) : []),
    ...(kanjiLevels.N4 ? ($characters.get('kanji_n4') ?? []) : []),
  ];
  $: kanjiById = new Map<string, Character>(kanjiChars.map((c) => [`kanji:${c.character}`, c]));

  $: itemType = (mode === 'vocab' ? 'vocab' : 'kanji') as SRSData['itemType'];
  $: allIds = mode === 'vocab' ? vocabIds : [...kanjiById.keys()];

  // ── Counts (reactive on the SRS map so they refresh after a session) ────────
  $: dueIds = allIds.filter((id) => {
    const d = $srsMap[id];
    return d?.itemType === itemType && isDue(d, nowStr);
  });
  $: newIds = allIds.filter((id) => !$srsMap[id]);
  $: dueCount = dueIds.length;
  $: newAvailable = newIds.length;
  $: learnedCount = allIds.filter((id) => $srsMap[id]?.itemType === itemType).length;
  $: if (newCount > newAvailable) newCount = newAvailable;

  // ── Session state ───────────────────────────────────────────────────────────
  let queue: string[] = [];
  let sessionNewIds = new Set<string>();
  let sessionSize = 0;
  let completed = new Set<string>();
  let againCount = 0;
  let flipped = false;

  function shuffle<T>(arr: T[]): T[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function startSession() {
    const fresh = newIds.slice(0, newCount);
    sessionNewIds = new Set(fresh);
    queue = shuffle([...dueIds, ...fresh]);
    sessionSize = queue.length;
    completed = new Set();
    againCount = 0;
    flipped = false;
    if (queue.length > 0) phase = 'reviewing';
  }

  $: current = phase === 'reviewing' ? queue[0] : undefined;
  $: currentData = current ? (getSRS(current) ?? createSRSData(current, itemType, nowStr)) : undefined;

  // A normalized view of the current card for either mode.
  type Card =
    | { kind: 'vocab'; front: string; reading?: string; romaji?: string; meaning: string; example?: { ja: string; romaji?: string; en: string } }
    | { kind: 'kanji'; front: string; meaning: string; kun: string[]; on: string[] };

  $: card = buildCard(current);

  function buildCard(id: string | undefined): Card | undefined {
    if (!id) return undefined;
    if (mode === 'vocab') {
      const v = n5Vocab[id];
      if (!v) return undefined;
      return {
        kind: 'vocab',
        front: v.word.ja,
        reading: v.word.reading,
        romaji: v.word.romaji,
        meaning: v.word.en,
        example: v.exampleSentences[0],
      };
    }
    const k = kanjiById.get(id);
    if (!k) return undefined;
    return {
      kind: 'kanji',
      front: k.character,
      meaning: k.meaning ?? '—',
      kun: getKunReadings(k).map((r) => r.text),
      on: getOnReadings(k).map((r) => r.text),
    };
  }

  function grade(g: ReviewGrade) {
    if (!current) return;
    gradeItem(current, itemType, g);
    const id = current;
    if (g === 'again') {
      againCount += 1;
      queue = [...queue.slice(1), id];
    } else {
      completed = new Set(completed).add(id);
      queue = queue.slice(1);
    }
    flipped = false;
    if (queue.length === 0) phase = 'done';
  }

  function endSession() {
    phase = 'done';
  }
  function backToSetup() {
    phase = 'setup';
  }

  function toggleLevel(level: 'N5' | 'N4') {
    const next = { ...kanjiLevels, [level]: !kanjiLevels[level] };
    // Keep at least one level selected.
    if (!next.N5 && !next.N4) return;
    kanjiLevels = next;
  }

  function handleKey(e: KeyboardEvent) {
    if (phase !== 'reviewing') return;
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      if (!flipped) flipped = true;
      return;
    }
    if (flipped) {
      const match = GRADES.find((g) => g.key === e.key);
      if (match) {
        e.preventDefault();
        grade(match.grade);
      }
    }
  }

  onMount(() => {
    window.addEventListener('keydown', handleKey);
  });
  onDestroy(() => {
    if (typeof window !== 'undefined') window.removeEventListener('keydown', handleKey);
  });

  $: progress = sessionSize > 0 ? completed.size / sessionSize : 0;
</script>

<div class="review-page">
  {#if phase === 'setup'}
    <div class="setup-card">
      <h1>Flashcard Review</h1>
      <p class="setup-sub">Spaced repetition (SM-2) — grade each card and it comes back right before you'd forget it.</p>

      <div class="mode-tabs">
        <button class="mode-tab" class:active={mode === 'vocab'} on:click={() => (mode = 'vocab')}>Vocabulary</button>
        <button class="mode-tab" class:active={mode === 'kanji'} on:click={() => (mode = 'kanji')}>Kanji</button>
      </div>

      {#if mode === 'kanji'}
        <div class="level-row">
          <span class="level-label">JLPT level</span>
          <div class="level-pills">
            <button class="level-pill" class:active={kanjiLevels.N5} on:click={() => toggleLevel('N5')}>N5</button>
            <button class="level-pill" class:active={kanjiLevels.N4} on:click={() => toggleLevel('N4')}>N4</button>
          </div>
        </div>
      {/if}

      <div class="stat-row">
        <div class="stat">
          <span class="stat-num" class:accent={dueCount > 0}>{dueCount}</span>
          <span class="stat-label">Due today</span>
        </div>
        <div class="stat">
          <span class="stat-num">{newAvailable}</span>
          <span class="stat-label">New available</span>
        </div>
        <div class="stat">
          <span class="stat-num">{learnedCount}</span>
          <span class="stat-label">Learned</span>
        </div>
      </div>

      {#if newAvailable > 0}
        <div class="new-picker">
          <div class="new-picker-label">
            <span>Add new {mode === 'vocab' ? 'words' : 'kanji'} this session</span>
            <span class="new-picker-value">{newCount}</span>
          </div>
          <input type="range" min="0" max={newAvailable} bind:value={newCount} />
        </div>
      {/if}

      {#if mode === 'vocab'}
        <label class="romaji-check">
          <input type="checkbox" bind:checked={showRomaji} />
          Show romaji on the answer
        </label>
      {/if}

      {#if dueCount + newCount > 0}
        <button class="start-btn" on:click={startSession}>
          Start review · {dueCount + newCount} {dueCount + newCount === 1 ? 'card' : 'cards'}
        </button>
      {:else}
        <div class="all-caught-up">
          🎉 You're all caught up. {newAvailable === 0 ? 'Every item has been learned!' : 'Add some new items above to keep going.'}
        </div>
      {/if}

      <a class="browse-link" href="{base}/{mode === 'vocab' ? 'vocab' : 'kanji'}">
        Browse the full {mode === 'vocab' ? 'vocabulary' : 'kanji'} list →
      </a>
    </div>
  {:else if phase === 'reviewing' && card && currentData}
    <div class="session-header">
      <button class="quit-btn" on:click={endSession} aria-label="End session">✕</button>
      <div class="progress-track" role="progressbar" aria-valuenow={completed.size} aria-valuemin={0} aria-valuemax={sessionSize}>
        <div class="progress-fill" style="width: {progress * 100}%"></div>
      </div>
      <span class="progress-count">{completed.size} / {sessionSize}</span>
    </div>

    <button class="flashcard" class:flipped on:click={() => (flipped = true)} aria-live="polite">
      <div class="card-face card-front">
        {#if sessionNewIds.has(current ?? '')}
          <span class="new-badge">NEW</span>
        {/if}
        <span class="prompt-ja japanese" class:prompt-kanji={card.kind === 'kanji'}>{card.front}</span>
        {#if !flipped}
          <span class="flip-hint">Tap or press Space to reveal</span>
        {/if}
      </div>

      {#if flipped}
        <div class="card-face card-back">
          {#if card.kind === 'vocab'}
            {#if card.reading && card.reading !== card.front}
              <span class="answer-reading japanese">{card.reading}</span>
            {/if}
            {#if card.romaji && showRomaji}
              <span class="answer-romaji">{card.romaji}</span>
            {/if}
            <span class="answer-en">{card.meaning}</span>
            {#if card.example}
              <div class="answer-example">
                <p class="ex-ja japanese">{card.example.ja}</p>
                {#if showRomaji && card.example.romaji}
                  <p class="ex-romaji">{card.example.romaji}</p>
                {/if}
                <p class="ex-en">{card.example.en}</p>
              </div>
            {/if}
          {:else}
            <span class="answer-en">{card.meaning}</span>
            {#if card.kun.length > 0}
              <div class="reading-group">
                <span class="reading-type">kun</span>
                <span class="reading-vals japanese">{card.kun.join('、')}</span>
              </div>
            {/if}
            {#if card.on.length > 0}
              <div class="reading-group">
                <span class="reading-type">on</span>
                <span class="reading-vals japanese">{card.on.join('、')}</span>
              </div>
            {/if}
          {/if}
        </div>
      {/if}
    </button>

    {#if flipped}
      <div class="grade-row">
        {#each GRADES as g}
          <button class="grade-btn grade-{g.grade}" on:click={() => grade(g.grade)}>
            <span class="grade-label">{g.label}</span>
            <span class="grade-interval">{previewInterval(currentData, g.grade, nowStr)}</span>
          </button>
        {/each}
      </div>
    {:else}
      <button class="reveal-btn" on:click={() => (flipped = true)}>Show answer</button>
    {/if}
  {:else if phase === 'done'}
    <div class="setup-card done-card">
      <div class="done-emoji">✅</div>
      <h1>Session complete</h1>
      <p class="setup-sub">
        You reviewed {sessionSize} {sessionSize === 1 ? 'card' : 'cards'}{againCount > 0 ? ` · ${againCount} lapse${againCount === 1 ? '' : 's'} re-drilled` : ''}.
      </p>
      <div class="stat-row">
        <div class="stat">
          <span class="stat-num" class:accent={dueCount > 0}>{dueCount}</span>
          <span class="stat-label">Still due</span>
        </div>
        <div class="stat">
          <span class="stat-num">{learnedCount}</span>
          <span class="stat-label">Learned</span>
        </div>
      </div>
      <button class="start-btn" on:click={backToSetup}>Review more</button>
      <a class="browse-link" href="{base}/">Back to home →</a>
    </div>
  {/if}
</div>

<style>
  .review-page {
    max-width: 560px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  /* Setup / done cards */
  .setup-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 1.75rem;
    box-shadow: var(--shadow-card);
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    text-align: center;
  }

  .setup-card h1 {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--text-dark);
    margin: 0;
  }

  .setup-sub {
    font-size: 0.9rem;
    color: var(--text-muted);
    margin: -0.75rem 0 0;
  }

  /* Mode tabs */
  .mode-tabs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.4rem;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 0.25rem;
  }

  .mode-tab {
    padding: 0.55rem;
    border: none;
    border-radius: 8px;
    background: none;
    color: var(--text-secondary);
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.15s;
  }

  .mode-tab:hover {
    color: var(--text-dark);
  }

  .mode-tab.active {
    background: var(--bg-card);
    color: var(--primary);
    box-shadow: var(--shadow-card);
  }

  /* Level pills */
  .level-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .level-label {
    font-size: 0.85rem;
    color: var(--text-secondary);
  }

  .level-pills {
    display: flex;
    gap: 0.4rem;
  }

  .level-pill {
    background: var(--bg-secondary-btn);
    color: var(--text-secondary);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 0.25rem 0.9rem;
    font-size: 0.82rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.15s;
  }

  .level-pill.active {
    background: var(--primary);
    color: var(--primary-text);
    border-color: var(--primary);
  }

  .stat-row {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .stat {
    flex: 1;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 0.85rem 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .stat-num {
    font-size: 1.6rem;
    font-weight: 800;
    color: var(--text-dark);
    line-height: 1;
  }

  .stat-num.accent {
    color: var(--primary);
  }

  .stat-label {
    font-size: 0.72rem;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  .new-picker {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: left;
  }

  .new-picker-label {
    display: flex;
    justify-content: space-between;
    font-size: 0.85rem;
    color: var(--text-secondary);
  }

  .new-picker-value {
    font-weight: 700;
    color: var(--primary);
  }

  .new-picker input[type='range'] {
    width: 100%;
    accent-color: var(--primary);
  }

  .romaji-check {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 0.85rem;
    color: var(--text-secondary);
    cursor: pointer;
  }

  .romaji-check input {
    accent-color: var(--primary);
  }

  .start-btn {
    background: var(--primary);
    color: var(--primary-text);
    border: none;
    border-radius: 10px;
    padding: 0.85rem 1rem;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.15s;
  }

  .start-btn:hover {
    background: var(--primary-dark);
  }

  .all-caught-up {
    background: var(--correct-bg);
    color: var(--correct-text);
    border-radius: 10px;
    padding: 1rem;
    font-size: 0.9rem;
    font-weight: 500;
  }

  .browse-link {
    font-size: 0.85rem;
    color: var(--primary);
    text-decoration: none;
  }

  .browse-link:hover {
    text-decoration: underline;
  }

  .done-emoji {
    font-size: 2.5rem;
  }

  /* Session header */
  .session-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .quit-btn {
    background: var(--bg-secondary-btn);
    color: var(--text-secondary);
    border: 1px solid var(--border);
    border-radius: 8px;
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    cursor: pointer;
    font-size: 0.9rem;
  }

  .quit-btn:hover {
    background: var(--bg-secondary-btn-hover);
  }

  .progress-track {
    flex: 1;
    height: 8px;
    background: var(--bg-progress-track);
    border-radius: 4px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--primary), #0f9d58);
    border-radius: 4px;
    transition: width 0.3s ease;
  }

  .progress-count {
    font-size: 0.8rem;
    color: var(--text-muted);
    white-space: nowrap;
    min-width: 3rem;
    text-align: right;
  }

  /* Flashcard */
  .flashcard {
    position: relative;
    width: 100%;
    min-height: 260px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 16px;
    box-shadow: var(--shadow-card);
    display: flex;
    flex-direction: column;
    cursor: pointer;
    padding: 1.5rem;
    text-align: center;
    gap: 1rem;
  }

  .flashcard.flipped {
    cursor: default;
  }

  .card-face {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .card-front {
    flex: 1;
    position: relative;
  }

  .new-badge {
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    background: var(--primary);
    color: var(--primary-text);
    font-size: 0.65rem;
    font-weight: 700;
    padding: 0.15rem 0.45rem;
    border-radius: 4px;
    letter-spacing: 0.05em;
  }

  .prompt-ja {
    font-size: 3rem;
    font-weight: 700;
    color: var(--text-dark);
    line-height: 1.2;
  }

  .prompt-kanji {
    font-size: 5rem;
  }

  .flip-hint {
    font-size: 0.8rem;
    color: var(--text-hint);
  }

  .card-back {
    border-top: 1px solid var(--border);
    padding-top: 1rem;
    gap: 0.3rem;
  }

  .answer-reading {
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--primary);
  }

  .answer-romaji {
    font-size: 0.95rem;
    font-style: italic;
    color: var(--text-muted);
  }

  .answer-en {
    font-size: 1.05rem;
    color: var(--text-dark);
    font-weight: 500;
  }

  .reading-group {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    margin-top: 0.35rem;
  }

  .reading-type {
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--primary-text);
    background: var(--primary);
    border-radius: 4px;
    padding: 0.1rem 0.35rem;
  }

  .reading-vals {
    font-size: 1.1rem;
    color: var(--text-dark);
  }

  .answer-example {
    margin-top: 0.75rem;
    background: var(--bg);
    border-left: 3px solid var(--primary);
    border-radius: 6px;
    padding: 0.6rem 0.85rem;
    text-align: left;
    width: 100%;
  }

  .ex-ja {
    font-size: 1rem;
    color: var(--text-dark);
    margin: 0;
  }

  .ex-romaji {
    font-size: 0.82rem;
    font-style: italic;
    color: var(--text-muted);
    margin: 0.2rem 0 0;
  }

  .ex-en {
    font-size: 0.85rem;
    color: var(--text-secondary);
    margin: 0.25rem 0 0;
  }

  .reveal-btn {
    background: var(--primary);
    color: var(--primary-text);
    border: none;
    border-radius: 10px;
    padding: 0.85rem;
    font-size: 0.95rem;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.15s;
  }

  .reveal-btn:hover {
    background: var(--primary-dark);
  }

  /* Grade buttons */
  .grade-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
  }

  .grade-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.15rem;
    padding: 0.7rem 0.3rem;
    border: 1px solid var(--border);
    border-radius: 10px;
    background: var(--bg-card);
    cursor: pointer;
    transition: all 0.12s;
  }

  .grade-label {
    font-size: 0.9rem;
    font-weight: 700;
  }

  .grade-interval {
    font-size: 0.7rem;
    color: var(--text-muted);
  }

  .grade-again {
    color: var(--incorrect-text);
  }
  .grade-again:hover {
    background: var(--incorrect-bg);
    border-color: var(--incorrect-border);
  }

  .grade-hard {
    color: #e65100;
  }
  .grade-hard:hover {
    background: #fff3e0;
    border-color: #ffb74d;
  }

  :global([data-theme='dark']) .grade-hard {
    color: #ffb74d;
  }
  :global([data-theme='dark']) .grade-hard:hover {
    background: #3e2200;
  }

  .grade-good {
    color: var(--correct-text);
  }
  .grade-good:hover {
    background: var(--correct-bg);
    border-color: var(--correct-border);
  }

  .grade-easy {
    color: var(--primary);
  }
  .grade-easy:hover {
    background: var(--bg-toggle-active);
    border-color: var(--primary);
  }

  @media (max-width: 560px) {
    .prompt-ja {
      font-size: 2.4rem;
    }
    .prompt-kanji {
      font-size: 4rem;
    }
    .grade-label {
      font-size: 0.82rem;
    }
  }
</style>
