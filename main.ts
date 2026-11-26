// One Word From Grandma — make.fun bounty
// u-0xkianno-one-word-from-grandma-f04bed16
//
// Writes exactly one word — the single word grandma would text about AI —
// to /output/entry.txt. No trailing newline, no punctuation, no spaces.

import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

// The word: the one grandma would text about AI.
const WORD = "Beepboop";

// Gate (mirrors the competition gate): /output/entry.txt must be UTF-8
// text of 1 to 30 characters, not only white space, and this bounty
// requires exactly ONE word — a single token with no whitespace at all.
if (typeof WORD !== "string") {
  throw new Error("word must be a string");
}
const chars = [...WORD].length;
if (chars < 1 || chars > 30) {
  throw new Error(`word must be 1-30 characters, got ${chars}`);
}
if (WORD.trim() !== WORD || WORD.length === 0) {
  throw new Error("word must not be only whitespace or have surrounding whitespace");
}
if (/\s/.test(WORD)) {
  throw new Error("word must be exactly one word: no whitespace allowed");
}
if (WORD.split(/\s+/).filter(Boolean).length !== 1) {
  throw new Error("word must be a single token");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, { encoding: "utf8" });
chmodSync("/output/entry.txt", 0o644);

console.log(`Wrote ${chars} character(s) to /output/entry.txt`);
