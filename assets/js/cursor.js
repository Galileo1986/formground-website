/* ═══════════════════════════════════════════════
   CURSOR.JS — Custom Cursor Logic
   FORM/GROUND Multi-Studio Website
   ═══════════════════════════════════════════════ */

(function () {
  const cursor = document.getElementById('cursor');
  if (!cursor) return;

  // Follow mouse
  document.addEventListener('mousemove', function (e) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  // Enlarge on interactive elements
  var interactiveSelectors = 'a, button, .filter-tab, .studio-panel, .arch-card';
  var interactiveEls = document.querySelectorAll(interactiveSelectors);

  interactiveEls.forEach(function (el) {
    el.addEventListener('mouseenter', function () {
      cursor.classList.add('large');
    });
    el.addEventListener('mouseleave', function () {
      cursor.classList.remove('large');
    });
  });

  // Dark mode: detect light background pages
  if (document.body.dataset.cursorMode === 'dark') {
    cursor.classList.add('dark');
  }
})();
