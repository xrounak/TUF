# Trains, Streams and Boats - Question 37 - Storyboard

## PART 1: Narration Beat Analysis

| Beat | Time | Text | Purpose | Focus | Visual |
|---|---|---|---|---|---|
| 1 | 0.1-4.1 | Intro/welcome | Hook | Question card | heroEnterLowered rise |
| 2 | 4.6-17.1 | States boat speed 10, stream speed 2, distance 24 both ways | Set up givens | Question card + illustration build | Boat/river illustration builds, numbers highlighted |
| 3 | 17.7-22.9 | States what's being asked (difference in time) | Frame the ask | Question text | Hold |
| 4 | 23.0(pin)-25.6 | "Let us first recall the basic formulas" | Transition to solving | Pin question, Given card | pinFlow, Given card recap enters |
| 5 | 26.0-30.2 | Against stream = slows down | Concept: upstream | Illustration/Given | Hold |
| 6 | 30.7-38.2 | Upstream speed = 10-2 = 8 | Step 1 calc | Step 1 card | cardEnter + textReveal |
| 7 | 38.7-50.1 | With stream = faster; downstream = 10+2=12 | Step 2 calc | Step 2 card | morph Step1->stack, cardEnter Step2 |
| 8 | 51.8-58.5 | Time = distance/speed | Formula recap | Step 3 card (formula line) | line-level reveal |
| 9 | 59.1-67.5 | Upstream time=3h, downstream time=2h | Step 3 calc | Step 3 card | word-level reveal |
| 10 | 67.9-76.6 | Reframe: question wants difference; diff = 3-2=1h | Step 4 calc | Step 4 card | morph Step3->stack, cardEnter Step4 |
| 11 | 77.4-81.5 | Answer = 1 hour = Option A | Reveal | Options grid | fadeIn, stagger, correctPulse |

## PART 2: Scene-by-Scene

**Scene 1 (0-22.5s) - Phase 1**
- QuestionCard (heroEnterLowered, rise at 4.2s) with numbers "10 km/h", "2 km/h", "24 km" in primary blue.
- SerialNum badge pops in parallel with card rise.
- Illustration: flat 2D river band, boat icon centered, left arrow (red, "Upstream") and right arrow (green, "Downstream") extending from boat, labels "Boat: 10 km/h", "Stream: 2 km/h", "Distance: 24 km each way" fade in sequentially as narrated (4.6-17.1s).
- Continuity: illustration finishes building well before PIN_TIME, holds steady through the "what's being asked" line (17.7-22.9s).

**Scene 2 (23.0s) - Pin + Given**
- PIN_TIME = 23.0: pinFlow glides QuestionCard + Illustration to pinned slots.
- GIVEN_TIME = 23.3: Given SolutionCard enters center, three line-level reveals (23.3/23.9/24.5): "Boat speed = 10 km/h", "Stream speed = 2 km/h", "Distance (each way) = 24 km".
- Continuity: pinned illustration's boat icon still settling into its shrunk slot as Given card's box fades in on top.

**Scene 3 (29.4-38.2s) - Step 1: Upstream Speed**
- morphToStack Given->stack at 29.4 (0.8s).
- Step 1 cardEnter at 30.5, word-level reveal: "Upstream Speed = Boat Speed − Stream Speed = 10 − 2 = 8 km/h" timed to narration words (31.0-37.3s).
- Continuity: Given circle badge "G" lands in left column as Step 1's box is already rising into center.

**Scene 4 (38.3-50.1s) - Step 2: Downstream Speed**
- morphToStack Step1->stack at 38.3, stackLineGrow line-g-1.
- Step 2 cardEnter at 39.4, word-level reveal: "Downstream Speed = Boat Speed + Stream Speed = 10 + 2 = 12 km/h" (44.2-48.9s).
- Continuity: connector line G→1 grows in as Step 1 settles into stack, same beat Step 2 begins rising.

**Scene 5 (50.2-58.5s) - Step 3 opens: Time formula**
- morphToStack Step2->stack at 50.2, stackLineGrow line-1-2.
- Step 3 cardEnter at 51.3. Line-level reveal of formula "Time = Distance ÷ Speed" at 54.86s (ambient hold before this - illustration pinned icon bobs via ambientLoop 40-54s to avoid dead air).

**Scene 6 (59.1-67.5s) - Step 3: Time values**
- Same Step 3 card, word-level reveal added: "Upstream Time = 24 ÷ 8 = 3 hours" (59.1-62.5s), "Downstream Time = 24 ÷ 12 = 2 hours" (63.9-67.1s).

**Scene 7 (67.5-76.6s) - Step 4: Difference**
- morphToStack Step3->stack at 67.5, stackLineGrow line-2-3.
- Step 4 cardEnter at 68.6. Line-level reveal "Question asks: upstream − downstream time" at 70.6s, then word-level "Difference = 3 − 2 = 1 hour" (74.3-76.3s), answer "1 hour" highlighted (.ans).

**Scene 8 (76.7-84s) - Options Reveal**
- morphToStack Step4->stack at 76.7, stackLineGrow line-3-4.
- recenterForOptions at 77.5 (clears stack column, aligns pinned question).
- fadeIn options-reveal 77.8, optionsStagger 78.3, correctPulse on Option A at 80.0.
- End fade at 82.5 (1.2s), timeline holds to 84s.

## PART 3: Asset List
- illustration/boat-river.svg (flat 2D river band + boat + two directional arrows, primary blue palette)
- No other custom assets; all cards/components from design-system.css

## PART 4: Animation Complexity Notes
- 4-step stack (Given + 4 steps) - one more step than the 3-step template example; stack column spacing measured for 5 cards.
- No apt.stepFlow used (dropped per template rules).
- ambientLoop used once on pinned boat icon during the long Step 3 hold (40-54s).

## PART 5: Master Timeline Overview
```
0.0   heroEnterLowered (rise 4.2)
0.8   serialEnter (rise 4.2 parallel)
4.6-17.1  illustration labels build
23.0  PIN_TIME - pinFlow x2
23.3  GIVEN card enter + line reveals
29.4  morph Given->stack
30.5  Step1 enter + word reveal
38.3  morph Step1->stack + line-g-1 grow
39.4  Step2 enter + word reveal
50.2  morph Step2->stack + line-1-2 grow
51.3  Step3 enter + line reveal (formula)
59.1-67.5  Step3 word reveal (times)
67.5  morph Step3->stack + line-2-3 grow
68.6  Step4 enter + line + word reveal
76.7  morph Step4->stack + line-3-4 grow
77.5  recenterForOptions
77.8  options fadeIn
78.3  optionsStagger
80.0  correctPulse
82.5  end fade (1.2s)
84.0  hold
```
