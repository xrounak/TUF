# ques22 — Storyboard
**Topic:** Speed and Time | **Tier:** Intermediate
**Question:** A plane covers a distance at 450 km/hr in 3.5 hours. If the same distance has to be covered in 2 hours 20 minutes, what should be the speed of the plane?
**Options:** A) 625 km/hr  B) 650 km/hr  C) **675 km/hr** (correct)  D) 700 km/hr
**Voiceover duration:** 95.219s

**Consistency reference:** built following `ques21/index.html` and `ques21/storyboard.md` exactly — same phase structure (Phase 1 hero question+illustration → Phase 2 pinned question + Given/Step morph chain → Phase 3 options reveal), same component set, same helper usage and durations.

---

## PART 1: Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|-----------|-----------|---------------------|------------------|-------------------|
| 1 | 0.14–4.62 | "So welcome back again. Time for one more problem." | Opening hook | Blank canvas | Calm start before content loads |
| 2 | 4.62–11.40 | "Now in this problem, a plane covers a distance at 450 kilometer per hour in 3.5 hours." | Introduce scenario | Question card + illustration | Question card rises in; plane illustration builds with speed/time labels |
| 3 | 12.04–18.44 | "The question is asking us, if the same distance has to be covered in 2 hours 20 minutes, then what should be the speed of the plane?" | State the goal | Question text | "speed of the plane" emphasized in primary blue |
| 4 | 18.84–24.96 | "So distance is same. Now we know the formula, distance equal to speed into time." | Set up the base formula | Given card | Question pins to top; Given card enters showing D = S × T |
| 5 | 25.36–28.56 | "So first, let us find the distance covered by the plane." | Motivate Step 1 | — | Given card morphs to stack; Step 1 card enters, chip "Step 1" |
| 6 | 28.96–38.58 | "Given speed is 450 km/hr and time is 3.5 hours, which is 7 by 2 hours, so distance will be 450 into 7 by 2." | Show the substitution | 450 × 7/2 | Step 1 math reveals word-by-word: Distance = 450 × 7/2 |
| 7 | 39.16–48.18 | "After simplifying this, we get 1575 kilometer. Now the same 1575 kilometer has to be covered in 2 hours 20 minutes..." | Complete Step 1 + bridge into Step 2 | 1575 km | Reveals = 1575 km (answer highlighted) |
| 8 | 48.60–53.64 | "...but we cannot use 2 hours 20 minutes directly." | Flag the unit mismatch | — | Brief hold, sets up Step 2 morph |
| 9 | 54.08–63.92 | "20 minutes means 20 by 60 hours. So 2 hours 20 minutes becomes 2 plus 20 by 60, which is 2 plus 1 by 3, so it becomes 7 by 3 hours." | Convert mixed time to a fraction of hours | 2h20m → 7/3 h | Step 1 morphs to stack; Step 2 card enters, converts 2h20m step by step to 7/3 h |
| 10 | 64.38–70.42 | "Now required speed will be distance, which is 1575, divided by time," | Motivate Step 3 | Formula reuse | Step 2 morphs to stack; Step 3 card enters showing Speed = Distance / Time |
| 11 | 70.84–84.14 | "which is 7 by 3 hours. That means 1575 into 3 by 7. Now 1575 divided by 7 is 225. So speed becomes 225 into 3," | Show the division-by-fraction simplification | 1575 ÷ (7/3) → 225 × 3 | Reveals fraction 1575/(7/3) → ×3/7 → 225 × 3 |
| 12 | 84.68–95.219 | "which is 675 kilometer per hour. Hence, the required speed is 675 kilometer per hour. So the final answer will be option C." | Reveal final answer | Options grid, option C | Step 3 morphs to stack; options grid fades in, staggers A–D, option C pulses green |

---

## PART 2: Scene-by-Scene Storyboard

### SCENE 1 — Opening (0.0s – 4.62s)
- **VOICEOVER:** "So welcome back again. Time for one more problem."
- **VISUAL OBJECTIVE:** Calm blank canvas before content loads.
- **SCREEN LAYOUT:** Background layers only — dotted-grid (65% opacity) + bottom-strip (15px blue) + topic-name ("Speed and Time") bottom-left + logo bottom-right.
- **ON-SCREEN ELEMENTS:** `.dotted-grid`, `.bottom-strip`, `.topic-name`, `.logo` only.
- **ANIMATION DETAILS:** None yet — static background per design system.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** N/A (start of video).
- **EDUCATIONAL PURPOSE:** Let the greeting land before visual content competes for attention.
- **VISUAL HIERARCHY:** Empty canvas.
- **ATTENTION MANAGEMENT:** Full attention on voiceover audio.
- **MOTION NOTES:** None.

### SCENE 2 — Question + Illustration Enter (4.62s – 18.84s)
- **VOICEOVER:** "Now in this problem, a plane covers a distance at 450 kilometer per hour in 3.5 hours. The question is asking us, if the same distance has to be covered in 2 hours 20 minutes, then what should be the speed of the plane?"
- **VISUAL OBJECTIVE:** Introduce the full question card and build a flat-2D illustration of a plane with its speed and time labeled.
- **SCREEN LAYOUT:** `#q-full-card` centered at top (left:50%, top:80px, width:1500px). `#serial-num` badge top-left (60px,60px). `#illustration` centered below at top:480px, width:1400px, height:300px.
- **ON-SCREEN ELEMENTS:**
  - `.q-card` (`#q-full-card`) with `.q-text`: "A plane covers a distance at <span class='num'>450 km/hr</span> in <span class='num'>3.5 hours</span>. If the same distance is covered in <span class='num'>2 hr 20 min</span>, find the <span class='num'>speed</span>."
  - `.serial-num` badge with fixed digit `Q`.
  - `#illustration`: flat 2D illustration — plane SVG (`illustration/plane.svg`) centered, a speed label ("450 km/hr") above, a time label ("3.5 hrs") below.
- **ANIMATION DETAILS:**
  - `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.6)` at 0.3s — rises to rest at 3.6s (end of "Time for one more problem.").
  - Parallel serial-num tween mirroring the hero rise.
  - Illustration builds in with `apt.cardEnter` at 6.06s (start of "a plane covers..."). Plane fades/scales in.
  - Speed label ("450 km/hr") fades up at 7.46s in sync with "four hundred fifty".
  - Time label ("3.5 hrs") fades in at 10.04s in sync with "in three point five hours".
  - `apt.emphasize` on "speed" phrase in `.q-text` at 17.70s (word "speed" starts, "what should be the speed of the plane").
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Hard cut into Scene 3 via `apt.fadeOut(tl, "#phase1", 18.4)`.
- **EDUCATIONAL PURPOSE:** Ground the viewer in the concrete scenario before formula work begins.
- **VISUAL HIERARCHY:** Question card > illustration > badge.
- **ATTENTION MANAGEMENT:** Sequential reveal (card → plane → speed → time) matches narration order.
- **MOTION NOTES:** Illustration settles before Phase 2 begins; no decorative motion.

### SCENE 3 — Pin + Given Card (18.84s – 25.36s)
- **VOICEOVER:** "So distance is same. Now we know the formula, distance equal to speed into time."
- **VISUAL OBJECTIVE:** Pin question small at top, shrink illustration below it, introduce the base formula as the Given SolutionCard.
- **SCREEN LAYOUT:** `#q-pinned` at left:385px, top:30px, width:1275px. `#illus-pinned` at left:280px, top:190px, width:1300px, height:210px (shrunk). `#card-given .solution-card` centered at left:640px, top:480px.
- **ON-SCREEN ELEMENTS:**
  - `.q-card.pinned` shortened `.q-text`: "Plane covers distance at <span class='num'>450 km/hr</span> in <span class='num'>3.5 hrs</span>. Find speed for <span class='num'>2 hr 20 min</span>."
  - `#illus-pinned`: same plane icon + labels, scaled down.
  - `.solution-card` (`#card-given`) chip "Given", `.math`:
    - `Distance = Speed × Time` (line-level formula heading)
    - `Speed = 450 km/hr` (word-level)
    - `Time = 3.5 hrs` (word-level)
- **ANIMATION DETAILS:**
  - `apt.fadeOut(tl, "#phase1", 18.4)`.
  - `apt.fadeIn(tl, "#q-pinned", 18.84)`, `apt.fadeIn(tl, "#illus-pinned", 18.84)`.
  - `apt.cardEnter(tl, "#card-given .solution-card", 18.9)`.
  - `apt.textReveal(tl, "#card-given .math")`: "Distance = Speed × Time" data-t=18.84 ("So distance is same...formula") → "Speed = 450 km/hr" data-t=22.52 ("distance equal to speed") → "Time = 3.5 hrs" data-t=24.70 ("into time").
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Morph out at Scene 4 start.
- **EDUCATIONAL PURPOSE:** Establish the working formula before substitution.
- **VISUAL HIERARCHY:** Pinned question (context) > Given card (active) > pinned illustration.
- **ATTENTION MANAGEMENT:** Given card is the only actively-revealing element.
- **MOTION NOTES:** `apt.cardEnter` standard 0.55s `back.out(1.4)`.

### SCENE 4 — Step 1: Find the Distance (25.36s – 39.16s)
- **VOICEOVER:** "So first, let us find the distance covered by the plane. Given speed is 450 km/hr and time is 3.5 hours, which is 7 by 2 hours, so distance will be 450 into 7 by 2. After simplifying this, we get 1575 kilometer."
- **VISUAL OBJECTIVE:** Substitute given values into D = S × T and simplify to 1575 km.
- **SCREEN LAYOUT:** Given card morphs into `#stack-given` (left:100px, top:140px). `#card-step1 .solution-card` centered at left:600px, top:440px, width:720px (fraction-bearing card).
- **ON-SCREEN ELEMENTS:**
  - `#stack-given .stack-card` `.step-circle` "G", collapsed math: "Speed = 450 km/hr / Time = 3.5 hrs".
  - `#card-step1` chip "Step 1", `.math`:
    - "Distance = Speed × Time" (line-level)
    - `= 450 × ` + `.frac`(7/2) (word/frac-level, "3.5 hours, which is 7 by 2")
    - `= <span class="ans">1575 km</span>`
- **ANIMATION DETAILS:**
  - `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 25.36)`.
  - `apt.cardEnter(tl, "#card-step1 .solution-card", 26.2)`.
  - `apt.textReveal(tl, "#card-step1 .math")`: "Distance = Speed × Time" data-t=26.2 → `450` data-t=29.68 → `×` data-t=33.64 → `.frac(7/2)` data-t=34.06 ("seven by two") → `=` data-t=39.16 → `1575 km` (ans) data-t=40.52 ("we get 1575 kilometer").
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** `apt.morphToStack` 0.8s power2.inOut into Scene 5.
- **EDUCATIONAL PURPOSE:** Compute the fixed distance before working with the new time constraint.
- **VISUAL HIERARCHY:** Step 1 active card > Given stack card (left, collapsed).
- **ATTENTION MANAGEMENT:** Word/fraction-level reveal mirrors the narration's step-by-step substitution.
- **MOTION NOTES:** `.frac` uses existing CSS component — no new visual invented.

### SCENE 5 — Step 2: Convert 2 hr 20 min to Hours (41.5s – 64.38s)
- **VOICEOVER:** "Now the same 1575 kilometer has to be covered in 2 hours 20 minutes, but we cannot use 2 hours 20 minutes directly. 20 minutes means 20 by 60 hours. So 2 hours 20 minutes becomes 2 plus 20 by 60, which is 2 plus 1 by 3, so it becomes 7 by 3 hours."
- **VISUAL OBJECTIVE:** Convert the mixed time (2 hr 20 min) into a single fraction of hours (7/3 hrs) for use in the speed formula.
- **SCREEN LAYOUT:** Step 1 morphs into `#stack-step1` (left:100px, top:290px). `#card-step2 .solution-card` centered at left:600px, top:440px, width:720px.
- **ON-SCREEN ELEMENTS:**
  - `#stack-step1 .stack-card` `.step-circle` "1", collapsed math: "450 × 7/2 =" / "1575 km".
  - `#card-step2` chip "Step 2", `.math`:
    - "Convert 2 hr 20 min to hours" (line-level, paraphrased)
    - `20 min = ` + `.frac`(20/60) `hr` (word/frac-level)
    - `2 hr 20 min = 2 + ` + `.frac`(1/3) ` = <span class="ans">7/3 hrs</span>` (word-level)
  - Connector `#line-g-1` grows between the G and 1 circles.
- **ANIMATION DETAILS:**
  - `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 41.5)` (after "1575 km" answer settles, narration flows straight into the time-conversion setup).
  - `apt.stackLineGrow(tl, "#line-g-1", 41.5)`.
  - `apt.cardEnter(tl, "#card-step2 .solution-card", 42.5)`.
  - `apt.textReveal(tl, "#card-step2 .math")`: "Convert 2 hr 20 min to hours" data-t=42.5 → `20 min` data-t=48.60 → `.frac(20/60)` data-t=54.08 ("20 minutes means 20 by 60") → `2 + ` data-t=58.14 ("2 hours 20 minutes becomes 2 plus") → `.frac(1/3)` data-t=60.58 ("2 plus 1 by 3") → `= 7/3 hrs` (ans) data-t=61.94 ("it becomes 7 by 3 hours").
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** `apt.morphToStack` into Scene 6.
- **EDUCATIONAL PURPOSE:** Isolate the tricky mixed-unit-to-fraction conversion as its own reasoning step.
- **VISUAL HIERARCHY:** Step 2 active card > Step 1 + Given stack cards (left column, connected by growing line).
- **ATTENTION MANAGEMENT:** Fraction visuals draw the eye to each conversion sub-step in narration order.
- **MOTION NOTES:** Stack cards persist per continuity rule.

### SCENE 6 — Step 3: Required Speed + Final Answer (64.38s – 95.219s)
- **VOICEOVER:** "Now required speed will be distance, which is 1575, divided by time, which is 7 by 3 hours. That means 1575 into 3 by 7. Now 1575 divided by 7 is 225. So speed becomes 225 into 3, which is 675 kilometer per hour. Hence, the required speed is 675 kilometer per hour. So the final answer will be option C."
- **VISUAL OBJECTIVE:** Divide distance by the fractional time, simplify to 675 km/hr, then reveal the options grid with C highlighted.
- **SCREEN LAYOUT:** Step 2 morphs into `#stack-step2` (left:100px, top:420px). `#card-step3 .solution-card` centered at left:600px, top:430px, width:760px. Options reveal (`#options-reveal`) fades in over the recentered pinned-question column at top:400px.
- **ON-SCREEN ELEMENTS:**
  - `#stack-step2 .stack-card` `.step-circle` "2", collapsed math: "2 hr 20 min = 7/3 hrs".
  - `#card-step3` chip "Step 3", `.math`:
    - "Speed = Distance / Time" as `.frac` (line-level)
    - `= 1575 / ` + `.frac`(7/3) (word/frac-level, "1575 divided by time, which is 7 by 3 hours")
    - `= 1575 × ` + `.frac`(3/7) (word-level, "that means 1575 into 3 by 7")
    - `= 225 × 3` (word-level, "1575 divided by 7 is 225... 225 into 3")
    - `= <span class="ans">675 km/hr</span>` (ans, "which is 675 kilometer per hour")
  - Connector `#line-1-2` grows between circles 1 and 2.
  - `#options-reveal` `.options-grid` with four `.opt-btn`: A) 625, B) 650, C) 675, D) 700 km/hr — C has class `correct`.
- **ANIMATION DETAILS:**
  - `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 64.38)`.
  - `apt.stackLineGrow(tl, "#line-1-2", 64.38)`.
  - `apt.cardEnter(tl, "#card-step3 .solution-card", 65.4)`.
  - `apt.textReveal(tl, "#card-step3 .math")`: "Speed = Distance/Time" data-t=65.4 → `1575` data-t=68.48 → `.frac(7/3)` data-t=70.84 → `= 1575 ×` data-t=72.74 → `.frac(3/7)` data-t=75.44 → `225` data-t=78.02 → `× 3` data-t=81.66 → `675 km/hr` (ans) data-t=85.08.
  - Step 3 morphs into `#stack-step3` + `#line-2-3` grows at 87.72s (aligns with "Hence, the required speed...").
  - `apt.fadeOut(tl, "#illus-pinned", 87.72)` and `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 87.72)`.
  - `apt.fadeIn(tl, "#options-reveal", 88.3)`.
  - `apt.optionsStagger(tl, ".opt-btn", 88.8)` (stagger 0.12s across A→D).
  - `apt.correctPulse(tl, ".opt-btn.correct", 94.94)` — timed to "option C" (word "option" starts 94.56, "C" at 95.16).
  - Final hold: `tl.set({},{},95.219)`.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Final morph + fade sequence, ending on a static hold.
- **EDUCATIONAL PURPOSE:** Complete the division-by-fraction simplification and confirm the final numeric answer against the options.
- **VISUAL HIERARCHY:** Step 3 active card → stack card transition → options grid with C pulsing green.
- **ATTENTION MANAGEMENT:** Single climax — correctPulse is the last motion event.
- **MOTION NOTES:** All stack cards + connector lines remain visible and un-faded through the end.

---

## PART 3: Asset List Required

- **Illustration:** `illustration/plane.svg` (reused verbatim from `speed and time/Amateur/ques19/illustration/plane.svg` — flat 2D plane icon, matches design system's flat-illustration style). Phase 1 shows the plane SVG with "450 km/hr" / "3.5 hrs" labels above/below. Pinned (Phase 2+) illustration is the same SVG flanked by the two labels, scaled down.
- All other visual elements (cards, chips, stack circles, options, badges, fractions) come directly from `design-system.css` components — no new assets needed.

## PART 4: Animation Complexity Notes

- Standard complexity — no new animation helpers required. Uses only: `apt.heroEnterLowered`, serial-num parallel tween (template pattern), `apt.fadeIn`/`fadeOut`, `apt.cardEnter`, `apt.textReveal`, `apt.morphToStack` (×3, one per step), `apt.stackLineGrow` (×2), `apt.recenterForOptions`, `apt.optionsStagger`, `apt.correctPulse`, `apt.emphasize`.
- 4 cards total (Given + Step 1 + Step 2 + Step 3) with 3 connector lines (`line-g-1`, `line-1-2`, `line-2-3`) — matches the template's standard 4-card/3-line pattern used in ques21, no structural deviation.
- Two `.frac` elements are used in Step 1 (7/2) and Step 2 (20/60, 1/3) and Step 3 (7/3, 3/7) — all via the existing `.frac` component, no new visual invented.
- Given card's `.rv` reveal timestamps in Scene 3 are approximate (re-surfacing the formula as it's framed) since exact word-level matches for "Speed"/"Time" don't recur verbatim at that instant — line/word-level fallback used per convention, consistent with ques21's Given-card approach.

## PART 5: Master Timeline Overview

```
TIME (s)   ELEMENT                          WHAT HAPPENS
─────────  ───────────────────────────────  ─────────────────────────────────
0.0        Background layers                Grid + strip + topic + logo visible
0.3        QuestionCard (full, lowered)     heroEnterLowered begins
0.8        SerialNum badge                  pops in at lowered y-offset
3.6        QuestionCard + badge             rise to resting position
6.06       Illustration (plane)             builds in
7.46       Speed label "450 km/hr"          fades up
10.04      Time label "3.5 hrs"             fades in
17.70      "speed" emphasis                 apt.emphasize on q-text phrase

[ END OF PHASE 1 ]
18.4       Phase 1 elements                 fadeOut
18.84      QuestionCard (pinned)            fadeIn
18.84      Illustration (pinned)            fadeIn
18.9       Given card                       cardEnter + textReveal (D=S×T, Speed=450, Time=3.5)

[ STEP CYCLE ]
25.36      Given → Given stack               morphToStack ("So first," @25.36)
26.2       Step 1 card                      cardEnter + textReveal (450×7/2=1575 km)
41.5       Step 1 → Step 1 stack            morphToStack + line-g-1 grows
42.5       Step 2 card                      cardEnter + textReveal (2hr20min → 7/3 hrs)
64.38      Step 2 → Step 2 stack            morphToStack + line-1-2 grows
65.4       Step 3 card                      cardEnter + textReveal (1575÷7/3 = 675 km/hr)
87.72      Step 3 → Step 3 stack            morphToStack + line-2-3 grows
87.72      Pinned question                  recenterForOptions

[ PHASE 3 — OPTIONS REVEAL ]
88.3       options-reveal container         fadeIn
88.8       Option buttons A/B/C/D           optionsStagger
94.94      Option C (correct)               correctPulse ("...option C")
95.219     End                              All elements remain visible
```
