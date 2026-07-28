# Storyboard — Trains, Streams and Boats Q27

Boat travels 36 km downstream, 36 km upstream. Still-water speed 15 km/h, stream speed 3 km/h. Find total time. Answer: 5 h (Option C).

## PART 1: Narration Beat Analysis

| Beat | Time | Narration | Purpose | Focus | Visual objective |
|---|---|---|---|---|---|
| 1 | 0.1–4.7 | "welcome back... one more problem" | Hook | Question card | Question fades/scales in |
| 2 | 5.2–22.2 | states 36km down, 36km up, still-water 15, stream 3 | Set up givens | Illustration | Boat + river illustration builds, arrows for down/up |
| 3 | 23.2–26.1 | "find total time" | State goal | Question | Question text highlighted |
| 4 | 26.5–43.8 | recap concept: still-water speed, stream adds/subtracts | Concept refresher | Illustration | Arrows animate (add downstream, subtract upstream) |
| 5 | 44.3–48.3 | "let us find both speeds" | Transition to solving | Pin + Given card | pinFlow, Given card opens |
| 6 | 48.9–66.5 | downstream = 15+3=18, upstream = 15-3=12 | Step 1 | Step1 card | Two-line reveal, morph to stack |
| 7 | 67.5–87.4 | formula T=D/S, time down=2h, time up=3h | Step 2 | Step2 card | Three-line reveal, morph to stack |
| 8 | 89.4–96.4 | total = 2+3=5h | Step 3 | Step3 card | Reveal + morph |
| 9 | 96.4–99.8 | "answer is 5 hours, option C" | Reveal | Options grid | Stagger in, correct pulse |

## PART 2: Scene-by-Scene Storyboard

**Scene 1 (0–4.7s)** — Question card `apt.heroEnterLowered`, rises at RISE_TIME=4.74. Serial badge mirrors rise. Continuity: opening frame, nothing prior.

**Scene 2 (4.7–44.3s)** — Illustration: boat icon on a river strip, "36 km" label downstream (arrow right, current-arrow same direction), "36 km" label upstream (arrow left, current-arrow opposing). Still-water speed chip (15 km/h) and stream chip (3 km/h) fade in as narrated (~14.6s, ~19.0s). During concept recap (26.5–43.8s) small "+" indicator pulses on downstream arrow, "−" indicator pulses on upstream arrow — reinforces add/subtract idea. Continuity: boat stays on screen throughout, same asset.

**Scene 3 (44.3s) — PIN_TIME/GIVEN_TIME (same beat here, narration flows straight from concept into "let's find speeds" with no gap)** — `apt.pinFlow` glides question+illustration to pinned slot. Given card enters same moment: "Distance = 36 km (each way)", "Still-water speed = 15 km/h", "Stream speed = 3 km/h". Continuity: illustration still visible pinned, boat icon shrunk.

**Scene 4 (48.3–66.5s) — Step 1: Speeds** — morph Given→stack at 48.3. Step1 card enters 48.86: "Downstream speed = 15 + 3 = 18 km/h" (word reveal synced), then "Upstream speed = 15 − 3 = 12 km/h" reveals at 57.92. Morph to stack at 66.48, connector line G→1 grows. Continuity: stack column now has G, 1.

**Scene 5 (67.5–87.4s) — Step 2: Time formula** — Step2 card enters 67.54: "Time = Distance ÷ Speed" (use `.frac`) reveals at 69.34; "Time downstream = 36/18 = 2 h" reveals at 77.58; "Time upstream = 36/12 = 3 h" reveals at 83.74. Morph to stack at 87.4, connector 1→2 grows.

**Scene 6 (89.4–96.4s) — Step 3: Total** — Step3 card enters 89.4: "Total time = 2 + 3 = 5 h" reveals same time. Morph to stack at 96.4, connector 2→3 grows.

**Scene 7 (96.4–99.8s) — Options reveal** — recenter pinned question, fade illustration, options grid fades in 96.4, stagger 97.0, correct (C, "5 h") pulses 97.8. End fade ~99.5.

## PART 3: Asset List Required

- `illustration/boat.svg` (boat icon, primary blue)
- `illustration/river-strip.svg` (or CSS gradient strip) with two arrow directions (downstream/upstream)
- No other custom assets — all cards/chips/fractions from design system

## PART 4: Animation Complexity Notes

- Standard `apt.heroEnterLowered`, `apt.pinFlow`, `apt.cardEnter`, `apt.textReveal`, `apt.morphToStack`, `apt.stackLineGrow`, `apt.optionsStagger`, `apt.correctPulse`, `apt.fadeOut` only.
- PIN_TIME and GIVEN_TIME coincide at 44.3s here — narration has no gap between concept recap ending and "let's find speeds" beginning, so this is a deliberate exception, not a shortcut default.
- Step2 uses `.frac` component for Time = Distance/Speed — never bare `÷`.
- 3 steps total (Given + 3), matches template's 4-slot stack column (G/1/2/3).

## PART 5: Master Timeline Overview

```
0.0    Question card enter (heroEnterLowered)
4.74   Rise to rest
5.2–44.3  Illustration builds (boat, river, arrows, speed chips)
44.3   PIN_TIME = GIVEN_TIME — pinFlow + Given card enter
48.3   Given → stack morph
48.86  Step1 card enter (downstream/upstream speeds)
66.48  Step1 → stack morph
67.54  Step2 card enter (formula + times)
87.4   Step2 → stack morph
89.4   Step3 card enter (total time)
96.4   Step3 → stack morph
96.4   Options fade in
97.0   Options stagger
97.8   Correct (C) pulse
99.5   End fade
```
