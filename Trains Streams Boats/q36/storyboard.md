# Q36 - Trains, Boats and Streams - Storyboard

Question: A 240 m long train crosses a 260 m platform in 25 seconds. Find the speed of the train in km/h.
Correct answer: C (72 km/h)
Video duration: 71.72s (from transcript.json)

---

## PART 1: Narration Beat Analysis

| Beat | Time (s) | Narration | Educational Purpose | Attention Focus | Visual Objective |
|------|----------|-----------|---------------------|------------------|-------------------|
| 1 | 0.10-4.48 | "So welcome back again. It's time to solve one more problem." | Hook / intro | Center screen | Question card + serial badge enter |
| 2 | 5.20-8.68 | "Now, in this problem, we have a train of length two hundred forty meter." | Establish train length | Train icon | Train icon fades in with 240 m label |
| 3 | 9.32-13.70 | "It crosses a platform of length two hundred sixty meter in twenty-five seconds." | Establish platform length + time | Platform icon | Platform icon + 260 m / 25 s label fades in |
| 4 | 10.2-21.6 | Runs under Beats 4-6's narration (14.20-28.52) | Demonstrate "crosses a platform" as real motion, not a static hold | Train sliding across platform, growing measure line | Distance chip fades in (10.2), train physically slides across the platform (12.5-21.0), measure line grows in sync tracking the distance covered, chip text updates to the 240+260=500m total and pulses (21.3-22.0) - see revised Scene 4 below (replaces the original static-hold + single-pulse plan) |
| 5 | 18.18-22.86 | "Now, the important point here is, crosses a platform. What does this actually mean?" | Flag the trap/key concept | Narration overlaps the train-crossing motion already in progress from Beat 4 | (folded into Beat 4's continuous motion - no separate static beat) |
| 6 | 23.20-28.52 | "When a train completely crosses a platform, it has to cover its own length as well as the length of the platform." | Explain the concept | Narration lands right as the measure line finishes growing and the chip updates to the final total | (folded into Beat 4 - the visual payoff of the crossing motion lands here) |
| 7 | 28.98-37.42 | "So the total distance covered will be train length plus platform length. That is two hundred forty plus two hundred sixty equals five hundred meter." | Given / Step 1 setup | Given card | Pin flow to Phase 2, Given card enters with the math |
| 8 | 37.80-39.02 | "Got it? Perfect." | Confirmation beat | Given card | Hold, no new element |
| 9 | 39.64-41.98 | "Now that we have the total distance, we can find the speed." | Transition to Step 2 | Given card morphs to stack | morphToStack fires |
| 10 | 42.30-45.56 | "We know speed equals distance divided by time." | State the formula | Step 1 card | Step 1 card enters with formula |
| 11 | 46.04-54.08 | "Putting the values, speed equals five hundred divided by twenty-five. After solving this, we get speed equals twenty meters per second." | Solve Step 1 | Step 1 card | Fraction reveals, result "20 m/s" reveals |
| 12 | 54.48-61.22 | "Now, the question is asking for the answer in kilometers per hour, so we convert it using twenty times eighteen by five." | Step 2 setup | Step 1 morphs to stack, Step 2 card enters | morphToStack then cardEnter with conversion formula |
| 13 | 61.60-64.20 | "That gives us seventy-two kilometers per hour." | Step 2 result | Step 2 card | Result "72 km/h" reveals |
| 14 | 64.96-71.72 | "Hence, the speed of the train is seventy-two kilometer per hour. So the correct option is option C." | Final answer | Options grid | Step 2 morphs to stack, options reveal, correct pulse on C |

---

## PART 2: Scene-by-Scene Storyboard

### SCENE 1 - Question Reveal
**TIMESTAMP:** 0.0 - 0.3s
**VOICEOVER:** "So welcome back again, it's time to solve one more problem."
**VISUAL OBJECTIVE:** Establish the question on screen.
**SCREEN LAYOUT:** Full-size QuestionCard centered top-half, SerialNum badge top-left overlapping the card.
**ON-SCREEN ELEMENTS:** `#q-full-card` with text "A 240 m long train crosses a platform of length 260 m in 25 seconds. Find the speed of the train in km/h." (240 m, 260 m, 25 seconds, km/h highlighted in `--primary`). `#serial-num` badge with fixed "Q" digit. Background dotted-grid + bottomStrip + topic name "Trains, Boats and Streams" + logo, all visible from t=0.
**ANIMATION DETAILS:** `apt.questionEnter(tl, "#q-full-card", 0.3)` - fade + scale + back.out(1.4), 0.7s. `apt.serialEnter(tl, "#serial-num", 0.8)` - pop with rotation, 0.55s.
**CAMERA MOVEMENT:** Static.
**TRANSITIONS:** None yet.
**EDUCATIONAL PURPOSE:** Present the problem statement in full before diving in.
**VISUAL HIERARCHY:** Question card is the only focal element.
**ATTENTION MANAGEMENT:** Single element on screen, no distraction.
**MOTION NOTES:** Standard entrance, no custom motion.
**CONTINUITY FROM PREVIOUS SCENE:** Opening scene - background layers (dotted grid, bottomStrip, topic name, logo) fade in simultaneously with the question card, establishing the frame that persists through the whole video.

---

### SCENE 2 - Train Length Reveal
**TIMESTAMP:** 5.2s
**VOICEOVER:** "Now, in this problem, we have a train of length two hundred forty meter."
**VISUAL OBJECTIVE:** Introduce the train icon with its length label.
**SCREEN LAYOUT:** `#illustration` container centered below the question card (left:50%, top:370px, width:1500px, height:330px). Train icon positioned left-of-center within the illustration area.
**ON-SCREEN ELEMENTS:** `#illus-train-wrap` containing `#illus-train` (train.svg) and `#illus-train-label` reading "240 m" beneath it in `--primary`, 24px.
**ANIMATION DETAILS:** `apt.fadeIn(tl, "#illus-train", 5.2)` then `apt.fadeIn(tl, "#illus-train-label", 5.6)`, 0.4s fades each.
**CAMERA MOVEMENT:** Static.
**TRANSITIONS:** Simple fade-in, no slide.
**EDUCATIONAL PURPOSE:** Anchor the first given value (train length) to a concrete visual.
**VISUAL HIERARCHY:** Train icon + label become the new focal point while question card remains visible above.
**ATTENTION MANAGEMENT:** Only the train appears; platform is not yet on screen so there's no competing element.
**MOTION NOTES:** Plain fade, no bounce - keeps it calm since this is just an information reveal, not a celebratory beat.
**CONTINUITY FROM PREVIOUS SCENE:** The question card from Scene 1 is still fully visible and static at the top; the illustration area beneath it, previously empty, now populates with the train - a continuous top-to-bottom read.

---

### SCENE 3 - Platform Length + Time Reveal
**TIMESTAMP:** 9.32s
**VOICEOVER:** "It crosses a platform of length two hundred sixty meter in twenty-five seconds."
**VISUAL OBJECTIVE:** Introduce the platform icon to the right of the train, with its length and crossing time.
**SCREEN LAYOUT:** `#illus-platform-wrap` positioned right of `#illus-train-wrap` within the same `#illustration` container, leaving a visible gap between train and platform.
**ON-SCREEN ELEMENTS:** `#illus-platform` (train-station.svg) + `#illus-platform-label` reading "260 m · 25 s" beneath it, `--primary`, 24px.
**ANIMATION DETAILS:** `apt.fadeIn(tl, "#illus-platform", 9.32)` then `apt.fadeIn(tl, "#illus-platform-label", 9.8)`.
**CAMERA MOVEMENT:** Static.
**TRANSITIONS:** Fade-in.
**EDUCATIONAL PURPOSE:** Complete the visual picture - both given quantities now visible side by side.
**VISUAL HIERARCHY:** Train and platform equally weighted, side by side with a clear gap between them.
**ATTENTION MANAGEMENT:** The gap between train and platform is deliberately visible - it becomes the space the train physically crosses in Scene 4's motion beat.
**MOTION NOTES:** Same plain fade as Scene 2 for consistency.
**CONTINUITY FROM PREVIOUS SCENE:** Train icon and its label from Scene 2 remain static and fully visible on the left as the platform fades in on the right, completing one continuous illustration build.

---

### SCENE 4 - Distance Chip + Train Crosses Platform + Measure Line Grows
**TIMESTAMP:** 10.2s (chip) / 12.5s (crossing begins) / 21.3s (chip updates + pulse)
**VOICEOVER:** Spans Beats 4-6 (14.20-28.52): "The question is asking us to find the speed... the important point here is, crosses a platform... When a train completely crosses a platform, it has to cover its own length as well as the length of the platform."
**VISUAL OBJECTIVE:** Replace what was originally a long static hold (10-28s) with continuous, legible motion that dramatizes "crossing a platform" literally, since this stretch previously read as dead air on screen while the voiceover kept going.
**SCREEN LAYOUT:** `#illus-distance-chip` sits above the illustration, spanning its width, centered text. `#illus-measure-line` (4px solid `--primary`) sits beneath the train/platform icons, same left edge and width as the background `#illus-track`.
**ON-SCREEN ELEMENTS:** Distance chip (text swaps mid-scene from a setup line to the resolved sum), `#illus-train-wrap` (translates right), `#illus-measure-line` (grows under it).
**ANIMATION DETAILS:**
- `apt.fadeIn(tl, "#illus-distance-chip", 10.2)` - chip fades in reading "Distance to cover = Train + Platform".
- `tl.to("#illus-train-wrap", { x: 700, duration: 8.5, ease: "power2.inOut" }, 12.5)` - the train icon physically slides right, its front edge visually overlapping and passing the platform icon, landing at 21.0s. This is a direct `gsap.to` call (not an `animations.js` helper) since illustration motion is per-question custom content, same latitude q32's own illustration build used for its plain `tl.fromTo` track/platform reveal.
- `tl.fromTo("#illus-measure-line", {scaleX:0,opacity:0}, {scaleX:1,opacity:1,duration:8.5,ease:"power2.inOut"}, 12.5)` - a solid measure line grows in lockstep with the train's motion, its length always representing the distance already covered at that instant.
- `tl.call(...)` at 21.3s swaps the chip's text to "240 + 260 = 500 m total distance" the instant the crossing motion completes.
- `apt.emphasize(tl, "#illus-distance-chip", 21.6)` - 0.3s yoyo pulse on the chip to land the resolved number.
**CAMERA MOVEMENT:** Static - only the train icon and measure line move.
**TRANSITIONS:** Continuous tween, no cuts.
**EDUCATIONAL PURPOSE:** Make "train length + platform length" a literal, watchable distance being covered in real time, landing exactly as the narration explains the same concept in words (Beats 5-6).
**VISUAL HIERARCHY:** The moving train + growing line are the sole focal motion; the chip text confirms the payoff in words once the motion resolves.
**ATTENTION MANAGEMENT:** One continuous 8.5s motion replaces three previously separate static/pulse beats, keeping the eye engaged for the entire 10-22s span instead of holding on a frozen frame.
**MOTION NOTES:** This is the "big" Phase 1 illustration animation (previously planned as a dashed-track `apt.roadSweep`, revised here to an actual object translation + synced measure-line growth for a stronger demonstration). `apt.roadSweep(tl, "#illus-track", 4.8)` still runs earlier and separately, laying down the fainter background context line before this scene's crossing motion begins.
**CONTINUITY FROM PREVIOUS SCENE:** Picks up right after the platform icon lands (Scene 3, 9.32s) - the chip appears almost immediately after (10.2s) and the crossing motion begins moments later (12.5s), so the illustration never sits idle between Scene 3 and the pin flow at 28.98s.

---

### SCENE 7 - Pin Flow to Phase 2 + Given Card
**PIN_TIME:** 28.98s
**GIVEN_TIME:** 28.98s (narration starts stating the given math phrase immediately at "So the total distance covered will be" - no gap needed here since the concept was already demonstrated visually in Scene 4's crossing motion)
**VOICEOVER:** "So the total distance covered will be train length plus platform length. That is two hundred forty plus two hundred sixty equals five hundred meter."
**VISUAL OBJECTIVE:** Pin the question + illustration to the top, bring in the Given solution card with the total-distance math.
**SCREEN LAYOUT:** `#q-full-card` glides to `#q-pinned` (top, smaller). `#illustration` glides to `#illus-pinned` (small recap: single train+platform icon pair with combined label, centered). `#card-given .solution-card` enters at center.
**ON-SCREEN ELEMENTS:** Given card with chip "Given" and math: "Train length = <span class='hi'>240 m</span>, Platform length = <span class='hi'>260 m</span>" line 1, then "Total distance = 240 + 260 = <span class='ans'>500 m</span>" line 2.
**ANIMATION DETAILS:** `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 28.98)`, `apt.pinFlow(tl, "#illustration", "#illus-pinned", 28.98)` - both 0.8s power2.inOut. `apt.cardEnter(tl, "#card-given .solution-card", 28.98)` - 0.55s back.out(1.4), fires right after/alongside the pin glide completes. `apt.textReveal(tl, "#card-given .math")` word-synced to transcript for "two hundred forty plus two hundred sixty equals five hundred meter".
**CAMERA MOVEMENT:** Question + illustration glide upward/shrink; no camera per se, all element-level motion.
**TRANSITIONS:** Real glide (pinFlow), not a fade swap.
**EDUCATIONAL PURPOSE:** Transition from concept-building (Phase 1) to formal solving (Phase 2), formalizing the "L1 + L2" idea just demonstrated visually.
**VISUAL HIERARCHY:** Given card is now the primary focus; pinned question + illustration recap sit small and static above/beside it as reference.
**ATTENTION MANAGEMENT:** One clear new focal card; pinned elements fade into background prominence.
**MOTION NOTES:** `apt.ambientLoop` not needed here since Given card follows almost immediately - no idle gap.
**CONTINUITY FROM PREVIOUS SCENE:** The train icon, resting at its crossed-over position from Scene 4's slide (with the measure line fully grown and the chip showing "500 m" beneath it), is the exact icon that glides into `#illus-pinned` here - same object, now shrinking into its pinned recap slot as the question card performs the same glide beside it.

---

### SCENE 8 - Given -> Stack, Step 1 Card (Speed Formula)
**TIMESTAMP:** 39.64s (morph) / 42.30s (Step 1 cardEnter)
**VOICEOVER:** "Now that we have the total distance, we can find the speed. We know speed equals distance divided by time."
**VISUAL OBJECTIVE:** Collapse the Given card into the stack, bring in Step 1 with the speed formula.
**SCREEN LAYOUT:** `#stack-given .stack-card` in left column with `.step-circle` badge "G". Step 1 `SolutionCard` centered.
**ON-SCREEN ELEMENTS:** Stack-given card showing "Total = 500 m". Step 1 card with chip "Step 1" and math: "Speed = <span class='frac'><span class='top hi'>Distance</span><span class='bot hi'>Time</span></span>".
**ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 39.64)` - 0.8s. `apt.cardEnter(tl, "#card-step1 .solution-card", 42.30)` - 1s+ breathing gap after morph completion (morph ends 40.44, card enters 42.30, comfortably clear). `apt.textReveal(tl, "#card-step1 .math")`.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Standard morph pattern.
**EDUCATIONAL PURPOSE:** Introduce the core formula (speed = distance/time) as its own step, kept visually separate from the number-plugging in Scene 9.
**VISUAL HIERARCHY:** Step 1 card is primary; Given stack card recedes to secondary/reference status in the left column.
**ATTENTION MANAGEMENT:** Formula-only card keeps this beat simple before numbers arrive next.
**MOTION NOTES:** No stack-line yet since this is the first stack entry after Given (line will connect Given->Step1 once Step 1 also joins the stack in Scene 9).
**CONTINUITY FROM PREVIOUS SCENE:** The Given card, still centered from Scene 7, is the exact card that shrinks and slides into the stack here, while the pinned question/illustration recap from Scene 7 remain untouched in their fixed positions.

---

### SCENE 9 - Step 1 Solve (Plug values, get 20 m/s)
**TIMESTAMP:** 46.04s
**VOICEOVER:** "Putting the values, speed equals five hundred divided by twenty-five. After solving this, we get speed equals twenty meters per second."
**VISUAL OBJECTIVE:** Reveal the numeric substitution and result inside the still-active Step 1 card.
**SCREEN LAYOUT:** Same Step 1 card, position unchanged - content updates via text reveal within the card (not a new card).
**ON-SCREEN ELEMENTS:** Additional lines within `#card-step1 .math`: "Speed = <span class='frac'><span class='top hi'>500</span><span class='bot hi'>25</span></span> = <span class='ans'>20 m/s</span>".
**ANIMATION DETAILS:** `apt.textReveal(tl, "#card-step1 .math")` continues revealing these later spans at their own `data-t` timestamps (500 at ~47.0s, 25 at ~48.5s, "20 m/s" answer span at ~52.5s) - all part of the single `textReveal` call already made at cardEnter in Scene 8, just later timestamps within the same container.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** None - same card, progressive reveal.
**EDUCATIONAL PURPOSE:** Show the arithmetic step (500/25=20) explicitly rather than jumping straight to the answer.
**VISUAL HIERARCHY:** The `.ans` highlighted result "20 m/s" becomes the strongest visual weight once revealed.
**ATTENTION MANAGEMENT:** Sequential word-level reveal keeps pace with narration exactly, so the viewer reads the math at the same rate it's spoken.
**MOTION NOTES:** No `apt.emphasize`/`apt.resultReveal` layered on top - textReveal is the only animation on this content per the design system rule.
**CONTINUITY FROM PREVIOUS SCENE:** Direct continuation of Scene 8's Step 1 card - no new entrance, the same card simply keeps revealing lines as narration proceeds.

---

### SCENE 10 - Step 1 -> Stack, Step 2 Card (Unit Conversion)
**TIMESTAMP:** 54.48s (morph) / 56.5s (Step 2 cardEnter, after 1s breathing gap post-morph)
**VOICEOVER:** "Now, the question is asking for the answer in kilometers per hour, so we convert it using twenty times eighteen by five."
**VISUAL OBJECTIVE:** Collapse Step 1 into the stack, bring in Step 2 with the km/h conversion.
**SCREEN LAYOUT:** `#stack-step1 .stack-card` joins the stack below `#stack-given`, connector line grows between them. Step 2 `SolutionCard` centered.
**ON-SCREEN ELEMENTS:** Stack-step1 showing "20 m/s". Step 2 card with chip "Step 2" and math: "Speed = 20 × <span class='frac'><span class='top hi'>18</span><span class='bot hi'>5</span></span> km/h".
**ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 54.48)`. `apt.setStackLine("#line-g-1", "#stack-given .step-circle", "#stack-step1 .step-circle")` called once before the timeline builds. `apt.stackLineGrow(tl, "#line-g-1", 54.48)` - same time as this morph, since the lower circle (Step 1) is the one joining now. `apt.cardEnter(tl, "#card-step2 .solution-card", 56.5)`. `apt.textReveal(tl, "#card-step2 .math")`.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Standard morph + line grow.
**EDUCATIONAL PURPOSE:** Isolate the unit-conversion step as its own clear beat, separate from the m/s calculation.
**VISUAL HIERARCHY:** Step 2 card primary; two-item stack (Given, Step 1) visible on the left with connector line between them.
**ATTENTION MANAGEMENT:** Growing connector line reinforces the sequential, cumulative nature of the solution.
**MOTION NOTES:** This is the first connector line of the video (Given -> Step 1); a second one (Step 1 -> Step 2) will grow in Scene 12.
**CONTINUITY FROM PREVIOUS SCENE:** The Step 1 card, still centered with its "20 m/s" result visible from Scene 9, is the exact card that morphs into the stack here, immediately followed by Step 2 entering in the vacated center.

---

### SCENE 11 - Step 2 Solve (72 km/h result)
**TIMESTAMP:** 61.60s
**VOICEOVER:** "That gives us seventy-two kilometers per hour."
**VISUAL OBJECTIVE:** Reveal the final answer inside the Step 2 card.
**SCREEN LAYOUT:** Same Step 2 card, unchanged position.
**ON-SCREEN ELEMENTS:** Additional line in `#card-step2 .math`: "= <span class='ans'>72 km/h</span>".
**ANIMATION DETAILS:** `apt.textReveal(tl, "#card-step2 .math")` reveals the "72 km/h" answer span at ~61.7s, part of the same call from Scene 10.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** None.
**EDUCATIONAL PURPOSE:** Land the final numeric answer clearly before the options reveal.
**VISUAL HIERARCHY:** "72 km/h" is the strongest highlight on screen at this moment.
**ATTENTION MANAGEMENT:** Single reveal, no competing motion.
**MOTION NOTES:** None beyond the textReveal already in motion.
**CONTINUITY FROM PREVIOUS SCENE:** Direct continuation of Scene 10's Step 2 card - same card, later reveal.

---

### SCENE 12 - Step 2 -> Stack, Options Reveal
**TIMESTAMP:** 64.96s (morph) / 65.7s (recenter + options fade) / 66.3s (stagger) / 67.5s (correct pulse)
**VOICEOVER:** "Hence, the speed of the train is seventy-two kilometer per hour. So the correct option is option C."
**VISUAL OBJECTIVE:** Final morph into the stack, recenter the pinned question, reveal the options grid with C highlighted green.
**SCREEN LAYOUT:** `#stack-step2 .stack-card` joins stack (3 items now: Given, Step 1, Step 2, two connector lines total). Pinned illustration fades out to make room. Pinned question recenters via `apt.recenterForOptions`. `#options-reveal` (2x2 grid) fades in on the right, on `.pinned-col`.
**ON-SCREEN ELEMENTS:** Stack-step2 showing "72 km/h". Options grid: A) 57.6 km/h, B) 64.8 km/h, C) 72 km/h (correct), D) 80 km/h.
**ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 64.96)`. `apt.setStackLine("#line-1-2", "#stack-step1 .step-circle", "#stack-step2 .step-circle")` pre-timeline. `apt.stackLineGrow(tl, "#line-1-2", 64.96)`. `apt.fadeOut(tl, "#illus-pinned", 65.7)`. `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 65.7)`. `apt.fadeIn(tl, "#options-reveal", 65.9)`. `apt.optionsStagger(tl, ".opt-btn", 66.3)`. `apt.correctPulse(tl, ".opt-btn.correct", 67.8)`.
**CAMERA MOVEMENT:** Pinned question shifts right slightly (xShift 160) to align with `.pinned-col` as illustration vacates.
**TRANSITIONS:** Morph, fadeOut, recenter, fadeIn, stagger, pulse - full standard Phase 3 sequence.
**EDUCATIONAL PURPOSE:** Confirm the final answer against all four options, reinforcing the correct choice visually.
**VISUAL HIERARCHY:** Correct option C's green pulse is the final, strongest visual beat of the video.
**ATTENTION MANAGEMENT:** Sequential reveal (grid fades in -> options stagger in -> correct one pulses) guides the eye to land on C last.
**MOTION NOTES:** All stack cards and both connector lines remain visible and unfaded through this final phase per the design system rule.
**CONTINUITY FROM PREVIOUS SCENE:** The Step 2 card carrying "72 km/h" from Scene 11 is the exact card morphing into the stack here, and the "72 km/h" value now finds its match in option C as the grid appears - a direct visual payoff of the number just solved.

---

## PART 3: Asset List Required

- `illustration/train.svg` (already copied from global-illustrations)
- `illustration/train-station.svg` (already copied from global-illustrations, used as the platform icon)
- Shared: `_template/assets/serial-num-badge.svg`, `_template/assets/logo.png` (copied into question folder per Step 5B)

No new custom assets needed - existing train.svg + train-station.svg reused per the q32 pattern (train + platform illustration).

---

## PART 4: Animation Complexity Notes

- Only one "big" Phase 1 illustration animation: the train's 8.5s slide across the platform in Scene 4 (custom `gsap.to`, not an `animations.js` helper - illustration motion is per-question custom), paired with a synced growing measure line and a distance chip whose text updates mid-scene. `apt.roadSweep` still runs separately and earlier (4.8s) on the fainter background `#illus-track` line only.
- Two `apt.morphToStack` events after Given (Step 1 -> stack, Step 2 -> stack) plus the Given -> stack morph = 3 total morphs.
- Two stack connector lines: Given->Step1 (grown in Scene 10) and Step1->Step2 (grown in Scene 12).
- `apt.textReveal` used on all three active cards (Given, Step 1, Step 2) - word-level for the direct numeric lines, matching transcript.json timestamps exactly.
- No `apt.ambientLoop` needed - no long silent stretch exists in this video (narration is fairly continuous throughout).
- No `apt.stepFlow` used, per the deprecated-helper rule.

---

## PART 5: Master Timeline Overview

```
0.0    Background layers + bottomStrip + topic + logo visible
0.3    QuestionCard enters (apt.questionEnter)
0.8    SerialNum badge pops (apt.serialEnter)
5.2    Train icon + "240 m" label fade in
9.32   Platform icon + "260 m · 25 s" label fade in
10.2   Distance chip fades in ("Distance to cover = Train + Platform")
12.5   Train slides across platform (8.5s) + measure line grows in sync
21.3   Distance chip text swaps to "240 + 260 = 500 m total distance"
21.6   Distance chip emphasize pulse

[ PIN_TIME = 28.98 ]
28.98  pinFlow: question + illustration glide to pinned slots
28.98  Given card enters (apt.cardEnter) + textReveal
       [ GIVEN_TIME = 28.98, same as PIN_TIME here - narration flows straight in ]

39.64  Given -> stack morph (0.8s)
42.30  Step 1 card enters (formula) + textReveal
46.04  Step 1 numeric reveal continues (500/25=20 m/s)

54.48  Step 1 -> stack morph (0.8s)
       setStackLine(G->1) + stackLineGrow
56.5   Step 2 card enters (conversion) + textReveal
61.60  Step 2 numeric reveal continues (=72 km/h)

64.96  Step 2 -> stack morph (0.8s)
       setStackLine(1->2) + stackLineGrow
65.7   fadeOut pinned illustration + recenterForOptions
65.9   Options grid fadeIn
66.3   Options stagger in
67.8   Correct option C pulse
71.72  Voiceover ends ("...option C.")

[ END_FADE_TIME = 72.2 - fixed after initial build faded at 69.5, which cut
  the visuals before the voiceover finished narrating; must always start
  after the audio's actual end, never before ]
72.2   apt.fadeOut(#root > div, 1.2s)
73.4   Fade complete
73.6   tl.set end marker
```
