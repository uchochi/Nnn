(function () {
  var root = document.documentElement;

  // Theme toggle
  try {
    var s = localStorage.getItem('localnode-theme');
    if (s === 'dark' || (!s && matchMedia('(prefers-color-scheme: dark)').matches))
      root.setAttribute('data-theme', 'dark');
  } catch (e) {}

  document.getElementById('themeToggle').addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('localnode-theme', next); } catch (e) {}
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
})();
