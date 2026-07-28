# Storyboard — Speed, Time and Distance / Q17 (Two Delivery Vans, Opposite Directions)

Question: Two delivery vans leave the same depot in opposite directions, at 38 km/hr and
47 km/hr. After how many hours will they be 255 km apart?
Correct answer: A) 3 hours

Video length: 89.0s (voiceover ends 87.22s, END_FADE at 87.8s + 1.2s fade)

Structural note: this question shares its **setup** with Q14 (two objects starting from
the SAME point, moving in opposite directions — so the illustration reuses Q14's
shared-start-point + outward-drift pattern, not Q13's two-separate-towns pattern) but
shares its **math** with Q13 (a direct relative-speed formula, no x/y unknowns — so the
Given/Step1/Step2 card structure follows Q13's pattern: Given recap → Step 1 concept +
relative-speed formula → Step 2 time formula).

---

## PART 1 — Narration Beat Analysis

| # | Time (s) | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|----------|-----------|---------------------|------------------|-------------------|
| 1 | 0.10–3.66 | "So welcome back again. Time for one more problem." | Cold open, orient viewer | Center screen | QuestionCard rises into view (hero, lowered start) |
| 2 | 4.32–9.50 | "...two delivery vans start from the same depot." | Establish shared origin | Illustration | Road + depot marker build in; both van icons appear stacked at the depot |
| 3 | 10.16–21.46 | "The speed of the first delivery van is 38 km/hr. The speed of the second delivery van is 47 km/hr." | Establish individual speeds | Speed labels | "38 km/hr" on Van 1, "47 km/hr" on Van 2 |
| 4 | 22.00–24.06 | "Both vans move in opposite directions." | Establish direction of motion | Outward arrows + drift | Vans visibly separate from the shared depot point |
| 5 | 24.38–32.80 | "The question is asking...255 km apart. Now, let us understand one important concept." | Pose the goal + transition | Pinned layout | pinFlow glide; Given card (already open) finishes its recap |
| 6 | 33.20–37.66 | "When two objects move in opposite directions, the distance between them keeps increasing." | Core concept: why the distance grows | Step 1 card | Concept line reveals |
| 7 | 38.28–46.84 | "Every hour, the first van moves 38 km. At the same time, the second van moves 47 km." | Ground the concept in each van's own contribution | Step 1 card | Per-van hourly distances reveal |
| 8 | 47.40–57.82 | "So after one hour, the distance between them increases by 38 plus 47, that is 85 km. This is called the relative speed." | Name the concept | Step 1 card | "Relative Speed = Sum of Speeds" formula line lands |
| 9 | 58.22–64.20 | "So relative speed is equal to 38 plus 47. That gives us 85 km/hr." | Compute relative speed | Step 1 card | Formula → values → result, word-synced |
| 10 | 64.72–68.84 | "Got it? Perfect. Now we need to find the time. We know the formula." | Transition to Step 2 | Step 2 card opening | Step 1 morphs to stack; Step 2 card enters |
| 11 | 69.34–79.06 | "Time = Distance ÷ Relative Speed...255 ÷ 85...we get 3 hours." | Step 2 computation | Step 2 card | Formula → values → result, word-synced |
| 12 | 79.40–84.40 | "So after three hours, the two delivery vans will be 255 km apart." | Confirm result | Stack + options area | Step 2 morphs to stack; layout recenters |
| 13 | 84.78–87.22 | "Hence, the correct answer is option A." | Reveal answer | Options grid | Options stagger in; correct option (A) pulses green |

---

## PART 2 — Scene-by-Scene Storyboard

Design constraints in force throughout (per `_template/README.md` §4D.1): only
`--primary #6373db`, `--primary-light #e2e5ff`, `--success #4eb85f`, `--topic #949494`,
`--text #000000`, `--bg #FFFFFF`; only `QuestionCard`/`SerialNum`/`SolutionCard`/
`SolutionStackCard`/`solutionChip`/`StepCircle`/`StackLine`/options-grid/`logo`/
`topic-name`/`bottomStrip`/Illustration/Fraction; only the helpers in `animations.js`,
called explicitly by name below. The illustration (road + depot marker + two van icons +
outward arrows) is per-question custom markup/CSS, built from a single reused
`illustration/van-svgrepo-com.svg`, mirrored via `scaleX(-1)` for Van A's opposite facing
(the SVG's own fills — `#008ae0`/`#346ff9`/`#000000` — are left as supplied, per README
§5C: only recolor a user-provided SVG if asked).

### SCENE 1 — Cold Open (0.3s – 3.6s)
**VOICEOVER:** "So welcome back again. Time for one more problem."
**VISUAL OBJECTIVE:** Establish the question, hero-style, before anything else exists.
**SCREEN LAYOUT:** `#q-full-card` centered horizontally (`left:50%`, `xPercent:-50`), vertically lowered by 180px.
**ON-SCREEN ELEMENTS:** `.q-card` with QUESTION_TEXT ("38 km/hr", "47 km/hr", "255 km" in `.num` primary blue). `#serial-num` badge, fixed "Q" digit.
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.6)`. `#serial-num` pops in at 0.8s (`back.out(2)`) at the same lowered y-offset, rises in parallel at 3.6s.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** N/A (opening scene).
**EDUCATIONAL PURPOSE:** Give the viewer a beat to read the full question before solving begins.
**VISUAL HIERARCHY:** QuestionCard > SerialNum badge.
**ATTENTION MANAGEMENT:** Single focal element.
**MOTION NOTES:** The lowered-then-rise motion lands exactly as "problem." finishes.
**CONTINUITY FROM PREVIOUS SCENE:** N/A — video start.

### SCENE 2 — Vans Assemble at a Shared Depot (4.6s – 9.5s)
**VOICEOVER:** "Now, in this problem, we are given that two delivery vans start from the same depot."
**VISUAL OBJECTIVE:** Establish object continuity — both vans visibly share one origin (mirrors Q14's "shared start point" pattern, not Q13's two-town span).
**SCREEN LAYOUT:** `#illustration` (1000×220, centered under the question's future pinned slot) contains a road with a depot marker at its horizontal center.
**ON-SCREEN ELEMENTS:** `#road-line` (rounded gray-blue bar spanning the illustration), `#depot-point` (small filled `--primary` circle at the road's horizontal center), `#van-a-wrap` (holds `van-svgrepo-com.svg`, mirrored `scaleX(-1)`, faces left, centered on the depot point), `#van-b-wrap` (same SVG, unmirrored, faces right, centered on the depot point — directly overlapping Van A's starting spot).
**ANIMATION DETAILS:**
- 4.6s: `apt.roadSweep(tl, "#road-line", 4.6)`.
- 5.0s: `apt.fadeIn(tl, "#depot-point", 5.0)`.
- 6.84s: `apt.cardEnter`-style fromTo on `#van-a-wrap` — timed to "two delivery vans".
- 7.4s: same treatment on `#van-b-wrap` — a beat after Van A so the two read as sequential, not simultaneous clutter.
- 8.08s: `apt.emphasize(tl, "#depot-point", 8.08)` — pulse on "start from the same depot."
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Continuous build, no cuts.
**EDUCATIONAL PURPOSE:** Locks in "same depot" before speeds or direction are introduced, so the later "moving apart" motion reads against a clear shared origin.
**VISUAL HIERARCHY:** Depot pulse (momentary focus) > both vans (equal weight).
**ATTENTION MANAGEMENT:** Vans enter with a small stagger (0.56s) so the eye registers two distinct objects.
**MOTION NOTES:** Both vans sit stacked at dead center, motionless, until Scene 4 — "same depot" needs to be unambiguous before any travel begins.
**CONTINUITY FROM PREVIOUS SCENE:** The question card has just settled into its resting hero position (Scene 1's rise at 3.6s); the illustration fills in directly beneath it, no cut.

### SCENE 3 — Speeds Named (10.16s – 21.46s)
**VOICEOVER:** "The speed of the first delivery van is 38 km/hr. The speed of the second delivery van is 47 km/hr."
**VISUAL OBJECTIVE:** Attach each speed value to its own van before any motion starts.
**SCREEN LAYOUT:** Same road scene; speed labels appear above each van, nested inside that van's own wrapper so they travel together later.
**ON-SCREEN ELEMENTS:** `#speed-a` ("38 km/hr", `--primary` text, ≥22px) inside `#van-a-wrap`; `#speed-b` ("47 km/hr") inside `#van-b-wrap`.
**ANIMATION DETAILS:**
- 13.64s: plain `fromTo` (y:10→0, opacity 0→1, 0.4s `power2.out`) on `#speed-a` — timed to "38" ("thirty-eight").
- 18.94s: identical treatment on `#speed-b` — timed to "47" ("forty-seven").
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Continuous from Scene 2.
**EDUCATIONAL PURPOSE:** Numbers register on the correct van before the "opposite directions" motion begins, preventing any Van A/B mix-up once they're both moving.
**VISUAL HIERARCHY:** Whichever label just faded in is momentarily primary; settles to equal weight once both are visible.
**ATTENTION MANAGEMENT:** One label at a time, matching narration order exactly.
**MOTION NOTES:** Vans are still motionless — motion is reserved for Scene 4, landing with more impact once "opposite directions" is actually spoken.
**CONTINUITY FROM PREVIOUS SCENE:** Vans are exactly where Scene 2 left them (stacked at the depot); only the labels are new.

### SCENE 4 — Opposite Directions, Vans Drift Apart (22.0s – 24.4s)
**VOICEOVER:** "Both vans move in opposite directions."
**VISUAL OBJECTIVE:** THE core visual payoff of Phase 1 — show the two vans physically separating from the shared depot, faster van covering visibly more ground.
**SCREEN LAYOUT:** Van A travels left, Van B travels right, away from the shared depot, at a distance ratio matching their real speeds (38:47).
**ON-SCREEN ELEMENTS:** `#van-a-wrap` (traveling left), `#van-b-wrap` (traveling right), `#arrow-left`/`#arrow-right` (chevrons, `--primary`, appearing just outside each van pointing further outward).
**ANIMATION DETAILS:**
- 22.0s: `apt.fadeIn(tl, "#arrow-left", 22.0)` and `apt.fadeIn(tl, "#arrow-right", 22.0)`, each paired with a small outward `x` nudge (`fromTo x:10→0` for arrow-left i.e. drifting further left, `x:-10→0` for arrow-right, 0.4s `power2.out`).
- 22.0s: `tl.to("#van-a-wrap", {x: -260, duration: 2.4, ease: "none"}, 22.0)` — linear drift left.
- 22.0s: `tl.to("#van-b-wrap", {x: 322, duration: 2.4, ease: "none"}, 22.0)` — linear drift right, farther than Van A in the same time (47:38 ratio ≈ 322:260), a physically-accurate detail that foreshadows "faster van, more distance" ahead of the math.
**CAMERA MOVEMENT:** None (the vans' own motion carries the frame).
**TRANSITIONS:** Continuous — vans simply start moving, no cut.
**EDUCATIONAL PURPOSE:** Makes "distance between them keeps increasing" (spoken later, Scene 6) feel obvious in hindsight — the viewer already watched it happen here.
**VISUAL HIERARCHY:** Van motion (primary) > direction arrows (secondary, reinforcing).
**ATTENTION MANAGEMENT:** Arrows and van motion start together (one beat) — short, sharp scene since the narration line itself is brief (2.06s).
**MOTION NOTES:** The differential drift distance (260px vs 322px, ratio 38:47) is a deliberate physically-grounded touch, not just symmetric motion.
**CONTINUITY FROM PREVIOUS SCENE:** Vans launch from the exact stacked position Scene 3 left them at — no repositioning jump.

### SCENE 5 — Given Card: Live Recap (opens 9.5s, concept-free — holds through the pin)
**VOICEOVER (spans):** "...start from the same depot. The speed of the first delivery van is 38 km/hr. The speed of the second delivery van is 47 km/hr. Both vans move in opposite directions."
**VISUAL OBJECTIVE:** Reveal each given value on the card at the same instant its illustration counterpart is being narrated — a live running note, not a later recap. Unlike Q13's Given card, this one carries NO concept explanation (that's reserved entirely for Step 1, since Q17's concept explanation is much longer than Q13's).
**SCREEN LAYOUT:** `#card-given .solution-card` at `left:640px; top:640px` (below the illustration, which ends at ~top:560px, clearing an 80px gap).
**ON-SCREEN ELEMENTS:** `.chip` "Given". `.math` with 4 lines: "Two vans start from the same depot", "Speed of Van 1 = 38 km/hr", "Speed of Van 2 = 47 km/hr", "Moving in opposite directions".
**ANIMATION DETAILS:** `apt.cardEnter(tl, "#card-given .solution-card", 9.5)` — right as the depot fact finishes narrating. `apt.textReveal(tl, "#card-given .math")` reveals each line (all line-level, paraphrased restatements): `data-t="9.5"` (depot), `data-t="13.64"` (Van 1 speed, same instant as `#speed-a`), `data-t="18.94"` (Van 2 speed, same instant as `#speed-b`), `data-t="22.0"` (opposite directions, same instant as the arrows).
**CAMERA MOVEMENT:** None — the card sits statically through the rest of Phase 1 and the pin.
**TRANSITIONS:** N/A within scene — the Given card is NOT part of Scene 6's `pinFlow`; it stays anchored at `top:640px` throughout, only shifting up 200px as a plain recenter tween once the illustration clears (see Scene 6).
**EDUCATIONAL PURPOSE:** Ties each given value directly to its visual the instant it's spoken, instead of a summary restated later.
**VISUAL HIERARCHY:** Question card (top) > Illustration (upper-middle) > Given card (lower-middle, clear of the illustration).
**ATTENTION MANAGEMENT:** During 9.5s–22.0s the illustration and Given card update in lockstep — no competing motion.
**MOTION NOTES:** All 4 lines are simple facts (no formula yet) — deliberately kept light so Step 1 can carry the full weight of the concept explanation.
**CONTINUITY FROM PREVIOUS SCENE:** Card enters center-stage at 9.5s, well before the pin — it is already on screen, mid-reveal, when the pin fires.

### SCENE 6 — Pin Flow + Given Recenter (PIN_TIME = 24.4s)
**VOICEOVER (spans into):** "The question is asking us to find after how many hours they will be 255 km apart. Now, let us understand one important concept."
**VISUAL OBJECTIVE:** Collapse the full Phase 1 layout into its pinned Phase 2 slot; lift the Given card into the newly-cleared center space.
**SCREEN LAYOUT:** `#q-full-card` → `#q-pinned` (left:385px, top:30px, width:1275px). `#illustration` → `#illus-pinned` (left:660px, top:190px, width:600px, height:140px, two small van icons either side of a recap label — `justify-content:space-between`, matching the two-object illustration rule).
**ON-SCREEN ELEMENTS:** Same elements as Scenes 2–4, gliding to smaller/repositioned slots. `#card-given` stays put but shifts up.
**ANIMATION DETAILS:**
- `PIN_TIME = 24.4`: `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 24.4)`; `apt.pinFlow(tl, "#illustration", "#illus-pinned", 24.4)`; `apt.fadeOut(tl, "#serial-num", 24.4, 0.5)`.
- `24.4`: `tl.to("#card-given .solution-card", {y: -200, duration: 0.6, ease: "power2.inOut"}, 24.4)` — the Given card lifts from `top:640px` toward `top:440px` now that the illustration above it is vacating, so it doesn't sit low and orphaned once the layout pins.
- From `25.4` through `79.4`: `apt.ambientLoop(tl, "#illus-pinned-van-a", 25.4, 79.4)` and `apt.ambientLoop(tl, "#illus-pinned-van-b", 25.6, 79.4)` (slightly offset phase) — keeps the pinned recap alive through Step 1's long single-card hold.
**CAMERA MOVEMENT:** The glide itself.
**TRANSITIONS:** `apt.pinFlow` (0.8s glide), not a cut.
**EDUCATIONAL PURPOSE:** Signals "setup is complete, solving begins now" without losing the question or visual setup from view.
**VISUAL HIERARCHY:** Pinned question (top) > pinned van recap (upper-middle, ambient) > Given card (center, now recentered).
**ATTENTION MANAGEMENT:** The glide carries attention from full-size elements to their compact home; the Given card's small upward shift happens in the same beat so nothing reads as a separate, competing motion.
**MOTION NOTES:** 0.8s `power2.inOut`, matching every other pinFlow in the system.
**CONTINUITY FROM PREVIOUS SCENE:** The arrows/drift from Scene 4 are still visible as `#illustration` glides into `#illus-pinned` — the pinned version swaps to its own smaller icon+label composition, so they don't need to survive individually.

### SCENE 7 — Given → Stack, Step 1 Opens: The Concept (32.4s – 64.72s)
**VOICEOVER:** "When two objects move in opposite directions, the distance between them keeps increasing. Every hour, the first van moves 38 km. At the same time, the second van moves 47 km. So after one hour, the distance between them increases by 38 plus 47, that is 85 km. This is called the relative speed. So relative speed is equal to 38 plus 47. That gives us 85 km/hr."
**VISUAL OBJECTIVE:** Build the full logical case for why the speeds ADD, then land the relative-speed formula with real numbers. This is the single longest, most important card in the video.
**SCREEN LAYOUT:** Given card morphs to the left stack; Step 1 `SolutionCard` opens center (`left:640px; top:460px`).
**ON-SCREEN ELEMENTS:** `#stack-given` (`.step-circle` "G"), `#card-step1`.
**ANIMATION DETAILS:**
- `32.4`: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 32.4)` — completes (33.2) exactly as Step 1's narration begins.
- `33.2`: `apt.cardEnter(tl, "#card-step1 .solution-card", 33.2)`.
- `apt.textReveal(tl, "#card-step1 .math")` reveals:
  - line-level `data-t="33.2"`: "Opposite directions → distance keeps increasing"
  - line-level `data-t="39.279"`: "Van 1 = <span class='hi'>38 km/hr</span> every hour"
  - line-level `data-t="44.439"`: "Van 2 = <span class='hi'>47 km/hr</span> every hour" (split onto its own line rather than combined with Van 1's — the combined line risked wrapping at the card's default 640px width)
  - line-level `data-t="55.299"`: "Relative Speed = Sum of Speeds"
  - word-level `data-t="59.719"`/`"60.099"`/`"60.659"`/`"60.919"`: "= <span class='hi'>38</span> + <span class='hi'>47</span>"
  - word-level `data-t="61.979"`/`"62.659"`: "= <span class='ans'>85 km/hr</span>"
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** `apt.morphToStack` (0.8s).
**EDUCATIONAL PURPOSE:** This is the single most important insight in the whole problem — everything after this is just plugging 85 into `Time = Distance ÷ Relative Speed`.
**VISUAL HIERARCHY:** Step 1 card (center, active) > stack-given (left, archived) > pinned van recap (ambient).
**ATTENTION MANAGEMENT:** Six sequential reveals matched to the narration's own ~31.5s pacing — no two reveals overlap; longest gap (11s, between the Van 2 line and the formula-name line) is exactly where the narration's own "so after one hour...that is 85 km" arithmetic aside plays out with no new on-card content, letting the pinned recap's ambient bob carry the frame.
**MOTION NOTES:** Pinned van recap keeps bobbing throughout — this is the longest single-card stretch in the video and needs that ambient life.
**CONTINUITY FROM PREVIOUS SCENE:** Given card is fully readable until its morph fires — no early fade.

### SCENE 8 — Step 1 → Stack, Step 2 Opens: Compute Time (64.72s – 79.4s)
**VOICEOVER:** "Got it? Perfect. Now we need to find the time. We know the formula. Time is equal to distance divided by relative speed, which is 255 divided by 85. After simplifying this, we get 3 hours."
**VISUAL OBJECTIVE:** Collapse Step 1 into the stack, then compute the final answer.
**SCREEN LAYOUT:** `#stack-step1 .stack-card` at `left:100px; top:300px`. `#card-step2 .solution-card` at `left:600px; top:440px; width:720px` (widened for the fraction line).
**ON-SCREEN ELEMENTS:** Step 1 stack card (`.step-circle` "1" badge). `#line-g-1` connector grows between the G and 1 circles. Step 2 active card: `.chip` "Step 2", `.math` with "Time = [Distance/Relative Speed]" / "= [255/85]" / "= 3 hours" (`.ans`) — the bracketed pairs are `.frac` components, not a "÷" glyph.
**ANIMATION DETAILS:**
- `64.72`: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 64.72)`; `apt.setStackLine("#line-g-1", "#stack-given .step-circle", "#stack-step1 .step-circle")` (called once, pre-timeline); `apt.stackLineGrow(tl, "#line-g-1", 64.72)`.
- `66.44`: `apt.cardEnter(tl, "#card-step2 .solution-card", 66.44)` — fires mid-transition-sentence ("Now we need to find the time"), well ahead of the first numeric content, mirroring Q13's own overlap pattern.
- `apt.textReveal(tl, "#card-step2 .math")` reveals:
  - word-level `data-t="69.339"`/`"69.839"`/`"70.379"`: "Time = " + `.frac` Distance/Relative Speed (revealed as one unit)
  - word-level `data-t="73.439"`/`"73.72"`: "=" + `.frac` 255/85
  - word-level `data-t="76.419"`/`"78.36"`: "=" + "<span class='ans'>3 hours</span>"
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** `apt.morphToStack`, standard 0.8s.
**EDUCATIONAL PURPOSE:** Final calculation — converts relative speed into the answer the question actually asks for (time).
**VISUAL HIERARCHY:** Step 2 active card (center) > Step 1 + Given stack cards (left column) > connector line.
**ATTENTION MANAGEMENT:** The 1.72s gap between morph-start (64.72) and Step 2's `cardEnter` (66.44) is filled by "Got it? Perfect." — a natural breath before the new card appears.
**MOTION NOTES:** Word-level reveal throughout — every value is spoken near-verbatim.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1's card is still completing its slide-into-stack (box morph finishes 65.52s) as Step 2's card begins fading in at 66.44s — the connector line grows in the same beat Step 1 lands.

### SCENE 9 — Recenter + Options Reveal (79.4s – 87.8s)
**VOICEOVER:** "So after three hours, the two delivery vans will be 255 km apart. Hence, the correct answer is option A."
**VISUAL OBJECTIVE:** Close out the solve, then reveal and confirm the correct option.
**SCREEN LAYOUT:** Step 2 collapses into the stack (`left:100px; top:450px`). `#illus-pinned` fades out. `#q-pinned` shifts via `recenterForOptions` (`x:160, y:180`). `#options-reveal .pinned-col` (top:400px) shows the 2×2 `.options-grid`.
**ON-SCREEN ELEMENTS:** Step 2 stack card (`.step-circle` "2"). `#line-1-2` connector between circles "1" and "2". Options A–D, with A marked `correct`.
**ANIMATION DETAILS:**
- `79.4`: `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 79.4)`; `apt.setStackLine("#line-1-2", "#stack-step1 .step-circle", "#stack-step2 .step-circle")` (pre-timeline); `apt.stackLineGrow(tl, "#line-1-2", 79.4)`; `apt.fadeOut(tl, "#illus-pinned", 79.4)`; `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 79.4)`.
- `80.4`: `apt.fadeIn(tl, "#options-reveal", 80.4)`.
- `81.0`: `apt.optionsStagger(tl, ".opt-btn", 81.0)` (stagger 0.12s × 4).
- `86.7`: `apt.correctPulse(tl, ".opt-btn.correct", 86.7)` — timed to "option A."
**CAMERA MOVEMENT:** `recenterForOptions` shifts the pinned question block — the only camera-like reframe in the video.
**TRANSITIONS:** `apt.morphToStack` (Step 2), `recenterForOptions` (question), `fadeIn`/`optionsStagger`/`correctPulse` (options) — all standard helpers.
**EDUCATIONAL PURPOSE:** Confirm the numeric answer (3 hours) against the multiple-choice options.
**VISUAL HIERARCHY:** Options grid (new focal point) > stack column (still visible, left) > recentered question (top).
**ATTENTION MANAGEMENT:** Stack cards and connector lines are NOT faded during this scene — they stay visible so the viewer can trace "3 hours" from the Step 2 card straight into option A.
**MOTION NOTES:** `correctPulse` is the single emphasis beat of the whole video.
**CONTINUITY FROM PREVIOUS SCENE:** Step 2's card is still mid-morph into the stack (completing at 80.2s) as the illustration fades and the question recenters at the same 79.4s mark.

### SCENE 10 — End Hold (86.7s – 87.8s+)
**VOICEOVER:** "...option A." (voiceover ends 87.22s)
**VISUAL OBJECTIVE:** Hold the fully solved frame before fading out.
**SCREEN LAYOUT:** Unchanged from Scene 9's final state.
**ON-SCREEN ELEMENTS:** Everything from Scene 9, static.
**ANIMATION DETAILS:** `apt.fadeOut(tl, "#root > div", 87.8, 1.2)` — every direct child of `#root` fades out together.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Single end-fade, no cut.
**EDUCATIONAL PURPOSE:** Give the viewer a beat to register the complete answer before the video ends.
**VISUAL HIERARCHY:** N/A (hold).
**ATTENTION MANAGEMENT:** Deliberate stillness signals "this is the answer."
**MOTION NOTES:** N/A.
**CONTINUITY FROM PREVIOUS SCENE:** Direct continuation of Scene 9's landed state.

---

## PART 3 — Asset List Required

- `illustration/van-svgrepo-com.svg` (already provided) — used twice: as-is for Van B (facing right/default), mirrored via CSS `transform: scaleX(-1)` for Van A (facing left). Per README §5C, left un-recolored since the user supplied it and hasn't asked for a recolor (its own fills — `#008ae0`/`#346ff9`/`#000000` — read as a plausible blue-toned van, close enough to `--primary` neighbors without editing the file).
- No other new assets — road, depot marker, and arrows are all CSS/text, no new SVGs.
- Shared: `serial-num-badge.svg`, `logo.png` (from `_template/assets/`, copied per §5B).

## PART 4 — Animation Complexity Notes

- **Shared-start illustration (Q14 pattern, not Q13):** both vans start stacked at one `#depot-point`, then drift apart — matches the "same depot" premise exactly, unlike Q13's two-separate-towns layout.
- **No x/y unknowns (Q13 pattern, not Q14):** the math never introduces variables — Given → Step 1 (concept + relative-speed formula) → Step 2 (time formula) is a direct 2-step solve, same shape as Q13's "two cars towards each other."
- **Differential drift distance:** Van A moves `x:-260` and Van B moves `x:+322` over the identical 2.4s window (Scene 4) — the 260:322 ratio mirrors the real 38:47 speed ratio.
- **Mirrored single asset:** one `van-svgrepo-com.svg` file serves both vans — Van A is `scaleX(-1)`, Van B is unmirrored.
- **Given card recap-only, concept moved to Step 1:** unlike Q13 (where the "why we add speeds" concept lived inside the Given card as a 4th line), Q17's concept explanation is nearly 25 seconds of narration with real per-van numeric content (38 km/hr, 47 km/hr, "every hour" framing) — too much for a single Given line, so it gets its own full Step 1 card instead, and Given stays a clean 4-line fact recap.
- **Given card recenter:** a plain `y:-200` tween (not `pinFlow`, not `morphToStack`) lifts the Given card once the illustration above it clears at `PIN_TIME` — same technique Q13 used, adapted to this question's timing.
- **`apt.ambientLoop` on both pinned van icons**, offset phase (25.4 / 25.6), covering the entire Step 1 hold (the longest single-card stretch, ~31.5s) so the pinned recap doesn't read as dead.
- **No `apt.emphasize`/`apt.resultReveal`** used inside any active card's `.math` — all number reveals go through `apt.textReveal`'s `.rv` mechanism per the "single reveal only" rule. `apt.emphasize` is used exactly once, on `#depot-point` in Scene 2, which is illustration chrome, not `.math` text.

## PART 5 — Master Timeline Overview

```
TIME (s)   ELEMENT                          WHAT HAPPENS
─────────  ───────────────────────────────  ─────────────────────────────────
0.0        Background layers                Checker/dotted grid, bottom strip, topic, logo
0.3        QuestionCard                      heroEnterLowered (rises at 3.6s)
0.8        SerialNum badge                   pops in, rises with card at 3.6s
4.6        Road line                         roadSweep
5.0        Depot marker                      fadeIn
6.84       Van A (mirrored, faces left)      fromTo scale/fade in
7.4        Van B (faces right)               fromTo scale/fade in
8.08       Depot marker                      emphasize pulse
9.5        SolutionCard "Given"              cardEnter (top:640px, below illustration)
9.5        Given line 1                      textReveal — "same depot" (live)
13.64      "38 km/hr" label + Given line 2   fadeIn + textReveal (live, matched)
18.94      "47 km/hr" label + Given line 3   fadeIn + textReveal (live, matched)
22.0       Outward arrows + Given line 4     fadeIn + textReveal (live, "opposite directions")
22.0       Van A / Van B                     drift x:-260 / x:+322 over 2.4s

[ PIN_TIME = 24.4 ]
24.4       Question + Illustration           🌟 pinFlow (0.8s glide) → pinned slots
24.4       Given card                        recenter tween, y:-200 (NOT part of the glide)
25.4/25.6  Pinned van icons                  ambientLoop begins (offset phase) — runs to 79.4s

[ STEP CYCLE ]
32.4       Given → Given stack               🌟 morphToStack (0.8s)
33.2       SolutionCard "Step 1"             cardEnter
33.2–62.66 Step 1 concept + formula          textReveal (6 reveals, concept → 38+47 → 85 km/hr)
64.72      Step 1 → Step 1 stack             🌟 morphToStack (0.8s) + line-g-1 grows
66.44      SolutionCard "Step 2"             cardEnter
69.34–78.36 Step 2 formula/values/result     textReveal, word-level

[ PHASE 3 — OPTIONS REVEAL ]
79.4       Step 2 → Step 2 stack             🌟 morphToStack (0.8s) + line-1-2 grows
79.4       Illustration fades, question       fadeOut(illus-pinned) + recenterForOptions
           recenters
80.4       options-reveal container          fadeIn
81.0       Option buttons A/B/C/D            optionsStagger (stagger 0.12s)
86.7       Correct option (A)                correctPulse
87.8       End fade                          fadeOut(#root > div), 1.2s
89.0       End                               Video complete
```

**Video duration:** 87.22s (matches `voiceover.wav` exactly); composition runs to ~89.0s with the end fade.
