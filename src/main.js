(function () {
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

function handleSubscribe(e) {
  e.preventDefault();
  var email = document.getElementById('subEmail').value;
  var btn = document.getElementById('subBtn');
  btn.textContent = 'Subscribing...';
  btn.disabled = true;

  setTimeout(function () {
    document.getElementById('subForm').style.display = 'none';
    document.getElementById('subEmailDisplay').textContent = email;
    document.getElementById('subSuccess').style.display = 'block';
    btn.textContent = 'Subscribe';
    btn.disabled = false;
  }, 1200);
}
