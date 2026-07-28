# Storyboard — Speed and Time / Amateur / Question 15

**Question:** The speeds of two motorcycles are in the ratio 5 : 6. If the second motorcycle covers 360 km in 3 hours, the speed of the first is:
**Options:** A) 80 km/hr · B) 100 km/hr ✅ · C) 90 km/hr · D) 120 km/hr
**Correct:** B — 100 km/hr
**Voiceover duration:** 68.159s

---

## PART 1: Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|-----------|-----------|---------------------|------------------|-------------------|
| 1 | 0.10–2.74 | "So welcome back again. Time for one more problem." | Warm open, orient viewer | Center of frame | Question card rises into view (hero entrance) |
| 2 | 3.32–7.08 | "...the speeds of two motorcycles are given in the ratio five is to six." | Establish the ratio | Question text, "5 : 6" highlighted | Two motorcycle silhouettes appear side by side with a "5 : 6" ratio label |
| 3 | 7.54–10.96 | "The second motorcycle covers three hundred sixty kilometer in three hours." | Establish the known data point | "360 km", "3 hours" | Distance/time tags animate onto the second (right) motorcycle |
| 4 | 11.34–14.70 | "The question is asking us to find the speed of the first motorcycle." | State the unknown | First (left) motorcycle | Question-mark badge pulses over the first motorcycle |
| 5 | 14.94–21.94 | "Now, because the ratio is five is to six, we can take the two speeds as five x and six x. So first motorcycle speed is five times," | Convert ratio into algebraic terms | "5x", "6x" | Illustration labels swap to "5x" / "6x" under each motorcycle |
| 6 | 22.30–24.66 | "second motorcycle speed is six times." | Complete the algebraic setup | "6x" | Label settles; transition cue toward pinned/solution phase |
| 7 | 24.92–30.84 | "Now, let us calculate the actual speed of the second motorcycle. We know that speed is equal to distance divided by time." | State the formula to be used | Formula "Speed = Distance ÷ Time" | Given card enters (center) |
| 8 | 31.18–34.52 | "So speed of the second motorcycle is three hundred sixty divided by three." | Apply the formula with real numbers | "360 ÷ 3" | Step 1 card enters; numbers reveal word-by-word |
| 9 | 34.88–39.50 | "That gives us one hundred twenty kilometer per hour. Now compare this with the ratio value." | Get actual second-motorcycle speed | "= 120 km/hr" | Result reveals inside Step 1 card |
| 10 | 39.88–45.24 | "Second motorcycle speed is six x, and actual second motorcycle speed is one hundred twenty. So six" | Bridge algebra ↔ arithmetic | "6x", "120" | Step 2 card enters, Step 1 morphs to stack |
| 11 | 45.68–56.16 | "x is equal to one hundred twenty. After solving this, x is equal to twenty. Now we need the speed of the first motorcycle. First motorcycle speed is five x, and x equal to twenty." | Solve for x, pivot to the actual question | "6x = 120", "x = 20" | Equation solves live; Step 3 card enters, Step 2 morphs to stack |
| 12 | 56.56–58.44 | "So five x is equal to five into twenty." | Substitute x into first motorcycle's speed | "5x = 5 × 20" | Substitution reveals inside Step 3 card |
| 13 | 58.84–61.02 | "That gives us one hundred kilometer per hour." | Deliver the final numeric answer | "= 100 km/hr" | Answer highlighted in Step 3 card |
| 14 | 61.38–64.14 | "So the final answer will be one hundred kilometer per hour." | Confirm/restate the answer | "100 km/hr" | Step 3 card holds, answer stays emphasized |
| 15 | 64.66–68.16 | "Hence, option B, one hundred kilometer per hour is correct." | Match answer to the MCQ option | Option B | Options grid reveals, option B pulses green |

---

## PART 2: Scene-by-Scene Storyboard

### SCENE 1 — Hero Question Reveal
- **TIMESTAMP:** 0.0 – 2.74s
- **VOICEOVER:** "So welcome back again. Time for one more problem."
- **VISUAL OBJECTIVE:** Establish the question card as the anchor of the video; calm, confident open.
- **SCREEN LAYOUT:** `#q-full-card` centered horizontally, starting lowered (per Phase-1 hero pattern), background: dotted-grid + bottomStrip + topic name + logo already visible statically.
- **ON-SCREEN ELEMENTS:** `QuestionCard` (full, 1500px wide) containing the full question text with "5 : 6", "360 km", "3 hours" in `--primary` blue via `<span class="num">`; `SerialNum` badge ("Q") top-left, moving in tandem with the card.
- **ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 2.74)` — card fades/scales in lowered at 0.3s, holds, then rises to resting position exactly at 2.74s (end of the opening line). Serial badge mirrors the same y-offset/rise via the parallel tween pattern from `template.html` (pop-in at 0.8s, rise at 2.74s).
- **CAMERA MOVEMENT:** None (static frame, motion carried by element transforms only).
- **TRANSITIONS:** None yet — this is the opening beat.
- **EDUCATIONAL PURPOSE:** Let the viewer read the full question before any solving begins.
- **VISUAL HIERARCHY:** QuestionCard > SerialNum > background layers.
- **ATTENTION MANAGEMENT:** Nothing else on screen competes with the question text.
- **MOTION NOTES:** Rise must land exactly on "problem." (2.74s) so the settle reads as punctuation to the sentence.

---

### SCENE 2 — Ratio Established
- **TIMESTAMP:** 3.32 – 7.08s
- **VOICEOVER:** "Now, in this problem, the speeds of two motorcycles are given in the ratio five is to six."
- **VISUAL OBJECTIVE:** Introduce the two-motorcycle illustration and the 5:6 ratio as the core given fact.
- **SCREEN LAYOUT:** `#illustration` area (centered, below question card, per `template.html` illustration slot: left:50%, top:480px, width:1400px).
- **ON-SCREEN ELEMENTS:** Two flat 2D motorcycle silhouettes (left = "Motorcycle 1", right = "Motorcycle 2") facing right, with a "5 : 6" ratio chip between them in `--primary` blue.
- **ANIMATION DETAILS:** Motorcycles fade/scale in with `apt.cardEnter`-style motion (y:40→0, scale:0.92→1, 0.55s) staggered ~0.15s apart, starting at 3.32s. Ratio chip pops in at 5.879s (word "ratio" timestamp) with `apt.emphasize`-style scale pulse once, landing by 7.08s ("six.").
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Continuation of Scene 1 — question card stays pinned at its Phase-1 resting position throughout.
- **EDUCATIONAL PURPOSE:** Give a concrete mental image of "two motorcycles, ratio 5:6" before numbers are added.
- **VISUAL HIERARCHY:** Question card (top) > illustration (middle) > ratio chip (accent).
- **ATTENTION MANAGEMENT:** Ratio chip highlighted in blue draws the eye immediately after motorcycles settle.
- **MOTION NOTES:** Object continuity — these two motorcycle silhouettes persist through Scene 3 and 4 without being replaced.

---

### SCENE 3 — Known Data (360 km in 3 hrs)
- **TIMESTAMP:** 7.54 – 10.96s
- **VOICEOVER:** "The second motorcycle covers three hundred sixty kilometer in three hours."
- **VISUAL OBJECTIVE:** Attach the known distance/time values to the second (right) motorcycle.
- **SCREEN LAYOUT:** Same illustration row; a small label stack appears directly beneath the right-hand motorcycle.
- **ON-SCREEN ELEMENTS:** "360 km" and "3 hours" tags in `--primary` blue, stacked or inline beneath Motorcycle 2.
- **ANIMATION DETAILS:** Each tag fades in individually — "360 km" at 8.84s (word "three hundred sixty" start), "3 hours" at 10.42s (word "three" of "three hours") — plain opacity fade, 0.25s each, matching the `apt.textReveal` word-level pacing style used later for solution cards.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Direct continuation — no card exits.
- **EDUCATIONAL PURPOSE:** Visually anchor the only numeric data point given in the problem to the illustration.
- **VISUAL HIERARCHY:** Motorcycle 2 + its tags now the most detailed element on screen.
- **ATTENTION MANAGEMENT:** Tags appear directly under Motorcycle 2 so the eye doesn't have to travel.
- **MOTION NOTES:** Motorcycle 1 remains bare (no tags) — reinforces that its speed is the unknown.

---

### SCENE 4 — The Unknown
- **TIMESTAMP:** 11.34 – 14.70s
- **VOICEOVER:** "The question is asking us to find the speed of the first motorcycle."
- **VISUAL OBJECTIVE:** Flag Motorcycle 1's speed as the target of the whole video.
- **SCREEN LAYOUT:** Same illustration row.
- **ON-SCREEN ELEMENTS:** A "?" badge (using the existing `--primary` chip style, not a new component) appears above Motorcycle 1.
- **ANIMATION DETAILS:** `apt.emphasize`-style pop (scale 1→1.1 yoyo, 0.3s) on the "?" badge starting at 13.319s (word "first").
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** None — direct hold from Scene 3.
- **EDUCATIONAL PURPOSE:** Make the goal of the video explicit and visually locked to Motorcycle 1.
- **VISUAL HIERARCHY:** "?" badge is now the single accent draw against the otherwise-settled illustration.
- **ATTENTION MANAGEMENT:** Only one new element enters — no competition.
- **MOTION NOTES:** The "?" badge persists (fades out only once its content is replaced by "5x" in Scene 5) — continuity, not a hard cut.

---

### SCENE 5 — Ratio → Algebra (5x, 6x)
- **TIMESTAMP:** 14.94 – 24.66s
- **VOICEOVER:** "Now, because the ratio is five is to six, we can take the two speeds as five x and six x. So first motorcycle speed is five times, second motorcycle speed is six times."
- **VISUAL OBJECTIVE:** Convert the illustration's ratio into working algebraic variables.
- **SCREEN LAYOUT:** Same illustration row; "?" over Motorcycle 1 crossfades into "5x"; a matching "6x" tag appears over Motorcycle 2 (replacing/joining the 360 km/3 hr tags, which shift slightly to make room).
- **ON-SCREEN ELEMENTS:** "5x" label (Motorcycle 1), "6x" label (Motorcycle 2), both `--primary` blue.
- **ANIMATION DETAILS:** "5x" crossfades in at 18.539s (word "five" of "five x"), "6x" crossfades in at 19.359s (word "six" of "six x"). Simple `apt.fadeIn`/`fadeOut` crossfade pair, 0.25s each — no new animation invented.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** This scene ends Phase 1. At 16.5s, `apt.fadeOut(tl, "#phase1", 16.5)` begins the exit of the full question card + hero illustration together (illustration keeps animating right up to the fade).
- **EDUCATIONAL PURPOSE:** This is the algebraic pivot the entire solution depends on — ratio 5:6 becomes 5x/6x.
- **VISUAL HIERARCHY:** "5x"/"6x" labels are the last things visible before the phase cut.
- **ATTENTION MANAGEMENT:** No new elements after 19.84s — narration coasts to the phase boundary while labels hold.
- **MOTION NOTES:** These exact "5x"/"6x" values are what the pinned Given card restates next — visual/verbal continuity across the phase cut.

---

### SCENE 6 — Pinned Question + Given Card
- **TIMESTAMP:** 17.0 – 24.9s (card enters at 17.3s, overlapping the tail of Scene 5's Phase-1 fade for a smooth handoff; fully replaces Phase 1 by 21.5s)
- **VOICEOVER:** (continuation of Scene 5's audio, plus lead-in to) "Now, let us calculate the actual speed of the second motorcycle. We know that speed is equal to distance divided by time." (24.92–30.84 spills into Scene 7)
- **VISUAL OBJECTIVE:** Pin the question small at top, restate the given ratio/algebra as a formal `SolutionCard`.
- **SCREEN LAYOUT:** `#q-pinned` (left:385px, top:30px, width:1275px) fades in at 17.0s; `#illus-pinned` (smaller motorcycle pair, left:280px, top:190px) fades in at 17.0s; `#card-given` `.solution-card` enters center (left:640px, top:480px) at 17.3s.
- **ON-SCREEN ELEMENTS:** `solutionChip` "Given"; `.math` content:
  - `Speed₁ : Speed₂ = 5 : 6` (line-level reveal)
  - `Speed₁ = 5x` `Speed₂ = 6x` (word-level reveal)
- **ANIMATION DETAILS:** `apt.fadeIn(tl, "#q-pinned", 17.0)`, `apt.fadeIn(tl, "#illus-pinned", 17.0)`, `apt.cardEnter(tl, "#card-given .solution-card", 17.3)`, then `apt.textReveal(tl, "#card-given .math")` firing each `.rv` at: ratio line at 17.039 (line-level, ties to "we can take the two speeds"), "5x" at 18.539/18.939, "and" skip, "6x" at 19.359/19.76, "5 times" restatement at 21.68 (word "times,"), "6 times" restatement at 24.279 (word "times.").
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Phase 1 → Phase 2 cut via `apt.fadeOut(tl, "#phase1", 16.5)` overlapping the Given card's entrance — no jarring hard cut.
- **EDUCATIONAL PURPOSE:** Formalize the ratio/algebra setup as the first "Given" fact block before arithmetic starts.
- **VISUAL HIERARCHY:** Pinned question (small, top) > Given SolutionCard (center, primary focus) > pinned illustration (supporting, smaller).
- **ATTENTION MANAGEMENT:** Given card is the only large, high-contrast element in the frame.
- **MOTION NOTES:** Question pinned from this point onward per design-system rule (Phase 2+).

---

### SCENE 7 — Step 1: Actual Speed of Second Motorcycle
- **TIMESTAMP:** 24.9 – 39.5s (morph from Given at 24.9s → 25.7s; Step 1 card enters 25.9s)
- **VOICEOVER:** "Now, let us calculate the actual speed of the second motorcycle. We know that speed is equal to distance divided by time. So speed of the second motorcycle is three hundred sixty divided by three. That gives us one hundred twenty kilometer per hour."
- **VISUAL OBJECTIVE:** Apply Speed = Distance ÷ Time to get the second motorcycle's real speed.
- **SCREEN LAYOUT:** `#card-given .solution-card` morphs into `#stack-given .stack-card` (left column, `G` step-circle) at 24.9s; `#card-step1 .solution-card` enters center at 25.9s.
- **ON-SCREEN ELEMENTS:** `solutionChip` "Step 1"; `.math` content:
  - `Speed = Distance ÷ Time` (line-level)
  - `Speed₂ = 360 ÷ 3` (word-level, highlighted numbers)
  - `= 120 km/hr` (word-level, `.ans` styled)
- **ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 24.9)` (0.8s, built-in). `apt.cardEnter(tl, "#card-step1 .solution-card", 25.9)`. `apt.textReveal(tl, "#card-step1 .math")` firing: formula line at 28.099 ("We know that speed is equal to..."), "360" at 32.739, "÷" at 33.559 (word "divided"), "3" at 34.279, "=" at 34.88, "120 km/hr" at 35.479/35.639/36.0/36.36/36.88/37.059 (each word of the value/unit).
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** `apt.morphToStack` (0.8s) — the standard card→stack morph, no exceptions.
- **EDUCATIONAL PURPOSE:** Establish the concrete numeric speed of the known motorcycle before bridging to algebra.
- **VISUAL HIERARCHY:** Step 1 card (center) > Given stack card (left, now smaller/collapsed) > pinned question/illustration.
- **ATTENTION MANAGEMENT:** Given card's exit is a smooth morph, not a hard cut, keeping continuity as attention shifts to Step 1.
- **MOTION NOTES:** `120 km/hr` is the pivotal number carried into Scene 8 — hold it emphasized via the plain `.ans` styling already defined (no extra pulse layered on top, per design.md rule).

---

### SCENE 8 — Step 2: Solve for x
- **TIMESTAMP:** 39.5 – 50.5s (morph from Step 1 at 39.5s → 40.3s; Step 2 card enters 40.5s)
- **VOICEOVER:** "Now compare this with the ratio value. Second motorcycle speed is six x, and actual second motorcycle speed is one hundred twenty. So six x is equal to one hundred twenty. After solving this, x is equal to twenty."
- **VISUAL OBJECTIVE:** Bridge the algebraic "6x" from Scene 6 with the arithmetic "120 km/hr" from Scene 7 to solve for x.
- **SCREEN LAYOUT:** `#card-step1 .solution-card` morphs into `#stack-step1 .stack-card` (`1` step-circle, connector line `#line-g-1` grows) at 39.5s; `#card-step2 .solution-card` enters center at 40.5s.
- **ON-SCREEN ELEMENTS:** `solutionChip` "Step 2"; `.math` content:
  - `6x = 120` (word-level, `6x` and `120` highlighted)
  - `x = 20` (word-level, `.ans` styled)
- **ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 39.5)`; `apt.stackLineGrow(tl, "#line-g-1", 39.5)`. `apt.cardEnter(tl, "#card-step2 .solution-card", 40.5)`. `apt.textReveal(tl, "#card-step2 .math")` firing: "6x" at 40.719/41.079/41.54 ("speed is six x"), "=" at 42.06, "120" at 43.639/43.799/44.159 ("one hundred twenty"), then "x" at 45.68/45.939, "=" at 46.139, "20" at 46.259/46.419/46.759 ("equal to one hundred twenty" restated — actually value 20 spoken as "twenty" at 49.719, aligned precisely to the second "twenty" occurrence at 49.719).
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** `apt.morphToStack` (0.8s), paired with `apt.stackLineGrow` on the Given→Step1 connector.
- **EDUCATIONAL PURPOSE:** This is the algebraic solve — the crux calculation of the whole problem.
- **VISUAL HIERARCHY:** Step 2 card (center) > Step 1 + Given stack cards (left, connected by line) > pinned elements.
- **ATTENTION MANAGEMENT:** Connector line growing between G and 1 reinforces "these two facts combine to give this next result."
- **MOTION NOTES:** `x = 20` is the payoff of this scene, carried forward into Scene 9.

---

### SCENE 9 — Step 3: Speed of First Motorcycle
- **TIMESTAMP:** 50.5 – 61.4s (morph from Step 2 at 50.5s → 51.3s; Step 3 card enters 51.5s)
- **VOICEOVER:** "Now we need the speed of the first motorcycle. First motorcycle speed is five x, and x equal to twenty. So five x is equal to five into twenty. That gives us one hundred kilometer per hour."
- **VISUAL OBJECTIVE:** Substitute x = 20 into the first motorcycle's speed expression to get the final answer.
- **SCREEN LAYOUT:** `#card-step2 .solution-card` morphs into `#stack-step2 .stack-card` (`2` step-circle, connector `#line-1-2` grows) at 50.5s; `#card-step3 .solution-card` enters center at 51.5s.
- **ON-SCREEN ELEMENTS:** `solutionChip` "Step 3"; `.math` content:
  - `Speed₁ = 5x` (line-level)
  - `5x = 5 × 20` (word-level, highlighted)
  - `= 100 km/hr` (word-level, `.ans` styled)
- **ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 50.5)`; `apt.stackLineGrow(tl, "#line-1-2", 50.5)`. `apt.cardEnter(tl, "#card-step3 .solution-card", 51.5)`. `apt.textReveal(tl, "#card-step3 .math")` firing: "Speed₁ = 5x" line at 52.919 ("First motorcycle speed is five x"), "5x" at 56.699/57.0, "=" at 57.099, "5" at 57.639, "×" at 57.839 (word "into"), "20" at 58.099, "=" at 58.84, "100 km/hr" at 59.459/59.619/59.959/60.52/60.68 (each word of "one hundred kilometer per hour").
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** `apt.morphToStack` (0.8s), paired with `apt.stackLineGrow` on the Step1→Step2 connector.
- **EDUCATIONAL PURPOSE:** Deliver the final numeric answer via direct substitution — the climax of the solve.
- **VISUAL HIERARCHY:** Step 3 card (center, holds through the confirmation line) > full left stack (Given, Step 1, Step 2, connected).
- **ATTENTION MANAGEMENT:** `.ans` "100 km/hr" is the single most emphasized text on screen once revealed.
- **MOTION NOTES:** Step 3 card does NOT morph away immediately — it holds through the confirmation narration (61.38–64.14, "So the final answer will be one hundred kilometer per hour") before morphing to stack, per the "card stays until narration finishes explaining it" rule.

---

### SCENE 10 — Options Reveal
- **TIMESTAMP:** 61.5 – 68.16s
- **VOICEOVER:** "So the final answer will be one hundred kilometer per hour. Hence, option B, one hundred kilometer per hour is correct."
- **VISUAL OBJECTIVE:** Map the solved value (100 km/hr) onto the multiple-choice options and confirm B as correct.
- **SCREEN LAYOUT:** `#card-step3 .solution-card` morphs into `#stack-step3 .stack-card` (`3` step-circle, connector `#line-2-3` grows) at 61.5s; pinned question recenters via `apt.recenterForOptions` at 61.7s (pinned illustration fades out same time); `#options-reveal` (`.pinned-col`, 2×2 grid) fades in at 62.5s.
- **ON-SCREEN ELEMENTS:** Full left stack (G, 1, 2, 3 — all connected by grown lines); options grid: A) 80 km/hr, B) 100 km/hr, C) 90 km/hr, D) 120 km/hr.
- **ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 61.5)`; `apt.stackLineGrow(tl, "#line-2-3", 61.5)`. `apt.fadeOut(tl, "#illus-pinned", 61.7)`; `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 61.7)`. `apt.fadeIn(tl, "#options-reveal", 62.5)`. `apt.optionsStagger(tl, ".opt-btn", 63.0)` (0.45s × 4, stagger 0.12s — lands well before "Hence" at 64.66). `apt.correctPulse(tl, ".opt-btn.correct", 65.52)` (aligned to the word "option" starting the "option B" phrase).
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Final `apt.morphToStack` completes the left stack; options grid fade-in is the last major transition of the video.
- **EDUCATIONAL PURPOSE:** Close the loop between the solved number and the MCQ format the viewer will actually see in an exam.
- **VISUAL HIERARCHY:** Option B (green, correct) > rest of options grid > left stack (fully visible, unfaded) > pinned question.
- **ATTENTION MANAGEMENT:** Correct-option pulse is timed to land exactly as the voiceover says "option B."
- **MOTION NOTES:** All four left-stack cards and their connector lines remain visible and continuous through this final scene — none are faded out, per design.md's explicit rule. Video holds on this state through 68.16s (end of audio) plus a short breathing tail.

---

## PART 3: Asset List Required

- No new SVG/PNG illustration assets beyond flat 2D motorcycle silhouettes (2×), which can be built as simple CSS/SVG shapes reusing the existing illustration pattern (no invented components).
- All text tags ("5 : 6", "360 km", "3 hours", "5x", "6x", "?") use existing `--primary` chip/label styling — no new visual components.
- Reuses `_template/assets/serial-num-badge.svg` and `_template/assets/logo.png` — no other shared assets needed.
- Options grid uses stock `.opt-btn` / `.opt-btn.correct` component — no new component.

## PART 4: Animation Complexity Notes

- Standard complexity — no custom animations required beyond the documented `animations.js` helpers.
- Every active→stack transition (Given→G, Step1→1, Step2→2, Step3→3) uses `apt.morphToStack` at 0.8s with a paired `apt.stackLineGrow` on the appropriate connector, fired at the same timestamp as the morph that lands the *lower* circle — per the rule in `design.md`.
- Illustration-phase tag reveals (Scenes 2–5) reuse the same plain-fade language as `apt.textReveal`/`apt.fadeIn` rather than inventing new easing/motion.
- Stack card gaps (`top` values for `#stack-given`, `#stack-step1`, `#stack-step2`, `#stack-step3`) and connector line `top`/`height` values must be measured against each card's actual rendered height during the build step (Step 5) — this storyboard intentionally does not hardcode guessed pixel values, per the README's explicit warning against copying numbers across questions.

## PART 5: Master Timeline Overview

```
TIME (s)   ELEMENT                              WHAT HAPPENS
─────────  ───────────────────────────────────  ──────────────────────────────────
0.0        Background layers                    Grid + strip + topic + logo visible
0.3        QuestionCard (full, lowered)          heroEnterLowered begins
0.8        SerialNum badge                       Pop-in (mirrors lowered position)
2.74       QuestionCard + SerialNum              Rise to resting position
3.32       Illustration (2 motorcycles)          Stagger fade-in + "5:6" ratio chip
7.54       "360 km" / "3 hours" tags             Fade in under Motorcycle 2
11.34      "?" badge                             Pops over Motorcycle 1
14.94      "?" → "5x" / "6x" labels               Crossfade over both motorcycles

[ END OF PHASE 1 ]
─────────  ───────────────────────────────────  ──────────────────────────────────
16.5       Phase 1 elements                      fadeOut
17.0       QuestionCard (pinned) + Illustration  fadeIn (smaller, pinned)
17.3       SolutionCard "Given"                  cardEnter (center) + textReveal

[ STEP CYCLE ]
─────────  ───────────────────────────────────  ──────────────────────────────────
24.9       Given card → Given stack (G)          morphToStack (0.8s)
25.9       SolutionCard "Step 1"                 cardEnter (center) + textReveal
─────
39.5       Step 1 card → Step 1 stack (1)        morphToStack (0.8s) + line G→1 grows
40.5       SolutionCard "Step 2"                 cardEnter (center) + textReveal
─────
50.5       Step 2 card → Step 2 stack (2)        morphToStack (0.8s) + line 1→2 grows
51.5       SolutionCard "Step 3"                 cardEnter (center) + textReveal

[ PHASE 3 — OPTIONS REVEAL ]
─────────  ───────────────────────────────────  ──────────────────────────────────
61.5       Step 3 card → Step 3 stack (3)        morphToStack (0.8s) + line 2→3 grows
61.7       Pinned illustration                   fadeOut; question recenters
62.5       options-reveal container              fadeIn
63.0       Option buttons A/B/C/D                optionsStagger (stagger 0.12s)
65.52      Option B (correct)                    correctPulse (highlight + scale)
~68.5      End                                   All elements remain visible, audio ends 68.16
```

---

**Compliance check against `_template/design.md` / `design-system.css` / `animations.js`:**
- ✅ Colors: only `--primary` (`#6373db`), `--primary-light` (`#e2e5ff`), `--success` (`#4eb85f`), `--topic` (`#949494`), `--text`/`--bg` used.
- ✅ Components: only `QuestionCard`, `SerialNum`, `SolutionCard`, `SolutionStackCard`, `solutionChip`, `step-circle`/`stack-line`, options grid/`opt-btn`, `logo`, `topic-name`, `bottomStrip`, plain illustration shapes — nothing invented.
- ✅ Animations: only `apt.heroEnterLowered`, `apt.cardEnter`, `apt.morphToStack` (0.8s, every card→stack transition), `apt.stackLineGrow`, `apt.textReveal`, `apt.fadeIn`/`fadeOut`, `apt.emphasize`, `apt.optionsStagger`, `apt.correctPulse`, `apt.recenterForOptions` — all sourced from `animations.js`.
- ✅ SerialNum badge stays fixed "Q" throughout (never the question number).
- ✅ Question pinned from Phase 2 onward; stack column persists and grows leftward; final options grid highlights B in green.
