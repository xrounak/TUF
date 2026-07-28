# Storyboard — "m/s → km/h Conversion" (Trains, Boats and Streams — Q5)

Question: *A train moves at 25 m/s. What is its speed in km/h?*
Options: **A) 90 km/h (correct)**  B) 79.2 km/h  C) 100.8 km/h  D) 111.6 km/h
Voiceover: `voiceover.wav` — duration **47.7s**
Transcript: `transcript.json` / `transcript.txt`

This question is the direct inverse of Q1 (which converted km/hr → m/s). Same visual system, same card cadence (Given → Step 1 → Step 2 → Options), reused here with the conversion running the other direction (× 18⁄5 instead of × 5⁄18).

---

## PART 1: Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Viewer Attention Focus | Visual Objective |
|---|-----------|-----------|----------------------|-------------------------|-------------------|
| 1 | 0.10–3.12 | "So welcome back again, time for one more problem." | Calm open | Question card | Card rises into place, nothing else competing |
| 2 | 3.70–12.60 | "Now in this problem, we are given that the speed of a train is twenty-five meter per second. The question is asking us to find its speed in kilometer per hour." | Restate the problem while the viewer reads it | Train + rail illustration builds; speed-board shows the given value, then the target unit | Train enters on a rail; "25 m/s" lands on the board exactly as spoken, then "? km/h" appears as the question is posed |
| 3 | 13.18–16.48 | "Now, before solving, let us remember one simple conversion." | Signal the shift into solving | Layout reorganizing — question shrinks and pins, illustration follows | PinFlow glide clears center stage; Given card opens right behind it |
| 4 | 17.04–20.90 | "One meter per second is equal to eighteen by five kilometer per hour." | State the conversion constant | Step 1 card, equation revealing word-by-word | "1 m/s = 18⁄5 km/h" builds up, ending on the boxed fraction |
| 5 | 21.28–27.92 | "This is a direct conversion, so we simply multiply the given speed by eighteen by five. Now, let us put the values." | State the approach before substituting | Step 2 card opening — single context line | "This is a direct conversion, so we multiply by 18⁄5." fades in as one line |
| 6 | 28.36–32.72 | "Speed in kilometer per hour is equal to twenty-five into eighteen by five." | Substitute the actual number into the formula | The formula becomes a concrete expression | "Speed = 25 × 18⁄5" revealed word-by-word |
| 7 | 33.20–36.98 | "Since twenty-five is divisible by five, we get five into eighteen." | Cancel the common factor | "= 5 × 18" | Reveal lands on "five into eighteen" |
| 8 | 37.44–40.10 | "After simplifying this, we get ninety kilometer per hour." | Execute the final multiplication | "= 90 km/h" boxed | Word-synced reveal ending on the highlighted final answer |
| 9 | 40.68–44.92 | "Done and dusted. So the speed of the train is ninety kilometer per hour." | Reinforce/confirm the computed answer | Step 2 card holds, fully revealed | No new reveal — card stays on screen while narration confirms |
| 10 | 45.34–47.70 | "Hence, the correct answer is option A." | Confirm the answer against the options | Options grid, A highlighting green exactly on "option A" | Step 2 joins the stack, options fade/stagger in, correct pulse lands on the spoken word |

---

## PART 2: Scene-by-Scene Storyboard

### SCENE 1 — Opening
**TIMESTAMP:** 0.0 – 3.12s
**VOICEOVER:** "So welcome back again, time for one more problem."
**VISUAL OBJECTIVE:** Calm, premium open — only the question card, before any solving begins.
**SCREEN LAYOUT:** Question card vertically centered (hero-lowered position, `y:180` offset), dotted-grid background, bottom-strip, topic name "Trains, Boats and Streams" bottom-left, logo bottom-right.
**ON-SCREEN ELEMENTS:** `#q-full-card` ("A **train** moves at **25 m/s**. What is its speed in **km/h**?"), `#serial-num` badge (fixed "Q").
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.12)` — fades/scales up at 0.3s (0.7s, `back.out(1.4)`), holds lowered through the two opening lines, rises to resting slot at 3.12s (0.6s, `power2.inOut`) as "...one more problem." finishes. Serial badge pops at 0.8s (`back.out(2)`, mirrored lowered position), rises in tandem at 3.12s.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Card's rise doubles as the transition into Scene 2.
**EDUCATIONAL PURPOSE:** Let the viewer read the full question before narration unpacks it.
**VISUAL HIERARCHY:** Question card is the only moving element.
**ATTENTION MANAGEMENT:** Single focal point.
**MOTION NOTES:** Motion tied to speech, not decorative.
**CONTINUITY FROM PREVIOUS SCENE:** N/A — opening scene.

---

### SCENE 2 — Question Restatement + Illustration Build
**TIMESTAMP:** 3.12 – 12.6s
**VOICEOVER:** "Now in this problem, we are given that the speed of a train is twenty-five meter per second. The question is asking us to find its speed in kilometer per hour."
**VISUAL OBJECTIVE:** Visualize the given speed as a concrete readout, then visualize the actual question (the unit conversion) as a second readout.
**SCREEN LAYOUT:** Question card at rest (top). Illustration area centered below (`#illustration`, 1400×300 at `top:480px`): a train on a rail (left) and a speed-board display (right).
**ON-SCREEN ELEMENTS:** `#rail` (sleeper-tie track bar), `#train-icon` (`illustration/train.svg`), `#speed-board` (rounded panel, primary border) containing `.board-label` ("GIVEN SPEED"), `.board-value` ("25 m/s"), `.board-arrow` ("↓ convert to"), `.board-target` ("? km/h").
**ANIMATION DETAILS:**
- 3.4s: `apt.roadSweep(tl, "#rail", 3.4)` — track draws in left→right (0.9s, `power3.out`).
- 3.8s: `apt.cardEnter(tl, "#train-icon", 3.8)` — train fades/scales onto the track.
- 3.8s → 12.6s: train drifts gently rightward (`x:50`, linear, `ease:"none"`) — subtle continuous motion, not a real distance cue.
- 4.2s: `apt.fadeIn(tl, "#speed-board", 4.2)` — empty board panel appears.
- 7.079s: `apt.fadeIn(tl, "#board-value", 7.079)` — "25 m/s" lands exactly as "twenty-five meter per second" is spoken.
- 10.079s: `apt.fadeIn(tl, "#board-target", 10.079)` — "? km/h" lands exactly as "asking us to find its speed..." is spoken.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Continuous from Scene 1; flows into Scene 3 via PinFlow.
**EDUCATIONAL PURPOSE:** Anchor the given quantity and the question itself to concrete visuals before formalizing them as "given"/"step" cards.
**VISUAL HIERARCHY:** Question card (top, static) → train+rail (left, gentle motion) → speed-board readouts (right, punctual reveals timed to speech).
**ATTENTION MANAGEMENT:** One slow drift plus two punctual reveals timed to the exact words that name them.
**MOTION NOTES:** The drift is decorative continuity, not a distance/time cue (this is a pure unit-conversion question).
**CONTINUITY FROM PREVIOUS SCENE:** Question card already at rest from Scene 1.

---

### SCENE 3 — Pin Transition
**TIMESTAMP:** 12.6 – 13.4s
**VOICEOVER:** "Now, before solving, let us remember one simple conversion." *(plays through the glide and into Scene 4)*
**VISUAL OBJECTIVE:** Clear center stage for the solution cards.
**SCREEN LAYOUT:** Question card glides to `#q-pinned` (`left:385px, top:30px, width:1275px`). Illustration glides to `#illus-pinned` (`left:280px, top:190px`, single small train icon + centered recap line).
**ON-SCREEN ELEMENTS:** Same card + illustration, transitioning; `#serial-num` fades out.
**ANIMATION DETAILS:**
- `PIN_TIME = 12.6`. `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 12.6)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 12.6)` (0.8s, `power2.inOut`, lands 13.4).
- `apt.fadeOut(tl, "#serial-num", 12.6, 0.5)`.
- `apt.ambientLoop(tl, "#train-pinned-icon", 14.2, 44.5)` — small finite bob on the pinned train through the long solving stretch.
**CAMERA MOVEMENT:** None — the glide is the camera.
**TRANSITIONS:** PinFlow *is* the transition.
**EDUCATIONAL PURPOSE:** Signal "we've read the problem, now we solve it."
**VISUAL HIERARCHY:** The glide is the only motion.
**ATTENTION MANAGEMENT:** Single motion cue.
**MOTION NOTES:** Card and illustration move together (same `PIN_TIME`).
**CONTINUITY FROM PREVIOUS SCENE:** Train is mid-drift at PIN_TIME — fine, the pinned illustration is a recap, not a literal endpoint.

---

### SCENE 4 — Given Card
**TIMESTAMP:** 13.4 – 16.24s
**VOICEOVER:** "...let us remember one simple conversion."
**VISUAL OBJECTIVE:** Log the given quantity as a clean boxed value before the conversion work begins.
**SCREEN LAYOUT:** `#card-given .solution-card` centered (`left:640px, top:480px`), chip "Given".
**ON-SCREEN ELEMENTS:** One `.math` line: "Speed = **25 m/s**".
**ANIMATION DETAILS:**
- `GIVEN_TIME = 13.4`. `apt.cardEnter(tl, "#card-given .solution-card", 13.4)`.
- `apt.textReveal(tl, "#card-given .math")` — single line-level span, `data-t="13.4"`.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Card enters the center stage PinFlow just vacated.
**EDUCATIONAL PURPOSE:** Separate "what we're told" from "what we compute."
**VISUAL HIERARCHY:** Given card is the sole focal point.
**ATTENTION MANAGEMENT:** One clean reveal.
**MOTION NOTES:** No fresh narration re-states this value (it was already spoken in Scene 2), so it reveals as a single line the instant the card lands, rather than a word-synced sequence.
**CONTINUITY FROM PREVIOUS SCENE:** Lands at the exact center position PinFlow vacated.

---

### SCENE 5 — Given → Stack, Step 1 (Recall the Conversion)
**TIMESTAMP:** 16.24 – 21.42s
**VOICEOVER:** "One meter per second is equal to eighteen by five kilometer per hour."
**VISUAL OBJECTIVE:** Archive the Given value, then state the conversion constant that solves the problem.
**SCREEN LAYOUT:** `#stack-given .stack-card` at `left:100px, top:140px` (circle "G"). `#card-step1 .solution-card` centered (`left:640px, top:460px`), chip "Step 1".
**ON-SCREEN ELEMENTS:** Step 1 card: equation "1 m/s = **18⁄5** km/h" (fraction rendered via `.frac`, never a bare "/" or "÷").
**ANIMATION DETAILS:**
- 16.239s: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 16.239)` (completes 17.039).
- 17.039s: `apt.cardEnter(tl, "#card-step1 .solution-card", 17.039)`.
- `apt.textReveal(tl, "#card-step1 .math")`: "1"@17.039; "m/s"@17.219; "="@18.059; `.frac`(18/5)@18.899; "km/h"@19.84.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** `apt.morphToStack` 0.8s box+text crossfade.
**EDUCATIONAL PURPOSE:** Isolate the conversion constant as its own fact before applying it.
**VISUAL HIERARCHY:** Step 1 card dominates; Given stack card sits quietly at left.
**ATTENTION MANAGEMENT:** One equation reveal.
**MOTION NOTES:** n/a.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1 enters at the exact slot the Given card's morph just vacated.

---

### SCENE 6 — Step 1 → Stack, Step 2 (Apply the Formula)
**TIMESTAMP:** 20.62 – 45.34s
**VOICEOVER:** "This is a direct conversion, so we simply multiply the given speed by eighteen by five. Now, let us put the values. Speed in kilometer per hour is equal to twenty-five into eighteen by five. Since twenty-five is divisible by five, we get five into eighteen. After simplifying this, we get ninety kilometer per hour. Done and dusted. So the speed of the train is ninety kilometer per hour."
**VISUAL OBJECTIVE:** Apply the conversion factor to the given number and carry the arithmetic through to the boxed final answer, 90 km/h.
**SCREEN LAYOUT:** `#stack-step1 .stack-card` at `left:100px, top:260px` (circle "1"), connector `#line-g-1` grown between G and 1. `#card-step2 .solution-card` centered (`left:550px, top:400px, width:820px`), chip "Step 2".
**ON-SCREEN ELEMENTS:** Step 2 card, 4 reveal lines: context ("This is a direct conversion, so we multiply by 18⁄5."), substitution ("Speed = 25 × 18⁄5"), simplification ("= 5 × 18"), final calc ("= **90 km/h**", boxed).
**ANIMATION DETAILS:**
- 20.619s: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 20.619)` (completes 21.419); `apt.stackLineGrow(tl, "#line-g-1", 20.619)`.
- 21.419s: `apt.cardEnter(tl, "#card-step2 .solution-card", 21.419)`.
- `apt.textReveal(tl, "#card-step2 .math")`:
  - context line-level @21.42
  - substitution: "Speed"@28.359, "="@30.279, "25"@30.899, "×"@31.399, `.frac`(18/5)@31.719
  - simplify: "="@35.279, "5"@35.979, "×"@36.2, "18"@36.459
  - final: "="@38.559, `.ans` "90 km/h"@38.86
- No new reveals 40.68–44.92 — card holds fully revealed while narration confirms the answer twice.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Step 1's morph directly precedes Step 2's entrance.
**EDUCATIONAL PURPOSE:** The densest reasoning beat — state approach → substitute → cancel → answer.
**VISUAL HIERARCHY:** Step 2 card is the sole focus; two quiet stack cards (G, 1) with a grown connector at left.
**ATTENTION MANAGEMENT:** Four reveal beats across ~18s, paced to the audio's own pauses, then a confirmed hold.
**MOTION NOTES:** All division/reduction uses whole-number arithmetic or `.frac`, never a bare "÷" character, per the design system's math-notation rule.
**CONTINUITY FROM PREVIOUS SCENE:** Step 2 opens at the same center slot Step 1 vacates via its morph.

---

### SCENE 7 — Final Answer + Options Reveal
**TIMESTAMP:** 44.54 – ~50s (video end)
**VOICEOVER:** "Hence, the correct answer is option A."
**VISUAL OBJECTIVE:** Confirm the computed answer (90 km/h) against the four options, landing the green highlight on A exactly as it's spoken.
**SCREEN LAYOUT:** `#stack-step2 .stack-card` at `left:100px, top:380px` (circle "2"), connector `#line-1-2` grown between 1 and 2. Pinned question recenters (`apt.recenterForOptions`, `xShift:160, yShift:180`). Options grid (2×2) fades in at `.pinned-col, top:400px`.
**ON-SCREEN ELEMENTS:** Options A (90 km/h, `class="correct"`), B (79.2 km/h), C (100.8 km/h), D (111.6 km/h). Stack column shows G / 1 / 2, all connected, all visible.
**ANIMATION DETAILS:**
- 44.539s: `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 44.539)` (completes 45.339); `apt.stackLineGrow(tl, "#line-1-2", 44.539)`.
- 45.339s: `apt.fadeOut(tl, "#illus-pinned", 45.339)`; `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 45.339)`.
- 45.5s: `apt.fadeIn(tl, "#options-reveal", 45.5)`.
- 45.8s: `apt.optionsStagger(tl, ".opt-btn", 45.8)`.
- 47.219s: `apt.correctPulse(tl, ".opt-btn.correct", 47.219)` — timed to land right as "option A." is spoken (47.219–47.7s).
- 48.3s: **END FADE** — `apt.fadeOut(tl, "#root > div", 48.3, 1.0)` — every top-level element fades out together.
- 50.0s: `tl.set({},{},50)` — final timeline marker.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Step 2's morph → recenter → options fade-in → stagger → pulse → synchronized end-fade.
**EDUCATIONAL PURPOSE:** Close the loop — the viewer sees 90 km/h match option A.
**VISUAL HIERARCHY:** Options grid is the focal point until end-fade; the full G/1/2 stack stays visible throughout.
**ATTENTION MANAGEMENT:** Correct-pulse is the last individual motion; end-fade is one unified closing beat.
**MOTION NOTES:** Stack cards/lines are never faded early — only in the final synchronized end-fade.
**CONTINUITY FROM PREVIOUS SCENE:** `#line-1-2` grows the instant Step 2 lands in the stack, mirroring Scene 6's `#line-g-1` beat.

---

## PART 3: Asset List Required

| Asset | Type | Notes |
|---|---|---|
| `illustration/train.svg` | SVG | From `global-illustrations/train.svg`, already on brand palette (`--primary` `#6373db` fills, black outline) — used as-is, no recolor needed. Large size in Phase 1 (`#train-icon`, 220×220), reused smaller in the pinned illustration (`#train-pinned-icon`, 110×110), per object-continuity. |
| Rail track | CSS-only (`#rail`) | Sleeper-tie pattern via `repeating-linear-gradient` + two rail-line borders. |
| Speed board | CSS-only (`#speed-board`) | Rounded panel, primary border, two stacked readouts (given value, target unit). |
| `design-system.css`, `animations.js`, `assets/` | Copied from `_template/` | Standard per Step 5B — no changes. |

Illustration label font sizes (per `_template/design.md` §7): Phase-1 board labels ≥22px, `.board-value`/`.board-target` 40–44px. Pinned recap line 22px, icon sized to 110×110 to match.

---

## PART 4: Animation Complexity Notes

- Only 2 solving steps (Given + Step 1 + Step 2) — two connector lines (`#line-g-1`, `#line-1-2`).
- Step 2 is the densest card (4 reveal lines across ~18s), then holds fully revealed for ~4s while narration confirms twice — no new reveals during the hold.
- The train's Phase-1 drift (`ease:"none"`, linear, 3.8s→12.6s) is the only continuous motion in the video; it's decorative (this is a pure unit-conversion question, no distance/time to depict).
- `apt.ambientLoop` on the pinned train icon spans 14.2s → 44.5s (~30.3s).
- All fractions (18⁄5) use `.frac` — never a bare "/" or "÷" character, per the design system's math-notation rule.
- Given card has only one line and no fresh word-synced narration to sync to (the value was already spoken in Scene 2) — uses a single line-level `.rv` reveal instead of word-level.
- Synchronized end-fade (`#root > div`, 48.3s, 1.0s) closes the video.

## PART 5: Master Timeline Overview

```
0.0    ─ Question card lowered-entrance begins (heroEnterLowered)
0.8    ─ Serial badge pops (lowered)
3.12   ─ Question card + badge rise to resting slot                [RISE_TIME]
3.4    ─ Rail sweeps in
3.8    ─ Train icon enters
3.8–12.6 ─ Train drifts gently (linear)
4.2    ─ Speed-board panel fades in (empty)
7.079  ─ "25 m/s" lands on the board
10.079 ─ "? km/h" lands on the board
12.6   ─ PIN FLOW — question + illustration glide to pinned slots   [PIN_TIME]
13.4   ─ Pin glide lands; serial badge fully faded
13.4   ─ Given card enters                                          [GIVEN_TIME]
14.2–44.5 ─ Ambient bob loop on pinned train
16.239 ─ Given → stack morph (completes 17.039)
17.039 ─ Step 1 card enters
17.039–19.84 ─ Step 1 conversion-constant reveal → boxed 18/5 km/h
20.619 ─ Step 1 → stack morph + line-g-1 grows (completes 21.419)
21.419 ─ Step 2 card enters
21.42–38.86 ─ Step 2 context → substitution → simplify → boxed 90 km/h
40.68–44.92 ─ Confirmation hold (no new reveals)
44.539 ─ Step 2 → stack morph + line-1-2 grows (completes 45.339)
45.339 ─ Illustration fades out; pinned question recenters           [RECENTER_TIME]
45.5   ─ Options grid fades in
45.8   ─ Options stagger in (A/B/C/D)
47.219 ─ Correct option (A) pulses, synced to "option A."
47.7   ─ Voiceover ends
48.3   ─ END FADE — every top-level element fades out together (1.0s) [END_FADE_TIME]
50.0   ─ Composition end
```
