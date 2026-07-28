# Aptitude Video Template

Master template for building aptitude explainer videos. Each question lives in its own folder alongside this `_template/` folder.

### Writing style rule (all files: scripts, storyboards, HTML comments, README updates)

Never use the em dash character anywhere - not in narration script, storyboard prose, index.html comments/content, or README/skill edits. Use a regular hyphen `-`, a comma, or split into two sentences instead. This applies to every question folder going forward, not just existing content.

## 📁 Folder Structure

Questions are organized by **Topic → Difficulty → Question Number**. The shared design system lives in `_template/` at the MasterAptitude root.

> **Path convention:** Every command in this README is written **relative to the MasterAptitude root**. Before running anything, `cd` into the MasterAptitude folder (wherever you unzipped it - Desktop, Documents, anywhere). After that, paths like `_template/design-system.css` and `<Topic>/<Tier>/quesN/` just work.

```
MasterAptitude/                         ← unzip location is up to you (Desktop, Documents, etc.)
├── _template/                          ← shared design system (read-only for question sessions)
│   ├── design.md                       ← full design spec (read first)
│   ├── design-system.css               ← CSS variables, components
│   ├── template.html                   ← master HTML to copy per question
│   ├── animations.js                   ← reusable GSAP helpers
│   ├── question.yaml.example           ← question input format reference
│   ├── components/                     ← optional HTML snippets
│   ├── assets/                         ← shared assets
│   │   ├── question-card.html      ← reference design (CSS-based card)
│   │   ├── serial-num-badge.html   ← reference design
│   │   ├── serial-num-badge.svg    ← used by .serial-num class
│   │   └── logo.png
│   └── README.md                       ← this file
│
├── <Topic Name>/                       ← e.g. "Trains, Boats and Streams"
│   ├── Beginner/
│   │   ├── ques1/                      ← the actual question folder
│   │   │   ├── script.txt              ← Step 1 output
│   │   │   ├── voiceover.mp3           ← Step 2 (manual ElevenLabs)
│   │   │   ├── transcript.json         ← Step 3 (machine-readable)
│   │   │   ├── transcript.txt          ← Step 3 (human-readable)
│   │   │   ├── storyboard.md           ← Step 4
│   │   │   ├── illustration/           ← per-question assets
│   │   │   └── index.html              ← Step 5 (composition - final deliverable, no render step)
│   │   ├── ques2/
│   │   └── ...                         ← ques3 … ques10
│   ├── Amateur/
│   │   ├── ques1/
│   │   └── ...
│   ├── Intermediate/
│   │   ├── ques1/
│   │   └── ...
│   └── Advanced/
│       ├── ques1/
│       └── ...
│
├── <Another Topic>/
│   ├── Beginner/
│   ├── Amateur/
│   ├── Intermediate/
│   └── Advanced/
└── Sample/                             ← sandbox for testing
```

### 📌 Folder naming rules
- **Topic Name** folders match the topic exactly as it'll display in the video (e.g. "Trains, Boats and Streams")
- **Difficulty** folders are exactly one of `Beginner`, `Amateur`, `Intermediate`, or `Advanced` (no other names, case-sensitive). Each topic has all four. Throughout this README, `<Tier>` in path examples stands for one of these four names.
- **Question** folders are `ques1`, `ques2`, … `ques10` (each tier holds exactly 10 questions)

### 📌 Important: Files MUST be copied INTO the question folder

HyperFrames serves files **only from the question (project) folder**. Cross-folder references (`../_template/...`) silently 404 and break the composition.

So each question folder must contain its own copy of:
- `design-system.css` (copied from `_template/`)
- `animations.js` (copied from `_template/`)
- `assets/` (entire folder copied from `_template/assets/`)

`_template/` is the **source of truth** - every new question's local copies come from it. If you update the template later, re-copy into existing question folders to pick up the change.

This is handled automatically in Step 5B of the build workflow.

---

## 🎙️ STEP 1 - Voiceover Generation

### 1A. Inputs you'll receive

The user will upload **two screenshots**:
1. **Question screenshot** - contains the question text, all options (A/B/C/D), and the correct option highlighted
2. **Solution screenshot** - contains the complete text solution of the problem

Extract the following from these screenshots:
- Question text
- Options A, B, C, D
- Correct option letter
- Step-by-step solution (math + reasoning)
- Topic (inferred or asked if unclear)

### 1B. FIRST - ASK: does the user already have a script?

Before anything else, ask exactly:

> **Paste the voiceover script you have, or should I proceed to generate it myself?**

- **If the user pastes a script** → skip 1C entirely. Do NOT ask the clarifying questions in 1D. Save the pasted script directly as `script.txt` (per 1E) and move on to **STEP 2 (Voiceover Generation)**.
- **If the user asks you to generate it** → continue with 1C and 1D below.

### 1C. BEFORE generating the script - ASK THESE QUESTIONS

(Only when the user did NOT provide their own script in 1B.)

Always ask the user these two clarifying questions before writing anything:

1. **Explanation type?** - concise / medium / detailed
   - **Concise** → target 60–70s (or even less if the question is very easy)
   - **Medium** → target 80–120s
   - **Detailed** → target 100–150s

2. **Include common mistake?** - yes / no
   - If yes, point out the typical trap before solving

Wait for the user's answers before proceeding to the script.

### 1D. The Script Generation Prompt (THE source of truth)

The canonical prompt lives in a Claude-skill file at:

```
_template/skills/striver-apti-skill.md
```

**Agent instructions:** read that entire file and follow it exactly when generating the script. It defines the voice style, language level, opening lines, repetition patterns, self-questioning, confirmation beats, common-mistake guardrails, video-aware structure, difficulty-based pacing, and the ElevenLabs phonetic-spelling table (pi → pie, theta → thay-tuh, etc.).

> If your coding agent supports auto-loaded skills (Claude Code), the skill is named `striver-apti-skill` and can be invoked directly. Other agents (Cursor, Aider, Codex, etc.) should just read the file and follow its instructions inline.
>
> The skill file is the **single source of truth** for script style. Don't paraphrase it into the chat - read it fresh each time so updates propagate automatically.

### 1E. Save the script

Save the script (whether generated or pasted by the user in 1B) as `script.txt` inside the question's folder. The full path is:
```
MasterAptitude/<Topic>/<Tier>/quesN/script.txt
```

If the topic/difficulty/question folder doesn't exist yet, create it first.

---

## 🎧 STEP 2 - Manual Voiceover Generation (ElevenLabs Web)

The user will manually generate the audio. **Do NOT call the ElevenLabs API.**

### 2A. The user copies `script.txt` content.

### 2B. The user opens https://elevenlabs.io and:
1. Selects voice: **Striver Professional**
   - Voice ID: `arlADLNClXgT4QpDXygV`
2. Selects model: **eleven_multilingual_v2**
3. Pastes the script into the text box
4. Sets voice settings:
   - **Stability:** 0.65
   - **Similarity boost:** 0.85
   - **Style:** 0.25
   - **Speed:** 0.95
   - **Use speaker boost:** ON
5. Clicks **Generate** and waits
6. Downloads the resulting audio file

### 2C. The user saves the file as `voiceover.mp3` OR `voiceover.wav` in the question folder:
```
MasterAptitude/<Topic>/<Tier>/quesN/voiceover.mp3   (or voiceover.wav)
```

Both formats are accepted - whichever the user downloads/exports is fine, no manual conversion needed.

Once the voiceover file is in place, proceed to STEP 3 (transcription + animation alignment).

---

## 📝 STEP 3 - Transcribe the Voiceover (with Timestamps)

### 3A. Trigger

The user will:
1. Save the generated audio as `voiceover.mp3` or `voiceover.wav` in the question folder
2. Tell you to **"go ahead"** (or similar) to proceed with transcription

Do not run transcription before the user explicitly asks.

### 3B. Run transcription via ElevenLabs Scribe v2

Use Python (via the venv you created in `SETUP.md` Step 5 - `~/aptitude-venv/` on macOS/Linux, `$HOME\aptitude-venv\` on Windows) with these settings:

- **Model:** `scribe_v2`
- **timestamps_granularity:** `word`
- **API key:** loaded from the `.env` at the MasterAptitude root (`ELEVENLABS_API_KEY`). The script below finds it automatically by walking up from the current working directory.
- **Input file:** accept either `voiceover.mp3` or `voiceover.wav` - detect whichever exists in the question folder, don't assume the extension.

### 3C. The transcription script

```python
import os, json
from dotenv import load_dotenv, find_dotenv
from elevenlabs import ElevenLabs

load_dotenv(find_dotenv(usecwd=True))  # walks up from cwd to find MasterAptitude/.env
client = ElevenLabs(api_key=os.getenv("ELEVENLABS_API_KEY"))

# Accept either voiceover.mp3 or voiceover.wav - whichever is present
audio_path = next(
    (p for p in ("voiceover.mp3", "voiceover.wav") if os.path.exists(p)),
    None
)
if audio_path is None:
    raise FileNotFoundError("No voiceover.mp3 or voiceover.wav found in the question folder")

with open(audio_path, "rb") as f:
    result = client.speech_to_text.convert(
        file=f,
        model_id="scribe_v2",
        timestamps_granularity="word"
    )

# Group words into phrases with a pause threshold
PAUSE = 0.3  # seconds - adjust if needed
phrases = []
current = []
start_t = None
last_end = 0
for w in result.words:
    if w.type != "word":
        continue
    if start_t is None:
        start_t = w.start
    if last_end and (w.start - last_end) > PAUSE and current:
        phrases.append({"start": start_t, "end": last_end, "text": " ".join(current)})
        current, start_t = [], w.start
    current.append(w.text)
    last_end = w.end
if current:
    phrases.append({"start": start_t, "end": last_end, "text": " ".join(current)})

# Save both phrase-level and word-level data
with open("transcript.json", "w") as f:
    json.dump({
        "duration": phrases[-1]["end"],
        "phrases": phrases,
        "words": [
            {"text": w.text, "start": w.start, "end": w.end, "type": w.type}
            for w in result.words
        ]
    }, f, indent=2)

# Also save a human-readable version
with open("transcript.txt", "w") as f:
    for p in phrases:
        mm_ss_s = f"{int(p['start']//60):02d}:{p['start']%60:05.2f}"
        mm_ss_e = f"{int(p['end']//60):02d}:{p['end']%60:05.2f}"
        f.write(f"[{mm_ss_s} → {mm_ss_e}]  {p['text']}\n")
```

### 3D. Output files (saved in the question folder)

```
MasterAptitude/<Topic>/<Tier>/quesN/
├── script.txt
├── voiceover.mp3 (or voiceover.wav)
├── transcript.json      ← machine-readable (phrases + words)
└── transcript.txt       ← human-readable timeline
```

---

## 🎬 STEP 4 - Generate the Scene-by-Scene Storyboard

### 4A. Trigger

Immediately after transcription completes (Step 3), generate the storyboard - no separate approval gate here (see 3E).

By this point you have:
- Question (text, options, correct answer)
- Text solution
- Script (`script.txt`)
- Voiceover (`voiceover.mp3` or `voiceover.wav`)
- Transcript with timestamps (`transcript.json` + `transcript.txt`)

### 4B. Process

Do **NOT** jump straight to a scene-by-scene storyboard.

**FIRST** analyze the voiceover transcript and break it into logical **narration beats**.

For each beat identify:
- Timestamp estimate
- Narration text
- Educational purpose
- Viewer attention focus
- Visual objective

Only after the beat analysis is complete should you create the detailed scene-by-scene storyboard.

### 4C. The Storyboard Generation Prompt (THE source of truth)

Use this exact prompt:

````
You are a Senior Motion Director creating premium 2D educational explainer videos.

You have the question, text solution, correct answer, script, voiceover, transcript.

Your job is NOT to immediately create a storyboard.

FIRST analyse the voiceover and divide it into logical narration beats.

For each beat identify:
* Timestamp estimate
* Narration text
* Educational purpose
* Viewer attention focus
* Visual objective

After completing the transcript analysis, create a highly detailed scene-by-scene storyboard.

The storyboard should be designed for:
* 16:9 landscape
* White background
* Google Sans / Flex typography
* Clean modern minimal UI
* Flat 2D illustrations
* Motion graphics style
* Premium educational product feel

Visual inspiration:
* Kurzgesagt
* Apple keynote animations
* Linear design language
* High-end educational YouTube explainers

For every scene provide:
- SCENE NUMBER
- TIMESTAMP
- VOICEOVER
- VISUAL OBJECTIVE
- SCREEN LAYOUT
- ON-SCREEN ELEMENTS
- ANIMATION DETAILS
- CAMERA MOVEMENT
- TRANSITIONS
- EDUCATIONAL PURPOSE
- VISUAL HIERARCHY
- ATTENTION MANAGEMENT
- MOTION NOTES
- CONTINUITY FROM PREVIOUS SCENE - one or two sentences on exactly how this
  scene's opening motion picks up from the previous scene's ending motion
  or position (e.g. "the outgoing card is still completing its morph into
  the stack as this card's cardEnter begins, and the center-stage flow
  line from Scene N-1 is still fading out"). Scenes are numbered and
  described separately, but they must read as one continuous take - this
  field is what keeps that explicit instead of assumed.

Use extreme visual specificity.

Never write vague directions such as:
"show a car"
"animate the equation"

Instead write:
"A red flat 2D car enters from the left edge and settles on a minimal road. A distance label fades upward from beneath the road while the speed value scales from 80% to 100% size with soft easing."

Think like a motion designer, not a teacher.

Every sentence of narration should have a visual reason to exist.
Every animation should improve understanding.

Important:
- Maintain object continuity. If a car appears in Scene 1, the same car should persist through later scenes unless intentionally replaced.
- Keep question pinned during solution phases.
- Use progressive information reveal.
- Avoid unnecessary decorative animation.
- Prioritize clarity, comprehension, and premium visual storytelling.

Output format:

PART 1: Narration Beat Analysis
PART 2: Scene-by-Scene Storyboard
PART 3: Asset List Required
PART 4: Animation Complexity Notes
PART 5: Master Timeline Overview
````

### 4D. Constraints - REFERENCE THESE TEMPLATE FILES (MANDATORY)

Before writing the storyboard, **READ these template files** and use them as the single source of truth:

| What to use | File to read | Why |
|-------------|-------------|-----|
| **Layout & positions** | `_template/template.html` | Pixel coordinates of every element (question card, serial num, solution card, stack column, options, logo, etc.) |
| **Layout diagram** | `_template/design.md` (the ASCII layout block) | High-level positional reference |
| **Colors, fonts, components** | `_template/design-system.css` + `_template/design.md` | Tokens, typography, all component classes (`.q-card`, `.solution-card`, `.stack-card`, `.chip`, `.step-circle`, `.stack-line`, `.frac`, `.opt-btn`, `.serial-num`, etc.) |
| **Animation patterns** | `_template/animations.js` | Available helpers: `apt.questionEnter`, `apt.cardEnter`, `apt.morphToStack` (0.8s), `apt.stackEnter`, `apt.setStackLine` (computes a connector line's top/height from the two real rendered `.step-circle` centers - call once per line, before the timeline builds; never hand-guess these numbers), `apt.stackLineGrow`, `apt.pinFlow` (real glide for the Phase 1→2 pin transition - replaces bare fadeOut/fadeIn), `apt.ambientLoop` (finite-repeat bob on a pinned icon for long silent stretches), `apt.optionsStagger`, `apt.correctPulse`, `apt.textReveal` (word/line fade-in inside an active card's `.math`, synced to `transcript.json` - see design.md "Text Reveal"), `apt.resultReveal`, `apt.emphasize`, etc. |
| **Standard durations & easings** | This README → "Standard durations" table | Every animation duration is pre-defined and constant |
| **Timing schedule structure** | This README → "Standard Timing Schedule" | Phase order, when each element appears, gap rules |
| **Available assets** | `_template/assets/` | `serial-num-badge.svg`, `logo.png` (question card is pure CSS) |

### 4D.1 Hard rules the storyboard MUST follow

These are non-negotiable - the storyboard cannot invent new layouts, colors, animations, or components:

**Visual system:**
- ❌ Do NOT invent new colors. Use only tokens from `design-system.css` (`--primary` `#6373db`, `--primary-light` `#e2e5ff`, `--success` `#4eb85f`, `--topic` `#949494`, `--text` `#000000`, `--bg` `#FFFFFF`)
- ❌ Do NOT invent new fonts. Only Google Sans Flex (Medium for main question text on Phase 1, Regular everywhere else)
- ❌ Do NOT propose new components. Use only `QuestionCard`, `SerialNum`, `SolutionCard`, `SolutionStackCard`, `solutionChip`, `StepCircle`/`StackLine` (the stack-card's badge+connector), `options grid` / `opt-btn`, `logo`, `topic-name`, `bottomStrip`, `Illustration`, `Fraction`
- ✅ Background layers are always: dotted-grid (65% opacity) + bottom-strip (15px blue)

**Layout:**
- ✅ Use pixel positions from `template.html` (question card centered, serial badge top-left, stack column on left, active solution card centered, logo bottom-right, topic name bottom-left)
- ✅ Question pins to top from Phase 2 onwards
- ✅ Stack column grows downward on the left as each step completes
- ✅ Final reveal shows options grid (2×2) with correct option highlighted in green

**Animations:**
- ✅ Use only the helpers defined in `animations.js` - name them explicitly in motion notes (e.g., "Use `apt.morphToStack` here")
- ✅ Every ACTIVE center card's `.math` text reveals word-by-word or line-by-line via `apt.textReveal`, timed to `transcript.json` (see design.md "Text Reveal") - not an all-at-once fade with the card, and not `apt.emphasize`/`apt.resultReveal` pulses layered on top of it. Collapsed stack cards keep their plain single fade-in.
- ✅ Every active SolutionCard → SolutionStackCard transition is a **0.8s morph** using `apt.morphToStack` - NO exceptions
- ✅ The Phase 1 → Phase 2 pin transition uses `apt.pinFlow` (real glide, measured from actual rendered positions) - NOT a bare `apt.fadeOut`/`apt.fadeIn` swap. The full question/illustration must visibly move toward their pinned slot, not disappear and reappear.
- ✅ The **Given card's entrance time is its own timestamp**, pulled from `transcript.json` for whenever the narration actually starts stating given values - never just copy `PIN_TIME`. State both `PIN_TIME` and `GIVEN_TIME` explicitly in the storyboard's Scene 2 (or wherever the Given card opens) so the gap between them (if any) is a deliberate, documented choice.
- ❌ Do NOT use `apt.stepFlow` / `.step-flow-line` - the transient center-stage connector between consecutive Given/Step cards reads as a distracting flashing vertical line and has been dropped from the template. Rely on `apt.stackLineGrow`'s permanent left-column connector instead.
- ✅ Use `apt.ambientLoop` for a small finite bob on a pinned illustration's icon during long silent narration stretches. Optional per question - call out in motion notes when used.
- ✅ Standard durations from this README's table are fixed; only absolute timestamps change per video
- ❌ Do NOT introduce custom animations the helpers don't already cover. If you genuinely need a new one, flag it and stop - don't write it into the storyboard.

**Continuity:**
- ✅ Object continuity: an illustration that enters in Phase 1 stays through Phase 2 (smaller, repositioned per layout)
- ✅ Stack cards persist on the left through subsequent steps (they don't disappear)

If anything in the storyboard would require violating these rules, stop and flag it for the user before writing it.

### 4E. Save the output

Save the complete storyboard (all five parts) as `storyboard.md` in the question folder:

```
MasterAptitude/<Topic>/<Tier>/quesN/storyboard.md
```

### 4F. After the storyboard

No stop here - the model switch already happened at Step 3E, and Step 5 (composition build) should run on the same upgraded model. Proceed straight into the HTML composition (Step 5). This is not a text-review gate; the user reviews the actual result in the live HyperFrames preview (Step 5D), not a markdown document.

---

## 🎥 STEP 5 - Composition Build (Storyboard + Voiceover → index.html)

### 5A. Trigger

Immediately after the storyboard is written (Step 4) - no separate approval gate.

By this point the question folder contains:
```
qNNN-XXX/
├── script.txt
├── voiceover.mp3
├── transcript.json
├── transcript.txt
└── storyboard.md
```

### 5B. Build the HyperFrames composition

⚠️ **CRITICAL - HyperFrames serves files ONLY from the project (question) folder.** Any `../_template/...` style paths from inside `index.html` will silently fall back to the SPA shell and break the build. You MUST copy the template files INTO the question folder.

1. **Copy template files INTO the question folder:**
   ```bash
   QUES_DIR="<Topic>/<Tier>/quesN"
   cp _template/design-system.css "$QUES_DIR/"
   cp _template/animations.js     "$QUES_DIR/"
   cp -R _template/assets          "$QUES_DIR/assets"
   ```
   (Treat `_template/` as the **source of truth** - copy from it, never link across.)

2. **Copy** `_template/template.html` → `<quesN>/index.html`

3. **Set CSS/JS paths in `index.html` to local copies** (not `../_template/...`):
   ```html
   <link rel="stylesheet" href="design-system.css">
   <script src="animations.js"></script>
   ```
3. **Read** these files (in this order):
   - `storyboard.md` (the plan)
   - `transcript.json` (exact timings)
   - `_template/template.html` (layout coordinates - do not change)
   - `_template/design-system.css` (component classes - do not redefine)
   - `_template/animations.js` (available helpers - do not invent)
4. **Customize** `index.html` per the storyboard:
   - Replace `QUESTION_TEXT`, `TOPIC_NAME` placeholders. Leave the SerialNum digit as `Q` - it's a fixed badge letter, not the question number.
   - Fill in Given card content
   - Fill in each Step card content (math, fractions, highlighted spans)
   - Fill in Options A/B/C/D and mark the correct one with class `correct`
   - Drop illustration assets into the question's `illustration/` subfolder + reference them in HTML
   - Set `<audio>` `data-duration` to match the voiceover length
5. **Wire up the GSAP timeline** in the inline `<script>` block at the bottom:
   - Use only helpers from `animations.js` (`apt.cardEnter`, `apt.morphToStack`, etc.)
   - Set absolute times from the **transcript** (each card enters when its narration starts)
   - Every active card → stack transition = `apt.morphToStack(tl, fromSel, toSel, time)` (0.8s built in)
   - Leave ~1s breathing gap after morph completes before next card enters
   - Match storyboard's scene-by-scene structure exactly

### 5C. Per-question asset folder

Per-question illustrations (trains, cars, boats, etc.) live in the question's `illustration/` subfolder, not in `_template/assets/`:

```
MasterAptitude/<Topic>/<Tier>/quesN/
├── illustration/
│   ├── train-blue.svg
│   └── train-red.svg
└── index.html   ← references illustration/train-blue.svg etc.
```

**When the user manually supplies an illustration SVG** (drops a file into the question folder themselves, e.g. from svgrepo or similar): use it as-is. Only recolor its existing hex fills/`stop-color`s to match the brand palette (`--primary` `#6373db` and blue-grey neighbors) if asked - do a straight hex find-and-replace across the file. Do not otherwise touch the SVG (don't re-path, restructure, resize its `viewBox`, drop/add elements, or "clean it up"). The file the user gave you is the source of truth for shape; only color is fair game, and only when requested.

### 5D. Preview

⚠️ **The agent must NOT launch the preview server.** The user runs `npx hyperframes preview` themselves from their own terminal - do not run `hyperframes preview`, do not start any dev server for this project, and do not try to capture thumbnails/screenshots from a preview server. The user will paste in screenshots of any errors they hit. Only edit `index.html` (and re-sync `storyboard.md` if timings changed) based on that feedback.

```bash
cd "<Topic>/<Tier>/quesN"
npx hyperframes preview --port 3002
```

Show the user http://localhost:3002 and wait for feedback. Iterate on:
- Card timings vs voiceover (adjust absolute timestamps in the timeline)
- Layout/positioning of illustration elements
- Any animation feel issues (but never change locked durations)

### 5E. Final folder state

```
MasterAptitude/<Topic>/<Tier>/quesN/
├── script.txt
├── voiceover.mp3
├── transcript.json
├── transcript.txt
├── storyboard.md
├── illustration/
│   └── ...assets
└── index.html   ← THE DELIVERABLE (composition; no render step)
```

> **No render step.** This workflow stops at the HyperFrames composition (`index.html`) previewed and approved in Studio. Do not run `npx hyperframes render` and do not produce an `output.mp4` - that step has been intentionally removed.

### 5F. Verification checklist (before declaring done)

- [ ] Every storyboard scene is represented in the timeline
- [ ] Every animation start time aligns with its narration phrase in `transcript.json`
- [ ] All card → stack transitions use `apt.morphToStack` (0.8s)
- [ ] Phase 1 → Phase 2 uses `apt.pinFlow` (real glide), not a bare `apt.fadeOut`/`apt.fadeIn` swap
- [ ] `GIVEN_TIME` is its own transcript-derived timestamp, separate from `PIN_TIME` - not silently defaulted to it
- [ ] If timings were adjusted directly in `index.html` during preview, `storyboard.md` has been re-synced to match (don't ship a storyboard that no longer describes the actual composition)
- [ ] Stack cards persist after they're added (no disappearing)
- [ ] Question is pinned at top from Phase 2 onwards
- [ ] Final options grid shows green highlight on the correct option
- [ ] No invented colors, fonts, or components - only what's in the design system
- [ ] Voiceover audio plays in sync with the visuals end-to-end
- [ ] Background layers (dotted grid + bottom strip) present in every phase
- [ ] Topic name + logo visible in every phase
- [ ] Composition renders cleanly at 1920×1080 in preview, no overflow / cut-off elements

If any item fails, fix it in the composition and re-preview. Don't ship a half-baked composition. There is no render step - `index.html` (previewed and approved) is the deliverable.

---

## 🚀 Full Workflow Overview

### Step 1: Create the question folder
```
mkdir "qNNN-short-description"
cd "qNNN-short-description"
```

### Step 2: Create question.yaml
```yaml
question_id: "q002-car-average-speed"
serial_num: 2
topic: "Time, Speed and Distance"

question:
  text: "A car travels 100 km at 50 km/h, then 150 km at 75 km/h..."
  highlight_terms: ["100 km", "50 km/h", "150 km", "75 km/h", "50 km", "100 km/h", "average speed"]

illustration:
  type: "road_segments"
  segments:
    - {distance: 100, speed: 50}
    - {distance: 150, speed: 75}
    - {distance: 50, speed: 100}

given:
  - "Distance 1 = 100 km, Speed 1 = 50 km/h"
  - "Distance 2 = 150 km, Speed 2 = 75 km/h"
  - "Distance 3 = 50 km, Speed 3 = 100 km/h"

steps:
  - label: "Step 1"
    title: "Total Distance"
    math_html: "100 + 150 + 50 = <span class='ans'>300 km</span>"
  - label: "Step 2"
    title: "Time for each part"
    math_html: "..."
  - label: "Step 3"
    title: "Average Speed"
    math_html: "Distance ÷ Time = <span class='ans'>66.67 km/h</span>"

options:
  A: "60 km/h"
  B: "65 km/h"
  C: "66.67 km/h"     # correct
  D: "70 km/h"
correct: C
```

### Step 3: Generate voiceover
- Write a script (or use the steps to generate one)
- Use ElevenLabs (voice: `arlADLNClXgT4QpDXygV` - Striver Professional, multilingual_v2)
- Save as `voiceover.mp3`

### Step 4: Transcribe with timestamps
- Use ElevenLabs Scribe v2 with `timestamps_granularity: "word"`
- Save as `transcript.json`

### Step 5: Copy & customize template.html
- Copy `_template/template.html` → `qNNN/index.html`
- Replace `QUESTION_TEXT`, `TOPIC_NAME` (leave the SerialNum digit as `Q`)
- Drop illustration assets in `illustration/` folder
- Fill in Given + Step cards from `question.yaml`
- Fill in Options + mark correct one with class `correct`
- Adjust GSAP timings to match `transcript.json` timestamps

### Step 6: Preview
```bash
cd "qNNN-short-description"
npx hyperframes preview --port 3002
```

Once the preview is approved, the composition is done - there is no render step.

---

## ⏱ Standard Timing Schedule (WHO Appears WHEN)

### 📌 Video Duration

**Every aptitude video is between 60–150 seconds long.** The exact length is determined by the uploaded voiceover (`voiceover.mp3`), NOT by a fixed schedule. The schedule below is an EXAMPLE of relative ordering - the absolute times shift based on:
- How long the voiceover is
- How many steps the problem has (typically 1 Given + 2–4 Steps)
- How much each step is explained in the narration

### 📌 What Stays Constant (regardless of video length)

- **Order of phases**: Phase 1 (question + illustration) → Phase 2 (given + steps) → Phase 3 (options reveal)
- **Animation durations**: 0.8s morph, 0.55s card enter, 0.4s stack enter, etc. (see table below) - these never change
- **The morph standard** (`apt.morphToStack`, 0.8s) - used for every card → stack transition
- **Voiceover drives timing**: each card appears when its content starts being narrated, exits AFTER the narration finishes
- **No premature exits**: a card stays on screen until the voiceover is done explaining it

### 📌 What Varies Per Video

- Total length (60–150s)
- Number of steps (cards)
- Length of Phase 1 illustration build (shorter for simple problems, longer for complex setups)
- Hold times between animations (longer for harder concepts, shorter for quick recaps)

---

### Example Schedule (~65s video, 3 steps)

The numbers below are illustrative for a short video. **For your actual video, derive absolute times from the voiceover transcript.**

```
TIME (s)   ELEMENT                          WHAT HAPPENS
─────────  ───────────────────────────────  ─────────────────────────────────
0.0        Background layers                Checker grid + dotted grid visible
0.0        bottomStrip + topic + logo       Always visible (entire video)
0.3        QuestionCard (full)              questionEnter - fades + scales in
0.8        SerialNum badge                  serialEnter - pops with rotation
~2.5       Illustration                     Builds in (per-question custom)
3–18       Illustration animates            Cars drive / trains move / etc.

[ END OF PHASE 1 - PIN_TIME ]
─────────  ───────────────────────────────  ─────────────────────────────────
21.5       QuestionCard + Illustration      🌟 pinFlow - real glide into pinned slot (0.8s), NOT a fadeOut/fadeIn swap
23.0       Ambient loop (optional)          apt.ambientLoop on the pinned icon, if the pinned area would
                                             otherwise sit idle for a while before Given opens

[ GIVEN_TIME - its OWN transcript timestamp, NOT the same as PIN_TIME ]
─────────  ───────────────────────────────  ─────────────────────────────────
26.0       SolutionCard "Given"             cardEnter (center) ← fires whenever the narration actually
                                             starts stating given values, however far after PIN_TIME that is

[ STEP CYCLE - repeats per step ]
─────────  ───────────────────────────────  ─────────────────────────────────
29.5       Given card → Given stack         🌟 morphToStack (0.8s)
30.5       SolutionCard "Step 1"            cardEnter (center)
─────
37.5       Step 1 card → Step 1 stack       🌟 morphToStack (0.8s)
38.5       SolutionCard "Step 2"            cardEnter (center)
─────
47.5       Step 2 card → Step 2 stack       🌟 morphToStack (0.8s)
48.5       SolutionCard "Step 3"            cardEnter (center)
─────
57.5       Step 3 card → Step 3 stack       🌟 morphToStack (0.8s)

[ PHASE 3 - OPTIONS REVEAL ]
─────────  ───────────────────────────────  ─────────────────────────────────
58.2       options-reveal container         fadeIn
58.8       Option buttons A/B/C/D           optionsStagger (stagger 0.12s)
60.5       Correct option                   correctPulse (highlight + scale)
~65        End                              All elements remain visible
```

### Standard durations

| Action | Duration | Easing |
|--------|----------|--------|
| `apt.questionEnter` | 0.7s | `back.out(1.4)` |
| `apt.serialEnter` | 0.55s | `back.out(2)` |
| `apt.cardEnter` | 0.55s | `back.out(1.4)` |
| **`apt.morphToStack`** | **0.8s** | `power2.inOut` |
| `apt.cardExit` | 0.35s | `power2.in` |
| `apt.stackEnter` | 0.4s | `back.out(1.3)` |
| `apt.fadeIn` / `fadeOut` | 0.4s | `power2.in/out` |
| `apt.optionsStagger` | 0.45s × 4 (stagger 0.12s) | `power3.out` |
| `apt.correctPulse` | 0.4s yoyo | `back.out(1.5)` |
| `apt.resultReveal` | 0.5s | `back.out(1.4)` |
| `apt.emphasize` | 0.3s yoyo | `power2.out` |
| `apt.roadSweep` | 0.9s | `power3.out` |
| `apt.heroEnterLowered` | 0.7s + 0.6s rise | `back.out(1.4)` / `power2.inOut` |
| `apt.recenterForOptions` | 0.5s | `power2.inOut` |
| `apt.pinFlow` | 0.8s | `power2.inOut` |
| `apt.ambientLoop` | 1.4s period (finite reps, no infinite `-1`) | `sine.inOut` yoyo |

### Gap rules

- Always leave a **~1s breathing gap** between the morph completion and the next card entrance. The morph itself is 0.8s, so plan the next card around `morph_start + 1.0s`.
- Voiceover phrases should drive the absolute timings. Use the transcript to align each card to the moment its content is narrated.
- Card stays on screen until the voiceover finishes explaining it - never exit before the narration ends.

### Build Workflow for Each Video (timing-wise)

1. **Generate / receive voiceover** → save as `voiceover.mp3`
2. **Get its total duration** → this is your video length (60–150s range expected)
3. **Transcribe with timestamps** → ElevenLabs Scribe v2 with `timestamps_granularity: "word"`
4. **Map each phrase to a card/step** → which spoken phrase corresponds to which Given/Step
5. **Set absolute times** in the GSAP timeline:
   - Phase 1 (question + illustration) covers the intro phrases
   - Each step card enters at the start of its narrating phrase
   - Each morph happens 0.3–0.5s after the phrase finishes
   - Options reveal aligns with the final "the answer is..." phrase
6. **Verify** in HyperFrames preview that every animation lands on its narration

---

## 🎨 Design Quick Reference

| Element                | Color/Style                         |
| ---------------------- | ----------------------------------- |
| Primary blue           | `#6373db`                           |
| Light blue (stack bg)  | `#e2e5ff`                           |
| Correct answer green   | `#4eb85f`                           |
| Topic name gray        | `#949494`                           |
| Font                   | Google Sans Flex (Medium ⇒ Q only)  |
| Stack card background  | `#e2e5ff` (no shadow)               |
| Solution card          | white + shadow                      |
| Chips (Given/Step N)   | `#6373db` pill, white text          |

**The Medium font weight is reserved for the main question text ONLY.** Everything else (steps, math, options, labels) uses Regular weight.

---

## 🛠 Components Quick Reference (HTML snippets)

```html
<!-- Question card -->
<div class="q-card">
  <div class="q-text">Text with <span class="num">accents</span></div>
</div>

<!-- Serial number -->
<div class="serial-num">
  <div class="badge-bg"></div>
  <div class="digit">1</div>
</div>

<!-- Active solution card - chip + math wrapped in .card-content so
     apt.morphToStack can crossfade the text independently of the box -->
<div class="solution-card">
  <div class="card-content">
    <span class="chip">Step 1</span>
    <div class="math">100 + <span class="hi">150</span> = <span class="ans">250</span></div>
  </div>
</div>

<!-- Stack card - same .card-content wrapping. The active center card
     (above) keeps its text .chip; the collapsed STACK version instead
     uses a .step-circle badge ("G" for Given, "1"/"2"/"3"... for steps) -->
<div class="stack-card">
  <div class="card-content">
    <span class="step-circle">G</span>
    <div class="math">Train A = <span class="hi">180 m</span></div>
  </div>
</div>

<!-- Connector line between two consecutive stack circles - a sibling of
     the stack cards, NOT nested inside one. Leave top/height unset in the
     markup (just opacity:0) - apt.setStackLine() computes them at runtime
     from the actual rendered circle centers (see "GSAP Helper Calls"
     below). Never hand-guess or copy these numbers across questions -
     card heights vary with line count. -->
<div id="line-g-1" class="stack-line" style="opacity:0;"></div>

<!-- Fraction -->
<span class="frac">
  <span class="top hi">numerator</span>
  <span class="bot hi">denominator</span>
</span>

<!-- Option button -->
<div class="opt-btn"><span class="letter">A</span>66 km/hr</div>

<!-- Correct option (highlighted state) -->
<div class="opt-btn correct"><span class="letter">A</span>66 km/hr</div>
```

---

## 🎬 GSAP Helper Calls

```js
apt.questionEnter(tl, "#q-full-card", 0.3);          // big question card
apt.serialEnter(tl, "#serial-num", 0.8);             // badge pop

// 🌟 PIN FLOW - Phase 1 → Phase 2, as a real glide (measured real
// positions, see animations.js), not a fadeOut/fadeIn swap. Call once per
// pair (question, illustration), same PIN_TIME so they move together.
apt.pinFlow(tl, "#q-full-card", "#q-pinned", PIN_TIME);
apt.pinFlow(tl, "#illustration", "#illus-pinned", PIN_TIME);

// GIVEN_TIME is its OWN timestamp from transcript.json - do not default
// it to PIN_TIME. There is often a real gap where the pinned layout sits
// alone before the Given card's content is actually narrated.
apt.cardEnter(tl, "#card-given .solution-card", GIVEN_TIME); // step card

// Word/line text-sync reveal - call right after cardEnter for each ACTIVE
// card. Fades every <span class="rv" data-t="..."> inside .math at its own
// absolute transcript.json timestamp (word-level for verbatim numeric/
// equation lines, line-level for paraphrased lines). Not used on stack cards.
apt.textReveal(tl, "#card-given .math");

// 🌟 STANDARD MORPH (0.8s) - active card → stack card
// Use this instead of separate cardExit + stackEnter when transitioning
apt.morphToStack(tl,
  "#card-given .solution-card",   // active card (current center)
  "#stack-given .stack-card",     // target stack card (already in DOM, opacity 0)
  29.5);                          // start time

apt.fadeIn(tl, "#options-reveal", 58);
apt.optionsStagger(tl, ".opt-btn", 58.8);
apt.correctPulse(tl, ".opt-btn.correct", 60.5);
apt.resultReveal(tl, "#result-span", 64.5);
apt.emphasize(tl, "#td-150", 47);

// Phase 1 hero entrance - starts lowered, rises to rest on the opening line
apt.heroEnterLowered(tl, "#q-full-card", 180, 3.6);

// Clears the stack column and aligns the pinned question against it -
// pair with a fadeOut of the pinned illustration at the same time
apt.fadeOut(tl, "#illus-pinned", 57.7);
apt.recenterForOptions(tl, "#q-pinned", 160, 180, 57.7);

// 🌟 Stack connector line - first SET its geometry from the real rendered
// circle centers (call once per line, before building the timeline - see
// the top of the script block), then GROW it at the SAME time as the
// morphToStack call that lands the LOWER circle into the stack (both
// circles must already be on screen before the line grows). Never fade
// these lines out later, even during the options recenter.
apt.setStackLine("#line-g-1", "#stack-given .step-circle", "#stack-step1 .step-circle");
apt.morphToStack(tl, "#card-step1 .solution-card", "#stack-step1 .stack-card", 37.5);
apt.stackLineGrow(tl, "#line-g-1", 37.5);

// Small finite bob on a pinned illustration's icon, so it doesn't sit
// dead-static through a long narration stretch. Bounded window only -
// never an infinite repeat (breaks seek/scrub-based rendering).
apt.ambientLoop(tl, "#illus-pinned-icon", 23.0, 57.0);
```

### 🌟 The Morph Pattern (REQUIRED for card → stack)

Whenever an active SolutionCard completes and needs to become a SolutionStackCard in the left column, use `apt.morphToStack()` with **0.8s duration** (built in).

The morph transition includes:
- Position slide (center → left)
- Size shrink (matches stack card)
- Background color change (white → `#e2e5ff`)
- Shadow removal
- Easing: `power2.inOut`

**Required HTML setup:**
- Active card visible at center
- Target stack card already in DOM at its final position with `opacity: 0`
- Both cards' chip + math wrapped in a `.card-content` div - the morph crossfades this text independently of the box transform (text fades out on `from` at 35% of the morph, fades in on `to` at 55%+)
- Call `apt.morphToStack(tl, activeSelector, targetSelector, time)`

---

## ✅ Build Checklist for Each Video

- [ ] Question YAML created with all data
- [ ] Voiceover generated (ElevenLabs Striver, multilingual_v2)
- [ ] Transcript with timestamps obtained
- [ ] index.html copied from template, customized
- [ ] Topic name filled in; SerialNum badge left as fixed `Q` (not the question number)
- [ ] Illustration assets in place
- [ ] Given + Step cards populated
- [ ] Stack cards spaced with a real measured gap (not evenly guessed), `.step-circle` badges (G/1/2/3) sized/centered correctly, `.stack-line` connectors positioned via `apt.setStackLine` (not hand-guessed top/height) and growing in sync with each step's `morphToStack`
- [ ] Options A/B/C/D filled with `correct` class on right one
- [ ] GSAP timings aligned to transcript
- [ ] Preview looks good in HyperFrames Studio at 1920×1080
- [ ] No render step - `index.html` is the final deliverable
- [ ] If any timing/animation was tweaked directly in `index.html` during preview (common), **re-sync `storyboard.md`** to match before marking the question done - `index.html` is the source of truth, but a storyboard that silently drifts from it is useless for the next question that copies this one's patterns

---

## 🔄 For Future Agent Sessions

This workflow runs in any coding agent that can read files, edit code, and run shell commands (Claude Code, Codex, Cursor, Aider, etc.).

When starting a new session to build a video, say:

> "Read `_template/README.md` and `design.md`, then build a video for `qNNN-XXX/question.yaml`."

The agent will:
1. Read the template + design system
2. Read the question data
3. Generate voiceover if needed
4. Transcribe for timestamps
5. Build the index.html from the template
6. Align animations to transcript
7. Preview and approve - no render step
