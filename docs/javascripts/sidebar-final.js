(() => {
  const STORAGE_KEY = "manuel-snt-sidebar-width-final";
  const DEFAULT_WIDTH = 340;
  const MIN_WIDTH = 280;
  const MAX_WIDTH = 650;

  function clamp(value) {
    return Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, value));
  }

  function setSidebarWidth(value, persist = true) {
    const width = clamp(Number(value) || DEFAULT_WIDTH);
    document.documentElement.style.setProperty("--snt-sidebar-width", `${width}px`);
    if (persist) {
      try { localStorage.setItem(STORAGE_KEY, String(width)); } catch (_) { /* storage optional */ }
    }
    requestAnimationFrame(() => window.dispatchEvent(new Event("resize")));
  }

  function restoreSidebarWidth() {
    let saved = DEFAULT_WIDTH;
    try { saved = Number(localStorage.getItem(STORAGE_KEY)) || DEFAULT_WIDTH; } catch (_) { /* storage optional */ }
    setSidebarWidth(saved, false);
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
    const onMove = (event) => setSidebarWidth(startWidth + event.clientX - startX);
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

  function nestedLevel(item) {
    const nested = item.querySelector(":scope > nav.md-nav");
    return nested ? Number(nested.dataset.mdLevel ?? -1) : -1;
  }

  function directToggle(item) {
    return item.querySelector(":scope > input.md-nav__toggle");
  }

  function closeDescendants(item) {
    item.querySelectorAll(".md-nav__item.snt-open").forEach((child) => {
      child.classList.remove("snt-open");
      const toggle = directToggle(child);
      if (toggle) toggle.checked = false;
    });
  }

  function setItemOpen(item, open) {
    if (!item) return;
    item.classList.toggle("snt-open", open);
    const toggle = directToggle(item);
    if (toggle) toggle.checked = open;
    const nested = item.querySelector(":scope > nav.md-nav");
    if (nested) nested.setAttribute("aria-expanded", String(open));
    if (!open) closeDescendants(item);
  }

  function closeSiblingBranches(item) {
    const list = item.parentElement;
    if (!list) return;
    [...list.children].forEach((sibling) => {
      if (sibling !== item && sibling.classList?.contains("md-nav__item")) {
        setItemOpen(sibling, false);
      }
    });
  }

  function markLegacyFragments(root) {
    root.querySelectorAll("a.md-nav__link").forEach((link) => {
      let path = "";
      try { path = new URL(link.href, window.location.href).pathname; } catch (_) { path = link.getAttribute("href") || ""; }
      if (/\/grandes-internet-exercice\/sans-titre-\d+\/?$/.test(path)) {
        link.closest(".md-nav__item")?.classList.add("snt-legacy-fragment");
      }
    });
  }

  function applyNavigationState() {
    const root = document.querySelector(".md-sidebar--primary nav.md-nav[data-md-level='0'], .md-sidebar--primary > .md-sidebar__scrollwrap nav.md-nav");
    if (!root) return;

    markLegacyFragments(root);
    root.querySelectorAll(".md-nav__item").forEach((item) => {
      item.classList.remove("snt-open", "snt-active-trail");
      const toggle = directToggle(item);
      if (toggle) toggle.checked = false;
    });

    const active = root.querySelector(".md-nav__link--active, .md-nav__link[aria-current='page']");
    if (!active) return;
    const activeItem = active.closest(".md-nav__item");
    if (!activeItem) return;

    const trail = [];
    for (let item = activeItem; item && root.contains(item); item = item.parentElement?.closest(".md-nav__item")) {
      trail.push(item);
      item.classList.add("snt-active-trail");
    }

    const chapterItem = trail.find((item) => nestedLevel(item) === 1);
    const activeHref = active.getAttribute("href") || "";
    const chapterLanding = Boolean(chapterItem && activeItem === chapterItem) ||
      /\/(?:internet|web|reseaux-sociaux|donnees-structurees|localisation-cartographie-mobilite|informatique-embarquee-objets-connectes|photographie-numerique)\/?(?:index\.html)?$/.test(activeHref);

    // Sur la page d’accueil d’un chapitre, afficher immédiatement ses sous-chapitres.
    // Sur une page plus profonde, ouvrir uniquement toute la branche active jusqu’au niveau 4.
    if (chapterLanding) {
      setItemOpen(chapterItem, true);
    } else {
      trail.forEach((item) => {
        const level = nestedLevel(item);
        if (level >= 1 && level <= 3) setItemOpen(item, true);
      });
    }
  }

  function installAccordion() {
    const root = document.querySelector(".md-sidebar--primary nav.md-nav[data-md-level='0'], .md-sidebar--primary > .md-sidebar__scrollwrap nav.md-nav");
    if (!root || root.dataset.sntAccordionReady === "1") return;
    root.dataset.sntAccordionReady = "1";

    root.addEventListener("change", (event) => {
      const toggle = event.target.closest?.("input.md-nav__toggle");
      if (!toggle || !root.contains(toggle)) return;
      const item = toggle.closest(".md-nav__item");
      if (!item) return;

      if (toggle.checked) {
        closeSiblingBranches(item);
        setItemOpen(item, true);
        for (let ancestor = item.parentElement?.closest(".md-nav__item"); ancestor && root.contains(ancestor); ancestor = ancestor.parentElement?.closest(".md-nav__item")) {
          setItemOpen(ancestor, true);
        }
      } else {
        setItemOpen(item, false);
      }
    });
  }

  function removeRedundantCardLabels() {
    document.querySelectorAll(".snt-grid .snt-card > span").forEach((span) => {
      const label = span.textContent.replace(/\s+/g, " ").trim().toLocaleLowerCase("fr");
      if (label === "ouvrir la ressource") span.remove();
    });
  }

  function optimizeContentColumns() {
    const secondary = document.querySelector(".md-sidebar--secondary");
    if (!secondary) return;
    const hasUsefulToc = Boolean(secondary.querySelector("nav.md-nav--secondary a.md-nav__link"));
    secondary.classList.toggle("snt-sidebar--empty", !hasUsefulToc);
  }

  function directLeafLink(item) {
    if (!item) return null;
    return item.querySelector(
      ":scope > a.md-nav__link[href], :scope > .md-nav__container > a.md-nav__link[href]"
    );
  }

  function createPagerButton(link, direction) {
    if (!link) {
      const empty = document.createElement("span");
      empty.className = `snt-page-nav__button snt-page-nav__button--${direction} snt-page-nav__button--disabled`;
      empty.setAttribute("aria-hidden", "true");
      return empty;
    }

    const button = document.createElement("a");
    button.className = `snt-page-nav__button snt-page-nav__button--${direction}`;
    button.href = link.href;

    const inner = document.createElement("span");
    const directionLabel = document.createElement("span");
    directionLabel.className = "snt-page-nav__direction";
    directionLabel.textContent = direction === "prev" ? "← AVANT" : "APRÈS →";
    const title = document.createElement("span");
    title.className = "snt-page-nav__title";
    title.textContent = link.textContent.replace(/\s+/g, " ").trim();
    inner.append(directionLabel, title);
    button.append(inner);
    button.setAttribute("aria-label", `${directionLabel.textContent} : ${title.textContent}`);
    return button;
  }

  function normalizedPath(url) {
    try {
      const path = new URL(url, window.location.href).pathname;
      return path.replace(/(?:index\.html)?\/?$/, "/");
    } catch (_) {
      return "";
    }
  }

  function findCurrentSidebarLink(sidebar) {
    const explicit = sidebar?.querySelector(
      ".md-nav__link--active, .md-nav__link[aria-current='page']"
    );
    if (explicit) return explicit;

    const currentPath = normalizedPath(window.location.href);
    return [...(sidebar?.querySelectorAll("a.md-nav__link[href]") || [])]
      .find((link) => normalizedPath(link.href) === currentPath) || null;
  }

  function siblingPagerContext() {
    const sidebar = document.querySelector(".md-sidebar--primary");
    const active = findCurrentSidebarLink(sidebar);
    const activeItem = active?.closest(".md-nav__item");
    if (!active || !activeItem) return null;

    // Une page qui possède elle-même une sous-navigation est une page de
    // rubrique (chapitre, Cours, Repères, etc.), pas une fiche terminale.
    // Les boutons sont réservés aux fiches terminales.
    if (activeItem.querySelector(":scope > nav.md-nav")) return null;

    const list = activeItem.parentElement;
    if (!list?.classList.contains("md-nav__list")) return null;

    // Ne plus dépendre d'un data-md-level précis : selon la rubrique,
    // Material place les fiches sœurs au niveau 2 ou 3 du DOM.
    const links = [...list.children]
      .filter((item) =>
        item.classList?.contains("md-nav__item") &&
        !item.classList.contains("snt-legacy-fragment")
      )
      .map(directLeafLink)
      .filter(Boolean)
      .filter((link) => {
        const label = link.textContent.replace(/\s+/g, " ").trim();
        return label && !/^vue d[’']ensemble$/i.test(label);
      });

    const currentPath = normalizedPath(window.location.href);
    const current = links.findIndex((link) =>
      link === active ||
      link.classList.contains("md-nav__link--active") ||
      link.getAttribute("aria-current") === "page" ||
      normalizedPath(link.href) === currentPath
    );

    if (current < 0 || links.length < 2) return null;
    return { links, current };
  }

  function placePagerAtTop(pager, content) {
    const breadcrumb = content.querySelector(":scope > .md-path, :scope > nav.md-path");
    const heading = content.querySelector(":scope > h1");

    if (breadcrumb) breadcrumb.after(pager);
    else if (heading) heading.before(pager);
    else content.prepend(pager);
  }

  function installSiblingPager() {
    const context = siblingPagerContext();
    const content = document.querySelector(".md-content__inner");
    if (!context || !content) return false;

    const pager = document.createElement("nav");
    pager.className = "snt-page-nav";
    pager.setAttribute("aria-label", "Navigation entre les fiches de cette rubrique");
    pager.append(
      createPagerButton(context.links[context.current - 1] || null, "prev"),
      createPagerButton(context.links[context.current + 1] || null, "next")
    );

    const existing = content.querySelector(":scope > .snt-page-nav");
    if (existing) existing.replaceWith(pager);
    else placePagerAtTop(pager, content);
    return true;
  }

  function scheduleSiblingPager() {
    // Material peut notifier document$ avant que le lien actif du menu soit
    // complètement mis à jour. Ne jamais supprimer une barre existante avant
    // d'avoir calculé sa remplaçante, puis retenter brièvement si nécessaire.
    const attempts = [0, 80, 250, 700];
    attempts.forEach((delay) => {
      window.setTimeout(() => installSiblingPager(), delay);
    });
  }

  function initialize() {
    restoreSidebarWidth();
    installResizer();
    applyNavigationState();
    installAccordion();
    removeRedundantCardLabels();
    optimizeContentColumns();
    scheduleSiblingPager();
  }

  if (typeof document$ !== "undefined") document$.subscribe(initialize);
  else document.addEventListener("DOMContentLoaded", initialize);
})();
