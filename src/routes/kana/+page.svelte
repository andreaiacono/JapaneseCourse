<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { audioManager } from '$lib/services/AudioManager';
  import {
    HIRAGANA_DAKUTEN,
    HIRAGANA_YOUON,
    KATAKANA_DAKUTEN,
    KATAKANA_YOUON
  } from '$lib/data/kanaData';
  import type { Character } from '$lib/models/Character';

  // Traditional gojuuon grid — null = empty cell
  const BASIC_H: (string | null)[][] = [
    ['あ', 'い', 'う', 'え', 'お'],
    ['か', 'き', 'く', 'け', 'こ'],
    ['さ', 'し', 'す', 'せ', 'そ'],
    ['た', 'ち', 'つ', 'て', 'と'],
    ['な', 'に', 'ぬ', 'ね', 'の'],
    ['は', 'ひ', 'ふ', 'へ', 'ほ'],
    ['ま', 'み', 'む', 'め', 'も'],
    ['や', null, 'ゆ', null, 'よ'],
    ['ら', 'り', 'る', 'れ', 'ろ'],
    ['わ', null, null, null, 'を'],
    ['ん', null, null, null, null]
  ];

  const BASIC_K: (string | null)[][] = [
    ['ア', 'イ', 'ウ', 'エ', 'オ'],
    ['カ', 'キ', 'ク', 'ケ', 'コ'],
    ['サ', 'シ', 'ス', 'セ', 'ソ'],
    ['タ', 'チ', 'ツ', 'テ', 'ト'],
    ['ナ', 'ニ', 'ヌ', 'ネ', 'ノ'],
    ['ハ', 'ヒ', 'フ', 'ヘ', 'ホ'],
    ['マ', 'ミ', 'ム', 'メ', 'モ'],
    ['ヤ', null, 'ユ', null, 'ヨ'],
    ['ラ', 'リ', 'ル', 'レ', 'ロ'],
    ['ワ', null, null, null, 'ヲ'],
    ['ン', null, null, null, null]
  ];

  const DAKUTEN_H: string[][] = [
    ['が', 'ぎ', 'ぐ', 'げ', 'ご'],
    ['ざ', 'じ', 'ず', 'ぜ', 'ぞ'],
    ['だ', 'ぢ', 'づ', 'で', 'ど'],
    ['ば', 'び', 'ぶ', 'べ', 'ぼ'],
    ['ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ']
  ];

  const DAKUTEN_K: string[][] = [
    ['ガ', 'ギ', 'グ', 'ゲ', 'ゴ'],
    ['ザ', 'ジ', 'ズ', 'ゼ', 'ゾ'],
    ['ダ', 'ヂ', 'ヅ', 'デ', 'ド'],
    ['バ', 'ビ', 'ブ', 'ベ', 'ボ'],
    ['パ', 'ピ', 'プ', 'ペ', 'ポ']
  ];

  function toGrid3(chars: Character[]): Character[][] {
    const rows: Character[][] = [];
    for (let i = 0; i < chars.length; i += 3) rows.push(chars.slice(i, i + 3));
    return rows;
  }

  const YOUON_H = toGrid3(HIRAGANA_YOUON);
  const YOUON_K = toGrid3(KATAKANA_YOUON);

  interface ScriptDef {
    label: string;
    jp: string;
    basic: (string | null)[][];
    dakuten: string[][];
    youon: Character[][];
  }

  const SCRIPTS: ScriptDef[] = [
    { label: 'Hiragana', jp: '平仮名', basic: BASIC_H, dakuten: DAKUTEN_H, youon: YOUON_H },
    { label: 'Katakana', jp: '片仮名', basic: BASIC_K, dakuten: DAKUTEN_K, youon: YOUON_K }
  ];

  type CharInfo = { romaji: string; audioPath?: string };

  // Pre-populate map with static romaji from kanaData (available before mount)
  function buildInitialMap(): Map<string, CharInfo> {
    const map = new Map<string, CharInfo>();
    for (const c of [
      ...HIRAGANA_DAKUTEN,
      ...HIRAGANA_YOUON,
      ...KATAKANA_DAKUTEN,
      ...KATAKANA_YOUON
    ]) {
      map.set(c.character, { romaji: c.romaji ?? '' });
    }
    return map;
  }

  let charMap = buildInitialMap();

  onMount(async () => {
    const { dataLoader } = await import('$lib/services/loader');
    for (const c of [
      ...dataLoader.getCharacters('hiragana'),
      ...dataLoader.getCharacters('katakana')
    ]) {
      charMap.set(c.character, {
        romaji: c.romaji ?? '',
        audioPath: c.readings[0]?.audioPath
      });
    }
    charMap = charMap; // trigger reactivity
  });

  onDestroy(() => {
    audioManager.stop();
  });

  function playHover(ch: string) {
    const info = charMap.get(ch);
    if (info?.audioPath) audioManager.play(info.audioPath);
  }
</script>

<div class="page">
  <div class="page-header">
    <h2>Kana Reference</h2>
    <p class="subtitle">Hover over a basic character to hear its pronunciation</p>
  </div>

  <div class="scripts-grid">
    {#each SCRIPTS as script}
      <div class="script-col">
        <h3 class="script-title">
          {script.label}
          <span class="jp-title">{script.jp}</span>
        </h3>

        <section class="kana-section">
          <span class="section-label">Basic (五十音)</span>
          <div class="grid-5">
            {#each script.basic as row}
              {#each row as ch}
                {#if ch !== null}
                  {@const hasAudio = !!charMap.get(ch)?.audioPath}
                  <button
                    class="cell"
                    class:has-audio={hasAudio}
                    on:mouseenter={() => playHover(ch)}
                    tabindex="-1"
                  >
                    <span class="char japanese">{ch}</span>
                    <span class="romaji">{charMap.get(ch)?.romaji ?? ''}</span>
                  </button>
                {:else}
                  <div class="cell empty" />
                {/if}
              {/each}
            {/each}
          </div>
        </section>

        <section class="kana-section">
          <span class="section-label">Voiced / dakuten (濁音)</span>
          <div class="grid-5">
            {#each script.dakuten as row}
              {#each row as ch}
                <button
                  class="cell"
                  on:mouseenter={() => playHover(ch)}
                  tabindex="-1"
                >
                  <span class="char japanese">{ch}</span>
                  <span class="romaji">{charMap.get(ch)?.romaji ?? ''}</span>
                </button>
              {/each}
            {/each}
          </div>
        </section>

        <section class="kana-section">
          <span class="section-label">Combinations / yōon (拗音)</span>
          <div class="grid-3">
            {#each script.youon as row}
              {#each row as c}
                <button
                  class="cell wide"
                  on:mouseenter={() => playHover(c.character)}
                  tabindex="-1"
                >
                  <span class="char japanese">{c.character}</span>
                  <span class="romaji">{c.romaji}</span>
                </button>
              {/each}
            {/each}
          </div>
        </section>
      </div>
    {/each}
  </div>
</div>

<style>
  .page {
    max-width: 960px;
    margin: 0 auto;
  }

  .page-header {
    margin-bottom: 1.75rem;
  }

  h2 {
    font-size: 1.6rem;
    margin-bottom: 0.2rem;
  }

  .subtitle {
    color: var(--text-muted);
    font-size: 0.9rem;
  }

  .scripts-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  @media (max-width: 640px) {
    .scripts-grid {
      grid-template-columns: 1fr;
    }
  }

  .script-col {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .script-title {
    font-size: 1.15rem;
    font-weight: 700;
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    margin: 0;
  }

  .jp-title {
    font-size: 0.9rem;
    color: var(--text-muted);
    font-weight: 400;
    font-family: var(--japanese-font);
  }

  .kana-section {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .section-label {
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--text-secondary-btn);
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .grid-5 {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 3px;
  }

  .grid-3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3px;
  }

  .cell {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.35rem 0.2rem;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 5px;
    cursor: default;
    transition: background 0.1s, border-color 0.1s;
    min-height: 64px;
    box-shadow: var(--shadow-card);
  }

  .cell.empty {
    background: transparent;
    border-color: transparent;
    box-shadow: none;
  }

  .cell.has-audio {
    cursor: pointer;
  }

  .cell.has-audio:hover {
    background: var(--bg-toggle-active);
    border-color: var(--border-focus);
  }

  .char {
    font-size: 2rem;
    line-height: 1.1;
    color: var(--text-dark);
  }

  .cell.wide .char {
    font-size: 1.4rem;
  }

  .romaji {
    font-size: 0.9rem;
    color: var(--text-muted);
    margin-top: 3px;
    line-height: 1;
  }
</style>
