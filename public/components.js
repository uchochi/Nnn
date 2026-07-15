/* ── Global Site Components ─────────────────────────────
   Include once per page: <script src="/components.js"></script>
   Required mount points in HTML:
     <div id="site-nav"></div>
     <div id="site-footer"></div>
     <div id="site-modal"></div>
   ─────────────────────────────────────────────────────── */

(function () {
  /* ── NAV ── */
  var nav = document.getElementById('site-nav');
  if (nav) {
    nav.outerHTML = '<header class="nav">' +
      '<a class="brand" href="/"><img class="brand-logo" src="/localnode-logo.png" alt="localnode.app" /></a>' +
      '<nav class="nav-right">' +
        '<div class="nav-links">' +
          '<a href="#article">Article</a>' +
          '<a href="#related">Related</a>' +
        '</div>' +
        '<div style="display:flex;gap:10px;align-items:center">' +
          '<button class="btn btn-secondary btn-sm" onclick="signIn()">Sign In</button>' +
          '<button class="btn btn-primary btn-sm" onclick="openSubscribe()">Subscribe</button>' +
        '</div>' +
      '</nav>' +
    '</header>';
  }

  /* ── SUBSCRIBE MODAL ── */
  var modal = document.getElementById('site-modal');
  if (modal) {
    modal.outerHTML = '<div class="modal-overlay" id="subModal" onclick="if(event.target===this)this.classList.remove(\'open\')">' +
      '<div class="modal">' +
        '<button class="modal-close" onclick="document.getElementById(\'subModal\').classList.remove(\'open\')">&times;</button>' +
        '<h3>Subscribe to our newsletter</h3>' +
        '<p>Get the latest stories delivered to your inbox.</p>' +
        '<form id="subForm" onsubmit="handleSubscribe(event)">' +
          '<input type="email" id="subEmail" placeholder="you@example.com" required />' +
          '<button type="submit" class="btn btn-primary" id="subBtn">Subscribe</button>' +
        '</form>' +
        '<div id="subSuccess" style="display:none;text-align:center;padding:20px 0">' +
          '<div style="font-size:2rem;margin-bottom:8px">&#10003;</div>' +
          '<p style="font-weight:600">You\'re subscribed!</p>' +
          '<p style="opacity:.6;font-size:.85rem">We\'ll send updates to <span id="subEmailDisplay"></span></p>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  /* ── FOOTER ── */
  var footer = document.getElementById('site-footer');
  if (footer) {
    footer.outerHTML = '<footer class="footer">' +
      '<div class="footer-brand"><img class="footer-logo" src="/localnode-logo.png" alt="localnode.app" /> News article clone built with Vite.</div>' +
      '<div class="footer-links">' +
        '<a href="/">Home</a>' +
        '<a href="https://www.cnn.com" target="_blank" rel="noopener">CNN Source</a>' +
        '<a href="https://github.com/uchochi/Nnn" target="_blank" rel="noopener">GitHub</a>' +
      '</div>' +
    '</footer>';
  }

  /* ── SMOOTH SCROLL ── */
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

/* ── GLOBAL HANDLERS ────────────────────────────────── */

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

function shareArticle(btn) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(window.location.href).then(function () {
      btn.textContent = 'Link Copied!';
      setTimeout(function () { btn.textContent = 'Share Article'; }, 2000);
    });
  } else {
    alert('URL: ' + window.location.href);
  }
}

function signIn() {
  alert('Sign in functionality coming soon!');
}

function openSubscribe() {
  document.getElementById('subModal').classList.add('open');
}
