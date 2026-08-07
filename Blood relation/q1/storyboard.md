# Blood Relation - q1 - Storyboard

Statement: Alex is the father of Neha. Neha is the sister of John. How is Alex related to John?
Answer: A - Father. Duration: 39.699s (from transcript.json).

## PART 1 - Narration Beat Analysis

| Beat | Time | Text | Purpose | Focus | Visual objective |
|---|---|---|---|---|---|
| 1 | 0.12-6.54 | "So welcome back...solve some problems." | Cold open | Question card | Card + serial badge enter |
| 2 | 7.08-10.08 | "Now in this problem, Alex is the father of Neha," | Fact 1 | Alex, Neha | Alex node in, Neha node in, descent edge draws, "father" chip |
| 3 | 10.72-12.92 | "and Neha is the sister of John." | Fact 2 | Neha, John | John node in, sibling bar draws, "sister" chip |
| 4 | 13.76-17.08 | "The question is asking us to find how Alex is related to John." | Pose the ask | Alex, John | Both endpoints green, dashed answer edge + "?" appear |
| 5 | 17.90-19.46 | "Here we are sure about one fact," | Transition | - | Pin question+illustration to top, Given card opens |
| 6 | 19.98-23.22 | "Neha and John are brother and sister or siblings." | Step 1 | sibling bar | Step 1 card, sibling bar pulses green, Neha pivot fill |
| 7 | 23.76-27.86 | "So if Alex is Neha's father, then Alex will also be John's father." | Step 2 | descent edge | Step 2 card, descent edge pulses, answer edge resolves dashed->solid green |
| 8 | 28.34-32.24 | "There is no need to make it complicated...same family relation." | Reinforcement | answer edge / chip | Pulse resolved answer edge + chip, no new fact |
| 9 | 32.94-36.42 | "Hence, Alex is related to John as father." | Final statement | answer chip | Step 3 card states the answer word |
| 10 | 37.16-39.70 | "So the final answer will be option A, father." | Reveal | Options grid | Options stagger in, correct pulse on A |

## PART 2 - Scene-by-Scene Storyboard

### Scene 1 - Question Reveal (0.3-17.9s)
LAYOUT: Question card centered top (heroEnterLowered), serial badge top-left, illustration centered below.
ELEMENTS: `#q-full-card`, `#serial-num`, three-node family tree SVG (`#illustration`).
ANIMATION: Card rises from lowered start at 3.6s. Alex node pops in at 8.5s (back.out), Neha at 9.74s, descent edge draws 10.2-10.8s, "father" chip fades 9.9s. John node pops in at 12.7s, sibling bar draws 13.0-13.6s, "sister" chip fades 12.9s. At 15.72s/16.88s Alex/John node outlines flip green (endpoints of the ask). Dashed grey answer edge + "?" fade in at 17.1s.
TRANSITION: none yet (single continuous take).
CONTINUITY: n/a (opening scene).

### Scene 2 - Pin + Given (17.9-19.7s)
LAYOUT: `apt.pinFlow` glides question+illustration into the Phase-2 pinned slot at PIN_TIME=17.9s. Given solution card enters center at GIVEN_TIME=18.9s.
ELEMENTS: `#q-pinned`, `#illus-pinned` (coordinate-exact copy, answer edge still dashed/grey), `#card-given`.
ANIMATION: Given card restates the two facts, line-level reveal (18.0s, 18.5s).
CONTINUITY: the full question/illustration are still completing their 0.8s glide into the pinned slot as this scene opens; Given card enters just as that glide settles.

### Scene 3 - Step 1: siblings (19.7-23.8s)
LAYOUT: Given card morphs to stack (19.7s). Step 1 card enters center at 19.98s.
ELEMENTS: `#card-step1`, `#stack-given`.
ANIMATION: word-level reveal "Neha and John are ... siblings" (19.98-22.72s) synced to the sibling bar pulsing green in the pinned figure at the same 19.98s beat (CHAIN-WALK). Neha's node gets the `--primary-light` pivot fill at the same moment.
CONTINUITY: Given card's box is still finishing its shrink into the stack column as Step 1's card fades up in the center.

### Scene 4 - Step 2: same father (23.8-32.5s)
LAYOUT: Step 1 morphs to stack (23.8s), grows the Given->Step1 connector line. Step 2 card enters center at 23.76s.
ELEMENTS: `#card-step2`, `#stack-step1`, `#line-g-1`.
ANIMATION: word-level reveal of both clauses (23.76-27.56s) synced to the descent edge (Alex-Neha) pulsing at 23.76s. At 27.6s the dashed grey answer edge resolves to solid green in one 0.5s tween and `#chip-answer` ("father", done state) pops in on the figure. Through the reinforcement narration (28.34-32.24s) the resolved answer edge and chip re-pulse twice (`apt.emphasize`) so no region sits idle > 3s.
CONTINUITY: Step 1's card is completing its morph into the stack while Step 2 fades up; the sibling-bar pulse from Scene 3 has already settled to its resting green state.

### Scene 5 - Step 3: final answer + options (32.5-39.7s)
LAYOUT: Step 2 morphs to stack (32.5s), grows Step1->Step2 line. Step 3 card enters center at 32.94s. Step 3 morphs to stack (37.05s), grows Step2->Step3 line. Options grid fades in at 37.3s (recenter pinned question first).
ELEMENTS: `#card-step3`, `#stack-step2`, `#line-1-2`, `#stack-step3`, `#line-2-3`, `#options-reveal`.
ANIMATION: word-level reveal "Alex is related to John as father" (33.94-36.0s). Options stagger in (37.7s), option A correct-pulses (38.6s), final "father." word re-pulses the answer at 39.28s.
CONTINUITY: Step 2's box is finishing its morph while Step 3 fades up; the resolved green answer edge from Scene 4 stays visible unchanged through this scene, it is not re-resolved.

### Scene 6 - Outro (40.3-41.7s)
Everything fades together (`apt.fadeOut(tl, "#root > div", 40.3, 1.2)`), `tl.set` marker at 41.7.

## PART 3 - Asset List Required
- No external assets. Hand-authored inline SVG family tree (3 nodes, 2 stated edges, 1 answer edge) built per `illustration_reference.md`.
- `.fig-chip` / `.fig-chip.role` / `.fig-chip.done` / `.fig-chip-pinned` CSS (topic constitution, byte-identical to Trigonometry's chip rule).

## PART 4 - Animation Complexity Notes
- Answer edge resolves exactly once (27.6s), then only re-pulses (never re-fades/re-resolves) during the reinforcement window and the "Hence" restatement.
- CHAIN-WALK order matches the solution card order: sibling fact pulses before the descent-edge fact, same as the card sequence (Step 1 then Step 2), even though the descent edge was drawn first on screen (illustration_reference.md section 9 CHAIN-WALK rule).
- Pinned illustration is a coordinate-exact copy of the full-size SVG (`viewBox="0 0 580 500"` both), only outer width/height and stroke widths differ.

## PART 5 - Master Timeline Overview

```
0.3   q-full-card + serial-num enter (heroEnterLowered, rise at 3.6)
8.5   node-alex in
9.14  chip-father fades in
9.74  node-neha in
10.2  edge-alex-neha draws
12.7  node-john in
12.9  chip-sister fades in
13.0  edge-neha-john (sibling bar) draws
15.72 node-alex endpoint green
16.88 node-john endpoint green
17.1  answer edge (dashed grey ?) fades in
17.9  PIN_TIME - pinFlow question + illustration
18.9  GIVEN_TIME - Given card enters
19.7  Given -> stack morph
19.98 Step 1 card enters; sibling bar pulses; Neha pivot fill
23.76 Step 2 card enters; descent edge pulses
23.8  Step 1 -> stack morph; line-g-1 grows
27.6  answer edge resolves dashed->solid green; chip-answer pops
28.34 / 30.68  reinforcement re-pulses on answer edge + chip
32.5  Step 2 -> stack morph; line-1-2 grows
32.94 Step 3 card enters ("Hence...")
36.42 (card holds)
37.05 Step 3 -> stack morph; line-2-3 grows
37.3  options-reveal fades in
37.7  optionsStagger
38.6  correctPulse on option A
39.28 final "father." re-emphasize
40.3  END_FADE_TIME - everything fades
41.7  tl.set marker (timeline end)
```
