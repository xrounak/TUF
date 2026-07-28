# Storyboard — Boats & Streams: "Downstream 24, Upstream 16 → Find Current"

Topic: Speed, Time and Distance · Question 8 · Voiceover duration: **117.94s**

---

## PART 1 — Narration Beat Analysis

| # | Timestamp (transcript.json) | Narration | Educational Purpose | Viewer Attention Focus | Visual Objective |
|---|---|---|---|---|---|
| 1 | 0.08–1.28 | "So welcome back again." | Warm open, series continuity | Full-screen question card rising in | Establish frame, no distraction |
| 2 | 1.72–14.27 | "Time for one more problem... downstream speed... 24 km/hr... upstream speed... 16 km/hr" | State the raw facts of the problem | Question card (numbers in blue), illustration beginning to build below it | Numbers 24 and 16 register visually before the algebra starts |
| 3 | 14.86–18.06 | "The question is asking us to find the speed of the current." | Frame the unknown | Boat + river scene assembling | Plant "current" as the object of interest |
| 4 | 18.44–28.04 | "let us assume... B kilometer per hour... speed of current is C kilometer per hour" | Define variables B (still-water boat speed) and C (current speed) | "B" badge pins to the boat; "C" badge pins to the river | Viewer maps B → boat, C → river before any motion starts |
| 5 | 28.48–33.78 | "let us understand downstream/upstream... river is flowing in this direction" | Set up the physical model | Flow arrows sweep in, pointing one fixed direction | Current's direction is fixed and visible for the rest of Phase 1 |
| 6 | 34.32–43.56 | "boat can move at B... river also flowing at C" | Reinforce that B and C are two independent, simultaneous speeds | Boat idles while B badge pulses, then arrows/C badge pulse | Sets up the "add or subtract" payoff that follows |
| 7 | 44.08–59.60 | "when boat moves in same direction... speeds get added... Downstream = B + C" | THE core downstream concept | Boat travels WITH the current (fast, long glide), a "+C" chip flies from the river into the boat's badge, forming "B + C" | Motion literally demonstrates addition — boat visibly speeds up |
| 8 | 59.60–65.92 | "opposite case... boat moves against the flow" | Transition to upstream | Boat brakes, flips to face the other way | Sell the pivot before the concept changes |
| 9 | 65.92–80.58 | "current tries to slow the boat down... subtracted... Upstream = B − C" | THE core upstream concept | Boat travels AGAINST the current (slow, short glide, rocking judder), a "−C" chip pulls away from the boat's badge, forming "B − C" | Motion demonstrates subtraction — boat visibly struggles/slows |
| 10 | 81.12–82.84 | "let us use the given values" | Bridge from concept to arithmetic | Scene holds, about to pin | Signals the pivot to solving |
| 11 | 83.44–94.96 | "downstream speed is 24... B+C=24... upstream is 16... B−C=16" | State the Given equations | Given card (center, pinned layout) | Reader sees both equations plainly before any algebra |
| 12 | 95.52–109.12 | "subtract the second equation from the first... B cancels... 2C = 8" | Step 1 — elimination algebra | Step 1 card | Show B cancelling is the key insight |
| 13 | 109.56–115.70 | "divide both sides by 2... C = 4... speed of current is 4 km/hr" | Step 2 — solve for C | Step 2 card | Deliver the final numeric answer |
| 14 | 116.04–117.94 | "the correct answer is option D" | Reveal | Options grid, D pulses green | Confirm against the four choices |

---

## PART 2 — Scene-by-Scene Storyboard

Design constraints in force throughout (per `_template/README.md` §4D.1): only `--primary #6373db`, `--primary-light #e2e5ff`, `--success #4eb85f`, `--topic #949494`, `--text #000000`, `--bg #FFFFFF`; only `QuestionCard`/`SerialNum`/`SolutionCard`/`SolutionStackCard`/`solutionChip`/`StepCircle`/`StackLine`/options-grid/`logo`/`topic-name`/`bottomStrip`/Illustration/Fraction; only the helpers in `animations.js`, called explicitly by name below. The illustration itself (river + boat + badges) is per-question custom markup/CSS, built from the user-supplied `illustration/boat-svgrepo-com.svg` and `illustration/wave-2-svgrepo-com.svg` (recolored — wave fill hex swapped from `#000000`→`#6373db`, plus a duplicated `wave-2-light.svg` recolored to `#e2e5ff` for a second, lighter wave row — straight hex find-replace only, no restructuring, per README §5C).

### SCENE 1 — Cold Open (0.0s – 3.6s)
**VOICEOVER:** "So welcome back again. Time for one more problem..."
**VISUAL OBJECTIVE:** Establish the question, hero-style.
**SCREEN LAYOUT:** `#q-full-card` centered horizontally, vertically lowered (per `apt.heroEnterLowered`'s "holds low, then rises" pattern) at `top:80px` sizing, containing the full question text with "24 km/hr", "16 km/hr" and "speed of the current" in `.num` blue.
**ON-SCREEN ELEMENTS:** QuestionCard (full), SerialNum badge ("Q").
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.6)` — card fades/scales in at 0.3s at lowered Y, rises to rest at 3.6s. SerialNum badge fades in at 0.8s at the same lowered Y (parallel tween mirroring the card), rises with it at 3.6s.
**CAMERA MOVEMENT:** None (static frame, motion is internal to elements).
**TRANSITIONS:** N/A (opening beat).
**EDUCATIONAL PURPOSE:** Anchor the problem statement before anything else competes for attention.
**VISUAL HIERARCHY:** QuestionCard > SerialNum > (empty illustration area, about to fill).
**ATTENTION MANAGEMENT:** Nothing else on screen yet — illustration hasn't started building.
**MOTION NOTES:** The lowered→rest rise is the only motion; it's timed to finish exactly as "problem" is spoken, so the card "settles" right as attention should shift down to the scene about to build.
**CONTINUITY FROM PREVIOUS SCENE:** N/A — this is the first scene.

### SCENE 2 — River + Boat Assemble, B and C Introduced (3.6s – 30.9s)
**VOICEOVER:** "...downstream speed of a boat is 24km/hr. Upstream speed...16km/hr. The question is asking us to find the speed of current. Now first, let us assume the speed of the boat in still water is B km/hr, and the speed of the current is C km/hr."
**VISUAL OBJECTIVE:** Build the river scene and attach the two variables to their physical referents.
**SCREEN LAYOUT:** `#illustration` (1500×280, centered under the pinned question's future slot) contains, top to bottom: an empty river channel that fills in, then the boat idling on it.
**ON-SCREEN ELEMENTS:**
- `#water-body` — a rounded `--primary-light` channel rectangle (1500×90, `border-radius:16px`), sitting at the illustration's vertical center.
- `#river-mask` — an `overflow:hidden` crop over the same rectangle, containing `#river-track-back` (the `wave-2-light.svg` row, 20 tiles, slower scroll — back layer) and `#river-track-front` (the `wave-2-svgrepo-com.svg` row, 20 tiles, faster scroll — front layer) for a two-layer parallax "chain of waves."
- `#boat-unit` — wrapper holding the recolored boat icon (already blue-hulled/white-decked from its own source palette, untouched) sitting with its hull overlapping the water's top edge, facing right.
- `#b-badge` ("B" pill, `--primary` background, white text) — attached above the boat, inside `#boat-unit` so it always travels with it.
- `#c-badge` ("C" pill, same style) — attached to a fixed point above the river, independent of the boat.
- `#flow-arrows` — three chevron shapes (CSS border-triangles, `--primary`), fixed above the river, all pointing right.
**ANIMATION DETAILS:**
- 3.6s: `#water-body` and `#river-mask` fade/scale in via `apt.cardEnter`.
- Immediately, both wave rows start their seamless scroll loops (see "riverFlow" helper in Animation Complexity Notes) and run, uninterrupted, for the rest of the video (through Phase 2/3 in their pinned-recap form) — the river must never freeze, per the brief.
- 4.2s: `apt.cardEnter(tl, "#boat-unit", 4.2)` — boat drops/scales onto the water, idling (no horizontal travel yet).
- Continuous from 4.2s: a small `ambientLoop`-style vertical bob (±4px, ~1.4s period) on the boat icon itself, so it never sits dead-still even while idling.
- 18.44s: `apt.cardEnter(tl, "#b-badge", 18.44)` — "B" pops in above the boat, timed to "the speed of the boat...is B".
- 22.36s: `apt.emphasize(tl, "#b-badge", 22.36)` — pulse on "B kilometer per hour".
- 24.68s: `apt.cardEnter(tl, "#c-badge", 24.68)` — "C" pops in above the river, timed to "speed of the current is C".
- 27.60s: `apt.emphasize(tl, "#c-badge", 27.60)` — pulse on "C kilometer per hour".
**CAMERA MOVEMENT:** None — static wide shot; all motion is internal (waves scrolling, boat bobbing).
**TRANSITIONS:** Continuous build, no hard cuts within the scene.
**EDUCATIONAL PURPOSE:** Get B and C physically anchored (boat = B, river = C) before any addition/subtraction happens, so Scene 3–4's payoff reads instantly.
**VISUAL HIERARCHY:** Boat + B badge (foreground, sharper) > river + C badge (midground) > flow arrows (background accents).
**ATTENTION MANAGEMENT:** Only one badge animates at a time (B first, then C) — no simultaneous competing reveals.
**MOTION NOTES:** The wave scroll is deliberately already running under the "let us assume" narration, even though nothing else moves yet — establishes early that the water itself is never static.
**CONTINUITY FROM PREVIOUS SCENE:** The question card has just settled into its resting hero position (from Scene 1's rise at 3.6s); the illustration begins filling in directly beneath it in the same frame, no cut.

### SCENE 3 — Flow Direction Fixed (30.9s – 44.08s)
**VOICEOVER:** "Now let us understand what downstream and upstream mean. Imagine the river is flowing in this direction. The boat itself can move at B km/hr in still water. The river is also flowing at C km/hr."
**VISUAL OBJECTIVE:** Establish that the current has one fixed direction, independent of which way the boat later travels.
**SCREEN LAYOUT:** Same river/boat scene, arrows now become the focal point.
**ON-SCREEN ELEMENTS:** `#flow-arrows` (already on screen from Scene 2, now emphasized).
**ANIMATION DETAILS:**
- 31.52s: `apt.emphasize(tl, "#flow-arrows", 31.52)` — the three chevrons pulse/scale once, timed to "the river is flowing in this direction."
- 34.32s: `apt.emphasize(tl, "#b-badge", 34.32)` — second pulse on B, reinforcing "boat can move at B in still water."
- 40.20s: `apt.emphasize(tl, "#c-badge", 40.20)` and a second, stronger pulse on `#flow-arrows` at the same time — reinforcing "river also flowing at C."
- Waves keep scrolling, boat keeps bobbing throughout — no pause.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Continuous from Scene 2.
**EDUCATIONAL PURPOSE:** Prevents the common confusion of "downstream/upstream changes the river's direction" — the river's flow is constant; only the boat's heading changes.
**VISUAL HIERARCHY:** Flow arrows momentarily promoted to primary focus during their pulse, then settle back to background-accent level.
**ATTENTION MANAGEMENT:** One pulse at a time, sequenced with the narration's own B-then-C ordering.
**MOTION NOTES:** This scene is the calm beat before Scene 4's big payoff — deliberately less busy than Scene 2, so the downstream launch reads as a clear step up in energy.
**CONTINUITY FROM PREVIOUS SCENE:** Boat and badges are exactly where Scene 2 left them; only the flow arrows and badges pulse — nothing repositions.

### SCENE 4 — DOWNSTREAM: Speeds Add (44.08s – 59.60s)
**VOICEOVER:** "Now when the boat moves in the same direction as the river, both the boat and the current help each other, so their speeds get added. That is why downstream speed is equal to speed of the boat in still water plus speed of the current, or simply B plus C."
**VISUAL OBJECTIVE:** The single most important visual beat in Phase 1 — literally show B and C combining into a faster boat.
**SCREEN LAYOUT:** Boat travels left→right across the full 1500px illustration width, in the same direction as the flow arrows.
**ON-SCREEN ELEMENTS:** `#boat-unit` (traveling), `#b-badge` (traveling with it), `#c-badge` (stays fixed at its river position), a new `#merge-chip` ("+C", small pill) that flies from `#c-badge`'s position to the boat, a `#formula-downstream` label ("Downstream = B + C") that fades in above the scene, wake `.motion-line` trio behind the boat (facing left, since boat now moves right), 2 `.skid`-style ripple marks at water level.
**ANIMATION DETAILS:**
- 44.08s: `tl.to("#boat-unit", {x: 1000, duration: 15.5, ease: "power1.out"}, 44.08)` — boat glides right across ~1000px in 15.5s (fast, ~64.5px/s), i.e. its OWN glide is faster than the return upstream leg in Scene 6, selling "current is helping."
- 44.08s (parallel): a bounded wake-flicker (reusing the `motionLines`-style bounded-repeat technique — 3 short trailing dashes behind the boat, opacity fromTo 0↔0.8, repeat computed for the 44.08–59.60 window) runs the whole glide.
- 46.82s: `tl.to("#merge-chip", {x: [boat's live x-delta], opacity:1, duration: 0.6, ease:"power2.out"}, 46.82)` — the "+C" chip visibly flies from the fixed C badge toward the traveling boat, timed to "both the boat and the current help each other."
- 49.70s: chip lands on/merges into `#b-badge`, `#b-badge`'s text crossfades from "B" to "B + C" (a plain 0.25s opacity swap of two stacked spans, matching the project's existing text-crossfade idiom used by `apt.morphToStack`), timed to "so their speeds get added."
- 52.42s: `apt.cardEnter(tl, "#formula-downstream", 52.42)` — "Downstream = B + C" label fades/scales in above the boat's travel path, timed to "downstream speed is equal to...".
- 57.54s: `apt.emphasize(tl, "#formula-downstream", 57.54)` — pulse on "or simply B plus C."
- River scroll and boat bob continue uninterrupted underneath all of the above.
**CAMERA MOVEMENT:** None (the boat itself provides all the horizontal motion within the fixed frame).
**TRANSITIONS:** Continuous from Scene 3 — the boat simply starts moving; no cut.
**EDUCATIONAL PURPOSE:** This is the concrete, motion-based proof of "downstream = B + C" — the abstract formula and the visible boat speed-up land in the same few seconds.
**VISUAL HIERARCHY:** Traveling boat + merging chip (primary focus) > formula label (secondary, reinforcing) > river underneath (ambient).
**ATTENTION MANAGEMENT:** The chip-merge animation and the formula label are sequenced ~6s apart (46.82s vs 52.42s) so they don't compete — chip merge lands and settles before the formula label claims attention.
**MOTION NOTES:** The boat glide duration (15.5s) is deliberately matched 1:1 to this scene's narration span (44.08→59.60), so the boat visibly arrives at the right edge exactly as "or simply B plus C" finishes.
**CONTINUITY FROM PREVIOUS SCENE:** The boat is exactly where Scene 3 left it (idling at its Scene-2 starting position); it launches into motion from that same spot with no repositioning jump.

### SCENE 5 — Turn (59.60s – 65.92s)
**VOICEOVER:** "Now let us look at the opposite case. When the boat moves against the flow of the river,"
**VISUAL OBJECTIVE:** Sell the pivot from downstream to upstream before the concept flips.
**SCREEN LAYOUT:** Boat at the right edge of the illustration, about to reverse.
**ON-SCREEN ELEMENTS:** `#boat-unit`, `#b-badge` (still reading "B + C" from Scene 4).
**ANIMATION DETAILS:**
- 59.60s: `tl.to("#boat-unit", {scaleX:1.06, scaleY:0.94, duration:0.2, ease:"power2.out", yoyo:true, repeat:1}, 59.60)` — a brake-squash, same idiom as the existing bus-stop reference composition's stop beat.
- 59.85s: `tl.to("#boat-unit", {scaleX:-1, duration:0.5, ease:"power2.inOut"}, 59.85)` — the boat visually flips to face left (motion-lines/wake, being children of `#boat-unit`, flip orientation automatically with it).
- 60.4s: `#b-badge`'s text crossfades from "B + C" back to plain "B" (0.25s), timed to "opposite case" — the boat is between currents, momentarily just itself again.
- River scroll/bob continue uninterrupted.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Brake-squash + flip reads as a distinct beat, but no hard cut — same continuous frame.
**EDUCATIONAL PURPOSE:** Gives the "opposite case" narration a literal visual match instead of a silent hold.
**VISUAL HIERARCHY:** The flip itself is the only focal event.
**ATTENTION MANAGEMENT:** Single, short (0.5s) event — doesn't linger.
**MOTION NOTES:** The squash-then-flip sequence borrows the exact easing/duration values already validated in [q7](../q7/index.html)'s bus-stop brake beat, applied here to the boat.
**CONTINUITY FROM PREVIOUS SCENE:** Boat is at the exact x-position Scene 4 left it at (right edge, x:1000 offset) — the flip happens in place, no jump.

### SCENE 6 — UPSTREAM: Speeds Subtract (65.92s – 80.58s)
**VOICEOVER:** "...the current tries to slow the boat down, so the speed of the current gets subtracted from the speed of the boat. That is why upstream speed is equal to speed of the boat in still water minus speed of the current, or simply B minus C."
**VISUAL OBJECTIVE:** Mirror Scene 4's payoff, but for subtraction — same technique, opposite direction, visibly slower and rockier.
**SCREEN LAYOUT:** Boat travels right→left, covering LESS distance than Scene 4's glide despite a similar time span.
**ON-SCREEN ELEMENTS:** `#boat-unit` (now facing left), `#b-badge`, `#c-badge` (still fixed at river), a `#resist-chip` ("−C", small pill) that visibly pulls AWAY from the boat's badge toward the river (opposite direction of Scene 4's merge), `#formula-upstream` label ("Upstream = B − C").
**ANIMATION DETAILS:**
- 65.92s: `tl.to("#boat-unit", {x: 500, duration: 14.7, ease: "power1.inOut"}, 65.92)` — note the boat's wrapper is already flipped (`scaleX:-1` from Scene 5) and its x origin is Scene 5's end position (x:1000), so animating x down to 500 moves it visibly LEFT by only 500px in nearly the same 14.7s Scene-4 took to cover 1000px — half the distance, same time, i.e. visibly slower progress "against the current."
- Layered on the SAME element but a DIFFERENT property (so no tween conflict): a bounded rocking judder, `tl.fromTo("#boat-unit", {rotation:-2}, {rotation:2, duration:0.35, ease:"sine.inOut", yoyo:true, repeat: <computed for 65.92–80.58 window>}, 65.92)` — sells "the current tries to slow the boat down" as a continuous, visible fight rather than a smooth glide.
- 68.62s: `tl.to("#resist-chip", {...pulls from badge toward river...}, 68.62)`, timed to "the speed of the current gets subtracted."
- 71.96s: `#b-badge` text crossfades from "B" to "B − C" (0.25s), timed to end of "...from the speed of the boat."
- 73.54s: `apt.cardEnter(tl, "#formula-upstream", 73.54)` — "Upstream = B − C" label fades in, timed to "upstream speed is equal to...".
- 79.38s: `apt.emphasize(tl, "#formula-upstream", 79.38)` — pulse on "or simply B minus C."
- River scroll/bob continue uninterrupted (the water itself doesn't slow down — only the boat struggles against it, reinforcing that C is constant).
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Continuous from Scene 5.
**EDUCATIONAL PURPOSE:** The mirror-image of Scene 4 — same B/C mechanism, opposite arithmetic, driven home by the boat visibly moving slower and rockier rather than just a label change.
**VISUAL HIERARCHY:** Traveling (struggling) boat + resist-chip (primary) > formula label (secondary) > river (ambient, unchanged pace — deliberately contrasts with the boat's slower motion).
**ATTENTION MANAGEMENT:** Same 6–8s spacing discipline as Scene 4 between the chip event and the formula label.
**MOTION NOTES:** The rotation-judder and the x-glide are two separate GSAP properties on the same element, so they compose without conflict — this is the "keep animating, never static" instruction's clearest expression: even mid-narration-explanation, the boat is never simply sitting still.
**CONTINUITY FROM PREVIOUS SCENE:** Boat resumes from exactly where Scene 5's flip left it (x:1000, now facing left) and travels from there — no repositioning cut.

### SCENE 7 — Bridge to Arithmetic (80.58s – 82.0s)
**VOICEOVER:** "Now let us use the given values."
**VISUAL OBJECTIVE:** Brief settle before the pin.
**SCREEN LAYOUT:** Boat holds at its Scene 6 end position (x:500 from origin, i.e. left-of-center).
**ON-SCREEN ELEMENTS:** Full scene as left by Scene 6.
**ANIMATION DETAILS:** No new tweens — river scroll/boat bob continue; this is the held beat right before `PIN_TIME`.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Leads directly into Scene 8's pin-flow.
**EDUCATIONAL PURPOSE:** A half-beat of quiet lets the viewer mentally close the "concept" chapter before "arithmetic" begins.
**VISUAL HIERARCHY:** Unchanged from Scene 6.
**ATTENTION MANAGEMENT:** Nothing new competes for attention here — intentional breathing room.
**MOTION NOTES:** River/bob ambient motion is the only thing moving — never a fully frozen frame.
**CONTINUITY FROM PREVIOUS SCENE:** Direct hold of Scene 6's final frame.

### SCENE 8 — PIN FLOW + Given (82.0s – 95.52s)
**VOICEOVER:** "The downstream speed is 24, so B plus C is equal to 24. The upstream speed is sixteen, so B minus C is equal to sixteen. Now we need to find the speed of the current, which is C."
**VISUAL OBJECTIVE:** Transition to solving mode; state the two equations plainly.
**SCREEN LAYOUT:** Question glides to its pinned top slot (`#q-pinned`, left:385px top:30px width:1275px); the full illustration glides into a small pinned recap (`#illus-pinned`, left:280px top:190px width:1300px height:150px) that keeps a MINIATURE version of the same river+boat running continuously; the Given `SolutionCard` opens center.
**ON-SCREEN ELEMENTS:** `#q-pinned`, `#illus-pinned` (containing `#river-track-mini` — a short two-layer wave loop — and a small bobbing boat icon plus the label "B+C=24 · B−C=16"), `#card-given` (chip "Given").
**ANIMATION DETAILS:**
- `PIN_TIME = 82.0`: `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 82.0)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 82.0)` — real glide, not a fade swap. `apt.fadeOut(tl, "#serial-num", 82.0, 0.5)`.
- From `PIN_TIME + 1 = 83.0` onward, THROUGH `RECENTER_TIME` (115.9s, i.e. spanning the entire Given/Step1/Step2 phase): `#river-track-mini`'s seamless scroll loop keeps running (same bounded-repeat technique as the full-size version, just a shorter tile/period so it still reads clearly at the smaller size) and `apt.ambientLoop(tl, "#illus-pinned-icon", 83.0, 115.9)` bobs the small boat — this is the concrete fulfillment of "keep animating while writing the solution steps, never static."
- `GIVEN_TIME = 83.44`: `apt.cardEnter(tl, "#card-given .solution-card", 83.44)`.
- `apt.textReveal(tl, "#card-given .math")` — reveals:
  - line-level `data-t="83.44"`: "Downstream Speed = <span class='hi'>B + C</span>"
  - word-level `data-t="85.78"`/`"86.5"` etc.: "<span class='hi'>B + C</span> = <span class='ans'>24</span>"
  - line-level `data-t="88.26"`: "Upstream Speed = <span class='hi'>B − C</span>"
  - word-level around `92.5`–`94.5`: "<span class='hi'>B − C</span> = <span class='ans'>16</span>"
**CAMERA MOVEMENT:** The pin-flow itself is the only "camera-like" move (question+illustration gliding to their pinned slots).
**TRANSITIONS:** `apt.pinFlow`'s real glide (0.8s), not a cut.
**EDUCATIONAL PURPOSE:** Converts the visual/conceptual downstream/upstream demo directly into the two equations that will actually be solved.
**VISUAL HIERARCHY:** Given card (center, primary focus) > pinned question (top, secondary) > pinned river recap (still visibly alive, tertiary/ambient — never fully static).
**ATTENTION MANAGEMENT:** The two given facts reveal one at a time (downstream eq first, then upstream eq), matching the narration order exactly.
**MOTION NOTES:** This is the scene where the "no render step should look static" instruction is most at risk of being ignored (long stretch of card-reading) — the mini river/boat loop is what keeps it alive.
**CONTINUITY FROM PREVIOUS SCENE:** The full illustration is still mid-glide into its pinned slot as the Given card opens — same continuous motion carrying over, not a hard reset.

### SCENE 9 — STEP 1: Eliminate B (95.52s – 109.12s)
**VOICEOVER:** "So let us subtract the second equation from the first. On the left side, B plus C minus B minus C. The B terms cancel each other, so we are left with 2C. On the right side, 24 minus 16, which is 8. So 2C is equal to 8."
**VISUAL OBJECTIVE:** Show the elimination algebra step by step.
**SCREEN LAYOUT:** Given card morphs to the left stack; Step 1 `SolutionCard` opens center.
**ON-SCREEN ELEMENTS:** `#stack-given` (with `.step-circle` "G"), `#card-step1`.
**ANIMATION DETAILS:**
- 95.52s: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 95.52)`.
- 95.52s: `apt.cardEnter(tl, "#card-step1 .solution-card", 95.52)`.
- `apt.textReveal(tl, "#card-step1 .math")` reveals:
  - line `data-t="95.52"`: "Subtract eq (2) from eq (1)"
  - line `data-t="98.60"`: "On the left side:"
  - word-level around `99.90–102.5`: "(B + C) − (B − C)"
  - line `data-t="~103.2"` (mid-phrase, right as "cancel each other" is spoken): "→ <span class='ans'>2C</span>"
  - word-level `data-t="105.32"` on: "24 − 16 = <span class='ans'>8</span>"
  - line `data-t="107.74"`: "2C = <span class='ans'>8</span>"
- Pinned river/boat recap continues its loop, unbroken, through this entire scene.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** `apt.morphToStack` (0.8s box+text crossfade).
**EDUCATIONAL PURPOSE:** The "B cancels" insight is the crux of the whole solve method — isolate it visually as its own reveal beat, distinct from the surrounding arithmetic.
**VISUAL HIERARCHY:** Step 1 card (center, active) > stack-given (left, archived) > pinned recap (ambient).
**ATTENTION MANAGEMENT:** Five sequential reveals, matched 1:1 to the narration's own pacing — no two reveals overlap.
**MOTION NOTES:** River keeps flowing; boat keeps bobbing.
**CONTINUITY FROM PREVIOUS SCENE:** Given card is still fully visible and readable up until the moment it starts its morph — no early fade.

### SCENE 10 — STEP 2: Solve for C (109.56s – 115.9s)
**VOICEOVER:** "Dividing both sides by 2, we get C is equal to 4. So the speed of the current is 4 kilometer per hour."
**VISUAL OBJECTIVE:** Deliver the final numeric answer.
**SCREEN LAYOUT:** Step 1 morphs to stack; Step 2 `SolutionCard` opens center.
**ON-SCREEN ELEMENTS:** `#stack-step1` (`.step-circle` "1"), `#line-g-1` connector, `#card-step2`.
**ANIMATION DETAILS:**
- 109.56s: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 109.56)`; `apt.stackLineGrow(tl, "#line-g-1", 109.56)`.
- 109.56s: `apt.cardEnter(tl, "#card-step2 .solution-card", 109.56)`.
- `apt.textReveal(tl, "#card-step2 .math")` reveals:
  - line `data-t="109.56"`: "Divide both sides by 2"
  - line `data-t="111.6"`: "<span class='ans'>C = 4</span>"
  - line `data-t="112.70"`: "Speed of Current = <span class='ans'>4 km/hr</span>"
- Pinned river/boat recap still looping.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** `apt.morphToStack`.
**EDUCATIONAL PURPOSE:** Isolate the final division step and the resulting answer as its own clean beat.
**VISUAL HIERARCHY:** Step 2 card (center) > stacks (left) > pinned recap (ambient).
**ATTENTION MANAGEMENT:** Three reveals, well spaced (109.56 / 111.6 / 112.70).
**MOTION NOTES:** River/boat still animating — this is the last stretch before Phase 3, so it must not go static right before the payoff.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1 remains fully legible until its own morph fires — no premature fade.

### SCENE 11 — Options Reveal (115.9s – 117.94s)
**VOICEOVER:** "...Hence, the correct answer is option D."
**VISUAL OBJECTIVE:** Confirm the answer against all four choices.
**SCREEN LAYOUT:** Step 2 morphs to stack; pinned question recenters; illustration recap clears; options grid (2×2) appears.
**ON-SCREEN ELEMENTS:** `#stack-step2` (`.step-circle` "2"), `#line-1-2` connector, `#options-reveal` (A: 3, B: 5, C: 6, D: 4 — correct).
**ANIMATION DETAILS:**
- 115.9s: `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 115.9)`; `apt.stackLineGrow(tl, "#line-1-2", 115.9)`.
- 115.9s: `apt.fadeOut(tl, "#illus-pinned", 115.9)` (only clean stopping point for the river/boat recap — everything else has been continuously animating up to this instant); `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 115.9)`.
- 116.3s: `apt.fadeIn(tl, "#options-reveal", 116.3)`.
- 116.6s: `apt.optionsStagger(tl, ".opt-btn", 116.6)`.
- 117.5s: `apt.correctPulse(tl, ".opt-btn.correct", 117.5)`, timed to land on "option D."
- 118.6s: `apt.fadeOut(tl, "#root > div", 118.6, 1.2)` — END FADE.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** `apt.morphToStack` + `apt.recenterForOptions`.
**EDUCATIONAL PURPOSE:** Standard close — verify the derived answer (4 km/hr) against the given options.
**VISUAL HIERARCHY:** Options grid (primary) > stack column (secondary, still visible) > pinned question (tertiary).
**ATTENTION MANAGEMENT:** Stagger-then-pulse, standard two-beat close.
**MOTION NOTES:** This is the one deliberate point where continuous ambient motion (the river recap) is allowed to stop — it's replaced by the options-reveal's own motion (stagger + pulse), so the frame is never actually static, just handing off which element is animating.
**CONTINUITY FROM PREVIOUS SCENE:** Step 2 is fully read before its morph fires; the illustration recap's fade-out is the first "stop" in the entire video, and it's immediately replaced by the options grid's own entrance motion in the same beat.

---

## PART 3 — Asset List Required

| Asset | Source | Notes |
|---|---|---|
| `illustration/boat-svgrepo-com.svg` | User-supplied | Untouched — already blue-hull/white-deck/dark-grey, close enough to the palette that no recolor was needed per §5C |
| `illustration/wave-2-svgrepo-com.svg` | User-supplied | Recolored: `.st0{fill:#000000}` → `.st0{fill:#6373db}` (straight hex swap only) — front (faster) wave row |
| `illustration/wave-2-light.svg` | Duplicated from the above, recolored to `#e2e5ff` | Back (slower) wave row — parallax depth layer |
| `design-system.css`, `animations.js`, `assets/` | Copied from `_template/` | Per README §5B |

No new colors, fonts, or template components introduced — all illustration CSS (river channel, boat wrapper, badges, chips, formula labels, flow arrows) is per-question custom markup as permitted by design.md's "Illustration" section.

---

## PART 4 — Animation Complexity Notes

- **Seamless wave loop ("riverFlow" pattern):** each wave row is a flex strip of `wave-2*.svg` tiles, built as TWO identical copies of one repeating tile-width back to back (so tile-width and 2×tile-width look visually identical). A GSAP `fromTo(x: 0 → -tileWidth)` tween with `ease:"none"` and a **finite, computed repeat count** (never `-1`) restarts seamlessly at each cycle boundary — same bounded-repeat philosophy as `apt.ambientLoop`, just applied to a linear conveyor instead of a yoyo bob, so it stays a pure function of absolute time (seek-safe) across a run spanning nearly the entire 117.94s video.
- **Two independent wave layers** (`wave-2-light.svg` slower/back, `wave-2-svgrepo-com.svg` faster/front) run on different tile-widths/periods for a simple parallax depth effect — no new helper needed in `animations.js`, just two calls to the same local `riverFlow()` function defined inline in the composition's own `<script>` block (same pattern `q7/index.html` already uses for its local `motionLines()` helper).
- **Boat direction reversal:** `scaleX:-1` on `#boat-unit` flips the boat AND everything nested inside it (motion-lines, wake) in one transform — no separate flip logic needed for the child elements.
- **Two properties, one element, no conflict:** the upstream leg's "struggle" reads as both (a) a straight-line `x` tween covering less distance in the same time as the downstream leg, and (b) an independent bounded `rotation` oscillation layered on the same `#boat-unit` — GSAP composes separate properties on one element without collision, so this needs no extra wrapper.
- **B/C badge text swaps** ("B" → "B + C" → "B" → "B − C") use the same plain 0.25s opacity-crossfade idiom `apt.morphToStack` already uses internally for its box↔text separation — implemented as two stacked `<span>`s inside the badge, only one visible at a time via opacity, not a new helper.
- **Pinned recap never idles:** unlike the reference `q7` composition (single static-icon + label recap), this question's pinned illustration keeps its own miniature wave loop and boat bob running continuously from `PIN_TIME+1` all the way to `RECENTER_TIME` (a ~33s span covering the entire Given/Step1/Step2 phase) — this is the concrete build-out of the "don't be static, keep animating while writing solution steps" instruction.
- **Only one true stop:** the illustration recap's fade-out at 115.9s (Scene 11) is the sole point where continuous ambient motion is allowed to end, and it's immediately superseded by the options-reveal's own stagger/pulse animation in the same instant — the frame is never left without something moving.

---

## PART 5 — Master Timeline Overview

```
TIME (s)   ELEMENT                          WHAT HAPPENS
─────────  ───────────────────────────────  ─────────────────────────────────
0.0        Background + bottomStrip+logo    Always visible
0.3        QuestionCard                     heroEnterLowered — fades/scales in low
0.8        SerialNum                        pops in low, mirrors card
3.6        QuestionCard + SerialNum         rise to resting position
3.6        River (2-layer wave loop)        seamless scroll begins — never stops until 115.9s
4.2        Boat                             drops onto water, idle bob begins — never stops until 115.9s
18.44      "B" badge                        cardEnter on boat
22.36      "B" badge                        emphasize pulse
24.68      "C" badge                        cardEnter on river
27.60      "C" badge                        emphasize pulse
31.52      Flow arrows                      emphasize pulse ("this direction")
34.32      "B" badge                        emphasize pulse
40.20      "C" badge + flow arrows          emphasize pulse (both)
44.08      Boat                             glides RIGHT 1000px over 15.5s (downstream)
46.82      "+C" chip                        flies from C-badge to boat
49.70      "B" badge                        text swap → "B + C"
52.42      "Downstream = B + C" label       cardEnter
57.54      "Downstream = B + C" label       emphasize pulse
59.60      Boat                             brake-squash
59.85      Boat                             flips to face left (scaleX -1)
60.40      "B + C" badge                    text swap → "B"
65.92      Boat                             glides LEFT 500px over 14.7s (upstream) + rotation judder
68.62      "−C" chip                        pulls from boat toward river
71.96      "B" badge                        text swap → "B − C"
73.54      "Upstream = B − C" label          cardEnter
79.38      "Upstream = B − C" label          emphasize pulse
80.58–82.0 Scene holds                      brief settle before pin

[ PIN_TIME = 82.0 ]
─────────  ───────────────────────────────  ─────────────────────────────────
82.0       Question + Illustration          🌟 pinFlow — real glide to pinned slots
83.0       Pinned river/boat recap          mini seamless loop + bob begins — runs to 115.9s

[ GIVEN_TIME = 83.44 ]
─────────  ───────────────────────────────  ─────────────────────────────────
83.44      Given card                       cardEnter (center)
83.44–94.96 Given card .math                 textReveal (downstream eq, then upstream eq)

[ STEP CYCLE ]
─────────  ───────────────────────────────  ─────────────────────────────────
95.52      Given → Given stack               🌟 morphToStack
95.52      Step 1 card                       cardEnter
95.52–109.12 Step 1 .math                     textReveal (elimination algebra → 2C=8)
109.56     Step 1 → Step 1 stack             🌟 morphToStack + stackLineGrow (G→1)
109.56     Step 2 card                       cardEnter
109.56–112.70 Step 2 .math                    textReveal (÷2 → C=4 → 4 km/hr)

[ PHASE 3 ]
─────────  ───────────────────────────────  ─────────────────────────────────
115.9      Step 2 → Step 2 stack            🌟 morphToStack + stackLineGrow (1→2)
115.9      Pinned illustration recap        fadeOut (the ONE deliberate stop)
115.9      Pinned question                  recenterForOptions
116.3      Options grid                     fadeIn
116.6      Option buttons                   optionsStagger
117.5      Correct option (D)               correctPulse
118.6      Everything                       END FADE (1.2s)
```

**Video duration:** 117.94s (matches `voiceover.wav` exactly).
