<script lang="ts">
  import { base } from '$app/paths';
  import { n5Course } from '$lib/data/course/index.js';
  import { courseProgress, getLessonStatus, getCompletedCount } from '$lib/stores/courseStore.js';
  import type { Chapter, Lesson } from '$lib/models/Course.js';

  $: chapters = n5Course.units[0].chapters.map((id) => n5Course.chapters[id]);
  $: allLessonIds = Object.keys(n5Course.lessons);
  $: totalLessons = allLessonIds.length;
  $: completedTotal = getCompletedCount(allLessonIds);

  function chapterLessons(chapter: Chapter): Lesson[] {
    return chapter.lessons.map((id) => n5Course.lessons[id]);
  }

  function chapterCompleted(chapter: Chapter): number {
    return chapter.lessons.filter(
      (id) => $courseProgress.lessons[id]?.status === 'completed'
    ).length;
  }

  function statusClass(lessonId: string, prerequisites: string[]): string {
    const s = getLessonStatus(lessonId, prerequisites);
    return s;
  }

  function statusLabel(lessonId: string, prerequisites: string[]): string {
    const s = getLessonStatus(lessonId, prerequisites);
    if (s === 'completed') return 'Completed';
    if (s === 'in-progress') return 'In Progress';
    if (s === 'available') return 'Available';
    return 'Locked';
  }

  const CHAPTER_COLORS = [
    '#1a73e8', '#0f9d58', '#f4b400', '#db4437',
    '#ab47bc', '#00acc1', '#ff7043', '#5c6bc0',
  ];
</script>

<div class="course-page">
  <div class="course-header">
    <div class="course-title-row">
      <div>
        <h1>N5 Beginner</h1>
        <p class="course-subtitle">Complete Japanese for Absolute Beginners</p>
      </div>
      <!-- XP, streak and overall progress live on /progress so they have one home. -->
      <a class="progress-link" href="{base}/progress">
        {completedTotal} / {totalLessons} lessons →
      </a>
    </div>
  </div>

  <div class="chapters">
    {#each chapters as chapter, ci}
      {@const lessons = chapterLessons(chapter)}
      {@const done = chapterCompleted(chapter)}
      {@const color = CHAPTER_COLORS[ci % CHAPTER_COLORS.length]}

      <div class="chapter-card" style="--chapter-color: {color}">
        <div class="chapter-header">
          <div class="chapter-number" style="background: {color}">{ci + 1}</div>
          <div class="chapter-info">
            <h2>{chapter.title}</h2>
            <p>{chapter.description}</p>
          </div>
          <div class="chapter-progress-pill" style="color: {color}; border-color: {color}40">
            {done} / {lessons.length}
          </div>
        </div>

        <div class="lesson-list">
          {#each lessons as lesson}
            {@const status = statusClass(lesson.id, lesson.prerequisites)}
            {@const isAvailable = status !== 'locked'}
            <svelte:element
              this={isAvailable ? 'a' : 'div'}
              href={isAvailable ? `${base}/course/${lesson.slug}` : undefined}
              class="lesson-row status-{status}"
              class:lesson-row--link={isAvailable}
            >
              <div class="lesson-icon">
                {#if status === 'completed'}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <polyline points="20,6 9,17 4,12" />
                  </svg>
                {:else if status === 'locked'}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                {:else if status === 'in-progress'}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="6" />
                  </svg>
                {:else}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                {/if}
              </div>

              <div class="lesson-info">
                <span class="lesson-title japanese">{lesson.title}</span>
                {#if lesson.subtitle}
                  <span class="lesson-subtitle japanese">{lesson.subtitle}</span>
                {/if}
              </div>

              <div class="lesson-meta">
                <span class="lesson-time">{lesson.estimatedMinutes} min</span>
                <span class="lesson-status-badge status-badge-{status}">
                  {statusLabel(lesson.id, lesson.prerequisites)}
                </span>
              </div>
            </svelte:element>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .course-page {
    max-width: 780px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  /* Header */
  .course-header {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: var(--shadow-card);
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .progress-link {
    background: var(--bg-secondary-btn);
    border: 1px solid var(--border);
    color: var(--text-secondary-btn);
    border-radius: 8px;
    padding: 0.4rem 0.8rem;
    font-size: 0.85rem;
    font-weight: 600;
    text-decoration: none;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .progress-link:hover {
    background: var(--bg-toggle-active);
    color: var(--primary);
    border-color: var(--primary);
  }

  .course-title-row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
  }

  .course-title-row h1 {
    font-size: 1.6rem;
    font-weight: 800;
    color: var(--text-dark);
    margin: 0 0 0.2rem;
  }

  .course-subtitle {
    font-size: 0.9rem;
    color: var(--text-muted);
    margin: 0;
  }

  /* Chapter cards */
  .chapters {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .chapter-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: var(--shadow-card);
  }

  .chapter-header {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem 1.25rem;
    border-bottom: 1px solid var(--border);
    background: var(--bg);
  }

  .chapter-number {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    color: white;
    font-weight: 700;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .chapter-info {
    flex: 1;
  }

  .chapter-info h2 {
    font-size: 1rem;
    font-weight: 700;
    color: var(--text-dark);
    margin: 0 0 0.2rem;
  }

  .chapter-info p {
    font-size: 0.82rem;
    color: var(--text-muted);
    margin: 0;
  }

  .chapter-progress-pill {
    font-size: 0.8rem;
    font-weight: 600;
    border: 1.5px solid;
    border-radius: 20px;
    padding: 0.15rem 0.6rem;
    white-space: nowrap;
    flex-shrink: 0;
  }

  /* Lesson rows */
  .lesson-list {
    display: flex;
    flex-direction: column;
  }

  .lesson-row {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1.25rem;
    border-bottom: 1px solid var(--border);
    text-decoration: none;
    color: inherit;
    transition: background 0.12s;
  }

  .lesson-row:last-child {
    border-bottom: none;
  }

  .lesson-row--link:hover {
    background: var(--bg-card-hover);
  }

  .lesson-row.status-locked {
    opacity: 0.5;
    cursor: default;
  }

  .lesson-icon {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .status-completed .lesson-icon {
    background: var(--correct-bg);
    color: var(--correct-text);
  }

  .status-available .lesson-icon,
  .status-in-progress .lesson-icon {
    background: var(--bg-toggle-active);
    color: var(--primary);
  }

  .status-locked .lesson-icon {
    background: var(--bg-secondary-btn);
    color: var(--text-hint);
  }

  .lesson-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    min-width: 0;
  }

  .lesson-title {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--text-dark);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .lesson-subtitle {
    font-size: 0.78rem;
    color: var(--text-muted);
  }

  .lesson-meta {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.25rem;
    flex-shrink: 0;
  }

  .lesson-time {
    font-size: 0.75rem;
    color: var(--text-muted);
  }

  .lesson-status-badge {
    font-size: 0.72rem;
    font-weight: 600;
    padding: 0.1rem 0.45rem;
    border-radius: 10px;
    white-space: nowrap;
  }

  .status-badge-completed {
    background: var(--correct-bg);
    color: var(--correct-text);
  }

  .status-badge-available {
    background: var(--bg-toggle-active);
    color: var(--primary);
  }

  .status-badge-in-progress {
    background: #fff3e0;
    color: #e65100;
  }

  :global([data-theme='dark']) .status-badge-in-progress {
    background: #3e2200;
    color: #ffb74d;
  }

  .status-badge-locked {
    background: var(--bg-secondary-btn);
    color: var(--text-hint);
  }

  @media (max-width: 560px) {
    .course-title-row h1 {
      font-size: 1.3rem;
    }

    .lesson-row {
      padding: 0.65rem 1rem;
    }

    .lesson-title {
      font-size: 0.85rem;
    }
  }
</style>
