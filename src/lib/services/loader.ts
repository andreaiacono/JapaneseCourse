import manifest from '$lib/data/audio-manifest.json';
import { DataLoader, type AudioManifest } from './DataLoader';

export const dataLoader = new DataLoader(manifest as unknown as AudioManifest);
dataLoader.loadAll();
