# Storyboard — Trains, Boats and Streams Q3
**A 180 m train at 54 km/hr crosses a pole**

Video length: **76.879s** (voiceover duration) — final `END_FADE_TIME` ≈ 77.3s, clip tail to ~78.5s.
Topic name: **"Trains, Boats and Streams"**

Sibling reference: `speed time and distance/q28` ("train crosses a pole, find length") is the
closest built sibling — same train+pole illustration language (fixed pole, train slides across
it by exactly its own rendered width, a measuring bracket proves "crossing distance = train's
own length"). This storyboard reuses that visual grammar directly. The difference: q28 is
given speed+time and solves for length; this question is given length+speed and solves for
TIME, so the pole carries a "? s" unknown-target label instead of a known time value, and the
train's own length (180 m) is shown as a label under the train from the start (since it's
GIVEN here, not the unknown).

---

## PART 1: Narration Beat Analysis

| # | Time (s) | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|----------|-----------|----------------------|------------------|-------------------|
| 1 | 0.10–3.32 | "So welcome back again. Time for one more problem." | Cold open / hook | Center screen | QuestionCard hero rises into view |
| 2 | 3.76–16.26 | "Now in this problem, we are given that a train is one hundred eighty meter long, and it is running at fifty-four kilometer per hour. The train crosses a pole. The question is asking us to find how many seconds it takes." | State the full problem | QuestionCard text + illustration | Train + pole illustration builds: length label under train, speed tag above, pole appears, "? s" target label lands on the pole exactly as "how many seconds" is asked |
| 3 | 16.80–29.60 | "Now before solving, let us understand one simple concept. When a train crosses a pole, the pole has almost no width to cover, so the train only has to cover its own length." | Core conceptual insight (crossing distance = train's own length) | Illustration | Train visibly slides across the fixed pole (own-length distance); a "pole width ≈ 0" callout lands on the pole; once the slide completes, a measuring bracket spanning exactly the train's own length appears |
| 4 | 29.96–38.32 | "Now let us write the given values. Length of the train is one hundred eighty meter. Speed of the train is fifty-four kilometer per hour." | Pin the layout and formalize the Given card | Given card | PinFlow glide clears center stage; Given card opens with both values landing on their own words |
| 5 | 38.84–54.72 | "So first, we should convert the speed into meter per second. We know that one kilometer per hour is equal to five by eighteen meters per second. So fifty-four into five by eighteen gives us fifteen meters per second. Now this part is completed." | Unit conversion (Step 1) | Step 1 card | Recall the conversion constant, then substitute and resolve to 15 m/s |
| 6 | 55.14–70.42 | "We already know the distance and the speed. So let us use the formula. Time is equal to distance divided by speed. Putting the values, time is equal to one hundred eighty divided by fifteen. After simplifying this, we get twelve seconds." | Compute the final answer (Step 2) | Step 2 card | Time = Distance/Speed formula resolves to 180/15 = 12 s |
| 7 | 70.90–76.88 | "So the train takes twelve seconds to cross the pole. Hence, the correct answer is option C." | Final answer reveal | Options grid | Step 2 joins the stack, options fade/stagger in, correctPulse lands on "option C" |

---

## PART 2: Scene-by-Scene Storyboard

### SCENE 1 — Hero Question Open
**TIMESTAMP:** 0.0 – 3.76s
**VOICEOVER:** "So welcome back again. Time for one more problem."
**VISUAL OBJECTIVE:** Establish the question card as the sole focal point, vertically centered while alone in frame.
**SCREEN LAYOUT:** `#q-full-card` centered horizontally at `left:50%`, starts lowered (`heroEnterLowered`, offsetY 180) so it reads as vertically balanced with nothing else on screen yet.
**ON-SCREEN ELEMENTS:** Dotted grid, bottom strip, topic name "Trains, Boats and Streams" (bottom-left), logo (bottom-right), SerialNum badge "Q" (top-left, follows card's lowered position), QuestionCard: *"A 180 m long train running at 54 km/hr crosses a pole. How many seconds does it take?"* with `180 m`, `54 km/hr` in `--primary` blue via `.num` spans.
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.76)` — lowered pose at 0.3s (0.7s, `back.out(1.4)`), rises to resting position at RISE_TIME=3.76s (0.6s, `power2.inOut`). SerialNum pop at 0.8s (`back.out(2)`), rises in tandem at 3.76s.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Hard cut in from background layers (present from t=0).
**EDUCATIONAL PURPOSE:** Cold open, orients viewer to the problem statement.
**VISUAL HIERARCHY:** QuestionCard > SerialNum > background layers.
**ATTENTION MANAGEMENT:** Single element on screen.
**MOTION NOTES:** Rise should feel like the card "settling" right as "one more problem" finishes.
**CONTINUITY FROM PREVIOUS SCENE:** N/A — opening scene.

---

### SCENE 2 — Full Question Stated + Illustration Builds
**TIMESTAMP:** 3.76 – 16.26s
**VOICEOVER:** "Now in this problem, we are given that a train is one hundred eighty meter long, and it is running at fifty-four kilometer per hour. The train crosses a pole. The question is asking us to find how many seconds it takes."
**VISUAL OBJECTIVE:** Build the train + pole illustration under the settled question card, anchoring each spoken number to a concrete visual the instant it's said, and landing the unknown "? s" target on the pole itself.
**SCREEN LAYOUT:** `#illustration` centered at `left:50%; top:400px; width:1400px; height:260px`.
**ON-SCREEN ELEMENTS:** Dashed track sweeps in. `illustration/train.svg` (~170px wide) slides in from the left at 4.2s, settling with its front edge just short of a fixed pole. A length label "180 m" fades in directly under the train at 6.14s (when "one hundred eighty" is spoken). A speed tag "54 km/hr" fades in above the train at 9.16s (when "fifty-four" is spoken). The pole (thin `--primary` bar + rounded cap) grows in at 11.28s (when "crosses" is spoken). A "? s" unknown-target label fades in beside the pole at 14.6s (when "how many seconds" is asked).
**ANIMATION DETAILS:** Track: `apt.roadSweep(tl, "#illus-track", 4.2, 0.7)`. Train: slide-in x:-200→0, scale 0.7→1, opacity 0→1, 0.6s `back.out(1.6)`, at 4.2s. Length label: fade+y at 6.139s. Speed tag: fade+y at 9.159s. Pole: scaleY 0→1 + opacity, 0.4s `back.out(1.6)`, at 11.28s. "? s" label: fade+y at 14.6s.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Continuous build — no cuts within the scene.
**EDUCATIONAL PURPOSE:** Anchors both given numbers (length, speed) and the unknown (time) to concrete visual objects before any math starts.
**VISUAL HIERARCHY:** QuestionCard (top) > Illustration (train + pole + labels) > background.
**ATTENTION MANAGEMENT:** Each label appears exactly when its number/question is spoken.
**MOTION NOTES:** Train rests with its front edge just shy of the pole, visually "about to cross" — sets up Scene 3's crossing motion.
**CONTINUITY FROM PREVIOUS SCENE:** Question card already at rest (Scene 1's rise completed at 3.76s); this scene only adds the illustration beneath it.

---

### SCENE 3 — Concept Beat (Distance = Train's Own Length)
**TIMESTAMP:** 16.80 – 30.6s
**VOICEOVER:** "Now before solving, let us understand one simple concept. When a train crosses a pole, the pole has almost no width to cover, so the train only has to cover its own length."
**VISUAL OBJECTIVE:** Visually prove that crossing a pole = the train travelling exactly its own body length, by sliding the train past the fixed pole and then measuring the exact span it moved.
**SCREEN LAYOUT:** Action happens entirely within `#illustration` — no new cards yet.
**ON-SCREEN ELEMENTS:** A "pole width ≈ 0" callout fades in beside the pole at 24.24s (on "almost no width to cover"). The train (`#illus-train-wrap`) slides rightward starting at 21.92s (on "When a train crosses a pole,") so its front edge — which started exactly at the pole — ends the slide with its REAR edge at the pole. The slide distance equals the train's own rendered width (170px), the same value already labeled "180 m" in Scene 2 — a literal geometric demonstration. The speed tag and length label fade out as the slide begins. Once the slide completes (29.16s, aligned to "length." finishing), a measuring bracket (`#brace-length`) grows in spanning that 170px span with tick marks, and a label "Distance = Train's own Length" fades in above it.
**ANIMATION DETAILS:** `tl.to("#illus-speed-tag, #illus-length-tag", {opacity:0, duration:0.4}, 21.92)`. `tl.to("#illus-train-wrap", {x:170, duration:7.24, ease:"power1.inOut"}, 21.92)` (lands exactly at 29.16). "Pole width ≈ 0" label: fade+y, 0.4s, at 24.239s. Bracket: scaleX 0→1 + opacity, 0.6s `power3.out`, at 29.4s. Tick marks: `back.out(2)`, 0.3s, at 29.8s. Label: fade+y, 0.4s, at 30.0s.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** No cuts — additive motion layered on the Scene 2 illustration.
**EDUCATIONAL PURPOSE:** The single most important conceptual leap in this problem (crossing a pole = own length) gets a dedicated, mostly-wordless visual beat.
**VISUAL HIERARCHY:** Train crossing motion + bracket (momentary focal point) > pinned-soon question (top).
**ATTENTION MANAGEMENT:** No competing reveals fire during the crossing motion.
**MOTION NOTES:** Keep the slide slow and deliberate (7.24s over 170px) — it should read as "watch the whole train pass," matched to the full length of the concept narration.
**CONTINUITY FROM PREVIOUS SCENE:** Directly continues Scene 2's illustration, already in its resting state; this scene only adds motion + the bracket reveal, no layout change yet.

---

### SCENE 4 — Pin + Given Card
**TIMESTAMP:** 30.6 – 38.84s
**VOICEOVER (pin moment overlaps):** "Now let us write the given values. Length of the train is one hundred eighty meter. Speed of the train is fifty-four kilometer per hour."
**VISUAL OBJECTIVE:** Reorganize into Phase 2 layout — question and illustration glide to their pinned slots, and the Given card opens to formalize both values as clean boxed lines.
**SCREEN LAYOUT:** `#q-pinned` at `left:385px; top:30px; width:1275px`. `#illus-pinned` at `left:280px; top:190px` (single shrunk train icon + recap text). `#card-given .solution-card` centered at `left:640px; top:480px`.
**ON-SCREEN ELEMENTS:** Pinned QuestionCard (shorter text, numbers highlighted). Pinned illustration: shrunk train icon + recap text "180 m · 54 km/hr". Given card opens with chip "Given", two lines: "Length = 180 m" (value word-synced to 32.14s) and "Speed = 54 km/hr" (value word-synced to 35.56s).
**ANIMATION DETAILS:**
- `PIN_TIME = 30.6` — `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 30.6)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 30.6)` fired together.
- `apt.fadeOut(tl, "#serial-num", 30.6, 0.5)`.
- `GIVEN_TIME = 32.139` (its own transcript timestamp, separate from PIN_TIME — the pin fires mid-phrase during "Now let us write the given values," and the Given card opens the instant the FIRST actual value starts being stated).
- `apt.cardEnter(tl, "#card-given .solution-card", 32.139)`.
- `apt.textReveal(tl, "#card-given .math")`: Line 1 "Length = 180 m" — line-level, `data-t=32.139`. Line 2 "Speed = 54 km/hr" — line-level, `data-t=35.559`.
- `apt.ambientLoop(tl, "#illus-pinned-icon", 32.0, 74.0)` — small bob on the pinned train icon through the long solving stretch.
**CAMERA MOVEMENT:** None (glide is object motion).
**TRANSITIONS:** `pinFlow` glide.
**EDUCATIONAL PURPOSE:** Formalizes the two given numbers into the stack-ready Given card.
**VISUAL HIERARCHY:** Given card (center, active) > pinned question/illustration.
**ATTENTION MANAGEMENT:** Single active card.
**MOTION NOTES:** Bracket/label from Scene 3 already faded via pinFlow's fade-out on `#illustration`'s full form.
**CONTINUITY FROM PREVIOUS SCENE:** The bracket proof from Scene 3 has just settled; the pin fires right after, keeping the take continuous.

---

### SCENE 5 — Given → Stack, Step 1 (Speed Conversion)
**TIMESTAMP:** 38.84 – 55.14s
**VOICEOVER:** "So first, we should convert the speed into meter per second. We know that one kilometer per hour is equal to five by eighteen meters per second. So fifty-four into five by eighteen gives us fifteen meters per second. Now this part is completed."
**VISUAL OBJECTIVE:** Archive the Given card, then recall the conversion constant and apply it to get the speed in m/s.
**SCREEN LAYOUT:** `#stack-given .stack-card` at `left:100px; top:140px` (badge "G"). `#card-step1 .solution-card` centered at `left:640px; top:460px`.
**ON-SCREEN ELEMENTS:** Step 1 card, chip "Step 1", math:
```
1 km/hr = 5/18 m/s
54 × 5/18 = 15 m/s
```
**ANIMATION DETAILS:**
- `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 38.84)` — completes 39.64.
- `apt.cardEnter(tl, "#card-step1 .solution-card", 39.86)`.
- `apt.textReveal(tl, "#card-step1 .math")`:
  - Line 1 "1 km/hr = 5/18 m/s" — word-level: `1`@43.779, `km/hr`@44.0, `=`@45.18, `.frac`(5/18)@45.84, `m/s`@47.139 (within "We know that one kilometer per hour is equal to five by eighteen meters per second.").
  - Line 2 "54 × 5/18 = 15 m/s" — word-level: `54`@48.86, `×`@49.319, `.frac`(5/18)@49.599, `=`@51.159, `.ans`("15 m/s")@51.599.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Standard 0.8s morph.
**EDUCATIONAL PURPOSE:** Isolates the unit-conversion sub-skill as its own explicit step.
**VISUAL HIERARCHY:** Step 1 card (center, active) > Given stack card (left, archived) > pinned question/illustration.
**ATTENTION MANAGEMENT:** Only one active card at a time.
**MOTION NOTES:** Word-level reveal, plain opacity fade only, per design.md.
**CONTINUITY FROM PREVIOUS SCENE:** Given card's morph begins right as Scene 4 settles.

---

### SCENE 6 — Step 1 → Stack, Step 2 (Final Answer) + Options Reveal
**TIMESTAMP:** 55.14 – 76.88s
**VOICEOVER:** "We already know the distance and the speed. So let us use the formula. Time is equal to distance divided by speed. Putting the values, time is equal to one hundred eighty divided by fifteen. After simplifying this, we get twelve seconds. So the train takes twelve seconds to cross the pole. Hence, the correct answer is option C."
**VISUAL OBJECTIVE:** Apply the time formula directly to get the answer, then reveal the correct option.
**SCREEN LAYOUT:** `#stack-step1 .stack-card` at `left:100px; top:280px`. `#card-step2 .solution-card` centered at `left:600px; top:460px; width:740px`. `.pinned-col` options grid at `top:400px`.
**ON-SCREEN ELEMENTS:** Step 1 stack card (badge "1") joins the column; `.stack-line` connector `#line-g-1` grows between badges "G" and "1". Step 2 card opens, chip "Step 2", math:
```
Time = Distance / Speed
Time = 180 / 15
= 12 s
```
Then: stack column stays visible, options grid (A 10.56s / B 13.44s / C 12s / D 14.88s) fades in with C highlighted green.
**ANIMATION DETAILS:**
- `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 54.2)` — completes 55.0.
- `apt.stackLineGrow(tl, "#line-g-1", 54.2)`.
- `apt.cardEnter(tl, "#card-step2 .solution-card", 55.14)`.
- `apt.textReveal(tl, "#card-step2 .math")`:
  - Line 1 "Time = Distance / Speed" — line-level (`.frac`, top=Distance, bot=Speed), `data-t=59.50` ("Time is equal to distance divided by speed.").
  - Line 2 "Time = 180 / 15" — word-level (`.frac`, top=180, bot=15), `data-t=64.639` ("...one hundred eighty divided by fifteen.").
  - Line 3 "= 12 s" (`.ans`) — word-level, `data-t=69.699` ("we get twelve seconds").
- `RECENTER_TIME = 74.32` (fires as "Hence," begins) — `apt.fadeOut(tl, "#illus-pinned", 74.32)`, `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 74.32)`.
- `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 74.32)` — completes 75.12, `apt.stackLineGrow(tl, "#line-1-2", 74.32)`.
- `apt.fadeIn(tl, "#options-reveal", 75.0)`.
- `apt.optionsStagger(tl, ".opt-btn", 75.3)`.
- `apt.correctPulse(tl, ".opt-btn.correct", 76.16)` (lands exactly on "option C." at 76.159–76.759).
- `END_FADE_TIME = 77.3` — `apt.fadeOut(tl, "#root > div", 77.3, 1.0)`.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Final morph + recenter glide + options stagger + pulse, then synchronized full-frame fade-out.
**EDUCATIONAL PURPOSE:** Delivers the payoff — the crossing-distance concept from Scene 3 directly becomes the Time = Distance/Speed substitution here.
**VISUAL HIERARCHY:** Step 2 card → options grid (sequential focal shift) > full stack column (G/1/2) > pinned question.
**ATTENTION MANAGEMENT:** `correctPulse` on option C is the terminal focal point.
**MOTION NOTES:** Keep the `180/15` and `12 s` reveals crisp and separated since this is the payoff calculation.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1's card is mid-text-fade as Step 2's cue fires; the stack column's G→1 chain extends to G→1→2 by scene end, and the recenter glide reuses the same `pinFlow`-style continuous-motion language established at the Scene 4 pin.

---

## PART 3: Asset List Required

- `illustration/train.svg` (copied from `speed time and distance/q28`) — flat 2D train icon, used full-size in Phase 1 and shrunk in the pinned recap.
- Pole — pure CSS vertical bar (`--primary` fill, rounded cap), no new SVG asset needed.
- "Distance = Train's own Length" bracket/brace — pure CSS (a thin `--primary` border-bottom line with tick marks + centered label), no SVG needed.
- All cards/chips/options/logo/serial-badge — existing shared components from `_template/assets/` and `design-system.css`. No new components introduced.

## PART 4: Animation Complexity Notes

- Standard patterns only: `heroEnterLowered`, `pinFlow` (×2, paired), `cardEnter` (×3), `textReveal` (×3), `morphToStack` (×3), `stackLineGrow` (×2), `setStackLine` (×2), `ambientLoop` (×1), `fadeIn`/`fadeOut`, `recenterForOptions`, `optionsStagger`, `correctPulse`.
- A handful of small custom (non-`animations.js`) tweens for the illustration content itself (train slide-in, length/speed tag fades, pole grow-in, "? s" label, crossing slide, bracket+ticks+label) — one-off illustration animations, same pattern as sibling q28, not new shared helpers.
- No `apt.stepFlow` used (correctly dropped per README 4D.1).
- No double-animation risk: text-reveal-driven cards never also get `emphasize`/`resultReveal`.
- Only 2 steps (unit conversion, time formula) since the crossing-distance concept (Scene 3) removes the need for a separate distance-equation step.

## PART 5: Master Timeline Overview

```
0.0    Phase 1 starts — QuestionCard hero (lowered) enters
0.8    SerialNum badge pop
3.76   QuestionCard + badge rise to resting position
4.2    Track sweep + train illustration slides in
6.14   "180 m" length label (under train)
9.16   "54 km/hr" speed tag (above train)
11.28  Pole grows in
14.6   "? s" unknown-target label
[ Concept beat ]
21.92  Train begins crossing-slide (170px, own length); tags fade out
24.24  "Pole width ≈ 0" callout
29.16  Slide completes
29.4   Measuring bracket grows in
29.8   Tick marks
30.0   "Distance = Train's own Length" label
[ PIN_TIME = 30.6 ]
30.6   pinFlow: question + illustration glide to pinned slots (0.8s)
32.139 GIVEN_TIME — Given card enters, line 1 ("Length = 180 m")
32.0–74.0  ambientLoop on pinned train icon
35.559 Given card line 2 ("Speed = 54 km/hr")
[ 38.84 ]  Given → stack morph
39.86  Step 1 card enters
42.66–51.599  Step 1 formula reveals (word level)
[ 54.2 ]  Step 1 → stack morph + line-g-1 grows
55.14  Step 2 card enters
59.50–69.699  Step 2 formula + substitution + answer reveal
[ RECENTER_TIME = 74.32 ]
74.32  illus-pinned fades out; q-pinned recenters; Step 2 → stack morph + line-1-2 grows
75.0   options-reveal fades in
75.3   options stagger in
76.16  correctPulse on option C
[ END_FADE_TIME = 77.3 ]  full-frame fade out (1.0s)
~78.5  End
```
