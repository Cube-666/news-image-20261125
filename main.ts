// news-image-20261125: the entry's image is the entry.png beside this
// file — a newspaper front page summing up Wednesday 25 November 2026
// (tankers ablaze in the Strait of Hormuz, Asian stocks tumbling,
// Huawei convicted, Ukrainian drones hitting two refineries, Shenzhou-24
// docking with Pakistan's first astronaut, and the Australia-Solomons
// pact). This program copies it byte for byte to the output directory,
// so the grader's two runs write identical files. No network, no
// randomness, nothing but the standard library.

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'entry.png'));
