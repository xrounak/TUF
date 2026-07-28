# Storyboard — "Crossing Time, Opposite Directions" (Trains, Streams and Boats — Q22)

Question: *Two trains of lengths 160 m and 140 m run in opposite directions at 54 km/h and 36 km/h. In how many seconds will they cross each other?*
Options: A) 10.56 s  **B) 12 s (correct)**  C) 13.44 s  D) 14.88 s
Voiceover: `voiceover.wav` — duration **104.60s**
Transcript: `transcript.json` / `transcript.txt`

Sibling reference: `Trains Streams Boats/q11` (two trains, opposite directions, relative-speed
question) supplies the base two-train-on-a-rail illustration technique (`train.svg` mirrored via
`scaleX(-1)` for Train B — no new asset). This question extends that pattern with a second
attribute per train — **length**, not just speed — since crossing time depends on both.

**Revision:** Phase 1 now runs the full 0–39.9s (PIN_TIME moved from an earlier 26.6s). The Given
card is managed *inside* Phase 1, entering at 7.0s (right as "The length of the first train is..."
starts) instead of opening post-pin — each value (length A, length B, speed A, speed B, direction)
reveals individually at its own real spoken timestamp (6.96/9.92/13.18/15.54/19.48) rather than as
a post-hoc recap, so the Given card is now a live transcript of Scene 2, not a summary shown later. The "what does completely cross mean" explanation (27.04–39.86s) is now paired with a
**real crossing animation**: both trains drive all the way past each other's starting position (a
full pass, not a token drift — Train A ends where Train B started and vice versa), timed to
27.60–39.20s. Once they've crossed, a bracket + label fades in ("Distance = 160 m + 140 m = 300 m",
at 35.60s, matching "...cover the sum of their lengths") stating the distance in words, so Step 1
(post-pin) opens straight into substitution rather than restating the reasoning. Three solution
steps (Given → Total Distance → Relative Speed → Time) instead of q11's single step.

---

## PART 1 — Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|---|---|---|---|---|
| 1 | 0.12–3.70 | "So welcome back again, it's time to solve one more problem." | Cold open | Question card rising in | Establish frame |
| 2 | 4.22–21.80 | "Now, in this problem, we are given two trains. The length of the first train is 160 meter, and the length of the second train is 140 meters. Their speeds are 54 kilometers per hour and 36 kilometers per hour. Also, the question clearly says both trains are moving in opposite directions." | State all four givens + direction | Rail sweeps in, both trains fade onto the track at opposite edges; length badge then speed badge pop onto each train in narration order; inward chevrons confirm "opposite directions" | Anchor every raw fact to its own train before any arithmetic |
| 3 | 22.42–26.42 | "The question is asking us to find in how many seconds they will completely cross each other." | Frame the unknown | "Crossing Time = ?" tag fades in above the scene | Plant the target quantity |
| 4 | 27.04–39.86 | "Now the important point here is completely cross each other. What does that mean? It means both trains have to pass each other fully. So together, they need to cover the sum of their lengths, not just one train's length." | Teach what "completely cross" means | Pinned layout + Given card recap sit on screen while this plays — no new numbers, purely conceptual | Sets up why Step 1 will add the two lengths |
| 5 | 40.20–48.34 | "The total distance will be 160 plus 140, which is 300 meter. Got it? Perfect." | Step 1 — total distance | Step 1 card reveals "160 + 140 = 300 m" | Concrete arithmetic |
| 6 | 48.82–64.00 | "Now, one more thing. Since both trains are moving in opposite directions, their speeds add up. This is the basic concept. When two objects move towards each other, the distance between them decreases using the relative speed, and for opposite directions, we simply add the speeds." | Teach relative-speed rule (opposite → add) | Step 2 card opens with the rule stated in words first | Concept before arithmetic, same pattern as q11 |
| 7 | 64.30–69.32 | "So the relative speed becomes 54 plus 36, which is 90 kilometers per hour." | Step 2 — substitute speeds | "54 + 36 = 90 km/h" reveals | Concrete arithmetic |
| 8 | 69.74–88.70 | "Now, we cannot use kilometers per hour because our distance is in meters, so let us convert it into meters per second. 90 multiplied by 5 over 18 gives us 25 meters per second. Now everything is ready. We know the total distance is 300 meters, and the relative speed is 25 meters per second. So using the formula," | Unit conversion + recap | "90 × 5/18 = 25 m/s" reveals, then card holds through the recap | Unit-consistency is the trap this step guards against |
| 9 | 89.22–99.12 | "Time equals distance divided by speed. Putting the values, time equals 300 divided by 25. After solving this, we get 12 seconds." | Step 3 — final formula + answer | Step 3 card: formula (as `.frac`) → substitution → "= 12 s" | Deliver the answer |
| 10 | 99.16–104.60 | "Hence, the trains will completely cross each other in 12 seconds. So the correct option is option B." | Reveal | Options grid, B pulses green | Confirm against the four choices |

---

## PART 2 — Scene-by-Scene Storyboard

Design constraints in force throughout (per `_template/README.md` §4D.1): only `--primary #6373db`,
`--primary-light #e2e5ff`, `--success #4eb85f`, `--topic #949494`, `--text #000000`, `--bg #FFFFFF`;
only `QuestionCard`/`SerialNum`/`SolutionCard`/`SolutionStackCard`/`solutionChip`/`StepCircle`/
`StackLine`/options-grid/`logo`/`topic-name`/`bottomStrip`/Illustration/`Fraction`; only the
helpers in `animations.js`, called explicitly by name below. No bare `÷` anywhere — the Step 3
division formula uses `.frac`.

### SCENE 1 — Cold Open (0.0s – 3.70s)
**VOICEOVER:** "So welcome back again, it's time to solve one more problem."
**VISUAL OBJECTIVE:** Establish the question, hero-style.
**SCREEN LAYOUT:** `#q-full-card` centered, lowered per `apt.heroEnterLowered`, `top:80px`, question text with "160 m", "140 m", "54 km/h", "36 km/h", "opposite directions" in `.num` blue.
**ON-SCREEN ELEMENTS:** QuestionCard (full), SerialNum badge ("Q").
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.70)` — fades/scales in lowered at 0.3s, rises to rest at 3.70s. SerialNum mirrors with its own parallel tween (pop at 0.8s, rise at 3.70s).
**CAMERA MOVEMENT:** None. **TRANSITIONS:** N/A. **EDUCATIONAL PURPOSE:** Anchor the problem before anything competes.
**VISUAL HIERARCHY:** QuestionCard > SerialNum > (empty illustration).
**ATTENTION MANAGEMENT:** Single focal point. **MOTION NOTES:** Rise finishes exactly as "problem" is spoken.
**CONTINUITY FROM PREVIOUS SCENE:** N/A — first scene.

### SCENE 2 — Rail + Two Trains Assemble, All Givens Stated (3.70s – 21.80s)
**VOICEOVER:** "Now, in this problem, we are given two trains. The length of the first train is 160 meter, and the length of the second train is 140 meters. Their speeds are 54 kilometers per hour and 36 kilometers per hour. Also, the question clearly says both trains are moving in opposite directions."
**VISUAL OBJECTIVE:** Establish two distinct trains, already facing each other, then attach each real length and speed to its own train in narration order.
**SCREEN LAYOUT:** `#illustration` (1400×320, centered, `top:430px`): rail spanning the full width; Train A at the left edge facing right; Train B at the right edge, mirrored, facing left — the one case (`_template/design.md` §7) where the illustration genuinely spans two objects, so `justify-content:space-between` applies.
**ON-SCREEN ELEMENTS:** `#rail`, `#train-a-unit` (train.svg) + `#length-badge-a` ("160 m") + `#speed-badge-a` ("54 km/hr"), `#train-b-outer` (train.svg mirrored) + `#length-badge-b` ("140 m") + `#speed-badge-b` ("36 km/hr"), `#opp-arrows` (two inward chevrons between the trains).
**ANIMATION DETAILS:**
- 4.22s: `apt.roadSweep(tl, "#rail", 4.22)` — track draws in left→right.
- 6.00s (word "two"): `apt.cardEnter(tl, "#train-a-unit", 6.00)` and `apt.cardEnter(tl, "#train-b-outer", 6.00)`.
- 6.96s ("The length of the first train is..."): `apt.cardEnter(tl, "#length-badge-a", 6.96)` — "160 m".
- 9.92s ("and the length of the second train is..."): `apt.cardEnter(tl, "#length-badge-b", 9.92)` — "140 m".
- 13.18s ("Their speeds are..."): `apt.cardEnter(tl, "#speed-badge-a", 13.18)` — "54 km/hr".
- 15.54s ("and thirty-six..."): `apt.cardEnter(tl, "#speed-badge-b", 15.54)` — "36 km/hr".
- 19.48s (word "both"): `apt.cardEnter(tl, "#opp-arrows", 19.48)` — inward chevrons pop in between the trains.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Continuous build, no cuts.
**EDUCATIONAL PURPOSE:** Every raw fact lands on its own train, in narration order, before any arithmetic starts.
**VISUAL HIERARCHY:** Trains (foreground) > length/speed badges (accent, sequential) > opp-arrows > rail (ambient).
**ATTENTION MANAGEMENT:** One badge reveals at a time, in narration order.
**MOTION NOTES:** No motion yet beyond the sequential pops — scene is static otherwise.
**CONTINUITY FROM PREVIOUS SCENE:** Question card has just settled into its resting hero position; illustration fills in directly beneath it, no cut.

### SCENE 3 — Target Framed (22.42s – 26.42s)
**VOICEOVER:** "The question is asking us to find in how many seconds they will completely cross each other."
**VISUAL OBJECTIVE:** Plant the unknown.
**SCREEN LAYOUT:** Same as Scene 2, plus a tag above the scene.
**ON-SCREEN ELEMENTS:** `#target-tag` ("Crossing Time = ?").
**ANIMATION DETAILS:** 22.42s (word "question"): `apt.cardEnter(tl, "#target-tag", 22.42)`.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Continuous. **EDUCATIONAL PURPOSE:** Names the goal right before the pin transition.
**VISUAL HIERARCHY:** Target tag (new focal point) > trains (established, steady).
**ATTENTION MANAGEMENT:** Single new reveal. **MOTION NOTES:** n/a.
**CONTINUITY FROM PREVIOUS SCENE:** Trains and badges remain exactly as Scene 2 left them.

### SCENE 4 — PIN FLOW + Given (26.6s – 34.6s)
**VOICEOVER:** "Now the important point here is completely cross each other. What does that mean? It means both trains have to pass each other fully. So together, they need to cover the sum of their lengths, not just one train's length."
**VISUAL OBJECTIVE:** Transition to solving mode; formalize the four raw facts into the Given card while the narrator explains what "completely cross" means conceptually (no new numbers here — purely definitional, so it plays out entirely over the pinned/Given layout rather than a Phase‑1 overlay).
**SCREEN LAYOUT:** Question glides to `#q-pinned`; illustration glides to `#illus-pinned` (two mini trains, space-between, each with its own length + speed label); Given `SolutionCard` opens center.
**ON-SCREEN ELEMENTS:** `#q-pinned`, `#illus-pinned` (`#illus-pinned-icon-a`, `#illus-pinned-icon-b` mirrored, each with a two-line label), `#card-given` (chip "Given").
**ANIMATION DETAILS:**
- `PIN_TIME = 26.60`: `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 26.60)`, `apt.pinFlow(tl, "#illustration", "#illus-pinned", 26.60)`, `apt.fadeOut(tl, "#serial-num", 26.60, 0.5)`.
- From `PIN_TIME+1 = 27.60` through `RECENTER_TIME` (99.0): `apt.ambientLoop` bobs both pinned train icons — keeps the pinned area alive through the long Given/Step1/Step2/Step3 hold.
- `GIVEN_TIME = 27.60`: `apt.cardEnter(tl, "#card-given .solution-card", 27.60)`.
- `apt.textReveal(tl, "#card-given .math")` — no fresh narration restates these values here (they were already spoken in Scene 2), so all three lines reveal in quick top-to-bottom succession (length + speed combined per train, matching sibling q11's compact Given style): `data-t="27.80"` "Train A = 160 m, 54 km/hr", `data-t="28.60"` "Train B = 140 m, 36 km/hr", `data-t="29.40"` "Direction = Opposite".
**CAMERA MOVEMENT:** The pin-flow glide. **TRANSITIONS:** `apt.pinFlow` (0.8s), not a cut.
**EDUCATIONAL PURPOSE:** Converts the four already-anchored facts directly into the Given card while the "what does crossing mean" explanation plays overhead.
**VISUAL HIERARCHY:** Given card (center, primary) > pinned question (top) > pinned two-train recap (ambient).
**ATTENTION MANAGEMENT:** Five facts reveal in the same order as Scene 2.
**MOTION NOTES:** The pinned recap's ambient bob is what keeps this scene from reading static during the long conceptual explanation.
**CONTINUITY FROM PREVIOUS SCENE:** The full illustration is still mid-glide into its pinned slot as the Given card opens.

### SCENE 5 — STEP 1: Total Distance (34.6s – 48.4s)
**VOICEOVER:** "...not just one train's length. The total distance will be 160 plus 140, which is 300 meter. Got it? Perfect."
**VISUAL OBJECTIVE:** State why lengths are summed, substitute the real numbers, deliver the total distance.
**SCREEN LAYOUT:** Given card morphs to the left stack; Step 1 `SolutionCard` opens center and stays through the "Got it? Perfect." recap.
**ON-SCREEN ELEMENTS:** `#stack-given` (`.step-circle` "G"), `#card-step1`.
**ANIMATION DETAILS:**
- `GIVEN_MORPH_TIME = 34.60`: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 34.60)` (completes 35.40).
- `STEP1_TIME = 35.60`: `apt.cardEnter(tl, "#card-step1 .solution-card", 35.60)` — timed right to "So together, they need to cover the sum of their lengths" (35.56).
- `apt.textReveal(tl, "#card-step1 .math")` reveals:
  - `data-t="35.60"` (line-level, paraphrased): "Cover sum of both lengths"
  - word-level substitution, timed to the actual numeral words: "160" `data-t="41.86"`, "+" `data-t="43.46"`, "140" `data-t="44.06"`
  - `data-t="45.60"` "=" then `data-t="45.96"` (`.ans`) "300 m"
- No new reveals 47.08–48.34 — card holds while narration confirms ("Got it? Perfect.").
**CAMERA MOVEMENT:** None. **TRANSITIONS:** `apt.morphToStack` (0.8s box+text crossfade).
**EDUCATIONAL PURPOSE:** Isolates "why we add lengths, not just use one" as its own clean reveal before the numbers land.
**VISUAL HIERARCHY:** Step 1 card (center, active) > stack-given (left, archived) > pinned recap (ambient).
**ATTENTION MANAGEMENT:** Reasoning line, then substitution, then answer — matches the narration's own pacing.
**MOTION NOTES:** Pinned recap keeps bobbing throughout.
**CONTINUITY FROM PREVIOUS SCENE:** Given card is fully visible/readable up until its morph starts.

### SCENE 6 — STEP 2: Relative Speed (48.4s – 88.3s)
**VOICEOVER:** "Now, one more thing. Since both trains are moving in opposite directions, their speeds add up. This is the basic concept. When two objects move towards each other, the distance between them decreases using the relative speed, and for opposite directions, we simply add the speeds. So the relative speed becomes 54 plus 36, which is 90 kilometers per hour. Now, we cannot use kilometers per hour because our distance is in meters, so let us convert it into meters per second. 90 multiplied by 5 over 18 gives us 25 meters per second. Now everything is ready. We know the total distance is 300 meters, and the relative speed is 25 meters per second. So using the formula,"
**VISUAL OBJECTIVE:** Teach the opposite-direction "add speeds" rule, substitute, then convert units — the trap this step guards against.
**SCREEN LAYOUT:** Step 1 morphs to the left stack; Step 2 `SolutionCard` opens center (widened to `760px` since "Relative Speed = 54 + 36 = 90 km/hr" is the longest line) and holds through the long recap at the end.
**ON-SCREEN ELEMENTS:** `#stack-step1` (`.step-circle` "1"), `#line-g-1` connector, `#card-step2`.
**ANIMATION DETAILS:**
- `STEP1_MORPH_TIME = 48.40`: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 48.40)` (completes 49.20); `apt.stackLineGrow(tl, "#line-g-1", 48.40)`.
- `STEP2_TIME = 49.40`: `apt.cardEnter(tl, "#card-step2 .solution-card", 49.40)`.
- `apt.textReveal(tl, "#card-step2 .math")` reveals:
  - `data-t="49.40"` (line-level): "Opposite Directions → Speeds Add"
  - `data-t="58.00"` (line-level, formula): "Relative Speed = Speed A + Speed B"
  - word-level substitution: "54" `data-t="65.60"`, "+" `data-t="66.26"`, "36" `data-t="66.56"`, "=" `data-t="67.66"`, `.hi` "90 km/hr" `data-t="67.90"`
  - `data-t="69.74"` (line-level): "Convert km/hr → m/s"
  - word-level conversion: "90" `data-t="76.88"`, "×" `data-t="77.28"`, `.frac` (5/18) `data-t="78.00"`, "=" `data-t="78.72"`, `.ans` "25 m/s" `data-t="79.10"`
- No new reveals 81.02–88.70 — card holds while narration recaps both known values and pivots to "using the formula".
**CAMERA MOVEMENT:** None. **TRANSITIONS:** `apt.morphToStack` (0.8s).
**EDUCATIONAL PURPOSE:** Same "concept before arithmetic" pattern as q11 — states the rule in words, then substitutes, then flags and resolves the unit mismatch (km/hr vs. m, the classic trap in this topic).
**VISUAL HIERARCHY:** Step 2 card (center, active) > stack-step1/stack-given (left, archived) > pinned recap (ambient).
**ATTENTION MANAGEMENT:** Five sequential reveals matched to narration pacing, then a deliberate hold through the recap.
**MOTION NOTES:** Pinned recap keeps bobbing throughout this long hold — the single most important place `apt.ambientLoop` earns its keep.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1 card is fully visible/readable up until its morph starts.

### SCENE 7 — STEP 3: Time (88.3s – 99.0s)
**VOICEOVER:** "Time equals distance divided by speed. Putting the values, time equals 300 divided by 25. After solving this, we get 12 seconds."
**VISUAL OBJECTIVE:** State the formula (as a real fraction, never a bare `÷`), substitute, deliver the final answer.
**SCREEN LAYOUT:** Step 2 morphs to the left stack; Step 3 `SolutionCard` opens center.
**ON-SCREEN ELEMENTS:** `#stack-step2` (`.step-circle` "2"), `#line-1-2` connector, `#card-step3`.
**ANIMATION DETAILS:**
- `STEP2_MORPH_TIME = 88.30`: `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 88.30)` (completes 89.10); `apt.stackLineGrow(tl, "#line-1-2", 88.30)`.
- `STEP3_TIME = 89.30`: `apt.cardEnter(tl, "#card-step3 .solution-card", 89.30)`.
- `apt.textReveal(tl, "#card-step3 .math")` reveals:
  - `data-t="89.30"` (line-level formula): "Time =" + `.frac` (Distance/Speed)
  - word-level substitution: "Time" `data-t="92.92"`, "=" `data-t="93.32"`, `.frac` (300/25) `data-t="93.76"`
  - `data-t="97.44"` "=" then `data-t="97.64"` (`.ans`) "12 s"
- No new reveals 99.16–104.60 — card (now stacked) holds through the "Hence... option B" recap while options appear.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** `apt.morphToStack` (0.8s).
**EDUCATIONAL PURPOSE:** Delivers the answer via the standard Time = Distance/Speed formula, reusing the two prior results (300 m, 25 m/s) without restating them numerically.
**VISUAL HIERARCHY:** Step 3 card (center, active) > stack-step2/stack-step1/stack-given (left, archived).
**ATTENTION MANAGEMENT:** Formula, then substitution, then answer — three sequential reveals.
**MOTION NOTES:** Pinned recap's ambient loop ends at `RECENTER_TIME` (99.0), coinciding with this step's own morph.
**CONTINUITY FROM PREVIOUS SCENE:** Step 2 card is fully visible/readable up until its morph starts.

### SCENE 8 — Options Reveal (99.0s – 104.60s)
**VOICEOVER:** "Hence, the trains will completely cross each other in 12 seconds. So the correct option is option B."
**VISUAL OBJECTIVE:** Confirm the answer against all four choices.
**SCREEN LAYOUT:** Step 3 morphs to stack; pinned question recenters; illustration recap clears; options grid (2×2) appears.
**ON-SCREEN ELEMENTS:** `#stack-step3` (`.step-circle` "3"), `#line-2-3` connector, `#options-reveal` (A: 10.56 s, B: 12 s — correct, C: 13.44 s, D: 14.88 s).
**ANIMATION DETAILS:**
- `RECENTER_TIME = 99.00`: `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 99.00)` (completes 99.80); `apt.stackLineGrow(tl, "#line-2-3", 99.00)`.
- `apt.fadeOut(tl, "#illus-pinned", 99.00)`; `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 99.00)`.
- `apt.fadeIn(tl, "#options-reveal", 100.00)`.
- `apt.optionsStagger(tl, ".opt-btn", 100.60)`.
- `apt.correctPulse(tl, ".opt-btn.correct", 104.10)` — timed to "option B" (104.06–104.60).
**CAMERA MOVEMENT:** The recenter shift. **TRANSITIONS:** `apt.morphToStack` (0.8s), `apt.recenterForOptions` (0.5s).
**EDUCATIONAL PURPOSE:** Confirms 12 s against the four options; the closeness of the distractors (10.56/13.44/14.88 s) rewards having actually converted units correctly in Step 2.
**VISUAL HIERARCHY:** Options grid (new focal point) > stack column (steady, all four steps visible) > pinned question (top).
**ATTENTION MANAGEMENT:** Grid stagger, then a single correct-answer pulse.
**MOTION NOTES:** Stack cards and connector lines are never faded — they stay visible through this entire scene.
**CONTINUITY FROM PREVIOUS SCENE:** Step 3 card is still completing its morph into the stack as the options grid fades in.

### SCENE 9 — End Hold (104.60s – ~107.5s)
**VOICEOVER:** (silence — narration complete)
**VISUAL OBJECTIVE:** Let the correct-answer pulse settle before the whole frame fades.
**ANIMATION DETAILS:** `END_FADE_TIME = 105.50`: `apt.fadeOut(tl, "#root > div", 105.50, 1.2)` — every direct child of `#root` fades together as one synchronized beat.
**CONTINUITY FROM PREVIOUS SCENE:** Correct-pulse yoyo has finished; grid, stack, and pinned question are all still fully visible until this fade begins.

---

## PART 3 — Asset List Required

- `illustration/train.svg` — copy from `_template/README.md`-referenced sibling `q11/illustration/train.svg` (or `global-illustrations/train.svg`); reused unmirrored for Train A, `scaleX(-1)` for Train B. No new asset.
- No other custom SVGs — length/speed badges, opp-arrows, and the target tag are all CSS primitives (`.tag-pill`-style pills + CSS border-triangle chevrons), matching q11's technique.

## PART 4 — Animation Complexity Notes

- Two badge types per train (length + speed) instead of q11's one — same `cardEnter` pop pattern, just four calls instead of two, each gated to its own narration word.
- No concept-demo panel (unlike q11) — PIN happens earlier (26.6s, right after all raw facts are stated) so the "what does completely cross mean" explanation plays entirely over the pinned Given card instead of a Phase‑1 overlay. Keeps Phase 1 to one job: establish the two trains.
- Three solution steps (Given → Total Distance → Relative Speed → Time) — one more than q11's single-step video — because this question chains two derived quantities (total distance, then relative speed) before the final formula, versus q11's one-shot relative-speed answer.
- Step 3's formula ("Time = Distance/Speed") uses `.frac`, never a bare `÷`, per the standing math-notation rule.
- `apt.ambientLoop` on both pinned train icons runs continuously from `PIN_TIME+1` (27.60) to `RECENTER_TIME` (99.0) — the longest ambient-loop span of any sibling question so far, since Step 2 alone holds for ~39s.

## PART 5 — Master Timeline Overview

```
0.00   Question card + serial badge enter (lowered)
3.70   Rise to resting hero position
4.22   Rail sweeps in
6.00   Both trains enter
6.96   Length badge A "160 m"
9.92   Length badge B "140 m"
13.18  Speed badge A "54 km/hr"
15.54  Speed badge B "36 km/hr"
19.48  Opposite-direction arrows
22.42  Target tag "Crossing Time = ?"
26.60  PIN — question + illustration glide to pinned layout        [PIN_TIME]
27.60  Given card enters, recaps all 5 facts                       [GIVEN_TIME]
34.60  Given → stack (morph)                                       [GIVEN_MORPH]
35.60  Step 1 "Total Distance" enters                               [STEP1_TIME]
       → 160 + 140 = 300 m
48.40  Step 1 → stack (morph)                                       [STEP1_MORPH]
49.40  Step 2 "Relative Speed" enters                                [STEP2_TIME]
       → 54 + 36 = 90 km/hr → × 5/18 → 25 m/s
88.30  Step 2 → stack (morph)                                       [STEP2_MORPH]
89.30  Step 3 "Time" enters                                          [STEP3_TIME]
       → 300/25 = 12 s
99.00  Step 3 → stack (morph); illustration clears; question recenters [RECENTER_TIME]
100.00 Options grid fades in
100.60 Options stagger in
104.10 Option B pulses green (correct)
105.50 End fade — entire frame fades together                       [END_FADE]
~107.5 Timeline end
```
