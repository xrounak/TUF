# Storyboard — Speed & Time, Beginner, Q10
## "Train reaches station in 4 hrs at 50 km/hr — extra time at 40 km/hr?"

Video length: **56.20s** (driven by `transcript.json`). Topic: **Speed and Time**. Correct answer: **B — 1 hour**.

---

## PART 1: Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|-----------|-----------|---------------------|------------------|-------------------|
| 1 | 0.12–3.84 | "So welcome back again. Time for one more problem." | Warm open, signal new problem | Center of frame | Question card rises into place, calm entrance |
| 2 | 4.40–10.60 | "Now in this problem, a train travels at 50 km/hr and reaches the station in 4 hours." | State the given scenario | Train illustration + speed/time values | Train enters on a road, "50 km/hr" and "4 hours" labels animate in above/below it |
| 3 | 11.20–17.64 | "The question is asking us how much extra time the train would take if its speed were only 40 km/hr." | State what's being solved for | The question text itself | A second, slower ghost-train fades in beside the first, "40 km/hr?" label pulses to flag the unknown |
| 4 | 18.12–20.24 | "First, let us find the total distance." | Transition to solving | Given card | Question pins to top; Given card (speed + time) appears center |
| 5 | 20.72–29.02 | "Distance is equal to speed multiplied by time. So distance is equal to 50 multiplied by 4, which gives us 200 kilometer." | Step 1: compute distance | Step 1 math | Given card morphs to stack; Step 1 card shows the multiplication resolving to 200 km |
| 6 | 29.48–38.36 | "Now we know the distance, so we can find the new time. Time is equal to distance divided by speed. So the new time is 200 divided by 40, which is 5 hours." | Step 2: compute new time | Step 2 math | Step 1 morphs to stack; Step 2 card shows division resolving to 5 hours |
| 7 | 38.90–51.46 | "But be careful here. The question is not asking for the new total time. It is asking how much longer the journey would take. So extra time is equal to 5 hours minus 4 hours, which is 1 hour." | Step 3: the trap + final subtraction | Step 3 math, "be careful" warning | Step 2 morphs to stack; Step 3 card opens with a "careful" emphasis beat, then resolves 5 − 4 = 1 hour |
| 8 | 51.92–56.20 | "Hence, the final answer is one hour, which is option B." | Reveal answer | Options grid, option B | Step 3 morphs to stack; options grid reveals, B pulses green |

---

## PART 2: Scene-by-Scene Storyboard

### SCENE 1 — Question Reveal
**TIMESTAMP:** 0.0 – 3.9s
**VOICEOVER:** "So welcome back again. Time for one more problem."
**VISUAL OBJECTIVE:** Establish calm opening; question card is the sole focus, vertically centered.
**SCREEN LAYOUT:** `QuestionCard` (`#q-full-card`, 1500px wide) centered horizontally, starting lowered (y offset 180px per `apt.heroEnterLowered`) so it reads vertically centered while alone in frame. `SerialNum` badge top-left, rising in tandem.
**ON-SCREEN ELEMENTS:** dotted-grid background, bottom-strip, topic-name ("Speed and Time"), logo, QuestionCard containing full question text, SerialNum badge ("Q").
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.8)` — card fades/scales in at 0.3s (0.7s, `back.out(1.4)`), holds lowered, rises to resting slot at 3.8s (0.6s, `power2.inOut`). Badge: `fromTo` scale/rotation pop at 0.8s (0.55s, `back.out(2)`), then parallel rise tween to y:0 at 3.8s (0.6s, `power2.inOut`).
**CAMERA MOVEMENT:** None (static frame, motion is internal to elements).
**TRANSITIONS:** Card rise is the only visual event; no cuts.
**EDUCATIONAL PURPOSE:** Let the viewer read the full question once before any numbers move.
**VISUAL HIERARCHY:** QuestionCard > SerialNum > background chrome.
**ATTENTION MANAGEMENT:** Single focal object (the card) — no competing motion.
**MOTION NOTES:** Question text numbers ("50 km/hr", "4 hours", "40 km/hr") rendered in `.num` (primary blue) inside the static text — no separate reveal, they're part of the card's one entrance.

---

### SCENE 2 — Illustration Builds: First Scenario
**TIMESTAMP:** 3.9 – 10.6s
**VOICEOVER:** "Now in this problem, a train travels at 50 km/hr and reaches the station in 4 hours."
**VISUAL OBJECTIVE:** Give the viewer a concrete mental picture of train #1's journey and its two known values.
**SCREEN LAYOUT:** `#illustration` area (1400px wide, centered, y:480px) below the (now risen) question card.
**ON-SCREEN ELEMENTS:** A flat 2D train icon (CSS-built: rounded rectangle body + two wheel circles + a small front nose, primary-blue fill) sitting on a thin horizontal road line. A speed label "50 km/hr" above the train. A dashed line running right to a small flag/station marker, with a "4 hours" label beneath the dashed line.
**ANIMATION DETAILS:** Train icon: `apt.roadSweep(tl, "#train-1", 4.4, 0.9)` (scaleX 0→1 from left, `power3.out`) so it reads as "arriving". Speed label: `apt.fadeIn(tl, "#speed-label-1", 5.2)`. Dashed line: `apt.roadSweep(tl, "#dash-line", 6.0, 0.9)`. Station flag: `apt.cardEnter`-style pop via `apt.emphasize(tl, "#station-flag", 6.9)`. "4 hours" label: `apt.fadeIn(tl, "#time-label-1", 7.2)`.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Continuous build, no hard cuts — each element appears as its value is spoken.
**EDUCATIONAL PURPOSE:** Anchor the two known values (speed, time) to a visual before any arithmetic starts.
**VISUAL HIERARCHY:** Train icon first, then speed label, then the distance-implying dashed path, then time label.
**ATTENTION MANAGEMENT:** Sequential reveal keyed to narration keeps the eye moving left→right exactly as the sentence unfolds.
**MOTION NOTES:** Object continuity — this exact train (`#train-1`) persists (shrunk) into the pinned illustration in Scene 4 onward.

---

### SCENE 3 — The Question Restated: Second Scenario
**TIMESTAMP:** 10.6 – 17.64s
**VOICEOVER:** "The question is asking us how much extra time the train would take if its speed were only 40 km/hr."
**VISUAL OBJECTIVE:** Introduce the hypothetical (40 km/hr) without yet resolving it — visually flag it as the open question.
**SCREEN LAYOUT:** Same illustration area; a second, semi-transparent "ghost" train (`#train-2`, lower opacity, same shape/size) fades in slightly behind/below `#train-1`.
**ON-SCREEN ELEMENTS:** Ghost train, a "40 km/hr?" label (question mark to signal the unknown) in primary blue, positioned above the ghost train.
**ANIMATION DETAILS:** `apt.fadeIn(tl, "#train-2", 11.3, 0.5)` (opacity to 0.45, dashed outline instead of solid fill — visually "hypothetical"). Label: `apt.fadeIn(tl, "#speed-label-2", 12.0)` then `apt.emphasize(tl, "#speed-label-2", 15.5)` (yo-yo pulse) timed to the phrase "40 kilometers per hour" landing at 15.5–17.6s.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Ghost train and label simply fade in; no exit yet — they stay through Scene 4.
**EDUCATIONAL PURPOSE:** Visually pose the "what if" before switching to solving mode.
**VISUAL HIERARCHY:** Ghost train is intentionally lower-contrast than `#train-1` so the eye still reads the original scenario as primary.
**ATTENTION MANAGEMENT:** The pulse on "40 km/hr?" lands exactly as the phrase is spoken, creating a clear beat.
**MOTION NOTES:** Both trains persist (shrunk) into the pinned illustration from Scene 4 through Scene 7 — this is the running visual thread of the whole video.

---

### SCENE 4 — Pin + Given
**TIMESTAMP:** 18.0 – 21.1s
**VOICEOVER:** "First, let us find the total distance."
**VISUAL OBJECTIVE:** Shift from "reading the problem" to "solving it" — question shrinks to top, Given values appear.
**SCREEN LAYOUT:** `#phase1` fades out; `#q-pinned` (1275px, top:30px) and `#illus-pinned` (shrunk trains, top:190px) fade in. `SolutionCard` "Given" appears centered (`left:640px; top:480px`).
**ON-SCREEN ELEMENTS:** Pinned question card (shortened text), shrunk illustration (both trains, smaller), Given card with chip "Given" and math: `Speed = 50 km/hr`, `Time = 4 hours`.
**ANIMATION DETAILS:** `apt.fadeOut(tl, "#phase1", 17.9)`. `apt.fadeIn(tl, "#q-pinned", 18.0)`. `apt.fadeIn(tl, "#illus-pinned", 18.0)`. `apt.cardEnter(tl, "#card-given .solution-card", 18.2)`.
**CAMERA MOVEMENT:** None (layout reflow reads as the "camera" pulling back).
**TRANSITIONS:** Hard cut from full-screen Phase 1 to the pinned Phase 2 layout.
**EDUCATIONAL PURPOSE:** Make explicit which two numbers we start from.
**VISUAL HIERARCHY:** Given card centered and largest active element; pinned question small and secondary.
**ATTENTION MANAGEMENT:** Only one new element (Given card) enters — no competing motion.
**MOTION NOTES:** This is the first frame where the question is pinned — stays pinned for the rest of the video per template rule.

---

### SCENE 5 — Step 1: Total Distance
**TIMESTAMP:** 20.3 – 29.3s
**VOICEOVER:** "Distance is equal to speed multiplied by time. So distance is equal to 50 multiplied by 4, which gives us 200 kilometer."
**VISUAL OBJECTIVE:** Resolve the multiplication live, landing on the 200 km answer.
**SCREEN LAYOUT:** Given card morphs into `#stack-given` (left column, top:140px). Step 1 `SolutionCard` (chip "Step 1") enters center.
**ON-SCREEN ELEMENTS:** Stack card "G" circle + given values (now in `--primary-light` box, left column). Active Step 1 card: `Distance = Speed × Time`, then `= 50 × 4 = `, then `<span class="ans">200 km</span>`.
**ANIMATION DETAILS:** 🌟 `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 20.3)` (0.8s, `power2.inOut`, text fades out at 20.3+0.25, box lands at 21.1). `apt.cardEnter(tl, "#card-step1 .solution-card", 21.1)`. `apt.emphasize(tl, "#step1-ans", 27.5)` on the "200 km" answer landing (yo-yo pulse) timed to "two hundred kilometer" (27.34–29.02).
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Morph (0.8s slide+shrink+recolor) is the only transition — no hard cuts.
**EDUCATIONAL PURPOSE:** Show the formula, then the substitution, then the resolved value — progressive reveal, not all at once.
**VISUAL HIERARCHY:** Formula first (dim/regular), substituted numbers in `--primary` (`.hi`), final answer in `.ans` styling, emphasized on landing.
**ATTENTION MANAGEMENT:** Stack card entering on the left doesn't compete with the active card because it's smaller, desaturated, and off to the side.
**MOTION NOTES:** Given card is the first `.card-content` to ever cross-fade via the morph — sets the pattern for all subsequent steps.

---

### SCENE 6 — Step 2: New Time
**TIMESTAMP:** 29.4 – 38.8s
**VOICEOVER:** "Now we know the distance, so we can find the new time. Time is equal to distance divided by speed. So the new time is 200 divided by 40, which is 5 hours."
**VISUAL OBJECTIVE:** Resolve the division live, landing on 5 hours.
**SCREEN LAYOUT:** Step 1 morphs into `#stack-step1` (top:290px, `.step-circle` "1"). Step 2 `SolutionCard` enters center.
**ON-SCREEN ELEMENTS:** Stack now shows "G" and "1" circles connected by a growing `.stack-line`. Active Step 2 card: `Time = Distance ÷ Speed`, then a `.frac` (200 / 40), then `= <span class="ans">5 hours</span>`.
**ANIMATION DETAILS:** 🌟 `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 28.5)` (lands 29.3). `apt.stackLineGrow(tl, "#line-g-1", 28.5)` (G→1 connector, fires at the same moment Step 1 joins the stack). `apt.cardEnter(tl, "#card-step2 .solution-card", 29.4)`. `apt.emphasize(tl, "#step2-ans", 37.0)` on "5 hours" landing (34.98–38.36).
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Morph only.
**EDUCATIONAL PURPOSE:** Establish the "hypothetical" new time under 40 km/hr, reusing the distance found in Step 1.
**VISUAL HIERARCHY:** Same progressive pattern as Step 1: formula → substitution → resolved answer.
**ATTENTION MANAGEMENT:** Growing connector line draws the eye briefly to the stack, then releases it back to the active card.
**MOTION NOTES:** `.frac` component used here (not invented) per design system — numerator "200", denominator "40", both `.hi`.

---

### SCENE 7 — Step 3: The Trap + Extra Time
**TIMESTAMP:** 38.9 – 51.8s
**VOICEOVER:** "But be careful here. The question is not asking for the new total time. It is asking how much longer the journey would take. So extra time is equal to 5 hours minus 4 hours, which is 1 hour."
**VISUAL OBJECTIVE:** Flag the common mistake (answering "5 hours") before resolving the actual asked quantity (the difference).
**SCREEN LAYOUT:** Step 2 morphs into `#stack-step2` (top:460px, `.step-circle` "2"). Step 3 `SolutionCard` enters center, slightly wider to hold the subtraction.
**ON-SCREEN ELEMENTS:** Stack now shows "G", "1", "2" circles with two connector lines. Active Step 3 card: chip "Step 3", first line "Not the total time — the extra time!" (cautionary sub-line, regular weight, no invented styling beyond `.hi` on "extra"), then `5 hours − 4 hours = <span class="ans">1 hour</span>`.
**ANIMATION DETAILS:** 🌟 `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 38.0)` (lands 38.8). `apt.stackLineGrow(tl, "#line-1-2", 38.0)`. `apt.cardEnter(tl, "#card-step3 .solution-card", 38.9)`. `apt.emphasize(tl, "#careful-line", 39.3)` (yo-yo pulse on the caution line, timed to "But be careful here" 38.90–39.74). `apt.emphasize(tl, "#step3-ans", 50.0)` on "1 hour" landing (42.98–51.46, answer resolves near the end of that long phrase).
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Morph only.
**EDUCATIONAL PURPOSE:** This is the beat that prevents the classic error of reporting the new total time (5 hrs) instead of the delta (1 hr).
**VISUAL HIERARCHY:** Caution line pulses first to grab attention, then the subtraction resolves calmly beneath it.
**ATTENTION MANAGEMENT:** Single emphasize pulse on the caution line, then a second pulse on the final answer — two distinct beats matching the two-part sentence.
**MOTION NOTES:** No new component invented for the "caution" line — it's plain `.math` text inside the existing `.solution-card`, using existing `.hi`/`.ans` spans only.

---

### SCENE 8 — Options Reveal
**TIMESTAMP:** 51.0 – 56.2s
**VOICEOVER:** "Hence, the final answer is one hour, which is option B."
**VISUAL OBJECTIVE:** Land on the correct option with a clear, confident highlight.
**SCREEN LAYOUT:** Step 3 morphs into `#stack-step3` (top:660px, `.step-circle` "3"). Pinned question + illustration recenter (`apt.recenterForOptions`, xShift:160, yShift:180) to align with `.pinned-col`. Options grid (2×2) fades in on the right.
**ON-SCREEN ELEMENTS:** Full stack (G/1/2/3, all connector lines) on the left, unchanged. Options grid: A) "30 minutes", B) "1 hour" (correct), C) "1.5 hours", D) "2 hours".
**ANIMATION DETAILS:** 🌟 `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 51.0)` (lands 51.8). `apt.stackLineGrow(tl, "#line-2-3", 51.0)`. `apt.fadeOut(tl, "#illus-pinned", 51.0)`. `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 51.0)`. `apt.fadeIn(tl, "#options-reveal", 51.9)`. `apt.optionsStagger(tl, ".opt-btn", 52.2)` (0.45s × 4, stagger 0.12s, `power3.out`). `apt.correctPulse(tl, ".opt-btn.correct", 53.6)` (0.4s yoyo, `back.out(1.5)`), timed just after "one hour" is spoken (52.66–56.20) and holding as "option B" is said.
**CAMERA MOVEMENT:** None (recenter is a positional tween, not a camera move).
**TRANSITIONS:** Morph (last one) + fade + stagger — no hard cuts.
**EDUCATIONAL PURPOSE:** Confirm the answer and let the viewer map "1 hour" onto option B explicitly.
**VISUAL HIERARCHY:** Correct option (green) is the final visual resting point of the video.
**ATTENTION MANAGEMENT:** Stagger draws the eye across all four options before the pulse settles it on B.
**MOTION NOTES:** Stack + connector lines are NOT faded here — they remain visible through the end, per design-system rule.

---

## PART 3: Asset List Required

- No external image/SVG assets needed beyond the shared `_template/assets/` (serial-num-badge.svg, logo.png).
- Per-question illustration (`illustration/train.svg` or inline CSS shapes) — **built as inline CSS/SVG shapes directly in `index.html`**, no separate asset files needed:
  - `#train-1` — solid primary-blue flat train icon (body + 2 wheels + nose), on a road line
  - `#train-2` — same shape, dashed outline / lower opacity ("ghost" hypothetical train)
  - `#dash-line` — dashed horizontal line (distance indicator)
  - `#station-flag` — small flat flag/marker shape
  - `#speed-label-1`, `#time-label-1`, `#speed-label-2` — plain text labels, `--text`/`--primary` colors per design system

## PART 4: Animation Complexity Notes

- Straightforward video: 1 Given + 3 Steps, no branching, no custom animation helpers beyond what's in `animations.js`.
- Custom illustration entrances (`#train-1`, `#train-2`, labels) use only existing generic helpers (`roadSweep`, `fadeIn`, `emphasize`) — no new helper functions required.
- All 3 step→stack transitions use `apt.morphToStack` at 0.8s — no exceptions.
- Stack line grows fire in sync with each morph completion per the standard pattern.
- Stack card vertical gaps (140 / 290 / 460 / 660) follow the template's example spacing since card heights here are comparable (short 2–3 line math blocks) — will confirm/adjust by measuring actual rendered heights during the build step (Step 5), not guessed blindly.

## PART 5: Master Timeline Overview

```
TIME (s)   ELEMENT                          ACTION
─────────  ───────────────────────────────  ──────────────────────────────────
0.0        Background layers                Always visible
0.3        #q-full-card                     heroEnterLowered starts (rises @3.8)
0.8        #serial-num                      pop-in, rises @3.8
3.8        #q-full-card / #serial-num       rise to resting slot
4.4        #train-1                        roadSweep on
5.2        #speed-label-1 ("50 km/hr")      fadeIn
6.0        #dash-line                       roadSweep on
6.9        #station-flag                    emphasize pop
7.2        #time-label-1 ("4 hours")        fadeIn
11.3       #train-2 (ghost)                 fadeIn (0.45 opacity)
12.0       #speed-label-2 ("40 km/hr?")     fadeIn
15.5       #speed-label-2                   emphasize pulse
17.9       #phase1                          fadeOut
18.0       #q-pinned, #illus-pinned         fadeIn
18.2       card-given                       cardEnter
20.3       given → stack-given              🌟 morphToStack (0.8s)
21.1       card-step1                       cardEnter
27.5       #step1-ans ("200 km")            emphasize
28.5       step1 → stack-step1              🌟 morphToStack (0.8s) + line-g-1 grow
29.4       card-step2                       cardEnter
37.0       #step2-ans ("5 hours")           emphasize
38.0       step2 → stack-step2              🌟 morphToStack (0.8s) + line-1-2 grow
38.9       card-step3                       cardEnter
39.3       #careful-line                    emphasize
50.0       #step3-ans ("1 hour")            emphasize
51.0       step3 → stack-step3              🌟 morphToStack (0.8s) + line-2-3 grow
51.0       #illus-pinned                    fadeOut
51.0       #q-pinned                        recenterForOptions (x:160, y:180)
51.9       #options-reveal                  fadeIn
52.2       .opt-btn ×4                      optionsStagger
53.6       .opt-btn.correct (B)             correctPulse
56.2       END                              all elements remain visible
```

**Colors used:** only `--primary` (#6373db), `--primary-light` (#e2e5ff), `--success` (#4eb85f), `--topic` (#949494), `--text` (#000000), `--bg` (#FFFFFF) — no invented colors.
**Fonts used:** Google Sans Flex, Medium only on the Phase-1 question text, Regular everywhere else — no invented fonts.
**Components used:** QuestionCard, SerialNum, SolutionCard, SolutionStackCard, solutionChip, StepCircle/StackLine, options grid/opt-btn, logo, topic-name, bottom-strip, dotted-grid, Fraction — no invented components.
**Animations used:** heroEnterLowered, cardEnter, morphToStack, fadeIn, fadeOut, emphasize, roadSweep, stackLineGrow, optionsStagger, correctPulse, recenterForOptions — no invented animations.
