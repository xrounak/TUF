# Speed-Time-Distance — Question 7 — Storyboard

**Question:** A bus has a running speed of 54 km/hr and stops for 8 minutes in every hour. What is its average speed including stops?
**Options:** A) 45 km/hr  B) 48 km/hr  C) 50 km/hr  **D) 46.8 km/hr ✓**
**Voiceover duration:** 84.759s (rewritten script, re-transcribed)

---

## PART 1 — Narration Beat Analysis

| # | Time | Narration | Purpose | Attention focus | Visual objective |
|---|------|-----------|---------|------------------|-------------------|
| 1 | 0.12–3.46 | "So welcome back again. Time for one more problem." | Cold open | Center screen | Question card rises into view |
| 2 | 4.06–8.92 | "Now, in this problem, we are given that a bus runs at fifty-four kilometers per hour." | State speed fact | Bus + speed badge | Bus drives on, "54 km/hr" badge pops; Given card's first line reveals |
| 3 | 9.48–15.06 | "But there is one more important point. The bus stops for eight minutes in every one hour." | State stop fact — THE key visual beat | The stop itself | Bus brakes to a hard stop at the sign; badge swaps to "Stopped"; clock pops in; Given card's second line reveals |
| 4 | 15.72–21.70 | "The question is asking us to find the average speed, including these stops. Now, let us understand what this really means." | State the ask, pivot to explanation | Clock still sweeping | Clock hand continues its sweep, bus idles with a small bob |
| 5 | 22.06–30.08 | "In every one hour, the bus stops for eight minutes. So out of every sixty minutes, it is actually moving for only fifty-two minutes. Got it? Perfect." | Derive the running time | Step 1 math | Bus has resumed and exited frame; illustration pins; Given settles into the stack; Step 1 card: "60 − 8 = 52 min" |
| 6 | 30.44–45.02 | "Now let us find the distance covered during these fifty-two minutes. We know the formula, distance is equal to speed into time. The speed of the bus is fifty-four kilometers per hour, and the time for which it is actually moving is fifty-two minutes, which is fifty-two by sixty hours." | Build the distance formula | Step 2 setup | Step 2 card: formula label, then speed/time recap, then "Time = 52/60 hr" |
| 7 | 45.48–56.00 | "So distance covered is equal to speed into time, which is fifty-four into fifty-two by sixty. After simplifying this, we get forty-six point eight kilometers." | Compute distance | Step 2 result | Step 2: "54 × 52/60 = 46.8 km" word-synced |
| 8 | 56.44–78.98 | "Now think about what we have found. In one complete hour, including the eight-minute stop, the bus manages to travel only forty-six point eight kilometers. And average speed simply means how much distance do we cover in one full hour. Since the bus covers only forty-six point eight kilometers in one complete hour, its average speed, including stops," | Reframe distance-in-1-hour as average speed | Step 3 | Step 3 card carries this whole long stretch: "Distance = 46.8 km" → "Average Speed = …" |
| 9 | 79.48–84.76 | "is forty-six point eight kilometers per hour. Hence, the correct answer is option D." | Final answer | Options grid | Step 3 finishes; options fade in; D pulses green |

---

## PART 2 — Scene-by-Scene Storyboard

### SCENE 1 — Question Reveal (0.0s – 6.6s)
**VOICEOVER:** "So welcome back again. Time for one more problem. Now, in this problem, we are given that a bus…"
**VISUAL OBJECTIVE:** Establish the question and set the empty stage (road + stop sign) before the bus itself appears.
**ANIMATION DETAILS:** `#q-full-card` lowered-start hero entrance (`apt.heroEnterLowered`, offsetY 180, riseTime 3.4s — end of "Time for one more problem."). Serial badge pops at 0.8s, mirrors the card's rise at 3.4s. At 3.7s, `#road` sweeps in (`apt.roadSweep`, 0.9s); `#bus-stop-sign` pops in (`apt.cardEnter`) at 4.4s.
**CONTINUITY:** Opening scene, no prior beat.

### SCENE 2 — Bus Arrives, Given Card Opens (5.0s – 11.3s)
**VOICEOVER:** "…a bus runs at fifty-four kilometers per hour."
**VISUAL OBJECTIVE:** Show the bus in motion, tie "54 km/hr" to it directly, and open the Given card recap in the same frame.
**ANIMATION DETAILS:** `#card-given` (`solution-card`, positioned below the illustration — both top offsets are manual tweaks the user made directly in `index.html`, left as-is) pops in at 5.0s, ~1.6s before the bus itself starts moving. `#bus-unit` fades in and translates x from −230px to 640px (STOP_X) over 6.6s→11.3s, `power1.out`. `#speed-badge` pops at 7.2s (matches "fifty-four" word start 7.199s). Bounded motion-line flicker (6.9s→11.3s, no infinite repeat). Given's line 1 ("Running Speed = 54 km/hr") reveals at 6.62s — the phrase start of "runs at fifty-four…".
**CONTINUITY:** Road/sign already settled from Scene 1; the bus now drives onto that stage.

### SCENE 3 — The Stop (11.3s – 21.6s) ★ key visual beat
**VOICEOVER:** "But there is one more important point. The bus stops for eight minutes in every one hour. The question is asking us to find the average speed, including these stops. Now, let us understand what this really means."
**VISUAL OBJECTIVE:** The crux of the problem — make the 8-minute stop physically legible, not just spoken, and hold through the "average speed" framing beat.
**ANIMATION DETAILS:**
- 11.3s: brake squash (`scaleX 1→1.07`, `scaleY 1→0.93`, yoyo) + two `.skid-mark` flashes.
- 11.6s: `#speed-badge` fades out / `#stop-badge` ("Stopped") fades in.
- 11.8s: `#stop-clock` pops in (`apt.cardEnter`) and `#stop-label` fades in alongside it.
- 11.54s: Given's line 2 ("Stop Time = 8 min every hour") reveals — phrase start of "The bus stops for eight minutes…".
- 12.1s→21.3s: `#clock-hand` rotates 0°→300° on a single bounded tween (`ease:"none"`) — the whole 9.2s stop-and-explanation stretch, not a loop.
- 14.0s→21.0s: `apt.ambientLoop` gives the parked `#bus-icon` a small 4px bob so it doesn't read as dead during the longer "what this really means" narration.
**CONTINUITY:** Direct kinetic continuation of Scene 2's drive-in — same `#bus-unit`, translate → squash.

### SCENE 4 — Resume, Exit, and the Pin (21.6s – 25.3s)
**VOICEOVER:** "In every one hour, the bus stops for eight minutes. So out of every sixty minutes, it is actually moving for only fifty-two minutes. Got it? Perfect." *(narration continues into Scene 5 — the bus itself has already left frame by the time these words land)*
**VISUAL OBJECTIVE:** Close the illustration loop (bus back to running speed, drives off) and hand off cleanly into the pinned/math phase.
**ANIMATION DETAILS:**
- 21.6s: clock + label fade out; badge swaps back to "54 km/hr"; small forward lurch.
- 21.8s→24.3s: `#bus-unit` translates to 1850px (exits past `#root`'s clipped edge), `power1.in`, motion-lines resume.
- PIN_TIME = 24.5s: `apt.pinFlow` glides `#q-full-card`→`#q-pinned` and `#illustration`→`#illus-pinned` (0.8s) — real glide, not a cut. `#serial-num` fades out in step.
- ILLUSTRATION_OUT_TIME = 25.3s (= PIN_TIME + 0.8, the instant the full illustration is hidden): `#card-given` **morphs** (`apt.morphToStack`, not a fade) into `#stack-given`, and Step 1's card enters center — same beat.
**CONTINUITY:** The bus is fully off-frame nearly a full second before the pin fires, so the pin reads as "the empty road glides into its pinned slot," not an interrupted exit.

### SCENE 5 — Step 1: Running Time (25.3s – 30.3s)
**VOICEOVER:** "…the bus stops for eight minutes. So out of every sixty minutes, it is actually moving for only fifty-two minutes. Got it? Perfect."
**VISUAL OBJECTIVE:** Compute the actual running time inside the hour. (Note: this script no longer says "sixty minus eight" verbatim, so the card uses a label + result rather than forcing an exact word-for-word subtraction match.)
**ON-SCREEN ELEMENTS:** `chip` "Step 1", line 1 (line-level label) "Every hour: 60 min − 8 min stop", line 2 (word-level result) "= 52 min running".
**ANIMATION DETAILS:** Line 1 reveals at 25.3s (immediate, with the card — it's a label, not a narration-matched line). Line 2 reveals at 28.16s, matching the word "fifty-two" in "moving for only fifty-two minutes."
**CONTINUITY:** Given's stack morph and Step 1's card entrance land on the exact same beat (25.3s) — the moment the bus scene leaves frame, so the video reads as "the illustration hands off directly to the math."

### SCENE 6 — Step 2: Distance Covered (31.1s – 56.2s)
**VOICEOVER:** "Now let us find the distance covered during these fifty-two minutes. We know the formula, distance is equal to speed into time. The speed of the bus is fifty-four kilometers per hour, and the time for which it is actually moving is fifty-two minutes, which is fifty-two by sixty hours. So distance covered is equal to speed into time, which is fifty-four into fifty-two by sixty. After simplifying this, we get forty-six point eight kilometers."
**VISUAL OBJECTIVE:** Build and solve the core multiplication — the longest single card (~25s) since it carries the full narrated derivation.
**ON-SCREEN ELEMENTS:** `chip` "Step 2", four lines in reveal order: "Distance = Speed × Time" (formula label), "Speed = 54 km/hr", "Time = 52/60 hr" (fraction), then "54 × 52/60 = 46.8 km".
**ANIMATION DETAILS:** `apt.morphToStack` Step1→stack at 30.3s + `apt.stackLineGrow` on `#line-g-1`. `apt.cardEnter` Step 2 at 31.1s. `apt.textReveal`: "Distance = Speed × Time"@34.98 (phrase start "distance is equal to speed into time"), "Speed = 54 km/hr"@37.40 (phrase start "The speed of the bus is fifty-four…"), "Time = 52/60 hr"@41.20 (phrase start "the time for which it is actually moving…"), "54"@48.56, "×"@49.44, fraction "52/60"@49.72, "="@52.08, "46.8 km" (`.ans`)@53.82.
**CONTINUITY:** Step 1's box is still completing its shrink into the stack as Step 2's card begins fading in 0.8s later — reads as one continuous left-to-right handoff.

### SCENE 7 — Step 3: Average Speed (57.0s – 81.4s)
**VOICEOVER:** "Now think about what we have found. In one complete hour, including the eight-minute stop, the bus manages to travel only forty-six point eight kilometers. And average speed simply means how much distance do we cover in one full hour. Since the bus covers only forty-six point eight kilometers in one complete hour, its average speed, including stops, is forty-six point eight kilometers per hour. Hence, the correct answer is option D."
**VISUAL OBJECTIVE:** Reframe "distance covered in 1 hour" as "average speed" — the longest card in the video (~24s), since the new script's phrase-detection merged most of this stretch into one giant run-on phrase with very few pauses.
**ON-SCREEN ELEMENTS:** `chip` "Step 3", line 1 "In this 1 hr (with the stop):", line 2 "Distance = 46.8 km", line 3 "Since Time = 1 hour:", line 4 (`.ans`) "Average Speed = 46.8 km/hr".
**ANIMATION DETAILS:** `apt.morphToStack` Step2→stack at 56.2s + `apt.stackLineGrow` on `#line-1-2`. `apt.cardEnter` Step 3 at 57.0s. `apt.textReveal`: line 1@58.04 (phrase start "In one complete hour, including the eight-minute stop…"), line 2@64.60 (word "forty-six", first restatement), line 3@72.70 (word "Since"), line 4@79.72 (word "forty-six", final restatement in "is forty-six point eight kilometers per hour").
**CONTINUITY:** Step 2's box (the previous longest-held card) is still shrinking into the stack, with the 1→2 connector line growing in the same beat.

### SCENE 8 — Options Reveal (81.4s – 84.76s+)
**VOICEOVER:** "…is forty-six point eight kilometers per hour. Hence, the correct answer is option D."
**VISUAL OBJECTIVE:** Reveal all four options and land on D, right as the audio itself ends.
**ANIMATION DETAILS:** `apt.morphToStack` Step3→stack at 81.4s + `apt.stackLineGrow` on `#line-2-3`, same moment `apt.fadeOut` on `#illus-pinned` and `apt.recenterForOptions` on `#q-pinned` fire. `apt.fadeIn` `#options-reveal` at 82.3s, `apt.optionsStagger` at 82.8s, `apt.correctPulse` on option D at 84.0s (bracketing the audio's final word "D." at 84.66–84.76s). `apt.fadeOut` on `#root > div` at 86.0s (1.2s) for the end.
**CONTINUITY:** Step 3's shrink into the stack and the final connector line's growth happen in the same beat as the recenter/illustration-clear.

---

## PART 3 — Asset List Required

- `bus.svg` (provided, in `illustration/`) — already brand-colored (`#6373db` body, `#e2e5ff` windows, `#141515` outline, `#949494`/`#5b6478` wheels/trim) — used as-is, mirrored horizontally (`transform: scaleX(-1)`) on both `#bus-icon` and `#illus-pinned-icon` so it faces the direction of travel.
- No other new image assets. Road, bus-stop sign, speed/stop badges, clock face, motion-lines, and skid-marks are all pure CSS/HTML from existing design-system tokens.

## PART 4 — Animation Complexity Notes

- All standard card/stack/morph/pin animations use only `animations.js` helpers, unmodified.
- Given morphs into its stack slot (`apt.morphToStack`) rather than fading — consistent with every other Given/Step transition in the video.
- The illustration (Scenes 1–4) uses custom per-question GSAP tweens; every bounded-repeat tween (motion-lines) computes its rep count from a fixed time window, and the clock-hand sweep is a single non-repeating tween — both seek-safe.
- Stack column gaps are computed at build time (`layoutStack()`) from each card's real rendered height, not hand-guessed.
- Step 1's content deliberately uses a label + word-synced result instead of a full word-for-word subtraction reveal, because the rewritten script no longer says "sixty minus eight" verbatim — it paraphrases ("out of every sixty minutes, it is actually moving for only fifty-two minutes"). Forcing a literal word match here would have meant revealing "60" and "8" out of their on-screen reading order.

## PART 5 — Master Timeline Overview

```
0.0    Question card rises in (lowered start)
3.4    Question card settles at rest
3.7    Road sweeps in, bus-stop sign pops in
5.0    Given card enters (below the illustration, same frame)
6.6    Bus drives in, "54 km/hr" badge attached
6.62   Given line 1 reveals ("Running Speed = 54 km/hr")
7.2    Speed badge pop (matches "fifty-four")
11.3   Brake squash — bus stops at the sign
11.54  Given line 2 reveals ("Stop Time = 8 min every hour")
11.6   Speed badge → "Stopped" badge
11.8   Clock + label pop/fade in beside the sign
12.1–21.3  Clock hand sweeps (single bounded tween)
14.0–21.0  Ambient bob on the parked bus icon
21.6   "Stopped" badge → speed badge, clock + label fade out, bus lurches forward
21.8–24.3  Bus drives off-frame right
24.5   PIN_TIME — question + full illustration glide into pinned header
25.3   ILLUSTRATION_OUT_TIME — Given morphs into the stack, Step 1 enters center, same beat
28.16  Step 1 result reveals ("= 52 min running")
30.3   Step 1 → stack
31.1   Step 2 enters (long derivation card, ~25s)
53.82  Step 2 result reveals ("46.8 km")
56.2   Step 2 → stack
57.0   Step 3 enters (long reframing card, ~24s)
79.72  Step 3 final answer reveals ("Average Speed = 46.8 km/hr")
81.4   Step 3 → stack, illustration recap clears, question recenters
82.3   Options fade in
82.8   Options stagger
84.0   Option D pulses green
84.76  Audio ends
86.0   End fade (all elements, 1.2s)
```
