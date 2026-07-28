# Storyboard - Trains, Streams and Boats Q31

A boat covers 40 km downstream in 2 hours and 40 km upstream in 2 hours 40 minutes. Find the stream speed. Answer: 2.5 km/h (Option C).

## PART 1: Narration Beat Analysis

| Beat | Time | Narration | Purpose | Focus | Visual objective |
|---|---|---|---|---|---|
| 1 | 0.10–13.90 | "welcome back... let us first read the question... 40 km downstream in 2h, 40 km upstream in 2h40m... find speed of stream" | Hook + question | Question card | Question fades/scales in |
| 2 | 14.42–21.00 | distance = 40 km, downstream time = 2h | Given values | Illustration | Downstream label/arrow appears |
| 3 | 21.48–32.62 | upstream time = 2h40m = 8/3 h | Given value | Illustration | Upstream label/arrow appears |
| 4 | 33.12–39.96 | let b = still-water speed, c = stream speed | Define unknowns | Given card | b/c badges appear on boat |
| 5 | 40.60–57.84 | concept: downstream = b+c (current helps), upstream = b−c (current opposes) | Concept refresher | Given card + illustration demo | Boat glides forward/back, badge swaps b→b+c→b→b−c, formula tags appear |
| 6 | 58.68–67.72 | approach: not given speeds directly, use speed = distance/time | Transition to solving | Given card | Formula line reveals |
| 7 | 68.32–83.36 | downstream speed = 40/2 = 20, so b+c=20; upstream speed = 40/(8/3) = 15, so b−c=15 | Step 1 + Step 2 | Step1/Step2 cards | Reveal + morph to stack |
| 8 | 83.92–91.92 | subtract second from first: (b+c)−(b−c) = 20−15, simplify, c = 2.5 km/h | Step 3 | Step3 card | Reveal + morph to stack |
| 9 | 92.06–114.98 | "hence stream speed is 2.5 km/h", "correct option is Option C" | Reveal | Options grid | Stagger in, correct pulse |

## PART 2: Scene-by-Scene Storyboard

**Scene 1 (0–5.6s)** - `apt.heroEnterLowered` on question card, RISE_TIME = 5.6 (end of "one more problem" beat, matching the opening line's close in `transcript.json`). Serial badge mirrors the rise with a parallel y-tween. Continuity: opening frame, nothing prior.

**Scene 2 (5.6–33.0s) - Illustration builds** - River strip + boat icon (`illustration/boat.svg`) enter around 6.0s as the question is read out. "Downstream = 40 km in 2h" given-mini floater fades in at 14.42s (start of "distance covered in both way"/"time taken in downstream" narration). "Upstream = 40 km in 8/3 h" given-mini floater fades in at 21.48s (start of the upstream-time narration, which itself states the raw "2h40m" then resolves to "8/3"). Continuity: boat stays on screen throughout, same asset, no replacement.

**Scene 3 (33.0s) - PIN_TIME** - `apt.pinFlow` glides question + illustration into the pinned slot right as narration turns to defining b and c (33.12s). Continuity: illustration remains visible pinned, boat icon shrunk, same river strip drifting gently.

**Scene 4 (33.1–68.0s) - Given card (long, spans concept + formula narration)** - GIVEN_TIME = 33.1 (mirrors PIN_TIME closely since the b/c definition narration starts almost immediately after). Given card enters with lines revealing across the concept stretch:
- "Distance = 40 km" reveals ~14.42s equivalent restated inline at card open (already shown via illustration floaters, so the card opens straight into) "b = still-water speed" ~33.12s
- "c = stream speed" ~37.64s
- "Downstream speed = b + c" ~55.64s (right after "so the stream pushes the boat forward... both speeds help" concept beat, boat glide-forward demo plays 51.34–58.34s)
- "Upstream speed = b − c" ~59.90s (boat turn + glide-back demo plays 59.90–67.40s, judder simulating current resistance)
- "Speed = Distance ÷ Time" (`.frac` component) reveals ~68.32s

This is one continuous Given card - no premature morph, since narration doesn't reach an actual computed number until 68.32s+21.46=downstream calc. Morph Given→stack at 68.0s, right before Step 1's first number lands at 68.32s. Continuity: boat still pinned, unchanged.

**Scene 5 (68.0–79.0s) - Step 1: Downstream speed** - Step1 card enters 68.3s: "Downstream speed = 40 ÷ 2 = 20" (`.frac` for 40/2) reveals ~68.32s onward, "b + c = 20" reveals ~76.14s. Morph to stack at 78.6s, connector line G→1 grows. Continuity: stack column now has G, 1.

**Scene 6 (78.6–91.0s) - Step 2: Upstream speed** - Step2 card enters 78.98s: "Upstream speed = 40 ÷ (8/3) = 15" (`.frac`) reveals ~78.98s, "b − c = 15" reveals ~83.28s. Morph to stack at 85.9s, connector 1→2 grows. Continuity: stack column now has G, 1, 2.

**Scene 7 (85.9–95.0s) - Step 3: Solve for c** - Step3 card enters 86.3s: "Subtract second equation from first" reveals ~86.52s (line-level, paraphrased), "(b+c) − (b−c) = 20 − 15" reveals ~91.40s, "c = 2.5 km/h" reveals ~93.92s. Morph to stack at 95.0s, connector 2→3 grows. Continuity: stack column complete G, 1, 2, 3.

**Scene 8 (95.0–114.98s) - Options reveal** - recenter pinned question, fade illustration at 95.0s. Options grid fades in 95.2s (right as "hence, the speed of the stream is..." begins ~97.76). Stagger 95.8s. Correct (C, "2.5 km/h") pulses 103.5s, timed with "the correct option is Option C" (~102.5–103.78). End fade ~113.5s (near narration end 114.98).

## PART 3: Asset List Required

- `illustration/boat.svg` (boat icon, primary blue) - reused from q29 pattern
- `illustration/wave.svg` / `wave-light.svg` (river strip texture) - reused from q29
- No other custom assets - all cards/chips/fractions from design system

## PART 4: Animation Complexity Notes

- Standard `apt.heroEnterLowered`, `apt.pinFlow`, `apt.cardEnter`, `apt.textReveal`, `apt.morphToStack`, `apt.stackLineGrow`, `apt.optionsStagger`, `apt.correctPulse`, `apt.fadeOut`, `apt.recenterForOptions` only.
- Given card spans ~33.1s→68.0s (~35s) because narration spends a long stretch on concept (b, c definitions, downstream/upstream relations demoed on the boat, then the formula) before any numeric computation begins - deliberate single-card span, matching q29's precedent.
- Step1 and Step2 each use `.frac` for the division (40/2, 40/(8/3)) - never bare `÷`.
- Step 3 uses subtraction of the two equations (unlike q29's addition) since the target unknown is `c`, not `b` - `(b+c) − (b−c) = 20 − 15` simplifies to `2c = 5`, `c = 2.5`.
- 3 steps total (Given + 3), matches template's 4-slot stack column (G/1/2/3).

## PART 5: Master Timeline Overview

```
0.0     Question card enter (heroEnterLowered)
5.6     Rise to rest
5.6–33.0  Illustration builds (boat, river, downstream/upstream labels)
33.0    PIN_TIME - pinFlow
33.1    GIVEN_TIME - Given card enter (b, c defined; reveals through 68.0s)
68.0    Given -> stack morph
68.3    Step1 card enter (40/2=20, b+c=20)
78.6    Step1 -> stack morph
79.0    Step2 card enter (40/(8/3)=15, b-c=15)
85.9    Step2 -> stack morph
86.3    Step3 card enter (2c=5, c=2.5)
95.0    Step3 -> stack morph
95.0    Options recenter + illustration fade
95.2    Options fade in
95.8    Options stagger
103.5   Correct (C) pulse
113.5   End fade
```
