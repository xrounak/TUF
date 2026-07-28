# Storyboard — Speed-Time-Distance, Q5 (Scooter)

Voiceover duration: **74.04s**. Topic: "Speed, Time and Distance". Correct answer: **D (750 m)**.

---

## PART 1: Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|-----------|-----------|---------------------|------------------|-------------------|
| 1 | 0.099–3.22 | "So welcome back again. Time for one more problem." | Warm open, signal a new problem | Center frame | Question card lowered, empty stage |
| 2 | 3.74–7.94 | "Now in this problem, we are given that a scooter is moving at a speed of" | Introduce the object + setup | Question card rises; illustration begins | Card settles top-center; scooter+road build in |
| 3 | 8.38–10.199 | "fifty-four kilometer per hour." | State the given speed | Speed value | "54 km/hr" tag fades in above scooter |
| 4 | 10.699–15.279 | "The question is asking us to find how many meters the scooter will cover in fifty seconds." | State the unknown (distance) + given time | Distance query + time | Dashed path + "? m" flag fade in; "50 s" tag fades in |
| 5 | 15.679–18.199 | "Now, first, let us note down the given values." | Transition into solving | Whole layout | Pin glide: question + illustration move to pinned slots |
| 6 | 18.659–23.099 | "Speed of the scooter is fifty-four kilometers per hour. Time taken is fifty seconds." | Restate givens formally | Given card | Given card enters center; speed + time lines reveal word-by-word |
| 7 | 23.6–29.719 | "Be very sure about one thing. The speed is given in kilometer per hour, but the time is given in seconds." | Flag the unit mismatch (common mistake) | Warning line | Third line reveals: "Units differ — convert speed first!" |
| 8 | 30.239–34.079 | "So before using the formula, we must first convert the speed into meter per second." | Announce the conversion step | Given card morphs to stack; Step 1 opens | Given → stack morph; Step 1 card enters, title line reveals |
| 9 | 34.599–40.939 | "We know that to convert kilometer per hour into meter per second, we simply multiply by five by eighteen." | Teach the conversion rule | Rule line | "km/hr × 5/18 = m/s" line reveals |
| 10 | 41.399–49.599 | "Now, let us apply this conversion. Fifty-four kilometer per hour is equal to fifty-four into five by eighteen meters per second. After simplifying this," | Apply the rule numerically | Computation line | "54 × 5/18 m/s" reveals word-by-word with stacked fraction |
| 11 | 49.919–53.259 | "we get fifteen meters per second. Now this part is completed." | State the converted speed | Answer | "= 15 m/s" reveals; step settles |
| 12 | 53.639–58.139 | "Since the speed and the time are now in compatible units, we can directly use the formula." | Transition to the formula step | Step 1 morphs to stack | Step 1 → stack morph; connector line G→1 grows |
| 13 | 58.599–60.419 | "Distance is equal to speed into time." | State the formula | Step 2 card | Step 2 card enters; formula line reveals |
| 14 | 60.799–66.139 | "Putting the values, distance is equal to fifteen into fifty, which is seven hundred fifty meter." | Substitute + compute final answer | Computation + answer | "15 × 50 = 750 m" reveals word-by-word |
| 15 | 66.58–74.04 | "So the scooter covers seven hundred fifty meter in fifty seconds. Hence, the final answer is option D." | Confirm + reveal correct option | Options grid | Step 2 → stack morph; connector 1→2 grows; options fade in, stagger, correct pulse on D |

---

## PART 2: Scene-by-Scene Storyboard

### SCENE 1 — Opening
- **TIMESTAMP:** 0.0 – 3.6s
- **VOICEOVER:** "So welcome back again. Time for one more problem."
- **VISUAL OBJECTIVE:** Establish the frame calmly before the question is stated.
- **SCREEN LAYOUT:** Question card centered horizontally, vertically lowered (reads as centered in the empty frame); background layers only.
- **ON-SCREEN ELEMENTS:** `dotted-grid`, `bottom-strip`, `topic-name` ("Speed, Time and Distance"), `logo`, `q-full-card` (lowered), `serial-num` (lowered, matching card).
- **ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.6)` at 0.3s — card fades/scales/slides up from y+230 to y+180 over 0.7s, `back.out(1.4)`. Serial badge pops in parallel at 0.8s (`scale:0→1, rotation:-45→0`), holds at the lowered y offset.
- **CAMERA MOVEMENT:** None (static frame; motion is internal to elements).
- **TRANSITIONS:** N/A (opening scene).
- **EDUCATIONAL PURPOSE:** Give the viewer a beat to orient before content starts.
- **VISUAL HIERARCHY:** Question card > serial badge > background chrome.
- **ATTENTION MANAGEMENT:** Empty stage keeps eyes on the card as it settles.
- **MOTION NOTES:** Card and badge must rise together — badge's own parallel tween (not `apt.serialEnter`) keeps them locked as one unit.
- **CONTINUITY FROM PREVIOUS SCENE:** N/A — first scene.

### SCENE 2 — Question Reveal + Rise
- **TIMESTAMP:** 3.6 – 7.94s
- **VOICEOVER:** "Now in this problem, we are given that a scooter is moving at a speed of"
- **VISUAL OBJECTIVE:** Card rises to its resting slot exactly as the problem statement begins; scooter + road build in beneath it.
- **SCREEN LAYOUT:** Question card rises from y+180 to y+0 (resting position, top:80px). Illustration area (left:50%, top:480px, width:1400px) begins populating: scooter icon + road line on the left/center.
- **ON-SCREEN ELEMENTS:** `q-full-card` (rising), `serial-num` (rising in tandem), `illustration` wrapper: `#illus-scooter-wrap` (scooter icon), `#illus-road` (dashed road line).
- **ANIMATION DETAILS:** `tl.to("#q-full-card", {y:0, duration:0.6, ease:"power2.inOut"}, 3.6)` (part of `heroEnterLowered`); parallel `tl.to("#serial-num", {y:0, duration:0.6, ease:"power2.inOut"}, 3.6)`. At 3.9s: road line draws in via `apt.roadSweep(tl, "#illus-road", 3.9, 0.9)` (scaleX 0→1, left-anchored). At 4.0s: scooter icon + wrapper fades/slides in — plain `tl.fromTo("#illus-scooter-wrap", {opacity:0, x:-30}, {opacity:1, x:0, duration:0.5, ease:"power2.out"}, 4.0)`.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Continuous rise from Scene 1 — no cut.
- **EDUCATIONAL PURPOSE:** Anchor the scenario (a moving scooter) before numbers appear.
- **VISUAL HIERARCHY:** Question text (being read) > scooter/road forming beneath.
- **ATTENTION MANAGEMENT:** Road sweep draws the eye left→right, priming for the speed tag next.
- **MOTION NOTES:** Road sweep origin is left (`transformOrigin:"left center"`) so it reads as the ground being laid down under the scooter. Once settled (4.5s), the scooter (with its speed tag) drives continuously rightward toward the distance marker for the rest of Phase 1 (steady `x:0→480` drift, `ease:"none"`, through 15.5s = PIN_TIME), with a small finite wheel-bounce (`y` yoyo, 0.4s period) riding on top so it never sits static — it's still driving when the layout pins.
- **CONTINUITY FROM PREVIOUS SCENE:** The card's rise (started in Scene 1 at 3.6s) completes mid-scene; the illustration entrance picks up immediately after so there's no dead gap between "card settles" and "scene starts building."

### SCENE 3 — Speed Stated
- **TIMESTAMP:** 8.38 – 10.199s
- **VOICEOVER:** "fifty-four kilometer per hour."
- **VISUAL OBJECTIVE:** Reveal the scooter's speed the instant it's spoken.
- **SCREEN LAYOUT:** Speed tag "54 km/hr" appears directly above the scooter icon.
- **ON-SCREEN ELEMENTS:** `#illus-speed-tag` (new).
- **ANIMATION DETAILS:** `tl.fromTo("#illus-speed-tag", {opacity:0, y:10}, {opacity:1, y:0, duration:0.4, ease:"power2.out"}, 8.38)`.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Simple fade, no cut.
- **EDUCATIONAL PURPOSE:** Bind the spoken number to its visual anchor immediately (word-to-pixel sync).
- **VISUAL HIERARCHY:** Speed tag now the brightest new element (primary blue text).
- **ATTENTION MANAGEMENT:** Sole new element in frame at this instant — nothing competes.
- **MOTION NOTES:** Small y:10→0 slide-up keeps it consistent with other tag reveals later.
- **CONTINUITY FROM PREVIOUS SCENE:** Scooter + road are already settled and static from Scene 2; this scene only adds the tag, no re-entrance of existing elements.

### SCENE 4 — Distance Question + Time Given
- **TIMESTAMP:** 10.699 – 15.279s
- **VOICEOVER:** "The question is asking us to find how many meters the scooter will cover in fifty seconds."
- **VISUAL OBJECTIVE:** Visualize the unknown (distance) and the known (time) side by side with the speed already on screen.
- **SCREEN LAYOUT:** Right side of the illustration: a dashed path continuing from the road, ending in a flag icon with "? m" beneath it. A "50 s" tag appears near the flag once "fifty seconds" is spoken.
- **ON-SCREEN ELEMENTS:** `#illus-distance-wrap` (dashed path + flag + "? m"), `#illus-time-tag` ("50 s").
- **ANIMATION DETAILS:** At 10.8s: `tl.fromTo("#illus-distance-wrap", {opacity:0}, {opacity:1, duration:0.5, ease:"power2.out"}, 10.8)`. At 14.42s (word "fifty" of "fifty seconds"): `tl.fromTo("#illus-time-tag", {opacity:0, y:10}, {opacity:1, y:0, duration:0.4, ease:"power2.out"}, 14.42)`.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Sequential fades, no cuts.
- **EDUCATIONAL PURPOSE:** Complete the visual picture of the problem — 3 knowns/unknowns (speed, time, distance) all visible before solving begins.
- **VISUAL HIERARCHY:** "? m" is the visual focal point (the target of the whole problem).
- **ATTENTION MANAGEMENT:** Two-step reveal (path+flag, then time) mirrors the two-part sentence structure.
- **MOTION NOTES:** Keep "? m" un-highlighted (plain black/gray) since it's unknown — only resolved values use `--primary`.
- **CONTINUITY FROM PREVIOUS SCENE:** The speed tag from Scene 3 stays visible and unchanged; this scene only adds to the same static illustration, completing it left-to-right.

### SCENE 5 — Pin Transition
- **TIMESTAMP:** 15.5 – 16.3s (glide), narration continues under it through 18.199s
- **VOICEOVER:** "Now, first, let us note down the given values."
- **VISUAL OBJECTIVE:** Move the fully-built question + illustration out of center stage and into their pinned slots, freeing the center for solution cards.
- **SCREEN LAYOUT:** Question card + full illustration glide from center/large to pinned-top (q-card) and pinned-recap (illustration) positions.
- **ON-SCREEN ELEMENTS:** `q-pinned` (revealed), `illus-pinned` (revealed, small scooter icon + one recap line, centered).
- **ANIMATION DETAILS:** `PIN_TIME = 15.5`. `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 15.5)`; `apt.pinFlow(tl, "#illustration", "#illus-pinned", 15.5)`; `apt.fadeOut(tl, "#serial-num", 15.5, 0.5)` (badge has no pinned counterpart). Ambient bob starts right after: `apt.ambientLoop(tl, "#illus-pinned-icon", 16.3, 53.3)`.
- **CAMERA MOVEMENT:** None (glide is on the elements, not a camera).
- **TRANSITIONS:** Real glide (0.8s), not a cut — content fades to 0.15 opacity first, then the box moves, then the pinned version fades in as the glide lands.
- **EDUCATIONAL PURPOSE:** Signal "setup is done, now we solve" without losing the question from view.
- **VISUAL HIERARCHY:** Motion itself is the hierarchy cue — everything else is static while this moves.
- **ATTENTION MANAGEMENT:** The glide's timing (15.5, ending 16.3) lands well before "given values" finishes speaking (18.199), so the pinned layout has ~2s to visually settle before the Given card opens.
- **MOTION NOTES:** Pinned illustration recap: small scooter icon (`#illus-pinned-icon`) + one centered line "Speed = 54 km/hr · Time = 50 s · Distance = ?" (per design.md, single-icon recaps center rather than left-align).
- **CONTINUITY FROM PREVIOUS SCENE:** The exact same scooter icon, speed tag, and time tag from Scenes 3–4 glide into the pinned recap — no new elements invented, only repositioned/resized, preserving object continuity.

### SCENE 6 — Given Card
- **TIMESTAMP:** 18.659 – 29.6s (GIVEN_TIME = 18.659)
- **VOICEOVER:** "Speed of the scooter is fifty-four kilometers per hour. Time taken is fifty seconds. Be very sure about one thing. The speed is given in kilometer per hour, but the time is given in seconds."
- **VISUAL OBJECTIVE:** Formally note the two given values, then flag the unit mismatch as the common-mistake guardrail.
- **SCREEN LAYOUT:** `SolutionCard` centered (left:640px, top:480px), chip "Given".
- **ON-SCREEN ELEMENTS:** `#card-given .solution-card` with 3 `.math` lines.
- **ANIMATION DETAILS:** `apt.cardEnter(tl, "#card-given .solution-card", 18.659)`; `apt.textReveal(tl, "#card-given .math")` reveals:
  - Line 1 (word-level): "Speed" @18.659, "=" @19.52, "54 km/hr" @19.699
  - Line 2 (word-level): "Time" @21.579, "=" @22.18, "50 s" @22.359
  - Line 3 (line-level, paraphrase): "Units differ — convert speed first!" @25.34
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Card entrance only; no exit yet (morphs at start of Scene 7).
- **EDUCATIONAL PURPOSE:** Make the unit mismatch impossible to miss before the formula is even touched — this IS the common-mistake guardrail for this problem.
- **VISUAL HIERARCHY:** Speed/time values in `--primary`; warning line in plain text but positioned last (reads as the "catch").
- **ATTENTION MANAGEMENT:** Each line reveals only when its exact words are spoken — no line appears early.
- **MOTION NOTES:** Card stays open through the full mismatch explanation (23.6–29.719) — it does not exit early.
- **CONTINUITY FROM PREVIOUS SCENE:** Pinned question + pinned illustration recap (now showing the same speed/time values) remain visible above/beside this card, unchanged, reinforcing the numbers just spoken.

### SCENE 7 — Given → Stack, Step 1 Opens
- **TIMESTAMP:** 29.6 – 30.6s (morph 29.6, Step 1 enters 30.6)
- **VOICEOVER:** "So before using the formula, we must first convert the speed into meter per second."
- **VISUAL OBJECTIVE:** Archive the Given card into the stack; open Step 1 with its stated goal.
- **SCREEN LAYOUT:** Given card shrinks/slides into `#stack-given` (left column, top:140px, badge "G"). Step 1 card (`#card-step1`) enters center.
- **ON-SCREEN ELEMENTS:** `#stack-given .stack-card`, `#card-step1 .solution-card`, chip "Step 1".
- **ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 29.6)` (0.8s); `apt.cardEnter(tl, "#card-step1 .solution-card", 30.6)`; `apt.textReveal(tl, "#card-step1 .math")` line 1 (line-level): "Convert speed into m/s" @30.6.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** 0.8s morph (`power2.inOut`) — text fades out first, box slides/shrinks/recolors, target text fades in.
- **EDUCATIONAL PURPOSE:** Make explicit that unit conversion is a distinct, necessary step (directly answers the mismatch flagged in Scene 6).
- **VISUAL HIERARCHY:** Step 1 card (center, white, shadow) draws focus; Given stack card (left, light-blue, small) recedes but stays legible.
- **ATTENTION MANAGEMENT:** Only one thing moves at a time — morph completes before Step 1's own text starts revealing.
- **MOTION NOTES:** Standard 0.8s morph duration, no exceptions.
- **CONTINUITY FROM PREVIOUS SCENE:** The Given card's own values (54 km/hr, 50 s) are the exact numbers Step 1 will operate on — object/data continuity from Scene 6's card into Scene 7's stack card.

### SCENE 8 — Conversion Rule
- **TIMESTAMP:** 34.599 – 40.939s
- **VOICEOVER:** "We know that to convert kilometer per hour into meter per second, we simply multiply by five by eighteen."
- **VISUAL OBJECTIVE:** Teach the general conversion rule before applying it to this problem's numbers.
- **SCREEN LAYOUT:** Second line appears inside the still-open Step 1 card.
- **ON-SCREEN ELEMENTS:** Step 1 `.math` line 2.
- **ANIMATION DETAILS:** `apt.textReveal` continues (already called in Scene 7) — line 2 (line-level): "km/hr × 5/18 = m/s" @34.599.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** None (same card, additive reveal).
- **EDUCATIONAL PURPOSE:** Separate "the rule" from "the applied numbers" so the viewer learns the general technique, not just this answer.
- **VISUAL HIERARCHY:** Rule line sits below the title line, same card.
- **ATTENTION MANAGEMENT:** ~4.6s gap between title line (30.6) and rule line (34.599) is filled entirely by this narration — no dead air, no early text.
- **MOTION NOTES:** N/A — plain fade per `apt.textReveal`.
- **CONTINUITY FROM PREVIOUS SCENE:** Same Step 1 card from Scene 7, uninterrupted — no re-entrance.

### SCENE 9 — Apply Conversion
- **TIMESTAMP:** 41.399 – 49.599s
- **VOICEOVER:** "Now, let us apply this conversion. Fifty-four kilometer per hour is equal to fifty-four into five by eighteen meters per second. After simplifying this,"
- **VISUAL OBJECTIVE:** Substitute the actual value (54) into the rule just taught.
- **SCREEN LAYOUT:** Third line in the Step 1 card, using a stacked `.frac` for 5/18.
- **ON-SCREEN ELEMENTS:** Step 1 `.math` line 3.
- **ANIMATION DETAILS:** Word-level reveals: "54" @42.979, "×" @46.02, `.frac` "5/18" @46.259, "m/s" @47.059.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** None (additive).
- **EDUCATIONAL PURPOSE:** Show the rule from Scene 8 being applied with real numbers — reinforces "rule → application" pattern.
- **VISUAL HIERARCHY:** Fraction stack draws the eye (visually distinct from inline text).
- **ATTENTION MANAGEMENT:** Word-by-word reveal matches the verbatim narration pace exactly.
- **MOTION NOTES:** `.frac` uses the shared component (top/bottom stacked, border between) — no new fraction style invented.
- **CONTINUITY FROM PREVIOUS SCENE:** Directly extends Scene 8's rule line with the same card, same chip, same position.

### SCENE 10 — Converted Speed
- **TIMESTAMP:** 49.919 – 53.259s
- **VOICEOVER:** "we get fifteen meters per second. Now this part is completed."
- **VISUAL OBJECTIVE:** Land the converted-speed answer.
- **SCREEN LAYOUT:** Fourth line in Step 1 card, answer in `--primary`.
- **ON-SCREEN ELEMENTS:** Step 1 `.math` line 4 (`.ans`).
- **ANIMATION DETAILS:** Word-level: "=" @49.919, "15" @50.259, "m/s" @50.599.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** None (additive; card exits at start of Scene 11).
- **EDUCATIONAL PURPOSE:** Confirm the intermediate result before moving to the final formula.
- **VISUAL HIERARCHY:** `.ans` styling (primary blue) marks this as the step's payoff.
- **ATTENTION MANAGEMENT:** No competing new elements — final beat of this card.
- **MOTION NOTES:** No `apt.emphasize`/`apt.resultReveal` layered on top — the text-reveal fade is the only animation on this line, per the no-double-animation rule.
- **CONTINUITY FROM PREVIOUS SCENE:** Same card, same position — 4th line in an unbroken sequence from Scene 7.

### SCENE 11 — Step 1 → Stack (Compatible Units)
- **TIMESTAMP:** 53.3 – 58.599s (morph 53.3; Step 2 enters 58.599)
- **VOICEOVER:** "Since the speed and the time are now in compatible units, we can directly use the formula."
- **VISUAL OBJECTIVE:** Archive Step 1; hold on the transition line while the stack settles (Step 2 doesn't open yet — this is a pure bridge beat).
- **SCREEN LAYOUT:** Step 1 card shrinks/slides into `#stack-step1` (top:290px, badge "1"). Connector line G→1 grows in the same beat.
- **ON-SCREEN ELEMENTS:** `#stack-step1 .stack-card`, `#line-g-1`.
- **ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 53.3)`; `apt.stackLineGrow(tl, "#line-g-1", 53.3)` (same instant — both circles now exist).
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** 0.8s morph.
- **EDUCATIONAL PURPOSE:** Visually confirm "the units problem is solved" (both values now in compatible units) before revealing the final formula.
- **VISUAL HIERARCHY:** Stack column (G, 1) now reads as a growing, connected chain.
- **ATTENTION MANAGEMENT:** ~4.5s gap (54.1 morph-complete → 58.599 Step 2 enter) is filled entirely by this transition narration — deliberate hold, not a stall.
- **MOTION NOTES:** Connector line grows top-anchored (`scaleY:0→1`), between the real rendered centers of the G and 1 circles (via `apt.setStackLine`, computed at build time).
- **CONTINUITY FROM PREVIOUS SCENE:** Step 1's own converted-speed answer (15 m/s) is exactly what Step 2 will use next — same data thread continues into the final formula.

### SCENE 12 — Formula Stated
- **TIMESTAMP:** 58.599 – 60.419s
- **VOICEOVER:** "Distance is equal to speed into time."
- **VISUAL OBJECTIVE:** State the formula itself, cleanly, before plugging in numbers.
- **SCREEN LAYOUT:** Step 2 card (`#card-step2`) enters center, chip "Step 2".
- **ON-SCREEN ELEMENTS:** `#card-step2 .solution-card` line 1.
- **ANIMATION DETAILS:** `apt.cardEnter(tl, "#card-step2 .solution-card", 58.599)`; `apt.textReveal` line 1 (word-level): "Distance" @58.599, "=" @59.059, "Speed" @59.619, "×" @59.859, "Time" @60.139.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Standard card entrance (0.55s, `back.out(1.4)`).
- **EDUCATIONAL PURPOSE:** Isolate the formula as its own reveal so it reads as a rule, not just part of a calculation.
- **VISUAL HIERARCHY:** Formula line is the sole content at this instant.
- **ATTENTION MANAGEMENT:** Word-level reveal matches the short, verbatim sentence exactly.
- **MOTION NOTES:** Standard `cardEnter`, nothing custom.
- **CONTINUITY FROM PREVIOUS SCENE:** Opens exactly as Scene 11's transition line finishes — no gap, formula lands the instant "use the formula" is said.

### SCENE 13 — Substitute + Final Answer
- **TIMESTAMP:** 60.799 – 66.139s
- **VOICEOVER:** "Putting the values, distance is equal to fifteen into fifty, which is seven hundred fifty meter."
- **VISUAL OBJECTIVE:** Compute and land the final distance answer.
- **SCREEN LAYOUT:** Second line in Step 2 card.
- **ON-SCREEN ELEMENTS:** Step 2 `.math` line 2, answer in `.ans`.
- **ANIMATION DETAILS:** Word-level: "15" @63.0, "×" @63.399, "50" @63.68, "=" @64.439, "750" @64.779 (`.ans`), "m" @65.76 (`.ans`).
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** None (additive; card exits at start of Scene 14).
- **EDUCATIONAL PURPOSE:** Deliver the number the entire video has been building toward.
- **VISUAL HIERARCHY:** "750 m" in `--primary`, the visual climax of the solve.
- **ATTENTION MANAGEMENT:** Nothing else on screen competes with this reveal.
- **MOTION NOTES:** Same text-reveal-only rule — no extra pulse on top of "750 m" here (the pulse is reserved for the correct option in Scene 14).
- **CONTINUITY FROM PREVIOUS SCENE:** Directly extends Scene 12's formula with the same card — "Distance = Speed × Time" → "= 15 × 50 = 750 m" reads as one continuous derivation.

### SCENE 14 — Final Reveal + Options
- **TIMESTAMP:** 66.3 – 74.04s
- **VOICEOVER:** "So the scooter covers seven hundred fifty meter in fifty seconds. Hence, the final answer is option D."
- **VISUAL OBJECTIVE:** Archive Step 2, clear the stage, and reveal the options grid with D highlighted.
- **SCREEN LAYOUT:** Step 2 card morphs into `#stack-step2` (top:460px, badge "2"); connector line 1→2 grows. Pinned illustration fades out; pinned question recenters toward the options column. Options grid (2×2) fades in on the right, staggers in, D pulses green.
- **ON-SCREEN ELEMENTS:** `#stack-step2 .stack-card`, `#line-1-2`, `#options-reveal` (`.opt-btn` A–D, D has class `correct`).
- **ANIMATION DETAILS:**
  - `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 66.3)`
  - `apt.stackLineGrow(tl, "#line-1-2", 66.3)`
  - `apt.fadeOut(tl, "#illus-pinned", 66.3)`
  - `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 66.3)`
  - `apt.fadeIn(tl, "#options-reveal", 66.8)`
  - `apt.optionsStagger(tl, ".opt-btn", 67.4)`
  - `apt.correctPulse(tl, ".opt-btn.correct", 73.4)` (times to "option D")
  - `apt.fadeOut(tl, "#root > div", 74.3, 1.2)` (END_FADE — everything settles out together)
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Morph (0.8s) → recenter (0.5s) → fade-in (0.4s) → stagger (0.45s×4, 0.12s apart) → pulse (0.4s yoyo) → final synchronized fade-out.
- **EDUCATIONAL PURPOSE:** Confirm the computed answer (750 m) matches option D exactly, closing the loop.
- **VISUAL HIERARCHY:** Correct option (green) is the final visual destination of the whole video.
- **ATTENTION MANAGEMENT:** All 3 stack cards (G, 1, 2) plus both connector lines stay visible and complete throughout — nothing is faded prematurely.
- **MOTION NOTES:** Stack cards and connector lines are NOT faded during this recenter — only the pinned illustration drops out (its job is done) and the pinned question shifts to align with the options column.
- **CONTINUITY FROM PREVIOUS SCENE:** The "750 m" answer computed in Scene 13 is what viewers scan for among the options — direct visual payoff of the preceding math.

---

## PART 3: Asset List Required

- `_template/assets/serial-num-badge.svg` (shared)
- `_template/assets/logo.png` (shared)
- `illustration/scooter-scooter-svgrepo-com.svg` (user-supplied, used as-is, no recoloring — not requested)
- No other per-question assets needed (road, flag, tags are pure CSS/text — no new SVGs required)

---

## PART 4: Animation Complexity Notes

- Only 2 solution steps (Given → Step 1 [unit conversion] → Step 2 [formula]) — simpler than the template's 3-step example. Composition uses `card-given`, `card-step1`, `card-step2` and `stack-given`, `stack-step1`, `stack-step2` with 2 connector lines (`line-g-1`, `line-1-2`). No `card-step3` / `stack-step3` / `line-2-3`.
- Step 1 card carries 4 reveal lines (title, rule, computation, answer) since it covers both "teach the rule" and "apply the rule" — longer dwell time (30.6s → 53.3s morph, ~22.7s) is justified by the density of narration in that stretch (beats 7–10).
- Phase 1 illustration is a single-object scene (just the scooter) — no second object/ratio, so `illustration` uses a left-to-right build (scooter+speed → path+distance+time) rather than a two-object `justify-content:space-between` layout.
- Scooter icon recolored from its stock yellow/orange/gray palette to the brand palette (`#6373db` primary, `#4a5bc4`/`#7683d9`/`#5b6ab0`/`#aab0e8`/`#e2e5ff` blue-grey neighbors), shape untouched — straight hex find-replace per the user's request.
- Scooter is in continuous motion for the entire time it's on screen in Phase 1 (steady rightward drift + finite wheel-bounce from 4.5s to PIN_TIME 15.5s) rather than a static icon after its entrance — plain `gsap.to`/`fromTo` calls on `#illus-scooter-wrap`, not a new named `apt.*` helper (per-question illustration motion, not a shared card/stack transition).
- Pinned illustration recap is single-icon + one line → centered, per design.md's pinned-layout convention (not space-between).
- `apt.ambientLoop` used once, on the pinned scooter icon, spanning the long Given/Step-1 stretch (16.3s → 53.3s) so the pinned area doesn't read as dead.
- All card→stack transitions use `apt.morphToStack` (0.8s) with no exceptions, including the final Step 2.
- No `apt.stepFlow`/`.step-flow-line` used anywhere (dropped per template rules).

---

## PART 5: Master Timeline Overview

```
TIME (s)   ELEMENT                     WHAT HAPPENS
─────────  ──────────────────────────  ─────────────────────────────────────
0.3        q-full-card                 heroEnterLowered (lowered entrance)
0.8        serial-num                  pop-in, parallel lowered offset
3.6        q-full-card + serial-num    rise to resting position
3.9        illus-road                  roadSweep draw-in
4.0        illus-scooter-wrap          fade/slide in
8.38       illus-speed-tag             "54 km/hr" fades in
10.8       illus-distance-wrap         dashed path + flag + "? m" fade in
14.42      illus-time-tag              "50 s" fades in

[ PIN_TIME = 15.5 ]
15.5       q-full-card, illustration   pinFlow glide → pinned slots (0.8s)
15.5       serial-num                  fadeOut (0.5s)
16.3       illus-pinned-icon           ambientLoop begins (→ 53.3)

[ GIVEN_TIME = 18.659 ]
18.659     card-given                  cardEnter + textReveal (3 lines, →25.34)

29.6       card-given → stack-given    morphToStack (0.8s)
30.6       card-step1                  cardEnter + textReveal line 1
34.599     card-step1 line 2           rule reveal
42.979     card-step1 line 3           computation reveal (word-by-word, frac)
49.919     card-step1 line 4           answer reveal "= 15 m/s"

53.3       card-step1 → stack-step1    morphToStack (0.8s)
53.3       line-g-1                    stackLineGrow

58.599     card-step2                  cardEnter + textReveal line 1 (formula)
63.0       card-step2 line 2           computation + answer reveal (→65.76)

66.3       card-step2 → stack-step2    morphToStack (0.8s)
66.3       line-1-2                    stackLineGrow
66.3       illus-pinned                fadeOut
66.3       q-pinned                    recenterForOptions
66.8       options-reveal              fadeIn
67.4       .opt-btn (A–D)              optionsStagger
73.4       .opt-btn.correct (D)        correctPulse
74.3       #root > div (all)           fadeOut (1.2s) — end of video
```

Total composition length: ~75.5s (voiceover 74.04s + trailing fade).
