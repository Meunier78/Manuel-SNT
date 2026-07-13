(() => {
  function updateSidebar() {
    const nav = document.querySelector(".md-sidebar--primary nav.md-nav");
    if (!nav) return;
    const active = nav.querySelector(".md-nav__link--active, .md-nav__link[aria-current='page']");
    nav.querySelectorAll(".md-nav__item").forEach(item => item.classList.remove("is-active-trail"));
    const keepOpen = new Set();
    if (active) {
      let current = active.closest(".md-nav__item");
      while (current && nav.contains(current)) {
        current.classList.add("is-active-trail"); keepOpen.add(current);
        current = current.parentElement?.closest(".md-nav__item");
      }
    }
    nav.querySelectorAll("input.md-nav__toggle").forEach(toggle => {
      const item = toggle.closest(".md-nav__item"); toggle.checked = keepOpen.has(item);
    });
  }
  if (typeof document$ !== "undefined") document$.subscribe(updateSidebar);
  else document.addEventListener("DOMContentLoaded", updateSidebar);
})();
