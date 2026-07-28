# Storyboard — Boats & Streams: "Still Water 12, Stream 3 → Find Downstream Speed"

Topic: Trains, Streams and Boats · Question 2 · Voiceover duration: **66.319s**

---

## PART 1 — Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|---|---|---|---|---|
| 1 | 0.10–4.22 | "So welcome back again. Time for one more problem." | Warm open, series continuity | Full-screen question card rising in | Establish frame, no distraction |
| 2 | 4.86–12.14 | "Now in this problem we are given that the speed of the boat in still water is 12 km/hr." | State the boat's own speed | River scene assembling, boat drops in, "12" badge pops on the boat | Number 12 registers as the BOAT's own speed |
| 3 | 12.88–16.30 | "Also, the speed of the stream is 3 km/hr." | State the stream's speed | "3" badge pops above the flowing river | Number 3 registers as the RIVER's speed, independent of the boat |
| 4 | 16.98–20.60 | "The question is asking us to find the downstream speed of the boat." | Frame the unknown | A "Downstream Speed = ?" tag fades in above the scene | Plant the target quantity before any concept explanation |
| 5 | 21.10–27.72 | "Now before solving, let us understand one simple concept. Imagine the river is flowing in one direction." | Set up the physical model | Flow arrows sweep in, pointing one fixed direction | The current's direction is fixed and visible for the rest of the scene |
| 6 | 28.34–34.54 | "When the boat moves in the same direction as the river, the stream helps the boat move faster," | THE core downstream concept, part 1 | Boat launches into a smooth glide WITH the current | Motion literally shows the boat picking up help from the current |
| 7 | 35.22–38.70 | "so both the speeds get added. This is the basic rule to remember." | THE core concept, part 2 | A "+3" chip flies from the stream badge into the boat's badge, merging into "12 + 3" | Motion demonstrates addition — the badge itself becomes the sum |
| 8 | 39.30–44.46 | "Downstream speed is equal to speed in still water plus speed of the stream." | State the formula in words | "Downstream = Still Water + Stream" label fades in above the boat | Converts the visual demo into the reusable formula |
| 9 | 44.80–46.16 | "Got it? Perfect." | Confirmation beat | Scene holds, boat still gliding/bobbing | Brief breathing room before the pivot to arithmetic |
| 10 | 46.66–49.18 | "Now let us put the given values into the formula." | Bridge from concept to arithmetic | Scene holds, about to pin | Signals the pivot to solving |
| 11 | 49.76–53.60 | "Downstream speed is equal to 12 plus 3." | State the Given equation with real numbers | Given card (center, pinned layout) | Reader sees the two real numbers slotted into the formula |
| 12 | 54.22–57.78 | "After adding them, we get 15 km/hr." | Step 1 — the arithmetic | Step 1 card | Deliver the sum |
| 13 | 58.42–66.32 | "So the downstream speed of the boat is 15 km/hr. Hence, the correct answer is option B." | Reveal | Options grid, B pulses green | Confirm against the four choices |

---

## PART 2 — Scene-by-Scene Storyboard

Design constraints in force throughout (per `_template/README.md` §4D.1): only `--primary #6373db`, `--primary-light #e2e5ff`, `--success #4eb85f`, `--topic #949494`, `--text #000000`, `--bg #FFFFFF`; only `QuestionCard`/`SerialNum`/`SolutionCard`/`SolutionStackCard`/`solutionChip`/`StepCircle`/`StackLine`/options-grid/`logo`/`topic-name`/`bottomStrip`/Illustration/Fraction; only the helpers in `animations.js`, called explicitly by name below. The illustration (river + boat + badges) is per-question custom markup/CSS, reusing the boat/river technique from [speed time and distance/q8](../../speed%20time%20and%20distance/q8/index.html) — same seamless two-layer wave scroll and boat glide — but simplified: no B/C algebra variables (this question has no unknown to solve for algebraically, just a direct addition), no upstream leg (this question is downstream-only), and badges show the REAL numbers (12, 3) instead of letters. Assets: `illustration/boat.svg`, `illustration/wave.svg` (`#6373db`), `illustration/wave-light.svg` (`#e2e5ff`) — copied from `global-illustrations/`, already palette-matched, untouched.

### SCENE 1 — Cold Open (0.0s – 4.3s)
**VOICEOVER:** "So welcome back again. Time for one more problem."
**VISUAL OBJECTIVE:** Establish the question, hero-style.
**SCREEN LAYOUT:** `#q-full-card` centered, lowered per `apt.heroEnterLowered`, at `top:80px`, containing the full question text with "12 km/hr", "3 km/hr" and "downstream speed" in `.num` blue.
**ON-SCREEN ELEMENTS:** QuestionCard (full), SerialNum badge ("Q").
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 4.3)` — fades/scales in at 0.3s lowered, rises to rest at 4.3s (end of "one more problem"). SerialNum mirrors with its own parallel tween (fades in at 0.8s at the same lowered Y, rises with the card at 4.3s).
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** N/A (opening beat).
**EDUCATIONAL PURPOSE:** Anchor the problem before anything else competes for attention.
**VISUAL HIERARCHY:** QuestionCard > SerialNum > (empty illustration area).
**ATTENTION MANAGEMENT:** Nothing else on screen yet.
**MOTION NOTES:** The rise is timed to finish exactly as "problem" is spoken.
**CONTINUITY FROM PREVIOUS SCENE:** N/A — first scene.

### SCENE 2 — River + Boat Assemble, Speeds Introduced (4.3s – 20.6s)
**VOICEOVER:** "Now in this problem we are given that the speed of the boat in still water is 12 km/hr. Also, the speed of the stream is 3 km/hr. The question is asking us to find the downstream speed of the boat."
**VISUAL OBJECTIVE:** Build the river scene and attach both real numbers to their physical referents before any arithmetic.
**SCREEN LAYOUT:** `#illustration` (1500×280, centered under the pinned question's future slot): river channel top-to-bottom with the boat idling on it.
**ON-SCREEN ELEMENTS:**
- `#water-body` — rounded `--primary-light` channel (1500×90, `border-radius:16px`).
- `#river-mask` (`overflow:hidden`) containing `#river-track-back` (`wave-light.svg` row, slower scroll) and `#river-track-front` (`wave.svg` row, faster scroll) — two-layer parallax.
- `#boat-unit` — wrapper holding `boat.svg`, hull overlapping the water's top edge, facing right.
- `#boat-badge` ("12" pill, `--primary` bg, white text) — inside `#boat-unit`, always travels with it.
- `#stream-badge` ("3" pill, same style) — fixed above the river, independent of the boat.
- `#flow-arrows` — three chevrons (CSS border-triangles, `--primary`), fixed above the river, pointing right.
- `#target-tag` — "Downstream Speed = ?" pill, fades in once the question is framed.
**ANIMATION DETAILS:**
- 4.86s: `apt.cardEnter(tl, "#river-scene", 4.86)` — water body + wave mask fade/scale in.
- Immediately after (4.86s): both wave rows start their seamless scroll loops via the local `riverFlow()` helper, running uninterrupted through the rest of the video (through the pinned recap too).
- 5.4s: `apt.cardEnter(tl, "#boat-unit", 5.4)` — boat drops onto the water, idling.
- Continuous from 5.4s: a small vertical bob (±4px, ~1.4s period) on `#boat-icon`, so it's never dead-still while idling.
- 10.18s: `apt.cardEnter(tl, "#boat-badge", 10.18)` — "12" pops above the boat, timed to the word "12".
- 15.08s: `apt.cardEnter(tl, "#stream-badge", 15.08)` and `apt.cardEnter(tl, "#flow-arrows", 15.08)` — "3" pops above the river and the flow arrows appear together, timed to the word "3".
- 18.88s: `apt.cardEnter(tl, "#target-tag", 18.88)` — "Downstream Speed = ?" fades in, timed to the word "downstream".
**CAMERA MOVEMENT:** None — static wide shot.
**TRANSITIONS:** Continuous build, no hard cuts.
**EDUCATIONAL PURPOSE:** Get 12 → boat and 3 → river physically anchored before Scene 4's addition payoff.
**VISUAL HIERARCHY:** Boat + "12" badge (foreground) > river + "3" badge (midground) > flow arrows (background accent).
**ATTENTION MANAGEMENT:** One badge/tag reveals at a time, matching the narration's own ordering (boat speed → stream speed → the question).
**MOTION NOTES:** The wave scroll is already running under the "we are given that" narration — the water is never static from the moment it appears.
**CONTINUITY FROM PREVIOUS SCENE:** The question card has just settled into its resting hero position (Scene 1's rise at 4.3s); the illustration begins filling in directly beneath it in the same frame, no cut.

### SCENE 3 — Flow Direction Fixed (20.6s – 28.34s)
**VOICEOVER:** "Now, before solving, let us understand one simple concept. Imagine the river is flowing in one direction."
**VISUAL OBJECTIVE:** Establish that the current has one fixed, constant direction before the boat starts moving with it.
**SCREEN LAYOUT:** Same river/boat scene; arrows become the focal point.
**ON-SCREEN ELEMENTS:** `#flow-arrows` (already on screen from Scene 2, now emphasized).
**ANIMATION DETAILS:**
- 25.08s: `apt.emphasize(tl, "#flow-arrows", 25.08)` — the three chevrons pulse once, timed to "the river is flowing in one direction."
- Waves keep scrolling, boat keeps bobbing throughout — no pause.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Continuous from Scene 2.
**EDUCATIONAL PURPOSE:** Plants the current's fixed direction as a settled fact right before the boat launches into it.
**VISUAL HIERARCHY:** Flow arrows momentarily promoted during their pulse, then settle back.
**ATTENTION MANAGEMENT:** Single pulse, nothing else competes.
**MOTION NOTES:** A calm beat before Scene 4's launch, so the glide reads as a clear step up in energy.
**CONTINUITY FROM PREVIOUS SCENE:** Boat and badges are exactly where Scene 2 left them; only the flow arrows pulse — nothing repositions.

### SCENE 4 — DOWNSTREAM: Speeds Add (28.34s – 44.46s)
**VOICEOVER:** "When the boat moves in the same direction as the river, the stream helps the boat move faster, so both the speeds get added. This is the basic rule to remember. Downstream speed is equal to speed in still water plus speed of the stream."
**VISUAL OBJECTIVE:** The single most important visual beat — literally show 12 and 3 combining into a faster boat.
**SCREEN LAYOUT:** Boat travels left→right across the illustration width, in the same direction as the flow arrows.
**ON-SCREEN ELEMENTS:** `#boat-unit` (traveling), `#boat-badge` (traveling with it), `#stream-badge` (stays fixed at its river position), a `#merge-chip` ("+3") that flies from `#stream-badge` to the boat, a `#formula-tag` ("Downstream = Still Water + Stream") that fades in above the scene, a bounded wake-flicker trio behind the boat.
**ANIMATION DETAILS:**
- 28.34s: `tl.to("#boat-unit", {x: 950, duration: 16.12, ease: "power1.out"}, 28.34)` — boat glides right across the illustration, arriving at the right edge right as "remember" finishes, i.e. the glide itself spans the entire concept explanation.
- 28.34s (parallel): bounded wake-flicker (3 short trailing dashes, opacity fromTo 0↔0.8, bounded repeat for the 28.34–44.46 window) runs the whole glide.
- 32.56s: `tl.to("#merge-chip", {...flies from stream-badge's position toward the boat's live x-position...}, 32.56)` — timed to "the stream helps the boat move faster."
- 35.22s: chip lands/merges into `#boat-badge`; the badge's text crossfades from "12" to "12 + 3" (0.25s opacity swap of two stacked spans, same idiom `apt.morphToStack` uses internally), timed to "so both the speeds get added."
- 39.30s: `apt.cardEnter(tl, "#formula-tag", 39.30)` — "Downstream = Still Water + Stream" label fades in, timed to "Downstream speed is equal to...".
- 43.56s: `apt.emphasize(tl, "#formula-tag", 43.56)` — pulse on "...plus speed of the stream."
- River scroll and boat bob continue uninterrupted underneath all of the above.
**CAMERA MOVEMENT:** None (the boat provides all horizontal motion within the fixed frame).
**TRANSITIONS:** Continuous from Scene 3 — the boat simply starts moving, no cut.
**EDUCATIONAL PURPOSE:** Concrete, motion-based proof of "downstream = still water + stream" — the abstract formula and the visible speed-up land together.
**VISUAL HIERARCHY:** Traveling boat + merging chip (primary) > formula label (secondary) > river (ambient).
**ATTENTION MANAGEMENT:** Chip-merge and formula label are sequenced ~7s apart (32.56s vs 39.30s) so they don't compete.
**MOTION NOTES:** The glide duration (16.12s) is matched to this scene's narration span (28.34→44.46) so the boat visibly arrives at the right edge exactly as the formula sentence finishes.
**CONTINUITY FROM PREVIOUS SCENE:** The boat is exactly where Scene 3 left it (idling at its Scene-2 starting position); it launches into motion from that same spot, no repositioning jump.

### SCENE 5 — Hold + Bridge to Arithmetic (44.46s – 48.3s)
**VOICEOVER:** "Got it? Perfect. Now let us put the given values into the formula."
**VISUAL OBJECTIVE:** A settled breathing beat before the pin.
**SCREEN LAYOUT:** Boat holds at its Scene 4 end position (right edge).
**ON-SCREEN ELEMENTS:** Full scene as left by Scene 4 — badge still reads "12 + 3", formula tag still visible.
**ANIMATION DETAILS:** No new tweens beyond the continuous river scroll/boat bob — this is the held beat right before `PIN_TIME`.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Leads directly into Scene 6's pin-flow.
**EDUCATIONAL PURPOSE:** Lets the viewer mentally close the "concept" chapter before "arithmetic" begins.
**VISUAL HIERARCHY:** Unchanged from Scene 4.
**ATTENTION MANAGEMENT:** Nothing new competes — intentional breathing room.
**MOTION NOTES:** River/bob ambient motion is the only thing moving — never a fully frozen frame.
**CONTINUITY FROM PREVIOUS SCENE:** Direct hold of Scene 4's final frame.

### SCENE 6 — PIN FLOW + Given (48.3s – 53.7s)
**VOICEOVER:** "Downstream speed is equal to 12 plus 3."
**VISUAL OBJECTIVE:** Transition to solving mode; state the equation with the real numbers.
**SCREEN LAYOUT:** Question glides to its pinned top slot (`#q-pinned`); the full illustration glides into a small pinned recap (`#illus-pinned`) that keeps a MINIATURE river+boat running continuously; the Given `SolutionCard` opens center.
**ON-SCREEN ELEMENTS:** `#q-pinned`, `#illus-pinned` (containing `#river-track-mini` — short two-layer wave loop — and a small bobbing boat icon plus the label "Still Water = 12 · Stream = 3"), `#card-given` (chip "Given").
**ANIMATION DETAILS:**
- `PIN_TIME = 48.3`: `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 48.3)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 48.3)`. `apt.fadeOut(tl, "#serial-num", 48.3, 0.5)`.
- From `PIN_TIME + 1 = 49.3` onward, through `RECENTER_TIME` (58.3s): `#river-track-mini`'s seamless scroll keeps running and `apt.ambientLoop(tl, "#illus-pinned-icon", 49.3, 58.3)` bobs the small boat — keeps the pinned area alive through the Given/Step1 phase.
- `GIVEN_TIME = 49.76`: `apt.cardEnter(tl, "#card-given .solution-card", 49.76)`.
- `apt.textReveal(tl, "#card-given .math")` reveals:
  - line `data-t="49.76"`: "Speed in Still Water = <span class='hi'>12 km/hr</span>"
  - word-level around `52.10`–`52.86`: reinforces "12"
  - line `data-t="53.50"`: "Speed of Stream = <span class='hi'>3 km/hr</span>"
**CAMERA MOVEMENT:** The pin-flow itself (question+illustration gliding to pinned slots).
**TRANSITIONS:** `apt.pinFlow`'s real glide (0.8s), not a cut.
**EDUCATIONAL PURPOSE:** Converts the visual/conceptual demo directly into the two numbers that will be added.
**VISUAL HIERARCHY:** Given card (center, primary) > pinned question (top, secondary) > pinned river recap (ambient, still alive).
**ATTENTION MANAGEMENT:** The two given facts reveal in narration order (still water, then stream).
**MOTION NOTES:** The mini river/boat loop is what keeps this scene from reading static.
**CONTINUITY FROM PREVIOUS SCENE:** The full illustration is still mid-glide into its pinned slot as the Given card opens — same continuous motion carrying over.

### SCENE 7 — STEP 1: Add the Speeds (53.7s – 58.3s)
**VOICEOVER:** "After adding them, we get 15 km/hr."
**VISUAL OBJECTIVE:** Deliver the sum.
**SCREEN LAYOUT:** Given card morphs to the left stack; Step 1 `SolutionCard` opens center.
**ON-SCREEN ELEMENTS:** `#stack-given` (`.step-circle` "G"), `#card-step1`.
**ANIMATION DETAILS:**
- 53.7s: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 53.7)`.
- 54.5s: `apt.cardEnter(tl, "#card-step1 .solution-card", 54.5)`.
- `apt.textReveal(tl, "#card-step1 .math")` reveals:
  - word-level `data-t="54.22"`–`54.70`: "After adding them:"
  - word-level `data-t="55.74"` on: "12 + 3 = <span class='ans'>15 km/hr</span>"
- Pinned river/boat recap continues its loop, unbroken.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** `apt.morphToStack` (0.8s box+text crossfade).
**EDUCATIONAL PURPOSE:** Isolate the arithmetic as its own clean reveal beat.
**VISUAL HIERARCHY:** Step 1 card (center, active) > stack-given (left, archived) > pinned recap (ambient).
**ATTENTION MANAGEMENT:** Two sequential reveals, matched to the narration's own pacing.
**MOTION NOTES:** River keeps flowing; boat keeps bobbing.
**CONTINUITY FROM PREVIOUS SCENE:** Given card is still fully visible/readable up until the moment it starts its morph — no early fade.

### SCENE 8 — Options Reveal (58.3s – 66.32s)
**VOICEOVER:** "So the downstream speed of the boat is 15 km/hr. Hence, the correct answer is option B."
**VISUAL OBJECTIVE:** Confirm the answer against all four choices.
**SCREEN LAYOUT:** Step 1 morphs to stack; pinned question recenters; illustration recap clears; options grid (2×2) appears.
**ON-SCREEN ELEMENTS:** `#stack-step1` (`.step-circle` "1"), `#line-g-1` connector, `#options-reveal` (A: 13.2, B: 15 — correct, C: 16.8, D: 18.6).
**ANIMATION DETAILS:**
- 58.3s: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 58.3)`; `apt.stackLineGrow(tl, "#line-g-1", 58.3)`.
- 58.3s: `apt.fadeOut(tl, "#illus-pinned", 58.3)` (only clean stopping point for the river/boat recap); `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 58.3)`.
- 58.9s: `apt.fadeIn(tl, "#options-reveal", 58.9)`.
- 59.3s: `apt.optionsStagger(tl, ".opt-btn", 59.3)`.
- 65.72s: `apt.correctPulse(tl, ".opt-btn.correct", 65.72)`, timed to land on "option B."
- 66.9s: `apt.fadeOut(tl, "#root > div", 66.9, 1.2)` — END FADE.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** `apt.morphToStack` + `apt.recenterForOptions`.
**EDUCATIONAL PURPOSE:** Standard close — verify the derived answer (15 km/hr) against the given options.
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

No new colors, fonts, or template components introduced — all illustration CSS (river channel, boat wrapper, badges, chip, formula tag, flow arrows) is per-question custom markup as permitted by design.md's "Illustration" section.

---

## PART 4 — Animation Complexity Notes

- **Seamless wave loop ("riverFlow" pattern):** identical technique to [q8](../../speed%20time%20and%20distance/q8/index.html) — each wave row is two identical tile-copies back to back, a `fromTo(x: -tileWidth → 0)` tween with `ease:"none"` and a bounded, computed repeat count (never `-1`) restarts seamlessly at each cycle boundary.
- **Two independent wave layers** (`wave-light.svg` slower/back, `wave.svg` faster/front) for parallax depth — a local `riverFlow()` helper defined inline in the composition's own `<script>` block, same pattern as q8.
- **No B/C algebra, no direction flip:** unlike q8 (which solves simultaneous equations for an unknown current speed and shows both downstream and upstream legs), this question is a single direct addition with both operands known — so the boat only ever travels one direction, and its badge shows real numbers ("12", "12 + 3") rather than letters. This keeps the illustration simpler while reusing the same river/boat/badge/chip technique.
- **Badge text swap** ("12" → "12 + 3") uses the same plain 0.25s opacity-crossfade idiom `apt.morphToStack` already uses internally — two stacked `<span>`s inside the badge, only one visible at a time via opacity.
- **Pinned recap never idles:** the pinned illustration keeps its own miniature wave loop and boat bob running continuously from `PIN_TIME+1` through `RECENTER_TIME` (~9s span covering the entire Given/Step1 phase).
- **Only one true stop:** the illustration recap's fade-out at 58.3s (Scene 8) is the sole point where continuous ambient motion ends, immediately superseded by the options-reveal's own stagger/pulse animation.

---

## PART 5 — Master Timeline Overview

```
TIME (s)   ELEMENT                          WHAT HAPPENS
─────────  ───────────────────────────────  ─────────────────────────────────
0.0        Background + bottomStrip+logo    Always visible
0.3        QuestionCard                     heroEnterLowered — fades/scales in low
0.8        SerialNum                        pops in low, mirrors card
4.3        QuestionCard + SerialNum         rise to resting position
4.86       River (2-layer wave loop)        seamless scroll begins — never stops until 58.3s
5.4        Boat                             drops onto water, idle bob begins
10.18      "12" badge                       cardEnter on boat
15.08      "3" badge + flow arrows          cardEnter (together)
18.88      "Downstream Speed = ?" tag       cardEnter
25.08      Flow arrows                      emphasize pulse ("one direction")
28.34      Boat                             glides RIGHT 950px over 16.12s (downstream)
32.56      "+3" chip                        flies from stream-badge to boat
35.22      "12" badge                       text swap → "12 + 3"
39.30      "Downstream = Still Water + Stream" label   cardEnter
43.56      Formula label                    emphasize pulse
44.46–48.3 Scene holds                      brief settle before pin

[ PIN_TIME = 48.3 ]
─────────  ───────────────────────────────  ─────────────────────────────────
48.3       Question + Illustration          🌟 pinFlow — real glide to pinned slots
49.3       Pinned river/boat recap          mini seamless loop + bob begins — runs to 58.3s

[ GIVEN_TIME = 49.76 ]
─────────  ───────────────────────────────  ─────────────────────────────────
49.76      Given card                       cardEnter (center)
49.76–53.6 Given card .math                 textReveal (still water eq, then stream eq)

[ STEP CYCLE ]
─────────  ───────────────────────────────  ─────────────────────────────────
53.7       Given → Given stack               🌟 morphToStack
54.5       Step 1 card                       cardEnter
54.5–57.78 Step 1 .math                      textReveal (12 + 3 = 15)

[ PHASE 3 ]
─────────  ───────────────────────────────  ─────────────────────────────────
58.3       Step 1 → Step 1 stack            🌟 morphToStack + stackLineGrow (G→1)
58.3       Pinned illustration recap        fadeOut (the ONE deliberate stop)
58.3       Pinned question                  recenterForOptions
58.9       Options grid                     fadeIn
59.3       Option buttons                   optionsStagger
65.72      Correct option (B)               correctPulse
66.9       Everything                       END FADE (1.2s)
```

**Video duration:** 66.319s (matches `voiceover.wav` exactly).
