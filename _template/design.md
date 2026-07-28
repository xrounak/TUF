# Aptitude Video - Design System

Source of truth for all aptitude explainer videos. Read this first before building any composition.

---

## 🎨 Colors

| Token         | Hex        | Usage                                                |
| ------------- | ---------- | ---------------------------------------------------- |
| `--primary`   | `#6373db`  | SerialNum badge, solutionChip, accent numbers/text, bottomStrip, option letter circles |
| `--primary-light` | `#e2e5ff` | SolutionStackCard background                       |
| `--success`   | `#4eb85f`  | Correct option highlight (green)                     |
| `--topic`     | `#949494`  | TopicName text (bottom-left)                         |
| `--text`      | `#000000`  | Default body text                                    |
| `--bg`        | `#FFFFFF`  | Page background                                      |

---

## 🔤 Typography

**Font Family:** `Google Sans Flex` (with fallback to `Inter`, `Helvetica Neue`, `sans-serif`)

| Use case                       | Weight  | Size (px) |
| ------------------------------ | ------- | --------- |
| Question text (Phase 1 hero)   | Medium  | 36–38     |
| Question text (pinned)         | Medium  | 24–26     |
| All other body / math text     | Regular | 32–48     |
| solutionChip text              | Regular | 18        |
| TopicName                      | Regular | 16        |
| SerialNum digit                | Regular | 36        |
| Option text                    | Regular | 28        |
| Option letter (in circle)      | Regular | 24        |

**Rule:** Medium weight is reserved ONLY for the main question text on the first frame. Everything else is Regular.

---

## 🧩 Components

### 1. `QuestionCard`
- Rounded rectangle with thin black border (~2px)
- White background
- Padding: 28px 60px
- Numbers in question highlighted with `--primary` color
- Phase 1: large (1640px wide), Phase 2+: smaller pinned (1100–1300px wide)
- SerialNum badge attached top-left, slightly overlapping

### 2. `SerialNum`
- Flower/star badge shape (asset: `serial-num-badge.svg`)
- Fill: `--primary` (`#6373db`)
- Centered letter **"Q"** (fixed on every video - not the question number) in white, Regular weight, ~36px

### 3. `TopicName`
- Bottom-left of every frame
- Color: `--topic` (`#949494`)
- Regular, 16px
- e.g. "Trains, Boats and Streams"

### 4. `bottomStrip`
- Full-width thin bar at very bottom
- Height: ~6px
- Background: `--primary`

### 5. `dottedGrid`
- CSS-generated dotted pattern overlay
- Color: light gray dots
- Spacing: ~28px

### 7. `Illustration`
- The visual hero (trains, car, road, etc.)
- Centered horizontally
- Sized to leave room for solution cards below
- **Label font sizes (minimums):** any text label inside the main Phase‑1
  illustration (distance/time/value callouts, etc.) must be **≥22px**. Any
  text inside the pinned (Phase‑2+) illustration recap - e.g. a small
  "Distance = 2.4 km · Time = 18 min" line next to the shrunk icon - must
  be **≥21px**, and the pinned icon itself should be sized up in step with
  that text (don't shrink the icon down to something tiny while the label
  next to it reads at 21px+ - they should read as one balanced unit).
  These are per-question custom CSS (illustration content isn't a shared
  component), but the size floor is a standing convention across videos.
- **Pinned (Phase‑2+) illustration layout:** if the pinned recap is a single
  icon plus one short line of text, center it (`justify-content:center` on
  the flex wrapper) rather than left-aligning it - left-aligned content
  starting near the pinned illustration's left edge collides with the left
  stack column. Only use `justify-content:space-between` when the
  illustration genuinely spans two objects across the width (e.g. two
  trains approaching each other) - that's a different layout need than a
  single-icon recap.

### 8. `SolutionCard` (active card, center)
- White background
- Border-radius: 18px
- Subtle shadow: `0 6px 24px rgba(99, 115, 219, 0.15)`
- Padding: 28px 48px
- Width: ~640px as a starting default - **but size it to the actual
  content**: if a card's longest line would wrap at 640px, widen the card
  (and recenter via `left: 960 - width/2`) so every line fits on one line.
  Don't ship a card that wraps just because 640/700/760 was the width used
  in a previous question - measure against *this* question's longest line.
- Contains `solutionChip` at top + math content
- Text inside: Regular weight, numbers in `--primary` color

### 9. `SolutionStackCard` (completed steps, left column)
- Background: `--primary-light` (`#e2e5ff`)
- Border-radius: 18px
- NO shadow
- Width: ~260px
- Same internal structure as SolutionCard but smaller text
- Stacks vertically in left column with a real, hand-measured gap (~40px+ between cards, computed from each card's actual rendered height - never space stack cards evenly by a fixed guess)
- **Badge:** instead of a text `solutionChip` inside the card, use a `.step-circle` badge ("G" for Given, "1"/"2"/"3"... for steps) - a 44px circle, `--primary` background, white text, positioned via `left:-55px` so it reads as sitting just outside the card's left edge. The ACTIVE (center) `SolutionCard` still uses the normal text chip; only the collapsed stack version swaps to a circle.
- **Connector line:** a `.stack-line` (4px wide, `--primary`) drawn between each consecutive pair of `.step-circle` badges, positioned as a sibling of the stack cards (not nested inside one). Grows in (`scaleY: 0 → 1`) via `apt.stackLineGrow` at the exact moment the *lower* of the two circles joins the stack (i.e. same timestamp as that step's `apt.morphToStack` call) - never before both circles exist. Lines are never faded out during the options-reveal/recenter phase; they stay visible and continuous alongside the stack cards.

### 9.1 Text Reveal (word/line fade-in synced to `transcript.json`)

Applies **only** to the ACTIVE (center) `SolutionCard`s - Given, Step 1, Step 2, Step 3. Collapsed `SolutionStackCard`s keep their existing single fade-in (no internal staggering) - they're archived/summary states, not being narrated live.

Instead of the whole `.math` block fading in at once with the card, each piece of text inside `.math` fades in individually, timed to the exact moment it's spoken:

- **Word-level** - for a line that's a direct verbal or numeric/equation match to the narration (e.g. "54 ÷ 72", "= 3/4 hr", "60 − 45", "= 15 minutes"): wrap each word in its own `<span class="rv" data-t="...">`, timed to that word's start timestamp in `transcript.json`.
- **Line-level** - for a paraphrased/restructured line with no clean word-to-word match (e.g. "Distance = 54 km" when the narration says "the train covers fifty-four kilometer"): wrap the whole line in one `<span class="rv" data-t="...">`, timed to the start of the corresponding spoken phrase.

Mechanics:
- `data-t` is an **absolute timeline second** (straight from `transcript.json`), not relative to the card's own start time.
- `.rv` starts at `opacity:0` via CSS (`design-system.css`); `apt.textReveal(tl, containerSelector)` (`animations.js`) queries every `.rv` inside the container and fades each to `opacity:1` (plain fade, no slide/scale/bounce) at its own `data-t`.
- Call `apt.textReveal(tl, "#card-given .math")` once per active card, right after that card's `apt.cardEnter` - see `template.html`.
- The card box entrance (`apt.cardEnter`) is unchanged - this only replaces how the text *inside* the card appears.
- This is the **only** reveal for that content - do not also layer `apt.emphasize`/`apt.resultReveal` pulses on fractions/answers inside a text-reveal-driven card; that would double-animate the same text.

### 10. `solutionChip`
- Pill / fully rounded rectangle
- Background: `--primary` (`#6373db`)
- Text: white, Regular, 18px
- Padding: 6px 16px
- Text examples: "Given", "Step 1", "Step 2", "Step 3"

### 11. `logo`
- Bottom-right corner
- F mark with orange arrow on black circle
- Asset: `logo.png` (56×56px)

### 13. Options A/B/C/D
- Each option is a rounded-corner outlined rectangle
- Border: 2.5px solid black
- Background: white
- Left side: filled circle with letter (A/B/C/D)
  - Circle background: `--primary` (`#6373db`)
  - Letter color: white
- Right side: option text in black, Regular
- Layout: 2×2 grid

### 14. `correctOption` (highlighted state)
- Background: `--success` (`#4eb85f`)
- Border: same green
- Letter circle: white background, green letter
- Text: white

---

## 📐 Layout (1920 × 1080)

### Grid

All absolute positioning uses a 4-column × 3-row grid instead of ad-hoc pixel values or `left:50%` centering:

- Margin (all sides): **100px**
- Column gap: **60px** · Row gap: **40px**
- Column width: **385px** · Row height: **266.67px**
- Column left edges: `100, 545, 990, 1435`
- Row top edges: `100, 406.67, 713.33`

`.pinned-col` (in `design-system.css`) spans columns 2–4 (`left:540px; width:1275px`) and is used by the options-reveal wrapper. The stack column sits at the grid margin (`left:100px`), and `.stack-card` width (`385px`) matches one grid column.

**The pinned question card is the one deliberate exception** - it starts at `left:385px` (not on `.pinned-col`) so that `apt.recenterForOptions`'s `xShift:160` lands it at ~545px, aligning with `.pinned-col` only once it shifts, right before Phase 3. This was a hand-tuned choice, not strict grid math - don't "fix" it back to `540px` flat, or the recenter shift will overshoot.

```
┌─────────────────────────────────────────────────────────────┐
│ ⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅ dottedGrid background ⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅ │  ← Background
│                                                             │
│     ⓢ ┌────── QuestionCard ────────────┐                    │
│        │  Question text with numbers in │                    │
│        │  blue. Medium weight, 36px.    │                    │
│        └────────────────────────────────┘                    │
│                                                             │
│   ┌──── Stack ────┐         Illustration                    │
│   │ ┌───────────┐ │      🚂 ←--------→ 🚂                  │
│   │ │ Given     │ │       180m         220m                  │
│   │ │ Train A=180│ │      Ratio: 3:4                         │
│   │ └───────────┘ │                                          │
│   │ ┌───────────┐ │   ┌── SolutionCard ──┐                  │
│   │ │ Step 1    │ │   │ Step 2          │                   │
│   │ │ ...       │ │   │ Math content    │                   │
│   │ └───────────┘ │   │                 │                   │
│   └───────────────┘   └──────────────────┘                  │
│                                                             │
│  Trains, Boats…                                       ⓕ    │
│ ═══════════════════════════════════════════════════════════ │  ← bottomStrip
└─────────────────────────────────────────────────────────────┘
```

---

## 🎬 Phase Structure

### Phase 1 - Question Reveal (0 → ~22s)
- QuestionCard appears (large, centered)
- SerialNum animates in
- Illustration builds
- TopicName + bottomStrip + logo visible

### Phase 2 - Given / Setup
- QuestionCard shrinks to top
- solutionChip "Given" with the given values appears (centered)
- Then slides to left stack as Step 1 begins

### Phase 3 - Steps (one card per major step)
- Each Step N: active SolutionCard in center
- When step completes, it slides left into the SolutionStackArea
- Previous steps remain visible in stack
- dottedLine separator visible between stack and active card

### Phase 4 - Options Reveal
- All stack cards stay visible on left
- 2×2 option grid appears on right
- Correct option highlights green (correctOption state)

---

## 🛠 Animation Patterns

- **Card entrance:** `gsap.fromTo(card, {y: 40, scale: 0.92, opacity: 0}, {y: 0, scale: 1, opacity: 1, duration: 0.55, ease: "back.out(1.4)"})`
- **Card exit:** `gsap.to(card, {opacity: 0, scale: 0.92, duration: 0.35, ease: "power2.in"})`
- **Stack slide-in:** `gsap.fromTo(stackCard, {x: -20, scale: 0.85, opacity: 0}, {x: 0, scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.3)"})`
- **Result reveal (within card):** `gsap.fromTo(resultSpan, {opacity: 0, x: -15}, {opacity: 1, x: 0, duration: 0.5, ease: "back.out(1.4)"})`
- **Correct option highlight:** background-color tween from white → `--success` with scale pulse

---

## 📦 Required Assets (in `_template/assets/`)

| Filename                | Type | Description                                    | Status   |
| ----------------------- | ---- | ---------------------------------------------- | -------- |
| `serial-num-badge.svg`  | SVG  | Wavy-edge flower badge (#6675de fill)          | ✅ Ready  |
| `logo.png`              | PNG  | F mark with orange arrow on black circle       | ✅ Ready  |

> **Question card** - no asset needed. Pure CSS via `.q-card` (white card + 4px black border + offset black `::before` shadow). Reference design lives in `_template/assets/question-card.html`.

Per-question illustrations (trains, cars, etc.) live in each question's own folder.

### Angle arcs (theta, elevation/depression angles, etc.)

Render every angle arc with the CSS `stroke-dasharray` circle technique, not a hand-built SVG `<path>` arc:

```html
<circle
  cx="VERTEX_X" cy="VERTEX_Y" r="RADIUS"
  fill="transparent" stroke="#4eb85f" stroke-width="8" stroke-linecap="round"
  transform="translate(0, calc(2*VERTEX_Y)) scale(1,-1)"
  style="--angle: THETA_DEGREES; stroke-dasharray: calc((var(--angle) / 360) * CIRCUMFERENCE) CIRCUMFERENCE;"
/>
<!-- CIRCUMFERENCE = 2 * PI * RADIUS -->
```

`THETA_DEGREES` must be computed exactly (acos/asin/atan from the known sides), never eyeballed - this is what keeps the arc precise across any rescale. The `translate/scale(1,-1)` flip makes the stroke start at 0deg (the adjacent/base ray, pointing +x) and sweep UP toward the hypotenuse, instead of the default clockwise/downward sweep. Use the same technique at both the full-size Phase 1 illustration scale and the shrunk Phase 2 pinned-icon scale.
