# Speed-Time-Distance — Question 4 — Storyboard

Question: "A bus covers 168 km at a uniform speed of 56 km/hr. How much time does it take?"
Options: A) 3 hours (correct) · B) 2 hours · C) 2.5 hours · D) 3.5 hours
Voiceover duration: 53.499s

---

## PART 1: Narration Beat Analysis

| # | Timestamp | Narration | Educational purpose | Attention focus | Visual objective |
|---|-----------|-----------|---------------------|------------------|-------------------|
| 1 | 0.10–2.94 | "So welcome back again. Time for one more problem." | Warm open, signal a new problem | Center of frame | Question card rises into view |
| 2 | 3.42–15.02 | "Now in this problem, we are given that a bus covers 168 kilometer at a uniform speed of 56 kilometer per hour. The question is asking us to find the time taken by the bus." | State the full problem | Question text + illustration | Bus illustration builds; distance/speed labels pop in sync with the words |
| 3 | 15.48–17.92 | "Now, first, let us note down the given values." | Transition into solving | Layout reorganizes | Question + illustration pin to top |
| 4 | 18.46–25.16 | "Distance covered by the bus is 168 kilometer. Speed of the bus is 56 kilometer per hour." | List the givens | Given card | Given card enters, two lines reveal |
| 5 | 25.74–32.20 | "Now we know the formula, time is equal to distance divided by speed. Got it? Perfect." | State the formula (single step — units already match, no conversion needed) | Step 1 card | Given morphs to stack; Step 1 card opens with the formula |
| 6 | 32.88–45.44 | "Now let us put the given values into the formula. Time taken by the bus is equal to total distance divided by speed. That is equal to 168 divided by 56." | Substitute the givens | Step 1 math | Substitution reveals word-by-word |
| 7 | 46.08–50.70 | "After simplifying this, we get 3 hours. So the time taken by the bus is 3 hours." | Compute and confirm the result | Step 1 answer | Answer "3 hours" lands; step morphs to stack |
| 8 | 51.04–53.50 | "Hence, the correct answer is option A." | Confirm the answer | Options grid | Options reveal, stagger in, correct option (A) pulses exactly on "option A" |

---

## PART 2: Scene-by-Scene Storyboard

### SCENE 1 — Question Reveal
**TIMESTAMP:** 0.0 – 15.5s
**VOICEOVER:** "So welcome back again. Time for one more problem. Now in this problem, we are given that a bus covers 168 kilometer at a uniform speed of 56 kilometer per hour. The question is asking us to find the time taken by the bus."
**VISUAL OBJECTIVE:** Establish the problem — question card + a bus illustration on a road, distance/speed called out visually as they're spoken.
**SCREEN LAYOUT:** `.q-card` centered top (starts lowered per `heroEnterLowered`, offset Y=180), serial badge top-left, illustration centered mid-frame (road + bus icon), topic name bottom-left, logo bottom-right, dotted grid + bottom strip always on.
**ON-SCREEN ELEMENTS:** Question card ("A bus covers `168 km` at a uniform speed of `56 km/hr`. How much time does it take?" — numbers in primary blue), serial badge "Q", road strip with dashed center line, bus SVG icon, "168 km" distance label, "56 km/hr" speed label.
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 2.94)` — card starts lowered at 0.3s, rises at 2.94s (end of "Time for one more problem."). Serial badge pops in parallel (tandem y-offset, matching rise at 2.94s). `apt.roadSweep` at 3.0s. Bus icon `apt.cardEnter` at 3.4s, then drifts right (`x:880`, 8.3s, linear ease, starting 3.7s) representing continuous travel through the restated question. Distance label fades in at 6.12s (word "one" — start of "168"). Speed label fades in at 9.92s (word "fifty-six").
**CAMERA MOVEMENT:** None (static frame, motion lives in the illustration).
**TRANSITIONS:** Leads into Scene 2 via `pinFlow`.
**EDUCATIONAL PURPOSE:** Let the viewer read/hear the full problem once before solving.
**VISUAL HIERARCHY:** Question card > illustration > labels.
**ATTENTION MANAGEMENT:** Bus's steady rightward drift keeps the frame alive without competing with the question text.
**MOTION NOTES:** Drift uses `ease:"none"` (linear) — represents constant speed, not an entrance flourish.
**CONTINUITY FROM PREVIOUS SCENE:** Opening scene — no prior scene.

---

### SCENE 2 — Pin + Given
**TIMESTAMP:** 15.5 – 25.3s
**VOICEOVER:** "Now, first, let us note down the given values. Distance covered by the bus is 168 kilometer. Speed of the bus is 56 kilometer per hour."
**VISUAL OBJECTIVE:** Reorganize into the solving layout, then state the two givens.
**SCREEN LAYOUT:** Question card + illustration glide (`pinFlow`) to their pinned slots (question top, illustration below it, both smaller). Given `SolutionCard` opens center-stage.
**ON-SCREEN ELEMENTS:** Pinned question card (shortened text), pinned illustration (single bus icon + "Distance = `168 km` · Speed = `56 km/hr`" recap line, centered per design.md's single-icon rule), Given card with chip "Given".
**ANIMATION DETAILS:** `PIN_TIME = 15.48` — `apt.pinFlow` on both `#q-full-card→#q-pinned` and `#illustration→#illus-pinned`; serial badge fades out in step (`apt.fadeOut`, 0.5s). `GIVEN_TIME = 18.46` (own timestamp — narration starts stating values here, ~3s after the pin). `apt.cardEnter` + `apt.textReveal` on Given card: Line 1 "Distance = 168 km" (line-level, t=18.46), Line 2 "Speed = 56 km/hr" (line-level, t=22.36). Ambient bob starts on the pinned bus icon shortly after (`apt.ambientLoop`, 16.7→48.7) so it doesn't sit dead through the solving stretch.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Given card morphs to stack at 25.3s (`apt.morphToStack`, 0.8s).
**EDUCATIONAL PURPOSE:** Anchor the two known values before any math starts.
**VISUAL HIERARCHY:** Given card (center) > pinned question/illustration (top).
**ATTENTION MANAGEMENT:** The gap between PIN_TIME and GIVEN_TIME is deliberate — narration restates the transition beat before actually reading out values.
**MOTION NOTES:** `pinFlow` is a real glide, not a fade swap — question and illustration visibly travel to their pinned slots together.
**CONTINUITY FROM PREVIOUS SCENE:** The bus icon mid-drift from Scene 1 is what glides into the pinned illustration slot — same object, same motion direction, no fade break.

---

### SCENE 3 — Step 1: Formula, Substitution & Answer
**TIMESTAMP:** 26.3 – 49.5s
**VOICEOVER:** "Now we know the formula, time is equal to distance divided by speed. Got it? Perfect. Now let us put the given values into the formula. Time taken by the bus is equal to total distance divided by speed. That is equal to 168 divided by 56. After simplifying this, we get 3 hours. So the time taken by the bus is 3 hours."
**VISUAL OBJECTIVE:** State the formula, substitute the givens, and land the answer — this problem has no unit-conversion trap, so it's a single clean step.
**SCREEN LAYOUT:** Given card now sits as a stack card (top of left column, badge "G"). Step 1 `SolutionCard` active center, chip "Step 1".
**ON-SCREEN ELEMENTS:** Stack card "Distance = 168 km / Speed = 56 km/hr" with step-circle "G". Active Step 1 card with 3 lines: formula, substitution, answer.
**ANIMATION DETAILS:** Step 1 card enters at 26.3s (1.0s after the Given morph starts, per the standard breathing gap). `apt.textReveal` on 3 lines: Line 1 (line-level) "Time = Distance ÷ Speed" @27.32 (start of "time is equal to distance divided by speed"); Line 2 (word-level) "= 168 ÷ 56": "="@41.38 (start of "That is equal to"), "168"@42.86 (hi), "÷"@43.9 (word "divided"), "56"@44.56 (hi); Line 3 (word-level ans) "= 3 hours": "="@46.08 (start of "After simplifying this"), "3 hours"@47.52 (ans class, word "three").
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Step 1 → stack morph at 48.7s; the G→1 connector line grows at the same instant.
**EDUCATIONAL PURPOSE:** Show the direct, single-step formula application — reinforces that not every problem needs a unit conversion, just correct formula recall.
**VISUAL HIERARCHY:** Formula line first, substitution next, boxed/colored final answer last.
**ATTENTION MANAGEMENT:** The "Got it? Perfect." filler (30.88–32.20) is a deliberate pause with no new visual — the formula line sits alone on screen while the narration reassures the viewer before moving to substitution.
**MOTION NOTES:** No new animation types — plain `.rv` word/line reveals only.
**CONTINUITY FROM PREVIOUS SCENE:** The Given card's box is still completing its 0.8s morph into the stack as Step 1's card enters 1s later; the pinned bus icon's ambient bob continues uninterrupted underneath.

---

### SCENE 4 — Answer Reveal
**TIMESTAMP:** 49.9 – 53.5s
**VOICEOVER:** "Hence, the correct answer is option A."
**VISUAL OBJECTIVE:** Reveal + confirm the correct option.
**SCREEN LAYOUT:** Stack column shows G, 1. At 49.9s the stack column clears center stage and the pinned question recenters; options grid (2×2) appears on the right.
**ON-SCREEN ELEMENTS:** Options grid A–D with A highlighted green.
**ANIMATION DETAILS:** `apt.fadeOut` on pinned illustration + `apt.recenterForOptions` at 49.9s. `apt.fadeIn` options-reveal at 50.1s, `apt.optionsStagger` at 50.6s, `apt.correctPulse` on option A at 52.9s — timed to land exactly on the spoken word "A." (52.96–53.50). Final synchronized fade of every top-level element at 54.3s (1.2s).
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** End of video — full fade-out.
**EDUCATIONAL PURPOSE:** Confirms the final numeric answer maps to the correct option under time pressure of the closing narration.
**VISUAL HIERARCHY:** Stack column (full G/1 history) stays visible and unfaded through the reveal — reinforces the full solution path was seen.
**ATTENTION MANAGEMENT:** Correct-option pulse is the last motion in the video, synced to the last spoken word.
**MOTION NOTES:** Stack cards/circles/connector lines are never faded, even during the recenter — only the pinned illustration drops out (its job is done).
**CONTINUITY FROM PREVIOUS SCENE:** Step 1's connector line (G→1) and stack card are already settled as the recenter begins; the same left column stays put through the reveal.

---

## PART 3: Asset List Required

- `illustration/bus-svgrepo-com.svg` — bus icon (already provided by the user, colorful multi-part icon, viewBox 0 0 1024 1024). Used as-is per the user-supplied-SVG rule — no recoloring, no re-path.
- `_template/assets/serial-num-badge.svg` (shared)
- `_template/assets/logo.png` (shared)
- No other custom assets — road/labels are pure CSS, matching q3's runner-question treatment

## PART 4: Animation Complexity Notes

- Standard helper set only: `heroEnterLowered`, `serialEnter` (inline tandem tween), `roadSweep`, `cardEnter`, `fadeIn`/`fadeOut`, `pinFlow`, `ambientLoop`, `textReveal`, `morphToStack`, `stackLineGrow`, `setStackLine`, `recenterForOptions`, `optionsStagger`, `correctPulse`.
- No new animation types introduced.
- Only ONE Given→Step morph cycle (simplest problem structure seen so far in this topic) — both distance and speed share the same km-based units, so no conversion step is needed; the storyboard correctly reflects that rather than inventing a conversion beat that isn't in the narration.
- Tightest beat: correct-option pulse (52.9s) must land within the ~2.3s tail after the Step 1 card morphs (48.7s) — verified against transcript word timestamps, fits.

## PART 5: Master Timeline Overview

```
0.0    Background layers + bottom strip + topic + logo
0.3    Question card starts lowered, rising at 2.94s
0.8    Serial badge pop (tandem with card)
3.0    Road sweep
3.4    Bus icon enters
3.7    Bus drifts right (linear, 8.3s)
6.12   Distance label "168 km"
9.92   Speed label "56 km/hr"
15.48  PIN_TIME — question + illustration glide to pinned slots
16.7   Ambient bob starts on pinned bus icon
18.46  GIVEN_TIME — Given card enters, 2 lines reveal
25.3   Given → stack morph (0.8s)
26.3   Step 1 card enters — formula, substitution, answer
48.7   Step 1 → stack morph (0.8s), G→1 line grows
49.9   Recenter — pinned illustration fades out, question shifts right
50.1   Options grid fades in
50.6   Options stagger in
52.9   Correct option (A) pulses — synced to "option A."
54.3   Full synchronized fade-out (1.2s)
56.0   End
```
