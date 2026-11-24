// One Word From Grandma — entry program.
//
// Writes the single word grandma would text about AI to /output/entry.txt.
// Deterministic, no network, no dependencies, no randomness.
//
// The word: ROBERT.
// Grandma heard "robot" and has been calling it Robert ever since —
// she texts the machine like it is a polite young man who lives in
// the phone and knows everything. Caps on, because her caps lock has
// been on since 2019 and nobody has had the heart to tell her.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one word. Letters only, no spaces, no punctuation.
const WORD = "ROBERT";

// Fail loudly in local testing rather than silently failing the gate:
// one word, letters only, 1-30 characters.
if (!/^[A-Za-z]{1,30}$/.test(WORD)) {
  throw new Error(`invalid entry word: ${JSON.stringify(WORD)}`);
}

// Grader writes to /output/entry.txt; OUTPUT_DIR lets us test locally
// without root. Default matches the competition gate exactly.
const outDir = process.env.OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD + "\n", "utf8");
