# Speed-Time-Distance — Q23 — Storyboard

**Question:** A train covers 90 km at 60 km/hr, 120 km at 80 km/hr and 150 km at 100 km/hr. Find its average speed.
**Options:** A) 75 km/hr B) 78 km/hr C) 82 km/hr D) 80 km/hr (correct)
**Video length:** 113.62s voiceover (ends 113.62s) + END_FADE at 114.1s + 1.2s fade → ~115.3s total

Close sibling of [q22](../q22/storyboard.md) (same Given→Step cycle→Options structure, same illustration-area "formula tag" trick borrowed from q9's downstream-rule pattern) and of [q10](../q10/storyboard.md) (same early-entering Given card sitting under the still-building illustration, same proportional multi-segment road). The structural twist here: **three** segments instead of two, sized proportionally to their real distances (90:120:150 = 3:4:5), and a dedicated illustration-area guardrail ("NOT the average of 3 speeds!") + formula tag for the "be very sure about one thing" trap line, kept separate from the Given card so the Given card stays a fast 3-line recap instead of ballooning to 5 lines.

---

## PART 1: Narration Beat Analysis

| # | Time | Narration | Educational purpose | Attention focus | Visual objective |
|---|------|-----------|---------------------|------------------|-------------------|
| 1 | 0.08–3.86 | "So welcome back again. Time for one more problem." | Cold open | Question card | Question hero-enters lowered, rises to rest |
| 2 | 4.24–7.54 | "Now in this problem, we are given that a train covers" | Frame the setup | Question text | Illustration road base begins fading in |
| 3 | 8.06–11.62 | "ninety kilometers at sixty kilometers per hour," | State segment 1 | Segment 1 (leftmost, shortest) | Segment 1 label + slow-train icon pop in; Given card opens beneath with its first recap line |
| 4 | 12.24–14.86 | "one hundred twenty kilometers at eighty kilometers per hour," | State segment 2 | Segment 2 (middle) | Segment 2 label + train icon pop in, divider 1 grows; Given card line 2 |
| 5 | 15.40–19.34 | "and one hundred fifty kilometers at one hundred kilometers per hour." | State segment 3 | Segment 3 (rightmost, longest) | Segment 3 label + fast-train icon pop in, divider 2 grows; Given card line 3 |
| 6 | 19.88–24.06 | "The question is asking us to find the average speed for the whole journey." | State the ask | Whole road | Road base pulses once; "Find: Average Speed = ?" ghost banner fades in above the segments |
| 7 | 24.68–25.80 | "Be very sure about one thing." | Guardrail cue | Ghost banner | Ghost banner pulses (emphasize) — flags a trap is coming |
| 8 | 26.40–30.06 | "Average speed is not the average of the three speeds." | State the common mistake | Warning line | "NOT the average of 3 speeds!" fades in beneath the road |
| 9 | 30.50–35.92 | "We always use the formula, average speed is equal to total distance divided by total time." | State the correct formula | Formula line | "Avg Speed = Total Dist ÷ Total Time" word-reveals beneath the warning line |
| 10 | 36.42–39.28 | "Now, first, let us find the total distance." | Bridge into Step 1 | — | pinFlow fires; Given card morphs to stack; Step 1 card opens |
| 11 | 39.80–47.56 | "Total distance is equal to ninety plus one hundred twenty plus one hundred fifty. This gives us three hundred sixty kilometers." | Step 1 — sum the three distances | Step 1 card | Formula → substitution word-synced, then boxed 360 km result |
| 12 | 48.00–52.44 | "Now that we know the total distance, let us find the time taken for each part." | Bridge into Step 2 | Step 1 card (closing line) | Bridge line reveals, card holds before morph |
| 13 | 52.89–64.16 | "We know the formula. Time is equal to distance divided by speed. For the first part, time is equal to ninety divided by sixty. This gives us one point five hours." | Step 2 — formula + part 1 time | Step 2 card | Formula line, then 90÷60=1.5 hr |
| 14 | 64.62–73.00 | "For the second part, time is equal to one hundred twenty divided by eighty. This also gives us one point five hours." | Step 2 continued — part 2 time | Step 2 card | 120÷80=1.5 hr lands below part 1 |
| 15 | 73.46–82.69 | "For the third part, time is equal to one hundred fifty divided by one hundred. Again, this gives us one point five hours. Now, this part is completed." | Step 2 continued — part 3 time | Step 2 card | 150÷100=1.5 hr lands; all three parts shown together (same 1.5 hr, a nice symmetry) |
| 16 | 83.33–93.46 | "So let us find the total time. Total time is equal to one point five plus one point five plus one point five. This gives us four point five hours." | Step 3 — sum the three times | Step 3 card | 1.5+1.5+1.5 word-synced, then boxed 4.5 hr result |
| 17 | 93.95–98.26 | "Now, average speed is equal to total distance divided by total time." | Step 4 — restate the formula | Step 4 card | Formula line reveals |
| 18 | 98.78–103.78 | "Putting the values, average speed is equal to three hundred sixty divided by four point five." | Step 4 continued — substitute | Step 4 card | Bridge line, then 360÷4.5 word-synced |
| 19 | 104.24–107.08 | "After simplifying this, we get eighty kilometers per hour." | Step 4 continued — result | Step 4 card | Boxed 80 km/hr result |
| 20 | 107.54–110.68 | "So the average speed of the train is eighty kilometers per hour." | Confirm result | Stack + options area | Step 4 morphs to stack; illustration drops; layout recenters; options fade in |
| 21 | 111.20–113.62 | "Hence, the correct answer is option D." | Reveal correct option | Options grid | Options stagger in; correct option (D) pulses green |

---

## PART 2: Scene-by-Scene Storyboard

Design constraints per `_template/README.md` §4D.1 in force throughout: only `--primary #6373db`, `--primary-light #e2e5ff`, `--success #4eb85f`, `--topic #949494`, `--text #000000`, `--bg #FFFFFF`; only the components listed in the README (`QuestionCard`/`SerialNum`/`SolutionCard`/`SolutionStackCard`/`solutionChip`/`StepCircle`/`StackLine`/options-grid/`logo`/`topic-name`/`bottomStrip`/`Illustration`/`Fraction`); only `animations.js` helpers, called explicitly by name. The illustration (3-segment road + train icons + ghost/warning/formula tags) is per-question custom markup/CSS, reusing the user-supplied `illustration/train-faster.svg` and `illustration/train-slower.svg` (identical files, used as two logical labels for the same icon — untouched, no recoloring).

### SCENE 1 — Question Reveal + Road Base
**TIMESTAMP:** 0.3s – 8.06s
**VOICEOVER:** "So welcome back again. Time for one more problem. Now in this problem, we are given that a train covers"
**VISUAL OBJECTIVE:** Establish the question and lay the empty road that the three segments will populate.
**SCREEN LAYOUT:** Full question card centered top (lowered-hero start, rises at 3.9s). `#illustration` (1400×300, centered, top:440) holds an empty proportional 3-segment road base.
**ON-SCREEN ELEMENTS:**
- `#q-full-card` — "A train covers <span class="num">90 km</span> at <span class="num">60 km/hr</span>, <span class="num">120 km</span> at <span class="num">80 km/hr</span> and <span class="num">150 km</span> at <span class="num">100 km/hr</span>. Find its <span class="num">average speed</span>."
- `#serial-num` badge (Q).
- `#illustration`: `#road-base` (light-grey rounded bar, left:50 top:160 width:1300 height:18), three (as-yet-empty, opacity:0) segment groups `#seg1`/`#seg2`/`#seg3` sized proportionally to 90:120:150 km (325px / 433px / 542px), two dashed dividers `#divider1` (x=375) / `#divider2` (x=808).
**ANIMATION DETAILS:**
- 0.3s: `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.9)`.
- 0.8s / 3.9s: `#serial-num` parallel tween mirroring the card's rise.
- 4.9s: `apt.fadeIn(tl, "#road-base", 4.9, 0.5)`.
**CAMERA MOVEMENT:** Static.
**TRANSITIONS:** None yet.
**EDUCATIONAL PURPOSE:** Frame the journey as one road before any numbers land on it.
**VISUAL HIERARCHY:** Question card > road base.
**ATTENTION MANAGEMENT:** Single focal point until the card settles, then the road quietly appears beneath it.
**MOTION NOTES:** No train icons yet — pure setup.
**CONTINUITY FROM PREVIOUS SCENE:** Cold open — nothing precedes this.

---

### SCENE 2 — Three Segments Build + Given Card Recap
**TIMESTAMP:** 8.06s – 19.34s
**VOICEOVER:** "ninety kilometers at sixty kilometers per hour, one hundred twenty kilometers at eighty kilometers per hour, and one hundred fifty kilometers at one hundred kilometers per hour."
**VISUAL OBJECTIVE:** Build the three segments in narration order, each with its own distance+speed label and train icon (icon size increases slightly per segment — 56 / 64 / 72px — as a subtle visual cue that the train moves faster each leg), while a compact Given card underneath silently mirrors the same three facts as they land.
**SCREEN LAYOUT:** `#illustration` (already on screen from Scene 1) fills in left→right. `#card-given` (compact, `top:780`, `left:50%`, `width:640`, centered) sits below the illustration, entering at the same moment segment 1 does.
**ON-SCREEN ELEMENTS:**
- `#seg1`: label "90 km @ 60 km/hr" (22px, `--primary` for numbers) + `illustration/train-slower.svg` (56px).
- `#seg2`: label "120 km @ 80 km/hr" + `illustration/train-slower.svg` (64px) + `#divider1`.
- `#seg3`: label "150 km @ 100 km/hr" + `illustration/train-faster.svg` (72px) + `#divider2`.
- `#card-given .solution-card.compact-given` — chip "Given", math (3 line-level lines):
  - "Part 1: 90 km @ <span class="hi">60 km/hr</span>"
  - "Part 2: 120 km @ <span class="hi">80 km/hr</span>"
  - "Part 3: 150 km @ <span class="hi">100 km/hr</span>"
**ANIMATION DETAILS:**
- 8.06s: `apt.cardEnter(tl, "#seg1", 8.06)`.
- 8.06s: `apt.cardEnter(tl, "#card-given .solution-card", 8.06)` (GIVEN_TIME).
- 8.06s: `apt.textReveal(tl, "#card-given .math")` — line "Part 1..." reveals at data-t 8.06.
- 12.24s: `apt.cardEnter(tl, "#seg2", 12.24)`; `#divider1` scaleY-in (`fromTo scaleY:0→1`, 0.4s); Given line "Part 2..." reveals at data-t 12.24 (already queued via `apt.textReveal` called once above — see design.md, one call per card covers all its `.rv` spans regardless of when each fires).
- 15.40s: `apt.cardEnter(tl, "#seg3", 15.40)`; `#divider2` scaleY-in; Given line "Part 3..." reveals at data-t 15.40.
**CAMERA MOVEMENT:** Static.
**TRANSITIONS:** None — continuous build.
**EDUCATIONAL PURPOSE:** Anchor all three distance/speed pairs, visually AND in a compact written recap, before any algebra begins.
**VISUAL HIERARCHY:** Segment labels > train icons > road > Given card (secondary, smaller, beneath).
**ATTENTION MANAGEMENT:** One segment per breath, left to right, matching narration order exactly; the Given card is a quiet parallel echo, not a new focal point.
**MOTION NOTES:** Trains sit static on their segments (parked) — only their icon SIZE hints at the speed difference; no driving motion.
**CONTINUITY FROM PREVIOUS SCENE:** The road base from Scene 1 is already in place; segments fill onto it without re-entrance. The Given card is a genuinely new element, entering low in the frame so it never competes with the illustration above it.

---

### SCENE 3 — The Ask + Common-Mistake Guardrail + Formula
**TIMESTAMP:** 19.88s – 35.92s
**VOICEOVER:** "The question is asking us to find the average speed for the whole journey. Be very sure about one thing. Average speed is not the average of the three speeds. We always use the formula, average speed is equal to total distance divided by total time."
**VISUAL OBJECTIVE:** State the goal, flag the classic trap (average speed ≠ average of the three speeds), then lock in the correct formula — all inside the illustration area, keeping the Given card untouched below.
**SCREEN LAYOUT:** Same `#illustration` box, using its remaining vertical space (top:0 ghost banner, top:190 warning line, top:222 formula line) below/around the now-complete road. `#card-given` still holds its 3-line recap, unchanged.
**ON-SCREEN ELEMENTS:**
- `#avg-ghost` — "Find: Average Speed = ?" (26px, `--topic`), full-width banner at the top of the illustration box.
- `#warn-line` — "NOT the average of 3 speeds!" (22px, `--text`).
- `#formula-line` — "Avg Speed = Total Dist ÷ Total Time" (22px, `--primary`), word-synced via `apt.textReveal`.
**ANIMATION DETAILS:**
- 21.88s: `apt.fadeIn(tl, "#avg-ghost", 21.88, 0.6)` timed to "the average speed" (22.18).
- 21.88s: `apt.emphasize(tl, "#road-base", 21.88)` — road pulses once as the whole journey is referenced.
- 24.68s: `apt.emphasize(tl, "#avg-ghost", 24.68)` — ghost banner pulses on "Be very sure about one thing."
- 26.40s: `apt.fadeIn(tl, "#warn-line", 26.40, 0.4)` timed to "Average speed is not" (26.40).
- 32.40s: `apt.textReveal(tl, "#formula-line")` (word-level spans): "Avg"(32.40) "Speed"(32.84) "="(33.34) "Total"(33.78) "Dist"(34.12) "÷"(35.06) "Total"(35.26) "Time"(35.66) — from "average speed is equal to total distance divided by total time."
**CAMERA MOVEMENT:** Static.
**TRANSITIONS:** None yet; scene ends with pinFlow into Scene 4.
**EDUCATIONAL PURPOSE:** This IS the common-mistake guardrail for this question — students who average 60/80/100 directly (getting 80 by coincidence here, but by the wrong method) need this flagged before any arithmetic starts.
**VISUAL HIERARCHY:** Ghost banner (the ask) → warning line (the trap) → formula line (the fix), top-to-bottom matching narration order.
**ATTENTION MANAGEMENT:** One new line per breath — ghost, then pulse, then warning, then formula — never more than one new idea at a time.
**MOTION NOTES:** No pulses on the Given card during this scene — it holds silently, already complete.
**CONTINUITY FROM PREVIOUS SCENE:** The same three segments and road from Scene 2 remain fully visible and unchanged beneath these new tags — nothing is removed, only added, preserving object continuity through the whole of Phase 1.

---

### SCENE 4 — Pin + Given → Stack + Step 1: Total Distance
**TIMESTAMP:** PIN_TIME = 36.0s, GIVEN_MORPH = 36.0s, STEP1_TIME (card enter) = 37.0s → exits at STEP1_MORPH = 52.5s
**VOICEOVER:** (36.42–47.56) "Now, first, let us find the total distance. Total distance is equal to ninety plus one hundred twenty plus one hundred fifty. This gives us three hundred sixty kilometers." (48.00–52.44) "Now that we know the total distance, let us find the time taken for each part."
**VISUAL OBJECTIVE:** Shrink the scenario to a pinned recap and immediately open the first real computation — summing the three distances.
**SCREEN LAYOUT:** Question pins to top-shrunk card; illustration shrinks to a single pinned train icon + short recap label; Given card morphs directly into the stack (no separate pinned Given step — it was already complete). Step 1 SolutionCard opens center.
**ON-SCREEN ELEMENTS:**
- `#q-pinned` — "3 segments: 90@60, 120@80, 150@100 km/hr — find <span class="num">average speed</span>."
- `#illus-pinned`: single `#illus-pinned-icon` (`illustration/train-faster.svg`, 56px, centered) + "90, 120, 150 km journey" recap label (22px), `justify-content:center` (single-icon convention per design.md).
- `#stack-given .stack-card` (badge "G", 3 recap lines, plain fade via morph).
- `#card-step1 .solution-card` (width 640px) — chip "Step 1", math (3 lines):
  - word-level: "Total distance = <span class="hi">90</span> + <span class="hi">120</span> + <span class="hi">150</span>"
  - line-level, `.ans`: "= <span class="ans">360 km</span>"
  - line-level bridge: "Now let's find time for each part"
**ANIMATION DETAILS:**
- 36.0s: `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 36.0)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 36.0)`.
- 36.0s: `apt.fadeOut(tl, "#serial-num", 36.0, 0.5)`.
- 37.0s: `apt.ambientLoop(tl, "#illus-pinned-icon", 37.0, 107.5)` — small finite bob through the entire step cycle, the longest static stretch in this question.
- 36.0s: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 36.0)`.
- 37.0s: `apt.cardEnter(tl, "#card-step1 .solution-card", 37.0)`.
- 37.0s: `apt.textReveal(tl, "#card-step1 .math")`:
  - "Total"(39.80) "distance"(40.16) "="(40.72) "90"(41.18,hi) "+"(41.75) "120"(42.46,hi) "+"(43.36) "150"(44.12,hi) — from "total distance is equal to ninety plus one hundred twenty plus one hundred fifty"
  - "= 360 km" — data-t 45.44 (line-level, matches "this gives us three hundred sixty kilometers")
  - "Now let's find time for each part" — data-t 48.00 (line-level bridge, matches "now that we know the total distance, let us find the time taken for each part")
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** pinFlow glide (0.8s) + Given morph (0.8s), both at the same instant.
**EDUCATIONAL PURPOSE:** Converts the three raw distances into one concrete total (360 km) before time enters the picture.
**VISUAL HIERARCHY:** Formula-shaped sum → boxed result → bridging line into Step 2.
**ATTENTION MANAGEMENT:** Sum first, then the answer, then the handoff — mirrors the narration's own build-up.
**MOTION NOTES:** Card holds through the bridge line before morphing — narration for Step 1's own content ends at 47.56, but the card stays open another ~5s for the bridge sentence.
**CONTINUITY FROM PREVIOUS SCENE:** The pin and the Given→stack morph land together — the illustration is still completing its glide into the pinned slot (36.0+0.8=36.8) as Step 1's card begins fading in at 37.0s, reading as one continuous settle. Narration ("Now, first...") has already started at 36.42, a beat ahead of the visuals, matching the tight gap in the audio itself.

---

### SCENE 5 — Step 2: Time for Each Part
**TIMESTAMP:** STEP1_MORPH = 52.5s → STEP2_TIME (card enter) = 53.5s → exits at STEP2_MORPH = 83.0s
**VOICEOVER:** (52.89–82.69) "We know the formula. Time is equal to distance divided by speed. For the first part, time is equal to ninety divided by sixty. This gives us one point five hours. For the second part, time is equal to one hundred twenty divided by eighty. This also gives us one point five hours. For the third part, time is equal to one hundred fifty divided by one hundred. Again, this gives us one point five hours. Now, this part is completed."
**VISUAL OBJECTIVE:** Apply Time = Distance ÷ Speed to all three parts, landing on the same 1.5 hr result each time — a deliberate symmetry the viewer should notice.
**SCREEN LAYOUT:** Step 1 morphs into stack (badge "1"), connector line G→1 grows; Step 2 card opens center.
**ON-SCREEN ELEMENTS:**
- `#stack-step1 .stack-card`.
- `#line-g-1` connector.
- `#card-step2 .solution-card` (width 640px) — chip "Step 2", math (4 lines):
  - word-level: "Time = Distance ÷ Speed"
  - word-level: "90 ÷ 60 = <span class="hi">1.5 hr</span>"
  - word-level: "120 ÷ 80 = <span class="hi">1.5 hr</span>"
  - word-level: "150 ÷ 100 = <span class="hi">1.5 hr</span>"
**ANIMATION DETAILS:**
- 52.5s: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 52.5)`.
- 52.5s: `apt.setStackLine("#line-g-1", "#stack-given .step-circle", "#stack-step1 .step-circle")` (called once pre-timeline) + `apt.stackLineGrow(tl, "#line-g-1", 52.5)`.
- 53.5s: `apt.cardEnter(tl, "#card-step2 .solution-card", 53.5)`.
- 53.5s: `apt.textReveal(tl, "#card-step2 .math")`:
  - "Time"(54.34) "="(55.02) "Distance"(55.50) "÷"(56.02) "Speed"(56.84) — from "time is equal to distance divided by speed"
  - "90"(59.90,hi) "÷"(60.54) "60"(61.22,hi) "="(62.16) "1.5"(63.20,hi) "hr"(63.76) — from "time is equal to ninety divided by sixty. This gives us one point five hours"
  - "120"(67.52,hi) "÷"(68.58) "80"(69.42,hi) "="(70.32) "1.5"(72.14,hi) "hr"(72.66) — from "one hundred twenty divided by eighty...one point five hours"
  - "150"(75.88,hi) "÷"(77.40) "100"(77.56,hi) "="(79.22) "1.5"(80.12,hi) "hr"(80.74) — from "one hundred fifty divided by one hundred...one point five hours"
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** 0.8s morph in, then straight into Scene 6.
**EDUCATIONAL PURPOSE:** Shows the SAME formula applied three times, arriving at the SAME 1.5 hr answer each time — a strong visual/numeric reinforcement of the method.
**VISUAL HIERARCHY:** Formula line → three parallel substitution lines, all landing on `1.5 hr` in `--primary`.
**ATTENTION MANAGEMENT:** One part per breath, in narration order (first, second, third).
**MOTION NOTES:** This is the longest card (29.5s) since it carries all three time calculations — no pulses beyond textReveal, the repetition itself is the pacing device.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1's box is still completing its morph into `--primary-light` (landing 52.5+0.8=53.3) as Step 2's card begins fading in at 53.5s — the G→1 connector line grows in the same beat Step 1 lands.

---

### SCENE 6 — Step 3: Total Time
**TIMESTAMP:** STEP2_MORPH = 83.0s → STEP3_TIME (card enter) = 84.0s → exits at STEP3_MORPH = 94.0s
**VOICEOVER:** (83.33–93.46) "So let us find the total time. Total time is equal to one point five plus one point five plus one point five. This gives us four point five hours."
**VISUAL OBJECTIVE:** Sum the three equal 1.5 hr times into a single total time.
**SCREEN LAYOUT:** Step 2 morphs into stack (badge "2"), connector line 1→2 grows; Step 3 card opens center.
**ON-SCREEN ELEMENTS:**
- `#stack-step2 .stack-card`.
- `#line-1-2` connector.
- `#card-step3 .solution-card` (width 640px) — chip "Step 3", math (2 lines):
  - word-level: "Total time = <span class="hi">1.5</span> + <span class="hi">1.5</span> + <span class="hi">1.5</span>"
  - word-level, `.ans`: "= <span class="ans">4.5 hr</span>"
**ANIMATION DETAILS:**
- 83.0s: `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 83.0)`.
- 83.0s: `apt.setStackLine("#line-1-2", "#stack-step1 .step-circle", "#stack-step2 .step-circle")` + `apt.stackLineGrow(tl, "#line-1-2", 83.0)`.
- 84.0s: `apt.cardEnter(tl, "#card-step3 .solution-card", 84.0)`.
- 84.0s: `apt.textReveal(tl, "#card-step3 .math")`:
  - "Total"(85.54) "time"(85.90) "="(86.88) "1.5"(87.38,hi) "+"(88.14) "1.5"(89.10,hi) "+"(89.80) "1.5"(90.62,hi) — from "total time is equal to one point five plus one point five plus one point five"
  - "="(92.00) "4.5"(92.58,ans) "hr"(93.18,ans) — from "this gives us four point five hours"
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** 0.8s morph in, then straight into Scene 7.
**EDUCATIONAL PURPOSE:** Closes the "time" half of the average-speed formula, arriving at the total-time denominator needed for the final division.
**VISUAL HIERARCHY:** Sum line → boxed result.
**ATTENTION MANAGEMENT:** One idea per breath — the addition, then its answer.
**MOTION NOTES:** Short, punchy card (10s) after the long Step 2 — deliberate pacing contrast.
**CONTINUITY FROM PREVIOUS SCENE:** Step 2's box is still completing its morph into `--primary-light` (landing 83.0+0.8=83.8) as Step 3's card begins fading in at 84.0s — the 1→2 connector line grows in the same beat Step 2 lands.

---

### SCENE 7 — Step 4: Average Speed + Options Reveal
**TIMESTAMP:** STEP3_MORPH = 94.0s → STEP4_TIME (card enter) = 95.0s → RECENTER_TIME = 107.5s, options fade-in = 108.3s, stagger = 108.9s, correct pulse = 113.0s, END_FADE_TIME = 114.1s
**VOICEOVER:** (93.95–98.26) "Now, average speed is equal to total distance divided by total time." (98.78–103.78) "Putting the values, average speed is equal to three hundred sixty divided by four point five." (104.24–107.08) "After simplifying this, we get eighty kilometers per hour." (107.54–113.62) "So the average speed of the train is eighty kilometers per hour. Hence, the correct answer is option D."
**VISUAL OBJECTIVE:** Apply the average-speed formula stated back in Scene 3 with the now-known 360 km / 4.5 hr, land on 80 km/hr, then confirm it against the options grid.
**SCREEN LAYOUT:** Step 3 morphs into stack (badge "3"), connector line 2→3 grows; Step 4 card opens center; illustration drops out and pinned question recenters right before the options grid appears.
**ON-SCREEN ELEMENTS:**
- `#stack-step3 .stack-card`.
- `#line-2-3` connector.
- `#card-step4 .solution-card` (width 720px) — chip "Step 4", math (4 lines):
  - word-level: "Avg Speed = Total Dist ÷ Total Time"
  - line-level bridge: "Putting the values:"
  - word-level: "= <span class="hi">360</span> ÷ <span class="hi">4.5</span>"
  - line-level, `.ans`: "= <span class="ans">80 km/hr</span>"
- `#stack-step4 .stack-card` (badge "4") + `#line-3-4` connector.
- `#options-reveal .options-grid`: A) 75 km/hr, B) 78 km/hr, C) 82 km/hr, D) 80 km/hr (`.correct`).
**ANIMATION DETAILS:**
- 94.0s: `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 94.0)`.
- 94.0s: `apt.setStackLine("#line-2-3", "#stack-step2 .step-circle", "#stack-step3 .step-circle")` + `apt.stackLineGrow(tl, "#line-2-3", 94.0)`.
- 95.0s: `apt.cardEnter(tl, "#card-step4 .solution-card", 95.0)`.
- 95.0s: `apt.textReveal(tl, "#card-step4 .math")`:
  - "Avg"(94.96) "Speed"(95.42) "="(95.92) "Total"(96.34) "Dist"(96.70) "÷"(97.12) "Total"(97.72) "Time"(98.06) — from "average speed is equal to total distance divided by total time"
  - "Putting the values:" — data-t 98.78 (line-level, matches "putting the values,")
  - "="(100.16) "360"(101.48,hi) "÷"(102.52) "4.5"(103.10,hi) — from "average speed is equal to three hundred sixty divided by four point five"
  - "= 80 km/hr" — data-t 104.24 (line-level, matches "after simplifying this, we get eighty kilometers per hour")
- 107.5s (RECENTER_TIME): `apt.morphToStack(tl, "#card-step4 .solution-card", "#stack-step4 .stack-card", 107.5)`; `apt.setStackLine("#line-3-4", "#stack-step3 .step-circle", "#stack-step4 .step-circle")` + `apt.stackLineGrow(tl, "#line-3-4", 107.5)`; `apt.fadeOut(tl, "#illus-pinned", 107.5)`; `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 107.5)`.
- 108.3s: `apt.fadeIn(tl, "#options-reveal", 108.3)`.
- 108.9s: `apt.optionsStagger(tl, ".opt-btn", 108.9)`.
- 113.0s: `apt.correctPulse(tl, ".opt-btn.correct", 113.0)` — timed to "option" in "the correct answer is option D" (113.04–113.38).
- 114.1s (END_FADE_TIME): `apt.fadeOut(tl, "#root > div", 114.1, 1.2)` — ~0.5s after the voiceover ends (113.62s).
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Final morph + recenter + stagger reveal, then unified end fade.
**EDUCATIONAL PURPOSE:** Closes the algebra loop (360 ÷ 4.5 = 80) and confirms it against the actual MCQ choices — note 80 km/hr also happens to equal a simple average of 60/80/100, which is exactly why Scene 3's guardrail mattered (right method, not a coincidence the viewer should rely on).
**VISUAL HIERARCHY:** Formula → substitution → boxed answer → options grid (equal weight A–D) → correct pulse draws the eye to D last.
**ATTENTION MANAGEMENT:** Stagger (0.12s per option) keeps the reveal readable; the pulse is the single final attention beat, timed to "option D."
**MOTION NOTES:** Stack column (G-1-2-3-4 with 4 connectors) stays fully visible and unfaded throughout the reveal.
**CONTINUITY FROM PREVIOUS SCENE:** Step 3's box is still completing its morph into `--primary-light` (landing 94.0+0.8=94.8) as Step 4's card begins fading in at 95.0s — the 2→3 connector line grows in the same beat Step 3 lands. At the scene's own end, Step 4's card is still mid-morph into the stack (completing at 107.5+0.8=108.3) as the options grid begins its own fade-in at 108.3s — the final stack circle and the options grid arrive as one continuous beat.

---

## PART 3: Asset List Required

- `illustration/train-slower.svg`, `illustration/train-faster.svg` (already provided, user-supplied, byte-identical files used as two logical labels for the same icon) — used as-is, no recoloring (own fills are a self-consistent blue/grey palette compatible with `--primary`).
- No other new SVGs — the road base, dividers, ghost banner, warning line, and formula line are all CSS/text, styled via a small per-question `<style>` block (design.md §7 — not shared components).
- Shared: `serial-num-badge.svg`, `logo.png` (from `_template/assets/`, copied per 5B).

## PART 4: Animation Complexity Notes

- Three-segment illustration (not two, like q10) — segment widths are proportional to their real distances (90:120:150 = 3:4:5 of the 1300px road), a deliberate visual-accuracy choice that also makes the "same 1.5 hr per part" result in Step 2 land as a small surprise (longer road segment, same time, because speed also scaled up).
- Train icon size increases per segment (56/64/72px) as a static visual cue for "faster" — no actual driving motion, since three static parked icons read more cleanly than three moving ones for a segment-comparison illustration.
- The common-mistake guardrail ("NOT the average of 3 speeds!") lives in the illustration area (as a `#warn-line`/`#formula-line` pair below the road), not inside the Given card — this keeps Given to a fast 3-line recap (per design.md's SolutionCard sizing guidance) while still giving the guardrail its own dedicated visual beat, mirroring q9's "formula tag pulses in the illustration" technique rather than q5/q19's "extra line inside the Given card" technique (chosen here because folding 2 more lines into Given would have pushed the card height into the bottom-strip/logo safe zone).
- Given card uses a compact per-question style (`compact-given`: smaller font-size/line-height/padding, same technique as q9's `.compact-given`) so its 3 lines + chip fit inside the ~180px window between the illustration's bottom edge (top:440+height:300=740) and the topic-name/logo safe zone (~y:980).
- Given card enters early (8.06s, GIVEN_TIME) directly beneath the still-building illustration and sits through Scene 3's guardrail/formula beat untouched, morphing to stack only once the pin fires at 36.0s — same "early Given, late morph" technique as q9/q10, appropriate here because all three given facts are narrated during Phase 1 itself, with no separate later "given restatement" beat in the transcript.
- `apt.ambientLoop` on the pinned train icon from 37.0s to 107.5s (RECENTER_TIME) — a 70.5s stretch, the longest static span of any question built so far (longer than q22's 61.8s), so the ambient bob is load-bearing, not optional.
- Step 2 is unusually long (29.5s) because it carries three parallel Time = Distance ÷ Speed substitutions rather than the more typical two-line derivation — the repetition itself (same formula, same 1.5 hr answer, three times) is treated as the pedagogical device rather than something to compress.
- No `apt.emphasize`/`apt.resultReveal` layered on any `.ans` span inside solution cards — all number reveals go through `apt.textReveal`'s `.rv` mechanism only. `apt.emphasize` is used twice in Phase 1: once on `#road-base` (21.88s) and once on `#avg-ghost` (24.68s) — neither on solution-card text.

## PART 5: Master Timeline Overview

```
0.3    Question card hero-enters (lowered)
3.9    Question card + badge rise to rest
4.9    Road base fades in
8.06   Segment 1 (90 km @ 60 km/hr) pops in + Given card enters (line 1)
12.24  Segment 2 (120 km @ 80 km/hr) pops in + divider 1 grows + Given line 2
15.40  Segment 3 (150 km @ 100 km/hr) pops in + divider 2 grows + Given line 3
21.88  "Find: Average Speed = ?" ghost banner fades in + road pulses
24.68  Ghost banner pulses ("be very sure about one thing")
26.40  Warning line fades in ("NOT the average of 3 speeds!")
32.40  Formula line word-reveals ("Avg Speed = Total Dist ÷ Total Time")
36.0   PIN_TIME — pinFlow (question + illustration → pinned) + Given → stack (morph)
37.0   Step 1 card enters + text-reveal (3 lines) + ambient loop starts on pinned icon
52.5   Step 1 → stack (morph)
53.5   Step 2 card enters + text-reveal (4 lines)
83.0   Step 2 → stack (morph) + line G-1 grows
84.0   Step 3 card enters + text-reveal (2 lines)
94.0   Step 3 → stack (morph) + line 1-2 grows
95.0   Step 4 card enters + text-reveal (4 lines)
107.5  Step 4 → stack (morph) + line 2-3 grows + RECENTER_TIME (illustration fades out, question recenters) + line 3-4 grows
108.3  Options grid fades in
108.9  Options stagger in
113.0  Correct option (D) pulses
114.1  END_FADE_TIME — everything fades out together
115.3  End
```
