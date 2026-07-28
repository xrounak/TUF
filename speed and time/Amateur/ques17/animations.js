/* ═══════════════════════════════════════════════════════════════
   APTITUDE VIDEO — GSAP ANIMATION HELPERS
   Reusable animation patterns called as apt.xxx(tl, selector, time)
   ═══════════════════════════════════════════════════════════════ */

window.apt = (function() {

  // ─── Card entrance: fade + scale + y slide
  function cardEnter(tl, selector, time) {
    tl.fromTo(selector,
      { y: 40, scale: 0.92, opacity: 0 },
      { y: 0, scale: 1, opacity: 1, duration: 0.55, ease: "back.out(1.4)" },
      time);
  }

  // ─── Card exit: fade + scale down
  function cardExit(tl, selector, time) {
    tl.to(selector,
      { opacity: 0, scale: 0.92, duration: 0.35, ease: "power2.in" },
      time);
  }

  // ─── Stack card slide-in (from left)
  function stackEnter(tl, selector, time) {
    tl.fromTo(selector,
      { x: -20, scale: 0.85, opacity: 0 },
      { x: 0, scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.3)" },
      time);
  }

  // ─── MORPH: Active SolutionCard → SolutionStackCard (0.8s box + text crossfade)
  // Reads the target stack-card's computed position/size and smoothly
  // animates the active card's BOX into that slot (position/scale/bg/shadow),
  // while its TEXT crossfades independently: the active card's text fades
  // OUT first (so it never visibly scales/distorts while the box shrinks),
  // then once the box has landed, the stack card's OWN correctly-sized
  // text fades IN. Requires both cards' text wrapped in a ".card-content"
  // div (see template.html) so text opacity can be animated separately
  // from the box transform.
  //
  // Usage:
  //   apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 29.5);
  //
  // The target stack card should be present in DOM at the destination
  // position (can have opacity:0). The active card is what visually morphs.
  function morphToStack(tl, fromSel, toSel, time) {
    const DUR = 0.8;
    const EASE = "power2.inOut";
    const TEXT_FADE = 0.25;

    // Measure ONCE, synchronously, at timeline-build time — before any tween
    // has touched `from`, so its layout is guaranteed to be the untransformed
    // base position. A previous version re-measured `from`'s bounding rect via
    // function-based values evaluated during playback; since GSAP's own
    // transform on `from` affects that same rect, re-measuring mid-tween fed
    // back into itself and produced an oscillating (not smooth) target,
    // visible as the card alternating between two frozen positions in
    // rendered output. Fixed target numbers avoid that feedback loop entirely
    // while `tl.to()` still makes this tween a true child of `tl`.
    const from = document.querySelector(fromSel);
    const to   = document.querySelector(toSel);
    const root = document.querySelector("#root");
    const toParent = to && to.parentElement;

    let targetX = 0, targetY = 0, targetScale = 1;
    if (from && to && root) {
      const fromBox = from.getBoundingClientRect();
      const toBox   = to.getBoundingClientRect();
      const pxScale = 1920 / root.getBoundingClientRect().width; // canvas px per CSS px
      targetX = (toBox.left - fromBox.left) * pxScale;
      targetY = (toBox.top  - fromBox.top)  * pxScale;
      targetScale = toBox.width / fromBox.width;
    }

    // 1) Active card's TEXT fades out first — box hasn't started moving yet,
    //    so this reads as "the solution settles" before it starts sliding.
    tl.to(fromSel + " .card-content", { opacity: 0, duration: TEXT_FADE, ease: "power2.in" }, time);

    // 2) BOX morphs position/size/color — text already hidden, so no
    //    distorted mid-scale text is ever visible.
    tl.to(fromSel, {
      x: targetX,
      y: targetY,
      scale: targetScale,
      transformOrigin: "top left",
      backgroundColor: "#e2e5ff",          // primary-light
      boxShadow: "0 0 0 rgba(0,0,0,0)",    // remove shadow
      duration: DUR,
      ease: EASE
    }, time);

    // Reveal target's parent wrapper (often the .clip with opacity:0)
    // alongside the target itself. MUST be a real GSAP property tween
    // (tl.set/.to on an element reference), NOT a plain tl.add(callback).
    // Callbacks only fire when the playhead sequentially crosses them during
    // playback — they are silently skipped when the timeline is scrubbed or
    // rendered via direct seeks (tl.pause(t)/.seek(t)/.time(t) from an
    // arbitrary position, which is exactly how a timeline-editor scrubber
    // and a per-frame renderer both work). A plain callback here left the
    // stack card's wrapper permanently stuck at opacity:0 in the studio
    // preview and in any seek-based render, even though the card's OWN
    // opacity (set elsewhere) looked fine in isolation. Property tweens are
    // evaluated as a pure function of absolute time, so they're correct
    // regardless of seek direction.
    if (toParent) tl.set(toParent, { opacity: 1 }, time + DUR);

    // Reveal the actual stack card box just as the morph completes
    tl.to(toSel, { opacity: 1, duration: 0.01 }, time + DUR);
    // Hide the morphing card so the real stack card takes over
    tl.to(fromSel, { opacity: 0, duration: 0.01 }, time + DUR + 0.01);

    // 3) Stack card's OWN text (correctly sized, never scaled) fades in
    //    right after the box lands.
    tl.fromTo(toSel + " .card-content",
      { opacity: 0 },
      { opacity: 1, duration: TEXT_FADE, ease: "power2.out" },
      time + DUR + 0.02);
  }

  // ─── Question card hero entrance
  function questionEnter(tl, selector, time) {
    tl.fromTo(selector,
      { y: 50, scale: 0.92, opacity: 0 },
      { y: 0, scale: 1, opacity: 1, duration: 0.7, ease: "back.out(1.4)" },
      time);
  }

  // ─── Serial number badge pop-in
  function serialEnter(tl, selector, time) {
    tl.fromTo(selector,
      { scale: 0, rotation: -45, opacity: 0 },
      { scale: 1, rotation: 0, opacity: 1, duration: 0.55, ease: "back.out(2)" },
      time);
  }

  // ─── Simple fade in / out
  function fadeIn(tl, selector, time, duration) {
    tl.to(selector, { opacity: 1, duration: duration || 0.4, ease: "power2.out" }, time);
  }
  function fadeOut(tl, selector, time, duration) {
    tl.to(selector, { opacity: 0, duration: duration || 0.4, ease: "power2.in" }, time);
  }

  // ─── Reveal a result/answer (within a card)
  function resultReveal(tl, selector, time) {
    tl.fromTo(selector,
      { opacity: 0, x: -15 },
      { opacity: 1, x: 0, duration: 0.5, ease: "back.out(1.4)" },
      time);
  }

  // ─── Options stagger appearance
  function optionsStagger(tl, selector, time) {
    tl.from(selector, {
      y: 30, opacity: 0, scale: 0.92,
      duration: 0.45, ease: "power3.out", stagger: 0.12
    }, time);
  }

  // ─── Correct option highlight pulse
  function correctPulse(tl, selector, time) {
    tl.to(selector, {
      scale: 1.05,
      duration: 0.4, ease: "back.out(1.5)",
      yoyo: true, repeat: 1
    }, time);
  }

  // ─── Number/value emphasize (yo-yo scale)
  function emphasize(tl, selector, time) {
    tl.fromTo(selector,
      { scale: 1 },
      { scale: 1.1, duration: 0.3, ease: "power2.out", yoyo: true, repeat: 1 },
      time);
  }

  // ─── Hero question entrance, lowered start (Phase 1 opening beat)
  // Card starts below its resting slot (vertically centered while alone in
  // frame), holds through the opening narration line, then rises to its
  // resting position exactly at riseTime. Selector must be horizontally
  // centered via left:50% (no inline transform) — xPercent:-50 is what
  // keeps it centered once GSAP takes over the transform property.
  // Usage: apt.heroEnterLowered(tl, "#q-full-card", 180, 3.6);
  function heroEnterLowered(tl, selector, offsetY, riseTime) {
    tl.fromTo(selector,
      { xPercent: -50, y: offsetY + 50, scale: 0.92, opacity: 0 },
      { xPercent: -50, y: offsetY, scale: 1, opacity: 1, duration: 0.7, ease: "back.out(1.4)" },
      0.3);
    tl.to(selector, { xPercent: -50, y: 0, duration: 0.6, ease: "power2.inOut" }, riseTime);
  }

  // ─── Recenter the pinned question before the options reveal
  // Clears the stack column and aligns the question+options block against
  // it, right before Phase 3 begins. Pair with a fadeOut of the pinned
  // illustration at the same time if one is present.
  // Usage: apt.recenterForOptions(tl, "#q-pinned", 160, 180, 49.1);
  function recenterForOptions(tl, pinnedSelector, xShift, yShift, time) {
    tl.to(pinnedSelector, { x: xShift, y: yShift, duration: 0.5, ease: "power2.inOut" }, time);
  }

  // ─── Road sweep (horizontal expand)
  function roadSweep(tl, selector, time, duration) {
    tl.from(selector, {
      scaleX: 0,
      transformOrigin: "left center",
      duration: duration || 0.9,
      ease: "power3.out"
    }, time);
  }

  // ─── Stack connector line grow-in (vertical line between two step
  // circles in the left stack column). Fire this at the SAME time as the
  // morphToStack call that moves the LOWER of the two steps into the
  // stack — e.g. the line between the "Given" circle and the "Step 1"
  // circle grows when Step 1 itself joins the stack, not before (that's
  // the moment both circles are actually present to connect).
  // Usage: apt.stackLineGrow(tl, "#line-g-1", 37.5);
  function stackLineGrow(tl, selector, time) {
    tl.fromTo(selector,
      { scaleY: 0, opacity: 0 },
      { scaleY: 1, opacity: 1, duration: 0.5, ease: "power2.out" },
      time);
  }

  // ─── Text reveal: word/line fade-in synced to transcript.json
  // Finds every `.rv[data-t]` element inside `containerSelector` (an active
  // center card's `.math` block — see template.html) and fades each one in,
  // individually, at its own ABSOLUTE timeline time (the `data-t` value,
  // taken directly from transcript.json — NOT relative to the card's own
  // start time). Plain opacity fade only, no slide/scale — this replaces
  // the old "whole .math block fades in at once with the card" behavior for
  // ACTIVE cards only. Collapsed stack cards are untouched (they keep their
  // single fade-in from apt.morphToStack's text crossfade — do not wrap
  // stack-card .math content in .rv spans).
  //
  // Two granularities, picked per line when authoring the HTML:
  //   - word-level: one <span class="rv" data-t="..."> per word, for lines
  //     that are a direct verbal/numeric match to the narration
  //     (e.g. "54 ÷ 72", "= 3/4 hr") — each word its own timestamp.
  //   - line-level: one <span class="rv" data-t="..."> around the WHOLE
  //     line, for paraphrased lines with no clean word-to-word match
  //     (e.g. "Distance = 54 km" for narration "the train covers
  //     fifty-four kilometer") — the single timestamp is the start of the
  //     corresponding spoken phrase.
  //
  // Usage: apt.textReveal(tl, "#card-step2 .math");
  function textReveal(tl, containerSelector, duration) {
    const els = document.querySelectorAll(containerSelector + " .rv");
    els.forEach(function(el) {
      const t = parseFloat(el.dataset.t);
      if (isNaN(t)) return;
      tl.to(el, { opacity: 1, duration: duration || 0.25, ease: "power2.out" }, t);
    });
  }

  return {
    cardEnter,
    cardExit,
    stackEnter,
    morphToStack,
    questionEnter,
    serialEnter,
    fadeIn,
    fadeOut,
    resultReveal,
    optionsStagger,
    correctPulse,
    emphasize,
    roadSweep,
    heroEnterLowered,
    recenterForOptions,
    stackLineGrow,
    textReveal
  };
})();
