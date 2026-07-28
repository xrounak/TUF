# Storyboard — Car Speed Increase (Speed and Time, Advanced, ques32)

**Question:** To cover a distance in 1.5 hours instead of 2.5 hours, a car travelling at 60 kmph must increase its speed by:
A) 50 kmph  B) 100 kmph  C) 30 kmph  D) 40 kmph ✅

---

## PART 1 — Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|-----------|-----------|----------------------|------------------|-------------------|
| 1 | 0.10–2.92 | "So welcome back again. Time for one more problem." | Hook / orientation | Center screen, empty stage | Calm opening beat before content enters |
| 2 | 3.48–8.44 | "Now in this problem, we are given that a car is traveling at sixty kilometer per hour." | State the given speed | "sixty kilometer per hour" | Question card lands; car illustration + "60 km/hr" label build |
| 3 | 9.02–12.28 | "At this speed, it covers the journey in two point five hours." | State the original time | "2.5 hours" | Clock/time label for original journey appears next to the car |
| 4 | 12.84–21.10 | "The question is asking us to find by how much the speed should increase so that the same journey is completed in one point five hours." | State the unknown | "increase", "1.5 hours" | A second, faster car + "1.5 hr" label appear, visually contrasting with the first |
| 5 | 21.56–24.38 | "Now, first, let us find the total distance." | Set up the solving strategy | Transition beat | Question pins to top; Given card opens restating the three known values |
| 6 | 24.76–37.06 | "We know the formula, distance is equal to original speed into original time. Putting the values, distance is equal to sixty into two point five. This gives us one hundred fifty kilometer." | Compute the (constant) distance | Distance = 60 × 2.5 = 150 km | Step 1 card: formula → substitution → answer, word-synced |
| 7 | 37.54–45.98 | "Now be very sure about one thing. The journey is the same, so the distance does not change. That means the new distance is also one hundred fifty kilometer." | Reinforce the key invariant (distance is fixed) | "distance does not change" | Same Step 1 card gains a "New Distance = 150 km" confirmation line |
| 8 | 46.42–60.76 | "Now, we know the formula, new speed is equal to new distance divided by new time. Putting the values, new speed is equal to one hundred fifty divided by one point five. This gives us one hundred kilometer per hour." | Compute the new required speed | New Speed = 150 ÷ 1.5 = 100 km/hr | Step 2 card: formula → substitution → answer, word-synced |
| 9 | 61.42–70.48 | "Now be very careful here. The question is not asking us to find the new speed. It is asking us to find the increase in speed." | Flag the common mistake (trap) | "not... new speed", "increase in speed" | Step 3 card opens with a warning line before any math |
| 10 | 71.04–90.54 | "So increase in speed is equal to new speed minus original speed. Putting the values, increase in speed is equal to one hundred minus sixty. This gives us forty kilometers per hour. So the required increase in speed is forty kilometers per hour." | Compute and restate the final answer | Increase = 100 − 60 = 40 km/hr | Step 3 card: formula → substitution → answer, word-synced |
| 11 | 90.54–94.40 | "Hence, the correct answer is option D." | Confirm correct option | Option D = 40 kmph | Correct option pulses green |

---

## PART 2 — Scene-by-Scene Storyboard

### SCENE 1 — Cold Open
- **TIMESTAMP:** 0.0–3.5s
- **VOICEOVER:** "So welcome back again. Time for one more problem."
- **VISUAL OBJECTIVE:** Empty branded canvas before content enters, establishing calm rhythm.
- **SCREEN LAYOUT:** Background layers only — dotted grid (65% opacity), bottom strip, topic name bottom-left ("Speed and Time"), logo bottom-right.
- **ON-SCREEN ELEMENTS:** dottedGrid, bottomStrip, TopicName, logo.
- **ANIMATION DETAILS:** None yet — all background layers are static and already visible at t=0.
- **CAMERA MOVEMENT:** None (fixed frame throughout the whole video).
- **TRANSITIONS:** N/A — cold open.
- **EDUCATIONAL PURPOSE:** Give the viewer a half-beat to settle before the question lands.
- **VISUAL HIERARCHY:** Background only; nothing competes for attention.
- **ATTENTION MANAGEMENT:** Deliberately quiet frame.
- **MOTION NOTES:** None.
- **CONTINUITY FROM PREVIOUS SCENE:** N/A (opening scene).

### SCENE 2 — Question Reveal + Illustration Build
- **TIMESTAMP:** 3.5–21.3s (hero rises at 3.5s via `apt.heroEnterLowered`; illustration builds progressively through 6.1–19.6s as the speed/time facts are narrated)
- **VOICEOVER:** "Now in this problem, we are given that a car is traveling at sixty kilometer per hour. At this speed, it covers the journey in two point five hours. The question is asking us to find by how much the speed should increase so that the same journey is completed in one point five hours."
- **VISUAL OBJECTIVE:** Full question text lands centered; a flat 2D car-on-road illustration builds beneath it, first showing the car at 60 km/hr taking 2.5 hr, then a second faster car appearing to represent the 1.5 hr target — visually setting up "same distance, different speed/time".
- **SCREEN LAYOUT:** `#q-full-card` centered top (`left:50%, top:80px, width:1500px`), `#serial-num` badge top-left overlapping the card, `#illustration` centered below (`top:480px`).
- **ON-SCREEN ELEMENTS:**
  - QuestionCard: "A car travelling at **60 kmph** covers a journey in **2.5 hours**. By how much must it increase its speed to cover the same journey in **1.5 hours**?" — numbers in `--primary` blue via `.num` spans.
  - SerialNum badge with fixed "Q".
  - Illustration: a flat 2D car icon (inline SVG, `--primary` fill) sitting on a minimal road line, with a "60 km/hr" speedometer-style label above it and a clock icon + "2.5 hr" label beneath the road. A second, smaller car icon (outlined, dashed) fades in to the right with a "1.5 hr" label beneath it, representing the faster target trip.
- **ANIMATION DETAILS:**
  - `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.5)` — card starts 180px lower, rises to its resting slot exactly as the opening line ends.
  - Parallel serial-num tween mirrors the same lowered-to-risen y-offset.
  - Car icon + road fade in (`apt.fadeIn`, 0.5s) at 6.12s, timed to "traveling".
  - "60 km/hr" label fades up at 6.80s, timed to "sixty".
  - Clock icon + "2.5 hr" label fades in at 11.34s, timed to "two point five".
  - Second (faster) car icon fades in at 17.72s, timed to "the same" (start of "the same journey is completed").
  - "1.5 hr" label fades in at 19.64s, timed to "one point five".
- **CAMERA MOVEMENT:** None (static frame; only internal element motion).
- **TRANSITIONS:** Straight cut into Scene 3's `apt.pinFlow` glide at 21.3s.
- **EDUCATIONAL PURPOSE:** Let the viewer visually register both trips (60 km/hr → 2.5 hr, unknown speed → 1.5 hr) as concrete paired objects before any math starts.
- **VISUAL HIERARCHY:** QuestionCard first (largest, top), illustration second (below): first car + labels primary, second car + label secondary (smaller, dashed outline).
- **ATTENTION MANAGEMENT:** Each illustration element enters exactly as its corresponding word is spoken, so the eye is always led by the voiceover, never ahead of it.
- **MOTION NOTES:** All illustration entrances are simple fades — no bounce/rotation (the badge already owns the "personality" pop via `back.out(2)`).
- **CONTINUITY FROM PREVIOUS SCENE:** The cold-open frame remains fully identical; only the question card and illustration items add on top of the unchanged background layers.

### SCENE 3 — Pin Transition + Given Card
- **TIMESTAMP:** PIN_TIME = 21.3s (pinFlow, 0.8s), GIVEN_TIME = 22.1s (own transcript-derived timestamp, distinct from PIN_TIME)
- **VOICEOVER:** "Now, first, let us find the total distance."
- **VISUAL OBJECTIVE:** Shrink the full question up into its pinned slot, then open the Given card restating the three known values (speed, original time, new time) before the solve begins.
- **SCREEN LAYOUT:** `#q-pinned` glides into `left:385px, top:30px, width:1275px`; `#illus-pinned` glides into `left:640px, top:190px, width:640px, height:150px` (smaller car+road group, same relative arrangement); `#card-given .solution-card` opens centered at `left:640px, top:480px`.
- **ON-SCREEN ELEMENTS:**
  - Pinned QuestionCard (shortened text, `.q-card.pinned`).
  - Pinned illustration group (smaller car + "60 km/hr" label, same visual language as Scene 2, scaled down).
  - Given SolutionCard: chip "Given", math lines:
    - `Speed = 60 km/hr` (line-level reveal — already spoken earlier, restated here)
    - `Original Time = 2.5 hr` (line-level reveal)
    - `New Time = 1.5 hr` (line-level reveal)
- **ANIMATION DETAILS:**
  - `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 21.3)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 21.3)` — real measured glide, not fade swap.
  - `apt.cardEnter(tl, "#card-given .solution-card", 22.1)`.
  - `apt.textReveal(tl, "#card-given .math")` — "Speed = 60 km/hr" line-level at 22.1; "Original Time = 2.5 hr" line-level at 22.5; "New Time = 1.5 hr" line-level at 22.9.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** The pin glide is the transition device itself. Given card morphs into `#stack-given` at GIVEN_MORPH_TIME = 23.9s (0.8s), completing just before Step 1 opens.
- **EDUCATIONAL PURPOSE:** Separate "what we're told" (Given) from "what we need to compute" (upcoming Steps) — a distinct recap card before any math starts.
- **VISUAL HIERARCHY:** Pinned question stays visually present but smaller/secondary; Given card is now the primary focus (center, full solution-card size).
- **ATTENTION MANAGEMENT:** All three given values are restated together so the viewer has the complete picture in one place before Step 1 begins computing.
- **MOTION NOTES:** Illustration items keep their same relative positions when they shrink into the pinned slot — real glide, not fade swap.
- **CONTINUITY FROM PREVIOUS SCENE:** The car, road, and "60 km/hr" label from Scene 2 are the SAME elements continuing their motion into the pinned slot; the second (faster) car and "1.5 hr" label are dropped from the pinned group since the Given card now carries that information as text.

### SCENE 4 — Step 1: Find the Total Distance
- **TIMESTAMP:** cardEnter at STEP1_TIME = 24.76s (Given→stack morph at 23.9s completes 24.7s, landing right as this card opens); reveals run word/line-synced through 45.38s
- **VOICEOVER:** "We know the formula, distance is equal to original speed into original time. Putting the values, distance is equal to sixty into two point five. This gives us one hundred fifty kilometer. Now be very sure about one thing. The journey is the same, so the distance does not change. That means the new distance is also one hundred fifty kilometer."
- **VISUAL OBJECTIVE:** Derive the (constant) distance from the original trip, then explicitly confirm it carries over unchanged to the new trip — this is the key invariant the whole problem hinges on.
- **SCREEN LAYOUT:** `#card-step1 .solution-card` centered at `left:560px, top:330px, width:800px` (wider/taller to hold 5 lines of math without overflow).
- **ON-SCREEN ELEMENTS:**
  - chip "Step 1"
  - Line 1 (word-level): "Distance = Original Speed × Original Time"
  - Line 2 (word-level): "= 60 × 2.5"
  - Line 3 (word-level, `.ans`): "= 150 km"
  - Line 4 (line-level): "Same journey ⇒ distance unchanged"
  - Line 5 (word-level): "New Distance = 150 km"
- **ANIMATION DETAILS:**
  - `apt.cardEnter(tl, "#card-step1 .solution-card", 24.76)`.
  - `apt.textReveal(tl, "#card-step1 .math")` — Line 1 words from 26.06–29.56; Line 2 words from 31.98–34.14; Line 3 (`.ans`) words from 35.16–36.58; Line 4 line-level at 39.42; Line 5 words from 43.30–45.38 (see Part 5 timeline for exact seconds).
  - No `apt.emphasize`/`apt.resultReveal` layered on top of the `.ans` line — the text-reveal fade is the only animation on that content.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Given card morphs into `#stack-given` at 23.9s just before this card opens; this card itself morphs into `#stack-step1` at STEP1_MORPH_TIME = 45.6s.
- **EDUCATIONAL PURPOSE:** Establish the distance calculation AND the "distance is constant" invariant in one continuous card, since both ideas are needed before Step 2 can proceed.
- **VISUAL HIERARCHY:** "= 150 km" (`.ans`) is the first visual peak; "New Distance = 150 km" echoes it at the end, reinforcing the invariant rather than introducing a new number.
- **ATTENTION MANAGEMENT:** Each computed number (150, then the restated 150) appears the instant it's spoken — no line is fully visible before its own narration reaches it.
- **MOTION NOTES:** Standard word/line-synced reveal only; no idle motion needed since content is continuously updating for the full ~21s the card is on screen.
- **CONTINUITY FROM PREVIOUS SCENE:** The Given stack card (chip "G") is now visible and static in the left column as this card opens center-stage; the pinned question and illustration remain fixed at top, unchanged and idle throughout this whole step.

### SCENE 5 — Step 2: Find the Required New Speed
- **TIMESTAMP:** cardEnter at STEP2_TIME = 46.42s (Step 1→stack morph at 45.6s completes 46.4s)
- **VOICEOVER:** "Now, we know the formula, new speed is equal to new distance divided by new time. Putting the values, new speed is equal to one hundred fifty divided by one point five. This gives us one hundred kilometer per hour."
- **VISUAL OBJECTIVE:** Apply the Speed = Distance ÷ Time formula using the new time (1.5 hr) and the just-confirmed distance (150 km) to find the new required speed.
- **SCREEN LAYOUT:** `#card-step2 .solution-card` centered at `left:600px, top:440px, width:720px`.
- **ON-SCREEN ELEMENTS:**
  - chip "Step 2"
  - Line 1 (word-level): "New Speed = New Distance ÷ New Time"
  - Line 2 (word-level, fraction-styled): "= 150 ÷ 1.5"
  - Line 3 (word-level, `.ans`): "= 100 km/hr"
- **ANIMATION DETAILS:**
  - `apt.cardEnter(tl, "#card-step2 .solution-card", 46.42)`.
  - `apt.textReveal(tl, "#card-step2 .math")` — Line 1 words from 48.02–50.84; Line 2 words from 53.00–56.86; Line 3 (`.ans`) words from 57.62–60.44.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Morphs into `#stack-step2` at STEP2_MORPH_TIME = 60.6s, landing right as Step 3's trap-warning line opens.
- **EDUCATIONAL PURPOSE:** Show the payoff of Step 1's distance work — plugging the constant 150 km straight into the formula with the new time.
- **VISUAL HIERARCHY:** "= 100 km/hr" is the visual climax of this card — but deliberately NOT the final answer, setting up Step 3's trap.
- **ATTENTION MANAGEMENT:** The division "150 ÷ 1.5" is given its own beat before collapsing to "100 km/hr", so the viewer sees the computation happen rather than the answer appearing out of nowhere.
- **MOTION NOTES:** Standard text-reveal only; no extra pulse on "100 km/hr" — it's an intermediate result, not the final one.
- **CONTINUITY FROM PREVIOUS SCENE:** Step 1's stack card (circle "1") is now static in the left column beneath "G"; the `line-g-1` connector between G and 1 has already grown in and remains visible, continuous and unfaded, throughout this scene.

### SCENE 6 — Step 3: The Trap + Find the Increase
- **TIMESTAMP:** cardEnter at STEP3_TIME = 61.42s (Step 2→stack morph at 60.6s completes 61.4s); reveals run through 85.04s
- **VOICEOVER:** "Now be very careful here. The question is not asking us to find the new speed. It is asking us to find the increase in speed. So increase in speed is equal to new speed minus original speed. Putting the values, increase in speed is equal to one hundred minus sixty. This gives us forty kilometers per hour. So the required increase in speed is forty kilometers per hour."
- **VISUAL OBJECTIVE:** Explicitly flag the common mistake (stopping at the new speed) before showing the correct final computation — the increase, not the new speed itself.
- **SCREEN LAYOUT:** `#card-step3 .solution-card` centered at `left:560px, top:400px, width:800px` (wider/taller to hold the warning line plus 4 math lines).
- **ON-SCREEN ELEMENTS:**
  - chip "Step 3"
  - Line 1 (line-level, trap warning): "Not the new speed — find the increase!"
  - Line 2 (word-level): "Increase = New Speed − Original Speed"
  - Line 3 (word-level): "= 100 − 60"
  - Line 4 (word-level, `.ans`): "= 40 km/hr"
- **ANIMATION DETAILS:**
  - `apt.cardEnter(tl, "#card-step3 .solution-card", 61.42)`.
  - `apt.textReveal(tl, "#card-step3 .math")` — Line 1 line-level at 63.04 (start of "The question is not asking..."); Line 2 words from 71.04–75.14; Line 3 words from 77.80–81.92; Line 4 (`.ans`) words from 82.94–85.04.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Morphs into `#stack-step3` at STEP3_MORPH_TIME = 89.8s, paired with `apt.recenterForOptions` on the pinned question at the same timestamp and a fade-out of the pinned illustration.
- **EDUCATIONAL PURPOSE:** This is the conceptual crux flagged in the script's common-mistake guardrail — the video makes the trap visible on screen, not just spoken.
- **VISUAL HIERARCHY:** "= 40 km/hr" (`.ans`) is the true climax of the whole video — the warning line primes the viewer so this number lands as the corrected, deliberate answer.
- **ATTENTION MANAGEMENT:** The warning line sits alone on screen for ~8s (63.04–71.04) while the narration explains the trap, before any new math appears — giving the mistake room to register before the correct computation starts.
- **MOTION NOTES:** Standard text-reveal only; no extra pulse on "40 km/hr" here — the correctness confirmation pulse is reserved for the matching option button in Scene 7. The card stays on screen through the narration's restatement ("So the required increase in speed is forty kilometers per hour") before morphing out.
- **CONTINUITY FROM PREVIOUS SCENE:** Step 2's stack card (circle "2") is now static in the left column beneath "1"; the `line-1-2` connector has already grown in and remains visible, continuous and unfaded, throughout this scene.

### SCENE 7 — Options Reveal
- **TIMESTAMP:** 89.8–94.40s (`RECENTER_TIME`/`STEP3_MORPH_TIME` = 89.8s; options fade in 90.6s; stagger 91.0s; correct pulse 93.70s)
- **VOICEOVER:** "Hence, the correct answer is option D."
- **VISUAL OBJECTIVE:** Reveal the 2×2 options grid and confirm option D (40 kmph) as correct.
- **SCREEN LAYOUT:** `.pinned-col` at `top:400px`, `.options-grid` 2×2; pinned question recenters via `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 89.8)` to align with the options column.
- **ON-SCREEN ELEMENTS:**
  - Option A: "50 kmph"
  - Option B: "100 kmph"
  - Option C: "30 kmph"
  - Option D: "40 kmph" — `class="correct"`
- **ANIMATION DETAILS:**
  - `apt.fadeOut(tl, "#illus-pinned", 89.8)` — illustration has done its job, drops out as the stage clears.
  - `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 89.8)`.
  - `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 89.8)` + `apt.stackLineGrow(tl, "#line-2-3", 89.8)`.
  - `apt.fadeIn(tl, "#options-reveal", 90.6)`.
  - `apt.optionsStagger(tl, ".opt-btn", 91.0)`.
  - `apt.correctPulse(tl, ".opt-btn.correct", 93.70)` — lands right as "option D" is spoken (93.70–94.40s).
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Final scene — timeline holds at the end (~95.5s) with all stack cards, connector lines, pinned question, and highlighted correct option visible.
- **EDUCATIONAL PURPOSE:** Close the loop between the derived answer (40 km/hr, still visible in the Step 3 stack card) and the multiple-choice option that matches it.
- **VISUAL HIERARCHY:** Correct option's green pulse is the final, most emphasized element on screen.
- **ATTENTION MANAGEMENT:** The stagger reveals all four options first (fair presentation of choices) before singling out the correct one.
- **MOTION NOTES:** `apt.correctPulse` (0.4s yoyo, `back.out(1.5)`) is the only pulse in the whole video, reserved for this single moment of confirmation.
- **CONTINUITY FROM PREVIOUS SCENE:** Step 3's card is mid-morph into its stack slot as the options fade in — the left column (G, 1, 2, 3 stack cards with all connector lines fully grown) stays visible and unchanged for the remainder of the video, giving the viewer the full solved chain alongside the confirmed answer.

---

## PART 3 — Asset List Required

- Shared `_template/assets/` (serial-num-badge.svg, logo.png).
- `illustration/car.svg` — per-question flat 2D car icon (recolored from a user-supplied source SVG to `--primary` `#6373db` body / `--primary-light` `#e2e5ff` windows / black outlines and wheels, matching the design system palette). Used twice: full size (140px) for Car 1 (original trip) in Phase 1's `#illustration`, grayscale+faded (`.car-icon.faster`) for Car 2 (target trip), and reduced size (100px) for the pinned `#illus-pinned-icon`.
- Road line and speed/time labels remain inline flat 2D shapes (divs) directly in `index.html`.

## PART 4 — Animation Complexity Notes

- Three stack transitions (Given→stack, Step1→stack, Step2→stack, Step3→stack) — full standard 4-card chain (G, 1, 2, 3) with 3 connector lines (`line-g-1`, `line-1-2`, `line-2-3`).
- Step 1 is a 5-line card carrying two ideas (compute distance + confirm it's unchanged) — the longest single card, mirroring how much narration time it covers (~21s).
- Step 3 opens with an ~8s silent-warning hold (line-level trap text on screen alone before any new math appears) — this is the deliberate common-mistake beat called for by the script.
- Illustration uses no continuous loop (`apt.ambientLoop` not needed) — Phase 1 illustration builds once and is fully static by pin time (21.3s); the pinned illustration only survives ~68s before fading at the recenter, and the Given/Step cards keep the center of the frame busy throughout.
- `apt.recenterForOptions` and the final `morphToStack`/`stackLineGrow` are intentionally fired at the same timestamp (89.8s), per the template's own convention.

## PART 5 — Master Timeline Overview

```
TIME(s)   EVENT
0.0       Background layers visible (dotted grid, bottom strip, topic name, logo)
0.1       (audio starts)
3.5       apt.heroEnterLowered — QuestionCard + SerialNum rise to resting position
6.12      Car + road fade in (illustration)
6.80      "60 km/hr" label fades in
11.34     Clock + "2.5 hr" label fades in
17.72     Second (faster) car fades in
19.64     "1.5 hr" label fades in
21.3      PIN_TIME — apt.pinFlow (question + illustration glide to pinned slot), 0.8s
22.1      GIVEN_TIME — apt.cardEnter #card-given; apt.textReveal begins
 22.1     .rv "Speed = 60 km/hr"           (line-level)
 22.5     .rv "Original Time = 2.5 hr"     (line-level)
 22.9     .rv "New Time = 1.5 hr"          (line-level)
23.9      apt.morphToStack Given → stack-given (0.8s)
24.76     STEP1_TIME — apt.cardEnter #card-step1; apt.textReveal begins
 26.06    .rv "Distance" "=" "Original" "Speed" "×" "Original" "Time"   (word-level)
 31.98    .rv "=" "60" "×" "2.5"                                        (word-level)
 35.16    .rv "=" "150" "km"  [.ans]                                    (word-level)
 39.42    .rv "Same journey ⇒ distance unchanged"                       (line-level)
 43.30    .rv "New" "Distance" "=" "150" "km"                           (word-level)
45.6      apt.morphToStack Step1 → stack-step1 (0.8s); apt.stackLineGrow #line-g-1
46.42     STEP2_TIME — apt.cardEnter #card-step2; apt.textReveal begins
 48.02    .rv "New" "Speed" "=" "New" "Distance" "÷" "New" "Time"       (word-level)
 53.00    .rv "=" "150" "÷" "1.5"                                       (word-level)
 57.62    .rv "=" "100" "km/hr"  [.ans]                                 (word-level)
60.6      apt.morphToStack Step2 → stack-step2 (0.8s); apt.stackLineGrow #line-1-2
61.42     STEP3_TIME — apt.cardEnter #card-step3; apt.textReveal begins
 63.04    .rv "Not the new speed — find the increase!"                  (line-level)
 71.04    .rv "Increase" "=" "New" "Speed" "−" "Original" "Speed"        (word-level)
 77.80    .rv "=" "100" "−" "60"                                        (word-level)
 82.94    .rv "=" "40" "km/hr"  [.ans]                                  (word-level)
89.8      RECENTER_TIME / STEP3_MORPH_TIME —
          apt.fadeOut #illus-pinned;
          apt.recenterForOptions #q-pinned (xShift:160, yShift:180);
          apt.morphToStack Step3 → stack-step3 (0.8s);
          apt.stackLineGrow #line-2-3
90.6      apt.fadeIn #options-reveal
91.0      apt.optionsStagger .opt-btn (stagger 0.12s)
93.70     apt.correctPulse .opt-btn.correct (option D)
95.5      End hold — all elements remain visible
```

**Video duration:** 94.40s voiceover + ~1.1s end hold ≈ 95.5s total.
