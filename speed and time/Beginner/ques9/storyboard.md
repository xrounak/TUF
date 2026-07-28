# Storyboard — Speed & Time, Beginner, Q9
## "Aircraft covers 400 km, slows by 100 km/hr, takes 2 extra hrs — actual duration?"

Video length: **136.46s** (driven by `transcript.json`). Topic: **Speed and Time**. Correct answer: **A — 2 hours**.

---

## PART 1: Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|-----------|-----------|---------------------|------------------|-------------------|
| 1 | 0.10–3.20 | "So welcome back again. Time for one more problem." | Warm open, signal new problem | Center of frame | Question card rises into place, calm entrance |
| 2 | 3.78–22.46 | "Now in this problem, an aircraft has to travel a total distance of 400 km. During the journey it is slowed down... speed becomes 100 km/hr less, and the journey takes 2 extra hours. The question is asking us to find the actual duration of the flight." | State the given scenario + what's asked | Plane illustration + distance/speed/time labels | Plane travels the dashed route while distance, speed-drop, extra-time and "t hrs?" facts fade in in sequence |
| 3 | 23.08–37.46 | "Let us take the actual duration as t hours. Now we know that speed is equal to distance divided by time... so the actual speed is 400 divided by t." | Define the unknown + Given values | Given card | Question pins to top; Given card (distance, speed drop, extra time, `t`, actual speed) appears center |
| 4 | 38.20–53.20 | "After the aircraft slows down, the same distance takes 2 extra hours... so the new time becomes t plus 2 hours... so the new speed is 400 divided by t plus 2." | Step 1: express the new (slower) speed | Step 1 math | Given morphs to stack; Step 1 card shows new time and new speed in terms of `t` |
| 5 | 53.78–113.44 | "Now let us connect the two speeds. The aircraft has slowed down by 100 km/hr... actual speed minus new speed is equal to 100... [algebra simplifies down to] ...(t + 4)(t − 2) = 0." | Step 2: form and simplify the quadratic equation | Step 2 math (progressive equation reveal) | Step 1 morphs to stack; Step 2 card resolves the equation line-by-line, from the raw speed difference down to the factored quadratic |
| 6 | 113.48–132.08 | "So t can be minus 4 or 2. Can the flight duration be minus 4 hours? No. Time cannot be negative. Therefore t is equal to 2 hours. Remember, t represents the actual duration of the flight. Hence, the actual duration of the flight is 2 hours." | Step 3: reject the invalid root, state the final answer | Step 3 math, "time cannot be negative" reasoning | Step 2 morphs to stack; Step 3 card opens with both roots, then rejects the negative one, then resolves to 2 hours |
| 7 | 132.60–136.46 | "So the final answer will be option A, two hours." | Reveal answer | Options grid, option A | Step 3 morphs to stack; options grid reveals, A pulses green |

---

## PART 2: Scene-by-Scene Storyboard

### SCENE 1 — Question Reveal
**TIMESTAMP:** 0.0 – 4.5s
**VOICEOVER:** "So welcome back again. Time for one more problem."
**VISUAL OBJECTIVE:** Establish calm opening; question card is the sole focus, vertically centered.
**SCREEN LAYOUT:** `QuestionCard` (`#q-full-card`, 1500px wide) centered horizontally, starting lowered (y offset 180px per `apt.heroEnterLowered`). `SerialNum` badge top-left, rising in tandem.
**ON-SCREEN ELEMENTS:** dotted-grid background, bottom-strip, topic-name ("Speed and Time"), logo, QuestionCard containing full question text, SerialNum badge ("9").
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 4.5)` — rises to resting slot at 4.5s ("Now in this problem," line ends 4.52s). Badge pop-in at 0.7s (`back.out(2)`), rises to y:0 at 4.5s.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Card rise only; no cuts.
**EDUCATIONAL PURPOSE:** Let the viewer read the full question once before any numbers move.
**VISUAL HIERARCHY:** QuestionCard > SerialNum > background chrome.
**ATTENTION MANAGEMENT:** Single focal object — no competing motion.
**MOTION NOTES:** Numbers ("400 km", "100 km/h", "2", "actual duration") rendered in `.num` inside the static text — one entrance, no separate reveal.

---

### SCENE 2 — Illustration Builds: The Journey
**TIMESTAMP:** 4.5 – 22.5s
**VOICEOVER:** "...an aircraft has to travel a total distance of 400 km. During the journey it is slowed down... speed becomes 100 km/hr less, and the journey takes 2 extra hours. The question is asking us to find the actual duration of the flight."
**VISUAL OBJECTIVE:** Give the viewer a concrete mental picture of the flight and its three known facts plus the unknown.
**SCREEN LAYOUT:** `#illustration` area below the risen question card — a dashed flight path with a plane icon travelling left→right.
**ON-SCREEN ELEMENTS:** Plane emoji icon on a dashed path; "Total Distance = 400 km" label under the path; "Speed − 100 km/hr" pill upper-right; "Time + 2 hrs" pill lower-right; "t hrs ?" callout far right.
**ANIMATION DETAILS:** Plane travels the route (`x: 0 → 1180`, 20.3s duration, linear, start 2.5s). `apt.fadeIn(tl, "#ill-dist", 5.0)` + `apt.emphasize(tl, "#ill-dist", 8.6)` (timed to "400 kilometers" landing at 8.82s). `apt.fadeIn(tl, "#ill-speed", 12.0)` + `apt.emphasize(tl, "#ill-speed", 15.7)` (timed to "100 kilometers per hour less" ending 15.96s). `apt.fadeIn(tl, "#ill-time", 16.7)` + `apt.emphasize(tl, "#ill-time", 18.3)` (timed to "2 extra hours" ending 18.54s). `apt.fadeIn(tl, "#ill-t", 18.9)` + `apt.emphasize(tl, "#ill-t", 22.3)` (timed to "actual duration of the flight" ending 22.46s).
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Continuous build, no hard cuts — each fact appears as its value is spoken.
**EDUCATIONAL PURPOSE:** Anchor all three knowns (distance, speed drop, extra time) and the unknown (`t`) to a visual before any algebra starts.
**VISUAL HIERARCHY:** Distance first, then speed, then time, then the unknown `t` — same order as the narration.
**ATTENTION MANAGEMENT:** Sequential reveal keyed to narration keeps the eye moving left→right exactly as the sentence unfolds.
**MOTION NOTES:** This plane + dashed path persists (shrunk) into the pinned illustration from Scene 3 onward.

---

### SCENE 3 — Pin + Given
**TIMESTAMP:** 22.5 – 38.6s
**VOICEOVER:** "Let us take the actual duration as t hours. Now we know that speed is equal to distance divided by time... so the actual speed is 400 divided by t."
**VISUAL OBJECTIVE:** Shift from "reading the problem" to "solving it" — question shrinks to top, Given values appear.
**SCREEN LAYOUT:** `#phase1` fades out; `#q-pinned` (top:30px) and `#illus-pinned` (shrunk plane route, top:190px) fade in. `SolutionCard` "Given" appears centered.
**ON-SCREEN ELEMENTS:** Pinned question card (shortened text), shrunk illustration, Given card with chip "Given" and math: `Total Distance = 400 km`, `Speed reduced by = 100 km/hr`, `Extra Time = 2 hrs`, `Let Actual Time = t hrs`, `Actual Speed = 400/t`.
**ANIMATION DETAILS:** `apt.fadeOut(tl, "#phase1", 22.5)`. `apt.fadeIn(tl, "#q-pinned", 23.0)`. `apt.fadeIn(tl, "#illus-pinned", 23.0)`. `apt.cardEnter(tl, "#card-given .solution-card", 23.5)`.
**CAMERA MOVEMENT:** None (layout reflow reads as the "camera" pulling back).
**TRANSITIONS:** Hard cut from full-screen Phase 1 to the pinned Phase 2 layout.
**EDUCATIONAL PURPOSE:** Make explicit which values we start from and name the unknown `t`.
**VISUAL HIERARCHY:** Given card centered and largest active element; pinned question small and secondary.
**ATTENTION MANAGEMENT:** Only one new element (Given card) enters — no competing motion.
**MOTION NOTES:** First frame where the question is pinned — stays pinned for the rest of the video.

---

### SCENE 4 — Step 1: New (Slower) Speed
**TIMESTAMP:** 38.6 – 54.3s
**VOICEOVER:** "After the aircraft slows down, the same distance takes 2 extra hours... so the new time becomes t plus 2 hours... so the new speed is 400 divided by t plus 2."
**VISUAL OBJECTIVE:** Express the slowed-down scenario in terms of the same unknown `t`.
**SCREEN LAYOUT:** Given card morphs into `#stack-given` (left column, top:140px, step-circle "G"). Step 1 `SolutionCard` (chip "Step 1") enters center.
**ON-SCREEN ELEMENTS:** Stack card "G" circle + given values (left column). Active Step 1 card: `New time = t + 2 hrs`, `New Speed = 400/(t+2)`.
**ANIMATION DETAILS:** 🌟 `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 37.9)`. `apt.cardEnter(tl, "#card-step1 .solution-card", 38.6)`.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Morph only — no hard cuts.
**EDUCATIONAL PURPOSE:** Show that the new speed is expressed with the same `t`, setting up the equation in Step 2.
**VISUAL HIERARCHY:** Given stack card (desaturated, left) vs. active Step 1 card (center, full contrast).
**ATTENTION MANAGEMENT:** Stack card entering on the left doesn't compete with the active card because it's smaller and off to the side.
**MOTION NOTES:** First `.card-content` cross-fade via the morph — sets the pattern for all subsequent steps.

---

### SCENE 5 — Step 2: Form & Simplify the Equation
**TIMESTAMP:** 54.3 – 115.5s
**VOICEOVER:** "Now let us connect the two speeds. The aircraft has slowed down by 100 km/hr... actual speed minus new speed is equal to 100... [simplifies to] ...(t + 4)(t − 2) = 0."
**VISUAL OBJECTIVE:** Resolve the algebra live, one line landing per narration beat, ending at the factored quadratic.
**SCREEN LAYOUT:** Step 1 morphs into `#stack-step1` (top:340px, step-circle "1"). Step 2 `SolutionCard` (wider, to hold the equation lines) enters center.
**ON-SCREEN ELEMENTS:** Stack now shows "G" and "1" circles connected by a growing `.stack-line`. Active Step 2 card, progressively revealed: `Actual Speed − New Speed = 100` (present from card entry) → `400/t − 400/(t+2) = 100` → `4/t − 4/(t+2) = 1` → `8/t(t+2) = 1` → `t(t+2) = 8` → `t² + 2t = 8` → `t² + 2t − 8 = 0` → `(t + 4)(t − 2) = 0`.
**ANIMATION DETAILS:** 🌟 `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 53.5)` + `apt.stackLineGrow(tl, "#line-g-1", 53.5)`. `apt.cardEnter(tl, "#card-step2 .solution-card", 54.3)`. Progressive `apt.resultReveal`: `#eq-l2` @68.6 ("we get 400/t..." starts 68.60), `#eq-l2b` @78.4 ("we get 4/t..." starts 78.36), `#eq-l3` @86.6 ("we get 8/t(t+2)..." starts 86.56), `#eq-l3b` @93.6 ("t(t+2) is equal to 8" starts 93.56), `#eq-l4` @98.8 ("we get t squared..." starts 98.80), `#eq-l4b` @104.6 ("...minus 8 equals 0" starts 104.58), `#eq-l5` @108.0 ("factorizing... t plus 4..." starts 107.98).
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Morph only.
**EDUCATIONAL PURPOSE:** Show the full derivation, not just the final factored form — every algebraic step is visible as it's spoken.
**VISUAL HIERARCHY:** Each new line in `--primary`/`.hi`, appearing below the previous ones, all remaining visible (cumulative reveal).
**ATTENTION MANAGEMENT:** Each reveal fires at the *start* of its narration line so the visual leads/tracks the voice rather than lagging behind it.
**MOTION NOTES:** `.frac` component used for every division — no invented fraction styling.

---

### SCENE 6 — Step 3: Reject the Invalid Root
**TIMESTAMP:** 115.5 – 129.5s
**VOICEOVER:** "So t can be minus 4 or 2. Can the flight duration be minus 4 hours? No. Time cannot be negative. Therefore t is equal to 2 hours. Remember, t represents the actual duration of the flight. Hence, the actual duration of the flight is 2 hours."
**VISUAL OBJECTIVE:** Show both roots, visually reject the impossible one, land on the final answer.
**SCREEN LAYOUT:** Step 2 morphs into `#stack-step2` (top:480px, step-circle "2", condensed to the factored line only). Step 3 `SolutionCard` enters center.
**ON-SCREEN ELEMENTS:** Stack now shows "G", "1", "2" circles with two connector lines. Active Step 3 card: `t = −4 or t = 2` (present from entry), then `Time cannot be negative`, then `Actual Duration = 2 hrs`.
**ANIMATION DETAILS:** 🌟 `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 114.8)` + `apt.stackLineGrow(tl, "#line-1-2", 114.8)`. `apt.cardEnter(tl, "#card-step3 .solution-card", 115.5)`. `apt.resultReveal(tl, "#step3-l2", 119.2)` (timed to "Time cannot be negative" starting 119.16). `apt.resultReveal(tl, "#step3-l3", 121.9)` (timed to "t is equal to two hours" starting 121.82).
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Morph only.
**EDUCATIONAL PURPOSE:** Reinforce the domain constraint (time ≥ 0) before naming the final answer.
**VISUAL HIERARCHY:** Both roots shown together first (equal weight), then rejection line, then the resolved answer in `.ans` styling.
**ATTENTION MANAGEMENT:** Two sequential reveals matching the two-part reasoning ("can't be negative" → "so it's 2").
**MOTION NOTES:** No new component invented — plain `.math` text using existing `.hi`/`.ans` spans only.

---

### SCENE 7 — Options Reveal
**TIMESTAMP:** 129.5 – 136.46s
**VOICEOVER:** "So the final answer will be option A, two hours."
**VISUAL OBJECTIVE:** Land on the correct option with a clear, confident highlight.
**SCREEN LAYOUT:** Step 3 morphs into `#stack-step3` (top:605px, step-circle "3"). Pinned question + illustration recenter (`apt.recenterForOptions`) to align with `.pinned-col`. Options grid (2×2) fades in on the right.
**ON-SCREEN ELEMENTS:** Full stack (G/1/2/3, all connector lines) on the left, unchanged. Options grid: A) "2 hours" (correct), B) "1 hour", C) "4 hours", D) "3 hours".
**ANIMATION DETAILS:** 🌟 `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 129.5)` + `apt.stackLineGrow(tl, "#line-2-3", 129.5)`. `apt.fadeOut(tl, "#illus-pinned", 130.0)`. `apt.recenterForOptions(tl, "#q-pinned", 160, 220, 130.0)`. `apt.fadeIn(tl, "#options-reveal", 132.6)`. `apt.optionsStagger(tl, ".opt-btn", 133.2)`. `apt.correctPulse(tl, ".opt-btn.correct", 135.5)` (timed to "two hours" landing at 135.80–136.46).
**CAMERA MOVEMENT:** None (recenter is a positional tween, not a camera move).
**TRANSITIONS:** Morph (last one) + fade + stagger — no hard cuts.
**EDUCATIONAL PURPOSE:** Confirm the answer and let the viewer map "2 hours" onto option A explicitly.
**VISUAL HIERARCHY:** Correct option (green) is the final visual resting point of the video.
**ATTENTION MANAGEMENT:** Stagger draws the eye across all four options before the pulse settles it on A.
**MOTION NOTES:** Stack + connector lines remain visible through the end, per design-system rule.

---

## PART 3: Asset List Required

- No external image/SVG assets needed beyond the shared `_template/assets/` (serial-num-badge.svg, logo.png).
- Per-question illustration — built as inline CSS/emoji shapes directly in `index.html`, no separate asset files:
  - `#ill-plane` — ✈️ emoji rotated 45°, travels along the dashed path
  - dashed horizontal line (distance indicator)
  - `#ill-dist`, `#ill-speed`, `#ill-time`, `#ill-t` — plain text/pill labels, `--text`/`--primary` colors per design system

## PART 4: Animation Complexity Notes

- 1 Given + 3 Steps, matching the standard 4-circle (G/1/2/3) stack pattern.
- Step 2 has a long progressive equation reveal (7 `resultReveal` beats) — the only above-baseline complexity in this video; no new helper functions required, all beats use the existing `resultReveal`.
- All 3 step→stack transitions use `apt.morphToStack` — no exceptions.
- Stack line grows fire in sync with each morph completion per the standard pattern (grows when the LOWER step joins the stack).
- Stack card vertical gaps (140 / 340 / 480 / 605) kept from the prior build since the Given card here is unusually tall (5 math lines) — spacing already accounts for that; connector line top/height values follow from each card's estimated rendered center per the `.step-circle`/`.stack-line` CSS comments.

## PART 5: Master Timeline Overview

```
TIME (s)   ELEMENT                          ACTION
─────────  ───────────────────────────────  ──────────────────────────────────
0.0        Background layers                Always visible
0.0        #q-full-card                     heroEnterLowered starts (rises @4.5)
0.7        #serial-num                      pop-in, rises @4.5
4.5        #q-full-card / #serial-num       rise to resting slot
4.6        #illustration                    fadeIn
2.5        #ill-plane                       x: 0→1180 travel (20.3s)
5.0        #ill-dist ("400 km")             fadeIn
8.6        #ill-dist                        emphasize
12.0       #ill-speed ("−100 km/hr")        fadeIn
15.7       #ill-speed                       emphasize
16.7       #ill-time ("+2 hrs")             fadeIn
18.3       #ill-time                        emphasize
18.9       #ill-t ("t hrs ?")               fadeIn
22.3       #ill-t                           emphasize
22.5       #phase1                          fadeOut
23.0       #q-pinned, #illus-pinned         fadeIn
23.5       card-given                       cardEnter
37.9       given → stack-given              🌟 morphToStack
38.6       card-step1                       cardEnter
53.5       step1 → stack-step1              🌟 morphToStack + line-g-1 grow
54.3       card-step2                       cardEnter
68.6       #eq-l2                           resultReveal
78.4       #eq-l2b                          resultReveal
86.6       #eq-l3                           resultReveal
93.6       #eq-l3b                          resultReveal
98.8       #eq-l4                           resultReveal
104.6      #eq-l4b                          resultReveal
108.0      #eq-l5                           resultReveal
114.8      step2 → stack-step2              🌟 morphToStack + line-1-2 grow
115.5      card-step3                       cardEnter
119.2      #step3-l2 ("cannot be negative") resultReveal
121.9      #step3-l3 ("Actual Duration=2hrs") resultReveal
129.5      step3 → stack-step3              🌟 morphToStack + line-2-3 grow
130.0      #illus-pinned                    fadeOut
130.0      #q-pinned                        recenterForOptions (x:160, y:220)
132.6      #options-reveal                  fadeIn
133.2      .opt-btn ×4                      optionsStagger
135.5      .opt-btn.correct (A)             correctPulse
136.46     END                              all elements remain visible
```

**Colors used:** only `--primary` (#6373db), `--primary-light` (#e2e5ff), `--success` (#4eb85f), `--topic` (#949494), `--text` (#000000), `--bg` (#FFFFFF) — no invented colors.
**Fonts used:** Google Sans Flex, Medium only on the Phase-1 question text, Regular everywhere else — no invented fonts.
**Components used:** QuestionCard, SerialNum, SolutionCard, SolutionStackCard, solutionChip, StepCircle/StackLine, options grid/opt-btn, logo, topic-name, bottom-strip, dotted-grid, Fraction — no invented components.
**Animations used:** heroEnterLowered, cardEnter, morphToStack, fadeIn, fadeOut, emphasize, resultReveal, stackLineGrow, optionsStagger, correctPulse, recenterForOptions — no invented animations.
