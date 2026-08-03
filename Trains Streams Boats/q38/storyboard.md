# Storyboard - Trains, Streams and Boats Q38 (v2 - direct speed formula)

## PART 1: Narration Beat Analysis

| Beat | Time | Narration | Educational Purpose | Attention Focus | Visual Objective |
|------|------|-----------|---------------------|------------------|-------------------|
| 1 | 0.12-5.34 | "So welcome back again. It's time to solve one more problem. Now, in this problem, we are given that" | Hook / intro | Question card | Question card enters full screen |
| 2 | 5.90-18.48 | "two trains have the same speed... Train one crosses a pole in 12 seconds... train two crosses a pole in 18 seconds... find the ratio of their lengths" | Set up the scenario | Illustration: two trains vs a pole | Train 1 crosses pole with "12s" label, Train 2 crosses pole with "18s" label, same speed shown |
| 3 | 18.90-25.12 | "Let the speed of each train be V... lengths be L1 and L2" | Define variables | Illustration labels | Speed value V pulses, L1/L2 length labels appear |
| 4 | 25.52-36.96 | "the important concept here is, when a train crosses a pole, it covers only its own length. There is no platform or another train involved, so the distance covered is simply the length of the train" | Core concept | Given card | Given card restates known values while concept is narrated |
| 5 | 37.30-42.90 | "we use the formula speed equals length of train divided by time" | Core formula | Step 1 card | Formula Speed = Length / Time appears |
| 6 | 43.58-73.44 | "since both trains have the same speed... speed of first train = L1/12... speed of second train = L2/18... speed of both trains are equal so L1 by twelve equals" | Derive per-train speed equations, set equal | Step 1 card (same) | Speed1 = L1/12, Speed2 = L2/18, then L1/12 = L2/18 |
| 7 | 74.16-85.36 | "L2 by eighteen, which is L1 by L2 equals twelve by eighteen. After simplifying this by dividing both numbers by six" | Cross-form the ratio, simplify | Step 2 card | L1/L2 = 12/18 -> divide by 6 |
| 8 | 85.86-87.62 | "we get L1 by L2 equals two by three" | Final answer | Step 2 card (same) | L1/L2 = 2/3 highlighted |
| 9 | 88.54-97.56 | "the required ratio is two is to three. Hence, the correct option is option B" | Reveal answer | Options grid | Options reveal, B highlighted green |

## PART 2: Scene-by-Scene Storyboard

### SCENE 1 - Question Intro
**TIMESTAMP:** 0.0 - 3.6s
**VOICEOVER:** "So welcome back again. It's time to solve one more problem."
**VISUAL OBJECTIVE:** Establish the question on screen.
**SCREEN LAYOUT:** Full QuestionCard centered per `template.html` coordinates.
**ON-SCREEN ELEMENTS:** `#q-full-card` with question text "Two trains with the same speed cross a pole in 12 seconds and 18 seconds respectively. What is the ratio of their lengths?"; SerialNum badge top-left (fixed "Q"); topic name bottom-left "Trains, Streams and Boats"; logo bottom-right.
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.6)`. Serial badge fromTo at 0.8s (0.55s, back.out(2)), settles to y:0 at RISE_TIME=3.6 (power2.inOut).
**CAMERA MOVEMENT:** Static.
**TRANSITIONS:** None yet, card holds.
**EDUCATIONAL PURPOSE:** Anchor viewer to exact problem statement before any visuals move.
**VISUAL HIERARCHY:** Question text primary, badge secondary.
**ATTENTION MANAGEMENT:** No competing motion during the intro line.
**MOTION NOTES:** Card rises from lowered offset, single focal point.
**CONTINUITY FROM PREVIOUS SCENE:** Opening scene, no prior state.

### SCENE 2 - Illustration Build: Two Trains, Same Speed
**TIMESTAMP:** 3.6 - 18.48s
**VOICEOVER:** "Now, in this problem, we are given that two trains have the same speed. Train one crosses a pole in twelve seconds, and train two crosses a pole in eighteen seconds. The question is asking us to find the ratio of their lengths."
**VISUAL OBJECTIVE:** Show both trains passing a fixed pole at the same speed but taking different times, visually implying different lengths.
**SCREEN LAYOUT:** Illustration area below the question card, per `template.html` illustration slot.
**ON-SCREEN ELEMENTS:** A single vertical pole icon in each lane. Two flat 2D trains (`illustration/train-1.svg`, `illustration/train-2.svg`) in two horizontal lanes, each moving left to right past its pole. A timer chip "12s" fades in above Train 1's lane once it finishes crossing; a timer chip "18s" fades in above Train 2's lane once it finishes crossing.
**ANIMATION DETAILS:** At 4.5s both poles fade in (`apt.fadeIn`, 0.4s). At 4.5s Train 1 slides in from the left edge and crosses at constant speed (duration 6.1s, ends 10.6s, matching the spoken "twelve seconds" at 10.60); "12s" chip fades in at 10.6s. At 10.8s Train 2 slides in from the left edge in the lower lane at the identical pixel-per-second speed as Train 1 but drawn visibly longer, so it takes longer to clear the pole (duration 6.6s, ends 17.4s); "18s" chip fades in at 17.4s, before the "ratio of their lengths" phrase ends at 18.48s.
**CAMERA MOVEMENT:** Static frame; only the trains translate horizontally.
**TRANSITIONS:** Elements accumulate (poles -> Train 1 -> 12s chip -> Train 2 -> 18s chip), no hard cuts.
**EDUCATIONAL PURPOSE:** Let the viewer visually infer "same speed, different crossing time -> different length" before the math is shown.
**VISUAL HIERARCHY:** Trains and pole primary; timer chips secondary but bright (`--primary`).
**ATTENTION MANAGEMENT:** One train motion at a time, chips appear only after their train fully passes.
**MOTION NOTES:** Constant linear velocity for both trains (no easing mid-travel) so the differing crossing time reads purely from train length.
**CONTINUITY FROM PREVIOUS SCENE:** The question card from Scene 1 remains pinned at the top of frame (unscaled, still in its Scene 1 rested position) while the illustration builds beneath it.

### SCENE 3 - Variable Labels
**TIMESTAMP:** 18.90 - 25.12s
**VOICEOVER:** "Let the speed of each train be V meter per second. Let the lengths of the two trains be L1 and L2."
**VISUAL OBJECTIVE:** Formalize the visual into variables.
**SCREEN LAYOUT:** Same illustration lane, both trains now static/parked past the pole.
**ON-SCREEN ELEMENTS:** Length-span brackets fade in beneath Train 1 labeled "L1" and beneath Train 2 labeled "L2".
**ANIMATION DETAILS:** `apt.fadeIn` on "L1" bracket at 20.8s and "L2" bracket at 22.14s (0.4s each, matching "Let the lengths... be L1 and L2" start). `apt.ambientLoop` on both poles 22.5s-25.4s.
**CAMERA MOVEMENT:** Static.
**TRANSITIONS:** Simple fades, no morphs (still Phase 1).
**EDUCATIONAL PURPOSE:** Bridge from visual scenario to algebraic variables used in the solution.
**VISUAL HIERARCHY:** L1/L2 brackets equal weight, directly under their respective train.
**ATTENTION MANAGEMENT:** Sequential fade-in (L1 then L2) so the eye tracks top-to-bottom.
**MOTION NOTES:** No new movement, purely label overlays plus the small pole ambient bob for the tail of Phase 1.
**CONTINUITY FROM PREVIOUS SCENE:** Both trains remain exactly where Scene 2 left them (parked past the pole); nothing repositions.

### SCENE 4 - Pin to Phase 2
**TIMESTAMP:** 25.52 - 26.32s (PIN_TIME = 25.52)
**VOICEOVER:** "Now, the important concept here is" (leading into next line)
**VISUAL OBJECTIVE:** Transition the full-screen setup into the compact pinned layout so solution cards can take center stage.
**SCREEN LAYOUT:** Question card and illustration glide from Phase 1 positions to pinned slots (`#q-pinned`, `#illus-pinned`) per `template.html`.
**ON-SCREEN ELEMENTS:** `#q-full-card` -> `#q-pinned`; illustration (both trains + poles + labels) -> `#illus-pinned` (scaled down).
**ANIMATION DETAILS:** `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 25.52)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 25.52)`, both 0.8s, `power2.inOut`. Serial badge fades out at 25.52s.
**CAMERA MOVEMENT:** Coordinated glide of both elements toward their pinned coordinates.
**TRANSITIONS:** Real glide, not fade swap.
**EDUCATIONAL PURPOSE:** Keep the question and visual scenario visible as a persistent reference while the math builds below.
**VISUAL HIERARCHY:** Pinned elements shrink to secondary size, clearing center stage.
**ATTENTION MANAGEMENT:** Single coordinated motion, no new content introduced mid-glide.
**MOTION NOTES:** Both pinFlow calls share the same start time so question and illustration move as one visual unit.
**CONTINUITY FROM PREVIOUS SCENE:** The exact train/pole/label arrangement from Scene 3 (including its tail-end ambient pole bob) glides into the pinned slot, unchanged in content, only in position and scale.

### SCENE 5 - Given Card
**TIMESTAMP:** 26.3 - 36.3s (GIVEN_TIME = 26.3, its own timestamp separate from PIN_TIME)
**VOICEOVER:** "the important concept here is, when a train crosses a pole, it covers only its own length. There is no platform or another train involved, so the distance covered is simply the length of the train."
**VISUAL OBJECTIVE:** Restate the known quantities in card form while the concept narration plays.
**SCREEN LAYOUT:** `#card-given .solution-card` centered per template.
**ON-SCREEN ELEMENTS:** Chip "Given"; three lines: "Speed of both trains = same (v)", "Train 1 crosses pole in 12s", "Train 2 crosses pole in 18s".
**ANIMATION DETAILS:** `apt.cardEnter(tl, "#card-given .solution-card", 26.3)`. `apt.textReveal(tl, "#card-given .math")` with lines at data-t 26.30 / 28.00 / 30.00. `apt.ambientLoop(tl, "#illus-pinned-icon", 26.3, 88.5)` to keep the pinned icon from sitting dead-static through the long Phase 2 stretch.
**CAMERA MOVEMENT:** Static, center focus.
**TRANSITIONS:** Card holds through the full "own length" concept narration (25.52-36.96) before morphing.
**EDUCATIONAL PURPOSE:** Ground the solution in the exact numbers already shown visually, right before the pole-crossing concept resolves into a formula.
**VISUAL HIERARCHY:** Given values are the sole focal point; pinned question/illustration remain visible but secondary above.
**ATTENTION MANAGEMENT:** No ambient distraction inside the card itself; motion is confined to the pinned icon loop above it.
**MOTION NOTES:** Sequential line reveal mirrors the calm restating tone of the narration.
**CONTINUITY FROM PREVIOUS SCENE:** The pinned question/illustration are still completing their `pinFlow` settle as this card's `cardEnter` begins at 26.3s, reading as one continuous motion from glide to card arrival.

### SCENE 6 - Given -> Stack, Step 1 Card (Formula + Per-Train Speed)
**TIMESTAMP:** 36.3 - 74.5s
**VOICEOVER:** "Hence, we use the formula speed equals length of train divided by time. Since both trains have the same speed, this speed will be equal for both. So we can say speed of first train equals L1 by time taken by first train, which is twelve, so speed becomes L1 by twelve. And for second train, speed equals L2 by time taken by second train, which is eighteen, so speed becomes L2 by eighteen. And we are given that speed of both trains are equal, so L1 by twelve equals..."
**VISUAL OBJECTIVE:** Build the governing formula, then instantiate it for each train, then set the two expressions equal.
**SCREEN LAYOUT:** Given card morphs into stack circle "G" in the left column; Step 1 solution card takes center.
**ON-SCREEN ELEMENTS:** Stack card "G": "Train 1 = 12s, Train 2 = 18s, same speed". Step 1 chip "Step 1"; math builds line by line: concept sentence, `.frac` Speed = Length/Time, "Since both trains have the same speed", `.frac` Speed1 = L1/12, `.frac` Speed2 = L2/18, closing with `.frac ans` L1/12 = L2/18.
**ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 36.3)` (0.8s). `apt.cardEnter(tl, "#card-step1 .solution-card", 37.3)` (~1s breathing gap after morph). `apt.textReveal(tl, "#card-step1 .math")` with lines at data-t 37.30 (concept), 37.85 (formula frac), 43.58 (same-speed line), 48.60 (Speed1 frac), 58.65 (Speed2 frac), 67.50 (final equal-speeds frac, `.ans`).
**CAMERA MOVEMENT:** Static.
**TRANSITIONS:** Standard 0.8s morph.
**EDUCATIONAL PURPOSE:** Show the formula is a direct consequence of "pole crossing = own length", then instantiate it per train, then equate them since speed is shared.
**VISUAL HIERARCHY:** The closing equal-speeds equation (L1/12 = L2/18) is the visual climax of this card, styled `.ans`.
**ATTENTION MANAGEMENT:** This is the longest single card hold in the video (~38s) because the narration walks through the formula and both substitutions in one continuous breath; no ambient loop needed inside the card since the text reveal itself keeps pacing.
**MOTION NOTES:** `apt.textReveal` paces six lines across the long hold, each landing exactly as its clause is spoken.
**CONTINUITY FROM PREVIOUS SCENE:** The Given card's final line is still visible as the morph to stack begins at 36.3s (narration has just finished restating the pole concept), so the shrink into the stack circle reads as the natural close of that restatement.

### SCENE 7 - Step 1 -> Stack, Step 2 Card (Cross-Form + Simplify)
**TIMESTAMP:** 74.5 - 88.54s
**VOICEOVER:** "L2 by eighteen, which is L1 by L2 equals twelve by eighteen. After simplifying this by dividing both numbers by six, we get L1 by L2 equals two by three."
**VISUAL OBJECTIVE:** Rewrite the equal-speeds equation as a length ratio and simplify to the final answer.
**SCREEN LAYOUT:** Step 1 card morphs into stack circle "1"; Step 2 solution card takes center; `stack-line` connector grows between circles "G" and "1".
**ON-SCREEN ELEMENTS:** Stack card "1": "L1/12 = L2/18". Step 2 chip "Step 2"; math builds: `.frac` L1/L2 = `.frac` 12/18 (hi), then "Dividing both by 6", then `.frac` L1/L2 = `.frac ans` 2/3.
**ANIMATION DETAILS:** `apt.setStackLine("#line-g-1", "#stack-given .step-circle", "#stack-step1 .step-circle")` called once before timeline build. `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 74.5)` (0.8s). `apt.stackLineGrow(tl, "#line-g-1", 74.5)`. `apt.cardEnter(tl, "#card-step2 .solution-card", 75.5)`. `apt.textReveal(tl, "#card-step2 .math")` with lines at data-t 75.50 (L1/L2=12/18), 80.26 ("Dividing both by 6"), 85.86 (final 2/3, `.ans`). `apt.emphasize(tl, "#card-step2 .ans", 88.0)`.
**CAMERA MOVEMENT:** Static.
**TRANSITIONS:** Standard 0.8s morph; connector line grows in sync.
**EDUCATIONAL PURPOSE:** Show the concrete arithmetic (12/18 -> divide by 6 -> 2/3) that turns the equal-speeds equation into the final length ratio.
**VISUAL HIERARCHY:** Final "2/3" is the visual climax of the solution, styled `.ans`.
**ATTENTION MANAGEMENT:** Sequential reveal (raw cross-form first, simplified result second) mirrors the spoken pacing.
**MOTION NOTES:** The stack-line between "G" and "1" is the first connector in this video; measured centers via `apt.setStackLine`, never guessed coordinates.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1's closing L1/12 = L2/18 line is still visible mid-morph as Step 2's card begins entering, so the viewer sees the same equation carried forward and immediately rewritten as a ratio.

### SCENE 8 - Options Reveal
**TIMESTAMP:** 88.54 - 97.56s (end)
**VOICEOVER:** "So the required ratio of the lengths of the two trains is two is to three. Hence, the correct option is option B."
**VISUAL OBJECTIVE:** Confirm the final answer against the four options.
**SCREEN LAYOUT:** Step 2 card morphs into stack circle "2"; connector line grows between "1" and "2"; pinned illustration fades out and pinned question recenters; options grid (2x2) fades in below.
**ON-SCREEN ELEMENTS:** Options grid: A "3:2", B "2:3", C "4:9", D "1:2" (per `.opt-btn`); Option B carries class `correct`.
**ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 88.54)`. `apt.setStackLine("#line-1-2", ...)` called pre-timeline; `apt.stackLineGrow(tl, "#line-1-2", 88.54)`. `apt.fadeOut(tl, "#illus-pinned", 89.3)`. `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 89.3)`. `apt.fadeIn(tl, "#options-reveal", 90.3)`. `apt.optionsStagger(tl, ".opt-btn", 90.9)` (stagger 0.12s). `apt.correctPulse(tl, ".opt-btn.correct", 95.3)` timed just after "option B" is spoken. End fade at 96.3s (1.4s fade), timeline extends to 99s.
**CAMERA MOVEMENT:** Static; only the recenter shift of the pinned question.
**TRANSITIONS:** Final morph + line grow, then fade-in of the options container.
**EDUCATIONAL PURPOSE:** Close the loop between the derived math answer and the original multiple-choice options.
**VISUAL HIERARCHY:** Correct option B is the terminal focal point, pulsing green.
**ATTENTION MANAGEMENT:** Both stack lines ("G-1" and "1-2") remain visible and unfaded through this final phase.
**MOTION NOTES:** `correctPulse` lands right on the spoken "option B" for maximum sync payoff.
**CONTINUITY FROM PREVIOUS SCENE:** The stack column's "1" circle is still settling from its morph as the connector to "2" begins growing, keeping the left column's build feeling continuous through to the final reveal.

## PART 3: Asset List Required

- `illustration/train-1.svg` - shorter flat 2D train (existing, reused)
- `illustration/train-2.svg` - longer flat 2D train (existing, reused)
- `illustration/pole.svg` - simple vertical pole icon (existing, reused)
- No new custom assets; all cards/chips/options are CSS components from `design-system.css`.

## PART 4: Animation Complexity Notes

- Two trains must move at **identical pixel-per-second speed** in Scene 2 - only train length (SVG width) varies, producing the differing 12s/18s crossing times.
- Two stack connector lines this video ("G"-"1" and "1"-"2"), both via `apt.setStackLine`, none hand-guessed.
- Step 1 card is unusually long-held (~38s) because the script derives the formula AND both per-train speed equations in one continuous narration block. No new helpers required.
- Timings in this file are synced to the actual transcript.json (audio duration 97.8s), replacing an earlier draft mistakenly built against a shorter (86.08s) transcript run.

## PART 5: Master Timeline Overview

```
0.0    QuestionCard heroEnterLowered begins (RISE_TIME 3.6)
0.8    SerialNum badge pops
4.5    Both poles fade in
4.5    Train 1 crosses pole (6.1s) -> ends 10.6
10.6   "12s" chip fades in
10.8   Train 2 crosses pole (6.6s, same px/s, longer) -> ends 17.4
17.4   "18s" chip fades in
20.8   "L1" bracket fades in
22.14  "L2" bracket fades in
22.5-25.4  ambient bob on both poles
25.52  pinFlow: question + illustration -> pinned slots (0.8s)
26.3   Given card enters (restates 12s/18s/same speed)
36.3   Given -> stack "G" morph (0.8s)
37.3   Step 1 card enters (formula + Speed1=L1/12 + Speed2=L2/18 + equal)
37.85  Formula "Speed = Length/Time" reveals
48.60  Speed1 = L1/12 reveals
58.65  Speed2 = L2/18 reveals
67.50  L1/12 = L2/18 reveals (.ans)
74.5   Step 1 -> stack "1" morph (0.8s) + line G-1 grows
75.5   Step 2 card enters (L1/L2 = 12/18 -> 2/3)
85.86  Final "2/3" reveals
88.0   emphasize on final "2/3"
88.54  Step 2 -> stack "2" morph (0.8s) + line 1-2 grows
89.3   illustration fades out, question recenters
90.3   options-reveal fades in
90.9   options stagger in (A/B/C/D)
95.3   Option B correctPulse
96.3   End fade begins (1.4s)
97.8   Voiceover ends
```

Total duration: 97.8s (voiceover-driven).
