<script lang="ts">
  import { base } from '$app/paths';
</script>

<div class="home">
  <section class="hero">
    <div class="hero-text">
      <h1>Japanese Study</h1>
      <p class="tagline">
        Everything you need to reach JLPT N5 — the characters, the words, and a course that
        ties them together. Work at your own pace, on any device, online or off.
      </p>
    </div>
    <div class="hero-chars" aria-hidden="true">
      <span>あ</span><span>ア</span><span>字</span>
    </div>
  </section>

  <!-- The learning path -->
  <section class="path">
    <div class="path-intro">
      <h2>How to use this app</h2>
      <p>
        Three steps, in order. Learn the characters first, drill them until they stick, then let
        the course build real Japanese on top. Come back to <a href="{base}/progress">Progress</a>
        any time to see how far along each step you are.
      </p>
    </div>

    <ol class="steps">
      <li class="step">
        <div class="step-num">1</div>
        <div class="step-body">
          <h3>Learn the kana</h3>
          <p>
            Hiragana and katakana are the two phonetic alphabets — <strong>208 characters</strong>
            in all. You need them to read anything else here, so start with the reference to learn
            the shapes, then drill with the quiz until you can read them on sight.
          </p>
          <div class="step-links">
            <a href="{base}/kana">Kana Reference →</a>
            <a href="{base}/kana-quiz">Kana Quiz →</a>
          </div>
        </div>
      </li>

      <li class="step">
        <div class="step-num">2</div>
        <div class="step-body">
          <h3>Build up kanji</h3>
          <p>
            The full <strong>294 kanji</strong> of JLPT N5 and N4, each with its meaning, readings,
            and example words. This is a long track — keep drilling it in the quiz alongside the
            course rather than trying to finish it first.
          </p>
          <div class="step-links">
            <a href="{base}/kanji">Kanji Reference →</a>
            <a href="{base}/kanji-quiz">Kanji Quiz →</a>
          </div>
        </div>
      </li>

      <li class="step">
        <div class="step-num">3</div>
        <div class="step-body">
          <h3>Follow the course</h3>
          <p>
            The structured spine: <strong>35 lessons</strong> across 9 chapters, from the writing
            systems through grammar, verbs and adjectives. Every lesson has explanations, spoken
            examples, practice, and a quiz. Grammar and vocabulary are introduced as you go.
          </p>
          <div class="step-links">
            <a href="{base}/course">Start the course →</a>
          </div>
        </div>
      </li>
    </ol>
  </section>

  <!-- References, used on demand -->
  <section class="refs">
    <h2>References — dip in whenever you need them</h2>
    <div class="ref-grid">
      <a href="{base}/vocab" class="ref-card">
        <span class="ref-icon">🗂️</span>
        <span class="ref-title">Vocabulary</span>
        <span class="ref-desc">135 N5 words with readings, meanings, and spoken examples.</span>
      </a>
      <a href="{base}/grammar" class="ref-card">
        <span class="ref-icon">📐</span>
        <span class="ref-title">Grammar</span>
        <span class="ref-desc">25 N5 patterns — formation, usage, and compared forms.</span>
      </a>
      <a href="{base}/progress" class="ref-card">
        <span class="ref-icon">📊</span>
        <span class="ref-title">Progress</span>
        <span class="ref-desc">What you've mastered across kana, kanji, grammar and the course.</span>
      </a>
      <a href="{base}/settings" class="ref-card">
        <span class="ref-icon">⚙️</span>
        <span class="ref-title">Settings</span>
        <span class="ref-desc">Japanese font, and the voice and speed for spoken audio.</span>
      </a>
    </div>
  </section>

  <section class="about">
    <p>
      Everything is voiced with neural text-to-speech, so you can hear any character, word or
      sentence in a male or female voice at a speed you choose. The app is an installable,
      offline-capable PWA — once loaded it works with no connection, audio included.
    </p>
  </section>
</div>

<style>
  .home {
    max-width: 820px;
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
    padding: 2rem 0 0.5rem;
  }

  .hero-text h1 {
    font-size: 2.2rem;
    font-weight: 800;
    margin: 0 0 0.5rem;
    color: var(--text-dark);
  }

  .tagline {
    font-size: 1.02rem;
    color: var(--text-secondary);
    margin: 0;
    line-height: 1.55;
    max-width: 46ch;
  }

  .hero-chars {
    display: flex;
    gap: 0.5rem;
    flex-shrink: 0;
  }

  .hero-chars span {
    font-family: var(--japanese-font);
    font-size: 2.8rem;
    color: var(--primary);
    opacity: 0.8;
    line-height: 1;
  }

  /* Path */
  .path-intro h2,
  .refs h2 {
    font-size: 1.3rem;
    font-weight: 800;
    margin: 0 0 0.4rem;
    color: var(--text-dark);
  }

  .path-intro p {
    font-size: 0.95rem;
    color: var(--text-secondary);
    margin: 0 0 1.25rem;
    line-height: 1.55;
  }

  .path-intro a,
  .step-links a {
    color: var(--primary);
    font-weight: 600;
    text-decoration: none;
  }

  .path-intro a:hover {
    text-decoration: underline;
  }

  .steps {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .step {
    display: flex;
    gap: 1.1rem;
    padding: 1.25rem 1.5rem;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 12px;
    box-shadow: var(--shadow-card);
  }

  .step-num {
    flex-shrink: 0;
    width: 2.1rem;
    height: 2.1rem;
    border-radius: 50%;
    background: var(--primary);
    color: var(--primary-text);
    font-weight: 800;
    font-size: 1.05rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .step-body {
    flex: 1;
  }

  .step-body h3 {
    font-size: 1.1rem;
    font-weight: 700;
    margin: 0.1rem 0 0.4rem;
    color: var(--text-dark);
  }

  .step-body p {
    font-size: 0.92rem;
    color: var(--text-secondary);
    margin: 0 0 0.8rem;
    line-height: 1.6;
  }

  .step-links {
    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;
  }

  .step-links a:hover {
    text-decoration: underline;
  }

  /* References */
  .ref-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 0.8rem;
  }

  .ref-card {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    padding: 1rem 1.15rem;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 10px;
    text-decoration: none;
    color: inherit;
    box-shadow: var(--shadow-card);
    transition:
      border-color 0.15s,
      background 0.15s;
  }

  .ref-card:hover {
    border-color: var(--border-focus);
    background: var(--bg-card-hover);
  }

  .ref-icon {
    font-size: 1.4rem;
    line-height: 1;
  }

  .ref-title {
    font-size: 0.98rem;
    font-weight: 700;
    color: var(--text-dark);
  }

  .ref-desc {
    font-size: 0.82rem;
    color: var(--text-muted);
    line-height: 1.45;
  }

  /* About */
  .about {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 1.15rem 1.5rem;
    box-shadow: var(--shadow-card);
  }

  .about p {
    font-size: 0.88rem;
    color: var(--text-secondary);
    margin: 0;
    line-height: 1.6;
  }

  /* Responsive */
  @media (max-width: 560px) {
    .hero {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      padding-top: 1rem;
    }

    .step {
      padding: 1.1rem 1.15rem;
      gap: 0.85rem;
    }
  }
</style>
