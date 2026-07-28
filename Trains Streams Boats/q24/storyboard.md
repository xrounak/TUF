# Storyboard — "Overtaking Trains — Same Direction" (Trains, Boats and Streams — Q24)

Question: *Two trains of lengths 180 m and 120 m move in the same direction at 72 km/hr and 54 km/hr. How long will the faster train take to overtake the slower train?*
Options: **A) 52.8 s**  B) 67.2 s  C) 74.4 s  **D) 60 s (correct)**
Voiceover: `voiceover.wav` — duration **98.9s**
Transcript: `transcript.json` / `transcript.txt`

---

## PART 1: Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Viewer Attention Focus | Visual Objective |
|---|-----------|-----------|----------------------|-------------------------|-------------------|
| 1 | 0.10–3.70 | "So welcome back again, it's time to solve one more problem." | Calm open | Question card, appearing calmly | Card rises into place |
| 2 | 4.22–21.64 | "Now in this problem, we are given two trains. The length of the faster train is 180 meter. The length of the slower train is 120 meter. Their speeds are 72 km/hr and 54 km/hr." | Establish both trains' lengths + speeds | Two trains on parallel tracks, faster in front | Faster train + length label land first, then slower train + length label, then both speed readouts |
| 3 | 22.28–28.68 | "The question is asking us to find how much time the faster train takes to completely overtake the slower train." | State the actual question | Overtake arrow between the two trains | A curved "overtake" arrow animates from the faster train past the slower one |
| 4 | 29.26–35.60 | "Now the important point here is that both trains are moving in the same direction. What does that mean?" | Flag the key conceptual trap | Layout pins; Given card recap appears | PinFlow glide; Given card lands with both trains' data |
| 5 | 36.12–47.88 | "It means we will not add the speeds. We will take the difference of speeds, because one train is catching up with the other. So the relative speed is 72 minus 54, which is 18 km/hr." | Teach same-direction rule → relative speed | Step 1 card | Rule line reveals, then "72 − 54 = 18 km/hr" builds word-by-word |
| 6 | 48.30–55.94 | "Now we need the speed in meter per second. So 18 multiplied by 5 upon 18 gives us 5 meters per second. Got it? Perfect." | Convert relative speed to m/s | Step 1 card (continued) | "18 × 5⁄18 = 5 m/s" builds, boxed |
| 7 | 56.80–74.44 | "Now let us find the distance that the faster train has to cover. When one train completely overtakes another, it has to pass its own length as well as the entire length of the other train. So we add both train lengths, 180 + 120 gives us 300 meter. Now this part is done." | Teach the "sum of lengths" distance rule for overtaking | Step 2 card | Rule line reveals, then "180 + 120 = 300 m" builds |
| 8 | 74.86–89.82 | "We have the distance, and we also have the relative speed. Now we can use the formula, time equals distance divided by speed. Putting the values, time equals 300 divided by 5. After solving this, we get 60 seconds." | Apply Time = Distance / Speed | Step 3 card | Recap line → formula → substitution → boxed "60 s" |
| 9 | 89.88–98.90 | "Hence, the faster train will take 60 seconds to completely overtake the slower train. So the final answer is option D." | Confirm the answer against the options | Options grid, D highlighting green exactly on "option D" | Step 3 joins stack, options fade/stagger in, correct pulse lands on the spoken word |

---

## PART 2: Scene-by-Scene Storyboard

### SCENE 1 — Opening
**TIMESTAMP:** 0.0 – 3.7s
**VOICEOVER:** "So welcome back again, it's time to solve one more problem."
**VISUAL OBJECTIVE:** Calm, premium open — only the question card.
**SCREEN LAYOUT:** Question card vertically centered (hero-lowered, `y:180`), dotted-grid background, bottom-strip, topic name "Trains, Boats and Streams" bottom-left, logo bottom-right.
**ON-SCREEN ELEMENTS:** `#q-full-card` ("Two trains of lengths **180 m** and **120 m** move in the **same direction** at **72 km/hr** and **54 km/hr**. How long will the faster train take to overtake the slower train?"), `#serial-num` badge ("Q").
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.7)` — fades/scales up at 0.3s, holds lowered, rises at 3.7s. Serial badge pops at 0.8s, rises in tandem at 3.7s.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Card's rise doubles as transition into Scene 2.
**EDUCATIONAL PURPOSE:** Let the viewer read the full question first.
**VISUAL HIERARCHY:** Question card is the only moving element.
**ATTENTION MANAGEMENT:** Single focal point.
**MOTION NOTES:** Motion tied to speech, not decorative.
**CONTINUITY FROM PREVIOUS SCENE:** N/A — opening.

---

### SCENE 2 — Two Trains Build (Lengths + Speeds)
**TIMESTAMP:** 3.7 – 22.0s
**VOICEOVER:** "Now in this problem, we are given two trains. The length of the faster train is 180 meter. The length of the slower train is 120 meter. Their speeds are 72 km/hr and 54 km/hr."
**VISUAL OBJECTIVE:** Build both trains, one at a time, each landing its length label the instant it's spoken, then both speed readouts.
**SCREEN LAYOUT:** Question card at rest (top). Illustration area centered below (`#illustration`, 1400×300, `top:480px`): faster train icon (left, ahead) + slower train icon (right, behind), each with a length tag underneath, and a shared speed strip below both.
**ON-SCREEN ELEMENTS:** `#train-faster-icon` (`illustration/train-faster.svg`), `#len-faster` ("180 m"), `#train-slower-icon` (`illustration/train-slower.svg`), `#len-slower` ("120 m"), `#speed-faster` ("72 km/hr"), `#speed-slower` ("54 km/hr"), `#same-dir-tag` ("→ same direction →").
**ANIMATION DETAILS:**
- 7.2s: `apt.cardEnter(tl, "#train-faster-icon", 7.2)`.
- 9.26s: `apt.fadeIn(tl, "#len-faster", 9.26)` — "180 m" lands as spoken.
- 11.26s: `apt.cardEnter(tl, "#train-slower-icon", 11.26)`.
- 13.88s: `apt.fadeIn(tl, "#len-slower", 13.88)` — "120 meter" lands as spoken.
- 15.36s: `apt.fadeIn(tl, "#same-dir-tag", 15.36)` — both trains now on screen, same-direction arrow appears.
- 16.12s: `apt.fadeIn(tl, "#speed-faster", 16.12)` — "72" lands.
- 18.88s: `apt.fadeIn(tl, "#speed-slower", 18.88)` — "54" lands.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Flows into Scene 3 (question restatement) with no layout change.
**EDUCATIONAL PURPOSE:** Anchor both trains' raw data before the question is even posed.
**VISUAL HIERARCHY:** Question card (top, static) → two trains + labels, revealed strictly in narration order.
**ATTENTION MANAGEMENT:** Six punctual reveals, each timed to its own word.
**MOTION NOTES:** No decorative drift here — everything is a discrete data reveal.
**CONTINUITY FROM PREVIOUS SCENE:** Question card already at rest from Scene 1.

---

### SCENE 3 — Question Restatement (Overtake Arrow)
**TIMESTAMP:** 22.0 – 29.26s
**VOICEOVER:** "The question is asking us to find how much time the faster train takes to completely overtake the slower train."
**VISUAL OBJECTIVE:** Visualize the actual question — the faster train catching and passing the slower one.
**SCREEN LAYOUT:** Same illustration; both trains + labels stay visible.
**ON-SCREEN ELEMENTS:** `#overtake-arrow` — curved dashed arrow from behind the faster train, sweeping past the slower train's tail.
**ANIMATION DETAILS:**
- 22.28s: `apt.roadSweep(tl, "#overtake-arrow", 22.28, 1.2)` — arrow draws left→right, `power3.out`.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Leads straight into the PinFlow at 29.26s.
**EDUCATIONAL PURPOSE:** Give "overtake" a concrete visual before the math starts.
**VISUAL HIERARCHY:** Arrow is the sole new motion; trains + labels hold still.
**ATTENTION MANAGEMENT:** One motion cue.
**MOTION NOTES:** Arrow is decorative continuity, not a literal distance/time cue.
**CONTINUITY FROM PREVIOUS SCENE:** Both trains already in place from Scene 2.

---

### SCENE 4 — Pin Transition + Given Card
**TIMESTAMP:** 29.26 – 36.12s
**VOICEOVER:** "Now the important point here is that both trains are moving in the same direction. What does that mean?" *(plays through the glide and into the Given card)*
**VISUAL OBJECTIVE:** Clear center stage; recap both trains' data as a clean Given card before teaching the same-direction rule.
**SCREEN LAYOUT:** Question card glides to `#q-pinned` (`left:385px, top:30px, width:1275px`). Illustration glides to `#illus-pinned` (`left:280px, top:190px`) — both train icons shrunk, side by side, single recap line beneath.
**ON-SCREEN ELEMENTS:** `#card-given .solution-card` (chip "Given"): "Faster train = **180 m**, **72 km/hr**" / "Slower train = **120 m**, **54 km/hr**".
**ANIMATION DETAILS:**
- `PIN_TIME = 29.26`. `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 29.26)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 29.26)` (0.8s, lands 30.06).
- `apt.fadeOut(tl, "#serial-num", 29.26, 0.5)`.
- `GIVEN_TIME = 30.26`. `apt.cardEnter(tl, "#card-given .solution-card", 30.26)`.
- `apt.textReveal(tl, "#card-given .math")` — both lines are line-level (already spoken in Scene 2, pure recap): `data-t="30.26"` and `data-t="30.7"`.
- `apt.ambientLoop(tl, "#illus-pinned-icon", 31.0, 90.5)` — small finite bob on the pinned faster-train icon through the long solving stretch.
**CAMERA MOVEMENT:** None — the glide is the camera.
**TRANSITIONS:** PinFlow *is* the transition; Given card fills the vacated center stage.
**EDUCATIONAL PURPOSE:** Separate "what we're told" from "what we compute" right before the key conceptual trap is taught.
**VISUAL HIERARCHY:** Glide, then Given card, in sequence.
**ATTENTION MANAGEMENT:** One motion cue, one clean data recap.
**MOTION NOTES:** No fresh word-synced narration for Given (data was already spoken in Scene 2) — both lines reveal as line-level spans.
**CONTINUITY FROM PREVIOUS SCENE:** Pinned illustration keeps both trains, mirroring Scene 2/3's layout at smaller scale.

---

### SCENE 5 — Given → Stack, Step 1 (Relative Speed)
**TIMESTAMP:** 36.12 – 56.5s
**VOICEOVER:** "It means we will not add the speeds. We will take the difference of speeds, because one train is catching up with the other. So the relative speed is 72 minus 54, which is 18 kilometer per hour. Now we need the speed in meter per second. So 18 multiplied by 5 upon 18 gives us 5 meters per second. Got it? Perfect."
**VISUAL OBJECTIVE:** Teach the same-direction rule (subtract, don't add) and compute the relative speed in both km/hr and m/s.
**SCREEN LAYOUT:** `#stack-given .stack-card` at `left:100px, top:140px` (circle "G"). `#card-step1 .solution-card` centered (`left:600px, top:440px, width:760px`), chip "Step 1".
**ON-SCREEN ELEMENTS:** Step 1 card: rule line ("Same direction → subtract speeds"), equation "72 − 54 = **18 km/hr**", conversion "18 × **5⁄18** = **5 m/s**" (fraction via `.frac`, never a bare "÷"/"/").
**ANIMATION DETAILS:**
- 29.26s: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 29.26)` — *(re-triggered from Scene 4's own hold; actual morph fires once, at 35.6, see script)*. **Actual morph time used in the build: 35.6s** (right after "What does that mean?" ends), completing 36.4.
- 36.5s: `apt.cardEnter(tl, "#card-step1 .solution-card", 36.5)`.
- `apt.textReveal(tl, "#card-step1 .math")`:
  - rule line-level @36.12
  - "72"@44.099, "−"@44.659, "54"@45.039, "="@46.02, "18 km/hr"@46.34
  - "18"@50.86, "×"@51.219, `.frac`(5/18)@51.919, "="@53.18, "5 m/s"@53.559
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** `apt.morphToStack` 0.8s box+text crossfade from Given.
**EDUCATIONAL PURPOSE:** The single most important conceptual beat — same direction ⇒ subtract speeds.
**VISUAL HIERARCHY:** Step 1 card dominates; Given stack card sits quietly at left.
**ATTENTION MANAGEMENT:** Rule stated first, then two clean equation reveals.
**MOTION NOTES:** All division uses `.frac`, never a bare "÷"/"/" character.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1 enters at the exact slot the Given card's morph just vacated.

---

### SCENE 6 — Step 1 → Stack, Step 2 (Distance to Cover)
**TIMESTAMP:** 56.5 – 75.2s
**VOICEOVER:** "Now let us find the distance that the faster train has to cover. When one train completely overtakes another train, it has to pass its own length as well as the entire length of the other train. So we add both train lengths, 180 plus 120 gives us 300 meter. Now this part is done."
**VISUAL OBJECTIVE:** Teach the "own length + other train's length" overtaking-distance rule and compute it.
**SCREEN LAYOUT:** `#stack-step1 .stack-card` at `left:100px, top:290px` (circle "1"), connector `#line-g-1` grown between G and 1. `#card-step2 .solution-card` centered (`left:620px, top:460px, width:700px`), chip "Step 2".
**ON-SCREEN ELEMENTS:** Step 2 card: rule line ("Distance = own length + other train's length"), equation "180 + 120 = **300 m**".
**ANIMATION DETAILS:**
- 56.5s: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 56.5)` (completes 57.3); `apt.stackLineGrow(tl, "#line-g-1", 56.5)`.
- 57.4s: `apt.cardEnter(tl, "#card-step2 .solution-card", 57.4)`.
- `apt.textReveal(tl, "#card-step2 .math")`:
  - rule line-level @56.80
  - "180"@69.659, "+"@70.5, "120"@70.779, "="@71.639, "300 m"@72.08
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Step 1's morph directly precedes Step 2's entrance.
**EDUCATIONAL PURPOSE:** Second key conceptual rule — sum of lengths for a full overtake.
**VISUAL HIERARCHY:** Step 2 card is the sole focus; G/1 stack cards quiet at left.
**ATTENTION MANAGEMENT:** Rule stated, long pause while narration explains, then quick equation reveal.
**MOTION NOTES:** n/a.
**CONTINUITY FROM PREVIOUS SCENE:** Step 2 opens at the same center slot Step 1 vacates.

---

### SCENE 7 — Step 2 → Stack, Step 3 (Time = Distance / Speed) + Options
**TIMESTAMP:** 75.2 – ~101s (video end)
**VOICEOVER:** "We have the distance, and we also have the relative speed. Now we can use the formula, time equals distance divided by speed. Putting the values, time equals 300 divided by 5. After solving this, we get 60 seconds. Hence, the faster train will take 60 seconds to completely overtake the slower train. So the final answer is option D."
**VISUAL OBJECTIVE:** Apply Time = Distance / Speed, substitute, land on the boxed 60 s answer, then confirm it against the options.
**SCREEN LAYOUT:** `#stack-step2 .stack-card` at `left:100px, top:460px` (circle "2"), connector `#line-1-2` grown. `#card-step3 .solution-card` centered (`left:600px, top:440px, width:760px`), chip "Step 3". Then pinned question recenters, stack column shows G/1/2/3, options grid (2×2) fades in at `.pinned-col, top:400px`.
**ON-SCREEN ELEMENTS:** Step 3 card: recap line ("Distance = 300 m, Relative Speed = 5 m/s"), formula "Time = Distance ÷ Speed" (via `.frac`), substitution "Time = **300 / 5**" (via `.frac`), boxed "= **60 s**". Options A (52.8 s), B (67.2 s), C (74.4 s), D (60 s, `class="correct"`).
**ANIMATION DETAILS:**
- 75.2s: `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 75.2)` (completes 76.0); `apt.stackLineGrow(tl, "#line-1-2", 75.2)`.
- 76.1s: `apt.cardEnter(tl, "#card-step3 .solution-card", 76.1)`.
- `apt.textReveal(tl, "#card-step3 .math")`:
  - recap line-level @74.86
  - formula: "Time"@80.259, "="@80.519, `.frac`(Distance/Speed)@81.279
  - substitution: "Time"@83.419(context "Putting the values"), "="@84.519, `.frac`(300/5)@84.9
  - answer: "="@87.0, `.ans` "60 s"@88.299
- 90.3s: `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 90.3)` (completes 91.1); `apt.stackLineGrow(tl, "#line-2-3", 90.3)`.
- 91.2s: `apt.fadeOut(tl, "#illus-pinned", 91.2)`; `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 91.2)`.
- 91.5s: `apt.fadeIn(tl, "#options-reveal", 91.5)`.
- 92.0s: `apt.optionsStagger(tl, ".opt-btn", 92.0)`.
- 98.14s: `apt.correctPulse(tl, ".opt-btn.correct", 98.14)` — timed to land right as "option D." is spoken (98.139–98.9s).
- 99.4s: **END FADE** — `apt.fadeOut(tl, "#root > div", 99.4, 1.2)` — every top-level element fades out together.
- 101.0s: `tl.set({},{},101)` — final timeline marker.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Step 3's morph → recenter → options fade-in → stagger → pulse → synchronized end-fade.
**EDUCATIONAL PURPOSE:** Close the loop — the viewer sees 60 s match option D.
**VISUAL HIERARCHY:** Step 3 card, then options grid, as sequential focal points; full G/1/2/3 stack stays visible throughout.
**ATTENTION MANAGEMENT:** Dense final card (long hold on the boxed answer while narration confirms twice), then a single confirmation beat on the options.
**MOTION NOTES:** All division uses `.frac`, never a bare "÷"/"/" character. Stack cards/lines never fade early — only in the final synchronized end-fade.
**CONTINUITY FROM PREVIOUS SCENE:** `#line-1-2` and `#line-2-3` grow the instant each step lands in the stack, mirroring Scenes 5/6's pattern.

---

## PART 3: Asset List Required

| Asset | Type | Notes |
|---|---|---|
| `illustration/train-faster.svg` | SVG | From `global-illustrations/train-faster.svg`, on-brand as-is — the leading train. |
| `illustration/train-slower.svg` | SVG | From `global-illustrations/train-slower.svg`, on-brand as-is — the trailing train. |
| Overtake arrow | CSS-only (`#overtake-arrow`) | Dashed curved SVG path or CSS border-arc, drawn via `apt.roadSweep` (scaleX). |
| `design-system.css`, `animations.js`, `assets/` | Copied from `_template/` | Standard per Step 5B — no changes. |

Illustration label font sizes (per `_template/design.md` §7): Phase-1 length/speed labels 24px (≥22px floor). Pinned recap line 22px, icons sized to 100×100 each (two-icon layout, so smaller than a single-icon recap), matching the label size.

---

## PART 4: Animation Complexity Notes

- 4 solving cards total (Given + 3 steps) — three connector lines (`#line-g-1`, `#line-1-2`, `#line-2-3`).
- Two distinct conceptual rules taught (subtract speeds for same direction; sum lengths for overtaking distance) — each gets its own rule line-level reveal before the equation.
- Step 3 is the densest card (recap + formula + substitution + answer across ~13.5s of active reveal), then holds fully revealed for ~13s while narration confirms twice — no new reveals during the hold.
- `apt.ambientLoop` on the pinned faster-train icon spans 31.0s → 90.5s (~59.5s) — the longest ambient window in this series, matching the longer solve.
- All division (300/5, and the conversion 5/18) uses `.frac` — never a bare "÷" or "/" character, per the design system's math-notation rule.
- Given card has two lines and no fresh word-synced narration to sync to (both values already spoken in Scene 2) — uses two line-level `.rv` reveals instead of word-level.
- Synchronized end-fade (`#root > div`, 99.4s, 1.2s) closes the video.

## PART 5: Master Timeline Overview

```
0.0    ─ Question card lowered-entrance begins (heroEnterLowered)
0.8    ─ Serial badge pops (lowered)
3.7    ─ Question card + badge rise to resting slot                [RISE_TIME]
7.2    ─ Faster train icon enters
9.26   ─ "180 m" label lands
11.26  ─ Slower train icon enters
13.88  ─ "120 m" label lands
15.36  ─ Same-direction tag appears
16.12  ─ "72 km/hr" lands
18.88  ─ "54 km/hr" lands
22.28  ─ Overtake arrow sweeps in
29.26  ─ PIN FLOW — question + illustration glide to pinned slots   [PIN_TIME]
30.06  ─ Pin glide lands; serial badge fully faded
30.26  ─ Given card enters                                          [GIVEN_TIME]
31.0–90.5 ─ Ambient bob loop on pinned faster train
35.6   ─ Given → stack morph (completes 36.4)
36.5   ─ Step 1 card enters
36.12–55.94 ─ Step 1: rule → 72−54=18 km/hr → 18×5/18=5 m/s
56.5   ─ Step 1 → stack morph + line-g-1 grows (completes 57.3)
57.4   ─ Step 2 card enters
56.80–74.44 ─ Step 2: rule → 180+120=300 m
75.2   ─ Step 2 → stack morph + line-1-2 grows (completes 76.0)
76.1   ─ Step 3 card enters
74.86–89.82 ─ Step 3: recap → formula → substitution → boxed 60 s
90.3   ─ Step 3 → stack morph + line-2-3 grows (completes 91.1)
91.2   ─ Illustration fades out; pinned question recenters           [RECENTER_TIME]
91.5   ─ Options grid fades in
92.0   ─ Options stagger in (A/B/C/D)
98.14  ─ Correct option (D) pulses, synced to "option D."
98.9   ─ Voiceover ends
99.4   ─ END FADE — every top-level element fades out together (1.2s) [END_FADE_TIME]
101.0  ─ Composition end
```
