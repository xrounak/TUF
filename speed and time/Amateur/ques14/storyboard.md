# Storyboard — Speed & Time / Amateur / ques14
**Question:** If a person walks at 20 km/hr instead of 15 km/hr, he travels 30 km more in the same time. The actual distance travelled is: (A) 100 km (B) 70 km (C) 80 km (D) 90 km — **Correct: D (90 km)**
**Duration:** ~83.78s (transcript.json)

---

## PART 1 — Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|-----------|-----------|---------------------|------------------|-------------------|
| 1 | 0.10–3.32 | "So welcome back again. Time for one more problem." | Intro hook | Center screen | Question card builds in, low then rises |
| 2 | 4.02–8.78 | "Imagine a person walking for the same number of hours in two different cases." | Frame the setup: same time, two cases | Question text | Question card fully visible, "same number of hours" concept |
| 3 | 9.34–14.02 | "In the first case, the person walks at fifteen kilometers per hour." | Give Case 1 speed | Illustration: walker 1 | Walking figure / road appears with 15 km/hr label |
| 4 | 14.64–19.34 | "In the second case, the person walks faster at twenty kilometers per hour." | Give Case 2 speed | Illustration: walker 2 | Second walking figure, faster pace, 20 km/hr label |
| 5 | 19.90–26.56 | "Because the person walks faster, the distance also becomes longer. The extra distance is thirty kilometers." | Establish the +30 km relationship | Illustration: distance gap | Extra-distance segment highlighted between the two roads |
| 6 | 26.92–29.52 | "We need to find the distance covered in the first case." | State the goal | Question text | Question card, target unknown emphasized |
| 7 | 29.98–39.16 | "Let us call this distance d kilometers... so it becomes d plus thirty." | Define variable D | Given card | Given card enters: D and D+30 |
| 8 | 39.86–45.78 | "Now look at the important clue. The time is the same. Time is equal to distance divided by speed." | Recall time formula | Step 1 card | Step 1 card enters: T = Dist/Speed |
| 9 | 46.18–52.32 | "For the first case, time is d divided by fifteen. For the second case, time is d plus thirty divided by twenty." | Build both time expressions | Step 1 card (fractions) | Two fractions d/15 and (d+30)/20 reveal |
| 10 | 52.78–58.80 | "Since both times are equal, we can write d/15 = (d+30)/20." | Form the equation | Step 1 card equation | Equation d/15 = (d+30)/20 completes, morphs to stack |
| 11 | 59.24–71.80 | "Now cross multiply. Twenty d is equal to fifteen multiplied by d plus thirty... twenty d is equal to fifteen d plus four hundred fifty. Now subtract fifteen d from both sides." | Solve step: cross-multiply & expand | Step 2 card | Step 2 card: 20d = 15(d+30) → 20d = 15d + 450 |
| 12 | 72.26–77.90 | "Five d is equal to four hundred fifty. Divide both sides by five. d is equal to ninety." | Solve step: isolate d | Step 3 card | Step 3 card: 5d = 450 → d = 90 |
| 13 | 77.90–83.78 | "So the actual distance traveled is ninety kilometers. The correct answer is option d, ninety kilometers." | Reveal final answer | Options grid | Options reveal, D highlighted green |

---

## PART 2 — Scene-by-Scene Storyboard

### SCENE 1 — Question Reveal
**TIMESTAMP:** 0.0 – 3.6s (rise) → holds to ~26.5s
**VOICEOVER:** "So welcome back again... imagine a person walking for the same number of hours in two different cases..."
**VISUAL OBJECTIVE:** Establish the question and set up the two-case walking scenario.
**SCREEN LAYOUT:** `q-full-card` centered top (1500px wide), `SerialNum` badge top-left overlap, illustration band centered below at top:480px.
**ON-SCREEN ELEMENTS:** QuestionCard containing: "If a person walks at <span class='num'>20 km/hr</span> instead of <span class='num'>15 km/hr</span>, he travels <span class='num'>30 km</span> more in the same time. The actual distance travelled is:" — numbers 20 km/hr, 15 km/hr, 30 km in `--primary`. TopicName "Speed and Time" bottom-left, logo bottom-right, bottomStrip, dottedGrid.
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.6)` — card starts 180px lower + opacity 0, rises to rest at RISE_TIME=3.6s (end of "Time for one more problem."). SerialNum badge parallel tween: `fromTo` scale/rotation/opacity at t=0.8s, then `to y:0` at t=3.6s matching card rise.
**CAMERA MOVEMENT:** None (static frame, motion is internal to elements).
**TRANSITIONS:** None yet — this is scene 1.
**EDUCATIONAL PURPOSE:** Anchor the full problem statement before decomposing it.
**VISUAL HIERARCHY:** QuestionCard > illustration > topic/logo (background chrome).
**ATTENTION MANAGEMENT:** Blue-highlighted numbers guide the eye to the three key values (20, 15, 30) as they're spoken.
**MOTION NOTES:** Illustration (walker figures) builds in starting ~9.3s (Case 1) and ~14.6s (Case 2), per Scene 2 below — nested inside the same Phase 1 clip.

### SCENE 2 — Illustration: Two Walking Cases
**TIMESTAMP:** 9.34s – 26.56s
**VOICEOVER:** "In the first case, the person walks at fifteen kilometers per hour... In the second case, the person walks faster at twenty kilometers per hour... the distance also becomes longer. The extra distance is thirty kilometers."
**VISUAL OBJECTIVE:** Show two parallel road segments — a shorter one for 15 km/hr and a longer one (by the extra 30 km) for 20 km/hr — so the "extra distance" is visually obvious before the algebra starts.
**SCREEN LAYOUT:** `#illustration` div, left:50% transform:translateX(-50%), top:480px, width:1400px, height:300px, flex row.
**ON-SCREEN ELEMENTS:** Two horizontal road/track bars stacked vertically: top bar labeled "15 km/hr" (shorter length), bottom bar labeled "20 km/hr" (longer length) with the extra segment visually distinct (e.g. a lighter fill or bracket) labeled "+30 km". A simple walking-figure icon travels along each bar (flat 2D style, built from CSS shapes matching the design system's minimal aesthetic — no invented illustration components beyond basic shapes/labels already implied by `.illustration`).
**ANIMATION DETAILS:** Road bar 1 + walker fade/slide in at 9.34s (`apt.cardEnter`-style fromTo: y:20,opacity:0 → y:0,opacity:1, 0.55s, back.out(1.4)). Road bar 2 + walker fade/slide in at 14.64s, same pattern, visibly longer bar. Extra-distance bracket + "+30 km" label fades in at 19.90s once "distance also becomes longer" is spoken, with the numeric label itself appearing at 25.64s on "thirty kilometers".
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Whole illustration fades out with `#phase1` via `apt.fadeOut(tl, "#phase1", 21.5)`-equivalent (adjusted start, see Master Timeline) once Phase 2 begins.
**EDUCATIONAL PURPOSE:** Concretizes the abstract "extra distance" relationship before it becomes an algebraic D + 30 term.
**VISUAL HIERARCHY:** Road bars equal weight; "+30 km" bracket is the payoff, drawn in `--primary`.
**ATTENTION MANAGEMENT:** Sequential reveal (bar 1 → bar 2 → bracket) mirrors narration order exactly.
**MOTION NOTES:** No bounce/scale flourishes beyond the standard cardEnter-style ease — keep it minimal per "flat 2D, clean modern" brief.

### SCENE 3 — Pinned Question + Given Card
**TIMESTAMP:** ~27.0s – 39.16s
**VOICEOVER:** "We need to find the distance covered in the first case. Let us call this distance d kilometers. So the first distance is d, the second distance is thirty kilometers more, so it becomes d plus thirty."
**VISUAL OBJECTIVE:** Transition from full question to pinned (Phase 2) and introduce the variable D via the Given card.
**SCREEN LAYOUT:** `#q-pinned` (`.q-card.pinned`, left:385px, top:30px, width:1275px) fades in; `#illus-pinned` (left:280px, top:190px, width:1300px, height:210px) shows shrunk version of the two road bars; `#card-given .solution-card` centered at left:640px, top:480px.
**ON-SCREEN ELEMENTS:** Pinned QuestionCard (shortened text). Given card: chip "Given", math lines "First case distance = D", "Second case distance = D + 30".
**ANIMATION DETAILS:** `apt.fadeOut(tl, "#phase1", 26.6)`; `apt.fadeIn(tl, "#q-pinned", 27.0)`; `apt.fadeIn(tl, "#illus-pinned", 27.0)`; `apt.cardEnter(tl, "#card-given .solution-card", 29.98)`; `apt.textReveal(tl, "#card-given .math")` with `.rv` spans: line-level "First case distance =" at t=29.98, word-level "D" at t=31.7 (approx from "Let us call this distance d kilometers" ending), line-level "Second case distance =" at t=32.40, word-level "D" "+" "30" at t≈32.40/37.04/37.6 (from "the second distance is thirty kilometers more... d plus thirty").
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Standard fadeIn/cardEnter — no morph yet (Given is the first card).
**EDUCATIONAL PURPOSE:** Anchors the unknown D before the equation is built.
**VISUAL HIERARCHY:** Pinned question small at top, Given card dominant center.
**ATTENTION MANAGEMENT:** D and D+30 highlighted (`.hi`) in primary blue.
**MOTION NOTES:** Given card stays on screen until narration finishes at 39.16s, then morphs to stack at Scene 4 start.

### SCENE 4 — Step 1: Time Formula & Equation
**TIMESTAMP:** 39.16s (morph) → 58.80s
**VOICEOVER:** "Now look at the important clue. The time is the same. Time is equal to distance divided by speed. For the first case, time is d divided by fifteen. For the second case, time is d plus thirty divided by twenty. Since both times are equal, we can write d divided by fifteen is equal to d plus thirty divided by twenty."
**VISUAL OBJECTIVE:** Build the core equation d/15 = (d+30)/20 piece by piece.
**SCREEN LAYOUT:** Given card morphs to `#stack-given .stack-card` (left:100px, top:140px, `.step-circle` "G"). Step 1 active card enters at left:640px, top:460px (or adjusted per measured height).
**ON-SCREEN ELEMENTS:** Step 1 chip "Step 1". Math: line "Time = Distance ÷ Speed" (line-level reveal), then fraction `d/15` (using `.frac`: top "d", bottom "15"), "=" , fraction `(d+30)/20` (top "d + 30", bottom "20").
**ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 39.16)`. `apt.cardEnter(tl, "#card-step1 .solution-card", 39.86)`. `apt.textReveal(tl, "#card-step1 .math")` with `.rv`: line "Time = Distance ÷ Speed" at t=41.54 (word-level: "Time"41.54 "="42.6 "Distance"43.14 "÷"44.0 "Speed"45.0 — approximated from transcript words in that phrase), fraction `d/15` at t=46.18, "=" at 48.5, fraction `(d+30)/20` at t=49.5. Final equation line "d/15 = (d+30)/20" (word/frac-level) at t=52.78.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** morphToStack (0.8s, power2.inOut) — position slide + bg color change white→`#e2e5ff`.
**EDUCATIONAL PURPOSE:** Connects the time-formula concept to the concrete equation the student will solve.
**VISUAL HIERARCHY:** Fractions emphasized via `.frac` component, `.hi` on d, 15, d+30, 20.
**ATTENTION MANAGEMENT:** Sequential fraction build mirrors "first case... second case... since both are equal" narration order.
**MOTION NOTES:** Card stays until 58.80s narration ends, then morphs into Scene 5.

### SCENE 5 — Step 2: Cross-Multiply
**TIMESTAMP:** 58.80s (morph) → 71.80s
**VOICEOVER:** "Now cross multiply. Twenty d is equal to fifteen multiplied by d plus thirty. Opening the bracket gives twenty d is equal to fifteen d plus four hundred fifty. Now subtract fifteen d from both sides."
**VISUAL OBJECTIVE:** Show the cross-multiplication and expansion.
**SCREEN LAYOUT:** Step 1 morphs to `#stack-step1` (top:290px, `.step-circle` "1"), connector `#line-g-1` grows between G and 1. Step 2 active card center, left:600–640px, top:440px, width:720px.
**ON-SCREEN ELEMENTS:** Chip "Step 2". Math: "20d = 15(d + 30)" → "20d = 15d + 450" → subtraction annotation.
**ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 58.80)`; `apt.stackLineGrow(tl, "#line-g-1", 58.80)`; `apt.cardEnter(tl, "#card-step2 .solution-card", 59.24)`; `apt.textReveal(tl, "#card-step2 .math")` word-level spans aligned to transcript words "Twenty"(59.24) "d"(59.6) "is"(59.8) "equal"(60.0) "to"(60.3) "fifteen"(60.5) ... building "20d = 15(d+30)" by ~64.5s; second line "20d = 15d + 450" word-aligned to "twenty d is equal to fifteen d plus four hundred fifty" (~65.0–69.5s); annotation "− 15d both sides" at t≈70.5 ("subtract fifteen d from both sides").
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** morphToStack (0.8s).
**EDUCATIONAL PURPOSE:** Walks through algebraic manipulation transparently, one micro-step at a time.
**VISUAL HIERARCHY:** `.hi` on 20d, 15(d+30), 450.
**ATTENTION MANAGEMENT:** Each new term appears exactly as spoken, avoiding getting ahead of narration.
**MOTION NOTES:** No new animation types — reuse `apt.textReveal` cadence.

### SCENE 6 — Step 3: Solve for D
**TIMESTAMP:** 71.80s (morph) → 77.90s
**VOICEOVER:** "Five d is equal to four hundred fifty. Divide both sides by five. d is equal to ninety."
**VISUAL OBJECTIVE:** Isolate and reveal d = 90.
**SCREEN LAYOUT:** Step 2 morphs to `#stack-step2` (top:460px, `.step-circle` "2"), connector `#line-1-2` grows. Step 3 active card center, left:580px, top:420px, width:760px.
**ON-SCREEN ELEMENTS:** Chip "Step 3". Math: "5d = 450" → "d = 450 ÷ 5" → answer "d = 90 km" in `.ans`.
**ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 71.80)`; `apt.stackLineGrow(tl, "#line-1-2", 71.80)`; `apt.cardEnter(tl, "#card-step3 .solution-card", 72.26)`; `apt.textReveal(tl, "#card-step3 .math")`: word-level "Five"(72.26) "d"(72.5) "is"(72.65) "equal"(72.8) "to"(73.0) "four hundred fifty"(73.14, `.hi`) for line 1; line-level "Divide both sides by five" at t=74.54; word-level "d"(76.4) "is"(76.6) "equal"(76.8) "to"(77.0) "ninety"(77.10, `.ans`) for final answer line.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** morphToStack (0.8s).
**EDUCATIONAL PURPOSE:** Delivers the numeric answer via the same explained mechanics used for every prior step.
**VISUAL HIERARCHY:** "90" in `.ans` styling, largest visual weight in the card.
**ATTENTION MANAGEMENT:** Answer is the clear terminal point of this card before options reveal.
**MOTION NOTES:** Card holds to 77.90s.

### SCENE 7 — Options Reveal
**TIMESTAMP:** 77.90s → end (83.78s)
**VOICEOVER:** "So the actual distance traveled is ninety kilometers. The correct answer is option d, ninety kilometers."
**VISUAL OBJECTIVE:** Recenter and reveal the 2×2 options grid with D highlighted green.
**SCREEN LAYOUT:** Step 3 morphs to `#stack-step3` (top:660px, `.step-circle` "3"), connector `#line-2-3` grows. `#illus-pinned` fades out; `apt.recenterForOptions` shifts `#q-pinned` (xShift:160, yShift:180). `#options-reveal` on `.pinned-col` top:400px.
**ON-SCREEN ELEMENTS:** Options grid: A) 100 km, B) 70 km, C) 80 km, D) 90 km (correct, green).
**ANIMATION DETAILS:** `apt.fadeOut(tl, "#illus-pinned", 77.60)`; `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 77.60)`; `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 77.60)`; `apt.stackLineGrow(tl, "#line-2-3", 77.60)`; `apt.fadeIn(tl, "#options-reveal", 78.20)`; `apt.optionsStagger(tl, ".opt-btn", 78.60)`; `apt.correctPulse(tl, ".opt-btn.correct", 80.60)` (timed to "option d, ninety kilometers" at 81.5–83.78s — pulse begins slightly before "option d" lands for a satisfying sync).
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Final morph + fade; all stack cards/lines remain visible (never faded).
**EDUCATIONAL PURPOSE:** Confirms the correct answer, closing the loop from unknown D to final option match.
**VISUAL HIERARCHY:** Option D green background dominates; other options recede in plain white/black.
**ATTENTION MANAGEMENT:** `correctPulse` draws the eye precisely as "option d" is spoken.
**MOTION NOTES:** End frame holds all elements static (stack cards + question + options) — no fade-out, video ends on the resolved state.

---

## PART 3 — Asset List Required

- No new illustration image assets strictly required — Scene 2's two road bars + walking figures can be built with pure CSS/DOM shapes (rectangles for roads, simple circle+line figure or a minimal flat-2D walker icon) consistent with `.illustration` container conventions, matching the "flat 2D illustrations" brief without inventing new component classes.
- Standard template assets only: `serial-num-badge.svg`, `logo.png` (from `_template/assets/`).
- No custom fonts, colors, or component classes beyond `design-system.css`.

## PART 4 — Animation Complexity Notes

- Reuses every helper already in `animations.js`: `apt.heroEnterLowered`, `apt.serialEnter`-equivalent parallel tween, `apt.fadeIn`/`fadeOut`, `apt.cardEnter`, `apt.textReveal`, `apt.morphToStack` (×4, for Given→Step1→Step2→Step3→stack), `apt.stackLineGrow` (×3), `apt.recenterForOptions`, `apt.optionsStagger`, `apt.correctPulse`.
- Only 3 solution steps (Given + Step1 + Step2 + Step3 = 4 stack cards total, matching template's 4-card pattern exactly) — no new card types needed.
- Illustration in Scene 2 is the only "custom" visual content; kept intentionally simple (two horizontal bars + walker icons) to avoid inventing new animation types — uses the same fromTo fade/slide pattern as `apt.cardEnter`.
- All `.rv` word-level timestamps above are derived from `transcript.json` phrase windows; exact per-word `data-t` values should be pulled directly from `transcript.json`'s `words` array during HTML build (Step 5), not estimated further at build time.

## PART 5 — Master Timeline Overview

```
TIME (s)   ELEMENT                          WHAT HAPPENS
─────────  ───────────────────────────────  ─────────────────────────────────
0.0        Background layers                Checker grid + dotted grid visible
0.0        bottomStrip + topic + logo       Always visible
0.0        QuestionCard (lowered)           heroEnterLowered starts
0.8        SerialNum badge                  pops in (lowered position)
3.6        QuestionCard + badge             rise to resting position
9.34       Illustration: road bar 1 (15)    fades/slides in
14.64      Illustration: road bar 2 (20)    fades/slides in
19.90      Extra-distance bracket           fades in
25.64      "+30 km" label                   fades in

[ END OF PHASE 1 ]
26.6       Phase 1                          fadeOut
27.0       QuestionCard (pinned)            fadeIn
27.0       Illustration (pinned)            fadeIn
29.98      Given card                       cardEnter + textReveal (D, D+30)

[ STEP CYCLE ]
39.16      Given → Given stack              morphToStack (0.8s)
39.86      Step 1 card                      cardEnter + textReveal (equation)
58.80      Step 1 → Step 1 stack            morphToStack + line-g-1 grows
59.24      Step 2 card                      cardEnter + textReveal (cross-mult)
71.80      Step 2 → Step 2 stack            morphToStack + line-1-2 grows
72.26      Step 3 card                      cardEnter + textReveal (solve d)

[ PHASE 3 — OPTIONS REVEAL ]
77.60      Illustration pinned              fadeOut
77.60      QuestionCard                     recenterForOptions
77.60      Step 3 → Step 3 stack            morphToStack + line-2-3 grows
78.20      options-reveal container         fadeIn
78.60      Option buttons A/B/C/D           optionsStagger
80.60      Option D (correct)               correctPulse
83.78      End                              All elements remain visible
```
