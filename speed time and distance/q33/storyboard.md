# Storyboard — Boats & Streams: "Downstream 30, Current 5 → Find Upstream"

Topic: Speed, Time and Distance · Question 33 · Voiceover duration: **96.83s** (transcript last word ends 96.619s)

Built as a sibling of [q8](../q8/index.html) (same river/boat illustration assets and technique), simplified for a single-unknown problem: q8 solved two simultaneous equations for the current C; q33 is given the current (5 km/hr) outright and only needs to solve one equation for B (still-water speed), then apply the upstream formula once. Phase 1 therefore demonstrates only the DOWNSTREAM (addition) concept with motion; the UPSTREAM (subtraction) concept is explained later in the narration (56.7s–75.4s), so its visual payoff — the boat flipping direction — plays inside the PINNED recap during Step 2 instead of in the main Phase-1 illustration.

---

## PART 1 — Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|---|---|---|---|---|
| 1 | 0.10–2.66 | "So welcome back again. Time for one more problem." | Warm open | Full question card rising in | Establish frame |
| 2 | 3.32–14.04 | "...downstream speed of a boat is 30 km/hr. Also, the speed of the current is 5 km/hr." | State the two givens | Question card numbers in blue; given-mini chips appear below | Numbers 30 and 5 register before any algebra |
| 3 | 14.62–20.36 | "The question is asking us to find the upstream speed of the boat." | Frame the unknown | — | Plant "upstream" as the goal |
| 4 | 20.76–25.96 | "...let us understand one simple concept. Imagine that the river is flowing in one direction." | Set up the physical model | River scene fades in, flow arrows | Establish a single fixed current direction |
| 5 | 26.44–33.74 | "When the boat moves in the same direction as the river, the current helps the boat move faster, so both speeds get added." | THE downstream concept | Boat enters, "5 km/hr" current tag fixed near river | Plant the addition rule before it's used |
| 6 | 34.14–44.44 | "...downstream speed = speed of boat in still water plus speed of current. Now let the speed of the boat in still water be B km/hr." | Name the variable, demonstrate addition | Boat glides WITH the flow, "+5" chip merges into the boat's badge, badge relabels "B" → "B + 5" | Motion IS the addition — boat visibly speeds up as +5 lands |
| 7 | 44.88–51.90 | "The downstream speed is already given as 30, and the speed of current is 5, so B plus 5 is equal to 30." | State the Given equation | Given card (center, pinned layout) | Reader sees B + 5 = 30 plainly |
| 8 | 52.48–56.16 | "After solving this, B is equal to 25 kilometers per hour." | Step 1 — solve for B | Step 1 card | Deliver B = 25 |
| 9 | 56.66–65.78 | "Now this value will help us find the upstream speed. Why? Because upstream means the boat is moving against the flow." | Bridge + THE upstream concept setup | Step 2 card opens; pinned recap boat brakes and flips | Sell the pivot: same B, opposite direction |
| 10 | 66.16–75.44 | "So this time the current slows the boat down. Upstream speed = speed of boat in still water minus speed of current." | THE upstream concept (subtraction) | Step 2 card text reveal; pinned recap shows the flipped boat struggling | Formula B − Current lands right as the boat visibly fights the current |
| 11 | 75.78–88.26 | "We already know B = 25 km/hr. So upstream = 25 minus 5. After simplifying, we get 20 km/hr." | Step 3 — compute the answer | Step 3 card | Deliver the final numeric answer |
| 12 | 88.80–93.14 | "So the upstream speed of the boat is 20 km/hr." | Recap/confirm | Stack column fully built, pinned recap crossfades to final answer | Bridge into the reveal |
| 13 | 93.74–96.62 | "Hence, the correct answer is option B." | Reveal | Options grid, B pulses green | Confirm against the four choices |

---

## PART 2 — Scene-by-Scene Storyboard

Design constraints in force throughout (per `_template/README.md` §4D.1): only `--primary #6373db`, `--primary-light #e2e5ff`, `--success #4eb85f`, `--topic #949494`, `--text #000000`, `--bg #FFFFFF`; only `QuestionCard`/`SerialNum`/`SolutionCard`/`SolutionStackCard`/`solutionChip`/`StepCircle`/`StackLine`/options-grid/`logo`/`topic-name`/`bottomStrip`/Illustration/Fraction; only the helpers in `animations.js`, called explicitly by name below. The illustration (river + boat) reuses the exact same user-supplied, already-recolored assets as q8 (`illustration/boat-svgrepo-com.svg`, `illustration/wave-2-svgrepo-com.svg`, `illustration/wave-2-light.svg` — byte-identical to q8's copies, confirmed via diff, no further recoloring needed).

### SCENE 1 — Cold Open (0.0s – 3.5s)
**VOICEOVER:** "So welcome back again. Time for one more problem."
**VISUAL OBJECTIVE:** Establish the question, hero-style.
**SCREEN LAYOUT:** `#q-full-card` centered, lowered per `apt.heroEnterLowered`, containing: "A boat travels downstream at **30 km/hr** and the current speed is **5 km/hr**. Find the boat's **upstream speed**."
**ON-SCREEN ELEMENTS:** QuestionCard (full), SerialNum badge ("Q").
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.5)`; SerialNum fades in at 0.8s at the same lowered Y, rises with the card at 3.5s.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** N/A (opening).
**EDUCATIONAL PURPOSE:** Anchor the problem before anything competes for attention.
**VISUAL HIERARCHY:** QuestionCard > SerialNum > (empty illustration area).
**ATTENTION MANAGEMENT:** Nothing else on screen yet.
**MOTION NOTES:** The rise completes exactly as "problem" is spoken.
**CONTINUITY FROM PREVIOUS SCENE:** N/A — first scene.

### SCENE 2 — Givens Restated (3.5s – 20.36s)
**VOICEOVER:** "...downstream speed of a boat is 30 km/hr. Also, the speed of the current is 5 km/hr. The question is asking us to find the upstream speed of the boat."
**VISUAL OBJECTIVE:** Restate both given numbers plainly before any concept-building starts.
**SCREEN LAYOUT:** Two `.given-mini` pill chips stacked above the (still-empty) illustration area.
**ON-SCREEN ELEMENTS:** `#given-downstream` ("Downstream Speed = 30 km/hr"), `#given-current` ("Current Speed = 5 km/hr").
**ANIMATION DETAILS:** `apt.cardEnter(tl, "#given-downstream", 11.0)` (right after "30 kilometer per hour" finishes at 10.78s); `apt.cardEnter(tl, "#given-current", 14.3)` (right after "five kilometer per hour" finishes at 14.04s).
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Continuous.
**EDUCATIONAL PURPOSE:** Both raw numbers register visually before algebra begins.
**VISUAL HIERARCHY:** Question card > given chips > empty illustration space.
**ATTENTION MANAGEMENT:** One chip at a time, matching narration order.
**MOTION NOTES:** Held state — nothing else moves yet.
**CONTINUITY FROM PREVIOUS SCENE:** Question card has just settled into rest position (from Scene 1's 3.5s rise); chips appear directly beneath it, no cut.

### SCENE 3 — River Assembles, Flow Fixed (20.76s – 26.44s)
**VOICEOVER:** "...let us understand one simple concept. Imagine that the river is flowing in one direction."
**VISUAL OBJECTIVE:** Establish the physical model before the boat itself appears.
**SCREEN LAYOUT:** `#illustration` (1500×280, centered beneath the question's future pinned slot) begins filling: river channel first, then flow direction.
**ON-SCREEN ELEMENTS:** `#river-scene` (rounded `--primary-light` channel, two-layer parallax wave loop — `#river-track-back`/`#river-track-front`), `#flow-arrows` (three right-pointing chevrons), `#current-tag` ("5 km/hr" pill, fixed above the river).
**ANIMATION DETAILS:** `apt.cardEnter(tl, "#river-scene", 23.219)` (sync "Imagine that the river is flowing"); `apt.cardEnter(tl, "#flow-arrows", 24.6)` and `apt.cardEnter(tl, "#current-tag", 24.6)` (sync "in one direction"). Both wave tracks start their seamless scroll loop immediately at 23.219s and run uninterrupted through `PIN_TIME` (44.6s).
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Continuous build.
**EDUCATIONAL PURPOSE:** The river's direction is fixed and established before the boat ever moves, preventing the "current changes direction" misconception.
**VISUAL HIERARCHY:** River channel > flow arrows/current tag (equal secondary focus).
**ATTENTION MANAGEMENT:** River fades in first, then arrows+tag together — two beats, not simultaneous with the boat.
**MOTION NOTES:** The wave scroll is already running before the boat exists, establishing early that the water is never static.
**CONTINUITY FROM PREVIOUS SCENE:** Given chips remain visible and legible; the river builds in the empty space beneath them, no cut.

### SCENE 4 — Boat Enters, DOWNSTREAM: Speeds Add (26.44s – 44.44s)
**VOICEOVER:** "When the boat moves in the same direction as the river, the current helps the boat move faster, so both the speeds get added. That is why downstream speed is equal to speed of boat in still water, plus speed of current. Now, let the speed of the boat in still water be B kilometer per hour."
**VISUAL OBJECTIVE:** The single most important Phase-1 beat — literally show B and the current (5) combining into a faster boat.
**SCREEN LAYOUT:** Boat travels left→right across the illustration, same direction as the flow arrows.
**ON-SCREEN ELEMENTS:** `#boat-unit` (idle then traveling), `#b-badge` (reads "B", travels with the boat), `#current-tag` (stays fixed at its river position), `#merge-chip` ("+5", flies from the current tag to the boat), `#formula-downstream` ("Downstream = B + 5"), 3× `.wake-line`.
**ANIMATION DETAILS:**
- 26.439s: `apt.cardEnter(tl, "#boat-unit", 26.439)` and `apt.cardEnter(tl, "#b-badge", 26.439)` — boat drops onto the water, idling, badge already reads "B" (a labeling device that anticipates the variable named at 43.1s, same idiom `given-mini` chips use to restate facts ahead of/independent from the literal phrase).
- From 26.439s: `apt.ambientLoop(tl, "#boat-icon", 26.439, 44.6, { period: 1.6, amp: 5 })` — small vertical bob, never fully idle.
- 29.76s: `apt.emphasize(tl, "#current-tag", 29.76)` — pulse, sync "the current helps the boat move faster."
- 34.2s: `tl.to("#boat-unit", { x: 780, duration: 10.24, ease: "power1.out" }, 34.2)` — boat glides right, arriving right as "...be B kilometer per hour" finishes (44.44s). Layered wake-line flicker (bounded repeat) runs the same window.
- 34.6s: `#merge-chip` flies from the current tag toward the boat (`fromTo x/opacity`, 0.6s), sync "so both the speeds get added."
- 35.3s: `#b-badge` text crossfades "B" → "B + 5" (0.25s opacity swap of two stacked spans, same idiom `apt.morphToStack` uses internally).
- 40.9s: `apt.cardEnter(tl, "#formula-downstream", 40.9)` — label fades in above the boat's path, sync "plus speed of current."
- 43.1s: `apt.emphasize(tl, "#b-badge", 43.1)` and `apt.emphasize(tl, "#formula-downstream", 43.1)` — pulse together, sync the literal naming "...be B kilometer per hour" (word "b" starts 43.099s).
**CAMERA MOVEMENT:** None (boat's own travel provides the motion).
**TRANSITIONS:** Continuous from Scene 3 — boat simply starts moving, no cut.
**EDUCATIONAL PURPOSE:** Concrete, motion-based proof of "downstream = B + 5" landing in the same breath as the formula is stated.
**VISUAL HIERARCHY:** Traveling boat + merging chip (primary) > formula label (secondary) > river (ambient).
**ATTENTION MANAGEMENT:** Chip-merge (34.6s) and formula label (40.9s) are ~6s apart so they don't compete.
**MOTION NOTES:** The 10.24s glide is timed to land exactly as the narration finishes naming B, so the boat visibly "arrives" with the concept.
**CONTINUITY FROM PREVIOUS SCENE:** Boat launches from the exact idle spot it entered at in this same scene — no repositioning jump.

### SCENE 5 — PIN FLOW + Given (44.6s – 52.48s)
**VOICEOVER:** "The downstream speed is already given as 30, and the speed of the current is five, so B plus 5 is equal to 30."
**VISUAL OBJECTIVE:** Transition to solving mode; state the equation plainly.
**SCREEN LAYOUT:** Question glides to `#q-pinned` (left:385px top:30px width:1275px); illustration glides into a small pinned recap `#illus-pinned` (left:280px top:190px width:1300px height:150px) holding a MINIATURE river+boat that keeps running continuously; Given `SolutionCard` opens center.
**ON-SCREEN ELEMENTS:** `#q-pinned`, `#illus-pinned` (mini river loop, mini bobbing boat, `#pinned-illus-label` — 3-state crossfading text), `#card-given` (chip "Given").
**ANIMATION DETAILS:**
- `PIN_TIME = 44.6`: `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 44.6)`; `apt.pinFlow(tl, "#illustration", "#illus-pinned", 44.6)`; `apt.fadeOut(tl, "#serial-num", 44.6, 0.5)`.
- From `PIN_TIME + 1 = 45.6` through `RECENTER_TIME` (88.8s): mini river scroll loop + `apt.ambientLoop(tl, "#illus-pinned-icon", 45.6, 88.8)` keep the pinned recap alive for the entire Given/Step1/Step2/Step3 phase.
- `#pinned-illus-label` opens on its state-1 text ("Downstream = 30 · Current = 5 km/hr"), visible from `PIN_TIME+1`.
- `GIVEN_TIME = 44.879` (its own transcript timestamp, distinct from `PIN_TIME`): `apt.cardEnter(tl, "#card-given .solution-card", 44.879)`.
- `apt.textReveal(tl, "#card-given .math")` reveals: line `data-t="44.879"` "Downstream Speed = B + 5"; word-level `data-t="51.659"` "= <span class='ans'>30 km/hr</span>" (sync word "30." start).
**CAMERA MOVEMENT:** The pin-flow glide itself. **TRANSITIONS:** `apt.pinFlow` (0.8s real glide, not a cut).
**EDUCATIONAL PURPOSE:** Converts the visual downstream demo directly into the equation that gets solved next.
**VISUAL HIERARCHY:** Given card (primary) > pinned question (secondary) > pinned river recap (ambient, still visibly alive).
**ATTENTION MANAGEMENT:** One clean equation reveal — no competing motion.
**MOTION NOTES:** The pinned recap never freezes even during this reading-heavy beat.
**CONTINUITY FROM PREVIOUS SCENE:** The illustration is still mid-glide into its pinned slot as the Given card opens — same continuous motion, no reset.

### SCENE 6 — STEP 1: Solve for B (52.48s – 56.66s)
**VOICEOVER:** "After solving this, B is equal to 25 kilometers per hour."
**VISUAL OBJECTIVE:** Isolate the one-line subtraction that solves for B.
**SCREEN LAYOUT:** Given card morphs to the left stack; Step 1 `SolutionCard` opens center.
**ON-SCREEN ELEMENTS:** `#stack-given` (`.step-circle` "G"), `#card-step1`.
**ANIMATION DETAILS:**
- `STEP1_TIME = 52.479`: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 52.479)`.
- `apt.cardEnter(tl, "#card-step1 .solution-card", 53.479)` (standard 1s breathing gap after the morph starts).
- `apt.textReveal(tl, "#card-step1 .math")` reveals: line `data-t="53.479"` "B = 30 − 5"; word-level `data-t="54.779"` "= <span class='ans'>25 km/hr</span>" (sync word "25" start).
- Pinned river/boat recap continues its loop unbroken.
- 55.3s: pinned recap's `#pinned-illus-label` crossfades state-1 → state-2 ("B = 25 km/hr"), 0.25s opacity swap, right after Step 1's own reveal lands.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** `apt.morphToStack` (0.8s).
**EDUCATIONAL PURPOSE:** Isolate "solve for B" as its own clean beat.
**VISUAL HIERARCHY:** Step 1 card (primary) > stack-given (secondary) > pinned recap (ambient).
**ATTENTION MANAGEMENT:** Two sequential reveals (the subtraction, then the answer), matched to narration pacing.
**MOTION NOTES:** River keeps flowing, boat keeps bobbing throughout.
**CONTINUITY FROM PREVIOUS SCENE:** Given card stays fully legible until the instant its morph fires.

### SCENE 7 — STEP 2: Upstream Concept — Speeds Subtract (56.66s – 75.9s)
**VOICEOVER:** "Now, this value will help us find the upstream speed. Why? Because upstream means the boat is moving against the flow of the river. So this time, the current slows the boat down. That is why upstream speed is equal to speed of boat in still water, minus speed of current."
**VISUAL OBJECTIVE:** The mirror-image concept of Scene 4 — same B, opposite arithmetic — delivered here (not in Phase 1) because that's where the narration actually explains it. The visual payoff plays inside the pinned recap so the concept still gets real motion, not just text.
**SCREEN LAYOUT:** Step 1 morphs to stack; Step 2 `SolutionCard` opens center (concept-only, no numbers yet). Pinned recap's mini boat brakes and flips to face left.
**ON-SCREEN ELEMENTS:** `#stack-step1` (`.step-circle` "1"), `#line-g-1` connector, `#card-step2`, pinned `#illus-pinned-icon` (flips).
**ANIMATION DETAILS:**
- `STEP2_TIME = 56.659`: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 56.659)`.
- `apt.cardEnter(tl, "#card-step2 .solution-card", 57.659)`.
- `apt.textReveal(tl, "#card-step2 .math")` reveals: line `data-t="57.659"` "Now find the Upstream Speed"; line `data-t="63.68"` "Boat moves against the flow" (sync word "against" start); word-level `data-t="70.959"` "Upstream = B − <span class='hi'>Current</span>" (sync word "upstream" in "upstream speed is equal to...").
- 63.68s (sync "against the flow"): pinned recap brake-squash — `tl.to("#illus-pinned-icon", {scaleY:0.92, duration:0.18, ease:"power2.out", yoyo:true, repeat:1}, 63.68)` — then `tl.to("#illus-pinned-icon", {scaleX:-1, duration:0.4, ease:"power2.inOut"}, 63.9)` — the mini boat visibly turns to face upstream, same brake-then-flip idiom as q8's Scene 5.
- Pinned river scroll and label ("B = 25 km/hr") hold steady underneath — only the boat icon itself flips.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** `apt.morphToStack`.
**EDUCATIONAL PURPOSE:** Gives the "moving against the flow" narration a literal visual match instead of a silent hold, and keeps the concept's own motion-based proof alive even though it plays inside the pinned recap rather than the main illustration.
**VISUAL HIERARCHY:** Step 2 card (primary, the concept text) > flipping pinned boat (secondary, the concept motion) > stack column (tertiary).
**ATTENTION MANAGEMENT:** Three sequential textReveal beats matched to the narration's own pacing; the boat flip is a single short (0.58s) event that doesn't linger.
**MOTION NOTES:** This is the longest single card window (19.24s) in the video — the flip event plus continuous river/bob keeps it from ever reading as static.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1 remains fully readable until its own morph fires; the pinned boat is exactly where Scene 5's pin-flow left it, facing right, before this scene's flip.

### SCENE 8 — STEP 3: Compute the Answer (75.9s – 88.8s)
**VOICEOVER:** "Now, we already know the speed of the boat in still water. It is 25 kilometer per hour. So upstream speed is equal to 25 minus five. After simplifying this, we get 20 kilometer per hour."
**VISUAL OBJECTIVE:** Deliver the final numeric answer.
**SCREEN LAYOUT:** Step 2 morphs to stack; Step 3 `SolutionCard` opens center.
**ON-SCREEN ELEMENTS:** `#stack-step2` (`.step-circle` "2"), `#line-1-2` connector, `#card-step3`.
**ANIMATION DETAILS:**
- `STEP3_TIME = 75.9`: `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 75.9)`; `apt.stackLineGrow(tl, "#line-1-2", 75.9)`.
- `apt.cardEnter(tl, "#card-step3 .solution-card", 76.9)`.
- `apt.textReveal(tl, "#card-step3 .math")` reveals: line `data-t="76.9"` "Upstream = B − Current"; word-level `data-t="79.879"` "= 25 − 5" (sync word "25" start in "It is 25 kilometer per hour"); word-level `data-t="87.119"` "= <span class='ans'>20 km/hr</span>" (sync word "20" start).
- 87.119s: pinned recap's `#pinned-illus-label` crossfades state-2 → state-3 ("Upstream = 20 km/hr"), same time as Step 3's own answer reveal.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** `apt.morphToStack` + `apt.stackLineGrow`.
**EDUCATIONAL PURPOSE:** Isolate the final subtraction and answer as their own clean beat.
**VISUAL HIERARCHY:** Step 3 card (primary) > stacks (secondary) > pinned recap (ambient, now confirming the same answer).
**ATTENTION MANAGEMENT:** Three reveals, spaced across the full narration span (76.9 / 79.879 / 87.119).
**MOTION NOTES:** Pinned river/boat still animating — this is the last stretch before Phase 3.
**CONTINUITY FROM PREVIOUS SCENE:** Step 2 remains fully legible until its own morph fires.

### SCENE 9 — Recap + Options Reveal (88.8s – 96.62s)
**VOICEOVER:** "So the upstream speed of the boat is 20 kilometer per hour. Hence, the correct answer is option B."
**VISUAL OBJECTIVE:** Confirm the derived answer (20 km/hr) against all four choices.
**SCREEN LAYOUT:** Step 3 morphs to stack; pinned question recenters; illustration recap clears; options grid (2×2) appears.
**ON-SCREEN ELEMENTS:** `#stack-step3` (`.step-circle` "3"), `#line-2-3` connector, `#options-reveal` (A: 25, B: 20 — correct, C: 18, D: 22).
**ANIMATION DETAILS:**
- `RECENTER_TIME = 88.8`: `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 88.8)`; `apt.stackLineGrow(tl, "#line-2-3", 88.8)`; `apt.fadeOut(tl, "#illus-pinned", 88.8)` (the one deliberate stop — replaced immediately by the options-reveal's own motion); `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 88.8)`.
- 89.4s: `apt.fadeIn(tl, "#options-reveal", 89.4)`.
- 89.7s: `apt.optionsStagger(tl, ".opt-btn", 89.7)`.
- 96.0s: `apt.correctPulse(tl, ".opt-btn.correct", 96.0)`, landing on "option B" (word "B." ends 96.619s).
- 96.9s: `apt.fadeOut(tl, "#root > div", 96.9, 1.2)` — END FADE.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** `apt.morphToStack` + `apt.recenterForOptions`.
**EDUCATIONAL PURPOSE:** Standard close — verify the derived answer against the given options.
**VISUAL HIERARCHY:** Options grid (primary) > stack column (secondary) > pinned question (tertiary).
**ATTENTION MANAGEMENT:** Stagger-then-pulse, standard two-beat close.
**MOTION NOTES:** The pinned recap's fade-out is the sole deliberate stop in the whole video, immediately superseded by the options grid's own entrance motion in the same beat.
**CONTINUITY FROM PREVIOUS SCENE:** Step 3 is fully read before its morph fires.

---

## PART 3 — Asset List Required

| Asset | Source | Notes |
|---|---|---|
| `illustration/boat-svgrepo-com.svg` | Reused from [q8](../q8/illustration/boat-svgrepo-com.svg), already present in this folder | Byte-identical (diffed) — untouched, no further recolor needed |
| `illustration/wave-2-svgrepo-com.svg` | Reused from q8, already present | Byte-identical — front (faster) wave row, already recolored to `#6373db` |
| `illustration/wave-2-light.svg` | Reused from q8, already present | Byte-identical — back (slower) wave row, already recolored to `#e2e5ff` |
| `design-system.css`, `animations.js`, `assets/` | Copied fresh from `_template/` (diffed identical to q8's copies — template unchanged) | Per README §5B |

No new colors, fonts, or template components introduced.

---

## PART 4 — Animation Complexity Notes

- **Reused seamless wave loop ("riverFlow" pattern)** and **wake-line flicker** — identical technique to q8's local helpers (two-copy tile conveyor, bounded/finite repeat count, never `-1`).
- **Only one badge, two states in the main illustration:** `#b-badge` only needs "B" → "B + 5" (no C-badge, no B−C states) since Phase 1 here only demonstrates the addition concept — simpler than q8's four-state badge.
- **The subtraction concept's motion lives in the pinned recap, not Phase 1:** because the narration explains "upstream = B − current" only after the pin (56.7s–75.4s), the boat-flip payoff for that concept is staged as a small brake-squash + `scaleX:-1` flip on `#illus-pinned-icon` during Step 2's card window, timed to "moving against the flow" (63.68s) — same idiom as q8's Scene 5 flip, just relocated to the pinned recap since that's where the narration timeline puts it.
- **Pinned label — 3 stacked crossfading states** instead of q8's 2 ("given" → "downstream"): `#pinned-illus-label` cycles "Downstream=30 · Current=5" → "B = 25 km/hr" (after Step 1 solves it) → "Upstream = 20 km/hr" (after Step 3's final answer), each a 0.25s opacity swap of stacked spans, timed to when each fact is actually confirmed by its card's own textReveal.
- **Four stack cards (G, 1, 2, 3), three connector lines** — within the README's "typically 1 Given + 2–4 Steps" allowance. `apt.setStackLine` computes all three connectors from real rendered circle centers; `layoutStack()` positions all four cards with a measured gap, not hand-guessed tops.
- **Step 2 is a concept-only card** (no numbers) — its textReveal states the rule "Upstream = B − Current" without yet substituting values; Step 3 is purely the numeric substitution "25 − 5 = 20". Splitting them this way mirrors the narration's own two-beat structure (concept, then arithmetic) rather than cramming both into one card.

---

## PART 5 — Master Timeline Overview

```
TIME (s)   ELEMENT                          WHAT HAPPENS
─────────  ───────────────────────────────  ─────────────────────────────────
0.0        Background + bottomStrip+logo    Always visible
0.3        QuestionCard                     heroEnterLowered — fades/scales in low
0.8        SerialNum                        pops in low, mirrors card
3.5        QuestionCard + SerialNum         rise to resting position
11.0       given-downstream chip            cardEnter ("Downstream = 30 km/hr")
14.3       given-current chip               cardEnter ("Current = 5 km/hr")
23.219     River (2-layer wave loop)        cardEnter — seamless scroll begins, never stops until 44.6
24.6       Flow arrows + current tag        cardEnter
26.439     Boat + "B" badge                 cardEnter — idle bob begins, never stops until 44.6
29.76      Current tag                      emphasize pulse
34.2       Boat                             glides RIGHT 780px over 10.24s (downstream)
34.6       "+5" chip                        flies from current tag to boat
35.3       "B" badge                        text swap → "B + 5"
40.9       "Downstream = B + 5" label       cardEnter
43.1       "B" badge + formula label        emphasize pulse (sync literal "be B kilometer per hour")

[ PIN_TIME = 44.6 ]
─────────  ───────────────────────────────  ─────────────────────────────────
44.6       Question + Illustration          🌟 pinFlow — real glide to pinned slots
45.6       Pinned river/boat recap          mini seamless loop + bob begins — runs to 88.8

[ GIVEN_TIME = 44.879 ]
─────────  ───────────────────────────────  ─────────────────────────────────
44.879     Given card                       cardEnter (center)
44.879–51.659 Given card .math               textReveal ("Downstream=B+5" → "=30 km/hr")

[ STEP CYCLE ]
─────────  ───────────────────────────────  ─────────────────────────────────
52.479     Given → Given stack               🌟 morphToStack
53.479     Step 1 card                       cardEnter — textReveal ("B=30−5" → "=25 km/hr")
55.3       Pinned label                      crossfade → "B = 25 km/hr"
56.659     Step 1 → Step 1 stack             🌟 morphToStack
57.659     Step 2 card                       cardEnter — textReveal (concept: "Upstream = B − Current")
63.68      Pinned mini boat                  brake-squash + flip (scaleX -1)
75.9       Step 2 → Step 2 stack             🌟 morphToStack + stackLineGrow (G→1)
76.9       Step 3 card                       cardEnter — textReveal ("25−5" → "=20 km/hr")
87.119     Pinned label                      crossfade → "Upstream = 20 km/hr"

[ PHASE 3 ]
─────────  ───────────────────────────────  ─────────────────────────────────
88.8       Step 3 → Step 3 stack            🌟 morphToStack + stackLineGrow (1→2)
88.8       Pinned illustration recap        fadeOut (the ONE deliberate stop)
88.8       Pinned question                  recenterForOptions
89.4       Options grid                     fadeIn
89.7       Option buttons                   optionsStagger
96.0       Correct option (B)               correctPulse
96.9       Everything                       END FADE (1.2s)
```

**Video duration:** 96.83s (matches `voiceover.wav` exactly).
