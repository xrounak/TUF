# Storyboard — Speed, Time & Distance · Q12 (Runners Meeting)

**Question:** Two runners are 500 m apart and run towards each other with speed values of 6 m/sec and 4 m/sec. After how many seconds will they meet?
**Options:** A) 50 seconds (correct) B) 40 seconds C) 45 seconds D) 55 seconds
**Voiceover duration:** 61.459s

---

## PART 1 — Narration Beat Analysis

| # | Time | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|------|-----------|---------------------|------------------|-------------------|
| 1 | 0.10–2.64 | "So welcome back again. Time for one more problem." | Bumper / orientation | Center screen | Question card + serial badge pop in, lowered, then rise |
| 2 | 3.26–7.42 | "Now in this problem, we are given that two runners are five hundred meter apart." | Establish the two-object setup | Illustration | Road + two runner icons fade in; "500 m" distance label appears |
| 3 | 7.98–13.14 | "The first runner is running at six m/s. The second runner is running at four m/s." | Assign individual speeds | Illustration labels | "6 m/s" then "4 m/s" labels fade in under each runner |
| 4 | 13.78–15.66 | "Also, they are running towards each other." | Establish direction of motion | Runners | Small inward nudge on both runners + facing-arrows cue |
| 5 | 16.20–19.20 | "The question is asking us to find after how many seconds they will meet." | Restate the ask | Question card | Question card holds steady (already visible) |
| 6 | 19.62–21.58 | "Now, let us understand one important concept." | Transition into concept teaching | Full frame | Last full-screen beat before pin |
| 7 | 22.00–36.54 | "When two objects move towards each other, the distance between them keeps reducing from both sides. So in this case, we do not subtract the speeds, we add them. And we add the speeds only because they are moving towards each other. Got it?" | Teach WHY speeds add (relative speed concept) | Pinned illustration + Given recap | Layout pins to top; Given card recaps the known values while this concept is narrated |
| 8 | 37.02–37.42 | "Perfect." | Beat / confirmation | — | Given card about to morph to stack |
| 9 | 37.82–45.88 | "So the relative speed is equal to the sum of their speeds. Relative speed equals six plus four equals ten meters per second." | Apply the concept numerically | Step 1 card | Relative speed = 6+4 = 10 m/s revealed |
| 10 | 46.36–51.04 | "Now we know the formula. Time is equal to distance divided by relative speed." | State the time formula | Step 2 card | Formula line reveals |
| 11 | 51.52–56.70 | "Putting the values, time equals five hundred divided by ten, which is fifty seconds." | Compute the answer | Step 2 card | 500 ÷ 10 = 50 s revealed |
| 12 | 57.00–59.30 | "So the two runners will meet after fifty seconds." | State result | Stack + options area | Step 2 joins stack, options grid fades in |
| 13 | 59.64–61.46 | "Hence, the correct answer is option A." | Confirm correct option | Options grid | Option A pulses green |

---

## PART 2 — Scene-by-Scene Storyboard

### SCENE 1 — Opening Bumper
**TIMESTAMP:** 0.0 – 2.64s
**VOICEOVER:** "So welcome back again. Time for one more problem."
**VISUAL OBJECTIVE:** Establish the question on screen, centered, before any setup detail.
**SCREEN LAYOUT:** Dotted-grid background + bottom-strip + topic name ("Speed, Time and Distance") + logo, all visible from frame 0. Question card centered, lowered by 180px (vertically-centered feel while alone in frame).
**ON-SCREEN ELEMENTS:** `#q-full-card` (full question text, numbers in primary blue: "500 m", "6 m/s", "4 m/s"), `#serial-num` badge (fixed "Q").
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 2.64)` — card fades/scales in at 0.3s lowered, holds, rises to resting slot exactly at 2.64s (end of the bumper line). Serial badge pops in parallel at 0.8s (lowered), rises in tandem at 2.64s.
**CAMERA MOVEMENT:** None (static frame; only the card itself moves).
**TRANSITIONS:** Hard cut in from black background layers (always visible).
**EDUCATIONAL PURPOSE:** Orient the viewer to the problem before any data is introduced.
**VISUAL HIERARCHY:** Question card > serial badge > background.
**ATTENTION MANAGEMENT:** Single focal element (the card) — nothing else competes.
**MOTION NOTES:** The 50px lowered-to-resting rise should feel like a settling breath, synced to the bumper line ending.
**CONTINUITY FROM PREVIOUS SCENE:** N/A (opening scene).

### SCENE 2 — Illustration Build: Two Runners, Distance
**TIMESTAMP:** 3.26 – 7.42s
**VOICEOVER:** "Now in this problem, we are given that two runners are five hundred meter apart."
**VISUAL OBJECTIVE:** Introduce both runners and the 500 m gap between them.
**SCREEN LAYOUT:** Illustration area (`#illustration`, 1400px wide, centered, `justify-content:space-between` — two objects across the width) sits below the question card.
**ON-SCREEN ELEMENTS:** A thin road/baseline (`#road-line`), runner icon A (left, `#runner-a`, facing right), runner icon B (right, `#runner-b`, mirrored via `scaleX(-1)` to face left/toward A), a distance label (`#distance-label`, "500 m") centered between them.
**ANIMATION DETAILS:** `apt.roadSweep(tl, "#road-line", 3.3, 0.7)` draws the baseline left-to-right. At 4.62s (start of "we are given"), `apt.fadeIn` on `#runner-a` and `#runner-b` together (both fade+scale in from the same call pattern as `cardEnter` but on the illustration wrap, 0.55s). At 5.98s (start of "five"), `apt.fadeIn(tl, "#distance-label", 5.98)` — the "500 m" label fades upward into place.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Continuous build within Phase 1 — no cuts.
**EDUCATIONAL PURPOSE:** Ground the abstract "two runners, 500 m apart" in a concrete visual.
**VISUAL HIERARCHY:** Runners > distance label > road line.
**ATTENTION MANAGEMENT:** Elements appear in the exact order the sentence introduces them (runners, then distance).
**MOTION NOTES:** Runner icons should feel grounded on the road line, not floating.
**CONTINUITY FROM PREVIOUS SCENE:** The question card and badge are still fully visible and static above; the illustration builds beneath them without disturbing that layer.

### SCENE 3 — Illustration Build: Individual Speeds
**TIMESTAMP:** 7.98 – 13.14s
**VOICEOVER:** "The first runner is running at six meters per second. The second runner is running at four meters per second."
**VISUAL OBJECTIVE:** Attach a speed value to each runner individually.
**SCREEN LAYOUT:** Same illustration area; speed labels sit directly beneath each runner icon.
**ON-SCREEN ELEMENTS:** `#speed-a-label` ("6 m/s"), `#speed-b-label` ("4 m/s").
**ANIMATION DETAILS:** `apt.fadeIn(tl, "#speed-a-label", 9.26)` (start of "six"). `apt.fadeIn(tl, "#speed-b-label", 12.119)` (start of "four").
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** None — continuous.
**EDUCATIONAL PURPOSE:** Keep each speed visually tethered to its runner so the later "add the speeds" step reads as combining two distinct, already-seen quantities.
**VISUAL HIERARCHY:** Speed labels are secondary to the runner icons themselves (smaller text, ≥22px per design system floor).
**ATTENTION MANAGEMENT:** One label at a time, matching the sentence's own left-then-right structure.
**MOTION NOTES:** Plain fade, no slide — keeps focus on the numbers themselves.
**CONTINUITY FROM PREVIOUS SCENE:** Runners and distance label from Scene 2 remain exactly in place; only the two new speed labels are added.

### SCENE 4 — Direction Cue: Towards Each Other
**TIMESTAMP:** 13.78 – 15.66s
**VOICEOVER:** "Also, they are running towards each other."
**VISUAL OBJECTIVE:** Make the convergence direction unmistakable before the question is even asked.
**SCREEN LAYOUT:** Same illustration area.
**ON-SCREEN ELEMENTS:** Both runner icons nudge inward slightly (they do not meet — this is a direction cue, not the resolution).
**ANIMATION DETAILS:** Custom small tween (not a named `apt` helper — flagged as simple inline `tl.to`): `#runner-a` nudges `x:+15`, `#runner-b` nudges `x:-15`, both `duration:0.6, ease:"power2.out"` starting at 14.78s (start of "towards").
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** None — continuous.
**EDUCATIONAL PURPOSE:** Plants the visual seed for "the gap closes from both sides," which the concept beat (Scene 6) will explain in words.
**VISUAL HIERARCHY:** Motion itself is the signal here — no new element added.
**ATTENTION MANAGEMENT:** A small, deliberate nudge (30px total gap closed) — subtle enough not to look like they've already met.
**MOTION NOTES:** This is the one non-standard-helper animation in the composition; kept intentionally minimal (a plain position tween) rather than inventing a new named helper.
**CONTINUITY FROM PREVIOUS SCENE:** All Scene 2–3 elements remain; only position shifts slightly.

### SCENE 5 — Question Restated
**TIMESTAMP:** 16.20 – 19.20s
**VOICEOVER:** "The question is asking us to find after how many seconds they will meet."
**VISUAL OBJECTIVE:** Let the fully-built illustration sit under the restated question with no new visual noise.
**SCREEN LAYOUT:** Unchanged from Scene 4.
**ON-SCREEN ELEMENTS:** None new.
**ANIMATION DETAILS:** None — a deliberate hold.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** None.
**EDUCATIONAL PURPOSE:** Let the viewer's eye connect the already-visible setup to the question being re-asked.
**VISUAL HIERARCHY:** Question card (text) is now primary again since it's being read aloud.
**ATTENTION MANAGEMENT:** No competing motion during this line.
**MOTION NOTES:** Intentional stillness.
**CONTINUITY FROM PREVIOUS SCENE:** Direct hold of Scene 4's final state.

### SCENE 6 — Concept Intro + Pin Transition
**TIMESTAMP:** 19.62 – 22.6s
**VOICEOVER:** "Now, let us understand one important concept." *(19.62–21.58, still full-screen)* → pin glide → Given card opens.
**VISUAL OBJECTIVE:** Close out Phase 1 and transition the full layout into its pinned, working state.
**SCREEN LAYOUT:** At `PIN_TIME = 21.6s`, question card + illustration glide from their Phase-1 full-size positions into the pinned slots (`#q-pinned`, `#illus-pinned`).
**ON-SCREEN ELEMENTS:** `#q-pinned` (shortened question text), `#illus-pinned` (shrunk runner pair, space-between layout — two objects across the width, per design system), `#card-given` (opens at `GIVEN_TIME = 22.6s`).
**ANIMATION DETAILS:** `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 21.6)`; `apt.pinFlow(tl, "#illustration", "#illus-pinned", 21.6)`; `apt.fadeOut(tl, "#serial-num", 21.6, 0.5)`. Then `apt.cardEnter(tl, "#card-given .solution-card", 22.6)` + `apt.textReveal(tl, "#card-given .math")`.
**CAMERA MOVEMENT:** None (glide is on the elements, not a camera).
**TRANSITIONS:** Genuine glide (pinFlow), not a cut — question and illustration visibly flow into their pinned slots as one continuous motion.
**EDUCATIONAL PURPOSE:** Reorganize screen real estate so the working area (stack column + active card) can open up for the concept + math that follows.
**VISUAL HIERARCHY:** Pinned question recedes to a supporting role; Given card becomes primary.
**ATTENTION MANAGEMENT:** The 0.8s glide itself is the attention cue that "we're moving into solving mode."
**MOTION NOTES:** Both pinFlow calls share the same start time so question and illustration move as one unit.
**CONTINUITY FROM PREVIOUS SCENE:** The full-size card and illustration from Scenes 1–5 are literally the same elements gliding into pinned position — no new elements introduced, pure repositioning.

### SCENE 7 — Given Card Recap (spans the concept-teaching narration)
**TIMESTAMP:** 22.6 – 37.5s
**VOICEOVER (concept beat, plays while this card holds):** "When two objects move towards each other, the distance between them keeps reducing from both sides. So in this case, we do not subtract the speeds, we add them. And we add the speeds only because they are moving towards each other. Got it? Perfect."
**VISUAL OBJECTIVE:** Provide a compact, at-a-glance recap of the given data so the viewer isn't relying on memory while the WHY is explained.
**SCREEN LAYOUT:** `#card-given .solution-card` centered (`left:640px; top:480px`), chip "Given".
**ON-SCREEN ELEMENTS:** Four recap lines inside `.math`: Distance = 500 m · Runner A speed = 6 m/s · Runner B speed = 4 m/s · Direction = Towards each other. Pinned illustration icons get a small ambient bob (`apt.ambientLoop`) from 23.6s to 37.0s so the pinned area doesn't read as dead during this ~15s concept stretch.
**ANIMATION DETAILS:** `apt.textReveal(tl, "#card-given .math")` — each `.rv` line's `data-t` is set to the REAL moment that fact was originally narrated back in Scenes 2–4 (4.619 / 7.98 / 10.859 / 13.779), so by the time the card itself fades in at 22.6s those spans are already resolved to opacity 1 and reveal together with the box — an honest recap, not fresh narration. `apt.ambientLoop(tl, "#illus-pinned-icon-a", 23.6, 37.0)` and same for `-icon-b`.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** None until the morph at Scene 8.
**EDUCATIONAL PURPOSE:** Decouple "what we know" (already covered) from "why we combine it this way" (being narrated now) — the card is a memory aid, not new information.
**VISUAL HIERARCHY:** Given card > pinned question > pinned illustration.
**ATTENTION MANAGEMENT:** No new reveals during 22.6–37.5 keep focus fully on the narrated concept, not on the screen.
**MOTION NOTES:** The ambient bob is the only motion during this long stretch — deliberately subtle.
**CONTINUITY FROM PREVIOUS SCENE:** Directly follows the pin glide; the Given card opens into the newly-cleared center-stage slot.

### SCENE 8 — Given → Stack, Step 1 Opens (Relative Speed)
**TIMESTAMP:** 36.8 – 45.9s
**VOICEOVER:** "Perfect." *(37.02–37.42)* → "So the relative speed is equal to the sum of their speeds. Relative speed equals six plus four equals ten meters per second." *(37.82–45.88)*
**VISUAL OBJECTIVE:** Collapse the Given recap into the stack and apply the concept numerically.
**SCREEN LAYOUT:** `#stack-given` at `left:100px; top:140px`. `#card-step1 .solution-card` centered, chip "Step 1".
**ON-SCREEN ELEMENTS:** Stack circle "G" + connector-line anchor point. Step 1 math: "Relative Speed = 6 + 4 = 10 m/s".
**ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 36.8)` (0.8s, completes 37.6). `apt.cardEnter(tl, "#card-step1 .solution-card", 37.8)`. `apt.textReveal(tl, "#card-step1 .math")` with word-level spans on the numeric line ("Relative" 41.059, "speed" 41.5, "equals" 42.18, "six" 42.599, "plus" 43.139, "four" 43.54, "equals" 44.479, "ten" 44.86, "meters" 45.059, "per" 45.399, "second." 45.559) and a line-level intro span ("Moving towards each other, so we add the speeds" @ 37.819).
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** 0.8s morph (box + text crossfade per standard pattern).
**EDUCATIONAL PURPOSE:** Turn the just-taught concept into a concrete number.
**VISUAL HIERARCHY:** Step 1 card (active, center) > Given stack card (archived, left).
**ATTENTION MANAGEMENT:** The word-by-word reveal of "6 + 4 = 10" paces the viewer exactly with the spoken arithmetic.
**MOTION NOTES:** Gap from morph start (36.8) to Step 1 entrance (37.8) is exactly 1.0s, per the standard breathing-gap rule.
**CONTINUITY FROM PREVIOUS SCENE:** The Given card visible throughout Scene 7 is the literal element morphing into the stack here — same box, shrinking and recoloring into place.

### SCENE 9 — Step 1 → Stack, Step 2 Opens (Time Formula + Answer)
**TIMESTAMP:** 45.9 – 56.7s
**VOICEOVER:** "Now we know the formula. Time is equal to distance divided by relative speed." *(46.36–51.04)* → "Putting the values, time equals five hundred divided by ten, which is fifty seconds." *(51.52–56.70)*
**VISUAL OBJECTIVE:** Apply the time = distance/speed formula and land on 50 seconds.
**SCREEN LAYOUT:** `#stack-step1` at `left:100px; top:330px`, connector line `#line-g-1` grows to meet it. `#card-step2 .solution-card` centered, chip "Step 2".
**ON-SCREEN ELEMENTS:** Step 2 math: "Time = Distance ÷ Relative Speed" then "= 500 ÷ 10 = 50 s".
**ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 45.9)` (completes 46.7). `apt.stackLineGrow(tl, "#line-g-1", 45.9)`. `apt.cardEnter(tl, "#card-step2 .solution-card", 46.9)`. `apt.textReveal(tl, "#card-step2 .math")`: line-level "Time = Distance ÷ Relative Speed" @47.899; word-level "=" @53.099, "500" @53.539, "÷" @54.259, "10" @54.919; then "=" @55.659, "<ans>50 s</ans>" @55.979.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** 0.8s morph.
**EDUCATIONAL PURPOSE:** Show the formula abstractly first, then substitute real numbers, mirroring how the narration itself sequences it.
**VISUAL HIERARCHY:** Step 2 card > Step 1 + Given stack cards.
**ATTENTION MANAGEMENT:** The formula line settles before any numbers appear, so the substitution reads as a deliberate second beat, not a wall of text.
**MOTION NOTES:** `apt.setStackLine("#line-g-1", ...)` is called once, before the timeline builds, to measure the real G→1 circle centers.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1's card is the same box now sliding into the stack; the G→1 connector line grows in at the same instant, since both circles now co-exist on screen.

### SCENE 10 — Final Reveal: Options + Correct Answer
**TIMESTAMP:** 57.0 – 61.46s
**VOICEOVER:** "So the two runners will meet after fifty seconds." *(57.00–59.30)* → "Hence, the correct answer is option A." *(59.64–61.46)*
**VISUAL OBJECTIVE:** Confirm the computed answer against the four options and highlight the correct one.
**SCREEN LAYOUT:** Stack column fully populated (G, 1, 2) on the left with both connector lines grown in. Pinned question recenters against `.pinned-col`. Options grid (2×2) appears where the pinned illustration used to be.
**ON-SCREEN ELEMENTS:** `#options-reveal` with four `.opt-btn`s: A) 50 seconds (class `correct`), B) 40 seconds, C) 45 seconds, D) 55 seconds.
**ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 57.0)`; `apt.stackLineGrow(tl, "#line-1-2", 57.0)`; `apt.fadeOut(tl, "#illus-pinned", 57.0)`; `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 57.0)`; `apt.fadeIn(tl, "#options-reveal", 57.8)`; `apt.optionsStagger(tl, ".opt-btn", 58.3)`; `apt.correctPulse(tl, ".opt-btn.correct", 59.64)`.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Final morph (0.8s) + recenter (0.5s), both starting together at 57.0, matching the standard pattern.
**EDUCATIONAL PURPOSE:** Close the loop between the derived number (50 s) and the multiple-choice options.
**VISUAL HIERARCHY:** Correct option (green pulse) > options grid > stack column (still fully visible, never faded).
**ATTENTION MANAGEMENT:** The pulse on option A is timed exactly to "option A" being spoken (59.64s).
**MOTION NOTES:** Stack cards and connector lines are never faded during this recenter — they stay visible and continuous, per the standing rule.
**CONTINUITY FROM PREVIOUS SCENE:** Step 2's card is the same box morphing into its stack slot; the pinned question is the same element from Scene 6 sliding again (recenter), not a new element.

### SCENE 11 — End Hold + Fade
**TIMESTAMP:** 61.0 – 62.2s
**VOICEOVER:** (silence after 61.459s)
**VISUAL OBJECTIVE:** Hold the fully-solved frame briefly, then fade everything out together.
**SCREEN LAYOUT:** Unchanged from Scene 10.
**ON-SCREEN ELEMENTS:** All `#root` children.
**ANIMATION DETAILS:** `apt.fadeOut(tl, "#root > div", 61.0, 1.2)`.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Single synchronized fade-out.
**EDUCATIONAL PURPOSE:** Clean close, no dangling elements.
**VISUAL HIERARCHY:** N/A — all fading together.
**ATTENTION MANAGEMENT:** N/A.
**MOTION NOTES:** Fade starts after the correct-option pulse has settled and narration has finished.
**CONTINUITY FROM PREVIOUS SCENE:** Direct continuation — no new elements, just the closing fade of Scene 10's final state.

---

## PART 3 — Asset List Required

- `illustration/runner.svg` (already supplied) — used twice: `#runner-a` (as-is) and `#runner-b` (mirrored via `scaleX(-1)`), plus shrunk pinned copies `#illus-pinned-icon-a` / `-icon-b`.
- No other custom assets — everything else (road line, labels, arrows/nudge cue) is pure CSS, matching the "no invented components" rule.
- Shared assets from `_template/assets/` (serial-num badge, logo) copied into the question folder per Step 5B.

## PART 4 — Animation Complexity Notes

- All standard transitions use existing `apt.*` helpers at their fixed durations (0.8s morph, 0.55s cardEnter, etc.) — no new helpers invented.
- One exception, flagged per the hard rules: the Scene 4 "runners nudge toward each other" cue is a plain inline `tl.to()` position tween (not a named helper), since no existing helper covers a two-element inward nudge. This is a minimal, generic GSAP call, not a new bespoke system.
- The Given card's text-reveal timestamps intentionally point to the ORIGINAL moment each fact was narrated in Phase 1 (before the card itself is visible) rather than to any narration concurrent with the card's own entrance — because the concept-explanation narration that plays while the Given card is on screen doesn't restate the numbers. Mechanically this is safe: those `.rv` tweens resolve to opacity 1 before the card's own `cardEnter` box-fade begins, so the content simply reveals together with the box — equivalent to an honest single fade for a recap card, while still keeping every timestamp anchored to real spoken data.
- Ambient loop used once, on both pinned runner icons, across the ~15s concept-teaching stretch (23.6–37.0s) where no new visual is introduced.

## PART 5 — Master Timeline Overview

```
0.0   Question card + serial badge enter (lowered)
2.64  Card + badge rise to resting position
3.3   Road line sweeps in
4.62  Runners A + B fade in
5.98  "500 m" distance label fades in
9.26  "6 m/s" label (runner A) fades in
12.12 "4 m/s" label (runner B) fades in
14.78 Runners nudge inward (direction cue)
16.2–19.2  Question restated (hold)
21.6  PIN — question + illustration glide to pinned slots
22.6  Given card enters (recap: 500 m / 6 m/s / 4 m/s / towards each other)
23.6–37.0  Ambient bob on pinned runner icons (concept narration plays)
36.8  Given → stack morph
37.8  Step 1 card enters ("Relative Speed = 6 + 4 = 10 m/s")
45.9  Step 1 → stack morph; G→1 connector line grows
46.9  Step 2 card enters ("Time = Distance ÷ Relative Speed")
53.1–56.0  "= 500 ÷ 10 = 50 s" reveals word-by-word
57.0  Step 2 → stack morph; 1→2 connector line grows; illustration fades; question recenters
57.8  Options grid fades in
58.3  Options stagger in (A/B/C/D)
59.64 Option A pulses green ("the correct answer is option A")
61.0  Everything fades out together
```
