# Storyboard — Speed and Time, Question 25 (Intermediate)

**Question:** The speeds of two motorcycles are in the ratio 5 : 6. If the second motorcycle covers 360 km in 3 hours, the speed of the first is: **(A) 90 km/hr (B) 100 km/hr (C) 80 km/hr (D) 120 km/hr — Correct: B**

**Voiceover duration:** 87.18s (transcript.json). **Total composition:** ~90s (holds ~3s after final beat).

---

## PART 1 — Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|-----------|-----------|---------------------|------------------|-------------------|
| 1 | 0.12–3.24 | "So welcome back again. Time for one more problem." | Warm open, signal a new problem | Center of frame | Empty frame → question card rises into view |
| 2 | 3.66–18.90 | "Now, in this problem, we are given that the speeds of two motorcycles are in the ratio of five is to six. Also, the second motorcycle covers three hundred sixty kilometer in three hours. The question is asking us to find the speed of the first motorcycle." | State the full problem | Question card + illustration | Question text reveals; two-motorcycle illustration builds with ratio 5:6 and the 360 km / 3 hr tag on motorcycle 2 |
| 3 | 19.32–33.64 | "Because the ratio is five is to six, let the speed of the first motorcycle be five x kilometer per hour and the speed of the second motorcycle be six x kilometer per hour, as the second motorcycle's distance and time are already given." | Formalize the given data + variable setup | Pinned question (top) + Given card (center) | Layout pins to top; Given card appears with Ratio, Speed1=5x, Speed2=6x, Distance/Time |
| 4 | 34.88–52.10 | "So first, let us find its actual speed of second motorcycle. We know the formula, speed is equal to distance divided by time. Putting the values, speed of the second motorcycle is equal to three hundred sixty kilometer divided by three hours. This gives us one hundred twenty kilometer per hour." | Compute the known motorcycle's actual speed | Step 1 card | Given card morphs to stack; Step 1 card reveals formula → substitution → 120 km/hr |
| 5 | 52.16–66.46 | "Now that we know the actual speed of the second motorcycle, we can compare it with the ratio value, which is six x. So six x is equal to one hundred twenty. Dividing both sides by six, x is equal to twenty." | Solve for x using the ratio | Step 2 card | Step 1 morphs to stack; Step 2 card reveals 6x = 120 → x = 20 |
| 6 | 66.90–81.18 | "Now, this value will help us find the speed of the first motorcycle. So speed of the first motorcycle is equal to five x, where x equal to twenty, speed of first motorcycle become five into twenty. This gives us one hundred kilometer per hour." | Compute the answer | Step 3 card | Step 2 morphs to stack; Step 3 card reveals 5x → 5×20 → 100 km/hr |
| 7 | 81.22–87.18 | "So the speed of the first motorcycle is one hundred kilometer per hour. Hence, the correct option is option B." | Confirm final answer | Options grid | Step 3 morphs to stack; options grid reveals, option B pulses green |

---

## PART 2 — Scene-by-Scene Storyboard

### SCENE 1 — Cold Open
**Timestamp:** 0.0 – 3.24s
**Voiceover:** "So welcome back again. Time for one more problem."
**Visual Objective:** Establish frame; question card rises from a lowered, vertically-centered rest position into its Phase-1 slot.
**Screen Layout:** Background layers only until 0.3s, then `#q-full-card` centered at `left:50%`, starting at `y:230px` (HERO_OFFSET_Y=180 + 50 fromTo start).
**On-Screen Elements:** `.dotted-grid`, `.bottom-strip`, `.topic-name` ("Speed and Time"), `.logo`, `#q-full-card` (question text), `#serial-num` badge.
**Animation Details:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.24)` — card fromTo at 0.3s (0.7s, back.out(1.4)), then rises to y:0 exactly at RISE_TIME=3.24 (end of "Time for one more problem."). `#serial-num` pops in parallel at 0.8s (back.out(2)) at the same lowered y-offset, then rises with the card at 3.24s.
**Camera Movement:** None (static frame, motion is internal to elements).
**Transitions:** N/A (opening scene).
**Educational Purpose:** Signal video start without wasting time before the problem is read.
**Visual Hierarchy:** Question card is the only focal element; badge secondary.
**Attention Management:** Single moving element (the card+badge unit) — no competing motion.
**Motion Notes:** Card holds at lowered position through the "welcome back" beat, rising only once the narrator says "problem" — ties the rise to a specific spoken word, not an arbitrary delay.
**Continuity from previous scene:** N/A — this is the video's first scene.

---

### SCENE 2 — Question Reveal + Illustration Build
**Timestamp:** 3.66 – 18.90s
**Voiceover:** "Now, in this problem, we are given that the speeds of two motorcycles are in the ratio of five is to six. Also, the second motorcycle covers three hundred sixty kilometer in three hours. The question is asking us to find the speed of the first motorcycle."
**Visual Objective:** Read the full question while a flat 2D illustration of two motorcycles builds in to visualize the ratio and the known distance/time.
**Screen Layout:** `#q-full-card` at rest (`top:80px`, centered). `#illustration` area (`top:480px`, 1400×300px, centered) hosts two motorcycle icons with a ratio badge between them and a distance/time tag under motorcycle 2.
**On-Screen Elements:**
- `#q-full-card` — full question text, numbers ("5 : 6", "360 km", "3 hours") in `.num` (primary blue).
- `#illustration`: `<img id="moto-1" src="illustration/motorcycle-blue.svg">` (left), a center `.chip`-style ratio badge showing "5 : 6", `<img id="moto-2" src="illustration/motorcycle-red.svg">` (right) with a small tag below it reading "360 km / 3 hr".
**Animation Details:**
- Question card already at rest (Scene 1 handled entrance).
- Illustration container fades/slides in: motorcycle 1 enters from left (`roadSweep`-style or simple fadeIn) at **5.58s** (word "the" — start of "the speeds of two motorcycles are in the ratio"), motorcycle 2 enters from right at the same time, mirrored.
- Ratio badge "5 : 6" pops in (small `emphasize`-style scale-in) at **8.08s** (word "five", start of "five is to six").
- Distance/time tag under motorcycle 2 fades in at **9.52s** (word "Also") with "360 km" emphasized at **11.32–12.36s** (words "three hundred sixty") and "3 hr" emphasized at **13.30–14.48s** (words "in three hours").
- Both motorcycles get a subtle idle animation (gentle wheel-spin loop or bob) from their entrance through Scene 3's pin — implemented as `apt.ambientLoop` on each icon (bounded window, e.g. 6.0 → 19.0) so the illustration doesn't sit static.
**Camera Movement:** None.
**Transitions:** N/A (continuous with Scene 1; illustration builds without a hard cut).
**Educational Purpose:** Let the viewer visually anchor "5:6" and "360 km / 3 hr" to a concrete picture before any algebra starts.
**Visual Hierarchy:** Question text (top) primary; illustration (center) secondary, builds progressively so eyes are guided motorcycle 1 → ratio badge → motorcycle 2 → distance/time tag, matching narration order.
**Attention Management:** Only one new element reveals at a time, each cued to its own word/phrase.
**Motion Notes:** Keep illustration entrances simple fades/slides (no bounce) so they don't compete with the question card's own `back.out` entrance from Scene 1.
**Continuity from previous scene:** The question card and badge are already at rest from Scene 1's rise at 3.24s; this scene only adds the illustration underneath — no re-entrance of the card itself.

---

### SCENE 3 — Pin + Given Card
**Timestamp:** 19.0 – 34.0s
**Voiceover:** "Because the ratio is five is to six, let the speed of the first motorcycle be five x kilometer per hour and the speed of the second motorcycle be six x kilometer per hour, as the second motorcycle's distance and time are already given."
**Visual Objective:** Reorganize layout (question pins to top) and formalize the given data as a solution card: ratio, the two speed variables, and the known distance/time for motorcycle 2.
**Screen Layout:** `#q-pinned` (`left:385px, top:30px`), `#illus-pinned` (`left:280px, top:190px`, shrunk icons), `#card-given .solution-card` centered (`left:640px, top:480px`), `#stack-given` waiting at `left:100px, top:140px` (opacity 0).
**On-Screen Elements:** Pinned question text (shortened), pinned motorcycle icons (smaller, same relative layout), Given `.solution-card` with `.chip` "Given" and 4 `.math` lines.
**Animation Details:**
- **PIN_TIME = 19.0** — `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 19.0)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 19.0)` fire together (0.8s glide, completing 19.8).
- `apt.ambientLoop(tl, "#illus-pinned-icon", 20.0, 33.5)` — small bob on the pinned motorcycle icons through the Given card's life, since the pinned illustration has no more new reveals coming.
- **GIVEN_TIME = 21.70** (word "let" — the moment the narration starts actually naming the variables, a deliberate ~1.9s gap after PIN_TIME completes, since "Because the ratio is five is to six" (19.32–21.62) is spoken while the layout is still settling into its pinned slot).
- `apt.cardEnter(tl, "#card-given .solution-card", 21.70)`.
- `apt.textReveal(tl, "#card-given .math")` reveals:
  - Line 1 *(line-level)* "Ratio of speeds = **5 : 6**" @ `data-t="21.70"` (already illustrated in Scene 2; restated here as the card's opening line).
  - Line 2 *(word-level)* "Speed" `22.04` "1" `22.30`(*rendered as subscript, tied to "first" 22.54*) "=" `23.40` "**5x**" `23.64`/`24.12` "km/hr" `24.24`/`25.42` — matches "let the speed of the first motorcycle be five x kilometer per hour".
  - Line 3 *(word-level)* "Speed 2" `26.76` "=" `27.64` "**6x**" `27.92`/`28.70` "km/hr" `28.84`/`29.60` — matches "and the speed of the second motorcycle be six x kilometer per hour".
  - Line 4 *(line-level)* "Distance = **360 km**, Time = **3 hr**" @ `data-t="30.34"` (word "as" — "as the second motorcycle's distance and time are already given").
**Camera Movement:** None.
**Transitions:** `apt.pinFlow` is the transition device itself (real glide, not a cut).
**Educational Purpose:** Convert the spoken ratio into algebraic variables (5x, 6x) the viewer will reuse for the rest of the solve.
**Visual Hierarchy:** Pinned question stays visible but recedes; Given card is the active focal point center-stage.
**Attention Management:** Each `.math` line reveals only as its exact words are spoken — no line appears before its narration.
**Motion Notes:** Given card entrance (`back.out(1.4)`, 0.55s) reads as confident, not tentative — mirrors the certainty of "these are the givens."
**Continuity from previous scene:** The pin glide is still completing (lands 19.8s) as GIVEN_TIME's `cardEnter` fires at 21.70s — by then the pinned question/illustration have been settled for ~1.9s, so the Given card enters into an already-stable frame, not one still mid-motion.

---

### SCENE 4 — Step 1: Actual Speed of Motorcycle 2
**Timestamp:** 34.0 – 52.5s
**Voiceover:** "So first, let us find its actual speed of second motorcycle. We know the formula, speed is equal to distance divided by time. Putting the values, speed of the second motorcycle is equal to three hundred sixty kilometer divided by three hours. This gives us one hundred twenty kilometer per hour."
**Visual Objective:** Given card morphs into the stack; Step 1 solves for motorcycle 2's real speed via the Speed = Distance/Time formula.
**Screen Layout:** `#card-step1 .solution-card` centered (`left:640px, top:460px`); `#stack-given` now visible at `left:100px, top:140px`; `#line-g-1` connector prepped (not yet grown — no step above Given).
**On-Screen Elements:** Step 1 `.solution-card` with `.chip` "Step 1", 3 `.math` lines (formula, substitution, result).
**Animation Details:**
- `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 34.0)` (0.8s, completes 34.8) — Given collapses into its `G` stack circle.
- `apt.cardEnter(tl, "#card-step1 .solution-card", 34.88)` — fires right as "let us find its actual speed" begins (a ~0.08s gap after the morph completes, essentially back-to-back since this is a direct continuation of the same thought, not a new beat needing a breathing pause).
- `apt.textReveal(tl, "#card-step1 .math")`:
  - Line 1 *(line-level)* "Find actual speed of Motorcycle 2" @ `data-t="34.88"`.
  - Line 2 *(word-level)* "Speed" `39.12` "=" `39.60` "Distance" `39.90` "÷" `40.30` "Time" `40.92` — matches "speed is equal to distance divided by time".
  - Line 3 *(word-level)* "=" `42.82` "**360**" `44.94` "÷" `47.24` "**3**" `47.90` — matches "speed of the second motorcycle is equal to three hundred sixty kilometer divided by three hours".
  - Line 4 *(word-level, `.ans`)* "=" `49.34` "**120 km/hr**" `49.70`/`50.52` — matches "This gives us one hundred twenty kilometer per hour".
**Camera Movement:** None.
**Transitions:** `apt.morphToStack` (0.8s box+text crossfade).
**Educational Purpose:** Establish motorcycle 2's real-world speed as the bridge from "given" to "solvable ratio equation."
**Visual Hierarchy:** Step 1 card center; Given stack card + its circle badge "G" visible top-left of the stack column.
**Attention Management:** Formula reveals first (general rule), then substitution (specific numbers), then result — standard worked-example order.
**Motion Notes:** No `stackLineGrow`/`stepFlow` yet — Given is the first stack entry, nothing to connect to above it.
**Continuity from previous scene:** The Given card's box is still completing its morph (finishes 34.8) as Step 1's `cardEnter` fires at 34.88 — the outgoing card has just settled into `.stack-given` a beat before Step 1 rises in the same center spot, reading as one continuous "given → first calculation" handoff.

---

### SCENE 5 — Step 2: Solve for x
**Timestamp:** 52.5 – 67.7s
**Voiceover:** "Now that we know the actual speed of the second motorcycle, we can compare it with the ratio value, which is six x. So six x is equal to one hundred twenty. Dividing both sides by six, x is equal to twenty."
**Visual Objective:** Use the 120 km/hr result against the 6x ratio variable to solve for x.
**Screen Layout:** `#card-step2 .solution-card` centered (`left:600px, top:440px, width:720px`); `#stack-step1` now visible at `left:100px, top:290px`; `#line-g-1` connector grown between the G and 1 circles.
**On-Screen Elements:** Step 2 `.solution-card` with `.chip` "Step 2", 2 `.math` lines.
**Animation Details:**
- `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 52.50)` (completes 53.30).
- `apt.stackLineGrow(tl, "#line-g-1", 52.50)` — G→1 connector grows now that both circles exist.
- `apt.stepFlow(tl, "#flow-given-1", 52.50)` — transient center-stage connector bridging Step 1's exit into Step 2's entrance.
- `apt.cardEnter(tl, "#card-step2 .solution-card", 53.30)` — a ~1s hold before content starts (matches the README's breathing-gap rule; the card is on screen and settled by the time "compare it with the ratio value" is spoken at 55.36).
- `apt.textReveal(tl, "#card-step2 .math")`:
  - Line 1 *(line-level)* "Compare 120 km/hr with ratio value **6x**" @ `data-t="55.36"` (word "compare").
  - Line 2 *(word-level)* "**6x**" `59.84`/`60.36` "=" `61.02` "**120**" `61.42` — matches "So six x is equal to one hundred twenty".
  - Line 3 *(word-level)* "**x**" `65.10` "=" `65.68` "**20**" `66.10` — matches "x is equal to twenty" (the "dividing both sides by six" phrase at 62.86–64.40 plays as the reveal gap between line 2 and line 3, giving the division step room to be heard before x appears).
**Camera Movement:** None.
**Transitions:** `apt.morphToStack` + `apt.stepFlow`.
**Educational Purpose:** Payoff of the variable setup from Scene 3 — this is the algebraic pivot of the whole problem.
**Visual Hierarchy:** Step 2 card center; stack column now shows G + 1 connected by a grown line.
**Attention Management:** The "6x = 120" line holds on screen through the spoken division step before "x = 20" appears, so the viewer isn't shown the answer before the reasoning for it is spoken.
**Motion Notes:** This is the shortest, punchiest card (2 lines) — matches the narration's own brisk pacing here (six x is equal to one hundred twenty → dividing both sides by six → x is equal to twenty, all in ~7s).
**Continuity from previous scene:** Step 1's box is mid-morph into the stack (lands 53.30) as `flow-given-1`'s center-stage connector grows at the same 52.50 mark — the outgoing Step 1 card and the transient flow line move together, and Step 2's `cardEnter` picks up exactly where that motion settles.

---

### SCENE 6 — Step 3: Speed of Motorcycle 1
**Timestamp:** 67.7 – 82.0s
**Voiceover:** "Now, this value will help us find the speed of the first motorcycle. So speed of the first motorcycle is equal to five x, where x equal to twenty, speed of first motorcycle become five into twenty. This gives us one hundred kilometer per hour."
**Visual Objective:** Substitute x=20 back into 5x to get the final answer, 100 km/hr.
**Screen Layout:** `#card-step3 .solution-card` centered (`left:580px, top:420px, width:760px`); `#stack-step2` visible at `left:100px, top:460px`; `#line-1-2` connector grown.
**On-Screen Elements:** Step 3 `.solution-card` with `.chip` "Step 3", 4 `.math` lines culminating in the `.ans` result.
**Animation Details:**
- `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 66.90)` (completes 67.70) — fires right at "Now, this value will help us find..." since that sentence is itself the narrative bridge out of Step 2.
- `apt.stackLineGrow(tl, "#line-1-2", 66.90)`.
- `apt.stepFlow(tl, "#flow-1-2", 66.90)`.
- `apt.cardEnter(tl, "#card-step3 .solution-card", 70.84)` — enters exactly on "So speed of the first motorcycle is equal to five x," letting the transition sentence (66.9–70.36) play out over the settled stack before the new card appears (~3.1s hold — a deliberate longer breathing gap since that transition line is doing real explanatory work, not filler).
- `apt.textReveal(tl, "#card-step3 .math")`:
  - Line 1 *(word-level)* "Speed" `71.00` "1" *(tied to "first" 71.54)* "=" `72.54` "**5x**" `72.98`/`73.48` — "speed of the first motorcycle is equal to five x,".
  - Line 2 *(word-level)* "**x**" `74.40` "=" `74.58` "**20**" `75.06` — "where x equal to twenty".
  - Line 3 *(word-level)* "= 5 ×" `77.26`/`77.48` "**20**" `77.74` — "speed of first motorcycle become five into twenty."
  - Line 4 *(word-level, `.ans`)* "=" `79.20` "**100 km/hr**" `79.36`/`80.38` — "This gives us one hundred kilometer per hour."
**Camera Movement:** None.
**Transitions:** `apt.morphToStack` + `apt.stepFlow`.
**Educational Purpose:** Deliver the final numeric answer via direct substitution — closes the loop opened in Scene 3.
**Visual Hierarchy:** Step 3 card center, `.ans` span on the final line in the answer color treatment; full stack (G, 1, 2) visible left with all connector lines grown.
**Attention Management:** The four short lines land in strict lockstep with each spoken clause, so "100 km/hr" only appears the instant it's said.
**Motion Notes:** No new stack-line grows yet for Step 3 itself — that happens in Scene 7 alongside its own morph.
**Continuity from previous scene:** Step 2's card is already mid-morph (lands 67.70) when the transition sentence plays through to 70.36; Step 3's `cardEnter` at 70.84 arrives into a frame that's been stable for ~3s, so the new card's `back.out` pop reads as a clean, deliberate beat rather than colliding with residual motion.

---

### SCENE 7 — Options Reveal
**Timestamp:** 82.0 – 90.0s (end)
**Voiceover:** "So the speed of the first motorcycle is one hundred kilometer per hour. Hence, the correct option is option B."
**Visual Objective:** Confirm the answer against the four options, highlighting B in green.
**Screen Layout:** Step 3 morphs to stack (`left:100px, top:660px`); `#q-pinned` recenters via `xShift:160,yShift:180`; `#illus-pinned` fades out; `.options-reveal` (`.pinned-col`) reveals the 2×2 grid.
**On-Screen Elements:** Full stack (G/1/2/3, all connector lines grown and staying visible), recentered pinned question, options grid: A) 90 km/hr, **B) 100 km/hr (correct)**, C) 80 km/hr, D) 120 km/hr.
**Animation Details:**
- `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 81.20)` (completes 82.00) — fires right after "This gives us one hundred kilometer per hour." ends (81.18).
- `apt.stackLineGrow(tl, "#line-2-3", 81.20)`.
- `apt.fadeOut(tl, "#illus-pinned", 81.20)` and `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 81.20)` — clear the illustration and shift the pinned question to align with the options column, same moment the last card retires.
- `apt.fadeIn(tl, "#options-reveal", 82.20)`.
- `apt.optionsStagger(tl, ".opt-btn", 82.60)` (0.45s × 4, stagger 0.12s — lands ~83.1s, well before "option B" is spoken).
- `apt.correctPulse(tl, ".opt-btn.correct", 86.66)` — timed to the word "option" (86.66) leading into "B" (87.14), so the green pulse lands exactly as the narrator names option B.
- Final hold: `tl.set({},{},90)` keeps all elements visible ~3s past the voiceover's end (87.18s) for a clean finish.
**Camera Movement:** None.
**Transitions:** `apt.morphToStack` for the final stack entry; simple fade/stagger for the options grid.
**Educational Purpose:** Let the viewer verify the computed 100 km/hr against the actual answer choices before the reveal.
**Visual Hierarchy:** Options grid becomes the new focal point; full stack remains visible on the left as a "how we got here" trail.
**Attention Management:** Grid appears ~4.5s before the correct answer is named, giving the viewer time to read all four options and guess before the pulse confirms B.
**Motion Notes:** Stack cards and connector lines are never faded during this recenter — they stay on screen through the end per the design system's continuity rule.
**Continuity from previous scene:** Step 3's box is still landing in the stack (completes 82.00) as the options container starts its own fade-in at 82.20 — the last morph and the options reveal read as one uninterrupted settle-then-reveal motion, not two separate beats.

---

## PART 3 — Asset List Required

| Asset | Type | Notes |
|-------|------|-------|
| `illustration/motorcycle-blue.svg` | SVG | Flat 2D motorcycle icon, motorcycle 1 (slower) |
| `illustration/motorcycle-red.svg` | SVG | Flat 2D motorcycle icon, motorcycle 2 (faster) |
| `illustration/motorcycle-blue-small.svg` | SVG (or reuse + CSS scale) | Pinned/shrunk copy for Phase 2 |
| `illustration/motorcycle-red-small.svg` | SVG (or reuse + CSS scale) | Pinned/shrunk copy for Phase 2 |

No new colors, fonts, or components beyond `_template/assets/` are required — the ratio badge and distance/time tag reuse `.chip` styling from `design-system.css`.

---

## PART 4 — Animation Complexity Notes

- Every card→stack transition uses the standard 0.8s `apt.morphToStack` — no exceptions, no custom durations.
- Phase 1→2 uses `apt.pinFlow` (real glide) for both the question and the illustration, fired together at PIN_TIME=19.0.
- `GIVEN_TIME` (21.70) is deliberately later than `PIN_TIME` (19.0) — a ~2.7s gap while "Because the ratio is five is to six" is spoken during/just after the pin glide, before the Given card itself opens on "let".
- All four active cards (Given, Step 1–3) use `apt.textReveal` exclusively for their `.math` content — no `apt.emphasize`/`apt.resultReveal` layered on top.
- Three `apt.stepFlow` transient center connectors (Given→1, 1→2, 2→3) and three permanent `apt.stackLineGrow` lines, each fired at the same timestamp as its corresponding `morphToStack` call.
- One `apt.ambientLoop` on the pinned illustration icons (20.0→33.5s) to keep Phase 2's opening stretch from reading as static before Step 1 starts moving things again.
- Breathing gaps between morph completion and next card entrance vary intentionally by narrative weight: Scene 4 uses a near-zero gap (direct continuation of the same clause), Scene 5 uses ~1s (standard), Scene 6 uses ~3.1s (a real explanatory transition sentence plays out first) — each gap is sized to the actual narration, not a fixed constant.

---

## PART 5 — Master Timeline Overview

```
TIME (s)   EVENT
─────────  ─────────────────────────────────────────────
0.3        #q-full-card heroEnterLowered begins
0.8        #serial-num pops in (lowered position)
3.24       Card + badge rise to rest (RISE_TIME)
5.58       Motorcycle 1 & 2 icons fade/slide into illustration
8.08       Ratio badge "5 : 6" pops in
9.52       Distance/time tag fades in under motorcycle 2
11.32      "360 km" emphasized
13.30      "3 hr" emphasized
[ PIN + GIVEN ]
19.00      pinFlow — question + illustration glide to pinned slot
20.00      ambientLoop starts on pinned icons
21.70      Given card cardEnter (GIVEN_TIME) + textReveal begins
[ STEP 1 ]
34.00      Given → stack morph
35.10      Step 1 cardEnter + textReveal begins
[ STEP 2 ]
52.50      Step 1 → stack morph + line-g-1 grows + stepFlow(given-1)
54.00      Step 2 cardEnter
55.36      Step 2 textReveal begins
[ STEP 3 ]
66.90      Step 2 → stack morph + line-1-2 grows + stepFlow(1-2)
70.84      Step 3 cardEnter + textReveal begins
[ OPTIONS ]
81.20      Step 3 → stack morph + line-2-3 grows + illus-pinned fadeOut + recenterForOptions
82.60      options-reveal fadeIn
83.00      optionsStagger
86.66      correctPulse on option B
90.0       End hold
```

**Duration check:** 90s total falls within the 60–150s range for this workflow.
