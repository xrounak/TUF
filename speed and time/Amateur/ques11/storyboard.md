# Storyboard — Speed and Time / Question 11 (Amateur)

**Question:** A cyclist crosses a 1500 m long bridge in 12.5 minutes. What is his speed in km per hour?
**Options:** A) 9.6  B) 7.2 ✅ correct  C) 6.4  D) 8.4
**Solution:** 12.5 min = 750 s → Speed = 1500/750 = 2 m/s → 2 × 18/5 = 7.2 km/hr
**Voiceover duration:** 76.12s

---

## PART 1 — Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|-----------|-----------|----------------------|------------------|-------------------|
| 1 | 0.10–2.90 | "So welcome back again. Time for one more problem." | Warm open, orient viewer | Center of frame | Hold on blank/lowered question card, building anticipation |
| 2 | 3.40–7.66 | "...a cyclist crosses a bridge which is 1500 meter long." | Introduce scenario + key figure (1500 m) | Question text + illustration bridge span | Question card rises to rest; bridge illustration begins forming, "1500 m" label emphasized |
| 3 | 8.26–10.76 | "The cyclist takes 12.5 minutes to cross it." | Introduce second given (time) | Illustration stopwatch/time label | Cyclist icon animates across bridge; "12.5 min" label appears |
| 4 | 11.24–15.74 | "The question is asking us to find the cyclist's speed in km/hr." | Restate the ask | Question text | Question text holds, no new visual (reinforcement beat) |
| 5 | 16.26–20.72 | "But be careful here. The distance is given in meter, and the time is given in minutes." | Flag the unit trap (common mistake) | Units on illustration | "meter" and "minutes" labels pulse/emphasize on the illustration |
| 6 | 21.10–26.80 | "So first, we will find the speed in m/s, and then convert it into km/hr." | State solution strategy | Transition cue | Phase 1 fades, question pins to top, Given card enters |
| 7 | 27.38–35.46 | "One minute = 60 seconds. So 12.5 min = 12.5 × 60 = 750 seconds." | Step 1: unit conversion of time | Step 1 card math | Given → stack morph; Step 1 card shows the multiplication |
| 8 | 35.84–37.76 | "Now let us put the values in the speed formula." | Bridge to formula | Transition cue | Hold on Step 1 (formula about to appear next) |
| 9 | 38.36–49.62 | "Speed = distance/time. So speed = 1500/750. After simplifying, we get 2 m/s." | Step 2: apply speed formula, compute m/s | Step 2 card fraction + answer | Step 1 → stack morph; Step 2 card builds fraction 1500/750 → resolves to 2 m/s |
| 10 | 50.06–54.92 | "Now that we have found the speed in m/s, we need to convert it into km/hr." | Bridge to unit conversion | Transition cue | Hold on Step 2 (conversion coming next) |
| 11 | 55.40–63.98 | "To convert m/s into km/hr, multiply by 18/5. So we get 2 × 18/5." | Step 3: apply conversion factor | Step 3 card fraction | Step 2 → stack morph; Step 3 card shows 2 × 18/5 |
| 12 | 64.62–71.46 | "After simplifying, we get 7.2 km/hr. Hence, the cyclist's speed is 7.2 km/hr" | Reveal final answer value | Step 3 answer span | Answer "7.2 km/hr" resolves inside Step 3 card |
| 13 | 72.16–76.12 | "...per hour. So the final answer will be option B, 7.2 km/hr." | Match answer to MCQ option | Options grid, option B | Step 3 → stack morph; options grid reveals; option B pulses green |

---

## PART 2 — Scene-by-Scene Storyboard

### SCENE 1 — Opening Hold
- **TIMESTAMP:** 0.0–3.4s
- **VOICEOVER:** "So welcome back again. Time for one more problem."
- **VISUAL OBJECTIVE:** Establish calm open before the question drops in.
- **SCREEN LAYOUT:** Full-frame Phase 1 — dotted-grid background + bottom-strip + topic name + logo visible. Question card lowered (off-center, vertically centered while alone) per `apt.heroEnterLowered`.
- **ON-SCREEN ELEMENTS:** `#q-full-card` (lowered position, y offset 180px), `#serial-num` badge synced to same lowered y.
- **ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 2.9)` starting at 0.3s (0.7s back.out(1.4) entrance). Serial badge pops in parallel at 0.8s (`back.out(2)`), mirrors the same y-offset.
- **CAMERA MOVEMENT:** None (static frame; only the card itself moves).
- **TRANSITIONS:** Card + badge rise together to resting position at 2.9s (`power2.inOut`, 0.6s) — exactly as "time for one more problem" ends.
- **EDUCATIONAL PURPOSE:** Orients the viewer before content begins.
- **VISUAL HIERARCHY:** Question card only element in frame — full attention.
- **ATTENTION MANAGEMENT:** No competing motion; single focal point.
- **MOTION NOTES:** `RISE_TIME = 2.9`.

### SCENE 2 — Question Reveal + Bridge Illustration Builds
- **TIMESTAMP:** 3.4–10.76s
- **VOICEOVER:** "...a cyclist crosses a bridge which is 1500 meter long. The cyclist takes 12.5 minutes to cross it."
- **VISUAL OBJECTIVE:** Ground the abstract question in a concrete flat-2D scene: a bridge of length 1500 m, crossed in 12.5 minutes.
- **SCREEN LAYOUT:** Question card resting at top-center (`#q-full-card`, 1500px wide, top:80px). Illustration area centered below at top:480px.
- **ON-SCREEN ELEMENTS:**
  - `#illustration`: a flat 2D bridge (two pylons + horizontal deck line, `--primary` colored) spanning ~800px width, with a dashed distance-bracket beneath it labeled **"1500 m"** (in `--primary`).
  - A simple flat-icon cyclist (circle head + triangular body + two wheel circles, `--text`/`--primary` accents) positioned at the bridge's left pylon.
  - A small stopwatch glyph + **"12.5 min"** label appears near the cyclist once time is mentioned.
- **ANIMATION DETAILS:**
  - 3.4s: bridge deck line grows in via `apt.roadSweep(tl, "#bridge-deck", 3.4, 0.9)` (scaleX 0→1, left origin).
  - 4.2s: "1500 m" distance label fades up (`apt.fadeIn`, 0.4s) beneath the deck.
  - 8.26s: cyclist icon fades/scales in at the bridge's left edge (`apt.cardEnter`-style pop, 0.55s), then begins a slow, steady horizontal translate across the deck (linear tween, duration matched to hold until Phase 1 ends ~21s).
  - 8.6s: stopwatch + "12.5 min" label fades in beside the cyclist (`apt.fadeIn`, 0.4s).
- **CAMERA MOVEMENT:** None — flat static camera; only in-scene elements move.
- **TRANSITIONS:** Elements accumulate (no exits) — bridge, then distance label, then cyclist, then time label.
- **EDUCATIONAL PURPOSE:** Anchors the two given values (1500 m, 12.5 min) visually before the numeric solving begins.
- **VISUAL HIERARCHY:** Question text > bridge/distance label > cyclist > time label.
- **ATTENTION MANAGEMENT:** One element introduced at a time, each ~0.4–0.8s apart, to avoid overload.
- **MOTION NOTES:** Cyclist's crossing motion is continuous background motion — it should NOT resolve (finish crossing) before Phase 1 ends; it keeps drifting rightward slowly through Scenes 2–4.

### SCENE 3 — Restate the Question
- **TIMESTAMP:** 11.24–15.74s
- **VOICEOVER:** "The question is asking us to find the cyclist's speed in kilometers per hour."
- **VISUAL OBJECTIVE:** Reinforce the goal (find speed in km/hr) with no new visual noise.
- **SCREEN LAYOUT:** Unchanged from Scene 2 — question card + illustration continue holding/drifting.
- **ON-SCREEN ELEMENTS:** Same as Scene 2 (cyclist continues its slow crossing drift).
- **ANIMATION DETAILS:** `apt.emphasize(tl, ".q-text .num", 11.24)` — a subtle yo-yo scale pulse (0.3s) on the numeric/key term spans inside the question text ("1500", "12.5", "km/hr") to draw the eye back to the ask.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** None — pure hold/reinforcement beat.
- **EDUCATIONAL PURPOSE:** Prevents the viewer from losing track of what's being solved for.
- **VISUAL HIERARCHY:** Question text re-emphasized as top priority.
- **ATTENTION MANAGEMENT:** Single emphasize pulse, no competing motion.
- **MOTION NOTES:** Reuses existing `.num` spans already present in the question text (no new elements).

### SCENE 4 — The Unit Trap
- **TIMESTAMP:** 16.26–20.72s
- **VOICEOVER:** "But be careful here. The distance is given in meter, and the time is given in minutes."
- **VISUAL OBJECTIVE:** Flag the common mistake: units don't match the target (km, hr) yet.
- **SCREEN LAYOUT:** Unchanged base layout; illustration labels get emphasized.
- **ON-SCREEN ELEMENTS:** "1500 m" and "12.5 min" labels from Scene 2 (already on screen).
- **ANIMATION DETAILS:** `apt.emphasize(tl, "#dist-label", 17.48)` (pulse on "meter" at 17.48, matching "given in meter"); `apt.emphasize(tl, "#time-label", 19.32)` (pulse on "minutes" at 19.32, matching "given in minutes").
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** None — sequential emphasize pulses on existing elements.
- **EDUCATIONAL PURPOSE:** Common-mistake guardrail — primes the viewer for the upcoming unit-conversion steps.
- **VISUAL HIERARCHY:** Unit words > everything else, momentarily.
- **ATTENTION MANAGEMENT:** Two isolated pulses timed exactly to the spoken words "meter" and "minutes".
- **MOTION NOTES:** No new DOM elements — reuses labels built in Scene 2.

### SCENE 5 — Strategy Statement / Phase Transition
- **TIMESTAMP:** 21.10–26.80s
- **VOICEOVER:** "So first, we will find the speed in meters per second, and then convert it into kilometres per hour."
- **VISUAL OBJECTIVE:** Transition from the illustrated setup into the structured step-by-step solve.
- **SCREEN LAYOUT:** Phase 1 (full question + illustration) fades out; Phase 2 begins — question pins small at top, illustration pins smaller below it, Given solution card appears center.
- **ON-SCREEN ELEMENTS:** `#q-pinned` (pinned question, top:30px), `#illus-pinned` (shrunk bridge+cyclist), `#card-given .solution-card` with chip **"Given"** and math: `Distance = 1500 m` / `Time = 12.5 min`.
- **ANIMATION DETAILS:**
  - 21.0s: `apt.fadeOut(tl, "#phase1", 21.0)` (0.4s).
  - 21.5s: `apt.fadeIn(tl, "#q-pinned", 21.5)`, `apt.fadeIn(tl, "#illus-pinned", 21.5)` (0.4s each).
  - 22.0s: `apt.cardEnter(tl, "#card-given .solution-card", 22.0)` (0.55s, `back.out(1.4)`).
- **CAMERA MOVEMENT:** None (flat cross-fade of phases).
- **TRANSITIONS:** Phase 1 → Phase 2 cross-fade.
- **EDUCATIONAL PURPOSE:** Signals "now we start solving" — visually separates setup from computation.
- **VISUAL HIERARCHY:** Given card > pinned question > pinned illustration.
- **ATTENTION MANAGEMENT:** One clean cut; no overlapping competing entrances.
- **MOTION NOTES:** Given card holds through the remainder of this beat (26.80s) before Step 1 begins.

### SCENE 6 — Step 1: Convert Time to Seconds
- **TIMESTAMP:** 27.38–37.76s
- **VOICEOVER:** "One minute is equal to sixty seconds. So 12.5 minutes will be 12.5 multiplied by sixty, which is 750 seconds. Now let us put the values in the speed formula."
- **VISUAL OBJECTIVE:** Show the time-unit conversion (min → s) that resolves the Scene 4 unit trap.
- **SCREEN LAYOUT:** Given card morphs into the left stack column (circle badge "G"); Step 1 solution card takes its place center.
- **ON-SCREEN ELEMENTS:** `#stack-given .stack-card` (badge "G"), `#card-step1 .solution-card` with chip **"Step 1"** and math: `12.5 min × 60 = ` → `<span class="ans">750 s</span>`.
- **ANIMATION DETAILS:**
  - 27.3s: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 27.3)` (0.8s, `power2.inOut`).
  - 28.3s: `apt.cardEnter(tl, "#card-step1 .solution-card", 28.3)` (0.55s).
  - 33.84s: `apt.resultReveal(tl, "#step1-ans", 33.84)` — the `750 s` answer span slides/fades in exactly as "750 seconds" is spoken.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Standard morph pattern (text fades, box slides+shrinks+recolors, target reveals).
- **EDUCATIONAL PURPOSE:** Demonstrates the necessary conversion before the speed formula can be applied correctly.
- **VISUAL HIERARCHY:** Step 1 active card > Given stack card (now secondary/left).
- **ATTENTION MANAGEMENT:** Answer span (`750 s`) reveal is timed precisely to its spoken moment for maximum retention.
- **MOTION NOTES:** Given stack card must remain visible (no fade-out) for rest of video.

### SCENE 7 — Step 2: Apply Speed Formula
- **TIMESTAMP:** 38.36–49.62s
- **VOICEOVER:** "Speed is equal to distance divided by time. So speed is equal to 1500 divided by 750. After simplifying this, we get 2 meter per second."
- **VISUAL OBJECTIVE:** Apply the core formula (Speed = Distance/Time) with the now-converted values, resolving to 2 m/s.
- **SCREEN LAYOUT:** Step 1 morphs into stack (badge "1"), connector line grows between "G" and "1"; Step 2 card takes center.
- **ON-SCREEN ELEMENTS:** `#stack-step1 .stack-card` (badge "1"), `#line-g-1` connector, `#card-step2 .solution-card` chip **"Step 2"**, math: `Speed = ` fraction(`Distance`/`Time`) `= ` fraction(`1500`/`750`) `= ` `<span class="ans">2 m/s</span>`.
- **ANIMATION DETAILS:**
  - 38.0s: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 38.0)` (0.8s).
  - 38.0s: `apt.stackLineGrow(tl, "#line-g-1", 38.0)` (0.5s, same moment the "1" circle lands).
  - 39.0s: `apt.cardEnter(tl, "#card-step2 .solution-card", 39.0)` (0.55s).
  - 41.7s: fraction `1500/750` fades in as the formula is substituted (`apt.fadeIn` on `.frac`, 0.4s), matching "speed is equal to 1500 divided by 750".
  - 48.9s: `apt.resultReveal(tl, "#step2-ans", 48.9)` — `2 m/s` answer resolves as "we get two meter per second" is spoken.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Standard morph pattern; fraction reveals progressively within the active card (formula → substituted values → answer).
- **EDUCATIONAL PURPOSE:** Core computation step — the formula application is the heart of the problem.
- **VISUAL HIERARCHY:** Step 2 active card (with fraction) > stack column (G, 1) on left.
- **ATTENTION MANAGEMENT:** Progressive reveal inside one card avoids dumping all three pieces (formula/substitution/answer) at once.
- **MOTION NOTES:** Use `.frac` component exactly as defined in design-system.css (top/bottom spans) — no custom fraction markup.

### SCENE 8 — Step 3: Convert m/s to km/hr
- **TIMESTAMP:** 50.06–71.46s
- **VOICEOVER:** "Now that we have found the speed in meter per second, we need to convert it into kilometres per hour. To convert meter per second into kilometres per hour, we multiply by eighteen divided by five. So we get two multiplied by eighteen divided by five. After simplifying this, we get seven point two kilometres per hour. Hence, the cyclist's speed is seven point two kilometres per hour"
- **VISUAL OBJECTIVE:** Apply the standard m/s → km/hr conversion factor (×18/5) to reach the final answer, 7.2 km/hr.
- **SCREEN LAYOUT:** Step 2 morphs into stack (badge "2"), connector line "1→2" grows; Step 3 card takes center.
- **ON-SCREEN ELEMENTS:** `#stack-step2 .stack-card` (badge "2"), `#line-1-2` connector, `#card-step3 .solution-card` chip **"Step 3"**, math: `2 m/s × ` fraction(`18`/`5`) `= ` `<span class="ans">7.2 km/hr</span>`.
- **ANIMATION DETAILS:**
  - 49.6s: `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 49.6)` (0.8s).
  - 49.6s: `apt.stackLineGrow(tl, "#line-1-2", 49.6)` (0.5s).
  - 50.6s: `apt.cardEnter(tl, "#card-step3 .solution-card", 50.6)` (0.55s).
  - 55.4s: fraction `18/5` fades in as "multiply by eighteen divided by five" is spoken (`apt.fadeIn` on `.frac`, 0.4s).
  - 61.26s: `2 × 18/5` full expression emphasized (`apt.emphasize`, 0.3s) as "so we get two multiplied by eighteen divided by five" is spoken.
  - 64.62s: `apt.resultReveal(tl, "#step3-ans", 64.62)` — final answer **`7.2 km/hr`** resolves as "we get seven point two kilometres per hour" is spoken, then holds through "hence, the cyclist's speed is 7.2 km/hr."
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Standard morph pattern; final answer reveal is the emotional/informational peak of the video.
- **EDUCATIONAL PURPOSE:** Completes the unit conversion, delivering the final numeric answer.
- **VISUAL HIERARCHY:** Final answer span (`7.2 km/hr`) is the single most emphasized element on screen at this point.
- **ATTENTION MANAGEMENT:** Long narration beat (21s) is broken into three progressive reveals (conversion factor → substitution → final answer) so the card never feels static.
- **MOTION NOTES:** Step 3 card must stay active (not morph to stack) until 71.46s — narration explicitly says the answer twice ("7.2 km/hr" ... "the cyclist's speed is 7.2 km/hr"); never exit before this repetition completes.

### SCENE 9 — Options Reveal
- **TIMESTAMP:** 71.5–76.12s (video holds to end)
- **VOICEOVER:** "...per hour. So the final answer will be option B, seven point two kilometres per hour."
- **VISUAL OBJECTIVE:** Map the computed answer (7.2 km/hr) onto the multiple-choice options, confirming option B.
- **SCREEN LAYOUT:** Step 3 morphs into stack (badge "3"), connector "2→3" grows. Pinned question + illustration recenter to clear space; options grid (2×2) fades in on the right/aligned column.
- **ON-SCREEN ELEMENTS:** `#stack-step3 .stack-card` (badge "3"), `#line-2-3` connector, `#options-reveal` with 4 `.opt-btn` (A: 9.6, B: 7.2 — `class="correct"`, C: 6.4, D: 8.4).
- **ANIMATION DETAILS:**
  - 71.5s: `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 71.5)` (0.8s).
  - 71.5s: `apt.stackLineGrow(tl, "#line-2-3", 71.5)` (0.5s).
  - 71.5s: `apt.fadeOut(tl, "#illus-pinned", 71.5)` (0.4s).
  - 71.5s: `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 71.5)` (0.5s).
  - 72.3s: `apt.fadeIn(tl, "#options-reveal", 72.3)` (0.4s).
  - 72.8s: `apt.optionsStagger(tl, ".opt-btn", 72.8)` (0.45s × 4, stagger 0.12s).
  - 74.6s: `apt.correctPulse(tl, ".opt-btn.correct", 74.6)` (0.4s yoyo), timed to land right on the spoken "option B".
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Final morph + recenter + stagger reveal; no exits after this (all elements — stack column, options, pinned question — remain visible to the end at 76.12s).
- **EDUCATIONAL PURPOSE:** Closes the loop between the derived numeric answer and the original MCQ options.
- **VISUAL HIERARCHY:** Option B (green, pulsing) > rest of options grid > stack column (still visible, providing full derivation trail).
- **ATTENTION MANAGEMENT:** Single pulse on the correct option, timed to the exact word "option B" (~74.9s in the phrase).
- **MOTION NOTES:** Stack cards + connector lines are NOT faded during this scene — they stay visible so the viewer can see the full G→1→2→3 derivation trail alongside the final answer.

---

## PART 3 — Asset List Required

| Asset | Type | Source | Notes |
|-------|------|--------|-------|
| `design-system.css` | CSS | Copied from `_template/` | No modifications |
| `animations.js` | JS | Copied from `_template/` | No modifications |
| `assets/serial-num-badge.svg` | SVG | Copied from `_template/assets/` | Used by `.serial-num` |
| `assets/logo.png` | PNG | Copied from `_template/assets/` | Bottom-right logo |
| `illustration/bridge.svg` (or inline CSS shapes) | New, per-question | Built for this question | Simple flat 2D bridge: two pylons + horizontal deck (`--primary` stroke) |
| `illustration/cyclist.svg` (or inline CSS shapes) | New, per-question | Built for this question | Simple flat-icon cyclist (circle + triangle + 2 wheel circles), single accent color |
| Distance/time labels | HTML/CSS (no asset) | Built inline | "1500 m" and "12.5 min" text labels styled with existing `.num`/`--primary` tokens |

No new colors, fonts, or components are introduced — illustration uses only basic shapes styled with existing design tokens (`--primary`, `--text`).

---

## PART 4 — Animation Complexity Notes

- **3 solution steps** (Given + Step 1 + Step 2 + Step 3 = 4 cards total in the stack column: G, 1, 2, 3), matching the standard step-cycle pattern.
- All card→stack transitions use `apt.morphToStack` at the fixed 0.8s duration — no exceptions.
- Two connector lines needed between the 4 stack circles: G→1, 1→2, 2→3 — heights/positions must be measured from actual rendered `.step-circle` centers once cards are populated with real content (do not reuse template's example gap values of 140/290/460/660, since this question's card text lengths differ).
- The illustration's cyclist-crossing motion is a simple linear drift (not modeled by any `apt.*` helper) — implement as a plain `tl.to()` translateX tween running continuously through Phase 1 (roughly 8.26s–21.0s).
- Step 3 spans an unusually long narration beat (21s) — broken into 3 sub-reveals (conversion factor, substitution, final answer) using existing `apt.fadeIn`/`apt.emphasize`/`apt.resultReveal` helpers so the card doesn't sit static.
- No new/custom animation helpers are required — every beat is covered by the existing `animations.js` API.

---

## PART 5 — Master Timeline Overview

| Time (s) | Event |
|----------|-------|
| 0.3 | Question card + serial badge enter (lowered) |
| 2.9 | Card + badge rise to resting position |
| 3.4 | Bridge deck sweeps in |
| 4.2 | "1500 m" label fades in |
| 8.26 | Cyclist icon enters, begins slow crossing drift |
| 8.6 | "12.5 min" label fades in |
| 11.24 | Question numerics emphasize pulse |
| 17.48 | "meter" label emphasize pulse |
| 19.32 | "minutes" label emphasize pulse |
| 21.0 | Phase 1 fades out |
| 21.5 | Pinned question + illustration fade in |
| 22.0 | Given card enters |
| 27.3 | Given → stack morph (badge "G") |
| 28.3 | Step 1 card enters |
| 33.84 | Step 1 answer (750 s) reveals |
| 38.0 | Step 1 → stack morph (badge "1") + line G→1 grows |
| 39.0 | Step 2 card enters |
| 41.7 | Fraction 1500/750 fades in |
| 48.9 | Step 2 answer (2 m/s) reveals |
| 49.6 | Step 2 → stack morph (badge "2") + line 1→2 grows |
| 50.6 | Step 3 card enters |
| 55.4 | Fraction 18/5 fades in |
| 61.26 | 2×18/5 expression emphasized |
| 64.62 | Step 3 final answer (7.2 km/hr) reveals |
| 71.5 | Step 3 → stack morph (badge "3") + line 2→3 grows; illustration fades out; question recenters |
| 72.3 | Options grid fades in |
| 72.8 | Options stagger in (A/B/C/D) |
| 74.6 | Option B correct-pulse |
| 76.12 | End of voiceover — hold on final frame |

**Total video length:** ~76.5s (matches voiceover duration of 76.12s + small hold).
