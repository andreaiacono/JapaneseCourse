# Roadmap — where the app is and what to do next

Written as a handoff. Read this plus `CLAUDE.md` before starting work.

## Where things stand

**N5 is complete on all three pillars.**

| Pillar | N5 target | State |
|---|---|---|
| Kanji | ~100 | **294** — the full N5+N4 set, with readings, example words and audio |
| Grammar | ~46 points | **46 points**, 15 chapters, 53 lessons |
| Vocabulary | ~800 words | **765 entries** |

N4 status: **kanji already done** (all 194 are in the reference and the kanji
quiz already filters by level). Grammar and vocabulary for N4 are not started.

## Decisions already taken (don't re-litigate)

- **N4 becomes a second `Unit` in the existing course**, not a separate course.
  `Course.units` is already an array; progress and mastery stores are flat and
  level-agnostic, so no schema change is needed.
- **Soft gating** — N4 chapters unlock on their own prerequisites, so someone
  who already knows N5 can start there. No hard "finish N5 first" lock.
- **N5 vocabulary was finished first** (done — 765 words), so no level is left
  half-built.

## Next steps, in order

### Step 2 — De-hardcode the level (small, no content) ← start here

Ten files import `n5Course` / `n5Grammar` / `n5Vocab` directly, and
`/course` reads `units[0]` by index. Nothing else can proceed cleanly until
this is done, and it is low-risk.

- Route those imports through a level-aware accessor.
- `/course`: add a level toggle (15 N5 chapters + ~15 N4 is unusable as one
  scroll).
- `/grammar` and `/vocab`: add an N5/N4 filter. The kanji reference already
  has exactly this pattern — copy it. Without it, vocab becomes a 1,500-card
  unfiltered wall.
- `/progress`: split the bars per level. Note its **kanji bar already counts
  all 294**, so it is quietly N4-aware already; only grammar/vocab/lessons are
  N5-scoped.

Files to touch: `src/routes/{course/+page.svelte, course/[slug]/+page.svelte,
grammar/+page.svelte, vocab/+page.svelte, progress/+page.svelte}`.

### Step 3 — N4 grammar (the big one)

~80–100 grammar points across ~12–15 chapters — roughly the entire N5 grammar
effort again. Covers: potential form, passive, causative, conditionals
(ば/たら/なら), volitional, transitive/intransitive pairs, 〜そう/〜よう/〜らしい,
〜ておく/〜てしまう/〜てみる, giving-and-receiving (あげる/くれる/もらう), and
keigo basics.

Follow the established chapter recipe (see `CLAUDE.md` → "Adding a chapter").

### Step 4 — N4 vocabulary

~700 more words (N4 expects ~1,500 cumulative). Larger than all five N5 vocab
batches combined. Use `npm run generate-vocab` — see below.

### Step 5 — N4 reading tales, and kanji-in-the-course

Add reading passages at N4 level, and finally wire **explicit kanji study into
the course**. The course still never teaches kanji directly — it was tolerable
at N5 but matters at N4, where 181 new characters arrive with no lesson
introducing them.

## The content tooling (now committed — it used to live in /tmp)

```bash
npm run validate-furigana   # kuromoji vs the course's hand-written furigana
npm run generate-vocab -- <batch.json> [glosses.json]
npm run generate-tts        # idempotent; only fills missing clips
```

`scripts/furigana.mjs` generates kana readings and is trusted **only because
it reproduces the course's hand-written furigana** — currently 842/846. Run
`validate-furigana` after touching its `CORRECTIONS` list.

`CORRECTIONS` holds readings the analyser gets wrong (七時, 九時, 二人, 四人,
一回, 十分, 日本, 何です…). Two lessons learned the hard way:

- A blind string replace is dangerous: `きゅうじ → くじ` silently corrupted
  休日 (きゅうじつ → くじつ). Anchor with a regex/lookahead when a correction
  could be a substring of another word.
- Counters and irregular number readings are where it fails most (三匹 →
  さんひき instead of さんびき; 二十歳 is はたち). **Always eyeball generated
  furigana for anything containing a number or counter.**

### Vocab batch format

`scripts/vocab-batches/*.json`, one row per word:

```json
["ja","reading","wordClass","theme","example ja","example en","gloss"]
```

The generator validates every kanji-bearing headword reading against kuromoji
and prints mismatches for review. Mismatches are usually **legitimate dual
readings** (角 かど/かく, 方 かた/ほう, 米 こめ/べい) — check the sense you
mean, don't blindly "fix" them. It also skips words already in `n5Vocab`.

Insert the generated block before the final `};` of `n5-vocab.ts`, then run
`check`, `generate-tts`, `build`, and drive the page.

## Verification habit that has repeatedly paid off

`npm run check` passing means nothing about content correctness. Every content
change in this project has been verified by **driving the built site in
headless Chrome** (puppeteer-core against a static server over `build/`).
That is what caught: silently dead audio buttons, raw `{furigana}` braces
leaking into the UI, and duplicated kanji across level tabs. Typecheck caught
none of them.

Bugs caught this way, worth re-checking after any related change:
- `example.ja` must be **clean kanji** — its reading goes in the `furigana`
  field. An inline `{...}` annotation there breaks the TTS lookup and shows
  literal braces.
- Fields NOT rendered through `renderRuby` (lesson `title`, `wordBankOptions`,
  `acceptedAnswers`) must never contain ruby annotations — `wordBankOptions`
  and `acceptedAnswers` are *compared to user input*.

## Outstanding, unverified

**The TTS audio has never been checked by ear.** Specifically worth a listen:

- `は / へ / を` in isolation on the Kana Reference — a TTS engine may read
  bare は as "wa" (the particle) rather than "ha", which would teach the wrong
  thing.
- ~79 single-kanji words (日, 月, 火 …) where the engine picks the reading —
  日 could come out ニチ rather than ひ.
- Counter rendaku in the Counters chapter (三匹 → さんびき, 一本 → いっぽん).

If any are wrong the fix is small: pin those strings to a corrected reading
and regenerate.

## Smaller known gaps

- `CharacterDisplay.svelte` is dead code — nothing imports it.
- Exercise `targets` are populated (167/168) but nothing yet deep-links an
  exercise to the grammar/vocab card explaining it. `openPattern()` /
  `openEntry()` already exist for this.
- Only 3 reading tales across 15 chapters.
- Practical/functional lessons never written: greetings & self-introduction,
  family, food & ordering, shopping, weather.

## Deploying

Pushing to `master` **is** the deploy (GitHub Pages). Pushes are large (the
repo carries ~2,400 TTS clips) and the network here drops DNS intermittently —
retry the push rather than assuming failure. After deploy, a hard refresh is
needed because the PWA service worker caches aggressively.
