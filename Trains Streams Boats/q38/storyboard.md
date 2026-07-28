# Storyboard - Trains, Streams and Boats Q38

## PART 1: Narration Beat Analysis

| Beat | Time | Narration | Educational Purpose | Attention Focus | Visual Objective |
|------|------|-----------|---------------------|------------------|-------------------|
| 1 | 0.12-3.64 | "welcome back again, it's time to solve one more problem" | Hook / intro | Question card | Question card enters full screen |
| 2 | 4.10-15.64 | "two trains have the same speed... Train one crosses a pole in 12 seconds... train two in 18 seconds... find the ratio of their lengths" | Set up the scenario | Illustration: two trains vs a pole | Train 1 crosses pole with "12s" label, Train 2 crosses pole with "18s" label, same speed shown |
| 3 | 16.10-21.74 | "Let the speed of each train be V... lengths be L1 and L2" | Define variables | Illustration labels | Speed value V appears near both trains, L1/L2 length labels appear |
| 4 | 22.16-37.14 | "when a train crosses a pole, it covers only its own length... distance = length, so Time = Length / Speed" | Core concept + formula | Given card | Given card enters: formula Time = Length / Speed |
| 5 | 37.80-46.90 | "since both trains have the same speed... L1/L2 = T1/T2" | Derive proportional relationship | Step 1 card | Step 1: ratio formula L1/L2 = T1/T2 |
| 6 | 47.34-54.26 | "why? because length is directly proportional to time when speed is same" | Justify the relation | Step 1 card (same) | Emphasis on the proportionality reasoning within Step 1 |
| 7 | 54.70-1:06.04 | "put the given values... L1/L2 = 12/18... simplify by dividing by 6... L1/L2 = 2/3" | Compute the answer | Step 2 card | Step 2: substitution 12/18 -> simplify -> 2/3 |
| 8 | 1:06.54-1:16.16 | "ratio is 2 is to 3, correct option is B" | Reveal answer | Options grid | Options reveal, B highlighted green |

## PART 2: Scene-by-Scene Storyboard

### SCENE 1 - Question Intro
**TIMESTAMP:** 0.0 - 3.6s
**VOICEOVER:** "So welcome back again, it's time to solve one more problem."
**VISUAL OBJECTIVE:** Establish the question on screen.
**SCREEN LAYOUT:** Full QuestionCard centered per `template.html` coordinates.
**ON-SCREEN ELEMENTS:** `#q-full-card` with question text "Two trains with the same speed cross a pole in 12 seconds and 18 seconds respectively. What is the ratio of their lengths?"; SerialNum badge top-left (fixed "Q"); topic name bottom-left "Trains, Streams and Boats"; logo bottom-right.
**ANIMATION DETAILS:** `apt.questionEnter` at 0.3s (0.7s, back.out(1.4)). `apt.serialEnter` at 0.8s (0.55s, back.out(2)).
**CAMERA MOVEMENT:** Static.
**TRANSITIONS:** None yet, card holds.
**EDUCATIONAL PURPOSE:** Anchor viewer to exact problem statement before any visuals move.
**VISUAL HIERARCHY:** Question text primary, badge secondary.
**ATTENTION MANAGEMENT:** No competing motion during the intro line.
**MOTION NOTES:** Card enters with soft scale + fade, single focal point.
**CONTINUITY FROM PREVIOUS SCENE:** Opening scene, no prior state.

### SCENE 2 - Illustration Build: Two Trains, Same Speed
**TIMESTAMP:** 3.6 - 16.1s
**VOICEOVER:** "Now in this problem, we are given that two trains have the same speed. Train one crosses a pole in 12 seconds, and train two crosses a pole in 18 seconds. The question is asking us to find the ratio of their lengths."
**VISUAL OBJECTIVE:** Show both trains passing a fixed pole at the same speed but taking different times, visually implying different lengths.
**SCREEN LAYOUT:** Illustration area below the question card, per `template.html` illustration slot.
**ON-SCREEN ELEMENTS:** A single vertical pole icon centered in the illustration lane. Two flat 2D trains (`illustration/train-1.svg`, `illustration/train-2.svg`) stacked in two horizontal lanes, each moving left to right past the pole. A speed tag "v" appears identically above both trains. A timer chip "12s" appears above Train 1's lane once it finishes crossing the pole; a timer chip "18s" appears above Train 2's lane once it finishes crossing.
**ANIMATION DETAILS:** At 3.8s the pole fades in at its fixed x-position (`apt.fadeIn`, 0.4s). At 5.5s Train 1 slides in from the left edge and travels at constant speed across the pole; the "12s" chip fades in the instant its tail clears the pole (~9.9s). At 10.3s Train 2 slides in from the left edge in the lower lane at the identical pixel-per-second speed as Train 1 but is drawn visibly longer, so it takes longer to fully clear the pole; its "18s" chip fades in the instant its tail clears the pole (~12.7s). The "v" speed tag fades in above both trains simultaneously at 6.0s using `apt.fadeIn`.
**CAMERA MOVEMENT:** Static frame; only the trains translate horizontally.
**TRANSITIONS:** Elements accumulate (pole -> Train 1 -> chip -> Train 2 -> chip), no hard cuts.
**EDUCATIONAL PURPOSE:** Let the viewer visually infer "same speed, different crossing time -> different length" before the math is shown.
**VISUAL HIERARCHY:** Trains and pole primary; timer chips secondary but bright (`--primary`).
**ATTENTION MANAGEMENT:** One train motion at a time, chips appear only after their train fully passes to avoid clutter.
**MOTION NOTES:** Constant linear velocity for both trains (no easing mid-travel) so the differing crossing time reads purely from train length, matching the concept being taught.
**CONTINUITY FROM PREVIOUS SCENE:** The question card from Scene 1 remains pinned at the top of frame (unscaled, still in its Scene 1 position) while the illustration builds beneath it.

### SCENE 3 - Variable Labels
**TIMESTAMP:** 16.1 - 21.7s
**VOICEOVER:** "Let the speed of each train be V meter per second. Let the lengths of the two trains be L1 and L2."
**VISUAL OBJECTIVE:** Formalize the visual into variables.
**SCREEN LAYOUT:** Same illustration lane, both trains now static/parked at rest past the pole.
**ON-SCREEN ELEMENTS:** "v" label already visible from Scene 2 gets a brief `apt.emphasize` pulse. Length-span brackets fade in beneath Train 1 labeled "L1" and beneath Train 2 labeled "L2".
**ANIMATION DETAILS:** `apt.emphasize` on the "v" tag at 16.3s (0.3s yoyo). `apt.fadeIn` on "L1" bracket at 17.5s and "L2" bracket at 19.0s (0.4s each).
**CAMERA MOVEMENT:** Static.
**TRANSITIONS:** Simple fades, no morphs (still Phase 1).
**EDUCATIONAL PURPOSE:** Bridge from visual scenario to algebraic variables used in the solution.
**VISUAL HIERARCHY:** L1/L2 brackets equal weight, directly under their respective train.
**ATTENTION MANAGEMENT:** Sequential fade-in (L1 then L2) so the eye tracks top-to-bottom.
**MOTION NOTES:** No new movement, purely label overlays on the settled scene.
**CONTINUITY FROM PREVIOUS SCENE:** Both trains remain exactly where Scene 2 left them (parked past the pole); nothing repositions.

### SCENE 4 - Pin to Phase 2
**TIMESTAMP:** 21.7 - 22.5s
**VOICEOVER:** "Now, the important concept here is" (leading into next line)
**VISUAL OBJECTIVE:** Transition the full-screen setup into the compact pinned layout so solution cards can take the center stage.
**SCREEN LAYOUT:** Question card and illustration glide from their Phase 1 positions to the pinned slots (`#q-pinned`, `#illus-pinned`) per `template.html`.
**ON-SCREEN ELEMENTS:** `#q-full-card` -> `#q-pinned`; illustration (both trains + pole + labels) -> `#illus-pinned` (scaled down).
**ANIMATION DETAILS:** `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 21.7)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 21.7)`, both 0.8s, `power2.inOut`.
**CAMERA MOVEMENT:** Coordinated glide of both elements toward their pinned coordinates.
**TRANSITIONS:** Real glide, not fade swap.
**EDUCATIONAL PURPOSE:** Keep the question and visual scenario visible as a persistent reference while the math builds below.
**VISUAL HIERARCHY:** Pinned elements shrink to secondary size, clearing center stage.
**ATTENTION MANAGEMENT:** Single coordinated motion, no new content introduced mid-glide.
**MOTION NOTES:** Both pinFlow calls share the same start time so question and illustration move as one visual unit.
**CONTINUITY FROM PREVIOUS SCENE:** The exact train/pole/label arrangement from Scene 3 is what glides into the pinned slot, unchanged in content, only in position and scale.

### SCENE 5 - Given Card
**TIMESTAMP:** 22.5 - 29.4s (GIVEN_TIME = 22.5s)
**VOICEOVER:** "the important concept here is, when a train crosses a pole, it covers only its own length. There is no platform or another train involved, so the distance covered is simply the length of the train. Hence, we use the formula time equals length of train divided by speed."
**VISUAL OBJECTIVE:** State the core formula the whole solution rests on.
**SCREEN LAYOUT:** `#card-given .solution-card` centered per template.
**ON-SCREEN ELEMENTS:** Chip "Given"; math line: "Time = Length of Train ÷ Speed" rendered with `.frac` component (never a bare ÷ glyph, per house style - use `.frac` numerator "Length of Train", denominator "Speed").
**ANIMATION DETAILS:** `apt.cardEnter(tl, "#card-given .solution-card", 22.5)`. `apt.textReveal(tl, "#card-given .math")` synced word-by-word to transcript timestamps 22.16-37.14.
**CAMERA MOVEMENT:** Static, center focus.
**TRANSITIONS:** Card holds full duration of the concept narration (~14.6s, the longest single beat) before morphing.
**EDUCATIONAL PURPOSE:** Anchor the "pole = own length" insight and the governing formula before any numbers appear.
**VISUAL HIERARCHY:** Formula is the sole focal point; pinned question/illustration remain visible but secondary above.
**ATTENTION MANAGEMENT:** No ambient loop needed here, narration is continuous and long enough to hold attention on the reveal itself.
**MOTION NOTES:** `apt.textReveal` paces the fraction and word reveal to match the slow, explanatory cadence of this line.
**CONTINUITY FROM PREVIOUS SCENE:** The pinned question/illustration are still completing their `pinFlow` settle as this card's `cardEnter` begins at 22.5s, reading as one continuous motion from glide to card arrival.

### SCENE 6 - Given -> Stack, Step 1 Card (Ratio Setup)
**TIMESTAMP:** 30.2 - 38.6s
**VOICEOVER:** "Since both trains have the same speed, this speed will be equal for both. So we can say L1 by L2 equals T1 by T2. Why? Because length is directly proportional to time when the speed remains the same. This is the main idea of the question."
**VISUAL OBJECTIVE:** Derive the key proportional relationship between length and time.
**SCREEN LAYOUT:** Given card morphs into stack circle "G" in the left column; Step 1 solution card takes center.
**ON-SCREEN ELEMENTS:** Stack card "G": "Time = Length ÷ Speed". Step 1 chip "Step 1"; math: `.frac` L1/L2 = `.frac` T1/T2.
**ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 30.2)` (0.8s). `apt.cardEnter(tl, "#card-step1 .solution-card", 31.2)` (~1s breathing gap after morph). `apt.textReveal(tl, "#card-step1 .math")` synced to 37.80-52.62.
**CAMERA MOVEMENT:** Static.
**TRANSITIONS:** Standard 0.8s morph.
**EDUCATIONAL PURPOSE:** Establish that with equal speed, length and time are directly proportional, i.e. the ratio of lengths equals the ratio of times.
**VISUAL HIERARCHY:** Step 1 card primary; Given now compact in stack, still legible.
**ATTENTION MANAGEMENT:** The "Why?" phrase (47.34s) gets a brief `apt.emphasize` on the L1/L2 = T1/T2 line to underline the reasoning beat without introducing new elements.
**MOTION NOTES:** `apt.emphasize(tl, "#card-step1 .ans", 47.34)` (0.3s yoyo) timed to the spoken "Why?".
**CONTINUITY FROM PREVIOUS SCENE:** The Given card's text is still completing its final word-reveal as the morph to stack begins at 30.2s (narration has moved on to "since both trains have the same speed" by then), so the shrink into the stack circle reads as the natural close of that idea.

### SCENE 7 - Step 1 -> Stack, Step 2 Card (Substitution)
**TIMESTAMP:** 54.5 - 1:07.5s
**VOICEOVER:** "Now, let us put the given values, L1 by L2 equals 12 by 18. After simplifying this by dividing both numbers by six, we get L1 by L2 equals two by three."
**VISUAL OBJECTIVE:** Plug in the actual numbers and simplify to the final ratio.
**SCREEN LAYOUT:** Step 1 card morphs into stack circle "1"; Step 2 solution card takes center; `stack-line` connector grows between circles "G" and "1".
**ON-SCREEN ELEMENTS:** Stack card "1": "L1/L2 = T1/T2". Step 2 chip "Step 2"; math builds in sequence: `.frac` L1/L2 = `.frac` 12/18, then an arrow-free second line `.frac` L1/L2 = `.frac` 2/3 with "2/3" highlighted `.hi`/`.ans`.
**ANIMATION DETAILS:** `apt.setStackLine("#line-g-1", "#stack-given .step-circle", "#stack-step1 .step-circle")` called once before timeline build. `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 54.5)` (0.8s). `apt.stackLineGrow(tl, "#line-g-1", 54.5)`. `apt.cardEnter(tl, "#card-step2 .solution-card", 55.5)`. `apt.textReveal(tl, "#card-step2 .math")` synced to 54.70-1:06.04. `apt.emphasize(tl, "#card-step2 .ans", 1:06.54)` on the final "2/3" reveal.
**CAMERA MOVEMENT:** Static.
**TRANSITIONS:** Standard 0.8s morph; connector line grows in sync.
**EDUCATIONAL PURPOSE:** Show the concrete arithmetic (12/18 -> divide by 6 -> 2/3) that turns the abstract relation into the final ratio.
**VISUAL HIERARCHY:** Final "2/3" is the visual climax of the solution, styled `.ans`.
**ATTENTION MANAGEMENT:** Sequential reveal (raw substitution first, simplified result second) mirrors the spoken pacing so no numbers appear before they're spoken.
**MOTION NOTES:** The stack-line between "G" and "1" is the first connector to appear in this video; it must use measured centers via `apt.setStackLine`, never guessed coordinates.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1's L1/L2 = T1/T2 line is still visible mid-morph as Step 2's card begins entering, so the viewer sees the same relation carried forward and then populated with numbers.

### SCENE 8 - Options Reveal
**TIMESTAMP:** 1:07.5 - 1:16.2s (end)
**VOICEOVER:** "So the required ratio of the lengths of the two trains is two is to three. Hence, the correct option is option B."
**VISUAL OBJECTIVE:** Confirm the final answer against the four options.
**SCREEN LAYOUT:** Step 2 card morphs into stack circle "2"; connector line grows between "1" and "2"; pinned illustration fades out and pinned question recenters; options grid (2x2) fades in below.
**ON-SCREEN ELEMENTS:** Options grid: A "3:2", B "2:3", C "4:9", D "1:2" (per `.opt-btn`); Option B carries class `correct`.
**ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 1:07.5)`. `apt.setStackLine("#line-1-2", ...)` called pre-timeline; `apt.stackLineGrow(tl, "#line-1-2", 1:07.5)`. `apt.fadeOut(tl, "#illus-pinned", 1:08.3)`. `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 1:08.3)`. `apt.fadeIn(tl, "#options-reveal", 1:09.0)`. `apt.optionsStagger(tl, ".opt-btn", 1:09.6)` (stagger 0.12s). `apt.correctPulse(tl, ".opt-btn.correct", 1:11.5)` timed just after "option B" is spoken. `apt.resultReveal(tl, "#result-span", 1:14.5)` for a small "Ratio = 2:3" confirmation chip if the template slot is used.
**CAMERA MOVEMENT:** Static; only the recenter shift of the pinned question.
**TRANSITIONS:** Final morph + line grow, then fade-in of the options container.
**EDUCATIONAL PURPOSE:** Close the loop between the derived math answer and the original multiple-choice options.
**VISUAL HIERARCHY:** Correct option B is the terminal focal point, pulsing green.
**ATTENTION MANAGEMENT:** All three stack lines ("G-1" and "1-2") remain visible and unfaded through this final phase, per house rule.
**MOTION NOTES:** `correctPulse` lands right on the spoken "option B" for maximum sync payoff.
**CONTINUITY FROM PREVIOUS SCENE:** The stack column's "1" circle is still settling from its morph as the connector to "2" begins growing, keeping the left column's build feeling continuous through to the final reveal.

## PART 3: Asset List Required

- `illustration/train-1.svg` - shorter flat 2D train (custom, brand palette)
- `illustration/train-2.svg` - longer flat 2D train, same style/palette as train-1
- `illustration/pole.svg` - simple vertical pole icon
- No other custom assets; all cards/chips/options are CSS components from `design-system.css`.

## PART 4: Animation Complexity Notes

- Two trains must move at **identical pixel-per-second speed** in Scene 2 - the only variable is train length (mapped to SVG width), which is what produces the differing 12s/18s crossing times. This is the single hardest animation-fidelity requirement in the video: speed must read as visually identical, or the "same speed" premise is undercut.
- Two stack connector lines this video ("G"-"1" and "1"-"2"), both via `apt.setStackLine`, none hand-guessed.
- No new helpers required; entirely covered by existing `animations.js` API.

## PART 5: Master Timeline Overview

```
0.0   QuestionCard full enters
0.8   SerialNum badge pops
3.8   Pole fades in
5.5   Train 1 crosses pole -> "12s" chip
6.0   "v" speed tag fades in (both trains)
10.3  Train 2 crosses pole (same speed, longer) -> "18s" chip
16.3  "v" tag emphasize pulse
17.5  "L1" bracket fades in
19.0  "L2" bracket fades in
21.7  pinFlow: question + illustration -> pinned slots (0.8s)
22.5  Given card enters (formula Time = Length / Speed)
30.2  Given -> stack "G" morph (0.8s)
31.2  Step 1 card enters (L1/L2 = T1/T2)
47.34 emphasize on Step 1 ratio ("Why?")
54.5  Step 1 -> stack "1" morph (0.8s) + line G-1 grows
55.5  Step 2 card enters (12/18 -> 2/3)
1:06.5 emphasize on final "2/3"
1:07.5 Step 2 -> stack "2" morph (0.8s) + line 1-2 grows
1:08.3 illustration fades out, question recenters
1:09.0 options-reveal fades in
1:09.6 options stagger in (A/B/C/D)
1:11.5 Option B correctPulse
1:14.5 resultReveal ("2:3") - optional
1:16.2 End, all elements remain visible
```

Total duration: 76.16s (voiceover-driven).
