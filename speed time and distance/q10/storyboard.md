# Storyboard — Speed Time & Distance / Q10
"A car covers equal distances at 40 km/hr and 60 km/hr. Find the average speed for the whole journey." (Answer: D — 48 km/hr)

Voiceover duration: **94.34s**

---

## PART 1: Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Viewer Attention Focus | Visual Objective |
|---|-----------|-----------|---------------------|-------------------------|-------------------|
| 1 | 0.12–3.14 | "So welcome back again. Time for one more problem." | Hook / opener | Center screen | Question card rises into view |
| 2 | 3.68–8.38 | "Now in this problem, we are given that a car covers two equal distances." | Frame the setup | Question text, road with 2 equal segments | Illustration begins building — road split into two equal segments |
| 3 | 8.92–12.26 | "The first part is covered at forty kilometers per hour." | Establish speed 1 | Left segment | "40 km/hr" label appears above segment 1, car icon there |
| 4 | 12.90–16.40 | "The second part is covered at sixty kilometers per hour." | Establish speed 2 | Right segment | "60 km/hr" label appears above segment 2 |
| 5 | 16.94–20.32 | "The question is asking us to find the average speed for the whole journey." | State the ask | Whole road | Both segments glow together briefly, "Average Speed = ?" ghost text |
| 6 | 20.82–22.42 | "Since both distances are equal," | Transition beat | Layout starts reorganizing | Question + illustration begin pinFlow glide to top |
| 7 | 22.96–25.40 | "let each distance be x kilometers." | Define the unknown | Given card | Given card enters, "x km" line reveals |
| 8 | 25.86–27.04 | "Now we know the formula." | Bridge to Step 1 | Given card exits | Given morphs to stack |
| 9 | 27.60–43.50 | "Time is equal to distance divided by speed... time taken to cover the first part... x by forty hours." | Derive Time₁ | Step 1 card | Formula line, then Time₁ = x/40 hr builds |
| 10 | 44.40–57.52 | "Similarly, time taken to cover the second part... x by sixty hours." | Derive Time₂ | Step 1 card | Time₂ = x/60 hr builds below Time₁ |
| 11 | 57.94–68.36 | "Therefore, total time is x/40 + x/60, which simplifies to x/24 hours. The total distance is x+x, that is 2x km." | Combine into totals | Step 2 card | Total Time and Total Distance lines build |
| 12 | 68.76–75.60 | "Now we know the average speed formula. Average speed is equal to total distance divided by total time." | State the final formula | Step 3 card | Formula line reveals |
| 13 | 77.46–91.68 | "Average speed is equal to 2x ÷ x/24. The x gets canceled... 2 into 24, which is forty-eight kilometers per hour." | Solve to the answer | Step 3 card | Substitution → cancellation → 48 km/hr (ans) |
| 14 | 92.24–94.34 | "Hence, the correct answer is option D." | Confirm answer | Options grid | Options fade in, D pulses green |

---

## PART 2: Scene-by-Scene Storyboard

### SCENE 1 — Opening & Question Reveal
**TIMESTAMP:** 0 – 8.38s
**VOICEOVER:** "So welcome back again. Time for one more problem. Now in this problem, we are given that a car covers two equal distances."
**VISUAL OBJECTIVE:** Establish the question and start building the two-equal-segments road illustration.
**SCREEN LAYOUT:** `q-full-card` centered top (starts lowered per `apt.heroEnterLowered`, rises at 3.68s), `illustration` centered below it, empty road base visible.
**ON-SCREEN ELEMENTS:** Dotted grid + bottom strip + topic name + logo (always). `q-full-card` with question text, numbers "equal distances" highlighted in `--primary`. `serial-num` badge (Q). A flat 2D road (light-grey rounded bar, 1400px wide) split at the midpoint by a thin dashed divider — this divider fades in as "two equal distances" is spoken.
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.68)` — card starts lowered/centered-alone, rises to resting slot exactly as the opening line ends. Serial badge mirrors the same y-offset/rise per template's parallel tween. Road base fades in (`apt.fadeIn`) at 4.9s. Dashed midpoint divider scales in (`scaleX:0→1`, left origin then mirrored) at 7.36s ("equal distances").
**CAMERA MOVEMENT:** Static (no camera — canvas fixed 1920×1080).
**TRANSITIONS:** None yet — continuous scene from 0.
**EDUCATIONAL PURPOSE:** Orient the viewer: one journey, two equal-length parts.
**VISUAL HIERARCHY:** Question card > road illustration > background.
**ATTENTION MANAGEMENT:** Single focal point (question card) until 3.68s, then illustration draws the eye downward.
**MOTION NOTES:** No car icon yet — pure road setup.
**CONTINUITY FROM PREVIOUS SCENE:** N/A (first scene).

### SCENE 2 — Speed Labels Build
**TIMESTAMP:** 8.38 – 20.32s
**VOICEOVER:** "The first part is covered at forty kilometers per hour. The second part is covered at sixty kilometers per hour. The question is asking us to find the average speed for the whole journey."
**VISUAL OBJECTIVE:** Attach a speed value + small car icon to each road segment, then a beat that frames "average speed" as the unknown.
**SCREEN LAYOUT:** Left half of road = segment 1 (car icon + "40 km/hr" label above it, 24px, `--primary` for the number). Right half = segment 2 (car icon + "60 km/hr" label, same style).
**ON-SCREEN ELEMENTS:** Two small flat-2D car icons (simple rounded-rect body + 2 wheel circles, `--primary` fill), one per segment. Labels sit above each car.
**ANIMATION DETAILS:** Segment 1 car + "40 km/hr" label: `apt.cardEnter`-style fade+scale-in at 8.92s. Segment 2 car + "60 km/hr" label: same pattern at 12.90s. At 16.94s, both segments' background tint pulses once together (`apt.emphasize` on the road wrapper) as "average speed for the whole journey" is spoken, and a faint ghost line "Average Speed = ?" fades in centered beneath the road, holding through 20.32s.
**CAMERA MOVEMENT:** Static.
**TRANSITIONS:** Continuous continuation of Scene 1's illustration — no cut.
**EDUCATIONAL PURPOSE:** Anchor the two given speeds visually before any algebra appears.
**VISUAL HIERARCHY:** Speed labels > car icons > road > ghost "Average Speed = ?" text.
**ATTENTION MANAGEMENT:** Left-to-right reading order matches narration order (first part, then second part).
**MOTION NOTES:** Cars stay static (parked) on their segments — no driving motion yet, keeps focus on the numbers.
**CONTINUITY FROM PREVIOUS SCENE:** The road base and dashed divider from Scene 1 are already in place; this scene only adds labels/icons on top of the same illustration — no re-entrance.

### SCENE 3 — Pin to Top
**TIMESTAMP:** 20.32 – 22.96s
**VOICEOVER:** "Since both distances are equal,"
**VISUAL OBJECTIVE:** Reorganize the frame — question + illustration glide up into their pinned, smaller slots — clearing the lower two-thirds of the screen for the solution cards.
**SCREEN LAYOUT:** `q-pinned` (top, ~1275px wide) and `illus-pinned` (smaller road recap, centered single-icon-style: one small road bar + "x km each" label, centered per design.md's pinned-illustration convention) become the resting layout for the rest of the video.
**ON-SCREEN ELEMENTS:** Same question card content (shorter/pinned text), shrunk road recap with a single "Distance = x km each" label (≥21px) beside a small car icon.
**ANIMATION DETAILS:** `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 20.5)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 20.5)` fire together — real glide, not a fade swap. `apt.fadeOut(tl, "#serial-num", 20.5, 0.5)` in parallel (no pinned counterpart for the badge).
**CAMERA MOVEMENT:** Static — the "camera" reads as a push-up via the glide itself.
**TRANSITIONS:** `pinFlow` glide (0.8s), PIN_TIME = 20.5.
**EDUCATIONAL PURPOSE:** Signal "setup is done, solving begins now."
**VISUAL HIERARCHY:** Pinned question stays legible but recedes in size; empty lower-canvas now primes the viewer for the Given card.
**ATTENTION MANAGEMENT:** The glide itself pulls the eye upward, priming the center-stage for the Given card.
**MOTION NOTES:** Standard 0.8s `pinFlow` — content fades to 0.15 opacity first (0.3s), then the box glides.
**CONTINUITY FROM PREVIOUS SCENE:** The full-size question card and two-segment road from Scenes 1–2 are the literal elements that glide — same objects, not replacements, so the two labeled cars from Scene 2 are implicitly dropped (only a single recap label survives in the pinned illustration) as the detail is no longer needed once the algebra begins.

### SCENE 4 — Given Card
**TIMESTAMP:** 22.96 – 26.5s
**VOICEOVER:** "let each distance be x kilometers. Now we know the formula."
**VISUAL OBJECTIVE:** State the three knowns in one compact card before any derivation starts.
**SCREEN LAYOUT:** `SolutionCard` "Given" centered (`#card-given`), left:640px top:480px per template default.
**ON-SCREEN ELEMENTS:** `solutionChip` "Given" + 3 math lines: "Speed (Part 1) = 40 km/hr", "Speed (Part 2) = 60 km/hr", "Distance (each part) = x km".
**ANIMATION DETAILS:** `apt.cardEnter(tl, "#card-given .solution-card", 22.96)`. `apt.textReveal(tl, "#card-given .math")` — line-level for the two speed-recap lines (22.96 and 23.6, since those values aren't re-spoken here), word-level for the "x km" line matching the real narration ("distance"@23.579, "be"@24.1, "x"@24.639, "kilometers"@24.799).
**CAMERA MOVEMENT:** Static.
**TRANSITIONS:** None (card holds).
**EDUCATIONAL PURPOSE:** Give the viewer a single reference point for every value used downstream.
**VISUAL HIERARCHY:** Chip "Given" > math lines (speeds first, then the unknown x — matches narration order).
**ATTENTION MANAGEMENT:** Card is the only active element — pinned question/illustration recede behind it.
**MOTION NOTES:** Plain `cardEnter` (0.55s), no extra emphasis — first card of Phase 2.
**CONTINUITY FROM PREVIOUS SCENE:** The pinned layout from Scene 3 has just settled (glide completed ~21.3s); the Given card enters into the now-empty center-stage a beat later (22.96s), so the glide and the Given entrance read as two sequential, deliberate motions rather than a single blur.

### SCENE 5 — Step 1: Time for Each Part
**TIMESTAMP:** 26.5 – 57.52s (morph at 26.5, card active 27.6–57.52)
**VOICEOVER:** "Time is equal to distance divided by speed. So time taken to cover the first part... x by forty hours. Similarly, time taken to cover the second part... x by sixty hours."
**VISUAL OBJECTIVE:** Derive Time₁ = x/40 and Time₂ = x/60 using the same formula, back to back.
**SCREEN LAYOUT:** Given card morphs into the left stack (`#stack-given`, step-circle "G"). `#card-step1` becomes active in center.
**ON-SCREEN ELEMENTS:** `solutionChip` "Step 1" + 3 math lines: "Time = Distance ÷ Speed", "Time₁ = x ÷ 40 = x/40 hr", "Time₂ = x ÷ 60 = x/60 hr" (both fraction results in `.hi` highlight).
**ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 26.5)`. `apt.cardEnter(tl, "#card-step1 .solution-card", 27.6)`. `apt.textReveal(tl, "#card-step1 .math")` — word-level throughout, timestamps pulled straight from transcript.json (Time₁ terms across 30.66–42.34s, Time₂ terms across 44.40–56.34s).
**CAMERA MOVEMENT:** Static.
**TRANSITIONS:** Standard 0.8s morph.
**EDUCATIONAL PURPOSE:** Show the SAME formula applied twice — reinforces the method, not just the answer.
**VISUAL HIERARCHY:** Formula line (small/muted) → Time₁ line → Time₂ line, each result highlighted.
**ATTENTION MANAGEMENT:** This is the longest single card (~30s of narration) — the word-by-word reveal keeps it feeling alive rather than static.
**MOTION NOTES:** No extra emphasis pulses — `textReveal` alone carries the pacing per design.md's no-double-animation rule.
**CONTINUITY FROM PREVIOUS SCENE:** The Given card is still completing its 0.8s morph into the "G" stack slot as Step 1's card begins fading in at 27.6s (1.1s after morph start) — the two motions overlap briefly by design, reading as one continuous "settle-then-advance" beat rather than a hard cut.

### SCENE 6 — Step 2: Total Time & Distance
**TIMESTAMP:** 56.6 – 68.36s (morph at 56.6, card active 57.9–68.36)
**VOICEOVER:** "Therefore, total time is x by forty plus x by sixty, which simplifies to x by twenty-four hours. The total distance is x plus x, that is two x kilometers."
**VISUAL OBJECTIVE:** Combine the two times into one total, then state total distance.
**SCREEN LAYOUT:** Step 1 morphs into `#stack-step1` (circle "1"), connector line G→1 grows in. `#card-step2` active center.
**ON-SCREEN ELEMENTS:** `solutionChip` "Step 2" + 2 math lines: "Total Time = x/40 + x/60 = x/24 hr", "Total Distance = x + x = 2x km" (final result `.ans`).
**ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 56.6)`, `apt.stackLineGrow(tl, "#line-g-1", 56.6)`. `apt.cardEnter(tl, "#card-step2 .solution-card", 57.9)`. `apt.textReveal(tl, "#card-step2 .math")` word-level (57.94–63.40 for total time, 64.62–67.42 for total distance).
**CAMERA MOVEMENT:** Static.
**TRANSITIONS:** Standard 0.8s morph; G→1 connector line grows same beat.
**EDUCATIONAL PURPOSE:** The pivotal algebra step — x cancels conceptually here (x/40+x/60=x/24), setting up the final division.
**VISUAL HIERARCHY:** Total Time line first (matches narration), Total Distance line second.
**ATTENTION MANAGEMENT:** `.hi` highlights on x/40, x/60, x/24, and the two lone x's in the distance sum keep the eye on the algebra, not the connective words.
**MOTION NOTES:** Plain textReveal, no pulses.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1's card is still mid-morph (started 56.6, lands 57.4) when Step 2 begins fading in at 57.9 — same tight overlap pattern as Scene 5, driven by how close together "...sixty hours" (57.52) and "Therefore, total time..." (57.94) actually land in the voiceover.

### SCENE 7 — Step 3: Average Speed
**TIMESTAMP:** 68.4 – 91.68s (morph at 68.4, card active 68.76–91.68)
**VOICEOVER:** "Now we know the average speed formula. Average speed is equal to total distance divided by total time. Putting the values, average speed is equal to two x divided by x by twenty-four. The x gets canceled and we are left with two into twenty-four, which is forty-eight kilometers per hour."
**VISUAL OBJECTIVE:** State the formula, substitute, cancel x, and land on 48 km/hr.
**SCREEN LAYOUT:** Step 2 morphs into `#stack-step2` (circle "2"), connector 1→2 grows. `#card-step3` active center, width widened to fit "Average Speed = ..." lines on one line each (design.md rule — measure against this question's longest line rather than defaulting to 640px).
**ON-SCREEN ELEMENTS:** `solutionChip` "Step 3" + 3 math lines: "Average Speed = Total Distance ÷ Total Time", "= 2x ÷ (x/24)", "= 2 × 24 = 48 km/hr" (final `.ans`, green-tinted per `--success` is reserved for options only — keep `.ans` primary-blue per design system, NOT green, until the correct-option reveal in Scene 8).
**ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 68.4)`, `apt.stackLineGrow(tl, "#line-1-2", 68.4)`. `apt.cardEnter(tl, "#card-step3 .solution-card", 68.76)`. `apt.textReveal(tl, "#card-step3 .math")` — line 1 word-level 71.12–75.60, line 2 word-level 78.94–80.18, line 3 word-level 83.68–85.40.
**CAMERA MOVEMENT:** Static.
**TRANSITIONS:** Standard 0.8s morph + connector grow.
**EDUCATIONAL PURPOSE:** The payoff step — viewer sees x cancel and the clean 48 km/hr fall out.
**VISUAL HIERARCHY:** Formula → substitution → final answer, each line building on the last, final answer boldest (`.ans`).
**ATTENTION MANAGEMENT:** The gap between card entrance (68.76) and first text reveal (71.12) is a deliberate breathing beat — chip is visible alone for ~2.3s while "now we know the average speed formula" plays, priming the formula line that follows.
**MOTION NOTES:** No pulses on the `.ans` span here — `apt.correctPulse` is reserved for the options-grid reveal only, per the "one reveal per element" rule.
**CONTINUITY FROM PREVIOUS SCENE:** Step 2's card is completing its morph (68.4→69.2) as Step 3 begins entering (68.76) — same tight-overlap pattern as the two prior transitions, consistent with how this video's fast narration paces every step change.

### SCENE 8 — Options Reveal
**TIMESTAMP:** 91.7 – 94.34s (+ ~2s hold)
**VOICEOVER:** "So the average speed for the whole journey is forty-eight kilometers per hour. Hence, the correct answer is option D."
**VISUAL OBJECTIVE:** Reveal all four options, confirm D as correct.
**SCREEN LAYOUT:** Step 3 morphs into `#stack-step3` (circle "3"), connector 2→3 grows. Stack column (G/1/2/3) now fully visible on the left, unchanged for the rest of the video. Pinned question recenters (`apt.recenterForOptions`) to align with the options column on the right.
**ON-SCREEN ELEMENTS:** 2×2 options grid: A) 45 km/hr, B) 50 km/hr, C) 52 km/hr, D) 48 km/hr (correct, `.correct` class).
**ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 91.7)`, `apt.stackLineGrow(tl, "#line-2-3", 91.7)`. `apt.fadeOut(tl, "#illus-pinned", 91.7)`, `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 91.7)`. `apt.fadeIn(tl, "#options-reveal", 92.3)`, `apt.optionsStagger(tl, ".opt-btn", 92.8)`, `apt.correctPulse(tl, ".opt-btn.correct", 94.3)`.
**CAMERA MOVEMENT:** Static.
**TRANSITIONS:** Final morph + recenter, then options stagger-in.
**EDUCATIONAL PURPOSE:** Confirm the derived answer against the actual multiple-choice options.
**VISUAL HIERARCHY:** Options grid > recentered question > stack column (all three stay visible/continuous — nothing fades except the now-redundant pinned illustration).
**ATTENTION MANAGEMENT:** `correctPulse` on option D lands right as "option D" finishes in the narration (94.34s) — the visual confirmation and the spoken confirmation land together.
**MOTION NOTES:** Standard `optionsStagger` (0.45s × 4, 0.12s stagger) then `correctPulse` (0.4s yoyo).
**CONTINUITY FROM PREVIOUS SCENE:** Step 3's card is still finishing its morph into the "3" stack slot (91.7→92.5) as the options grid begins fading in (92.3) — the stack column visibly completes itself (four circles + three connectors, all continuous) in the same beat that the options appear, so the "full solution trail" and "here are your options" reads as one connected reveal rather than two separate moments.

### END FADE
**TIMESTAMP:** ~96.5s
All direct children of `#root` fade out together (`apt.fadeOut(tl, "#root > div", 96.5, 1.2)`) — ~2.1s after the correct-pulse settles, giving the viewer a beat to read the confirmed answer before the video ends.

---

## PART 3: Asset List Required

- No external illustration SVGs supplied for this question — the road/car illustration is built entirely from existing design-system primitives (CSS shapes + 2 small inline SVG car icons authored directly in `index.html`, following the "flat 2D, `--primary` fill" rule). No new files needed in `illustration/`.
- Shared assets only: `serial-num-badge.svg`, `logo.png` (already copied from `_template/assets/`).

## PART 4: Animation Complexity Notes

- This question has unusually dense, fast narration (avg. ~2.5 words/sec, several sub-1s phrase gaps) — every step-card transition (Scenes 5→6, 6→7, 7→8) has to start its `morphToStack` before the prior card's narration has fully finished, rather than the standard ~1s breathing gap. This is intentional and matches the transcript, not a shortcut — each Scene's "CONTINUITY" note documents the overlap explicitly.
- Step 1 (Scene 5) is a long single card (~30s) covering two parallel derivations (Time₁, Time₂) — `apt.textReveal`'s word-by-word pacing is what keeps it from reading as static; no additional emphasis effects are layered on.
- No `apt.ambientLoop` used — the pinned illustration is only on screen for ~1.6s before the Given card takes over, too short a window to need an idle-bob treatment.
- Step 3's card is widened beyond the 640px default (per design.md 5B rule) since "Average Speed = Total Distance ÷ Total Time" would otherwise wrap.

## PART 5: Master Timeline Overview

```
TIME (s)   ELEMENT                    EVENT
─────────  ─────────────────────────  ──────────────────────────────
0.3        q-full-card                heroEnterLowered starts (lowered)
0.8        serial-num                 pops in (lowered, mirrors card)
3.68       q-full-card + serial-num   rise to resting position
4.9        road base                  fadeIn
7.36       midpoint divider           scale-in
8.92       segment 1 car + "40 km/hr" cardEnter-style pop
12.90      segment 2 car + "60 km/hr" cardEnter-style pop
16.94      road tint pulse + ghost    emphasize + fadeIn "Average Speed = ?"
20.5       q-full-card, illustration  pinFlow → pinned slots
20.5       serial-num                 fadeOut
22.96      card-given                 cardEnter + textReveal
26.5       Given → stack "G"          morphToStack
27.6       card-step1                 cardEnter + textReveal (long, dual derivation)
56.6       Step1 → stack "1"          morphToStack + line G-1 grow
57.9       card-step2                 cardEnter + textReveal
68.4       Step2 → stack "2"          morphToStack + line 1-2 grow
68.76      card-step3                 cardEnter (widened card)
71.12      card-step3 text            textReveal begins
91.7       Step3 → stack "3"          morphToStack + line 2-3 grow
91.7       illus-pinned               fadeOut
91.7       q-pinned                   recenterForOptions
92.3       options-reveal             fadeIn
92.8       opt-btn ×4                 optionsStagger
94.3       opt-btn.correct (D)        correctPulse
96.5       #root > div (all)          fadeOut (1.2s)
```
