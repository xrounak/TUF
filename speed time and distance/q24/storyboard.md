# Storyboard — Speed-Time-Distance Q24 (Same Route, Time Ratio → Speed Ratio)

Question: For the same route, the times taken by two cars are in the ratio 4 : 5.
What is the ratio of their speeds?
Correct answer: **Option B — 5 : 4**

Voiceover duration: **67.0s**

---

## PART 1 — Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|-----------|-----------|----------------------|------------------|-------------------|
| 1 | 0.10–3.20 | "So welcome back again. Time for one more problem." | Warm open, orient viewer | Center of frame | Question card rises into view |
| 2 | 3.52–12.42 | "...for the same route, the ratio of the times...is four is to five...find the ratio of their speeds." | State the full problem | Question text | Full question card + illustration build |
| 3 | 12.78–19.56 | "Both cars travel same route → same distance...let common distance be x km" | Establish shared unknown | Road / distance label | "x km" label appears on shared road |
| 4 | 20.02–27.30 | "Time ratio 4:5...car A = 4y hrs, car B = 5y hrs" | Convert ratio into algebraic variables | Each car's time label | "4y hrs" / "5y hrs" pop under each car |
| 5 | 27.76–31.26 | "Now we know the formula, speed = distance ÷ time" | Recall the governing formula | Center solution card | Formula card enters, layout pins to top |
| 6 | 31.80–37.42 | "Speed of car A = x/4y, speed of car B = x/5y" | Apply formula to each car | Fractions x/4y, x/5y | Two speed expressions built |
| 7 | 37.94–44.46 | "Let us find the ratio of their speeds = x/4y : x/5y" | Frame the ratio to solve | Ratio expression | Ratio of the two fractions shown |
| 8 | 44.86–52.90 | "Divide first fraction by second → x/4y × 5y/x" | Teach the division-of-fractions technique | Inverted multiplication | Fraction flips and multiplies |
| 9 | 53.32–58.34 | "x cancels with x, y cancels with y → left with 5/4" | Algebraic simplification | Canceled terms | x's and y's visually cancel, 5/4 remains |
| 10 | 58.76–61.84 | "Ratio of speeds is 5 is to 4" | State the final result | Answer | "5 : 4" locks in as the answer |
| 11 | 62.74–67.00 | "Final answer is 5 is to 4. Correct option is option B." | Confirm against options | Options grid | Option B highlights green |

---

## PART 2 — Scene-by-Scene Storyboard

### SCENE 1 — Cold Open + Question Reveal
- **TIMESTAMP:** 0.0 – 3.2s
- **VOICEOVER:** "So welcome back again. Time for one more problem."
- **VISUAL OBJECTIVE:** Establish the question card as the sole visual anchor before any data appears.
- **SCREEN LAYOUT:** `#q-full-card` centered horizontally, starts lowered (vertically centered while alone in frame) per `apt.heroEnterLowered`.
- **ON-SCREEN ELEMENTS:** Dotted-grid bg, bottom-strip, topic name "Speed, Time and Distance", logo, empty question card fading/scaling in.
- **ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.2)` — fromTo `y:230→180, scale 0.92→1, opacity 0→1`, 0.7s `back.out(1.4)` at t=0.3, then rises to `y:0` at t=3.2 (RISE_TIME, end of "one more problem.").
- **CAMERA MOVEMENT:** None (static frame, only the card itself moves).
- **TRANSITIONS:** N/A (opening scene).
- **EDUCATIONAL PURPOSE:** Give the viewer a clean read of the question before data is layered on.
- **VISUAL HIERARCHY:** Question card only element in motion.
- **ATTENTION MANAGEMENT:** Nothing else on screen to compete for focus.
- **MOTION NOTES:** SerialNum badge pops in parallel at t=0.8 (`back.out(2)`), rises with the card at RISE_TIME.
- **CONTINUITY FROM PREVIOUS SCENE:** N/A — video start.

### SCENE 2 — Full Question Text + Illustration Build
- **TIMESTAMP:** 3.52 – 19.56s
- **VOICEOVER:** "...for the same route, the ratio of the times taken by two cars is four is to five. The question is asking us to find the ratio of their speeds. Now, since both cars are traveling on the same route, the distance covered by both cars is the same. So let the common distance be x kilometers."
- **VISUAL OBJECTIVE:** Reveal the two-car illustration on a shared road, then label the road with the unknown distance "x km" the instant it's spoken.
- **SCREEN LAYOUT:** `#illustration` centered under the question card: Car A icon (left, facing right) — road line (center) — Car B icon (right, flipped `scaleX(-1)`, facing left).
- **ON-SCREEN ELEMENTS:** `#car-1-wrap` (car.svg + empty time-label slot), `#road-line` (scaleX 0→1 sweep), `#route-label` ("Route = x km"), `#car-2-wrap` (car.svg flipped + empty time-label slot).
- **ANIMATION DETAILS:**
  - t=4.0: `#car-1-wrap` fromTo `{y:20,scale:0.85,opacity:0}→{y:0,scale:1,opacity:1}` 0.55s `back.out(1.4)`.
  - t=4.6: `#car-2-wrap` same tween, staggered 0.6s after car-1.
  - t=5.2: `apt.roadSweep(tl, "#road-line", 5.2, 0.9)` — scaleX 0→1 from left, `power3.out`.
  - t=18.96 (word "x"): `#route-label` fromTo `{scale:0.8,opacity:0}→{scale:1,opacity:1}` 0.4s `power2.out` — text reads "Route = x km".
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Illustration elements stagger-enter, no hard cuts.
- **EDUCATIONAL PURPOSE:** Visually ground "same route" as one shared physical road before the algebra starts.
- **VISUAL HIERARCHY:** Road + two cars are the sole illustration; route label appears only once "x" is spoken, not before (no premature reveal).
- **ATTENTION MANAGEMENT:** Each car's time label stays hidden (`opacity:0`) through this scene — reserved for Scene 3 — so the viewer isn't shown 4y/5y before it's explained.
- **MOTION NOTES:** Same car.svg asset used for both, second instance mirrored via `transform:scaleX(-1)` (same technique as `q13/index.html`).
- **CONTINUITY FROM PREVIOUS SCENE:** The question card is already at rest (Scene 1's rise completed at 3.2s); illustration builds directly beneath it with no camera disruption — one continuous frame.

### SCENE 3 — Time Variables Land on Each Car
- **TIMESTAMP:** 20.02 – 27.30s
- **VOICEOVER:** "Also, because the time ratio is four is to five, let the time taken by car A be 4y hours, and let the time taken by car B be 5y hours."
- **VISUAL OBJECTIVE:** Attach the algebraic time variable to each car exactly as it's named.
- **SCREEN LAYOUT:** Same illustration frame; two label slots (previously empty) now populate.
- **ON-SCREEN ELEMENTS:** `#time-a-label` ("Time = 4y hrs"), `#time-b-label` ("Time = 5y hrs").
- **ANIMATION DETAILS:**
  - t=24.02 (word "4y"): `#time-a-label` fromTo `{y:10,opacity:0}→{y:0,opacity:1}` 0.4s `power2.out`.
  - t=26.62 (word "5y"): `#time-b-label` same tween.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Simple fades, no movement of existing elements.
- **EDUCATIONAL PURPOSE:** Anchor the abstract 4y/5y variables to concrete visual positions (under each car) so the later fraction math (x/4y, x/5y) reads as "this car's numbers."
- **VISUAL HIERARCHY:** Labels appear directly beneath their respective car, small (22px), secondary to the cars themselves.
- **ATTENTION MANAGEMENT:** One label at a time, each synced to its own word.
- **MOTION NOTES:** No bounce/scale — plain fade keeps focus on the word being spoken, not the animation.
- **CONTINUITY FROM PREVIOUS SCENE:** Same static illustration frame from Scene 2 — only the two label slots activate; nothing else moves.

### SCENE 4 — Given Card Recap (spans Scenes 1–3 in parallel)
- **TIMESTAMP:** 7.0 – 28.3s (card open), morphs to stack at 28.3s
- **VOICEOVER:** (mirrors Scenes 2–3 word-for-word, see Part 1 beats 3–4)
- **VISUAL OBJECTIVE:** Give the viewer a written, persistent recap of the same facts the illustration is building, for viewers who read rather than watch icons.
- **SCREEN LAYOUT:** `#card-given .solution-card` centered at `left:640px;top:640px` (low position, doesn't collide with the illustration above it).
- **ON-SCREEN ELEMENTS:** Chip "Given" + 4 `.rv` lines: "Time ratio = 4 : 5" / "Same route → same distance" / "Distance = x km" / "Time A = 4y hrs, Time B = 5y hrs".
- **ANIMATION DETAILS:** `apt.cardEnter(tl, "#card-given .solution-card", 7.0)`; `apt.textReveal(tl, "#card-given .math")` reveals each `.rv` at its own `data-t` (7.72/8.20 word-level for "4:5"; 12.78 line-level for "same route"; 18.96/19.04 word-level for "x km"; 24.02/24.30 and 26.62/26.92 word-level for "4y hrs"/"5y hrs").
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Card stays low and static through the pin (Scene 5) — it is NOT part of the `pinFlow` glide, matching `q13`'s pattern where the Given card holds its own position while question+illustration pin away.
- **EDUCATIONAL PURPOSE:** Redundant-but-reinforcing text channel for the same facts, aiding retention.
- **VISUAL HIERARCHY:** Secondary to the illustration during Phase 1 — smaller, lower on screen.
- **ATTENTION MANAGEMENT:** Reveals are staggered to always trail the matching illustration label by a beat, never lead it.
- **MOTION NOTES:** Card content builds up over ~21s (7.0→28.3) as the longest-lived single Given card in this build, since the "given" data itself spans the whole Phase 1 narration.
- **CONTINUITY FROM PREVIOUS SCENE:** Enters independently of the illustration's own entrance (Scene 2/3), coexists throughout, and is the one element still settling into place as Scene 5's pin fires.

### SCENE 5 — Pin to Top + Formula Recall
- **TIMESTAMP:** 27.8 – 29.1s
- **VOICEOVER:** "Now we know the formula, speed is equal to distance divided by time."
- **VISUAL OBJECTIVE:** Clear the center stage of the full illustration, replace it with a small pinned recap, and hand focus to the solution-card column.
- **SCREEN LAYOUT:** `#q-full-card`+`#illustration` glide to `#q-pinned`/`#illus-pinned` (top of frame, shrunk).
- **ON-SCREEN ELEMENTS:** Pinned question text ("Same route, time ratio 4:5 → find speed ratio"), pinned illustration (two small car icons flanking "x km · 4y & 5y hrs" recap label).
- **ANIMATION DETAILS:** `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 27.8)`; `apt.pinFlow(tl, "#illustration", "#illus-pinned", 27.8)`; `apt.fadeOut(tl, "#serial-num", 27.8, 0.5)`. Given card morphs to stack right after: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 28.3)`.
- **CAMERA MOVEMENT:** Real glide (not fade swap) — full elements visibly translate/scale toward their pinned slots over 0.8s, `power2.inOut`.
- **TRANSITIONS:** `pinFlow`, then `morphToStack` 0.5s later — the two transitions overlap slightly, reading as one continuous "everything settles into its working position" beat.
- **EDUCATIONAL PURPOSE:** Signal the shift from "reading the problem" to "solving it."
- **VISUAL HIERARCHY:** After this scene, the stack column (left) and the active solution card (center) become the primary focus for the rest of the video.
- **ATTENTION MANAGEMENT:** Serial-num badge fades out here — it has no pinned counterpart and would otherwise hard-cut.
- **MOTION NOTES:** Given card is mid-morph as Step 1 opens (Scene 6) — this is the deliberate "still completing its move as the next beat begins" continuity the format calls for.
- **CONTINUITY FROM PREVIOUS SCENE:** The illustration and question card that have been static since Scene 3 begin their first movement of the video here — a direct continuation of their held position, not a new element appearing.

### SCENE 6 — Step 1: Apply the Speed Formula
- **TIMESTAMP:** 29.2 – 38.6s
- **VOICEOVER:** "So the speed of car A is x divided by 4y and the speed of car B is x divided by 5y."
- **VISUAL OBJECTIVE:** Turn the formula into two concrete fractional expressions, one per car.
- **SCREEN LAYOUT:** `#card-step1 .solution-card` centered `left:640px;top:460px`.
- **ON-SCREEN ELEMENTS:** Chip "Step 1" + "Speed = Distance ÷ Time" (word-level) + "Speed A = x⁄4y" (fraction) + "Speed B = x⁄5y" (fraction).
- **ANIMATION DETAILS:** `apt.cardEnter(tl, "#card-step1 .solution-card", 29.2)`; `apt.textReveal(tl, "#card-step1 .math")` — words at 29.20/29.50/30.04/30.44/31.06 for the formula line, then the two `.frac` spans reveal at 33.08 (x) and 36.22 (x) respectively.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Standard `cardEnter` (0.55s `back.out(1.4)`).
- **EDUCATIONAL PURPOSE:** Show the formula isn't abstract — it's applied identically to both cars, differing only in the time variable.
- **VISUAL HIERARCHY:** Both fractions same size/weight — deliberately symmetric, reinforcing "same formula, different input."
- **ATTENTION MANAGEMENT:** Formula line reveals first (word-by-word), then each fraction, in narration order.
- **MOTION NOTES:** `.frac` spans use the shared `.frac`/`.top`/`.bot` component — no custom fraction styling.
- **CONTINUITY FROM PREVIOUS SCENE:** Card enters as the Given→stack morph (started 28.3s) is completing (lands 29.1s) — the stack circle "G" is settling into the left column exactly as this card's own entrance motion begins, so the two read as one handoff.

### SCENE 7 — Step 2 (merged): Ratio, Invert-Multiply, Cancel, Answer
- **TIMESTAMP:** 40.0 – 63.0s
- **VOICEOVER:** "Now let us find the ratio of their speeds. Speed ratio is equal to x divided by 4y is to x divided by 5y. To simplify this, we divide the first fraction by the second fraction. That becomes x divided by 4y into 5y divided by x. Here x gets canceled with x and y gets canceled with y, so we are left with five by four. Hence, the ratio of the speeds is five is to four."
- **VISUAL OBJECTIVE:** One enlarged card carries the entire derivation — ratio setup, invert-and-multiply, cancellation, and the final answer — as a single continuous solve rather than splitting the cancellation into its own step. (Revision: the original Step 3 was folded into Step 2, since the cancellation is a direct, one-breath continuation of the invert-multiply line with no new concept to isolate.)
- **SCREEN LAYOUT:** `#card-step2 .solution-card`, widened and repositioned to `left:560px;top:340px;width:840px` to hold six lines without wrapping or overflowing (per design.md §8 — size to content).
- **ON-SCREEN ELEMENTS:** Chip "Step 2" + "Speed ratio = x⁄4y : x⁄5y" (word/frac) + "Divide first fraction by second" (line-level) + "= x⁄4y × 5y⁄x" (frac) + "x cancels, y cancels" (word-level, `.hi`) + "= 5⁄4" (frac) + "Speed ratio = 5 : 4" (`.ans`).
- **ANIMATION DETAILS:** `apt.cardEnter(tl, "#card-step2 .solution-card", 40.0)`; `apt.textReveal` fires every `.rv` at its own transcript timestamp from 40.34 through 60.68, in the same order as the narration — ratio setup → method → inverted-multiply → cancel → simplified fraction → final answer. Card morphs to stack at 62.2s (`STEP2_TO_STACK`).
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Standard `cardEnter`; single `morphToStack` at the very end (62.2s) — no intermediate morph.
- **EDUCATIONAL PURPOSE:** Teach the "invert and multiply" rule explicitly, then immediately show the cancellation and answer as its direct consequence — one unbroken line of reasoning.
- **VISUAL HIERARCHY:** Six stacked lines read top-to-bottom in narration order; the `.ans` line ("Speed ratio = 5 : 4") is the visual climax, same styling used consistently for final results.
- **ATTENTION MANAGEMENT:** The method line ("divide first fraction by second") is plain text between two fraction-heavy lines — a deliberate breather. The cancel line follows the inverted-multiply line with no gap, since narration flows into it without a pause.
- **MOTION NOTES:** No `apt.emphasize`/`apt.resultReveal` layered on the `.ans` span — `apt.textReveal`'s own fade is the only reveal, per design.md §9.1.
- **CONTINUITY FROM PREVIOUS SCENE:** Opens as Step 1's morph-to-stack (37.5s call, lands 38.3s) has already settled — a clean ~1.7s breathing gap before this card enters.

### SCENE 8 — Options Reveal
- **TIMESTAMP:** 63.2 – 67.0s
- **VOICEOVER:** "So the final answer is five is to four. Hence, the correct option is option B."
- **VISUAL OBJECTIVE:** Confirm the derived answer against the actual multiple-choice options.
- **SCREEN LAYOUT:** Stack column stays visible on the left (now Given/Step 1/Step 2 only — no Step 3 circle); `.pinned-col` options grid (2×2) appears on the right.
- **ON-SCREEN ELEMENTS:** Options A (4:9), B (5:4, correct), C (4:5), D (9:4).
- **ANIMATION DETAILS:** `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 63.2)` (paired with `apt.fadeOut(tl, "#illus-pinned", 63.2)`); `apt.fadeIn(tl, "#options-reveal", 63.5)`; `apt.optionsStagger(tl, ".opt-btn", 64.0)`; `apt.correctPulse(tl, ".opt-btn.correct", 66.5)`.
- **CAMERA MOVEMENT:** Pinned question block shifts right/down slightly (`recenterForOptions`) to align with the options column.
- **TRANSITIONS:** Illustration recap fades out — its job is done; stack cards and connector lines remain fully visible throughout (never faded, per design.md §9).
- **EDUCATIONAL PURPOSE:** Close the loop between the derived math (5:4) and the actual answer choice.
- **VISUAL HIERARCHY:** Correct option B pulses green — clearest possible signal of the final answer.
- **ATTENTION MANAGEMENT:** Options stagger in together (0.12s apart) so the eye scans all four before the pulse draws it specifically to B.
- **MOTION NOTES:** `correctPulse` timed to the exact "option B" narration (66.42–66.72).
- **CONTINUITY FROM PREVIOUS SCENE:** Step 2's morph-to-stack (fired 62.2s, lands 63.0s) completes right as this scene's recenter begins — the last stack circle (now "2", the final circle) settles into the left column in the same beat the options grid starts sliding in on the right.

### SCENE 9 — End Hold + Fade
- **TIMESTAMP:** 67.5 – 69.5s
- **VOICEOVER:** (silence — voiceover ends at 67.0s)
- **VISUAL OBJECTIVE:** Hold the completed frame briefly so the answer registers, then fade out cleanly.
- **SCREEN LAYOUT:** Full frame — stack column, pinned question, options grid, background layers.
- **ON-SCREEN ELEMENTS:** Everything from Scene 9, held static.
- **ANIMATION DETAILS:** `apt.fadeOut(tl, "#root > div", 67.5, 1.2)` — every direct child of `#root` fades together as one synchronized beat.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Single synchronized fade-to-nothing.
- **EDUCATIONAL PURPOSE:** Give a clean, non-jarring close.
- **VISUAL HIERARCHY:** N/A — uniform fade.
- **ATTENTION MANAGEMENT:** N/A.
- **MOTION NOTES:** `tl.set({},{},69.5)` pads the timeline slightly past the fade's completion.
- **CONTINUITY FROM PREVIOUS SCENE:** Direct continuation of Scene 9's settled frame — no new motion until the fade itself.

---

## PART 3 — Asset List Required

- `illustration/car.svg` (already supplied by user) — reused twice: normal for Car A, `transform:scaleX(-1)` for Car B (same technique as `q13/index.html`).
- No other custom assets — road line, all labels, and the pinned recap are plain CSS/HTML per-question elements (design.md §7), not shared components.
- Shared assets copied from `_template/`: `design-system.css`, `animations.js`, `assets/` (serial-num badge, logo).

## PART 4 — Animation Complexity Notes

- Standard helpers only: `heroEnterLowered`, `serialEnter` (parallel tween), `roadSweep`, `pinFlow` ×2, `morphToStack` ×2, `cardEnter` ×3, `textReveal` ×3, `stackLineGrow` ×2, `setStackLine` ×2, `recenterForOptions`, `fadeIn`/`fadeOut`, `optionsStagger`, `correctPulse`.
- Revision: Step 3 (cancellation + answer) was merged into Step 2 — three solution cards (Given, Step 1, Step 2) instead of four, with Step 2 enlarged (840px wide) to hold the full derivation through to the final answer in one continuous card.
- No `apt.ambientLoop` needed — no long silent stretch occurs after the pin (Given→Step1→Step2 flow continuously to 63s).
- No `apt.emphasize`/`apt.resultReveal` — all reveals go through `apt.textReveal` per design.md §9.1 (no double-animation).
- Two-car illustration follows `q13`'s exact reuse pattern (single `car.svg`, second instance mirrored) — no new illustration technique introduced.

## PART 5 — Master Timeline Overview

```
0.0   Background + bottomStrip + topic + logo (always visible)
0.3   Question card rises in (lowered start)
0.8   Serial-num badge pops (parallel, lowered)
3.2   RISE_TIME — card + badge rise to resting position
4.0   Car A illustration enters
4.6   Car B illustration enters (mirrored)
5.2   Road sweep (0.9s)
7.0   Given card opens (low position, stays through pin)
18.96 "Route = x km" label appears (illustration + Given card in sync)
24.02 "Time = 4y hrs" under Car A
26.62 "Time = 5y hrs" under Car B
27.8  PIN_TIME — question + illustration glide to pinned slots
28.3  Given card morphs to stack (circle "G")
29.2  Step 1 opens — Speed = Distance ÷ Time, x/4y, x/5y
38.3  Step 1 morphs to stack (circle "1"), line G→1 grows
40.0  Step 2 opens (merged) — ratio setup, invert-and-multiply, cancellation → 5/4 → Speed ratio = 5:4
62.2  Step 2 morphs to stack (circle "2", final), line 1→2 grows
63.2  Recenter for options; pinned illustration fades
63.5  Options grid fades in
64.0  Options stagger in (A/B/C/D)
66.5  Option B pulses correct (green)
67.0  Voiceover ends
67.5  Full-frame fade out (1.2s)
69.5  Timeline end
```
