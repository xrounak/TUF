# Storyboard — Boats & Streams: "Downstream 27, Still Water 22 → Find Upstream"

Topic: Speed, Time and Distance · Question 34 · Voiceover duration: **76.04s**

Built as a sibling of [q33](../q33/index.html) (same river/boat illustration technique — given-row of chips, boat-badge crossfade + merge-chip, pinned recap with a 3-state crossfading label and a physical brake+flip for the upstream concept) rather than q8's: q33 is the closer relative since it, like q34, teaches downstream (addition) physically in Phase 1 and carries the upstream (subtraction) concept via the pinned recap + card text instead of a second full physical leg. The one structural difference from q33: q34 has **no unknown at all** (q33 solves for one unknown, B; q34's downstream and still-water are both given outright), so Step 1 computes current (=5) and Step 2 computes upstream (=17) directly — no equation-solving step. q34's narration also uniquely rearranges the formula ("we can also write this as..."), which q33 never does, so `#formula-tag` crossfades between its two forms in place (q33's own formula tag is static).

---

## PART 1 — Narration Beat Analysis

| # | Timestamp (transcript.json) | Narration | Educational Purpose | Viewer Attention Focus | Visual Objective |
|---|---|---|---|---|---|
| 1 | 0.12–1.90 | "So welcome back again." | Warm open, series continuity | Full-screen question card rising in | Establish frame, no distraction |
| 2 | 2.52–10.20 | "Time for one more problem... downstream speed of a boat is 27 kilometer per hour" | State the first raw fact | Question card (27 in blue); given-row chip 1 | Number 27 registers before any concept talk |
| 3 | 10.92–15.24 | "Also, the speed of the boat in still water is 22 kilometer per hour." | State the second raw fact | given-row chip 2 | Number 22 registers alongside 27 |
| 4 | 15.82–18.80 | "The question is asking us to find the upstream speed of the boat." | Frame the unknown | given-row chip 3 ("Upstream = ?") | Plant "upstream speed" as the goal, mirroring q33's given-upstream chip |
| 5 | 19.22–26.74 | "before solving...one simple concept...when boat moves downstream, current helps the boat" | Introduce the current concept | River+boat assemble; "Current" badge pops above the river | Viewer maps "current" to a real physical force before any formula |
| 6 | 27.12–31.28 | "downstream speed is equal to speed in still water plus speed of the current" | State Downstream = Still Water + Current | Boat glides WITH the current (fast); "+Current" chip flies from the Current badge into the boat; boat's own badge crossfades "Boat" → "Boat + Current"; formula tag reads "Downstream = Still Water + Current" | Motion + badge-merge literally demonstrate the addition — same idiom as q33's +5 chip / B→B+5 swap |
| 7 | 31.66–38.48 | "we can also write this as speed of current is equal to downstream speed minus speed in still water" | Rearrange to Current = Downstream − Still Water | Formula tag crossfades in place to the rearranged form | Same relationship, same box — a rearrangement, not a new fact (q34-specific; q33 has no equivalent) |
| 8 | 38.88–48.88 | "we already know the values...putting the values...27 minus 22...five kilometers per hour" | Bridge to solving + compute current | Pin to top; Given card recaps 27/22; Step 1 card computes 27−22=5; pinned label crossfades to "Current = 5 km/hr" | Converts the visual/conceptual demo directly into the first arithmetic step |
| 9 | 49.32–62.40 | "now we can find upstream...be very sure...when boat moves upstream, current moves against the boat...upstream = still water minus current" | State the mirror concept + formula for upstream | Step 2 card opens, states "Upstream = Still Water − Current"; pinned mini boat brakes and flips to face upstream | The subtract case gets a real physical payoff (the pinned recap flip) instead of being pure text, same idiom as q33's Scene 7 |
| 10 | 62.90–73.24 | "putting the values...22 minus 5...17 kilometers per hour...so the upstream speed is 17" | Compute the final answer | Step 2 card reveals "22 − 5 = 17 km/hr"; pinned label crossfades to "Upstream = 17 km/hr" | Deliver the final numeric answer |
| 11 | 73.64–76.04 | "Hence, the correct answer is option D." | Reveal | Options grid, D pulses green | Confirm against the four choices |

---

## PART 2 — Scene-by-Scene Storyboard

Design constraints in force throughout (per `_template/README.md` §4D.1): only `--primary #6373db`, `--primary-light #e2e5ff`, `--success #4eb85f`, `--topic #949494`, `--text #000000`, `--bg #FFFFFF`; only `QuestionCard`/`SerialNum`/`SolutionCard`/`SolutionStackCard`/`solutionChip`/`StepCircle`/`StackLine`/options-grid/`logo`/`topic-name`/`bottomStrip`/Illustration/Fraction; only the helpers in `animations.js`, called explicitly by name below. The illustration reuses the exact same user-supplied assets as siblings [q8](../q8/index.html) and [q33](../q33/index.html) — `illustration/boat-svgrepo-com.svg`, `illustration/wave-2-svgrepo-com.svg`, `illustration/wave-2-light.svg` — already present in this question's folder, untouched further.

### SCENE 1 — Cold Open (0.0s – 3.6s)
**VOICEOVER:** "So welcome back again. Time for one more problem..."
**VISUAL OBJECTIVE:** Establish the question, hero-style.
**SCREEN LAYOUT:** `#q-full-card` centered, vertically lowered per `apt.heroEnterLowered`, containing the full question text with "27 km/hr", "22 km/hr" and "upstream speed" in `.num` blue.
**ON-SCREEN ELEMENTS:** QuestionCard (full), SerialNum badge ("Q").
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.6)`; SerialNum parallel tween mirrors the same lowered→rest motion.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** N/A (opening beat).
**EDUCATIONAL PURPOSE:** Anchor the problem statement before anything else competes for attention.
**VISUAL HIERARCHY:** QuestionCard > SerialNum > (empty illustration area, about to fill).
**ATTENTION MANAGEMENT:** Nothing else on screen yet.
**MOTION NOTES:** The rise is timed to finish exactly as "problem" is spoken.
**CONTINUITY FROM PREVIOUS SCENE:** N/A — first scene.

### SCENE 2 — Given Row Lands (3.6s – 19.0s)
**VOICEOVER:** "...downstream speed of a boat is 27km/hr. Also, the speed of the boat in still water is 22km/hr. The question is asking us to find the upstream speed of the boat."
**VISUAL OBJECTIVE:** Restate both known numbers plainly, then plant the goal, before any concept-building starts (same three-chip idiom as q33's `#given-row`).
**SCREEN LAYOUT:** `#given-row` — a centered flex row of three `.given-mini` pill chips above the still-empty illustration area.
**ON-SCREEN ELEMENTS:** `#given-downstream` ("Downstream Speed = 27 km/hr"), `#given-still` ("Still Water Speed = 22 km/hr"), `#given-upstream` ("Upstream Speed = ? km/hr").
**ANIMATION DETAILS:**
- 8.46s: `apt.cardEnter(tl, "#given-downstream", 8.46)` — timed to "27 kilometer per hour."
- 14.08s: `apt.cardEnter(tl, "#given-still", 14.08)` — timed to "22 kilometer per hour."
- 19.0s: `apt.cardEnter(tl, "#given-upstream", 19.0)` — timed to the end of "...find the upstream speed of the boat."
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Continuous, no cuts.
**EDUCATIONAL PURPOSE:** Both raw numbers AND the goal register visually before any formula talk begins.
**VISUAL HIERARCHY:** Given-row chips (foreground) > empty illustration space (about to fill).
**ATTENTION MANAGEMENT:** One chip at a time, matching narration order.
**MOTION NOTES:** Held state — nothing else moves yet.
**CONTINUITY FROM PREVIOUS SCENE:** Question card has just settled into rest position; chips appear directly beneath it, no cut.

### SCENE 3 — River + Boat Assemble, Current Introduced (19.22s – 26.74s)
**VOICEOVER:** "Now, before solving, let us understand one simple concept. When a boat moves downstream, the current helps the boat."
**VISUAL OBJECTIVE:** Build the river scene and anchor "current" as a real physical force before any formula appears.
**SCREEN LAYOUT:** `#illustration` (1500×280) fills in: river channel, boat (with its own "Boat" badge), flow arrows, then the "Current" word-badge.
**ON-SCREEN ELEMENTS:** `#river-scene` (two-layer parallax wave loop), `#boat-unit` (idle, bobbing) with `#boat-badge` (reads "Boat"), `#flow-arrows`, `#current-badge` ("Current" pill).
**ANIMATION DETAILS:**
- 4.2s: `apt.cardEnter(tl, "#river-scene", 4.2)` — both wave rows start their seamless scroll loop (`riverFlow()`, bounded repeat) and run uninterrupted until `PIN_TIME` (38.88).
- 4.8s: `apt.cardEnter(tl, "#boat-unit", 4.8)` and `apt.cardEnter(tl, "#boat-badge", 4.8)` — boat drops onto the water, idling, badge already reads "Boat" (anticipates the crossfade in Scene 4, same idiom q33 uses for its B badge).
- Continuous from 4.8s: `apt.ambientLoop(tl, "#boat-icon", 4.8, 38.88, {period:1.6, amp:5})`.
- 5.0s: `apt.cardEnter(tl, "#flow-arrows", 5.0)`.
- 24.92s: `apt.cardEnter(tl, "#current-badge", 24.92)` — timed to "the current helps the boat."
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Continuous build.
**EDUCATIONAL PURPOSE:** Names the force that's about to visibly act on the boat in the next scene.
**VISUAL HIERARCHY:** River/boat (foreground) > Current badge (momentary focus on entrance).
**ATTENTION MANAGEMENT:** River+boat settle first, then the Current badge — two beats, not simultaneous.
**MOTION NOTES:** The wave scroll and boat bob are already running under this narration, establishing early that nothing sits static.
**CONTINUITY FROM PREVIOUS SCENE:** Given-row chips remain visible and legible; the river/boat build in the empty space beneath them, no cut.

### SCENE 4 — DOWNSTREAM: Boat Speeds Up, Badge Merges (27.12s – 31.28s)
**VOICEOVER:** "So downstream speed is equal to speed in still water plus speed of the current."
**VISUAL OBJECTIVE:** Show the boat visibly gliding faster while the additive formula and badge-merge land together (same merge idiom as q33's "+5" chip / B→B+5 swap).
**SCREEN LAYOUT:** Boat travels left→right across the illustration, same direction as the flow arrows.
**ON-SCREEN ELEMENTS:** `#boat-unit` (traveling), `#boat-badge` (crossfades "Boat" → "Boat + Current"), `#merge-chip` ("+Current", flies from the Current badge into the boat), `#formula-tag` (state 1: "Downstream = Still Water + Current"), wake-line trio.
**ANIMATION DETAILS:**
- 22.40s: `tl.to("#boat-unit", {x:1000, duration:16.08, ease:"power1.out"}, 22.40)` — boat glide starts at the top of Scene 3's own "moves downstream" line and continues through Scene 5, one continuous motion.
- Same span: `wakeFlicker(tl, 22.40, 38.48)`.
- 27.24s: `apt.cardEnter(tl, "#formula-tag", 27.24)` — timed to "downstream speed is equal to...".
- 29.9s: `tl.fromTo("#merge-chip", {opacity:0,x:-160}, {opacity:1,x:0,duration:0.6,ease:"power2.out"}, 29.9)` — chip flies from the Current badge toward the boat, timed to "...plus".
- 30.4s: merge-chip fades out (landed/absorbed).
- 30.6s: `#boat-state-solo` → 0, `#boat-state-sum` → 1 (0.25s crossfade) — badge now reads "Boat + Current", timed to "speed of the current."
- 31.0s: `apt.emphasize(tl, "#formula-tag", 31.0)`.
**CAMERA MOVEMENT:** None (the boat itself provides the horizontal motion).
**TRANSITIONS:** Continuous from Scene 3 — the boat is already moving when this scene's narration begins.
**EDUCATIONAL PURPOSE:** Concrete, motion-based proof of "downstream = still water + current," reinforced twice (formula tag + boat badge) exactly as q33 reinforces B+5 twice.
**VISUAL HIERARCHY:** Traveling boat + merging chip/badge (primary) > formula tag (secondary) > river underneath (ambient).
**ATTENTION MANAGEMENT:** Chip-merge (29.9s) and formula tag entrance (27.24s) are spaced so they don't compete for the first read; badge swap follows immediately after the chip lands.
**MOTION NOTES:** The boat's glide duration (16.08s, 22.40→38.48) spans both this scene and the next, arriving near the right edge exactly as the rearranged formula finishes being read.
**CONTINUITY FROM PREVIOUS SCENE:** Boat launches from its Scene 3 idle position; already mid-glide as this scene's narration starts.

### SCENE 5 — Formula Rearranges in Place (31.66s – 38.48s)
**VOICEOVER:** "We can also write this as speed of the current is equal to downstream speed minus speed in still water."
**VISUAL OBJECTIVE:** Show the SAME relationship rearranged to solve for current — a crossfade, not a new box (q34-specific; q33's narration has no equivalent rearrangement).
**SCREEN LAYOUT:** Same illustration; boat completing its glide toward the right edge.
**ON-SCREEN ELEMENTS:** `#formula-tag` (now state 2: "Current = Downstream − Still Water").
**ANIMATION DETAILS:**
- 33.82s: `#formula-state-1` → 0, `#formula-state-2` → 1 (0.25s crossfade) — timed to the second "current" in "speed of the current is equal to."
- 37.9s: `apt.emphasize(tl, "#formula-tag", 37.9)` — pulse right before the boat's glide completes.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Continuous — same tag, same box, text swaps in place.
**EDUCATIONAL PURPOSE:** Makes explicit that this is an algebraic rearrangement of the same fact just demonstrated, not a second concept to learn.
**VISUAL HIERARCHY:** Formula tag (primary) > boat arriving at rest (secondary).
**ATTENTION MANAGEMENT:** One crossfade, one pulse — no competing reveals.
**MOTION NOTES:** River/boat motion continues uninterrupted right up to the pin.
**CONTINUITY FROM PREVIOUS SCENE:** Boat is still completing the exact same glide tween started in Scene 4; no reset.

### SCENE 6 — PIN FLOW + Given + Step 1 (38.88s – 49.32s)
**VOICEOVER:** "Now, we already know the downstream speed and the speed in still water. Putting the values, speed of the current is equal to 27 minus 22. This gives us five kilometers per hour."
**VISUAL OBJECTIVE:** Transition to solving mode; recap the knowns, then compute the current.
**SCREEN LAYOUT:** Question glides to `#q-pinned`; illustration glides into `#illus-pinned` (mini river+boat, 1.5x-scaled content with a counter-scaled label, same technique as q33); Given `SolutionCard` opens center, then morphs to the stack as Step 1 opens.
**ON-SCREEN ELEMENTS:** `#q-pinned`, `#illus-pinned` (mini river/boat + `#pinned-illus-label`, 3-state crossfading), `#card-given` (chip "Given"), `#card-step1` (chip "Step 1"), `#stack-given` (`.step-circle` "G").
**ANIMATION DETAILS:**
- `PIN_TIME = 38.88`: `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 38.88)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 38.88)`; `apt.fadeOut(tl, "#serial-num", 38.88, 0.5)`.
- From `PIN_TIME + 1 = 39.88` through `RECENTER_TIME` (73.64): mini river scroll + `apt.ambientLoop(tl, "#illus-pinned-icon", 39.88, 73.64)` — the pinned area never sits static.
- `#label-state-1` ("Downstream = 27 · Still Water = 22 km/hr") is visible from `PIN_TIME+1`.
- `GIVEN_TIME = 40.0`: `apt.cardEnter(tl, "#card-given .solution-card", 40.0)`; `apt.textReveal(tl, "#card-given .math")` reveals "Downstream Speed = 27 km/hr" (40.0) then "Still Water Speed = 22 km/hr" (41.0).
- `STEP1_TIME = 43.76` (morph): `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 43.76)`. Per the README's breathing-gap rule, `#card-step1` enters a full 1s later at `44.76`, not at the morph instant itself: `apt.cardEnter(tl, "#card-step1 .solution-card", 44.76)`; `apt.textReveal(tl, "#card-step1 .math")` reveals "Current = Downstream − Still Water" (44.76), then word-level "27 − 22" (45.20/45.84/46.36), then "= 5 km/hr" (47.14).
- 47.14s: `#label-state-1` → 0, `#label-state-2` ("Current = 5 km/hr") → 1 — pinned label crossfades right as Step 1's own answer lands.
**CAMERA MOVEMENT:** The pin-flow glide. **TRANSITIONS:** `apt.pinFlow` (0.8s), `apt.morphToStack` (0.8s).
**EDUCATIONAL PURPOSE:** Converts the visual/conceptual downstream demo directly into the first computed value.
**VISUAL HIERARCHY:** Active card (center, primary) > pinned question (top, secondary) > pinned river recap (ambient, never fully static).
**ATTENTION MANAGEMENT:** Given states both knowns; Step 1 reveals formula → substitution → result, matching the narration's own pacing.
**MOTION NOTES:** First stretch where the pinned recap covers a card-reading beat — stays alive throughout.
**CONTINUITY FROM PREVIOUS SCENE:** The full illustration is still mid-glide into its pinned slot as the Given card opens.

### SCENE 7 — STEP 2: Upstream Concept (Physical Payoff in the Pinned Recap) + Final Answer (49.32s – 73.24s)
**VOICEOVER:** "Now that we know the speed of the current, we can find the upstream speed. Be very sure about one thing. When a boat moves upstream, the current moves against the boat. So upstream speed is equal to speed in still water minus speed of the current. Putting the values, upstream speed is equal to 22 minus 5. This gives us 17 kilometers per hour. So the upstream speed of the boat is 17 kilometers per hour."
**VISUAL OBJECTIVE:** State the mirror (subtract) concept and deliver the final numeric answer — and unlike a text-only treatment, give the "against the flow" idea a real physical payoff via the pinned recap's boat flip (same idiom as q33's Scene 7), even though the main Phase-1 illustration only demonstrated downstream.
**SCREEN LAYOUT:** Step 1 morphs to the left stack; Step 2 `SolutionCard` opens center and stays active for the whole remaining narration span; pinned mini boat brakes and flips to face left.
**ON-SCREEN ELEMENTS:** `#stack-step1` (`.step-circle` "1"), `#line-g-1` connector, `#card-step2`, pinned `#illus-pinned-icon` (flips).
**ANIMATION DETAILS:**
- `STEP2_TIME = 49.32` (morph): `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 49.32)`; `apt.stackLineGrow(tl, "#line-g-1", 49.32)`. `#card-step2` enters 1s later at `50.32`: `apt.cardEnter(tl, "#card-step2 .solution-card", 50.32)`.
- `apt.textReveal(tl, "#card-step2 .math")` reveals: line "Find Upstream Speed" (50.32), line "Upstream = Still Water − Current" (54.70), word-level "22 − 5" (65.62/65.96/66.46), "= 17 km/hr" (67.64).
- 56.78s (sync word "against" in "the current moves against the boat"): `tl.to("#illus-pinned-icon", {scaleY:0.92, duration:0.18, ease:"power2.out", yoyo:true, repeat:1}, 56.78)` — brake-squash — then `tl.to("#illus-pinned-icon", {scaleX:-1, duration:0.4, ease:"power2.inOut"}, 57.0)` — the mini boat visibly turns to face upstream.
- 67.64s: `#label-state-2` → 0, `#label-state-3` ("Upstream = 17 km/hr") → 1 — pinned label crossfades right as the final answer lands.
- Pinned river/boat recap continues its loop, unbroken, through this entire ~24s scene.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** `apt.morphToStack` (0.8s).
**EDUCATIONAL PURPOSE:** Delivers the mirror-image formula and the final answer while still giving "against the flow" a literal visual match, not a silent hold.
**VISUAL HIERARCHY:** Step 2 card (center, active) > flipping pinned boat (secondary, the concept motion) > stack column (tertiary).
**ATTENTION MANAGEMENT:** Four sequential textReveal beats plus one short (0.58s) flip event, spaced across the narration's own pacing — nothing overlaps.
**MOTION NOTES:** This is the longest single card window (~23s) in the video — the flip event plus continuous river/bob keeps it from ever reading as static.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1 remains fully legible until its own morph fires; the pinned boat is exactly where Scene 6's pin-flow left it, facing right, before this scene's flip.

### SCENE 8 — Options Reveal (73.64s – 76.04s)
**VOICEOVER:** "Hence, the correct answer is option D."
**VISUAL OBJECTIVE:** Confirm the answer against all four choices.
**SCREEN LAYOUT:** Step 2 morphs to stack; pinned question recenters; illustration recap clears; options grid (2×2) appears.
**ON-SCREEN ELEMENTS:** `#stack-step2` (`.step-circle` "2"), `#line-1-2` connector, `#options-reveal` (A: 16, B: 18, C: 20, D: 17 — correct).
**ANIMATION DETAILS:**
- `RECENTER_TIME = 73.64`: `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 73.64)`; `apt.stackLineGrow(tl, "#line-1-2", 73.64)`; `apt.fadeOut(tl, "#illus-pinned", 73.64)` (the one deliberate stop); `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 73.64)`.
- 74.0s: `apt.fadeIn(tl, "#options-reveal", 74.0)`.
- 74.3s: `apt.optionsStagger(tl, ".opt-btn", 74.3)`.
- 75.98s: `apt.correctPulse(tl, ".opt-btn.correct", 75.98)` — timed to land exactly on "option D."
- 76.7s: `apt.fadeOut(tl, "#root > div", 76.7, 1.2)` — END FADE.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** `apt.morphToStack` + `apt.recenterForOptions`.
**EDUCATIONAL PURPOSE:** Standard close — verify the derived answer (17 km/hr) against the given options.
**VISUAL HIERARCHY:** Options grid (primary) > stack column (secondary) > pinned question (tertiary).
**ATTENTION MANAGEMENT:** Stagger-then-pulse, standard two-beat close.
**MOTION NOTES:** The one deliberate point where continuous ambient motion (the river recap) is allowed to stop — immediately replaced by the options-reveal's own motion.
**CONTINUITY FROM PREVIOUS SCENE:** Step 2 is fully read before its morph fires; the illustration recap's fade-out is the video's first "stop," immediately superseded by the options grid's own entrance motion.

---

## PART 3 — Asset List Required

| Asset | Source | Notes |
|---|---|---|
| `illustration/boat-svgrepo-com.svg` | Reused from [q8](../q8/illustration/) / [q33](../q33/illustration/), already present in this folder | Untouched — matches palette |
| `illustration/wave-2-svgrepo-com.svg` | Reused, already present | Front (faster) wave row, already recolored to `--primary` |
| `illustration/wave-2-light.svg` | Reused, already present | Back (slower) wave row, already recolored to `--primary-light` |
| `design-system.css`, `animations.js`, `assets/` | Copied from `_template/` (via q8's/q33's copies) | Per README §5B |

No new colors, fonts, or template components introduced — the illustration CSS (river channel, boat wrapper, boat badge, current badge, merge chip, formula tag, flow arrows, given-row chips, pinned 3-state label) is per-question custom markup as permitted by design.md's "Illustration" section, directly adapted from q33's.

---

## PART 4 — Animation Complexity Notes

- **Seamless wave loop ("riverFlow" pattern)** and **wake-line flicker** — identical technique to q8/q33's local helpers (two-copy tile conveyor, bounded/finite repeat count, never `-1`).
- **Boat badge crossfade + merge chip:** `#boat-badge` ("Boat" → "Boat + Current") and `#merge-chip` ("+Current" flying in) reuse q33's exact B→B+5 / "+5" idiom, substituting words for q33's letter/number since q34 has no algebraic unknown.
- **Formula tag crossfade in place (q34-specific):** unlike q33 (whose `#formula-downstream` is a single static tag for the entire video, since its narration never rearranges the formula), q34's narration explicitly restates "downstream = still + current" as "current = downstream − still," so `#formula-tag` here has two stacked states crossfading 0.25s in place — same idiom `apt.morphToStack` uses internally for its own text/box separation.
- **Physical payoff for the subtract concept lives in the pinned recap, not Phase 1 (same as q33):** because the narration explains "upstream = still water − current" only after the pin (49.3s–62.4s), the boat-flip payoff for that concept is staged as a brake-squash + `scaleX:-1` flip on `#illus-pinned-icon` during Step 2's card window, timed to "moving against the boat" (56.78s) — identical technique to q33's Scene 7 flip, just with q34's own timestamps.
- **Pinned label — 3 stacked crossfading states** (same count as q33, different content): `#pinned-illus-label` cycles "Downstream=27 · Still Water=22" → "Current = 5 km/hr" (after Step 1 solves it) → "Upstream = 17 km/hr" (after Step 2's final answer), each a 0.25s opacity swap, timed to when each fact is actually confirmed by its card's own textReveal.
- **1.5x-scaled pinned recap content with a counter-scaled label** — same technique as q33's `.pinned-illus-content { transform: scale(1.5) }` / `.pinned-illus-label { transform: scale(0.6667) }` pairing, keeping the mini boat/river visible while the label reads at normal size.
- **Standard breathing gap enforced:** `#card-step1`/`#card-step2` enter exactly 1.0s after their preceding `apt.morphToStack` call (44.76 = 43.76+1, 50.32 = 49.32+1) — matching the README's own gap rule and q33's convention, rather than firing at the same instant as the morph.
- **Three cards (G, 1, 2), two connector lines** — within the README's "typically 1 Given + 2–4 Steps" allowance; fewer than q33's four (G,1,2,3) since q34 has no unknown-solving step to insert.

---

## PART 5 — Master Timeline Overview

```
TIME (s)   ELEMENT                          WHAT HAPPENS
─────────  ───────────────────────────────  ─────────────────────────────────
0.0        Background + bottomStrip+logo    Always visible
0.3        QuestionCard                     heroEnterLowered — fades/scales in low
0.8        SerialNum                        pops in low, mirrors card
3.6        QuestionCard + SerialNum         rise to resting position
4.2        River (2-layer wave loop)        seamless scroll begins — never stops until 38.88s
4.8        Boat + "Boat" badge              cardEnter — idle bob begins
5.0        Flow arrows                      cardEnter
8.46       given-downstream chip            cardEnter ("Downstream = 27 km/hr")
14.08      given-still chip                 cardEnter ("Still Water = 22 km/hr")
19.0       given-upstream chip              cardEnter ("Upstream = ? km/hr")
22.40      Boat                             glides RIGHT 1000px over 16.08s (downstream)
24.92      "Current" badge                  cardEnter
27.24      Formula tag (state 1)            cardEnter — "Downstream = Still + Current"
29.9       "+Current" chip                  flies from Current badge to boat
30.6       "Boat" badge                     text swap → "Boat + Current"
31.0       Formula tag                      emphasize pulse
33.82      Formula tag                      crossfade → state 2 "Current = Downstream − Still"
37.9       Formula tag                      emphasize pulse

[ PIN_TIME = 38.88 ]
─────────  ───────────────────────────────  ─────────────────────────────────
38.88      Question + Illustration          🌟 pinFlow — real glide to pinned slots
39.88      Pinned river/boat recap          mini seamless loop + bob begins — runs to 73.64

[ GIVEN_TIME = 40.0 ]
─────────  ───────────────────────────────  ─────────────────────────────────
40.0       Given card                       cardEnter (center)
40.0–41.6  Given card .math                 textReveal (downstream, then still-water)

[ STEP CYCLE ]
─────────  ───────────────────────────────  ─────────────────────────────────
43.76      Given → Given stack               🌟 morphToStack
44.76      Step 1 card                       cardEnter (1s breathing gap after morph)
44.76–47.14 Step 1 .math                     textReveal (formula → 27−22 → 5 km/hr)
47.14      Pinned label                      crossfade → "Current = 5 km/hr"
49.32      Step 1 → Step 1 stack             🌟 morphToStack + stackLineGrow (G→1)
50.32      Step 2 card                       cardEnter (1s breathing gap after morph)
50.32–67.64 Step 2 .math                     textReveal (heading → formula → 22−5 → 17 km/hr)
56.78      Pinned mini boat                  brake-squash + flip (scaleX -1)
67.64      Pinned label                      crossfade → "Upstream = 17 km/hr"

[ PHASE 3 ]
─────────  ───────────────────────────────  ─────────────────────────────────
73.64      Step 2 → Step 2 stack            🌟 morphToStack + stackLineGrow (1→2)
73.64      Pinned illustration recap        fadeOut (the ONE deliberate stop)
73.64      Pinned question                  recenterForOptions
74.0       Options grid                     fadeIn
74.3       Option buttons                   optionsStagger
75.98      Correct option (D)               correctPulse
76.7       Everything                       END FADE (1.2s)
```

**Video duration:** 76.04s (matches `voiceover.wav` exactly).
