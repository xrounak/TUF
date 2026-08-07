# Mensuration - q2 - Storyboard

Statement: In a brief shower, 2 cm of rain falls on 2 hectares of ground. The volume of water
that falls on the ground is: Answer: B - 400 cu. m. Duration: 70.379s (from transcript.json).

Category: B (unit-conversion + formula). Two conversions feed one formula: 2 ha -> 20,000 m2,
2 cm -> 0.02 m, Volume = Area x Height = 20,000 x 0.02 = 400 m3.

## PART 1 - Narration Beat Analysis

| Beat | Time | Text | Purpose | Focus | Visual objective |
|---|---|---|---|---|---|
| 1 | 0.10-4.20 | "So welcome back again...one more problem." | Cold open | Question card | Card + serial badge enter |
| 2 | 4.72-9.42 | "Now, in this problem, two centimeter of rain falls on two hectares of land," | State givens | ground box, water sliver | Ground slab entrance, water sliver entrance, "Rain=2cm" + "Area=2 ha" chips pop |
| 3 | 9.98-12.16 | "and we need to find the volume of water collected." | Pose the ask | Find chip | "Find: Volume" chip pops |
| 4 | 12.62-14.20 | "What does this mean in simple words?" | Transition | whole box | emphasize box |
| 5 | 14.68-18.70 | "Just imagine a big field covered with a layer of water of height two centimeter." | Reframe | water sliver | water sliver pulses |
| 6 | 19.26-23.40 | "If we know the area of the field and the height of the water, we can easily find the volume." | Setup | area chip, height chip | chip pulses in turn, then whole box emphasize |
| 7 | 23.7 PIN | - | Pin | question+illustration | pinFlow to Phase 2 slot |
| 8 | 23.9 | Given card | Given | - | Given card: Rain=2cm, Area=2 ha |
| 9 | 24.04-34.54 | "So first, let us convert the area...twenty thousand square meter. Done." | Step 1 | area conversion | conv-callout "1 ha=10,000 m2" fades in, chip-area crossfades given->resolved (20,000 m2, blue) at "twenty thousand" |
| 10 | 35.10-50.86 | "Now, let us convert the rainfall...zero point zero two meters...correct units." | Step 2 | height conversion | conv-callout "100 cm=1 m" fades in, water layer grows sliver->full band + chip-height crossfades given->resolved (0.02 m, blue) at "zero point zero two" |
| 11 | 51.58-62.64 | "Now we have volume equal to area into height...four hundred cubic meter." | Step 3 | formula | Step 3 card carries Volume=Area x Height=20,000x0.02=400 word-reveal; water layer fill flashes green + chip-answer "400 m3" pops at "four hundred" |
| 12 | 63.50-67.66 | "Done and dusted...four hundred cubic meter." | Step 4 | answer reinforced | Step 4 card restates, chip-answer + water fill re-pulse |
| 13 | 68.12-70.38 | "Hence, option B is the correct answer." | Reveal | Options grid | Options stagger in, correct pulse on B |

## PART 2 - Scene-by-Scene Storyboard

### Scene 1 - Question Reveal (0.3-23.7s)
LAYOUT: Question card centered top (heroEnterLowered), serial badge top-left, illustration
(isometric ground+water box) centered below, chip column on the left.
ELEMENTS: `#q-full-card`, `#serial-num`, `#ground-figure`, `#water-figure`, `#chip-find`,
`#chip-area-given`, `#chip-height-given`.
ANIMATION: Card rises at 4.3s. Ground slab pops in at 4.72s (back.out), water sliver (6px,
dashed grey - given but not yet unit-matched) pops at 6.04s alongside "Rain=2cm" chip.
"Area=2 ha" chip pops at 7.74s. "Find: Volume" role chip pops at 9.98s. Whole box emphasizes
at 12.62s. Water sliver re-pulses at 14.68s and 18.20s ("height two centimeter"). Area chip
pulses at 19.86s, height chip pulses at 20.86s, whole box emphasizes once more at 22.12s before
pinning.

### Scene 2 - Pin + Given (23.7-24.35s)
LAYOUT: `apt.pinFlow` glides question+illustration to the Phase-2 pinned slot at PIN_TIME=23.7s.
Given card enters center at GIVEN_TIME=23.9s.
ELEMENTS: `#q-pinned`, `#illus-pinned`, `#card-given`.
ANIMATION: Given card states both raw values, line-level reveal.

### Scene 3 - Step 1: convert area (24.35-35.20s)
LAYOUT: Given morphs to stack (24.15s). Step 1 card enters center at 24.35s.
ELEMENTS: `#card-step1`, `#stack-given`, `#conv-callout-area`, `#chip-area-resolved`.
ANIMATION: word-level reveal "1 hectare=10,000 m2...2 hectares=20,000 m2" (26.14-33.62s).
`#conv-callout-area` fades in at 25.06s (mirrors "let us convert the area"). At 30.40s
`#chip-area-given` crossfades to `#chip-area-resolved` ("Area = 20,000 m2", blue solid) on the
pinned figure - LINK with "twenty thousand square meter" landing in the card.

### Scene 4 - Step 2: convert height (35.20-51.50s)
LAYOUT: Step 1 morphs to stack (35.00s), grows Given->Step1 connector. Step 2 card enters
center at 35.20s.
ELEMENTS: `#card-step2`, `#stack-step1`, `#line-g-1`, `#conv-callout-height`,
`#chip-height-resolved`, `#water-figure` (grows).
ANIMATION: word-level reveal "rainfall is 2cm...100cm=1m...=0.02 meters" (37.90-47.70s).
`#conv-callout-height` fades in at 36.02s. At 44.60s the water layer's front/top/side faces
attr-tween from the 6px sliver to the full 34px band (anchored at the shared ground/water
seam, y=314, growing upward) while its stroke resolves grey-dashed -> blue-solid; simultaneously
`#chip-height-given` crossfades to `#chip-height-resolved` ("Height = 0.02 m") - LINK with
"zero point zero two meters" landing in the card.

### Scene 5 - Step 3: formula (51.50-63.50s)
LAYOUT: Step 2 morphs to stack (51.30s), grows Step1->Step2 line. Step 3 card enters center at
51.50s.
ELEMENTS: `#card-step3`, `#stack-step2`, `#line-1-2`, `#chip-answer`.
ANIMATION: word-level reveal "Volume=Area x Height...=20,000 x 0.02...=400 cubic meter"
(51.58-62.64s). At 61.40s (word "four hundred") the water layer's fill tweens to `--success`
green and `#chip-answer` ("400 m3", done state) pops in on the pinned figure - LINK with the
card's own answer span.

### Scene 6 - Step 4: reinforcement + options (63.50-70.98s)
LAYOUT: Step 3 morphs to stack (63.30s), grows Step2->Step3 line. Step 4 card enters center at
63.50s. Step 4 morphs to stack (67.90s), grows Step3->Step4 line. Options grid fades in at
68.10s (recenter pinned question first).
ELEMENTS: `#card-step4`, `#stack-step3`, `#stack-step4`, `#line-2-3`, `#line-3-4`,
`#options-reveal`.
ANIMATION: line-level reveal "Done and dusted...400 cubic meter" (63.50-67.66s), re-emphasizing
`#chip-answer`. Options stagger in (68.30s), option B correct-pulses on the spoken word "B"
(69.34s), final "answer." re-emphasizes it (70.02s).

### Scene 7 - Outro (70.98-72.38s)
Everything fades together (`apt.fadeOut(tl, "#root > div", 70.98, 1.2)`), `tl.set` marker at
72.38.

## PART 3 - Asset List Required
- No external assets. Hand-authored inline SVG isometric ground+water box built per
  `illustration_reference.md` section 3.1 (fixed 30deg shear, non-equal-edge cuboid) and
  section 7.2 (unit-conversion callout component).

## PART 4 - Animation Complexity Notes
- The ground box's footprint (240 x 140 illustrative units) is NOT derived from the field's
  true shape, since the question only ever states an area (2 hectares), never a length x
  width - the footprint is explicitly illustrative (noted in the geometry comment), consistent
  with the rest of the figure using computed/converted true values for area and height.
- The water layer's height is drawn as a stylized, visibly-thin-but-legible band, not the
  true linear ratio against the footprint (0.02 m against a ~140-240 unit field footprint is
  undrawable at any single shared scale) - this mirrors the displacement-band exception in
  section 13 of the topic constitution, applied here since the water layer literally *is* a
  height-over-area figure, the closest structural sibling to that category's rise band.
- Both conversions (area, height) get their own `.fig-chip role` conversion callout per
  section 7.2, revealed before the resolved value crossfades in - the topic's #1 correctness
  trap ("unit conversions must be a visible step, never a silent substitution").
- Chain-walk order matches the card order: area resolves before height, height resolves
  before the formula fires, formula's "400" LINKs to the water fill's color change - same
  value in card and figure light up on the same frame.

## PART 5 - Master Timeline Overview

```
0.3    q-full-card + serial-num enter (heroEnterLowered, rise at 4.3)
4.72   ground-figure entrance
6.04   water-figure (sliver) entrance + chip-rain-given pops
7.74   chip-area-given pops
9.98   chip-find pops
12.62  emphasize whole box
14.68  water sliver pulse
18.20  water sliver pulse (2nd, "height two centimeter")
19.86  chip-area-given pulse
20.86  chip-height-given pulse (rename: chip-rain-given)
22.12  emphasize whole box
23.70  PIN_TIME - pinFlow question + illustration
23.90  GIVEN_TIME - Given card enters
24.15  Given -> stack morph
24.35  Step 1 card enters
25.06  conv-callout-area fades in
30.40  chip-area crossfades given -> resolved (20,000 m2)
33.80  emphasize chip-area-resolved
35.00  Step 1 -> stack morph; line-g-1 grows
35.20  Step 2 card enters
36.02  conv-callout-height fades in
44.60  water layer grows sliver -> full band; chip-height crossfades given -> resolved (0.02 m)
47.90  emphasize chip-height-resolved
51.30  Step 2 -> stack morph; line-1-2 grows
51.50  Step 3 card enters
61.40  water fill turns green; chip-answer ("400 m3") pops
63.30  Step 3 -> stack morph; line-2-3 grows
63.50  Step 4 card enters
64.20  emphasize chip-answer
67.90  Step 4 -> stack morph; line-3-4 grows; recenter for options
68.10  options-reveal fades in
68.30  optionsStagger
69.34  correctPulse on option B
70.02  final "answer." re-emphasize
70.98  END_FADE_TIME - everything fades
72.38  tl.set marker (timeline end)
```
