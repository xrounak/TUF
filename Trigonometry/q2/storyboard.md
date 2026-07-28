# Storyboard - Trigonometry q2 (sin 30 + cos 60)

## PART 1: Narration Beat Analysis

| Beat | Time | Narration | Purpose | Focus | Visual |
|------|------|-----------|---------|-------|--------|
| 1 | 0.10-4.72 | "So welcome back again, it's time to solve one more problem." | Intro | Whole frame | Question card rises into view |
| 2 | 5.44-15.72 | "Now, in this problem, we are given sine 30 degrees and cosine 60 degrees. The question is asking us to find their sum." | State problem | Question text | Question stays centered, full |
| 3 | 16.32-23.16 | "Now, the important point here is that these are standard trigonometric values. We should remember them because they are used very often." | Concept reminder | Pinned question | Question pins to top, empty solution area for a beat |
| 4 | 23.68-28.68 | "Sine 30 degree is equal to one by two, and cosine 60 degree is also equal to one by two." | Give standard values | Given card | Given card enters, values reveal word by word |
| 5 | 29.34-34.02 | "Now that we know both values, let us substitute them into the given expression." | Bridge to computation | Given card morphing | Given card morphs into stack |
| 6 | 34.38-38.50 | "So we get one half plus one half, which is equal to one." | Compute | Step 1 card | Step 1 card enters, sum revealed |
| 7 | 39.14-41.96 | "Done. So the final answer will be one." | Confirm result | Step 1 card morphing | Step 1 morphs into stack |
| 8 | 42.54-45.72 | "Hence, the correct option is option B." | Reveal answer | Options grid | Options fade in, stagger, B pulses green |

Total video length: ~46.5s. Phase 1 illustration: a standard-values table (sin/cos/tan for 0°, 30°, 60°, 90°, with tan 90° shown as ∞), drawn row by row from 5.0s to ~19.5s while the narration recaps "these are standard trigonometric values... we should remember them."

## PART 2: Scene-by-Scene Storyboard

### Scene 1 - Question Enter (0.0-4.72s)
- VOICEOVER: "So welcome back again, it's time to solve one more problem."
- VISUAL OBJECTIVE: Establish the question, calm open.
- SCREEN LAYOUT: `#q-full-card` centered per template.html, `#serial-num` top-left.
- ON-SCREEN ELEMENTS: Question text "What is the sum of sin 30 degrees and cos 60 degrees?" with `sin 30`, `cos 60` in `.num` accent. Serial badge "Q".
- ANIMATION DETAILS: `apt.heroEnterLowered(tl, "#q-full-card", 180, 4.72)` - starts lowered, rises at 4.72 (end of opening line). Serial badge fromTo at 0.8 (scale/rotation pop, mirrors hero offset), rises with card at 4.72.
- CAMERA MOVEMENT: none (static frame, motion is internal).
- TRANSITIONS: n/a (first scene).
- EDUCATIONAL PURPOSE: orient viewer to the exact question before any math.
- VISUAL HIERARCHY: question card dominant, badge secondary.
- ATTENTION MANAGEMENT: single focal element, no competing motion.
- MOTION NOTES: back.out(1.4) ease reads as a confident settle, not a bounce.
- CONTINUITY FROM PREVIOUS SCENE: n/a, this is the opening frame.

### Scene 2 - Trig Table Builds + Question Pins (5.0-22.3s)
- VOICEOVER: "...we are given sine 30 degrees and cosine 60 degrees. The question is asking us to find their sum. Now, the important point here is that these are standard trigonometric values. We should remember them because they are used very often."
- VISUAL OBJECTIVE: Show the full standard-value table as a memory aid, then pin question + table together to make room for the solution area.
- SCREEN LAYOUT: `#illustration` table centered below the question card (left:50%, top:340px, width:920px), 4-column grid (Angle/sin/cos/tan) x 5 rows (header + 0°/30°/60°/90°). Pins to top at 21.5s (`#q-pinned` + `#illus-pinned`, the latter scaled 0.42x at left:500px, top:170px).
- ON-SCREEN ELEMENTS: table rows `#trig-row-head`, `#trig-row-0`, `#trig-row-30`, `#trig-row-60`, `#trig-row-90` - values use `.frac` for 1/2, √3/2, 1/√3, plain text for 0/1/√3/∞. tan 90° cell reads "∞".
- ANIMATION DETAILS: each row `tl.fromTo(sel, {opacity:0,y:16}, {opacity:1,y:0,duration:0.5,ease:"power2.out"}, t)` at t = 5.0, 8.0, 11.0, 14.0, 17.0 (header, 0°, 30°, 60°, 90°). At 21.5s: `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 21.5)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 21.5)` - question and table glide up together. `apt.fadeOut(tl, "#serial-num", 21.5, 0.5)` in step with the glide.
- CAMERA MOVEMENT: table rows settle upward into place one at a time; at 21.5s the whole question+table block glides to the pinned position.
- TRANSITIONS: row fade-ins are simple opacity/y tweens (no dedicated helper needed for a static reference table); the 21.5s pin is a pinFlow glide, not a cut.
- EDUCATIONAL PURPOSE: gives the viewer the full reference table (not just the two values this question needs) before narrowing to the specific computation - reinforces "learn the whole table, use two values from it."
- VISUAL HIERARCHY: header row and sin/cos/tan values in `--primary`, angle labels in plain text - table reads as a clean reference, not competing with the question above it.
- ATTENTION MANAGEMENT: rows build exactly on the "remember them" narration beat, so the table's growth has a spoken reason at every step, no dead time.
- MOTION NOTES: 0.5s per-row fade is deliberately calmer than `cardEnter`'s back.out pop - this is reference material, not an active solution card.
- CONTINUITY FROM PREVIOUS SCENE: the question card that rose in Scene 1 stays in place while the table builds beneath it, then both glide to their pinned slots together at 21.5s - one continuous unit, not two independent elements.

### Scene 2B - Mini Table Clears (21.5-24.08s)
- VOICEOVER: (silence/breath before) "Sine 30 degree is equal to..."
- VISUAL OBJECTIVE: Let the pinned mini table hold briefly as a bridge, then clear right as the Given card is about to restate the same two values in full.
- SCREEN LAYOUT: `#illus-pinned` (scaled table) visible 21.5-23.68s.
- ANIMATION DETAILS: `apt.fadeOut(tl, "#illus-pinned", 23.68, 0.4)` - fades exactly at GIVEN_TIME, handing off to the Given card.
- EDUCATIONAL PURPOSE: avoids showing the same two values twice on screen at once (mini table + Given card).
- CONTINUITY FROM PREVIOUS SCENE: same table object from Scene 2, now shrunk and pinned, clearing to make room for Scene 3.

### Scene 3 - Given Card (23.68-29.5s)
- VOICEOVER: "Sine 30 degree is equal to one by two, and cosine 60 degree is also equal to one by two."
- VISUAL OBJECTIVE: Surface the two standard values the viewer must recall.
- SCREEN LAYOUT: `#card-given .solution-card` centered per template (left:640px, top:480px).
- ON-SCREEN ELEMENTS: chip "Given", math block two lines: `sin 30° = 1/2` and `cos 60° = 1/2` (using `.frac` component, values in `.hi`).
- ANIMATION DETAILS: `apt.cardEnter(tl, "#card-given .solution-card", 23.68)`. `apt.textReveal(tl, "#card-given .math")` word-by-word: "sin"(23.68) "30°"(24.20) "="(24.60) "1/2"(24.80, `.hi`) on line 1; "cos"(26.10) "60°"(26.60) "="(27.10) "1/2"(27.40, `.hi`) on line 2.
- CAMERA MOVEMENT: none.
- TRANSITIONS: cardEnter back.out(1.4) pop.
- EDUCATIONAL PURPOSE: the two facts the entire answer depends on.
- VISUAL HIERARCHY: both fraction values equally weighted (both `.hi`), no false emphasis since they're equal.
- ATTENTION MANAGEMENT: word-sync reveal paces the viewer's eye with the narration exactly.
- MOTION NOTES: standard cardEnter + textReveal, no custom animation.
- CONTINUITY FROM PREVIOUS SCENE: opens directly under the now-pinned question, in the empty canvas Scene 2 prepared.

### Scene 4 - Given Morphs to Stack (29.5-30.3s)
- VOICEOVER: "Now that we know both values, let us substitute them into the given expression."
- VISUAL OBJECTIVE: Archive the Given values into the left stack while the narration bridges to computation.
- SCREEN LAYOUT: `#stack-given .stack-card` at left:100px, top:140px (already in DOM, opacity 0).
- ON-SCREEN ELEMENTS: stack card with `.step-circle` "G", collapsed math (plain, no `.rv`).
- ANIMATION DETAILS: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 29.5)` - 0.8s, power2.inOut.
- CAMERA MOVEMENT: card slides center-to-left, shrinks.
- TRANSITIONS: the morph itself is the transition.
- EDUCATIONAL PURPOSE: keeps solved facts visible for reference through the rest of the video.
- VISUAL HIERARCHY: stack card recedes visually (light-blue bg, no shadow) so the next active card reads as "current focus".
- ATTENTION MANAGEMENT: the "let us substitute" narration line covers the full morph plus a breathing gap before Step 1 enters.
- MOTION NOTES: 0.8s built-in duration, not adjustable.
- CONTINUITY FROM PREVIOUS SCENE: same Given card content and position as Scene 3's ending frame, now mid-glide into the stack.

### Scene 5 - Step 1 (34.38-39.5s)
- VOICEOVER: "So we get one half plus one half, which is equal to one. Done."
- VISUAL OBJECTIVE: Show the substitution and the sum.
- SCREEN LAYOUT: `#card-step1 .solution-card` centered (left:640px, top:460px).
- ON-SCREEN ELEMENTS: chip "Step 1", math: `1/2 + 1/2 = 1` (using `.frac` for both halves, `.ans` on the final `1`).
- ANIMATION DETAILS: `apt.cardEnter(tl, "#card-step1 .solution-card", 34.38)`. `apt.textReveal(tl, "#card-step1 .math")`: "1/2"(35.40) "+"(36.10) "1/2"(36.40) "="(37.66) "1"(38.10, `.ans`).
- CAMERA MOVEMENT: none.
- TRANSITIONS: cardEnter pop.
- EDUCATIONAL PURPOSE: the actual arithmetic step, one half plus one half.
- VISUAL HIERARCHY: final `1` in `.ans` green-adjacent emphasis class, drawing the eye to the answer.
- ATTENTION MANAGEMENT: the G stack card sits quietly to the left as passive reference while this card is active.
- MOTION NOTES: standard cardEnter + textReveal only, no extra pulse (avoids double-animating the `.ans` span).
- CONTINUITY FROM PREVIOUS SCENE: enters into the same center slot the Given card just vacated via its morph in Scene 4, after the ~1s breathing gap (30.3 to 34.38 is longer here because the bridging narration line runs that long).

### Scene 6 - Step 1 Morphs to Stack + Options Reveal (39.5-46.5s)
- VOICEOVER: "So the final answer will be one. Hence, the correct option is option B."
- VISUAL OBJECTIVE: Archive the last step, then reveal the four options with B highlighted.
- SCREEN LAYOUT: `#stack-step1 .stack-card` at left:100px, top:290px. `#options-reveal` `.pinned-col` per template, options grid 2x2.
- ON-SCREEN ELEMENTS: stack card "1" with collapsed math `1/2 + 1/2 = 1`. Connector line `#line-g-1` between G and 1 circles. Options A "1/2", B "1" (correct), C "sqrt(3)", D "2".
- ANIMATION DETAILS: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 39.5)`; `apt.stackLineGrow(tl, "#line-g-1", 39.5)` (line grown once both G and 1 circles are on screen). `apt.fadeIn(tl, "#options-reveal", 40.2)`. `apt.optionsStagger(tl, ".opt-btn", 40.6)`. `apt.correctPulse(tl, ".opt-btn.correct", 44.0)` (times to "option B" 43.30-45.72). `apt.fadeOut(tl, "#root > div", 46.5, 1.2)` end fade.
- CAMERA MOVEMENT: none new; the pinned question stays put (no `recenterForOptions` needed here since there's no illustration to clear and only one stack card - options grid uses `.pinned-col` default position).
- TRANSITIONS: morph, then fadeIn/stagger for options.
- EDUCATIONAL PURPOSE: connects the computed sum (1) directly to option B's value.
- VISUAL HIERARCHY: correct option B pulses green, unambiguous final answer.
- ATTENTION MANAGEMENT: single new focal group (options grid) after the stack settles, nothing else competes.
- MOTION NOTES: `optionsStagger` 0.12s stagger across 4 buttons; `correctPulse` back.out(1.5) yoyo.
- CONTINUITY FROM PREVIOUS SCENE: Step 1 card mid-morph from Scene 5 lands in the stack exactly as the options container begins fading in, one continuous settle-then-reveal beat.

## PART 3: Asset List Required
- None beyond the shared design system (`design-system.css`, `animations.js`, `assets/`). No SVG/PNG illustration asset - the Phase 1 illustration is a pure-HTML/CSS trig value table (`#trig-table`), built from design-system tokens (`var(--primary)`, `var(--primary-light)`, `var(--text)`, `var(--bg)`, `var(--font)`) and the existing `.frac` component, no new colors or components invented.

## PART 4: Animation Complexity Notes
- 1 Given card + 1 Step card (simplest step count in the series). Two stack cards total (G, 1), one connector line.
- Phase 1 illustration (trig table) uses `apt.pinFlow` like a normal illustration would, pinning alongside the question at PIN_TIME=21.5s, then clears via `apt.fadeOut` at GIVEN_TIME once the Given card is about to restate the same values - avoids the "illustration must persist through Phase 2 unless replaced" rule reading as a violation, since it hands off cleanly to the Given card rather than just vanishing.
- Row-by-row table build uses plain `tl.fromTo` opacity/y tweens (not a named `apt.*` helper) since no existing helper covers a static reference-table reveal - this is a one-off tween pattern, not a new reusable animation.
- No `apt.ambientLoop` needed - the table itself is the active content during 5.0-21.5s, nothing sits idle.
- No `apt.recenterForOptions` shift needed beyond the template default, since the table has already cleared out by GIVEN_TIME, well before Phase 3.

## PART 5: Master Timeline Overview
```
0.0   Background + bottomStrip + topic + logo (always on)
0.3   q-full-card hero enter (lowered)
0.8   serial-num pop (lowered, mirrors card)
4.72  q-full-card + serial-num rise to rest
5.0   trig-row-head fades in
8.0   trig-row-0 fades in
11.0  trig-row-30 fades in
14.0  trig-row-60 fades in
17.0  trig-row-90 fades in (tan 90° = ∞)
21.5  PIN_TIME - q-full-card -> q-pinned, illustration -> illus-pinned (pinFlow, 0.8s each), serial-num fades out
23.68 GIVEN_TIME - illus-pinned fades out, Given card enters, textReveal (sin30=1/2, cos60=1/2)
29.5  Given card morphs to stack-given (0.8s)
34.38 Step 1 card enters, textReveal (1/2+1/2=1)
39.5  Step 1 card morphs to stack-step1 (0.8s), line-g-1 grows
40.2  options-reveal fades in
40.6  options stagger in
44.0  correctPulse on option B
46.5  END_FADE_TIME - everything fades out together
```
