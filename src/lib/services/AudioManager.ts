class AudioManager {
  private currentAudio: HTMLAudioElement | null = null;
  private audioCache: Map<string, HTMLAudioElement> = new Map();

  async play(audioPath: string): Promise<void> {
    this.stop();

    if (!this.audioCache.has(audioPath)) {
      const audio = new Audio(`${import.meta.env.BASE_URL}${audioPath}`);
      audio.preload = 'auto';
      this.audioCache.set(audioPath, audio);
    }

    this.currentAudio = this.audioCache.get(audioPath)!;
    this.currentAudio.currentTime = 0;

    try {
      await this.currentAudio.play();
    } catch (error) {
      console.error('Audio playback failed:', error);
    }
  }

  stop(): void {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
    }
  }

  preload(audioPaths: string[]): void {
    for (const p of audioPaths) {
      if (!this.audioCache.has(p)) {
        const audio = new Audio(`${import.meta.env.BASE_URL}${p}`);
        audio.preload = 'auto';
        this.audioCache.set(p, audio);
      }
    }
  }
}

export const audioManager = new AudioManager();
