# Storyboard — Speed-Time-Distance Q15 (Cyclist Overtake)

Question: A cyclist is 24 km behind another cyclist. Speeds are 54 km/hr (faster) and 42 km/hr (slower). How long will the faster cyclist take to overtake?
Options: A) 3 hours  B) 2 hours ✅  C) 1.5 hours  D) 2.5 hours
Voiceover duration: 108.38s

---

## PART 1 — Narration Beat Analysis

| # | Time | Narration | Purpose | Attention focus | Visual objective |
|---|------|-----------|---------|------------------|-------------------|
| 1 | 0.1–2.84 | "Welcome back again... one more problem." | Cold open | Center screen | Question card rises in |
| 2 | 3.36–22.62 | States gap (24km), faster speed (54), slower speed (42), poses the question | Establish givens | Question + illustration | Two-cyclist illustration builds: gap bracket, then each speed label |
| 3 | 22.94–48.76 | "Let us understand..." — intuitive 1-hour demo: slower moves 42km, faster moves 54km, extra = 12km, gap shrinks 12km/hr | Build intuition for relative speed | Illustration animation | Cyclists nudge forward; "12 km" extra-distance label pops in |
| 4 | 49.16–72.1 | Recaps gap=24km; unitary-method derivation: 12km/hr → 1km/1÷12hr → 24km takes 2 hours | First solve (unitary method) | Pinned Given → Step 1 card | Given card recaps values, morphs into Step 1 deriving 2 hours |
| 5 | 72.48–90.12 | States the general rule: same-direction → relative speed = difference of speeds = 54−42 = 12 km/hr | Formalize the method | Step 2 card | Relative Speed formula card |
| 6 | 92.92–101.78 | Time = Distance ÷ Relative Speed = 24 ÷ 12 = 2 hours | Second solve (formula method), confirms answer | Step 3 card | Time formula card lands on 2 hours |
| 7 | 101.82–108.38 | "...overtake after two hours. Correct answer is option B." | Reveal | Options grid | 2×2 options, B pulses green |

---

## PART 2 — Scene-by-Scene Storyboard

### Scene 1 — Question Reveal (0–22.62s)
**Timestamp:** 0.3–22.62
**Voiceover:** "So welcome back again... How long will the faster cyclist take to overtake the slower cyclist."
**Visual objective:** Establish the question and the two-cyclist gap illustration.
**Screen layout:** `#q-full-card` centered top, `#serial-num` badge top-left overlap, `#illustration` centered mid-screen.
**On-screen elements:** QuestionCard (full), SerialNum "Q", illustration group (cyclist-fast left, gap bracket center, cyclist-slow right).
**Animation details:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.4)` — card starts lowered (vertically centered while alone), rises at 3.4s once the opening line ends. Badge parallel tween mirrors the same y-offset/rise (see template pattern). Illustration group fades/scales in at 3.6s. Gap bracket + "24 km" label pop in at 5.74s (word "twenty-four"). "54 km/hr" label under fast cyclist at 10.16s. "42 km/hr" label under slow cyclist at 13.98s.
**Camera movement:** None (static frame, motion is internal to elements).
**Transitions:** n/a (opening scene).
**Educational purpose:** Present the given values visually before any math.
**Visual hierarchy:** Question text > illustration > labels.
**Attention management:** Sequential label pop-ins guide the eye left→center→right in sync with narration order (gap, then faster speed, then slower speed).
**Motion notes:** Keep illustration entrance restrained (single fade+scale), let individual label pops carry the narration sync.
**Continuity from previous scene:** n/a — cold open.

### Scene 2 — Intuitive 1-Hour Demo (22.94–48.76s)
**Timestamp:** 25.54–47.2 (movement animation), holds to 48.76
**Voiceover:** "In one hour, the slower cyclist moves 42km... faster cyclist moves 54km... extra distance is 12km... gap reduces by only 12km."
**Visual objective:** Show *why* the gap closes at 12 km/hr, before naming it "relative speed."
**Screen layout:** Same illustration group, now animating in place.
**On-screen elements:** cyclist-slow, cyclist-fast, gap bracket, new "12 km" extra-distance chip.
**Animation details:** Slow cyclist nudges right (`translateX +40px`, 1s) starting 28.04s (word "moves"). Fast cyclist nudges right further (`translateX +55px`, 1s) starting 33.0s (word "moves", 2nd instance) — net visual closing of the gap. "12 km" extra-distance chip fades/pops in at 40.58s (word "twelve"). `apt.emphasize` pulse on the "12 km" chip at 45.7s (word "twelve", 2nd mention — "gap reduces by only twelve kilometer").
**Camera movement:** None.
**Transitions:** n/a (continues from Scene 1, same illustration group).
**Educational purpose:** Concrete, visual derivation of the 12 km/hr closing rate — the intuitive basis for "relative speed."
**Visual hierarchy:** Motion + new chip draw the eye; question card stays quietly pinned-to-be at top.
**Attention management:** Emphasize pulse on "12 km" right as the number is spoken a second time, cementing it.
**Motion notes:** Both cyclist moves are small, deliberate translations — not a full race animation; this is a diagram, not a simulation.
**Continuity from previous scene:** Same illustration elements from Scene 1, now animating in place — no new entrance, direct continuation of the same objects.

### Scene 3 — Pin + Given Recap (48.9–52.7s)
**Timestamp:** PIN_TIME 48.9, GIVEN_TIME 49.16
**Voiceover:** "Got it? Perfect. Now, the total gap between them is 24 kilometer."
**Visual objective:** Collapse Phase 1 into the pinned layout; recap the three known values before deriving the answer.
**Screen layout:** `#q-pinned` top, `#illus-pinned` (small fast-cyclist icon + "Gap = 24 km" recap line, centered) below it, `#card-given` center.
**On-screen elements:** Pinned question, pinned illustration recap, Given SolutionCard.
**Animation details:** `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 48.9)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 48.9)` — real glide, not a swap. `apt.fadeOut(tl, "#serial-num", 48.9, 0.5)`. `apt.cardEnter(tl, "#card-given .solution-card", 49.16)` then `apt.textReveal(tl, "#card-given .math")`. `apt.ambientLoop(tl, "#illus-pinned-icon", 49.7, 102.0)` on the small pinned icon (long stretch ahead).
**Camera movement:** None.
**Transitions:** pinFlow glide is the transition (0.8s, power2.inOut).
**Educational purpose:** Reset the frame around the numbers before solving.
**Visual hierarchy:** Given card center-stage; pinned elements recede to context.
**Attention management:** Given card's 3 lines land in narration-adjacent order (Faster, Slower recap immediately; "Gap = 24 km" word-synced to the live restatement).
**Motion notes:** Given card box entrance is a standard `cardEnter`; no extra flourish.
**Continuity from previous scene:** The pinned question/illustration are literally the Scene 1–2 elements gliding into their smaller slot — same objects, not new ones. Serial-num badge fades out in step with the glide since it has no pinned counterpart.

### Scene 4 — Step 1: Unitary Method → 2 Hours (52.7–72.2s)
**Timestamp:** morph-to-stack at 51.8, `card-step1` enters 52.7
**Voiceover:** "If 12km of the gap is reduced in 1 hour, then 1km in 1÷12 hour... to reduce 24km, time = 24×(1/12) = 24÷12 = 2 hours."
**Visual objective:** First full solve via unitary/ratio reasoning — lands on the answer before the formula is even named.
**Screen layout:** Given card morphs into `#stack-given` (left column, circle "G"); Step 1 card takes over center stage.
**On-screen elements:** stack-given card, `#card-step1` (4 lines: "12 km gap → 1 hour", "1 km → 1/12 hour", "24 km → 24 × 1/12", "= 2 hours").
**Animation details:** `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 51.8)` (0.8s). `apt.cardEnter(tl, "#card-step1 .solution-card", 52.7)` + `apt.textReveal(tl, "#card-step1 .math")` with lines synced at 52.1 (line-level), 55.42 (word-level w/ 1/12 fraction), 61.0 (line-level), 70.88 (ans, word-level).
**Camera movement:** None.
**Transitions:** Standard 0.8s morph.
**Educational purpose:** Deliver the answer via intuitive reasoning — the "why" before the "formula."
**Visual hierarchy:** Step 1 card center; Given stack card quietly present in the left column (first entry).
**Attention management:** The "= 2 hours" answer line (in `--primary` per `.ans` styling) lands exactly on "This gives us two hours" (70.88s) — the reveal moment.
**Motion notes:** Fraction spans (`.frac`) used for 1/12.
**Continuity from previous scene:** Given card visibly slides/shrinks into the stack — same card, not a cut. Step 1 card enters in the same center slot Given just vacated.

### Scene 5 — Step 2: Relative Speed Formula (74.0–90.3s)
**Timestamp:** morph-to-stack at 72.2, `card-step2` enters 74.0
**Voiceover:** "Now let me tell you the formula... same direction → difference of speeds → relative speed = 54−42 = 12 km/hr."
**Visual objective:** Name and formalize the method just used intuitively.
**Screen layout:** Step 1 morphs into `#stack-step1` (circle "1"), connector line G→1 grows in. Step 2 card center.
**On-screen elements:** stack-given, stack-step1, `#card-step2` (2 lines: "Same direction → use difference of speeds", "Relative Speed = 54 − 42 = 12 km/hr").
**Animation details:** `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 72.2)`; `apt.stackLineGrow(tl, "#line-g-1", 72.2)`. `apt.cardEnter(tl, "#card-step2 .solution-card", 74.0)` + `apt.textReveal` with lines at 76.0 (line-level) and 83.5 (word-level: Relative/Speed/=/54/−/42/=/12 km/hr).
**Camera movement:** None.
**Transitions:** Standard 0.8s morph; connector line grows in same beat.
**Educational purpose:** Generalize the technique so it transfers to other same-direction problems.
**Visual hierarchy:** Step 2 card center; stack column now shows G→1 connected.
**Attention management:** "12 km/hr" highlighted in `--primary`, landing on the actual spoken value.
**Motion notes:** No new illustration motion here — pure formalization, text only.
**Continuity from previous scene:** Step 1's card is the one morphing — same object continuing its journey into the stack.

### Scene 6 — Step 3: Time Formula → 2 Hours Confirmed (92.1–102.0s)
**Timestamp:** morph-to-stack at 90.3, `card-step3` enters 92.1
**Voiceover:** "Distance to be covered is 24km. Time = Distance ÷ Relative Speed = 24 ÷ 12 = 2 hours."
**Visual objective:** Second solve via the named formula — confirms the earlier unitary-method answer.
**Screen layout:** Step 2 morphs into `#stack-step2` (circle "2"), connector 1→2 grows. Step 3 card center.
**On-screen elements:** stack-given/step1/step2, `#card-step3` (3 lines: "Distance = 24 km, Relative Speed = 12 km/hr", "Time = Distance/Relative Speed", "= 24/12 = 2 hours").
**Animation details:** `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 90.3)`; `apt.stackLineGrow(tl, "#line-1-2", 90.3)`. `apt.cardEnter(tl, "#card-step3 .solution-card", 92.1)` + `apt.textReveal` at 92.1 (recap line-level), 94.72 (formula line-level, uses `.frac`), 98.96 (word-level 24÷12), 100.94 (ans "= 2 hours").
**Camera movement:** None.
**Transitions:** Standard 0.8s morph.
**Educational purpose:** Confirm the two methods agree — reinforces trust in the formula for future questions.
**Visual hierarchy:** Step 3 card center, "2 hours" in `.ans` primary blue.
**Attention management:** Second "= 2 hours" moment echoes Scene 4's — deliberate reinforcement.
**Motion notes:** Fraction span for Distance/Relative Speed.
**Continuity from previous scene:** Step 2's card is the one morphing into the stack.

### Scene 7 — Options Reveal (102.0–108.38s+)
**Timestamp:** RECENTER_TIME 102.0, options fade-in 103.0, stagger 103.4, correct pulse 107.7
**Voiceover:** "So the faster cyclist will overtake the slower cyclist after two hours. Hence, the correct answer is option B."
**Visual objective:** Confirm the answer against the 2×2 options grid.
**Screen layout:** Step 3 morphs into `#stack-step3` (circle "3"), connector 2→3 grows. `#illus-pinned` fades out, `#q-pinned` recenters via `apt.recenterForOptions`. `#options-reveal` fades in on `.pinned-col`.
**On-screen elements:** Full stack column (G/1/2/3, all connector lines visible), pinned question, 2×2 options grid, B highlighted green.
**Animation details:** `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 90.3+... )` — actually 92.1's step3 card morphs at 102.0 (see timeline); `apt.stackLineGrow(tl, "#line-2-3", 102.0)`. `apt.fadeOut(tl, "#illus-pinned", 102.0)`. `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 102.0)`. `apt.fadeIn(tl, "#options-reveal", 103.0)`. `apt.optionsStagger(tl, ".opt-btn", 103.4)`. `apt.correctPulse(tl, ".opt-btn.correct", 107.7)`. End fade over everything at 108.6 (1.2s).
**Camera movement:** None.
**Transitions:** Standard morph + recenter combo per template pattern.
**Educational purpose:** Final confirmation, ties the derived "2 hours" to option B.
**Visual hierarchy:** Options grid takes center-right stage; stack column (now complete) stays visible on the left as the full solution trail.
**Attention management:** correctPulse on option B lands exactly on the spoken "option B."
**Motion notes:** No new illustration; pure UI reveal.
**Continuity from previous scene:** Step 3 card is the one morphing into its stack slot — same object, last in the sequence, completing the G→1→2→3 trail.

---

## PART 3 — Asset List Required

- `illustration/cyclist.svg` (user-supplied, colors already match palette: `#6373db`, `#949494`, `#e2e5ff`, `#000000` — used as-is, flipped via CSS `scaleX(-1)` so both cyclists face right/direction of travel).
- Shared template assets: `serial-num-badge.svg`, `logo.png` (already copied).
- No other new assets — gap bracket, labels, chips are pure CSS/HTML.

## PART 4 — Animation Complexity Notes

- Standard helpers only: `heroEnterLowered`, `pinFlow`, `cardEnter`, `textReveal`, `morphToStack`, `stackLineGrow`, `setStackLine`, `ambientLoop`, `recenterForOptions`, `fadeIn`, `fadeOut`, `optionsStagger`, `correctPulse`, `emphasize`.
- One custom (per-question, non-`apt`) animation: the two small `translateX` nudges on the cyclist icons during the 1-hour demo (Scene 2) and the fade/pop-ins of the illustration labels — these are per-question illustration content, not shared components, consistent with `design.md`'s "Illustration" section.
- No new colors, fonts, or components introduced.

## PART 5 — Master Timeline Overview

```
0.3   q-full-card heroEnterLowered (rises @3.4)
0.8   serial-num pop (rises @3.4 in tandem)
3.6   illustration group fades in
5.74  gap bracket + "24 km" label
10.16 "54 km/hr" (faster) label
13.98 "42 km/hr" (slower) label
28.04 slow cyclist nudges +40px
33.0  fast cyclist nudges +55px
40.58 "12 km" extra-distance chip
45.7  emphasize "12 km" chip
48.9  PIN_TIME — pinFlow question + illustration; serial-num fades out
49.16 GIVEN_TIME — card-given enters + textReveal
49.7  ambientLoop starts on pinned icon
51.8  Given → stack-given morph
52.7  card-step1 enters (unitary method) + textReveal (52.1/55.42/61.0/70.88)
72.2  Step1 → stack-step1 morph + line-g-1 grows
74.0  card-step2 enters (relative speed formula) + textReveal (76.0/83.5)
90.3  Step2 → stack-step2 morph + line-1-2 grows
92.1  card-step3 enters (time formula) + textReveal (92.1/94.72/98.96/100.94)
102.0 Step3 → stack-step3 morph + line-2-3 grows; illus-pinned fades; q-pinned recenters
103.0 options-reveal fades in
103.4 optionsStagger
107.7 correctPulse on option B
108.6 END_FADE_TIME — everything fades (1.2s)
```

Total duration: ~109.8s (voiceover 108.38s + fade tail).
