# Storyboard — Train crosses platform (250m train, 350m platform, 72 km/h)

## PART 1: Narration Beat Analysis

| Beat | Time | Narration | Purpose | Focus | Visual Objective |
|---|---|---|---|---|---|
| B1 | 0.12–5.04 | "So welcome back again, it's time to solve one more problem." | Opening hook | Question card | Hero question card rises into place |
| B2 | 5.64–18.76 | "Now in this problem, we are given that the length of the train is 250 meters, the length of the platform is 350 meters, and the speed of the train is 72 km/h." | State givens | Illustration | Train + platform illustration builds, labels pop in |
| B3 | 19.28–24.58 | "The question is asking us to find how much time the train will take to completely cross the platform." | State goal | Question text | Illustration settles, question fully read |
| B4 | 25.06–33.88 | "The important point here is 'completely cross the platform'... it means the train has to cover its own length as well as the platform length." | Concept explainer | Given card | Pin flow to top, Given card opens with the 3 given values |
| B5 | 34.38–39.46 | "So the total distance will be 250 plus 350, which is 600 meter." | Step 1 — distance | Step 1 card | Given morphs to stack, Step 1 card shows total distance sum |
| B6 | 40.08–52.60 | "Now that we have the distance, we only need the speed in m/s... 72×5/18 gives 20 m/s. Done." | Step 1 — speed conversion | Step 1 card (2nd line) | Speed conversion line reveals inside same Step 1 card |
| B7 | 53.10–63.42 | "Time = Distance/Speed... 600/20... 30 seconds." | Step 2 — final calc | Step 2 card | Step 1 morphs to stack, Step 2 card shows formula + answer |
| B8 | 64.28–70.84 | "So the final answer will be 30 seconds. Hence option B." | Reveal | Options grid | Step 2 morphs to stack, options fade in, B pulses green |

## PART 2: Scene-by-Scene Storyboard

**Scene 1 (0–5.2s) — Question hero entrance**
Question card ("A 250 m train crosses a 350 m platform at 72 km/h. Find the time taken.") uses `apt.heroEnterLowered` starting lowered, rising at RISE_TIME=5.2 (end of opening line). SerialNum badge pops in parallel at 0.8s, mirrors the rise at 5.2. Background: dotted grid + bottom strip + topic name "Trains, Boats and Streams" + logo, all visible from t=0.
Continuity: fresh scene, nothing prior.

**Scene 2 (5.6–24.6s) — Illustration build**
A flat 2D train (blue) enters from the left, a platform block (light grey/primary-light) sits to its right, matching the train's leading edge. As "250 meters" is narrated (10.62s) a length label pops under the train; as "350 meters" is narrated (12.20s) a length label pops under the platform; as "72 km/h" is narrated (16.94s) a speed tag pops above the train. The full setup (train + platform + labels) is on screen and static by 19.28s while the goal sentence is read.
Continuity: same illustration group persists into Phase 2 in shrunk/pinned form.

**Scene 3 (24.6–25.4s) — Pin flow**
At PIN_TIME=24.6, `apt.pinFlow` glides the full question card and the illustration into their pinned Phase-2 slots (top question strip + small pinned train/platform recap). SerialNum fades out in the same beat.
Continuity: the pinned illustration keeps train+platform+labels, just smaller, centered.

**Scene 4 (25.5–34.0s) — Given card**
`apt.cardEnter` at GIVEN_TIME=25.5 for the Given SolutionCard (center). Word-level `.rv` text reveal ties each value to its concept-explainer narration beat (values were already spoken in Scene 2, so the card itself reveals as one paraphrased block per line, synced to B4's explanatory beat, not re-narrated word by word):
- "Train length = 250 m" (line-level, t=25.5)
- "Platform length = 350 m" (line-level, t=26.8)
- "Speed = 72 km/h" (line-level, t=27.6)
Card holds through the "covers its own length as well as platform length" explanation (30.28–33.88).
Continuity: pinned question + pinned illustration remain visible above/behind this card throughout.

**Scene 5 (34.0–53.0s) — Step 1: total distance + speed conversion**
Given card morphs to stack (`apt.morphToStack`, 34.0s) → `stack-given` at left column top:140px, circle "G". Step 1 SolutionCard enters at 34.4s. Word-level reveal:
- "Total Distance = 250 + 350 = 600 m" synced to 34.4–39.46
- "Speed = 72 × 5/18 = 20 m/s" synced to 44.72–52.60 (using `.frac` for 5/18)
Continuity: stack-given sits at left top:140px; Step 1 card centered where Given card was.

**Scene 6 (53.0–63.5s) — Step 2: time formula + answer**
Step 1 morphs to stack (53.0s) → `stack-step1` at left top:300px, circle "1", connector `line-g-1` grows in at 53.0s. Step 2 card enters 53.5s. Word-level reveal:
- "Time = Distance / Speed" (fraction) synced to 53.10–55.54
- "= 600/20 = 30 s" synced to 55.96–63.42 (`.ans` highlight on 30 s)
Continuity: stack column now shows G + 1; Step 2 card centered.

**Scene 7 (63.5–70.8s) — Options reveal**
Step 2 morphs to stack (63.5s) → `stack-step2` top:470px, circle "2", connector `line-1-2` grows in at 63.5s. Pinned illustration fades out and pinned question recenters (`apt.recenterForOptions`, 63.5s) to align with the options column. Options grid fades in (64.2s), staggers in (64.8s), correct option B pulses green (66.5s), matching "the final answer will be 30 seconds... option B" (64.28–70.84).
Continuity: stack column (G, 1, 2 + both connector lines) stays fully visible and untouched through this final beat.

**End fade (68.8s, 1.2s duration):** all direct children of `#root` fade together, ~2s after the correct pulse and after narration ends at 70.84s.

## PART 3: Asset List Required
- `illustration/train.svg` (or reuse a generic flat 2D train shape) — blue, flat, side-view
- `illustration/platform.svg` — flat rectangular platform block, light grey / primary-light
- No other custom assets; standard SerialNum badge + logo from `_template/assets/`

## PART 4: Animation Complexity Notes
- Only 2 solution steps (Given, Step 1, Step 2) — simpler than the 3-step template default, so stack column has 3 items (G/1/2) with 2 connector lines, not 3.
- Step 1 card carries two math lines (distance + speed conversion) reflecting two narration beats (B5+B6) inside one active card, before its single morph to stack.
- All `data-t` values pulled directly from `transcript.json` above.

## PART 5: Master Timeline Overview
```
0.0   Background + bottomStrip + topic + logo
0.3   Question card lowered entrance (heroEnterLowered)
0.8   SerialNum pop
5.2   Question card + badge rise to rest
5.6–24.6  Illustration build (train, platform, labels)
24.6  PIN_TIME — pinFlow (question + illustration) to pinned slots
25.5  GIVEN_TIME — Given card enters, text reveals
34.0  Given → stack morph (0.8s)
34.4  Step 1 card enters, text reveals (distance + speed conversion)
53.0  Step 1 → stack morph (0.8s), line-g-1 grows
53.5  Step 2 card enters, text reveals (formula + answer)
63.5  Step 2 → stack morph (0.8s), line-1-2 grows; illustration fades, question recenters
64.2  Options fade in
64.8  Options stagger
66.5  Correct option (B) pulse
68.8  End fade (1.2s) — everything out together
70.84 Voiceover ends
```
