<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { base } from '$app/paths';
  import { initData, isLoading, loadError } from '$lib/stores/characterStore';
  import { theme, toggleTheme } from '$lib/stores/themeStore';
  import { settings, JAPANESE_FONTS } from '$lib/stores/settingsStore';
  import '../app.css';

  onMount(() => {
    initData();

    // Find the font link element injected by the inline script, or create one
    let linkEl = document.getElementById('japanese-font-link') as HTMLLinkElement | null;
    if (!linkEl) {
      linkEl = document.createElement('link');
      linkEl.id = 'japanese-font-link';
      linkEl.rel = 'stylesheet';
      document.head.appendChild(linkEl);
    }

    // Keep font in sync with settings
    const unsubscribe = settings.subscribe((s) => {
      const font = JAPANESE_FONTS.find((f) => f.id === s.japaneseFont) ?? JAPANESE_FONTS[0];
      document.documentElement.style.setProperty('--japanese-font', font.stack);
      linkEl!.href = `https://fonts.googleapis.com/css2?family=${font.googleFont}&display=swap`;
    });

    return unsubscribe;
  });
</script>

<div class="app">
  <header>
    <div class="header-content">
      <a href="{base}/" class="app-title">Japanese Study</a>
      <nav>
        <a href="{base}/kana" class:active={$page.route.id === '/kana'}>Kana Reference</a>
        <a href="{base}/kana-quiz" class:active={$page.route.id === '/kana-quiz'}>Kana Quiz</a>
        <a href="{base}/kanji" class:active={$page.route.id === '/kanji'}>Kanji Reference</a>
        <a href="{base}/kanji-quiz" class:active={$page.route.id === '/kanji-quiz'}>Kanji Quiz</a>
        <a href="{base}/course" class:active={$page.route.id?.startsWith('/course')}>Course</a>
        <a href="{base}/grammar" class:active={$page.route.id === '/grammar'}>Grammar</a>
        <a href="{base}/vocab" class:active={$page.route.id === '/vocab'}>Vocab</a>
      </nav>
      <a
        href="{base}/settings"
        class="icon-btn"
        class:active={$page.route.id === '/settings'}
        title="Settings"
        aria-label="Settings"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="3" />
          <path
            d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
          />
        </svg>
      </a>

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
    {#if $page.route.id === '/'}
      <slot />
    {:else if $isLoading}
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
    color: white;
    text-decoration: none;
  }

  .app-title:hover {
    opacity: 0.85;
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

  .icon-btn,
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

  .icon-btn:hover,
  .theme-toggle:hover {
    background: rgba(255, 255, 255, 0.25);
  }

  .icon-btn.active {
    background: rgba(255, 255, 255, 0.3);
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
