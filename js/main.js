(function () {
  var navToggle = document.querySelector("[data-nav-toggle]");
  var navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });
  }

  document.querySelectorAll("[data-theme-toggle]").forEach(function (button) {
    button.addEventListener("click", function () {
      if (window.AbbasStackTheme) window.AbbasStackTheme.toggle();
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      var targetId = link.getAttribute("href");
      if (!targetId || targetId.length < 2) return;
      var target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      if (navLinks) navLinks.classList.remove("open");
    });
  });

  var revealNodes = document.querySelectorAll(".reveal");
  if (revealNodes.length && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
    );
    revealNodes.forEach(function (node) { observer.observe(node); });
  } else {
    revealNodes.forEach(function (node) { node.classList.add("is-visible"); });
  }
})();
