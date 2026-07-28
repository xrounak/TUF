# Storyboard - Train crosses two platforms (150m/20s and 250m/25s), find speed

## PART 1: Narration Beat Analysis

| Beat | Time | Narration | Purpose | Focus | Visual Objective |
|---|---|---|---|---|---|
| B1 | 0.10-4.72 | "So welcome back again, it's time to solve one more problem." | Opening hook | Question card | Hero question card rises into place |
| B2 | 5.14-13.28 | "Now let us first read the question. A train crosses a 150 m platform in 20 s and a 250 m platform in 25 s." | State question | Illustration | Train + two platforms build, labels pop in |
| B3 | 13.64-15.10 | "We need to find the speed of the train." | State goal | Speed tag | Speed tag pops on train as unknown |
| B4 | 15.58-27.12 | "Given, platform one length = 150 m, time = 20 s. Platform two length = 250 m, time = 25 s." | State givens | Given card | Pin flow, Given card opens with both platform values |
| B5 | 27.64-35.32 | "Let length of train = L m, speed of train = S m/s." | Define unknowns | Given card (3rd line) | Unknowns line reveals inside same Given card |
| B6 | 36.62-58.38 | "When a train crosses a platform it covers its own length plus the platform length... distance = L + 150... speed = distance / time." | Concept + formula | Step 1 card | Given morphs to stack, Step 1 shows distance and speed formula |
| B7 | 58.90-71.74 | "For the first platform, time = 20, so S = (L+150)/20, so 20S = L+150." | Equation 1 | Step 2 card | Step 1 morphs to stack, Step 2 shows first equation |
| B8 | 72.22-85.44 | "For the second platform, time = 25, so S = (L+250)/25, so 25S = L+250." | Equation 2 | Step 3 card | Step 2 morphs to stack, Step 3 shows second equation |
| B9 | 86.00-101.98 | "Subtract equation 1 from equation 2: 25S-20S = (L+250)-(L+150). Train length cancels. 5S = 100, S = 20 m/s." | Solve | Step 4 card | Step 3 morphs to stack, Step 4 shows subtraction + answer |
| B10 | 102.02-108.58 | "Hence the speed of the train is 20 m/s. So the correct option is option D." | Reveal | Options grid | Step 4 morphs to stack, options fade in, D pulses green |

## PART 2: Scene-by-Scene Storyboard

**Scene 1 (0-4.8s) - Question hero entrance**
Question card ("A train crosses a 150 m platform in 20 s and a 250 m platform in 25 s. Find the speed of the train.") uses `apt.heroEnterLowered` starting lowered, rising at RISE_TIME=4.8 (end of "...one more problem."). SerialNum badge pops in parallel at 0.8s, mirrors the rise at 4.8. Background: dotted grid + bottom strip + topic name "Trains, Boats and Streams" + logo, all visible from t=0.
Continuity: fresh scene, nothing prior.

**Scene 2 (5.14-15.3s) - Illustration build**
A flat 2D train (blue) sits on a track. As "150 meter platform in 20 seconds" is narrated (9.9s) a first platform block lands to the train's right with label "150 m - 20 s". As "250 meter platform in 25 seconds" is narrated (12.9s) a second, visibly longer platform block lands further right with label "250 m - 25 s", side by side with the first for size comparison. As "find the speed" is narrated (14.38s) a "Speed = ?" tag pops above the train.
Continuity: same illustration group persists into Phase 2 in shrunk/pinned form.

**Scene 3 (15.3-16.1s) - Pin flow**
At PIN_TIME=15.3, `apt.pinFlow` glides the full question card and the illustration into their pinned Phase-2 slots. SerialNum fades out in the same beat.
Continuity: the pinned illustration keeps train + both platforms, just smaller, centered.

**Scene 4 (16.2-35.6s) - Given card**
`apt.cardEnter` at GIVEN_TIME=16.2 for the Given SolutionCard (center). Line-level `.rv` text reveal:
- "Platform 1 = 150 m, Time = 20 s" (t=16.2)
- "Platform 2 = 250 m, Time = 25 s" (t=22.16)
- "Let Train = L m, Speed = S m/s" (t=27.64)
Card holds through the unknowns definition (27.64-35.32).
Continuity: pinned question + pinned illustration remain visible above/behind this card throughout.

**Scene 5 (36.62-58.4s) - Step 1: distance + speed formula**
Given card morphs to stack (`apt.morphToStack`, 35.6s) -> `stack-given` at left column top:140px, circle "G". Step 1 SolutionCard enters at 36.62s. Word/line reveal:
- "Distance = Train + Platform" (t=44.46)
- "Speed = Distance / Time" (`.frac`, t=56.38)
Continuity: stack-given sits at left top:140px; Step 1 card centered where Given card was.

**Scene 6 (59.2-70.6s) - Step 2: equation for Platform 1**
Step 1 morphs to stack (58.4s) -> `stack-step1` at left top:300px, circle "1", connector `line-g-1` grows in at 58.4s. Step 2 card enters 59.2s. Reveal:
- "Time = 20 s" (t=60.86)
- "S = (L+150)/20" (`.frac`, t=63.30)
- "20S = L + 150" (`.ans`, t=67.96)
Continuity: stack column now shows G+1; Step 2 card centered.

**Scene 7 (72.22-85.5s) - Step 3: equation for Platform 2**
Step 2 morphs to stack (70.6s) -> `stack-step2` top:460px, circle "2", connector `line-1-2` grows in at 70.6s. Step 3 card enters 72.22s. Reveal:
- "Time = 25 s" (t=72.22)
- "S = (L+250)/25" (`.frac`, t=74.94)
- "25S = L + 250" (`.ans`, t=80.10)
Continuity: stack column shows G+1+2; Step 3 card centered.

**Scene 8 (86.3-102.1s) - Step 4: subtract and solve**
Step 3 morphs to stack (85.5s) -> `stack-step3` top:620px, circle "3", connector `line-2-3` grows in at 85.5s. Step 4 card enters 86.3s. Reveal:
- "25S - 20S = (L+250) - (L+150)" (t=86.3)
- "5S = 100" (t=97.70)
- "S = 20 m/s" (`.ans`, t=99.80)
Continuity: stack column shows G+1+2+3; Step 4 card centered.

**Scene 9 (102.1-108.58s) - Options reveal**
Step 4 morphs to stack (102.1s) -> `stack-step4` top:780px, circle "4", connector `line-3-4` grows in at 102.1s. Pinned illustration fades out and pinned question recenters (`apt.recenterForOptions`, 102.1s). Options grid fades in (103.2s), staggers in (103.8s), correct option D pulses green (107.3s), matching "hence the speed... 20 m/s... correct option is option D" (102.02-108.58).
Continuity: stack column (G,1,2,3,4 + all connector lines) stays fully visible and untouched through this final beat.

**End fade (109.0s, 1.2s duration):** all direct children of `#root` fade together, after narration ends at 108.58s.

## PART 3: Asset List Required
- `illustration/train.svg` - reused generic flat 2D train (blue)
- `illustration/train-station.svg` - reused generic platform block, used twice at different scale for the two platforms
- No other custom assets; standard SerialNum badge + logo from `_template/assets/`

## PART 4: Animation Complexity Notes
- 4-step stack (Given, Step 1, Step 2, Step 3, Step 4 = G/1/2/3/4), the template's upper bound - 4 connector lines.
- Two platforms are shown side by side in Phase 1 for direct size comparison, not sequential crossing motion (no train-slide animation needed here, since the question is algebraic rather than a single-crossing distance proof).
- All `data-t` values pulled directly from `transcript.json` above.

## PART 5: Master Timeline Overview
```
0.0    Background + bottomStrip + topic + logo
0.3    Question card lowered entrance (heroEnterLowered)
0.8    SerialNum pop
4.8    Question card + badge rise to rest
5.14-15.1  Illustration build (train, platform1, platform2, speed tag)
15.3   PIN_TIME - pinFlow (question + illustration) to pinned slots
16.2   GIVEN_TIME - Given card enters, text reveals
35.6   Given -> stack morph (0.8s)
36.62  Step 1 card enters, text reveals (distance + speed formula)
58.4   Step 1 -> stack morph (0.8s), line-g-1 grows
59.2   Step 2 card enters, text reveals (equation for platform 1)
70.6   Step 2 -> stack morph (0.8s), line-1-2 grows
72.22  Step 3 card enters, text reveals (equation for platform 2)
85.5   Step 3 -> stack morph (0.8s), line-2-3 grows
86.3   Step 4 card enters, text reveals (subtract + solve)
102.1  Step 4 -> stack morph (0.8s), line-3-4 grows; illustration fades, question recenters
103.2  Options fade in
103.8  Options stagger
107.3  Correct option (D) pulse
109.0  End fade (1.2s) - everything out together
108.58 Voiceover ends
```
