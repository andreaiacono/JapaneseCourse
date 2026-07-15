// Named loader.ts (not dataLoader.ts) to avoid a TS casing conflict with DataLoader.ts.
import { DataLoader } from './DataLoader';

export const dataLoader = new DataLoader();
dataLoader.loadAll();
