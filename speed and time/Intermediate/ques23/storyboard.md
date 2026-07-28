# Storyboard — Speed & Time · Intermediate · ques23 (v2)
## "Bus stoppage time" (90 km/hr without stop, 75 km/hr with stop → find stoppage time/hr)

Correct answer: **B — 10 minutes**
Video length: 111.72s (voiceover) + ~2s tail = **~114s**

**v2 revision notes (fixes applied after review):**
1. Added an explicit explainer line inside the Given card for "moving time + stoppage time → average speed = 75 km/hr" (19.7–26.84s), instead of leaving that idea unillustrated.
2. **Given card now opens at 20.3s** (right after Phase 1's two speed tags land), not 27.7s — most of its lines now sync to *live* narration timestamps instead of being a recap fired after the fact.
3. **Step 1 now ends at ~45s** (was ~55s) — it only covers the "think for 1 hour: 90 km vs 75 km" setup (31.38–44.64s). The lost-distance arithmetic (90 − 75 = 15 km) moves into Step 2, alongside the guardrail/formula/fraction content, matching the transcript's own pacing.
4. **New: ghost-bus animation** (60.06–63.36s) — a translucent bus splits off from the real bus and drives ahead along a dashed red "phantom lane" on the pinned illustration's road, visualizing "the distance the bus could have traveled if it had not stopped."
5. **New: bridging math line + emphasis** for 67.42–74.64s ("the time spent in stoppages is equal to the time needed to cover this lost distance at the actual moving speed") — a dedicated math line in Step 2 with `15 km` and `90 km/hr` called out and gently pulsed as they're re-mentioned.
6. **Fixed layout bug:** the pinned illustration (`#illus-pinned`) previously sat at `left:410px`, overlapping the stack column (`left:100–485px`). Moved to `left:545px` (grid column 2), fully clear of the stack.
7. **Fixed static pin cut:** Phase 1 → Phase 2 was a hard fade-out/fade-in swap between two unrelated elements. Replaced with a genuine shrink-and-rise tween on `#q-full-card`/`#illustration` themselves (0.8s, `power2.inOut`) that crossfades into the pinned versions only once the shrink is essentially complete — the question now visibly "flows" into its pinned slot instead of jump-cutting.

---

## PART 1 — Narration Beat Analysis (v2)

| # | Timestamp | Narration | Educational Purpose | Attention Focus | Visual Objective |
|---|-----------|-----------|----------------------|------------------|-------------------|
| 1 | 0.1–3.2 | "So welcome back again. Time for one more problem." | Hook / opening | Center screen | Question card rises into view |
| 2 | 3.7–9.74 | Bus speed given two ways; without stoppage = 90 km/hr | Establish given #1 | Illustration + label | Bus enters on road, "90 km/hr" tag pops |
| 3 | 10.3–19.06 | Restates moving speed 90; speed w/ stoppage 75 km/hr | Establish given #2 | Illustration label 2 | "75 km/hr" tag pops next to a stop marker |
| 4 | 19.3–20.1 | *(transition)* | Flow Phase 1 → Phase 2 | Question + illustration | Shrink-tween into pinned slot (no hard cut) |
| 5 | 19.7–26.84 | "...after counting moving time plus stoppage time, the average speed becomes 75 km/hr" | **Explain what "75 km/hr" actually means** | Given card, live word reveal | New explainer line: "Moving time + Stoppage time → Avg speed = 75 km/hr" |
| 6 | 27.72–30.88 | "We need to find the stoppage time per hour." | State the target unknown | Given card | "Find: stoppage / hr" line reveals live |
| 7 | 31.38–44.64 | Think for 1 hr: no-stop covers 90 km, with-stop covers 75 km | Set up the 1-hour mental model | Step 1 card | Given morphs to stack "G"; Step 1 opens, ends ~45s |
| 8 | 45.28–54.76 | Bus covers less distance; lost distance = 90 − 75 = 15 km | Core insight #1 (lost distance) | Step 2 card opens | Step 1 morphs to stack "1"; Step 2 opens with this calc first |
| 9 | 55.24–59.72 | Careful: 15 km was never actually travelled | Guardrail | Step 2 math | Guardrail line reveals |
| 10 | 60.06–64.55 | "It is the distance the bus could have traveled if it had not stopped." | **Visualize the hypothetical** | Pinned illustration | Ghost bus splits off, drives ahead on dashed red lane |
| 11 | 64.92–67.1 | "Time is equal to distance divided by speed." | Formula recall | Step 2 math | Formula line reveals |
| 12 | 67.42–74.64 | "...time spent in stoppages is equal to the time needed to cover this lost distance at the actual moving speed." | **Bridge the logic** | Step 2 math | New line: "Stoppage time = time to cover 15 km at 90 km/hr", with 15 km / 90 km/hr called out + gently pulsed |
| 13 | 84.0–97.82 | Stoppage time = 15/90 hour → simplifies to 1/6 hour | Core insight #2 (the fraction) | Step 2 math resolve | Fraction 15/90 simplifies to 1/6 |
| 14 | 98.34–104.36 | 1/6 hour = 1/6 × 60 minutes = 10 minutes | Core insight #3 (unit conversion) | Step 3 card | Step 2 morphs to stack "2"; Step 3 converts to minutes |
| 15 | 104.82–111.72 | Hence 10 min/hr; final answer 10 minutes, option B | Resolution | Options grid | Step 3 morphs to stack "3"; options reveal, B pulses green |

---

## PART 2 — Scene-by-Scene Storyboard (v2)

### SCENE 1 — Opening + Question Reveal
**Timestamp:** 0.0–3.6s · unchanged from v1 (`apt.heroEnterLowered`, `RISE_TIME=3.3`, serial badge parallel tween).

### SCENE 2 — Illustration Build: "Without stoppage = 90 km/hr"
**Timestamp:** 3.6–10.0s · unchanged from v1 (`apt.roadSweep` @4.0, bus `apt.cardEnter` @4.6, tag-90 `apt.fadeIn` @8.3).

### SCENE 3 — Illustration Build: "With stoppage = 75 km/hr"
**Timestamp:** 10.0–19.3s · unchanged from v1 (stop-marker @16.3, tag-75 @17.4, `apt.emphasize` @18.9).

### SCENE 4 — Flowing Pin Transition (NEW — replaces v1's hard cut)
**Timestamp:** 19.3–20.9s
**Voiceover:** (silence/breath before) "This means after counting moving time plus stoppage time..."
**Visual Objective:** Make Phase 1 → Phase 2 read as one continuous motion, not a jump cut.
**Screen Layout:** `#q-full-card` and `#illustration` (still in their Phase 1 resting positions) both shrink (`scale:0.45`) and translate up-left (`x:-430,y:-230` for the card; `x:-300,y:-260` for the illustration) over 0.8s starting at 19.3s, then fade to opacity 0 at 19.95s. `#serial-num` fades out in parallel. `#q-pinned` and `#illus-pinned` (already correctly positioned/sized) fade in at 20.1s, once the shrink is essentially complete, so the crossfade masks any positional mismatch.
**Animation Details:** Direct `tl.to()` tweens (not a new shared helper — this is per-question composition motion, matching design.md's own Phase 2 description "QuestionCard shrinks to top"), `duration:0.8, ease:"power2.inOut"` — same timing profile as `apt.morphToStack` for visual consistency. `apt.fadeIn(tl, "#q-pinned", 20.1)`, `apt.fadeIn(tl, "#illus-pinned", 20.1)`.
**Educational Purpose:** Preserve visual continuity so the learner doesn't lose their place when the layout reorganizes.
**Motion Notes:** This is the fix for "the pin should not be static, keep it with the flow" — the pinned elements are never popped in cold; they're always preceded by their own full-size ancestor visibly shrinking toward them.

### SCENE 5 — Given Card: Explaining "75 km/hr" + the Target
**Timestamp:** 20.3–31.0s
**Voiceover:** "...after counting moving time plus stoppage time, the average speed becomes seventy-five kilometer per hour. We need to find the stoppage time per hour."
**Visual Objective:** Recap the two given speeds fast, then **explain what "75 km/hr" means** (moving time + stoppage time combined) before naming the target — this is the piece that was previously never explicitly shown.
**Screen Layout:** `#card-given .solution-card` centered at `left:640px; top:470px`.
**On-Screen Elements:** Chip "Given"; four math lines:
1. `Without stoppage = 90 km/hr` (recap, line-level)
2. `With stoppage = 75 km/hr` (recap, line-level)
3. `Moving time + Stoppage time → Avg speed = 75 km/hr` (**live, word-level** — this is the new explainer line)
4. `Find: stoppage time / hr` (**live, word-level**)
**Animation Details:** `apt.cardEnter(tl, "#card-given .solution-card", 20.3)`. `apt.textReveal(tl, "#card-given .math")` with line 1 @20.5, line 2 @20.9, line 3 word-by-word from 21.5 ("Moving") through 25.92 ("km/hr", i.e. "seventy-five kilometer"), line 4 mixed granularity from 27.72 ("Find:") through 30.64 ("/ hr").
**Camera Movement:** None. **Transitions:** N/A. **Educational Purpose:** Closes the "what does 75 km/hr even mean here" gap flagged in review — the learner now sees the moving-time + stoppage-time relationship spelled out, not just the number. **Visual Hierarchy:** Given card dominant. **Attention Management:** Line 3 is the new payoff line — its word-by-word reveal should feel like the formula assembling itself. **Motion Notes:** Card holds to 30.88s (last real word), morphs to stack "G" at 31.0s.

### SCENE 6 — Given → Stack; Step 1 Opens (shortened, ends ~45s)
**Timestamp:** 31.0–45.5s
**Voiceover:** "Now, let us think for one hour. If the bus does not stop at all, then in one hour it can cover ninety kilometer. But because the bus stops in between, in the same one hour, it covers only seventy-five kilometer."
**Visual Objective:** Set up the 1-hour thought experiment only — the arithmetic (lost distance) is deliberately deferred to Step 2 so this card stays tight and matches the transcript's own two-sentence unit.
**Screen Layout:** Given morphs into `#stack-given` (`left:100px; top:140px`, circle "G"). `#card-step1 .solution-card` opens at `left:640px; top:460px`.
**On-Screen Elements:** Chip "Step 1"; two lines:
1. `In 1 hour, without stoppage → 90 km` (paraphrase @33.2, highlighted "90 km" word-level @37.12)
2. `In 1 hour, with stoppage → 75 km` (paraphrase @38.96, highlighted "75 km" word-level @43.4)
**Animation Details:** `apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 31.0)`. `apt.cardEnter(tl, "#card-step1 .solution-card", 32.0)`. `apt.textReveal(tl, "#card-step1 .math")`. Card holds to 44.64s, morphs to stack "1" at **44.7s** (per review: "the first step should last till 45th sec"). **Educational Purpose:** Isolate the mental model from the arithmetic so each card teaches exactly one idea. **Motion Notes:** No `.ans` payoff in this card — the "15 km" answer now belongs to Step 2, where it's actually derived.

### SCENE 7 — Step 1 → Stack; Step 2 Opens (now carries lost distance + guardrail + ghost bus + formula + fraction)
**Timestamp:** 44.7–98.8s — the longest, most content-dense scene, matching the transcript's own extended explanation of this idea.
**Voiceover (full segment):** "So because of stoppages, the bus covers less distance. The lost distance is equal to ninety minus seventy-five. So the lost distance is fifteen kilometers. Now, be careful here. This fifteen kilometers is not actually traveled by the bus. It is the distance the bus could have traveled if it had not stopped. Now, we know the formula, time is equal to distance divided by speed. So the time spent in stoppages is equal to the time needed to cover this lost distance at the actual moving speed. In simple words, during the stoppage time, the bus could have covered this fifteen kilometer distance at ninety kilometer per hour. So here, lost distance is fifteen kilometer and actual moving speed is ninety kilometer per hour. Therefore, stoppage time is equal to fifteen by ninety hour. After simplifying this, we get one by six hour."

**Sub-beat 7A — Lost distance (45.28–54.76s):**
Screen Layout: `#stack-step1` lands (circle "1"); `#line-g-1` grows. `#card-step2 .solution-card` opens at `left:560px; top:400px; width:800px`.
Math line 1: `So the bus covers less distance` (line-level @45.7). Math line 2: word-level `Lost`(49.02) `distance`(49.36) `=`(50.04) `90`(50.58, hi) `−`(51.1) `75`(51.52, hi) `=`(52.7) `15 km`(53.76, `.ans`).
Animation: `apt.morphToStack(tl,"#card-step1 .solution-card","#stack-step1 .stack-card",44.7)`; `apt.stackLineGrow(tl,"#line-g-1",44.7)`; `apt.cardEnter(tl,"#card-step2 .solution-card",45.6)`; `apt.textReveal`.

**Sub-beat 7B — Guardrail (55.24–59.72s):**
Math line 3: `Be careful, 15 km is not actually travelled.` (line-level @55.24, "15 km" styled `.hi` within the same span).

**Sub-beat 7C — Ghost bus (60.06–63.36s) — NEW:**
Visual Objective: Physically show "the distance the bus could have traveled if it had not stopped" instead of leaving it purely verbal.
Screen Layout: Inside `#illus-pinned`, a second "phantom lane" sits above the real road: `#ghost-road` (dashed red line) and `#ghost-bus` (a second copy of the bus SVG at reduced opacity, tinted via `hue-rotate`) start exactly overlapping the real bus's position, then the ghost bus drives ahead alone.
On-Screen Elements: `#ghost-road`, `#ghost-bus`, `#ghost-caption` ("Could have covered this distance", small red text).
Animation Details: `apt.fadeIn(tl,"#ghost-road",60.0,0.3)`; `tl.fromTo("#ghost-bus",{opacity:0},{opacity:0.6,duration:0.3},60.1)`; `apt.fadeIn(tl,"#ghost-caption",60.1,0.3)`; `tl.to("#ghost-bus",{x:950,duration:3.0,ease:"power1.inOut"},60.3)` (travels during the "could have traveled" phrase); `apt.fadeOut(tl,"#ghost-bus",63.4)`; `apt.fadeOut(tl,"#ghost-road",63.5)`; `apt.fadeOut(tl,"#ghost-caption",63.4)`.
Educational Purpose: Makes the "hypothetical distance" concrete and visually distinct (dashed **red** lane, translucent bus) so it's never confused with the bus's real, already-completed journey.
Motion Notes: Ghost bus starts co-located with the real bus (visually "splitting off" from it) — this is the only way the metaphor reads correctly; it must never appear from an unrelated position.

**Sub-beat 7D — Formula (64.92–67.1s):**
Math line 4: word-level `Time`(64.92) `=`(65.36) `Distance`(65.74) `÷`(66.16) `Speed`(66.82).

**Sub-beat 7E — Bridging logic + emphasis (67.42–74.64s) — NEW:**
Math line 5: `Stoppage time =`(line-level @67.42) `time needed to cover`(line-level @70.22) `15 km`(hi, word-level @72.0) `at`(@73.16) `90 km/hr`(hi, word-level @73.5).
Animation Details: `apt.textReveal` handles the fade-in; additionally, `apt.emphasize(tl,"#lost-15",72.3)` and `apt.emphasize(tl,"#moving-90",73.8)` — a deliberate small pulse *after* each span's own reveal (not simultaneous, so it doesn't double-animate the reveal itself), used here specifically because this is the logical crux of the entire problem and deserves the extra beat, per reviewer note "some animation" for this exact voiceover line.
Educational Purpose: This is the hardest conceptual leap in the problem (why "distance ÷ speed" applies to a distance nobody actually drove) — the bridging line + gentle emphasis gives it weight without a new visual element.

**Sub-beat 7F — Fraction + simplify (84.0–97.82s):**
Math line 6: `Stoppage time =`(@91.62) `15/90`(`.frac`, @93.16) `hr`(@94.2).
Math line 7: `After simplifying,`(@95.02) `=`(@96.3) `1/6`(`.frac .ans`, @96.56) `hr`(`.ans`, @97.54).

Card holds to 97.82s, morphs to stack "2" at 98.0s.

### SCENE 8 — Step 2 → Stack; Step 3 Opens: "Convert to Minutes"
**Timestamp:** 98.0–109.0s · unchanged from v1 (`apt.morphToStack` @98.0, `apt.stackLineGrow("#line-1-2")` @98.0, `apt.cardEnter("#card-step3...")` @99.0, fraction 1/6×60=10 min word-synced @98.52–104.04).

### SCENE 9 — Step 3 → Stack; Options Reveal; Correct Answer Lock-In
**Timestamp:** 109.0–114.0s · unchanged from v1 (`recenterForOptions` @108.0, `morphToStack` step3 @108.2, `stackLineGrow("#line-2-3")` @108.2, options `fadeIn` @109.2, `optionsStagger` @109.6, `correctPulse` @110.9).

---

## PART 3 — Asset List Required (v2)

Same as v1, plus:
- **Ghost bus** — reuses `illustration/bus-bus-svgrepo-com.svg` (same file, second `<img>` instance, tinted via CSS `filter` and reduced `opacity`) — no new asset file needed.
- **Ghost road** — pure CSS (`border-top: dashed red`), no asset needed.

## PART 4 — Animation Complexity Notes (v2)

- All card/stack transitions still use only `apt.morphToStack` / `apt.cardEnter` / `apt.stackLineGrow` / `apt.textReveal` — no changes to the regulated component-animation set.
- The Phase 1 → Phase 2 "flowing pin" transition and the ghost-bus motion are both **per-question composition script**, written as direct `tl.to()`/`tl.fromTo()` calls in `index.html`'s own `<script>` block — not new exports added to `animations.js`. This keeps the shared helper library untouched while still satisfying "keep it with the flow" and the ghost-bus request.
- `apt.emphasize` is used twice in sub-beat 7E, layered *after* (not simultaneous with) `textReveal`'s own fade on those two spans — the one deliberate exception to "don't double-animate the same span," used only because the reviewer specifically asked for extra motion on this exact line.

## PART 5 — Master Timeline Overview (v2)

```
TIME (s)   ELEMENT                        WHAT HAPPENS
─────────  ─────────────────────────────  ──────────────────────────────────
0.0        Background + audio             Grid, strip, topic, logo, voiceover start
0.3–3.3    #q-full-card + #serial-num     heroEnterLowered, rises at 3.3
4.0        #road-line                     roadSweep draws in
4.6        Bus icon                       cardEnter-style fade+scale
8.3        "90 km/hr" tag                 fadeIn
16.3       Stop marker                    fadeIn
17.4       "75 km/hr" tag                 fadeIn
18.9       "75 km/hr" number              emphasize pulse
19.3       #q-full-card + #illustration   SHRINK-TWEEN toward pinned slot (0.8s)
20.1       #q-pinned + #illus-pinned      fadeIn (crossfade from shrunk hero)
20.3       #card-given                    cardEnter + textReveal (incl. NEW avg-speed explainer line)
31.0       Given → stack "G"              morphToStack (0.8s)
32.0       #card-step1                    cardEnter + textReveal (setup only, no arithmetic)
44.7       Step1 → stack "1"              morphToStack + line-g-1 grow  ← ends ~45s per review
45.6       #card-step2                    cardEnter + textReveal (lost distance, guardrail, formula, bridge, fraction)
60.0–63.5  Ghost bus                      splits off real bus, drives ahead on dashed red lane
67.4–74.6  Bridging line + emphasis       "stoppage time = time to cover 15 km at 90 km/hr" (NEW)
98.0       Step2 → stack "2"              morphToStack + line-1-2 grow
99.0       #card-step3                    cardEnter + textReveal (→ 10 minutes)
108.0      #illus-pinned fadeOut          recenterForOptions on #q-pinned
108.2      Step3 → stack "3"              morphToStack + line-2-3 grow
109.2      #options-reveal                fadeIn
109.6      .opt-btn ×4                    optionsStagger
110.9      .opt-btn.correct (B)           correctPulse
114.0      End                            All elements remain visible
```

**Answer lock:** Option B — 10 minutes.
