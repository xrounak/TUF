# Storyboard — Trains, Streams and Boats Q19

**A boat covers 48 km downstream in 3 hours. If its still-water speed is 13 km/h, find the stream speed.**
**Answer:** C (3 km/h)
**Video length:** 70.239s (voiceover duration) — `END_FADE_TIME` = 71.0s, fades out over 1.0s, clip tail to ~72.3s.
**Topic name:** "Trains, Streams and Boats".

Sibling reference: `Trains Streams Boats/q17` (single motorboat + river illustration, boat-badge
technique) is the closest built sibling — this question reuses its river/wave-conveyor/wake-flicker
CSS and local helpers verbatim, but is structurally simpler:
1. **Only one direction of travel** (downstream only — the question never asks about upstream), so the
   illustration is a single continuous glide, not q17's two-leg downstream/upstream pass with a turn.
2. **No algebra variables (B/C)** — this question plugs real numbers straight into two textbook
   formulas (Speed = Distance/Time, then Downstream = Still Water + Stream), so there's no
   "define the unknown" scene — the Given card lists the three known numbers directly.
3. **Much shorter runtime (70.2s vs q17's 83.6s)** and the simplest possible post-pin stack: Given +
   Step 1 + Step 2, three small cards, each holding a single short formula-then-compute beat.
4. **Two clean sequential formulas**, not simultaneous equations — Step 1 produces an intermediate
   value (downstream speed = 16 km/hr) that Step 2 then plugs into the second formula, mirroring the
   narration's own "Done. Now we have the downstream speed... this value will help us find the required
   answer" bridge.

---

## PART 1 — Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|---|---|---|---|---|
| 1 | 0.10–3.50 | "So welcome back again. It's time to solve one more problem." | Cold open | Question card | Hero question rises into view |
| 2 | 3.56–8.54 | "Now, in this problem, we are given that a boat covers 48 kilometer" | State the first number | River + boat enter, distance tag | River/boat scene fades in; "48 km" tag pops on "48" |
| 3 | 9.38–10.80 | "downstream in three hours." | State direction + second number | Flow arrows, time tag | "Downstream" flow-arrows + label pop on "downstream"; "3 h" tag pops on "three" |
| 4 | 11.28–15.70 | "Also, the speed of the boat in still water is 13 kilometer per hour." | State the third number | Boat's speed badge | "13 km/hr (still water)" badge pops on "13", attached to the boat |
| 5 | 16.24–18.64 | "The question is asking us to find the speed of the stream." | Frame the unknown | Stream target tag | "? km/hr" tag pops near the flow arrows on "stream." |
| 6 | 19.16–22.16 | "Now, can we directly find the stream speed? No, we cannot." | Rhetorical beat — flag that a step is needed first | "?" tag | Emphasize pulse on the "?" tag on "cannot." |
| 7 | 22.76–25.38 | "First, we need to know the boat's downstream speed." | Bridge into solving mode | Pinned stage | `apt.pinFlow` — question + illustration glide to pinned slot; plays over the settling pin |
| 8 | 26.10–29.40 | "We know, speed equals distance divided by time." | Step 1 — state the formula | Step 1 card | Given morphs to stack; Step 1 card opens with `Speed = Distance⁄Time` |
| 9 | 29.86–36.52 | "So downstream speed equals 48 divided by 3, which is 16 kilometer per hour." | Step 1 — compute | Step 1 card | `Downstream Speed = 48⁄3 = 16 km/hr` reveals word-by-word |
| 10 | 37.06–42.92 | "Done. Now we have the downstream speed. Now this value will help us find the required answer." | Bridge — the computed value feeds the next step | Stack column | Step 1 morphs to stack; no new card — bridge line plays over the settled stack |
| 11 | 43.48–49.62 | "We know one simple rule, downstream speed equals boat speed in still water plus stream speed." | Step 2 — state the second formula | Step 2 card | `Downstream Speed = Still Water Speed + Stream Speed` reveals |
| 12 | 50.06–55.10 | "Now let us put the given values, 16 equals 13 plus stream speed." | Step 2 — substitute | Step 2 card | `16 = 13 + Stream Speed` reveals word-by-word |
| 13 | 55.48–62.34 | "After simplifying this, we get stream speed equals 16 minus 13, which is 3 kilometers per hour." | Step 2 — solve | Step 2 card | `Stream Speed = 16 − 13 = 3 km/hr` reveals, final answer highlighted |
| 14 | 63.24–70.24 | "Hence, the speed of the stream is 3 kilometer per hour. So the final answer will be option C." | Recap + reveal | Options grid | Step 2 morphs to stack; options grid fades in, staggers A–D, correct option (C) pulses on "C." |

---

## PART 2 — Scene-by-Scene Storyboard

Design constraints in force throughout (per `_template/README.md` §4D.1): only `--primary #6373db`,
`--primary-light #e2e5ff`, `--success #4eb85f`, `--topic #949494`, `--text #000000`, `--bg #FFFFFF`;
only `QuestionCard`/`SerialNum`/`SolutionCard`/`SolutionStackCard`/`solutionChip`/`StepCircle`/
`StackLine`/options-grid/`logo`/`topic-name`/`bottomStrip`/Illustration/`Fraction`; only the helpers in
`animations.js`, called explicitly by name below. Illustration assets: `illustration/boat.svg`,
`illustration/wave.svg`, `illustration/wave-light.svg` (copied from
`Trains Streams Boats/global-illustrations/`, used as-is — no SVG edits, only CSS positioning/scale,
same technique as `q6`/`q17`).

### SCENE 1 — Cold Open (0.0s – 3.5s)
**VOICEOVER:** "So welcome back again. It's time to solve one more problem."
**VISUAL OBJECTIVE:** Establish the question, low-key entrance.
**SCREEN LAYOUT:** `#q-full-card` centered, lowered per `apt.heroEnterLowered`, at `top:80px`, containing "A boat covers 48 km downstream in 3 hours. If its still-water speed is 13 km/h, find the stream speed." with "48 km", "3 hours" and "13 km/h" in `.num` blue.
**ON-SCREEN ELEMENTS:** QuestionCard (full), SerialNum badge ("Q").
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.5)` — lowered pose at 0.3s, rises to rest at 3.5s (end of "one more problem"). SerialNum mirrors with its own parallel tween (pop at 0.8s, rise at 3.5s).
**CAMERA MOVEMENT:** None. **TRANSITIONS:** N/A (opening beat).
**EDUCATIONAL PURPOSE:** Anchor the problem before anything else competes for attention.
**VISUAL HIERARCHY:** QuestionCard > SerialNum > (empty illustration area).
**ATTENTION MANAGEMENT:** Nothing else on screen yet.
**MOTION NOTES:** The rise finishes exactly as "problem" is spoken.
**CONTINUITY FROM PREVIOUS SCENE:** N/A — first scene.

### SCENE 2 — River + Boat Enter, Distance Tag (3.56s – 8.54s)
**VOICEOVER:** "Now, in this problem, we are given that a boat covers 48 kilometer"
**VISUAL OBJECTIVE:** Introduce the river/boat scene and immediately anchor the first given number to it.
**SCREEN LAYOUT:** River scene (water fill + scrolling wave tracks) and boat unit fade/scale in below the resting question card, `top:400px`. Boat begins its single long downstream glide.
**ON-SCREEN ELEMENTS:** `#river-scene`, `#boat-unit` (`illustration/boat.svg`, facing right), a distance bracket `#dist-bracket` spanning the boat's full journey, distance tag "48 km".
**ANIMATION DETAILS:** `apt.cardEnter` on river-scene + boat-unit at 4.6s. Boat begins gliding `x:150→900` over 15.9s starting 4.6s (`power1.inOut`). Distance bracket line grows in (`scaleX 0→1`) at 4.6s. Distance tag pops (`back.out(2)`) at 7.519s (word "48").
**CAMERA MOVEMENT:** None. **TRANSITIONS:** First appearance of the illustration — a clean `cardEnter`, not a cut.
**EDUCATIONAL PURPOSE:** Ground the 48 km figure in the physical journey the boat is about to make.
**VISUAL HIERARCHY:** Boat + river now share focus with the pinned question card above.
**ATTENTION MANAGEMENT:** Single tag pop, timed exactly to its spoken word.
**MOTION NOTES:** River conveyor (`riverFlow`) and wake flicker start here and run continuously to PIN_TIME.
**CONTINUITY FROM PREVIOUS SCENE:** Question card holds its Scene 1 resting position; illustration is added beneath it.

### SCENE 3 — Downstream Direction + Time Tag (9.38s – 10.80s)
**VOICEOVER:** "downstream in three hours."
**VISUAL OBJECTIVE:** Show the current's direction and anchor the time figure.
**SCREEN LAYOUT:** Flow-arrow chevrons + "Downstream" label appear to the right of the river, indicating current direction; a time tag pops near the boat's mid-journey point.
**ON-SCREEN ELEMENTS:** `#flow-arrows` (3 chevrons + "Downstream" label), time tag "3 h".
**ANIMATION DETAILS:** `apt.cardEnter` on flow-arrows at 9.38s (word "downstream"). Time tag pops (`back.out(2)`) at 10.179s (word "three").
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Continuous — boat is mid-glide.
**EDUCATIONAL PURPOSE:** Establish "downstream" as a directional, current-assisted trip before the still-water speed is introduced.
**VISUAL HIERARCHY:** Flow arrows + time tag join the distance tag from Scene 2.
**ATTENTION MANAGEMENT:** Two quick sequential pops matching the narration's own pacing.
**MOTION NOTES:** Boat continues its glide uninterrupted.
**CONTINUITY FROM PREVIOUS SCENE:** Boat is exactly where Scene 2's glide has carried it; distance bracket and tag remain visible.

### SCENE 4 — Still-Water Speed Badge (11.28s – 15.70s)
**VOICEOVER:** "Also, the speed of the boat in still water is 13 kilometer per hour."
**VISUAL OBJECTIVE:** Attach the still-water speed value to the boat itself so it travels with it for the rest of Phase 1.
**SCREEN LAYOUT:** A badge pill above the boat (`#speed-badge`, child of `#boat-unit` so it moves with the glide).
**ON-SCREEN ELEMENTS:** `#speed-badge` ("13 km/hr — still water").
**ANIMATION DETAILS:** `apt.cardEnter` on speed-badge at 14.079s (word "13").
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Continuous — boat still gliding.
**EDUCATIONAL PURPOSE:** Ground the still-water speed as a property of the boat itself, distinct from the downstream trip's overall speed.
**VISUAL HIERARCHY:** Badge travels with the boat, now the most prominent tag.
**ATTENTION MANAGEMENT:** One pop, timed to its own word.
**MOTION NOTES:** Badge inherits the boat's glide motion automatically (DOM child).
**CONTINUITY FROM PREVIOUS SCENE:** Boat/river state unchanged except for the new badge.

### SCENE 5 — Frame the Unknown (16.24s – 18.64s)
**VOICEOVER:** "The question is asking us to find the speed of the stream."
**VISUAL OBJECTIVE:** Introduce the stream's own (unknown) speed as a target near the current indicator.
**SCREEN LAYOUT:** A "? km/hr" tag appears near `#flow-arrows`.
**ON-SCREEN ELEMENTS:** `#stream-target` ("? km/hr").
**ANIMATION DETAILS:** `apt.cardEnter` on stream-target at 18.42s (word "stream.").
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Continuous.
**EDUCATIONAL PURPOSE:** Make the unknown explicit and visually distinct (a "?" glyph) before the rhetorical no-shortcut beat.
**VISUAL HIERARCHY:** "?" tag is now the visual hook for the rest of Phase 1.
**ATTENTION MANAGEMENT:** Single new element, clearly the odd one out (a "?" among real numbers).
**MOTION NOTES:** None beyond the standard pop-in.
**CONTINUITY FROM PREVIOUS SCENE:** Boat/badge/tags from Scenes 2–4 remain exactly where they were.

### SCENE 6 — No Shortcut (19.16s – 22.16s)
**VOICEOVER:** "Now, can we directly find the stream speed? No, we cannot."
**VISUAL OBJECTIVE:** A rhetorical beat that flags a step is needed before the answer — no new elements, just emphasis on the unknown.
**SCREEN LAYOUT:** Unchanged.
**ON-SCREEN ELEMENTS:** None new.
**ANIMATION DETAILS:** `apt.emphasize(tl, "#stream-target", 21.76)` — yoyo scale pulse on "cannot."
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Continuous, no cut.
**EDUCATIONAL PURPOSE:** Signal that an intermediate calculation (downstream speed) is required before the stream speed can be found.
**VISUAL HIERARCHY:** "?" tag is the momentary focal point.
**ATTENTION MANAGEMENT:** One pulse, narration carries the beat.
**MOTION NOTES:** Boat glide is nearly complete by the end of this scene (glide ends 20.5s), then idles (`apt.ambientLoop`).
**CONTINUITY FROM PREVIOUS SCENE:** Direct hold of Scene 5's final frame, boat finishing its glide.

### SCENE 7 — Pin + Bridge (22.76s – 25.38s)
**VOICEOVER:** "First, we need to know the boat's downstream speed."
**VISUAL OBJECTIVE:** Settle into the pinned layout and open the Given card while this bridging line plays.
**SCREEN LAYOUT:** `#q-full-card`/`#illustration` glide (`apt.pinFlow`) into `#q-pinned`/`#illus-pinned` at `PIN_TIME=22.76`. Given card enters center shortly after, at `GIVEN_TIME=23.2`.
**ON-SCREEN ELEMENTS:** Pinned question card + pinned mini illustration (mini river + boat icon + recap label "48 km · 3 h · 13 km/hr"), `#card-given .solution-card`.
**ANIMATION DETAILS:** `apt.pinFlow` for both card and illustration (0.8s glide) at 22.76. Serial badge fades out in step (`apt.fadeOut`, 0.5s) at 22.76. `apt.cardEnter` on Given card at 23.2; three lines stagger-fade ("Distance = 48 km" @23.2, "Time = 3 h" @23.7, "Still Water Speed = 13 km/hr" @24.2).
**CAMERA MOVEMENT:** Glide motion only (pinFlow). **TRANSITIONS:** `apt.pinFlow` — real measured glide, not a fade swap.
**EDUCATIONAL PURPOSE:** Recap the three known numbers as a clean list right as the narration explains why the next step is needed.
**VISUAL HIERARCHY:** Given card (center) > pinned question (top) > pinned illustration (mid-left recap).
**ATTENTION MANAGEMENT:** Pin + Given entrance happen in quick succession but read as distinct beats (glide, then a fresh card pop-in).
**MOTION NOTES:** Pinned illustration gets `apt.ambientLoop` on its boat icon (`#illus-pinned-icon`) starting right after this scene, running through the solving phase.
**CONTINUITY FROM PREVIOUS SCENE:** The full-size question card and illustration from Scene 6 are exactly what glides into the pinned slot — same elements, no re-entrance.

### SCENE 8 — Step 1: Formula + Compute (26.10s – 36.52s)
**VOICEOVER:** "We know, speed equals distance divided by time. So downstream speed equals 48 divided by 3, which is 16 kilometer per hour."
**VISUAL OBJECTIVE:** State the Speed = Distance/Time formula, then plug in the known values to get the downstream speed.
**SCREEN LAYOUT:** Given card morphs to the left stack (`apt.morphToStack`, 0.8s) at 26.099s. Step 1 card enters center at the same moment.
**ON-SCREEN ELEMENTS:** `#card-step1 .solution-card` with chip "Step 1"; math: "Speed = Distance⁄Time" (`.frac`, line-level) then "Downstream Speed = 48⁄3 = 16 km/hr" (`.frac` + word-level, never a bare ÷).
**ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-given...", "#stack-given...", 26.099)`. `apt.cardEnter` on Step 1 at 26.099. `apt.textReveal`: "Speed ="@27.039, "="@27.519, frac(Distance/Time)@27.859; "Downstream Speed ="@29.859, frac(48/3)@31.619, "="@33.799, "16 km/hr"(ans)@34.2.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Standard 0.8s morph.
**EDUCATIONAL PURPOSE:** Teach the base Speed=Distance/Time formula, then immediately apply it — the necessary intermediate value before the main rule can be used.
**VISUAL HIERARCHY:** Step 1 card (center) > Given stack card (left, now collapsed) > pinned question/illustration (top/recap).
**ATTENTION MANAGEMENT:** Word-level reveal on the arithmetic keeps eyes locked to the exact number being spoken.
**MOTION NOTES:** `.frac` fraction renders "Distance" over "Time" (formula line) and "48" over "3" (computation line) — no bare "÷" anywhere.
**CONTINUITY FROM PREVIOUS SCENE:** Given card's box is still completing its morph into the stack (0.8s, landing at 26.899) as Step 1's card pop-in begins at the same instant — the two motions overlap by design.

### SCENE 9 — Bridge: Value Carries Forward (37.06s – 42.92s)
**VOICEOVER:** "Done. Now we have the downstream speed. Now this value will help us find the required answer."
**VISUAL OBJECTIVE:** Let the just-computed downstream speed (16 km/hr) settle into the stack before the next formula is introduced — a quiet beat, no new card.
**SCREEN LAYOUT:** Step 1 morphs into the stack column at 37.86s. Nothing new enters until Step 2.
**ON-SCREEN ELEMENTS:** Stack column now shows Given (G) + Step 1 (1); pinned question + illustration continue idling above.
**ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-step1...", "#stack-step1...", 37.86)`; `apt.stackLineGrow(tl, "#line-g-1", 37.86)`.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Standard 0.8s morph, then a held empty stage.
**EDUCATIONAL PURPOSE:** Give the viewer a beat to register that 16 km/hr is now a known quantity before it's reused in the next formula.
**VISUAL HIERARCHY:** Stack column (left) is the only active element; pinned recap above continues its idle bob.
**ATTENTION MANAGEMENT:** Deliberate lull — narration is doing the bridging work, not new visuals.
**MOTION NOTES:** Mirrors the `PIN_TIME`→bridge-narration convention used across this topic (e.g. q17 Scene 9).
**CONTINUITY FROM PREVIOUS SCENE:** Step 1's card is exactly where Scene 8 left it when the morph begins.

### SCENE 10 — Step 2: Second Formula + Substitute (43.48s – 55.10s)
**VOICEOVER:** "We know one simple rule, downstream speed equals boat speed in still water plus stream speed. Now let us put the given values, 16 equals 13 plus stream speed."
**VISUAL OBJECTIVE:** State the core downstream/still-water/stream relationship, then substitute the known downstream speed and still-water speed.
**SCREEN LAYOUT:** Step 2 card enters center at 43.479s.
**ON-SCREEN ELEMENTS:** `#card-step2 .solution-card`, chip "Step 2"; math: "Downstream Speed = Still Water Speed + Stream Speed" (line-level formula) then "16 = 13 + Stream Speed" (word-level substitution).
**ANIMATION DETAILS:** `apt.cardEnter` at 43.479. `apt.textReveal`: "Downstream Speed"@45.2, "="@46.18, "Still Water Speed"@46.579, "+"@48.459, "Stream Speed"@48.979; "16"@52.759, "="@53.18, "13"@53.52, "+"@53.959, "Stream Speed"@54.439.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Direct continuation from Scene 9's held stack.
**EDUCATIONAL PURPOSE:** Apply the core boats-and-streams identity (Downstream = Still Water + Stream) using both values already established.
**VISUAL HIERARCHY:** Step 2 card (center) > Given/Step1 stack (left) > pinned recap (top).
**ATTENTION MANAGEMENT:** Formula line establishes WHY before the numbers establish WHAT, matching narration order.
**MOTION NOTES:** No morph in this scene — Step 2 stays active through Scene 11's solve.
**CONTINUITY FROM PREVIOUS SCENE:** Step 2 pops directly into the empty stage Scene 9 left behind.

### SCENE 11 — Step 2: Solve (55.48s – 62.34s)
**VOICEOVER:** "After simplifying this, we get stream speed equals 16 minus 13, which is 3 kilometers per hour."
**VISUAL OBJECTIVE:** Complete the algebra — isolate and compute the stream speed.
**SCREEN LAYOUT:** Same Step 2 card, third math line reveals.
**ON-SCREEN ELEMENTS:** Same `#card-step2` card, now with its third line.
**ANIMATION DETAILS:** `apt.textReveal` continues: "Stream Speed"@57.439, "="@58.299, "16"@58.68, "−"@59.299, "13"@59.719, "="@60.879, "3 km/hr"(ans)@61.139.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Continuous — same card, no morph yet.
**EDUCATIONAL PURPOSE:** Deliver the final computed answer before it's confirmed against the options.
**VISUAL HIERARCHY:** Step 2 card is the sole focal point; final "3 km/hr" in `.ans` styling.
**ATTENTION MANAGEMENT:** Word-level reveal keeps the subtraction locked to its spoken words.
**MOTION NOTES:** No bare "−" ambiguity — this is a subtraction (not division), so no `.frac` needed here, matching the design system's rule (only division needs `.frac`).
**CONTINUITY FROM PREVIOUS SCENE:** Direct continuation — same card, same position, no re-entrance.

### SCENE 12 — Recenter + Options Reveal (63.24s – 70.24s)
**VOICEOVER:** "Hence, the speed of the stream is 3 kilometer per hour. So the final answer will be option C."
**VISUAL OBJECTIVE:** Close out — clear the illustration, recenter the question, reveal the four options with C confirmed.
**SCREEN LAYOUT:** Stack column shows all completed cards (G, 1, 2); options grid (2×2) fills the right/center.
**ON-SCREEN ELEMENTS:** `#options-reveal` (A/B/C/D); Step 2 morphs into its stack slot at the same instant.
**ANIMATION DETAILS:** `RECENTER_TIME=63.239`: `apt.fadeOut(tl, "#illus-pinned", 63.239)`, `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 63.239)`, `apt.morphToStack(tl, "#card-step2...", "#stack-step2...", 63.239)`, `apt.stackLineGrow(tl, "#line-1-2", 63.239)`. Options fade in 63.7s (overlaps the morph tail), stagger 64.1s, correct pulse 70.099s (word "C.").
**CAMERA MOVEMENT:** The recenter shift. **TRANSITIONS:** Morph, recenter, and options fade-in sequenced within ~0.5s, then hold to the correct-answer pulse.
**EDUCATIONAL PURPOSE:** Confirm the computed answer (3 km/hr) against the actual answer choice, closing the loop.
**VISUAL HIERARCHY:** Options grid (center-right) > full stack column (left, G/1/2 all visible) > pinned question (top).
**ATTENTION MANAGEMENT:** Correct-option pulse is the final and only motion once the grid has settled.
**MOTION NOTES:** Stack cards, circles, and connector lines are NOT faded here — they remain visible through the end, per the hard rule.
**CONTINUITY FROM PREVIOUS SCENE:** Step 2's card (still fully visible and just-revealed at the end of Scene 11) is the exact element that morphs into the stack here — no fade-and-different-card swap.

### SCENE 13 — End Hold (70.24s – ~72.3s)
**VOICEOVER:** (silence — narration complete)
**VISUAL OBJECTIVE:** Hold the final frame briefly, then fade everything out together.
**SCREEN LAYOUT:** Full frame — pinned question, complete stack (G/1/2), options grid with C highlighted.
**ON-SCREEN ELEMENTS:** All of the above.
**ANIMATION DETAILS:** `apt.fadeOut(tl, "#root > div", 71.0, 1.0)` — single synchronized fade of every direct child.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Single fade-out, end of composition.
**EDUCATIONAL PURPOSE:** Give the viewer a beat to register the fully-solved problem before the video ends.
**VISUAL HIERARCHY:** N/A — full-frame fade.
**ATTENTION MANAGEMENT:** N/A.
**MOTION NOTES:** N/A.
**CONTINUITY FROM PREVIOUS SCENE:** The correct-pulse from Scene 12 has just settled; this scene adds no new motion until the final synchronized fade.

---

## PART 3 — Asset List Required

| Asset | Source | Notes |
|---|---|---|
| `illustration/boat.svg` | Copied from `Trains Streams Boats/global-illustrations/` | Used as-is, full-size (130px) in Phase 1, shrunk (72px) in the pinned recap |
| `illustration/wave.svg`, `illustration/wave-light.svg` | Copied from `Trains Streams Boats/global-illustrations/` | Used as-is — front/back scrolling wave-tile layers, same technique as q6/q17 |
| `design-system.css`, `animations.js`, `assets/` | Copied from `_template/` | Per README §5B — standard per-question local copies |

No new colors, fonts, or template components introduced — all illustration CSS (river scene, boat unit,
distance bracket, flow arrows, tags/badges) is per-question custom markup as permitted by design.md's
"Illustration" section, directly modeled on q17's proven river+boat technique.

## PART 4 — Animation Complexity Notes

- Standard patterns only: `heroEnterLowered`, `pinFlow` (×2, paired), `cardEnter` (×9), `textReveal`
  (×2 — Step 1, Step 2; Given uses plain staggered `fadeIn` since it's a recap, not new narration),
  `morphToStack` (×3 — Given, Step 1, Step 2), `stackLineGrow`/`setStackLine` (×2), `ambientLoop` (×2),
  `emphasize` (×1), `fadeIn`/`fadeOut`, `recenterForOptions`, `optionsStagger`, `correctPulse`.
- Two small custom (non-`animations.js`) local helpers copied verbatim from q6/q17: `riverFlow`
  (seamless scrolling wave conveyor) and `wakeFlicker` (bounded wake-line flicker behind the boat). No
  `boatJudder` needed — this question has only one direction of travel, no resistance leg.
- `layoutStack()` (copied verbatim from q6/q17) self-measures the stack cards' real rendered heights at
  build time rather than hand-guessing their `top` values.
- 3 stack cards (`stack-given`, `stack-step1`, `stack-step2`) with two connector lines (`line-g-1`,
  `line-1-2`) between them.
- Every active-card clip's `data-duration` is sized to cover `(its own morph start time − its own
  data-start) + 0.8s + ~0.2s buffer`, not just to the next event's start time (per the clip-duration
  memory: HyperFrames unmounts a clip the instant `data-start + data-duration` passes, regardless of an
  in-flight GSAP tween).
- `.frac` component used for both the "Distance⁄Time" formula line and the "48⁄3" computation in
  Step 1 — no bare "÷" character anywhere in the composition. The Step 2 subtraction ("16 − 13") is not
  a division and correctly uses a plain "−" glyph, not `.frac`.
- No double-animation risk: text-reveal-driven card content never also gets `emphasize`/`resultReveal`.
- No `apt.stepFlow` used (correctly dropped per README §4D.1).

## PART 5 — Master Timeline Overview

```
0.0    Phase 1 starts — QuestionCard hero (lowered) enters
0.8    SerialNum badge pop
3.5    QuestionCard + badge rise to resting position
4.6    River scene + boat unit enter; boat begins downstream glide (x:150→900, 15.9s)
7.519  "48 km" distance tag pops (word "48")
9.38   Flow-arrows + "Downstream" label pop (word "downstream")
10.179 "3 h" time tag pops (word "three")
14.079 "13 km/hr" still-water speed badge pops on boat (word "13")
18.42  "? km/hr" stream target tag pops (word "stream.")
20.5   Boat glide ends; ambientLoop bob begins
21.76  Emphasize pulse on "?" tag (word "cannot.")

[ PIN_TIME = 22.76 ]
22.76  pinFlow — question + illustration glide to pinned slots (0.8s)
23.2   GIVEN_TIME — Given card enters; 3 lines stagger-fade (48 km / 3 h / 13 km/hr)
23.76  Pinned illustration ambient loop begins

26.099 Given → stack morph; Step 1 card enters (formula + compute downstream speed)
27.039–34.2   Word-level reveal: Speed = Distance⁄Time ... Downstream Speed = 48⁄3 = 16 km/hr
37.86  Step 1 → stack morph (bridge narration plays over held stack, no new card)

43.479 Step 2 card enters (second formula)
45.2–48.979   Word-level reveal: Downstream Speed = Still Water Speed + Stream Speed
52.759–54.439 Word-level reveal: 16 = 13 + Stream Speed
57.439–61.139 Word-level reveal: Stream Speed = 16 − 13 = 3 km/hr (.ans)

[ RECENTER_TIME = 63.239 ]
63.239 Illustration fades, question recenters, Step 2 → stack morph, line-1-2 grows
63.7   Options grid fades in
64.1   Options stagger reveal
70.099 Correct option (C) pulses (word "C.")

[ END_FADE_TIME = 71.0 ]  full-frame fade out (1.0s)
~72.3  End
```

**Video duration:** 70.239s (matches `voiceover.wav` exactly); composition tail extends to ~72.3s for
the closing fade.
