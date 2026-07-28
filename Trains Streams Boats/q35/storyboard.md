# Storyboard - Trains, Streams and Boats Q35

A boat's downstream speed is 25 percent more than its upstream speed. Still-water speed is 18 km/h. Find the stream speed. Answer: 2 km/h (Option C).

## PART 1: Narration Beat Analysis

| Beat | Time | Narration | Purpose | Focus | Visual objective |
|---|---|---|---|---|---|
| 1 | 0.08-4.10 | "welcome back... time to solve one more problem" | Hook | Question card | Question fades/scales in |
| 2 | 4.72-14.24 | downstream speed is 25% more than upstream, still-water speed is 18 km/h | State question | Question card + illustration | Boat + river appear, "18 km/h" label floats |
| 3 | 14.82-18.06 | "find the speed of the stream" | Goal | Question card | Emphasis on question line |
| 4 | 18.64-28.72 | define variables D, U, C, B | Define unknowns | Given card | D/U/C/B badges reveal one by one |
| 5 | 29.32-59.80 | concept: downstream = with flow = b+c (faster), upstream = against flow = b-c (slower) | Concept refresher | Given card + illustration demo | Boat glides forward/back, formula lines reveal |
| 6 | 59.80-77.44 | condition: downstream = U + 25% of U = U + U/4 = 5U/4 | Step 1 | Step1 card | Fraction reveal, morph to stack |
| 7 | 78.76-99.56 | downstream = b+c also, so b+c = 5U/4, and U = b-c, so b+c = 5/4 x (b-c) | Step 2 | Step2 card | Equation substitution reveal, morph to stack |
| 8 | 99.56-121.64 | substitute b=18: 18+c = 5/4 x (18-c), simplify, c = 2 km/h | Step 3 | Step3 card | Fraction + equation reveal, resolve to answer, morph to stack |
| 9 | 122.50-128.08 | "hence stream speed is 2 km/h", "correct answer is Option C" | Reveal | Options grid | Stagger in, correct pulse |

## PART 2: Scene-by-Scene Storyboard

**Scene 1 (0-5.5s)** - `apt.heroEnterLowered` on question card, RISE_TIME = 4.10 (end of "one more problem" beat). Serial badge mirrors rise with parallel y-tween. Continuity: opening frame, nothing prior.

**Scene 2 (5.5-29.0s) - Illustration builds** - River strip (`wave.svg`/`wave-light.svg`) + boat icon (`boat.svg`) enter around 6.0s as question is read. "Still-water speed = 18 km/h" given-mini floater fades in at 10.84s (start of that narration). "25% more downstream than upstream" relationship tag fades in at 4.72s alongside question text highlight. Continuity: boat stays on screen, same asset throughout.

**Scene 3 (18.64s) - PIN_TIME** - `apt.pinFlow` glides question + illustration into pinned slot as narration turns to defining variables ("let us first take our variables", 18.64s), the point the video shifts from illustration-only to card-driven explanation. Continuity: illustration remains pinned, boat icon shrunk, river drifting gently.

**Scene 4 (18.64-59.80s) - Given card (long, spans variable defs + concept)** - GIVEN_TIME = 18.64 (mirrors PIN_TIME since variable definitions start immediately). Given card enters with lines revealing across the stretch:
- "D = downstream speed" reveals ~20.78s
- "U = upstream speed" reveals ~22.92s
- "C = stream speed" reveals ~24.78s
- "B = still-water speed" reveals ~26.68s
- "Downstream speed = B + C" reveals ~41.12s (boat glide-forward demo plays 39.08-45.96s)
- "Upstream speed = B - C" reveals ~54.40s (boat turn + glide-back demo plays 46.62-59.08s, judder simulating resistance)

No premature morph - narration doesn't reach the given numeric condition until 59.80s. Morph Given -> stack at 59.5s, right before Step 1 opens at 59.80s. Continuity: boat still pinned, unchanged.

**Scene 5 (59.5-78.4s) - Step 1: Express downstream in terms of U** - Step1 card enters 59.80s: "Downstream Speed = U + 25% of U" reveals ~59.80s, "25% = 1/4" (`.frac`) reveals ~72.26s, "Downstream Speed = 5U/4" (`.frac`) reveals ~74.84s. Morph to stack at 77.9s, connector G->1 grows. Continuity: stack column now has G, 1.

**Scene 6 (77.9-98.0s) - Step 2: Substitute B+C and B-C** - Step2 card enters 78.2s: "B + C = 5/4 x U" reveals ~78.76s, "U = B - C, so B + C = 5/4 x (B - C)" reveals ~84.08s. Morph to stack at 97.5s, connector 1->2 grows. Continuity: stack column now has G, 1, 2.

**Scene 7 (97.5-121.0s) - Step 3: Solve for c** - Step3 card enters 97.8s: "18 + C = 5/4 x (18 - C)" reveals ~99.56s (still-water speed substituted at 45.76s narration point... actual timestamp 45.76-49.32 in original numbering, but per this transcript "still-water speed is given as eighteen" lands at 45.76s equivalent -> use transcript value 45.76 -> corrected to actual: 1:45.76 = 105.76s). Reveal continues: equation resolves, "C = 2 km/h" (`.ans`) reveals ~121.64s (2:01.64). Morph to stack at 121.9s, connector 2->3 grows. Continuity: stack column complete G, 1, 2, 3.

**Scene 8 (121.9-128.08s) - Options reveal** - recenter pinned question, fade illustration at 122.0s. Options grid fades in 122.5s (as "hence, the speed of the stream is" narration plays, 122.50-124.48s). Stagger 123.1s. Correct (C, "2 km/h") pulses 126.48s, timed with "the correct answer is Option C" (126.48-128.08s). End fade near 128.0s (video end).

## PART 3: Asset List Required

- `illustration/boat.svg` (copied from q31, primary blue)
- `illustration/wave.svg` / `wave-light.svg` (river strip texture, copied from q31)
- No other custom assets - all cards/chips/fractions from design system

## PART 4: Animation Complexity Notes

- Standard `apt.heroEnterLowered`, `apt.pinFlow`, `apt.cardEnter`, `apt.textReveal`, `apt.morphToStack`, `apt.stackLineGrow`, `apt.optionsStagger`, `apt.correctPulse`, `apt.fadeOut`, `apt.recenterForOptions` only.
- Given card spans ~18.6s-59.5s (~41s) because narration spends a long stretch defining 4 variables (D, U, C, B) then explaining the downstream/upstream concept before any numeric computation begins.
- Step1 uses `.frac` for 1/4 and 5U/4. Step3 uses `.frac` for the final equation - never bare `÷`.
- 3 steps total (Given + 3), matches template's 4-slot stack column (G/1/2/3).
- This question never actually needs variable D (downstream) as its own letter beyond the initial definition - it is immediately expressed as B+C. Keep D in the Given card definitions for narration fidelity, but Steps use B, C, U only.

## PART 5: Master Timeline Overview

```
0.0     Question card enter (heroEnterLowered)
4.10    Rise to rest
4.10-18.64  Illustration builds (boat, river, still-water label)
18.64   PIN_TIME - pinFlow
18.64   GIVEN_TIME - Given card enter (D/U/C/B defined; reveals through 59.5s)
59.5    Given -> stack morph
59.8    Step1 card enter (downstream = U + U/4 = 5U/4)
77.9    Step1 -> stack morph
78.2    Step2 card enter (B+C = 5/4 x U = 5/4 x (B-C))
97.5    Step2 -> stack morph
97.8    Step3 card enter (18+C = 5/4 x (18-C), C = 2 km/h)
121.9   Step3 -> stack morph
122.0   Options recenter + illustration fade
122.5   Options fade in
123.1   Options stagger
126.48  Correct (C) pulse
128.0   End
```
