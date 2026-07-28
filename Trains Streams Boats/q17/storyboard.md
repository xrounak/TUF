# Storyboard — Trains, Streams and Boats Q17

**A motorboat records 20 km/h with the current and 12 km/h against the current on the same river. What still-water speed is implied by these two readings?**
**Answer:** A (16 km/h)
**Video length:** 83.639s (voiceover duration) — final `END_FADE_TIME` = 84.6s, fades out over 1.0s, clip tail to ~86.5s.
**Topic name:** "Trains, Streams and Boats".

Sibling reference: `Trains Streams Boats/q6` (downstream/upstream simultaneous-equations problem, B/C
badge-state-machine river+boat illustration) is the closest built sibling and is reused almost verbatim
for the illustration technique. Differences from q6:
1. **Real numbers are stated FIRST, before B/C are even introduced** (unlike q6, which opened with
   `given-mini` bubbles that were also the first thing shown, so actually this matches q6's ordering —
   the real difference is what happens right after: q6 goes straight into "let B be..." then formulas,
   while q17's script inserts an extra **conceptual detour explaining what B and C physically mean**
   ("b is the speed when water is completely still — no current"; "c is the speed the river itself is
   flowing") before teaching the downstream/upstream formulas. This gets its own scene (Scene 4) with two
   `apt.emphasize` pulses on the B/C badges and zero new visual elements — a deliberate quiet beat, not a
   new illustration.
2. **Much shorter runtime (83.6s vs q6's 110.5s)** — both glide legs are compressed (downstream ~7.5s,
   upstream ~5.4s vs q6's ~16.7s/~16s), and the post-pin stack is **only 2 cards (Given, Step 1)**, not
   3. The narration's own elimination beat ("add both equations, c gets canceled... 2b equals 32... so b
   equals 16") is a single continuous ~8.7s beat with no separate "now divide by 2" sentence, so it stays
   ONE step card (mirroring `q14`'s "simplest post-pin stack" precedent) rather than forcing a second
   card that would only have ~1.4s to enter, reveal, and be read — the division itself is still shown, via
   a small `.frac`-based `.note` line, just inside the same card.
3. **Very tight finish** (only ~0.7s between the Step 1 card's final reveal and `RECENTER_TIME`, and the
   correct-option pulse lands right on the spoken word "option" at 83.08s, 0.56s before the video's last
   spoken word) — same tight-finish shape as `q12`/`q13`/`q14`.

---

## PART 1 — Narration Beat Analysis

| # | Timestamp | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|---|---|---|---|---|
| 1 | 0.10–3.52 | "So welcome back again. It's time to solve one more problem." | Cold open | Question card | Hero question rises into view |
| 2 | 3.88–14.34 | "Now in this problem, we are given that the motorboat travels at 20 kilometer per hour with the current, and 12 kilometer per hour against the current." | State both real numbers | given-mini bubbles | "Downstream Speed = 20 km/hr" lands on "20"; "Upstream Speed = 12 km/hr" lands on "12" |
| 3 | 14.88–19.00 | "The question is asking us to find the speed of the boat in still water." | Frame the unknown | Bubbles held | No new motion — sets up the need for variables |
| 4 | 19.46–26.58 | "Let the speed of the boat in still water be b kilometer per hour, and let the speed of the current be c kilometer per hour." | Define variables | River+boat scene enters, badge "B"; "C" badge pops on "c" | Boat appears already labeled B; C-badge lands on its own word |
| 5 | 26.86–39.10 | "Now, what do these two values mean? The value b is the speed of the boat when the water is completely still. That means there is no current in the river. And c is the speed at which the river water itself is flowing." | Explain what B/C physically mean (extra conceptual detour not present in q6) | Two `emphasize` pulses, one per badge | Grounds the abstract letters in the physical picture before any formula |
| 6 | 39.44–41.52 | "Now, let us understand downstream and upstream." | Transition beat | Illustration idles | Breathing gap before the boat starts moving |
| 7 | 41.90–49.02 | "When the boat moves along with the current, the current helps the boat move faster. So downstream speed equals b plus c." | Derive downstream formula | Boat glides right | Badge B→B+C and formula tag land together on "b plus c" |
| 8 | 49.02–49.9 | *(boat turns)* | — | Boat flip | Squish + flip, badge B+C→B |
| 9 | 49.38–55.38 | "When the boat moves against the current, the current slows the boat down. So upstream speed equals b minus c." | Derive upstream formula | Boat glides left | Badge B→B−C and formula tag land together on "b minus c" |
| 10 | 55.5 | *(pin)* | Layout settles | Question + illustration shrink to pinned slots | `apt.pinFlow` glide |
| 11 | 55.82–57.38 | "Now we can use the given values." | Bridge over the just-pinned layout | Pinned stage holds | Mirrors q6's `PIN_TIME`→`GIVEN_TIME` gap convention |
| 12 | 57.86–63.88 | "Downstream speed, b plus c equals 20. Upstream speed, b minus c equals 12." | Restate formulas as equations | Given card, word-level reveal | "B + C = 20", "B − C = 12" |
| 13 | 64.36–65.38 | "Now this part is done." | Bridge beat | Given card holds | Signals the pivot into elimination |
| 14 | 65.82–74.50 | "If we add both equations, c gets canceled. After simplifying, we get 2b equals 32. So b equals 16." | Elimination + solve (single continuous beat) | Step 1 card, note lines + word-level reveal | "(B+C)+(B−C)=2B" → "2B=32" → "B=32⁄2" → "B=16 km/hr" |
| 15 | 75.30–83.64 | "Hence, the speed of the boat in still water is 16 kilometer per hour. So the correct option is option A." | Recap + reveal | Options grid, A pulses green | Confirm against the four choices |

---

## PART 2 — Scene-by-Scene Storyboard

Design constraints in force throughout (per `_template/README.md` §4D.1): only `--primary #6373db`,
`--primary-light #e2e5ff`, `--success #4eb85f`, `--topic #949494`, `--text #000000`, `--bg #FFFFFF`;
only `QuestionCard`/`SerialNum`/`SolutionCard`/`SolutionStackCard`/`solutionChip`/`StepCircle`/
`StackLine`/options-grid/`logo`/`topic-name`/`bottomStrip`/Illustration/`Fraction`; only the helpers in
`animations.js`, called explicitly by name below. Illustration assets: `illustration/boat.svg`,
`illustration/wave.svg`, `illustration/wave-light.svg` (already present in the question folder, used
as-is — no SVG edits, only CSS positioning/scale, same technique as `q6`/`q14`).

### SCENE 1 — Cold Open (0.0s – 3.52s)
**VOICEOVER:** "So welcome back again. It's time to solve one more problem."
**VISUAL OBJECTIVE:** Establish the question, low-key entrance.
**SCREEN LAYOUT:** `#q-full-card` centered, lowered per `apt.heroEnterLowered`, at `top:80px`, containing "A motorboat records 20 km/h with the current and 12 km/h against the current on the same river. What still-water speed is implied by these two readings?" with "20 km/h" and "12 km/h" in `.num` blue.
**ON-SCREEN ELEMENTS:** QuestionCard (full), SerialNum badge ("Q").
**ANIMATION DETAILS:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 3.519)` — lowered pose at 0.3s, rises to rest at 3.519s (end of "one more problem"). SerialNum mirrors with its own parallel tween (pop at 0.8s, rise at 3.519s).
**CAMERA MOVEMENT:** None. **TRANSITIONS:** N/A (opening beat).
**EDUCATIONAL PURPOSE:** Anchor the problem before anything else competes for attention.
**VISUAL HIERARCHY:** QuestionCard > SerialNum > (empty illustration area).
**ATTENTION MANAGEMENT:** Nothing else on screen yet.
**MOTION NOTES:** The rise finishes exactly as "problem" is spoken.
**CONTINUITY FROM PREVIOUS SCENE:** N/A — first scene.

### SCENE 2 — Given Bubbles (3.88s – 19.00s)
**VOICEOVER:** "Now in this problem, we are given that the motorboat travels at 20 kilometer per hour with the current, and 12 kilometer per hour against the current. The question is asking us to find the speed of the boat in still water."
**VISUAL OBJECTIVE:** State both real numbers as simple, permanent labels — no river/boat yet (matches q6's front-loaded-givens technique).
**SCREEN LAYOUT:** Two `.given-mini` pill bubbles side by side, positioned above where the (still-absent) illustration will sit.
**ON-SCREEN ELEMENTS:** `#given-downstream` ("Downstream Speed = 20 km/hr"), `#given-upstream` ("Upstream Speed = 12 km/hr").
**ANIMATION DETAILS:** `apt.cardEnter` at 7.639s (word "20") and 11.319s (word "12"). Both stay maintained (never fade) through the rest of Phase 1.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Continuous with Scene 1.
**EDUCATIONAL PURPOSE:** Anchor the two knowns before any conceptual/algebra explanation begins.
**VISUAL HIERARCHY:** Bubbles are the only new elements.
**ATTENTION MANAGEMENT:** Two sequential, well-spaced reveals.
**MOTION NOTES:** No boat/river motion in this scene at all.
**CONTINUITY FROM PREVIOUS SCENE:** Question card holds its Scene 1 resting position.

### SCENE 3 — River + Boat Enter, B and C Introduced (19.46s – 26.58s)
**VOICEOVER:** "Let the speed of the boat in still water be b kilometer per hour, and let the speed of the current be c kilometer per hour."
**VISUAL OBJECTIVE:** Introduce the river/boat scene already labeled with algebra — the boat's badge shows "B" from the moment it appears, and the current gets its own "C" badge.
**SCREEN LAYOUT:** River scene + boat-unit + flow-arrows all enter together (19.459s) below the two given bubbles; `#c-badge` appears near the flow chevrons.
**ON-SCREEN ELEMENTS:** River scene, boat (badge already "B"), flow-arrows, `#c-badge` ("C").
**ANIMATION DETAILS:** `apt.cardEnter` on river-scene/flow-arrows/boat-unit/b-badge at 19.459s. `apt.emphasize` on b-badge at 21.439s (word "b"). `#c-badge` `apt.cardEnter` at 25.319s (word "c"), `apt.emphasize` at 26.579s. River conveyor (`riverFlow`) and boat idle bob (`apt.ambientLoop`) start here and run continuously to PIN_TIME.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** First appearance of the illustration — a clean `cardEnter`, not a cut from anything.
**EDUCATIONAL PURPOSE:** Ground B and C in the same river/boat scene the formulas will use, rather than introducing algebra in the abstract.
**VISUAL HIERARCHY:** Boat + its B badge lead; C-badge second.
**ATTENTION MANAGEMENT:** Two sequential badge reveals (B, then C), matching speech order.
**MOTION NOTES:** Boat does not travel yet — river flows, boat idly bobs.
**CONTINUITY FROM PREVIOUS SCENE:** Given bubbles remain visible above the newly-arrived illustration.

### SCENE 4 — What B and C Actually Mean (26.86s – 39.10s)
**VOICEOVER:** "Now, what do these two values mean? The value b is the speed of the boat when the water is completely still. That means there is no current in the river. And c is the speed at which the river water itself is flowing."
**VISUAL OBJECTIVE:** A quiet conceptual-grounding beat unique to this question (not present in q6) — no new elements, just two badge pulses timed to the words "b" and "c" as they're explained.
**SCREEN LAYOUT:** Unchanged from Scene 3.
**ON-SCREEN ELEMENTS:** None new — river flow and boat idle bob continue.
**ANIMATION DETAILS:** `apt.emphasize(tl, "#b-badge", 29.379)` (word "b"), `apt.emphasize(tl, "#c-badge", 35.939)` (word "c").
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Direct continuation, no cut.
**EDUCATIONAL PURPOSE:** Grounds the abstract letters in the physical picture before any formula is derived.
**VISUAL HIERARCHY:** Whichever badge is currently being explained is the momentary focal point.
**ATTENTION MANAGEMENT:** Two well-spaced pulses, matching speech order.
**MOTION NOTES:** Deliberately minimal — this is explanation, not new information.
**CONTINUITY FROM PREVIOUS SCENE:** Direct hold of Scene 3's final frame.

### SCENE 5 — Concept Setup Pause (39.44s – 41.52s)
**VOICEOVER:** "Now, let us understand downstream and upstream."
**VISUAL OBJECTIVE:** A rhetorical breathing beat before the boat starts its demonstration.
**SCREEN LAYOUT:** Unchanged.
**ON-SCREEN ELEMENTS:** None new.
**ANIMATION DETAILS:** No new tweens.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Silence-beat leading into Scene 6's boat motion.
**EDUCATIONAL PURPOSE:** Signals a topic shift without a cut.
**VISUAL HIERARCHY:** N/A — holding frame.
**ATTENTION MANAGEMENT:** Deliberate lull.
**MOTION NOTES:** N/A.
**CONTINUITY FROM PREVIOUS SCENE:** Direct hold of Scene 4's final frame.

### SCENE 6 — Downstream Formula (41.90s – 49.02s)
**VOICEOVER:** "When the boat moves along with the current, the current helps the boat move faster. So downstream speed equals b plus c."
**VISUAL OBJECTIVE:** One slow, unhurried pass showing the boat sailing WITH the current while its badge morphs from "B" to "B + C" and the formula tag lands.
**SCREEN LAYOUT:** Boat glides `x:150→800` over 41.899–49.399s (`power1.out`), left-side wake flicker trailing.
**ON-SCREEN ELEMENTS:** `#merge-chip` ("+C") pops transiently mid-glide (45.3–47.6s); badge cross-fades B→B+C and `#formula-downstream` ("Downstream = B + C") both land at 47.979s (word "b" of "b plus c"); `apt.emphasize` pulse at 49.02s.
**ANIMATION DETAILS:** All timings from `transcript.json`.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Boat motion resumes directly from Scene 5's hold — no re-entrance animation.
**EDUCATIONAL PURPOSE:** Physically demonstrate "downstream = with the current helping" while the formula assembles on screen in step with the words that state it.
**VISUAL HIERARCHY:** Formula tag + badge swap are the payoff.
**ATTENTION MANAGEMENT:** One clear reveal at the end of a deliberate glide.
**MOTION NOTES:** Default boat orientation (facing right).
**CONTINUITY FROM PREVIOUS SCENE:** Boat inherits its exact Scene 3 position (x=150, facing right, badge "B") and starts moving from there.

### SCENE 7 — Turn (49.02s – 49.9s)
**VOICEOVER:** *(within "...b plus c" trailing into "When the boat moves against...")*
**VISUAL OBJECTIVE:** A believable physical turn between the two legs.
**SCREEN LAYOUT:** Boat squishes (`scaleY` yoyo) then flips (`scaleX:-1`).
**ON-SCREEN ELEMENTS:** Badge cross-fades B+C→B (back to solo, ready for the next leg).
**ANIMATION DETAILS:** Squish 49.399s (0.2s yoyo), flip 49.599s (0.3s), badge swap at 49.9s.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Bridges Scene 6's rightward glide into Scene 8's leftward one.
**EDUCATIONAL PURPOSE:** Visual punctuation between "downstream" and "upstream."
**VISUAL HIERARCHY:** Boat only.
**ATTENTION MANAGEMENT:** Brief, physical beat.
**MOTION NOTES:** Flip completes before the leftward glide begins.
**CONTINUITY FROM PREVIOUS SCENE:** Boat is exactly where Scene 6 left it (x=800, facing right).

### SCENE 8 — Upstream Formula (49.9s – 55.5s)
**VOICEOVER:** "When the boat moves against the current, the current slows the boat down. So upstream speed equals b minus c."
**VISUAL OBJECTIVE:** Mirror Scene 6 for the upstream leg, with a resistance judder selling "the current fights back."
**SCREEN LAYOUT:** Boat glides `x:800→0` over 49.9–55.3s (`power1.inOut`), right-side wake flicker, continuous rotational judder (`boatJudder`).
**ON-SCREEN ELEMENTS:** `#resist-chip` ("−C") pops transiently mid-glide (52.3–54.3s); badge cross-fades B→B−C and `#formula-upstream` ("Upstream = B − C") both land at 54.739s (word "b" of "b minus c"); `apt.emphasize` pulse at 55.4s.
**ANIMATION DETAILS:** All timings from `transcript.json`.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Direct continuation from Scene 7's flip.
**EDUCATIONAL PURPOSE:** Complete the formula pair (Downstream = B+C, Upstream = B−C) before pinning.
**VISUAL HIERARCHY:** Formula tag + badge swap are the payoff.
**ATTENTION MANAGEMENT:** Continuous judder + wake motion carries the glide.
**MOTION NOTES:** Boat's final resting orientation (facing left) is what the pinned icon inherits.
**CONTINUITY FROM PREVIOUS SCENE:** Boat inherits Scene 7's end state and glides left from there.

### SCENE 9 — Pin + Bridge (55.5s – 57.86s)
**VOICEOVER:** *(silence right after "c." ends at 55.379s)* / **THEN:** "Now we can use the given values."
**VISUAL OBJECTIVE:** Settle into the pinned layout now that both formulas have been fully taught, then bridge into the equations phase.
**SCREEN LAYOUT:** Question card + illustration glide from their Phase-1 slots to their pinned slots.
**ON-SCREEN ELEMENTS:** `apt.pinFlow` on both; SerialNum fades out.
**ANIMATION DETAILS:** `PIN_TIME=55.5`, 0.8s glide, `power2.inOut`. "Now we can use the given values." (55.819–57.379) plays over the already-pinned stage — no new reveal, mirrors the `PIN_TIME`→`GIVEN_TIME` gap convention from q6/q13/q14.
**CAMERA MOVEMENT:** The pin glide itself. **TRANSITIONS:** `apt.pinFlow` (real glide, not a cut).
**EDUCATIONAL PURPOSE:** N/A — pure layout transition + bridging line.
**VISUAL HIERARCHY:** N/A.
**ATTENTION MANAGEMENT:** Brief settle before the equations phase.
**MOTION NOTES:** Pinning only now — after both formulas are taught — is what keeps the post-pin card sequence to just Given+Step 1.
**CONTINUITY FROM PREVIOUS SCENE:** Direct continuation of Scene 8's end state.

### SCENE 10 — Given (Equations) (57.86s – 65.6s)
**VOICEOVER:** "Downstream speed, b plus c equals 20. Upstream speed, b minus c equals 12. Now this part is done."
**VISUAL OBJECTIVE:** Restate the two Phase-1 formulas as concrete equations.
**SCREEN LAYOUT:** Pinned question + mini-illustration (idling continuously); `Given` SolutionCard centered.
**ON-SCREEN ELEMENTS:** Chip "Given", two lines "B + C = 20" / "B − C = 12."
**ANIMATION DETAILS:** `apt.cardEnter` 57.86s. Word-level `apt.textReveal`: "B"@59.139, "+"@59.399, "C"@59.779, "="@59.959, "20"(hi)@60.639; "B"@62.199, "−"@62.419, "C"@62.919, "="@63.059, "12"(hi)@63.5. Card holds through "Now this part is done." (64.36–65.379) — no new reveal.
**CAMERA MOVEMENT:** None. **TRANSITIONS:** Direct continuation from Scene 9's pin.
**EDUCATIONAL PURPOSE:** Make the leap from "formula" (Phase 1) to "equation with numbers" (Phase 2) explicit.
**VISUAL HIERARCHY:** Card is the sole center-stage element.
**ATTENTION MANAGEMENT:** Reveal paced to the narration's own restatement.
**MOTION NOTES:** Pinned boat idles continuously in the background.
**CONTINUITY FROM PREVIOUS SCENE:** Card enters right as the pin settles.

### SCENE 11 — Given → Stack, Step 1: Eliminate and Solve (65.6s – 75.2s)
**VOICEOVER:** "If we add both equations, c gets canceled. After simplifying, we get 2b equals 32. So b equals 16."
**VISUAL OBJECTIVE:** The only computation in this problem — eliminate C by addition, then solve for B — as ONE continuous card (see revision note at top: the narration gives no separate "divide by 2" sentence, so splitting into two cards would leave the second only ~1.4s to enter and be read).
**SCREEN LAYOUT:** `#stack-given .stack-card` at `left:100px; top:140px` (badge "G"), `#card-step1 .solution-card` centered at `left:540px; top:340px; width:860px`.
**ON-SCREEN ELEMENTS:** Step 1 card, chip "Step 1": a faded `.note` recap "B + C = 20   B − C = 12" (immediate), a faded `.note` "(B + C) + (B − C) = 2B" with the +C/−C terms pulsing then fading to 0.25 opacity on "canceled" (visually demonstrating elimination), the bold reveal "2B = 32," a faded `.note` "B = 32⁄2" (via `.frac`, never a bare ÷) landing just before the final line, then "B = 16 km/hr" (`.ans`).
**ANIMATION DETAILS:**
- `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 65.6)` — completes 66.4 (fires right before "If" begins — Step 1's own cardEnter overlaps the tail of this morph, matching the precedent in q6's Given→Step1 transition).
- `apt.cardEnter(tl, "#card-step1 .solution-card", 65.819)` (fires as "If we add..." begins).
- `apt.fadeIn(tl, "#step1-recap", 65.819, 0.3)` — immediate recap of both equations.
- `apt.fadeIn(tl, "#cancel-line", 68.339, 0.3)` — fires on "canceled."; `+C`/`−C` terms pulse (scale 1→1.2 yoyo) then fade to 0.25 opacity.
- `apt.textReveal(tl, "#card-step1 .math")`, word-level: "2B"(hi)@71.299, "="@71.659, "32"(hi)@72.199.
- `apt.fadeIn(tl, "#divide-line", 72.8, 0.3)` — "B = 32⁄2" note, landing in the pause before "So b equals 16."
- Continued word-level reveal: "B"@73.379, "="@73.559, "16 km/hr"(ans)@73.879.
- Card holds 74.5–75.2 (brief pause before "Hence,").
**CAMERA MOVEMENT:** None. **TRANSITIONS:** One 0.8s morph (Given→stack) at the top of the scene.
**EDUCATIONAL PURPOSE:** Delivers the full payoff — elimination and the final answer, in one continuous take.
**VISUAL HIERARCHY:** Step 1 card is the sole focal point; G-stack sits archived at left.
**ATTENTION MANAGEMENT:** Each note/reveal lands exactly as its concept is spoken — no double-animation (notes are hand-tweened, not `.rv`, so they can pulse/fade independently of `apt.textReveal`'s own fades).
**MOTION NOTES:** Tight but legible — ~8.7s total for recap + cancel + 2B=32 + divide + B=16.
**CONTINUITY FROM PREVIOUS SCENE:** Given card's morph begins right as Scene 10 settles; Step 1 enters on the morph's tail.

### SCENE 12 — Recenter + Options Reveal (75.2s – 83.64s)
**VOICEOVER:** "Hence, the speed of the boat in still water is 16 kilometer per hour. So the correct option is option A."
**VISUAL OBJECTIVE:** Close out — clear the illustration, recenter the question, reveal the four options with A confirmed.
**SCREEN LAYOUT:** Stack column shows both completed cards (G, 1); options grid (2×2) fills the right/center.
**ON-SCREEN ELEMENTS:** `#options-reveal` (A/B/C/D); Step 1 morphs into its stack slot at the same instant.
**ANIMATION DETAILS:** `RECENTER_TIME=75.2`: `apt.fadeOut(tl, "#illus-pinned", 75.2)`, `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 75.2)`, `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 75.2)`, `apt.stackLineGrow(tl, "#line-g-1", 75.2)`. Options fade in 75.6s (overlaps the morph tail), stagger 76.0s, correct pulse 83.08s (word "option," right before "A."). `END_FADE_TIME=84.6` — full-frame fade out (1.0s).
**CAMERA MOVEMENT:** The recenter shift. **TRANSITIONS:** Morph, recenter, and options fade-in sequenced within ~1s, then hold to the correct-answer pulse.
**EDUCATIONAL PURPOSE:** Confirm the answer against the four options.
**VISUAL HIERARCHY:** Correct (green) option is the final visual statement.
**ATTENTION MANAGEMENT:** `correctPulse` on option A is the terminal focal point.
**MOTION NOTES:** Only ~0.7s between Step 1's final reveal and RECENTER_TIME — a deliberately tight finish, same shape as q12/q13/q14's close.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1's card is exactly where Scene 11 left it when the morph begins.

---

## PART 3 — Asset List Required

| Asset | Source | Notes |
|---|---|---|
| `illustration/boat.svg` | Already present in question folder | Used as-is, full-size (130px) in Phase 1, shrunk (72px) in the pinned recap |
| `illustration/wave.svg`, `illustration/wave-light.svg` | Already present in question folder | Used as-is — front/back scrolling wave-tile layers, same technique as q6 |
| `design-system.css`, `animations.js`, `assets/` | Already copied into the question folder from `_template/` | Per README §5B — verified identical (no diff) |

No new colors, fonts, or template components introduced — all illustration CSS (river scene, boat unit,
speed tags, flow arrows, formula tags, merge/resist chips) is per-question custom markup as permitted by
design.md's "Illustration" section, directly modeled on q6's proven river+boat technique.

## PART 4 — Animation Complexity Notes

- Standard patterns only: `heroEnterLowered`, `pinFlow` (×2, paired), `cardEnter` (×8), `textReveal`
  (×2 — Given, Step 1), `morphToStack` (×2 — Given, then Step 1), `stackLineGrow`/`setStackLine` (×1),
  `ambientLoop` (×2), `emphasize` (×6), `fadeIn`/`fadeOut`, `recenterForOptions`, `optionsStagger`,
  `correctPulse`.
- Two small custom (non-`animations.js`) local helpers copied verbatim from q6: `riverFlow` (seamless
  scrolling wave conveyor) and `wakeFlicker` (bounded wake-line flicker behind the boat), plus
  `boatJudder` for the upstream leg's resistance wobble.
- `layoutStack()` (copied verbatim from q6) self-measures the stack cards' real rendered heights at
  build time rather than hand-guessing their `top` values.
- Only 2 stack cards (`stack-given`, `stack-step1`) with one connector line (`line-g-1`) between them —
  Step 1's morph fires at `RECENTER_TIME`, the same instant the layout recenters for options, matching
  the "last step joins the stack right before the reveal" pattern used across this topic.
- `.stack-card .math` uses the design system's uniform 18px default — no per-card font-size override
  needed (verified in `design-system.css`).
- Every active-card clip's `data-duration` is sized to cover `(its own morph/pinFlow start time − its own
  data-start) + 0.8s + ~0.2s buffer`, not just to the next event's start time (per the clip-duration
  memory: HyperFrames unmounts a clip the instant `data-start + data-duration` passes, regardless of an
  in-flight GSAP tween).
- No `.frac` violations — the division step (`B = 32⁄2`) uses the `.frac` component, never a bare `÷`.
- No double-animation risk: text-reveal-driven card content never also gets `emphasize`/`resultReveal`;
  hand-tweened `.note` lines are kept separate from `.rv`/`apt.textReveal` spans.
- No `apt.stepFlow` used (correctly dropped per README §4D.1).

## PART 5 — Master Timeline Overview

```
0.0    Phase 1 starts — QuestionCard hero (lowered) enters
0.8    SerialNum badge pop
3.519  QuestionCard + badge rise to resting position
7.639  "Downstream Speed = 20 km/hr" bubble (word "20")
11.319 "Upstream Speed = 12 km/hr" bubble (word "12")
19.459 River scene + flow arrows + boat unit + B badge enter; idle bob starts
21.439 Emphasize pulse on B badge
25.319 C badge appears (word "c")
26.579 Emphasize pulse on C badge
[ Conceptual detour — what B and C mean ]
29.379 Emphasize pulse on B badge (word "b" in "the value b is...")
35.939 Emphasize pulse on C badge (word "c" in "and c is...")
[ Concept-setup pause 39.44–41.52 ]
41.899 Boat begins downstream glide (x:150→800, 7.5s, facing right)
45.3–47.6  "+C" merge-chip transient
47.979 Badge B→B+C; formula tag "Downstream = B + C" lands (word "b" of "b plus c")
49.02  Emphasize pulse on formula tag; boat squish begins (turn)
49.599 Boat flips to face left
49.9   Badge B+C→B; boat begins upstream glide (x:800→0, 5.4s, judder + wake)
52.3–54.3  "−C" resist-chip transient
54.739 Badge B→B−C; formula tag "Upstream = B − C" lands (word "b" of "b minus c")
55.4   Emphasize pulse on formula tag
[ PIN_TIME = 55.5 ]
55.5   pinFlow: question + illustration glide to pinned slots (0.8s)
55.819–57.379  "Now we can use the given values" — bridging beat, no new reveal
[ GIVEN_TIME = 57.86 ]
57.86  Given card enters, word-level reveal begins
56.5–75.2  ambientLoop on pinned boat icon
63.5   Given card line 2 finishes ("B − C = 12")
[ 65.6 ]  Given → stack morph (badge "G")
65.819 Step 1 card enters; step1-recap note fades in
68.339 cancel-line note fades in; +C/−C terms pulse then fade
71.299–72.199  Word-level reveal: 2B = 32
72.8   divide-line note fades in (B = 32⁄2)
73.379–73.879  Word-level reveal: B = 16 km/hr (.ans)
[ RECENTER_TIME = 75.2 ]
75.2   illus-pinned fades out; q-pinned recenters; Step 1 → stack morph (badge "1"); line-g-1 grows
75.6   options-reveal fades in
76.0   options stagger in
83.08  correctPulse on option A
[ END_FADE_TIME = 84.6 ]  full-frame fade out (1.0s)
~85.6  End
```

**Video duration:** 83.639s (matches `voiceover.wav` exactly); composition tail extends to ~86.5s for the closing fade.
