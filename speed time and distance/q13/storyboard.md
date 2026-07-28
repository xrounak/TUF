# Storyboard — Speed, Time and Distance / Q13 (Two Cars Meeting)

Question: Two cars start from towns 330 km apart and move towards each other with
speeds 50 km/hr and 60 km/hr. In how much time will they meet?
Correct answer: A) 3 hours

Video length: 79.5s (voiceover ends 77.799s, END_FADE at 78.3s + 1.2s fade)

---

## PART 1 — Narration Beat Analysis

| # | Time (s) | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|----------|-----------|---------------------|------------------|-------------------|
| 1 | 0.10–3.44 | "So welcome back again. Time for one more problem." | Cold open, orient viewer | Center screen | QuestionCard rises into view (hero, lowered start) |
| 2 | 4.02–10.94 | "...two cars start from two towns which are 330 km apart." | Establish the two-body setup + distance | Illustration | Two car icons + road build in; "330 km" distance label reveals |
| 3 | 11.70–17.74 | "The speed of the first car is 50...second car is 60 km/h." | Establish individual speeds | Speed labels | "50 km/h" under Car 1, "60 km/h" under Car 2 |
| 4 | 18.24–21.24 | "Also, both the cars are moving towards each other." | Establish direction of motion | Converging arrows | Inward-pointing arrows animate between the cars |
| 5 | 21.78–27.64 | "The question is asking...how many hours...let us understand one important concept." | Transition + pose the goal | Pinned layout | pinFlow glide; Given card opens with recap |
| 6 | 28.06–43.48 | "When two objects move towards each other...we add them...Now we know the formula." | Core concept: why speeds are ADDED, not subtracted | Given card, concept line | Concept line reveals inside Given card; long hold while explained |
| 7 | 43.98–55.50 | "Relative speed is equal to the sum...fifty plus sixty...110 km/hr." | Step 1 computation | Step 1 card | Formula → values → result, word-synced |
| 8 | 56.06–59.14 | "Now that we know the relative speed, we can find the time taken to meet." | Transition to Step 2 | Step 2 card opening | Step 1 morphs to stack; Step 2 card enters |
| 9 | 59.56–71.26 | "Time = Distance ÷ Relative Speed...330 ÷ 110...we get 3 hours." | Step 2 computation | Step 2 card | Formula → values → result, word-synced |
| 10 | 71.58–74.62 | "So the two cars will meet after three hours." | Confirm result | Stack + options area | Step 2 morphs to stack; layout recenters |
| 11 | 75.14–77.80 | "Hence, the correct answer is option A." | Reveal answer | Options grid | Options stagger in; correct option (A) pulses green |

---

## PART 2 — Scene-by-Scene Storyboard

### SCENE 1 — Cold Open (0.3s – 3.6s)
**VOICEOVER:** "So welcome back again. Time for one more problem."
**VISUAL OBJECTIVE:** Establish the question, vertically centered, before anything else exists.
**SCREEN LAYOUT:** `#q-full-card` centered horizontally (`left:50%`, `xPercent:-50`), vertically lowered by 180px (frame reads as centered since it's the only element).
**ON-SCREEN ELEMENTS:** `.q-card` with QUESTION_TEXT (numbers `330 km`, `50 km/hr`, `60 km/hr` in `.num` primary blue). `#serial-num` badge with fixed "Q" digit.
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.6)` — card fades/scales in at 0.3s from `y:230→180`, holds at 180 until RISE_TIME=3.6s then rises to `y:0` over 0.6s (power2.inOut), landing exactly as "problem." finishes. `#serial-num` pops in at 0.8s (`back.out(2)`) at the SAME lowered y-offset, then rises in parallel with the card at 3.6s.
**CAMERA MOVEMENT:** None (static frame, motion lives in the card).
**TRANSITIONS:** N/A (opening scene).
**EDUCATIONAL PURPOSE:** Give the viewer a beat to read the full question before any solving begins.
**VISUAL HIERARCHY:** QuestionCard > SerialNum badge.
**ATTENTION MANAGEMENT:** Single focal element — nothing else on screen yet except background/topic/logo.
**MOTION NOTES:** The lowered-then-rise motion reads as the card "settling" into its permanent frame position exactly on the narration beat.
**CONTINUITY FROM PREVIOUS SCENE:** N/A — video start.

### SCENE 2 — Illustration Build: Setup (4.0s – 10.94s)
**VOICEOVER:** "Now, in this problem, we are given that two cars start from two towns which are 330 km apart."
**VISUAL OBJECTIVE:** Introduce both cars and the distance between their starting towns.
**SCREEN LAYOUT:** `#illustration` (`left:50%`, `top:480px`, `width:1400px`, flex `justify-content:space-between`) — Car 1 (blue, `car.svg` as-is) at the left edge, Car 2 (`car.svg` mirrored `scaleX(-1)`) at the right edge, a thin road line between them, "330 km" label centered above the road.
**ON-SCREEN ELEMENTS:** `#car-1` (left, ~140px wide), `#car-2` (right, ~140px wide, mirrored), `#road-line` (horizontal bar, primary color, 4px), `#distance-label` ("330 km", 24px, primary color, centered above road).
**ANIMATION DETAILS:** At 6.0s: `apt.cardEnter`-style fade+scale-in on `#car-1` (fromTo y:20/scale:0.85/opacity:0 → resting, 0.55s `back.out(1.4)`). At 7.5s: same entrance on `#car-2` (mirrored). At 8.88s (word "which"): `apt.roadSweep(tl, "#road-line", 8.88, 0.9)` — road line expands from center outward (`scaleX:0→1`, `transformOrigin:center`). At 8.88s: `apt.fadeIn(tl, "#distance-label", 8.88)` and the "330 km" text itself scales up slightly (`fromTo scale:0.8→1, opacity:0→1`, matching the em phasize pattern but via a plain fromTo, not `apt.emphasize` since this is a first reveal not a re-emphasis).
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Illustration continues from empty into populated — no scene cut, pure element-by-element build.
**EDUCATIONAL PURPOSE:** Anchor the two towns and the 330 km gap visually before speeds are introduced.
**VISUAL HIERARCHY:** QuestionCard (top, static) > Illustration (growing focal point, center-lower).
**ATTENTION MANAGEMENT:** Each element enters exactly as its word is spoken — no simultaneous dumping of all illustration parts.
**MOTION NOTES:** Cars enter with a soft settle (`back.out`), not a hard cut, so the road feels like it's being populated rather than assembled instantly.
**CONTINUITY FROM PREVIOUS SCENE:** The QuestionCard from Scene 1 is still resting at its risen position (y:0); this scene only adds new elements below it — no camera/position change to the card.

### SCENE 3 — Illustration Build: Speeds (11.70s – 17.74s)
**VOICEOVER:** "The speed of the first car is 50 km/hr. The speed of the second car is 60 km/hr."
**VISUAL OBJECTIVE:** Attach a speed value to each car individually.
**SCREEN LAYOUT:** Same `#illustration` row; speed labels sit directly under each car.
**ON-SCREEN ELEMENTS:** `#speed-1-label` ("50 km/hr", 22px, primary, under Car 1), `#speed-2-label` ("60 km/hr", 22px, primary, under Car 2).
**ANIMATION DETAILS:** At 11.70s (word "The" of "The speed of the first car"): `apt.fadeIn(tl, "#speed-1-label", 11.70)` combined with a small `y:10→0` rise (plain `fromTo`, 0.4s). At 15.30s: identical treatment on `#speed-2-label`.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Continuous build, no cut.
**EDUCATIONAL PURPOSE:** Make each car's speed individually legible before the "towards each other" relationship is introduced — sets up the Step 1 "why we add" concept visually.
**VISUAL HIERARCHY:** Distance label (top of illustration) > car icons > speed labels (bottom, smallest).
**ATTENTION MANAGEMENT:** Left-to-right reading order matches narration order (first car, then second car).
**MOTION NOTES:** Same soft fade+rise used for both labels — deliberately understated so it doesn't compete with the cars themselves.
**CONTINUITY FROM PREVIOUS SCENE:** Cars, road, and distance label from Scene 2 remain exactly as they landed; this scene only adds the two speed labels beneath them.

### SCENE 4 — Illustration Build: Direction (18.24s – 21.24s)
**VOICEOVER:** "Also, both the cars are moving towards each other."
**VISUAL OBJECTIVE:** Visually establish that the two cars are converging, not moving in the same direction — this is the single most important visual cue for the "add speeds" concept that follows.
**SCREEN LAYOUT:** Two small arrow glyphs (`#arrow-left→`, `#arrow-right←`) placed just inside each car, pointing inward toward the road's midpoint.
**ON-SCREEN ELEMENTS:** `#arrow-1` ("→", primary color, 28px, positioned right of Car 1), `#arrow-2` ("←", primary color, 28px, positioned left of Car 2).
**ANIMATION DETAILS:** At 18.24s: `apt.fadeIn(tl, "#arrow-1", 18.24)` and `apt.fadeIn(tl, "#arrow-2", 18.24)` simultaneously, each paired with a small inward `x` nudge (`fromTo x:-10→0` for arrow-1, `x:10→0` for arrow-2, 0.4s `power2.out`) so they read as "closing the gap" rather than a flat fade.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Continuous build — this is the final illustration element before Phase 1 ends.
**EDUCATIONAL PURPOSE:** Give the "towards each other" narration a concrete visual referent that Step 1's concept explanation can point back to.
**VISUAL HIERARCHY:** Arrows are the newest/smallest element, layered on top of the already-settled illustration.
**ATTENTION MANAGEMENT:** Arrows are the last thing to move — viewer's eye is drawn to the gap between the cars right as "towards each other" is spoken.
**MOTION NOTES:** The inward nudge (not just opacity) is what sells "closing distance," matching the Step 1 concept about to be explained.
**CONTINUITY FROM PREVIOUS SCENE:** All Scene 2–3 elements (cars, road, distance label, speed labels) are untouched; arrows are additive.

### SCENE 5 — Pin Flow (PIN_TIME = 21.5s)
**VOICEOVER (spans into):** "The question is asking us to find after how many hours they will meet. Now, let us understand one important concept."
**VISUAL OBJECTIVE:** Collapse the full Phase 1 layout into its pinned Phase 2 slot, freeing center-stage for the solution cards.
**SCREEN LAYOUT:** `#q-full-card` → `#q-pinned` (left:385px, top:30px, width:1275px, smaller text). `#illustration` → `#illus-pinned` (left:280px, top:190px, width:1300px, height:210px, two small car icons at either end with a "330 km · 50 & 60 km/hr" recap line between them — `justify-content:space-between` per the two-object illustration rule).
**ON-SCREEN ELEMENTS:** Same elements as Scenes 1–4, now gliding to smaller/repositioned slots.
**ANIMATION DETAILS:** `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 21.5)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 21.5)` — both fire at the same time so question and illustration move as one unit (0.8s `power2.inOut` glide, measured real positions). `apt.fadeOut(tl, "#serial-num", 21.5, 0.5)` in step with the glide (badge has no pinned counterpart).
**CAMERA MOVEMENT:** The glide IS the camera move — everything visibly slides/scales toward the top, not a cut.
**TRANSITIONS:** `pinFlow`, not `fadeOut`/`fadeIn` — real continuous motion.
**EDUCATIONAL PURPOSE:** Signal "setup is complete, solving begins now" without losing the question or the visual setup from view.
**VISUAL HIERARCHY:** Pinned question (top) > pinned illustration (upper-middle) > (about to open) Given card center-stage.
**ATTENTION MANAGEMENT:** The glide itself carries attention from the full-size elements to their new compact home.
**MOTION NOTES:** 0.8s duration, `power2.inOut` — matches every other pinFlow in the system, no custom easing.
**CONTINUITY FROM PREVIOUS SCENE:** The arrows from Scene 4 are still visible (part of `#illustration`) as the whole illustration glides into `#illus-pinned` — they don't need to survive into the pinned version's smaller icons, since the pinned recap swaps to the smaller car+label composition.

### SCENE 6 — Given Card: Recap + Concept (GIVEN_TIME = 8.0s → 42.5s)
**REVISED:** The Given card now opens early, in Phase 1, alongside the illustration build — not after the pin. Its recap lines land in sync with the exact moment each value is spoken over the illustration, instead of being restated as a summary afterward. To make room, the illustration shifted up (`top:460px → top:340px`) and the Given card sits lower (`top:420px → top:640px`) so the two never overlap while both are on screen at full size.
**VOICEOVER:** "...two towns which are 330 km apart. The speed of the first car is 50 km/hr. The speed of the second car is 60 km/hr... let us understand one important concept. When two objects move towards each other... we add them..."
**VISUAL OBJECTIVE:** Reveal each given value on the card at the same instant its illustration counterpart is being narrated, then land the "why speeds are ADDED" concept once the layout pins.
**SCREEN LAYOUT:** `#card-given .solution-card` at `left:640px; top:640px` (centered, `.card-content` wraps chip + math) — now BELOW the illustration (`top:340px`, height 220px, ends at 560px), clearing an 80px gap.
**ON-SCREEN ELEMENTS:** `.chip` "Given". `.math` with 4 lines: "Distance between towns = 330 km", "Speed of Car 1 = 50 km/hr", "Speed of Car 2 = 60 km/hr", "Moving towards each other → Add speeds".
**ANIMATION DETAILS:** `apt.cardEnter(tl, "#card-given .solution-card", 8.0)` — card fades/scales in right as "two towns" narration begins, ahead of the illustration's own distance/speed labels. `apt.textReveal(tl, "#card-given .math")` reveals each `.rv` at its own `data-t`, now matched LIVE to the real narration instead of being a later recap: line 1 ("Distance = 330 km") at `data-t="8.88"` (same instant the illustration's `#distance-label` reveals), line 2 ("Speed of Car 1 = 50 km/hr") at `data-t="11.70"` (same instant as `#speed-1-label`), line 3 ("Speed of Car 2 = 60 km/hr") at `data-t="15.30"` (same instant as `#speed-2-label`) — each is still one `.rv` per line (line-level), since these are paraphrased restatements of the spoken numbers, not word-for-word narration. Line 4 ("Moving towards each other → Add speeds") is unchanged — still fires after the pin, `data-t="28.059"` for "Moving towards each other →" and `data-t="36.279"` for the `.ans`-styled "Add speeds" conclusion, since that's genuinely when the concept is explained.
**CAMERA MOVEMENT:** None — the card sits statically through Phase 1's illustration build, then through the pin, then through the long concept-explanation hold (8.0s → 42.5s, ~34.5s total).
**TRANSITIONS:** N/A within scene — the card itself is NOT part of Scene 5's `pinFlow` (question + illustration glide to their pinned slots; the Given card stays anchored at `top:640px` throughout).
**EDUCATIONAL PURPOSE:** Ties each given value directly to its visual (car/label) the instant it's spoken, instead of asking the viewer to hold three numbers in mind through a summary later — the card becomes a live running note, not a recap.
**VISUAL HIERARCHY:** Question card (top) > Illustration (upper-middle, cars + labels) > Given card (lower-middle, now clear of the illustration).
**ATTENTION MANAGEMENT:** During 8.0s–21.5s the illustration and Given card update in lockstep (each value appears in both places at once) — no competing motion, just a doubled confirmation of the same fact. After the pin (21.5s), the Given card is the only thing left active center-stage for the concept explanation.
**MOTION NOTES:** This is the one Given card in the whole system with 4 reveal lines instead of 3 — justified because the "why add speeds" reasoning has no Step card of its own.
**CONTINUITY FROM PREVIOUS SCENE:** Card enters center-stage at 8.0s, well before Scene 5's pin (21.5s) — it is already on screen, mid-reveal, when the pin fires, and simply holds its position (not part of the glide) while everything else around it moves to its pinned slot.

### SCENE 7 — Given → Stack, Step 1 Opens (42.5s – 55.6s)
**VOICEOVER:** "Now we know the formula. Relative speed is equal to the sum of their speeds. Putting the values, relative speed is equal to fifty plus sixty. This gives us one hundred ten kilometers per hour."
**VISUAL OBJECTIVE:** Collapse the Given card into the stack, then compute the relative speed.
**SCREEN LAYOUT:** `#stack-given .stack-card` at `left:100px; top:140px`. `#card-step1 .solution-card` at `left:640px; top:460px`.
**ON-SCREEN ELEMENTS:** Given stack card (`.step-circle` "G" badge). Step 1 active card: `.chip` "Step 1", `.math` with "Relative Speed = Sum of Speeds" / "= 50 + 60" / "= 110 km/hr" (`.ans`).
**ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 42.5)` (0.8s, box+text crossfade). `apt.cardEnter(tl, "#card-step1 .solution-card", 43.9)`. `apt.textReveal(tl, "#card-step1 .math")` — word-level spans: "Relative" 43.979, "Speed" 44.439, "=" 44.919, "Sum" 45.439, "of" 45.639, "Speeds" 46.02 (line 1); "=" 49.319, "50" 50.279 (`.hi`), "+" 50.799, "60" 51.659 (`.hi`) (line 2); "=" 52.879, "110 km/hr" 53.399 (`.ans`) (line 3).
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** `morphToStack`, standard 0.8s.
**EDUCATIONAL PURPOSE:** First concrete calculation — turns the "add speeds" concept from Scene 6 into a number.
**VISUAL HIERARCHY:** Step 1 active card (center) > Given stack card (left, smaller, archived).
**ATTENTION MANAGEMENT:** The 0.7s empty-center gap between morph-start (42.5) and Step 1's `cardEnter` (43.9) — filled by "Now we know the formula" — reads as a natural breath before the new card appears.
**MOTION NOTES:** Word-level (not line-level) reveal here — every value is spoken near-verbatim, so each word gets its own beat.
**CONTINUITY FROM PREVIOUS SCENE:** The Given card's box visibly slides left and shrinks into the stack slot while its text crossfades out — Step 1's card fades in at the now-empty center a beat later, so the center stage is never left visibly "stuck" empty for more than ~1.4s.

### SCENE 8 — Step 1 → Stack, Step 2 Opens (55.6s – 71.4s)
**VOICEOVER:** "Now that we know the relative speed, we can find the time taken to meet. We know the formula. Time is equal to distance divided by relative speed. Putting the values, time is equal to three hundred thirty divided by one hundred ten. After simplifying this, we get three hours."
**VISUAL OBJECTIVE:** Collapse Step 1 into the stack, then compute the meeting time.
**SCREEN LAYOUT:** `#stack-step1 .stack-card` at `left:100px; top:360px`. `#card-step2 .solution-card` at `left:600px; top:440px; width:720px` (widened for the "Distance / Relative Speed" fraction line).
**ON-SCREEN ELEMENTS:** Step 1 stack card (`.step-circle` "1" badge). `#line-g-1` connector grows between the G and 1 circles. Step 2 active card: `.chip` "Step 2", `.math` with "Time = [Distance/Relative Speed]" / "= [330/110]" / "= 3 hours" (`.ans`) — the bracketed pairs are `.frac` components (numerator/denominator stacked, per design.md "Fraction"), not a "÷" glyph.
**ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 55.6)`. `apt.setStackLine("#line-g-1", "#stack-given .step-circle", "#stack-step1 .step-circle")` (called once, pre-timeline). `apt.stackLineGrow(tl, "#line-g-1", 55.6)` — same moment Step 1's circle joins the stack. `apt.cardEnter(tl, "#card-step2 .solution-card", 57.0)`. `apt.textReveal(tl, "#card-step2 .math")`: "Time" 60.959, "=" 61.379, `.frac` Distance/Relative Speed 61.84 (revealed as ONE unit, matching `template.html`'s own fraction reveal pattern) (line 1); "=" 65.919, `.frac` 330/110 66.319 (line 2); "=" 69.639, "3 hours" 70.639 (`.ans`) (line 3).
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** `morphToStack`, standard 0.8s.
**EDUCATIONAL PURPOSE:** Final calculation — converts relative speed into the answer the question actually asks for (time).
**VISUAL HIERARCHY:** Step 2 active card (center) > Step 1 + Given stack cards (left column, growing) > connector line (subtle, background).
**ATTENTION MANAGEMENT:** The 1.4s gap between morph-start (55.6) and Step 2's `cardEnter` (57.0) is filled by the transition sentence "Now that we know the relative speed, we can find the time taken to meet." — narration and visual pacing stay in lockstep.
**MOTION NOTES:** Same word-level reveal treatment as Step 1 for consistency.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1's card is still completing its slide-into-stack (box morph finishes 56.4s) as Step 2's card begins fading in at 57.0s — the connector line grows in the same beat Step 1 lands, so the left column reads as continuously assembling rather than in discrete jumps.

### SCENE 9 — Recenter + Options Reveal (71.4s – 78.3s)
**VOICEOVER:** "So the two cars will meet after three hours. Hence, the correct answer is option A."
**VISUAL OBJECTIVE:** Close out the solve, then reveal and confirm the correct option.
**SCREEN LAYOUT:** Step 2 collapses into the stack (`left:100px; top:560px`). `#illus-pinned` fades out. `#q-pinned` shifts via `recenterForOptions` (`x:160, y:180`) to align with `.pinned-col`. `#options-reveal .pinned-col` (top:400px) shows the 2×2 `.options-grid`.
**ON-SCREEN ELEMENTS:** Step 2 stack card (`.step-circle` "2"). `#line-1-2` connector between circles "1" and "2". Options A–D, with A marked `correct`.
**ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 71.4)`. `apt.setStackLine("#line-1-2", "#stack-step1 .step-circle", "#stack-step2 .step-circle")` (pre-timeline). `apt.stackLineGrow(tl, "#line-1-2", 71.4)`. `apt.fadeOut(tl, "#illus-pinned", 71.4)`. `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 71.4)`. `apt.fadeIn(tl, "#options-reveal", 72.4)`. `apt.optionsStagger(tl, ".opt-btn", 73.0)` (stagger 0.12s × 4). `apt.correctPulse(tl, ".opt-btn.correct", 75.6)` — timed to the word "correct" in "the correct answer is option A."
**CAMERA MOVEMENT:** `recenterForOptions` shifts the pinned question block right/down to align with the options column — the only camera-like reframe in the whole video.
**TRANSITIONS:** `morphToStack` (Step 2), `recenterForOptions` (question), `fadeIn`/`optionsStagger`/`correctPulse` (options) — all standard helpers, no custom animation.
**EDUCATIONAL PURPOSE:** Confirm the numeric answer (3 hours) against the multiple-choice options, closing the loop the question opened.
**VISUAL HIERARCHY:** Options grid (new focal point) > stack column (still visible, left) > recentered question (top).
**ATTENTION MANAGEMENT:** Stack cards and connector lines are NOT faded during this scene — they stay visible so the viewer can trace "3 hours" from the Step 2 card straight into option A.
**MOTION NOTES:** `correctPulse` (scale 1.05 yoyo) is the single emphasis beat of the whole video — reserved entirely for the answer confirmation.
**CONTINUITY FROM PREVIOUS SCENE:** Step 2's card is still mid-morph into the stack (completing at 72.2s) as the illustration fades and the question recenters at the same 71.4s mark — three transitions launch together but each targets a different element, so nothing visually collides.

### SCENE 10 — End Hold (75.6s – 78.3s+)
**VOICEOVER:** "...option A." (voiceover ends 77.799s)
**VISUAL OBJECTIVE:** Hold the fully solved frame — question, full stack, and highlighted correct option — before fading out.
**SCREEN LAYOUT:** Unchanged from Scene 9's final state.
**ON-SCREEN ELEMENTS:** Everything from Scene 9, static.
**ANIMATION DETAILS:** `apt.fadeOut(tl, "#root > div", 78.3, 1.2)` — every direct child of `#root` fades out together as one synchronized beat, ~0.5s after the voiceover ends.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Single end-fade, no cut.
**EDUCATIONAL PURPOSE:** Give the viewer a beat to register the complete answer before the video ends.
**VISUAL HIERARCHY:** N/A (hold).
**ATTENTION MANAGEMENT:** No new motion — deliberate stillness signals "this is the answer."
**MOTION NOTES:** N/A.
**CONTINUITY FROM PREVIOUS SCENE:** Direct continuation of Scene 9's landed state — no new entrance, just a hold then the single end-fade.

---

## PART 3 — Asset List Required

- `illustration/car.svg` (already provided) — used twice: as-is for Car 1 (facing right/default), and mirrored via CSS `transform: scaleX(-1)` for Car 2 (facing left) — no recoloring needed, the SVG's existing `#6373db` fill already matches `--primary`.
- No other new assets — road line, arrows, and labels are all CSS/text, no new SVGs.
- Shared: `serial-num-badge.svg`, `logo.png` (from `_template/assets/`, copied per 5B).

## PART 4 — Animation Complexity Notes

- Two illustration objects (cars) instead of the template's trains — same `justify-content:space-between` two-object pattern for both the full (Phase 1) and pinned (Phase 2+) illustration, per design.md.
- Given card carries 4 reveal lines (not the usual 3) because the "why we add speeds" concept has no dedicated Step card — it's folded into Given as a line-level + nested word-level reveal combo (line reveals at once, but the "Add speeds" conclusion inside it gets its own later timestamp).
- Only 2 Step cards (not 3–4 like the template example) — this problem has exactly two calculations (relative speed, then time), so the stack only ever holds G/1/2.
- No `apt.ambientLoop` used — the Given card's own staged text reveal already carries visual interest through the long 22.5–42.5s concept-explanation hold, so a secondary ambient bob on the pinned illustration isn't needed.
- No `apt.emphasize`/`apt.resultReveal` used anywhere — all number reveals go through `apt.textReveal`'s `.rv` mechanism per the "single reveal only" rule.

## PART 5 — Master Timeline Overview

```
TIME (s)   ELEMENT                          WHAT HAPPENS
─────────  ───────────────────────────────  ─────────────────────────────────
0.0        Background layers                Checker/dotted grid, bottom strip, topic, logo
0.3        QuestionCard                      heroEnterLowered (rises at 3.6s)
0.8        SerialNum badge                   pops in, rises with card at 3.6s
6.0        Car 1 (illustration)              cardEnter-style fade+scale
7.5        Car 2 (illustration, mirrored)    cardEnter-style fade+scale
8.88       Road line + "330 km" label        roadSweep + fadeIn
11.70      "50 km/hr" label (Car 1)          fadeIn + rise
15.30      "60 km/hr" label (Car 2)          fadeIn + rise
18.24      Converging arrows                 fadeIn + inward nudge

8.0        SolutionCard "Given"              cardEnter — opens early, in Phase 1 (top:640px, below illustration)
8.88       Given line 1                      textReveal — "Distance = 330 km" (live, matches illustration label)
11.70      Given line 2                      textReveal — "Speed of Car 1 = 50 km/hr" (live)
15.30      Given line 3                      textReveal — "Speed of Car 2 = 60 km/hr" (live)

[ PIN_TIME = 21.5 ]
21.5       Question + Illustration           pinFlow (0.8s glide) → pinned slots (Given card NOT part of glide, stays put)
28.06      Given line 4 (concept, part 1)    textReveal — "Moving towards each other →"
36.28      Given line 4 (concept, part 2)    textReveal — "Add speeds" (.ans)

[ STEP CYCLE ]
42.5       Given → Given stack               morphToStack (0.8s)
43.9       SolutionCard "Step 1"             cardEnter
43.98–53.4 Step 1 formula/values/result      textReveal, word-level
55.6       Step 1 → Step 1 stack             morphToStack (0.8s) + line-g-1 grows
57.0       SolutionCard "Step 2"             cardEnter
60.96–70.6 Step 2 formula/values/result      textReveal, word-level

[ PHASE 3 — OPTIONS REVEAL ]
71.4       Step 2 → Step 2 stack             morphToStack (0.8s) + line-1-2 grows
71.4       Illustration fades, question       fadeOut(illus-pinned) + recenterForOptions
           recenters
72.4       options-reveal container          fadeIn
73.0       Option buttons A/B/C/D            optionsStagger (stagger 0.12s)
75.6       Correct option (A)                correctPulse
78.3       End fade                          fadeOut(#root > div), 1.2s
79.5       End                               Video complete
```
