# Storyboard — Speed and Time / Beginner / Ques 8
A hiker travels a total distance of 40 km in 5 hours. He covers some part on foot at 5 km/hr and the rest on a bicycle at 15 km/hr. Find the distance travelled on foot. (Answer: B — 17.5 km)

## PART 1 — Narration Beats
1. 0.14–11.56s Intro + setup: hiker travels 40 km total in 5 hours, part on foot at 5 km/hr
2. 12.14–19.76s Remaining part by bicycle at 15 km/hr; question asks distance on foot
3. 20.24–38.96s Let foot distance = X km; bicycle distance = (40 − X) km
4. 39.44–79.24s Time = Distance/Speed → walking time X/5, cycling time (40−X)/15 → equation X/5 + (40−X)/15 = 5
5. 79.76–96.02s Solve: LCM(5,15)=15 → 3X + (40−X) = 75 → 2X + 40 = 75
6. 96.46–108.74s Subtract 40 → 2X = 35 → divide by 2 → X = 17.5
7. 109.14–117.66s Final answer: hiker walked 17.5 km, option B

## PART 2 — Scene-by-Scene

### Phase 1 — Question + Illustration (0 → 20.0s)
- QuestionCard (hero, `heroEnterLowered`, rise at 4.5s) states the full question with 40 km, 5 hours, 5 km/hr, 15 km/hr highlighted in `--primary`.
- SerialNum badge "8" pops in sync with the card rise.
- Illustration: single road. Walker icon walks the first (left) segment 7.0s→10.0s, "Foot: 5 km/hr" label reveals at 10.0s. Bicycle icon then rides the remaining segment 12.14s→15.0s, "Bicycle: 15 km/hr" label reveals at 15.0s. A "Total: 40 km in 5 hrs" caption sits above the road, faded in with the illustration.
- `emphasize` on question card at 16.46s while narration poses the "find distance on foot" question.
- fadeOut phase1 at 20.0s ("Let us take the distance travelled on foot as X kilometer").

### Phase 2 — Given / Steps (20.24s → 109.0s)
- QuestionCard pins top (`recenterForOptions`'s exception layout, left:385px); mini illustration pins below (compact walker+bike road).
- **GIVEN** (enter 21.0s): Speed(foot) = 5 km/hr, Speed(bicycle) = 15 km/hr, Total distance = 40 km, Time = 5 hrs. Let foot distance = X km. Progressive reveal of "bicycle distance = (40 − X) km" at 29.76s. Morph to stack at 39.44s.
- **Step 1** (enter 40.34s): Time = Distance/Speed. Walking time = X/5 (reveal 50.52s). Cycling time = (40−X)/15 (reveal 68.22s). Equation X/5 + (40−X)/15 = 5 (reveal 79.24s). Morph to stack at 79.76s.
- **Step 2** (enter 81.10s): LCM(5,15) = 15 (reveal 83.9s). Multiply by 15: 3X + (40−X) = 75 (reveal 91.36s). Combine: 2X + 40 = 75 (reveal 96.02s). Morph to stack at 96.46s.
- **Step 3** (enter 97.16s): Subtract 40: 2X = 35 (reveal 100.6s). Divide by 2: X = 17.5 (reveal 105.36s). Morph to stack at 109.0s (paired with `recenterForOptions`).

### Phase 3 — Options Reveal (109.3s → 117.66s)
- fadeIn options-reveal 109.3s, `optionsStagger` 109.6s.
- `correctPulse` on option B at 114.6s ("seventeen point five").
- `resultReveal` of inline answer on pinned question at 112.5s.

## PART 3 — Assets
New: `illustration/walker.svg` (flat 2D walking figure, black outline + `--primary` limbs, matches bike.svg style). Reused: `illustration/bike.svg` (copied from ques7), `serial-num-badge.svg`, `logo.png`.

## PART 4 — Animation Complexity
Standard set only: `heroEnterLowered`, `serialEnter`, `fadeIn/fadeOut`, `cardEnter`, `morphToStack` (×4), `resultReveal`, `emphasize`, `optionsStagger`, `correctPulse`, `recenterForOptions`.

## PART 5 — Master Timeline
0–20.0 Phase 1 · 20.24–39.44 Given · 40.34–79.76 Step1 · 81.10–96.46 Step2 · 97.16–109.0 Step3 · 109.3–117.66 Options reveal.
