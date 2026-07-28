# Storyboard - Trains, Streams and Boats Q30

Question: A 210 m train passes a cyclist moving in the same direction at 6 km/h in 14 seconds. Find the train speed.
Options: A) 52.8 km/h  B) 60 km/h (correct)  C) 67.2 km/h  D) 74.4 km/h
Voiceover duration: 95.46s

---

## PART 1: Narration Beat Analysis

| Beat | Time | Narration | Educational purpose | Attention focus | Visual objective |
|---|---|---|---|---|---|
| 1 | 0.10-4.36 | "welcome back again... one more problem" | Warm open | Center screen | Question card entrance |
| 2 | 4.92-16.62 | Reads full question (210 m train, cyclist, same direction, 6 km/h, 14 s) | Establish problem | Question text + illustration | Train + cyclist illustration builds, moves same direction |
| 3 | 17.10-29.26 | States given values, defines T | Set up known data | Left stack forming | Given card enters center after pin |
| 4 | 29.78-30.78 | "what is our approach" | Transition cue | Center | Brief hold, no new card |
| 5 | 31.20-45.32 | Same-direction insight -> relative speed = T - 6 | Core concept + Step 1 equation | Step 1 card | cardEnter, textReveal |
| 6 | 45.70-66.98 | Cyclist as point, distance = train length, relative speed = 210/14 = 15 m/s | Step 2 computation | Step 2 card | cardEnter, textReveal |
| 7 | 66.98-76.40 | Convert units: 15 x 3.6 = 54 km/h | Step 3 conversion | Step 3 card | cardEnter, textReveal |
| 8 | 76.40-88.00 | Substitute, solve: T - 6 = 54 -> T = 60 km/h | Step 4 solve | Step 4 card | cardEnter, textReveal |
| 9 | 88.74-95.46 | "speed of train is 60 km/h, correct option is B" | Reveal answer | Options grid | fadeIn, stagger, correctPulse |

---

## PART 2: Scene-by-Scene Storyboard

### Scene 1 - Question Intro
- TIMESTAMP: 0.0-0.7
- VOICEOVER: "So welcome back again, it's time to solve one more problem."
- VISUAL OBJECTIVE: Establish clean opening frame.
- SCREEN LAYOUT: Background dotted-grid + bottomStrip + topic-name + logo present from t=0. Question card centered, empty stage otherwise.
- ON-SCREEN ELEMENTS: `#q-full-card` (hidden until enter).
- ANIMATION DETAILS: `apt.questionEnter(tl, "#q-full-card", 0.3)` - fades + scales in with `back.out(1.4)`.
- CAMERA MOVEMENT: None (static frame).
- TRANSITIONS: None yet.
- EDUCATIONAL PURPOSE: Orient viewer before question text appears.
- VISUAL HIERARCHY: Question card is sole focal point.
- ATTENTION MANAGEMENT: Nothing else on screen to compete.
- MOTION NOTES: `apt.serialEnter(tl, "#serial-num", 0.8)` pops badge with rotation right after.
- CONTINUITY FROM PREVIOUS SCENE: First scene of video, no prior motion to continue.

### Scene 2 - Question Reading + Illustration Build
- TIMESTAMP: 4.92-16.62
- VOICEOVER: "A 210-meter train passes a cyclist moving in the same direction at six kilometers per hour in 14 seconds. We need to find the speed of the train."
- VISUAL OBJECTIVE: Show train and cyclist both moving the same direction, train behind catching up.
- SCREEN LAYOUT: Question card top, illustration area center-lower per `template.html` illustration slot.
- ON-SCREEN ELEMENTS: `#illustration` containing a flat 2D blue train icon (left, behind) and a small cyclist icon (ahead, same direction) on a minimal road line.
- ANIMATION DETAILS: Train and cyclist icons fade/slide in from left at ~4.92-6.42 (train first, larger; cyclist second, smaller, positioned ahead). From 6.8-16.62 both icons translate rightward at different rates (train faster) via a simple GSAP `x` tween on each, train visibly gaining ground on cyclist to sell "catching up" - no numeric labels yet, this is pure visual setup.
- CAMERA MOVEMENT: Static frame, motion is within the illustration only.
- TRANSITIONS: None (continuous build).
- EDUCATIONAL PURPOSE: Pre-load the "same direction, train catching up" intuition before the relative-speed math arrives.
- VISUAL HIERARCHY: Train + cyclist illustration primary, question card secondary (already settled).
- ATTENTION MANAGEMENT: Only two moving icons on otherwise calm background.
- MOTION NOTES: Keep train-cyclist gap closing gradually across the full 4.92-16.62 window so the visual finishes near-catch-up right as narration ends.
- CONTINUITY FROM PREVIOUS SCENE: Question card is already at rest from Scene 1's `questionEnter`; illustration builds into the empty space below it without disturbing the card.

### Scene 3 - Pin to Phase 2
- TIMESTAMP: PIN_TIME = 16.7
- VOICEOVER: (tail end of "...find the speed of the train.")
- VISUAL OBJECTIVE: Compress question + illustration into pinned header slot to make room for solution cards.
- SCREEN LAYOUT: `#q-pinned` and `#illus-pinned` slots per `template.html`.
- ON-SCREEN ELEMENTS: Same question card + train/cyclist illustration, now migrating.
- ANIMATION DETAILS: `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 16.7)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 16.7)` - real glide, 0.8s, `power2.inOut`.
- CAMERA MOVEMENT: None.
- TRANSITIONS: pinFlow glide is the transition.
- EDUCATIONAL PURPOSE: Keep question visible while making room for stepwise solution.
- VISUAL HIERARCHY: Momentary - pinned slot is the new anchor point going forward.
- ATTENTION MANAGEMENT: Single glide motion, nothing else animates simultaneously.
- MOTION NOTES: Train/cyclist illustration keeps its relative gap (mid-catch-up) as it shrinks into the pinned icon - no reset.
- CONTINUITY FROM PREVIOUS SCENE: Continues directly from Scene 2's rightward icon motion - the glide picks up from wherever the icons landed at 16.7, not a fresh position.

### Scene 4 - Given Card
- TIMESTAMP: GIVEN_TIME = 17.10 (own timestamp, separate from PIN_TIME)
- VOICEOVER: "Given length of train equals 210 meters, cyclist speed equals six kilometers per hour, time equals 14 seconds. Let the speed of the train be t kilometers per hour."
- VISUAL OBJECTIVE: Present the three known values plus the unknown T.
- SCREEN LAYOUT: `#card-given .solution-card` centered per template.
- ON-SCREEN ELEMENTS: Chip "Given"; `.math` lines: "Length of train = <span class='hi'>210 m</span>", "Cyclist Speed = <span class='hi'>6 km/h</span>", "Time = <span class='hi'>14 s</span>", "Let Train Speed = <span class='hi'>T</span> km/h".
- ANIMATION DETAILS: `apt.cardEnter(tl, "#card-given .solution-card", 17.10)`; `apt.textReveal(tl, "#card-given .math")` line-by-line synced to the four value phrases (17.10, 20.64, 24.06, 25.80 from transcript).
- CAMERA MOVEMENT: None.
- TRANSITIONS: cardEnter pop, `back.out(1.4)`.
- EDUCATIONAL PURPOSE: Ground the solve in concrete known quantities before any formula.
- VISUAL HIERARCHY: Given card is sole focal point; pinned question/illustration recede visually (smaller, top).
- ATTENTION MANAGEMENT: One card, sequential line reveal keeps pace with narration.
- MOTION NOTES: Ambient loop not needed here - card is actively narrated line by line for the full window.
- CONTINUITY FROM PREVIOUS SCENE: Given card fades in at the exact pinned layout Scene 3 just settled into; no idle gap between pin completing and Given entering.

### Scene 5 - Given -> Stack, Step 1 Enter
- TIMESTAMP: 29.5 (morph) / 31.20 (Step 1 card enter)
- VOICEOVER: "Now, what is our approach? The important words are same direction. When two objects move in the same direction, we never use the actual speed. We use relative speed because the train is only catching up with the cyclist. So relative speed equals train speed minus cyclist speed, equals t minus six."
- VISUAL OBJECTIVE: Collapse Given into the stack, introduce relative-speed concept and its equation.
- SCREEN LAYOUT: Given card morphs to top of left stack column; Step 1 solution card takes center.
- ON-SCREEN ELEMENTS: `#stack-given .stack-card` (step-circle "G"); `#card-step1 .solution-card` chip "Step 1", `.math`: "Relative Speed = Train Speed <span class='hi'>-</span> Cyclist Speed = <span class='ans'>T - 6</span>".
- ANIMATION DETAILS: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 29.5)`; ~1s breathing gap; `apt.cardEnter(tl, "#card-step1 .solution-card", 31.20)`; `apt.textReveal(tl, "#card-step1 .math")` timed to 40.60 (equation stated).
- CAMERA MOVEMENT: None.
- TRANSITIONS: 0.8s morph, `power2.inOut`.
- EDUCATIONAL PURPOSE: Teach the "same direction -> relative speed" rule before showing the raw formula.
- VISUAL HIERARCHY: Step 1 card center-focus; Given stack card small, secondary, in left column.
- ATTENTION MANAGEMENT: Concept narration (31.20-40.24) plays while card is already visible and settled, so viewer reads while listening; equation text (`T - 6`) reveals right as it's spoken at 40.60.
- MOTION NOTES: `apt.ambientLoop` not needed - narration keeps pace with visible content throughout.
- CONTINUITY FROM PREVIOUS SCENE: The Given card's morph begins from the exact centered position it held through Scene 4's line reveals; Step 1 enters into the same center slot the moment the morph vacates it.

### Scene 6 - Step 1 -> Stack, Step 2 Enter
- TIMESTAMP: 37.5 morph is too early here given Step1 narration runs to 45.32; adjusted morph = 45.5, Step 2 enter = 45.70
- VOICEOVER: "Now we need the value of this relative speed. When a train passes a cyclist, the cyclist is treated like a point, so the train covers only its own length. Hence, relative speed equals distance divided by time, where distance covered is length of the train. So relative speed equals 210 divided by 14, equals 15 meters per second."
- VISUAL OBJECTIVE: Explain why train's own length is the relevant distance, then compute 15 m/s.
- SCREEN LAYOUT: Step 1 collapses into stack (circle "1"); Step 2 card center.
- ON-SCREEN ELEMENTS: `#stack-step1 .stack-card`; `#line-g-1` connector between G and 1; `#card-step2 .solution-card` chip "Step 2", `.math`: "Relative Speed = Distance <span class='frac'><span class='top hi'>210</span><span class='bot hi'>14</span></span> = <span class='ans'>15 m/s</span>".
- ANIMATION DETAILS: `apt.setStackLine("#line-g-1", "#stack-given .step-circle", "#stack-step1 .step-circle")` called once before timeline build; `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 45.5)`; `apt.stackLineGrow(tl, "#line-g-1", 45.5)`; `apt.cardEnter(tl, "#card-step2 .solution-card", 45.70)`; `apt.textReveal(tl, "#card-step2 .math")` timed to 61.08 (distance/time phrase) and 65.52 (result "15").
- CAMERA MOVEMENT: None.
- TRANSITIONS: 0.8s morph.
- EDUCATIONAL PURPOSE: Justify why distance = train's own length (cyclist as a point), then land the numeric result.
- VISUAL HIERARCHY: Step 2 card center; left stack now shows two collapsed cards + growing connector line.
- ATTENTION MANAGEMENT: Reasoning phrase (45.70-54.72) plays over the settled card before the formula text reveals at 61.08, keeping visual and audio paced together over this longer beat.
- MOTION NOTES: `apt.emphasize` optional on the `210`/`14` fraction once "15 meters per second" lands at 65.52, to underline the computed value.
- CONTINUITY FROM PREVIOUS SCENE: Step 1's equation card is still holding its final `T - 6` state as this morph begins; the outgoing card's `card-content` crossfade starts exactly where Scene 5 left it, no held gap.

### Scene 7 - Step 2 -> Stack, Step 3 Enter (Unit Conversion)
- TIMESTAMP: morph = 66.98, Step 3 enter = 67.2
- VOICEOVER: "But our variable t is in kilometers per hour, so first convert the relative speed. 15 times 3.6 equals 54 kilometer per hour."
- VISUAL OBJECTIVE: Convert 15 m/s to 54 km/h.
- SCREEN LAYOUT: Step 2 collapses to stack (circle "2"); Step 3 card center.
- ON-SCREEN ELEMENTS: `#stack-step2 .stack-card`; `#line-1-2` connector; `#card-step3 .solution-card` chip "Step 3", `.math`: "15 <span class='hi'>x 3.6</span> = <span class='ans'>54 km/h</span>".
- ANIMATION DETAILS: `apt.setStackLine("#line-1-2", "#stack-step1 .step-circle", "#stack-step2 .step-circle")`; `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 66.98)`; `apt.stackLineGrow(tl, "#line-1-2", 66.98)`; `apt.cardEnter(tl, "#card-step3 .solution-card", 67.2)`; `apt.textReveal(tl, "#card-step3 .math")` timed to 72.68 ("15") and 74.02 ("equals 54").
- CAMERA MOVEMENT: None.
- TRANSITIONS: 0.8s morph.
- EDUCATIONAL PURPOSE: Flag the unit mismatch explicitly before the conversion, matching the "but our variable T is in km/h" narration beat.
- VISUAL HIERARCHY: Step 3 card center; stack column now three-high.
- ATTENTION MANAGEMENT: Short beat (67.2-76.4), single focused conversion line.
- MOTION NOTES: No ambient loop needed - short, fully-narrated card.
- CONTINUITY FROM PREVIOUS SCENE: Step 2's "15 m/s" result is still on screen as the "But our variable t is..." line begins; the morph starts precisely as that unit-mismatch phrase resolves into "so first convert."

### Scene 8 - Step 3 -> Stack, Step 4 Enter (Solve)
- TIMESTAMP: morph = 76.4, Step 4 enter = 76.6
- VOICEOVER: "Now substitute this into our equation. Relative speed equals t minus six, so t minus six equals 54. Adding six on both sides, t equals 60 kilometer per hour."
- VISUAL OBJECTIVE: Substitute and solve for T.
- SCREEN LAYOUT: Step 3 collapses to stack (circle "3"); Step 4 card center.
- ON-SCREEN ELEMENTS: `#stack-step3 .stack-card`; `#line-2-3` connector; `#card-step4 .solution-card` chip "Step 4", `.math`: "T - 6 = <span class='hi'>54</span> <br> T = <span class='ans'>60 km/h</span>".
- ANIMATION DETAILS: `apt.setStackLine("#line-2-3", "#stack-step2 .step-circle", "#stack-step3 .step-circle")`; `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 76.4)`; `apt.stackLineGrow(tl, "#line-2-3", 76.4)`; `apt.cardEnter(tl, "#card-step4 .solution-card", 76.6)`; `apt.textReveal(tl, "#card-step4 .math")` timed to 81.64 ("t minus six equals 54") and 84.36 ("t equals 60").
- CAMERA MOVEMENT: None.
- TRANSITIONS: 0.8s morph.
- EDUCATIONAL PURPOSE: Final algebraic solve, direct payoff of Steps 1-3.
- VISUAL HIERARCHY: Step 4 card center; full 4-card stack (G,1,2,3) visible in left column.
- ATTENTION MANAGEMENT: `apt.correctPulse`-style emphasis reserved for options grid, not here - use `apt.emphasize(tl, ".ans", 84.36)` on the "60 km/h" result instead.
- MOTION NOTES: This is the last active center card before the options reveal - hold it on screen through the "Hence..." recap rather than morphing it to stack, since no Step 5 follows.
- CONTINUITY FROM PREVIOUS SCENE: Step 3's "54 km/h" result is still visibly resting center-stage as "Now substitute this into our equation" begins; the morph timed to 76.4 lands exactly as that transition phrase completes.

### Scene 9 - Options Reveal
- TIMESTAMP: 88.7-95.46
- VOICEOVER: "Hence, the speed of the train is 60 kilometer per hour. So the correct option is option B."
- VISUAL OBJECTIVE: Reveal all four options, highlight correct answer.
- SCREEN LAYOUT: Step 4 card recedes/fades slightly upward or stays pinned per `apt.recenterForOptions`; options grid (2x2) appears below.
- ON-SCREEN ELEMENTS: `#options-reveal` with four `.opt-btn` (A 52.8, B 60 [correct], C 67.2, D 74.4).
- ANIMATION DETAILS: `apt.fadeOut(tl, "#illus-pinned", 88.5)`; `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 88.5)`; `apt.fadeIn(tl, "#options-reveal", 88.7)`; `apt.optionsStagger(tl, ".opt-btn", 89.3)`; `apt.correctPulse(tl, ".opt-btn.correct", 91.14)` (timed to "60 kilometer per hour").
- CAMERA MOVEMENT: None.
- TRANSITIONS: Staggered fade/pop, `power3.out`.
- EDUCATIONAL PURPOSE: Confirm the derived answer against the original options.
- VISUAL HIERARCHY: Options grid becomes primary; Step 4's "T = 60 km/h" result still visible above for direct visual match to Option B.
- ATTENTION MANAGEMENT: correctPulse draws the eye to B exactly as "option B" is spoken.
- MOTION NOTES: All elements remain visible and static after 91.14 through the 95.46 end.
- CONTINUITY FROM PREVIOUS SCENE: Step 4's card is still center-stage holding "T = 60 km/h" as this scene opens; the pinned illustration fades out and the grid fades in underneath the still-resting solve card rather than replacing it abruptly.

---

## PART 3: Asset List Required

- Illustration (per-question, in `illustration/`): flat 2D blue train icon (SVG), small cyclist icon (SVG), minimal road line (CSS or inline SVG). Both reused from Scene 2 through the pinned slot; no new assets needed after Scene 3.
- No other custom assets - all cards/chips/options/fractions/step-circles/stack-lines come from `design-system.css` + `template.html` components.

## PART 4: Animation Complexity Notes

- Longest single beat is Scene 6 (45.70-66.98, ~21s) - covers reasoning + formula + result for Step 2. Mitigated with a mid-beat `textReveal` split (reasoning visible while spoken, then formula/result lines revealing at 61.08 and 65.52) so the card doesn't sit fully-revealed and idle.
- Scene 8 deliberately does NOT morph Step 4 to the stack before options reveal (no Step 5 follows) - it stays as the active center card straight into Scene 9, per the "no premature exits" rule.
- Four stack cards + three connector lines (G-1, 1-2, 2-3) - all connector geometry via `apt.setStackLine`, none hand-guessed.

## PART 5: Master Timeline Overview

```
0.0    Background + bottomStrip + topic + logo
0.3    apt.questionEnter #q-full-card
0.8    apt.serialEnter #serial-num
4.92   Illustration builds (train + cyclist, same direction)
16.7   PIN_TIME - apt.pinFlow question + illustration -> pinned slot
17.10  GIVEN_TIME - Given card enters, textReveal x4 lines
29.5   Given -> stack (morphToStack)
31.20  Step 1 card enters ("Relative Speed = T - 6")
45.5   Step 1 -> stack (morphToStack) + line G-1 grows
45.70  Step 2 card enters ("210/14 = 15 m/s")
66.98  Step 2 -> stack (morphToStack) + line 1-2 grows
67.20  Step 3 card enters ("15 x 3.6 = 54 km/h")
76.4   Step 3 -> stack (morphToStack) + line 2-3 grows
76.60  Step 4 card enters ("T - 6 = 54 -> T = 60 km/h")
88.50  Illustration pinned fadeOut, question recenters
88.70  Options grid fadeIn
89.30  Options stagger reveal
91.14  Correct option B pulse
95.46  End - all elements remain visible
```
