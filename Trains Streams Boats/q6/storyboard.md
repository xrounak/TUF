# Trains, Streams and Boats — Q6 — Storyboard

**Question:** A boat's downstream speed is 16 km/h and upstream speed is 10 km/h. What is its speed in still water?
**Answer:** B (13 km/h)
**Video length:** ~110.5s (Detailed — simultaneous-equations problem)

> **Revision note:** Rebuilt on the technique from
> `speed time and distance/q8`: given-fact bubbles state the real
> numbers early and stay maintained; the river+boat scene only appears
> once the algebra section begins, and teaches B, C, and both formulas
> through ONE slow pass per direction (a boat badge state machine
> B → B+C → B → B−C, plus formula-tag pills landing on the real
> spoken words). All of that lives in a long Phase 1 (0–65s). The pin
> only happens after both formulas are taught, leaving a short
> Given(equations) + Add + Solve sequence for the pinned/small layout
> — mirroring q8's 3-card post-pin stack (vs. an earlier 5-card
> attempt that front-loaded too much into the pinned phase and caused
> layout bugs).

---

## PART 1 — Narration Beat Analysis

| # | Time | Narration | Educational purpose | Attention focus | Visual objective |
|---|------|-----------|---------------------|------------------|-------------------|
| 1 | 0.12–2.18 | "So welcome back again. Time for one more problem." | Opening hook | Question card | Hero question rises into view |
| 2 | 2.56–9.48 | "...downstream speed of a boat is sixteen kilometer per hour." | State given #1 | given-mini bubble | "Downstream Speed = 16 km/hr" bubble appears on "sixteen" |
| 3 | 10.08–13.16 | "Also, the upstream speed is ten kilometer per hour." | State given #2 | given-mini bubble | "Upstream Speed = 10 km/hr" bubble appears on "ten" |
| 4 | 13.60–18.26 | "The question is asking us to find the speed of the boat in still water." | Restate the unknown | Both bubbles held | No new motion — sets up the need for variables |
| 5 | 18.64–26.32 | "...let the still-water speed be B... let the current speed be C." | Define variables | River+boat scene enters, badge "B"; current gets "C" | Boat appears already labeled B; C-badge pops on "c" |
| 6 | 26.84–30.14 | "Before putting the values, let us understand the formulas." | Transition beat | Illustration idles | Breathing gap before the boat starts moving |
| 7 | 30.70–47.42 | "When the boat moves WITH the flow... downstream = B + C." | Derive downstream formula | Boat glides right | Badge B→B+C and formula tag land together on "b plus c" |
| 8 | 47.42–48.06 | *(boat turns)* | — | Boat flip | Squish + flip, badge B+C→B |
| 9 | 48.06–64.38 | "Similarly, AGAINST the flow... upstream = B − C. Got it? Perfect." | Derive upstream formula | Boat glides left | Badge B→B−C and formula tag land together on "b minus c" |
| 10 | 64.8 | *(pin)* | Layout settles | Question + illustration shrink to pinned slots | `apt.pinFlow` glide |
| 11 | 65.72–74.80 | "Downstream given as 16, so B+C=16. Upstream given as 10, so B−C=10." | Restate formulas as equations | Given card | Word-reveal building "B+C=16" / "B−C=10" |
| 12 | 75.18–90.16 | "Add these two equations... plus C minus C cancel... 2B is left... 16+10=26." | Elimination method | Step 1 card | "2B = 16 + 10 = 26" builds term by term |
| 13 | 90.52–96.90 | "Two times B = 26. Dividing both sides by 2, B = 13." | Solve for B | Step 2 card | "B = 13" lands as the `.ans` |
| 14 | 97.44–107.74 | "Since B is the still-water speed, the required speed is 13 km/hr. Option B." | Final answer | Options grid | Correct option pulses green on "option B" |

---

## PART 2 — Scene-by-Scene Storyboard

### SCENE 1 — Opening + Question Reveal (0.0s – 2.2s)
- **VOICEOVER:** "So welcome back again. Time for one more problem."
- **VISUAL OBJECTIVE:** Establish the question, low-key entrance.
- **SCREEN LAYOUT:** `#q-full-card` centered, lowered start (`apt.heroEnterLowered`, offsetY 180).
- **ON-SCREEN ELEMENTS:** QuestionCard, SerialNum badge.
- **ANIMATION DETAILS:** Card fades/scales in at 0.3s (`back.out(1.4)`, 0.7s), rises at RISE_TIME=2.2s.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** N/A (first scene).
- **EDUCATIONAL PURPOSE:** Orient the viewer before any numbers appear.
- **VISUAL HIERARCHY:** Question card dominant.
- **ATTENTION MANAGEMENT:** Single focal element.
- **MOTION NOTES:** Card holds lowered through the opening line so the rise lands on "...problem."
- **CONTINUITY FROM PREVIOUS SCENE:** N/A — video start.

### SCENE 2 — Given Bubbles (2.2s – 13.6s)
- **VOICEOVER:** "Now, in this problem, we are given that the downstream speed of a boat is sixteen kilometer per hour. Also, the upstream speed is ten kilometer per hour."
- **VISUAL OBJECTIVE:** State both real numbers as simple, permanent labels — no river/boat yet (matches q8's technique of front-loading the givens before any illustration).
- **SCREEN LAYOUT:** Two `.given-mini` pill bubbles side by side, positioned above where the (still-absent) illustration will sit.
- **ON-SCREEN ELEMENTS:** `#given-downstream` ("Downstream Speed = 16 km/hr"), `#given-upstream` ("Upstream Speed = 10 km/hr").
- **ANIMATION DETAILS:** `apt.cardEnter` at 7.46s (word "sixteen") and 11.86s (word "ten"). Both stay maintained (never fade) through the rest of Phase 1.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Continuous with Scene 1.
- **EDUCATIONAL PURPOSE:** Anchor the two knowns before any conceptual/algebra explanation begins.
- **VISUAL HIERARCHY:** Bubbles are the only new elements.
- **ATTENTION MANAGEMENT:** Two sequential, well-spaced reveals.
- **MOTION NOTES:** No boat/river motion in this scene at all.
- **CONTINUITY FROM PREVIOUS SCENE:** Question card holds its Scene 1 resting position.

### SCENE 3 — River + Boat Enter, B Introduced (18.64s – 26.32s)
- **VOICEOVER:** "The question is asking us to find the speed of the boat in still water. Now, let the speed of the boat in still water be B kilometer per hour, and let the speed of the current be C kilometer per hour."
- **VISUAL OBJECTIVE:** Introduce the river/boat scene already labeled with algebra — the boat's badge shows "B" from the moment it appears, and the current gets its own "C" badge.
- **SCREEN LAYOUT:** River scene + boat-unit + flow-arrows all enter together (18.64s) below the two given bubbles; `#c-badge` appears near the flow chevrons.
- **ON-SCREEN ELEMENTS:** River scene, boat (badge already "B"), flow-arrows, `#c-badge` ("C").
- **ANIMATION DETAILS:** `apt.cardEnter` on river-scene/flow-arrows/boat-unit/b-badge at 18.64s. `apt.emphasize` on b-badge at 21.48s (word "b"). `#c-badge` `apt.cardEnter` at 25.18s (word "c"), `apt.emphasize` at 26.32s. River conveyor (`riverFlow`) and boat idle bob (`apt.ambientLoop`) start here and run continuously to PIN_TIME.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** First appearance of the illustration — a clean `cardEnter`, not a cut from anything.
- **EDUCATIONAL PURPOSE:** Ground B and C in the same river/boat scene the formulas will use, rather than introducing algebra in the abstract.
- **VISUAL HIERARCHY:** Boat + its B badge lead; C-badge second.
- **ATTENTION MANAGEMENT:** Two sequential badge reveals (B, then C), matching speech order.
- **MOTION NOTES:** Boat does not travel yet — river flows, boat idly bobs.
- **CONTINUITY FROM PREVIOUS SCENE:** Given bubbles remain visible above the newly-arrived illustration.

### SCENE 4 — Formula Setup Pause (26.84s – 30.7s)
- **VOICEOVER:** "Now, before putting the values, let us understand the formulas."
- **VISUAL OBJECTIVE:** A breathing beat before the boat starts its demonstration.
- **SCREEN LAYOUT:** Unchanged from Scene 3.
- **ON-SCREEN ELEMENTS:** None new — river flow and boat idle bob continue.
- **ANIMATION DETAILS:** No new tweens.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Silence-beat leading into Scene 5's boat motion.
- **EDUCATIONAL PURPOSE:** Signals a topic shift without a cut.
- **VISUAL HIERARCHY:** N/A — holding frame.
- **ATTENTION MANAGEMENT:** Deliberate lull.
- **MOTION NOTES:** N/A.
- **CONTINUITY FROM PREVIOUS SCENE:** Direct hold of Scene 3's final frame.

### SCENE 5 — Downstream Formula (30.7s – 48.06s)
- **VOICEOVER:** "When the boat moves with the flow of the river, the current helps the boat. So the downstream speed is equal to the speed of the boat in still water, plus the speed of the current. That means the downstream speed is equal to B plus C."
- **VISUAL OBJECTIVE:** One slow, unhurried pass showing the boat sailing WITH the current while its badge morphs from "B" to "B + C" and the formula tag lands.
- **SCREEN LAYOUT:** Boat glides x:150→950 over 30.7–47.42s (`power1.out`), left-side wake flicker trailing.
- **ON-SCREEN ELEMENTS:** `#merge-chip` ("+C") pops transiently mid-glide (41.0–43.6s); badge cross-fades B→B+C and `#formula-downstream` ("Downstream = B + C") both land at 43.82s (word "b" of "b plus c"); `apt.emphasize` pulse at 46.72s.
- **ANIMATION DETAILS:** All timings pulled from `transcript.json`.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Boat motion resumes directly from Scene 4's hold — no re-entrance animation.
- **EDUCATIONAL PURPOSE:** Physically demonstrate "downstream = with the current helping" while the formula assembles on screen in step with the words that state it.
- **VISUAL HIERARCHY:** Formula tag + badge swap are the payoff; the ~13s lead-in narration (explaining WHY) is carried by the boat's continuous slow glide so nothing is static.
- **ATTENTION MANAGEMENT:** One clear reveal at the end of a long, deliberate glide.
- **MOTION NOTES:** Default boat orientation (facing right).
- **CONTINUITY FROM PREVIOUS SCENE:** Boat inherits its exact Scene 3 position (x=150, facing right, badge "B") and starts moving from there.

### SCENE 6 — Turn (47.42s – 48.06s)
- **VOICEOVER:** *(within "...equal to B plus C" trailing into "Similarly...")*
- **VISUAL OBJECTIVE:** A believable physical turn between the two legs.
- **SCREEN LAYOUT:** Boat squishes (`scaleY` yoyo) then flips (`scaleX:-1`).
- **ON-SCREEN ELEMENTS:** Badge cross-fades B+C→B (back to solo, ready for the next leg).
- **ANIMATION DETAILS:** Squish 47.42s (0.2s yoyo), flip 47.62s (0.5s).
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Bridges Scene 5's rightward glide into Scene 7's leftward one.
- **EDUCATIONAL PURPOSE:** Visual punctuation between "downstream" and "upstream."
- **VISUAL HIERARCHY:** Boat only.
- **ATTENTION MANAGEMENT:** Brief, physical beat.
- **MOTION NOTES:** Flip completes before the leftward glide begins.
- **CONTINUITY FROM PREVIOUS SCENE:** Boat is exactly where Scene 5 left it (x=950, facing right).

### SCENE 7 — Upstream Formula (48.4s – 64.38s)
- **VOICEOVER:** "Similarly, when the boat moves against the flow of the river, the current slows the boat down. So the upstream speed is equal to the speed of the boat in still water, minus the speed of the current. That means the upstream speed is equal to B minus C. Got it? Perfect."
- **VISUAL OBJECTIVE:** Mirror Scene 5 for the upstream leg, with a resistance judder selling "the current fights back."
- **SCREEN LAYOUT:** Boat glides x:950→0 over 48.4–64.38s (`power1.inOut`), right-side wake flicker, continuous rotational judder (`boatJudder`).
- **ON-SCREEN ELEMENTS:** `#resist-chip` ("−C") pops transiently mid-glide (57.0–57.8s); badge cross-fades B→B−C and `#formula-upstream` ("Upstream = B − C") both land at 60.32s (word "b" of "b minus c"); `apt.emphasize` pulse at 63.34s.
- **ANIMATION DETAILS:** All timings from `transcript.json`.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Direct continuation from Scene 6's flip.
- **EDUCATIONAL PURPOSE:** Complete the formula pair (Downstream = B+C, Upstream = B−C) before pinning.
- **VISUAL HIERARCHY:** Formula tag + badge swap are the payoff.
- **ATTENTION MANAGEMENT:** Long glide (16s) carried by continuous judder + wake motion, mirroring Scene 5's pacing.
- **MOTION NOTES:** Boat's final resting orientation (facing left) is what the pinned icon inherits.
- **CONTINUITY FROM PREVIOUS SCENE:** Boat inherits Scene 6's end state and glides left from there.

### SCENE 8 — Pin (64.8s – 65.6s)
- **VOICEOVER:** *(silence — right after "Perfect." ends at 65.26s, before "Now, the downstream speed is given as sixteen..." begins at 65.72s)*
- **VISUAL OBJECTIVE:** Settle into the pinned layout now that both formulas have been fully taught.
- **SCREEN LAYOUT:** Question card + illustration glide from their Phase-1 slots to their pinned slots.
- **ON-SCREEN ELEMENTS:** `apt.pinFlow` on both; SerialNum fades out.
- **ANIMATION DETAILS:** 0.8s glide, `power2.inOut`.
- **CAMERA MOVEMENT:** The pin glide itself.
- **TRANSITIONS:** `apt.pinFlow` (real glide, not a cut).
- **EDUCATIONAL PURPOSE:** N/A — pure layout transition.
- **VISUAL HIERARCHY:** N/A.
- **ATTENTION MANAGEMENT:** Brief settle before the equations phase.
- **MOTION NOTES:** Pinning only now — after both formulas are taught — is what keeps the (much shorter) post-pin card sequence to just Given+Add+Solve, and keeps the stack column under an already-small question card the whole time.
- **CONTINUITY FROM PREVIOUS SCENE:** Direct continuation of Scene 7's end state.

### SCENE 9 — Given (Equations) (65.72s – 75.6s)
- **VOICEOVER:** "Now, the downstream speed is given as sixteen, so B plus C becomes sixteen. The upstream speed is given as ten, so B minus C becomes ten."
- **VISUAL OBJECTIVE:** Restate the two Phase-1 formulas as concrete equations.
- **SCREEN LAYOUT:** Pinned question + mini-illustration (idling continuously); `Given` SolutionCard centered.
- **ON-SCREEN ELEMENTS:** Chip "Given", two lines "B + C = 16" / "B − C = 10."
- **ANIMATION DETAILS:** `apt.cardEnter` 65.72s. Word/line-level `apt.textReveal`, timestamps from the transcript's second (equation-restating) occurrence of each number.
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Direct continuation from Scene 8's pin.
- **EDUCATIONAL PURPOSE:** Make the leap from "formula" (Phase 1) to "equation with numbers" (Phase 2) explicit.
- **VISUAL HIERARCHY:** Card is the sole center-stage element.
- **ATTENTION MANAGEMENT:** Reveal paced to the narration's own restatement.
- **MOTION NOTES:** Pinned boat idles continuously.
- **CONTINUITY FROM PREVIOUS SCENE:** Card enters right as the pin settles.

### SCENE 10 — Add the Equations (75.6s – 90.9s)
- **VOICEOVER:** "Now let us add these two equations. Why are we adding them? Because plus C and minus C cancel each other, so only two times B is left. On the other side, we get sixteen plus ten, which is twenty-six."
- **VISUAL OBJECTIVE:** Walk the elimination step to 2B = 26.
- **SCREEN LAYOUT:** `Step 1` card, replacing Given (now in stack).
- **ON-SCREEN ELEMENTS:** Chip "Step 1", "Adding the two equations:" then "2B = 16 + 10 = 26."
- **ANIMATION DETAILS:** `apt.cardEnter` 75.6s (label reveals immediately). Word-reveal: "2B"(84.619) "="(87.259) "16"(87.559) "+"(88.019) "10"(88.319) "="(88.979) "26"(89.36).
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Direct continuation from Scene 9's morph.
- **EDUCATIONAL PURPOSE:** Show WHY adding cancels C, leaving a single-variable equation.
- **VISUAL HIERARCHY:** "26" is the payoff.
- **ATTENTION MANAGEMENT:** Long lead-in (rhetorical "why are we adding them?") carried by the still-visible card holding its label line.
- **MOTION NOTES:** No boat/illustration motion.
- **CONTINUITY FROM PREVIOUS SCENE:** Card enters right as Given's morph completes.

### SCENE 11 — Solve for B (90.9s – 97.0s)
- **VOICEOVER:** "So two times B is equal to twenty-six. Dividing both sides by two, we get B equal to thirteen."
- **VISUAL OBJECTIVE:** Land the final answer, B = 13.
- **SCREEN LAYOUT:** `Step 2` card, replacing Step 1 (now in stack).
- **ON-SCREEN ELEMENTS:** Chip "Step 2", "Divide both sides by 2" then "B = 13 km/hr" (`.ans`).
- **ANIMATION DETAILS:** `apt.cardEnter` 90.9s. Word-reveal: "B"(95.239) "="(96.059) "13"(96.439, `.ans`).
- **CAMERA MOVEMENT:** None.
- **TRANSITIONS:** Direct continuation from Scene 10's morph.
- **EDUCATIONAL PURPOSE:** The payoff scene.
- **VISUAL HIERARCHY:** "13" is the final visual climax before the options reveal.
- **ATTENTION MANAGEMENT:** Card holds its label line during the narration's own restatement ("so two times B is equal to twenty-six") before the new reveal lands.
- **MOTION NOTES:** No boat/illustration motion.
- **CONTINUITY FROM PREVIOUS SCENE:** Card enters right as Step 1's morph completes.

### SCENE 12 — Recenter + Options Reveal (97.0s – 110.5s)
- **VOICEOVER:** "Since B represents the speed of the boat in still water, the required speed is thirteen kilometer per hour. Hence, the correct answer is option B."
- **VISUAL OBJECTIVE:** Close out — clear the illustration, recenter the question, reveal the four options with B confirmed.
- **SCREEN LAYOUT:** Stack column shows all three completed cards (G, 1, 2); options grid (2×2) fills the right/center.
- **ON-SCREEN ELEMENTS:** `#options-reveal` (A/B/C/D); Step 2 morphs into its stack slot at the same instant.
- **ANIMATION DETAILS:** RECENTER_TIME=97.0s: illustration fades out, question recenters, Step 2 morph + connector line grow. Options fade in 97.6s, stagger 98.0s, correct pulse 107.2s (word "option"). End fade 108.8s (1.2s).
- **CAMERA MOVEMENT:** The recenter shift.
- **TRANSITIONS:** Morph, recenter, and options fade-in sequenced within ~1s, then hold to the correct-answer pulse.
- **EDUCATIONAL PURPOSE:** Confirm the answer against the four options.
- **VISUAL HIERARCHY:** Correct (green) option is the final visual statement.
- **ATTENTION MANAGEMENT:** Stack + pinned question stay static once settled.
- **MOTION NOTES:** Stack cards and connector lines never fade during this scene.
- **CONTINUITY FROM PREVIOUS SCENE:** Step 2's card is exactly where Scene 11 left it when the morph begins.

---

## PART 3 — Asset List Required

- `illustration/boat.svg`, `illustration/wave.svg`, `illustration/wave-light.svg` (reused from q2/q4, unchanged)
- `_template/assets/serial-num-badge.svg`, `_template/assets/logo.png` (shared)
- No new SVGs — given-mini bubbles, badges, formula tags, and chips are all pure CSS pills, matching q8's technique exactly.

## PART 4 — Animation Complexity Notes

- **Modeled directly on `speed time and distance/q8`:** given-mini bubbles state real numbers early and stay maintained; the river+boat scene only appears once algebra begins; ONE slow pass per direction (not two, unlike an earlier draft) teaches both B/C and the formulas via a badge state machine (`B` → `B+C` → `B` → `B−C`) plus formula-tag pills landing on the exact spoken words. `boatJudder` (rotational wobble during the upstream leg) is copied from q8 verbatim.
- **Long Phase 1 (0–65.7s), short Phase 2:** unlike an earlier attempt that deferred B/C-definition and formula-derivation into the pinned phase (causing a 5-card post-pin stack), this version keeps all of that teaching in Phase 1's illustration, leaving only Given(equations)+Add+Solve — 3 stack cards — for Phase 2. This mirrors q8's own 3-card (G/1/2) post-pin structure.
- **3-item stack column:** uses the same dynamic `layoutStack()` self-measuring helper as q2/q4/q8 (never hand-guessed tops).
- **No new GSAP helpers invented** — every motion uses `apt.*` from `animations.js` plus three local per-question helpers (`riverFlow`, `wakeFlicker`, `boatJudder`) all copied from the q8 pattern.
- **Step 1/2 "note" annotations (added after preview feedback):** both cards had a static multi-second gap between their label line entering and their bold final reveal (Step 1: ~9s during the "why are we adding them?" rhetorical beat; Step 2: ~4s during "so two times B is 26, dividing..."). Fixed by adding a small faded `.note` line (22px, `--topic` gray) synced to its own narration word: Step 1 shows the raw "(B + C) + (B − C)" addition, with the `+C`/`−C` terms pulsing then fading to 0.25 opacity right on the word "cancel" (visually demonstrating the elimination); Step 2 shows "B = 26⁄2" (via `.frac`, never a bare ÷, per the math-notation rule) landing on the word "Dividing." Neither note line uses `.rv`/`apt.textReveal` — they're hand-tweened directly so they can pulse/fade independently without double-animating the same content apt.textReveal already owns.
- **Up-front equation recaps (added after further feedback):** each card also opens with its own governing equation(s) already recapped — Step 1 shows "B + C = 16 · B − C = 10" the instant it enters (75.6s), Step 2 shows "2B = 26" the instant it enters (90.9s) — both as the same faded `.note` style. This means the viewer never has to glance back at the stack column mid-narration to recall what's being added or divided; the reference is already sitting in the active card.

## PART 5 — Master Timeline Overview

```
0.0    Question card lowered-entrance begins
2.2    Question rises to resting slot
7.46   given-mini "Downstream Speed = 16 km/hr" (word "sixteen")
11.86  given-mini "Upstream Speed = 10 km/hr" (word "ten")
18.64  River+boat scene enters; badge shows "B"; river/idle-bob start (continuous to PIN_TIME)
21.48  Emphasize pulse on B badge
25.18  C badge appears (word "c")
26.32  Emphasize pulse on C badge
26.84–30.14  Formula setup pause (no new motion)
30.7   Boat begins downstream glide (x:150→950, 16.7s, facing right)
41.0–43.6  "+C" merge-chip transient
43.82  Badge B→B+C; formula tag "Downstream = B + C" lands (word "b" of "b plus c")
46.72  Emphasize pulse on formula tag
47.42  Boat squish (turn begins)
47.62  Boat flips to face left
48.06  Badge B+C→B
48.4   Boat begins upstream glide (x:950→0, 16s, judder + wake)
57.0–57.8  "−C" resist-chip transient
60.32  Badge B→B−C; formula tag "Upstream = B − C" lands (word "b" of "b minus c")
63.34  Emphasize pulse on formula tag
64.8   PIN_TIME — question+illustration pinFlow glide (0.8s)
65.72  Given card enters (equations); word-reveal 65.72–74.52
74.8   Given morphs to stack (completes 75.6)
75.6   Step 1 card enters ("Add the equations")
84.62–89.36   Word-reveal: 2B = 16 + 10 = 26
89.9   Step 1 morphs to stack (completes 90.7)
90.9   Step 2 card enters ("Divide, solve")
95.24–96.44   Word-reveal: B = 13 (.ans)
97.0   RECENTER_TIME — illustration clears, question recenters, Step 2 morphs to stack
97.6   Options fade in
98.0   Options stagger in
107.2  Correct option (B) pulses (word "option")
108.8  END_FADE — everything fades out together
110.5  End
```
