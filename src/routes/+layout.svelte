<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { initData, isLoading, loadError } from '$lib/stores/characterStore';
  import { theme, toggleTheme } from '$lib/stores/themeStore';
  import '../app.css';

  onMount(() => {
    initData();
  });
</script>

<div class="app">
  <header>
    <div class="header-content">
      <span class="app-title">Japanese Study</span>
      <nav>
        <a href="/" class:active={$page.url.pathname === '/'}>Study</a>
        <a href="/quiz" class:active={$page.url.pathname === '/quiz'}>Kana Quiz</a>
        <a href="/kanji-quiz" class:active={$page.url.pathname === '/kanji-quiz'}>Kanji Quiz</a>
      </nav>
      <button
        class="theme-toggle"
        on:click={toggleTheme}
        title={$theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        aria-label={$theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      >
        {#if $theme === 'light'}
          <!-- Moon icon -->
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        {:else}
          <!-- Sun icon -->
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
        {/if}
      </button>
    </div>
  </header>

  <main>
    {#if $isLoading}
      <div class="loading">
        <div class="spinner"></div>
        <p>Loading characters...</p>
      </div>
    {:else if $loadError}
      <div class="error">
        <p>Error loading data: {$loadError}</p>
      </div>
    {:else}
      <slot />
    {/if}
  </main>
</div>

<style>
  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  header {
    background: #1a73e8;
    color: white;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: var(--shadow-header);
  }

  .header-content {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0.75rem 1.5rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .app-title {
    font-size: 1.2rem;
    font-weight: 700;
    white-space: nowrap;
    font-family: 'Noto Sans JP', sans-serif;
  }

  nav {
    display: flex;
    gap: 0.25rem;
    flex: 1;
  }

  nav a {
    color: rgba(255, 255, 255, 0.85);
    text-decoration: none;
    padding: 0.45rem 0.9rem;
    border-radius: 6px;
    font-size: 0.95rem;
    transition:
      background 0.15s,
      color 0.15s;
  }

  nav a:hover {
    background: rgba(255, 255, 255, 0.15);
    color: white;
  }

  nav a.active {
    background: rgba(255, 255, 255, 0.25);
    color: white;
    font-weight: 600;
  }

  .theme-toggle {
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    border-radius: 8px;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.15s;
    flex-shrink: 0;
  }

  .theme-toggle:hover {
    background: rgba(255, 255, 255, 0.25);
  }

  main {
    flex: 1;
    padding: 1.5rem;
    max-width: 1000px;
    margin: 0 auto;
    width: 100%;
  }

  .loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 5rem 2rem;
    color: var(--text-muted);
  }

  .spinner {
    width: 44px;
    height: 44px;
    border: 4px solid var(--bg-progress-track);
    border-top-color: var(--primary);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .error {
    padding: 2rem;
    text-align: center;
    color: var(--error-text);
  }
</style>
