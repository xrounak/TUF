# Speed and Time / Beginner / Q6 — Storyboard

Question: A woman travels the first 100 km at 50 km/hr and the next 100 km at 100 km/hr. Average speed for the whole journey?
Options: A) 60  B) 80  C) 75  D) 66.67 km/hr — Correct: D

Voiceover duration: 79.34s

## PART 1 — Narration Beat Analysis

| Beat | Time | Narration | Purpose | Focus | Visual objective |
|---|---|---|---|---|---|
| 1 | 0.10–4.28 | "So welcome back again. Time for one more problem. Now, in this problem," | Intro | Question card | Question card enters, rises to rest |
| 2 | 4.84–10.50 | "a woman travels the first one hundred kilometers at fifty kilometers per hour." | len1 setup | Illustration road 1 | Car drives len1, speed label "50 km/hr" fades in |
| 3 | 11.02–15.68 | "She travels the next one hundred kilometers at one hundred kilometers per hour." | len2 setup | Illustration road 2 | Car drives len2 (faster), speed label "100 km/hr" fades in |
| 4 | 16.24–19.88 | "The question is asking us to find the average speed for the whole journey." | Question restated | Question card | Emphasize pulse on question card |
| 5 | 20.30–29.18 | "Be careful here. We should not simply take the average... Average speed = total distance / total time." | Common mistake + formula | Pinned question, Given card | Phase transition; Given card shows the 4 given values |
| 6 | 29.70–42.76 | "First, let us find the time for the first 100km... time = distance/speed... 100/50 = 2 hours." | Step 1 | Step 1 card | Formula → numbers → result "2 hours" |
| 7 | 43.16–48.30 | "For the next 100km, time = 100/100 = 1 hour." | Step 2 | Step 2 card | Numbers → result "1 hour" |
| 8 | 48.76–54.96 | "Total distance = 100+100 = 200km. Total time = 2+1 = 3 hours." | Step 3 | Step 3 card | Distance sum then time sum reveal |
| 9 | 56.94–69.16 | "Average speed = total distance/total time = 200/3 ≈ 66.67 km/hr." | Step 4 | Step 4 card | Formula → numbers → result |
| 10 | 69.58–79.34 | "Hence the average speed is 66.67 km/hr. Final answer: option D." | Reveal | Options grid | Recenter, options stagger in, D pulses green |

## PART 2 — Scene-by-Scene Storyboard

### Phase 1 (0 – 20.3s): Question + Illustration
- `#q-full-card` heroEnterLowered, rise completes as "problem," ends (~4.3s)
- `#serial-num` pops at 0.8s
- Illustration: two stacked roads (len1 top, len2 bottom), each 100km, car drives left→right
  - len1 car drives 4.84s→10.50s, speed label "50 km/hr" fades in at 10.5s
  - len2 car drives 11.02s→15.68s, speed label "100 km/hr" fades in at 15.68s
- Emphasize pulse on `#q-full-card` at 16.24s (question restated)

### Phase 2 (20.3s – 69.6s): Given + Steps
- 20.3s: fadeOut phase1
- 20.6s: fadeIn `#q-pinned`, `#illus-pinned` (mini two-road recap)
- 21.5s: cardEnter Given (D1=100km, S1=50km/hr, D2=100km, S2=100km/hr)
- 29.7s: morphToStack Given→stack ("First," begins)
- 30.4s: cardEnter Step 1 (T1 = 100/50 = 2 hours); formula reveal 34.42s, numbers 38.04s, result "2 hours" 41.06s
- 43.16s: morphToStack Step1→stack
- 43.6s: cardEnter Step 2 (T2 = 100/100 = 1 hour); result "1 hour" 47.24s
- 48.76s: morphToStack Step2→stack
- 49.2s: cardEnter Step 3 (Total distance = 200km, Total time = 3 hours); distance reveal 48.76s, time reveal 52.70s
- 56.94s: morphToStack Step3→stack
- 57.4s: cardEnter Step 4 (Average speed = 200/3 ≈ 66.67 km/hr); formula 56.94s, numbers 61.14s, result 64.84s
- 69.58s: morphToStack Step4→stack + recenter question for options

### Phase 3 (69.6s – 79.34s): Options Reveal
- 70.0s: fadeIn `#options-reveal`
- 70.3s: optionsStagger A/B/C/D
- 76.76s: correctPulse on option D (word "D," starts 76.76s)

## PART 3 — Asset List
- No custom illustration assets needed; road + car built from CSS shapes (matches ques1 truck style, reused).

## PART 4 — Animation Complexity Notes
- Reuses `apt.heroEnterLowered`, `apt.serialEnter`, `apt.emphasize`, `apt.fadeOut/fadeIn`, `apt.cardEnter`, `apt.morphToStack`, `apt.resultReveal`, `apt.recenterForOptions`, `apt.optionsStagger`, `apt.correctPulse` — no new helpers required.

## PART 5 — Master Timeline Overview
0s ─ Q enters ─ 4.8s Leg1 drive ─ 11s Leg2 drive ─ 16.2s restate ─ 20.3s pin+Given ─ 29.7s Step1 ─ 43.2s Step2 ─ 48.8s Step3 ─ 57s Step4 ─ 69.6s recenter ─ 70s Options ─ 76.8s Correct pulse ─ 79.34s End
