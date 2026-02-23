<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { fade } from 'svelte/transition';
  import ProgressBar from '$lib/components/ProgressBar.svelte';
  import AudioButton from '$lib/components/AudioButton.svelte';
  import {
    KanjiQuizEngine,
    type KanjiQuizQuestion,
    type KanjiQuizResults,
    type KanjiQuizType,
    type InteractionMode
  } from '$lib/services/KanjiQuizEngine';
  import type { Word } from '$lib/models/Word';
  import type { DataLoader } from '$lib/services/DataLoader';
  import { audioManager } from '$lib/services/AudioManager';

  let quizEngine: KanjiQuizEngine | null = null;
  let loader: DataLoader | null = null;

  const JLPT_LEVELS: ('N5' | 'N4')[] = ['N5', 'N4'];

  const QUIZ_TYPES: { value: KanjiQuizType; label: string }[] = [
    { value: 'reading', label: 'Reading' },
    { value: 'listening', label: 'Listening' }
  ];

  const INTERACTION_MODES: { value: InteractionMode; label: string }[] = [
    { value: 'selection', label: 'Multiple choice' },
    { value: 'typing', label: 'Typing' }
  ];

  // Setup state
  let selectedQuizTypes = new Set<KanjiQuizType>(['reading']);
  let selectedInteractionModes = new Set<InteractionMode>(['selection']);
  let selectedLevels = new Set<'N5' | 'N4'>(['N5']);

  // Quiz state
  let phase: 'setup' | 'quiz' | 'results' = 'setup';
  let currentQuestion: KanjiQuizQuestion | null = null;
  let selectedWord: Word | null = null;
  let typedAnswer = '';
  let isCorrect: boolean | null = null;
  let results: KanjiQuizResults | null = null;
  let correctCount = 0;
  let wrongCount = 0;
  let totalAnswered = 0;
  let totalQuestions = 0;
  let autoPlayTimer: ReturnType<typeof setTimeout> | null = null;
  let noWordsError = false;

  // Toast state
  let toastQuestion = '';
  let toastAnswer = '';
  let toastType: 'correct' | 'wrong' = 'correct';
  let toastVisible = false;
  let toastTimer: ReturnType<typeof setTimeout> | null = null;

  onMount(async () => {
    const { dataLoader } = await import('$lib/services/loader');
    loader = dataLoader;
    quizEngine = new KanjiQuizEngine(dataLoader);
  });

  onDestroy(() => {
    if (autoPlayTimer) clearTimeout(autoPlayTimer);
    clearToast();
    audioManager.stop();
  });

  function clearToast() {
    if (toastTimer) { clearTimeout(toastTimer); toastTimer = null; }
    toastVisible = false;
  }

  function toggleLevel(level: 'N5' | 'N4') {
    if (selectedLevels.has(level)) selectedLevels.delete(level);
    else selectedLevels.add(level);
    selectedLevels = selectedLevels;
  }

  function toggleQuizType(value: KanjiQuizType) {
    if (selectedQuizTypes.has(value)) selectedQuizTypes.delete(value);
    else selectedQuizTypes.add(value);
    selectedQuizTypes = selectedQuizTypes;
  }

  function toggleInteractionMode(value: InteractionMode) {
    if (selectedInteractionModes.has(value)) selectedInteractionModes.delete(value);
    else selectedInteractionModes.add(value);
    selectedInteractionModes = selectedInteractionModes;
  }

  function startQuiz() {
    if (!quizEngine || selectedLevels.size === 0) return;
    noWordsError = false;

    const started = quizEngine.startQuiz(
      [...selectedQuizTypes] as KanjiQuizType[],
      [...selectedInteractionModes] as InteractionMode[],
      [...selectedLevels] as ('N5' | 'N4')[]
    );

    if (!started) {
      noWordsError = true;
      return;
    }

    const progress = quizEngine.getProgress();
    totalQuestions = progress.total;
    correctCount = 0;
    wrongCount = 0;
    totalAnswered = 0;
    phase = 'quiz';
    loadNextQuestion();
  }

  function loadNextQuestion() {
    if (!quizEngine) return;
    selectedWord = null;
    typedAnswer = '';
    isCorrect = null;

    if (autoPlayTimer) clearTimeout(autoPlayTimer);

    currentQuestion = quizEngine.getNextQuestion();

    if (!currentQuestion) {
      results = quizEngine.getResults();
      phase = 'results';
      return;
    }

    if (currentQuestion.audioPath) {
      autoPlayTimer = setTimeout(() => {
        if (currentQuestion?.audioPath) audioManager.play(currentQuestion.audioPath);
      }, 400);
    }
  }

  function showToast(type: 'correct' | 'wrong', question: string, answer: string, duration: number) {
    if (toastTimer) clearTimeout(toastTimer);
    toastType = type;
    toastQuestion = question;
    toastAnswer = answer;
    toastVisible = true;
    toastTimer = setTimeout(() => { toastVisible = false; }, duration);
  }

  function selectWord(word: Word) {
    if (!quizEngine || selectedWord !== null) return;
    selectedWord = word;
    isCorrect = quizEngine.checkSelectedAnswer(word);
    if (isCorrect) {
      correctCount++;
      showToast('correct', '', '', 1000);
    } else {
      wrongCount++;
      showToast('wrong', currentQuestion?.word.word ?? '', currentQuestion?.correctAnswer ?? '', 3000);
    }
    totalAnswered++;
    loadNextQuestion();
  }

  function submitTypedAnswer() {
    if (!quizEngine || typedAnswer.trim() === '' || isCorrect !== null) return;
    isCorrect = quizEngine.checkTypedAnswer(typedAnswer);
    if (isCorrect) {
      correctCount++;
      showToast('correct', '', '', 1000);
    } else {
      wrongCount++;
      showToast('wrong', currentQuestion?.word.word ?? '', currentQuestion?.correctAnswer ?? '', 3000);
    }
    totalAnswered++;
    loadNextQuestion();
  }

  function handleTypingKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') submitTypedAnswer();
  }

  function quitQuiz() {
    if (autoPlayTimer) clearTimeout(autoPlayTimer);
    clearToast();
    audioManager.stop();
    phase = 'setup';
    currentQuestion = null;
    selectedWord = null;
    isCorrect = null;
  }

  function playAgain() {
    clearToast();
    phase = 'setup';
    results = null;
  }

  $: wordCount = (() => {
    if (!loader || selectedLevels.size === 0) return 0;
    return loader.getWordsByLevels([...selectedLevels] as ('N5' | 'N4')[]).length;
  })();
  $: progress = totalQuestions > 0 ? totalAnswered / totalQuestions : 0;
  $: isAnswered = isCorrect !== null;
  $: correctAnswerText = currentQuestion?.correctAnswer ?? '';
  $: canStart = selectedLevels.size > 0 && selectedQuizTypes.size > 0 && selectedInteractionModes.size > 0 && !!quizEngine;
</script>

<!-- Answer toast -->
{#if toastVisible}
  <div class="toast" class:toast-correct={toastType === 'correct'} class:toast-wrong={toastType === 'wrong'} transition:fade={{ duration: 150 }}>
    {#if toastType === 'correct'}
      ✓ Correct!
    {:else}
      ✗ Wrong: <strong class="japanese">{toastQuestion}</strong> = <strong>{toastAnswer}</strong>
    {/if}
  </div>
{/if}

<div class="quiz-page">
  {#if phase === 'setup'}
    <div class="setup-card">
      <h2>Kanji Quiz</h2>
      <p class="subtitle">Test your knowledge of Japanese words and kanji</p>

      {#if noWordsError}
        <div class="error-msg">No words found for selected levels. Please select at least one level.</div>
      {/if}

      <div class="setup-section">
        <span class="section-label">JLPT level</span>
        <div class="type-toggles">
          {#each JLPT_LEVELS as level}
            <button
              class="toggle-btn"
              class:active={selectedLevels.has(level)}
              on:click={() => toggleLevel(level)}
            >{level}</button>
          {/each}
        </div>
      </div>

      <p class="word-count">
        {#if !loader}
          Loading...
        {:else if wordCount > 0}
          {wordCount} words selected
        {:else}
          Select at least one JLPT level
        {/if}
      </p>

      <div class="setup-section">
        <span class="section-label">Question type</span>
        <div class="type-toggles">
          {#each QUIZ_TYPES as { value, label }}
            <button
              class="toggle-btn"
              class:active={selectedQuizTypes.has(value)}
              on:click={() => toggleQuizType(value)}
            >{label}</button>
          {/each}
        </div>
      </div>

      <div class="setup-section">
        <span class="section-label">Answer type</span>
        <div class="type-toggles">
          {#each INTERACTION_MODES as { value, label }}
            <button
              class="toggle-btn"
              class:active={selectedInteractionModes.has(value)}
              on:click={() => toggleInteractionMode(value)}
            >{label}</button>
          {/each}
        </div>
      </div>

      <button
        class="start-btn"
        on:click={startQuiz}
        disabled={!canStart}
      >
        Start Quiz
      </button>
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

        {#if currentQuestion.displayText}
          <div class="word-display japanese">{currentQuestion.displayText}</div>
        {/if}

        {#if currentQuestion.audioPath}
          <div class="audio-row">
            <AudioButton audioPath={currentQuestion.audioPath} label="Play Audio" />
          </div>
        {/if}
      </div>

      {#if currentQuestion.interactionMode === 'selection' && currentQuestion.options}
        <div class="options-grid-9">
          {#each currentQuestion.options as option}
            {@const isSelected = selectedWord?.meaning === option.meaning}
            {@const isCorrectOption = option.meaning.toLowerCase() === correctAnswerText.toLowerCase()}
            <button
              class="option-btn-9"
              class:selected={isSelected}
              class:correct={isAnswered && isCorrectOption}
              class:incorrect={isSelected && !isCorrectOption}
              disabled={isAnswered}
              on:click={() => selectWord(option)}
            >
              {option.meaning}
            </button>
          {/each}
        </div>

      {:else if currentQuestion.interactionMode === 'typing'}
        <div class="typing-area">
          <input
            type="text"
            bind:value={typedAnswer}
            on:keydown={handleTypingKeydown}
            placeholder="Type the meaning..."
            disabled={isAnswered}
            class="meaning-input"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
          />
          <button
            class="submit-btn"
            on:click={submitTypedAnswer}
            disabled={isAnswered || typedAnswer.trim() === ''}
          >
            Submit
          </button>
        </div>
      {/if}

      <div class="quiz-actions">
        <button class="action-btn secondary" on:click={quitQuiz}>Quit</button>
      </div>
    </div>

  {:else if phase === 'results' && results}
    <div class="results-card">
      <h2>Quiz Complete!</h2>
      <div class="score-display">
        <div class="big-score">{results.percentage}%</div>
        <div class="result-breakdown">
          <span class="score-correct">✓ {results.correct} correct</span>
          <span class="score-wrong">✗ {results.incorrect} wrong</span>
        </div>
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
    max-width: 680px;
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
    margin-bottom: 1.5rem;
  }

  .error-msg {
    padding: 0.75rem 1rem;
    background: var(--error-bg);
    color: var(--error-text);
    border-radius: 8px;
    margin-bottom: 1rem;
    font-size: 0.9rem;
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

  .word-count {
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

  /* --- Quiz --- */
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

  .question-area {
    text-align: center;
    margin-bottom: 1.5rem;
    min-height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }

  .prompt {
    color: var(--text-muted);
    font-size: 1rem;
  }

  .word-display {
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--text-dark);
  }

  .audio-row {
    display: flex;
    justify-content: center;
  }

  /* 3x3 grid for 9 options */
  .options-grid-9 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.6rem;
    margin-bottom: 1.25rem;
  }

  .option-btn-9 {
    padding: 0.7rem 0.4rem;
    font-size: 0.9rem;
    border: 2px solid var(--border);
    border-radius: 8px;
    background: var(--bg-input);
    color: var(--text);
    cursor: pointer;
    transition:
      border-color 0.15s,
      background 0.15s,
      color 0.15s;
    line-height: 1.3;
    min-height: 54px;
    word-break: break-word;
  }

  .option-btn-9:hover:not(:disabled) {
    border-color: var(--border-focus);
    background: var(--bg-card-hover);
  }

  .option-btn-9.correct {
    background: var(--correct-bg);
    border-color: var(--correct-border);
    color: var(--correct-text);
  }

  .option-btn-9.incorrect {
    background: var(--incorrect-bg);
    border-color: var(--incorrect-border);
    color: var(--incorrect-text);
  }

  .option-btn-9:disabled {
    cursor: default;
  }

  /* Typing mode */
  .typing-area {
    display: flex;
    gap: 0.75rem;
    margin-bottom: 1.25rem;
  }

  .meaning-input {
    flex: 1;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    border: 2px solid var(--border);
    border-radius: 8px;
    background: var(--bg-input);
    color: var(--text);
    transition: border-color 0.15s;
  }

  .meaning-input:focus {
    outline: none;
    border-color: var(--border-focus);
  }

  .meaning-input:disabled {
    background: var(--bg-input-disabled);
    color: var(--text-muted);
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

  .quiz-actions {
    display: flex;
    gap: 0.75rem;
    justify-content: flex-end;
  }

  .action-btn {
    padding: 0.65rem 1.5rem;
    border-radius: 8px;
    font-size: 1rem;
    border: none;
    font-weight: 600;
    transition: background 0.15s;
    cursor: pointer;
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

  /* --- Results --- */
  .results-card {
    text-align: center;
  }

  .results-card h2 {
    margin-bottom: 1.5rem;
  }

  .score-display {
    margin-bottom: 1.5rem;
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
