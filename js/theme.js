(function () {
  var STORAGE_KEY = "abbasstack-theme";

  function preferredTheme() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function renderIcon(theme) {
    document.querySelectorAll("[data-theme-icon]").forEach(function (node) {
      node.textContent = theme === "dark" ? "☀" : "☾";
      node.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    });
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
    renderIcon(theme);
  }

  window.AbbasStackTheme = {
    apply: applyTheme,
    toggle: function () {
      var current = document.documentElement.getAttribute("data-theme") || preferredTheme();
      applyTheme(current === "dark" ? "light" : "dark");
    }
  };

  applyTheme(preferredTheme());
})();
