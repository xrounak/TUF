# Storyboard - Mensuration Q3 (Rectangle percentage increase in area)

Question: If the length and breadth of a rectangle increase by 10% and 20% respectively, find
the percentage increase in its area. Options: A)30% B)32% C)34% D)36%. Correct: B.

Category: C - percentage change (see illustration_reference.md section 0). One rectangle,
drawn once, its edges GROW independently from an anchored corner (never a uniform 1.32x
scale - the two axes compound differently, 1.10 x 1.20 = 1.32).

Narration technique: the script assumes L=100, B=100 to make the arithmetic clean, so the
illustration's TRUE dimensions are literally 100 (original, a square) -> 110 x 120 (after).
This is not eyeballed - it's the exact number the narration states and the equation solves.

---

## PART 1 - Narration Beat Analysis

| # | Time (s) | Narration | Educational purpose | Attention focus | Visual objective |
|---|---|---|---|---|---|
| 1 | 0.10-0.94 | "So welcome back again." | Hook | Question card | Card rises into frame |
| 2 | 1.48-3.78 | "It's time to solve one more problem." | Hook | Serial badge | Badge pops with card |
| 3 | 4.32-5.06 | "Now, in this problem," | Transition | Question text | Numbers highlight |
| 4 | 5.60-9.12 | "the length of a rectangle increases by 10 percentage" | State given % | Square + right arrow | Grey square draws in, "+10%" arrow pops (right, length axis) |
| 5 | 9.76-12.06 | "and the breadth increases by 20 percentage." | State given % | Top arrow | "+20%" arrow pops (up, breadth axis) |
| 6 | 12.72-15.78 | "We need to find by how much the area increases." | State goal | Whole square | Square pulses once |
| 7 | 16.36-18.10 | "What is the area of a rectangle?" | Recall formula | Formula row | "Area" caption fades in |
| 8 | 18.46-21.00 | "Area is simply length into breadth." | State formula | Formula row | "= L x B" grows term by term |
| 9 | 21.56-27.50 | "So if both the length and the breadth increase, the area will also increase." | Foreshadow | Square + dashed after-outline | Dashed grey "?" after-outline (same size as square) fades in around it |
| 10 | 28.22-29.32 | "To make this very easy," | Bridge to Phase 2 | Pinned layout | pinFlow glide |
| 11 | 29.70-35.24 | "let us assume the original length is 100 and the original breadth is also 100." | State the assumed values | Given card + pinned square | Square edges turn solid blue, "100"/"100" chips pop |
| 12 | 35.66-41.24 | "Then the original area is 100 times 100, equal to 10,000." | Compute original area | Step 1 card | "100 x 100 = 10,000" reveals, area chip pulses |
| 13 | 41.62-53.00 | "Now the length increases by 10%, so becomes 110. The breadth increases by 20%, so becomes 120." | Compute new sides | Step 2 card + figure | Dashed after-outline resolves solid green, grows to true 110x120, new chips pop |
| 14 | 53.06-62.90 | "Now let us find the new area. New area = 110 x 120 = 13,200." | Compute new area | Step 3 card | LINK: green rect pulses with equation term |
| 15 | 62.98-79.92 | "So the increase in area is 13,200 - 10,000 = 3,200. Percentage increase = 3200/10000 x 100 = 32%." | Compute % increase | Step 4 card | Fraction grows, "32%" resolves green |
| 16 | 80.70-85.48 | "So the final answer will be 32%, which is option B." | Reveal answer | Options grid | B highlights green |

---

## PART 2 - Scene-by-Scene Storyboard

### SCENE 1 (0.0-3.8s) - Question card rises
VISUAL OBJECTIVE: establish the question, no illustration yet.
SCREEN LAYOUT: `#q-full-card` centered, lowered start (heroEnterLowered, offsetY=180), serial badge
top-left mirrors the same rise.
ON-SCREEN ELEMENTS: dotted grid, bottom strip, topic name "Mensuration", logo, `#q-full-card`,
`#serial-num`.
ANIMATION DETAILS: `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.8)` at 0.3; badge parallel
tween 0.8 -> rise at 3.8 (matches "one more problem." ending).
CAMERA MOVEMENT: none (static frame, motion is internal).
TRANSITIONS: n/a (opening).
EDUCATIONAL PURPOSE: orient viewer to the problem statement.
VISUAL HIERARCHY: question card > badge.
ATTENTION MANAGEMENT: card is the only moving object.
MOTION NOTES: `back.out(1.4)` settle.
CONTINUITY FROM PREVIOUS SCENE: n/a, this is the opening scene.

### SCENE 2 (4.3-15.8s) - Illustration builds: square + percentage arrows
VISUAL OBJECTIVE: draw the rectangle (a true 100x100 square, matching the assumed values used
later) and label the two GIVEN percentages on its length and breadth edges.
SCREEN LAYOUT: `#illustration` wrapper centered under the question card. Inside, an SVG
`viewBox="0 0 580 500"` holds the square (grey dashed - unknown magnitude) plus two percentage
arrows (blue/black - these ARE given).
ON-SCREEN ELEMENTS: `#square-original` (dashed grey outline, stroke-draw), `#arrow-length`
(horizontal, right of square) + `#chip-length-pct` ("+10%"), `#arrow-breadth` (vertical, above
square) + `#chip-breadth-pct` ("+20%").
ANIMATION DETAILS:
- 4.30: `#square-original` strokeDashoffset draws in (0.7s, power2.out).
- 5.60: `#arrow-length` fades in (with pop) as "10 percentage" is spoken (8.10-9.12).
- 8.20: `#chip-length-pct` pops in (`back.out(1.6)`, 0.4s) at "10 percentage" (8.42-9.12).
- 9.76: `#arrow-breadth` fades in.
- 11.30: `#chip-breadth-pct` pops in at "20 percentage" (11.48-12.06).
- 12.72: `apt.emphasize(tl, "#square-original", 12.72)` - square pulses ("we need to find...").
CAMERA MOVEMENT: none.
TRANSITIONS: continuous build, no cuts.
EDUCATIONAL PURPOSE: the viewer sees exactly what's GIVEN (two percentages) vs what's UNKNOWN
(the actual side lengths, still grey/dashed).
VISUAL HIERARCHY: square first, then each arrow+chip pair as its percentage is spoken.
ATTENTION MANAGEMENT: one new element roughly every 1.5-2.5s - satisfies the 3-second law.
MOTION NOTES: arrows use the standard double-headed arrow component (illustration_reference.md
7.1); chips are `.fig-chip` with `back.out(1.6)` pop per the Pop-In Law.
CONTINUITY FROM PREVIOUS SCENE: the question card has just settled at its resting position;
the illustration begins directly beneath it in the same continuous frame, no cut.

### SCENE 3 (16.4-21.0s) - Formula grows
VISUAL OBJECTIVE: recall Area = Length x Breadth as a fixed equation row above the illustration.
SCREEN LAYOUT: `#eq-row`, absolute, centered, `top:330px`, `white-space:nowrap`, reserved full
width up front (section 9).
ON-SCREEN ELEMENTS: `#eq-caption-find` ("Area"), `#eq-eq1` (" = "), `#eq-term-L` ("Length"),
`#eq-eq2` (" x "), `#eq-term-B` ("Breadth").
ANIMATION DETAILS:
- 16.40: `apt.fadeIn(tl, "#eq-caption-find", 16.40)` ("What is the area").
- 18.46: `apt.fadeIn(tl, "#eq-eq1", 18.46)` + `#eq-term-L` ("Area is simply length").
- 20.34: `apt.fadeIn(tl, "#eq-eq2", 20.34)` + `#eq-term-B` ("into breadth").
CAMERA MOVEMENT: none.
TRANSITIONS: continuous with Scene 2 (illustration stays visible underneath).
EDUCATIONAL PURPOSE: pins the formula the rest of the video substitutes into.
VISUAL HIERARCHY: equation row sits above the figure, same visual weight as a solution card.
ATTENTION MANAGEMENT: one term per beat, matches spoken cadence exactly.
MOTION NOTES: plain `fadeIn`, no slide (formula rows never fade a finished equation in at once).
CONTINUITY FROM PREVIOUS SCENE: the square and its two percentage arrows are still on screen,
untouched, while the formula builds above them - same continuous take.

### SCENE 4 (21.6-27.9s) - Foreshadow the growth
VISUAL OBJECTIVE: hint that the area is about to grow, without revealing numbers yet (rule 16 -
derived shapes only turn green once the formula resolves them).
SCREEN LAYOUT: same SVG, a second outline appears around the square.
ON-SCREEN ELEMENTS: `#rect-after` (dashed, `--topic` grey, same size as `#square-original`,
anchored at the SAME bottom-left corner (170,380)) + `#chip-question` ("?") centered on it.
ANIMATION DETAILS:
- 22.12: `apt.fadeIn(tl, "#rect-after", 22.12)` ("if both...increase").
- 22.12: `apt.fadeIn(tl, "#chip-question", 22.12)`.
- 25.32: `apt.emphasize(tl, "#rect-after", 25.32)` ("the area will also increase").
CAMERA MOVEMENT: none.
TRANSITIONS: n/a.
EDUCATIONAL PURPOSE: visually promises "this shape grows" before the numbers exist, so the
Phase 2 growth reads as payoff, not a surprise.
VISUAL HIERARCHY: dashed grey stays visually secondary to the solid grey square.
ATTENTION MANAGEMENT: single new element, single pulse - matches the sparse two-sentence beat.
MOTION NOTES: dashed stroke, no fill - "unknown, coming later."
CONTINUITY FROM PREVIOUS SCENE: the formula row and square are unchanged; the dashed outline
is added as a new, sibling layer without disturbing anything already on screen.

### SCENE 5 (28.2-29.7s) - Pin flow into Phase 2
VISUAL OBJECTIVE: reorganize layout - question shrinks to top, illustration shrinks and moves
to the pinned slot, both glide together.
PIN_TIME = 27.9 (0.4s after "the area will also increase." ends at 27.5).
ANIMATION DETAILS:
- 27.90: `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 27.9)`.
- 27.90: `apt.pinFlow(tl, "#illustration", "#illus-pinned", 27.9)`.
- 27.90: `apt.fadeOut(tl, "#serial-num", 27.9, 0.5)`.
- 27.90: `apt.fadeOut(tl, "#eq-row", 27.9, 0.4)` (formula's job is done, cleared before pin).
CONTINUITY FROM PREVIOUS SCENE: the exact square + dashed after-outline that Scene 2-4 built
glides, coordinate-exact, into the pinned slot - same object, not a redraw.

### SCENE 6 (29.7-35.24s) - GIVEN card: assumed values
GIVEN_TIME = 29.7 (separate from PIN_TIME - "let us assume..." is a new beat).
VISUAL OBJECTIVE: state the technique's assumption (L=100, B=100) and resolve the grey square
to a known, solid blue square with real labels.
SCREEN LAYOUT: `#card-given .solution-card` centered, `.chip` = "Given".
ON-SCREEN ELEMENTS: math lines "Assume Length = 100" / "Assume Breadth = 100"; pinned square's
dashed grey stroke turns solid `--primary` blue; `#chip-side-original` ("100") pops at the
square's bottom edge.
ANIMATION DETAILS:
- 29.70: `apt.cardEnter(tl, "#card-given .solution-card", 29.7)`.
- 29.70: `apt.textReveal(tl, "#card-given .math")`.
- 31.50: `tl.to("#square-pinned", { stroke: "#6373db", strokeDasharray: "none", duration: 0.3 }, 31.5)` (word "hundred" @31.699).
- 31.80: `#chip-side-original` pops (bottom, "100").
- 34.90: second `#chip-side-original-v` pops (left, "100"), word "hundred." @34.86.
CONTINUITY FROM PREVIOUS SCENE: the pinned square is the same object that just glided in via
pinFlow, still dashed grey until this scene resolves it.

### SCENE 7 (35.66-41.24s) - STEP 1: original area
Given card morphs to stack at 36.0 (35.239 + 0.76 buffer, > 0.5s past its last reveal).
VISUAL OBJECTIVE: compute the original area = 100 x 100 = 10,000.
ON-SCREEN ELEMENTS: `#card-step1`, math "Original Area" / "= 100 x 100" / "= 10,000".
ANIMATION DETAILS:
- 36.00: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 36.0)`.
- 37.00: `apt.cardEnter(tl, "#card-step1 .solution-card", 37.0)`.
- 37.00: `apt.textReveal(tl, "#card-step1 .math")` - "Original Area" @35.659, "= 100 x 100" @37.879,
  "= 10,000" @40.2.
- 40.20: LINK - `#chip-area-original` ("10,000") pops inside the pinned square; simultaneously
  `tl.to("#eq-term2-area", { color: "#4eb85f" }, 40.2)` style pulse on the matching equation
  term if still visible (else the chip alone carries the beat).
CONTINUITY FROM PREVIOUS SCENE: the Given card's box visibly slides/shrinks into the stack
slot; the pinned square (now solid blue, labeled 100/100) is untouched underneath.

### SCENE 8 (41.62-53.0s) - STEP 2: new length and breadth
Step 1 morphs to stack at 41.0 (40.2 + 0.8).
VISUAL OBJECTIVE: compute the two new sides and grow the dashed "?" outline into a solid green
after-rectangle, true to its new dimensions (110 x 120, NOT a uniform 1.32x scale).
ON-SCREEN ELEMENTS: `#card-step2`, math "Length +10% -> 110" / "Breadth +20% -> 120".
ANIMATION DETAILS:
- 42.00: `apt.cardEnter(tl, "#card-step2 .solution-card", 42.0)`.
- 42.00: `apt.textReveal(tl, "#card-step2 .math")` - "Length increases 10%" @41.619 (line-level),
  "New Length = 110" @44.619 (line-level).
- 44.90: `#chip-question` fades out; `#rect-after` stroke -> `#4eb85f`, `stroke-dasharray: none`.
- 45.00: `tl.to("#rect-after", { attr: { width: 238 }, duration: 0.8, ease: "power2.out" }, 45.0)`
  (width only - the length axis resolves first, matching the narration order).
- 45.40: `#chip-side-after-h` pops (bottom, outer edge, "110").
- 46.98: `apt.textReveal` continues - "Breadth increases 20%" @46.979, "New Breadth = 120" @49.919.
- 50.10: `tl.to("#rect-after", { attr: { height: 260, y: 120 }, duration: 0.8, ease: "power2.out" }, 50.1)`
  (height grows upward from the anchored bottom edge - y decreases as height increases, per
  illustration_reference.md 7.3's anchored-corner technique).
- 50.50: `#chip-side-after-v` pops (left, outer edge, "120").
CONTINUITY FROM PREVIOUS SCENE: the dashed "?" outline that has sat quietly around the square
since Scene 4 is the exact element that resolves here - not a new shape.

### SCENE 9 (53.06-62.9s) - STEP 3: new area
Step 2 morphs to stack at 50.7 (49.919 + 0.8).
VISUAL OBJECTIVE: compute the new area = 110 x 120 = 13,200.
ON-SCREEN ELEMENTS: `#card-step3`, math "New Area" / "= 110 x 120" / "= 13,200".
ANIMATION DETAILS:
- 51.70: `apt.cardEnter(tl, "#card-step3 .solution-card", 51.7)`.
- 51.70: `apt.textReveal(tl, "#card-step3 .math")` - "New Area" @55.239, "= 110 x 120" @57.919 (word
  "times"), "= 13,200" @59.739.
- 60.20: LINK - `#chip-area-after` ("13,200") pops inside the green rectangle; `apt.emphasize(tl,
  "#rect-after", 60.2)`.
CONTINUITY FROM PREVIOUS SCENE: the green after-rectangle just finished growing to its true
110x120 size in Scene 8; this scene reads its area off that same shape.

### SCENE 10 (62.98-79.92s) - STEP 4: increase and percentage
Step 3 morphs to stack at 63.7 (62.899 + 0.8).
VISUAL OBJECTIVE: compute increase = 13,200 - 10,000 = 3,200, then % increase = 32%.
ON-SCREEN ELEMENTS: `#card-step4`, math "Increase" / "= 13,200 - 10,000 = 3,200" / "% Increase"
/ fraction "3200/10000 x 100" / "= 32%".
ANIMATION DETAILS:
- 64.70: `apt.cardEnter(tl, "#card-step4 .solution-card", 64.7)`.
- 64.70: `apt.textReveal(tl, "#card-step4 .math")` - "Increase = 13,200 - 10,000" @62.979 (line),
  "= 3,200" @67.739 (line), "% Increase" @72.04 (line), fraction "3200/10000 x 100" @73.379,
  "= 32%" @78.959 (word "32").
- 78.96: LINK - both stack squares in the pinned figure pulse together with `#eq-percent` chip
  ("32%") turning `--success` green (rule 16 - only now, after the formula resolves it).
- 79.90: `apt.morphToStack(tl, "#card-step4 .solution-card", "#stack-step4 .stack-card", 79.9)`.
CONTINUITY FROM PREVIOUS SCENE: the "13,200" chip from Scene 9 is still visible on the green
rectangle; this scene subtracts the blue square's "10,000" from it in place.

### SCENE 11 (80.7-85.48s) - Options reveal
VISUAL OBJECTIVE: reveal the four options, highlight B (32%) as correct.
ANIMATION DETAILS:
- 80.90: `apt.fadeIn(tl, "#options-reveal", 80.9)`.
- 81.50: `apt.optionsStagger(tl, ".opt-btn", 81.5)`.
- 83.60: `apt.correctPulse(tl, ".opt-btn.correct", 83.6)` (aligned with "option B" @84.619-85.36).
CONTINUITY FROM PREVIOUS SCENE: the stack column (Given, Step 1-4) remains fully visible on the
left, unchanged, as the options grid populates on the right - same frame, no cut.

### SCENE 12 (86.08-87.48s) - End fade
END_FADE_TIME = 86.079 (85.479 + 0.6). `apt.fadeOut(tl, "#root > div", 86.079, 1.2)`.
`tl.set({},{},87.479)` - final marker, 0.2s after fade completes.

---

## PART 3 - Asset List Required

No external image assets. Everything is inline SVG (hand-authored, per section 5 of
VIDEO_BUILD_PROMPT.md) plus `.fig-chip` HTML labels via `foreignObject`. Shared template
assets only: `serial-num-badge.svg`, `logo.png` (already copied into `assets/`).

---

## PART 4 - Animation Complexity Notes

- Single growing rectangle (illustration_reference.md 7.3 pattern), not two side-by-side
  shapes - fits this question's narration (one object, described as "the rectangle," growing).
- The dashed "?" outline appearing in Scene 4 and resolving to solid green across Scene 8 is
  the closest analog to the "Pop-In / LINK" language in VIDEO_BUILD_PROMPT.md section 5.3: the
  shape visually "knows less than the narrator" until the formula catches up, then locks in.
- Two independent `attr` tweens (width then height) on `#rect-after`, not one combined tween -
  this is what makes the 10% and 20% growth read as two distinct, sequential events rather than
  a single opaque jump, and keeps the compounding (1.10 x 1.20 = 1.32, not 1.30) visually honest.
- `#eq-row` (Phase 1 formula) is a SEPARATE element from any Phase-2 equation - it's cleared at
  PIN_TIME and does not persist into the pinned figure (design.md: "formula row lives outside
  the pinned figure").
- Card count: Given + 4 steps (upper end of the 2-4 range) because the arithmetic has four
  distinct chunks (original area, new sides, new area, final percentage) and the narration
  itself pauses between each with a distinct "equal to..." beat.

---

## PART 5 - Master Timeline Overview

```
0.0   Background layers + bottom strip + topic + logo (always visible)
0.3   Question card rises (heroEnterLowered, offsetY 180, rise @3.8)
0.8   Serial badge pops (parallel rise @3.8)
4.3   Square (dashed grey) draws in
5.6   "+10%" length arrow + chip
9.76  "+20%" breadth arrow + chip
12.72 Square pulses ("we need to find...")
16.4  Formula row: "Area" caption
18.46 Formula row: "= Length"
20.34 Formula row: "x Breadth"
22.12 Dashed grey "?" after-outline fades in around the square
25.32 After-outline pulses
27.9  PIN_TIME - pinFlow (question + illustration), serial + formula fade out
29.7  GIVEN_TIME - Given card enters ("Assume L=100, B=100")
31.5  Square resolves solid blue; "100" chip (bottom)
34.9  "100" chip (left)
36.0  Given -> stack morph
37.0  Step 1 card enters ("Original Area")
40.2  "= 10,000" chip pops on square
41.0  Step 1 -> stack morph
42.0  Step 2 card enters ("New Length / Breadth")
45.0  After-outline resolves green, width grows to 110-true
45.4  "110" chip (bottom, outer)
50.1  Height grows to 120-true (anchored corner)
50.5  "120" chip (left, outer)
50.7  Step 2 -> stack morph
51.7  Step 3 card enters ("New Area")
60.2  "13,200" chip pops on green rectangle
63.7  Step 3 -> stack morph
64.7  Step 4 card enters ("Increase / % Increase")
67.7  "= 3,200"
72.0  "% Increase" fraction grows
78.96 "= 32%" resolves green, LINK pulse
79.9  Step 4 -> stack morph
80.9  Options reveal fades in
81.5  Options stagger in
83.6  Correct option (B, 32%) pulses green
86.08 END_FADE_TIME - everything fades together (1.2s)
87.48 Timeline end marker
```

Total events (illustration + cards + reveals + morphs): 40+ across 85.5s narration, averaging
one beat roughly every 2s - satisfies the 3-second law with no gap exceeding it during active
narration.
