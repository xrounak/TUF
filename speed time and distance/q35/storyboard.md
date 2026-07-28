# Storyboard — Boats & Streams: "Still Water 20, Current 4 → Time for 64 km Upstream"

Topic: Speed, Time and Distance · Question 35 · Voiceover duration: **76.579s**

Built as a sibling of [q33](../q33/index.html) and [q34](../q34/index.html) (same river/boat illustration assets and technique — given-row of chips, boat-badge crossfade + merge-chip, pinned recap with a crossfading label). q35 is the simplest of the three: there is no unknown to solve for (still-water speed and current are both given outright, like q34) AND the narration only ever teaches ONE concept — upstream (subtraction) — never downstream, so the Phase-1 illustration demonstrates the subtract concept directly instead of deferring it to the pinned recap the way q33/q34 do. The boat therefore travels in a single direction throughout the whole video (against the current, i.e. screen-right → screen-left) and is statically mirrored (`scaleX:-1`) rather than flipping mid-video. The problem also has a genuine Step 2 outside the boat/current formula family — Time = Distance ÷ Speed — so the illustration's job ends after Step 1 and Step 2 is a plain arithmetic card.

---

## PART 1 — Narration Beat Analysis

| # | Timestamp (transcript.json) | Narration | Educational Purpose | Viewer Attention Focus | Visual Objective |
|---|---|---|---|---|---|
| 1 | 0.10–3.52 | "So welcome back again. Time for one more problem." | Warm open | Full question card rising in | Establish frame |
| 2 | 4.14–12.00 | "...speed of the boat in still water is 20 km/hr." | State the first raw fact | Question card (20 in blue); given-still chip | Number 20 registers first |
| 3 | 12.72–15.44 | "Also, the speed of the current is four km/hr." | State the second raw fact | given-current chip | Number 4 registers alongside 20 |
| 4 | 16.16–22.52 | "...find the time needed to cover 64 kilometer upstream." | State distance + frame the unknown | given-goal chip ("Distance = 64 km, Time = ?") | Plant both the distance and the actual goal (time, not speed) before any concept talk |
| 5 | 23.12–26.80 | "Now before solving, let us understand one simple concept." | Set up the physical model | River scene assembles | Establish the river before the boat moves |
| 6 | 27.20–33.56 | "When a boat moves upstream, it is moving against the flow of the river, so the current slows the boat down." | THE (only) concept: upstream = against the flow, current resists | Boat drops in, glides screen-right→left (against rightward flow arrows), visibly slowing partway; "−Current" chip merges into boat's badge | Motion IS the subtraction — boat visibly fights the current, unlike q33/q34 where this idea is explained only in text/pinned-recap |
| 7 | 34.00–41.28 | "That is why upstream speed is equal to speed of boat in still water, minus speed of current." | State the formula | Static formula tag (single state — q35 has no rearrangement, unlike q34) | Formula lands in the same breath as the boat's own resistance is visible |
| 8 | 41.64–43.30 | "Now let us find the upstream speed." | Bridge to solving | — | This is PIN_TIME — layout reorganizes for computation |
| 9 | 43.70–53.28 | "Putting the values, upstream speed is equal to 20 minus four. After simplifying this, we get 16 kilometers per hour." | Given recap + Step 1 — compute upstream speed | Given card recaps all 3 knowns; Step 1 computes 20−4=16 | First numeric answer |
| 10 | 53.68–62.32 | "We already know the upstream speed, so now we can find the required time. We know the formula. Time is equal to distance divided by speed." | Bridge + state the SECOND formula (unrelated to boats — plain D/S=T) | Step 1 morphs to stack; Step 2 opens with the time formula | A genuinely different formula family from Step 1 — no boat/current involved anymore |
| 11 | 62.70–68.84 | "Putting the values, time is equal to 64 divided by 16. After simplifying this, we get four hours." | Step 2 — compute the final answer | Step 2 reveals 64÷16=4 hours | Deliver the final numeric answer |
| 12 | 69.34–73.50 | "So the time needed to cover 64 kilometer upstream is four hours." | Recap/confirm | Step 2 stays visible, fully read | Bridge into the reveal |
| 13 | 73.98–76.58 | "Hence, the correct answer is option D." | Reveal | Options grid, D pulses green | Confirm against the four choices |

---

## PART 2 — Scene-by-Scene Storyboard

Design constraints in force throughout (per `_template/README.md` §4D.1): only `--primary #6373db`, `--primary-light #e2e5ff`, `--success #4eb85f`, `--topic #949494`, `--text #000000`, `--bg #FFFFFF`; only `QuestionCard`/`SerialNum`/`SolutionCard`/`SolutionStackCard`/`solutionChip`/`StepCircle`/`StackLine`/options-grid/`logo`/`topic-name`/`bottomStrip`/Illustration/Fraction; only the helpers in `animations.js`, called explicitly by name below. The illustration reuses the exact same user-supplied assets as [q33](../q33/illustration/) and [q34](../q34/illustration/) — `illustration/boat-svgrepo-com.svg`, `illustration/wave-2-svgrepo-com.svg`, `illustration/wave-2-light.svg` — already present in this question's folder, untouched further (boat is mirrored via CSS `scaleX(-1)`, no asset edit).

### SCENE 1 — Cold Open (0.0s – 3.6s)
**VOICEOVER:** "So welcome back again. Time for one more problem."
**VISUAL OBJECTIVE:** Establish the question, hero-style.
**SCREEN LAYOUT:** `#q-full-card` centered, lowered per `apt.heroEnterLowered`, containing "A boat's speed in still water is **20 km/hr** and the current speed is **4 km/hr**. Find the time to cover **64 km** upstream."
**ON-SCREEN ELEMENTS:** QuestionCard (full), SerialNum badge ("Q").
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.6)`; SerialNum parallel tween mirrors the same lowered→rest motion.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** N/A (opening).
**EDUCATIONAL PURPOSE:** Anchor the problem before anything competes for attention.
**VISUAL HIERARCHY:** QuestionCard > SerialNum > (empty illustration area).
**ATTENTION MANAGEMENT:** Nothing else on screen yet.
**MOTION NOTES:** The rise completes exactly as "problem" is spoken.
**CONTINUITY FROM PREVIOUS SCENE:** N/A — first scene.

### SCENE 2 — Given Row Lands (3.6s – 22.6s)
**VOICEOVER:** "...speed of the boat in still water is 20 km/hr. Also, the speed of the current is four km/hr. The question is asking us to find the time needed to cover 64 kilometer upstream."
**VISUAL OBJECTIVE:** Restate all three known numbers plainly and plant the REAL goal (time, not speed) before any concept-building starts.
**SCREEN LAYOUT:** `#given-row` — a centered flex row of three `.given-mini` pill chips above the still-empty illustration area.
**ON-SCREEN ELEMENTS:** `#given-still` ("Still Water Speed = 20 km/hr"), `#given-current` ("Current Speed = 4 km/hr"), `#given-goal` ("Distance = 64 km, Time = ?").
**ANIMATION DETAILS:**
- 12.0s: `apt.cardEnter(tl, "#given-still", 12.0)` — timed to "20 kilometer per hour." ending.
- 15.44s: `apt.cardEnter(tl, "#given-current", 15.44)` — timed to "four kilometer per hour." ending.
- 22.6s: `apt.cardEnter(tl, "#given-goal", 22.6)` — timed just after "...cover 64 kilometer upstream." ends (22.519).
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Continuous.
**EDUCATIONAL PURPOSE:** All three raw facts AND the actual goal (time) register before any formula talk begins — important since the goal here is time, not upstream speed itself.
**VISUAL HIERARCHY:** Given-row chips > empty illustration space.
**ATTENTION MANAGEMENT:** One chip at a time, matching narration order.
**MOTION NOTES:** Held state — nothing else moves yet.
**CONTINUITY FROM PREVIOUS SCENE:** Question card has just settled into rest position; chips appear directly beneath it, no cut.

### SCENE 3 — River Assembles (23.1s – 26.8s)
**VOICEOVER:** "Now before solving, let us understand one simple concept."
**VISUAL OBJECTIVE:** Build the physical stage before the boat itself appears.
**SCREEN LAYOUT:** `#illustration` (1500×280) begins filling: river channel, then flow-direction arrows.
**ON-SCREEN ELEMENTS:** `#river-scene` (two-layer parallax wave loop), `#flow-arrows` (right-pointing chevrons — the fixed flow direction).
**ANIMATION DETAILS:**
- 23.8s: `apt.cardEnter(tl, "#river-scene", 23.8)` — both wave tracks start their seamless scroll loop, running uninterrupted until `PIN_TIME` (41.639).
- 24.6s: `apt.cardEnter(tl, "#flow-arrows", 24.6)`.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Continuous build.
**EDUCATIONAL PURPOSE:** The river's flow direction is fixed before the boat ever moves, so "moving against it" reads clearly once the boat appears.
**VISUAL HIERARCHY:** River channel > flow arrows.
**ATTENTION MANAGEMENT:** River fades in first, then arrows — not simultaneous with the boat.
**MOTION NOTES:** The wave scroll is already running before the boat exists.
**CONTINUITY FROM PREVIOUS SCENE:** Given chips remain visible; river builds in the empty space beneath them, no cut.

### SCENE 4 — Boat Enters, UPSTREAM: Current Resists (27.2s – 41.28s)
**VOICEOVER:** "When a boat moves upstream, it is moving against the flow of the river, so the current slows the boat down. That is why upstream speed is equal to speed of boat in still water, minus speed of current."
**VISUAL OBJECTIVE:** The single most important beat in the whole video — literally show the boat fighting the current and losing speed, then land the subtract formula in the same breath. Unlike q33/q34 (which demonstrate ADDITION here and defer the subtract concept to the pinned recap), q35's narration only ever explains upstream, so the physical proof has to live here.
**SCREEN LAYOUT:** Boat travels screen-right → screen-left, AGAINST the flow arrows (which point right) — the reverse of q33/q34's downstream glide. `#boat-icon` is statically mirrored (`scaleX(-1)`) so it visibly faces its direction of travel.
**ON-SCREEN ELEMENTS:** `#boat-unit` (idle then traveling, starting from the right side of the illustration), `#boat-badge` (crossfades "Boat" → "Boat − Current"), `#current-badge` ("Current", fixed mid-river), `#merge-chip` ("−Current", flies from the Current badge into the boat, from the boat's trailing/right side since it now travels leftward), `#formula-tag` (single static state: "Upstream = Still Water − Current"), wake-line trio (repositioned to trail on the boat's right, since it now travels left).
**ANIMATION DETAILS:**
- 25.0s: `apt.cardEnter(tl, "#boat-unit", 25.0)` and `apt.cardEnter(tl, "#boat-badge", 25.0)` — boat drops onto the water on the right side, idling, badge reads "Boat".
- 25.0s–41.639s: `apt.ambientLoop(tl, "#boat-icon", 25.0, 41.639, {period:1.6, amp:5})` — idle bob, never fully static.
- 26.8s: `apt.cardEnter(tl, "#current-badge", 26.8)` — timed to "one simple concept." ending.
- 27.199s: `tl.to("#boat-unit", {x:-600, duration:5.28, ease:"power1.out"}, 27.199)` — boat launches leftward at a brisk pace, timed to "When a boat moves upstream," starting.
- 32.479s: `tl.to("#boat-unit", {x:-1000, duration:9.16, ease:"power2.out"}, 32.479)` — a SECOND, visibly slower tween continuing the same leftward glide, timed to the word "slows" in "the current slows the boat down" — the boat's own motion audibly decelerates exactly when the narration says so, ending at `PIN_TIME` (41.639).
- `wakeFlicker(tl, 27.199, 41.639)` — same bounded-repeat technique as q33/q34, wake lines repositioned to the boat's right (trailing) side.
- 29.739s: `tl.fromTo("#merge-chip", {opacity:0, x:160}, {opacity:1, x:0, duration:0.6, ease:"power2.out"}, 29.739)` — chip flies in from the boat's trailing (right) side, timed to the word "against".
- 30.3s: merge-chip fades out (absorbed).
- 32.479s: `#boat-state-solo` → 0, `#boat-state-sum` → 1 (0.25s crossfade) — badge now reads "Boat − Current", same instant as the deceleration tween above (word "slows").
- 34.0s: `apt.cardEnter(tl, "#formula-tag", 34.0)` — "Upstream Speed = Still Water − Current", timed to "That is why upstream speed is equal to...".
- 40.86s: `apt.emphasize(tl, "#formula-tag", 40.86)` — pulse right before the formula line finishes (word "current." starting).
**CAMERA MOVEMENT:** None (the boat's own travel provides the motion). **TRANSITIONS:** Continuous from Scene 3.
**EDUCATIONAL PURPOSE:** Concrete, motion-based proof of "upstream = still water − current" — the boat's own deceleration IS the subtraction, not just a badge/chip abstraction.
**VISUAL HIERARCHY:** Traveling (slowing) boat + merging chip/badge (primary) > formula tag (secondary) > river underneath (ambient).
**ATTENTION MANAGEMENT:** Chip-merge (29.7s), badge swap + deceleration (32.5s), and formula entrance (34.0s) are each ~2–5s apart so they read as sequential beats, not a pile-up.
**MOTION NOTES:** The two-tween glide (fast → slower) is the one deliberate deviation from a single easing curve anywhere in this video — it exists specifically to make "the current slows the boat down" a literal, felt motion change instead of a flat glide.
**CONTINUITY FROM PREVIOUS SCENE:** Boat launches from its Scene 3 idle drop-in position; already mid-glide as "moves upstream" is spoken.

### SCENE 5 — PIN FLOW + Given + Step 1 (41.64s – 57.7s)
**VOICEOVER:** "Now let us find the upstream speed. Putting the values, upstream speed is equal to 20 minus four. After simplifying this, we get 16 kilometers per hour. Now this part is completed. We already know the upstream speed, so now we can find the required time."
**VISUAL OBJECTIVE:** Transition to solving mode; recap all three knowns, then compute the upstream speed.
**SCREEN LAYOUT:** Question glides to `#q-pinned`; illustration glides into `#illus-pinned` (mini river + mirrored boat, 1.5x-scaled content with a counter-scaled label, same technique as q33/q34); Given `SolutionCard` opens center, then morphs to the stack as Step 1 opens.
**ON-SCREEN ELEMENTS:** `#q-pinned`, `#illus-pinned` (mini river/boat + `#pinned-illus-label`, 3-state crossfading), `#card-given` (chip "Given"), `#card-step1` (chip "Step 1"), `#stack-given` (`.step-circle` "G").
**ANIMATION DETAILS:**
- `PIN_TIME = 41.639`: `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 41.639)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 41.639)`; `apt.fadeOut(tl, "#serial-num", 41.639, 0.5)`.
- From `PIN_TIME + 1 = 42.639` through `RECENTER_TIME` (73.6): mini river scroll + `apt.ambientLoop(tl, "#illus-pinned-icon", 42.639, 73.6)` — the pinned area never sits static. No brake/flip is needed here (unlike q33/q34) since the boat only ever travels one direction in this video.
- `#label-state-1` ("Still Water = 20 · Current = 4 km/hr") visible from `PIN_TIME+1`.
- `GIVEN_TIME = 43.7`: `apt.cardEnter(tl, "#card-given .solution-card", 43.7)`; `apt.textReveal(tl, "#card-given .math")` reveals all three knowns (Still Water = 20 km/hr, Current = 4 km/hr, Distance = 64 km) together at 43.7 — a paraphrased recap with no fresh word-for-word match at this instant (per design.md's line-level rule), anchored to "Putting the values,".
- `STEP1_MORPH_TIME = 45.2` (morph): `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 45.2)`. `#card-step1` enters a full 1s later at `46.2`: `apt.cardEnter(tl, "#card-step1 .solution-card", 46.2)`; `apt.textReveal(tl, "#card-step1 .math")` reveals the heading "Upstream Speed = Still Water − Current" (46.2), then word-level "20" (46.799), "−" (47.059), "4" (47.579), then "= 16 km/hr" (50.459, word "16").
- 50.759s: `#label-state-1` → 0, `#label-state-2` ("Upstream Speed = 16 km/hr") → 1 — pinned label crossfades right after Step 1's own answer lands.
**CAMERA MOVEMENT:** The pin-flow glide. **TRANSITIONS:** `apt.pinFlow` (0.8s), `apt.morphToStack` (0.8s).
**EDUCATIONAL PURPOSE:** Converts the visual/conceptual upstream demo directly into the first computed value.
**VISUAL HIERARCHY:** Active card (center, primary) > pinned question (top, secondary) > pinned river recap (ambient, never fully static).
**ATTENTION MANAGEMENT:** Given states all three knowns at once; Step 1 reveals formula → substitution → result, matching narration pacing.
**MOTION NOTES:** First stretch where the pinned recap covers a card-reading beat — stays alive throughout.
**CONTINUITY FROM PREVIOUS SCENE:** The full illustration is still mid-glide into its pinned slot as the Given card opens.

### SCENE 6 — STEP 2: A New Formula — Time = Distance ÷ Speed (57.7s – 73.6s)
**VOICEOVER:** "We know the formula. Time is equal to distance divided by speed. Putting the values, time is equal to 64 divided by 16. After simplifying this, we get four hours. So the time needed to cover 64 kilometer upstream is four hours."
**VISUAL OBJECTIVE:** Unlike Step 1, this step has nothing to do with the boat/current relationship — it's the plain distance/speed/time identity, using the already-known distance (64, stated back in Scene 2) and the just-computed speed (16, from Step 1). Deliver the final answer.
**SCREEN LAYOUT:** Step 1 morphs to the left stack; Step 2 `SolutionCard` opens center and stays active for the whole remaining narration span.
**ON-SCREEN ELEMENTS:** `#stack-step1` (`.step-circle` "1"), `#line-g-1` connector, `#card-step2`.
**ANIMATION DETAILS:**
- `STEP2_MORPH_TIME = 57.7` (morph): `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 57.7)`; `apt.stackLineGrow(tl, "#line-g-1", 57.7)`. `#card-step2` enters 1s later at `58.7`: `apt.cardEnter(tl, "#card-step2 .solution-card", 58.7)`.
- `apt.textReveal(tl, "#card-step2 .math")` reveals: line "Find the Time" (58.7, during "We know the formula."), then word-level formula "Time" (59.539) "=" (59.939) and a `.frac` "Distance/Speed" (60.399, word "distance"), then substitution `.frac` "64/16" (65.0, word "64"), then "= 4 hours" (68.22, word "four").
- 68.52s: `#label-state-2` → 0, `#label-state-3` ("Time = 4 hours") → 1 — pinned label crossfades right as the final answer lands.
- Pinned river/boat recap continues its loop, unbroken, through this entire ~16s scene.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** `apt.morphToStack` (0.8s).
**EDUCATIONAL PURPOSE:** Makes explicit that Step 2 is a separate formula family from Step 1 — the boat/current story is done; this is just arithmetic.
**VISUAL HIERARCHY:** Step 2 card (center, active) > stack column (secondary) > pinned recap (ambient).
**ATTENTION MANAGEMENT:** Four sequential textReveal beats spaced across the narration's own pacing — nothing overlaps.
**MOTION NOTES:** Step 2 stays open through the recap line ("So the time needed... is four hours") so the answer has time to be read and confirmed before the reveal.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1 remains fully legible until its own morph fires.

### SCENE 7 — Options Reveal (73.6s – 76.58s)
**VOICEOVER:** "Hence, the correct answer is option D."
**VISUAL OBJECTIVE:** Confirm the answer against all four choices.
**SCREEN LAYOUT:** Step 2 morphs to stack; pinned question recenters; illustration recap clears; options grid (2×2) appears.
**ON-SCREEN ELEMENTS:** `#stack-step2` (`.step-circle` "2"), `#line-1-2` connector, `#options-reveal` (A: 3 hours, B: 3.5 hours, C: 4.5 hours, D: 4 hours — correct).
**ANIMATION DETAILS:**
- `RECENTER_TIME = 73.6`: `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 73.6)`; `apt.stackLineGrow(tl, "#line-1-2", 73.6)`; `apt.fadeOut(tl, "#illus-pinned", 73.6)` (the one deliberate stop); `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 73.6)`.
- 73.9s: `apt.fadeIn(tl, "#options-reveal", 73.9)`.
- 74.2s: `apt.optionsStagger(tl, ".opt-btn", 74.2)`.
- 76.519s: `apt.correctPulse(tl, ".opt-btn.correct", 76.519)` — timed to land exactly on the word "D.".
- 77.3s: `apt.fadeOut(tl, "#root > div", 77.3, 1.2)` — END FADE.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** `apt.morphToStack` + `apt.recenterForOptions`.
**EDUCATIONAL PURPOSE:** Standard close — verify the derived answer (4 hours) against the given options.
**VISUAL HIERARCHY:** Options grid (primary) > stack column (secondary) > pinned question (tertiary).
**ATTENTION MANAGEMENT:** Stagger-then-pulse, standard two-beat close.
**MOTION NOTES:** The one deliberate point where continuous ambient motion (the river recap) stops — immediately replaced by the options-reveal's own motion.
**CONTINUITY FROM PREVIOUS SCENE:** Step 2 is fully read before its morph fires.

---

## PART 3 — Asset List Required

| Asset | Source | Notes |
|---|---|---|
| `illustration/boat-svgrepo-com.svg` | Reused from [q33](../q33/illustration/)/[q34](../q34/illustration/), already present in this folder | Untouched shape/color — mirrored via CSS `scaleX(-1)` only, no file edit, since this video's boat travels the opposite screen direction from its siblings' |
| `illustration/wave-2-svgrepo-com.svg` | Reused, already present | Front (faster) wave row, already recolored to `--primary` |
| `illustration/wave-2-light.svg` | Reused, already present | Back (slower) wave row, already recolored to `--primary-light` |
| `design-system.css`, `animations.js`, `assets/` | Copied from `_template/` | Per README §5B |

No new colors, fonts, or template components introduced.

---

## PART 4 — Animation Complexity Notes

- **Seamless wave loop ("riverFlow" pattern)** and **wake-line flicker** — identical technique to q33/q34's local helpers (two-copy tile conveyor, bounded/finite repeat count, never `-1`).
- **Reversed travel direction (q35-specific):** q33/q34 both demonstrate DOWNSTREAM (addition) physically in Phase 1 and only explain UPSTREAM (subtraction) in text/pinned-recap. q35's narration never mentions downstream at all, so the physical demonstration here is upstream from the start — the boat travels screen-right → screen-left, against the (rightward) flow arrows, and `#boat-icon`/`#illus-pinned-icon` are statically mirrored (`scaleX(-1)`) for the entire video rather than flipping mid-way. Wake lines and the merge-chip's fly-in direction are mirrored accordingly (trailing/entering from the boat's right instead of its left).
- **Two-phase decelerating glide (q35-specific):** instead of one flat `power1.out` tween, the boat's leftward glide is split into a fast segment (27.199–32.479) and a visibly slower segment (32.479–41.639, starting exactly on the word "slows"), giving "the current slows the boat down" a literal, felt motion change — none of the sibling videos need this because their subtract concept isn't demonstrated with boat motion at all.
- **No formula-tag rearrangement (unlike q34):** q35's narration states the upstream formula once and never rearranges it, so `#formula-tag` is a single static box, not a two-state crossfade.
- **No pinned brake+flip (unlike q33/q34):** because the boat never changes direction in this video, the pinned recap's boat icon just bobs (`apt.ambientLoop`) — no squash/flip event is needed.
- **Step 2 is a genuinely different formula family:** Step 1 (boat/current subtraction) and Step 2 (Time = Distance ÷ Speed) share no visual thread — Step 2 is deliberately plain, using `.frac` for Distance/Speed and 64/16, consistent with the Fraction component already used elsewhere in the template (e.g. the original template.html's Step 2).
- **Pinned label — 3 stacked crossfading states:** `#pinned-illus-label` cycles "Still Water=20 · Current=4" → "Upstream Speed = 16 km/hr" (after Step 1 solves it) → "Time = 4 hours" (after Step 2's final answer), each a 0.25s opacity swap, timed to when each fact is actually confirmed by its card's own textReveal.
- **1.5x-scaled pinned recap content with a counter-scaled label** — same technique as q33/q34's `.pinned-illus-content { transform: scale(1.5) }` / `.pinned-illus-label { transform: scale(0.6667) }` pairing.
- **Standard breathing gap enforced:** `#card-step1`/`#card-step2` enter exactly 1.0s after their preceding `apt.morphToStack` call (46.2 = 45.2+1, 58.7 = 57.7+1).
- **Three cards (G, 1, 2), two connector lines** — within the README's "typically 1 Given + 2–4 Steps" allowance; the simplest step count of the three sibling videos since there's no unknown-solving step to insert before the direct computation.

---

## PART 5 — Master Timeline Overview

```
TIME (s)   ELEMENT                          WHAT HAPPENS
─────────  ───────────────────────────────  ─────────────────────────────────
0.0        Background + bottomStrip+logo    Always visible
0.3        QuestionCard                     heroEnterLowered — fades/scales in low
0.8        SerialNum                        pops in low, mirrors card
3.6        QuestionCard + SerialNum         rise to resting position
12.0       given-still chip                 cardEnter ("Still Water = 20 km/hr")
15.44      given-current chip               cardEnter ("Current = 4 km/hr")
22.6       given-goal chip                  cardEnter ("Distance = 64 km, Time = ?")
23.8       River (2-layer wave loop)        seamless scroll begins — never stops until 41.639s
24.6       Flow arrows                      cardEnter (fixed rightward flow)
25.0       Boat + "Boat" badge              cardEnter, mirrored (scaleX:-1) — idle bob begins
26.8       "Current" badge                  cardEnter
27.199     Boat                             glides LEFT 600px over 5.28s (upstream, fast segment)
29.739     "−Current" chip                  flies in from boat's trailing (right) side
30.3       merge-chip                       fades out (absorbed)
32.479     Boat                             SECOND glide, further LEFT 400px over 9.16s (visibly slower — "slows")
32.479     "Boat" badge                     text swap → "Boat − Current"
34.0       Formula tag                      cardEnter — "Upstream = Still Water − Current" (single static state)
40.86      Formula tag                      emphasize pulse

[ PIN_TIME = 41.639 ]
─────────  ───────────────────────────────  ─────────────────────────────────
41.639     Question + Illustration          🌟 pinFlow — real glide to pinned slots
42.639     Pinned river/boat recap          mini seamless loop + bob begins — runs to 73.6

[ GIVEN_TIME = 43.7 ]
─────────  ───────────────────────────────  ─────────────────────────────────
43.7       Given card                       cardEnter (center) — all 3 knowns reveal together

[ STEP CYCLE ]
─────────  ───────────────────────────────  ─────────────────────────────────
45.2       Given → Given stack               🌟 morphToStack
46.2       Step 1 card                       cardEnter (1s breathing gap after morph)
46.2–50.459 Step 1 .math                     textReveal (formula → 20−4 → 16 km/hr)
50.759     Pinned label                      crossfade → "Upstream Speed = 16 km/hr"
57.7       Step 1 → Step 1 stack             🌟 morphToStack + stackLineGrow (G→1)
58.7       Step 2 card                       cardEnter (1s breathing gap after morph)
58.7–68.22 Step 2 .math                     textReveal (heading → Distance/Speed → 64/16 → 4 hours)
68.52      Pinned label                      crossfade → "Time = 4 hours"

[ PHASE 3 ]
─────────  ───────────────────────────────  ─────────────────────────────────
73.6       Step 2 → Step 2 stack            🌟 morphToStack + stackLineGrow (1→2)
73.6       Pinned illustration recap        fadeOut (the ONE deliberate stop)
73.6       Pinned question                  recenterForOptions
73.9       Options grid                     fadeIn
74.2       Option buttons                   optionsStagger
76.519     Correct option (D)               correctPulse
77.3       Everything                       END FADE (1.2s)
```

**Video duration:** 76.579s (matches `voiceover.wav` exactly).
