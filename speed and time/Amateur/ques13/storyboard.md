# Storyboard — Speed and Time / Question 13 (Amateur)

**Question:** A train runs at 72 km/hr when stoppages are not included, but the speed reduces to 54 km/hr when stoppages are included. For how many minutes does the train stop per hour?
**Options:** A) 10 min  B) 12 min  C) 15 min ✅ correct  D) 20 min
**Solution:** Distance lost per hour = 72 − 54 = 18 km → Time lost = 18 / 72 hr = 1/4 hr = 15 min
**Voiceover duration:** 92.14s

---

## PART 1 — Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|-----------|-----------|----------------------|------------------|-------------------|
| 1 | 0.10–2.48 | "So welcome back again. Time for one more problem." | Warm open, orient viewer | Center of frame | Hold on lowered question card, building anticipation |
| 2 | 3.02–10.06 | "Now, in this problem, we are given that a train runs at seventy-two kilometer per hour when stoppages are not included." | Introduce scenario + first given (72 km/hr, excluding stoppages) | Question text + illustration train/road | Question card rises to rest; train illustration builds on road, "72 km/hr (no stop)" label appears |
| 3 | 10.58–14.16 | "But when stoppages are included, the speed becomes fifty-four kilometer per hour." | Introduce second given (54 km/hr, including stoppages) | Illustration speed label | "54 km/hr (with stop)" label fades in beside/below the "72 km/hr" label, visually contrasting the two |
| 4 | 14.82–19.44 | "The question is asking us to find, for how many minutes the train stops per hour?" | Restate the ask | Question text | Question text holds / subtle emphasize pulse on the numeric spans (reinforcement beat) |
| 5 | 19.86–21.42 | "Now, let us understand what this means." | State solution strategy transition | Transition cue | Phase 1 fades, question pins to top, Given card enters |
| 6 | 21.90–38.92 | "When stoppages are not included, the train is actually moving at seventy-two kilometer per hour. But when stoppages are included, the effective speed becomes fifty-four kilometer per hour. So in one hour, instead of covering seventy-two kilometer, the train effectively covers only fifty-four kilometer." | Given: restate both speeds explicitly as the data to work with | Given card math | Given card shows "Speed (no stop) = 72 km/hr" then "Speed (with stop) = 54 km/hr" reveal in sequence, word-synced |
| 7 | 39.34–43.62 | "This difference happens because the train stops for some time. Got it? Perfect." | Bridge: name the cause (stoppage time) before solving | Transition cue | Hold on Given card, then Given → stack morph |
| 8 | 44.24–65.06 | "Now in one hour, at seventy-two kilometer per hour, the train could have covered seventy-two kilometer. But because of stoppages, it covers only fifty-four kilometer. So the distance not covered due to stoppages is seventy-two minus fifty-four. That gives us eighteen kilometer. Now, this eighteen kilometer is the distance lost because the train was not moving." | Step 1: compute distance lost per hour due to stoppages (72 − 54 = 18 km) | Step 1 card math | Step 1 card: "Possible distance = 72 km" → "Actual distance = 54 km" → subtraction `72 − 54` → answer `18 km` resolves |
| 9 | 65.56–79.54 | "So we need to find how much time the train would take to cover eighteen kilometers at its actual running speed. The actual running speed is seventy-two kilometer per hour. So time lost will be distance divided by speed." | Step 2: state the time-lost formula (Time = Distance/Speed) using the 18 km lost and the 72 km/hr running speed | Step 2 card math | Step 1 → stack morph; Step 2 card shows formula `Time lost = Distance ÷ Speed` |
| 10 | 80.02–86.52 | "That means time lost will be eighteen divided by seventy-two hours. After simplifying this, we get one by four hour." | Step 2: substitute + simplify to 1/4 hour | Step 2 card fraction | Fraction `18/72` fades in, simplifies to `1/4 hr` |
| 11 | 87.02–92.14 | "Now, one by four hour means fifteen minutes. Hence, the train stops for fifteen minutes per hour." | Step 2: convert 1/4 hr → 15 min, match to MCQ option | Options grid, option C | Final answer `15 min` resolves inside Step 2 card; Step 2 → stack morph; options grid reveals; option C pulses green |

---

## PART 2 — Scene-by-Scene Storyboard

### SCENE 1 — Opening Hold
- **TIMESTAMP:** 0.0–3.02s
- **VOICEOVER:** "So welcome back again. Time for one more problem."
- **VISUAL OBJECTIVE:** Establish calm open before the question drops in.
- **SCREEN LAYOUT:** Full-frame Phase 1 — dotted-grid background + bottom-strip + topic name + logo visible. Question card lowered (off-center, vertically centered while alone) per `apt.heroEnterLowered`.
- **ON-SCREEN ELEMENTS:** `#q-full-card` (lowered position, y offset 180px), `#serial-num` badge synced to same lowered y.
- **ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 2.6)` starting at 0.3s (0.7s `back.out(1.4)` entrance). Serial badge pops in parallel at 0.8s (`back.out(2)`), mirrors the same y-offset.
- **CAMERA MOVEMENT:** None (static frame; only the card itself moves).
- **TRANSITIONS:** Card + badge rise together to resting position at 2.6s (`power2.inOut`, 0.6s) — just before "Now, in this problem" begins.
- **EDUCATIONAL PURPOSE:** Orients the viewer before content begins.
- **VISUAL HIERARCHY:** Question card only element in frame — full attention.
- **ATTENTION MANAGEMENT:** No competing motion; single focal point.
- **MOTION NOTES:** `RISE_TIME = 2.6`.

### SCENE 2 — Question Reveal + Train/Road Illustration Builds
- **TIMESTAMP:** 3.02–10.06s
- **VOICEOVER:** "Now, in this problem, we are given that a train runs at seventy-two kilometer per hour when stoppages are not included."
- **VISUAL OBJECTIVE:** Ground the abstract question in a concrete flat-2D scene: a train on a road/track running at 72 km/hr with stoppages excluded.
- **SCREEN LAYOUT:** Question card resting at top-center (`#q-full-card`, 1500px wide, top:80px). Illustration area centered below at top:480px.
- **ON-SCREEN ELEMENTS:**
  - `#illustration`: a flat 2D horizontal track line (`--primary` colored) spanning ~800px width.
  - A simple flat-icon train (rounded rectangle body + 2–3 wheel circles + windows, `--primary`/`--text` accents) positioned at the track's left edge.
  - **"72 km/hr"** speed label fades in above the train, subtitled "(excluding stoppages)" in the `--topic` gray tone.
- **ANIMATION DETAILS:**
  - 3.02s: track line sweeps in via `apt.roadSweep(tl, "#road-line", 3.02, 0.9)` (scaleX 0→1, left origin).
  - 3.8s: train icon fades/scales in at the track's left edge (`apt.cardEnter`-style pop, 0.55s), then begins a slow, steady horizontal translate along the track (linear tween, held through Phase 1 until ~21s).
  - 5.68s: "72 km/hr" label fades up (`apt.fadeIn`, 0.4s) above the train, timed to "seventy-two kilometer per hour".
  - 7.94s: "(excluding stoppages)" sub-label fades in (`apt.fadeIn`, 0.4s) beneath the main label, timed to "when stoppages are not included".
- **CAMERA MOVEMENT:** None — flat static camera; only in-scene elements move.
- **TRANSITIONS:** Elements accumulate (no exits) — track, then train, then speed label, then sub-label.
- **EDUCATIONAL PURPOSE:** Anchors the first given value (72 km/hr excluding stoppages) visually before the contrasting value is introduced.
- **VISUAL HIERARCHY:** Question text > track/train > speed label > sub-label.
- **ATTENTION MANAGEMENT:** One element introduced at a time, each ~0.5–0.8s apart, to avoid overload.
- **MOTION NOTES:** Train's driving motion is continuous background motion — it should NOT resolve (finish crossing) before Phase 1 ends; it keeps drifting rightward slowly through Scenes 2–4.

### SCENE 3 — The Stoppage Speed Contrast
- **TIMESTAMP:** 10.58–14.16s
- **VOICEOVER:** "But when stoppages are included, the speed becomes fifty-four kilometer per hour."
- **VISUAL OBJECTIVE:** Introduce the constraint that drives the problem: the same train's effective speed drops to 54 km/hr once stoppages are counted.
- **SCREEN LAYOUT:** Unchanged base layout from Scene 2 — train continues its slow drift along the track.
- **ON-SCREEN ELEMENTS:** **"54 km/hr"** label fades in beside/below the "72 km/hr" label, subtitled "(including stoppages)", visually contrasting the two speeds for the same train.
- **ANIMATION DETAILS:** 10.58s: `apt.fadeIn(tl, "#stop-speed-label", 10.58)` (0.4s), timed to "fifty-four kilometer per hour". 12.4s: `apt.emphasize(tl, "#stop-speed-label", 12.4)` — subtle yo-yo pulse (0.3s) reinforcing the contrast with "72 km/hr".
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** None — pure additive reveal.
- **EDUCATIONAL PURPOSE:** Sets up the core tension of the problem (same train, lower effective speed → stoppage time exists).
- **VISUAL HIERARCHY:** "54 km/hr" label newly emphasized > "72 km/hr" (still visible) > train/track.
- **ATTENTION MANAGEMENT:** Single new label + one pulse, no other motion introduced.
- **MOTION NOTES:** No new DOM elements beyond the "54 km/hr" label — reuses track/train built in Scene 2.

### SCENE 4 — Restate the Question
- **TIMESTAMP:** 14.82–19.44s
- **VOICEOVER:** "The question is asking us to find, for how many minutes the train stops per hour?"
- **VISUAL OBJECTIVE:** Reinforce the goal (find stoppage minutes per hour) with no new visual noise.
- **SCREEN LAYOUT:** Unchanged from Scene 3 — question card + illustration continue holding/drifting.
- **ON-SCREEN ELEMENTS:** Same as Scene 3 (train continues its slow drift).
- **ANIMATION DETAILS:** `apt.emphasize(tl, ".q-text .num", 14.82)` — a subtle yo-yo scale pulse (0.3s) on the numeric/key term spans inside the question text ("72", "54") to draw the eye back to the ask.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** None — pure hold/reinforcement beat.
- **EDUCATIONAL PURPOSE:** Prevents the viewer from losing track of what's being solved for.
- **VISUAL HIERARCHY:** Question text re-emphasized as top priority.
- **ATTENTION MANAGEMENT:** Single emphasize pulse, no competing motion.
- **MOTION NOTES:** Reuses existing `.num` spans already present in the question text (no new elements).

### SCENE 5 — Strategy Statement / Phase Transition
- **TIMESTAMP:** 19.86–21.42s
- **VOICEOVER:** "Now, let us understand what this means."
- **VISUAL OBJECTIVE:** Transition from the illustrated setup into the structured step-by-step solve.
- **SCREEN LAYOUT:** Phase 1 (full question + illustration) fades out; Phase 2 begins — question pins small at top, illustration pins smaller below it, Given solution card appears center.
- **ON-SCREEN ELEMENTS:** `#q-pinned` (pinned question, top:30px), `#illus-pinned` (shrunk track+train), `#card-given .solution-card` with chip **"Given"** and math: `Speed (no stop) = 72 km/hr` / `Speed (with stop) = 54 km/hr`.
- **ANIMATION DETAILS:**
  - 19.7s: `apt.fadeOut(tl, "#phase1", 19.7)` (0.4s).
  - 20.2s: `apt.fadeIn(tl, "#q-pinned", 20.2)`, `apt.fadeIn(tl, "#illus-pinned", 20.2)` (0.4s each).
  - 20.7s: `apt.cardEnter(tl, "#card-given .solution-card", 20.7)` (0.55s, `back.out(1.4)`).
- **CAMERA MOVEMENT:** None (flat cross-fade of phases).
- **TRANSITIONS:** Phase 1 → Phase 2 cross-fade.
- **EDUCATIONAL PURPOSE:** Signals "now we start solving" — visually separates setup from computation.
- **VISUAL HIERARCHY:** Given card > pinned question > pinned illustration.
- **ATTENTION MANAGEMENT:** One clean cut; no overlapping competing entrances.
- **MOTION NOTES:** Given card holds through the remainder of this beat before Scene 6's word-synced reveal begins.

### SCENE 6 — Given: Both Speeds Stated
- **TIMESTAMP:** 21.90–38.92s
- **VOICEOVER:** "When stoppages are not included, the train is actually moving at seventy-two kilometer per hour. But when stoppages are included, the effective speed becomes fifty-four kilometer per hour. So in one hour, instead of covering seventy-two kilometer, the train effectively covers only fifty-four kilometer."
- **VISUAL OBJECTIVE:** Lock in the two given speeds as the explicit data the rest of the solve builds on.
- **SCREEN LAYOUT:** Given card centered (`#card-given .solution-card`), pinned question + illustration above.
- **ON-SCREEN ELEMENTS:** `#card-given .math` with two `.rv` lines: `Speed (no stop) = <span class="hi">72 km/hr</span>` and `Speed (with stop) = <span class="hi">54 km/hr</span>`.
- **ANIMATION DETAILS:**
  - 21.9s: `apt.textReveal(tl, "#card-given .math")` — line-level reveal, first line ("Speed (no stop) = 72 km/hr") fades in timed to "seventy-two kilometer per hour" (~21.90–27.08).
  - 27.52s: second line ("Speed (with stop) = 54 km/hr") fades in via the same `apt.textReveal` schedule, timed to "the effective speed becomes fifty-four kilometer per hour" (~27.52–32.00).
  - 32.48s: `apt.emphasize(tl, "#card-given .hi", 32.48)` — subtle pulse on both highlighted values as the "instead of 72...only 54" restatement plays (32.48–38.92).
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** None — pure progressive reveal inside the active card.
- **EDUCATIONAL PURPOSE:** Establishes both given speeds explicitly before any computation begins.
- **VISUAL HIERARCHY:** Given card > pinned question/illustration (secondary).
- **ATTENTION MANAGEMENT:** Two-line word/line-synced reveal keeps the long narration beat visually active.
- **MOTION NOTES:** `apt.textReveal` timestamps come directly from `transcript.json` word-level entries within this phrase range — do not guess.

### SCENE 7 — Bridge to Step 1
- **TIMESTAMP:** 39.34–43.62s
- **VOICEOVER:** "This difference happens because the train stops for some time. Got it? Perfect."
- **VISUAL OBJECTIVE:** Name the cause (stoppage time) as the reason for the gap, then hand off to the computation.
- **SCREEN LAYOUT:** Given card still active/centered; no new elements yet.
- **ON-SCREEN ELEMENTS:** Same as Scene 6 (Given card fully revealed).
- **ANIMATION DETAILS:** 39.34s: `apt.emphasize(tl, "#card-given .solution-card", 39.34)` — a single gentle yo-yo pulse (0.3s) on the whole card, timed to "the train stops for some time", reinforcing the causal link. No other motion until the morph.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Hold, then feeds directly into Scene 8's morph.
- **EDUCATIONAL PURPOSE:** Confirms understanding before moving to calculation (the "Got it? Perfect." beat is a natural pause the video mirrors with stillness).
- **VISUAL HIERARCHY:** Given card remains sole focus.
- **ATTENTION MANAGEMENT:** No new elements — deliberate calm beat before the step cycle starts.
- **MOTION NOTES:** Given card must be fully settled (no active reveal in progress) by 43.62s so the morph in Scene 8 starts clean.

### SCENE 8 — Step 1: Distance Lost per Hour
- **TIMESTAMP:** 44.24–65.06s
- **VOICEOVER:** "Now in one hour, at seventy-two kilometer per hour, the train could have covered seventy-two kilometer. But because of stoppages, it covers only fifty-four kilometer. So the distance not covered due to stoppages is seventy-two minus fifty-four. That gives us eighteen kilometer. Now, this eighteen kilometer is the distance lost because the train was not moving."
- **VISUAL OBJECTIVE:** Compute the distance lost to stoppages per hour: 72 − 54 = 18 km.
- **SCREEN LAYOUT:** Given card morphs into the left stack column (circle badge "G"); Step 1 solution card takes its place center.
- **ON-SCREEN ELEMENTS:** `#stack-given .stack-card` (badge "G"), `#card-step1 .solution-card` with chip **"Step 1"**, math: `Possible distance (1 hr) = 72 km` → `Actual distance (1 hr) = 54 km` → `72 − 54 = ` → `<span class="ans">18 km</span>`.
- **ANIMATION DETAILS:**
  - 44.0s: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 44.0)` (0.8s, `power2.inOut`).
  - 45.0s: `apt.cardEnter(tl, "#card-step1 .solution-card", 45.0)` (0.55s).
  - 45.38s: `apt.textReveal(tl, "#card-step1 .math")` — first line "Possible distance = 72 km" fades in, timed to "seventy-two kilometer per hour, the train could have covered seventy-two kilometer" (45.38–49.84).
  - 50.26s: second line "Actual distance = 54 km" fades in, timed to "it covers only fifty-four kilometer" (50.26–53.86).
  - 54.26s: subtraction `72 − 54` fades in (`apt.fadeIn`, 0.4s) timed to "the distance not covered due to stoppages is seventy-two minus fifty-four".
  - 58.88s: `apt.resultReveal(tl, "#step1-ans", 58.88)` — the `18 km` answer span slides/fades in exactly as "that gives us eighteen kilometer" is spoken, then holds through the restating line ("this eighteen kilometer is the distance lost...").
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Standard morph pattern (text fades, box slides+shrinks+recolors, target reveals).
- **EDUCATIONAL PURPOSE:** Establishes the distance lost per hour, the bridge fact needed to compute the stoppage time.
- **VISUAL HIERARCHY:** Step 1 active card > Given stack card (now secondary/left).
- **ATTENTION MANAGEMENT:** Answer span (`18 km`) reveal timed precisely to its spoken moment for maximum retention.
- **MOTION NOTES:** Given stack card must remain visible (no fade-out) for the rest of the video.

### SCENE 9 — Step 2: Time Lost, Simplify, Convert to Minutes
- **TIMESTAMP:** 65.56–92.14s (video holds to end)
- **VOICEOVER:** "So we need to find how much time the train would take to cover eighteen kilometers at its actual running speed. The actual running speed is seventy-two kilometer per hour. So time lost will be distance divided by speed. That means time lost will be eighteen divided by seventy-two hours. After simplifying this, we get one by four hour. Now, one by four hour means fifteen minutes. Hence, the train stops for fifteen minutes per hour."
- **VISUAL OBJECTIVE:** Apply the time-lost formula (Time = Distance/Speed) using the 18 km lost and the 72 km/hr running speed, simplify to 1/4 hr, convert to 15 minutes, and map the result to option C.
- **SCREEN LAYOUT:** Step 1 morphs into stack (badge "1"), connector line "G→1" grows; Step 2 card takes center. Later in the beat, question + illustration recenter and options grid (2×2) fades in.
- **ON-SCREEN ELEMENTS:** `#stack-step1 .stack-card` (badge "1"), `#line-g-1` connector, `#card-step2 .solution-card` chip **"Step 2"**, math: `Time lost = ` fraction(`Distance`/`Speed`) `= ` fraction(`18`/`72`) `= ` `<span class="hi">1/4 hr</span>` `= ` `<span class="ans">15 min</span>`. Later: `#options-reveal` with 4 `.opt-btn` (A: 10 min, B: 12 min, C: 15 min — `class="correct"`, D: 20 min).
- **ANIMATION DETAILS:**
  - 65.3s: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 65.3)` (0.8s).
  - 65.3s: `apt.stackLineGrow(tl, "#line-g-1", 65.3)` (0.5s, same moment the "1" circle lands).
  - 66.3s: `apt.cardEnter(tl, "#card-step2 .solution-card", 66.3)` (0.55s).
  - 66.9s: `apt.textReveal(tl, "#card-step2 .math")` — "Distance lost = 18 km, Actual speed = 72 km/hr" recap line, word-synced to "how much time...eighteen kilometers at its actual running speed. The actual running speed is seventy-two kilometer per hour." (65.56–76.36).
  - 76.82s: `apt.fadeIn(tl, "#step2-formula", 76.82)` (0.4s) — the `Distance ÷ Speed` formula fades in, timed to "time lost will be distance divided by speed".
  - 80.02s: fraction `18/72` fades in (`apt.fadeIn` on `.frac`, 0.4s), matching "time lost will be eighteen divided by seventy-two hours".
  - 84.2s: `apt.resultReveal(tl, "#step2-quarter", 84.2)` — `1/4 hr` simplification resolves, timed to "after simplifying this, we get one by four hour".
  - 87.02s: `apt.resultReveal(tl, "#step2-ans", 87.02)` — final `15 min` answer resolves, timed to "one by four hour means fifteen minutes", then holds through the closing restatement.
  - 88.5s: `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 88.5)` (0.8s).
  - 88.5s: `apt.stackLineGrow(tl, "#line-1-2", 88.5)` (0.5s).
  - 88.5s: `apt.fadeOut(tl, "#illus-pinned", 88.5)` (0.4s).
  - 88.5s: `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 88.5)` (0.5s).
  - 89.3s: `apt.fadeIn(tl, "#options-reveal", 89.3)` (0.4s).
  - 89.8s: `apt.optionsStagger(tl, ".opt-btn", 89.8)` (0.45s × 4, stagger 0.12s).
  - 91.6s: `apt.correctPulse(tl, ".opt-btn.correct", 91.6)` (0.4s yoyo), timed to land right on "fifteen minutes per hour".
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Standard morph pattern; progressive reveals within the active card (recap → formula → substitution → simplify → convert → answer); final morph + recenter + stagger reveal; no exits after this (stack column, options, pinned question all remain visible to the end at ~93s).
- **EDUCATIONAL PURPOSE:** Core computation step (the heart of the problem) followed by closing the loop between the derived numeric answer and the original MCQ options.
- **VISUAL HIERARCHY:** Step 2 active card (with fraction) → once morphed, Option C (green, pulsing) > rest of options grid > stack column (still visible, providing full derivation trail).
- **ATTENTION MANAGEMENT:** Long narration beat (~26.6s) is broken into six progressive reveals (recap → formula → substitution → simplify → convert → options) so the card never feels static.
- **MOTION NOTES:** Use `.frac` component exactly as defined in design-system.css (top/bottom spans) — no custom fraction markup. Step 2 card must stay active until 88.5s. Stack cards + connector lines are NOT faded during the options-reveal — they stay visible so the viewer can see the full G→1→2 derivation trail alongside the final answer.

---

## PART 3 — Asset List Required

| Asset | Type | Source | Notes |
|-------|------|--------|-------|
| `design-system.css` | CSS | Copied from `_template/` | No modifications |
| `animations.js` | JS | Copied from `_template/` | No modifications |
| `assets/serial-num-badge.svg` | SVG | Copied from `_template/assets/` | Used by `.serial-num` |
| `assets/logo.png` | PNG | Copied from `_template/assets/` | Bottom-right logo |
| `illustration/track.svg` (or inline CSS shapes) | New, per-question | Built for this question | Simple flat 2D horizontal track line (`--primary` stroke) |
| `illustration/train.svg` (or inline CSS shapes) | New, per-question | Built for this question | Simple flat-icon train (rounded rect body + wheel circles + windows), single accent color |
| Speed labels | HTML/CSS (no asset) | Built inline | "72 km/hr (excluding stoppages)", "54 km/hr (including stoppages)" text labels styled with existing `.num`/`--primary`/`--topic` tokens |

No new colors, fonts, or components are introduced — illustration uses only basic shapes styled with existing design tokens (`--primary`, `--text`, `--topic`).

---

## PART 4 — Animation Complexity Notes

- **2 solution steps** (Given + Step 1 + Step 2 = 3 cards total in the stack column: G, 1, 2), the standard shorter step-cycle (matches this question's 2-formula solve: subtraction then division+conversion).
- All card→stack transitions use `apt.morphToStack` at the fixed 0.8s duration — no exceptions.
- Two connector lines needed between the 3 stack circles: G→1, 1→2 — heights/positions must be measured from actual rendered `.step-circle` centers once cards are populated with real content (do not reuse another question's gap values, since card text lengths differ here).
- The illustration's train-driving motion is a simple linear drift (not modeled by any `apt.*` helper) — implement as a plain `tl.to()` translateX tween running continuously through Phase 1 (roughly 3.8s–19.7s).
- Step 2 spans an unusually long narration beat (~26.6s, including the options reveal) — broken into 6 sub-reveals (recap, formula, substitution, simplify, convert, options) using existing `apt.textReveal`/`apt.fadeIn`/`apt.resultReveal`/`apt.optionsStagger` helpers so the card doesn't sit static.
- No new/custom animation helpers are required — every beat is covered by the existing `animations.js` API.

---

## PART 5 — Master Timeline Overview

| Time (s) | Event |
|----------|-------|
| 0.3 | Question card + serial badge enter (lowered) |
| 2.6 | Card + badge rise to resting position |
| 3.02 | Track line sweeps in |
| 3.8 | Train icon enters, begins slow driving drift |
| 5.68 | "72 km/hr (excluding stoppages)" label fades in |
| 7.94 | Sub-label fades in |
| 10.58 | "54 km/hr (including stoppages)" label fades in |
| 12.4 | Stoppage-speed label emphasize pulse |
| 14.82 | Question numerics emphasize pulse |
| 19.7 | Phase 1 fades out |
| 20.2 | Pinned question + illustration fade in |
| 20.7 | Given card enters |
| 21.9 | Given line 1 text-reveal ("Speed no stop = 72 km/hr") |
| 27.52 | Given line 2 text-reveal ("Speed with stop = 54 km/hr") |
| 32.48 | Given highlighted values emphasize pulse |
| 39.34 | Given card whole-card emphasize (bridge beat) |
| 44.0 | Given → stack morph (badge "G") |
| 45.0 | Step 1 card enters |
| 45.38 | Step 1 line 1 text-reveal ("Possible distance = 72 km") |
| 50.26 | Step 1 line 2 text-reveal ("Actual distance = 54 km") |
| 54.26 | Subtraction `72 − 54` fades in |
| 58.88 | Step 1 answer (18 km) reveals |
| 65.3 | Step 1 → stack morph (badge "1") + line G→1 grows |
| 66.3 | Step 2 card enters |
| 66.9 | Step 2 recap text-reveal (18 km, 72 km/hr) |
| 76.82 | Formula `Distance ÷ Speed` fades in |
| 80.02 | Fraction 18/72 fades in |
| 84.2 | Simplification `1/4 hr` reveals |
| 87.02 | Final answer (15 min) reveals |
| 88.5 | Step 2 → stack morph (badge "2") + line 1→2 grows; illustration fades out; question recenters |
| 89.3 | Options grid fades in |
| 89.8 | Options stagger in (A/B/C/D) |
| 91.6 | Option C correct-pulse |
| 92.14 | End of voiceover — hold on final frame |

**Total video length:** ~93s (matches voiceover duration of 92.14s + small hold).
