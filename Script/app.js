// Global Application Logic for Cyndy Editorial Journal

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initReadingProgress();
  initMobileMenu();
  initGlobalSearch();
  initNewsletter();
  initContactForm();
  initActiveNavLink();
});

// 1. Theme Management (Warm Atelier Light vs Obsidian Noir Dark)
function initTheme() {
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const storedTheme = localStorage.getItem('cyndy_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const currentTheme = storedTheme || (prefersDark ? 'dark' : 'light');

  setTheme(currentTheme);

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const newTheme = isDark ? 'light' : 'dark';
      setTheme(newTheme);
      showToast(`Switched to ${newTheme === 'dark' ? 'Obsidian Noir' : 'Warm Atelier'} mode`);
    });
  });
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('cyndy_theme', theme);

  document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
    btn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`);
    btn.innerHTML = theme === 'dark' 
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  });
}

// 2. Reading Progress Bar
function initReadingProgress() {
  const progressBar = document.getElementById('readingProgressBar');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) {
      progressBar.style.width = '0%';
      return;
    }
    const progress = (window.scrollY / totalHeight) * 100;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }, { passive: true });
}

// 3. Mobile Navigation Menu
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileNavDrawer');
  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('open');
    toggleBtn.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close when clicking nav links
  drawer.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      toggleBtn.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// 4. Global Search Modal
function initGlobalSearch() {
  const overlay = document.getElementById('searchOverlay');
  const searchInput = document.getElementById('globalSearchInput');
  const searchResults = document.getElementById('searchResults');
  const openBtns = document.querySelectorAll('.open-search-btn');
  const closeBtn = document.getElementById('searchCloseBtn');

  if (!overlay || !searchInput || !searchResults) return;

  function openSearch() {
    overlay.classList.add('open');
    searchInput.value = '';
    searchInput.focus();
    renderSearchResults('');
    document.body.style.overflow = 'hidden';
  }

  function closeSearch() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  openBtns.forEach(btn => btn.addEventListener('click', openSearch));
  if (closeBtn) closeBtn.addEventListener('click', closeSearch);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeSearch();
  });

  // Keyboard shortcut Ctrl+K or Cmd+K
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      if (overlay.classList.contains('open')) closeSearch();
      else openSearch();
    } else if (e.key === 'Escape' && overlay.classList.contains('open')) {
      closeSearch();
    }
  });

  searchInput.addEventListener('input', (e) => {
    renderSearchResults(e.target.value.toLowerCase().trim());
  });

  function renderSearchResults(query) {
    if (typeof BLOG_POSTS === 'undefined') return;

    const matches = BLOG_POSTS.filter(p => 
      !query || 
      p.title.toLowerCase().includes(query) || 
      p.excerpt.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
      searchResults.innerHTML = `<div style="padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.95rem;">No stories found matching "${query}"</div>`;
      return;
    }

    searchResults.innerHTML = matches.map(post => `
      <div class="search-result-item" onclick="handleSearchResultClick('${post.id}')">
        <div>
          <div style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--accent-terracotta); text-transform: uppercase; margin-bottom: 2px;">${post.category}</div>
          <div style="font-family: var(--font-serif-text); font-size: 1.15rem; color: var(--text-main); font-weight: 500;">${post.title}</div>
        </div>
        <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-light);">${post.readTime}</span>
      </div>
    `).join('');
  }

  window.handleSearchResultClick = function(id) {
    closeSearch();
    if (window.openArticleReader) {
      window.openArticleReader(id);
    } else {
      window.location.href = `blogs.html#post-${id}`;
    }
  };
}

// 5. Newsletter Subscription Handling
function initNewsletter() {
  const forms = document.querySelectorAll('.newsletter-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('.newsletter-input');
      if (!input || !input.value) return;

      const email = input.value.trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showToast('Please enter a valid email address');
        return;
      }

      input.value = '';
      showToast('Welcome to The Sunday Letter. We sent a confirmation note.');
    });
  });
}

// 6. Contact Form Handling
function initContactForm() {
  const form = document.getElementById('contactInquiryForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName')?.value.trim();
    const email = document.getElementById('contactEmail')?.value.trim();
    const topic = document.getElementById('contactTopic')?.value;
    const message = document.getElementById('contactMessage')?.value.trim();

    if (!name || !email || !message) {
      showToast('Please fill out all required fields');
      return;
    }

    form.reset();
    showToast('Your note has been dispatched to Cyndy’s desk.');
  });
}

// 7. Active Nav Link Detection
function initActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// 8. Global Toast Feedback
function showToast(message) {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-terracotta)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

window.showToast = showToast;
