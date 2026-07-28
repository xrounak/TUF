# Storyboard — Speed-Time-Distance Q29
**Train crosses a pole — find the speed**

Video length: **64.34s** (voiceover duration) — final `END_FADE_TIME` ≈ 65.5s, clip tail to ~67.7s.
Topic name: **"Speed, Time and Distance"**

Sibling reference: q28 ("train crosses a pole, given speed+time, find length") is the
near-identical structural sibling — same single-train-on-a-track illustration language
(`roadSweep` track, train slide-in, a fixed pole, a measuring bracket proving
"distance = length"), and the same concept beat. This storyboard reuses that visual
grammar directly. The key differences: q29 is the *inverse* problem — Length (210 m)
and Time (14 s) are given, and the answer to find is Speed — so the Given card shows
Length+Time (not Speed+Time), Step 1 applies the distance formula directly
(`Speed = Distance ÷ Time`) instead of first needing a unit conversion, and Step 2 is
the km/hr conversion (instead of the distance formula). Also, unlike q28 — where the
given values were only spoken once, during the initial question statement — q29's
script deliberately **restates** them in their own clean beat right after the concept
beat ("So distance covered is 210 meter, and time taken is 14 seconds."). That
restatement, not the rushed first mention inside the full question sentence, is used
as the Given card's `GIVEN_TIME` — it is the moment the narration is actually
*stating* the given values, per the hard rule that `GIVEN_TIME` must be its own
transcript-derived timestamp.

---

## PART 1: Narration Beat Analysis

| # | Time (s) | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|----------|-----------|----------------------|------------------|-------------------|
| 1 | 0.10–3.18 | "So welcome back again. Time for one more problem." | Cold open / hook | Center screen | QuestionCard hero rises into view |
| 2 | 3.78–14.24 | "Now in this problem, we are given that a train of length two hundred ten meter crosses a pole in fourteen seconds. The question is asking us to find the speed of the train in kilometer per hour." | State the full problem | QuestionCard text + illustration | Train + pole illustration builds while question narration continues |
| 3 | 14.76–22.42 | "Now first, let us understand one important concept. When a train crosses a pole, it covers a distance equal to its own length." | Core conceptual insight (crossing distance = train's own length) | Illustration | Train visibly slides across the fixed pole; a bracket spanning exactly the train's own length appears once it has fully passed |
| 4 | 22.80–28.40 | "So distance covered is two hundred ten meter, and time taken is fourteen seconds. Now, we know the formula." | Consolidate the given values into a Given card | Given card | Given card opens and reveals both values exactly as they're restated |
| 5 | 28.40–39.54 | "...Speed is equal to distance divided by time. Putting the values, speed is equal to two hundred ten divided by fourteen. After simplifying this, we get fifteen meter per second." | Compute the speed in m/s (Step 1) | Step 1 card | Formula reveals term-by-term, resolves to 15 m/s |
| 6 | 40.00–45.88 | "But the question is asking for the speed in kilometer per hour, not in meter per second." | Bridge beat — motivates the unit conversion | Step 1 card (held, no new reveal) | Card stays on screen while the narration explains *why* another step is needed |
| 7 | 46.30–57.26 | "So we must convert the unit. We know one meter per second is equal to eighteen by five kilometer per hour. So fifteen into eighteen by five is fifty-four kilometers per hour." | Unit conversion — the payoff (Step 2) | Step 2 card | Formula resolves straight to 54 km/hr |
| 8 | 57.68–61.00 | "So the speed of the train is fifty-four kilometers per hour." | Confirm the final answer | Step 2 card → recenter | Layout recenters, clearing the stage for options |
| 9 | 61.54–64.34 | "Hence, the correct answer is option C." | Final answer reveal | Options grid | Options grid appears, C pulses green |

---

## PART 2: Scene-by-Scene Storyboard

### SCENE 1 — Hero Question Open
**TIMESTAMP:** 0.0 – 2.9s
**VOICEOVER:** "So welcome back again. Time for one more problem."
**VISUAL OBJECTIVE:** Establish the question card as the sole focal point, vertically centered while alone in frame.
**SCREEN LAYOUT:** `#q-full-card` centered horizontally at `left:50%`, starts lowered (`heroEnterLowered`, offsetY 180) so it reads as vertically balanced with nothing else on screen yet.
**ON-SCREEN ELEMENTS:** Dotted grid, bottom strip, topic name "Speed, Time and Distance" (bottom-left), logo (bottom-right), SerialNum badge "Q" (top-left, follows card's lowered position), QuestionCard containing: *"A train of length 210 m crosses a pole in 14 seconds. Find the speed of the train in km/hr."* with `210 m` and `14 seconds` in `--primary` blue via `.num` spans.
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 2.9)` — fromTo lowered+scaled+faded to resting lowered pose at 0.3s (0.7s, `back.out(1.4)`), then rises to final position at `RISE_TIME=2.9s` (0.6s, `power2.inOut`). SerialNum badge pop-in at 0.8s (`back.out(2)`, mirrored y-offset), rises in tandem at 2.9s.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Hard cut in from background layers (grid/strip/logo present from t=0).
**EDUCATIONAL PURPOSE:** Cold open, orients viewer to the problem statement.
**VISUAL HIERARCHY:** QuestionCard > SerialNum > background layers.
**ATTENTION MANAGEMENT:** Single element on screen — no competition for focus.
**MOTION NOTES:** The rise at 2.9s should feel like the card "settling" right as "one more problem" finishes.
**CONTINUITY FROM PREVIOUS SCENE:** N/A — opening scene.

---

### SCENE 2 — Full Question Stated + Illustration Builds
**TIMESTAMP:** 3.78 – 14.24s
**VOICEOVER:** "Now, in this problem, we are given that a train of length two hundred ten meter crosses a pole in fourteen seconds. The question is asking us to find the speed of the train in kilometer per hour."
**VISUAL OBJECTIVE:** Build the train + pole illustration under the settled question card, anchoring both given numbers to concrete objects the instant they're spoken. The Given card does **not** open here — it waits for the dedicated restatement beat in Scene 4, so the numbers aren't shown twice in quick succession.
**SCREEN LAYOUT:** `#illustration` centered at `left:50%; top:400px; width:1400px; height:260px`.
**ON-SCREEN ELEMENTS:** `illustration/train.svg` (~170px wide) slides in from the left at 5.60s (when "train" is first spoken) and settles with its front edge resting just short of a fixed pole. A length tag "210 m" fades in above the train at 6.50s (when "two hundred ten" begins). A thin CSS pole (vertical `--primary` bar with a small rounded cap, ~130px tall) grows in at 7.96s (when "pole" is spoken). A small "14 s" label appears beside the pole at 8.32s (when "fourteen" is spoken).
**ANIMATION DETAILS:** Track: `apt.roadSweep(tl, "#illus-track", 5.6, 0.7)` + opacity fade. Train: `gsap.fromTo` slide-in x:-200→0, scale 0.7→1, opacity 0→1, 0.6s `back.out(1.6)`, at 5.6s. Length tag: fade+y, 0.45s `back.out(2)`, at 6.5s. Pole: `gsap.fromTo` scaleY 0→1 + opacity, 0.4s `back.out(1.6)`, at 7.96s. "14 s" label: fade+y, 0.45s `back.out(2)`, at 8.32s.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Continuous build — no cuts within the scene.
**EDUCATIONAL PURPOSE:** Anchors both given numbers to concrete visual objects (the train, the pole) before any math starts.
**VISUAL HIERARCHY:** QuestionCard (top) > Illustration (train + pole + labels) > background.
**ATTENTION MANAGEMENT:** Each visual element appears exactly when its number is spoken — no early reveals.
**MOTION NOTES:** The train should rest with its front edge just shy of the pole, visually "about to cross" — this sets up Scene 3's crossing motion.
**CONTINUITY FROM PREVIOUS SCENE:** The question card is already at rest (Scene 1's rise completed at 2.9s); this scene only adds the illustration beneath it — the card itself does not move again until the pin at 28.4s.

---

### SCENE 3 — Concept Beat (Distance = Train's Own Length)
**TIMESTAMP:** 14.76 – 22.42s
**VOICEOVER:** "Now first, let us understand one important concept. When a train crosses a pole, it covers a distance equal to its own length."
**VISUAL OBJECTIVE:** Visually prove that crossing a pole = the train travelling exactly its own body length, by sliding the train past the fixed pole and then measuring the exact span it moved.
**SCREEN LAYOUT:** Action happens entirely within `#illustration` — no new cards.
**ON-SCREEN ELEMENTS:** The train (`#illus-train-wrap`) slides rightward starting at 18.539s (on the word "crosses" in "When a train crosses a pole,") so that its front edge — which started exactly at the pole — ends the slide with its REAR edge at the pole. The slide distance therefore equals the train's own rendered width (170px), a literal geometric demonstration of the concept. The length tag fades out as the slide begins (it's no longer the focus). Once the slide completes (22.42s, aligned to "length." finishing), a measuring bracket (`#brace-length`) grows in beneath the crossing zone, spanning exactly that 170px span, with tick marks at both ends and a label "Distance = Length of Train" fading in just above it.
**ANIMATION DETAILS:** `tl.to("#illus-length-tag", {opacity:0, duration:0.4}, 18.539)`. `tl.to("#illus-train-wrap", {x:170, duration:3.881, ease:"power1.inOut"}, 18.539)` (lands exactly at 22.42). Bracket: `gsap.fromTo` scaleX 0→1 + opacity, 0.6s `power3.out`, at 22.5s. Tick marks: `back.out(2)`, 0.3s, at 22.9s. Label: fade+y, 0.4s `power2.out`, at 23.1s.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** No cuts — additive motion layered on the Scene 2 illustration.
**EDUCATIONAL PURPOSE:** The single most important conceptual leap in this problem (crossing a pole = own length) gets a dedicated, mostly-wordless visual beat instead of being buried in narration.
**VISUAL HIERARCHY:** Train crossing motion + bracket (momentary focal point) > pinned-soon question (top).
**ATTENTION MANAGEMENT:** No cards on screen yet during this beat, so the crossing motion and bracket draw full attention.
**MOTION NOTES:** Keep the slide slow and deliberate (3.88s over 170px) — it should read as "watch the whole train pass," not a quick cut.
**CONTINUITY FROM PREVIOUS SCENE:** Directly continues Scene 2's illustration, already in its resting state; this scene only adds motion + the bracket reveal within `#illustration`, no layout change yet.

---

### SCENE 4 — Given Card Opens
**TIMESTAMP:** 22.80 – 28.40s
**VOICEOVER:** "So distance covered is two hundred ten meter, and time taken is fourteen seconds. Now, we know the formula."
**VISUAL OBJECTIVE:** Consolidate the concept beat's numbers into a Given card exactly where the narration cleanly restates them — this is the deliberate `GIVEN_TIME`, distinct from and after the initial (rushed) mention in Scene 2's question statement.
**SCREEN LAYOUT:** `#card-given` at `left:640px; top:700px` (Phase-1 resident, sitting below the still-visible illustration and bracket — same pattern as sibling q28's Given card).
**ON-SCREEN ELEMENTS:** Given card opens with chip "Given" and two lines: "Length = 210 m" (value word-synced to 23.92s, "two" of "two hundred ten") and "Time = 14 s" (value word-synced to 27.019s, "fourteen").
**ANIMATION DETAILS:** `apt.cardEnter(tl, "#card-given .solution-card", 22.8)` then `apt.textReveal(tl, "#card-given .math")` (word-level on both numeric values, per `transcript.json`).
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** No cuts — the bracket/label from Scene 3 remain visible and passive; the Given card simply adds beneath them.
**EDUCATIONAL PURPOSE:** Locks in the two given values as a clean reference right after their concrete meaning (own-length crossing) has just been demonstrated.
**VISUAL HIERARCHY:** Illustration + bracket (top, settled) > Given card (new, below).
**ATTENTION MANAGEMENT:** Only the Given card's two values reveal here — nothing else changes.
**MOTION NOTES:** Plain opacity/y fade per `apt.cardEnter` + `apt.textReveal` — no extra flourish, this is a consolidation beat.
**CONTINUITY FROM PREVIOUS SCENE:** The bracket and its label are still on screen exactly as Scene 3 left them; the Given card opens beneath without disturbing them.

---

### SCENE 5 — Pin + Given → Stack, Step 1 (Speed = Distance ÷ Time)
**TIMESTAMP:** 28.40 – 46.30s
**VOICEOVER:** "Now, we know the formula. Speed is equal to distance divided by time. Putting the values, speed is equal to two hundred ten divided by fourteen. After simplifying this, we get fifteen meter per second. But the question is asking for the speed in kilometer per hour, not in meter per second."
**VISUAL OBJECTIVE:** Reorganize into Phase 2 layout — question and illustration glide to their pinned slots, the Given card morphs straight into the stack (it's already been visible since Scene 4, no re-entry needed), and Step 1 opens to compute the speed directly from the distance formula. The card then holds through the "but the question wants km/hr, not m/s" bridge line, which motivates Step 2.
**SCREEN LAYOUT:** `#q-pinned` at `left:385px; top:30px; width:1275px`. `#illus-pinned` at `left:280px; top:190px` (single shrunk train icon + recap text, centered). `#stack-given .stack-card` at `left:100px; top:140px`. `#card-step1 .solution-card` centered at `left:640px; top:470px`.
**ON-SCREEN ELEMENTS:** Pinned QuestionCard (shorter text, numbers still highlighted). Pinned illustration: shrunk train icon + a small pole glyph + recap text "210 m · 14 s". Given card shrinks into the stack column (badge "G"). Step 1 SolutionCard opens with chip "Step 1", math:
```
Speed = Distance/Time  (fraction glyph)
Speed = 210/14  (fraction glyph)
= 15 m/s
```
**ANIMATION DETAILS:**
- `PIN_TIME = 28.4` — `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 28.4)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 28.4)` fired together.
- `apt.fadeOut(tl, "#serial-num", 28.4, 0.5)`.
- `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 28.4)` — same time as the pin, exactly mirroring q28 (the Given card has been visible since 22.8s, so it morphs directly rather than re-entering first).
- `apt.cardEnter(tl, "#card-step1 .solution-card", 29.4)`.
- `apt.textReveal(tl, "#card-step1 .math")`:
  - Line 1 "Speed = Distance/Time" — **line-level**, `data-t=29.879` ("Speed is equal to distance divided by time."), rendered as a `.frac` glyph rather than a ÷ sign.
  - Line 2 "Speed = 210/14" — **word-level**: "Speed =" at 33.759 ("speed is equal to"), the `210/14` fraction glyph at 34.579 (within "speed is equal to two hundred ten divided by fourteen").
  - Line 3 "= 15 m/s" — **word-level**, `data-t=38.459` ("we get fifteen meter per second").
- `apt.ambientLoop(tl, "#illus-pinned-icon", 30.0, 46.0)` — small bob on the pinned train icon since Step 1's hold (including the "but km/hr, not m/s" bridge line) has no new illustration reveal.
**CAMERA MOVEMENT:** None (glide is object motion).
**TRANSITIONS:** `pinFlow` glide + standard morph.
**EDUCATIONAL PURPOSE:** Consolidates the given values into the stack, then computes the speed via the plain distance formula, and holds long enough for the narration to explicitly justify why a second (conversion) step is coming.
**VISUAL HIERARCHY:** Step 1 card (center, active) > Given stack card (left, archived) > pinned question/illustration.
**ATTENTION MANAGEMENT:** Only one active card at a time; the stack card reads as "done" (lighter bg, no shadow).
**MOTION NOTES:** The formula's word-level reveal should feel like the numbers are being "spoken into place" — plain opacity fade only, per design.md.
**CONTINUITY FROM PREVIOUS SCENE:** The bracket/label have already faded (pinFlow's fade-out on `#illustration`'s full form), so Step 1 opens into a clean center stage; the Given card's morph begins the instant the pin fires, keeping the take continuous.

---

### SCENE 6 — Step 1 → Stack, Step 2 (Unit Conversion) + Options Reveal
**TIMESTAMP:** 46.30 – 64.34s
**VOICEOVER:** "So we must convert the unit. We know one meter per second is equal to eighteen by five kilometer per hour. So fifteen into eighteen by five is fifty-four kilometers per hour. So the speed of the train is fifty-four kilometers per hour. Hence, the correct answer is option C."
**VISUAL OBJECTIVE:** Convert the m/s answer into km/hr — the payoff calculation the whole video has been building to — then reveal the correct option.
**SCREEN LAYOUT:** `#stack-step1 .stack-card` at `left:100px; top:300px`. `#card-step2 .solution-card` centered at `left:600px; top:440px; width:740px`. `.pinned-col` options grid at `top:400px`.
**ON-SCREEN ELEMENTS:** Step 1 stack card (badge "1") joins the column; `.stack-line` connector `#line-g-1` grows between badges "G" and "1". Step 2 card opens, chip "Step 2", math:
```
Speed (km/hr) = Speed (m/s) × 18/5
= 15 × 18/5
= 54 km/hr
```
Then: illustration recentered away, stack column stays visible, options grid (A 50 km/hr / B 60 km/hr / C 54 km/hr / D 48 km/hr) fades in with C highlighted green.
**ANIMATION DETAILS:**
- `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 46.3)` — 0.8s, completes 47.1s.
- `apt.stackLineGrow(tl, "#line-g-1", 46.3)`.
- `apt.cardEnter(tl, "#card-step2 .solution-card", 47.3)`.
- `apt.textReveal(tl, "#card-step2 .math")`:
  - Line 1 "Speed (km/hr) = Speed (m/s) × 18/5" — **line-level**, `data-t=48.0` ("We know one meter per second is equal to eighteen by five kilometer per hour.").
  - Line 2 "= 15 × 18/5" — **word-level**, `15` at 53.18, `×` at 53.5, `18/5` (fraction) at 53.779 (within "fifteen into eighteen by five").
  - Line 3 "= 54 km/hr" (`.ans` styled) — **word-level**, `data-t=55.86` ("is fifty-four kilometers per hour").
- `RECENTER_TIME = 61.0` — `apt.fadeOut(tl, "#illus-pinned", 61.0)`, `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 61.0)`.
- `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 61.0)`, `apt.stackLineGrow(tl, "#line-1-2", 61.0)`.
- `apt.fadeIn(tl, "#options-reveal", 62.0)`.
- `apt.optionsStagger(tl, ".opt-btn", 62.4)`.
- `apt.correctPulse(tl, ".opt-btn.correct", 63.9)` (lands just before "option C." finishes at 64.34).
- `END_FADE_TIME = 65.5` — `apt.fadeOut(tl, "#root > div", 65.5, 1.2)`.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Final morph + recenter glide + options stagger + pulse, then synchronized full-frame fade-out.
**EDUCATIONAL PURPOSE:** Delivers the payoff of the whole video — the m/s speed from Step 1 converts directly to the final km/hr answer — and confirms it against the actual MCQ options.
**VISUAL HIERARCHY:** Step 2 card → options grid (sequential focal shift) > full stack column (G/1/2) > pinned question.
**ATTENTION MANAGEMENT:** `correctPulse` on option C is the terminal focal point — everything else is settled/static by then.
**MOTION NOTES:** Keep the `15 × 18/5` and `54 km/hr` reveals crisp and separated (distinct word groups) since this is the payoff calculation.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1's card is mid-text-fade as Step 2's cue fires; the stack column's G→1 chain extends to G→1→2 by scene end, and the pinned question's recenter glide reuses the same `pinFlow`-style continuous-motion language established at the Scene 5 pin.

---

## PART 3: Asset List Required

- `illustration/train.svg` (already present, identical asset to sibling q28) — flat 2D train icon, used full-size in Phase 1 and shrunk in the pinned recap.
- Pole — pure CSS vertical bar (`--primary` fill, rounded cap), no new SVG asset needed.
- "Distance = Length of Train" bracket/brace (Scene 3) — pure CSS (a thin `--primary` border-bottom line with tick marks + centered label), no SVG needed.
- All cards/chips/options/logo/serial-badge — existing shared components from `_template/assets/` and `design-system.css`. No new components introduced.

## PART 4: Animation Complexity Notes

- Standard patterns only: `heroEnterLowered`, `pinFlow` (×2, paired), `cardEnter` (×3), `textReveal` (×3), `morphToStack` (×3), `stackLineGrow` (×2), `setStackLine` (×2), `ambientLoop` (×1), `fadeIn`/`fadeOut`, `recenterForOptions`, `optionsStagger`, `correctPulse`.
- Two small custom (non-`animations.js`) tweens, same pattern as q28: the train's crossing slide and the pole/bracket build in Scenes 2–3, added directly in the per-question `<script>` block — one-off illustration-content animations, not new shared helpers.
- No `apt.stepFlow` used (correctly dropped per README 4D.1).
- No double-animation risk: text-reveal-driven cards never also get `emphasize`/`resultReveal`.
- Only 2 steps (distance formula, unit conversion) — same count as q28, but in reversed order (formula first here, since Length+Time are given and Speed is the unknown; q28 converts speed to m/s first, then applies the formula).

## PART 5: Master Timeline Overview

```
0.0    Phase 1 starts — QuestionCard hero (lowered) enters
0.8    SerialNum badge pop
2.9    QuestionCard + badge rise to resting position
5.60   Track sweep + train illustration slides in
6.50   "210 m" length tag fades in
7.96   Pole grows in
8.32   "14 s" label fades in
[ Concept beat ]
18.539 Train begins crossing-slide (170px, own length)
22.42  Slide completes
22.5   Measuring bracket grows in
22.9   Tick marks
23.1   "Distance = Length of Train" label
[ GIVEN_TIME = 22.8 ]
22.8   Given card enters (Phase 1, below illustration)
23.92  Given line 1 value reveal (210 m)
27.02  Given line 2 value reveal (14 s)
[ PIN_TIME = 28.4 ]
28.4   pinFlow: question + illustration glide to pinned slots (0.8s)
28.4   Given → stack morph (same time as pin)
29.4   Step 1 card enters
30.0–46.0  ambientLoop on pinned train icon
29.88–38.46  Step 1 formula reveals (line + word level, fraction glyphs not ÷)
[ 46.3 ]  Step 1 → stack morph + line-g-1 grows
47.3   Step 2 card enters
48.0–55.86  Step 2 formula reveal (line + word level)
[ RECENTER_TIME = 61.0 ]
61.0   illus-pinned fades out; q-pinned recenters; Step 2 → stack morph + line-1-2 grows
62.0   options-reveal fades in
62.4   options stagger in
63.9   correctPulse on option C
[ END_FADE_TIME = 65.5 ]  full-frame fade out (1.2s)
~67.7  End
```
