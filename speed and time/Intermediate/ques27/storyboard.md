# Storyboard — Speed and Time, Q27 (Intermediate)

Question: Riding at 30 kmph, a man arrives at 11 A.M. At 40 kmph, he arrives at 9 A.M. To arrive at 10 A.M., his speed must be — Answer: D (34.28 kmph)

Voiceover duration: 121.24s

## PART 1 — Narration Beat Analysis

| Beat | Time | Narration | Purpose | Focus | Visual objective |
|---|---|---|---|---|---|
| 1 | 0.08–7.70 | Intro + Case 1: 30 km/h → 11 AM | Set up scenario 1 | Rider on road | Bike drives, chip "30 km/h → 11:00 AM" reveals |
| 2 | 8.14–14.26 | Case 2: 40 km/h → 9 AM | Set up scenario 2 | Rider (faster) | Chip "40 km/h → 9:00 AM" reveals |
| 3 | 14.80–20.22 | Question: find speed for 10 AM | State the ask | Target chip | Chip "? km/h → 10:00 AM" reveals, highlighted |
| 4 | 20.70–23.98 | Assume distance = D km | Introduce unknown | Pinned question + Given card | Pin flow, Given card opens, D assumption text-reveals |
| 5 | 24.62–32.80 | Start time same in all 3 cases; only speed/time changes | Key insight | Given card (held) | No new visual — narration plays over held Given card |
| 6 | 33.26–37.60 | Formula: Time = Distance ÷ Speed | State formula | Step 1 card | Given morphs to stack; Step 1 opens with formula line |
| 7 | 38.22–51.00 | Time₁ = D/30, Time₂ = D/40 | Build both times | Step 1 card | Two lines reveal |
| 8 | 51.43–62.44 | Difference = 2 hrs → D/30 − D/40 = 2 | Build equation | Step 1 card | Equation line reveals word-by-word |
| 9 | 63.16–67.32 | Solve → D = 240 km | Result | Step 1 card | Answer reveals |
| 10 | 67.90–79.08 | Find starting time: Time = 240/30 | New sub-goal | Step 2 card | Step 1 morphs to stack; Step 2 opens |
| 11 | 79.72–85.88 | = 8 hours; Start = 11AM − 8hrs | Compute start | Step 2 card | Lines reveal |
| 12 | 86.46–91.29 | Start = 3 AM (confirmed) | Result | Step 2 card | Answer reveals |
| 13 | 92.10–98.72 | Available time 3AM→10AM = 7 hrs | New sub-goal | Step 3 card | Step 2 morphs to stack; Step 3 opens |
| 14 | 98.78–108.52 | Required Speed = Distance/Time = 240/7 | Build formula | Step 3 card | Lines reveal |
| 15 | 109.10–118.10 | Simplify → 34.2857 ≈ 34.28 km/h | Final answer | Step 3 card | Answer reveals |
| 16 | 118.70–121.24 | "Correct answer is Option D" | Reveal | Options grid | Step 3 morphs to stack; options fade in, D pulses green |

## PART 2 — Scene-by-Scene Storyboard

### Scene 1 — Question Reveal (0 – 3.6s)
- VOICEOVER: "So welcome back again. Time for one more problem."
- VISUAL OBJECTIVE: Establish the question card, hero-lowered entrance.
- SCREEN LAYOUT: `#q-full-card` centered, lowered by 180px; road/illustration area empty below.
- ON-SCREEN ELEMENTS: `.q-card` with full question text, numbers in primary blue; serial badge "Q".
- ANIMATION DETAILS: `apt.heroEnterLowered("#q-full-card", 180, 3.6)`; badge mirrors with parallel y-tween.
- CAMERA MOVEMENT: none (static frame, motion is internal).
- TRANSITIONS: card rises to resting position at 3.6s exactly as the opening line ends.
- EDUCATIONAL PURPOSE: orient the viewer before data appears.
- VISUAL HIERARCHY: question card only element in frame.
- ATTENTION MANAGEMENT: single focal object.
- MOTION NOTES: back.out(1.4) settle.
- CONTINUITY FROM PREVIOUS SCENE: opening scene, no prior state.

### Scene 2 — Illustration Builds, Case 1 (3.6 – 9.94s)
- VOICEOVER: "...if a man rides at thirty kilometer per hour, he reaches at eleven AM."
- VISUAL OBJECTIVE: Introduce the road + rider, reveal first speed/arrival pair.
- SCREEN LAYOUT: `#illustration` area below question, road line + rider icon center, chip area above road.
- ON-SCREEN ELEMENTS: `.road-line`, `#rider` icon (motorbike), `#case1-chip` ("30 km/h → 11:00 AM").
- ANIMATION DETAILS: road draws in via `apt.roadSweep` at 3.8; rider fades/slides in alongside; `#case1-chip` reveals via `apt.resultReveal` at 9.24 (word "eleven" start) landing by 9.94.
- CAMERA MOVEMENT: none.
- TRANSITIONS: chip appears with a soft slide-fade, no card swap.
- EDUCATIONAL PURPOSE: visually anchor scenario 1 before scenario 2 is introduced.
- VISUAL HIERARCHY: rider + road primary, chip secondary label.
- ATTENTION MANAGEMENT: chip position fixed top-left of illustration.
- MOTION NOTES: back.out(1.4), 0.5s.
- CONTINUITY: road/rider persist unchanged into Scene 3; same objects, new chip added.

### Scene 3 — Case 2 (10.62 – 14.26s)
- VOICEOVER: "If he rides at forty kilometer per hour, he reaches at nine AM."
- VISUAL OBJECTIVE: Add second speed/arrival pair for contrast.
- ON-SCREEN ELEMENTS: `#case2-chip` ("40 km/h → 9:00 AM") appears below/right of case1 chip.
- ANIMATION DETAILS: `apt.resultReveal("#case2-chip", 13.74)` (word "nine" start), lands 14.26.
- CONTINUITY: road/rider/case1-chip remain visible unchanged; case2-chip is additive, not a replacement.

### Scene 4 — The Question (14.80 – 20.22s)
- VOICEOVER: "...to find the speed... so that he reaches exactly at ten AM."
- VISUAL OBJECTIVE: Introduce the unknown target as a highlighted chip.
- ON-SCREEN ELEMENTS: `#target-chip` ("? km/h → 10:00 AM", primary-colored border/text, larger/emphasized) appears.
- ANIMATION DETAILS: `apt.resultReveal("#target-chip", 18.96)` (word "exactly" start), lands ~19.5.
- CONTINUITY: all three chips + road + rider now visible together, forming the complete Phase 1 picture that will collapse into the pinned layout next.

### Scene 5 — Pin Flow into Phase 2 (20.22 – 21.02s)
- VOICEOVER: (silence/breath before "Now, let us assume...")
- VISUAL OBJECTIVE: Collapse the full question + illustration into the pinned top layout.
- ANIMATION DETAILS: `apt.pinFlow("#q-full-card", "#q-pinned", 20.22)` and `apt.pinFlow("#illustration", "#illus-pinned", 20.22)` — real glide, not fade swap. Pinned illustration keeps only the rider icon (small), chips dropped (already conveyed).
- CONTINUITY FROM PREVIOUS SCENE: the exact rendered question card and illustration from Scene 4 glide directly into their pinned slots — same objects, repositioned, not re-created.

### Scene 6 — Given Card: Assume Distance = D (21.02 – 32.80s)
- VOICEOVER: "Now, let us assume the total distance is D kilometer. Be very sure about one thing. The starting time remains the same in all three cases. Only the speed changes, so only the travel time changes."
- VISUAL OBJECTIVE: State the unknown and the key invariant (constant start time).
- SCREEN LAYOUT: `#card-given .solution-card` centered, chip "Given".
- ON-SCREEN ELEMENTS: Recap line "Case 1: 30 km/h → 11:00 AM", recap line "Case 2: 40 km/h → 9:00 AM", word-revealed line "Assume Distance = D km".
- ANIMATION DETAILS: `apt.cardEnter` at 21.02; `apt.textReveal("#card-given .math")` — recap lines line-level at 21.02/21.32, "Distance = D km" word-level at 21.20–23.98. Card holds through the "only speed changes" narration (24.62–32.80) with no new visual — this is a deliberate silent hold, matching the design.md guidance that a card stays until narration about it finishes.
- CONTINUITY: pinned question + pinned rider icon remain visible above/beside throughout.

### Scene 7 — Step 1: Formula & Solve for D (33.8 – 67.32s)
- VOICEOVER: formula → Time₁=D/30, Time₂=D/40 → difference=2hrs → equation → D=240km.
- VISUAL OBJECTIVE: Walk through the full equation build-up in one continuous card (matches how the narration treats it as one unbroken derivation).
- SCREEN LAYOUT: Given card morphs to stack at 32.8 (`apt.morphToStack`, completing 33.6); Step 1 card enters at 33.8.
- ON-SCREEN ELEMENTS: Formula line ("Time = Distance ÷ Speed"), "Time₁ = D ÷ 30" (line-level), "Time₂ = D ÷ 40" (line-level), equation "D/30 − D/40 = 2" (word-level), answer "D = 240 km" (word-level, `.ans`).
- ANIMATION DETAILS: `apt.textReveal` timed to: formula 34.98/35.50/35.98/36.54/37.30; Time₁ line-level 38.22; Time₂ line-level 45.22; equation word-level 59.30/60.04/60.36/60.68/61.40/61.68/62.28; answer word-level 65.30/65.68/66.10/66.84.
- CONTINUITY FROM PREVIOUS SCENE: the Given stack card is now visible top-left with connector line not yet drawn (drawn when Step 1 itself joins stack in Scene 8) — Step 1 card opens in the same center slot the Given card just vacated, same size/position class.

### Scene 8 — Step 2: Find Starting Time (68.3 – 87.90s)
- VOICEOVER: "...we can find the starting time... 240 divided by 30... eight hours... starting time is eleven AM minus eight hours... three AM."
- VISUAL OBJECTIVE: Compute the constant starting time shared by all three cases.
- SCREEN LAYOUT: Step 1 morphs to stack at 67.32 (completes 68.12); `stackLineGrow("#line-g-1")` at 67.32; Step 2 enters at 68.3.
- ON-SCREEN ELEMENTS: "Time (Case 1) = 240 ÷ 30" (line-level), "= 8 hours" (word-level), "Start Time = 11 AM − 8 hrs" (line-level), "= 3 AM" (word-level, `.ans`).
- ANIMATION DETAILS: `apt.textReveal` at 71.32 / 80.46 / 83.62 / 87.16.
- CONTINUITY: Given + Step 1 stack cards + connector line visible on the left; Step 2 opens in the vacated center slot.

### Scene 9 — Step 3: Available Time & Required Speed (88.9 – 118.90s)
- VOICEOVER: "...available travel time is from three AM to ten AM... seven hours... Required Speed = Distance ÷ Time... 240 divided by seven... 34.2857... approximately 34.28 kilometer per hour."
- VISUAL OBJECTIVE: Final computation delivering the answer value.
- SCREEN LAYOUT: Step 2 morphs to stack at 87.90 (completes 88.70); `stackLineGrow("#line-1-2")` at 87.90; Step 3 enters at 88.9.
- ON-SCREEN ELEMENTS: "Available Time: 3 AM → 10 AM" (line-level), "= 7 hours" (word-level), "Required Speed = Distance ÷ Time" (line-level), "= 240 ÷ 7" (word-level), "≈ 34.28 km/h" (word-level, `.ans`, emphasized as the final number).
- ANIMATION DETAILS: `apt.textReveal` at 93.84 / 97.70 / 98.78 / 106.92 / 115.34.
- CONTINUITY: Given + Step 1 + Step 2 stack cards and both connector lines remain visible left column, unchanged.

### Scene 10 — Options Reveal (118.9 – 121.24s+)
- VOICEOVER: "Hence, the correct answer is option D."
- VISUAL OBJECTIVE: Confirm the answer against the 2×2 options grid.
- SCREEN LAYOUT: Step 3 morphs to stack at 118.9 (`stackLineGrow("#line-2-3")` same time); pinned question recenters (`apt.recenterForOptions`) at 118.9; options grid fades in at 119.9, staggers in at 120.1, correct option (D) pulses at 120.62.
- ON-SCREEN ELEMENTS: Options A (35 kmph), B (33.33 kmph), C (36 kmph), D (34.28 kmph, correct/green).
- ANIMATION DETAILS: `apt.fadeIn`, `apt.optionsStagger`, `apt.correctPulse`.
- CONTINUITY: full stack (Given, Step 1, Step 2, Step 3) with all three connector lines stays visible on the left, unfaded, alongside the options grid — final frame shows the complete derivation plus the confirmed answer.

## PART 3 — Asset List Required
- No external image assets — illustration built from CSS (`.road-line`, `.rider-icon` emoji, `.speed-chip` labels) local to this question's `illustration/` scope (styles inline in `index.html`, no image files needed).
- Standard `_template/assets/` (serial badge, logo) copied in.

## PART 4 — Animation Complexity Notes
- Given card has an unusually long hold (21.02→32.80, ~11.8s) with no new reveal — intentional, matches the "only speed changes" conceptual narration that doesn't need new visuals.
- Step 1 card is long (33.8→67.32, ~33.5s) covering the full equation derivation as one unbroken beat — matches narration structure (never interrupted by a topic change).
- All morphToStack / pinFlow usages are standard 0.8s, no custom durations.

## PART 5 — Master Timeline Overview
```
0.0    Hero question enters (lowered)
3.6    Question rises to rest
3.8    Road sweeps in, rider appears
9.24   Case 1 chip reveals (30km/h → 11AM)
13.74  Case 2 chip reveals (40km/h → 9AM)
18.96  Target chip reveals (? → 10AM)
20.22  PIN_TIME — pinFlow starts (question + illustration → pinned)
21.02  GIVEN_TIME — Given card enters, text-reveals through 23.98
32.80  Given → stack (morphToStack)
33.80  Step 1 enters — formula → equation → D=240km (through 67.32)
67.32  Step 1 → stack, line G→1 grows
68.30  Step 2 enters — start time = 3AM (through 87.90)
87.90  Step 2 → stack, line 1→2 grows
88.90  Step 3 enters — required speed = 34.28 km/h (through 118.90)
118.90 Step 3 → stack, line 2→3 grows; recenter for options
119.90 Options grid fades in
120.10 Options stagger in
120.62 Option D pulses green
~123   End, hold
```
