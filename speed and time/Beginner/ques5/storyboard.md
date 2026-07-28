# Storyboard — Speed and Time / Beginner / Question 5

**Question:** The ratio between the speeds of two cars is 3 : 4. If the second car runs 200 km in 2 hours, then the speed of the first car is:
**Options:** A) 50 km/hr  B) 75 km/hr  C) 100 km/hr  D) 80 km/hr
**Correct:** B — 75 km/hr
**Topic:** Speed and Time
**Total duration:** ~57.7s

---

## PART 1: Narration Beat Analysis

| # | Time (s) | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|----------|-----------|----------------------|------------------|-------------------|
| 1 | 0.14–2.16 | "So welcome back again. Time for one more problem." | Hook / intro | Center screen | Empty canvas → sets stage before question appears |
| 2 | 2.56–8.14 | "Now in this problem, the ratio between the speeds of two cars is three is to four." | Establish given ratio | Question card + ratio in illustration | QuestionCard reveals, "3:4" ratio highlighted between two car icons |
| 3 | 8.64–11.70 | "The second car covers two hundred kilometers in two hours." | Establish second car's distance/time | Illustration (second/red car) | Distance "200 km" and time "2 hrs" labels appear under red car |
| 4 | 12.24–14.20 | "We need to find the speed of the first car." | State the goal | Blue car (unknown) | Blue car pulses with a "?" speed label |
| 5 | 14.58–16.90 | "First, let us find the speed of the second car." | Transition to solving | Question pins, Given card appears | QuestionCard shrinks to top; illustration pins smaller; "Given" solution card enters center |
| 6 | 17.34–20.36 | "We know that speed is equal to distance divided by time." | State formula | Given card | Formula "Speed = Distance / Time" shown in Given card |
| 7 | 20.86–26.10 | "So the speed of the second car is two hundred divided by two. This gives us one hundred kilometers per hour." | Compute second car's speed | Given card math | 200/2 = 100 km/hr resolves inside Given card |
| 8 | 26.54–31.26 | "Now, let the speeds of the first and second cars be three x and four x." | Set up ratio variables | Given → Step 1 morph | Given card morphs to stack; Step 1 card enters with "3x" and "4x" |
| 9 | 31.80–36.30 | "Here, four x represents the speed of the second car. So four x is equal to one hundred." | Equate 4x to known speed | Step 1 card | "4x = 100" highlighted in Step 1 card |
| 10 | 36.74–40.20 | "After solving this, x is equal to twenty-five." | Solve for x | Step 1 card → answer reveal | "x = 25" resolves with resultReveal |
| 11 | 40.56–47.84 | "Now, the speed of the first car is three x, so it is three multiplied by twenty-five, which gives us seventy-five kilometers per hour." | Compute first car's speed | Step 1 morphs to stack; Step 2 card enters | Step 2 card shows "3x = 3 × 25 = 75 km/hr" |
| 12 | 48.26–55.46 | "Hence, the speed of the first car is seventy-five kilometers per hour. So the final answer will be option B," | Confirm final answer | Step 2 morphs to stack; options begin appearing | Options grid fades in, stacked steps remain visible on left |
| 13 | 56.02–57.70 | "seventy-five kilometers per hour." | Final confirmation | Correct option B | Option B pulses green |

---

## PART 2: Scene-by-Scene Storyboard

### SCENE 1 — Intro Hold
- **TIMESTAMP:** 0.0 – 0.3s
- **VOICEOVER:** "So welcome back again. Time for one more problem."
- **VISUAL OBJECTIVE:** Establish blank canvas before content enters.
- **SCREEN LAYOUT:** Background layers only — dotted grid (65% opacity), bottom strip, topic name, logo.
- **ON-SCREEN ELEMENTS:** `.dotted-grid`, `.bottom-strip`, `.topic-name` ("Speed and Time"), `.logo`.
- **ANIMATION DETAILS:** None yet — static background visible from frame 0.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** None.
- **EDUCATIONAL PURPOSE:** Gives the narration hook a clean beat before the question loads.
- **VISUAL HIERARCHY:** Background only.
- **ATTENTION MANAGEMENT:** None — brief hold.
- **MOTION NOTES:** Standard background, no custom motion.

---

### SCENE 2 — Question Reveal + Ratio Setup
- **TIMESTAMP:** 0.3 – 8.14s
- **VOICEOVER:** "Now in this problem, the ratio between the speeds of two cars is three is to four."
- **VISUAL OBJECTIVE:** Introduce the question card and set up the two-car ratio visual.
- **SCREEN LAYOUT:** QuestionCard (`#q-full-card`) large, centered top (per `template.html` coords: left 50%, top 80px, width 1500px). SerialNum badge (`#serial-num`) top-left overlapping card.
- **ON-SCREEN ELEMENTS:**
  - `.q-card` with `.q-text`: "The ratio between the speeds of two cars is <span class='num'>3 : 4</span>. If the second car runs <span class='num'>200 km</span> in <span class='num'>2 hours</span>, then the speed of the first car is:"
  - `.serial-num` badge showing "5"
  - `#illustration`: two flat 2D car icons (blue = first car, red = second car) positioned left/right within the 1400px illustration band (top 480px), a "3 : 4" ratio chip centered between them
- **ANIMATION DETAILS:** `apt.questionEnter(tl, "#q-full-card", 0.3)` — scale+fade in with `back.out(1.4)`, 0.7s. `apt.serialEnter(tl, "#serial-num", 0.8)` — badge pop, 0.55s. At 3.7s, the "3 : 4" ratio chip fades/scales in between the two cars (`apt.fadeIn` pattern, 0.4s) as the ratio is spoken.
- **CAMERA MOVEMENT:** None (static frame, motion confined to element entrances).
- **TRANSITIONS:** None yet — hold.
- **EDUCATIONAL PURPOSE:** Anchors the full question text and visually plants the 3:4 ratio the viewer will reuse throughout.
- **VISUAL HIERARCHY:** QuestionCard first (largest, top), then illustration band below it.
- **ATTENTION MANAGEMENT:** Ratio chip highlighted in `--primary` to match the "3 : 4" spoken cue.
- **MOTION NOTES:** Blue car = first car (unknown, to solve for) stays blue throughout for continuity; red car = second car (known) stays red throughout.

---

### SCENE 3 — Second Car's Distance & Time
- **TIMESTAMP:** 8.64 – 11.70s
- **VOICEOVER:** "The second car covers two hundred kilometers in two hours."
- **VISUAL OBJECTIVE:** Attach the known distance/time data to the red (second) car.
- **SCREEN LAYOUT:** Same Phase 1 frame; illustration band now shows data labels beneath the red car.
- **ON-SCREEN ELEMENTS:** Two small labels beneath red car: "200 km" and "2 hrs", both in `--primary` color text, Regular weight.
- **ANIMATION DETAILS:** Labels fade+slide up from beneath the red car (`apt.fadeIn` style, y:10→0, opacity 0→1, 0.4s, staggered 0.2s apart — "200 km" first, then "2 hrs").
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** None.
- **EDUCATIONAL PURPOSE:** Grounds the abstract ratio with concrete numbers tied to a specific car.
- **VISUAL HIERARCHY:** Red car + its two data labels become the focal point; blue car and ratio chip dim slightly (opacity 0.6) to redirect focus — no new component, just an opacity tween on existing elements.
- **ATTENTION MANAGEMENT:** Only red car's data pops in; blue car stays visually secondary.
- **MOTION NOTES:** Continuity — same red car sprite from Scene 2, now annotated.

---

### SCENE 4 — Blue Car's Unknown Speed
- **TIMESTAMP:** 12.24 – 14.20s
- **VOICEOVER:** "We need to find the speed of the first car."
- **VISUAL OBJECTIVE:** Flag the blue car as the unknown we're solving for.
- **SCREEN LAYOUT:** Same Phase 1 frame.
- **ON-SCREEN ELEMENTS:** A "?" label appears beneath the blue car (mirroring where "200 km"/"2 hrs" sit under the red car), in `--primary` color.
- **ANIMATION DETAILS:** "?" label scales in from 80%→100% with `back.out(1.4)`, 0.4s, and pulses once (`apt.emphasize`, 0.3s yoyo) to draw the eye.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Prepares for Phase 1 → Phase 2 fade-out.
- **EDUCATIONAL PURPOSE:** Makes the problem's goal explicit and visually paired with the car it concerns.
- **VISUAL HIERARCHY:** Blue car + "?" now equally weighted with red car's data — both cars fully opaque again.
- **ATTENTION MANAGEMENT:** The "?" is the last new element before solving begins — a visual cliffhanger.
- **MOTION NOTES:** No illustration changes beyond label — object continuity maintained.

---

### SCENE 5 — Pin Question + Given Card (Speed Formula)
- **TIMESTAMP:** 14.58 – 20.36s
- **VOICEOVER:** "First, let us find the speed of the second car. We know that speed is equal to distance divided by time."
- **VISUAL OBJECTIVE:** Transition from problem framing to solving; introduce the Speed = Distance/Time formula.
- **SCREEN LAYOUT:** Phase 1 fades out at 14.5s. `#q-pinned` fades in (small, top, 1200px wide, `top:30px`). `#illus-pinned` fades in (shrunk cars, `left:280px; top:170px`). `#card-given` solution card enters centered (`left:640px; top:480px`).
- **ON-SCREEN ELEMENTS:**
  - Pinned QuestionCard, shortened text: "Ratio of speeds = <span class='num'>3:4</span>. Second car: <span class='num'>200 km</span> in <span class='num'>2 hrs</span>."
  - Pinned illustration: same two car icons, smaller, ratio chip retained
  - `.solution-card` with `.chip` "Given" and `.math`: "Speed = <span class='frac'><span class='top hi'>Distance</span><span class='bot hi'>Time</span></span>"
- **ANIMATION DETAILS:** `apt.fadeOut(tl, "#phase1", 14.5)` (0.4s). `apt.fadeIn(tl, "#q-pinned", 15.0)` + `apt.fadeIn(tl, "#illus-pinned", 15.0)` (0.4s each, simultaneous). `apt.cardEnter(tl, "#card-given .solution-card", 17.3)` (0.55s, `back.out(1.4)`) — timed to "speed is equal to distance divided by time."
- **CAMERA MOVEMENT:** None — layout reflow only (pin to top).
- **TRANSITIONS:** Phase 1 → Phase 2 cut via fade (0.4s out, 0.4s in, per standard fadeOut/fadeIn).
- **EDUCATIONAL PURPOSE:** Anchors the question permanently on screen while introducing the core formula needed to solve it.
- **VISUAL HIERARCHY:** Pinned question (top) → pinned illustration (upper-mid) → Given card (center, largest active element).
- **ATTENTION MANAGEMENT:** Given card is the sole active focus; everything else is now static/pinned.
- **MOTION NOTES:** From this point, QuestionCard stays pinned at top for the rest of the video (per hard rule).

---

### SCENE 6 — Given Card Resolves to 100 km/hr
- **TIMESTAMP:** 20.86 – 26.10s
- **VOICEOVER:** "So the speed of the second car is two hundred divided by two. This gives us one hundred kilometers per hour."
- **VISUAL OBJECTIVE:** Resolve the formula with real numbers to get the second car's speed.
- **SCREEN LAYOUT:** Same Given card, center.
- **ON-SCREEN ELEMENTS:** Given card `.math` updates/extends to: "Speed of second car = <span class='frac'><span class='top hi'>200</span><span class='bot hi'>2</span></span> = <span class='ans'>100 km/hr</span>"
- **ANIMATION DETAILS:** The fraction "200/2" fades in first (0.4s, at 20.86s), then `<span class='ans'>100 km/hr</span>` resolves via `apt.resultReveal` (opacity 0→1, x:-15→0, 0.5s, `back.out(1.4)`) at 24.0s, timed to "one hundred kilometers per hour."
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** None — same card, content builds progressively.
- **EDUCATIONAL PURPOSE:** Shows the arithmetic step-by-step rather than jumping straight to the answer.
- **VISUAL HIERARCHY:** The resolved "100 km/hr" in `.ans` styling is the visual payoff of this scene.
- **ATTENTION MANAGEMENT:** Progressive reveal (fraction first, then answer) matches the spoken order.
- **MOTION NOTES:** No new components — pure content reveal within the existing Given card.

---

### SCENE 7 — Given → Stack; Step 1 Card (Set Up 3x / 4x)
- **TIMESTAMP:** 26.54 – 34.14s
- **VOICEOVER:** "Now, let the speeds of the first and second cars be three x and four x. Here, four x represents the speed of the second car."
- **VISUAL OBJECTIVE:** Archive the Given card and introduce the algebraic setup relating both cars' speeds to the ratio.
- **SCREEN LAYOUT:** `#card-given` morphs to `#stack-given` (left column, `left:30px; top:140px`) at 28.0s (~1s gap after the "100 km/hr" resolve at ~26.6s, "breathing gap" rule). `#card-step1` enters center (`left:640px; top:460px`) at 29.0s.
- **ON-SCREEN ELEMENTS:**
  - `.stack-card` (Given, in left column): "Speed = Distance/Time" + "= <span class='ans'>100 km/hr</span>" (condensed)
  - `.solution-card` "Step 1": `.chip` "Step 1", `.math`: "Let speed of first car = <span class='hi'>3x</span><br>Let speed of second car = <span class='hi'>4x</span>"
- **ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 28.0)` — 0.8s, `power2.inOut`, position slide + size shrink + bg white→`#e2e5ff` + shadow removal. Reset tween on `#card-step1 .solution-card` at 28.9s (per template pattern) before `apt.cardEnter(tl, "#card-step1 .solution-card", 29.0)` (0.55s). At 31.8s, "4x" gets `apt.emphasize` (0.3s yoyo pulse) timed to "four x represents the speed of the second car."
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Morph (card→stack) is the defining transition of this scene.
- **EDUCATIONAL PURPOSE:** Connects the visual ratio (3:4) established in Scene 2 to algebraic variables the viewer can solve with.
- **VISUAL HIERARCHY:** Step 1 card (center, active) > Given stack card (left, archived but visible).
- **ATTENTION MANAGEMENT:** Emphasize pulse on "4x" reinforces the spoken callout linking it to the second car.
- **MOTION NOTES:** Given stack card persists on screen for the rest of the video (object continuity / no disappearing).

---

### SCENE 8 — Solve 4x = 100 → x = 25
- **TIMESTAMP:** 34.52 – 40.20s
- **VOICEOVER:** "So four x is equal to one hundred. After solving this, x is equal to twenty-five."
- **VISUAL OBJECTIVE:** Show the equation and its solved value for x.
- **SCREEN LAYOUT:** Same Step 1 card, center.
- **ON-SCREEN ELEMENTS:** Step 1 card `.math` extends: "<span class='hi'>4x</span> = <span class='hi'>100</span><br>x = <span class='ans'>25</span>"
- **ANIMATION DETAILS:** "4x = 100" fades in (0.4s) at 34.52s. "x = 25" resolves via `apt.resultReveal` (0.5s, `back.out(1.4)`) at 36.74s, timed to "x is equal to twenty-five."
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** None — same card, progressive content.
- **EDUCATIONAL PURPOSE:** Makes the algebra explicit — viewer sees exactly how x is isolated.
- **VISUAL HIERARCHY:** "x = 25" in `.ans` styling is the scene's payoff, matching Scene 6's pattern for consistency.
- **ATTENTION MANAGEMENT:** Sequential reveal mirrors spoken order (equation, then solution).
- **MOTION NOTES:** None beyond standard reveal patterns.

---

### SCENE 9 — Step 1 → Stack; Step 2 Card (Compute First Car's Speed)
- **TIMESTAMP:** 40.56 – 47.84s
- **VOICEOVER:** "Now, the speed of the first car is three x, so it is three multiplied by twenty-five, which gives us seventy-five kilometers per hour."
- **VISUAL OBJECTIVE:** Archive Step 1 and compute the final answer — the first car's speed.
- **SCREEN LAYOUT:** `#card-step1` morphs to `#stack-step1` (`left:30px; top:310px`) at ~41.0s (breathing gap after x=25 resolve at 40.2s). `#card-step2` enters center (`left:640px; top:460px`) at 42.0s.
- **ON-SCREEN ELEMENTS:**
  - `.stack-card` (Step 1, left column): "3x, 4x" + "x = <span class='ans'>25</span>" (condensed)
  - `.solution-card` "Step 2": `.chip` "Step 2", `.math`: "Speed of first car = <span class='hi'>3x</span><br>= 3 × <span class='hi'>25</span><br>= <span class='ans'>75 km/hr</span>"
- **ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 41.0)` (0.8s). Reset tween on `#card-step2 .solution-card` at 41.9s. `apt.cardEnter(tl, "#card-step2 .solution-card", 42.0)` (0.55s). "3 × 25" fades in at 42.0s (0.4s); "= 75 km/hr" resolves via `apt.resultReveal` at 45.5s (0.5s, `back.out(1.4)`), timed to "seventy-five kilometers per hour."
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Morph transition, consistent with prior steps.
- **EDUCATIONAL PURPOSE:** Delivers the video's core computation — the answer to the original question.
- **VISUAL HIERARCHY:** Step 2 card (center) is the climax card; "75 km/hr" in `.ans` is the largest visual payoff so far.
- **ATTENTION MANAGEMENT:** This is the answer-reveal moment — no competing motion elsewhere on screen.
- **MOTION NOTES:** Blue car (first car) in the pinned illustration could optionally pulse once here (`apt.emphasize`, 0.3s) to tie the abstract answer back to the original visual — reusing the existing pinned illustration element, no new asset.

---

### SCENE 10 — Step 2 → Stack; Options Reveal
- **TIMESTAMP:** 48.26 – 57.70s
- **VOICEOVER:** "Hence, the speed of the first car is seventy-five kilometers per hour. So the final answer will be option B, seventy-five kilometers per hour."
- **VISUAL OBJECTIVE:** Confirm the answer against the multiple-choice options, highlighting the correct one.
- **SCREEN LAYOUT:** `#card-step2` morphs to `#stack-step2` (`left:30px; top:480px`) at 48.7s. `#options-reveal` fades in (`left:340px; top:350px`, 1450px wide) at 49.5s.
- **ON-SCREEN ELEMENTS:**
  - `.stack-card` (Step 2, left column, final stack item): "Speed of first car = 3 × 25" + "= <span class='ans'>75 km/hr</span>"
  - `.options-grid` (2×2): A) 50 km/hr, B) 75 km/hr, C) 100 km/hr, D) 80 km/hr — option B has class `correct`
- **ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 48.7)` (0.8s). `apt.fadeIn(tl, "#options-reveal", 49.5)` (0.4s). `apt.optionsStagger(tl, ".opt-btn", 50.0)` (0.45s × 4, stagger 0.12s) — all four options pop in. `apt.correctPulse(tl, ".opt-btn.correct", 55.5)` (0.4s yoyo, `back.out(1.5)`) timed to "option B" at 55.46s → carries through "seventy-five kilometers per hour" (56.02–57.70s).
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Final morph + fade-in combo closes out the step cycle and opens Phase 4.
- **EDUCATIONAL PURPOSE:** Ties the computed answer back to the original multiple-choice format, giving closure.
- **VISUAL HIERARCHY:** Options grid (right) now competes with the stack column (left) — correct option B's green pulse is the terminal focal point.
- **ATTENTION MANAGEMENT:** `correctPulse` on option B is the last motion event in the video — everything else holds static after this.
- **MOTION NOTES:** All three stack cards (Given, Step 1, Step 2) remain visible through the end — no disappearing, per hard rule.

---

## PART 3: Asset List Required

- No custom illustration assets needed beyond simple flat 2D car shapes (two colored car icons — blue for first car, red for second car). These can be built as inline CSS/SVG shapes reusing `--primary` (blue) and a secondary flat color (e.g. a muted red/orange) — no external image files required.
- All other components (`QuestionCard`, `SerialNum`, `SolutionCard`, `SolutionStackCard`, `solutionChip`, `options grid`/`opt-btn`, `logo`, `topic-name`, `bottomStrip`, `Fraction`) come from `_template/design-system.css` and `_template/assets/`.

---

## PART 4: Animation Complexity Notes

- Straightforward video: 1 Given + 2 Steps (Step 1 = setup, Step 2 = compute), no relative-speed complexity.
- Only standard helpers used throughout: `questionEnter`, `serialEnter`, `cardEnter`, `morphToStack` (0.8s, ×3 uses), `fadeIn`/`fadeOut`, `resultReveal`, `emphasize`, `optionsStagger`, `correctPulse`.
- No custom/new animation helpers required — all motion covered by `animations.js`.
- Simple two-car illustration (vs. trains/boats) keeps Phase 1 visually light; most of the complexity budget goes into the Given/Step math reveals.

---

## PART 5: Master Timeline Overview

```
TIME (s)   ELEMENT                          ACTION
─────────  ───────────────────────────────  ─────────────────────────────────
0.0        Background layers                Visible (grid, strip, topic, logo)
0.3        #q-full-card                     questionEnter (0.7s)
0.8        #serial-num                      serialEnter (0.55s)
3.7        Ratio chip "3:4"                 fadeIn (0.4s)
8.64       "200 km" / "2 hrs" labels        fadeIn staggered (0.4s each)
12.24      "?" label under blue car         scale-in + emphasize pulse
14.5       #phase1                          fadeOut (0.4s)
15.0       #q-pinned, #illus-pinned         fadeIn (0.4s)
17.3       #card-given .solution-card       cardEnter (0.55s)
20.86      "200/2" fraction                 fadeIn (0.4s)
24.0       "100 km/hr" (.ans)               resultReveal (0.5s)
28.0       Given → stack-given              morphToStack (0.8s)
29.0       #card-step1 .solution-card       cardEnter (0.55s)
31.8       "4x" highlight                   emphasize pulse (0.3s yoyo)
34.52      "4x = 100"                       fadeIn (0.4s)
36.74      "x = 25" (.ans)                  resultReveal (0.5s)
41.0       Step1 → stack-step1              morphToStack (0.8s)
42.0       #card-step2 .solution-card       cardEnter (0.55s)
42.0       "3 × 25"                         fadeIn (0.4s)
45.5       "75 km/hr" (.ans)                resultReveal (0.5s)
48.7       Step2 → stack-step2              morphToStack (0.8s)
49.5       #options-reveal                  fadeIn (0.4s)
50.0       .opt-btn ×4                      optionsStagger (0.45s × 4, stagger 0.12s)
55.5       .opt-btn.correct (B)             correctPulse (0.4s yoyo)
57.7       End                              All elements remain visible/static
```
