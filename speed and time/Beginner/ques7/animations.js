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

  // ─── MORPH: Active SolutionCard → SolutionStackCard (0.8s)
  // Reads the target stack-card's computed position/size and
  // smoothly animates the active card into that slot, changing
  // background to light blue, removing shadow, scaling text down.
  //
  // Usage:
  //   apt.morphToStack(tl, "#card-given .solution-card", "#stack-given .stack-card", 29.5);
  //
  // The target stack card should be present in DOM at the destination
  // position (can have opacity:0). The active card is what visually morphs.
  function morphToStack(tl, fromSel, toSel, time) {
    const DUR = 0.8;
    const EASE = "power2.inOut";

    const from = document.querySelector(fromSel);
    const to   = document.querySelector(toSel);
    const root = document.querySelector("#root");
    if (!from || !to || !root) return;

    const fromBox = from.getBoundingClientRect();
    const toBox   = to.getBoundingClientRect();
    const rootBox = root.getBoundingClientRect();
    const scale   = 1920 / rootBox.width;   // canvas px per CSS px

    const targetX     = (toBox.left - fromBox.left) * scale;
    const targetY     = (toBox.top  - fromBox.top)  * scale;
    const targetScale = toBox.width / fromBox.width;

    // The morph itself — a true tl.to() child, so it plays/scrubs/reverses
    // in lockstep with the master timeline's playhead.
    tl.to(from, {
      x: targetX,
      y: targetY,
      scale: targetScale,
      transformOrigin: "top left",
      backgroundColor: "#e2e5ff",          // primary-light
      boxShadow: "0 0 0 rgba(0,0,0,0)",    // remove shadow
      duration: DUR,
      ease: EASE
    }, time);

    // Text crossfade: the active card's own text fades out first (first
    // 35% of the morph, while the container is still shrinking), then the
    // real stack card's text fades in (last 45%) — instead of a hard cut.
    tl.to(Array.from(from.children), { opacity: 0, duration: DUR * 0.35, ease: "power2.in" }, time);

    // Reveal target's parent wrapper (often the .clip with opacity:0) right
    // away — it stays invisible until "to" itself starts fading in below.
    const toParent = to.parentElement;
    if (toParent && toParent !== from) {
      tl.set(toParent, { opacity: 1 }, time);
    }

    // Fade the real stack card's text in as the container finishes settling
    tl.fromTo(to, { opacity: 0 }, { opacity: 1, duration: DUR * 0.45, ease: "power2.out" }, time + DUR * 0.55);

    // Hide the now-empty morphing card once the real stack card has taken over
    tl.set(from, { opacity: 0 }, time + DUR + 0.01);
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
    recenterForOptions
  };
})();
