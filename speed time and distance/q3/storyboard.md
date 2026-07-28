# Speed-Time-Distance — Question 3 — Storyboard

Question: "A runner maintains a speed of 6 m/sec for 12 minutes. What distance does the runner cover?"
Options: A) 4.8 km · B) 4.32 km (correct) · C) 3.6 km · D) 4 km
Voiceover duration: 86.519s

---

## PART 1: Narration Beat Analysis

| # | Timestamp | Narration | Educational purpose | Attention focus | Visual objective |
|---|-----------|-----------|---------------------|------------------|-------------------|
| 1 | 0.10–2.52 | "So welcome back again. Time for one more problem." | Warm open, signal a new problem | Center of frame | Question card rises into view |
| 2 | 3.06–12.78 | "Now, in this problem, we are given that a runner maintains a speed of six meter per second for 12 minutes. The question is asking us to find the total distance covered by the runner." | State the full problem | Question text + illustration | Runner illustration builds; speed/time labels pop in sync with the words |
| 3 | 13.34–15.78 | "Now, first, let us note down the given values." | Transition into solving | Layout reorganizes | Question + illustration pin to top |
| 4 | 16.38–20.52 | "Speed of the runner is six meter per second. Time taken is 12 minutes." | List the givens | Given card | Given card enters, two lines reveal |
| 5 | 21.00–33.44 | "Be very sure about one thing. The speed is given in meter per second, but the time is given in minutes. So before using the formula, we must first convert the time into seconds." | Flag the unit mismatch — the common trap | Step 1 card | Given morphs to stack; Step 1 card opens with the mismatch warning |
| 6 | 34.00–44.14 | "We know that one minute is equal to 60 seconds, so 12 minutes is equal to 12 into 60. That gives us 720 seconds." | Perform the unit conversion | Step 1 math | Conversion math reveals word-by-word |
| 7 | 44.70–50.92 | "Now that the units are the same, we can use the formula, distance is equal to speed into time." | State the formula | Step 2 card | Step 1 morphs to stack; Step 2 opens with the formula |
| 8 | 51.36–61.84 | "Putting the values, distance is equal to six into 720. After multiplying this, we get 4,320 meter." | Substitute and compute | Step 2 math | Numbers reveal in sync; result "4320 m" lands |
| 9 | 62.34–68.76 | "Now that we have found the distance in meters, let us convert it into kilometer because all the options are given in kilometer." | Set up the final unit conversion | Step 3 card | Step 2 morphs to stack; Step 3 opens |
| 10 | 69.20–79.10 | "We know that 1000 meter is equal to one kilometer. So 4,320 divided by 1000 is equal to 4.32 kilometer." | Perform final conversion | Step 3 math | Conversion reveals word-by-word, answer "4.32 km" lands |
| 11 | 79.70–86.52 | "So the runner covers 4.32 kilometer. Hence, the correct answer is option B." | Confirm the answer | Options grid | Step 3 morphs to stack; options reveal, stagger in, correct option (B) pulses exactly on "option B" |

---

## PART 2: Scene-by-Scene Storyboard

### SCENE 1 — Question Reveal
**TIMESTAMP:** 0.0 – 13.3s
**VOICEOVER:** "So welcome back again. Time for one more problem. Now, in this problem, we are given that a runner maintains a speed of six meter per second for 12 minutes. The question is asking us to find the total distance covered by the runner."
**VISUAL OBJECTIVE:** Establish the problem — question card + a runner illustration on a road, speed/time called out visually as they're spoken.
**SCREEN LAYOUT:** `.q-card` centered top (starts lowered per `heroEnterLowered`, offset Y=180), serial badge top-left, illustration centered mid-frame (road + runner figure), topic name bottom-left, logo bottom-right, dotted grid + bottom strip always on.
**ON-SCREEN ELEMENTS:** Question card ("A runner maintains a speed of `6 m/sec` for `12 minutes`. What distance does the runner cover?" — numbers in primary blue), serial badge "Q", road strip with dashed center line, runner SVG icon, "6 m/s" speed label, "12 min" time label (clock icon).
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 2.6)` — card starts lowered at 0.3s, rises at 2.6s (end of "Time for one more problem."). Serial badge pops in parallel (tandem y-offset, matching rise at 2.6s). `apt.roadSweep` at 3.0s. Runner icon `apt.cardEnter` at 3.4s, then drifts right (`x:880`, 9.3s, linear ease, starting 3.7s) representing continuous running through the restated question. Speed label fades in at 6.0s (word "six"). Time label fades in at 7.3s (word "12").
**CAMERA MOVEMENT:** None (static frame, motion lives in the illustration).
**TRANSITIONS:** Leads into Scene 2 via `pinFlow`.
**EDUCATIONAL PURPOSE:** Let the viewer read/hear the full problem once before solving.
**VISUAL HIERARCHY:** Question card > illustration > labels.
**ATTENTION MANAGEMENT:** Runner's steady rightward drift keeps the frame alive without competing with the question text.
**MOTION NOTES:** Drift uses `ease:"none"` (linear) — represents constant speed, not an entrance flourish.
**CONTINUITY FROM PREVIOUS SCENE:** Opening scene — no prior scene.

---

### SCENE 2 — Pin + Given
**TIMESTAMP:** 13.3 – 20.6s
**VOICEOVER:** "Now, first, let us note down the given values. Speed of the runner is six meter per second. Time taken is 12 minutes."
**VISUAL OBJECTIVE:** Reorganize into the solving layout, then state the two givens.
**SCREEN LAYOUT:** Question card + illustration glide (`pinFlow`) to their pinned slots (question top, illustration below it, both smaller). Given `SolutionCard` opens center-stage.
**ON-SCREEN ELEMENTS:** Pinned question card (shortened text), pinned illustration (single runner icon + "Speed = `6 m/s` · Time = `12 min`" recap line, centered per design.md's single-icon rule), Given card with chip "Given".
**ANIMATION DETAILS:** `PIN_TIME = 13.3` — `apt.pinFlow` on both `#q-full-card→#q-pinned` and `#illustration→#illus-pinned`; serial badge fades out in step (`apt.fadeOut`, 0.5s). `GIVEN_TIME = 16.4` (own timestamp — narration starts stating values here, ~3s after the pin). `apt.cardEnter` + `apt.textReveal` on Given card: Line 1 "Speed = 6 m/s" (line-level, t=16.4), Line 2 "Time = 12 min" (line-level, t=19.1). Ambient bob starts on the pinned runner icon shortly after (`apt.ambientLoop`, 14.5→83.5) so it doesn't sit dead through the long solving stretch.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Given card morphs to stack at 20.6s (`apt.morphToStack`, 0.8s).
**EDUCATIONAL PURPOSE:** Anchor the two known values before any math starts.
**VISUAL HIERARCHY:** Given card (center) > pinned question/illustration (top).
**ATTENTION MANAGEMENT:** The gap between PIN_TIME and GIVEN_TIME is deliberate — narration restates the transition beat before actually reading out values.
**MOTION NOTES:** `pinFlow` is a real glide, not a fade swap — question and illustration visibly travel to their pinned slots together.
**CONTINUITY FROM PREVIOUS SCENE:** The runner icon mid-drift from Scene 1 is what glides into the pinned illustration slot — same object, same motion direction, no fade break.

---

### SCENE 3 — Step 1: Convert Time to Seconds
**TIMESTAMP:** 21.6 – 44.2s
**VOICEOVER:** "Be very sure about one thing. The speed is given in meter per second, but the time is given in minutes. So before using the formula, we must first convert the time into seconds. We know that one minute is equal to 60 seconds, so 12 minutes is equal to 12 into 60. That gives us 720 seconds."
**VISUAL OBJECTIVE:** Flag the classic unit-mismatch trap, then convert minutes → seconds.
**SCREEN LAYOUT:** Given card now sits as a stack card (top of left column, badge "G"). Step 1 `SolutionCard` active center, chip "Step 1".
**ON-SCREEN ELEMENTS:** Stack card "Speed = 6 m/s / Time = 12 min" with step-circle "G". Active Step 1 card with 3 lines.
**ANIMATION DETAILS:** Step 1 card enters at 21.6s (1.0s after the Given morph starts, per the standard breathing gap). `apt.textReveal` on 3 lines: Line 1 (line-level) "Units don't match — convert time" @22.8 (start of "The speed is given..."); Line 2 (line-level) "1 min = 60 sec" @34.0; Line 3 (word-level) "12 min = 12 × 60 = 720 sec" with each token timed to its spoken word (12@37.98, min@37.98, =@39.24, 12@39.7, ×@40.02, 60@40.56, =@41.28, 720 sec@42.84).
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Step 1 → stack morph at 44.2s; the G→1 connector line grows at the same instant.
**EDUCATIONAL PURPOSE:** This is the common-mistake beat — students who skip the unit check use 12 directly and get a wrong answer.
**VISUAL HIERARCHY:** Warning line first (paraphrase), then the actual math.
**ATTENTION MANAGEMENT:** The unit-mismatch warning line sits alone for ~11s of narration build-up before the numeric conversion appears — matches the narration's own pacing (it explains *why* before showing *how*).
**MOTION NOTES:** No new animation types — plain `.rv` word/line reveals only.
**CONTINUITY FROM PREVIOUS SCENE:** The Given card's box is still completing its 0.8s morph into the stack as Step 1's card enters 1s later; the pinned runner icon's ambient bob continues uninterrupted underneath.

---

### SCENE 4 — Step 2: Apply the Formula
**TIMESTAMP:** 45.2 – 61.9s
**VOICEOVER:** "Now that the units are the same, we can use the formula, distance is equal to speed into time. Putting the values, distance is equal to six into 720. After multiplying this, we get 4,320 meter."
**VISUAL OBJECTIVE:** State and apply Distance = Speed × Time.
**SCREEN LAYOUT:** Step 1 now a stack card (badge "1"), connector line G→1 visible. Step 2 active center card, chip "Step 2".
**ON-SCREEN ELEMENTS:** Stack cards G + 1 in left column. Active Step 2 card with formula + substitution.
**ANIMATION DETAILS:** Step 2 card enters 45.2s. `apt.textReveal`: Line 1 (line-level) "Distance = Speed × Time" @48.24 (start of "distance is equal to speed into time"). Line 2 (word-level) "= 6 × 720 = 4320 m": =@53.56, 6@54.06 (hi), ×@54.58, 720@55.28 (hi), =@58.54, "4320 m"@59.14 (ans).
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Step 2 → stack morph at 61.9s; connector line 1→2 grows.
**EDUCATIONAL PURPOSE:** Show the direct formula application now that units agree.
**VISUAL HIERARCHY:** Formula line above, substitution/result below.
**ATTENTION MANAGEMENT:** Numbers highlighted in primary blue as spoken; final "4320 m" in answer blue.
**MOTION NOTES:** Standard `cardEnter` + `textReveal` only.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1's card is mid-morph into the stack (0.8s) as Step 2 opens 1s after the morph starts; the G→1 connector line is still completing its grow-in as the new card settles.

---

### SCENE 5 — Step 3: Convert to Kilometers + Answer Reveal
**TIMESTAMP:** 62.9 – 86.5s
**VOICEOVER:** "Now that we have found the distance in meters, let us convert it into kilometer because all the options are given in kilometer. We know that 1000 meter is equal to one kilometer. So 4,320 divided by 1000 is equal to 4.32 kilometer. So the runner covers 4.32 kilometer. Hence, the correct answer is option B."
**VISUAL OBJECTIVE:** Final unit conversion, then reveal + confirm the correct option.
**SCREEN LAYOUT:** Stack column now shows G, 1, 2. Step 3 active center card. At 83.5s the stack column clears center stage and the pinned question recenters; options grid (2×2) appears on the right.
**ON-SCREEN ELEMENTS:** Step 3 card ("1000 m = 1 km" / "4320 ÷ 1000 = 4.32 km"), then options grid A–D with B highlighted green.
**ANIMATION DETAILS:** Step 3 card enters 62.9s. `apt.textReveal`: Line 1 (line-level) "1000 m = 1 km" @69.2; Line 2 (word-level) "4320 ÷ 1000 = 4.32 km": 4320@73.78, ÷@75.24, 1000@76.1, =@77.3, "4.32 km"@77.82 (ans). Step 3 → stack morph at 82.7s (connector 2→3 grows same time). `apt.fadeOut` on pinned illustration + `apt.recenterForOptions` at 83.5s. `apt.fadeIn` options-reveal at 84.0s, `apt.optionsStagger` at 84.5s, `apt.correctPulse` on option B at 85.8s — timed to land exactly on the spoken word "B." (85.84–86.52). Final synchronized fade of every top-level element at 86.9s (1.2s).
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** End of video — full fade-out.
**EDUCATIONAL PURPOSE:** Confirms the final numeric answer maps to the correct option under time pressure of the closing narration.
**VISUAL HIERARCHY:** Stack column (full G/1/2/3 history) stays visible and unfaded through the reveal — reinforces the full solution path was seen.
**ATTENTION MANAGEMENT:** Correct-option pulse is the last motion in the video, synced to the last two spoken words.
**MOTION NOTES:** Stack cards/circles/connector lines are never faded, even during the recenter — only the pinned illustration drops out (its job is done).
**CONTINUITY FROM PREVIOUS SCENE:** Step 2's connector line (1→2) and stack card are already settled as Step 3 opens; the same left column keeps growing rather than resetting.

---

## PART 3: Asset List Required

- `illustration/runner.svg` — running figure (already provided, colorful character sprite, viewBox 128×128)
- `_template/assets/serial-num-badge.svg` (shared)
- `_template/assets/logo.png` (shared)
- Inline SVG clock icon for the time label (reused pattern from q2, primary-blue stroke)
- No other custom assets — road/labels are pure CSS, matching q2's cyclist-question treatment

## PART 4: Animation Complexity Notes

- Standard helper set only: `heroEnterLowered`, `serialEnter` (inline tandem tween), `roadSweep`, `cardEnter`, `fadeIn`/`fadeOut`, `pinFlow`, `ambientLoop`, `textReveal`, `morphToStack`, `stackLineGrow`, `setStackLine`, `recenterForOptions`, `optionsStagger`, `correctPulse`.
- No new animation types introduced.
- Tightest beat: correct-option pulse (85.8s) must land within the ~3.3s tail after the last step morphs (82.7s) — verified against transcript word timestamps, fits.

## PART 5: Master Timeline Overview

```
0.0    Background layers + bottom strip + topic + logo
0.3    Question card starts lowered, rising at 2.6s
0.8    Serial badge pop (tandem with card)
3.0    Road sweep
3.4    Runner icon enters
3.7    Runner drifts right (linear, 9.3s)
6.0    Speed label "6 m/s"
7.3    Time label "12 min"
13.3   PIN_TIME — question + illustration glide to pinned slots
14.5   Ambient bob starts on pinned runner icon
16.4   GIVEN_TIME — Given card enters, 2 lines reveal
20.6   Given → stack morph (0.8s)
21.6   Step 1 card enters — unit mismatch warning + conversion math
44.2   Step 1 → stack morph (0.8s), G→1 line grows
45.2   Step 2 card enters — formula + substitution
61.9   Step 2 → stack morph (0.8s), 1→2 line grows
62.9   Step 3 card enters — km conversion
82.7   Step 3 → stack morph (0.8s), 2→3 line grows
83.5   Recenter — pinned illustration fades out, question shifts right
84.0   Options grid fades in
84.5   Options stagger in
85.8   Correct option (B) pulses — synced to "option B."
86.9   Full synchronized fade-out (1.2s)
89.0   End
```
