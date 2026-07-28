# Trains, Streams and Boats — Q21 Storyboard

**Question:** A launch completes a 30 km downstream leg in 2 hours and the 30 km upstream return in 3 hours. Find the launch's still-water speed.
**Options:** A) 12.5 km/h (correct) B) 11 km/h C) 14 km/h D) 15.5 km/h
**Voiceover duration:** 114.98s

---

## PART 1 — Narration Beat Analysis

| # | Time | Narration | Purpose | Attention Focus | Visual Objective |
|---|------|-----------|---------|------------------|-------------------|
| 1 | 0.1–4.68 | "So welcome back again. It's time to solve one more problem." | Cold open | Center screen | Question card rises from lowered rest position |
| 2 | 5.24–16.66 | "Now in this problem, we are given the time taken by a launch to travel downstream and upstream. The question is asking us to find the speed of the launch in still water." | State the problem | Question text | Question card fully settled, numbers/key term highlighted |
| 3 | 17.52–24.09 | "Before solving, let us first understand these terms. Still water means the water is not flowing at all." | Define "still water" concept | Empty stage (no illustration yet) | Sets up why B is about to appear |
| 4 | 24.72–29.72 | "The speed of the launch in still water is its own speed. Let us take the speed as B." | Introduce variable B | River + launch enter | River scene + boat + "B" badge assemble |
| 5 | 30.2–39.56 | "Now rivers always have a flow. The speed of this flowing water is called the current or stream speed. Let us take it as C." | Introduce variable C | Flow arrows + C badge | Flow chevrons and "C" badge appear |
| 6 | 40.28–50.38 | "Now what happens when the launch moves with the flow of the river? The river pushes the launch forward, so the launch becomes faster. This is called downstream." | Teach downstream direction | Boat gliding right | Boat travels right, wake trails, "+C" chip pops |
| 7 | 50.82–52.92 | "So downstream speed equals B plus C." | Lock in formula | Formula tag | "Downstream = B + C" tag lands, badge flips to B+C |
| 8 | 53.66–59.44 | "Now what if the launch moves against the flow? The river tries to slow it down. This is called upstream." | Teach upstream direction | Boat gliding left | Boat turns, glides left, judders against current, "−C" chip pops |
| 9 | 59.9–63.4 | "So upstream speed equals B minus C. Now this part is clear," | Lock in formula | Formula tag | "Upstream = B − C" tag lands, badge flips to B−C |
| 10 | 63.98–65.74 | "and we can solve the question very easily." | Transition beat | Pinned layout alone | Question + illustration glide to pinned slot |
| 11 | 66.3–70.52 | "The launch covers thirty kilometer downstream in two hours." | State downstream given values | Given card | Given card enters with 30 km / 2 hr |
| 12 | 71.02–75.84 | "So its downstream speed is thirty divided by two, equals fifteen kilometers per hour." | Compute downstream speed | Step 1 card | 30 ÷ 2 = 15 km/hr revealed |
| 13 | 76.5–85.84 | "Similarly, it covers thirty kilometer upstream in three hours. So its upstream speed is thirty divided by three, equals ten kilometers per hour." | State + compute upstream speed | Step 2 card | 30 km / 3 hr → 30 ÷ 3 = 10 km/hr |
| 14 | 86.36–98.56 | "Now we already know downstream speed equals B plus C, which is fifteen, and upstream speed equals B minus C, which is ten. Adding both, B plus C minus B minus C equals fifteen plus ten." | Recap + set up elimination | Step 3 card (recap + add) | Both equations recapped, then added |
| 15 | 98.92–106.39 | "Here C gets canceled from both sides, so two B equals twenty-five. After solving this, B equals twelve point five kilometers per hour." | Solve for B | Step 3 card (solve) | C terms fade/cancel, 2B=25, B=12.5 km/hr revealed |
| 16 | 107.24–112.3 | "Hence, the speed of the launch in still water is twelve point five kilometers per hour." | Confirm final answer | Step 3 answer | Answer line holds, pulses |
| 17 | 112.86–114.98 | "So the correct option is option A." | Reveal correct option | Options grid | Options stagger in, A pulses green |

---

## PART 2 — Scene-by-Scene Storyboard

### SCENE 1 — Cold Open + Question Reveal
**Timestamp:** 0–4.68s
**Voiceover:** "So welcome back again. It's time to solve one more problem."
**Visual Objective:** Establish the question card as the sole focus, rising into its resting position.
**Screen Layout:** Dotted-grid background, bottom strip, topic name "Trains, Streams and Boats" bottom-left, logo bottom-right — all present from frame 0. Question card centered, starting 180px lower than its resting slot (vertically centered while alone in frame).
**On-Screen Elements:** `#q-full-card` (empty of illustration), `#serial-num` badge (top-left, tracks the card's lowered position).
**Animation Details:** `apt.heroEnterLowered(tl, "#q-full-card", 180, 4.68)` — card scales/fades in at 0.3s or lowered, rises to rest at 4.68s. Serial badge mirrors the same y-offset via its own parallel tween, then rises in tandem.
**Camera Movement:** None (static frame, motion lives in the elements).
**Transitions:** N/A (opening scene).
**Educational Purpose:** Calm, non-distracting open so the viewer reads the full question next.
**Visual Hierarchy:** Question card > badge > background.
**Attention Management:** Nothing else on screen — no illustration yet, no solution cards.
**Motion Notes:** `back.out(1.4)` easing on the entrance keeps it lively without overshooting into the illustration zone below.
**Continuity From Previous Scene:** N/A — first scene.

### SCENE 2 — Question Settles + Problem Stated
**Timestamp:** 5.24–16.66s
**Voiceover:** "Now in this problem, we are given the time taken by a launch to travel downstream and upstream. The question is asking us to find the speed of the launch in still water."
**Visual Objective:** Let the viewer read the full question at rest; numbers and the target phrase pop in primary blue.
**Screen Layout:** Question card at rest (top:80px, centered, 1500px wide).
**On-Screen Elements:** `.q-text` with `<span class="num">still-water speed</span>` and the `30 km` / `2 hours` / `3 hours` values highlighted.
**Animation Details:** No new animation — card is already at rest from Scene 1's rise. Text is static (design system doesn't word-reveal the Phase-1 hero question).
**Camera Movement:** None.
**Transitions:** N/A — same clip as Scene 1.
**Educational Purpose:** Full problem statement read before any concept teaching begins.
**Visual Hierarchy:** Question text is the only active element.
**Attention Management:** Blank canvas below the card — deliberate pause before the river/launch scene assembles.
**Motion Notes:** None.
**Continuity From Previous Scene:** Direct continuation — the card that just rose to rest is now being read; no new motion.

### SCENE 3 — River + Launch Assemble Early (Still, No Flow)
**Timestamp:** 5.24–20.08s
**Voiceover:** "Now in this problem, we are given the time taken by a launch to travel downstream and upstream. The question is asking us to find the speed of the launch in still water. Before solving, let us first understand these terms."
**Visual Objective:** Fill what would otherwise be a blank canvas while the problem is read — the river scene and launch icon settle into frame immediately, but completely motionless (no water scroll, no boat bob, no badge text). A still tableau, on purpose.
**Screen Layout:** `#illustration` (left:50%, top:400px, 1500px×280px) containing `#river-scene` (static water strip) and `#boat-unit` (launch icon, badge empty).
**On-Screen Elements:** `#river-scene` (wave tiles present but not scrolling), `#boat-icon` (boat.svg), `#b-badge` pill showing nothing (`#b-state-blank`).
**Animation Details:** `apt.cardEnter(tl, "#river-scene", 5.24)`, `apt.cardEnter(tl, "#boat-unit", 5.24)` (0.55s back.out(1.4)) — both pop in and then simply sit still. No `riverFlow()`, no `ambientLoop()` yet.
**Camera Movement:** None.
**Transitions:** Illustration enters as a fresh element under the already-settled question card.
**Educational Purpose:** Gives the viewer something to look at while the problem is read, without pre-empting any concept — the scene is neutral until "still water" is defined.
**Visual Hierarchy:** Question card (being read) > illustration (present but quiet).
**Attention Management:** Zero motion here is deliberate — it sets up Scene 4's "still water" payoff by already being still.
**Motion Notes:** `back.out(1.4)` entrance only; everything after that is frozen.
**Continuity From Previous Scene:** The question card hasn't moved since Scene 1's rise — the illustration populates the previously-empty zone below it, so nothing already on screen is disturbed.

### SCENE 4 — "Still Water" Payoff, Then B Introduced
**Timestamp:** 20.59–29.72s
**Voiceover:** "Still water means the water is not flowing at all. The speed of the launch in still water is its own speed. Let us take the speed as B."
**Visual Objective:** The badge reads "Still" for the literal duration of the "still water" definition — the motionless scene from Scene 3 now has a label confirming what the viewer is already seeing. Then, the instant B is named, the badge swaps to "B".
**Screen Layout:** Unchanged — same `#illustration` from Scene 3, still motionless.
**On-Screen Elements:** `#b-badge` pill switching text content via its internal state spans.
**Animation Details:** `#b-state-blank`→`#b-state-still` fade swap at 20.59 (word "Still"). `#b-state-still`→`#b-state-solo1` ("B") fade swap at 24.72 (start of "The speed of the launch..."). `apt.emphasize(tl, "#b-badge", 29.56)` pulses the badge exactly on the spoken word "B."
**Camera Movement:** None.
**Transitions:** Plain opacity crossfades between badge states (0.25s each), no box motion.
**Educational Purpose:** Ties the abstract variable B to the concrete, already-visible launch at the exact moment it's named — and the "Still" label makes the preceding stillness legible rather than looking like a stalled animation.
**Visual Hierarchy:** Badge text is the only active element; river and boat remain still (flow doesn't start until Scene 5).
**Attention Management:** The badge pulse is the only accent — everything else stays calm so "B" reads as the new information.
**Motion Notes:** `power2.out` yoyo for the badge pulse; plain fades for the state swaps.
**Continuity From Previous Scene:** Same static river/boat from Scene 3 — only the badge's internal text state changes, nothing new enters the frame.

### SCENE 5 — Flow Starts, C (Current) Introduced
**Timestamp:** 30.2–39.56s
**Voiceover:** "Now rivers always have a flow. The speed of this flowing water is called the current or stream speed. Let us take it as C."
**Visual Objective:** The water visibly comes alive on the literal word "flow" — the stillness from Scenes 3–4 breaks exactly here, then the second variable is introduced.
**Screen Layout:** `#flow-arrows` (three chevrons, left:1060px top:220px) and `#c-badge` (pill, left:700px top:76px within the illustration).
**On-Screen Elements:** `.chevron` × 3, `#c-badge` showing "C", river track tiles now scrolling, boat now bobbing.
**Animation Details:** `riverFlow()` starts the seamless wave-tile scroll at 30.2 ("Now, rivers always have a flow"). `apt.ambientLoop(tl, "#boat-icon", 30.2, PIN_TIME)` starts the boat's ambient bob in step with the flow. `apt.cardEnter(tl, "#flow-arrows", 32.2)` (when "flowing water" is spoken), `apt.cardEnter(tl, "#c-badge", 38.04)` ("let us take it as"), `apt.emphasize(tl, "#c-badge", 39.54)` on the spoken "C."
**Camera Movement:** None.
**Transitions:** The flow's sudden start (after ~25s of stillness) is itself the transition — it's the visual payoff of "still water" ending.
**Educational Purpose:** Establishes C as the river's own speed, independent of the boat, at the exact moment the water starts moving.
**Visual Hierarchy:** C badge and chevrons now share top billing with the B badge.
**Attention Management:** The flow starting is the headline event of this scene — everything else (chevrons, C badge) builds on it.
**Motion Notes:** Same `back.out(1.4)`/`power2.out` vocabulary as Scene 4 for consistency; `riverFlow`'s conveyor scroll is linear (`ease:"none"`) so it reads as constant current speed.
**Continuity From Previous Scene:** River and boat from Scenes 3–4 are the same static elements — this scene is the moment they stop being static.

### SCENE 6 — Downstream Leg (Boat Glides Right)
**Timestamp:** 40.28–52.92s
**Voiceover:** "Now what happens when the launch moves with the flow of the river? The river pushes the launch forward, so the launch becomes faster. This is called downstream. So downstream speed equals B plus C."
**Visual Objective:** Physically demonstrate "downstream" — the boat visibly speeds up in the direction of flow, then the formula locks in.
**Screen Layout:** `#boat-unit` translates right (x: 0 → 800) across the river strip.
**On-Screen Elements:** `#merge-chip` ("+C") pops beside the boat mid-glide; `#b-badge` internal state swaps from "B" to "B + C"; `#formula-downstream` tag ("Downstream = B + C") appears above the scene.
**Animation Details:** `tl.to("#boat-unit", {x:800, duration:10.1, ease:"power1.out"}, 40.28)`. `wakeFlicker("left", 40.28, 50.38)` (local helper — bounded opacity flicker on 3 wake-lines). `merge-chip` fromTo pops in around 43.64 (on "pushes... forward"), fades out ~48.44 (on "called downstream"). `b-state` solo→sum swap at 52.22 (word "B" of "B plus C"). `apt.cardEnter(tl, "#formula-downstream", 50.82)`, `apt.emphasize(tl, "#formula-downstream", 52.76)` (on "C.").
**Camera Movement:** None — the boat itself carries the motion.
**Transitions:** N/A.
**Educational Purpose:** Makes "downstream = current helps" viscerally clear before the formula is stated, so the formula reads as a summary, not a cold fact.
**Visual Hierarchy:** Boat's rightward motion is the primary read; formula tag is the payoff at the end.
**Attention Management:** Only one thing moves (the boat) — badge/chip/tag changes are all synced to specific spoken words so nothing feels random.
**Motion Notes:** `power1.out` easing gives the glide a gentle deceleration into the formula reveal. Wake flicker uses a bounded `sine.inOut` yoyo (never infinite repeat, per animations.js convention).
**Continuity From Previous Scene:** Boat and badges are the exact same elements from Scenes 4–5, now set into their first motion — no new objects introduced, only the ones already on screen start moving.

### SCENE 7 — Turn + Upstream Leg (Boat Glides Left)
**Timestamp:** 53.66–63.4s
**Voiceover:** "Now what if the launch moves against the flow? The river tries to slow it down. This is called upstream. So upstream speed equals B minus C. Now this part is clear,"
**Visual Objective:** Mirror Scene 6 for the opposite direction — the boat struggles against the current, then the second formula locks in.
**Screen Layout:** Boat flips horizontally and glides back left (x: 800 → 0).
**On-Screen Elements:** `#resist-chip` ("−C") pops in during the glide; `#b-badge` state swaps "B" → "B − C"; `#formula-upstream` tag ("Upstream = B − C") appears.
**Animation Details:** Turn beat (52.92–53.66s): `scaleY` squish-and-release yoyo + `boat-icon` `scaleX:-1` flip. `tl.to("#boat-unit", {x:0, duration:5.78, ease:"power1.inOut"}, 53.66)`. `boatJudder(53.66, 59.44)` (local helper — small bounded rotation wobble, sells "current resisting"). `wakeFlicker("right", 53.66, 59.44)`. `resist-chip` pops ~55.1, fades ~58.48. `b-state` sum→solo2 at 53.66, solo2→diff at 61.02 (word "B" of "B minus C"). `apt.cardEnter(tl, "#formula-upstream", 59.9)`, `apt.emphasize(tl, "#formula-upstream", 62.22)` (on "C.").
**Camera Movement:** None.
**Transitions:** N/A.
**Educational Purpose:** The judder + slower implied pace (same duration, opposite ease) sells "the current resists" without needing narration to over-explain.
**Visual Hierarchy:** Boat motion primary, formula tag secondary payoff — mirrors Scene 6 exactly so the two formulas read as a matched pair.
**Attention Management:** Same single-focus rule as Scene 6.
**Motion Notes:** `boatJudder` uses bounded rotation (±2.5°) — a finite repeat count computed from the window, never `repeat:-1` (breaks seek-based rendering per animations.js doc).
**Continuity From Previous Scene:** The boat that just glided right in Scene 6 turns in place (no teleport) and retraces the same river strip leftward — same object, same track, opposite direction.

### SCENE 8 — Pin Flow (Transition to Solving)
**Timestamp:** 63.4–65.74s
**Voiceover:** "...this part is clear, and we can solve the question very easily."
**Visual Objective:** Collapse the full-screen question + illustration into their compact, pinned Phase-2 layout, freeing the center stage for solution cards.
**Screen Layout:** `#q-full-card`/`#illustration` glide+scale into `#q-pinned` (left:385px, top:30px, 1275px wide) and `#illus-pinned` (left:280px, top:190px, mini river + boat).
**On-Screen Elements:** Same elements as Scenes 4–7, now migrating to their pinned slots. `#serial-num` fades out (no pinned counterpart).
**Animation Details:** `PIN_TIME = 63.4`. `apt.pinFlow(tl, "#q-full-card", "#q-pinned", 63.4)`, `apt.pinFlow(tl, "#illustration", "#illus-pinned", 63.4)` — each a real measured glide (0.8s, power2.inOut), not a fade swap. `apt.fadeOut(tl, "#serial-num", 63.4, 0.5)`.
**Camera Movement:** The glide itself reads as the "camera" pulling back to a wide, organized layout.
**Transitions:** This *is* the transition — one continuous glide, not a cut.
**Educational Purpose:** Signals "concept-teaching is over, solving begins now" without a jarring cut.
**Visual Hierarchy:** During the glide, the moving elements are the only focus; nothing else changes.
**Attention Management:** The empty ~0.5s beat after the glide lands (65.74s) before the Given card opens (66.3s) is intentional breathing room, matching the "and we can solve... very easily" narration beat.
**Motion Notes:** `power2.inOut` easing, per animations.js `pinFlow`.
**Continuity From Previous Scene:** The exact question card and illustration from Scene 7 (still mid-formula-glow) are what glide into the pinned slot — no new elements, pure repositioning.

### SCENE 9 — Given: Downstream Distance & Time
**Timestamp:** 66.3–70.52s
**Voiceover:** "The launch covers thirty kilometer downstream in two hours."
**Visual Objective:** State the first concrete numbers of the whole video.
**Screen Layout:** `#card-given .solution-card` center stage (left:640px, top:480px).
**On-Screen Elements:** `.chip` "Given", `.math` with two lines: "Distance (Downstream) = 30 km" and "Time = 2 hr".
**Animation Details:** `apt.cardEnter(tl, "#card-given .solution-card", 66.3)`. `apt.textReveal(tl, "#card-given .math")` — line-level `.rv` spans at 67.78 ("thirty" → "30 km" line) and 69.94 ("two" → "2 hr" line), since these are paraphrased restatements, not verbatim word matches.
**Camera Movement:** None.
**Transitions:** Card pops in over the now-pinned, idle layout.
**Educational Purpose:** First hard data point — anchors the abstract B/C formulas to a real scenario.
**Visual Hierarchy:** Given card is the sole active element; pinned illustration continues its idle mini-loop in the background (ambientLoop + riverFlow keep it alive, not static).
**Attention Management:** Nothing distracts from the two numbers landing.
**Motion Notes:** Standard `cardEnter` (0.55s `back.out(1.4)`) + plain opacity `textReveal` (0.25s `power2.out`), no slide/scale on the text itself.
**Continuity From Previous Scene:** Opens directly into the empty pinned-stage beat left by Scene 8 — the "breathing gap" resolves the instant real numbers are spoken.

### SCENE 10 — Step 1: Downstream Speed
**Timestamp:** 71.02–75.84s (card enters 71.02; morph out of Given lands just before, ~70.0–70.8)
**Voiceover:** "So its downstream speed is thirty divided by two, equals fifteen kilometers per hour."
**Visual Objective:** Compute the first speed value.
**Screen Layout:** `#card-step1 .solution-card` center (left:640px, top:460px). Given card has already morphed into `#stack-given` in the left column.
**On-Screen Elements:** `.chip` "Step 1", `.math`: "30 ÷ 2 = 15 km/hr".
**Animation Details:** `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 70.0)` (0.8s, completes 70.8 — lands just ahead of the 71.02 narration so the stack card is settled, not mid-morph, when Step 1's own content starts). `apt.cardEnter(tl, "#card-step1 .solution-card", 71.02)`. `apt.textReveal` word-level `.rv` spans: "30"@72.4, "÷"@72.84, "2"@73.44, "="@74.24, hi "15 km/hr"@74.58.
**Camera Movement:** None.
**Transitions:** Morph (box slide+shrink+recolor, text crossfade) — the standard 0.8s pattern.
**Educational Purpose:** Shows the division mechanically, word-synced, so the viewer's eye lands on each number exactly as it's spoken.
**Visual Hierarchy:** Step 1 card > stack column (now holding Given) > pinned question/illustration.
**Attention Management:** Given's move to the stack happens in the "dead air" right before "So its downstream speed..." starts, so it never competes with new information.
**Motion Notes:** Tight timing (only ~0.2s between morph completion and Step 1's entrance) is intentional — it matches the narration's own brisk pacing at this point (no gap in the voiceover between the given statement and the calculation).
**Continuity From Previous Scene:** The Given card that was center-stage in Scene 9 is the literal object performing the morph — same DOM element, now sliding into the stack as Step 1 takes its place.

### SCENE 11 — Step 2: Upstream Distance, Time & Speed
**Timestamp:** 76.5–85.84s (card enters 76.5; Step 1 morph lands ~75.9–76.7)
**Voiceover:** "Similarly, it covers thirty kilometer upstream in three hours. So its upstream speed is thirty divided by three, equals ten kilometers per hour."
**Visual Objective:** Mirror Scene 9+10 combined for the upstream leg — given values AND the resulting speed, in one card (matches the narration's own combined pacing for this leg).
**Screen Layout:** `#card-step2 .solution-card` center (left:600px, top:440px, width:720px to fit the extra line).
**On-Screen Elements:** `.chip` "Step 2", `.math`: "Distance = 30 km, Time = 3 hr" (line 1) then "30 ÷ 3 = 10 km/hr" (line 2).
**Animation Details:** `apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 75.9)`. `apt.cardEnter(tl, "#card-step2 .solution-card", 76.5)`. `apt.textReveal`: line-level span for "30 km, 3 hr" @ 77.78 ("thirty"), then word-level for the equation: "30"@81.82, "÷"@82.24, "3"@82.92, "="@83.8, hi "10 km/hr"@84.54.
**Camera Movement:** None.
**Transitions:** Standard morph.
**Educational Purpose:** Completes the second data point + its derived speed in one continuous beat, exactly as the narration does.
**Visual Hierarchy:** Step 2 card > stack (now Given + Step 1) > pinned layout.
**Attention Management:** Two-line card is still short enough to read in the ~9s the narration spends on it.
**Motion Notes:** Same word/line-level `textReveal` vocabulary as Scene 9–10 for consistency.
**Continuity From Previous Scene:** Step 1's card performs the same morph-to-stack motion Given did in Scene 10 — the pattern is now established and reads as a rhythm.

### SCENE 12 — Step 3: Recap, Add, Solve for B
**Timestamp:** 86.36–106.39s (card enters 86.36; Step 2 morph lands ~85.9–86.7)
**Voiceover:** "Now we already know downstream speed equals B plus C, which is fifteen, and upstream speed equals B minus C, which is ten. Adding both, B plus C minus B minus C equals fifteen plus ten. Here C gets canceled from both sides, so two B equals twenty-five. After solving this, B equals twelve point five kilometers per hour."
**Visual Objective:** The payoff scene — recap both equations, add them, cancel C, solve for B.
**Screen Layout:** `#card-step3 .solution-card` center (left:580px, top:420px, width:760px — widest card, most content).
**On-Screen Elements:** `.chip` "Step 3", `.math` with four progressive lines: (1) recap "B + C = 15   B − C = 10", (2) "(B + C) + (B − C) = 15 + 10", (3) "2B = 25", (4) final "B = 12.5 km/hr".
**Animation Details:** `apt.morphToStack(tl, "#card-step2 .solution-card", "#stack-step2 .stack-card", 85.9)`. `apt.cardEnter(tl, "#card-step3 .solution-card", 86.36)`. Recap line: word-level `.rv` at 88.74(B)/89.0(plus)/89.26(C), hi "15"@89.76; 91.82(B)/92.08(minus)/92.48(C), hi "10"@93.5. Add line (`.note`, `apt.fadeIn` at 94.34): word-level at 95.48(B)/95.76(plus)/96.04(C)/96.24(minus)/96.6(B)/96.82(minus)/97.18(C)/97.38(equals), hi "15"@97.76 + "10"@98.34. Cancel note (`apt.fadeIn` at 98.92) with the two `C` terms pulsing (`scale 1→1.2` yoyo) then fading to 0.25 opacity at 99.42–100.6 ("C gets canceled from both sides"). Result line: hi "2B"@101.2, "="@101.58, hi "25"@101.94. Divide note (`apt.fadeIn` at 103.02) showing "B = 25/2" via `.frac`. Final reveal: "B"@104.32, "="@104.5, hi "12.5 km/hr"@104.86.
**Camera Movement:** None.
**Transitions:** Standard morph in from Step 2.
**Educational Purpose:** This is the entire "why" of the problem — visually walking through elimination so the algebra isn't just stated, it's shown happening (terms visibly fading when they cancel).
**Visual Hierarchy:** Step 3 card dominates; by this point the stack column (G, 1, 2) is a calm, static reference on the left.
**Attention Management:** Four sequential reveals inside one card, each timed to its own narration clause — the long 20s window gives each line room to breathe before the next appears.
**Motion Notes:** The `C`-term pulse-then-fade is the one bespoke flourish in the card (mirrors the established `.note`/pulse pattern from other questions in this topic) — everything else is standard `textReveal`.
**Continuity From Previous Scene:** Step 2's card morphs into the stack exactly as Given and Step 1 did — same rhythm, third and final time.

### SCENE 13 — Answer Confirmation
**Timestamp:** 107.24–112.3s
**Voiceover:** "Hence, the speed of the launch in still water is twelve point five kilometers per hour."
**Visual Objective:** Let the final answer sit and be restated before the options even appear.
**Screen Layout:** Step 3 card unchanged, still center-stage.
**On-Screen Elements:** Same as Scene 12's final state — no new elements.
**Animation Details:** No new animation — the "B = 12.5 km/hr" line from Scene 12 is already visible and holds. (No `emphasize`/`resultReveal` layered on top, per the single-reveal rule for `textReveal`-driven cards.)
**Camera Movement:** None.
**Transitions:** N/A — held frame.
**Educational Purpose:** Narration restates the answer in the question's own terms ("speed of the launch in still water") — visual holds so the viewer's eye stays on the number while the ear catches up.
<br>
**Visual Hierarchy:** Unchanged from Scene 12.
**Attention Management:** Deliberate stillness — the one calm beat before the options reveal.
**Motion Notes:** None.
**Continuity From Previous Scene:** Pure hold — literally the same frame as the end of Scene 12.

### SCENE 14 — Recenter + Options Reveal
**Timestamp:** 112.3–114.98s
**Voiceover:** "So the correct option is option A."
**Visual Objective:** Clear the stage, bring in the 2×2 options grid, and land on the correct answer.
**Screen Layout:** Step 3 morphs into `#stack-step3`. Pinned illustration fades out. Pinned question recenters (`xShift:160, yShift:180`) to align with `.pinned-col`. Options grid fades/staggers in at `.pinned-col`.
**On-Screen Elements:** `#stack-step3` (joins G/1/2 in the left column with its connector line), `#options-reveal` → `.options-grid` with A/B/C/D.
**Animation Details:** `RECENTER_TIME = 112.3`. `apt.morphToStack(tl, "#card-step3 .solution-card", "#stack-step3 .stack-card", 112.3)`, `apt.stackLineGrow(tl, "#line-2-3", 112.3)`. `apt.fadeOut(tl, "#illus-pinned", 112.3)`, `apt.recenterForOptions(tl, "#q-pinned", 160, 180, 112.3)`. `apt.fadeIn(tl, "#options-reveal", 112.9)`, `apt.optionsStagger(tl, ".opt-btn", 113.3)`, `apt.correctPulse(tl, ".opt-btn.correct", 114.6)`.
**Camera Movement:** None.
**Transitions:** Morph (step3→stack) + recenter shift, same beat.
**Educational Purpose:** Final confirmation, letting the viewer match "Option A" against the grid.
**Visual Hierarchy:** Options grid + correct pulse > stack column > pinned question.
**Attention Management:** The correct-option pulse is timed to land right as "option A" finishes (114.6s, just ahead of the 114.98s clip end) so the visual and the spoken answer resolve together.
**Motion Notes:** `optionsStagger` uses a 0.12s stagger across 4 buttons (`power3.out`); `correctPulse` is a `back.out(1.5)` yoyo scale pulse.
**Continuity From Previous Scene:** Step 3's card performs its own morph-to-stack (same pattern as Scenes 10–12) while, in parallel, the pinned question shifts right — two motions landing at the same timestamp, read as one coordinated "wrap-up" beat.

### SCENE 15 — End Hold
**Timestamp:** 114.98–~118s
**Voiceover:** (silent — voiceover has ended)
**Visual Objective:** Let the final frame (all four options, A highlighted green, full stack visible) rest before the whole composition fades.
**Screen Layout:** Unchanged from Scene 14's landed state.
**On-Screen Elements:** Everything.
**Animation Details:** `END_FADE_TIME = 116.5`. `apt.fadeOut(tl, "#root > div", 116.5, 1.2)` — every direct child of `#root` fades together as one synchronized beat. `tl.set({}, {}, 118.5)` pads the timeline end.
**Camera Movement:** None.
**Transitions:** Single synchronized fade-to-nothing.
**Educational Purpose:** Clean close, no abrupt cut.
**Visual Hierarchy:** N/A — everything fades equally.
**Attention Management:** N/A.
**Motion Notes:** `power2.in`/`power2.out` style fade per `apt.fadeOut`.
**Continuity From Previous Scene:** Direct continuation of Scene 14's fully-resolved frame.

---

## PART 3 — Asset List Required

- `illustration/boat.svg` — launch/boat icon (reused from q17/q2's boat asset, same topic)
- `illustration/wave.svg` — front water-tile (reused)
- `illustration/wave-light.svg` — back water-tile (reused)
- `_template/assets/serial-num-badge.svg` — SerialNum badge (shared)
- `_template/assets/logo.png` — logo mark (shared)
- No new per-question assets required beyond the boat/wave set already established for this topic.

## PART 4 — Animation Complexity Notes

- Reuses the established "river + boat" illustration technique from q2/q17 (seamless conveyor wave-scroll via a local `riverFlow()` helper, bounded wake-line flicker, bounded boat judder on the upstream leg) — no new animation primitives introduced.
- Deviates from the strict "one Given card holds all given values" pattern: because the narration itself interleaves the downstream leg's data+calc, then the upstream leg's data+calc, then the final elimination, the card breakdown is Given (downstream data only) → Step 1 (downstream calc) → Step 2 (upstream data + calc combined) → Step 3 (recap + add + solve). This is transcript-driven, matching the README's "voiceover phrases should drive absolute timings" rule rather than a rigid template shape.
- Step 3 is the most complex card (4 progressive `.note`/`.rv` reveals plus a C-term pulse-fade) — directly modeled on q17's Step 1 elimination card.
- Several morph-to-stack transitions are tightly timed against back-to-back narration (e.g., Given→stack completing just ~0.2s before Step 1 opens) — this mirrors q17's own precedent of prioritizing narration sync over the abstract "1s breathing gap" guideline when the voiceover itself has no gap.

## PART 5 — Master Timeline Overview

```
0.0        Background layers + bottomStrip + topic + logo (always visible)
0.3        Question card begins lowered entrance
4.68       Question card + serial badge rise to rest
5.24       River scene + boat assemble (static — no flow, no bob, badge blank)
20.59      Badge reads "Still" (water not flowing, spoken)
24.72      Badge swaps "Still" → "B"
29.56      B badge pulse
30.2       Flow starts (riverFlow + ambientLoop begin) — "rivers always have a flow"
32.2       Flow arrows appear
38.04      C badge appears
39.54      C badge pulse
40.28      DOWNSTREAM: boat glides right (x:0→800), wake flicker, +C chip
43.64      Merge chip pops
50.82      Formula tag "Downstream = B+C" enters
52.22      Badge flips B → B+C
52.92      Turn beat (squish + flip)
53.66      UPSTREAM: boat glides left (x:800→0), judder, wake flicker, −C chip
55.1       Resist chip pops
59.9       Formula tag "Upstream = B−C" enters
61.02      Badge flips → B−C

[ PIN_TIME = 63.4 ]
63.4       pinFlow — question + illustration glide to pinned slots (0.8s)

[ GIVEN_TIME = 66.3 ]
66.3       Given card enters — 30 km / 2 hr (downstream)

70.0       Given → stack (morph, 0.8s)
71.02      Step 1 card enters — 30 ÷ 2 = 15 km/hr

75.9       Step 1 → stack (morph, 0.8s)
76.5       Step 2 card enters — 30 km / 3 hr, 30 ÷ 3 = 10 km/hr

85.9       Step 2 → stack (morph, 0.8s)
86.36      Step 3 card enters — recap, add, cancel, solve
101.2      2B = 25 revealed
104.86     B = 12.5 km/hr revealed

[ RECENTER_TIME = 112.3 ]
112.3      Step 3 → stack (morph, 0.8s); illustration clears; question recenters
112.9      Options grid fades in
113.3      Options stagger in
114.6      Correct option (A) pulses

[ END_FADE_TIME = 116.5 ]
116.5      Everything fades out together (1.2s)
118.5      Timeline end
```
