(() => {
  const PROJECT_PREFIX = "/Manuel-SNT/";

  function isHostedUnderProjectPrefix() {
    const path = window.location.pathname;
    return path === PROJECT_PREFIX.slice(0, -1) || path.startsWith(PROJECT_PREFIX);
  }

  function normalizeProjectUrl(value) {
    if (!value || !value.startsWith(PROJECT_PREFIX)) return value;
    if (isHostedUnderProjectPrefix()) return value;
    return `/${value.slice(PROJECT_PREFIX.length)}`;
  }

  function normalizeInternalLinks() {
    document.querySelectorAll("[href], [src], [poster]").forEach((element) => {
      ["href", "src", "poster"].forEach((attribute) => {
        if (!element.hasAttribute(attribute)) return;
        const current = element.getAttribute(attribute);
        const normalized = normalizeProjectUrl(current);
        if (normalized !== current) element.setAttribute(attribute, normalized);
      });
    });
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(normalizeInternalLinks);
  } else {
    document.addEventListener("DOMContentLoaded", normalizeInternalLinks);
  }
})();
