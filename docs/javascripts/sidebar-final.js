(() => {
  const STORAGE_KEY = "manuel-snt-sidebar-width-final";
  const DEFAULT_WIDTH = 340;
  const MIN_WIDTH = 280;
  const MAX_WIDTH = 520;

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
    handle.setAttribute("aria-label", "Régler la largeur de la colonne de navigation");
    handle.title = "Glisser pour régler la largeur. Double-cliquer pour réinitialiser.";
    sidebar.appendChild(handle);

    let startX = 0;
    let startWidth = 0;

    const onMove = (event) => {
      setSidebarWidth(startWidth + event.clientX - startX);
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
      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);
    });

    handle.addEventListener("dblclick", () => setSidebarWidth(DEFAULT_WIDTH));
  }

  function getDepth(item) {
    const nestedNav = item.querySelector(":scope > nav.md-nav");
    if (!nestedNav) return -1;
    return Number(nestedNav.dataset.mdLevel || -1);
  }

  function applyNavigationState() {
    const root = document.querySelector(".md-sidebar--primary nav.md-nav");
    if (!root) return;

    root.querySelectorAll(".md-nav__item").forEach((item) => {
      item.classList.remove("snt-open", "snt-active-trail");
    });

    const active = root.querySelector(
      ".md-nav__link--active, .md-nav__link[aria-current='page']"
    );
    if (!active) return;

    const activeItem = active.closest(".md-nav__item");
    if (!activeItem) return;

    const trail = [];
    let current = activeItem;

    while (current && root.contains(current)) {
      trail.push(current);
      current = current.parentElement?.closest(".md-nav__item");
    }

    trail.forEach((item) => item.classList.add("snt-active-trail"));

    /*
      Règle :
      - Page d'accueil ou page de chapitre : afficher uniquement les niveaux 1.
      - Page de niveau 2 : ouvrir uniquement le chapitre actif.
      - Page de niveau 3 : ouvrir le chapitre actif et le niveau 2 actif.
    */
    const activeNestedLevel = getDepth(activeItem);
    const activeLink = active.getAttribute("href") || "";
    const isChapterLanding =
      activeNestedLevel === 1 ||
      /\/(?:internet|web|reseaux-sociaux|donnees-structurees|localisation-cartographie-mobilite|informatique-embarquee-objets-connectes|photographie-numerique)\/?$/.test(activeLink);

    if (!isChapterLanding) {
      const ancestors = [...trail].reverse();

      ancestors.forEach((item) => {
        const nestedLevel = getDepth(item);
        if (nestedLevel === 1 || nestedLevel === 2) {
          item.classList.add("snt-open");
        }
      });
    }

    root.querySelectorAll("input.md-nav__toggle").forEach((toggle) => {
      const item = toggle.closest(".md-nav__item");
      toggle.checked = item?.classList.contains("snt-open") || false;
    });
  }

  function initialize() {
    restoreSidebarWidth();
    installResizer();
    applyNavigationState();
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(initialize);
  } else {
    document.addEventListener("DOMContentLoaded", initialize);
  }
})();
