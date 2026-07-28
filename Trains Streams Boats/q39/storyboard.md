# Trains, Streams and Boats - Q39 Storyboard

Question: A boat travels 24 km upstream at 8 km/h and 36 km downstream at 12 km/h. Find the total time.
Options: A) 5.28h B) 6.72h C) 6h (correct) D) 7.44h
Voiceover duration: ~81.5s (last word "C." ends 81.24, tail room to ~82.5)

## PART 1: Narration Beat Analysis

| Beat | Time | Narration | Purpose | Attention Focus | Visual Objective |
|---|---|---|---|---|---|
| 1 | 0.12-4.04 | "So welcome back again, it's time to solve one more problem." | Cold open | Center screen | Question card hero entrance (lowered), rises at 4.04 |
| 2 | 4.52-16.36 | "Now in this problem, a boat travels 24 km upstream at 8 km/h, and then 36 km downstream at 12 km/h." | Setup | Illustration | River + boat scene assembles; boat runs upstream leg then downstream leg with badges |
| 3 | 16.84-21.98 | "The question is asking us to find the total time taken for the whole journey." | Frame the ask | Target tag | "Total Time = ?" tag appears |
| 4 | 22.38-36.70 | "Now the important point is the journey has two parts...we cannot calculate total time directly. We first find time for each part separately, then add them." | Insight / strategy | Formula tag | "Time = Distance / Speed, done twice" tag appears; sets up why two steps needed |
| 5 | 36.9 (PIN) -37.48 (GIVEN) | pin transition | Layout reorganize | Top of frame | pinFlow question+illustration to pinned slot |
| 6 | 37.48-47.38 | "Given, upstream distance = 24 km, upstream speed = 8 km/h. Downstream distance = 36 km, downstream speed = 12 km/h." | State knowns | Given card | Given card, word-synced reveal |
| 7 | 48.02-54.08 | "Now we know the formula for time. Time = Distance / Speed. So let us use this formula one by one." | Bridge to solving | Given card (still) | narration only, no new card - given card holds through this |
| 8 | 54.58-59.56 | "First, the time taken upstream. Time = 24 / 8 = 3 hours." | Step 1 | Step 1 card | Given morphs to stack, Step 1 card enters, frac reveal |
| 9 | 59.98-62.48 | "Done. Now let us move to the downstream journey." | Transition | Step1->stack | morph Step1 to stack |
| 10 | 62.9-71.24 | "Time = 36 / 12 = 3 hours. Now that both parts are clear, we simply add them because the boat completes both journeys one after the other." | Step 2 | Step 2 card | Step 2 card, frac reveal, holds through addition reasoning |
| 11 | 71.92-74.82 | "Total Time = 3 + 3 = 6 hours." | Step 3 | Step 3 card | Step 2 morphs to stack, Step 3 card enters with final sum |
| 12 | 75.70-78.44 | "Hence, the total time taken is 6 hours." | Confirm answer | Step3->stack | Step 3 morphs to stack right as "Hence" is spoken |
| 13 | 78.82-81.24 | "So the correct option is option C." | Reveal | Options grid | Options fade in, stagger, correct pulse on C |

## PART 2: Scene-by-Scene Storyboard

### Scene 1 - Cold open (0.0s - 4.04s)
- VOICEOVER: "So welcome back again, it's time to solve one more problem."
- VISUAL OBJECTIVE: establish question card as sole focus, vertically centered.
- SCREEN LAYOUT: q-card centered horizontally, lowered by 180px (HERO_OFFSET_Y), rises to top:80px slot at RISE_TIME=4.04.
- ON-SCREEN ELEMENTS: #q-full-card (question text with "24 km", "8 km/h", "36 km", "12 km/h", "total time" in primary blue), #serial-num badge (bottom-left offset, mirrors card's y).
- ANIMATION DETAILS: apt.heroEnterLowered(tl, "#q-full-card", 180, 4.04); serial-num fromTo scale/rotation at 0.8s, rises with card at 4.04.
- CAMERA MOVEMENT: none (static frame, only internal element motion).
- TRANSITIONS: hero rise is the only motion.
- EDUCATIONAL PURPOSE: orient viewer to the problem statement before any numbers are explained.
- VISUAL HIERARCHY: question text dominant, badge secondary.
- ATTENTION MANAGEMENT: single focal point (card).
- MOTION NOTES: back.out(1.4) ease on rise for a soft settle.
- CONTINUITY FROM PREVIOUS SCENE: video start, no previous scene.

### Scene 2 - River + boat illustration assembles (4.52s - 16.36s)
- VOICEOVER: "Now in this problem, a boat travels 24 kilometer upstream at 8 km/h, and then 36 kilometer downstream at 12 km/h."
- VISUAL OBJECTIVE: show one boat making a two-leg journey - upstream leg against the current, downstream leg with the current - each leg tagged with its real distance and speed.
- SCREEN LAYOUT: #illustration centered at top:480px per template; river-scene band (rounded, primary-light fill, animated wave tiles) spans 1500px width; boat-unit (100x100 boat.svg) sits centered on the river at start.
- ON-SCREEN ELEMENTS: river-scene (water-fill + two wave tracks scrolling rightward, representing the current's fixed direction), flow-arrows chevrons (pointing right = downstream direction of the current), boat-unit with boat-icon, badge-pill above boat, wake-lines behind it.
- ANIMATION DETAILS:
  - apt.cardEnter(tl, "#river-scene", 4.6); apt.cardEnter(tl, "#boat-unit", 4.9).
  - riverFlow() scrolls both wave tracks rightward continuously from 4.6 to RECENTER_TIME (current always flows one direction).
  - UPSTREAM LEG (boat fights the current, flips left): at 6.5 boat-icon scaleX:-1 (power2.inOut, 0.3s); tl.to("#boat-unit",{x:-320},duration 3.6, power1.inOut) from 6.8 to 10.4, wake-lines flicker; badge shows "24 km / 8 km/h" fading in at 7.62 (word "twenty-four") and 10.9 (word "eight").
  - Direction flip at 12.2: boat-icon scaleX back to 1 (now facing right, matching downstream direction); merge-chip briefly emphasizes flow-arrows.
  - DOWNSTREAM LEG (boat rides the current, faster net motion): tl.to("#boat-unit",{x:+320},duration 3.6, power1.inOut) from 12.58 to 16.18; badge swaps to "36 km / 12 km/h" fading in at 12.9 (word "thirty-six") and 15.14 (word "twelve").
  - apt.ambientLoop small bob layered on boat-icon throughout via the yoyo y-tween already covering wake period.
- CAMERA MOVEMENT: none - all motion is internal (boat translates within the fixed illustration frame).
- TRANSITIONS: continuous take, no cuts within the scene.
- EDUCATIONAL PURPOSE: makes the two-leg structure of the journey (opposite directions, different speeds) visually concrete before any formula is introduced.
- VISUAL HIERARCHY: boat + badge is the primary focus; river/current is supporting context.
- ATTENTION MANAGEMENT: badge value change (24/8 to 36/12) is the single most important visual cue, timed exactly to the matching narration word.
- MOTION NOTES: boat's net leftward-then-rightward slide is layered with an independent small vertical bob (sine.inOut yoyo) so it never looks static mid-leg.
- CONTINUITY FROM PREVIOUS SCENE: the question card has just finished its rise-to-rest motion at 4.04s; the illustration begins assembling directly beneath it starting 4.6s, in the same still frame - no card motion is running when the river/boat entrance begins.

### Scene 3 - Frame the question (16.84s - 21.98s)
- VOICEOVER: "The question is asking us to find the total time taken for the whole journey."
- VISUAL OBJECTIVE: surface the unknown being solved for.
- SCREEN LAYOUT: target-tag pill appears above the boat-unit's resting downstream position.
- ON-SCREEN ELEMENTS: #target-tag showing "Total Time = ?".
- ANIMATION DETAILS: apt.cardEnter(tl, "#target-tag", 18.28) (word "asking").
- CAMERA MOVEMENT: none.
- TRANSITIONS: simple fade/scale entrance (cardEnter default).
- EDUCATIONAL PURPOSE: names the target variable before the strategy is explained.
- VISUAL HIERARCHY: tag is the new focal point, boat settles into background.
- ATTENTION MANAGEMENT: single new element, no competing motion.
- MOTION NOTES: back.out(1.4), 0.55s.
- CONTINUITY FROM PREVIOUS SCENE: boat has just completed its downstream slide and settled at its rightmost resting position with the ambient bob still running; the tag appears above that same resting boat without any camera or layout change.

### Scene 4 - Strategy insight (22.38s - 36.70s)
- VOICEOVER: "Now the important point here is that the journey has two different parts. One part is upstream, and the other part is downstream. So we cannot calculate the total time directly. We first find the time for each part separately, and then add them."
- VISUAL OBJECTIVE: justify the two-step approach before showing any card.
- SCREEN LAYOUT: formula-tag pill appears below target-tag.
- ON-SCREEN ELEMENTS: #formula-tag "Time = Distance / Speed - twice".
- ANIMATION DETAILS: apt.cardEnter(tl, "#formula-tag", 33.1) (word "We"); apt.emphasize(tl, "#formula-tag", 36.1) synced to "add them."
- CAMERA MOVEMENT: none.
- TRANSITIONS: none, single hold.
- EDUCATIONAL PURPOSE: pre-empts the "why two steps" question before the Given/Step cards start.
- VISUAL HIERARCHY: formula-tag secondary to target-tag, both small relative to boat scene.
- ATTENTION MANAGEMENT: emphasize pulse lands exactly on "add them" to cue the upcoming addition step.
- MOTION NOTES: emphasize is a 0.3s yoyo scale pulse, power2.out.
- CONTINUITY FROM PREVIOUS SCENE: target-tag from Scene 3 is still visible and static; formula-tag enters beneath it in the same still frame, no elements exit.

### Scene 5 - Pin transition (36.9s)
- VOICEOVER: (silence/breath before "Given" at 37.48)
- VISUAL OBJECTIVE: move question + illustration out of the way and into the compact pinned layout so the solution cards can take center stage.
- SCREEN LAYOUT: q-full-card glides to q-pinned (left:385px, top:30px); illustration glides to illus-pinned (mini river + idling flipped-right boat, left:280px, top:190px).
- ON-SCREEN ELEMENTS: #q-pinned, #illus-pinned (mini river track scrolling, boat icon bobbing via apt.ambientLoop from PIN_TIME+1 to RECENTER_TIME).
- ANIMATION DETAILS: apt.pinFlow(tl, "#q-full-card", "#q-pinned", 36.9); apt.pinFlow(tl, "#illustration", "#illus-pinned", 36.9); apt.fadeOut(tl, "#serial-num", 36.9, 0.5).
- CAMERA MOVEMENT: simulated via real glide of the two elements (no actual camera).
- TRANSITIONS: 0.8s power2.inOut glide, one continuous motion (not fade swap).
- EDUCATIONAL PURPOSE: keeps the question visible for reference while freeing center stage for the math.
- VISUAL HIERARCHY: pinned elements shrink to secondary status; center stage now empty, awaiting Given card.
- ATTENTION MANAGEMENT: the glide itself is the only motion, drawing the eye from center to top-left naturally.
- MOTION NOTES: power2.inOut both ways (position + scale).
- CONTINUITY FROM PREVIOUS SCENE: the boat is still bobbing at its rightmost downstream position with both tags visible; pinFlow carries the whole illustration (boat, river, tags fade with it) as one unit into the pinned slot, so the boat's bob motion continues uninterrupted through the glide.

### Scene 6 - Given card (37.48s - 53.3s)
- VOICEOVER: "Given, upstream distance equals 24 km, upstream speed equals 8 km/h. Downstream distance equals 36 km, downstream speed equals 12 km/h. Now we know the formula for time. Time equals distance divided by speed. So let us use this formula one by one."
- VISUAL OBJECTIVE: lay out all four known values before any computation.
- SCREEN LAYOUT: #card-given centered at left:640px,top:480px (template default).
- ON-SCREEN ELEMENTS: chip "Given", four value lines with word-synced .rv spans.
- ANIMATION DETAILS: apt.cardEnter(tl, "#card-given .solution-card", 37.48); apt.textReveal(tl, "#card-given .math") with data-t at 37.92 (Upstream), 38.4 (distance), 38.88 (=), 39.16 (24 km), 40.16 (Upstream), 40.6 (speed), 40.86 (=), 41.16 (8 km/h), 42.74 (Downstream), 43.24 (distance), 43.68 (=), 43.96 (36 km), 45.12 (Downstream), 45.56 (speed), 45.88 (=), 46.2 (12 km/h).
- CAMERA MOVEMENT: none.
- TRANSITIONS: card holds through the formula-naming narration (48.02-54.08) with no new visual - card stays put as a reference while the formula is spoken aloud.
- EDUCATIONAL PURPOSE: consolidate all four given numbers in one place before introducing the formula.
- VISUAL HIERARCHY: card is sole center-stage focus; pinned question/illustration quiet in background.
- ATTENTION MANAGEMENT: four short reveal beats, each landing on its own spoken value.
- MOTION NOTES: cardEnter back.out(1.4) 0.55s; each .rv fades in via textReveal's built-in per-word tween.
- CONTINUITY FROM PREVIOUS SCENE: pinFlow glide has just landed at 37.7 (36.9+0.8); the Given card's cardEnter begins at 37.48, so its entrance is already animating while the pin glide is still completing its last few frames - the two motions overlap by design, reading as one continuous handoff from "layout settles" to "card appears".

### Scene 7 - Step 1: upstream time (54.58s - 59.98s)
- VOICEOVER: "First, the time taken upstream. Time equals 24 divided by 8 equals 3 hours. Done."
- VISUAL OBJECTIVE: compute the upstream leg's time using the given values.
- SCREEN LAYOUT: Given card morphs into stack-given (left column); #card-step1 takes center stage at left:640px,top:460px.
- ON-SCREEN ELEMENTS: chip "Step 1", math line "Time = 24/8 = 3 hours" using .frac for the division (never a bare divide sign).
- ANIMATION DETAILS: apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 53.3); apt.cardEnter(tl, "#card-step1 .solution-card", 54.58); apt.textReveal with data-t 56.84 (Time), 57.12 (=), 57.42+58.44 (the frac's top/bottom reveal together at 57.42, the numerator's spoken moment), 58.64 (=), 58.96 (3 hours).
- CAMERA MOVEMENT: none.
- TRANSITIONS: 0.8s morph (position slide + shrink + bg color change to stack card).
- EDUCATIONAL PURPOSE: first concrete application of Time = Distance/Speed with real numbers.
- VISUAL HIERARCHY: Step 1 card primary; Given now a quiet stack entry on the left.
- ATTENTION MANAGEMENT: .frac component draws the eye to the division, .ans highlights the "3 hours" result.
- MOTION NOTES: morph text crossfade at 35%/55%+ of the 0.8s duration per animations.js contract.
- CONTINUITY FROM PREVIOUS SCENE: the Given card has been static since Scene 6; its morph starts at 53.3 (right as "one by one" finishes at 54.08) and completes at 54.1, overlapping with the Step 1 card's own cardEnter at 54.58 by design - the outgoing card is still settling into the stack as the incoming card begins its pop-in, keeping the handoff continuous.

### Scene 8 - Downstream time (60.78s - 71.3s)
- VOICEOVER: "Now let us move to the downstream journey. Time equals 36 divided by 12 equals 3 hours. Now that both parts are clear, we simply add them because the boat completes both journeys one after the other."
- VISUAL OBJECTIVE: compute the downstream leg's time, mirroring Step 1's method.
- SCREEN LAYOUT: Step 1 morphs into stack-step1; #card-step2 center stage at left:600px,top:440px,width:720px.
- ON-SCREEN ELEMENTS: chip "Step 2", math line "Time = 36/12 = 3 hours" (.frac again), plus a line-level reveal for the paraphrased "both parts are clear, we add them" reasoning sentence.
- ANIMATION DETAILS: apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 59.98); apt.stackLineGrow(tl, "#line-g-1", 59.98); apt.cardEnter(tl, "#card-step2 .solution-card", 62.48); apt.textReveal with data-t 62.9 (Time), 63.24 (=), 63.6+64.7 (frac 36/12), 65.02 (=), 65.32 (3 hours), 66.36 (line-level reveal of the addition-reasoning sentence, "Now that both parts are clear...one after the other.").
- CAMERA MOVEMENT: none.
- TRANSITIONS: 0.8s morph, same standard.
- EDUCATIONAL PURPOSE: shows the same formula applied to the second leg, reinforcing the method before the final addition.
- VISUAL HIERARCHY: Step 2 card primary; G and 1 now both quiet in the stack column with their connector line grown between them.
- ATTENTION MANAGEMENT: repetition of the exact same visual pattern as Step 1 (frac, .ans) builds confidence via consistency; the trailing reasoning line quietly sets up Step 3's addition.
- MOTION NOTES: stackLineGrow fires at the same instant as the morph, connecting G's circle to 1's circle now that both are on screen.
- CONTINUITY FROM PREVIOUS SCENE: Step 1's morph starts at 59.98 (the word "Done.") and completes at 60.78; Step 2's cardEnter begins at 62.48, after "downstream journey." finishes speaking - the stack column is fully settled with its new connector line grown before the next active card appears, so there is a brief deliberate beat (not a random gap) where the pinned illustration's ambient bob is the only motion on screen.

### Scene 9 - Total time (71.92s - 75.7s)
- VOICEOVER: "Total time equals 3 plus 3 equals 6 hours."
- VISUAL OBJECTIVE: add the two leg-times to produce the final answer.
- SCREEN LAYOUT: Step 2 morphs into stack-step2; #card-step3 center stage at left:580px,top:420px,width:760px.
- ON-SCREEN ELEMENTS: chip "Step 3", math line "Total Time = 3 + 3 = 6 hours" with .ans highlight on "6 hours".
- ANIMATION DETAILS: apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 70.5); apt.stackLineGrow(tl, "#line-1-2", 70.5); apt.cardEnter(tl, "#card-step3 .solution-card", 71.92); apt.textReveal with data-t 71.92 (Total), 72.2 (time), 72.42 (=), 72.74 (3), 73.0 (+), 73.28 (3), 73.52 (=), 73.88 (6 hours, .ans).
- CAMERA MOVEMENT: none.
- TRANSITIONS: 0.8s morph, same standard.
- EDUCATIONAL PURPOSE: the payoff moment - both partial times combine into the requested total.
- VISUAL HIERARCHY: Step 3 card / .ans "6 hours" is the visual climax of the solving phase.
- ATTENTION MANAGEMENT: single clean addition line, no distractions.
- MOTION NOTES: standard cardEnter + textReveal, no extra pulse layered on top per the no-double-animation rule.
- CONTINUITY FROM PREVIOUS SCENE: Step 2's morph starts at 70.5 (during the trailing "one after the other" filler) and completes at 71.3; Step 3's cardEnter begins at 71.92 on the word "Total", so the stack column's third connector line is already grown and settled a half-second before the new card pops in, keeping the same continuous rhythm as the prior two step transitions.

### Scene 10 - Confirm + morph to stack (75.7s - 78.44s)
- VOICEOVER: "Hence, the total time taken is 6 hours."
- VISUAL OBJECTIVE: restate the answer while the final step card folds into the stack, so the full solved stack (G, 1, 2, 3) sits complete on the left just as the answer is confirmed aloud.
- SCREEN LAYOUT: Step 3 morphs into stack-step3; recenter of pinned question/illustration begins in preparation for options.
- ON-SCREEN ELEMENTS: stack-step3 with step-circle "3", connector line-2-3 grown; #illus-pinned fades out; #q-pinned recenters via apt.recenterForOptions.
- ANIMATION DETAILS: apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 74.9); apt.stackLineGrow(tl, "#line-2-3", 74.9); apt.fadeOut(tl, "#illus-pinned", 75.7); apt.recenterForOptions(tl, "#q-pinned", 160, 180, 75.7).
- CAMERA MOVEMENT: simulated recenter shift of the pinned question column.
- TRANSITIONS: morph completes at 75.7, landing exactly as "Hence" is spoken - the visual and verbal confirmation arrive together.
- EDUCATIONAL PURPOSE: reinforces the answer by pairing the final morph with its verbal restatement.
- VISUAL HIERARCHY: full stack column (G,1,2,3) now the dominant left-side element; pinned illustration exits, making room.
- ATTENTION MANAGEMENT: the illustration's fade-out is the one deliberate "clearing" beat before the options grid arrives.
- MOTION NOTES: recenterForOptions uses power2.inOut, 0.5s.
- CONTINUITY FROM PREVIOUS SCENE: Step 3's card has been static with its answer "6 hours" visible since Scene 9; its morph begins at 74.9, right after "six hours." finishes (74.82) - so the card only starts folding away once its own content has been fully spoken, not before.

### Scene 11 - Options reveal (78.5s - 82.5s)
- VOICEOVER: "So the correct option is option C."
- VISUAL OBJECTIVE: present the four options and highlight the correct one.
- SCREEN LAYOUT: #options-reveal in pinned-col at top:400px, 2x2 options-grid.
- ON-SCREEN ELEMENTS: opt-btn A "5.28 h", B "6.72 h", C "6 h" (class correct), D "7.44 h".
- ANIMATION DETAILS: apt.fadeIn(tl, "#options-reveal", 78.5); apt.optionsStagger(tl, ".opt-btn", 78.9); apt.correctPulse(tl, ".opt-btn.correct", 80.48); apt.fadeOut(tl, "#root > div", 82.0, 1.2) as END_FADE.
- CAMERA MOVEMENT: none.
- TRANSITIONS: fadeIn then stagger then pulse, three distinct beats.
- EDUCATIONAL PURPOSE: final confirmation tying the computed "6 hours" back to the multiple-choice answer.
- VISUAL HIERARCHY: correct option C pulses to stand out from A/B/D.
- ATTENTION MANAGEMENT: correctPulse timed to the word "option" (C) at 80.48, landing exactly as it's spoken.
- MOTION NOTES: optionsStagger power3.out 0.45s x4 with 0.12s stagger; correctPulse back.out(1.5) 0.4s yoyo.
- CONTINUITY FROM PREVIOUS SCENE: the stack column and pinned recentered question are already settled and static from Scene 10; the options grid fades in beside them in the same still frame, with no further motion on the stack/question elements through to the end fade.

## PART 3: Asset List Required
- illustration/boat.svg (reused global asset)
- illustration/wave.svg, illustration/wave-light.svg (reused global assets, tiled for river scroll)
- No new custom SVGs needed - river/boat scene built entirely from existing global assets + CSS (badges, tags, chevrons as div/pill elements, same technique as q4/q2/q8).

## PART 4: Animation Complexity Notes
- Two-leg boat translate (upstream then downstream) reuses q4's "riverFlow" conveyor-scroll helper and boat flip technique, but adds a SECOND leg with a direction reversal (flip back to unflipped) and a badge value swap (24/8 -> 36/12) instead of q4's single static leg.
- Three morphToStack cycles (Given->G, Step1->1, Step2->2) plus a fourth (Step3->3) = four total stack entries, three connector lines (line-g-1, line-1-2, line-2-3), following the exact pattern already validated in the template and q4.
- All durations (cardEnter 0.55s, morphToStack 0.8s, pinFlow 0.8s, optionsStagger 0.45s x4 @0.12s stagger, correctPulse 0.4s yoyo) are the fixed standard set - no custom durations introduced.
- Every division (24÷8, 36÷12) is rendered as .frac, never a bare ÷ character, per the math-notation rule.

## PART 5: Master Timeline Overview

```
0.0    Background layers + bottom-strip + topic + logo visible
0.3    q-full-card hero (lowered, back.out(1.4))
0.8    serial-num pops (lowered, mirrors card)
4.04   RISE_TIME - card + badge rise to rest
4.6    river-scene + boat-unit enter, river flow starts (continuous)
6.5    boat flips left, upstream leg begins (24 km / 8 km/h badge)
7.62   badge "24 km" reveals
10.9   badge "8 km/h" reveals
12.2   boat flips right, downstream leg begins (36 km / 12 km/h badge)
12.9   badge "36 km" reveals
15.14  badge "12 km/h" reveals
18.28  target-tag "Total Time = ?" enters
33.1   formula-tag "Time = Distance/Speed - twice" enters
36.1   formula-tag emphasize pulse
36.9   PIN_TIME - pinFlow glide (q-full-card->q-pinned, illustration->illus-pinned)
37.48  GIVEN_TIME - card-given cardEnter + textReveal (4 values)
53.3   morphToStack: Given -> stack-given (G)
54.58  card-step1 cardEnter + textReveal (Time=24/8=3h)
59.98  morphToStack: Step1 -> stack-step1 (1); stackLineGrow line-g-1
62.48  card-step2 cardEnter + textReveal (Time=36/12=3h + reasoning line)
70.5   morphToStack: Step2 -> stack-step2 (2); stackLineGrow line-1-2
71.92  card-step3 cardEnter + textReveal (Total=3+3=6h)
74.9   morphToStack: Step3 -> stack-step3 (3); stackLineGrow line-2-3
75.7   illus-pinned fadeOut; q-pinned recenterForOptions
78.5   options-reveal fadeIn
78.9   optionsStagger (A/B/C/D)
80.48  correctPulse on C (6 h)
82.0   END_FADE - everything fades together (1.2s)
```
