// Initialize Lucide icons
lucide.createIcons();
document.getElementById('year').textContent = new Date().getFullYear();

// ===== STICKY HEADER =====
var header = document.getElementById('site-header');
window.addEventListener('scroll', function () {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

// ===== MOBILE MENU =====
var mobileToggle = document.getElementById('mobile-toggle');
var mobileMenu = document.getElementById('mobile-menu');
var menuOpen = false;

mobileToggle.addEventListener('click', function () {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle('open', menuOpen);
  document.getElementById('menu-icon').setAttribute('data-lucide', menuOpen ? 'x' : 'menu');
  lucide.createIcons();
});

document.querySelectorAll('.mobile-link').forEach(function (link) {
  link.addEventListener('click', function () {
    menuOpen = false;
    mobileMenu.classList.remove('open');
    document.getElementById('menu-icon').setAttribute('data-lucide', 'menu');
    lucide.createIcons();
  });
});

// ===== TESTIMONIAL STARS =====
var starSvg = '<svg style="width:16px;height:16px;fill:hsl(217,91%,57%);color:hsl(217,91%,57%)" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';

for (var i = 1; i <= 3; i++) {
  var el = document.getElementById('stars-' + i);
  if (el) el.innerHTML = Array(5).fill(starSvg).join('');
}

// ===== CONTACT FORM =====
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  var valid = true;
  var fields = [
    { id: 'cf-name', err: 'err-name', msg: 'Nome é obrigatório' },
    { id: 'cf-phone', err: 'err-phone', msg: 'WhatsApp é obrigatório' },
    { id: 'cf-email', err: 'err-email', msg: 'E-mail é obrigatório' },
    { id: 'cf-message', err: 'err-message', msg: 'Mensagem é obrigatória' }
  ];

  fields.forEach(function (f) {
    var val = document.getElementById(f.id).value.trim();
    var errEl = document.getElementById(f.err);
    if (!val) {
      errEl.textContent = f.msg;
      valid = false;
    } else {
      errEl.textContent = '';
    }
  });

  // Email validation
  var email = document.getElementById('cf-email').value.trim();
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById('err-email').textContent = 'E-mail inválido';
    valid = false;
  }

  if (!valid) return;

  // Show success
  var successEl = document.getElementById('form-success');
  successEl.style.display = 'flex';
  document.getElementById('contact-form').reset();

  setTimeout(function () {
    successEl.style.display = 'none';
  }, 4000);
});

// ===== SCROLL REVEAL =====
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(function (el) {
  observer.observe(el);
});
