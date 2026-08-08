# Storyboard - Mensuration q4 (Cube volume)

Question: "A cube has an edge length of 4 cm. What is its volume?"
Options: A) 48 cm³  B) 56 cm³  C) 64 cm³ (correct)  D) 72 cm³
Category: A - direct formula (edge -> volume, V = s^3). Single isometric cube figure.
Narration duration (transcript.json): 70.539s

## PART 1: Narration Beat Analysis

| # | Time | Text | Purpose | Focus | Visual objective |
|---|------|------|---------|-------|-------------------|
| 1 | 0.12-3.82 | "So welcome back again. It's time to solve one more problem." | Cold open | Question card | Card rises into resting slot |
| 2 | 4.20-8.58 | "...a cube has an edge length of four centimeter," | State the given | Cube figure | Isometric cube draws in face by face, "Edge = 4 cm" chip pops |
| 3 | 9.04-10.48 | "...we need to find its volume." | State the ask | Find chip + Volume chip | "Find: Volume" pops, "Volume = ?" (grey) pops inside cube |
| 4 | 11.02-24.32 | "What does volume actually mean? ... how much it can hold." | Concept explanation | Cube fill wash | Front-face fill pulses (breathing) to visualise "space inside" |
| 5 | 25.00-38.30 | "Here we are sure about one fact. In a cube, all the edges are exactly the same. So if one edge is four centimeter, the length is four, the breadth is four, and the height is also four." | Establish all 3 dims equal | Three edges | All-edge stroke pulse, then length/breadth/height arrows+labels pop one at a time |
| 6 | 38.86-40.90 | "This is why the formula becomes very simple." | Transition to solving | Layout | PIN - question + cube glide to pinned slot |
| 7 | 41.46-48.62 | "Volume equal to side times side times side, or ... side cube." | Formula | Step 1 card | Formula grows term by term |
| 8 | 49.00-53.18 | "Now let us put the value. Volume equal to four times four times four." | Substitution | Step 1 card | = 4 x 4 x 4 reveals |
| 9 | 53.62-58.92 | "First, four times four becomes 16, then 16 times four becomes 64." | Computation | Step 1 card + Volume chip | = 16 x 4 = 64 cm³ resolves; pinned Volume chip flips grey->green |
| 10 | 59.54-64.82 | "This means the cube can hold 64 cubic centimeter of space." | Restate answer | Volume chip | Confirm pulses |
| 11 | 65.66-70.54 | "So the final answer will be 64 cubic centimeter, which is option C." | Reveal | Options grid | Options stagger in, C pulses green |

## PART 2: Scene-by-Scene Storyboard

### Scene 1 (0-3.9s) - Cold open
Question card lowered, rises to rest at 3.9s (end of "one more problem."). Serial badge mirrors the rise.
Continuity: first frame of the video.

### Scene 2 (4.20-38.86s) - Phase 1 illustration build
Isometric cube (fixed 30deg shear, edge = 4cm -> 140px drawn, scale 35px/cm) draws in three faces in sequence (4.20/4.55/4.85). "Edge = 4 cm" chip pops at 7.68 as the value is spoken. "Find: Volume" role chip pops at 9.04; a grey "Volume = ?" chip pops inside the front face at 10.16 - grey because it is not yet known. Concept-explanation beats (11-24s) pulse the chip and breathe the front-face fill wash to visualise "space inside the box". At 25-28s the whole cube pulses once (stroke) as the narrator asserts "all edges are exactly the same", then at 28.58 all three edge strokes pulse together. From 33.4-38.3, the three double-headed arrows (length/breadth/height, all solid blue - they are GIVEN, not derived) and their "= 4 cm" chips pop in one at a time, each edge measuring the same 140px = the same true 4cm.
Continuity: cube stays fully built and visible into Scene 3.

### Scene 3 (38.86-41.0s) - Pin + Given
PIN_TIME 38.90: apt.pinFlow glides the question card and the cube into their pinned slot (real cube - same viewBox/geometry, just smaller). "Edge = 4 cm" general chip fades out (redundant now that all 3 edges carry their own label). GIVEN_TIME 39.90: Given card pops center, "Edge = 4 cm (all sides equal)" line-reveals. Morphs into the left stack at 41.0.
Continuity: the pinned cube is a coordinate-exact shrink of the Scene 2 cube, arrows/labels already resolved and static.

### Scene 4 (41.3-60.0s) - Step 1: the formula
Step 1 card opens at 41.3, growing term by term: "Volume = Side x Side x Side" (41.46-44.58), the "= Side^3" shorthand (45.32), then substitution "= 4 x 4 x 4" (51.48-52.86), then the computation "= 16 x 4 = 64 cm^3" (53.62-58.92). The moment "64" lands (58.46s) the pinned cube's grey "Volume = ?" chip fades and a green "Volume = 64 cm^3" chip pops in its place (LINK: card answer and figure resolve on the same frame). Step 1 morphs into the stack at 60.0.
Continuity: the pinned cube, resolved green, remains on screen through the confirmation beats.

### Scene 5 (59.54-65.66s) - Confirmation
Narrator restates "the cube can hold 64 cubic centimeter of space" - the resolved green Volume chip pulses twice to confirm.

### Scene 6 (65.0-70.54s) - Options reveal
RECENTER_TIME 65.0 clears the illustration and shifts the pinned question to align with the options column. Options fade/stagger in at 65.66-66.0, a confirm pulse on the pinned Volume chip fills the gap at 67.68, and option C pulses green at 70.0 as the narrator says "option C."

### Scene 7 (71.14-72.54s) - Outro
Everything fades together 1.2s after narration ends; nothing after 72.54s.

## PART 3: Asset List Required
None external - isometric cube is hand-authored inline SVG (fixed 30deg shear, ry=rx*0.3 not applicable here since no cylinder/cone). No new colors/fonts/components.

## PART 4: Animation Complexity Notes
- Cube: 3-face isometric group (front rect, top path, side path), fixed 30deg shear, coordinates reused verbatim from illustration_reference.md 3.1's own worked example (edge=140px maps to true 4cm, scale 35px/cm).
- All three edges are GIVEN (not derived) -> solid blue arrows, no dashed/grey treatment on the length dimensions themselves.
- Only the Volume value is derived -> grey "?" chip until Step 1's computation lands, then resolves green - LINK pattern ties the figure's chip flip to the Step 1 card's answer span at the same timestamp (58.459s).
- Diagonal breadth arrow computed via unit vector (0.865,-0.5) along the true 30deg shear direction, perpendicular offset (0.5,0.865)*25 for label clearance - arithmetic in the HTML comment.

## PART 5: Master Timeline Overview
0.3 card enter -> 3.9 rise -> 4.2-38.3 illustration build (concept explanation + 3 edges) -> 38.9 PIN -> 39.9 Given -> 41.0 morph -> 41.3 Step1 (formula -> substitute -> compute) -> 58.46 volume resolves green -> 60.0 morph -> 65.0 recenter -> 65.66 options -> 70.0 correct pulse -> 71.14 fade -> 72.54 end.
