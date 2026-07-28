# Storyboard — Train Crosses a Tunnel (Speed & Time, Advanced, ques31)

**Question:** A train crosses a 2 km long tunnel in 3 minutes 20 seconds. Its speed in km/hr is:
A) 45  B) 40  C) 36 ✅  D) 30

---

## PART 1 — Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|-----------|-----------|----------------------|------------------|-------------------|
| 1 | 0.0–3.56 | "So welcome back again. Time for one more problem." | Hook / orientation | Center screen, empty stage | Establish calm opening beat before content enters |
| 2 | 4.00–10.22 | "Now in this problem, we are given that a train crosses a two-kilometer-long tunnel in three minutes, 20 seconds." | State the problem | Question card + illustration | Full question text appears; train + tunnel illustration builds |
| 3 | 10.74–16.22 | "The question is asking us to find the speed of the train in kilometer per hour." | Clarify what's being asked | "speed", "kilometer per hour" highlighted | Reinforce the unknown (speed in km/hr) |
| 4 | 16.76–22.88 | "So the total distance covered is two kilometer, but the time is given in minutes and seconds." | Identify given data | Distance value, time format mismatch | Question pins to top; Given card opens with Distance = 2 km, Time = 3 min 20 sec |
| 5 | 23.64–28.88 | "Since the speed is asked in kilometer per hour, we first need to convert the time into hours." | State the strategy | Unit-conversion necessity | Step 1 card opens with title/intro line |
| 6 | 29.56–42.60 | "Three minutes, 20 seconds means three minutes is equal to three into 60, which is 180 seconds. Adding the remaining 20 seconds, we get 180 plus 20, which is 200 seconds." | Convert minutes to seconds, then total seconds | 3×60=180, 180+20=200 | Word-synced reveal of the conversion math inside Step 1 |
| 7 | 42.94–58.86 | "Now we know that one hour is equal to 3,600 seconds. So to convert seconds into hours, we divide by 3,600. Therefore, 200 seconds is equal to 200 divided by 3,600 hours." | Convert seconds to hours via ratio | 1 hr = 3600 sec; 200/3600 | Continue word-synced reveal inside the same Step 1 card |
| 8 | 59.36–62.56 | "After simplifying this, we get one by 18 hour." | Final simplified time | 1/18 hr (answer of Step 1) | Fraction answer highlighted; Step 1 → stack morph follows |
| 9 | 63.04–67.00 | "Now we know the formula. Speed is equal to distance divided by time." | State the core formula | Speed = Distance ÷ Time | Step 2 card opens with formula line |
| 10 | 67.42–71.94 | "Putting the values, speed is equal to two divided by one by 18." | Substitute values | 2 ÷ (1/18) | Word-synced reveal of substitution |
| 11 | 72.56–80.72 | "After simplifying this, we get 36 kilometer per hour. So the speed of the train is 36 kilometer per hour." | Final answer | 36 km/hr | Answer highlighted in Step 2; morph to stack, options reveal begins |
| 12 | 81.30–83.68 | "Hence, the correct answer is option C." | Confirm correct option | Option C = 36 km/hr | Correct option pulses green |

---

## PART 2 — Scene-by-Scene Storyboard

### SCENE 1 — Cold Open
- **TIMESTAMP:** 0.0–3.6s
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
- **TIMESTAMP:** 3.6–16.5s (hero rises at 3.6s using `apt.heroEnterLowered`, illustration builds progressively through 5.9–16.2s as the tunnel-crossing fact is narrated)
- **VOICEOVER:** "Now in this problem, we are given that a train crosses a two-kilometer-long tunnel in three minutes, 20 seconds. The question is asking us to find the speed of the train in kilometer per hour."
- **VISUAL OBJECTIVE:** Full question text lands centered, with a flat 2D train-and-tunnel illustration building beneath it to visually anchor "2 km tunnel" and "3 min 20 sec".
- **SCREEN LAYOUT:** `#q-full-card` centered top (`left:50%, top:80px, width:1500px`), `#serial-num` badge top-left overlapping the card, `#illustration` centered below (`top:480px`).
- **ON-SCREEN ELEMENTS:**
  - QuestionCard: "A train crosses a **2 km** long tunnel in **3 min 20 sec**. Its speed in **km/hr** is:" — the numbers `2 km`, `3 min 20 sec`, and the unit `km/hr` in `--primary` blue via `.num` spans.
  - SerialNum badge with fixed "Q".
  - Illustration: a single flat-line train-in-tunnel icon (`illustration/train-tunnel.svg`, recolored to `--primary` `#6373db`) centered in the illustration band; a "2 km" label beneath it; a small stopwatch icon (circle + tick mark, `--primary` outline) to the upper-left with "3:20" label.
- **ANIMATION DETAILS:**
  - `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.6)` — card starts 180px lower and centered-feeling, rises to its resting slot exactly as the opening line ends.
  - Parallel serial-num tween mirrors the same lowered-to-risen y-offset (per template's standard pattern).
  - Train-tunnel icon fades in (`apt.fadeIn`, 0.5s) at 5.9s, timed to "a train crosses".
  - "2 km" distance label fades up at 8.7s, timed to "in three minutes" (tying the visual distance callout to the moment duration is about to be stated), using a plain `apt.fadeIn`.
  - Stopwatch icon + "3:20" label fades in at 8.9s, timed to "three minutes, 20 seconds."
- **CAMERA MOVEMENT:** None (static frame; only internal element motion).
- **TRANSITIONS:** Straight cut into Scene 3's `apt.pinFlow` glide at 16.5s.
- **EDUCATIONAL PURPOSE:** Let the viewer visually register the two given facts (2 km distance, 3 min 20 sec duration) as concrete objects, not just words.
- **VISUAL HIERARCHY:** QuestionCard first (largest, top), illustration second (below), stopwatch/distance labels tertiary (small, supporting).
- **ATTENTION MANAGEMENT:** Each illustration element enters exactly as its corresponding word is spoken, so the eye is always led by the voiceover, never ahead of it.
- **MOTION NOTES:** All illustration entrances are simple fades/slides — no bounce/rotation on the tunnel/train themselves (the badge already owns the "personality" pop via `back.out(2)`).
- **CONTINUITY FROM PREVIOUS SCENE:** The cold-open frame remains fully identical; only the question card and illustration items add on top of the unchanged background layers.

### SCENE 3 — Pin Transition + Given Card
- **TIMESTAMP:** PIN_TIME = 16.5s (pinFlow, 0.8s), GIVEN_TIME = 17.3s (own transcript-derived timestamp, distinct from PIN_TIME)
- **VOICEOVER:** "So the total distance covered is two kilometer, but the time is given in minutes and seconds."
- **VISUAL OBJECTIVE:** Shrink the full question up into its pinned slot, then open the Given card stating the two known values in the vocabulary needed for the solve (distance in km, time not yet in the needed unit).
- **SCREEN LAYOUT:** `#q-pinned` glides into `left:385px, top:30px, width:1275px`; `#illus-pinned` glides into `left:640px, top:190px, width:640px, height:150px` (smaller train-tunnel icon, same relative arrangement); `#card-given .solution-card` opens centered at `left:640px, top:480px`.
- **ON-SCREEN ELEMENTS:**
  - Pinned QuestionCard (shortened text, `.q-card.pinned`).
  - Pinned illustration group (smaller train-tunnel icon + "2 km" label, same visual language as Scene 2, just scaled down).
  - Given SolutionCard: chip "Given", math lines:
    - `Distance = 2 km` (word-level reveal, matches "two kilometer")
    - `Time = 3 min 20 sec` (line-level reveal — paraphrased restatement, no exact word match at this point in the narration)
- **ANIMATION DETAILS:**
  - `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 16.5)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 16.5)` — real measured glide, not fade swap.
  - `apt.cardEnter(tl, "#card-given .solution-card", 17.3)`.
  - `apt.textReveal(tl, "#card-given .math")` — "Distance" `18.26`, "=" `18.139`("is"), "2 km" `18.26` (word "two", "kilometer,"); "Time = 3 min 20 sec" line-level at `19.479` (start of "but the time is given...").
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** The pin glide is the transition device itself — question+illustration visibly travel from Scene 2's large center layout into Scene 3's pinned slot.
- **EDUCATIONAL PURPOSE:** Separate "what we're told" (Given) from "what we need to compute" (upcoming Steps) — a distinct card for raw given data before any math starts.
- **VISUAL HIERARCHY:** Pinned question stays visually present but smaller/secondary; Given card is now the primary focus (center, full solution-card size).
- **ATTENTION MANAGEMENT:** The mismatch flagged by the narration ("distance in km, but time in min/sec — not the units we need") is made visually explicit by simply displaying Time in its raw min/sec form, setting up Step 1's conversion.
- **MOTION NOTES:** Illustration items keep their same relative positions when they shrink into the pinned slot (train stays left of tunnel, labels stay attached) — this is what "real glide" vs "fade swap" means concretely here.
- **CONTINUITY FROM PREVIOUS SCENE:** The train, tunnel, and distance/time labels from Scene 2 are the SAME elements continuing their motion into the pinned slot — no new illustration assets are introduced, they just travel and resize.

### SCENE 4 — Step 1: Convert Time to Hours
- **TIMESTAMP:** cardEnter at STEP1_TIME = 24.7s (Given→stack morph at 22.9s completes 23.7s, satisfying the ~1s breathing gap before Step 1 opens); math reveals run word-synced through 62.56s
- **VOICEOVER:** "Since the speed is asked in kilometer per hour, we first need to convert the time into hours. Three minutes, 20 seconds means three minutes is equal to three into 60, which is 180 seconds. Adding the remaining 20 seconds, we get 180 plus 20, which is 200 seconds. Now we know that one hour is equal to 3,600 seconds. So to convert seconds into hours, we divide by 3,600. Therefore, 200 seconds is equal to 200 divided by 3,600 hours. After simplifying this, we get one by 18 hour."
- **VISUAL OBJECTIVE:** Walk through the full minutes→seconds→hours conversion as a single continuous solution card (this IS the bulk of the problem), each line appearing exactly as its numbers are spoken.
- **SCREEN LAYOUT:** `#card-step1 .solution-card` centered at `left:560px, top:330px, width:800px` (wider/taller than default to hold 6 lines of math without overflow).
- **ON-SCREEN ELEMENTS:**
  - chip "Step 1"
  - Line 1 (line-level): "Convert 3 min 20 sec into hours"
  - Line 2 (word-level): "3 min = 3 × 60 = 180 sec"
  - Line 3 (word-level): "180 + 20 = 200 sec"
  - Line 4 (word-level): "1 hr = 3600 sec"
  - Line 5 (word-level): "200 sec = 200/3600 hr" (fraction styled via `.frac`)
  - Line 6 (word-level, `.ans` styled): "= 1/18 hr"
- **ANIMATION DETAILS:**
  - `apt.cardEnter(tl, "#card-step1 .solution-card", 24.7)`.
  - `apt.textReveal(tl, "#card-step1 .math")` with `.rv[data-t]` on every span (see Part 5 timeline for exact seconds pulled from `transcript.json`).
  - No `apt.emphasize`/`apt.resultReveal` layered on top of the `.ans` fraction — the text-reveal fade is the only animation on that content.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Given card morphs into `#stack-given` at 22.9s (0.8s) just before this card opens; this card itself morphs into `#stack-step1` at STEP1_MORPH_TIME = 62.9s.
- **EDUCATIONAL PURPOSE:** This is the conceptual crux of the problem (unit conversion) — the longest, most detailed card, matching how long the narration spends on it.
- **VISUAL HIERARCHY:** The fraction "1/18 hr" answer at the bottom is styled `.ans` (accent weight) so it reads as the card's takeaway even though five lines precede it.
- **ATTENTION MANAGEMENT:** Each computed number (180, 200, 3600, 1/18) appears the instant it's spoken — no line is fully visible before its own narration reaches it.
- **MOTION NOTES:** Because this card is on screen for ~38 seconds, no idle motion is added — the steady drip-feed of `.rv` reveals is what keeps it visually alive; no `apt.ambientLoop` is needed here since content itself is continuously updating.
- **CONTINUITY FROM PREVIOUS SCENE:** The Given stack card (chip "G") is now visible and static in the left column as this card opens center-stage; the pinned question and illustration remain fixed at top, unchanged and idle throughout this whole step.

### SCENE 5 — Step 2: Apply the Speed Formula
- **TIMESTAMP:** cardEnter at STEP2_TIME = 64.0s (Step 1→stack morph at 62.9s completes 63.7s)
- **VOICEOVER:** "Now we know the formula. Speed is equal to distance divided by time. Putting the values, speed is equal to two divided by one by 18. After simplifying this, we get 36 kilometer per hour. So the speed of the train is 36 kilometer per hour."
- **VISUAL OBJECTIVE:** State the Speed = Distance ÷ Time formula, substitute the known distance (2 km) and the just-derived time (1/18 hr), and land on the final answer 36 km/hr.
- **SCREEN LAYOUT:** `#card-step2 .solution-card` centered at `left:600px, top:460px, width:720px`.
- **ON-SCREEN ELEMENTS:**
  - chip "Step 2"
  - Line 1 (word-level): "Speed = Distance / Time"
  - Line 2 (word-level, fraction-styled): "= 2 / (1/18)"
  - Line 3 (word-level, `.ans`): "= 36 km/hr"
- **ANIMATION DETAILS:**
  - `apt.cardEnter(tl, "#card-step2 .solution-card", 64.0)`.
  - `apt.textReveal(tl, "#card-step2 .math")` with exact `.rv[data-t]` seconds pulled from transcript (see Part 5).
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Morphs into `#stack-step2` at STEP2_MORPH_TIME = 80.9s, paired with `apt.recenterForOptions` on the pinned question at the same timestamp (clearing the stage for the options grid) and a fade-out of the pinned illustration.
- **EDUCATIONAL PURPOSE:** Show the payoff of Step 1's conversion — plugging 1/18 hr straight into the standard formula.
- **VISUAL HIERARCHY:** "36 km/hr" is the visual climax of the whole card — `.ans` styling makes it the biggest accent moment before the options reveal.
- **ATTENTION MANAGEMENT:** The fraction "2 ÷ 1/18" is given its own beat before collapsing to "36 km/hr", so the viewer sees the division happen rather than the answer appearing out of nowhere.
- **MOTION NOTES:** Standard text-reveal only; no extra pulse on "36 km/hr" here — the correctness confirmation pulse is reserved for the matching option button in Scene 6.
- **CONTINUITY FROM PREVIOUS SCENE:** Step 1's stack card (circle "1") is now static in the left column beneath "G"; the `line-g-1` connector between G and 1 has already grown in and remains visible, continuous and unfaded, throughout this scene.

### SCENE 6 — Options Reveal
- **TIMESTAMP:** 80.9–83.68s (`RECENTER_TIME`/`STEP2_MORPH_TIME` = 80.9s; options fade in 81.7s; stagger 82.0s; correct pulse 82.9s)
- **VOICEOVER:** "Hence, the correct answer is option C."
- **VISUAL OBJECTIVE:** Reveal the 2×2 options grid and confirm option C (36 km/hr) as correct.
- **SCREEN LAYOUT:** `.pinned-col` at `top:400px`, `.options-grid` 2×2; pinned question recenters via `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 80.9)` to align with the options column.
- **ON-SCREEN ELEMENTS:**
  - Option A: "45"
  - Option B: "40"
  - Option C: "36" — `class="correct"`
  - Option D: "30"
- **ANIMATION DETAILS:**
  - `apt.fadeOut(tl, "#illus-pinned", 80.9)` — illustration has done its job, drops out as the stage clears.
  - `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 80.9)`.
  - `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 80.9)` + `apt.stackLineGrow(tl, "#line-1-2", 80.9)`.
  - `apt.fadeIn(tl, "#options-reveal", 81.7)`.
  - `apt.optionsStagger(tl, ".opt-btn", 82.0)`.
  - `apt.correctPulse(tl, ".opt-btn.correct", 82.9)` — lands right as "option C" is spoken (83.08–83.68s).
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Final scene — timeline holds at the end (~85.5s) with all stack cards, connector lines, pinned question, and highlighted correct option visible.
- **EDUCATIONAL PURPOSE:** Close the loop between the derived answer (36 km/hr, still visible in the Step 2 stack card) and the multiple-choice option that matches it.
- **VISUAL HIERARCHY:** Correct option's green pulse is the final, most emphasized element on screen.
- **ATTENTION MANAGEMENT:** The stagger reveals all four options first (fair presentation of choices) before singling out the correct one — mirrors how the narration states the answer only after establishing what was asked.
- **MOTION NOTES:** `apt.correctPulse` (0.4s yoyo, `back.out(1.5)`) is the only pulse in the whole video, reserved for this single moment of confirmation.
- **CONTINUITY FROM PREVIOUS SCENE:** Step 2's card is mid-morph into its stack slot as the options fade in — the left column (G, 1, 2 stack cards with both connector lines fully grown) stays visible and unchanged for the remainder of the video, giving the viewer the full solved chain alongside the confirmed answer.

---

## PART 3 — Asset List Required

- Shared `_template/assets/` (serial-num-badge.svg, logo.png).
- `illustration/train-tunnel.svg` — single train-in-tunnel line icon, per-question asset, stroke recolored to `--primary` (`#6373db`). Used at full size (220×220px) in Phase 1's `#illustration` and at reduced size (100×100px) in the pinned `#illus-pinned` group.
- Stopwatch + "2 km"/"3:20" labels remain inline flat 2D shapes (divs) directly in `index.html`.

## PART 4 — Animation Complexity Notes

- Single long Step 1 card (~38s on screen) is the main complexity point — six `.rv`-wrapped lines, mixing word-level (numeric/equation) and one line-level (intro) reveal, all timed from `transcript.json`.
- Only two stack transitions after Given (Step 1→stack, Step 2→stack) — no Step 3, since the problem only has two solving stages (convert units, apply formula). Stack column therefore holds exactly 3 cards (G, 1, 2) with 2 connector lines (`line-g-1`, `line-1-2`).
- Illustration uses no continuous loop (`apt.ambientLoop` not needed) — Phase 1 illustration builds once and is fully static by the time it's spoken about, then pins down at 16.5s.
- `apt.recenterForOptions` and the final `morphToStack`/`stackLineGrow` are intentionally fired at the same timestamp (80.9s) as in the template's own convention.

## PART 5 — Master Timeline Overview

```
TIME(s)   EVENT
0.0       Background layers visible (dotted grid, bottom strip, topic name, logo)
0.3       (audio starts)
3.6       apt.heroEnterLowered — QuestionCard + SerialNum rise to resting position
5.9       Train fades/slides in (illustration)
7.2       Tunnel arch fades in
8.7       "2 km" distance label fades in
8.9       Stopwatch "3:20" label fades in
16.5      PIN_TIME — apt.pinFlow (question + illustration glide to pinned slot), 0.8s
17.3      GIVEN_TIME — apt.cardEnter #card-given; apt.textReveal begins
 18.26    .rv "Distance" / "=" / "2 km"  (word-level)
 19.48    .rv "Time = 3 min 20 sec"      (line-level)
22.9      apt.morphToStack Given → stack-given (0.8s)
24.7      STEP1_TIME — apt.cardEnter #card-step1; apt.textReveal begins
 25.0     .rv "Convert 3 min 20 sec into hours" (line-level)
 31.82    .rv "3" "min" "=" "3" "×" "60" "="        (word-level, "3 min = 3×60")
 35.60    .rv "180" "sec"                            (word-level)
 39.66    .rv "180" "+" "20" "="                     (word-level)
 41.84    .rv "200" "sec"                             (word-level)
 44.26    .rv "1" "hr" "="                            (word-level)
 46.50    .rv "3600" "sec"                            (word-level)
 54.04    .rv "200" "sec" "="                         (word-level)
 55.56    .rv "200" "/"                               (word-level, fraction)
 57.30    .rv "3600" "hr"                             (word-level)
 61.02    .rv "=" (Step1 answer intro)
 61.38    .rv "1" "/" "18" "hr"  [.ans]               (word-level, fraction)
62.9      apt.morphToStack Step1 → stack-step1 (0.8s); apt.stackLineGrow #line-g-1
64.0      STEP2_TIME — apt.cardEnter #card-step2; apt.textReveal begins
 64.52    .rv "Speed" "=" "Distance" "/" "Time"       (word-level)
 69.24    .rv "=" "2" "/" "1/18"                       (word-level, fraction)
 74.30    .rv "=" "36" "km/hr"  [.ans]                (word-level)
80.9      RECENTER_TIME / STEP2_MORPH_TIME —
          apt.fadeOut #illus-pinned;
          apt.recenterForOptions #q-pinned (xShift:160, yShift:180);
          apt.morphToStack Step2 → stack-step2 (0.8s);
          apt.stackLineGrow #line-1-2
81.7      apt.fadeIn #options-reveal
82.0      apt.optionsStagger .opt-btn (stagger 0.12s)
82.9      apt.correctPulse .opt-btn.correct (option C)
85.5      End hold — all elements remain visible
```

**Video duration:** 83.68s voiceover + ~1.8s end hold ≈ 85.5s total.
