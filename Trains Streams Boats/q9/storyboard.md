# Storyboard — Trains, Boats and Streams Q9
**A 120 m train at 15 m/s crosses a 180 m platform**

Video length: **88.939s** (voiceover duration) — final `END_FADE_TIME` ≈ 89.4s, clip tail to ~90.4s.
Topic name: **"Trains, Boats and Streams"**

Sibling reference: `Trains Streams Boats/q3` ("train crosses a pole, find time") is the closest
built sibling — same train-crosses-a-fixed-object illustration language (fixed object ahead,
train slides across it by a measured amount, a bracket proves the crossing-distance rule). The
difference: q3's object is a pole (~0 width), so crossing distance = train's own length only.
Here the object is a **180 m platform with real width**, so the concept needs a two-stage
geometric proof instead of one: (A) the engine reaching the platform's far edge only covers the
*platform's* length — "not enough yet" — then (B) the train continues until its *rear* clears
the far edge, covering an *additional* train-length. Total slide = platform length + train
length, which is exactly the rule the narration states. The user supplied
`illustration/train-station.svg` (a hand-drawn station/canopy line-art, viewBox 551.49×273.34)
which is used **as-is** (per README 5C — no re-path/recolor) as the platform's visual identity;
the actual crossing geometry (slide distances, bracket math) is driven by its own rendered
width so the visual proof stays pixel-exact regardless of the asset's real content.

---

## PART 1: Narration Beat Analysis

| # | Time (s) | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|----------|-----------|----------------------|------------------|-------------------|
| 1 | 0.12–3.80 | "So welcome back again. Time for one more problem." | Cold open / hook | Center screen | QuestionCard hero rises into view |
| 2 | 4.44–23.54 | "Now in this problem, we are given that the length of the train is one hundred twenty meter. The length of the platform is one hundred eighty meter, and the speed of the train is fifteen meter per second. The question is asking us to find the time taken by the train to completely cross the platform." | State the full problem | QuestionCard text + illustration | Train + platform illustration builds: train's own length label, platform's length label, speed tag, and a "? s" unknown-target label all land on their own spoken number/word |
| 3 | 24.04–45.16 | "Now, before using the formula, let us understand one simple concept. When a train crosses a platform, it is not enough for just the engine to reach the end of the platform. The whole train must come out of the platform. So the train has to cover its own length and also the length of the platform. This is a very important rule." | Core conceptual insight (crossing distance = train length + platform length) | Illustration | Train visibly slides in TWO stages across the fixed platform: engine reaches the far edge (not enough), then the whole train clears it (done) — then a measuring bracket spans the total distance just covered |
| 4 | 45.52–55.04 | "When a train crosses a platform, total distance covered is equal to length of train plus length of platform. Now let us find that total distance." | Pin the layout, formalize the rule into the Given card, transition into solving | Given card | PinFlow glide clears center stage; Given card opens restating the three given values as the formal rule is spoken |
| 5 | 55.38–64.08 | "Total distance is equal to one hundred twenty plus one hundred eighty. This gives us three hundred meters. Now this part is completed." | Compute total distance (Step 1) | Step 1 card | 120 + 180 resolves to 300 m |
| 6 | 64.08–82.10 | "We already know the total distance, and the speed is also given. So now we can use the basic formula. Time is equal to distance divided by speed. Putting the values, time is equal to three hundred divided by fifteen. After simplifying this, we get twenty seconds." | Compute the final answer (Step 2) | Step 2 card | Time = Distance/Speed resolves to 300/15 = 20 s |
| 7 | 82.40–88.94 | "So the train takes twenty seconds to completely cross the platform. Hence, the correct answer is option A." | Final answer reveal | Options grid | Step 2 joins the stack, options fade/stagger in, correctPulse lands on "option A" |

---

## PART 2: Scene-by-Scene Storyboard

### SCENE 1 — Hero Question Open
**TIMESTAMP:** 0.0 – 3.8s
**VOICEOVER:** "So welcome back again. Time for one more problem."
**VISUAL OBJECTIVE:** Establish the question card as the sole focal point, vertically centered while alone in frame.
**SCREEN LAYOUT:** `#q-full-card` centered horizontally at `left:50%`, starts lowered (`heroEnterLowered`, offsetY 180) so it reads as vertically balanced with nothing else on screen yet.
**ON-SCREEN ELEMENTS:** Dotted grid, bottom strip, topic name "Trains, Boats and Streams" (bottom-left), logo (bottom-right), SerialNum badge "Q" (top-left, follows card's lowered position), QuestionCard: *"A 120 m train running at 15 m/s crosses a 180 m platform. How long does it take?"* with `120 m`, `15 m/s`, `180 m` in `--primary` blue via `.num` spans.
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.8)` — lowered pose at 0.3s (0.7s, `back.out(1.4)`), rises to resting position at RISE_TIME=3.8s (0.6s, `power2.inOut`). SerialNum pop at 0.8s (`back.out(2)`), rises in tandem at 3.8s.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Hard cut in from background layers (present from t=0).
**EDUCATIONAL PURPOSE:** Cold open, orients viewer to the problem statement.
**VISUAL HIERARCHY:** QuestionCard > SerialNum > background layers.
**ATTENTION MANAGEMENT:** Single element on screen.
**MOTION NOTES:** Rise should feel like the card "settling" right as "one more problem" finishes.
**CONTINUITY FROM PREVIOUS SCENE:** N/A — opening scene.

---

### SCENE 2 — Full Question Stated + Illustration Builds
**TIMESTAMP:** 3.8 – 24.04s
**VOICEOVER:** "Now in this problem, we are given that the length of the train is one hundred twenty meter. The length of the platform is one hundred eighty meter, and the speed of the train is fifteen meter per second. The question is asking us to find the time taken by the train to completely cross the platform."
**VISUAL OBJECTIVE:** Build the train + platform illustration under the settled question card, anchoring each spoken number to a concrete visual the instant it's said, and landing the unknown "? s" target on the platform's far edge.
**SCREEN LAYOUT:** `#illustration` centered at `left:50%; top:400px; width:1400px; height:260px`.
**ON-SCREEN ELEMENTS:** Dashed track sweeps in (`#illus-track`, left:350/width:600). `illustration/train.svg` (170px wide, in a 200px wrap at left:400) slides in from off-screen-left at 4.2s, settling with its front edge just short of the platform's near edge. A length label "120 m" fades in under the train at 7.679s (when "one hundred twenty" is spoken). The platform — `illustration/train-station.svg` (240px wide, user-supplied, used as-is) at left:585 — scale+fades in at 9.479s (when "the platform" is first said). A length label "180 m" fades in under the platform at 11.3s (when "one hundred eighty" is spoken). A speed tag "15 m/s" fades in above the train at 15.279s (when "fifteen" is spoken). A "? s" unknown-target label fades in above the platform's far edge at 20.0s (when "time" is asked).
**ANIMATION DETAILS:** Track: `apt.roadSweep(tl, "#illus-track", 4.2, 0.7)`. Train: slide-in x:-200→0, scale 0.7→1, opacity 0→1, 0.6s `back.out(1.6)`, at 4.2s. Length label (train): fade+y at 7.679s. Platform: scale 0.8→1 + opacity, 0.5s `back.out(1.5)`, at 9.479s. Length label (platform): fade+y at 11.3s. Speed tag: fade+y at 15.279s. "? s" label: fade+y at 20.0s.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Continuous build — no cuts within the scene.
**EDUCATIONAL PURPOSE:** Anchors both given lengths, the speed, and the unknown (time) to concrete visual objects before any math starts.
**VISUAL HIERARCHY:** QuestionCard (top) > Illustration (train + platform + labels) > background.
**ATTENTION MANAGEMENT:** Each label appears exactly when its number/question is spoken.
**MOTION NOTES:** Train rests with its front edge exactly at the platform's near edge, visually "about to cross" — sets up Scene 3's two-stage crossing motion.
**CONTINUITY FROM PREVIOUS SCENE:** Question card already at rest (Scene 1's rise completed at 3.8s); this scene only adds the illustration beneath it.

---

### SCENE 3 — Concept Beat (Distance = Train Length + Platform Length)
**TIMESTAMP:** 24.04 – 45.16s
**VOICEOVER:** "Now, before using the formula, let us understand one simple concept. When a train crosses a platform, it is not enough for just the engine to reach the end of the platform. The whole train must come out of the platform. So the train has to cover its own length and also the length of the platform. This is a very important rule."
**VISUAL OBJECTIVE:** Visually prove the two-part rule with a two-stage slide: first the engine reaches the platform's far edge (not enough — the train's body still overlaps the platform), then the train continues until its rear clears the far edge (done). A single bracket then measures the total distance just covered.
**SCREEN LAYOUT:** Action happens entirely within `#illustration` — no new cards yet.
**ON-SCREEN ELEMENTS:** All data tags (train length, platform length, speed) fade out at 30.279s as the crossing motion begins (the "? s" target stays visible throughout — it's the persisting unknown). **Stage A** (30.279–34.439s, "it is not enough for just the engine to reach the end of the platform"): `#illus-train-wrap` slides right by exactly the platform's own rendered width (240px) — its front edge, which started at the platform's near edge, ends the slide at the platform's *far* edge. A "✗ Engine only — not enough yet" callout fades in above the scene at 33.0s. **Stage B** (34.819–37.559s, "The whole train must come out of the platform"): the callout fades out at 35.0s; `#illus-train-wrap` continues sliding by exactly the train's own rendered width (170px) — its rear edge, which started at the platform's near edge (one train-length behind the front), now also reaches the platform's far edge. A "✓ Whole train is out — crossing complete" callout fades in at 37.3s, then fades out at 39.0s. Once both stages complete, a measuring bracket (`#brace-total`) spanning the FULL slide (240+170=410px, i.e. from the train's *original* rear position to the platform's far edge) grows in at 38.9s with tick marks at 39.3s, and a label "Distance = Train Length + Platform Length" fades in at 39.5s.
**ANIMATION DETAILS:** `tl.to("#illus-speed-tag, #illus-length-tag, #illus-platform-length-tag", {opacity:0, duration:0.4}, 30.279)`. Stage A: `tl.to("#illus-train-wrap", {x:240, duration:4.16, ease:"power1.inOut"}, 30.279)`. Callout A: fade+y, 0.4s, at 33.0s; fade out 0.3s at 35.0s. Stage B: `tl.to("#illus-train-wrap", {x:410, duration:2.74, ease:"power1.inOut"}, 34.819)`. Callout B: fade+y, 0.4s, at 37.3s; fade out 0.3s at 39.0s. Bracket: scaleX 0→1 + opacity, 0.6s `power3.out`, at 38.9s. Tick marks: `back.out(2)`, 0.3s, at 39.3s. Label: fade+y, 0.4s, at 39.5s.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** No cuts — additive motion layered on the Scene 2 illustration.
**EDUCATIONAL PURPOSE:** The single most important conceptual leap in this problem (crossing a platform = own length + platform length, proven in two stages) gets a dedicated, mostly-wordless visual beat.
**VISUAL HIERARCHY:** Train crossing motion + callouts + bracket (momentary focal point) > pinned-soon question (top).
**ATTENTION MANAGEMENT:** No competing reveals fire during either slide stage.
**MOTION NOTES:** Keep both slide stages slow and deliberate (matched 1:1 to their narration spans) — Stage A should read as "watch it reach the end," Stage B as "watch the rest come out."
**CONTINUITY FROM PREVIOUS SCENE:** Directly continues Scene 2's illustration, already in its resting state (front-at-near-edge); this scene only adds motion + callouts + bracket, no layout change yet.

---

### SCENE 4 — Pin + Given Card
**TIMESTAMP:** 45.16 – 55.38s
**VOICEOVER (pin moment overlaps):** "When a train crosses a platform, total distance covered is equal to length of train plus length of platform. Now let us find that total distance."
**VISUAL OBJECTIVE:** Reorganize into Phase 2 layout — question and illustration glide to their pinned slots — and the Given card opens to formalize all three known values as clean boxed lines, timed to the formal-rule sentence restating "length of train" / "length of platform."
**SCREEN LAYOUT:** `#q-pinned` at `left:385px; top:30px; width:1275px`. `#illus-pinned` at `left:280px; top:190px` (single shrunk train icon + recap text). `#card-given .solution-card` centered at `left:640px; top:460px`.
**ON-SCREEN ELEMENTS:** Pinned QuestionCard (shorter text, numbers highlighted). Pinned illustration: shrunk train icon + recap text "120 m · 180 m · 15 m/s". Given card opens with chip "Given", three lines: "Length of Train = 120 m", "Length of Platform = 180 m", "Speed = 15 m/s".
**ANIMATION DETAILS:**
- `PIN_TIME = 52.9` — fires right as the formal-rule sentence finishes ("...length of platform."). `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 52.9)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 52.9)` fired together.
- `apt.fadeOut(tl, "#serial-num", 52.9, 0.5)`.
- `GIVEN_TIME = 53.34` (its own transcript timestamp, separate from PIN_TIME — the pin fires as the rule sentence ends, the Given card opens the instant "Now let us find that total distance" begins).
- `apt.cardEnter(tl, "#card-given .solution-card", 53.34)`.
- `apt.textReveal(tl, "#card-given .math")`: Line 1 "Length of Train = 120 m" — line-level, `data-t=53.34`. Line 2 "Length of Platform = 180 m" — line-level, `data-t=53.9`. Line 3 "Speed = 15 m/s" — line-level, `data-t=54.46` (staggered recap reveals inside the card's own opening beat — none of these three values is being freshly spoken word-for-word at this exact moment, so they reveal top-to-bottom in quick succession rather than syncing to new narration).
- `apt.ambientLoop(tl, "#illus-pinned-icon", 54.0, 85.0)` — small bob on the pinned train icon through the long solving stretch.
**CAMERA MOVEMENT:** None (glide is object motion).
**TRANSITIONS:** `pinFlow` glide.
**EDUCATIONAL PURPOSE:** Formalizes the three given numbers into the stack-ready Given card.
**VISUAL HIERARCHY:** Given card (center, active) > pinned question/illustration.
**ATTENTION MANAGEMENT:** Single active card.
**MOTION NOTES:** Bracket/label from Scene 3 already faded via pinFlow's fade-out on `#illustration`'s full form.
**CONTINUITY FROM PREVIOUS SCENE:** The bracket proof from Scene 3 has just settled; the pin fires right after, keeping the take continuous.

---

### SCENE 5 — Given → Stack, Step 1 (Total Distance)
**TIMESTAMP:** 55.38 – 64.9s
**VOICEOVER:** "Total distance is equal to one hundred twenty plus one hundred eighty. This gives us three hundred meters. Now this part is completed."
**VISUAL OBJECTIVE:** Archive the Given card, then apply the crossing-distance rule from Scene 3 directly: total distance = train length + platform length.
**SCREEN LAYOUT:** `#stack-given .stack-card` at `left:100px; top:140px` (badge "G"). `#card-step1 .solution-card` centered at `left:640px; top:470px`.
**ON-SCREEN ELEMENTS:** Step 1 card, chip "Step 1", math:
```
Total Distance = 120 + 180
= 300 m
```
**ANIMATION DETAILS:**
- `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 54.9)` — completes 55.7.
- `apt.cardEnter(tl, "#card-step1 .solution-card", 55.379)` (fires exactly as "Total distance is equal to..." begins).
- `apt.textReveal(tl, "#card-step1 .math")`:
  - Line 1 "Total Distance = 120 + 180" — word-level: `Total Distance =`@55.379, `120`@58.059, `+`@59.119, `180`@59.599.
  - Line 2 "= 300 m" (`.ans`) — word-level: `data-t=62.18` ("...three hundred meters.").
- `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 64.08)` — fires exactly on "Now this part is completed," a natural double meaning (the step IS complete).
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Standard 0.8s morph.
**EDUCATIONAL PURPOSE:** Turns Scene 3's visual proof into a concrete number.
**VISUAL HIERARCHY:** Step 1 card (center, active) > Given stack card (left, archived) > pinned question/illustration.
**ATTENTION MANAGEMENT:** Only one active card at a time.
**MOTION NOTES:** Word-level reveal, plain opacity fade only, per design.md.
**CONTINUITY FROM PREVIOUS SCENE:** Given card's morph begins right as Scene 4 settles.

---

### SCENE 6 — Step 1 → Stack, Step 2 (Final Answer) + Options Reveal
**TIMESTAMP:** 64.9 – 88.94s
**VOICEOVER:** "We already know the total distance, and the speed is also given. So now we can use the basic formula. Time is equal to distance divided by speed. Putting the values, time is equal to three hundred divided by fifteen. After simplifying this, we get twenty seconds. So the train takes twenty seconds to completely cross the platform. Hence, the correct answer is option A."
**VISUAL OBJECTIVE:** Apply the time formula directly to get the answer, then reveal the correct option.
**SCREEN LAYOUT:** `#stack-step1 .stack-card` at `left:100px; top:300px`. `#card-step2 .solution-card` centered at `left:600px; top:470px; width:740px`. `.pinned-col` options grid at `top:400px`.
**ON-SCREEN ELEMENTS:** Step 1 stack card (badge "1") joins the column; `.stack-line` connector `#line-g-1` grows between badges "G" and "1". Step 2 card opens (entering during the "We already know..." lead-in, content revealing once the formula itself starts), chip "Step 2", math:
```
Time = Distance / Speed
Time = 300 / 15
= 20 s
```
Then: stack column stays visible, options grid (A 20s / B 17.6s / C 22.4s / D 24.8s) fades in with A highlighted green.
**ANIMATION DETAILS:**
- `apt.stackLineGrow(tl, "#line-g-1", 64.08)` (same moment Step 1 joins the stack).
- `apt.cardEnter(tl, "#card-step2 .solution-card", 64.9)`.
- `apt.textReveal(tl, "#card-step2 .math")`:
  - Line 1 "Time = Distance / Speed" — line-level (`.frac`, top=Distance, bot=Speed), `data-t=70.979` ("Time is equal to distance divided by speed.").
  - Line 2 "Time = 300 / 15" — word-level (`.frac`, top=300, bot=15), `data-t=76.699` ("...three hundred divided by fifteen.").
  - Line 3 "= 20 s" (`.ans`) — word-level, `data-t=81.259` ("we get twenty seconds").
- `RECENTER_TIME = 86.159` (fires as "Hence," begins) — `apt.fadeOut(tl, "#illus-pinned", 86.159)`, `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 86.159)`.
- `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 86.159)` — completes 86.959, `apt.stackLineGrow(tl, "#line-1-2", 86.159)`.
- `apt.fadeIn(tl, "#options-reveal", 86.8)`.
- `apt.optionsStagger(tl, ".opt-btn", 87.1)`.
- `apt.correctPulse(tl, ".opt-btn.correct", 88.419)` (lands exactly on "option A." at 88.419–88.939).
- `END_FADE_TIME = 89.4` — `apt.fadeOut(tl, "#root > div", 89.4, 1.0)`.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Final morph + recenter glide + options stagger + pulse, then synchronized full-frame fade-out.
**EDUCATIONAL PURPOSE:** Delivers the payoff — the crossing-distance concept from Scene 3 becomes the Time = Distance/Speed substitution here.
**VISUAL HIERARCHY:** Step 2 card → options grid (sequential focal shift) > full stack column (G/1/2) > pinned question.
**ATTENTION MANAGEMENT:** `correctPulse` on option A is the terminal focal point.
**MOTION NOTES:** Keep the `300/15` and `20 s` reveals crisp and separated since this is the payoff calculation.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1's card is mid-morph as Step 2's cue fires; the stack column's G→1 chain extends to G→1→2 by scene end.

---

## PART 3: Asset List Required

- `illustration/train.svg` (copied from `Trains Streams Boats/q7`) — flat 2D train icon, used full-size in Phase 1 and shrunk in the pinned recap.
- `illustration/train-station.svg` — user-supplied station/platform line-art, used as-is (no recolor/re-path per README 5C), sized to 240px wide, functions as both the visual platform AND the geometry object for the crossing-distance slide/bracket math.
- Measuring bracket + callouts — pure CSS/text, no new SVG needed.
- All cards/chips/options/logo/serial-badge — existing shared components from `_template/assets/` and `design-system.css`. No new components introduced.

## PART 4: Animation Complexity Notes

- Standard patterns only: `heroEnterLowered`, `pinFlow` (×2, paired), `cardEnter` (×3), `textReveal` (×3), `morphToStack` (×3), `stackLineGrow` (×2), `setStackLine` (×2), `ambientLoop` (×1), `fadeIn`/`fadeOut`, `recenterForOptions`, `optionsStagger`, `correctPulse`.
- A handful of small custom (non-`animations.js`) tweens for the illustration content itself (train slide-in, platform scale-in, length/speed tag fades, two-stage crossing slide, "not enough"/"done" callouts, bracket+ticks+label) — one-off illustration animations, same pattern as sibling q3, not new shared helpers.
- No `apt.stepFlow` used (correctly dropped per README 4D.1).
- No double-animation risk: text-reveal-driven cards never also get `emphasize`/`resultReveal`.
- Only 2 solving steps (total distance, time formula) since the crossing-distance concept (Scene 3) removes the need for a separate distance-equation step — mirrors q3's 2-step structure.

## PART 5: Master Timeline Overview

```
0.0    Phase 1 starts — QuestionCard hero (lowered) enters
0.8    SerialNum badge pop
3.8    QuestionCard + badge rise to resting position
4.2    Track sweep + train illustration slides in
7.679  "120 m" length label (under train)
9.479  Platform (train-station.svg) scale+fades in
11.3   "180 m" platform length label
15.279 "15 m/s" speed tag
20.0   "? s" unknown-target label
[ Concept beat ]
30.279 Tags fade out; Stage A begins — train slides 240px (platform width)
33.0   "✗ not enough yet" callout
34.439 Stage A completes (engine at platform's far edge)
34.819 Stage B begins — train slides another 170px (train width)
35.0   callout A fades out
37.3   "✓ crossing complete" callout
37.559 Stage B completes (rear clears far edge)
38.9   Measuring bracket grows in (410px total)
39.0   callout B fades out
39.3   Tick marks
39.5   "Distance = Train Length + Platform Length" label
[ PIN_TIME = 52.9 ]
52.9   pinFlow: question + illustration glide to pinned slots (0.8s)
53.34  GIVEN_TIME — Given card enters, line 1 ("Length of Train = 120 m")
53.9   Given card line 2 ("Length of Platform = 180 m")
54.0–85.0  ambientLoop on pinned train icon
54.46  Given card line 3 ("Speed = 15 m/s")
[ 54.9 ]  Given → stack morph
55.379 Step 1 card enters
58.059–62.18  Step 1 formula reveals (word level) → "= 300 m"
[ 64.08 ]  Step 1 → stack morph + line-g-1 grows
64.9   Step 2 card enters
70.979–81.259  Step 2 formula + substitution + answer reveal
[ RECENTER_TIME = 86.159 ]
86.159 illus-pinned fades out; q-pinned recenters; Step 2 → stack morph + line-1-2 grows
86.8   options-reveal fades in
87.1   options stagger in
88.419 correctPulse on option A
[ END_FADE_TIME = 89.4 ]  full-frame fade out (1.0s)
~90.4  End
```
