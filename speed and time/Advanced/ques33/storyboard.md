# Storyboard — Delivery Van Stoppage Time (Speed and Time, Advanced, ques33)

**Question:** A delivery van travels at 45 kmph excluding stops and 36 kmph including stops. Total stoppage time over 5 hours of journey is:
A) 45 min  B) 60 min ✅  C) 75 min  D) 50 min

---

## PART 1 — Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|-----------|-----------|----------------------|------------------|-------------------|
| 1 | 0.10–3.26 | "So welcome back again. Time for one more problem." | Hook / orientation | Center screen, empty stage | Calm opening beat before content enters |
| 2 | 3.80–10.44 | "Now, in this problem, we are given that the speed of a delivery van, excluding stops, is forty-five kilometer per hour." | State the no-stop speed | "forty-five kilometer per hour" | Question card lands; van + road illustration builds, "45 km/hr" label appears |
| 3 | 11.10–14.68 | "Its average speed, including stops, is thirty-six kilometer per hour." | State the with-stop average speed | "thirty-six kilometer per hour" | "36 km/hr" label + small stop-badge appear next to the van |
| 4 | 15.48–19.24 | "Also, the total journey time, including stops, is five hours." | State total journey time | "five hours" | Clock icon + "5 hr" label appear |
| 5 | 19.72–25.42 | "The question is asking us to find the total stoppage time. Now, first, let us find the total distance covered." | State the unknown + set up solving strategy | "total stoppage time", "total distance" | Question pins to top; Given card opens restating the three known values |
| 6 | 25.90–39.30 | "Since the average speed, including stops, is thirty-six kilometer per hour, the total distance is equal to average speed into total time. That is equal to thirty-six into five. This gives us one hundred and eighty kilometer." | Compute total distance using the with-stops average speed | Distance = 36 × 5 = 180 km | Step 1 card: formula → substitution → answer, word-synced |
| 7 | 39.84–43.96 | "Now that we know the total distance, let us find the actual moving time." | Transition into Step 2 | Transition beat | Step 1 card holds its answer while this bridging line plays |
| 8 | 44.58–54.88 | "Moving time is equal to total distance divided by the speed at which the van was moving without any stoppage. That is equal to one hundred and eighty divided by forty-five. This gives us four hours." | Compute actual moving time using the no-stops speed | Moving Time = 180 ÷ 45 = 4 hr | Step 2 card: formula → substitution → answer, word-synced |
| 9 | 55.28–61.72 | "Now we have both the values we need. The total journey took five hours, but the van was moving only for four hours." | Contrast total time vs moving time before subtracting | "five hours... four hours" | Step 2 card holds its answer while this bridging line plays |
| 10 | 62.12–74.92 | "So the stoppage time is equal to total time minus moving time, which is five minus four. This gives us one hour, and one hour is equal to sixty minutes. So the total stoppage time is sixty minutes." | Compute stoppage time and convert to minutes | Stoppage Time = 5 − 4 = 1 hr = 60 min | Step 3 card: formula → substitution → answer (hours) → answer (minutes), word-synced |
| 11 | 75.56–78.92 | "Hence, the correct answer is option B." | Confirm correct option | Option B = 60 min | Correct option pulses green |

---

## PART 2 — Scene-by-Scene Storyboard

### SCENE 1 — Cold Open
- **TIMESTAMP:** 0.0–3.8s
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
- **TIMESTAMP:** 3.8–22.9s (hero rises at 3.8s via `apt.heroEnterLowered`; illustration builds progressively through 6.02–18.6s as the speed/time facts are narrated)
- **VOICEOVER:** "Now, in this problem, we are given that the speed of a delivery van, excluding stops, is forty-five kilometer per hour. Its average speed, including stops, is thirty-six kilometer per hour. Also, the total journey time, including stops, is five hours."
- **VISUAL OBJECTIVE:** Full question text lands centered; a flat 2D delivery-van-on-road illustration builds beneath it — first the van with its no-stop speed, then a stop-badge with the with-stops average speed, then a clock with the total journey time — giving the viewer three concrete labeled facts before any math starts.
- **SCREEN LAYOUT:** `#q-full-card` centered top (`left:50%, top:80px, width:1500px`), `#serial-num` badge top-left overlapping the card, `#illustration` centered below (`top:480px`).
- **ON-SCREEN ELEMENTS:**
  - QuestionCard: "A delivery van travels at **45 kmph** excluding stops and **36 kmph** including stops. Total stoppage time over **5 hours** of journey is:" — numbers in `--primary` blue via `.num` spans.
  - SerialNum badge with fixed "Q".
  - Illustration: flat 2D van icon (`illustration/van.svg`) sitting on a minimal road line, with a "45 km/hr" label above it (no-stops speed), a small stop-badge (circle, `--primary` fill, white "STOP" text) fading in beside the van with a "36 km/hr" label beneath it (with-stops average speed), and a clock icon + "5 hr" label to the right (total journey time).
- **ANIMATION DETAILS:**
  - `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.8)` — card starts 180px lower, rises to its resting slot exactly as the opening line ends.
  - Parallel serial-num tween mirrors the same lowered-to-risen y-offset.
  - Van + road fade in (`apt.fadeIn`, 0.5s) at 6.02s, timed to "delivery van".
  - "45 km/hr" label fades up at 8.86s, timed to "forty-five".
  - Stop-badge fades in at 12.46s, timed to the second "stops,".
  - "36 km/hr" label fades in at 13.02s, timed to "thirty-six".
  - Clock icon + "5 hr" label fades in at 18.6s, timed to "five".
- **CAMERA MOVEMENT:** None (static frame; only internal element motion).
- **TRANSITIONS:** Straight cut into Scene 3's `apt.pinFlow` glide at 22.9s.
- **EDUCATIONAL PURPOSE:** Let the viewer visually register all three given facts (45 km/hr no-stop speed, 36 km/hr with-stop average, 5 hr total time) as concrete labeled objects before any math starts.
- **VISUAL HIERARCHY:** QuestionCard first (largest, top), illustration second (below): van + "45 km/hr" primary, stop-badge + "36 km/hr" secondary, clock + "5 hr" tertiary.
- **ATTENTION MANAGEMENT:** Each illustration element enters exactly as its corresponding word is spoken, so the eye is always led by the voiceover, never ahead of it.
- **MOTION NOTES:** All illustration entrances are simple fades — no bounce/rotation (the badge already owns the "personality" pop via `back.out(2)`).
- **CONTINUITY FROM PREVIOUS SCENE:** The cold-open frame remains fully identical; only the question card and illustration items add on top of the unchanged background layers.

### SCENE 3 — Pin Transition + Given Card
- **TIMESTAMP:** PIN_TIME = 22.9s (pinFlow, 0.8s), GIVEN_TIME = 23.7s (own transcript-derived timestamp, distinct from PIN_TIME)
- **VOICEOVER:** "The question is asking us to find the total stoppage time. Now, first, let us find the total distance covered."
- **VISUAL OBJECTIVE:** Shrink the full question up into its pinned slot, then open the Given card restating the three known values (no-stop speed, with-stop average speed, total time) before the solve begins.
- **SCREEN LAYOUT:** `#q-pinned` glides into `left:385px, top:30px, width:1275px`; `#illus-pinned` glides into `left:660px, top:190px, width:600px, height:150px` (smaller van+road group, same relative arrangement); `#card-given .solution-card` opens centered at `left:640px, top:460px`.
- **ON-SCREEN ELEMENTS:**
  - Pinned QuestionCard (shortened text, `.q-card.pinned`).
  - Pinned illustration group (smaller van + "45 km/hr" label, same visual language as Scene 2, scaled down).
  - Given SolutionCard: chip "Given", math lines:
    - `Speed (no stops) = 45 km/hr` (line-level reveal — already spoken earlier, restated here)
    - `Speed (with stops) = 36 km/hr` (line-level reveal)
    - `Total Time = 5 hr` (line-level reveal)
- **ANIMATION DETAILS:**
  - `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 22.9)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 22.9)` — real measured glide, not fade swap.
  - `apt.cardEnter(tl, "#card-given .solution-card", 23.7)`.
  - `apt.textReveal(tl, "#card-given .math")` — "Speed (no stops) = 45 km/hr" line-level at 23.7; "Speed (with stops) = 36 km/hr" line-level at 24.1; "Total Time = 5 hr" line-level at 24.5.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** The pin glide is the transition device itself. Given card morphs into `#stack-given` at GIVEN_MORPH_TIME = 25.1s (0.8s), completing just as Step 1's narration begins at 25.9s.
- **EDUCATIONAL PURPOSE:** Separate "what we're told" (Given) from "what we need to compute" (upcoming Steps) — a distinct recap card before any math starts.
- **VISUAL HIERARCHY:** Pinned question stays visually present but smaller/secondary; Given card is now the primary focus (center, full solution-card size).
- **ATTENTION MANAGEMENT:** All three given values are restated together so the viewer has the complete picture in one place before Step 1 begins computing.
- **MOTION NOTES:** Illustration items keep their same relative positions when they shrink into the pinned slot — real glide, not fade swap.
- **CONTINUITY FROM PREVIOUS SCENE:** The van, road, and "45 km/hr" label from Scene 2 are the SAME elements continuing their motion into the pinned slot; the stop-badge, "36 km/hr" label, and clock/"5 hr" label are dropped from the pinned group since the Given card now carries that information as text.

### SCENE 4 — Step 1: Find the Total Distance
- **TIMESTAMP:** cardEnter at STEP1_TIME = 25.9s (Given→stack morph starts 25.1s, completes 25.9s); reveals run word-synced through 39.3s
- **VOICEOVER:** "Since the average speed, including stops, is thirty-six kilometer per hour, the total distance is equal to average speed into total time. That is equal to thirty-six into five. This gives us one hundred and eighty kilometer."
- **VISUAL OBJECTIVE:** Derive the total distance covered using the with-stops average speed (36 km/hr) and the total time (5 hr) — the key figure both later steps depend on.
- **SCREEN LAYOUT:** `#card-step1 .solution-card` centered at `left:600px, top:440px, width:720px`.
- **ON-SCREEN ELEMENTS:**
  - chip "Step 1"
  - Line 1 (word-level): "Distance = Average Speed × Total Time"
  - Line 2 (word-level): "= 36 × 5"
  - Line 3 (word-level, `.ans`): "= 180 km"
- **ANIMATION DETAILS:**
  - `apt.cardEnter(tl, "#card-step1 .solution-card", 25.9)`.
  - `apt.textReveal(tl, "#card-step1 .math")` — Line 1 words from 31.42–34.46; Line 2 words from 35.32–36.92; Line 3 (`.ans`) words from 37.6–39.3.
  - No `apt.emphasize`/`apt.resultReveal` layered on top of the `.ans` line — the text-reveal fade is the only animation on that content.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Given card morphs into `#stack-given` at 25.1s just before this card opens; this card itself morphs into `#stack-step1` at STEP1_MORPH_TIME = 43.78s.
- **EDUCATIONAL PURPOSE:** Establish the total distance covered — the pivot figure that both the moving-time and stoppage-time calculations rely on.
- **VISUAL HIERARCHY:** "= 180 km" (`.ans`) is the visual peak of this card.
- **ATTENTION MANAGEMENT:** Each computed number appears the instant it's spoken — no line is fully visible before its own narration reaches it.
- **MOTION NOTES:** Standard word-synced reveal only; card holds its finished answer through the bridging line ("Now that we know the total distance, let us find the actual moving time.", 39.84–43.96) before morphing out.
- **CONTINUITY FROM PREVIOUS SCENE:** The Given stack card (chip "G") is now visible and static in the left column as this card opens center-stage; the pinned question and illustration remain fixed at top, unchanged and idle throughout this whole step.

### SCENE 5 — Step 2: Find the Actual Moving Time
- **TIMESTAMP:** cardEnter at STEP2_TIME = 44.58s (Step 1→stack morph starts 43.78s, completes 44.58s)
- **VOICEOVER:** "Moving time is equal to total distance divided by the speed at which the van was moving without any stoppage. That is equal to one hundred and eighty divided by forty-five. This gives us four hours."
- **VISUAL OBJECTIVE:** Apply the Time = Distance ÷ Speed formula using the no-stops speed (45 km/hr) and the just-derived distance (180 km) to find how long the van was actually moving.
- **SCREEN LAYOUT:** `#card-step2 .solution-card` centered at `left:600px, top:440px, width:760px`.
- **ON-SCREEN ELEMENTS:**
  - chip "Step 2"
  - Line 1 (word-level): "Moving Time = Total Distance ÷ Speed (no stops)"
  - Line 2 (word-level): "= 180 ÷ 45"
  - Line 3 (word-level, `.ans`): "= 4 hours"
- **ANIMATION DETAILS:**
  - `apt.cardEnter(tl, "#card-step2 .solution-card", 44.58)`.
  - `apt.textReveal(tl, "#card-step2 .math")` — Line 1 words from 44.58–47.48; Line 2 words from 51.08–52.8; Line 3 (`.ans`) words from 53.9–54.88.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Morphs into `#stack-step2` at STEP2_MORPH_TIME = 61.32s, landing right as Step 3's narration begins.
- **EDUCATIONAL PURPOSE:** Show that the van's actual moving time (4 hr) is less than the total journey time (5 hr) — setting up the subtraction in Step 3.
- **VISUAL HIERARCHY:** "= 4 hours" is the visual climax of this card — but deliberately not the final answer, setting up Step 3's subtraction.
- **ATTENTION MANAGEMENT:** The division "180 ÷ 45" is given its own beat before collapsing to "4 hours", so the viewer sees the computation happen rather than the answer appearing out of nowhere.
- **MOTION NOTES:** Standard text-reveal only; card holds its finished answer through the bridging line ("Now we have both the values we need. The total journey took five hours, but the van was moving only for four hours.", 55.28–61.72) before morphing out.
- **CONTINUITY FROM PREVIOUS SCENE:** Step 1's stack card (circle "1") is now static in the left column beneath "G"; the `line-g-1` connector between G and 1 has already grown in and remains visible, continuous and unfaded, throughout this scene.

### SCENE 6 — Step 3: Find the Stoppage Time
- **TIMESTAMP:** cardEnter at STEP3_TIME = 62.12s (Step 2→stack morph starts 61.32s, completes 62.12s); reveals run through 71.22s
- **VOICEOVER:** "So the stoppage time is equal to total time minus moving time, which is five minus four. This gives us one hour, and one hour is equal to sixty minutes. So the total stoppage time is sixty minutes."
- **VISUAL OBJECTIVE:** Subtract moving time from total time to get the stoppage time in hours, then convert it to minutes — landing on the final answer.
- **SCREEN LAYOUT:** `#card-step3 .solution-card` centered at `left:580px, top:410px, width:760px`.
- **ON-SCREEN ELEMENTS:**
  - chip "Step 3"
  - Line 1 (word-level): "Stoppage Time = Total Time − Moving Time"
  - Line 2 (word-level): "= 5 − 4"
  - Line 3 (word-level, `.ans`): "= 1 hour = 60 min"
- **ANIMATION DETAILS:**
  - `apt.cardEnter(tl, "#card-step3 .solution-card", 62.12)`.
  - `apt.textReveal(tl, "#card-step3 .math")` — Line 1 words from 62.36–65.1; Line 2 words from 65.84–66.62; Line 3 (`.ans`) words from 67.38–70.76.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Morphs into `#stack-step3` at STEP3_MORPH_TIME = 74.76s, paired with `apt.recenterForOptions` on the pinned question at the same timestamp and a fade-out of the pinned illustration.
- **EDUCATIONAL PURPOSE:** Deliver the final computed answer (60 minutes) as the direct result of the total-vs-moving-time contrast set up in Scene 5.
- **VISUAL HIERARCHY:** "= 1 hour = 60 min" (`.ans`) is the true climax of the whole video.
- **ATTENTION MANAGEMENT:** The card holds its finished answer through the restating line ("So the total stoppage time is sixty minutes.", 71.8–74.92) before morphing out, giving the number time to register.
- **MOTION NOTES:** Standard text-reveal only; no extra pulse on "60 min" here — the correctness confirmation pulse is reserved for the matching option button in Scene 7.
- **CONTINUITY FROM PREVIOUS SCENE:** Step 2's stack card (circle "2") is now static in the left column beneath "1"; the `line-1-2` connector has already grown in and remains visible, continuous and unfaded, throughout this scene.

### SCENE 7 — Options Reveal
- **TIMESTAMP:** 74.76–78.92s (`RECENTER_TIME`/`STEP3_MORPH_TIME` = 74.76s; options fade in 75.56s; stagger 75.96s; correct pulse 78.24s)
- **VOICEOVER:** "Hence, the correct answer is option B."
- **VISUAL OBJECTIVE:** Reveal the 2×2 options grid and confirm option B (60 min) as correct.
- **SCREEN LAYOUT:** `.pinned-col` at `top:400px`, `.options-grid` 2×2; pinned question recenters via `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 74.76)` to align with the options column.
- **ON-SCREEN ELEMENTS:**
  - Option A: "45 min"
  - Option B: "60 min" — `class="correct"`
  - Option C: "75 min"
  - Option D: "50 min"
- **ANIMATION DETAILS:**
  - `apt.fadeOut(tl, "#illus-pinned", 74.76)` — illustration has done its job, drops out as the stage clears.
  - `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 74.76)`.
  - `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 74.76)` + `apt.stackLineGrow(tl, "#line-2-3", 74.76)`.
  - `apt.fadeIn(tl, "#options-reveal", 75.56)`.
  - `apt.optionsStagger(tl, ".opt-btn", 75.96)`.
  - `apt.correctPulse(tl, ".opt-btn.correct", 78.24)` — lands right as "option B" is spoken (78.24–78.92s).
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Final scene — timeline holds at the end (~80.5s) with all stack cards, connector lines, pinned question, and highlighted correct option visible.
- **EDUCATIONAL PURPOSE:** Close the loop between the derived answer (60 min, still visible in the Step 3 stack card) and the multiple-choice option that matches it.
- **VISUAL HIERARCHY:** Correct option's green pulse is the final, most emphasized element on screen.
- **ATTENTION MANAGEMENT:** The stagger reveals all four options first (fair presentation of choices) before singling out the correct one.
- **MOTION NOTES:** `apt.correctPulse` (0.4s yoyo, `back.out(1.5)`) is the only pulse in the whole video, reserved for this single moment of confirmation.
- **CONTINUITY FROM PREVIOUS SCENE:** Step 3's card is mid-morph into its stack slot as the options fade in — the left column (G, 1, 2, 3 stack cards with all connector lines fully grown) stays visible and unchanged for the remainder of the video, giving the viewer the full solved chain alongside the confirmed answer.

---

## PART 3 — Asset List Required

- Shared `_template/assets/` (serial-num-badge.svg, logo.png).
- `illustration/van.svg` — per-question flat 2D delivery-van icon (box body + sloped cab, `--primary` fill / `--primary-light` windows / black outlines and wheels, matching the design system palette). Used at full size (~200px wide) in Phase 1's `#illustration`, and reduced size (~120px) for the pinned `#illus-pinned-icon`.
- Stop-badge, clock icon, road line, and speed/time labels remain inline flat 2D shapes (divs) directly in `index.html` — no extra asset files needed.

## PART 4 — Animation Complexity Notes

- Three stack transitions (Given→stack, Step1→stack, Step2→stack, Step3→stack) — full standard 4-card chain (G, 1, 2, 3) with 3 connector lines (`line-g-1`, `line-1-2`, `line-2-3`).
- Step 1 through Step 3 are each compact 3-line cards (formula → substitution → answer) — no multi-idea cards needed since each step is a single clean computation.
- Both Step 1 and Step 2 hold their finished answer on screen through a spoken bridging/transition line before morphing out, keeping the "answer stays until the narration truly moves on" rule.
- Illustration uses no continuous loop (`apt.ambientLoop` not needed) — Phase 1 illustration builds once and is fully static by pin time (22.9s); the pinned illustration only survives ~52s before fading at the recenter, and the Given/Step cards keep the center of the frame busy throughout.
- `apt.recenterForOptions` and the final `morphToStack`/`stackLineGrow` are intentionally fired at the same timestamp (74.76s), per the template's own convention.

## PART 5 — Master Timeline Overview

```
TIME(s)   EVENT
0.0       Background layers visible (dotted grid, bottom strip, topic name, logo)
0.1       (audio starts)
3.8       apt.heroEnterLowered — QuestionCard + SerialNum rise to resting position
6.02      Van + road fade in (illustration)
8.86      "45 km/hr" label fades in
12.46     Stop-badge fades in
13.02     "36 km/hr" label fades in
18.6      Clock + "5 hr" label fades in
22.9      PIN_TIME — apt.pinFlow (question + illustration glide to pinned slot), 0.8s
23.7      GIVEN_TIME — apt.cardEnter #card-given; apt.textReveal begins
 23.7     .rv "Speed (no stops) = 45 km/hr"     (line-level)
 24.1     .rv "Speed (with stops) = 36 km/hr"   (line-level)
 24.5     .rv "Total Time = 5 hr"               (line-level)
25.1      apt.morphToStack Given → stack-given (0.8s)
25.9      STEP1_TIME — apt.cardEnter #card-step1; apt.textReveal begins
 31.42    .rv "Distance" "=" "Average" "Speed" "×" "Total" "Time"   (word-level)
 35.32    .rv "=" "36" "×" "5"                                       (word-level)
 37.6     .rv "=" "180" "km"  [.ans]                                 (word-level)
43.78     apt.morphToStack Step1 → stack-step1 (0.8s); apt.stackLineGrow #line-g-1
44.58     STEP2_TIME — apt.cardEnter #card-step2; apt.textReveal begins
 44.58    .rv "Moving" "Time" "=" "Total" "Distance" "÷" "Speed"     (word-level)
 51.08    .rv "=" "180" "÷" "45"                                      (word-level)
 53.9     .rv "=" "4" "hours"  [.ans]                                 (word-level)
61.32     apt.morphToStack Step2 → stack-step2 (0.8s); apt.stackLineGrow #line-1-2
62.12     STEP3_TIME — apt.cardEnter #card-step3; apt.textReveal begins
 62.36    .rv "Stoppage" "Time" "=" "Total" "Time" "−" "Moving" "Time"  (word-level)
 65.84    .rv "=" "5" "−" "4"                                          (word-level)
 67.38    .rv "=" "1" "hour" "=" "60" "min"  [.ans]                    (word-level)
74.76     RECENTER_TIME / STEP3_MORPH_TIME —
          apt.fadeOut #illus-pinned;
          apt.recenterForOptions #q-pinned (xShift:160, yShift:180);
          apt.morphToStack Step3 → stack-step3 (0.8s);
          apt.stackLineGrow #line-2-3
75.56     apt.fadeIn #options-reveal
75.96     apt.optionsStagger .opt-btn (stagger 0.12s)
78.24     apt.correctPulse .opt-btn.correct (option B)
80.5      End hold — all elements remain visible
```

**Video duration:** 78.92s voiceover + ~1.6s end hold ≈ 80.5s total.
