# Storyboard — Speed and Time / Question 29 ("Delayed Flight")

Video length: **105.6s** (from `voiceover.wav` / `transcript.json`)
Topic: **Speed and Time** · Tier: **Intermediate**

---

## PART 1 — Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|-----------|-----------|----------------------|------------------|-------------------|
| 1 | 0.12–3.42 | "So welcome back again. Time for one more problem." | Hook / continuity greeting | Center of frame | QuestionCard begins to rise into view |
| 2 | 4.12–10.00 | "...a flight covers a total distance of one thousand two hundred kilometer." | Establish total distance | Question text + emerging plane illustration | Plane icon appears, distance label "1200 km" builds in under flight path |
| 3 | 10.66–13.80 | "The speed of the flight is reduced by two hundred kilometer per hour." | Establish the delay cause | Speed callout | A "−200 km/hr" chip appears near the plane, plane visibly slows (icon scale/position cue) |
| 4 | 14.40–19.52 | "Because of this reduction in speed, the journey takes one extra hour." | Establish the consequence | Clock/delay icon | A small clock icon with "+1 hr" pops in beside the plane |
| 5 | 20.00–24.34 | "The question is asking us to find the original duration of the flight." | State the goal | Question card | Question card + illustration begin gliding toward pinned position (pinFlow) |
| 6 | 24.68–29.34 | "Now, let us assume the original time taken by the flight is t hours." | Introduce the variable | Given/Step 1 card | Given card fades in with recap values; "Let time = t hrs" begins revealing |
| 7 | 29.78–37.90 | "Since we already know the total distance, we can write the original speed using the formula. Speed is equal to distance divided by time." | Justify the formula | Step 1 card | Formula text builds (silent hold while justification is spoken) |
| 8 | 38.42–50.32 | "So original speed is equal to 1200 divided by t. After the speed is reduced, the journey takes one more hour, so the new time becomes t plus one hours." | Compute original speed; state new time | Step 1 card | "Original Speed = 1200/t" reveals; "New Time = t + 1" reveals |
| 9 | 50.98–57.24 | "Using the same formula, new speed is equal to 1200 divided by t plus one." | Compute new speed | Step 1 card | "New Speed = 1200/(t+1)" reveals, completing Step 1 |
| 10 | 57.74–69.06 | "And be very sure about one thing, the question says the speed is reduced by 200 km/hr. So original speed minus new speed is equal to 200." | Set up the key equation | Step 2 card | Step 1 morphs to stack; Step 2 card enters with the subtraction relation |
| 11 | 69.62–83.60 | "Putting the values, 1200/t − 1200/(t+1) = 200. After simplifying, we get t² + t − 6 = 0." | Solve the equation | Step 2 card | Equation substitutes and simplifies to the quadratic |
| 12 | 84.42–91.08 | "After factorizing, (t+3)(t−2) = 0. This gives us two values." | Factorize | Step 3 card | Step 2 morphs to stack; Step 3 card shows factorization |
| 13 | 91.64–95.40 | "t is equal to two, or t is equal to minus three." | Show both roots | Step 3 card | Both roots reveal side by side |
| 14 | 96.16–105.22 | "But time can never be negative. Hence, the original duration of the flight is two hours. Therefore, the correct answer is option..." | Reject invalid root, state final answer | Step 4 card → Options | Step 3 morphs to stack; Step 4 card shows rejection + final answer; options grid reveals |
| 15 | 105.54–105.56 | "B." | Confirm correct option | Option B | correctPulse on Option B |

---

## PART 2 — Scene-by-Scene Storyboard

### SCENE 1 — Question Reveal + Given Card (facts stated live)
- **TIMESTAMP:** 0 – 19.6s
- **VOICEOVER:** Beats 1–4 (greeting through "+1 extra hour")
- **VISUAL OBJECTIVE:** Establish the question, build a purely decorative flight illustration, and bring in the Given card the instant the narration starts stating each fact — no illustration chips duplicating the numbers.
- **SCREEN LAYOUT:** `#q-full-card` centered top; `#illustration` (plane + dashed path only, decorative) at `top:380px;height:140px`; `#card-given .solution-card` at `left:640px;top:600px`, sitting below the illustration with a clear ~80px gap.
- **ON-SCREEN ELEMENTS:**
  - `q-card` with `.q-text`: "A 1200 km flight is delayed. Speed is reduced by <span class='num'>200 km/hr</span>, increasing time by <span class='num'>1 hour</span>. The original duration is:"
  - Serial badge "Q" top-left
  - Illustration: `illustration/airplane.svg` (the user-supplied icon) on a thin dashed flight path — decorative only, no text chips
  - Given `SolutionCard` (chip "Given"): `Distance = 1200 km`, `Speed reduced by = 200 km/hr`, `Time increases by = 1 hr` — each line is its own `.rv` (line-level, paraphrased) revealed exactly when that fact is spoken
- **ANIMATION DETAILS:**
  - 0.3s: `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.6)` — rises at 3.6s (end of beat 1)
  - 0.8s: `#serial-num` pops in at the lowered offset, rises with the card at 3.6s
  - 4.3s: `apt.fadeIn(tl, "#illustration", 4.3)` — plane + dashed path fade in together (no separate per-fact chips)
  - 7.30s: `apt.cardEnter(tl, "#card-given .solution-card", 7.30)` — Given card box enters just ahead of the first fact
  - `apt.textReveal(tl, "#card-given .math")`:
    - `"Distance = 1200 km"` → `data-t="7.84"` (matches "...total distance of one thousand two hundred kilometer")
    - `"Speed reduced by = 200 km/hr"` → `data-t="10.66"` (matches "The speed of the flight is reduced by two hundred kilometer per hour")
    - `"Time increases by = 1 hr"` → `data-t="14.40"` (matches "Because of this reduction in speed, the journey takes one extra hour")
  - 14.88s: `tl.to("#plane-icon", {x:-15, duration:1.5, ease:"power2.out"}, 14.88)` — plane's forward motion visibly eases, timed to the same "reduction in speed" beat
- **CAMERA MOVEMENT:** Static frame
- **TRANSITIONS:** None yet — continuous build within Phase 1
- **EDUCATIONAL PURPOSE:** Let the Given card itself carry every stated fact in sync with the narration, instead of splitting the same information between illustration chips and a later recap card
- **VISUAL HIERARCHY:** Question text (top) > illustration (center, decorative) > Given card (lower, the actual data)
- **ATTENTION MANAGEMENT:** Each Given line reveals exactly when its fact is spoken — no simultaneous reveals, no duplicated chips
- **MOTION NOTES:** Given card stays on screen, holding its now-complete three lines, straight through the Scene 2 pin transition — it does not re-enter or re-animate at PIN_TIME
- **CONTINUITY FROM PREVIOUS SCENE:** Opening scene — no prior scene. Frame opens with `#q-full-card` and `#serial-num` both statically lowered/transparent, rising together at 3.6s; the Given card is a separate, independently-timed element that joins mid-scene at 7.30s.

---

### SCENE 2 — Pin (Given card already in place)
- **TIMESTAMP:** PIN_TIME = 19.6s
- **VOICEOVER:** Beats 5–6 ("question is asking to find original duration" → "let us assume original time is t hours")
- **VISUAL OBJECTIVE:** Move the question/illustration into their pinned Phase-2 slot while the Given card — already fully revealed since Scene 1 — holds in place underneath.
- **SCREEN LAYOUT:** `#q-pinned` at `left:385px;top:30px;width:1275px`; `#illus-pinned` at `left:280px;top:190px;width:1300px;height:130px` (dashed path removed, icon enlarged to 120×120, paired with a 22px `.pinned-label` — "Distance = 1200 km"); `#card-given .solution-card` unchanged at `left:640px;top:600px`.
- **ON-SCREEN ELEMENTS:**
  - Pinned question card (shortened text)
  - Pinned illustration: enlarged plane icon + a single bigger label (22px), no dashed road — the road only made sense as a Phase-1 decorative flourish, not at pinned scale
  - Given card, static, fully revealed (no more `.rv` reveals firing here — that all happened in Scene 1)
- **ANIMATION DETAILS:**
  - 19.6s: `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 19.6)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 19.6)` — real glide (0.8s) into the pinned slot, timed as the narration pivots to restating the goal ("question is asking...")
- **CAMERA MOVEMENT:** Static
- **TRANSITIONS:** `pinFlow` glide (0.8s, `power2.inOut`)
- **EDUCATIONAL PURPOSE:** Keep the known quantities continuously visible (Given card never disappears/re-enters) while the layout reorganizes around them
- **VISUAL HIERARCHY:** Pinned question (top, small) > Given card (center-low, static) > pinned illustration (upper-middle, background reference)
- **ATTENTION MANAGEMENT:** No new reveals fire in this scene — it's purely the layout settling before Step 1 begins at 30.5s
- **MOTION NOTES:** No `apt.ambientLoop` needed — this is a short (~10s) transitional gap and the narration ("let us assume original time is t hours") is continuously talking through it
- **CONTINUITY FROM PREVIOUS SCENE:** The plane icon from Scene 1 is the same asset carried into `#illus-pinned` (enlarged copy, road dropped) — `pinFlow` interpolates from the Scene 1 rendered position. The Given card does not participate in the pin at all; it simply persists, already fully revealed, as the backdrop around it changes.

---

### SCENE 3 — Step 1: Setting Up Original & New Speed
- **TIMESTAMP:** 29.5s (Given morphs to stack) → 30.5s (Step 1 card enters) → ends 55.5s
- **VOICEOVER:** Beats 7–9 (29.78–57.24: formula justification, original speed, new time, new speed)
- **VISUAL OBJECTIVE:** Derive both speed expressions in terms of `t` before introducing the reduction equation.
- **SCREEN LAYOUT:** Given card slides left into `#stack-given` (`left:100px;top:140px`); Step 1 `SolutionCard` at `left:640px;top:460px`.
- **ON-SCREEN ELEMENTS:**
  - Stack: `.step-circle` "G" + collapsed Given card (plain fade-in, no `.rv`)
  - Active Step 1 card, chip "Step 1", math:
    - `Let Original Time = t hrs`
    - `Original Speed = 1200/t km/hr`
    - `New Time = (t + 1) hrs`
    - `New Speed = 1200/(t+1) km/hr`
- **ANIMATION DETAILS:**
  - 24.68s: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 24.68)` — 0.8s morph, fired exactly as "Now, let us assume the original time taken by the flight is t hours" begins, so the Given card retires the instant the video moves on to defining `t`
  - 25.70s: `apt.cardEnter(tl, "#card-step1 .solution-card", 25.70)` — ~1s breathing gap after the morph starts (24.68+1.0=25.68, rounded to 25.70)
  - 25.70s: `apt.textReveal(tl, "#card-step1 .math")` with line-level `.rv` timestamps:
    - `"Let Original Time = t hrs"` → `data-t="25.70"` (fires right as the card enters, in sync with "let us assume..." which starts at 24.68 and is still being spoken)
    - `"Original Speed = 1200/t km/hr"` → `data-t="38.56"` (word-level on the numeric parts, matching "original speed is equal to 1200 divided by t")
    - `"New Time = (t + 1) hrs"` → `data-t="48.42"` (word-level: "t plus one hours" lands ~46.90–50.32)
    - `"New Speed = 1200/(t+1) km/hr"` → `data-t="53.98"` (word-level, matching "new speed is equal to 1200 divided by t plus one", 52.64–57.24)
- **CAMERA MOVEMENT:** Static
- **TRANSITIONS:** `morphToStack` (0.8s, `power2.inOut`) — Given card shrinks, slides left, recolors to `--primary-light`
- **EDUCATIONAL PURPOSE:** Build both speed expressions before the viewer sees the equation that links them — avoids a wall of algebra appearing at once
- **VISUAL HIERARCHY:** Active Step 1 card (center, largest) > Given stack card (left, secondary)
- **ATTENTION MANAGEMENT:** Four short lines reveal one at a time across a ~27s span so the card never feels static despite the long narration
- **MOTION NOTES:** No `apt.emphasize`/`apt.resultReveal` layered on the reveals — `apt.textReveal` is the sole animation for this content
- **CONTINUITY FROM PREVIOUS SCENE:** The Given card's box is mid-morph as this scene opens — its `.card-content` has already faded out per `morphToStack`'s internal sequencing, and Step 1's `cardEnter` begins immediately as that morph's box settles into the stack slot, so the two feel like one continuous hand-off rather than two independent events.

---

### SCENE 4 — Step 2: The Reduction Equation
- **TIMESTAMP:** 37.5s→38.5s… *(see note)* — actually 55.3s (Step 1 morphs to stack) → 57.74s (Step 2 card enters) → ends 83.9s
- **VOICEOVER:** Beats 10–11 (57.74–83.60: "original speed minus new speed = 200" through the simplified quadratic)
- **VISUAL OBJECTIVE:** Combine the two speed expressions into the equation and simplify to the standard quadratic form.
- **SCREEN LAYOUT:** Step 1 slides into `#stack-step1` (`left:100px;top:290px`); Step 2 `SolutionCard` at `left:600px;top:440px;width:720px`.
- **ON-SCREEN ELEMENTS:**
  - Stack: `.step-circle` "1" + collapsed Step 1 card; `.stack-line` connector `#line-g-1` grown between G and 1
  - Active Step 2 card, chip "Step 2", math:
    - `Original Speed − New Speed = 200`
    - `1200/t − 1200/(t+1) = 200`
    - `⇒ t² + t − 6 = 0`
- **ANIMATION DETAILS:**
  - 55.3s: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 55.3)`
  - 55.3s: `apt.stackLineGrow(tl, "#line-g-1", 55.3)` — grows exactly as the "1" circle lands, connecting G→1
  - 57.74s: `apt.cardEnter(tl, "#card-step2 .solution-card", 57.74)`
  - 57.74s: `apt.textReveal(tl, "#card-step2 .math")`:
    - `"Original Speed − New Speed = 200"` → `data-t="57.74"` (word-level, matches "original speed minus new speed is equal to 200")
    - `"1200/t − 1200/(t+1) = 200"` → `data-t="69.62"` (word-level, matches "putting the values, 1200 divided by t minus 1200 divided by t plus one is equal to 200")
    - `"⇒ t² + t − 6 = 0"` → `data-t="78.9"` (line-level, matches "after simplifying we get t square plus t minus six is equal to zero")
- **CAMERA MOVEMENT:** Static
- **TRANSITIONS:** `morphToStack` (0.8s)
- **EDUCATIONAL PURPOSE:** Show the algebraic path from the physical relationship to the solvable quadratic without skipping the substitution step
- **VISUAL HIERARCHY:** Active Step 2 card > stack column (G, 1) on the left, connector line visible between them
- **ATTENTION MANAGEMENT:** Three lines revealed at long intervals (57.7, 69.6, 78.9) matching the narration's own pacing — no idle-card risk since each gap is under the ~15s `ambientLoop` threshold and narration is continuous
- **MOTION NOTES:** `.stack-line` grows once, never fades — stays visible through the rest of the video per `design.md`
- **CONTINUITY FROM PREVIOUS SCENE:** Step 1's card is still completing its box morph into the stack (text already faded per the morph's internal sequencing) as Step 2's `cardEnter` begins — same hand-off pattern as Scene 3→4, keeping the whole solve reading as one take.

---

### SCENE 5 — Step 3: Factorizing
- **TIMESTAMP:** 82.5s (Step 2 morphs to stack) → 84.42s (Step 3 card enters) → ends 95.9s
- **VOICEOVER:** Beats 12–13 (84.42–95.40: factorization and the two roots)
- **VISUAL OBJECTIVE:** Factor the quadratic and reveal both roots side-by-side, setting up the negative-time rejection in the next scene.
- **SCREEN LAYOUT:** Step 2 slides into `#stack-step2` (`left:100px;top:460px`); Step 3 `SolutionCard` at `left:600px;top:440px`.
- **ON-SCREEN ELEMENTS:**
  - Stack: `.step-circle` "2" + collapsed Step 2 card; `.stack-line` connector `#line-1-2` grown between 1 and 2
  - Active Step 3 card, chip "Step 3", math:
    - `(t + 3)(t − 2) = 0`
    - `t = 2  or  t = −3`
- **ANIMATION DETAILS:**
  - 82.5s: `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 82.5)`
  - 82.5s: `apt.stackLineGrow(tl, "#line-1-2", 82.5)`
  - 84.42s: `apt.cardEnter(tl, "#card-step3 .solution-card", 84.42)`
  - 84.42s: `apt.textReveal(tl, "#card-step3 .math")`:
    - `"(t + 3)(t − 2) = 0"` → `data-t="84.42"` (word-level, matches "after factorizing, t plus three multiplied by t minus two is equal to zero")
    - `"t = 2"` → `data-t="91.64"` (word-level, matches "t is equal to two")
    - `"or  t = −3"` → `data-t="93.4"` (word-level, matches "or t is equal to minus three")
- **CAMERA MOVEMENT:** Static
- **TRANSITIONS:** `morphToStack` (0.8s)
- **EDUCATIONAL PURPOSE:** Isolate the factorization step so the viewer sees exactly where both candidate answers come from before either is judged
- **VISUAL HIERARCHY:** Active Step 3 card > stack column (G, 1, 2)
- **ATTENTION MANAGEMENT:** Two short reveals, tightly spaced (84.4 → 91.6 → 93.4) matching the quick pace of this narration beat
- **MOTION NOTES:** Both roots shown plainly via `.rv` fade — no `emphasize` pulse (that would double-animate); the "wrong" root gets visually rejected only in the next scene, not flagged here
- **CONTINUITY FROM PREVIOUS SCENE:** Step 2's card box is still settling into the stack (per the standard morph hand-off) as Step 3's card fades in at center — the `#line-1-2` connector grows in the same instant the "2" circle lands, so the left column's growth and the new active card's entrance read as one simultaneous beat, matching the pattern from Scenes 3–4.

---

### SCENE 6 — Step 4: Rejecting the Negative Root + Final Answer, then Options Reveal
- **TIMESTAMP:** 95.5s (Step 3 morphs to stack) → 96.5s (Step 4 card enters) → 101.6s (Step 4 morphs to stack) → 105.56s (end)
- **VOICEOVER:** Beat 14–15 (96.16–105.56: "time can never be negative... hence 2 hours... option B")
- **VISUAL OBJECTIVE:** Reject the invalid root, state the final answer, fold Step 4 into the stack column like every other step, then reveal the options grid with the correct option highlighted.
- **SCREEN LAYOUT:** Step 3 slides into `#stack-step3` (`left:100px;top:604px`); Step 4 `SolutionCard` centered, then slides into `#stack-step4` (`left:100px;top:724px`); options grid on `.pinned-col` at `top:400px`.
- **ON-SCREEN ELEMENTS:**
  - Stack: `.step-circle` "3" + collapsed Step 3 card; `.stack-line` connector `#line-2-3`
  - Active Step 4 card, chip "Step 4", math: `Time cannot be negative`, `⇒ Original Duration = 2 hours`
  - Stack (new): `.step-circle` "4" + collapsed Step 4 card ("Time cannot be negative" / "Duration = 2 hours"); `.stack-line` connector `#line-3-4` between circles 3 and 4 — the stack column now runs G→1→2→3→4, all four persisting to the end
  - Options grid (2×2): A) 4 hours · B) 2 hours *(correct)* · C) 3 hours · D) 5 hours
- **ANIMATION DETAILS:**
  - 95.5s: `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 95.5)`
  - 95.5s: `apt.stackLineGrow(tl, "#line-2-3", 95.5)`
  - 96.5s: `apt.cardEnter(tl, "#card-step4 .solution-card", 96.5)`
  - 96.5s: `apt.textReveal(tl, "#card-step4 .math")`:
    - `"Time cannot be negative"` → `data-t="96.16"` (line-level, matches "but time can never be negative")
    - `"Original Duration = 2 hours"` → `data-t="101.26"` (word-level on "2 hours", matches "the original duration of the flight is two hours")
  - 101.60s: `apt.morphToStack(tl, "#card-step4 .solution-card", "#stack-step4 .stack-card", 101.60)` — Step 4 now folds into the stack instead of just fading out, consistent with every earlier step
  - 101.60s: `apt.stackLineGrow(tl, "#line-3-4", 101.60)`
  - 102.60s: `apt.fadeOut(tl, "#illus-pinned", 102.60)` and `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 102.60)` — clear remaining illustration, align pinned question with the options column, right after Step 4's morph completes (101.6+0.8=102.4)
  - 102.60s: `apt.fadeIn(tl, "#options-reveal", 102.60)`
  - 103.40s: `apt.optionsStagger(tl, ".opt-btn", 103.40)` — 4 buttons stagger in (0.12s each), timed to "therefore the correct answer is option" (102.38–105.22)
  - 105.30s: `apt.correctPulse(tl, ".opt-btn.correct", 105.30)` — pulses right as "B" is spoken (105.54–105.56); pulse starts slightly before the word lands so the highlight is visibly settled the instant "B" is heard
- **CAMERA MOVEMENT:** Static
- **TRANSITIONS:** `morphToStack` (0.8s) for Step 3→stack and Step 4→stack; `recenterForOptions` (0.5s, `power2.inOut`) shifts the pinned question right to align with the options column
- **EDUCATIONAL PURPOSE:** Close the logical loop (reject invalid root → state real-world answer) before confirming against the original options — folding Step 4 into the stack keeps the full G→1→2→3→4 derivation visible on the left as a recap while the answer is confirmed on the right
- **VISUAL HIERARCHY:** Step 4 card (center, active) → collapses into the stack column, which stays visible in full (G,1,2,3,4) through the options reveal
- **ATTENTION MANAGEMENT:** The negative-root rejection is the last new idea before the answer, so it gets its own short beat rather than being crammed into Step 3
- **MOTION NOTES:** `correctPulse` is the only pulse used in the whole video (per design system, reserved for the final answer) — no other card gets an `emphasize`
- **CONTINUITY FROM PREVIOUS SCENE:** Step 3's card is completing its morph into the stack (line `#line-2-3` growing in the same instant) as Step 4 fades in at center — same hand-off as every prior step transition. Step 4 itself then follows the identical hand-off pattern into `#stack-step4` before the pinned question's `recenterForOptions` fires, so the "shift into place" reads as the video's final settling motion before the answer choices appear.

---

## PART 3 — Asset List Required

- Flat 2D airplane icon (side-profile, primary-blue `#6373db` accent, simple silhouette) — 2 sizes needed: large (Phase 1 hero, ~200px wide) and small (pinned copy, ~90px wide, same asset scaled)
- Dashed flight-path line (CSS `border-dashed` or SVG, no new asset file needed — reuse `.stack-line`-style dash via CSS)
- Small clock icon (flat 2D, primary-blue outline) for the "+1 hr" delay callout — simple SVG, ~40px
- No other new assets — `serial-num-badge.svg` and `logo.png` reused from `_template/assets/`

## PART 4 — Animation Complexity Notes

- 5 `morphToStack` calls total (Given, Step1, Step2, Step3 → each into stack) — all standard 0.8s, no deviation
- 4 `stackLineGrow` calls (G→1, 1→2, 2→3, 3→4) connecting all 5 stack circles (G, 1, 2, 3, 4) — Step 4 now morphs into the stack just like every other step (this was reworked from the original draft, which kept Step 4 as a terminal card that only faded out — see Scene 6).
- No `ambientLoop` needed anywhere — narration is continuous throughout, no long silent stretch on a pinned icon
- One `heroEnterLowered` (Phase 1 hero card) + matching manual serial-num parallel tween, per template convention
- One `pinFlow` pair (question + illustration) at Phase 1→2 transition
- One `recenterForOptions` near the very end, paired with the illustration's final `fadeOut`
- One `correctPulse` — reserved solely for Option B at the very end

## PART 5 — Master Timeline Overview

> Re-synced to the actual `index.html` build — a handful of times shifted from
> the first draft above so that every `apt.textReveal` word/line lands
> *before* its card's own `apt.morphToStack` starts (otherwise the morph's
> text-fade-out silently swallows a reveal that hadn't happened yet).

| Time (s) | Event |
|----------|-------|
| 0.3 | `heroEnterLowered` question card starts (rises at 3.6) |
| 0.8 | Serial badge pop (rises at 3.6) |
| 4.3 | Illustration (plane + dashed path only, decorative) fades in |
| 7.30 | Given card enters (box) |
| 7.84 | Given line 1 reveals — "Distance = 1200 km" |
| 10.66 | Given line 2 reveals — "Speed reduced by = 200 km/hr" |
| 14.40 | Given line 3 reveals — "Time increases by = 1 hr" |
| 14.88 | Plane eases/drifts (1.5s decel tween) |
| 19.6 | `pinFlow` — question + illustration glide to pinned slot (Given card holds in place, unaffected); serial-num badge fades out in lockstep (mirrors pinFlow's own fade curve) |
| 24.68 | Given → stack morph — fires exactly as "Now, let us assume..." begins |
| 25.70 | Step 1 card enters (speed expressions build via word-level reveals through 57.4) |
| 57.70 | Step 1 → stack morph + line G-1 grows |
| 58.70 | Step 2 card enters (equation → quadratic, reveals through 83.30) |
| 83.60 | Step 2 → stack morph + line 1-2 grows |
| 84.60 | Step 3 card enters (factorization + roots, reveals through 94.10) |
| 95.50 | Step 3 → stack morph + line 2-3 grows |
| 96.50 | Step 4 card enters (reject negative root, state 2 hours) |
| 101.60 | Step 4 → stack morph + line 3-4 grows |
| 102.60 | Illustration fades out; pinned question recenters; options grid fades in |
| 103.40 | Options stagger in (A–D) |
| 105.30 | Option B correctPulse (settles just before "B." lands at 105.54) |
| 106.5 | End (stack column G-1-2-3-4 and all elements remain visible) |
