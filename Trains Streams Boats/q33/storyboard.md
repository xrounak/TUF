# q33 - Trains, Streams and Boats - Storyboard

## PART 1: Narration Beat Analysis

| # | Time | Narration | Purpose | Focus | Visual objective |
|---|------|-----------|---------|-------|-------------------|
| 1 | 0.10-3.50 | Welcome back, time to solve one more problem | Hook | Question card | Card rises into view |
| 2 | 4.04-14.90 | Read question (log 4 km/h with current, boat still-water 12 km/h, find upstream speed) | Setup | Question + illustration | River with drifting log + stationary boat |
| 3 | 15.32-22.60 | "Given," log=4 km/h, boat still-water=12 km/h | Restate knowns | Given card | cardEnter + word reveal |
| 4 | 23.02-32.06 | Define b=boat still-water speed, c=current speed; confirm b=12 | Variable setup | Given card (same) | reveal continues, holds |
| 5 | 32.42-44.22 | Need c; log has no engine, moves with current, so c=speed of log | Reasoning | Step 1 card | reveal builds toward c=4 |
| 6 | 44.78-49.34 | c=4 km/h; upstream means against current | Result of step 1 | Step 1 -> stack, Step 2 opens | morph + new card |
| 7 | 49.88-56.80 | current slows boat; formula Upstream = b - c | Formula | Step 2 card | reveal formula |
| 8 | 57.26-62.50 | substitute 12-4, answer 8 km/h | Final compute | Step 2 card | reveal answer |
| 9 | 63.20-69.84 | restate answer 8 km/h, correct option A | Confirmation | Options grid | stagger + correctPulse on A |

## PART 2: Scene-by-Scene Storyboard

### Scene 1 - Question intro
TIMESTAMP 0-3.5s. VOICEOVER: "So welcome back again, it's time to solve one more problem." VISUAL OBJECTIVE: establish frame. SCREEN LAYOUT: `#q-full-card` centered, lowered by 180px (heroEnterLowered). ON-SCREEN ELEMENTS: dotted grid, bottom strip, topic name "Trains, Streams and Boats", logo, serial badge "Q". ANIMATION DETAILS: `apt.heroEnterLowered(tl,"#q-full-card",180,3.5)`; badge mirrors same lowered->rise tween. CAMERA MOVEMENT: none (static frame, motion is internal). TRANSITIONS: card+badge rise together at 3.5s. EDUCATIONAL PURPOSE: orient viewer before reading. VISUAL HIERARCHY: question card dominant. ATTENTION MANAGEMENT: single focal card. MOTION NOTES: back.out(1.4) ease on rise. CONTINUITY FROM PREVIOUS SCENE: first scene, no prior state.

### Scene 2 - Question read + illustration
TIMESTAMP 4.04-14.9s. VOICEOVER: full question text. VISUAL OBJECTIVE: show a river with current flowing, a floating log drifting with the current, and a boat with still-water speed labelled. SCREEN LAYOUT: `#illustration` area (1400x300) below question card. ON-SCREEN ELEMENTS: SVG river band (two wavy `--topic` gray stroke lines), a small log (rounded rect, `--topic` fill) drifting left-to-right along the river, a flat 2D boat (hull triangle + mast, `--primary` fill) sitting mid-river, small tag "4 km/h" near the log, small tag "12 km/h" near the boat. ANIMATION DETAILS: log translates from x:0 to x:520 over 10.5s (`power1.inOut`), tags fade in with `apt.fadeIn` at their own narration times (log tag at 5.7s when "four kilometer" is spoken in Scene 2's narration window per script pacing, boat tag at 10.0s when "twelve kilometers" is spoken). Boat bobs gently via a small finite y-oscillation (2 cycles, sine.inOut, bounded 4-14s window - not `apt.ambientLoop` since illustration isn't pinned yet, but same finite-rep pattern). CAMERA MOVEMENT: none. TRANSITIONS: none within scene. EDUCATIONAL PURPOSE: visually plant "log = current speed" and "boat = still-water speed" before the Given card restates them numerically. VISUAL HIERARCHY: log motion draws eye first (novel), boat second. ATTENTION MANAGEMENT: only one moving element (log) at a time keeps focus clear. MOTION NOTES: drift distance/duration chosen so log crosses river before PIN_TIME. CONTINUITY FROM PREVIOUS SCENE: question card already risen and static from Scene 1; illustration fades in beneath it without disturbing the card.

### Scene 3 - Pin to top
TIMESTAMP 14.9s (PIN_TIME). VISUAL OBJECTIVE: move question+illustration to the pinned slot at top, freeing center stage for solution cards. ANIMATION DETAILS: `apt.pinFlow(tl,"#q-full-card","#q-pinned",14.9)`, `apt.pinFlow(tl,"#illustration","#illus-pinned",14.9)`, `apt.fadeOut(tl,"#serial-num",14.9,0.5)`. TRANSITIONS: real glide, 0.8s, `power2.inOut`. CONTINUITY FROM PREVIOUS SCENE: illustration's log/boat/tags carry their current on-screen state into the pinned copy (pinned copy shows the same static log+boat, no further drift needed since setup is done).

### Scene 4 - Given card
TIMESTAMP 15.6s (GIVEN_TIME). VOICEOVER: "Given, speed of the floating log = 4 km/h. Boat's speed in still water = 12 km/h." SCREEN LAYOUT: `#card-given .solution-card` centered per template coordinates. ON-SCREEN ELEMENTS: chip "Given", two lines of `.math` with `.hi` highlighted values. ANIMATION DETAILS: `apt.cardEnter(tl,"#card-given .solution-card",15.6)` then `apt.textReveal` word-synced at 16.12 (log=4) and 19.38 (boat=12). Card holds through the b/c variable-naming narration (23.02-32.06) since those variables aren't shown as new visual elements (avoids inventing an extra card for a purely verbal aside). MOTION NOTES: `back.out(1.4)`. CONTINUITY FROM PREVIOUS SCENE: opens right after the pin glide settles, in the same center slot the future step cards will reuse.

### Scene 5 - Given -> stack, Step 1 opens
TIMESTAMP 32.3s. VOICEOVER at this point has just confirmed b=12 and is asking "now we need to find c". ANIMATION DETAILS: `apt.morphToStack(tl,"#card-given .solution-card","#stack-given .stack-card",32.3)`; `apt.cardEnter(tl,"#card-step1 .solution-card",33.3)`. ON-SCREEN ELEMENTS (Step 1): chip "Step 1", line "A floating log has no engine, it moves with the current" (line-level reveal, paraphrased), then "c = speed of current = speed of log = 4 km/h" (word-level reveal for the equation) synced to 34.42 and 44.78. EDUCATIONAL PURPOSE: connect the illustration's floating-log concept to the algebraic fact c=4. CONTINUITY FROM PREVIOUS SCENE: Given card is still completing its morph into the left stack as Step 1's cardEnter begins; the reasoning card takes over the same center slot Given just vacated.

### Scene 6 - Step 1 -> stack, Step 2 opens
TIMESTAMP 45.3s. VOICEOVER: "Now, when a boat moves upstream, it moves against the current. The current slows the boat down. So Upstream Speed = b - c." ANIMATION DETAILS: `apt.morphToStack(tl,"#card-step1 .solution-card","#stack-step1 .stack-card",45.3)`, `apt.stackLineGrow(tl,"#line-g-1",45.3)`; `apt.cardEnter(tl,"#card-step2 .solution-card",46.3)`. ON-SCREEN ELEMENTS (Step 2): chip "Step 2", line "Upstream Speed = b - c" (word reveal at 52.30), "= 12 - 4" (word reveal at 57.26), "= 8 km/h" (`.ans` reveal at 61.5). CONTINUITY FROM PREVIOUS SCENE: Step 1's card is mid-morph into its stack slot (G-1 connector line growing in parallel) as Step 2's card enters the same center position.

### Scene 7 - Step 2 -> stack, options reveal
TIMESTAMP 63.0s. ANIMATION DETAILS: `apt.morphToStack(tl,"#card-step2 .solution-card","#stack-step2 .stack-card",63.0)`, `apt.stackLineGrow(tl,"#line-1-2",63.0)`; `apt.fadeIn(tl,"#options-reveal",63.3)`, `apt.optionsStagger(tl,".opt-btn",63.9)`, `apt.correctPulse(tl,".opt-btn.correct",67.5)` (times with narration saying "Option A" at 67.5-69.84). END FADE at 68.6 over 1.2s to close with the audio tail. CONTINUITY FROM PREVIOUS SCENE: Step 2 card is completing its morph into the stack (1-2 connector growing) as the options grid fades in beside the now-three-deep stack column.

## PART 3: Asset List Required
- No external SVG files needed; illustration built from inline SVG (river lines, log shape, boat shape) using only design-system color tokens.
- design-system.css, animations.js, assets/ copied from `_template/` per Step 5B.

## PART 4: Animation Complexity Notes
- Only 2 solution steps (Given + Step 1 + Step 2) - problem has no third computed quantity, so no Step 3/stack-step3/line-2-3 exist in this composition (removed from the copied template).
- Illustration drift (log crossing the river) is a single bounded GSAP tween (0->10.5s), not a repeating loop - safe for scrub/seek.
- Boat bob is a finite 2-cycle sine yoyo, bounded 4-14s, matching the ambient-loop pattern's finite-rep rule even though it's pre-pin (not `apt.ambientLoop` itself, which is reserved for the pinned icon phase).

## PART 5: Master Timeline Overview
```
0.0    bg/topic/logo/serial visible
0.0    q-full-card heroEnterLowered start
3.5    q-full-card + serial rise to rest
4.0    illustration fades in, log begins drift, boat bob starts
5.7    log tag "4 km/h" fades in
10.0   boat tag "12 km/h" fades in
14.5   log drift completes
14.9   PIN_TIME - pinFlow (question+illustration to pinned slot)
15.6   GIVEN_TIME - Given card enters
16.12  reveal "log = 4 km/h" line
19.38  reveal "boat = 12 km/h" line
32.3   Given -> stack (morph)
33.3   Step 1 card enters
34.42  reveal "log has no engine..." line
44.78  reveal "c = 4 km/h"
45.3   Step 1 -> stack (morph), line-g-1 grows
46.3   Step 2 card enters
52.30  reveal "Upstream Speed = b - c"
57.26  reveal "= 12 - 4"
61.5   reveal "= 8 km/h"
63.0   Step 2 -> stack (morph), line-1-2 grows
63.3   options-reveal fades in
63.9   options stagger in
67.5   correctPulse on Option A
68.6   end fade (1.2s), closes at 69.8s with audio
```
