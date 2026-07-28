# Storyboard — Flight Delay (Speed & Time, Amateur, Ques19)

Question: In a 900 km flight, bad weather reduced the average speed by 300 km/hr and increased time by 30 minutes. The original duration is:
A) 2 hours  B) 1 hour ✅  C) 1.5 hours  D) 2.5 hours

---

## PART 1: Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|-----------|-----------|---------------------|------------------|-------------------|
| 1 | 0.12–8.15 | "So welcome back again... we are given a flight of nine hundred kilometer." | Hook + establish distance | Question card, opening | QuestionCard fades in large; plane icon appears at rest |
| 2 | 8.15–16.64 | "Bad weather reduces the average speed by three hundred kilometer per hour... flight takes thirty minutes more." | Establish the two changing quantities (speed drop, time gain) | Plane slowing down, clock ticking extra | Plane visibly decelerates; a "+30 min" label pulses near a clock icon |
| 3 | 17.28–22.86 | "Now, thirty minutes means half an hour, so we will write thirty minutes as zero point five hour." | Unit conversion (30 min → 0.5 hr) | The "30 min" label morphing to "0.5 hr" | Small inline conversion beat on the same clock label |
| 4 | 23.58–33.60 | "The question is asking us to find the original duration... how much time was taken by the flight?" | State the goal (find original time, not speed) | Question card (now pinned) | Phase 1 → Phase 2 transition; Given card appears |
| 5 | 34.14–48.82 | "Let the actual speed be x... time is equal to distance by speed... time will be nine hundred by x." | Define variable + original-time formula | Step 1 card, math build-up | `t = 900/x` assembles term by term |
| 6 | 49.36–74.42 | "Now speed is reduced by three hundred... new speed will be x minus three hundred... new time will be nine hundred by x minus three hundred." | Define new-time formula | Same Step 1 card, second half | `t' = 900/(x−300)` assembles below first formula |
| 7 | 74.80–102.10 | "Here we are sure... new time is equal to original time plus zero point five... equation becomes 900/(x−300) = 900/x + 0.5." | Form the master equation | Step 2 card | Equation assembles from the two prior formulas |
| 8 | 102.72–111.06 | "When we solve this equation carefully, we get x square minus three hundred x minus five hundred forty thousand is equal to zero." | Reduce to standard quadratic | Step 2 card (same, extends) | Quadratic line reveals below the equation |
| 9 | 111.56–121.60 | "Factoring this equation, we get x minus nine hundred into x plus six hundred is equal to zero. So x can be nine hundred or x can be minus six hundred." | Factor and get two roots | Step 3 card | Factored form + two roots reveal |
| 10 | 122.14–128.20 | "Speed cannot be negative, so original speed is nine hundred kilometer per hour." | Reject invalid root | Step 3 card (same) | Negative root strikes through / fades; 900 highlighted |
| 11 | 128.62–148.14 | "The question is not asking original speed... time is equal to distance by speed... original time will be nine hundred by nine hundred equal to one... original duration is one hour." | Final computation → answer | Step 4 card | `900/900 = 1 hr` assembles, "1 hour" emphasized |
| 12 | 148.72–153.78 | "Hence the final answer will be one hour. So option B is the correct answer." | Confirm answer against options | Options grid | Options fade in, stagger, B pulses green |

---

## PART 2: Scene-by-Scene Storyboard

### SCENE 1 — Question Reveal
**TIMESTAMP:** 0.0 – 8.15
**VOICEOVER:** "So welcome back again. Time for one more problem. Now in this problem, we are given a flight of nine hundred kilometer."
**VISUAL OBJECTIVE:** Establish the question and the core illustration subject (a flight).
**SCREEN LAYOUT:** `QuestionCard` (full, 1640px wide) centered upper-middle, per `template.html` Phase-1 coordinates. Illustration area below it.
**ON-SCREEN ELEMENTS:** `q-card` with question text ("In a 900 km flight, bad weather reduced the average speed by 300 km/hr and increased time by 30 minutes. The original duration is:") — "900 km", "300 km/hr", "30 minutes" spans get `.num` (primary blue). `SerialNum` badge top-left overlapping the card, digit "Q". Illustration: a flat 2D plane icon (simple side-profile silhouette, primary-blue fill, no new colors) positioned at the left edge of a long dashed horizontal flight-path line spanning the illustration zone, with a small "900 km" label above the path (blue, matches `--primary`).
**ANIMATION DETAILS:** `apt.questionEnter(tl, "#q-full-card", 0.3)` — card fades + scales in with `back.out(1.4)`. `apt.serialEnter(tl, "#serial-num", 0.8)`. Plane icon + dashed path + "900 km" label fade in together via `apt.fadeIn(tl, "#illus-plane-group", 2.0)`.
**CAMERA MOVEMENT:** Static frame, no camera moves (2D flat composition, no virtual camera).
**TRANSITIONS:** Hard cut from black/empty canvas into the composed frame (standard video start).
**EDUCATIONAL PURPOSE:** Anchor distance = 900 km before any other variable is introduced.
**VISUAL HIERARCHY:** QuestionCard > SerialNum > Illustration (plane smaller, secondary).
**ATTENTION MANAGEMENT:** Single focal element on screen at a time — question text first, illustration settles in after 2s once the words "nine hundred kilometer" land.
**MOTION NOTES:** Plane stays static (not flying yet) — implies "this is the setup," not yet dramatized.

---

### SCENE 2 — Speed Drop + Time Penalty
**TIMESTAMP:** 8.15 – 22.86
**VOICEOVER:** "Bad weather reduces the average speed by three hundred kilometer per hour. Because speed becomes less, the flight takes thirty minutes more. Now, thirty minutes means half an hour, so we will write thirty minutes as zero point five hour."
**VISUAL OBJECTIVE:** Dramatize the two facts that drive the whole problem: speed drops by 300, time grows by 0.5 hr.
**SCREEN LAYOUT:** Same QuestionCard + illustration zone as Scene 1 (question card holds, no pin yet).
**ON-SCREEN ELEMENTS:** The same plane icon (continuity — same asset, not replaced) now visibly slows: a small "−300 km/hr" chip (primary blue pill, same visual language as `solutionChip`) appears above the plane at 8.80s. A small clock glyph appears near the path's right end; a "+30 min" label pops next to it at 14.94s.
**ANIMATION DETAILS:** Plane's path-crossing speed (a `gsap` `x` tween on the plane icon along the dashed path) slows its playback rate partway through, using existing `power2.inOut` easing (no new custom animation — implemented as a duration change on the same tween, not a new helper). "−300 km/hr" chip: `apt.fadeIn(tl, "#chip-speed-drop", 8.8)`. "+30 min" label: `apt.fadeIn(tl, "#label-time-plus", 14.94)`, then at 19.92s the label's text content swaps to "0.5 hr" with `apt.emphasize(tl, "#label-time-plus", 19.92)` (pulse to draw attention to the conversion, matches `--primary`).
**CAMERA MOVEMENT:** Static.
**TRANSITIONS:** Continuous — no cut from Scene 1.
**EDUCATIONAL PURPOSE:** Visually pairs "less speed" with "more time," and shows the 30 min → 0.5 hr conversion the student will need in the equation.
**VISUAL HIERARCHY:** Plane + chips are now primary focus (question card recedes as illustration is doing the teaching).
**ATTENTION MANAGEMENT:** Only one chip animates at a time — speed chip first, then time label — so the two facts don't compete.
**MOTION NOTES:** Object continuity: same plane icon and same dashed path carry through from Scene 1, just decelerating.

---

### SCENE 3 — Question Restated + Given Card
**TIMESTAMP:** 23.0 – 34.14
**VOICEOVER:** "The question is asking us to find the original duration of the flight. That means, before the speed was reduced, how much time was taken by the flight?"
**VISUAL OBJECTIVE:** Transition from Phase 1 (illustration storytelling) into Phase 2 (structured solving) by pinning the question and introducing the Given card.
**SCREEN LAYOUT:** Phase 1 elements (large QuestionCard, illustration at full size) fade out at 22.86. QuestionCard re-enters pinned at top (small, per `template.html` pinned coordinates), illustration re-enters pinned/smaller below it. `SolutionCard` "Given" enters centered.
**ON-SCREEN ELEMENTS:** Pinned `q-card` (24–26px Medium question text). Pinned plane+path illustration (smaller scale, static). `solution-card` with `chip` "Given" and `.math` lines: "Distance = 900 km", "Speed reduced by = 300 km/hr", "Extra time = 0.5 hr" (each a `.rv` line-level reveal span since these are paraphrased summaries, not verbatim narration matches).
**ANIMATION DETAILS:** `apt.fadeOut` on Phase-1-only elements at 22.86. `apt.fadeIn(tl, "#q-pinned", 23.0)` + `apt.fadeIn(tl, "#illus-pinned", 23.0)`. `apt.cardEnter(tl, "#card-given .solution-card", 23.4)`. `apt.textReveal(tl, "#card-given .math")` called right after, with the three `.rv` lines timed at `data-t` = 23.58, 25.00 (approx "asking us to find the original duration" landing point for line 2), and 19.92 is already past — instead time line 3 ("Extra time = 0.5 hr") at 23.58 since it's a recap, not new narration (all three lines land in a tight cluster right as the Given card enters, since this is a summary beat, not word-synced narration).
**CAMERA MOVEMENT:** Static.
**TRANSITIONS:** Cross-fade (Phase 1 elements fade out 0.4s, Phase 2 pinned elements fade in 0.4s, overlapping).
**EDUCATIONAL PURPOSE:** Consolidates everything established in Scenes 1–2 into a clean, referenceable Given card before algebra starts.
**VISUAL HIERARCHY:** Given `SolutionCard` (center, white, shadow) is now the primary focus; pinned question/illustration are secondary/reference.
**ATTENTION MANAGEMENT:** Nothing new is narrated here that isn't already summarized — student's eyes settle on the Given card as a checkpoint.
**MOTION NOTES:** Illustration keeps continuity (same plane asset, just repositioned/shrunk per pinned layout rules).

---

### SCENE 4 — Step 1: Time Expressions
**TIMESTAMP:** 34.14 – 74.42 (Given card morphs to stack at 33.0, Step 1 card enters 34.14)
**VOICEOVER:** "Now let the actual speed be x kilometer per hour... time will be nine hundred by x... [50.20] Now speed is reduced by three hundred kilometer per hour... new time will be nine hundred by x minus three hundred."
**VISUAL OBJECTIVE:** Build both time expressions (original and new) as the algebraic foundation for the equation.
**SCREEN LAYOUT:** Given card now a `stack-card` in left column (`step-circle` badge "G"). Step 1 `SolutionCard` centered.
**ON-SCREEN ELEMENTS:** `chip` "Step 1", `.math` block with two lines: "Let speed = x km/hr, Original time = 900/x" (using `.frac` component: top "900", bottom "x") and "New speed = (x − 300), New time = 900/(x − 300)" (`.frac` top "900", bottom "x − 300", with "− 300" in `.hi`).
**ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 33.0)`. `apt.cardEnter(tl, "#card-step1 .solution-card", 34.14)`. `apt.textReveal(tl, "#card-step1 .math")` — word-level `.rv` spans for the verbatim numeric parts ("x", "900", "x", "300", "x minus 300", "900", "x minus 300") timed at their exact `transcript.json` word timestamps between 34.14 and 74.42.
**CAMERA MOVEMENT:** Static.
**TRANSITIONS:** Morph (position/size/bg/shadow tween), 0.8s, `power2.inOut`.
**EDUCATIONAL PURPOSE:** Makes the two time expressions visually parallel (same `.frac` shape, different denominators) so the student sees exactly what changed.
**VISUAL HIERARCHY:** Step 1 card > stack column (Given, dimmed by being smaller/lighter bg) > pinned question.
**ATTENTION MANAGEMENT:** First fraction fully resolves and holds before the second fraction begins revealing (word-reveal pacing follows the transcript, which naturally sequences these).
**MOTION NOTES:** Object continuity — the `.frac` component is reused identically for both expressions (only the denominator differs), reinforcing the "same formula, new numbers" idea.

---

### SCENE 5 — Step 2: Form and Solve the Equation
**TIMESTAMP:** 75.2 – 111.06 (Step 1 morphs to stack at 75.2, Step 2 enters 76.0)
**VOICEOVER:** "Here we are sure about one fact... new time is equal to original time plus zero point five... So the equation becomes nine hundred by x minus three hundred is equal to nine hundred by x plus zero point five... we get x square minus three hundred x minus five hundred forty thousand is equal to zero."
**VISUAL OBJECTIVE:** Combine the two fractions into one equation, then show it reduced to standard quadratic form.
**SCREEN LAYOUT:** Step 1 now in stack (badge "1"), Step 2 `SolutionCard` centered.
**ON-SCREEN ELEMENTS:** `chip` "Step 2", `.math` with line 1: "900/(x−300) = 900/x + 0.5" (two `.frac` components plus "+ 0.5" in `.hi`), line 2 (revealed after line 1 completes): "x² − 300x − 540000 = 0" (the "= 0" and coefficients in `.ans`/`.hi` styling consistent with existing token usage).
**ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 75.2)`, `apt.stackLineGrow(tl, "#line-g-1", 75.2)`. `apt.cardEnter(tl, "#card-step2 .solution-card", 76.0)`. `apt.textReveal(tl, "#card-step2 .math")` — line-level `.rv` for the equation line (data-t ≈ 94.56, when "the equation becomes" narration lands) and a second line-level `.rv` for the quadratic (data-t ≈ 102.72).
**CAMERA MOVEMENT:** Static.
**TRANSITIONS:** Morph 0.8s into stack; card enter 0.55s `back.out(1.4)`.
**EDUCATIONAL PURPOSE:** Shows the algebra step from "two fractions equated" to "single quadratic," the hardest cognitive leap in the problem.
**VISUAL HIERARCHY:** Step 2 card primary; stack column (G, 1) secondary reference on the left with connector line grown between them.
**ATTENTION MANAGEMENT:** Equation line holds fully visible for several seconds (94.56 → 102.10) before the quadratic line begins revealing, giving the student time to absorb the equation before it transforms.
**MOTION NOTES:** `stack-line` between G and 1 circles is drawn now and never removed for the rest of the video, per design-system rule.

---

### SCENE 6 — Step 3: Factor and Reject Invalid Root
**TIMESTAMP:** 111.9 – 128.20 (Step 2 morphs to stack at 111.9, Step 3 enters 112.7)
**VOICEOVER:** "Now factoring this equation, we get x minus nine hundred into x plus six hundred is equal to zero. So x can be nine hundred or x can be minus six hundred. Speed cannot be negative, so original speed is nine hundred kilometer per hour."
**VISUAL OBJECTIVE:** Factor the quadratic, surface both roots, then eliminate the negative one.
**SCREEN LAYOUT:** Step 2 now in stack (badge "2"), Step 3 `SolutionCard` centered.
**ON-SCREEN ELEMENTS:** `chip` "Step 3", `.math` line 1: "(x − 900)(x + 600) = 0", line 2: "x = 900 or x = −600", with "−600" wrapped in a `<span class="hi">` that gets a strike-through treatment consistent with existing `.hi`/`.ans` tokens (no new component — reuse `.hi` styling, just apply it to the rejected root), line 3: "Speed ≠ negative → x = 900 km/hr" with "900" in `.ans`.
**ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 111.9)`, `apt.stackLineGrow(tl, "#line-1-2", 111.9)`. `apt.cardEnter(tl, "#card-step3 .solution-card", 112.7)`. `apt.textReveal(tl, "#card-step3 .math")` — word-level `.rv` for the factored form and roots (data-t from 111.56–121.60), line-level `.rv` for the rejection line (data-t ≈ 122.14).
**CAMERA MOVEMENT:** Static.
**TRANSITIONS:** Morph 0.8s.
**EDUCATIONAL PURPOSE:** Reinforces the "reject the impossible root" reasoning pattern common to all speed/quadratic problems.
**VISUAL HIERARCHY:** Step 3 card primary; three-item stack (G, 1, 2) on left, all connector lines visible and continuous.
**ATTENTION MANAGEMENT:** The "−600" root visibly fades/strikes only after "speed cannot be negative" is spoken (122.14), not before — so the elimination is felt as a live decision, not a pre-known fact.
**MOTION NOTES:** No `apt.emphasize` layered on top of the text-reveal-driven `.ans` span (per design-system rule 9.1) — the reveal timing itself provides the emphasis.

---

### SCENE 7 — Step 4: Original Duration + Answer Reveal
**TIMESTAMP:** 129.0 – 153.78 (Step 3 morphs to stack at 129.0, Step 4 enters 129.8)
**VOICEOVER:** "Now the question is not asking original speed. The question is asking original duration. So again we use time is equal to distance by speed... original time will be nine hundred by nine hundred equal to one... So the original duration is one hour, hence the final answer will be one hour. So option B is the correct answer."
**VISUAL OBJECTIVE:** Compute the final answer and confirm it against the options grid.
**SCREEN LAYOUT:** Step 3 now in stack (badge "3"), Step 4 `SolutionCard` centered. Near the end of this scene, question card + illustration recenter and the options grid fades in on the right (`.pinned-col`).
**ON-SCREEN ELEMENTS:** `chip` "Step 4", `.math`: "Original time = 900/900" (`.frac`, top "900" bottom "900") then "= 1 hour" (`.ans`, revealed after). Options grid: four `.opt-btn` (A: "2 hours", B: "1 hour", C: "1.5 hours", D: "2.5 hours"), B carries class `correct`.
**ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 129.0)`, `apt.stackLineGrow(tl, "#line-2-3", 129.0)`. `apt.cardEnter(tl, "#card-step4 .solution-card", 129.8)`. `apt.textReveal(tl, "#card-step4 .math")` — word-level `.rv` for "900/900" (data-t ≈ 141.82–144.26), line-level `.rv` for "= 1 hour" (data-t ≈ 145.66). At 145.5: `apt.fadeOut(tl, "#illus-pinned", 145.5)` + `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 145.5)`. `apt.fadeIn(tl, "#options-reveal", 146.0)`. `apt.optionsStagger(tl, ".opt-btn", 146.6)`. `apt.correctPulse(tl, ".opt-btn.correct", 151.90)` (exact moment "option B" is spoken). `apt.resultReveal(tl, "#result-span", 148.14)` for the "1 hour" final-answer emphasis inside the Step 4 card, timed just before the options appear.
**CAMERA MOVEMENT:** Static.
**TRANSITIONS:** Morph 0.8s into stack; options grid fades/staggers in.
**EDUCATIONAL PURPOSE:** Closes the loop — connects the abstract "x = 900" back to the concrete question ("duration," not "speed"), then verifies against the given options.
**VISUAL HIERARCHY:** Step 4 card and its "1 hour" answer are primary until 146s, then the options grid + green-pulsed option B become primary.
**ATTENTION MANAGEMENT:** The distinction "not speed, but duration" is called out via the `.math` text itself before any new number appears, preventing the student from anchoring on 900 as the final answer.
**MOTION NOTES:** All four stack cards (G, 1, 2, 3) plus Step 4 remain visible through the end of the video (no premature exits); connector lines stay visible and continuous through the recenter.

---

## PART 3: Asset List Required

- Flat 2D plane icon (side-profile silhouette, `--primary` fill) — single SVG, reused across Scenes 1–3 (`illustration/plane.svg`)
- Dashed horizontal flight-path line — CSS-drawn (border-style: dashed), no asset needed
- Small clock glyph for the "+30 min → 0.5 hr" beat — simple SVG (`illustration/clock.svg`)
- No other new assets — all cards/chips/options/logo/serial-badge come from `_template/assets/` + `design-system.css` components

## PART 4: Animation Complexity Notes

- All transitions use existing `animations.js` helpers only: `questionEnter`, `serialEnter`, `cardEnter`, `morphToStack`, `textReveal`, `fadeIn`/`fadeOut`, `stackLineGrow`, `optionsStagger`, `correctPulse`, `resultReveal`, `recenterForOptions`, `emphasize`.
- The only per-question custom motion is the plane's along-path travel and deceleration in Scene 2 — implemented as a plain GSAP `x`-position tween on the plane icon with a duration change (not a new named helper), consistent with "Illustration animates" being per-question custom per `design.md` §7.
- Text reveal is word-level for all verbatim numeric/equation content (fractions, quadratic, factoring, roots) and line-level for paraphrased summary lines (Given card, "Extra time" recap, rejection line) — per §9.1.
- Every Step card → stack transition is a strict 0.8s `apt.morphToStack`, with a `stack-line` grown at the same timestamp as the lower circle joins — no exceptions.

## PART 5: Master Timeline Overview

```
0.0    Phase 1 begins — QuestionCard + SerialNum + plane/path illustration
8.15   Speed-drop chip + time-penalty label appear, plane decelerates
19.92  "30 min" → "0.5 hr" conversion emphasis
22.86  Phase 1 fades out
23.0   Pinned QuestionCard + pinned illustration fade in; Given card enters
33.0   Given → stack (morph)
34.14  Step 1 "Time Expressions" enters
75.2   Step 1 → stack (morph), line G→1 grows
76.0   Step 2 "Form & Solve Equation" enters
111.9  Step 2 → stack (morph), line 1→2 grows
112.7  Step 3 "Factor & Reject Root" enters
129.0  Step 3 → stack (morph), line 2→3 grows
129.8  Step 4 "Original Duration" enters
145.5  Illustration fades, question recenters for options
146.0  Options grid fades in
146.6  Options stagger in (A/B/C/D)
148.14 "1 hour" result emphasized inside Step 4 card
151.90 Option B correctPulse (green highlight)
153.78 End — all stack cards, Step 4, and green-highlighted options remain visible
```
