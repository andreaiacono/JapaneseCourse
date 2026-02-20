<script lang="ts">
  export let value: number; // 0 to 1
  export let label = '';
</script>

<div class="progress-container">
  <div class="progress-bar" role="progressbar" aria-valuenow={Math.round(value * 100)} aria-valuemin={0} aria-valuemax={100}>
    <div class="progress-fill" style="width: {Math.min(1, Math.max(0, value)) * 100}%"></div>
  </div>
  {#if label}
    <span class="progress-label">{label}</span>
  {/if}
</div>

<style>
  .progress-container {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
  }

  .progress-bar {
    flex: 1;
    height: 8px;
    background: var(--bg-progress-track);
    border-radius: 4px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background: var(--primary);
    border-radius: 4px;
    transition: width 0.3s ease;
  }

  .progress-label {
    font-size: 0.875rem;
    color: var(--text-muted);
    white-space: nowrap;
  }
</style>
