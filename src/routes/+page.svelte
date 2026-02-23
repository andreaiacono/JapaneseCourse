<script lang="ts">
  import { base } from '$app/paths';
</script>

<div class="home">
  <section class="hero">
    <div class="hero-text">
      <h1>Japanese Study</h1>
      <p class="tagline">Learn hiragana, katakana, and kanji — at your own pace.</p>
    </div>
    <div class="hero-chars" aria-hidden="true">
      <span>あ</span><span>ア</span><span>一</span>
    </div>
  </section>

  <section class="features">
    <a href="{base}/study" class="feature-card">
      <div class="feature-icon">📖</div>
      <div class="feature-body">
        <h2>Kana Reference</h2>
        <p>
          Browse the complete hiragana and katakana charts — basic, voiced (dakuten), and
          combination (yōon) characters. Hover over any basic kana to hear its pronunciation.
        </p>
      </div>
      <span class="feature-cta">Open reference →</span>
    </a>

    <a href="{base}/kana-quiz" class="feature-card">
      <div class="feature-icon">✏️</div>
      <div class="feature-body">
        <h2>Kana Quiz</h2>
        <p>
          Test your knowledge of hiragana and katakana. Choose which characters to practise,
          then answer with multiple choice or by typing the romaji. Scores are tracked live
          throughout the session.
        </p>
      </div>
      <span class="feature-cta">Start quiz →</span>
    </a>

    <a href="{base}/kanji-quiz" class="feature-card">
      <div class="feature-icon">漢</div>
      <div class="feature-body">
        <h2>Kanji Quiz</h2>
        <p>
          Practise JLPT N5 and N4 kanji words. Two quiz types: <em>Reading</em> (see the
          word, identify its meaning) or <em>Listening</em> (hear the audio, identify its
          meaning). Multiple choice or typing — your call.
        </p>
      </div>
      <span class="feature-cta">Start quiz →</span>
    </a>
  </section>

  <section class="about">
    <h3>About this app</h3>
    <p>
      Japanese Study is an offline-capable Progressive Web App (PWA). Once loaded, it works
      without an internet connection — audio included. Install it to your home screen for
      quick access.
    </p>
  </section>
</div>

<style>
  .home {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  /* Hero */
  .hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    padding: 2rem 0 1rem;
  }

  .hero-text h1 {
    font-size: 2.2rem;
    font-weight: 800;
    margin: 0 0 0.4rem;
    color: var(--text-dark);
  }

  .tagline {
    font-size: 1.05rem;
    color: var(--text-muted);
    margin: 0;
  }

  .hero-chars {
    display: flex;
    gap: 0.5rem;
    flex-shrink: 0;
  }

  .hero-chars span {
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 2.8rem;
    color: var(--primary);
    opacity: 0.8;
    line-height: 1;
  }

  /* Feature cards */
  .features {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .feature-card {
    display: grid;
    grid-template-columns: 3rem 1fr auto;
    grid-template-rows: auto auto;
    align-items: start;
    gap: 0 1rem;
    padding: 1.25rem 1.5rem;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 10px;
    text-decoration: none;
    color: inherit;
    box-shadow: var(--shadow-card);
    transition:
      border-color 0.15s,
      background 0.15s,
      box-shadow 0.15s;
  }

  .feature-card:hover {
    border-color: var(--border-focus);
    background: var(--bg-card-hover);
    box-shadow: 0 4px 18px rgba(26, 115, 232, 0.12);
  }

  .feature-icon {
    grid-row: 1 / 3;
    font-size: 1.9rem;
    line-height: 1;
    padding-top: 0.1rem;
    font-family: 'Noto Sans JP', sans-serif;
  }

  .feature-body {
    grid-column: 2;
    grid-row: 1;
  }

  .feature-body h2 {
    font-size: 1.1rem;
    font-weight: 700;
    margin: 0 0 0.3rem;
    color: var(--text-dark);
  }

  .feature-body p {
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin: 0;
    line-height: 1.55;
  }

  .feature-cta {
    grid-column: 3;
    grid-row: 1;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--primary-text);
    white-space: nowrap;
    align-self: center;
  }

  /* About */
  .about {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 1.25rem 1.5rem;
    box-shadow: var(--shadow-card);
  }

  .about h3 {
    font-size: 1rem;
    font-weight: 700;
    margin: 0 0 0.5rem;
    color: var(--text-dark);
  }

  .about p {
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin: 0;
    line-height: 1.55;
  }

  /* Responsive */
  @media (max-width: 560px) {
    .hero {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      padding-top: 1rem;
    }

    .feature-card {
      grid-template-columns: 2.5rem 1fr;
      grid-template-rows: auto auto auto;
    }

    .feature-cta {
      grid-column: 2;
      grid-row: 2;
      margin-top: 0.4rem;
    }
  }
</style>
