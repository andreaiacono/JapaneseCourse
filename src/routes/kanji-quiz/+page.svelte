<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
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
  import { audioManager } from '$lib/services/AudioManager';

  let quizEngine: KanjiQuizEngine | null = null;

  const JLPT_LEVELS: ('N5' | 'N4')[] = ['N5', 'N4'];

  // Setup state
  let quizType: KanjiQuizType = 'reading';
  let interactionMode: InteractionMode = 'selection';
  let selectedLevels = new Set<'N5' | 'N4'>(['N5']);
  let numQuestions = 10;

  // Quiz state
  let phase: 'setup' | 'quiz' | 'results' = 'setup';
  let currentQuestion: KanjiQuizQuestion | null = null;
  let selectedWord: Word | null = null;
  let typedAnswer = '';
  let isCorrect: boolean | null = null;
  let results: KanjiQuizResults | null = null;
  let score = 0;
  let totalAnswered = 0;
  let totalQuestions = 0;
  let autoPlayTimer: ReturnType<typeof setTimeout> | null = null;
  let noWordsError = false;

  onMount(async () => {
    const { dataLoader } = await import('$lib/services/loader');
    quizEngine = new KanjiQuizEngine(dataLoader);
  });

  onDestroy(() => {
    if (autoPlayTimer) clearTimeout(autoPlayTimer);
    audioManager.stop();
  });

  function toggleLevel(level: 'N5' | 'N4') {
    if (selectedLevels.has(level)) {
      selectedLevels.delete(level);
    } else {
      selectedLevels.add(level);
    }
    selectedLevels = selectedLevels;
  }

  function startQuiz() {
    if (!quizEngine || selectedLevels.size === 0) return;
    noWordsError = false;

    const started = quizEngine.startQuiz(
      quizType,
      interactionMode,
      [...selectedLevels] as ('N5' | 'N4')[],
      numQuestions
    );

    if (!started) {
      noWordsError = true;
      return;
    }

    const progress = quizEngine.getProgress();
    totalQuestions = progress.total;
    score = 0;
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

    // Auto-play audio after a short delay
    if (currentQuestion.audioPath) {
      autoPlayTimer = setTimeout(() => {
        if (currentQuestion?.audioPath) audioManager.play(currentQuestion.audioPath);
      }, 400);
    }
  }

  function selectWord(word: Word) {
    if (!quizEngine || selectedWord !== null) return;
    selectedWord = word;
    isCorrect = quizEngine.checkSelectedAnswer(word);
    if (isCorrect) score++;
    totalAnswered++;
  }

  function submitTypedAnswer() {
    if (!quizEngine || typedAnswer.trim() === '' || isCorrect !== null) return;
    isCorrect = quizEngine.checkTypedAnswer(typedAnswer);
    if (isCorrect) score++;
    totalAnswered++;
  }

  function handleTypingKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') submitTypedAnswer();
  }

  function nextQuestion() {
    loadNextQuestion();
  }

  function quitQuiz() {
    if (autoPlayTimer) clearTimeout(autoPlayTimer);
    audioManager.stop();
    phase = 'setup';
    currentQuestion = null;
    selectedWord = null;
    isCorrect = null;
  }

  function playAgain() {
    phase = 'setup';
    results = null;
  }

  $: progress = totalQuestions > 0 ? totalAnswered / totalQuestions : 0;
  $: isAnswered = isCorrect !== null;
  $: correctAnswerText = currentQuestion?.correctAnswer ?? '';
</script>

<div class="quiz-page">
  {#if phase === 'setup'}
    <div class="setup-card">
      <h2>Kanji Quiz</h2>
      <p class="subtitle">Test your knowledge of Japanese words and kanji</p>

      {#if noWordsError}
        <div class="error-msg">No words found for selected levels. Please select at least one level.</div>
      {/if}

      <div class="setup-section">
        <span class="section-label">Quiz type</span>
        <div class="radio-group">
          <label class="radio-label">
            <input type="radio" bind:group={quizType} value="reading" />
            Reading — see the word, select meaning
          </label>
          <label class="radio-label">
            <input type="radio" bind:group={quizType} value="listening" />
            Listening — hear the word, select meaning
          </label>
        </div>
      </div>

      <div class="setup-section">
        <span class="section-label">Interaction mode</span>
        <div class="radio-group">
          <label class="radio-label">
            <input type="radio" bind:group={interactionMode} value="selection" />
            Selection — choose from 9 options
          </label>
          <label class="radio-label">
            <input type="radio" bind:group={interactionMode} value="typing" />
            Typing — type the meaning
          </label>
        </div>
      </div>

      <div class="setup-section">
        <span class="section-label">JLPT level</span>
        <div class="type-toggles">
          {#each JLPT_LEVELS as level}
            <button
              class="toggle-btn"
              class:active={selectedLevels.has(level)}
              on:click={() => toggleLevel(level)}
            >
              {level}
            </button>
          {/each}
        </div>
      </div>

      <div class="setup-section">
        <label class="section-label" for="kanji-num-questions">Number of questions</label>
        <div class="number-input">
          <button on:click={() => (numQuestions = Math.max(5, numQuestions - 5))}>-</button>
          <span id="kanji-num-questions">{numQuestions}</span>
          <button on:click={() => (numQuestions = Math.min(50, numQuestions + 5))}>+</button>
        </div>
      </div>

      <button
        class="start-btn"
        on:click={startQuiz}
        disabled={selectedLevels.size === 0 || !quizEngine}
      >
        Start Quiz
      </button>
    </div>

  {:else if phase === 'quiz' && currentQuestion}
    <div class="quiz-card">
      <div class="quiz-header">
        <ProgressBar value={progress} label="{totalAnswered}/{totalQuestions}" />
        <span class="score-badge">Score: {score}/{totalAnswered}</span>
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

      {#if isAnswered}
        <div class="feedback" class:feedback-correct={isCorrect} class:feedback-incorrect={!isCorrect}>
          {#if isCorrect}
            Correct!
          {:else}
            Incorrect — the meaning was: <strong>{correctAnswerText}</strong>
          {/if}
        </div>

        <div class="quiz-actions">
          <button class="action-btn secondary" on:click={quitQuiz}>Quit</button>
          <button class="action-btn primary" on:click={nextQuestion}>
            {totalAnswered >= totalQuestions ? 'See Results' : 'Next'}
          </button>
        </div>
      {:else}
        <div class="quiz-actions">
          <button class="action-btn secondary" on:click={quitQuiz}>Quit</button>
        </div>
      {/if}
    </div>

  {:else if phase === 'results' && results}
    <div class="results-card">
      <h2>Quiz Complete!</h2>
      <div class="score-display">
        <div class="big-score">{results.percentage}%</div>
        <p>{results.correct} correct out of {results.total}</p>
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

  .radio-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .radio-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    font-size: 0.95rem;
    padding: 0.3rem 0;
  }

  .type-toggles {
    display: flex;
    gap: 0.5rem;
  }

  .toggle-btn {
    padding: 0.5rem 1.5rem;
    border: 2px solid var(--border);
    border-radius: 20px;
    background: var(--bg-input);
    color: var(--text);
    font-size: 0.95rem;
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

  .number-input {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .number-input button {
    width: 36px;
    height: 36px;
    border: 2px solid var(--border);
    border-radius: 50%;
    background: var(--bg-input);
    color: var(--text);
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color 0.15s;
  }

  .number-input button:hover {
    border-color: var(--border-focus);
  }

  .number-input span {
    font-size: 1.25rem;
    font-weight: 600;
    min-width: 2.5rem;
    text-align: center;
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

  .score-badge {
    font-size: 0.875rem;
    color: var(--text-secondary);
    white-space: nowrap;
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

  .feedback {
    padding: 0.75rem 1rem;
    border-radius: 8px;
    font-size: 1rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  .feedback-correct {
    background: var(--correct-bg);
    color: var(--correct-text);
  }

  .feedback-incorrect {
    background: var(--incorrect-bg);
    color: var(--incorrect-text);
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
    margin-bottom: 0.5rem;
  }

  .score-display p {
    color: var(--text-muted);
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
