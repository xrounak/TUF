# Storyboard - Train crosses two platforms (150m/20s and 250m/25s), find speed

Re-synced to the regenerated `voiceover.wav` (new narration duration 107.199s, was 108.579s).

## PART 1: Narration Beat Analysis

| Beat | Time | Narration | Purpose | Focus | Visual Objective |
|---|---|---|---|---|---|
| B1 | 0.10-4.68 | "So welcome back again, it's time to solve one more problem." | Opening hook | Question card | Hero question card rises into place |
| B2 | 5.18-14.54 | "Now let us first read the question. A train crosses a 150 m platform in 20 s and a 250 m platform in 25 s." | State question | Illustration | Train + two platforms build, labels pop in |
| B3 | 14.94-16.46 | "We need to find the speed of the train." | State goal | Speed tag | Speed tag pops on train as unknown |
| B4 | 16.96-27.32 | "Given, platform one length = 150 m, time = 20 s. Platform two length = 250 m, time = 25 s." | State givens | Given card | Pin flow, Given card opens with both platform values |
| B5 | 27.82-33.58 | "Let length of train = L m, speed of train = S m/s." | Define unknowns | Given card (3rd line) | Unknowns line reveals inside same Given card |
| B6 | 34.78-57.54 | "When a train crosses a platform it covers its own length plus the platform length... distance = L + 150... speed = distance / time." | Concept + formula | Step 1 card | Given morphs to stack, Step 1 shows distance and speed formula |
| B7 | 58.04-70.86 | "For the first platform, time = 20, so S = (L+150)/20, so 20S = L+150." | Equation 1 | Step 2 card | Step 1 morphs to stack, Step 2 shows first equation |
| B8 | 71.42-85.16 | "For the second platform, time = 25, so S = (L+250)/25, so 25S = L+250." | Equation 2 | Step 3 card | Step 2 morphs to stack, Step 3 shows second equation |
| B9 | 85.56-98.70 | "Subtract equation 1 from equation 2: 25S-20S = (L+250)-(L+150). Train length cancels. 5S = 100, S = 20 m/s." | Solve | Step 4 card | Step 3 morphs to stack, Step 4 shows subtraction + answer |
| B10 | 99.06-107.20 | "Hence the speed of the train is 20 m/s. So the correct option is option D." | Reveal | Options grid | Step 4 morphs to stack, options fade in, D pulses green |

Note: the new take includes a brief "Sorry." slip at ~78.2-78.7s (narrator restarts "twenty-five S equals..."). It carries no timed visual event and does not affect sync - it just sits inside the Step 2/Step 3 hold window.

## PART 2: Scene-by-Scene Storyboard

**Scene 1 (0-4.76s) - Question hero entrance**
Question card ("A train crosses a 150 m platform in 20 s and a 250 m platform in 25 s. Find the speed of the train.") uses `apt.heroEnterLowered` starting lowered, rising at RISE_TIME=4.76 (end of "...one more problem."). SerialNum badge pops in parallel at 0.8s, mirrors the rise at 4.76. Background: dotted grid + bottom strip + topic name "Trains, Boats and Streams" + logo, all visible from t=0.
Continuity: fresh scene, nothing prior.

**Scene 2 (5.18-16.66s) - Illustration build**
A flat 2D train (blue) sits on a track. As "150 meter platform in 20 seconds" is narrated (9.5s) a first platform block lands to the train's right with label "150 m - 20 s". As "250 meter platform in 25 seconds" is narrated (14.1s) a second, visibly longer platform block lands further right with label "250 m - 25 s", side by side with the first for size comparison. As "find the speed" is narrated (15.64s) a "Speed = ?" tag pops above the train.
Continuity: same illustration group persists into Phase 2 in shrunk/pinned form.

**Scene 3 (16.66-17.28s) - Pin flow**
At PIN_TIME=16.66, `apt.pinFlow` glides the full question card and the illustration into their pinned Phase-2 slots. SerialNum fades out in the same beat.
Continuity: the pinned illustration keeps train + both platforms, just smaller, centered.

**Scene 4 (17.28-33.86s) - Given card**
`apt.cardEnter` at GIVEN_TIME=17.28 for the Given SolutionCard (center). Line-level `.rv` text reveal:
- "Platform 1 = 150 m, Time = 20 s" (t=17.28)
- "Platform 2 = 250 m, Time = 25 s" (t=22.2)
- "Let Train = L m, Speed = S m/s" (t=27.82)
Card holds through the unknowns definition (27.82-33.58).
Continuity: pinned question + pinned illustration remain visible above/behind this card throughout.

**Scene 5 (34.78-57.56s) - Step 1: distance + speed formula**
Given card morphs to stack (`apt.morphToStack`, 33.86s) -> `stack-given` at left column top:140px, circle "G". Step 1 SolutionCard enters at 34.78s. Word/line reveal:
- "Distance = Train + Platform" (t=43.12)
- "Speed = Distance / Time" (`.frac`, t=55.38)
Continuity: stack-given sits at left top:140px; Step 1 card centered where Given card was.

**Scene 6 (58.3-69.72s) - Step 2: equation for Platform 1**
Step 1 morphs to stack (57.56s) -> `stack-step1` at left top:300px, circle "1", connector `line-g-1` grows in at 57.56s. Step 2 card enters 58.3s. Reveal:
- "Time = 20 s" (t=59.72)
- "S = (L+150)/20" (`.frac`, t=61.94)
- "20S = L + 150" (`.ans`, t=66.56)
Continuity: stack column now shows G+1; Step 2 card centered.

**Scene 7 (71.42-84.8s) - Step 3: equation for Platform 2**
Step 2 morphs to stack (69.72s) -> `stack-step2` top:460px, circle "2", connector `line-1-2` grows in at 69.72s. Step 3 card enters 71.42s. Reveal:
- "Time = 25 s" (t=71.42)
- "S = (L+250)/25" (`.frac`, t=74.2)
- "25S = L + 250" (`.ans`, t=78.76)
Continuity: stack column shows G+1+2; Step 3 card centered.

**Scene 8 (85.1-101.58s) - Step 4: subtract and solve**
Step 3 morphs to stack (84.8s) -> `stack-step3` top:620px, circle "3", connector `line-2-3` grows in at 84.8s. Step 4 card enters 85.1s. Reveal:
- "25S - 20S = (L+250) - (L+150)" (t=85.1)
- "5S = 100" (t=95.1)
- "S = 20 m/s" (`.ans`, t=98.66)
Continuity: stack column shows G+1+2+3; Step 4 card centered.

**Scene 9 (101.58-107.2s) - Options reveal**
Step 4 morphs to stack (101.58s) -> `stack-step4` top:780px, circle "4", connector `line-3-4` grows in at 101.58s. Pinned illustration fades out and pinned question recenters (`apt.recenterForOptions`, 101.58s). Options grid fades in (102.18s), staggers in (102.82s), correct option D pulses green (106.04s), matching "hence the speed... 20 m/s... correct option is option D" (99.06-107.2).
Continuity: stack column (G,1,2,3,4 + all connector lines) stays fully visible and untouched through this final beat.

**End fade (107.8s, 1.2s duration):** all direct children of `#root` fade together, after narration ends at 107.2s.

## PART 3: Asset List Required
- `illustration/train.svg` - reused generic flat 2D train (blue)
- `illustration/train-station.svg` - reused generic platform block, used twice at different scale for the two platforms
- No other custom assets; standard SerialNum badge + logo from `_template/assets/`

## PART 4: Animation Complexity Notes
- 4-step stack (Given, Step 1, Step 2, Step 3, Step 4 = G/1/2/3/4), the template's upper bound - 4 connector lines.
- Two platforms are shown side by side in Phase 1 for direct size comparison, not sequential crossing motion (no train-slide animation needed here, since the question is algebraic rather than a single-crossing distance proof).
- All `data-t` values re-derived from the regenerated `transcript.json`, aligned word-for-word against the previous take (accounting for the new take's extra "Sorry." interjection and minor phrasing/pause differences).

## PART 5: Master Timeline Overview
```
0.0    Background + bottomStrip + topic + logo
0.3    Question card lowered entrance (heroEnterLowered)
0.8    SerialNum pop
4.76   Question card + badge rise to rest
5.18-15.64  Illustration build (train, platform1, platform2, speed tag)
16.66  PIN_TIME - pinFlow (question + illustration) to pinned slots
17.28  GIVEN_TIME - Given card enters, text reveals
33.86  Given -> stack morph (0.8s)
34.78  Step 1 card enters, text reveals (distance + speed formula)
57.56  Step 1 -> stack morph (0.8s), line-g-1 grows
58.3   Step 2 card enters, text reveals (equation for platform 1)
69.72  Step 2 -> stack morph (0.8s), line-1-2 grows
71.42  Step 3 card enters, text reveals (equation for platform 2)
84.8   Step 3 -> stack morph (0.8s), line-2-3 grows
85.1   Step 4 card enters, text reveals (subtract + solve)
101.58 Step 4 -> stack morph (0.8s), line-3-4 grows; illustration fades, question recenters
102.18 Options fade in
102.82 Options stagger
106.04 Correct option (D) pulse
107.2  Voiceover ends
107.8  End fade start (1.2s) - everything out together
109.2  Timeline end
```
