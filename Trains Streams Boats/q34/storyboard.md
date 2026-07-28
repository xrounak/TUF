# Storyboard - "Relative Speed, Meeting Time" (Trains, Streams and Boats - Q34)

Question: *Two trains start from two cities 420 km apart and move towards each other at 60 km/h and 80 km/h. After how many hours will they meet?*
Options: A) 2.5 h  **B) 3 h (correct)**  C) 3.5 h  D) 4 h
Voiceover: `voiceover.mp3` - duration **76.759s**
Transcript: `transcript.json` / `transcript.txt`

Sibling reference: `q11` (two-train, opposite-direction relative speed) supplies the base
two-train-on-rail illustration technique (trains at opposite edges, converging drift, opp-arrows
chevrons). Q34 extends the same rig one step further - the trains actually meet (Distance/Time),
not just combine speed - so a distance tag and a second solution card (Time formula) are added.
No new component invented; the division uses `.frac`, never a bare `÷`, per the topic's
math-notation rule.

---

## PART 1 - Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|---|---|---|---|---|
| 1 | 0.14-1.72 | "So welcome back again." | Cold open | Question card rising in | Establish frame |
| 2 | 2.40-4.92 | "It's time to solve one more problem." | Cold open continues | Card settles | Frame complete |
| 3 | 5.34-12.32 | "Now in this problem, two trains start from two cities which are 420 kilometers apart." | State setup + distance | Rail sweeps in, both trains fade onto track at opposite edges; distance tag "420 km" pops between them | Distance anchored before speeds |
| 4 | 12.96-19.42 | "One train is moving at 60 km/hr, and the other train is moving at 80 km/hr." | State both speeds | Speed badge "60 km/hr" on Train A, then "80 km/hr" on Train B | Anchor each speed to its own train |
| 5 | 20.04-27.72 | "The question is asking us to find after how many hours the two trains will meet. Now the important point here is both trains are moving towards each other," | Frame the unknown + state direction | "Meet Time = ?" tag fades in; opp-arrows (inward chevrons) appear between trains | Plant target + visually confirm converging setup |
| 6 | 28.42-34.32 | "So the distance between them is getting reduced from both sides at the combined rate of their speeds." | Teach the concept | Trains begin slow inward drift | Distance-closing is shown, not just told |
| 7 | 34.82-40.22 | "Therefore, when two bodies move towards each other, their relative speed is the sum of their speeds." | State the rule | Trains keep drifting, arrive visibly closer as sentence ends | Confirms the "add speeds" rule for this exact case |
| 8 | 40.68-46.74 | "Relative Speed = 60 plus 80 = 140 km/hr. Done." | First computed value | Question+illustration begin gliding to pinned layout; Given card opens with Relative Speed line | Pivot from concept to arithmetic |
| 9 | 47.34-48.58 | "Now we have everything we need." | Bridge | Given card holds | Transition beat |
| 10 | 49.14-58.76 | "We know distance = 420 km. Relative speed = 140 km/hr. Now we can use the speed-distance-time formula." | Recap both givens together | Given card's Distance line reveals; card holds through formula name-drop | Both knowns visible before the formula appears |
| 11 | 59.28-68.30 | "Time = Distance divided by Relative Speed. Substituting the values, Time = 420 divided by 140." | Step 1 - formula then substitution | Given morphs to stack; Step 1 card opens with formula line, then substituted fraction | Formula stated in the abstract, then with real numbers |
| 12 | 69.02-71.40 | "After simplifying this, we get 3 hours." | Step 1 - resolve | Answer line reveals "= 3 hours" | Concrete final value |
| 13 | 72.22-76.76 | "So the trains will meet after 3 hours. Hence, the correct option is Option B." | Reveal | Step 1 morphs to stack; options grid fades in, stagger, B pulses green | Confirm against the four choices |

---

## PART 2 - Scene-by-Scene Storyboard

Design constraints in force throughout (per `_template/README.md` §4D.1): only
`--primary #6373db`, `--primary-light #e2e5ff`, `--success #4eb85f`, `--topic #949494`,
`--text #000000`, `--bg #FFFFFF`; only `QuestionCard`/`SerialNum`/`SolutionCard`/
`SolutionStackCard`/`solutionChip`/`StepCircle`/`StackLine`/options-grid/`logo`/`topic-name`/
`bottomStrip`/Illustration/`Fraction`; only the helpers in `animations.js`, named explicitly below.

### SCENE 1 - Cold Open (0.0s - 2.98s)
**VOICEOVER:** "So welcome back again. It's time to solve one more problem."
**VISUAL OBJECTIVE:** Establish the question, hero-style.
**SCREEN LAYOUT:** `#q-full-card` centered, `apt.heroEnterLowered`, `top:80px`; "420 km", "60 km/hr", "80 km/hr", "towards each other" and "how many hours" in `.num` blue.
**ON-SCREEN ELEMENTS:** QuestionCard (full), SerialNum badge ("Q").
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 2.98)`; SerialNum mirrors with a parallel tween.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** N/A. **EDUCATIONAL PURPOSE:** Anchor the problem first.
**VISUAL HIERARCHY:** QuestionCard > SerialNum > (empty illustration).
**ATTENTION MANAGEMENT:** Single focal point. **MOTION NOTES:** Rise finishes as "problem" is spoken.
**CONTINUITY FROM PREVIOUS SCENE:** N/A - first scene.

### SCENE 2 - Rail + Two Trains Assemble, Distance Stated (2.98s - 12.32s)
**VOICEOVER:** "Now in this problem, two trains start from two cities which are 420 kilometers apart."
**VISUAL OBJECTIVE:** Establish two distinct trains at opposite edges of a rail, distance labeled between them.
**SCREEN LAYOUT:** `#illustration` (1400x320, centered, `top:430px`): rail spans full width; Train A at left edge facing right; Train B at right edge, mirrored, facing left.
**ON-SCREEN ELEMENTS:** `#rail`, `#train-a-unit` (train.svg) + `#dist-tag` ("Distance = 420 km", centered above rail), `#train-b-outer` (train.svg, `scaleX(-1)`).
**ANIMATION DETAILS:**
- 3.52s: `apt.roadSweep(tl, "#rail", 3.52)`.
- 6.72s (word "trains"): `apt.cardEnter(tl, "#train-a-unit", 6.72)` and `apt.cardEnter(tl, "#train-b-outer", 6.72)`.
- 9.92s (word "420"): `apt.cardEnter(tl, "#dist-tag", 9.92)`.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Continuous build.
**EDUCATIONAL PURPOSE:** Distance anchored before any speed values arrive.
**VISUAL HIERARCHY:** Trains > dist-tag > rail.
**ATTENTION MANAGEMENT:** One reveal at a time. **MOTION NOTES:** Static until drift phase.
**CONTINUITY FROM PREVIOUS SCENE:** Question card has just settled; illustration fills in directly beneath, no cut.

### SCENE 3 - Speeds Attached to Each Train (12.96s - 19.42s)
**VOICEOVER:** "One train is moving at 60 km/hr, and the other train is moving at 80 km/hr."
**VISUAL OBJECTIVE:** Anchor each real speed to its own train.
**SCREEN LAYOUT:** Same as Scene 2.
**ON-SCREEN ELEMENTS:** `#speed-badge-a` ("60 km/hr"), `#speed-badge-b` ("80 km/hr").
**ANIMATION DETAILS:** 12.96s: `apt.cardEnter(tl, "#speed-badge-a", 12.96)`. 17.22s: `apt.cardEnter(tl, "#speed-badge-b", 17.22)`.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Continuous.
**EDUCATIONAL PURPOSE:** Each speed lands on its own number word.
**VISUAL HIERARCHY:** Speed badges (new) > distance tag/trains (established).
**ATTENTION MANAGEMENT:** Sequential reveal. **MOTION NOTES:** n/a.
**CONTINUITY FROM PREVIOUS SCENE:** Distance tag and both trains remain exactly as Scene 2 left them.

### SCENE 4 - Target Framed + Opposite-Direction Confirmed (20.04s - 27.72s)
**VOICEOVER:** "The question is asking us to find after how many hours the two trains will meet. Now the important point here is both trains are moving towards each other,"
**VISUAL OBJECTIVE:** Plant the unknown and visually confirm the converging setup.
**SCREEN LAYOUT:** Same illustration, plus a target tag above and inward chevrons between the trains.
**ON-SCREEN ELEMENTS:** `#target-tag` ("Meet Time = ?"), `#opp-arrows` (two CSS border-triangle chevrons pointing inward).
**ANIMATION DETAILS:** 20.04s: `apt.cardEnter(tl, "#target-tag", 20.04)`. 24.5s: `apt.cardEnter(tl, "#opp-arrows", 24.50)`.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Continuous. **EDUCATIONAL PURPOSE:** Names the goal, shows the converging geometry before the concept-teaching narration finishes.
**VISUAL HIERARCHY:** Target tag + opp-arrows (new) > trains (steady).
**ATTENTION MANAGEMENT:** Two reveals, spaced. **MOTION NOTES:** n/a.
**CONTINUITY FROM PREVIOUS SCENE:** Trains and speed badges remain exactly as Scene 3 left them.

### SCENE 5 - Concept: Distance Closing, Relative Speed Rule (28.42s - 40.22s)
**VOICEOVER:** "So the distance between them is getting reduced from both sides at the combined rate of their speeds. Therefore, when two bodies move towards each other, their relative speed is the sum of their speeds."
**VISUAL OBJECTIVE:** Demonstrate closing distance concretely; trains drift inward across this whole span.
**SCREEN LAYOUT:** Same illustration; trains slide toward center.
**ON-SCREEN ELEMENTS:** `#train-a-unit`, `#train-b-outer` (drifting).
**ANIMATION DETAILS:** 28.42s: `tl.to("#train-a-unit", {x:120, duration:11.8, ease:"none"}, 28.42)` and `tl.to("#train-b-outer", {x:-120, duration:11.8, ease:"none"}, 28.42)` - arrive visibly closer right as "sum of their speeds" finishes (40.22s).
**CAMERA MOVEMENT:** None (drift only). **TRANSITIONS:** Continuous, no cuts.
**EDUCATIONAL PURPOSE:** Distance genuinely shrinking on screen while the narration states the reducing-distance concept.
**VISUAL HIERARCHY:** Trains (motion) > tags (static, holding).
**ATTENTION MANAGEMENT:** One motion cue, no competing reveals. **MOTION NOTES:** Linear drift, no easing, so the closing reads as steady combined-rate motion.
**CONTINUITY FROM PREVIOUS SCENE:** Target tag and opp-arrows remain visible, unchanged, through the drift.

### SCENE 6 - Pin Flow + Given Card Opens with Relative Speed (40.68s - 48.58s)
**VOICEOVER:** "Relative Speed = 60 plus 80 = 140 km/hr. Done. Now we have everything we need."
**VISUAL OBJECTIVE:** Pivot from concept to the first computed value.
**SCREEN LAYOUT:** Question + illustration glide to pinned slot (top strip); Given solution card opens centered.
**ON-SCREEN ELEMENTS:** `#q-pinned`, `#illus-pinned` (two mini trains, space-between, `+` between them), `#card-given` solution card (chip "Given").
**ANIMATION DETAILS:**
- PIN_TIME = 40.22: `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 40.22)`, `apt.pinFlow(tl, "#illustration", "#illus-pinned", 40.22)`, `apt.fadeOut(tl, "#serial-num", 40.22, 0.5)`.
- GIVEN_TIME = 40.68 (own timestamp, distinct from PIN_TIME): `apt.cardEnter(tl, "#card-given .solution-card", 40.68)`, `apt.textReveal(tl, "#card-given .math")` - first line ("Relative Speed = 60 + 80 = 140 km/hr") reveals at 40.68.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Real glide, not a fade swap. **EDUCATIONAL PURPOSE:** The value just taught in the concept phase becomes the first concrete Given line.
**VISUAL HIERARCHY:** Given card (new focal point) > pinned recap (secondary, ambient-bobbing).
**ATTENTION MANAGEMENT:** Single new card. **MOTION NOTES:** `apt.ambientLoop` on both pinned train icons from 41.2s through the Given/Step1 hold (63.0s) so the pinned recap doesn't sit dead-static.
**CONTINUITY FROM PREVIOUS SCENE:** The converging trains from Scene 5 are mid-glide into their pinned slot as this scene opens; no disappearance.

### SCENE 7 - Given Card: Distance Line Confirmed (49.14s - 58.76s)
**VOICEOVER:** "We know distance = 420 kilometer. Relative speed = 140 kilometers per hour. Now we can use the speed-distance-time formula."
**VISUAL OBJECTIVE:** Complete the Given card with the second known value.
**SCREEN LAYOUT:** Same Given card, second line reveals beneath the first.
**ON-SCREEN ELEMENTS:** Given card's second `.rv` line ("Distance = 420 km").
**ANIMATION DETAILS:** `apt.textReveal` fires the second line's own `data-t="49.14"` timestamp (already registered on the card from Scene 6's single `textReveal` call).
**CAMERA MOVEMENT:** None. **TRANSITIONS:** N/A. **EDUCATIONAL PURPOSE:** Both knowns sit together before the formula is invoked.
**VISUAL HIERARCHY:** Given card holds steady, two-line state.
**ATTENTION MANAGEMENT:** One line reveal. **MOTION NOTES:** n/a.
**CONTINUITY FROM PREVIOUS SCENE:** Given card is the same card from Scene 6, unchanged position, gaining its second line.

### SCENE 8 - Step 1: Formula, Substitution, Answer (59.28s - 71.40s)
**VOICEOVER:** "Time = Distance divided by Relative Speed. Substituting the values, Time = 420 divided by 140. After simplifying this, we get 3 hours."
**VISUAL OBJECTIVE:** Given morphs into the stack; Step 1 solves for time using `.frac` (never a bare `÷`).
**SCREEN LAYOUT:** `#card-step1` solution card, centered, same position class as Given previously occupied.
**ON-SCREEN ELEMENTS:** `#stack-given` (left column), `#card-step1` (chip "Step 1").
**ANIMATION DETAILS:**
- GIVEN_MORPH_TIME = 57.9: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 57.9)`.
- 59.28s: `apt.cardEnter(tl, "#card-step1 .solution-card", 59.28)`, `apt.textReveal(tl, "#card-step1 .math")`.
  - Line 1 (`data-t="59.28"`): `Time = <span class="frac">...Distance/Relative Speed...</span>` formula.
  - Line 2 (`data-t="65.00"`): `Time = <span class="frac">...420/140...</span>` substitution, both numbers `.hi`.
  - Line 3 (`data-t="70.50"`): `= <span class="ans">3 hours</span>` result.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** 0.8s morph. **EDUCATIONAL PURPOSE:** Formula stated abstractly, then with real numbers, then resolved - three distinct beats, not one wall of text.
**VISUAL HIERARCHY:** Step 1 card (active) > stack-given (collapsed, left).
**ATTENTION MANAGEMENT:** One line reveal per narrated sub-beat. **MOTION NOTES:** `apt.setStackLine` connector grows in sync with the next morph (Scene 9), not here.
**CONTINUITY FROM PREVIOUS SCENE:** Given card is still completing its morph into the stack as Step 1's `cardEnter` begins; the pinned recap continues its ambient bob unchanged underneath.

### SCENE 9 - Reveal (72.22s - 76.76s)
**VOICEOVER:** "So the trains will meet after 3 hours. Hence, the correct option is Option B."
**VISUAL OBJECTIVE:** Confirm the answer against the four choices.
**SCREEN LAYOUT:** Step 1 morphs to stack; illustration recap clears; options grid (2x2) fades in centered.
**ON-SCREEN ELEMENTS:** `#stack-step1`, `#line-g-1` (connector), `#options-reveal` (A/B/C/D, B marked `correct`).
**ANIMATION DETAILS:**
- RECENTER_TIME = 73.5: `apt.fadeOut(tl, "#illus-pinned", 73.5)`, `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 73.5)`.
- `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 73.5)`, `apt.setStackLine(...)` + `apt.stackLineGrow(tl, "#line-g-1", 73.5)`.
- `apt.fadeIn(tl, "#options-reveal", 73.8)`, `apt.optionsStagger(tl, ".opt-btn", 74.1)`.
- `apt.correctPulse(tl, ".opt-btn.correct", 75.6)` - timed just before "Option B" finishes at 76.76.
- END_FADE_TIME = 78.5: `apt.fadeOut(tl, "#root > div", 78.5, 1.0)`.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Morph + stagger, no hard cuts. **EDUCATIONAL PURPOSE:** Final answer checked against all four options.
**VISUAL HIERARCHY:** Options grid (new) > stacked cards (settled, left) > pinned question (top).
**ATTENTION MANAGEMENT:** Grid stagger, then single correct-option pulse. **MOTION NOTES:** Pulse lands right as the narration names "Option B".
**CONTINUITY FROM PREVIOUS SCENE:** Step 1 card is mid-morph into the stack as the options container begins its fade-in; nothing disappears abruptly.

---

## PART 3 - Asset List Required

- `illustration/train.svg` (shared asset, copied from `Trains Streams Boats/global-illustrations/train.svg`) - used twice: unmirrored for Train A, `scaleX(-1)` for Train B, both in the main illustration and the pinned mini-recap.
- No other new assets. Distance tag, speed badges, target tag, opp-arrows, rail, and pinned recap are all CSS-built (`.tag-pill`, border-triangle chevrons, `repeating-linear-gradient` rail), matching `q11`'s pattern.

## PART 4 - Animation Complexity Notes

- Two independent linear drift tweens (`x` translation, `ease:"none"`) running concurrently on both trains across an 11.8s span - no GSAP timeline conflicts since each targets a different element.
- Given card carries two `.rv` lines with timestamps 8.46s apart (40.68 / 49.14) inside a single `apt.textReveal` call - both timestamps must be set correctly on their `data-t` attributes before the call.
- Step 1 card uses `.frac` for both the abstract formula and the substituted numbers - per the topic's math-notation rule, never a bare `÷` character anywhere in the card.
- Stack spacing computed at runtime (`layoutStack` IIFE, same pattern as `q11`) since Given is 2 lines and Step 1 is 3 lines - different heights, must not be hand-guessed.

## PART 5 - Master Timeline Overview

| Time | Event |
|---|---|
| 0.3 | Question card hero enters (lowered) |
| 2.98 | Question card rises to rest; "one more problem" finishes |
| 3.52 | Rail sweeps in |
| 6.72 | Both trains fade onto rail (opposite-facing) |
| 9.92 | Distance tag "420 km" enters |
| 12.96 | Speed badge A "60 km/hr" enters |
| 17.22 | Speed badge B "80 km/hr" enters |
| 20.04 | Target tag "Meet Time = ?" enters |
| 24.50 | Opp-arrows (inward chevrons) enter |
| 28.42-40.22 | Trains drift inward (11.8s linear) |
| 40.22 | PIN_TIME - pinFlow glide to pinned question + illustration |
| 40.68 | GIVEN_TIME - Given card enters, line 1 "Relative Speed = 60+80=140 km/hr" |
| 41.2-63.0 | Ambient bob on both pinned train icons |
| 49.14 | Given card line 2 "Distance = 420 km" reveals |
| 57.9 | Given card morphs to stack |
| 59.28 | Step 1 card enters, line 1 "Time = Distance/RelSpeed" (`.frac`) |
| 65.00 | Step 1 line 2 "Time = 420/140" (`.frac`, `.hi` numbers) |
| 70.50 | Step 1 line 3 "= 3 hours" (`.ans`) |
| 73.5 | Illustration recap clears, question recenters; Step 1 morphs to stack; connector line grows |
| 73.8 | Options grid fades in |
| 74.1 | Options stagger reveal |
| 75.6 | Correct option (B) pulses |
| 78.5 | End fade (1.0s) |
