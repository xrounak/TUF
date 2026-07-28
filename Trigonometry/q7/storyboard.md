# Storyboard - Trigonometry & Height n Distance Q7 (sin^2 30 + cos^2 30)

## PART 1: Narration Beat Analysis

| Beat | Time (s) | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|---|---|---|---|---|
| 1 | 0.10-9.54 | "So welcome back again. It's time to solve one more problem. Now in this problem, we need to find sine square 30 degree plus cos square 30 degree." | Cold open + state problem | Question card | Question card + SerialNum enter, "sin^2 30 degree" and "cos^2 30 degree" highlighted |
| 2 | 9.94-12.86 | "The question also tells us to use a trigonometric identity." | Frame approach - identity route, not calculation | Pinned question | Pin flow to top, Given card opens with the identity itself |
| 3 | 13.66-21.92 | "We know one very important identity, sine square theta plus cos square theta is equal to one." | State the general identity | Step 1 card | sin^2(theta) + cos^2(theta) = 1 |
| 4 | 22.40-29.92 | "Notice one thing, in the identity, the angle is theta. In our question, the angle is 30 degree. That is perfectly fine." | Bridge - theta is a placeholder, any angle fits | Step 2 card | theta -> 30 degree substitution highlight |
| 5 | 30.44-40.04 | "We can simply replace theta with 30 degree. So sine square 30 degree plus cos square 30 degree becomes one." | Substitute and resolve | Step 3 card | sin^2 30 + cos^2 30 = 1 |
| 6 | 40.86-45.74 | "No calculation is needed because the expression exactly matches the identity." | Reinforce - no computation needed, pure pattern match | Step 3 card (hold) | emphasize "no calculation" |
| 7 | 46.16-51.64 | "Hence, the required answer is one. So the correct option is option C." | Conclude | Options grid | Answer = 1, Option C pulses green |

## PART 2: Scene-by-Scene Storyboard

### Scene 1 - Cold Open + Question (0.0-9.54s)
- TIMESTAMP: 0.0
- VOICEOVER: "So welcome back again. It's time to solve one more problem. Now in this problem, we need to find sine square 30 degree plus cos square 30 degree."
- VISUAL OBJECTIVE: establish question card as anchor, highlight the two terms.
- SCREEN LAYOUT: `#q-full-card` centered, lowered 180px (`apt.heroEnterLowered`), SerialNum top-left.
- ON-SCREEN ELEMENTS: dotted-grid, bottom-strip, topic-name "Trigonometry & Height n Distance", logo, `#q-full-card` with "sin^2 30 degree" and "cos^2 30 degree" wrapped in `<span class="num">`, `#serial-num`.
- ANIMATION DETAILS: `apt.heroEnterLowered(tl,"#q-full-card",180,3.6)` at 0.3s; `apt.serialEnter(tl,"#serial-num",0.8)`.
- CAMERA MOVEMENT: none.
- TRANSITIONS: fade+scale entrance (`back.out(1.4)`).
- EDUCATIONAL PURPOSE: orient viewer to the exact expression to evaluate.
- VISUAL HIERARCHY: question card dominant, num spans in blue.
- ATTENTION MANAGEMENT: nothing competes.
- MOTION NOTES: card rises to rest at 3.6s, holds through 9.54s.
- CONTINUITY FROM PREVIOUS SCENE: opening scene, no prior state.

### Scene 2 - Frame Approach + Pin (PIN_TIME 10.4 / GIVEN_TIME 11.2)
- TIMESTAMP: 9.94
- VOICEOVER: "The question also tells us to use a trigonometric identity."
- VISUAL OBJECTIVE: no diagram needed (pure identity-recall question) - pin question and open Given card directly restating the target expression.
- SCREEN LAYOUT: `#q-pinned` (left:385px, top:30px, width:1275px); no illustration used this question. `#card-given .solution-card` centered.
- ON-SCREEN ELEMENTS: pinned question card, `#serial-num` fades out, Given solution-card chip "Given", math line "sin^2 30° + cos^2 30° = ?".
- ANIMATION DETAILS: `apt.pinFlow(tl,"#q-full-card","#q-pinned",10.4)`; `apt.fadeOut(tl,"#serial-num",10.4,0.5)`; `apt.cardEnter(tl,"#card-given .solution-card",11.2)`; `apt.textReveal(tl,"#card-given .math")` reveals data-t 11.2 (line-level: "sin squared 30 degree plus cos squared 30 degree equals what").
- CAMERA MOVEMENT: none.
- TRANSITIONS: pinFlow glide (real motion, not fade swap). No illustration pinFlow pair since no illustration exists this question.
- EDUCATIONAL PURPOSE: states the target expression formally before recalling the identity.
- VISUAL HIERARCHY: Given card is now largest/brightest element.
- ATTENTION MANAGEMENT: pinned question shrinks and quiets down.
- MOTION NOTES: 0.8s gap between PIN_TIME and GIVEN_TIME is a deliberate settle beat.
- CONTINUITY FROM PREVIOUS SCENE: the same question card from Scene 1 glides into `#q-pinned`, literal continuation.

### Scene 3 - Step 1: State the Identity (Step1 enter 13.66, morph 13.46)
- TIMESTAMP: 13.66
- VOICEOVER: "We know one very important identity, sine square theta plus cos square theta is equal to one."
- VISUAL OBJECTIVE: state the general trig identity in theta form.
- SCREEN LAYOUT: Given morphs into `#stack-given` (left:100px, top:140px); `#card-step1 .solution-card` opens centered.
- ON-SCREEN ELEMENTS: stack chip "G" with "sin^2 30° + cos^2 30° = ?" recap; Step 1 chip; math line "sin^2 theta + cos^2 theta = 1".
- ANIMATION DETAILS: `apt.morphToStack(tl,"#card-given .solution-card","#stack-given .stack-card",13.46)`; `apt.cardEnter(tl,"#card-step1 .solution-card",13.66)`; `apt.textReveal(tl,"#card-step1 .math")` reveals data-t 13.66 (word-level: "sin/squared/theta/+/cos/squared/theta/=/1", theta words timed at 16.40 and 17.24 spans in transcript, closing "= 1" at 20.80).
- CAMERA MOVEMENT: none.
- TRANSITIONS: 0.8s morph overlapping with card enter (0.2s before, matching q6 pattern).
- EDUCATIONAL PURPOSE: anchors the general identity as the tool to apply.
- VISUAL HIERARCHY: "theta" spans highlighted (`.hi`), "1" in `.ans` style.
- ATTENTION MANAGEMENT: single line only.
- MOTION NOTES: card holds through 21.92 before Step 2 begins.
- CONTINUITY FROM PREVIOUS SCENE: Given card still completing its morph into the stack (ends 14.26) as Step 1's cardEnter begins 0.2s earlier per pattern.

### Scene 4 - Step 2: Theta is a Placeholder (Step2 enter 22.40, morph 22.20)
- TIMESTAMP: 22.40
- VOICEOVER: "Notice one thing, in the identity, the angle is theta. In our question, the angle is 30 degree. That is perfectly fine."
- VISUAL OBJECTIVE: bridge concept - theta stands for any angle, so 30 degree fits directly.
- SCREEN LAYOUT: Step 1 morphs into `#stack-step1` (left:100px, top:290px); `#card-step2 .solution-card` opens centered.
- ON-SCREEN ELEMENTS: stack circle "1" with identity recap; Step 2 chip; math line "theta = any angle -> 30°" with theta and 30° both in `.hi`.
- ANIMATION DETAILS: `apt.morphToStack(tl,"#card-step1 .solution-card","#stack-step1 .stack-card",22.20)`; `apt.stackLineGrow(tl,"#line-g-1",22.20)`; `apt.cardEnter(tl,"#card-step2 .solution-card",22.40)`; `apt.textReveal(tl,"#card-step2 .math")` reveals data-t 22.40 (line-level: "in the identity the angle is theta", second line data-t 26.62 "in our question the angle is 30 degree").
- CAMERA MOVEMENT: none.
- TRANSITIONS: morph + card enter.
- EDUCATIONAL PURPOSE: removes the mental block that theta must stay abstract - it is a stand-in for the actual angle.
- VISUAL HIERARCHY: theta and 30° both glow/highlighted as the same role.
- ATTENTION MANAGEMENT: single line only, no extra clutter.
- MOTION NOTES: card holds through 29.92 before Step 3 begins.
- CONTINUITY FROM PREVIOUS SCENE: Step 1 card mid-morph into `#stack-step1` (ends 23.00) as Step 2's cardEnter begins, G-1 connector line grows in same instant.

### Scene 5 - Step 3: Substitute + Resolve (Step3 enter 30.44, morph 30.24)
- TIMESTAMP: 30.44
- VOICEOVER: "We can simply replace theta with 30 degree. So sine square 30 degree plus cos square 30 degree becomes one."
- VISUAL OBJECTIVE: perform the substitution and collapse straight to the answer, no calculation.
- SCREEN LAYOUT: Step 2 morphs into `#stack-step2` (left:100px, top:440px); `#card-step3 .solution-card` opens centered.
- ON-SCREEN ELEMENTS: stack circle "2"; Step 3 chip; math line "sin^2 30° + cos^2 30° = 1" (1 in `.ans`).
- ANIMATION DETAILS: `apt.morphToStack(tl,"#card-step2 .solution-card","#stack-step2 .stack-card",30.24)`; `apt.stackLineGrow(tl,"#line-1-2",30.24)`; `apt.cardEnter(tl,"#card-step3 .solution-card",30.44)`; `apt.textReveal(tl,"#card-step3 .math")` reveals data-t 30.44 (word-level: "sin/squared/30/degree/+/cos/squared/30/degree" at 34.06, "becomes" at 38.70, "=1" at 39.82).
- CAMERA MOVEMENT: none.
- TRANSITIONS: morph + card enter.
- EDUCATIONAL PURPOSE: shows the direct substitution collapsing to the final answer without arithmetic.
- VISUAL HIERARCHY: final "1" is brightest element.
- ATTENTION MANAGEMENT: single line, deliberately sparse.
- MOTION NOTES: card holds through 45.74 (covers beats 5 and 6 - the "no calculation needed" line is a verbal reinforcement over the same static card, no new visual needed).
- CONTINUITY FROM PREVIOUS SCENE: Step 2 card mid-morph into `#stack-step2` (ends 31.04) as Step 3's cardEnter begins.

### Scene 6 - Options Reveal (Step3 morph 46.0, options 46.16-51.64)
- TIMESTAMP: 46.16
- VOICEOVER: "Hence, the required answer is one. So the correct option is option C."
- VISUAL OBJECTIVE: reveal options with C highlighted as final answer confirms.
- SCREEN LAYOUT: Step 3 morphs into `#stack-step3` (left:100px, top:590px); `#q-pinned` recenters; options grid appears.
- ON-SCREEN ELEMENTS: stack column (G/1/2/3 circles + connector lines), pinned+recentered question card, 2x2 options grid with C in `.correct` green state.
- ANIMATION DETAILS: `apt.morphToStack(tl,"#card-step3 .solution-card","#stack-step3 .stack-card",46.0)`; `apt.stackLineGrow(tl,"#line-2-3",46.0)`; `apt.recenterForOptions(tl,"#q-pinned",160,180,46.0)`; `apt.fadeIn(tl,"#options-reveal",46.6)`; `apt.optionsStagger(tl,".opt-btn",47.0)`; `apt.correctPulse(tl,".opt-btn.correct",48.0)`.
- CAMERA MOVEMENT: none.
- TRANSITIONS: question recenters, grid staggers in.
- EDUCATIONAL PURPOSE: connects derived answer back to multiple-choice options.
- VISUAL HIERARCHY: green pulse on option C is final visual beat.
- ATTENTION MANAGEMENT: stack column stays put, only right side changes.
- MOTION NOTES: correct pulse timed near "one" (47.96-48.86), holds through "option C" (49.84-51.64).
- CONTINUITY FROM PREVIOUS SCENE: Step 3's card mid-morph into `#stack-step3` as options fade in right after.

### Scene 7 - End Hold (51.64-53.1s)
- TIMESTAMP: 51.64
- VOICEOVER: (silence, tail of voiceover)
- VISUAL OBJECTIVE: settle on final answer state before fade-out.
- SCREEN LAYOUT: unchanged from Scene 6.
- ON-SCREEN ELEMENTS: full stack column, pinned question, options grid with green C.
- ANIMATION DETAILS: `apt.fadeOut(tl,"#root > div",52.1,1.0)` fades every top-level element together.
- CAMERA MOVEMENT: none.
- TRANSITIONS: single synchronized fade-out.
- EDUCATIONAL PURPOSE: gives viewer a clean beat to register the final answer.
- VISUAL HIERARCHY: n/a, fading uniformly.
- ATTENTION MANAGEMENT: nothing new, pure hold then fade.
- MOTION NOTES: matches template's END_FADE pattern.
- CONTINUITY FROM PREVIOUS SCENE: direct continuation of Scene 6's settled state, held ~0.5s before fade begins.

## PART 3: Asset List Required

- No illustration assets - pure identity-recall question, no diagram needed.
- Shared assets from `_template/assets/` (serial-num-badge.svg, logo.png) copied locally per Step 5B.

## PART 4: Animation Complexity Notes

- No illustration build sequence - question pins directly into Given card (Scene 2), skipping the diagram phase entirely.
- Three `morphToStack` beats matching Given/Step1/Step2/Step3 stack cards (Step3 also morphs to stack right before options).
- Step 3 card holds across two narration beats (substitution result + "no calculation needed" reinforcement) since both describe the same static visual state - no new element needed for beat 6.
- No `apt.stepFlow` used (deprecated per README). No `apt.ambientLoop` used (no long silent stretch, no pinned illustration icon to bob).
- Ballpark timeline length: 53.1s (voiceover ends 51.64s + ~1.5s end-fade hold).

## PART 5: Master Timeline Overview

```
0.0     Question card + SerialNum enter (heroEnterLowered)
3.6     Card rises to rest position
10.4    PIN_TIME - question glides to pinned slot (no illustration this question)
11.2    GIVEN_TIME - Given card enters (sin^2 30 degree + cos^2 30 degree = ?)
13.46   Given -> stack (morphToStack)
13.66   Step 1 card enters (sin^2 theta + cos^2 theta = 1)
22.20   Step 1 -> stack (morphToStack) + line-g-1 grows
22.40   Step 2 card enters (theta -> 30 degree substitution)
30.24   Step 2 -> stack (morphToStack) + line-1-2 grows
30.44   Step 3 card enters (sin^2 30 + cos^2 30 = 1), holds through "no calculation needed" line
46.0    Step 3 -> stack (morphToStack) + line-2-3 grows, question recenters
46.6    Options grid fades in
47.0    Options stagger in
48.0    Option C correct-pulse
52.1    END_FADE_TIME - full frame fades out
53.1    End
```
