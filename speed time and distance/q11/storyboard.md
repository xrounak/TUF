# Storyboard — Speed-Time-Distance / Question 11

**Question:** A traveller covers half of a route at 48 km/hr and the other half at 72 km/hr. Find the average speed.
**Options:** A) 54 km/hr  B) 56 km/hr  C) 60 km/hr  D) 57.6 km/hr ✅ (correct)
**Topic display name:** Speed, Time and Distance
**Voiceover duration:** 109.48s
**Illustration asset:** user-supplied `illustration/runner.svg` (single flat-2D runner figure, primary-blue tones — used as-is, unrecolored, per README 5C)

---

## PART 1 — Narration Beat Analysis

| # | Time (s) | Narration | Educational purpose | Attention focus | Visual objective |
|---|----------|-----------|---------------------|------------------|-------------------|
| 1 | 0.10–3.28 | "So welcome back again. Time for one more problem." | Cold open, orient viewer | Center screen | QuestionCard + SerialNum enter (lowered hero) |
| 2 | 3.80–11.38 | "Now in this problem, we are given that a traveler covers the first half of the journey at forty-eight kilometers per hour." | State first-half speed | Left half of route | Runner appears on route, "48 km/hr" label reveals, runner starts moving along first half |
| 3 | 11.94–15.84 | "The second half of the journey is covered at seventy-two kilometers per hour." | State second-half speed | Right half of route | "72 km/hr" label reveals, runner moves along second half, arrives at finish |
| 4 | 16.40–20.98 | "The question is asking us to find the average speed for the whole journey." | State the unknown | Whole route | "?" badge pops in over the finished route — the thing we must solve for |
| 5 | 21.42–24.36 | "Now, let us solve this by assuming the total distance." | Transition: statement → solving | Whole frame | pinFlow — question + illustration glide to pinned slot |
| 6 | 24.84–34.98 | "Let the total distance be X kilometers. Since the journey is divided into two equal halves, the distance covered in each half will be X by two kilometers." | Define variable x and the half-distance | Given card, center | Given card enters, x and x/2 reveal word-by-word |
| 7 | 35.40–51.68 | "Now let us find the time taken for each half. We know the formula. Time is equal to distance divided by speed. So the time taken for the first half is X by two divided by forty-eight, which is X by ninety-six hours." | Derive time for first half | Step 1 card | Given morphs to stack; Step 1 card enters; formula then computation reveal, ends in x/96 fraction |
| 8 | 52.24–61.88 | "Now let us find the time taken for the second half. Time is equal to X by two divided by seventy-two, which is X by one hundred forty-four hours." | Derive time for second half | Step 2 card | Step 1 morphs to stack; Step 2 card enters; computation reveal, ends in x/144 fraction |
| 9 | 62.38–76.40 | "Now this part is completed. We know the time taken for both halves, so let us find the total time. Total time is equal to X by ninety-six plus X by one hundred forty-four, which is five X by two hundred eighty-eight hours." | Sum the two times | Step 3 card | Step 2 morphs to stack; Step 3 card enters; addition reveal, ends in 5x/288 fraction |
| 10 | 76.84–100.90 | "Now we have everything we need. Average speed is equal to total distance divided by total time. Putting the values, average speed is equal to total distance X divided by total time five X by two hundred eighty-eight. The X gets canceled. So average speed is equal to the two hundred eighty-eight divided by five. After simplifying this, we get fifty-seven point six kilometers per hour." | Full derivation to the final number | Step 4 card | Step 3 morphs to stack; Step 4 card enters; formula → substitution → cancellation → 288/5 → 57.6 km/hr, each revealing in sequence |
| 11 | 101.68–109.48 | "So the average speed of the traveler is fifty-seven point six kilometers per hour. Hence, the correct answer is option D." | Confirm + reveal correct option | Options grid | Step 4 morphs to stack, question recenters, illustration clears; options grid fades in, D pulses green on "option D" |

---

## PART 2 — Scene-by-Scene Storyboard

### Scene 1 — Cold Open (0 → 3.6s)
- **VOICEOVER:** "So welcome back again, time for one more problem."
- **VISUAL OBJECTIVE:** Establish the question, premium calm opening.
- **SCREEN LAYOUT:** QuestionCard large, centered, starting vertically lowered (frame reads as centered-alone). SerialNum badge top-left, moving in tandem.
- **ON-SCREEN ELEMENTS:** `#q-full-card` ("A traveller covers half of a route at **48 km/hr** and the other half at **72 km/hr**. Find the average speed."), `#serial-num` (badge "Q").
- **ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.3)` — enters at 0.3s lowered, rises to rest at 3.3s (end of opening line). Serial badge pops at 0.8s with parallel y-offset tween, rises with the card at 3.3s.
- **CAMERA MOVEMENT:** None (static frame, motion is internal to elements).
- **TRANSITIONS:** n/a (opening).
- **EDUCATIONAL PURPOSE:** Orient the viewer before content begins.
- **VISUAL HIERARCHY:** QuestionCard dominant; badge secondary.
- **ATTENTION MANAGEMENT:** Nothing else on screen competes — dotted grid + bottom strip + topic/logo only.
- **MOTION NOTES:** back.out(1.4) easing gives a soft settle, not a bounce.
- **CONTINUITY FROM PREVIOUS SCENE:** n/a — first scene.

### Scene 2 — First Half Revealed (3.8s → 11.5s)
- **VOICEOVER:** "Now in this problem, we are given that a traveler covers the first half of the journey at forty-eight kilometers per hour."
- **VISUAL OBJECTIVE:** Introduce the route + runner, show the first-half speed as it's spoken.
- **SCREEN LAYOUT:** Illustration area (`#illustration`, 1400×300, centered under the question card) holds a horizontal route line with a midpoint tick, the runner icon at the start (left edge), and two label slots above the left-quarter and right-quarter of the route.
- **ON-SCREEN ELEMENTS:** `.route-line`, `.route-midpoint`, `#runner` (runner.svg), `#label-48` ("48 km/hr").
- **ANIMATION DETAILS:** Route line grows in via `apt.roadSweep(tl, ".route-line", 2.5)`. Runner fades/pops in at the start position at 2.8s (`apt.cardEnter`-style small pop). `#label-48` fades in at 9.42s (word "at"). Runner translates from the start to the midpoint via a plain `tl.to("#runner", {x: ROUTE_HALF_PX, duration: 3.0, ease:"power1.inOut"}, 9.42)`.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Continuous — no cut from Scene 1, illustration simply builds under the already-settled question card.
- **EDUCATIONAL PURPOSE:** Anchors "first half = 48 km/hr" as a concrete, spatial fact before any algebra.
- **VISUAL HIERARCHY:** Runner + route as primary motion; label secondary, timed to the number being spoken.
- **ATTENTION MANAGEMENT:** Right half of route is visually inert during this beat (no label, runner hasn't arrived) so eyes track the moving runner.
- **MOTION NOTES:** power1.inOut on the translate reads as a steady jog, not an easing bounce (this is travel, not a UI entrance).
- **CONTINUITY FROM PREVIOUS SCENE:** The question card is already at rest (Scene 1 ended at 3.3s); the illustration begins filling the empty lower area of the same frame — one continuous build, not a new scene cut.

### Scene 3 — Second Half Revealed (11.9s → 16.4s)
- **VOICEOVER:** "The second half of the journey is covered at seventy-two kilometers per hour."
- **VISUAL OBJECTIVE:** Complete the route; show the runner finishing faster than it started.
- **SCREEN LAYOUT:** Same illustration area; runner now at midpoint (from Scene 2), route's right half about to activate.
- **ON-SCREEN ELEMENTS:** `#label-72` ("72 km/hr"), `#runner` continuing its translate.
- **ANIMATION DETAILS:** Runner holds at the midpoint from ~12.4s to 14.42s (dead time = the narration itself, no motion, a deliberate breath). `#label-72` fades in at 14.42s (word "at"). Runner translates from midpoint to the route's end via `tl.to("#runner", {x: ROUTE_FULL_PX, duration: 2.0, ease:"power1.inOut"}, 14.42)` — deliberately a *shorter* duration than Scene 2's 3.0s, so the second half visibly takes less time to cross, echoing 72 > 48 km/hr.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Continuous with Scene 2.
- **EDUCATIONAL PURPOSE:** The differing crossing speeds are the whole premise of the problem — the visual literally embodies "not the same speed, so not the same time."
- **VISUAL HIERARCHY:** Runner motion primary; "72 km/hr" label appears exactly as spoken.
- **ATTENTION MANAGEMENT:** Nothing new competes; same route, same runner, only the second half activates.
- **MOTION NOTES:** Runner arrives at the route's end right as narration hands off to Scene 4's question line (16.40s) — a clean beat match.
- **CONTINUITY FROM PREVIOUS SCENE:** Runner is mid-route, exactly where Scene 2 left it (midpoint) — its resumed motion is a direct pickup of the paused position, not a re-entrance.

### Scene 4 — The Question (16.4s → 21.4s)
- **VOICEOVER:** "The question is asking us to find the average speed for the whole journey."
- **VISUAL OBJECTIVE:** Frame "average speed" as the unknown to be solved.
- **SCREEN LAYOUT:** Same illustration frame; a "?" badge appears above the finished route.
- **ON-SCREEN ELEMENTS:** `#avg-qmark` ("?" circular badge, primary fill).
- **ANIMATION DETAILS:** `apt.serialEnter(tl, "#avg-qmark", 16.6)` (reuse the badge-pop pattern — scale+rotate+fade).
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Holds until Scene 5's pinFlow at 21.42s.
- **EDUCATIONAL PURPOSE:** Explicitly names the unknown before any solving starts, so Phase 2's Given card reads as "solving for the ? we just saw."
- **VISUAL HIERARCHY:** "?" badge is the single new element — impossible to miss.
- **ATTENTION MANAGEMENT:** Runner + route now static, badge is the only motion.
- **MOTION NOTES:** back.out(2) pop, same feel as the SerialNum badge, ties the "?" visually to the video's own badge language.
- **CONTINUITY FROM PREVIOUS SCENE:** Badge appears exactly where the runner just stopped — spatial continuity from Scene 3's arrival point.

### Scene 5 — Pin Transition (21.4s → 22.3s)
- **VOICEOVER:** "Now, let us solve this by assuming the total distance."
- **VISUAL OBJECTIVE:** Move from "here's the problem" to "here's the workspace."
- **SCREEN LAYOUT:** Full question + illustration glide up/shrink into the Phase 2 pinned slots.
- **ON-SCREEN ELEMENTS:** `#q-pinned`, `#illus-pinned` (compact runner + "48 → 72 km/hr" recap, centered — single-icon pinned layout per design.md).
- **ANIMATION DETAILS:** `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 21.42)`, `apt.pinFlow(tl, "#illustration", "#illus-pinned", 21.42)`, `apt.fadeOut(tl, "#serial-num", 21.42, 0.5)`, `apt.fadeOut(tl, "#avg-qmark", 21.42, 0.4)`.
- **CAMERA MOVEMENT:** Simulated via the glide itself (position + scale tween).
- **TRANSITIONS:** Real glide, not a cut — the defining transition of Phase 1 → Phase 2.
- **EDUCATIONAL PURPOSE:** Signals "we now start working," visually compressing the problem to make room for solution cards.
- **VISUAL HIERARCHY:** The glide is the only motion; nothing else competes.
- **ATTENTION MANAGEMENT:** n/a — transition beat.
- **MOTION NOTES:** power2.inOut, 0.8s, per `pinFlow` spec.
- **CONTINUITY FROM PREVIOUS SCENE:** The full card/illustration from Scene 4 is what's moving — same elements, same position, now animating into their pinned counterparts.

### Scene 6 — Given (24.84s → 35.4s)
- **VOICEOVER:** "Let the total distance be X kilometers. Since the journey is divided into two equal halves, the distance covered in each half will be X by two kilometers."
- **VISUAL OBJECTIVE:** Establish the algebraic variable.
- **SCREEN LAYOUT:** `#card-given` centered (`left:640px; top:480px`).
- **ON-SCREEN ELEMENTS:** SolutionCard, chip "Given", `.math`: "Total distance = x km" / "Each half = x/2 km".
- **ANIMATION DETAILS:** `apt.cardEnter(tl, "#card-given .solution-card", 24.84)`; `apt.textReveal(tl, "#card-given .math")` reveals each word/phrase at its transcript timestamp (24.84–34.98).
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Card fade+scale entrance.
- **EDUCATIONAL PURPOSE:** Sets up the assumed-variable technique for average-speed problems.
- **VISUAL HIERARCHY:** "x km" and "x/2 km" highlighted in primary.
- **ATTENTION MANAGEMENT:** Pinned question/illustration recede (smaller, top of frame) so the card reads as the active focus.
- **MOTION NOTES:** back.out(1.4), 0.55s.
- **CONTINUITY FROM PREVIOUS SCENE:** Card enters into the now-empty center that the pin glide (Scene 5) vacated a moment earlier.

### Scene 7 — Step 1 (35.4s → 52.2s)
- **VOICEOVER:** "Now let us find the time taken for each half. We know the formula. Time is equal to distance divided by speed. So the time taken for the first half is X by two divided by forty-eight, which is X by ninety-six hours."
- **VISUAL OBJECTIVE:** Derive time for the first half.
- **SCREEN LAYOUT:** Given morphs to `#stack-given` (left column, `top:140px`); `#card-step1` enters center (`left:620px; top:460px; width:700px`).
- **ON-SCREEN ELEMENTS:** Chip "Step 1"; line 1 (line-level) "Finding time for each half"; line 2 (word-level) "Time = Distance ÷ Speed"; line 3 (word-level) "x/2 ÷ 48 = ⟨frac x/96⟩ hrs".
- **ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 35.1)`; `apt.cardEnter(tl, "#card-step1 .solution-card", 35.4)`; `apt.textReveal(tl, "#card-step1 .math")`.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** 0.8s morph (box+text crossfade) into the stack.
- **EDUCATIONAL PURPOSE:** Applies Time = Distance/Speed to the first half concretely.
- **VISUAL HIERARCHY:** Final fraction x/96 is the payoff, styled as `.frac`.
- **ATTENTION MANAGEMENT:** Given stack card now sits quietly at left, Step 1 is the sole active focus.
- **MOTION NOTES:** Formula line and computation line reveal as two separate reveal beats, giving the card a "building up" feel rather than a single dump.
- **CONTINUITY FROM PREVIOUS SCENE:** Given card is still completing its 0.8s morph into the stack column as Step 1's box begins fading in 0.3s later — a deliberate slight overlap so the transition reads as one continuous take (this problem's narration has almost no pause between beats).

### Scene 8 — Step 2 (52.24s → 62.4s)
- **VOICEOVER:** "Now let us find the time taken for the second half. Time is equal to X by two divided by seventy-two, which is X by one hundred forty-four hours."
- **VISUAL OBJECTIVE:** Derive time for the second half (mirrors Step 1's structure exactly, reinforcing the pattern).
- **SCREEN LAYOUT:** Step 1 morphs to `#stack-step1` (left column, `top:270px`), connector `#line-g-1` grows; `#card-step2` enters center (`left:620px; top:470px; width:680px`).
- **ON-SCREEN ELEMENTS:** Chip "Step 2"; line 1 (line-level) "Finding time for the second half"; line 2 (word-level) "x/2 ÷ 72 = ⟨frac x/144⟩ hrs".
- **ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 51.9)`; `apt.stackLineGrow(tl, "#line-g-1", 51.9)`; `apt.cardEnter(tl, "#card-step2 .solution-card", 52.24)`; `apt.textReveal(tl, "#card-step2 .math")`.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** 0.8s morph.
- **EDUCATIONAL PURPOSE:** Repeats the same formula for the second half — pattern recognition reinforces the method.
- **VISUAL HIERARCHY:** x/144 fraction is the payoff.
- **ATTENTION MANAGEMENT:** Given + Step 1 now both quiet in the stack, connected by the grown line.
- **MOTION NOTES:** Deliberately mirrors Step 1's beat structure so the viewer's eye already knows where to look.
- **CONTINUITY FROM PREVIOUS SCENE:** Step 1's card is still landing in the stack (morph completes 52.7s) as Step 2 begins appearing at 52.24s — same slight-overlap continuity as Scene 7.

### Scene 9 — Step 3 (62.38s → 76.8s)
- **VOICEOVER:** "Now this part is completed. We know the time taken for both halves, so let us find the total time. Total time is equal to X by ninety-six plus X by one hundred forty-four, which is five X by two hundred eighty-eight hours."
- **VISUAL OBJECTIVE:** Sum the two times into a single total-time fraction.
- **SCREEN LAYOUT:** Step 2 morphs to `#stack-step2` (`top:400px`), connector `#line-1-2` grows; `#card-step3` enters center (`left:600px; top:450px; width:720px`).
- **ON-SCREEN ELEMENTS:** Chip "Step 3"; line 1 (line-level) "Adding both times"; line 2 (word-level) "x/96 + x/144 = ⟨frac 5x/288⟩ hrs".
- **ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 62.1)`; `apt.stackLineGrow(tl, "#line-1-2", 62.1)`; `apt.cardEnter(tl, "#card-step3 .solution-card", 62.38)`; `apt.textReveal(tl, "#card-step3 .math")`.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** 0.8s morph.
- **EDUCATIONAL PURPOSE:** Combines the two partial times — the bridge to total-time.
- **VISUAL HIERARCHY:** 5x/288 fraction is the payoff, sets up the final division.
- **ATTENTION MANAGEMENT:** Three stack cards now visible, connected by two grown lines — a visible "trail" of work done.
- **MOTION NOTES:** Same reveal cadence as Steps 1–2 (line-level intro, then word-level computation).
- **CONTINUITY FROM PREVIOUS SCENE:** Step 2 still finishing its morph (completes 62.9s) as Step 3 fades in at 62.38s.

### Scene 10 — Step 4 / Final Answer (76.84s → 101.3s)
- **VOICEOVER:** "Now we have everything we need. Average speed is equal to total distance divided by total time. Putting the values, average speed is equal to total distance X divided by total time five X by two hundred eighty-eight. The X gets canceled. So average speed is equal to the two hundred eighty-eight divided by five. After simplifying this, we get fifty-seven point six kilometers per hour."
- **VISUAL OBJECTIVE:** The full final derivation, ending in the answer.
- **SCREEN LAYOUT:** Step 3 morphs to `#stack-step3` (`top:530px`), connector `#line-2-3` grows; `#card-step4` enters center (`left:560px; top:360px; width:820px` — tallest card, positioned higher to fit five reveal lines).
- **ON-SCREEN ELEMENTS:** Chip "Step 4"; line 1 (word-level) "Average speed = Total distance ÷ Total time"; line 2 (word-level) "= x ÷ ⟨frac 5x/288⟩"; line 3 (word-level) "x cancels"; line 4 (word-level) "= ⟨frac 288/5⟩"; line 5 (word-level, `.ans`) "= 57.6 km/hr".
- **ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 76.6)`; `apt.stackLineGrow(tl, "#line-2-3", 76.6)`; `apt.cardEnter(tl, "#card-step4 .solution-card", 76.84)`; `apt.textReveal(tl, "#card-step4 .math")` — five separate reveal beats across the card's ~24s span.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** 0.8s morph in; card holds through the full derivation.
- **EDUCATIONAL PURPOSE:** The climax — plugging in values, canceling x, arriving at 57.6.
- **VISUAL HIERARCHY:** Final "57.6 km/hr" styled `.ans`, the visual peak of the entire video.
- **ATTENTION MANAGEMENT:** No new stack card competes during this long beat — all attention stays on Step 4 as it builds line by line.
- **MOTION NOTES:** This is the only card with 5 reveal beats instead of 2–3 — deliberate, since it's carrying the entire final derivation; no extra `emphasize`/`resultReveal` pulse layered on top of the text-reveal (would double-animate the same content).
- **CONTINUITY FROM PREVIOUS SCENE:** Step 3 still landing in the stack as Step 4 begins — same overlap pattern as Scenes 7–9, now closing out the step cycle.

### Scene 11 — Options Reveal (101.3s → 109.5s)
- **VOICEOVER:** "So the average speed of the traveler is fifty-seven point six kilometers per hour. Hence, the correct answer is option D."
- **VISUAL OBJECTIVE:** Confirm the answer against the four options.
- **SCREEN LAYOUT:** Step 4 morphs to `#stack-step4` (`top:660px`), connector `#line-3-4` grows; pinned illustration fades out; pinned question recenters (`xShift:160, yShift:180`) into `.pinned-col`; options grid (2×2) fades in on the right.
- **ON-SCREEN ELEMENTS:** `.options-grid` — A) 54 km/hr, B) 56 km/hr, C) 60 km/hr, D) 57.6 km/hr (`class="correct"`).
- **ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-step4 .solution-card", "#stack-step4 .stack-card", 101.3)`; `apt.stackLineGrow(tl, "#line-3-4", 101.3)`; `apt.fadeOut(tl, "#illus-pinned", 101.3)`; `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 101.3)`; `apt.fadeIn(tl, "#options-reveal", 102.3)`; `apt.optionsStagger(tl, ".opt-btn", 102.9)`; `apt.correctPulse(tl, ".opt-btn.correct", 108.86)` (timed to the spoken words "option D").
- **CAMERA MOVEMENT:** Recenter shift is the only positional motion.
- **TRANSITIONS:** Final morph, then a fresh stagger-in for the options grid.
- **EDUCATIONAL PURPOSE:** Closes the loop — the derived 57.6 km/hr is matched against option D.
- **VISUAL HIERARCHY:** Green pulse on option D is the terminal visual beat of the video.
- **ATTENTION MANAGEMENT:** All four stack cards + connectors remain visible on the left as a complete "work shown" trail while the options grid becomes the new focus on the right.
- **MOTION NOTES:** `correctPulse`'s 0.4s yoyo lands exactly as "option D" is spoken (108.86–109.48s).
- **CONTINUITY FROM PREVIOUS SCENE:** Step 4's card is still completing its morph into the final stack slot as the illustration fades and the question recenters — three transitions clustered in the same beat, reading as one coordinated "wrap-up" motion rather than three separate cuts.
- **END FADE:** `apt.fadeOut(tl, "#root > div", 110.3, 1.2)` — everything fades together ~0.8s after the correct pulse settles.

---

## PART 3 — Asset List Required

- `illustration/runner.svg` — user-supplied, used as-is (unrecolored). Cloned/reused at two sizes: full (Phase 1, ~90px wide) and pinned (Phase 2 recap, ~50px wide).
- `assets/serial-num-badge.svg` — shared template asset (SerialNum badge).
- `assets/logo.png` — shared template asset (bottom-right logo).
- No other new assets — route line, midpoint tick, speed labels, and the "?" badge are all pure CSS/text, no new SVGs.

---

## PART 4 — Animation Complexity Notes

- Runner motion (Scenes 2–3) is a plain `tl.to({x: ..., duration, ease:"power1.inOut"})`, not a template helper — this is the one new pattern in this video, kept deliberately simple (position tween only, no rotation/scale) to stay within "no invented animations beyond what's needed" while still telling the speed story visually.
- The 3.0s (first half) vs 2.0s (second half) crossing durations are a deliberate ratio (3:2, matching 72:48 speed ratio) — not arbitrary numbers.
- Every card→stack transition uses `apt.morphToStack` at 0.8s, no exceptions.
- Step cards 1–3 use a uniform 2–3 line structure (line-level intro + word-level computation ending in a `.frac`); Step 4 is intentionally longer (5 reveal beats) since it carries the entire final derivation — this asymmetry is deliberate, not a mistake.
- Because this problem's narration has very little pause between beats (dense, continuous explanation), morph-to-next-card gaps are compressed to ~0.3s (vs. the ideal ~1s breathing gap) throughout Steps 1–4 — the overlap is intentional so the video reads as one continuous take rather than waiting on the narration.
- Stack-card font-size is set uniformly (18px) from the first draft across all 5 stack cards — no per-card overrides.
- Every active-card `.clip` `data-duration` is sized to (its own morph start − its own data-start) + 0.8s + buffer, never just "until the next event," so the morph is never cut off mid-glide.

---

## PART 5 — Master Timeline Overview

| Time (s) | Event |
|----------|-------|
| 0.3 | QuestionCard hero enters (lowered) |
| 0.8 | SerialNum badge pops |
| 2.5 | Route line sweeps in |
| 2.8 | Runner pops in at start |
| 3.3 | Card + badge rise to resting position |
| 9.42 | "48 km/hr" label reveals; runner starts moving (3.0s) |
| 14.42 | "72 km/hr" label reveals; runner resumes moving (2.0s) |
| 16.6 | "?" badge pops in |
| 21.42 | **PIN_TIME** — pinFlow (question + illustration), serial badge + "?" fade out |
| 24.84 | **GIVEN_TIME** — Given card enters, text-reveal begins |
| 35.1 | Given → stack morph |
| 35.4 | Step 1 card enters |
| 51.9 | Step 1 → stack morph; line G→1 grows |
| 52.24 | Step 2 card enters |
| 62.1 | Step 2 → stack morph; line 1→2 grows |
| 62.38 | Step 3 card enters |
| 76.6 | Step 3 → stack morph; line 2→3 grows |
| 76.84 | Step 4 card enters |
| 101.3 | Step 4 → stack morph; line 3→4 grows; illustration fades; question recenters |
| 102.3 | Options grid fades in |
| 102.9 | Options stagger in |
| 108.86 | Correct option (D) pulses |
| 110.3 | Everything fades out (1.2s) |
| ~112 | Composition end |

Total runtime: ~112s (voiceover 109.48s + settle/fade buffer).
