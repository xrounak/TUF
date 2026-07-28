# Storyboard - Trains, Streams and Boats Q29

Boat covers 60 km downstream in 3 hours, 60 km upstream in 5 hours. Find speed in still water. Answer: 16 km/h (Option A).

## PART 1: Narration Beat Analysis

| Beat | Time | Narration | Purpose | Focus | Visual objective |
|---|---|---|---|---|---|
| 1 | 0.1–4.98 | "welcome back... one more problem" | Hook | Question card | Question fades/scales in |
| 2 | 5.50–19.78 | states 60km downstream/3h, 60km upstream/5h, find still-water speed | Set up givens | Illustration | Boat + river illustration builds, arrows for down/up |
| 3 | 20.28–27.44 | let still-water speed = b, current speed = c | Define unknowns | Given card | b/c labels appear on illustration then in card |
| 4 | 28.10–39.50 | concept recap: current helps downstream (b+c), current opposes upstream (b−c) | Concept refresher | Given card | Downstream/upstream relations reveal in Given card |
| 5 | 40.06–56.14 | b−c relation stated, then "not given speeds directly, given distance/time, use speed=distance/time" | Transition to solving | Given card (still active) | Formula line reveals |
| 6 | 58.60–67.48 | "60÷3=20", downstream speed b+c=20 | Step 1 | Step1 card | Reveal + morph to stack |
| 7 | 67.82–77.04 | "60÷5=12", upstream speed b−c=12 | Step 2 | Step2 card | Reveal + morph to stack |
| 8 | 78.10–86.92 | add equations, c cancels, 2b=32, b=16 | Step 3 | Step3 card | Reveal + morph to stack |
| 9 | 87.68–96.50 | "speed in still water is 16 km/h", "option A" | Reveal | Options grid | Stagger in, correct pulse |

## PART 2: Scene-by-Scene Storyboard

**Scene 1 (0–4.98s)** - Question card `apt.heroEnterLowered`, rises at RISE_TIME=4.98 (end of "one more problem"). Serial badge mirrors rise. Continuity: opening frame, nothing prior.

**Scene 2 (4.98–20.0s)** - Illustration: boat icon on river strip. "60 km" downstream label + right-pointing arrow (current arrow same direction) fades in around narration of downstream distance/time (~8.6s–11.26s). "60 km" upstream label + left-pointing arrow (current arrow opposing) fades in around narration of upstream distance/time (~11.76s–14.76s). Question goal ("find speed in still water") highlighted 15.38–19.78s. Continuity: boat stays on screen throughout, same asset, no replacement.

**Scene 3 (20.0s) - PIN_TIME** - `apt.pinFlow` glides question+illustration to pinned slot right as narration turns to defining unknowns (20.28s). Continuity: illustration still visible pinned, boat icon shrunk, same river strip.

**Scene 4 (20.3–58.5s) - Given card (long, spans concept + formula narration)** - GIVEN_TIME=20.3 (narration "let the speed of the boat in still water be b" starts 20.28). Given card enters with lines revealing across the full concept-explanation stretch:
- "b = speed in still water" reveals ~20.3s
- "c = speed of current" reveals ~24.24s
- "Downstream speed = b + c" reveals ~36.50s (right after "current helps boat move faster" concept beat)
- "Upstream speed = b − c" reveals ~44.36s
- "Speed = Distance ÷ Time" (`.frac` component) reveals ~56.60s

This is one continuous Given card - no premature morph, since narration doesn't reach an actual computed number until 58.60s. Morph Given→stack at 58.5s (0.3s buffer before Step1's first number lands at 58.6s... actually morph fires at 58.3 so Step1 card is clear to enter at 58.6). Continuity: boat still pinned, unchanged.

**Scene 5 (58.6–67.5s) - Step 1: Downstream speed** - Step1 card enters 58.6s: "60 ÷ 3 = 20" (`.frac` for 60/3) reveals ~59.36s, "Downstream speed: b + c = 20" reveals ~63.88s. Morph to stack at 67.3s (buffer past "b+c=20" ending 67.48), connector line G→1 grows. Continuity: stack column now has G, 1.

**Scene 6 (67.5–77.3s) - Step 2: Upstream speed** - Step2 card enters 67.8s: "60 ÷ 5 = 12" (`.frac`) reveals ~67.82s, "Upstream speed: b − c = 12" reveals ~71.90s (start of "so upstream speed" phrase ~1:12.90). Morph to stack at 77.0s (buffer past "b−c=12" ending 77.04), connector 1→2 grows. Continuity: stack column now has G, 1, 2.

**Scene 7 (77.3–87.2s) - Step 3: Solve for b** - Step3 card enters 78.1s: "Add both equations, c cancels" reveals ~79.42s (line-level, paraphrased), "2b = 32" reveals ~82.88s, "b = 16" reveals ~86.5s. Morph to stack at 87.2s (buffer past "b=16" ending 86.92), connector 2→3 grows. Continuity: stack column complete G, 1, 2, 3.

**Scene 8 (87.5–96.5s) - Options reveal** - recenter pinned question, fade illustration at 87.5s. Options grid fades in 87.7s (right as "hence, speed... is 16 km/h" begins 87.68). Stagger 88.4s. Correct (A, "16 km/h") pulses 94.2s, timed with "correct option is option A". End fade ~97.0s (past narration end 96.5s).

## PART 3: Asset List Required

- `illustration/boat.svg` (boat icon, primary blue) - reused from q27/q25 pattern
- `illustration/wave.svg` / `wave-light.svg` (river strip texture)
- No other custom assets - all cards/chips/fractions from design system

## PART 4: Animation Complexity Notes

- Standard `apt.heroEnterLowered`, `apt.pinFlow`, `apt.cardEnter`, `apt.textReveal`, `apt.morphToStack`, `apt.stackLineGrow`, `apt.optionsStagger`, `apt.correctPulse`, `apt.fadeOut`, `apt.recenterForOptions` only.
- Given card is unusually long (20.3s→58.3s, ~38s) because narration spends a long stretch on concept (b, c definitions, downstream/upstream relations, formula) before any numeric computation begins - this is a deliberate single-card span, not a missed step boundary. Five `.rv` reveal lines inside one Given card, spaced to their real transcript timestamps.
- Step1 and Step2 each use `.frac` for the division (60/3, 60/5) - never bare `÷`.
- 3 steps total (Given + 3), matches template's 4-slot stack column (G/1/2/3).

## PART 5: Master Timeline Overview

```
0.0     Question card enter (heroEnterLowered)
4.98    Rise to rest
4.98–20.0  Illustration builds (boat, river, downstream/upstream arrows + labels)
20.0    PIN_TIME - pinFlow
20.3    GIVEN_TIME - Given card enter (b, c defined; reveals through 56.6s)
58.3    Given → stack morph
58.6    Step1 card enter (60÷3=20, b+c=20)
67.3    Step1 → stack morph
67.8    Step2 card enter (60÷5=12, b−c=12)
77.0    Step2 → stack morph
78.1    Step3 card enter (2b=32, b=16)
87.2    Step3 → stack morph
87.5    Options recenter + illustration fade
87.7    Options fade in
88.4    Options stagger
94.2    Correct (A) pulse
97.0    End fade
```
