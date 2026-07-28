# Speed-Time-Distance — Q22 — Storyboard (v2 — missed-distance method)

**Question:** Excluding stoppages, a bus runs at 60 km/hr. Including stoppages, its average speed is 45 km/hr. How many minutes does it stop per hour?
**Options:** A) 18 minutes B) 15 minutes (correct) C) 10 minutes D) 12 minutes
**Video length:** 94.6s (voiceover ends 93.119s / transcript.json, END_FADE at 93.6s + 1.0s fade)

**Note:** This replaces the earlier algebraic (assume stoppage = x minutes, solve 60−x=45) version. The new script/voiceover uses the more intuitive "missed distance" method: compare the hypothetical no-stop distance against the actual (average-speed) distance in one hour, find the missed distance, then find how long it takes to cover that missed distance at the running speed. The underlying numbers/answer are unchanged, so Phase 1 (question card + bus illustration presenting the two given speeds) is carried over unchanged from the previous build — only the Given/Step cards, stack column, and all timings are rebuilt against the new transcript.

---

## PART 1: Narration Beat Analysis

| # | Time | Narration | Educational purpose | Attention focus | Visual objective |
|---|------|-----------|---------------------|------------------|-------------------|
| 1 | 0.10–2.36 | "So welcome back again. Time for one more problem." | Cold open | Question card | Question fades/rises in |
| 2 | 2.90–13.48 | "Now in this problem, we are given that the speed of the bus without stoppages is sixty kilometer per hour, but including stoppages, its average speed becomes forty-five kilometer per hour." | Establish the bus and its two speed figures | Bus icon, both labels | Bus fades in, "60 km/hr" label lands, stop-badge pops, "45 km/hr" label lands |
| 3 | 14.02–19.46 | "The question is asking us to find how many minutes the bus stops in every one hour." | Restate the ask | Stop-badge | Stop-badge pulses + a "?" badge marks it as the unknown |
| 4 | 19.80–21.96 | "Now let us think about it in a very simple way." | Bridge into the intuitive method | Given card | pinFlow completes; Given card holds the two recap facts through this bridge line |
| 5 | 22.52–31.88 | "Suppose the bus keeps moving continuously for one hour without any stop. At a speed of sixty kilometer per hour, it will cover sixty kilometer. Correct?" | Step 1 — the hypothetical no-stop distance | Step 1 card | "If it never stopped..." → 60 km/hr × 1 hr = 60 km |
| 6 | 32.34–43.96 | "Now look at the second condition. Including stoppages, the average speed is only forty-five kilometer per hour. That means in one hour of clock time, the bus covers only forty-five kilometer." | Step 2 (part 1) — the actual distance, using the average speed | Step 2 card | Actual distance in 1 hr = 45 km |
| 7 | 44.30–57.30 | "Now compare these two distances. Without stopping, it could have covered sixty kilometer, but because of stoppages, it covered only forty-five kilometer. So the bus missed covering fifteen kilometer. Got it?" | Step 2 (part 2) — the missed distance | Step 2 card | 60 − 45 = 15 km missed |
| 8 | 58.16–71.02 | "Perfect. Now ask yourself one question. If the bus is moving at sixty kilometer per hour, how much time does it take to cover fifteen kilometer? We know time is equal to distance divided by speed." | Step 3 (part 1) — pose and set up the time formula | Step 3 card | Time = Distance / Speed |
| 9 | 71.58–81.52 | "So time is equal to fifteen divided by sixty hours. After simplifying this, we get one quarter hour, and one quarter hour is equal to fifteen minutes." | Step 3 (part 2) — solve | Step 3 card | 15/60 hr → 1/4 hr → 15 min |
| 10 | 81.94–86.62 | "So this fifteen minutes is the time for which the bus was standing still in every one hour." | Confirm result | Stack + options area | Step 3 morphs to stack; layout recenters; options begin fading in |
| 11 | 87.06–93.12 | "Hence, the bus stops for fifteen minutes per hour. So the correct answer is option B." | Reveal correct option | Options grid | Options stagger in; correct option (B) pulses green |

---

## PART 2: Scene-by-Scene Storyboard

### SCENE 1 — Question Reveal + Illustration Build
**TIMESTAMP:** 0.3s – 19.5s (PIN_TIME)
**VOICEOVER:** "So welcome back again. Time for one more problem. Now in this problem, we are given that the speed of the bus without stoppages is sixty kilometer per hour, but including stoppages, its average speed becomes forty-five kilometer per hour. The question is asking us to find how many minutes the bus stops in every one hour."
**VISUAL OBJECTIVE:** Establish the bus's two speed figures (60 km/hr running, 45 km/hr average-with-stops) and mark the stoppage time itself as the unknown. Unchanged from the previous build — same illustration, same figures.
**SCREEN LAYOUT:** Full question card centered top (lowered-hero start, rises at 2.5s). Single bus icon centered (`#illustration`, `justify-content:center`) with a stop-badge on its corner and two stacked speed labels beside it.
**ON-SCREEN ELEMENTS:** Same as previous build — `#q-full-card`, `#serial-num`, `#bus-wrap` (bus img + `#stop-badge` + `#unknown-badge`), `#speed-labels` (`#speed-excl-label`, `#speed-incl-label`).
**ANIMATION DETAILS:**
- 0.3s: `apt.heroEnterLowered(tl, "#q-full-card", 180, 2.5)` — rises as "problem." finishes (2.36s + buffer).
- 0.8s / 2.5s: `#serial-num` parallel tween.
- 4.6s: `#bus-wrap img` fades+scales in, timed just before "the speed of the bus" (4.84).
- 7.1s: `#speed-excl-label` fades up, timed before "sixty" (7.34).
- 7.9s: `apt.emphasize` on the "60 km/hr" figure, timed to "kilometer" (7.88).
- 9.3s: `#stop-badge` pops in, timed before "including stoppages," (9.50).
- 11.9s: `#speed-incl-label` fades up, timed before "forty-five" (12.10).
- 17.3s: `apt.emphasize(tl, "#stop-badge", 17.3)` + `#unknown-badge` fades in, timed to "bus stops" (17.58–17.96).
**CAMERA MOVEMENT:** Static frame.
**TRANSITIONS:** None yet; scene ends with pinFlow into Scene 2.
**EDUCATIONAL PURPOSE:** Anchor both speed figures and the stoppage-time unknown before any working begins.
**VISUAL HIERARCHY:** Question card > bus icon > stop-badge > speed labels > "?" badge.
**ATTENTION MANAGEMENT:** One new element per phrase.
**MOTION NOTES:** Bus stays static — the figures and the unknown marker are the message.
**CONTINUITY FROM PREVIOUS SCENE:** Cold open.

---

### SCENE 2 — Pin + Given
**TIMESTAMP:** PIN_TIME = 19.5s, GIVEN_TIME = 19.7s
**VOICEOVER:** (19.80–21.96) "Now let us think about it in a very simple way."
**VISUAL OBJECTIVE:** Compress the scenario to a pinned recap while the narration bridges into the new intuitive method.
**SCREEN LAYOUT:** Question pins to top; bus icon shrinks into `#illus-pinned` (centered) with recap label beneath; Given SolutionCard opens center.
**ON-SCREEN ELEMENTS:**
- `#q-pinned`, `#illus-pinned` (unchanged from previous build).
- `#card-given .solution-card` (width 720px) — chip "Given", math (2 lines):
  - line-level recap: "Speed (no stops) = <span class="hi">60 km/hr</span>"
  - line-level recap: "Avg speed (with stops) = <span class="hi">45 km/hr</span>"
**ANIMATION DETAILS:**
- 19.5s (PIN_TIME): `apt.pinFlow` on question + illustration; `apt.fadeOut` on `#serial-num`.
- 19.7s (GIVEN_TIME): `apt.cardEnter(tl, "#card-given .solution-card", 19.7)`.
- 19.7s: `apt.textReveal(tl, "#card-given .math")` — "Speed (no stops)..." at 19.7, "Avg speed (with stops)..." at 20.0 (both recap lines — the values were already spoken in Phase 1, not restated verbatim here; the live narration during this card is the "let's think simply" bridge, which has no dedicated math line of its own).
- 20.5s: `apt.ambientLoop(tl, "#illus-pinned-bus", 20.5, 81.9)` — keeps the pinned bus alive through the step cycle.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** pinFlow glide (0.8s).
**EDUCATIONAL PURPOSE:** Re-anchor the two known figures right before the new comparison method begins.
**VISUAL HIERARCHY:** Pinned question → pinned bus → Given card.
**ATTENTION MANAGEMENT:** Both recap lines land in the first second the card is open, since the "let's think simply" narration itself has no new numeric content to sync to.
**MOTION NOTES:** Given card holds for ~2.6s (19.7–22.3) covering the bridge line before morphing.
**CONTINUITY FROM PREVIOUS SCENE:** PIN_TIME (19.5s) lands right as beat 3 resolves; the pulse+badge on the stop-badge (17.3s) has already settled. pinFlow completes (19.5+0.8=20.3) just after the card's own cardEnter (19.7+0.55=20.25) — both land together.

---

### SCENE 3 — Step 1: The Hypothetical No-Stop Distance
**TIMESTAMP:** GIVEN_MORPH = 21.9s → STEP1_TIME (card enter) = 22.9s → exits at STEP1_MORPH = 32.0s
**VOICEOVER:** (22.52–31.88) "Suppose the bus keeps moving continuously for one hour without any stop. At a speed of sixty kilometer per hour, it will cover sixty kilometer. Correct?"
**VISUAL OBJECTIVE:** Establish the hypothetical baseline — if the bus never stopped, it would cover 60 km in the hour.
**SCREEN LAYOUT:** Given card morphs into stack (badge "G"); Step 1 card opens center.
**ON-SCREEN ELEMENTS:**
- `#stack-given .stack-card`.
- `#card-step1 .solution-card` (width 720px) — chip "Step 1", math (2 lines):
  - line-level: "If the bus never stopped for 1 hour..."
  - word-level, `.ans`: "Distance = <span class="hi">60</span> km/hr &times; <span class="hi">1</span> hr = <span class="ans">60 km</span>"
**ANIMATION DETAILS:**
- 21.9s: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 21.9)`.
- 22.9s: `apt.cardEnter(tl, "#card-step1 .solution-card", 22.9)`.
- 22.9s: `apt.textReveal(tl, "#card-step1 .math")`:
  - "If the bus never stopped for 1 hour..." — data-t 22.52 (matches "suppose the bus keeps moving continuously for one hour without any stop")
  - "Distance"(27.16) "="(27.64) "60"(27.80, hi) "km/hr"(28.10) "&times;"(28.78) "1 hr"(29.56, hi) "="(29.94) "60 km"(30.32, .ans) — from "at a speed of sixty kilometer per hour, it will cover sixty kilometer"
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** 0.8s morph in/out.
**EDUCATIONAL PURPOSE:** Gives the viewer a concrete "what-if" baseline to compare the real scenario against.
**VISUAL HIERARCHY:** Setup line → formula → result (`.ans`).
**ATTENTION MANAGEMENT:** Setup first, then the computation.
**MOTION NOTES:** Card holds through "Correct?" (31.50–31.88) as a confirming beat before the morph.
**CONTINUITY FROM PREVIOUS SCENE:** Given's morph completes (21.9+0.8=22.7) just before Step 1 fades in at 22.9s.

---

### SCENE 4 — Step 2: The Actual Distance and the Missed Distance
**TIMESTAMP:** STEP1_MORPH = 32.0s → STEP2_TIME (card enter) = 33.0s → exits at STEP2_MORPH = 58.9s
**VOICEOVER:** (32.34–57.30) "Now look at the second condition. Including stoppages, the average speed is only forty-five kilometer per hour. That means in one hour of clock time, the bus covers only forty-five kilometer. Now compare these two distances. Without stopping, it could have covered sixty kilometer, but because of stoppages, it covered only forty-five kilometer. So the bus missed covering fifteen kilometer. Got it?"
**VISUAL OBJECTIVE:** Establish the real (average-speed) distance, then compute the gap between the hypothetical and the real distance.
**SCREEN LAYOUT:** Step 1 morphs into stack (badge "1"), connector G→1 grows; Step 2 card opens center.
**ON-SCREEN ELEMENTS:**
- `#stack-step1 .stack-card`, `#line-g-1`.
- `#card-step2 .solution-card` (width 720px) — chip "Step 2", math (3 lines):
  - line-level: "But with stoppages, avg speed = <span class="hi">45 km/hr</span>"
  - word-level: "So distance in 1 hr = <span class="ans">45 km</span>"
  - word-level, `.ans`: "Missed distance = <span class="hi">60 &minus; 45</span> = <span class="ans">15 km</span>"
**ANIMATION DETAILS:**
- 32.0s: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 32.0)`.
- 32.0s: `apt.setStackLine("#line-g-1", ...)` + `apt.stackLineGrow(tl, "#line-g-1", 32.0)`.
- 33.0s: `apt.cardEnter(tl, "#card-step2 .solution-card", 33.0)`.
- 33.0s: `apt.textReveal(tl, "#card-step2 .math")`:
  - "But with stoppages, avg speed = 45 km/hr" — data-t 32.34
  - "So"(39.34) "distance"(39.54) "in"(39.92) "1 hr"(40.22) "="(42.08) "45 km"(42.74, .ans) — from "that means in one hour of clock time, the bus covers only forty-five kilometer"
  - "60"(47.68, hi) "&minus;"(49.24) "45"(51.62, hi) "="(54.50) "15 km"(55.28, .ans) — from "without stopping...covered sixty...only forty-five...missed covering fifteen kilometer"
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** 0.8s morph in/out.
**EDUCATIONAL PURPOSE:** This is the conceptual core of the "simple method" — the 15 km gap is what the stoppage time will convert to.
**VISUAL HIERARCHY:** Real-speed fact → real distance → the missed-distance subtraction (largest, `.ans`).
**ATTENTION MANAGEMENT:** Each of the three lines lands as its own beat in the narration, mirroring the "recall 60, recall 45, now subtract" structure.
**MOTION NOTES:** Longest card so far (25.9s) — carries the full comparison; no pulses beyond textReveal.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1's morph completes (32.0+0.8=32.8) just before Step 2 fades in at 33.0s.

---

### SCENE 5 — Step 3: Convert the Missed Distance to Time
**TIMESTAMP:** STEP2_MORPH = 58.9s → STEP3_TIME (card enter) = 59.9s → exits at STEP3_MORPH = 81.9s
**VOICEOVER:** (58.16–81.52) "Perfect. Now ask yourself one question. If the bus is moving at sixty kilometer per hour, how much time does it take to cover fifteen kilometer? We know time is equal to distance divided by speed. So time is equal to fifteen divided by sixty hours. After simplifying this, we get one quarter hour, and one quarter hour is equal to fifteen minutes."
**VISUAL OBJECTIVE:** Convert the 15 km missed distance into a time — the answer.
**SCREEN LAYOUT:** Step 2 morphs into stack (badge "2"), connector 1→2 grows; Step 3 card opens center.
**ON-SCREEN ELEMENTS:**
- `#stack-step2 .stack-card`, `#line-1-2`.
- `#card-step3 .solution-card` (width 720px) — chip "Step 3", math (4 lines):
  - line-level: "Time to cover the missed <span class="hi">15 km</span>?"
  - word-level: "Time = Distance / Speed"
  - word-level: "= <span class="hi">15</span> / <span class="hi">60</span> hr"
  - word-level, `.ans`: "= 1/4 hr = <span class="ans">15 min</span>"
**ANIMATION DETAILS:**
- 58.9s: `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 58.9)`.
- 58.9s: `apt.setStackLine("#line-1-2", ...)` + `apt.stackLineGrow(tl, "#line-1-2", 58.9)`.
- 59.9s: `apt.cardEnter(tl, "#card-step3 .solution-card", 59.9)`.
- 59.9s: `apt.textReveal(tl, "#card-step3 .math")`:
  - "Time to cover the missed 15 km?" — data-t 59.9 (matches "now ask yourself one question...how much time...to cover fifteen kilometer")
  - "Time"(68.36) "="(68.68) "Distance"(69.32) "/"(69.86) "Speed"(70.62) — from "time is equal to distance divided by speed"
  - "="(72.20) "15"(72.64, hi) "/"(73.18) "60 hr"(73.92, hi) — from "time is equal to fifteen divided by sixty hours"
  - "="(77.14) "1/4 hr"(77.40, hi) "="(80.30) "15 min"(80.72, .ans) — from "we get one quarter hour... is equal to fifteen minutes"
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** 0.8s morph in, then into Scene 6's options reveal.
**EDUCATIONAL PURPOSE:** Closes the loop — turns the missed distance into the stoppage time using the same Time = Distance/Speed formula from Step 1.
**VISUAL HIERARCHY:** Question restated → formula → substitution → final answer (`.ans`).
**ATTENTION MANAGEMENT:** The `.ans` span is the last reveal in the card and the last before the options grid.
**MOTION NOTES:** No pulses beyond textReveal. Card holds through the confirming sentence (81.94–86.62) as it morphs into the stack.
**CONTINUITY FROM PREVIOUS SCENE:** Step 2's morph completes (58.9+0.8=59.7) just before Step 3 fades in at 59.9s.

---

### SCENE 6 — Options Reveal
**TIMESTAMP:** STEP3_MORPH / RECENTER_TIME = 81.9s, options fade-in = 82.9s, stagger = 83.5s, correct pulse = 92.5s, END_FADE_TIME = 93.6s
**VOICEOVER:** (81.94–93.12) "So this fifteen minutes is the time for which the bus was standing still in every one hour. Hence, the bus stops for fifteen minutes per hour. So the correct answer is option B."
**VISUAL OBJECTIVE:** Present all four options and confirm 15 minutes matches option B.
**SCREEN LAYOUT:** Illustration drops out; pinned question + stack column recenter against the options grid.
**ON-SCREEN ELEMENTS:**
- `#illus-pinned` fades out; `#q-pinned` recenters (`xShift:160, yShift:180`).
- `#stack-step3 .stack-card` (badge "3") + `#line-2-3`.
- `#options-reveal .options-grid`: A) 18 minutes, B) 15 minutes (`.correct`), C) 10 minutes, D) 12 minutes.
**ANIMATION DETAILS:**
- 81.9s: `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 81.9)`.
- 81.9s: `apt.setStackLine("#line-2-3", ...)` + `apt.stackLineGrow(tl, "#line-2-3", 81.9)`.
- 81.9s: `apt.fadeOut(tl, "#illus-pinned", 81.9)` + `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 81.9)`.
- 82.9s: `apt.fadeIn(tl, "#options-reveal", 82.9)`.
- 83.5s: `apt.optionsStagger(tl, ".opt-btn", 83.5)`.
- 92.5s: `apt.correctPulse(tl, ".opt-btn.correct", 92.5)` — timed to "option" (92.48–93.08).
- 93.6s (END_FADE_TIME): `apt.fadeOut(tl, "#root > div", 93.6, 1.0)`.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Final morph + recenter + stagger reveal, then unified end fade.
**EDUCATIONAL PURPOSE:** Confirms the derived answer against the actual answer choices.
**VISUAL HIERARCHY:** Options grid → correct pulse last.
**ATTENTION MANAGEMENT:** Stagger keeps the reveal readable; pulse lands on "option B."
**MOTION NOTES:** Stack column (G-1-2-3, 3 connectors) stays fully visible throughout — one fewer step than the previous (algebraic) build, since the missed-distance method needs only 3 steps instead of 4.
**CONTINUITY FROM PREVIOUS SCENE:** Step 3's morph completes (81.9+0.8=82.7) just before the options grid fades in at 82.9s, while the two confirming sentences play over the reveal.

---

## PART 3: Asset List Required

- `illustration/bus-svgrepo-com.svg` — unchanged, reused as-is from the previous build.
- No other new SVGs — stop-badge, unknown-badge, speed labels remain the same CSS/text elements as before.
- Shared: `serial-num-badge.svg`, `logo.png`.

## PART 4: Animation Complexity Notes

- Phase 1 (question + illustration) is carried over unchanged from the previous build — the given facts and their visual presentation don't depend on which solving method is used, only the timings shifted to match the new transcript.
- Three Step cards (not four) — the missed-distance method needs one fewer algebraic move than the previous x-based version: (1) hypothetical distance, (2) actual distance + missed distance, (3) convert missed distance to time. Stack column is G/1/2/3.
- Step 2 is the longest and most conceptually dense card (25.9s, 3 lines) since it carries both the "actual distance" fact and the "missed distance" subtraction — these two ideas share a card because they're one continuous comparison in the narration ("now compare these two distances...").
- `apt.ambientLoop` on the pinned bus icon from 20.5s to 81.9s (RECENTER_TIME) — shorter than the previous build's window but still spans the entire step cycle, so it stays load-bearing.
- No `apt.emphasize`/`apt.resultReveal` layered on any `.ans` span inside solution cards — all reveals go through `apt.textReveal`. `apt.emphasize` used twice in Phase 1 only (on the "60 km/hr" label and the stop-badge), same as the previous build.
- Given card in this version has only 2 lines (no live word-level line) since the narration during GIVEN_TIME is a pure bridge sentence ("let's think about it simply") with no new numeric content — a simpler Given than the previous algebraic build's 3-line version (which had a live "let x = ..." assumption to sync to).

## PART 5: Master Timeline Overview

```
0.3    Question card hero-enters (lowered)
2.5    Question card + badge rise to rest
4.6    Bus icon fades+scales in
7.1    "60 km/hr" running label fades up
7.9    "60 km/hr" figure emphasized (pulse)
9.3    Stop-badge pops in
11.9   "45 km/hr avg" label fades up
17.3   Stop-badge pulses (emphasize) + "?" unknown-badge fades in
19.5   PIN_TIME — pinFlow (question + illustration → pinned)
19.7   GIVEN_TIME — Given card enters + text-reveal (2 lines)
20.5   Ambient loop starts on pinned bus icon (through 81.9)
21.9   Given → stack (morph)
22.9   Step 1 card enters + text-reveal (2 lines) — hypothetical 60 km
32.0   Step 1 → stack (morph) + line G-1 grows
33.0   Step 2 card enters + text-reveal (3 lines) — actual 45 km, missed 15 km
58.9   Step 2 → stack (morph) + line 1-2 grows
59.9   Step 3 card enters + text-reveal (4 lines) — time = 15/60 hr = 15 min
81.9   Step 3 → stack (morph) + line 2-3 grows + RECENTER_TIME (illustration fades out, question recenters)
82.9   Options grid fades in
83.5   Options stagger in
92.5   Correct option (B) pulses
93.6   END_FADE_TIME — everything fades out together
94.6   End
```
