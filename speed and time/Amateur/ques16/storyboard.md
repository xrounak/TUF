# Storyboard — Speed & Time, Amateur, Ques 16
### Average speed for two equal-distance legs at different speeds

---

## PART 1: Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|-----------|-----------|---------------------|------------------|-------------------|
| 1 | 0.0–3.9 | "So welcome back again, time for one more problem." | Cold open / orientation | Center of frame | Question card rises into view |
| 2 | 4.4–17.8 | "Now in this problem, a tourist travels 120 km at 40 km/h. Then the next 120 km is travelled at 60 km/h." | Establish the two legs of the trip | Illustration (road) | Road with two segments builds left→right, car icon travels each leg at a distinct pace |
| 3 | 18.3–23.1 | "The question is asking us to find the average speed for the total 240 km trip." | State the goal | Question card (about to pin) | Question pins to top; 240 km total called out |
| 4 | 23.6–30.3 | "Now be careful here. We should not directly average 40 and 60. We should not say 40 plus 60 divided by 2 is 50." | Common-mistake guardrail | Given card (center) | Given card holds distances/speeds while the wrong shortcut is named and dismissed |
| 5 | 30.8–35.0 | "Why? Because average speed depends on total distance and total time." | Concept anchor | Given card | Reinforces why raw averaging fails — sets up the real formula |
| 6 | 35.4–42.8 | "So first we need to find the time taken in both parts. Now we know the formula. Time is equal to distance divided by speed." | Introduce the tool (T = D/S) | Step 1 card | Given morphs to stack; Step 1 card enters with the formula |
| 7 | 43.1–50.0 | "For the first 120 km, speed is 40, so time is 120 divided by 40. That gives us 3 hours." | Compute leg 1 time | Step 1 card | Word-synced reveal of 120 ÷ 40 = 3 hours |
| 8 | 50.4–57.8 | "For the second 120 km, speed is 60, so time is 120 divided by 60. That gives us 2 hours." | Compute leg 2 time | Step 2 card | Step 1 morphs to stack; Step 2 card enters, 120 ÷ 60 = 2 hours |
| 9 | 58.2–72.0 | "Now total distance is 120 plus 120, which is 240 km. Total time is 3 plus 2, which is 5 hours. Now average speed is equal to total distance divided by total time." | Aggregate + restate formula | Step 3 card | Step 2 morphs to stack; Step 3 card enters, builds total distance → total time → formula |
| 10 | 72.4–80.7 | "So average speed is 240 divided by 5. That gives us 48 km/h. So the final answer will be 48 km/h." | Final computation | Step 3 card | 240 ÷ 5 = 48 km/h resolves inside Step 3 card |
| 11 | 81.2–85.2 | "Hence, option C, 48 km/h is correct." | Answer confirmation | Options grid | Step 3 morphs to stack; options reveal, C pulses green |

Total narrated length ≈ 85.24 s → video runs to **~87.5 s** (buffer after final line).

---

## PART 2: Scene-by-Scene Storyboard

### SCENE 1 — Cold Open / Question Reveal
**TIMESTAMP:** 0.0 – 21.5 s
**VOICEOVER:** "So welcome back again, time for one more problem. Now in this problem, a tourist travels 120 km at 40 km/h. Then the next 120 km is travelled at 60 km/h. The question is asking us to find the average speed for the total 240 km trip."
**VISUAL OBJECTIVE:** Establish the two-leg journey visually before any math appears.
**SCREEN LAYOUT:** `#q-full-card` centered, 1500px wide, lowered per `apt.heroEnterLowered`. `#illustration` centered below it, 1400×300px.
**ON-SCREEN ELEMENTS:** QuestionCard with question text (numbers in `--primary`), SerialNum badge ("Q"), a flat 2D road illustration split into two labelled segments.
**ANIMATION DETAILS:**
- 0.3s: `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.9)` — card rises to rest exactly as "time for one more problem" ends.
- 0.8s: SerialNum pops in (`back.out(2)`), rises in tandem with the card at 3.9s.
- 6.9s: Road segment 1 (blue, labelled "120 km · 40 km/h") sweeps in via `apt.roadSweep` from the left edge, in sync with "travels 120 km at 40 km/h."
- 12.3s: Road segment 2 (primary, labelled "120 km · 60 km/h") sweeps in immediately after segment 1, in sync with "next 120 km ... at 60 km/h."
- 14.9s: A single flat 2D car icon (SVG, `--primary` fill) slides along segment 1 then continues along segment 2 (`apt.roadSweep`-style translateX tween across both segments, matching the two speeds — faster traversal on segment 2).
- 18.3s: A "Total = 240 km" label fades upward beneath both segments (`apt.fadeIn`) as "average speed for the total 240 km trip" is spoken.
**CAMERA MOVEMENT:** None (static frame, all motion is internal).
**TRANSITIONS:** 21.5s — whole phase (`#phase1`) fades out (`apt.fadeOut`).
**EDUCATIONAL PURPOSE:** Visually plants both legs and the total distance before the math starts, so Given/Step cards only need to formalize what's already been seen.
**VISUAL HIERARCHY:** Question text > road illustration > total-distance label.
**ATTENTION MANAGEMENT:** One new element enters at a time, each gated to its own narration clause.
**MOTION NOTES:** Car's traversal speed visually differs between segments (faster on segment 2) — a subtle physical cue for "60 km/h > 40 km/h" before it's ever said as a number comparison.

---

### SCENE 2 — Pinned Question + Given
**TIMESTAMP:** 22.0 – 35.0 s
**VOICEOVER:** "...total 240 km trip. Now be careful here, we should not directly average 40 and 60. We should not say 40 plus 60 divided by 2 is 50. Why? Because average speed depends on total distance and total time."
**VISUAL OBJECTIVE:** Formalize the given data while the "don't just average" guardrail plays underneath it.
**SCREEN LAYOUT:** `#q-pinned` (`.q-card.pinned`, left:385px, top:30px, width:1275px). `#illus-pinned` shrunk copy of the road below it. `#card-given .solution-card` centered at left:640px, top:480px.
**ON-SCREEN ELEMENTS:** Pinned question card, pinned (smaller) road illustration, Given SolutionCard with chip "Given".
**ANIMATION DETAILS:**
- 21.5s: `apt.fadeOut(tl, "#phase1", 21.5)`.
- 22.0s: `apt.fadeIn(tl, "#q-pinned", 22.0)`, `apt.fadeIn(tl, "#illus-pinned", 22.0)` — the illustration (pinned road + truck) stays live in the same frame as the Given card all the way through Step 1's entrance and beyond (`illus-pinned` runs 22.0→80.8s), so nothing disappears when the Given card appears.
- 22.5s: `apt.cardEnter(tl, "#card-given .solution-card", 22.5)`.
- `apt.textReveal(tl, "#card-given .math")` — word-level reveal of "Distance 1 = 120 km, Speed 1 = 40 km/h" and "Distance 2 = 120 km, Speed 2 = 60 km/h" timed against 22.5–24.4s (nearest matching narration beat, since the exact figures were already spoken in Scene 1 — line-level timestamps anchored to the "be careful" / "total 240 km trip" beat that recaps them).
- **Wrong-average guardrail** (inside the `illus-pinned` illustration area, sharing the frame with the Given card): a naive equation `(40 + 60) ÷ 2 = 50` fades in at **23.56s** (exact transcript start of "Now be careful here"), gets a strike-through line drawn across it via `apt.roadSweep` at **27.54s** (exact start of "We should not say forty plus sixty divided by two is fifty" — 1.2s duration so the strike lands as the line finishes), then a "✗ not valid" mark pops in at **30.78s** (exact start of "Why?"), and the whole group fades out at **34.5s**, just before the Given→stack morph at 35.0s. This directly visualizes the "don't just average the two speeds" caution instead of leaving it purely verbal.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Given card stays on screen through the "don't average 40+60÷2" caution line — it is not touched again until Step 1 begins.
**EDUCATIONAL PURPOSE:** Locks in the two (distance, speed) pairs as the only "given" data, right as the video warns against the naive wrong-answer shortcut.
**VISUAL HIERARCHY:** Pinned question (small, top) > Given card (center, active) > pinned illustration (supporting).
**ATTENTION MANAGEMENT:** No competing motion during the caution line — the Given card just sits still while the voiceover argues against averaging 40 and 60 directly.
**MOTION NOTES:** No pulse/emphasize on the Given numbers here — text-reveal already handled the entrance; a second animation would double up per the design-system rule.

---

### SCENE 3 — Step 1 (Time for Leg 1)
**TIMESTAMP:** 35.3 – 50.3 s
**VOICEOVER:** "So first we need to find the time taken in both parts. Now we know the formula. Time is equal to distance divided by speed. For the first 120 km, speed is 40, so time is 120 divided by 40. That gives us 3 hours."
**VISUAL OBJECTIVE:** Introduce T = D/S, then apply it to leg 1.
**SCREEN LAYOUT:** `#card-step1 .solution-card` centered at left:640px, top:460px.
**ON-SCREEN ELEMENTS:** Step 1 SolutionCard (chip "Step 1"), Given card now living in the left stack.
**ANIMATION DETAILS:**
- 35.0s: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 35.0)` (0.8s).
- 35.3s: `apt.cardEnter(tl, "#card-step1 .solution-card", 35.3)`.
- `apt.textReveal(tl, "#card-step1 .math")`:
  - line-level span at 35.36 → "Time = Distance ÷ Speed" (paraphrase of the formula line, anchored to "So first we need to find the time").
  - word-level spans at 43.14–48.36 → "120 ÷ 40" building live.
  - word-level span at 48.74 → "= 3 hours" (highlighted answer, `.ans`).
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Card holds until "3 hours" fully lands (50.0s), then morphs.
**EDUCATIONAL PURPOSE:** Establishes the reusable time formula before repeating it for leg 2 — teaches the method, not just the number.
**VISUAL HIERARCHY:** Formula line > computed fraction > highlighted "3 hours" result.
**ATTENTION MANAGEMENT:** Given card's departure (morph) and Step 1's arrival happen back-to-back so the eye tracks one continuous thread — nothing else moves mid-explanation.
**MOTION NOTES:** `.ans` on "3 hours" gets no extra pulse — text-reveal fade is the only reveal per the design system's anti-double-animation rule.

---

### SCENE 4 — Step 2 (Time for Leg 2)
**TIMESTAMP:** 50.3 – 58.1 s
**VOICEOVER:** "For the second 120 km, speed is 60, so time is 120 divided by 60. That gives us 2 hours."
**VISUAL OBJECTIVE:** Mirror Step 1's method for leg 2, reinforcing the formula by repetition.
**SCREEN LAYOUT:** `#card-step2 .solution-card` centered at left:600px, top:440px, width:720px.
**ON-SCREEN ELEMENTS:** Step 2 SolutionCard (chip "Step 2"); Given + Step 1 now stacked left with a `.stack-line` connector between them.
**ANIMATION DETAILS:**
- 50.1s: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 50.1)`.
- 50.1s: `apt.stackLineGrow(tl, "#line-g-1", 50.1)` — grows the connector between the Given and Step-1 circles the moment Step 1 itself lands in the stack.
- 50.3s: `apt.cardEnter(tl, "#card-step2 .solution-card", 50.3)`.
- `apt.textReveal(tl, "#card-step2 .math")`:
  - word-level spans at 50.40–56.22 → "120 ÷ 60" building live.
  - word-level span at 56.74 → "= 2 hours" (`.ans`).
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Card holds until "2 hours" lands (57.8s), then morphs.
**EDUCATIONAL PURPOSE:** Repetition of the same formula on different numbers cements the method before the aggregation step.
**VISUAL HIERARCHY:** Same as Scene 3, mirrored for leg 2.
**ATTENTION MANAGEMENT:** Stack column now visibly growing (Given + Step 1 + connector line) gives a persistent sense of "progress made" on the left while the active card carries the current beat.
**MOTION NOTES:** No new animation types — purely a repeat of Scene 3's pattern for continuity.

---

### SCENE 5 — Step 3 (Total Distance, Total Time, Average Speed)
**TIMESTAMP:** 58.1 – 81.0 s
**VOICEOVER:** "Now total distance is 120 plus 120, which is 240 km. Total time is 3 plus 2, which is 5 hours. Now average speed is equal to total distance divided by total time. So average speed is 240 divided by 5. That gives us 48 km/h. So the final answer will be 48 km/h."
**VISUAL OBJECTIVE:** Aggregate both legs into totals, then apply the average-speed formula to reach the final number.
**SCREEN LAYOUT:** `#card-step3 .solution-card` centered at left:580px, top:420px, width:760px.
**ON-SCREEN ELEMENTS:** Step 3 SolutionCard (chip "Step 3"); Given + Step 1 + Step 2 stacked left with two connector lines.
**ANIMATION DETAILS:**
- 57.9s: `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 57.9)`.
- 57.9s: `apt.stackLineGrow(tl, "#line-1-2", 57.9)`.
- 58.1s: `apt.cardEnter(tl, "#card-step3 .solution-card", 58.1)`.
- `apt.textReveal(tl, "#card-step3 .math")`:
  - word-level spans at 58.22–62.06 → "120 + 120"
  - word-level span at 62.56 → "= 240 km" (`.hi`)
  - line-level span at 64.94 → "Total time = 3 + 2 = 5 hours" (paraphrase-adjacent, single beat)
  - line-level span at 69.5 (interpolated inside beat 27, "average speed is equal to total distance divided by total time") → "Average Speed = Total Distance ÷ Total Time" (`.frac`)
  - word-level spans at 72.38–75.14 → "240 ÷ 5"
  - word-level span at 75.52 → "= 48 km/h" (`.ans`)
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Card holds through the "final answer will be 48 km/h" restatement (80.74s) before morphing.
**EDUCATIONAL PURPOSE:** This is the payoff scene — shows explicitly why 48 (not the naive average of 50) is correct, closing the loop opened by Scene 2's caution.
**VISUAL HIERARCHY:** Total distance → total time → formula → final answer, each building on the last, top to bottom.
**ATTENTION MANAGEMENT:** Longest-held card in the video (≈23s) matches the longest, densest narration stretch — no competing motion in the stack column during this scene beyond the two already-grown connector lines.
**MOTION NOTES:** `.ans` "48 km/h" gets only its text-reveal fade — the confirmation punch is reserved for the correct-option pulse in Scene 6, avoiding a double emphasis on the same number.

---

### SCENE 6 — Options Reveal
**TIMESTAMP:** 81.0 – 87.5 s
**VOICEOVER:** "Hence, option C, 48 km/h is correct."
**VISUAL OBJECTIVE:** Confirm the final answer against the four options.
**SCREEN LAYOUT:** `#options-reveal` on `.pinned-col` (top:400px), 2×2 `.options-grid`. Pinned question recentres to align with it (`apt.recenterForOptions`).
**ON-SCREEN ELEMENTS:** Options A–D, C marked `.correct`; Given/Step1/Step2/Step3 all still visible in the left stack with all connector lines intact.
**ANIMATION DETAILS:**
- 80.8s: `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 80.8)`.
- 80.8s: `apt.stackLineGrow(tl, "#line-2-3", 80.8)`.
- 80.8s: `apt.fadeOut(tl, "#illus-pinned", 80.8)`, `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 80.8)`.
- 81.2s: `apt.fadeIn(tl, "#options-reveal", 81.2)`.
- 81.6s: `apt.optionsStagger(tl, ".opt-btn", 81.6)`.
- 83.2s: `apt.correctPulse(tl, ".opt-btn.correct", 83.2)` — timed just before "48 km/h is correct" lands (82.14–85.24).
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** End of timeline — all elements remain static and visible through ~87.5s (buffer past last spoken word).
**EDUCATIONAL PURPOSE:** Final confirmation ties the computed number directly to the labelled correct option.
**VISUAL HIERARCHY:** Options grid > correct (green) option > stack column (supporting evidence trail).
**ATTENTION MANAGEMENT:** Stack column's full, connected chain (G→1→2→3) is now fully visible as a "proof trail" leading into the green correct answer.
**MOTION NOTES:** `correctPulse` is the sole emphasis animation on the correct option — no extra glow/shadow invented.

---

## PART 3: Asset List Required

- No new SVG/PNG illustration assets are strictly required — the road + car can be built as pure CSS/HTML shapes (flat rectangles for road segments, a small SVG car reused from a simple inline shape) to stay within "no invented assets" while satisfying the visual brief.
- Existing shared assets only: `serial-num-badge.svg`, `logo.png` (from `_template/assets/`).
- All colors from `design-system.css` tokens (`--primary`, `--primary-light`, `--success`, `--topic`, `--text`, `--bg`) — no new hexes.

## PART 4: Animation Complexity Notes

- Every card → stack transition uses `apt.morphToStack` (0.8s, `power2.inOut`) — 4 total (Given→stack, Step1→stack, Step2→stack, Step3→stack).
- Every active card's `.math` uses `apt.textReveal` exclusively for its text entrance — no `apt.emphasize`/`apt.resultReveal` layered on top anywhere.
- 3 `.stack-line` connectors grow in sync with their corresponding lower-circle's morph (`line-g-1` @35.0/50.1 — see note below, `line-1-2` @57.9, `line-2-3` @80.8).
  - Correction: `line-g-1` must grow at the same time Step 1 joins the stack (50.1s), not at Given's own morph (35.0s) — matching the "grow when the lower circle lands" rule. Fixed in Part 2 / Part 5 timings above (Scene 4).
- Road-segment build in Scene 1 uses `apt.roadSweep` (0.9s, `power3.out`) — the only illustration-specific helper beyond the standard set, already provided in `animations.js`.
- No new helpers are introduced.

## PART 5: Master Timeline Overview

```
0.0    heroEnterLowered #q-full-card (rises @3.9s)
0.8    serialEnter #serial-num (rises @3.9s)
6.9    roadSweep segment-1 (120km @ 40)
12.3   roadSweep segment-2 (120km @ 60)
14.9   car translateX across both segments
18.3   fadeIn "Total = 240 km" label
21.5   fadeOut #phase1
22.0   fadeIn #q-pinned, #illus-pinned
22.5   cardEnter #card-given → textReveal
35.0   morphToStack Given→stack-given
35.3   cardEnter #card-step1 → textReveal
50.1   morphToStack Step1→stack-step1 + stackLineGrow line-g-1
50.3   cardEnter #card-step2 → textReveal
57.9   morphToStack Step2→stack-step2 + stackLineGrow line-1-2
58.1   cardEnter #card-step3 → textReveal
80.8   morphToStack Step3→stack-step3 + stackLineGrow line-2-3
80.8   fadeOut #illus-pinned, recenterForOptions #q-pinned
81.2   fadeIn #options-reveal
81.6   optionsStagger .opt-btn
83.2   correctPulse .opt-btn.correct
87.5   end
```

**Total runtime: ~87.5 s** (within the 60–150 s expected range).
