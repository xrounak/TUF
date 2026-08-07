# Illustration Reference - Blood Relations

Topic-level illustration constitution for `Blood relation/q1` .. `q40`.
Structural sibling of `Trigonometry/illustration_reference.md`: same canvas contract, same
chip system, same animation vocabulary. Only the FIGURE changes - a blood-relation question
draws a **named family tree**, never a triangle, so every geometry rule below replaces the
triangle rules rather than sitting next to them.

Read alongside, not instead of:

- `Trigonometry/VIDEO_BUILD_PROMPT.md` - the master build prompt (timeline tail, clip
  `data-duration` arithmetic, 3-second law, pop-in law, equation elaboration, solution-card
  timing, final self-audit). All of it is topic-agnostic and still binding here.
- `_template/README.md` - pipeline steps (script -> voiceover -> transcript -> storyboard -> index.html)
- `_template/design.md` + `_template/design-system.css` - tokens, components, layout grid
- `Blood relation/penelty.txt` - accumulated per-topic fixes. **Mandatory read before
  storyboard AND before index.html.**

No angle arc, no `--angle` custom property, no `atan2` check in this topic.

---

## 0. What a question in this set actually looks like

Every question in this bank is the same shape. Design for it, not for a general genealogy
puzzle:

```
Amit is the father of Neha. Neha is the sister of Karan. How is Amit related to Karan?
Lata is the mother of Suman. Suman is the brother of Riya. How is Lata related to Riya?
Vikram is the brother of Pooja. Pooja is the daughter of Harish. How is Vikram related to Harish?
Anita is the wife of Rohit. Rohit is the father of Meera. How is Anita related to Meera?
Dev is the son of Kavita. Kavita is the sister of Manoj. How is Manoj related to Dev?
Nikhil is the father of Aarav. Aarav is the father of Isha. How is Nikhil related to Isha?
```

The invariants, all four of which drive the illustration:

1. **Exactly three named people.** Never more. A fourth node is a design error.
2. **Exactly two stated links**, given in two sentences. The middle person is in both.
3. **The question asks for the third, unstated link** - always between the two outer people.
4. **Real names, always. Never letters.** The node carries a name, not `A` / `P` / `X`.

So the figure is a **three-node graph with two solid edges and one gap** - and the gap is
the whole point of the video. The unstated link is drawn from the start as a dashed edge
with a `?`, and the entire solution is the act of making it solid.

Depth is at most 3 generations (`Nikhil -> Aarav -> Isha`) and width is at most 2 people in
a row. There is no case in this bank needing 4 columns.

---

## 1. Canvas contract (identical to Trigonometry)

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

Three nodes fit `580 x 500` comfortably at the pitches in section 6. Do not widen the
viewBox for a question in this bank - if it does not fit, the layout is wrong, not the canvas.

---

## 2. Colour palette

Only design-system tokens.

| Hex | Token | Used for |
|---|---|---|
| `#6373db` | `--primary` | every person node outline, every name label |
| `#000000` | `--text` | the two STATED edges and their relation chips |
| `#4eb85f` | `--success` | the two people the question asks about, the ANSWER edge once resolved, and confirm pulses |
| `#FFFFFF` | `--bg` | node fill, chip background |
| `#e2e5ff` | `--primary-light` | fill of the middle (pivot) person once narration names them as the link |
| `#949494` | `--topic` | the `?` on the unresolved answer edge, before it is solved |

Semantics:

- **Blue = people.** Every node outline and name.
- **Black = what the question told you.** The two given edges.
- **Green = what the question asks, and the answer.** The two endpoint nodes get green
  outlines when the question is posed; the answer edge turns green when it is proved.
- **Grey = the unknown**, and only the unknown - the `?` glyph and the dashed answer edge.

The colour story is therefore the whole video in one glance: two black facts, one grey gap,
and the gap turns green.

---

## 3. Node anatomy: shape + name

A node is **a gender shape with the person's name underneath it.** The name is never inside
the shape - names are 4-7 characters and would either overflow a 56px box or force a font
size below the legibility floor.

| Person | Shape | Markup |
|---|---|---|
| Male | **square**, `rx="6"`, 56x56 | `<rect x="cx-28" y="cy-28" width="56" height="56" rx="6">` |
| Female | **circle**, `r="28"` | `<circle cx cy r="28">` |
| Gender not stated | **square with `rx="14"`** | `<rect ... rx="14">` |

Both shapes occupy the same 56px box, so a square and a circle in the same row sit on the
same centre line with no optical size difference. This is standard genealogy notation - do
not swap it because a question reads better mirrored.

**Gender in this bank is always derivable, and must be derived.** Every question states it
through the relation words:

| Word in the statement | Gender it fixes |
|---|---|
| father, brother, son, husband | male -> square |
| mother, sister, daughter, wife | female -> circle |

Work out all three genders before drawing. In `Vikram is the brother of Pooja. Pooja is the
daughter of Harish.` - Vikram male (brother), Pooja female (daughter), Harish gender never
stated -> rounded-square unknown, and the answer ("son") does not depend on it. Drawing
Harish as a definite male is asserting something the question never gave.

Inside the shape goes **nothing** for a named person, and a grey `?` only for the person the
question asks about when the answer is a person rather than a relation (rare in this bank).

Name label:

```html
<text x="290" y="141" text-anchor="middle"
      font-family="Google Sans Flex, Inter, sans-serif" font-size="26" font-weight="500"
      fill="#6373db">Amit</text>
```

`y = node_cy + 46` always. Same offset for every node in the figure.

---

## 4. Typography

| Element | Declared size | Effective full-size (x1.733) | Effective pinned (x0.862) |
|---|---|---|---|
| Name label under a node | `26` | 45.1px | 22.4px |
| `.fig-chip` (relation chip: `father`, `sister`) | `24px` | 41.6px | - |
| `.fig-chip.role` (`?`, `Answer`) | `22px` | 38.1px | - |
| `.fig-chip-pinned` (and `.role` variant) | `32px` | - | 27.6px |
| `?` glyph on the answer edge | `34` | 58.9px | 29.3px |

Floors from `design.md`: **>= 22px effective in Phase 1, >= 21px effective when pinned.**
Name labels at `26` give 22.4px pinned - that is the reason for 26 and not 24. Do not drop
it. Every relation label is a **chip**, never bare `<text>`, because bare text at chip sizes
falls under the pinned floor.

`text-anchor`:

- name under a node: `middle`, at `(cx, cy + 46)`
- chip on a vertical edge: to the **right** of the edge, `x = edge_x + 14`
- chip on a horizontal edge: **above** it, centred, `y = edge_y - 40`

### Chip CSS (paste into the question's `<style>` block)

Byte-identical to the trigonometry rule - keep the two topics the same product:

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

Relation chips carry the **exact word the statement used**, lower-case: `father`, `sister`,
`daughter`, `wife`, `son`, `brother`, `mother`, `husband`. Never a paraphrase, never a
symbol. The chip and the narration say the same word at the same moment.

Chips are placed with `<foreignObject ... style="overflow:visible;opacity:0;">` wrapping a
`<div xmlns="http://www.w3.org/1999/xhtml" class="fig-chip">`, so they scale and move with
the figure through `pinFlow`.

---

## 5. Stroke weights

| Element | Full-size | Pinned |
|---|---|---|
| person node outline | `5` | `4` |
| stated descent edge (parent -> child) | `3.5` | `3` |
| stated marriage edge (horizontal double line) | `3` each line | `2.5` each |
| sibling bar + drop stubs | `3.5` / `3` | `3` / `2.5` |
| answer edge, unresolved (dashed grey) | `3.5` | `3` |
| answer edge, resolved (solid green) | `4` | `3.5` |
| endpoint highlight ring | `4` | `3.5` |

`stroke-linecap="round"` everywhere. **Only the answer edge is ever dashed** (`8 8`
full-size, `6 6` pinned). A dashed stated edge would lie about what the question gave you.

---

## 6. Geometry contract

Three nodes on a fixed grid. Write this comment block above every figure, filled in with
real numbers, before drawing anything. This is q1 (`Amit -> Neha -> Karan`) worked out:

```
STATEMENT: Amit is the father of Neha. Neha is the sister of Karan.  ASK: Amit -> Karan.
GENDERS:   Amit male (father) -> square. Neha female (sister) -> circle.
           Karan not stated -> rounded-square unknown. Answer "father" does not depend on it.
SHAPE:     parent over a sibling pair -> 2 rows, 2 columns.

GENERATION ROWS (y of node CENTRE, top to bottom):
  G1 = 150   Amit
  G2 = 340   Neha, Karan
  ROW PITCH = 190  (constant; >= 56 node + 46 name offset + 60 clearance)

COLUMN SLOTS (x of node CENTRE, left to right):
  C1 = 195   C2 = 385
  COLUMN PITCH = 190  (constant; >= widest name at 26px + 60 clearance)

NODES (defined once, reused literally everywhere):
  AMIT  = (290,150) square rx=6   name y=196   STATED-EDGE endpoint, ASK endpoint (green)
  NEHA  = (195,340) circle r=28   name y=386   pivot (the person in both sentences)
  KARAN = (385,340) square rx=14  name y=386   ASK endpoint (green)
EDGES:
  AMIT -> NEHA   descent, STATED "father"
                 from (290,178) down to bar y=255, along to x=195, down to (195,312)
                 len = 77 + 95 + 57 = 229
  NEHA = KARAN   sibling bar, STATED "sister"
                 the same bar y=255 already spans 195..385; stub down to (385,312) len = 57
  AMIT -> KARAN  ANSWER edge, dashed grey, drawn last
                 (338,178) -> (385,300) as a square-cornered path, len = 47 + 122 = 169
SPAN CHECK:  x 195-28=167 .. 385+28=413, widest name "Karan" ~78 wide -> 156..424, fits 0..580
DEPTH CHECK: y 150-28=122 .. 340+28=368, name baseline 386, descender ~396 -> fits 0..500
VIEWBOX:     "0 0 580 500"
```

Rules encoded there:

1. **One constant row pitch, one constant column pitch** for the whole figure.
2. **Generation = y, always.** Siblings and spouses share a `y` exactly. A cousin drawn 12px
   higher asserts a generation gap that does not exist.
3. **Marriage edges are horizontal.** Both nodes on the same row.
4. **Descent edges are vertical, or vertical-horizontal-vertical with square corners.** No
   diagonals, no curves.
5. **Edges attach to the node EDGE, not the centre** - `cy +/- 28`. Arithmetic in the comment.
6. **The pivot is centred, the two asked-about people flank it.** The unstated answer edge
   must be the longest, most visible line on the canvas - it is what the video is about.
7. **The answer edge must not pass through or touch a node.** Route it around the outside
   with a square corner. Check clearance >= 20px from any node box.
8. **viewBox from the real bounding box** - node centres +/- 28, name text extents, chip
   extents - plus 30-40px margin. Names extend further sideways than the nodes do.
9. **No edge may cross another edge.** With three nodes there is always an ordering with no
   crossings; if yours crosses, swap the two column slots.

### The three layouts that cover this entire bank

Every question here is one of these. Pick one, do not invent a fourth.

| Statement shape | Layout | Bank examples |
|---|---|---|
| **parent + sibling pair** - one person above, two siblings below joined by a bar | 2 rows, 2 cols | q1, q2, q3, q5, q8 |
| **couple + child** - two spouses on the top row, child centred below | 2 rows, 2 cols | q4, q6 |
| **three-generation chain** - one node per row, straight vertical spine | 3 rows, 1 col | q7 |

Three-generation chain rows: `G1 = 105, G2 = 275, G3 = 445` is too deep for the name under
G3. Use `G1 = 95, G2 = 250, G3 = 405` (pitch 155), name baselines 141 / 296 / 451.

### The stylised-spacing rule

You may stretch **column pitch** to open room for a long name or chip - horizontal distance
carries no meaning in a family tree. You may **never** stretch row pitch for one branch
only - vertical distance IS the generation claim. State which pitch you stretched, and why,
in the geometry comment.

---

## 7. Component recipes

### 7.1 Person node (shape + name)

```html
<!-- AMIT = (290,150) male, name baseline y = 150+46 = 196 -->
<g id="node-amit" opacity="0">
  <rect x="262" y="122" width="56" height="56" rx="6"
        fill="#FFFFFF" stroke="#6373db" stroke-width="5" />
  <text x="290" y="196" text-anchor="middle"
        font-family="Google Sans Flex, Inter, sans-serif" font-size="26" font-weight="500"
        fill="#6373db">Amit</text>
</g>
```

```html
<!-- NEHA = (195,340) female, name baseline y = 386 -->
<g id="node-neha" opacity="0">
  <circle cx="195" cy="340" r="28" fill="#FFFFFF" stroke="#6373db" stroke-width="5" />
  <text x="195" y="386" text-anchor="middle"
        font-family="Google Sans Flex, Inter, sans-serif" font-size="26" font-weight="500"
        fill="#6373db">Neha</text>
</g>
```

Node id is `#node-<lowercase-first-name>`. It makes every timeline line self-documenting
against the transcript, which speaks the same names.

### 7.2 Stated descent edge

One `<path>`, square corners, drawn in as a single stroke.

```html
<!-- AMIT(290,178) -> bar y=255 -> NEHA(195,312).  len = 77 + 95 + 57 = 229 -->
<path id="edge-amit-neha" d="M 290 178 L 290 255 L 195 255 L 195 312"
      fill="none" stroke="#000000" stroke-width="3.5" stroke-linecap="round"
      stroke-dasharray="229" stroke-dashoffset="229" />
```

`stroke-dasharray` equals the **true total path length**, every segment summed, arithmetic in
a trailing comment.

### 7.3 Sibling bar

The horizontal spine at the mid-row, with a short stub down to each sibling. Single line,
stroke-width `3.5` - the single line is what distinguishes it from a marriage edge.

```html
<!-- sibling bar y=255 spanning NEHA(195) .. KARAN(385); stub to KARAN len=57 -->
<path id="edge-neha-karan" d="M 195 255 L 385 255 L 385 312"
      fill="none" stroke="#000000" stroke-width="3.5" stroke-linecap="round"
      stroke-dasharray="247" stroke-dashoffset="247" />
```

### 7.4 Marriage edge (the `=` of genealogy)

```html
<!-- Anita(195,150) = Rohit(385,150); spans node edges x 223 -> 357 -->
<g id="edge-anita-rohit" opacity="0">
  <line x1="223" y1="145" x2="357" y2="145" stroke="#000000" stroke-width="3" stroke-linecap="round" />
  <line x1="223" y1="155" x2="357" y2="155" stroke="#000000" stroke-width="3" stroke-linecap="round" />
</g>
```

The 10px gap is fixed. It is the only thing distinguishing a marriage edge from a sibling bar
at a glance. **In-law links are marriage edges** - drawing one as a descent edge asserts a
blood relation that does not exist.

### 7.5 The answer edge (this topic's hero element)

Present from early in Phase 1, dashed and grey with a `?`, routed clear of every node.

```html
<!-- ANSWER AMIT(338,150) -> KARAN(385,300), around the outside. len = 47 + 122 = 169 -->
<g id="edge-answer" opacity="0">
  <path id="edge-answer-line" d="M 338 150 L 460 150 L 460 340 L 413 340"
        fill="none" stroke="#949494" stroke-width="3.5" stroke-linecap="round"
        stroke-dasharray="8 8" />
  <text id="edge-answer-q" x="460" y="255" text-anchor="middle"
        font-family="Google Sans Flex, Inter, sans-serif" font-size="34" fill="#949494">?</text>
</g>
```

Resolving it, on the narration beat that states the answer:

```js
tl.to("#edge-answer-line", { attr: { "stroke-dasharray": "0" }, stroke: "#4eb85f",
                             strokeWidth: 4, duration: 0.5, ease: "power2.out" }, 34.20);
tl.to("#edge-answer-q", { opacity: 0, duration: 0.25 }, 34.20);
apt.fadeIn(tl, "#chip-answer", 34.45);      // .fig-chip.done, the answer word
apt.emphasize(tl, "#chip-answer", 35.60);
```

Dashed-to-solid plus grey-to-green, in one 0.5s tween, is the visual punchline of every
video in this topic. Do not fade a finished green line in instead.

### 7.6 Endpoint highlight

The two people the question asks about get green outlines when the question is posed. Never a
different shape - shape is reserved for gender.

```js
tl.to("#node-amit rect",  { stroke: "#4eb85f", duration: 0.3 }, 14.10);
tl.to("#node-karan rect", { stroke: "#4eb85f", duration: 0.3 }, 14.35);
```

### 7.7 Pivot highlight

The middle person - in both sentences - gets a `--primary-light` fill the moment narration
identifies them as the link ("Neha and Karan are siblings, and Amit is Neha's father").

```js
tl.to("#node-neha circle", { fill: "#e2e5ff", duration: 0.4 }, 26.80);
```

---

## 8. Which elements are static vs animated

Full-size figure: every node, edge, name, and chip starts at `opacity:0` and is revealed on
its own narration timestamp. **The tree is built person by person, in the order the sentences
name them.** That build order is this topic's equivalent of stroke-draw order, and it is what
makes the figure feel like reasoning rather than decoration.

Pinned copy: all three nodes, both stated edges, and all names are **static and always
visible** (no `opacity:0`) - the pinned figure only appears after the whole statement has
been read. The answer edge is present, dashed and grey, and still unresolved. Only the
relation chips, the pivot fill, and the green resolution start hidden.

---

## 9. Animation build order

One beat per narration phrase, every timestamp from `transcript.json`. The canonical Phase 1
for this bank, on q1:

```js
// "Amit is the father of Neha."
tl.fromTo("#node-amit", { scale: 0.6, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.6)" }, 5.78);
tl.fromTo("#node-neha", { scale: 0.6, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.6)" }, 7.10);
tl.to("#edge-amit-neha", { strokeDashoffset: 0, duration: 0.6, ease: "power2.out" }, 7.50);
apt.fadeIn(tl, "#chip-father", 7.90);            // chip word == spoken word
// "Neha is the sister of Karan."
tl.fromTo("#node-karan", { scale: 0.6, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.6)" }, 9.60);
tl.to("#edge-neha-karan", { strokeDashoffset: 0, duration: 0.6, ease: "power2.out" }, 10.05);
apt.fadeIn(tl, "#chip-sister", 10.45);
// "How is Amit related to Karan?"  -> endpoints go green, the gap appears
tl.to("#node-amit rect",  { stroke: "#4eb85f", duration: 0.3 }, 12.30);
tl.to("#node-karan rect", { stroke: "#4eb85f", duration: 0.3 }, 12.55);
apt.fadeIn(tl, "#edge-answer", 13.10);
apt.emphasize(tl, "#edge-answer-q", 14.40);
```

Ease and duration vocabulary (same as trigonometry - invent nothing new):

| Motion | from -> to | duration | ease |
|---|---|---|---|
| node entrance | `scale 0.6 -> 1`, `opacity 0 -> 1` | 0.4 | `back.out(1.6)` |
| edge draw-in | `strokeDashoffset: len -> 0` | 0.6 to 0.7 | `power2.out` |
| marriage edge (short) | `opacity 0 -> 1`, `scaleX 0.6 -> 1` | 0.35 | `back.out(1.6)` |
| chip pop | `opacity 0, y +/-6 -> 0` | 0.35 | `back.out(1.6)` |
| endpoint / pivot highlight | `stroke` or `fill` recolour | 0.3 to 0.4 | default |
| answer edge resolve | dashed -> solid + grey -> green | 0.5 | `power2.out` |
| re-emphasis | `apt.emphasize` | 0.3 yoyo | - |

A node and its incoming edge enter ~0.4s apart - person first, then the link that places
them. That offset is what reads as "and this person connects *here*".

### The CHAIN-WALK pattern (this topic's LINK pattern)

Two stated facts, one conclusion. When the solution card states each fact, pulse the matching
edge in the figure on the same frame:

```js
apt.emphasize(tl, "#eq-fact-1", 27.40);
tl.to("#edge-neha-karan", { stroke: "#4eb85f", strokeWidth: 5, duration: 0.3, yoyo: true, repeat: 1 }, 27.40);
apt.emphasize(tl, "#eq-fact-2", 30.10);
tl.to("#edge-amit-neha", { stroke: "#4eb85f", strokeWidth: 5, duration: 0.3, yoyo: true, repeat: 1 }, 30.10);
// then the conclusion beat resolves the answer edge (7.5)
```

The figure and the solution card must walk the chain in the **same order** the solution text
does. In q1 the card says "Neha and Karan are siblings" first, so the sibling bar pulses
first - even though it was drawn second.

---

## 10. Phase 1 is never just a card

There is no physical scene here, but there is always a graph, so the master prompt's
"pure algebra" escape hatch does not apply. **Every question in this topic owes a tree.**
A Phase 1 that is only `#q-full-card` + `#serial-num` is a defect.

The two-sentence statement gives roughly 8-10s of narration, and the build in section 9 fills
it with 9 beats. If your Phase 1 has fewer than 8 timed events, you skipped chips or the
answer edge.

---

## 11. Pre-ship checklist

- [ ] statement / genders / layout / rows / columns / nodes / edges comment block written, with SPAN, DEPTH, VIEWBOX checks
- [ ] exactly three named nodes; real names, never letters; no fourth node
- [ ] every gender derived from a relation word in the statement, and stated in the comment; unstated gender -> rounded-square, and the answer does not depend on it
- [ ] one of the three sanctioned layouts (parent+siblings / couple+child / 3-gen chain)
- [ ] one constant row pitch and one constant column pitch; same-generation people share `y` exactly
- [ ] marriage edges horizontal double-lined; descent edges vertical or square-cornered; no diagonals, no curves
- [ ] answer edge is the only dashed edge, is grey with a `?`, clears every node by >= 20px, and resolves dashed-to-solid green in one tween
- [ ] no two edges cross
- [ ] every edge terminates at a node edge (`cy +/- 28`), arithmetic in a comment
- [ ] every `stroke-dasharray` equals that path's true total length, segments summed in a trailing comment
- [ ] name labels at font-size 26, baseline `cy + 46`, same offset on every node
- [ ] every relation chip carries the exact lower-case word the statement used
- [ ] endpoints green when the question is posed; pivot filled `--primary-light` when named as the link
- [ ] tree built in statement order, one person per narration beat; >= 8 Phase-1 events
- [ ] CHAIN-WALK fires for each fact in the solution card, in the card's order
- [ ] `viewBox` covers nodes, name extents, chip extents plus 30-40px margin
- [ ] pinned copy is a coordinate-exact copy; only outer `width`/`height` and stroke widths differ
- [ ] pinned wrapper aspect matches the viewBox aspect; no `gsap.set` scale hack
- [ ] effective font sizes recomputed: >= 22px full-size, >= 21px pinned; no bare `<text>` relation labels
- [ ] every colour is a design-system token
- [ ] no gap > 3s between illustration beats during Phase 1 narration
- [ ] `Blood relation/penelty.txt` read and every standing item applied

---

## 12. Correctness traps specific to this bank

Content bugs, not rendering bugs - these make a video wrong rather than ugly.

1. **"Brother of" and "sister of" are sibling bars, not descent edges.** `Neha is the sister
   of Karan` puts them on the SAME row under a shared bar. Drawing Karan below Neha would
   claim Neha is Karan's parent.
2. **A sibling link is symmetric; a parent link is not.** `Vikram is the brother of Pooja`
   also makes Pooja Vikram's sibling. `Amit is the father of Neha` does not make Neha
   anything of Amit except his child. The figure encodes direction with the edge shape, so
   getting the shape right IS getting the logic right.
3. **Read the second sentence's direction carefully.** `Pooja is the daughter of Harish`
   makes Harish the PARENT, so Harish is on the row ABOVE, even though he is named second.
   Statement order is not top-to-bottom order.
4. **Maternal vs paternal is the answer in some questions** (`Dev is the son of Kavita.
   Kavita is the sister of Manoj.` -> Manoj is Dev's *maternal* uncle, because the link runs
   through Dev's mother). The figure must make the mother's-side path unmistakable: the
   sibling bar sits above the mother, and the pivot fill goes on Kavita.
5. **Answer gender follows the answering person, not the pivot.** `Anita is the wife of
   Rohit. Rohit is the father of Meera.` -> Anita is female, so "mother", not "father".
   Check the answer word against the answering node's shape before shipping.
6. **A spouse is not a blood relation, but still yields one.** In q4 and q6 the answer
   ("mother") comes through a marriage edge. Draw the marriage edge as a double line; do not
   quietly convert it to a descent edge to make the chain look uniform.
7. **Three generations means grandfather / grandmother, and the middle person is skipped in
   the answer.** In q7 the answer edge runs `Nikhil -> Isha` past Aarav; route it clear of
   Aarav's node by >= 20px, or the figure reads as if it runs through him.
