# Trains, Streams and Boats — Q25 Storyboard

**Question:** A boat covers 48 km upstream in 4 hours while the stream flows at 3 km/h. What is the boat's speed in still water?
**Options:** A) 15 km/h ✅  B) 13.2 km/h  C) 16.8 km/h  D) 18.6 km/h
**Video length:** 81.099s (from `voiceover.wav` / `transcript.json`)

---

## PART 1: Narration Beat Analysis

| # | Time (s) | Narration | Purpose | Focus | Visual objective |
|---|----------|-----------|---------|-------|-------------------|
| 1 | 0.12–4.32 | "So welcome back again, it's time to solve one more problem." | Cold open | Center | Question card + serial badge intro |
| 2 | 4.80–10.96 | "Now in this problem, we are given that a boat covers 48 km upstream in 4 hours." | State given #1 | Question/illustration | River+boat scene builds; boat struggles upstream; Given card opens |
| 3 | 11.48–15.24 | "Also, the speed of the stream or current is 3 km/h." | State given #2 | Given card | Second given line reveals |
| 4 | 15.78–19.46 | "The question is asking us to find the speed of the boat in still water." | State ask | Question card | Question fully read; pin trigger point |
| 5 | 20.02–28.26 | "Before solving, let us take the boat's speed in still water as B km/h, and the stream speed as C km/h." | Variable setup | Pinned illustration / Given card | Phase 2 pin; "Let B, C" line added to Given |
| 6 | 28.72–37.96 | "Now the important point here is upstream... the water pushes against the boat, so the boat becomes slower." | Concept explainer | Pinned mini boat | Boat judders against current (no card — pure illustration beat) |
| 7 | 38.38–45.66 | "Upstream Speed = Boat Speed in Still Water minus Stream Speed. So we can write B minus C." | Formula | Step 1 card | Formula "Upstream = B − C" reveals |
| 8 | 46.82–56.74 | "Now let us find the upstream speed first. Speed = Distance / Time. 48 / 4 = 12 km/h." | Compute upstream speed | Step 1 card | "48 ÷ 4 = 12 km/h" reveals |
| 9 | 57.20–63.76 | "Now that we have found the upstream speed, we can use it in the formula. B − C = 12." | Substitute | Step 2 card | "B − C = 12" reveals |
| 10 | 64.38–73.12 | "And the stream speed C is 3, so B − 3 = 12. After solving, B = 15 km/h." | Solve | Step 2 card | "C = 3", "B − 3 = 12", "B = 15 km/h" reveal |
| 11 | 73.82–81.10 | "Hence, the boat's speed in still water is 15 km/h. So the correct option is Option A." | Reveal answer | Options grid | Options stagger in, A pulses green |

---

## PART 2: Scene-by-Scene Storyboard

### SCENE 1 — Cold Open (0.0s – 4.3s)
- **VOICEOVER:** "So welcome back again, it's time to solve one more problem."
- **VISUAL OBJECTIVE:** Establish the question card as the hero element.
- **SCREEN LAYOUT:** Question card centered top (`#q-full-card`), serial badge top-left.
- **ON-SCREEN ELEMENTS:** Background dotted-grid + bottom-strip (always on), topic name "Trains, Streams and Boats" bottom-left, logo bottom-right, `#q-full-card`, `#serial-num`.
- **ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.6)` — card enters lowered, rises to rest by 3.6s. `#serial-num` pops at 0.8s (`back.out(2)`) then rises with the card at 3.6s.
- **CAMERA MOVEMENT:** None (static frame, motion is internal to elements).
- **TRANSITIONS:** N/A — opening beat.
- **EDUCATIONAL PURPOSE:** Orient viewer to the question before any numbers appear.
- **VISUAL HIERARCHY:** Question card dominant, badge secondary.
- **ATTENTION MANAGEMENT:** Nothing else on screen to compete.
- **MOTION NOTES:** Lowered-entrance rise mirrors q23/q21 pattern.
- **CONTINUITY FROM PREVIOUS SCENE:** N/A (video start).

### SCENE 2 — Given #1: Distance/Time (4.3s – 11.0s)
- **VOICEOVER:** "...a boat covers 48 km upstream in 4 hours."
- **VISUAL OBJECTIVE:** Build the river+boat illustration while the core given values are read; open the Given card.
- **SCREEN LAYOUT:** Illustration centered mid-frame (`#illustration`, river scene + boat), Given card opens below at (640, 460), centered text.
- **ON-SCREEN ELEMENTS:** `#river-scene` (two wave-tile tracks, back+front), `#boat-unit` (boat.svg), `#wake` lines, `#chip-given` pill, `#card-given .solution-card`.
- **ANIMATION DETAILS:** `apt.cardEnter(tl, "#river-scene", 4.3)`, `apt.cardEnter(tl, "#boat-unit", 4.3)`, `apt.cardEnter(tl, "#chip-given", 4.5)`. River flow starts immediately (current visible from the start — this is an upstream-only problem, water always flows one direction). `#card-given .solution-card` enters at 5.98 (transcript-derived) with line "Distance = 48 km, Time = 4 h" via `apt.textReveal`.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Card/illustration pop-ins only, no cuts.
- **EDUCATIONAL PURPOSE:** Anchor the two core numbers (48 km, 4 h) visually as they're spoken.
- **VISUAL HIERARCHY:** Illustration + Given card share focus once question settles.
- **ATTENTION MANAGEMENT:** Boat begins its upstream judder immediately so the "against the current" idea is primed early, subtly, before it's explained in Scene 6.
- **MOTION NOTES:** `boatJudder` helper (rotation ±2°, bounded reps) starts at 6.0s and runs continuously through Phase 1 and into the pinned recap — the boat is always straining upstream.
- **CONTINUITY FROM PREVIOUS SCENE:** Question card is still settled at rest from Scene 1; illustration builds beneath/around it without disturbing it.

### SCENE 3 — Given #2: Stream Speed (11.0s – 15.8s)
- **VOICEOVER:** "...the speed of the stream or current is 3 km/h."
- **VISUAL OBJECTIVE:** Add the second given line.
- **SCREEN LAYOUT:** Same as Scene 2; Given card grows by one line.
- **ON-SCREEN ELEMENTS:** Given card's second `.rv` line "Stream speed = 3 km/h".
- **ANIMATION DETAILS:** `apt.textReveal` word span at data-t=13.90.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** None.
- **EDUCATIONAL PURPOSE:** Complete the given-data set before the question is even finished being read.
- **VISUAL HIERARCHY:** Given card content grows, still secondary to question card.
- **ATTENTION MANAGEMENT:** River flow + judder continue ambiently, not competing with the text reveal.
- **MOTION NOTES:** No new element entrances, only text.
- **CONTINUITY FROM PREVIOUS SCENE:** Boat's judder and river flow from Scene 2 continue uninterrupted.

### SCENE 4 — Question Complete (15.8s – 20.0s)
- **VOICEOVER:** "The question is asking us to find the speed of the boat in still water."
- **VISUAL OBJECTIVE:** Let the full ask land before pinning.
- **SCREEN LAYOUT:** Unchanged from Scene 3.
- **ON-SCREEN ELEMENTS:** Same.
- **ANIMATION DETAILS:** None new — a held beat.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** None (pin is the next scene's transition).
- **EDUCATIONAL PURPOSE:** Give the "find B" ask room to breathe before Phase 2 begins.
- **VISUAL HIERARCHY:** Unchanged.
- **ATTENTION MANAGEMENT:** Nothing new to distract from the spoken ask.
- **MOTION NOTES:** Ambient river/judder only.
- **CONTINUITY FROM PREVIOUS SCENE:** Direct hold from Scene 3.

### SCENE 5 — Pin + Variable Setup (20.0s – 28.3s)
- **VOICEOVER:** "Before solving, let us take the boat's speed in still water as B km/h, and the stream speed as C km/h."
- **VISUAL OBJECTIVE:** Transition to Phase 2 (pinned layout) and introduce the B/C variables.
- **SCREEN LAYOUT:** Question glides + shrinks into pinned slot top (`#q-pinned`), illustration glides + shrinks into pinned mini recap (`#illus-pinned`, left-center under question).
- **ON-SCREEN ELEMENTS:** `#q-pinned` pinned question text, `#illus-pinned` mini river+boat, Given card recenters up to its standard slot (pure y-transform), third Given line "Let Boat = B, Stream = C" reveals.
- **ANIMATION DETAILS:** `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 20.0)`, `apt.pinFlow(tl, "#illustration", "#illus-pinned", 20.0)`, `apt.fadeOut(tl, "#serial-num", 20.0, 0.5)`, Given card `y:0` recenter tween at 20.0 (`power2.inOut`, 0.8s), third `.rv` line data-t=20.02.
- **CAMERA MOVEMENT:** The glide IS the camera move — real measured positions, not a cut.
- **TRANSITIONS:** `pinFlow` glide (0.8s) — question/illustration visibly move to pinned slots.
- **EDUCATIONAL PURPOSE:** Establish the algebraic shorthand (B, C) the rest of the solution depends on.
- **VISUAL HIERARCHY:** Given card becomes primary focus as pinned elements settle.
- **ATTENTION MANAGEMENT:** Mini river keeps flowing + boat keeps juddering (`apt.ambientLoop` continuation) so Phase 2 doesn't feel static.
- **MOTION NOTES:** Same `boatJudder` helper continues on `#illus-pinned-icon` through this and the next scene.
- **CONTINUITY FROM PREVIOUS SCENE:** The question card and illustration are mid-flight from their Scene-1–4 resting positions into the pinned slots — this is the literal continuation of their settled state, not a fresh entrance.

### SCENE 6 — Upstream Concept (28.7s – 38.4s)
- **VOICEOVER:** "Now the important point here is upstream. What does upstream mean? When the boat moves upstream, the water pushes against the boat, so the boat becomes slower."
- **VISUAL OBJECTIVE:** Sell "current resists the boat" purely through motion — no card here.
- **SCREEN LAYOUT:** Unchanged card layout; all attention on `#illus-pinned`.
- **ON-SCREEN ELEMENTS:** Mini boat + river only (Given card sits idle, already fully revealed).
- **ANIMATION DETAILS:** `boatJudder` amplitude and wake-flicker intensity step up slightly (`amp: 3.0`) for this window to visually emphasize resistance, reverting to ambient (`amp: 1.6`) at 38.3s.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** None.
- **EDUCATIONAL PURPOSE:** Build intuition for the Upstream = B − C formula before it's written.
- **VISUAL HIERARCHY:** Illustration is briefly the sole focus.
- **ATTENTION MANAGEMENT:** No card competing with the concept beat.
- **MOTION NOTES:** Judder is a bounded rotation tween, never infinite repeat.
- **CONTINUITY FROM PREVIOUS SCENE:** Direct continuation of the same juddering boat from Scene 5, just intensified — no new entrance.

### SCENE 7 — Given → Stack, Step 1 Formula (37.0s – 46.8s)
- **VOICEOVER:** "Upstream Speed = Boat Speed in Still Water minus Stream Speed. So we can write B minus C."
- **VISUAL OBJECTIVE:** Collapse Given into the stack, open Step 1 with the formula.
- **SCREEN LAYOUT:** `#card-given` morphs to `#stack-given` (left column, top). `#card-step1` enters center at (560, 430).
- **ON-SCREEN ELEMENTS:** Stack card "G" badge; Step 1 solution card, chip "Step 1", math line "Upstream Speed = Boat − Stream" then "= B − C".
- **ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 37.0)` (0.8s), `apt.cardEnter(tl, "#card-step1 .solution-card", 38.3)`, `apt.textReveal(tl, "#card-step1 .math")` (data-t 38.38, 43.86).
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Standard 0.8s morph.
- **EDUCATIONAL PURPOSE:** Formalize the concept from Scene 6 into the algebraic formula.
- **VISUAL HIERARCHY:** Step 1 card becomes primary; stack card recedes to secondary (left column).
- **ATTENTION MANAGEMENT:** ~1.3s breathing gap between morph start and step card entrance.
- **MOTION NOTES:** Judder settles back to ambient amplitude here.
- **CONTINUITY FROM PREVIOUS SCENE:** The boat's judder from Scene 6 is still resolving as this morph begins — the concept beat and the formula beat read as one continuous thought.

### SCENE 8 — Step 1 Computation (46.8s – 57.2s)
- **VOICEOVER:** "Now let us find the upstream speed first. Speed = Distance divided by Time. 48 divided by 4 gives us 12 km/h."
- **VISUAL OBJECTIVE:** Compute the upstream speed numerically.
- **SCREEN LAYOUT:** Same Step 1 card, two more lines reveal beneath the formula.
- **ON-SCREEN ELEMENTS:** "Speed = Distance ÷ Time" (using `.frac` component, never a bare ÷), "48 ÷ 4 = 12 km/h" with `.ans` highlight on 12 km/h.
- **ANIMATION DETAILS:** `apt.textReveal` spans at data-t 49.34 and 52.66 (approx word landing inside the 46.82–56.74 phrase window).
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** None.
- **EDUCATIONAL PURPOSE:** Land the numeric upstream speed before it's plugged into the algebra.
- **VISUAL HIERARCHY:** `.ans` styled "12 km/h" is the visual payoff of this scene.
- **ATTENTION MANAGEMENT:** Stack card "G" quietly persists at left, unobtrusive.
- **MOTION NOTES:** Card holds position; only internal text reveals.
- **CONTINUITY FROM PREVIOUS SCENE:** Direct continuation of the same Step 1 card from Scene 7 — no re-entrance, just further reveal.

### SCENE 9 — Step 1 → Stack, Step 2 Substitution (56.2s – 64.4s)
- **VOICEOVER:** "Now that we have found the upstream speed, we can use it in the formula. B minus C equals 12."
- **VISUAL OBJECTIVE:** Collapse Step 1, open Step 2 with the substitution.
- **SCREEN LAYOUT:** `#card-step1` morphs to `#stack-step1` (left column, below "G"). `#card-step2` enters center.
- **ON-SCREEN ELEMENTS:** Stack card "1" badge with "Upstream = 12 km/h"; Step 2 card chip "Step 2", line "B − C = 12".
- **ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 56.2)`, `apt.stackLineGrow(tl, "#line-g-1", 56.2)`, `apt.cardEnter(tl, "#card-step2 .solution-card", 57.2)`, `apt.textReveal` data-t=61.00.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Standard 0.8s morph.
- **EDUCATIONAL PURPOSE:** Show the numeric result feeding directly into the still-unsolved equation.
- **VISUAL HIERARCHY:** Step 2 card primary; connector line between "G" and "1" grows in sync with the morph.
- **ATTENTION MANAGEMENT:** ~1s gap between morph start and card entrance.
- **MOTION NOTES:** None beyond standard morph.
- **CONTINUITY FROM PREVIOUS SCENE:** The "12 km/h" answer highlighted at the end of Scene 8 is exactly what's shrinking into the stack circle here, then immediately reappearing as the "12" in the new equation.

### SCENE 10 — Solve for B (64.4s – 73.8s)
- **VOICEOVER:** "And the stream speed C is 3, so B minus 3 equals 12. After solving this, we get B equals 15 km/h."
- **VISUAL OBJECTIVE:** Walk the algebra to the final answer.
- **SCREEN LAYOUT:** Same Step 2 card, three more lines reveal in sequence.
- **ON-SCREEN ELEMENTS:** "C = 3", "B − 3 = 12", "B = 15 km/h" with `.ans` highlight.
- **ANIMATION DETAILS:** `apt.textReveal` spans at data-t 64.38, 66.60, 70.20 (landing inside the 64.38–73.12 phrase).
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** None.
- **EDUCATIONAL PURPOSE:** Deliver the numeric answer before it's spoken aloud in Scene 11's "hence" line.
- **VISUAL HIERARCHY:** "B = 15 km/h" is the scene's climax, styled `.ans`.
- **ATTENTION MANAGEMENT:** No competing motion — pure equation build.
- **MOTION NOTES:** None.
- **CONTINUITY FROM PREVIOUS SCENE:** Direct continuation of Scene 9's Step 2 card — same box, growing content.

### SCENE 11 — Step 2 → Stack, Options Reveal (74.5s – 81.1s end)
- **VOICEOVER:** "Hence, the boat's speed in still water is 15 km/h. So the correct option is Option A."
- **VISUAL OBJECTIVE:** Collapse the final step, reveal all four options, highlight the correct one.
- **SCREEN LAYOUT:** `#card-step2` morphs to `#stack-step2` (left column, below "1"). Pinned question recenters (illustration fades). Options grid (2×2) fades in at pinned column position.
- **ON-SCREEN ELEMENTS:** Stack card "2" badge "B = 15 km/h"; `#options-reveal` grid with A/B/C/D, `.correct` class on A.
- **ANIMATION DETAILS:** `apt.fadeOut(tl, "#illus-pinned", 74.5)`, `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 74.5)`, `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 74.5)`, `apt.stackLineGrow(tl, "#line-1-2", 74.5)`, `apt.fadeIn(tl, "#options-reveal", 75.5)`, `apt.optionsStagger(tl, ".opt-btn", 75.9)`, `apt.correctPulse(tl, ".opt-btn.correct", 78.5)`.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Morph + fade combo, standard durations.
- **EDUCATIONAL PURPOSE:** Close the loop — numeric answer maps to the labeled option.
- **VISUAL HIERARCHY:** Correct option (green pulse) is the final visual payoff.
- **ATTENTION MANAGEMENT:** Illustration clears out of frame so nothing competes with the options grid.
- **MOTION NOTES:** End-of-video fade at 81.1s+1.2s buffer.
- **CONTINUITY FROM PREVIOUS SCENE:** "B = 15 km/h" from Scene 10 shrinks directly into the stack circle here, and reappears moments later as the highlighted "15 km/h" option — same number, same color language (`.ans` green-adjacent → `.correct` green).

---

## PART 3: Asset List Required

- `illustration/boat.svg` — reused from q23 (upstream-only pose, no recoloring needed)
- `illustration/wave.svg`, `illustration/wave-light.svg` — reused from q23 (river conveyor tiles)
- No new SVGs required — same river+boat visual language as q23, minus the downstream/upstream swap demo (this question only ever discusses upstream)

## PART 4: Animation Complexity Notes

- Single-direction boat judder (no glide/flip swap like q23's ratio demo) — simpler since the narration never mentions downstream.
- Uses `.frac` component for "Distance / Time" — never a bare ÷ character.
- 2-step solution (Given → Step 1 → Step 2), one fewer step than q23's 3-step ratio problem.
- Stack connector lines: `line-g-1` (G→1), `line-1-2` (1→2) — both via `apt.setStackLine`, grown in sync with their respective morphs.

## PART 5: Master Timeline Overview

| Time (s) | Event |
|----------|-------|
| 0.0 | Question card hero enters (lowered → rise by 3.6s) |
| 0.8 | Serial badge pops |
| 4.3 | River scene + boat illustration enter; judder + flow start |
| 4.5 | "Given" chip enters |
| 5.98 | Given card enters — "Distance = 48 km, Time = 4 h" |
| 13.90 | Given line 2 — "Stream speed = 3 km/h" |
| 20.0 | **PIN_TIME** — question + illustration glide to pinned slots |
| 20.02 | Given line 3 — "Let Boat = B, Stream = C" |
| 28.7–38.3 | Upstream concept beat — judder amplitude steps up |
| 37.0 | Given → stack morph |
| 38.3 | Step 1 card enters — formula "Upstream = B − C" |
| 49.34 | "Speed = Distance ÷ Time" reveals |
| 52.66 | "48 ÷ 4 = 12 km/h" reveals |
| 56.2 | Step 1 → stack morph |
| 57.2 | Step 2 card enters — "B − C = 12" |
| 64.38 | "C = 3" reveals |
| 66.60 | "B − 3 = 12" reveals |
| 70.20 | "B = 15 km/h" reveals |
| 74.5 | Step 2 → stack morph; illustration fades; question recenters |
| 75.5 | Options grid fades in |
| 75.9 | Options stagger (A/B/C/D) |
| 78.5 | Correct option (A) pulses green |
| 81.1 | End fade begins (+1.2s buffer) |
