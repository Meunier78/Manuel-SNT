(() => {
  const STORAGE_KEY = "manuel-snt-sidebar-width";
  const DEFAULT_WIDTH = 300;
  const MIN_WIDTH = 235;
  const MAX_WIDTH = 500;

  function clamp(value) {
    return Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, value));
  }

  function setSidebarWidth(value) {
    const width = clamp(Number(value) || DEFAULT_WIDTH);
    document.documentElement.style.setProperty("--snt-sidebar-width", `${width}px`);
    localStorage.setItem(STORAGE_KEY, String(width));
  }

  function restoreSidebarWidth() {
    const saved = Number(localStorage.getItem(STORAGE_KEY));
    setSidebarWidth(saved || DEFAULT_WIDTH);
  }

  function installResizer() {
    const sidebar = document.querySelector(".md-sidebar--primary");
    if (!sidebar || sidebar.querySelector(".snt-sidebar-resizer")) return;

    const handle = document.createElement("div");
    handle.className = "snt-sidebar-resizer";
    handle.setAttribute("role", "separator");
    handle.setAttribute("aria-orientation", "vertical");
    handle.setAttribute("aria-label", "Régler la largeur de la navigation");
    handle.title = "Glisser pour régler la largeur. Double-cliquer pour réinitialiser.";
    sidebar.appendChild(handle);

    let startX = 0;
    let startWidth = 0;

    const onMove = (event) => {
      const nextWidth = startWidth + (event.clientX - startX);
      setSidebarWidth(nextWidth);
    };

    const onUp = () => {
      handle.classList.remove("is-dragging");
      document.body.classList.remove("snt-sidebar-dragging");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };

    handle.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      startX = event.clientX;
      startWidth = sidebar.getBoundingClientRect().width;
      handle.classList.add("is-dragging");
      document.body.classList.add("snt-sidebar-dragging");
      handle.setPointerCapture?.(event.pointerId);
      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);
    });

    handle.addEventListener("dblclick", () => setSidebarWidth(DEFAULT_WIDTH));
  }

  function updateSidebarHierarchy() {
    const nav = document.querySelector(".md-sidebar--primary nav.md-nav");
    if (!nav) return;

    const active = nav.querySelector(
      ".md-nav__link--active, .md-nav__link[aria-current='page']"
    );

    nav.querySelectorAll(".md-nav__item").forEach((item) => {
      item.classList.remove("is-active-trail");
    });

    const keepOpen = new Set();

    if (active) {
      let current = active.closest(".md-nav__item");
      while (current && nav.contains(current)) {
        current.classList.add("is-active-trail");
        keepOpen.add(current);
        current = current.parentElement?.closest(".md-nav__item");
      }
    }

    /* Tous les niveaux restent fermés, sauf ceux du chemin actif. */
    nav.querySelectorAll("input.md-nav__toggle").forEach((toggle) => {
      const item = toggle.closest(".md-nav__item");
      toggle.checked = keepOpen.has(item);
    });
  }

  function initialize() {
    restoreSidebarWidth();
    installResizer();
    updateSidebarHierarchy();
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(initialize);
  } else {
    document.addEventListener("DOMContentLoaded", initialize);
  }
})();
