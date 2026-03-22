/* ═══════════════════════════════════════════════
   NAV.JS — Navigation & Filter Tab Behavior
   FORM/GROUND Multi-Studio Website
   ═══════════════════════════════════════════════ */

(function () {
  // Filter tab interaction (architecture page)
  var filterTabs = document.querySelectorAll('.filter-tab');

  filterTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      filterTabs.forEach(function (t) {
        t.classList.remove('active');
      });
      tab.classList.add('active');
    });
  });
})();
