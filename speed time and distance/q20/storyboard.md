# Speed-Time-Distance — Q20 — Storyboard

**Question:** Two trains have speeds in the ratio 7 : 9. The faster train covers 180 km in 2 hours. Find the slower train's speed.
**Options:** A) 70 km/hr (correct) B) 64 km/hr C) 68 km/hr D) 72 km/hr
**Video length:** 61.3s (from voiceover.wav / transcript.json)

---

## PART 1: Narration Beat Analysis

| # | Time | Narration | Educational purpose | Attention focus | Visual objective |
|---|------|-----------|---------------------|------------------|-------------------|
| 1 | 0.12–3.18 | "So welcome back again. Time for one more problem." | Cold open | Question card | Question fades/rises in |
| 2 | 3.62–8.34 | "Now in this problem, we are given that the speeds of two trains are in the ratio of seven is to nine." | State ratio | Two trains, ratio label | Two train icons appear side by side, "7 : 9" ratio label builds |
| 3 | 8.88–13.06 | "Also, the faster train covers one hundred eighty kilometer in two hours." | State faster train's distance/time | Faster train icon | Distance + time labels attach to faster train |
| 4 | 13.50–16.80 | "The question is asking us to find the speed of the slower train." | Restate the ask | Slower train icon | Slower train pulses/highlights as the unknown |
| 5 | 17.16–19.10 | "Because the ratio is seven is to nine," | Bridge to variable setup | — | (transition beat, no new visual) |
| 6 | 19.54–26.68 | "let the speed of the slower train be seven x kilometer per hour, and let the speed of the faster train be nine x kilometer per hour." | Define variables 7x / 9x | Given card | Given card opens: ratio 7:9, distance 180 km, time 2 hr, variables 7x/9x |
| 7 | 27.14–31.32 | "Now we know the formula, speed is equal to distance divided by time." | State the working formula | Step 1 card | Formula reveals: Speed = Distance ÷ Time |
| 8 | 31.74–38.94 | "Putting the values, speed of the faster train is equal to one hundred eighty divided by two. This gives us ninety kilometer per hour." | Compute faster train's actual speed | Step 1 card | 180 ÷ 2 = 90 km/hr revealed |
| 9 | 39.50–49.12 | "Now that we know the actual speed of the faster train, we can equate it with the value we took earlier, which is nine x. So nine x is equal to ninety, x is equal to ten." | Equate 9x = 90, solve x | Step 2 card | 9x = 90 → x = 10 |
| 10 | 49.48–53.78 | "Now, speed of the slower train is equal to seven into x, that is equal to seven into ten." | Substitute x into 7x | Step 3 card | 7 × 10 set up |
| 11 | 54.26–58.9 | "So the speed of the slower train is seventy kilometer per hour." | Final answer | Step 3 card | = 70 km/hr revealed (ans) |
| 12 | 59.0–61.30 | "Hence, the correct answer is option A." | Reveal correct option | Options grid | Option A pulses green |

---

## PART 2: Scene-by-Scene Storyboard

### SCENE 1 — Question Reveal
**TIMESTAMP:** 0.3s – 16.8s (PIN_TIME)
**VOICEOVER:** "So welcome back again. Time for one more problem... Now in this problem, we are given that the speeds of two trains are in the ratio of seven is to nine. Also, the faster train covers one hundred eighty kilometer in two hours. The question is asking us to find the speed of the slower train."
**VISUAL OBJECTIVE:** Establish the two-train scenario and the ratio, distance, time, and the unknown.
**SCREEN LAYOUT:** Full question card centered top (lowered-hero start), two flat 2D train icons centered mid-frame side by side, ratio label between them, distance/time label under the faster train.
**ON-SCREEN ELEMENTS:**
- `#q-full-card` — "Two trains have speeds in the ratio <span class="num">7 : 9</span>. The faster train covers <span class="num">180 km</span> in <span class="num">2 hours</span>. Find the slower train's speed."
- `#serial-num` badge (Q)
- `#illustration`: left train (id `train-slower`, tinted `--topic` grey, question-mark badge = unknown), right train (id `train-faster`, tinted `--primary` blue), a centered "7 : 9" ratio chip between them, a "180 km · 2 hr" label pinned under the faster train.
**ANIMATION DETAILS:**
- 0.3s: `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.6)` — card rises to rest exactly as "one more problem" narration line ends (3.18s → use 3.6 buffer).
- 0.8s: serial badge parallel tween (mirrors heroEnterLowered per template.html pattern), rises at 3.6s.
- 4.3s: both train icons fade+scale in together (fromTo, y:30→0, opacity 0→1, 0.55s, back.out(1.4)) as "the speeds of two trains" is spoken.
- 7.48s: "7 : 9" ratio chip pops in (scale+opacity, 0.45s, back.out(2)) timed to "seven is to nine" (7.48–8.34).
- 9.4s: "180 km · 2 hr" label fades up beneath the faster train (`apt.fadeIn`, 0.4s), timed to "faster train covers" (9.4).
- 15.4s: slower train icon gets a soft `apt.emphasize` pulse (scale 1→1.1 yoyo, 0.3s) timed to "the speed of the slower train" (15.40–16.80) — draws the eye to the unknown right at the end of Phase 1, just before the pin.
**CAMERA MOVEMENT:** Static frame, no camera moves — all motion is element-level.
**TRANSITIONS:** None yet; scene ends with pinFlow into Scene 2.
**EDUCATIONAL PURPOSE:** Let the viewer visually anchor "ratio 7:9" and "180 km / 2 hr belongs to the faster train" before any algebra appears.
**VISUAL HIERARCHY:** Question card > train icons > ratio chip > distance/time label.
**ATTENTION MANAGEMENT:** One new element per phrase — ratio chip, then distance label, then a pulse on the unknown train — never more than one entrance per breath.
**MOTION NOTES:** Keep both trains at rest (no driving animation) — the ratio is the message here, not motion of the trains themselves.
**CONTINUITY FROM PREVIOUS SCENE:** Cold open — nothing precedes this.

---

### SCENE 2 — Pin + Given
**TIMESTAMP:** PIN_TIME = 16.8s, GIVEN_TIME = 17.6s
**VOICEOVER:** (17.16–26.68) "Because the ratio is seven is to nine, let the speed of the slower train be seven x kilometer per hour, and let the speed of the faster train be nine x kilometer per hour."
**VISUAL OBJECTIVE:** Compress the scenario to a pinned recap, then formally state the algebraic setup.
**SCREEN LAYOUT:** Question pins to top-shrunk card; two train icons shrink into `#illus-pinned`, centered, with the "7 : 9" label persisting between them; Given SolutionCard opens center.
**ON-SCREEN ELEMENTS:**
- `#q-pinned` — shortened question text with accents.
- `#illus-pinned`: both small train icons + centered "Ratio 7 : 9" line (single icon-pair recap → centered per design.md pinned-illustration rule).
- `#card-given .solution-card` — chip "Given", math (all word-level, matching narration order exactly):
  - "Ratio of speeds = <span class="hi">7 : 9</span>"
  - "Speed of slower train = <span class="hi">7x</span>"
  - "Speed of faster train = <span class="hi">9x</span>"
**ANIMATION DETAILS:**
- 16.8s (PIN_TIME): `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 16.8)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 16.8)` fired together — real glide, not a swap.
- 16.8s: `apt.fadeOut(tl, "#serial-num", 16.8, 0.5)`.
- 17.6s (GIVEN_TIME): `apt.cardEnter(tl, "#card-given .solution-card", 17.6)`.
- 17.6s: `apt.textReveal(tl, "#card-given .math")` — reveal spans timed to real transcript.json word starts:
  - "Ratio"(17.60) "of"(18.00) "speeds"(18.09) "="(18.15) "7 : 9"(18.18, hi) — from "the ratio is seven is to nine"
  - "Speed"(19.90) "of"(20.24) "slower"(20.40) "train"(20.72) "="(20.96) "7x"(21.20, hi) — from "let the speed of the slower train be seven x"
  - "Speed"(24.00) "of"(24.34) "faster"(24.48) "train"(24.84) "="(25.08) "9x"(25.26, hi) — from "the speed of the faster train be nine x"
**CAMERA MOVEMENT:** None — pinFlow is the only motion.
**TRANSITIONS:** pinFlow glide (0.8s) is the scene's opening transition.
**EDUCATIONAL PURPOSE:** Formalizes "ratio → variables" — the algebraic move the rest of the solution depends on.
**VISUAL HIERARCHY:** Pinned question (context) → pinned trains (recap) → Given card (active focus, center).
**ATTENTION MANAGEMENT:** Reveal spans fire strictly in narration order so the eye never jumps ahead of the voice.
**MOTION NOTES:** No ambient loop needed here — this card's own text-reveal keeps it alive for its ~9.4s window (17.6–27.0).
**CONTINUITY FROM PREVIOUS SCENE:** PIN_TIME (16.8s) lands right as beat 4 ("...find the speed of the slower train") ends, so the pulse on the slower-train icon (15.4s) has already resolved before the glide begins. The pinFlow (16.8+0.8=17.6) completes at the exact moment the Given card starts fading in at GIVEN_TIME — the pinned layout and the Given card's first reveal ("Ratio") land together, no dead beat in between.

---

### SCENE 3 — Step 1: Apply the Formula
**TIMESTAMP:** GIVEN_MORPH = 27.0s → STEP1_TIME (card enter) = 28.0s → exits at STEP1_MORPH = 39.2s
**VOICEOVER:** (27.14–38.94) "Now we know the formula, speed is equal to distance divided by time. Putting the values, speed of the faster train is equal to one hundred eighty divided by two. This gives us ninety kilometer per hour."
**VISUAL OBJECTIVE:** Derive the faster train's actual numeric speed from the given distance/time.
**SCREEN LAYOUT:** Given card morphs into stack (badge "G", left column); Step 1 SolutionCard opens center.
**ON-SCREEN ELEMENTS:**
- `#stack-given .stack-card` (collapsed recap, plain fade-in via morph).
- `#card-step1 .solution-card` — chip "Step 1", math (word-level throughout):
  - "Speed = Distance ÷ Time"
  - "Speed of faster train = <span class="hi">180</span> ÷ <span class="hi">2</span>"
  - "= <span class="ans">90 km/hr</span>"
**ANIMATION DETAILS:**
- 27.0s: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 27.0)`.
- 28.0s: `apt.cardEnter(tl, "#card-step1 .solution-card", 28.0)`.
- 28.0s: `apt.textReveal(tl, "#card-step1 .math")`:
  - "Speed"(28.80) "="(29.30) "Distance"(29.60) "÷"(30.20) "Time"(30.90) — from "speed is equal to distance divided by time" (28.80–31.32)
  - "Speed"(33.10) "of"(33.40) "faster"(33.66) "train"(34.04) "="(34.42) "180"(34.82, hi) "÷"(35.72) "2"(36.40, hi) — from "speed of the faster train is equal to one hundred eighty divided by two" (33.10–36.56)
  - "="(37.06) "90 km/hr"(37.66, .ans) — from "this gives us ninety kilometer per hour" (37.06–38.94)
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** 0.8s morph in, 0.8s morph out (to Scene 4).
**EDUCATIONAL PURPOSE:** Converts the abstract formula into a concrete number (90 km/hr) the viewer can equate against 9x next.
**VISUAL HIERARCHY:** Formula line → substitution line → answer (`.ans`, primary-colored, largest visual weight).
**ATTENTION MANAGEMENT:** Formula appears first as a plain statement, then the substitution, then the result — mirrors the narration's own build-up.
**MOTION NOTES:** No pulses beyond textReveal — this is a straightforward one-shot calculation, no ambient/emphasis needed.
**CONTINUITY FROM PREVIOUS SCENE:** The Given card's box is still completing its 0.8s morph into the stack (badge "G", landing at 27.0+0.8=27.8) as Step 1's card starts fading in at 28.0s — a 0.2s breathing gap after the morph lands keeps the handoff clean without feeling disconnected.

---

### SCENE 4 — Step 2: Equate and Solve for x
**TIMESTAMP:** STEP1_MORPH = 39.2s → STEP2_TIME (card enter) = 40.2s → exits at STEP2_MORPH = 49.3s
**VOICEOVER:** (39.50–49.12) "Now that we know the actual speed of the faster train, we can equate it with the value we took earlier, which is nine x. So nine x is equal to ninety, x is equal to ten."
**VISUAL OBJECTIVE:** Connect the numeric result (90) back to the algebraic variable (9x) and solve for x.
**SCREEN LAYOUT:** Step 1 morphs into stack (badge "1"), connector line G→1 grows; Step 2 card opens center.
**ON-SCREEN ELEMENTS:**
- `#stack-step1 .stack-card`.
- `#line-g-1` connector (grown via `apt.setStackLine` + `apt.stackLineGrow`).
- `#card-step2 .solution-card` — chip "Step 2", math:
  - line-level: "Faster train speed = 9x" (bridges numeric result back to the variable, paraphrased)
  - word-level: "9x = 90"
  - word-level, `.ans`: "x = 10"
**ANIMATION DETAILS:**
- 39.2s: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 39.2)`.
- 39.2s: `apt.setStackLine("#line-g-1", "#stack-given .step-circle", "#stack-step1 .step-circle")` (called once pre-timeline, per template) + `apt.stackLineGrow(tl, "#line-g-1", 39.2)`.
- 40.2s: `apt.cardEnter(tl, "#card-step2 .solution-card", 40.2)`.
- 40.2s: `apt.textReveal(tl, "#card-step2 .math")`:
  - "Faster train speed = 9x" → data-t 39.50 (line-level, "now that we know the actual speed of the faster train")
  - "9x"(45.96) "="(46.68) "90"(47.14, hi) — from "so nine x is equal to ninety" (45.96–47.94)
  - "x"(48.16) "="(48.42) "10"(48.90, .ans) — from "x is equal to ten" (48.16–49.12)
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** 0.8s morph in/out, connector line grow-in synced to the morph.
**EDUCATIONAL PURPOSE:** The pivotal algebraic step — makes explicit that "90" and "9x" are the same quantity, so x is solvable.
**VISUAL HIERARCHY:** Bridge statement → equation → solved value (`.ans`).
**ATTENTION MANAGEMENT:** No competing motion — the connector line grow (0.5s) and morph (0.8s) both land before the card's own key reveal at 45.96s, so nothing overlaps the new information.
**MOTION NOTES:** None beyond standard reveal/morph.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1's card is mid-morph into the stack (its box tween still settling into `--primary-light` background) as the G→1 connector line begins its grow-in at the same 39.2s mark — both motions resolve together right before Step 2's card enters at 40.2s.

---

### SCENE 5 — Step 3: Solve for the Slower Train's Speed
**TIMESTAMP:** STEP2_MORPH = 49.3s → STEP3_TIME (card enter) = 50.3s → exits at STEP3_MORPH = 58.9s
**VOICEOVER:** (49.48–58.82) "Now, speed of the slower train is equal to seven into x, that is equal to seven into ten. So the speed of the slower train is seventy kilometer per hour."
**VISUAL OBJECTIVE:** Final substitution — deliver the answer the whole video has been building toward.
**SCREEN LAYOUT:** Step 2 morphs into stack (badge "2"), connector line 1→2 grows; Step 3 card opens center at the default 640px width (content fits on one line each).
**ON-SCREEN ELEMENTS:**
- `#stack-step2 .stack-card`.
- `#line-1-2` connector.
- `#card-step3 .solution-card` — chip "Step 3", math (word-level throughout):
  - "Speed of slower train = <span class="hi">7x</span>"
  - "= 7 × <span class="hi">10</span>"
  - "= <span class="ans">70 km/hr</span>"
**ANIMATION DETAILS:**
- 49.3s: `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 49.3)`.
- 49.3s: `apt.setStackLine("#line-1-2", "#stack-step1 .step-circle", "#stack-step2 .step-circle")` + `apt.stackLineGrow(tl, "#line-1-2", 49.3)`.
- 50.3s: `apt.cardEnter(tl, "#card-step3 .solution-card", 50.3)`.
- 50.3s: `apt.textReveal(tl, "#card-step3 .math")`:
  - "Speed"(49.62) "of"(49.86) "slower"(50.12) "train"(50.44) "="(50.78) "7x"(51.22, hi) — from "speed of the slower train is equal to seven into x" (49.62–52.26)
  - "="(52.60) "7"(52.98) "×"(53.28) "10"(53.56, hi) — from "that is equal to seven into ten" (52.30–53.78)
  - "="(54.26) "70 km/hr"(56.60, .ans) — "=" fires on "So the speed of the slower train is..." (54.26), the answer itself lands on "seventy" (56.60–58.82)
- (No `apt.emphasize`/`apt.resultReveal` layered on `.ans` — textReveal is the sole reveal, per design.md 9.1.)
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** 0.8s morph in, then straight into Scene 6's morph + options reveal.
**EDUCATIONAL PURPOSE:** Closes the loop — shows the final substitution arithmetic (not just the answer) so the viewer can verify it themselves.
**VISUAL HIERARCHY:** Variable restatement → substitution → final answer (largest, `.ans` primary color).
**ATTENTION MANAGEMENT:** The `.ans` span is the last thing revealed in the card and the last thing revealed before the options grid — it's the natural handoff point to Scene 6.
**MOTION NOTES:** None beyond standard.
**CONTINUITY FROM PREVIOUS SCENE:** Step 2's box is still completing its morph into `--primary-light` as the 1→2 connector grows at the same 49.3s mark, exactly mirroring Scene 4's own handoff pattern — the left stack column is now visibly three circles deep (G-1-2) with two connectors, reinforcing progress before Step 3 opens.

---

### SCENE 6 — Options Reveal
**TIMESTAMP:** STEP3_MORPH / RECENTER_TIME = 58.9s, options fade-in = 59.5s, stagger = 60.0s, correct pulse = 60.8s, END_FADE_TIME = 61.6s
**VOICEOVER:** (58.88–61.30, tail) "Hence, the correct answer is option A."
**VISUAL OBJECTIVE:** Present all four options and confirm the derived answer (70 km/hr) matches option A.
**SCREEN LAYOUT:** Illustration drops out; pinned question + stack column recenter against the now-visible options grid (2×2) on the right.
**ON-SCREEN ELEMENTS:**
- `#illus-pinned` fades out.
- `#q-pinned` recenters (`xShift:160, yShift:180`).
- `#stack-step3 .stack-card` (badge "3") + `#line-2-3` connector.
- `#options-reveal .options-grid`: A) 70 km/hr (`.correct`), B) 64 km/hr, C) 68 km/hr, D) 72 km/hr.
**ANIMATION DETAILS:**
- 58.9s: `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 58.9)`.
- 58.9s: `apt.setStackLine("#line-2-3", "#stack-step2 .step-circle", "#stack-step3 .step-circle")` + `apt.stackLineGrow(tl, "#line-2-3", 58.9)`.
- 58.9s: `apt.fadeOut(tl, "#illus-pinned", 58.9)` + `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 58.9)`.
- 59.5s: `apt.fadeIn(tl, "#options-reveal", 59.5)`.
- 60.0s: `apt.optionsStagger(tl, ".opt-btn", 60.0)`.
- 60.8s: `apt.correctPulse(tl, ".opt-btn.correct", 60.8)` — timed just after "option A" is spoken (60.78–61.30 per transcript).
- 61.6s (END_FADE_TIME): `apt.fadeOut(tl, "#root > div", 61.6, 1.2)` — everything fades together, right at the voiceover's 61.3s end.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Final morph + recenter + stagger reveal, then unified end fade.
**EDUCATIONAL PURPOSE:** Confirms the derived answer against the actual answer choices — closes the loop between algebra and the MCQ format.
**VISUAL HIERARCHY:** Options grid (equal weight A–D) → correct pulse draws the eye to A last.
**ATTENTION MANAGEMENT:** Stagger (0.12s per option) keeps the reveal from feeling like a wall of text; the pulse is the single final attention beat.
**MOTION NOTES:** Stack column (G-1-2-3 with 3 connectors) stays fully visible and unfaded throughout, per design.md's stack-line rule.
**CONTINUITY FROM PREVIOUS SCENE:** Step 3's card is still mid-morph into the stack (completing at 58.9+0.8=59.7s) as the options grid begins its own fade-in at 59.5s — the two motions overlap by design so the final stack circle and the options grid arrive as one continuous beat rather than a hard cut.

---

## PART 3: Asset List Required

- `illustration/train-slower.svg` — copy of supplied `train.svg`, tinted `--topic` (#949494) or left default black/outline (unknown train, de-emphasized)
- `illustration/train-faster.svg` — copy of supplied `train.svg`, recolored fills to `--primary` (#6373db) per README 5C rules (hex find-and-replace only, no re-path/restructure)
- No other new assets — badge/logo already in `_template/assets/`

## PART 4: Animation Complexity Notes

- Standard complexity throughout — no custom animations beyond the helper library (illustration entrances reuse the same fromTo/fadeIn/emphasize patterns, not new helpers).
- 4 solution cards total (Given + Step1 + Step2 + Step3) — matches template's stack pattern exactly (stack-given, stack-step1, stack-step2, stack-step3), no extra stack card needed beyond template.html's existing structure.
- Text-reveal granularity: entirely word-level except one line-level span (Step 2's "Faster train speed = 9x" bridge, since it paraphrases rather than quotes the narration verbatim).
- All solution-card content fits the default 640px width on one line each — no widened cards needed for this question.

## PART 5: Master Timeline Overview

```
0.3    Question card hero-enters (lowered)
3.6    Question card + badge rise to rest
4.3    Both train icons fade in
7.48   "7:9" ratio chip pops in
9.4    "180 km · 2 hr" label fades in under faster train
15.4   Slower train icon pulses (emphasize)
16.8   PIN_TIME — pinFlow (question + illustration → pinned)
17.6   GIVEN_TIME — Given card enters + text-reveal
27.0   Given → stack (morph)
28.0   Step 1 card enters + text-reveal
39.2   Step 1 → stack (morph) + line G-1 grows
40.2   Step 2 card enters + text-reveal
49.3   Step 2 → stack (morph) + line 1-2 grows
50.3   Step 3 card enters + text-reveal
58.9   Step 3 → stack (morph) + line 2-3 grows + RECENTER_TIME (illustration fades out, question recenters)
59.5   Options grid fades in
60.0   Options stagger in
60.8   Correct option (A) pulses
61.6   END_FADE_TIME — everything fades out together
```
