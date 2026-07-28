# Storyboard — "Train Speed Conversion" (Trains, Boats and Streams — Q1)

Question: *The speed of a train is 72 km/hr. Convert this speed into m/s.*
Options: **A) 20 m/s (correct)**  B) 17.6 m/s  C) 22.4 m/s  D) 24.8 m/s
Voiceover: `voiceover.wav` — duration **60.819s**
Transcript: `transcript.json` / `transcript.txt`

---

## PART 1: Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Viewer Attention Focus | Visual Objective |
|---|-----------|-----------|----------------------|-------------------------|-------------------|
| 1 | 0.10–5.98 | "So welcome back. I hope you have gone through the theory part for this topic. Now it's time to solve some problems." | Calm open, framing this as applied practice | Question card, appearing calmly | Card rises into place, nothing else competing |
| 2 | 6.38–15.64 | "Now, in this problem, we are given that the speed of a train is seventy-two kilometer per hour. The question is asking us to convert the speed into meter per second." | Restate the problem while the viewer reads it | Train + rail illustration builds; a speed-board displays the given value, then the target unit is asked | Train enters on a rail; "72 km/hr" lands on the board exactly as spoken, then "? m/s" appears as the question is posed |
| 3 | 16.06–19.76 | "Now, before solving, let us recall one basic conversion." | Signal the shift into solving | Layout reorganizing — question shrinks and pins, illustration follows | PinFlow glide clears center stage; Given card opens right behind it |
| 4 | 20.22–25.62 | "We know that one kilometer per hour is equal to five by eighteen meters per second." | State the conversion constant | Step 1 card, equation revealing word-by-word | "1 km/hr = 5⁄18 m/s" builds up, ending on the boxed fraction |
| 5 | 26.18–39.00 | "This is a direct formula-based question. So we simply multiply the given speed by five by eighteen. Speed in meters per second is equal to speed in kilometers per hour into five by eighteen." | State the general formula being applied | Step 2 card opening — context line, then the formula itself | Formula "Speed (m/s) = Speed (km/hr) × 5⁄18" builds up |
| 6 | 39.36–43.84 | "Now, putting the given value, speed is equal to seventy-two into five by eighteen." | Substitute the actual number into the formula | The formula becomes a concrete expression | "Speed = 72 × 5⁄18" revealed |
| 7 | 44.20–50.96 | "After simplifying this, seventy-two divided by eighteen becomes four. So we get four into five, which is twenty." | Execute the arithmetic to the final number | 72⁄18 → 4 → 4×5 → boxed 20 m/s | Word-synced reveal ending on the highlighted final answer |
| 8 | 51.28–58.06 | "Hence, the speed of the train is twenty meter per second. So the final answer is twenty meter per second." | Reinforce/confirm the computed answer | Step 2 card holds, fully revealed | No new reveal — card stays on screen while narration confirms |
| 9 | 58.50–60.82 | "Hence, the correct option is option A." | Confirm the answer against the options | Options grid, A highlighting green exactly on "option A" | Step 2 joins the stack, options fade/stagger in, correct pulse lands on the spoken word |

---

## PART 2: Scene-by-Scene Storyboard

### SCENE 1 — Opening
**TIMESTAMP:** 0.0 – 5.98s
**VOICEOVER:** "So welcome back. I hope you have gone through the theory part for this topic. Now it's time to solve some problems."
**VISUAL OBJECTIVE:** Calm, premium open — only the question card, before any solving begins.
**SCREEN LAYOUT:** Question card vertically centered (hero-lowered position, `y:180` offset), dotted-grid background, bottom-strip, topic name "Trains, Boats and Streams" bottom-left, logo bottom-right.
**ON-SCREEN ELEMENTS:** `#q-full-card` ("The speed of a **train** is **72 km/hr**. Convert this speed into **m/s**."), `#serial-num` badge (fixed "Q").
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 5.98)` — fades/scales up at 0.3s (0.7s, `back.out(1.4)`), holds lowered through the three opening lines, rises to resting slot at 5.98s (0.6s, `power2.inOut`) as "...solve some problems." finishes. Serial badge pops at 0.8s (`back.out(2)`, mirrored lowered position), rises in tandem at 5.98s.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Card's rise doubles as the transition into Scene 2.
**EDUCATIONAL PURPOSE:** Let the viewer read the full question before narration unpacks it.
**VISUAL HIERARCHY:** Question card is the only moving element.
**ATTENTION MANAGEMENT:** Single focal point.
**MOTION NOTES:** Motion tied to speech, not decorative.
**CONTINUITY FROM PREVIOUS SCENE:** N/A — opening scene.

---

### SCENE 2 — Question Restatement + Illustration Build
**TIMESTAMP:** 5.98 – 15.7s
**VOICEOVER:** "Now, in this problem, we are given that the speed of a train is seventy-two kilometer per hour. The question is asking us to convert the speed into meter per second."
**VISUAL OBJECTIVE:** Visualize the given speed as a concrete readout, then visualize the actual question (the unit conversion) as a second readout.
**SCREEN LAYOUT:** Question card at rest (top). Illustration area centered below (`#illustration`, 1400×300 at `top:480px`): a train on a rail (left) and a speed-board display (right).
**ON-SCREEN ELEMENTS:** `#rail` (sleeper-tie track bar), `#train-icon` (`illustration/train.svg`), `#speed-board` (rounded panel, primary border) containing `.board-label` ("GIVEN SPEED"), `.board-value` ("72 km/hr"), `.board-arrow` ("↓ convert to"), `.board-target` ("? m/s").
**ANIMATION DETAILS:**
- 6.4s: `apt.roadSweep(tl, "#rail", 6.4)` — track draws in left→right (0.9s, `power3.out`).
- 6.8s: `apt.cardEnter(tl, "#train-icon", 6.8)` — train fades/scales onto the track.
- 7.0s → 15.5s: train drifts gently rightward (`x:50`, linear, `ease:"none"`) — subtle continuous motion, not a real distance cue.
- 7.6s: `apt.fadeIn(tl, "#speed-board", 7.6)` — empty board panel appears.
- 9.8s: `apt.fadeIn(tl, "#board-value", 9.8)` — "72 km/hr" lands exactly as "seventy-two kilometer per hour" is spoken.
- 11.88s: `apt.fadeIn(tl, "#board-target", 11.88)` — "? m/s" lands exactly as "the question is asking us to convert..." is spoken.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Continuous from Scene 1; flows into Scene 3 via PinFlow.
**EDUCATIONAL PURPOSE:** Anchor the given quantity and the question itself to concrete visuals before formalizing them as "given"/"step" cards.
**VISUAL HIERARCHY:** Question card (top, static) → train+rail (left, gentle motion) → speed-board readouts (right, punctual reveals timed to speech).
**ATTENTION MANAGEMENT:** One slow drift plus two punctual reveals timed to the exact words that name them.
**MOTION NOTES:** The drift is decorative continuity, not a distance/time cue (this is a pure unit-conversion question).
**CONTINUITY FROM PREVIOUS SCENE:** Question card already at rest from Scene 1.

---

### SCENE 3 — Pin Transition
**TIMESTAMP:** 15.7 – 16.6s
**VOICEOVER:** "Now, before solving, let us recall one basic conversion." *(plays through the glide and into Scene 4)*
**VISUAL OBJECTIVE:** Clear center stage for the solution cards.
**SCREEN LAYOUT:** Question card glides to `#q-pinned` (`left:385px, top:30px, width:1275px`). Illustration glides to `#illus-pinned` (`left:280px, top:190px`, single small train icon + centered recap line).
**ON-SCREEN ELEMENTS:** Same card + illustration, transitioning; `#serial-num` fades out.
**ANIMATION DETAILS:**
- `PIN_TIME = 15.7`. `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 15.7)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 15.7)` (0.8s, `power2.inOut`, lands 16.5).
- `apt.fadeOut(tl, "#serial-num", 15.7, 0.5)`.
- `apt.ambientLoop(tl, "#train-pinned-icon", 17.3, 58.86)` — small finite bob on the pinned train through the long solving stretch.
**CAMERA MOVEMENT:** None — the glide is the camera.
**TRANSITIONS:** PinFlow *is* the transition.
**EDUCATIONAL PURPOSE:** Signal "we've read the problem, now we solve it."
**VISUAL HIERARCHY:** The glide is the only motion.
**ATTENTION MANAGEMENT:** Single motion cue.
**MOTION NOTES:** Card and illustration move together (same `PIN_TIME`).
**CONTINUITY FROM PREVIOUS SCENE:** Train is mid-drift at PIN_TIME — fine, the pinned illustration is a recap, not a literal endpoint.

---

### SCENE 4 — Given Card
**TIMESTAMP:** 16.6 – 19.4s
**VOICEOVER:** (holds over) "...let us recall one basic conversion."
**VISUAL OBJECTIVE:** Log the given quantity as a clean boxed value before the conversion work begins.
**SCREEN LAYOUT:** `#card-given .solution-card` centered (`left:640px, top:480px`), chip "Given".
**ON-SCREEN ELEMENTS:** One `.math` line: "Speed = **72 km/hr**".
**ANIMATION DETAILS:**
- `GIVEN_TIME = 16.6`. `apt.cardEnter(tl, "#card-given .solution-card", 16.6)`.
- `apt.textReveal(tl, "#card-given .math")` — single line-level span, `data-t="16.6"`.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Card enters the center stage PinFlow just vacated.
**EDUCATIONAL PURPOSE:** Separate "what we're told" from "what we compute."
**VISUAL HIERARCHY:** Given card is the sole focal point.
**ATTENTION MANAGEMENT:** One clean reveal.
**MOTION NOTES:** No fresh narration re-states this value (it was already spoken in Scene 2), so it reveals as a single line the instant the card lands, rather than a word-synced sequence.
**CONTINUITY FROM PREVIOUS SCENE:** Lands at the exact center position PinFlow vacated.

---

### SCENE 5 — Given → Stack, Step 1 (Recall the Conversion)
**TIMESTAMP:** 19.4 – 26.1s
**VOICEOVER:** "We know that one kilometer per hour is equal to five by eighteen meters per second."
**VISUAL OBJECTIVE:** Archive the Given value, then state the conversion constant that solves the problem.
**SCREEN LAYOUT:** `#stack-given .stack-card` at `left:100px, top:140px` (circle "G"). `#card-step1 .solution-card` centered (`left:640px, top:460px`), chip "Step 1".
**ON-SCREEN ELEMENTS:** Step 1 card: context line ("We know a basic conversion:") + equation "1 km/hr = **5⁄18** m/s" (fraction rendered via `.frac`, never a bare "/" or "÷").
**ANIMATION DETAILS:**
- 19.4s: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 19.4)` (completes 20.2).
- 20.2s: `apt.cardEnter(tl, "#card-step1 .solution-card", 20.2)`.
- `apt.textReveal(tl, "#card-step1 .math")`: context line-level @20.219; "1"@21.34, "km/hr"@21.639, "="@23.5, `.frac`(5/18)@23.879, "m/s"@24.779.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** `apt.morphToStack` 0.8s box+text crossfade.
**EDUCATIONAL PURPOSE:** Isolate the conversion constant as its own fact before applying it.
**VISUAL HIERARCHY:** Step 1 card dominates; Given stack card sits quietly at left.
**ATTENTION MANAGEMENT:** One context line, one equation reveal.
**MOTION NOTES:** n/a.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1 enters at the exact slot the Given card's morph just vacated.

---

### SCENE 6 — Step 1 → Stack, Step 2 (Apply the Formula)
**TIMESTAMP:** 25.3 – 58.06s
**VOICEOVER:** "This is a direct formula-based question. So we simply multiply the given speed by five by eighteen. Speed in meters per second is equal to speed in kilometers per hour into five by eighteen. Now, putting the given value, speed is equal to seventy-two into five by eighteen. After simplifying this, seventy-two divided by eighteen becomes four. So we get four into five, which is twenty. Hence, the speed of the train is twenty meter per second. So the final answer is twenty meter per second."
**VISUAL OBJECTIVE:** Apply the formula to the given number and carry the arithmetic through to the boxed final answer, 20 m/s.
**SCREEN LAYOUT:** `#stack-step1 .stack-card` at `left:100px, top:260px` (circle "1"), connector `#line-g-1` grown between G and 1. `#card-step2 .solution-card` centered (`left:550px, top:400px, width:820px`), chip "Step 2".
**ON-SCREEN ELEMENTS:** Step 2 card, 5 reveal lines: context ("This is a direct formula-based question."), formula ("Speed (m/s) = Speed (km/hr) × 5⁄18"), substitution ("Speed = 72 × 5⁄18"), simplification (`.frac`(72/18) = 4 — never a bare "÷"), final calc ("4 × 5 = **20 m/s**", boxed).
**ANIMATION DETAILS:**
- 25.3s: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 25.3)` (completes 26.1); `apt.stackLineGrow(tl, "#line-g-1", 25.3)`.
- 26.1s: `apt.cardEnter(tl, "#card-step2 .solution-card", 26.1)`.
- `apt.textReveal(tl, "#card-step2 .math")`:
  - context line-level @26.18
  - formula: "Speed"@33.04, "(m/s)"@33.479, "="@34.559, "Speed"@35.579, "(km/hr)"@36.099, "×"@37.659, `.frac`(5/18)@38.0
  - substitution: "Speed"@41.099, "="@41.559, "72"@42.02, "×"@42.579, `.frac`(5/18)@42.879
  - simplify: `.frac`(72/18)@45.559, "="@47.279, "4"@47.779
  - final: "4"@49.139, "×"@49.34, "5"@49.599, "="@50.139, `.ans` "20 m/s"@50.5
- No new reveals 51.28–58.06 — card holds fully revealed while narration confirms the answer twice.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Step 1's morph directly precedes Step 2's entrance.
**EDUCATIONAL PURPOSE:** The densest reasoning beat — formula → substitution → arithmetic → answer.
**VISUAL HIERARCHY:** Step 2 card is the sole focus; two quiet stack cards (G, 1) with a grown connector at left.
**ATTENTION MANAGEMENT:** Five reveal beats across ~24s, paced to the audio's own pauses, then a confirmed hold.
**MOTION NOTES:** All division (72⁄18) uses `.frac`, never a bare "÷" character, per the design system's math-notation rule.
**CONTINUITY FROM PREVIOUS SCENE:** Step 2 opens at the same center slot Step 1 vacates via its morph.

---

### SCENE 7 — Final Answer + Options Reveal
**TIMESTAMP:** 58.06 – ~63s (video end)
**VOICEOVER:** "Hence, the correct option is option A."
**VISUAL OBJECTIVE:** Confirm the computed answer (20 m/s) against the four options, landing the green highlight on A exactly as it's spoken.
**SCREEN LAYOUT:** `#stack-step2 .stack-card` at `left:100px, top:380px` (circle "2"), connector `#line-1-2` grown between 1 and 2. Pinned question recenters (`apt.recenterForOptions`, `xShift:160, yShift:180`). Options grid (2×2) fades in at `.pinned-col, top:400px`.
**ON-SCREEN ELEMENTS:** Options A (20 m/s, `class="correct"`), B (17.6 m/s), C (22.4 m/s), D (24.8 m/s). Stack column shows G / 1 / 2, all connected, all visible.
**ANIMATION DETAILS:**
- 58.06s: `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 58.06)` (completes 58.86); `apt.stackLineGrow(tl, "#line-1-2", 58.06)`.
- 58.86s: `apt.fadeOut(tl, "#illus-pinned", 58.86)`; `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 58.86)`.
- 58.9s: `apt.fadeIn(tl, "#options-reveal", 58.9)`.
- 59.2s: `apt.optionsStagger(tl, ".opt-btn", 59.2)`.
- 60.36s: `apt.correctPulse(tl, ".opt-btn.correct", 60.36)` — timed to land right as "option A." is spoken (60.359–60.819s).
- 61.2s: **END FADE** — `apt.fadeOut(tl, "#root > div", 61.2, 1.0)` — every top-level element fades out together.
- 63.0s: `tl.set({},{},63)` — final timeline marker.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Step 2's morph → recenter → options fade-in → stagger → pulse → synchronized end-fade.
**EDUCATIONAL PURPOSE:** Close the loop — the viewer sees 20 m/s match option A.
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

Illustration label font sizes (per `_template/design.md` §7): Phase‑1 board labels ≥22px (`.board-label` 20px caption is *below* the 22px floor for illustration text — bumped to 22px in the build; `.board-value`/`.board-target` 40–44px, well above floor). Pinned recap line 22px, icon sized to 110×110 to match.

---

## PART 4: Animation Complexity Notes

- Only 2 solving steps (Given + Step 1 + Step 2) — two connector lines (`#line-g-1`, `#line-1-2`).
- Step 2 is the densest card (5 reveal lines across ~24s), then holds fully revealed for ~7s while narration confirms twice — no new reveals during the hold.
- The train's Phase-1 drift (`ease:"none"`, linear, 7.0s→15.5s) is the only continuous motion in the video; it's decorative (this is a pure unit-conversion question, no distance/time to depict).
- `apt.ambientLoop` on the pinned train icon spans 17.3s → 58.86s (~41.5s).
- All division (72⁄18, and the recall constant 5⁄18) uses `.frac` — never a bare "÷" character, per the design system's math-notation rule.
- Given card has only one line and no fresh word-synced narration to sync to (the value was already spoken in Scene 2) — uses a single line-level `.rv` reveal instead of word-level.
- Synchronized end-fade (`#root > div`, 61.2s, 1.0s) closes the video.

## PART 5: Master Timeline Overview

```
0.0    ─ Question card lowered-entrance begins (heroEnterLowered)
0.8    ─ Serial badge pops (lowered)
5.98   ─ Question card + badge rise to resting slot                [RISE_TIME]
6.4    ─ Rail sweeps in
6.8    ─ Train icon enters
7.0–15.5 ─ Train drifts gently (linear)
7.6    ─ Speed-board panel fades in (empty)
9.8    ─ "72 km/hr" lands on the board
11.88  ─ "? m/s" lands on the board
15.7   ─ PIN FLOW — question + illustration glide to pinned slots   [PIN_TIME]
16.5   ─ Pin glide lands; serial badge fully faded
16.6   ─ Given card enters                                          [GIVEN_TIME]
17.3–58.86 ─ Ambient bob loop on pinned train
19.4   ─ Given → stack morph (completes 20.2)
20.2   ─ Step 1 card enters
20.22–25.62 ─ Step 1 conversion-constant reveal → boxed 5/18 m/s
25.3   ─ Step 1 → stack morph + line-g-1 grows (completes 26.1)
26.1   ─ Step 2 card enters
26.18–50.96 ─ Step 2 context → formula → substitution → simplify → boxed 20 m/s
51.28–58.06 ─ Confirmation hold (no new reveals)
58.06  ─ Step 2 → stack morph + line-1-2 grows (completes 58.86)
58.86  ─ Illustration fades out; pinned question recenters           [RECENTER_TIME]
58.9   ─ Options grid fades in
59.2   ─ Options stagger in (A/B/C/D)
60.36  ─ Correct option (A) pulses, synced to "option A."
60.819 ─ Voiceover ends
61.2   ─ END FADE — every top-level element fades out together (1.0s) [END_FADE_TIME]
63.0   ─ Composition end
```
