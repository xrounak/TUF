# Storyboard — "Relative Speed, Same Direction" (Trains, Streams and Boats — Q15)

Question: *Two trains move in the same direction at 70 km/h and 52 km/h. What is their relative speed?*
Options: A) 15.84 km/h  B) 20.16 km/h  **C) 18 km/h (correct)**  D) 22.32 km/h
Voiceover: `voiceover.wav` — duration **62.659s**
Transcript: `transcript.json` / `transcript.txt`

Sibling reference: `Trains Streams Boats/q11` (relative speed, opposite directions) supplies the base
two-train-on-a-rail illustration technique and the single-Given/single-Step card structure. This is
the **same-direction counterpart** of q11, and it is simpler in one specific way: q11's script taught
BOTH rules (same-direction → subtract, opposite-direction → add) via a two-state crossfading
concept-demo panel, because its own question was the "add" case and needed to first isolate the
general rule before confirming which branch applied. q15's script only ever states one rule (same
direction → subtract) — there is no "but what if opposite" detour in the narration — so the concept
beat here is a single confirmatory demonstration, not a crossfade: the first (faster, 70 km/hr) train
visibly closes the gap on the second (slower, 52 km/hr) train, literally showing "catching up" instead
of contrasting two abstract states. A single `#rule-tag` states the confirmed rule once ("Same
Direction → Subtract Speeds"), then hands off to `#formula-tag` for the literal formula — no new
component invented, both reuse the `.tag-pill` pattern already established in q10/q11.

---

## PART 1 — Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|---|---|---|---|---|
| 1 | 0.119–3.98 | "So welcome back again. It's time to solve one more problem." | Cold open | Question card rising in | Establish frame |
| 2 | 4.46–15.939 | "Now, in this problem, we are given that two trains are moving in the same direction. The speed of the first train is seventy kilometers per hour, and the speed of the second train is fifty-two kilometers per hour." | State the scenario + both givens | Rail sweeps in; both trains fade onto the track already facing the same way (Train A trailing, Train B leading); same-direction chevrons pop on "direction"; "70 km/hr" badge lands on "seventy"; "52 km/hr" badge lands on "fifty-two" | The layout itself — both trains facing right, one behind the other — visually states "same direction" before the concept beat even begins |
| 3 | 16.319–20.42 | "The question is asking us to find their relative speed." | Frame the unknown | "Relative Speed = ?" tag fades in on "relative" | Plant the target quantity |
| 4 | 20.899–23.539 | "Now, the important words here are same direction." | Flag the key phrase | Same-direction chevrons pulse via `apt.emphasize` on "same" | Draws the eye back to the exact detail that decides the rule |
| 5 | 24.26–25.039 | "What does this mean?" | Rhetorical pause | Scene holds | Beat before the payoff |
| 6 | 25.439–32.779 | "It means both trains are moving one behind the other, so one train is not coming towards the other. Instead, one train is only catching up with the other." | Deliver the concept | Train A (faster, trailing) glides forward, visibly closing the gap on Train B (slower, leading) | "Catching up" made literal — not a crossfade between abstract states, a real demonstration of this exact scenario |
| 7 | 33.18–40.619 | "Because of this, we do not add the speeds. We always take the difference of their speeds. This is a simple rule to remember." | State the rule verbally | `#rule-tag` ("Same Direction → Subtract Speeds") fades in on "Because" | Confirms the rule just demonstrated, in words |
| 8 | 41.02–46.339 | "If two objects move in the same direction, relative speed equals difference of their speeds. Got it?" | State the formula | `#rule-tag` fades out; `#formula-tag` builds word-by-word, landing on its own matching words | "Relative Speed = Difference of Speeds", made literal |
| 9 | 46.84–49.239 | "Perfect. Now let us put the given values." | Bridge into solving | `PIN_TIME` fires right after "Got it?" (46.339); this line plays over the already-pinned stage | Mirrors the `PIN_TIME`→`GIVEN_TIME` gap convention used throughout this topic |
| 10 | 49.319–54.739 | "Relative speed equals seventy minus fifty-two. After subtracting, we get eighteen kilometers per hour." | Step 1 — the only computation | Step 1 card, word-level reveal | "Relative Speed = 70 − 52" → "= 18 km/hr" |
| 11 | 55.559–60.459 | "Hence, the relative speed of the two trains is eighteen kilometer per hour." | Recap before reveal | Step 1 card holds | Reinforces the answer |
| 12 | 60.899–62.659 | "So the final answer will be option C." | Reveal | Options grid, C pulses green | Confirm against the four choices |

---

## PART 2 — Scene-by-Scene Storyboard

Design constraints in force throughout (per `_template/README.md` §4D.1): only `--primary #6373db`,
`--primary-light #e2e5ff`, `--success #4eb85f`, `--topic #949494`, `--text #000000`, `--bg #FFFFFF`;
only `QuestionCard`/`SerialNum`/`SolutionCard`/`SolutionStackCard`/`solutionChip`/`StepCircle`/
`StackLine`/options-grid/`logo`/`topic-name`/`bottomStrip`/Illustration/`Fraction`; only the helpers
in `animations.js`, called explicitly by name below. Illustration asset: `illustration/train.svg`
(copied from `Trains Streams Boats/q11/illustration/train.svg`, used unmirrored for both trains — no
SVG edits, only CSS positioning).

### SCENE 1 — Cold Open (0.0s – 3.98s)
**VOICEOVER:** "So welcome back again. It's time to solve one more problem."
**VISUAL OBJECTIVE:** Establish the question, hero-style.
**SCREEN LAYOUT:** `#q-full-card` centered, lowered per `apt.heroEnterLowered`, at `top:80px`, containing "Two trains move in the same direction at 70 km/hr and 52 km/hr. What is their relative speed?" with "70 km/hr", "52 km/hr", "same direction" and "relative speed" in `.num` blue.
**ON-SCREEN ELEMENTS:** QuestionCard (full), SerialNum badge ("Q").
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.98)` — lowered pose at 0.3s, rises to rest at 3.98s (end of "problem."). SerialNum mirrors with its own parallel tween (pop at 0.8s, rise at 3.98s).
**CAMERA MOVEMENT:** None. **TRANSITIONS:** N/A (opening beat).
**EDUCATIONAL PURPOSE:** Anchor the problem before anything else competes for attention.
**VISUAL HIERARCHY:** QuestionCard > SerialNum > (empty illustration area).
**ATTENTION MANAGEMENT:** Nothing else on screen yet.
**MOTION NOTES:** The rise finishes exactly as "problem" is spoken.
**CONTINUITY FROM PREVIOUS SCENE:** N/A — first scene.

### SCENE 2 — Rail + Two Trains Assemble, Same Direction Stated (4.46s – 15.939s)
**VOICEOVER:** "Now, in this problem, we are given that two trains are moving in the same direction. The speed of the first train is seventy kilometers per hour, and the speed of the second train is fifty-two kilometers per hour."
**VISUAL OBJECTIVE:** Establish two distinct trains, both already facing the same way (visual proof of "same direction") — Train A trailing on the left, Train B leading on the right — then attach each real speed to its own train.
**SCREEN LAYOUT:** `#illustration` (1400×320, centered, `top:430px`): rail spanning the full width; Train A at `left:80px`, unmirrored (facing right); Train B further along at `left:520px`, also unmirrored (facing right, same orientation as A).
**ON-SCREEN ELEMENTS:** `#rail` (sleeper-tie track), `#train-a-unit` (train.svg) + `#speed-badge-a` ("70 km/hr"), `#train-b-unit` (train.svg) + `#speed-badge-b` ("52 km/hr"), `#same-dir-arrows` (two CSS border-triangle chevrons, both pointing right, centered between the trains).
**ANIMATION DETAILS:**
- 4.46s: `apt.roadSweep(tl, "#rail", 4.46)` — track draws in left→right.
- 6.379s (word "two"): `apt.cardEnter(tl, "#train-a-unit", 6.379)` and `apt.cardEnter(tl, "#train-b-unit", 6.379)` — both trains fade/scale onto the rail simultaneously, already same-facing.
- 7.799s (word "direction."): `apt.cardEnter(tl, "#same-dir-arrows", 7.799)` — both chevrons pop in between the trains, both pointing the same way.
- 10.679s (word "seventy"): `apt.cardEnter(tl, "#speed-badge-a", 10.679)`.
- 14.699s (word "fifty-two"): `apt.cardEnter(tl, "#speed-badge-b", 14.699)`.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Continuous build, no cuts.
**EDUCATIONAL PURPOSE:** "Same direction" is shown, not just told — both trains are physically arranged facing the same way from the very first frame they appear.
**VISUAL HIERARCHY:** Trains (foreground) > same-dir-arrows (accent) > rail (ambient).
**ATTENTION MANAGEMENT:** One badge reveals at a time, in narration order.
**MOTION NOTES:** No motion yet — the scene is static until the concept-teaching beat.
**CONTINUITY FROM PREVIOUS SCENE:** Question card has just settled into its resting hero position; illustration fills in directly beneath it, no cut.

### SCENE 3 — Target Framed (16.319s – 20.42s)
**VOICEOVER:** "The question is asking us to find their relative speed."
**VISUAL OBJECTIVE:** Plant the unknown.
**SCREEN LAYOUT:** Same as Scene 2, plus a tag above the scene.
**ON-SCREEN ELEMENTS:** `#target-tag` ("Relative Speed = ?").
**ANIMATION DETAILS:** 19.359s (word "relative"): `apt.cardEnter(tl, "#target-tag", 19.359)`.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Continuous. **EDUCATIONAL PURPOSE:** Names the goal before the concept explanation begins.
**VISUAL HIERARCHY:** Target tag (new focal point) > trains (established, steady).
**ATTENTION MANAGEMENT:** Single new reveal. **MOTION NOTES:** n/a.
**CONTINUITY FROM PREVIOUS SCENE:** Trains and badges remain exactly as Scene 2 left them.

### SCENE 4 — "Same Direction" Flagged (20.899s – 23.539s)
**VOICEOVER:** "Now, the important words here are same direction."
**VISUAL OBJECTIVE:** Draw the eye back to the exact phrase that decides the rule.
**SCREEN LAYOUT:** Unchanged.
**ON-SCREEN ELEMENTS:** None new — a pulse on the existing chevrons.
**ANIMATION DETAILS:** 22.739s (word "same"): `apt.emphasize(tl, "#same-dir-arrows", 22.739)`.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Continuous.
**EDUCATIONAL PURPOSE:** Highlights the key phrase right as it's spoken.
**VISUAL HIERARCHY:** Same-dir-arrows (momentary focal point) > everything else (steady).
**ATTENTION MANAGEMENT:** One pulse, no competing reveal.
**MOTION NOTES:** n/a.
**CONTINUITY FROM PREVIOUS SCENE:** Direct continuation of Scene 3's held frame.

### SCENE 5 — Concept Beat: Train A Catches Up (24.26s – 32.779s)
**VOICEOVER:** "What does this mean? It means both trains are moving one behind the other, so one train is not coming towards the other. Instead, one train is only catching up with the other."
**VISUAL OBJECTIVE:** Physically demonstrate "same direction, one behind the other, catching up" — the single most important conceptual leap in this problem, given a dedicated, mostly-wordless visual proof.
**SCREEN LAYOUT:** `#train-a-unit` glides `x:0→200` over the concept-beat span (`ease:"none"`), closing the gap on the stationary `#train-b-unit`.
**ON-SCREEN ELEMENTS:** No new elements — only the existing trains move.
**ANIMATION DETAILS:**
- "What does this mean?" (24.26–25.039) holds with no new motion — a deliberate rhetorical pause.
- 25.439s: `tl.to("#train-a-unit", {x:200, duration:7.34, ease:"none"}, 25.439)` — Train A (the faster, first train) drifts forward, arriving visibly closer to Train B right as "with the other." finishes (32.779s).
**CAMERA MOVEMENT:** None. **TRANSITIONS:** No cuts — additive motion layered on the Scene 2 illustration.
**EDUCATIONAL PURPOSE:** "Catching up" is shown, not just told.
**VISUAL HIERARCHY:** Train A's glide (momentary focal point) > steady Train B, badges, tags.
**ATTENTION MANAGEMENT:** One continuous glide — no competing reveals.
**MOTION NOTES:** The glide is the ONLY motion in this scene, deliberately unhurried to match the narration span it carries.
**CONTINUITY FROM PREVIOUS SCENE:** Train A inherits its exact Scene 2 position (x=80, static) and starts moving from there.

### SCENE 6 — Rule Statement (33.18s – 40.619s)
**VOICEOVER:** "Because of this, we do not add the speeds. We always take the difference of their speeds. This is a simple rule to remember."
**VISUAL OBJECTIVE:** Confirm, in words, the rule just demonstrated physically.
**SCREEN LAYOUT:** `#rule-tag` positioned below the rail (`top:220px` within the illustration, centered), same slot `#formula-tag` will occupy next.
**ON-SCREEN ELEMENTS:** `#rule-tag` — "Same Direction → Subtract Speeds".
**ANIMATION DETAILS:**
- Train A settles at its Scene 5 end position (x=200); no further motion.
- 33.18s (word "Because"): `apt.cardEnter(tl, "#rule-tag", 33.18)`.
- 40.619s (end of "remember."): `apt.fadeOut(tl, "#rule-tag", 40.619)` — clears before the formula tag takes the same slot.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Continuous.
**EDUCATIONAL PURPOSE:** Converts the physical demonstration into the exact rule the viewer needs to apply.
**VISUAL HIERARCHY:** Rule tag is the sole new focal point.
**ATTENTION MANAGEMENT:** Single reveal, held, then cleared.
**MOTION NOTES:** n/a.
**CONTINUITY FROM PREVIOUS SCENE:** Trains hold their Scene 5 end positions throughout.

### SCENE 7 — Formula Reveal (41.02s – 46.339s)
**VOICEOVER:** "If two objects move in the same direction, relative speed equals difference of their speeds. Got it?"
**VISUAL OBJECTIVE:** Build the literal formula word-by-word, each spoken word landing on its own symbolic match.
**SCREEN LAYOUT:** `#formula-tag` in the same slot `#rule-tag` just vacated.
**ON-SCREEN ELEMENTS:** `#formula-tag` — "Relative Speed = Difference of Speeds".
**ANIMATION DETAILS:**
- 42.86s: `apt.cardEnter(tl, "#formula-tag", 42.86)` — box fades in right as its first word is spoken.
- `apt.textReveal(tl, "#formula-tag")`, word-level, mapped almost 1:1 onto the narration: "Relative"@42.86, "Speed"@43.259, "="@43.579 (equals), "Difference"@44.34, "of"@44.779 (of), "Speeds"@45.159 (their speeds).
- Formula holds through "Got it?" (45.979–46.339) — no new reveal.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Direct continuation from Scene 6.
**EDUCATIONAL PURPOSE:** Converts the physical demonstration into the exact rule the viewer needs to apply.
**VISUAL HIERARCHY:** Formula tag is the sole new focal point.
**ATTENTION MANAGEMENT:** Each word reveals exactly as spoken — no double-animation.
**MOTION NOTES:** This is the payoff of the whole Phase 1 illustration; nothing competes with it.
**CONTINUITY FROM PREVIOUS SCENE:** Trains continue holding their Scene 5 end positions, unchanged, while the formula tag becomes the new focus.

### SCENE 8 — Pin + Given Card (46.4s – 49.319s)
**VOICEOVER:** *(bridging beat, no new reveal)* "Perfect. Now let us put the given values."
**VISUAL OBJECTIVE:** Reorganize into Phase 2 layout, then formalize the two speeds into the Given card, recapped quickly since both were already fully anchored in Phase 1.
**SCREEN LAYOUT:** `#q-pinned` at `left:385px; top:30px; width:1275px`. `#illus-pinned` at `left:660px; top:190px; width:700px; height:150px` (two mini trains, same orientation, "Train 1 = 70 km/hr" / "Train 2 = 52 km/hr", a "−" operator between them). `#card-given .solution-card` centered at `left:50%; top:660px`.
**ON-SCREEN ELEMENTS:** Pinned QuestionCard (shorter text). Pinned illustration: two mini trains + "−" + labels. Given card opens with chip "Given", two lines: "Train 1 Speed = 70 km/hr", "Train 2 Speed = 52 km/hr".
**ANIMATION DETAILS:**
- `PIN_TIME = 46.4` — fires right after "Got it?" finishes (46.339). `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 46.4)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 46.4)` fired together (pinFlow's own content-crossfade clears the rule-tag/formula-tag/badges without a separate manual fadeOut). `apt.fadeOut(tl, "#serial-num", 46.4, 0.5)`.
- "Perfect. Now let us put the given values." (46.84–49.239) plays over the already-pinned stage — a deliberate bridging gap, no new reveal (mirrors the `PIN_TIME`→`GIVEN_TIME` gap convention from q6/q13/q14).
- `GIVEN_TIME = 46.6` — `apt.cardEnter(tl, "#card-given .solution-card", 46.6)`.
- `apt.textReveal(tl, "#card-given .math")` — no fresh narration restates these values here, so both lines reveal in quick succession: `data-t="46.6"` "Train 1 Speed = 70 km/hr", `data-t="47.0"` "Train 2 Speed = 52 km/hr".
- `apt.ambientLoop(tl, "#illus-pinned-icon-a", 47.4, 60.899)` and `apt.ambientLoop(tl, "#illus-pinned-icon-b", 47.4, 60.899)` — small bob on both pinned train icons through the whole solving stretch.
**CAMERA MOVEMENT:** The pin-flow glide. **TRANSITIONS:** `apt.pinFlow`'s real glide (0.8s), not a cut.
**EDUCATIONAL PURPOSE:** Converts the illustration's already-anchored speeds into a formal Given card.
**VISUAL HIERARCHY:** Given card (center) > pinned question (top) > pinned recap (ambient).
**ATTENTION MANAGEMENT:** Two facts reveal in the same order as Scene 2 (train 1, then train 2).
**MOTION NOTES:** The pinned recap's ambient bob is what keeps this scene from reading static.
**CONTINUITY FROM PREVIOUS SCENE:** The formula tag from Scene 7 has just settled; the pin fires right after, keeping the take continuous.

### SCENE 9 — Given → Stack, Step 1: The Only Computation (49.319s – 62.659s)
**VOICEOVER:** "Relative speed equals seventy minus fifty-two. After subtracting, we get eighteen kilometers per hour. Hence, the relative speed of the two trains is eighteen kilometer per hour. So the final answer will be option C."
**VISUAL OBJECTIVE:** Apply the formula from Scene 7 directly: relative speed = 70 − 52, then reveal the correct option.
**SCREEN LAYOUT:** `#stack-given .stack-card` at `left:100px; top:140px` (badge "G"), `#stack-step1 .stack-card` below it (badge "1", `top` computed at runtime by `layoutStack()` from Given's real rendered height, gap 40px). `#card-step1 .solution-card` centered at `left:640px; top:480px`. `.pinned-col` options grid at `top:400px`.
**ON-SCREEN ELEMENTS:** Step 1 card, chip "Step 1", math: "Relative Speed = 70 − 52" / "= 18 km/hr". `.stack-line` connector `#line-g-1` between badges "G" and "1". Then the stack stays visible, options grid (A 15.84 / B 20.16 / C 18 / D 22.32) fades in with C highlighted green.
**ANIMATION DETAILS:**
- `GIVEN_MORPH_TIME = 49.319`: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 49.319)` (completes 50.119) — fires right as "Relative speed equals..." begins.
- `STEP1_TIME = 49.319`: `apt.cardEnter(tl, "#card-step1 .solution-card", 49.319)` — Step 1's own cardEnter overlaps the Given morph, matching the precedent in `Trains Streams Boats/q14`'s Given→Step1 transition.
- `apt.textReveal(tl, "#card-step1 .math")`, word-level:
  - "Relative"@49.319, "Speed"@49.719, "="@49.979 (equals), "70"(hi)@50.779 (seventy), "−"@51.18 (minus), "52"(hi)@51.479 (fifty-two).
  - "="@52.559 (After) → "18 km/hr"(ans)@53.639 (eighteen).
- Card holds through "Hence, the relative speed of the two trains is eighteen kilometer per hour." (55.559–60.459) — no new reveal.
- `RECENTER_TIME = 60.899` (fires as "So the final answer..." begins) — `apt.fadeOut(tl, "#illus-pinned", 60.899)`, `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 60.899)`.
- Step 1 joins the stack at the SAME `RECENTER_TIME` — `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 60.899)` and `apt.stackLineGrow(tl, "#line-g-1", 60.899)` (the G→1 connector, positioned via `apt.setStackLine` at build time from the two circles' real rendered centers).
- `apt.fadeIn(tl, "#options-reveal", 61.1)`.
- `apt.optionsStagger(tl, ".opt-btn", 61.3)`.
- `apt.correctPulse(tl, ".opt-btn.correct", 62.1)` (lands right on "option C." at 62.099–62.659).
- `END_FADE_TIME = 63.2` — `apt.fadeOut(tl, "#root > div", 63.2, 1.0)`.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Two 0.8s morphs (Given, then Step 1) + recenter glide + options stagger + pulse, then synchronized full-frame fade-out.
**EDUCATIONAL PURPOSE:** Delivers the payoff — the concept from Scene 5 becomes the single subtraction here.
**VISUAL HIERARCHY:** Step 1 card → options grid (sequential focal shift) > completed G/1 stack (left, archived) > pinned question.
**ATTENTION MANAGEMENT:** `correctPulse` on option C is the terminal focal point.
**MOTION NOTES:** No `apt.emphasize`/`apt.resultReveal` layered onto the textReveal-driven card.
**CONTINUITY FROM PREVIOUS SCENE:** Given card's morph begins right as Scene 8 settles; Step 1's card holds unchanged, then morphs into the stack at the same instant the layout recenters for options.

---

## PART 3 — Asset List Required

| Asset | Source | Notes |
|---|---|---|
| `illustration/train.svg` | Copied from `Trains Streams Boats/q11/illustration/train.svg` | Used as-is, unmirrored for BOTH trains (same direction — no `scaleX(-1)` needed, unlike q11's opposite-direction pair) |
| Rail track | CSS-only (`#rail`) | Sleeper-tie pattern via `repeating-linear-gradient`, same technique as q1/q11 |
| Same-direction chevrons | CSS-only (border-triangle), same technique as q11's `.chevron-right` | Both pointing right (vs. q11's inward-facing pair) |
| `design-system.css`, `animations.js`, `assets/` | Copied from `_template/` | Per README §5B |

No new colors, fonts, or template components introduced — `#rule-tag` and `#formula-tag` both reuse
the `.tag-pill` pattern already established in q10/q11.

## PART 4 — Animation Complexity Notes

- Standard patterns only: `heroEnterLowered`, `roadSweep`, `cardEnter` (×7), `emphasize` (×1),
  `textReveal` (×3 — formula-tag, Given, Step 1), `pinFlow` (×2, paired), `morphToStack` (×2 — Given,
  then Step 1), `stackLineGrow`/`setStackLine` (×1), `ambientLoop` (×2), `fadeOut`, `fadeIn`,
  `recenterForOptions`, `optionsStagger`, `correctPulse`.
- `apt.textReveal` is used on `#formula-tag` (an illustration element, not a solution/stack card) —
  the helper only needs a container selector with `.rv` children, same reuse as q6/q14.
- **No concept-demo crossfade** (unlike q11): the script only ever teaches the same-direction rule,
  so a single `#rule-tag` states it once, then hands off to `#formula-tag` in the same slot — simpler
  than q11's two-state `#concept-same`/`#concept-opposite` panel because there is no second rule to
  contrast against within this narration.
- **Confirmatory drift is one-directional:** only Train A (the faster train) moves, closing the gap
  on the stationary Train B — a direct visual match for "catching up," as opposed to q11's two-train
  mutual convergence (which fit "coming towards each other").
- `layoutStack()` (copied verbatim from q10/q11/q14) self-measures the two stack cards' real rendered
  heights at build time rather than hand-guessing their `top` values.
- 2 stack cards (`stack-given`, `stack-step1`) with one connector line (`line-g-1`) between them —
  Step 1's morph fires at `RECENTER_TIME`, the same instant the layout recenters for options, matching
  the "last step joins the stack right before the reveal" pattern used across this topic.
- No double-animation risk: text-reveal-driven cards never also get `emphasize`/`resultReveal`.
- No `apt.stepFlow` used (correctly dropped per README §4D.1).

## PART 5 — Master Timeline Overview

```
0.0    Phase 1 starts — QuestionCard hero (lowered) enters
0.8    SerialNum badge pop
3.98   QuestionCard + badge rise to resting position
4.46   Rail — roadSweep
6.379  Train A + Train B enter (already same-facing)
7.799  Same-direction chevrons enter
10.679 "70 km/hr" badge (word "seventy")
14.699 "52 km/hr" badge (word "fifty-two")
19.359 "Relative Speed = ?" target tag (word "relative")
22.739 Same-direction chevrons emphasize (word "same")
[ Concept beat ]
25.439–32.779  Train A glides x:0→200, closing the gap on Train B (linear, "catching up")
33.18  Rule tag enters: "Same Direction → Subtract Speeds"
40.619 Rule tag fades out
42.86  Formula tag enters; word-level reveal begins (42.86–45.159)
45.979–46.339  "Got it?" — formula tag holds
[ PIN_TIME = 46.4 ]
46.4   pinFlow: question + illustration glide to pinned slots (0.8s)
46.6   Given card enters, quick-succession reveal (both lines by ~47.0)
46.84–49.239  "Perfect. Now let us put the given values" — bridging beat, no new reveal
47.4–60.899   ambientLoop on both pinned train icons
[ 49.319 ]  Given → stack morph (badge "G"); Step 1 card enters (overlapping)
49.319–53.639  Word-level reveal: 70 − 52 = 18 km/hr
55.559–60.459  Step 1 card holds (recap sentence)
[ RECENTER_TIME = 60.899 ]
60.899 illus-pinned fades out; q-pinned recenters; Step 1 → stack morph (badge "1"); line-g-1 grows
61.1   options-reveal fades in
61.3   options stagger in
62.1   correctPulse on option C
[ END_FADE_TIME = 63.2 ]  full-frame fade out (1.0s)
~64.2  End
```

**Video duration:** 62.659s (matches `voiceover.wav` exactly).
