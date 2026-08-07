# Storyboard - Mensuration q1 (Area 144 cm2 -> Perimeter)

Category A (direct formula). Single square figure. Phase 1 sets the shape up only
(no derivation yet); Phase 2 solution cards do the actual work: Given = Area only,
Step 1 = derive the side, Step 2 = perimeter arithmetic. PIN_TIME moved to 25.6s -
before the side-derivation narration starts - so Step 1's card is what the viewer
watches solve `s = sqrt(144) = 12`, not the illustration.

## PART 1 - Narration Beat Analysis

| # | Time | Text | Purpose | Focus | Visual objective |
|---|------|------|---------|-------|-------------------|
| 1 | 0.08-5.82 | "So welcome back...solve some problems." | Intro | Question card | Hero card rises into place |
| 2 | 6.36-10.94 | "...area of a square as 144 cm2," | State given | Square figure | Square pops in, Area=144cm2 chip pops |
| 3 | 11.46-12.90 | "...find its perimeter." | State goal | Find chip | Role chip "Find: Perimeter" pops |
| 4 | 13.40-15.44 | "Now, what does perimeter mean?" | Define term | Square outline | Whole outline gets a soft emphasize pulse |
| 5 | 15.96-19.96 | "...total length of all four sides..." | Define term | Square outline | Two stroke-width pulses (4 sides read as one motion) |
| 6 | 20.48-25.46 | "...find length of one side. Correct?" | Set sub-goal | Unknown side arrow | Dashed grey arrow + "?" chip pop, gets emphasized |
| 7 | 26.12-29.40 | "Area of a square equal to side square," | Formula | Eq row 1 | "Area" "=" "s2" pop term by term |
| 8 | 29.90-33.44 | "...area is given as 144." | Substitute | Eq row 1 + chip | "= 144" pops; LINK pulse with the given chip |
| 9 | 34.00-37.32 | "So side square equal to 144." | Restate | Eq row 1 | brief re-emphasize on "144" |
| 10 | 37.64-39.14 | "Now ask yourself a simple question:" | Transition | Eq row 2 | "s =" caption pops, priming the answer slot |
| 11 | 39.66-45.08 | "Which number...gives 144? It is twelve," | Solve | Eq row 2 | "sqrt(144)" then "= 12" pop together |
| 12 | 45.52-49.74 | "...twelve times twelve equal to 144." | Confirm | Eq row 2 answer | emphasize pulse on "12" |
| 13 | 50.24-53.88 | "So the side of the square is twelve centimeter." | Resolve figure | Side arrow | Arrow/outline turn solid green, "12 cm" chip pops in, replacing "?" |
| 14 | 54.76-56.06 | "Got it? Perfect." | Confirm | Side label | re-emphasize "12 cm" chip |
| 15 | 56.72-60.24 | "...finding the perimeter is very easy." | Transition | Whole figure | PIN_TIME: question+figure glide to pinned slot; Given card recaps side=12cm |
| 16 | 60.88-64.08 | "Perimeter of a square equal to four times side." | Step formula | Step card | "Perimeter" "=" "4" "x" "side" pop word by word |
| 17 | 64.16-67.30 | "Why four? Because a square has four equal sides." | Reasoning | Step card note | small reasoning line reveals |
| 18 | 67.36-72.86 | "So perimeter equal to four times twelve, which gives us 48 cm." | Substitute+solve | Step card | "= 4 x 12 = 48 cm" pops word by word (ans green) |
| 19 | 72.92-76.82 | "Done and dusted. So the final answer will be 48 cm." | Confirm | Answer span | two confirm pulses on "48 cm" |
| 20 | 76.88-79.28 | "Hence, option C is the correct answer." | Reveal | Options grid | Step card morphs to stack; options stagger in; C pulses green |

## PART 2 - Scene-by-Scene Storyboard

**Scene 1 (0-5.82s, PIN target later).** SCREEN LAYOUT: centered question card, lowered
hero start (heroEnterLowered, offsetY 180, riseTime 5.82). ON-SCREEN: `#q-full-card`,
`#serial-num`. ANIMATION: fromTo scale 0.92->1 back.out(1.4) at 0.3s; badge pops in
tandem at 0.8s, both rise to rest at 5.82s. CAMERA: static. TRANSITIONS: none yet.
EDUCATIONAL PURPOSE: establish the question. CONTINUITY FROM PREVIOUS SCENE: opening
scene, nothing precedes it.

**Scene 2 (6.36-25.46s).** SCREEN LAYOUT: question pinned at rest, illustration area
below with the square figure. ON-SCREEN: `#square-figure` (rect, 260x260px drawn from
true side 12cm x scale 21.67px/cm), `#chip-area-given` ("Area = 144 cm2"),
`#chip-find` (role chip "Find: Perimeter"), `#arrow-side` (dashed grey, unknown),
`#label-unknown` ("?"). ANIMATION: square scale/opacity entrance at 6.36s; chip pops
at 9.08s; find-role chip at 11.46s; two outline emphasize/stroke pulses at 14.06s and
15.96s+18.3s representing "four sides"; unknown arrow entrance+emphasize at 20.48s and
22.4s; whole-figure emphasize at 24.96s ("Correct?"). CONTINUITY: the square is still
settling from its 6.36s entrance when the area chip pops - reads as one continuous
build.

**Scene 3 (26.12-45.08s).** SCREEN LAYOUT: eq-row-1 fixed row beneath the figure
("Area = s2 = 144"), eq-row-2 below it ("s = sqrt(144) = 12"). ON-SCREEN: `#eq1-area`,
`#eq1-eq1`, `#eq1-s2`, `#eq1-eq2`, `#eq1-144`, `#eq2-s`, `#eq2-eq1`, `#eq2-sqrt`,
`#eq2-eq2`, `#eq2-ans`. ANIMATION: eq-row-1 terms pop one per narration beat
(27.22/28.56/28.94/29.90/32.80s), the 144 pop LINKs with a pulse on `#chip-area-given`
at the same 32.80s beat. eq-row-2 terms pop at 37.80/39.66/40.00/44.68/44.68s (sqrt and
= 12 land together on "It is twelve"). Re-emphasize pulses at 35.9s (144) and 45.52s
(12). CONTINUITY: eq-row-1 is still visible (never removed) while eq-row-2 grows below
it - both rows persist, reading as one running derivation.

**Scene 4 (50.24-56.06s).** SCREEN LAYOUT: same figure, side now resolved. ANIMATION:
`#arrow-side` and the square's right edge tween `stroke` to `#4eb85f` at 50.58s (also
snap `stroke-dasharray` to solid at that beat); `#label-unknown` fades out,
`#label-side` ("12 cm", green) pops in with back.out(1.6) at 50.78s; `#eq2-ans` gets a
paired LINK pulse at the same time. Re-emphasize `#label-side` at 52.16s and 54.76s.
CONTINUITY: the green resolves in the figure at the same instant the equation's "12"
is already sitting there - the figure catches up to the math, not the other way round.

**Scene 5 (56.72s - PIN_TIME).** `apt.pinFlow` on `#q-full-card`->`#q-pinned` and
`#illustration`->`#illus-pinned`, `apt.fadeOut` on `#serial-num`, all at 56.72s. The
pinned illustration is a coordinate-exact static copy already showing the resolved
green side + "12 cm" label (section 8: pinned original is always visible, no
opacity:0 gating on its own content).

**Scene 6 (57.2-59.0s) - GIVEN card.** `apt.cardEnter` at 57.2s: chip "Given", single
line "Side = 12 cm" (line-level `.rv` at 57.4s - a recap, not fresh narration).
`apt.morphToStack` into `#stack-given` at 59.0s. CONTINUITY FROM PREVIOUS SCENE: fires
right as the pinned layout finishes settling from Scene 5's glide.

**Scene 7 (60.88-76.9s) - STEP card.** `apt.cardEnter` at 60.9s: chip "Step 1", three
math lines built word-by-word from `transcript.json`: "Perimeter = 4 x side" (60.88 /
62.44 / 62.78 / 63.02 / 63.32), a small reasoning note "(4 equal sides)" (65.06),
"= 4 x 12 = 48 cm" (68.50 / 68.94 / 69.20 / 69.56 / 70.54 / 70.92, `.ans` green).
Confirm pulses on the `.ans` span at 72.92s and 74.74s ("done and dusted" / "final
answer"). `apt.morphToStack` into `#stack-step1` at 76.9s, `apt.stackLineGrow` on
`#line-g-1` at the same time. CONTINUITY: the card has been open since 60.9s reacting
to every clause of the final narration block - it doesn't sit static.

**Scene 8 (76.9-79.28s) - OPTIONS.** `apt.recenterForOptions` on `#q-pinned` and
`apt.fadeOut` on `#illus-pinned` at 76.9s. `apt.fadeIn` `#options-reveal` at 77.3s,
`apt.optionsStagger` at 77.6s, `apt.correctPulse` on option C at 78.4s (lands under
"...is the correct answer"). CONTINUITY: fires the instant Step 1's card finishes
collapsing into the stack, so the options grid fills the same screen-center the card
just vacated.

**Scene 9 (79.88-81.28s) - END FADE.** `apt.fadeOut(tl, "#root > div", 79.88, 1.2)`,
`tl.set({},{},81.28)`. Nothing after.

## PART 3 - Asset List Required

- Square figure: `<rect>` 260x260 (design coords, section 6.1 arithmetic below)
- `.fig-chip` labels: Area-given, Find-role, unknown-side, side-resolved
- `arrow-side` component (7.1 double-headed arrow, reused)
- `eq-row-1` / `eq-row-2` fixed rows (section 9)
- Given/Step solution cards + one stack card pair + one connector line
- Options grid (4 buttons, C correct)

## PART 4 - Animation Complexity Notes

- No cube/cylinder/cone geometry needed (plain rect).
- No angle-arc rule applies (no cone in this question).
- Two-row equation growth is the main complexity; both rows use fixed
  `white-space:nowrap` so no reflow as terms pop.
- Only one stack card pair (Given -> Step 1) needed since side-derivation lives in the
  Phase 1 illustration itself per illustration_reference.md section 9's guidance for
  category A questions.

## PART 5 - Master Timeline Overview

```
0.3   heroEnterLowered start           5.82  hero rises (RISE_TIME)
6.36  square-figure entrance           9.08  chip-area-given pop
11.46 chip-find pop                    14.06 emphasize outline
15.96/18.3 outline stroke pulses x2    20.48 arrow-side entrance+emphasize
22.4  emphasize label-unknown          24.96 emphasize whole figure
27.22 eq1-area                         28.56 eq1-eq1
28.94 eq1-s2                           29.90 eq1-eq2
32.80 eq1-144 + LINK chip-area-given   35.9  re-emphasize eq1-144
37.80 eq2-s                            39.66 eq2-eq1
40.00 eq2-sqrt                         44.68 eq2-eq2 + eq2-ans (together)
45.52 emphasize eq2-ans                50.58 arrow/outline -> green (resolved)
50.78 label-side pop + LINK eq2-ans    52.16 re-emphasize label-side
54.76 re-emphasize label-side          56.72 PIN_TIME (pinFlow + serial fadeOut)
57.20 Given cardEnter                  57.40 Given textReveal
59.00 Given -> stack morph             60.90 Step1 cardEnter
60.88/62.44/62.78/63.02/63.32 Step1 line A word reveals
65.06 Step1 reasoning note             68.50/68.94/69.20/69.56/70.54/70.92 line C reveals
72.92 confirm pulse .ans               74.74 confirm pulse .ans
76.90 Step1 -> stack morph + recenter + illus-pinned fadeOut
77.30 options fadeIn                   77.60 optionsStagger
78.40 correctPulse (option C)          79.88 END_FADE_TIME
81.28 tl.set marker (timeline end)
```

Total timed events: ~44 over 79.3s narration (~1 every 1.8s average) - satisfies the
3-second law with only one or two beats sitting near the 3-3.5s mark, never above 5s.
