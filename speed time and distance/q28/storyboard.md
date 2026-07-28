# Storyboard — Speed-Time-Distance Q28
**Train crosses a pole**

Video length: **68.82s** (voiceover duration) — final `END_FADE_TIME` ≈ 70.0s, clip tail to ~72s.
Topic name: **"Speed, Time and Distance"**

Sibling reference: q27 ("train crosses a platform") is the closest built sibling — same
single-train-on-a-track illustration language, same Given→Step→Step structure. This
storyboard reuses its visual grammar (roadSweep track, train slide-in, a fixed
milestone object on the track, a measuring bracket proving the "distance = length"
concept) but scales it down: there is no platform, so the crossing distance equals
the train's OWN length rather than train+platform, and the milestone object is a
pole (thin CSS post) instead of a platform block. Only 2 steps (unit conversion,
distance formula) instead of 3, since there's no separate "train + platform = total"
equation to solve — the answer drops straight out of Step 2.

---

## PART 1: Narration Beat Analysis

| # | Time (s) | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|----------|-----------|----------------------|------------------|-------------------|
| 1 | 0.10–2.58 | "So welcome back again. Time for one more problem." | Cold open / hook | Center screen | QuestionCard hero rises into view |
| 2 | 2.98–12.58 | "Now in this problem, we are given that a train is running at 72 km/hr. It crosses a pole in 18 seconds. The question is asking us to find the length of the train." | State the full problem | QuestionCard text + illustration | Train + pole illustration builds while question text highlights the numbers |
| 3 | 12.98–20.46 | "Now let us understand one important concept first. To cross a pole, trains travel a distance equal to its own length." | Core conceptual insight (crossing distance = train's own length) | Pinned-soon illustration | Train visibly slides across the fixed pole; a bracket spanning exactly the train's own length appears once it has fully passed |
| 4 | 21.96–43.02 | "Now first, let us convert the speed into meters per second because the time is given in seconds. We know speed in m/s = speed in km/hr × 5/18. Putting the values, 72 × 5/18. After simplifying, we get 20 m/s." | Unit conversion (Step 1) | Step 1 card | Formula reveals term-by-term, resolves to 20 m/s |
| 5 | 43.52–65.86 | "Now that we know the speed, we can use the distance formula. Distance = speed × time. Since the distance covered to cross the pole is the length of the train, length of the train = 20 × 18. After solving, we get 360 m. So the length of the train is 360 m." | Compute the final answer (Step 2) | Step 2 card | Distance formula resolves straight to the train's length — 360 m — no separate equation needed since crossing distance IS the train length |
| 6 | 66.38–68.82 | "Hence, the correct answer is option C." | Final answer reveal | Options grid | Options grid appears, C pulses green |

---

## PART 2: Scene-by-Scene Storyboard

### SCENE 1 — Hero Question Open
**TIMESTAMP:** 0.0 – 2.9s
**VOICEOVER:** "So welcome back again. Time for one more problem."
**VISUAL OBJECTIVE:** Establish the question card as the sole focal point, vertically centered while alone in frame.
**SCREEN LAYOUT:** `#q-full-card` centered horizontally at `left:50%`, starts lowered (`heroEnterLowered`, offsetY 180) so it reads as vertically balanced with nothing else on screen yet.
**ON-SCREEN ELEMENTS:** Dotted grid, bottom strip, topic name "Speed, Time and Distance" (bottom-left), logo (bottom-right), SerialNum badge "Q" (top-left, follows card's lowered position), QuestionCard containing: *"A train running at 72 km/hr crosses a pole in 18 seconds. What is the length of the train?"* with `72 km/hr` and `18 seconds` in `--primary` blue via `.num` spans.
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 2.9)` — fromTo lowered+scaled+faded to resting lowered pose at 0.3s (0.7s, back.out(1.4)), then rises to final position at RISE_TIME=2.9s (0.6s, power2.inOut). SerialNum badge pop-in at 0.8s (`back.out(2)`, mirrored y-offset), rises in tandem at 2.9s.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Hard cut in from background layers (grid/strip/logo present from t=0).
**EDUCATIONAL PURPOSE:** Cold open, orients viewer to the problem statement.
**VISUAL HIERARCHY:** QuestionCard > SerialNum > background layers.
**ATTENTION MANAGEMENT:** Single element on screen — no competition for focus.
**MOTION NOTES:** The rise at 2.9s should feel like the card "settling" right as "one more problem" finishes.
**CONTINUITY FROM PREVIOUS SCENE:** N/A — opening scene.

---

### SCENE 2 — Full Question Stated + Illustration Builds + Given Card
**TIMESTAMP:** 2.98 – 12.58s (illustration/given build through 8.98s, question narration continues to 12.58s)
**VOICEOVER:** "Now in this problem, we are given that a train is running at 72 km/hr. It crosses a pole in 18 seconds. The question is asking us to find the length of the train."
**VISUAL OBJECTIVE:** Build the train + pole illustration under the settled question card, and open the Given card right alongside it (living in Phase 1, same pattern as sibling q27) so every value is anchored to a concrete object the instant it's spoken.
**SCREEN LAYOUT:** `#illustration` centered at `left:50%; top:400px; width:1400px; height:260px`. `#card-given` at `left:640px; top:700px` (Phase-1 resident, no separate clip wrapper — nested inside `#phase1`, exactly like q27).
**ON-SCREEN ELEMENTS:** `illustration/train.svg` (~170px wide) slides in from the left at 4.48s (when "train" is first spoken) and settles with its front edge resting just short of a fixed pole. A speed tag "72 km/hr" fades in above the train at 5.28s (when "seventy-two" is spoken). A thin CSS pole (vertical `--primary` bar with a small rounded cap, ~140px tall) fades/grows in at 8.14s (when "pole" is spoken). A small "18 s" label appears beside the pole at 8.68s (when "eighteen" is spoken). The Given card opens at 4.48s (same moment the train enters) with two lines: "Speed = 72 km/hr" (value word-synced to 5.28s) and "Time = 18 s" (value word-synced to 8.68s).
**ANIMATION DETAILS:** Track: `apt.roadSweep(tl, "#illus-track", 4.48, 0.7)` + opacity fade. Train: `gsap.fromTo` slide-in x:-200→0, scale 0.7→1, opacity 0→1, 0.6s `back.out(1.6)`, at 4.48s. Speed tag: fade+y at 5.28s. Pole: `gsap.fromTo` scaleY 0→1 + opacity, 0.4s `back.out(1.6)`, at 8.14s. "18 s" label: fade+y at 8.68s. Given card: `apt.cardEnter(tl, "#card-given .solution-card", 4.48)` then `apt.textReveal(tl, "#card-given .math")` (word-level on the two numeric values, per `transcript.json`).
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Continuous build — no cuts within the scene.
**EDUCATIONAL PURPOSE:** Anchors both given numbers to concrete visual objects (the train, the pole) before any math starts, and starts consolidating them into the Given card immediately rather than waiting for the Phase 2 pin.
**VISUAL HIERARCHY:** QuestionCard (top) > Illustration (train + pole + labels) > Given card (below illustration) > background.
**ATTENTION MANAGEMENT:** Each visual element appears exactly when its number is spoken — no early reveals.
**MOTION NOTES:** The train should rest with its front edge just shy of the pole, visually "about to cross" — this sets up Scene 3's crossing motion.
**CONTINUITY FROM PREVIOUS SCENE:** The question card is already at rest (Scene 1's rise completed at 2.9s); this scene only adds the illustration + Given card beneath it — the card itself does not move again until the pin at 21.3s.

---

### SCENE 3 — Concept Beat (Distance = Train's Own Length)
**TIMESTAMP:** 12.98 – 20.46s
**VOICEOVER:** "Now let us understand one important concept first. To cross a pole, trains travel a distance equal to its own length."
**VISUAL OBJECTIVE:** Visually prove that crossing a pole = the train travelling exactly its own body length, by sliding the train past the fixed pole and then measuring the exact span it moved.
**SCREEN LAYOUT:** Action happens entirely within `#illustration` — no new cards, Given card stays visible and passive.
**ON-SCREEN ELEMENTS:** The train (`#illus-train-wrap`) slides rightward starting at 16.30s (on the word "cross" in "To cross a pole,") so that its front edge — which started exactly at the pole — ends the slide with its REAR edge at the pole. The slide distance therefore equals the train's own rendered width (170px), a literal geometric demonstration of the concept. The speed tag fades out as the slide begins (it's no longer the focus). Once the slide completes (20.46s, aligned to "length." finishing), a measuring bracket (`#brace-length`) grows in beneath the crossing zone, spanning exactly that 170px span, with tick marks at both ends and a label "Distance = Length of Train" fading in just above it.
**ANIMATION DETAILS:** `tl.to("#illus-speed-tag", {opacity:0, duration:0.4}, 16.30)`. `tl.to("#illus-train-wrap", {x:170, duration:4.16, ease:"power1.inOut"}, 16.30)` (lands exactly at 20.46). Bracket: `gsap.fromTo` scaleX 0→1 + opacity, 0.6s `power3.out`, at 20.5s. Tick marks: `back.out(2)`, 0.3s, at 20.9s. Label: fade+y, 0.4s, at 21.1s.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** No cuts — additive motion layered on the Scene 2 illustration.
**EDUCATIONAL PURPOSE:** The single most important conceptual leap in this problem (crossing a pole = own length) gets a dedicated, mostly-wordless visual beat instead of being buried in narration.
**VISUAL HIERARCHY:** Train crossing motion + bracket (momentary focal point) > Given card (still visible, passive) > pinned-soon question (top).
**ATTENTION MANAGEMENT:** No new reveals fire on the Given card during this beat, so the crossing motion and bracket draw full attention.
**MOTION NOTES:** Keep the slide slow and deliberate (4.16s over 170px) — it should read as "watch the whole train pass," not a quick cut.
**CONTINUITY FROM PREVIOUS SCENE:** Directly continues Scene 2's illustration and Given card, both already in their resting states; this scene only adds motion + the bracket reveal within `#illustration`, no layout change yet.

---

### SCENE 4 — Pin + Given → Stack, Step 1 (Speed Conversion)
**TIMESTAMP:** 21.3 – 43.02s
**VOICEOVER (pin moment overlaps):** "...Now first, let us convert the speed into meters per second because the time is given in seconds. We know speed in m/s = speed in km/hr × 5/18. Putting the values, 72 × 5/18. After simplifying, we get 20 m/s."
**VISUAL OBJECTIVE:** Reorganize into Phase 2 layout — question and illustration glide to their pinned slots, the Given card morphs straight into the stack (it's already been visible since Scene 2, no re-entry needed), and Step 1 opens to convert the speed.
**SCREEN LAYOUT:** `#q-pinned` at `left:385px; top:30px; width:1275px`. `#illus-pinned` at `left:280px; top:190px` (single shrunk train icon + recap text, centered). `#stack-given .stack-card` at `left:100px; top:140px`. `#card-step1 .solution-card` centered at `left:640px; top:470px`.
**ON-SCREEN ELEMENTS:** Pinned QuestionCard (shorter text, numbers still highlighted). Pinned illustration: shrunk train icon + a small pole glyph + recap text "72 km/hr · 18 s". Given card shrinks into the stack column (badge "G"). Step 1 SolutionCard opens with chip "Step 1", math:
```
Speed (m/s) = Speed (km/hr) × 5/18
= 72 × 5/18
= 20 m/s
```
**ANIMATION DETAILS:**
- `PIN_TIME = 21.3` — `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 21.3)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 21.3)` fired together.
- `apt.fadeOut(tl, "#serial-num", 21.3, 0.5)`.
- `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 21.3)` — same time as the pin, exactly mirroring q27 (the Given card has been visible since Scene 2, so it morphs directly rather than re-entering first).
- `apt.cardEnter(tl, "#card-step1 .solution-card", 22.3)`.
- `apt.textReveal(tl, "#card-step1 .math")`:
  - Line 1 "Speed (m/s) = Speed (km/hr) × 5/18" — **line-level**, `data-t=27.42` ("We know speed in meters per second is equal to...").
  - Line 2 "= 72 × 5/18" — **word-level**, `72` at 36.84, `×` at 37.76, `5/18` (fraction) at 38.04 (within "speed is equal to seventy-two into five by eighteen").
  - Line 3 "= 20 m/s" — **word-level**, `data-t=41.74` ("we get twenty meters per second").
- `apt.ambientLoop(tl, "#illus-pinned-icon", 23.0, 41.5)` — small bob on the pinned train icon since Step 1's ~20s hold has no new illustration reveal.
**CAMERA MOVEMENT:** None (glide is object motion).
**TRANSITIONS:** `pinFlow` glide + standard morph.
**EDUCATIONAL PURPOSE:** Consolidates the given values into the stack, then isolates the unit-conversion sub-skill as its own explicit step.
**VISUAL HIERARCHY:** Step 1 card (center, active) > Given stack card (left, archived) > pinned question/illustration.
**ATTENTION MANAGEMENT:** Only one active card at a time; the stack card reads as "done" (lighter bg, no shadow).
**MOTION NOTES:** The formula's word-level reveal should feel like the numbers are being "spoken into place" — plain opacity fade only, per design.md.
**CONTINUITY FROM PREVIOUS SCENE:** The bracket/label from Scene 3 has already faded (pinFlow's fade-out on `#illustration`'s full form), so Step 1 opens into a clean center stage; the Given card's morph begins the instant the pin fires, keeping the take continuous.

---

### SCENE 5 — Step 1 → Stack, Step 2 (Final Answer) + Options Reveal
**TIMESTAMP:** 42.0 – 68.82s
**VOICEOVER:** "Now that we know the speed, we can use the distance formula. We know distance is equal to speed into time. Since the distance covered to cross the pole is the length of the train, so length of the train is equal to twenty into eighteen. After solving this, we get three hundred sixty meters. So the length of the train is three hundred sixty meters. Hence, the correct answer is option C."
**VISUAL OBJECTIVE:** Apply the distance formula directly to get the train's length (no intermediate equation needed, since crossing distance IS the train length — the Scene 3 concept beat pays off here), then reveal the correct option.
**SCREEN LAYOUT:** `#stack-step1 .stack-card` at `left:100px; top:300px`. `#card-step2 .solution-card` centered at `left:600px; top:440px; width:740px`. `.pinned-col` options grid at `top:400px`.
**ON-SCREEN ELEMENTS:** Step 1 stack card (badge "1") joins the column; `.stack-line` connector `#line-g-1` grows between badges "G" and "1". Step 2 card opens, chip "Step 2", math:
```
Distance = Speed × Time
(crossing distance = length of the train)
Length of train = 20 × 18
= 360 m
```
Then: illustration recentered away, stack column stays visible, options grid (A 320 m / B 380 m / C 360 m / D 300 m) fades in with C highlighted green.
**ANIMATION DETAILS:**
- `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 42.0)` — 0.8s, completes 42.8s.
- `apt.stackLineGrow(tl, "#line-g-1", 42.0)`.
- `apt.cardEnter(tl, "#card-step2 .solution-card", 43.5)`.
- `apt.textReveal(tl, "#card-step2 .math")`:
  - Line 1 "Distance = Speed × Time" — **line-level**, `data-t=47.60` ("We know distance is equal to speed into time.").
  - Line 2 "(crossing distance = length of the train)" — **line-level**, `--topic`-grey annotation (16-18px), `data-t=50.40` ("Since the distance covered to cross the pole is the length of the train,").
  - Line 3 "Length of train = 20 × 18" — **word-level**, `20` at 56.18, `×` at 56.54, `18` at 56.82 ("...is equal to twenty into eighteen.").
  - Line 4 "= 360 m" (`.ans` styled) — **word-level**, `data-t=59.72` ("we get three hundred sixty meters").
- `RECENTER_TIME = 65.9` — `apt.fadeOut(tl, "#illus-pinned", 65.9)`, `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 65.9)`.
- `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 65.9)`, `apt.stackLineGrow(tl, "#line-1-2", 65.9)`.
- `apt.fadeIn(tl, "#options-reveal", 66.9)`.
- `apt.optionsStagger(tl, ".opt-btn", 67.3)`.
- `apt.correctPulse(tl, ".opt-btn.correct", 68.3)` (lands just before "option C." finishes at 68.82).
- `END_FADE_TIME = 70.0` — `apt.fadeOut(tl, "#root > div", 70.0, 1.2)`.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Final morph + recenter glide + options stagger + pulse, then synchronized full-frame fade-out.
**EDUCATIONAL PURPOSE:** Delivers the payoff of the whole video — the crossing-distance concept from Scene 3 directly becomes the train's length here, with no extra algebra step required, and confirms it against the actual MCQ options.
**VISUAL HIERARCHY:** Step 2 card → options grid (sequential focal shift) > full stack column (G/1/2) > pinned question.
**ATTENTION MANAGEMENT:** `correctPulse` on option C is the terminal focal point — everything else is settled/static by then.
**MOTION NOTES:** Keep the `20 × 18` and `360 m` reveals crisp and separated (distinct word groups) since this is the payoff calculation.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1's card is mid-text-fade as Step 2's cue fires; the stack column's G→1 chain extends to G→1→2 by scene end, and the pinned question's recenter glide reuses the same `pinFlow`-style continuous-motion language established at the Scene 4 pin.

---

## PART 3: Asset List Required

- `illustration/train.svg` (already present) — flat 2D train icon, used full-size in Phase 1 and shrunk in the pinned recap.
- Pole — pure CSS vertical bar (`--primary` fill, rounded cap), no new SVG asset needed.
- "Distance = Length of Train" bracket/brace (Scene 3) — pure CSS (a thin `--primary` border-bottom line with tick marks + centered label), no SVG needed.
- All cards/chips/options/logo/serial-badge — existing shared components from `_template/assets/` and `design-system.css`. No new components introduced.

## PART 4: Animation Complexity Notes

- Standard patterns only: `heroEnterLowered`, `pinFlow` (×2, paired), `cardEnter` (×3), `textReveal` (×3), `morphToStack` (×3), `stackLineGrow` (×2), `setStackLine` (×2), `ambientLoop` (×1), `fadeIn`/`fadeOut`, `recenterForOptions`, `optionsStagger`, `correctPulse`.
- Two small custom (non-`animations.js`) tweens, same pattern as q27: the train's crossing slide and the pole/bracket build in Scenes 2–3, added directly in the per-question `<script>` block — one-off illustration-content animations, not new shared helpers.
- No `apt.stepFlow` used (correctly dropped per README 4D.1).
- No double-animation risk: text-reveal-driven cards never also get `emphasize`/`resultReveal`.
- Only 2 steps (vs. q27's 3) since there's no separate train+platform equation to solve — the distance formula's output IS the answer.

## PART 5: Master Timeline Overview

```
0.0    Phase 1 starts — QuestionCard hero (lowered) enters
0.8    SerialNum badge pop
2.9    QuestionCard + badge rise to resting position
4.48   Track sweep + train illustration slides in; Given card enters
5.28   "72 km/hr" speed tag + Given line 1 value reveal
8.14   Pole grows in
8.68   "18 s" label + Given line 2 value reveal
[ Concept beat ]
16.30  Train begins crossing-slide (170px, own length)
20.46  Slide completes
20.5   Measuring bracket grows in
20.9   Tick marks
21.1   "Distance = Length of Train" label
[ PIN_TIME = 21.3 ]
21.3   pinFlow: question + illustration glide to pinned slots (0.8s)
21.3   Given → stack morph (same time as pin)
22.3   Step 1 card enters
23.0–41.5  ambientLoop on pinned train icon
27.42–41.74  Step 1 formula reveals (line + word level)
[ 42.0 ]  Step 1 → stack morph + line-g-1 grows
43.5   Step 2 card enters
47.60–59.72  Step 2 formula + bridging annotation reveal
[ RECENTER_TIME = 65.9 ]
65.9   illus-pinned fades out; q-pinned recenters; Step 2 → stack morph + line-1-2 grows
66.9   options-reveal fades in
67.3   options stagger in
68.3   correctPulse on option C
[ END_FADE_TIME = 70.0 ]  full-frame fade out (1.2s)
~72.0   End
```
