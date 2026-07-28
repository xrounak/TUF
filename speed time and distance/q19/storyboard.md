# Storyboard — Speed, Time and Distance / Q19 (Car Chasing a Bus)

Question: A bus is 45 km ahead of a car on the same road. The car's speed is 75 km/hr and
the bus speed is 60 km/hr. How long will the car take to catch the bus?
Options: A) 3 hours ✅  B) 2 hours  C) 2.5 hours  D) 3.5 hours

Voiceover duration: 77.54s

Structural note: this question shares its **illustration** with Q15 (a same-direction
chase — faster object behind, slower object ahead, gap closing) so the car/bus
illustration reuses Q15's fast-behind/slow-ahead layout, dotted original-gap reference,
solid live-gap line, and numeric-proxy `renderDemo()` pattern (not Q17's shared-depot
divergence pattern, which is for opposite-direction problems). It shares its **math**
shape with Q17 (a direct 2-step solve: Given → Step 1 concept + relative-speed formula →
Step 2 time formula, no third step) rather than Q15's 3-step version, because this
question's narration reaches the relative-speed formula and then a single unitary-method
time derivation, without a separate "formula name" step — matching Q17's economy, not
Q15's extra step.

---

## PART 1 — Narration Beat Analysis

| # | Time (s) | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|----------|-----------|----------------------|------------------|-------------------|
| 1 | 0.10–3.08 | "So welcome back again. Time for one more problem." | Cold open, orient viewer | Center screen | QuestionCard rises into view (hero, lowered start) |
| 2 | 3.58–7.62 | "...a bus is already 45 km ahead of a car." | Establish the initial gap | Illustration gap bracket | Car (behind) + Bus (ahead) appear with a dotted "45 km" gap reference |
| 3 | 8.14–10.70 | "The speed of the car is 75 km/hr." | Attach speed to the chasing object | Car label | "75 km/hr" fades in under the car |
| 4 | 11.14–13.90 | "The speed of the bus is 60 km/hr." | Attach speed to the lead object | Bus label | "60 km/hr" fades in under the bus |
| 5 | 14.44–17.76 | "The question is asking us to find how long the car will take to catch the bus." | Pose the goal | Ghost preview | Translucent car sweeps from behind, past the bus, previewing the catch |
| 6 | 18.06–23.64 | "Now, let us understand one important concept. The bus is already moving and the car is chasing it, so every hour," | Set up the chase framing | Illustration | Both vehicles about to move; narration frames "every hour" |
| 7 | 24.04–25.46 | "both of them keep moving forward." | Both objects are in motion, not just the car | Both vehicles nudge together | Shared base movement — gap unchanged (both cover the same 60 km/hr base) |
| 8 | 25.76–36.22 | "In one hour, the car travels 75 km. The bus travels 60 km. So the actual gap reduces by 75 minus 60, which is 15 km every hour." | Concrete derivation of the 15 km/hr closing rate | Live gap line + label | Car gains the extra distance; live gap shrinks 45→30 km on-screen; "15 km" emphasized |
| 9 | 36.82–38.88 | "This is called the relative speed." | Name the concept | Pinned layout | pinFlow glide fires; Given card (already open) recenters |
| 10 | 39.46–47.80 | "Relative speed is equal to car speed minus bus' speed. That is 75 minus 60, which is 15 kilometers per hour." | Formalize + compute relative speed | Step 1 card | Formula → values → result, word-synced |
| 11 | 48.12–51.90 | "Now, be very sure about one thing. The initial gap is 45 kilometers." | Re-anchor the total gap before deriving time | Step 2 card opening | Step 1 morphs to stack; Step 2 card enters, recaps the 45 km gap |
| 12 | 52.40–63.66 | "Every hour, the car reduces only 15 km of that gap. So in one hour, the gap reduces by 15 km. To reduce a gap of 1 km, it takes 1 by 15 hour." | Unitary-method setup | Step 2 card | "1 km gap → 1/15 hour" lands, word-synced with the fraction |
| 13 | 64.16–74.80 | "Since the total gap is 45 km, the time taken will be 45 into 1 by 15. After simplifying this, we get 3 hours, so the car will catch the bus after 3 hours." | Final computation | Step 2 card | "45 km gap → 45 × 1/15" then "= 3 hours" lands |
| 14 | 75.14–77.54 | "Hence, the correct answer is option A." | Reveal answer | Options grid | Options stagger in; correct option (A) pulses green |

---

## PART 2 — Scene-by-Scene Storyboard

Design constraints in force throughout (per `_template/README.md` §4D.1): only
`--primary #6373db`, `--primary-light #e2e5ff`, `--success #4eb85f`, `--topic #949494`,
`--text #000000`, `--bg #FFFFFF`; only `QuestionCard`/`SerialNum`/`SolutionCard`/
`SolutionStackCard`/`solutionChip`/`StepCircle`/`StackLine`/options-grid/`logo`/
`topic-name`/`bottomStrip`/Illustration/Fraction; only the helpers in `animations.js`,
called explicitly by name below. The illustration (dotted original-gap reference + solid
live-gap line/label + car + bus + speed labels) is per-question custom markup/CSS built
from the two user-supplied assets `illustration/car.svg` (chasing, behind, left) and
`illustration/bus-svgrepo-com.svg` (ahead, right) — both already use `#6373db`/`#e2e5ff`/
`#949494` fills, so per README §5C they are used as-is, un-recolored.

### SCENE 1 — Cold Open (0.3s – 3.08s)
**VOICEOVER:** "So welcome back again. Time for one more problem."
**VISUAL OBJECTIVE:** Establish the question, hero-style, before anything else exists.
**SCREEN LAYOUT:** `#q-full-card` centered horizontally, vertically lowered by 180px.
**ON-SCREEN ELEMENTS:** `.q-card` with QUESTION_TEXT ("45 km", "75 km/hr", "60 km/hr" in `.num` primary blue). `#serial-num` badge, fixed "Q" digit.
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.08)`. `#serial-num` pops in at 0.8s (`back.out(2)`) at the same lowered y-offset, rises in parallel at 3.08s.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** N/A (opening scene).
**EDUCATIONAL PURPOSE:** Give the viewer a beat to read the full question before solving begins.
**VISUAL HIERARCHY:** QuestionCard > SerialNum badge.
**ATTENTION MANAGEMENT:** Single focal element.
**MOTION NOTES:** The lowered-then-rise motion lands exactly as "problem." finishes.
**CONTINUITY FROM PREVIOUS SCENE:** N/A — video start.

### SCENE 2 — Car and Bus Appear, Gap Established (3.6s – 7.62s)
**VOICEOVER:** "Now, in this problem, we are given that a bus is already 45 km ahead of a car."
**VISUAL OBJECTIVE:** Establish object continuity and the initial 45 km gap before any speeds are named.
**SCREEN LAYOUT:** `#illustration` (1400×280, centered under the question's future pinned slot). Car (`#wrap-fast`, absolute left:400px) behind; Bus (`#wrap-slow`, absolute left:900px) ahead. Dotted `#gap-orig-line` + `#gap-orig-label` ("45 km (original gap)") span the 500px between them.
**ON-SCREEN ELEMENTS:** `car.svg` inside `#wrap-fast`, `bus-svgrepo-com.svg` inside `#wrap-slow`, dotted gap reference line/label.
**ANIMATION DETAILS:**
- 3.6s: `tl.fromTo("#illustration", {opacity:0, scale:0.94}, {opacity:1, scale:1, duration:0.5, ease:"power2.out"}, 3.6)`.
- 5.78s: `tl.fromTo("#gap-orig-line", {opacity:0, scaleX:0.7}, {opacity:1, scaleX:1, duration:0.4, ease:"back.out(1.4)"}, 5.78)` — timed to "forty-five".
- 5.94s: `tl.fromTo("#gap-orig-label", {opacity:0, y:10}, {opacity:1, y:0, duration:0.35, ease:"power2.out"}, 5.94)`.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Continuous build, no cuts.
**EDUCATIONAL PURPOSE:** Locks in the 45 km head-start before speeds are introduced, so the later chase motion reads against a clear starting gap.
**VISUAL HIERARCHY:** Gap bracket (momentary focus) > both vehicles (equal weight).
**ATTENTION MANAGEMENT:** Single build, no competing motion.
**MOTION NOTES:** Both vehicles sit motionless at their starting positions until Scene 5 — "45 km ahead" needs to be unambiguous before any travel begins.
**CONTINUITY FROM PREVIOUS SCENE:** The question card has just settled into its resting hero position (Scene 1's rise at 3.08s); the illustration fills in directly beneath it, no cut.

### SCENE 3 — Speeds Named (8.14s – 13.90s)
**VOICEOVER:** "The speed of the car is 75 km/hr. The speed of the bus is 60 km/hr."
**VISUAL OBJECTIVE:** Attach each speed value to its own vehicle before any motion starts.
**SCREEN LAYOUT:** Same illustration; speed labels appear under each vehicle, nested inside that vehicle's own wrapper so they travel together later.
**ON-SCREEN ELEMENTS:** `#lbl-fast` ("75 km/hr", `--primary` text — the car is the chasing/emphasized object) inside `#wrap-fast`; `#lbl-slow` ("60 km/hr", `--topic` grey text) inside `#wrap-slow`.
**ANIMATION DETAILS:**
- 9.14s: `tl.fromTo("#lbl-fast", {opacity:0,y:10}, {opacity:1,y:0,duration:0.35,ease:"power2.out"}, 9.14)` — timed to "seventy-five".
- 12.50s: identical treatment on `#lbl-slow` — timed to "sixty".
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Continuous from Scene 2.
**EDUCATIONAL PURPOSE:** Numbers register on the correct vehicle before the chase motion begins, preventing any car/bus mix-up once they're both moving.
**VISUAL HIERARCHY:** Whichever label just faded in is momentarily primary; settles to equal weight once both are visible.
**ATTENTION MANAGEMENT:** One label at a time, matching narration order exactly.
**MOTION NOTES:** Vehicles are still motionless — motion is reserved for Scene 5, landing with more impact once the chase concept is spoken.
**CONTINUITY FROM PREVIOUS SCENE:** Vehicles are exactly where Scene 2 left them; only the labels are new.

### SCENE 4 — Ghost Catch-Up Preview (15.9s – 18.1s)
**VOICEOVER:** "The question is asking us to find how long the car will take to catch the bus."
**VISUAL OBJECTIVE:** Preview the answer before it's derived — a translucent car sweeps from behind, past the bus.
**SCREEN LAYOUT:** `#cyc-ghost`-equivalent (`#car-ghost`) starts at the car's own position and sweeps to just past the bus.
**ON-SCREEN ELEMENTS:** `#car-ghost` (translucent copy of `car.svg`).
**ANIMATION DETAILS:** `tl.fromTo("#car-ghost", {opacity:0,left:350}, {opacity:0.5,left:1050,duration:2.2,ease:"power1.in"}, 15.9)` then `tl.to("#car-ghost", {opacity:0,duration:0.4}, 18.1)`.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Overlay motion, no cut.
**EDUCATIONAL PURPOSE:** Makes the question's goal ("how long to catch the bus") feel concrete before any math appears.
**VISUAL HIERARCHY:** Ghost sweep (momentary) > static car/bus (base layer).
**ATTENTION MANAGEMENT:** Short, single sweep — doesn't linger.
**MOTION NOTES:** Ghost is a preview only; the real car/bus positions are untouched by this scene.
**CONTINUITY FROM PREVIOUS SCENE:** Real car/bus remain exactly as Scene 3 left them.

### SCENE 5 — The 1-Hour Chase Demo (24.04s – 36.22s)
**VOICEOVER:** "Now, let us understand one important concept. The bus is already moving and the car is chasing it, so every hour, both of them keep moving forward. In one hour, the car travels 75 km. The bus travels 60 km. So the actual gap reduces by 75 minus 60, which is 15 km every hour."
**VISUAL OBJECTIVE:** THE core visual payoff of Phase 1 — show the gap physically closing, driven by an exact numeric proxy (not a hand-tuned guess), matching Q15's `renderDemo()` pattern.
**SCREEN LAYOUT:** `#gap-live-line` (solid, `--primary`) and `#gap-live-label` ("gap: NN km") appear between the two vehicles' current centers, recomputed every frame. The dotted original-gap reference tracks the bus's own drift (a fixed 45km-long reference anchored to the bus), staying visually distinct from the shrinking solid live-gap line.
**ON-SCREEN ELEMENTS:** `#gap-live-line`, `#gap-live-label`, car + bus (now animating).
**ANIMATION DETAILS:**
- 22.94s (both fade in ahead of motion): `tl.fromTo("#gap-live-line", {opacity:0}, {opacity:1,duration:0.3}, 22.94)`; same for `#gap-live-label`.
- 24.04s ("both of them keep moving forward"): `tl.to(demoState, {slowLeft: 1010, duration:1.4, ease:"power2.out", onUpdate:renderDemo}, 24.04)` — both vehicles nudge forward together (gapKm unchanged; represents the shared 60 km/hr base both cover).
- 26.72s ("the car travels 75 km...gap reduces by 15 km every hour", spanning to 36.22): `tl.to(demoState, {gapKm: 30, duration:9.5, ease:"none", onUpdate:renderDemo}, 26.72)` — the car gains the extra 15 km-equivalent ground at a constant rate over the full narration span, so the gap visibly and continuously narrows in real time as the numbers are spoken (45→30 km on-screen, illustrative scale — full to-scale travel would run off the 1400px stage, per Q15's own design note).
- 35.28s: `apt.emphasize(tl, "#gap-live-label", 35.28)` — pulse on "15 km" as it's spoken a second time ("...which is fifteen kilometer every hour").
**CAMERA MOVEMENT:** None (the vehicles' own motion carries the frame).
**TRANSITIONS:** Continuous — no cut.
**EDUCATIONAL PURPOSE:** Makes "the gap reduces by 15 km every hour" (the core insight) feel physically obvious, watched in real time, before it's ever named "relative speed."
**VISUAL HIERARCHY:** Live gap shrink (primary) > vehicle motion (secondary, carries it) > dotted original reference (context).
**ATTENTION MANAGEMENT:** One continuous shrink, exactly matched to the ~11.5s narration span (24.04–36.22) — no competing motion.
**MOTION NOTES:** `PX_PER_KM = 500/45` — calibrated so 45 km spans the same 500px as Q15's 24km/500px setup, keeping vehicle positions/wrap widths identical to Q15's proven layout.
**CONTINUITY FROM PREVIOUS SCENE:** Car and bus are exactly where Scene 3 left them (400px / 900px) — the demo animates them from that same rest position, no repositioning jump.

### SCENE 6 — Pin Flow + Given Recap, Relative Speed Named (PIN_TIME = 36.82s)
**VOICEOVER (spans into):** "This is called the relative speed."
**VISUAL OBJECTIVE:** Collapse the full Phase 1 layout into its pinned Phase 2 slot right as the concept gets its name; morph the Given card straight into the stack since Step 1 needs to open immediately after.
**SCREEN LAYOUT:** `#q-full-card` → `#q-pinned`. `#illustration` → `#illus-pinned` (small car + recap label + small bus, `justify-content:space-between`).
**ON-SCREEN ELEMENTS:** Shrunk car/bus icons either side of a "45 km ahead · 75 & 60 km/hr" recap label. `#card-given` morphs to `#stack-given`.
**ANIMATION DETAILS:**
- `PIN_TIME = 36.82`: `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 36.82)`; `apt.pinFlow(tl, "#illustration", "#illus-pinned", 36.82)`; `apt.fadeOut(tl, "#serial-num", 36.82, 0.5)`.
- `36.82`: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 36.82)` — the Given card (open since 7.62s) collapses into the stack at the same beat as the pin, since Step 1 needs the center stage immediately for the relative-speed formula about to be spoken.
- From `37.9` through `48.12`: `apt.ambientLoop(tl, "#illus-pinned-car", 37.9, 48.12)` and `apt.ambientLoop(tl, "#illus-pinned-bus", 38.1, 48.12)` (slightly offset phase) — keeps the pinned recap alive through Step 1's hold.
**CAMERA MOVEMENT:** The glide itself.
**TRANSITIONS:** `apt.pinFlow` (0.8s glide) + `apt.morphToStack` (0.8s), firing together.
**EDUCATIONAL PURPOSE:** Signals "the concept now has a name — time to formalize it" in one clean beat.
**VISUAL HIERARCHY:** Pinned question (top) > pinned car/bus recap (upper-middle, ambient) > stack-given (left column, first entry).
**ATTENTION MANAGEMENT:** The glide and morph carry attention from full-size elements to their compact homes together — one beat, not two competing motions.
**MOTION NOTES:** 0.8s `power2.inOut` on both, matching every other pinFlow/morphToStack in the system.
**CONTINUITY FROM PREVIOUS SCENE:** The live-gap line/label from Scene 5 are still visible as `#illustration` glides into `#illus-pinned` — the pinned version swaps to its own compact icon+label composition.

### SCENE 7 — Given Card (opens 7.62s, holds through the pin — documented here for its full span)
**VOICEOVER (spans):** "...a bus is already 45 km ahead of a car. The speed of the car is 75 km/hr. The speed of the bus is 60 km/hr."
**VISUAL OBJECTIVE:** Reveal each given value on the card at the same instant its illustration counterpart is being narrated — a live running note, not a later recap. Concept explanation is NOT here (that's the whole of Scene 5's illustration + Scene 8's Step 1) — Given stays a clean 3-line fact recap, matching Q17's Given-card economy.
**SCREEN LAYOUT:** `#card-given .solution-card` at `left:640px; top:640px` (below the illustration, which ends around top:560px).
**ON-SCREEN ELEMENTS:** `.chip` "Given". `.math` with 3 lines: "Bus is 45 km ahead of car", "Car speed = 75 km/hr", "Bus speed = 60 km/hr".
**ANIMATION DETAILS:** `apt.cardEnter(tl, "#card-given .solution-card", 7.62)` — right as "...ahead of a car." finishes. `apt.textReveal(tl, "#card-given .math")` reveals each line: `data-t="7.62"` (gap, line-level), `data-t="9.14"` (car speed, word-level, same instant as `#lbl-fast`), `data-t="12.50"` (bus speed, word-level, same instant as `#lbl-slow`).
**CAMERA MOVEMENT:** None — the card sits statically until it morphs at PIN_TIME.
**TRANSITIONS:** N/A within scene — the Given card is NOT part of Scene 6's `pinFlow`; it morphs directly to the stack instead (see Scene 6).
**EDUCATIONAL PURPOSE:** Ties each given value directly to its visual the instant it's spoken.
**VISUAL HIERARCHY:** Question card (top) > Illustration (upper-middle) > Given card (lower-middle).
**ATTENTION MANAGEMENT:** During 7.62s–13.90s the illustration and Given card update in lockstep.
**MOTION NOTES:** All 3 lines are simple facts (no formula yet) — Step 1 carries the full weight of the concept + formula.
**CONTINUITY FROM PREVIOUS SCENE:** N/A — described relative to its own 7.62–36.82s span, overlapping Scenes 2–6.

### SCENE 8 — Step 1: Relative Speed Formula (37.62s – 48.12s)
**VOICEOVER:** "Relative speed is equal to car speed minus bus' speed. That is 75 minus 60, which is 15 kilometers per hour."
**VISUAL OBJECTIVE:** Formalize what Scene 5's illustration already demonstrated — name the formula, then compute it with real numbers.
**SCREEN LAYOUT:** Given card has already morphed to the left stack (Scene 6); Step 1 `SolutionCard` opens center (`left:640px; top:460px`).
**ON-SCREEN ELEMENTS:** `#stack-given` (`.step-circle` "G"), `#card-step1`.
**ANIMATION DETAILS:**
- `37.62`: `apt.cardEnter(tl, "#card-step1 .solution-card", 37.62)` — fires exactly as the Given→stack morph (started 36.82) completes.
- `apt.textReveal(tl, "#card-step1 .math")` reveals (word-level throughout — the line is spoken near-verbatim):
  - `data-t="39.46"`/`"39.96"`/`"40.22"`/`"40.82"`/`"41.14"`/`"42.06"`/`"42.48"`/`"42.80"`: "Relative Speed = Car's Speed − Bus's Speed"
  - `data-t="43.90"`/`"44.54"`/`"45.08"`/`"45.40"`: "= 75 − 60"
  - `data-t="46.26"`/`"46.60"`: "= <span class='ans'>15 km/hr</span>"
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** N/A — card enters right as the previous morph settles.
**EDUCATIONAL PURPOSE:** Converts the intuitive chase demo into a named, reusable formula.
**VISUAL HIERARCHY:** Step 1 card (center, active) > stack-given (left, archived) > pinned car/bus recap (ambient).
**ATTENTION MANAGEMENT:** Three sequential reveals matched to the narration's own ~8.3s pacing.
**MOTION NOTES:** Pinned car/bus recap keeps bobbing throughout via `apt.ambientLoop`.
**CONTINUITY FROM PREVIOUS SCENE:** Given card is fully readable until its morph fires at 36.82 — no early fade; Step 1 opens in the exact center slot Given just vacated.

### SCENE 9 — Step 1 → Stack, Step 2 Opens: Unitary-Method Time Derivation (48.12s – 74.80s)
**VOICEOVER:** "Now, be very sure about one thing. The initial gap is 45 kilometers. Every hour, the car reduces only 15 km of that gap. So in one hour, the gap reduces by 15 km. To reduce a gap of 1 km, it takes 1 by 15 hour. Since the total gap is 45 km, the time taken will be 45 into 1 by 15. After simplifying this, we get 3 hours, so the car will catch the bus after 3 hours."
**VISUAL OBJECTIVE:** Collapse Step 1 into the stack, then derive the final answer via the unitary method (matching Q15's Step 1 pattern, adapted to this question's numbers).
**SCREEN LAYOUT:** `#stack-step1 .stack-card` at `left:100px; top:300px`. `#card-step2 .solution-card` at `left:600px; top:440px; width:720px` (widened for the fraction lines).
**ON-SCREEN ELEMENTS:** Step 1 stack card (`.step-circle` "1" badge). `#line-g-1` connector grows between the G and 1 circles. Step 2 active card: `.chip` "Step 2", `.math` with "Initial gap = 45 km" / "1 km gap → 1/15 hour" / "45 km gap → 45 × 1/15" / "= 3 hours" (`.ans`) — the fraction pairs use `.frac`, not a "÷" glyph.
**ANIMATION DETAILS:**
- `48.12`: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 48.12)`; `apt.setStackLine("#line-g-1", "#stack-given .step-circle", "#stack-step1 .step-circle")` (called once, pre-timeline); `apt.stackLineGrow(tl, "#line-g-1", 48.12)`.
- `48.92`: `apt.cardEnter(tl, "#card-step2 .solution-card", 48.92)` — fires exactly as the Step1→stack morph completes.
- `apt.textReveal(tl, "#card-step2 .math")` reveals:
  - word-level `data-t="49.98"`/`"50.60"`/`"50.78"`: "Initial gap = <span class='hi'>45 km</span>"
  - word-level `data-t="59.84"`/`"62.52"` (`.frac` 1/15): "1 km gap → " + frac
  - word-level `data-t="64.16"`/`"69.16"` (`.frac` 45/15... written as "45 × 1/15"): "45 km gap → 45 × " + frac
  - word-level `data-t="71.74"`: "= <span class='ans'>3 hours</span>"
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** `apt.morphToStack`, standard 0.8s.
**EDUCATIONAL PURPOSE:** Final calculation — converts the 45 km gap and 15 km/hr relative speed into the answer the question asks for.
**VISUAL HIERARCHY:** Step 2 active card (center) > Step 1 + Given stack cards (left column) > connector line.
**ATTENTION MANAGEMENT:** Reveals matched to the narration's own ~26.7s pacing — the longest hold in the video, appropriate since this is the full unitary-method derivation.
**MOTION NOTES:** Word-level reveal throughout — every value is spoken near-verbatim.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1's card is still completing its slide-into-stack (finishes 48.92s) as Step 2's card begins fading in at the same instant — the connector line grows in the same beat Step 1 lands.

### SCENE 10 — Recenter + Options Reveal (74.80s – 77.54s+)
**VOICEOVER:** "...so the car will catch the bus after 3 hours. Hence, the correct answer is option A."
**VISUAL OBJECTIVE:** Close out the solve, then reveal and confirm the correct option.
**SCREEN LAYOUT:** Step 2 collapses into the stack (`left:100px; top:450px`). `#illus-pinned` fades out. `#q-pinned` shifts via `recenterForOptions` (`x:160, y:180`). `#options-reveal .pinned-col` (top:400px) shows the 2×2 `.options-grid`.
**ON-SCREEN ELEMENTS:** Step 2 stack card (`.step-circle` "2"). `#line-1-2` connector between circles "1" and "2". Options A–D, with A marked `correct`.
**ANIMATION DETAILS:**
- `74.80`: `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 74.80)`; `apt.setStackLine("#line-1-2", "#stack-step1 .step-circle", "#stack-step2 .step-circle")` (pre-timeline); `apt.stackLineGrow(tl, "#line-1-2", 74.80)`; `apt.fadeOut(tl, "#illus-pinned", 74.80)`; `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 74.80)`.
- `75.6`: `apt.fadeIn(tl, "#options-reveal", 75.6)`.
- `76.0`: `apt.optionsStagger(tl, ".opt-btn", 76.0)` (stagger 0.12s × 4).
- `76.96`: `apt.correctPulse(tl, ".opt-btn.correct", 76.96)` — timed to "option A."
**CAMERA MOVEMENT:** `recenterForOptions` shifts the pinned question block.
**TRANSITIONS:** `apt.morphToStack` (Step 2), `recenterForOptions` (question), `fadeIn`/`optionsStagger`/`correctPulse` (options) — all standard helpers.
**EDUCATIONAL PURPOSE:** Confirm the numeric answer (3 hours) against the multiple-choice options.
**VISUAL HIERARCHY:** Options grid (new focal point) > stack column (still visible, left) > recentered question (top).
**ATTENTION MANAGEMENT:** Stack cards and connector lines are NOT faded during this scene — they stay visible so the viewer can trace "3 hours" from the Step 2 card straight into option A.
**MOTION NOTES:** `correctPulse` is the single emphasis beat of the whole video.
**CONTINUITY FROM PREVIOUS SCENE:** Step 2's card is still mid-morph into the stack as the illustration fades and the question recenters at the same 74.80s mark.

### SCENE 11 — End Hold (77.3s – 77.9s+)
**VOICEOVER:** "...option A." (voiceover ends 77.54s)
**VISUAL OBJECTIVE:** Hold the fully solved frame before fading out.
**SCREEN LAYOUT:** Unchanged from Scene 10's final state.
**ON-SCREEN ELEMENTS:** Everything from Scene 10, static.
**ANIMATION DETAILS:** `apt.fadeOut(tl, "#root > div", 77.9, 1.2)` — every direct child of `#root` fades out together.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Single end-fade, no cut.
**EDUCATIONAL PURPOSE:** Give the viewer a beat to register the complete answer before the video ends.
**VISUAL HIERARCHY:** N/A (hold).
**ATTENTION MANAGEMENT:** Deliberate stillness signals "this is the answer."
**MOTION NOTES:** N/A.
**CONTINUITY FROM PREVIOUS SCENE:** Direct continuation of Scene 10's landed state.

---

## PART 3 — Asset List Required

- `illustration/car.svg` (already provided, user-supplied) — chasing vehicle, behind. Used as-is; its own fills (`#6373db` primary, `#aab4ef`/`#8891b0` blue-grey neighbors, `#141515` outlines) already match the palette, per README §5C no recolor needed.
- `illustration/bus-svgrepo-com.svg` (already provided, user-supplied) — lead vehicle, ahead. Same treatment — its fills (`#6373db`, `#e2e5ff`, `#949494`) are already brand-native.
- No other new assets — gap bracket lines, labels, ghost preview are all CSS/text, no new SVGs.
- Shared: `serial-num-badge.svg`, `logo.png` (from `_template/assets/`, copied per §5B).

## PART 4 — Animation Complexity Notes

- **Chase illustration (Q15 pattern, not Q17):** car (fast, behind) and bus (slow, ahead) reuse Q15's exact fast-behind/slow-ahead layout, `PX_PER_KM` proxy, dotted original-gap reference, and solid live-gap line/label — adapted from a 24km/500px calibration to 45km/500px, keeping all wrap positions (400px/900px) identical to Q15's proven values.
- **2-step math (Q17 pattern, not Q15):** Given → Step 1 (concept, already shown via the illustration demo, then formalized as the relative-speed formula) → Step 2 (unitary-method time derivation) — no third "name the formula" step, since Q19's narration reaches the formula name and computes it in one breath (unlike Q15, which named the formula as a distinct Step 2 after an initial unitary-method Step 1).
- **Continuous linear gap-shrink, not two discrete bursts:** Scene 5's `gapKm: 45→30` tween runs for the full ~9.5s span of "the car travels 75...gap reduces by 15 km every hour" at `ease:"none"` — a constant-rate shrink that visually embodies the concept of a constant relative speed, rather than snapping in two bursts.
- **Given card morphs directly at PIN_TIME** (not after a separate recenter hold, unlike Q17): because Step 1 needs to open immediately to catch "Relative speed is equal to..." at 39.46s, there's no idle pinned-recap period to justify a separate `y:-200` recenter tween before the morph — pin and morph fire together at 36.82s.
- **`apt.ambientLoop` on both pinned icons**, offset phase (37.9/38.1), covering Step 1's hold (37.62s–48.12s) so the pinned recap doesn't read as dead.
- **Ghost catch-up preview** (`#car-ghost`, 15.9s–18.1s): a translucent car sweep, directly adapted from Q15's `#cyc-ghost` pattern, timed to the "how long will the car take to catch the bus" question-posing line.
- **No `apt.emphasize`/`apt.resultReveal`** used inside any active card's `.math` — all number reveals go through `apt.textReveal`'s `.rv` mechanism. `apt.emphasize` is used exactly once, on `#gap-live-label` in Scene 5, which is illustration chrome, not `.math` text.

## PART 5 — Master Timeline Overview

```
TIME (s)   ELEMENT                          WHAT HAPPENS
─────────  ───────────────────────────────  ─────────────────────────────────
0.0        Background layers                Checker/dotted grid, bottom strip, topic, logo
0.3        QuestionCard                      heroEnterLowered (rises at 3.08s)
0.8        SerialNum badge                   pops in, rises with card at 3.08s
3.6        Illustration group                fades/scales in
5.78       Dotted gap line + "45 km" label   fadeIn
7.62       SolutionCard "Given"              cardEnter (top:640px, below illustration)
7.62       Given line 1                      textReveal — "45 km ahead" (live)
9.14       "75 km/hr" (car) + Given line 2   fadeIn + textReveal (live, matched)
12.50      "60 km/hr" (bus) + Given line 3   fadeIn + textReveal (live, matched)
15.9       Ghost car sweep                   preview catch-up, fades by 18.1
22.94      Live gap line + label             fadeIn
24.04      Car + Bus                         nudge forward together (shared base, gap unchanged)
26.72      Live gap                          shrinks 45→30 km over ~9.5s (ease:none)
35.28      Live gap label                    emphasize pulse ("fifteen kilometer")

[ PIN_TIME = 36.82 ]
36.82      Question + Illustration           🌟 pinFlow (0.8s glide) → pinned slots
36.82      Given → Given stack                🌟 morphToStack (0.8s), same beat as pin
37.9/38.1  Pinned car/bus icons              ambientLoop begins (offset phase) — runs to 48.12s

[ STEP CYCLE ]
37.62      SolutionCard "Step 1"             cardEnter
39.46–47.80 Step 1 formula/values/result     textReveal, word-level (Relative Speed = Car−Bus, =75−60, =15km/hr)
48.12      Step 1 → Step 1 stack             🌟 morphToStack (0.8s) + line-g-1 grows
48.92      SolutionCard "Step 2"             cardEnter
49.98–71.74 Step 2 unitary derivation        textReveal, word-level (45km gap, 1/15 hr, 45×1/15, =3 hours)

[ PHASE 3 — OPTIONS REVEAL ]
74.80      Step 2 → Step 2 stack             🌟 morphToStack (0.8s) + line-1-2 grows
74.80      Illustration fades, question       fadeOut(illus-pinned) + recenterForOptions
           recenters
75.6       options-reveal container          fadeIn
76.0       Option buttons A/B/C/D            optionsStagger (stagger 0.12s)
76.96      Correct option (A)                correctPulse
77.9       End fade                          fadeOut(#root > div), 1.2s
79.1       End                               Video complete
```

**Video duration:** 77.54s (matches `voiceover.wav` exactly); composition runs to ~79.1s with the end fade.
