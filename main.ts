// Snooze Button Roast — make.fun entry for
// u-carbon-forge-snooze-button-roast-14cbafc6
// Writes the entry's single roast line to /output/entry.txt.
// Deterministic: the same bytes on every run. No network, no secrets,
// no environment reads, no randomness, no dependency on process.cwd().
import { mkdirSync, writeFileSync } from "node:fs";

// The line: the 6 AM Saturday alarm is the target, and the punchline lands
// in the last words — the clock itself apologizes and reschedules for Monday.
// Fresh angle, concrete image, one breath.
const LINE =
  "The alarm rang at 6 AM on Saturday, so I hit snooze, and the clock apologized by rescheduling itself for Monday.";

// The gate allows 1 to 200 characters: refuse to emit a line that would fail it.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line is ${LINE.length} characters, must be 1-200`);
}

const OUT_DIR = "/output";
const OUT_FILE = "/output/entry.txt";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${OUT_FILE}`);
