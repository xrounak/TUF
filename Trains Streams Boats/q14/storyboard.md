# Storyboard — Trains, Streams and Boats Q14

**A boat's still-water speed is 10 km/h and the stream speed is 2 km/h. Find the downstream speed.**
**Answer:** B (12 km/h)
**Video length:** 66.72s (voiceover duration, Concise) — final `END_FADE_TIME` ≈ 67.3s, clip tail to ~69.0s.
**Topic name:** "Trains, Streams and Boats".

Sibling reference: `Trains Streams Boats/q6` (downstream/upstream simultaneous-equations problem) is the
closest built sibling for the river+boat illustration technique (water-fill + two-layer scrolling wave
track + boat icon + wake lines), reused here almost verbatim. The differences:
1. **No algebra.** q6 needed a B/C badge state machine and two glide legs (downstream then upstream) to
   derive both formulas. This question states one formula only (Downstream = Boat Speed + Stream Speed)
   and needs only a single glide pass — no badges, no turn/flip, no judder.
2. **Only 2 post-pin cards** (Given, Step 1) — the simplest post-pin stack shipped in this topic so far,
   since there is exactly one substitution to perform (10 + 2 = 12), not an elimination method. Both
   cards morph to the stack (G, then 1) — Step 1's morph fires at `RECENTER_TIME`, right before the
   options land, with a `.stack-line` connector (`line-g-1`) growing between the two circles at the same
   moment, same as any other multi-step question in this topic.
3. **Formula tag is word-synced to the literal narration**, not a static label: the script's own sentence
   "Downstream speed equals boat speed in still water plus stream speed" maps almost one-to-one onto the
   symbolic form "Downstream Speed = Boat Speed in Still Water + Stream Speed", so `apt.textReveal` is
   used on the illustration's `#formula-tag` (not just inside solution cards — the helper works on any
   container with `.rv` children) to build it word-by-word in sync with those exact words.
4. **Very tight finish** (only ~1.7s between the Step 1 recap ending and the options landing, mirroring
   `q12`/`q13`'s tight-finish shape) — the whole video is under 67s, so Phase 3 has to land inside the
   last narrated sentence itself.

---

## PART 1 — Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|---|---|---|---|---|
| 1 | 0.10–3.16 | "So welcome back again. It's time to solve one more problem." | Cold open | Question card | Hero question rises into view |
| 2 | 3.78–13.82 | "Now in this problem, we are given that the speed of the boat in still water is ten kilometer per hour, and the speed of the stream is two kilometer per hour." | State both givens | River+boat scene assembles; "10 km/hr" tag lands on "ten"; "2 km/hr" tag lands on "two" | Anchor each spoken number to the illustration |
| 3 | 14.46–18.82 | "The question is asking us to find the downstream speed." | Frame the unknown | "? km/hr" target tag fades in on "downstream" | Plant the target before the concept beat |
| 4 | 19.50–23.42 | "Now, the important word here is downstream. What does downstream actually mean?" | Set up the conceptual leap | Given tags hold; no new motion yet | Rhetorical pause before the payoff |
| 5 | 23.92–27.46 | "It means the boat is moving in the same direction as the flowing water." | Deliver the concept | Boat begins gliding right, matching the flow-arrow direction | "Same direction" made literal |
| 6 | 28.04–32.76 | "Since both the boat and the stream are moving in the same direction, their speeds help each other." | State WHY they add | Boat continues gliding; a transient "+" chip pulses between the two speed tags on "help each other" | Visually cue "combining" |
| 7 | 33.16–38.68 | "So for downstream movement, we always add the two speeds. This is a simple rule to remember." | Formalize the rule verbally | Boat glide settles; brief hold | Reinforce before the formula lands |
| 8 | 39.14–44.32 | "Downstream speed equals boat speed in still water plus stream speed." | State the formula | `#formula-tag` builds word-by-word, landing on its own matching words | Downstream = Boat Speed in Still Water + Stream Speed, made literal |
| 9 | 44.84–46.04 | "Got it? Perfect." | Bridge beat | Formula tag holds | Signals the pivot into formal solving |
| 10 | 46.60–48.08 | "Now let us put the given values." | Bridge over the just-pinned layout | PIN_TIME fires at 46.2 (right after "Perfect."); this line plays over the already-pinned stage | Mirrors the PIN_TIME→GIVEN_TIME gap convention |
| 11 | 48.64–54.06 | "Boat speed equals ten kilometer per hour. Stream speed equals two kilometer per hour." | Fresh restatement, word-by-word | Given card, word-level reveal | "Boat Speed = 10 km/hr", "Stream Speed = 2 km/hr" |
| 12 | 54.10–60.36 | "So downstream speed equals ten plus two. After adding them, we get twelve kilometer per hour." | Step 1 — the only computation | Step 1 card, word-level reveal | "Downstream Speed = 10 + 2" → "= 12 km/hr" |
| 13 | 60.40–64.92 | "Hence, the downstream speed of the boat is twelve kilometer per hour." | Recap before reveal | Step 1 card holds | Reinforces the answer |
| 14 | 64.96–66.72 | "So the final answer will be option B." | Reveal | Options grid, B pulses green | Confirm against the four choices |

---

## PART 2 — Scene-by-Scene Storyboard

Design constraints in force throughout (per `_template/README.md` §4D.1): only `--primary #6373db`,
`--primary-light #e2e5ff`, `--success #4eb85f`, `--topic #949494`, `--text #000000`, `--bg #FFFFFF`;
only `QuestionCard`/`SerialNum`/`SolutionCard`/`SolutionStackCard`/`solutionChip`/`StepCircle`/
`StackLine`/options-grid/`logo`/`topic-name`/`bottomStrip`/Illustration/`Fraction`; only the helpers in
`animations.js`, called explicitly by name below. Illustration assets: `illustration/boat.svg`,
`illustration/wave.svg`, `illustration/wave-light.svg` (all copied from
`Trains Streams Boats/global-illustrations/`, used as-is — no SVG edits, only CSS positioning/scale).

### SCENE 1 — Cold Open (0.0s – 3.16s)
**VOICEOVER:** "So welcome back again. It's time to solve one more problem."
**VISUAL OBJECTIVE:** Establish the question, low-key entrance.
**SCREEN LAYOUT:** `#q-full-card` centered, lowered per `apt.heroEnterLowered`, at `top:80px`, containing "A boat's speed in still water is 10 km/h and the stream speed is 2 km/h. Find the downstream speed." with "10 km/h" and "2 km/h" in `.num` blue.
**ON-SCREEN ELEMENTS:** QuestionCard (full), SerialNum badge ("Q").
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.159)` — lowered pose at 0.3s, rises to rest at 3.159s (end of "one more problem"). SerialNum mirrors with its own parallel tween (pop at 0.8s, rise at 3.159s).
**CAMERA MOVEMENT:** None. **TRANSITIONS:** N/A (opening beat).
**EDUCATIONAL PURPOSE:** Anchor the problem before anything else competes for attention.
**VISUAL HIERARCHY:** QuestionCard > SerialNum > (empty illustration area).
**ATTENTION MANAGEMENT:** Nothing else on screen yet.
**MOTION NOTES:** The rise finishes exactly as "problem" is spoken.
**CONTINUITY FROM PREVIOUS SCENE:** N/A — first scene.

### SCENE 2 — River + Boat Assemble, Givens Land (5.4s – 18.82s)
**VOICEOVER:** "Now in this problem, we are given that the speed of the boat in still water is ten kilometer per hour, and the speed of the stream is two kilometer per hour. The question is asking us to find the downstream speed."
**VISUAL OBJECTIVE:** Build the river+boat illustration under the settled question card, landing each spoken number on its own tag the instant it's said, then planting the unknown target.
**SCREEN LAYOUT:** `#illustration` (1500×280, centered, `top:400px`). `#river-scene` (water-fill + two-layer scrolling wave track) at `top:140px`. `#boat-unit` (boat icon + wake lines) at `left:150px`. `#flow-arrows` (three chevrons, pointing right — the downstream direction) at `top:220px`. `#boat-speed-tag` ("Boat Speed = 10 km/hr") pinned above the boat. `#stream-speed-tag` ("Stream Speed = 2 km/hr") pinned above the flow arrows. `#target-tag` ("Downstream Speed = ? km/hr") centered horizontally, on its own row above both side tags (`top:-165px`) so it doesn't crowd `#stream-speed-tag`.
**ON-SCREEN ELEMENTS:** `#river-scene`, `#flow-arrows`, `#boat-unit`, `#boat-speed-tag`, `#stream-speed-tag`, `#target-tag`.
**ANIMATION DETAILS:**
- 5.4s: `apt.cardEnter(tl, "#river-scene", 5.4)`, `apt.cardEnter(tl, "#flow-arrows", 5.4)`, `apt.cardEnter(tl, "#boat-unit", 5.4)`.
- `riverFlow` (seamless scrolling wave conveyor) starts at 5.4s and runs continuously to `PIN_TIME`.
- `apt.ambientLoop(tl, "#boat-icon", 5.4, 23.92, {period:1.6, amp:5})` — idle bob before the boat starts actually travelling.
- 8.939s: `apt.cardEnter(tl, "#boat-speed-tag", 8.939)` — timed to "ten".
- 12.779s: `apt.cardEnter(tl, "#stream-speed-tag", 12.779)` — timed to "two".
- 17.719s: `apt.cardEnter(tl, "#target-tag", 17.719)` — timed to "downstream" (in "find the downstream speed").
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Continuous build, no hard cuts.
**EDUCATIONAL PURPOSE:** "10 km/hr" → the boat, "2 km/hr" → the stream, "? km/hr" → the unknown downstream speed.
**VISUAL HIERARCHY:** Boat + tags (co-primary) > river/flow-arrows (ambient).
**ATTENTION MANAGEMENT:** One tag reveals at a time, matching narration order.
**MOTION NOTES:** Boat only idly bobs here — it does not travel yet, setting up Scene 4's concept glide.
**CONTINUITY FROM PREVIOUS SCENE:** Question card already at rest (Scene 1's rise completed at 3.159s); this scene only adds the illustration beneath it.

### SCENE 3 — Concept Setup Pause (19.50s – 23.42s)
**VOICEOVER:** "Now, the important word here is downstream. What does downstream actually mean?"
**VISUAL OBJECTIVE:** A rhetorical breathing beat before the payoff.
**SCREEN LAYOUT:** Unchanged from Scene 2.
**ON-SCREEN ELEMENTS:** None new — river flow and boat idle bob continue.
**ANIMATION DETAILS:** No new tweens.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Silence-beat leading into Scene 4's boat motion.
**EDUCATIONAL PURPOSE:** Signals a conceptual pivot without a cut.
**VISUAL HIERARCHY:** N/A — holding frame.
**ATTENTION MANAGEMENT:** Deliberate lull.
**MOTION NOTES:** N/A.
**CONTINUITY FROM PREVIOUS SCENE:** Direct hold of Scene 2's final frame.

### SCENE 4 — Concept Beat: Boat Glides With the Flow (23.92s – 32.76s)
**VOICEOVER:** "It means the boat is moving in the same direction as the flowing water. Since both the boat and the stream are moving in the same direction, their speeds help each other."
**VISUAL OBJECTIVE:** Physically demonstrate "downstream = with the current, so speeds combine" — the single most important conceptual leap in this problem, given a dedicated, mostly-wordless visual proof.
**SCREEN LAYOUT:** `#boat-unit` glides `x:150→700` over the full scene (`power1.inOut`), trailing wake-line flicker.
**ON-SCREEN ELEMENTS:** `#merge-chip` ("+") pops transiently (31.0s–33.0s), pulsing between `#boat-speed-tag` and `#stream-speed-tag` right on "help each other."
**ANIMATION DETAILS:**
- `tl.to("#boat-unit", {x:550, duration:8.84, ease:"power1.inOut"}, 23.92)` (matches the flow-arrow direction — same direction as the current).
- `wakeFlicker(tl, "left", 23.92, 32.76)`.
- `tl.fromTo("#merge-chip", {opacity:0, y:10}, {opacity:1, y:0, duration:0.4, ease:"power2.out"}, 31.0)`; fades out 0.3s at 33.0s.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** No cuts — additive motion layered on the Scene 2 illustration.
**EDUCATIONAL PURPOSE:** "Same direction" and "speeds help each other" are both shown, not just told.
**VISUAL HIERARCHY:** Boat glide + merge chip (momentary focal point) > soon-to-pin question (top).
**ATTENTION MANAGEMENT:** One continuous glide, one payoff chip — no competing reveals.
**MOTION NOTES:** The glide is the ONLY motion in this scene besides the merge chip; deliberately unhurried to match the ~8.8s of narration it carries.
**CONTINUITY FROM PREVIOUS SCENE:** Boat inherits its exact Scene 2 position (x=150, idle-bobbing) and starts moving from there; the idle ambient loop's window ends exactly where this glide begins.

### SCENE 5 — Rule Statement + Formula Reveal (33.16s – 46.04s)
**VOICEOVER:** "So for downstream movement, we always add the two speeds. This is a simple rule to remember. Downstream speed equals boat speed in still water plus stream speed. Got it? Perfect."
**VISUAL OBJECTIVE:** Formalize the just-demonstrated concept into a literal formula, built word-by-word so each spoken word lands on its own symbolic match.
**SCREEN LAYOUT:** `#formula-tag` positioned below the river scene, reveals word-by-word via `apt.textReveal`.
**ON-SCREEN ELEMENTS:** `#formula-tag` — "Downstream Speed = Boat Speed in Still Water + Stream Speed".
**ANIMATION DETAILS:**
- Boat glide settles at 32.76s (already arrived at rest, x=700); idle bob resumes.
- `apt.cardEnter(tl, "#formula-tag", 39.139)` — box fades in as the sentence starts.
- `apt.textReveal(tl, "#formula-tag")`, word-level, mapped almost 1:1 onto the narration: "Downstream"@39.139, "Speed"@39.7, "="@40.04 (equals), "Boat"@40.84, "Speed"@41.119, "in"@41.399, "Still"@41.559, "Water"@41.86, "+"@42.68 (plus), "Stream"@43.54, "Speed"@43.959.
- Formula holds through "Got it? Perfect." (44.84–46.039) — no new reveal.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Direct continuation from Scene 4's settled glide.
**EDUCATIONAL PURPOSE:** Converts the physical demonstration into the exact rule the viewer needs to apply.
**VISUAL HIERARCHY:** Formula tag is the sole new focal point.
**ATTENTION MANAGEMENT:** Each word reveals exactly as spoken — no double-animation.
**MOTION NOTES:** This is the payoff of the whole Phase 1 illustration; nothing competes with it.
**CONTINUITY FROM PREVIOUS SCENE:** Boat/river continue idling in the background, unchanged, while the formula tag becomes the new focus.

### SCENE 6 — Pin + Given Card (46.2s – 54.06s)
**VOICEOVER:** *(bridging beat, no new reveal)* "Now let us put the given values." / **THEN:** "Boat speed equals ten kilometer per hour. Stream speed equals two kilometer per hour."
**VISUAL OBJECTIVE:** Reorganize into Phase 2 layout, then formalize the two speeds into the Given card, narrated fresh so each word/number lands on its own spoken word.
**SCREEN LAYOUT:** `#q-pinned` at `left:385px; top:30px; width:1275px`. `#illus-pinned` at `left:280px; top:190px` (single shrunk boat icon + mini river + recap text, centered). `#card-given .solution-card` centered at `left:640px; top:480px`.
**ON-SCREEN ELEMENTS:** Pinned QuestionCard (shorter text). Pinned illustration: mini river + shrunk boat icon + "Boat = 10 km/hr · Stream = 2 km/hr" recap text. Given card opens with chip "Given", two lines: "Boat Speed = 10 km/hr", "Stream Speed = 2 km/hr".
**ANIMATION DETAILS:**
- `PIN_TIME = 46.2` — fires right after "Perfect." finishes (46.039). `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 46.2)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 46.2)` fired together. `apt.fadeOut(tl, "#serial-num", 46.2, 0.5)`.
- "Now let us put the given values." (46.599–48.079) plays over the already-pinned stage — a deliberate bridging gap, no new reveal (mirrors the `PIN_TIME`→`GIVEN_TIME` gap convention from q6/q13).
- `GIVEN_TIME = 48.639` — `apt.cardEnter(tl, "#card-given .solution-card", 48.639)`.
- `apt.textReveal(tl, "#card-given .math")`, word-level for both freshly-narrated lines:
  - Line 1: "Boat"@48.639, "Speed"@48.879, "="@49.239 (equals), "10 km/hr"(hi)@49.579 (ten).
  - Line 2: "Stream"@51.379, "Speed"@51.68, "="@52.039 (equals), "2 km/hr"(hi)@52.379 (two).
- `apt.ambientLoop(tl, "#illus-pinned-icon", 46.9, 64.9)` — small bob on the pinned boat icon through the whole solving stretch.
**CAMERA MOVEMENT:** The pin-flow glide. **TRANSITIONS:** `apt.pinFlow`'s real glide (0.8s), not a cut.
**EDUCATIONAL PURPOSE:** Converts the illustration's tags into a formal, word-synced Given card.
**VISUAL HIERARCHY:** Given card (center) > pinned question (top) > pinned recap (ambient).
**ATTENTION MANAGEMENT:** Each word/number reveals exactly as spoken.
**MOTION NOTES:** The mini river + boat loop keeps this scene from reading static.
**CONTINUITY FROM PREVIOUS SCENE:** The formula tag from Scene 5 has just settled; the pin fires right after, keeping the take continuous.

### SCENE 7 — Given → Stack, Step 1: The Only Computation (54.1s – 66.72s)
**VOICEOVER:** "So downstream speed equals ten plus two. After adding them, we get twelve kilometer per hour. Hence, the downstream speed of the boat is twelve kilometer per hour. So the final answer will be option B."
**VISUAL OBJECTIVE:** Apply the formula from Scene 5 directly: downstream = boat speed + stream speed, then reveal the correct option.
**SCREEN LAYOUT:** `#stack-given .stack-card` at `left:100px; top:140px` (badge "G"), `#stack-step1 .stack-card` below it (badge "1", `top` computed at runtime by `layoutStack()` from Given's real rendered height, gap 40px). `#card-step1 .solution-card` centered at `left:640px; top:480px`. `.pinned-col` options grid at `top:400px`.
**ON-SCREEN ELEMENTS:** Step 1 card, chip "Step 1", math: "Downstream Speed = 10 + 2" / "= 12 km/hr". `.stack-line` connector `#line-g-1` between badges "G" and "1". Then the stack stays visible, options grid (A 10.56 / B 12 / C 13.44 / D 14.88) fades in with B highlighted green.
**ANIMATION DETAILS:**
- `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 54.1)` — completes 54.9 (fires right as "So" begins — Step 1's own cardEnter overlaps the tail of this morph, matching the precedent in `Trains Streams Boats/q13`'s Given→Step1 transition).
- `apt.cardEnter(tl, "#card-step1 .solution-card", 54.259)` (fires as "downstream speed equals..." begins).
- `apt.textReveal(tl, "#card-step1 .math")`, word-level:
  - "Downstream"@54.259, "Speed"@54.899, "="@55.239 (equals), "10"(hi)@55.659 (ten), "+"@55.959 (plus), "2"(hi)@56.299 (two).
  - "="@57.119 (After), "12 km/hr"(ans)@58.279 (twelve).
- Card holds through "Hence, the downstream speed of the boat is twelve kilometer per hour." (60.399–64.919) — no new reveal.
- `RECENTER_TIME = 64.9` (fires as "So the final answer..." begins) — `apt.fadeOut(tl, "#illus-pinned", 64.9)`, `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 64.9)`.
- Step 1 joins the stack at the SAME `RECENTER_TIME` — `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 64.9)` and `apt.stackLineGrow(tl, "#line-g-1", 64.9)` (the G→1 connector, positioned via `apt.setStackLine` at build time from the two circles' real rendered centers).
- `apt.fadeIn(tl, "#options-reveal", 65.1)` — overlaps the tail of Step 1's morph (completes 65.7), matching the tight-finish overlap precedent in `q13`.
- `apt.optionsStagger(tl, ".opt-btn", 65.3)`.
- `apt.correctPulse(tl, ".opt-btn.correct", 66.2)` (lands right on "option B." at 66.159–66.72).
- `END_FADE_TIME = 67.3` — `apt.fadeOut(tl, "#root > div", 67.3, 1.0)`.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Two 0.8s morphs (Given, then Step 1) + recenter glide + options stagger + pulse, then synchronized full-frame fade-out.
**EDUCATIONAL PURPOSE:** Delivers the payoff — the concept from Scene 4 becomes the single addition here.
**VISUAL HIERARCHY:** Step 1 card → options grid (sequential focal shift) > completed G/1 stack (left, archived) > pinned question.
**ATTENTION MANAGEMENT:** `correctPulse` on option B is the terminal focal point.
**MOTION NOTES:** Only ~1.6s between the recap ending and the options landing — a deliberately tight finish (same shape as `q12`/`q13`'s close), appropriate for this video's short 66.72s runtime.
**CONTINUITY FROM PREVIOUS SCENE:** Given card's morph begins right as Scene 6 settles; Step 1's card holds unchanged, then morphs into the stack at the same instant the layout recenters for options.

---

## PART 3 — Asset List Required

| Asset | Source | Notes |
|---|---|---|
| `illustration/boat.svg` | Copied from `Trains Streams Boats/global-illustrations/` | Used as-is, full-size (130px) in Phase 1, shrunk (72px) in the pinned recap |
| `illustration/wave.svg`, `illustration/wave-light.svg` | Copied from `Trains Streams Boats/global-illustrations/` | Used as-is — front/back scrolling wave-tile layers, same technique as `q6` |
| `design-system.css`, `animations.js`, `assets/` | Copied from `_template/` | Per README §5B |

No new colors, fonts, or template components introduced — all illustration CSS (river scene, boat unit,
speed tags, flow arrows, target tag, merge chip, formula tag) is per-question custom markup as permitted
by design.md's "Illustration" section, directly modeled on `q6`'s proven river+boat technique.

## PART 4 — Animation Complexity Notes

- Standard patterns only: `heroEnterLowered`, `pinFlow` (×2, paired), `cardEnter` (×7), `textReveal`
  (×3 — Given, Step 1, and the illustration's `#formula-tag`), `morphToStack` (×2 — Given, then Step 1),
  `stackLineGrow`/`setStackLine` (×1), `ambientLoop` (×2), `fadeIn`/`fadeOut`, `recenterForOptions`,
  `optionsStagger`, `correctPulse`.
- `apt.textReveal` is used on `#formula-tag` (an illustration element, not a solution/stack card) —
  the helper only needs a container selector with `.rv` children, so this is a direct reuse, not a new
  helper.
- Two small custom (non-`animations.js`) local helpers copied verbatim from `q6`: `riverFlow` (seamless
  scrolling wave conveyor) and `wakeFlicker` (bounded wake-line flicker behind the boat) — no
  `boatJudder` or badge state machine needed since there is only one glide leg and no algebra.
- `layoutStack()` (copied verbatim from `q6`) self-measures the two stack cards' real rendered heights
  at build time rather than hand-guessing their `top` values — even with only 2 cards, this avoids
  drift if either card's line count changes.
- 2 stack cards (`stack-given`, `stack-step1`) with one connector line (`line-g-1`) between them — Step
  1's morph fires at `RECENTER_TIME`, the same instant the layout recenters for options, matching the
  "last step joins the stack right before the reveal" pattern used across this topic.
- No double-animation risk: text-reveal-driven cards never also get `emphasize`/`resultReveal`.
- No `apt.stepFlow` used (correctly dropped per README §4D.1).

## PART 5 — Master Timeline Overview

```
0.0    Phase 1 starts — QuestionCard hero (lowered) enters
0.8    SerialNum badge pop
3.159  QuestionCard + badge rise to resting position
5.4    River scene + flow arrows + boat unit enter; idle bob starts
8.939  "Boat Speed = 10 km/hr" tag (word "ten")
12.779 "Stream Speed = 2 km/hr" tag (word "two")
17.719 "Downstream Speed = ? km/hr" target tag (word "downstream")
[ Concept beat ]
23.92  Boat begins gliding downstream (x:150→700, 8.84s, matching flow direction)
31.0–33.0  "+" merge chip pulses between the two speed tags (word "help each other")
32.76  Glide settles; idle bob resumes
39.139 Formula tag enters; word-level reveal begins (39.139–43.959)
44.84–46.039  "Got it? Perfect." — formula tag holds
[ PIN_TIME = 46.2 ]
46.2   pinFlow: question + illustration glide to pinned slots (0.8s)
46.599–48.079  "Now let us put the given values" — bridging beat, no new reveal
[ GIVEN_TIME = 48.639 ]
48.639 Given card enters, word-level reveal begins
46.9–64.9  ambientLoop on pinned boat icon
52.379 Given card line 2 finishes ("Stream Speed = 2 km/hr")
[ 54.1 ]  Given → stack morph (badge "G")
54.259 Step 1 card enters
55.659–56.299  Word-level reveal: 10 + 2
57.119–58.279  "=" then "12 km/hr" (.ans)
60.399–64.919  Step 1 card holds (recap sentence)
[ RECENTER_TIME = 64.9 ]
64.9   illus-pinned fades out; q-pinned recenters; Step 1 → stack morph (badge "1"); line-g-1 grows
65.1   options-reveal fades in
65.3   options stagger in
66.2   correctPulse on option B
[ END_FADE_TIME = 67.3 ]  full-frame fade out (1.0s)
~68.3  End
```

**Video duration:** 66.72s (matches `voiceover.wav` exactly).
