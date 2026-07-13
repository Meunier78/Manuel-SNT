(() => {
  let resizeObserver;

  function getStep(card) {
    const match = card.className.match(/snt-card--([1-7])\b/);
    return match ? Number(match[1]) : 99;
  }

  function pointFor(card, containerRect) {
    const rect = card.getBoundingClientRect();
    return {
      x: rect.left - containerRect.left + rect.width / 2,
      y: rect.top - containerRect.top + rect.height / 2
    };
  }

  function buildPath(points) {
    if (!points.length) return "";

    let d = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;

    for (let i = 1; i < points.length; i += 1) {
      const a = points[i - 1];
      const b = points[i];
      const dx = b.x - a.x;
      const bend = Math.max(70, Math.abs(dx) * 0.48);
      const c1x = a.x + (dx >= 0 ? bend : -bend);
      const c2x = b.x - (dx >= 0 ? bend : -bend);

      d += ` C ${c1x.toFixed(1)} ${a.y.toFixed(1)},`
        + ` ${c2x.toFixed(1)} ${b.y.toFixed(1)},`
        + ` ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
    }

    return d;
  }

  function drawRoadmap() {
    const roadmap = document.querySelector(".snt-roadmap");
    if (!roadmap) return;

    const svg = roadmap.querySelector(".snt-roadmap__path");
    const path = roadmap.querySelector(".snt-roadmap__line");
    const cards = [...roadmap.querySelectorAll(".snt-card")]
      .sort((a, b) => getStep(a) - getStep(b));

    if (!svg || !path || cards.length !== 7) return;

    const rect = roadmap.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    svg.setAttribute("viewBox", `0 0 ${rect.width} ${rect.height}`);
    svg.setAttribute("preserveAspectRatio", "none");

    const points = cards.map((card) => pointFor(card, rect));
    path.setAttribute("d", buildPath(points));
  }

  function initializeRoadmap() {
    drawRoadmap();

    const roadmap = document.querySelector(".snt-roadmap");
    if (!roadmap) return;

    if (resizeObserver) resizeObserver.disconnect();
    resizeObserver = new ResizeObserver(() => requestAnimationFrame(drawRoadmap));
    resizeObserver.observe(roadmap);

    roadmap.querySelectorAll(".snt-card").forEach((card) => {
      resizeObserver.observe(card);
    });

    window.addEventListener("resize", drawRoadmap, { passive: true });
    document.fonts?.ready?.then(drawRoadmap);
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(initializeRoadmap);
  } else {
    document.addEventListener("DOMContentLoaded", initializeRoadmap);
  }
})();
