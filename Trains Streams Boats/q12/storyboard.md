# Storyboard — Trains, Streams and Boats Q12
**A boat covers 42 km upstream at a speed of 14 km/hr. Find the time required.**

Video length: **54.239s** (voiceover duration) — final `END_FADE_TIME` ≈ 54.6s, clip tail to ~57.2s.
Topic name: **"Trains, Streams and Boats"**.

Sibling reference: `Trains Streams Boats/q10` ("boat travels 60 km downstream at 15 km/hr, find time")
is the closest built sibling — same illustration technique (seamless two-layer river wave-scroll,
boat unit, speed badge pill, distance bracket, flow-arrow chevrons, pinned mini-recap) and the same
"direct division, single step" arithmetic shape. Two differences drive every timing/layout choice
below:
1. **Direction is reversed** — this boat travels *upstream* (against the current), so the boat glides
   right→left instead of left→right, the boat icon is mirrored (`scaleX(-1)`) to face its direction
   of travel, and the wake-flicker trio trails on the boat's right (behind it) instead of its left.
   Flow arrows still point right (the river's own downstream current direction) — the boat visibly
   moving *against* them is what reads as "upstream".
2. **Narration order is reversed relative to q10** — q10 states the formula/concept ("we already know
   distance, we already know speed") *before* pinning, then the Given card is a pure recap with no
   fresh narration. Here the given values (`Distance traveled upstream is forty-two kilometer` /
   `Upstream speed of the boat is fourteen kilometer per hour`) are narrated fresh, word-by-word,
   *inside* the Given card itself (word-level `.rv` reveal, matching `template.html`'s own worked
   example), and the formula statement ("we know the basic formula, time is equal to distance
   divided by speed") comes *after* Given, right as Step 1 opens. So there is no formula-tag inside
   the Phase 1 illustration here — the illustration's job in Phase 1 is purely to anchor "42 km" and
   "14 km/hr" to the boat before the Given card restates them.

---

## PART 1 — Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|---|---|---|---|---|
| 1 | 0.10–3.44 | "So welcome back again. Time for one more problem." | Cold open, series continuity | Full-screen question card rising in | Establish frame, no distraction |
| 2 | 3.84–13.66 | "Now, in this problem, we are given that a boat covers forty-two kilometer upstream at a speed of fourteen kilometer per hour." | State both given values | River scene assembles, boat drops in (facing left, idling at the far/downstream end), distance bracket ("42 km") and flow arrows land on "forty-two"/"upstream", speed badge ("14 km/hr") lands on "fourteen" | "42 km" registers as the trip distance, "14 km/hr" as the boat's speed, flow arrows establish the current direction the boat will travel against |
| 3 | 14.28–17.62 | "The question is asking us to find the time required for the journey." | Frame the unknown, pay off the illustration | "Time = ?" tag fades in on "time"; the boat performs its upstream glide (right→left, against the flow arrows) across the bracket, arriving exactly as "journey" ends | The boat's own glide is the concrete visual of "the journey" being asked about |
| 4 | 18.18–20.82 | "Now, first, let us note down the given values." | Bridge from illustration to solving | Scene pins (question + illustration glide to their pinned slots) | Signals the pivot to formalizing the two knowns |
| 5 | 21.48–29.80 | "Distance traveled upstream is forty-two kilometer. Upstream speed of the boat is fourteen kilometer per hour." | Restate both knowns as the Given card, word-by-word | Given card (center, pinned layout), each word/number lands on its own spoken word | "Distance = 42 km", "Speed = 14 km/hr" — fresh narration, so word-level reveal (not a recap) |
| 6 | 30.26–35.60 | "Now, we know the basic formula, time is equal to distance divided by speed." | State the formula, now that both operands are on record | Given morphs to stack; Step 1 card opens with the formula line | "Time = Distance / Speed" |
| 7 | 36.22–41.00 | "Putting the values, time is equal to forty-two divided by fourteen." | Step 1 — substitute the real numbers | Step 1 card, second line | "Time = 42 / 14" |
| 8 | 41.70–44.12 | "After simplifying this, we get three hours." | Step 1 — resolve the answer | Step 1 card, answer line | "= 3 hours" |
| 9 | 44.60–50.40 | "So the boat takes three hours to travel forty-two kilometer upstream." | Recap the full answer in context | Step 1 card holds | Reinforces the answer before the reveal |
| 10 | 50.92–54.24 | "Hence, the correct answer is option D." | Reveal | Options grid, D pulses green | Confirm against the four choices |

---

## PART 2 — Scene-by-Scene Storyboard

Design constraints in force throughout (per `_template/README.md` §4D.1): only `--primary #6373db`,
`--primary-light #e2e5ff`, `--success #4eb85f`, `--topic #949494`, `--text #000000`, `--bg #FFFFFF`;
only `QuestionCard`/`SerialNum`/`SolutionCard`/`SolutionStackCard`/`solutionChip`/`StepCircle`/
`StackLine`/options-grid/`logo`/`topic-name`/`bottomStrip`/Illustration/`Fraction`; only the helpers
in `animations.js`, called explicitly by name below. Illustration assets: `illustration/boat.svg`,
`illustration/wave.svg` (`#6373db`), `illustration/wave-light.svg` (`#e2e5ff`) — already present in
the question folder, palette-matched, untouched (only a CSS `scaleX(-1)` mirror on the boat icon to
face its direction of travel — no SVG edits).

### SCENE 1 — Cold Open (0.0s – 3.44s)
**VOICEOVER:** "So welcome back again. Time for one more problem."
**VISUAL OBJECTIVE:** Establish the question, hero-style.
**SCREEN LAYOUT:** `#q-full-card` centered, lowered per `apt.heroEnterLowered`, at `top:80px`, containing "A boat covers 42 km upstream at 14 km/hr. How much time is required?" with "42 km", "14 km/hr", "time" in `.num` blue.
**ON-SCREEN ELEMENTS:** QuestionCard (full), SerialNum badge ("Q").
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.44)` — fades/scales in at 0.3s lowered, rises to rest at 3.44s (end of "one more problem"). SerialNum mirrors with its own parallel tween.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** N/A (opening beat).
**EDUCATIONAL PURPOSE:** Anchor the problem before anything else competes for attention.
**VISUAL HIERARCHY:** QuestionCard > SerialNum > (empty illustration area).
**ATTENTION MANAGEMENT:** Nothing else on screen yet.
**MOTION NOTES:** The rise finishes exactly as "problem" is spoken.
**CONTINUITY FROM PREVIOUS SCENE:** N/A — first scene.

### SCENE 2 — River + Boat Assemble, Distance + Speed Introduced (3.84s – 13.66s)
**VOICEOVER:** "Now, in this problem, we are given that a boat covers forty-two kilometer upstream at a speed of fourteen kilometer per hour."
**VISUAL OBJECTIVE:** Build the river scene and attach both real numbers to their physical referents, establishing the current's direction before the boat ever moves against it.
**SCREEN LAYOUT:** `#illustration` (1500×280, centered): river channel with the boat idling at the far (right/downstream) end, a distance bracket beneath spanning its future upstream path, flow arrows above pointing right (downstream).
**ON-SCREEN ELEMENTS:**
- `#water-fill` — rounded `--primary-light` channel (1500×90).
- `#river-scene` (`overflow:hidden`) with two-layer parallax wave scroll (`river-track-back`/`front`).
- `#boat-unit` — wrapper holding `boat.svg` **mirrored (`scaleX(-1)`) to face left** (its upcoming direction of travel), idling at the RIGHT end of the bracket (`left:1100px`, i.e. the bracket's end tick).
- `#speed-badge` ("14 km/hr" pill) — inside `#boat-unit`, travels with it.
- `#flow-arrows` — three right-pointing chevrons, fixed above the river (the current's actual direction — unchanged from q10; it's the boat that reverses, not the river).
- `#distance-bracket` — spans the boat's full future path (950px, `left:150px`→`1100px`), tick at each end, "42 km" label centered beneath.
- `#target-tag` — "Time = ?" pill, fades in once the question is framed.
**ANIMATION DETAILS:**
- 3.839s: `apt.cardEnter(tl, "#river-scene", 3.839)`.
- Immediately after: both wave rows start their seamless scroll loops (`riverFlow`), running through `PIN_TIME`.
- 5.019s: `apt.cardEnter(tl, "#boat-unit", 5.019)` — boat drops in at its idling (right/downstream) position.
- 5.019s–`PIN_TIME`: `apt.ambientLoop(tl, "#boat-icon", 5.019, 18.18)` — small vertical bob, continuous through the idle AND the glide (independent axis, no conflict with the horizontal glide tween).
- 7.559s: `apt.cardEnter(tl, "#distance-bracket", 7.559)` — timed to "forty-two".
- 8.979s: `apt.cardEnter(tl, "#flow-arrows", 8.979)` — timed to "upstream".
- 11.42s: `apt.cardEnter(tl, "#speed-badge", 11.42)` — timed to "fourteen".
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Continuous build, no hard cuts.
**EDUCATIONAL PURPOSE:** "42 km" → the trip, "14 km/hr" → the boat, flow arrows → the current the boat will travel against.
**VISUAL HIERARCHY:** Boat + speed badge > river + distance bracket > flow arrows (ambient accent).
**ATTENTION MANAGEMENT:** One badge/tag reveals at a time, matching narration order.
**MOTION NOTES:** Water is scrolling from the moment it appears — never static.
**CONTINUITY FROM PREVIOUS SCENE:** Question card has just settled into its resting hero position; the illustration fills in directly beneath it, no cut.

### SCENE 3 — The Boat's Upstream Journey + The Question (14.28s – 17.62s)
**VOICEOVER:** "The question is asking us to find the time required for the journey."
**VISUAL OBJECTIVE:** Pay off the illustration — the boat physically completes its 42 km upstream journey exactly as the narration says "the journey", then the unknown is planted.
**SCREEN LAYOUT:** Boat travels right→left across the illustration, from the bracket's end tick to its start tick, moving against the (rightward) flow arrows.
**ON-SCREEN ELEMENTS:** `#boat-unit` (traveling, badge traveling with it), `#distance-bracket` (fixed, boat crosses it), a bounded wake-flicker trio trailing behind the boat (on its right, since it now faces/moves left), `#target-tag` ("Time = ?").
**ANIMATION DETAILS:**
- 13.659s: `tl.to("#boat-unit", {x: -950, duration: 3.96, ease: "power1.out"}, 13.659)` — boat glides left across the full bracket, arriving at the start tick right as "journey." finishes at 17.619s.
- 13.659s (parallel): bounded wake-flicker (3 short trailing dashes on the boat's right/trailing side) runs the whole glide window (13.659–17.619).
- 16.079s: `apt.cardEnter(tl, "#target-tag", 16.079)` — "Time = ?" fades in, timed to the word "time" (in "find the time required").
- River scroll and boat bob continue uninterrupted underneath.
**CAMERA MOVEMENT:** None (the boat provides all horizontal motion within the fixed frame).
**TRANSITIONS:** Continuous from Scene 2 — the boat simply starts moving, no cut.
**EDUCATIONAL PURPOSE:** The boat's own glide against the current IS "the journey" the question refers to — no separate concept-teaching beat needed.
**VISUAL HIERARCHY:** Traveling boat (primary) > distance bracket (fixed reference) > target tag (closing beat) > river (ambient).
**ATTENTION MANAGEMENT:** Nothing competes with the glide itself; the tag lands late in the window so it doesn't interrupt the motion.
**MOTION NOTES:** Glide duration (3.96s) is matched to this scene's narration span so the boat visibly arrives exactly as "journey" is spoken.
**CONTINUITY FROM PREVIOUS SCENE:** The boat is exactly where Scene 2 left it (idling at the right/downstream end); it launches into motion from that same spot, no repositioning jump.

### SCENE 4 — PIN FLOW + Given (18.18s – 29.80s)
**VOICEOVER:** "Now, first, let us note down the given values. Distance traveled upstream is forty-two kilometer. Upstream speed of the boat is fourteen kilometer per hour."
**VISUAL OBJECTIVE:** Transition to solving mode; formalize the two knowns into the Given card, narrated fresh (not a recap) so each word/number lands on its own spoken word.
**SCREEN LAYOUT:** Question glides to its pinned top slot (`#q-pinned`); the full illustration glides into a small pinned recap (`#illus-pinned`) that keeps a MINIATURE river+boat running continuously; the Given `SolutionCard` opens center once the bridge phrase finishes.
**ON-SCREEN ELEMENTS:** `#q-pinned`, `#illus-pinned` (mini river loop + small bobbing boat icon + "Distance = 42 · Speed = 14" label), `#card-given` (chip "Given").
**ANIMATION DETAILS:**
- `PIN_TIME = 18.18`: `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 18.18)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 18.18)`. `apt.fadeOut(tl, "#serial-num", 18.18, 0.5)`.
- From `PIN_TIME + 1 = 19.18` through `RECENTER_TIME` (50.5s): `#river-track-mini`'s seamless scroll runs and `apt.ambientLoop(tl, "#illus-pinned-icon", 19.18, 50.5)` bobs the small boat — keeps the pinned area alive through the whole Given/Step1 phase.
- `GIVEN_TIME = 20.9`: `apt.cardEnter(tl, "#card-given .solution-card", 20.9)` — box appears right after the bridge phrase ("...given values.") finishes at 20.819s.
- `apt.textReveal(tl, "#card-given .math")` reveals, WORD-level (fresh narration, not a recap — mirrors `template.html`'s own Given example):
  - "Distance" `data-t="21.479"`, "=" `data-t="23.34"`, "42 km" (hi) `data-t="23.579"`
  - "Speed" `data-t="25.92"`, "=" `data-t="27.359"`, "14 km/hr" (hi) `data-t="28.279"`
**CAMERA MOVEMENT:** The pin-flow glide. **TRANSITIONS:** `apt.pinFlow`'s real glide (0.8s), not a cut.
**EDUCATIONAL PURPOSE:** Converts the illustration's two anchored numbers into a formal, word-synced Given card.
**VISUAL HIERARCHY:** Given card (center) > pinned question (top) > pinned river recap (ambient).
**ATTENTION MANAGEMENT:** Each word/number reveals exactly as spoken — no early or late reveals.
**MOTION NOTES:** The mini river/boat loop keeps this scene from reading static.
**CONTINUITY FROM PREVIOUS SCENE:** The full illustration is still mid-glide into its pinned slot as the bridge phrase plays; the Given card opens once that settles.

### SCENE 5 — STEP 1: Formula, Substitute, Resolve (30.26s – 50.40s)
**VOICEOVER:** "Now, we know the basic formula, time is equal to distance divided by speed. Putting the values, time is equal to forty-two divided by fourteen. After simplifying this, we get three hours. So the boat takes three hours to travel forty-two kilometer upstream."
**VISUAL OBJECTIVE:** State the general formula (now that both operands are on record), substitute the real numbers, deliver the answer, then hold through the recap.
**SCREEN LAYOUT:** Given card morphs to the left stack while "Now, we know the basic formula," is spoken (bridge, no new card yet); Step 1 `SolutionCard` opens center exactly as the formula sentence itself begins, and stays through the recap.
**ON-SCREEN ELEMENTS:** `#stack-given` (`.step-circle` "G"), `#card-step1`.
**ANIMATION DETAILS:**
- `GIVEN_MORPH_TIME = 29.9`: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 29.9)` — fires right after the Given narration finishes (29.799s).
- `STEP1_TIME = 32.139`: `apt.cardEnter(tl, "#card-step1 .solution-card", 32.139)` — card opens exactly as "time is equal to..." begins (not at the earlier "Now, we know the basic formula," bridge — that plays over the empty pinned stage, mirroring the same kind of deliberate gap as `PIN_TIME`→`GIVEN_TIME`).
- `apt.textReveal(tl, "#card-step1 .math")` reveals, LINE-level (whole line per reveal, matching `Trains Streams Boats/q10`'s built precedent for a formula→substitution→answer sequence):
  - `data-t="32.139"`: "Time = <frac>Distance/Speed</frac>"
  - `data-t="37.68"`: "Time = <frac>42/14</frac>"
  - `data-t="43.2"` (`.ans`): "= 3 hours"
- Pinned river/boat recap continues its loop, unbroken, through the whole hold (including the recap sentence).
**CAMERA MOVEMENT:** None. **TRANSITIONS:** `apt.morphToStack` (0.8s box+text crossfade).
**EDUCATIONAL PURPOSE:** Isolate the arithmetic as its own clean reveal beat, then let it sit through the recap so the answer is fully absorbed before the options appear.
**VISUAL HIERARCHY:** Step 1 card (center, active) > stack-given (left, archived) > pinned recap (ambient).
**ATTENTION MANAGEMENT:** Three sequential reveals matched to the narration's own pacing, then a long deliberate hold with no new competing motion.
**MOTION NOTES:** River keeps flowing; boat keeps bobbing throughout the entire hold.
**CONTINUITY FROM PREVIOUS SCENE:** Given card is still fully visible/readable up until its own morph fires — no early fade.

### SCENE 6 — Options Reveal (50.50s – 54.24s)
**VOICEOVER:** "Hence, the correct answer is option D."
**VISUAL OBJECTIVE:** Confirm the answer against all four choices.
**SCREEN LAYOUT:** Step 1 morphs to stack; pinned question recenters; illustration recap clears; options grid (2×2) appears.
**ON-SCREEN ELEMENTS:** `#stack-step1` (`.step-circle` "1"), `#line-g-1` connector, `#options-reveal` (A: 2.5 h, B: 3.5 h, C: 4 h, D: 3 h — correct).
**ANIMATION DETAILS:**
- `RECENTER_TIME = 50.5`: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 50.5)`; `apt.stackLineGrow(tl, "#line-g-1", 50.5)`.
- 50.5s: `apt.fadeOut(tl, "#illus-pinned", 50.5)` (only clean stopping point for the river/boat recap); `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 50.5)`.
- 51.0s: `apt.fadeIn(tl, "#options-reveal", 51.0)`.
- 51.4s: `apt.optionsStagger(tl, ".opt-btn", 51.4)`.
- 53.9s: `apt.correctPulse(tl, ".opt-btn.correct", 53.9)`, timed to land on "option D."
- 54.6s: `apt.fadeOut(tl, "#root > div", 54.6, 1.0)` — END FADE.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** `apt.morphToStack` + `apt.recenterForOptions`.
**EDUCATIONAL PURPOSE:** Standard close — verify the derived answer (3 hours) against the given options.
**VISUAL HIERARCHY:** Options grid (primary) > stack column (secondary) > pinned question (tertiary).
**ATTENTION MANAGEMENT:** Stagger-then-pulse, standard two-beat close.
**MOTION NOTES:** This is the one deliberate point where continuous ambient motion (river recap) is allowed to stop.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1 remains fully legible until its own morph fires — no premature fade.

---

## PART 3 — Asset List Required

| Asset | Source | Notes |
|---|---|---|
| `illustration/boat.svg` | Already present in `q12/illustration/` | Untouched — mirrored via CSS `scaleX(-1)` only, no SVG edits |
| `illustration/wave.svg` | Already present | `.st0{fill:#6373db}` — front (faster) wave row |
| `illustration/wave-light.svg` | Already present | `.st0{fill:#e2e5ff}` — back (slower) wave row |
| `design-system.css`, `animations.js`, `assets/` | Copied from `_template/` | Per README §5B |

No new colors, fonts, or template components introduced — all illustration CSS (river channel, boat
wrapper, speed badge, distance bracket, target tag, flow arrows) is per-question custom markup as
permitted by design.md's "Illustration" section.

---

## PART 4 — Animation Complexity Notes

- **Seamless wave loop ("riverFlow" pattern):** identical technique to `Trains Streams Boats/q10`.
- **Direction reversal vs. q10:** the boat travels right→left (upstream) instead of left→right
  (downstream). The icon is mirrored with a plain CSS `transform: scaleX(-1)` on `#boat-icon` (no
  SVG file edits) and the wake-flicker trio is repositioned to trail on the boat's right (its
  trailing side when facing/moving left), the mirror image of q10's left-trailing wake.
- **No formula-tag in Phase 1:** unlike q10 (which states the formula as a Phase-1 illustration
  label before pinning), this question's formula is narrated *after* the Given card, as part of
  Step 1's opening line — so the Phase 1 illustration only carries the distance bracket, flow
  arrows, speed badge, and the "Time = ?" target tag; no separate formula-tag element exists.
- **Word-level Given, line-level Step 1:** the Given card uses word-level `.rv` spans because its
  content is narrated fresh, verbatim, word by word (mirrors `template.html`'s own worked example).
  Step 1 uses line-level `.rv` spans (whole formula/substitution/answer lines), matching
  `Trains Streams Boats/q10`'s built precedent for this same three-line formula→substitution→answer
  shape.
- **Two deliberate "empty stage" gaps:** `PIN_TIME`(18.18)→`GIVEN_TIME`(20.9) and
  `GIVEN_MORPH_TIME`(29.9)→`STEP1_TIME`(32.139) both let a bridging sentence ("let us note down the
  given values" / "Now, we know the basic formula,") play over the pinned recap alone, with no new
  reveal — consistent with README 4D's guidance that `GIVEN_TIME` is its own transcript-derived
  timestamp, not defaulted to the pin.
- **Pinned recap never idles:** the pinned illustration keeps its own miniature wave loop and boat
  bob running continuously from `PIN_TIME+1` through `RECENTER_TIME` (~31.3s span — the longest hold
  in this video, since there is only one step and the recap sentence plays out entirely inside it).
- **Only one true stop:** the illustration recap's fade-out at `RECENTER_TIME` (Scene 6) is the sole
  point where continuous ambient motion ends, immediately superseded by the options-reveal's own
  stagger/pulse animation.

---

## PART 5 — Master Timeline Overview

```
TIME (s)   ELEMENT                          WHAT HAPPENS
─────────  ───────────────────────────────  ─────────────────────────────────
0.0        Background + bottomStrip+logo    Always visible
0.3        QuestionCard                     heroEnterLowered — fades/scales in low
0.8        SerialNum                        pops in low, mirrors card
3.44       QuestionCard + SerialNum         rise to resting position
3.84       River (2-layer wave loop)        seamless scroll begins — never stops until 18.18
5.02       Boat (mirrored, facing left)     drops onto water at RIGHT/downstream end, idle bob begins
7.56       Distance bracket ("42 km")       cardEnter
8.98       Flow arrows (pointing right)     cardEnter
11.42      Speed badge ("14 km/hr")         cardEnter on boat
13.66      Boat                             glides LEFT 950px over 3.96s (upstream, against flow arrows)
16.08      "Time = ?" tag                   cardEnter

[ PIN_TIME = 18.18 ]
─────────  ───────────────────────────────  ─────────────────────────────────
18.18      Question + Illustration          🌟 pinFlow — real glide to pinned slots
19.18      Pinned river/boat recap          mini seamless loop + bob begins — runs to 50.5

[ GIVEN_TIME = 20.9 ]
─────────  ───────────────────────────────  ─────────────────────────────────
20.90      Given card                       cardEnter (center)
21.48–28.28 Given card .math                textReveal, WORD-level (Distance=42km, then Speed=14km/hr)

[ STEP CYCLE ]
─────────  ───────────────────────────────  ─────────────────────────────────
29.90      Given → Given stack               🌟 morphToStack
32.14      Step 1 card                       cardEnter (aligned to "time is equal to...")
32.14–43.20 Step 1 .math                     textReveal, LINE-level (formula → 42/14 → = 3 hours)
43.20–50.50 Step 1 card holds                covers "So the boat takes three hours..." recap

[ PHASE 3 ]
─────────  ───────────────────────────────  ─────────────────────────────────
50.50      Step 1 → Step 1 stack            🌟 morphToStack + stackLineGrow (G→1)
50.50      Pinned illustration recap        fadeOut (the ONE deliberate stop)
50.50      Pinned question                  recenterForOptions
51.00      Options grid                     fadeIn
51.40      Option buttons                   optionsStagger
53.90      Correct option (D)               correctPulse
54.60      Everything                       END FADE (1.0s)
```

**Video duration:** 54.239s (matches `voiceover.wav` exactly).
