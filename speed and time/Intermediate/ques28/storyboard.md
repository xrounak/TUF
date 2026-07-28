# Storyboard — Speed and Time, Q28 (Intermediate)

Question: A 100 km journey takes 6 hours, done partly by train at 30 km/hr and partly by bus at 10 km/hr. Train distance is? — Answer: B (60 km)

Voiceover duration: 85.98s

## PART 1 — Narration Beat Analysis

| Beat | Time | Narration | Purpose | Focus | Visual objective |
|---|---|---|---|---|---|
| 1 | 0.10–2.10 | Intro | Orient viewer | Question card | heroEnterLowered rises |
| 2 | 2.54–6.32 | Total journey = 100 km | State total distance | Illustration road | Road sweeps in, "100 km" label reveals |
| 3 | 6.88–9.34 | Total time = 6 hours | State total time | Illustration | "6 hours" label reveals |
| 4 | 9.90–13.74 | Train part at 30 km/hr | Introduce train leg | Train icon | Train icon fades in, "30 km/h" label reveals |
| 5 | 14.32–18.12 | Bus part at 10 km/hr | Introduce bus leg | Bus icon | Bus icon fades in, "10 km/h" label reveals |
| 6 | 18.68–21.58 | Find train distance | State the ask | Whole illustration | Question restated; sets up pin |
| 7 | 22.06–25.62 | Assume train distance = x km | Introduce unknown | Pinned question + Given card | Pin flow, Given card opens, "Train distance = x km" line-reveals |
| 8 | 26.20–33.92 | Since total=100km, bus distance = 100−x km | Derive second unknown | Given card | Second line line-reveals |
| 9 | 34.36–36.18 | Let's find time taken by each | Transition | — | Given morphs to stack |
| 10 | 36.54–40.48 | Formula: Time = Distance ÷ Speed | State formula | Step 1 card | Formula word-reveals |
| 11 | 41.76–48.70 | Time (train) = x ÷ 30 | Build train time | Step 1 card | Line word/line-reveals |
| 12 | 49.22–58.92 | Time (bus) = (100−x) ÷ 10 | Build bus time | Step 1 card | Line reveals |
| 13 | 59.44–64.36 | Total journey = 6 hrs, add both times | Transition to equation | — | Step 1 morphs to stack |
| 14 | 64.84–72.74 | x/30 + (100−x)/10 = 6 | Build equation | Step 2 card | Equation word-reveals |
| 15 | 73.40–77.30 | x + 300 − 3x = 180 | Simplify | Step 2 card | Line word-reveals |
| 16 | 77.58–82.16 | x = 60, train traveled 60 km | Final answer | Step 2 card | Answer word-reveals |
| 17 | 82.62–85.98 | Correct answer is Option B | Reveal | Options grid | Step 2 morphs to stack; options fade in, B pulses green |

## PART 2 — Scene-by-Scene Storyboard

### Scene 1 — Question Reveal (0 – 2.10s)
- VOICEOVER: "So welcome back again. Time for one more problem."
- VISUAL OBJECTIVE: Establish the question card, hero-lowered entrance.
- SCREEN LAYOUT: `#q-full-card` centered, lowered by 180px.
- ON-SCREEN ELEMENTS: `.q-card` with full question text, numbers in primary blue; serial badge "Q".
- ANIMATION DETAILS: `apt.heroEnterLowered("#q-full-card", 180, 2.1)`; badge mirrors with parallel y-tween.
- CAMERA MOVEMENT: none.
- TRANSITIONS: card rises to resting position at 2.1s as the opening line ends.
- EDUCATIONAL PURPOSE: orient viewer before data appears.
- VISUAL HIERARCHY: question card only element in frame.
- ATTENTION MANAGEMENT: single focal object.
- MOTION NOTES: back.out(1.4) settle.
- CONTINUITY FROM PREVIOUS SCENE: opening scene, no prior state.

### Scene 2 — Road + Total Journey (2.1 – 9.34s)
- VOICEOVER: "...total journey is one hundred kilometer. The total time taken for the journey is six hours."
- VISUAL OBJECTIVE: Establish the road and the two headline totals (distance, time).
- SCREEN LAYOUT: `#illustration` road-line spans center, "100 km" chip above-left, "6 hrs" chip above-right.
- ON-SCREEN ELEMENTS: `.road-line`, `#total-distance-chip` ("Total: 100 km"), `#total-time-chip` ("Time: 6 hrs").
- ANIMATION DETAILS: road sweeps in via `apt.roadSweep` at 2.3; `#total-distance-chip` reveals via `apt.resultReveal` at 3.82 (phrase start); `#total-time-chip` reveals at 6.88.
- CAMERA MOVEMENT: none.
- TRANSITIONS: chips appear with soft slide-fade.
- EDUCATIONAL PURPOSE: anchor the two known totals before the split is introduced.
- VISUAL HIERARCHY: road primary, chips secondary labels above it.
- ATTENTION MANAGEMENT: chips positioned above the road, non-overlapping.
- MOTION NOTES: back.out(1.4), 0.5s.
- CONTINUITY: road persists unchanged into Scene 3; chips remain visible.

### Scene 3 — Train Leg (9.90 – 13.74s)
- VOICEOVER: "Part of the journey is covered by train at thirty kilometer per hour."
- VISUAL OBJECTIVE: Introduce the train on the left portion of the road.
- ON-SCREEN ELEMENTS: `#train-icon` (🚆) fades in on left half of road, `#train-speed-label` ("30 km/h") beneath it.
- ANIMATION DETAILS: `apt.resultReveal("#train-icon", 9.90)`; label reveals at 12.30 (word "at" start of speed phrase).
- CONTINUITY: road + total chips remain visible unchanged; train icon is additive.

### Scene 4 — Bus Leg (14.32 – 18.12s)
- VOICEOVER: "The remaining part of the journey is covered by bus at ten kilometer per hour."
- VISUAL OBJECTIVE: Introduce the bus on the right portion of the road.
- ON-SCREEN ELEMENTS: `#bus-icon` (🚌) fades in on right half of road, `#bus-speed-label` ("10 km/h") beneath it.
- ANIMATION DETAILS: `apt.resultReveal("#bus-icon", 14.32)`; label reveals at 16.76 (word "at" start of speed phrase).
- CONTINUITY: train icon + all prior chips remain visible; bus icon is additive, completing the full picture.

### Scene 5 — The Question + Pin Flow (18.68 – 22.06s)
- VOICEOVER: "The question is asking us to find the distance traveled by the train."
- VISUAL OBJECTIVE: State the ask, then collapse into pinned layout.
- ANIMATION DETAILS: hold through narration, then `apt.pinFlow("#q-full-card", "#q-pinned", 21.6)` and `apt.pinFlow("#illustration", "#illus-pinned", 21.6)` — real glide, not fade swap. Pinned illustration keeps train + bus icons small, road line, and totals dropped (already conveyed).
- CONTINUITY FROM PREVIOUS SCENE: the exact rendered question card and illustration (road, train, bus) from Scene 4 glide directly into their pinned slots.

### Scene 6 — Given Card: Assume x (22.06 – 33.92s)
- VOICEOVER: "Now, let us assume the distance traveled by the train is x kilometer. Since the total journey is one hundred kilometer, the distance traveled by the bus will be one hundred minus x kilometers."
- VISUAL OBJECTIVE: Introduce the unknown x and derive the bus distance from it.
- SCREEN LAYOUT: `#card-given .solution-card` centered, chip "Given".
- ON-SCREEN ELEMENTS: "Train distance = x km" (line-level), "Bus distance = (100 − x) km" (line-level).
- ANIMATION DETAILS: `apt.cardEnter` at 22.06; `apt.textReveal("#card-given .math")` — first line at 22.06, second line at 29.90 (phrase start of bus-distance statement).
- CONTINUITY: pinned question + pinned road/train/bus icons remain visible above/beside throughout.

### Scene 7 — Step 1: Time Formula & Times (35.0 – 58.92s)
- VOICEOVER: "...let us find the time taken by each. We know the formula, time is equal to distance divided by speed. So time taken by the train is distance covered by the train divided by the speed of the train, which is x divided by thirty, and time taken by the bus is distance covered by the bus divided by the speed of the bus, which is one hundred minus x divided by ten."
- VISUAL OBJECTIVE: Walk through the formula then both individual times in one continuous card.
- SCREEN LAYOUT: Given card morphs to stack at 34.0 (`apt.morphToStack`, completing 34.8); Step 1 card enters at 35.0.
- ON-SCREEN ELEMENTS: Formula line ("Time = Distance ÷ Speed", word-level), "Time (train) = x ÷ 30" (line-level), "Time (bus) = (100 − x) ÷ 10" (line-level).
- ANIMATION DETAILS: `apt.textReveal` timed to: formula words 37.96/38.40/38.86/39.38/40.14; Time(train) line-level 41.76; Time(bus) line-level 49.22.
- CONTINUITY FROM PREVIOUS SCENE: the Given stack card is visible top-left; Step 1 card opens in the same center slot the Given card just vacated.

### Scene 8 — Step 2: Equation, Simplify, Solve (60.0 – 82.16s)
- VOICEOVER: "Now, we know that the total journey takes six hours, so we simply add both the times. That gives us x divided by thirty plus one hundred minus x divided by ten is equal to six. After simplifying this, x plus three hundred minus three x is equal to one hundred eighty. After solving this, x is equal to sixty. So the train traveled sixty kilometers."
- VISUAL OBJECTIVE: Build the full equation, simplify it, and land the final answer in one continuous derivation.
- SCREEN LAYOUT: Step 1 morphs to stack at 59.0 (completes 59.8), `apt.stackLineGrow("#line-g-1")` at 59.0; Step 2 enters at 60.0.
- ON-SCREEN ELEMENTS: equation "x/30 + (100−x)/10 = 6" (word-level, fractions), simplified "x + 300 − 3x = 180" (word-level), answer "x = 60 km" (word-level, `.ans`), final line "Train distance = 60 km" (line-level).
- ANIMATION DETAILS: `apt.textReveal` timed to: equation 65.96/67.16/67.70/70.46/70.86; simplified line 73.40/73.54/73.88/74.50/74.88/75.58/75.94; answer 78.76/79.00/79.40; final line 80.26.
- CONTINUITY: Given + Step 1 stack cards and connector line visible on the left; Step 2 opens in the vacated center slot.

### Scene 9 — Options Reveal (82.3 – 85.98s+)
- VOICEOVER: "Hence, the correct answer is option B."
- VISUAL OBJECTIVE: Confirm the answer against the 2×2 options grid.
- SCREEN LAYOUT: Step 2 morphs to stack at 82.3 (`stackLineGrow("#line-1-2")` same time); pinned question recenters (`apt.recenterForOptions`) at 82.3; options grid fades in at 83.1, staggers in at 83.4, correct option (B) pulses at 84.5.
- ON-SCREEN ELEMENTS: Options A (50 km), B (60 km, correct/green), C (40 km), D (70 km).
- ANIMATION DETAILS: `apt.fadeIn`, `apt.optionsStagger`, `apt.correctPulse`.
- CONTINUITY: full stack (Given, Step 1, Step 2) with both connector lines stays visible on the left, unfaded, alongside the options grid.

## PART 3 — Asset List Required
- No external image assets — illustration built from CSS + emoji (`.road-line`, `#train-icon` 🚆, `#bus-icon` 🚌) local to this question, inline styles in `index.html`.
- Standard `_template/assets/` (serial badge, logo) copied in.

## PART 4 — Animation Complexity Notes
- Given card covers two sequential reveals (train distance, bus distance) derived from one another — standard textReveal pacing, no custom animation needed.
- Step 1 and Step 2 are each single long cards covering an unbroken narration arc (formula+times; equation+simplify+solve) — matches narration structure, no interruption.
- All morphToStack / pinFlow usages are standard 0.8s, no custom durations.
- Only 2 steps (no Step 3) — this problem's derivation is short enough that Given → Step 1 (times) → Step 2 (equation+solve) covers it fully without an artificial third card.

## PART 5 — Master Timeline Overview
```
0.0    Hero question enters (lowered)
2.1    Question rises to rest
2.3    Road sweeps in
3.82   "Total: 100 km" chip reveals
6.88   "Time: 6 hrs" chip reveals
9.90   Train icon fades in
12.30  "30 km/h" label reveals
14.32  Bus icon fades in
16.76  "10 km/h" label reveals
21.60  PIN_TIME — pinFlow starts (question + illustration → pinned)
22.06  GIVEN_TIME — Given card enters, "Train distance = x km" reveals
29.90  "Bus distance = (100-x) km" reveals
34.00  Given → stack (morphToStack)
35.00  Step 1 enters — formula → both times (through 58.92)
59.00  Step 1 → stack, line G→1 grows
60.00  Step 2 enters — equation → simplify → x=60 (through 82.16)
82.30  Step 2 → stack, line 1→2 grows; recenter for options
83.10  Options grid fades in
83.40  Options stagger in
84.50  Option B pulses green
~87    End, hold
```
