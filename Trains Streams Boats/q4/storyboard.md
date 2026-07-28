# Storyboard — Boats & Streams: "Still Water 18, Stream 4 → Find Upstream Speed"

Topic: Trains, Streams and Boats · Question 4 · Voiceover duration: **58.579s**

Sibling reference: `q2` ("Still Water 12, Stream 3 → Find Downstream Speed") is the closest
built sibling — same river/boat/badge visual grammar (two-layer parallax wave scroll, boat
badge carrying its own speed, stream badge fixed above the river, a merge-chip flying into
the boat's badge to demonstrate the arithmetic). The difference: this question is UPSTREAM,
so the boat travels AGAINST the fixed flow-arrow direction (not with it), the merge chip is
"−4" instead of "+3" and subtracts instead of adds, and the boat visibly struggles/slows
(a small resistance wobble layered on its net motion) instead of gliding freely faster.

---

## PART 1: Narration Beat Analysis

| # | Time (s) | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|----------|-----------|----------------------|------------------|-------------------|
| 1 | 0.10–3.02 | "So welcome back again. Time for one more problem." | Cold open / series continuity | Full-screen question card rising in | Establish frame, no distraction |
| 2 | 3.42–9.18 | "Now, in this problem, we are given that the speed of the boat in still water is 18 kilometer per hour." | State the boat's own speed | River scene assembling, boat drops in, "18" badge pops | Number 18 registers as the BOAT's own speed |
| 3 | 9.74–12.92 | "Also, the speed of the stream is four kilometer per hour." | State the stream's speed | "4" badge pops above the flowing river | Number 4 registers as the RIVER's speed, independent of the boat |
| 4 | 13.48–17.12 | "The question is asking us to find the upstream speed of the boat." | Frame the unknown | "Upstream Speed = ?" tag fades in | Plant the target quantity before any concept explanation |
| 5 | 17.56–20.52 | "Now, before using the formula, let us understand the concept." | Bridge into the concept beat | Flow arrows | Signal that a conceptual explanation is coming |
| 6 | 21.04–27.54 | "When a boat moves upstream, it is moving against the flow of the river, so the stream slows the boat down." | THE core upstream concept | Boat flips to face left, glides AGAINST the flow arrows, visibly struggling | Motion literally shows the current resisting the boat |
| 7 | 28.08–39.02 | "That is why we subtract the speed of the stream from the speed of the boat in still water. The formula is upstream speed is equal to speed in still water," | Converts the visual struggle into "subtract" | Merge chip "−4" flies into the boat's badge | Motion demonstrates subtraction — the badge itself becomes the difference |
| 8 | 39.50–40.92 | "minus speed of stream." | Complete the formula in words | "Upstream = Still Water − Stream" label | Reusable formula stated in full |
| 9 | 41.26–42.80 | "Now, let us put the given values." | Bridge from concept to arithmetic | Scene holds, about to pin | Signals the pivot to solving |
| 10 | 43.30–46.26 | "Upstream speed is equal to 18 minus four." | State the Given equation with real numbers | Given card (center, pinned layout) | Reader sees the two real numbers slotted into the formula |
| 11 | 46.80–56.00 | "After simplifying this, we get 14 kilometers per hour. So the upstream speed of the boat is 14 kilometers per hour. Hence," | Step 1 — the arithmetic + reveal lead-in | Step 1 card | Deliver the difference |
| 12 | 56.36–58.58 | "the correct answer is option D." | Reveal | Options grid, D pulses green | Confirm against the four choices |

---

## PART 2: Scene-by-Scene Storyboard

Design constraints in force throughout (per `_template/README.md` §4D.1): only `--primary #6373db`,
`--primary-light #e2e5ff`, `--success #4eb85f`, `--topic #949494`, `--text #000000`, `--bg #FFFFFF`;
only `QuestionCard`/`SerialNum`/`SolutionCard`/`SolutionStackCard`/`solutionChip`/`StepCircle`/
`StackLine`/options-grid/`logo`/`topic-name`/`bottomStrip`/Illustration/Fraction; only the helpers
in `animations.js`, called explicitly by name below. The illustration (river + boat + badges) is
per-question custom markup/CSS, reusing the boat/river technique from `q2` — same seamless
two-layer wave scroll and boat glide — but the boat travels in the OPPOSITE direction to the fixed
flow arrows, flips (`scaleX:-1`) to visually face into the current, and carries a small bounded
resistance wobble layered on its net leftward motion. Assets: `illustration/boat.svg`,
`illustration/wave.svg` (`#6373db`), `illustration/wave-light.svg` (`#e2e5ff`) — copied from
`global-illustrations/`, already palette-matched, untouched.

### SCENE 1 — Cold Open (0.0s – 3.42s)
**VOICEOVER:** "So welcome back again. Time for one more problem."
**VISUAL OBJECTIVE:** Establish the question, hero-style.
**SCREEN LAYOUT:** `#q-full-card` centered, lowered per `apt.heroEnterLowered`, at `top:80px`, containing the full question text with "18 km/hr", "4 km/hr" and "upstream speed" in `.num` blue.
**ON-SCREEN ELEMENTS:** QuestionCard (full), SerialNum badge ("Q").
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.42)` — fades/scales in at 0.3s lowered, rises to rest at 3.42s (end of "one more problem"). SerialNum mirrors with its own parallel tween (fades in at 0.8s at the same lowered Y, rises with the card at 3.42s).
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** N/A (opening beat).
**EDUCATIONAL PURPOSE:** Anchor the problem before anything else competes for attention.
**VISUAL HIERARCHY:** QuestionCard > SerialNum > (empty illustration area).
**ATTENTION MANAGEMENT:** Nothing else on screen yet.
**MOTION NOTES:** The rise is timed to finish exactly as "problem" is spoken.
**CONTINUITY FROM PREVIOUS SCENE:** N/A — first scene.

### SCENE 2 — River + Boat Assemble, Speeds Introduced (3.42s – 17.56s)
**VOICEOVER:** "Now, in this problem, we are given that the speed of the boat in still water is 18 kilometer per hour. Also, the speed of the stream is four kilometer per hour. The question is asking us to find the upstream speed of the boat."
**VISUAL OBJECTIVE:** Build the river scene and attach both real numbers to their physical referents before any arithmetic.
**SCREEN LAYOUT:** `#illustration` (1500×280, centered under the pinned question's future slot): river channel top-to-bottom with the boat idling on it, facing right (its resting/default orientation).
**ON-SCREEN ELEMENTS:**
- `#water-body` — rounded `--primary-light` channel (1500×90, `border-radius:16px`).
- `#river-mask` (`overflow:hidden`) containing `#river-track-back` (`wave-light.svg` row, slower scroll) and `#river-track-front` (`wave.svg` row, faster scroll) — two-layer parallax, both scrolling RIGHTWARD (the river's fixed downstream direction).
- `#boat-unit` — wrapper holding `boat.svg`, hull overlapping the water's top edge, facing right (idle/default pose).
- `#boat-badge` ("18" pill, `--primary` bg, white text) — inside `#boat-unit`, always travels with it.
- `#stream-badge` ("4" pill, same style) — fixed above the river, independent of the boat.
- `#flow-arrows` — three chevrons (CSS border-triangles, `--primary`), fixed above the river, pointing RIGHT (the river's fixed flow direction — this stays fixed for the whole video).
- `#target-tag` — "Upstream Speed = ?" pill, fades in once the question is framed.
**ANIMATION DETAILS:**
- 3.9s: `apt.cardEnter(tl, "#river-scene", 3.9)` — water body + wave mask fade/scale in.
- Immediately after (3.9s): both wave rows start their seamless rightward scroll loops via the local `riverFlow()` helper, running uninterrupted through the rest of the video (through the pinned recap too).
- 4.4s: `apt.cardEnter(tl, "#boat-unit", 4.4)` — boat drops onto the water, idling, facing right.
- Continuous from 4.4s: a small vertical bob (±4px, ~1.4s period) on `#boat-icon`, so it's never dead-still while idling.
- 7.539s: `apt.cardEnter(tl, "#boat-badge", 7.539)` — "18" pops above the boat, timed to the word "18".
- 11.679s: `apt.cardEnter(tl, "#stream-badge", 11.679)` and `apt.cardEnter(tl, "#flow-arrows", 11.679)` — "4" pops above the river and the flow arrows appear together, timed to the word "four".
- 15.539s: `apt.cardEnter(tl, "#target-tag", 15.539)` — "Upstream Speed = ?" fades in, timed to the word "upstream".
- 5.0s: `apt.cardEnter(tl, "#card-given .solution-card", 5.0)` — the Given `SolutionCard` (chip "Given") opens at `top:670px`, below the illustration, and stays open through the entire concept beat (Scenes 3–5) until it morphs to the stack right before Step 1. `apt.textReveal(tl, "#card-given .math")` syncs each value to its own real spoken word: `data-t="7.539"` ("Speed in Still Water = 18 km/hr") and `data-t="11.679"` ("Speed of Stream = 4 km/hr").
**CAMERA MOVEMENT:** None — static wide shot.
**TRANSITIONS:** Continuous build, no hard cuts.
**EDUCATIONAL PURPOSE:** Get 18 → boat and 4 → river physically anchored before Scene 4's subtraction payoff, and formalize both into the Given card the instant each is spoken.
**VISUAL HIERARCHY:** Boat + "18" badge (foreground) > river + "4" badge (midground) > flow arrows (background accent) > Given card (lower third, secondary).
**ATTENTION MANAGEMENT:** One badge/tag/card-line reveals at a time, matching the narration's own ordering (boat speed → stream speed → the question).
**MOTION NOTES:** The wave scroll is already running under the "we are given that" narration — the water is never static from the moment it appears.
**CONTINUITY FROM PREVIOUS SCENE:** The question card has just settled into its resting hero position (Scene 1's rise at 3.42s); the illustration begins filling in directly beneath it in the same frame, no cut.

### SCENE 3 — Flow Direction Held, Concept Bridge (17.56s – 21.04s)
**VOICEOVER:** "Now, before using the formula, let us understand the concept."
**VISUAL OBJECTIVE:** A brief settle beat that plants the flow arrows as a fixed reference before the boat launches against them.
**SCREEN LAYOUT:** Same river/boat scene; arrows become the momentary focal point.
**ON-SCREEN ELEMENTS:** `#flow-arrows` (already on screen from Scene 2, now emphasized).
**ANIMATION DETAILS:**
- 18.6s: `apt.emphasize(tl, "#flow-arrows", 18.6)` — the three chevrons pulse once, timed to "let us understand the concept."
- Waves keep scrolling, boat keeps bobbing throughout — no pause.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Continuous from Scene 2.
**EDUCATIONAL PURPOSE:** Fixes the current's direction as a settled fact right before the boat launches against it.
**VISUAL HIERARCHY:** Flow arrows momentarily promoted during their pulse, then settle back.
**ATTENTION MANAGEMENT:** Single pulse, nothing else competes.
**MOTION NOTES:** A calm beat before Scene 4's launch, so the struggle-glide reads as a clear step up in energy.
**CONTINUITY FROM PREVIOUS SCENE:** Boat and badges are exactly where Scene 2 left them; only the flow arrows pulse — nothing repositions.

### SCENE 4 — UPSTREAM: Boat Struggles, Speeds Subtract (21.04s – 41.26s)
**VOICEOVER:** "When a boat moves upstream, it is moving against the flow of the river, so the stream slows the boat down. That is why we subtract the speed of the stream from the speed of the boat in still water. The formula is upstream speed is equal to speed in still water, minus speed of stream."
**VISUAL OBJECTIVE:** The single most important visual beat — show the boat fighting the current and losing speed, then convert that struggle into the subtraction formula.
**SCREEN LAYOUT:** Boat travels right→left across the illustration width, AGAINST the fixed flow arrows (which keep pointing right, unchanged from Scene 2).
**ON-SCREEN ELEMENTS:** `#boat-icon` (flips to face left — icon only, so the badge/label text inside `#boat-unit` never mirrors), `#boat-unit` (travels, carries the badge), `#stream-badge` (stays fixed at its river position), a `#merge-chip` ("−4") that flies from `#stream-badge` to the boat, a `#formula-tag` ("Upstream = Still Water − Stream") that fades in above the scene, a bounded wake-flicker trio behind the boat (denser/choppier than a downstream wake, to read as resistance).
**ANIMATION DETAILS:**
- 21.04s: `tl.to("#boat-icon", {scaleX: -1, duration: 0.3, ease: "power2.inOut"}, 21.04)` — ONLY the `<img>` icon flips (not `#boat-unit`, which holds the badge/label as siblings — flipping the parent would mirror that text), timed to "moves".
- 21.26s: `tl.to("#boat-unit", {x: -650, duration: 20.0, ease: "power1.inOut"}, 21.26)` — boat glides LEFT across the illustration, arriving near the left edge right as "still water," finishes (~41.0s), i.e. the glide spans the entire concept explanation.
- 21.26s (parallel): a small bounded resistance wobble — `tl.to("#boat-unit", {y: "+=6", duration: 0.5, yoyo: true, repeat: 39, ease: "sine.inOut"}, 21.26)` (bounded, not infinite) layered on top of the net leftward slide, so the boat visibly fights the current rather than gliding smoothly.
- 21.26s (parallel): bounded wake-flicker (3 short trailing dashes on the boat's right/trailing side, opacity fromTo 0↔0.8, bounded repeat for the 21.26–41.0 window) runs the whole glide.
- 25.699s: `apt.emphasize(tl, "#flow-arrows", 25.699)` — a pulse on the flow arrows, timed to "stream" ("the stream slows the boat down"), visually reasserting the fixed current the boat is fighting.
- 29.42s: `tl.to("#merge-chip", {...flies from stream-badge's position toward the boat's live x-position...}, 29.42)` — timed to "subtract" ("we subtract the speed of the stream").
- 33.36s: chip lands/merges into `#boat-badge`; the badge's text crossfades from "18" to "18 − 4" (0.25s opacity swap of two stacked spans, same idiom `apt.morphToStack` uses internally), timed to "still water." ("...the speed of the boat in still water").
- 35.319s: `apt.cardEnter(tl, "#formula-tag", 35.319)` — "Upstream = Still Water − Stream" label fades in, timed to "upstream" ("The formula is upstream speed is equal to...").
- 40.139s: `apt.emphasize(tl, "#formula-tag", 40.139)` — pulse on "minus speed of stream."
- River scroll continues uninterrupted underneath all of the above; the boat's own bob is superseded by the resistance wobble for the duration of this scene.
**CAMERA MOVEMENT:** None (the boat provides all horizontal motion within the fixed frame).
**TRANSITIONS:** Continuous from Scene 3 — the boat flips and starts moving, no cut.
**EDUCATIONAL PURPOSE:** Concrete, motion-based proof of "upstream = still water − stream" — the abstract formula and the visible slow-down/struggle land together.
**VISUAL HIERARCHY:** Traveling (struggling) boat + merging chip (primary) > formula label (secondary) > river + flow arrows (ambient/reference).
**ATTENTION MANAGEMENT:** Chip-merge and formula label are sequenced ~6s apart (29.42s vs 35.319s) so they don't compete.
**MOTION NOTES:** The glide is deliberately NOT smooth (unlike q2's downstream glide) — the bounded wobble is what sells "the current is pushing back."
**CONTINUITY FROM PREVIOUS SCENE:** The boat is exactly where Scene 3 left it (idling at its Scene-2 starting position, facing right); it flips and launches into motion from that same spot, no repositioning jump.

### SCENE 5 — PIN FLOW (41.26s – 43.0s)
**VOICEOVER:** "Now, let us put the given values."
**VISUAL OBJECTIVE:** Transition to solving mode. The Given card itself was already opened much earlier (Scene 2, see below) — this beat is purely the layout pin.
**SCREEN LAYOUT:** Question glides to its pinned top slot (`#q-pinned`); the full illustration glides into a small pinned recap (`#illus-pinned`) that keeps a MINIATURE river running continuously with a small boat icon, still facing left (its Scene 4 orientation) and idling at rest. The Given `SolutionCard` (already open since Scene 2, at `top:670px` below the Phase-1 illustration) morphs into the stack right at the end of this beat, just before Step 1 opens.
**ON-SCREEN ELEMENTS:** `#q-pinned`, `#illus-pinned` (containing `#river-track-mini` — short two-layer wave loop — and a small idling boat icon plus the label "Still Water = 18 · Stream = 4"), `#card-given` (chip "Given", already visible, about to morph).
**ANIMATION DETAILS:**
- `PIN_TIME = 41.259`: `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 41.259)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 41.259)`. `apt.fadeOut(tl, "#serial-num", 41.259, 0.5)`.
- From `PIN_TIME + 1 = 42.26` onward, through `RECENTER_TIME` (55.599s): `#river-track-mini`'s seamless scroll keeps running and `apt.ambientLoop(tl, "#illus-pinned-icon", 42.26, 55.599)` bobs the small boat — keeps the pinned area alive through the Step1 phase.
- `STEP1_MORPH_TIME = 42.2`: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 42.2)` — completes 43.0, landing exactly as Step 1 opens.
**CAMERA MOVEMENT:** The pin-flow itself (question+illustration gliding to pinned slots).
**TRANSITIONS:** `apt.pinFlow`'s real glide (0.8s), not a cut.
**EDUCATIONAL PURPOSE:** Clears the given values into the stack right as the narration pivots to solving.
**VISUAL HIERARCHY:** Pinned question (top) > pinned river recap (ambient, still alive) > Given card mid-morph.
**ATTENTION MANAGEMENT:** Single transition beat, no new reveals.
**MOTION NOTES:** The mini river loop + idling boat is what keeps this scene from reading static.
**CONTINUITY FROM PREVIOUS SCENE:** The full illustration is still mid-glide into its pinned slot as the Given card's morph fires — same continuous motion carrying over from Scene 4's struggle glide.

### SCENE 6 — STEP 1: Formula + Subtract the Speeds (43.0s – 55.60s)
**VOICEOVER:** "Upstream speed is equal to 18 minus four. After simplifying this, we get 14 kilometers per hour. So the upstream speed of the boat is 14 kilometers per hour. Hence,"
**VISUAL OBJECTIVE:** State the upstream formula explicitly on the solution card, then substitute the real numbers and deliver the difference.
**SCREEN LAYOUT:** Given card has already morphed to the left stack (Scene 5); Step 1 `SolutionCard` opens center at 43.0s, right as the narration begins restating the equation with real numbers.
**ON-SCREEN ELEMENTS:** `#stack-given` (`.step-circle` "G"), `#card-step1`.
**ANIMATION DETAILS:**
- 43.0s: `apt.cardEnter(tl, "#card-step1 .solution-card", 43.0)`.
- `apt.textReveal(tl, "#card-step1 .math")` reveals:
  - line `data-t="43.0"`: "Upstream Speed = Still Water − Stream" (the formula itself, revealed immediately on card entry)
  - line `data-t="45.139"`: "= 18 − 4 =" (line-level, substitution — timed to the word "18" in "Upstream speed is equal to 18 minus four")
  - word-level `data-t="48.759"`: "<span class='ans'>14 km/hr</span>" (timed to the word "14" in "we get 14 kilometers per hour")
- Pinned river recap continues its loop, unbroken.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** N/A — continues straight from Scene 5's morph.
**EDUCATIONAL PURPOSE:** Puts the reusable formula on the same card as its own substitution, then isolates the arithmetic as its own clean reveal beat.
**VISUAL HIERARCHY:** Step 1 card (center, active) > stack-given (left, archived) > pinned recap (ambient).
**ATTENTION MANAGEMENT:** Three sequential reveals, matched to the narration's own pacing.
**MOTION NOTES:** River keeps flowing; boat icon keeps its idle bob (via `ambientLoop`).
**CONTINUITY FROM PREVIOUS SCENE:** Given card's morph (Scene 5) lands right as this card opens — no gap.

### SCENE 7 — Options Reveal (55.60s – 58.58s)
**VOICEOVER:** "the correct answer is option D."
**VISUAL OBJECTIVE:** Confirm the answer against all four choices.
**SCREEN LAYOUT:** Step 1 morphs to stack; pinned question recenters; illustration recap clears; options grid (2×2) appears.
**ON-SCREEN ELEMENTS:** `#stack-step1` (`.step-circle` "1"), `#line-g-1` connector, `#options-reveal` (A: 12.32, B: 15.68, C: 17.36, D: 14 — correct).
**ANIMATION DETAILS:**
- 55.599s: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 55.599)`; `apt.stackLineGrow(tl, "#line-g-1", 55.599)`.
- 55.599s: `apt.fadeOut(tl, "#illus-pinned", 55.599)` (only clean stopping point for the river recap); `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 55.599)`.
- 56.0s: `apt.fadeIn(tl, "#options-reveal", 56.0)`.
- 56.3s: `apt.optionsStagger(tl, ".opt-btn", 56.3)`.
- 58.02s: `apt.correctPulse(tl, ".opt-btn.correct", 58.02)`, timed to land on "option D." (58.02–58.579).
- `END_FADE_TIME = 59.0`: `apt.fadeOut(tl, "#root > div", 59.0, 1.2)` — everything on screen (pinned question, stack column, options grid) fades out TOGETHER, once, at the very end. `q-pinned` (duration 18.95, ends 60.2), `stack-given` (duration 18.0, ends 60.2), `stack-step1`/`line-g-1`/`options-reveal` (duration 4.6, each ends 60.2) — all extended to cover the full fade instead of clipping out early.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** `apt.morphToStack` + `apt.recenterForOptions`.
**EDUCATIONAL PURPOSE:** Standard close — verify the derived answer (14 km/hr) against the given options.
**VISUAL HIERARCHY:** Options grid (primary) > stack column (secondary) > pinned question (tertiary).
**ATTENTION MANAGEMENT:** Stagger-then-pulse, standard two-beat close.
**MOTION NOTES:** This is the one deliberate point where continuous ambient motion (river recap) is allowed to stop — immediately replaced by the options-reveal's own motion. Nothing fades early; the whole frame holds until the single end-fade.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1 remains fully legible until its own morph fires — no premature fade.

---

## PART 3: Asset List Required

| Asset | Source | Notes |
|---|---|---|
| `illustration/boat.svg` | Copied from `global-illustrations/boat.svg` | Untouched — `#boat-icon` flips via `scaleX:-1` in Scene 4/5 to face left (icon element only, not its `#boat-unit` parent, so the badge/label text never mirrors; no re-path/recolor needed) |
| `illustration/wave.svg` | Copied from `global-illustrations/wave.svg` | `.st0{fill:#6373db}` — front (faster) wave row |
| `illustration/wave-light.svg` | Copied from `global-illustrations/wave-light.svg` | `.st0{fill:#e2e5ff}` — back (slower) wave row |
| `design-system.css`, `animations.js`, `assets/` | Copied from `_template/` | Per README §5B |

No new colors, fonts, or template components introduced — all illustration CSS (river channel,
boat wrapper + flip, badges, chip, formula tag, flow arrows, resistance wobble, wake-flicker) is
per-question custom markup as permitted by design.md's "Illustration" section.

---

## PART 4: Animation Complexity Notes

- **Seamless wave loop ("riverFlow" pattern):** identical technique to `q2`/`q8` — each wave row is two identical tile-copies back to back, a `fromTo(x: -tileWidth → 0)` tween with `ease:"none"` and a bounded, computed repeat count (never `-1`) restarts seamlessly at each cycle boundary. The flow direction is fixed rightward for the entire video (both when the boat travels with it, conceptually, and here when it travels against it).
- **Boat flip:** a single `scaleX:-1` tween on `#boat-icon` (the `<img>` only, not its `#boat-unit` wrapper) at the start of Scene 4 — the only orientation change in the whole composition, reused unchanged through the pinned recap (`#illus-pinned-icon` is a standalone `<img>` with no sibling text, so it can flip directly).
- **Resistance wobble:** a small bounded yoyo tween on the boat's y-position, layered on top of its net leftward slide, is the one new motion idiom versus `q2` — it's what visually sells "moving against the current" instead of "gliding with it." Bounded repeat count only, never infinite.
- **No B/C algebra, no direction ambiguity:** like q2, this is a single direct arithmetic operation (subtraction) with both operands known — the boat only ever travels one direction (left/upstream), and its badge shows real numbers ("18", "18 − 4") rather than letters.
- **Badge text swap** ("18" → "18 − 4") uses the same plain 0.25s opacity-crossfade idiom `apt.morphToStack` already uses internally — two stacked `<span>`s inside the badge, only one visible at a time via opacity.
- **Pinned recap never idles:** the pinned illustration keeps its own miniature wave loop running continuously, and the small boat icon bobs via `apt.ambientLoop`, from `PIN_TIME+1` through `RECENTER_TIME` (~13s span covering the entire Given/Step1 phase).
- **Only one true stop:** the illustration recap's fade-out at 55.599s (Scene 7) is the sole point where continuous ambient motion ends, immediately superseded by the options-reveal's own stagger/pulse animation.
- Only one step (subtraction) since this is a direct formula substitution with no unit conversion needed — same density as q2's single-step build.
- **Given card opens early (5s), not after the pin:** unlike a card that only appears in Phase 2, this Given card opens in Phase 1 (below the illustration, `top:670px`) the moment its values are actually spoken (18 at 7.539s, four at 11.679s), then stays open through the whole concept beat and morphs to the stack right before Step 1 opens at 43s. Step 1 itself carries the formula as its own first line, not just the substitution.

---

## PART 5: Master Timeline Overview

```
TIME (s)   ELEMENT                          WHAT HAPPENS
─────────  ───────────────────────────────  ─────────────────────────────────
0.0        Background + bottomStrip+logo    Always visible
0.3        QuestionCard                     heroEnterLowered — fades/scales in low
0.8        SerialNum                        pops in low, mirrors card
3.42       QuestionCard + SerialNum         rise to resting position
3.9        River (2-layer wave loop)        seamless rightward scroll begins — never stops until 55.599s
4.4        Boat                             drops onto water (facing right), idle bob begins
5.0        Given card                       cardEnter (below illustration, top:670px)
7.539–11.679  Given card .math              textReveal (still water eq @7.539, stream eq @11.679)
7.539      "18" badge                       cardEnter on boat
11.679     "4" badge + flow arrows          cardEnter (together, arrows point right — fixed for the video)
15.539     "Upstream Speed = ?" tag         cardEnter
18.6       Flow arrows                      emphasize pulse ("understand the concept")
21.04      Boat icon                        flips (scaleX:-1, icon only) to face left
21.26      Boat                             glides LEFT 650px over 20.0s (upstream), with bounded resistance wobble + wake-flicker
25.699     Flow arrows                      emphasize pulse ("stream slows the boat down")
29.42      "−4" chip                        flies from stream-badge to boat
33.36      "18" badge                       text swap → "18 − 4"
35.319     "Upstream = Still Water − Stream" label   cardEnter
40.139     Formula label                    emphasize pulse

[ PIN_TIME = 41.259 ]
─────────  ───────────────────────────────  ─────────────────────────────────
41.259     Question + Illustration          🌟 pinFlow — real glide to pinned slots
42.2       Given → Given stack               🌟 morphToStack (completes 43.0)
42.26      Pinned river recap                mini seamless loop + boat bob begins — runs to 55.599

[ STEP CYCLE ]
─────────  ───────────────────────────────  ─────────────────────────────────
43.0       Step 1 card                       cardEnter (formula line reveals immediately)
45.139     Step 1 .math                      textReveal ("= 18 − 4 =")
48.759     Step 1 .math                      textReveal ("14 km/hr")

[ PHASE 3 ]
─────────  ───────────────────────────────  ─────────────────────────────────
55.599     Step 1 → Step 1 stack            🌟 morphToStack + stackLineGrow (G→1)
55.599     Pinned illustration recap        fadeOut (the ONE deliberate stop)
55.599     Pinned question                  recenterForOptions
56.0       Options grid                     fadeIn
56.3       Option buttons                   optionsStagger
58.02      Correct option (D)               correctPulse
59.0       Everything                       END FADE (1.0s)
```

**Video duration:** 58.579s (matches `voiceover.wav` exactly).
