# Storyboard — Speed and Time / Amateur / ques20

Question: Alex drives 50 km/h for 2h, then 40 km/h for 3h (traffic). Find total distance.
Options: A) 180 km  B) 200 km  C) 220 km (correct)  D) 250 km
Voiceover duration: 77.0s

## PART 1: Narration Beat Analysis

| Beat | Time (s) | Narration | Purpose | Focus | Visual objective |
|---|---|---|---|---|---|
| Intro | 0.12–3.36 | "So welcome back again. Time for one more problem." | Hook | Center | Question card rises into place |
| Setup | 3.94–19.64 | Alex travels two parts: 50 km/h × 2h, then 40 km/h × 3h (traffic) | Establish scenario | Question + illustration | Road illustration builds: car speeds through segment 1, slows in segment 2 (traffic) |
| Ask | 20.10–24.18 | "find the total distance traveled by Alex" | State goal | Question text | Question card settles, pins upward next |
| Formula | 24.70–28.84 | "distance = speed × time" | Recap given data | Given card | Given card shows Speed1/Time1, Speed2/Time2, formula |
| Step 1 | 29.44–41.26 | Find distance part 1: 50×2 = 100 km | Compute leg 1 | Step 1 card | Step 1 card reveals speed/time then computes 100 km |
| Step 2 | 41.84–52.32 | Find distance part 2: 40×3 = 120 km | Compute leg 2 | Step 2 card | Step 2 card reveals speed/time then computes 120 km |
| Step 3 | 53.10–74.18 | Add both distances: 100+120 = 220 km | Combine | Step 3 card | Step 3 card recaps both legs, sums to 220 km |
| Reveal | 74.76–77.00 | "correct answer is option C" | Answer | Options grid | 2×2 grid appears, C pulses green |

## PART 2: Scene-by-Scene Storyboard

**Phase 1 (0–24.3s):** QuestionCard rises at t=3.4s (mirrors opening line end). Flat 2D road illustration centered below: a red car enters from left, drives fast across segment 1 (labeled "50 km/h · 2h"), slows through a hatched "traffic" zone into segment 2 (labeled "40 km/h · 3h"). SerialNum badge pops in tandem with card.

**Phase 2 — Given (24.5–29.5s):** QuestionCard pins to top (smaller), illustration pins smaller beneath it. Given SolutionCard (center) shows: Speed₁=50 km/h, Time₁=2h / Speed₂=40 km/h, Time₂=3h / Formula: Distance = Speed × Time. Line-level reveal.

**Step 1 (30.5–41.8s):** Morph Given→stack (G badge) at 29.5s. Step 1 card: "Distance₁ = 50 × 2 = 100 km", word-level reveal synced to narration.

**Step 2 (42.5–52.8s):** Morph Step1→stack (badge "1", connector line G→1 grows) at 41.8s. Step 2 card: "Distance₂ = 40 × 3 = 120 km", word-level reveal.

**Step 3 (53.5–74.5s):** Morph Step2→stack (badge "2", connector 1→2) at 52.8s. Step 3 card: recaps "100 km + 120 km", sums to "= 220 km" (ans), word-level reveal timed to final narration block.

**Phase 4 — Options (75.0–79s):** Morph Step3→stack (badge "3", connector 2→3) at 74.5s. Recenter pinned question. Options grid fades in (75.0s), staggers in (75.3s): A) 180 km, B) 200 km, C) 220 km, D) 250 km. Option C pulses green at 76.0s, synced to "correct answer is option C".

## PART 3: Asset List Required
- No external illustration assets — pure CSS/HTML: road (div), car (rounded-rect div), traffic hatch pattern, speed labels. No SVG files needed.
- Standard template assets: `serial-num-badge.svg`, `logo.png` (copied from `_template/assets/`).

## PART 4: Animation Complexity Notes
- Standard Given + 3-Step structure (matches template default scene count).
- All card→stack transitions use `apt.morphToStack` (0.8s), all active-card math uses `apt.textReveal`.
- Illustration is simple CSS-driven car/road motion (translateX + easing), no custom helpers beyond GSAP core tweens for the car's x-position.

## PART 5: Master Timeline Overview

| Time | Event |
|---|---|
| 0.0 | Background, bottomStrip, topic, logo |
| 0.3 | QuestionCard (lowered) fades in |
| 0.8 | SerialNum pops |
| 3.4 | Hero rises to resting position |
| 3.5–19 | Car drives illustration (fast → traffic → slow) |
| 21.5 | Phase 1 fades out |
| 22.0 | Pinned question + pinned illustration fade in |
| 24.5 | Given card enters |
| 29.5 | Given → stack morph |
| 30.5 | Step 1 card enters |
| 41.8 | Step 1 → stack morph |
| 42.5 | Step 2 card enters |
| 52.8 | Step 2 → stack morph |
| 53.5 | Step 3 card enters |
| 74.3 | Recenter for options |
| 74.5 | Step 3 → stack morph |
| 75.0 | Options grid fades in |
| 75.3 | Options stagger in |
| 76.0 | Option C correct-pulse |
| 79.0 | End hold |
