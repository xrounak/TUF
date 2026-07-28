# Storyboard — "Man's Average Speed" (Speed-Time-Distance)

Question: *A man covers 2.4 km in 18 minutes. What is the man's average speed?*
Options: A) 6 km/hr  B) 7 km/hr  C) 9 km/hr  **D) 8 km/hr (correct)**
Voiceover: `voiceover.wav` — duration **72.239s**
Transcript: `transcript.json` / `transcript.txt`

> Resynced 2026-07-14 after a voiceover pronunciation pass ("courier" → "man"
> throughout). Total duration shortened from 75.599s to 72.239s; every
> timestamp below reflects the new transcript. Structure, illustration, and
> animation choices are unchanged — only wording ("courier"→"man") and the
> absolute timing numbers moved.

---

## PART 1: Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Viewer Attention Focus | Visual Objective |
|---|-----------|-----------|----------------------|-------------------------|-------------------|
| 1 | 0.10–5.92 | "So welcome back. I hope you have gone through the theory part for this topic. Now it's time to solve some problems." | Warm open, frame this as applied practice after theory | The question card, appearing calmly | Establish premium, calm opening — card rises into place, nothing else competing for attention |
| 2 | 6.92–15.22 | "Now, in this problem, we are given that a man covers two point four kilometer in eighteen minutes. The question is asking us to find the average speed of the man." | Restate the problem in the viewer's ear while they read it on screen | Illustration builds under the question; distance/time values appear as they're spoken | A man on a delivery bike travels a road; "2.4 km" and "18 min" labels land in sync with the numbers being spoken |
| 3 | 14.78–17.28 | "Now first, let us note down the given values." | Signal the shift from problem-reading to solving | Layout reorganizing — question shrinks and moves up, illustration follows | PinFlow glide clears center stage for the solution cards |
| 4 | 17.76–21.98 | "Distance covered is two point four kilometer. Time taken is eighteen minutes," | Log the two raw given quantities | Given card, values appearing as spoken | Distance and Time lines fade in individually, word-synced |
| 5 | 22.36–26.02 | "but the speed is asked in kilometer per hour, while the time is given in minutes." | Surface the unit mismatch that motivates the next step | The problem's hidden catch | Sets up Step 1 — a plain explanatory line, not a "given" value |
| 6 | 26.98–41.80 | "So before using the formula, we must first convert the time into hours. We know that one hour is equal to sixty minutes, so eighteen minutes is equal to eighteen divided by sixty hours. After simplifying this, we get three by ten hour." | Teach the minutes→hours conversion mechanically, step by step | Step 1 card: 1hr=60min → 18/60 → 3/10 hr | Word-synced reveal of each piece of the conversion, ending on the boxed answer 3/10 hr |
| 7 | 42.50–48.04 | "Now we know the basic formula. Average speed is equal to total distance covered divided by total time taken." | State the core formula being applied | Step 2 card opening — the formula itself | Formula rendered as Distance/Time fraction |
| 8 | 48.78–53.12 | "Putting the values, average speed is equal to two point four divided by three by ten." | Substitute the actual numbers into the formula | The formula becomes a concrete fraction division | 2.4 ÷ (3/10) revealed |
| 9 | 53.82–56.52 | "Dividing by a fraction is the same as multiplying by its reciprocal." | Reinforce the math rule being used (common trip-up point) | A plain rule reminder, not a new given value | Line-level reveal, de-emphasized styling vs. the numeric lines |
| 10 | 57.54–65.78 | "So two point four divided by three by ten becomes two point four into ten by three. After simplifying this, we get eight kilometer per hour." | Execute the reciprocal multiplication to the final number | 2.4 × 10/3 → boxed answer 8 km/hr | Word-synced reveal ending on the highlighted final answer |
| 11 | 66.60–72.24 | "So the average speed of the man is eight kilometer per hour. Hence, the correct answer is option D." | Confirm the answer against the original options | Options grid, D highlighting green exactly on "option D" | Step 2 joins the stack, options fade/stagger in, correct pulse lands on the spoken word |

---

## PART 2: Scene-by-Scene Storyboard

### SCENE 1 — Opening
**TIMESTAMP:** 0.0 – 4.3s
**VOICEOVER:** "So welcome back. I hope you have gone through the theory part for this topic. Now it's time to solve some problems."
**VISUAL OBJECTIVE:** Establish a calm, premium open — nothing but the question card, centered, before any solving begins.
**SCREEN LAYOUT:** Question card vertically centered (hero-lowered position, `y:180` offset from resting slot), dotted-grid background, bottom-strip, topic name "Speed-Time-Distance" bottom-left, logo bottom-right, all static/always-visible from frame 0.
**ON-SCREEN ELEMENTS:** `#q-full-card` (full question text: "A man covers **2.4 km** in **18 minutes**. What is the man's average speed?"), `#serial-num` badge (fixed "Q" letter).
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 4.3)` — card fades/scales up from y:230 to y:180 at 0.3s (0.7s, `back.out(1.4)`), holds lowered through the opening lines, then rises the final 180px to its resting slot exactly at 4.3s (0.6s, `power2.inOut`) as "…for this topic." finishes. Serial badge pops in at 0.8s (`back.out(2)`, mirrored lowered position) and rises in tandem at 4.3s.
**CAMERA MOVEMENT:** None (static frame; only the card itself moves).
**TRANSITIONS:** Card's own rise motion doubles as the transition into Scene 2 — no cut.
**EDUCATIONAL PURPOSE:** Give the viewer a moment to read the full question before narration starts unpacking it.
**VISUAL HIERARCHY:** Question card is the only element with any motion; everything else (grid, strip, topic, logo) is static chrome.
**ATTENTION MANAGEMENT:** Single focal point — no competing motion.
**MOTION NOTES:** The "lowered then rises" beat reads as "the question settles into its place" right as the narrator finishes the intro line — motion is tied to speech, not decorative. (Unchanged by the pronunciation pass — this beat has no "courier"/"man" wording.)
**CONTINUITY FROM PREVIOUS SCENE:** N/A — opening scene.

---

### SCENE 2 — Question Restatement + Illustration Build
**TIMESTAMP:** 4.3 – 14.78s
**VOICEOVER:** "Now, in this problem, we are given that a man covers two point four kilometer in eighteen minutes. The question is asking us to find the average speed of the man."
**VISUAL OBJECTIVE:** Visualize the man's trip while the numbers are spoken, so distance and time land as concrete images, not just text.
**SCREEN LAYOUT:** Question card now at rest (top, `y:0` per hero entrance), illustration area centered below it (`#illustration`, 1400×300 box at `top:480px`).
**ON-SCREEN ELEMENTS:** `#road` (a flat horizontal road bar, dashed white centerline, spanning ~1200px), `#courier` (delivery-bike-and-rider icon, recolored to `--primary`/`--primary-light`/`--topic` tokens, black outline), `#dist-label` ("2.4 km" text tag above the road, 30px), `#time-label` (small clock glyph + "18 min" text tag below the road, 24px).
**ANIMATION DETAILS:**
- 4.6s: `apt.roadSweep(tl, "#road", 4.6)` — road draws in left→right (0.9s, `power3.out`, `scaleX 0→1` from left origin).
- 5.0s: `apt.cardEnter(tl, "#courier", 5.0)` — icon fades/scales in at the road's left edge.
- 5.3s → 14.4s: icon drifts steadily rightward (`tl.to("#courier", {x: 880, duration: 9.1, ease: "none"}, 5.3)`) — a slow, continuous glide representing the journey.
- 9.34s: `apt.fadeIn(tl, "#dist-label", 9.34)` — "2.4 km" label fades in exactly as "two point four kilometer" is spoken.
- 10.56s: `apt.fadeIn(tl, "#time-label", 10.56)` — "18 min" + clock glyph fade in as "eighteen minutes" is spoken.
**CAMERA MOVEMENT:** None — the icon moves within a static frame (no camera pan).
**TRANSITIONS:** Continuous from Scene 1 (question already at rest); flows into Scene 3 via PinFlow.
**EDUCATIONAL PURPOSE:** Anchor the two given quantities (distance, time) to a concrete visual before they're formalized as "given values."
**VISUAL HIERARCHY:** Question card (top, static, secondary) → illustration (center, primary motion) → labels appearing in sync with speech (tertiary, punctual).
**ATTENTION MANAGEMENT:** One moving element plus two punctual label reveals timed to the exact words that name them.
**MOTION NOTES:** The drift is slow and linear (`ease:"none"`) across the whole scene — it reads as "still traveling" for the ~9.1s the narration takes to restate the problem.
**CONTINUITY FROM PREVIOUS SCENE:** The question card is already at its resting position from Scene 1's rise — this scene adds the illustration underneath without re-touching the card.

---

### SCENE 3 — Pin Transition
**TIMESTAMP:** 14.78 – 17.76s
**VOICEOVER:** "Now, first, let us note down the given values."
**VISUAL OBJECTIVE:** Clear center stage for the solution cards by moving the question and illustration into their compact, pinned states.
**SCREEN LAYOUT:** Question card glides from its large centered slot to the pinned slot (`#q-pinned`, `left:385px, top:30px, width:1275px`, shorter question text). Illustration glides from `#illustration` to `#illus-pinned` (`left:280px, top:190px`, smaller, now centered via `justify-content:center`).
**ON-SCREEN ELEMENTS:** Same card + illustration, now transitioning; `#serial-num` fades out (no pinned counterpart).
**ANIMATION DETAILS:**
- `PIN_TIME = 14.78`. `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 14.78)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 14.78)` — both glide together (0.8s, `power2.inOut`), landing at 15.58.
- `apt.fadeOut(tl, "#serial-num", 14.78, 0.5)` — badge fades out in step with the glide.
- `apt.ambientLoop(tl, "#courier-pinned-icon", 16.48, 66.6)` — small finite bob on the pinned icon so the pinned area stays alive through the long Given/Step1/Step2 stretch.
**CAMERA MOVEMENT:** None — the glide itself acts as the "camera."
**TRANSITIONS:** PinFlow *is* the transition — one continuous glide, not a cut.
**EDUCATIONAL PURPOSE:** Visually signal "we've read the problem, now we solve it" without losing the question or the illustration from view.
**VISUAL HIERARCHY:** The glide is the only motion on screen; nothing new enters yet.
**ATTENTION MANAGEMENT:** A single, unmistakable motion cue for the phase change.
**MOTION NOTES:** Question and illustration move as one visual unit (same `PIN_TIME`).
**CONTINUITY FROM PREVIOUS SCENE:** The icon is mid-drift at PIN_TIME (not yet at trip's end) — fine, since the pinned illustration shows a recap, not a literal trip completion.

---

### SCENE 4 — Given Card
**TIMESTAMP:** 17.76 – 22.3s
**VOICEOVER:** "Distance covered is two point four kilometer. Time taken is eighteen minutes,"
**VISUAL OBJECTIVE:** Log the two given quantities as clean, boxed values.
**SCREEN LAYOUT:** `#card-given .solution-card` centered (`left:640px, top:480px`), chip reads "Given".
**ON-SCREEN ELEMENTS:** Two `.math` lines: "Distance = **2.4 km**" and "Time = **18 minutes**".
**ANIMATION DETAILS:**
- `GIVEN_TIME = 17.76`. `apt.cardEnter(tl, "#card-given .solution-card", 17.76)`.
- `apt.textReveal(tl, "#card-given .math")` — word-level spans: "Distance"@17.76, "="@18.72, "2.4"@18.96, "km"@19.54 (line 1); "Time"@20.70, "="@21.22, "18"@21.36, "minutes"@21.66 (line 2).
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Card enters cleanly into the now-empty center stage left by Scene 3's pin.
**EDUCATIONAL PURPOSE:** Separate "what we're told" from "what we compute" — a clean Given card before any math begins.
**VISUAL HIERARCHY:** Given card is the sole focal point; pinned question/illustration sit quietly above/behind it.
**ATTENTION MANAGEMENT:** Two short word-synced reveals, one per line — no more.
**MOTION NOTES:** Values fade in individually per spoken word, not as a block.
**CONTINUITY FROM PREVIOUS SCENE:** The Given card lands at the exact center position PinFlow vacated one beat earlier.

---

### SCENE 5 — Given → Stack, Step 1 (Unit Conversion)
**TIMESTAMP:** 22.3 – 42.1s
**VOICEOVER:** "…but the speed is asked in kilometer per hour, while the time is given in minutes. So before using the formula, we must first convert the time into hours. We know that one hour is equal to sixty minutes, so eighteen minutes is equal to eighteen divided by sixty hours. After simplifying this, we get three by ten hour."
**VISUAL OBJECTIVE:** Archive the Given values into the left stack, then walk through the minutes→hours conversion to its boxed answer.
**SCREEN LAYOUT:** `#stack-given .stack-card` at `left:100px, top:140px`. `#card-step1 .solution-card` centered (`left:510px, top:440px, width:900px` — widened from 700px so the context line fits on one line), chip "Step 1".
**ON-SCREEN ELEMENTS:** Stack-given card (circle badge "G"); Step 1 card with 4 lines: context line ("Speed needed in km/hr, but time is in minutes" — plain, un-highlighted, now one line at the wider card width), "1 hour = 60 minutes", "18 minutes = 18 ÷ 60 hours", boxed answer "= 3/10 hr".
**ANIMATION DETAILS:**
- 22.3s: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 22.3)` (0.8s, completes 23.1).
- 23.1s: `apt.cardEnter(tl, "#card-step1 .solution-card", 23.1)`.
- `apt.textReveal(tl, "#card-step1 .math")`: context line (line-level) @23.30; "1"@32.88, "hour"@33.10, "="@33.34, "60"@33.98, "minutes"@34.40; "18"@35.26, "min"@35.56, "="@35.86, "18"@36.46, "÷"@36.82, "60"@37.42, "hr"@37.78; boxed answer "="@40.28, "3"@40.96, "/"@41.32, "10"@41.60, "hr"@41.80.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** `apt.morphToStack` 0.8s box+text crossfade — Given shrinks/slides into the stack while Step 1 waits to enter at the exact moment the morph lands.
**EDUCATIONAL PURPOSE:** Isolate the conversion as its own reasoning step.
**VISUAL HIERARCHY:** Step 1 card dominates center stage; the Given stack card sits quietly on the left.
**ATTENTION MANAGEMENT:** Four sequential word/line reveals, each timed to its own phrase.
**MOTION NOTES:** The context line is deliberately plain/non-highlighted text.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1's card enters at the same center-stage position the Given card just vacated via the morph.

---

### SCENE 6 — Step 1 → Stack, Step 2 (Apply the Formula)
**TIMESTAMP:** 42.1 – 66.1s
**VOICEOVER:** "Now we know the basic formula. Average speed is equal to total distance covered divided by total time taken. Putting the values, average speed is equal to two point four divided by three by ten. Dividing by a fraction is the same as multiplying by its reciprocal. So two point four divided by three by ten becomes two point four into ten by three. After simplifying this, we get eight kilometer per hour."
**VISUAL OBJECTIVE:** Apply the average-speed formula to the given numbers and carry the arithmetic through to the final boxed answer, 8 km/hr.
**SCREEN LAYOUT:** `#stack-step1 .stack-card` at `left:100px, top:270px` (circle badge "1"), connector `#line-g-1` grown between G and 1. `#card-step2 .solution-card` centered (`left:460px, top:380px, width:1000px` — widened from 760px so the reciprocal-rule line fits on one line), chip "Step 2".
**ON-SCREEN ELEMENTS:** Step 2 card with 5 lines: formula ("Average Speed = Distance⁄Time" as a `.frac`), substitution ("= 2.4 ÷ 3⁄10"), reciprocal rule (plain line, one line at the wider card width), calculation ("= 2.4 × 10⁄3"), boxed final answer ("= **8 km/hr**").
**ANIMATION DETAILS:**
- 42.1s: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 42.1)` (completes 42.9); `apt.stackLineGrow(tl, "#line-g-1", 42.1)`.
- 42.9s: `apt.cardEnter(tl, "#card-step2 .solution-card", 42.9)`.
- `apt.textReveal(tl, "#card-step2 .math")`: formula line word-level "Average"@44.54, "Speed"@44.88, "="@45.18, frac(Distance/Time)@46.06; substitution "="@50.90, "2.4"@51.32, "÷"@51.98, frac(3/10)@52.64; reciprocal rule line-level @53.82; calculation "="@59.44, "2.4"@60.32, "×"@60.88, frac(10/3)@61.12; boxed answer "="@63.88, "8"@64.20, "km/hr"@64.98.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Step 1's morph into the stack directly precedes Step 2's entrance.
**EDUCATIONAL PURPOSE:** The densest reasoning beat of the video.
**VISUAL HIERARCHY:** Step 2 card is the sole center focus; two quiet stack cards (G, 1) with a grown connector line sit at left.
**ATTENTION MANAGEMENT:** Five reveal beats across ~22s of narration, paced to the audio's own pauses.
**MOTION NOTES:** The reciprocal-rule line is plain (unboxed, unhighlighted), same visual language as Step 1's context line.
**CONTINUITY FROM PREVIOUS SCENE:** Step 2 opens at the same center slot Step 1's card is still completing its morph into.

---

### SCENE 7 — Final Answer + Options Reveal
**TIMESTAMP:** 66.1 – ~75.5s (video end)
**VOICEOVER:** "So the average speed of the man is eight kilometer per hour. Hence, the correct answer is option D."
**VISUAL OBJECTIVE:** Confirm the computed answer (8 km/hr) against the four options, landing the green highlight on D exactly as it's spoken.
**SCREEN LAYOUT:** `#stack-step2 .stack-card` at `left:100px, top:392px` (circle badge "2"), connector `#line-1-2` grown between 1 and 2. Pinned question recenters (`apt.recenterForOptions`, `xShift:160, yShift:180`). Options grid (2×2) fades in at `.pinned-col, top:400px`.
**ON-SCREEN ELEMENTS:** Options A (6 km/hr), B (7 km/hr), C (9 km/hr), D (8 km/hr, `class="correct"`). Stack column shows G / 1 / 2, all connected, all visible.
**ANIMATION DETAILS:**
- 66.1s: `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 66.1)` (completes 66.9); `apt.stackLineGrow(tl, "#line-1-2", 66.1)`.
- 66.9s: `apt.fadeOut(tl, "#illus-pinned", 66.9)`; `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 66.9)`.
- 67.4s: `apt.fadeIn(tl, "#options-reveal", 67.4)`.
- 67.9s: `apt.optionsStagger(tl, ".opt-btn", 67.9)` (0.45s × 4, stagger 0.12s).
- 71.5s: `apt.correctPulse(tl, ".opt-btn.correct", 71.5)` — timed to land right as "option D." is spoken (71.62–72.24s).
- 72.9s: **END FADE** — `apt.fadeOut(tl, "#root > div", 72.9, 1.2)` — every top-level element (background layers, pinned question, stack column, options grid) fades out together as one synchronized beat, once narration and the correct-pulse have both settled.
- 75.5s: `tl.set({},{},75.5)` — final timeline marker, after the fade completes and a short blank hold.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Step 2's morph → recenter → options fade-in → stagger → pulse → synchronized end-fade, all as one unbroken sequence closing out the video.
**EDUCATIONAL PURPOSE:** Close the loop — the viewer sees their computed 8 km/hr match option D.
**VISUAL HIERARCHY:** Options grid is the focal point until the end-fade; the full G/1/2 stack remains visible (never faded early) as a visible "receipt" of the reasoning.
**ATTENTION MANAGEMENT:** The correct-option pulse is the last *individual* motion; the end-fade afterward is a single unified beat, not a new focal point.
**MOTION NOTES:** Stack cards and connector lines are never faded during the recenter — they stay visible and continuous through the options reveal, only fading as part of the final synchronized end-fade.
**CONTINUITY FROM PREVIOUS SCENE:** The `#line-1-2` connector grows at the same instant Step 2 lands in the stack, mirroring Scene 6's `#line-g-1` beat.

---

## PART 3: Asset List Required

| Asset | Type | Notes |
|---|---|---|
| `illustration/courier.svg` | SVG (recolored) | Delivery-bike-and-rider icon, originally sourced externally and recolored to design-system tokens only (`--primary` `#6373db`, `--primary-light` `#e2e5ff`, `--topic` `#949494`, black/white) — no invented colors. Used at large size in Phase 1 (`#courier`, 130×130) and reused at 110×110 in the pinned illustration (`#courier-pinned-icon`), matching object-continuity rule. |
| Road bar | CSS-only (`#road`) | Flat gray rectangle with a repeating dashed white centerline. |
| Clock glyph (time label) | Inline SVG in `index.html` | Small circle + two hands, 24px, sits beside "18 min" text. |
| `design-system.css`, `animations.js`, `assets/` (serial badge, logo) | Copied from `_template/` | Standard per Step 5B — no changes. |

Illustration label font sizes (per `_template/design.md` §7): main illustration labels ≥22px (dist-label 30px, time-label 24px — both above floor), pinned illustration recap ≥21px (22px, icon scaled up to 110×110 to match).

---

## PART 4: Animation Complexity Notes

- Only 2 solving steps (Given + Step 1 + Step 2) — only two connector lines (`#line-g-1`, `#line-1-2`) are needed.
- Step 2 is the densest card (5 reveal lines across ~22s of narration) — paced across the natural pauses in the audio.
- The icon's Phase-1 drift (`ease:"none"`, linear, 5.3s→14.4s) is the only continuous (non-punctual) motion in the whole video.
- `apt.ambientLoop` on the pinned icon spans 16.48s → 66.6s (~50s) — verify in preview it doesn't visibly hitch at the loop boundary.
- Step 1 and Step 2 solution cards were widened (700→900px, 760→1000px respectively) so their longest lines fit on one line instead of wrapping — re-check in preview that the wider cards don't overlap the pinned question card above them or run past the frame edge.
- New: a synchronized end-fade (`#root > div`, 72.9s, 1.2s) closes the video — all top-level elements fade out together rather than the composition simply holding its last frame. Verify in preview that this reads as a clean fade and not a flash (some direct children, like `#phase1`, are already invisible by this point — fading an already-hidden element is harmless).
- No `apt.emphasize`/`apt.resultReveal` layered on any text-reveal-driven card content, per the design system's "one reveal only" rule.

## PART 5: Master Timeline Overview

```
0.0   ─ Question card lowered-entrance begins (heroEnterLowered)
0.8   ─ Serial badge pops (lowered)
4.3   ─ Question card + badge rise to resting slot           [RISE_TIME]
4.6   ─ Road sweeps in
5.0   ─ Icon enters
5.3–14.4 ─ Icon drifts along road (linear)
9.34  ─ "2.4 km" distance label fades in
10.56 ─ "18 min" time label fades in
14.78 ─ PIN FLOW — question + illustration glide to pinned slots   [PIN_TIME]
15.58 ─ Pin glide lands; serial badge fully faded
16.48–66.6 ─ Ambient bob loop on pinned icon
17.76 ─ Given card enters                                          [GIVEN_TIME]
20.70 ─ "Time = 18 minutes" line reveals
22.3  ─ Given → stack morph (completes 23.1)
23.1  ─ Step 1 card enters
32.88–41.80 ─ Step 1 conversion lines reveal → boxed 3/10 hr
42.1  ─ Step 1 → stack morph + line-g-1 grows (completes 42.9)
42.9  ─ Step 2 card enters
44.54–64.98 ─ Step 2 formula → substitution → reciprocal rule → calc → boxed 8 km/hr
66.1  ─ Step 2 → stack morph + line-1-2 grows (completes 66.9)
66.9  ─ Illustration fades out; pinned question recenters          [RECENTER_TIME]
67.4  ─ Options grid fades in
67.9  ─ Options stagger in (A/B/C/D)
71.5  ─ Correct option (D) pulses, synced to "option D."
72.24 ─ Voiceover ends
72.9  ─ END FADE — every top-level element fades out together (1.2s)   [END_FADE_TIME]
75.5  ─ Composition end
```
