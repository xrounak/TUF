# Storyboard — Speed and Time / Beginner / Ques 7
Sam reaches point B at 3 PM travelling at 20 km/h, or at 1 PM travelling at 30 km/h. Find the speed needed to reach at 2 PM. (Answer: C — 24 km/h)

## PART 1 — Narration Beats
1. 0.1–4.5s Intro ("welcome back", "one more problem")
2. 5.0–19.6s Setup: Sam travels same distance X; 20 km/h → 3 PM; 30 km/h → 1 PM; find speed for 2 PM
3. 20.0–29.7s Let distance = X km; time difference between the two cases = 2 hours
4. 30.3–65.7s Build the equation: time = distance/speed → X/20 (slower) and X/30 (faster) → X/20 − X/30 = 2
5. 66.4–100.6s Solve: LCM(20,30)=60 → 3X−2X=120 → X = 120 km
6. 108.3–135.6s Find Sam's start time: 120/20 = 6 hrs; 3 PM − 6 hrs = 9 AM
7. 136.1–160.9s Find required speed: 9 AM→2 PM = 5 hrs; 120/5 = 24 km/h
8. 161.4–165.7s Final answer: option C, 24 km/h

## PART 2 — Scene-by-Scene

### Phase 1 — Question + Illustration (0 → 20.3s)
- QuestionCard (hero, `heroEnterLowered`, rise at 4.5s) states the full question with 20 km/h / 3 PM / 30 km/h / 1 PM / 2 PM highlighted in `--primary`.
- SerialNum badge "7" pops in sync with the card rise.
- Illustration: two stacked roads (reuse ques6 car pattern). Road 1 — car drives at 20 km/h (7.48s→10.94s), "Arrives 3 PM" label reveals at 10.94s. Road 2 — car drives faster at 30 km/h (13.84s→15.5s), "Arrives 1 PM" label reveals at 15.5s.
- `emphasize` on question card at 15.8s while narration poses the "reach at 2 PM" question.
- fadeOut phase1 at 20.04s ("Let us take the distance as X kilometer").

### Phase 2 — Given / Steps (20.3s → 156.7s)
- QuestionCard pins top (`recenterForOptions`'s exception layout, left:385px); mini illustration pins below (compact "20→3PM", "30→1PM").
- **GIVEN** (enter 21.0s): Speed 1 = 20 km/h → 3 PM; Speed 2 = 30 km/h → 1 PM; Let distance = X km. Morph to stack at 29.7s.
- **Step 1** (enter 30.4s): Time = Distance/Speed → Slower: X/20, Faster: X/30 → equation X/20 − X/30 = 2. Progressive `resultReveal` at 35.74 / 40.88 / 47.78 / 62.02. Morph to stack at 66.42s.
- **Step 2** (enter 67.12s): LCM(20,30) = 60 → 3X − 2X = 2 → X/60 = 2 → X = 120 km. Reveals at 71.44 / 78.54 / 88.06 / 96.0. Morph to stack at 100.59s.
- **Step 3** (enter 101.3s): Time = 120/20 = 6 hours; Start time = 3 PM − 6 hrs = 9 AM. Reveals at 117.6 / 120.23 / 128.64. Morph to stack at 135.7s.
- **Step 4** (enter 136.4s): Available time = 9 AM→2 PM = 5 hours; Speed = 120/5 = 24 km/h. Reveals at 151.54 / 153.54. Morph to stack at 156.7s (paired with `recenterForOptions`).

### Phase 3 — Options Reveal (158.0s → 165.67s)
- fadeIn options-reveal 158.0s, `optionsStagger` 158.3s.
- `correctPulse` on option C at 164.30s ("twenty-four").
- `resultReveal` of inline answer on pinned question at 161.5s.

## PART 3 — Assets
Reused: `serial-num-badge.svg`, `logo.png`. No new per-question assets — cars are pure CSS (copied pattern from ques6).

## PART 4 — Animation Complexity
Standard set only: `heroEnterLowered`, `serialEnter`, `fadeIn/fadeOut`, `cardEnter`, `morphToStack` (×5), `resultReveal`, `emphasize`, `optionsStagger`, `correctPulse`, `recenterForOptions`.

## PART 5 — Master Timeline
0–20.3 Phase 1 · 20.3–29.7 Given · 30.4–66.4 Step1 · 67.1–100.6 Step2 · 101.3–135.7 Step3 · 136.4–156.7 Step4 · 158.0–165.67 Options reveal.
