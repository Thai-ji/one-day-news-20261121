// The World Today — 21 November 2026.
// Copies the finished front-page image to the grader's output folder.
import { copyFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);
const bytes = readFileSync(source);

if (bytes.length > 1048576) throw new Error('entry.png exceeds the 1 MiB limit');
if (bytes[0] !== 0x89 || bytes[1] !== 0x50 || bytes[2] !== 0x4e || bytes[3] !== 0x47) {
  throw new Error('entry.png is not a PNG');
}

copyFileSync(source, join(outDir, 'entry.png'));
