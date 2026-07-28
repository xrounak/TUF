# Storyboard — Speed-Time-Distance Q16 (Two Cyclists, Growing Gap)

Question: Two cyclists ride in the same direction. After 3 hours, the faster cyclist is 27 km ahead. If the slower cyclist's speed is 18 km/hr, find the faster cyclist's speed.
Options: A) 25 km/hr  B) 30 km/hr  C) 27 km/hr ✅  D) 24 km/hr
Voiceover duration: 86.259s

Sibling reference: `speed time and distance/q15` is the closest precedent — same topic family, same `cyclist.svg` asset, same "two cyclists, same direction" setup. Q15's gap **shrinks** (overtake); Q16's gap **grows** (falls behind → pulls ahead), so the illustration demo is the mirror image: cyclists start together and a live gap opens to 27 km, instead of starting apart and closing to 0. Animation helpers, stack pattern, and text-reveal conventions are inherited directly from q15/template.html.

---

## PART 1 — Narration Beat Analysis

| # | Time | Narration | Purpose | Attention focus | Visual objective |
|---|------|-----------|---------|------------------|-------------------|
| 1 | 0.1–3.16 | "Welcome back again... one more problem." | Cold open | Center screen | Question card rises in |
| 2 | 3.68–11.58 | States two cyclists, same direction, slower = 18 km/hr | Establish setup | Illustration | Two cyclists appear together at a shared start line; "18 km/hr" label pops under the slower rider |
| 3 | 12.16–16.28 | "After three hours, the faster cyclist is 27 km ahead." | Reveal the punch-line fact | Illustration (key beat) | Both riders advance; the faster one pulls ahead; a live gap bracket grows from 0 to "27 km" exactly as the words land |
| 4 | 16.86–23.9 | Poses the question; "let the speed of the faster cyclist be x km/hr" | Name the unknown | Faster rider's label | "?" appears then crossfades into "x km/hr" under the faster rider |
| 5 | 24.52–28.42 | "First, let us find how much distance each cyclist covers in three hours." | Transition line into Step 1 | Pinned layout + Given card | Pin the layout; Given card recaps the four knowns |
| 6 | 28.94–46.64 | Distance = Speed × Time; slower covers 54 km; faster covers 3x km | First computation | Step 1 card | Formula, then both distances land in sequence |
| 7 | 47.12–73.6 | Restates the 27 km-ahead condition; sets up faster − slower = 27 → 3x − 54 = 27 | Build the equation | Step 2 card | Condition → equation, word-synced to the actual numbers spoken |
| 8 | 73.92–83.66 | "After solving this, x = 27 km/hr" | Solve | Step 3 card | Algebra resolves to the answer |
| 9 | 83.7–86.26 | "...correct answer is option C." | Reveal | Options grid | 2×2 grid, C pulses green |

---

## PART 2 — Scene-by-Scene Storyboard

### Scene 1 — Question Reveal + Cyclists Start Together (0–13.42s)
**Timestamp:** 0.3–13.42 (RISE_TIME 3.16)
**Voiceover:** "So welcome back again, time for one more problem. Now in this problem, we are given that two cyclists are moving in the same direction. The speed of the slower cyclist is eighteen kilometer per hour."
**Visual objective:** Establish the question, then the two-cyclist illustration with both riders starting adjacent (not yet separated).
**Screen layout:** `#q-full-card` centered top (via `apt.heroEnterLowered`), `#serial-num` badge top-left, `#illustration` centered mid-screen.
**On-screen elements:** QuestionCard (full), SerialNum "Q", illustration group: `wrap-slow` (gray cyclist, left) and `wrap-fast` (blue cyclist, just ahead of slow at start — both essentially side by side at the "start" marker), a vertical dashed "start" line behind both.
**Animation details:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.16)` — card starts lowered, rises at 3.16s (end of "one more problem."). Badge parallel tween mirrors the same rise. Illustration group fades/scales in at 3.4s (both riders positioned close together near the start line, ~150px apart — just enough to read as two distinct riders, not yet "a gap"). "18 km/hr" label fades in under the slower (gray) rider at 10.3s (word "eighteen").
**Camera movement:** None.
**Transitions:** n/a (opening scene).
**Educational purpose:** Present the two riders and the one known speed before anything else.
**Visual hierarchy:** Question text > illustration > labels.
**Attention management:** Single label pop-in (18 km/hr) lands exactly on its spoken word; no other motion competes for attention yet.
**Motion notes:** Riders are static (no pedaling/movement yet) through this scene — motion is reserved for Scene 2's key beat.
**Continuity from previous scene:** n/a — cold open.

### Scene 2 — The Gap Opens (12.16–23.9s)
**Timestamp:** 12.16–23.9
**Voiceover:** "After three hours, the faster cyclist is twenty-seven kilometer ahead. The question is asking us to find the speed of the faster cyclist. Now let the speed of the faster cyclist be x kilometer per hour."
**Visual objective:** The single most important visual beat — show the faster cyclist visibly pulling ahead while a live, exact gap measurement grows to "27 km", landing right as the words "kilometer ahead" finish. Then name the unknown.
**Screen layout:** Same illustration group, now animating in place.
**On-screen elements:** wrap-slow, wrap-fast, a live gap bracket + growing "gap: N km" label between them, a small "3 hr" chip that pops in above the scene.
**Animation details:** At 12.159s ("After") a small "3 hr" timer chip fades in above the illustration. From 13.42s to 16.279s (exactly the span of "the faster cyclist is twenty-seven kilometer ahead"), a numeric proxy (`demoState.gapKm`, driven `onUpdate`) animates 0 → 27 while `demoState.slowLeft` also drifts forward slightly (both riders visibly advance, not just the gap number) — the live gap line/label grow from the shared start line to a full "gap: 27 km" reading, landing exactly on "ahead." at 16.279s. At 16.86s the faster rider's label shows a pulsing "?" (unknown-speed placeholder). At 22.799s (word "x") the "?" crossfades into "x km/hr" via two separate DOM elements swapping opacity (no callback — pure property tweens, per `animations.js`'s seek-safety rule).
**Camera movement:** None.
**Transitions:** n/a (continues from Scene 1, same illustration objects).
**Educational purpose:** Make the abstract "27 km ahead after 3 hours" fact concrete and visible before any algebra begins; then explicitly flag the unknown.
**Visual hierarchy:** The growing gap bracket is the hero motion of the whole video — nothing else moves at the same time.
**Attention management:** Gap-growth animation is timed to land exactly on the spoken number; the "?"→"x" swap is a secondary, calmer beat once the number has landed.
**Motion notes:** This is a diagram-precision animation (gapKm × pxPerKm), not a simulated race — deliberate and readable, matching q15's Scene 2 technique but inverted (opening instead of closing).
**Continuity from previous scene:** Same two riders from Scene 1, now animating in place — no new entrance.

### Scene 3 — Pin + Given Recap (23.95–28.5s)
**Timestamp:** PIN_TIME 23.95, GIVEN_TIME 24.9
**Voiceover:** "First, let us find how much distance each cyclist covers in three hours."
**Visual objective:** Collapse Phase 1 into the pinned layout; recap the four known values before computing.
**Screen layout:** `#q-pinned` top, `#illus-pinned` (small faster-cyclist icon + "Gap = 27 km" recap line, centered) below it, `#card-given` center.
**On-screen elements:** Pinned question, pinned illustration recap, Given SolutionCard.
**Animation details:** `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 23.95)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 23.95)` — real glide, not a swap. `apt.fadeOut(tl, "#serial-num", 23.95, 0.5)`. `apt.cardEnter(tl, "#card-given .solution-card", 24.9)` then `apt.textReveal(tl, "#card-given .math")`. `apt.ambientLoop(tl, "#illus-pinned-icon", 25.4, 82.9)` on the small pinned icon (very long stretch ahead — steps 1 through 3 all happen under this loop).
**Camera movement:** None.
**Transitions:** pinFlow glide is the transition (0.8s, power2.inOut).
**Educational purpose:** Reset the frame around the four known numbers (Slower, Faster=x, Time, Gap) before solving.
**Visual hierarchy:** Given card center-stage; pinned elements recede to context.
**Attention management:** Given card's 4 lines fade in as a calm recap (line-level reveals, no new information) while "First, let us find..." plays as a bridging line.
**Motion notes:** Given card box entrance is a standard `cardEnter`; no extra flourish.
**Continuity from previous scene:** The pinned question/illustration are literally the Scene 1–2 elements gliding into their smaller slot. Serial-num badge fades out in step with the glide.

### Scene 4 — Step 1: Distance Formula → Both Distances (28.5–46.7s)
**Timestamp:** morph-to-stack at 28.5, `card-step1` enters 29.35
**Voiceover:** "We know the formula, distance is equal to speed into time. The slower cyclist covers eighteen into three, which is fifty-four kilometers in three hours. The faster cyclist covers x into three, which is three x kilometers in three hours."
**Visual objective:** Apply D = S × T to both riders — lands the two distance expressions needed for the equation.
**Screen layout:** Given card morphs into `#stack-given` (left column, circle "G"); Step 1 card takes over center stage.
**On-screen elements:** stack-given card, `#card-step1` (3 lines: "Distance = Speed × Time", "Slower: 18 × 3 = 54 km", "Faster: x × 3 = 3x km").
**Animation details:** `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 28.5)` (0.8s). `apt.cardEnter(tl, "#card-step1 .solution-card", 29.35)` + `apt.textReveal(tl, "#card-step1 .math")` with: line 1 line-level @ 29.35 (formula, paraphrased); line 2 word-level @ 33.34 ("Slower"), 35.18 ("18"), 35.58 ("×"), 35.86 ("3"), 36.58 ("="), 36.92 ("54 km", hi); line 3 word-level @ 40.0 ("Faster"), 42.04 ("x"), 42.58 ("× 3"), 43.56 ("="), 43.78 ("3x km", hi/ans).
**Camera movement:** None.
**Transitions:** Standard 0.8s morph.
**Educational purpose:** Ground the algebra in the concrete D=S×T formula both riders share.
**Visual hierarchy:** Step 1 card center; Given stack card quietly present in the left column (first entry).
**Attention management:** Each distance expression lands exactly on its spoken numbers — "54 km" on "fifty-four", "3x km" on "three x kilometers".
**Motion notes:** No fraction spans needed here (plain multiplication).
**Continuity from previous scene:** Given card visibly slides/shrinks into the stack — same card, not a cut.

### Scene 5 — Step 2: Build the Equation (46.7–73.9s)
**Timestamp:** morph-to-stack at 46.7, `card-step2` enters 47.6
**Voiceover:** "Now let us understand the given condition. After three hours, the faster cyclist is twenty-seven kilometer ahead. This simply means that the faster cyclist has covered twenty-seven kilometer more than the slower cyclist. So distance covered by the faster cyclist minus distance covered by the slower cyclist is equal to twenty-seven. That gives us three x minus fifty-four is equal to twenty-seven."
**Visual objective:** Translate the "27 km ahead" condition into a solvable equation.
**Screen layout:** Step 1 morphs into `#stack-step1` (circle "1"), connector line G→1 grows in. Step 2 card center.
**On-screen elements:** stack-given, stack-step1, `#card-step2` (3 lines: "27 km ahead → faster covers 27 km more", "Faster distance − Slower distance = 27", "3x − 54 = 27").
**Animation details:** `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 46.7)`; `apt.stackLineGrow(tl, "#line-g-1", 46.7)`. `apt.cardEnter(tl, "#card-step2 .solution-card", 47.6)` + `apt.textReveal` with: line 1 line-level @ 51.08 (restated condition); line 2 line-level @ 61.64 (equation setup, "So distance covered..."); line 3 word-level @ 70.58 ("3"), 70.9 ("x"), 71.02 ("−"), 71.3 ("54"), 72.08 ("="), 72.44 ("27", hi/ans).
**Camera movement:** None.
**Transitions:** Standard 0.8s morph; connector line grows in same beat.
**Educational purpose:** Show the translation from a plain-English condition into algebra, step by step.
**Visual hierarchy:** Step 2 card center; stack column now shows G→1 connected.
**Attention management:** The final "3x − 54 = 27" line lands word-by-word exactly on the spoken numbers, so the equation assembles in sync with the voice.
**Motion notes:** No illustration motion here — pure formalization, text only (matches q15's Step 2 pattern).
**Continuity from previous scene:** Step 1's card is the one morphing — same object continuing its journey into the stack.

### Scene 6 — Step 3: Solve → 27 km/hr (73.9–82.9s)
**Timestamp:** morph-to-stack at 73.6, `card-step3` enters 74.5
**Voiceover:** "After solving this, x is equal to twenty-seven kilometer per hour, so the speed of the faster cyclist is twenty-seven kilometer per hour."
**Visual objective:** Resolve the equation to the final answer.
**Screen layout:** Step 2 morphs into `#stack-step2` (circle "2"), connector 1→2 grows. Step 3 card center.
**On-screen elements:** stack-given/step1/step2, `#card-step3` (3 lines: "3x − 54 = 27" (recap), "3x = 27 + 54 = 81", "x = 81 ÷ 3 = 27 km/hr").
**Animation details:** `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 73.6)`; `apt.stackLineGrow(tl, "#line-1-2", 73.6)`. `apt.cardEnter(tl, "#card-step3 .solution-card", 74.5)` + `apt.textReveal` with: line 1 line-level @ 74.5 (recap of the equation just built); line 2 line-level @ 74.76 (right as "solving this," finishes — the implied algebra bridge from 3x−54=27 to 3x=81, not itself spoken verbatim but the natural next line of work); line 3 word-level @ 75.02 ("x"), 75.78 ("="), 76.38 ("27 km/hr", ans).
**Camera movement:** None.
**Transitions:** Standard 0.8s morph.
**Educational purpose:** Show the full algebraic resolution so the answer isn't a black box.
**Visual hierarchy:** Step 3 card center, "27 km/hr" in `.ans` primary blue.
**Attention management:** The answer line lands exactly on "x is equal to twenty-seven kilometer per hour" (76.38s).
**Motion notes:** No fraction spans needed (plain division stated as "81 ÷ 3").
**Continuity from previous scene:** Step 2's card is the one morphing into the stack.

### Scene 7 — Options Reveal (82.9–86.9s)
**Timestamp:** RECENTER_TIME 82.9, options fade-in 83.7, stagger 84.1, correct pulse 85.6
**Voiceover:** "...so the speed of the faster cyclist is twenty-seven kilometer per hour. Hence, the correct answer is option C."
**Visual objective:** Confirm the answer against the 2×2 options grid.
**Screen layout:** Step 3 morphs into `#stack-step3` (circle "3"), connector 2→3 grows. `#illus-pinned` fades out, `#q-pinned` recenters via `apt.recenterForOptions`. `#options-reveal` fades in on `.pinned-col`.
**On-screen elements:** Full stack column (G/1/2/3, all connector lines visible), pinned question, 2×2 options grid, C highlighted green.
**Animation details:** `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 82.9)`; `apt.stackLineGrow(tl, "#line-2-3", 82.9)`. `apt.fadeOut(tl, "#illus-pinned", 82.9)`. `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 82.9)`. `apt.fadeIn(tl, "#options-reveal", 83.7)`. `apt.optionsStagger(tl, ".opt-btn", 84.1)`. `apt.correctPulse(tl, ".opt-btn.correct", 85.6)`. End fade over everything at 86.9 (1.2s).
**Camera movement:** None.
**Transitions:** Standard morph + recenter combo per template pattern.
**Educational purpose:** Final confirmation, ties the derived "27 km/hr" to option C.
**Visual hierarchy:** Options grid takes center-right stage; stack column (now complete) stays visible on the left as the full solution trail.
**Attention management:** correctPulse on option C lands exactly on the spoken "option C."
**Motion notes:** No new illustration; pure UI reveal.
**Continuity from previous scene:** Step 3 card is the one morphing into its stack slot — same object, last in the sequence, completing the G→1→2→3 trail.

---

## PART 3 — Asset List Required

- `illustration/cyclist.svg` (already present, same file as `q15/illustration/cyclist.svg` — colors already match palette, used as-is with no recoloring or reshaping).
- Shared template assets: `serial-num-badge.svg`, `logo.png` (copied from `_template/assets/`).
- No other new assets — gap bracket, "3 hr" chip, "?"/"x" labels are pure CSS/HTML, same technique as q15.

## PART 4 — Animation Complexity Notes

- Standard helpers only: `heroEnterLowered`, `pinFlow`, `cardEnter`, `textReveal`, `morphToStack`, `stackLineGrow`, `setStackLine`, `ambientLoop`, `recenterForOptions`, `fadeIn`, `fadeOut`, `optionsStagger`, `correctPulse`.
- One custom (per-question, non-`apt`) animation: the numeric-proxy `demoState`/`renderDemo()` pattern driving the live gap-opening bracket (0→27 km) and both riders' positions during 13.42–16.28s — same technique as q15's `renderDemo`, mirrored (gap grows instead of shrinks). The "?"→"x" label crossfade is also per-question, implemented as two overlapping elements with pure property-tween opacity swaps (no callbacks, per `animations.js`'s seek-safety rule).
- No new colors, fonts, or components introduced.

## PART 5 — Master Timeline Overview

```
0.3    q-full-card heroEnterLowered (rises @3.16)
0.8    serial-num pop (rises @3.16 in tandem)
3.4    illustration group fades in (riders together near start line)
10.3   "18 km/hr" label under slower rider
12.16  "3 hr" timer chip fades in
13.42  GAP-OPEN DEMO starts: gapKm 0→27, riders advance (ends 16.28 exactly on "ahead.")
16.86  "?" pulses under faster rider
22.8   "?" crossfades to "x km/hr"
23.95  PIN_TIME — pinFlow question + illustration; serial-num fades out
24.9   GIVEN_TIME — card-given enters + textReveal (4 lines)
25.4   ambientLoop starts on pinned icon (runs to 82.9)
28.5   Given → stack-given morph
29.35  card-step1 enters (formula + both distances) + textReveal (29.35/33.34/35.18/35.58/35.86/36.58/36.92/40.0/42.04/42.58/43.56/43.78)
46.7   Step1 → stack-step1 morph + line-g-1 grows
47.6   card-step2 enters (equation setup) + textReveal (51.08/61.64/70.58/70.9/71.02/71.3/72.08/72.44)
73.6   Step2 → stack-step2 morph + line-1-2 grows
74.5   card-step3 enters (solve) + textReveal (74.5/74.76/75.02/75.78/76.38)
82.9   Step3 → stack-step3 morph + line-2-3 grows; illus-pinned fades; q-pinned recenters
83.7   options-reveal fades in
84.1   optionsStagger
85.6   correctPulse on option C
86.9   END_FADE_TIME — everything fades (1.2s)
```

Total duration: ~88.1s (voiceover 86.26s + fade tail).
