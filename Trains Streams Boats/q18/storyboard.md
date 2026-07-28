# Storyboard — Trains, Streams and Boats · Q18
**"A 200 m train running at 54 km/h crosses a platform in 30 seconds. Find the length of the platform."**
Options: A) 220 m  B) 250 m ✓  C) 280 m  D) 310 m
Duration: 84.619s (voiceover.wav)

---

## PART 1: Narration Beat Analysis

| # | Time | Narration | Purpose | Focus | Visual objective |
|---|------|-----------|---------|-------|-------------------|
| 1 | 0.12–3.60 | "So welcome back again. It's time to solve one more problem." | Cold open | Center frame | Question card rises into its resting slot on "problem." |
| 2 | 3.72–9.24 | "Now, in this problem, we are given that a train is two hundred meters long and it is running at fifty-four kilometers per hour." | State givens | Train visual | Train enters on the track; "200 m" tag pops on "two hundred meters"; "54 km/h" tag pops on "fifty-four kilometers per hour" |
| 3 | 9.90–15.40 | "The train crosses a platform in thirty seconds. The question is asking us to find the length of the platform." | State the unknown | Platform visual | Platform appears on "platform"; "30 s" tag pops on "thirty seconds"; a "? m" target label pops on "length of the platform" |
| 4 | 15.86–20.96 | "Now, the important words here are, 'crosses a platform.' What does this actually mean?" | Flag the trap phrase | Callout | Value tags dim; a highlight/pulse draws attention to the platform, setting up the concept beat |
| 5 | 21.36–29.04 | "When a train crosses a platform, it does not cover only the platform. The entire train has to enter the platform and then completely come out of it." | Teach the core rule visually | Train sliding across platform | Two-stage crossing: (A) engine reaches platform's far edge — "✗ not enough yet"; (B) train continues until its rear clears the far edge — "✓ whole train is out" |
| 6 | 29.48–36.04 | "So the total distance covered is length of the train plus length of the platform. This is the basic concept to remember." | State the rule as a formula | Measuring bracket | A bracket spans the full slide distance (train width + platform width); label "Distance = Train Length + Platform Length" fades in |
| 7 | 36.44–39.66 | "Now, let us assume the length of the platform is x meter." | Define the unknown | Question pins | Question + illustration glide to pinned slot (PIN_TIME); Given card opens defining x |
| 8 | 39.96–48.34 | "Before using the formula, let us convert the speed into meter per second. Fifty-four multiplied by five divided by eighteen gives us fifteen meter per second. Done." | Step 1 — unit conversion | Given → Step 1 card | Given morphs to stack; Step 1 card shows 54 × 5/18 = 15 m/s (fraction component for 5/18) |
| 9 | 48.74–54.70 | "Now we have all the values we need. We know distance equals speed multiplied by time." | Step 2 setup — state the formula | Step 2 card | Step 1 morphs to stack; Step 2 card opens with the Distance = Speed × Time formula |
| 10 | 55.06–63.58 | "So distance equals fifteen multiplied by thirty equals four hundred fifty meters. Now that we have found the total distance, we can use it in the next step." | Step 2 — compute total distance | Step 2 card | 15 × 30 = 450 m reveals word-by-word |
| 11 | 63.98–78.78 | "Since length of train plus length of platform equals total distance, we get two hundred plus x equals four hundred fifty. After simplifying this, we get x equals four hundred fifty minus two hundred, which is two hundred fifty meters." | Step 3 — solve for x | Step 3 card | Step 2 morphs to stack; Step 3 card builds 200 + x = 450 → x = 450 − 200 → x = 250 m |
| 12 | 78.84–84.62 | "Hence, the length of the platform is two hundred fifty meter, so the final answer will be option B." | Reveal answer | Options grid | Step 3 morphs to stack; options grid fades in, stagger-reveals A–D, correct option (B) pulses on "option B" |

---

## PART 2: Scene-by-Scene Storyboard

### SCENE 1 — Cold Open (0–3.6s)
- **TIMESTAMP:** 0.0–3.6s
- **VOICEOVER:** "So welcome back again. It's time to solve one more problem."
- **VISUAL OBJECTIVE:** Establish the question card as the sole focus, using the standard lowered hero entrance.
- **SCREEN LAYOUT:** Dotted-grid + bottom-strip background always visible. Question card (`#q-full-card`) centered, starting lowered per `apt.heroEnterLowered`.
- **ON-SCREEN ELEMENTS:** `.q-card` with full question text (200 m, 54 km/h, platform, 30 seconds accented via `.num`); `.serial-num` badge with fixed "Q" digit.
- **ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.6)` — card fades/scales in at 0.3s (lowered), rises to resting position exactly at 3.6s (end of "problem."). Serial badge pops in parallel at 0.8s, rises in tandem at 3.6s.
- **CAMERA MOVEMENT:** None (static frame, motion is internal to elements).
- **TRANSITIONS:** N/A (opening scene).
- **EDUCATIONAL PURPOSE:** Orient the viewer to the question before any data is shown.
- **VISUAL HIERARCHY:** Question card > serial badge > background.
- **ATTENTION MANAGEMENT:** Single element on screen — no competition for focus.
- **MOTION NOTES:** Card holds "vertically centered while alone" illusion until it rises to make room for the illustration.
- **CONTINUITY FROM PREVIOUS SCENE:** N/A — first scene.

### SCENE 2 — Train Enters, Given Values Tag (3.72–9.24s)
- **TIMESTAMP:** 3.72–9.24s
- **VOICEOVER:** "Now, in this problem, we are given that a train is two hundred meters long and it is running at fifty-four kilometers per hour."
- **VISUAL OBJECTIVE:** Introduce the train visual and pin the two given numeric values to it as they're spoken.
- **SCREEN LAYOUT:** Illustration area centered below the (now risen) question card, `top:400px`. Dashed track line sweeps in first (`apt.roadSweep`). Train image slides in from the left onto the track.
- **ON-SCREEN ELEMENTS:** `#illus-track` (dashed line), `#illus-train` (`illustration/train.svg`), speed tag above train ("54 km/h"), length tag below train ("200 m").
- **ANIMATION DETAILS:** Track sweeps in at 2.5s (`apt.roadSweep`, 0.7s). Train slides in from x:-200 with a back-out ease at 2.5s. Length tag ("200 m") pops with `back.out(2)` at 5.819s (word "two"). Speed tag ("54 km/h") pops at 7.639s (word "fifty-four").
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Continuous — no cut from Scene 1, question card is already resting, illustration builds beneath it.
- **EDUCATIONAL PURPOSE:** Anchor the two given numeric facts (200 m, 54 km/h) to their physical referent (the train) instead of leaving them as abstract text.
- **VISUAL HIERARCHY:** Train + tags now share focus with the pinned question card above.
- **ATTENTION MANAGEMENT:** Each tag pops exactly on its spoken word, directing the eye in sync with narration.
- **MOTION NOTES:** Tags use a small `back.out(2)` pop, matching the template's "value tag" idiom (see q9).
- **CONTINUITY FROM PREVIOUS SCENE:** The question card is already at rest from Scene 1's rise; this scene only adds the illustration beneath it — no re-entrance of the card.

### SCENE 3 — Platform Appears, Target Defined (9.90–15.40s)
- **TIMESTAMP:** 9.90–15.40s
- **VOICEOVER:** "The train crosses a platform in thirty seconds. The question is asking us to find the length of the platform."
- **VISUAL OBJECTIVE:** Introduce the platform as a second physical object, tag its crossing time, and flag the unknown (platform length) as the thing we're solving for.
- **SCREEN LAYOUT:** Platform image (`illustration/train-station.svg`) appears to the right of the train's resting position, at `top:20px` relative to the illustration box (same layout convention as q9), pre-crossing.
- **ON-SCREEN ELEMENTS:** `#illus-platform`, time tag ("30 s") above/near the platform, target label ("? m") marking the unknown platform length.
- **ANIMATION DETAILS:** Platform pops in with `back.out(1.5)` at 9.899s (start of "The train crosses..."). Time tag ("30 s") pops at 11.179s (word "thirty"). Target label ("? m") pops at 14.139s (word "length" in "length of the platform").
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Continuous build from Scene 2 — train stays in place, platform is added.
- **EDUCATIONAL PURPOSE:** Make explicit that platform length is the unknown, before the concept explanation begins.
- **VISUAL HIERARCHY:** Platform + tags equal priority to the train from Scene 2 — both objects now visible together.
- **ATTENTION MANAGEMENT:** "? m" target label is the visual hook that primes the viewer for the upcoming concept explanation.
- **MOTION NOTES:** None beyond standard pop-ins.
- **CONTINUITY FROM PREVIOUS SCENE:** Train and its tags remain exactly where Scene 2 left them; platform is added to their right without disturbing the train.

### SCENE 4 — Flag the Trap Phrase (15.86–20.96s)
- **TIMESTAMP:** 15.86–20.96s
- **VOICEOVER:** "Now, the important words here are, 'crosses a platform.' What does this actually mean?"
- **VISUAL OBJECTIVE:** Dim the numeric tags and let the platform read as the object of scrutiny, setting up the concept beat.
- **SCREEN LAYOUT:** Same illustration layout as Scene 3 — no new elements, just an emphasis change.
- **ON-SCREEN ELEMENTS:** Same as Scene 3 (train, platform, all tags).
- **ANIMATION DETAILS:** `apt.emphasize(tl, "#illus-platform", 17.6)` — a yoyo scale pulse on the platform, timed to the quoted phrase "crosses a platform."
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Continuous.
- **EDUCATIONAL PURPOSE:** Draw the viewer's attention specifically to the platform right before the crossing-mechanics explanation, priming them for the concept.
- **VISUAL HIERARCHY:** Platform temporarily elevated via the pulse.
- **ATTENTION MANAGEMENT:** A single pulse, not a distraction — narration is doing the heavy lifting here, animation just underlines it.
- **MOTION NOTES:** No new elements enter; this is a "beat" scene.
- **CONTINUITY FROM PREVIOUS SCENE:** Identical frame to Scene 3, just an emphasis pulse — nothing moves or is added.

### SCENE 5 — Two-Stage Crossing Proof (21.36–29.04s)
- **TIMESTAMP:** 21.36–29.04s
- **VOICEOVER:** "When a train crosses a platform, it does not cover only the platform. The entire train has to enter the platform and then completely come out of it."
- **VISUAL OBJECTIVE:** Prove the "Distance = Train Length + Platform Length" rule by literally sliding the train across the platform in two measured stages.
- **SCREEN LAYOUT:** Train wrapper (`#illus-train-wrap`) slides rightward over the fixed platform. Stage A distance = platform's own rendered width (240px); Stage B continues by the train's own rendered width (170px), for a total slide of 410px.
- **ON-SCREEN ELEMENTS:** `#illus-train-wrap` (sliding), fixed `#illus-platform`, two callouts: "✗ Engine only — not enough yet" and "✓ Whole train is out — crossing complete."
- **ANIMATION DETAILS:** Numeric tags fade to 0 at 21.359s (they'd clutter the crossing motion). Stage A: `x: 240` over ~3.56s starting at 21.359s. "✗ not enough yet" callout fades in at 23.279s, fades out at 25.359s (Stage B start). Stage B: `x: 410` (cumulative) over ~3.68s starting at 25.359s. "✓ whole train is out" callout fades in at 28.439s, fades out at 29.479s.
- **CAMERA MOVEMENT:** None — the train itself is the moving element.
- **TRANSITIONS:** Continuous from Scene 4 (platform pulse settles, then the slide begins).
- **EDUCATIONAL PURPOSE:** This is the core misconception-correction of the whole video — visually prove that "crossing" means clearing the platform with the REAR of the train, not just reaching it with the front.
- **VISUAL HIERARCHY:** The sliding train + its callout dominate the frame; everything else is static/dimmed.
- **ATTENTION MANAGEMENT:** Sequential callouts (✗ then ✓) mirror the sequential narration ("it does not cover only the platform" → "completely come out of it"), keeping visual and verbal beats locked together.
- **MOTION NOTES:** `power1.inOut` ease on both slide stages for a natural train-motion feel, matching q9's proven pattern.
- **CONTINUITY FROM PREVIOUS SCENE:** The train and platform are in the exact positions Scenes 2–3 left them; this scene's opening motion (tags fading, train beginning to slide) starts the instant Scene 4's pulse settles — no reset or re-entrance.

### SCENE 6 — Rule as Formula (29.48–36.04s)
- **TIMESTAMP:** 29.48–36.04s
- **VOICEOVER:** "So the total distance covered is length of the train plus length of the platform. This is the basic concept to remember."
- **VISUAL OBJECTIVE:** Crystallize the two-stage slide into a labeled formula.
- **SCREEN LAYOUT:** A measuring bracket spans the full 410px slide distance beneath the train's final resting position; a label sits beneath the bracket.
- **ON-SCREEN ELEMENTS:** `#brace-total` (horizontal bracket line + two tick marks), `#brace-total-label` ("Distance = Train Length + Platform Length").
- **ANIMATION DETAILS:** Bracket line grows via `scaleX: 0→1` (`power3.out`) at 29.479s. Tick marks pop (`back.out(2)`) at 29.879s. Label fades up at 30.079s.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Continuous — the bracket appears directly beneath where the train just finished sliding.
- **EDUCATIONAL PURPOSE:** Convert the physical demonstration (Scene 5) into the abstract rule the viewer will apply algebraically in the solution cards.
- **VISUAL HIERARCHY:** Bracket + label are now the primary focal point, train/platform recede to context.
- **ATTENTION MANAGEMENT:** No new motion competes with the label — it's the calm "conclusion" beat after the busy crossing animation.
- **MOTION NOTES:** None beyond the bracket grow-in.
- **CONTINUITY FROM PREVIOUS SCENE:** Bracket is drawn directly under the train's final position from Scene 5's Stage B — the train does not move or reset before the bracket appears.

### SCENE 7 — Pin + Given (36.44–39.66s)
- **TIMESTAMP:** 36.44–39.66s (PIN_TIME = 36.439, GIVEN_TIME = 36.84)
- **VOICEOVER:** "Now, let us assume the length of the platform is x meter."
- **VISUAL OBJECTIVE:** Transition from teaching mode to solving mode — pin the question/illustration to the top, open the Given card defining the unknown.
- **SCREEN LAYOUT:** `#q-full-card`/`#illustration` glide (`apt.pinFlow`) into `#q-pinned`/`#illus-pinned` at PIN_TIME=36.439. Given solution card enters center at GIVEN_TIME=36.84 (a real, distinct 0.4s gap — the pin lands, then the Given card opens as "assume... x meter" is spoken).
- **ON-SCREEN ELEMENTS:** Pinned question card + pinned mini illustration (train icon + platform icon + recap label "200 m · 30 s · 54 km/h"), `#card-given .solution-card`.
- **ANIMATION DETAILS:** `apt.pinFlow` for both card and illustration (0.8s glide) at 36.439. Serial badge fades out in step (`apt.fadeOut`, 0.5s) at 36.439. `apt.cardEnter` on Given card at 36.84, `apt.textReveal` on its `.math` content (stagger: "Train Length = 200 m" at 36.84, "Time = 30 s" at 37.4, "Let Platform Length = x m" at 38.0).
- **CAMERA MOVEMENT:** Glide motion only (pinFlow), no camera per se.
- **TRANSITIONS:** `apt.pinFlow` — real measured glide, not a fade swap.
- **EDUCATIONAL PURPOSE:** Formally name the unknown (x) right as the narration defines it, bridging from illustration to algebra.
- **VISUAL HIERARCHY:** Given card (center) > pinned question (top) > pinned illustration (mid-left recap).
- **ATTENTION MANAGEMENT:** Pin + Given entrance happen in quick succession but are visually distinct beats (glide, then a fresh card pop-in).
- **MOTION NOTES:** Pinned illustration will get an `apt.ambientLoop` bob on its icon (`#illus-pinned-icon`) starting right after this scene, since the solving phase runs long.
- **CONTINUITY FROM PREVIOUS SCENE:** The full-size question card and illustration from Scene 6 are exactly what glides into the pinned slot here — same elements, no re-entrance, `apt.pinFlow` carries their real rendered position/size into the transition.

### SCENE 8 — Step 1: Unit Conversion (39.96–48.34s)
- **TIMESTAMP:** 39.96–48.34s
- **VOICEOVER:** "Before using the formula, let us convert the speed into meter per second. Fifty-four multiplied by five divided by eighteen gives us fifteen meter per second. Done."
- **VISUAL OBJECTIVE:** Convert the given speed (54 km/h) into m/s using the standard ×5/18 factor.
- **SCREEN LAYOUT:** Given card morphs to the left stack (`apt.morphToStack`, 0.8s) at 39.959s. Step 1 card enters center at the same moment.
- **ON-SCREEN ELEMENTS:** `#card-step1 .solution-card` with chip "Step 1"; math: "Speed = 54 km/h" (line-level reveal) then "54 × 5/18 = 15 m/s" (word-level, `.frac` component for 5/18 — never a bare ÷).
- **ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-given...", "#stack-given...", 39.959)`. `apt.cardEnter` on Step 1 at 39.959. `apt.textReveal`: "Speed = 54 km/h" at 39.959; "54" at 43.68, "×" at 44.159, frac(5/18) at 45.059, "=" at 45.919, "15 m/s" (ans) at 46.299.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Standard 0.8s morph.
- **EDUCATIONAL PURPOSE:** Teach the standard km/h→m/s conversion factor, a prerequisite skill for the main formula.
- **VISUAL HIERARCHY:** Step 1 card (center) > Given stack card (left, now collapsed) > pinned question/illustration (top/recap).
- **ATTENTION MANAGEMENT:** Word-level reveal on the conversion arithmetic keeps eyes locked to the exact number being spoken.
- **MOTION NOTES:** `.frac` fraction renders 5 over 18, matching the design system's fraction component — no bare "÷" anywhere.
- **CONTINUITY FROM PREVIOUS SCENE:** Given card's box is still completing its morph into the stack (0.8s, landing at 40.759) as Step 1's card pop-in begins at the same instant — the two motions overlap by design (one card settling into the corner while the next rises center-stage), exactly as the template's morph timing intends.

### SCENE 9 — Step 2: Total Distance Formula + Compute (48.74–63.58s)
- **TIMESTAMP:** 48.74–63.58s
- **VOICEOVER:** "Now we have all the values we need. We know distance equals speed multiplied by time. So distance equals fifteen multiplied by thirty equals four hundred fifty meters. Now that we have found the total distance, we can use it in the next step."
- **VISUAL OBJECTIVE:** State the Distance = Speed × Time formula, then plug in the converted values to get the total crossing distance.
- **SCREEN LAYOUT:** Step 1 morphs to stack at 50.939s (as "We know distance equals..." begins); Step 2 card enters center.
- **ON-SCREEN ELEMENTS:** `#card-step2 .solution-card`, chip "Step 2"; math: "Distance = Speed × Time" (line-level, formula) then "15 × 30 = 450 m" (word-level).
- **ANIMATION DETAILS:** `apt.morphToStack` Step1→stack at 50.939. `apt.cardEnter` Step 2 at 50.939. `apt.textReveal`: formula line at 50.939; "15" at 56.18, "×" at 56.599, "30" at 57.239, "=" at 58.039, "450 m" (ans) at 58.439.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Standard 0.8s morph.
- **EDUCATIONAL PURPOSE:** Apply the basic Distance=Speed×Time formula using the just-converted speed, producing the total distance the train travels while crossing.
- **VISUAL HIERARCHY:** Step 2 card (center) > Given/Step 1 stack column (left) > pinned recap (top).
- **ATTENTION MANAGEMENT:** The formula line establishes WHY before the numbers establish WHAT — sequencing matches the narration's own order.
- **MOTION NOTES:** None beyond standard reveal/morph.
- **CONTINUITY FROM PREVIOUS SCENE:** Step 1's card is mid-morph into the stack (lands 51.739) as Step 2 pops in at the same 50.939 mark — same overlapping-transition pattern as Scene 8, keeping the whole sequence reading as one continuous take.

### SCENE 10 — Step 3: Solve for x (63.98–78.78s)
- **TIMESTAMP:** 63.98–78.78s
- **VOICEOVER:** "Since length of train plus length of platform equals total distance, we get two hundred plus x equals four hundred fifty. After simplifying this, we get x equals four hundred fifty minus two hundred, which is two hundred fifty meters."
- **VISUAL OBJECTIVE:** Apply the core rule from Scene 6 (Distance = Train + Platform) algebraically to solve for the unknown platform length.
- **SCREEN LAYOUT:** Step 2 morphs to stack at 63.979s; Step 3 card enters center.
- **ON-SCREEN ELEMENTS:** `#card-step3 .solution-card`, chip "Step 3"; math: "Length of Train + Length of Platform = Total Distance" (line-level recap of the rule) → "200 + x = 450" (word-level) → "x = 450 − 200 = 250 m" (word-level, final answer highlighted).
- **ANIMATION DETAILS:** `apt.morphToStack` Step2→stack at 63.979. `apt.cardEnter` Step 3 at 64.879 (right after the morph box lands at 64.779). `apt.textReveal`: rule-recap line at 64.879; "200" at 69.059, "+" at 69.54, "x" at 69.919, "=" at 70.019, "450" (hi) at 70.36; "x" at 74.22, "=" at 74.339, "450" at 74.699, "−" at 75.739, "200" at 76.18, "=" at 76.959, "250 m" (ans) at 77.08.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Standard 0.8s morph.
- **EDUCATIONAL PURPOSE:** This is the payoff scene — the physical rule from Scene 5/6 becomes the equation that directly yields the answer.
- **VISUAL HIERARCHY:** Step 3 card (center, largest information density) > full left stack column (Given/1/2) > pinned recap (top).
- **ATTENTION MANAGEMENT:** Three-beat word reveal (setup equation → rearrange → final answer) mirrors the narration's own three-beat structure, so no single reveal moment is overloaded.
- **MOTION NOTES:** Final "250 m" uses `.ans` styling (primary blue) consistent with every other card's answer highlight.
- **CONTINUITY FROM PREVIOUS SCENE:** Step 2's card is mid-morph into the stack (lands 64.779) exactly as Step 3 pops in at 64.879 — same overlapping pattern as Scenes 8–9, and the left stack column now shows all three prior steps continuously visible.

### SCENE 11 — Answer Reveal (78.84–84.62s)
- **TIMESTAMP:** 78.84–84.62s (RECENTER_TIME = 78.839)
- **VOICEOVER:** "Hence, the length of the platform is two hundred fifty meter, so the final answer will be option B."
- **VISUAL OBJECTIVE:** Clear the stage for the options grid, reveal all four options, and pulse the correct one exactly on "option B."
- **SCREEN LAYOUT:** Pinned illustration fades out; pinned question recenters (`apt.recenterForOptions`) to align with the options column; Step 3 morphs into its final stack position at the same moment.
- **ON-SCREEN ELEMENTS:** `#options-reveal` → `.options-grid` with 4 `.opt-btn` (A 220 m, B 250 m ✓, C 280 m, D 310 m).
- **ANIMATION DETAILS:** `apt.fadeOut` illus-pinned + `apt.recenterForOptions` + `apt.morphToStack` (Step3→stack) + `apt.stackLineGrow` all at 78.839. `apt.fadeIn` options-reveal at 79.2. `apt.optionsStagger` at 79.6 (stagger 0.12s ×4). `apt.correctPulse` on option B at 84.139 (word "option").
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Coordinated multi-element beat (illustration exit, question recenter, final morph, options entrance) all keyed to the same "Hence" moment.
- **EDUCATIONAL PURPOSE:** Confirm the computed answer (250 m) against the actual answer choice, closing the loop.
- **VISUAL HIERARCHY:** Options grid (center-right) > full stack column (left, all 3 steps + Given still visible) > pinned question (top).
- **ATTENTION MANAGEMENT:** Correct-option pulse is the final and only motion once the grid has settled — nothing competes with it.
- **MOTION NOTES:** Stack cards, circles, and connector lines are NOT faded here — they remain visible through the end, per the hard rule.
- **CONTINUITY FROM PREVIOUS SCENE:** Step 3's card (still fully visible and just-revealed at the end of Scene 10) is the exact element that morphs into the stack here — no fade-and-different-card swap; the "250 m" answer the viewer just saw carries directly into its collapsed stack form while the options grid opens beside it.

### SCENE 12 — End Hold (84.62–~86.5s)
- **TIMESTAMP:** ~85.5–86.5s
- **VOICEOVER:** (silence — narration complete)
- **VISUAL OBJECTIVE:** Hold the final frame briefly, then fade everything out together.
- **SCREEN LAYOUT:** Full frame — pinned question, complete stack (G/1/2/3), options grid with B highlighted.
- **ON-SCREEN ELEMENTS:** All of the above.
- **ANIMATION DETAILS:** `apt.fadeOut(tl, "#root > div", 85.5, 1.2)` — single synchronized fade of every direct child.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Single fade-out, end of composition.
- **EDUCATIONAL PURPOSE:** Give the viewer a beat to register the fully-solved problem before the video ends.
- **VISUAL HIERARCHY:** N/A — full-frame fade.
- **ATTENTION MANAGEMENT:** N/A.
- **MOTION NOTES:** N/A.
- **CONTINUITY FROM PREVIOUS SCENE:** The correct-pulse from Scene 11 has just settled; this scene adds no new motion until the final synchronized fade.

---

## PART 3: Asset List Required

- `illustration/train.svg` — copied from `Trains Streams Boats/global-illustrations/` (used as-is, no recolor needed — already on-brand)
- `illustration/train-station.svg` — copied from `Trains Streams Boats/global-illustrations/` (used as-is)
- `design-system.css`, `animations.js`, `assets/` — copied from `_template/` (standard per-question local copies)
- No new bespoke SVGs required — this question reuses q9's proven two-stage-crossing technique with existing global illustration assets.

## PART 4: Animation Complexity Notes

- Reuses q9's "two-stage crossing" proof technique (train slides platform-width, then train-width, to visually derive Distance = Train + Platform) — same mechanic, different final question (solving for platform length x instead of crossing time).
- 1 Given + 3 Steps (vs. q9's 1 Given + 2 Steps) because this question has an extra unit-conversion step (km/h → m/s) before the distance/time work.
- All card→stack transitions use `apt.morphToStack` (0.8s). Phase 1→2 uses `apt.pinFlow`. Every active card's `.math` uses `apt.textReveal` synced to real transcript.json timestamps. No `apt.stepFlow` used anywhere.
- `.frac` component used for the 5/18 conversion factor — no bare "÷" character anywhere in the composition.
- Pinned illustration gets `apt.ambientLoop` on its icon from ~40s through RECENTER_TIME (78.839s) to avoid a dead-static pinned area during the long 3-step solving stretch.

## PART 5: Master Timeline Overview

```
0.0        Question card hero entrance (lowered)
3.6        Question card rises to resting position
2.5        Track sweeps in
2.5        Train slides onto track
5.819      "200 m" length tag pops
7.639      "54 km/h" speed tag pops
9.899      Platform pops in
11.179     "30 s" time tag pops
14.139     "? m" target label pops
17.6       Platform emphasize pulse ("crosses a platform")
21.359     STAGE A — train slides platform-width; tags fade
23.279     "✗ not enough yet" callout
25.359     STAGE B — train slides train-width further
28.439     "✓ whole train is out" callout
29.479     Measuring bracket grows in
30.079     Bracket label fades in

[ PIN_TIME = 36.439 ]
36.439     pinFlow — question + illustration glide to pinned slot
36.84      GIVEN_TIME — Given card enters (own timestamp, ≠ PIN_TIME)
40.0       Pinned illustration ambient loop begins

39.959     Given → stack morph; Step 1 card enters (unit conversion)
50.939     Step 1 → stack morph; Step 2 card enters (distance formula + compute)
63.979     Step 2 → stack morph; Step 3 card enters (solve for x)

[ RECENTER_TIME = 78.839 ]
78.839     Illustration fades, question recenters, Step 3 → stack morph
79.2       Options grid fades in
79.6       Options stagger reveal
84.139     Correct option (B) pulses

85.5       End fade — everything fades out together (1.2s)
```
