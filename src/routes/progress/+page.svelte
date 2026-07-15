<script lang="ts">
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import { courseProgress } from '$lib/stores/courseStore';
  import { mastery, summarise, weakest, levelOf, resetMastery, KNOWN_STREAK } from '$lib/stores/masteryStore';
  import type { MasteryLevel } from '$lib/stores/masteryStore';
  import { n5Course } from '$lib/data/course';
  import {
    HIRAGANA_BASIC,
    HIRAGANA_DAKUTEN,
    HIRAGANA_YOUON,
    KATAKANA_BASIC,
    KATAKANA_DAKUTEN,
    KATAKANA_YOUON
  } from '$lib/data/kanaData';
  import type { Character } from '$lib/models/Character';

  // ── Universes ────────────────────────────────────────────────────────────
  const HIRAGANA = [...HIRAGANA_BASIC, ...HIRAGANA_DAKUTEN, ...HIRAGANA_YOUON];
  const KATAKANA = [...KATAKANA_BASIC, ...KATAKANA_DAKUTEN, ...KATAKANA_YOUON];
  const KANA_IDS = [...HIRAGANA, ...KATAKANA].map((c) => c.character);

  let kanjiN5: Character[] = [];
  let kanjiN4: Character[] = [];
  let loaded = false;

  onMount(async () => {
    const { dataLoader } = await import('$lib/services/loader');
    kanjiN5 = dataLoader.getCharacters('kanji_n5');
    kanjiN4 = dataLoader.getCharacters('kanji_n4');
    loaded = true;
  });

  $: kanjiIds = [...kanjiN5, ...kanjiN4].map((c) => c.character);

  // units[0].chapters and chapter.lessons hold ids into the course's Records.
  const chapters = (n5Course.units[0]?.chapters ?? []).map((id) => n5Course.chapters[id]);
  const allLessonIds = Object.keys(n5Course.lessons);

  // ── Summaries ────────────────────────────────────────────────────────────
  $: kana = summarise($mastery, 'kana', KANA_IDS);
  $: kanji = summarise($mastery, 'kanji', kanjiIds);
  $: lessonsDone = allLessonIds.filter(
    (id) => $courseProgress.lessons[id]?.status === 'completed'
  ).length;

  $: weakKana = weakest($mastery, 'kana', KANA_IDS, 24);
  $: weakKanji = weakest($mastery, 'kanji', kanjiIds, 24);

  $: stats = $courseProgress.stats;

  // ── Activity heatmap: last 12 weeks ──────────────────────────────────────
  function lastNDays(n: number): string[] {
    const out: string[] = [];
    const d = new Date();
    for (let i = n - 1; i >= 0; i--) {
      const x = new Date(d);
      x.setDate(d.getDate() - i);
      out.push(x.toISOString().slice(0, 10));
    }
    return out;
  }
  const DAYS = lastNDays(84);
  $: maxDay = Math.max(1, ...DAYS.map((d) => $mastery.history[d]?.answered ?? 0));
  function heat(day: string): number {
    const n = $mastery.history[day]?.answered ?? 0;
    return n === 0 ? 0 : Math.min(4, Math.ceil((n / maxDay) * 4));
  }

  $: totalAnswers = Object.values($mastery.history).reduce((n, d) => n + d.answered, 0);

  function pct(part: number, total: number): number {
    return total > 0 ? Math.round((part / total) * 100) : 0;
  }

  function lvl(kind: 'kana' | 'kanji', id: string): MasteryLevel {
    return levelOf($mastery[kind][id]);
  }

  function confirmReset() {
    if (confirm('Erase all quiz mastery data? Course progress and XP are not affected.')) {
      resetMastery();
    }
  }

  let kanjiTab: 'N5' | 'N4' = 'N5';
  $: shownKanji = kanjiTab === 'N5' ? kanjiN5 : kanjiN4;
</script>

<svelte:head>
  <title>Progress — Japanese Study</title>
</svelte:head>

<div class="page">
  <div class="page-header">
    <h2>Your Progress</h2>
    <div class="top-stats">
      <span class="stat"><strong>{stats.totalXP}</strong> XP</span>
      <span class="stat">🔥 <strong>{stats.currentStreak}</strong>-day streak</span>
      <span class="stat muted">best {stats.longestStreak}</span>
      <span class="stat muted">{totalAnswers} answers</span>
    </div>
  </div>

  <!-- ── The path ───────────────────────────────────────────────────────── -->
  <section class="card">
    <h3 class="section-title">The path</h3>
    <p class="section-note">Learn the characters, quiz them, then work through the course.</p>

    <div class="rung">
      <div class="rung-head">
        <span class="rung-n">1</span>
        <a href="{base}/kana" class="rung-name">Kana</a>
        <span class="rung-count">{kana.known} / {kana.total}</span>
      </div>
      <div class="bar" role="progressbar" aria-valuenow={kana.known} aria-valuemin={0} aria-valuemax={kana.total}>
        <div class="fill known" style="width:{pct(kana.known, kana.total)}%"></div>
        <div class="fill shaky" style="width:{pct(kana.shaky, kana.total)}%"></div>
        <div class="fill learning" style="width:{pct(kana.learning, kana.total)}%"></div>
      </div>
      <div class="rung-sub">hiragana {summarise($mastery, 'kana', HIRAGANA.map((c) => c.character)).known}/{HIRAGANA.length} · katakana {summarise($mastery, 'kana', KATAKANA.map((c) => c.character)).known}/{KATAKANA.length}</div>
    </div>

    <div class="rung">
      <div class="rung-head">
        <span class="rung-n">2</span>
        <a href="{base}/kanji" class="rung-name">Kanji</a>
        <span class="rung-count">{kanji.known} / {kanji.total}</span>
      </div>
      <div class="bar" role="progressbar" aria-valuenow={kanji.known} aria-valuemin={0} aria-valuemax={kanji.total}>
        <div class="fill known" style="width:{pct(kanji.known, kanji.total)}%"></div>
        <div class="fill shaky" style="width:{pct(kanji.shaky, kanji.total)}%"></div>
        <div class="fill learning" style="width:{pct(kanji.learning, kanji.total)}%"></div>
      </div>
      <div class="rung-sub">
        N5 {summarise($mastery, 'kanji', kanjiN5.map((c) => c.character)).known}/{kanjiN5.length}
        · N4 {summarise($mastery, 'kanji', kanjiN4.map((c) => c.character)).known}/{kanjiN4.length}
      </div>
    </div>

    <div class="rung">
      <div class="rung-head">
        <span class="rung-n">3</span>
        <a href="{base}/course" class="rung-name">Course</a>
        <span class="rung-count">{lessonsDone} / {allLessonIds.length} lessons</span>
      </div>
      <div class="bar" role="progressbar" aria-valuenow={lessonsDone} aria-valuemin={0} aria-valuemax={allLessonIds.length}>
        <div class="fill known" style="width:{pct(lessonsDone, allLessonIds.length)}%"></div>
      </div>
      <div class="rung-sub">
        <a href="{base}/vocab">Vocab</a> and <a href="{base}/grammar">Grammar</a> are references — dip in whenever you need them.
      </div>
    </div>

    <div class="legend">
      <span><i class="sw known"></i>known ({KNOWN_STREAK}+ in a row)</span>
      <span><i class="sw shaky"></i>shaky</span>
      <span><i class="sw learning"></i>learning</span>
      <span><i class="sw unseen"></i>not yet quizzed</span>
    </div>
  </section>

  <!-- ── Kana map ───────────────────────────────────────────────────────── -->
  <section class="card">
    <div class="card-head">
      <h3 class="section-title">Kana</h3>
      <a class="btn" href="{base}/kana-quiz">Kana Quiz →</a>
    </div>
    {#each [{ label: 'Hiragana', set: HIRAGANA }, { label: 'Katakana', set: KATAKANA }] as script}
      <div class="map-label">{script.label}</div>
      <div class="map">
        {#each script.set as c}
          <span class="dot {lvl('kana', c.character)} japanese" title="{c.character} ({c.romaji}) — {lvl('kana', c.character)}">
            {c.character}
          </span>
        {/each}
      </div>
    {/each}
  </section>

  <!-- ── Kanji map ──────────────────────────────────────────────────────── -->
  <section class="card">
    <div class="card-head">
      <h3 class="section-title">Kanji</h3>
      <div class="tabs">
        <button class:active={kanjiTab === 'N5'} on:click={() => (kanjiTab = 'N5')}>N5 ({kanjiN5.length})</button>
        <button class:active={kanjiTab === 'N4'} on:click={() => (kanjiTab = 'N4')}>N4 ({kanjiN4.length})</button>
      </div>
      <a class="btn" href="{base}/kanji-quiz">Kanji Quiz →</a>
    </div>
    {#if loaded}
      <div class="map">
        {#each shownKanji as c}
          <span class="dot {lvl('kanji', c.character)} japanese" title="{c.character} — {c.meaning ?? ''} — {lvl('kanji', c.character)}">
            {c.character}
          </span>
        {/each}
      </div>
    {:else}
      <p class="empty">Loading…</p>
    {/if}
    <p class="section-note">
      The Kanji Quiz asks about words, so a kanji counts as known once you recognise it inside its
      words — not by reciting its readings.
    </p>
  </section>

  <!-- ── Needs work ─────────────────────────────────────────────────────── -->
  {#if weakKana.length || weakKanji.length}
    <section class="card">
      <h3 class="section-title">Needs work</h3>
      {#if weakKana.length}
        <div class="weak-row">
          <div class="map tight">
            {#each weakKana as id}
              <span class="dot {lvl('kana', id)} japanese">{id}</span>
            {/each}
          </div>
          <a class="btn" href="{base}/kana-quiz">Drill in the Kana Quiz →</a>
        </div>
      {/if}
      {#if weakKanji.length}
        <div class="weak-row">
          <div class="map tight">
            {#each weakKanji as id}
              <span class="dot {lvl('kanji', id)} japanese">{id}</span>
            {/each}
          </div>
          <a class="btn" href="{base}/kanji-quiz">Drill in the Kanji Quiz →</a>
        </div>
      {/if}
    </section>
  {/if}

  <!-- ── Chapters ───────────────────────────────────────────────────────── -->
  <section class="card">
    <h3 class="section-title">Course chapters</h3>
    <div class="chapters">
      {#each chapters as ch}
        {@const ids = ch.lessons}
        {@const done = ids.filter((id) => $courseProgress.lessons[id]?.status === 'completed').length}
        <a class="chapter" href="{base}/course">
          <span class="chapter-title">{ch.title}</span>
          <div class="bar thin">
            <div class="fill known" style="width:{pct(done, ids.length)}%"></div>
          </div>
          <span class="chapter-count" class:done={done === ids.length}>
            {done}/{ids.length}{#if done === ids.length} ✓{/if}
          </span>
        </a>
      {/each}
    </div>
  </section>

  <!-- ── Activity ───────────────────────────────────────────────────────── -->
  <section class="card">
    <h3 class="section-title">Activity</h3>
    {#if totalAnswers === 0}
      <p class="empty">No quiz answers recorded yet — take a quiz and this fills in.</p>
    {:else}
      <div class="heat">
        {#each DAYS as d}
          <i class="cell h{heat(d)}" title="{d}: {$mastery.history[d]?.answered ?? 0} answers"></i>
        {/each}
      </div>
      <div class="heat-legend"><span>12 weeks ago</span><span>today</span></div>
    {/if}
  </section>

  <div class="danger">
    <button class="reset" on:click={confirmReset}>Reset quiz mastery data</button>
  </div>
</div>

<style>
  .page {
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
  }

  .page-header h2 {
    margin: 0;
    color: var(--text-dark);
  }

  .top-stats {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 0.4rem;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }

  .stat strong {
    color: var(--primary);
    font-size: 1.05rem;
  }

  .stat.muted {
    color: var(--text-muted);
  }

  .card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 1.1rem 1.2rem;
    box-shadow: var(--shadow-card);
  }

  .card-head {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
    margin-bottom: 0.8rem;
  }

  .card-head .section-title {
    margin: 0;
    flex: 1;
  }

  .section-title {
    margin: 0 0 0.15rem;
    font-size: 1.02rem;
    color: var(--text-dark);
  }

  .section-note {
    margin: 0.3rem 0 0;
    font-size: 0.82rem;
    color: var(--text-muted);
  }

  /* ── Rungs ── */
  .rung {
    margin-top: 0.9rem;
  }

  .rung-head {
    display: flex;
    align-items: center;
    gap: 0.55rem;
    margin-bottom: 0.35rem;
  }

  .rung-n {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--bg-toggle-active);
    color: var(--primary);
    font-size: 0.72rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .rung-name {
    font-weight: 700;
    color: var(--text-dark);
    text-decoration: none;
    flex: 1;
  }

  .rung-name:hover {
    color: var(--primary);
  }

  .rung-count {
    font-size: 0.85rem;
    color: var(--text-secondary);
    font-variant-numeric: tabular-nums;
  }

  .rung-sub {
    margin-top: 0.28rem;
    font-size: 0.78rem;
    color: var(--text-muted);
  }

  .rung-sub a {
    color: var(--primary);
  }

  .bar {
    display: flex;
    height: 9px;
    background: var(--bg-progress-track);
    border-radius: 5px;
    overflow: hidden;
  }

  .bar.thin {
    height: 6px;
    flex: 1;
  }

  .fill {
    height: 100%;
    transition: width 0.3s;
  }

  .fill.known {
    background: var(--primary);
  }
  .fill.shaky {
    background: #e8a33d;
  }
  .fill.learning {
    background: #9ec5f5;
  }

  .legend {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 1rem;
    font-size: 0.75rem;
    color: var(--text-muted);
  }

  .legend span {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
  }

  .sw {
    width: 10px;
    height: 10px;
    border-radius: 3px;
    display: inline-block;
  }

  .sw.known {
    background: var(--primary);
  }
  .sw.shaky {
    background: #e8a33d;
  }
  .sw.learning {
    background: #9ec5f5;
  }
  .sw.unseen {
    background: var(--bg-progress-track);
    border: 1px solid var(--border);
  }

  /* ── Maps ── */
  .map-label {
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--text-secondary);
    margin: 0.6rem 0 0.35rem;
  }

  .map {
    display: flex;
    flex-wrap: wrap;
    gap: 3px;
  }

  .map.tight {
    flex: 1;
    min-width: 200px;
  }

  .dot {
    width: 26px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    font-size: 0.8rem;
    border: 1px solid transparent;
    cursor: default;
  }

  .dot.unseen {
    background: var(--bg-progress-track);
    color: var(--text-muted);
    border-color: var(--border);
  }
  .dot.learning {
    background: #9ec5f5;
    color: #14345c;
  }
  .dot.shaky {
    background: #e8a33d;
    color: #4a2f06;
  }
  .dot.known {
    background: var(--primary);
    color: var(--primary-text);
  }

  /* ── Needs work ── */
  .weak-row {
    display: flex;
    align-items: center;
    gap: 0.9rem;
    flex-wrap: wrap;
    margin-top: 0.7rem;
  }

  .btn {
    background: var(--bg-secondary-btn);
    border: 1px solid var(--border);
    color: var(--text-secondary-btn);
    border-radius: 8px;
    padding: 0.38rem 0.75rem;
    font-size: 0.82rem;
    font-weight: 600;
    text-decoration: none;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .btn:hover {
    background: var(--bg-toggle-active);
    color: var(--primary);
    border-color: var(--primary);
  }

  /* ── Tabs ── */
  .tabs {
    display: inline-flex;
    border: 1px solid var(--border);
    border-radius: 8px;
    overflow: hidden;
  }

  .tabs button {
    background: var(--bg);
    border: none;
    color: var(--text-secondary);
    padding: 0.32rem 0.7rem;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
  }

  .tabs button + button {
    border-left: 1px solid var(--border);
  }

  .tabs button.active {
    background: var(--bg-toggle-active);
    color: var(--primary);
  }

  /* ── Chapters ── */
  .chapters {
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
    margin-top: 0.7rem;
  }

  .chapter {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    text-decoration: none;
    padding: 0.3rem 0;
  }

  .chapter-title {
    font-size: 0.85rem;
    color: var(--text);
    width: 175px;
    flex-shrink: 0;
  }

  .chapter:hover .chapter-title {
    color: var(--primary);
  }

  .chapter-count {
    font-size: 0.78rem;
    color: var(--text-muted);
    font-variant-numeric: tabular-nums;
    width: 48px;
    text-align: right;
    flex-shrink: 0;
  }

  .chapter-count.done {
    color: var(--primary);
    font-weight: 700;
  }

  /* ── Activity ── */
  .heat {
    display: grid;
    grid-template-rows: repeat(7, 11px);
    grid-auto-flow: column;
    grid-auto-columns: 11px;
    gap: 3px;
    margin-top: 0.7rem;
    overflow-x: auto;
    padding-bottom: 0.2rem;
  }

  .cell {
    width: 11px;
    height: 11px;
    border-radius: 2px;
    background: var(--bg-progress-track);
  }

  .cell.h1 {
    background: #cfe2fb;
  }
  .cell.h2 {
    background: #93c0f4;
  }
  .cell.h3 {
    background: #4b90e2;
  }
  .cell.h4 {
    background: var(--primary);
  }

  .heat-legend {
    display: flex;
    justify-content: space-between;
    font-size: 0.7rem;
    color: var(--text-muted);
    margin-top: 0.35rem;
  }

  .empty {
    font-size: 0.85rem;
    color: var(--text-muted);
    margin: 0.5rem 0 0;
  }

  /* ── Reset ── */
  .danger {
    display: flex;
    justify-content: flex-end;
  }

  .reset {
    background: none;
    border: 1px solid var(--border);
    color: var(--text-muted);
    border-radius: 8px;
    padding: 0.35rem 0.7rem;
    font-size: 0.78rem;
    cursor: pointer;
  }

  .reset:hover {
    color: var(--error-text);
    border-color: var(--error-text);
  }
</style>
