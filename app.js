/* ==========================================================================
   THE SLOW HOUSE — CAFE & ARTISAN SPACE
   Interactive Application Logic & Scroll Motion Controller
   ========================================================================== */

// --- MENU DATABASE ---
const MENU_DATA = [
  // Specialty Coffee
  {
    id: 'espresso',
    name: 'Espresso Solo / Doppio',
    category: 'coffee',
    price: 120,
    isVeg: true,
    desc: 'Intense, aromatic double extraction of 100% Chikmagalur Arabica.',
    img: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'cappuccino',
    name: 'Classic Cappuccino',
    category: 'coffee',
    price: 160,
    isVeg: true,
    desc: 'Smooth, rich and perfectly balanced with silky steamed microfoam.',
    img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'flat-white',
    name: 'Artisan Flat White',
    category: 'coffee',
    price: 170,
    isVeg: true,
    desc: 'Velvety microfoam poured over double ristretto for a pure coffee kick.',
    img: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'pour-over',
    name: 'V60 Manual Pour-Over',
    category: 'coffee',
    price: 180,
    isVeg: true,
    desc: 'Hand-brewed single estate roast highlighting floral & citrus tasting notes.',
    img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'slow-filter-coffee',
    name: 'Signature South Indian Filter Roast',
    category: 'coffee',
    price: 130,
    isVeg: true,
    desc: 'Traditional slow drip decoction brewed with rich foamy milk in brass tumbler style.',
    img: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=500&auto=format&fit=crop&q=80'
  },

  // Cold Brews & Iced
  {
    id: 'iced-caramel-latte',
    name: 'Iced Caramel Latte',
    category: 'cold-brews',
    price: 210,
    isVeg: true,
    desc: 'Sweet, creamy salted caramel layered over chilled espresso and whole milk.',
    img: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'nitro-cold-brew',
    name: '18-Hour Slow Cold Brew',
    category: 'cold-brews',
    price: 190,
    isVeg: true,
    desc: 'Steeped for 18 hours in cold purified water. Naturally sweet, zero bitterness.',
    img: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'tonic-espresso',
    name: 'Sparkling Espresso Tonic',
    category: 'cold-brews',
    price: 200,
    isVeg: true,
    desc: 'Double shot espresso floating over chilled botanical tonic and rosemary sprig.',
    img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'matcha-iced-latte',
    name: 'Uji Matcha Iced Latte',
    category: 'cold-brews',
    price: 220,
    isVeg: true,
    desc: 'Ceremonial grade green tea whisked with cold milk and sweet agave.',
    img: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=500&auto=format&fit=crop&q=80'
  },

  // Artisan Bakery
  {
    id: 'butter-croissant',
    name: 'Flaky Butter Croissant',
    category: 'bakery',
    price: 140,
    isVeg: true,
    desc: 'Flaky, golden, multi-layered French pastry baked fresh daily in morning.',
    img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'pain-au-chocolat',
    name: 'Pain Au Chocolat',
    category: 'bakery',
    price: 160,
    isVeg: true,
    desc: 'Buttery viennoiserie pastry stuffed with rich Belgian dark chocolate bars.',
    img: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'sourdough-toast',
    name: 'Avocado & Herb Sourdough Toast',
    category: 'bakery',
    price: 190,
    isVeg: true,
    desc: 'Artisanal country sourdough topped with smashed avocado, cherry tomatoes, seeds.',
    img: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=500&auto=format&fit=crop&q=80'
  },

  // Gourmet Bites & Pizza
  {
    id: 'margherita-pizza',
    name: 'Artisan Margherita Wood-fired Pizza',
    category: 'bites',
    price: 280,
    isVeg: true,
    desc: 'Slow-fermented dough with San Marzano marinara, fresh bocconcini & basil.',
    img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'paneer-pesto-panini',
    name: 'Basil Pesto & Grilled Paneer Panini',
    category: 'bites',
    price: 220,
    isVeg: true,
    desc: 'Pressed focaccia with house pesto, grilled cottage cheese and mozzarella.',
    img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'truffle-fries',
    name: 'Parmesan Truffle Fries',
    category: 'bites',
    price: 170,
    isVeg: true,
    desc: 'Crisp golden fries tossed with white truffle oil, shaved cheese and garlic aioli.',
    img: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?w=500&auto=format&fit=crop&q=80'
  },

  // Desserts
  {
    id: 'classic-cheesecake',
    name: 'New York Style Cheesecake',
    category: 'desserts',
    price: 220,
    isVeg: true,
    desc: 'Rich, creamy and decadent baked cheesecake served with house berry compote.',
    img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'tiramisu',
    name: 'Espresso Tiramisu Jar',
    category: 'desserts',
    price: 210,
    isVeg: true,
    desc: 'Savoiardi ladyfingers soaked in our slow espresso layered with mascarpone cream.',
    img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&auto=format&fit=crop&q=80'
  },
  {
    id: 'dark-fudge-brownie',
    name: 'Sizzling Warm Fudge Brownie',
    category: 'desserts',
    price: 180,
    isVeg: true,
    desc: 'Served with a scoop of Madagascar vanilla bean gelato and dark chocolate ganache.',
    img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&auto=format&fit=crop&q=80'
  }
];

// --- GEN Z VIBE PAIRINGS DATABASE ---
const VIBE_PAIRS = {
  'deep-work': {
    title: 'The Deep Focus Pairing',
    tag: '⚡ Productivity Mode',
    desc: 'Clean 18-hour cold brew paired with nutrient-rich avocado sourdough. Crisp energy, zero crash, perfect for coding or study sprints.',
    drink: { id: 'nitro-cold-brew', name: '18-Hour Slow Cold Brew', price: 190 },
    bite: { id: 'sourdough-toast', name: 'Avocado & Herb Sourdough Toast', price: 190 },
    img: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=600&auto=format&fit=crop&q=80'
  },
  'first-date': {
    title: 'The Cozy Sunset Date',
    tag: '🕯️ Romantic & Intimate',
    desc: 'Smooth velvety flat white paired with decadent Espresso Tiramisu. Sweet, indulgent, and made for endless conversations.',
    drink: { id: 'flat-white', name: 'Artisan Flat White', price: 170 },
    bite: { id: 'tiramisu', name: 'Espresso Tiramisu Jar', price: 210 },
    img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&auto=format&fit=crop&q=80'
  },
  'aesthetic-dump': {
    title: 'The Instagram Reel Aesthetic',
    tag: '📸 Main Character Vibe',
    desc: 'Chilled layers of Iced Caramel Latte with our signature New York Cheesecake. Golden light, pristine layers, 100% photogenic.',
    drink: { id: 'iced-caramel-latte', name: 'Iced Caramel Latte', price: 210 },
    bite: { id: 'classic-cheesecake', name: 'New York Style Cheesecake', price: 220 },
    img: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=600&auto=format&fit=crop&q=80'
  },
  'lazy-sunday': {
    title: 'The Slow Weekend Chill',
    tag: '🌿 Relax & Unwind',
    desc: 'Aromatic manual V60 pour-over paired with a freshly baked golden butter croissant. Pure slow living in Shirur Park.',
    drink: { id: 'pour-over', name: 'V60 Manual Pour-Over', price: 180 },
    bite: { id: 'butter-croissant', name: 'Flaky Butter Croissant', price: 140 },
    img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&auto=format&fit=crop&q=80'
  },
  'sweet-craving': {
    title: 'The Sweet Tooth Indulgence',
    tag: '🍫 Decadent Feast',
    desc: 'Ceremonial Uji Matcha latte alongside a warm fudge brownie with cold vanilla gelato. Heavenly hot-and-cold contrast.',
    drink: { id: 'matcha-iced-latte', name: 'Uji Matcha Iced Latte', price: 220 },
    bite: { id: 'dark-fudge-brownie', name: 'Sizzling Warm Fudge Brownie', price: 180 },
    img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=80'
  }
};

// --- STATE MANAGEMENT ---
let cart = JSON.parse(localStorage.getItem('the_slow_house_cart') || '[]');
let currentCategory = 'all';
let isVegOnly = false;
let searchQuery = '';
let isAudioPlaying = false;
let audioContext = null;
let audioNodes = [];

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();
  renderFullMenuGrid();
  checkCafeOpenStatus();
  setupHeaderScroll();
  setupMobileDrawer();
  setupScrollReveal();
  setupScrollProgress();
  setup3DTilt();
  setupLofiAudio();
  selectVibe('deep-work');
});

// --- SCROLL PROGRESS INDICATOR ---
function setupScrollProgress() {
  const progressBar = document.getElementById('scrollProgressBar');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = (window.scrollY / totalHeight) * 100;
      progressBar.style.width = `${progress}%`;
    }
  }, { passive: true });
}

// --- INTERSECTION OBSERVER SCROLL REVEALS ---
function setupScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

// --- 3D TILT EFFECT ON HOVER ---
function setup3DTilt() {
  const tiltElements = document.querySelectorAll('.tilt-element');
  
  tiltElements.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });
}

// --- VIBE / MOOD PICKER CONTROLLER ---
function selectVibe(key) {
  const pair = VIBE_PAIRS[key];
  if (!pair) return;

  // Update active chip state
  document.querySelectorAll('.vibe-chip').forEach(chip => chip.classList.remove('active'));
  event?.currentTarget?.classList.add('active');

  const card = document.getElementById('vibeResultCard');
  if (!card) return;

  const total = pair.drink.price + pair.bite.price;

  card.innerHTML = `
    <img src="${pair.img}" alt="${pair.title}" class="vibe-result-img">
    <div class="vibe-result-info">
      <span class="vibe-tag">${pair.tag}</span>
      <h3 class="vibe-result-title">${pair.title}</h3>
      <p class="vibe-result-desc">${pair.desc}</p>
      
      <div class="vibe-pairing-strip">
        <span>☕ ${pair.drink.name}</span>
        <span style="color:var(--accent-gold);">+</span>
        <span>🥐 ${pair.bite.name}</span>
        <strong style="margin-left:auto; color:var(--accent-gold);">₹${total}</strong>
      </div>

      <div style="margin-top: 14px; display: flex; gap: 12px;">
        <button class="btn btn-accent btn-sm hover-glow" onclick="addPairingToCart('${pair.drink.id}', '${pair.drink.name}', ${pair.drink.price}, '${pair.bite.id}', '${pair.bite.name}', ${pair.bite.price})">
          + Add Pairing to Bag (₹${total})
        </button>
        <button class="btn btn-outline btn-sm" onclick="openReservationModal('Reserved for ${pair.title}')">
          Book This Vibe
        </button>
      </div>
    </div>
  `;
}

function addPairingToCart(drinkId, drinkName, drinkPrice, biteId, biteName, bitePrice) {
  addToCart(drinkId, drinkName, drinkPrice, 'Drink');
  addToCart(biteId, biteName, bitePrice, 'Bite');
  showToast(`✨ Added "${drinkName}" + "${biteName}" to your bag!`);
}

// --- COZY AMBIENT CAFE SOUND GENERATOR (Web Audio API) ---
function setupLofiAudio() {
  const btn = document.getElementById('lofiAudioBtn');
  const label = document.getElementById('audioLabel');
  if (!btn || !label) return;

  btn.addEventListener('click', () => {
    if (!isAudioPlaying) {
      startAmbientSound();
      isAudioPlaying = true;
      btn.classList.add('playing');
      label.textContent = 'Cozy Ambience: ON 🎵';
      showToast('☕ Soft cafe ambience playing in background...');
    } else {
      stopAmbientSound();
      isAudioPlaying = false;
      btn.classList.remove('playing');
      label.textContent = 'Cozy Ambience: OFF';
    }
  });
}

function startAmbientSound() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    audioContext = new AudioCtx();

    // Create pink noise buffer for warm rain & coffee shop vinyl texture
    const bufferSize = audioContext.sampleRate * 2;
    const noiseBuffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
      output[i] *= 0.04; // Gentle volume
      b6 = white * 0.115926;
    }

    const whiteNoise = audioContext.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    // Filter to warm low frequencies
    const filter = audioContext.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 600;

    const gainNode = audioContext.createGain();
    gainNode.gain.setValueAtTime(0.01, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.08, audioContext.currentTime + 1.5);

    whiteNoise.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioContext.destination);

    whiteNoise.start(0);
    audioNodes = [whiteNoise, gainNode];
  } catch (err) {
    console.log('Audio init prevented:', err);
  }
}

function stopAmbientSound() {
  if (audioContext && audioContext.state !== 'closed') {
    audioContext.close();
  }
}

// --- HEADER SCROLL & ACTIVE NAV ---
function setupHeaderScroll() {
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

// --- MOBILE MENU TOGGLE ---
function setupMobileDrawer() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileNavDrawer');
  
  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      drawer.classList.toggle('open');
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
      });
    });
  }
}

// --- CAFE OPEN/CLOSED STATUS CALCULATOR ---
function checkCafeOpenStatus() {
  const statusBadge = document.getElementById('cafeStatusBadge');
  const statusText = document.getElementById('cafeStatusText');
  if (!statusBadge || !statusText) return;

  const now = new Date();
  const currentHour = now.getHours();
  
  if (currentHour >= 12 && currentHour < 22) {
    statusBadge.style.backgroundColor = 'rgba(16, 185, 129, 0.12)';
    statusBadge.style.borderColor = 'rgba(16, 185, 129, 0.3)';
    statusBadge.style.color = '#34d399';
    statusText.textContent = 'Open Now (12 PM - 10 PM)';
  } else {
    statusBadge.style.backgroundColor = 'rgba(239, 68, 68, 0.12)';
    statusBadge.style.borderColor = 'rgba(239, 68, 68, 0.3)';
    statusBadge.style.color = '#f87171';
    statusText.textContent = 'Opens at 12:00 PM';
  }
}

// --- FULL MENU MODAL & FILTERING ---
function openFullMenuModal() {
  const dialog = document.getElementById('fullMenuModal');
  if (dialog) {
    renderFullMenuGrid();
    dialog.showModal();
  }
}

function closeFullMenuModal() {
  const dialog = document.getElementById('fullMenuModal');
  if (dialog) dialog.close();
}

function filterMenu(category) {
  currentCategory = category;
  document.querySelectorAll('.menu-tab').forEach(tab => tab.classList.remove('active'));
  event.target.classList.add('active');
  renderFullMenuGrid();
}

function handleMenuSearch(e) {
  searchQuery = e.target.value.toLowerCase().trim();
  renderFullMenuGrid();
}

function toggleVegOnly(e) {
  isVegOnly = e.target.checked;
  renderFullMenuGrid();
}

function renderFullMenuGrid() {
  const grid = document.getElementById('fullMenuGrid');
  if (!grid) return;

  let filtered = MENU_DATA.filter(item => {
    const matchesCategory = currentCategory === 'all' || item.category === currentCategory;
    const matchesVeg = !isVegOnly || item.isVeg;
    const matchesSearch = !searchQuery || 
      item.name.toLowerCase().includes(searchQuery) || 
      item.desc.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesVeg && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 40px; color: var(--text-light-muted);">
      No dishes or brews matched your search. Try another category!
    </div>`;
    return;
  }

  grid.innerHTML = filtered.map(item => `
    <div class="modal-menu-card">
      <img src="${item.img}" alt="${item.name}" class="modal-item-thumb">
      <div class="modal-item-info">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:flex-start;">
            <h4 class="modal-item-title">${item.name}</h4>
            <span style="font-size:0.7rem; color:#34d399; font-weight:700;">${item.isVeg ? '🌱 VEG' : ''}</span>
          </div>
          <p class="modal-item-desc">${item.desc}</p>
        </div>
        <div class="modal-item-foot">
          <strong style="color:var(--accent-gold); font-size:1.05rem;">₹${item.price}</strong>
          <button class="add-to-cart-btn" onclick="addToCart('${item.id}', '${item.name}', ${item.price}, '${item.category}')">
            + Add to Order
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// --- CART & ORDER SYSTEM ---
function addToCart(id, name, price, category) {
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id, name, price, category, qty: 1 });
  }
  
  saveCart();
  updateCartUI();
  showToast(`Added "${name}" to order bag!`);
}

function updateQuantity(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== id);
  }
  
  saveCart();
  updateCartUI();
}

function saveCart() {
  localStorage.setItem('the_slow_house_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const countEl = document.getElementById('cartCount');
  const itemsContainer = document.getElementById('cartItemsContainer');
  const subtotalEl = document.getElementById('cartSubtotal');
  const taxEl = document.getElementById('cartTax');
  const totalEl = document.getElementById('cartTotal');

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  if (countEl) countEl.textContent = totalItems;

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const tax = Math.round(subtotal * 0.05);
  const grandTotal = subtotal + tax;

  if (subtotalEl) subtotalEl.textContent = `₹${subtotal}`;
  if (taxEl) taxEl.textContent = `₹${tax}`;
  if (totalEl) totalEl.textContent = `₹${grandTotal}`;

  if (!itemsContainer) return;

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="cart-empty-message">
        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" style="margin: 0 auto 12px; opacity:0.4;">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
        </svg>
        <p>Your bag is currently empty.</p>
        <p style="font-size:0.8rem; margin-top:6px;">Explore our menu to add specialty coffees & artisanal treats!</p>
      </div>
    `;
    return;
  }

  itemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item-row">
      <div class="cart-item-meta">
        <strong>${item.name}</strong>
        <span>₹${item.price} each</span>
      </div>
      <div class="cart-qty-ctrl">
        <button class="qty-btn" onclick="updateQuantity('${item.id}', -1)" aria-label="Decrease quantity">-</button>
        <span class="cart-qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="updateQuantity('${item.id}', 1)" aria-label="Increase quantity">+</button>
      </div>
    </div>
  `).join('');
}

// Open / Close Cart Drawer
document.getElementById('cartBtn')?.addEventListener('click', () => {
  document.getElementById('cartDrawer')?.classList.add('open');
  document.getElementById('cartDrawerOverlay')?.classList.add('open');
});

function closeCartDrawer() {
  document.getElementById('cartDrawer')?.classList.remove('open');
  document.getElementById('cartDrawerOverlay')?.classList.remove('open');
}

// Checkout to WhatsApp
function checkoutOrder() {
  if (cart.length === 0) {
    showToast('Please add items to your order bag first.');
    return;
  }

  const orderType = document.querySelector('input[name="orderType"]:checked')?.value || 'Dine-in';
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const total = subtotal + Math.round(subtotal * 0.05);

  let message = `Hello *The Slow House Cafe* (Hubballi),\nI'd like to place an order:\n\n*Order Type:* ${orderType}\n\n*Items:*`;
  cart.forEach(item => {
    message += `\n• ${item.name} x ${item.qty} = ₹${item.price * item.qty}`;
  });
  message += `\n\n*Total Amount:* ₹${total} (incl. taxes)\n\nThank you!`;

  const phone = '917795566030';
  const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  
  window.open(waUrl, '_blank');
  showToast('Order prepared! Opening WhatsApp...');
}

// --- TABLE RESERVATION MODAL ---
function openReservationModal(customNote = '') {
  const dialog = document.getElementById('reservationModal');
  if (dialog) {
    const dateInput = document.getElementById('resDate');
    if (dateInput && !dateInput.value) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.value = today;
      dateInput.min = today;
    }
    if (customNote) {
      const noteInput = document.getElementById('resSpecial');
      if (noteInput) noteInput.value = customNote;
    }
    dialog.showModal();
  }
}

function closeReservationModal() {
  const dialog = document.getElementById('reservationModal');
  if (dialog) dialog.close();
}

function handleReservationSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('resName').value;
  const phone = document.getElementById('resPhone').value;
  const date = document.getElementById('resDate').value;
  const time = document.getElementById('resTime').value;
  const guests = document.getElementById('resGuests').value;
  const seating = document.getElementById('resSeating').value;
  const special = document.getElementById('resSpecial').value;

  closeReservationModal();
  showToast(`🎉 Reservation confirmed for ${name} on ${date} at ${time}!`);

  const confirmWa = confirm(`Would you like to send your reservation confirmation to The Slow House on WhatsApp (+91 77955 66030)?`);
  if (confirmWa) {
    const text = `Hello The Slow House,\nI would like to reserve a table:\n\n• Name: ${name}\n• Phone: ${phone}\n• Date: ${date}\n• Time Slot: ${time}\n• Guests: ${guests}\n• Seating: ${seating}${special ? `\n• Notes: ${special}` : ''}`;
    window.open(`https://wa.me/917795566030?text=${encodeURIComponent(text)}`, '_blank');
  }

  document.getElementById('reservationForm').reset();
}

// --- SEARCH MODAL & GLOBAL SEARCH ---
document.getElementById('searchBtn')?.addEventListener('click', () => {
  const dialog = document.getElementById('searchModal');
  if (dialog) {
    dialog.showModal();
    document.getElementById('globalSearchInput')?.focus();
  }
});

function closeSearchModal() {
  const dialog = document.getElementById('searchModal');
  if (dialog) dialog.close();
}

function handleGlobalSearch(e) {
  const query = e.target.value.toLowerCase().trim();
  const list = document.getElementById('searchResultsList');
  if (!list) return;

  if (!query) {
    list.innerHTML = `<p class="search-placeholder">Start typing to see delicious recommendations...</p>`;
    return;
  }

  const results = MENU_DATA.filter(item => 
    item.name.toLowerCase().includes(query) || 
    item.desc.toLowerCase().includes(query) ||
    item.category.toLowerCase().includes(query)
  );

  if (results.length === 0) {
    list.innerHTML = `<p class="search-placeholder">No items found matching "${query}".</p>`;
    return;
  }

  list.innerHTML = results.map(item => `
    <div style="display:flex; justify-content:space-between; align-items:center; background:var(--bg-dark-card); padding:10px 14px; border-radius:6px; border:1px solid var(--border-dark);">
      <div>
        <strong style="color:var(--text-light-primary); font-size:0.92rem;">${item.name}</strong>
        <p style="font-size:0.75rem; color:var(--text-light-muted);">${item.desc}</p>
      </div>
      <div style="display:flex; align-items:center; gap:12px;">
        <span style="color:var(--accent-gold); font-weight:700;">₹${item.price}</span>
        <button class="add-to-cart-btn" onclick="addToCart('${item.id}', '${item.name}', ${item.price}, '${item.category}'); closeSearchModal();">+ Add</button>
      </div>
    </div>
  `).join('');
}

// --- GALLERY LIGHTBOX ---
function openLightbox(imgUrl, caption) {
  const dialog = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg');
  const cap = document.getElementById('lightboxCaption');
  
  if (dialog && img && cap) {
    img.src = imgUrl;
    cap.textContent = caption;
    dialog.showModal();
  }
}

function closeLightbox() {
  const dialog = document.getElementById('lightboxModal');
  if (dialog) dialog.close();
}

// --- NEWSLETTER SUBMISSION ---
function handleNewsletterSubmit(e) {
  e.preventDefault();
  const email = document.getElementById('newsletterEmail').value;
  showToast(`Thank you! ${email} has been subscribed for slow living coffee updates.`);
  document.getElementById('newsletterForm').reset();
}

// --- TOAST NOTIFICATIONS ---
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 400);
  }, 3200);
}
