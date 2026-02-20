<script lang="ts">
  import { onMount, onDestroy, tick } from 'svelte';
  import { fade } from 'svelte/transition';
  import ProgressBar from '$lib/components/ProgressBar.svelte';
  import AudioButton from '$lib/components/AudioButton.svelte';
  import { QuizEngine, type QuizQuestion, type QuizResults } from '$lib/services/QuizEngine';
  import { audioManager } from '$lib/services/AudioManager';
  import type { DataLoader } from '$lib/services/DataLoader';
  import type { Character } from '$lib/models/Character';
  import {
    HIRAGANA_DAKUTEN,
    HIRAGANA_YOUON,
    KATAKANA_DAKUTEN,
    KATAKANA_YOUON
  } from '$lib/data/kanaData';

  let quizEngine: QuizEngine | null = null;
  let loader: DataLoader | null = null;
  let inputEl: HTMLInputElement | null = null;

  // Setup state
  let selectedScripts = new Set<string>(['hiragana']);
  let selectedCategories = new Set<string>(['basic']);
  let selectedModes = new Set<string>(['selection']);

  // Quiz state
  let phase: 'setup' | 'quiz' | 'results' = 'setup';
  let currentQuestion: QuizQuestion | null = null;
  let selectedAnswer: string | null = null;
  let typedAnswer = '';
  let isCorrect: boolean | null = null;
  let results: QuizResults | null = null;
  let correctCount = 0;
  let wrongCount = 0;
  let totalAnswered = 0;
  let totalQuestions = 0;

  // Toast state
  let toastAnswer = '';
  let toastType: 'correct' | 'wrong' = 'correct';
  let toastVisible = false;
  let toastTimer: ReturnType<typeof setTimeout> | null = null;

  const SCRIPTS = [
    { value: 'hiragana', label: 'Hiragana' },
    { value: 'katakana', label: 'Katakana' }
  ];

  const CATEGORIES = [
    { value: 'basic', label: 'Basic' },
    { value: 'voiced', label: 'Voiced (dakuten)' },
    { value: 'combinations', label: 'Combinations (yōon)' }
  ];

  const QUIZ_MODES = [
    { value: 'selection', label: 'Multiple choice' },
    { value: 'typing', label: 'Typing' }
  ];

  onMount(async () => {
    const { dataLoader } = await import('$lib/services/loader');
    loader = dataLoader;
    quizEngine = new QuizEngine();
  });

  onDestroy(() => {
    clearToast();
    audioManager.stop();
  });

  function clearToast() {
    if (toastTimer) { clearTimeout(toastTimer); toastTimer = null; }
    toastVisible = false;
  }

  function toggleScript(value: string) {
    if (selectedScripts.has(value)) selectedScripts.delete(value);
    else selectedScripts.add(value);
    selectedScripts = selectedScripts;
  }

  function toggleCategory(value: string) {
    if (selectedCategories.has(value)) selectedCategories.delete(value);
    else selectedCategories.add(value);
    selectedCategories = selectedCategories;
  }

  function toggleMode(value: string) {
    if (selectedModes.has(value)) selectedModes.delete(value);
    else selectedModes.add(value);
    selectedModes = selectedModes;
  }

  function buildCharacters(): Character[] {
    if (!loader) return [];
    const chars: Character[] = [];
    for (const script of selectedScripts) {
      if (selectedCategories.has('basic')) chars.push(...loader.getCharacters(script));
      if (selectedCategories.has('voiced'))
        chars.push(...(script === 'hiragana' ? HIRAGANA_DAKUTEN : KATAKANA_DAKUTEN));
      if (selectedCategories.has('combinations'))
        chars.push(...(script === 'hiragana' ? HIRAGANA_YOUON : KATAKANA_YOUON));
    }
    return chars;
  }

  function startQuiz() {
    if (!quizEngine || !loader || !canStart) return;
    const characters = buildCharacters();
    if (characters.length < 4) return;

    quizEngine.startQuiz(characters, [...selectedModes] as ('selection' | 'typing')[]);
    totalQuestions = quizEngine.getProgress().total;
    correctCount = 0;
    wrongCount = 0;
    totalAnswered = 0;
    phase = 'quiz';
    loadNextQuestion();
  }

  async function loadNextQuestion() {
    if (!quizEngine) return;
    audioManager.stop();
    selectedAnswer = null;
    typedAnswer = '';
    isCorrect = null;
    currentQuestion = quizEngine.getNextQuestion();

    if (!currentQuestion) {
      results = quizEngine.getResults();
      phase = 'results';
      return;
    }

    if (currentQuestion.type === 'audio' && currentQuestion.audioPath) {
      setTimeout(() => {
        if (currentQuestion?.audioPath) audioManager.play(currentQuestion.audioPath);
      }, 300);
    }

    if (currentQuestion.interactionMode === 'typing') {
      await tick();
      inputEl?.focus();
    }
  }

  function showToast(type: 'correct' | 'wrong', answer: string, duration: number) {
    if (toastTimer) clearTimeout(toastTimer);
    toastType = type;
    toastAnswer = answer;
    toastVisible = true;
    toastTimer = setTimeout(() => { toastVisible = false; }, duration);
  }

  function handleResult(correct: boolean) {
    if (correct) {
      correctCount++;
      showToast('correct', '', 1000);
    } else {
      wrongCount++;
      showToast('wrong', currentQuestion?.correctAnswer ?? '', 3000);
    }
    totalAnswered++;
    loadNextQuestion();
  }

  function selectAnswer(answer: string) {
    if (!quizEngine || isCorrect !== null) return;
    selectedAnswer = answer;
    isCorrect = quizEngine.checkAnswer(answer);
    handleResult(isCorrect);
  }

  function submitTypedAnswer() {
    if (!quizEngine || typedAnswer.trim() === '' || isCorrect !== null) return;
    isCorrect = quizEngine.checkTypedAnswer(typedAnswer);
    handleResult(isCorrect);
  }

  function handleTypingKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') submitTypedAnswer();
  }

  function quitQuiz() {
    clearToast();
    audioManager.stop();
    phase = 'setup';
    currentQuestion = null;
    selectedAnswer = null;
    typedAnswer = '';
    isCorrect = null;
  }

  function playAgain() {
    clearToast();
    phase = 'setup';
    currentQuestion = null;
    results = null;
  }

  $: characterCount = (() => {
    let n = 0;
    for (const _script of selectedScripts) {
      if (selectedCategories.has('basic')) n += 46;
      if (selectedCategories.has('voiced')) n += HIRAGANA_DAKUTEN.length;
      if (selectedCategories.has('combinations')) n += HIRAGANA_YOUON.length;
    }
    return n;
  })();
  $: progress = totalQuestions > 0 ? totalAnswered / totalQuestions : 0;
  $: isAnswered = isCorrect !== null;
  $: canStart =
    selectedScripts.size > 0 &&
    selectedCategories.size > 0 &&
    selectedModes.size > 0 &&
    !!quizEngine &&
    !!loader;
</script>

<!-- Answer toast -->
{#if toastVisible}
  <div class="toast" class:toast-correct={toastType === 'correct'} class:toast-wrong={toastType === 'wrong'} transition:fade={{ duration: 150 }}>
    {#if toastType === 'correct'}
      ✓ Correct!
    {:else}
      ✗ Correct answer: <strong class="japanese">{toastAnswer}</strong>
    {/if}
  </div>
{/if}

<div class="quiz-page">
  {#if phase === 'setup'}
    <div class="setup-card">
      <h2>Kana Quiz</h2>
      <p class="subtitle">Test your knowledge of Japanese characters</p>

      <div class="setup-section">
        <span class="section-label">Script</span>
        <div class="type-toggles">
          {#each SCRIPTS as { value, label }}
            <button
              class="toggle-btn"
              class:active={selectedScripts.has(value)}
              on:click={() => toggleScript(value)}>{label}</button
            >
          {/each}
        </div>
      </div>

      <div class="setup-section">
        <span class="section-label">Characters</span>
        <div class="type-toggles">
          {#each CATEGORIES as { value, label }}
            <button
              class="toggle-btn"
              class:active={selectedCategories.has(value)}
              on:click={() => toggleCategory(value)}>{label}</button
            >
          {/each}
        </div>
      </div>

      <p class="char-count">
        {#if characterCount > 0}
          {characterCount} kana selected
        {:else}
          Select at least one script and category
        {/if}
      </p>

      <div class="setup-section">
        <span class="section-label">Quiz type</span>
        <div class="type-toggles">
          {#each QUIZ_MODES as { value, label }}
            <button
              class="toggle-btn"
              class:active={selectedModes.has(value)}
              on:click={() => toggleMode(value)}>{label}</button
            >
          {/each}
        </div>
      </div>

      <button class="start-btn" on:click={startQuiz} disabled={!canStart}>Start Quiz</button>
    </div>

  {:else if phase === 'quiz' && currentQuestion}
    <div class="quiz-card">
      <div class="quiz-header">
        <ProgressBar value={progress} label="{totalAnswered}/{totalQuestions}" />
        <div class="score-counts">
          <span class="score-correct">✓ {correctCount}</span>
          <span class="score-wrong">✗ {wrongCount}</span>
        </div>
      </div>

      <div class="question-area">
        <p class="prompt">{currentQuestion.prompt}</p>
        {#if currentQuestion.type === 'audio'}
          <div class="audio-question">
            <AudioButton audioPath={currentQuestion.audioPath ?? ''} label="Play Audio" />
          </div>
        {:else}
          <div class="question-text japanese">{currentQuestion.question}</div>
        {/if}
      </div>

      {#if currentQuestion.interactionMode === 'typing'}
        <div class="typing-area">
          <input
            bind:this={inputEl}
            type="text"
            bind:value={typedAnswer}
            on:keydown={handleTypingKeydown}
            placeholder="Type the romaji..."
            disabled={isAnswered}
            class="romaji-input"
            class:input-correct={isAnswered && isCorrect}
            class:input-wrong={isAnswered && !isCorrect}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck={false}
          />
          <button
            class="submit-btn"
            on:click={submitTypedAnswer}
            disabled={isAnswered || typedAnswer.trim() === ''}
          >
            Submit
          </button>
        </div>
      {:else}
        <div class="options-grid">
          {#each currentQuestion.options as option}
            <button
              class="option-btn japanese"
              class:correct={isAnswered && option === currentQuestion.correctAnswer}
              class:incorrect={selectedAnswer === option && !isCorrect}
              disabled={isAnswered}
              on:click={() => selectAnswer(option)}
            >
              {option}
            </button>
          {/each}
        </div>
      {/if}

      <div class="quiz-actions">
        <button class="action-btn secondary" on:click={quitQuiz}>Quit</button>
      </div>
    </div>

  {:else if phase === 'results' && results}
    <div class="results-card">
      <h2>Quiz Complete!</h2>
      <div class="big-score">{results.percentage}%</div>
      <div class="result-breakdown">
        <span class="score-correct">✓ {results.correct} correct</span>
        <span class="score-wrong">✗ {results.incorrect} wrong</span>
      </div>
      <div class="result-bar">
        <ProgressBar value={results.percentage / 100} />
      </div>
      <div class="result-actions">
        <button class="action-btn secondary" on:click={playAgain}>New Quiz</button>
        <button class="action-btn primary" on:click={startQuiz}>Play Again</button>
      </div>
    </div>
  {/if}
</div>

<style>
  .quiz-page {
    max-width: 600px;
    margin: 0 auto;
  }

  /* Toast */
  .toast {
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 10px;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    z-index: 500;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.18);
    white-space: nowrap;
    pointer-events: none;
  }

  .toast-correct {
    background: var(--correct-bg);
    color: var(--correct-text);
    border: 1px solid var(--correct-border);
  }

  .toast-wrong {
    background: var(--incorrect-bg);
    color: var(--incorrect-text);
    border: 1px solid var(--incorrect-border);
  }

  /* Setup */
  .setup-card,
  .quiz-card,
  .results-card {
    background: var(--bg-card);
    border-radius: 12px;
    padding: 2rem;
    box-shadow: var(--shadow-card);
  }

  h2 {
    font-size: 1.6rem;
    margin-bottom: 0.25rem;
  }

  .subtitle {
    color: var(--text-muted);
    margin-bottom: 2rem;
  }

  .setup-section {
    margin-bottom: 1.5rem;
  }

  .section-label {
    display: block;
    font-weight: 600;
    margin-bottom: 0.6rem;
    font-size: 0.95rem;
    color: var(--text-secondary-btn);
  }

  .type-toggles {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .toggle-btn {
    padding: 0.5rem 1rem;
    border: 2px solid var(--border);
    border-radius: 20px;
    background: var(--bg-input);
    color: var(--text);
    font-size: 0.9rem;
    transition:
      border-color 0.15s,
      background 0.15s,
      color 0.15s;
  }

  .toggle-btn.active {
    border-color: var(--border-focus);
    background: var(--bg-toggle-active);
    color: var(--primary-text);
    font-weight: 600;
  }

  .char-count {
    font-size: 0.9rem;
    color: var(--text-muted);
    margin-bottom: 1.5rem;
  }

  .start-btn {
    width: 100%;
    padding: 0.85rem;
    font-size: 1.1rem;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    transition: background 0.15s;
    margin-top: 0.5rem;
  }

  .start-btn:hover:not(:disabled) {
    background: var(--primary-dark);
  }

  .start-btn:disabled {
    background: var(--disabled-bg);
    cursor: not-allowed;
  }

  /* Quiz header */
  .quiz-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .quiz-header :global(.progress-container) {
    flex: 1;
  }

  .score-counts {
    display: flex;
    gap: 0.75rem;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .score-correct {
    color: var(--correct-text);
    font-weight: 700;
    font-size: 0.95rem;
  }

  .score-wrong {
    color: var(--incorrect-text);
    font-weight: 700;
    font-size: 0.95rem;
  }

  /* Question area */
  .question-area {
    text-align: center;
    min-height: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
  }

  .prompt {
    color: var(--text-muted);
    margin-bottom: 1rem;
    font-size: 1rem;
  }

  .question-text {
    font-size: 7rem;
    line-height: 1.1;
    color: var(--text-dark);
  }

  .audio-question {
    display: flex;
    justify-content: center;
  }

  /* Typing mode */
  .typing-area {
    display: flex;
    gap: 0.75rem;
    margin-bottom: 1.25rem;
  }

  .romaji-input {
    flex: 1;
    padding: 0.75rem 1rem;
    font-size: 1.1rem;
    border: 2px solid var(--border);
    border-radius: 8px;
    background: var(--bg-input);
    color: var(--text);
    transition: border-color 0.15s;
  }

  .romaji-input:focus {
    outline: none;
    border-color: var(--border-focus);
  }

  .romaji-input.input-correct {
    border-color: var(--correct-border);
    background: var(--correct-bg);
    color: var(--correct-text);
  }

  .romaji-input.input-wrong {
    border-color: var(--incorrect-border);
    background: var(--incorrect-bg);
    color: var(--incorrect-text);
  }

  .romaji-input:disabled {
    cursor: default;
  }

  .submit-btn {
    padding: 0.75rem 1.5rem;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    transition: background 0.15s;
  }

  .submit-btn:hover:not(:disabled) {
    background: var(--primary-dark);
  }

  .submit-btn:disabled {
    background: var(--disabled-bg);
    cursor: not-allowed;
  }

  /* Selection mode */
  .options-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
    margin-bottom: 1.25rem;
  }

  .option-btn {
    padding: 0.9rem 0.75rem;
    font-size: 1.15rem;
    border: 2px solid var(--border);
    border-radius: 10px;
    background: var(--bg-input);
    color: var(--text);
    transition:
      border-color 0.15s,
      background 0.15s,
      color 0.15s;
    cursor: pointer;
  }

  .option-btn:hover:not(:disabled) {
    border-color: var(--border-focus);
    background: var(--bg-card-hover);
  }

  .option-btn.correct {
    background: var(--correct-bg);
    border-color: var(--correct-border);
    color: var(--correct-text);
  }

  .option-btn.incorrect {
    background: var(--incorrect-bg);
    border-color: var(--incorrect-border);
    color: var(--incorrect-text);
  }

  .option-btn:disabled {
    cursor: default;
  }

  .quiz-actions {
    display: flex;
    justify-content: flex-end;
  }

  .action-btn {
    padding: 0.65rem 1.5rem;
    border-radius: 8px;
    font-size: 1rem;
    border: none;
    font-weight: 600;
    transition: background 0.15s;
  }

  .action-btn.primary {
    background: var(--primary);
    color: white;
  }

  .action-btn.primary:hover {
    background: var(--primary-dark);
  }

  .action-btn.secondary {
    background: var(--bg-secondary-btn);
    color: var(--text-secondary-btn);
  }

  .action-btn.secondary:hover {
    background: var(--bg-secondary-btn-hover);
  }

  /* Results */
  .results-card {
    text-align: center;
  }

  .results-card h2 {
    margin-bottom: 1rem;
  }

  .big-score {
    font-size: 4rem;
    font-weight: 700;
    color: var(--primary-text);
    line-height: 1;
    margin-bottom: 0.75rem;
  }

  .result-breakdown {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }

  .result-bar {
    margin-bottom: 2rem;
  }

  .result-actions {
    display: flex;
    gap: 0.75rem;
    justify-content: center;
  }
</style>
