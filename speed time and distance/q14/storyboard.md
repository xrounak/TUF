# Storyboard — Speed-Time-Distance: "Two Bikes, Opposite Directions → Distance Apart"

Topic: Speed, Time and Distance · Question 14 · Voiceover duration: **115.4s**

---

## PART 1 — Narration Beat Analysis

| # | Timestamp (transcript.json) | Narration | Educational Purpose | Viewer Attention Focus | Visual Objective |
|---|---|---|---|---|---|
| 1 | 0.08–3.52 | "So welcome back again. Time for one more problem." | Warm open, series continuity | Full-screen question card rising in | Establish frame, no distraction |
| 2 | 4.00–8.54 | "Now in this problem, we are given that two bikes start from the same point." | State the setup | Two bike icons appear together at a shared start point on a road | Object continuity anchor — both bikes visibly begin from one spot |
| 3 | 8.90–15.84 | "The speed of bike A is 28km/hr. The speed of bike B is 32km/hr." | State the two given speeds | Speed labels land on each bike as it's named | Numbers register visually before any motion starts |
| 4 | 16.36–19.96 | "Both bikes are moving in opposite directions also. They keep moving for two hours." | State direction + duration | Opposite-facing arrows appear; bikes begin drifting apart; a "2 hours" clock label fades in | Plant "opposite directions" and "2 hours" before the pin |
| 5 | 20.50–29.58 | "The question is asking us to find how far apart they will be after two hours. Now let us assume the distance traveled by bike A is X kilometers," | Frame the unknown; pin to solve mode | Question + illustration glide to pinned slots | Transition from "watching" to "solving" |
| 6 | 30.08–32.98 | "...and let the distance traveled by bike B be Y kilometers." | Define the second variable | Given card (center) | Both unknowns (x, y) established before any algebra |
| 7 | 33.78–40.18 | "Now first, let us understand one important concept. The bikes are moving in opposite directions." | Set up the key insight | Step 1 card — concept | Re-anchor "opposite directions" as the reason the distances add |
| 8 | 40.76–51.86 | "Because both bikes are moving away from each other, the distance between them keeps increasing. So the distance between the two bikes will be the sum of their individual distances from the starting point." | Justify WHY distances add | Step 1 card (same, building) | The core logical leap of the whole problem |
| 9 | 52.18–57.26 | "That means distance between the two bikes is equal to X plus Y." | State the general formula | Step 1 card — formula reveal | Converts the concept into a usable equation |
| 10 | 57.74–77.94 | "Now let us find the distance traveled by each bike... X is equal to 28 into 2... X is equal to 56 kilometers." | Compute bike A's distance | Step 2 card | First concrete number: x = 56 km |
| 11 | 78.27–94.44 | "Now let us find the distance traveled by bike B... Y is equal to 32 into 2... Y is equal to 64 kilometers." | Compute bike B's distance | Step 2 card (same, building) | Second concrete number: y = 64 km |
| 12 | 94.78–106.78 | "Now we know both distances. So the distance between the two bikes is equal to X plus Y... 56 plus 64... This gives us 120 kilometers." | Final arithmetic | Step 3 card | Deliver the answer: 120 km |
| 13 | 107.18–111.74 | "So after two hours, the two bikes will be 120 kilometers apart." | Restate the answer in plain terms | Step 3 card (settling) | Confirm the answer reads naturally against the question |
| 14 | 112.22–115.40 | "Hence, the correct answer is option B." | Reveal | Options grid, B pulses green | Confirm against the four choices |

---

## PART 2 — Scene-by-Scene Storyboard

Design constraints in force throughout (per `_template/README.md` §4D.1): only `--primary #6373db`, `--primary-light #e2e5ff`, `--success #4eb85f`, `--topic #949494`, `--text #000000`, `--bg #FFFFFF`; only `QuestionCard`/`SerialNum`/`SolutionCard`/`SolutionStackCard`/`solutionChip`/`StepCircle`/`StackLine`/options-grid/`logo`/`topic-name`/`bottomStrip`/Illustration/Fraction; only the helpers in `animations.js`, called explicitly by name below. The illustration (road + two bike icons + arrows + clock) is per-question custom markup/CSS, built from a single reused `illustration/bike.svg` (untouched — already `--primary` blue frame + black wheels, no recolor needed), mirrored via `scaleX(-1)` for Bike A's opposite facing.

### SCENE 1 — Cold Open (0.0s – 3.6s)
**VOICEOVER:** "So welcome back again. Time for one more problem."
**VISUAL OBJECTIVE:** Establish the question, hero-style.
**SCREEN LAYOUT:** `#q-full-card` centered horizontally, vertically lowered (per `apt.heroEnterLowered`), containing the question with "28 km/hr", "32 km/hr" and "2 hours" in `.num` blue.
**ON-SCREEN ELEMENTS:** QuestionCard (full), SerialNum badge ("Q").
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.6)`; SerialNum mirrors the same lowered→rest motion (fades in at 0.8s, rises at 3.6s).
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** N/A (opening beat).
**EDUCATIONAL PURPOSE:** Anchor the problem statement before anything else competes for attention.
**VISUAL HIERARCHY:** QuestionCard > SerialNum > (empty illustration area).
**ATTENTION MANAGEMENT:** Nothing else on screen yet.
**MOTION NOTES:** The rise is timed to finish exactly as "problem" is spoken.
**CONTINUITY FROM PREVIOUS SCENE:** N/A — first scene.

### SCENE 2 — Bikes Assemble at a Shared Start Point (3.6s – 8.9s)
**VOICEOVER:** "Now in this problem, we are given that two bikes start from the same point."
**VISUAL OBJECTIVE:** Establish object continuity — both bikes visibly share one origin.
**SCREEN LAYOUT:** `#illustration` (1400×300, centered under the question's future pinned slot) contains a road with a start-point marker at its horizontal center.
**ON-SCREEN ELEMENTS:**
- `#road` — a rounded gray bar (1300×14, matches q1's road styling) with a dashed center-line, spanning the illustration.
- `#start-point` — a small filled `--primary` circle sitting at the road's horizontal center, marking the shared origin.
- `#bike-a` — wrapper holding `illustration/bike.svg`, mirrored `scaleX(-1)` (faces left), positioned centered on `#start-point`.
- `#bike-b` — wrapper holding the same `bike.svg`, unmirrored (faces right), positioned centered on `#start-point`, directly overlapping `#bike-a`'s starting spot.
**ANIMATION DETAILS:**
- 4.2s: `apt.roadSweep(tl, "#road", 4.2)`.
- 4.6s: `apt.fadeIn(tl, "#start-point", 4.6)`.
- 6.42s: `apt.cardEnter(tl, "#bike-a", 6.42)` — timed to "two bikes".
- 6.7s: `apt.cardEnter(tl, "#bike-b", 6.7)` — a beat after Bike A so the two entrances read as sequential, not simultaneous clutter.
- 7.24s: `apt.emphasize(tl, "#start-point", 7.24)` — pulse on "start from the same point."
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Continuous build, no cuts.
**EDUCATIONAL PURPOSE:** Locks in "same starting point" before speeds or direction are introduced, so the later "moving apart" motion reads against a clear shared origin.
**VISUAL HIERARCHY:** Start-point pulse (momentary focus) > both bikes (equal weight, neither is "first").
**ATTENTION MANAGEMENT:** Bikes enter with a small stagger (0.28s) so the eye registers two distinct objects, not one blob.
**MOTION NOTES:** Both bikes sit stacked at dead center, motionless, until Scene 3 — deliberately held so "same point" is unambiguous before any travel begins.
**CONTINUITY FROM PREVIOUS SCENE:** The question card has just settled into its resting hero position (Scene 1's rise at 3.6s); the illustration begins filling in directly beneath it in the same frame, no cut.

### SCENE 3 — Speeds Named (8.9s – 16.36s)
**VOICEOVER:** "The speed of bike A is 28km/hr. The speed of bike B is 32km/hr."
**VISUAL OBJECTIVE:** Attach each speed value to its own bike before any motion starts.
**SCREEN LAYOUT:** Same road scene; speed labels appear above each bike, nested inside that bike's own wrapper so they travel together later.
**ON-SCREEN ELEMENTS:** `#speed-a` ("28 km/hr", `--primary` text, ≥22px per design.md's illustration-label floor) inside `#bike-a`; `#speed-b` ("32 km/hr") inside `#bike-b`.
**ANIMATION DETAILS:**
- 8.9s: `apt.fadeIn(tl, "#speed-a", 8.9)` — timed to "speed of bike A is 28".
- 13.2s: `apt.fadeIn(tl, "#speed-b", 13.2)` — timed to "speed of bike B is 32".
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Continuous from Scene 2.
**EDUCATIONAL PURPOSE:** Numbers register visually on the correct bike before the "opposite directions" motion begins, preventing any A/B mix-up once they're both moving.
**VISUAL HIERARCHY:** Whichever label just faded in is momentarily primary; settles to equal weight once both are visible.
**ATTENTION MANAGEMENT:** One label at a time, matching narration order exactly.
**MOTION NOTES:** Bikes are still motionless here — motion is reserved for Scene 4, so it lands with more impact once "opposite directions" is actually spoken.
**CONTINUITY FROM PREVIOUS SCENE:** Bikes are exactly where Scene 2 left them (stacked at start point); only the labels are new.

### SCENE 4 — Opposite Directions, Bikes Drift Apart, Duration Set (16.36s – 20.5s)
**VOICEOVER:** "Both bikes are moving in opposite directions also. They keep moving for two hours."
**VISUAL OBJECTIVE:** THE core visual payoff of Phase 1 — show the two bikes physically separating, faster bike covering visibly more ground.
**SCREEN LAYOUT:** Bike A travels left, Bike B travels right, away from the shared start point, at a distance ratio matching their real speeds (32:28).
**ON-SCREEN ELEMENTS:** `#bike-a` (traveling left), `#bike-b` (traveling right), `#arrow-left` / `#arrow-right` (chevron shapes, `--primary`, appearing above each bike pointing further outward), `#time-label` (clock icon + "2 hours", centered below the start point, matching q1's clock-icon styling).
**ANIMATION DETAILS:**
- 16.36s: `apt.fadeIn(tl, "#arrow-left", 16.36)` and `apt.fadeIn(tl, "#arrow-right", 16.36)` — timed to "opposite directions".
- 16.36s: `tl.to("#bike-a", {x: -400, duration: 4.14, ease: "none"}, 16.36)` — linear drift left, continuing (see Scene 5) through the pin.
- 16.36s: `tl.to("#bike-b", {x: 457, duration: 4.14, ease: "none"}, 16.36)` — linear drift right, slightly farther than Bike A in the same time (32:28 ratio), a physically-accurate detail that foreshadows "faster bike, more distance" ahead of the math.
- 18.54s: `apt.fadeIn(tl, "#time-label", 18.54)` — timed to "keep moving for two hours".
**CAMERA MOVEMENT:** None (the bikes' own motion carries the frame).
**TRANSITIONS:** Continuous — bikes simply start moving, no cut.
**EDUCATIONAL PURPOSE:** Makes "distance between them keeps increasing" (spoken later, Scene 7) feel obvious in hindsight — the viewer already watched it happen here.
**VISUAL HIERARCHY:** Bike motion (primary) > direction arrows (secondary, reinforcing) > time label (tertiary, supporting fact).
**ATTENTION MANAGEMENT:** Arrows and bike motion start together (one beat), time label follows 2.2s later so it doesn't compete with the direction reveal.
**MOTION NOTES:** The differential drift distance (400px vs 457px, ratio 28:32) is a deliberate physically-grounded touch — not just symmetric motion.
**CONTINUITY FROM PREVIOUS SCENE:** Bikes launch from the exact stacked position Scene 3 left them at — no repositioning jump.

### SCENE 5 — PIN FLOW + Given (20.5s – 33.78s)
**VOICEOVER:** "The question is asking us to find how far apart they will be after two hours. Now let us assume the distance traveled by bike A is X kilometers, and let the distance traveled by bike B be Y kilometers."
**VISUAL OBJECTIVE:** Transition to solving mode; establish both unknowns.
**SCREEN LAYOUT:** Question glides to its pinned top slot (`#q-pinned`); the full illustration glides into a small pinned recap (`#illus-pinned`) keeping both bike icons visible in miniature; the Given `SolutionCard` opens center.
**ON-SCREEN ELEMENTS:** `#q-pinned`, `#illus-pinned` (small mirrored/unmirrored bike icon pair with a short gap between them, ambient-bobbing, plus recap text "Opposite Directions · t = 2 hr"), `#card-given` (chip "Given").
**ANIMATION DETAILS:**
- `PIN_TIME = 20.5`: `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 20.5)`; `apt.pinFlow(tl, "#illustration", "#illus-pinned", 20.5)`; `apt.fadeOut(tl, "#serial-num", 20.5, 0.5)`.
- From `21.5` onward, through `RECENTER_TIME` (107.58s): `apt.ambientLoop(tl, "#bike-a-pinned-icon", 21.5, 107.58)` and `apt.ambientLoop(tl, "#bike-b-pinned-icon", 21.7, 107.58)` (slightly offset phase) — keeps the pinned recap alive through the entire Given/Step1/Step2/Step3 stretch.
- `GIVEN_TIME = 24.92`: `apt.cardEnter(tl, "#card-given .solution-card", 24.92)`.
- `apt.textReveal(tl, "#card-given .math")` reveals:
  - line-level `data-t="24.92"`: "Speed of Bike A = <span class='hi'>28 km/hr</span>"
  - line-level `data-t="25.07"`: "Speed of Bike B = <span class='hi'>32 km/hr</span>"
  - line-level `data-t="25.22"`: "Time = <span class='hi'>2 hours</span>"
  - word-level `data-t="25.02"`→`"32.98"` (real narration words: "let", "distance", "by", "A", "=", "x km" then "distance", "by", "B", "=", "y km"): "Distance by A = <span class='hi'>x km</span>, by B = <span class='hi'>y km</span>"
**CAMERA MOVEMENT:** The pin-flow itself.
**TRANSITIONS:** `apt.pinFlow` (0.8s glide), not a cut.
**EDUCATIONAL PURPOSE:** Consolidates everything Phase 1 showed into readable text, and introduces the two unknowns (x, y) the rest of the problem solves for.
**VISUAL HIERARCHY:** Given card (center, primary) > pinned question (top, secondary) > pinned bike recap (tertiary, ambient).
**ATTENTION MANAGEMENT:** Recap lines (speed, time) settle in almost immediately since they're already-known facts; the x/y line is the one genuinely "live" reveal, paced to the real narration.
**MOTION NOTES:** This is the first long text-reading stretch — the pinned bike recap's ambient bob is what keeps it from reading as static.
**CONTINUITY FROM PREVIOUS SCENE:** The full illustration is still mid-glide into its pinned slot as the Given card opens — continuous motion, not a hard reset.

### SCENE 6 — STEP 1: The Opposite-Directions Concept (33.78s – 57.74s)
**VOICEOVER:** "Now first, let us understand one important concept. The bikes are moving in opposite directions. Because both bikes are moving away from each other, the distance between them keeps increasing. So the distance between the two bikes will be the sum of their individual distances from the starting point. That means distance between the two bikes is equal to X plus Y."
**VISUAL OBJECTIVE:** Build the logical case for why the distances ADD, culminating in the general formula.
**SCREEN LAYOUT:** Given card morphs to the left stack; Step 1 `SolutionCard` opens center.
**ON-SCREEN ELEMENTS:** `#stack-given` (`.step-circle` "G"), `#card-step1`.
**ANIMATION DETAILS:**
- 32.98s: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 32.98)` — completes exactly as Step 1's narration begins.
- 33.78s: `apt.cardEnter(tl, "#card-step1 .solution-card", 33.78)`.
- `apt.textReveal(tl, "#card-step1 .math")` reveals:
  - word-level `data-t="37.22"`→`"39.52"`: "Bikes move in <span class='hi'>opposite directions</span>"
  - line-level `data-t="40.76"`: "Moving away from each other ⇒ distance keeps increasing"
  - word-level `data-t="53.06"`→`"55.24"`: "Distance between bikes ="
  - word-level `data-t="56.24"`/`"56.4"`/`"57.12"`: "<span class='hi'>x + y</span>"
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** `apt.morphToStack` (0.8s).
**EDUCATIONAL PURPOSE:** This is the single most important insight in the whole problem — everything after this is just plugging numbers into `x + y`.
**VISUAL HIERARCHY:** Step 1 card (center, active) > stack-given (left, archived) > pinned recap (ambient).
**ATTENTION MANAGEMENT:** Four sequential reveals, matched to the narration's own pacing across this ~24s span — no two reveals overlap.
**MOTION NOTES:** Pinned bike recap keeps bobbing throughout; this is a long reading stretch that needs that ambient life.
**CONTINUITY FROM PREVIOUS SCENE:** Given card is fully readable until its morph fires — no early fade.

### SCENE 7 — STEP 2: Compute Both Distances (57.74s – 94.78s)
**VOICEOVER:** "Now let us find the distance traveled by each bike. We know the formula, distance is equal to speed into time. For bike A, X, which is the distance traveled by bike A, is equal to speed into time. That is, X is equal to 28 into 2. So X is equal to 56 kilometers. Now let us find the distance traveled by bike B. Again, using the same formula, Y, which is the distance traveled by bike B, is equal to speed into time. That is, Y is equal to 32 into 2. After solving this, Y is equal to 64 kilometers."
**VISUAL OBJECTIVE:** Deliver both concrete distance values using the one formula from Step 1.
**SCREEN LAYOUT:** Step 1 morphs to stack; Step 2 `SolutionCard` opens center and stays through both bikes' calculations.
**ON-SCREEN ELEMENTS:** `#stack-step1` (`.step-circle` "1"), `#line-g-1` connector, `#card-step2`.
**ANIMATION DETAILS:**
- 56.94s: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 56.94)`; `apt.stackLineGrow(tl, "#line-g-1", 56.94)` — completes exactly as Step 2's narration begins.
- 57.74s: `apt.cardEnter(tl, "#card-step2 .solution-card", 57.74)`.
- `apt.textReveal(tl, "#card-step2 .math")` reveals:
  - word-level `data-t="71.78"`/`"73.24"`/`"74.2"`: "x = 28 × 2"
  - word-level `data-t="75.56"`/`"76.56"`: "= <span class='ans'>56 km</span>"
  - word-level `data-t="88.88"`/`"89.74"`/`"90.52"`: "y = 32 × 2"
  - word-level `data-t="92.66"`/`"93.4"`: "= <span class='ans'>64 km</span>"
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** `apt.morphToStack`.
**EDUCATIONAL PURPOSE:** Reuses the same Distance = Speed × Time formula twice, back to back, so the pattern is unmistakable.
**VISUAL HIERARCHY:** Step 2 card (center) > stack-given/stack-step1 (left, archived) > pinned recap (ambient).
**ATTENTION MANAGEMENT:** Four reveals across ~37s, evenly paced to the narration's own two-bike structure (A first, then B) — long stretch, but each reveal is well spaced.
**MOTION NOTES:** Longest single card in the video — pinned recap ambient bob is essential here to avoid a dead frame.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1 stays fully legible until its own morph fires.

### SCENE 8 — STEP 3: Sum the Distances (94.78s – 107.58s)
**VOICEOVER:** "Now we know both distances. So the distance between the two bikes is equal to X plus Y. Putting the values, distance is equal to 56 plus 64. This gives us 120 kilometers. So after two hours, the two bikes will be 120 kilometers apart."
**VISUAL OBJECTIVE:** Close the loop back to Step 1's formula with real numbers, delivering the final answer.
**SCREEN LAYOUT:** Step 2 morphs to stack; Step 3 `SolutionCard` opens center.
**ON-SCREEN ELEMENTS:** `#stack-step2` (`.step-circle` "2"), `#line-1-2` connector, `#card-step3`.
**ANIMATION DETAILS:**
- 93.98s: `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 93.98)`; `apt.stackLineGrow(tl, "#line-1-2", 93.98)` — completes exactly as Step 3's narration begins.
- 94.78s: `apt.cardEnter(tl, "#card-step3 .solution-card", 94.78)`.
- `apt.textReveal(tl, "#card-step3 .math")` reveals:
  - line-level `data-t="96.59"`: "Distance apart = x + y"
  - word-level `data-t="102.64"`/`"103.22"`/`"103.84"`: "= 56 + 64"
  - line-level `data-t="104.94"`: "= <span class='ans'>120 km</span>"
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** `apt.morphToStack`.
**EDUCATIONAL PURPOSE:** The payoff — the abstract `x + y` from Step 1 becomes the concrete `120 km` answer.
**VISUAL HIERARCHY:** Step 3 card (center) > stacks (left) > pinned recap (ambient).
**ATTENTION MANAGEMENT:** Three reveals, well spaced (96.59 / 102.64 / 104.94).
**MOTION NOTES:** Pinned recap still bobbing — this is the last stretch before Phase 3.
**CONTINUITY FROM PREVIOUS SCENE:** Step 2 remains fully legible until its own morph fires.

### SCENE 9 — Options Reveal (107.58s – 115.4s)
**VOICEOVER:** "...Hence, the correct answer is option B."
**VISUAL OBJECTIVE:** Confirm the answer against all four choices.
**SCREEN LAYOUT:** Step 3 morphs to stack; pinned question recenters; illustration recap clears; options grid (2×2) appears.
**ON-SCREEN ELEMENTS:** `#stack-step3` (`.step-circle` "3"), `#line-2-3` connector, `#options-reveal` (A: 130 km, B: 120 km — correct, C: 100 km, D: 150 km).
**ANIMATION DETAILS:**
- 106.78s: `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 106.78)`; `apt.stackLineGrow(tl, "#line-2-3", 106.78)`.
- 107.58s: `apt.fadeOut(tl, "#illus-pinned", 107.58)` (the one deliberate stop — pinned recap's ambient bob ends here); `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 107.58)`.
- 108.0s: `apt.fadeIn(tl, "#options-reveal", 108.0)`.
- 108.6s: `apt.optionsStagger(tl, ".opt-btn", 108.6)`.
- 114.8s: `apt.correctPulse(tl, ".opt-btn.correct", 114.8)`, timed to land on "option B."
- 116.4s: `apt.fadeOut(tl, "#root > div", 116.4, 1.2)` — END FADE.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** `apt.morphToStack` + `apt.recenterForOptions`.
**EDUCATIONAL PURPOSE:** Standard close — verify 120 km against the four options.
**VISUAL HIERARCHY:** Options grid (primary) > stack column (secondary) > pinned question (tertiary).
**ATTENTION MANAGEMENT:** Stagger-then-pulse, standard two-beat close.
**MOTION NOTES:** The pinned recap's fade-out is the one deliberate stop in the whole video, immediately superseded by the options grid's own entrance motion.
**CONTINUITY FROM PREVIOUS SCENE:** Step 3 is fully read before its morph fires; the recap's fade-out and the options grid's fade-in happen in the same beat, so the frame is never left static.

---

## PART 3 — Asset List Required

| Asset | Source | Notes |
|---|---|---|
| `illustration/bike.svg` | Reused from `speed and time/Beginner/ques7/illustration/bike.svg` | Untouched — already `--primary` blue frame + black wheels/pedal, no recolor needed. Reused twice: Bike A mirrored via `scaleX(-1)`, Bike B unmirrored. |
| `design-system.css`, `animations.js`, `assets/` | Copied from `_template/` | Per README §5B |

No new colors, fonts, or template components introduced — the illustration (road, start-point marker, direction arrows, clock+time label) is per-question custom markup as permitted by design.md's "Illustration" section.

---

## PART 4 — Animation Complexity Notes

- **Differential drift distance:** Bike A moves `x: -400` and Bike B moves `x: 457` over the identical 4.14s window (Scene 4) — the 400:457 ratio mirrors the real 28:32 speed ratio, a physically-grounded detail that visually foreshadows "faster bike travels farther" before the math ever states it.
- **Mirrored single asset:** one `bike.svg` file serves both bikes — Bike A is `scaleX(-1)` on its wrapper (flips the whole icon, including its nested speed label's icon-relative children if any), Bike B is unmirrored — no duplicate/recolored SVG needed.
- **Nested labels travel with their bike:** `#speed-a`/`#speed-b` are children of `#bike-a`/`#bike-b` respectively, so a single positional tween on the bike wrapper carries its label along automatically — no separate label tween needed.
- **Offset ambient loops:** the two pinned bike icons use `apt.ambientLoop` with slightly different start phases (21.5 vs 21.7) so they bob independently rather than in obvious lockstep, reading as more organic.
- **Long single-card stretches (Step 1 ~24s, Step 2 ~37s):** both rely entirely on `apt.textReveal`'s per-word/per-line pacing (no extra animation layered on) to keep a single unmoving card from feeling static — the pinned recap's ambient bob is the other half of that solution.
- **Only one true stop:** the pinned illustration recap's fade-out at 107.58s (Scene 9) is the sole point where continuous ambient motion ends, immediately superseded by the options-reveal's own stagger/pulse in the same beat.

---

## PART 5 — Master Timeline Overview

```
TIME (s)   ELEMENT                          WHAT HAPPENS
─────────  ───────────────────────────────  ─────────────────────────────────
0.0        Background + bottomStrip+logo    Always visible
0.3        QuestionCard                     heroEnterLowered — fades/scales in low
0.8        SerialNum                        pops in low, mirrors card
3.6        QuestionCard + SerialNum         rise to resting position
4.2        Road                             roadSweep
4.6        Start-point marker               fadeIn
6.42       Bike A                           cardEnter (mirrored, faces left)
6.7        Bike B                           cardEnter (faces right)
7.24       Start-point marker               emphasize pulse
8.9        "28 km/hr" label                 fadeIn on Bike A
13.2       "32 km/hr" label                 fadeIn on Bike B
16.36      Direction arrows                 fadeIn (both)
16.36      Bike A                           drifts x:-400 over 4.14s
16.36      Bike B                           drifts x:+457 over 4.14s
18.54      "2 hours" clock label            fadeIn

[ PIN_TIME = 20.5 ]
─────────  ───────────────────────────────  ─────────────────────────────────
20.5       Question + Illustration          🌟 pinFlow — real glide to pinned slots
21.5/21.7  Pinned bike icons                ambientLoop begins (offset phase) — runs to 107.58s

[ GIVEN_TIME = 24.92 ]
─────────  ───────────────────────────────  ─────────────────────────────────
24.92      Given card                       cardEnter (center)
24.92–32.98 Given card .math                 textReveal (speed A, speed B, time, x/y assumption)

[ STEP CYCLE ]
─────────  ───────────────────────────────  ─────────────────────────────────
32.98      Given → Given stack               🌟 morphToStack
33.78      Step 1 card                       cardEnter
33.78–57.26 Step 1 .math                     textReveal (concept → x+y formula)
56.94      Step 1 → Step 1 stack             🌟 morphToStack + stackLineGrow (G→1)
57.74      Step 2 card                       cardEnter
57.74–94.44 Step 2 .math                     textReveal (x=56km, then y=64km)
93.98      Step 2 → Step 2 stack             🌟 morphToStack + stackLineGrow (1→2)
94.78      Step 3 card                       cardEnter
94.78–106.78 Step 3 .math                    textReveal (x+y=120km)

[ PHASE 3 ]
─────────  ───────────────────────────────  ─────────────────────────────────
106.78     Step 3 → Step 3 stack            🌟 morphToStack + stackLineGrow (2→3)
107.58     Pinned illustration recap        fadeOut (the ONE deliberate stop)
107.58     Pinned question                  recenterForOptions
108.0      Options grid                     fadeIn
108.6      Option buttons                   optionsStagger
114.8      Correct option (B)               correctPulse
116.4      Everything                       END FADE (1.2s)
```

**Video duration:** 115.4s (matches `voiceover.wav` exactly); composition runs to ~118.6s with the end fade.
