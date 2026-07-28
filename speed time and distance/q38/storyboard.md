# Storyboard — Data Sufficiency: "Can the Current Speed of a River Be Found?"

Topic: Speed, Time and Distance · Question 38 · Voiceover duration: **182.88s**

q38 is the second Data Sufficiency (DS) question in this sibling set, after [q36](../q36/index.html) (car average-speed DS). Structurally it follows q36's repurposing of the Given/Step cards (**Given = formula anchor**, **Step 1/2 = Statement I / Statement II independently**, **Step 3 = Combined**), but the illustration is a river+boat scene — a structural cousin of [q33](../q33/illustration)/[q34](../q34/illustration)/[q35](../q35/illustration), extended to show **both** directions of travel in Phase 1 (downstream then upstream) since this narration teaches both formulas explicitly, unlike any single-direction sibling. Per the user's steer, the card count stays at the DS minimum (Given, Statement I, Statement II, Combined — 4 cards, same as q36) rather than fragmenting further; explanation depth instead comes from dense, precisely-timed multi-line `textReveal` inside each card. No red/error color exists in the design system, so "Not Sufficient" renders in the same `--primary` blue as every other emphasized value.

---

## PART 1 — Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|---|---|---|---|---|
| 1 | 0.08–6.22 | "So welcome back again. Time for one more problem. Now, in this problem, we are given two statements." | Warm open, flags TWO statements up front | Question card rising in | Establish frame |
| 2 | 7.28–18.14 | "The first statement says that the boat's downstream speed is 26 km/hr. The second statement says that the same boat's upstream speed is 18 km/hr." | State both statements verbatim | `#given-down` then `#given-up` chips pop above the (still-empty) illustration area | Plants the two hard numbers the whole video will manipulate |
| 3 | 18.68–33.44 | "The question is not asking us to find the current speed directly. It is asking a data sufficiency question. ... we need to check whether the given information is enough..." | Flag the question TYPE — reframes from "solve" to "is this solvable" | Nothing new enters; narration only | Prevents the viewer from trying to compute a number early |
| 4 | 34.02–45.91 | "Now, before checking the statements, let us assume two unknowns. Let the speed of the boat in still water be B... and let the speed of the river current be C..." | Introduce the two unknowns that make this a 2-variable problem | River scene fades in, then boat (badge "Boat (b)"), then current chip ("Current (c)") | Gives b/c concrete visual anchors before the formulas arrive |
| 5 | 46.26–67.62 | "Now, remember these two very important formulas. Downstream speed = boat + current, because the river helps... upstream speed = boat − current, because the river slows... These two formulas are the key to the entire question." | THE two formulas — taught back to back, each proven by the boat's own motion | Boat sails downstream (badge → "Boat + Current"), then flips and sails upstream (badge → "Boat − Current"); formula tag crossfades between the two | The single most important visual proof in the video: current HELPS one way, HURTS the other |
| 6 | 67.96–72.22 | "Now let us check the statements one by one. First, statement one. It says the downstream speed is 26 km/hr." | Transition into solving mode | Pin flow; Given card recaps both formulas | Bridge from "concept" to "application" |
| 7 | 72.22–96.10 | "Using the formula, boat + current = 26. Now ask yourself: can we find current from this single equation? No — two unknowns, one equation. Statement one alone is not sufficient." | Apply the rule to Statement I in isolation | Step 1 "Statement I" card, 4-beat reveal | First concrete proof that ONE equation with TWO unknowns is unsolvable |
| 8 | 97.10–116.56 | "Now statement two: upstream = 18. Boat − current = 18. Again, can we find current? No — only one equation with two unknowns. Statement two alone is also not sufficient." | Mirror of beat 7 | Step 2 "Statement II" card, 4-beat reveal | Confirms the rule generalizes — it's not statement-specific |
| 9 | 117.56–175.66 | "Now comes the important part... both together: boat+current=26, boat−current=18. Add them — current cancels! 2×boat=44, boat=22. Then current = 26−22 = 4. Current is now FIXED — only one answer. So together, both statements are sufficient, but neither alone is." | THE key reasoning step — combining two "insufficient" facts yields ONE unique, solvable system | Step 3 "Combined" card, 4-beat progressive reveal (recap equations → add & cancel → solve for boat → solve for current → verdict) | The single hardest idea: elimination turns 2 unknowns/2 equations into a unique solution |
| 10 | 176.06–182.88 | "Hence, the correct answer is option C. Both statements together are sufficient, but neither statement alone is sufficient." | Final verdict | Options grid, C pulses on the word "C." | Confirms against all four DS-verdict choices |

---

## PART 2 — Scene-by-Scene Storyboard

Design constraints in force throughout (per `_template/README.md` §4D.1): only `--primary #6373db`, `--primary-light #e2e5ff`, `--success #4eb85f`, `--topic #949494`, `--text #000000`, `--bg #FFFFFF`; only `QuestionCard`/`SerialNum`/`SolutionCard`/`SolutionStackCard`/`solutionChip`/`StepCircle`/`StackLine`/options-grid/`logo`/`topic-name`/`bottomStrip`/Illustration/Fraction; only the helpers in `animations.js`. Illustration assets: `illustration/boat-svgrepo-com.svg`, `illustration/wave-2-light.svg`, `illustration/wave-2-svgrepo-com.svg` (all copied verbatim from [q35](../q35/illustration/), untouched).

### SCENE 1 — Cold Open + Both Statements Stated (0.08s – 18.14s)
**VOICEOVER:** "So welcome back again. Time for one more problem. Now, in this problem, we are given two statements. The first statement says that the boat's downstream speed is 26 km/hr. The second statement says that the same boat's upstream speed is 18 km/hr."
**VISUAL OBJECTIVE:** Anchor the full DS prompt, then plant both hard numbers as chips before any solving starts.
**SCREEN LAYOUT:** `#q-full-card` centered, `apt.heroEnterLowered`, width 1600px (3-line DS prompt): "Can the current speed of a river be found?<br>Statement I: The boat's downstream speed is 26 km/hr.<br>Statement II: The boat's upstream speed is 18 km/hr."
**ON-SCREEN ELEMENTS:** QuestionCard (full), SerialNum badge, `#given-down` / `#given-up` chips (positioned in the illustration's `#given-row`, appearing early even though the river scene itself is still hidden).
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.9)`; SerialNum parallel tween; `apt.cardEnter(tl, "#given-down", 9.44)`; `apt.cardEnter(tl, "#given-up", 15.24)`.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** N/A (opening).
**EDUCATIONAL PURPOSE:** The viewer must hold both statements' numbers in mind for the whole video — stating them as both spoken text AND a persistent chip removes any memory burden.
**VISUAL HIERARCHY:** QuestionCard > SerialNum > given chips (small, top of empty illustration area).
**ATTENTION MANAGEMENT:** Card rises first, then the two chips land one at a time, each exactly as its number is spoken.
**MOTION NOTES:** No river/boat yet — this scene is deliberately number-only.
**CONTINUITY FROM PREVIOUS SCENE:** N/A — first scene.

### SCENE 2 — "Data Sufficiency" Framing (18.68s – 33.44s)
**VOICEOVER:** "The question is not asking us to find the current speed directly. It is asking a data sufficiency question. In simple words, we need to check whether the given information is enough to find the speed of the river current. Got it? Perfect."
**VISUAL OBJECTIVE:** Let the reframing land with nothing new competing for attention.
**SCREEN LAYOUT:** Unchanged — QuestionCard + two chips holding.
**ON-SCREEN ELEMENTS:** None new.
**ANIMATION DETAILS:** None — a deliberate hold.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Continuous.
**EDUCATIONAL PURPOSE:** Gives the "this is a yes/no-solvability question, not a compute-the-number question" reframing room to breathe.
**VISUAL HIERARCHY:** Unchanged.
**ATTENTION MANAGEMENT:** Intentional pause in visual novelty mirrors the narration's own conceptual pause.
**MOTION NOTES:** Resist the urge to add filler animation here — the beat is purely verbal.
**CONTINUITY FROM PREVIOUS SCENE:** Direct hold, no cut.

### SCENE 3 — Assume Two Unknowns: b and c (34.02s – 45.91s)
**VOICEOVER:** "Now, before checking the statements, let us assume two unknowns. Let the speed of the boat in still water be B kilometer per hour, and let the speed of the river current be C kilometer per hour."
**VISUAL OBJECTIVE:** Build the river+boat scene as the concrete home for the two symbols b and c.
**SCREEN LAYOUT:** `#river-scene` fades/scales in, then `#boat-unit` (badge default state "Boat (b)"), then `#current-chip` ("Current (c)").
**ON-SCREEN ELEMENTS:** `.road`-equivalent river track (back+front wave layers), `#boat-icon`, `#boat-badge` (state "solo": "Boat (b)"), `#current-chip`.
**ANIMATION DETAILS:**
- 36.34s: `apt.cardEnter(tl, "#river-scene", 36.34)`.
- 37.6s: `apt.cardEnter(tl, "#flow-arrows", 37.6)` — fixed rightward chevrons (the river's physical current direction, constant all video).
- 38.64s: `apt.cardEnter(tl, "#boat-unit", 38.64)` + `apt.cardEnter(tl, "#boat-badge", 38.64)` — boat settles at the CENTER of the river (not an edge), badge reads "Boat (b)".
- 42.83s: `apt.cardEnter(tl, "#current-chip", 42.83)` — reads "Current (c)".
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Continuous build.
**EDUCATIONAL PURPOSE:** "B" and "C" stop being bare letters in narration and become a labeled boat + a labeled current, right before the formulas connect them.
**VISUAL HIERARCHY:** QuestionCard (settled) > river/boat (building, new focus) > chips (settled, secondary).
**ATTENTION MANAGEMENT:** River, then boat, then current chip — sequential, matching the narration's own "boat... and current..." order.
**MOTION NOTES:** Boat starts centered deliberately — it needs room to travel BOTH right (downstream) and left (upstream) in Scene 4.
**CONTINUITY FROM PREVIOUS SCENE:** QuestionCard/chips are fully settled; the river builds into the empty space beneath them.

### SCENE 4 — Both Formulas, Proven by the Boat's Own Motion (46.26s – 67.62s)
**VOICEOVER:** "Now, remember these two very important formulas. Downstream speed is equal to boat speed in still water plus current speed, because the river helps the boat move faster, and upstream speed is equal to boat speed in still water minus current speed, because the river is now slowing the boat down. These two formulas are the key to the entire question."
**VISUAL OBJECTIVE:** The single most important visual proof in the video — the boat physically sails WITH the current (faster, rightward) then AGAINST it (slower, leftward), so "+current" and "−current" are demonstrated, not just stated.
**SCREEN LAYOUT:** `#formula-tag` appears above the river, crossfading between two states. Boat glides right from center, holds, flips (`scaleX:-1`), glides left past center to the left side, holds.
**ON-SCREEN ELEMENTS:** `#formula-tag` (`#formula-state-down` "Downstream = Boat + Current" / `#formula-state-up` "Upstream = Boat − Current"), `#boat-badge` (3 states: solo "Boat (b)" / sum "Boat (b) + Current (c)" / diff "Boat (b) − Current (c)"), wake-lines.
**ANIMATION DETAILS:**
- 48.88s: `apt.cardEnter(tl, "#formula-tag", 48.88)` — state "Downstream = Boat + Current" already showing (default opacity:1 on `#formula-state-down`).
- 49.3s→53.86s: `tl.to("#boat-unit", {x: 420, duration: 4.56, ease:"power1.out"}, 49.3)` — boat glides right, WITH the current (visibly faster glide than the return trip).
- 53.86s: badge crossfade "Boat (b)" → "Boat (b) + Current (c)" (`#boat-state-solo` fade out, `#boat-state-sum` fade in), timed to "because" — the reasoning clause, not the formula statement itself.
- Hold 53.86s–56.54s.
- 56.54s: formula-tag crossfade begins — `#formula-state-down` fades out, `#formula-state-up` ("Upstream = Boat − Current") fades in.
- 56.54s→62.26s: `gsap.to("#boat-unit", {scaleX:-1, duration:0.4}, 56.54)` (flip) then `tl.to("#boat-unit", {x:-680, duration:5.3, ease:"power1.out"}, 56.94)` — boat glides LEFT, AGAINST the fixed rightward current arrows, ending left-of-center.
- 62.26s: badge crossfade "Boat (b) + Current (c)" → "Boat (b) − Current (c)", timed to "because the river is now slowing" — the second reasoning clause.
- Hold 62.26s–67.62s ("These two formulas are the key...").
- Wake-line flicker runs continuously 49.3s–67.62s (bounded, matching the boat's motion window).
**CAMERA MOVEMENT:** None (boat moves within a fixed frame). **TRANSITIONS:** Crossfades on badge + formula tag, no hard cuts.
**EDUCATIONAL PURPOSE:** This IS the concept the entire rest of the video depends on. Every later "not sufficient" / "sufficient" verdict traces back to these two formulas.
**VISUAL HIERARCHY:** Boat + formula tag (primary, all motion) > river (secondary, ambient) > pinned chips (settled, background).
**ATTENTION MANAGEMENT:** One direction taught fully (glide + badge + hold) before the flip and the second direction begins — never both at once.
**MOTION NOTES:** The downstream glide is visibly FASTER than the upstream glide (different durations for similar/slightly-different distances) — the speed difference is itself part of the proof, echoing q35's "boat visibly decelerates against the current" technique.
**CONTINUITY FROM PREVIOUS SCENE:** Boat/current chips are already settled at Scene 3's positions; the boat begins moving from its Scene 3 resting spot without any reset or jump.

### SCENE 5 — PIN FLOW + Given: Formula Recap (67.96s – 72.22s)
**VOICEOVER:** "Now let us check the statements one by one. First, statement one."
**VISUAL OBJECTIVE:** Transition to solving mode; recap both formulas as the anchor "Given" before testing either statement.
**SCREEN LAYOUT:** Question glides to `#q-pinned` (shortened 2-line text); illustration glides into `#illus-pinned` (mini river + boat, static-facing left from Scene 4's end, formula recap label); Given `SolutionCard` opens center, then morphs to stack.
**ON-SCREEN ELEMENTS:** `#q-pinned`, `#illus-pinned` (`#illus-pinned-icon`, `#pinned-label` state 1: "Boat+Current=26 · Boat−Current=18"), `#card-given` (chip "Given"), `#stack-given` (`.step-circle` "G").
**ANIMATION DETAILS:**
- `PIN_TIME = 67.96`: `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 67.96)`; `apt.pinFlow(tl, "#illustration", "#illus-pinned", 67.96)`; `apt.fadeOut(tl, "#serial-num", 67.96, 0.5)`.
- `68.96s–175.66s`: `apt.ambientLoop(tl, "#illus-pinned-icon", 68.96, 175.66)` — pinned boat keeps a small idle bob for the entire solving stretch (no further direction changes needed — the concept was already fully proven in Scene 4).
- `GIVEN_TIME = 70.32`: `apt.cardEnter(tl, "#card-given .solution-card", 70.32)`; `apt.textReveal(tl, "#card-given .math")` reveals both formulas as a line-level recap (70.32 / 70.6) — pure restatement of Scene 4's content, not fresh narration.
- `MORPH_GIVEN = 71.22` (morph): `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 71.22)`.
**CAMERA MOVEMENT:** The pin-flow glide. **TRANSITIONS:** `apt.pinFlow` (0.8s), `apt.morphToStack` (0.8s).
**EDUCATIONAL PURPOSE:** Re-anchors both formulas one more time, immediately before they get applied to each statement in turn.
**VISUAL HIERARCHY:** Given card (center, primary) > pinned question (top, secondary) > pinned river/boat (ambient).
**ATTENTION MANAGEMENT:** A brief, single beat — deliberately the shortest-lived card (~0.9s hold), since its content was already fully taught in Scene 4.
**MOTION NOTES:** Shortest card in the video — a bridge, not a teaching moment.
**CONTINUITY FROM PREVIOUS SCENE:** The full illustration is still mid-glide into its pinned slot as the Given card opens.

### SCENE 6 — STEP 1: Statement I Alone (72.22s – 96.10s)
**VOICEOVER:** "It says the downstream speed is 26 km/hr. Using the formula, boat speed plus current speed is equal to 26. Now ask yourself: can we find the current speed from this single equation? No, because both B and C are unknown. There are two unknown values, but only one equation. Hence, statement one alone is not sufficient."
**VISUAL OBJECTIVE:** Apply the downstream formula from Scene 4 to the real number 26 — and show it fails.
**SCREEN LAYOUT:** `#card-step1` opens center, chip "Statement I".
**ON-SCREEN ELEMENTS:** Four reveal lines: "Downstream Speed = 26 km/hr", "Boat + Current = 26", "B, C → both unknown", "1 Equation ⇒ Not Sufficient".
**ANIMATION DETAILS:**
- `apt.cardEnter(tl, "#card-step1 .solution-card", 72.22)`.
- `apt.textReveal(tl, "#card-step1 .math")` reveals: "Downstream Speed =" (line-level, 73.34) → "26 km/hr" (word-level, 74.68, matching "twenty-six") → "Boat" (78.54) "+"(79.20) "Current"(79.52) "="(80.18) "26"(80.58, matching "boat speed plus current speed is equal to twenty-six") → "B, C → both unknown" (line-level, 86.82, matching "because both B and C are unknown.") → "1 Equation ⇒ Not Sufficient" (line-level, 89.44, matching "There are two unknown values, but only one equation.").
- `MORPH_STEP1 = 96.10` (morph, timed to "Now let us check statement two." beginning): `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 96.10)`; `apt.stackLineGrow(tl, "#line-g-1", 96.10)`.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** `apt.morphToStack` (0.8s).
**EDUCATIONAL PURPOSE:** First concrete proof that one equation with two unknowns (b, c) cannot be solved — makes the abstract Scene 4 formula tangible and numeric.
**VISUAL HIERARCHY:** Step 1 card (center, primary) > stack column (Given only so far) > pinned recap (ambient).
**ATTENTION MANAGEMENT:** The known value (26) lands first, then the formula it plugs into, then the "why it fails" (both unknown), then the verdict — mirrors the narration's own reveal order exactly.
**MOTION NOTES:** "Not Sufficient" renders in `--primary` blue (via `.ans`) — no red/error token exists in the system.
**CONTINUITY FROM PREVIOUS SCENE:** Given card is still completing its morph into the stack as this card's `cardEnter` begins — one continuous take.

### SCENE 7 — STEP 2: Statement II Alone (97.10s – 116.56s)
**VOICEOVER:** "Now let us check statement two. It says the upstream speed is 18 km/hr. Using the formula, boat speed minus current speed is equal to 18. Again, can we find the current speed? No. Once again we have only one equation with two unknowns. So statement two alone is also not sufficient."
**VISUAL OBJECTIVE:** Mirror of Scene 6 — this time the subtraction formula, same failure mode.
**SCREEN LAYOUT:** `#card-step2` opens center, chip "Statement II".
**ON-SCREEN ELEMENTS:** Four reveal lines: "Upstream Speed = 18 km/hr", "Boat − Current = 18", "Only 1 equation, 2 unknowns", "⇒ Not Sufficient".
**ANIMATION DETAILS:**
- `apt.cardEnter(tl, "#card-step2 .solution-card", 97.10)`.
- `apt.textReveal(tl, "#card-step2 .math")` reveals: "Upstream Speed =" (line-level, 98.96) → "18 km/hr" (word-level, 100.20, matching "eighteen") → "Boat"(103.58) "−"(104.22) "Current"(104.66) "="(105.54) "18"(106.14, matching "boat speed minus current speed is equal to eighteen") → "Only 1 equation, 2 unknowns" (line-level, 109.76, matching "Once again, we have only one equation with two unknowns.") → "⇒ Not Sufficient" (line-level, 112.56, matching "So statement two alone is also not sufficient.").
- `MORPH_STEP2 = 116.56` (morph, ~1s before Step 3 opens): `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 116.56)`; `apt.stackLineGrow(tl, "#line-1-2", 116.56)`.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** `apt.morphToStack` (0.8s).
**EDUCATIONAL PURPOSE:** Confirms the rule generalizes — the failure isn't specific to the downstream equation, any single equation with 2 unknowns fails the same way.
**VISUAL HIERARCHY:** Step 2 card (center, primary) > stack column (G, 1 visible) > pinned recap (ambient).
**ATTENTION MANAGEMENT:** Same four-beat rhythm as Scene 6, deliberately parallel so the pattern is recognizable.
**MOTION NOTES:** No new animation technique introduced — repetition is itself the teaching device.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1 remains fully legible in the stack until this card's own morph fires at 116.56s.

### SCENE 8 — STEP 3: Combined — Elimination Solves It (117.56s – 175.66s)
**VOICEOVER:** "Now comes the important part. What happens if we use both statements together? Now we know boat speed plus current speed is equal to 26 and boat speed minus current speed is equal to 18. Now notice something beautiful. One equation has plus current speed. The other has minus current speed. So if we add both equations, the current speed gets canceled automatically. After adding them, we get two times the boat speed is equal to 44. So the boat speed becomes 22 km/hr. Now that we know the boat's speed in still water, finding the current speed is very easy. Current speed is equal to downstream speed minus boat speed. That is, 26 minus 22, which gives us 4 km/hr. Now the current speed is fixed. There is only one possible answer. So together, both statements are enough to answer the question. But individually, neither statement was enough."
**VISUAL OBJECTIVE:** The core insight of the video — combining two individually-insufficient equations, added to cancel the shared unknown, yields a unique solvable system.
**SCREEN LAYOUT:** `#card-step3` opens center, chip "Combined". Widened to 760px (longest content of any card).
**ON-SCREEN ELEMENTS:** Four progressive reveal groups: (A) both equations recapped side by side, (B) add → cancel → solve for boat speed, (C) back-substitute to solve for current, (D) verdict.
**ANIMATION DETAILS:**
- `apt.cardEnter(tl, "#card-step3 .solution-card", 117.56)`.
- `apt.textReveal(tl, "#card-step3 .math")` reveals:
  - Group A (start 121.68): "Boat"(122.78) "+"(123.44) "Current"(124.24) "="(124.90) "26"(125.62)<br>"Boat"(127.60) "−"(128.18) "Current"(128.54) "="(129.08) "18"(129.66) — the two equations, word-synced to "boat speed plus current speed is equal to twenty-six and boat speed minus current speed is equal to eighteen."
  - Group B (start 137.86): "Add the equations →" (line-level, 137.86, "So if we add both equations,") → "2"(144.04) "×"(144.24) "Boat"(145.10) "="(145.78) "44"(146.16, matching "we get two times the boat speed is equal to forty-four.") → "⇒ Boat ="(147.56) "22 km/hr"(148.78, matching "the boat speed becomes twenty-two kilometer per hour.").
  - Group C (start 156.98): "Current = Downstream − Boat" (line-level, 156.98) → "="(160.98) "26"(160.98) "−"(161.74) "22"(162.52) "="(163.54) "4 km/hr"(164.20, matching "That is, 26 minus 22, which gives us 4 kilometers per hour.").
  - Group D (start 169.60): "⇒ Sufficient (Together)" (line-level, 169.60, matching "So together, both statements are enough to answer the question.").
- `MORPH_STEP3 = 175.66` (morph, right after "...neither statement was enough." finishes): `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 175.66)`; `apt.stackLineGrow(tl, "#line-2-3", 175.66)`.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** `apt.morphToStack` (0.8s).
**EDUCATIONAL PURPOSE:** The one idea a student could get wrong — that TWO "not sufficient" statements can still combine into "sufficient." The visual literally shows the `+current`/`−current` terms canceling when the equations stack.
**VISUAL HIERARCHY:** Step 3 card (center, primary, the whole scene's focus) > stack column (G, 1, 2 all visible) > pinned recap (ambient, still bobbing).
**ATTENTION MANAGEMENT:** Four widely-spaced reveal beats (121.68s, 137.86s, 156.98s, 169.60s) across this ~58s span keep the long hold from reading as static — each lands exactly on its own narrated moment.
**MOTION NOTES:** By far the longest-held active card (58s vs. ~24s for Steps 1/2) — justified because this is one unbroken chain of algebra with no natural mid-point to split into a separate card.
**CONTINUITY FROM PREVIOUS SCENE:** Step 2 is fully read and settled into the stack before this card opens.

### SCENE 9 — Options Reveal (176.06s – 182.88s)
**VOICEOVER:** "Hence, the correct answer is option C. Both statements together are sufficient, but neither statement alone is sufficient."
**VISUAL OBJECTIVE:** Confirm the derived verdict against all four DS-style choices.
**SCREEN LAYOUT:** Step 3 morphs to stack; pinned question recenters; illustration recap clears; options grid (2×2) appears.
**ON-SCREEN ELEMENTS:** `#stack-step3` (`.step-circle` "3"), `#line-2-3` connector, `#options-reveal` (A: "Statement II alone is sufficient.", B: "Even both statements together are not sufficient.", C: "Both statements together are sufficient, but neither alone is sufficient." — correct, D: "Statement I alone is sufficient.").
**ANIMATION DETAILS:**
- `RECENTER_TIME = 175.66` (shared with `MORPH_STEP3`): `apt.fadeOut(tl, "#illus-pinned", 175.66)`; `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 175.66)`.
- 176.06s: `apt.fadeIn(tl, "#options-reveal", 176.06)`.
- 176.36s: `apt.optionsStagger(tl, ".opt-btn", 176.36)`.
- 178.24s: `apt.correctPulse(tl, ".opt-btn.correct", 178.24)` — timed to land exactly on the word "C.".
- 183.0s: `apt.fadeOut(tl, "#root > div", 183.0, 1.2)` — END FADE (after the closing sentence at 182.88s finishes).
**CAMERA MOVEMENT:** None. **TRANSITIONS:** `apt.morphToStack` + `apt.recenterForOptions`.
**EDUCATIONAL PURPOSE:** Standard close — verify the verdict against the four canonical DS-verdict phrasings.
**VISUAL HIERARCHY:** Options grid (primary) > stack column (secondary) > pinned question (tertiary).
**ATTENTION MANAGEMENT:** Stagger-then-pulse, standard two-beat close, held through the full closing sentence.
**MOTION NOTES:** The one deliberate point where the pinned boat's ambient bob stops — immediately replaced by the options-reveal's own motion.
**CONTINUITY FROM PREVIOUS SCENE:** Step 3 is fully read (including its closing "⇒ Sufficient" line) before its morph fires.

---

## PART 3 — Asset List Required

| Asset | Source | Notes |
|---|---|---|
| `illustration/boat-svgrepo-com.svg` | Copied from [q35](../q35/illustration/boat-svgrepo-com.svg) | Untouched shape/color |
| `illustration/wave-2-light.svg`, `illustration/wave-2-svgrepo-com.svg` | Copied from [q35](../q35/illustration/) | Untouched, river back/front wave tiles |
| `design-system.css`, `animations.js`, `assets/` | Copied from `_template/` | Per README §5B |

No new colors, fonts, or template components introduced. `.river-scene`/`.boat-unit`/`.formula-tag`/`.given-mini`-style per-question CSS follows the exact pattern established in [q33](../q33/index.html)/[q34](../q34/index.html)/[q35](../q35/index.html).

---

## PART 4 — Animation Complexity Notes

- **Dual-direction Phase 1 (q38-specific):** every single-direction river/boat sibling (q34, q35) demonstrates ONE formula via ONE glide. q38 is the first to demonstrate BOTH formulas in Phase 1 itself — the boat sails downstream then flips and sails upstream, before any pinning happens — because this narration explicitly teaches both formulas back-to-back (unlike q34, which only ever states the downstream formula and derives the subtraction one algebraically).
- **Given card repurposed as a dual-formula anchor** (not raw numeric values) — mirrors q36's repurposing (concept recap, not given facts), adapted to recap TWO formulas instead of one.
- **Step chips repurposed as "Statement I" / "Statement II" / "Combined"** instead of "Step 1"/"Step 2"/"Step 3" — same allowance used in q36.
- **No red/error color:** "Not Sufficient" appears in `--primary` blue (`.ans`), matching every other emphasized value.
- **Card count held to the DS minimum (4: Given, Statement I, Statement II, Combined)** — per the request to keep step count low; the depth of explanation instead comes from dense multi-beat `textReveal` sequencing inside Steps 1/2/3, not from adding more cards.
- **Deliberately unbalanced step lengths:** Given ≈0.9s, Step 1 ≈23.9s, Step 2 ≈19.5s, Step 3 ≈58.1s — mirrors q36's own unbalanced pattern (short bridge card, two parallel mid cards, one long combined card).
- **Ambient loop covers the entire solving stretch:** `apt.ambientLoop` runs on `#illus-pinned-icon` from `PIN_TIME+1` to `RECENTER_TIME` (68.96s–175.66s, ~107s) — the boat never changes direction again after Phase 1, so a small bob is all that's needed to keep it alive.
- **Standard breathing gap enforced throughout:** every `#card-stepN` enters ~1.0s after its preceding `apt.morphToStack` call (71.22→72.22 for Given→Step1; 96.10→97.10 for Step1→Step2; 116.56→117.56 for Step2→Step3).
- **Word-level sync for every equation/number**, line-level sync for paraphrased reasoning lines ("B, C → both unknown", "Add the equations →", "⇒ Sufficient (Together)") — per the transcript's word-timestamp array, not estimated.

---

## PART 5 — Master Timeline Overview

```
TIME (s)   ELEMENT                          WHAT HAPPENS
─────────  ───────────────────────────────  ─────────────────────────────────
0.0        Background + bottomStrip+logo    Always visible
0.3        QuestionCard                     heroEnterLowered — DS prompt (1600px, 3 lines)
0.8        SerialNum                        pops in low, mirrors card
3.9        QuestionCard + SerialNum         rise to resting position
9.44       Given-down chip                  cardEnter — "Downstream Speed = 26 km/hr"
15.24      Given-up chip                    cardEnter — "Upstream Speed = 18 km/hr"
[ 18.68–33.44   "Data sufficiency" framing — deliberate hold, nothing new ]
36.34      River scene                      cardEnter
37.6       Flow arrows                      cardEnter — fixed rightward (river's physical current)
38.64      Boat + badge                     cardEnter — centered, "Boat (b)"
42.83      Current chip                     cardEnter — "Current (c)"
48.88      Formula tag                      cardEnter — "Downstream = Boat + Current"
49.3       Boat                             glides RIGHT (with current) → 53.86
53.86      Boat badge                       crossfade → "Boat (b) + Current (c)"
56.54      Formula tag                      crossfade → "Upstream = Boat − Current"
56.54–62.26 Boat                            flips (scaleX:-1), glides LEFT (against current)
62.26      Boat badge                       crossfade → "Boat (b) − Current (c)"

[ PIN_TIME = 67.96 ]
─────────  ───────────────────────────────  ─────────────────────────────────
67.96      Question + Illustration          🌟 pinFlow — real glide to pinned slots
68.96      Pinned boat                      ambientLoop begins — runs to 175.66 (~107s)

[ GIVEN_TIME = 70.32 ]
─────────  ───────────────────────────────  ─────────────────────────────────
70.32      Given card                       cardEnter (center) — both formulas recapped

[ STEP CYCLE ]
─────────  ───────────────────────────────  ─────────────────────────────────
71.22      Given → Given stack               🌟 morphToStack
72.22      Step 1 "Statement I" card         cardEnter (1.0s breathing gap)
72.22–89.44 Step 1 .math                    textReveal (Downstream=26 → Boat+Current=26 → both unknown → Not Sufficient)
96.10      Step 1 → Step 1 stack            🌟 morphToStack + stackLineGrow (G→1)
97.10      Step 2 "Statement II" card        cardEnter (1.0s breathing gap)
97.10–112.56 Step 2 .math                   textReveal (Upstream=18 → Boat−Current=18 → 1 eq/2 unk → Not Sufficient)
116.56     Step 2 → Step 2 stack            🌟 morphToStack + stackLineGrow (1→2)
117.56     Step 3 "Combined" card            cardEnter (1.0s breathing gap)
117.56–169.60 Step 3 .math                  textReveal (both eqns → add & cancel → boat=22 → current=4 → Sufficient)

[ PHASE 3 ]
─────────  ───────────────────────────────  ─────────────────────────────────
175.66     Step 3 → Step 3 stack            🌟 morphToStack + stackLineGrow (2→3)
175.66     Pinned illustration recap         fadeOut (the ONE deliberate stop)
175.66     Pinned question                   recenterForOptions
176.06     Options grid                      fadeIn
176.36     Option buttons                    optionsStagger
178.24     Correct option (C)                correctPulse
183.0      Everything                        END FADE (1.2s)
```

**Video duration:** 182.88s (matches `voiceover.wav` exactly).
