# Storyboard — Speed and Time, Question 26 (Intermediate)

**Question:** A driver completes a 150 km trip in two halves. First 75 km at 25 km/hr, next 75 km at 75 km/hr. Average speed is: **(A) 45 km/hr (B) 50 km/hr (C) 37.5 km/hr (D) 40 km/hr — Correct: C**

**Voiceover duration:** 102.70s (transcript.json). **Total composition:** ~106s (holds ~3s after final beat).

---

## PART 1 — Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|-----------|-----------|---------------------|------------------|-------------------|
| 1 | 0.10–3.58 | "So welcome back again. Time for one more problem." | Warm open, signal a new problem | Center of frame | Empty frame → question card rises into view |
| 2 | 3.58–21.30 | "Now in this problem, a driver completes a total distance of one hundred fifty kilometer. The trip is divided into two equal halves. The first seventy-five kilometer is covered at twenty-five kilometer per hour. The next seventy-five kilometer is covered at seventy-five kilometer per hour. The question is asking us to find the average speed for the whole trip." | State the full problem | Question card + illustration | Question text reveals; a single road splits into two equal 75 km segments, a car drives across both — slow through segment 1 (25 km/hr), fast through segment 2 (75 km/hr) |
| 3 | 21.70–28.26 | "Be very sure about one thing. Average speed is not the average of the two speeds, so we must use the formula." | Flag the classic trap before it can happen | Pinned question (top), empty pinned frame | Layout pins to top; narration plays over the settled pinned frame — no card yet, builds anticipation for the formula |
| 4 | 28.90–38.08 | "Average speed is equal to total distance divided by total time. Now let us find the time taken for each half. We know time is equal to distance divided by speed." | State the correct formula + restate the givens + set up the sub-formula needed for each half | Given card (center) | Given card enters with the Average-Speed formula, the two given segments (restated), and the Time = Distance ÷ Speed formula |
| 5 | 38.46–47.98 | "For the first seventy-five kilometer, time is equal to seventy-five divided by the speed during the first half, which is twenty-five. This gives us three hours." | Compute time for the first half | Step 1 card | Given morphs to stack; Step 1 card reveals 75 ÷ 25 = 3 hr |
| 6 | 48.42–60.04 | "Now that we know the time taken for the first half, let us find the time taken for the second half. Time is equal to seventy-five divided by the speed during the second half, which is seventy-five. This gives us one hour." | Compute time for the second half | Step 2 card | Step 1 morphs to stack; Step 2 card reveals 75 ÷ 75 = 1 hr |
| 7 | 60.40–76.24 | "Now this part is completed. We already know the time taken for both halves, so let us find the total time. Total time is equal to the time taken to cover the first half plus the time taken to cover the second half. That is equal to three plus one. This gives us four hours." | Sum the two times | Step 3 card | Step 2 morphs to stack; Step 3 card reveals Time1 + Time2 = 3 + 1 = 4 hr |
| 8 | 76.66–100.12 | "The total distance is already given, which is one hundred fifty kilometer. Now we have everything we need. Average speed is equal to total distance divided by total time. Putting the values, average speed is equal to one hundred fifty divided by four. After simplifying this, we get thirty-seven point five kilometer per hour. So the average speed of the driver is thirty-seven point five kilometer per hour." | Assemble every known value into the formula and compute the final answer | Step 4 card | Step 3 morphs to stack; Step 4 card restates 150 km + 4 hr, then reveals 150 ÷ 4 = 37.5 km/hr |
| 9 | 100.16–102.70 | "Hence the correct answer is option C." | Confirm final answer | Options grid | Step 4 morphs to stack; options grid reveals, option C pulses green |

---

## PART 2 — Scene-by-Scene Storyboard

### SCENE 1 — Cold Open
**Timestamp:** 0.0 – 3.58s
**Voiceover:** "So welcome back again. Time for one more problem."
**Visual Objective:** Establish frame; question card rises from a lowered, vertically-centered rest position into its Phase-1 slot.
**Screen Layout:** Background layers only until 0.3s, then `#q-full-card` centered at `left:50%`, starting lowered (`y:230px`, HERO_OFFSET_Y=180).
**On-Screen Elements:** `.dotted-grid`, `.bottom-strip`, `.topic-name` ("Speed and Time"), `.logo`, `#q-full-card` (question text), `#serial-num` badge.
**Animation Details:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.58)` — card fromTo at 0.3s (0.7s, `back.out(1.4)`), rises to `y:0` exactly at RISE_TIME=3.58 (end of "Time for one more problem."). `#serial-num` pops in parallel at 0.8s (`back.out(2)`) at the same lowered offset, rising with the card at 3.58s.
**Camera Movement:** None.
**Transitions:** N/A (opening scene).
**Educational Purpose:** Signal video start without wasting time before the problem is read.
**Visual Hierarchy:** Question card is the only focal element; badge secondary.
**Attention Management:** Single moving element (card+badge unit) — no competing motion.
**Motion Notes:** Card holds lowered through "welcome back," rising only once the narrator says "problem" — ties the rise to a specific spoken word.
**Continuity from previous scene:** N/A — first scene of the video.

---

### SCENE 2 — Question Reveal + Road Illustration Build
**Timestamp:** 3.58 – 21.30s
**Voiceover:** "Now in this problem, a driver completes a total distance of one hundred fifty kilometer. The trip is divided into two equal halves. The first seventy-five kilometer is covered at twenty-five kilometer per hour. The next seventy-five kilometer is covered at seventy-five kilometer per hour. The question is asking us to find the average speed for the whole trip."
**Visual Objective:** Read the full question while a single flat 2D road builds in, splits into two equal segments, and a car drives across both at visibly different speeds.
**Screen Layout:** `#q-full-card` at rest (`top:80px`, centered). `#illustration` area (`top:480px`, 1400×300px, centered) hosts one continuous road bar with a midpoint divider, a car icon starting at the left edge, and two segment label groups.
**On-Screen Elements:**
- `#q-full-card` — full question text, numbers ("150 km", "75 km", "25 km/hr", "75 km/hr") in `.num` (primary blue).
- `#illustration`: `<div id="road-bar">` (flat 2D road strip spanning the illustration width), `<div id="road-midpoint">` (dashed divider marking the halfway point), `<img id="car" src="illustration/car-blue.svg">` (starts at left edge of the road), segment 1 label group (`#seg1-label`: "75 km" over "25 km/hr"), segment 2 label group (`#seg2-label`: "75 km" over "75 km/hr").
**Animation Details:**
- Question card already at rest (Scene 1 handled entrance).
- Road bar + car fade/slide in at **3.58s** (word "Now" — start of the sentence stating total distance).
- "150 km" total-distance tag pops above the road (small `emphasize`-style scale-in) at **6.26s** (word "one" — start of "one hundred fifty kilometer").
- `#road-midpoint` divider fades in at **8.54s** (word "divided" — "The trip is divided into two equal halves.").
- Segment 1 label group fades in at **10.32s** (word "The" — start of "The first seventy-five kilometer…"), with "75 km" emphasized at **10.70–11.62s** and "25 km/hr" emphasized at **12.30–13.74s**. The car begins driving across segment 1 at the same 10.32s mark, at a visibly slow, steady pace, reaching the midpoint by ~14.0s.
- Segment 2 label group fades in at **14.24s** (word "The" — start of "The next seventy-five kilometer…"), with "75 km" emphasized at **14.78–15.70s** and "75 km/hr" emphasized at **16.42–17.84s**. The car crosses segment 2 starting at the midpoint (~14.0s) noticeably faster than segment 1 (short motion-streak lines trailing the car), reaching the right edge by ~17.9s.
- A small "Average Speed = ?" query chip fades in above the road's right edge at **19.92s** (word "average" — "…to find the average speed for the whole trip.").
- Car and road settle (car parked at right edge, idle bob) from ~18.0s through the Scene 3 pin.
**Camera Movement:** None.
**Transitions:** N/A (continuous with Scene 1; illustration builds without a hard cut).
**Educational Purpose:** Let the viewer visually anchor "75 km / 25 km/hr" and "75 km / 75 km/hr" to one continuous trip, and visually feel the speed difference between the two halves before any algebra starts.
**Visual Hierarchy:** Question text (top) primary; illustration (center) secondary, builds progressively — road → total distance → midpoint split → segment 1 → segment 2 → query chip — matching narration order.
**Attention Management:** Only one new element reveals at a time, each cued to its own word/phrase.
**Motion Notes:** The car's speed change between segments is the single most important visual cue in this scene — segment 1 crossing is slow and deliberate, segment 2 crossing is fast, both driven by simple linear `power1.inOut` tweens (no bounce) so they don't compete with the question card's own entrance easing.
**Continuity from previous scene:** The question card and badge are already at rest from Scene 1's rise at 3.58s; this scene only adds the road/car illustration underneath — no re-entrance of the card itself.

---

### SCENE 3 — Pin + Common-Mistake Caution
**Timestamp:** 21.30 – 28.90s
**Voiceover:** "Be very sure about one thing. Average speed is not the average of the two speeds, so we must use the formula."
**Visual Objective:** Reorganize layout (question pins to top, illustration shrinks and pins) and let the "don't just average the two speeds" warning land on a settled, uncluttered frame before the formula card appears.
**Screen Layout:** `#q-pinned` (`left:385px, top:30px`), `#illus-pinned` (`left:280px, top:190px`, shrunk road + car, both segment labels retained at reduced scale), `#card-given` not yet in DOM-visible state (opacity 0, waiting at center).
**On-Screen Elements:** Pinned question text (shortened), pinned road/car illustration (smaller, same relative layout, both segment labels still visible), no solution card yet.
**Animation Details:**
- **PIN_TIME = 21.30** — `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 21.30)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 21.30)` fire together (0.8s glide, completing 22.10).
- `apt.ambientLoop(tl, "#illus-pinned-icon", 22.10, 28.60)` — small bob on the pinned car icon through the caution narration, since nothing new is being illustrated here — the frame needs to feel alive without introducing new information ahead of the formula.
- No card enters during this scene — the "Be very sure…formula" line (21.70–28.26) is deliberately given a bare, settled frame so it reads as a spoken aside/warning rather than being attached to any one visual, mirroring how a teacher pauses to make eye contact before stating a rule.
**Camera Movement:** None.
**Transitions:** `apt.pinFlow` is the transition device (real glide, not a cut).
**Educational Purpose:** Pre-empt the single most common wrong answer on this question type (averaging 25 and 75 to get 50) before the correct method is shown.
**Visual Hierarchy:** Pinned question + illustration recede slightly but stay legible; the empty center frame itself is the "hierarchy" — it signals "pay attention, important rule coming."
**Attention Management:** No competing motion beyond the small ambient bob — the narration is the only active input for ~7s.
**Motion Notes:** Resist the urge to add a strikethrough/X icon over "50" or similar — the design system has no such component; the warning is carried entirely by voice + the deliberately quiet frame.
**Continuity from previous scene:** The pin glide is still completing (lands 22.10s) as the caution narration continues from 21.70 — the pinned question/illustration are settling into their final resting position for the first ~0.4s of "Be very sure," so the warning is heard just as the frame finishes reorganizing itself, reinforcing "now pay attention."

---

### SCENE 4 — Given / Formula Card
**Timestamp:** 28.90 – 38.46s
**Voiceover:** "Average speed is equal to total distance divided by total time. Now let us find the time taken for each half. We know time is equal to distance divided by speed."
**Visual Objective:** State the correct Average-Speed formula, restate the two given segments underneath it, and set up the Time = Distance ÷ Speed formula the next two steps will use.
**Screen Layout:** `#card-given .solution-card` centered (`left:640px, top:440px`); `#stack-given` waiting at `left:100px, top:140px` (opacity 0).
**On-Screen Elements:** Given `.solution-card` with `.chip` "Given" and 4 `.math` lines.
**Animation Details:**
- **GIVEN_TIME = 28.90** (word "Average" — the exact moment the narrator starts stating the correct formula, right after the caution beat ends). `apt.cardEnter(tl, "#card-given .solution-card", 28.90)`.
- `apt.textReveal(tl, "#card-given .math")` reveals:
  - Line 1 *(word-level)* "Average Speed" @ `data-t="28.90"` "=" @ `data-t="29.54"` "Total Distance" @ `data-t="30.26"` "÷" @ `data-t="31.12"` "Total Time" @ `data-t="31.92"` — matches "Average speed is equal to total distance divided by total time."
  - Line 2 *(line-level)* "Distance 1 = **75 km**, Speed 1 = **25 km/hr**" @ `data-t="32.96"` (word "Now" — already illustrated in Scene 2; restated here as the setup for Step 1).
  - Line 3 *(line-level)* "Distance 2 = **75 km**, Speed 2 = **75 km/hr**" @ `data-t="34.18"` (a beat after Line 2, both restating Scene 2's illustration while "the time taken for each half" is spoken).
  - Line 4 *(word-level)* "Time" @ `data-t="35.90"` "=" @ `data-t="36.30"` "Distance" @ `data-t="36.66"` "÷" @ `data-t="37.10"` "Speed" @ `data-t="37.78"` — matches "We know time is equal to distance divided by speed."
**Camera Movement:** None.
**Transitions:** `apt.pinFlow` from Scene 3 already settled the frame; this scene's own transition is just `cardEnter`.
**Educational Purpose:** Anchor the correct method (formula) immediately after the warning against the wrong one, then hand off cleanly into the per-half calculation.
**Visual Hierarchy:** Pinned question stays visible but recedes; Given card is the active focal point center-stage.
**Attention Management:** Each `.math` line reveals only as its exact words are spoken (Lines 2–3 are a deliberate restatement beat, clustered close together since their content was already fully narrated in Scene 2).
**Motion Notes:** Given card entrance (`back.out(1.4)`, 0.55s) reads as confident — this is the "here's the rule" beat the whole video pivots on.
**Continuity from previous scene:** The pinned frame has been sitting quietly since 22.10s; the Given card's `cardEnter` at 28.90 is the first new motion in nearly 7 seconds, landing exactly on the word that starts the formula — a deliberate, clean beat rather than a rushed one.

---

### SCENE 5 — Step 1: Time for the First Half
**Timestamp:** 38.46 – 48.42s
**Voiceover:** "For the first seventy-five kilometer, time is equal to seventy-five divided by the speed during the first half, which is twenty-five. This gives us three hours."
**Visual Objective:** Given card morphs into the stack; Step 1 solves for the time taken on the slower first half using Time = Distance ÷ Speed.
**Screen Layout:** `#card-step1 .solution-card` centered (`left:640px, top:460px`); `#stack-given` now visible at `left:100px, top:140px`; `#line-g-1` connector prepped (not yet grown — no step above Given).
**On-Screen Elements:** Step 1 `.solution-card` with `.chip` "Step 1", 3 `.math` lines (title, substitution, result).
**Animation Details:**
- `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 38.46)` (0.8s, completes 39.26) — Given collapses into its `G` stack circle, fired right as "For the first seventy-five kilometer," begins.
- `apt.cardEnter(tl, "#card-step1 .solution-card", 38.54)` — near-zero gap, since this sentence is a direct continuation of the formula just stated (no new idea to pause for).
- `apt.textReveal(tl, "#card-step1 .math")`:
  - Line 1 *(line-level)* "Find time for first half" @ `data-t="38.54"`.
  - Line 2 *(word-level)* "Time" @ `data-t="41.24"` "=" @ `data-t="41.72"` "**75**" @ `data-t="42.06"` "÷" @ `data-t="43.18"` "**25**" @ `data-t="45.76"` — matches "time is equal to seventy-five divided by the speed during the first half, which is twenty-five."
  - Line 3 *(word-level, `.ans`)* "=" @ `data-t="46.74"` "**3 hr**" @ `data-t="47.30"`/`47.54` — matches "This gives us three hours."
**Camera Movement:** None.
**Transitions:** `apt.morphToStack` (0.8s box+text crossfade).
**Educational Purpose:** Deliver the first concrete number the driver's slower half produces — 3 hours — which the viewer will later add to the second half's time.
**Visual Hierarchy:** Step 1 card center; Given stack card + its `G` circle badge visible top-left of the stack column.
**Attention Management:** Formula → substitution → result, in strict narration order.
**Motion Notes:** No `stackLineGrow`/`stepFlow` yet — Given is the first stack entry, nothing to connect to above it.
**Continuity from previous scene:** The Given card's box is still completing its morph (finishes 39.26) as Step 1's content keeps revealing — the outgoing card has just settled into `.stack-given` a beat after Step 1 rose into the same center spot, reading as one continuous "formula → first calculation" handoff.

---

### SCENE 6 — Step 2: Time for the Second Half
**Timestamp:** 48.42 – 60.40s
**Voiceover:** "Now that we know the time taken for the first half, let us find the time taken for the second half. Time is equal to seventy-five divided by the speed during the second half, which is seventy-five. This gives us one hour."
**Visual Objective:** Step 1 morphs into the stack; Step 2 solves for the time taken on the much faster second half.
**Screen Layout:** `#card-step2 .solution-card` centered (`left:600px, top:440px`); `#stack-step1` now visible at `left:100px, top:290px`; `#line-g-1` connector grown between the G and 1 circles.
**On-Screen Elements:** Step 2 `.solution-card` with `.chip` "Step 2", 3 `.math` lines.
**Animation Details:**
- `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 48.42)` (completes 49.22) — fires right at "Now that we know the time taken for the first half…", the sentence's own opening bridges out of Step 1.
- `apt.stackLineGrow(tl, "#line-g-1", 48.42)` — G→1 connector grows now that both circles exist.
- `apt.stepFlow(tl, "#flow-given-1", 48.42)` — transient center-stage connector bridging Step 1's exit into Step 2's entrance.
- `apt.cardEnter(tl, "#card-step2 .solution-card", 49.22)` — fires as the morph lands, while "…let us find the time taken for the second half" is still being spoken (48.80s onward), so the card is visibly settled before the narration even names "second half."
- `apt.textReveal(tl, "#card-step2 .math")`:
  - Line 1 *(line-level)* "Find time for second half" @ `data-t="49.22"`.
  - Line 2 *(word-level)* "Time" @ `data-t="53.48"` "=" @ `data-t="53.88"` "**75**" @ `data-t="54.26"` "÷" @ `data-t="55.36"` "**75**" @ `data-t="57.96"` — matches "Time is equal to seventy-five divided by the speed during the second half, which is seventy-five."
  - Line 3 *(word-level, `.ans`)* "=" @ `data-t="58.94"` "**1 hr**" @ `data-t="59.62"`/`59.76` — matches "This gives us one hour."
**Camera Movement:** None.
**Transitions:** `apt.morphToStack` + `apt.stepFlow`.
**Educational Purpose:** Deliver the second half's time (1 hour) — deliberately much shorter than Step 1's 3 hours, visually and numerically reinforcing that the second half was faster.
**Visual Hierarchy:** Step 2 card center; stack column now shows G + 1 connected by a grown line.
**Attention Management:** The gap between Line 1 (49.22) and Line 2's first word (53.48) is a real ~4.3s hold — the card sits with just its title while the transition sentence finishes, so the substitution doesn't appear before its narration starts.
**Motion Notes:** This card's substitution (75 ÷ 75) resolves fast (1 hour) — matches the narration's own brisk pacing for this shorter half.
**Continuity from previous scene:** Step 1's box is mid-morph into the stack (lands 49.22) as `flow-given-1`'s center-stage connector grows at the same 48.42 mark — the outgoing Step 1 card and the transient flow line move together, and Step 2's `cardEnter` picks up exactly where that motion settles.

---

### SCENE 7 — Step 3: Total Time
**Timestamp:** 60.40 – 76.66s
**Voiceover:** "Now this part is completed. We already know the time taken for both halves, so let us find the total time. Total time is equal to the time taken to cover the first half plus the time taken to cover the second half. That is equal to three plus one. This gives us four hours."
**Visual Objective:** Step 2 morphs into the stack; Step 3 adds the two half-times together to get the total time.
**Screen Layout:** `#card-step3 .solution-card` centered (`left:580px, top:420px`); `#stack-step2` visible at `left:100px, top:440px`; `#line-1-2` connector grown.
**On-Screen Elements:** Step 3 `.solution-card` with `.chip` "Step 3", 4 `.math` lines culminating in the `.ans` result.
**Animation Details:**
- `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 60.40)` (completes 61.20) — fires right at "Now this part is completed," the sentence itself being the narrative bridge out of Step 2.
- `apt.stackLineGrow(tl, "#line-1-2", 60.40)`.
- `apt.stepFlow(tl, "#flow-1-2", 60.40)`.
- `apt.cardEnter(tl, "#card-step3 .solution-card", 61.20)` — the card is on screen and settled well before its content is narrated, since the transition sentence ("We already know the time taken for both halves, so let us find the total time," 60.52–65.34) is doing real explanatory work before the formula itself starts at 65.96.
- `apt.textReveal(tl, "#card-step3 .math")`:
  - Line 1 *(line-level)* "Find Total Time" @ `data-t="61.20"`.
  - Line 2 *(word-level)* "Total Time" @ `data-t="65.96"` "=" @ `data-t="67.02"` "**Time 1**" @ `data-t="69.12"` "+" @ `data-t="70.20"` "**Time 2**" @ `data-t="72.18"` — matches "Total time is equal to the time taken to cover the first half plus the time taken to cover the second half."
  - Line 3 *(word-level)* "=" @ `data-t="73.32"` "**3**" @ `data-t="74.00"` "+" @ `data-t="74.24"` "**1**" @ `data-t="74.52"` — matches "That is equal to three plus one."
  - Line 4 *(word-level, `.ans`)* "=" @ `data-t="75.08"` "**4 hr**" @ `data-t="75.62"`/`75.80` — matches "This gives us four hours."
**Camera Movement:** None.
**Transitions:** `apt.morphToStack` + `apt.stepFlow`.
**Educational Purpose:** Combine the two half-times into the single total-time value the final formula needs.
**Visual Hierarchy:** Step 3 card center; full stack (G, 1, 2) visible left with all connector lines grown.
**Attention Management:** Title holds ~4.8s before the formula starts revealing, giving the transition sentence room to be heard uninterrupted.
**Motion Notes:** No new stack-line grows yet for Step 3 itself — that happens in Scene 8 alongside its own morph.
**Continuity from previous scene:** Step 2's card is already mid-morph (lands 61.20) when the transition sentence plays through to 65.34; Step 3's `cardEnter` at 61.20 arrives into a frame that stays stable through the full explanatory sentence, so the card's `back.out` pop reads as a clean, deliberate beat rather than colliding with residual motion.

---

### SCENE 8 — Step 4: Average Speed (Final Answer)
**Timestamp:** 76.66 – 100.16s
**Voiceover:** "The total distance is already given, which is one hundred fifty kilometer. Now we have everything we need. Average speed is equal to total distance divided by total time. Putting the values, average speed is equal to one hundred fifty divided by four. After simplifying this, we get thirty-seven point five kilometer per hour. So the average speed of the driver is thirty-seven point five kilometer per hour."
**Visual Objective:** Step 3 morphs into the stack; Step 4 restates the two known totals (150 km, 4 hr), re-states the formula, substitutes, and reveals the final answer, 37.5 km/hr.
**Screen Layout:** `#card-step4 .solution-card` centered (`left:560px, top:400px`); `#stack-step3` visible at `left:100px, top:590px`; `#line-2-3` connector grown.
**On-Screen Elements:** Step 4 `.solution-card` with `.chip` "Step 4", 5 `.math` lines culminating in the `.ans` result.
**Animation Details:**
- `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 76.66)` (completes 77.46) — fires right at "The total distance is already given," the sentence itself bridging out of Step 3 by restating the one value not yet shown in this card's chain.
- `apt.stackLineGrow(tl, "#line-2-3", 76.66)`.
- `apt.stepFlow(tl, "#flow-2-3", 76.66)`.
- `apt.cardEnter(tl, "#card-step4 .solution-card", 77.46)` — lands as the morph completes, just as "…which is one hundred fifty kilometer" is being spoken, so the restated distance appears in the new card almost the instant it's said again.
- `apt.textReveal(tl, "#card-step4 .math")`:
  - Line 1 *(word-level)* "Total Distance" @ `data-t="76.82"` "=" @ `data-t="78.74"` "**150 km**" @ `data-t="79.04"` — matches "The total distance is already given, which is one hundred fifty kilometer."
  - Line 2 *(line-level)* "Total Time = **4 hr**" @ `data-t="80.80"` ("Now we have everything we need" — restating the Step 3 result now that both final values sit together).
  - Line 3 *(word-level)* "Average Speed" @ `data-t="82.56"` "=" @ `data-t="83.18"` "Total Distance" @ `data-t="83.68"` "÷" @ `data-t="84.36"` "Total Time" @ `data-t="84.98"` — matches "Average speed is equal to total distance divided by total time."
  - Line 4 *(word-level)* "=" @ `data-t="87.34"` "**150**" @ `data-t="88.62"` "÷" @ `data-t="89.76"` "**4**" @ `data-t="90.36"` — matches "Putting the values, average speed is equal to one hundred fifty divided by four."
  - Line 5 *(word-level, `.ans`)* "=" @ `data-t="92.50"` "**37.5 km/hr**" @ `data-t="92.80"`/`94.66` — matches "After simplifying this, we get thirty-seven point five kilometer per hour."
- Card holds fully revealed (all 5 lines, `.ans` line visible) from 94.66 through 100.16 while the narrator repeats the answer ("So the average speed of the driver is thirty-seven point five kilometer per hour.", 95.40–100.12) — no new motion needed, the repetition is reinforcement, not new information.
**Camera Movement:** None.
**Transitions:** `apt.morphToStack` + `apt.stepFlow`.
**Educational Purpose:** Assemble every previously-computed value into the one formula that answers the question — the payoff of the entire video.
**Visual Hierarchy:** Step 4 card center, `.ans` span on the final line in the answer color treatment; full stack (G, 1, 2, 3) visible left with all connector lines grown.
**Attention Management:** Five short lines land in strict lockstep with each spoken clause; the final `.ans` appears the instant "thirty-seven point five kilometer per hour" is first said (92.80), then the card simply holds through the narrator's repeat of the same line.
**Motion Notes:** This is the longest-lived card (76.66–100.16, ~23.5s) — matches the narration's own longest, most information-dense stretch. No `apt.emphasize`/`apt.resultReveal` layered on top of the hold; `textReveal` alone carries it.
**Continuity from previous scene:** Step 3's box is mid-morph (lands 77.46) as Step 4's `cardEnter` fires at that same instant — the outgoing Step 3 card settles into its stack circle just as Step 4 rises into the vacated center spot, reading as one continuous "total time known → now solve for the answer" handoff.

---

### SCENE 9 — Options Reveal
**Timestamp:** 100.16 – 105.70s (end)
**Voiceover:** "Hence the correct answer is option C."
**Visual Objective:** Confirm the answer against the four options, highlighting C in green.
**Screen Layout:** Step 4 morphs to stack (`left:100px, top:740px`); `#q-pinned` recenters via `xShift:160, yShift:180`; `#illus-pinned` fades out; `.options-reveal` (`.pinned-col`) reveals the 2×2 grid.
**On-Screen Elements:** Full stack (G/1/2/3/4, all connector lines grown and staying visible), recentered pinned question, options grid: A) 45 km/hr, B) 50 km/hr, **C) 37.5 km/hr (correct)**, D) 40 km/hr.
**Animation Details:**
- `apt.morphToStack(tl, "#card-step4 .solution-card", "#stack-step4 .stack-card", 100.16)` (completes 100.96) — fires right at "Hence," the word that immediately follows Step 4's final hold.
- `apt.stackLineGrow(tl, "#line-3-4", 100.16)`.
- `apt.fadeOut(tl, "#illus-pinned", 100.16)` and `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 100.16)` — clear the illustration and shift the pinned question to align with the options column, the same moment the last card retires.
- `apt.fadeIn(tl, "#options-reveal", 101.00)`.
- `apt.optionsStagger(tl, ".opt-btn", 101.30)` (0.45s × 4, stagger 0.12s — lands ~101.8s, before "option C" is spoken).
- `apt.correctPulse(tl, ".opt-btn.correct", 101.94)` — timed to the word "option" (101.94) leading into "C." (102.68), so the green pulse lands exactly as the narrator names option C.
- Final hold: all elements remain visible ~3s past the voiceover's end (102.70s) for a clean finish, ending the composition at 105.70s.
**Camera Movement:** None.
**Transitions:** `apt.morphToStack` for the final stack entry; simple fade/stagger for the options grid.
**Educational Purpose:** Let the viewer verify the computed 37.5 km/hr against the actual answer choices before the reveal, and see how far off the "naive average" trap (50 km/hr, option B) actually was.
**Visual Hierarchy:** Options grid becomes the new focal point; full stack remains visible on the left as a "how we got here" trail.
**Attention Management:** Grid appears ~1.7s before the correct answer is named, giving the viewer just enough time to scan all four options before the pulse confirms C.
**Motion Notes:** Stack cards and connector lines are never faded during this recenter — they stay on screen through the end per the design system's continuity rule.
**Continuity from previous scene:** Step 4's box is still landing in the stack (completes 100.96) as the options container starts its own fade-in at 101.00 — the last morph and the options reveal read as one uninterrupted settle-then-reveal motion, not two separate beats.

---

## PART 3 — Asset List Required

| Asset | Type | Notes |
|-------|------|-------|
| `illustration/car-blue.svg` | SVG | Flat 2D car icon, drives across both road segments |
| `illustration/road-bar.svg` (or CSS-based `#road-bar` div) | SVG or CSS | Flat horizontal road strip; can be pure CSS (rounded rect + dashed center line) to avoid an extra asset |

No new colors, fonts, or components beyond `_template/assets/` are required — the segment labels and the "Average Speed = ?" query chip reuse `.chip` styling from `design-system.css`. The road itself can be built with CSS alone (no SVG needed) if simpler.

---

## PART 4 — Animation Complexity Notes

- Every card→stack transition uses the standard 0.8s `apt.morphToStack` — no exceptions, no custom durations. Five stack entries this time (G, 1, 2, 3, 4) since the problem has 4 solve steps (Time1, Time2, Total Time, Average Speed) instead of the usual 2–3.
- Phase 1→2 uses `apt.pinFlow` (real glide) for both the question and the illustration, fired together at PIN_TIME=21.30.
- Scene 3 is a bare "no card" transition scene — the only scene in this storyboard with no solution card at all, used specifically to give the common-mistake warning its own quiet beat before the formula card interrupts it. `GIVEN_TIME` (28.90) is ~7.6s after `PIN_TIME` (21.30) as a result — the largest pin→given gap of any question built so far, justified by the warning narration filling that exact window.
- All five active cards (Given, Step 1–4) use `apt.textReveal` exclusively for their `.math` content — no `apt.emphasize`/`apt.resultReveal` layered on top.
- Four `apt.stepFlow` transient center connectors (Given→1, 1→2, 2→3, 3→4) and four permanent `apt.stackLineGrow` lines, each fired at the same timestamp as its corresponding `morphToStack` call.
- One `apt.ambientLoop` on the pinned illustration's car icon (22.10→28.60s) to keep the caution beat's static frame from reading as dead, since no new content is being illustrated in Scene 3.
- Breathing gaps between morph completion and next card entrance vary intentionally by narrative weight: Scene 5 uses a near-zero gap (direct continuation of the same clause), Scene 6/7/8 each hold their title line ~4–4.8s before the formula reveal starts (a real explanatory transition sentence plays out first each time) — every gap is sized to the actual narration, not a fixed constant.
- Step 4 is the longest-lived card (~23.5s) since it both restates two prior results (150 km, 4 hr) and carries the full final computation — its five `.math` lines are more than any other card in this video, matching how narration-dense this final beat is.

---

## PART 5 — Master Timeline Overview

```
TIME (s)   EVENT
─────────  ─────────────────────────────────────────────
0.3        #q-full-card heroEnterLowered begins
0.8        #serial-num pops in (lowered position)
3.58       Card + badge rise to rest (RISE_TIME)
3.58       Road bar + car fade/slide into illustration
6.26       "150 km" total-distance tag pops in
8.54       Road midpoint divider fades in
10.32      Segment 1 labels fade in; car crosses segment 1 (slow)
14.24      Segment 2 labels fade in; car crosses segment 2 (fast)
19.92      "Average Speed = ?" query chip fades in
[ PIN + CAUTION ]
21.30      pinFlow — question + illustration glide to pinned slot
22.10      ambientLoop starts on pinned car icon
21.70      "Be very sure…must use the formula" plays over bare pinned frame
[ GIVEN / FORMULA ]
28.90      Given card cardEnter (GIVEN_TIME) + textReveal begins
[ STEP 1 ]
38.46      Given → stack morph
38.54      Step 1 cardEnter + textReveal begins
[ STEP 2 ]
48.42      Step 1 → stack morph + line-g-1 grows + stepFlow(given-1)
49.22      Step 2 cardEnter + textReveal begins
[ STEP 3 ]
60.40      Step 2 → stack morph + line-1-2 grows + stepFlow(1-2)
61.20      Step 3 cardEnter + textReveal begins
[ STEP 4 ]
76.66      Step 3 → stack morph + line-2-3 grows + stepFlow(2-3)
77.46      Step 4 cardEnter + textReveal begins
[ OPTIONS ]
100.16     Step 4 → stack morph + line-3-4 grows + illus-pinned fadeOut + recenterForOptions
101.00     options-reveal fadeIn
101.30     optionsStagger
101.94     correctPulse on option C
105.70     End hold
```

**Duration check:** ~106s total falls within the 60–150s range for this workflow.
