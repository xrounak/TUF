# Storyboard - "Passenger as a Point, Opposite Direction" (Trains, Streams and Boats - Q40)

Question: A passenger in a train moving at 36 km/h observes a 180 m train coming from the opposite direction at 54 km/h. How long does the other train take to pass him?
Options: A) 6.34 s  B) 8.06 s  C) 8.93 s  **D) 7.2 s (correct)**
Voiceover: `voiceover.wav` - duration **84.70s**
Transcript: `transcript.json` / `transcript.txt`

Sibling reference: `q11` (two trains, opposite directions, relative speed = sum) supplies the base
two-train rail illustration (rail sweep, mirrored `train.svg`, opposite chevrons, inward drift during
the concept beat, pinned two-train recap). This question extends that pattern with two new beats
q11 didn't need: (1) the "passenger treated as a point" concept - the passenger icon on Train A
shrinks into a plain dot with a "= Point (no length)" tag, explaining why only the OTHER train's
180 m matters; (2) a km/hr -> m/s unit-conversion beat built as a floating equation tag using the
existing `.frac` component (never a bare ÷, per house style) for "90 x 5/18 = 25 m/s". No new colors
or components - both new beats reuse `.tag-pill`/`.frac` already in the design system.

---

## PART 1 - Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|---|---|---|---|---|
| 1 | 0.10-3.76 | "So welcome back again. It's time to solve one more problem." | Cold open | Question card rising in | Establish frame |
| 2 | 4.30-10.80 | "Now in this problem, a passenger is sitting inside a train moving at thirty-six kilometer per hour." | Introduce Train A + the passenger | Rail sweeps in, Train A fades on with a passenger dot on board, "36 km/hr" badge pops on the speed word | Anchor passenger + first speed before the second train exists |
| 3 | 11.40-17.46 | "He sees another train of length one hundred eighty meters coming from the opposite direction at fifty-four kilometers per hour." | Introduce Train B, its length, its speed, and the opposite direction | Train B fades on (mirrored, facing left), "180 m" length badge, opposite chevrons, "54 km/hr" badge, each on its own word | Every given value is anchored to the correct object before any concept talk |
| 4 | 18.02-22.80 | "The question is asking us to find how much time the other train takes to completely pass the passenger." | Frame the unknown | Hold | Plant the target quantity before the concept beat |
| 5 | 23.20-33.42 | "Now, the important point here is that the passenger is treated as a point. Since a passenger has no length, the other train only needs to cover its own length, which is one hundred eighty meter." | THE key concept - collapse the passenger to a point | Passenger icon shrinks to a plain dot; "Passenger = Point (no length)" tag fades in; Train B's "180 m" badge re-pulses | Explains why only 180 m (not any passenger length) is the distance to cover |
| 6 | 34.50-39.18 | "The trains are moving in opposite directions. What does that mean? It means their speeds add up." | Re-state the opposite-direction rule | Trains drift inward, opposite chevrons steady | Confirms speeds add (same rule q11 taught, re-applied here) |
| 7 | 39.78-45.12 | "So the relative speed will be thirty-six plus fifty-four equals ninety kilometer per hour." | Compute relative speed | Floating equation tag builds: "36 + 54 = 90 km/hr" | First arithmetic result, in the illustration itself before any solution card |
| 8 | 46.04-53.86 | "Now we need the speed in meter per second. So ninety times five by eighteen equals twenty-five meters per second. Done." | Convert km/hr -> m/s | Second floating equation tag builds: "90 x 5/18 = 25 m/s" (using `.frac` for 5/18) | Second pre-computed value, ready for the Given card |
| 9 | 54.56-55.78 | "Now we have everything we need." | Bridge to solving | Question + illustration glide to pinned slots | Signals the pivot from concept/illustration to formula |
| 10 | 56.50-63.86 | "We know distance equals length of the other train equals one hundred eighty meters. Relative speed equals twenty-five meters per second." | State the Given (first time these are framed as "known values", not narration recap) | Given card opens center | Both knowns land as their own fresh statement |
| 11 | 64.40-68.10 | "Using the formula, time equals distance divided by speed." | Step 1 - state the formula | Step 1 card - formula (`.frac`, never bare ÷) | "Time = Distance / Speed" |
| 12 | 68.64-75.46 | "So time equals one hundred eighty divided by twenty-five. After calculating this, we get time equals seven point two seconds." | Step 2 - substitute and resolve | Step 2 card | "Time = 180/25 = 7.2 seconds" |
| 13 | 76.24-81.98 | "Hence, the other train takes seven point two seconds to completely pass the passenger." | Recap the answer | Step 2 card holds | Reinforcement before reveal |
| 14 | 82.48-84.70 | "So the correct option is option D." | Reveal | Options grid, D pulses green | Confirm against the four choices |

---

## PART 2 - Scene-by-Scene Storyboard

Design constraints in force throughout (per `_template/README.md` §4D.1): only `--primary #6373db`,
`--primary-light #e2e5ff`, `--success #4eb85f`, `--topic #949494`, `--text #000000`, `--bg #FFFFFF`;
only `QuestionCard`/`SerialNum`/`SolutionCard`/`SolutionStackCard`/`solutionChip`/`StepCircle`/
`StackLine`/options-grid/`logo`/`topic-name`/`bottomStrip`/Illustration/`Fraction`; only the helpers
in `animations.js`, called explicitly by name below.

### SCENE 1 - Cold Open (0.0s - 3.76s)
**VOICEOVER:** "So welcome back again. It's time to solve one more problem."
**VISUAL OBJECTIVE:** Establish the question, hero-style.
**SCREEN LAYOUT:** `#q-full-card` centered, lowered per `apt.heroEnterLowered`.
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.76)`; SerialNum mirrors.
**CONTINUITY FROM PREVIOUS SCENE:** N/A - first scene.

### SCENE 2 - Rail + Train A + Passenger (3.76s - 10.80s)
**VOICEOVER:** "Now in this problem, a passenger is sitting inside a train moving at thirty-six kilometer per hour."
**VISUAL OBJECTIVE:** Establish Train A and the passenger riding it, then anchor Train A's real speed.
**SCREEN LAYOUT:** `#illustration` (1400x320, centered, `top:430px`); rail spans full width; Train A at the left edge facing right; a small passenger dot (`#passenger-dot`, circle + person glyph) sits on Train A's near window.
**ON-SCREEN ELEMENTS:** `#rail`, `#train-a-unit` (`train.svg`, unmirrored) + `#passenger-dot` + `#speed-badge-a`.
**ANIMATION DETAILS:**
- 4.0s: `apt.roadSweep(tl, "#rail", 4.0)`.
- 5.62s (word "passenger"): `apt.cardEnter(tl, "#train-a-unit", 5.62)` and `apt.cardEnter(tl, "#passenger-dot", 5.62)` together.
- 8.76s (word "thirty-six"): `apt.cardEnter(tl, "#speed-badge-a", 8.76)`.
**EDUCATIONAL PURPOSE:** The passenger is visually part of Train A from the first frame, so "he sees another train" in the next scene reads correctly.
**CONTINUITY FROM PREVIOUS SCENE:** Question card has just settled; illustration fills in directly beneath it.

### SCENE 3 - Train B, Its Length, Opposite Direction, Its Speed (11.40s - 17.46s)
**VOICEOVER:** "He sees another train of length one hundred eighty meters coming from the opposite direction at fifty-four kilometers per hour."
**VISUAL OBJECTIVE:** Introduce the second train with every one of its given values attached in narration order.
**SCREEN LAYOUT:** Train B at the right edge, mirrored (`scaleX(-1)`), facing left, same rail.
**ON-SCREEN ELEMENTS:** `#train-b-outer` (`train.svg` mirrored) + `#length-badge-b` ("180 m") + `#opp-arrows` + `#speed-badge-b` ("54 km/hr").
**ANIMATION DETAILS:**
- 11.80s (word "another"): `apt.cardEnter(tl, "#train-b-outer", 11.80)`.
- 13.20s (word "one" of "one hundred eighty"): `apt.cardEnter(tl, "#length-badge-b", 13.20)`.
- 14.98s (word "opposite"): `apt.cardEnter(tl, "#opp-arrows", 14.98)`.
- 16.08s (word "fifty-four"): `apt.cardEnter(tl, "#speed-badge-b", 16.08)`.
**EDUCATIONAL PURPOSE:** Every given value (length, direction, speed) is tied to Train B before any arithmetic begins.
**CONTINUITY FROM PREVIOUS SCENE:** Train A, its passenger dot and speed badge remain exactly where Scene 2 left them.

### SCENE 4 - Target Framed (18.02s - 22.80s)
**VOICEOVER:** "The question is asking us to find how much time the other train takes to completely pass the passenger."
**VISUAL OBJECTIVE:** Plant the unknown before the concept beat.
**SCREEN LAYOUT:** Same as Scene 3, no new element (deliberate hold - narration restates the question).
**ANIMATION DETAILS:** None - hold.
**CONTINUITY FROM PREVIOUS SCENE:** Direct hold of Scene 3's final state.

### SCENE 5 - THE Concept: Passenger Collapses to a Point (23.20s - 33.42s) ★ key visual beat
**VOICEOVER:** "Now, the important point here is that the passenger is treated as a point. Since a passenger has no length, the other train only needs to cover its own length, which is one hundred eighty meter."
**VISUAL OBJECTIVE:** Show, not just tell, why the passenger contributes zero length to the distance - and reconfirm that 180 m (Train B's own length) is the only distance that matters.
**SCREEN LAYOUT:** `#passenger-dot` shrinks in place (scale down slightly + a thin outline ring collapsing to nothing) while `#point-tag` ("Passenger = Point (no length)", `.tag-pill`) fades in just above it.
**ON-SCREEN ELEMENTS:** `#passenger-dot` (animated), `#point-tag` (new).
**ANIMATION DETAILS:**
- 24.88s (word "that"): `tl.to("#passenger-dot", {scale: 0.55, duration: 0.5, ease: "power2.inOut"}, 24.88)`.
- 25.18s (word "passenger" of "the passenger is treated"): `apt.cardEnter(tl, "#point-tag", 25.18)`.
- 32.50s (word "one" of "one hundred eighty meter", reconfirming Train B's length): `apt.emphasize(tl, "#length-badge-b", 32.50)`.
**EDUCATIONAL PURPOSE:** This is the single most important beat in the video - it visually proves the "point" simplification and re-anchors 180 m as the ONLY relevant distance.
**ATTENTION MANAGEMENT:** One shrink + one tag, then a single re-emphasize on the already-known length badge - nothing new competes with the concept.
**CONTINUITY FROM PREVIOUS SCENE:** Passenger dot and length badge are the exact elements from Scenes 2-3, now getting their concept payoff.

### SCENE 6 - Opposite Directions Reconfirmed, Trains Drift Inward (34.50s - 39.18s)
**VOICEOVER:** "The trains are moving in opposite directions. What does that mean? It means their speeds add up."
**VISUAL OBJECTIVE:** Re-state the opposite-direction -> add rule (already visually true since Scene 3) and start the confirmatory drift.
**SCREEN LAYOUT:** Same rail; both trains begin a slow inward drift that continues through Scene 7's arithmetic.
**ANIMATION DETAILS:** `tl.to("#train-a-unit", {x: 90, duration: 10.62, ease: "none"}, 34.50)` and `tl.to("#train-b-outer", {x: -90, duration: 10.62, ease: "none"}, 34.50)` (drift ends 45.12s, exactly as the "90 km/hr" arithmetic lands).
**EDUCATIONAL PURPOSE:** Physically shows the trains closing distance while the "speeds add up" rule is spoken.
**CONTINUITY FROM PREVIOUS SCENE:** Direct continuation of Scene 5's static frame; the shrink/tag payoff remains visible throughout the drift.

### SCENE 7 - Relative Speed Equation Builds (39.78s - 45.42s)
**VOICEOVER:** "So the relative speed will be thirty-six plus fifty-four equals ninety kilometer per hour."
**VISUAL OBJECTIVE:** Show the sum resolve as a floating equation, in the illustration itself, before any solution card exists.
**SCREEN LAYOUT:** `#relspeed-tag` (`.tag-pill`, positioned above the rail's midpoint) with `.rv` word spans inside, revealed via `apt.textReveal`.
**ON-SCREEN ELEMENTS:** `#relspeed-tag` containing "Relative Speed = 36 + 54 = 90 km/hr".
**ANIMATION DETAILS:** `apt.cardEnter(tl, "#relspeed-tag", 39.78)` then `apt.textReveal(tl, "#relspeed-tag")` with per-word `data-t`: "Relative Speed =" @39.78, "36" @41.34, "+" @42.02, "54" @42.36, "= 90 km/hr" @43.88.
**EDUCATIONAL PURPOSE:** First concrete number (90 km/hr), built word-by-word in sync with the narration.
**CONTINUITY FROM PREVIOUS SCENE:** Trains are still mid-drift as this tag builds above them.

### SCENE 8 - Unit Conversion Equation Builds (46.04s - 53.86s)
**VOICEOVER:** "Now we need the speed in meter per second. So ninety times five by eighteen equals twenty-five meters per second. Done."
**VISUAL OBJECTIVE:** Convert km/hr to m/s as its own floating equation, using the `.frac` component for 5/18 (never a bare "/" or "÷").
**SCREEN LAYOUT:** `#unitconv-tag` (`.tag-pill`, directly below `#relspeed-tag`) with `.rv` spans + one inline `.frac` (5 over 18).
**ON-SCREEN ELEMENTS:** `#unitconv-tag` containing "90 x [5/18] = 25 m/s".
**ANIMATION DETAILS:** `apt.cardEnter(tl, "#unitconv-tag", 46.04)` then `apt.textReveal(tl, "#unitconv-tag")` with `data-t`: "90 x" @48.90 (word "ninety"), the `.frac` @49.64 (word "five"), "= 25 m/s" @51.56 (word "twenty-five"). `apt.emphasize(tl, "#unitconv-tag .ans", 53.56)` on "Done."
**EDUCATIONAL PURPOSE:** Second pre-computed value (25 m/s), ready to be dropped straight into the Given card.
**CONTINUITY FROM PREVIOUS SCENE:** `#relspeed-tag` stays visible above; this is the second of two stacked equation tags.

### SCENE 9 - PIN FLOW (54.56s - 56.50s)
**VOICEOVER:** "Now we have everything we need."
**VISUAL OBJECTIVE:** Transition to solving mode.
**SCREEN LAYOUT:** Question glides to `#q-pinned`; illustration glides to `#illus-pinned` (two mini trains, space-between, matching q11's pinned two-train layout, now with a small "180 m / 25 m/s" recap caption instead of individual speeds since those two intermediate results are what carries forward).
**ANIMATION DETAILS:** `PIN_TIME = 54.56`: `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 54.56)`, `apt.pinFlow(tl, "#illustration", "#illus-pinned", 54.56)`, `apt.fadeOut(tl, "#serial-num", 54.56, 0.5)`. `apt.ambientLoop` bobs both pinned train icons from `PIN_TIME+1` through `RECENTER_TIME`.
**CONTINUITY FROM PREVIOUS SCENE:** The full illustration (both equation tags now faded per pinFlow's own crossfade) is mid-glide as the Given card opens.

### SCENE 10 - GIVEN: Distance and Relative Speed (56.50s - 64.40s)
**VOICEOVER:** "We know distance equals length of the other train equals one hundred eighty meters. Relative speed equals twenty-five meters per second."
**VISUAL OBJECTIVE:** State both knowns as their own fresh statement (first time framed as "Given", not a recap).
**SCREEN LAYOUT:** `#card-given` `SolutionCard` opens center.
**ANIMATION DETAILS:** `GIVEN_TIME = 56.50`: `apt.cardEnter(tl, "#card-given .solution-card", 56.50)`; `apt.textReveal(tl, "#card-given .math")`:
  - line 1: "Distance = Length of other train =" @56.50 (line-level, paraphrased), `.hi` "180 m" @59.70 (word "one" of "one hundred eighty")
  - line 2: "Relative Speed =" @61.36, `.hi` "25 m/s" @62.46 (word "twenty-five")
**CONTINUITY FROM PREVIOUS SCENE:** Illustration has just landed in its pinned slot as this card opens.

### SCENE 11 - STEP 1: The Formula (64.40s - 68.64s)
**VOICEOVER:** "Using the formula, time equals distance divided by speed."
**VISUAL OBJECTIVE:** State the formula using `.frac` (never a bare ÷).
**SCREEN LAYOUT:** Given card morphs to the left stack; `#card-step1` opens center.
**ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 64.40)` (completes 65.20); `apt.cardEnter(tl, "#card-step1 .solution-card", 65.20)`; `apt.textReveal(tl, "#card-step1 .math")`: "Time =" @65.20 (line-level), `.frac` (Distance / Speed) @65.70 (word "time" restated in "time equals distance divided by speed" - single reveal for the whole fraction, since it is one visual unit).
**CONTINUITY FROM PREVIOUS SCENE:** Given card is fully legible until its own morph starts.

### SCENE 12 - STEP 2: Substitute and Resolve (68.64s - 76.24s)
**VOICEOVER:** "So time equals one hundred eighty divided by twenty-five. After calculating this, we get time equals seven point two seconds."
**VISUAL OBJECTIVE:** Substitute the real numbers into the `.frac` and resolve to the final answer.
**SCREEN LAYOUT:** Step 1 morphs to stack; `#card-step2` opens center and holds through the recap sentence.
**ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 68.64)` (completes 69.44); `apt.cardEnter(tl, "#card-step2 .solution-card", 69.44)`; `apt.stackLineGrow(tl, "#line-g-1", 68.64)`; `apt.textReveal(tl, "#card-step2 .math")`: "Time =" @69.44 (line-level), `.frac` (180/25) @69.42 (word "one" of "one hundred eighty"), `.ans` "= 7.2 seconds" @74.22 (word "seven").
**CONTINUITY FROM PREVIOUS SCENE:** Step 1's card is mid-morph as Step 2 opens.

### SCENE 13 - Options Reveal (76.24s - 84.70s)
**VOICEOVER:** "Hence, the other train takes seven point two seconds to completely pass the passenger. So the correct option is option D."
**VISUAL OBJECTIVE:** Confirm 7.2 s against all four choices.
**SCREEN LAYOUT:** Step 2 morphs to stack; pinned question recenters; illustration recap clears; options grid (2x2) appears.
**ANIMATION DETAILS:** `RECENTER_TIME = 76.24`: `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 76.24)` (completes 77.04); `apt.stackLineGrow(tl, "#line-1-2", 76.24)`; `apt.fadeOut(tl, "#illus-pinned", 76.24)`; `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 76.24)`; `apt.fadeIn(tl, "#options-reveal", 77.20)`; `apt.optionsStagger(tl, ".opt-btn", 77.60)`; `apt.correctPulse(tl, ".opt-btn.correct", 84.16)` (lands on "option D." at 84.16-84.70). `END_FADE_TIME = 85.7`: `apt.fadeOut(tl, "#root > div", 85.7, 1.0)`.
**CONTINUITY FROM PREVIOUS SCENE:** Step 2 remains fully legible until its own morph fires.

---

## PART 3 - Asset List Required

| Asset | Source | Notes |
|---|---|---|
| `illustration/train.svg` | Copied from `Trains Streams Boats/q1/illustration/train.svg` | Untouched. Used twice: unmirrored for Train A, `scaleX(-1)` for Train B |
| Rail track | CSS-only (`#rail`) | Same `repeating-linear-gradient` technique as q1/q11 |
| Passenger dot | CSS-only (`#passenger-dot`) | Small circle + simple person glyph, `--primary` fill |
| Opposite-direction chevrons | CSS-only (border-triangle), same technique as q11 | Reused as-is |
| Equation tags (`#relspeed-tag`, `#unitconv-tag`) | `.tag-pill` + `.frac` (existing components) | No new component; `.frac` used for 5/18 per house rule against bare ÷ |
| `design-system.css`, `animations.js`, `assets/` | Copied from `_template/` | Per README §5B |

No new colors, fonts, or template components introduced.

---

## PART 4 - Animation Complexity Notes

- Two trains (Train A = passenger's train, Train B = 180 m train), same mirrored-`train.svg` technique as `q11`.
- New "point" concept beat: `#passenger-dot` scales down in place (`power2.inOut`) while `#point-tag` fades in - a bespoke but simple tween (not a named `animations.js` helper), immediately followed by a standard `apt.emphasize` on the already-established length badge to re-anchor 180 m as the only relevant distance.
- Confirmatory drift (Scene 6): same technique as `q11`'s Scene 4, shorter span (10.62s vs q11's 18.16s) to match this narration's tighter pacing.
- Two floating equation tags in the illustration (Scenes 7-8) use `apt.textReveal` on `.rv` spans exactly like a solution card's `.math` would - `textReveal` only queries `containerSelector + " .rv"`, so it works identically outside a `.solution-card`.
- `.frac` component used for "5/18" (unit conversion) and for both Step cards' "Distance/Speed" and "180/25" - per house rule, no bare ÷ character anywhere in the composition.
- `GIVEN_TIME` (56.50) is a genuinely fresh statement, not a recap of Phase 1 narration (unlike q11's Given, which restated already-spoken values) - the two intermediate results (180 m, 25 m/s) were computed in Phase 1's illustration but are being framed as "known values" for the first time here.
- 1 Given + 2 Steps (Given, Step 1 formula, Step 2 substitution+answer) = 3 stack cards (G, 1, 2), two connector lines (`line-g-1`, `line-1-2`).
- No `apt.stepFlow` used (correctly dropped per README §4D.1).

---

## PART 5 - Master Timeline Overview

```
TIME (s)   ELEMENT                          WHAT HAPPENS
---------  -------------------------------  ---------------------------------
0.0        Background + bottomStrip+logo    Always visible
0.3        QuestionCard                     heroEnterLowered - fades/scales in low
0.8        SerialNum                        pops in low, mirrors card
3.76       QuestionCard + SerialNum         rise to resting position
4.0        Rail                             roadSweep
5.62       Train A + passenger dot          cardEnter
8.76       Speed badge A ("36 km/hr")       cardEnter
11.80      Train B                          cardEnter
13.20      Length badge B ("180 m")         cardEnter
14.98      Opposite-direction chevrons      cardEnter
16.08      Speed badge B ("54 km/hr")       cardEnter
24.88      Passenger dot                    shrinks to point (0.5s, power2.inOut)
25.18      "Passenger = Point" tag          cardEnter
32.50      Length badge B                   emphasize (re-anchors 180 m)
34.50-45.12 Train A / Train B               drift inward (confirms "opposite -> add")
39.78      Relative-speed equation tag      cardEnter + textReveal (36+54=90 km/hr)
46.04      Unit-conversion equation tag     cardEnter + textReveal (90 x 5/18 = 25 m/s)

[ PIN_TIME = 54.56 ]
---------  -------------------------------  ---------------------------------
54.56      Question + Illustration          pinFlow - real glide to pinned slots

[ GIVEN_TIME = 56.50 ]
---------  -------------------------------  ---------------------------------
56.50      Given card                       cardEnter (center)
56.50-62.46 Given card .math                textReveal (Distance=180m, then RelSpeed=25 m/s)

[ STEP CYCLE ]
---------  -------------------------------  ---------------------------------
64.40      Given -> Given stack             morphToStack
65.20      Step 1 card                     cardEnter ("Time = Distance/Speed")
68.64      Step 1 -> Step 1 stack          morphToStack; line-g-1 grows
69.44      Step 2 card                     cardEnter ("Time = 180/25 = 7.2 seconds")

[ PHASE 3 ]
---------  -------------------------------  ---------------------------------
76.24      Step 2 -> Step 2 stack          morphToStack + stackLineGrow (1->2)
76.24      Pinned illustration recap        fadeOut
76.24      Pinned question                 recenterForOptions
77.20      Options grid                    fadeIn
77.60      Option buttons                  optionsStagger
84.16      Correct option (D)              correctPulse
85.70      Everything                      END FADE (1.0s)
```

**Video duration:** 84.70s (matches `voiceover.wav` exactly); composition tail to ~87s.
