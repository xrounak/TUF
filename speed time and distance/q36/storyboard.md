# Storyboard — Data Sufficiency: "Is the Car's Average Speed Above 60 km/hr?"

Topic: Speed, Time and Distance · Question 36 · Voiceover duration: **128.16s**

q36 is the first Data Sufficiency (DS) question among the "speed time and distance" siblings (q1–q40 are all direct arithmetic problems). There is no single numeric unknown to solve for — the narration instead teaches a concept (Avg Speed = Distance ÷ Time, need BOTH), then tests two statements independently, then combines them. Built as a structural cousin of [q13](../q13/index.html)/[q6](../q6/index.html) for the car+road illustration technique, but the Given/Step cards are repurposed: **Given = the formula/concept anchor** (not raw given values, since those don't exist yet at that point), **Step 1/2 = Statement I / Statement II** (each independently "Not Sufficient"), **Step 3 = Combined** (the "divide by a smaller value → bigger result" insight that makes the answer "Sufficient"). No red/error color exists in the design system, so "Not Sufficient" is rendered in the same `--primary` blue as every other emphasized value — never invented as a new "danger" color.

---

## PART 1 — Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|---|---|---|---|---|
| 1 | 0.14–4.24 | "So welcome back again. Time for one more problem." | Warm open | Question card rising in | Establish frame |
| 2 | 4.84–8.92 | "Now in this problem, we have a data sufficiency question." | Flag the question TYPE before its content | Car + road illustration builds in | Signal this video plays differently from siblings |
| 3 | 9.52–14.41 | "We need to find whether the car's average speed is above sixty kilometer per hour." | State the actual question | QuestionCard text (already visible) | The goal to keep in mind throughout |
| 4 | 15.08–19.87 | "Now, before checking the statements, let us understand one simple concept. We know" | Bridge into the prerequisite concept | Car/road holds, formula about to appear | Signals "concept first, statements later" |
| 5 | 20.28–25.48 | "average speed is equal to total distance divided by total time." | THE formula | `#formula-tag` ("Avg Speed = Distance ÷ Time") | Formula lands as its own narrated beat |
| 6 | 25.88–31.5 | "So to find the average speed, we must know both the distance and the time." | The core DS insight — BOTH values are required | `#label-distance` then `#label-time` pop in beside the car | Visually plants the two unknowns the whole video will test for |
| 7 | 32.16–37.18 | "If even one of them is missing, we cannot answer the question. Got it? Perfect." | Reinforce the rule | Both labels pulse together | Confirms the rule before it's applied |
| 8 | 37.74–55.66 | "Now let us check statement one. It says the car covers 180 km... we do not know the time... Hence, statement one alone is not sufficient." | Test Statement I in isolation | Step 1 card: Distance known, Time unknown → Not Sufficient | First application of the rule from beat 7 |
| 9 | 56.18–72.29 | "Now let us check statement two. It says the journey takes less than 3 hours... the distance is not given... statement two alone is also not sufficient." | Test Statement II in isolation | Step 2 card: Time known (as a bound), Distance unknown → Not Sufficient | Mirror of beat 8, other value missing |
| 10 | 72.78–119.62 | "Now let us use both statements together... Average speed = 180 ÷ (a value less than 3)... if we divide by a smaller value the answer becomes bigger... so the average speed must be greater than sixty." | THE key reasoning step — combine + the division insight | Step 3 "Combined" card, multi-beat reveal | The single hardest idea in the video: smaller divisor ⇒ bigger quotient |
| 11 | 120.06–125.46 | "Hence, both statements together are sufficient, but neither statement alone is sufficient." | Final verdict | Step 3 card's closing line | Directly maps to option C's wording |
| 12 | 125.94–128.16 | "So the correct answer is option C." | Reveal | Options grid, C pulses green | Confirm against all four choices |

---

## PART 2 — Scene-by-Scene Storyboard

Design constraints in force throughout (per `_template/README.md` §4D.1): only `--primary #6373db`, `--primary-light #e2e5ff`, `--success #4eb85f`, `--topic #949494`, `--text #000000`, `--bg #FFFFFF`; only `QuestionCard`/`SerialNum`/`SolutionCard`/`SolutionStackCard`/`solutionChip`/`StepCircle`/`StackLine`/options-grid/`logo`/`topic-name`/`bottomStrip`/Illustration/Fraction; only the helpers in `animations.js`. Illustration asset: `illustration/car.svg` (copied from [q32](../q32/illustration/car.svg), untouched — same brand-colored car used across the car-themed siblings).

### SCENE 1 — Cold Open (0.0s – 4.24s)
**VOICEOVER:** "So welcome back again. Time for one more problem."
**VISUAL OBJECTIVE:** Establish the question, hero-style.
**SCREEN LAYOUT:** `#q-full-card` centered, lowered per `apt.heroEnterLowered`, width 1600px (wider than the ~1500px default — this question's 3-sentence DS text needs the extra room), containing: "Is the car's **average speed** above **60 km/hr**?<br>Statement I: The car covers **180 km**.<br>Statement II: The journey takes less than **3 hours**."
**ON-SCREEN ELEMENTS:** QuestionCard (full), SerialNum badge ("Q").
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.6)`; SerialNum parallel tween mirrors the same lowered→rest motion.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** N/A (opening).
**EDUCATIONAL PURPOSE:** Anchor the full DS prompt (both statements, verbatim) before anything else — the viewer needs to hold all three facts (the threshold, Statement I, Statement II) in mind for the entire video.
**VISUAL HIERARCHY:** QuestionCard > SerialNum > (empty illustration area).
**ATTENTION MANAGEMENT:** Nothing else on screen yet.
**MOTION NOTES:** The rise completes exactly as "problem." is spoken.
**CONTINUITY FROM PREVIOUS SCENE:** N/A — first scene.

### SCENE 2 — "Data Sufficiency" + Car/Road Builds (4.84s – 19.87s)
**VOICEOVER:** "Now in this problem, we have a data sufficiency question. We need to find whether the car's average speed is above sixty kilometer per hour. Now, before checking the statements, let us understand one simple concept. We know"
**VISUAL OBJECTIVE:** Build the car+road scene as the concrete anchor for the abstract formula that's about to be taught.
**SCREEN LAYOUT:** `#illustration` (`.car-scene`, 900×220) — road line, then car icon settles onto it.
**ON-SCREEN ELEMENTS:** `.road` (thin black bar), `#car-icon` (180×180, `illustration/car.svg`).
**ANIMATION DETAILS:**
- 4.9s: `apt.roadSweep(tl, "#car-scene .road", 4.9)` — road draws in left→right.
- 5.3s: `apt.cardEnter(tl, "#car-icon", 5.3)` — car settles onto the road.
- 5.3s–37.74s: `apt.ambientLoop(tl, "#car-icon", 5.3, 37.74)` — small idle bob; the car never drives anywhere in this video (there's no distance/speed to animate yet — that's the whole point of the question), so a bob keeps it from reading as a dead prop.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Continuous build.
**EDUCATIONAL PURPOSE:** Gives "the car's average speed" a concrete subject to point at once the formula and the two missing-value labels appear.
**VISUAL HIERARCHY:** QuestionCard (primary, already settled) > car/road (secondary, building).
**ATTENTION MANAGEMENT:** Road first, then car — sequential, not simultaneous.
**MOTION NOTES:** The car's idle bob is deliberately unremarkable — this is not a "drive to solve" video like the arithmetic siblings.
**CONTINUITY FROM PREVIOUS SCENE:** QuestionCard is at rest; illustration fills the empty space beneath it, no cut.

### SCENE 3 — The Formula (20.28s – 25.48s)
**VOICEOVER:** "average speed is equal to total distance divided by total time."
**VISUAL OBJECTIVE:** Land the prerequisite formula as its own beat, directly under the car.
**SCREEN LAYOUT:** `#formula-tag` — a small text tag centered beneath the car/road.
**ON-SCREEN ELEMENTS:** `#formula-tag` ("Avg Speed = " + `.frac` "Distance/Time").
**ANIMATION DETAILS:** `apt.cardEnter(tl, "#formula-tag", 20.28)` — timed exactly to "average speed is equal to..." starting.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Continuous.
**EDUCATIONAL PURPOSE:** The formula every later step depends on, taught once, cleanly, before any statement talk.
**VISUAL HIERARCHY:** Formula tag (new, primary attention) > car/road (settled, secondary).
**ATTENTION MANAGEMENT:** Nothing else moves while the formula lands.
**MOTION NOTES:** Simple `cardEnter` — no emphasis pulse yet (that's reserved for the "both values" rule in Scene 4).
**CONTINUITY FROM PREVIOUS SCENE:** Car is already idly bobbing; formula tag appears in the empty space below it.

### SCENE 4 — "We Must Know BOTH" (25.88s – 37.18s)
**VOICEOVER:** "So to find the average speed, we must know both the distance and the time. If even one of them is missing, we cannot answer the question. Got it? Perfect."
**VISUAL OBJECTIVE:** The single most important rule in the video — both values are required — planted visually before either statement is tested, so Statements I/II's "Not Sufficient" verdicts feel inevitable rather than arbitrary.
**SCREEN LAYOUT:** `#label-distance` and `#label-time` — two small pill-style labels flanking the car (left and right respectively), each reading "Distance = ?" / "Time = ?" with the "?" in `--primary`.
**ON-SCREEN ELEMENTS:** `#label-distance`, `#label-time`, wrapped together in `#need-both-wrap` for a shared pulse.
**ANIMATION DETAILS:**
- 29.84s: `apt.cardEnter(tl, "#label-distance", 29.84)` — timed to "the distance" (word "distance" starts 29.84).
- 31.26s: `apt.cardEnter(tl, "#label-time", 31.26)` — timed to "the time." (word "time." starts 31.26).
- 32.16s: `apt.emphasize(tl, "#need-both-wrap", 32.16)` — both labels pulse together, timed to "If even one of them is missing,".
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Continuous.
**EDUCATIONAL PURPOSE:** Makes "need both" a visible fact (two question marks) rather than just a spoken rule.
**VISUAL HIERARCHY:** The two labels (primary, new) > formula tag (secondary, already settled) > car (ambient).
**ATTENTION MANAGEMENT:** Distance label, then time label, then a shared pulse — three sequential beats matching the narration's own pacing.
**MOTION NOTES:** This is the visual setup that Scenes 6/7/8 (Statement I/II/Combined) all pay off.
**CONTINUITY FROM PREVIOUS SCENE:** Formula tag is fully settled; labels appear in the remaining flanking space without disturbing it.

### SCENE 5 — PIN FLOW + Given (37.74s – 40.8s)
**VOICEOVER:** "Now let us check statement one."
**VISUAL OBJECTIVE:** Transition to solving mode; recap the formula as the anchor "Given" before testing either statement.
**SCREEN LAYOUT:** Question glides to `#q-pinned` (shortened text); illustration glides into `#illus-pinned` (small car + static formula recap); Given `SolutionCard` opens center, then morphs to stack right as Statement I detail begins.
**ON-SCREEN ELEMENTS:** `#q-pinned`, `#illus-pinned` (`#illus-pinned-icon` car, `#pinned-label` "Avg Speed = Distance ÷ Time"), `#card-given` (chip "Given"), `#stack-given` (`.step-circle` "G").
**ANIMATION DETAILS:**
- `PIN_TIME = 37.74`: `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 37.74)`; `apt.pinFlow(tl, "#illustration", "#illus-pinned", 37.74)`; `apt.fadeOut(tl, "#serial-num", 37.74, 0.5)`.
- `38.74s–125.5s`: `apt.ambientLoop(tl, "#illus-pinned-icon", 38.74, 125.5)` — pinned car keeps its idle bob for the entire solving stretch (there's no derived value to crossfade into the label — unlike the arithmetic siblings, nothing about the illustration itself changes once pinned).
- `GIVEN_TIME = 38.6`: `apt.cardEnter(tl, "#card-given .solution-card", 38.6)`; `apt.textReveal(tl, "#card-given .math")` reveals the recapped formula ("Avg Speed = Distance ÷ Time") as one paraphrased line at 38.6 — this is a pure recap of Scene 3's formula, not fresh narration, hence a single line-level timestamp rather than a word sync.
- `MORPH_GIVEN = 39.8` (morph): `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 39.8)`.
**CAMERA MOVEMENT:** The pin-flow glide. **TRANSITIONS:** `apt.pinFlow` (0.8s), `apt.morphToStack` (0.8s).
**EDUCATIONAL PURPOSE:** Re-anchors the formula one more time, right before it gets applied twice (Statement I, then II).
**VISUAL HIERARCHY:** Given card (center, primary) > pinned question (top, secondary) > pinned car (ambient).
**ATTENTION MANAGEMENT:** A single, brief beat — this card only needs ~1.2s since its content was already fully taught in Scene 3/4, not fresh material.
**MOTION NOTES:** Deliberately the shortest-lived card in the video — it's a bridge, not a teaching moment.
**CONTINUITY FROM PREVIOUS SCENE:** The full illustration is still mid-glide into its pinned slot as the Given card opens.

### SCENE 6 — STEP 1: Statement I Alone (40.8s – 55.9s)
**VOICEOVER:** "It says that the car covers one hundred eighty kilometer. Here, we know only the distance, but we do not know the time taken, so we cannot find the average speed. Hence, statement one alone is not sufficient."
**VISUAL OBJECTIVE:** Apply the "need both" rule from Scene 4 to Statement I: distance is known, time is not → not sufficient.
**SCREEN LAYOUT:** `#card-step1` opens center, chip "Statement I".
**ON-SCREEN ELEMENTS:** `#card-step1` with three reveal lines: "Distance = 180 km", "Time = ?", "→ Not Sufficient".
**ANIMATION DETAILS:**
- `apt.cardEnter(tl, "#card-step1 .solution-card", 40.8)`.
- `apt.textReveal(tl, "#card-step1 .math")` reveals: "Distance =" (line-level, 40.8, matching "It says that the car covers..." starting) → "180 km" (word-level, 42.46, matching "one" in "one hundred eighty" — the direct numeric match) → "Time = ?" (line-level, 47.4, matching "but we do not know the time taken,") → "→ Not Sufficient" (line-level, 52.38, matching "statement one alone is not sufficient.").
- `MORPH_STEP1 = 55.9` (morph): `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 55.9)`; `apt.stackLineGrow(tl, "#line-g-1", 55.9)` — the G↔1 connector grows now that both circles exist.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** `apt.morphToStack` (0.8s).
**EDUCATIONAL PURPOSE:** First concrete application of "need both" — makes the abstract rule from Scene 4 tangible.
**VISUAL HIERARCHY:** Step 1 card (center, primary) > stack column (secondary, just Given so far) > pinned recap (ambient).
**ATTENTION MANAGEMENT:** Distance value lands first (the ONE thing we do know), then the missing Time, then the verdict — mirrors the narration's own reveal order.
**MOTION NOTES:** "Not Sufficient" is rendered in `--primary` blue (via `.ans`), matching every other emphasized value in the design system — there is no red/error token to borrow.
**CONTINUITY FROM PREVIOUS SCENE:** Given card is still completing its morph into the stack as this card's `cardEnter` begins — the two "beats" flow as one continuous take, not a hard cut.

### SCENE 7 — STEP 2: Statement II Alone (56.9s – 72.5s)
**VOICEOVER:** "Now let us check statement two. It says that the journey takes less than three hours. Here, we know only the time, but the distance is not given, so again, we cannot find the average speed. Hence, statement two alone is also not sufficient."
**VISUAL OBJECTIVE:** Mirror of Scene 6 — this time distance is the missing piece.
**SCREEN LAYOUT:** `#card-step2` opens center, chip "Statement II".
**ON-SCREEN ELEMENTS:** `#card-step2` with three reveal lines: "Time < 3 hr", "Distance = ?", "→ Not Sufficient".
**ANIMATION DETAILS:**
- `apt.cardEnter(tl, "#card-step2 .solution-card", 56.9)`.
- `apt.textReveal(tl, "#card-step2 .math")` reveals: "Time <" (line-level, 56.9, matching "Now let us check statement two." bridging into "It says that the journey takes...") → "3 hr" (word-level, 60.5, matching "three" in "less than three hours") → "Distance = ?" (line-level, 63.98, matching "but the distance is not given,") → "→ Not Sufficient" (line-level, 69.6, matching "Hence, statement two alone is also not sufficient." — word "statement").
- `MORPH_STEP2 = 72.5` (morph): `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 72.5)`; `apt.stackLineGrow(tl, "#line-1-2", 72.5)`.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** `apt.morphToStack` (0.8s).
**EDUCATIONAL PURPOSE:** Confirms the rule generalizes — it's not "distance is special," it's "either missing value breaks it."
**VISUAL HIERARCHY:** Step 2 card (center, primary) > stack column (G, 1 visible) > pinned recap (ambient).
**ATTENTION MANAGEMENT:** Same three-beat rhythm as Scene 6, deliberately parallel so the viewer recognizes the pattern repeating.
**MOTION NOTES:** No new animation techniques introduced — the repetition itself is the teaching device.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1 remains fully legible in the stack until this card's own morph fires at 72.5s.

### SCENE 8 — STEP 3: Combined — The Division Insight (73.5s – 125.5s)
**VOICEOVER:** "Now let us use both statements together. From statement one, distance is 180 kilometer. From statement two, time is less than three hours. Now let us use the formula. Average speed is equal to distance divided by time. That is, average speed is equal to 180 divided by a value that is less than three. Now be very sure about one thing. If we divide the same number by a smaller value, the answer becomes bigger. If the time were exactly three hours, the speed would be sixty kilometer per hour. But here, the time is less than three hours, so the average speed must be greater than sixty kilometer per hour. Now we can answer the question with confidence. Hence, both statements together are sufficient, but neither statement alone is sufficient."
**VISUAL OBJECTIVE:** The core insight of the entire video, delivered as one continuous card with four progressive reveals — combining the two statements doesn't just add information, it changes a "we can't compute it" into a "we can bound it," which is enough.
**SCREEN LAYOUT:** `#card-step3` opens center, chip "Combined". Widened to 720px (longer lines than the default 640px).
**ON-SCREEN ELEMENTS:** `#card-step3` with four reveal lines: "Speed = 180 ÷ Time" (with `.frac`), "If Time = 3 hr → Speed = 60 km/hr", "Time < 3 hr ⇒ Speed > 60 km/hr", "⇒ Sufficient".
**ANIMATION DETAILS:**
- `apt.cardEnter(tl, "#card-step3 .solution-card", 73.5)`.
- `apt.textReveal(tl, "#card-step3 .math")` reveals:
  - "Speed = " + `.frac` "180/Time" (line-level, 82.54, matching "Now let us use the formula." → "Average speed is equal to distance divided by time.").
  - "If Time = 3 hr → Speed = 60 km/hr" (line-level, 104.02, matching "If the time were exactly three hours,").
  - "Time < 3 hr ⇒ Speed" (line-level, 109.88, matching "But here, the time is less than three hours,") then "> 60 km/hr" (word-level, 113.94, matching "greater" in "must be greater than sixty").
  - "⇒ Sufficient" (line-level, 120.06, matching "Hence, both statements together are sufficient,").
- `MORPH_STEP3 = 125.5` (morph, right after "...neither statement alone is sufficient." finishes at 125.46): `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 125.5)`; `apt.stackLineGrow(tl, "#line-2-3", 125.5)`.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** `apt.morphToStack` (0.8s).
**EDUCATIONAL PURPOSE:** This is the one idea a student could get wrong — that combining two "not sufficient" statements can still fail. Here it succeeds specifically because the exact quotient isn't needed, only whether it clears a threshold, and "divide by something smaller than 3" guarantees "bigger than dividing by exactly 3."
**VISUAL HIERARCHY:** Step 3 card (center, primary, the whole scene's focus) > stack column (G, 1, 2 all visible) > pinned recap (ambient, still bobbing).
**ATTENTION MANAGEMENT:** Four widely-spaced reveal beats (82.5s, 104.0s, 109.9s/114.0s, 120.1s) across this ~52s span keep the card from reading as static despite its long hold — each beat lands exactly on its own narrated moment, never bunched.
**MOTION NOTES:** By far the longest-held active card in the video (52s vs. ~15s for Steps 1/2) — justified because this is one unbroken logical argument with no natural mid-point to cut a new card in; splitting it would fragment a single idea across two boxes.
**CONTINUITY FROM PREVIOUS SCENE:** Step 2 is fully read and settled into the stack before this card opens.

### SCENE 9 — Options Reveal (125.5s – 128.16s)
**VOICEOVER:** "So the correct answer is option C."
**VISUAL OBJECTIVE:** Confirm the derived verdict against all four DS-style choices.
**SCREEN LAYOUT:** Step 3 morphs to stack; pinned question recenters; illustration recap clears; options grid (2×2) appears.
**ON-SCREEN ELEMENTS:** `#stack-step3` (`.step-circle` "3"), `#line-2-3` connector, `#options-reveal` (A: "Statement II alone is sufficient.", B: "Even both statements together are not sufficient.", C: "Both statements together are sufficient, but neither alone is sufficient." — correct, D: "Statement I alone is sufficient.").
**ANIMATION DETAILS:**
- `RECENTER_TIME = 125.5`: (shared with `MORPH_STEP3` above) `apt.fadeOut(tl, "#illus-pinned", 125.5)`; `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 125.5)`.
- 125.9s: `apt.fadeIn(tl, "#options-reveal", 125.9)`.
- 126.3s: `apt.optionsStagger(tl, ".opt-btn", 126.3)`.
- 128.02s: `apt.correctPulse(tl, ".opt-btn.correct", 128.02)` — timed to land exactly on the word "C.".
- 129.2s: `apt.fadeOut(tl, "#root > div", 129.2, 1.2)` — END FADE.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** `apt.morphToStack` + `apt.recenterForOptions`.
**EDUCATIONAL PURPOSE:** Standard close — verify the verdict (both together sufficient, neither alone) against the four choices, which happen to be the four canonical DS-verdict phrasings rather than numbers.
**VISUAL HIERARCHY:** Options grid (primary) > stack column (secondary) > pinned question (tertiary).
**ATTENTION MANAGEMENT:** Stagger-then-pulse, standard two-beat close.
**MOTION NOTES:** The one deliberate point where the pinned car's continuous ambient bob stops — immediately replaced by the options-reveal's own motion.
**CONTINUITY FROM PREVIOUS SCENE:** Step 3 is fully read (including its closing "⇒ Sufficient" line) before its morph fires.

---

## PART 3 — Asset List Required

| Asset | Source | Notes |
|---|---|---|
| `illustration/car.svg` | Reused from [q32](../q32/illustration/car.svg), already present in this folder | Untouched shape/color, brand-colored car used across the car-themed siblings (q6, q10, q13, q18, q19, q21, q24, q32) |
| `design-system.css`, `animations.js`, `assets/` | Copied from `_template/` | Per README §5B |

No new colors, fonts, or template components introduced. `.car-scene`/`.road`/`.car-icon`/`.speed-label`-style per-question CSS follows the exact pattern established in [q6](../q6/index.html)'s `.car-scene`.

---

## PART 4 — Animation Complexity Notes

- **No numeric illustration payoff (q36-specific):** every arithmetic sibling's illustration eventually shows a computed value (a speed, a ratio, a merge). q36's car never moves and never displays a number — its only job is to give "the car's average speed" a concrete subject and to host the two "?" labels that visualize the DS rule. This is a deliberate, narrower use of the Illustration component than any sibling.
- **Given card repurposed as a formula anchor, not raw values:** every sibling's Given card states known numeric facts pulled from the question. Here, at `GIVEN_TIME` there are no "given values" yet (the statements haven't been introduced as usable facts) — so Given instead recaps the prerequisite formula taught in Scene 3, deliberately brief (~1.2s) since it's not fresh material.
- **Step chips repurposed as "Statement I" / "Statement II" / "Combined"** instead of "Step 1"/"Step 2"/"Step 3" — allowed since chip text is free-form content on the existing `.chip`/`.step-circle` components, not a new component.
- **No red/error color:** "Not Sufficient" appears in `--primary` blue (`.ans`), exactly like every other emphasized value elsewhere in the design system — the system has no error/danger token, so inventing one was avoided per §4D.1's hard color rule.
- **Deliberately unbalanced step lengths:** Given ≈1.2s, Step 1 ≈15.1s, Step 2 ≈15.6s, Step 3 ≈52s. The first three mirror their narration exactly; Step 3's length reflects that the "combine + divide-by-smaller-value" argument is one unbroken chain of reasoning with no natural break point — matching the README's "hold times vary based on how hard the concept is" guidance rather than forcing artificial parity across steps.
- **Ambient loop covers the entire solving stretch:** `apt.ambientLoop` runs on `#illus-pinned-icon` from `PIN_TIME+1` all the way to `RECENTER_TIME` (38.74s–125.5s, ~87s) — the longest ambient-loop window of any sibling video, since nothing else about the pinned illustration ever changes (no crossfading label, no brake/flip) to otherwise keep it alive.
- **Standard breathing gap enforced throughout:** every `#card-stepN`/`#card-given` enters exactly 1.0s after its preceding `apt.morphToStack` call (39.8→40.8 is the Given→Step1 exception at the same 1.0s gap; 55.9→56.9; 72.5→73.5).
- **Four cards (G, 1, 2, 3), three connector lines** — at the upper end of the README's "typically 1 Given + 2–4 Steps" allowance, justified by the DS structure genuinely having four distinct logical beats (concept, Statement I, Statement II, Combined).

---

## PART 5 — Master Timeline Overview

```
TIME (s)   ELEMENT                          WHAT HAPPENS
─────────  ───────────────────────────────  ─────────────────────────────────
0.0        Background + bottomStrip+logo    Always visible
0.3        QuestionCard                     heroEnterLowered — fades/scales in low (1600px wide, 3-sentence DS prompt)
0.8        SerialNum                        pops in low, mirrors card
3.6        QuestionCard + SerialNum         rise to resting position
4.9        Road                             roadSweep
5.3        Car icon                         cardEnter — idle bob begins (runs to 37.74)
20.28      Formula tag                      cardEnter — "Avg Speed = Distance ÷ Time"
29.84      Distance label                   cardEnter — "Distance = ?"
31.26      Time label                       cardEnter — "Time = ?"
32.16      Both labels                      emphasize pulse — "need both" rule locks in

[ PIN_TIME = 37.74 ]
─────────  ───────────────────────────────  ─────────────────────────────────
37.74      Question + Illustration          🌟 pinFlow — real glide to pinned slots
38.74      Pinned car                       ambientLoop begins — runs to 125.5 (longest of any sibling)

[ GIVEN_TIME = 38.6 ]
─────────  ───────────────────────────────  ─────────────────────────────────
38.6       Given card                       cardEnter (center) — formula recap, single beat

[ STEP CYCLE ]
─────────  ───────────────────────────────  ─────────────────────────────────
39.8       Given → Given stack               🌟 morphToStack
40.8       Step 1 "Statement I" card         cardEnter (1s breathing gap)
40.8–52.38 Step 1 .math                     textReveal (Distance=180km → Time=? → Not Sufficient)
55.9       Step 1 → Step 1 stack            🌟 morphToStack + stackLineGrow (G→1)
56.9       Step 2 "Statement II" card        cardEnter (1s breathing gap)
56.9–69.6  Step 2 .math                     textReveal (Time<3hr → Distance=? → Not Sufficient)
72.5       Step 2 → Step 2 stack            🌟 morphToStack + stackLineGrow (1→2)
73.5       Step 3 "Combined" card            cardEnter (1s breathing gap)
73.5–120.06 Step 3 .math                    textReveal (Speed=180÷Time → If T=3,S=60 → T<3⇒S>60 → Sufficient)

[ PHASE 3 ]
─────────  ───────────────────────────────  ─────────────────────────────────
125.5      Step 3 → Step 3 stack            🌟 morphToStack + stackLineGrow (2→3)
125.5      Pinned illustration recap        fadeOut (the ONE deliberate stop)
125.5      Pinned question                  recenterForOptions
125.9      Options grid                     fadeIn
126.3      Option buttons                   optionsStagger
128.02     Correct option (C)               correctPulse
129.2      Everything                       END FADE (1.2s)
```

**Video duration:** 128.16s (matches `voiceover.mp3` exactly).
