# Storyboard — Speed and Time / Question 12 (Amateur)

**Question:** A bus travels at 80 km/hr for 6 hours. The same distance must be covered in only 4.5 hours. What is the new required speed?
**Options:** A) 110 kmph  B) 100.5 kmph  C) 106.67 kmph ✅ correct  D) 115.5 kmph
**Solution:** Distance = 80 × 6 = 480 km → New speed = 480 / 4.5 = 106.67 km/hr
**Voiceover duration:** 49.24s

---

## PART 1 — Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|-----------|-----------|----------------------|------------------|-------------------|
| 1 | 0.12–3.28 | "So welcome back again. Time for one more problem." | Warm open, orient viewer | Center of frame | Hold on lowered question card, building anticipation |
| 2 | 3.84–8.80 | "Now in this problem, a bus travels at eighty kilometer per hour for six hours." | Introduce scenario + first two givens (80 km/hr, 6 hr) | Question text + illustration bus/road | Question card rises to rest; bus illustration begins moving on road, "80 km/hr" and "6 hr" labels appear |
| 3 | 9.24–12.16 | "The same distance must be covered in only four point five hours." | Introduce the constraint (new time = 4.5 hr) | Illustration time label | "4.5 hr" label appears next to a second, faster bus/marker on the same road |
| 4 | 12.64–15.66 | "What do we need to find? We need to find the new speed of the bus." | Restate the ask | Question text | Question text holds / subtle emphasize pulse on "new speed" (reinforcement beat) |
| 5 | 16.26–18.44 | "First, let us find the distance covered by the bus." | State solution strategy (find distance first) | Transition cue | Phase 1 fades, question pins to top, Given card enters |
| 6 | 19.10–24.42 | "Distance is equal to speed multiplied by time. So distance is equal to eighty multiplied by six," | Step 1: state + apply distance formula | Step 1 card math | Given → stack morph; Step 1 card shows formula then substitution `80 × 6` |
| 7 | 25.00–27.08 | "which gives us four hundred eighty kilometer." | Step 1: resolve distance | Step 1 card answer | Answer `480 km` resolves inside Step 1 card |
| 8 | 27.80–30.88 | "Now that we know the distance, we can find the required speed." | Bridge to Step 2 | Transition cue | Hold on Step 1 (next step coming) |
| 9 | 31.46–33.52 | "Speed is equal to distance divided by time." | Step 2: state speed formula | Step 2 card math | Step 1 → stack morph; Step 2 card shows formula |
| 10 | 34.06–37.88 | "So the required speed is four hundred eighty divided by four point five." | Step 2: substitute values | Step 2 card fraction | Fraction `480/4.5` fades in |
| 11 | 38.48–42.98 | "After solving this, we get one hundred six point six seven kilometer per hour." | Step 2: resolve final answer | Step 2 card answer | Answer `106.67 km/hr` resolves inside Step 2 card |
| 12 | 43.42–49.24 | "Hence, the final answer is one hundred six point six seven kilometer per hour, which is option C." | Match answer to MCQ option | Options grid, option C | Step 2 → stack morph; options grid reveals; option C pulses green |

---

## PART 2 — Scene-by-Scene Storyboard

### SCENE 1 — Opening Hold
- **TIMESTAMP:** 0.0–3.84s
- **VOICEOVER:** "So welcome back again. Time for one more problem."
- **VISUAL OBJECTIVE:** Establish calm open before the question drops in.
- **SCREEN LAYOUT:** Full-frame Phase 1 — dotted-grid background + bottom-strip + topic name + logo visible. Question card lowered (off-center, vertically centered while alone) per `apt.heroEnterLowered`.
- **ON-SCREEN ELEMENTS:** `#q-full-card` (lowered position, y offset 180px), `#serial-num` badge synced to same lowered y.
- **ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.4)` starting at 0.3s (0.7s `back.out(1.4)` entrance). Serial badge pops in parallel at 0.8s (`back.out(2)`), mirrors the same y-offset.
- **CAMERA MOVEMENT:** None (static frame; only the card itself moves).
- **TRANSITIONS:** Card + badge rise together to resting position at 3.4s (`power2.inOut`, 0.6s) — exactly as "time for one more problem" ends.
- **EDUCATIONAL PURPOSE:** Orients the viewer before content begins.
- **VISUAL HIERARCHY:** Question card only element in frame — full attention.
- **ATTENTION MANAGEMENT:** No competing motion; single focal point.
- **MOTION NOTES:** `RISE_TIME = 3.4`.

### SCENE 2 — Question Reveal + Bus/Road Illustration Builds
- **TIMESTAMP:** 3.84–8.80s
- **VOICEOVER:** "Now in this problem, a bus travels at eighty kilometer per hour for six hours."
- **VISUAL OBJECTIVE:** Ground the abstract question in a concrete flat-2D scene: a bus travelling on a road at 80 km/hr for 6 hours.
- **SCREEN LAYOUT:** Question card resting at top-center (`#q-full-card`, 1500px wide, top:80px). Illustration area centered below at top:480px.
- **ON-SCREEN ELEMENTS:**
  - `#illustration`: a flat 2D horizontal road line (`--primary` colored) spanning ~800px width.
  - A simple flat-icon bus (rounded rectangle body + 2 wheel circles + windows, `--primary`/`--text` accents) positioned at the road's left edge.
  - **"80 km/hr"** speed label fades in above the bus.
  - **"6 hr"** time label fades in beneath the road once the duration is spoken.
- **ANIMATION DETAILS:**
  - 3.84s: road line sweeps in via `apt.roadSweep(tl, "#road-line", 3.84, 0.9)` (scaleX 0→1, left origin).
  - 4.6s: bus icon fades/scales in at the road's left edge (`apt.cardEnter`-style pop, 0.55s), then begins a slow, steady horizontal translate along the road (linear tween, duration matched to hold until Phase 1 ends ~16s).
  - 5.06s: "80 km/hr" label fades up (`apt.fadeIn`, 0.4s) above the bus, timed to "eighty kilometer per hour".
  - 8.06s: "6 hr" label fades in (`apt.fadeIn`, 0.4s) beneath the road, timed to "for six hours".
- **CAMERA MOVEMENT:** None — flat static camera; only in-scene elements move.
- **TRANSITIONS:** Elements accumulate (no exits) — road, then bus, then speed label, then time label.
- **EDUCATIONAL PURPOSE:** Anchors the first two given values (80 km/hr, 6 hr) visually before the constraint is introduced.
- **VISUAL HIERARCHY:** Question text > road/bus > speed label > time label.
- **ATTENTION MANAGEMENT:** One element introduced at a time, each ~0.4–0.8s apart, to avoid overload.
- **MOTION NOTES:** Bus's driving motion is continuous background motion — it should NOT resolve (finish crossing) before Phase 1 ends; it keeps drifting rightward slowly through Scenes 2–4.

### SCENE 3 — The New Time Constraint
- **TIMESTAMP:** 9.24–12.16s
- **VOICEOVER:** "The same distance must be covered in only four point five hours."
- **VISUAL OBJECTIVE:** Introduce the constraint that drives the problem: the same distance, but in less time (4.5 hr).
- **SCREEN LAYOUT:** Unchanged base layout from Scene 2 — bus continues its slow drift along the road.
- **ON-SCREEN ELEMENTS:** **"4.5 hr"** label fades in near the "6 hr" label (positioned slightly right/below it), visually contrasting the two durations for the same road/distance.
- **ANIMATION DETAILS:** 9.24s: `apt.fadeIn(tl, "#new-time-label", 9.24)` (0.4s), timed to "four point five hours". 11.0s: `apt.emphasize(tl, "#new-time-label", 11.0)` — subtle yo-yo pulse (0.3s) reinforcing the contrast with "6 hr".
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** None — pure additive reveal.
- **EDUCATIONAL PURPOSE:** Sets up the core tension of the problem (same distance, less time → need new speed).
- **VISUAL HIERARCHY:** "4.5 hr" label newly emphasized > "6 hr"/"80 km/hr" (still visible) > bus/road.
- **ATTENTION MANAGEMENT:** Single new label + one pulse, no other motion introduced.
- **MOTION NOTES:** No new DOM elements beyond the "4.5 hr" label — reuses road/bus built in Scene 2.

### SCENE 4 — Restate the Question
- **TIMESTAMP:** 12.64–15.66s
- **VOICEOVER:** "What do we need to find? We need to find the new speed of the bus."
- **VISUAL OBJECTIVE:** Reinforce the goal (find the new speed) with no new visual noise.
- **SCREEN LAYOUT:** Unchanged from Scene 3 — question card + illustration continue holding/drifting.
- **ON-SCREEN ELEMENTS:** Same as Scene 3 (bus continues its slow drift).
- **ANIMATION DETAILS:** `apt.emphasize(tl, ".q-text .num", 12.64)` — a subtle yo-yo scale pulse (0.3s) on the numeric/key term spans inside the question text ("80", "6", "4.5") to draw the eye back to the ask.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** None — pure hold/reinforcement beat.
- **EDUCATIONAL PURPOSE:** Prevents the viewer from losing track of what's being solved for.
- **VISUAL HIERARCHY:** Question text re-emphasized as top priority.
- **ATTENTION MANAGEMENT:** Single emphasize pulse, no competing motion.
- **MOTION NOTES:** Reuses existing `.num` spans already present in the question text (no new elements).

### SCENE 5 — Strategy Statement / Phase Transition
- **TIMESTAMP:** 16.26–18.44s
- **VOICEOVER:** "First, let us find the distance covered by the bus."
- **VISUAL OBJECTIVE:** Transition from the illustrated setup into the structured step-by-step solve.
- **SCREEN LAYOUT:** Phase 1 (full question + illustration) fades out; Phase 2 begins — question pins small at top, illustration pins smaller below it, Given solution card appears center.
- **ON-SCREEN ELEMENTS:** `#q-pinned` (pinned question, top:30px), `#illus-pinned` (shrunk road+bus), `#card-given .solution-card` with chip **"Given"** and math: `Speed = 80 km/hr` / `Time = 6 hr` / `New time = 4.5 hr`.
- **ANIMATION DETAILS:**
  - 16.1s: `apt.fadeOut(tl, "#phase1", 16.1)` (0.4s).
  - 16.6s: `apt.fadeIn(tl, "#q-pinned", 16.6)`, `apt.fadeIn(tl, "#illus-pinned", 16.6)` (0.4s each).
  - 17.1s: `apt.cardEnter(tl, "#card-given .solution-card", 17.1)` (0.55s, `back.out(1.4)`).
- **CAMERA MOVEMENT:** None (flat cross-fade of phases).
- **TRANSITIONS:** Phase 1 → Phase 2 cross-fade.
- **EDUCATIONAL PURPOSE:** Signals "now we start solving" — visually separates setup from computation.
- **VISUAL HIERARCHY:** Given card > pinned question > pinned illustration.
- **ATTENTION MANAGEMENT:** One clean cut; no overlapping competing entrances.
- **MOTION NOTES:** Given card holds through the remainder of this beat (18.44s) before Step 1 begins.

### SCENE 6 — Step 1: Find the Distance
- **TIMESTAMP:** 19.10–27.08s
- **VOICEOVER:** "Distance is equal to speed multiplied by time. So distance is equal to eighty multiplied by six, which gives us four hundred eighty kilometer."
- **VISUAL OBJECTIVE:** Apply the distance formula (Distance = Speed × Time) with the original values, resolving to 480 km.
- **SCREEN LAYOUT:** Given card morphs into the left stack column (circle badge "G"); Step 1 solution card takes its place center.
- **ON-SCREEN ELEMENTS:** `#stack-given .stack-card` (badge "G"), `#card-step1 .solution-card` with chip **"Step 1"**, math: `Distance = Speed × Time = ` → `80 × 6 = ` → `<span class="ans">480 km</span>`.
- **ANIMATION DETAILS:**
  - 19.0s: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 19.0)` (0.8s, `power2.inOut`).
  - 20.0s: `apt.cardEnter(tl, "#card-step1 .solution-card", 20.0)` (0.55s).
  - 21.78s: `apt.fadeIn(tl, "#step1-substitution", 21.78)` (0.4s) — the `80 × 6` substitution fades in, timed to "eighty multiplied by six".
  - 25.0s: `apt.resultReveal(tl, "#step1-ans", 25.0)` — the `480 km` answer span slides/fades in exactly as "four hundred eighty kilometer" is spoken.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Standard morph pattern (text fades, box slides+shrinks+recolors, target reveals).
- **EDUCATIONAL PURPOSE:** Establishes the total distance, the bridge fact needed to compute the new speed.
- **VISUAL HIERARCHY:** Step 1 active card > Given stack card (now secondary/left).
- **ATTENTION MANAGEMENT:** Answer span (`480 km`) reveal is timed precisely to its spoken moment for maximum retention.
- **MOTION NOTES:** Given stack card must remain visible (no fade-out) for rest of video.

### SCENE 7 — Step 2: Find the New Speed
- **TIMESTAMP:** 27.80–49.24s (video holds to end)
- **VOICEOVER:** "Now that we know the distance, we can find the required speed. Speed is equal to distance divided by time. So the required speed is four hundred eighty divided by four point five. After solving this, we get one hundred six point six seven kilometer per hour. Hence, the final answer is one hundred six point six seven kilometer per hour, which is option C."
- **VISUAL OBJECTIVE:** Apply the speed formula (Speed = Distance/Time) using the new time (4.5 hr) to reach the final answer, 106.67 km/hr, and map it to option C.
- **SCREEN LAYOUT:** Step 1 morphs into stack (badge "1"), connector line "G→1" grows; Step 2 card takes center. Later in the beat, question + illustration recenter and options grid (2×2) fades in.
- **ON-SCREEN ELEMENTS:** `#stack-step1 .stack-card` (badge "1"), `#line-g-1` connector, `#card-step2 .solution-card` chip **"Step 2"**, math: `Speed = ` fraction(`Distance`/`Time`) `= ` fraction(`480`/`4.5`) `= ` `<span class="ans">106.67 km/hr</span>`. Later: `#options-reveal` with 4 `.opt-btn` (A: 110 kmph, B: 100.5 kmph, C: 106.67 kmph — `class="correct"`, D: 115.5 kmph).
- **ANIMATION DETAILS:**
  - 27.7s: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 27.7)` (0.8s).
  - 27.7s: `apt.stackLineGrow(tl, "#line-g-1", 27.7)` (0.5s, same moment the "1" circle lands).
  - 28.7s: `apt.cardEnter(tl, "#card-step2 .solution-card", 28.7)` (0.55s).
  - 31.46s: `apt.fadeIn(tl, "#step2-formula", 31.46)` (0.4s) — the `Distance/Time` formula fades in, timed to "speed is equal to distance divided by time".
  - 34.06s: fraction `480/4.5` fades in as the formula is substituted (`apt.fadeIn` on `.frac`, 0.4s), matching "the required speed is four hundred eighty divided by four point five".
  - 39.70s: `apt.resultReveal(tl, "#step2-ans", 39.70)` — `106.67 km/hr` answer resolves as "we get one hundred six point six seven kilometer per hour" is spoken, then holds through the repeated final-answer line.
  - 43.42s: `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 43.42)` (0.8s).
  - 43.42s: `apt.stackLineGrow(tl, "#line-1-2", 43.42)` (0.5s).
  - 43.42s: `apt.fadeOut(tl, "#illus-pinned", 43.42)` (0.4s).
  - 43.42s: `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 43.42)` (0.5s).
  - 44.22s: `apt.fadeIn(tl, "#options-reveal", 44.22)` (0.4s).
  - 44.72s: `apt.optionsStagger(tl, ".opt-btn", 44.72)` (0.45s × 4, stagger 0.12s).
  - 46.6s: `apt.correctPulse(tl, ".opt-btn.correct", 46.6)` (0.4s yoyo), timed to land right on the spoken "option C".
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Standard morph pattern; fraction reveals progressively within the active card (formula → substitution → answer); final morph + recenter + stagger reveal; no exits after this (all elements — stack column, options, pinned question — remain visible to the end at 49.24s).
- **EDUCATIONAL PURPOSE:** Core computation step (the heart of the problem) followed by closing the loop between the derived numeric answer and the original MCQ options.
- **VISUAL HIERARCHY:** Step 2 active card (with fraction) → once morphed, Option C (green, pulsing) > rest of options grid > stack column (still visible, providing full derivation trail).
- **ATTENTION MANAGEMENT:** Long narration beat (~21.4s) is broken into progressive reveals (formula → substitution → answer → options) so the card never feels static.
- **MOTION NOTES:** Use `.frac` component exactly as defined in design-system.css (top/bottom spans) — no custom fraction markup. Step 2 card must stay active until 43.42s — narration repeats "106.67 km/hr" twice; never exit before this repetition completes. Stack cards + connector lines are NOT faded during the options-reveal — they stay visible so the viewer can see the full G→1→2 derivation trail alongside the final answer.

---

## PART 3 — Asset List Required

| Asset | Type | Source | Notes |
|-------|------|--------|-------|
| `design-system.css` | CSS | Copied from `_template/` | No modifications |
| `animations.js` | JS | Copied from `_template/` | No modifications |
| `assets/serial-num-badge.svg` | SVG | Copied from `_template/assets/` | Used by `.serial-num` |
| `assets/logo.png` | PNG | Copied from `_template/assets/` | Bottom-right logo |
| `illustration/road.svg` (or inline CSS shapes) | New, per-question | Built for this question | Simple flat 2D horizontal road line (`--primary` stroke) |
| `illustration/bus.svg` (or inline CSS shapes) | New, per-question | Built for this question | Simple flat-icon bus (rounded rect body + 2 wheel circles + windows), single accent color |
| Speed/time labels | HTML/CSS (no asset) | Built inline | "80 km/hr", "6 hr", "4.5 hr" text labels styled with existing `.num`/`--primary` tokens |

No new colors, fonts, or components are introduced — illustration uses only basic shapes styled with existing design tokens (`--primary`, `--text`).

---

## PART 4 — Animation Complexity Notes

- **2 solution steps** (Given + Step 1 + Step 2 = 3 cards total in the stack column: G, 1, 2), a shorter step-cycle than the standard 3-step pattern (matches this question's simpler 2-formula solve).
- All card→stack transitions use `apt.morphToStack` at the fixed 0.8s duration — no exceptions.
- Two connector lines needed between the 3 stack circles: G→1, 1→2 — heights/positions must be measured from actual rendered `.step-circle` centers once cards are populated with real content (do not reuse another question's gap values, since card text lengths differ here).
- The illustration's bus-driving motion is a simple linear drift (not modeled by any `apt.*` helper) — implement as a plain `tl.to()` translateX tween running continuously through Phase 1 (roughly 4.6s–16.1s).
- Step 2 spans an unusually long narration beat (~21.4s, including the options reveal) — broken into 4 sub-reveals (formula, substitution, final answer, options) using existing `apt.fadeIn`/`apt.resultReveal`/`apt.optionsStagger` helpers so the card doesn't sit static.
- No new/custom animation helpers are required — every beat is covered by the existing `animations.js` API.

---

## PART 5 — Master Timeline Overview

| Time (s) | Event |
|----------|-------|
| 0.3 | Question card + serial badge enter (lowered) |
| 3.4 | Card + badge rise to resting position |
| 3.84 | Road line sweeps in |
| 4.6 | Bus icon enters, begins slow driving drift |
| 5.06 | "80 km/hr" label fades in |
| 8.06 | "6 hr" label fades in |
| 9.24 | "4.5 hr" label fades in |
| 11.0 | "4.5 hr" label emphasize pulse |
| 12.64 | Question numerics emphasize pulse |
| 16.1 | Phase 1 fades out |
| 16.6 | Pinned question + illustration fade in |
| 17.1 | Given card enters |
| 19.0 | Given → stack morph (badge "G") |
| 20.0 | Step 1 card enters |
| 21.78 | Substitution `80 × 6` fades in |
| 25.0 | Step 1 answer (480 km) reveals |
| 27.7 | Step 1 → stack morph (badge "1") + line G→1 grows |
| 28.7 | Step 2 card enters |
| 31.46 | Formula `Distance/Time` fades in |
| 34.06 | Fraction 480/4.5 fades in |
| 39.70 | Step 2 final answer (106.67 km/hr) reveals |
| 43.42 | Step 2 → stack morph (badge "2") + line 1→2 grows; illustration fades out; question recenters |
| 44.22 | Options grid fades in |
| 44.72 | Options stagger in (A/B/C/D) |
| 46.6 | Option C correct-pulse |
| 49.24 | End of voiceover — hold on final frame |

**Total video length:** ~49.5s (matches voiceover duration of 49.24s + small hold).
