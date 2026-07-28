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

    // Measure synchronously at script-init time — before the timeline starts.
    // getBoundingClientRect() works correctly here because all elements are
    // already in their CSS layout positions (opacity:0 does not affect layout).
    // This avoids callbacks entirely, so render workers that seek directly into
    // the middle of the timeline still see the tween as a proper child of tl.
    const from = document.querySelector(fromSel);
    const to   = document.querySelector(toSel);
    if (!from || !to) return;

    const fromBox = from.getBoundingClientRect();
    const toBox   = to.getBoundingClientRect();
    const root    = document.querySelector("#root").getBoundingClientRect();
    const s       = 1920 / root.width;   // canvas px per CSS px

    const targetX     = (toBox.left - fromBox.left) * s;
    const targetY     = (toBox.top  - fromBox.top)  * s;
    const targetScale = toBox.width / fromBox.width;

    // Add morph tween directly as a tl child — scrubs correctly in render
    tl.to(from, {
      x: targetX,
      y: targetY,
      scale: targetScale,
      transformOrigin: "top left",
      backgroundColor: "#e2e5ff",
      boxShadow: "0 0 0 rgba(0,0,0,0)",
      duration: DUR,
      ease: EASE
    }, time);

    const toParent = to.parentElement;
    if (toParent && toParent !== from) {
      tl.to(toParent, { opacity: 1, duration: 0.01 }, time + DUR);
    }

    // Reveal the actual stack card just as the morph completes
    tl.to(toSel, { opacity: 1, duration: 0.01 }, time + DUR);
    // Hide the morphing card so the real stack card takes over
    tl.to(fromSel, { opacity: 0, duration: 0.01 }, time + DUR + 0.01);
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
    roadSweep
  };
})();
