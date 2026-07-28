# Storyboard — Speed & Time / Intermediate / Question 24
**"Jogger at two speeds" — actual distance problem**

Question: If a jogger runs at 9 km/hr instead of 6 km/hr, she covers 18 km more. Her actual distance covered is:
Options: A) 30 km · B) 42 km · C) 24 km · D) **36 km (correct)**

Voiceover total duration: **110.86s**. All timestamps below are absolute seconds pulled directly from `transcript.json`.

---

## PART 1 — Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|-----------|-----------|---------------------|------------------|-------------------|
| 1 | 0.12–3.14 | "So welcome back again. Time for one more problem." | Cold open, orients returning viewer | Center screen | Question card rises into its resting slot |
| 2 | 3.72–13.35 | "...a jogger runs at nine kilometer per hour instead of six kilometer per hour...she covers 18 kilometer more." | States the core scenario (two speeds, extra distance) | Illustration | Road + jogger figure builds; 9 km/hr and 6 km/hr labels pop in; "+18 km" gap bracket draws |
| 3 | 14.08–18.75 | "The question is asking us to find the actual distance covered by the jogger." | Restates the unknown being solved for | Question card (still full-size) | Subtle emphasize pulse on "actual distance" in question text |
| 4 | 19.32–27.10 | "...time for which the jogger runs remains the same in both cases, only the speed changes." | Key insight that makes the algebra work | Illustration | Small "same time" tag fades in near both jogger positions |
| 5 | 27.52–30.80 | "...let us take the running time as t hours." | Defines variable t | Illustration | "t hours" label fades in |
| 6 | 31.30–34.48 | "Also, let the actual distance covered be x kilometer." | Defines variable x | Illustration | "x km" label fades in |
| 7 | 34.92–48.02 | "Now let us write the given values...six km/hr...nine km/hr...18 kilometer." | Formalizes the three known quantities | GivenCard (center) | Question pins to top, illustration shrinks; Given card enters; 3 lines reveal in sync |
| 8 | 48.62–59.02 | "The formula we need is distance equal to speed into time...At six km/hr, x equal to 6t." | Introduces D=S×T, applies to case 1 | Step 1 card | Given morphs to stack; Step 1 card enters; formula + first equation reveal |
| 9 | 59.72–67.20 | "...the second case...x plus 18 equals 9t." | Second equation from case 2 | Step 1 card | Second equation line reveals inside same card |
| 10 | 67.92–78.66 | "...put 6t in place of x. We get 6t plus 18 equals 9t...t equal to six hours." | Solves the equation for t | Step 2 card | Step 1 morphs to stack; Step 2 card enters; substitution + result reveal |
| 11 | 79.22–83.98 | "Now that we know the time, finding the actual distance is very easy." | Transition into final calculation | Step 3 card (entering) | Card box fades in ahead of its numeric content |
| 12 | 84.40–100.78 | "...x equal to 6t, and t is equal to six...x equal to six into six, x equal to 36 kilometer." | Final substitution → answer | Step 3 card | Recap equation, then t=6, then x=6×6=36 km (highlighted) reveal in sequence |
| 13 | 101.68–106.74 | "So the actual distance covered by the jogger is 36 kilometer." | Confirms the answer verbally | Step 3 card (already showing 36 km) | Card holds — no re-animation of already-revealed answer |
| 14 | 107.58–110.86 | "Hence, the correct answer is option D." | Final reveal | Options grid | Step 3 morphs to stack; options grid fades in, staggers in, D pulses green exactly on "option D" |

---

## PART 2 — Scene-by-Scene Storyboard

### SCENE 1 — Cold Open / Question Reveal
**TIMESTAMP:** 0.0s – 3.14s
**VOICEOVER:** "So welcome back again. Time for one more problem."
**VISUAL OBJECTIVE:** Establish the question, uncluttered, before any solving begins.
**SCREEN LAYOUT:** `QuestionCard` (`#q-full-card`, 1500px wide) centered horizontally, vertically lowered (reads as centered while alone in frame). `SerialNum` badge top-left, moving in tandem.
**ON-SCREEN ELEMENTS:** Dotted grid, bottom strip, topic name "Speed and Time" (bottom-left), logo (bottom-right), QuestionCard with full question text, SerialNum badge with fixed "Q".
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.14)` — card fades/scales/settles at 0.3s (`back.out(1.4)`, 0.7s), holds lowered through the opening line, then rises to resting position exactly at 3.14s (end of "one more problem"). Serial badge mirrors with its own parallel `fromTo`/`to` pair at 0.8s / 3.14s.
**CAMERA MOVEMENT:** None (static frame; only the card itself moves).
**TRANSITIONS:** None yet — first beat of the video.
**EDUCATIONAL PURPOSE:** Orient the viewer to the question before any numbers appear.
**VISUAL HIERARCHY:** Question card is the only focal object.
**ATTENTION MANAGEMENT:** Single object on screen — no competition.
**MOTION NOTES:** `apt.heroEnterLowered` + parallel badge tween only. No illustration yet.

---

### SCENE 2 — Scenario Build (Illustration)
**TIMESTAMP:** 3.72s – 13.35s
**VOICEOVER:** "Now, in this problem, a jogger runs at nine kilometer per hour instead of six kilometer per hour, and because of the higher speed, she covers 18 kilometer more."
**VISUAL OBJECTIVE:** Make the two-speed scenario and the "18 km more" gap immediately visible without any text/math yet.
**SCREEN LAYOUT:** `Illustration` area (`#illustration`, 1400px wide, centered, below the question card) holds a horizontal road with two parallel jogger tracks — a lower track (6 km/hr) and an upper track (9 km/hr) — a flat 2D running-figure icon on each, and a dashed bracket spanning the extra distance.
**ON-SCREEN ELEMENTS:** Road line (primary blue, `#6373db`), two flat black running-figure silhouettes, two speed tags "9 km/hr" and "6 km/hr" (primary blue text), a dashed bracket + "+18 km" label (primary blue) under the faster track showing how much further it reaches.
**ANIMATION DETAILS:**
- `apt.fadeIn(tl, "#illustration", 3.5)` — illustration wrapper fades in.
- `apt.roadSweep(tl, "#road-line", 3.7, 0.9)` — road draws left-to-right (`scaleX:0→1`, `power3.out`).
- Faster-jogger figure + "9 km/hr" tag: simple `fromTo(opacity/scale)` pop-in at 5.46 (word "nine" starts).
- Slower-jogger figure + "6 km/hr" tag: same pop-in at 8.00 (word "six" starts).
- "+18 km" dashed bracket: `apt.roadSweep`-style horizontal grow at 12.00 (word "18" starts), 0.5s duration.
**CAMERA MOVEMENT:** None — all motion is internal to the illustration.
**TRANSITIONS:** Continuous fade-in, no hard cut from Scene 1.
**EDUCATIONAL PURPOSE:** Visually anchor "same distance-ish scenario, two speeds, one gap" before any algebra.
**VISUAL HIERARCHY:** Illustration is now the primary focus; question card is present but secondary (still full-size, top of frame).
**ATTENTION MANAGEMENT:** Elements appear in narration order (9 km/hr mentioned first, then 6 km/hr, then the 18 km gap) so the eye never has to guess what's being talked about.
**MOTION NOTES:** No card components used here — this is native to the `Illustration` block, built per-question, not a template component.

---

### SCENE 3 — Question Restated
**TIMESTAMP:** 14.08s – 18.75s
**VOICEOVER:** "The question is asking us to find the actual distance covered by the jogger."
**VISUAL OBJECTIVE:** Re-focus attention on the unknown ("actual distance") right as it's named.
**SCREEN LAYOUT:** Unchanged from Scene 2 — question card + illustration both still visible.
**ON-SCREEN ELEMENTS:** Same as Scene 2.
**ANIMATION DETAILS:** `apt.emphasize(tl, ".q-text .num", 16.16)` — a light yo-yo scale pulse (0.3s, `power2.out`) on the "actual distance" accent span inside the question text, timed to when that phrase is spoken.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** None — continuous hold.
**EDUCATIONAL PURPOSE:** Keep the target of the problem front-of-mind.
**VISUAL HIERARCHY:** Question text momentarily becomes the focal point via the pulse.
**ATTENTION MANAGEMENT:** One small, restrained pulse — no new elements introduced.
**MOTION NOTES:** Single `apt.emphasize` call, nothing else changes.

---

### SCENE 4 — Setup Insight (same time, only speed changes) + Variable Definitions
**TIMESTAMP:** 19.32s – 34.48s
**VOICEOVER:** "Now, one thing is very important, the time for which the jogger runs remains the same in both cases, only the speed changes. So let us take the running time as t hours. Also, let the actual distance covered be x kilometer."
**VISUAL OBJECTIVE:** Introduce the two variables (t, x) directly onto the illustration before the Given card exists, so they read as scenario labels rather than abstract math.
**SCREEN LAYOUT:** Illustration unchanged in position; two small annotation tags added above it.
**ON-SCREEN ELEMENTS:** A "same time" pill tag (primary blue outline, black text) appearing centered above both jogger tracks; then "t hours" tag near the tracks; then "x km" tag near the road's end point.
**ANIMATION DETAILS:**
- "same time" tag: `apt.fadeIn(tl, "#tag-same-time", 21.18)`.
- "t hours" tag: `apt.fadeIn(tl, "#tag-t", 30.14)` (word "t" starts).
- "x km" tag: `apt.fadeIn(tl, "#tag-x", 33.48)` (word "x" starts).
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Continuous — these tags will be dropped (not carried into Phase 2) when the illustration shrinks for pinning.
**EDUCATIONAL PURPOSE:** Let the viewer meet t and x as concrete scenario labels before they appear in equations.
**VISUAL HIERARCHY:** Illustration remains dominant; tags are small secondary annotations.
**ATTENTION MANAGEMENT:** Tags appear one at a time, exactly as each variable is named.
**MOTION NOTES:** Plain `apt.fadeIn` only — no card system involved yet.

---

### SCENE 5 — Given Values (Pin + GivenCard)
**TIMESTAMP:** 34.92s – 48.02s (card visible from 34.9s)
**VOICEOVER:** "Now, let us write the given values. The speed in the first case is six kilometer per hour. The speed in the second case is nine kilometer per hour. The extra distance covered is 18 kilometer."
**VISUAL OBJECTIVE:** Formalize the three known quantities into the first `SolutionCard`.
**SCREEN LAYOUT:** Question card shrinks and pins to top (`#q-pinned`, left:385px, top:30px). Illustration shrinks into `#illus-pinned` (left:280px, top:190px) directly below it. `SolutionCard` "Given" appears centered at `left:640px; top:480px`.
**ON-SCREEN ELEMENTS:** `solutionChip` "Given", three math lines: "Speed (Case 1) = 6 km/hr", "Speed (Case 2) = 9 km/hr", "Extra Distance = 18 km" (values in `.hi` primary-blue accent).
**ANIMATION DETAILS:**
- `apt.fadeOut(tl, "#phase1", 34.5)` — full Phase-1 question+illustration fades.
- `apt.fadeIn(tl, "#q-pinned", 34.9)`, `apt.fadeIn(tl, "#illus-pinned", 34.9)`.
- `apt.cardEnter(tl, "#card-given .solution-card", 34.9)`.
- `apt.textReveal(tl, "#card-given .math")` with line-level `.rv` spans:
  - `data-t="36.94"` → "Speed (Case 1) = 6 km/hr" (matches "the speed in the first case is six kilometer per hour")
  - `data-t="41.08"` → "Speed (Case 2) = 9 km/hr"
  - `data-t="45.06"` → "Extra Distance = 18 km"
**CAMERA MOVEMENT:** None — this is a layout state change (pin), not a camera move.
**TRANSITIONS:** Hard cross-fade from Phase 1 to Phase 2 (fadeOut/fadeIn pair).
**EDUCATIONAL PURPOSE:** Lock in the knowns before introducing the formula.
**VISUAL HIERARCHY:** GivenCard is now the sole active focus; pinned question+illustration recede to a secondary reference role at top.
**ATTENTION MANAGEMENT:** Each line reveals exactly as its value is spoken, so eye and ear move together.
**MOTION NOTES:** Standard `cardEnter` (0.55s, `back.out(1.4)`) + `textReveal` (line-level, plain opacity fade).

---

### SCENE 6 — Step 1: Set Up the Equations
**TIMESTAMP:** 48.82s (card entrance) – 67.20s (content complete)
**VOICEOVER:** "The formula we need is distance equal to speed into time. Now let us apply this formula. At six kilometer per hour, x equal to 6t. Now look at the second case. The jogger covers 18 kilometer more than the actual distance, so x plus 18 equals 9t."
**VISUAL OBJECTIVE:** Turn the given values into two algebraic equations.
**SCREEN LAYOUT:** GivenCard morphs into `#stack-given` (left column, `.step-circle` "G"). `SolutionCard` "Step 1" enters at center (`left:640px; top:460px`, matching template Step-1 slot).
**ON-SCREEN ELEMENTS:** `solutionChip` "Step 1", math lines: "Distance = Speed × Time", "x = 6t", "x + 18 = 9t" (highlighted terms in `.hi`).
**ANIMATION DETAILS:**
- `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 48.02)` — 0.8s, completes 48.82. (Note: buffer between Given's last spoken value, 48.02, and the morph is 0s — see Part 4 on pacing.)
- `apt.cardEnter(tl, "#card-step1 .solution-card", 48.82)`.
- `apt.textReveal(tl, "#card-step1 .math")`:
  - `data-t="48.62"` → "Distance = Speed × Time" (line-level; narration already 0.2s underway when card fades in, resolves as simultaneous)
  - `data-t="57.76"` → "x = 6t" (word-level match to "x equal to 6t")
  - `data-t="65.82"` → "x + 18 = 9t" (word-level match to "x plus 18 equals 9t")
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** `apt.morphToStack` (0.8s, `power2.inOut`) — box slide+shrink+recolor, text crossfade.
**EDUCATIONAL PURPOSE:** Show the mechanical translation of the formula into two concrete equations, one per speed case.
**VISUAL HIERARCHY:** Active Step 1 card center-stage; Given now a smaller stack card, left column, still fully visible.
**ATTENTION MANAGEMENT:** The two equations reveal in the same order the two "cases" are spoken.
**MOTION NOTES:** No line-grow yet (only one item in the stack so far — the G circle has no partner to connect to).

---

### SCENE 7 — Step 2: Solve for t
**TIMESTAMP:** 68.00s (card entrance) – 78.66s (content complete)
**VOICEOVER:** "Now we already know that x is equal to 6t, so let us put 6t in place of x. We get 6t plus 18 equals 9t. So after solving this, we got t equal to six hours."
**VISUAL OBJECTIVE:** Walk through the substitution and isolate t.
**SCREEN LAYOUT:** Step 1 morphs into `#stack-step1` (`.step-circle` "1"). `SolutionCard` "Step 2" enters at center (`left:600px; top:440px; width:720px`, matching template Step-2 slot).
**ON-SCREEN ELEMENTS:** `solutionChip` "Step 2", math lines: "Substitute x = 6t", "6t + 18 = 9t", "t = 6 hours" (`.ans` highlight on the final line).
**ANIMATION DETAILS:**
- `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 67.20)` → completes 68.00.
- `apt.stackLineGrow(tl, "#line-g-1", 67.20)` — connector between G and 1 circles grows now that both exist.
- `apt.cardEnter(tl, "#card-step2 .solution-card", 68.00)`.
- `apt.textReveal(tl, "#card-step2 .math")`:
  - `data-t="67.92"` → "Substitute x = 6t" (line-level, paraphrase of "we already know that x is equal to 6t...")
  - `data-t="73.28"` → "6t + 18 = 9t" (word-level, matches "we get 6t plus 18 equals 9t")
  - `data-t="76.98"` → "t = 6 hours" (word-level, matches "t equal to six hours")
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** `apt.morphToStack` + simultaneous `apt.stackLineGrow`.
**EDUCATIONAL PURPOSE:** Make the algebraic solving step explicit and traceable, one line at a time.
**VISUAL HIERARCHY:** Step 2 active card is focal; Given + Step 1 sit connected in the stack column, forming a visible chain of reasoning.
**ATTENTION MANAGEMENT:** Three reveals land exactly on "put 6t in place," "we get 6t+18=9t," and "t equal to six hours" — narration and text move in lockstep.
**MOTION NOTES:** First connector line of the video grows here (`#line-g-1`).

---

### SCENE 8 — Step 3: Find the Actual Distance
**TIMESTAMP:** 79.46s (card entrance) – 106.74s (content complete)
**VOICEOVER:** "Now that we know the time, finding the actual distance is very easy. Remember, we already have the equation x equal to 6t, and we have just found that t is equal to six. So let us substitute this value, x equal to six into six, x equal to 36 kilometer. So the actual distance covered by the jogger is 36 kilometer."
**VISUAL OBJECTIVE:** Deliver the final numeric answer, 36 km, with clear provenance from the two prior steps.
**SCREEN LAYOUT:** Step 2 morphs into `#stack-step2` (`.step-circle` "2"). `SolutionCard` "Step 3" enters at center (`left:580px; top:420px; width:760px`, matching template Step-3 slot).
**ON-SCREEN ELEMENTS:** `solutionChip` "Step 3", math lines: "x = 6t", "t = 6", "x = 6 × 6", "x = 36 km" (`.ans` highlight, final line).
**ANIMATION DETAILS:**
- `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 78.66)` → completes 79.46.
- `apt.stackLineGrow(tl, "#line-1-2", 78.66)` — connector between circles 1 and 2.
- `apt.cardEnter(tl, "#card-step3 .solution-card", 79.46)` (card box visible ~3.7s ahead of its first numeric reveal — narration is on a transition line here, "finding the actual distance is very easy," so an empty-ish card briefly holds by design, matching the beat).
- `apt.textReveal(tl, "#card-step3 .math")`:
  - `data-t="87.28"` → "x = 6t" (word-level, recap: "we already have the equation x equal to 6t")
  - `data-t="90.74"` → "t = 6" (word-level: "t is equal to six")
  - `data-t="94.74"` → "x = 6 × 6" (word-level: "x equal to six into six")
  - `data-t="97.80"` → "x = 36 km" (word-level, `.ans` class: "x equal to 36 kilometer")
- No further animation on "36 km" during 101.68–106.74 (the verbal confirmation line) — per design.md, an already-revealed answer is not re-pulsed.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** `apt.morphToStack` + `apt.stackLineGrow`.
**EDUCATIONAL PURPOSE:** Close the loop — recap the two known facts (x=6t, t=6) before combining them into the final answer, so the answer isn't a "magic number."
**VISUAL HIERARCHY:** Step 3 active card is focal; three stacked cards (G, 1, 2) plus growing connectors visible on the left, showing the full solution chain.
**ATTENTION MANAGEMENT:** Four sequential reveals mirror the four narration beats (recap x, recap t, multiply, result) — no rush, viewer can follow each substitution.
**MOTION NOTES:** Final `.ans` line is the emotional peak of the solving phase — reveal via `apt.textReveal` only, no `emphasize`/`resultReveal` layered on top (per design.md 9.1).

---

### SCENE 9 — Options Reveal
**TIMESTAMP:** 106.74s – 110.86s (+ hold)
**VOICEOVER:** "Hence, the correct answer is option D."
**VISUAL OBJECTIVE:** Present all four options and land on the correct one exactly as it's named.
**SCREEN LAYOUT:** Step 3 morphs into `#stack-step3` (`.step-circle` "3"). Pinned question recenters (`apt.recenterForOptions`, xShift:160, yShift:180) to align with `.pinned-col`. Pinned illustration fades out (no longer needed). `#options-reveal` fades in on `.pinned-col` (2×2 grid, `top:400px`).
**ON-SCREEN ELEMENTS:** Four `opt-btn` elements — A) 30 km, B) 42 km, C) 24 km, D) 36 km — with D carrying class `correct`.
**ANIMATION DETAILS:**
- `apt.fadeOut(tl, "#illus-pinned", 106.74)`.
- `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 106.74)`.
- `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 106.74)` → completes 107.54.
- `apt.stackLineGrow(tl, "#line-2-3", 106.74)`.
- `apt.fadeIn(tl, "#options-reveal", 107.6)` (right as "Hence" starts, immediately after the morph completes).
- `apt.optionsStagger(tl, ".opt-btn", 108.1)` — 4 buttons stagger in at 0.12s intervals while "the correct answer is" is spoken.
- `apt.correctPulse(tl, ".opt-btn.correct", 110.20)` — pulses exactly on the word "option" (110.20–110.86 covers "option D.").
- `tl.set({}, {}, 112)` — 1.1s hold after the audio ends, all elements remain visible.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Final `morphToStack` completes the stack (G→1→2→3, fully connected), then options fade/stagger in.
**EDUCATIONAL PURPOSE:** Confirm the answer against all four choices, reinforcing why the other three are wrong by contrast.
**VISUAL HIERARCHY:** Options grid is now primary; the full solution stack remains visible on the left as supporting evidence (per design.md — stack and lines are never faded during this phase).
**ATTENTION MANAGEMENT:** The correct option's green pulse is the single strongest visual event in the entire video, landing in sync with the narration's own emphasis on "option D."
**MOTION NOTES:** Stack column and connector lines stay at full opacity throughout — only the illustration and the momentary recenter shift happen here.

---

## PART 3 — Asset List Required

| Asset | Source | Notes |
|-------|--------|-------|
| `design-system.css` | Copied from `_template/` | No modification — use existing tokens/classes only |
| `animations.js` | Copied from `_template/` | No new helpers — all 9 scenes use only existing `apt.*` functions |
| `assets/serial-num-badge.svg` | Copied from `_template/assets/` | Used by `.serial-num` |
| `assets/logo.png` | Copied from `_template/assets/` | Bottom-right logo |
| `illustration/road-line.svg` (or inline CSS) | **New, per-question** | Simple horizontal line, primary-blue, built with `apt.roadSweep` |
| `illustration/jogger-figure.svg` ×2 (or shared, reused twice) | **New, per-question** | Flat 2D black silhouette, running pose — no new component, just per-question SVG content inside the existing generic `Illustration` block |
| No new colors | — | Only `--primary` (#6373db), `--text` (#000000), `--topic` (#949494) used in the illustration — no orange/other accent invented |

No new fonts, no new components, no new animation helpers are required — the illustration is custom per-question artwork placed inside the existing `Illustration` container, same as any train/car/boat illustration in other questions.

---

## PART 4 — Animation Complexity Notes

1. **Narration pacing is unusually tight.** Between Given's last spoken value (48.02s) and the Step 1 formula narration (48.62s) there is only ~0.6s — far less than the ~1s "breathing gap" the README describes as the default. Since (a) the 0.8s `morphToStack` duration is a hard, non-negotiable spec value, and (b) "card stays on screen until narration finishes" is also a hard rule, the only lever available is the *gap* between morph-start and the previous card's last word — which the README's Gap Rules section presents as a default, not one of the explicit ❌/✅ hard rules in 4D.1. This storyboard compresses that gap to ~0s at the Given→Step1, Step1→Step2, and Step2→Step3 transitions (all of which have similarly tight narration), while keeping every duration (0.55s cardEnter, 0.8s morph, etc.) exactly as specified. This is flagged per the instruction to call out any deviation before it's built.
2. **Step 3's card enters ~3.7s before its first text reveal** (79.46s enter vs. 87.28s first `.rv`) because the narration has a short transition line ("finding the actual distance is very easy") before any new number is spoken. The empty-ish card hold is intentional — it matches the narration beat rather than rushing content in early.
3. **No custom animation helpers were needed.** Every visual beat in this problem (2 given facts collapse into 2 equations → 1 equation solved for t → substitution for x) maps cleanly onto the existing Given + Step1 + Step2 + Step3 template shape, so no 5th card, no new `apt.*` function, and no layout change from `template.html` was required.
4. **Illustration reveal (Scenes 2–4)** uses only `apt.fadeIn`/`apt.roadSweep`/plain fromTo pop-ins — all patterns already established in `animations.js` and `design.md`'s Animation Patterns table (card entrance / fade / road sweep). Nothing new invented there either.
5. **Stack card vertical spacing and connector-line coordinates** (`#stack-given/step1/step2/step3` `top` values, `#line-*` `top`/`height`) are left at the template's placeholder values in this document and **must be re-measured against actual rendered card heights during the Step 5 build**, per the README's explicit instruction not to guess/copy these numbers across questions.

---

## PART 5 — Master Timeline Overview

```
TIME (s)     ELEMENT                        EVENT
──────────   ────────────────────────────   ──────────────────────────────────
0.0          Background layers              Dotted grid, bottom strip, topic, logo
0.3          #q-full-card                    heroEnterLowered starts (rises @ 3.14)
0.8          #serial-num                     Badge pop (rises @ 3.14)
3.5          #illustration                   fadeIn
3.7          road-line                       roadSweep (0.9s)
5.46         fast-jogger + "9 km/hr"         pop-in
8.00         slow-jogger + "6 km/hr"         pop-in
12.00        "+18 km" bracket                grow-in
16.16        .q-text .num ("actual distance") emphasize pulse
21.18        "same time" tag                 fadeIn
30.14        "t hours" tag                   fadeIn
33.48        "x km" tag                      fadeIn
34.5         #phase1                         fadeOut
34.9         #q-pinned, #illus-pinned         fadeIn
34.9         #card-given .solution-card       cardEnter
36.94/41.08/45.06   Given .math lines        textReveal (line-level ×3)
48.02        Given → #stack-given             morphToStack (0.8s) → completes 48.82
48.82        #card-step1 .solution-card       cardEnter
48.62/57.76/65.82   Step1 .math lines        textReveal (line + word level)
67.20        Step1 → #stack-step1             morphToStack (0.8s) → completes 68.00
67.20        #line-g-1                        stackLineGrow
68.00        #card-step2 .solution-card       cardEnter
67.92/73.28/76.98   Step2 .math lines        textReveal (line + word level)
78.66        Step2 → #stack-step2             morphToStack (0.8s) → completes 79.46
78.66        #line-1-2                        stackLineGrow
79.46        #card-step3 .solution-card       cardEnter
87.28/90.74/94.74/97.80  Step3 .math lines   textReveal (word level ×4, last is .ans)
106.74       Step3 → #stack-step3             morphToStack (0.8s) → completes 107.54
106.74       #line-2-3                        stackLineGrow
106.74       #illus-pinned                    fadeOut
106.74       #q-pinned                        recenterForOptions (xShift:160, yShift:180)
107.6        #options-reveal                  fadeIn
108.1        .opt-btn ×4                      optionsStagger (0.12s stagger)
110.20       .opt-btn.correct (D)             correctPulse
112.0        —                                Final hold; timeline ends
```

**Total video length: ~112s** (110.86s voiceover + ~1.1s hold). Matches the 60–150s expected range for an Intermediate-tier question with 1 Given + 3 Steps.
