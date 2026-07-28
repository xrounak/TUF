# Storyboard - Trains, Streams and Boats Q28

## PART 1: Narration Beat Analysis

| Beat | Time | Narration | Purpose | Focus | Visual objective |
|---|---|---|---|---|---|
| 1 | 0.10-3.26 | "welcome back... one more problem" | Hook | Center screen | Question card entrance |
| 2 | 3.84-10.48 | train crosses pole in 12s, 180m platform in 24s | State problem | Question text + illustration | Train, pole, platform build in |
| 3 | 11.08-13.96 | find length of the train | State goal | Question card | Hold on question |
| 4 | 14.50-16.52 | let length of train be L meter | Pin + set up variable | Pinned question, Given card opens | pinFlow to top, Given card enters |
| 5 | 17.18-23.04 | same speed both cases | Setup logic | Given card | text reveal of Given content |
| 6 | 23.60-30.94 | speed when crossing pole = length/time | Step 1 concept | Step 1 card | cardEnter + textReveal |
| 7 | 32.18-38.18 | Speed = L/12, Equation 1 | Step 1 math | Step 1 card | reveal equation |
| 8 | 39.76-46.18 | speed crossing platform, own length + platform | Step 2 concept | Step 2 card | cardEnter + textReveal |
| 9 | 46.68-01:01.28 | total distance L+180, Speed=(L+180)/24, Equation 2 | Step 2 math | Step 2 card | reveal equation |
| 10 | 01:01.80-1:09.46 | same train, same speed, Eq1=Eq2 | Step 3 concept | Step 3 card | cardEnter |
| 11 | 1:10.02-1:21.56 | L/12 = (L+180)/24, simplify | Step 3 math | Step 3 card | reveal equation + simplification |
| 12 | 1:22.72-1:28.96 | L=180m, answer D | Reveal | Options grid | correctPulse on D |

## PART 2: Scene-by-Scene Storyboard

**Scene 1 (0-3.26s)** - QuestionCard fades/scales in center (`apt.heroEnterLowered`, RISE_TIME=1.2 - matches short opening beat). SerialNum badge pops in parallel. Background layers always present.
CONTINUITY: opening scene, no prior state.

**Scene 2 (3.84-10.48s)** - Illustration builds: a blue flat 2D train (rounded rectangle body + two wheel circles) enters from left, drives toward a thin vertical pole planted mid-track. As "pole in 12 seconds" is said, the train's front touches the pole and a small "12s" label fades up beneath the pole. As "180 meter platform in 24 seconds" is said, a long low platform rectangle (with "180 m" label) slides in to the right of the pole, and a "24s" label fades up beneath the platform's far edge.
CONTINUITY: train and pole/platform enter while question card sits still at top of frame.

**Scene 3 (11.08-16.52s)** - Question card holds. At 14.50s a small "L" label fades onto the train body (marks train length variable).
CONTINUITY: train/pole/platform stay in place from Scene 2, only the "L" label is new.

**Scene 4 (PIN_TIME=16.9s)** - `apt.pinFlow` glides QuestionCard + illustration (train+pole+platform, shrunk) to pinned top slot. GIVEN_TIME=17.2s: Given card `cardEnter` at center, `apt.textReveal` reveals "Train length = L", "Pole crossing time = 12 s", "Platform length = 180 m, time = 24 s" line by line per transcript timestamps 17.2/19.9/23.6.
CONTINUITY: pinned train/pole/platform recap sits centered under pinned question; Given card opens directly below with no illustration overlap.

**Scene 5 (23.60-30.94s)** - Given card morphs to stack (`apt.morphToStack`, 29.3s). Step 1 card `cardEnter` at 30.0s: "Distance = Length of train only" line, then equation `Speed = L ÷ 12` word-reveal at 32.18/35.62s timestamps.
CONTINUITY: Given stack card settles top of left column exactly as Step 1 card fades in at center, same beat.

**Scene 6 (37.5-46.18s)** - Step 1 morphs to stack (37.5s), `stackLineGrow` G to 1. Step 2 card enters (38.2s): "Distance = Length of train + platform" line, then "Total = L + 180" reveal (46.68/51.6s), equation `Speed = (L+180) ÷ 24` (51.6-1:01.28s).
CONTINUITY: Step 1 stack card locks in place, connector line grows the instant Step 2 card fades in above it.

**Scene 7 (1:01.80-1:09.46s)** - Step 2 morphs to stack (57.4s... actually earlier - see Master Timeline), `stackLineGrow` 1 to 2. Step 3 card enters (1:01.8s): "Equation 1 = Equation 2" line reveal.
CONTINUITY: Step 2 stack settles as Step 3 card opens with the equating logic.

**Scene 8 (1:10.02-1:21.56s)** - Step 3 equation reveals word-by-word: `L ÷ 12 = (L + 180) ÷ 24` at 1:11.20s, then "L = 180 m" answer span at 1:21.56s (`.ans` class, primary highlight).
CONTINUITY: same Step 3 card, text keeps building inside it, no new card.

**Scene 9 (1:22.72s onward)** - Step 3 morphs to stack, `stackLineGrow` 2 to 3. `apt.recenterForOptions` shifts pinned question+stack right-aligned. Options grid fades in (2x2), staggers in, `apt.correctPulse` on Option D at 1:26.5s ("the correct answer is Option D").
CONTINUITY: Step 3 stack card locks into left column at the same moment options grid fades in on the right, completing the four-card stack.

**Scene 10 (end, ~85-89s)** - Hold on full board (question, 4-card stack, options with D highlighted) through voiceover tail, then `apt.fadeOut` on `#root > div` at END_FADE_TIME=87.5s.
CONTINUITY: nothing new enters, everything from Scene 9 holds then fades as one.

## PART 3: Asset List Required

- No external SVG files. Illustration built from CSS-only flat shapes: `.train-body` (rounded rect, `--primary` fill), two `.wheel` circles (black), `.pole` (thin vertical bar, `--text`), `.platform` (long low rect, `--primary-light` fill with `--primary` border), text labels `.illus-label` (>=22px, per design.md floor).
- Pinned versions: smaller scale copies of train/pole/platform, labels >=21px, centered (single-row recap, not two-object spread).

## PART 4: Animation Complexity Notes

- Only helpers from `animations.js` used: `heroEnterLowered`, `serialEnter`-style parallel tween, `pinFlow`, `cardEnter`, `textReveal`, `morphToStack`, `stackLineGrow`, `setStackLine`, `fadeOut`, `fadeIn`, `optionsStagger`, `correctPulse`, `recenterForOptions`.
- 4 cards total: Given, Step 1, Step 2, Step 3 - all via standard 0.8s morph cadence.
- No `apt.ambientLoop` needed - narration is dense enough (no long silent stretch) that a bob isn't required.

## PART 5: Master Timeline Overview (revised - merged Given, delayed pin)

Given now absorbs the old Step 1 + Step 2 (Equation 1 + Equation 2), and enters
near the very start so every value/equation line reveals at its own real
transcript.json timestamp instead of waiting for a pin. Question + illustration
stay in their Phase 1 hero position all the way through the Given card's full
run - the pin only fires once Equation 1 and Equation 2 have both played out,
right as the narration turns to "the important point" (comparing the two
equations). Only one Step remains after the pin: Equate & Solve.

```
0.0    Background layers
0.3    QuestionCard enter (heroEnterLowered)
0.8    SerialNum badge pop
3.3    Given card enters (chip "Given") - stays through Phase 1
3.6    RISE_TIME - card rises to rest
3.8    Illustration fades in (train, pole, bridge)
3.8    Given: "Pole crossing time = 12 s" reveals
6.4    Pole label "12 s" fades in (illustration)
7.5    Given: "Platform = 180 m, time = 24 s" reveals
7.9    Platform label "180 m" fades in (illustration)
9.6    Platform time label "24 s" fades in (illustration)
14.5   Given: "Let train length = L m" reveals
16.0   "L" tag fades in on train icon (illustration)
28.7   Given: "Crossing pole -> distance = L" reveals
35.6   Given: "Speed = L / 12 ... Eq.1" reveals
42.9   Given: "Crossing platform -> distance = L + platform" reveals
52.8   Given: "Total = L + 180" reveals
55.7   Given: "Speed = (L+180) / 24 ... Eq.2" reveals
61.9   PIN_TIME - pinFlow glides question+illustration to pinned slot;
       Given card morphs to stack "G" circle (both Eq.1 and Eq.2 recapped)
63.7   Step 1 card enters (chip "Step 1" - Equate & Solve)
63.5   Step 1: "Same train, same speed -> Eq.1 = Eq.2" reveals
71.2   Step 1: "L/12 = (L+180)/24" reveals
77.1   Step 1: "24L = 12(L+180)" reveals (derivation)
77.9   Step 1: "24L - 12L = 12x180" reveals (derivation)
78.4   Step 1: "12L = 2160" reveals (derivation)
79.5   Step 1: "L = 180 m" reveals (answer)
82.7   RECENTER_TIME - Step 1 -> stack "1" morph, line G-1 grows,
       illus-pinned fades out, question recenters for options
83.6   Options fadeIn
84.2   optionsStagger
88.1   correctPulse on D
88.9   END_FADE_TIME - fade everything out
89.0   End of voiceover
```
