# Storyboard — Speed, Time and Distance / Q6
"A car is moving at 20 m/sec. What is its speed in km/hr?"

Video length: **49.98s** (voiceover-driven). Single-step unit-conversion problem — one Given card, one Step card, then options.

---

## PART 1: Narration Beat Analysis

| # | Timestamp | Narration | Educational purpose | Attention focus | Visual objective |
|---|-----------|-----------|---------------------|------------------|-------------------|
| 1 | 0.10–2.86 | "So welcome back again. Time for one more problem." | Intro / warm-up | Full-screen center | Question card + serial badge pop in, lowered, hold |
| 2 | 3.50–7.92 | "Now in this problem, we are given that a car is moving at twenty meters per second." | State the question | Question text + illustration | Card rises to rest; car + road build in; "20 m/s" label appears |
| 3 | 8.44–11.78 | "The question is asking us to find its speed in kilometers per hour." | Complete the question | Question text | Car continues driving; question fully read |
| 4 | 12.32–14.82 | "Now first, let us note down the given value." | Transition to Given | Layout reorganizing | Question + illustration glide to pinned slot (pinFlow) |
| 5 | 15.34–21.00 | "Speed of the car is twenty meters per second. We need to find the speed in kilometers per hour." | State given + target | Given card (center) | Given card enters; two lines reveal in sync |
| 6 | 21.54–24.08 | "We should know one important conversion." | Set up the method | Transition | Given morphs to stack; Step 1 card enters |
| 7 | 24.66–32.06 | "To convert meter per second into kilometer per hour, we multiply by eighteen by five, or simply three point six." | Teach the conversion factor | Step 1 card, top line | Conversion factor line reveals (paraphrase + fraction 18/5 + "=3.6") |
| 8 | 32.44–39.86 | "Now let us substitute the given value. Twenty meters per second is equal to twenty into eighteen by five kilometers per hour." | Apply the factor | Step 1 card, bottom line | "20 × 18/5" reveals word-by-word |
| 9 | 40.48–43.68 | "After simplifying this, we get seventy-two kilometers per hour." | Deliver the answer | Step 1 card, answer | "= 72 km/hr" reveals, highlighted blue |
| 10 | 43.72–49.98 | "Therefore, the speed of the car is seventy-two kilometers per hour. Hence, the final answer is option C." | Confirm + reveal answer | Options grid | Step 1 morphs to stack; options fade/stagger in; option C pulses green |

---

## PART 2: Scene-by-Scene Storyboard

### SCENE 1 — Question Reveal
**TIMESTAMP:** 0.0 – 11.9s
**VOICEOVER:** "So welcome back again. Time for one more problem. Now in this problem, we are given that a car is moving at twenty meters per second. The question is asking us to find its speed in kilometers per hour."
**VISUAL OBJECTIVE:** Establish the question and introduce the moving-car illustration.
**SCREEN LAYOUT:** `#q-full-card` centered top (1500px wide, `apt.heroEnterLowered`), `#serial-num` badge top-left overlapping the card, `#illustration` centered below at y=480.
**ON-SCREEN ELEMENTS:** Question card ("A car is moving at **20 m/sec**. What is its speed in **km/hr**?"), serial badge "Q", flat 2D car icon on a simple road line, a "**20 m/s**" value callout above the car.
**ANIMATION DETAILS:**
- t=0.3: `apt.heroEnterLowered(tl, "#q-full-card", 180, 2.86)` — card starts lowered (vertically centered while alone in frame), holds through the intro line.
- t=0.8: serial badge pops in at the same lowered y-offset (mirrors the card's parallel tween, ease `back.out(2)`).
- t=2.86: card + badge rise together to resting position (`power2.inOut`, 0.6s) — timed to the end of "Time for one more problem."
- t=3.6: road + car icon build in — car does a `back.out(1.4)` slide-in from x:-200→0 (0.7s), road uses `apt.roadSweep` (scaleX 0→1, 0.9s) under it.
- t=6.5: "20 m/s" callout fades/scales in above the car (matches the word "twenty" at 6.5s), font-size 26px per the ≥22px illustration-label floor.
- t=6.5→11.9: car does a small bounded drive-loop (x ±15px, period 1.0s, finite reps — never an infinite repeat) so it visibly "drives" rather than sitting static.
**CAMERA MOVEMENT:** None (static 2D composition, all motion is internal).
**TRANSITIONS:** Leads into Scene 2 via `apt.pinFlow` at 11.9s.
**EDUCATIONAL PURPOSE:** Anchor the single given fact (20 m/s) visually before any math starts.
**VISUAL HIERARCHY:** Question text > car+label > badge > background.
**ATTENTION MANAGEMENT:** Only one moving element (the car) — nothing else animates during the read-out so the ear and eye stay aligned.
**MOTION NOTES:** Keep the drive-loop subtle (15px) — it's ambient life, not a focal animation.
**CONTINUITY FROM PREVIOUS SCENE:** Opening scene — no prior scene.

---

### SCENE 2 — Pin Transition
**TIMESTAMP:** 11.9 – 12.7s
**VOICEOVER:** (tail of) "Now first," → "let us note down the given value."
**VISUAL OBJECTIVE:** Reorganize the frame from hero layout to the pinned Phase-2 layout.
**SCREEN LAYOUT:** `#q-pinned` (1275px, left:385px) and `#illus-pinned` (single shrunk car icon + "Speed = 20 m/s" line, centered per the single-icon rule) fade up as the full versions glide out.
**ON-SCREEN ELEMENTS:** Same question (shortened), same car icon (smaller), same value label.
**ANIMATION DETAILS:** `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 11.9)` and `apt.pinFlow(tl, "#illustration", "#illus-pinned", 11.9)` — real glide, 0.8s, `power2.inOut`. `apt.fadeOut(tl, "#serial-num", 11.9, 0.5)` in step with the glide (badge has no pinned counterpart).
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Continuous glide, not a cut.
**EDUCATIONAL PURPOSE:** Frees center stage for the solution cards while keeping the question visible as a constant reference.
**VISUAL HIERARCHY:** Unchanged content, shrinking scale signals "now in solution mode."
**ATTENTION MANAGEMENT:** The glide itself is the only motion — no card competes with it.
**MOTION NOTES:** Question + illustration move together (same start time) so they read as one unit relocating.
**CONTINUITY FROM PREVIOUS SCENE:** The car icon and question card from Scene 1 are the literal same elements shrinking into place — the drive-loop stops the instant the glide tween takes over (loop window ends at 11.9).

---

### SCENE 3 — Given Card
**TIMESTAMP:** 15.34 – 21.9s
**VOICEOVER:** "Speed of the car is twenty meters per second. We need to find the speed in kilometers per hour."
**VISUAL OBJECTIVE:** Record the given value and the target unit as a formal "Given" card.
**SCREEN LAYOUT:** `#card-given .solution-card` centered (left:640px, top:480px, default 640px width — both lines are short so no widening needed).
**ON-SCREEN ELEMENTS:** Chip "Given", two math lines:
  - "Speed = **20 m/s**"
  - "Find: Speed in **km/hr**"
**ANIMATION DETAILS:**
- t=15.34: `apt.cardEnter(tl, "#card-given .solution-card", 15.34)` (0.55s, `back.out(1.4)`).
- `apt.textReveal(tl, "#card-given .math")` called right after — line 1 is a paraphrase of "Speed of the car is twenty meters per second" (no clean word match to "Speed = 20 m/s"), so it's **one line-level `.rv` span**, `data-t="15.339"`. Line 2 is a paraphrase of "We need to find the speed in kilometers per hour" — **one line-level `.rv` span**, `data-t="18.52"`.
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Card holds until its morph to the stack at 21.1s.
**EDUCATIONAL PURPOSE:** Separates "what we know" from "what we compute," matching how the narration itself frames it.
**VISUAL HIERARCHY:** Card > pinned question/illustration (dimmed by scale, not opacity).
**ATTENTION MANAGEMENT:** Nothing else moves while this card is being read.
**MOTION NOTES:** Standard cardEnter only — no extra emphasis (values aren't re-pulsed after textReveal, per the no-double-animation rule).
**CONTINUITY FROM PREVIOUS SCENE:** The pinned layout from Scene 2 is already settled and static by the time this card enters, so the card reads as the next fresh event in an otherwise still frame.

---

### SCENE 4 — Given → Stack, Step 1 Card
**TIMESTAMP:** 21.1 – 45.3s
**VOICEOVER:** "We should know one important conversion. To convert meter per second into kilometer per hour, we multiply by eighteen by five, or simply three point six. Now let us substitute the given value. Twenty meters per second is equal to twenty into eighteen by five kilometers per hour. After simplifying this, we get seventy-two kilometers per hour."
**VISUAL OBJECTIVE:** Teach the conversion factor, then apply it to reach the answer.
**SCREEN LAYOUT:** `#stack-given .stack-card` at left:100px/top:140px (circle "G"). `#card-step1 .solution-card` centered (left:640px/top:460px).
**ON-SCREEN ELEMENTS:** Given card shrinks into the left stack (circle badge "G"). Step 1 chip + math:
  - Line 1: "Multiply by **18/5** (= 3.6)" (conversion factor, fraction display)
  - Line 2: "20 × 18/5 = **72 km/hr**" (substitution + answer)
**ANIMATION DETAILS:**
- t=21.1: `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 21.1)` (0.8s, completes 21.9).
- t=22.9: `apt.cardEnter(tl, "#card-step1 .solution-card", 22.9)` — ~1s breathing gap after the morph completes.
- `apt.textReveal(tl, "#card-step1 .math")`, reveal spans:
  - line-level "Multiply by" → `data-t="24.66"` (start of "To convert...")
  - fraction "18/5" → `data-t="29.459"` (word "eighteen")
  - "(= 3.6)" → `data-t="31.239"` (word "three")
  - "20" → `data-t="35.5"` (word "Twenty")
  - "×" → `data-t="37.599"` (word "into")
  - "18/5" (second instance, plain text) → `data-t="37.959"` (word "eighteen")
  - "=" → `data-t="41.599"` (word "get")
  - "72 km/hr" (`.ans`) → `data-t="41.799"` (word "seventy-two")
- t=45.3: `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 45.3)` (0.8s, completes 46.1). `apt.stackLineGrow(tl, "#line-g-1", 45.3)` fires at the same instant (both G and 1 circles are now on screen).
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Morph is the only scene-to-scene transition, no cuts.
**EDUCATIONAL PURPOSE:** Isolates "the rule" (×18/5) from "the arithmetic" (20×18/5=72) as two reveal beats inside one card, mirroring the narration's own two-part structure.
**VISUAL HIERARCHY:** Active Step 1 card > stack column > pinned question.
**ATTENTION MANAGEMENT:** Word-level reveal on the substitution line keeps eyes moving left-to-right in sync with the spoken numbers.
**MOTION NOTES:** No `apt.emphasize` on "72 km/hr" — the `.ans` color plus its own reveal timing is the only treatment (avoids double-animating the same span per design.md).
**CONTINUITY FROM PREVIOUS SCENE:** The Given card visibly slides/shrinks into the exact stack slot it will occupy for the rest of the video (Scene 3's card is the same DOM element morphing, not a swap), and Step 1 opens in the same center slot Given just vacated.

---

### SCENE 5 — Options Reveal
**TIMESTAMP:** 45.3 – 49.98s
**VOICEOVER:** "Therefore, the speed of the car is seventy-two kilometers per hour. Hence, the final answer is option C."
**VISUAL OBJECTIVE:** Confirm the answer and reveal it among the four options.
**SCREEN LAYOUT:** Stack column (G, 1 circles + connector) stays fixed left. `#q-pinned` recenters via `apt.recenterForOptions` (xShift:160, yShift:180) to align with `.pinned-col`. `.options-grid` (2×2) appears in that column.
**ON-SCREEN ELEMENTS:** Options A) 66 km/hr, B) 78 km/hr, C) 72 km/hr (correct), D) 60 km/hr.
**ANIMATION DETAILS:**
- t=46.3: `apt.fadeOut(tl, "#illus-pinned", 46.3)` (illustration has done its job), `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 46.3)`.
- t=47.6: `apt.fadeIn(tl, "#options-reveal", 47.6)`.
- t=48.0: `apt.optionsStagger(tl, ".opt-btn", 48.0)` (0.45s × 4, stagger 0.12s).
- t=49.4: `apt.correctPulse(tl, ".opt-btn.correct", 49.4)` — lands on the spoken "option C" (49.38–49.98s).
**CAMERA MOVEMENT:** None.
**TRANSITIONS:** Final state — everything remains visible through the end of the audio (49.98s) with no additional fade (the narration ends right as the pulse settles, so an end-fade would either cut the pulse short or run past the last spoken word — matches the "all elements remain visible" pattern for a short video).
**EDUCATIONAL PURPOSE:** Ties the computed "72 km/hr" directly to option C, reinforcing the answer.
**VISUAL HIERARCHY:** Correct option (green) > other options > stack column (still visible for reference) > pinned question.
**ATTENTION MANAGEMENT:** Stagger draws the eye across all four options before the pulse locks it onto C.
**MOTION NOTES:** Stack cards and connector line are NOT faded during this recenter — they stay visible per the standing rule.
**CONTINUITY FROM PREVIOUS SCENE:** Step 1's morph into the stack (end of Scene 4, completing at 46.1) is still settling as the illustration fades and the question recenters at 46.3 — the two beats overlap by design so the frame never goes fully static between scenes.

---

## PART 3: Asset List Required

- `illustration/car.svg` (user-supplied, used as-is — flat 2D car icon, multi-color as provided; not recolored since not requested)
- A simple road line — pure CSS (a thin grey/black bar), no new asset needed
- `_template/assets/serial-num-badge.svg` (shared)
- `_template/assets/logo.png` (shared)
- No other new assets — all math/text is HTML, per design.md components

## PART 4: Animation Complexity Notes

- Simplest topology in the template: **1 Given + 1 Step** (most template examples show 3 steps) — because the problem is a single direct-conversion calculation, not a multi-stage one. No stack lines beyond `line-g-1` (only two circles: G and 1).
- The car's "drive-loop" (Scene 1) and its "roadSweep" entrance are the only per-question custom illustration animations — everything else uses shared `apt.*` helpers.
- No `apt.ambientLoop` used in Phase 2 — the pinned stretch between PIN_TIME (11.9) and the Given card (15.34) is short (3.4s), and between Given's morph and Step 1's answer there's continuous `textReveal` activity, so the pinned area is never idle long enough to need one.
- Total runtime is compressed relative to the template's own ~65s example (this video is ~50s) — all standard durations (0.8s morph, 0.55s cardEnter, etc.) stay fixed; only the gaps between them are shorter.

## PART 5: Master Timeline Overview

```
TIME (s)   EVENT
─────────  ──────────────────────────────────────────────
0.0        Background layers, bottom-strip, topic, logo visible
0.3        heroEnterLowered #q-full-card (lowered, holds)
0.8        Serial badge pops in (lowered, parallel)
2.86       Card + badge rise to resting position
3.6        Road (roadSweep) + car icon slide in
6.5        "20 m/s" callout fades in
6.5–11.9   Car drive-loop (bounded, ±15px)
11.9       pinFlow: q-full-card→q-pinned, illustration→illus-pinned (0.8s); serial-num fades out
15.34      cardEnter #card-given; textReveal (2 line-level spans: 15.339, 18.52)
21.1       morphToStack: card-given → stack-given (G)
22.9       cardEnter #card-step1
           textReveal (8 spans: 24.66, 29.459, 31.239, 35.5, 37.599, 37.959, 41.599, 41.799)
45.3       morphToStack: card-step1 → stack-step1 (1); stackLineGrow #line-g-1
46.3       fadeOut illus-pinned; recenterForOptions q-pinned
47.6       fadeIn #options-reveal
48.0       optionsStagger .opt-btn
49.4       correctPulse .opt-btn.correct
49.98      Voiceover ends — all elements remain visible
```
