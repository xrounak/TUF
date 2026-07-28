# Storyboard — Speed, Time and Distance Q31

**A train runs at 72 km/hr without halts; average speed including halts drops to 60 km/hr. Find the stoppage time per hour.**
**Options:** A) 12 min  B) 15 min  C) 10 min ✅ correct  D) 8 min
**Solution:** Distance lost per hour = 72 − 60 = 12 km → Time lost = 12/72 hr = 1/6 hr = 10 min
**Voiceover duration:** 64.22s
**Topic name:** "Speed, Time and Distance"

Structural twin of `speed and time/Amateur/ques13` (72 vs 54 km/hr, same "distance lost → time lost → convert" method) — same illustration approach (track + train + two contrasting speed tags), but split the derivation into three solution cards (Given + Step 1 distance-lost + Step 2 time-lost + Step 3 convert-to-minutes) instead of collapsing the last two into one, and uses `apt.pinFlow` for the Phase 1→2 transition per the current template rules (ques13 predates that rule and used a bare cross-fade — not reused here).

---

## PART 1: Narration Beat Analysis

| # | Time (s) | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|----------|-----------|----------------------|------------------|-------------------|
| 1 | 0.12–3.24 | "So welcome back again. Time for one more problem." | Cold open / hook | Center screen | QuestionCard hero rises into view |
| 2 | 3.80–12.5 | "Now in this problem, a train runs at seventy-two kilometer per hour without halts, but its average speed with halts drops to sixty kilometer per hour." | State both given speeds | Illustration + Given card | Train drives on track; "72 km/hr (without halts)" tag appears, then "60 km/hr (with halts)" tag contrasts it; Given card fills in step with each |
| 3 | 13.10–16.72 | "The question is asking us to find the stoppage time per hour." | State the ask | Question text | Question card holds, fully stated |
| 4 | 17.28–18.12 | "Think of it this way," | Transition cue into solving | Transition | Phase 1 → 2 pin fires here |
| 5 | 18.56–27.42 | "In one hour without any halts, the train would cover seventy-two kilometer, but because of halts, it covers only sixty kilometer in one hour." | Step 1: state possible vs actual distance in 1 hr | Step 1 card | "Possible distance = 72 km" then "Actual distance = 60 km" reveal in sequence |
| 6 | 27.92–36.02 | "The difference, seventy-two minus sixty, which is twelve kilometer, is the distance the train could have covered if it had not stopped." | Step 1: compute distance lost to halts (12 km) | Step 1 card math | Subtraction resolves to 12 km |
| 7 | 36.34–43.40 | "Now let us find how much time it takes to cover those twelve kilometer at the running speed of seventy-two kilometer per hour." | Step 2: set up the time-lost calc | Step 2 card | Recap (12 km, 72 km/hr) → formula |
| 8 | 43.76–51.82 | "We know time is equal to distance divided by speed, so time is equal to twelve divided by seventy-two hours. After simplifying, we get one by six hours." | Step 2: substitute + simplify to 1/6 hr | Step 2 card fraction | 12/72 simplifies to 1/6 hr |
| 9 | 52.18–58.72 | "Now convert this into minutes. One by six hours is equal to sixty divided by six, which is ten minutes." | Step 3: convert 1/6 hr → 10 min | Step 3 card | 60/6 resolves to 10 min |
| 10 | 59.08–64.22 | "So the train stops for ten minutes every hour. Hence, the correct answer is option C." | Final answer + reveal | Options grid, option C | Options grid appears, C pulses green |

---

## PART 2: Scene-by-Scene Storyboard

### SCENE 1 — Hero Question Open
**TIMESTAMP:** 0.0 – 3.24s
**VOICEOVER:** "So welcome back again. Time for one more problem."
**VISUAL OBJECTIVE:** Establish the question card as the sole focal point, vertically centered while alone in frame.
**SCREEN LAYOUT:** `#q-full-card` centered at `left:50%`, starts lowered (`heroEnterLowered`, offsetY 180).
**ON-SCREEN ELEMENTS:** Dotted grid, bottom strip, topic name "Speed, Time and Distance" (bottom-left), logo (bottom-right), SerialNum badge "Q" (top-left, mirrors card's lowered position), QuestionCard: *"A train runs at 72 km/hr without halts, but its average speed including halts drops to 60 km/hr. Find the stoppage time per hour."* with `72 km/hr` and `60 km/hr` in `--primary` via `.num` spans.
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.24)` — lowered pose settles at 0.3s (0.7s, `back.out(1.4)`), rises to resting position at RISE_TIME=3.24 (0.6s, `power2.inOut`), landing right as "problem." finishes. SerialNum badge pops at 0.8s (`back.out(2)`, mirrored y-offset), rises in tandem at 3.24.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Hard cut in from background layers already present at t=0.
**EDUCATIONAL PURPOSE:** Cold open, orients viewer to the problem.
**VISUAL HIERARCHY:** QuestionCard > SerialNum > background layers.
**ATTENTION MANAGEMENT:** Single element on screen.
**MOTION NOTES:** The rise should read as "question locked in" right as the opening line ends.
**CONTINUITY FROM PREVIOUS SCENE:** N/A — opening scene.

---

### SCENE 2 — Illustration Builds + Given Card Fills In
**TIMESTAMP:** 3.24 – 16.72s
**VOICEOVER:** "Now in this problem, a train runs at seventy-two kilometer per hour without halts, but its average speed with halts drops to sixty kilometer per hour. The question is asking us to find the stoppage time per hour."
**VISUAL OBJECTIVE:** Ground both given speeds in a concrete illustration (one train, two contrasting speed tags) and populate the Given card in exact sync, well before the Phase 2 pin — mirrors `ques13`'s proven "illustration label + Given card line, same value, same moment" pattern.
**SCREEN LAYOUT:** `#illustration` centered `top:350px`, height 300px: a dashed track line, train (train.svg, ~170px) at the track's left edge, driving in a slow continuous drift for the rest of Phase 1. Two speed tags stacked at the track's right side. `#card-given .solution-card` at `left:640px; top:715px`, alongside the illustration (opens early, does not wait for the pin).
**ON-SCREEN ELEMENTS:** Track sweeps in at 3.6s. Train fades/scales in at 4.2s, then drifts slowly rightward through the rest of Phase 1. "72 km/hr" tag (with "(without halts)" sub-label) fades in at 5.879s (word "seventy-two"). "60 km/hr" tag (with "(with halts)" sub-label) fades in at 11.199s (word "sixty"), visually contrasting the first. Given card box pops in at 5.0s (just ahead of its first value); line 1 "Speed without halts = 72 km/hr" reveals at 5.879s; line 2 "Speed with halts = 60 km/hr" reveals at 11.199s.
**ANIMATION DETAILS:** `apt.roadSweep(tl, "#illus-track", 3.6, 0.9)`. Train: `fromTo` slide-in x:-180→0, scale 0.7→1, 0.7s, `back.out(1.6)`, at 4.2s, then `tl.to("#illus-train-wrap", {x: 260, duration: 13, ease:"power1.inOut"}, 4.9)` — a slow continuous drift (ambient, not tied to exact physics — no bridge/finish-line to land on this time). Tags: `fromTo` y:-14→0 + opacity 0→1, 0.45s, `back.out(2)`, at their respective times. `apt.cardEnter(tl, "#card-given .solution-card", 5.0)`, `apt.textReveal(tl, "#card-given .math")` with the two line-level reveals above.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Continuous build, no cuts.
**EDUCATIONAL PURPOSE:** Anchors both given speeds to a concrete object before any math starts, fully populates the Given card ahead of the pin.
**VISUAL HIERARCHY:** QuestionCard (top) > Illustration + Given card (both building) > background.
**ATTENTION MANAGEMENT:** Each tag + matching Given line appears exactly when its number is spoken.
**MOTION NOTES:** The two tags should read as a direct visual contrast (same train, two different speeds) — position them close enough together to invite comparison.
**CONTINUITY FROM PREVIOUS SCENE:** The question card is already at rest (Scene 1's rise completed at 3.24s); this scene only adds the illustration + Given card beneath it.

---

### SCENE 3 — Transition Cue → Pin
**TIMESTAMP:** 17.28 – 18.12s
**VOICEOVER:** "Think of it this way,"
**VISUAL OBJECTIVE:** Signal the shift from problem-statement to solving.
**SCREEN LAYOUT:** `PIN_TIME = 17.279`. `#q-pinned` at `left:385px; top:30px; width:1275px`. `#illus-pinned` at `left:280px; top:190px` (shrunk train icon + recap text, centered — single-icon recap per design.md).
**ON-SCREEN ELEMENTS:** Question + illustration glide to their pinned slots. Given card (already fully populated since 11.199s) morphs straight into its stack badge "G" — no re-entry needed.
**ANIMATION DETAILS:** `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 17.279)`, `apt.pinFlow(tl, "#illustration", "#illus-pinned", 17.279)`, `apt.fadeOut(tl, "#serial-num", 17.279, 0.5)`, `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 17.279)`.
**CAMERA MOVEMENT:** None (glide is object motion).
**TRANSITIONS:** `pinFlow` glide, simultaneous with the Given→stack morph.
**EDUCATIONAL PURPOSE:** Clears the stage for the step-by-step solve.
**VISUAL HIERARCHY:** Pin glide draws the eye up/smaller; Given morph settles into the stack.
**ATTENTION MANAGEMENT:** Single continuous motion, no competing entrances.
**MOTION NOTES:** Both pinFlow glides complete at 18.08s, landing just before Step 1 opens.
**CONTINUITY FROM PREVIOUS SCENE:** The exact same train and track from Scene 2, now shrunk and repositioned into `#illus-pinned` — no new illustration assets.

---

### SCENE 4 — Step 1: Distance Lost per Hour
**TIMESTAMP:** 18.30 – 36.34s
**VOICEOVER:** "In one hour without any halts, the train would cover seventy-two kilometer, but because of halts, it covers only sixty kilometer in one hour. The difference, seventy-two minus sixty, which is twelve kilometer, is the distance the train could have covered if it had not stopped."
**VISUAL OBJECTIVE:** Compute the distance lost to halts per hour: 72 − 60 = 12 km.
**SCREEN LAYOUT:** `#stack-given .stack-card` at `left:100px; top:140px`. `#card-step1 .solution-card` centered `left:640px; top:470px`.
**ON-SCREEN ELEMENTS:** Step 1 card, chip "Step 1", math:
```
Possible distance (1 hr) = 72 km
Actual distance (1 hr) = 60 km
72 − 60 =
= 12 km
```
**ANIMATION DETAILS:**
- `apt.cardEnter(tl, "#card-step1 .solution-card", 18.3)`.
- `apt.textReveal(tl, "#card-step1 .math")`:
  - Line 1 "Possible distance (1 hr) = 72 km" — **line-level**, `data-t=21.239` ("seventy-two" in "the train would cover seventy-two kilometer").
  - Line 2 "Actual distance (1 hr) = 60 km" — **line-level**, `data-t=25.599` ("sixty" in "it covers only sixty kilometer").
  - Line 3 "72 − 60 =" — **word-level**: "72" at 29.039, "−" at 29.579, "60" at 29.939.
  - Line 4 "= 12 km" (`.ans`) — **word-level**: "=" at 30.939, "12 km" at 31.119.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Standard cardEnter, no exits within the scene.
**EDUCATIONAL PURPOSE:** Establishes the distance lost per hour, the bridge fact needed for the time-lost calc.
**VISUAL HIERARCHY:** Step 1 active card > Given stack (left, secondary) > pinned question.
**ATTENTION MANAGEMENT:** The `12 km` answer reveal is timed precisely to its spoken moment.
**MOTION NOTES:** Given stack card remains visible for the rest of the video (never faded).
**CONTINUITY FROM PREVIOUS SCENE:** Directly follows the pin glide's landing at 18.08s; Step 1's box enters immediately, before the first line's content is spoken (a brief empty-box beat is fine — mirrors the standard cardEnter → textReveal sequencing used throughout).

---

### SCENE 5 — Step 2: Time Lost, Simplify to 1/6 hr
**TIMESTAMP:** 36.34 – 52.18s
**VOICEOVER:** "Now let us find how much time it takes to cover those twelve kilometer at the running speed of seventy-two kilometer per hour. We know time is equal to distance divided by speed, so time is equal to twelve divided by seventy-two hours. After simplifying, we get one by six hours."
**VISUAL OBJECTIVE:** Apply the time-lost formula (Time = Distance ÷ Speed) using the 12 km lost and the 72 km/hr running speed, simplify to 1/6 hr.
**SCREEN LAYOUT:** `#stack-step1 .stack-card` at `left:100px; top:280px`. `#card-step2 .solution-card` centered `left:600px; top:440px; width:720px`.
**ON-SCREEN ELEMENTS:** Step 1 stack card (badge "1") joins the column; `.stack-line` connector `#line-g-1` grows between badges "G" and "1". Step 2 card opens, chip "Step 2", math:
```
Distance lost = 12 km, Speed = 72 km/hr
Time = Distance ÷ Speed
= 12/72
= 1/6 hr
```
**ANIMATION DETAILS:**
- `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 36.34)` — 0.8s, completes 37.14s.
- `apt.stackLineGrow(tl, "#line-g-1", 36.34)`.
- `apt.cardEnter(tl, "#card-step2 .solution-card", 37.2)`.
- `apt.textReveal(tl, "#card-step2 .math")`:
  - Line 1 "Distance lost = 12 km, Speed = 72 km/hr" — **line-level** recap, `data-t=37.2` (cardEnter time — recaps the two just-established values while "Now let us find how much time it takes to cover those twelve kilometer at the running speed of seventy-two kilometer per hour" plays, 36.34–43.40).
  - Line 2 "Time = Distance ÷ Speed" — **line-level**, `data-t=43.759` ("We know time is equal to distance divided by speed").
  - Line 3 fraction "12/72" — **word-level**, `data-t=47.239` ("twelve" in "time is equal to twelve divided by seventy-two hours").
  - Line 4 "= 1/6 hr" (`.ans`) — **word-level**, `data-t=50.84` ("one" in "we get one by six hours").
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Standard morph + stack-line grow.
**EDUCATIONAL PURPOSE:** Computes the raw time lost, in hours, setting up the final unit conversion.
**VISUAL HIERARCHY:** Step 2 card (center) > Step 1 + Given stack (left, both visible).
**ATTENTION MANAGEMENT:** Recap line keeps the card from opening empty during the setup narration.
**MOTION NOTES:** This is the longest single active-card hold (~15s) — the recap → formula → substitution → simplify sequence keeps it visually alive without needing `ambientLoop`.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1's card is still completing its text-fade-out as Step 2's narration cue begins; stack column now shows two connected circles (G→1).

---

### SCENE 6 — Step 3: Convert to Minutes + Options Reveal
**TIMESTAMP:** 52.18 – 64.22s
**VOICEOVER:** "Now convert this into minutes. One by six hours is equal to sixty divided by six, which is ten minutes. So the train stops for ten minutes every hour. Hence, the correct answer is option C."
**VISUAL OBJECTIVE:** Convert 1/6 hr to minutes (10 min) and reveal the correct option.
**SCREEN LAYOUT:** `#stack-step2 .stack-card` at `left:100px; top:460px`. `#card-step3 .solution-card` centered `left:620px; top:460px; width:680px`. `.pinned-col` options grid at `top:400px`.
**ON-SCREEN ELEMENTS:** Step 2 stack card (badge "2") joins column; `#line-1-2` connector grows. Step 3 card, chip "Step 3", math:
```
Convert 1/6 hr → minutes
60/6
= 10 min
```
Then: illustration recentered/faded, stack column stays visible, options grid (A 12 min / B 15 min / C 10 min / D 8 min) fades in with C highlighted green.
**ANIMATION DETAILS:**
- `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 52.18)` — 0.8s.
- `apt.stackLineGrow(tl, "#line-1-2", 52.18)`.
- `apt.cardEnter(tl, "#card-step3 .solution-card", 53.0)`.
- `apt.textReveal(tl, "#card-step3 .math")`:
  - Line 1 "Convert 1/6 hr → minutes" — **line-level**, `data-t=53.0` (cardEnter time, paraphrase of "Now convert this into minutes", already in progress).
  - Line 2 fraction "60/6" — **word-level**, `data-t=55.819` ("sixty" in "sixty divided by six").
  - Line 3 "= 10 min" (`.ans`) — **word-level**, `data-t=58.139` ("ten" in "which is ten minutes").
- `RECENTER_TIME = 59.2` (right as "So the train stops for ten minutes every hour" begins, restating the answer) — `apt.fadeOut(tl, "#illus-pinned", 59.2)`, `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 59.2)`.
- `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 59.2)`, `apt.stackLineGrow(tl, "#line-2-3", 59.2)`.
- `apt.fadeIn(tl, "#options-reveal", 60.0)`.
- `apt.optionsStagger(tl, ".opt-btn", 60.5)`.
- `apt.correctPulse(tl, ".opt-btn.correct", 62.8)` (lands just before "option C." finishes at 64.22).
- `END_FADE_TIME = 65.3` — `apt.fadeOut(tl, "#root > div", 65.3, 1.2)`.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Final morph + recenter glide + options stagger + pulse, then synchronized full-frame fade-out.
**EDUCATIONAL PURPOSE:** Delivers the final unit conversion and confirms the answer against the actual MCQ options.
**VISUAL HIERARCHY:** Step 3 card → options grid (sequential focal shift) > full stack column (G/1/2/3) > pinned question.
**ATTENTION MANAGEMENT:** `correctPulse` on option C is the terminal focal point.
**MOTION NOTES:** The narration restates the answer twice ("ten minutes every hour" then "option C") in a short window — recenter fires early (59.2s) to leave enough runway for the full options sequence before the voiceover ends at 64.22s.
**CONTINUITY FROM PREVIOUS SCENE:** Step 2's card is mid-text-fade as Step 3's cue fires, exactly as in Scene 4→5; the stack column's G→1→2 chain extends to G→1→2→3 by scene end.

---

## PART 3: Asset List Required

- `illustration/train.svg` (already present, user-supplied, kept as-is per README 5C) — flat 2D train icon, used full-size in Phase 1 and shrunk in the pinned recap.
- Speed tags (Scene 2) — pure CSS/HTML, no new SVG (value + sub-label text styled with existing `--primary`/`--topic` tokens, ≥22px per design.md's illustration-label minimum).
- Track line — pure CSS (`border-top: dashed`), reused pattern from `q30`/`ques13`.
- All cards/chips/options/logo/serial-badge — existing shared components from `_template/assets/` and `design-system.css`. No new components introduced.

## PART 4: Animation Complexity Notes

- Standard patterns only: `heroEnterLowered`, `roadSweep`, `pinFlow` (×2, paired), `cardEnter` (×4), `textReveal` (×4), `morphToStack` (×4), `stackLineGrow` (×3), `setStackLine` (×3), `fadeIn`/`fadeOut`, `recenterForOptions`, `optionsStagger`, `correctPulse`.
- One small custom (non-`animations.js`) tween: the train's continuous ambient drift during Phase 1 (Scene 2), a plain `tl.to()` translateX — per design.md's "per-question custom CSS/JS for illustration content" allowance, not a shared-component change. No `ambientLoop` needed since no long silent pinned-illustration stretch exists here (Step 2's hold is filled by its own recap/formula/substitution/simplify text-reveal sequence).
- No `apt.stepFlow` used (correctly dropped per README 4D.1).
- No double-animation risk: text-reveal-driven cards never also get `emphasize`/`resultReveal`.
- 3 solution steps (Given + Step 1 + Step 2 + Step 3 = 4 cards total in the stack column: G, 1, 2, 3) — within the standard "1 Given + 2–4 Steps" range.

## PART 5: Master Timeline Overview

```
0.0    Phase 1 starts — QuestionCard hero (lowered) enters
0.8    SerialNum badge pop
3.24   QuestionCard + badge rise to resting position
3.6    Track sweeps in
4.2    Train illustration slides in
4.9    Train begins continuous ambient drift (13s)
5.0    Given card box enters
5.879  "72 km/hr (without halts)" tag + Given line 1
11.199 "60 km/hr (with halts)" tag + Given line 2
[ PIN_TIME = 17.279 ]
17.279 pinFlow: question + illustration glide to pinned slots (0.8s); Given → stack morph
18.3   Step 1 card enters
21.239 Step 1 line 1 (possible distance = 72 km)
25.599 Step 1 line 2 (actual distance = 60 km)
29.039–31.119  Step 1 subtraction resolves (72 − 60 = 12 km)
[ 36.34 ]  Step 1 → stack morph + line-g-1 grows
37.2   Step 2 card enters (recap line)
43.759 Step 2 formula (Time = Distance ÷ Speed)
47.239–50.84  Step 2 substitution + simplify (12/72 = 1/6 hr)
[ 52.18 ]  Step 2 → stack morph + line-1-2 grows
53.0   Step 3 card enters (convert line)
55.819–58.139  Step 3 conversion resolves (60/6 = 10 min)
[ RECENTER_TIME = 59.2 ]
59.2   illus-pinned fades out; q-pinned recenters; Step 3 → stack morph + line-2-3 grows
60.0   options-reveal fades in
60.5   options stagger in
62.8   correctPulse on option C
[ END_FADE_TIME = 65.3 ]  full-frame fade out (1.2s)
~67    End
```
