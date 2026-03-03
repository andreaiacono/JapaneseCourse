<script lang="ts">
  import { page } from '$app/stores';
  import { base } from '$app/paths';
  import { goto } from '$app/navigation';
  import { tick } from 'svelte';
  import { n5Course } from '$lib/data/course/index.js';
  import { markLessonComplete, startLesson, getLessonStatus } from '$lib/stores/courseStore.js';
  import type {
    Lesson, ContentBlock, Exercise,
    MultipleChoiceExercise, FillInBlankExercise, SentenceConstructionExercise
  } from '$lib/models/Course.js';

  // ─── Routing ──────────────────────────────────────────────────────────────

  $: slug = $page.params.slug;
  $: lesson = Object.values(n5Course.lessons).find((l) => l.slug === slug) as Lesson | undefined;

  // ─── Phase management ─────────────────────────────────────────────────────

  type Phase = 'lesson' | 'practice' | 'quiz' | 'results';
  let phase: Phase = 'lesson';

  // ─── Content display ──────────────────────────────────────────────────────

  let showRomaji = false;
  let showTranslation = false;

  // ─── Practice ─────────────────────────────────────────────────────────────

  let practiceIndex = 0;
  let practiceInput = '';
  let practiceSelected = '';
  let practiceTokens: string[] = [];
  let practiceAssembled: string[] = [];
  let practiceResult: 'correct' | 'incorrect' | null = null;
  let practiceCorrectCount = 0;

  $: practiceExercise = lesson?.practiceExercises[practiceIndex] ?? null;

  function startPractice() {
    phase = 'practice';
    practiceIndex = 0;
    practiceCorrectCount = 0;
    resetPracticeState();
  }

  function resetPracticeState() {
    practiceInput = '';
    practiceSelected = '';
    practiceResult = null;
    if (practiceExercise?.type === 'sentence-construction') {
      const ex = practiceExercise as SentenceConstructionExercise;
      practiceTokens = [...ex.scrambledTokens].sort(() => Math.random() - 0.5);
      practiceAssembled = [];
    }
  }

  function submitPractice() {
    if (!practiceExercise) return;
    const correct = checkAnswer(practiceExercise, practiceInput, practiceSelected, practiceAssembled);
    practiceResult = correct ? 'correct' : 'incorrect';
    if (correct) practiceCorrectCount++;
  }

  async function nextPractice() {
    if (!lesson) return;
    if (practiceIndex + 1 < lesson.practiceExercises.length) {
      practiceIndex++;
      resetPracticeState();
    } else {
      startQuiz();
    }
  }

  // ─── Quiz ─────────────────────────────────────────────────────────────────

  let quizIndex = 0;
  let quizInput = '';
  let quizSelected = '';
  let quizTokens: string[] = [];
  let quizAssembled: string[] = [];
  let quizResult: 'correct' | 'incorrect' | null = null;
  let quizCorrectCount = 0;

  $: quizExercise = lesson?.quiz[quizIndex] ?? null;

  function startQuiz() {
    if (lesson) startLesson(lesson.id);
    phase = 'quiz';
    quizIndex = 0;
    quizCorrectCount = 0;
    resetQuizState();
  }

  function resetQuizState() {
    quizInput = '';
    quizSelected = '';
    quizResult = null;
    if (quizExercise?.type === 'sentence-construction') {
      const ex = quizExercise as SentenceConstructionExercise;
      quizTokens = [...ex.scrambledTokens].sort(() => Math.random() - 0.5);
      quizAssembled = [];
    }
  }

  function submitQuiz() {
    if (!quizExercise) return;
    const correct = checkAnswer(quizExercise, quizInput, quizSelected, quizAssembled);
    quizResult = correct ? 'correct' : 'incorrect';
    if (correct) quizCorrectCount++;
  }

  async function nextQuiz() {
    if (!lesson) return;
    if (quizIndex + 1 < lesson.quiz.length) {
      quizIndex++;
      resetQuizState();
    } else {
      phase = 'results';
    }
  }

  // ─── Results ──────────────────────────────────────────────────────────────

  $: quizTotal = lesson?.quiz.length ?? 0;
  $: score = quizTotal > 0 ? Math.round((quizCorrectCount / quizTotal) * 100) : 0;
  $: passed = score >= 70;

  function completeLesson() {
    if (lesson) markLessonComplete(lesson.id, score);
    goto(`${base}/course`);
  }

  function retryQuiz() {
    phase = 'quiz';
    quizIndex = 0;
    quizCorrectCount = 0;
    resetQuizState();
  }

  // ─── Sentence construction helpers ────────────────────────────────────────

  function addToken(token: string, idx: number, tokens: string[], assembled: string[]) {
    assembled.push(token);
    tokens.splice(idx, 1);
    return { tokens: [...tokens], assembled: [...assembled] };
  }

  function removeToken(token: string, idx: number, tokens: string[], assembled: string[]) {
    tokens.push(token);
    assembled.splice(idx, 1);
    return { tokens: [...tokens], assembled: [...assembled] };
  }

  // ─── Answer checking ──────────────────────────────────────────────────────

  function checkAnswer(
    exercise: Exercise,
    input: string,
    selected: string,
    assembled: string[]
  ): boolean {
    if (exercise.type === 'multiple-choice') {
      const mc = exercise as MultipleChoiceExercise;
      return selected === mc.correctChoiceId;
    }
    if (exercise.type === 'fill-in-blank') {
      const fib = exercise as FillInBlankExercise;
      const trimmed = input.trim();
      return fib.acceptedAnswers.some(
        (a) => a.toLowerCase() === trimmed.toLowerCase()
      );
    }
    if (exercise.type === 'sentence-construction') {
      const sc = exercise as SentenceConstructionExercise;
      return assembled.join('') === sc.targetSentence;
    }
    return false;
  }

  // ─── Inline markdown renderer ─────────────────────────────────────────────

  function renderMarkdown(md: string): string {
    return md
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/`(.+?)`/g, '<code>$1</code>')
      .replace(/〜([^\s、。]+)/g, '<span class="grammar-pattern">〜$1</span>')
      .replace(/\n/g, '<br>');
  }

  // ─── Get correct answer text for display ─────────────────────────────────

  function getCorrectText(exercise: Exercise): string {
    if (exercise.type === 'multiple-choice') {
      const mc = exercise as MultipleChoiceExercise;
      return mc.choices.find((c) => c.id === mc.correctChoiceId)?.text ?? '';
    }
    if (exercise.type === 'fill-in-blank') {
      return (exercise as FillInBlankExercise).acceptedAnswers[0];
    }
    if (exercise.type === 'sentence-construction') {
      return (exercise as SentenceConstructionExercise).targetSentence;
    }
    return '';
  }

  // ─── Focus fill-in input ──────────────────────────────────────────────────

  let fillInputEl: HTMLInputElement | null = null;
  $: if (fillInputEl && (phase === 'practice' || phase === 'quiz')) {
    tick().then(() => fillInputEl?.focus());
  }
</script>

{#if !lesson}
  <div class="not-found">
    <p>Lesson not found.</p>
    <a href="{base}/course">← Back to Course</a>
  </div>
{:else}
  <div class="lesson-page">
    <!-- Breadcrumb -->
    <div class="breadcrumb">
      <a href="{base}/course">Course</a>
      <span>›</span>
      <span>{lesson.title}</span>
    </div>

    <!-- ═══ LESSON PHASE ═══════════════════════════════════════════════════ -->
    {#if phase === 'lesson'}
      <div class="lesson-view">
        <div class="lesson-header">
          <h1 class="japanese">{lesson.title}</h1>
          {#if lesson.subtitle}<p class="lesson-subtitle">{lesson.subtitle}</p>{/if}
          <div class="lesson-meta-row">
            <span class="meta-tag">{lesson.jlptLevel}</span>
            <span class="meta-tag">{lesson.estimatedMinutes} min</span>
          </div>
        </div>

        <div class="content-blocks">
          {#each lesson.contentBlocks as block}
            {#if block.type === 'text'}
              <div class="block-text">{@html renderMarkdown(block.markdown)}</div>

            {:else if block.type === 'example'}
              <div class="block-example">
                <p class="example-ja japanese">{block.sentence.ja}</p>
                {#if block.sentence.furigana}
                  <p class="example-furigana japanese" class:hidden={!showRomaji && !block.sentence.romaji}>{block.sentence.furigana}</p>
                {/if}
                {#if block.sentence.romaji}
                  <p class="example-romaji" class:hidden={!showRomaji}>{block.sentence.romaji}</p>
                {/if}
                <p class="example-en" class:hidden={!showTranslation}>{block.sentence.en}</p>
                {#if block.sentence.note}
                  <p class="example-note">{block.sentence.note}</p>
                {/if}
              </div>

            {:else if block.type === 'tip'}
              <div class="block-tip">{@html renderMarkdown(block.markdown)}</div>

            {:else if block.type === 'warning'}
              <div class="block-warning">{@html renderMarkdown(block.markdown)}</div>

            {:else if block.type === 'table'}
              <div class="block-table-wrapper">
                <table class="block-table">
                  <thead>
                    <tr>{#each block.headers as h}<th>{h}</th>{/each}</tr>
                  </thead>
                  <tbody>
                    {#each block.rows as row}
                      <tr>{#each row as cell}<td class="japanese">{cell}</td>{/each}</tr>
                    {/each}
                  </tbody>
                </table>
              </div>

            {:else if block.type === 'conjugation-table'}
              <div class="block-table-wrapper">
                <table class="block-table">
                  <thead>
                    <tr><th>Form</th><th>Affirmative</th><th>Negative</th></tr>
                  </thead>
                  <tbody>
                    {#each block.forms as row}
                      <tr>
                        <td>{row.form}</td>
                        <td class="japanese" title="{row.affirmative.reading}">{row.affirmative.ja}<br><span class="cell-en">{row.affirmative.en}</span></td>
                        <td class="japanese" title="{row.negative.reading}">{row.negative.ja}<br><span class="cell-en">{row.negative.en}</span></td>
                      </tr>
                    {/each}
                  </tbody>
                </table>
              </div>

            {:else if block.type === 'comparison'}
              <div class="block-comparison">
                {#each block.items as item}
                  <div class="comparison-item">
                    <div class="comparison-label">{item.label}</div>
                    <div class="comparison-body">{@html renderMarkdown(item.markdown)}</div>
                  </div>
                {/each}
              </div>

            {:else if block.type === 'reading'}
              <div class="block-reading">
                <h3 class="reading-title">
                  <span class="japanese">{block.title}</span>
                  {#if showTranslation}
                    <span class="reading-title-en">{block.titleEn}</span>
                  {/if}
                </h3>
                <div class="reading-passage">
                  {#each block.sentences as sentence}
                    <p class="reading-sentence">
                      <span class="reading-ja japanese">
                        {#each sentence.segments as seg}
                          {#if Array.isArray(seg)}
                            {#if showRomaji}
                              <ruby>{seg[0]}<rt>{seg[1]}</rt></ruby>
                            {:else}
                              {seg[0]}
                            {/if}
                          {:else}
                            {seg}
                          {/if}
                        {/each}
                      </span>
                      {#if showTranslation}
                        <span class="reading-en">{sentence.en}</span>
                      {/if}
                    </p>
                  {/each}
                </div>
              </div>
            {/if}
          {/each}
        </div>

        <!-- Example display toggles -->
        <div class="display-toggles">
          <button class="toggle-btn" class:active={showRomaji} on:click={() => showRomaji = !showRomaji}>
            {#if lesson.tags.includes('reading')}
              {showRomaji ? 'Hide Furigana' : 'Show Furigana'}
            {:else}
              {showRomaji ? 'Hide Romaji' : 'Show Romaji'}
            {/if}
          </button>
          <button class="toggle-btn" class:active={showTranslation} on:click={() => showTranslation = !showTranslation}>
            {showTranslation ? 'Hide Translations' : 'Show Translations'}
          </button>
        </div>

        {#if lesson.practiceExercises.length > 0}
          <button class="primary-btn" on:click={startPractice}>Start Practice →</button>
        {:else}
          <button class="primary-btn" on:click={startQuiz}>Take Quiz →</button>
        {/if}
      </div>

    <!-- ═══ PRACTICE PHASE ════════════════════════════════════════════════ -->
    {:else if phase === 'practice'}
      {#if practiceExercise}
        <div class="exercise-view">
          <div class="phase-header">
            <span class="phase-label">Practice</span>
            <span class="phase-count">{practiceIndex + 1} / {lesson.practiceExercises.length}</span>
          </div>

          <div class="exercise-card">
            <p class="exercise-prompt">{practiceExercise.prompt}</p>

            {#if practiceExercise.type === 'multiple-choice'}
              {@const mc = practiceExercise}
              <p class="exercise-question">{mc.question}</p>
              <div class="choices-grid">
                {#each mc.choices as choice}
                  <button
                    class="choice-btn"
                    class:selected={practiceSelected === choice.id}
                    class:correct={practiceResult !== null && choice.id === mc.correctChoiceId}
                    class:incorrect={practiceResult === 'incorrect' && practiceSelected === choice.id && choice.id !== mc.correctChoiceId}
                    disabled={practiceResult !== null}
                    on:click={() => practiceSelected = choice.id}
                  >
                    <span class="japanese">{choice.text}</span>
                  </button>
                {/each}
              </div>

            {:else if practiceExercise.type === 'fill-in-blank'}
              {@const fib = practiceExercise}
              <p class="sentence-template japanese">
                {fib.sentenceTemplate.replace('{{blank}}', '______')}
              </p>
              {#if fib.wordBankOptions}
                <div class="word-bank">
                  {#each fib.wordBankOptions as opt}
                    <button
                      class="word-bank-btn"
                      class:selected={practiceInput === opt}
                      disabled={practiceResult !== null}
                      on:click={() => practiceInput = opt}
                    >{opt}</button>
                  {/each}
                </div>
              {:else}
                <input
                  bind:this={fillInputEl}
                  class="fill-input japanese"
                  type="text"
                  placeholder="Type answer..."
                  bind:value={practiceInput}
                  disabled={practiceResult !== null}
                  on:keydown={(e) => e.key === 'Enter' && practiceResult === null && practiceInput && submitPractice()}
                />
              {/if}

            {:else if practiceExercise.type === 'sentence-construction'}
              {@const sc = practiceExercise}
              <div class="construction-assembled">
                {#each practiceAssembled as tok, i}
                  <button
                    class="token-btn token-assembled"
                    disabled={practiceResult !== null}
                    on:click={() => {
                      const r = removeToken(tok, i, practiceTokens, practiceAssembled);
                      practiceTokens = r.tokens;
                      practiceAssembled = r.assembled;
                    }}
                  >{tok}</button>
                {/each}
                {#if practiceAssembled.length === 0}
                  <span class="construction-placeholder">Tap words below to build the sentence</span>
                {/if}
              </div>
              <div class="construction-bank">
                {#each practiceTokens as tok, i}
                  <button
                    class="token-btn token-bank"
                    disabled={practiceResult !== null}
                    on:click={() => {
                      const r = addToken(tok, i, practiceTokens, practiceAssembled);
                      practiceTokens = r.tokens;
                      practiceAssembled = r.assembled;
                    }}
                  >{tok}</button>
                {/each}
              </div>
            {/if}

            {#if practiceResult !== null}
              <div class="result-banner" class:result-correct={practiceResult === 'correct'} class:result-incorrect={practiceResult === 'incorrect'}>
                {#if practiceResult === 'correct'}
                  ✓ Correct!
                {:else}
                  ✗ Incorrect — Correct answer: <strong class="japanese">{getCorrectText(practiceExercise)}</strong>
                {/if}
                {#if practiceExercise.explanation}
                  <p class="result-explanation">{practiceExercise.explanation}</p>
                {/if}
              </div>
            {/if}

            {#if practiceExercise.hint && practiceResult === null}
              <p class="hint">💡 {practiceExercise.hint}</p>
            {/if}
          </div>

          <div class="exercise-actions">
            {#if practiceResult === null}
              <button
                class="primary-btn"
                disabled={!practiceSelected && !practiceInput && practiceAssembled.length === 0}
                on:click={submitPractice}
              >Check Answer</button>
            {:else}
              <button class="primary-btn" on:click={nextPractice}>
                {practiceIndex + 1 < lesson.practiceExercises.length ? 'Next Exercise →' : 'Continue to Quiz →'}
              </button>
            {/if}
          </div>
        </div>
      {/if}

    <!-- ═══ QUIZ PHASE ════════════════════════════════════════════════════ -->
    {:else if phase === 'quiz'}
      {#if quizExercise}
        <div class="exercise-view">
          <div class="phase-header">
            <span class="phase-label">Quiz</span>
            <span class="phase-count">{quizIndex + 1} / {lesson.quiz.length}</span>
          </div>

          <div class="quiz-progress-bar">
            <div class="quiz-progress-fill" style="width: {(quizIndex / lesson.quiz.length) * 100}%"></div>
          </div>

          <div class="exercise-card">
            <p class="exercise-prompt">{quizExercise.prompt}</p>

            {#if quizExercise.type === 'multiple-choice'}
              {@const mc = quizExercise}
              <p class="exercise-question">{mc.question}</p>
              <div class="choices-grid">
                {#each mc.choices as choice}
                  <button
                    class="choice-btn"
                    class:selected={quizSelected === choice.id}
                    class:correct={quizResult !== null && choice.id === mc.correctChoiceId}
                    class:incorrect={quizResult === 'incorrect' && quizSelected === choice.id && choice.id !== mc.correctChoiceId}
                    disabled={quizResult !== null}
                    on:click={() => quizSelected = choice.id}
                  >
                    <span class="japanese">{choice.text}</span>
                  </button>
                {/each}
              </div>

            {:else if quizExercise.type === 'fill-in-blank'}
              {@const fib = quizExercise}
              <p class="sentence-template japanese">
                {fib.sentenceTemplate.replace('{{blank}}', '______')}
              </p>
              {#if fib.wordBankOptions}
                <div class="word-bank">
                  {#each fib.wordBankOptions as opt}
                    <button
                      class="word-bank-btn"
                      class:selected={quizInput === opt}
                      disabled={quizResult !== null}
                      on:click={() => quizInput = opt}
                    >{opt}</button>
                  {/each}
                </div>
              {:else}
                <input
                  bind:this={fillInputEl}
                  class="fill-input japanese"
                  type="text"
                  placeholder="Type answer..."
                  bind:value={quizInput}
                  disabled={quizResult !== null}
                  on:keydown={(e) => e.key === 'Enter' && quizResult === null && quizInput && submitQuiz()}
                />
              {/if}

            {:else if quizExercise.type === 'sentence-construction'}
              {@const sc = quizExercise}
              <div class="construction-assembled">
                {#each quizAssembled as tok, i}
                  <button
                    class="token-btn token-assembled"
                    disabled={quizResult !== null}
                    on:click={() => {
                      const r = removeToken(tok, i, quizTokens, quizAssembled);
                      quizTokens = r.tokens;
                      quizAssembled = r.assembled;
                    }}
                  >{tok}</button>
                {/each}
                {#if quizAssembled.length === 0}
                  <span class="construction-placeholder">Tap words below to build the sentence</span>
                {/if}
              </div>
              <div class="construction-bank">
                {#each quizTokens as tok, i}
                  <button
                    class="token-btn token-bank"
                    disabled={quizResult !== null}
                    on:click={() => {
                      const r = addToken(tok, i, quizTokens, quizAssembled);
                      quizTokens = r.tokens;
                      quizAssembled = r.assembled;
                    }}
                  >{tok}</button>
                {/each}
              </div>
            {/if}

            {#if quizResult !== null}
              <div class="result-banner" class:result-correct={quizResult === 'correct'} class:result-incorrect={quizResult === 'incorrect'}>
                {#if quizResult === 'correct'}
                  ✓ Correct!
                {:else}
                  ✗ Incorrect — Correct answer: <strong class="japanese">{getCorrectText(quizExercise)}</strong>
                {/if}
                {#if quizExercise.explanation}
                  <p class="result-explanation">{quizExercise.explanation}</p>
                {/if}
              </div>
            {/if}
          </div>

          <div class="exercise-actions">
            {#if quizResult === null}
              <button
                class="primary-btn"
                disabled={!quizSelected && !quizInput && quizAssembled.length === 0}
                on:click={submitQuiz}
              >Check Answer</button>
            {:else}
              <button class="primary-btn" on:click={nextQuiz}>
                {quizIndex + 1 < lesson.quiz.length ? 'Next Question →' : 'See Results →'}
              </button>
            {/if}
          </div>
        </div>
      {/if}

    <!-- ═══ RESULTS PHASE ════════════════════════════════════════════════ -->
    {:else if phase === 'results'}
      <div class="results-view">
        <div class="results-score" class:results-pass={passed} class:results-fail={!passed}>
          <div class="score-number">{score}%</div>
          <div class="score-label">{passed ? 'Passed!' : 'Not quite...'}</div>
        </div>

        <div class="score-breakdown">
          <span class="score-correct">✓ {quizCorrectCount} correct</span>
          <span class="score-incorrect">✗ {quizTotal - quizCorrectCount} wrong</span>
        </div>

        {#if !passed}
          <p class="pass-info">You need 70% or higher to complete this lesson.</p>
        {/if}

        <div class="results-actions">
          {#if passed}
            <button class="primary-btn" on:click={completeLesson}>Complete Lesson ✓</button>
          {/if}
          <button class="secondary-btn" on:click={retryQuiz}>Try Again</button>
          <a href="{base}/course" class="secondary-btn">← Back to Course</a>
        </div>
      </div>
    {/if}
  </div>
{/if}

<style>
  .lesson-page {
    max-width: 680px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .not-found {
    text-align: center;
    padding: 3rem;
    color: var(--text-muted);
  }

  .not-found a {
    color: var(--primary-text);
    text-decoration: none;
    font-weight: 600;
  }

  /* Breadcrumb */
  .breadcrumb {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.82rem;
    color: var(--text-muted);
  }

  .breadcrumb a {
    color: var(--primary-text);
    text-decoration: none;
    font-weight: 500;
  }

  .breadcrumb a:hover {
    text-decoration: underline;
  }

  /* Lesson header */
  .lesson-header {
    margin-bottom: 0.5rem;
  }

  .lesson-header h1 {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--text-dark);
    margin: 0 0 0.25rem;
  }

  .lesson-subtitle {
    color: var(--text-muted);
    font-size: 0.9rem;
    margin: 0 0 0.5rem;
  }

  .lesson-meta-row {
    display: flex;
    gap: 0.5rem;
  }

  .meta-tag {
    font-size: 0.75rem;
    font-weight: 600;
    background: var(--bg-toggle-active);
    color: var(--primary-text);
    padding: 0.15rem 0.55rem;
    border-radius: 10px;
  }

  /* Content blocks */
  .content-blocks {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .block-text {
    line-height: 1.7;
    color: var(--text);
    font-size: 0.95rem;
  }

  :global(.block-text strong) { color: var(--text-dark); }
  :global(.block-text code) {
    background: var(--bg-secondary-btn);
    padding: 0.1em 0.35em;
    border-radius: 4px;
    font-size: 0.9em;
    font-family: var(--japanese-font);
  }
  :global(.grammar-pattern) {
    font-family: var(--japanese-font);
    font-weight: 600;
    color: var(--primary-text);
  }

  .block-example {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-left: 4px solid var(--primary);
    border-radius: 8px;
    padding: 1rem 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .example-ja {
    font-size: 1.15rem;
    color: var(--text-dark);
    margin: 0;
  }

  .example-furigana,
  .example-romaji {
    font-size: 0.82rem;
    color: var(--text-muted);
    margin: 0;
    transition: opacity 0.15s;
  }

  .example-en {
    font-size: 0.88rem;
    color: var(--text-secondary);
    font-style: italic;
    margin: 0.15rem 0 0;
    transition: opacity 0.15s;
  }

  .example-note {
    font-size: 0.78rem;
    color: var(--text-hint);
    margin: 0.1rem 0 0;
  }

  .hidden {
    display: none;
  }

  .block-tip {
    background: #e8f5e9;
    border: 1px solid #a5d6a7;
    border-radius: 8px;
    padding: 0.85rem 1.1rem;
    font-size: 0.9rem;
    color: #1b5e20;
    line-height: 1.6;
  }

  :global([data-theme='dark']) .block-tip {
    background: #1a3320;
    border-color: #388e3c;
    color: #a5d6a7;
  }

  .block-warning {
    background: #fff3e0;
    border: 1px solid #ffe082;
    border-radius: 8px;
    padding: 0.85rem 1.1rem;
    font-size: 0.9rem;
    color: #bf360c;
    line-height: 1.6;
  }

  :global([data-theme='dark']) .block-warning {
    background: #3e2200;
    border-color: #f57c00;
    color: #ffcc80;
  }

  .block-table-wrapper {
    overflow-x: auto;
  }

  .block-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.88rem;
  }

  .block-table th {
    background: var(--bg-secondary-btn);
    color: var(--text-dark);
    font-weight: 600;
    padding: 0.5rem 0.75rem;
    text-align: left;
    border: 1px solid var(--border);
  }

  .block-table td {
    padding: 0.5rem 0.75rem;
    border: 1px solid var(--border);
    color: var(--text);
    vertical-align: top;
  }

  .cell-en {
    font-size: 0.78rem;
    color: var(--text-muted);
    font-family: inherit;
  }

  .block-comparison {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
  }

  .comparison-item {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 0.85rem;
  }

  .comparison-label {
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--primary-text);
    margin-bottom: 0.4rem;
  }

  .comparison-body {
    font-size: 0.88rem;
    color: var(--text);
    line-height: 1.6;
  }

  /* Toggles */
  .display-toggles {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-top: 0.25rem;
  }

  .toggle-btn {
    font-size: 0.82rem;
    padding: 0.3rem 0.75rem;
    border-radius: 6px;
    border: 1px solid var(--border);
    background: var(--bg-secondary-btn);
    color: var(--text-secondary);
    cursor: pointer;
    transition: background 0.12s, border-color 0.12s;
  }

  .toggle-btn:hover {
    background: var(--bg-secondary-btn-hover);
  }

  .toggle-btn.active {
    background: var(--bg-toggle-active);
    border-color: var(--primary);
    color: var(--primary-text);
  }

  /* Phase header */
  .phase-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .phase-label {
    font-size: 0.85rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-muted);
  }

  .phase-count {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-secondary);
  }

  .quiz-progress-bar {
    height: 4px;
    background: var(--bg-progress-track);
    border-radius: 2px;
    overflow: hidden;
  }

  .quiz-progress-fill {
    height: 100%;
    background: var(--primary);
    border-radius: 2px;
    transition: width 0.3s ease;
  }

  /* Exercise card */
  .exercise-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: var(--shadow-card);
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .exercise-prompt {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-dark);
    margin: 0;
  }

  .exercise-question {
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin: 0;
  }

  /* Choices */
  .choices-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.6rem;
  }

  .choice-btn {
    padding: 0.85rem;
    border-radius: 8px;
    border: 2px solid var(--border);
    background: var(--bg-input);
    color: var(--text);
    cursor: pointer;
    text-align: center;
    font-size: 0.95rem;
    transition: border-color 0.12s, background 0.12s;
    line-height: 1.4;
  }

  .choice-btn:hover:not(:disabled) {
    border-color: var(--border-focus);
    background: var(--bg-card-hover);
  }

  .choice-btn.selected {
    border-color: var(--primary);
    background: var(--bg-toggle-active);
  }

  .choice-btn.correct {
    border-color: var(--correct-border);
    background: var(--correct-bg);
    color: var(--correct-text);
  }

  .choice-btn.incorrect {
    border-color: var(--incorrect-border);
    background: var(--incorrect-bg);
    color: var(--incorrect-text);
  }

  .choice-btn:disabled {
    cursor: default;
  }

  /* Fill in blank */
  .sentence-template {
    font-size: 1.1rem;
    color: var(--text-dark);
    margin: 0;
  }

  .word-bank {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .word-bank-btn {
    padding: 0.4rem 0.9rem;
    border-radius: 8px;
    border: 2px solid var(--border);
    background: var(--bg-input);
    color: var(--text);
    cursor: pointer;
    font-size: 0.95rem;
    font-family: var(--japanese-font);
    transition: border-color 0.12s;
  }

  .word-bank-btn:hover:not(:disabled) {
    border-color: var(--border-focus);
  }

  .word-bank-btn.selected {
    border-color: var(--primary);
    background: var(--bg-toggle-active);
    color: var(--primary-text);
  }

  .fill-input {
    width: 100%;
    padding: 0.65rem 0.85rem;
    border-radius: 8px;
    border: 2px solid var(--border);
    background: var(--bg-input);
    color: var(--text);
    font-size: 1rem;
    transition: border-color 0.15s;
  }

  .fill-input:focus {
    outline: none;
    border-color: var(--border-focus);
  }

  /* Sentence construction */
  .construction-assembled {
    min-height: 48px;
    background: var(--bg);
    border: 2px dashed var(--border);
    border-radius: 8px;
    padding: 0.5rem 0.75rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    align-items: center;
  }

  .construction-placeholder {
    font-size: 0.85rem;
    color: var(--text-hint);
    font-style: italic;
  }

  .construction-bank {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .token-btn {
    padding: 0.4rem 0.75rem;
    border-radius: 8px;
    font-size: 0.95rem;
    font-family: var(--japanese-font);
    cursor: pointer;
    transition: background 0.12s, border-color 0.12s;
  }

  .token-assembled {
    background: var(--bg-toggle-active);
    border: 1.5px solid var(--primary);
    color: var(--primary-text);
  }

  .token-assembled:hover:not(:disabled) {
    background: var(--bg-card-hover);
  }

  .token-bank {
    background: var(--bg-input);
    border: 1.5px solid var(--border);
    color: var(--text);
  }

  .token-bank:hover:not(:disabled) {
    border-color: var(--border-focus);
  }

  /* Result banner */
  .result-banner {
    padding: 0.75rem 1rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.9rem;
  }

  .result-correct {
    background: var(--correct-bg);
    border: 1px solid var(--correct-border);
    color: var(--correct-text);
  }

  .result-incorrect {
    background: var(--incorrect-bg);
    border: 1px solid var(--incorrect-border);
    color: var(--incorrect-text);
  }

  .result-explanation {
    font-size: 0.82rem;
    font-weight: 400;
    margin: 0.4rem 0 0;
    opacity: 0.85;
  }

  .hint {
    font-size: 0.82rem;
    color: var(--text-muted);
    margin: 0;
  }

  /* Actions */
  .exercise-actions {
    display: flex;
    justify-content: flex-end;
  }

  /* Results view */
  .results-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    padding: 2rem 0;
  }

  .results-score {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 6px solid;
  }

  .results-pass {
    border-color: var(--correct-border);
    background: var(--correct-bg);
    color: var(--correct-text);
  }

  .results-fail {
    border-color: var(--incorrect-border);
    background: var(--incorrect-bg);
    color: var(--incorrect-text);
  }

  .score-number {
    font-size: 2.2rem;
    font-weight: 800;
    line-height: 1;
  }

  .score-label {
    font-size: 0.9rem;
    font-weight: 600;
    margin-top: 0.2rem;
  }

  .score-breakdown {
    display: flex;
    gap: 1.5rem;
    font-size: 1rem;
    font-weight: 600;
  }

  .score-correct { color: var(--correct-text); }
  .score-incorrect { color: var(--incorrect-text); }

  .pass-info {
    font-size: 0.88rem;
    color: var(--text-muted);
    margin: 0;
  }

  .results-actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
    width: 100%;
    max-width: 300px;
  }

  /* Buttons */
  .primary-btn {
    padding: 0.75rem 1.75rem;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.15s;
    width: 100%;
  }

  .primary-btn:hover:not(:disabled) {
    background: var(--primary-dark);
  }

  .primary-btn:disabled {
    background: var(--disabled-bg);
    cursor: default;
  }

  .secondary-btn {
    padding: 0.65rem 1.5rem;
    background: var(--bg-secondary-btn);
    color: var(--text-secondary-btn);
    border: 1px solid var(--border);
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    transition: background 0.12s;
    width: 100%;
    display: block;
  }

  .secondary-btn:hover {
    background: var(--bg-secondary-btn-hover);
  }

  @media (max-width: 480px) {
    .choices-grid {
      grid-template-columns: 1fr;
    }

    .block-comparison {
      grid-template-columns: 1fr;
    }
  }

  /* Reading block */
  .block-reading {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-left: 4px solid #7c4dff;
    border-radius: 8px;
    padding: 1.25rem 1.5rem;
  }

  .reading-title {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--text-dark);
    margin: 0 0 1rem;
    display: flex;
    align-items: baseline;
    gap: 0.6rem;
    flex-wrap: wrap;
  }

  .reading-title-en {
    font-size: 0.85rem;
    font-weight: 400;
    color: var(--text-muted);
    font-style: italic;
  }

  .reading-passage {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .reading-sentence {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    margin: 0;
  }

  .reading-ja {
    font-size: 1.2rem;
    line-height: 2.2;
    color: var(--text-dark);
  }

  .reading-en {
    font-size: 0.85rem;
    color: var(--text-secondary);
    font-style: italic;
    padding-left: 0.5rem;
    border-left: 2px solid var(--border);
  }

  :global(.reading-ja ruby rt) {
    font-size: 0.55em;
    color: var(--text-muted);
  }
</style>
