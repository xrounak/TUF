# Storyboard — Speed, Time and Distance / Question 25 (Average Speed, Delivery Van)

Question: A delivery van travels for 2 hours at 45 km/hr and then for 3 hours at 60 km/hr. Find the average speed.
Options: A) 52 km/hr  B) 56 km/hr  C) 54 km/hr ✅  D) 50 km/hr
Voiceover duration: **81.639s**

---

## PART 1: Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Viewer Attention Focus | Visual Objective |
|---|-----------|-----------|---------------------|-------------------------|-------------------|
| 1 | 0.10–3.34 | "So welcome back again. Time for one more problem." | Warm open, orient viewer | Center screen, anticipation | Empty frame → question card about to enter |
| 2 | 3.84–11.84 | "Now in this problem, a delivery van travels for two hours at forty-five kilometers per hour and then for three hours at sixty kilometers per hour." | State the two-part journey | Question card + van illustration | Van drives segment 1 then segment 2 with speed/time callouts |
| 3 | 12.36–17.10 | "The question is asking us to find the average speed of the whole journey." | Frame the goal | Question card | Van holds at rest; "average speed" is the ask |
| 4 | 17.56–20.70 | "Now, first, let us find the distance covered in each part." | Transition into solving | Layout pins to top | pinFlow: question + van glide to pinned slot; Given card opens |
| 5 | 21.24–24.72 | "We know the formula: distance is equal to speed into time." | State the governing formula | Step 1 card | Formula line reveals word-by-word |
| 6 | 25.28–31.28 | "For the first part, distance is equal to forty-five into two. This gives us ninety kilometers." | Compute Distance 1 | Step 1 card | "45 × 2 = 90 km" line reveals |
| 7 | 31.72–39.02 | "Now the distance covered in the second part is equal to sixty into three. This gives us one hundred and eighty kilometers." | Compute Distance 2 | Step 1 card | "60 × 3 = 180 km" line reveals |
| 8 | 39.42–42.90 | "Now that we know both the distances, we can find the total distance." | Transition | Step 1 → stack | Morph to stack; Step 2 card opens |
| 9 | 43.32–51.44 | "Total distance is equal to ninety plus one hundred and eighty. This gives us two hundred and seventy kilometers. Now this part is completed." | Compute total distance | Step 2 card | "90 + 180 = 270 km" reveals |
| 10 | 51.80–53.36 | "Let us find the total time taken." | Transition | Step 2 → stack | Morph to stack; Step 3 card opens |
| 11 | 53.76–60.12 | "Total time is equal to two hours of first part plus three hours of second part. This gives us five hours." | Compute total time | Step 3 card | "2 hr + 3 hr = 5 hr" reveals |
| 12 | 60.54–61.68 | "Now we have everything we need." | Transition | Step 3 → stack | Morph to stack; Step 4 card opens |
| 13 | 62.16–71.64 | "Average speed is equal to total distance divided by total time. Putting the values, average speed is equal to two hundred and seventy divided by five. After simplifying this," | State + apply average-speed formula | Step 4 card | Formula, then "270 ÷ 5" reveal |
| 14 | 72.08–78.20 | "we get fifty-four kilometers per hour. So the average speed of the delivery van is fifty-four kilometers per hour." | Reveal the answer | Step 4 card | "= 54 km/hr" (ans) reveals |
| 15 | 78.68–81.64 | "Hence, the correct answer is option C." | Confirm final answer | Options grid | Step 4 → stack; options reveal; C pulses green |

---

## PART 2: Scene-by-Scene Storyboard

**Global:** 16:9, white background, dotted-grid (65% opacity) + 15px blue bottom-strip always visible, `Speed, Time and Distance` bottom-left, logo bottom-right. Google Sans Flex (Medium only for Phase‑1 hero question text; Regular everywhere else). Colors strictly from tokens: `--primary #6373db`, `--primary-light #e2e5ff`, `--success #4eb85f`, `--topic #949494`.

### SCENE 1 — Cold Open (0.0 – 3.6s)
- **VOICEOVER:** "So welcome back again. Time for one more problem."
- **VISUAL OBJECTIVE:** Establish the frame calmly before content lands.
- **SCREEN LAYOUT:** Background layers only; question card lowered off-slot per `apt.heroEnterLowered`.
- **ON-SCREEN ELEMENTS:** dotted-grid, bottom-strip, topic name, logo. `#q-full-card` fades/scales in at `y:HERO_OFFSET_Y(180)` starting 0.3s (0.7s, `back.out(1.4)`). `#serial-num` pops in parallel at 0.8s (badge, `back.out(2)`), mirroring the lowered `y` offset.
- **ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.6)`. Serial-num parallel fromTo at `y:180`, then rises with the card at `RISE_TIME=3.6`.
- **CAMERA MOVEMENT:** None (static frame; motion is all element-level).
- **TRANSITIONS:** None yet — this scene ends as the card rises to rest exactly as Scene 2's narration begins.
- **EDUCATIONAL PURPOSE:** None yet — pure orientation beat.
- **VISUAL HIERARCHY:** Question card dominant once risen; badge secondary.
- **ATTENTION MANAGEMENT:** Single moving element (card+badge) — nothing else competes.
- **MOTION NOTES:** Card holds at `y:180` (vertically centered while alone) through the full "welcome back" line, then rises to `y:0` over 0.6s at `RISE_TIME=3.6`, landing just as the van problem starts being narrated.
- **CONTINUITY FROM PREVIOUS SCENE:** N/A — opening scene.

### SCENE 2 — Question Stated + Van Illustration Builds (4.0 – 13.0s)
- **VOICEOVER:** "Now in this problem, a delivery van travels for two hours at forty-five kilometers per hour and then for three hours at sixty kilometers per hour."
- **VISUAL OBJECTIVE:** Visually walk through the two-leg journey as it's narrated.
- **SCREEN LAYOUT:** Question card at rest (`y:0`, centered, top:80px). Illustration area (`#illustration`, left:50%, top:460px, width:1400px, height:260px) stays fully hidden (`opacity:0` in the markup) until it fades in at 4.0s — below the card: a flat 2D road (single horizontal line, solid black `#000000`, 6px, drawn via `apt.roadSweep` from the left) split at its midpoint by a small dashed marker. The single delivery van icon (`van-svgrepo-com.svg`, recolored to `--primary` fills) sits at the road's left edge.
- **ON-SCREEN ELEMENTS:** Road (`#road-line`), midpoint marker (`#road-split`), van icon (`#van-icon`), two label groups: `#leg1-label` ("45 km/hr · 2 hr", `--primary`, ≥22px) above the left half, `#leg2-label` ("60 km/hr · 3 hr") above the right half.
- **ANIMATION DETAILS:**
  - `apt.fadeIn(tl, "#illustration", 4.0, 0.5)` — the whole illustration group (nothing inside it is shown before this).
  - `apt.roadSweep(tl, "#road-line", 4.0, 0.9)` — road draws in left→right, starting the instant the group becomes visible.
  - Van drives left→midpoint: `tl.to("#van-icon", {left:"50%", duration: 4.2, ease:"power1.inOut"}, 5.9)` (covers the "45 km/hr, 2 hours" narration window — "two hours at forty-five kilometers" is spoken 6.02–8.14).
  - `#leg1-label` fades up (`apt.fadeIn`-style tween) at 7.2.
  - `#road-split` fades in and van continues midpoint→right edge: `tl.to("#van-icon", {left:"96%", duration: 3.0, ease:"power1.inOut"}, 10.0)` (covers "three hours at sixty kilometers", spoken 9.18–11.64).
  - `#leg2-label` fades up at 10.3.
- **CAMERA MOVEMENT:** None — static composition, van is the only moving actor.
- **TRANSITIONS:** Van settles at the road's right edge exactly as Scene 3 opens (no cut — same frame continues).
- **EDUCATIONAL PURPOSE:** Anchors the two given (speed, time) pairs to a concrete visual before any math appears.
- **VISUAL HIERARCHY:** Question card > van + road > labels (labels are supporting detail, ≥22px per design.md floor).
- **ATTENTION MANAGEMENT:** Van's motion draws the eye left→right in sync with narration order (leg 1 then leg 2) — no competing motion elsewhere.
- **MOTION NOTES:** One continuous van, one continuous road — object continuity holds through Phase 1 and into the pinned recap.
- **CONTINUITY FROM PREVIOUS SCENE:** The question card's rise (ending 4.2s into this scene's narration) has just settled into its resting position as the van begins moving — reads as one continuous beat, question settles then illustration takes over.

### SCENE 3 — The Ask (12.0 – 17.3s)
- **VOICEOVER:** "The question is asking us to find the average speed of the whole journey."
- **VISUAL OBJECTIVE:** Let the fully-built illustration hold so the viewer absorbs the full journey before the "find average speed" ask lands.
- **SCREEN LAYOUT:** Unchanged — van at rest at the road's right edge, both leg labels visible.
- **ON-SCREEN ELEMENTS:** Same as Scene 2, static.
- **ANIMATION DETAILS:** None — deliberate hold, no new motion (avoids unnecessary decorative animation per constraints).
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Ends as `apt.pinFlow` begins at `PIN_TIME=17.3`.
- **EDUCATIONAL PURPOSE:** Gives the "average speed" question room to land without visual noise.
- **VISUAL HIERARCHY:** Question card text (with "average speed" in `--primary`) is the read target.
- **ATTENTION MANAGEMENT:** Static frame = full attention on narration.
- **MOTION NOTES:** N/A (intentional stillness).
- **CONTINUITY FROM PREVIOUS SCENE:** Van's arrival at the road's right edge (end of Scene 2's motion) is exactly this scene's opening frame — no new element enters.

### SCENE 4 — Given Card (opens early, 5.0s) + Pin (17.3s)
- **VOICEOVER:** Given card opens under "at forty-five kilometers per hour" (5.0s, ahead of the actual value words so the box is ready); pin happens later, under "Now, first, let us find the distance covered in each part." *(17.56–20.70)*
- **VISUAL OBJECTIVE:** Recap each (speed, time) pair in sync with the exact word it's spoken, low on screen so it doesn't collide with the Phase‑1 question/illustration; only later does the layout reorganize into solve-mode (question shrinks to top, van recap pins small).
- **SCREEN LAYOUT:** Given `SolutionCard` opens low-center (left:580px, top:780px, **width:760px** — widened from the 640px default so both recap lines sit on one line each), independent of the pinFlow glide (stays in place through the pin transition, matching the established pattern of opening a Given card early and holding it fixed). `#q-pinned` (left:385px, top:30px, width:1275px) replaces `#q-full-card` at `PIN_TIME`. `#illus-pinned` (left:280px, top:190px, width:1300px, height:150px) holds a shrunk van icon + single centered recap line.
- **ON-SCREEN ELEMENTS:** Given `solution-card` with chip "Given"; pinned question card; pinned van icon (`#illus-pinned-icon`) + recap text (single centered line, `justify-content:center`, ≥21px).
- **ANIMATION DETAILS:**
  - `apt.cardEnter(tl, "#card-given .solution-card", 5.0)` (**GIVEN_TIME**).
  - `apt.textReveal(tl, "#card-given .math")` — word-level `.rv` spans synced to the actual spoken values: "2 hr" `data-t="6.019"` ("two"), "45 km/hr" `data-t="6.839"` ("forty-five"), "3 hr" `data-t="9.179"` ("three"), "60 km/hr" `data-t="10.5"` ("sixty"). The "Time =" / "Speed =" labels are static (not narration-matched) text around each value.
  - `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 17.3)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 17.3)` — real glide, not a fade swap.
  - `apt.fadeOut(tl, "#serial-num", 17.3, 0.5)`.
  - `apt.ambientLoop(tl, "#illus-pinned-icon", 19.2, 74.4)` — small finite bob on the pinned van icon so the pinned area doesn't sit dead through the long step sequence.
- **CAMERA MOVEMENT:** None — the pinFlow glide is the only large-scale motion.
- **TRANSITIONS:** `apt.pinFlow` (0.8s, `power2.inOut`) is the scene's defining transition at `PIN_TIME` — question+van visibly flow into their pinned slot, not a hard cut. The Given card itself has no transition here — it simply persists through the glide.
- **EDUCATIONAL PURPOSE:** Confirms the two given (speed, time) pairs exactly as each is spoken, before any arithmetic starts.
- **VISUAL HIERARCHY:** Given card (low-center, white, shadowed, wide) > pinned question (top, smaller) > pinned van recap.
- **ATTENTION MANAGEMENT:** Given card's two reveals land precisely on their spoken words; the later pinFlow glide is the only other motion in this scene, well-separated in time.
- **MOTION NOTES:** Van icon continuity: same icon, now small and centered in the pinned recap, per object-continuity rule.
- **CONTINUITY FROM PREVIOUS SCENE:** The Given card, already open and stationary since 5.0s, is undisturbed by the pinFlow glide happening around it — the van (still at rest at the road's right edge from Scene 3) is the element that glides into the shrunk pinned position.

### SCENE 5 — Step 1: Distances (21.2 – 40.4s)
- **VOICEOVER:** "We know the formula: distance is equal to speed into time. For the first part, distance is equal to forty-five into two. This gives us ninety kilometers. Now the distance covered in the second part is equal to sixty into three. This gives us one hundred and eighty kilometers." *(21.24–39.02)*
- **VISUAL OBJECTIVE:** Establish the Distance = Speed × Time formula, then apply it to both legs in turn.
- **SCREEN LAYOUT:** Given card morphs out to the left stack; Step 1 `SolutionCard` (chip "Step 1") opens center, same slot.
- **ON-SCREEN ELEMENTS:** Step 1 card, three `.math` lines: formula, Part 1 computation, Part 2 computation. Given card now a `stack-card` (badge "G") top-left with `.stack-line` growing between it and Step 1's future circle.
- **ANIMATION DETAILS:**
  - `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 20.239)` (**GIVEN_MORPH**; Step 1 enters at `20.239 + 1.0 = 21.239`).
  - `apt.cardEnter(tl, "#card-step1 .solution-card", 21.239)` (**STEP1_TIME**).
  - `apt.textReveal(tl, "#card-step1 .math")` with word-level `.rv` spans:
    - Formula: "Distance" `22.68` · "=" `23.399` · "Speed" `23.879` · "×" `24.18` · "Time" `24.479`
    - Part 1 (line-level intro + word-level numbers): "Part 1:" `25.279` (line) · "45" `27.68` · "×" `28.239` · "2" `28.519` · "=" `29.539` · "90 km" `30.119` (hi)
    - Part 2: "Part 2:" `31.719` (line) · "60" `35.0` · "×" `35.639` · "3" `35.979` · "=" `36.979` · "180 km" `37.419` (hi)
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Given→stack morph (0.8s, `power2.inOut`) at the scene's start; scene ends as Step 1 itself begins morphing at `40.439`.
- **EDUCATIONAL PURPOSE:** Teaches the core D=S×T relationship, then two worked applications side by side conceptually (same formula, two legs).
- **VISUAL HIERARCHY:** Active Step 1 card centered/largest; Given stack card small, top-left, secondary.
- **ATTENTION MANAGEMENT:** One `.rv` reveals at a time, each tied to its own spoken word — no simultaneous competing reveals.
- **MOTION NOTES:** This is the longest single card (~19s) because it carries the formula + two parallel computations — text-reveal pacing (word-by-word) keeps it from feeling static despite the long hold.
- **CONTINUITY FROM PREVIOUS SCENE:** The Given card's `card-content` fades out first (per `morphToStack`), then its box glides/shrinks into the stack slot while Step 1's box rises into the vacated center slot — reads as one continuous handoff, not two unrelated cards trading places.

### SCENE 6 — Step 2: Total Distance (41.4 – 52.8s)
- **VOICEOVER:** "Now that we know both the distances, we can find the total distance. Total distance is equal to ninety plus one hundred and eighty. This gives us two hundred and seventy kilometers. Now this part is completed." *(39.42–51.44)*
- **VISUAL OBJECTIVE:** Sum the two leg-distances into one total.
- **SCREEN LAYOUT:** Step 1 morphs to stack (badge "1"); Step 2 card (chip "Step 2") opens center.
- **ON-SCREEN ELEMENTS:** Step 2 card, `.math`: "Total Distance = 90 + 180" then "= 270 km". Stack column now shows G, 1. `.stack-line` (`#line-g-1`) grows in at the same moment Step 1 joins the stack.
- **ANIMATION DETAILS:**
  - `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 40.439)` (**STEP1_MORPH**; Step 2 enters at `41.439`).
  - `apt.stackLineGrow(tl, "#line-g-1", 40.439)`.
  - `apt.cardEnter(tl, "#card-step2 .solution-card", 41.439)` (**STEP2_TIME**).
  - `apt.textReveal(tl, "#card-step2 .math")`: "Total" `43.319` · "Distance" `43.659` · "=" `44.399` · "90" `45.379` (hi) · "+" `45.84` · "180" `46.18` (hi) — then "=" `47.619` · "270 km" `48.259` (ans).
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Step 1→stack morph opens the scene; Step 2→stack morph closes it (at `52.759`).
- **EDUCATIONAL PURPOSE:** Reinforces that total distance is a simple sum of the two already-computed legs.
- **VISUAL HIERARCHY:** Step 2 active card centered; stack column (G, 1) small and steady on the left.
- **ATTENTION MANAGEMENT:** Single new reveal thread; stack column is static once each card lands (no re-animation of settled cards).
- **MOTION NOTES:** `.stack-line` between G and 1 grows exactly as Step 1 lands in the stack — both circles are on screen before the connector appears.
- **CONTINUITY FROM PREVIOUS SCENE:** Step 1's card is mid-text-fade-out as this scene opens (per `morphToStack`'s own 0.25s text fade), with its box already gliding toward the stack slot — Step 2's card rises into the same vacated center position the instant the box lands, continuing the established center→left handoff pattern.

### SCENE 7 — Step 3: Total Time (53.8 – 61.2s)
- **VOICEOVER:** "Let us find the total time taken. Total time is equal to two hours of first part plus three hours of second part. This gives us five hours." *(51.80–60.12)*
- **VISUAL OBJECTIVE:** Sum the two leg-times into total time, mirroring Step 2's structure for the distance side.
- **SCREEN LAYOUT:** Step 2 morphs to stack (badge "2"); Step 3 card (chip "Step 3") opens center.
- **ON-SCREEN ELEMENTS:** Step 3 card, `.math`: "Total Time = 2 hr + 3 hr" then "= 5 hours". Stack column now shows G, 1, 2 with `.stack-line` (`#line-1-2`) grown in.
- **ANIMATION DETAILS:**
  - `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 52.759)` (**STEP2_MORPH**; Step 3 enters at `53.759`).
  - `apt.stackLineGrow(tl, "#line-1-2", 52.759)`.
  - `apt.cardEnter(tl, "#card-step3 .solution-card", 53.759)` (**STEP3_TIME**).
  - `apt.textReveal(tl, "#card-step3 .math")`: "Total" `53.759` · "Time" `54.119` · "=" `55.119` · "2 hr" `55.599` (hi) · "+" `56.919` · "3 hr" `57.219` (hi) — then "=" `59.119` · "5 hours" `59.539` (ans).
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Step 2→stack morph opens; Step 3→stack morph (`61.159`) closes.
- **EDUCATIONAL PURPOSE:** Parallels Step 2's structure — viewer sees the same "sum the two legs" pattern applied to time.
- **VISUAL HIERARCHY:** Step 3 active card centered; three-card stack column (G, 1, 2) steady on the left.
- **ATTENTION MANAGEMENT:** Single reveal thread, consistent with prior steps — predictable rhythm builds toward the final formula.
- **MOTION NOTES:** Shortest active-card hold so far (~7.4s) — matches the shorter narration for this simpler sum.
- **CONTINUITY FROM PREVIOUS SCENE:** Step 2's box is still completing its glide into the stack (its text already fully faded per the morph's text-then-box ordering) as Step 3's card rises into the same center slot — the center-stage handoff rhythm established in Scenes 5–6 continues unbroken.

### SCENE 8 — Step 4: Average Speed + Answer (62.2 – 74.4s)
- **VOICEOVER:** "Now we have everything we need. Average speed is equal to total distance divided by total time. Putting the values, average speed is equal to two hundred and seventy divided by five. After simplifying this, we get fifty-four kilometers per hour. So the average speed of the delivery van is fifty-four kilometers per hour." *(60.54–78.20)*
- **VISUAL OBJECTIVE:** State the average-speed formula, substitute the computed totals, and reveal the final answer.
- **SCREEN LAYOUT:** Step 3 morphs to stack (badge "3"); Step 4 card (chip "Step 4") opens center — widened slightly (per design.md §9 sizing rule) to fit "Average Speed = Total Distance ÷ Total Time" on one line.
- **ON-SCREEN ELEMENTS:** Step 4 card, `.math` in three lines: formula, substituted numbers "270 ÷ 5", and the answer "= 54 km/hr" (`.ans`). Stack column shows G, 1, 2, 3 with `.stack-line` (`#line-2-3`) grown in.
- **ANIMATION DETAILS:**
  - `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 61.159)` (**STEP3_MORPH**; Step 4 enters at `62.159`).
  - `apt.stackLineGrow(tl, "#line-2-3", 61.159)`.
  - `apt.cardEnter(tl, "#card-step4 .solution-card", 62.159)` (**STEP4_TIME**).
  - `apt.textReveal(tl, "#card-step4 .math")`:
    - Formula: "Average" `62.159` · "Speed" `62.479` · "=" `62.979` · fraction (`.frac`, top "Total Distance" / bottom "Total Time") `63.399`
    - Substitution: "=" `67.04` · fraction (top "270" / bottom "5") `68.299`
    - Answer: "=" `72.18` · "54 km/hr" `72.4` (ans)
  - Division is shown as a stacked `.frac` (numerator/top, denominator/bottom) throughout this card and its stack counterpart — no `÷` glyph anywhere in Step 4.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Step 3→stack morph opens the scene; this is the LAST active-card scene — it feeds directly into the options reveal (Scene 9) rather than another step card.
- **EDUCATIONAL PURPOSE:** The payoff scene — connects the two previously-computed totals (270 km, 5 hr) into the final division that answers the question.
- **VISUAL HIERARCHY:** The `.ans` span "54 km/hr" is the highest-emphasis element on screen once revealed (via `.ans` styling, no extra pulse layered on top — text-reveal is the only animation on it).
- **ATTENTION MANAGEMENT:** Three sequential reveals (formula → substitution → answer) mirror the narration's own three-beat structure, so the viewer's eye and ear move together.
- **MOTION NOTES:** No `apt.emphasize`/`apt.resultReveal` on the "54 km/hr" span — `apt.textReveal` is its only animation, per the no-double-animation rule.
- **CONTINUITY FROM PREVIOUS SCENE:** Step 3's morph into the stack (text fade → box glide) is completing as Step 4 rises into the vacated center slot, same handoff established across Scenes 5–8 — by this point the pattern is fully legible to the viewer, so the final card's arrival reads as expected rather than novel.

### SCENE 9 — Options Reveal (74.4 – 81.6s)
- **VOICEOVER:** "...we get fifty-four kilometers per hour. So the average speed of the delivery van is fifty-four kilometers per hour. Hence, the correct answer is option C." *(tail of Scene 8's narration through 78.20, then 78.68–81.64)*
- **VISUAL OBJECTIVE:** Clear the stage, present all four options, and land on the correct one exactly as it's spoken.
- **SCREEN LAYOUT:** Step 4 morphs to stack (badge "4"); pinned illustration fades out; pinned question recenters (`xShift:160, yShift:180`) to align with `.pinned-col`; 2×2 options grid fades in on the right.
- **ON-SCREEN ELEMENTS:** Full 4-card stack (G, 1, 2, 3, 4) with all three connector lines, now permanently visible (never faded during this phase). Options grid: A) 52 km/hr, B) 56 km/hr, C) 54 km/hr, D) 50 km/hr.
- **ANIMATION DETAILS:**
  - `apt.morphToStack(tl, "#card-step4 .solution-card", "#stack-step4 .stack-card", 74.4)` (**STEP4_MORPH**).
  - `apt.stackLineGrow(tl, "#line-3-4", 74.4)`.
  - `apt.fadeOut(tl, "#illus-pinned", 74.4)`.
  - `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 74.4)` (**RECENTER_TIME**).
  - `apt.fadeIn(tl, "#options-reveal", 75.3)`.
  - `apt.optionsStagger(tl, ".opt-btn", 75.9)` (stagger 0.12s across A–D).
  - `apt.correctPulse(tl, ".opt-btn.correct", 80.9)` — timed to land as "option C" is spoken (80.94–81.64).
  - `apt.fadeOut(tl, "#root > div", 82.3, 1.2)` (**END_FADE_TIME**) — synchronized end-fade of every top-level element.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Step 4→stack morph opens the scene; the whole frame fades out together at the very end (no per-element cuts).
- **EDUCATIONAL PURPOSE:** Confirms the computed 54 km/hr against the actual answer choices, closing the loop between "we calculated X" and "X is option C."
- **VISUAL HIERARCHY:** Options grid > recentered question > stack column (now archival/reference).
- **ATTENTION MANAGEMENT:** Options stagger in as a group (one coordinated beat), then only option C moves again (the pulse) — nothing else competes for attention during the reveal.
- **MOTION NOTES:** Stack cards and connector lines are NOT faded during this phase — they stay fully visible through the end, per design.md.
- **CONTINUITY FROM PREVIOUS SCENE:** Step 4's morph-to-stack is the direct continuation of the handoff pattern from Scenes 5–8 (final card joins the stack), while the pinned question's recenter and the options grid's entrance are new motions introduced specifically for this closing scene — the frame reorganizes once, then holds.

---

## PART 3: Asset List Required

| Asset | Source | Notes |
|---|---|---|
| `illustration/van-svgrepo-com.svg` | User-supplied (already in folder) | Recolor fills to `--primary` (`#6373db`) family via straight hex find-and-replace only — no re-path/restructure/resize per design.md §5C rule. Used once (Phase 1 hero + shrunk pinned copy), same object throughout. |
| `assets/serial-num-badge.svg` | `_template/assets/` (copy into `q25/assets/`) | Standard "Q" badge |
| `assets/logo.png` | `_template/assets/` (copy into `q25/assets/`) | Standard bottom-right logo |
| `design-system.css`, `animations.js` | `_template/` (copy into `q25/`) | Local copies required — HyperFrames serves only from the project folder |

No other custom illustration assets needed — the road/split-marker/labels are pure CSS (divs + text), consistent with "Illustration" component being per-question custom CSS per design.md.

---

## PART 4: Animation Complexity Notes

- **5 stack cards** (G, 1, 2, 3, 4) — one more than the template's 4-card example. Stack column top offsets: G=110px, 1=230px, 2=370px, 3=490px, 4=610px (generous ~120–140px gaps to comfortably fit each card's 2–4 line content within the 1920×1080 canvas before the bottom strip). Real final gaps/line geometry still come from `apt.setStackLine` at runtime, not these placeholder tops.
- **4 connector lines**: `#line-g-1`, `#line-1-2`, `#line-2-3`, `#line-3-4` — one more than the template example; each grows at its lower circle's `morphToStack` moment (Scenes 6, 7, 8, 9 respectively).
- **Step 1 is unusually long (~19s active)** because it carries both the formula and two parallel leg-distance computations — this is a deliberate merge (rather than 3 separate step cards) since all three lines share one visual "Distance = Speed × Time" theme; text-reveal pacing keeps it legible rather than static.
- **Single illustration asset reused three times**: full Phase‑1 hero, shrunk pinned recap, and (implicitly) referenced by the Given card's Part 1/Part 2 values — object continuity maintained throughout, no new vehicle introduced.
- **No `apt.stepFlow`** used anywhere (deprecated per template rules) — the left-column `.stack-line` growth is the only persistent connector.
- **No custom animation helpers invented** — every motion in this storyboard maps to an existing `animations.js` function.

---

## PART 5: Master Timeline Overview

```
TIME (s)   ELEMENT                          WHAT HAPPENS
─────────  ───────────────────────────────  ─────────────────────────────────
0.0        Background layers                Grid + strip + topic + logo visible
0.3        QuestionCard (lowered)            heroEnterLowered fade/scale in
0.8        SerialNum badge                   pops in at lowered y, mirrors card
3.6        QuestionCard + badge              RISE_TIME — rise to resting slot

[ GIVEN_TIME = 5.0 ]
4.0        Illustration group                fadeIn (0.5s) — hidden until now
4.0        Road line                         roadSweep draws in (solid black, 6px)
5.0        SolutionCard "Given" (low-center, width 760px)  cardEnter
5.9        Van icon                          drives left → midpoint (leg 1), on the road
6.019      Given card                        "2 hr" reveals (word "two")
6.839      Given card                        "45 km/hr" reveals (word "forty-five")
7.2        Leg 1 label                       "45 km/hr · 2 hr" fades up
9.179      Given card                        "3 hr" reveals (word "three")
10.0       Van icon                          drives midpoint → right edge (leg 2)
10.3       Leg 2 label                       "60 km/hr · 3 hr" fades up
10.5       Given card                        "60 km/hr" reveals (word "sixty")
13.0–17.3  (hold)                            Full illustration holds — "the ask" narrated

[ PIN_TIME = 17.3 ]
17.3       Question + van                    🌟 pinFlow — glide to pinned slot (0.8s)
17.3       SerialNum                         fadeOut (0.5s)
19.2       Pinned van icon                   ambientLoop begins (finite bob, → 74.4)

[ GIVEN_MORPH = 20.239 → STEP1_TIME = 21.239 ]
20.239     Given → stack (badge G)           🌟 morphToStack (0.8s)
21.239     SolutionCard "Step 1"             cardEnter; formula + 2 legs reveal (→39.02)

[ STEP1_MORPH = 40.439 → STEP2_TIME = 41.439 ]
40.439     Step 1 → stack (badge 1)          🌟 morphToStack; line-g-1 grows
41.439     SolutionCard "Step 2"             cardEnter; "90+180=270km" reveals (→48.26)

[ STEP2_MORPH = 52.759 → STEP3_TIME = 53.759 ]
52.759     Step 2 → stack (badge 2)          🌟 morphToStack; line-1-2 grows
53.759     SolutionCard "Step 3"             cardEnter; "2hr+3hr=5hr" reveals (→59.54)

[ STEP3_MORPH = 61.159 → STEP4_TIME = 62.159 ]
61.159     Step 3 → stack (badge 3)          🌟 morphToStack; line-2-3 grows
62.159     SolutionCard "Step 4"             cardEnter; formula (frac) → 270/5 (frac) → =54km/hr (→72.4)

[ STEP4_MORPH = RECENTER_TIME = 74.4 ]
74.4       Step 4 → stack (badge 4)          🌟 morphToStack; line-3-4 grows
74.4       Pinned illustration                fadeOut
74.4       Pinned question                   recenterForOptions (xShift 160, yShift 180)
75.3       Options grid                      fadeIn
75.9       Option buttons A/B/C/D            optionsStagger (0.12s stagger)
80.9       Option C                          correctPulse — lands on "...option C."

[ END_FADE_TIME = 82.3 ]
82.3       Everything                        fadeOut together (1.2s) → hold to 85s
```

### Standard durations used (unchanged, per README)
`questionEnter` 0.7s · `serialEnter` 0.55s · `cardEnter` 0.55s · **`morphToStack` 0.8s** · `stackEnter` 0.4s · `fadeIn`/`fadeOut` 0.4s · `optionsStagger` 0.45s×4 (stagger 0.12s) · `correctPulse` 0.4s yoyo · `pinFlow` 0.8s · `ambientLoop` 1.4s period.
