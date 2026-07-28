# Storyboard — Speed, Time and Distance Q37

**A tour bus covers 150 km at 75 km/hr, halts for 30 minutes, and returns the same 150 km at 50 km/hr. Find the average speed including the halt.**
**Options:** A) 50 km/hr  B) 52 km/hr  C) 56 km/hr  D) 54 6/11 km/hr ✅ correct
**Solution:** Total distance = 150+150 = 300 km. Time onward = 150/75 = 2 hr. Time return = 150/50 = 3 hr. Halt = 30 min = 0.5 hr. Total time = 2+3+0.5 = 5.5 hr. Average speed = 300 ÷ 5.5 = 600/11 = 54 6/11 km/hr.
**Voiceover duration:** 107.959s
**Topic name:** "Speed, Time and Distance"

Structural hybrid of two siblings: the illustration borrows [q18](../q18/index.html)'s literal point-A-to-point-B-**and-back** drive (the car/bus's x-position IS the story — two bespoke `gsap.to(x:...)` tweens, not a parked icon) and grafts on [q7](../q7/index.html)'s halt technique (brake squash + badge swap + clock-hand sweep) at the turnaround point, since this is the first sibling that is BOTH a round trip AND has a mid-journey halt. Illustration asset: `illustration/bus.svg`, copied verbatim from [q7](../q7/illustration/bus.svg) (already brand-colored, `#6373db` body). Given card opens early in Phase 1 (below the illustration, same frame) and is fully populated by the time the pin fires — the same "no re-entry needed, straight morph into stack" pattern used in [q31](../q31/index.html). With 1 Given + 4 Steps (Total Distance, Time for Each Leg, Total Time incl. Halt, Average Speed), this sits at the upper end of the README's "1 Given + 2–4 Steps" allowance, justified because the problem genuinely has four distinct arithmetic stages that the narration itself separates with clear pauses.

---

## PART 1: Narration Beat Analysis

| # | Time (s) | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|----------|-----------|----------------------|------------------|-------------------|
| 1 | 0.14–3.32 | "So welcome back again. Time for one more problem." | Cold open / hook | Center screen | QuestionCard hero rises into view |
| 2 | 3.74–11.44 | "Now in this problem, we are given that a tour bus covers one hundred fifty kilometer at a speed of seventy-five kilometer per hour." | State the onward leg | Road + bus, driving out | Road/depot build in; bus drives out; "150 km" then "75 km/hr" tags appear on the bus as it travels; Given lines 1–2 fill in |
| 3 | 11.98–13.50 | "Then it halts for thirty minutes." | State the halt — THE key visual beat | The stop itself | Bus brakes hard at the destination marker; badge swaps to "Halted"; clock pops in; Given line 3 reveals |
| 4 | 13.90–20.06 | "After that, it returns the same one hundred and fifty kilometer at a speed of fifty kilometer per hour." | State the return leg | Bus driving back | Clock/halt badge clear; bus flips and drives back at the new (slower) speed; "50 km/hr" tag; Given line 4 reveals |
| 5 | 20.56–23.86 | "The question is asking us to find the average speed, including the halt." | State the ask | Question text, parked bus | Bus idle at origin; endpoints pulse; "Average Speed = ?" ghost fades in |
| 6 | 24.34–29.10 | "So we know the formula, average speed is equal to total distance divided by total time." | Bridge into solving + state the master formula | Transition → Step 1 card | Phase 1→2 pin fires; Given morphs straight to stack "G"; Step 1 card opens with the formula as its first line |
| 7 | 29.42–47.68 | "So first, let us find the total distance. The bus travels 150 km onward and another 150 km returning. So total distance is 150 plus 150. That gives us 300 km. Now let us find the total time." | Step 1: total distance | Step 1 card math | 150 + 150 resolves to 300 km |
| 8 | 48.14–66.20 | "We know time is equal to distance divided by speed. For the onward journey, time is 150 divided by 75, which gives 2 hours. Now let us find the time for the return journey. Time is 150 divided by 50, which gives 3 hours." | Step 2: time for each leg | Step 2 card math | Onward 150÷75=2 hr, then Return 150÷50=3 hr |
| 9 | 66.64–80.76 | "We are also given that the bus halts for thirty minutes. Thirty minutes means 0.5 hour. Now we have all the time values. So total time is 2 plus 3 plus 0.5. That gives us 5.5 hours." | Step 3: total time including halt | Step 3 card math | Halt converts to 0.5 hr; 2+3+0.5 resolves to 5.5 hr |
| 10 | 81.16–98.14 | "Now we have everything we need. Average speed is equal to total distance divided by total time. Putting the values, average speed is 300 divided by 5.5. After simplifying, we get 600 by 11, which is 54 and 6 by 11 kilometer per hour." | Step 4: final average speed | Step 4 card math | 300÷5.5 → 600/11 → 54 6/11 km/hr |
| 11 | 98.34–107.96 | "So the average speed of the bus, including the halt, is 54 and 6 by 11 kilometer per hour. Hence, the correct answer is option D." | Final answer + reveal | Options grid, option D | Options grid appears, D pulses green |

---

## PART 2: Scene-by-Scene Storyboard

Design constraints in force throughout (per `_template/README.md` §4D.1): only `--primary #6373db`, `--primary-light #e2e5ff`, `--success #4eb85f`, `--topic #949494`, `--text #000000`, `--bg #FFFFFF`; only `QuestionCard`/`SerialNum`/`SolutionCard`/`SolutionStackCard`/`solutionChip`/`StepCircle`/`StackLine`/options-grid/`logo`/`topic-name`/`bottomStrip`/Illustration/Fraction; only the helpers in `animations.js`.

### SCENE 1 — Hero Question Open
**TIMESTAMP:** 0.0 – 3.6s
**VOICEOVER:** "So welcome back again. Time for one more problem."
**VISUAL OBJECTIVE:** Establish the question card as the sole focal point.
**SCREEN LAYOUT:** `#q-full-card` centered, starts lowered (`apt.heroEnterLowered`, offsetY 180), containing: *"A tour bus covers 150 km at 75 km/hr, halts for 30 minutes, and returns the same 150 km at 50 km/hr. Find the average speed, including the halt."* with `150 km`, `75 km/hr`, `30 minutes`, `50 km/hr`, and `average speed` in `--primary` via `.num` spans.
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.6)` — lowered pose settles at 0.3s (0.7s, `back.out(1.4)`), rises to rest at RISE_TIME=3.6 (0.6s, `power2.inOut`), landing right as "problem." finishes. `#serial-num` badge pops at 0.8s (`back.out(2)`, mirrored y-offset), rises in tandem at 3.6.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Hard cut in from background layers at t=0.
**EDUCATIONAL PURPOSE:** Cold open, orients viewer to the full problem before any illustration.
**VISUAL HIERARCHY:** QuestionCard > SerialNum > background layers.
**ATTENTION MANAGEMENT:** Single element on screen.
**MOTION NOTES:** The rise reads as "question locked in" right as "problem." ends.
**CONTINUITY FROM PREVIOUS SCENE:** N/A — opening scene.

---

### SCENE 2 — Onward Leg: Bus Drives Out at 75 km/hr
**TIMESTAMP:** 3.6 – 11.98s
**VOICEOVER:** "Now in this problem, we are given that a tour bus covers one hundred fifty kilometer at a speed of seventy-five kilometer per hour."
**VISUAL OBJECTIVE:** Ground the onward leg in a literal driven trip — not a parked icon — while the Given card fills in the same two values live, mirroring `q18`'s "car's x-position IS the story" technique.
**SCREEN LAYOUT:** `.trip-scene` (1300×260px) centered in `#illustration`: `#origin-marker` (small filled circle + "Start" label, `--topic` grey) at the left edge, `#road` (flat black bar, `roadSweep`-in) spanning the middle, `#dest-marker` (small filled circle + "Destination" label) at the right edge, `#bus-icon` (`illustration/bus.svg`, ~170px) riding the road. `#card-given .solution-card` at `left:640px; top:715px`, alongside the illustration (opens early, doesn't wait for the pin).
**ON-SCREEN ELEMENTS:** `#origin-marker` and `#dest-marker` fade/scale in at 3.9s. `#road` sweeps in at 4.0s (`apt.roadSweep`, 0.9s). `#bus-icon` pops in at the origin at 4.5s (`back.out(1.4)`). `#speed-badge` above the bus reading "75 km/hr" (hidden until 9.719). `#dist-badge` above the bus reading "150 km" (hidden until 6.899). Given card box pops in at 5.0s; line 1 "Distance (each way) = 150 km" reveals at 6.899; line 2 "Speed (onward) = 75 km/hr" reveals at 9.719.
**ANIMATION DETAILS:** `apt.cardEnter(tl, "#card-given .solution-card", 5.0)`, `apt.textReveal(tl, "#card-given .math")` with the two line-level reveals above. `#dist-badge` `fromTo` y:-14→0 + opacity 0→1, 0.45s, `back.out(2)`, at 6.899 (word "one" of "one hundred fifty kilometer"), traveling with the bus via a shared wrapper. `#speed-badge` same treatment at 9.719 (word "seventy-five"). Bus drive: `tl.to("#bus-wrap", {x: ROAD_TRAVEL, duration: 6.5, ease: "power1.inOut"}, 4.9)` — lands at `#dest-marker` right as "...per hour." finishes (11.439).
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Continuous build, no cuts.
**EDUCATIONAL PURPOSE:** Anchors the onward distance and speed to an actual visible trip, fully populates two Given lines ahead of the pin.
**VISUAL HIERARCHY:** QuestionCard (top, at rest) > bus + tags (moving, primary) > Given card (building) > road/markers (secondary).
**ATTENTION MANAGEMENT:** Each tag + matching Given line appears exactly when its number is spoken.
**MOTION NOTES:** `power1.inOut` easing so the drive doesn't read as mechanical.
**CONTINUITY FROM PREVIOUS SCENE:** The question card is already at rest (Scene 1's rise completed at 3.6s); this scene only adds the illustration + Given card beneath it.

---

### SCENE 3 — The Halt (30 Minutes) ★ key visual beat
**TIMESTAMP:** 11.98 – 13.90s
**VOICEOVER:** "Then it halts for thirty minutes."
**VISUAL OBJECTIVE:** Make the 30-minute halt physically legible at the destination marker, the same technique `q7` uses for its mid-route stop.
**SCREEN LAYOUT:** Bus is parked at `#dest-marker` (arrival landed at 11.439, just before this scene starts). `#halt-clock` (small clock face + hand, reused CSS pattern from `q7`'s `#stop-clock`/`#clock-hand`) pops in beside the bus.
**ON-SCREEN ELEMENTS:** Brake squash on `#bus-wrap` (`scaleX 1→1.07`, `scaleY 1→0.93`, yoyo) at 11.98s, with two `.skid-mark` flashes. `#speed-badge` ("75 km/hr") fades out; `#halt-badge` ("Halted") fades in, same beat. `#halt-clock` pops in at 12.1s; `#halt-label` ("30 min halt") fades in at 12.84 (word "thirty"). Given line 3 "Halt = 30 min" reveals at 12.84 (same timestamp).
**ANIMATION DETAILS:** `apt.cardEnter(tl, "#halt-clock", 12.1)`. `#clock-hand` rotates 0°→90° on a single bounded tween (`ease:"none"`) from 12.1s→14.6s (spans this scene + the "After that," bridge).
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Continuous — direct kinetic continuation of Scene 2's arrival.
**EDUCATIONAL PURPOSE:** Anchors the halt duration (which later becomes 0.5 hr in Step 3) to a concrete, visible stop.
**VISUAL HIERARCHY:** Halt clock + badge (new, primary) > parked bus > road/markers.
**ATTENTION MANAGEMENT:** Single new element (the clock) — no competing motion.
**MOTION NOTES:** Brake squash is quick (~0.3s) so it doesn't compete with the clock pop that follows immediately.
**CONTINUITY FROM PREVIOUS SCENE:** Same `#bus-wrap` that just finished its drive-in — the squash is its very next motion, not a re-entrance.

---

### SCENE 4 — Return Leg: Bus Drives Back at 50 km/hr
**TIMESTAMP:** 13.90 – 20.56s
**VOICEOVER:** "After that, it returns the same one hundred and fifty kilometer at a speed of fifty kilometer per hour."
**VISUAL OBJECTIVE:** Reverse the trip — bus turns around and drives back, visibly slower, mirroring `q18` Scene 3's flip-and-return technique, with the halt cleared first.
**SCREEN LAYOUT:** Same `.trip-scene`, bus now at `#dest-marker`, about to drive back to `#origin-marker`.
**ON-SCREEN ELEMENTS:** `#halt-clock` + `#halt-label` fade out; `#halt-badge` → `#speed-badge` (now reading "50 km/hr"). `#bus-icon` flipped (`scaleX:-1`) to face the origin.
**ANIMATION DETAILS:** At 14.1s: `apt.fadeOut(tl, "#halt-clock", 14.1, 0.3)`, `tl.to("#halt-badge", {opacity:0, duration:0.3}, 14.1)`, `tl.to("#speed-badge", {opacity:1, duration:0.3}, 14.1)`, `gsap.set("#bus-icon", {scaleX:-1})`. `#speed-badge` text swaps to "50 km/hr", fading in with the badge at 18.68 (word "fifty" — matches the new value being spoken, badge itself already visible/blank-swapped at 14.1 so the bus doesn't idle unlabeled). Drive: `tl.to("#bus-wrap", {x: 0, duration: 5.2, ease: "power1.inOut"}, 14.9)` — lands back at `#origin-marker` right as "...per hour." finishes (20.059). Given line 4 "Speed (return) = 50 km/hr" reveals at 18.68.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Continuous — same bus, same road.
**EDUCATIONAL PURPOSE:** Shows literally that the return covers the SAME distance, at a different (slower) speed — the fact that drives the two separate time calculations in Step 2.
**VISUAL HIERARCHY:** Bus (flipped, moving) + speed tag > road/markers.
**ATTENTION MANAGEMENT:** The flip is the visual cue that direction has reversed.
**MOTION NOTES:** Same `power1.inOut` ease as the outbound leg for visual consistency; drive duration (5.2s) is fit to this leg's own narration window, not literally proportional to the 75:50 speed ratio (same simplification `q18` makes — the speed difference reads through the on-screen label, not relative drive speed).
**CONTINUITY FROM PREVIOUS SCENE:** The bus is the literal same element from Scenes 2–3, now departing from where it just halted.

---

### SCENE 5 — Framing the Question
**TIMESTAMP:** 20.56 – 24.34s
**VOICEOVER:** "The question is asking us to find the average speed, including the halt."
**VISUAL OBJECTIVE:** Bus is parked back at the origin; hold a beat and pose the unknown before solving begins.
**SCREEN LAYOUT:** Same `.trip-scene`, bus at rest at `#origin-marker` (flipped back to its normal orientation).
**ON-SCREEN ELEMENTS:** `#origin-marker` + `#dest-marker` get one soft synchronized pulse (scale 1→1.06→1, yoyo). A ghost line "Average Speed = ?" fades in centered beneath the road, in `--topic` grey.
**ANIMATION DETAILS:** At 20.7s: `gsap.set("#bus-icon", {scaleX:1})` (flip back, invisible mid-idle). Pulse on `#origin-marker, #dest-marker` together at 20.8s. `apt.fadeIn(tl, "#avg-ghost", 22.359)` (word "average").
**CAMERA MOVEMENT:** None. **TRANSITIONS:** None — same scene, holding.
**EDUCATIONAL PURPOSE:** Explicitly names the unknown before any algebra appears.
**VISUAL HIERARCHY:** Ghost text > pulsed endpoints > idle bus/road.
**ATTENTION MANAGEMENT:** No new motion competes with the pulse+ghost-text beat.
**MOTION NOTES:** The pulse is the ONLY emphasis in this scene.
**CONTINUITY FROM PREVIOUS SCENE:** The bus's arrival home (end of Scene 4's return drive, 20.059s) settles for ~0.5s before this scene's pulse fires — a deliberate short breathing gap.

---

### SCENE 6 — Pin Flow + Step 1: Total Distance
**TIMESTAMP:** 24.34 – 46.20s
**VOICEOVER:** "So we know the formula, average speed is equal to total distance divided by total time. So first, let us find the total distance. The bus travels 150 km onward and another 150 km returning. So total distance is 150 plus 150. That gives us 300 km."
**VISUAL OBJECTIVE:** Clear the stage (question + illustration glide to pinned slots, Given morphs straight to stack) and open Step 1 with the master formula as its bridging first line, then compute the total distance.
**SCREEN LAYOUT:** `PIN_TIME = 24.34`. `#q-pinned` at `left:385px; top:30px; width:1275px`. `#illus-pinned` at `left:280px; top:190px` (shrunk single-row recap: small bus icon between two dots, centered per design.md's single-icon-recap rule). `#card-step1 .solution-card` centered `left:640px; top:470px`.
**ON-SCREEN ELEMENTS:** Question + illustration glide to pinned slots. Given card (already fully populated since 18.68s) morphs straight into its stack badge "G" — no re-entry needed. Step 1 card opens, chip "Step 1", math:
```
Avg Speed = Total Distance ÷ Total Time
150 + 150 =
= 300 km
```
**ANIMATION DETAILS:** `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 24.34)`, `apt.pinFlow(tl, "#illustration", "#illus-pinned", 24.34)`, `apt.fadeOut(tl, "#serial-num", 24.34, 0.5)`, `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 24.34)`. `apt.cardEnter(tl, "#card-step1 .solution-card", 25.14)`. `apt.textReveal(tl, "#card-step1 .math")`:
- Line 1 "Avg Speed = Total Distance ÷ Total Time" — **line-level**, `data-t=25.659` ("average speed is equal to total distance divided by total time" — the formula bridge).
- Line 2 "150 + 150 =" — **word-level**: "150" at 41.579 ("one hundred fifty" in "total distance is one hundred fifty plus one hundred fifty"), "+150" at 42.419.
- Line 3 "= 300 km" (`.ans`) — **word-level**: "300" at 44.619 ("three hundred kilometers").
**CAMERA MOVEMENT:** The pin-flow glide. **TRANSITIONS:** `apt.pinFlow` (0.8s), `apt.morphToStack` (0.8s), both at PIN_TIME.
**EDUCATIONAL PURPOSE:** Delivers the master formula once, cleanly, then applies its first term (total distance).
**VISUAL HIERARCHY:** Step 1 card (center, primary) > pinned question (top) > pinned bus recap (ambient).
**ATTENTION MANAGEMENT:** The `300 km` answer reveal is timed precisely to its spoken moment.
**MOTION NOTES:** Given stack card remains visible for the rest of the video (never faded). This is a long single card (~21s) because it carries both the formula bridge AND the "let us find total distance" narration — no natural break point exists between them.
**CONTINUITY FROM PREVIOUS SCENE:** Both `pinFlow` glides land at 25.14s, exactly when Step 1's card begins entering — the pinned bus recap settles as the first line of math appears.

---

### SCENE 7 — Step 2: Time for Each Leg
**TIMESTAMP:** 46.20 – 66.64s
**VOICEOVER:** "Now let us find the total time. We know time is equal to distance divided by speed. For the onward journey, time is equal to 150 divided by 75. This gives us 2 hours. Now let us find the time for the return journey. Time is equal to 150 divided by 50. This gives us 3 hours."
**VISUAL OBJECTIVE:** Apply the Time = Distance ÷ Speed formula to both legs in turn, the same formula the two illustrated drives (Scenes 2 and 4) already grounded.
**SCREEN LAYOUT:** `#stack-step1 .stack-card` joins the column. `#card-step2 .solution-card` centered `left:600px; top:440px; width:720px`.
**ON-SCREEN ELEMENTS:** Step 1 stack card (badge "1") joins the column; `.stack-line` connector `#line-g-1` grows between badges "G" and "1". Step 2 card opens, chip "Step 2", math:
```
Time = Distance ÷ Speed
Onward: 150 ÷ 75 = 2 hr
Return: 150 ÷ 50 = 3 hr
```
**ANIMATION DETAILS:**
- `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 46.2)` — 0.8s, completes 47.0s.
- `apt.stackLineGrow(tl, "#line-g-1", 46.2)`.
- `apt.cardEnter(tl, "#card-step2 .solution-card", 48.0)`.
- `apt.textReveal(tl, "#card-step2 .math")`:
  - Line 1 "Time = Distance ÷ Speed" — **line-level**, `data-t=48.139` ("We know time is equal to distance divided by speed").
  - Line 2 "Onward: 150 ÷ 75 = 2 hr" — **word-level**: "150" at 53.739, "÷75" at 55.699, "= 2 hr" at 57.479.
  - Line 3 "Return: 150 ÷ 50 = 3 hr" — **word-level**: "150" at 62.139, "÷50" at 63.719, "= 3 hr" at 65.479.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Standard morph + stack-line grow.
**EDUCATIONAL PURPOSE:** Computes both leg times, the two building blocks Step 3's sum needs.
**VISUAL HIERARCHY:** Step 2 card (center) > Step 1 + Given stack (left, both visible).
**ATTENTION MANAGEMENT:** Onward result then return result reveal in the same order as the two illustrated drives.
**MOTION NOTES:** ~20s hold, kept alive by three sequential word-synced reveals rather than needing `ambientLoop`.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1's card is still completing its shrink into the stack as Step 2's cardEnter begins fading in ~0.8s later.

---

### SCENE 8 — Step 3: Total Time (Including the Halt)
**TIMESTAMP:** 66.64 – 81.16s
**VOICEOVER:** "We are also given that the bus halts for thirty minutes. Thirty minutes means 0.5 hour. Now we have all the time values. So total time is 2 plus 3 plus 0.5. That gives us 5.5 hours."
**VISUAL OBJECTIVE:** Convert the illustrated halt into hours and sum all three time values into the total.
**SCREEN LAYOUT:** `#stack-step2 .stack-card` joins the column. `#card-step3 .solution-card` centered `left:620px; top:460px; width:680px`.
**ON-SCREEN ELEMENTS:** Step 2 stack card (badge "2") joins column; `#line-1-2` connector grows. Step 3 card, chip "Step 3", math:
```
Halt = 30 min = 0.5 hr
Total Time = 2 + 3 + 0.5 =
= 5.5 hr
```
**ANIMATION DETAILS:**
- `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 66.2)` — 0.8s.
- `apt.stackLineGrow(tl, "#line-1-2", 66.2)`.
- `apt.cardEnter(tl, "#card-step3 .solution-card", 66.639)`.
- `apt.textReveal(tl, "#card-step3 .math")`:
  - Line 1 "Halt = 30 min = 0.5 hr" — **word-level**: "30 min" at 68.379 ("the bus halts for thirty minutes"), "= 0.5 hr" at 70.699 ("zero point five hour").
  - Line 2 "Total Time = 2 + 3 + 0.5 =" — **word-level**: "2" at 75.18, "+3" at 76.799, "+0.5" at 77.839.
  - Line 3 "= 5.5 hr" (`.ans`) — **word-level**: "5.5" at 79.68 ("five point five hours").
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Standard morph + stack-line grow.
**EDUCATIONAL PURPOSE:** The step most likely to trip a student up (forgetting the halt) — makes the +0.5 hr term explicit and visible, directly payoff of Scene 3's illustrated stop.
**VISUAL HIERARCHY:** Step 3 card (center) > Step 1/2 + Given stack (left, all visible).
**ATTENTION MANAGEMENT:** Halt conversion lands first (recalling Scene 3), then the three-term sum.
**MOTION NOTES:** No `ambientLoop` needed — the halt-conversion + sum sequence fills the hold naturally.
**CONTINUITY FROM PREVIOUS SCENE:** Step 2's card is mid-text-fade as Step 3's cue fires; stack column now shows three connected circles (G→1→2).

---

### SCENE 9 — Step 4: Average Speed + Options Reveal
**TIMESTAMP:** 81.16 – 107.96s
**VOICEOVER:** "Now we have everything we need. Average speed is equal to total distance divided by total time. Putting the values, average speed is 300 divided by 5.5. After simplifying, we get 600 by 11, which is 54 and 6 by 11 kilometer per hour. So the average speed of the bus, including the halt, is 54 and 6 by 11 kilometer per hour. Hence, the correct answer is option D."
**VISUAL OBJECTIVE:** Substitute both totals into the master formula, simplify to the final fraction, and reveal the correct option.
**SCREEN LAYOUT:** `#stack-step3 .stack-card` joins column. `#card-step4 .solution-card` centered `left:600px; top:450px; width:720px`. `.pinned-col` options grid at `top:400px`.
**ON-SCREEN ELEMENTS:** Step 3 stack card (badge "3") joins column; `#line-2-3` connector grows. Step 4 card, chip "Step 4", math:
```
Average Speed = Total Distance ÷ Total Time
= 300 ÷ 5.5
= 600/11
= 54 6/11 km/hr
```
Then: illustration recap fades, stack column stays visible, options grid (A 50 km/hr / B 52 km/hr / C 56 km/hr / D 54 6/11 km/hr) fades in with D highlighted green.
**ANIMATION DETAILS:**
- `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 81.159)` — 0.8s.
- `apt.stackLineGrow(tl, "#line-2-3", 81.159)`.
- `apt.cardEnter(tl, "#card-step4 .solution-card", 82.839)`.
- `apt.textReveal(tl, "#card-step4 .math")`:
  - Line 1 "Average Speed = Total Distance ÷ Total Time" — **line-level**, `data-t=82.839` (formula restated, "Average speed is equal to total distance divided by total time").
  - Line 2 "= 300 ÷ 5.5" — **word-level**: "300" at 88.959, "5.5" at 90.299.
  - Line 3 "= 600/11" — **word-level**, `data-t=93.059` ("six hundred by eleven").
  - Line 4 "= 54 6/11 km/hr" (`.ans`) — **word-level**, `data-t=95.479` ("fifty-four and six by eleven kilometer").
- `RECENTER_TIME = 98.339` (right as "So the average speed of the bus, including the halt," begins, restating the answer) — `apt.fadeOut(tl, "#illus-pinned", 98.339)`, `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 98.339)`.
- `apt.morphToStack(tl, "#card-step4 .solution-card", "#stack-step4 .stack-card", 98.339)`, `apt.stackLineGrow(tl, "#line-3-4", 98.339)`.
- `apt.fadeIn(tl, "#options-reveal", 99.139)`.
- `apt.optionsStagger(tl, ".opt-btn", 99.7)`.
- `apt.correctPulse(tl, ".opt-btn.correct", 107.5)` (lands right on "option D." finishing at 107.959).
- `END_FADE_TIME = 109.2` — `apt.fadeOut(tl, "#root > div", 109.2, 1.2)`.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Final morph + recenter glide + options stagger + pulse, then synchronized full-frame fade-out.
**EDUCATIONAL PURPOSE:** Delivers the final substitution/simplification and confirms the answer against the actual MCQ options.
**VISUAL HIERARCHY:** Step 4 card → options grid (sequential focal shift) > full stack column (G/1/2/3/4) > pinned question.
**ATTENTION MANAGEMENT:** `correctPulse` on option D is the terminal focal point.
**MOTION NOTES:** The narration restates the answer twice ("54 and 6 by 11 kilometer per hour" then "option D") in a long final sentence — recenter fires early (98.339s) to leave enough runway for the full options sequence before the voiceover ends at 107.959s.
**CONTINUITY FROM PREVIOUS SCENE:** Step 3's card is mid-text-fade as Step 4's cue fires, exactly as in Scenes 7→8; the stack column's G→1→2→3 chain extends to G→1→2→3→4 by scene end.

---

## PART 3: Asset List Required

- `illustration/bus.svg` — copied verbatim from [q7](../q7/illustration/bus.svg), already brand-colored (`#6373db` body, `#e2e5ff` windows, `#141515` outline). Used as-is, mirrored (`transform: scaleX(-1)`) on the return leg so it faces the direction of travel, same technique as q7/q18's car flip.
- `#origin-marker` / `#dest-marker` — pure CSS dots + labels, no new SVG (reused pattern from q18's endpoint markers, simplified to dots since no house/office asset fits a bus depot/destination).
- `#road` — pure CSS (`roadSweep`-in bar), reused pattern from q6/q10/q13/q18/q30.
- `#halt-clock` / `#clock-hand` / `#halt-badge` / `.skid-mark` — pure CSS, reused pattern from q7's stop-clock technique, renamed for this question's destination-halt context (q7's stop is mid-route at a fixed sign; here it's at the turnaround point).
- All cards/chips/options/logo/serial-badge — existing shared components from `_template/assets/` and `design-system.css`. No new components introduced.

## PART 4: Animation Complexity Notes

- Standard patterns only: `heroEnterLowered`, `roadSweep`, `pinFlow` (×2, paired), `cardEnter` (×6), `textReveal` (×5), `morphToStack` (×5), `stackLineGrow` (×4), `setStackLine` (×4), `fadeIn`/`fadeOut`, `recenterForOptions`, `optionsStagger`, `correctPulse`.
- Two bespoke (non-`animations.js`) tweens, both point-to-point drives: the onward leg (Scene 2, `#bus-wrap` x-tween) and the return leg (Scene 4, same wrapper, reversed) — same technique as `q18`'s house↔office drive, since no shared point-to-point-travel helper exists in `animations.js`. Per design.md's "per-question custom CSS/JS for illustration content" allowance.
- One bespoke halt tween: `#clock-hand` rotation (12.1s→14.6s, single bounded, non-repeating), reused directly from `q7`'s `#clock-hand` technique.
- The onward drive (6.5s) and return drive (5.2s) durations are NOT literally proportional to the 75:50 speed ratio — each is fit to its own narration window instead, same simplification `q18` makes explicitly (flagged there, not re-litigated here).
- No `apt.ambientLoop` used — every phase (illustration build, halt, pinned solving) has its own active motion (drives, clock sweep, sequential text reveals) filling the hold; no long dead stretch exists that would need a bob.
- No `apt.stepFlow` used (correctly dropped per README §4D.1).
- No double-animation risk: text-reveal-driven cards never also get `emphasize`/`resultReveal`.
- 4 solution steps (Given + Step 1–4 = 5 cards total in the stack column: G, 1, 2, 3, 4) — at the upper end of the README's "typically 1 Given + 2–4 Steps" range, justified by the problem's four genuinely distinct arithmetic stages (total distance, two leg-times, total time with halt, final division) each getting its own clearly-paused narration beat.

## PART 5: Master Timeline Overview

```
0.0    Phase 1 starts — QuestionCard hero (lowered) enters
0.8    SerialNum badge pop
3.6    QuestionCard + badge rise to resting position
3.9    Origin + destination markers fade in
4.0    Road sweeps in
4.5    Bus icon pops in at origin
4.9    Bus begins onward drive (6.5s, lands 11.4s)
5.0    Given card box enters
6.899  "150 km" dist tag + Given line 1
9.719  "75 km/hr" speed tag + Given line 2
11.439 Bus arrives at destination
11.98  Brake squash — bus halts
12.1   Halt clock pops in; clock-hand sweep begins (→14.6)
12.84  "30 min halt" label + Given line 3
14.1   Halt clock/badge clear; bus flips
14.9   Bus begins return drive (5.2s, lands 20.06s)
18.68  "50 km/hr" speed tag + Given line 4
20.06  Bus arrives back at origin
20.7   Bus flips back to normal orientation
20.8   Origin/destination markers pulse
22.359 "Average Speed = ?" ghost fades in
[ PIN_TIME = 24.34 ]
24.34  pinFlow: question + illustration glide to pinned slots (0.8s); Given → stack morph
25.14  Step 1 card enters (formula bridge + total distance)
25.659 Step 1 line 1 (formula recap)
41.579–44.619  Step 1 addition resolves (150+150=300 km)
[ 46.2 ]  Step 1 → stack morph + line-g-1 grows
48.0   Step 2 card enters (time for each leg)
48.139 Step 2 formula line
53.739–57.479  Onward time resolves (150÷75=2 hr)
62.139–65.479  Return time resolves (150÷50=3 hr)
[ 66.2 ]  Step 2 → stack morph + line-1-2 grows
66.639 Step 3 card enters (total time incl. halt)
68.379–70.699  Halt converts to hours (30 min = 0.5 hr)
75.18–79.68  Total time resolves (2+3+0.5=5.5 hr)
[ 81.159 ]  Step 3 → stack morph + line-2-3 grows
82.839 Step 4 card enters (average speed)
82.839 Step 4 formula line
88.959–90.299  Substitution (300÷5.5)
93.059 Simplify (600/11)
95.479 Final answer (54 6/11 km/hr)
[ RECENTER_TIME = 98.339 ]
98.339 illus-pinned fades out; q-pinned recenters; Step 4 → stack morph + line-3-4 grows
99.139 options-reveal fades in
99.7   options stagger in
107.5  correctPulse on option D
[ END_FADE_TIME = 109.2 ]  full-frame fade out (1.2s)
~110.4 End
```
