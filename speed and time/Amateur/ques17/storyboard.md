# Storyboard — Speed and Time, Amateur, Question 17

**Question:** Alice travels by car. At 40 kmph she reaches point C at 5 P.M. At 60 kmph she reaches at 1 P.M. The speed required to reach at 3 P.M. is:
**Options:** A) 50 kmph  B) 45 kmph  C) 52 kmph  D) 48 kmph (correct)
**Voiceover duration:** 117.97s (updated re-recording)

---

## PART 1 — Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|-----------|-----------|----------------------|------------------|-------------------|
| 1 | 0.12–3.09 | "So welcome back again. Time for one more problem." | Hook / intro | Center screen | Empty stage, grid + strip visible, nothing else yet |
| 2 | 3.50–19.78 | "Alice travels by car to reach point C. If she travels at forty kmph, she reaches at 5PM. If she travels at sixty kmph, she reaches at 1PM. The question is asking us to find the speed required to reach at 3PM." | Establish the full problem | QuestionCard + illustration | Question card rises into place; car/road illustration builds and plays through both stated speeds |
| 3 | 20.12–34.62 | "Now first, understand the time difference... slower speed takes four hours more. This is the main point." | Frame the key insight | Given card (center) | Given card reveals the two speeds/times and highlights the 4-hour gap |
| 4 | 35.30–74.42 | "Let time at 60 = t. Time at 40 = t+4. Distance same → 60t = 40(t+4) → 60t=40t+160 → 20t=160 → t=8." | Core algebra | Step 1 card | Equation builds line-by-line, culminating in t = 8 |
| 5 | 74.98–96.96 | "So time at 60kmph is 8 hours, distance = 60×8 = 480 km. Start time = 1PM − 8h = 5AM." | Derive distance + start time | Step 2 card | Distance and start-time values reveal in sequence |
| 6 | 97.48–114.94 | "She wants to reach at 3PM. From 5AM to 3PM is 10 hours. Speed = 480 ÷ 10 = 48 kmph." | Final computation | Step 3 card | Total time and final division reveal, ending on the answer |
| 7 | 115.42–117.97 | "So, option D is the correct answer." | Confirm answer | Options grid | 2×2 options fade/stagger in, D pulses green |

---

## PART 2 — Scene-by-Scene Storyboard

### SCENE 1 — Intro Hold (0.0s – 3.1s)
- **VOICEOVER:** "So welcome back again. Time for one more problem."
- **VISUAL OBJECTIVE:** Calm empty stage before the question drops in.
- **SCREEN LAYOUT:** Background layers only (`.dotted-grid`, `.bottom-strip`, `.topic-name`, `.logo`).
- **ON-SCREEN ELEMENTS:** dotted grid (65% opacity), bottom strip, "Speed and Time" topic label bottom-left, logo bottom-right.
- **ANIMATION DETAILS:** `#q-full-card` sits statically lowered/hidden (`opacity:0`, `y:HERO_OFFSET_Y+50`) per the static pre-tween styling — no motion yet.
- **CAMERA MOVEMENT:** None (static frame throughout).
- **TRANSITIONS:** n/a (opening frame).
- **EDUCATIONAL PURPOSE:** Give the viewer a breath before the problem statement.
- **VISUAL HIERARCHY:** Background only — nothing competes for attention.
- **ATTENTION MANAGEMENT:** Silence on screen mirrors the hook line.
- **MOTION NOTES:** None.

### SCENE 2 — Question Reveal + Illustration (0.3s – 20.1s)
- **VOICEOVER:** "Alice travels by car to reach point C. If she travels at forty kmph, she reaches at 5PM. If she travels at sixty kmph, she reaches at 1PM. The question is asking us to find the speed required to reach at 3PM."
- **VISUAL OBJECTIVE:** Land the full question card, then visually establish "two trial speeds, two arrival times" via a simple flat 2D car/road illustration.
- **SCREEN LAYOUT:** `#q-full-card` centered top (per template Phase 1 position), `#serial-num` badge top-left overlapping the card, `#illustration` centered below (y:480, 1400×300).
- **ON-SCREEN ELEMENTS:**
  - `.q-card` (large, 1500px wide) with question text, numbers `40 kmph`, `60 kmph`, `3 P.M.` in `.num` (primary blue).
  - `.serial-num` badge with fixed "Q".
  - Illustration: a single flat 2D car icon (inline SVG, `--primary` fill) on a straight dashed road running left→right toward a flag marker labelled "C". Two small clock chips above the road — "5:00 PM" (tied to 40 kmph) and "1:00 PM" (tied to 60 kmph) — fade in one after the other as each speed is spoken.
- **ANIMATION DETAILS:**
  - `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.1)` — card starts lowered/centered while alone in frame, holds through the opening line, rises to its resting slot at 3.1s.
  - Parallel `#serial-num` tween mirrors the same y:180→0 motion (fromTo at 0.8s, rise at 3.1s).
  - Illustration container fades/slides in at 3.6s (car + road appear together).
  - At 6.50s ("forty kilometer per hour") the "5:00 PM" clock chip fades in above the road and the car does a short `apt.roadSweep` traversal (0.9s) to a first waypoint.
  - At 10.72s ("sixty kilometer per hour") the "1:00 PM" clock chip fades in and the car does a second, faster `apt.roadSweep` to the flag/"C" marker.
  - At 15.50s ("speed required...") a third clock chip "3:00 PM ?" fades in with an `apt.emphasize` pulse.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Whole `#phase1` group fades out via `apt.fadeOut` at 20.1s (0.4s).
- **EDUCATIONAL PURPOSE:** Let the viewer see the two known trials before any algebra starts.
- **VISUAL HIERARCHY:** Question card (primary) → illustration (secondary) → background (tertiary).
- **ATTENTION MANAGEMENT:** Clock chips appear strictly in narration order.
- **MOTION NOTES:** Car motion is illustrative only — visualizes "two speeds, two times," not geometrically precise.

### SCENE 3 — Pin + Given Card (20.4s – 35.0s)
- **VOICEOVER:** "Now first, understand the time difference. At forty kilometer per hour, she reaches at five PM. At sixty kilometer per hour, she reaches at one PM. So the slower speed takes four hours more. This is the main point."
- **VISUAL OBJECTIVE:** Establish the "Given" facts and the 4-hour insight.
- **SCREEN LAYOUT:** `#q-pinned` fades in top (left:385px), `#illus-pinned` fades in as a small pinned car/road strip below it, `#card-given` `.solution-card` centered (left:640px, top:480).
- **ON-SCREEN ELEMENTS:** `.chip` "Given"; `.math` block:
  - `Speed 1 = 40 kmph → 5 P.M.`
  - `Speed 2 = 60 kmph → 1 P.M.`
  - `Time difference = 4 hours`
- **ANIMATION DETAILS:**
  - `apt.fadeOut(tl, "#phase1", 20.1)`, `apt.fadeIn(tl, "#q-pinned", 20.4)`, `apt.fadeIn(tl, "#illus-pinned", 20.4)`.
  - `apt.cardEnter(tl, "#card-given .solution-card", 20.6)`.
  - `apt.textReveal(tl, "#card-given .math")` — word-level on "Speed 1 = 40 kmph" / "5 P.M." (data-t 22.38/24.40), "Speed 2 = 60 kmph" / "1 P.M." (data-t 26.24/28.26); line-level on "Time difference = 4 hours" (data-t 30.48).
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 35.0)`.
- **EDUCATIONAL PURPOSE:** Anchor the two known data points before introducing the unknown `t`.
- **VISUAL HIERARCHY:** Pinned question (small, top) < Given card (large, center) < pinned illustration (supporting).
- **ATTENTION MANAGEMENT:** Each `.math` line lights up exactly as its number is spoken.
- **MOTION NOTES:** Card box entrance unchanged; only text inside reveals progressively.

### SCENE 4 — Step 1: Solve for t (35.0s – 74.8s)
- **VOICEOVER:** "Let the time taken at sixty kilometer per hour be t hours. Then the time taken at forty kilometer per hour will be t plus four hours. Now distance is same in both cases, so we can use distance is equal to speed into time. At sixty kilometer per hour, distance will be sixty into t. At forty kilometer per hour, distance will be forty into t plus four. Since distance is same, we can write sixty t is equal to forty into t plus four. After simplifying this, sixty t is equal to forty t plus one hundred sixty. So twenty t is equal to one hundred sixty. That gives t equal to eight."
- **VISUAL OBJECTIVE:** Walk through the algebra that isolates t = 8.
- **SCREEN LAYOUT:** `#card-step1` `.solution-card` centered (left:640px, top:460).
- **ON-SCREEN ELEMENTS:** `.chip` "Step 1"; `.math` block:
  - `Let t = time at 60 kmph`
  - `Time at 40 kmph = t + 4`
  - `60t = 40(t + 4)`
  - `60t = 40t + 160`
  - `20t = 160`
  - `t = 8 hours`
- **ANIMATION DETAILS:**
  - `apt.morphToStack(...,35.0)` (Given → stack, completes 35.8) then `apt.cardEnter(tl, "#card-step1 .solution-card", 35.3)`.
  - `apt.textReveal(tl, "#card-step1 .math")` — line-level on "Let t = time at 60 kmph" (data-t 35.30) and "Time at 40 kmph = t + 4" (data-t 39.14); word-level on `60t = 40(t+4)` (data-t 61.72), `60t = 40t+160` (data-t 66.42), `20t = 160` (data-t 70.26), and the final `t = 8` answer span (data-t 73.?? within phrase 32).
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 74.8)`; `apt.stackLineGrow(tl, "#line-g-1", 74.8)`.
- **EDUCATIONAL PURPOSE:** Teach the "equal distance → equal speed×time" setup.
- **VISUAL HIERARCHY:** Step 1 card (center) with `Given` shrunk into the left stack.
- **ATTENTION MANAGEMENT:** Six short reveal beats keep pace with the narration's own simplification steps.
- **MOTION NOTES:** No `.frac` needed — stays in plain algebraic form.

### SCENE 5 — Step 2: Distance + Start Time (74.8s – 97.3s)
- **VOICEOVER:** "So time taken at sixty kilometer per hour is eight hours. Now distance will be sixty into eight, that is four hundred eighty kilometer. Now let us find the starting time. At sixty kilometer per hour, Alice reaches at one PM and the journey time is eight hours. So starting time is one PM minus eight hours. That gives five AM."
- **VISUAL OBJECTIVE:** Convert t=8 into a concrete distance, then back-solve the start time.
- **SCREEN LAYOUT:** `#card-step2` `.solution-card` centered (left:600px, top:440, width:720px).
- **ON-SCREEN ELEMENTS:** `.chip` "Step 2"; `.math` block:
  - `Distance = 60 × 8 = 480 km`
  - `Start time = 1 P.M. − 8 hrs`
  - `= 5 A.M.`
- **ANIMATION DETAILS:**
  - `apt.morphToStack(...,74.8)` (Step 1 → stack, completes 75.6) then `apt.cardEnter(tl, "#card-step2 .solution-card", 75.1)`.
  - `apt.textReveal(tl, "#card-step2 .math")` — word-level on `Distance = 60 × 8` (data-t 79.94) and `= 480 km` answer span (data-t 82.60); line-level on "Start time = 1 P.M. − 8 hrs" (data-t 86.30) and `= 5 A.M.` answer span (data-t 95.98).
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 97.3)`; `apt.stackLineGrow(tl, "#line-1-2", 97.3)`.
- **EDUCATIONAL PURPOSE:** Ground `t=8` in the real trip (distance) and reframe in clock time.
- **VISUAL HIERARCHY:** Step 2 card (center); Given + Step 1 stacked at left with connector line between G and 1.
- **ATTENTION MANAGEMENT:** Distance resolves before start-time search, matching narration order.
- **MOTION NOTES:** None beyond standard text-reveal/morph pattern.

### SCENE 6 — Step 3: Required Speed (97.3s – 115.2s)
- **VOICEOVER:** "Now she wants to reach at three PM. From five AM to three PM total time is ten hours. So required speed is distance divided by time. That is four hundred eighty divided by ten. So required speed is forty-eight kilometer per hour."
- **VISUAL OBJECTIVE:** Land on the final answer, 48 kmph.
- **SCREEN LAYOUT:** `#card-step3` `.solution-card` centered (left:580px, top:420, width:760px).
- **ON-SCREEN ELEMENTS:** `.chip` "Step 3"; `.math` block:
  - `5 A.M. → 3 P.M. = 10 hrs`
  - `Speed = 480 ÷ 10`
  - `= 48 kmph`
- **ANIMATION DETAILS:**
  - `apt.morphToStack(...,97.3)` (Step 2 → stack, completes 98.1) then `apt.cardEnter(tl, "#card-step3 .solution-card", 97.6)`.
  - `apt.textReveal(tl, "#card-step3 .math")` — line-level on "5 A.M. → 3 P.M. = 10 hrs" (data-t 97.48, "ten hours" span data-t 99.64); word-level on `Speed = 480 ÷ 10` (data-t 102.96/106.38) and the final `.ans` span `= 48 kmph` (data-t 108.94).
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** At 115.2s — `apt.fadeOut(tl, "#illus-pinned", 115.2)`, `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 115.2)`, `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 115.2)`, `apt.stackLineGrow(tl, "#line-2-3", 115.2)`.
- **EDUCATIONAL PURPOSE:** Complete the chain: distance (known) ÷ new total time (10 hrs) = required speed.
- **VISUAL HIERARCHY:** Step 3 card (center, ends on the answer in `.ans` blue); full G/1/2 stack visible at left.
- **ATTENTION MANAGEMENT:** `10 hrs` and `48 kmph` reveal in the exact order the narration states them.
- **MOTION NOTES:** No `.frac` used — division stays inline (`480 ÷ 10`).

### SCENE 7 — Options Reveal (115.2s – 117.97s)
- **VOICEOVER:** "So, option D is the correct answer."
- **VISUAL OBJECTIVE:** Confirm the answer against all four options.
- **SCREEN LAYOUT:** `#options-reveal` `.pinned-col` (top:400px) with `.options-grid` (2×2).
- **ON-SCREEN ELEMENTS:** `.opt-btn` A) 50 kmph, B) 45 kmph, C) 52 kmph, D) 48 kmph (`class="correct"`).
- **ANIMATION DETAILS:**
  - `apt.fadeIn(tl, "#options-reveal", 115.4)`.
  - `apt.optionsStagger(tl, ".opt-btn", 115.7)` (0.45s × 4, stagger 0.12s).
  - `apt.correctPulse(tl, ".opt-btn.correct", 116.5)` — timed just after "option D" is spoken (116.12).
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** None — final state holds through end of audio (117.97s); `tl.set({},{},119)` end marker.
- **EDUCATIONAL PURPOSE:** Let the viewer visually cross-check 48 kmph against the distractors.
- **VISUAL HIERARCHY:** Options grid (primary), green D last; full solution stack remains visible at left.
- **ATTENTION MANAGEMENT:** Pulse timed just after "option D" is named.
- **MOTION NOTES:** Stack cards + connector lines are NOT faded here.

---

## PART 3 — Asset List Required

- No new template assets needed (`serial-num-badge.svg`, `logo.png` reused as-is).
- One per-question illustration asset: `illustration/car.svg` — a single flat 2D car silhouette in `--primary` (`#6373db`). Road, dashed line, clock chips, and "C" flag marker built with plain CSS/HTML — no new components invented.

## PART 4 — Animation Complexity Notes

- All animations drawn from the fixed `animations.js` helper set — none invented.
- `apt.roadSweep` reused for the illustration car-travel beats in Scene 2.
- Every active-card → stack transition uses `apt.morphToStack` at 0.8s, no exceptions.
- Text reveal granularity: word-level for verbatim numeric/equation lines, line-level for paraphrased setup lines.
- Stack line connectors grow in lockstep with the morph that lands the lower circle, and are never faded thereafter.

## PART 5 — Master Timeline Overview

```
TIME (s)    ELEMENT                              EVENT
──────────  ───────────────────────────────────  ──────────────────────────────
0.0         Background layers                    Always visible
0.3–3.1     #q-full-card + #serial-num            heroEnterLowered (rise at 3.1)
3.6         Illustration (car+road)               fadeIn
6.5         "5:00 PM" clock chip                  fadeIn + roadSweep (car → wp1)
10.7        "1:00 PM" clock chip                  fadeIn + roadSweep (car → C)
15.5        "3:00 PM ?" clock chip                fadeIn + emphasize
20.1        #phase1                               fadeOut
20.4        #q-pinned, #illus-pinned              fadeIn
20.6        card-given .solution-card             cardEnter
20.6+       card-given .math                      textReveal (22.38–30.48 data-t)
35.0        Given → stack-given                    🌟 morphToStack
35.3        card-step1 .solution-card             cardEnter
35.3+       card-step1 .math                      textReveal (35.30–73.x data-t)
74.8        Step1 → stack-step1                    🌟 morphToStack + line-g-1 grow
75.1        card-step2 .solution-card             cardEnter
75.1+       card-step2 .math                      textReveal (79.94–95.98 data-t)
97.3        Step2 → stack-step2                    🌟 morphToStack + line-1-2 grow
97.6        card-step3 .solution-card             cardEnter
97.6+       card-step3 .math                      textReveal (97.48–108.94 data-t)
115.2       illus-pinned fadeOut, recenterForOptions, Step3 → stack-step3 🌟 morphToStack + line-2-3 grow
115.4       #options-reveal                       fadeIn
115.7       .opt-btn ×4                           optionsStagger
116.5       .opt-btn.correct (D)                  correctPulse
117.97      End of voiceover                      Final frame holds
119.0       tl end marker                         —
```

**Total video length:** ~119s.
