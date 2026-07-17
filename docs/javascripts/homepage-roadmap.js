(() => {
  let resizeObserver;
  let resizeHandlerInstalled = false;

  function getStep(card) {
    const match = card.className.match(/snt-card--([1-7])\b/);
    return match ? Number(match[1]) : 99;
  }

  function center(rect, containerRect) {
    return {
      x: rect.left - containerRect.left + rect.width / 2,
      y: rect.top - containerRect.top + rect.height / 2
    };
  }

  function pointOnEdge(rect, containerRect, toward) {
    const c = center(rect, containerRect);
    const dx = toward.x - c.x;
    const dy = toward.y - c.y;
    if (!dx && !dy) return c;
    const halfW = rect.width / 2;
    const halfH = rect.height / 2;
    const scale = 1 / Math.max(Math.abs(dx) / halfW, Math.abs(dy) / halfH);
    return { x: c.x + dx * scale, y: c.y + dy * scale };
  }

  function buildSegments(rects, containerRect) {
    const centers = rects.map((rect) => center(rect, containerRect));
    const segments = [];
    for (let i = 1; i < rects.length; i += 1) {
      segments.push({
        a: pointOnEdge(rects[i - 1], containerRect, centers[i]),
        b: pointOnEdge(rects[i], containerRect, centers[i - 1])
      });
    }
    return segments;
  }

  function buildPath(segments) {
    if (!segments.length) return "";
    let d = `M ${segments[0].a.x.toFixed(1)} ${segments[0].a.y.toFixed(1)}`;
    segments.forEach(({ a, b }, index) => {
      if (index > 0) d += ` L ${a.x.toFixed(1)} ${a.y.toFixed(1)}`;
      const dx = b.x - a.x;
      const bend = Math.max(55, Math.abs(dx) * 0.42);
      const direction = dx >= 0 ? 1 : -1;
      d += ` C ${(a.x + direction * bend).toFixed(1)} ${a.y.toFixed(1)},` +
        ` ${(b.x - direction * bend).toFixed(1)} ${b.y.toFixed(1)},` +
        ` ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
    });
    return d;
  }

  function drawRoadmap() {
    const roadmap = document.querySelector(".snt-roadmap");
    if (!roadmap) return;
    const svg = roadmap.querySelector(".snt-roadmap__path");
    const path = roadmap.querySelector(".snt-roadmap__line");
    const cards = [...roadmap.querySelectorAll(".snt-card")].sort((a, b) => getStep(a) - getStep(b));
    if (!svg || !path || cards.length !== 7) return;

    const containerRect = roadmap.getBoundingClientRect();
    if (!containerRect.width || !containerRect.height) return;
    svg.setAttribute("viewBox", `0 0 ${containerRect.width} ${containerRect.height}`);
    svg.setAttribute("preserveAspectRatio", "none");
    path.setAttribute("d", buildPath(buildSegments(cards.map((card) => card.getBoundingClientRect()), containerRect)));
  }

  function initializeRoadmap() {
    const roadmap = document.querySelector(".snt-roadmap");
    if (!roadmap) return;
    drawRoadmap();
    resizeObserver?.disconnect();
    resizeObserver = new ResizeObserver(() => requestAnimationFrame(drawRoadmap));
    resizeObserver.observe(roadmap);
    roadmap.querySelectorAll(".snt-card").forEach((card) => resizeObserver.observe(card));
    if (!resizeHandlerInstalled) {
      window.addEventListener("resize", drawRoadmap, { passive: true });
      resizeHandlerInstalled = true;
    }
    document.fonts?.ready?.then(drawRoadmap);
  }

  if (typeof document$ !== "undefined") document$.subscribe(initializeRoadmap);
  else document.addEventListener("DOMContentLoaded", initializeRoadmap);
})();
