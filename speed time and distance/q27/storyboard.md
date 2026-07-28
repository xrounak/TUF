# Storyboard — Speed-Time-Distance Q27
**Train crosses a platform**

Video length: **94.94s** (voiceover duration) — final `END_FADE_TIME` ≈ 92.5s, clip tail to ~95s.
Topic name: **"Speed, Time and Distance"**

---

## PART 1: Narration Beat Analysis

| # | Time (s) | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|----------|-----------|----------------------|------------------|-------------------|
| 1 | 0.10–3.76 | "So welcome back again. Time for one more problem." | Cold open / hook | Center screen | QuestionCard hero rises into view |
| 2 | 4.58–22.54 | "Now in this problem, we are given that the length of the train is 180 m. The speed of the train is 54 km/h, and the train takes 30 seconds to completely pass a platform. The question is asking us to find the length of the platform." | State the full problem | QuestionCard text + illustration | Train + platform illustration builds while question text highlights numbers |
| 3 | 22.84–35.32 | "Now first, let us understand one important concept. When a train crosses a platform, it does not cover only its own length. It covers the length of the train plus the length of the platform." | Core conceptual insight (distance covered = train + platform) | Pinned illustration | Train visibly travels past the platform, illustrating total distance = train length + platform length |
| 4 | 35.72–54.04 | "Now first, let us convert the speed into meters per second. We know speed in m/s = speed in km/h × 5/18. Putting the values, 54 × 5/18. This gives us 15 m/s." | Unit conversion (Step 1) | Step 1 card | Formula reveals term-by-term, resolves to 15 m/s |
| 5 | 54.52–1:12.98 | "Now that we know the speed, we can find the total distance covered in 30 seconds. We know the formula, distance = speed × time. Distance = 15 × 30. This gives us 450 m. Now, this 450 m is the total distance covered while crossing the platform." | Compute total distance (Step 2) | Step 2 card | Distance formula resolves to 450 m; final line reinforces this is the *combined* distance |
| 6 | 1:13.46–1:22.48 | "That means train length plus platform length is equal to 450. The train length is already given as 180 m." | Set up final equation (Step 3) | Step 3 card | Equation "Train + Platform = 450" appears, then Train substituted with 180 |
| 7 | 1:22.82–1:34.94 | "So platform length is equal to 450 − 180. This gives us 270 m. So the length of the platform is 270 m. Hence the correct answer is option C." | Final answer + reveal | Step 3 card → Options grid | Platform = 270 m resolves; options grid appears, C pulses green |

---

## PART 2: Scene-by-Scene Storyboard

### SCENE 1 — Hero Question Open
**TIMESTAMP:** 0.0 – 3.76s
**VOICEOVER:** "So welcome back again. Time for one more problem."
**VISUAL OBJECTIVE:** Establish the question card as the sole focal point, vertically centered while alone in frame.
**SCREEN LAYOUT:** `#q-full-card` centered horizontally at `left:50%`, starts lowered (`heroEnterLowered`, offsetY 180) so it reads as vertically balanced with nothing else on screen yet.
**ON-SCREEN ELEMENTS:** Dotted grid, bottom strip, topic name "Speed, Time and Distance" (bottom-left), logo (bottom-right), SerialNum badge "Q" (top-left, follows card's lowered position), QuestionCard containing: *"A train 180 m long passes a platform in 30 seconds at 54 km/hr. Find the platform length."* with `180 m`, `30 seconds`, `54 km/hr` in `--primary` blue via `.num` spans.
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.6)` — fromTo lowered+scaled+faded to resting lowered pose at 0.3s (0.7s, back.out(1.4)), then rises to final position at RISE_TIME=3.6s (0.6s, power2.inOut). SerialNum badge pop-in at 0.8s (`back.out(2)`, mirrored y-offset), rises in tandem at 3.6s.
**CAMERA MOVEMENT:** None (static frame; motion is internal to elements).
**TRANSITIONS:** Hard cut in from black background layers (grid/strip/logo present from t=0).
**EDUCATIONAL PURPOSE:** Cold open, orients viewer to the problem statement.
**VISUAL HIERARCHY:** QuestionCard > SerialNum > background layers.
**ATTENTION MANAGEMENT:** Single element on screen — no competition for focus.
**MOTION NOTES:** The rise at 3.6s should feel like the card "settling" right as "one more problem" finishes, cueing the viewer that detail is coming next.
**CONTINUITY FROM PREVIOUS SCENE:** N/A — opening scene.

---

### SCENE 2 — Full Question Stated + Illustration Builds
**TIMESTAMP:** 4.58 – 22.54s
**VOICEOVER:** "Now in this problem, we are given that the length of the train is 180 m. The speed of the train is 54 km/h, and the train takes 30 seconds to completely pass a platform. The question is asking us to find the length of the platform."
**VISUAL OBJECTIVE:** Build the train + platform illustration under the settled question card, revealing train and platform as the corresponding values are narrated.
**SCREEN LAYOUT:** `#illustration` centered at `top:480px`, flex row: train icon (left) → platform bar (right), matching `.illustration` slot in `template.html`.
**ON-SCREEN ELEMENTS:** `illustration/train.svg` (flat 2D train, ~220px wide) enters from the left edge at ~5.86s (when "length of the train" is spoken) and settles on a thin minimal track line. A label "180 m" fades up beneath the train at 8.24s (when "180 meters" is spoken), text ≥22px in `--primary`. A speed tag "54 km/hr" fades in above the train at 10.28–13.60s. A flat 2D platform block (simple grey rectangle with a dotted-outline roof, built with CSS — no new component, just a rectangle matching the illustration's flat-2D style) slides in from the right edge at 14.20s (when "platform" is first mentioned), with a "30 s" timer icon/label appearing beside it at 14.20–17.68s (≥22px).
**ANIMATION DETAILS:** Train: `gsap.fromTo` slide-in from x:-200 to x:0, 0.6s, `power2.out`, at 5.86s. "180 m" label: `apt.fadeIn` variant (y:10→0, opacity 0→1), 0.4s, at 8.24s. "54 km/hr" tag: same fade pattern at 10.28s. Platform block: slide-in from x:+200 to x:0, 0.6s, `power2.out`, at 14.20s. "30 s" label: fade-in at 14.20s, holds.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Continuous build — no cuts within the scene.
**EDUCATIONAL PURPOSE:** Anchors every given number to a concrete visual object before any math starts.
**VISUAL HIERARCHY:** QuestionCard (top, largest) > Illustration (train + platform + labels) > background.
**ATTENTION MANAGEMENT:** Each visual element appears exactly when its number is spoken — no early reveals.
**MOTION NOTES:** Train and platform should read as facing/approaching each other conceptually (train on the left "moving toward and through" the platform on the right) to set up Scene 3's concept beat.
**CONTINUITY FROM PREVIOUS SCENE:** The question card is already at rest (Scene 1's rise completed at 3.6s); this scene only adds the illustration beneath it — the card itself does not move again until the pin at 22.6s.

---

### SCENE 3 — Pin + Given Card
**TIMESTAMP:** 22.6 – 23.4s (pin), Given card active 23.0 – 35.4s
**VOICEOVER (spans into next beat):** "Now first, let us understand one important concept..." (concept narration begins here, continues into Scene 4)
**VISUAL OBJECTIVE:** Reorganize into Phase 2 layout — question glides to its pinned slot, illustration glides to its pinned slot, and a Given card opens center-stage summarizing the three known values.
**SCREEN LAYOUT:** `#q-pinned` at `left:385px; top:30px; width:1275px`. `#illus-pinned` at `left:280px; top:190px`. `#card-given .solution-card` centered at `left:640px; top:480px`.
**ON-SCREEN ELEMENTS:** Pinned QuestionCard (shorter text, numbers still highlighted). Pinned illustration: shrunk train + platform icon pair with a single recap line ("180 m · 54 km/hr · 30 s"), centered per design.md's single-icon-recap rule. Given SolutionCard: chip "Given", math block:
```
Train length = 180 m
Speed = 54 km/hr
Time = 30 s
```
**ANIMATION DETAILS:**
- `PIN_TIME = 22.6` — `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 22.6)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 22.6)` fired together (0.8s glide each).
- `apt.fadeOut(tl, "#serial-num", 22.6, 0.5)` — badge has no pinned counterpart.
- `GIVEN_TIME = 23.0` — `apt.cardEnter(tl, "#card-given .solution-card", 23.0)`.
- `apt.textReveal(tl, "#card-given .math")` immediately after — all three lines are **line-level** reveals (paraphrased restatement of facts already spoken in Scene 2, not verbatim in this moment), timestamps spread at 23.1 / 23.5 / 23.9 so they stagger in over ~1s rather than all popping at once.
- `apt.ambientLoop(tl, "#illus-pinned-icon", 24.5, 35.0)` — small bob on the pinned train icon since the Given card + concept explanation (Scene 4) cover a long stretch with no new reveal on the illustration itself.
**CAMERA MOVEMENT:** None (glide is object motion, not camera).
**TRANSITIONS:** `pinFlow` glide (question + illustration shrink/move as one continuous motion, not a cut).
**EDUCATIONAL PURPOSE:** Consolidates the three given values into one compact, always-referenceable card before problem-solving begins.
**VISUAL HIERARCHY:** Given card (center, active) > pinned question (top) > pinned illustration (mid-left) > background.
**ATTENTION MANAGEMENT:** The pin glide draws the eye upward/smaller first, then the Given card pop-in redirects focus to center — sequential, not simultaneous, competition.
**MOTION NOTES:** `pinFlow`'s 0.8s duration completing at 23.4s should feel finished just as the Given card starts entering at 23.0s (slight overlap is intentional — the card enters while the glide is still finishing its tail fade, keeping the scene continuous).
**CONTINUITY FROM PREVIOUS SCENE:** The train and platform from Scene 2 are the exact same objects, now shrunk and repositioned into `#illus-pinned` — no new illustration assets introduced, satisfying object continuity.

---

### SCENE 4 — Concept Beat (Distance = Train + Platform)
**TIMESTAMP:** 22.84 – 35.32s (overlaps tail of Scene 3's Given card, which stays on screen throughout)
**VOICEOVER:** "Now first, let us understand one important concept. When a train crosses a platform, it does not cover only its own length. It covers the length of the train plus the length of the platform."
**VISUAL OBJECTIVE:** Visually demonstrate that the train travels the combined length (train + platform), reinforcing the concept before any arithmetic appears.
**SCREEN LAYOUT:** Action happens entirely within `#illus-pinned` (280,190) — no new cards.
**ON-SCREEN ELEMENTS:** The pinned train icon nudges rightward across the pinned platform icon (a short back-and-forth "pass-through" motion, not a permanent reposition — it returns to its resting recap position by end of scene). A thin bracket/brace line briefly appears beneath train+platform together at 30.86s (when "it covers the length of the train plus the length of the platform" is spoken), spanning both icons, labeled "Total distance" (≥21px, fades in then holds through end of scene, fades out at scene end since it was only illustrative).
**ANIMATION DETAILS:** Train icon: `gsap.to` x:+40→0 yoyo-style pass, 1.5s, `sine.inOut`, at 26.04s (synced to "When a train crosses a platform"). Bracket + "Total distance" label: `apt.fadeIn`-style at 30.86s (0.4s), `apt.fadeOut` at 35.32s (0.4s) since it's a one-time illustrative aid, not a persistent UI element.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** No cuts — this is additive motion layered on the already-pinned illustration from Scene 3.
**EDUCATIONAL PURPOSE:** The single most important conceptual leap in this problem (crossing = train + platform) gets a dedicated, wordless-except-for-one-label visual beat rather than being buried in text.
**VISUAL HIERARCHY:** Bracket/label (momentary focal point) > Given card (still visible, center) > pinned question (top).
**ATTENTION MANAGEMENT:** The Given card is intentionally passive here (no new reveals firing on it) so the pass-through motion + bracket label in the illustration area draws full attention.
**MOTION NOTES:** Keep the pass-through subtle (40px nudge) — it's a supporting gesture, not a re-animation of the whole illustration.
**CONTINUITY FROM PREVIOUS SCENE:** Directly continues Scene 3's pinned illustration and Given card, both already in their resting states; this scene only adds motion within `#illus-pinned`, no layout change.

---

### SCENE 5 — Given → Stack, Step 1 (Speed Conversion)
**TIMESTAMP:** 35.4 – 54.04s
**VOICEOVER:** "Now first, let us convert the speed into meters per second. We know speed in m/s = speed in km/h × 5/18. Putting the values, 54 × 5/18. This gives us 15 m/s."
**VISUAL OBJECTIVE:** Convert 54 km/hr into 15 m/s in full view, term by term.
**SCREEN LAYOUT:** `#stack-given .stack-card` at `left:100px; top:140px`. `#card-step1 .solution-card` centered at `left:640px; top:460px`.
**ON-SCREEN ELEMENTS:** Given card morphs into a compact stack card (badge "G") in the left column. Step 1 card opens with chip "Step 1", math:
```
Speed (m/s) = Speed (km/h) × 5/18
= 54 × 5/18
= 15 m/s
```
**ANIMATION DETAILS:**
- `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 35.4)` — 0.8s, completes 36.2s.
- `apt.cardEnter(tl, "#card-step1 .solution-card", 36.8)` (synced to "let us convert the speed" starting 36.82s).
- `apt.textReveal(tl, "#card-step1 .math")`:
  - Line 1 "Speed (m/s) = Speed (km/h) × 5/18" — **line-level**, `data-t=40.20` (start of "We know speed in meters per second is equal to...").
  - Line 2 "= 54 × 5/18" — **word-level**, each token timed to its word in "fifty-four into five by eighteen" (48.96s onward — exact per-word `data-t` pulled from `transcript.json`'s `words` array at build time).
  - Line 3 "= 15 m/s" — **word-level**, timed to "This gives us fifteen meters per second" (52.20s onward).
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Standard morph (box slide+shrink+recolor, text crossfade).
**EDUCATIONAL PURPOSE:** Isolates the unit-conversion sub-skill as its own explicit step.
**VISUAL HIERARCHY:** Step 1 card (center, active) > Given stack card (left, archived but visible) > pinned question/illustration.
**ATTENTION MANAGEMENT:** Only one active card on screen at a time; the stack card is deliberately smaller/lighter (`--primary-light` bg, no shadow) so it reads as "done," not competing with Step 1.
**MOTION NOTES:** The formula's word-level reveal should feel like the numbers are being "spoken into place" — no bounce/slide per word, plain opacity fade only, per design.md Text Reveal spec.
**CONTINUITY FROM PREVIOUS SCENE:** The bracket/label from Scene 4 has already faded (35.32s), so Step 1 opens into a clean center stage; the Given card's morph begins the instant the concept beat's narration ends, keeping the take continuous with no dead gap.

---

### SCENE 6 — Step 1 → Stack, Step 2 (Total Distance)
**TIMESTAMP:** 54.1 – 1:12.98s
**VOICEOVER:** "Now that we know the speed, we can find the total distance covered in 30 seconds. We know the formula, distance = speed × time. Distance = 15 × 30. This gives us 450 m. Now, this 450 m is the total distance covered while crossing the platform."
**VISUAL OBJECTIVE:** Compute the total distance covered (450 m) and explicitly flag that this is the *combined* train+platform distance, bridging into Step 3's equation.
**SCREEN LAYOUT:** `#stack-step1 .stack-card` at `left:100px; top:290px`. `#card-step2 .solution-card` centered at `left:640px; top:460px` (widen if the longest line — "Total distance covered = 450 m" — would wrap; measure against actual render).
**ON-SCREEN ELEMENTS:** Step 1 stack card (badge "1") joins the column; `.stack-line` connector `#line-g-1` grows between badges "G" and "1". Step 2 card opens, chip "Step 2", math:
```
Distance = Speed × Time
= 15 × 30
= 450 m
(train + platform together)
```
**ANIMATION DETAILS:**
- `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 54.1)` — 0.8s, completes 54.9s.
- `apt.stackLineGrow(tl, "#line-g-1", 54.1)` (line geometry pre-set via `apt.setStackLine` before timeline build).
- `apt.cardEnter(tl, "#card-step2 .solution-card", 55.0)`.
- `apt.textReveal(tl, "#card-step2 .math")`:
  - Line 1 "Distance = Speed × Time" — **line-level**, `data-t=1:00.80` ("distance is equal to speed into time").
  - Line 2 "= 15 × 30" — **word-level**, timed within "Distance is equal to fifteen into thirty" (1:03.10 onward).
  - Line 3 "= 450 m" — **word-level**, timed within "This gives us four hundred fifty meters" (1:05.92 onward).
  - Line 4 "(train + platform together)" — **line-level**, `data-t=1:08.34` ("this 450 m is the total distance covered while crossing the platform") — small `--topic`-grey annotation text (16–18px), not part of the main math hierarchy, purely a bridging callout.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Standard morph + stack-line grow.
**EDUCATIONAL PURPOSE:** Computes the raw distance, then immediately reconnects it to Scene 4's concept so the viewer doesn't lose the thread.
**VISUAL HIERARCHY:** Step 2 card (center) > Step 1 + Given stack (left, both visible) > pinned elements.
**ATTENTION MANAGEMENT:** The annotation line (line 4) is visually subordinate (smaller, grey) so "450 m" remains the dominant takeaway of this card.
**MOTION NOTES:** This is the longest single active-card hold (~18s) — no `ambientLoop` needed since the text-reveal lines are spread across the full duration, keeping the card itself continuously "alive."
**CONTINUITY FROM PREVIOUS SCENE:** Step 1's card is still completing its text-fade-out (`morphToStack`'s first 0.25s) as Step 2's narration cue begins; the stack column now shows two connected circles (G→1) with the line grown in, visually building toward the final G→1→2→3 chain.

---

### SCENE 7 — Step 2 → Stack, Step 3 (Final Answer) + Options Reveal
**TIMESTAMP:** 1:13.0 – 1:34.94s
**VOICEOVER:** "That means train length plus platform length is equal to 450. The train length is already given as 180 m. So platform length is equal to 450 − 180. This gives us 270 m. So the length of the platform is 270 m. Hence the correct answer is option C."
**VISUAL OBJECTIVE:** Solve the final equation for platform length and reveal the correct option.
**SCREEN LAYOUT:** `#stack-step2 .stack-card` at `left:100px; top:460px`. `#card-step3 .solution-card` centered `left:600px; top:440px` (widen to fit "Platform = 450 − 180 = 270 m" on one line if needed). `.pinned-col` options grid at `top:400px`.
**ON-SCREEN ELEMENTS:** Step 2 stack card (badge "2") joins column; `#line-1-2` connector grows. Step 3 card, chip "Step 3", math:
```
Train + Platform = 450
180 + Platform = 450
Platform = 450 − 180
Platform = 270 m
```
Then: illustration/question recentered, stack column stays visible, options grid (A 260 m / B 300 m / C 270 m / D 240 m) fades in with C highlighted green.
**ANIMATION DETAILS:**
- `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 1:13.0)` — 0.8s.
- `apt.stackLineGrow(tl, "#line-1-2", 1:13.0)`.
- `apt.cardEnter(tl, "#card-step3 .solution-card", 1:13.5)`.
- `apt.textReveal(tl, "#card-step3 .math")`:
  - Line 1 "Train + Platform = 450" — **line-level**, `data-t=1:13.46`.
  - Line 2 "180 + Platform = 450" — **word-level**, timed within "the train length is already given as one hundred eighty meters" (1:17.5-ish, exact per-word from `transcript.json`).
  - Line 3 "Platform = 450 − 180" — **word-level**, timed within "So platform length is equal to four hundred fifty minus one hundred eighty" (1:22.82 onward).
  - Line 4 "Platform = 270 m" (`.ans` styled) — **word-level**, timed within "This gives us two hundred seventy meters" (~1:27.5 onward, exact per-word from transcript).
- `RECENTER_TIME = 90.0` — `apt.fadeOut(tl, "#illus-pinned", 90.0)`, `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 90.0)`.
- `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 90.0)`, `apt.stackLineGrow(tl, "#line-2-3", 90.0)`.
- `apt.fadeIn(tl, "#options-reveal", 91.0)`.
- `apt.optionsStagger(tl, ".opt-btn", 91.5)`.
- `apt.correctPulse(tl, ".opt-btn.correct", 93.8)` (lands just before "option C." finishes at 94.94).
- `END_FADE_TIME = 96.0` — `apt.fadeOut(tl, "#root > div", 96.0, 1.2)`.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Final morph + recenter glide + options stagger + pulse, then synchronized full-frame fade-out.
**EDUCATIONAL PURPOSE:** Delivers the final algebraic step and confirms the answer against the actual MCQ options.
**VISUAL HIERARCHY:** Step 3 card → options grid (sequential focal shift) > full stack column (G/1/2/3, all connected) > pinned question.
**ATTENTION MANAGEMENT:** `correctPulse` on option C is the terminal focal point — everything else (stack, pinned question) is settled/static by then.
**MOTION NOTES:** Keep the `450 − 180` and `270 m` reveals crisp and separated (distinct word groups) since this is the payoff calculation of the whole video.
**CONTINUITY FROM PREVIOUS SCENE:** Step 2's card is mid-text-fade as Step 3's cue fires, exactly as in Scene 6→7; the stack column's G→1→2 chain extends to G→1→2→3 by scene end, and the pinned question/illustration's recenter glide is the same `pinFlow`-style continuous-motion language established at the Scene 2→3 pin, closing the loop visually.

---

## PART 3: Asset List Required

- `illustration/train.svg` (already present) — flat 2D train icon, used full-size in Phase 1 and shrunk in the pinned recap.
- Platform block — pure CSS rectangle (grey `#e8e8ea` fill, thin dotted-outline roof edge), no new SVG asset needed; matches flat-2D style via CSS only.
- "Total distance" bracket/brace (Scene 4) — pure CSS (a thin `--primary` border-bottom line with a centered label), no SVG needed.
- All cards/chips/options/logo/serial-badge — existing shared components from `_template/assets/` and `design-system.css`. No new components introduced.

## PART 4: Animation Complexity Notes

- Standard patterns only: `heroEnterLowered`, `pinFlow` (×2, paired), `cardEnter` (×4), `textReveal` (×4), `morphToStack` (×4), `stackLineGrow` (×3), `setStackLine` (×3), `ambientLoop` (×1, Scene 3–4 hold), `fadeIn`/`fadeOut`, `recenterForOptions`, `optionsStagger`, `correctPulse`.
- Two small custom (non-`animations.js`) tweens are needed, both plain `gsap.to`/`fromTo` calls added directly in the per-question `<script>` block (not new shared helpers): the train's pass-through nudge and the platform block's slide-in in Scenes 2 & 4. These are one-off illustration-content animations, consistent with "per-question custom CSS/JS for illustration content" already permitted by design.md — not a violation of the "no new animation helpers" rule since they don't touch cards/chips/stack components.
- No `apt.stepFlow` used (correctly dropped per README 4D.1).
- No double-animation risk: text-reveal-driven cards never also get `emphasize`/`resultReveal`.

## PART 5: Master Timeline Overview

```
0.0    Phase 1 starts — QuestionCard hero (lowered) enters
0.8    SerialNum badge pop
3.6    QuestionCard + badge rise to resting position
5.86   Train illustration slides in
8.24   "180 m" label
10.28  "54 km/hr" tag
14.20  Platform block slides in + "30 s" label
[ PIN_TIME = 22.6 ]
22.6   pinFlow: question + illustration glide to pinned slots (0.8s)
23.0   Given card enters (GIVEN_TIME)
23.1–23.9  Given card lines reveal (line-level, staggered)
24.5–35.0  ambientLoop on pinned train icon
26.04  Train pass-through nudge begins (concept beat)
30.86  "Total distance" bracket fades in
35.32  Bracket fades out
[ 35.4 ]  Given → stack morph
36.8   Step 1 card enters
40.20–54.04  Step 1 formula reveals (line + word level)
[ 54.1 ]  Step 1 → stack morph + line-g-1 grows
55.0   Step 2 card enters
1:00.80–1:08.34  Step 2 formula + bridging annotation reveal
[ 1:13.0 ]  Step 2 → stack morph + line-1-2 grows
1:13.5  Step 3 card enters
1:13.46–1:27.5+  Step 3 equation reveals to final "270 m"
[ RECENTER_TIME = 90.0 ]
90.0   illus-pinned fades out; q-pinned recenters; Step 3 → stack morph + line-2-3 grows
91.0   options-reveal fades in
91.5   options stagger in
93.8   correctPulse on option C
[ END_FADE_TIME = 96.0 ]  full-frame fade out (1.2s)
~98.0   End
```
