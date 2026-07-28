# Storyboard — Boats & Streams: "Downstream 18, Upstream 12 → Find Stream Speed"

Topic: Trains, Streams and Boats · Question 8 · Voiceover duration: **78.919s**

---

## PART 1 — Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|---|---|---|---|---|
| 1 | 0.10–3.20 | "So welcome back again. Time for one more problem." | Warm open, series continuity | Full-screen question card rising in | Establish frame, no distraction |
| 2 | 3.80–9.80 | "Now in this problem, we are given that the downstream speed of a boat is 18 kilometer per hour." | State the downstream fact | River scene assembles, boat drops in, "Downstream = 18" tag pops in | Number 18 registers as the boat's DOWNSTREAM speed |
| 3 | 10.34–12.70 | "The upstream speed is 12 kilometer per hour." | State the upstream fact | "Upstream = 12" tag pops in beside the first | Number 12 registers as the boat's UPSTREAM speed — both are already on screen before any concept is explained |
| 4 | 13.24–15.78 | "The question is asking us to find the speed of the stream." | Frame the unknown | Question card's "stream" term already highlighted in blue | Plant the target quantity |
| 5 | 16.18–20.10 | "Now before solving, let us understand one simple concept." | Bridge to the rule-building section | Scene holds | Signals a concept explanation is coming |
| 6 | 20.52–29.12 | "When the boat moves in the same direction as the river, the current helps the boat. So downstream speed is equal to boat speed in still water plus stream speed." | THE downstream concept | Boat glides RIGHT with the flow arrows; "Downstream = Still Water + Stream" label appears | Motion (boat speeding up with the current) sells the addition rule |
| 7 | 29.46–34.32 | "And when the boat moves against the flow of the river, the current slows the boat down." | THE upstream concept, part 1 | Boat turns and glides LEFT, against the flow arrows | Motion demonstrates resistance |
| 8 | 35.02–38.94 | "So upstream speed is equal to boat speed in still water minus stream speed." | THE upstream concept, part 2 | "Upstream = Still Water − Stream" label appears | Converts the resistance demo into the reusable formula |
| 9 | 39.36–45.68 | "Now let the speed of the boat in still water be b kilometers per hour, and let the speed of the stream be c kilometers per hour." | Introduce the algebra variables | "B" badge pops onto the boat, "C" badge pops onto the river | The two unknowns are now visually anchored to their physical referents, right before the pin |
| 10 | 46.08–49.32 | "From the downstream speed, b plus c is equal to 18." | Given equation 1 | Given card (center, pinned layout) | First simultaneous equation |
| 11 | 49.78–52.88 | "From the upstream speed, b minus c is equal to 12." | Given equation 2 | Given card, second line | Second simultaneous equation — both now visible together |
| 12 | 53.28–54.76 | "Now we need to find the stream speed." | Restate the goal before solving | Given card holds | Breathing beat before the algebra |
| 13 | 55.12–58.54 | "So let us subtract the second equation from the first." | State the method | Step 1 card opens | Names the technique before executing it |
| 14 | 59.20–65.16 | "B plus c minus b minus c is equal to 18 minus 12." | Execute the subtraction | Step 1 card, word-synced equation | Viewer watches the equation being built term by term |
| 15 | 65.54–68.82 | "The b gets canceled. We are left with two c is equal to six." | Simplify | Step 1 card, result line | The cancellation + the resulting "2C = 6" |
| 16 | 69.34–71.54 | "So c is equal to three kilometer per hour." | Step 2 — isolate C | Step 2 card | Deliver "C = 3" |
| 17 | 72.00–75.16 | "So the speed of the stream is three kilometer per hour." | Restate in plain terms | Step 2 card, second line | Confirms the answer in the question's own words |
| 18 | 75.68–78.92 | "Hence, the correct answer is option D." | Reveal | Options grid, D pulses green | Confirm against the four choices |

---

## PART 2 — Scene-by-Scene Storyboard

Design constraints in force throughout (per `_template/README.md` §4D.1): only `--primary #6373db`, `--primary-light #e2e5ff`, `--success #4eb85f`, `--topic #949494`, `--text #000000`, `--bg #FFFFFF`; only `QuestionCard`/`SerialNum`/`SolutionCard`/`SolutionStackCard`/`solutionChip`/`StepCircle`/`StackLine`/options-grid/`logo`/`topic-name`/`bottomStrip`/Illustration/Fraction; only the helpers in `animations.js`, called explicitly by name below. The illustration (river + boat + B/C badges) reuses the full simultaneous-equation river/boat technique from [speed time and distance/q8](../../speed%20time%20and%20distance/q8/index.html) — same seamless two-layer wave scroll, boat turn-around, and B/C badge pattern (this question, like that one, has BOTH legs — downstream and upstream — and both quantities are genuinely unknown, not a direct-addition case like [q2](../q2/index.html)) — but using THIS topic's own illustration assets (`illustration/boat.svg`, `illustration/wave.svg`, `illustration/wave-light.svg`, copied from `global-illustrations/`, already palette-matched, untouched) instead of the other topic's wave-2 SVGs. Given the shorter ~79s runtime here (vs. that reference's 128s), the illustration phase is more compact — one downstream leg, one turn, one upstream leg, no idle-hold beats.

### SCENE 1 — Cold Open (0.0s – 3.2s)
**VOICEOVER:** "So welcome back again. Time for one more problem."
**VISUAL OBJECTIVE:** Establish the question, hero-style.
**SCREEN LAYOUT:** `#q-full-card` centered, lowered per `apt.heroEnterLowered`, at `top:80px`, containing the full question text with "18 km/hr", "12 km/hr" and "stream" in `.num` blue.
**ON-SCREEN ELEMENTS:** QuestionCard (full), SerialNum badge ("Q").
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.2)` — fades/scales in at 0.3s lowered, rises to rest at 3.2s (end of "one more problem"). SerialNum mirrors with its own parallel tween (fades in at 0.8s at the same lowered Y, rises with the card at 3.2s).
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** N/A (opening beat).
**EDUCATIONAL PURPOSE:** Anchor the problem before anything else competes for attention.
**VISUAL HIERARCHY:** QuestionCard > SerialNum > (empty illustration area).
**ATTENTION MANAGEMENT:** Nothing else on screen yet.
**MOTION NOTES:** The rise is timed to finish exactly as "problem" is spoken.
**CONTINUITY FROM PREVIOUS SCENE:** N/A — first scene.

### SCENE 2 — River + Boat Assemble, Both Speeds Given (3.2s – 15.78s)
**VOICEOVER:** "Now in this problem, we are given that the downstream speed of a boat is 18 kilometer per hour. The upstream speed is 12 kilometer per hour. The question is asking us to find the speed of the stream."
**VISUAL OBJECTIVE:** Get both real numbers (18, 12) physically anchored to the river scene before any concept is explained — this question states BOTH given facts up front, unlike a single-value setup.
**SCREEN LAYOUT:** `#illustration` (1500×280, centered, `top:480px`): river channel with the boat idling on it; two given-fact pills sit above the scene.
**ON-SCREEN ELEMENTS:**
- `#water-fill` — rounded `--primary-light` channel (1500×90, `border-radius:16px`) inside `#river-scene` (`overflow:hidden`).
- `#river-track-back` (`wave-light.svg` row, slower scroll) and `#river-track-front` (`wave.svg` row, faster scroll) — two-layer parallax, seamless conveyor loop.
- `#boat-unit` — wrapper holding `boat.svg`, hull overlapping the water's top edge, facing right (default orientation, no flip).
- `#given-downstream` ("Downstream Speed = **18 km/hr**" pill, white bg / `--primary` border) and `#given-upstream` ("Upstream Speed = **12 km/hr**" pill, same style) — side by side above the scene.
**ANIMATION DETAILS:**
- 4.6s: `apt.cardEnter(tl, "#river-scene", 4.6)` — water body + wave mask fade/scale in.
- 4.6s: seamless wave scroll begins via the local `riverFlow()` helper, running uninterrupted through the rest of the video (through the pinned recap too).
- 5.0s: `apt.cardEnter(tl, "#boat-unit", 5.0)` — boat drops onto the water, idling.
- Continuous from 5.0s: a small vertical bob (±5px, ~1.6s period) on `#boat-icon` via `apt.ambientLoop`, so it's never dead-still while idling.
- 8.279s: `apt.cardEnter(tl, "#given-downstream", 8.279)` — timed to the word "18".
- 11.399s: `apt.cardEnter(tl, "#given-upstream", 11.399)` — timed to the word "12".
**CAMERA MOVEMENT:** None — static wide shot.
**TRANSITIONS:** Continuous build, no hard cuts.
**EDUCATIONAL PURPOSE:** Both given values are on screen and legible before the concept explanation starts, so the viewer already knows "what we know" going into "why the rule works."
**VISUAL HIERARCHY:** Boat (foreground) > river (midground) > given-fact pills (informational overlay).
**ATTENTION MANAGEMENT:** The two pills reveal in narration order (downstream, then upstream) — one at a time.
**MOTION NOTES:** The wave scroll and boat bob are already running under "we are given that" — the water is never static from the moment it appears.
**CONTINUITY FROM PREVIOUS SCENE:** The question card has just settled into its resting hero position (Scene 1's rise at 3.2s); the illustration begins filling in directly beneath it, no cut.

### SCENE 3 — Concept Bridge (16.18s – 20.6s)
**VOICEOVER:** "Now before solving, let us understand one simple concept."
**VISUAL OBJECTIVE:** A settled beat that signals a rule is about to be taught.
**SCREEN LAYOUT:** Same river/boat scene, unchanged.
**ON-SCREEN ELEMENTS:** River, boat, both given-fact pills — all already on screen, untouched.
**ANIMATION DETAILS:** No new tweens — river scroll and boat bob continue uninterrupted. This is the one deliberate "calm before the demo" beat.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Continuous from Scene 2.
**EDUCATIONAL PURPOSE:** Gives the viewer a moment to register both given numbers before the concept demo begins.
**VISUAL HIERARCHY:** Unchanged.
**ATTENTION MANAGEMENT:** Nothing new competes.
**MOTION NOTES:** Ambient motion only (river/bob) — never a fully frozen frame.
**CONTINUITY FROM PREVIOUS SCENE:** Direct hold of Scene 2's final frame.

### SCENE 4 — DOWNSTREAM: Speeds Add (20.52s – 29.12s)
**VOICEOVER:** "When the boat moves in the same direction as the river, the current helps the boat. So downstream speed is equal to boat speed in still water plus stream speed."
**VISUAL OBJECTIVE:** Show the boat visibly speeding up WITH the current while the addition rule is stated.
**SCREEN LAYOUT:** Boat travels left→right across the illustration width, in the same direction as newly-appearing flow arrows.
**ON-SCREEN ELEMENTS:** `#boat-unit` (traveling), `#flow-arrows` (three right-pointing chevrons), a `#merge-chip` ("+C") that flies toward the boat, a `#formula-downstream` tag ("Downstream = Still Water + Stream") that fades in above the scene, a bounded wake-flicker trio behind the boat.
**ANIMATION DETAILS:**
- 20.52s: `apt.cardEnter(tl, "#flow-arrows", 20.52)` — chevrons appear, timed to "when the boat moves..."
- 20.52s: `tl.to("#boat-unit", {x: 900, duration: 8.6, ease: "power1.out"}, 20.52)` — boat glides right across the illustration, arriving as "stream speed" finishes at 29.12s.
- 20.52s (parallel): bounded wake-flicker (3 short trailing dashes) runs the whole glide.
- 24.34s: `tl.fromTo("#merge-chip", {opacity:0, x:-130}, {opacity:1, x:0, duration:0.5, ease:"power2.out"}, 24.34)` — timed to "the current helps the boat."
- 25.0s: `tl.to("#merge-chip", {opacity:0, duration:0.3}, 25.0)` — chip dissolves into the boat right after landing.
- 25.519s: `apt.cardEnter(tl, "#formula-downstream", 25.519)` — "Downstream = Still Water + Stream" label fades in, timed to the word "downstream" in "so downstream speed is equal to...".
- 28.18s: `apt.emphasize(tl, "#formula-downstream", 28.18)` — pulse on "...plus stream speed."
- River scroll and boat bob continue uninterrupted underneath all of the above.
**CAMERA MOVEMENT:** None (the boat provides all horizontal motion within the fixed frame).
**TRANSITIONS:** Continuous from Scene 3 — the boat simply starts moving, no cut.
**EDUCATIONAL PURPOSE:** Concrete, motion-based proof of "downstream = still water + stream" before any letters are attached to the quantities.
**VISUAL HIERARCHY:** Traveling boat + merge chip (primary) > formula label (secondary) > river (ambient).
**ATTENTION MANAGEMENT:** Chip-merge and formula label are sequenced a few seconds apart so they don't compete.
**MOTION NOTES:** The glide duration (8.6s) is matched to this scene's narration span so the boat visibly arrives at the right edge exactly as the sentence finishes.
**CONTINUITY FROM PREVIOUS SCENE:** The boat is exactly where Scene 3 left it (idling at its Scene-2 starting position); it launches into motion from that same spot, no repositioning jump.

### SCENE 5 — UPSTREAM: Turn + Speeds Subtract (29.46s – 38.94s)
**VOICEOVER:** "And when the boat moves against the flow of the river, the current slows the boat down. So upstream speed is equal to boat speed in still water minus stream speed."
**VISUAL OBJECTIVE:** Show the boat turning around and visibly fighting the current while the subtraction rule is stated.
**SCREEN LAYOUT:** Boat turns in place, then travels right→left, against the (still right-pointing) flow arrows.
**ON-SCREEN ELEMENTS:** `#boat-unit` (turning, then traveling left), a `#resist-chip` ("−C") that pushes back against the boat, a `#formula-upstream` tag ("Upstream = Still Water − Stream"), a bounded rocking judder on the boat (sells "the current fighting it").
**ANIMATION DETAILS:**
- 29.46s: `tl.to("#boat-unit", {scaleY: 0.94, duration: 0.2, ease: "power2.out", yoyo: true, repeat: 1}, 29.46)` — a quick squash sells the direction change.
- 29.66s: `tl.to("#boat-icon", {scaleX: -1, duration: 0.4, ease: "power2.inOut"}, 29.66)` — the boat visually flips to face left.
- 30.359s: `tl.to("#boat-unit", {x: 0, duration: 8.6, ease: "power1.inOut"}, 30.359)` — boat glides back left across the illustration, timed to "against the flow of the river" through "minus stream speed," arriving back at its start position as 38.94s (end of Scene 5) hits.
- 30.359s (parallel): bounded wake-flicker + a bounded rocking judder (`rotation: -2.5 ↔ 2.5`, ~0.7s period) on `#boat-unit` — sells "the current tries to slow the boat down" as a continuous fight, independent of the boat's own x-travel tween.
- 33.259s: `tl.fromTo("#resist-chip", {opacity:0, x:0}, {opacity:1, x:-30, duration:0.4, ease:"power2.out"}, 33.259)` then `tl.to("#resist-chip", {opacity:0, x:-60, duration:0.4, ease:"power2.in"}, 33.7)` — timed to "the current slows the boat down."
- 35.139s: `apt.cardEnter(tl, "#formula-upstream", 35.139)` — "Upstream = Still Water − Stream" label fades in, timed to the word "upstream."
- 37.959s: `apt.emphasize(tl, "#formula-upstream", 37.959)` — pulse on "...minus stream speed."
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** The turn (squash + flip) is the transition itself — no hard cut between Scenes 4 and 5.
**EDUCATIONAL PURPOSE:** Mirrors Scene 4's motion-based proof for the subtraction case, completing the concept pair before any algebra is introduced.
**VISUAL HIERARCHY:** Traveling boat (primary) > formula label (secondary) > river (ambient).
**ATTENTION MANAGEMENT:** Resist-chip and formula label sequenced apart, same pacing discipline as Scene 4.
**MOTION NOTES:** The judder is layered on the ROTATION property, independent of the boat's own x-travel tween, so the two compose without conflict.
**CONTINUITY FROM PREVIOUS SCENE:** The boat is exactly where Scene 4 left it (at x:900, facing right); the turn happens from that exact position, then the return glide begins.

### SCENE 6 — B and C Introduced (39.36s – 45.68s)
**VOICEOVER:** "Now let the speed of the boat in still water be b kilometers per hour, and let the speed of the stream be c kilometers per hour."
**VISUAL OBJECTIVE:** Attach the two algebra letters to their physical referents right before the pin — the last beat before solving begins.
**SCREEN LAYOUT:** Boat has just arrived back at its starting position (idling); river scene otherwise unchanged.
**ON-SCREEN ELEMENTS:** `#b-badge` ("B" pill) on the boat, `#c-badge` ("C" pill) fixed above the river.
**ANIMATION DETAILS:**
- 41.399s: `apt.cardEnter(tl, "#b-badge", 41.399)` — "B" pops onto the boat, timed to the word "b".
- 44.539s: `apt.cardEnter(tl, "#c-badge", 44.539)` — "C" pops above the river, timed to the word "c".
- River scroll and boat bob continue uninterrupted.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Leads directly into Scene 7's pin-flow.
**EDUCATIONAL PURPOSE:** The two unknowns are visually anchored to the exact objects they represent immediately before the Given card states the two equations — no gap between "these are the unknowns" and "here's what we know about them."
**VISUAL HIERARCHY:** B badge (on boat) and C badge (above river) are the sole new elements — both given-fact pills and both formula tags stay visible underneath, unfaded.
**ATTENTION MANAGEMENT:** Two sequential reveals, matched to their own words.
**MOTION NOTES:** This is the calmest beat since Scene 3 — deliberately so, right before the pin.
**CONTINUITY FROM PREVIOUS SCENE:** The boat has just settled from its Scene 5 return glide into the same idle position it started Scene 2 in — B and C attach to a boat/river that are visually "at rest," not mid-motion.

### SCENE 7 — PIN FLOW + Given (45.68s – 55.12s)
**VOICEOVER:** "From the downstream speed, b plus c is equal to 18. From the upstream speed, b minus c is equal to 12. Now we need to find the stream speed."
**VISUAL OBJECTIVE:** Transition to solving mode; state both simultaneous equations with the real given numbers.
**SCREEN LAYOUT:** Question glides to its pinned top slot (`#q-pinned`); the full illustration glides into a small pinned recap (`#illus-pinned`) that keeps a MINIATURE river+boat running continuously; the Given `SolutionCard` opens center.
**ON-SCREEN ELEMENTS:** `#q-pinned`, `#illus-pinned` (containing a mini two-layer wave loop, a small bobbing boat icon, and the label "B+C=18 · B−C=12 km/hr"), `#card-given` (chip "Given").
**ANIMATION DETAILS:**
- `PIN_TIME = 45.68`: `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 45.68)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 45.68)`. `apt.fadeOut(tl, "#serial-num", 45.68, 0.5)`.
- From `PIN_TIME + 1 = 46.68` onward, through `RECENTER_TIME` (75.16s): the mini wave loop keeps running and `apt.ambientLoop(tl, "#illus-pinned-icon", 46.68, 75.16)` bobs the small boat — keeps the pinned area alive through the entire Given/Step1/Step2 phase.
- `GIVEN_TIME = 46.079`: `apt.cardEnter(tl, "#card-given .solution-card", 46.079)`.
- `apt.textReveal(tl, "#card-given .math")` reveals:
  - line `data-t="46.079"`: "Downstream: B + C" (paraphrase, no clean word match)
  - answer `data-t="48.899"`: "= 18 km/hr" (word-level, matches spoken "18.")
  - line `data-t="49.779"`: "Upstream: B − C" (paraphrase)
  - answer `data-t="52.719"`: "= 12 km/hr" (word-level, matches spoken "12.")
**CAMERA MOVEMENT:** The pin-flow itself (question+illustration gliding to pinned slots).
**TRANSITIONS:** `apt.pinFlow`'s real glide (0.8s), not a cut.
**EDUCATIONAL PURPOSE:** Converts the visual/conceptual demo directly into the two equations that will be solved simultaneously.
**VISUAL HIERARCHY:** Given card (center, primary) > pinned question (top, secondary) > pinned river recap (ambient, still alive).
**ATTENTION MANAGEMENT:** The two equations reveal in narration order (downstream, then upstream); the card then holds through "now we need to find the stream speed" as a bridge beat.
**MOTION NOTES:** The mini river/boat loop is what keeps this scene from reading static through the equation-stating beat.
**CONTINUITY FROM PREVIOUS SCENE:** The full illustration is still mid-glide into its pinned slot as the Given card opens — same continuous motion carrying over; B and C badges are absorbed into the illustration as it shrinks (no separate fade needed, they travel with `#illustration`).

### SCENE 8 — STEP 1: Subtract the Equations (55.12s – 68.6s)
**VOICEOVER:** "So let us subtract the second equation from the first. B plus c minus b minus c is equal to 18 minus 12. The b gets canceled. We are left with two c is equal to six."
**VISUAL OBJECTIVE:** Walk through the subtraction term-by-term and land on "2C = 6."
**SCREEN LAYOUT:** Given card morphs to the left stack; Step 1 `SolutionCard` opens center.
**ON-SCREEN ELEMENTS:** `#stack-given` (`.step-circle` "G"), `#card-step1`.
**ANIMATION DETAILS:**
- `STEP1_TIME = 55.12`: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 55.12)`.
- 56.12s: `apt.cardEnter(tl, "#card-step1 .solution-card", 56.12)`.
- `apt.textReveal(tl, "#card-step1 .math")` reveals:
  - line `data-t="55.12"`: "Subtract eq (2) from eq (1)"
  - word-level from `data-t="59.199"`: "(B + C) − (B − C)"
  - word-level from `data-t="64.04"`: "= 18 − 12"
  - line `data-t="65.54"`: "The B cancels"
  - word-level `data-t="67.36"`–`68.5`: "2C = <span class='ans'>6</span>"
- Pinned river/boat recap continues its loop, unbroken.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** `apt.morphToStack` (0.8s box+text crossfade).
**EDUCATIONAL PURPOSE:** Isolate the subtraction mechanics — including the B-cancellation — as its own clean, word-synced reveal.
**VISUAL HIERARCHY:** Step 1 card (center, active) > stack-given (left, archived) > pinned recap (ambient).
**ATTENTION MANAGEMENT:** Reveals track the narration's own term-by-term pacing exactly.
**MOTION NOTES:** River keeps flowing; boat keeps bobbing.
**CONTINUITY FROM PREVIOUS SCENE:** Given card is still fully visible/readable up until the moment it starts its morph — no early fade.

### SCENE 9 — STEP 2: Isolate C (68.6s – 75.16s)
**VOICEOVER:** "So c is equal to three kilometer per hour. So the speed of the stream is three kilometer per hour."
**VISUAL OBJECTIVE:** Deliver the final answer, then restate it in the question's own words.
**SCREEN LAYOUT:** Step 1 morphs to the left stack; Step 2 `SolutionCard` opens center.
**ON-SCREEN ELEMENTS:** `#stack-step1` (`.step-circle` "1"), `#line-g-1` connector, `#card-step2`.
**ANIMATION DETAILS:**
- `STEP2_TIME = 68.6`: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 68.6)`; `apt.stackLineGrow(tl, "#line-g-1", 68.6)`.
- 69.4s: `apt.cardEnter(tl, "#card-step2 .solution-card", 69.4)`.
- `apt.textReveal(tl, "#card-step2 .math")` reveals:
  - word-level `data-t="69.739"`–`70.339`: "C = <span class='ans'>3 km/hr</span>"
  - line-level `data-t="72.0"`: "Speed of Stream" then word `data-t="73.86"`: "= <span class='ans'>3 km/hr</span>"
- Pinned river/boat recap continues its loop, unbroken.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** `apt.morphToStack` (0.8s), completing right as the card enters — no gap, deliberate tight pacing to match the short runtime.
**EDUCATIONAL PURPOSE:** Delivers the numeric answer, then immediately reconnects it to the plain-language question ("speed of the stream"), closing the loop opened in Scene 2.
**VISUAL HIERARCHY:** Step 2 card (center, active) > stack-step1/stack-given (left, archived) > pinned recap (ambient).
**ATTENTION MANAGEMENT:** Two sequential reveals — the bare result, then the restatement.
**MOTION NOTES:** River keeps flowing until this scene's end, the one deliberate stopping point coming next.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1 remains fully legible until its own morph fires — no premature fade.

### SCENE 10 — Options Reveal (75.16s – 78.92s)
**VOICEOVER:** "Hence, the correct answer is option D."
**VISUAL OBJECTIVE:** Confirm the answer against all four choices.
**SCREEN LAYOUT:** Step 2 morphs to stack; pinned question recenters; illustration recap clears; options grid (2×2) appears.
**ON-SCREEN ELEMENTS:** `#stack-step2` (`.step-circle` "2"), `#line-1-2` connector, `#options-reveal` (A: 2.5, B: 3.5, C: 4, D: 3 — correct).
**ANIMATION DETAILS:**
- `RECENTER_TIME = 75.16`: `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 75.16)`; `apt.stackLineGrow(tl, "#line-1-2", 75.16)`.
- 75.16s: `apt.fadeOut(tl, "#illus-pinned", 75.16)` (the ONE deliberate stopping point for the river/boat recap); `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 75.16)`.
- 75.68s: `apt.fadeIn(tl, "#options-reveal", 75.68)`.
- 76.0s: `apt.optionsStagger(tl, ".opt-btn", 76.0)`.
- 78.6s: `apt.correctPulse(tl, ".opt-btn.correct", 78.6)`, timed to land on "option D."
- 79.5s: `apt.fadeOut(tl, "#root > div", 79.5, 1.2)` — END FADE.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** `apt.morphToStack` + `apt.recenterForOptions`.
**EDUCATIONAL PURPOSE:** Standard close — verify the derived answer (3 km/hr) against the given options.
**VISUAL HIERARCHY:** Options grid (primary) > stack column (secondary) > pinned question (tertiary).
**ATTENTION MANAGEMENT:** Stagger-then-pulse, standard two-beat close.
**MOTION NOTES:** This is the one deliberate point where continuous ambient motion (river recap) is allowed to stop — immediately replaced by the options-reveal's own motion.
**CONTINUITY FROM PREVIOUS SCENE:** Step 2 remains fully legible until its own morph fires — no premature fade.

---

## PART 3 — Asset List Required

| Asset | Source | Notes |
|---|---|---|
| `illustration/boat.svg` | Copied from `global-illustrations/boat.svg` | Untouched — already blue-hull/white-deck, palette-matched. Default orientation used as-is for the downstream (rightward) leg; `scaleX:-1` applied at the turn for the upstream (leftward) leg. |
| `illustration/wave.svg` | Copied from `global-illustrations/wave.svg` | `--primary` fill — front (faster) wave row |
| `illustration/wave-light.svg` | Copied from `global-illustrations/wave-light.svg` | `--primary-light` fill — back (slower) wave row |
| `design-system.css`, `animations.js`, `assets/` | Copied from `_template/` | Per README §5B |

No new colors, fonts, or template components introduced — all illustration CSS (river channel, boat wrapper, given-fact pills, B/C badges, merge/resist chips, formula tags, flow arrows) is per-question custom markup as permitted by design.md's "Illustration" section, following the exact pattern already established in [speed time and distance/q8](../../speed%20time%20and%20distance/q8/index.html) and this topic's own [q2](../q2/index.html).

---

## PART 4 — Animation Complexity Notes

- **Seamless wave loop ("riverFlow" pattern):** identical technique to [q2](../q2/index.html) and [speed time and distance/q8](../../speed%20time%20and%20distance/q8/index.html) — each wave row is two identical tile-copies back to back, a `fromTo(x: -tileWidth → 0)` tween with `ease:"none"` and a bounded, computed repeat count (never `-1`) restarts seamlessly at each cycle boundary.
- **Full B/C simultaneous-equation structure (unlike q2):** this question, like the cross-topic reference, has genuinely unknown still-water and stream speeds, solved via two equations and a subtraction — so the boat travels BOTH directions (downstream then upstream) and its badge shows the letter "B" (never a real number), with a separate "C" badge for the stream. No badge text-swap arithmetic is needed on the boat itself (unlike the cross-topic reference's B-state span-swapping) — this question's algebra all happens inside the Given/Step solution cards instead, keeping the illustration simpler.
- **Given-fact pills stated early, before the letters:** "Downstream Speed = 18 km/hr" and "Upstream Speed = 12 km/hr" appear in Scene 2, well before B and C are introduced in Scene 6 — this mirrors the actual narration order (numbers first, concept second, letters last) rather than assuming the letters from the start.
- **Turn-around (squash + flip):** identical technique to the cross-topic reference — a quick `scaleY` squash sells the direction change, then `scaleX:-1` flips the boat icon to face the new direction of travel.
- **Bounded rocking judder** on the upstream leg sells "the current fighting the boat" as a continuous resistance, layered on the `rotation` property independent of the boat's own `x`-travel tween, so they compose without conflict.
- **Pinned recap never idles:** the pinned illustration keeps its own miniature wave loop and boat bob running continuously from `PIN_TIME+1` through `RECENTER_TIME` (~28.5s span covering the entire Given/Step1/Step2 phase).
- **Only one true stop:** the illustration recap's fade-out at 75.16s (Scene 10) is the sole point where continuous ambient motion ends, immediately superseded by the options-reveal's own stagger/pulse animation.
- **Tight pacing throughout:** at ~79s total (vs. the cross-topic reference's 128s), morph-to-next-card gaps are compressed to match morph duration itself (0.8s) rather than the full 1s convention, while still respecting the "card stays until its narration finishes" rule — no card exits before its content is fully spoken.

---

## PART 5 — Master Timeline Overview

```
TIME (s)   ELEMENT                          WHAT HAPPENS
─────────  ───────────────────────────────  ─────────────────────────────────
0.0        Background + bottomStrip+logo    Always visible
0.3        QuestionCard                     heroEnterLowered — fades/scales in low
0.8        SerialNum                        pops in low, mirrors card
3.2        QuestionCard + SerialNum         rise to resting position
4.6        River (2-layer wave loop)        seamless scroll begins — never stops until 75.16s
5.0        Boat                             drops onto water, idle bob begins
8.279      "Downstream = 18" pill           cardEnter
11.399     "Upstream = 12" pill             cardEnter
16.18–20.6 Concept bridge hold              no new elements, ambient motion only
20.52      Flow arrows                      cardEnter
20.52      Boat                             glides RIGHT 900px over 8.6s (downstream)
24.34      "+C" chip                        flies toward boat, dissolves
25.519     "Downstream = Still Water + Stream" label   cardEnter
28.18      Downstream label                 emphasize pulse
29.46      Boat                             squash + flip (turn-around)
30.359     Boat                             glides LEFT 900px over 8.6s (upstream), judder + wake throughout
33.259     "−C" chip                        pushes back against boat
35.139     "Upstream = Still Water − Stream" label   cardEnter
37.959     Upstream label                   emphasize pulse
41.399     "B" badge                        cardEnter on boat
44.539     "C" badge                        cardEnter above river

[ PIN_TIME = 45.68 ]
─────────  ───────────────────────────────  ─────────────────────────────────
45.68      Question + Illustration          🌟 pinFlow — real glide to pinned slots
46.68      Pinned river/boat recap          mini seamless loop + bob begins — runs to 75.16s

[ GIVEN_TIME = 46.079 ]
─────────  ───────────────────────────────  ─────────────────────────────────
46.079     Given card                       cardEnter (center)
46.079–52.879 Given card .math               textReveal (B+C=18, then B−C=12)

[ STEP CYCLE ]
─────────  ───────────────────────────────  ─────────────────────────────────
55.12      Given → Given stack               🌟 morphToStack
56.12      Step 1 card                       cardEnter
56.12–68.5 Step 1 .math                      textReveal ((B+C)−(B−C)=18−12 → 2C=6)
68.6       Step 1 → Step 1 stack            🌟 morphToStack + stackLineGrow (G→1)
69.4       Step 2 card                       cardEnter
69.4–73.86 Step 2 .math                      textReveal (C=3, then restated)

[ PHASE 3 ]
─────────  ───────────────────────────────  ─────────────────────────────────
75.16      Step 2 → Step 2 stack            🌟 morphToStack + stackLineGrow (1→2)
75.16      Pinned illustration recap        fadeOut (the ONE deliberate stop)
75.16      Pinned question                  recenterForOptions
75.68      Options grid                     fadeIn
76.0       Option buttons                   optionsStagger
78.6       Correct option (D)               correctPulse
79.5       Everything                       END FADE (1.2s)
```

**Video duration:** 78.919s (matches `voiceover.wav` exactly).
