# Storyboard - Mensuration Q5 (Water tank displacement, category E)

Question: 50 men take a dip in a water tank 50 m long and 20 m broad. Average
displacement per man = 4 m3. Find the rise in water level. Answer: **C) 20 cm**.

Category: **E - Composite / displacement** (illustration_reference.md section 0).
Figure = the tank (isometric cuboid) + a scaled rise band. No icons for the 50 men
(penelty.txt standing item 13) - they are a formula term, not drawn people.

`transcript.json` duration = **93.479s**.

---

## PART 1 - Narration Beat Analysis

| # | Time | Narration | Purpose | Attention focus | Visual objective |
|---|------|-----------|---------|------------------|-------------------|
| 1 | 0.10-3.78 | "So welcome back again... time to solve one more problem." | Cold open | Question card | Question card + serial badge enter |
| 2 | 4.26-6.40 | "50 men enter a water tank." | State given #1 | Tank + men count | Tank front/top/side faces draw in; "50 men" role chip pops |
| 3 | 7.06-9.62 | "The tank is 50 meter long and 20 meter broad." | State given #2/#3 | Length + breadth | Length arrow+label, breadth arrow+label pop true-to-scale |
| 4 | 10.18-12.64 | "Each man displaces four cubic meter of water." | State given #4 | Per-man displacement | "4 m3 / man" chip pops |
| 5 | 13.28-15.40 | "We need to find how much the water level rises." | State the ask | Unknown | Grey dashed "rise = ?" indicator pops on tank wall |
| 6 | 15.90-33.34 | Bucket/stone analogy (why displacement raises level) | Build intuition | Tank water surface | Ambient water-shimmer pulses + given-chip re-emphasis, no new geometry (rule 16: nothing resolves yet) |
| 7 | 34.06-37.26 | "First, let us find how much water all the men displace." | Transition to solving | Pinned tank + Given card | PIN_TIME, then Given card recaps all 4 values |
| 8 | 37.66-44.36 | "One man displaces four cubic meter... 50 times four = 200 cubic meter." | Step 1: total volume | Step 1 card | Word-synced reveal, 200 m3 resolves green |
| 9 | 44.70-53.72 | "This is the total extra volume... find the bottom area of the tank." | Transition to area | Stack + tank footprint | Volume chip settles in stack; area teaser pulse |
| 10 | 54.14-60.26 | "Area = Length x Breadth = 50 x 20 = 1,000 square meter." | Step 2: area | Step 2 card | Word-synced reveal, 1000 m2 resolves green |
| 11 | 60.70-65.90 | "Think about one simple idea. The displaced water spreads over the entire bottom of the tank." | Conceptual bridge | Tank bottom face | Light blue wash sweeps across tank's bottom face |
| 12 | 66.32-80.64 | "So volume = area x height... height = volume / area = 200/1000 = 0.2 meter." | Step 3: solve height | Step 3 card + eq-row | Formula rearranges V=Ah -> h=V/A, numbers LINK to stack chips, 0.2 m resolves |
| 13 | 80.64 (beat) | (resolution) | Pay off the unknown | Tank rise band | Grey "rise=?" fades out; dashed green rise band grows in at the TRUE scaled thinness |
| 14 | 81.06-89.04 | "...answer asked in centimeter, 0.2 meter = 20 centimeter. Water level rises by 20 centimeter." | Unit conversion | Conversion callout | "0.2 m = 20 cm" callout chip pops, band label flips to "20 cm" green |
| 15 | 89.08-93.48 | "So the final answer will be 20 centimeter, which is option C." | Reveal answer | Options grid | Recenter, options stagger in, C pulses green on "option C" |

---

## PART 2 - Scene-by-Scene Storyboard

### Scene 1 - Cold open (0.0-4.26s)
- VISUAL OBJECTIVE: establish the question card + serial badge before any geometry.
- SCREEN LAYOUT: `#q-full-card` centered top (heroEnterLowered, offset 180px), `#serial-num` top-left, dotted grid + bottom strip + topic name + logo always on.
- ON-SCREEN ELEMENTS: `q-full-card` ("50 men take a dip in a water tank 50 m long and 20 m broad... find the rise"), `serial-num` badge "Q".
- ANIMATION: `apt.heroEnterLowered(tl,"#q-full-card",180,3.6)` (rise at "one more problem" end, 3.78s); serial badge mirrors the same lowered-rise motion (parallel tween per template).
- CAMERA: static, no camera moves in this system.
- TRANSITIONS: n/a (opening).
- EDUCATIONAL PURPOSE: orient the viewer to the problem before any figure exists.
- VISUAL HIERARCHY: question card > serial badge > background.
- ATTENTION MANAGEMENT: nothing else on screen yet.
- MOTION NOTES: card starts lowered/centered (reads as vertically centered while alone), then rises to its resting top slot exactly at 3.6s.
- CONTINUITY FROM PREVIOUS SCENE: n/a, first scene.

### Scene 2 - Tank builds, given values state (4.26-15.40s)
- VISUAL OBJECTIVE: draw the isometric tank stroke-by-stroke as the narration states each given value, one chip/arrow per beat.
- SCREEN LAYOUT: `#illustration` centered at `top:230px`, `viewBox="0 0 580 500"`.
- ON-SCREEN ELEMENTS: `#tank-figure` (front/top/side `<path>` faces), `#chip-men` ("50 men", role chip), `#arrow-length` + `#label-length` ("50 m"), `#arrow-breadth` + `#label-breadth` ("20 m"), `#chip-displace` ("4 m3 / man"), `#rise-indicator` (grey dashed "rise = ?").
- ANIMATION:
  - 2.0-3.4: front face path draws in (`strokeDashoffset`), then top face, then side face, each 0.5-0.6s apart.
  - 5.26: `#chip-men` pops (`back.out(1.6)`), matches word "50" in "50 men enter".
  - 7.62: `#arrow-length` + `#label-length` pop together (word "50" in "50 meter long").
  - 8.74: `#arrow-breadth` + `#label-breadth` pop together (word "20" in "20 meter broad").
  - 11.20: `#chip-displace` pops (word "four" in "displaces four cubic meter").
  - 13.28: `#rise-indicator` pops grey/dashed (states the unknown, per rule 16 nothing resolves yet).
- CAMERA: static.
- TRANSITIONS: continuous stroke-draw, no cuts.
- EDUCATIONAL PURPOSE: every stated number gets an immediate, true-to-scale visual anchor.
- VISUAL HIERARCHY: tank outline (blue) > chips (white/bordered) > grey unknown indicator.
- ATTENTION MANAGEMENT: one new element per beat, matches the 3-second law.
- MOTION NOTES: chips pop (`back.out(1.6)`), never flat-fade (pop-in law).
- CONTINUITY FROM PREVIOUS SCENE: the question card has finished rising to rest; the tank begins drawing directly beneath it in the same frame, no cut.

### Scene 3 - Bucket/stone analogy, no new geometry (15.90-34.06s)
- VISUAL OBJECTIVE: keep the frame alive through a purely conceptual narration stretch without asserting an answer before it's derived.
- SCREEN LAYOUT: unchanged tank + chips from Scene 2.
- ON-SCREEN ELEMENTS: `#water-fill` (a resting water rect at the tank's base, `--primary-light` wash) added at 15.9 to visualize "water already in the tank"; existing chips/arrows.
- ANIMATION:
  - 15.90: `apt.emphasize(tl,"#rise-indicator",15.90)` - re-poses the question.
  - 17.90/20.30/23.00/25.40/30.30/32.00: `#water-fill` fill-opacity shimmer (0.3->0.5->0.3, 0.5s) on each "level rises" mention - a ripple, never a height change (rule 16: the figure must not know the answer before the equation does).
  - 27.50: `apt.emphasize(tl,"#chip-men",27.50)` ("people enter a water tank").
  - 30.30: `apt.emphasize(tl,"#chip-displace",30.30)` ("every person pushes water away").
- CAMERA: static.
- TRANSITIONS: none, continuous.
- EDUCATIONAL PURPOSE: bridges the bucket-and-stone intuition to the formal tank without any new claim about the numeric answer.
- VISUAL HIERARCHY: shimmer is subtle (opacity only), stays behind the givens.
- ATTENTION MANAGEMENT: one shimmer/pulse every ~2.2-2.8s keeps gaps under 3s.
- MOTION NOTES: shimmer amplitude is intentionally small - decorative continuity, not a data claim.
- CONTINUITY FROM PREVIOUS SCENE: the tank and its 4 given chips are exactly where Scene 2 left them; only the ambient water-fill is new.

### Scene 4 - Pin + Given recap (34.06-37.66s)
- VISUAL OBJECTIVE: PIN_TIME glide, then a Given card recaps all 4 stated values compactly.
- SCREEN LAYOUT: `#q-pinned` top, `#illus-pinned` (exact coordinate copy, shrunk) left-center, `#card-given` centered.
- ON-SCREEN ELEMENTS: `#q-pinned`, `#illus-pinned` (all given chips static/visible per section 8, `#rise-indicator-pinned` carries over grey), `#card-given .solution-card`.
- ANIMATION:
  - PIN_TIME = 34.10: `apt.pinFlow(tl,"#q-full-card","#q-pinned",34.10)`, `apt.pinFlow(tl,"#illustration","#illus-pinned",34.10)`, `apt.fadeOut(tl,"#serial-num",34.10,0.5)`.
  - GIVEN_TIME = 34.90 (own timestamp, matches "let us find how much water... displace"): `apt.cardEnter`, `apt.textReveal(tl,"#card-given .math")`.
- CAMERA: static.
- TRANSITIONS: pinFlow glide (0.8s), not a fade swap.
- EDUCATIONAL PURPOSE: consolidate the 4 givens into one readable block before Step 1 computes with them.
- VISUAL HIERARCHY: pinned question > pinned tank > Given card (center, largest).
- ATTENTION MANAGEMENT: PIN_TIME and GIVEN_TIME are 0.8s apart, a deliberate small gap (layout settles first).
- MOTION NOTES: standard pinFlow/cardEnter, no deviation.
- CONTINUITY FROM PREVIOUS SCENE: the full-size tank is still finishing its glide into the pinned slot as the Given card's box begins its own entrance tween.

### Scene 5 - Step 1: total volume displaced (37.66-44.70s)
- VISUAL OBJECTIVE: compute `50 x 4 = 200 m3`.
- SCREEN LAYOUT: `#card-step1.solution-card` center; `#stack-given` left column (after morph).
- ON-SCREEN ELEMENTS: Step 1 math (`1 man = 4 m3`, `50 men x 4 = 200 m3`).
- ANIMATION:
  - 37.30: `apt.morphToStack(tl,"#card-given .solution-card","#stack-given .stack-card",37.30)`.
  - 37.70: `apt.cardEnter(tl,"#card-step1 .solution-card",37.70)`, `apt.textReveal`.
  - word-synced `.rv` spans at 38.76 ("4"), 41.90 ("50"), 42.32 ("x4"), 43.30 ("=200", `.ans`, resolves green + LINK pulse on `#chip-displace-pinned`).
- CAMERA: static.
- TRANSITIONS: `apt.morphToStack` (0.8s).
- EDUCATIONAL PURPOSE: isolate the multiplication that produces total displaced volume.
- VISUAL HIERARCHY: Step 1 card centered/largest; stack Given card small, left.
- ATTENTION MANAGEMENT: 4 reveal beats across 6.5s, well under the 3s ceiling.
- MOTION NOTES: `200 m3` LINKs (pulses together) with the pinned "4 m3/man" chip at the same timestamp.
- CONTINUITY FROM PREVIOUS SCENE: the Given card is still completing its morph into the stack as Step 1's cardEnter begins; the stack column now shows one circle ("G").

### Scene 6 - Bridge to area (44.70-52.08s)
- VISUAL OBJECTIVE: hold interest between Step 1's morph and Step 2's card without adding new claims.
- SCREEN LAYOUT: unchanged (Step 1 mid-morph -> stack, tank pinned).
- ON-SCREEN ELEMENTS: `#stack-step1` (after 44.40 morph), pinned tank.
- ANIMATION:
  - 44.40: `apt.morphToStack(tl,"#card-step1 .solution-card","#stack-step1 .stack-card",44.40)`, `apt.stackLineGrow(tl,"#line-g-1",44.40)`.
  - 47.68: `apt.emphasize(tl,"#stack-step1 .ans",47.68)` ("now that we've found this").
  - 48.98: pulse tank pinned outline stroke (`stroke-width` yoyo) ("use it to find rise in water level").
  - 51.46: pop a small grey "area = ?" indicator on the pinned tank's footprint (mirrors the rise indicator's grey/dashed style) ("First, find bottom area").
- CAMERA: static.
- TRANSITIONS: one morph (44.40) then holds.
- EDUCATIONAL PURPOSE: keeps the frame reactive through the connective narration.
- VISUAL HIERARCHY: stack column grows to 2 circles ("G","1").
- ATTENTION MANAGEMENT: beats at 44.40/47.68/48.98/51.46 - max gap 2.48s.
- MOTION NOTES: no geometry resolves here, only pulses/pops.
- CONTINUITY FROM PREVIOUS SCENE: Step 1's box is still sliding into the stack slot as this scene's first beat (47.68) fires.

### Scene 7 - Step 2: bottom area (52.08-60.60s)
- VISUAL OBJECTIVE: compute `50 x 20 = 1000 m2`.
- SCREEN LAYOUT: `#card-step2.solution-card` center.
- ON-SCREEN ELEMENTS: Step 2 math (`Area = L x B = 50 x 20 = 1000 m2`).
- ANIMATION:
  - 52.10: `apt.cardEnter`, `apt.textReveal`.
  - `.rv` spans at 54.14 ("Area=LxB"), 57.12 ("50"), 57.80 ("x20"), 59.14 ("=1000", `.ans`, resolves green).
  - 59.60: LINK pulse - the pinned tank's footprint (front face) gets a soft `--primary-light` wash confirming "area known" (fill-opacity 0->0.35).
- CAMERA: static.
- TRANSITIONS: none mid-scene (morph happens at scene start of Scene 8).
- EDUCATIONAL PURPOSE: isolate the area computation, feeding directly into height = volume/area.
- VISUAL HIERARCHY: Step 2 card centered; stack (G,1) at left.
- ATTENTION MANAGEMENT: beats every 1.3-3.0s.
- MOTION NOTES: the area-known wash is the first geometry-level payoff since PIN_TIME - deliberately timed to land with "=1000".
- CONTINUITY FROM PREVIOUS SCENE: the grey "area=?" indicator popped in Scene 6 is still on screen; it fades out at 59.60 as the real wash appears (grey -> resolved, never both at once).

### Scene 8 - Water spreads across the bottom (60.70-66.32s)
- VISUAL OBJECTIVE: bridge "we know Volume and Area, only Height is unknown" with a conceptual visual (no numeric claim yet).
- SCREEN LAYOUT: unchanged pinned tank + stack (G,1,2 after this scene's morph).
- ON-SCREEN ELEMENTS: pinned tank bottom face.
- ANIMATION:
  - 60.60: `apt.morphToStack(tl,"#card-step2 .solution-card","#stack-step2 .stack-card",60.60)`, `apt.stackLineGrow(tl,"#line-1-2",60.60)`.
  - 62.48: `#spread-wash` (light blue, spans the tank's bottom face width) grows via `attr:{width}` tween 0->full, 0.6s, `power2.out` - visualizes "water spreads over the entire bottom", not a height claim.
  - 64.50: `apt.emphasize(tl,"#chip-area-pinned",64.50)` ("one simple idea" callback).
- CAMERA: static.
- TRANSITIONS: one morph (60.60).
- EDUCATIONAL PURPOSE: primes the V = A x h relationship visually before the equation states it.
- VISUAL HIERARCHY: wash is subtle, sits under the tank outline.
- ATTENTION MANAGEMENT: 3 beats across 5.6s, max gap 2.0s.
- MOTION NOTES: wash width only, never height - height is still unknown at this point.
- CONTINUITY FROM PREVIOUS SCENE: Step 2 is still completing its slide into the stack as the spread-wash begins growing.

### Scene 9 - Step 3: solve height, resolve the rise (66.32-86.00s)
- VISUAL OBJECTIVE: `V = A x h` rearranges to `h = V/A = 200/1000 = 0.2 m`, then converts to `20 cm`, then the tank's rise band finally resolves.
- SCREEN LAYOUT: `#card-step3.solution-card` center with an `#eq-row` for the rearranged formula.
- ON-SCREEN ELEMENTS: Step 3 math/eq-row, `#rise-indicator` (grey, on pinned tank), `#displace-band` (hidden until resolved), `#conv-note` (unit callout).
- ANIMATION:
  - 66.30: `apt.cardEnter`, `apt.textReveal`.
  - 66.40: eq-row "Volume = Area x Height" fades in (states the relationship).
  - 68.20 / 69.00: LINK pulses on stack Step-1 (`200`) and Step-2 (`1000`) chips ("we already know volume and area").
  - 71.20: grey "h = ?" term pops in eq-row ("the only unknown is the height").
  - 72.90: `apt.emphasize(tl,"#rise-indicator",72.90)` ("...which is the rise in water level" - ties h to the tank's rise).
  - 74.84: eq-row rearranges - "Height" caption fades, `=` at 75.60, `.frac Volume/Area` at 75.90.
  - 78.06: `200` substitutes into the fraction, LINK-pulses with stack Step-1 chip.
  - 78.40: `1000` substitutes, LINK-pulses with stack Step-2 chip.
  - 79.88: `= 0.2 m` resolves green (`.ans`).
  - 80.30: `#rise-indicator` fades out; `#displace-band` grows in (dashed green, `attr:{height}` 0->true scaled px, 0.6s, `power2.out`) - the rise resolves in the FIGURE only now (rule 16).
  - 81.10: `#conv-note` ("0.2 m = 20 cm") fades in.
  - 83.52: `apt.emphasize(tl,"#conv-note",83.52)` (narrator restates "0.2 meter").
  - 84.92: band's label flips to "20 cm" (green, replaces the m value), LINK-pulses with `#conv-note`.
  - 86.00: `apt.morphToStack(tl,"#card-step3 .solution-card","#stack-step3 .stack-card",86.00)`, `apt.stackLineGrow(tl,"#line-2-3",86.00)`.
- CAMERA: static.
- TRANSITIONS: one morph at scene end (86.00).
- EDUCATIONAL PURPOSE: this is the payoff scene - every number in the formula visibly traces back to a chip already on screen (LINK pattern), and the previously-grey rise indicator only turns real once the arithmetic proves it.
- VISUAL HIERARCHY: eq-row > Step 3 card values > tank/band (background but the emotional payoff).
- ATTENTION MANAGEMENT: ~15 beats across 19.7s, no gap exceeds 2.5s.
- MOTION NOTES: `.frac` used for `Volume/Area` (no bare `/`). Band stays dashed even after resolving (topic rule: displacement bands are always dashed, unlike the alien "resolves to solid" pattern from other topics - this bank never does that).
- CONTINUITY FROM PREVIOUS SCENE: the spread-wash from Scene 8 is still visible on the tank's bottom face as Step 3's card enters; the eq-row builds directly beneath it in the same frame.

### Scene 10 - Restate + options reveal (86.00-93.479s)
- VISUAL OBJECTIVE: confirm the answer, recenter, reveal options, pulse the correct one exactly on "option C".
- SCREEN LAYOUT: stack column (G,1,2,3) + recenter pinned question, `.pinned-col` options grid.
- ON-SCREEN ELEMENTS: `#stack-step3`, `#options-reveal` (A/B/C/D, C=correct "20 cm").
- ANIMATION:
  - 86.40 / 87.60: `apt.emphasize` on the resolved band label + stack Step-3 chip ("water level rises by 20 centimeter").
  - 89.10: `RECENTER_TIME` - `apt.fadeOut(tl,"#illus-pinned",89.10)`, `apt.recenterForOptions(tl,"#q-pinned",160,180,89.10)`.
  - 89.20: `apt.fadeIn(tl,"#options-reveal",89.20)`.
  - 89.80: `apt.optionsStagger(tl,".opt-btn",89.80)`.
  - 92.80: `apt.correctPulse(tl,".opt-btn.correct",92.80)` (lands exactly on the word "option").
- CAMERA: static.
- TRANSITIONS: recenter (0.5s) + fade.
- EDUCATIONAL PURPOSE: final confirmation, ties the derived 20 cm to option C.
- VISUAL HIERARCHY: options grid becomes primary focus; stack recedes but stays visible.
- ATTENTION MANAGEMENT: beats at 86.40/87.60/89.10/89.20/89.80/92.80 - all gaps < 3.1s.
- MOTION NOTES: `apt.correctPulse` standard 0.4s yoyo scale.
- CONTINUITY FROM PREVIOUS SCENE: Step 3 is already resting in the stack (morphed at 86.00 in Scene 9); this scene picks up with its confirm-pulses immediately, no dead frame between scenes.

### Scene 11 - End fade (94.079-95.479s)
- END_FADE_TIME = 93.479 + 0.6 = 94.079. `apt.fadeOut(tl,"#root > div",94.079,1.2)`.
- `tl.set({},{},95.479)` - 94.079+1.2+0.2, nothing beyond this mark.
- CONTINUITY FROM PREVIOUS SCENE: the correct-pulse from Scene 10 has fully settled (92.80+0.4x2=93.60) before the fade begins.

---

## PART 3 - Asset List Required

- No external SVG/PNG assets. Entire tank figure is hand-authored inline SVG
  (isometric cuboid via 3 `<path>` faces, per illustration_reference.md 3.1).
- Reused template assets only: `serial-num-badge.svg`, `logo.png` (via `.serial-num`/`.logo` CSS classes).
- `.fig-chip` / `.fig-chip-pinned` CSS block (illustration_reference.md section 4) pasted into `<style>`.

## PART 4 - Animation Complexity Notes

- Category E figure: isometric tank (3.1) + displacement band (7.5), no icons for the 50 men (rule 13).
- Scale factor for the tank's TRUE given dimensions (length 50 m, breadth 20 m): budget 300px longest -> `300/50 = 6 px/m`. Breadth drawn = `20*6=120px` receding depth.
- Wall height (140px) and the height-axis scale (`140px per illustrative 1.4 m`) are explicitly ILLUSTRATIVE - the problem never states the tank's total depth, only the rise. Documented inline in the geometry comment so it's never mistaken for a given/derived true dimension.
- Rise band: true rise = 0.2 m, drawn at `0.2 * (140/1.4) = 20px` - matches illustration_reference.md's own worked "q5-style" example (140px wall, 20px band) almost exactly, confirming this is the intended reading.
- Total timed events across the 93.479s video: ~70, comfortably above the `narration_seconds/2 ~= 47` floor.
- No gap between any two consecutive timed events during narration exceeds 3s (checked scene-by-scene above).
- `data-duration` on every `.clip` sized to its last transition start + transition duration + >=1.5s buffer (see index.html comments).

## PART 5 - Master Timeline Overview

```
0.00  Background layers + bottomStrip/topic/logo (always on)
0.30  #q-full-card enters (heroEnterLowered, offset 180)
0.80  #serial-num enters (mirrors hero offset)
2.00  Tank front face draws in
2.60  Tank top face draws in
3.20  Tank side face draws in
3.60  RISE_TIME - question card + badge rise to rest
5.26  #chip-men pops ("50 men")
7.62  #arrow-length + #label-length pop ("50 m")
8.74  #arrow-breadth + #label-breadth pop ("20 m")
11.20 #chip-displace pops ("4 m3/man")
13.28 #rise-indicator pops (grey, unknown)
15.90-32.00  bucket analogy: 6x water-shimmer pulses + 2x chip re-emphasis
[ PIN_TIME 34.10 ]  pinFlow (question + illustration)
34.90  GIVEN_TIME - card-given enters, textReveal
37.30  Given -> stack (morphToStack)
37.70  card-step1 enters, textReveal
38.76/41.90/42.32/43.30  Step1 word reveals, 200 m3 resolves green
44.40  Step1 -> stack, line-g-1 grows
47.68/48.98/51.46  bridge beats (emphasize, pulse, grey area=? pop)
52.10  card-step2 enters, textReveal
54.14/57.12/57.80/59.14  Step2 word reveals, 1000 m2 resolves green
59.60  area-known wash on pinned tank
60.60  Step2 -> stack, line-1-2 grows
62.48  spread-wash grows across tank bottom face
64.50  emphasize area chip
66.30  card-step3 enters, textReveal
66.40  eq-row "V = A x h" fades in
68.20/69.00  LINK pulses (volume/area stack chips)
71.20  eq-row "h = ?" (grey)
72.90  emphasize rise-indicator (ties h to the rise)
74.84/75.60/75.90  eq-row rearranges to "Height = Volume/Area"
78.06/78.40  200 and 1000 substitute (LINK)
79.88  "= 0.2 m" resolves green
80.30  rise-indicator fades, displace-band grows in (true scaled thinness)
81.10  conv-note "0.2 m = 20 cm" fades in
83.52  emphasize conv-note
84.92  band label flips to "20 cm" green (LINK with conv-note)
86.00  Step3 -> stack, line-2-3 grows
86.40/87.60  confirm pulses ("rises by 20 centimeter")
[ RECENTER_TIME 89.10 ]  illus-pinned fades, q-pinned recenters
89.20  #options-reveal fades in
89.80  optionsStagger
92.80  correctPulse (lands on "option")
[ END_FADE_TIME 94.079 ]  apt.fadeOut #root > div, 1.2s
95.479  tl.set marker - nothing beyond this
```
