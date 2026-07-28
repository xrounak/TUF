# Speed-Time-Distance — Q26 — Storyboard

**Question:** A train covers 300 km in 5 hours, including stoppages. If its running speed is 75 km/hr, find the total stoppage time.
**Options:** A) 0.75 hours B) 1.25 hours C) 1 hours (correct) D) 0.5 hours
**Video length:** 63.9s (voiceover ends 63.919s / transcript.json, END_FADE at 64.3s + 1.0s fade)

---

## PART 1: Narration Beat Analysis

| # | Time | Narration | Educational purpose | Attention focus | Visual objective |
|---|------|-----------|---------------------|------------------|-------------------|
| 1 | 0.12–3.76 | "So welcome back again. Time for one more problem." | Cold open | Question card | Question fades/rises in |
| 2 | 4.20–13.08 | "Now, in this problem, we are given that a train covers three hundred kilometers in five hours, including all the stoppages." | Establish the train and its total-journey figures | Train icon, "300 km in 5 hr" label | Train fades in, distance/time label builds |
| 3 | 13.56–17.24 | "Its running speed is seventy-five kilometer per hour." | Introduce the running (moving-only) speed | Running-speed label | Stop-badge pops on the train, "75 km/hr" label fades up, figure emphasized |
| 4 | 17.94–20.92 | "The question is asking us to find the total stoppage time." | Restate the ask | Stop-badge + "?" badge | Stop-badge pulses, unknown badge fades in |
| 5 | 21.46–27.32 | "Now, first, let us find the actual running time taken by train to cover three hundred kilometers." | Recap the givens, set up the first computation | Given card | pinFlow glide completes; Given card opens with recap + live "find running time" line |
| 6 | 27.80–39.22 | "We know the formula. Time is equal to distance divided by speed. Putting the values, running time is equal to three hundred divided by seventy-five. This gives us four hours." | Step 1 — compute the actual running time | Step 1 card | Formula → substitution → answer (4 hours), word-synced |
| 7 | 39.64–51.68 | "Now that we know the actual running time, finding the stoppage time becomes very easy. The total journey took five hours, but the train was actually moving for only four hours. So the remaining time must be the stoppage time." | Bridge — reasons from running time to stoppage time before the arithmetic | Step 1 card (closing bridge line) | Bridge line reveals and holds through this long narration stretch |
| 8 | 52.16–61.28 | "Stoppage time is equal to total time minus running time. That is equal to five minus four. This gives us one hour. So the total stoppage time is one hour." | Step 2 — compute the stoppage time | Step 2 card | Formula → substitution → answer (1 hour), word-synced |
| 9 | 61.62–63.92 | "Hence, the correct answer is option C." | Reveal correct option | Options grid | Step 2 morphs to stack; layout recenters; options stagger in; correct option (C) pulses |

---

## PART 2: Scene-by-Scene Storyboard

### SCENE 1 — Question Reveal + Illustration + Given Card (built together)
**TIMESTAMP:** 0.3s – 21.2s (PIN_TIME)
**VOICEOVER:** "So welcome back again. Time for one more problem. Now, in this problem, we are given that a train covers three hundred kilometers in five hours, including all the stoppages. Its running speed is seventy-five kilometer per hour. The question is asking us to find the total stoppage time."
**VISUAL OBJECTIVE:** Establish the train's two figures (300 km in 5 hr total journey, 75 km/hr running speed) directly on a Given solution card that builds in alongside the illustration — not delayed until the pin — so each value locks in as its own recap the moment it's spoken, and mark the stoppage time itself as the unknown to solve for.
**SCREEN LAYOUT:** Full question card centered top (lowered-hero start, rises at 3.6s). A single flat 2D train icon centered mid-frame (`#illustration`, raised to top:340px/height:220px to make room below), with a small stop-badge pinned to its top-right corner and two stacked info labels beside it. Directly beneath the illustration, the Given `.solution-card` (`#card-given`, top:620px) opens early (6.0s) and stays on screen through the whole scene, revealing one line per given value as it's narrated — illustration and Given card build in together, not sequentially.
**ON-SCREEN ELEMENTS:**
- `#q-full-card` — "A train covers <span class="num">300 km</span> in <span class="num">5 hours</span>, including stoppages. If its running speed is <span class="num">75 km/hr</span>, find the total stoppage time."
- `#serial-num` badge (Q)
- `#illustration`: `#train-wrap` (relative-positioned train icon, `train-faster.svg`, 200px, used as-is — its own fills already match `--primary`/blue-grey neighbors) with `#stop-badge` (small circle, white bg, `--primary` outline, two vertical "pause" bars, absolute top-right of the train, opacity 0 until beat 3) and `#unknown-badge` ("?" pill, opacity 0 until beat 4) pinned just above `#stop-badge`; beside the train, `#info-labels` (flex column) holding `#dist-time-label` ("300 km in 5 hr — total") and `#run-speed-label` ("Running: 75 km/hr").
- `#card-given .solution-card` (width 720px, top:620px, below the illustration) — chip "Given", math (4 lines):
  - line-level, sync'd to narration: "Total Distance = <span class="hi">300 km</span>"
  - line-level, sync'd to narration: "Total Time = <span class="hi">5 hr</span>"
  - line-level, sync'd to narration: "Running Speed = <span class="hi">75 km/hr</span>"
  - word-level, live-matched (post-pin): "Let's find the actual <span class="hi">running time</span>"
**ANIMATION DETAILS:**
- 0.3s: `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.6)` — card rises to rest as "problem." finishes (3.76s + buffer).
- 0.8s / 3.6s: `#serial-num` parallel tween mirroring the card's y-offset and rise.
- 6.0s: `apt.cardEnter(tl, "#card-given .solution-card", 6.0)` — Given card fades/scales in just ahead of the train, so both are building in around the same beat.
- 6.5s: `#train-wrap img` fades+scales in (`fromTo y:20→0, scale:0.85→1, opacity 0→1`, 0.55s, `back.out(1.4)`) timed just before "a train covers" (6.92).
- 8.5s: `apt.textReveal` fires "Total Distance = 300 km" (line-level) timed to "three hundred kilometers" (8.54).
- 8.6s: `#dist-time-label` ("300 km in 5 hr — total") fades up (`fromTo y:10→0, opacity 0→1`, 0.4s) alongside the Given card's own distance line.
- 10.3s: `apt.textReveal` fires "Total Time = 5 hr" (line-level) timed to "in five hours" (10.30).
- 11.6s: `#stop-badge` pops in (`fromTo scale:0.5→1, opacity 0→1`, 0.4s, `back.out(1.6)`) timed to "including all the stoppages" (11.62) — visually introduces "including stoppages."
- 13.6s: `apt.textReveal` fires "Running Speed = 75 km/hr" (line-level) timed to "Its running speed is" (13.56).
- 13.7s: `#run-speed-label` ("Running: 75 km/hr") fades up beneath the distance/time label (`fromTo y:10→0, opacity 0→1`, 0.4s), landing right after the Given card's own speed line.
- 14.9s: `apt.emphasize(tl, "#run-speed-label .val", 14.9)` — emphasis on the "75 km/hr" figure timed to "seventy-five" (14.98).
- 20.2s: `apt.emphasize(tl, "#stop-badge", 20.2)` — stop-badge pulses (scale 1→1.1 yoyo, 0.3s) timed to "stoppage" (20.22–20.92); `#unknown-badge` ("?") fades in at the same moment (`fromTo scale:0.5→1, opacity 0→1`, 0.3s).
**CAMERA MOVEMENT:** Static frame — all motion is element-level.
**TRANSITIONS:** None yet; scene ends with pinFlow into Scene 2 (Given card itself does NOT pin — it stays exactly where it is).
**EDUCATIONAL PURPOSE:** Let the viewer see each given fact locked into its own recap line in real time as it's spoken — the Given card is a live-building scratchpad next to the illustration, not a delayed summary — before marking "the stoppage time is the unknown."
**VISUAL HIERARCHY:** Question card > train icon > stop-badge > info labels > Given card > "?" badge.
**ATTENTION MANAGEMENT:** One new element/reveal per phrase — Given card box, then train, then distance line + label, then stop-badge, then time line, then speed line + label, then the pulse+badge on the unknown — never more than one entrance per breath.
**MOTION NOTES:** The train itself stays static (no driving animation) — the journey figures (now doubled: on the illustration's own labels AND the Given card) and the "unknown" marker are the message, not motion of the train.
**CONTINUITY FROM PREVIOUS SCENE:** Cold open — nothing precedes this.

---

### SCENE 2 — Pin
**TIMESTAMP:** PIN_TIME = 21.2s
**VOICEOVER:** (21.46–27.32) "Now, first, let us find the actual running time taken by train to cover three hundred kilometers."
**VISUAL OBJECTIVE:** Compress the question + illustration into a pinned recap while the Given card (already fully on screen) formalizes the first computation goal via its final live line.
**SCREEN LAYOUT:** Question pins to top-shrunk card; train icon shrinks into `#illus-pinned` (single icon, `justify-content:center`) with a short recap label beneath. The Given card does not move — it stays at its Phase 1 position (top:620px) since it has no pinned counterpart; the pinned illustration lands well above it (top:190px) with no overlap.
**ON-SCREEN ELEMENTS:**
- `#q-pinned` — shortened question text with accents.
- `#illus-pinned`: `#illus-pinned-train` (small train + stop-badge), centered "300km/5hr → 75 km/hr run" recap label beneath.
- `#card-given .solution-card` — unchanged position; only its 4th line (the live word-synced goal) has not yet revealed.
**ANIMATION DETAILS:**
- 21.2s (PIN_TIME): `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 21.2)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 21.2)` fired together.
- 21.2s: `apt.fadeOut(tl, "#serial-num", 21.2, 0.5)`.
- 21.5s: `apt.ambientLoop(tl, "#illus-pinned-train", 21.5, 61.4)` starts on the pinned train icon.
- `apt.textReveal(tl, "#card-given .math")` (called once, back in Scene 1) fires its final unit here: "Let's"(22.379) "find"(22.699) "the"(22.92) "actual"(23.059) "running"(23.559, hi) "time"(23.939, hi) — from "let us find the actual running time."
**CAMERA MOVEMENT:** None — pinFlow is the only motion.
**TRANSITIONS:** pinFlow glide (0.8s) is the scene's opening transition.
**EDUCATIONAL PURPOSE:** Formalizes "find the running time" as the first concrete goal, right as the pinned layout settles — the three given facts are already locked in from Scene 1, so this beat is purely the live goal-setting line.
**VISUAL HIERARCHY:** Pinned question (context) → pinned train (recap) → Given card (still active, center-low).
**ATTENTION MANAGEMENT:** No new box entrances here — the pin glide is the only motion, and the Given card's last line is the only new text reveal, keeping this beat calm after Scene 1's denser build-up.
**MOTION NOTES:** No pulses beyond the card's own text-reveal.
**CONTINUITY FROM PREVIOUS SCENE:** PIN_TIME (21.2s) lands right as beat 4 ("...stoppage time.") resolves, so the pulse+badge on the stop-badge (20.2s) has already settled before the glide begins. The Given card, already open since 6.0s, doesn't re-enter — it simply continues, so the pin reads as the illustration/question settling around a card that was already there.

---

### SCENE 3 — Step 1: Running Time
**TIMESTAMP:** GIVEN_MORPH = 27.5s → STEP1_TIME (card enter) = 29.0s → exits at STEP1_MORPH = 51.7s
**VOICEOVER:** (27.80–51.68) "We know the formula. Time is equal to distance divided by speed. Putting the values, running time is equal to three hundred divided by seventy-five. This gives us four hours. Now that we know the actual running time, finding the stoppage time becomes very easy. The total journey took five hours, but the train was actually moving for only four hours. So the remaining time must be the stoppage time."
**VISUAL OBJECTIVE:** Apply Time = Distance/Speed to find the running time (4 hours), then bridge into why the remaining time is the stoppage time.
**SCREEN LAYOUT:** Given card morphs into stack (badge "G", left column); Step 1 SolutionCard opens center.
**ON-SCREEN ELEMENTS:**
- `#stack-given .stack-card` (collapsed recap, plain fade-in via morph).
- `#card-step1 .solution-card` (width 720px) — chip "Step 1", math (4 lines):
  - word-level: "Time = <span class="hi">Distance / Speed</span>"
  - word-level: "Running Time = <span class="hi">300</span> / <span class="hi">75</span>"
  - word-level, `.ans`: "= <span class="ans">4 hours</span>"
  - line-level bridge: "Total = 5 hr, Moving = 4 hr → remaining is stoppage"
**ANIMATION DETAILS:**
- 27.5s: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 27.5)`.
- 29.0s: `apt.cardEnter(tl, "#card-step1 .solution-card", 29.0)`.
- 29.0s: `apt.textReveal(tl, "#card-step1 .math")`:
  - "Time"(29.179) "="(29.639) "Distance"(30.079, hi) "/"(31.079) "Speed"(31.819, hi) — from "time is equal to distance divided by speed"
  - "Running"(34.119) "Time"(34.479) "="(34.88) "300"(35.34, hi) "/"(36.04) "75"(36.719, hi) — from "running time is equal to three hundred divided by seventy-five"
  - "="(38.0) "4"(38.639, ans) "hours"(38.84, ans) — from "this gives us four hours"
  - "Total = 5 hr, Moving = 4 hr → remaining is stoppage" — data-t 39.639 (line-level bridge, matches "now that we know the actual running time...")
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** 0.8s morph in, then straight into Scene 4.
**EDUCATIONAL PURPOSE:** Establishes the running time (4 hours) via the core formula, then reasons — before any subtraction appears — why "total minus running" is the right next move.
**VISUAL HIERARCHY:** Formula line → substitution line → answer (`.ans`, primary blue) → bridging line.
**ATTENTION MANAGEMENT:** Formula, then substitution, then result, then the bridge — mirrors the narration's own build-up. The bridge line holds for the long 39.64–51.68s stretch so the frame never feels static that long without a fresh reveal.
**MOTION NOTES:** No pulses beyond textReveal — this is the longest card (22.7s) since it carries both the running-time derivation and the reasoning bridge into Step 2.
**CONTINUITY FROM PREVIOUS SCENE:** Given card's box is still completing its 0.8s morph into the stack (badge "G", landing at 27.5+0.8=28.3) as Step 1's card starts fading in at 29.0s — a 0.7s breathing gap keeps the handoff clean while the narration ("We know the formula...") is already underway.

---

### SCENE 4 — Step 2: Stoppage Time
**TIMESTAMP:** STEP1_MORPH = 51.7s → STEP2_TIME (card enter) = 52.6s → exits at RECENTER_TIME = 61.4s
**VOICEOVER:** (52.16–61.28) "Stoppage time is equal to total time minus running time. That is equal to five minus four. This gives us one hour. So the total stoppage time is one hour."
**VISUAL OBJECTIVE:** Apply Stoppage Time = Total Time − Running Time to arrive at the final answer (1 hour).
**SCREEN LAYOUT:** Step 1 morphs into stack (badge "1"), connector line G→1 grows; Step 2 card opens center.
**ON-SCREEN ELEMENTS:**
- `#stack-step1 .stack-card`.
- `#line-g-1` connector (grown via `apt.setStackLine` + `apt.stackLineGrow`).
- `#card-step2 .solution-card` (width 640px) — chip "Step 2", math (3 lines):
  - line-level: "Stoppage Time = <span class="hi">Total Time − Running Time</span>"
  - word-level: "= <span class="hi">5</span> − <span class="hi">4</span>"
  - word-level, `.ans`: "= <span class="ans">1 hour</span>"
**ANIMATION DETAILS:**
- 51.7s: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 51.7)`.
- 51.7s: `apt.setStackLine("#line-g-1", "#stack-given .step-circle", "#stack-step1 .step-circle")` (called once pre-timeline) + `apt.stackLineGrow(tl, "#line-g-1", 51.7)`.
- 52.6s: `apt.cardEnter(tl, "#card-step2 .solution-card", 52.6)`.
- 52.6s: `apt.textReveal(tl, "#card-step2 .math")`:
  - "Stoppage Time = Total Time − Running Time" — data-t 52.6 (line-level, matches "stoppage time is equal to total time minus running time")
  - "="(55.259) "5"(55.959, hi) "−"(56.239) "4"(56.599, hi) — from "that is equal to five minus four"
  - "="(57.319) "1"(58.02, ans) "hour"(58.18, ans) — from "this gives us one hour"
- (No `apt.emphasize`/`apt.resultReveal` layered on `.ans` — textReveal is the sole reveal, per design.md.)
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** 0.8s morph in, then straight into Scene 5's morph + options reveal.
**EDUCATIONAL PURPOSE:** Closes the algebra loop — shows the subtraction and its result together so the viewer can verify the arithmetic themselves.
**VISUAL HIERARCHY:** Formula line → substitution line → final answer (`.ans`, primary blue, largest emphasis of the three).
**ATTENTION MANAGEMENT:** The `.ans` span is the last thing revealed in the card and the last thing revealed before the options grid — the natural handoff to Scene 5.
**MOTION NOTES:** Tight pacing after the long Step 1 card — narration for Step 2 is only 9.1s, mirrors q22's shortest-card pattern for a final arithmetic step.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1's box is still completing its morph into `--primary-light` (landing 51.7+0.8=52.5) as Step 2's card begins fading in at 52.6s — the G→1 connector line grows in the same beat Step 1 lands. Narration for Step 2 ("Stoppage time is equal to...") has already started at 52.16, a beat ahead of the card — mirrors the tight audio gap itself (Step 1's bridge narration ends at 51.68, Step 2's begins at 52.16, only 0.48s apart).

---

### SCENE 5 — Options Reveal
**TIMESTAMP:** RECENTER_TIME = 61.4s, options fade-in = 62.4s, stagger = 63.0s, correct pulse = 63.3s, END_FADE_TIME = 64.3s
**VOICEOVER:** (61.62–63.92) "Hence, the correct answer is option C."
**VISUAL OBJECTIVE:** Present all four options and confirm the derived answer (1 hour) matches option C.
**SCREEN LAYOUT:** Illustration drops out; pinned question + stack column recenter against the now-visible options grid (2×2) on the right.
**ON-SCREEN ELEMENTS:**
- `#illus-pinned` fades out.
- `#q-pinned` recenters (`xShift:160, yShift:180`).
- `#stack-step2 .stack-card` (badge "2") + `#line-1-2` connector.
- `#options-reveal .options-grid`: A) 0.75 hours, B) 1.25 hours, C) 1 hours (`.correct`), D) 0.5 hours.
**ANIMATION DETAILS:**
- 61.4s: `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 61.4)`.
- 61.4s: `apt.setStackLine("#line-1-2", "#stack-step1 .step-circle", "#stack-step2 .step-circle")` + `apt.stackLineGrow(tl, "#line-1-2", 61.4)`.
- 61.4s: `apt.fadeOut(tl, "#illus-pinned", 61.4)` + `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 61.4)`.
- 62.4s: `apt.fadeIn(tl, "#options-reveal", 62.4)`.
- 63.0s: `apt.optionsStagger(tl, ".opt-btn", 63.0)`.
- 63.3s: `apt.correctPulse(tl, ".opt-btn.correct", 63.3)` — timed to "option" in "the correct answer is option C" (63.32–63.64).
- 64.3s (END_FADE_TIME): `apt.fadeOut(tl, "#root > div", 64.3, 1.0)` — everything fades together, ~0.4s after the voiceover ends (63.919s).
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Final morph + recenter + stagger reveal, then unified end fade.
**EDUCATIONAL PURPOSE:** Confirms the derived answer against the actual answer choices — closes the loop between algebra and the MCQ format.
**VISUAL HIERARCHY:** Options grid (equal weight A–D) → correct pulse draws the eye to C last.
**ATTENTION MANAGEMENT:** Stagger (0.12s per option) keeps the reveal readable; the pulse is the single final attention beat, timed to land as "option C" is spoken.
**MOTION NOTES:** Stack column (G-1-2 with 2 connectors) stays fully visible and unfaded throughout.
**CONTINUITY FROM PREVIOUS SCENE:** Step 2's card is still mid-morph into the stack (completing at 61.4+0.8=62.2s) as the options grid begins its own fade-in at 62.4s — the final stack circle and the options grid arrive as one continuous beat, while "Hence, the correct answer is option C" plays over the reveal.

---

## PART 3: Asset List Required

- `illustration/train-faster.svg` (already provided, user-supplied) — used as-is, no recoloring (its own fills already match `--primary` `#6373db` / blue-grey neighbors `#8b98e8`, `#94989b`, `#3e4347`).
- No other new SVGs — the stop-badge (pause-bar icon), unknown-badge, and info labels are all CSS/text, styled via a small per-question `<style>` block (design.md §7 — not shared components).
- Shared: `serial-num-badge.svg`, `logo.png` (from `_template/assets/`, copied per 5B).

## PART 4: Animation Complexity Notes

- Single illustration object (train) — uses the template's `justify-content:center` single-icon pattern for both the full (Phase 1) and pinned (Phase 2+) illustration, mirroring q22's bus pattern (a single moving object, stoppage represented as a badge, not a second vehicle).
- The Given card breaks from the usual "appears only after the pin" pattern: it opens at 6.0s, directly beneath the illustration, and builds in alongside it — each of its three given-value lines reveals the moment that value is actually spoken (8.5s/10.3s/13.6s), rather than being recapped all at once post-pin. Only its 4th line (the live "find the running time" goal) still waits for its own real narration timestamp (22.379s+), which happens to land just after the pin. This keeps illustration and Given card as one continuous build instead of two sequential beats.
- Only two solution steps (Given → Step 1 → Step 2), the leanest structure built so far for this topic — this problem is a direct two-formula computation (Time = Distance/Speed, then Stoppage = Total − Running) with no algebraic unknown to solve for, unlike q22's four-step "let x = stoppage minutes" derivation.
- Step 1 carries a long bridging line (39.64s–51.68s window) because the narration spends real time reasoning about *why* "total − running = stoppage" before the arithmetic — this bridge is essential context, not filler, so it's held on Step 1's card rather than compressed away.
- No `apt.emphasize`/`apt.resultReveal` layered on any `.ans` span inside solution cards — all number reveals go through `apt.textReveal`'s `.rv` mechanism only, per the single-reveal rule. `apt.emphasize` is used twice in Phase 1: once on the "75 km/hr" figure (14.9s) and once on the stop-badge (20.2s) — neither on solution-card text.
- No `apt.ambientLoop` window is long enough to be load-bearing here (the longest pinned-illustration stretch is ~30s vs q22's ~62s), but the pinned train icon still gets a modest ambient bob (21.5s–61.4s) so it doesn't sit dead-static through the two-card stretch.

## PART 5: Master Timeline Overview

```
0.3    Question card hero-enters (lowered)
3.6    Question card + badge rise to rest
6.0    GIVEN_TIME — Given card enters (below illustration, stays open through the pin)
6.5    Train icon fades+scales in
8.5    Given card line 1 reveals: "Total Distance = 300 km"
8.6    "300 km in 5 hr" label fades up
10.3   Given card line 2 reveals: "Total Time = 5 hr"
11.6   Stop-badge pops in
13.6   Given card line 3 reveals: "Running Speed = 75 km/hr"
13.7   "Running: 75 km/hr" label fades up
14.9   "75 km/hr" figure emphasized (pulse)
20.2   Stop-badge pulses (emphasize) + "?" unknown-badge fades in
21.2   PIN_TIME — pinFlow (question + illustration → pinned); Given card stays put
22.379 Given card line 4 reveals (live, word-synced): "Let's find the actual running time"
21.5   Ambient loop starts on pinned train icon (through 61.4)
27.5   Given → stack (morph)
29.0   Step 1 card enters + text-reveal (4 lines incl. bridge)
51.7   Step 1 → stack (morph) + line G-1 grows
52.6   Step 2 card enters + text-reveal (3 lines)
61.4   Step 2 → stack (morph) + line 1-2 grows + RECENTER_TIME (illustration fades out, question recenters)
62.4   Options grid fades in
63.0   Options stagger in
63.3   Correct option (C) pulses
64.3   END_FADE_TIME — everything fades out together
65.3   End
```
