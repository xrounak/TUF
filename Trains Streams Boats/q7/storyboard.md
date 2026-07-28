# Storyboard — "Train Crosses a Pole — Find Speed" (Trains, Boats and Streams — Q7)

Question: *A 150 m train crosses a pole in 10 seconds. What is its speed in km/hr?*
Options: **A) 47.52 km/h**  B) 60.48 km/h  **C) 54 km/h (correct)**  D) 66.96 km/h
Voiceover: `voiceover.wav` — duration **75.8s** (re-recorded with a new voice/accent — all timestamps below are re-derived from the current `transcript.json`)
Transcript: `transcript.json` / `transcript.txt`

This is the mirror of Q3 ("train crosses a pole → find time"): here length AND time are
given, and speed is the unknown, and the extra twist is a unit conversion at the end
(m/s → km/hr) instead of at the start. Reuses Q3's illustration rig (train + rail + pole
+ crossing slide + measuring bracket) with the given/unknown tags swapped: the pole now
carries the GIVEN time ("10 s"), and the train carries a GIVEN length ("150 m") plus the
UNKNOWN speed ("? km/hr").

---

## PART 1: Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Viewer Attention Focus | Visual Objective |
|---|-----------|-----------|----------------------|-------------------------|-------------------|
| 1 | 0.10–3.40 | "So welcome back again. Time for one more problem." | Calm open | Question card, appearing calmly | Card rises into place, nothing else competing |
| 2 | 3.86–16.72 | "Now, in this problem, we are given that the length of the train is one hundred fifty meter. The train crosses a pole in ten seconds. The question is asking us to find the speed of the train in kilometer per hour." | Restate the problem while the viewer reads it | Train + rail illustration builds; length tag, pole + time label, and an unknown speed tag all land on their own spoken word | Train enters on a rail with a "150 m" length tag; a pole rises ahead of it labeled "10 s"; a "? km/hr" tag appears above the train as the question is posed |
| 3 | 17.22–19.98 | "And before solving, let us understand one simple concept." | Signal the shift into the core concept | Illustration holds, readying for the crossing demo | No new reveal — a beat of stillness before the proof |
| 4 | 20.50–29.48 | "When a train crosses a pole, it covers only its own length because a pole has no width. So the distance covered is simply the length of the train." | Prove "crossing distance = train's own length" by motion, not just a label | The train physically slides past the pole by exactly its own rendered width | Given/unknown tags fade; train slides; a "pole width ≈ 0" callout lands; a measuring bracket then spans the exact distance travelled |
| 5 | 29.78–30.92 | "Got it? Perfect." | Confirm the concept lands | Measuring bracket + "Distance = Train's own Length" label, fully visible | Hold — no new motion, the bracket is the punctuation |
| 6 | 31.32–37.76 | "Now let us note down the values. Distance covered is one hundred fifty meter. Time taken is ten seconds." | Formalize the two knowns as a Given card | Layout pins; Given card opens with two lines, each landing on its own number | PinFlow glide clears center stage; Given card reveals "Distance = 150 m" then "Time = 10 s" |
| 7 | 38.18–50.02 | "We know the basic formula. Speed is equal to distance divided by time. Putting the values, speed is equal to one hundred fifty divided by ten. This gives us fifteen meter per second. Now be very careful here." | Apply the Speed = Distance/Time formula and get the raw answer | Step 1 card: formula → substitution → boxed 15 m/s → a caution beat | "Speed = Distance⁄Time" builds, then "Speed = 150⁄10", then "= 15 m/s" boxed; card holds through the "be careful" caution |
| 8 | 50.40–64.50 | "The question is asking for the speed in kilometer per hour, but our answer is in meter per second. So we must convert the units. We know that one meter per second is equal to three point six kilometer per hour." | Flag the unit mismatch, then state the conversion constant | Step 2 card: caution line → conversion constant | "Answer is in m/s, we need km/hr" line, then "1 m/s = 3.6 km/hr" |
| 9 | 65.06–72.72 | "So fifteen into three point six gives us fifty-four kilometer per hour. So the speed of the train is fifty-four kilometer per hour." | Apply the constant and land the final answer | Step 2 card's substitution → boxed final answer, then a confirmation hold | "15 × 3.6 = 54 km/hr" boxed; card holds while narration repeats the answer |
| 10 | 73.20–75.80 | "Hence the correct answer is option C." | Confirm the answer against the options | Options grid, C highlighting green exactly on "option C" | Step 2 joins the stack, options fade/stagger in, correct pulse lands on "C" |

---

## PART 2: Scene-by-Scene Storyboard

### SCENE 1 — Opening
**TIMESTAMP:** 0.0 – 3.86s
**VOICEOVER:** "So welcome back again. Time for one more problem."
**VISUAL OBJECTIVE:** Calm, premium open — only the question card, before any solving begins.
**SCREEN LAYOUT:** Question card vertically centered (hero-lowered position, `y:180` offset), dotted-grid background, bottom-strip, topic name "Trains, Boats and Streams" bottom-left, logo bottom-right.
**ON-SCREEN ELEMENTS:** `#q-full-card` ("A **150 m** train crosses a pole in **10 seconds**. What is its speed in **km/hr**?"), `#serial-num` badge (fixed "Q").
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.859)` — fades/scales up at 0.3s (0.7s, `back.out(1.4)`), holds lowered through the opening line, rises to resting slot at 3.859s (0.6s, `power2.inOut`) as "...one more problem." finishes. Serial badge pops at 0.8s (`back.out(2)`, mirrored lowered position), rises in tandem at 3.859s.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Card's rise doubles as the transition into Scene 2.
**EDUCATIONAL PURPOSE:** Let the viewer read the full question before narration unpacks it.
**VISUAL HIERARCHY:** Question card is the only moving element.
**ATTENTION MANAGEMENT:** Single focal point.
**MOTION NOTES:** Motion tied to speech, not decorative.
**CONTINUITY FROM PREVIOUS SCENE:** N/A — opening scene.

---

### SCENE 2 — Illustration Build (Given Length + Given Time + Unknown Speed)
**TIMESTAMP:** 3.86 – 17.22s
**VOICEOVER:** "Now, in this problem, we are given that the length of the train is one hundred fifty meter. The train crosses a pole in ten seconds. The question is asking us to find the speed of the train in kilometer per hour."
**VISUAL OBJECTIVE:** Visualize both given quantities (length, time) as concrete tags on the illustration, and visualize the unknown (speed) as a "?" tag — before any formal card exists.
**SCREEN LAYOUT:** Question card at rest (top). Illustration area centered below (`#illustration`, 1400×260 at `top:400px`): a train on a rail (left-center) and a fixed pole ahead of it (right of train's resting position).
**ON-SCREEN ELEMENTS:** `#illus-track` (dashed rail), `#illus-train` (`illustration/train.svg`), `#illus-speed-tag` ("? km/hr", above train — the unknown), `#illus-length-tag` ("150 m", below train — given), `#illus-pole` + `#illus-pole-cap` (fixed pole), `#illus-pole-label` ("10 s", near pole — given).
**ANIMATION DETAILS:**
- 4.3s: `apt.roadSweep(tl, "#illus-track", 4.3)` — track draws in left→right (0.9s, `power3.out`).
- 4.3s: train fades/scales onto the track (`back.out(1.6)`, 0.6s).
- 8.96s: `#illus-length-tag` ("150 m") lands exactly as "one hundred fifty meter" is spoken.
- 12.0s: pole rises (`scaleY` 0→1, `back.out(1.6)`, 0.4s) as the word "pole" is spoken.
- 12.34s: `#illus-pole-label` ("10 s") lands exactly as "ten" (seconds) is spoken.
- 15.659s: `#illus-speed-tag` ("? km/hr") lands exactly as "kilometer per hour" is spoken — the question itself becoming visible.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Continuous from Scene 1; flows into Scene 3 (a held beat) then Scene 4 (the crossing proof).
**EDUCATIONAL PURPOSE:** Anchor both given quantities and the unknown to concrete visuals before formalizing them as a Given card.
**VISUAL HIERARCHY:** Question card (top, static) → train+rail+pole (center, punctual reveals timed to speech).
**ATTENTION MANAGEMENT:** Three punctual reveals, each timed to the exact word that names it.
**MOTION NOTES:** No decorative drift here (unlike Q1) — every reveal is a direct data point.
**CONTINUITY FROM PREVIOUS SCENE:** Question card already at rest from Scene 1.

---

### SCENE 3 — Concept Setup (Held Beat)
**TIMESTAMP:** 17.22 – 20.50s
**VOICEOVER:** "And before solving, let us understand one simple concept."
**VISUAL OBJECTIVE:** A breath before the crossing proof — let the fully-tagged illustration sit so the viewer absorbs given length, given time, and the unknown speed together.
**SCREEN LAYOUT:** Unchanged from Scene 2.
**ON-SCREEN ELEMENTS:** Same as Scene 2, fully revealed.
**ANIMATION DETAILS:** None — a deliberate hold.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Straight cut into Scene 4's slide.
**EDUCATIONAL PURPOSE:** Prevent the crossing-proof from feeling rushed after three quick tag reveals.
**VISUAL HIERARCHY:** No competing motion.
**ATTENTION MANAGEMENT:** Stillness as a beat.
**MOTION NOTES:** n/a.
**CONTINUITY FROM PREVIOUS SCENE:** Direct hold of Scene 2's final state.

---

### SCENE 4 — The Crossing Proof
**TIMESTAMP:** 20.50 – 31.32s
**VOICEOVER:** "When a train crosses a pole, it covers only its own length because a pole has no width. So the distance covered is simply the length of the train. Got it? Perfect."
**VISUAL OBJECTIVE:** Prove "crossing distance = train's own length" by literal motion — the train slides exactly its own rendered width, ending flush against the pole.
**SCREEN LAYOUT:** Same illustration area; the train wrapper slides right by its own width (170px) while the pole stays fixed.
**ON-SCREEN ELEMENTS:** `#illus-train-wrap` (sliding), `#illus-pole-width-callout` ("pole width ≈ 0"), `#brace-length` + ticks + `#brace-length-label` ("Distance = Train's own Length") appearing after the slide.
**ANIMATION DETAILS:**
- `SLIDE_START = 20.5`: `#illus-speed-tag` and `#illus-length-tag` fade out (declutter for the motion beat); `#illus-train-wrap` begins an 8.979s `power1.inOut` slide of `x:170` (its own rendered width), ending at 29.479 exactly as "...length of the train." finishes.
- `24.899s`: `#illus-pole-width-callout` ("pole width ≈ 0") fades/rises in as "because a pole has no width" is spoken.
- `29.6s`: `#brace-length` draws in (`scaleX` 0→1, `power3.out`, 0.6s) spanning the exact distance just travelled.
- `29.9s`: brace end-ticks pop in (`back.out(2)`, 0.3s).
- `30.1s`: `#brace-length-label` ("Distance = Train's own Length") fades/rises in.
**CAMERA MOVEMENT:** None — the slide is the motion.
**TRANSITIONS:** Flows into Scene 5's held confirmation, then PinFlow.
**EDUCATIONAL PURPOSE:** The core concept of the whole question, made geometrically undeniable rather than merely stated.
**VISUAL HIERARCHY:** The slide is the only motion until the brace punctuates it.
**ATTENTION MANAGEMENT:** One continuous slide, one callout, one measuring proof.
**MOTION NOTES:** `illus-pole-label` ("10 s") is NOT faded here — the given time value stays visible and relevant throughout, unlike Q3 where the (then-unknown) time tag was part of the question.
**CONTINUITY FROM PREVIOUS SCENE:** Direct continuation of Scene 3's hold; the slide begins on "When".

---

### SCENE 5 — Pin Transition
**TIMESTAMP:** 31.32 – 33.24s
**VOICEOVER:** (holds over) "Got it? Perfect." *(then)* "Now let us note down the values." *(plays through the glide)*
**VISUAL OBJECTIVE:** Clear center stage for the solution cards, after the measuring-bracket proof has been read.
**SCREEN LAYOUT:** Question card glides to `#q-pinned` (`left:385px, top:30px, width:1275px`). Illustration glides to `#illus-pinned` (`left:280px, top:190px`, single small train icon + centered recap line).
**ON-SCREEN ELEMENTS:** Same card + illustration, transitioning; `#serial-num` fades out.
**ANIMATION DETAILS:**
- `PIN_TIME = 31.319`. `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 31.319)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 31.319)` (0.8s, `power2.inOut`, lands 32.119).
- `apt.fadeOut(tl, "#serial-num", 31.319, 0.5)`.
- `apt.ambientLoop(tl, "#illus-pinned-icon", 32.2, 72.6)` — small finite bob on the pinned train through the long solving stretch.
**CAMERA MOVEMENT:** None — the glide is the camera.
**TRANSITIONS:** PinFlow *is* the transition.
**EDUCATIONAL PURPOSE:** Signal "we've proven the concept, now we solve it."
**VISUAL HIERARCHY:** The glide is the only motion.
**ATTENTION MANAGEMENT:** Single motion cue.
**MOTION NOTES:** Card and illustration move together (same `PIN_TIME`).
**CONTINUITY FROM PREVIOUS SCENE:** The bracket proof from Scene 4 is still visible as the glide begins; both fold into the pinned recap.

---

### SCENE 6 — Given Card
**TIMESTAMP:** 33.239 – 37.38s
**VOICEOVER:** "...Now let us note down the values. Distance covered is one hundred fifty meter. Time taken is ten seconds."
**VISUAL OBJECTIVE:** Log both given quantities as clean boxed values before the formula work begins.
**SCREEN LAYOUT:** `#card-given .solution-card` centered (`left:640px, top:480px`), chip "Given".
**ON-SCREEN ELEMENTS:** Two `.math` lines: "Distance = **150 m**", "Time = **10 s**".
**ANIMATION DETAILS:**
- `GIVEN_TIME = 33.239`. `apt.cardEnter(tl, "#card-given .solution-card", 33.239)`.
- `apt.textReveal(tl, "#card-given .math")` — two line-level spans, `data-t="33.239"` and `data-t="36.419"`, each landing on its own spoken value.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Card enters the center stage PinFlow just vacated.
**EDUCATIONAL PURPOSE:** Separate "what we're told" from "what we compute."
**VISUAL HIERARCHY:** Given card is the sole focal point.
**ATTENTION MANAGEMENT:** Two clean, sequential reveals.
**MOTION NOTES:** Both values were already spoken in Scene 2 (as illustration tags), so each reveals as a single line the instant its narration timestamp is hit, rather than a word-synced sequence.
**CONTINUITY FROM PREVIOUS SCENE:** Lands at the exact center position PinFlow vacated.

---

### SCENE 7 — Given → Stack, Step 1 (Apply the Speed Formula)
**TIMESTAMP:** 37.38 – 49.599s
**VOICEOVER:** "We know the basic formula. Speed is equal to distance divided by time. Putting the values, speed is equal to one hundred fifty divided by ten. This gives us fifteen meter per second. Now be very careful here."
**VISUAL OBJECTIVE:** Archive the Given card, then build the formula → substitution → boxed answer (15 m/s), ending on a caution cue for the unit mismatch to come.
**SCREEN LAYOUT:** `#stack-given .stack-card` at `left:100px, top:140px` (circle "G"). `#card-step1 .solution-card` centered (`left:640px, top:460px`), chip "Step 1".
**ON-SCREEN ELEMENTS:** Step 1 card: context line ("We know the basic formula:"), formula ("Speed = **Distance⁄Time**", fraction via `.frac`), substitution ("Speed = **150⁄10**", `.frac`), answer ("= **15 m/s**", boxed).
**ANIMATION DETAILS:**
- 37.38s: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 37.38)` (completes 38.18).
- 38.18s: `apt.cardEnter(tl, "#card-step1 .solution-card", 38.18)`.
- `apt.textReveal(tl, "#card-step1 .math")`: context line-level @38.18; "Speed"@39.819, "="@40.34, `.frac`(Distance/Time)@40.7; "Speed"@43.919, "="@44.439, `.frac`(150/10)@44.819; "="@46.819, `.ans` "15 m/s"@47.419.
- Card holds 48.239–50.019 (no new reveal) while "Now be very careful here." plays — the caution cue for Scene 8.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** `apt.morphToStack` 0.8s box+text crossfade.
**EDUCATIONAL PURPOSE:** Compute the raw speed value, then explicitly flag that the units aren't yet what the question asks for.
**VISUAL HIERARCHY:** Step 1 card dominates; Given stack card sits quietly at left.
**ATTENTION MANAGEMENT:** Three reveal beats, then a deliberate caution hold.
**MOTION NOTES:** All division (Distance⁄Time, 150⁄10) uses `.frac` — never a bare "÷" character, per the design system's math-notation rule.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1 enters at the exact slot the Given card's morph just vacated.

---

### SCENE 8 — Step 1 → Stack, Step 2 (Convert to km/hr)
**TIMESTAMP:** 49.599 – 72.719s
**VOICEOVER:** "The question is asking for the speed in kilometer per hour, but our answer is in meter per second. So we must convert the units. We know that one meter per second is equal to three point six kilometer per hour. So fifteen into three point six gives us fifty-four kilometer per hour. So the speed of the train is fifty-four kilometer per hour."
**VISUAL OBJECTIVE:** Flag the unit mismatch, state the conversion constant, apply it, and land the boxed final answer.
**SCREEN LAYOUT:** `#stack-step1 .stack-card` at `left:100px, top:300px` (circle "1"), connector `#line-g-1` grown between G and 1. `#card-step2 .solution-card` centered (`left:600px, top:420px, width:800px`), chip "Step 2".
**ON-SCREEN ELEMENTS:** Step 2 card, 4 reveal lines: caution ("Answer is in m/s, we need km/hr" — line-level, paraphrased), conversion constant ("1 m/s = **3.6** km/hr"), substitution ("15 × **3.6**"), answer ("= **54 km/hr**", boxed).
**ANIMATION DETAILS:**
- 49.599s: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 49.599)` (completes 50.399); `apt.stackLineGrow(tl, "#line-g-1", 49.599)`.
- 50.399s: `apt.cardEnter(tl, "#card-step2 .solution-card", 50.399)`.
- `apt.textReveal(tl, "#card-step2 .math")`:
  - caution line-level @50.399
  - conversion constant: "1"@58.819, "m/s"@59.099, "="@60.34, "3.6"@61.379, "km/hr"@62.779
  - substitution: "15"@65.159, "×"@65.559, "3.6"@65.839
  - final: "="@67.199, `.ans` "54 km/hr"@67.659
- No new reveals 67.659–72.719 — card holds fully revealed while narration confirms the answer.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Step 1's morph directly precedes Step 2's entrance.
**EDUCATIONAL PURPOSE:** The densest reasoning beat — mismatch → constant → substitution → arithmetic → answer.
**VISUAL HIERARCHY:** Step 2 card is the sole focus; two quiet stack cards (G, 1) with a grown connector at left.
**ATTENTION MANAGEMENT:** Four reveal beats across ~17s, paced to the audio's own pauses, then a confirmed hold.
**MOTION NOTES:** No bare "÷" or unrendered fractions in the active card; the 3.6 constant and multiplication are plain inline numerals per the narration's own phrasing (a plain multiply, not a division, so `.frac` isn't needed here).
**CONTINUITY FROM PREVIOUS SCENE:** Step 2 opens at the same center slot Step 1 vacates via its morph.

---

### SCENE 9 — Final Answer + Options Reveal
**TIMESTAMP:** 72.719 – ~78.0s (video end)
**VOICEOVER:** "Hence the correct answer is option C."
**VISUAL OBJECTIVE:** Confirm the computed answer (54 km/hr) against the four options, landing the green highlight on C exactly as it's spoken.
**SCREEN LAYOUT:** `#stack-step2 .stack-card` at `left:100px, top:460px` (circle "2"), connector `#line-1-2` grown between 1 and 2. Pinned question recenters (`apt.recenterForOptions`, `xShift:160, yShift:180`). Options grid (2×2) fades in at `.pinned-col, top:400px`.
**ON-SCREEN ELEMENTS:** Options A (47.52 km/h), B (60.48 km/h), C (54 km/h, `class="correct"`), D (66.96 km/h). Stack column shows G / 1 / 2, all connected, all visible.
**ANIMATION DETAILS:**
- 72.719s: `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 72.719)` (completes 73.519); `apt.stackLineGrow(tl, "#line-1-2", 72.719)`.
- 72.719s: `apt.fadeOut(tl, "#illus-pinned", 72.719)`; `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 72.719)`.
- 73.519s: `apt.fadeIn(tl, "#options-reveal", 73.519)`.
- 73.819s: `apt.optionsStagger(tl, ".opt-btn", 73.819)`.
- 75.1s: `apt.correctPulse(tl, ".opt-btn.correct", 75.1)` — timed to land right as "option C." is spoken (75.099–75.799).
- 76.5s: **END FADE** — `apt.fadeOut(tl, "#root > div", 76.5, 1.0)` — every top-level element fades out together.
- 78.0s: `tl.set({},{},78.0)` — final timeline marker.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Step 2's morph → recenter → options fade-in → stagger → pulse → synchronized end-fade.
**EDUCATIONAL PURPOSE:** Close the loop — the viewer sees 54 km/hr match option C.
**VISUAL HIERARCHY:** Options grid is the focal point until end-fade; the full G/1/2 stack stays visible throughout.
**ATTENTION MANAGEMENT:** Correct-pulse is the last individual motion; end-fade is one unified closing beat.
**MOTION NOTES:** Stack cards/lines are never faded early — only in the final synchronized end-fade.
**CONTINUITY FROM PREVIOUS SCENE:** `#line-1-2` grows the instant Step 2 lands in the stack, mirroring Scene 8's `#line-g-1` beat.

---

## PART 3: Asset List Required

| Asset | Type | Notes |
|---|---|---|
| `illustration/train.svg` | SVG | Copied from `global-illustrations/train.svg`, already on brand palette (`--primary` `#6373db` fills, black outline) — used as-is, no recolor needed. |
| Rail track | CSS-only (`#illus-track`) | Dashed line, matches Q3's rig. |
| Pole | CSS-only (`#illus-pole` + `#illus-pole-cap`) | Rounded-cap bar, matches Q3's rig, fixed position (train slides past it). |
| Measuring bracket | CSS-only (`#brace-length` + ticks + label) | Appears only after the crossing slide, spans exactly the distance travelled. |
| `design-system.css`, `animations.js`, `assets/` | Copied from `_template/` | Standard per Step 5B — no changes. |

Illustration label font sizes (per `_template/design.md` §7): tag labels (`#illus-length-tag`, `#illus-speed-tag`, `#illus-pole-label`) at 26px (above the 22px floor). Pinned recap line 22px, icon sized to 70px to match Q3/Q1 pattern.

---

## PART 4: Animation Complexity Notes

- Only 2 solving steps (Given + Step 1 + Step 2) — two connector lines (`#line-g-1`, `#line-1-2`).
- The illustration reverses Q3's given/unknown mapping: here the pole carries the GIVEN time ("10 s", stays visible throughout, never faded to a "?"), while the train carries a GIVEN length ("150 m") AND the UNKNOWN speed ("? km/hr", the actual question).
- The crossing-proof slide (`SLIDE_START=20.5`, `SLIDE_DIST=170px`, `power1.inOut`, 8.979s) is identical in mechanism to Q3's — same asset, same "own-width" slide — reused because the underlying concept (crossing distance = train's own length) is the same fact, just applied in the other direction (solving for speed instead of time).
- Step 2 is the densest card (4 reveal lines across ~17s), then holds fully revealed for ~5s while narration confirms — no new reveals during the hold.
- `apt.ambientLoop` on the pinned train icon spans 32.2s → 72.6s (~40.4s).
- Step 1's division (Distance⁄Time, 150⁄10) uses `.frac` — never a bare "÷" character. Step 2's `15 × 3.6` is a plain multiplication (not a fraction), so no `.frac` needed there.
- Given card has two lines and no fresh word-synced narration to sync to (both values were already spoken in Scene 2 as illustration tags) — uses two line-level `.rv` reveals instead of word-level.
- Synchronized end-fade (`#root > div`, 76.5s, 1.0s) closes the video, ending at 78.0s (audio itself ends at 75.8s, leaving a ~2.2s confirmation/fade tail).
- The re-recorded voiceover's narration text is nearly identical to the original take, with one small wording change: "because a pole has no width" (was "...no length" in the first take) — the illustration's `#illus-pole-width-callout` copy ("pole width ≈ 0") already matched the "width" framing, so no visual text needed to change, only timestamps.

## PART 5: Master Timeline Overview

```
0.0    ─ Question card lowered-entrance begins (heroEnterLowered)
0.8    ─ Serial badge pops (lowered)
3.859  ─ Question card + badge rise to resting slot                [RISE_TIME]
4.3    ─ Rail sweeps in + train icon enters
8.96   ─ "150 m" length tag lands on train
12.0   ─ Pole rises
12.34  ─ "10 s" time tag lands on pole
15.659 ─ "? km/hr" speed tag lands on train (the unknown)
17.22–20.50 ─ Held beat before the concept proof
20.5   ─ Tags fade; train begins its own-width crossing slide       [SLIDE_START]
24.899 ─ "pole width ≈ 0" callout lands
29.479 ─ Slide ends, flush against the pole
29.6   ─ Measuring bracket draws in
29.9   ─ Bracket ticks pop
30.1   ─ "Distance = Train's own Length" label lands
31.319 ─ PIN FLOW — question + illustration glide to pinned slots   [PIN_TIME]
32.119 ─ Pin glide lands; serial badge fully faded
32.2–72.6 ─ Ambient bob loop on pinned train
33.239 ─ Given card enters                                          [GIVEN_TIME]
33.239 ─ "Distance = 150 m" reveals
36.419 ─ "Time = 10 s" reveals
37.38  ─ Given → stack morph (completes 38.18)
38.18  ─ Step 1 card enters
38.18–47.419 ─ Step 1 formula → substitution → boxed 15 m/s
48.239–50.019 ─ Caution hold ("be very careful here")
49.599 ─ Step 1 → stack morph + line-g-1 grows (completes 50.399)
50.399 ─ Step 2 card enters
50.399–67.659 ─ Step 2 caution → conversion constant → substitution → boxed 54 km/hr
67.659–72.719 ─ Confirmation hold (no new reveals)
72.719 ─ Step 2 → stack morph + line-1-2 grows (completes 73.519)
72.719 ─ Illustration fades out; pinned question recenters           [RECENTER_TIME]
73.519 ─ Options grid fades in
73.819 ─ Options stagger in (A/B/C/D)
75.1   ─ Correct option (C) pulses, synced to "option C."
75.8   ─ Voiceover ends
76.5   ─ END FADE — every top-level element fades out together (1.0s) [END_FADE_TIME]
78.0   ─ Composition end
```
