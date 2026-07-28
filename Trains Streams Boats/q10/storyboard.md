# Storyboard — Trains, Streams and Boats Q10
**A boat goes 60 km downstream at 15 km/hr. Find the time taken.**

Video length: **42.519s** (voiceover duration) — final `END_FADE_TIME` ≈ 42.9s, clip tail to ~44s.
Topic name: **"Trains, Streams and Boats"** (boat question — matches q2/q4/q6/q8 ordering).

Sibling reference: `Trains Streams Boats/q2` ("still water 12, stream 3 → downstream speed") is
the closest built sibling for the river/boat illustration technique (seamless two-layer wave
scroll, boat unit, badge pill, flow-arrow chevrons, pinned mini-recap). The difference: q2 solves
an *addition* (two unknown-until-now speeds combining), so it needs a merge-chip and a badge
text-swap. Q10 is a single **direct division** — distance and speed are both given straight away
in the opening sentence, and the entire "concept" is just "Time = Distance ÷ Speed" — so there is
no concept-teaching beat (no two-stage motion proof, no chip-merge). Only one Given card and one
Step card are needed. A distance bracket (start tick → end tick, "60 km" label) replaces q2's
stream-badge as the second data anchor, and the boat's own downstream glide is timed to the
"we already know the distance / we already know the speed / so we use the basic formula" concept
sentence instead of a dedicated teaching scene.

---

## PART 1 — Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|---|---|---|---|---|
| 1 | 0.12–2.98 | "So welcome back again. Time for one more problem." | Cold open, series continuity | Full-screen question card rising in | Establish frame, no distraction |
| 2 | 3.38–10.64 | "Now, in this problem, we are given that a boat travels sixty kilometer downstream at a speed of fifteen kilometer per hour." | State both given values | River scene assembles, boat drops in, distance bracket ("60 km") and speed badge ("15 km/hr") land on their own spoken numbers | "60 km" registers as the trip's total distance, "15 km/hr" as the boat's speed — anchored before any arithmetic |
| 3 | 11.24–13.26 | "The question is asking us to find the time taken." | Frame the unknown | A "Time = ?" tag fades in above the scene | Plant the target quantity |
| 4 | 13.90–25.30 | "This is a direct formula-based question. We already know the distance. We also know the speed. So we can directly use the basic formula, time is equal to distance divided by speed." | State that both operands are already known, then give the formula | Boat launches into its downstream glide across the full illustration width, distance bracket and speed badge each pulse as they're referenced, formula tag fades in | The boat's own motion doubles as proof that it's covering the "60 km" between the two ticks, while the formula is stated in words |
| 5 | 25.70–27.12 | "Now, let us put the given values." | Bridge from concept to arithmetic | Scene pins | Signals the pivot to solving |
| 6 | 25.70–27.12 (card) | (Given card recap, no fresh new numbers spoken here) | Formalize the two knowns | Given card (center, pinned layout) | "Distance = 60 km", "Speed = 15 km/hr" |
| 7 | 27.58–31.02 | "Time is equal to sixty divided by fifteen." | Step 1 — substitute the real numbers | Step 1 card | 60/15 fraction |
| 8 | 31.58–34.04 | "After simplifying this, we get four hours." | Step 1 — resolve the answer | Step 1 card | "= 4 hours" |
| 9 | 34.42–36.16 | "That's it. Very simple." | Confirmation beat | Step 1 card holds | Breathing room before the recap |
| 10 | 36.56–39.74 | "So the boat takes four hours to travel sixty kilometer downstream." | Recap the full answer in context | Step 1 card holds | Reinforces the answer before the reveal |
| 11 | 40.14–42.52 | "Hence, the correct answer is option B." | Reveal | Options grid, B pulses green | Confirm against the four choices |

---

## PART 2 — Scene-by-Scene Storyboard

Design constraints in force throughout (per `_template/README.md` §4D.1): only `--primary #6373db`,
`--primary-light #e2e5ff`, `--success #4eb85f`, `--topic #949494`, `--text #000000`, `--bg #FFFFFF`;
only `QuestionCard`/`SerialNum`/`SolutionCard`/`SolutionStackCard`/`solutionChip`/`StepCircle`/
`StackLine`/options-grid/`logo`/`topic-name`/`bottomStrip`/Illustration/`Fraction`; only the
helpers in `animations.js`, called explicitly by name below. The illustration (river + boat +
distance bracket + speed badge) is per-question custom markup/CSS, reusing the seamless two-layer
wave-scroll + boat-glide technique from `Trains Streams Boats/q2` (itself derived from
`speed time and distance/q8`), simplified further: no stream-badge/merge-chip/badge-swap (there is
no addition here — both values are already known and directly divided), single downstream leg
only. Assets: `illustration/boat.svg`, `illustration/wave.svg` (`#6373db`), `illustration/wave-light.svg`
(`#e2e5ff`) — copied from `global-illustrations/`, already palette-matched, untouched.

### SCENE 1 — Cold Open (0.0s – 2.98s)
**VOICEOVER:** "So welcome back again. Time for one more problem."
**VISUAL OBJECTIVE:** Establish the question, hero-style.
**SCREEN LAYOUT:** `#q-full-card` centered, lowered per `apt.heroEnterLowered`, at `top:80px`, containing the full question text with "60 km", "15 km/hr" and "time taken" in `.num` blue.
**ON-SCREEN ELEMENTS:** QuestionCard (full), SerialNum badge ("Q").
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 2.98)` — fades/scales in at 0.3s lowered, rises to rest at 2.98s (end of "one more problem"). SerialNum mirrors with its own parallel tween (fades in at 0.8s at the same lowered Y, rises with the card at 2.98s).
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** N/A (opening beat).
**EDUCATIONAL PURPOSE:** Anchor the problem before anything else competes for attention.
**VISUAL HIERARCHY:** QuestionCard > SerialNum > (empty illustration area).
**ATTENTION MANAGEMENT:** Nothing else on screen yet.
**MOTION NOTES:** The rise is timed to finish exactly as "problem" is spoken.
**CONTINUITY FROM PREVIOUS SCENE:** N/A — first scene.

### SCENE 2 — River + Boat Assemble, Distance + Speed Introduced (2.98s – 13.26s)
**VOICEOVER:** "Now, in this problem, we are given that a boat travels sixty kilometer downstream at a speed of fifteen kilometer per hour. The question is asking us to find the time taken."
**VISUAL OBJECTIVE:** Build the river scene and attach both real numbers to their physical referents before any arithmetic, then plant the unknown.
**SCREEN LAYOUT:** `#illustration` (1500×280, centered under the pinned question's future slot): river channel top-to-bottom with the boat idling on it, a distance bracket beneath spanning its future travel path.
**ON-SCREEN ELEMENTS:**
- `#water-fill` — rounded `--primary-light` channel (1500×90, `border-radius:16px`).
- `#river-scene` (`overflow:hidden`) containing `#river-track-back` (`wave-light.svg` row, slower scroll) and `#river-track-front` (`wave.svg` row, faster scroll) — two-layer parallax.
- `#boat-unit` — wrapper holding `boat.svg`, hull overlapping the water's top edge, facing right, idling at its start position.
- `#speed-badge` ("15 km/hr" pill, `--primary` bg, white text) — inside `#boat-unit`, always travels with it.
- `#flow-arrows` — three chevrons (CSS border-triangles, `--primary`), fixed above the river, pointing right (downstream direction).
- `#distance-bracket` — a horizontal line spanning from the boat's start tick to its future end tick (950px, matching the glide distance used in Scene 4), with a vertical tick mark at each end and a "60 km" label centered beneath.
- `#target-tag` — "Time = ?" pill, fades in once the question is framed.
**ANIMATION DETAILS:**
- 3.38s: `apt.cardEnter(tl, "#river-scene", 3.38)` — water body + wave mask fade/scale in.
- Immediately after (3.38s): both wave rows start their seamless scroll loops via the local `riverFlow()` helper, running uninterrupted through the rest of the video (through the pinned recap too).
- 3.9s: `apt.cardEnter(tl, "#boat-unit", 3.9)` — boat drops onto the water, idling.
- Continuous from 3.9s: a small vertical bob (±5px, ~1.6s period) on `#boat-icon`, so it's never dead-still while idling.
- 6.32s: `apt.cardEnter(tl, "#distance-bracket", 6.32)` — bracket + ticks + "60 km" label fade in, timed to the word "sixty".
- 7.44s: `apt.cardEnter(tl, "#flow-arrows", 7.44)` — flow chevrons appear, timed to the word "downstream".
- 9.16s: `apt.cardEnter(tl, "#speed-badge", 9.16)` — "15 km/hr" pops above the boat, timed to the word "fifteen".
- 12.74s: `apt.cardEnter(tl, "#target-tag", 12.74)` — "Time = ?" fades in, timed to the word "time" (in "time taken").
**CAMERA MOVEMENT:** None — static wide shot.
**TRANSITIONS:** Continuous build, no hard cuts.
**EDUCATIONAL PURPOSE:** Get "60 km" → the trip, "15 km/hr" → the boat, and "time taken" → the unknown, all physically anchored before Scene 3's formula statement.
**VISUAL HIERARCHY:** Boat + speed badge (foreground) > river + distance bracket (midground) > flow arrows (background accent).
**ATTENTION MANAGEMENT:** One badge/tag reveals at a time, matching the narration's own ordering (distance → direction → speed → the question).
**MOTION NOTES:** The wave scroll is already running under "we are given that" — the water is never static from the moment it appears.
**CONTINUITY FROM PREVIOUS SCENE:** The question card has just settled into its resting hero position (Scene 1's rise at 2.98s); the illustration begins filling in directly beneath it in the same frame, no cut.

### SCENE 3 — Direct Formula, Both Values Already Known (13.90s – 25.30s)
**VOICEOVER:** "This is a direct formula-based question. We already know the distance. We also know the speed. So we can directly use the basic formula, time is equal to distance divided by speed."
**VISUAL OBJECTIVE:** Show the boat physically completing its 60 km downstream trip while the narration confirms both operands are already known, then land the word-formula.
**SCREEN LAYOUT:** Boat travels left→right across the illustration, from the distance bracket's start tick to its end tick, in the same direction as the flow arrows.
**ON-SCREEN ELEMENTS:** `#boat-unit` (traveling, badge traveling with it), `#distance-bracket` (fixed, the boat crosses it), a bounded wake-flicker trio behind the boat, a `#formula-tag` ("Time = Distance / Speed") that fades in above the scene once the formula is fully stated.
**ANIMATION DETAILS:**
- 13.90s: `tl.to("#boat-unit", {x: 950, duration: 11.4, ease: "power1.out"}, 13.90)` — boat glides right across the illustration, arriving at the distance bracket's end tick right as "speed." finishes at 25.30s, i.e. the glide spans the entire concept sentence.
- 13.90s (parallel): bounded wake-flicker (3 short trailing dashes, opacity fromTo 0↔0.85, bounded repeat for the 13.90–25.30 window) runs the whole glide.
- 18.02s: `apt.emphasize(tl, "#distance-bracket", 18.02)` — pulse, timed to "the distance." (confirms the boat is covering exactly this bracket).
- 19.62s: `apt.emphasize(tl, "#speed-badge", 19.62)` — pulse, timed to "the speed." (confirms the badge traveling with the boat).
- 23.10s: `apt.cardEnter(tl, "#formula-tag", 23.10)` — "Time = Distance / Speed" label fades in, timed to "time is equal to distance divided by speed."
- River scroll and boat bob continue uninterrupted underneath all of the above.
**CAMERA MOVEMENT:** None (the boat provides all horizontal motion within the fixed frame).
**TRANSITIONS:** Continuous from Scene 2 — the boat simply starts moving, no cut.
**EDUCATIONAL PURPOSE:** The boat's own glide is the concrete proof that "distance" and "speed" are both already pinned down — no new concept to teach, just confirmation before the formula.
**VISUAL HIERARCHY:** Traveling boat (primary) > bracket/badge pulses (secondary, sequential) > formula label (closing beat) > river (ambient).
**ATTENTION MANAGEMENT:** Bracket pulse, badge pulse, and formula label are sequenced across the sentence so they don't compete.
**MOTION NOTES:** The glide duration (11.4s) is matched to this scene's narration span (13.90→25.30) so the boat visibly arrives at the end tick exactly as the formula sentence finishes.
**CONTINUITY FROM PREVIOUS SCENE:** The boat is exactly where Scene 2 left it (idling at its start position); it launches into motion from that same spot, no repositioning jump.

### SCENE 4 — PIN FLOW + Given (25.30s – 27.58s)
**VOICEOVER:** "Now, let us put the given values."
**VISUAL OBJECTIVE:** Transition to solving mode; formalize the two knowns into the Given card.
**SCREEN LAYOUT:** Question glides to its pinned top slot (`#q-pinned`); the full illustration glides into a small pinned recap (`#illus-pinned`) that keeps a MINIATURE river+boat running continuously; the Given `SolutionCard` opens center.
**ON-SCREEN ELEMENTS:** `#q-pinned`, `#illus-pinned` (containing `#river-track-mini` — short two-layer wave loop — and a small bobbing boat icon plus the label "60 km · 15 km/hr"), `#card-given` (chip "Given").
**ANIMATION DETAILS:**
- `PIN_TIME = 25.30`: `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 25.30)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 25.30)`. `apt.fadeOut(tl, "#serial-num", 25.30, 0.5)`.
- From `PIN_TIME + 1 = 26.30` onward, through `RECENTER_TIME` (39.74s): `#river-track-mini`'s seamless scroll keeps running and `apt.ambientLoop(tl, "#illus-pinned-icon", 26.30, 39.74)` bobs the small boat — keeps the pinned area alive through the Given/Step1 phase.
- `GIVEN_TIME = 25.70`: `apt.cardEnter(tl, "#card-given .solution-card", 25.70)`.
- `apt.textReveal(tl, "#card-given .math")` reveals (recap lines, no fresh numbers spoken here, so they reveal in quick top-to-bottom succession):
  - line `data-t="25.70"`: "Distance = <span class='hi'>60 km</span>"
  - line `data-t="26.40"`: "Speed = <span class='hi'>15 km/hr</span>"
**CAMERA MOVEMENT:** The pin-flow itself (question+illustration gliding to pinned slots).
**TRANSITIONS:** `apt.pinFlow`'s real glide (0.8s), not a cut.
**EDUCATIONAL PURPOSE:** Converts the illustration's two anchored numbers directly into the Given card.
**VISUAL HIERARCHY:** Given card (center, primary) > pinned question (top, secondary) > pinned river recap (ambient, still alive).
**ATTENTION MANAGEMENT:** The two given facts reveal in the same order as Scene 2 (distance, then speed).
**MOTION NOTES:** The mini river/boat loop is what keeps this scene from reading static.
**CONTINUITY FROM PREVIOUS SCENE:** The full illustration is still mid-glide into its pinned slot as the Given card opens — same continuous motion carrying over.

### SCENE 5 — STEP 1: Divide to Get the Time (27.58s – 39.74s)
**VOICEOVER:** "Time is equal to sixty divided by fifteen. After simplifying this, we get four hours. That's it. Very simple. So the boat takes four hours to travel sixty kilometer downstream."
**VISUAL OBJECTIVE:** Restate the formula, substitute the real numbers, and deliver the answer — then hold through the confirmation and recap lines.
**SCREEN LAYOUT:** Given card morphs to the left stack; Step 1 `SolutionCard` opens center and stays through the recap.
**ON-SCREEN ELEMENTS:** `#stack-given` (`.step-circle` "G"), `#card-step1`.
**ANIMATION DETAILS:**
- `GIVEN_MORPH_TIME = 27.12`: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 27.12)`.
- `STEP1_TIME = 27.58`: `apt.cardEnter(tl, "#card-step1 .solution-card", 27.58)`.
- `apt.textReveal(tl, "#card-step1 .math")` reveals:
  - line `data-t="27.58"` (word-frac, recap of the formula — no fresh narration of its own at this instant, reveals immediately as the card opens): "Time = <span class='frac'><span class='top hi'>Distance</span><span class='bot hi'>Speed</span></span>"
  - line `data-t="29.12"` (numeric substitution, timed to the word "sixty"): "Time = <span class='frac'><span class='top hi'>60</span><span class='bot hi'>15</span></span>"
  - `data-t="33.50"` (`.ans`, timed to the word "four"): "= 4 hours"
- Pinned river/boat recap continues its loop, unbroken, through the whole hold (including "That's it. Very simple." and the recap sentence).
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** `apt.morphToStack` (0.8s box+text crossfade).
**EDUCATIONAL PURPOSE:** Isolate the arithmetic as its own clean reveal beat, then let it sit through the confirmation/recap so the answer is fully absorbed before the options appear.
**VISUAL HIERARCHY:** Step 1 card (center, active) > stack-given (left, archived) > pinned recap (ambient).
**ATTENTION MANAGEMENT:** Three sequential reveals, matched to the narration's own pacing; then a long deliberate hold with no new competing motion.
**MOTION NOTES:** River keeps flowing; boat keeps bobbing throughout the entire hold.
**CONTINUITY FROM PREVIOUS SCENE:** Given card is still fully visible/readable up until the moment it starts its morph — no early fade.

### SCENE 6 — Options Reveal (39.74s – 42.52s)
**VOICEOVER:** "Hence, the correct answer is option B."
**VISUAL OBJECTIVE:** Confirm the answer against all four choices.
**SCREEN LAYOUT:** Step 1 morphs to stack; pinned question recenters; illustration recap clears; options grid (2×2) appears.
**ON-SCREEN ELEMENTS:** `#stack-step1` (`.step-circle` "1"), `#line-g-1` connector, `#options-reveal` (A: 3.5 h, B: 4 h — correct, C: 4.5 h, D: 5 h).
**ANIMATION DETAILS:**
- `RECENTER_TIME = 39.74`: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 39.74)`; `apt.stackLineGrow(tl, "#line-g-1", 39.74)`.
- 39.74s: `apt.fadeOut(tl, "#illus-pinned", 39.74)` (only clean stopping point for the river/boat recap); `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 39.74)`.
- 40.3s: `apt.fadeIn(tl, "#options-reveal", 40.3)`.
- 40.7s: `apt.optionsStagger(tl, ".opt-btn", 40.7)`.
- 42.00s: `apt.correctPulse(tl, ".opt-btn.correct", 42.00)`, timed to land on "option B."
- 42.9s: `apt.fadeOut(tl, "#root > div", 42.9, 1.0)` — END FADE.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** `apt.morphToStack` + `apt.recenterForOptions`.
**EDUCATIONAL PURPOSE:** Standard close — verify the derived answer (4 hours) against the given options.
**VISUAL HIERARCHY:** Options grid (primary) > stack column (secondary) > pinned question (tertiary).
**ATTENTION MANAGEMENT:** Stagger-then-pulse, standard two-beat close.
**MOTION NOTES:** This is the one deliberate point where continuous ambient motion (river recap) is allowed to stop — immediately replaced by the options-reveal's own motion.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1 remains fully legible until its own morph fires — no premature fade.

---

## PART 3 — Asset List Required

| Asset | Source | Notes |
|---|---|---|
| `illustration/boat.svg` | Copied from `global-illustrations/boat.svg` | Untouched — already blue-hull/white-deck, palette-matched |
| `illustration/wave.svg` | Copied from `global-illustrations/wave.svg` | `.st0{fill:#6373db}` — front (faster) wave row |
| `illustration/wave-light.svg` | Copied from `global-illustrations/wave-light.svg` | `.st0{fill:#e2e5ff}` — back (slower) wave row |
| `design-system.css`, `animations.js`, `assets/` | Copied from `_template/` | Per README §5B |

No new colors, fonts, or template components introduced — all illustration CSS (river channel,
boat wrapper, speed badge, distance bracket, formula tag, flow arrows) is per-question custom
markup as permitted by design.md's "Illustration" section.

---

## PART 4 — Animation Complexity Notes

- **Seamless wave loop ("riverFlow" pattern):** identical technique to `Trains Streams Boats/q2` / `speed time and distance/q8` — each wave row is two identical tile-copies back to back, a `fromTo(x: -tileWidth → 0)` tween with `ease:"none"` and a bounded, computed repeat count (never `-1`) restarts seamlessly at each cycle boundary.
- **Two independent wave layers** (`wave-light.svg` slower/back, `wave.svg` faster/front) for parallax depth — a local `riverFlow()` helper defined inline in the composition's own `<script>` block, same pattern as q2/q8.
- **No addition, no algebra, no badge swap:** unlike q2 (which solves an addition with a merge-chip and a badge text-swap), this question is a single direct division with both operands already known and stated up front — so the boat only ever travels once (downstream), and there is no chip/badge animation beyond the plain speed pill. This keeps the illustration simpler while reusing the same river/boat technique.
- **Distance bracket instead of a second badge:** since the "other" given value here is a distance, not a second speed, the second data anchor is a measuring bracket (start tick → end tick, "60 km" label) rather than a stream-badge — the boat's glide crossing this exact bracket is the visual proof that the 60 km has been fully covered.
- **Pinned recap never idles:** the pinned illustration keeps its own miniature wave loop and boat bob running continuously from `PIN_TIME+1` through `RECENTER_TIME` (~13.4s span covering the entire Given/Step1 phase — the longest hold in this video, since there is only one step and the recap sentence plays out entirely inside it).
- **Only one true stop:** the illustration recap's fade-out at 39.74s (Scene 6) is the sole point where continuous ambient motion ends, immediately superseded by the options-reveal's own stagger/pulse animation.

---

## PART 5 — Master Timeline Overview

```
TIME (s)   ELEMENT                          WHAT HAPPENS
─────────  ───────────────────────────────  ─────────────────────────────────
0.0        Background + bottomStrip+logo    Always visible
0.3        QuestionCard                     heroEnterLowered — fades/scales in low
0.8        SerialNum                        pops in low, mirrors card
2.98       QuestionCard + SerialNum         rise to resting position
3.38       River (2-layer wave loop)        seamless scroll begins — never stops until 39.74
3.9        Boat                             drops onto water, idle bob begins
6.32       Distance bracket ("60 km")       cardEnter
7.44       Flow arrows                      cardEnter
9.16       Speed badge ("15 km/hr")         cardEnter on boat
12.74      "Time = ?" tag                   cardEnter
13.90      Boat                             glides RIGHT 950px over 11.4s (downstream)
18.02      Distance bracket                 emphasize pulse ("the distance")
19.62      Speed badge                      emphasize pulse ("the speed")
23.10      "Time = Distance / Speed" label  cardEnter

[ PIN_TIME = 25.30 ]
─────────  ───────────────────────────────  ─────────────────────────────────
25.30      Question + Illustration          🌟 pinFlow — real glide to pinned slots
26.30      Pinned river/boat recap          mini seamless loop + bob begins — runs to 39.74

[ GIVEN_TIME = 25.70 ]
─────────  ───────────────────────────────  ─────────────────────────────────
25.70      Given card                       cardEnter (center)
25.70–26.40 Given card .math                textReveal (distance line, then speed line)

[ STEP CYCLE ]
─────────  ───────────────────────────────  ─────────────────────────────────
27.12      Given → Given stack               🌟 morphToStack
27.58      Step 1 card                       cardEnter
27.58–33.50 Step 1 .math                     textReveal (formula → 60/15 → = 4 hours)
33.50–39.74 Step 1 card holds                covers "That's it. Very simple." + recap sentence

[ PHASE 3 ]
─────────  ───────────────────────────────  ─────────────────────────────────
39.74      Step 1 → Step 1 stack            🌟 morphToStack + stackLineGrow (G→1)
39.74      Pinned illustration recap        fadeOut (the ONE deliberate stop)
39.74      Pinned question                  recenterForOptions
40.3       Options grid                     fadeIn
40.7       Option buttons                   optionsStagger
42.00      Correct option (B)               correctPulse
42.9       Everything                       END FADE (1.0s)
```

**Video duration:** 42.519s (matches `voiceover.wav` exactly).
