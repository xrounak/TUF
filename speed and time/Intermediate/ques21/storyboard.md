# ques21 — Storyboard
**Topic:** Speed and Time | **Tier:** Intermediate
**Question:** A person crosses an 800 m long street in 8 minutes and 20 seconds. His speed in km/hr is:
**Options:** A) 6.2  B) 4.8  C) 5.4  D) **5.76** (correct)
**Voiceover duration:** 74.28s

---

## PART 1: Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|-----------|-----------|---------------------|------------------|-------------------|
| 1 | 0.12–3.18 | "So welcome back again. Time for one more problem." | Opening hook, orient viewer | Center screen, blank canvas | Establish calm start before content appears |
| 2 | 3.68–7.88 | "Now in this problem, a person crosses an 800-meter-long street." | Introduce the scenario | Question card + distance | Question card rises into view; illustration shows a person crossing a street with a distance label |
| 3 | 8.40–11.84 | "The time taken is eight minutes and 20 seconds." | Introduce given time | Time label on illustration | Time value appears on the illustration (clock/stopwatch beside the street) |
| 4 | 12.36–16.30 | "The question is asking us to find his speed in kilometer per hour." | State the goal | Question text | Question text settles at rest; "kilometer per hour" emphasized in primary blue |
| 5 | 16.94–24.46 | "So speed equal to distance divided by time, but distance is given in meter, and time is given in minutes and seconds." | Set up the formula + flag unit mismatch | Formula construct | Question pins to top; Given card enters center showing distance (800 m) and time (8 min 20 s) |
| 6 | 25.04–28.54 | "So first, we need to convert the time into seconds." | Motivate Step 1 | Time value | Given card morphs to stack; Step 1 card enters, chip "Step 1" |
| 7 | 29.14–35.60 | "Eight minutes means eight into 60, which is 480 seconds, and 20 seconds is already there." | Show the sub-calculation | 8×60=480 | Step 1 math reveals word-by-word: 8 × 60 = 480 |
| 8 | 35.92–40.50 | "So total time becomes 480 plus 20 equal to 500 seconds." | Complete Step 1 | 480+20=500 | Reveals 480 + 20 = 500 seconds (answer highlighted) |
| 9 | 41.08–41.36 | "Done." | Beat / confirmation pause | — | Brief hold, no new element (breathing gap before Step 2) |
| 10 | 41.78–48.78 | "Now put the values in the speed formula. Speed equal to distance divided by time, which is 800 divided by 500." | Motivate + begin Step 2 | Formula substitution | Step 1 morphs to stack; Step 2 card enters showing Speed = Distance/Time = 800/500 as a fraction |
| 11 | 49.28–52.68 | "After simplifying this, we get 1.6 meter per second." | Complete Step 2 | 1.6 m/s | Reveals = 1.6 m/s (answer highlighted) |
| 12 | 53.12–55.60 | "But the question is asking in kilometer per hour," | Flag remaining unit mismatch | Unit callout | Brief hold on Step 2, sets up Step 3 morph |
| 13 | 56.08–62.14 | "so we need to convert meter per second into kilometer per hour. For that, we multiply it by 3.6," | Motivate + begin Step 3 | ×3.6 conversion factor | Step 2 morphs to stack; Step 3 card enters showing conversion rule ×3.6 |
| 14 | 62.46–68.08 | "so speed becomes 1.6 into 3.6, which is 5.76 kilometer per hour." | Complete Step 3 | 1.6 × 3.6 = 5.76 | Reveals 1.6 × 3.6 = 5.76 km/hr (final answer highlighted) |
| 15 | 68.46–74.28 | "Hence, the final answer will be 5.76 kilometer per hour, so the correct answer is option D." | Reveal answer | Options grid, option D | Step 3 morphs to stack; options grid fades in, staggers A–D, option D pulses green |

---

## PART 2: Scene-by-Scene Storyboard

### SCENE 1 — Opening (0.0s – 3.68s)
- **VOICEOVER:** "So welcome back again. Time for one more problem."
- **VISUAL OBJECTIVE:** Calm blank canvas before content loads, establishing rhythm.
- **SCREEN LAYOUT:** Background layers only — dotted-grid (65% opacity) + bottom-strip (15px blue) + topic-name ("Speed and Time") bottom-left + logo bottom-right, all visible per `template.html` defaults.
- **ON-SCREEN ELEMENTS:** `.dotted-grid`, `.bottom-strip`, `.topic-name`, `.logo` only.
- **ANIMATION DETAILS:** No entrance yet — these background layers are static/always-visible per design system.
- **CAMERA MOVEMENT:** None (2D flat composition, no camera).
- **TRANSITIONS:** N/A (start of video).
- **EDUCATIONAL PURPOSE:** Let the narration's greeting land before visual content competes for attention.
- **VISUAL HIERARCHY:** Empty canvas — nothing to prioritize yet.
- **ATTENTION MANAGEMENT:** Full attention on voiceover audio.
- **MOTION NOTES:** None.

### SCENE 2 — Question + Illustration Enter (3.68s – 21.5s)
- **VOICEOVER:** "Now in this problem, a person crosses an 800-meter-long street. The time taken is eight minutes and 20 seconds. The question is asking us to find his speed in kilometer per hour."
- **VISUAL OBJECTIVE:** Introduce the full question card and build a simple flat-2D illustration of the scenario (a person walking across a street, distance and time labeled).
- **SCREEN LAYOUT:** `#q-full-card` centered at top (left:50%, top:80px, width:1500px per template). `#serial-num` badge top-left (60px,60px). `#illustration` centered below at top:480px, width:1400px, height:300px.
- **ON-SCREEN ELEMENTS:**
  - `.q-card` (`#q-full-card`) with `.q-text`: "A person crosses an <span class='num'>800 m</span> long street in <span class='num'>8 minutes 20 seconds</span>. His speed in <span class='num'>km/hr</span> is:"
  - `.serial-num` badge with fixed digit `Q`.
  - `#illustration`: flat 2D illustration — a walking figure icon at the left edge of a horizontal road/street strip, a distance label ("800 m") centered above the street, and a stopwatch/clock icon at the right edge with the time label ("8 min 20 s") beneath it.
- **ANIMATION DETAILS:**
  - `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.6)` at 0.3s — card starts lowered (y:180), rises to rest at 3.6s (matches end of "Time for one more problem").
  - Parallel serial-num tween: `fromTo` scale/rotation/opacity at 0.8s (mirrors template), rising in tandem at 3.6s.
  - Illustration builds in with `apt.cardEnter`-style fade/scale at 4.92s (start of "a person crosses...") — the walking-figure + street enters first.
  - Distance label ("800 m") fades up at 4.92s in sync with narration word "800-meter".
  - Stopwatch icon + time label ("8 min 20 s") fades in at 8.40s in sync with "The time taken is".
  - `apt.emphasize` on the "kilometer per hour" phrase in `.q-text` at 13.54s (word "kilometer" starts) to draw attention to the goal unit.
- **CAMERA MOVEMENT:** None (static 2D frame).
- **TRANSITIONS:** Hard cut into Scene 3 via `apt.fadeOut(tl, "#phase1", 21.5)`.
- **EDUCATIONAL PURPOSE:** Ground the viewer in the concrete scenario before formula work begins.
- **VISUAL HIERARCHY:** Question card > illustration > badge — question drives comprehension, illustration supports.
- **ATTENTION MANAGEMENT:** Sequential reveal (card → figure/street → distance → time) matches narration order, avoiding simultaneous clutter.
- **MOTION NOTES:** Illustration elements settle before Phase 2 begins; no rapid or decorative motion.

### SCENE 3 — Pin + Given Card (22.0s – 29.5s)
- **VOICEOVER:** "So speed equal to distance divided by time, but distance is given in meter, and time is given in minutes and seconds."
- **VISUAL OBJECTIVE:** Pin the question small at top, shrink the illustration below it, and introduce the Given data as the first SolutionCard.
- **SCREEN LAYOUT:** `#q-pinned` at left:385px, top:30px, width:1275px (per template). `#illus-pinned` at left:280px, top:190px, width:1300px, height:210px (shrunk copy of Scene 2's illustration). `#card-given .solution-card` centered at left:640px, top:480px.
- **ON-SCREEN ELEMENTS:**
  - `.q-card.pinned` with shortened `.q-text`: "Person crosses <span class='num'>800 m</span> street in <span class='num'>8 min 20 s</span>."
  - `#illus-pinned`: same walking-figure/street/stopwatch icons, scaled down, same relative layout.
  - `.solution-card` (`#card-given`) with `<span class="chip">Given</span>` and `.math` block:
    - `Distance = 800 m` (word-level `.rv` spans)
    - `Time = 8 min 20 s` (word-level `.rv` spans)
    - `Speed = Distance / Time` (line-level `.rv` — paraphrased formula intro)
- **ANIMATION DETAILS:**
  - `apt.fadeOut(tl, "#phase1", 21.5)`.
  - `apt.fadeIn(tl, "#q-pinned", 22.0)`, `apt.fadeIn(tl, "#illus-pinned", 22.0)`.
  - `apt.cardEnter(tl, "#card-given .solution-card", 22.5)`.
  - `apt.textReveal(tl, "#card-given .math")` — reveals: "Speed = Distance / Time" (line, data-t=16.94, paraphrased setup already spoken but visually reinforced as heading) → "Distance = 800 m" (word-level, data-t=19.86 for "distance", 22.10-ish region tied to "meter") → "Time = 8 min 20 s" (word-level, data-t=22.10 "time" through 24.46 "seconds").
  - Since narration for these values was spoken in Scene 2, the Given card's reveal timestamps are set to when the card itself becomes active (22.5s onward), re-surfacing the values textually as the formula is set up — each `.rv` timed to the corresponding sub-phrase within 22.5–29.0s using even internal pacing (no exact re-narration exists for individual words here, so line-level fades are used for Distance/Time rows, word-level for "Distance", "Time", "Speed" formula terms only).
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Morph out at Scene 4 start.
- **EDUCATIONAL PURPOSE:** Consolidate all given information and the base formula before conversion work.
- **VISUAL HIERARCHY:** Pinned question (context) > Given card (active focus) > pinned illustration (supporting memory aid).
- **ATTENTION MANAGEMENT:** Given card is the only actively-revealing element; pinned question/illustration are static holds.
- **MOTION NOTES:** `apt.cardEnter` standard 0.55s `back.out(1.4)`.

### SCENE 4 — Step 1: Convert Time to Seconds (29.5s – 37.5s)
- **VOICEOVER:** "So first, we need to convert the time into seconds. Eight minutes means eight into 60, which is 480 seconds, and 20 seconds is already there. So total time becomes 480 plus 20 equal to 500 seconds. Done."
- **VISUAL OBJECTIVE:** Show the unit-conversion sub-calculation building line by line.
- **SCREEN LAYOUT:** Given card morphs into `#stack-given` (left:100px, top:140px). `#card-step1 .solution-card` centered at left:640px, top:460px.
- **ON-SCREEN ELEMENTS:**
  - `#stack-given .stack-card` with `.step-circle` "G" and collapsed math: "Distance = 800 m / Time = 8 min 20 s".
  - `#card-step1` with `<span class="chip">Step 1</span>` and `.math`:
    - "Convert time to seconds" (line-level, paraphrased)
    - `8 × 60 = <span class="hi">480 s</span>` (word-level)
    - `480 + 20 = <span class="ans">500 s</span>` (word-level)
- **ANIMATION DETAILS:**
  - `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 29.5)` — 0.8s morph, matches "Done" beat wrap-up timing (29.14 phrase start aligns with morph trigger).
  - `apt.cardEnter(tl, "#card-step1 .solution-card", 30.5)` — ~1s breathing gap after morph.
  - `apt.textReveal(tl, "#card-step1 .math")`:
    - "Convert time to seconds" — data-t=26.18 (moved to align post-cardEnter; use 30.7 practically, first reveal right after enter)
    - `8` data-t=29.14, `×` data-t=29.9, `60` data-t=30.0, `=` data-t=31.28, `480 s` (hi) data-t=31.94
    - `480` data-t=35.92, `+` data-t=36.3, `20` data-t=36.5, `=` data-t=37.0, `500 s` (ans) data-t=39.58
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** `apt.morphToStack` 0.8s power2.inOut into Scene 5.
- **EDUCATIONAL PURPOSE:** Isolate the unit-conversion sub-skill (min→sec) as its own reasoning step.
- **VISUAL HIERARCHY:** Step 1 active card (center, largest) > Given stack card (left, collapsed, still visible for reference).
- **ATTENTION MANAGEMENT:** Word-level reveal on the numeric terms (8, 60, 480, 20, 500) mirrors the narration's step-by-step counting.
- **MOTION NOTES:** Stack card persists per continuity rule — never disappears.

### SCENE 5 — Step 2: Compute Speed in m/s (37.5s – 47.5s)
- **VOICEOVER:** "Now put the values in the speed formula. Speed equal to distance divided by time, which is 800 divided by 500. After simplifying this, we get 1.6 meter per second."
- **VISUAL OBJECTIVE:** Substitute values into the speed formula and simplify to 1.6 m/s.
- **SCREEN LAYOUT:** Step 1 morphs into `#stack-step1` (left:100px, top:290px). `#card-step2 .solution-card` centered at left:600px, top:440px (matches template's fraction-bearing card width).
- **ON-SCREEN ELEMENTS:**
  - `#stack-step1 .stack-card` with `.step-circle` "1", collapsed math: "8×60=480, 480+20=500 s".
  - `#card-step2` with `<span class="chip">Step 2</span>` and `.math`:
    - `Speed = Distance / Time` as `.frac` (top: Distance, bottom: Time)
    - `= 800 / 500` as `.frac` (top: 800, bottom: 500)
    - `= <span class="ans">1.6 m/s</span>`
  - Connector `#line-g-1` grows between the G and 1 circles.
- **ANIMATION DETAILS:**
  - `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 37.5)`.
  - `apt.stackLineGrow(tl, "#line-g-1", 37.5)`.
  - `apt.cardEnter(tl, "#card-step2 .solution-card", 38.5)`.
  - `apt.textReveal(tl, "#card-step2 .math")`:
    - "Speed = Distance / Time" (line-level) data-t=41.78 ("Now put the values...")
    - `.frac(800/500)` data-t=44.20 ("Speed equal to distance divided by time, which is 800 divided by 500" — reveal at "800")
    - `= 1.6 m/s` (ans) data-t=50.66 ("we get 1.6 meter per second")
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** `apt.morphToStack` into Scene 6.
- **EDUCATIONAL PURPOSE:** Demonstrate direct formula substitution and simplification.
- **VISUAL HIERARCHY:** Step 2 active card > Step 1 + Given stack cards (left column, both visible, connected by growing line).
- **ATTENTION MANAGEMENT:** Fraction visual (`.frac`) draws eye to the division operation before collapsing to the decimal result.
- **MOTION NOTES:** `.frac` uses existing CSS component — no new visual invented.

### SCENE 6 — Step 3: Convert to km/hr + Final Answer (47.5s – 74.28s)
- **VOICEOVER:** "But the question is asking in kilometer per hour, so we need to convert meter per second into kilometer per hour. For that, we multiply it by 3.6, so speed becomes 1.6 into 3.6, which is 5.76 kilometer per hour. Hence, the final answer will be 5.76 kilometer per hour, so the correct answer is option D."
- **VISUAL OBJECTIVE:** Show the m/s → km/hr conversion and land on the final answer, then reveal the options grid with D highlighted.
- **SCREEN LAYOUT:** Step 2 morphs into `#stack-step2` (left:100px, top:460px). `#card-step3 .solution-card` centered at left:620px, top:440px. Options reveal (`#options-reveal`) fades in over the recentered pinned-question column at top:400px.
- **ON-SCREEN ELEMENTS:**
  - `#stack-step2 .stack-card` with `.step-circle` "2", collapsed math: "800/500 = 1.6 m/s".
  - `#card-step3` with `<span class="chip">Step 3</span>` and `.math`:
    - "Convert m/s to km/hr" (line-level, paraphrased)
    - `× <span class="hi">3.6</span>` (word-level, conversion factor)
    - `1.6 × 3.6 = <span class="ans">5.76 km/hr</span>` (word-level)
  - Connector `#line-1-2` grows between circles 1 and 2.
  - `#options-reveal` `.options-grid` with four `.opt-btn`: A) 6.2, B) 4.8, C) 5.4, D) 5.76 — D has class `correct`.
- **ANIMATION DETAILS:**
  - `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 47.5)`.
  - `apt.stackLineGrow(tl, "#line-1-2", 47.5)`.
  - `apt.cardEnter(tl, "#card-step3 .solution-card", 48.5)`.
  - `apt.textReveal(tl, "#card-step3 .math")`:
    - "Convert m/s to km/hr" data-t=53.12 ("But the question is asking...")
    - `× 3.6` (hi) data-t=56.08–62.14 (word "3.6" region, use ~61.8)
    - `1.6 × 3.6 = 5.76 km/hr` (ans) data-t=62.46–68.08 (use 65.66 for "5.76" landing)
  - Step 3 morphs into `#stack-step3` + `#line-2-3` grows at 68.46s (aligns with "Hence, the final answer...").
  - Recenter: `apt.fadeOut(tl, "#illus-pinned", 68.46)` (already faded earlier, kept for structural parity) and `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 68.46)`.
  - `apt.fadeIn(tl, "#options-reveal", 69.0)`.
  - `apt.optionsStagger(tl, ".opt-btn", 69.5)` (stagger 0.12s across A→D).
  - `apt.correctPulse(tl, ".opt-btn.correct", 71.5)` — timed just after "option D" is spoken (data-t≈73.0 for word "D").
  - Final hold: `tl.set({},{},74.28)`.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Final morph + fade sequence, ending on a static hold.
- **EDUCATIONAL PURPOSE:** Complete the unit conversion and confirm the final numeric answer against the given options.
- **VISUAL HIERARCHY:** Step 3 active card → stack card transition → options grid with D pulsing green, drawing terminal focus.
- **ATTENTION MANAGEMENT:** Single climax — correctPulse is the last motion event, everything else settles beforehand.
- **MOTION NOTES:** All three stack cards + two connector lines remain visible and un-faded through the end, per continuity rule.

---

## PART 3: Asset List Required

- **Superseded by build:** the illustration uses a single provided SVG — `illustration/person-walking.svg` — instead of CSS-only shapes. Phase 1 shows the walking-person SVG with "800 m" / "8 min 20 s" labels only (no street line, no stopwatch icon). The pinned (Phase 2+) illustration is simplified further to just the SVG flanked by the two labels — no road.
- All other visual elements (cards, chips, stack circles, options, badges) come directly from `design-system.css` components — no new assets needed for those.

## PART 4: Animation Complexity Notes

- Standard complexity — no new animation helpers required. Uses only: `apt.heroEnterLowered`, `apt.serialEnter`-equivalent parallel tween (per template pattern), `apt.fadeIn`/`fadeOut`, `apt.cardEnter`, `apt.textReveal`, `apt.morphToStack` (×3, one per step), `apt.stackLineGrow` (×2), `apt.recenterForOptions`, `apt.optionsStagger`, `apt.correctPulse`.
- Only 3 solution steps (Given, Step 1, Step 2, Step 3 = 4 cards total including Given) — one fewer stack card than the template's 4-step example, so only 2 connector lines are needed (`line-g-1`, `line-1-2`) plus a third (`line-2-3`) connecting to Step 3 — matches template's exact 4-card/3-line pattern, no structural deviation.
- Given card's `.rv` reveal timestamps in Scene 3 are approximate (re-surfacing already-spoken values as the formula is framed) since the narration doesn't re-say "distance"/"time" verbatim at that exact moment — flagged here per the word/line-level reveal convention (line-level fallback used where no clean word match exists).

## PART 5: Master Timeline Overview

```
TIME (s)   ELEMENT                          WHAT HAPPENS
─────────  ───────────────────────────────  ─────────────────────────────────
0.0        Background layers                Grid + strip + topic + logo visible
0.3        QuestionCard (full, lowered)     heroEnterLowered begins
0.8        SerialNum badge                  pops in at lowered y-offset
3.18       QuestionCard + badge             rise to resting position (end of "...one more problem.")
4.92       Illustration (street+figure)     builds in
4.92       Distance label "800 m"           fades up
8.40       Stopwatch + time label           fades in
13.54      "kilometer per hour" emphasis    apt.emphasize on q-text phrase

[ END OF PHASE 1 — formula + unit-mismatch phrases now land on the Given card, not Phase 1 ]
16.5       Phase 1 elements                 fadeOut
16.9       QuestionCard (pinned)            fadeIn
16.9       Illustration (pinned)            fadeIn
17.0       Given card                       cardEnter + textReveal ("Speed=Distance/Time", "Distance=800m", "Time=8min20s")

[ STEP CYCLE — re-synced to actual transcript phrase order ]
25.0       Given → Given stack               morphToStack ("So first," @25.04)
26.0       Step 1 card                      cardEnter + textReveal (convert time → 8×60=480 → +20=500s)
41.0       Step 1 → Step 1 stack            morphToStack + line-g-1 grows ("Done" @41.08)
41.8       Step 2 card                      cardEnter + textReveal (Speed=Dist/Time=800/500=1.6 m/s)
53.0       Step 2 → Step 2 stack            morphToStack + line-1-2 grows ("But the question is asking..." @53.12)
53.8       Step 3 card                      cardEnter + textReveal (convert m/s→km/hr, ×3.6, =5.76 km/hr)
68.46      Step 3 → Step 3 stack            morphToStack + line-2-3 grows ("Hence, the final answer..." @68.46)
68.46      Pinned question                  recenterForOptions

[ PHASE 3 — OPTIONS REVEAL ]
69.2       options-reveal container         fadeIn
69.7       Option buttons A/B/C/D           optionsStagger
72.8       Option D (correct)               correctPulse ("...option D")
74.28      End                              All elements remain visible
```

> **Note:** these timestamps supersede the per-scene timestamps written in Part 2 above — the earlier scene-numbering estimated morph points against a generic phase pacing before the transcript's actual phrase order was cross-checked. The corrected sync (Given card covers 17.0–25.0s for the formula/unit-mismatch setup; Step 1's morph doesn't happen until 41.0s after the full 8×60+20=500s calculation; "Done" at 41.08s is the true Step 1→Step 2 handoff) is what's wired into `index.html`.
