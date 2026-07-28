# Storyboard — Speed, Time & Distance · Q39 (Circular Track, Same Direction)

**Question:** On a 720 m circular path, two runners start together in the same direction at 6 m/s and 4 m/s. After how many seconds will they next meet?
**Options:** A) 360 seconds (correct) B) 300 seconds C) 330 seconds D) 390 seconds
**Solution:** Gain per second = 6 − 4 = 2 m/s. To meet again (same direction), the faster runner must gain one full lap = 720 m. Unit rate: 1 m gain takes 0.5 sec, so 720 m takes 720 × 0.5 = 360 sec.
**Voiceover duration:** 83.679s
**Topic name:** "Speed, Time and Distance"

This is the first sibling on a genuinely circular track (q3/q11/q12 are all straight-line). No existing illustration pattern fits, so the illustration is bespoke per README §4D.1's "per-question custom CSS/JS for illustration content" allowance: an SVG light-grey ring (the 720 m path) with two dots — red (Runner A, 6 m/s) and blue (Runner B, 4 m/s, reusing `--primary`) — each trailing a colored "comet tail" arc that rotates with it, so the path each runner has just covered visibly stays colored behind them. Motion is a single continuous GSAP-driven rotation spanning the ENTIRE concept-teaching narration (25.92s–58.3s, ~32.4s): the dots rotate at a real 3:2 angular ratio (matching 6:4 m/s exactly), so blue completes exactly 2 laps while red completes exactly 3 laps in the same window — mathematically true to the problem, just time-compressed (same simplification `q37`/`q18` make explicitly for drive durations). Red visibly gains on blue throughout, and the two dots land back together, aligned, at the exact moment red has lapped blue once — the "meet from behind" payoff — timed to land on "...one complete round is seven hundred twenty meter" (58.3s). A live "Lead: 0 → 720 m" counter at the ring's center grows in lockstep (same `t` proxy driving the rotation), turning the abstract "faster gains 2m every second" into a number the viewer watches climb to exactly 720 — the number Step 1/Step 2 then formalize.

Colors: `--runner-red` (`#e2574a`) is a new, illustration-only accent — not in the design-system token list — introduced because the user explicitly asked for a red/blue dot pair and no existing token provides a second saturated hue. It is used ONLY on the track dots/tails/red legend swatch; every card, chip, button, and text element still uses only the standard tokens (`--primary`, `--success`, `--topic`, `--text`, `--bg`). Precedent: sibling illustration assets already carry their own out-of-token colors (`q35`'s boat SVG uses `#004dc8`/`#0079c8`, well outside the strict 6-token palette).

---

## PART 1: Narration Beat Analysis

| # | Time (s) | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|----------|-----------|----------------------|------------------|-------------------|
| 1 | 0.10–3.22 | "So welcome back again. Time for one more problem." | Cold open | Center screen | Question card hero rises into view |
| 2 | 3.78–9.24 | "Now in this problem, we are given that the length of the circular track is seven hundred twenty meter." | Establish the track | Illustration | Grey ring draws itself (12 o'clock → clockwise, full circle); "720 m" label settles at center |
| 3 | 9.88–12.54 | "The speed of the first runner is six meters per second." | Assign Runner A's speed | Red dot + legend | Both dots pop in together at the top (start point); red legend tag "6 m/s" fades in |
| 4 | 13.02–15.60 | "The speed of the second runner is four meters per second." | Assign Runner B's speed | Blue dot + legend | Blue legend tag "4 m/s" fades in |
| 5 | 16.16–18.86 | "Both runners start together and run in the same direction." | Establish shared start + direction | Both dots | "Start" label pulses once; small clockwise direction arrow fades in |
| 6 | 19.32–22.54 | "The question is asking us to find after how many seconds they will meet again." | Restate the ask | Question card | Hold — no new illustration elements |
| 7 | 23.00–25.52 | "Now, before solving, let us understand the idea first." | Bridge into the concept | Full frame | Hold, beat before motion begins |
| 8 | 25.92–40.80 | "Every second, the faster runner covers six meter, the slower runner covers four meter, so every second, the faster runner gets two meter farther ahead. Or you can also think of it like this. The faster runner gains two meters every second on the slower runner." | Teach the core concept: the gap grows by 2 m/s | Both dots, live motion | Continuous rotation begins (MOTION_START); red visibly pulls ahead of blue; "Lead" counter starts ticking up from 0 |
| 9 | 41.16–58.66 | "Now, they started from the same point, so how can the faster runner meet the slower runner again? He cannot meet him from the front. He has to come from behind. That will happen only when the faster runner gets one complete round ahead of the slower runner, and one complete round is seven hundred twenty meter." | Teach WHY the meeting condition is "gain one full lap" | Both dots converging | Rotation continues; red catches up to blue from behind exactly as "...seven hundred twenty meter" lands — dots realign at the top, pulse together (MEET_TIME = 58.3s); Lead counter reads 720 |
| 10 | 58.96–62.92 | "So the faster runner has to gain a total lead of seven hundred twenty meter. Got it?" | Confirm the key number | Lead counter | Counter locks on "720 m = 1 full lap"; hold |
| 11 | 63.32–64.56 | "Perfect. Now let us solve it." | Bridge into solving | Full frame → pinned | PIN — question + illustration glide to pinned slots; Given card opens (recap, already-known facts) |
| 12 | 65.00–66.80 | "The gain every second is two meters," | Step 1: gain rate | Step 1 card | "Gain per second = 6 − 4 = 2 m/s" resolves |
| 13 | 66.88–77.68 | "so to gain one meter it takes zero point five seconds, and to gain seven hundred twenty it takes seven hundred twenty into zero point five. After simplifying this, we get three hundred sixty seconds." | Step 2: unit-rate method → answer | Step 2 card | "1 m → 0.5 sec", then "720 × 0.5 = 360 sec" resolves |
| 14 | 77.72–83.68 | "So the two runners will meet again after three hundred sixty seconds. Hence, the correct answer is option A." | Final answer + reveal | Options grid | Options grid fades in, A pulses green |

---

## PART 2: Scene-by-Scene Storyboard

Design constraints per README §4D.1: only `--primary #6373db`, `--primary-light #e2e5ff`, `--success #4eb85f`, `--topic #949494`, `--text #000000`, `--bg #FFFFFF` on every card/chip/button/text element; only `QuestionCard`/`SerialNum`/`SolutionCard`/`SolutionStackCard`/`solutionChip`/`StepCircle`/`StackLine`/options-grid/`logo`/`topic-name`/`bottomStrip`; only `animations.js` helpers for all standard transitions. The illustration itself is the one bespoke element (per the per-question-illustration allowance), using one new illustration-only color (`--runner-red`).

### SCENE 1 — Hero Question Open
**TIMESTAMP:** 0.0–3.3s
**VOICEOVER:** "So welcome back again. Time for one more problem."
**VISUAL OBJECTIVE:** Establish the full question before any illustration.
**SCREEN LAYOUT:** `#q-full-card` centered, `apt.heroEnterLowered` (offsetY 180).
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.3)`; serial badge mirrors the same lowered→rise motion.
**CONTINUITY:** N/A — opening scene.

### SCENE 2 — The Track Draws Itself
**TIMESTAMP:** 3.3–9.24s
**VOICEOVER:** "Now in this problem, we are given that the length of the circular track is seven hundred twenty meter."
**VISUAL OBJECTIVE:** Introduce the 720 m circular path as a literal drawn ring, not a static image.
**SCREEN LAYOUT:** `#illustration` (560×560, centered below the question) holds an SVG ring `#track-ring` (r=220, light grey, `stroke-dasharray`/`stroke-dashoffset` = `getTotalLength()`, rotated -90° so the draw starts at 12 o'clock).
**ANIMATION DETAILS:** `tl.fromTo("#track-ring", {strokeDashoffset: LEN}, {strokeDashoffset:0, duration:3.0, ease:"power2.out"}, 4.0)` — lands at 7.0s, just before "seven hundred twenty" is spoken. `#center-label-static` ("720 m") fades in at 7.96 (word "seven").
**EDUCATIONAL PURPOSE:** The ring being drawn IS the "circular track" — no separate icon needed.
**CONTINUITY:** Illustration container is empty until this scene; the ring is the first element to exist inside it.

### SCENE 3 — Both Runners Appear Together
**TIMESTAMP:** 9.24–15.60s
**VOICEOVER:** "The speed of the first runner is six meters per second. The speed of the second runner is four meters per second."
**VISUAL OBJECTIVE:** Both dots start at the SAME point (top of the ring) — visually pre-establishing "start together" before it's even said.
**SCREEN LAYOUT:** `#dot-red` and `#dot-blue` both sit at (280,60) in the SVG's local coordinates (12 o'clock on the r=220 ring) inside their own `<g>` (`#runner-red-group` / `#runner-blue-group`, each also holding that runner's comet-tail `<path>`, hidden until motion starts).
**ANIMATION DETAILS:** `tl.fromTo("#dot-red, #dot-blue", {scale:0, opacity:0}, {scale:1, opacity:1, duration:0.5, ease:"back.out(1.4)"}, 9.24)`. `#tag-red` ("● Runner A · 6 m/s", red swatch) fades in at 11.38 (word "six"). `#tag-blue` ("● Runner B · 4 m/s", blue swatch) fades in at 14.599 (word "four"). Legend tags are static HTML labels beside the ring — not attached to the rotating dots, so they stay upright.
**EDUCATIONAL PURPOSE:** Ties each color permanently to a runner + speed before any motion, so the later race reads instantly.
**CONTINUITY:** The ring from Scene 2 is already fully drawn and static underneath.

### SCENE 4 — Same Start, Same Direction
**TIMESTAMP:** 16.16–18.86s
**VOICEOVER:** "Both runners start together and run in the same direction."
**VISUAL OBJECTIVE:** Confirm the shared start point and the (clockwise) direction before motion begins.
**SCREEN LAYOUT:** Same ring, same two static dots at top.
**ANIMATION DETAILS:** `#start-label` ("Start", small grey tag above the dots) fades in at 16.16. A small clockwise arrow icon `#dir-arrow` (curved arrow, CSS/SVG, `--topic` grey) fades in beside it at 17.62 (word "run"), then both dots get one synchronized soft pulse (`scale 1→1.05→1`, yoyo) at 18.36 ("same direction").
**EDUCATIONAL PURPOSE:** Plants the "same point, same direction" fact that Scene 9's "why they must meet from behind" argument depends on.
**CONTINUITY:** Direct hold of Scene 3's state, two new small cues added.

### SCENE 5 — Question Restated / Concept Bridge
**TIMESTAMP:** 19.32–25.52s
**VOICEOVER:** "The question is asking us to find after how many seconds they will meet again. Now, before solving, let us understand the idea first."
**VISUAL OBJECTIVE:** Deliberate stillness — let the fully-built, static illustration sit under the restated question and the "let's understand the idea" bridge line.
**SCREEN LAYOUT:** Unchanged.
**ANIMATION DETAILS:** None — intentional hold.
**EDUCATIONAL PURPOSE:** Gives the viewer a beat to absorb the setup before the payoff motion sequence launches.
**CONTINUITY:** Direct hold of Scene 4's final state.

### SCENE 6 — The Race: Continuous Gain, Live Lead Counter ★ key visual beat
**TIMESTAMP:** 25.92–58.30s (MOTION_START=25.92, MEET_TIME=58.3, duration D=32.38s)
**VOICEOVER:** "Every second, the faster runner covers six meter, the slower runner covers four meter, so every second, the faster runner gets two meter farther ahead. Or you can also think of it like this. The faster runner gains two meters every second on the slower runner. Now, they started from the same point, so how can the faster runner meet the slower runner again? He cannot meet him from the front. He has to come from behind. That will happen only when the faster runner gets one complete round ahead of the slower runner, and one complete round is seven hundred twenty meter."
**VISUAL OBJECTIVE:** One continuous, physically-honest motion sequence that IS the concept: red gains on blue in real time, and the exact moment the gap reaches 720 m (one full lap) is the moment red visibly catches blue from behind.
**SCREEN LAYOUT:** Both `<g>` groups rotate around the ring's true center (280,280) via `setAttribute('transform', 'rotate(deg 280 280)')` (per the SVG-rotation-must-use-explicit-center rule — CSS `transform-origin` on a `<g>` containing an off-center arc would rotate around the wrong point). `#center-label-static` swaps to `#center-label-live` (a "Lead: N m" counter) at MOTION_START.
**ANIMATION DETAILS:** A single proxy tween drives everything: `tl.to({t:0}, {t:1, duration:32.38, ease:"none", onUpdate: () => { redGroup.setAttribute('transform', 'rotate('+(t*1080)+' 280 280)'); blueGroup.setAttribute('transform', 'rotate('+(t*720)+' 280 280)'); leadCounterEl.textContent = Math.round(t*720); } }, 25.92)`. Blue completes exactly 2 full laps (720°) and red completes exactly 3 (1080°) over the SAME 32.38s — a genuine 3:2 angular ratio, matching 6:4 m/s exactly (just time-compressed, per README's standard duration-compression allowance). `#tail-red`/`#tail-blue` (35–45° comet-tail arcs, same `<g>`, so they rotate for free) fade in at MOTION_START via `apt.fadeIn`. At MEET_TIME=58.3, both `#dot-red`/`#dot-blue` get a radius pulse (`tl.to(..., {attr:{r:22}, duration:0.3, ease:"back.out(1.6)", yoyo:true, repeat:1}, MEET_TIME)`) and `#center-label-live` gets `apt.emphasize`-style scale pulse, turning `--success` green, reading "720 m = 1 full lap!".
**EDUCATIONAL PURPOSE:** Converts "the faster runner gains 2 m every second" from an abstract sentence into a number the viewer watches climb to exactly 720, landing in perfect sync with "one complete round is seven hundred twenty meter."
**ATTENTION MANAGEMENT:** Nothing else animates during this 32s stretch except the two dots, their tails, and the counter — full focus on the race.
**MOTION NOTES:** `ease:"none"` throughout — constant angular velocity is the whole point (real-world constant speed, not eased drama). Sole non-`animations.js` bespoke tween in the composition, flagged in Part 4.
**CONTINUITY FROM PREVIOUS SCENE:** Both dots are the literal same elements sitting motionless at the top since Scene 3 — this scene is their first movement, starting from rotation:0 with no jump.

### SCENE 7 — Hold on the Result
**TIMESTAMP:** 58.30–63.32s
**VOICEOVER:** "So the faster runner has to gain a total lead of seven hundred twenty meter. Got it? Perfect."
**VISUAL OBJECTIVE:** Let the "720 m = 1 full lap" payoff sit before pinning.
**SCREEN LAYOUT:** Unchanged from Scene 6's end state (dots aligned at top, green counter).
**ANIMATION DETAILS:** None — hold.
**CONTINUITY:** Direct hold of Scene 6's final frame.

### SCENE 8 — Pin + Given Recap
**TIMESTAMP:** 63.32–65.20s
**VOICEOVER:** "Now let us solve it." *(bridge)*
**VISUAL OBJECTIVE:** Reorganize into working layout; recap the given facts (already spoken, no new narration here) before Step 1.
**SCREEN LAYOUT:** `PIN_TIME = 63.3`. `#q-pinned`, `#illus-pinned` (a small static snapshot: two dots frozen together at top of a mini ring, "720 m" caption). `#card-given` opens at `GIVEN_TIME = 63.3` (coincides with PIN_TIME — no separate recap beat exists in the narration at this point, matching the README's "may coincide, never by default" allowance).
**ANIMATION DETAILS:** `apt.pinFlow` ×2, `apt.fadeOut("#serial-num")`, `apt.cardEnter(tl, "#card-given .solution-card", 63.3)`, `apt.textReveal` — all four `.rv` spans point to their ORIGINAL Phase-1 narration timestamps (7.96 / 11.38 / 14.599 / 18.079), same "honest recap" technique as `q12`'s Given card.
**CONTINUITY:** Question + illustration are the literal Scene 1–7 elements gliding into their pinned slots.

### SCENE 9 — Step 1: Gain Per Second
**TIMESTAMP:** 65.20–67.20s
**VOICEOVER:** "The gain every second is two meters,"
**VISUAL OBJECTIVE:** Formalize the rate the race just demonstrated.
**SCREEN LAYOUT:** `#card-step1` centered, chip "Step 1".
**ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 64.2)`. `apt.cardEnter(tl, "#card-step1 .solution-card", 65.2)`. Math: line-level "Gain per second = 6 − 4 =" @ `data-t=65.0`; word-level `.ans` "2 m/s" @ `data-t=65.959` (word "two").
**CONTINUITY:** Given card is mid-morph as Step 1 opens, same as every sibling.

### SCENE 10 — Step 2: Unit Rate → Answer
**TIMESTAMP:** 67.20–77.70s
**VOICEOVER:** "so to gain one meter it takes zero point five seconds, and to gain seven hundred twenty it takes seven hundred twenty into zero point five. After simplifying this, we get three hundred sixty seconds."
**VISUAL OBJECTIVE:** Follow the script's own unit-rate method exactly (not a division formula) — 1 m → 0.5 s, scale up to 720 m.
**SCREEN LAYOUT:** `#card-step2` centered, chip "Step 2".
**ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 66.2)`, `apt.stackLineGrow(tl, "#line-g-1", 66.2)`. `apt.cardEnter(tl, "#card-step2 .solution-card", 67.2)`. Math: line 1 "1 m → 0.5 sec" word-level @ `data-t=67.36`("one")/`68.659`("zero" of 0.5); line 2 "720 × 0.5 =" word-level @ `data-t=72.26`("seven" of the second 720)/`73.36`("zero" of the second 0.5, i.e. "into zero point five"); line 3 `.ans` "= 360 sec" @ `data-t=76.22` (word "three" of "three hundred sixty").
**EDUCATIONAL PURPOSE:** Matches the actual spoken method (unit rate, not `720÷2`) so the on-screen math never contradicts the voiceover.
**CONTINUITY:** Step 1's card is mid-morph as Step 2 opens.

### SCENE 11 — Final Reveal: Options + Correct Answer
**TIMESTAMP:** 77.70–83.68s
**VOICEOVER:** "So the two runners will meet again after three hundred sixty seconds. Hence, the correct answer is option A."
**VISUAL OBJECTIVE:** Confirm 360 s against the four options.
**SCREEN LAYOUT:** Stack column fully populated (G, 1, 2). Pinned question recenters; options grid (2×2) appears.
**ANIMATION DETAILS:** `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 77.7)`; `apt.stackLineGrow(tl, "#line-1-2", 77.7)`; `apt.fadeOut(tl, "#illus-pinned", 77.7)`; `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 77.7)`; `apt.fadeIn(tl, "#options-reveal", 78.5)`; `apt.optionsStagger(tl, ".opt-btn", 79.0)`; `apt.correctPulse(tl, ".opt-btn.correct", 83.22)` (lands on "option A." at 83.679).
**CONTINUITY:** Step 2's card is mid-morph as this scene's recenter fires, same pattern as every sibling.

### SCENE 12 — End Hold + Fade
**TIMESTAMP:** 83.68–85.9s
**ANIMATION DETAILS:** `apt.fadeOut(tl, "#root > div", 84.5, 1.2)`.

---

## PART 3: Asset List Required

- No external SVG/PNG illustration assets — the entire illustration (ring, dots, comet tails, legend, counter) is inline SVG + HTML/CSS, per the "per-question custom CSS/JS" allowance (no runner-figure asset fits a "dot on a circle" ask).
- `--runner-red: #e2574a` — one new, illustration-only CSS var (not a design-system token), used only for the red dot/tail/legend swatch. `--primary` is reused directly as "blue" for the other runner, so only one truly new color is introduced.
- All cards/chips/options/logo/serial-badge — existing shared components from `_template/assets/` and `design-system.css`. No new components introduced.

## PART 4: Animation Complexity Notes

- Standard patterns: `heroEnterLowered`, `pinFlow` (×2), `cardEnter` (×3), `textReveal` (×3), `morphToStack` (×3), `stackLineGrow` (×2), `setStackLine` (×2), `fadeIn`/`fadeOut`, `recenterForOptions`, `optionsStagger`, `correctPulse`.
- One bespoke SVG stroke-draw (`#track-ring`, per the `svg-path-draw` technique: `getTotalLength()` measured at setup, `strokeDashoffset` tweened to 0, `power2.out`, rotated -90° so the draw starts at 12 o'clock) — not a named `animations.js` helper, but the exact same mechanism `apt.roadSweep` uses conceptually for a straight line.
- One bespoke continuous motion tween (Scene 6, MOTION_START=25.92 → MEET_TIME=58.3): a single proxy-object tween (`{t:0}→{t:1}`, `ease:"none"`) whose `onUpdate` drives BOTH runner groups' rotation via `setAttribute('transform','rotate(deg 280 280)')` (explicit-center SVG rotation, per the "never rely on CSS transform-origin for an off-center `<g>`" rule) AND the live "Lead" counter text. This is a pure function of the tween's own progress, so it renders correctly under any seek/scrub — same seek-safety class as the template's own `apt.ambientLoop`/text-reveal tweens, just with a derived (not linear-CSS-property) output. Confirmed as the standard pattern for this kind of per-frame-derived visual (matches the `counting-dynamic-scale` and `ai-tracking-box` reference patterns from the animation skill).
- The 3:2 angular ratio (red 1080°, blue 720° over the same 32.38s) is mathematically exact — it's the real 6:4 speed ratio, just time-compressed so the "meet" (one full extra lap) lands inside the video's runtime instead of the literal 360 real seconds. Same simplification class as `q37`'s non-literal drive durations.
- Two small `attr:{r:...}` pulse tweens at MEET_TIME (dot radius, not CSS `scale`) — sidesteps the SVG transform-origin trap entirely rather than fighting it.
- No `apt.ambientLoop` needed anywhere — Phase 1 has continuous illustration motion for 32+ seconds, and the pinned Phase 2 area is static but short-lived (no long dead stretch).
- No `apt.stepFlow` used (correctly dropped per README §4D.1).
- No double-animation risk: text-reveal-driven cards never also get `emphasize`/`resultReveal`; the illustration's own MEET_TIME pulses are on illustration elements, not on any solution-card content.
- 1 Given + 2 Steps (Given, Step 1, Step 2 = 3 stack cards: G, 1, 2) — within the README's "1 Given + 2–4 Steps" norm, matching the narration's own two-beat solve (gain rate, then unit-rate scale-up).

## PART 5: Master Timeline Overview

```
0.0    Phase 1 starts — QuestionCard hero (lowered) enters
0.8    SerialNum badge pop
3.3    QuestionCard + badge rise to resting position
4.0    Track ring starts drawing (3.0s, power2.out) — lands 7.0s
7.96   "720 m" center label fades in
9.24   Both dots pop in together at the top (start point)
11.38  Red legend tag "Runner A · 6 m/s" fades in
14.60  Blue legend tag "Runner B · 4 m/s" fades in
16.16  "Start" label fades in
17.62  Direction arrow fades in
18.36  Both dots soft-pulse together ("same direction")
19.32–25.52  Question restated + concept bridge (hold)
[ MOTION_START = 25.92 ]
25.92  Center label swaps to live "Lead: 0 m" counter; comet tails fade in;
       continuous rotation begins (red → 3 laps, blue → 2 laps, ease:none)
[ MEET_TIME = 58.3 ]
58.30  Dots realign at top (red has lapped blue once); dot-radius pulse;
       Lead counter locks at 720, turns green
58.3–63.3  Hold on the result
[ PIN_TIME = GIVEN_TIME = 63.3 ]
63.3   pinFlow: question + illustration glide to pinned slots (0.8s);
       Given card opens (recap, .rv timestamps point to original Phase-1 mentions)
64.2   Given → stack morph
65.2   Step 1 card enters ("Gain per second = 6 − 4 = 2 m/s")
[ 66.2 ]  Step 1 → stack morph; line-g-1 grows
67.2   Step 2 card enters ("1 m → 0.5 sec", then "720 × 0.5 = 360 sec")
[ 77.7 ]  Step 2 → stack morph; line-1-2 grows; illustration fades; question recenters
78.5   Options grid fades in
79.0   Options stagger in
83.22  correctPulse on option A ("...option A.")
[ END_FADE_TIME = 84.5 ]  full-frame fade out (1.2s)
~85.9  End
```
