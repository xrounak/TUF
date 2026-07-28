# Storyboard — Speed, Time & Distance / Q18
"A person goes from home to office at 54 km/hr and returns by the same route at 36 km/hr. Find the average speed of the round trip." (Answer: A — 43.2 km/hr)

Voiceover duration: **108.539s**

Key illustration decision: unlike a static parked-icon build, this question is literally a two-leg journey (go at 54, return at 36) — so the car actually **drives house→office during the "goes" line, then drives office→house during the "returns" line**, synced word-for-word to those two narration beats, the same way sibling videos (q6's drive-loop + roadSweep, q13's arrow-close-in) use bespoke per-question GSAP tweens layered on top of the shared `apt.*` helpers instead of leaving the illustration inert.

---

## PART 1: Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Viewer Attention Focus | Visual Objective |
|---|-----------|-----------|---------------------|-------------------------|-------------------|
| 1 | 0.12–4.10 | "So welcome back again. Time for one more problem." | Hook / opener | Center screen | Question card rises into view |
| 2 | 4.62–9.78 | "Now, in this problem, we are given that a person goes from home to office at fifty-four kilometers per hour." | Establish leg 1 | House → road → office | House + road + office build in; car drives house→office; "54 km/hr" label travels with the leg |
| 3 | 10.38–14.10 | "Then the person returns by the same route at thirty-six kilometers per hour." | Establish leg 2 | Car driving back | Car reverses direction and drives office→house; "36 km/hr" label swaps in |
| 4 | 14.68–18.26 | "The question is asking us to find the average speed for the complete round trip." | State the ask | Whole scene | Car parked at house; house+office get a soft pulse; ghost "Average Speed = ?" fades in |
| 5 | 18.82–22.56 | "Now, let us assume the distance between the home and the office is x kilometers." | Define the unknown | Given card | Layout pins to top; Given card enters, "x km" line reveals live |
| 6 | 23.08–27.22 | "Now, let us find the time taken for each part of the journey. We know the formula," | Bridge to Step 1 | Given card exits | Given morphs to stack |
| 7 | 27.84–45.68 | "Time = distance ÷ speed... x÷54 hours... Similarly... x÷36 hours. Now this part is completed." | Derive Time₁ and Time₂ | Step 1 card | Formula line, then Time(Going)=x/54 and Time(Return)=x/36 build in sequence |
| 8 | 46.08–71.74 | "Next, total distance... x+x=2x km... total time... x/54+x/36, which simplifies to 5x/108 hours." | Combine into totals | Step 2 card | Total Distance and Total Time lines build |
| 9 | 72.18–100.64 | "Average speed = total distance ÷ total time... 2x ÷ (5x/108)... reciprocal... 2x×108/5x... x cancels... 216/5 = 43.2." | Solve to the answer | Step 3 card | Formula → substitution → reciprocal flip → cancellation → 43.2 km/hr |
| 10 | 100.70–108.54 | "So the average speed for the complete round trip is 43.2 km/hr. Hence, the correct answer is option A." | Confirm answer | Options grid | Options fade in, A pulses green |

---

## PART 2: Scene-by-Scene Storyboard

### SCENE 1 — Opening & Question Reveal
**TIMESTAMP:** 0 – 4.62s
**VOICEOVER:** "So welcome back again. Time for one more problem."
**VISUAL OBJECTIVE:** Establish the question card alone before the journey illustration begins.
**SCREEN LAYOUT:** `q-full-card` centered (starts lowered per `apt.heroEnterLowered`, rises at RISE_TIME=4.15s), empty illustration area below it.
**ON-SCREEN ELEMENTS:** Dotted grid + bottom strip + topic name + logo (always). `q-full-card` with question text, "54 km/hr", "36 km/hr" and "average speed" highlighted in `--primary`. `serial-num` badge (Q).
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 4.15)`. Badge mirrors the same lowered/rise tween per template's parallel `#serial-num` pattern.
**CAMERA MOVEMENT:** Static (fixed 1920×1080 canvas).
**TRANSITIONS:** None yet.
**EDUCATIONAL PURPOSE:** Orient the viewer to the question before any numbers move.
**VISUAL HIERARCHY:** Question card > empty illustration area > background.
**ATTENTION MANAGEMENT:** Single focal point until the card rises.
**MOTION NOTES:** No illustration yet — pure question reveal.
**CONTINUITY FROM PREVIOUS SCENE:** N/A (first scene).

### SCENE 2 — Leg 1: House → Office at 54 km/hr
**TIMESTAMP:** 4.62 – 9.78s
**VOICEOVER:** "Now, in this problem, we are given that a person goes from home to office at fifty-four kilometers per hour."
**VISUAL OBJECTIVE:** Build the house/road/office scene, then literally drive the car from house to office while this line is spoken — not a parked icon.
**SCREEN LAYOUT:** `.trip-scene` (1300×260px) centered in `#illustration`: house icon at left edge, a thin road bar spanning the middle, office icon at right edge, car icon riding the road.
**ON-SCREEN ELEMENTS:** `house-svgrepo-com.svg` (left), `office-building-svgrepo-com.svg` (right), a flat black road bar (`.road`, 6px, rounded, `roadSweep`-in), `car.svg` (rides the road), a `.speed-label` showing "54 km/hr" above the car.
**ANIMATION DETAILS:** House icon `cardEnter`-style fade+scale-in at 4.65s. `apt.roadSweep(tl, "#road", 4.85, 0.9)` (left-origin sweep, house→office direction). Office icon fade+scale-in at 5.15s. Car icon `back.out(1.4)` pop-in at house's road-end at 5.35s, "54 km/hr" label fades in above it at the same time. Custom tween: `tl.to("#car-icon", {x: ROAD_TRAVEL, duration: 4.0, ease: "power1.inOut"}, 5.5)` — car drives the full road length, timed to land at the office just as "...per hour." finishes (9.78s). Label position mirrors the car via a matching x-tween (or a wrapper `.leg-label` sharing the same tween) so it visibly travels with the trip rather than sitting fixed.
**CAMERA MOVEMENT:** Static.
**TRANSITIONS:** Continuous continuation of Scene 1 — no cut, illustration builds directly beneath the already-risen question card.
**EDUCATIONAL PURPOSE:** Ground "goes from home to office at 54 km/hr" in an actual visible trip instead of an abstract sentence.
**VISUAL HIERARCHY:** Car + speed label (moving, so naturally eye-catching) > house/office endpoints > road.
**ATTENTION MANAGEMENT:** The car's motion is timed to complete exactly as the spoken sentence completes — the viewer's eye tracks the drive for the sentence's full duration, not a static beat.
**MOTION NOTES:** `power1.inOut` easing (gentle accel/decel) so the drive doesn't read as mechanical/linear.
**CONTINUITY FROM PREVIOUS SCENE:** The question card is already at rest (risen at 4.15s) when this scene's build-in starts 0.5s later — read as one continuous "question settles, then the story starts" beat.

### SCENE 3 — Leg 2: Office → House at 36 km/hr
**TIMESTAMP:** 9.78 – 14.10s
**VOICEOVER:** "Then the person returns by the same route at thirty-six kilometers per hour."
**VISUAL OBJECTIVE:** Reverse the trip — car turns around and drives back, at a visibly different (slower) pace, with the speed label swapped.
**SCREEN LAYOUT:** Same `.trip-scene`, car now at the office end.
**ON-SCREEN ELEMENTS:** Same car icon (flipped `scaleX:-1` to face home), new `.speed-label` reading "36 km/hr".
**ANIMATION DETAILS:** At 9.9s: "54 km/hr" label `apt.fadeOut` (0.3s). At 10.4s (narration "Then the person returns..." begins 10.38s): `gsap.set("#car-icon", {scaleX: -1})` flips the car to face left, "36 km/hr" label fades in at the office end. `tl.to("#car-icon", {x: 0, duration: 3.3, ease: "power1.inOut"}, 10.5)` drives the car back to the house, landing just before "...per hour." finishes (14.10s) — noticeably slower pacing than Scene 2's tween (3.3s over the same distance vs. 4.0s... note: return leg is the SLOWER speed but the animation itself is intentionally not literally proportional to 54:36 — see Animation Complexity Notes) leaves the return read as "the same trip, backwards" rather than a new element.
**CAMERA MOVEMENT:** Static.
**TRANSITIONS:** Continuous — same car, same road, no re-entrance.
**EDUCATIONAL PURPOSE:** Show viewers literally that it's the SAME distance covered in the opposite direction, which is the whole crux of the average-speed (not just mean-of-two-speeds) trap this question tests.
**VISUAL HIERARCHY:** Car (now flipped, moving right→left) + "36 km/hr" label.
**ATTENTION MANAGEMENT:** The flip is the visual cue that direction has reversed — no other element competes for attention.
**MOTION NOTES:** Same `power1.inOut` ease as the outbound leg for visual consistency.
**CONTINUITY FROM PREVIOUS SCENE:** The car is the literal same element from Scene 2, now at the office end where Scene 2 left it — this is a direct continuation, not a re-entrance.

### SCENE 4 — Framing the Question
**TIMESTAMP:** 14.10 – 18.82s
**VOICEOVER:** "The question is asking us to find the average speed for the complete round trip."
**VISUAL OBJECTIVE:** Car is parked back home; hold a beat on the completed round trip and pose the unknown.
**SCREEN LAYOUT:** Same `.trip-scene`, car at rest at the house end (flipped back to its normal orientation).
**ON-SCREEN ELEMENTS:** House + office icons get one soft synchronized pulse (`apt.emphasize`-style, scale 1→1.06→1, yoyo). A ghost line "Average Speed = ?" fades in centered beneath the road, in `--topic` grey.
**ANIMATION DETAILS:** At 14.8s: `gsap.set("#car-icon", {scaleX: 1})` (flip back, car is idle so the flip itself is invisible mid-idle). `apt.emphasize`-style pulse on `#house-icon, #office-icon` together at 14.9s. `apt.fadeIn(tl, "#avg-ghost", 15.3)`.
**CAMERA MOVEMENT:** Static.
**TRANSITIONS:** None — same scene, holding.
**EDUCATIONAL PURPOSE:** Explicitly name the unknown ("average speed = ?") before any algebra appears, priming Phase 2.
**VISUAL HIERARCHY:** Ghost text > pulsed endpoints > idle car/road.
**ATTENTION MANAGEMENT:** No new motion competes with the pulse+ghost-text beat — this is the calm-before-the-algebra moment.
**MOTION NOTES:** The pulse is the ONLY emphasis in this scene — no double-animating the endpoints.
**CONTINUITY FROM PREVIOUS SCENE:** The car's arrival home (end of Scene 3's return drive, ~13.9s) settles for ~0.9s before this scene's pulse fires at 14.9s — a deliberate short breathing gap, not an instant cut.

### SCENE 5 — Pin to Top
**TIMESTAMP:** 18.4 – 18.9s (pinFlow start 18.4, GIVEN_TIME 18.9)
**VOICEOVER:** "Now, let us assume the distance between the home and the office is x kilometers." (begins)
**VISUAL OBJECTIVE:** Question + illustration glide to their pinned slots, clearing the canvas for solution cards.
**SCREEN LAYOUT:** `q-pinned` (top) and `illus-pinned` (shrunk single-row recap: small house—car—office icons + "Distance = x km (each way)" label) become the resting layout for the rest of the video.
**ON-SCREEN ELEMENTS:** Pinned question text (shorter), shrunk trip row.
**ANIMATION DETAILS:** `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 18.4)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 18.4)` fire together. `apt.fadeOut(tl, "#serial-num", 18.4, 0.5)`.
**CAMERA MOVEMENT:** Static — reads as a push-up via the glide.
**TRANSITIONS:** `pinFlow` glide (0.8s), PIN_TIME = 18.4.
**EDUCATIONAL PURPOSE:** Signal "setup is done, solving begins now" right as the narration starts naming the unknown x.
**VISUAL HIERARCHY:** Pinned question recedes in size but stays legible; trip row shrinks to a recap.
**ATTENTION MANAGEMENT:** The glide pulls the eye upward, priming center-stage for the Given card that opens 0.5s later.
**MOTION NOTES:** Standard 0.8s `pinFlow`.
**CONTINUITY FROM PREVIOUS SCENE:** The full-size trip scene from Scenes 2–4 (house/road/office/car, car now parked home) is the literal element that glides into the pinned recap — same objects shrinking, not a replacement.

### SCENE 6 — Given Card
**TIMESTAMP:** 18.9 – 27.4s
**VOICEOVER:** "...the distance between the home and the office is x kilometers. Now, let us find the time taken for each part of the journey. We know the formula,"
**VISUAL OBJECTIVE:** State the three knowns (both speeds + the unknown distance) in one compact card.
**SCREEN LAYOUT:** `SolutionCard` "Given" centered (`#card-given`).
**ON-SCREEN ELEMENTS:** `solutionChip` "Given" + 3 math lines: "Speed (Going) = 54 km/hr", "Speed (Return) = 36 km/hr", "Distance (each way) = x km".
**ANIMATION DETAILS:** `apt.cardEnter(tl, "#card-given .solution-card", 18.9)`. `apt.textReveal(tl, "#card-given .math")` — lines 1–2 line-level (recap, not re-spoken here: 18.9s, 19.5s), line 3 word-level matching the live narration ("Distance"@19.619, "="@21.239, "x km"@21.819).
**CAMERA MOVEMENT:** Static.
**TRANSITIONS:** None (card holds through the "we know the formula" bridge line).
**EDUCATIONAL PURPOSE:** Single reference point for every value used downstream.
**VISUAL HIERARCHY:** Chip "Given" > math lines (speeds first, then the unknown x — matches narration order).
**ATTENTION MANAGEMENT:** Card is the only active element; pinned question/illustration recede behind it.
**MOTION NOTES:** Plain `cardEnter` (0.55s), no extra emphasis.
**CONTINUITY FROM PREVIOUS SCENE:** The pin glide from Scene 5 completes at ~19.2s; the Given card is already entering at 18.9s (0.3s before the glide visually settles) — the same tight overlap pattern seen in sibling videos when narration is continuous across the pin.

### SCENE 7 — Step 1: Time for Each Leg
**TIMESTAMP:** 27.4 – 45.8s (morph at 27.4, card active 27.9–45.8)
**VOICEOVER:** "Time is equal to distance divided by speed. So the time taken to go from home to office at fifty-four kilometers per hour is x divided by fifty-four hours. Similarly, the time taken to return at thirty-six kilometers per hour is x divided by thirty-six hours. Now this part is completed."
**VISUAL OBJECTIVE:** Derive Time(Going) = x/54 and Time(Return) = x/36 using the same formula, back to back.
**SCREEN LAYOUT:** Given card morphs into the left stack (`#stack-given`, step-circle "G"). `#card-step1` active in center.
**ON-SCREEN ELEMENTS:** `solutionChip` "Step 1" + 3 math lines: "Time = Distance ÷ Speed", "Time (Going) = x ÷ 54 = x/54 hr", "Time (Return) = x ÷ 36 = x/36 hr".
**ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 27.4)`. `apt.cardEnter(tl, "#card-step1 .solution-card", 27.9)`. `apt.textReveal(tl, "#card-step1 .math")` — formula line-level at 27.9s; Going line word-level ("x"@34.919, "54"@35.84); Return line word-level ("x"@41.779, "36"@42.719).
**CAMERA MOVEMENT:** Static.
**TRANSITIONS:** Standard 0.8s morph.
**EDUCATIONAL PURPOSE:** Reinforce the SAME time formula applied to both legs of the trip — the two illustration legs from Scenes 2–3 pay off here as the two derivations.
**VISUAL HIERARCHY:** Formula line (small/muted) → Time(Going) line → Time(Return) line.
**ATTENTION MANAGEMENT:** ~18s single card — word-by-word reveal keeps it feeling alive.
**MOTION NOTES:** `textReveal` alone carries pacing, no extra pulses.
**CONTINUITY FROM PREVIOUS SCENE:** Given card is still completing its morph (27.4→28.2) as Step 1 begins fading in at 27.9s — same brief overlap pattern used throughout this video's transitions.

### SCENE 8 — Step 2: Total Distance & Total Time
**TIMESTAMP:** 45.8 – 72.0s (morph at 45.8, card active 46.8–72.0)
**VOICEOVER:** "Next, let us find the total distance. The person travels x kilometers while going and another x kilometers while coming back. So the total distance is x plus x, which is two x kilometers. Now let us find the total time. Total time is equal to x divided by fifty-four plus x divided by thirty-six. After simplifying this, the total time becomes five x divided by one hundred eight hours."
**VISUAL OBJECTIVE:** Combine the two times into one total, then state total distance — the pivotal algebra step.
**SCREEN LAYOUT:** Step 1 morphs into `#stack-step1` (circle "1"), G→1 connector grows. `#card-step2` active center.
**ON-SCREEN ELEMENTS:** `solutionChip` "Step 2" + 2 math lines: "Total Distance = x + x = 2x km", "Total Time = x/54 + x/36 = 5x/108 hr".
**ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 45.8)`, `apt.stackLineGrow(tl, "#line-g-1", 45.8)`. `apt.cardEnter(tl, "#card-step2 .solution-card", 46.8)`. `apt.textReveal(tl, "#card-step2 .math")` — Total Distance line word-level ("2x km"@57.86), Total Time line word-level ("54"@62.659, "36"@65.0, "5x/108"@68.86).
**CAMERA MOVEMENT:** Static.
**TRANSITIONS:** Standard 0.8s morph; G→1 line grows same beat.
**EDUCATIONAL PURPOSE:** x/54 + x/36 → 5x/108 is the algebra the whole answer hinges on.
**VISUAL HIERARCHY:** Total Distance line first (matches narration), Total Time line second.
**ATTENTION MANAGEMENT:** `.hi` highlights on 2x, 54, 36, 5x/108 keep the eye on the algebra.
**MOTION NOTES:** Plain textReveal, no pulses.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1's card is still mid-morph (45.8→46.6) as Step 2 fades in at 46.8s — consistent tight-overlap pattern.

### SCENE 9 — Step 3: Average Speed
**TIMESTAMP:** 72.0 – 100.6s (morph at 72.0, card active 73.0–100.6)
**VOICEOVER:** "Now we have everything we need. Average speed is equal to total distance divided by total time. Putting the values, average speed is equal to two x divided by five x divided by one hundred eight. Dividing by a fraction is the same as multiplying by its reciprocal. So this becomes two x into one hundred eight divided by five x. Here, x gets canceled. After simplifying this, we get two hundred sixteen divided by five, which is forty-three point two."
**VISUAL OBJECTIVE:** State the formula, substitute, flip-and-multiply by the reciprocal, cancel x, land on 43.2 km/hr.
**SCREEN LAYOUT:** Step 2 morphs into `#stack-step2` (circle "2"), connector 1→2 grows. `#card-step3` active center, widened to fit the longer lines.
**ON-SCREEN ELEMENTS:** `solutionChip` "Step 3" + 4 math lines: "Average Speed = Total Distance ÷ Total Time", "= 2x ÷ 5x/108", "= 2x × 108/5x" (reciprocal flip), "x cancels → 216/5 = 43.2 km/hr" (final `.ans`).
**ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 72.0)`, `apt.stackLineGrow(tl, "#line-1-2", 72.0)`. `apt.cardEnter(tl, "#card-step3 .solution-card", 73.0)`. `apt.textReveal(tl, "#card-step3 .math")` — line 1 line-level 74.019s; line 2 word-level ("2x"@80.339/81.319, "5x/108"@82.08); line 3 word-level ("2x"@89.259/89.959, "108"@90.5/91.079, "5x"@92.199/93.019); line 4 word-level ("canceled"@94.419, "216"@96.959/97.339, "5"@98.36, "43.2 km/hr"@99.239).
**CAMERA MOVEMENT:** Static.
**TRANSITIONS:** Standard 0.8s morph + connector grow.
**EDUCATIONAL PURPOSE:** The payoff — viewer sees the reciprocal flip and x-cancellation land cleanly on 43.2.
**VISUAL HIERARCHY:** Formula → substitution → reciprocal flip → final answer (boldest, `.ans`).
**ATTENTION MANAGEMENT:** No pulses on `.ans` — reserved for the options-grid reveal.
**MOTION NOTES:** 4 lines is more than the usual 3 — justified because this question's algebra has an explicit reciprocal-flip step that other average-speed questions skip straight past.
**CONTINUITY FROM PREVIOUS SCENE:** Step 2's card is completing its morph (72.0→72.8) as Step 3 begins entering (73.0) — same tight-overlap pattern as every prior transition in this video.

### SCENE 10 — Options Reveal
**TIMESTAMP:** 100.6 – 108.54s (+ ~1.5s hold)
**VOICEOVER:** "So the average speed for the complete round trip is forty-three point two kilometer per hour. Hence, the correct answer is option A."
**VISUAL OBJECTIVE:** Reveal all four options, confirm A as correct.
**SCREEN LAYOUT:** Step 3 morphs into `#stack-step3` (circle "3"), connector 2→3 grows. Stack column (G/1/2/3) fully visible. Pinned question recenters to align with the options column.
**ON-SCREEN ELEMENTS:** 2×2 options grid: A) 43.2 km/hr (correct), B) 40 km/hr, C) 42 km/hr, D) 45 km/hr.
**ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 100.6)`, `apt.stackLineGrow(tl, "#line-2-3", 100.6)`. `apt.fadeOut(tl, "#illus-pinned", 100.6)`, `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 100.6)`. `apt.fadeIn(tl, "#options-reveal", 101.4)`, `apt.optionsStagger(tl, ".opt-btn", 102.0)`, `apt.correctPulse(tl, ".opt-btn.correct", 108.0)`.
**CAMERA MOVEMENT:** Static.
**TRANSITIONS:** Final morph + recenter, then options stagger-in.
**EDUCATIONAL PURPOSE:** Confirm the derived 43.2 km/hr against the actual options.
**VISUAL HIERARCHY:** Options grid > recentered question > stack column (all continuous — only the now-redundant pinned illustration fades).
**ATTENTION MANAGEMENT:** `correctPulse` on option A lands right as "option A." finishes (108.539s).
**MOTION NOTES:** Standard `optionsStagger` then `correctPulse`.
**CONTINUITY FROM PREVIOUS SCENE:** Step 3's card is still finishing its morph (100.6→101.4) as options begin fading in (101.4) — the completed 4-circle stack column and "here are your options" read as one connected reveal.

### END FADE
**TIMESTAMP:** ~109.5s
All direct children of `#root` fade out together (`apt.fadeOut(tl, "#root > div", 109.5, 1.2)`) — ~1s after the correct-pulse settles.

---

## PART 3: Asset List Required

- `illustration/car.svg` — user-supplied (svgrepo), used as-is, no recolor.
- `illustration/house-svgrepo-com.svg` — user-supplied, used as-is.
- `illustration/office-building-svgrepo-com.svg` — user-supplied, used as-is.
- Road bar is a CSS primitive (flat black bar, `roadSweep`), same technique as q6/q10/q13 — no new asset file.
- Shared assets only otherwise: `serial-num-badge.svg`, `logo.png`.

## PART 4: Animation Complexity Notes

- This is the first question in the folder where the illustration is a literal narrated point-A-to-point-B-and-back journey rather than a parked-icon or idle-loop build — the car's x-position IS the story, not ambient life. Two bespoke `gsap.to("#car-icon", {x: ...})` tweens (not `apt.*` helpers, since no shared point-to-point-travel helper exists) carry Scenes 2 and 3, matching q6's precedent of adding bespoke per-question tweens on top of the shared helper set.
- The outbound (5.5–9.5s, 4.0s) and return (10.5–13.8s, 3.3s) drive durations are NOT literally proportional to the 54:36 (=3:2) speed ratio — a true 3:2 timing (4.0s vs 6.0s) would blow past the return narration's 3.7s window. Durations are instead fit to each leg's own narration length; the speed DIFFERENCE is communicated by the on-screen labels changing (54→36), not by relative drive speed. This is a deliberate simplification, flagged here per the "flag before writing it in" rule if it were a bigger departure — it isn't, since no sibling video has attempted literal speed-proportional timing either.
- The car's horizontal flip (`scaleX:-1`) on the return leg is the only genuinely new per-question technique not seen in q6/q10/q13 (none of those have a reversing journey) — needed here because "returns by the same route" only reads correctly if the car visibly faces backward.
- No `apt.ambientLoop` used on the pinned illustration — it's a static recap row (house—car—office), not a single icon that would read as dead without a bob.
- Step 3 (Scene 9) is 4 lines instead of the usual 3, justified by the explicit reciprocal-flip step this question's algebra requires.

## PART 5: Master Timeline Overview

```
TIME (s)   ELEMENT                          EVENT
─────────  ───────────────────────────────  ──────────────────────────────
0.3        q-full-card                      heroEnterLowered starts (lowered)
0.8        serial-num                       pops in (lowered, mirrors card)
4.15       q-full-card + serial-num         rise to resting position
4.65       house-icon                       cardEnter-style fade+scale-in
4.85       road                              roadSweep (0.9s)
5.15       office-icon                       cardEnter-style fade+scale-in
5.35       car-icon + "54 km/hr" label       pop-in at house end
5.5→9.5    car-icon                          drives house→office (x tween, 4.0s)
9.9        "54 km/hr" label                  fadeOut
10.4       car-icon flip + "36 km/hr" label  scaleX:-1, label fadeIn
10.5→13.8  car-icon                          drives office→house (x tween, 3.3s)
14.8       car-icon                          flip back to normal orientation
14.9       house-icon + office-icon          soft synchronized pulse
15.3       avg-ghost ("Average Speed = ?")   fadeIn
18.4       q-full-card, illustration         pinFlow → pinned slots
18.4       serial-num                        fadeOut
18.9       card-given                        cardEnter + textReveal
27.4       Given → stack "G"                 morphToStack
27.9       card-step1                        cardEnter + textReveal (dual leg-time derivation)
45.8       Step1 → stack "1"                 morphToStack + line G-1 grow
46.8       card-step2                        cardEnter + textReveal (total dist + total time)
72.0       Step2 → stack "2"                 morphToStack + line 1-2 grow
73.0       card-step3                        cardEnter (widened card)
74.0       card-step3 text                   textReveal begins (4 lines)
100.6      Step3 → stack "3"                 morphToStack + line 2-3 grow
100.6      illus-pinned                      fadeOut
100.6      q-pinned                          recenterForOptions
101.4      options-reveal                    fadeIn
102.0      opt-btn ×4                        optionsStagger
108.0      opt-btn.correct (A)               correctPulse
109.5      #root > div (all)                 fadeOut (1.2s)
```
