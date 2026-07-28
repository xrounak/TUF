# Storyboard — Speed and Time / Question 30 ("Faster/Slower Driver")

**Question:** A man drives a distance. If he drives 5 km/hr faster, he saves 1 hour. If he drives 5 km/hr slower, he loses 2 hours. Distance is: **(A) 75 km (B) 60 km (C) 90 km (D) 100 km — Correct: B**

**Voiceover duration:** 113.16s (`transcript.json`). **Total composition:** ~116.5s (holds ~3.3s after final beat).

---

## PART 1 — Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|-----------|-----------|----------------------|------------------|-------------------|
| 1 | 0.10–2.54 | "So welcome back again. Time for one more problem." | Warm open, signal a new problem | Center of frame | Empty frame → question card rises into view |
| 2 | 2.98–19.04 | "Now in this problem, we are given that if a man drives five kilometer per hour faster, he saves one hour, and if he drives five kilometer per hour slower, he loses two hours. The question is asking us to find the total distance traveled." | State the full problem | Question card + illustration | A car on a road builds in; a "+5 km/hr → −1 hr" chip pops as the faster condition is spoken, then a "−5 km/hr → +2 hr" chip pops as the slower condition is spoken, then a "Distance = ?" chip closes the scene |
| 3 | 19.40–31.02 | "Let the original speed be X kilometer per hour, and let the original time be T hours. Since distance is equal to speed into time, the original distance is X into T." | Define the variables and the base distance formula | Given card (center) | Layout pins to top (right after the question is fully read); Given card enters and reveals Speed = X, Time = T, Distance = X×T |
| 4 | 31.44–59.58 | "Now, let us use the first condition. If the speed increases by five, the time decreases by one. So new speed is equal to X plus five. New time is equal to T minus one. So the new distance becomes X plus five into T minus one. But remember, the distance remains the same, so XT is equal to X plus five T minus one. After expanding and simplifying, we get X is equal to five T minus five." | Derive the first equation from the "faster" condition | Step 1 card | Given morphs to stack; Step 1 card builds the (X+5)(T−1) equation and simplifies to X = 5T − 5 |
| 5 | 60.04–81.36 | "Now, let us use the second condition. If the speed decreases by five, the time increases by two. So new speed is X minus five. New time is T plus two. Again, the distance remains the same, so XT is equal to X minus five T plus two. After expanding and simplifying, we get two X is equal to five T plus 10." | Derive the second equation from the "slower" condition | Step 2 card | Step 1 morphs to stack; Step 2 card builds the (X−5)(T+2) equation and simplifies to 2X = 5T + 10 |
| 6 | 81.78–99.11 | "Now, we already know that X is equal to five T minus five. Putting this value into the second equation and solving, we get T is equal to four hours. Now from the first equation, X equals five T minus five and T is four, so X equals five times four minus five, which gives us X is equal to 15 kilometers per hour." | Solve the two simultaneous equations for T, then back-substitute for X | Step 3 card | Step 2 morphs to stack; Step 3 card substitutes X = 5T − 5 into 2X = 5T + 10, solves T = 4, then substitutes back to get X = 15 |
| 7 | 99.52–110.16 | "Finally, distance is equal to speed into time, and speed equal to X, which is 15 kilometer per hour, and time equal to four hours. So distance is equal to 15 into four, which is 60 kilometer." | Compute the final answer | Step 4 card | Step 3 morphs to stack; Step 4 card restates Speed=15, Time=4, then reveals 15×4 = 60 km |
| 8 | 110.70–113.16 | "Hence, the correct answer is option B." | Confirm final answer | Options grid | Step 4 morphs to stack; options grid reveals, option B pulses green |

---

## PART 2 — Scene-by-Scene Storyboard

### SCENE 1 — Cold Open
**Timestamp:** 0.0 – 2.54s
**Voiceover:** "So welcome back again. Time for one more problem."
**Visual Objective:** Establish frame; question card rises from a lowered, vertically-centered rest position into its Phase-1 slot.
**Screen Layout:** Background layers only until 0.3s, then `#q-full-card` centered at `left:50%`, starting lowered (`y:230px`, HERO_OFFSET_Y=180).
**On-Screen Elements:** `.dotted-grid`, `.bottom-strip`, `.topic-name` ("Speed and Time"), `.logo`, `#q-full-card` (question text), `#serial-num` badge.
**Animation Details:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 2.6)` — card fromTo at 0.3s (0.7s, `back.out(1.4)`), rises to `y:0` exactly at RISE_TIME=2.6 (end of "Time for one more problem."). `#serial-num` pops in parallel at 0.8s (`back.out(2)`) at the same lowered offset, rising with the card at 2.6s.
**Camera Movement:** None.
**Transitions:** N/A (opening scene).
**Educational Purpose:** Signal video start without wasting time before the problem is read.
**Visual Hierarchy:** Question card is the only focal element; badge secondary.
**Attention Management:** Single moving element (card+badge unit) — no competing motion.
**Motion Notes:** Card holds lowered through "welcome back," rising only once the narrator says "problem" — ties the rise to a specific spoken word.
**Continuity from previous scene:** N/A — first scene of the video.

---

### SCENE 2 — Question Reveal + Car/Road Illustration Build
**Timestamp:** 2.98 – 19.04s
**Voiceover:** "Now in this problem, we are given that if a man drives five kilometer per hour faster, he saves one hour, and if he drives five kilometer per hour slower, he loses two hours. The question is asking us to find the total distance traveled."
**Visual Objective:** Read the full question while a flat 2D car on a road builds in, then two "what-if" condition chips pop in sequence as each condition is spoken, followed by a closing query chip.
**Screen Layout:** `#q-full-card` at rest (`top:80px`, centered). `#illustration` area (`top:400px`, 900×260px, centered) hosts a road bar, a car icon centered above it, and two condition chips flanking the car.
**On-Screen Elements:**
- `#q-full-card` — full question text, numbers ("5 km/hr", "1 hour", "2 hours") in `.num` (primary blue).
- `#illustration`: `<div class="road-bar">` (flat black rounded bar), `<img id="car-icon" src="illustration/car.svg">` (centered above the road), `<div id="chip-faster" class="cond-chip cond-chip-left">` ("+5 km/hr → −1 hr"), `<div id="chip-slower" class="cond-chip cond-chip-right">` ("−5 km/hr → +2 hr"), `<div id="chip-query" class="cond-chip cond-chip-center">` ("Distance = ?").
**Animation Details:**
- Question card already at rest (Scene 1 handled entrance).
- Road + car fade/slide in at **2.98s** (word "Now" — start of the sentence stating the problem).
- `#chip-faster` ("+5 km/hr → −1 hr") pops in (`emphasize`-style scale-in) at **7.64s** (word "faster" — start of "faster, he saves one hour,").
- `#chip-slower` ("−5 km/hr → +2 hr") pops in at **12.48s** (word "slower," — start of "slower, he loses two hours.").
- `#chip-query` ("Distance = ?") fades in at **15.04s** (word "The" — start of "The question is asking us to find the total distance traveled.").
- Car sits idle (small ambient bob) from ~9.0s onward — this is a decorative single-speed car, not a segment-by-segment speed comparison, so no drive-across motion is needed; the chips alone carry the "+5/−5" comparison.
**Camera Movement:** None.
**Transitions:** N/A (continuous with Scene 1; illustration builds without a hard cut).
**Educational Purpose:** Let the viewer visually anchor "faster → saves 1 hour" and "slower → loses 2 hours" as two symmetric what-if chips around one car, before any algebra starts.
**Visual Hierarchy:** Question text (top) primary; illustration (center) secondary, builds progressively — road/car → faster chip → slower chip → query chip — matching narration order.
**Attention Management:** Only one new element reveals at a time, each cued to its own word.
**Motion Notes:** The two condition chips are visually symmetric (left/right of the car) to read as "two opposite what-ifs around the same trip" — deliberately not shown as two different cars/trips, since it's the same trip under two hypothetical speeds.
**Continuity from previous scene:** The question card and badge are already at rest from Scene 1's rise at 2.6s; this scene only adds the car/road illustration underneath — no re-entrance of the card itself.

---

### SCENE 3 — Pin + Given (Variables Defined)
**Timestamp:** 19.04 – 31.44s
**Voiceover:** "Let the original speed be X kilometer per hour, and let the original time be T hours. Since distance is equal to speed into time, the original distance is X into T."
**Visual Objective:** Pin the question/illustration to the top the instant the question has been fully read, then open the Given card that introduces the variables X and T and the base distance formula.
**Screen Layout:** `#q-pinned` (`left:385px, top:30px`), `#illus-pinned` (`left:280px, top:190px`, shrunk car + two stacked pinned condition chips: "+5 km/hr → −1 hr" / "−5 km/hr → +2 hr"), `#card-given .solution-card` at `left:640px, top:560px`.
**On-Screen Elements:** Pinned question text (shortened), pinned car illustration (smaller), Given `SolutionCard` (chip "Given") with 3 `.math` lines.
**Animation Details:**
- **PIN_TIME = 19.04** (end of "...find the total distance traveled.") — `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 19.04)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 19.04)` fire together (0.8s glide, completing 19.84).
- **GIVEN_TIME = 19.40** (its own transcript timestamp — the word "Let", start of "Let the original speed be X kilometer per hour" — a deliberate 0.36s gap after PIN_TIME, since the narration flows directly from finishing the question into defining the variables with no separate pause). `apt.cardEnter(tl, "#card-given .solution-card", 19.40)`.
- `apt.textReveal(tl, "#card-given .math")` reveals (all line-level, paraphrased — no clean word-to-word match):
  - Line 1 "Speed = **X km/hr**" @ `data-t="19.40"` (matches "Let the original speed be X kilometer per hour").
  - Line 2 "Time = **T hrs**" @ `data-t="22.88"` (matches "and let the original time be T hours").
  - Line 3 "Distance = **X × T**" @ `data-t="26.08"` (matches "distance is equal to speed into time, the original distance is X into T").
**Camera Movement:** None.
**Transitions:** `apt.pinFlow` (real glide) for the pin; `cardEnter` for the Given card.
**Educational Purpose:** Anchor the two unknowns (X, T) and the base distance formula before any condition-specific algebra begins.
**Visual Hierarchy:** Pinned question stays visible but recedes; Given card is the active focal point center-stage.
**Attention Management:** Each `.math` line reveals only as its exact words are spoken.
**Motion Notes:** No `apt.ambientLoop` needed here — narration is continuous through this ~12s span, no long silent stretch.
**Continuity from previous scene:** The pin glide is still completing (lands 19.84s) as the Given card's `cardEnter` fires at 19.40 — the pinned question/illustration are settling into their final position at almost the same instant the Given card rises, reading as one continuous "question locks in place, then the setup begins" motion.

---

### SCENE 4 — Step 1: The Faster Condition
**Timestamp:** 31.44 – 60.04s
**Voiceover:** "Now, let us use the first condition. If the speed increases by five, the time decreases by one. So new speed is equal to X plus five. New time is equal to T minus one. So the new distance becomes X plus five into T minus one. But remember, the distance remains the same, so XT is equal to X plus five T minus one. After expanding and simplifying, we get X is equal to five T minus five."
**Visual Objective:** Given card morphs into the stack; Step 1 builds the "faster" condition's equation and simplifies it to X = 5T − 5.
**Screen Layout:** `#card-step1 .solution-card` centered (`left:550px, top:380px, width:820px`); `#stack-given` visible at `left:100px, top:140px`.
**On-Screen Elements:** Step 1 `.solution-card` with `.chip` "Step 1", 5 `.math` lines.
**Animation Details:**
- `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 31.44)` (0.8s, completes 32.24) — fires right at "Now, let us use the first condition," the sentence itself bridging out of the Given setup.
- `apt.cardEnter(tl, "#card-step1 .solution-card", 32.44)` — ~1s breathing gap, since the transition sentence (31.44–33.18) is still finishing.
- `apt.textReveal(tl, "#card-step1 .math")`:
  - Line 1 *(line-level)* "Speed increases by 5 → Time decreases by 1" @ `data-t="33.53"` (matches "If the speed increases by five, the time decreases by one.").
  - Line 2 *(word-level)* "New Speed" @ `data-t="38.26"` "=" @ `data-t="39.10"` "**X + 5**" @ `data-t="39.40"` — matches "new speed is equal to X plus five."
  - Line 3 *(word-level)* "New Time" @ `data-t="40.66"` "=" @ `data-t="41.40"` "**T − 1**" @ `data-t="41.70"` — matches "New time is equal to T minus one."
  - Line 4 *(line-level)* "XT = (X + 5)(T − 1)" @ `data-t="50.62"` (matches "so XT is equal to X plus five T minus one.").
  - Line 5 *(word-level, `.ans`)* "⇒" @ `data-t="56.28"` "**X = 5T − 5**" @ `data-t="56.70"` — matches "we get X is equal to five T minus five."
**Camera Movement:** None.
**Transitions:** `apt.morphToStack` (0.8s box+text crossfade).
**Educational Purpose:** Derive the first of the two equations the video needs, from the "faster" what-if condition.
**Visual Hierarchy:** Step 1 card center; Given stack card + its `G` circle badge visible top-left of the stack column.
**Attention Management:** Condition → new speed → new time → equation → simplified result, in strict narration order.
**Motion Notes:** No `stackLineGrow` yet — Given is the first stack entry, nothing to connect to above it.
**Continuity from previous scene:** The Given card's box is still completing its morph (finishes 32.24) as Step 1's content keeps revealing — the outgoing card has just settled into `.stack-given` a beat after Step 1 rose into the same center spot, reading as one continuous "setup → first condition" handoff.

---

### SCENE 5 — Step 2: The Slower Condition
**Timestamp:** 60.04 – 81.78s
**Voiceover:** "Now, let us use the second condition. If the speed decreases by five, the time increases by two. So new speed is X minus five. New time is T plus two. Again, the distance remains the same, so XT is equal to X minus five T plus two. After expanding and simplifying, we get two X is equal to five T plus 10."
**Visual Objective:** Step 1 morphs into the stack; Step 2 builds the "slower" condition's equation and simplifies it to 2X = 5T + 10.
**Screen Layout:** `#card-step2 .solution-card` centered (`left:560px, top:380px, width:800px`); `#stack-step1` visible at `left:100px, top:316px`; `#line-g-1` connector grown.
**On-Screen Elements:** Step 2 `.solution-card` with `.chip` "Step 2", 5 `.math` lines.
**Animation Details:**
- `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 60.04)` (completes 60.84) — fires right at "Now, let us use the second condition," the sentence itself bridging out of Step 1.
- `apt.stackLineGrow(tl, "#line-g-1", 60.04)` — G→1 connector grows now that both circles exist.
- `apt.cardEnter(tl, "#card-step2 .solution-card", 61.04)` — ~1s breathing gap, since the transition sentence (60.04–61.58) is still finishing.
- `apt.textReveal(tl, "#card-step2 .math")`:
  - Line 1 *(line-level)* "Speed decreases by 5 → Time increases by 2" @ `data-t="62.10"` (matches "If the speed decreases by five, the time increases by two.").
  - Line 2 *(word-level)* "New Speed" @ `data-t="65.92"` "=" @ `data-t="66.70"` "**X − 5**" @ `data-t="67.00"` — matches "So new speed is X minus five."
  - Line 3 *(word-level)* "New Time" @ `data-t="68.22"` "=" @ `data-t="68.90"` "**T + 2**" @ `data-t="69.10"` — matches "New time is T plus two."
  - Line 4 *(line-level)* "XT = (X − 5)(T + 2)" @ `data-t="70.24"` (matches "Again, the distance remains the same, so XT is equal to X minus five T plus two.").
  - Line 5 *(word-level, `.ans`)* "⇒" @ `data-t="79.40"` "**2X = 5T + 10**" @ `data-t="79.80"` — matches "two X is equal to five T plus 10."
**Camera Movement:** None.
**Transitions:** `apt.morphToStack` (0.8s).
**Educational Purpose:** Derive the second equation, giving the video the two-equation system it needs to solve for X and T.
**Visual Hierarchy:** Active Step 2 card > stack column (G, 1) on the left, connector line visible between them.
**Attention Management:** Same strict narration-order reveal pattern as Step 1, reinforcing the parallel structure between the two conditions.
**Motion Notes:** `.stack-line` grows once, never fades — stays visible through the rest of the video.
**Continuity from previous scene:** Step 1's card box is mid-morph into the stack (lands 60.84) as `#line-g-1` grows at the same 60.04 mark — the outgoing Step 1 card and the newly-grown connector line settle together, and Step 2's `cardEnter` picks up exactly where that motion lands.

---

### SCENE 6 — Step 3: Solving the Simultaneous Equations
**Timestamp:** 81.78 – 99.52s
**Voiceover:** "Now, we already know that X is equal to five T minus five. Putting this value into the second equation and solving, we get T is equal to four hours. Now from the first equation, X equals five T minus five and T is four, so X equals five times four minus five, which gives us X is equal to 15 kilometers per hour."
**Visual Objective:** Step 2 morphs into the stack; Step 3 substitutes the first equation into the second, solves for T, then back-substitutes to find X.
**Screen Layout:** `#card-step3 .solution-card` centered (`left:600px, top:380px, width:720px`); `#stack-step2` visible at `left:100px, top:466px`; `#line-1-2` connector grown.
**On-Screen Elements:** Step 3 `.solution-card` with `.chip` "Step 3", 5 `.math` lines.
**Animation Details:**
- `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 81.78)` (completes 82.58) — fires right at "Now, we already know that X is equal to five T minus five," the sentence itself restating Step 1's result as the bridge into solving.
- `apt.stackLineGrow(tl, "#line-1-2", 81.78)`.
- `apt.cardEnter(tl, "#card-step3 .solution-card", 82.78)`.
- `apt.textReveal(tl, "#card-step3 .math")`:
  - Line 1 *(line-level)* "X = 5T − 5" @ `data-t="82.78"` (recap of Step 1's result, restated as the card opens).
  - Line 2 *(line-level)* "Substitute into 2X = 5T + 10" @ `data-t="85.06"` (matches "Putting this value into the second equation and solving,").
  - Line 3 *(word-level, `.ans`)* "⇒" @ `data-t="88.28"` "**T = 4 hrs**" @ `data-t="88.70"` — matches "we get T is equal to four hours."
  - Line 4 *(line-level)* "X = 5(4) − 5" @ `data-t="91.12"` (matches "Now from the first equation, X equals five T minus five and T is four, so X equals five times four minus five,").
  - Line 5 *(word-level, `.ans`)* "⇒" @ `data-t="96.62"` "**X = 15 km/hr**" @ `data-t="97.00"` — matches "which gives us X is equal to 15 kilometers per hour."
**Camera Movement:** None.
**Transitions:** `apt.morphToStack` (0.8s).
**Educational Purpose:** Show the full simultaneous-equation solve — substitution, solving for T, then back-substitution for X — as one continuous derivation.
**Visual Hierarchy:** Active Step 3 card > stack column (G, 1, 2), connector lines visible.
**Attention Management:** Five short lines land in strict lockstep with each spoken clause; the two `.ans` reveals (T=4, X=15) are the clear payoff beats.
**Motion Notes:** No `apt.emphasize`/`apt.resultReveal` layered on the reveals — `apt.textReveal` alone carries both results.
**Continuity from previous scene:** Step 2's card box is still settling into the stack (lands 82.58) as Step 3's `cardEnter` fires at 82.78 — the outgoing Step 2 card and `#line-1-2`'s growth land together, and Step 3 rises into the vacated center spot immediately after, keeping the whole solve reading as one take.

---

### SCENE 7 — Step 4: Final Answer, then Options Reveal
**Timestamp:** 99.52 – 113.16s
**Voiceover:** "Finally, distance is equal to speed into time, and speed equal to X, which is 15 kilometer per hour, and time equal to four hours. So distance is equal to 15 into four, which is 60 kilometer. Hence, the correct answer is option B."
**Visual Objective:** Step 3 morphs into the stack; Step 4 restates the two known values (Speed=15, Time=4), substitutes into Distance = Speed × Time, and reveals the final answer — 60 km — then the stack folds Step 4 in and the options grid confirms option B.
**Screen Layout:** `#card-step4 .solution-card` centered (`left:620px, top:420px, width:680px`); `#stack-step3` visible at `left:100px, top:616px`; `#line-2-3` connector grown. Options grid on `.pinned-col` at `top:400px`.
**On-Screen Elements:** Step 4 `.solution-card` with `.chip` "Step 4", 4 `.math` lines culminating in the `.ans` result; stack (new) `#stack-step4` with `.step-circle` "4"; `#line-3-4` connector; options grid (2×2): A) 75 km · **B) 60 km (correct)** · C) 90 km · D) 100 km.
**Animation Details:**
- `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 99.52)` (completes 100.32) — fires right at "Finally, distance is equal to speed into time," the word "Finally" itself signaling the closing computation.
- `apt.stackLineGrow(tl, "#line-2-3", 99.52)`.
- `apt.cardEnter(tl, "#card-step4 .solution-card", 100.52)`.
- `apt.textReveal(tl, "#card-step4 .math")`:
  - Line 1 *(line-level)* "Distance = Speed × Time" @ `data-t="100.52"` (matches "Finally, distance is equal to speed into time,").
  - Line 2 *(line-level)* "Speed = 15 km/hr, Time = 4 hrs" @ `data-t="102.02"` (matches "and speed equal to X, which is 15 kilometer per hour, and time equal to four hours.").
  - Line 3 *(word-level)* "Distance" @ `data-t="106.64"` "=" @ `data-t="107.20"` "**15 × 4**" @ `data-t="107.50"` — matches "So distance is equal to 15 into four,".
  - Line 4 *(word-level, `.ans`)* "=" @ `data-t="108.86"` "**60 km**" @ `data-t="109.20"` — matches "which is 60 kilometer."
- `apt.morphToStack(tl, "#card-step4 .solution-card", "#stack-step4 .stack-card", 110.70)` (completes 111.50) — Step 4 folds into the stack, fired right at "Hence," the word immediately following Step 4's final hold.
- `apt.stackLineGrow(tl, "#line-3-4", 110.70)`.
- `apt.fadeOut(tl, "#illus-pinned", 110.70)` and `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 110.70)` — clear the illustration and shift the pinned question to align with the options column, the same moment the last card retires.
- `apt.fadeIn(tl, "#options-reveal", 111.50)`.
- `apt.optionsStagger(tl, ".opt-btn", 111.80)` (0.45s × 4, stagger 0.12s — lands ~112.3s, before "option B" finishes).
- `apt.correctPulse(tl, ".opt-btn.correct", 112.60)` — timed to land as "option B" is spoken (110.70–113.16), settling the highlight just as "B." is heard.
- Final hold: all elements remain visible ~3.3s past the voiceover's end (113.16s), ending the composition at 116.5s.
**Camera Movement:** None.
**Transitions:** `apt.morphToStack` for the Step 3→stack and Step 4→stack transitions; simple fade/stagger for the options grid.
**Educational Purpose:** Assemble the two solved values (Speed=15, Time=4) into the final Distance formula, then let the viewer verify 60 km against the actual answer choices.
**Visual Hierarchy:** Step 4 card (center, active) → collapses into the stack column, which stays visible in full (G,1,2,3,4) through the options reveal.
**Attention Management:** Four short lines land in strict lockstep with the spoken clauses; the options grid appears ~1.5s before "option B" is fully spoken, giving the viewer time to scan all four before the pulse confirms B.
**Motion Notes:** Stack cards and connector lines are never faded during the recenter — they stay on screen through the end per the design system's continuity rule. `correctPulse` is the only pulse used in the whole video, reserved for the final answer.
**Continuity from previous scene:** Step 3's box is still completing its morph into the stack (lands 100.32) as Step 4's `cardEnter` fires at 100.52 — same hand-off pattern as every prior step transition. Step 4 itself then follows the identical hand-off into `#stack-step4` before the pinned question's `recenterForOptions` fires, so the "shift into place" reads as the video's final settling motion before the answer choices appear.

---

## PART 3 — Asset List Required

| Asset | Type | Notes |
|-------|------|-------|
| `illustration/car.svg` | SVG | Flat 2D car icon (reused from `speed and time/Intermediate/ques26/illustration/car.svg`), decorative, sits above a CSS road bar |
| Road bar | CSS | Pure CSS rounded black bar — no separate asset needed |
| Condition chips | CSS | Reuse `.chip`-style pill styling (custom `.cond-chip` class, primary-blue pill) — no new asset |

No new colors, fonts, or components beyond `_template/assets/` are required.

---

## PART 4 — Animation Complexity Notes

- Every card→stack transition uses the standard 0.8s `apt.morphToStack` — no exceptions. Five stack entries (G, 1, 2, 3, 4) since the problem needs 4 solve steps (Condition 1 equation, Condition 2 equation, simultaneous solve, final distance).
- Phase 1→2 uses `apt.pinFlow` (real glide) for both the question and the illustration, fired together at PIN_TIME=19.04 — a small (0.36s) deliberate gap before GIVEN_TIME=19.40, since the narration flows continuously from finishing the question straight into defining X and T with no separate pause.
- All five active cards (Given, Step 1–4) use `apt.textReveal` exclusively for their `.math` content — no `apt.emphasize`/`apt.resultReveal` layered on top.
- Four `apt.stackLineGrow` lines (G→1, 1→2, 2→3, 3→4), each fired at the same timestamp as its corresponding `morphToStack` call.
- No `apt.ambientLoop` needed anywhere — narration is continuous throughout, no long silent stretch on a pinned icon.
- Breathing gaps between morph completion and next card entrance are close to 1s throughout (Scenes 4, 5 use the standard ~1s gap since each condition's transition sentence needs a beat to finish); Scene 6 and 7 use a tighter ~0.2s gap since their bridging sentences directly restate a just-computed value.
- Step 3 is the most information-dense card (5 lines covering substitution, solving for T, and back-substitution for X) — matches the narration's own longest unbroken algebra stretch (81.78–99.11s, ~17.3s).
- `apt.correctPulse` is used exactly once, on Option B, at the very end.

---

## PART 5 — Master Timeline Overview

```
TIME (s)   EVENT
─────────  ─────────────────────────────────────────────
0.3        #q-full-card heroEnterLowered begins
0.8        #serial-num pops in (lowered position)
2.6        Card + badge rise to rest (RISE_TIME)
2.98       Road + car fade/slide into illustration
7.64       "+5 km/hr → −1 hr" chip pops in
12.48      "−5 km/hr → +2 hr" chip pops in
15.04      "Distance = ?" chip fades in
[ PIN + GIVEN ]
19.04      pinFlow — question + illustration glide to pinned slot (PIN_TIME)
19.40      Given card cardEnter (GIVEN_TIME) + textReveal begins
[ STEP 1 — Faster condition ]
31.44      Given → stack morph
32.44      Step 1 cardEnter + textReveal begins
[ STEP 2 — Slower condition ]
60.04      Step 1 → stack morph + line-g-1 grows
61.04      Step 2 cardEnter + textReveal begins
[ STEP 3 — Solve simultaneous equations ]
81.78      Step 2 → stack morph + line-1-2 grows
82.78      Step 3 cardEnter + textReveal begins
[ STEP 4 — Final distance ]
99.52      Step 3 → stack morph + line-2-3 grows
100.52     Step 4 cardEnter + textReveal begins
[ OPTIONS ]
110.70     Step 4 → stack morph + line-3-4 grows + illus-pinned fadeOut + recenterForOptions
111.50     options-reveal fadeIn
111.80     optionsStagger
112.60     correctPulse on option B
116.50     End hold
```

**Duration check:** ~116.5s total falls within the 60–150s range for this workflow.
