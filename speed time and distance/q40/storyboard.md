# Storyboard — Speed, Time & Distance · Q40 (Circular Track, Opposite Directions)

**Question:** Two walkers start together on a 600 m circular track and move in opposite directions at 7 m/s and 5 m/s. After how many seconds will they meet for the first time?
**Options:** A) 50 seconds (correct) B) 40 seconds C) 45 seconds D) 55 seconds
**Solution:** Relative speed (opposite directions → add) = 7 + 5 = 12 m/s. To meet for the first time they must together cover one full round = 600 m. Time = 600 ÷ 12 = 50 sec.
**Voiceover duration:** 95.639s
**Topic name:** "Speed, Time and Distance"

Direct sibling of [q39](../q39/index.html) — same bespoke circular-track illustration technique (light-grey SVG ring, two colored dots with rotating comet-tails, a live center counter, `--runner-red` as the one illustration-only accent, `--primary` reused as "blue"), reused because it's the second (and last) circular-track question in this batch. The physics differs in one crucial way that reshapes the whole illustration: q39's runners moved in the SAME direction (meet by the faster one lapping the slower from behind — relative speed is a DIFFERENCE, 6−4), while q40's walkers move in OPPOSITE directions (meet head-on somewhere around the ring — relative speed is a SUM, 7+5). That difference is made literal: red rotates clockwise (+210°, matching 7/12 of the ring), blue rotates counter-clockwise (−150°, matching 5/12 of the ring), and they land at the SAME point — 210° clockwise from the shared start — at the exact moment the combined-distance counter hits 600 m. The meeting point is genuinely proportional (7:5 split of the ring), not an arbitrary flourish. The live center counter is relabeled "Together" (combined distance both walkers have covered) rather than q39's "Lead" (gap between them), since the underlying quantity being taught is a sum, not a difference.

---

## PART 1: Narration Beat Analysis

| # | Time (s) | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|----------|-----------|----------------------|------------------|-------------------|
| 1 | 0.10–2.22 | "So welcome back again. Time for one more problem." | Cold open | Center screen | Question card hero rises |
| 2 | 2.72–9.30 | "Now in this problem, we are given that the circular track is six hundred meter long." | Establish the track | Illustration | Grey ring draws itself; "600 m" settles at center |
| 3 | 9.86–16.90 | "The speed of the first walker is seven meter per second. The speed of the second walker is five meters per second." | Assign each walker's speed | Dots + legend | Both dots pop in together at the start; red tag "7 m/s", then blue tag "5 m/s" |
| 4 | 17.42–21.58 | "Both start from the same point, but they move in opposite directions." | Establish shared start + OPPOSITE direction | Both dots | "Start" label; a clockwise (↻) + counter-clockwise (↺) arrow pair fades in; dots pulse together |
| 5 | 22.06–26.50 | "The question is asking us to find after how many seconds they will meet for the first time." | Restate the ask | Question card | Hold |
| 6 | 26.96–34.82 | "Now, before solving, let us understand the idea first. Since they are moving in opposite directions, they are moving towards each other." | Bridge into the concept | Full frame | Hold — sets up "towards each other" just before motion begins |
| 7 | 35.38–52.26 | "Every second, the first walker covers seven meter. The second walker covers five meter. So together, they reduce the distance between them by twelve meters every second, or simply every second, together they cover twelve meters of the track." | Teach the core concept: combined coverage is a SUM | Both dots, live motion | Continuous motion begins (MOTION_START); red sweeps clockwise, blue sweeps counter-clockwise; "Together" counter starts ticking up from 0 |
| 8 | 52.78–62.08 | "Now, they started from the same point. To meet again, together they must complete one full round of the circular track. One full round is six hundred meter." | Teach WHY the meeting condition is "one combined lap" | Both dots converging head-on | Motion continues; red and blue arrive at the SAME point from opposite sides exactly as "...six hundred meter" lands (MEET_TIME = 62.1s); counter reads 600 |
| 9 | 62.58–63.94 | "Got it? Perfect." | Confirm | Center counter | Counter locks "600 m = 1 full lap combined!"; hold |
| 10 | 64.50–65.94 | "Now let us solve it." | Bridge into solving | Full frame → pinned | PIN — question + illustration glide to pinned slots; Given card opens (recap) |
| 11 | 66.54–79.82 | "Since together they cover twelve meters every second, time is equal to total distance divided by relative speed. Here, the relative speed is equal to seven plus five, which is twelve meters per second." | Step 1: state the formula, then the relative speed | Step 1 card | "Time = Total Distance ÷ Relative Speed" then "Relative Speed = 7 + 5 = 12 m/s" resolves |
| 12 | 80.30–88.04 | "Putting the values, time is equal to six hundred divided by twelve. After simplifying this, we get fifty seconds." | Step 2: substitute → answer | Step 2 card | "600 ÷ 12 = 50 sec" resolves |
| 13 | 88.46–95.64 | "So the two walkers will meet for the first time after fifty seconds. Hence, the correct answer is option A." | Final answer + reveal | Options grid | Options grid fades in, A pulses green |

---

## PART 2: Scene-by-Scene Storyboard

Design constraints per README §4D.1: only `--primary #6373db`, `--primary-light #e2e5ff`, `--success #4eb85f`, `--topic #949494`, `--text #000000`, `--bg #FFFFFF` on every card/chip/button/text element; only `animations.js` helpers for all standard transitions. The illustration is the one bespoke element (same allowance and same one new color, `--runner-red`, as q39).

### SCENE 1 — Hero Question Open
**TIMESTAMP:** 0.0–2.22s. `apt.heroEnterLowered(tl, "#q-full-card", 180, 2.22)`.

### SCENE 2 — The Track Draws Itself
**TIMESTAMP:** 2.22–9.30s
**VOICEOVER:** "...the circular track is six hundred meter long."
**ANIMATION DETAILS:** `#track-ring` strokeDashoffset draw, `duration:3.2, ease:"power2.out"`, start 3.5 (lands 6.7). `#center-label-static` ("600 m") fades in at 7.859.

### SCENE 3 — Both Walkers Appear Together
**TIMESTAMP:** 9.30–16.90s
**VISUAL OBJECTIVE:** Same start point, pre-established before the sentence even says so.
**ANIMATION DETAILS:** `#dot-red, #dot-blue` fade+pop at 9.86. `#tag-red` ("● Walker A · 7 m/s") at 11.979. `#tag-blue` ("● Walker B · 5 m/s") at 15.719.

### SCENE 4 — Same Start, Opposite Directions ★
**TIMESTAMP:** 17.42–21.58s
**VISUAL OBJECTIVE:** Make "opposite directions" visually unmistakable BEFORE any motion — this is the one fact that inverts q39's whole approach.
**ANIMATION DETAILS:** `#start-label` fades in at 17.42. `#dir-arrows` (↻ and ↺ glyphs side by side, `--topic` grey) fades in at 20.279 (word "opposite"). Both dots get a synchronized radius pulse (`attr:{r:17}`, yoyo) at 20.92.
**EDUCATIONAL PURPOSE:** Plants the fact that Scene 6's "so together they reduce the distance... by twelve every second" (a SUM, not q39's difference) depends on.

### SCENE 5 — Question Restated / Concept Bridge
**TIMESTAMP:** 22.06–34.82s
**VOICEOVER:** "...they are moving towards each other."
**ANIMATION DETAILS:** None — deliberate hold, ending right as "towards each other" plants the head-on framing just before motion starts.

### SCENE 6 — The Walk: Combined Coverage, Live "Together" Counter ★ key visual beat
**TIMESTAMP:** 35.38–62.10s (MOTION_START=35.38, MEET_TIME=62.1, D=26.72s)
**VOICEOVER:** "Every second, the first walker covers seven meter. The second walker covers five meter. So together, they reduce the distance between them by twelve meters every second... Now, they started from the same point. To meet again, together they must complete one full round of the circular track. One full round is six hundred meter."
**VISUAL OBJECTIVE:** One continuous, physically-honest motion sequence: red sweeps clockwise (+210°, its 7/12 share of the ring), blue sweeps counter-clockwise (−150°, its 5/12 share) — both real fractions of the 7:5 split — landing at the SAME point (210° clockwise from start) at the instant their combined distance hits 600 m.
**ANIMATION DETAILS:** Single proxy tween `{t:0}→{t:1}`, `duration:26.72, ease:"none"`, `onUpdate` sets `redGroup.setAttribute('transform','rotate('+(t*210)+' 280 280)')` and `blueGroup.setAttribute('transform','rotate('+(-t*150)+' 280 280)')` (negative = counter-clockwise) and writes `Math.round(t*600)` into the "Together" counter. `#center-label-static` swaps to `#center-label-live` at MOTION_START. Comet tails (`#tail-red`, `#tail-blue`) fade in at MOTION_START — blue's tail is mirrored onto the OTHER side of its dot vs. q39 (authored on the +angle side so it trails correctly once the group rotates negative). At MEET_TIME: dot radius pulse (`attr:{r:22}`, both), counter scale-pulse + color→`--success`, "= 1 full lap combined!" sub-caption fades in.
**MOTION NOTES:** `ease:"none"` — constant real-world walking speed, not eased drama. Only non-`animations.js` bespoke tween in the composition (same class as q39's Scene 6).
**CONTINUITY:** Both dots are the literal same elements motionless at the top since Scene 3 — first movement starts from rotation:0 with no jump, in two different signed directions.

### SCENE 7 — Hold on the Result
**TIMESTAMP:** 62.10–64.50s. No new elements — hold on the meeting flash through "Got it? Perfect."

### SCENE 8 — Pin + Given Recap
**TIMESTAMP:** 64.50–66.40s
**ANIMATION DETAILS:** `PIN_TIME = GIVEN_TIME = 64.5` (coincide — no separate recap beat exists here, same as q39). `apt.pinFlow` ×2, `apt.cardEnter(tl, "#card-given .solution-card", 64.5)`, `apt.textReveal` with all four `.rv` spans pointing to their ORIGINAL Phase-1 timestamps (7.859 / 11.979 / 15.719 / 20.279).

### SCENE 9 — Step 1: Formula + Relative Speed
**TIMESTAMP:** 66.40–79.90s
**ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 65.4)`. `apt.cardEnter(tl, "#card-step1 .solution-card", 66.4)`. Math: line-level "Time = Total Distance ÷ Relative Speed" @ `data-t=70.799`; word-level "Relative Speed = 7 + 5 =" @ `data-t=77.22`; `.ans` "12 m/s" @ `data-t=78.639`.

### SCENE 10 — Step 2: Substitute → Answer
**TIMESTAMP:** 79.90–88.46s
**ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 79.9)`, `apt.stackLineGrow(tl, "#line-g-1", 79.9)`. `apt.cardEnter(tl, "#card-step2 .solution-card", 80.9)`. Math: word-level "600" @ `data-t=82.699`, "÷ 12 =" @ `data-t=83.68`; `.ans` "50 sec" @ `data-t=87.099`.

### SCENE 11 — Final Reveal: Options + Correct Answer
**TIMESTAMP:** 88.46–95.64s
**ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 88.459)`; `apt.stackLineGrow(tl, "#line-1-2", 88.459)`; `apt.fadeOut("#illus-pinned")`; `apt.recenterForOptions`; `apt.fadeIn(tl, "#options-reveal", 89.2)`; `apt.optionsStagger(tl, ".opt-btn", 89.7)`; `apt.correctPulse(tl, ".opt-btn.correct", 95.059)` (lands on "option A." at 95.639).

### SCENE 12 — End Hold + Fade
**TIMESTAMP:** 95.64–98.0s. `apt.fadeOut(tl, "#root > div", 96.8, 1.2)`.

---

## PART 3: Asset List Required

- No external illustration assets — inline SVG + HTML/CSS, identical technique to q39.
- `--runner-red: #e2574a` — reused verbatim from q39 (same illustration-only accent, same justification).
- All cards/chips/options/logo/serial-badge — existing shared components. No new components introduced.

## PART 4: Animation Complexity Notes

- Standard patterns: `heroEnterLowered`, `pinFlow` (×2), `cardEnter` (×3), `textReveal` (×3), `morphToStack` (×3), `stackLineGrow` (×2), `setStackLine` (×2), `fadeIn`/`fadeOut`, `recenterForOptions`, `optionsStagger`, `correctPulse`.
- One bespoke SVG stroke-draw (`#track-ring`), identical technique to q39.
- One bespoke continuous-motion tween (Scene 6): same `{t:0}→{t:1}` proxy pattern as q39, but now drives the two groups in OPPOSITE signed directions (`+t*210` / `-t*150`) instead of q39's same-signed `+t*1080` / `+t*720`. This is the one real structural difference between the two compositions' motion code — it directly encodes "opposite directions" as opposite rotation signs, not just a label change.
- The 7:5 split (210°/150°, summing to exactly 360°) is mathematically exact — the real relative-speed ratio, time-compressed into 26.72s instead of the literal 50 real seconds (same simplification class as q39/q37).
- Blue's comet-tail path is mirrored (authored on the +angle side, not q39's −angle side) precisely because blue now rotates in the negative direction — flagged here since copy-pasting q39's tail path unchanged would have trailed on the WRONG side once the rotation sign flipped.
- Two `attr:{r:...}` pulse tweens at MEET_TIME (not CSS `scale`) — same transform-origin-avoidance technique as q39.
- No `apt.ambientLoop`, no `apt.stepFlow`, no double-animation risk — same as q39.
- 1 Given + 2 Steps (G, 1, 2) — within README norm, matching the narration's own two-beat solve.

## PART 5: Master Timeline Overview

```
0.0    Phase 1 starts — QuestionCard hero (lowered) enters
0.8    SerialNum badge pop
2.22   QuestionCard + badge rise to resting position
3.5    Track ring starts drawing (3.2s, power2.out) — lands 6.7
7.859  "600 m" center label fades in
9.86   Both dots pop in together at the start point
11.979 Red legend tag "Walker A · 7 m/s" fades in
15.719 Blue legend tag "Walker B · 5 m/s" fades in
17.42  "Start" label fades in
20.279 Opposite-direction arrow pair (↻ ↺) fades in
20.92  Both dots soft-pulse together
22.06–34.82  Question restated + concept bridge (hold)
[ MOTION_START = 35.38 ]
35.38  Center label swaps to live "Together: 0 m" counter; comet tails fade in;
       continuous motion begins — red +210° clockwise, blue −150° counter-clockwise (ease:none)
[ MEET_TIME = 62.1 ]
62.10  Dots meet head-on at the same point (210° clockwise from start);
       dot-radius pulse; Together counter locks at 600, turns green
62.1–64.5  Hold on the result
[ PIN_TIME = GIVEN_TIME = 64.5 ]
64.5   pinFlow: question + illustration glide to pinned slots (0.8s);
       Given card opens (recap, .rv timestamps point to original Phase-1 mentions)
65.4   Given → stack morph
66.4   Step 1 card enters ("Time = Distance ÷ Relative Speed" → "7+5=12 m/s")
[ 79.9 ]  Step 1 → stack morph; line-g-1 grows
80.9   Step 2 card enters ("600 ÷ 12 = 50 sec")
[ 88.459 ]  Step 2 → stack morph; line-1-2 grows; illustration fades; question recenters
89.2   Options grid fades in
89.7   Options stagger in
95.059 correctPulse on option A ("...option A.")
[ END_FADE_TIME = 96.8 ]  full-frame fade out (1.2s)
~98.0  End
```
