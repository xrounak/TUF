# Q20 Storyboard — Train Passes a Man (Opposite Direction)

Question: A 240 m train passes a man walking in the opposite direction at 6 km/h in 12 seconds. Find the train's speed.
Options: A 58.08 km/h · B 73.92 km/h · C 81.84 km/h · D 66 km/h (correct)
Voiceover duration: 115.59s

## PART 1 — Narration Beat Analysis

| Beat | Time | Text | Purpose | Visual objective |
|---|---|---|---|---|
| 1 | 0.10–5.28 | Intro greeting | Hook | Question card rises into place |
| 2 | 5.86–20.70 | States train=240m, passes man walking 6km/h opposite direction, takes 12s | Setup | Train + man build in, converge, cross |
| 3 | 21.42–23.94 | "find the speed of the train" | State the ask | Target tag pops |
| 4 | 24.52–45.08 | Opposite direction ⇒ speeds add (concept) | Teach the rule | Concept pill: "Opposite Direction → Add Speeds" |
| 5 | 45.54–60.78 | Need relative speed first; distance covered = train length | Bridge to Step 1 | Pin to top, Given card recaps values |
| 6 | 61.20–69.16 | Step 1: Relative Speed = Distance/Time = 240/12 = 20 m/s | Solve relative speed | Step 1 card |
| 7 | 69.98–82.48 | Step 2: convert man's speed 6km/h → 5/3 m/s | Unit conversion | Step 2 card |
| 8 | 82.54–96.24 | Step 3: 20 = Train + 5/3 ⇒ Train = 55/3 m/s | Solve train speed (m/s) | Step 3 card |
| 9 | 96.82–107.86 | Step 4: 55/3 × 18/5 = 66 km/h | Convert to km/h | Step 4 card |
| 10 | 108.70–115.59 | Confirm answer, Option D | Reveal | Options grid, correct pulse on D |

## PART 2 — Scene-by-Scene Storyboard

### Scene 1 (0–5.28s) — Question Reveal
VOICEOVER: "So welcome back again. It's time to solve one more problem."
VISUAL OBJECTIVE: Establish the question.
SCREEN LAYOUT: Centered `q-card` (hero, lowered start), serial badge top-left.
ON-SCREEN ELEMENTS: `#q-full-card` (full question text, numbers/key terms in blue), `#serial-num` ("Q").
ANIMATION DETAILS: `apt.heroEnterLowered(tl, "#q-full-card", 180, 5.28)` — starts lowered, rises at 5.28s. Serial badge tandem tween (scale/rotation pop at 0.8s, rises with card at 5.28s).
CAMERA MOVEMENT: None (static frame, motion is internal).
TRANSITIONS: n/a (opening).
EDUCATIONAL PURPOSE: Anchor the problem before any solving starts.
VISUAL HIERARCHY: Question card dominant, badge secondary.
ATTENTION MANAGEMENT: Single focal element.
MOTION NOTES: `back.out(1.4)` entrance, `power2.inOut` rise.
CONTINUITY FROM PREVIOUS SCENE: n/a — first scene.

### Scene 2 (5.86–20.70s) — Train & Man Build In, Cross Paths
VOICEOVER: "...a train is 240 meters long. It passes a man who is walking at 6 kilometers per hour in the opposite direction. The train takes twelve seconds to completely pass the man."
VISUAL OBJECTIVE: Establish the two moving bodies and that they meet head-on.
SCREEN LAYOUT: `#illustration` centered under the question card (left:50%, top:430px, 1400×320), a dashed ground line (`#rail`) running its width.
ON-SCREEN ELEMENTS: `#train-a-unit` (train.svg, left edge) with `#train-length-badge` ("Length = 240 m") above it; `#man-unit` (runner.svg mirrored to face left, right edge) with `#man-speed-badge` ("6 km/hr") above it; `#opp-arrows` (chevron-right / chevron-left) between them.
ANIMATION DETAILS:
- `apt.roadSweep(tl, "#rail", 5.86)`
- `apt.cardEnter(tl, "#train-a-unit", 6.40)`
- `apt.cardEnter(tl, "#train-length-badge", 9.32)` (word "two" of "two hundred forty")
- `apt.cardEnter(tl, "#man-unit", 11.38)` ("It passes a man")
- `apt.cardEnter(tl, "#man-speed-badge", 13.60)` (word "six")
- `apt.cardEnter(tl, "#opp-arrows", 15.88)` (word "opposite")
- Crossing tween: `tl.to("#train-a-unit", {x:520, duration:3.16, ease:"power2.inOut"}, 17.54)` and `tl.to("#man-unit", {x:-520, duration:3.16, ease:"power2.inOut"}, 17.54)` — the two units visibly converge and pass across the 12-second narration window.
- `apt.cardEnter(tl, "#time-tag", 18.42)` (word "twelve") — small pill "12 s" at the meeting point, fades out via `apt.fadeOut(tl, "#time-tag", 20.70, 0.35)`.
CAMERA MOVEMENT: None — motion is entirely within the illustration.
TRANSITIONS: Direct continuation from Scene 1 (question already settled).
EDUCATIONAL PURPOSE: Make "opposite direction" and "12 seconds to pass" concrete and visible, not abstract.
VISUAL HIERARCHY: Train and man equally weighted; badges secondary; chevrons small accent.
ATTENTION MANAGEMENT: Sequential reveal (train → badge → man → badge → chevrons → crossing) keeps one new element at a time.
MOTION NOTES: All entrances `back.out(1.4)` per `cardEnter`; crossing tween is a plain linear-feeling `power2.inOut` slide, not a bounce.
CONTINUITY FROM PREVIOUS SCENE: The question card is already at rest from Scene 1's rise; this scene's illustration builds directly beneath it without disturbing the card.

### Scene 3 (21.42–23.94s) — The Ask
VOICEOVER: "The question is asking us to find the speed of the train."
VISUAL OBJECTIVE: Spotlight what's unknown.
SCREEN LAYOUT: Same illustration, now with train and man past each other (crossed), a target tag above center.
ON-SCREEN ELEMENTS: `#target-tag` ("Find: Train Speed?").
ANIMATION DETAILS: `apt.cardEnter(tl, "#target-tag", 22.72)` (word "find").
CAMERA MOVEMENT: None.
TRANSITIONS: Continuation — crossing tween from Scene 2 has just settled.
EDUCATIONAL PURPOSE: Frames the unknown before the rule is taught.
VISUAL HIERARCHY: Target tag is the new focal point, primary-colored pill.
ATTENTION MANAGEMENT: Only one new element added.
MOTION NOTES: `back.out(1.4)` pop-in.
CONTINUITY FROM PREVIOUS SCENE: Train and man are still in their crossed (post-pass) positions from Scene 2's convergence tween; nothing resets.

### Scene 4 (24.52–45.08s) — Opposite Direction ⇒ Add Speeds
VOICEOVER: "...important words here are opposite direction. What does this mean? It means the train and the man are moving towards each other, so their speeds do not cancel. Instead, they get added... When two objects move in opposite directions, relative speed equals sum of their speeds."
VISUAL OBJECTIVE: Teach the underlying rule.
SCREEN LAYOUT: A concept pill appears below the illustration, spanning its width.
ON-SCREEN ELEMENTS: `#concept-pill` — chevron-right + chevron-left icon pair, label "Opposite Direction", pill "+ Add Speeds".
ANIMATION DETAILS: `apt.cardEnter(tl, "#concept-pill", 29.54)` (word "It means...towards each other"); `apt.ambientLoop(tl, "#concept-pill .concept-arrows", 30.0, 45.54, {period:1.2, amp:5})` keeps chevrons bobbing through the hold; `apt.emphasize(tl, "#concept-pill .concept-tag", 36.34)` pulses "+ Add Speeds" on the word "added"; `#formula-build` ("Relative Speed = Sum of their Speeds") enters at 41.60 via `apt.cardEnter` + `apt.textReveal`, word-synced to the closing narration (41.88–44.68).
CAMERA MOVEMENT: None.
TRANSITIONS: Continuation, illustration stays static (crossed) as concept pill takes visual focus.
EDUCATIONAL PURPOSE: This is the crux rule of the whole problem — must land clearly before any math starts.
VISUAL HIERARCHY: Concept pill becomes primary once it enters; train/man/badges recede to background context; `#formula-build` becomes the new focal point in the back half of the beat.
ATTENTION MANAGEMENT: Chevron bob + tag pulse + word-synced formula keep the 29.54–45.54s span from reading static, without adding new competing focal elements.
MOTION NOTES: `back.out(1.4)` entrance, ambient bob, emphasize yoyo pulse, plain-opacity word reveal.
CONTINUITY FROM PREVIOUS SCENE: Train, man, badges, target-tag all remain exactly where Scene 3 left them; only the concept pill is new.

### Scene 5 (45.54–60.78s) — Pin + Given Recap
VOICEOVER: "Now, before using this rule, we first need the relative speed. Why? Because we already know the train length and the time taken to pass the man. When a train passes a person, the distance covered is only the length of the train."
VISUAL OBJECTIVE: Reorganize into working layout; recap the knowns.
SCREEN LAYOUT: Question pins to top (`#q-pinned`), illustration shrinks to pinned recap (`#illus-pinned`, centered icons + labels), Given card center.
ON-SCREEN ELEMENTS: `#q-pinned`, `#illus-pinned` (mini train + "+" + mini man, each with a short label, `apt.ambientLoop` bob on both icons), `#card-given` solution card (chip "Given").
ANIMATION DETAILS:
- `PIN_TIME = 45.54`: `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 45.54)`, `apt.pinFlow(tl, "#illustration", "#illus-pinned", 45.54)`, `apt.fadeOut(tl, "#serial-num", 45.54, 0.5)`.
- `apt.ambientLoop(tl, "#illus-pinned-icon-train", 46.54, 108.70)`, `apt.ambientLoop(tl, "#illus-pinned-icon-man", 46.54, 108.70)`.
- `GIVEN_TIME = 50.76`: `apt.cardEnter(tl, "#card-given .solution-card", 50.76)`, `apt.textReveal(tl, "#card-given .math")` — 3 line-level `.rv` lines: "Train Length = 240 m" (50.76), "Time Taken = 12 s" (52.38), "Man's Speed = 6 km/hr" (55.60).
- `#dist-note` pill ("Distance Covered = Train Length") under the pinned illustration: `apt.cardEnter(tl, "#dist-note", 57.42)`, `apt.fadeOut(tl, "#dist-note", 60.90, 0.4)` — covers narration "the distance covered is only the length of the train" (57.42–60.78), right before Step 1 opens.
CAMERA MOVEMENT: None — the pin is a layout glide, not a camera move.
TRANSITIONS: `apt.pinFlow` (0.8s glide, not a cut).
EDUCATIONAL PURPOSE: Consolidate the three knowns (length, time, man's speed) right before the formula work begins.
VISUAL HIERARCHY: Given card is the new focal point; pinned question/illustration recede to a header strip.
ATTENTION MANAGEMENT: Given card's 3 lines reveal top-to-bottom in quick succession, matching the recap tone (values already established, not fresh).
MOTION NOTES: `pinFlow` 0.8s `power2.inOut`; `cardEnter` `back.out(1.4)`; text reveal plain opacity fades.
CONTINUITY FROM PREVIOUS SCENE: The full-size question card and illustration from Scenes 1–4 visibly glide (not cut) into their pinned slots — same elements, new positions.

### Scene 6 (61.20–69.16s) — Step 1: Relative Speed
VOICEOVER: "So relative speed equals distance divided by time equals 240 divided by 12 equals 20 meters per second. Done. Now we know the relative speed."
VISUAL OBJECTIVE: Solve for relative speed.
SCREEN LAYOUT: Given card morphs to left stack; Step 1 card takes center.
ON-SCREEN ELEMENTS: `#stack-given` (circle "G"), `#card-step1` (chip "Step 1").
ANIMATION DETAILS:
- `GIVEN_MORPH_TIME = 58.60`: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 58.60)`.
- `apt.cardEnter(tl, "#card-step1 .solution-card", 61.20)`, `apt.textReveal(tl, "#card-step1 .math")` — "Relative Speed =" (61.34) + `.frac` Distance/Time (63.14); "=" (64.82) + `.frac` 240/12 (65.18); "=" (66.90) + `.ans` "20 m/s" (67.24).
- `STEP1_MORPH_TIME = 69.16`: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 69.16)`, `apt.stackLineGrow(tl, "#line-g-1", 69.16)`.
CAMERA MOVEMENT: None.
TRANSITIONS: `morphToStack` (0.8s box+text crossfade).
EDUCATIONAL PURPOSE: First concrete number — relative speed = 20 m/s — anchors everything that follows.
VISUAL HIERARCHY: Step 1 card center-stage; Given card now a small stack entry on the left.
ATTENTION MANAGEMENT: Formula → substitution → answer, one `.rv` unit at a time.
MOTION NOTES: `.frac` used for both divisions — never a bare `÷`.
CONTINUITY FROM PREVIOUS SCENE: Given card is still mid-read as this scene opens; its morph to the stack happens cleanly before Step 1's own text starts revealing, so the two never compete for attention.

### Scene 7 (69.98–82.48s) — Step 2: Convert Man's Speed
VOICEOVER: "Now we know the relative speed. The man's speed is given in kilometers per hour, so let us convert it into meters per second. Six multiplied by five divided by eighteen gives us five by three meters per second."
VISUAL OBJECTIVE: Unit-convert the man's speed so it can be combined with the (m/s) relative speed.
SCREEN LAYOUT: Step 1 already in stack; Step 2 card center.
ON-SCREEN ELEMENTS: `#card-step2` (chip "Step 2").
ANIMATION DETAILS: `apt.cardEnter(tl, "#card-step2 .solution-card", 71.72)`, `apt.textReveal(tl, "#card-step2 .math")` — line-level "Convert Man's Speed to m/s" (71.72); word-level "6" (77.12) "×" (77.55) + `.frac` 5/18 (78.30); "=" (80.24) + `.frac.ans` 5/3 (80.60) "m/s" (81.32).
CAMERA MOVEMENT: None.
TRANSITIONS: Direct `cardEnter` (Step 1's morph already completed in Scene 6).
EDUCATIONAL PURPOSE: Reinforces the km/h↔m/s conversion factor (×5/18) as its own discrete, reusable step.
VISUAL HIERARCHY: Step 2 card is sole focus; stack column (Given, Step 1) sits quietly on the left.
ATTENTION MANAGEMENT: Conversion label first, then the arithmetic, then the boxed result — same 3-beat rhythm as Step 1.
MOTION NOTES: `.frac` for both 5/18 and the 5/3 result.
CONTINUITY FROM PREVIOUS SCENE: Step 1's stack card and its connector groundwork are already settled; Step 2 opens into the same center slot Step 1 just vacated.

### Scene 8 (82.54–96.24s) — Step 3: Solve Train Speed (m/s)
VOICEOVER: "Now we can use the relation, relative speed equals train speed plus man's speed. So 20 equals train speed plus 5 by 3. After simplifying this, we get train speed equals 55 by 3 meters per second."
VISUAL OBJECTIVE: Apply the addition rule from Scene 4 to solve for the train's speed in m/s.
SCREEN LAYOUT: Step 2 morphs to stack; Step 3 card center.
ON-SCREEN ELEMENTS: `#stack-step2` (circle "2"), `#card-step3` (chip "Step 3").
ANIMATION DETAILS:
- `STEP2_MORPH_TIME = 81.74`: `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 81.74)`, `apt.stackLineGrow(tl, "#line-1-2", 81.74)`.
- `apt.cardEnter(tl, "#card-step3 .solution-card", 83.24)`, `apt.textReveal(tl, "#card-step3 .math")` — "Relative Speed = Train Speed + Man's Speed" word-level (84.04→86.52); "20 = Train Speed +" + `.frac` 5/3 word-level (87.52→89.38); "Train Speed =" + `.frac.ans` 55/3 + "m/s" (93.50→95.82).
CAMERA MOVEMENT: None.
TRANSITIONS: `morphToStack` then `cardEnter`.
EDUCATIONAL PURPOSE: This is the payoff of the "opposite direction → add" rule taught in Scene 4 — explicitly closes that loop.
VISUAL HIERARCHY: Step 3 card center; stack now three entries deep (G, 1, 2) on the left, each connected by a grown line.
ATTENTION MANAGEMENT: Formula restated in variables, then substituted, then solved — mirrors Scene 4's rule almost verbatim so the connection is obvious.
MOTION NOTES: `.frac` for both 5/3 instances and the 55/3 result.
CONTINUITY FROM PREVIOUS SCENE: Step 2's box is still completing its crossfade into the stack as this scene's card begins entering — the two are staggered by only ~1.5s to keep the sequence feeling continuous rather than gapped.

### Scene 9 (96.82–107.86s) — Step 4: Convert to km/h
VOICEOVER: "Now only one step is left. The options are in kilometers per hour, so we convert the speed back. 55 by 3 multiplied by 18 divided by 5 gives us 66 kilometers per hour."
VISUAL OBJECTIVE: Convert the m/s answer back to km/h to match the options.
SCREEN LAYOUT: Step 3 morphs to stack; Step 4 card center.
ON-SCREEN ELEMENTS: `#stack-step3` (circle "3"), `#card-step4` (chip "Step 4").
ANIMATION DETAILS:
- `STEP3_MORPH_TIME = 96.82`: `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 96.82)`, `apt.stackLineGrow(tl, "#line-2-3", 96.82)`.
- `apt.cardEnter(tl, "#card-step4 .solution-card", 98.69)`, `apt.textReveal(tl, "#card-step4 .math")` — line-level "Convert to km/hr" (98.69); word-level `.frac` 55/3 (102.82) "×" (103.70) `.frac` 18/5 (104.26); "=" (105.98) `.ans` "66 km/hr" (106.36).
CAMERA MOVEMENT: None.
TRANSITIONS: `morphToStack` then `cardEnter`.
EDUCATIONAL PURPOSE: Final unit conversion — mirror image of Step 2's conversion, reinforcing the ×5/18 ↔ ×18/5 relationship.
VISUAL HIERARCHY: Step 4 card center; stack now four entries (G, 1, 2, 3).
ATTENTION MANAGEMENT: Same 3-beat rhythm (label → arithmetic → boxed result) as every prior step, for consistency.
MOTION NOTES: `.frac` for 55/3, 18/5, and no bare `÷` anywhere.
CONTINUITY FROM PREVIOUS SCENE: Step 3's morph is settling into the stack exactly as Step 4 opens, same staggered-continuity pattern as Scene 8.

### Scene 10 (108.70–115.59s) — Confirmation + Options Reveal
VOICEOVER: "Hence, the speed of the train is 66 kilometers per hour. So the final answer will be Option D."
VISUAL OBJECTIVE: Confirm the answer and reveal it among the options.
SCREEN LAYOUT: Step 4 morphs to stack (four-deep column now complete); pinned question recenters; options grid (2×2) appears on the right.
ON-SCREEN ELEMENTS: `#stack-step4` (circle "4"), `#options-reveal` (A 58.08 · B 73.92 · C 81.84 · D 66, correct = D).
ANIMATION DETAILS:
- `RECENTER_TIME = 108.70`: `apt.fadeOut(tl, "#illus-pinned", 108.70)`, `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 108.70)`, `apt.morphToStack(tl, "#card-step4 .solution-card", "#stack-step4 .stack-card", 108.70)`, `apt.stackLineGrow(tl, "#line-3-4", 108.70)`.
- `apt.fadeIn(tl, "#options-reveal", 109.80)`, `apt.optionsStagger(tl, ".opt-btn", 110.30)`, `apt.correctPulse(tl, ".opt-btn.correct", 114.80)` (word "option", just before "D.").
- `END_FADE_TIME = 116.60`: `apt.fadeOut(tl, "#root > div", 116.60, 1.2)`.
CAMERA MOVEMENT: None.
TRANSITIONS: `morphToStack`, `recenterForOptions`, staggered `fadeIn`/`optionsStagger`, final synchronized fade.
EDUCATIONAL PURPOSE: Close the loop — confirm 66 km/h against the answer choices.
VISUAL HIERARCHY: Options grid becomes primary; full stack column (G,1,2,3,4) remains visible as the "proof trail" on the left.
ATTENTION MANAGEMENT: Correct option pulses exactly as "Option D" is spoken.
MOTION NOTES: `correctPulse` 0.4s yoyo `back.out(1.5)`.
CONTINUITY FROM PREVIOUS SCENE: Step 4's card is still visible mid-morph as the recenter/options sequence begins — the stack column's growth and the options reveal read as one continuous closing beat rather than two separate events.

## PART 3 — Asset List Required
- `illustration/train.svg` (copied from `global-illustrations/train.svg`, same asset used across q3/q11/etc.)
- `illustration/man.svg` (copied from `global-illustrations/runner.svg`, mirrored via CSS `scaleX(-1)` to face left/toward the train — already palette-matched, no recolor needed)
- No other new assets — all pills/badges/chevrons are CSS, same pattern as q11.

## PART 4 — Animation Complexity Notes
- Reuses q11's opposite-direction convergence pattern (two units sliding toward each other on a rail) but compresses it into the literal 12-second-crossing narration window (17.54–20.70s) instead of a slow multi-second drift, since q20's crossing is a stated fact ("takes 12 seconds"), not a scene-setting device.
- 4 steps (not the usual 2–3) because the problem genuinely has 4 discrete arithmetic beats: relative speed, unit-convert man's speed, solve train speed, unit-convert train speed. Stack column will be 4 deep (G,1,2,3,4) — verify vertical spacing stays legible at 1080px height (measured gaps via `apt.setStackLine`, not hand-guessed).
- Every division renders via `.frac` — no bare `÷` anywhere (240/12, 5/18, 5/3, 55/3, 18/5).
- Given card's 3 lines are line-level (not word-level) since the recap doesn't repeat the literal numbers at that moment — matches q11's own Given-card precedent.

## PART 5 — Master Timeline Overview
```
0.00   Question hero enters (lowered)
0.80   Serial badge pop
5.28   Question rises to rest
5.86   Rail sweeps in
6.40   Train enters (left)
9.32   Train length badge "240 m"
11.38  Man enters (right)
13.60  Man speed badge "6 km/hr"
15.88  Opposite-direction chevrons
17.54  Crossing tween begins (3.16s)
18.42  "12 s" time tag
21.42  (crossing settled)
22.72  Target tag "Find: Train Speed?"
29.54  Concept pill "Opposite Direction → Add Speeds"
45.54  PIN_TIME — question + illustration glide to pinned layout
46.54  Ambient loop starts on pinned train/man icons
50.76  Given card enters, recap lines reveal (50.76 / 52.38 / 55.60)
58.60  Given → stack (circle G)
61.20  Step 1 card enters — Relative Speed = 240/12 = 20 m/s
69.16  Step 1 → stack (circle 1), line G–1 grows
71.72  Step 2 card enters — convert 6 km/hr → 5/3 m/s
81.74  Step 2 → stack (circle 2), line 1–2 grows
83.24  Step 3 card enters — 20 = Train + 5/3 → Train = 55/3 m/s
96.82  Step 3 → stack (circle 3), line 2–3 grows
98.69  Step 4 card enters — 55/3 × 18/5 = 66 km/hr
108.70 Step 4 → stack (circle 4), line 3–4 grows; recenter; illus-pinned fades
109.80 Options grid fades in
110.30 Options stagger in
114.80 Correct option (D) pulses
116.60 Full-frame fade out (1.2s)
118.5  End
```
