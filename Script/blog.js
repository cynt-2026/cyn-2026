// Blog Engine & Article Reader Logic for Cyndy Journal

let currentCategory = 'all';
let currentView = 'grid'; // 'grid' | 'list'
let searchQuery = '';

// Initialize Blog features
function initBlog() {
  const gridContainer = document.getElementById('blogGrid');
  const heroContainer = document.getElementById('featuredHeroContainer');
  const filtersContainer = document.getElementById('categoryFilters');
  const viewToggleGrid = document.getElementById('viewGridBtn');
  const viewToggleList = document.getElementById('viewListBtn');
  const searchInput = document.getElementById('blogSearchInput');

  // Render Featured Hero if on homepage
  if (heroContainer) {
    const featuredPost = BLOG_POSTS.find(p => p.featured) || BLOG_POSTS[0];
    heroContainer.innerHTML = createFeaturedHeroHTML(featuredPost);
  }

  // Render category filters
  if (filtersContainer) {
    const categories = ['all', ...new Set(BLOG_POSTS.map(p => p.category))];
    filtersContainer.innerHTML = categories.map(cat => `
      <button class="filter-btn ${cat === currentCategory ? 'active' : ''}" data-category="${cat}">
        ${cat === 'all' ? 'All Stories' : cat}
      </button>
    `).join('');

    filtersContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.category;
      renderPosts();
    });
  }

  // Search input filter
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderPosts();
    });
  }

  // View mode toggle
  if (viewToggleGrid && viewToggleList) {
    viewToggleGrid.addEventListener('click', () => {
      currentView = 'grid';
      viewToggleGrid.classList.add('active');
      viewToggleList.classList.remove('active');
      renderPosts();
    });

    viewToggleList.addEventListener('click', () => {
      currentView = 'list';
      viewToggleList.classList.add('active');
      viewToggleGrid.classList.remove('active');
      renderPosts();
    });
  }

  // Render initial posts
  renderPosts();

  // Attach reader drawer event listeners
  setupReaderDrawer();

  // Check URL hash for direct article link
  checkHashForArticle();
  window.addEventListener('hashchange', checkHashForArticle);
}

// Generate Featured Hero Card HTML
function createFeaturedHeroHTML(post) {
  return `
    <article class="hero-editorial-card" onclick="openArticleReader('${post.id}')">
      <div class="hero-card-media">
        <img src="${post.image}" alt="${post.title}" class="hero-card-img" loading="eager">
      </div>
      <div class="hero-card-body">
        <div class="card-meta">
          <span class="category-badge">${post.category}</span>
          <span class="meta-date">${post.date}</span>
        </div>
        <h2 class="hero-card-title">${post.title}</h2>
        <p class="hero-card-excerpt">${post.excerpt}</p>
        <div class="card-author-row">
          <img src="${post.author.avatar}" alt="${post.author.name}" class="author-avatar">
          <div class="author-details">
            <span class="author-name">${post.author.name}</span>
            <span class="author-read-time">${post.readTime} · Read Editorial</span>
          </div>
        </div>
      </div>
    </article>
  `;
}

// Render filtered blog posts
function renderPosts() {
  const container = document.getElementById('blogGrid');
  if (!container) return;

  const filtered = BLOG_POSTS.filter(post => {
    const matchesCategory = currentCategory === 'all' || post.category.toLowerCase() === currentCategory.toLowerCase();
    const matchesSearch = !searchQuery || 
      post.title.toLowerCase().includes(searchQuery) || 
      post.excerpt.toLowerCase().includes(searchQuery) ||
      post.category.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
        <p class="mono-label" style="margin-bottom: 0.5rem;">NO ESSAYS FOUND</p>
        <h3>No stories match your criteria.</h3>
        <p style="margin-top: 0.5rem;">Try adjusting your search query or selected category.</p>
      </div>
    `;
    return;
  }

  if (currentView === 'grid') {
    container.className = 'article-grid';
    container.innerHTML = filtered.map(post => `
      <article class="post-card" onclick="openArticleReader('${post.id}')">
        <div class="post-card-thumb">
          <img src="${post.image}" alt="${post.title}" loading="lazy">
        </div>
        <div class="post-card-content">
          <div class="card-meta">
            <span class="category-badge">${post.category}</span>
            <span class="meta-date">${post.date}</span>
          </div>
          <h3 class="post-card-title">${post.title}</h3>
          <p class="post-card-excerpt">${post.excerpt}</p>
          <div class="card-author-row">
            <img src="${post.author.avatar}" alt="${post.author.name}" class="author-avatar" style="width:34px; height:34px;">
            <div class="author-details">
              <span class="author-name" style="font-size: 0.85rem;">${post.author.name}</span>
              <span class="author-read-time">${post.readTime}</span>
            </div>
          </div>
        </div>
      </article>
    `).join('');
  } else {
    container.className = 'article-list';
    container.innerHTML = filtered.map(post => `
      <article class="post-card-horizontal" onclick="openArticleReader('${post.id}')">
        <div class="post-card-thumb">
          <img src="${post.image}" alt="${post.title}" loading="lazy">
        </div>
        <div class="post-card-content">
          <div class="card-meta">
            <span class="category-badge">${post.category}</span>
            <span class="meta-date">${post.date} · ${post.readTime}</span>
          </div>
          <h3 class="post-card-title">${post.title}</h3>
          <p class="post-card-excerpt">${post.excerpt}</p>
          <div class="card-author-row" style="margin-top: 0.5rem;">
            <span class="author-name" style="font-size: 0.85rem;">By ${post.author.name}</span>
          </div>
        </div>
      </article>
    `).join('');
  }
}

// Reader Drawer Functions
function setupReaderDrawer() {
  const overlay = document.getElementById('readerOverlay');
  const closeBtn = document.getElementById('readerCloseBtn');
  const fontToggle = document.getElementById('readerFontToggle');
  const copyBtn = document.getElementById('readerShareBtn');

  if (closeBtn) {
    closeBtn.addEventListener('click', closeArticleReader);
  }

  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeArticleReader();
    });
  }

  // Escape key closes reader
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeArticleReader();
    }
  });

  // Font size toggle inside reader
  if (fontToggle) {
    fontToggle.addEventListener('click', () => {
      const prose = document.getElementById('readerProse');
      if (!prose) return;
      const isLarge = prose.classList.toggle('prose-large');
      fontToggle.textContent = isLarge ? 'Standard Size' : 'Larger Type';
    });
  }

  // Share button
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(window.location.href);
      if (window.showToast) {
        window.showToast('Article link copied to clipboard');
      }
    });
  }
}

function openArticleReader(id) {
  const post = BLOG_POSTS.find(p => p.id === id);
  if (!post) return;

  const overlay = document.getElementById('readerOverlay');
  const titleEl = document.getElementById('readerTitle');
  const metaEl = document.getElementById('readerMeta');
  const imgEl = document.getElementById('readerImg');
  const proseEl = document.getElementById('readerProse');
  const authorEl = document.getElementById('readerAuthor');

  if (titleEl) titleEl.textContent = post.title;
  if (metaEl) {
    metaEl.innerHTML = `
      <span class="category-badge">${post.category}</span>
      <span class="meta-date">${post.date}</span>
      <span class="meta-date">·</span>
      <span class="meta-date">${post.readTime}</span>
    `;
  }
  if (imgEl) {
    imgEl.src = post.image;
    imgEl.alt = post.title;
  }
  if (proseEl) proseEl.innerHTML = post.content;
  if (authorEl) {
    authorEl.innerHTML = `
      <img src="${post.author.avatar}" alt="${post.author.name}" class="author-avatar" style="width:48px; height:48px;">
      <div class="author-details">
        <span class="author-name" style="font-size: 1rem;">Written by ${post.author.name}</span>
        <span class="author-read-time">${post.author.role} · The Cyndy Journal</span>
      </div>
    `;
  }

  if (overlay) {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    // Update URL hash without jumping
    history.replaceState(null, null, `#post-${post.id}`);
  }
}

function closeArticleReader() {
  const overlay = document.getElementById('readerOverlay');
  if (overlay && overlay.classList.contains('open')) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    // Clean hash
    if (window.location.hash.startsWith('#post-')) {
      history.replaceState(null, null, window.location.pathname + window.location.search);
    }
  }
}

function checkHashForArticle() {
  const hash = window.location.hash;
  if (hash && hash.startsWith('#post-')) {
    const postId = hash.replace('#post-', '');
    openArticleReader(postId);
  }
}

// Auto-run if DOM loaded
document.addEventListener('DOMContentLoaded', initBlog);
