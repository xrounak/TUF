# Storyboard — Boats & Streams: "Boat 18, Stream 3, 84 km Downstream → Find Time"

Topic: Speed, Time and Distance · Question 9 · Voiceover duration: **79.22s**

Built as a close sibling of [q8](../q8/storyboard.md) — same illustration assets (`boat-svgrepo-com.svg`, `wave-2-svgrepo-com.svg`, `wave-2-light.svg`), same river/boat illustration language, same badge-crossfade + flying-chip technique, same Given→Step→Step→Options card structure. The two structural differences from q8: (1) q9's boat only ever travels **downstream** (no upstream leg, no turn/flip, no B/C variables) since the question gives concrete numbers (18, 3, 84) up front and the arithmetic itself — 18+3=21, then 84÷21=4 — is spoken directly, so the badge crossfades all the way to the real number inside Phase 1; (2) the **Given card opens early, at 5.0s**, compact and positioned in the gap between the question card and the illustration (not post-pin like q8) — each fact (Boat/Stream/Distance) reveals in sync with the exact instant it's spoken (5.0s / 9.30s / 13.88s), then the same card simply stays in its fixed slot through the rest of Phase 1 and the pin, morphing into the left stack at STEP1_TIME exactly like any other card. The derived "Downstream = 21" fact is deliberately left out of this early Given card (not yet known at 5s) and only appears via the illustration's own badge crossfade and the archived stack-card summary.

---

## PART 1 — Narration Beat Analysis

| # | Timestamp (transcript.json) | Narration | Educational Purpose | Viewer Attention Focus | Visual Objective |
|---|---|---|---|---|---|
| 1 | 0.10–2.90 | "So welcome back again. Time for one more problem." | Warm open, series continuity | Full-screen question card rising in | Establish frame, no distraction |
| 2 | 3.28–8.76 | "we are given that the speed of the boat in still water is 18 km/hr" | State the boat's own speed | Illustration assembling; boat badge shows "18" | Boat = 18 registers before anything else |
| 3 | 9.30–11.66 | "The speed of the stream is 3 km/hr" | State the stream's speed | Stream badge pops in above the river showing "3" | Stream = 3 registers as a separate, independent quantity |
| 4 | 12.16–15.38 | "The boat has to travel 84 km downstream" | State the distance | A "Distance = 84 km" given-mini chip fades in | Plant the distance fact before the goal is even stated |
| 5 | 15.80–18.80 | "The question is asking us to find the time taken for this journey" | Frame the unknown | A "Find: Time = ?" target label appears | Viewer knows exactly what's being solved for |
| 6 | 19.16–22.38 | "Now, before solving the problem, let us understand this" | Bridge to the concept | Flow arrows fade in above the river | Signals a short concept detour before arithmetic |
| 7 | 22.74–30.10 | "When a boat moves downstream, it moves in the same direction as the flowing water... both the boat and stream moving in the same direction" | Core downstream concept, part 1 | Boat begins a slow demonstrative glide with the flow arrows | Motion literally matches the words — boat moves the same way the arrows point |
| 8 | 30.50–38.80 | "the stream helps the boat move faster... for downstream movement, we always add the speed of the stream to the speed of the boat" | Core downstream concept, part 2 | "Downstream Speed = Boat + Stream" formula tag fades in above the gliding boat | Concept lands as a plain-language formula before any numbers substitute in |
| 9 | 39.24–40.72 | "Be very sure about this rule" | Guardrail / common-mistake style emphasis | Formula tag pulses | Flags this as the one rule most easily gotten backwards |
| 10 | 41.28–45.72 | "Downstream speed is equal to speed of boat in still water plus speed of stream" | Restate the rule in full, formally | Formula tag holds, fully legible | Locks in the rule before numbers are plugged in |
| 11 | 46.12–47.78 | "Now let us find the downstream speed" | Bridge into arithmetic | Boat continues its glide | Signals the switch from concept to computation |
| 12 | 48.26–54.62 | "Downstream speed is equal to 18 plus 3. This gives us 21 km/hr" | THE arithmetic payoff | "+3" chip flies from the stream badge into the boat's badge; badge crossfades 18 → 21 | Motion-based proof that 18 + 3 really becomes 21, not just a stated fact |
| 13 | 55.08–56.36 | "Now this part is completed" | Settle beat before the pin | Boat holds at rest | Half-beat of quiet closes the "concept" chapter |
| 14 | 56.86–61.84 | "Since we know the distance and the speed, we can find the time. We know the formula" | Bridge + restate what's now known | Given card (pinned layout) opens, restating Boat=18, Stream=3, Downstream=21, Distance=84 | Reader sees every known value collected in one place before the new formula appears |
| 15 | 62.38–66.42 | "Time is equal to distance divided by speed. Putting the values" | Step 1 — state the time formula | Step 1 card | Formula appears before numbers substitute in, same discipline as the downstream rule |
| 16 | 66.90–69.46 | "time is equal to 84 divided by 21" | Step 1 continued — substitute numbers | Step 1 card, second reveal line | Numbers land inside the already-stated formula |
| 17 | 69.90–76.02 | "After simplifying this, we get four hours. So the boat will take four hours to travel 84 km downstream" | Step 2 — deliver and recap the final answer | Step 2 card | Final numeric answer, then a plain-English recap of the whole journey |
| 18 | 76.34–79.22 | "Hence, the correct answer is option D" | Reveal | Options grid, D pulses green | Confirm against the four choices |

---

## PART 2 — Scene-by-Scene Storyboard

Design constraints in force throughout (per `_template/README.md` §4D.1): only `--primary #6373db`, `--primary-light #e2e5ff`, `--success #4eb85f`, `--topic #949494`, `--text #000000`, `--bg #FFFFFF`; only `QuestionCard`/`SerialNum`/`SolutionCard`/`SolutionStackCard`/`solutionChip`/`StepCircle`/`StackLine`/options-grid/`logo`/`topic-name`/`bottomStrip`/Illustration/Fraction; only the helpers in `animations.js`, called explicitly by name below. The illustration (river + boat + badges) is per-question custom markup/CSS, reusing the exact same `illustration/boat-svgrepo-com.svg`, `illustration/wave-2-svgrepo-com.svg` and `illustration/wave-2-light.svg` files copied verbatim from [q8](../q8/illustration/) (untouched — already correctly colored, no re-recolor needed).

### SCENE 1 — Cold Open (0.0s – 3.6s)
**VOICEOVER:** "So welcome back again. Time for one more problem."
**VISUAL OBJECTIVE:** Establish the question, hero-style — identical technique to q8 Scene 1.
**SCREEN LAYOUT:** `#q-full-card` centered horizontally, vertically lowered (`apt.heroEnterLowered`) at `top:80px`, containing the question text with "18 km/hr", "3 km/hr", "84 km" and "time" in `.num` blue.
**ON-SCREEN ELEMENTS:** QuestionCard (full), SerialNum badge ("Q").
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.6)` — card fades/scales in at 0.3s at lowered Y, rises to rest at 3.6s. SerialNum badge fades in at 0.8s at the same lowered Y, rises with it at 3.6s.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** N/A (opening beat).
**EDUCATIONAL PURPOSE:** Anchor the problem statement before anything else competes for attention.
**VISUAL HIERARCHY:** QuestionCard > SerialNum > (empty illustration area, about to fill).
**ATTENTION MANAGEMENT:** Nothing else on screen yet.
**MOTION NOTES:** The lowered→rest rise is the only motion, timed to finish exactly as "problem" is spoken.
**CONTINUITY FROM PREVIOUS SCENE:** N/A — first scene.

### SCENE 2 — River + Boat Assemble, Givens Introduced (3.6s – 15.38s)
**VOICEOVER:** "...speed of the boat in still water is 18 km/hr. The speed of the stream is 3 km/hr. The boat has to travel 84 km downstream."
**VISUAL OBJECTIVE:** Build the river scene and attach each given number to its physical referent as it's spoken.
**SCREEN LAYOUT:** `#illustration` (1500×280, same footprint as q8) — river channel fills in, boat drops onto it, badges pop in with real numbers (not letters, since q9 gives concrete values from the start).
**ON-SCREEN ELEMENTS:**
- `#water-fill` / `#river-scene` — identical `--primary-light` channel (1500×90, `border-radius:16px`) to q8.
- `#river-track-back` / `#river-track-front` — same two-layer parallax wave scroll as q8, same tile counts/widths.
- `#boat-unit` — the same `boat-svgrepo-com.svg`, untouched, facing right.
- `#boat-badge` ("18" pill, `--primary` background) — attached above the boat, travels with it.
- `#stream-badge` ("3" pill, same style) — fixed above the river at top:-20 (independent of the boat), the lowest of the three label rows above the illustration.
- `#card-given` — the compact Given `SolutionCard` (see Scene 2A below) — opens in parallel with this scene, not a separate given-mini chip.
**ANIMATION DETAILS:**
- 3.6s: `apt.cardEnter(tl, "#river-scene", 3.6)`.
- Immediately, both wave rows start their seamless scroll loops and run uninterrupted through the rest of the video (through the Phase 2 pinned recap) — the river never freezes.
- 3.9s: `apt.cardEnter(tl, "#boat-unit", 3.9)` — boat drops/scales onto the water, idling.
- Continuous from 3.9s: a small ambient vertical bob (±5px, ~1.6s period) on the boat icon.
- 4.2s: `apt.cardEnter(tl, "#boat-badge", 4.2)` — "18" pops in above the boat, timed to "18 km/hr" ending at 8.76.
- 9.3s: `apt.cardEnter(tl, "#stream-badge", 9.3)` — "3" pops in above the river, timed to "the speed of the stream is 3 km/hr."
**CAMERA MOVEMENT:** None — static wide shot; all motion is internal (waves scrolling, boat bobbing).
**TRANSITIONS:** Continuous build, no hard cuts.
**EDUCATIONAL PURPOSE:** Get all three raw numbers (18, 3, 84) physically anchored before any rule or arithmetic is introduced.
**VISUAL HIERARCHY:** Boat + boat-badge (foreground) > river + stream-badge (midground) > Given card (supporting, above).

### SCENE 2A — Given Card Opens Early (5.0s – 63.38s)
**VOICEOVER:** Spans the entire Boat/Stream/Distance statement (3.28s–15.38s) and beyond — the card itself stays open long after, through the whole concept/arithmetic chapter.
**VISUAL OBJECTIVE:** Unlike q8 (where the Given card only appeared post-pin, restating brand-new equations), q9 gives concrete numbers immediately, so the Given card opens right away and reveals each fact in sync with the moment it's actually spoken — turning "given" into a live transcript rather than a delayed recap.
**SCREEN LAYOUT:** A compact `SolutionCard` (`.compact-given` modifier — 26px math font, single line) sits at `left:50%, top:770px, width:1040px` — BELOW the full illustration (which ends at top:470+280=750), in the clear band before the bottom-strip. Not the gap above the illustration (that gap is reserved for the find-time/formula-downstream/stream-badge label stack, see Scene 3–4).
**ON-SCREEN ELEMENTS:** `#card-given` with chip "Given" and one line: "Boat = 18 km/hr, Stream = 3 km/hr, Distance = 84 km".
**ANIMATION DETAILS:**
- `GIVEN_TIME = 5.0`: `apt.cardEnter(tl, "#card-given .solution-card", 5.0)`.
- `apt.textReveal(tl, "#card-given .math")` reveals each fact as its own `.rv` span, all on one line:
  - word-level `data-t="5.0"`: "Boat = <span class='hi'>18 km/hr</span>" — fires right as the boat's speed starts being narrated (3.28–8.76s), a beat ahead of the number itself so the reveal doesn't lag the voice.
  - word-level `data-t="9.30"`: "Stream = <span class='hi'>3 km/hr</span>" — exact match to "the speed of the stream is 3 km/hr."
  - word-level `data-t="13.88"`: "Distance = <span class='hi'>84 km</span>" — exact match to "84 kilometers downstream."
- No `apt.pinFlow` needed for this card at entry — it opens directly in its Phase 1 resting position below the illustration. It DOES get one repositioning tween later, at `PIN_TIME` (see Scene 7): once the full illustration itself glides down to its small pinned recap, the card no longer has a "below the illustration" to sit under, so it glides up to vertical screen-center (`top:460px`, matching where Step1/Step2 themselves sit) in the same 0.8s window as the pin.
**CAMERA MOVEMENT:** None (until the PIN_TIME reposition described above).
**TRANSITIONS:** Standard `apt.cardEnter` fade/scale-in; no exit until the Scene 8 morph.
**EDUCATIONAL PURPOSE:** Lets the viewer read the raw facts as a running tally while the illustration demonstrates them, instead of making them wait ~50s for a delayed restatement.
**VISUAL HIERARCHY:** Sits below the entire illustration — a distinct, secondary layer that never competes with the question card, the label stack above the illustration, or the boat/river itself.
**ATTENTION MANAGEMENT:** Three reveals, each landing exactly on its own narration timestamp — no reveal happens before its fact is spoken.
**MOTION NOTES:** The one deliberately "long-held" card in the whole composition (58+ seconds on screen) — justified because its content never changes and it sits in genuinely empty screen space, so it never reads as stale.
**CONTINUITY FROM PREVIOUS SCENE:** Opens in parallel with Scene 2's illustration build — same moment, not sequential.

### SCENE 3 — Frame the Goal (15.8s – 22.38s)
**VOICEOVER:** "The question is asking us to find the time taken for this journey. Now, before solving the problem, let us understand this."
**VISUAL OBJECTIVE:** Plant the unknown, then bridge into the concept detour.
**SCREEN LAYOUT:** Same river/boat scene; a target label and the flow arrows are the new focal elements.
**ON-SCREEN ELEMENTS:** `#find-time` ("Find: Time = ?" label, top:-140 — topmost row above the illustration), `#flow-arrows` (three chevrons, fixed above the river, all pointing right).
**ANIMATION DETAILS:**
- 15.8s: `apt.cardEnter(tl, "#find-time", 15.8)`, timed to "find the time taken for this journey."
- 19.16s: `apt.cardEnter(tl, "#flow-arrows", 19.16)`, timed to "before solving the problem, let us understand this" — arrows appear as the visual cue that a concept explanation is coming.
- Note on layout: the label stack above the illustration now runs three clear 60px bands — `#find-time` (top:-140) → `#formula-downstream` (top:-80, Scene 4) → `#stream-badge` (top:-20) — each with ~15-20px of real clearance, so none of them collide with each other or with the boat's own badge (which travels at top:-46 relative to `#boat-unit`, well below all three) even during the Scene 5 glide when the boat's x-position passes directly under `#stream-badge`.
- Waves keep scrolling, boat keeps bobbing throughout.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Continuous from Scene 2.
**EDUCATIONAL PURPOSE:** Gives the viewer an explicit goal ("time = ?") to hold onto through the concept detour that follows.
**VISUAL HIERARCHY:** Find-time label (foreground, new) > flow arrows (midground, new) > boat/badges (already established, background-steady).
**ATTENTION MANAGEMENT:** Two sequential reveals, ~3.4s apart — no overlap.
**MOTION NOTES:** Calm beat before Scene 4's glide — deliberately quieter, so the downstream demonstration reads as a step up in energy.
**CONTINUITY FROM PREVIOUS SCENE:** Boat and badges are exactly where Scene 2 left them; nothing repositions.

### SCENE 4 — DOWNSTREAM CONCEPT: Same-Direction Rule (22.74s – 45.72s)
**VOICEOVER:** "When a boat moves downstream, it moves in the same direction as the flowing water. Because both the boat and the stream are moving in the same direction, the stream helps the boat move faster. So for downstream movement, we always add the speed of the stream to the speed of the boat. Be very sure about this rule. Downstream speed is equal to speed of boat in still water plus speed of stream."
**VISUAL OBJECTIVE:** The core concept beat — demonstrate, then state, the "always add for downstream" rule. Unlike q8 (one constant-speed glide standing in for the whole concept), q9's boat literally accelerates in three discrete gears, each one stepping up exactly where the narration itself describes the boat speeding up — the motion IS the argument, not just an accompaniment to it.
**SCREEN LAYOUT:** Boat travels left→right across the illustration width, same direction as the flow arrows, visibly picking up pace partway through.
**ON-SCREEN ELEMENTS:** `#boat-unit` (traveling, gear-stepping), `#boat-badge` (traveling with it, still reading "18"), `#stream-badge` (fixed at its river position), `#formula-downstream` label ("Downstream Speed = Boat + Stream"), wake `.motion-line` trio behind the boat (flicker intensity implicitly reads faster as the boat's own pace increases).
**ANIMATION DETAILS — three constant-velocity "gears," `ease:"none"` within each so the step-change itself reads as the speed increase (not a gradual ease):**
- **Gear 1 (22.74s–30.50s, 7.76s, x:0→130px, ~16.8 px/s):** `tl.to("#boat-unit", {x:130, duration:7.76, ease:"none"}, 22.74)` — timed to "when a boat moves downstream, it moves in the same direction as the flowing water... because both the boat and the stream are moving in the same direction." Just established motion — nothing has sped up yet.
- **Gear 2 (30.50s–48.26s, 17.76s, x:130→630px, ~28.2 px/s):** `tl.to("#boat-unit", {x:630, duration:17.76, ease:"none"}, 30.50)` — fires at the EXACT instant "the stream helps the boat move faster" is spoken (30.50s). This is the literal visual payoff of that sentence: the boat's own on-screen speed increases the moment those words are said. Holds through the full rule statement ("always add...", "be very sure", the formal "Downstream = Boat + Stream" restatement).
- **Gear 3 (48.26s–54.62s, 6.36s, x:630→900px, ~42.5 px/s):** `tl.to("#boat-unit", {x:900, duration:6.36, ease:"none"}, 48.26)` — fires exactly on "Downstream speed is equal to 18 plus 3" (48.26s), the fastest gear of the three, landing the boat at its real 21 km/hr pace right as the badge crossfades 18+3 → 21 (see Scene 5).
- 22.74s (parallel, spans all three gears continuously): a single bounded wake-flicker runs the whole glide, `wakeFlicker(tl, 22.74, 54.62)`.
- 32.94s: `apt.cardEnter(tl, "#formula-downstream", 32.94)` — "Downstream Speed = Boat + Stream" fades/scales in above the boat's path (now in Gear 2), timed to "we always add the speed of the stream to the speed of the boat."
- 39.24s: `apt.emphasize(tl, "#formula-downstream", 39.24)` — pulse, timed to "be very sure about this rule."
- 41.28s: `apt.emphasize(tl, "#formula-downstream", 41.28)` — second pulse, timed to the full formal restatement.
- River scroll and boat bob continue uninterrupted underneath all of the above.
**CAMERA MOVEMENT:** None (the boat provides all horizontal motion within the fixed frame).
**TRANSITIONS:** Continuous from Scene 3 — boat simply starts moving, no cut; Gear 1→2→3 are speed changes within one continuous glide, not separate movements.
**EDUCATIONAL PURPOSE:** Locks in the general rule ("downstream = boat + stream") in plain language before any numbers substitute in, while using the boat's own literal acceleration as proof-by-motion of "the stream helps it move faster" — same pedagogical order as q8 (concept before arithmetic), but with the added acceleration payoff q8 didn't have.
**VISUAL HIERARCHY:** Traveling boat (primary) > formula label (secondary, reinforcing) > river underneath (ambient).
**ATTENTION MANAGEMENT:** The Gear 2 speed-up (30.50s) and the formula label's two pulses (39.24s, 41.28s) are sequenced so the speed-up itself registers first, then the label reinforces it in words a few seconds later — motion before text, never simultaneous competing reveals.
**MOTION NOTES:** Gear 1 is deliberately the slowest of the three — this scene's job is to sell the RULE via visible acceleration, with Gear 3's fastest pace reserved for Scene 5's arithmetic payoff.
**CONTINUITY FROM PREVIOUS SCENE:** The boat is exactly where Scene 3 left it (idling at its Scene-2 starting position); it launches into Gear 1 from that spot with no repositioning jump.

### SCENE 5 — DOWNSTREAM ARITHMETIC: 18 + 3 = 21 (46.12s – 54.62s)
**VOICEOVER:** "Now let us find the downstream speed. Downstream speed is equal to 18 plus 3. This gives us 21 km/hr."
**VISUAL OBJECTIVE:** The single most important visual beat in Phase 1 — literally show 18 and 3 combining into 21, mirroring q8 Scene 4's chip-merge technique exactly, but crossfading all the way to the real computed number since the narration itself completes the arithmetic here (unlike q8, where the numeric substitution waited for the pinned Given card).
**SCREEN LAYOUT:** Boat continues its rightward travel — Gear 3 (see Scene 4) is already running underneath this scene, the fastest of the three gears, giving the payoff its own distinct, most energetic pace.
**ON-SCREEN ELEMENTS:** `#boat-unit`, `#boat-badge`, `#stream-badge`, a `#merge-chip` ("+3", small pill) that flies from `#stream-badge`'s position to the boat, `#formula-downstream` (still on screen, gets appended).
**ANIMATION DETAILS:**
- 46.12s: Gear 2 is still finishing (ends 48.26s) — the scene opens mid-Gear-2, so "now let us find the downstream speed" plays over the already-established faster pace, not a fresh start.
- 48.26s: Gear 3 begins (see Scene 4's animation details) — `tl.to("#boat-unit", {x:900, duration:6.36, ease:"none"}, 48.26)`, the fastest of the three gears, landing exactly as the numbers are spoken.
- 48.26s: `tl.fromTo("#merge-chip", {opacity:0, x:-140}, {opacity:1, x:0, duration:0.6, ease:"power2.out"}, 48.26)` — the "+3" chip visibly flies from the stream badge toward the traveling boat, timed to "downstream speed is equal to 18 plus 3."
- 49.7s: chip lands on/merges into `#boat-badge`; badge text crossfades "18" → "18 + 3" (0.25s, same stacked-span opacity idiom `apt.morphToStack` uses internally).
- 53.12s: `#boat-badge` text crossfades "18 + 3" → "21", timed exactly to "this gives us 21 km/hr."
- 53.12s: `apt.emphasize(tl, "#formula-downstream", 53.12)` — the formula label pulses one final time as the number lands.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Continuous from Scene 4 — the Gear 2→Gear 3 speed step at 48.26s IS the transition into this scene, not a separate cut.
**EDUCATIONAL PURPOSE:** Concrete, motion-based proof that 18 + 3 really becomes 21 — the abstract rule from Scene 4, the boat's own fastest gear, and the visible number-merge all land in the same few seconds.
**VISUAL HIERARCHY:** Traveling boat + merging chip (primary) > badge text crossfade (secondary, the payoff) > formula label (tertiary, reinforcing).
**ATTENTION MANAGEMENT:** Chip-fly (48.26s) and badge-crossfade-to-21 (53.12s) are ~5s apart, matching the narration's own pacing ("18 plus 3" ... "this gives us 21").
**MOTION NOTES:** The glide speeds up here versus Scene 4, giving a subtle sense of "arriving at the answer" even though it's the same boat, same direction, same illustration.
**CONTINUITY FROM PREVIOUS SCENE:** The boat is exactly where Scene 4's glide left it; it simply continues in the same direction at a new pace, no repositioning jump.

### SCENE 6 — Settle Before the Pin (55.08s – 56.36s)
**VOICEOVER:** "Now this part is completed."
**VISUAL OBJECTIVE:** A half-beat of quiet before the arithmetic-mode pin, same purpose as q8 Scene 7.
**SCREEN LAYOUT:** Boat holds at its Scene 5 end position.
**ON-SCREEN ELEMENTS:** Full scene as left by Scene 5.
**ANIMATION DETAILS:** No new tweens — river scroll/boat bob continue; this is the held beat right before `PIN_TIME`.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Leads directly into Scene 7's pin-flow.
**EDUCATIONAL PURPOSE:** Lets the viewer mentally close the "concept + downstream speed" chapter before "time" begins.
**VISUAL HIERARCHY:** Unchanged from Scene 5.
**ATTENTION MANAGEMENT:** Nothing new competes for attention — intentional breathing room.
**MOTION NOTES:** River/bob ambient motion is the only thing moving — never a fully frozen frame.
**CONTINUITY FROM PREVIOUS SCENE:** Direct hold of Scene 5's final frame.

### SCENE 7 — PIN FLOW (55.08s – 62.38s)
**VOICEOVER:** "Now this part is completed. Since we know the distance and the speed, we can find the time. We know the formula."
**VISUAL OBJECTIVE:** Transition to solving mode. Unlike q8, the Given restatement has already been on screen since 5.0s (see Scene 2A) — this scene is the pin-flow itself, PLUS a repositioning tween for the Given card, which loses its "below the illustration" anchor once the illustration shrinks to its mini recap.
**SCREEN LAYOUT:** Question glides to its pinned top slot (`#q-pinned`, left:385px top:30px width:1275px); the full illustration glides into a small pinned recap (`#illus-pinned`, left:280px top:190px width:1300px height:150px) keeping a MINIATURE river+boat running continuously. The Given card (open since 5.0s at `top:770px`, below the full illustration) glides up in the same window to `top:460px` — vertical screen-center, matching where Step1/Step2 themselves sit.
**ON-SCREEN ELEMENTS:** `#q-pinned`, `#illus-pinned` (containing a mini river loop, small bobbing boat icon, label "18 + 3 = 21 km/hr"), `#card-given` (repositioning).
**ANIMATION DETAILS:**
- `PIN_TIME = 55.08`: `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 55.08)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 55.08)` — real glide, not a fade swap. `apt.fadeOut(tl, "#serial-num", 55.08, 0.5)`.
- Same instant: `tl.to("#card-given .solution-card", { top: "460px", duration: 0.8, ease: "power2.inOut" }, 55.08)` — the Given card glides from its Phase 1 spot (below the illustration) to vertical center, in lockstep with the illustration's own pin-glide, so nothing is ever left stranded relative to a footprint that no longer exists.
- From `PIN_TIME + 1 = 56.08` onward, THROUGH `RECENTER_TIME` (76.34s): `#river-track-mini`'s seamless scroll keeps running and `apt.ambientLoop(tl, "#illus-pinned-icon", 56.08, 76.34)` bobs the small boat — the pinned recap never goes static while the solution cards are being read.
**CAMERA MOVEMENT:** The pin-flow itself is the only "camera-like" move.
**TRANSITIONS:** `apt.pinFlow`'s real glide (0.8s), not a cut.
**EDUCATIONAL PURPOSE:** Moves from the concept/arithmetic chapter into solving-for-time mode without needing to re-show facts the viewer already has in front of them (the Given card).
**VISUAL HIERARCHY:** Pinned question (top) + pinned river recap (ambient) glide into place around the already-settled Given card.
**ATTENTION MANAGEMENT:** Only the pin-flow itself is new here — no competing reveal.
**MOTION NOTES:** The mini river/boat loop is what keeps the long stretch from Given through Step 2 from feeling static.
**CONTINUITY FROM PREVIOUS SCENE:** Direct continuation of Scene 6's held frame — the pin-flow simply begins.

### SCENE 8 — STEP 1: The Time Formula (62.38s – 69.9s)
**VOICEOVER:** "Time is equal to distance divided by speed. Putting the values, time is equal to 84 divided by 21."
**VISUAL OBJECTIVE:** State the formula, then substitute the numbers — same two-beat discipline as the downstream rule in Scenes 4–5.
**SCREEN LAYOUT:** Given card morphs to the left stack; Step 1 `SolutionCard` opens center.
**ON-SCREEN ELEMENTS:** `#stack-given` (`.step-circle` "G"), `#card-step1`.
**ANIMATION DETAILS:**
- 62.38s: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 62.38)`.
- 63.38s: `apt.cardEnter(tl, "#card-step1 .solution-card", 63.38)` (standard ~1s breathing gap after the morph starts).
- `apt.textReveal(tl, "#card-step1 .math")` reveals:
  - line `data-t="63.38"`: "Time = Distance ÷ Speed"
  - line `data-t="65.46"`: "Putting the values:"
  - word-level `data-t="66.90"`–`"69.46"`: "Time = <span class='hi'>84</span> ÷ <span class='hi'>21</span>"
- Pinned river/boat recap continues its loop, unbroken, through this scene.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** `apt.morphToStack` (0.8s box+text crossfade).
**EDUCATIONAL PURPOSE:** Isolates "state the formula, then plug in numbers" as its own clean beat, mirroring the discipline already used for the downstream rule.
**VISUAL HIERARCHY:** Step 1 card (center, active) > stack-given (left, archived) > pinned recap (ambient).
**ATTENTION MANAGEMENT:** Three sequential reveals matched to the narration's own pacing.
**MOTION NOTES:** River keeps flowing; boat keeps bobbing.
**CONTINUITY FROM PREVIOUS SCENE:** Given card is fully visible and readable up until the moment it starts its morph.

### SCENE 9 — STEP 2: Solve for Time (69.9s – 76.34s)
**VOICEOVER:** "After simplifying this, we get four hours. So the boat will take four hours to travel 84 km downstream."
**VISUAL OBJECTIVE:** Deliver the final numeric answer, then recap the whole journey in plain English.
**SCREEN LAYOUT:** Step 1 morphs to stack; Step 2 `SolutionCard` opens center.
**ON-SCREEN ELEMENTS:** `#stack-step1` (`.step-circle` "1"), `#line-g-1` connector, `#card-step2`.
**ANIMATION DETAILS:**
- 69.9s: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 69.9)`; `apt.stackLineGrow(tl, "#line-g-1", 69.9)`.
- 70.9s: `apt.cardEnter(tl, "#card-step2 .solution-card", 70.9)`.
- `apt.textReveal(tl, "#card-step2 .math")` reveals:
  - line `data-t="70.9"`: "Time = <span class='ans'>4 hours</span>"
  - line `data-t="72.06"`: "Boat takes <span class='ans'>4 hours</span> to travel 84 km downstream"
- Pinned river/boat recap still looping.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** `apt.morphToStack`.
**EDUCATIONAL PURPOSE:** Isolates the final division result and its plain-English recap as one clean closing beat.
**VISUAL HIERARCHY:** Step 2 card (center) > stacks (left) > pinned recap (ambient).
**ATTENTION MANAGEMENT:** Two reveals, well spaced (70.9 / 72.06).
**MOTION NOTES:** River/boat still animating — last stretch before Phase 3, must not go static right before the payoff.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1 remains fully legible until its own morph fires.

### SCENE 10 — Options Reveal (76.34s – 79.22s)
**VOICEOVER:** "Hence, the correct answer is option D."
**VISUAL OBJECTIVE:** Confirm the answer against all four choices.
**SCREEN LAYOUT:** Step 2 morphs to stack; pinned question recenters; illustration recap clears; options grid (2×2) appears.
**ON-SCREEN ELEMENTS:** `#stack-step2` (`.step-circle` "2"), `#line-1-2` connector, `#options-reveal` (A: 3h, B: 3.5h, C: 4.5h, D: 4h — correct).
**ANIMATION DETAILS:**
- 76.34s: `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 76.34)`; `apt.stackLineGrow(tl, "#line-1-2", 76.34)`.
- 76.34s: `apt.fadeOut(tl, "#illus-pinned", 76.34)` (the ONE deliberate stopping point for the river/boat recap); `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 76.34)`.
- 76.7s: `apt.fadeIn(tl, "#options-reveal", 76.7)`.
- 77.0s: `apt.optionsStagger(tl, ".opt-btn", 77.0)`.
- 77.9s: `apt.correctPulse(tl, ".opt-btn.correct", 77.9)`, timed to land on "option D."
- 79.0s: `apt.fadeOut(tl, "#root > div", 79.0, 1.2)` — END FADE.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** `apt.morphToStack` + `apt.recenterForOptions`.
**EDUCATIONAL PURPOSE:** Standard close — verify the derived answer (4 hours) against the given options.
**VISUAL HIERARCHY:** Options grid (primary) > stack column (secondary) > pinned question (tertiary).
**ATTENTION MANAGEMENT:** Stagger-then-pulse, standard two-beat close.
**MOTION NOTES:** The one deliberate point where continuous ambient motion (river recap) stops — immediately replaced by the options-reveal's own motion.
**CONTINUITY FROM PREVIOUS SCENE:** Step 2 is fully read before its morph fires; the illustration recap's fade-out is the first "stop" in the entire video, immediately superseded by the options grid's own entrance motion.

---

## PART 3 — Asset List Required

| Asset | Source | Notes |
|---|---|---|
| `illustration/boat-svgrepo-com.svg` | Copied verbatim from [q8](../q8/illustration/boat-svgrepo-com.svg) | Untouched |
| `illustration/wave-2-svgrepo-com.svg` | Copied verbatim from [q8](../q8/illustration/wave-2-svgrepo-com.svg) | Already recolored to `#6373db` — front (faster) wave row |
| `illustration/wave-2-light.svg` | Copied verbatim from [q8](../q8/illustration/wave-2-light.svg) | Already recolored to `#e2e5ff` — back (slower) wave row |
| `design-system.css`, `animations.js`, `assets/` | Copied from `_template/` | Per README §5B |

No new colors, fonts, or template components introduced. No new SVG assets — this question deliberately reuses q8's exact illustration files to keep the visual language identical across the "Boats & Streams" sub-topic.

---

## PART 4 — Animation Complexity Notes

- **Same seamless wave loop ("riverFlow") and wake-flicker techniques as q8** — reused verbatim, just re-timed to this video's shorter 79.22s span.
- **No boat flip / rotation-judder / turn beat** — q9 has no upstream leg, so the flip-squash and rocking-judder techniques from q8 Scenes 5–6 are deliberately omitted. The boat only ever travels right, at two different glide speeds (slow conceptual crawl in Scene 4, faster payoff glide in Scene 5).
- **Badge crossfade goes one step further than q8:** q8's "B" → "B+C" badge swap stopped at the compound expression (numbers were only substituted later, post-pin). q9's badge crossfades all the way to the real computed number ("18" → "18 + 3" → "21") because the narration itself completes the arithmetic before the pin — the visual follows the voiceover's own pacing rather than artificially deferring the number.
- **Given card restates rather than introduces:** unlike q8 (where the Given card stated brand-new equations B+C=24, B−C=16), q9's Given card restates four facts the viewer already saw individually in Phase 1 (18, 3, 21, 84) — appropriate because q9's narration doesn't re-introduce new information at the pin, it just pivots to a new formula (time = distance ÷ speed).
- **Pinned recap never idles:** the pinned illustration keeps its own miniature wave loop and boat bob running continuously from `PIN_TIME+1` through `RECENTER_TIME` (a ~20s span covering Given/Step1/Step2), identical philosophy to q8.
- **Only one true stop:** the illustration recap's fade-out at `RECENTER_TIME` (Scene 10) is the sole point where continuous ambient motion ends, immediately superseded by the options-reveal's own stagger/pulse animation.

---

## PART 5 — Master Timeline Overview

```
TIME (s)   ELEMENT                          WHAT HAPPENS
─────────  ───────────────────────────────  ─────────────────────────────────
0.0        Background + bottomStrip+logo    Always visible
0.3        QuestionCard                     heroEnterLowered — fades/scales in low
0.8        SerialNum                        pops in low, mirrors card
3.6        QuestionCard + SerialNum         rise to resting position
3.6        River (2-layer wave loop)        seamless scroll begins — never stops until 55.08s (full) / continues mini until 76.34s
3.9        Boat                             drops onto water, idle bob begins
4.2        "18" badge                       cardEnter on boat
9.3        "3" badge                        cardEnter on river
15.8       "Find: Time = ?" label           cardEnter
19.16      Flow arrows                      cardEnter
22.74      Boat                             GEAR 1 — x:0→130px over 7.76s (~16.8 px/s)
30.50      Boat                             GEAR 2 — x:130→630px over 17.76s (~28.2 px/s) — "stream helps it move faster"
32.94      "Downstream = Boat + Stream"     cardEnter
39.24      formula label                    emphasize pulse ("be very sure")
41.28      formula label                    emphasize pulse (full restatement)
48.26      Boat                             GEAR 3 — x:630→900px over 6.36s (~42.5 px/s) — fastest, the payoff
48.26      "+3" chip                        flies from stream badge to boat
49.7       boat badge                       text swap → "18 + 3"
53.12      boat badge                       text swap → "21"
53.12      formula label                    emphasize pulse (final)
55.08–56.36 Scene holds                     brief settle before pin

[ GIVEN_TIME = 5.0 — opens early, well before the pin ]
─────────  ───────────────────────────────  ─────────────────────────────────
5.0        Given card                       cardEnter (compact, top:770px, below illustration)
5.0        Given card .math                 textReveal: "Boat = 18 km/hr"
9.30       Given card .math                 textReveal: "Stream = 3 km/hr"
13.88      Given card .math                 textReveal: "Distance = 84 km"
5.0–55.08  Given card                       stays at top:770 (below illustration) through concept/arithmetic phase

[ PIN_TIME = 55.08 ]
─────────  ───────────────────────────────  ─────────────────────────────────
55.08      Question + Illustration          🌟 pinFlow — real glide to pinned slots
55.08      Given card                       glides top:770→460 (bottom-of-illustration → vertical center)
56.08      Pinned river/boat recap          mini seamless loop + bob begins — runs to 76.34s

[ STEP CYCLE ]
─────────  ───────────────────────────────  ─────────────────────────────────
62.38      Given → Given stack               🌟 morphToStack
63.38      Step 1 card                       cardEnter
63.38–69.46 Step 1 .math                     textReveal (Time=Distance÷Speed → 84÷21)
69.9       Step 1 → Step 1 stack             🌟 morphToStack + stackLineGrow (G→1)
70.9       Step 2 card                       cardEnter
70.9–72.06 Step 2 .math                      textReveal (=4 hours → recap sentence)

[ PHASE 3 ]
─────────  ───────────────────────────────  ─────────────────────────────────
76.34      Step 2 → Step 2 stack            🌟 morphToStack + stackLineGrow (1→2)
76.34      Pinned illustration recap        fadeOut (the ONE deliberate stop)
76.34      Pinned question                  recenterForOptions
76.7       Options grid                     fadeIn
77.0       Option buttons                   optionsStagger
77.9       Correct option (D)               correctPulse
79.0       Everything                       END FADE (1.2s)
```

**Video duration:** 79.22s (matches `voiceover.wav` exactly).
