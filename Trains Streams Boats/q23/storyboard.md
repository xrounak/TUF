# q23 — Boat Ratio (Upstream Time) — Storyboard

Duration: 85.879s. Topic: Trains, Streams and Boats. Correct answer: C (6 h).

---

## PART 1 — Narration Beat Analysis

| # | Time | Narration | Purpose | Focus | Visual objective |
|---|------|-----------|---------|-------|-------------------|
| 1 | 0.10–3.80 | "So welcome back again, it's time to solve one more problem." | Cold open | Question card | Hero card rises into place |
| 2 | 4.28–10.16 | "Now in this problem, we are given that the ratio of the boat's speed in still water to the stream's speed is five is to one." | State ratio | Illustration | River+boat scene builds, "5 : 1" ratio pill appears |
| 3 | 10.74–13.70 | "Also, the boat takes four hours to travel downstream." | State downstream time | Boat glide right | Boat drifts downstream, current-aligned arrows |
| 4 | 14.12–19.40 | "The question is asking us to find how much time it will take to come back upstream over the same distance." | Pose the question | Boat glide left | Boat returns upstream, opposing arrows, slower judder |
| 5 | 19.84–20.70 | "Hence from ratio," | Transition bridge | — | Layout pins to top (glide) |
| 6 | 21.08–26.54 | "let the boat's speed in still water be 5x and let the stream speed be x. Now we know the formulas." | Assign variables | Given card | 5x / x defined |
| 7 | 26.92–38.34 | "When boat moves downstream, the current help it to move faster, so downstream speed is boat speed plus stream speed, and when boat moves upstream, the current opposes it, so upstream speed is boat speed minus stream speed." | Teach formulas | Step 1 card | Formula lines reveal |
| 8 | 38.66–46.22 | "So the downstream speed becomes 5x + x, which is 6x, and the upstream speed becomes 5x − x, which is 4x." | Substitute | Step 1 card | Numeric results reveal |
| 9 | 47.14–59.04 | "Now let us use the downstream journey to find the distance. Distance = Speed × Time. Distance (downstream) = 6x × 4 = 24x." | Solve distance | Step 2 card | Formula + substitution |
| 10 | 59.50–68.14 | "Now that we know the distance, finding the upstream time is very easy. Since the distance covered in both cases are same, upstream distance = 24x." | Carry distance forward | Step 2 card (tail) | Restate distance for upstream leg |
| 11 | 68.48–79.04 | "...time = distance ÷ speed. Upstream time = 24x ÷ 4x. The x cancels, we get six hours." | Solve upstream time | Step 3 card | Formula → substitution → cancel → answer |
| 12 | 79.84–85.88 | "Hence, the boat will take six hours to travel upstream. So the final answer is option C." | Confirm & reveal | Options grid | Stack settles, options fade in, C pulses |

---

## PART 2 — Scene-by-Scene Storyboard

### SCENE 1 — Cold Open (0–3.8s)
- **Timestamp:** 0.0–3.8
- **Voiceover:** "So welcome back again, it's time to solve one more problem."
- **Visual objective:** Establish frame calmly before the question is read.
- **Screen layout:** `#q-full-card` centered, lowered (y+180) per `apt.heroEnterLowered`.
- **On-screen elements:** QuestionCard (text hidden until rise), SerialNum badge "Q", background dotted-grid + bottom-strip + topic-name + logo (always visible).
- **Animation details:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.8)` at 0.3s; serial badge mirrors the same lowered/rise tween (`back.out(2)` pop at 0.8s, rise at 3.8s).
- **Camera movement:** None (static frame, motion is internal).
- **Transitions:** N/A — first scene.
- **Educational purpose:** Calm cold-open, no cognitive load yet.
- **Visual hierarchy:** Card only element in frame.
- **Attention management:** Single focal point.
- **Motion notes:** `back.out(1.4)` on the card entrance reads as a soft pop-settle.
- **Continuity from previous scene:** N/A.

### SCENE 2 — Ratio Stated (4.28–10.16s)
- **Timestamp:** 4.3–10.2
- **Voiceover:** "...ratio of the boat's speed in still water to the stream's speed is five is to one."
- **Visual objective:** Introduce the river+boat scene and the 5:1 ratio.
- **Screen layout:** Question card at rest (top, y=0). Illustration area centered below at top:480px.
- **On-screen elements:** `#river-scene` (water fill + wave conveyor, motionless — "still water"), `#boat-unit` (boat.svg), `#ratio-pill` ("Still-water : Stream = 5 : 1").
- **Animation details:** `apt.cardEnter(tl, "#river-scene", 4.3)`, `apt.cardEnter(tl, "#boat-unit", 4.3)`. Ratio pill fades/pops in at 9.55 (right as "five is to one" lands), `apt.emphasize` pulse on the pill at 9.9.
- **Camera movement:** None.
- **Transitions:** Continuous from Scene 1 (card already at rest).
- **Educational purpose:** Anchor the 5:1 ratio visually before it's used algebraically.
- **Visual hierarchy:** Boat + ratio pill are new focal point; card recedes to top.
- **Attention management:** Water is static (no flow) to literally show "still water" — a deliberate held beat.
- **Motion notes:** No wave conveyor motion yet; stillness is the point.
- **Continuity from previous scene:** Card has already risen to rest at 3.8s; illustration builds directly beneath it with no gap.

### SCENE 3 — Downstream Leg (10.74–13.70s)
- **Timestamp:** 10.8–13.7
- **Voiceover:** "Also, the boat takes four hours to travel downstream."
- **Visual objective:** Show the boat moving WITH the current.
- **Screen layout:** Same illustration area; boat travels left→right.
- **On-screen elements:** `#flow-arrows` (3 chevrons, pointing right, same direction as boat), wave conveyor now flowing right.
- **Animation details:** River flow starts at 10.5 (`riverFlow` helper, rightward conveyor). Boat glides `x: 0 → 760` over 2.8s starting 10.8 (`power1.out`). Flow arrows fade in at 10.6.
- **Camera movement:** None (boat moves within fixed frame).
- **Transitions:** Continuous — water begins flowing exactly as "downstream" is spoken.
- **Educational purpose:** Physically demonstrate "downstream = current helps."
- **Visual hierarchy:** Boat motion is the sole moving element.
- **Attention management:** Wake-line flicker trails the boat for motion read.
- **Motion notes:** `power1.out` easing — quick start, gentle settle, reads as "current-assisted."
- **Continuity from previous scene:** Boat was static at left rest position; this scene's motion begins the instant the water starts flowing — no separate re-entrance.

### SCENE 4 — Upstream Leg (14.12–19.40s)
- **Timestamp:** 13.9–19.0
- **Voiceover:** "...come back upstream over the same distance."
- **Visual objective:** Show the boat moving AGAINST the current.
- **Screen layout:** Same illustration area; boat travels right→left.
- **On-screen elements:** `#flow-arrows` flip to point left (opposing boat), boat icon mirrors (`scaleX:-1`).
- **Animation details:** Turn judder at 13.7–13.9 (`scaleY` squash yoyo + icon flip). Boat glides `x: 760 → 0` over 5.1s starting 13.9 (`power1.inOut`, slower than the downstream leg to read as "against the current"). Small rotation judder throughout (current resistance).
- **Camera movement:** None.
- **Transitions:** Direct continuation — no cut between legs.
- **Educational purpose:** Physically demonstrate "upstream = current opposes."
- **Visual hierarchy:** Boat + reversed arrows are the focal read.
- **Attention management:** Judder amplitude signals struggle-against-current without new text.
- **Motion notes:** `power1.inOut`, period-0.7 rocking judder (`sine.inOut` yoyo, bounded reps).
- **Continuity from previous scene:** Same boat object, same river — it turns in place at the same spot the downstream leg ended, then retraces the path.

### SCENE 5 — Pin Flow (19.5s)
- **Timestamp:** 19.5–20.3
- **Voiceover:** "Hence from ratio," (bridge, spoken during the glide)
- **Visual objective:** Compress question + illustration into the pinned Phase-2 layout.
- **Screen layout:** `#q-full-card`→`#q-pinned` (real glide), `#illustration`→`#illus-pinned` (real glide).
- **On-screen elements:** Same objects, migrating to their pinned slots.
- **Animation details:** `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 19.5)`, `apt.pinFlow(tl, "#illustration", "#illus-pinned", 19.5)`, `apt.fadeOut(tl, "#serial-num", 19.5, 0.5)`.
- **Camera movement:** Effective "zoom out" via the glide-and-shrink.
- **Transitions:** 🌟 pinFlow — real glide, not fadeOut/fadeIn swap.
- **Educational purpose:** Free vertical space for the solution cards while keeping context visible.
- **Visual hierarchy:** Transitional — no new content, pure layout move.
- **Attention management:** N/A (transition beat).
- **Motion notes:** `power2.inOut`, 0.8s.
- **Continuity from previous scene:** The boat/river's exact end-of-Scene-4 position and appearance is what glides into `#illus-pinned` — same object, shrinking in place.

### SCENE 6 — Given (21.0–25.6s)
- **Timestamp:** 21.0–25.6
- **Voiceover:** "let the boat's speed in still water be 5x and let the stream speed be x. Now we know the formulas."
- **Visual objective:** Restate the ratio/time givens, then assign algebraic variables.
- **Screen layout:** Solution card centered, `#card-given`.
- **On-screen elements:** SolutionCard "Given": Ratio = 5 : 1, Downstream time = 4 h, Boat speed = 5x, Stream speed = x.
- **Animation details:** `apt.cardEnter(tl, "#card-given .solution-card", 21.0)`; `apt.textReveal` — Ratio/time lines reveal instantly with the card (data-t=21.0, restated givens), "Boat speed = 5x" word-synced 21.36→23.14, "Stream speed = x" word-synced 24.18→25.08.
- **Camera movement:** None.
- **Transitions:** Card pops in with standard `back.out(1.4)` entrance.
- **Educational purpose:** Bridge from plain-English givens to algebraic notation.
- **Visual hierarchy:** Given card is sole active focus; pinned illustration bobs quietly behind.
- **Attention management:** Word-sync reveal keeps eyes on the exact number being spoken.
- **Motion notes:** Pinned river/boat continues ambient flow+bob underneath (never static).
- **Continuity from previous scene:** Card opens right as the pinned layout settles — the pin glide's tail (ending 20.3) and this card's entrance (21.0) are separated by a natural narration beat ("Hence from ratio,").

### SCENE 7 — Step 1: Formulas (26.6–46.2s)
- **Timestamp:** 26.6–46.2
- **Voiceover:** "downstream speed is boat speed plus stream speed... upstream speed is boat speed minus stream speed... 5x + x = 6x... 5x − x = 4x."
- **Visual objective:** Teach both formulas, then substitute the actual values.
- **Screen layout:** `#card-step1`, Given card already morphed into the left stack.
- **On-screen elements:** Two formula lines, then two substituted-value lines.
- **Animation details:** `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 25.6)`. `apt.cardEnter(tl, "#card-step1 .solution-card", 26.6)`. `apt.textReveal`: "Downstream speed = Boat + Stream" @26.92 (line), "Upstream speed = Boat − Stream" @32.42 (line), "5x + x = 6x" word-synced 40.98→42.38, "5x − x = 4x" word-synced 44.56→45.90.
- **Camera movement:** None.
- **Transitions:** 🌟 0.8s morph from Given.
- **Educational purpose:** Core concept of the topic — direction changes the effective speed.
- **Visual hierarchy:** Formula lines (generic) precede substituted lines (specific) — progressive reveal.
- **Attention management:** `.hi` highlight color on 6x/4x results.
- **Motion notes:** Long single card (19.6s) — no dead time, narration is continuous and each reveal lands on its own phrase.
- **Continuity from previous scene:** Given card is still completing its 0.8s morph into the stack as this card's `cardEnter` begins; the "G" stack circle is the only stack item on screen.

### SCENE 8 — Step 2: Distance (48.5–68.1s)
- **Timestamp:** 48.5–68.1
- **Voiceover:** "Distance = Speed × Time... 6x × 4 = 24x... upstream distance = 24x (same distance)."
- **Visual objective:** Compute the shared distance, then carry it into the upstream leg.
- **Screen layout:** `#card-step2`.
- **On-screen elements:** "Distance = Speed × Time", "Downstream distance = 6x × 4 = 24x", "Upstream distance = 24x (same)".
- **Animation details:** `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 46.8)` + `apt.stackLineGrow(tl, "#line-g-1", 46.8)`. `apt.cardEnter(tl, "#card-step2 .solution-card", 48.5)`. `apt.textReveal`: formula line @50.08, "6x × 4 = 24x" word-synced 56.14→58.46, "Upstream distance = 24x" line @63.58.
- **Camera movement:** None.
- **Transitions:** 🌟 0.8s morph from Step 1.
- **Educational purpose:** Distance is the pivot value that links both legs.
- **Visual hierarchy:** `.ans` highlight on final 24x.
- **Motion notes:** Two-beat card — a calculation, then a callback restating the same number for the next step.
- **Continuity from previous scene:** Step 1's "1" stack circle joins the "G" circle right as this card opens; `line-g-1` grows to connect them at the same 46.8s morph.

### SCENE 9 — Step 3: Upstream Time (69.5–79.0s)
- **Timestamp:** 69.5–79.0
- **Voiceover:** "Time = Distance ÷ Speed... 24x ÷ 4x... x cancels... six hours."
- **Visual objective:** Solve for the answer, cancel x, land on 6 h.
- **Screen layout:** `#card-step3`.
- **On-screen elements:** "Time = Distance ÷ Speed", "24x ÷ 4x", answer "= 6 h".
- **Animation details:** `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 68.5)` + `apt.stackLineGrow(tl, "#line-1-2", 68.5)`. `apt.cardEnter(tl, "#card-step3 .solution-card", 69.5)`. `apt.textReveal`: formula line @70.46, "24x ÷ 4x" word-synced 74.30→75.72, answer `.ans` @78.20.
- **Camera movement:** None.
- **Transitions:** 🌟 0.8s morph from Step 2.
- **Educational purpose:** Final computation — the payoff of the whole video.
- **Visual hierarchy:** `.ans` "6 h" is the largest visual weight moment before options.
- **Motion notes:** No `emphasize`/`resultReveal` layered on top of the text-reveal (per design.md — one reveal only).
- **Continuity from previous scene:** Step 2's "2" circle joins the stack right as this card opens; `line-1-2` grows in step.

### SCENE 10 — Recenter + Options Reveal (79.0–85.9s)
- **Timestamp:** 79.0–85.9
- **Voiceover:** "Hence, the boat will take six hours to travel upstream. So the final answer is option C."
- **Visual objective:** Confirm the answer against the options grid.
- **Screen layout:** Pinned question shifts right (`recenterForOptions`), illustration recap fades, options grid fades in on the right.
- **On-screen elements:** Stack column (G/1/2/3, all connector lines grown), 2×2 options grid, `.correct` = option A... wait, check screenshot: correct = C.
- **Animation details:** `apt.fadeOut(tl, "#illus-pinned", 79.0)`, `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 79.0)`, `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 79.0)` + `apt.stackLineGrow(tl, "#line-2-3", 79.0)`. `apt.fadeIn(tl, "#options-reveal", 79.9)`, `apt.optionsStagger(tl, ".opt-btn", 80.3)`, `apt.correctPulse(tl, ".opt-btn.correct", 85.3)`.
- **Camera movement:** None.
- **Transitions:** Everything lands together at 79.0 (recenter + last morph), matching the template's combined pattern.
- **Educational purpose:** Final answer confirmation against all four options.
- **Visual hierarchy:** Correct option (C, green) is the terminal focal point.
- **Attention management:** Options sit static ~5s while narration restates the result, then pulse exactly on "option C."
- **Motion notes:** `apt.correctPulse` — scale yoyo, `back.out(1.5)`.
- **Continuity from previous scene:** Step 3's "3" stack circle and `line-2-3` complete the full connected stack in the same beat the options grid appears — one continuous settle, not two separate events.

### SCENE 11 — End Hold (85.9–88.2s)
- **Timestamp:** 85.9–88.2
- **Voiceover:** (silent — narration has ended)
- **Visual objective:** Let the correct answer sit before fade-out.
- **Screen layout:** Unchanged from Scene 10.
- **On-screen elements:** Full stack + pinned question + highlighted option C.
- **Animation details:** `apt.fadeOut(tl, "#root > div", 87.0, 1.2)`.
- **Camera movement:** None.
- **Transitions:** Single synchronized fade of every top-level child.
- **Educational purpose:** Give the viewer a beat to register the answer.
- **Visual hierarchy:** N/A — hold beat.
- **Motion notes:** N/A.
- **Continuity from previous scene:** Direct continuation, no new entrance.

---

## PART 3 — Asset List Required

- `illustration/boat.svg` (reused from global-illustrations)
- `illustration/wave.svg`, `illustration/wave-light.svg` (river conveyor tiles, reused)
- No new custom SVGs needed — ratio pill and flow arrows are pure CSS/DOM (pill + CSS chevrons), matching q21/q17's established technique.

## PART 4 — Animation Complexity Notes

- Reuses q21's river-conveyor technique (`riverFlow` local helper: two overlapping tile tracks, seamless bounded-repeat scroll) — no new animation primitive required.
- Reuses q21's `wakeFlicker` and `boatJudder` local helpers for the downstream/upstream leg feel.
- No algebra add/cancel step (unlike q21) — this question resolves in 3 steps (Given/Step1/Step2/Step3 = 4 cards total), so no extra `.note` staged-reveal lines are needed in Step 3.
- All standard helpers used: `heroEnterLowered`, `pinFlow`, `cardEnter`, `textReveal`, `morphToStack`, `stackLineGrow`, `setStackLine`, `ambientLoop`, `recenterForOptions`, `optionsStagger`, `correctPulse`, `fadeIn`/`fadeOut`, `emphasize`.

## PART 5 — Master Timeline Overview

```
0.0   Hero card lowered-entrance starts
0.8   Serial badge pop (lowered)
3.8   Card + badge rise to rest
4.3   River scene + boat enter (still water)
9.55  Ratio pill "5 : 1" appears
10.5  Water flow starts (rightward)
10.8  Boat glides downstream (→) 2.8s
13.7  Turn judder
13.9  Boat glides upstream (←) 5.1s
19.5  PIN_TIME — pinFlow glide (question + illustration → pinned)
21.0  GIVEN_TIME — Given card enters
25.6  Given → stack morph (0.8s)
26.6  Step 1 card enters (formulas)
46.8  Step 1 → stack morph (0.8s); line-g-1 grows
48.5  Step 2 card enters (distance)
68.5  Step 2 → stack morph (0.8s); line-1-2 grows
69.5  Step 3 card enters (upstream time)
79.0  RECENTER_TIME — illustration fades, question recenters, Step 3 → stack morph, line-2-3 grows
79.9  Options grid fades in
80.3  Options stagger in
85.3  Correct option (C) pulses
87.0  End fade begins (1.2s)
89.0  Timeline settle
```
