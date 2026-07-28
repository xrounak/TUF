# Storyboard — "Cyclist's Average Speed" (Speed-Time-Distance)

Question: *A cyclist rides 35 km in 1 hour 24 minutes. Find the average speed.*
Options: **A) 25 km/hr (correct)**  B) 20 km/hr  C) 22 km/hr  D) 28 km/hr
Voiceover: `voiceover.wav` — duration **81.599s**
Transcript: `transcript.json` / `transcript.txt`

---

## PART 1: Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Viewer Attention Focus | Visual Objective |
|---|-----------|-----------|----------------------|-------------------------|-------------------|
| 1 | 0.10–3.56 | "So welcome back again. Time for one more problem." | Warm, brief open | The question card, appearing calmly | Establish calm opening — card rises into place |
| 2 | 4.34–15.82 | "Now, in this problem, we are given that a cyclist rides thirty-five kilometer in one hour twenty-four minutes. The question is asking us to find the average speed of the cyclist." | Restate the problem in the viewer's ear while they read it | Illustration builds under the question; distance/time values land as they're spoken | A cyclist travels a road; "35 km" and "1 hr 24 min" labels land in sync with the numbers being spoken |
| 3 | 16.24–18.96 | "Now, first, let us note down the given values." | Signal the shift from problem-reading to solving | Layout reorganizing — question shrinks and moves up, illustration follows | PinFlow glide clears center stage for the solution cards |
| 4 | 19.52–25.12 | "Distance covered is thirty-five kilometer. Time taken is one hour twenty-four minutes." | Log the two raw given quantities | Given card, values appearing as spoken | Distance and Time lines fade in individually, word-synced |
| 5 | 25.56–35.22 | "But be very sure about one thing, the speed is asked in kilometer per hour, while the time is given in hours and minutes. So before using the formula, we must first convert the time into hours." | Surface the unit mismatch that motivates the conversion — the common-mistake trap for this question type | The problem's hidden catch | Given card has already archived; this becomes Step 1's plain context line, not a "given" value |
| 6 | 35.60–51.92 | "We know that one hour is equal to sixty minutes, so twenty-four minutes is equal to twenty-four divided by sixty hours, which is equal to two by five hour, and we already have one hour. So total time is equal to one plus two-fifths. That is equal to seven-fifths hours. Got it?" | Teach the minutes→hours conversion mechanically, then combine with the whole hour already given | Step 1 card: 1hr=60min → 24/60 → 2/5 hr → +1hr → 7/5 hr | Word-synced reveal of each piece of the conversion, ending on the boxed answer 7/5 hr |
| 7 | 52.46–57.96 | "Perfect. Now, we know the basic formula, average speed is equal to total distance divided by total time." | State the core formula being applied | Step 2 card opening — the formula itself | Formula rendered as Distance/Time fraction |
| 8 | 58.26–63.22 | "Putting the values, average speed is equal to thirty-five divided by seven by five." | Substitute the actual numbers into the formula | The formula becomes a concrete fraction division | 35 ÷ (7/5) revealed |
| 9 | 63.54–66.26 | "Dividing by a fraction means multiplying by its reciprocal." | Reinforce the math rule being used (common trip-up point) | A plain rule reminder, not a new given value | Line-level reveal, de-emphasized styling vs. the numeric lines |
| 10 | 66.64–74.12 | "So thirty-five divided by seven by five becomes thirty-five into five by seven. After simplifying this, we get twenty-five kilometer per hour." | Execute the reciprocal multiplication to the final number | 35 × 5/7 → boxed answer 25 km/hr | Word-synced reveal ending on the highlighted final answer |
| 11 | 74.62–81.60 | "So the average speed of the cyclist is twenty-five kilometer per hour. Hence, the correct answer is option A." | Confirm the answer against the original options | Options grid, A highlighting green exactly on "option A" | Step 2 joins the stack, options fade/stagger in, correct pulse lands on the spoken word |

---

## PART 2: Scene-by-Scene Storyboard

### SCENE 1 — Opening
**TIMESTAMP:** 0.0 – 4.3s
**VOICEOVER:** "So welcome back again. Time for one more problem."
**VISUAL OBJECTIVE:** Establish a calm, premium open — nothing but the question card, centered, before any solving begins.
**SCREEN LAYOUT:** Question card vertically centered (hero-lowered position, `y:180` offset from resting slot), dotted-grid background, bottom-strip, topic name "Speed-Time-Distance" bottom-left, logo bottom-right, all static/always-visible from frame 0.
**ON-SCREEN ELEMENTS:** `#q-full-card` (full question text: "A cyclist rides **35 km** in **1 hour 24 minutes**. What is the average speed?"), `#serial-num` badge (fixed "Q" letter).
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 4.3)` — card fades/scales up from y:230 to y:180 at 0.3s (0.7s, `back.out(1.4)`), holds lowered through the opening line, then rises the final 180px to its resting slot exactly at 4.3s (0.6s, `power2.inOut`) as "...one more problem." finishes. Serial badge pops in at 0.8s (`back.out(2)`, mirrored lowered position) and rises in tandem at 4.3s.
**CAMERA MOVEMENT:** None (static frame; only the card itself moves).
**TRANSITIONS:** Card's own rise motion doubles as the transition into Scene 2 — no cut.
**EDUCATIONAL PURPOSE:** Give the viewer a moment to read the full question before narration starts unpacking it.
**VISUAL HIERARCHY:** Question card is the only element with any motion; everything else (grid, strip, topic, logo) is static chrome.
**ATTENTION MANAGEMENT:** Single focal point — no competing motion.
**MOTION NOTES:** The "lowered then rises" beat reads as "the question settles into its place" right as the narrator finishes the intro line.
**CONTINUITY FROM PREVIOUS SCENE:** N/A — opening scene.

---

### SCENE 2 — Question Restatement + Illustration Build
**TIMESTAMP:** 4.3 – 16.24s
**VOICEOVER:** "Now, in this problem, we are given that a cyclist rides thirty-five kilometer in one hour twenty-four minutes. The question is asking us to find the average speed of the cyclist."
**VISUAL OBJECTIVE:** Visualize the cyclist's ride while the numbers are spoken, so distance and time land as concrete images, not just text.
**SCREEN LAYOUT:** Question card now at rest (top, `y:0` per hero entrance), illustration area centered below it (`#illustration`, 1400×300 box at `top:480px`).
**ON-SCREEN ELEMENTS:** `#road` (a flat horizontal road bar, dashed white centerline, spanning ~1200px), `#cyclist` (cyclist icon, recolored to `--primary`/`--primary-light`/`--topic` tokens, black outline — `illustration/cyclist.svg`), `#dist-label` ("35 km" text tag above the road, 30px), `#time-label` (small clock glyph + "1 hr 24 min" text tag below the road, 24px).
**ANIMATION DETAILS:**
- 4.6s: `apt.roadSweep(tl, "#road", 4.6)` — road draws in left→right (0.9s, `power3.out`, `scaleX 0→1` from left origin).
- 5.0s: `apt.cardEnter(tl, "#cyclist", 5.0)` — icon fades/scales in at the road's left edge.
- 5.3s → 15.4s: icon drifts steadily rightward (`tl.to("#cyclist", {x: 880, duration: 10.1, ease: "none"}, 5.3)`) — a slow, continuous glide representing the ride.
- 8.0s: `apt.fadeIn(tl, "#dist-label", 8.0)` — "35 km" label fades in exactly as "thirty-five kilometer" is spoken.
- 9.84s: `apt.fadeIn(tl, "#time-label", 9.84)` — "1 hr 24 min" + clock glyph fade in as "one hour twenty-four minutes" is spoken.
**CAMERA MOVEMENT:** None — the icon moves within a static frame (no camera pan).
**TRANSITIONS:** Continuous from Scene 1 (question already at rest); flows into Scene 3 via PinFlow.
**EDUCATIONAL PURPOSE:** Anchor the two given quantities (distance, time) to a concrete visual before they're formalized as "given values."
**VISUAL HIERARCHY:** Question card (top, static, secondary) → illustration (center, primary motion) → labels appearing in sync with speech (tertiary, punctual).
**ATTENTION MANAGEMENT:** One moving element plus two punctual label reveals timed to the exact words that name them.
**MOTION NOTES:** The drift is slow and linear (`ease:"none"`) across the whole scene — it reads as "still riding" for the ~10s the narration takes to restate the problem.
**CONTINUITY FROM PREVIOUS SCENE:** The question card is already at its resting position from Scene 1's rise — this scene adds the illustration underneath without re-touching the card.

---

### SCENE 3 — Pin Transition
**TIMESTAMP:** 16.24 – 19.52s
**VOICEOVER:** "Now, first, let us note down the given values."
**VISUAL OBJECTIVE:** Clear center stage for the solution cards by moving the question and illustration into their compact, pinned states.
**SCREEN LAYOUT:** Question card glides from its large centered slot to the pinned slot (`#q-pinned`, `left:385px, top:30px, width:1275px`, shorter question text). Illustration glides from `#illustration` to `#illus-pinned` (`left:280px, top:190px`, smaller, centered via `justify-content:center`).
**ON-SCREEN ELEMENTS:** Same card + illustration, now transitioning; `#serial-num` fades out (no pinned counterpart).
**ANIMATION DETAILS:**
- `PIN_TIME = 16.24`. `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 16.24)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 16.24)` — both glide together (0.8s, `power2.inOut`), landing at 17.04.
- `apt.fadeOut(tl, "#serial-num", 16.24, 0.5)` — badge fades out in step with the glide.
- `apt.ambientLoop(tl, "#cyclist-pinned-icon", 17.94, 74.4)` — small finite bob on the pinned icon so the pinned area stays alive through the long Given/Step1/Step2 stretch.
**CAMERA MOVEMENT:** None — the glide itself acts as the "camera."
**TRANSITIONS:** PinFlow *is* the transition — one continuous glide, not a cut.
**EDUCATIONAL PURPOSE:** Visually signal "we've read the problem, now we solve it" without losing the question or the illustration from view.
**VISUAL HIERARCHY:** The glide is the only motion on screen; nothing new enters yet.
**ATTENTION MANAGEMENT:** A single, unmistakable motion cue for the phase change.
**MOTION NOTES:** Question and illustration move as one visual unit (same `PIN_TIME`).
**CONTINUITY FROM PREVIOUS SCENE:** The icon is mid-drift at PIN_TIME (not yet at the ride's end) — fine, since the pinned illustration shows a recap, not a literal ride completion.

---

### SCENE 4 — Given Card
**TIMESTAMP:** 19.52 – 25.2s
**VOICEOVER:** "Distance covered is thirty-five kilometer. Time taken is one hour twenty-four minutes."
**VISUAL OBJECTIVE:** Log the two given quantities as clean, boxed values.
**SCREEN LAYOUT:** `#card-given .solution-card` centered (`left:640px, top:480px`), chip reads "Given".
**ON-SCREEN ELEMENTS:** Two `.math` lines: "Distance = **35 km**" and "Time = **1 hr 24 min**".
**ANIMATION DETAILS:**
- `GIVEN_TIME = 19.52`. `apt.cardEnter(tl, "#card-given .solution-card", 19.52)`.
- `apt.textReveal(tl, "#card-given .math")` — word-level spans: "Distance"@19.52, "="@20.16, "35"@20.379, "km"@21.359 (line 1); "Time"@22.639, "="@23.14, "1"@23.879, "hr"@24.019, "24"@24.279, "min"@24.719 (line 2).
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Card enters cleanly into the now-empty center stage left by Scene 3's pin.
**EDUCATIONAL PURPOSE:** Separate "what we're told" from "what we compute" — a clean Given card before any math begins.
**VISUAL HIERARCHY:** Given card is the sole focal point; pinned question/illustration sit quietly above/behind it.
**ATTENTION MANAGEMENT:** Two short word-synced reveals, one per line — no more.
**MOTION NOTES:** Values fade in individually per spoken word, not as a block.
**CONTINUITY FROM PREVIOUS SCENE:** The Given card lands at the exact center position PinFlow vacated one beat earlier.

---

### SCENE 5 — Given → Stack, Step 1 (Unit Conversion + Total Time)
**TIMESTAMP:** 25.2 – 53.26s
**VOICEOVER:** "But be very sure about one thing, the speed is asked in kilometer per hour, while the time is given in hours and minutes. So before using the formula, we must first convert the time into hours. We know that one hour is equal to sixty minutes, so twenty-four minutes is equal to twenty-four divided by sixty hours, which is equal to two by five hour, and we already have one hour. So total time is equal to one plus two-fifths. That is equal to seven-fifths hours. Got it? Perfect."
**VISUAL OBJECTIVE:** Archive the Given values into the left stack, surface the unit-mismatch trap, then walk through the minutes→hours conversion and combine it with the whole hour to the boxed total time.
**SCREEN LAYOUT:** `#stack-given .stack-card` at `left:100px, top:140px`. `#card-step1 .solution-card` centered (`left:480px, top:400px, width:960px` — sized so the longest conversion line fits on one line), chip "Step 1".
**ON-SCREEN ELEMENTS:** Stack-given card (circle badge "G"); Step 1 card with 5 lines: context line ("Speed needed in km/hr, but time is in hr & min" — plain, un-highlighted), "1 hr = 60 min", "24 min = 24 ÷ 60 hr", "= 2/5 hr", boxed total "Total Time = 1 + 2/5 = 7/5 hr".
**ANIMATION DETAILS:**
- 25.2s: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 25.2)` (0.8s, completes 26.0).
- 26.0s: `apt.cardEnter(tl, "#card-step1 .solution-card", 26.0)`.
- `apt.textReveal(tl, "#card-step1 .math")`: context line (line-level) @26.0; "1"@36.719, "hr"@36.919, "="@37.439, "60"@38.059, "min"@38.379; "24"@39.819, "min"@40.299, "="@40.719, "24"@41.299, "÷"@41.739, "60"@42.34, "hr"@42.639; "="@43.299, "2"@44.0, "/"@44.139, "5"@44.319, "hr"@44.539; "+"@45.779, "1"@45.779, "hr"@45.939 (already-have-one-hour aside); boxed total: "Total"@46.819, "Time"@47.139, "="@47.439, "1"@47.86, "+"@48.119, "2/5"@48.439, "="@49.639, "7/5"@50.059, "hr"@50.819.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** `apt.morphToStack` 0.8s box+text crossfade — Given shrinks/slides into the stack while Step 1 waits to enter at the exact moment the morph lands.
**EDUCATIONAL PURPOSE:** Isolate the unit conversion (this question's common-mistake trap) as its own reasoning step, ending on a single combined total time.
**VISUAL HIERARCHY:** Step 1 card dominates center stage; the Given stack card sits quietly on the left.
**ATTENTION MANAGEMENT:** Word/line reveals paced across the ~27s of narration, ending on the boxed 7/5 hr.
**MOTION NOTES:** The context line is deliberately plain/non-highlighted text, same visual language as q1's Step 1 context line.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1's card enters at the same center-stage position the Given card just vacated via the morph.

---

### SCENE 6 — Step 1 → Stack, Step 2 (Apply the Formula)
**TIMESTAMP:** 53.26 – 74.4s
**VOICEOVER:** "Now, we know the basic formula, average speed is equal to total distance divided by total time. Putting the values, average speed is equal to thirty-five divided by seven by five. Dividing by a fraction means multiplying by its reciprocal. So thirty-five divided by seven by five becomes thirty-five into five by seven. After simplifying this, we get twenty-five kilometer per hour."
**VISUAL OBJECTIVE:** Apply the average-speed formula to the given numbers and carry the arithmetic through to the final boxed answer, 25 km/hr.
**SCREEN LAYOUT:** `#stack-step1 .stack-card` at `left:100px, top:290px` (circle badge "1"), connector `#line-g-1` grown between G and 1. `#card-step2 .solution-card` centered (`left:460px, top:380px, width:1000px` — widened so the reciprocal-rule line fits on one line), chip "Step 2".
**ON-SCREEN ELEMENTS:** Step 2 card with 5 lines: formula ("Average Speed = Distance⁄Time" as a `.frac`), substitution ("= 35 ÷ 7⁄5"), reciprocal rule (plain line), calculation ("= 35 × 5⁄7"), boxed final answer ("= **25 km/hr**").
**ANIMATION DETAILS:**
- 52.46s: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 52.46)` (completes 53.26); `apt.stackLineGrow(tl, "#line-g-1", 52.46)`.
- 53.26s: `apt.cardEnter(tl, "#card-step2 .solution-card", 53.26)`.
- `apt.textReveal(tl, "#card-step2 .math")`: formula line word-level "Average"@54.979, "Speed"@55.36, "="@55.619, frac(Distance/Time)@56.139; substitution "="@58.599, "35"@60.899, "÷"@61.879, frac(7/5)@62.479; reciprocal rule line-level @63.539; calculation "35"@66.879, "÷"@67.419, frac(7/5)@67.979, "="@68.559, "35"@69.299, "×"@69.76, frac(5/7)@69.979; boxed answer "="@71.18, "25"@72.619, "km/hr"@73.159.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Step 1's morph into the stack directly precedes Step 2's entrance (morph timed to land exactly as "Perfect. Now, we know the basic formula," begins).
**EDUCATIONAL PURPOSE:** The densest reasoning beat of the video — formula, substitution, the reciprocal rule, and the final arithmetic.
**VISUAL HIERARCHY:** Step 2 card is the sole center focus; two quiet stack cards (G, 1) with a grown connector line sit at left.
**ATTENTION MANAGEMENT:** Five reveal beats across ~21s of narration, paced to the audio's own pauses.
**MOTION NOTES:** The reciprocal-rule line is plain (unboxed, unhighlighted), same visual language as Step 1's context line.
**CONTINUITY FROM PREVIOUS SCENE:** Step 2 opens at the same center slot Step 1's card is still completing its morph into.

---

### SCENE 7 — Final Answer + Options Reveal
**TIMESTAMP:** 74.4 – ~85s (video end)
**VOICEOVER:** "So the average speed of the cyclist is twenty-five kilometer per hour. Hence, the correct answer is option A."
**VISUAL OBJECTIVE:** Confirm the computed answer (25 km/hr) against the four options, landing the green highlight on A exactly as it's spoken.
**SCREEN LAYOUT:** `#stack-step2 .stack-card` at `left:100px, top:460px` (circle badge "2"), connector `#line-1-2` grown between 1 and 2. Pinned question recenters (`apt.recenterForOptions`, `xShift:160, yShift:180`). Options grid (2×2) fades in at `.pinned-col, top:400px`.
**ON-SCREEN ELEMENTS:** Options A (25 km/hr, `class="correct"`), B (20 km/hr), C (22 km/hr), D (28 km/hr). Stack column shows G / 1 / 2, all connected, all visible.
**ANIMATION DETAILS:**
- 74.4s: `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 74.4)` (completes 75.2); `apt.stackLineGrow(tl, "#line-1-2", 74.4)`.
- 75.2s: `apt.fadeOut(tl, "#illus-pinned", 75.2)`; `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 75.2)`.
- 75.7s: `apt.fadeIn(tl, "#options-reveal", 75.7)`.
- 76.2s: `apt.optionsStagger(tl, ".opt-btn", 76.2)` (0.45s × 4, stagger 0.12s).
- 80.4s: `apt.correctPulse(tl, ".opt-btn.correct", 80.4)` — timed to land right as "option A." is spoken (81.10–81.60s).
- 82.0s: **END FADE** — `apt.fadeOut(tl, "#root > div", 82.0, 1.2)` — every top-level element (background layers, pinned question, stack column, options grid) fades out together as one synchronized beat, once narration and the correct-pulse have both settled.
- 84.5s: `tl.set({},{},84.5)` — final timeline marker, after the fade completes and a short blank hold.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Step 2's morph → recenter → options fade-in → stagger → pulse → synchronized end-fade, all as one unbroken sequence closing out the video.
**EDUCATIONAL PURPOSE:** Close the loop — the viewer sees their computed 25 km/hr match option A.
**VISUAL HIERARCHY:** Options grid is the focal point until the end-fade; the full G/1/2 stack remains visible (never faded early) as a visible "receipt" of the reasoning.
**ATTENTION MANAGEMENT:** The correct-option pulse is the last *individual* motion; the end-fade afterward is a single unified beat, not a new focal point.
**MOTION NOTES:** Stack cards and connector lines are never faded during the recenter — they stay visible and continuous through the options reveal, only fading as part of the final synchronized end-fade.
**CONTINUITY FROM PREVIOUS SCENE:** The `#line-1-2` connector grows at the same instant Step 2 lands in the stack, mirroring Scene 6's `#line-g-1` beat.

---

## PART 3: Asset List Required

| Asset | Type | Notes |
|---|---|---|
| `illustration/cyclist.svg` | SVG (recolored) | Cyclist icon, originally sourced externally (`person-biking-dark-skin-tone-svgrepo-com.svg`, dropped into the question folder) and recolored to design-system tokens only (`--primary` `#6373db`, `--primary-light` `#e2e5ff`, `--topic` `#949494`, black) — no invented colors, same pattern as q1's `courier.svg`. Used at large size in Phase 1 (`#cyclist`, 130×130) and reused at 110×110 in the pinned illustration (`#cyclist-pinned-icon`), matching object-continuity rule. |
| Road bar | CSS-only (`#road`) | Flat gray rectangle with a repeating dashed white centerline. |
| Clock glyph (time label) | Inline SVG in `index.html` | Small circle + two hands, 24px, sits beside "1 hr 24 min" text. |
| `design-system.css`, `animations.js`, `assets/` (serial badge, logo) | Copied from `_template/` | Standard per Step 5B — no changes. |

Illustration label font sizes (per `_template/design.md` §7): main illustration labels ≥22px (dist-label 30px, time-label 24px — both above floor), pinned illustration recap ≥21px (22px, icon scaled up to 110×110 to match).

---

## PART 4: Animation Complexity Notes

- Only 2 solving steps (Given + Step 1 + Step 2) — only two connector lines (`#line-g-1`, `#line-1-2`) are needed.
- Step 1 is the densest card content-wise (5 reveal lines: context + 3 conversion lines + boxed total, across ~27s of narration) — it carries both the unit-conversion mechanics and the "add the whole hour back" combination step.
- The icon's Phase-1 drift (`ease:"none"`, linear, 5.3s→15.4s) is the only continuous (non-punctual) motion in the whole video.
- `apt.ambientLoop` on the pinned icon spans 17.94s → 74.4s (~56s) — verify in preview it doesn't visibly hitch at the loop boundary.
- Step 1 and Step 2 solution cards are widened (960px, 1000px respectively) so their longest lines fit on one line instead of wrapping — re-check in preview that the wider cards don't overlap the pinned question card above them or run past the frame edge.
- A synchronized end-fade (`#root > div`, 82.0s, 1.2s) closes the video, ~0.4s after the correct-pulse settles (pulse lands 80.4–81.2s, right on "option A.").
- No `apt.emphasize`/`apt.resultReveal` layered on any text-reveal-driven card content, per the design system's "one reveal only" rule.

## PART 5: Master Timeline Overview

```
0.0    ─ Question card lowered-entrance begins (heroEnterLowered)
0.8    ─ Serial badge pops (lowered)
4.3    ─ Question card + badge rise to resting slot                [RISE_TIME]
4.6    ─ Road sweeps in
5.0    ─ Icon enters
5.3–15.4 ─ Icon drifts along road (linear)
8.0    ─ "35 km" distance label fades in
9.84   ─ "1 hr 24 min" time label fades in
16.24  ─ PIN FLOW — question + illustration glide to pinned slots   [PIN_TIME]
17.04  ─ Pin glide lands; serial badge fully faded
17.94–74.4 ─ Ambient bob loop on pinned icon
19.52  ─ Given card enters                                          [GIVEN_TIME]
22.64  ─ "Time = 1 hr 24 min" line reveals
25.2   ─ Given → stack morph (completes 26.0)
26.0   ─ Step 1 card enters
36.7–50.8 ─ Step 1 conversion + combine lines reveal → boxed 7/5 hr
52.46  ─ Step 1 → stack morph + line-g-1 grows (completes 53.26)
53.26  ─ Step 2 card enters
54.98–73.16 ─ Step 2 formula → substitution → reciprocal rule → calc → boxed 25 km/hr
74.4   ─ Step 2 → stack morph + line-1-2 grows (completes 75.2)
75.2   ─ Illustration fades out; pinned question recenters          [RECENTER_TIME]
75.7   ─ Options grid fades in
76.2   ─ Options stagger in (A/B/C/D)
80.4   ─ Correct option (A) pulses, synced to "option A."
81.60  ─ Voiceover ends
82.0   ─ END FADE — every top-level element fades out together (1.2s)  [END_FADE_TIME]
84.5   ─ Composition end
```
