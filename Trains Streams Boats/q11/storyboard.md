# Storyboard — "Relative Speed, Opposite Directions" (Trains, Streams and Boats — Q11)

Question: *Two trains run in opposite directions at 45 km/h and 55 km/h. What is their relative speed?*
Options: A) 88 km/h  B) 112 km/h  **C) 100 km/h (correct)**  D) 124 km/h
Voiceover: `voiceover.wav` — duration **61.68s**
Transcript: `transcript.json` / `transcript.txt`

Sibling reference: `Trains Streams Boats/q1` (train + rail + readout board) supplies the base
train-on-rail illustration technique and `q10`'s single-Given/single-Step card structure. This is
the first **two-train** question in the topic, so the illustration is extended to two trains
approaching from opposite edges (per `_template/design.md` §7's own worked example: "two trains
approaching each other" is the one case that should use `justify-content:space-between` instead of
centering). A new element not used by any sibling question: a compact **concept-demo** panel that
cross-fades between a "Same Direction → Subtract" state and an "Opposite Direction → Add" state,
built entirely from existing primitives (`.tag-pill`, CSS border-triangle chevrons) — no new
component invented.

---

## PART 1 — Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|---|---|---|---|---|
| 1 | 0.10–2.98 | "So welcome back again. Time for one more problem." | Cold open | Question card rising in | Establish frame |
| 2 | 3.52–7.70 | "Now, in this problem, we are given that two trains are moving in opposite directions." | Frame the two-object scenario | Rail sweeps in, both trains fade onto the track at opposite edges, facing each other | The layout itself — trains already facing inward — visually states "opposite directions" before the word finishes |
| 3 | 8.20–15.06 | "The speed of the first train is forty-five kilometer per hour. The speed of the second train is fifty-five kilometer per hour." | State both givens | Speed badge "45 km/hr" pops on Train A, then "55 km/hr" on Train B, each on its own number word | Anchor each speed to its own train before any arithmetic |
| 4 | 15.64–19.12 | "The question is asking us to find their relative speed." | Frame the unknown | "Relative Speed = ?" tag fades in above the scene | Plant the target quantity |
| 5 | 19.60–28.90 | "Now, before using the formula, let us understand one simple concept. Relative speed tells us how fast one object is moving with respect to the other." | Set up the concept-teaching beat | Scene holds, trains begin a slow inward drift | No new visual yet — narration primes the rule that's about to be demonstrated |
| 6 | 29.36–32.52 | "When two trains move in the same direction, we subtract their speeds." | Teach the same-direction rule | Concept-demo panel fades in: two chevrons pointing the same way, "− Subtract Speeds" | Concrete rule #1, isolated from the actual question's scenario |
| 7 | 32.88–37.76 | "But when they move in opposite directions, they come towards each other, so their speeds get added." | Teach the opposite-direction rule (the one that applies here) | Concept-demo crossfades to converging chevrons, "+ Add Speeds"; main trains visibly close distance, arriving closer just as "come towards each other" is spoken | Concrete rule #2 — directly matches this question |
| 8 | 38.08–40.56 | "This is a direct formula-based question." | Bridge to solving | Concept-demo fades out; question + illustration begin gliding to pinned layout | Signals the pivot from concept to arithmetic |
| 9 | 41.00–45.90 | "Relative speed is equal to the sum of both speeds. Now let us put the given values." | State the formula in words, then transition | Given card recap opens; Given morphs to stack as Step 1 states the formula | "Relative Speed = Speed 1 + Speed 2" |
| 10 | 46.30–54.36 | "Relative speed is equal to forty-five plus fifty-five. After adding them, we get one hundred kilometers per hour." | Step 1 — substitute and resolve | Step 1 card reveals "45 + 55", then "= 100 km/hr" | Concrete arithmetic |
| 11 | 54.76–59.36 | "So the relative speed of the two trains is one hundred kilometers per hour." | Recap the answer | Step 1 card holds | Reinforcement before reveal |
| 12 | 59.80–61.68 | "Hence, the correct answer is option C." | Reveal | Options grid, C pulses green | Confirm against the four choices |

---

## PART 2 — Scene-by-Scene Storyboard

Design constraints in force throughout (per `_template/README.md` §4D.1): only `--primary #6373db`,
`--primary-light #e2e5ff`, `--success #4eb85f`, `--topic #949494`, `--text #000000`, `--bg #FFFFFF`;
only `QuestionCard`/`SerialNum`/`SolutionCard`/`SolutionStackCard`/`solutionChip`/`StepCircle`/
`StackLine`/options-grid/`logo`/`topic-name`/`bottomStrip`/Illustration/`Fraction`; only the
helpers in `animations.js`, called explicitly by name below.

### SCENE 1 — Cold Open (0.0s – 2.98s)
**VOICEOVER:** "So welcome back again. Time for one more problem."
**VISUAL OBJECTIVE:** Establish the question, hero-style.
**SCREEN LAYOUT:** `#q-full-card` centered, lowered per `apt.heroEnterLowered`, at `top:80px`, question text with "45 km/hr", "55 km/hr", "opposite directions" and "relative speed" in `.num` blue.
**ON-SCREEN ELEMENTS:** QuestionCard (full), SerialNum badge ("Q").
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 2.98)` — fades/scales in at 0.3s lowered, rises to rest at 2.98s. SerialNum mirrors with its own parallel tween.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** N/A. **EDUCATIONAL PURPOSE:** Anchor the problem before anything competes.
**VISUAL HIERARCHY:** QuestionCard > SerialNum > (empty illustration).
**ATTENTION MANAGEMENT:** Single focal point. **MOTION NOTES:** Rise finishes exactly as "problem" is spoken.
**CONTINUITY FROM PREVIOUS SCENE:** N/A — first scene.

### SCENE 2 — Rail + Two Trains Assemble, Opposite Directions Stated (2.98s – 15.06s)
**VOICEOVER:** "Now, in this problem, we are given that two trains are moving in opposite directions. The speed of the first train is forty-five kilometer per hour. The speed of the second train is fifty-five kilometer per hour."
**VISUAL OBJECTIVE:** Establish two distinct trains, already facing each other (visual proof of "opposite directions"), then attach each real speed to its own train.
**SCREEN LAYOUT:** `#illustration` (1400×320, centered, `top:430px`): rail spanning the full width; Train A at the left edge facing right; Train B at the right edge, mirrored, facing left. This is the one case (`_template/design.md` §7) where the illustration genuinely spans two objects across the width, so it uses `justify-content` logic via absolute left/right positioning rather than a single centered icon.
**ON-SCREEN ELEMENTS:** `#rail` (sleeper-tie track), `#train-a-unit` (train.svg, unmirrored) + `#speed-badge-a` ("45 km/hr"), `#train-b-outer` (wrapper) → `#train-b-img-wrap` (train.svg, `scaleX(-1)`) + `#speed-badge-b` ("55 km/hr", unmirrored sibling so its text never flips), `#opp-arrows` (two CSS border-triangle chevrons between the trains, pointing inward toward each other).
**ANIMATION DETAILS:**
- 3.52s: `apt.roadSweep(tl, "#rail", 3.52)` — track draws in left→right.
- 5.42s (word "two"): `apt.cardEnter(tl, "#train-a-unit", 5.42)` and `apt.cardEnter(tl, "#train-b-outer", 5.42)` — both trains fade/scale onto the rail simultaneously, already in their opposite-facing orientation.
- 6.54s (word "opposite"): `apt.cardEnter(tl, "#opp-arrows", 6.54)` — inward chevrons pop in between the trains.
- 10.02s (word "forty-five"): `apt.cardEnter(tl, "#speed-badge-a", 10.02)`.
- 13.72s (word "fifty-five"): `apt.cardEnter(tl, "#speed-badge-b", 13.72)`.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Continuous build, no cuts.
**EDUCATIONAL PURPOSE:** "Opposite directions" is shown, not just told, before the word even finishes — the two trains are physically arranged facing inward from the very first frame they appear.
**VISUAL HIERARCHY:** Trains (foreground) > opp-arrows (accent) > rail (ambient).
**ATTENTION MANAGEMENT:** One badge reveals at a time, in narration order.
**MOTION NOTES:** No motion yet — the scene is static until the concept-teaching beat.
**CONTINUITY FROM PREVIOUS SCENE:** Question card has just settled into its resting hero position; illustration fills in directly beneath it, no cut.

### SCENE 3 — Target Framed (15.64s – 19.12s)
**VOICEOVER:** "The question is asking us to find their relative speed."
**VISUAL OBJECTIVE:** Plant the unknown.
**SCREEN LAYOUT:** Same as Scene 2, plus a tag above the scene.
**ON-SCREEN ELEMENTS:** `#target-tag` ("Relative Speed = ?").
**ANIMATION DETAILS:** 18.22s (word "relative"): `apt.cardEnter(tl, "#target-tag", 18.22)`.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Continuous. **EDUCATIONAL PURPOSE:** Names the goal before the concept explanation begins.
**VISUAL HIERARCHY:** Target tag (new focal point) > trains (established, steady).
**ATTENTION MANAGEMENT:** Single new reveal. **MOTION NOTES:** n/a.
**CONTINUITY FROM PREVIOUS SCENE:** Trains and badges remain exactly as Scene 2 left them.

### SCENE 4 — Concept Teaching: Same vs Opposite Direction (19.60s – 40.56s)
**VOICEOVER:** "Now, before using the formula, let us understand one simple concept. Relative speed tells us how fast one object is moving with respect to the other. When two trains move in the same direction, we subtract their speeds. But when they move in opposite directions, they come towards each other, so their speeds get added. This is a direct formula-based question."
**VISUAL OBJECTIVE:** Teach the general rule (same direction → subtract, opposite direction → add) as its own concrete visual, decoupled from the specific 45/55 trains, then confirm this question is the "add" case by having the real trains visibly close distance.
**SCREEN LAYOUT:** `#concept-demo` (760×90, centered, `top:220px` within the illustration, below the rail) — a small panel that cross-fades between two internal states, `#concept-same` and `#concept-opposite`, absolutely stacked at the same position.
**ON-SCREEN ELEMENTS:**
- `#concept-same`: two right-pointing chevrons side by side + label "Same Direction" + `.tag-pill` "− Subtract Speeds".
- `#concept-opposite`: two chevrons pointing toward each other + label "Opposite Direction" + `.tag-pill` "+ Add Speeds".
- Meanwhile, `#train-a-unit` and `#train-b-outer` (the real trains) drift slowly inward.
**ANIMATION DETAILS:**
- 19.60s: `tl.to("#train-a-unit", {x:120, duration:18.16, ease:"none"}, 19.60)` and `tl.to("#train-b-outer", {x:-120, duration:18.16, ease:"none"}, 19.60)` — both trains drift inward over the entire concept-teaching span, arriving visibly closer right as "they come towards each other" is spoken (37.76s marks the drift's end).
- 29.36s (word "When"): `apt.cardEnter(tl, "#concept-demo", 29.36)` — panel fades in showing `#concept-same` (default visible state).
- 32.88s (word "But"): `apt.fadeOut(tl, "#concept-same", 32.88, 0.35)` + `apt.fadeIn(tl, "#concept-opposite", 32.88, 0.35)` — crossfade to the opposite-direction state, timed to the pivot word "But".
- 38.08s (start of "This is a direct formula-based question."): `apt.fadeOut(tl, "#concept-demo", 38.08)` — panel clears before the pin transition.
**CAMERA MOVEMENT:** None (train drift is the only motion). **TRANSITIONS:** Continuous, no cuts.
**EDUCATIONAL PURPOSE:** This is the single most important beat in the video — it isolates the general rule from the specific numbers, then explicitly confirms which branch of the rule applies to this exact question via the real trains' own motion.
**VISUAL HIERARCHY:** Concept-demo (primary, new) > drifting trains (secondary, confirms the rule in the real scenario) > target-tag/badges (steady, established).
**ATTENTION MANAGEMENT:** One crossfade, timed to the narration's own "same... but opposite..." pivot.
**MOTION NOTES:** The train drift is deliberately slow and linear (`ease:"none"`) so it reads as continuous background confirmation, not a competing focal animation — the concept-demo panel stays the primary focus.
**CONTINUITY FROM PREVIOUS SCENE:** Trains and badges are exactly where Scene 3 left them; the drift begins from their static Scene-2 positions.

### SCENE 5 — PIN FLOW + Given (38.60s – 41.00s)
**VOICEOVER:** (tail of) "...direct formula-based question."
**VISUAL OBJECTIVE:** Transition to solving mode; formalize the two knowns into the Given card.
**SCREEN LAYOUT:** Question glides to `#q-pinned`; illustration glides to `#illus-pinned` (two mini trains, space-between, facing each other, each with its own km/hr label — the one case per design.md that keeps the two-object space-between layout even pinned); Given `SolutionCard` opens center.
**ON-SCREEN ELEMENTS:** `#q-pinned`, `#illus-pinned` (`#illus-pinned-icon-a`, `#illus-pinned-icon-b` mirrored, each with a small label), `#card-given` (chip "Given").
**ANIMATION DETAILS:**
- `PIN_TIME = 38.60`: `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 38.60)`, `apt.pinFlow(tl, "#illustration", "#illus-pinned", 38.60)`, `apt.fadeOut(tl, "#serial-num", 38.60, 0.5)`.
- From `PIN_TIME+1 = 39.60` through `RECENTER_TIME` (59.80): `apt.ambientLoop` bobs both pinned train icons — keeps the pinned area alive through Given/Step1.
- `GIVEN_TIME = 39.40`: `apt.cardEnter(tl, "#card-given .solution-card", 39.40)`.
- `apt.textReveal(tl, "#card-given .math")` — no fresh narration restates these values here, so both lines reveal in quick succession: `data-t="39.40"` "Train 1 Speed = 45 km/hr", `data-t="40.00"` "Train 2 Speed = 55 km/hr".
**CAMERA MOVEMENT:** The pin-flow glide. **TRANSITIONS:** `apt.pinFlow` (0.8s), not a cut.
**EDUCATIONAL PURPOSE:** Converts the two already-anchored speeds directly into the Given card.
**VISUAL HIERARCHY:** Given card (center, primary) > pinned question (top) > pinned two-train recap (ambient).
**ATTENTION MANAGEMENT:** Two facts reveal in the same order as Scene 2 (train 1, then train 2).
**MOTION NOTES:** The pinned recap's ambient bob is what keeps this scene from reading static.
**CONTINUITY FROM PREVIOUS SCENE:** The full illustration is still mid-glide into its pinned slot as the Given card opens.

### SCENE 6 — STEP 1: Add the Speeds (41.00s – 59.80s)
**VOICEOVER:** "Relative speed is equal to the sum of both speeds. Now let us put the given values. Relative speed is equal to forty-five plus fifty-five. After adding them, we get one hundred kilometers per hour. So the relative speed of the two trains is one hundred kilometers per hour."
**VISUAL OBJECTIVE:** State the formula, substitute the real numbers, deliver the answer, then hold through the recap.
**SCREEN LAYOUT:** Given card morphs to the left stack; Step 1 `SolutionCard` opens center and stays through the recap.
**ON-SCREEN ELEMENTS:** `#stack-given` (`.step-circle` "G"), `#card-step1`.
**ANIMATION DETAILS:**
- `GIVEN_MORPH_TIME = 41.00`: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 41.00)` (completes 41.80).
- `STEP1_TIME = 41.80`: `apt.cardEnter(tl, "#card-step1 .solution-card", 41.80)`.
- `apt.textReveal(tl, "#card-step1 .math")` reveals:
  - `data-t="41.00"` (line-level, paraphrased — "the sum of both speeds" has no clean word match to notation): "Relative Speed = Speed 1 + Speed 2"
  - `data-t="46.30"` (line-level prefix) + word-level numbers: "Relative Speed =" @46.30, "45" @48.52 (word "forty-five"), "+" @49.24 (word "plus"), "55" @49.54 (word "fifty-five")
  - `data-t="52.48"` (`.ans`, word "one" of "one hundred"): "= 100 km/hr"
- No new reveals 54.76–59.80 — card holds while narration recaps the answer in full sentence form.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** `apt.morphToStack` (0.8s box+text crossfade).
**EDUCATIONAL PURPOSE:** Isolate the arithmetic as its own clean reveal, matching the "opposite direction → add" rule just taught in Scene 4.
**VISUAL HIERARCHY:** Step 1 card (center, active) > stack-given (left, archived) > pinned recap (ambient).
**ATTENTION MANAGEMENT:** Three sequential reveals matched to the narration's own pacing, then a deliberate hold.
**MOTION NOTES:** Pinned recap keeps bobbing throughout the entire hold.
**CONTINUITY FROM PREVIOUS SCENE:** Given card is fully visible/readable up until its morph starts.

### SCENE 7 — Options Reveal (59.80s – 61.68s)
**VOICEOVER:** "Hence, the correct answer is option C."
**VISUAL OBJECTIVE:** Confirm the answer against all four choices.
**SCREEN LAYOUT:** Step 1 morphs to stack; pinned question recenters; illustration recap clears; options grid (2×2) appears.
**ON-SCREEN ELEMENTS:** `#stack-step1` (`.step-circle` "1"), `#line-g-1` connector, `#options-reveal` (A: 88, B: 112, C: 100 — correct, D: 124, all km/hr).
**ANIMATION DETAILS:**
- `RECENTER_TIME = 59.80`: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 59.80)` (completes 60.60); `apt.stackLineGrow(tl, "#line-g-1", 59.80)`.
- 59.80s: `apt.fadeOut(tl, "#illus-pinned", 59.80)`; `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 59.80)`.
- 60.00s: `apt.fadeIn(tl, "#options-reveal", 60.00)`.
- 60.30s: `apt.optionsStagger(tl, ".opt-btn", 60.30)` (all four entrances complete by ~61.29).
- 61.20s: `apt.correctPulse(tl, ".opt-btn.correct", 61.20)`, timed just ahead of "option C." (61.199–61.68).
- 62.00s: `apt.fadeOut(tl, "#root > div", 62.00, 1.0)` — END FADE.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** `apt.morphToStack` + `apt.recenterForOptions`.
**EDUCATIONAL PURPOSE:** Standard close — verify the derived answer (100 km/hr) against the given options.
**VISUAL HIERARCHY:** Options grid (primary) > stack column (secondary) > pinned question (tertiary).
**ATTENTION MANAGEMENT:** Stagger-then-pulse, standard two-beat close.
**MOTION NOTES:** This is the one deliberate point where the pinned two-train recap's ambient motion stops, immediately replaced by the options-reveal's own motion.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1 remains fully legible until its own morph fires.

---

## PART 3 — Asset List Required

| Asset | Source | Notes |
|---|---|---|
| `illustration/train.svg` | Copied from `Trains Streams Boats/q1/illustration/train.svg` | Untouched — already blue/black, palette-matched. Used twice: unmirrored for Train A, `scaleX(-1)` for Train B (CSS transform, not a file edit) |
| Rail track | CSS-only (`#rail`) | Sleeper-tie pattern via `repeating-linear-gradient`, same technique as q1 |
| Concept-demo chevrons | CSS-only (border-triangle), same technique as q10's `.chevron` | One pointing right, one pointing left, recombined for the two states |
| `design-system.css`, `animations.js`, `assets/` | Copied from `_template/` | Per README §5B |

No new colors, fonts, or template components introduced. The concept-demo panel reuses `.tag-pill`
styling from the design system's tag pattern (first used in q10) for its "− Subtract Speeds" /
"+ Add Speeds" labels.

---

## PART 4 — Animation Complexity Notes

- **Two trains, not one:** the first two-train question in this topic. Train B is a `scaleX(-1)`
  mirror of the same `train.svg` — no new asset, no recolor. Its speed badge is kept as a sibling
  of the mirrored wrapper (not a child) specifically so the badge text itself never gets mirrored.
- **Concept-demo crossfade:** two absolutely-stacked panels (`#concept-same`/`#concept-opposite`)
  at the same position, cross-faded via `apt.fadeOut`/`apt.fadeIn` at the narration's exact
  same-direction → opposite-direction pivot word ("But", 32.88s). This is the video's one genuinely
  new illustration pattern — everything else (rail, badges, tag-pill, chevrons) reuses techniques
  from q1/q10.
- **Confirmatory drift:** the real trains (not the concept-demo) drift inward, linearly, across the
  entire concept-teaching span (19.60s→37.76s, 18.16s) — slow enough to read as ambient confirmation
  rather than a competing animation, arriving visibly closer exactly as "they come towards each
  other" is spoken.
- **Two-object pinned recap:** per `_template/design.md` §7, the pinned illustration keeps the
  `justify-content:space-between` two-train layout (rather than centering a single icon) because
  this is the one case design.md explicitly calls out as spanning two objects across the width.
- **No Step 2:** this is a single-step formula question (sum of two speeds) — only one Given card
  and one Step card, one connector line (`#line-g-1`).
- **Only one true stop:** the pinned illustration's ambient bob is the sole continuous motion after
  the pin, ending cleanly at `RECENTER_TIME` when the options-reveal's own stagger/pulse takes over.

---

## PART 5 — Master Timeline Overview

```
TIME (s)   ELEMENT                          WHAT HAPPENS
─────────  ───────────────────────────────  ─────────────────────────────────
0.0        Background + bottomStrip+logo    Always visible
0.3        QuestionCard                     heroEnterLowered — fades/scales in low
0.8        SerialNum                        pops in low, mirrors card
2.98       QuestionCard + SerialNum         rise to resting position
3.52       Rail                             roadSweep
5.42       Train A + Train B                cardEnter (already facing inward)
6.54       Opposite-direction chevrons      cardEnter
10.02      Speed badge A ("45 km/hr")       cardEnter
13.72      Speed badge B ("55 km/hr")       cardEnter
18.22      "Relative Speed = ?" tag         cardEnter
19.60–37.76 Train A / Train B               drift inward 120px each (linear, confirms "towards each other")
29.36      Concept-demo                     cardEnter, showing SAME-direction state
32.88      Concept-demo                     crossfade → OPPOSITE-direction state
38.08      Concept-demo                     fadeOut

[ PIN_TIME = 38.60 ]
─────────  ───────────────────────────────  ─────────────────────────────────
38.60      Question + Illustration          🌟 pinFlow — real glide to pinned slots
39.60      Pinned two-train recap            ambient bob begins — runs to 59.80

[ GIVEN_TIME = 39.40 ]
─────────  ───────────────────────────────  ─────────────────────────────────
39.40      Given card                       cardEnter (center)
39.40–40.00 Given card .math                textReveal (Train 1 line, then Train 2 line)

[ STEP CYCLE ]
─────────  ───────────────────────────────  ─────────────────────────────────
41.00      Given → Given stack               🌟 morphToStack
41.80      Step 1 card                       cardEnter
41.00–52.48 Step 1 .math                     textReveal (formula → 45+55 → = 100 km/hr)
52.48–59.80 Step 1 card holds                covers the full-sentence recap

[ PHASE 3 ]
─────────  ───────────────────────────────  ─────────────────────────────────
59.80      Step 1 → Step 1 stack            🌟 morphToStack + stackLineGrow (G→1)
59.80      Pinned illustration recap        fadeOut (the ONE deliberate stop)
59.80      Pinned question                  recenterForOptions
60.00      Options grid                     fadeIn
60.30      Option buttons                   optionsStagger
61.20      Correct option (C)               correctPulse
62.00      Everything                       END FADE (1.0s)
```

**Video duration:** 61.68s (matches `voiceover.wav` exactly); composition tail to ~64s.
