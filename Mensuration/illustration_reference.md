# Illustration Reference - Mensuration

Topic-level illustration constitution for `Mensuration/q1` .. `q40`.
Structural sibling of `Trigonometry/illustration_reference.md` and
`Blood relation/illustration_reference.md`: same canvas contract, same chip system, same
animation vocabulary. Only the FIGURE changes - a mensuration question draws a **shape
scaled to its true dimensions**, never a triangle and never a family tree.

Read alongside, not instead of:

- `Trigonometry/VIDEO_BUILD_PROMPT.md` - the master build prompt (timeline tail, clip
  `data-duration` arithmetic, 3-second law, pop-in law, equation elaboration, solution-card
  timing, final self-audit). All of it is topic-agnostic and still binding here.
- `_template/README.md` - pipeline steps (script -> voiceover -> transcript -> storyboard -> index.html)
- `_template/design.md` + `_template/design-system.css` - tokens, components, layout grid
- `Mensuration/penelty.txt` - accumulated per-topic fixes. **Mandatory read before
  storyboard AND before index.html.**

No angle arc, no family-tree grid. There IS a formula-elaboration equation row (section 7),
reused directly from the trigonometry constitution, because most mensuration answers are a
formula substituted with numbers.

---

## 0. What a question in this bank actually looks like

Every question is one of five fixed shapes. Identify which one first - it decides the whole
figure:

| Shape | What it asks | Bank examples |
|---|---|---|
| **A. Direct formula** | one shape, one known dimension, solve for another (area -> side, side -> area, slant+height -> CSA) | q1 (square area -> perimeter), q6 (cone slant+height -> CSA) |
| **B. Unit-conversion + formula** | dimensions given in mixed units (cm, hectares, mm), must convert before the formula applies | q2 (rain cm on hectares -> cu. m), q8 (wire diameter mm, volume cm3 -> length m) |
| **C. Percentage change** | one or more dimensions change by a stated %, find the % change in area/volume - draw the shape TWICE, original and scaled | q3 (rectangle +10%/+20% -> area +32%), q7 (square side +3% error -> area +6.09% error) |
| **D. Volume conservation / recast** | a fixed volume of material is reshaped from one solid into another - draw BOTH solids sharing one highlighted volume value | q8 (silver block -> wire), any "melted and recast" question |
| **E. Composite / displacement** | an object placed into a container changes a level - draw the container AND the displaced amount as a highlighted band | q5 (men in a tank -> water rise) |

A single question may combine B with A, or C with A - identify every category that applies
and satisfy every rule below for each.

---

## 1. Canvas contract (identical to Trigonometry / Blood relation)

| Thing | Full-size (Phase 1) | Pinned (Phase 2+) |
|---|---|---|
| `viewBox` | `0 0 580 500` | `0 0 580 500` (IDENTICAL) |
| rendered `width` x `height` | `1005` x `866` | `500` x `431` |
| scale factor (rendered / viewBox) | **1.733** | **0.862** |
| wrapper | `left:50%; top:230px; transform:translateX(-50%)` | `left:230px; top:50px; width:1400px; height:450px; display:flex; align-items:center; justify-content:center` |
| `overflow` | `visible` on the `<svg>` | `visible` on the `<svg>` |

- Pinned copy is an **exact coordinate copy**: same `viewBox`, same every internal number.
  Only outer `width`/`height` shrink, plus thinner strokes (section 5).
- Wrapper aspect ratio equals the viewBox aspect (580/500 = 1.16).
- **No `gsap.set(..., {scale, x, y})` hack** to fix a mis-sized pinned figure.

Category C (before/after) and category D (two solids) need two shapes on screen. Lay them
left/right inside the same `580 x 500`, never widen the canvas - see section 6.2.

---

## 2. Colour palette

Only design-system tokens.

| Hex | Token | Used for |
|---|---|---|
| `#6373db` | `--primary` | the shape's outline (the ORIGINAL / GIVEN shape), every dimension arrow + its label |
| `#000000` | `--text` | dimension value labels, formula text, unit-conversion callout text |
| `#4eb85f` | `--success` | the shape being SOLVED FOR (the AFTER shape in a % change, the second solid in a recast, the unknown dimension), and the confirm-pulse when a value resolves |
| `#e2e5ff` | `--primary-light` | soft fill wash on the ORIGINAL shape, always <= 0.4 opacity, revealed after its outline draws |
| `#FFFFFF` | `--bg` | shape fill base, chip background |
| `#949494` | `--topic` | a dimension that exists but is not yet known (unlabelled, greyed edge) before it is derived |

Semantics:

- **Blue = what the question gave you.** The starting shape, its stated dimensions.
- **Black = the arithmetic** - labels, formula terms, conversions.
- **Green = what the question asks for.** The unknown, the after-shape, the recast solid,
  the final numeric answer. The moment a value is derived it turns green.
- **Grey = a dimension that is real but not yet known** (e.g. the radius in q6, before the
  Pythagorean step derives it).

At most one shape on screen is green at a time as the "currently being solved" target.

---

## 3. Shape library (fixed set, never re-invented per question)

Every shape is drawn **to true scale** - side ratios, not "looks about right". Compute every
dimension from the given numbers, normalise to fit the drawing budget in section 6.1, and
write the scale factor in the geometry comment.

| Shape | Markup shell | Notes |
|---|---|---|
| **Square / rectangle** | `<rect x y width height fill="none" stroke="--primary">` | width:height ratio must equal the true ratio, never square-ish by default |
| **Circle** | `<circle cx cy r>` | - |
| **Cube** (isometric) | three visible faces via `<path>` (top rhombus, front rect, side parallelogram) | see 3.1 |
| **Cuboid / tank** (isometric) | same three-face technique, non-equal edges | see 3.1 |
| **Cylinder** | `<ellipse>` top + two vertical side lines + bottom arc `<path>` | see 3.2 |
| **Cone** | apex point + base `<ellipse>` + two slant lines | see 3.2 |
| **Wire (thin cylinder)** | same cylinder technique, exaggerated length:diameter so it reads, aspect noted as stylised in the comment | see 3.2 |

### 3.1 Isometric solid (cube / cuboid / tank)

Fixed projection, never re-derived per question: top face is a parallelogram sheared by a
constant **30deg**, depth edges drawn at that fixed angle so every solid in the bank looks
like it belongs to the same system.

```
ISO PROJECTION CONSTANTS (fixed for every cube/cuboid in this bank):
  depth-dx = depth * cos(30deg) = depth * 0.866
  depth-dy = depth * sin(30deg) * -1 = depth * -0.5   (up-and-right for the top/back edges)
```

```html
<!-- cube, edge=140px drawn (scale noted in comment). front-bottom-left FBL=(180,360) -->
<!-- FBR = FBL + (140,0) = (320,360)     depth-dx=140*0.866=121, depth-dy=140*-0.5=-70 -->
<!-- BBL = FBL + (121,-70) = (301,290)   BBR = FBR + (121,-70) = (441,290) -->
<!-- FTL = FBL + (0,-140) = (180,220)    FTR = (320,220) -->
<!-- BTL = FTL + (121,-70) = (301,150)   BTR = FTR + (121,-70) = (441,150) -->
<g id="cube-figure" opacity="0">
  <!-- front face -->
  <rect x="180" y="220" width="140" height="140" fill="#e2e5ff" fill-opacity="0.4" stroke="#6373db" stroke-width="4" />
  <!-- top face -->
  <path d="M 180,220 L 301,150 L 441,150 L 320,220 Z" fill="#f4f5ff" stroke="#6373db" stroke-width="4" />
  <!-- side face -->
  <path d="M 320,220 L 441,150 L 441,290 L 320,360 Z" fill="#dcdffc" stroke="#6373db" stroke-width="4" />
</g>
```

For a non-cube cuboid (the tank in q5), width, height, depth are three independent numbers -
scale all three by the same factor (section 6.1) so proportions stay true; only the fixed
30deg shear angle stays constant.

### 3.2 Cylinder / cone

```html
<!-- cylinder r=60, height=180. top ellipse rx=60 ry=18 (ry = rx*0.3, fixed squash ratio) -->
<g id="cylinder-figure" opacity="0">
  <path d="M 160,340 A 60,18 0 0 0 280,340 L 280,160 A 60,18 0 0 0 160,160 Z"
        fill="#e2e5ff" fill-opacity="0.4" stroke="#6373db" stroke-width="4" />
  <ellipse cx="220" cy="160" rx="60" ry="18" fill="#f4f5ff" stroke="#6373db" stroke-width="4" />
</g>
```

```html
<!-- cone r=90, height computed from slant/height given. apex=(290,110), base cy=350 -->
<g id="cone-figure" opacity="0">
  <path d="M 200,350 A 90,22 0 0 0 380,350 L 290,110 Z"
        fill="#e2e5ff" fill-opacity="0.4" stroke="#6373db" stroke-width="4" />
  <ellipse cx="290" cy="350" rx="90" ry="22" fill="#f4f5ff" stroke="#6373db" stroke-width="3" />
</g>
```

The ellipse squash ratio `ry = rx * 0.3` is fixed for every cylinder/cone in the bank -
never re-picked per question.

**Slant height** (cone questions like q6) is drawn as a labelled line from apex to base-rim,
its length the true scaled slant, with the right-angle marker at the foot showing where the
vertical height and radius meet it - this is the visual Pythagorean triple the solution
narrates.

---

## 4. Typography

| Element | Declared size | Effective full-size (x1.733) | Effective pinned (x0.862) |
|---|---|---|---|
| Dimension value label (`12 cm`, `50 m`) | `30` | 52.0px | 25.9px |
| Unit-conversion note (`1 ha = 10,000 m2`) | `24` | 41.6px | 20.7px -> use a chip when pinned |
| `.fig-chip` (value chip) | `24px` | 41.6px | - |
| `.fig-chip.role` (`Given`, `Find`) | `22px` | 38.1px | - |
| `.fig-chip-pinned` (and `.role` variant) | `32px` | - | 27.6px |
| formula row (`Area = s^2`) | `40` | 69.3px | n/a (formula row lives outside the pinned figure) |

Floors: **>= 22px effective full-size, >= 21px effective pinned.** Bare `<text>` unit-note
at 24 (20.7px pinned) falls under the floor - convert it to a chip before it survives into
Phase 2.

`text-anchor`:

- dimension label on a horizontal edge: `middle`, `y = edge_y - 12` (above) or `+22` (below, pick whichever side has clearance)
- dimension label on a vertical edge: `end`, `x = edge_x - 12` (left) or `start`, `x = edge_x + 12` (right)
- label on a slant edge: place at the edge midpoint, offset 14px perpendicular to the edge direction

### Chip CSS (paste into the question's `<style>` block)

Byte-identical to the other two topics - keep all three the same product:

```css
.fig-chip {
  display: inline-block;
  background: #FFFFFF;
  border: 2px solid var(--primary);
  color: var(--primary);
  padding: 4px 12px;
  border-radius: 8px;
  font-family: var(--font);
  font-weight: 400;
  font-size: 24px;
  line-height: 1.2;
  white-space: nowrap;
}
.fig-chip.role { border-color: #000000; color: #000000; font-size: 22px; }
.fig-chip.done { border-color: var(--success); color: var(--success); }

.fig-chip-pinned {
  display: inline-block;
  background: #FFFFFF;
  border: 2px solid var(--primary);
  color: var(--primary);
  padding: 3px 9px;
  border-radius: 6px;
  font-family: var(--font);
  font-weight: 400;
  font-size: 32px;
  line-height: 1.2;
  white-space: nowrap;
}
.fig-chip-pinned.role { border-color: #000000; color: #000000; }
```

Chips placed with `<foreignObject ... style="overflow:visible;opacity:0;">` wrapping a
`<div xmlns="http://www.w3.org/1999/xhtml" class="fig-chip">`, so they scale and move with
the figure through `pinFlow`.

---

## 5. Stroke weights

| Element | Full-size | Pinned |
|---|---|---|
| shape outline (original / given) | `4` | `3.5` |
| shape outline (after / solved-for, green) | `4` | `3.5` |
| dimension arrow | `3` | `2.5` |
| slant / diagonal measurement line | `3.5` | `3` |
| right-angle marker (cone slant question) | `3` | (omitted pinned) |
| displaced-volume band outline (q5-style) | `3` dashed | `2.5` dashed |
| unit-conversion bracket | `2.5` | `2` |

`stroke-linecap="round"` everywhere. Dash patterns: `6 6` full-size, `5 5` pinned. Only
**not-yet-known** dimensions and **displacement bands** are ever dashed - a fully known,
drawn shape outline is always solid.

---

## 6. Geometry contract

### 6.1 Scale-to-fit, always computed

Every shape's screen size is the true dimension times one scale factor, chosen so the
longest true dimension fills a fixed drawing budget. Write this arithmetic in the comment
before drawing anything:

```
DRAWING BUDGET: longest dimension maps to 260px on screen (leaves room for labels + margin)
TRUE DIMENSIONS: square side = 12 cm (derived: sqrt(144))
SCALE FACTOR:    260 / 12 = 21.67 px per cm
DRAWN SIZE:      side = 12 * 21.67 = 260px
VIEWBOX:         shape spans x[160..420] y[130..390], + labels -> "0 0 580 500"
```

If two shapes share the figure (category C or D), **both use the SAME scale factor**,
derived from whichever shape has the larger true dimension - this is what makes "the area
grew 32%" visually true rather than asserted. Never scale the two shapes independently to
each look a similar size on screen; that is the single most common way this topic lies to
the viewer.

### 6.2 Two-shape layouts (category C and D)

Two fixed layouts, pick one:

| Layout | When | Left shape | Right shape |
|---|---|---|---|
| **Side-by-side, shared baseline** | both shapes are the same family (rect -> bigger rect) | ORIGINAL, blue, at rest | AFTER, green outline, same baseline y so height growth is visible as height, not vertical drift |
| **Split canvas, arrow between** | recast (solid A -> different solid B) | shape A (block), blue | a `->` `melt/recast` arrow, then shape B (wire/cylinder), green, with the shared volume value as a chip that travels from A to B |

Category C (percentage change): draw the ORIGINAL fully, THEN grow the AFTER shape's edges
outward from the same anchored corner (`attr: {width, height}` tween from original to scaled
value) rather than fading in a separately-drawn bigger rectangle - this literally shows the
10%/20% growth happening, not two static rectangles.

Category D (recast): the shared volume number is a single chip that visually travels
(`gsap` x/y tween of the `foreignObject`) from shape A to shape B at the moment the
narration says "the same volume of metal" - this is the topic's version of the LINK pattern.

### 6.3 Dimension arrow placement

Reuse the trigonometry double-headed arrow component (section 7.1 below) exactly. Every
given number in the question statement gets one arrow + one chip, positioned outside the
shape's silhouette, never overlapping an edge.

### 6.4 Right-angle marker (cone / Pythagorean questions only)

Same rule as trigonometry: derived from the two real ray directions at the corner (vertical
height meets the base radius), inset a fixed amount, never hand-guessed.

---

## 7. Component recipes

### 7.1 Double-headed measurement arrow (identical component, reused verbatim)

```html
<!-- vertical, head half-width 13, head length 18 -->
<g id="arrow-side" opacity="0">
  <line x1="130" y1="360" x2="130" y2="220" stroke="#000000" stroke-width="3" stroke-linecap="round" />
  <path d="M 117,238 L 130,220 L 143,238 Z" fill="#000000" />
  <path d="M 117,342 L 130,360 L 143,342 Z" fill="#000000" />
</g>
```

### 7.2 Unit-conversion callout

For category B questions, a small side panel that performs the conversion visually before
the main formula uses it - never skip straight to the converted number.

```html
<foreignObject id="conv-note" x="30" y="40" width="260" height="60" style="overflow:visible;opacity:0;">
  <div xmlns="http://www.w3.org/1999/xhtml" class="fig-chip role">1 hectare = 10,000 m2</div>
</foreignObject>
```

```js
apt.fadeIn(tl, "#conv-note", 9.80);
apt.emphasize(tl, "#conv-note", 12.10);   // narrator restates the converted value
```

One callout per unit that needs converting. Two different units in one question (q8: mm
diameter AND cm3 volume) get two callouts, revealed in the order the narration converts them.

### 7.3 Percentage-change grow (category C)

```html
<!-- original rect: x=180 y=220 w=180 h=140 (L x B, scale noted above) -->
<rect id="rect-original" x="180" y="220" width="180" height="140"
      fill="#e2e5ff" fill-opacity="0.4" stroke="#6373db" stroke-width="4" opacity="0" />
<!-- after rect: SAME anchor corner (180,360 bottom-left), grows up+right to 1.10L x 1.20B -->
<rect id="rect-after" x="180" y="220" width="180" height="140"
      fill="none" stroke="#4eb85f" stroke-width="4" opacity="0" />
```

```js
apt.fadeIn(tl, "#rect-original", 6.20);
tl.to("#rect-after", { opacity: 1, duration: 0.2 }, 18.40);
tl.to("#rect-after", { attr: { width: 198, height: 168, x: 180, y: 192 },
                       duration: 0.8, ease: "power2.out" }, 18.60);   // 180*1.10, 140*1.20
```

Anchor the growth at the ORIGINAL shape's bottom-left corner (or whichever corner the
question's framing implies) so growth reads as "this edge got longer", not as the shape
sliding.

### 7.4 Volume-conservation travelling chip (category D)

```html
<foreignObject id="chip-volume" x="230" y="240" width="120" height="40" style="overflow:visible;opacity:0;">
  <div xmlns="http://www.w3.org/1999/xhtml" class="fig-chip done">88 cm3</div>
</foreignObject>
```

```js
apt.fadeIn(tl, "#chip-volume", 8.40);                         // stated on shape A
tl.to("#chip-volume", { x: 420, duration: 0.9, ease: "power2.inOut" }, 14.20); // travels to shape B
apt.emphasize(tl, "#chip-volume", 15.20);                     // lands, confirms "same volume"
```

### 7.5 Displacement band (category E)

A dashed horizontal band inside the tank/container showing the volume that entered.

```html
<!-- tank front face y 220..360; water rise band: bottom 360, top computed from rise -->
<rect id="displace-band" x="180" y="340" width="140" height="20"
      fill="#4eb85f" fill-opacity="0.25" stroke="#4eb85f" stroke-width="3" stroke-dasharray="6 6" opacity="0" />
```

```js
apt.fadeIn(tl, "#displace-band", 24.60);
tl.to("#displace-band", { attr: { y: 340, height: 20 }, duration: 0.6, ease: "power2.out" }, 24.60);
```

Band height on screen is the *scaled* rise (same scale factor as the tank), never a stylised
"looks like a thin sliver" - if the true rise is small (0.2 m against a tank drawn ~140px
tall), the band is genuinely thin; do not exaggerate it, since the smallness IS the answer.

---

## 8. Which labels are static vs animated

Full-size figure: shape outline, dimension arrows/labels, and callouts start at `opacity:0`
and reveal on their own narration timestamp, in the order the question STATES them (which is
usually the order the formula NEEDS them - if it is not, prefer statement order; the formula
row in section 9 handles reordering).

Pinned copy: the original shape and its given dimensions are **static and always visible**
(no `opacity:0`) - the pinned figure only appears after the statement has been read. The
AFTER shape / travelling chip / displacement band still animate on their own solution-step
timestamps, since those happen during Phase 2 narration.

---

## 9. Formula elaboration (reused from the trigonometry constitution verbatim)

Do not fade a finished formula in. Grow it term by term, fixed row, nothing reflows:

```html
<div id="eq-row" style="position:absolute;left:0;right:0;top:0;text-align:center;
     font-family:var(--font);font-size:40px;white-space:nowrap;">
  <span id="eq-caption-find" style="opacity:0;">Area</span>
  <span id="eq-eq1"          style="opacity:0;"> = </span>
  <span id="eq-term1"        style="opacity:0;">s<sup>2</sup></span>
  <span id="eq-eq2"          style="opacity:0;"> = </span>
  <span id="eq-term2"        style="opacity:0;" class="hi">144</span>
</div>
```

```js
apt.fadeIn(tl, "#eq-caption-find", 8.10);
apt.fadeIn(tl, "#eq-term1",        10.40);
apt.fadeIn(tl, "#eq-term2",        13.20);
// LINK: the substituted number pulses together with the figure's dimension chip
apt.emphasize(tl, "#eq-term2", 13.20);
tl.to("#chip-area", { stroke: "#4eb85f", duration: 0.3, yoyo: true, repeat: 1 }, 13.20);
```

Rules:
- Reserve full final width up front (`white-space:nowrap`).
- One term per narration beat.
- **Use `.frac` for every division** (rise = volume / area, radius from `sqrt` fractions
  under a root are fine as-is, but any `a/b` is `.frac`). A bare `÷` is banned.
- `sqrt` is written as `<span class="sqrt">...</span>` or literal `&radic;` glyph, per
  `design.md` - check that file for the exact sanctioned markup before inventing one.
- When a number lands in the equation from the figure, fire the LINK pattern (7.1-7.5 chips
  pulse with their matching equation term).

---

## 10. Animation build order

One beat per narration phrase, timestamps from `transcript.json`. Canonical Phase 1 shape,
q1 (`Area of a square is 144 cm2. Find its perimeter.`):

```js
tl.fromTo("#square-figure", { scale: 0.85, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.4)" }, 5.40);
apt.fadeIn(tl, "#chip-area-given", 6.80);           // "area is 144 cm^2" -> chip inside the square
apt.fadeIn(tl, "#eq-caption-find", 9.10);           // "find its perimeter"
apt.fadeIn(tl, "#eq-term-area-eq", 11.30);          // Area = s^2
apt.fadeIn(tl, "#eq-term-144",     13.00);          // = 144
tl.to("#eq-term-s", { opacity: 1, duration: 0.35 }, 15.60);   // s = sqrt(144)
apt.emphasize(tl, "#eq-term-s", 16.90);             // = 12
tl.to("#square-figure rect", { stroke: "#4eb85f", duration: 0.3 }, 16.90);
apt.fadeIn(tl, "#arrow-side", 17.40);               // side arrow pops with the derived 12 cm
apt.fadeIn(tl, "#label-side", 17.70);
```

Ease and duration vocabulary (identical to the other two topics - invent nothing new):

| Motion | from -> to | duration | ease |
|---|---|---|---|
| shape entrance | `scale 0.85 -> 1`, `opacity 0 -> 1` | 0.5 | `back.out(1.4)` |
| shape outline draw-in (if using stroke-dash) | `strokeDashoffset: len -> 0` | 0.6-0.7 | `power2.out` |
| shape grow (category C after-shape) | `attr {width,height}` | 0.8 | `power2.out` |
| arrow / chip pop | `opacity 0, scale 0.7->1` or `y +/-6->0` | 0.35 | `back.out(1.6)` |
| travelling volume chip | `x` or `y` tween | 0.9 | `power2.inOut` |
| displacement band grow | `attr {y, height}` | 0.6 | `power2.out` |
| shape resolves to green | `stroke -> #4eb85f` | 0.3 | default |
| re-emphasis | `apt.emphasize` | 0.3 yoyo | - |

A dimension arrow and its label enter together when the narration states the value in one
breath; a DERIVED dimension (like the 12 cm side above) enters ~0.3-0.5s after the formula
resolves it, never before - the figure must not know the answer before the equation does.

---

## 11. Phase 1 is never just a card

Every question in this bank has a shape - a mensuration question with no drawn figure is
always a defect, even the ones that look "purely arithmetic" (q7's error-percentage question
still gets a square, drawn once at the true side then again at the erred side, category C).

The three legal Phase-1 heroes, in order of preference:

1. **The shape itself**, scaled and labelled, built as the statement is read.
2. **Two shapes** (category C / D), for any before/after or recast question.
3. Only if genuinely no shape exists (a pure ratio/percentage question with no geometric
   object at all - rare in this bank) - a growing equation as the hero, per section 9.

---

## 12. Pre-ship checklist

- [ ] category identified (A/B/C/D/E, possibly combined) and every rule for that category applied
- [ ] geometry comment written: drawing budget, true dimensions, scale factor, drawn size, viewBox
- [ ] shape drawn to TRUE ratio - never eyeballed
- [ ] two-shape questions use ONE shared scale factor for both shapes
- [ ] isometric solids use the fixed 30deg shear; cylinders/cones use the fixed `ry = rx*0.3` squash
- [ ] every dimension arrow + chip pairs a stated number with its true drawn length
- [ ] derived (not given) dimensions/shapes turn green only after the formula resolves them, never before
- [ ] unit-conversion callouts present for every mixed-unit question, revealed before the formula uses the converted value
- [ ] percentage-change shapes grow from an anchored corner via `attr` tween, not a fade-swap
- [ ] recast questions use the travelling volume chip between shape A and shape B
- [ ] displacement bands are scaled to the true rise, not stylised for visibility
- [ ] formula row follows section 9 exactly: fixed row, no reflow, one term per beat, `.frac` for every division
- [ ] `viewBox` covers all geometry, arrows, and label extents, plus 30-40px margin
- [ ] pinned copy is a coordinate-exact copy; only outer `width`/`height` and stroke widths differ
- [ ] pinned wrapper aspect ratio matches the viewBox aspect; no `gsap.set` scale hack
- [ ] effective font sizes recomputed: >= 22px full-size, >= 21px pinned
- [ ] every colour is a design-system token; green used only for the solved-for target
- [ ] no gap > 3s between illustration beats during Phase 1 narration
- [ ] `Mensuration/penelty.txt` read and every standing item applied

---

## 13. Correctness traps specific to this bank

1. **Area/volume answers must be back-derived to a linear dimension before drawing.** q1
   gives area 144 cm2 - the drawn square's side is `sqrt(144) = 12`, not "a square that
   looks like it might be 144 of something." Always solve for the linear scale-driving
   number first, even if the question never asks for it directly.
2. **Percentage changes on TWO different dimensions compound, they do not add.** q3: +10%
   length and +20% breadth give `1.10 * 1.20 = 1.32` -> +32% area, not +30%. The AFTER
   rectangle's drawn width and height must reflect 1.10x and 1.20x independently - drawing
   a uniformly-scaled 1.32x rectangle is a different (wrong) shape.
3. **Measurement error questions (q7) are a percentage-change question in disguise** - draw
   it exactly like category C, with the "after" square being the over/under-measured one,
   not a separate error concept requiring new visual language.
4. **Unit conversions happen before the formula, and the figure must show the converted
   value, not just the formula.** q2: hectares -> m2 and cm -> m are both real steps the
   viewer needs on screen (section 7.2) - do not silently plug 20,000 and 0.02 into the
   formula without ever having shown 2 ha = 20,000 m2 or 2 cm = 0.02 m.
5. **Displacement/rise questions (q5) draw the CONTAINER, not the objects displacing the
   liquid.** 50 men are a number in the formula, not 50 icons in the figure - draw the tank
   and the rise band; represent "50 men * 4 m3" as a formula term, not as 50 drawn people.
6. **Recast/wire questions (q8) conserve VOLUME, not any linear dimension.** The block and
   the wire do not share a scale factor for their length - only the volume number travels
   (7.4). Drawing the wire "the same size" as the block visually asserts a false equality.
7. **A cone's slant height is not its vertical height.** q6 - draw both as separate labelled
   lines (slant along the surface, height straight down the axis) meeting the radius at a
   right angle at the base centre; this right triangle IS the solution, so it must be
   visible, not just stated in the formula.
