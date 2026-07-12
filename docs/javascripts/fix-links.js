document$.subscribe(function () {
  document
    .querySelectorAll('a.snt-card[href$=".md"]')
    .forEach(function (link) {
      link.href = link.href.replace(/\.md$/, "/");
    });
});
