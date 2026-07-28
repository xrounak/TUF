# Storyboard — Speed-Time-Distance Q32
**A vehicle travels 120 km at 60 km/hr, then 180 km at 90 km/hr — find average speed**

Video length: **81.299s** (voiceover duration) — RECENTER_TIME 73.4s, correct pulse 80.64s, END_FADE_TIME ≈ 81.8s, clip tail to ~83.5s.
Topic name: **"Speed, Time and Distance"**

Close sibling of [q23](../q23/storyboard.md) — same proportional multi-segment road + car icon + compact-given recap + Given-enters-early/morphs-late technique — simplified to **two** segments instead of three (120:180 = 2:3 of the road), and re-ordered per this question's own narration: unlike q23 (which sums distance first, then derives time per part), this script derives **time per part first**, then sums total time AND total distance together in one breath (they're spoken back-to-back with no pause), and only then divides for the average speed. No common-mistake guardrail line exists in this script (unlike q23's "NOT the average of 3 speeds!"), so Scene 3 states the ask + formula only, no warning tag.

---

## PART 1: Narration Beat Analysis

| # | Time (s) | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|----------|-----------|----------------------|------------------|-------------------|
| 1 | 0.12–2.78 | "So welcome back again. Time for one more problem." | Cold open / hook | Center screen | QuestionCard hero rises into view |
| 2 | 3.32–15.76 | "Now, in this problem, we are given that a vehicle travels one hundred twenty kilometer at sixty kilometer per hour, then it travels another one hundred eighty kilometer at ninety kilometer per hour." | State both journey legs | Road segments (left→right) | Segment 1 (120 km @ 60 km/hr, smaller car) then Segment 2 (180 km @ 90 km/hr, bigger car) pop in; Given card mirrors both lines |
| 3 | 16.36–23.86 | "The question is asking us to find the average speed for the complete journey. Average speed is equal to total distance divided by total time." | State the ask + lock the correct formula | Illustration area (ghost banner + formula) | "Find: Average Speed = ?" banner fades in, then formula word-reveals beneath the road |
| 4 | 24.34–27.60 | "So first, let us find the time taken for each part of the journey." | Bridge into computation | — | pinFlow fires; Given card morphs to stack |
| 5 | 28.14–43.54 | "We know time is equal to distance divided by speed. For the first part, time is equal to one hundred twenty divided by sixty. This gives us two hours. For the second part, time is equal to one hundred eighty divided by ninety. This also gives us two hours." | Step 1 — time per part (same 2 hr twice, a deliberate symmetry) | Step 1 card | Formula, then two parallel divisions both landing on 2 hr |
| 6 | 43.98–58.50 | "So the total time is equal to two plus two, four hours, and the total distance is equal to one hundred twenty plus one hundred eighty. That is equal to three hundred kilometers. Now we have everything we need." | Step 2 — total time AND total distance (spoken in one continuous breath, no pause between them) | Step 2 card | 2+2=4 hr lands first, then 120+180=300 km directly beneath it |
| 7 | 59.14–72.98 | "Average speed is equal to total distance divided by total time. Putting the values, average speed is equal to three hundred divided by four. After simplifying this, we get seventy-five kilometer per hour." | Step 3 — final division | Step 3 card | Formula restated → 300÷4 substitution → boxed 75 km/hr |
| 8 | 73.40–81.30 | "So the average speed for the complete journey is seventy-five kilometer per hour. Hence, the correct answer is option D." | Confirm result + reveal correct option | Options grid | Illustration drops, question recenters, options stagger in, D pulses green |

---

## PART 2: Scene-by-Scene Storyboard

Design constraints per `_template/README.md` §4D.1 in force throughout: only `--primary #6373db`, `--primary-light #e2e5ff`, `--success #4eb85f`, `--topic #949494`, `--text #000000`, `--bg #FFFFFF`; only the components listed in the README; only `animations.js` helpers, called explicitly by name. The illustration (2-segment road + car icons + ghost/formula tags) is per-question custom markup/CSS, reusing the user-supplied `illustration/car.svg` (used as-is, no recoloring — its own fills are already the brand `--primary` blue and compatible blue-greys).

### SCENE 1 — Hero Question Open
**TIMESTAMP:** 0.0 – 3.32s
**VOICEOVER:** "So welcome back again. Time for one more problem."
**VISUAL OBJECTIVE:** Establish the question card as the sole focal point, vertically centered while alone in frame.
**SCREEN LAYOUT:** `#q-full-card` centered horizontally at `left:50%`, starts lowered (`heroEnterLowered`, offsetY 180).
**ON-SCREEN ELEMENTS:** Dotted grid, bottom strip, topic name "Speed, Time and Distance" (bottom-left), logo (bottom-right), SerialNum badge "Q" (top-left, follows card's lowered position), QuestionCard containing: *"A vehicle travels 120 km at 60 km/hr, then 180 km at 90 km/hr. Find its average speed for the complete journey."* with `120 km`, `60 km/hr`, `180 km`, `90 km/hr`, `average speed` in `--primary` blue via `.num` spans.
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.0)` — fromTo lowered+scaled+faded to resting lowered pose at 0.3s (0.7s, `back.out(1.4)`), rises at RISE_TIME=3.0s (0.6s, `power2.inOut`) — lands right as "one more problem" finishes (2.78s) plus a small settle buffer. SerialNum badge pop-in at 0.8s (`back.out(2)`, mirrored y-offset), rises in tandem at 3.0s.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Hard cut in from black background layers (grid/strip/logo present from t=0).
**EDUCATIONAL PURPOSE:** Cold open, orients viewer to the problem statement.
**VISUAL HIERARCHY:** QuestionCard > SerialNum > background layers.
**ATTENTION MANAGEMENT:** Single element on screen — no competition for focus.
**MOTION NOTES:** The rise at 3.0s should feel like the card "settling" right as "one more problem" finishes.
**CONTINUITY FROM PREVIOUS SCENE:** N/A — opening scene.

---

### SCENE 2 — Both Journey Legs Build + Given Card Recap
**TIMESTAMP:** 3.32 – 16.36s
**VOICEOVER:** "Now, in this problem, we are given that a vehicle travels one hundred twenty kilometer at sixty kilometer per hour, then it travels another one hundred eighty kilometer at ninety kilometer per hour."
**VISUAL OBJECTIVE:** Build the two-segment road in narration order, each with its own distance+speed label and car icon (icon size increases 56→72px as a static "faster" cue), while a compact Given card underneath silently mirrors both facts as they land.
**SCREEN LAYOUT:** `#illustration` (1400×300, centered, `top:440`) holds an empty proportional 2-segment road base (fades in at 3.6s) that fills left→right. `#card-given` (compact, `top:780`, centered, `width:640`) sits below, entering at the same moment segment 1 does.
**ON-SCREEN ELEMENTS:**
- `#road-base` (light-grey rounded bar, `left:50 top:160 width:1300 height:18`).
- `#seg1` (`left:50 width:520`): label "120 km @ 60 km/hr" (22px, `--primary`) + `illustration/car.svg` (56px).
- `#divider1` (dashed vertical line at `x:570`).
- `#seg2` (`left:570 width:780`): label "180 km @ 90 km/hr" + `illustration/car.svg` (72px, larger = faster).
- `#card-given .solution-card.compact-given` — chip "Given", math (2 line-level lines):
  - "Part 1: 120 km @ <span class="hi">60 km/hr</span>"
  - "Part 2: 180 km @ <span class="hi">90 km/hr</span>"
**ANIMATION DETAILS:**
- 3.6s: `apt.fadeIn(tl, "#road-base", 3.6, 0.5)`.
- 6.219s (GIVEN_TIME, start of "one hundred twenty"): `apt.cardEnter(tl, "#seg1", 6.219)`; `apt.cardEnter(tl, "#card-given .solution-card", 6.219)`; `apt.textReveal(tl, "#card-given .math")` — line 1 reveals at data-t 6.219.
- 12.0s (start of "one hundred eighty"): `apt.cardEnter(tl, "#seg2", 12.0)`; `#divider1` scaleY-in (`fromTo scaleY:0→1`, 0.4s, `power2.out`); Given line 2 reveals at data-t 12.0.
**CAMERA MOVEMENT:** Static.
**TRANSITIONS:** None — continuous build.
**EDUCATIONAL PURPOSE:** Anchor both distance/speed pairs, visually AND in a compact written recap, before any algebra begins.
**VISUAL HIERARCHY:** Segment labels > car icons > road > Given card (secondary, smaller, beneath).
**ATTENTION MANAGEMENT:** One segment per breath, left to right, matching narration order exactly; the Given card is a quiet parallel echo, not a new focal point.
**MOTION NOTES:** Cars sit static (parked) on their segments — only icon SIZE hints at the speed difference, no driving motion.
**CONTINUITY FROM PREVIOUS SCENE:** The question card is already at rest (Scene 1's rise completed at 3.0s); this scene only adds the road + Given card beneath it — the question itself does not move again until the pin in Scene 4.

---

### SCENE 3 — The Ask + Formula
**TIMESTAMP:** 16.36 – 24.34s
**VOICEOVER:** "The question is asking us to find the average speed for the complete journey. Average speed is equal to total distance divided by total time."
**VISUAL OBJECTIVE:** State the goal, then lock in the correct formula, inside the illustration area — no common-mistake guardrail needed here (this script never states a wrong-method trap), so the beat moves straight from ask to formula.
**SCREEN LAYOUT:** Same `#illustration` box, using remaining vertical space (`top:0` ghost banner, `top:224` formula line) below the now-complete road. `#card-given` still holds its 2-line recap, unchanged.
**ON-SCREEN ELEMENTS:**
- `#avg-ghost` — "Find: Average Speed = ?" (26px, `--topic`), full-width banner.
- `#formula-line` — "Avg Speed = Total Dist ÷ Total Time" (22px, `--primary`), word-synced via `apt.textReveal`.
**ANIMATION DETAILS:**
- 16.36s: `apt.fadeIn(tl, "#avg-ghost", 16.36, 0.6)`.
- 20.379s: `apt.textReveal(tl, "#formula-line")` (word-level spans): "Avg"(20.379) "Speed"(20.859) "="(21.479) "Total"(21.899) "Dist"(22.26) "÷"(22.699) "Total"(23.319) "Time"(23.659) — from "average speed is equal to total distance divided by total time."
**CAMERA MOVEMENT:** Static.
**TRANSITIONS:** None yet; scene ends with pinFlow into Scene 4.
**EDUCATIONAL PURPOSE:** Locks the correct method (Total Distance ÷ Total Time) in place before any arithmetic starts.
**VISUAL HIERARCHY:** Ghost banner (the ask) → formula line (the method), top-to-bottom matching narration order.
**ATTENTION MANAGEMENT:** One new line per breath — ghost, then formula — never more than one new idea at a time.
**MOTION NOTES:** No pulses on the Given card during this scene — it holds silently, already complete.
**CONTINUITY FROM PREVIOUS SCENE:** The same two segments and road from Scene 2 remain fully visible and unchanged beneath these new tags — nothing is removed, only added, preserving object continuity through the whole of Phase 1.

---

### SCENE 4 — Pin + Given → Stack + Step 1: Time for Each Part
**TIMESTAMP:** PIN_TIME = 24.34s, STEP1_TIME (card enter) = 28.14s → exits at STEP1_MORPH = 43.98s
**VOICEOVER:** (24.34–27.60) "So first, let us find the time taken for each part of the journey." (28.14–43.54) "We know time is equal to distance divided by speed. For the first part, time is equal to one hundred twenty divided by sixty. This gives us two hours. For the second part, time is equal to one hundred eighty divided by ninety. This also gives us two hours."
**VISUAL OBJECTIVE:** Shrink the scenario to a pinned recap and open the first real computation — time for each leg, landing on the same 2 hr answer both times (a deliberate symmetry).
**SCREEN LAYOUT:** `#q-pinned` at `left:385px; top:30px; width:1275px`. `#illus-pinned` at `left:280px; top:190px` (single car icon + recap label "120 km @ 60 + 180 km @ 90"). `#stack-given .stack-card` at `left:100px; top:140px`. `#card-step1 .solution-card` centered `left:640px; top:440px; width:640px`.
**ON-SCREEN ELEMENTS:** Given card morphs straight into its stack badge "G" at PIN_TIME (already complete since Scene 2, no re-entry needed). Step 1 card opens at 28.14s, chip "Step 1", math:
```
Time = Distance ÷ Speed
Part 1 = 120 ÷ 60 = 2 hr
Part 2 = 180 ÷ 90 = 2 hr
```
**ANIMATION DETAILS:**
- `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 24.34)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 24.34)`.
- `apt.fadeOut(tl, "#serial-num", 24.34, 0.5)`.
- `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 24.34)`.
- `apt.cardEnter(tl, "#card-step1 .solution-card", 28.14)`.
- `apt.textReveal(tl, "#card-step1 .math")`:
  - Line 1 "Time = Distance ÷ Speed" — **line-level**, `data-t=28.14` (start of "we know time is equal to distance divided by speed").
  - Line 2 "Part 1 = 120 ÷ 60 = 2 hr" — **word-level**: "Part 1"(31.359,"For the first part") "="(32.899,"equal") "120"(33.419,hi,"one hundred") "÷"(34.279,"divided") "60"(35.04,hi,"sixty.") "="(35.939,"This") "2"(36.639,ans,"two") "hr"(36.759,ans,"hours.").
  - Line 3 "Part 2 = 180 ÷ 90 = 2 hr" — **word-level**: "Part 2"(37.439,"For the second part") "="(39.159,"equal") "180"(39.739,hi,"one hundred") "÷"(40.559,"divided") "90"(41.239,hi,"ninety.") "="(42.139,"This") "2"(43.02,ans,"two") "hr"(43.159,ans,"hours.").
- `apt.ambientLoop(tl, "#illus-pinned-icon", 29.0, 73.4)` — small finite bob on the pinned car icon through the full step cycle (the longest static stretch in this question, ~44s).
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** `pinFlow` glide + Given→stack morph, simultaneous.
**EDUCATIONAL PURPOSE:** Establishes the per-leg time (2 hr each), the building block both totals in Step 2 depend on.
**VISUAL HIERARCHY:** Step 1 card (center, active) > Given stack (left) > pinned question/illustration.
**ATTENTION MANAGEMENT:** Sequential — pin glide draws the eye up/smaller first, Step 1's pop-in redirects focus to center.
**MOTION NOTES:** `pinFlow`'s 0.8s glide completing at 25.14s settles well before Step 1 enters at 28.14s, covering the bridging sentence ("So first, let us find...") in between.
**CONTINUITY FROM PREVIOUS SCENE:** The car and road from Scene 2–3 are the exact same objects, now shrunk into `#illus-pinned` — no new illustration assets introduced. The ghost banner/formula line fade out as part of the `pinFlow` glide (the full `#illustration` block moves/fades together).

---

### SCENE 5 — Step 2: Total Time & Total Distance
**TIMESTAMP:** STEP1_MORPH = 43.98s → STEP2_TIME (card enter) = 44.239s → exits at STEP2_MORPH = 58.14s
**VOICEOVER:** (43.98–58.50) "So the total time is equal to two plus two, four hours, and the total distance is equal to one hundred twenty plus one hundred eighty. That is equal to three hundred kilometers. Now we have everything we need."
**VISUAL OBJECTIVE:** Sum the two 2 hr legs into a total time, then — in the very same breath, no pause — sum the two distances into a total distance, mirroring the narration's own continuous run-on sentence.
**SCREEN LAYOUT:** `#stack-step1 .stack-card` at `left:100px; top:290px`. `#card-step2 .solution-card` centered `left:600px; top:420px; width:720px`.
**ON-SCREEN ELEMENTS:** Step 1 stack card (badge "1") joins the column; `.stack-line` connector `#line-g-1` grows between badges "G" and "1". Step 2 card opens, chip "Step 2", math:
```
Total Time = 2 + 2 = 4 hr
Total Distance = 120 + 180 = 300 km
Now we have everything we need
```
**ANIMATION DETAILS:**
- `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 43.98)` — 0.8s.
- `apt.stackLineGrow(tl, "#line-g-1", 43.98)`.
- `apt.cardEnter(tl, "#card-step2 .solution-card", 44.239)`.
- `apt.textReveal(tl, "#card-step2 .math")`:
  - Line 1 "Total Time = 2 + 2 = 4 hr" — **word-level**: "Total"(44.239) "Time"(44.579) "="(45.18) "2"(45.439,hi) "+"(46.059) "2"(47.039,hi) "="(47.799) "4"(47.799,ans) "hr"(48.079,ans).
  - Line 2 "Total Distance = 120 + 180 = 300 km" — **word-level**: "Total"(49.259) "Distance"(49.619) "="(50.239) "120"(51.419,hi) "+"(52.36) "180"(52.719,hi) "="(54.039) "300"(55.34,ans) "km"(56.18,ans).
  - Line 3 "Now we have everything we need" — **line-level**, small `--topic`-grey annotation, `data-t=57.34`.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Standard morph + stack-line grow.
**EDUCATIONAL PURPOSE:** Delivers both halves of the average-speed formula's inputs (4 hr total time, 300 km total distance) in the same beat the narration states them, since the script never pauses between the two.
**VISUAL HIERARCHY:** Step 2 card (center) > Step 1 + Given stack (left, both visible) > pinned elements.
**ATTENTION MANAGEMENT:** Total Time resolves first (top line), then Total Distance (second line) — matching narration order exactly, with the bridging annotation last.
**MOTION NOTES:** This is the longest single active-card hold (~14s) since it carries two full derivations plus a bridge line — no `ambientLoop` needed on this card itself since `#illus-pinned-icon`'s loop already spans this whole stretch.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1's card is still completing its text-fade-out (`morphToStack`'s first 0.25s) as Step 2's narration cue begins; the stack column now shows two connected circles (G→1) with the line grown in.

---

### SCENE 6 — Step 3: Average Speed + Options Reveal
**TIMESTAMP:** STEP2_MORPH = 58.14s → STEP3_TIME (card enter) = 59.139s → RECENTER_TIME = 73.4s, options fade-in = 74.2s, stagger = 74.8s, correct pulse = 80.64s, END_FADE_TIME = 81.8s
**VOICEOVER:** (59.14–62.56) "Average speed is equal to total distance divided by total time." (63.00–67.70) "Putting the values, average speed is equal to three hundred divided by four." (68.28–72.98) "After simplifying this, we get seventy-five kilometer per hour." (73.40–81.30) "So the average speed for the complete journey is seventy-five kilometer per hour. Hence, the correct answer is option D."
**VISUAL OBJECTIVE:** Apply the average-speed formula stated back in Scene 3 with the now-known 300 km / 4 hr, land on 75 km/hr, then confirm it against the options grid.
**SCREEN LAYOUT:** `#stack-step2 .stack-card` at `left:100px; top:470px`. `#card-step3 .solution-card` centered `left:600px; top:430px; width:720px`. `.pinned-col` options grid at `top:400px`.
**ON-SCREEN ELEMENTS:** Step 2 stack card (badge "2") joins column; `#line-1-2` connector grows. Step 3 card, chip "Step 3", math:
```
Avg Speed = Total Dist ÷ Total Time
Putting the values:
= 300 ÷ 4
= 75 km/hr
```
Then: illustration recentered/faded, stack column stays visible, options grid (A 70 km/hr / B 72 km/hr / C 78 km/hr / D 75 km/hr) fades in with D highlighted green.
**ANIMATION DETAILS:**
- `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 58.14)` — 0.8s.
- `apt.stackLineGrow(tl, "#line-1-2", 58.14)`.
- `apt.cardEnter(tl, "#card-step3 .solution-card", 59.139)`.
- `apt.textReveal(tl, "#card-step3 .math")`:
  - Line 1 "Avg Speed = Total Dist ÷ Total Time" — **line-level**, `data-t=59.139` ("Average speed is equal to total distance divided by total time.").
  - Line 2 "Putting the values:" — **line-level**, `data-t=63.0`.
  - Line 3 "= 300 ÷ 4" — **word-level**: "300"(66.199,hi,"three hundred") "÷"(66.819,"divided") "4"(67.459,hi,"four.").
  - Line 4 "= 75 km/hr" (`.ans`) — **line-level**, `data-t=70.0` ("we get seventy-five kilometer per hour").
- `RECENTER_TIME = 73.4` (right as "So the average speed for the complete journey is..." begins, restating the answer) — `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 73.4)`, `apt.stackLineGrow(tl, "#line-2-3", 73.4)`, `apt.fadeOut(tl, "#illus-pinned", 73.4)`, `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 73.4)`.
- `apt.fadeIn(tl, "#options-reveal", 74.2)`.
- `apt.optionsStagger(tl, ".opt-btn", 74.8)`.
- `apt.correctPulse(tl, ".opt-btn.correct", 80.64)` (timed to "option" in "the correct answer is option D," 80.639–81.299).
- `END_FADE_TIME = 81.8` — `apt.fadeOut(tl, "#root > div", 81.8, 1.2)`.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Final morph + recenter glide + options stagger + pulse, then synchronized full-frame fade-out.
**EDUCATIONAL PURPOSE:** Delivers the final division (300÷4=75) and confirms it against the actual MCQ options.
**VISUAL HIERARCHY:** Step 3 card → options grid (sequential focal shift) > full stack column (G/1/2/3... here G/1/2/3 total four badges since Step 3 also joins) > pinned question.
**ATTENTION MANAGEMENT:** `correctPulse` on option D is the terminal focal point.
**MOTION NOTES:** Keep the `300 ÷ 4` and `75 km/hr` reveals crisp and separated since this is the payoff calculation of the whole video.
**CONTINUITY FROM PREVIOUS SCENE:** Step 2's card is mid-text-fade as Step 3's cue fires, exactly as in Scene 4→5; the stack column's G→1→2 chain extends to G→1→2→3 by scene end, and the pinned question's recenter glide is the same `pinFlow`-style continuous-motion language established at the Scene 3→4 pin, closing the loop visually.

---

## PART 3: Asset List Required

- `illustration/car.svg` (already present, user-supplied) — used as-is, no recoloring (own fills already use the brand `--primary` blue and compatible blue-greys). Reused at two sizes (56px / 72px) for the two segments — same technique as q23's reuse of a single train icon at two logical labels.
- Ghost banner + formula line (Scene 3) — pure CSS/text, no SVG needed, styled via a small per-question `<style>` block.
- All cards/chips/options/logo/serial-badge — existing shared components from `_template/assets/` and `design-system.css`. No new components introduced.

## PART 4: Animation Complexity Notes

- Standard patterns only: `heroEnterLowered`, `fadeIn`/`fadeOut`, `cardEnter` (×5), `textReveal` (×5), `pinFlow` (×2, paired), `morphToStack` (×4), `stackLineGrow` (×3), `setStackLine` (×3), `ambientLoop` (×1), `recenterForOptions`, `optionsStagger`, `correctPulse`.
- Two-segment illustration (not three, like q23) — segment widths proportional to real distances (120:180 = 2:3 of the 1300px road).
- Car icon size increases per segment (56/72px) as a static "faster" cue — no driving motion, matching q23's parked-icon technique for a segment-comparison illustration.
- No common-mistake guardrail — this script never states a wrong-method trap (unlike q23's "not the average of 3 speeds"), so Scene 3 is ask+formula only, one beat shorter than q23's ask+guardrail+formula.
- Given card uses `.compact-given` styling (smaller font-size/line-height/padding, same technique as q23) so its 2 lines + chip fit inside the safe vertical window below the illustration.
- Given card enters early (6.219s, GIVEN_TIME) directly beneath the still-building illustration and sits through Scene 3's ask/formula beat untouched, morphing to stack only once the pin fires at 24.34s.
- Step 2 deliberately holds BOTH the total-time and total-distance derivations in one card (rather than splitting into two separate step cards) because the narration states them in one unbroken run-on sentence with no pause — splitting would force an awkward mid-sentence morph.
- `apt.ambientLoop` on the pinned car icon from 29.0s to 73.4s (RECENTER_TIME) — a ~44.4s stretch, the longest static span in this question, so the ambient bob is load-bearing.
- No `apt.emphasize`/`apt.resultReveal` layered on any `.ans` span inside solution cards — all number reveals go through `apt.textReveal`'s `.rv` mechanism only.

## PART 5: Master Timeline Overview

```
0.3    Question card hero-enters (lowered)
3.0    Question card + badge rise to rest
3.6    Road base fades in
6.219  Segment 1 (120 km @ 60 km/hr) pops in + Given card enters (line 1)
12.0   Segment 2 (180 km @ 90 km/hr) pops in + divider grows + Given line 2
16.36  "Find: Average Speed = ?" ghost banner fades in
20.379 Formula line word-reveals ("Avg Speed = Total Dist ÷ Total Time")
24.34  PIN_TIME — pinFlow (question + illustration → pinned) + Given → stack (morph)
28.14  Step 1 card enters + text-reveal (3 lines) + ambient loop starts on pinned icon (29.0)
43.98  Step 1 → stack (morph) + line G-1 grows
44.239 Step 2 card enters + text-reveal (3 lines: total time, total distance, bridge)
58.14  Step 2 → stack (morph) + line 1-2 grows
59.139 Step 3 card enters + text-reveal (4 lines)
73.4   RECENTER_TIME — Step 3 → stack (morph) + line 2-3 grows + illustration fades out + question recenters
74.2   Options grid fades in
74.8   Options stagger in
80.64  Correct option (D) pulses
81.8   END_FADE_TIME — everything fades out together
83.5   End
```
