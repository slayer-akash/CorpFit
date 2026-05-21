/* ========================================
   CorpFit — Cart, Products, Photo Sources
======================================== */

// === PRODUCT CATALOGUE with REAL Unsplash photos ===
// Using Unsplash CDN with w=900&q=80 params for fast loading
const PRODUCTS = [
  // MEN
  { id: 'M01', name: 'Sovereign Suit', cat: 'men', type: 'Three-Piece Suit',
    desc: 'Italian wool, hand-tailored silhouette',
    fullDesc: 'A timeless three-piece in 130s Italian wool. Half-canvas construction, peak lapels, and surgeon cuffs. The boardroom standard.',
    price: 24999, tag: 'Bestseller', fabric: 'Italian Super 130s Wool', fit: 'Modern Slim',
    img: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=900&q=80&auto=format&fit=crop' },
  { id: 'M02', name: 'Executive Blazer', cat: 'men', type: 'Single-Breasted Blazer',
    desc: 'Navy serge, structured shoulders',
    fullDesc: 'Single-breasted navy blazer with notch lapels. Structured shoulder, slim waist. Pairs with everything.',
    price: 14999, tag: 'New', fabric: 'Wool Serge', fit: 'Tailored',
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&q=80&auto=format&fit=crop' },
  { id: 'M03', name: 'Midnight Tuxedo', cat: 'men', type: 'Formal Tuxedo',
    desc: 'Satin peak lapel, evening cut',
    fullDesc: 'Midnight blue tuxedo with grosgrain satin peak lapels. For galas, weddings, and consequential dinners.',
    price: 32999, tag: 'Couture', fabric: 'Wool & Silk Blend', fit: 'Classic',
    img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=900&q=80&auto=format&fit=crop' },
  { id: 'M04', name: 'Heritage Two-Piece', cat: 'men', type: 'Two-Piece Suit',
    desc: 'Charcoal grey, half-canvas',
    fullDesc: 'A foundational charcoal two-piece. Half-canvas, side vents, single-breasted. The suit you will wear for a decade.',
    price: 18499, fabric: 'Pure New Wool', fit: 'Tailored',
    img: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=900&q=80&auto=format&fit=crop' },
  { id: 'M05', name: 'Cobalt Sport Coat', cat: 'men', type: 'Sport Coat',
    desc: 'Unstructured, soft-shoulder',
    fullDesc: 'Cobalt sport coat with patch pockets and a soft Neapolitan shoulder. Boardroom by day, dinner by night.',
    price: 12999, fabric: 'Wool & Cashmere', fit: 'Relaxed Tailored',
    img: 'https://images.unsplash.com/photo-1598808503746-f34c53b9323e?w=900&q=80&auto=format&fit=crop' },
  { id: 'M06', name: 'Onyx Dinner Jacket', cat: 'men', type: 'Dinner Jacket',
    desc: 'Black shawl collar, silk-faced',
    fullDesc: 'Onyx dinner jacket with a silk shawl collar and jetted pockets. Single-button closure for evening events.',
    price: 21999, tag: 'Limited', fabric: 'Wool with Silk Facings', fit: 'Slim',
    img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&q=80&auto=format&fit=crop' },

  // WOMEN
  { id: 'W01', name: 'Atelier Pantsuit', cat: 'women', type: 'Two-Piece Pantsuit',
    desc: 'Sharp shoulder, tapered trouser',
    fullDesc: 'A sharply tailored navy pantsuit. Structured shoulder, single-button blazer, high-rise tapered trouser. Power, articulated.',
    price: 22999, tag: 'Bestseller', fabric: 'Italian Wool Crepe', fit: 'Modern Tailored',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=80&auto=format&fit=crop' },
  { id: 'W02', name: 'Sterling Blazer Dress', cat: 'women', type: 'Blazer Dress',
    desc: 'Belted waist, double-breasted',
    fullDesc: 'A double-breasted blazer dress in deep navy. Cinched at the waist with a self-belt. Effortless authority.',
    price: 16999, tag: 'New', fabric: 'Stretch Wool Blend', fit: 'Fitted',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&q=80&auto=format&fit=crop' },
  { id: 'W03', name: 'Onyx Power Suit', cat: 'women', type: 'Two-Piece Suit',
    desc: 'Obsidian black, peak lapel',
    fullDesc: 'Obsidian black power suit with peak lapels and a pencil skirt option. The closer of deals.',
    price: 25999, tag: 'Couture', fabric: 'Italian Super 120s Wool', fit: 'Tailored',
    img: 'https://tse4.mm.bing.net/th/id/OIP.kUWKF0Gdzbq_VjIs-4p4OQHaJ4?w=202&h=269&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
  { id: 'W04', name: 'Empire Skirt Suit', cat: 'women', type: 'Skirt Suit',
    desc: 'Pencil skirt, fitted jacket',
    fullDesc: 'Fitted jacket with a high-waisted pencil skirt. Princess seams for an architectural silhouette.',
    price: 19499, fabric: 'Pure Wool', fit: 'Hourglass',
    img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=900&q=80&auto=format&fit=crop' },
  { id: 'W05', name: 'Sapphire Blazer', cat: 'women', type: 'Tailored Blazer',
    desc: 'Single-breasted, satin lapels',
    fullDesc: 'A sapphire blue blazer with subtle satin notch lapels. Cropped silhouette, statement buttons.',
    price: 13499, fabric: 'Wool with Silk Lapels', fit: 'Cropped Tailored',
    img: 'https://tse4.mm.bing.net/th/id/OIP.pNcnEucQYFmTzoh22RpAaAAAAA?w=202&h=260&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
  { id: 'W06', name: 'Velvet Evening Suit', cat: 'women', type: 'Evening Suit',
    desc: 'Midnight velvet, wide-leg trouser',
    fullDesc: 'Midnight velvet two-piece with a wide-leg trouser and an oversized blazer. For evenings that matter.',
    price: 27999, tag: 'Limited', fabric: 'Italian Silk Velvet', fit: 'Oversized',
    img: 'https://tse2.mm.bing.net/th/id/OIP.L-Puc4k7K4g51RgOTRXMfAHaId?w=202&h=232&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' }
];

// === CART (localStorage) ===
const CART_KEY = 'corpfit_cart_v1';

function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}

function addToCart(productId, size = 'M') {
  const cart = getCart();
  const existing = cart.find(i => i.id === productId && i.size === size);
  if (existing) existing.qty += 1;
  else cart.push({ id: productId, size, qty: 1 });
  saveCart(cart);
  showToast('Added to atelier', PRODUCTS.find(p => p.id === productId).name);
}

function removeFromCart(productId, size) {
  let cart = getCart();
  cart = cart.filter(i => !(i.id === productId && i.size === size));
  saveCart(cart);
  if (typeof renderCheckoutItems === 'function') renderCheckoutItems();
}

function updateQty(productId, size, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId && i.size === size);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart(cart);
  if (typeof renderCheckoutItems === 'function') renderCheckoutItems();
}

function cartTotal() {
  return getCart().reduce((sum, item) => {
    const p = PRODUCTS.find(x => x.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}

function cartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function updateCartCount() {
  const el = document.querySelector('.cart-count');
  if (el) {
    el.textContent = cartCount();
    el.classList.add('bump');
    setTimeout(() => el.classList.remove('bump'), 400);
  }
}

function formatPrice(n) {
  return '₹' + n.toLocaleString('en-IN');
}

// === TOAST ===
function showToast(title, msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `
    <svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-6"/>
    </svg>
    <div>
      <div class="toast-title">${title}</div>
      <div class="toast-msg">${msg}</div>
    </div>`;
  setTimeout(() => toast.classList.add('show'), 10);
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove('show'), 2800);
}

// === LOGO (blazer mark) ===
function logoSvg() {
  return `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#c9a96a"/>
        <stop offset="1" stop-color="#e4c989"/>
      </linearGradient>
    </defs>
    <path d="M12,12 L24,8 L30,18 L36,8 L48,12 L52,24 L46,26 L46,52 L14,52 L14,26 L8,24 Z"
      fill="none" stroke="url(#logoGrad)" stroke-width="1.5"/>
    <path d="M22,12 L30,22 L22,52" fill="none" stroke="url(#logoGrad)" stroke-width="1.2"/>
    <path d="M38,12 L30,22 L38,52" fill="none" stroke="url(#logoGrad)" stroke-width="1.2"/>
    <circle cx="30" cy="36" r="1.5" fill="url(#logoGrad)"/>
    <path d="M40,30 L46,29 L44,34 L41,33 Z" fill="url(#logoGrad)"/>
  </svg>`;
}

// === SCROLL REVEAL ===
function initScrollReveal() {
  const els = document.querySelectorAll('[data-reveal]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
  els.forEach(el => io.observe(el));
}

// === COUNTER ANIMATION ===
function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.counter);
      const duration = 1800;
      const start = performance.now();
      function tick(now) {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(target * eased).toString().padStart(2, '0');
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => io.observe(c));
}

// === CUSTOM CURSOR (desktop only) ===
function initCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) return;
  const cursor = document.createElement('div');
  cursor.className = 'cursor-dot';
  const ring = document.createElement('div');
  ring.className = 'cursor-ring';
  document.body.appendChild(cursor);
  document.body.appendChild(ring);

  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.transform = `translate(${mx}px, ${my}px)`;
  });
  function loop() {
    rx += (mx - rx) * 0.15;
    ry += (my - ry) * 0.15;
    ring.style.transform = `translate(${rx}px, ${ry}px)`;
    requestAnimationFrame(loop);
  }
  loop();

  document.addEventListener('mouseover', e => {
    if (e.target.closest('a, button, .product-card, .category-card')) {
      ring.classList.add('hover');
    }
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest('a, button, .product-card, .category-card')) {
      ring.classList.remove('hover');
    }
  });
}

// === PARALLAX ===
function initParallax() {
  const els = document.querySelectorAll('[data-parallax]');
  if (!els.length) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    els.forEach(el => {
      const speed = parseFloat(el.dataset.parallax) || 0.15;
      el.style.transform = `translateY(${y * speed}px)`;
    });
  }, { passive: true });
}

// === NAV SHRINK ON SCROLL ===
function initNavShrink() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('shrunk', window.scrollY > 60);
  }, { passive: true });
}

// === MARQUEE clone for seamless loop ===
function initMarquee() {
  document.querySelectorAll('.marquee-track').forEach(track => {
    track.innerHTML = track.innerHTML + track.innerHTML;
  });
}

// === IMAGE FALLBACK — If any Unsplash image fails to load,
//     swap in a stable backup so the demo NEVER shows a broken image. ===
function bindImageFallbacks() {
  const backups = [
    'https://picsum.photos/seed/corpfit-suit-1/900/1200',
    'https://picsum.photos/seed/corpfit-suit-2/900/1200',
    'https://picsum.photos/seed/corpfit-blazer/900/1200',
    'https://picsum.photos/seed/corpfit-tailor/900/1200',
    'https://picsum.photos/seed/corpfit-formal/900/1200',
    'https://picsum.photos/seed/corpfit-atelier/900/1200'
  ];
  let i = 0;
  document.querySelectorAll('img').forEach(img => {
    if (img.dataset.fbBound) return;
    img.dataset.fbBound = '1';
    img.addEventListener('error', () => {
      if (img.dataset.failed) return;
      img.dataset.failed = '1';
      img.src = backups[i++ % backups.length];
    });
  });
  // Also patch CSS-background sections
  document.querySelectorAll('.hero-bg, .testimonial, .checkout-wrap, .cat-hero').forEach((el, idx) => {
    const cs = getComputedStyle(el).backgroundImage;
    const m = cs.match(/url\("?(https:\/\/images\.unsplash\.com\/[^")]+)"?\)/);
    if (!m) return;
    const probe = new Image();
    probe.onerror = () => {
      const backup = backups[(idx + 2) % backups.length];
      const current = el.style.backgroundImage || cs;
      el.style.backgroundImage = current.replace(m[1], backup);
    };
    probe.src = m[1];
  });
}
window.rebindImageFallbacks = bindImageFallbacks;

// === INIT ===
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.logo-mount').forEach(el => { el.innerHTML = logoSvg(); });
  updateCartCount();
  initScrollReveal();
  initCounters();
  initCursor();
  initParallax();
  initNavShrink();
  initMarquee();
  bindImageFallbacks();
});
