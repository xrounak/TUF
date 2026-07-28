# Storyboard — Speed and Time, Amateur, Question 18

**Question:** A postman travelled 65 km in 8 hours. He walked partly at 5 km/hr and cycled partly at 10 km/hr. The cycling distance is:
**Options:** A) 50 km ✅  B) 40 km  C) 25 km  D) 30 km
**Video duration:** 78.24s (from `transcript.json`)

---

## PART 1: Narration Beat Analysis

| # | Timestamp | Narration Text | Educational Purpose | Viewer Attention Focus | Visual Objective |
|---|-----------|-----------------|----------------------|--------------------------|-------------------|
| 1 | 0.10–2.34 | "So welcome back again. Time for one more problem." | Hook / continuity opener | Center screen, anticipation | Empty stage → question card about to arrive |
| 2 | 2.84–3.52 | "Now in this problem," | Transition into problem statement | Question card rising into place | Card completes its rise (heroEnterLowered) |
| 3 | 3.90–19.94 | "a postman travelled total sixty-five kilometer in eight hours. He did some part by walking and some part by cycling. Walking speed is five kilometer per hour. Cycling speed is ten kilometer per hour. The question is asking us to find the cycling distance." | Establish all given data + the ask | Question text numbers pulse blue as spoken; postman illustration (walk + cycle icons) builds | Full question card holds center; walking/cycling icon pair enters beneath it |
| 4 | 20.40–32.64 | "Let us take walking distance as X kilometer. So cycling distance will be sixty-five minus X kilometer. Now we know one basic formula, time is equal to distance divided by speed." | Set up variables + recall the core formula | Pinned question at top; Given card center-stage | Given card reveals variable definitions + formula, word-synced |
| 5 | 33.00–52.10 | "So time taken while walking will be X divided by five, and time taken while cycling will be sixty-five minus X divided by ten. Total time is given as eight hours, so we can write X by five plus sixty-five minus X by ten is equal to eight. Now take LCM as ten." | Build the linear equation | Given card morphs to stack; Step 1 card takes center | Step 1 card assembles the equation term by term as spoken |
| 6 | 52.56–63.86 | "So this becomes two X plus sixty-five minus X divided by ten is equal to eight. After simplifying this, we get X plus sixty-five is equal to eighty." | Simplify the equation | Step 1 morphs to stack; Step 2 card takes center | Step 2 card shows the LCM-cleared equation collapsing to `x + 65 = 80` |
| 7 | 64.22–73.74 | "So X is equal to fifteen. That means walking distance is fifteen kilometer. So cycling distance is sixty-five minus fifteen, which is fifty kilometer." | Solve for x, then derive the asked quantity | Step 2 morphs to stack; Step 3 card takes center | Step 3 card reveals x = 15, then cycling distance = 50 km (answer emphasized) |
| 8 | 74.20–78.24 | "Hence, the final answer will be option A, fifty kilometer." | Confirm the correct option | Step 3 morphs to stack; options grid appears | 2×2 options grid reveals, staggers in, option A pulses green |

---

## PART 2: Scene-by-Scene Storyboard

### SCENE 1 — Hook + Question Reveal
**TIMESTAMP:** 0.0 – 8.5s
**VOICEOVER:** "So welcome back again. Time for one more problem. Now in this problem, a postman travelled total sixty-five kilometer in eight hours."
**VISUAL OBJECTIVE:** Establish the question card and start building the postman illustration as the numbers are spoken.
**SCREEN LAYOUT:** Dotted grid background (65% opacity) + bottom strip (15px primary blue) always present. `q-full-card` centered, 1500px wide, starts lowered by 180px (`apt.heroEnterLowered`). SerialNum badge top-left, mirrors the card's rise.
**ON-SCREEN ELEMENTS:** `QuestionCard` with text "A postman travelled `65 km` in `8 hours`. He walked partly at `5 km/hr` and cycled partly at `10 km/hr`. The cycling distance is:" (numbers in `.num` primary-blue spans). `SerialNum` badge (fixed "Q"). `TopicName` "Speed and Time" bottom-left. `logo` bottom-right.
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 2.34)` — card starts lowered, rises to rest exactly as "problem." (2.34s) finishes speaking. Parallel serial-num tween mirrors the same y-offset/rise per template's built-in pattern. Numbers "sixty-five kilometer" (5.42–6.82) and "eight hours" (7.34–7.98) pulse via `.num` color (static, no separate animation — just present in the highlighted color per design.md).
**CAMERA MOVEMENT:** None (static frame, per HyperFrames flat-2D style).
**TRANSITIONS:** None yet — this scene is the opening state.
**EDUCATIONAL PURPOSE:** Present the full problem statement before breaking it into parts.
**VISUAL HIERARCHY:** Question card dominant, centered; badge secondary top-left.
**ATTENTION MANAGEMENT:** Single focal object (the card) — no competing motion.
**MOTION NOTES:** Only the standardized `heroEnterLowered` motion — no invented illustration-entry animation for the postman icon set here (see Scene 2).

### SCENE 2 — Given Data Completes
**TIMESTAMP:** 8.5 – 19.94s
**VOICEOVER:** "He did some part by walking and some part by cycling. Walking speed is five kilometer per hour. Cycling speed is ten kilometer per hour. The question is asking us to find the cycling distance."
**VISUAL OBJECTIVE:** Hold the question card at rest while the illustration area presents the two mode-of-travel icons (walk / cycle) as their speeds are spoken.
**SCREEN LAYOUT:** Same as Scene 1 — `q-full-card` at rest (y:0), `#illustration` div (1400×300px, centered, top:480px) now populated.
**ON-SCREEN ELEMENTS:** Inside `#illustration`: a simple flat 2D "walking figure" icon (left) with a "5 km/hr" label beneath, and a flat 2D "cyclist" icon (right) with a "10 km/hr" label beneath — both drawn from the question's own `illustration/` assets (simple flat-2D shapes, no invented component — plain `<img>`/`<div>` inside the existing `.illustration` container, styled with only `design-system.css` tokens: `--primary` for labels, `--text` for icon fills).
**ANIMATION DETAILS:** Icons fade/scale in with the existing `apt.cardEnter`-style tween (`fromTo {y:40, scale:0.92, opacity:0} → {y:0,scale:1,opacity:1}`, 0.55s, `back.out(1.4)`) — walking figure at 11.80s (start of "Walking speed"), cyclist figure at 14.38s (start of "Cycling speed"). No new animation helper invented; reuses the card-enter pattern already defined in `animations.js`/design.md for entrances.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** None — continuous hold of Scene 1's card.
**EDUCATIONAL PURPOSE:** Visually pair each speed value with its mode of travel so the viewer doesn't have to hold both numbers in text alone.
**VISUAL HIERARCHY:** Question card remains dominant top; illustration pair secondary, centered below.
**ATTENTION MANAGEMENT:** Two icons enter sequentially (not simultaneously) to match the sequential narration of "walking speed... cycling speed."
**MOTION NOTES:** Icons stay on screen (object continuity) into Scene 3 as the pinned, smaller illustration.

### SCENE 3 — Pin + Given Card (Variables & Formula)
**TIMESTAMP:** 20.0 – 32.64s
**VOICEOVER:** "Let us take walking distance as X kilometer. So cycling distance will be sixty-five minus X kilometer. Now we know one basic formula, time is equal to distance divided by speed."
**VISUAL OBJECTIVE:** Shrink the question to a pinned header, shrink the illustration in tandem, and reveal the Given SolutionCard defining the variable and formula word-by-word in sync with narration.
**SCREEN LAYOUT:** Phase 1 (`#phase1`) fades out at 19.7s. `#q-pinned` fades in at 20.0s (pinned q-card, `left:385px; top:30px; width:1275px`, shortened text: "A postman travelled `65 km` in `8 hours`, walking at `5 km/hr` and cycling at `10 km/hr`."). `#illus-pinned` fades in at 20.0s (same walk/cycle icons, shrunk, `left:280px;top:190px;width:1300px;height:210px`). `card-given .solution-card` at `left:640px;top:480px` (template default position).
**ON-SCREEN ELEMENTS:** `SolutionCard` with `.chip` "Given" and `.math`:
```
Walking distance = <hi>x km</hi>
Cycling distance = <hi>65 − x km</hi>
Time = Distance ÷ Speed
```
**ANIMATION DETAILS:**
- `apt.fadeOut(tl, "#phase1", 19.7)`
- `apt.fadeIn(tl, "#q-pinned", 20.0)`
- `apt.fadeIn(tl, "#illus-pinned", 20.0)`
- `apt.cardEnter(tl, "#card-given .solution-card", 20.4)`
- `apt.textReveal(tl, "#card-given .math")` — word-level `.rv` spans:
  - "Walking" 20.40, "distance" 20.90 *(paired with "walking distance" 20.90–21.62)*, "=" 22.30, "x km" 22.48 *(word-level, matches "X kilometer" 22.48–23.14)*
  - "Cycling" 23.88, "distance" 24.28, "=" 24.90, "65 − x km" 25.04 *(word-level block matching "sixty-five minus X kilometer" 25.04–27.46)*
  - "Time = Distance ÷ Speed" 30.18 *(line-level — matches "time is equal to distance divided by speed" 30.18–32.64)*
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Phase 1 → Phase 2 is a straight `fadeOut`/`fadeIn` (0.4s each), no invented wipe/slide.
**EDUCATIONAL PURPOSE:** Anchor the algebra (x and 65−x) before the equation is built.
**VISUAL HIERARCHY:** Pinned question smallest at top; Given card largest, centered — the active reasoning focus.
**ATTENTION MANAGEMENT:** Text reveals one phrase at a time so the viewer's eye tracks exactly what's being said.
**MOTION NOTES:** No `apt.emphasize`/`apt.resultReveal` layered on the `.rv` text — text-reveal is the only animation on this content per design.md 9.1.

### SCENE 4 — Step 1: Building the Equation
**TIMESTAMP:** 32.9 – 52.10s
**VOICEOVER:** "So time taken while walking will be X divided by five, and time taken while cycling will be sixty-five minus X divided by ten. Total time is given as eight hours, so we can write X by five plus sixty-five minus X by ten is equal to eight. Now take LCM as ten."
**VISUAL OBJECTIVE:** Morph Given into the stack, then reveal Step 1's equation build-up, word-synced.
**SCREEN LAYOUT:** `#stack-given` at `left:100px;top:140px`. `card-step1 .solution-card` at `left:640px;top:460px` (template default).
**ON-SCREEN ELEMENTS:** Stack: `.stack-card` with `.step-circle` "G" + collapsed given text (plain single fade-in, no `.rv`). Active `SolutionCard`: `.chip` "Step 1", `.math`:
```
Time (walk) = <frac><x></frac>/5
Time (cycle) = <frac>(65 − x)</frac>/10
x/5 + (65 − x)/10 = 8
```
**ANIMATION DETAILS:**
- `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 32.9)` (0.8s, `power2.inOut`) — timed to land right after "speed." finishes (32.64s).
- `apt.cardEnter(tl, "#card-step1 .solution-card", 33.9)` (~1s breathing gap after morph completion at 33.7).
- `apt.textReveal(tl, "#card-step1 .math")`:
  - "Time (walk) = x/5" 33.16 *(line-level, matches "time taken while walking will be X divided by five" 33.16–36.24)*
  - "Time (cycle) = (65 − x)/10" 36.44 *(line-level, matches "time taken while cycling will be sixty-five minus X divided by ten" 36.44–40.62)*
  - "x" 45.40, "/5" 45.68, "+" 46.42, "(65 − x)" 47.16, "/10" 48.34, "= 8" 49.18 *(word-level block matching "X by five plus sixty-five minus X by ten is equal to eight" 45.40–50.46)*
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** `apt.morphToStack` — position slide, size shrink, bg white→`#e2e5ff`, shadow removal, `power2.inOut`, 0.8s. No other transition invented.
**EDUCATIONAL PURPOSE:** Show the mechanical translation of "time = distance/speed" into the two time expressions, then combine them into one equation.
**VISUAL HIERARCHY:** Stack (left) recedes visually (smaller, light-blue bg, no shadow); active Step 1 card (center) is the focal point.
**ATTENTION MANAGEMENT:** Three-part reveal (walk time → cycle time → combined equation) mirrors the narration's own three-part structure.
**MOTION NOTES:** "LCM as ten" (50.50–52.10) is spoken but not a new `.rv` unit — it's a verbal cue for the *next* scene's simplification, so no visual element for it here (avoids a dangling half-second card element).

### SCENE 5 — Step 2: Simplifying the Equation
**TIMESTAMP:** 52.9 – 63.86s
**VOICEOVER:** "So this becomes two X plus sixty-five minus X divided by ten is equal to eight. After simplifying this, we get X plus sixty-five is equal to eighty."
**VISUAL OBJECTIVE:** Morph Step 1 into the stack (grow the G→1 connector line), reveal Step 2's algebraic simplification.
**SCREEN LAYOUT:** `#stack-step1` at `left:100px;top:290px` *(hand-measured gap below `#stack-given` — see Part 5 measurement note)*. `#line-g-1` connector between the two `.step-circle` badges. `card-step2 .solution-card` at `left:640px;top:460px`.
**ON-SCREEN ELEMENTS:** Stack now shows `G` + `1` circles connected by `.stack-line`. Active card: `.chip` "Step 2", `.math`:
```
(2x + 65 − x)/10 = 8
x + 65 = 80
```
**ANIMATION DETAILS:**
- `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 52.2)` (lands right after "ten." at 52.10).
- `apt.stackLineGrow(tl, "#line-g-1", 52.2)` — same timestamp, per design.md rule (grows exactly when the lower circle joins the stack).
- `apt.cardEnter(tl, "#card-step2 .solution-card", 53.2)`.
- `apt.textReveal(tl, "#card-step2 .math")`:
  - "2x" 53.70, "+" 54.18, "65" 54.44, "−" 55.04, "x" 55.62, "/10" 56.56, "= 8" 57.68 *(word-level, matches "two X plus sixty-five minus X divided by ten is equal to eight" 53.70–58.76)*
  - "x + 65 = 80" 60.88 *(word-level: "x" 60.88, "+" 61.02, "65" 61.30, "=" 62.60, "80" 63.04, matching "X plus sixty-five is equal to eighty" 60.88–63.72)*
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** `apt.morphToStack` (0.8s) + simultaneous `apt.stackLineGrow`.
**EDUCATIONAL PURPOSE:** Show the LCM-clearing step collapsing into the simplest linear form.
**VISUAL HIERARCHY:** Stack column now 2 cards deep, connector line visible; Step 2 card remains the dominant center focus.
**ATTENTION MANAGEMENT:** The equation visually "shrinks" left-to-right (2x+65−x)/10=8 → x+65=80, mirroring the spoken simplification.
**MOTION NOTES:** No decorative animation beyond the standard morph + text reveal.

### SCENE 6 — Step 3: Solving for x and the Answer
**TIMESTAMP:** 64.1 – 73.74s
**VOICEOVER:** "So X is equal to fifteen. That means walking distance is fifteen kilometer. So cycling distance is sixty-five minus fifteen, which is fifty kilometer."
**VISUAL OBJECTIVE:** Morph Step 2 into the stack (grow the 1→2 line), reveal the final solve: x = 15, then cycling distance = 50 km.
**SCREEN LAYOUT:** `#stack-step2` at `left:100px;top:440px` *(hand-measured)*. `#line-1-2` connector. `card-step3 .solution-card` at `left:640px;top:460px`.
**ON-SCREEN ELEMENTS:** Stack shows `G` → `1` → `2` circles, two connector lines. Active card: `.chip` "Step 3", `.math`:
```
x = 15 km  (walking distance)
Cycling distance = 65 − 15 = <ans>50 km</ans>
```
**ANIMATION DETAILS:**
- `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 63.5)` (lands right after "eighty. So" at 63.86, morph begins slightly before so it completes as the phrase closes).
- `apt.stackLineGrow(tl, "#line-1-2", 63.5)`.
- `apt.cardEnter(tl, "#card-step3 .solution-card", 64.5)`.
- `apt.textReveal(tl, "#card-step3 .math")`:
  - "x = 15 km" 64.22 *(word-level: "X" 64.22, "=" 64.82, "15" 65.24, matching "X is equal to fifteen" 64.22–65.72)*
  - "(walking distance)" 66.82 *(line-level, matches "walking distance is fifteen kilometer" 66.82–69.08)*
  - "Cycling distance = 65 − 15 =" 69.78 *(word-level: "Cycling" 69.78, "distance" 70.14, "=" 70.60, "65" 70.82, "−" 71.34, "15" 71.66, "=" 72.40, matching narration 69.78–72.74)*
  - "50 km" 72.78 *(`.ans` class, matches "fifty kilometer" 72.78–73.74)*
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** `apt.morphToStack` (0.8s) + `apt.stackLineGrow`.
**EDUCATIONAL PURPOSE:** Land the final numeric answer with the same word-synced reveal discipline as every prior step — no shortcut fade for the punchline.
**VISUAL HIERARCHY:** `.ans` styled span ("50 km") is the visual endpoint the whole card builds toward.
**ATTENTION MANAGEMENT:** Two-clause reveal (x=15 → cycling=50) matches the narration's own two-clause structure ("X is equal to fifteen... cycling distance is... fifty kilometer").
**MOTION NOTES:** No `apt.emphasize`/`apt.resultReveal` on `.ans` — text-reveal is sufficient per design.md 9.1; the correctness pulse is reserved for the options grid in Scene 7, not duplicated here.

### SCENE 7 — Options Reveal
**TIMESTAMP:** 74.0 – 78.24s
**VOICEOVER:** "Hence, the final answer will be option A, fifty kilometer."
**VISUAL OBJECTIVE:** Clear the stage for the options grid, morph Step 3 into the stack (grow the 2→3 line), reveal all four options, then pulse the correct one green.
**SCREEN LAYOUT:** `apt.recenterForOptions` shifts `#q-pinned` per template (`xShift:160, yShift:180`) to align with `.pinned-col` (`left:540px`). `#illus-pinned` fades out (its job is done). `#options-reveal` (`.pinned-col`, `top:400px`) holds the 2×2 `.options-grid`.
**ON-SCREEN ELEMENTS:** Stack column: `G`→`1`→`2`→`3` circles + 3 connector lines, all still visible (never faded, per design.md 9). Options grid:
```
[A: 50 km] (correct)   [B: 40 km]
[C: 25 km]              [D: 30 km]
```
**ANIMATION DETAILS:**
- `apt.fadeOut(tl, "#illus-pinned", 73.9)`
- `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 73.9)`
- `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 73.9)`
- `apt.stackLineGrow(tl, "#line-2-3", 73.9)`
- `apt.fadeIn(tl, "#options-reveal", 74.2)`
- `apt.optionsStagger(tl, ".opt-btn", 74.9)` (stagger 0.12s × 4, `power3.out`, 0.45s each — lands as "option A" (76.20–76.78) is spoken)
- `apt.correctPulse(tl, ".opt-btn.correct", 76.3)` — pulses right on "A," (76.64–76.78), holds through "fifty kilometer." (77.20–78.24)
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Standard `fadeOut`/`fadeIn`/`morphToStack`/`recenterForOptions` — all pre-existing helpers.
**EDUCATIONAL PURPOSE:** Confirm the derived answer (50 km) against the given options, reinforcing option-letter recall.
**VISUAL HIERARCHY:** Options grid becomes co-equal focus with the stack (the full solution trail is visible alongside the answer).
**ATTENTION MANAGEMENT:** Stagger draws the eye across all 4 options before the pulse isolates the correct one.
**MOTION NOTES:** Video holds on this final state through 78.24s (no further exits) — matches "All elements remain visible" convention from the README's example schedule.

---

## PART 3: Asset List Required

- No custom illustration SVGs are strictly required — the walking/cycling pairing can be built from simple flat 2D shapes (a stick-figure/silhouette style consistent with "flat 2D illustrations, Kurzgesagt-adjacent" per design.md) authored directly as inline SVG/CSS shapes inside `illustration/` (e.g. `illustration/walker.svg`, `illustration/cyclist.svg`), styled only with `--primary`/`--text` tokens.
- `_template/assets/serial-num-badge.svg` (copied, used by `.serial-num`)
- `_template/assets/logo.png` (copied, used by `.logo`)
- No new fonts, colors, or components beyond what `design-system.css` already defines.

## PART 4: Animation Complexity Notes

- All transitions use only pre-existing helpers: `apt.heroEnterLowered`, `apt.serialEnter`-equivalent parallel tween (per template's inline pattern), `apt.fadeIn`/`fadeOut`, `apt.cardEnter`, `apt.textReveal`, `apt.morphToStack` (0.8s, exactly 6 uses — Given→stack, Step1→stack, Step2→stack, Step3→stack), `apt.stackLineGrow` (3 uses), `apt.recenterForOptions`, `apt.optionsStagger`, `apt.correctPulse`.
- No custom easing curves or durations introduced — every duration matches the README's "Standard durations" table exactly.
- The two illustration icons (walker, cyclist) use the existing `apt.cardEnter`-style fromTo tween (already defined for solution cards) rather than a new animation — reused, not invented.
- Stack card vertical gaps (`top` values: G=140, 1=290, 2=440ish, 3=~590ish) and `.stack-line` `top`/`height` values are **placeholders here** and MUST be replaced with real measured values from each `.stack-card`'s actual rendered height once the HTML is built (per README 5B/5C and design.md §9) — captured via `getBoundingClientRect` in preview, not guessed.

## PART 5: Master Timeline Overview

```
TIME (s)   ELEMENT                              WHAT HAPPENS
─────────  ───────────────────────────────────  ─────────────────────────────────
0.0        Background layers                    Grid + strip + topic + logo visible
0.0        Voiceover                             audio starts, data-duration="78.24"
0.3        q-full-card                          heroEnterLowered starts (lowered)
0.8        serial-num                           pops in (lowered position, mirrors card)
2.34       q-full-card + serial-num              rise to resting position (RISE_TIME)
11.80      walker icon                           cardEnter-style fade/scale in
14.38      cyclist icon                          cardEnter-style fade/scale in
19.7       #phase1                               fadeOut
20.0       #q-pinned, #illus-pinned              fadeIn (pinned + shrunk illustration)
20.4       card-given                            cardEnter + textReveal begins
32.9       Given → stack-given                   morphToStack (0.8s)
33.9       card-step1                            cardEnter + textReveal begins
52.2       Step1 → stack-step1                   morphToStack (0.8s) + line-g-1 grows
53.2       card-step2                            cardEnter + textReveal begins
63.5       Step2 → stack-step2                   morphToStack (0.8s) + line-1-2 grows
64.5       card-step3                            cardEnter + textReveal begins
73.9       Step3 → stack-step3                   morphToStack (0.8s) + line-2-3 grows
73.9       #illus-pinned, #q-pinned               fadeOut illustration / recenterForOptions
74.2       #options-reveal                        fadeIn
74.9       .opt-btn ×4                            optionsStagger (0.12s stagger)
76.3       .opt-btn.correct (A)                   correctPulse
78.24      End                                    All elements remain visible, audio ends
```

**Note on stack gaps/line positions:** the `top` values above are first-pass estimates based on the template's own reference gaps; Step 5B of the build must re-measure each `.stack-card`'s actual rendered height in-browser (per `getBoundingClientRect`) and correct `top`/`.stack-line` `top`/`height` accordingly before final delivery — per design.md §9 and the README build checklist.
