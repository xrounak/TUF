# Speed-Time-Distance — Q21 — Storyboard

**Question:** The speeds of A and B are in the ratio 5 : 6. If A takes 72 minutes to cover a fixed distance, how long will B take?
**Options:** A) 66 minutes B) 60 minutes (correct) C) 54 minutes D) 64 minutes
**Video length:** 67.3s (voiceover ends 67.019s / transcript.json, END_FADE at 67.4s + 1.0s fade)

---

## PART 1: Narration Beat Analysis

| # | Time | Narration | Educational purpose | Attention focus | Visual objective |
|---|------|-----------|---------------------|------------------|-------------------|
| 1 | 0.10–3.08 | "So welcome back again. Time for one more problem." | Cold open | Question card | Question fades/rises in |
| 2 | 3.66–8.86 | "Now in this problem, we are given that the speeds of A and B are in the ratio of five is to six." | Establish the two-body ratio | Two car icons, ratio label | Car A + Car B appear side by side, "5 : 6" ratio chip builds between them |
| 3 | 9.42–13.02 | "Also, A takes 72 minutes to cover a fixed distance." | Give A's known time | Car A | "72 min" label fades up under Car A |
| 4 | 13.50–18.06 | "The question is asking us to find how much time B will take to cover the same distance." | Restate the ask | Car B | Car B pulses + a "?" badge marks it as the unknown |
| 5 | 18.36–22.50 | "Now let us assume the speed of A is 5X and the speed of B is 6X." | Convert ratio into algebraic variables | Given card | pinFlow glide; Given card opens with the variable setup |
| 6 | 22.88–24.32 | "Let us find the common distance." | Transition — pose the sub-goal | Given card (holding) | (no new visual — narration bridge before Step 1 opens) |
| 7 | 24.64–34.06 | "We know the formula, distance is equal to speed into time. For A, distance is equal to 5X into 72. This gives us 360X." | Step 1 computation — A's distance | Step 1 card | Formula → substitution → result, word-synced |
| 8 | 34.54–39.36 | "Since both of them cover the same distance, B also has to cover 360X." | Bridge — same distance applies to B | Step 1 card (closing line) | Bridging line reveals inside Step 1 card |
| 9 | 39.82–44.54 | "Now that we know the distance covered by B, let us find the time taken by B." | Transition to Step 2 | Step 1 morphs to stack; Step 2 opens | — |
| 10 | 45.20–52.78 | "Time taken by B is equal to distance covered by B, 360X, divided by the speed 6X." | Step 2 computation — set up B's time | Step 2 card | Formula/substitution word-synced |
| 11 | 53.16–58.38 | "Here, X gets canceled from both the numerator and the denominator." | Show the algebraic simplification | Step 2 card | Cancellation line reveals |
| 12 | 58.84–60.82 | "After simplifying this, we get 60 minutes." | Final answer | Step 2 card | = 60 minutes revealed (.ans) |
| 13 | 61.34–64.44 | "So B takes 60 minutes to cover the same distance." | Confirm result | Stack + options area | Step 2 morphs to stack; layout recenters |
| 14 | 64.94–67.02 | "Hence, the correct answer is option B." | Reveal correct option | Options grid | Options stagger in; correct option (B) pulses green |

---

## PART 2: Scene-by-Scene Storyboard

### SCENE 1 — Question Reveal + Illustration Build
**TIMESTAMP:** 0.3s – 18.1s (PIN_TIME)
**VOICEOVER:** "So welcome back again. Time for one more problem. Now in this problem, we are given that the speeds of A and B are in the ratio of five is to six. Also, A takes 72 minutes to cover a fixed distance. The question is asking us to find how much time B will take to cover the same distance."
**VISUAL OBJECTIVE:** Establish the two cars, their speed ratio, A's known time, and B's time as the unknown to solve for.
**SCREEN LAYOUT:** Full question card centered top (lowered-hero start, rises at 3.4s). Two flat 2D car icons centered mid-frame (`#illustration`, `justify-content:space-between`), a "5 : 6" ratio chip between them, "72 min" label pinned under Car A, a small "?" badge on Car B.
**ON-SCREEN ELEMENTS:**
- `#q-full-card` — "The speeds of A and B are in the ratio <span class="num">5 : 6</span>. If A takes <span class="num">72 minutes</span> to cover a fixed distance, how long will B take?"
- `#serial-num` badge (Q)
- `#illustration`: `#car-a-wrap` (left, `car.svg` as-is, "Car A" implied by position) with `#time-a-label` ("72 min") beneath; a centered `#ratio-chip` ("5 : 6") pill between the cars; `#car-b-wrap` (right, `car.svg` mirrored `scaleX(-1)`) with a small `#unknown-badge` ("?") pinned to its top-right corner.
**ANIMATION DETAILS:**
- 0.3s: `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.4)` — card rises to rest as "problem." finishes (3.08s + buffer).
- 0.8s: `#serial-num` parallel tween (mirrors heroEnterLowered's y-offset), rises with the card at 3.4s.
- 5.9s: `#car-a-wrap` and `#car-b-wrap` fade+scale in together (fromTo y:20→0, scale:0.85→1, opacity 0→1, 0.55s, `back.out(1.4)`) timed to "the speeds of A and B" (5.92).
- 8.08s: `#ratio-chip` ("5 : 6") pops in (scale+opacity, 0.4s, `power2.out`) timed to "five is to six" (8.08–8.86).
- 10.54s: `#time-a-label` ("72 min") fades up beneath Car A (`fromTo y:10→0, opacity 0→1`, 0.4s) timed to "72" (10.54).
- 15.44s: `apt.emphasize(tl, "#car-b-wrap img", 15.44)` — Car B pulses (scale 1→1.1 yoyo, 0.3s) timed to "B" in "how much time B will take" (15.44–16.10, an unusually long word); `#unknown-badge` fades in at the same moment (`fromTo scale:0.5→1, opacity 0→1`, 0.3s) so the "?" appears exactly as the pulse draws the eye to Car B.
**CAMERA MOVEMENT:** Static frame — all motion is element-level.
**TRANSITIONS:** None yet; scene ends with pinFlow into Scene 2.
**EDUCATIONAL PURPOSE:** Let the viewer visually anchor "5 : 6 ratio", "72 min belongs to A", and "B's time is the unknown" before any algebra appears.
**VISUAL HIERARCHY:** Question card > car icons > ratio chip > 72-min label > "?" badge.
**ATTENTION MANAGEMENT:** One new element per phrase — ratio chip, then time label, then the pulse+badge on the unknown car — never more than one entrance per breath.
**MOTION NOTES:** Both cars stay static (no driving animation) — the ratio and the "unknown" marker are the message, not motion of the cars themselves.
**CONTINUITY FROM PREVIOUS SCENE:** Cold open — nothing precedes this.

---

### SCENE 2 — Pin + Given
**TIMESTAMP:** PIN_TIME = 18.1s, GIVEN_TIME = 19.0s
**VOICEOVER:** (18.36–22.50) "Now let us assume the speed of A is 5X and the speed of B is 6X."
**VISUAL OBJECTIVE:** Compress the scenario to a pinned recap, then formalize the ratio into algebraic variables.
**SCREEN LAYOUT:** Question pins to top-shrunk card; both car icons shrink into `#illus-pinned` (`justify-content:space-between`) with a "5 : 6" recap label centered between them; Given SolutionCard opens center.
**ON-SCREEN ELEMENTS:**
- `#q-pinned` — shortened question text with accents.
- `#illus-pinned`: `#illus-pinned-car-a` (small, left), centered "Ratio 5 : 6" label, `#illus-pinned-car-b` (small, right, mirrored).
- `#card-given .solution-card` — chip "Given", math (4 lines):
  - line-level recap: "Ratio of speeds (A : B) = <span class="hi">5 : 6</span>"
  - line-level recap: "A's time to cover distance = <span class="hi">72 min</span>"
  - word-level, live-matched: "Speed of A = <span class="hi">5x</span>"
  - word-level, live-matched: "Speed of B = <span class="hi">6x</span>"
**ANIMATION DETAILS:**
- 18.1s (PIN_TIME): `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 18.1)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 18.1)` fired together.
- 18.1s: `apt.fadeOut(tl, "#serial-num", 18.1, 0.5)`.
- 19.0s (GIVEN_TIME): `apt.cardEnter(tl, "#card-given .solution-card", 19.0)`.
- 19.0s: `apt.textReveal(tl, "#card-given .math")` — reveal spans:
  - "Ratio of speeds (A : B) = 5 : 6" — data-t 19.0 (line-level recap, opens with the card)
  - "A's time to cover distance = 72 min" — data-t 19.35 (line-level recap, follows immediately)
  - "Speed"(19.66) "of"(19.90) "A"(20.08) "="(20.16) "5x"(20.48, hi) — from "the speed of A is 5X"
  - "Speed"(21.32) "of"(21.56) "B"(21.74) "="(21.82) "6x"(22.14, hi) — from "the speed of B is 6X"
**CAMERA MOVEMENT:** None — pinFlow is the only motion.
**TRANSITIONS:** pinFlow glide (0.8s) is the scene's opening transition.
**EDUCATIONAL PURPOSE:** Formalizes "ratio → variables" — the algebraic move the rest of the solution depends on, while re-anchoring the two given facts (ratio, A's time) the viewer already saw in Phase 1.
**VISUAL HIERARCHY:** Pinned question (context) → pinned cars (recap) → Given card (active focus, center).
**ATTENTION MANAGEMENT:** Recap lines land first (already-known facts), then the live word-synced variable lines — mirrors how the narration itself moves from recap to new algebra.
**MOTION NOTES:** No ambient loop needed — the Given card's own 4-line reveal keeps the frame alive for its ~4.4s window (19.0–22.5), and the card holds a further ~0.4s (to 22.9) through the transition sentence before morphing.
**CONTINUITY FROM PREVIOUS SCENE:** PIN_TIME (18.1s) lands right as beat 4 ("...find how much time B will take") resolves, so the pulse+badge on Car B (15.44s) has already settled before the glide begins. The pinFlow (18.1+0.8=18.9) completes just before GIVEN_TIME (19.0) — the pinned layout and the Given card's first reveal land almost back-to-back, no dead beat in between.

---

### SCENE 3 — Step 1: Find A's Distance
**TIMESTAMP:** GIVEN_MORPH = 22.9s → STEP1_TIME (card enter) = 23.9s → holds through the bridge line, exits at STEP1_MORPH = 43.6s
**VOICEOVER:** (22.88–39.36) "Let us find the common distance. We know the formula, distance is equal to speed into time. For A, distance is equal to 5X into 72. This gives us 360X. Since both of them cover the same distance, B also has to cover 360X."
**VISUAL OBJECTIVE:** Derive A's actual distance (360x) and establish that B covers the same distance.
**SCREEN LAYOUT:** Given card morphs into stack (badge "G", left column); Step 1 SolutionCard opens center.
**ON-SCREEN ELEMENTS:**
- `#stack-given .stack-card` (collapsed recap, plain fade-in via morph).
- `#card-step1 .solution-card` — chip "Step 1", math (4 lines):
  - word-level: "Distance = Speed × Time"
  - word-level: "For A: distance = <span class="hi">5x</span> × <span class="hi">72</span>"
  - word-level, `.ans`: "= <span class="ans hi">360x</span>"
  - line-level bridge: "B's distance also = <span class="hi">360x</span>"
**ANIMATION DETAILS:**
- 22.9s: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 22.9)`.
- 23.9s: `apt.cardEnter(tl, "#card-step1 .solution-card", 23.9)`.
- 23.9s: `apt.textReveal(tl, "#card-step1 .math")`:
  - "Distance"(25.88) "="(26.30) "Speed"(26.82) "×"(27.06) "Time"(27.30) — from "distance is equal to speed into time"
  - "For"(28.02) "A:"(28.28, hi) "distance"(28.42) "="(28.84) "5x"(29.98, hi) "×"(30.52) "72"(31.06, hi) — from "for A, distance is equal to 5X into 72"
  - "="(32.02) "360x"(32.82, .ans hi) — from "this gives us 360X"
  - "B's distance also = 360x" — data-t 34.54 (line-level bridge, matches start of "since both of them cover the same distance...")
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** 0.8s morph in, 0.8s morph out (to Scene 4).
**EDUCATIONAL PURPOSE:** Converts the abstract formula into a concrete algebraic distance (360x) and makes the "same distance applies to B" logic explicit before Step 2 begins.
**VISUAL HIERARCHY:** Formula line → substitution line → answer (`.ans`, primary blue, largest weight) → bridging conclusion.
**ATTENTION MANAGEMENT:** Formula appears first as a plain statement, then substitution, then result, then the bridge — mirrors the narration's own build-up, one idea per breath.
**MOTION NOTES:** No pulses beyond textReveal — straightforward calculation, no ambient/emphasis needed. Card holds an extra ~4.8s (34.54→39.36 spoken content, then the 39.82–44.54 transition sentence plays while the card is still up) before morphing at 43.6.
**CONTINUITY FROM PREVIOUS SCENE:** The Given card's box is still completing its 0.8s morph into the stack (badge "G", landing at 22.9+0.8=23.7) as Step 1's card starts fading in at 23.9s — a 0.2s breathing gap keeps the handoff clean.

---

### SCENE 4 — Step 2: Find B's Time
**TIMESTAMP:** STEP1_MORPH = 43.6s → STEP2_TIME (card enter) = 44.6s → exits at STEP2_MORPH = 61.4s
**VOICEOVER:** (39.82–60.82) "Now that we know the distance covered by B, let us find the time taken by B. Time taken by B is equal to distance covered by B, 360X, divided by the speed 6X. Here, X gets canceled from both the numerator and the denominator. After simplifying this, we get 60 minutes."
**VISUAL OBJECTIVE:** Set up B's time equation, show the algebraic cancellation, and land the final answer.
**SCREEN LAYOUT:** Step 1 morphs into stack (badge "1"), connector line G→1 grows; Step 2 card opens center.
**ON-SCREEN ELEMENTS:**
- `#stack-step1 .stack-card`.
- `#line-g-1` connector (grown via `apt.setStackLine` + `apt.stackLineGrow`).
- `#card-step2 .solution-card` — chip "Step 2", math (3 lines):
  - word-level: "Time (B) = <span class="hi">360x</span> ÷ <span class="hi">6x</span>"
  - word-level: "x gets cancelled from numerator and denominator"
  - word-level, `.ans`: "= <span class="ans">60 minutes</span>"
**ANIMATION DETAILS:**
- 43.6s: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 43.6)`.
- 43.6s: `apt.setStackLine("#line-g-1", "#stack-given .step-circle", "#stack-step1 .step-circle")` (called once pre-timeline) + `apt.stackLineGrow(tl, "#line-g-1", 43.6)`.
- 44.6s: `apt.cardEnter(tl, "#card-step2 .solution-card", 44.6)`.
- 44.6s: `apt.textReveal(tl, "#card-step2 .math")`:
  - "Time"(45.20) "="(46.40) "360x"(48.94, hi) "÷"(50.62) "6x"(52.30, hi) — from "time taken by B is equal to distance covered by B, 360X, divided by the speed 6X"
  - "x"(54.04, hi) "gets"(54.18) "cancelled"(54.46) "from"(55.36) "numerator"(56.00) "and"(57.10) "denominator"(57.70) — from "X gets canceled from both the numerator and the denominator"
  - "="(58.84) "60"(60.26, .ans) "minutes"(60.38, .ans) — from "after simplifying this, we get 60 minutes"
- (No `apt.emphasize`/`apt.resultReveal` layered on `.ans` — textReveal is the sole reveal, per design.md.)
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** 0.8s morph in, then straight into Scene 5's morph + options reveal.
**EDUCATIONAL PURPOSE:** Closes the loop — shows the full equation (not just the answer) so the viewer can verify the x-cancellation themselves.
**VISUAL HIERARCHY:** Equation line → cancellation explanation → final answer (largest, `.ans` primary color).
**ATTENTION MANAGEMENT:** The `.ans` span is the last thing revealed in the card and the last thing revealed before the options grid — the natural handoff point to Scene 5.
**MOTION NOTES:** None beyond standard textReveal.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1's box is still completing its morph into `--primary-light` (landing 43.6+0.8=44.4) as Step 2's card begins fading in at 44.6s — the G→1 connector line grows in the same beat Step 1 lands, so the left column reads as continuously assembling.

---

### SCENE 5 — Options Reveal
**TIMESTAMP:** STEP2_MORPH / RECENTER_TIME = 61.4s, options fade-in = 62.4s, stagger = 63.0s, correct pulse = 66.6s, END_FADE_TIME = 67.4s
**VOICEOVER:** (61.34–67.02, tail) "So B takes 60 minutes to cover the same distance. Hence, the correct answer is option B."
**VISUAL OBJECTIVE:** Present all four options and confirm the derived answer (60 minutes) matches option B.
**SCREEN LAYOUT:** Illustration drops out; pinned question + stack column recenter against the now-visible options grid (2×2) on the right.
**ON-SCREEN ELEMENTS:**
- `#illus-pinned` fades out.
- `#q-pinned` recenters (`xShift:160, yShift:180`).
- `#stack-step2 .stack-card` (badge "2") + `#line-1-2` connector.
- `#options-reveal .options-grid`: A) 66 minutes, B) 60 minutes (`.correct`), C) 54 minutes, D) 64 minutes.
**ANIMATION DETAILS:**
- 61.4s: `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 61.4)`.
- 61.4s: `apt.setStackLine("#line-1-2", "#stack-step1 .step-circle", "#stack-step2 .step-circle")` + `apt.stackLineGrow(tl, "#line-1-2", 61.4)`.
- 61.4s: `apt.fadeOut(tl, "#illus-pinned", 61.4)` + `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 61.4)`.
- 62.4s: `apt.fadeIn(tl, "#options-reveal", 62.4)`.
- 63.0s: `apt.optionsStagger(tl, ".opt-btn", 63.0)`.
- 66.6s: `apt.correctPulse(tl, ".opt-btn.correct", 66.6)` — timed to "option" in "the correct answer is option B" (66.54–67.02).
- 67.4s (END_FADE_TIME): `apt.fadeOut(tl, "#root > div", 67.4, 1.0)` — everything fades together, ~0.4s after the voiceover ends (67.02s).
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Final morph + recenter + stagger reveal, then unified end fade.
**EDUCATIONAL PURPOSE:** Confirms the derived answer against the actual answer choices — closes the loop between algebra and the MCQ format.
**VISUAL HIERARCHY:** Options grid (equal weight A–D) → correct pulse draws the eye to B last.
**ATTENTION MANAGEMENT:** Stagger (0.12s per option) keeps the reveal readable; the pulse is the single final attention beat, timed to land as "option B" is spoken.
**MOTION NOTES:** Stack column (G-1-2 with 2 connectors) stays fully visible and unfaded throughout.
**CONTINUITY FROM PREVIOUS SCENE:** Step 2's card is still mid-morph into the stack (completing at 61.4+0.8=62.2s) as the options grid begins its own fade-in at 62.4s — the two motions land close together so the final stack circle and the options grid arrive as one continuous beat.

---

## PART 3: Asset List Required

- `illustration/car.svg` (already provided) — used twice: as-is for Car A (left), and mirrored via CSS `transform: scaleX(-1)` for Car B (right) — no recoloring (matches q13's precedent; the SVG's own fills already read fine at this scale).
- No other new SVGs — ratio chip, "72 min" label, and the "?" unknown-badge are all CSS/text, styled via a small per-question `<style>` block (design.md §7 — not shared components).
- Shared: `serial-num-badge.svg`, `logo.png` (from `_template/assets/`, copied per 5B).

## PART 4: Animation Complexity Notes

- Two illustration objects (cars) using the template's `justify-content:space-between` two-object pattern for both the full (Phase 1) and pinned (Phase 2+) illustration.
- Given card carries 4 reveal lines (2 line-level recap + 2 word-level live) because both the ratio and A's 72-minute time were spoken earlier in Phase 1, not restated verbatim at GIVEN_TIME — same pattern as q20's Given card recap lines.
- Only 2 Step cards (not 3–4) — this problem has exactly two calculations (A's distance, then B's time), so the stack only ever holds G/1/2, mirroring q13's structure.
- No `apt.ambientLoop` used — Given and Step 1 both carry their own staged reveals (including a held bridge line) through the relevant silent stretches, so a secondary ambient bob isn't needed.
- No `apt.emphasize`/`apt.resultReveal` layered on any `.ans` span — all number reveals go through `apt.textReveal`'s `.rv` mechanism only, per the single-reveal rule. `apt.emphasize` is used exactly once, on Car B's icon in Phase 1, to mark it as the unknown — not on any solution-card text.

## PART 5: Master Timeline Overview

```
0.3    Question card hero-enters (lowered)
3.4    Question card + badge rise to rest
5.9    Car A + Car B fade in together
8.08   "5 : 6" ratio chip pops in
10.54  "72 min" label fades in under Car A
15.44  Car B pulses (emphasize) + "?" unknown-badge fades in
18.1   PIN_TIME — pinFlow (question + illustration → pinned)
19.0   GIVEN_TIME — Given card enters + text-reveal (4 lines)
22.9   Given → stack (morph)
23.9   Step 1 card enters + text-reveal (4 lines incl. bridge)
43.6   Step 1 → stack (morph) + line G-1 grows
44.6   Step 2 card enters + text-reveal (3 lines)
61.4   Step 2 → stack (morph) + line 1-2 grows + RECENTER_TIME (illustration fades out, question recenters)
62.4   Options grid fades in
63.0   Options stagger in
66.6   Correct option (B) pulses
67.4   END_FADE_TIME — everything fades out together
68.4   End
```
