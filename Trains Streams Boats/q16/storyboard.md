# Storyboard — "Train Crosses a Pole" (Trains, Streams and Boats — Q16)

Question: *A train travelling at 72 km/h crosses a pole in 15 seconds. Find the length of the train.*
Options: **A) 264 m**  B) 336 m  C) 372 m  **D) 300 m (correct)**
Voiceover: `voiceover.mp3` — duration **75.199s** (re-recorded with a different accent; timestamps below regenerated from the new transcript)
Transcript: `transcript.json` / `transcript.txt`

---

## PART 1: Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Viewer Attention Focus | Visual Objective |
|---|-----------|-----------|----------------------|-------------------------|-------------------|
| 1 | 0.12–4.70 | "So welcome back again, it's time to solve one more problem." | Calm open | Question card only | Card rises into place |
| 2 | 5.24–16.96 | "Now in this problem, we are given that a train is traveling at seventy-two kilometer per hour and it crosses a pole in fifteen seconds. The question is asking us to find the length of the train." | State the given values and the question | Train + rail + pole illustration builds; a board displays speed, time, and the "find length?" ask | Train enters on a rail approaching a pole; "72 km/h" and "15 s" land on a board exactly as spoken; "Find: Length?" lands as the question is posed |
| 3 | 17.42–20.58 | "Now the important words here are 'crosses a pole.'" | Flag the key phrase that unlocks the concept | The pole itself | Pole pulses/emphasizes as it's named |
| 4 | 21.38–32.54 | "What does this actually mean? A pole has almost no length. So when a train crosses a pole, the train covers only its own length. This is a simple rule to remember." | Teach the core concept visually, not just verbally | Train physically crossing the pole | Train's front reaches the pole, then continues until its rear clears it — a growing length-bracket beneath the rail visualizes "distance travelled = train's own length" |
| 5 | 33.04–38.96 | "When a train crosses a pole, Distance Covered = Length of the Train. Done? Great." | State the rule as a formal takeaway | The rule caption | "Distance Covered = Length of Train" caption appears beneath the bracket and pulses as it's read out |
| 6 | 39.40–46.72 | "Now before using the formula, we should notice one more thing. The speed is given in kilometer per hour, but the time is given in seconds." | Flag the unit mismatch before solving | Layout reorganizing — question shrinks and pins | PinFlow glide clears center stage; Given card opens right behind it, restating Speed/Time/Rule |
| 7 | 47.10–57.10 | "So first, we must convert the speed into meter per second. We know, seventy-two multiplied by five divided by eighteen is equal to twenty meters per second." | Perform the unit conversion | Step 1 card, equation revealing word-by-word | "72 × 5⁄18 = 20 m/s" builds up, ending on the boxed value |
| 8 | 57.50–60.66 | "Now this part is done. We can use this value in the next step." | Confirm and bridge to the next step | Step 1 card holds | No new reveal — card stays fully visible |
| 9 | 60.98–73.46 | "We know, Distance = Speed multiplied by Time. Since the distance covered is the length of the train, Length = 20 multiplied by 15. After multiplying, we get 300 meter." | Apply the distance formula to get the final answer | Step 2 card opening — formula, then substitution, then the boxed answer | "Length = 20 × 15 = 300 m" builds up word-by-word |
| 10 | 74.18–80.20 | "Hence, the length of the train is 300 meter. So the final answer will be Option D." | Confirm the answer against the options | Options grid, D highlighting green exactly on "Option D" | Step 2 joins the stack, options fade/stagger in, correct pulse lands on the spoken word |

---

## PART 2: Scene-by-Scene Storyboard

### SCENE 1 — Opening
**TIMESTAMP:** 0.0 – 5.24s
**VOICEOVER:** "So welcome back again, it's time to solve one more problem."
**VISUAL OBJECTIVE:** Calm, premium open — only the question card, before any solving begins.
**SCREEN LAYOUT:** Question card vertically centered (hero-lowered position, `y:180` offset), dotted-grid background, bottom-strip, topic name "Trains, Streams and Boats" bottom-left, logo bottom-right.
**ON-SCREEN ELEMENTS:** `#q-full-card` ("A **train** travelling at **72 km/h** crosses a pole in **15 seconds**. Find the length of the train."), `#serial-num` badge (fixed "Q").
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 5.24)` — fades/scales up at 0.3s (0.7s, `back.out(1.4)`), holds lowered through the opening line, rises to resting slot at 5.24s (0.6s, `power2.inOut`). Serial badge pops at 0.8s (`back.out(2)`, mirrored lowered position), rises in tandem at 5.24s.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Card's rise doubles as the transition into Scene 2.
**EDUCATIONAL PURPOSE:** Let the viewer read the full question before narration unpacks it.
**VISUAL HIERARCHY:** Question card is the only moving element.
**ATTENTION MANAGEMENT:** Single focal point.
**MOTION NOTES:** Motion tied to speech, not decorative.
**CONTINUITY FROM PREVIOUS SCENE:** N/A — opening scene.

---

### SCENE 2 — Given Values + Illustration Build
**TIMESTAMP:** 5.24 – 17.42s
**VOICEOVER:** "Now in this problem, we are given that a train is traveling at seventy-two kilometer per hour and it crosses a pole in fifteen seconds. The question is asking us to find the length of the train."
**VISUAL OBJECTIVE:** Visualize the given speed/time and the target unknown before any concept teaching begins.
**SCREEN LAYOUT:** Question card at rest (top). Illustration area centered below (`#illustration`, 1400×300 at `top:480px`): a rail (left) with a pole standing on it, a train approaching from the left, and an info-board (right) with three stacked readouts.
**ON-SCREEN ELEMENTS:** `#rail` (sleeper-tie track bar), `#pole` (CSS pole: thin vertical bar + ball cap), `#train-icon` (`illustration/train.svg`), `#info-board` (rounded panel, primary border) containing `.board-label` ("GIVEN"), `.board-line` "Speed = 72 km/h", `.board-line` "Time = 15 s (pole)", `.board-line` "Find: Length? ".
**ANIMATION DETAILS:**
- 5.6s: `apt.roadSweep(tl, "#rail", 5.6)` — track draws in left→right (0.9s, `power3.out`).
- 5.9s: `apt.fadeIn(tl, "#pole", 5.9)` — pole appears standing on the rail.
- 6.2s: `apt.cardEnter(tl, "#train-icon", 6.2)` — train fades/scales onto the track, left of the pole.
- 6.2s → 21.3s: train drifts slowly toward the pole (`x: 0 → 410`, linear, `ease:"none"`) so its front visually arrives at the pole exactly as the concept beat (Scene 4) begins.
- 6.5s: `apt.fadeIn(tl, "#info-board", 6.5)` — empty board panel appears.
- 9.08s: `apt.fadeIn(tl, "#board-speed", 9.08)` — "Speed = 72 km/h" lands exactly as "seventy-two kilometer per hour" is spoken.
- 12.92s: `apt.fadeIn(tl, "#board-time", 12.92)` — "Time = 15 s (pole)" lands as "fifteen seconds" is spoken.
- 15.56s: `apt.fadeIn(tl, "#board-find", 15.56)` — "Find: Length?" lands as "find the length of the train" is spoken.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Continuous from Scene 1; flows into Scene 3 as the train keeps drifting.
**EDUCATIONAL PURPOSE:** Anchor the given quantities and the unknown to concrete visuals before the concept is taught.
**VISUAL HIERARCHY:** Question card (top, static) → train+rail+pole (left, slow drift) → info-board readouts (right, punctual reveals timed to speech).
**ATTENTION MANAGEMENT:** One continuous drift plus three punctual reveals timed to the exact words that name them.
**MOTION NOTES:** The Scene 2 drift is a real approach (front travels toward the pole), unlike a purely decorative drift — it sets up Scene 4's crossing motion.
**CONTINUITY FROM PREVIOUS SCENE:** Question card already at rest from Scene 1.

---

### SCENE 3 — "Crosses a Pole" Callout
**TIMESTAMP:** 17.42 – 21.38s
**VOICEOVER:** "Now the important words here are 'crosses a pole.'"
**VISUAL OBJECTIVE:** Draw explicit attention to the pole before explaining what crossing it means.
**SCREEN LAYOUT:** Unchanged from Scene 2 — train still drifting toward the pole.
**ON-SCREEN ELEMENTS:** `#pole`.
**ANIMATION DETAILS:** 19.12s: `apt.emphasize(tl, "#pole", 19.12)` — yo-yo scale pulse (0.3s, `power2.out`) timed to `"crosses` starting at 19.119.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Continuous — train keeps drifting in the background.
**EDUCATIONAL PURPOSE:** Prime the viewer for the concept beat.
**VISUAL HIERARCHY:** Pole becomes the momentary focal point via the pulse.
**ATTENTION MANAGEMENT:** Single emphasis cue.
**MOTION NOTES:** n/a.
**CONTINUITY FROM PREVIOUS SCENE:** Same drift continues underneath.

---

### SCENE 4 — The Concept: Crossing = Covering Its Own Length
**TIMESTAMP:** 21.38 – 33.04s
**VOICEOVER:** "What does this actually mean? A pole has almost no length. So when a train crosses a pole, the train covers only its own length. This is a simple rule to remember."
**VISUAL OBJECTIVE:** Teach the core insight visually: the distance the train travels while "crossing" the pole exactly equals the train's own length.
**SCREEN LAYOUT:** Same illustration area. Train's front has just reached the pole (drift from Scene 2 lands here at x:410).
**ON-SCREEN ELEMENTS:** `#train-icon`, `#pole`, `#length-bracket` (grows beneath the rail, primary color, tick marks at both ends), `#length-label` ("Distance = Train's Length", fades in once the bracket finishes growing).
**ANIMATION DETAILS:**
- 21.38–25.70s: train sits with its front at the pole (drift paused conceptually — no new tween; Scene 2's tween already lands it here) while "What does this actually mean? A pole has almost no length." plays.
- 25.70s: `tl.to("#train-icon", { x: 610, duration: 4.64, ease: "none" }, 25.70)` — the train continues forward by exactly its own width (200px) so its rear clears the pole, landing at 30.34s, timed to "the train covers only its own length."
- 25.70s: `tl.fromTo("#length-bracket", { width: 0 }, { width: 200, duration: 4.64, ease: "none" }, 25.70)` — the bracket grows in perfect sync with the train's motion, visually tracing the exact distance covered.
- 30.54s: `apt.fadeIn(tl, "#length-label", 30.54)` — "Distance = Train's Length" appears right after the bracket finishes, timed to "This is a simple rule to remember."
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Flows directly into Scene 5's rule caption.
**EDUCATIONAL PURPOSE:** This is the single most important visual beat in the video — it makes the abstract rule concrete.
**VISUAL HIERARCHY:** Train's crossing motion + growing bracket dominate; everything else static.
**ATTENTION MANAGEMENT:** One synchronized motion (train + bracket), one reveal (label).
**MOTION NOTES:** The Scene 2 drift and this scene's crossing tween are two separate, deliberately distinct motions — the first is "approaching" (decorative pacing), the second is "crossing" (the actual concept, exactly train-width in distance).
**CONTINUITY FROM PREVIOUS SCENE:** Train's position at 21.38s (front at pole) is exactly where Scene 2's drift left it — no jump cut.

---

### SCENE 5 — Rule Statement
**TIMESTAMP:** 33.04 – 39.40s
**VOICEOVER:** "When a train crosses a pole, Distance Covered = Length of the Train. Done? Great."
**VISUAL OBJECTIVE:** Formalize the visual concept into the stated rule.
**SCREEN LAYOUT:** Unchanged — bracket and label remain visible under the now-crossed train.
**ON-SCREEN ELEMENTS:** `#length-label`.
**ANIMATION DETAILS:** 33.04s: `apt.emphasize(tl, "#length-label", 33.04)` — yo-yo scale pulse reinforcing the caption as the rule is spoken aloud.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Holds until the Pin Transition (Scene 6).
**EDUCATIONAL PURPOSE:** Cements the rule as the bridge into solving.
**VISUAL HIERARCHY:** Label is the sole focus.
**ATTENTION MANAGEMENT:** Single pulse, then a calm hold.
**MOTION NOTES:** No new element introduced — this is a confirmation beat.
**CONTINUITY FROM PREVIOUS SCENE:** Same frame, no cut.

---

### SCENE 6 — Pin Transition
**TIMESTAMP:** 39.40 – 40.30s
**VOICEOVER:** "Now before using the formula, we should notice one more thing." *(plays through the glide and into Scene 7)*
**VISUAL OBJECTIVE:** Clear center stage for the solution cards.
**SCREEN LAYOUT:** Question card glides to `#q-pinned` (`left:385px, top:30px, width:1275px`). Illustration glides to `#illus-pinned` (`left:280px, top:190px`, single small train icon + centered recap line).
**ON-SCREEN ELEMENTS:** Same card + illustration, transitioning; `#serial-num` fades out.
**ANIMATION DETAILS:**
- `PIN_TIME = 39.4`. `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 39.4)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 39.4)` (0.8s, `power2.inOut`, lands 40.2).
- `apt.fadeOut(tl, "#serial-num", 39.4, 0.5)`.
- `apt.ambientLoop(tl, "#train-pinned-icon", 41.0, 76.8)` — small finite bob on the pinned train through the long solving stretch.
**CAMERA MOVEMENT:** None — the glide is the camera.
**TRANSITIONS:** PinFlow *is* the transition.
**EDUCATIONAL PURPOSE:** Signal "we've read the problem and learned the concept, now we solve it."
**VISUAL HIERARCHY:** The glide is the only motion.
**ATTENTION MANAGEMENT:** Single motion cue.
**MOTION NOTES:** Card and illustration move together (same `PIN_TIME`).
**CONTINUITY FROM PREVIOUS SCENE:** Bracket/label are dropped from the pinned recap (replaced by a short text line) — train icon is the object that persists, per continuity rules.

---

### SCENE 7 — Given Card
**TIMESTAMP:** 40.30 – 46.90s
**VOICEOVER:** (holds over) "...we should notice one more thing. The speed is given in kilometer per hour, but the time is given in seconds."
**VISUAL OBJECTIVE:** Log the given quantities and the rule as clean boxed facts before the unit-conversion work begins.
**SCREEN LAYOUT:** `#card-given .solution-card` centered (`left:640px, top:460px`), chip "Given".
**ON-SCREEN ELEMENTS:** Three `.math` lines: "Speed = **72 km/h**", "Time = **15 s** (crosses pole)", "Distance = **Length of Train**".
**ANIMATION DETAILS:**
- `GIVEN_TIME = 40.3`. `apt.cardEnter(tl, "#card-given .solution-card", 40.3)`.
- `apt.textReveal(tl, "#card-given .math")` — single line-level span covering all three lines, `data-t="40.3"` (these values were already spoken/shown in Scenes 2 & 4–5, so this is a clean recap, not a fresh word-synced sequence — same convention as Q1's Given card).
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Card enters the center stage PinFlow just vacated.
**EDUCATIONAL PURPOSE:** Separate "what we're told + the rule we'll use" from "what we compute."
**VISUAL HIERARCHY:** Given card is the sole focal point.
**ATTENTION MANAGEMENT:** One clean reveal.
**MOTION NOTES:** No fresh narration re-states these values, so it reveals as a single block the instant the card lands.
**CONTINUITY FROM PREVIOUS SCENE:** Lands at the exact center position PinFlow vacated.

---

### SCENE 8 — Given → Stack, Step 1 (Unit Conversion)
**TIMESTAMP:** 46.90 – 60.20s
**VOICEOVER:** "So first, we must convert the speed into meter per second. We know, seventy-two multiplied by five divided by eighteen is equal to twenty meters per second. Now this part is done. We can use this value in the next step."
**VISUAL OBJECTIVE:** Convert the given speed into m/s so it matches the time's unit (seconds).
**SCREEN LAYOUT:** `#stack-given .stack-card` at `left:100px, top:140px` (circle "G"). `#card-step1 .solution-card` centered (`left:640px, top:460px`), chip "Step 1".
**ON-SCREEN ELEMENTS:** Step 1 card: context line ("Convert speed into m/s:") + equation "72 × **5⁄18** = **20 m/s**" (fraction rendered via `.frac`, never a bare "/" or "÷").
**ANIMATION DETAILS:**
- 46.9s: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 46.9)` (completes 47.7).
- 47.7s: `apt.cardEnter(tl, "#card-step1 .solution-card", 47.7)`.
- `apt.textReveal(tl, "#card-step1 .math")`: context line-level @47.1 (timed to "So first,"); "72"@51.919, "×"@52.439, `.frac`(5/18)@53.159, "="@55.239, `.ans` "20 m/s"@55.68.
- No new reveals 57.5–60.2 — card holds fully revealed while narration confirms ("Now this part is done...").
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** `apt.morphToStack` 0.8s box+text crossfade.
**EDUCATIONAL PURPOSE:** Isolate the unit conversion as its own solved fact before applying the distance formula.
**VISUAL HIERARCHY:** Step 1 card dominates; Given stack card sits quietly at left.
**ATTENTION MANAGEMENT:** One context line, one equation reveal, then a confirmed hold.
**MOTION NOTES:** All division (72 divided by 18 inside 5⁄18) uses `.frac`, never a bare "÷" character.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1 enters at the exact slot the Given card's morph just vacated.

---

### SCENE 9 — Step 1 → Stack, Step 2 (Apply the Distance Formula)
**TIMESTAMP:** 60.20 – 76.00s
**VOICEOVER:** "We know, Distance = Speed multiplied by Time. Since the distance covered is the length of the train, Length = 20 multiplied by 15. After multiplying, we get 300 meter."
**VISUAL OBJECTIVE:** Apply the distance formula using the converted speed and the given time to reach the boxed final answer, 300 m.
**SCREEN LAYOUT:** `#stack-step1 .stack-card` at `left:100px, top:290px` (circle "1"), connector `#line-g-1` grown between G and 1. `#card-step2 .solution-card` centered (`left:600px, top:440px, width:720px`), chip "Step 2".
**ON-SCREEN ELEMENTS:** Step 2 card, 3 reveal lines: context ("Distance = Speed × Time"), substitution ("Length = 20 × 15"), final answer ("= **300 m**", boxed).
**ANIMATION DETAILS:**
- 60.2s: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 60.2)` (completes 61.0); `apt.stackLineGrow(tl, "#line-g-1", 60.2)`.
- 61.0s: `apt.cardEnter(tl, "#card-step2 .solution-card", 61.0)`.
- `apt.textReveal(tl, "#card-step2 .math")`:
  - context line-level @61.0 (timed to "We know, Distance...")
  - substitution: "Length"@68.239, "="@68.739, "20"@69.059, "×"@69.439, "15"@70.18
  - final: "="@72.479, `.ans` "300 m"@72.479
- No new reveals 73.46–76.0 — card holds fully revealed while narration confirms ("Hence, the length of the train is 300 meter...").
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Step 1's morph directly precedes Step 2's entrance.
**EDUCATIONAL PURPOSE:** The final computation beat — formula → substitution → boxed answer.
**VISUAL HIERARCHY:** Step 2 card is the sole focus; two quiet stack cards (G, 1) with a grown connector at left.
**ATTENTION MANAGEMENT:** Three reveal beats paced to the audio's own pauses, then a confirmed hold.
**MOTION NOTES:** n/a — no division needed in this step (plain multiplication).
**CONTINUITY FROM PREVIOUS SCENE:** Step 2 opens at the same center slot Step 1 vacates via its morph.

---

### SCENE 10 — Final Answer + Options Reveal
**TIMESTAMP:** 76.00 – ~82.10s (video end)
**VOICEOVER:** "Hence, the length of the train is 300 meter. So the final answer will be Option D."
**VISUAL OBJECTIVE:** Confirm the computed answer (300 m) against the four options, landing the green highlight on D exactly as it's spoken.
**SCREEN LAYOUT:** `#stack-step2 .stack-card` at `left:100px, top:440px` (circle "2"), connector `#line-1-2` grown between 1 and 2. Pinned question recenters (`apt.recenterForOptions`, `xShift:160, yShift:180`). Options grid (2×2) fades in at `.pinned-col, top:400px`.
**ON-SCREEN ELEMENTS:** Options A (264 m), B (336 m), C (372 m), D (300 m, `class="correct"`). Stack column shows G / 1 / 2, all connected, all visible.
**ANIMATION DETAILS:**
- 76.0s: `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 76.0)` (completes 76.8); `apt.stackLineGrow(tl, "#line-1-2", 76.0)`.
- 76.8s: `apt.fadeOut(tl, "#illus-pinned", 76.8)`; `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 76.8)`.
- 77.0s: `apt.fadeIn(tl, "#options-reveal", 77.0)`.
- 77.4s: `apt.optionsStagger(tl, ".opt-btn", 77.4)`.
- 79.68s: `apt.correctPulse(tl, ".opt-btn.correct", 79.68)` — timed to land right as "Option D." is spoken (79.68–80.199s).
- 80.9s: **END FADE** — `apt.fadeOut(tl, "#root > div", 80.9, 1.2)` — every top-level element fades out together.
- 83.0s: `tl.set({},{},83)` — final timeline marker.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Step 2's morph → recenter → options fade-in → stagger → pulse → synchronized end-fade.
**EDUCATIONAL PURPOSE:** Close the loop — the viewer sees 300 m match option D.
**VISUAL HIERARCHY:** Options grid is the focal point until end-fade; the full G/1/2 stack stays visible throughout.
**ATTENTION MANAGEMENT:** Correct-pulse is the last individual motion; end-fade is one unified closing beat.
**MOTION NOTES:** Stack cards/lines are never faded early — only in the final synchronized end-fade.
**CONTINUITY FROM PREVIOUS SCENE:** `#line-1-2` grows the instant Step 2 lands in the stack, mirroring Scene 9's `#line-g-1` beat.

---

## PART 3: Asset List Required

| Asset | Type | Notes |
|---|---|---|
| `illustration/train.svg` | SVG | Copied from `global-illustrations/train.svg`, already on brand palette (`--primary` `#6373db` fills, black outline) — used as-is, no recolor needed. 200×160 in Phase 1 (`#train-icon`), reused smaller (110×110) in the pinned recap (`#train-pinned-icon`), per object continuity. |
| Rail track | CSS-only (`#rail`) | Sleeper-tie pattern via `repeating-linear-gradient` + two rail-line borders, same technique as Q1. |
| Pole | CSS-only (`#pole`) | Thin vertical bar (6px × 160px, neutral gray) + a small ball cap, standing on the rail. |
| Info board | CSS-only (`#info-board`) | Rounded panel, primary border, three stacked readouts (Speed / Time / Find). |
| Length bracket | CSS-only (`#length-bracket`) | Horizontal bar (primary color) with small vertical tick marks at both ends, grown via a `width` tween synced to the train's crossing motion. |
| `design-system.css`, `animations.js`, `assets/` | Copied from `_template/` | Standard per Step 5B — no changes. |

Illustration label font sizes (per `_template/design.md` §7): Phase-1 board lines ≥22px, board label 20px caption bumped to 22px to clear the floor. Pinned recap line 22px, icon sized to 110×110 to match. Length-label 22px.

---

## PART 4: Animation Complexity Notes

- Only 2 solving steps (Given + Step 1 + Step 2) — two connector lines (`#line-g-1`, `#line-1-2`).
- Scene 4's train-crossing tween (`x: 410 → 610`, exactly the train's own 200px width) and the synced `#length-bracket` width tween are the single most important visual beat — they make the "distance = train's length" rule concrete rather than purely verbal. This is a custom per-question tween built from plain GSAP `tl.to()`/`tl.fromTo()` calls (not a new `animations.js` helper), same pattern as Q1's decorative drift.
- Scene 2's earlier drift (`x: 0 → 410`, 6.2s→21.3s) is a real "approach" (front travels toward the pole), distinct from Scene 4's "crossing" tween (rear clears the pole) — together they read as one continuous, meaningful motion rather than a decorative loop.
- `apt.ambientLoop` on the pinned train icon spans 41.0s → 76.8s (~35.8s).
- Step 2 needs no `.frac` (plain multiplication, no division) — Step 1's `72 ÷ 18` (inside the `5⁄18` recall) is the only division in this video, rendered via `.frac`, never a bare "÷".
- Given card has three lines and no fresh word-synced narration to sync to (the values/rule were already spoken/shown in Scenes 2, 4 and 5) — uses a single line-level `.rv` reveal instead of word-level, same convention as Q1's Given card.
- Synchronized end-fade (`#root > div`, 80.9s, 1.2s) closes the video.

## PART 5: Master Timeline Overview

**Re-synced to the re-recorded voiceover (new accent, 75.199s duration) — all timestamps below are pulled from the regenerated `transcript.json`, and `index.html` has been updated to match.**

```
0.0    ─ Question card lowered-entrance begins (heroEnterLowered)
0.8    ─ Serial badge pops (lowered)
3.42   ─ Question card + badge rise to resting slot                [RISE_TIME]
3.9    ─ Rail sweeps in
4.2    ─ Pole fades in
4.5    ─ Train icon enters
4.5–16.86 ─ Train drifts toward the pole (linear, front arrives at pole @16.86)
4.8    ─ Info board panel fades in (empty)
6.179  ─ "Speed = 72 km/h" lands on the board
9.159  ─ "Time = 15 s (pole)" lands on the board
11.719 ─ "Find: Length?" lands on the board
14.96  ─ Pole pulses ("crosses a pole" emphasis)
16.86–20.36 ─ Hold — front of train at the pole (concept setup)
20.36–24.34 ─ Train crosses the pole (x:410→610, exactly train-width) + length-bracket grows in sync
24.8   ─ "Distance = Train's Length" label fades in
27.4   ─ Label pulses (rule statement emphasis)
34.24  ─ PIN FLOW — question + illustration glide to pinned slots   [PIN_TIME]
35.04  ─ Pin glide lands; serial badge fully faded
35.14  ─ Given card enters                                          [GIVEN_TIME]
36.0–69.5 ─ Ambient bob loop on pinned train
42.2   ─ Given → stack morph (completes 43.0)
43.0   ─ Step 1 card enters
43.06–50.799 ─ Step 1 conversion reveal → boxed 20 m/s
52.32–55.6 ─ Confirmation hold (no new reveals)
55.6   ─ Step 1 → stack morph + line-g-1 grows (completes 56.4)
56.4   ─ Step 2 card enters
56.4–66.939 ─ Step 2 formula → substitution → boxed 300 m
67.96–68.7 ─ Confirmation hold (no new reveals)
68.7   ─ Step 2 → stack morph + line-1-2 grows (completes 69.5)
69.5   ─ Illustration fades out; pinned question recenters           [RECENTER_TIME]
69.7   ─ Options grid fades in
70.1   ─ Options stagger in (A/B/C/D)
74.659 ─ Correct option (D) pulses, synced to "option D."
75.199 ─ Voiceover ends
75.9   ─ END FADE — every top-level element fades out together (1.2s) [END_FADE_TIME]
78.0   ─ Composition end
```
