# Storyboard — Trains, Streams and Boats Q13
**A 140 m train at 18 m/s crosses a 220 m bridge. Find the crossing time.**

Video length: **82.119s** (voiceover duration) — final `END_FADE_TIME` ≈ 83.0s, clip tail to ~84.5s.
Topic name: **"Trains, Streams and Boats"**.

Sibling reference: `Trains Streams Boats/q9` ("a 120 m train at 15 m/s crosses a 180 m platform") is
the closest built sibling — same train-crosses-a-fixed-object-with-real-width illustration language:
a two-stage slide proves Distance = Train Length + Object Length (Stage A: engine reaches the
object's far edge — not enough yet; Stage B: continues until the rear clears the far edge — done),
then a measuring bracket spans the total distance just travelled. The differences:
1. **New object is a bridge**, not a platform — `illustration/bridge.svg` (global-illustrations
   asset, suspension-bridge icon, viewBox 512×512) is used instead of `train-station.svg`. Unlike
   q9's platform asset (already a wide, well-proportioned line-art), the bridge SVG's actual
   structure (cables + deck + support legs) only occupies the middle ~38% of its square viewBox —
   rendering it at natural aspect would leave large empty margins above/below. It's cropped via a
   fixed-height `overflow:hidden` wrapper (`#illus-bridge-wrap`, 280×107px) with the `<img>`
   shifted up by a measured offset, so only the cables/deck/legs band shows — a CSS presentational
   crop, not a file edit (no re-path/resize of the SVG itself).
2. **Narration maps 1:1 onto the two stages, more cleanly than q9's did.** q13's concept passage
   goes: "the important point is completely cross the bridge... what does this mean" (Stage A: the
   engine reaches the bridge's far edge, callout "not enough yet") → "the last compartment...should
   also come out of the bridge" (Stage B: the whole train clears the far edge, callout "whole train
   is out") → "so the train has to cover its own length as well as the length of the bridge" (the
   measuring bracket grows in, proving the rule). No paraphrasing needed to fit the two-stage
   structure onto the narration, unlike q9 where the "not enough yet" language was q9's own choice.
3. **Given card values are freshly re-narrated word-by-word** ("Length of train equals one hundred
   forty meter. Length of bridge equals two hundred twenty meter.") right before Step 1 — unlike
   q9's Given card (a pure stagger recap, line-level, no fresh word timing available at that point).
   So q13's Given card uses WORD-level `.rv` reveal for train/bridge length (matching
   `template.html`'s own worked example), with only the Speed line (not re-stated at that point)
   using a single line-level span.
4. **Only 82.1s total** (vs. q9's 88.9s) — a shorter, punchier video with a tighter finish (options
   reveal has to land in the final ~2s after the recap line, same tight-finish shape seen in
   `Trains Streams Boats/q12`).

---

## PART 1 — Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|---|---|---|---|---|
| 1 | 0.10–4.48 | "So welcome back again. It's time to solve one more problem." | Cold open | Full-screen question card rising in | Establish frame, no distraction |
| 2 | 5.00–15.78 | "Now in this problem, we are given a train of length one hundred forty meter, a bridge of length two hundred twenty meter, and the speed of the train is eighteen meter per second." | State all three given values | Track sweeps in, train slides in, "140 m" lands on "one hundred forty", bridge scales in, "220 m" lands on "two hundred twenty", "18 m/s" lands on "eighteen" | Anchor each spoken number to its physical referent |
| 3 | 16.30–21.66 | "The question is asking us to find how much time the train takes to completely cross the bridge." | Frame the unknown | "? s" tag fades in on "time" | Plant the target before the concept beat |
| 4 | 21.98–27.10 | "Now, the important point here is completely cross the bridge. What does this actually mean?" | Set up the conceptual leap | Given-value tags fade out; train begins Stage A slide (engine → bridge's far edge) | "Not enough yet" — the engine alone reaching the far side isn't the full crossing |
| 5 | 27.54–31.68 | "It means the last compartment of the train should also come out of the bridge," | Deliver the payoff concept | Stage B slide (train continues until rear clears the far edge) | "Whole train is out — crossing complete" |
| 6 | 32.06–35.60 | "so the train has to cover its own length as well as the length of the bridge." | State the rule in plain language, proven by the motion just shown | Measuring bracket grows across the full slide, label appears | Distance = Train Length + Bridge Length, made literal |
| 7 | 35.94–43.14 | "This is a simple rule to remember. Whenever a train crosses a bridge, total distance equals length of train plus length of bridge." | Formalize the rule verbally | Bracket + label hold, no new visual | Reinforce before pinning |
| 8 | 43.50–46.60 | "Got it? Perfect. Now let us put the given values." | Bridge beat | PIN_TIME fires at 44.699 (end of "Perfect."); "Now let us put the given values" plays over the already-pinned stage | Signals the pivot into formal solving |
| 9 | 47.06–52.66 | "Length of train equals one hundred forty meter. Length of bridge equals two hundred twenty meter." | Fresh restatement of the two lengths, word-by-word | Given card, word-level reveal | "Length of Train = 140 m", "Length of Bridge = 220 m" |
| 10 | 53.22–62.12 | "So the total distance becomes one hundred forty plus two hundred twenty, which is three hundred sixty meter. Now this part is done. We already know the total distance." | Step 1 — total distance | Step 1 card, word-level reveal → hold through recap | 140 + 220 = 360 m |
| 11 | 62.50–64.08 | "The remaining work is very easy." | Bridge beat into Step 2 | Step 1 morphs to stack right as this begins | Signals the pivot to the final formula |
| 12 | 64.50–75.38 | "We know time equals distance divided by speed. Putting the values, time equals three hundred sixty divided by eighteen. After solving this, we get twenty seconds." | Step 2 — final answer | Step 2 card, line/word-level reveal | Time = 360/18 = 20 s |
| 13 | 76.16–79.82 | "Hence, the train takes twenty seconds to completely cross the bridge." | Recap before reveal | Step 2 card holds | Reinforces the answer |
| 14 | 80.32–82.12 | "So the final answer will be option A." | Reveal | Options grid, A pulses green | Confirm against the four choices |

---

## PART 2 — Scene-by-Scene Storyboard

Design constraints in force throughout (per `_template/README.md` §4D.1): only `--primary #6373db`,
`--primary-light #e2e5ff`, `--success #4eb85f`, `--topic #949494`, `--text #000000`, `--bg #FFFFFF`;
only `QuestionCard`/`SerialNum`/`SolutionCard`/`SolutionStackCard`/`solutionChip`/`StepCircle`/
`StackLine`/options-grid/`logo`/`topic-name`/`bottomStrip`/Illustration/`Fraction`; only the helpers
in `animations.js`, called explicitly by name below. Illustration assets: `illustration/train.svg`,
`illustration/bridge.svg` (both copied from `Trains Streams Boats/global-illustrations/`, used as-is
— only a CSS crop wrapper on the bridge, no SVG edits).

### SCENE 1 — Cold Open (0.0s – 4.48s)
**VOICEOVER:** "So welcome back again. It's time to solve one more problem."
**VISUAL OBJECTIVE:** Establish the question, hero-style.
**SCREEN LAYOUT:** `#q-full-card` centered, lowered per `apt.heroEnterLowered`, at `top:70px`, containing "A 140 m train running at 18 m/s crosses a 220 m bridge. How long does it take to completely cross it?" with "140 m", "18 m/s", "220 m" in `.num` blue.
**ON-SCREEN ELEMENTS:** QuestionCard (full), SerialNum badge ("Q").
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 4.48)` — lowered pose at 0.3s, rises to rest at 4.48s (end of "one more problem"). SerialNum mirrors with its own parallel tween (pop at 0.8s, rise at 4.48s).
**CAMERA MOVEMENT:** None. **TRANSITIONS:** N/A (opening beat).
**EDUCATIONAL PURPOSE:** Anchor the problem before anything else competes for attention.
**VISUAL HIERARCHY:** QuestionCard > SerialNum > (empty illustration area).
**ATTENTION MANAGEMENT:** Nothing else on screen yet.
**MOTION NOTES:** The rise finishes exactly as "problem" is spoken.
**CONTINUITY FROM PREVIOUS SCENE:** N/A — first scene.

### SCENE 2 — Track, Train, Bridge Assemble (5.00s – 21.66s)
**VOICEOVER:** "Now in this problem, we are given a train of length one hundred forty meter, a bridge of length two hundred twenty meter, and the speed of the train is eighteen meter per second. The question is asking us to find how much time the train takes to completely cross the bridge."
**VISUAL OBJECTIVE:** Build the train + bridge illustration under the settled question card, anchoring each spoken number to a concrete visual the instant it's said, and landing the unknown "? s" target on the bridge's far edge.
**SCREEN LAYOUT:** `#illustration` (1400×280, centered, `top:400px`). Dashed track (`#illus-track`, `left:300px; width:760px; top:150px`). Train wrap (`#illus-train-wrap`, `left:400px; width:200px`) holding a speed tag above, `train.svg` (170px) in the middle, a length tag below. Bridge wrap (`#illus-bridge-wrap`, `left:585px; top:94px; width:280px; height:107px; overflow:hidden`) holding a cropped `bridge.svg` (the crop trims the SVG's empty top/bottom margins so only the cables+deck+legs band shows), with the "? s" target label above its far edge and a length tag below.
**ON-SCREEN ELEMENTS:** `#illus-track`, `#illus-train-wrap` (`#illus-speed-tag`, `#illus-train`, `#illus-length-tag`), `#illus-bridge-wrap` (`#illus-bridge-target-label`, `#illus-bridge`, `#illus-bridge-length-tag`).
**ANIMATION DETAILS:**
- 5.3s: `apt.roadSweep(tl, "#illus-track", 5.3, 0.7)`; track fades in alongside.
- 5.3s: train slides in from the left (`fromTo x:-200→0, scale:0.7→1, opacity:0→1`, 0.6s `back.out(1.6)`).
- 7.619s: `#illus-length-tag` ("140 m") fades+rises in — timed to "one" (start of "one hundred forty meter").
- 9.439s: `#illus-bridge-wrap`/`#illus-bridge` scale+fades in (`scale:0.8→1`, 0.5s `back.out(1.5)`) — timed to "a" (start of "a bridge of length").
- 11.3s: `#illus-bridge-length-tag` ("220 m") fades+rises in — timed to "two" (start of "two hundred twenty meter").
- 14.559s: `#illus-speed-tag` ("18 m/s") fades+rises in — timed to "eighteen".
- 18.979s: `#illus-bridge-target-label` ("? s") fades+rises in — timed to "time" (in "how much time").
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Continuous build, no hard cuts.
**EDUCATIONAL PURPOSE:** "140 m" → the train, "220 m" → the bridge, "18 m/s" → the train's speed, "? s" → the unknown time.
**VISUAL HIERARCHY:** Train + bridge (co-primary) > tags > track (ambient).
**ATTENTION MANAGEMENT:** One tag reveals at a time, matching narration order.
**MOTION NOTES:** Train rests with its front edge exactly at the bridge's near edge — visually "about to cross," setting up Scene 3's two-stage crossing motion.
**CONTINUITY FROM PREVIOUS SCENE:** Question card already at rest (Scene 1's rise completed at 4.48s); this scene only adds the illustration beneath it.

### SCENE 3 — Concept Beat: Two-Stage Crossing + Bracket Proof (21.98s – 43.14s)
**VOICEOVER:** "Now, the important point here is completely cross the bridge. What does this actually mean? It means the last compartment of the train should also come out of the bridge, so the train has to cover its own length as well as the length of the bridge. This is a simple rule to remember. Whenever a train crosses a bridge, total distance equals length of train plus length of bridge."
**VISUAL OBJECTIVE:** Visually prove the crossing-distance rule in two stages, mapped 1:1 onto the narration's own phrasing: Stage A (engine reaches the bridge's far edge — "not enough yet") plays under "the important point...what does this mean," Stage B (rear clears the far edge — "whole train is out") plays under "the last compartment...come out of the bridge," and the measuring bracket grows in under "cover its own length as well as the length of the bridge." The formal rule sentence then holds over the settled bracket.
**SCREEN LAYOUT:** Action happens entirely within `#illustration` — no new cards yet.
**ON-SCREEN ELEMENTS:** All data tags (train length, bridge length, speed) fade out at 21.98s as the crossing motion begins (the "? s" target stays visible — it's the persisting unknown). **Stage A** (21.98s–27.10s): `#illus-train-wrap` slides right by exactly the bridge's own rendered width (280px) — front edge (originally at the bridge's near edge) ends at the bridge's far edge. A "✗ Engine only — not enough yet" callout fades in at 24.5s, fades out at 27.2s. **Stage B** (27.54s–31.68s): `#illus-train-wrap` continues sliding to a total offset of 450px (280 + 170, the train's own rendered width) — rear edge now also reaches the bridge's far edge. A "✓ Whole train is out — crossing complete" callout fades in at 29.6s, fades out at 31.9s. **Bracket** (32.06s onward): `#brace-total` (spanning the full 450px slide, `left:415px; width:450px`) grows in at 32.06s, tick marks at 32.5s, label "Distance = Train Length + Bridge Length" at 32.8s. Bracket + label then hold through "This is a simple rule to remember. Whenever a train crosses a bridge, total distance equals length of train plus length of bridge." (35.94–43.14) with no new visual.
**ANIMATION DETAILS:**
- `tl.to("#illus-speed-tag, #illus-length-tag, #illus-bridge-length-tag", {opacity:0, duration:0.4}, 21.98)`.
- Stage A: `tl.to("#illus-train-wrap", {x:280, duration:5.12, ease:"power1.inOut"}, 21.98)`.
- Callout A: fade+y, 0.4s, at 24.5s; fade out 0.3s at 27.2s.
- Stage B: `tl.to("#illus-train-wrap", {x:450, duration:4.14, ease:"power1.inOut"}, 27.54)`.
- Callout B: fade+y, 0.4s, at 29.6s; fade out 0.3s at 31.9s.
- Bracket: scaleX 0→1 + opacity, 0.6s `power3.out`, at 32.06s.
- Tick marks: `back.out(2)`, 0.3s, at 32.5s.
- Label: fade+y, 0.4s, at 32.8s.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** No cuts — additive motion layered on the Scene 2 illustration.
**EDUCATIONAL PURPOSE:** The single most important conceptual leap in this problem, given a dedicated, mostly-wordless visual proof.
**VISUAL HIERARCHY:** Train crossing motion + callouts + bracket (momentary focal point) > soon-to-pin question (top).
**ATTENTION MANAGEMENT:** No competing reveals fire during either slide stage.
**MOTION NOTES:** Both slide stages are matched to their exact narration spans (5.12s / 4.14s) — Stage A reads as "watch it reach the end," Stage B as "watch the rest come out."
**CONTINUITY FROM PREVIOUS SCENE:** Directly continues Scene 2's illustration, already in its resting state (front-at-near-edge); this scene only adds motion + callouts + bracket, no layout change yet.

### SCENE 4 — Pin + Given Card (43.50s – 52.66s)
**VOICEOVER:** "Got it? Perfect. Now let us put the given values. Length of train equals one hundred forty meter. Length of bridge equals two hundred twenty meter."
**VISUAL OBJECTIVE:** Reorganize into Phase 2 layout, then formalize the two lengths into the Given card, narrated fresh so each word/number lands on its own spoken word.
**SCREEN LAYOUT:** `#q-pinned` at `left:385px; top:30px; width:1275px`. `#illus-pinned` at `left:280px; top:190px` (single shrunk train icon + recap text, centered). `#card-given .solution-card` centered at `left:640px; top:460px`.
**ON-SCREEN ELEMENTS:** Pinned QuestionCard (shorter text). Pinned illustration: shrunk train icon + "140 m · 220 m · 18 m/s" recap text. Given card opens with chip "Given", three lines: "Length of Train = 140 m", "Length of Bridge = 220 m", "Speed = 18 m/s".
**ANIMATION DETAILS:**
- `PIN_TIME = 44.699` — fires right as "Perfect." finishes. `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 44.699)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 44.699)` fired together. `apt.fadeOut(tl, "#serial-num", 44.699, 0.5)`.
- "Now let us put the given values." (45.119–46.599) plays over the already-pinned stage — a deliberate bridging gap, no new reveal (mirrors the `PIN_TIME`→`GIVEN_TIME` gap convention).
- `GIVEN_TIME = 47.059` — `apt.cardEnter(tl, "#card-given .solution-card", 47.059)`.
- `apt.textReveal(tl, "#card-given .math")`, WORD-level for the two freshly-narrated lines, line-level for the third (not re-stated at this point):
  - Line 1: "Length"@47.059, "of"@47.299, "Train"@47.479, "="@47.799, "140 m"(hi)@48.139.
  - Line 2: "Length"@49.879, "of"@50.159, "Bridge"@50.319, "="@50.7, "220 m"(hi)@51.559.
  - Line 3 (line-level, single span): "Speed = 18 m/s"@52.659.
- `apt.ambientLoop(tl, "#illus-pinned-icon", 45.7, 80.319)` — small bob on the pinned train icon through the whole solving stretch.
**CAMERA MOVEMENT:** The pin-flow glide. **TRANSITIONS:** `apt.pinFlow`'s real glide (0.8s), not a cut.
**EDUCATIONAL PURPOSE:** Converts the concept beat's two anchored lengths into a formal, word-synced Given card.
**VISUAL HIERARCHY:** Given card (center) > pinned question (top) > pinned recap (ambient).
**ATTENTION MANAGEMENT:** Each word/number reveals exactly as spoken.
**MOTION NOTES:** The mini train loop keeps this scene from reading static.
**CONTINUITY FROM PREVIOUS SCENE:** The bracket proof from Scene 3 has just settled; the pin fires right after, keeping the take continuous.

### SCENE 5 — Given → Stack, Step 1: Total Distance (52.80s – 64.08s)
**VOICEOVER:** "So the total distance becomes one hundred forty plus two hundred twenty, which is three hundred sixty meter. Now this part is done. We already know the total distance. The remaining work is very easy."
**VISUAL OBJECTIVE:** Archive the Given card, then apply the crossing-distance rule from Scene 3 directly: total distance = train length + bridge length.
**SCREEN LAYOUT:** `#stack-given .stack-card` at `left:100px; top:140px` (badge "G"). `#card-step1 .solution-card` centered at `left:640px; top:470px`.
**ON-SCREEN ELEMENTS:** Step 1 card, chip "Step 1", math: `Total Distance = 140 + 220` / `= 360 m`.
**ANIMATION DETAILS:**
- `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 52.8)` — completes 53.6.
- `apt.cardEnter(tl, "#card-step1 .solution-card", 53.219)` (fires exactly as "So the total distance becomes..." begins).
- `apt.textReveal(tl, "#card-step1 .math")`, word-level:
  - "Total Distance ="@53.219, "140"(hi)@54.5, "+"@55.399, "220"(hi)@56.079, "= 360 m"(ans)@57.219.
- Card holds through "Now this part is done. We already know the total distance." (58.539–62.119) — no new reveal.
- `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 62.5)` — fires exactly on "The remaining work is very easy," a natural pivot into Step 2.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Standard 0.8s morph.
**EDUCATIONAL PURPOSE:** Turns Scene 3's visual proof into a concrete number.
**VISUAL HIERARCHY:** Step 1 card (center, active) > Given stack card (left, archived) > pinned question/illustration.
**ATTENTION MANAGEMENT:** Only one active card at a time.
**MOTION NOTES:** Word-level reveal, plain opacity fade only.
**CONTINUITY FROM PREVIOUS SCENE:** Given card's morph begins right as Scene 4 settles.

### SCENE 6 — Step 1 → Stack, Step 2: Final Answer + Options Reveal (64.50s – 82.12s)
**VOICEOVER:** "We know time equals distance divided by speed. Putting the values, time equals three hundred sixty divided by eighteen. After solving this, we get twenty seconds. Hence, the train takes twenty seconds to completely cross the bridge. So the final answer will be option A."
**VISUAL OBJECTIVE:** Apply the time formula directly to get the answer, then reveal the correct option.
**SCREEN LAYOUT:** `#stack-step1 .stack-card` at `left:100px; top:320px`. `#card-step2 .solution-card` centered at `left:600px; top:470px; width:740px`. `.pinned-col` options grid at `top:400px`.
**ON-SCREEN ELEMENTS:** Step 1 stack card (badge "1") joins the column; `.stack-line` connector `#line-g-1` grows between badges "G" and "1". Step 2 card opens, chip "Step 2", math: `Time = Distance/Speed` / `Time = 360/18` / `= 20 s`. Then the stack stays visible, options grid (A 20s / B 17.6s / C 22.4s / D 24.8s) fades in with A highlighted green.
**ANIMATION DETAILS:**
- `apt.stackLineGrow(tl, "#line-g-1", 62.5)` (same moment Step 1 joins the stack).
- `apt.cardEnter(tl, "#card-step2 .solution-card", 64.5)`.
- `apt.textReveal(tl, "#card-step2 .math")`:
  - Line 1 "Time = Distance / Speed" (`.frac`) — line-level, `data-t=64.5` ("We know time equals distance divided by speed").
  - Line 2 "Time = 360 / 18" (`.frac`) — line-level, `data-t=69.26` ("time equals three hundred sixty...").
  - Line 3 "= 20 s" (`.ans`) — word-level, `data-t=74.619` ("we get twenty seconds").
- Card holds through "Hence, the train takes twenty seconds to completely cross the bridge." (76.159–79.819).
- `RECENTER_TIME = 80.319` (fires as "So the final answer..." begins) — `apt.fadeOut(tl, "#illus-pinned", 80.319)`, `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 80.319)`.
- `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 80.319)`, `apt.stackLineGrow(tl, "#line-1-2", 80.319)`.
- `apt.fadeIn(tl, "#options-reveal", 80.6)`.
- `apt.optionsStagger(tl, ".opt-btn", 80.8)`.
- `apt.correctPulse(tl, ".opt-btn.correct", 81.659)` (lands exactly on "option A." at 81.659–82.119).
- `END_FADE_TIME = 83.0` — `apt.fadeOut(tl, "#root > div", 83.0, 1.0)`.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Final morph + recenter glide + options stagger + pulse, then synchronized full-frame fade-out.
**EDUCATIONAL PURPOSE:** Delivers the payoff — the crossing-distance concept from Scene 3 becomes the Time = Distance/Speed substitution here.
**VISUAL HIERARCHY:** Step 2 card → options grid (sequential focal shift) > full stack column (G/1/2) > pinned question.
**ATTENTION MANAGEMENT:** `correctPulse` on option A is the terminal focal point.
**MOTION NOTES:** Only ~1.8s between the recap ending and the options landing — a deliberately tight finish (same shape as `Trains Streams Boats/q12`'s close).
**CONTINUITY FROM PREVIOUS SCENE:** Step 1's card is mid-morph as Step 2's cue fires; the stack column's G→1 chain extends to G→1→2 by scene end.

---

## PART 3 — Asset List Required

| Asset | Source | Notes |
|---|---|---|
| `illustration/train.svg` | Copied from `Trains Streams Boats/global-illustrations/` | Used as-is, full-size (170px) in Phase 1, shrunk (70px) in the pinned recap |
| `illustration/bridge.svg` | Copied from `Trains Streams Boats/global-illustrations/` | Used as-is (no re-path/recolor) — displayed through a CSS crop wrapper (`overflow:hidden` + shifted `<img>`) that trims the SVG's own empty top/bottom margins so only the cables+deck+legs band shows |
| `design-system.css`, `animations.js`, `assets/` | Copied from `_template/` | Per README §5B |

No new colors, fonts, or template components introduced — all illustration CSS (track, train wrap,
bridge wrap + crop, callouts, bracket + ticks + label) is per-question custom markup as permitted by
design.md's "Illustration" section.

## PART 4 — Animation Complexity Notes

- Standard patterns only: `heroEnterLowered`, `pinFlow` (×2, paired), `cardEnter` (×3), `textReveal`
  (×3), `morphToStack` (×3), `stackLineGrow` (×2), `setStackLine` (×2), `ambientLoop` (×1),
  `fadeIn`/`fadeOut`, `recenterForOptions`, `optionsStagger`, `correctPulse`, `roadSweep`.
- A handful of small custom (non-`animations.js`) tweens for the illustration content itself (train
  slide-in, bridge scale-in, length/speed tag fades, two-stage crossing slide, "not enough"/"done"
  callouts, bracket+ticks+label) — one-off illustration animations, same pattern as sibling q9, not
  new shared helpers.
- The bridge crop wrapper (`#illus-bridge-wrap`, fixed height + `overflow:hidden` + negative
  `margin-top`/`top` offset on the `<img>`) is the one new technique this question introduces versus
  q9 — needed because `bridge.svg`'s visible content only fills ~38% of its square viewBox, unlike
  q9's already-well-proportioned `train-station.svg`.
- No `apt.stepFlow` used (correctly dropped per README 4D.1).
- No double-animation risk: text-reveal-driven cards never also get `emphasize`/`resultReveal`.
- Only 2 solving steps (total distance, time formula) since the crossing-distance concept (Scene 3)
  removes the need for a separate distance-equation step — mirrors q9's 2-step structure.

## PART 5 — Master Timeline Overview

```
0.0    Phase 1 starts — QuestionCard hero (lowered) enters
0.8    SerialNum badge pop
4.48   QuestionCard + badge rise to resting position
5.3    Track sweep + train illustration slides in
7.619  "140 m" length label (under train)
9.439  Bridge (cropped bridge.svg) scale+fades in
11.3   "220 m" bridge length label
14.559 "18 m/s" speed tag
18.979 "? s" unknown-target label
[ Concept beat ]
21.98  Tags fade out; Stage A begins — train slides 280px (bridge width)
24.5   "✗ not enough yet" callout
27.10  Stage A completes (engine at bridge's far edge)
27.54  Stage B begins — train slides to 450px total (+ train width)
27.2   callout A fades out
29.6   "✓ crossing complete" callout
31.68  Stage B completes (rear clears far edge)
31.9   callout B fades out
32.06  Measuring bracket grows in (450px total)
32.5   Tick marks
32.8   "Distance = Train Length + Bridge Length" label
35.94–43.14  Formal rule sentence holds over settled bracket
[ PIN_TIME = 44.699 ]
44.699 pinFlow: question + illustration glide to pinned slots (0.8s)
45.119–46.599  "Now let us put the given values" — bridging beat, no new reveal
[ GIVEN_TIME = 47.059 ]
47.059 Given card enters, word-level reveal begins
45.7–80.319  ambientLoop on pinned train icon
52.659 Given card line 3 ("Speed = 18 m/s")
[ 52.8 ]  Given → stack morph
53.219 Step 1 card enters
54.5–57.219  Step 1 word-level reveal → "= 360 m"
58.539–62.119  Step 1 card holds (recap sentence)
[ 62.5 ]  Step 1 → stack morph + line-g-1 grows
64.5   Step 2 card enters
64.5–74.619  Step 2 formula + substitution + answer reveal
76.159–79.819  Step 2 card holds (recap sentence)
[ RECENTER_TIME = 80.319 ]
80.319 illus-pinned fades out; q-pinned recenters; Step 2 → stack morph + line-1-2 grows
80.6   options-reveal fades in
80.8   options stagger in
81.659 correctPulse on option A
[ END_FADE_TIME = 83.0 ]  full-frame fade out (1.0s)
~84.0  End
```

**Video duration:** 82.119s (matches `voiceover.wav` exactly).
