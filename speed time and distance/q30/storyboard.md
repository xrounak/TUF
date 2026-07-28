# Storyboard — Speed-Time-Distance Q30
**Train crosses a bridge — find the speed**

Video length: **83.879s** (voiceover duration) — final `END_FADE_TIME` ≈ 85.5s, clip tail to ~87.5s.
Topic name: **"Speed, Time and Distance"**

Structural twin of Q27 ("train crosses a platform"), inverted: Q27 knew speed + time and solved for the unknown platform length; Q30 knows both lengths + time and solves for the unknown speed, then must convert units (m/s → km/hr) as a bonus final step. Same concept beat (distance = train + obstacle), same illustration crossing-motion + measuring-brace technique, reused directly from Q27's built `index.html` (not just its storyboard) since that pattern already proves out well in preview.

---

## PART 1: Narration Beat Analysis

| # | Time (s) | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|----------|-----------|----------------------|------------------|-------------------|
| 1 | 0.10–2.66 | "So welcome back again. Time for one more problem." | Cold open / hook | Center screen | QuestionCard hero rises into view |
| 2 | 3.00–16.32 | "Now in this problem, we are given that the length of the train is 160 meter, the length of the bridge is 200 meter, and the train crosses the bridge completely in eighteen seconds. The question is asking us to find the speed of the train." | State the full problem | QuestionCard text + illustration | Train + bridge illustration builds while question text highlights numbers |
| 3 | 16.64–32.34 | "Now let us understand one important concept first. When a train crosses a bridge completely, it does not cover only its own length. It has to cover the length of the train as well as the length of the bridge. So the total distance covered is length of the train plus length of the bridge." | Core conceptual insight (distance covered = train + bridge) | Pinned illustration | Train visibly crosses the full length of the bridge; a measuring brace then spans the same distance, labeled "Total distance = Train + Bridge" |
| 4 | 32.72–41.54 | "Putting the values, total distance is equal to one hundred sixty plus two hundred. This gives us three hundred sixty meter. Got it? Perfect." | Compute total distance (Step 1) | Step 1 card | Formula resolves 160 + 200 → 360 m |
| 5 | 41.96–56.04 | "Now that we know the total distance, and we know speed is equal to distance divided by time. Putting the values, speed is equal to three hundred sixty divided by eighteen. After simplifying this, we get twenty meters per second." | Compute speed in m/s (Step 2) | Step 2 card | Distance ÷ time formula resolves to 20 m/s |
| 6 | 56.04–62.48 | "Now be careful here, the options are given in kilometer per hour, not in meter per second, so we must convert the speed." | Unit-mismatch warning — bridges Step 2 into Step 3 | Step 2 card (bridging annotation) | Small grey annotation line flags the pending unit conversion — no new card yet |
| 7 | 62.92–77.10 | "We know speed in kilometer per hour is equal to speed in meter per second into eighteen divided by five. Putting the values, speed is equal to twenty into eighteen divided by five. This gives us seventy-two kilometers per hour." | Convert m/s → km/hr (Step 3) | Step 3 card | Formula resolves 20 × 18/5 → 72 km/hr |
| 8 | 77.54–83.88 | "So the speed of the train is seventy-two kilometers per hour. Hence, the correct answer is option C." | Final answer + reveal | Options grid | Options grid appears, C pulses green |

---

## PART 2: Scene-by-Scene Storyboard

### SCENE 1 — Hero Question Open
**TIMESTAMP:** 0.0 – 3.0s
**VOICEOVER:** "So welcome back again. Time for one more problem."
**VISUAL OBJECTIVE:** Establish the question card as the sole focal point, vertically centered while alone in frame.
**SCREEN LAYOUT:** `#q-full-card` centered horizontally at `left:50%`, starts lowered (`heroEnterLowered`, offsetY 180) so it reads as vertically balanced with nothing else on screen yet.
**ON-SCREEN ELEMENTS:** Dotted grid, bottom strip, topic name "Speed, Time and Distance" (bottom-left), logo (bottom-right), SerialNum badge "Q" (top-left, follows card's lowered position), QuestionCard containing: *"A train 160 m long crosses a bridge 200 m long in 18 seconds. Find the speed of the train."* with `160 m`, `200 m`, `18 seconds` in `--primary` blue via `.num` spans.
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.0)` — fromTo lowered+scaled+faded to resting lowered pose at 0.3s (0.7s, back.out(1.4)), then rises to final position at RISE_TIME=3.0s (0.6s, power2.inOut) — the rise lands right as the next narration beat starts, so the settle reads as "question locked in, now for the details." SerialNum badge pop-in at 0.8s (`back.out(2)`, mirrored y-offset), rises in tandem at 3.0s.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Hard cut in from black background layers (grid/strip/logo present from t=0).
**EDUCATIONAL PURPOSE:** Cold open, orients viewer to the problem statement.
**VISUAL HIERARCHY:** QuestionCard > SerialNum > background layers.
**ATTENTION MANAGEMENT:** Single element on screen — no competition for focus.
**MOTION NOTES:** The rise at 3.0s should feel like the card "settling" right as "one more problem" finishes.
**CONTINUITY FROM PREVIOUS SCENE:** N/A — opening scene.

---

### SCENE 2 — Full Question Stated + Illustration Builds
**TIMESTAMP:** 3.0 – 16.32s
**VOICEOVER:** "Now in this problem, we are given that the length of the train is 160 meter, the length of the bridge is 200 meter, and the train crosses the bridge completely in eighteen seconds. The question is asking us to find the speed of the train."
**VISUAL OBJECTIVE:** Build the train + bridge illustration under the settled question card, revealing train and bridge as the corresponding values are narrated, and open the Given card early (right alongside the illustration) so every value fills in exactly when spoken.
**SCREEN LAYOUT:** `#illustration` centered `top:350px`: a dashed track line, train (train.svg, ~170px) on the left, bridge (bridge-svgrepo-com.svg) fixed on the right. `#card-given .solution-card` centered at `left:640px; top:715px`, alongside the illustration (mirrors Q27's early-opening Given card — it does not wait for the Phase 2 pin).
**ON-SCREEN ELEMENTS:** Track line sweeps in first. Train slides in from the left at 5.04s (word "train" in "the length of the **train** is"), settling on the track with a "160 m" label fading up beneath it at 6.12s (start of "one hundred sixty"). Bridge slides in from the right at 8.46s (word "**bridge**"), with a "200 m" label at 8.90s (start of "two hundred") and an "18 s to cross" tag above it at 12.14s (start of "eighteen"). Given card (chip "Given") opens at 5.04s alongside the train's entrance, its three lines revealing in step with the same three labels above.
**ANIMATION DETAILS:** `apt.roadSweep` on the track at ~4.5s. Train: `fromTo` slide-in x:-220→0, scale 0.7→1, 0.7s, `back.out(1.6)`, at 5.04s. "160 m" label: fade-up (y:14→0), 0.45s, `back.out(2)`, at 6.12s. Bridge: `fromTo` slide-in x:+220→0, scale 0.85→1, 0.7s, `back.out(1.6)`, at 8.46s. "200 m" label: fade-up at 8.90s. "18 s to cross" tag: fade-down (y:-14→0) at 12.14s. `apt.cardEnter(tl, "#card-given .solution-card", 5.04)`, `apt.textReveal(tl, "#card-given .math")` with lines at 6.12 / 8.90 / 12.14 (word-level, matching the illustration labels exactly).
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Continuous build — no cuts within the scene.
**EDUCATIONAL PURPOSE:** Anchors every given number to a concrete visual object before any math starts, and gets the Given card fully populated well before the concept beat begins.
**VISUAL HIERARCHY:** QuestionCard (top) > Illustration + Given card (both building) > background.
**ATTENTION MANAGEMENT:** Each visual element (illustration label + matching Given line) appears exactly when its number is spoken — no early reveals.
**MOTION NOTES:** Train and bridge should read as approaching each other (train on the left, bridge fixed ahead on the right) to set up Scene 3's crossing motion.
**CONTINUITY FROM PREVIOUS SCENE:** The question card is already at rest (Scene 1's rise completed at 3.0s); this scene only adds the illustration + Given card beneath it — the question itself does not move again until the pin in Scene 4.

---

### SCENE 3 — Concept Beat (Train Physically Crosses the Bridge)
**TIMESTAMP:** 16.64 – 32.34s (Given card remains visible throughout, already fully populated from Scene 2)
**VOICEOVER:** "Now let us understand one important concept first. When a train crosses a bridge completely, it does not cover only its own length. It has to cover the length of the train as well as the length of the bridge. So the total distance covered is length of the train plus length of the bridge."
**VISUAL OBJECTIVE:** Prove — not just state — that crossing the bridge means covering train-length + bridge-length, by sliding the train the full combined distance and then measuring exactly what it covered.
**SCREEN LAYOUT:** Action happens entirely within `#illustration` (still in its Phase-1, non-pinned position — the pin happens right after this scene, in Scene 4). No new cards.
**ON-SCREEN ELEMENTS:** The train wrapper slides rightward starting at 19.76s (word "When"), travelling the exact distance needed to land its rear edge on the bridge's far edge — i.e. the slide distance IS train-length + bridge-length, demonstrated by motion, not a static label. The slide runs 8.0s, completing at 27.76s, right as "...length of the train as well as the length of the bridge" finishes narrating (28.28s). A measuring brace (thin primary-blue line with end-ticks) then fades in beneath the full span at 28.6s, with a centered label "Total distance = Train + Bridge" fading in at 29.0s, holding through the rest of the scene while "So the total distance covered is length of the train plus length of the bridge" (28.58–32.34s) plays.
**ANIMATION DETAILS:** Train wrapper: `gsap.to` x:0→SLIDE_DIST, 8.0s, `power1.inOut`, at 19.76s. Brace: `fromTo` scaleX 0→1 + opacity 0→1, 0.9s, `power3.out`, at 28.6s. End-ticks: `fromTo` scaleY 0→1 + opacity 0→1, 0.3s, `back.out(2)`, at 29.0s. Brace label: `fromTo` y:8→0 + opacity 0→1, 0.4s, `power2.out`, at 29.3s.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** No cuts — additive motion layered on the still-unpinned illustration.
**EDUCATIONAL PURPOSE:** The single most important conceptual leap in this problem (crossing = train + bridge) gets a dedicated visual proof instead of being buried in text.
**VISUAL HIERARCHY:** Train's crossing motion (momentary focal point) > brace + label (settles as the takeaway) > Given card (passive, already complete) > pinned-soon question.
**ATTENTION MANAGEMENT:** The Given card fires no new reveals here — full attention goes to the crossing motion and the brace.
**MOTION NOTES:** The crossing motion must read as complete and unhurried (8s, matching the ~8.5s of concept narration) — this is the payoff visual of the whole video's setup half.
**CONTINUITY FROM PREVIOUS SCENE:** Directly continues Scene 2's illustration and Given card, both already in their resting states from ~12s onward; this scene only adds motion + a measurement overlay, no layout change yet.

---

### SCENE 4 — Pin + Given → Stack, Step 1 (Total Distance)
**TIMESTAMP:** 32.7 – 41.6s
**VOICEOVER:** "Putting the values, total distance is equal to one hundred sixty plus two hundred. This gives us three hundred sixty meter. Got it? Perfect."
**VISUAL OBJECTIVE:** Reorganize into Phase 2 layout — question + illustration glide to their pinned slots, Given card morphs into the stack, and Step 1 opens to compute the total distance.
**SCREEN LAYOUT:** `#q-pinned` at `left:385px; top:30px; width:1275px`. `#illus-pinned` at `left:280px; top:190px` (shrunk train + bridge icon pair with recap line "160 m · 200 m · 18 s"). `#stack-given .stack-card` at `left:100px; top:140px`. `#card-step1 .solution-card` centered `left:640px; top:470px`.
**ON-SCREEN ELEMENTS:** `PIN_TIME = 32.7` (right as "Putting the values" begins — the concept has just finished, so the reorganization reads as "now let's actually compute it"). Given card morphs straight into its stack badge "G" at this same moment (it's been visible and complete since Scene 2, so no re-entry is needed — mirrors Q27's pattern exactly). Step 1 card opens at 33.9s (word "total" in "total distance is equal to"), chip "Step 1", math:
```
Total Distance = Train + Bridge
= 160 + 200
= 360 m
```
**ANIMATION DETAILS:**
- `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 32.7)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 32.7)`, fired together (0.8s glide each).
- `apt.fadeOut(tl, "#serial-num", 32.7, 0.5)`.
- `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 32.7)`.
- `apt.cardEnter(tl, "#card-step1 .solution-card", 33.9)`.
- `apt.textReveal(tl, "#card-step1 .math")`:
  - Line 1 "Total Distance = Train + Bridge" — **line-level**, `data-t=33.9` (start of "total distance is equal to").
  - Line 2 "= 160 + 200" — **word-level**: "160" at 35.9 ("one hundred sixty"), "+" at 37.14 ("plus"), "200" at 37.52 ("two hundred").
  - Line 3 "= 360 m" (`.ans`) — **word-level**, `data-t=39.0` ("three hundred sixty meter").
- `apt.ambientLoop(tl, "#illus-pinned-icon", 34.5, 41.5)` — small bob on the pinned train icon since this is a relatively short hold before the next morph.
**CAMERA MOVEMENT:** None (glide is object motion).
**TRANSITIONS:** `pinFlow` glide (question + illustration shrink/move as one continuous motion), simultaneous with the Given→stack morph.
**EDUCATIONAL PURPOSE:** Consolidates the given values into the stack, then immediately performs the first real calculation (total distance) using the concept just proven in Scene 3.
**VISUAL HIERARCHY:** Step 1 card (center, active) > Given stack (left) > pinned question/illustration.
**ATTENTION MANAGEMENT:** Sequential, not simultaneous — the pin glide draws the eye up/smaller first, Step 1's pop-in then redirects focus to center.
**MOTION NOTES:** `pinFlow`'s 0.8s glide completing at 33.5s should feel finished right as Step 1's card starts entering at 33.9s.
**CONTINUITY FROM PREVIOUS SCENE:** The train and bridge from Scenes 2–3 are the exact same objects, now shrunk and repositioned into `#illus-pinned` — no new illustration assets introduced, satisfying object continuity. The brace/label from Scene 3 fades out as part of the `pinFlow` glide (the full `#illustration` block, including the brace, moves/fades together).

---

### SCENE 5 — Step 1 → Stack, Step 2 (Speed in m/s) + Unit Warning
**TIMESTAMP:** 41.6 – 62.6s
**VOICEOVER:** "Now that we know the total distance, and we know speed is equal to distance divided by time. Putting the values, speed is equal to three hundred sixty divided by eighteen. After simplifying this, we get twenty meters per second. Now be careful here, the options are given in kilometer per hour, not in meter per second, so we must convert the speed."
**VISUAL OBJECTIVE:** Compute speed in m/s (20 m/s), then flag — without opening a new card yet — that the answer options are in a different unit, bridging directly into Step 3.
**SCREEN LAYOUT:** `#stack-step1 .stack-card` at `left:100px; top:290px`. `#card-step2 .solution-card` centered `left:600px; top:440px; width:720px`.
**ON-SCREEN ELEMENTS:** Step 1 stack card (badge "1") joins the column; `.stack-line` connector `#line-g-1` grows between badges "G" and "1". Step 2 card opens, chip "Step 2", math:
```
Speed = Distance ÷ Time
= 360 ÷ 18
= 20 m/s
(convert to km/hr next)
```
**ANIMATION DETAILS:**
- `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 41.6)` — 0.8s, completes 42.4s.
- `apt.stackLineGrow(tl, "#line-g-1", 41.6)`.
- `apt.cardEnter(tl, "#card-step2 .solution-card", 42.5)`.
- `apt.textReveal(tl, "#card-step2 .math")`:
  - Line 1 "Speed = Distance ÷ Time" — **line-level**, `data-t=44.86` ("speed" in "we know speed is equal to distance divided by time").
  - Line 2 "= 360 ÷ 18" — **word-level**: "360" at 49.54 ("three hundred sixty"), "÷" at 50.44 ("divided"), "18" at 51.04 ("eighteen").
  - Line 3 "= 20 m/s" (`.ans`) — **word-level**, `data-t=53.94` ("twenty meters per second").
  - Line 4 "(convert to km/hr next)" — **line-level**, small `--topic`-grey annotation, `data-t=56.52` ("the options are given in kilometer per hour") — the same bridging-callout pattern Q27 used for its "(train + platform together)" line, here flagging the pending unit conversion instead.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Standard morph + stack-line grow.
**EDUCATIONAL PURPOSE:** Computes the raw speed, then immediately calls out the classic units trap (m/s vs km/hr) before the viewer can mistakenly pick an m/s-shaped wrong answer.
**VISUAL HIERARCHY:** Step 2 card (center) > Step 1 + Given stack (left, both visible) > pinned elements.
**ATTENTION MANAGEMENT:** The annotation line is visually subordinate (smaller, grey) so "20 m/s" remains the dominant number, with the annotation as a clear heads-up rather than competing content.
**MOTION NOTES:** This is the longest single active-card hold (~20s) — no `ambientLoop` needed since the text-reveal lines plus the annotation are spread across the full duration, keeping the card continuously "alive."
**CONTINUITY FROM PREVIOUS SCENE:** Step 1's card is still completing its text-fade-out (`morphToStack`'s first 0.25s) as Step 2's narration cue begins; the stack column now shows two connected circles (G→1) with the line grown in.

---

### SCENE 6 — Step 2 → Stack, Step 3 (Convert to km/hr) + Options Reveal
**TIMESTAMP:** 62.6 – 83.88s
**VOICEOVER:** "We know speed in kilometer per hour is equal to speed in meter per second into eighteen divided by five. Putting the values, speed is equal to twenty into eighteen divided by five. This gives us seventy-two kilometers per hour. So the speed of the train is seventy-two kilometers per hour. Hence, the correct answer is option C."
**VISUAL OBJECTIVE:** Perform the unit conversion and reveal the correct option.
**SCREEN LAYOUT:** `#stack-step2 .stack-card` at `left:100px; top:460px`. `#card-step3 .solution-card` centered `left:580px; top:430px; width:760px`. `.pinned-col` options grid at `top:400px`.
**ON-SCREEN ELEMENTS:** Step 2 stack card (badge "2") joins column; `#line-1-2` connector grows. Step 3 card, chip "Step 3", math:
```
Speed (km/hr) = Speed (m/s) × 18/5
= 20 × 18/5
= 72 km/hr
```
Then: illustration recentered/faded, stack column stays visible, options grid (A 66 km/hr / B 78 km/hr / C 72 km/hr / D 60 km/hr) fades in with C highlighted green.
**ANIMATION DETAILS:**
- `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 62.6)` — 0.8s.
- `apt.stackLineGrow(tl, "#line-1-2", 62.6)`.
- `apt.cardEnter(tl, "#card-step3 .solution-card", 63.4)`.
- `apt.textReveal(tl, "#card-step3 .math")`:
  - Line 1 "Speed (km/hr) = Speed (m/s) × 18/5" — **line-level**, `data-t=62.92` ("We know speed in kilometer per hour...").
  - Line 2 "= 20 × 18/5" — **word-level**: "20" at 72.46 ("twenty"), "×" at 72.92 ("into"), "18/5" frac at 73.26 ("eighteen divided by five").
  - Line 3 "= 72 km/hr" (`.ans`) — **word-level**, `data-t=75.56` ("seventy-two kilometers per hour").
- `RECENTER_TIME = 77.6` (right as "So the speed of the train is..." begins, restating the answer) — `apt.fadeOut(tl, "#illus-pinned", 77.6)`, `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 77.6)`.
- `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 77.6)`, `apt.stackLineGrow(tl, "#line-2-3", 77.6)`.
- `apt.fadeIn(tl, "#options-reveal", 78.6)`.
- `apt.optionsStagger(tl, ".opt-btn", 79.1)`.
- `apt.correctPulse(tl, ".opt-btn.correct", 83.4)` (lands just before "option C." finishes at 83.88).
- `END_FADE_TIME = 85.5` — `apt.fadeOut(tl, "#root > div", 85.5, 1.2)`.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Final morph + recenter glide + options stagger + pulse, then synchronized full-frame fade-out.
**EDUCATIONAL PURPOSE:** Delivers the final unit-conversion step and confirms the answer against the actual MCQ options.
**VISUAL HIERARCHY:** Step 3 card → options grid (sequential focal shift) > full stack column (G/1/2/3, all connected) > pinned question.
**ATTENTION MANAGEMENT:** `correctPulse` on option C is the terminal focal point.
**MOTION NOTES:** Keep the `20 × 18/5` and `72 km/hr` reveals crisp and separated since this is the payoff calculation of the whole video.
**CONTINUITY FROM PREVIOUS SCENE:** Step 2's card is mid-text-fade as Step 3's cue fires, exactly as in Scene 4→5; the stack column's G→1→2 chain extends to G→1→2→3 by scene end, and the pinned question's recenter glide is the same `pinFlow`-style continuous-motion language established at the Scene 3→4 pin, closing the loop visually.

---

## PART 3: Asset List Required

- `illustration/train.svg` (already present) — flat 2D train icon, used full-size in Phase 1 and shrunk in the pinned recap.
- `illustration/bridge-svgrepo-com.svg` (already present, user-supplied, colors kept as-is per README 5C) — used full-size in Phase 1 for the bridge; a small copy is not needed in the pinned recap (a plain CSS rectangle stands in, matching Q27's pinned-icon simplification pattern).
- Measuring brace (Scene 3) — pure CSS (a thin `--primary` border-bottom line with end-ticks and a centered label), no SVG needed — reused directly from Q27's `brace-total` pattern.
- All cards/chips/options/logo/serial-badge — existing shared components from `_template/assets/` and `design-system.css`. No new components introduced.

## PART 4: Animation Complexity Notes

- Standard patterns only: `heroEnterLowered`, `roadSweep`, `pinFlow` (×2, paired), `cardEnter` (×4), `textReveal` (×4), `morphToStack` (×4), `stackLineGrow` (×3), `setStackLine` (×3), `ambientLoop` (×1, Scene 4 hold), `fadeIn`/`fadeOut`, `recenterForOptions`, `optionsStagger`, `correctPulse`.
- Two small custom (non-`animations.js`) tweens, both plain `gsap.to`/`fromTo` calls in the per-question `<script>` block: the train's cross-the-bridge slide (Scene 3) and the measuring brace's fade/scale-in (Scene 3). These are one-off illustration-content animations, per design.md's "per-question custom CSS/JS for illustration content" allowance — not a violation of the "no new animation helpers" rule since they don't touch cards/chips/stack components. Directly ported from Q27's already-proven `illus-train-wrap` slide + `brace-total` pattern.
- No `apt.stepFlow` used (correctly dropped per README 4D.1).
- No double-animation risk: text-reveal-driven cards never also get `emphasize`/`resultReveal`.

## PART 5: Master Timeline Overview

```
0.0    Phase 1 starts — QuestionCard hero (lowered) enters
0.8    SerialNum badge pop
3.0    QuestionCard + badge rise to resting position
4.5    Track sweeps in
5.04   Train illustration slides in; Given card enters
6.12   "160 m" label + Given line 1
8.46   Bridge illustration slides in
8.90   "200 m" label + Given line 2
12.14  "18 s to cross" tag + Given line 3
19.76  Train begins crossing-the-bridge slide (8.0s)
27.76  Crossing slide completes
28.6   Measuring brace fades in
29.0–29.3  End-ticks + "Total distance = Train + Bridge" label
[ PIN_TIME = 32.7 ]
32.7   pinFlow: question + illustration glide to pinned slots (0.8s); Given → stack morph
33.9   Step 1 card enters
35.9–39.0  Step 1 formula reveals (160 + 200 = 360 m)
[ 41.6 ]  Step 1 → stack morph + line-g-1 grows
42.5   Step 2 card enters
44.86–56.52  Step 2 formula reveals (Distance÷Time = 20 m/s) + unit-conversion bridging annotation
[ 62.6 ]  Step 2 → stack morph + line-1-2 grows
63.4   Step 3 card enters
62.92–75.56  Step 3 formula reveals (20 × 18/5 = 72 km/hr)
[ RECENTER_TIME = 77.6 ]
77.6   illus-pinned fades out; q-pinned recenters; Step 3 → stack morph + line-2-3 grows
78.6   options-reveal fades in
79.1   options stagger in
83.4   correctPulse on option C
[ END_FADE_TIME = 85.5 ]  full-frame fade out (1.2s)
~87.5  End
```
