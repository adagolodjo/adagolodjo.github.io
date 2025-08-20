---
layout: page
title: Blog
permalink: /blog/
subtitle: Thoughts on Research, Teaching, and Technology
---

<div class="blog-container">
  <!-- Blog Header -->
  <div class="blog-header">
    <div class="blog-intro">
      <h1 class="title is-2">Research & Insights</h1>
      <p class="blog-description">Exploring the frontiers of robotics research, sharing teaching experiences, and discussing breakthrough developments in medical robotics and soft robotics technologies.</p>
    </div>
    
    <!-- Enhanced Search and Filter Bar -->
    <div class="blog-controls">
      <div class="field has-addons">
        <div class="control has-icons-left is-expanded">
          <input type="text" id="blog-search" placeholder="Search posts, topics, or keywords..." class="input is-medium">
          <span class="icon is-small is-left">
            <i class="fas fa-search"></i>
          </span>
        </div>
        <div class="control">
          <button class="button is-medium" id="clear-search" title="Clear search">
            <span class="icon">
              <i class="fas fa-times"></i>
            </span>
          </button>
        </div>
      </div>
      
      <!-- Filter Pills -->
      <div class="filter-pills mt-3">
        <div class="field is-grouped is-grouped-multiline">
          <div class="control">
            <button class="button is-primary is-outlined category-pill is-active" data-category="all">
              All Posts
            </button>
          </div>
          {% for category in site.categories %}
          <div class="control">
            <button class="button is-primary is-outlined category-pill" data-category="{{ category[0] | slugify }}">
              {{ category[0] | capitalize }}
              <span class="tag is-light ml-1">{{ category[1].size }}</span>
            </button>
          </div>
          {% endfor %}
        </div>
      </div>
    </div>
  </div>

  <!-- Search Results Info -->
  <div class="search-results-info" id="search-info" style="display: none;">
    <div class="notification is-info is-light">
      <span id="results-text"></span>
      <button class="delete" id="clear-filters"></button>
    </div>
  </div>

  <div class="columns">
    <!-- Main Content -->
    <div class="column is-8">
      <!-- Featured Post with Enhanced Display -->
      {% assign featured_post = site.posts.first %}
      {% if featured_post %}
      <div class="featured-post mb-6">
        <div class="card is-large">
          {% if featured_post.image %}
          <div class="card-image">
            <figure class="image is-16by9">
              <img src="{{ featured_post.image }}" alt="{{ featured_post.title }}" loading="lazy">
            </figure>
          </div>
          {% endif %}
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-3">
                  <a href="{{ featured_post.url }}" class="has-text-dark">{{ featured_post.title }}</a>
                </p>
                <p class="subtitle is-6 has-text-grey">
                  <span class="icon is-small">
                    <i class="far fa-calendar-alt"></i>
                  </span>
                  {{ featured_post.date | date: "%B %d, %Y" }}
                  <span class="ml-3">
                    <span class="icon is-small">
                      <i class="far fa-clock"></i>
                    </span>
                    {% assign words = featured_post.content | number_of_words %}
                    {% if words < 360 %}
                      1 min read
                    {% else %}
                      {{ words | divided_by:200 }} min read
                    {% endif %}
                  </span>
                  {% if featured_post.categories %}
                  <span class="ml-3">
                    {% for category in featured_post.categories %}
                    <span class="tag is-primary is-light">{{ category }}</span>
                    {% endfor %}
                  </span>
                  {% endif %}
                </p>
              </div>
              <div class="media-right">
                <span class="tag is-success is-medium">
                  <span class="icon is-small">
                    <i class="fas fa-star"></i>
                  </span>
                  <span>Featured</span>
                </span>
              </div>
            </div>
            <div class="content">
              <p class="is-size-5">{{ featured_post.excerpt | strip_html | truncatewords: 40 }}</p>
              <div class="buttons mt-4">
                <a href="{{ featured_post.url }}" class="button is-primary">
                  <span>Read Full Article</span>
                  <span class="icon is-small">
                    <i class="fas fa-arrow-right"></i>
                  </span>
                </a>
                {% if featured_post.external_link %}
                <a href="{{ featured_post.external_link }}" class="button is-light" target="_blank">
                  <span>View Source</span>
                  <span class="icon is-small">
                    <i class="fas fa-external-link-alt"></i>
                  </span>
                </a>
                {% endif %}
              </div>
            </div>
          </div>
        </div>
      </div>
      {% endif %}

      <!-- Posts Section with Loading State -->
      <div class="recent-posts">
        <div class="section-header">
          <h2 class="title is-3">
            <span class="icon is-medium">
              <i class="fas fa-newspaper"></i>
            </span>
            <span id="posts-section-title">Recent Posts</span>
          </h2>
          <div class="level-right">
            <div class="field has-addons">
              <div class="control">
                <div class="select is-small">
                  <select id="sort-posts">
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="title">Title A-Z</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Loading Skeleton -->
        <div class="loading-skeleton" id="loading-skeleton" style="display: none;">
          {% for i in (1..3) %}
          <div class="card mb-4">
            <div class="card-content">
              <div class="skeleton-line skeleton-title"></div>
              <div class="skeleton-line skeleton-subtitle"></div>
              <div class="skeleton-line skeleton-content"></div>
              <div class="skeleton-line skeleton-content short"></div>
            </div>
          </div>
          {% endfor %}
        </div>
        
        <div class="posts-grid" id="posts-container">
          {% for post in site.posts offset:1 limit:6 %}
          <article class="post-card" 
                   data-categories="{% for category in post.categories %}{{ category | slugify }} {% endfor %}"
                   data-date="{{ post.date | date: '%Y-%m-%d' }}"
                   data-title="{{ post.title | downcase }}">
            <div class="card">
              {% if post.image %}
              <div class="card-image">
                <figure class="image is-16by9">
                  <img src="{{ post.image }}" alt="{{ post.title }}" loading="lazy">
                </figure>
              </div>
              {% endif %}
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-5">
                      <a href="{{ post.url }}" class="has-text-dark">{{ post.title }}</a>
                    </p>
                    <p class="subtitle is-6 has-text-grey">
                      <span class="icon is-small">
                        <i class="far fa-calendar-alt"></i>
                      </span>
                      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
                      <span class="ml-3">
                        <span class="icon is-small">
                          <i class="far fa-clock"></i>
                        </span>
                        {% assign words = post.content | number_of_words %}
                        {% if words < 360 %}
                          1 min read
                        {% else %}
                          {{ words | divided_by:200 }} min read
                        {% endif %}
                      </span>
                    </p>
                  </div>
                </div>
                <div class="content">
                  <p>{{ post.excerpt | strip_html | truncatewords: 25 }}</p>
                  {% if post.categories %}
                  <div class="tags mt-3">
                    {% for category in post.categories %}
                    <span class="tag is-link is-light is-clickable category-tag" data-category="{{ category | slugify }}">{{ category }}</span>
                    {% endfor %}
                  </div>
                  {% endif %}
                </div>
                <footer class="card-footer">
                  <a href="{{ post.url }}" class="card-footer-item has-text-primary">
                    <span>Read More</span>
                    <span class="icon is-small ml-2">
                      <i class="fas fa-arrow-right"></i>
                    </span>
                  </a>
                  <div class="card-footer-item">
                    <div class="buttons are-small">
                      <button class="button is-white share-button" data-title="{{ post.title }}" data-url="{{ site.url }}{{ post.url }}" title="Share this post">
                        <span class="icon is-small">
                          <i class="fas fa-share-alt"></i>
                        </span>
                      </button>
                      <button class="button is-white bookmark-button" data-post="{{ post.url }}" title="Bookmark this post">
                        <span class="icon is-small">
                          <i class="far fa-bookmark"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          </article>
          {% endfor %}
        </div>
        
        <!-- Enhanced Load More with Progress -->
        {% if site.posts.size > 7 %}
        <div class="has-text-centered mt-6">
          <button class="button is-primary is-medium" id="load-more-posts">
            <span class="icon is-small">
              <i class="fas fa-plus"></i>
            </span>
            <span>Load More Posts</span>
          </button>
          <p class="has-text-grey mt-2" id="posts-progress">
            Showing {{ 6 | at_most: site.posts.size | minus: 1 }} of {{ site.posts.size | minus: 1 }} posts
          </p>
        </div>
        {% endif %}

        <!-- Empty State -->
        <div class="empty-state" id="empty-state" style="display: none;">
          <div class="has-text-centered py-6">
            <span class="icon is-large has-text-grey-light">
              <i class="fas fa-search fa-3x"></i>
            </span>
            <p class="title is-4 has-text-grey">No posts found</p>
            <p class="subtitle has-text-grey">Try adjusting your search or filter criteria</p>
            <button class="button is-primary is-outlined" id="reset-filters">
              <span class="icon is-small">
                <i class="fas fa-refresh"></i>
              </span>
              <span>Show All Posts</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Enhanced Sidebar -->
    <div class="column is-4">
      <!-- Quick Stats with Animation -->
      <div class="box stats-box">
        <h3 class="title is-5">
          <span class="icon is-small">
            <i class="fas fa-chart-line"></i>
          </span>
          Blog Statistics
        </h3>
        <div class="stats-grid">
          <div class="stat-item">
            <span class="stat-number" data-count="{{ site.posts.size }}">0</span>
            <span class="stat-label">Total Posts</span>
          </div>
          <div class="stat-item">
            <span class="stat-number" data-count="{{ site.categories.size }}">0</span>
            <span class="stat-label">Categories</span>
          </div>
          {% assign postsByYear = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
          <div class="stat-item">
            <span class="stat-number" data-count="{{ postsByYear.size }}">0</span>
            <span class="stat-label">Years Active</span>
          </div>
          {% assign totalWords = 0 %}
          {% for post in site.posts %}
            {% assign postWords = post.content | number_of_words %}
            {% assign totalWords = totalWords | plus: postWords %}
          {% endfor %}
          <div class="stat-item">
            <span class="stat-number" data-count="{{ totalWords | divided_by: 1000 }}">0</span>
            <span class="stat-label">K Words Written</span>
          </div>
        </div>
      </div>

      <!-- Enhanced Categories with Icons -->
      <div class="box">
        <h3 class="title is-5">
          <span class="icon is-small">
            <i class="fas fa-folder-open"></i>
          </span>
          Categories
        </h3>
        <div class="category-list">
          {% assign category_icons = "research:fas fa-microscope,teaching:fas fa-chalkboard-teacher,robotics:fas fa-robot,medical:fas fa-heartbeat,technology:fas fa-laptop-code,soft-robotics:fas fa-hand-paper" | split: "," %}
          {% assign icon_map = "" | split: "" %}
          {% for item in category_icons %}
            {% assign parts = item | split: ":" %}
            {% assign icon_map = icon_map | push: parts %}
          {% endfor %}
          
          {% for category in site.categories %}
          <div class="category-item">
            <a href="#" class="category-filter" data-category="{{ category[0] | slugify }}">
              <span class="category-info">
                <span class="icon is-small">
                  {% assign category_slug = category[0] | slugify %}
                  {% assign found_icon = false %}
                  {% for icon_pair in icon_map %}
                    {% if icon_pair[0] == category_slug %}
                      <i class="{{ icon_pair[1] }}"></i>
                      {% assign found_icon = true %}
                      {% break %}
                    {% endif %}
                  {% endfor %}
                  {% unless found_icon %}
                    <i class="fas fa-tag"></i>
                  {% endunless %}
                </span>
                <span>{{ category[0] | capitalize }}</span>
              </span>
              <span class="tag is-light">{{ category[1].size }}</span>
            </a>
          </div>
          {% endfor %}
        </div>
      </div>

      <!-- Recent Activity Timeline -->
      <div class="box">
        <h3 class="title is-5">
          <span class="icon is-small">
            <i class="fas fa-clock"></i>
          </span>
          Recent Activity
        </h3>
        <div class="timeline is-small">
          {% for post in site.posts limit:5 %}
          <div class="timeline-item">
            <div class="timeline-marker is-primary is-small"></div>
            <div class="timeline-content">
              <p class="heading">{{ post.date | date: "%B %d" }}</p>
              <p><a href="{{ post.url }}" class="has-text-dark">{{ post.title | truncate: 50 }}</a></p>
            </div>
          </div>
          {% endfor %}
        </div>
      </div>

      <!-- Enhanced Subscribe Section -->
      <div class="box has-text-centered subscribe-box">
        <h3 class="title is-5">
          <span class="icon is-small">
            <i class="fas fa-bell"></i>
          </span>
          Stay Connected
        </h3>
        <p class="mb-4">Get the latest updates on robotics research and educational insights.</p>
        <div class="buttons is-centered">
          <a href="/feed.xml" class="button is-warning">
            <span class="icon is-small">
              <i class="fas fa-rss"></i>
            </span>
            <span>RSS Feed</span>
          </a>
          <a href="/contact/" class="button is-info">
            <span class="icon is-small">
              <i class="fas fa-envelope"></i>
            </span>
            <span>Contact Me</span>
          </a>
        </div>
        
        <!-- Social Share -->
        <div class="social-share mt-4">
          <p class="has-text-grey is-size-7 mb-2">Share this blog:</p>
          <div class="buttons is-centered are-small">
            <button class="button is-light share-blog" data-platform="twitter">
              <span class="icon is-small">
                <i class="fab fa-twitter"></i>
              </span>
            </button>
            <button class="button is-light share-blog" data-platform="linkedin">
              <span class="icon is-small">
                <i class="fab fa-linkedin"></i>
              </span>
            </button>
            <button class="button is-light share-blog" data-platform="reddit">
              <span class="icon is-small">
                <i class="fab fa-reddit"></i>
              </span>
            </button>
          </div>
        </div>
      </div>

      <!-- Popular Posts -->
      {% assign popular_posts = site.posts | sort: 'views' | reverse %}
      {% if popular_posts.size > 0 %}
      <div class="box">
        <h3 class="title is-5">
          <span class="icon is-small">
            <i class="fas fa-fire"></i>
          </span>
          Popular Posts
        </h3>
        <div class="popular-posts">
          {% for post in popular_posts limit:3 %}
          <div class="popular-post">
            <div class="media">
              <div class="media-content">
                <p class="title is-6">
                  <a href="{{ post.url }}" class="has-text-dark">{{ post.title }}</a>
                </p>
                <p class="subtitle is-7 has-text-grey">
                  {{ post.date | date: "%b %d, %Y" }}
                </p>
              </div>
              <div class="media-right">
                <span class="icon has-text-warning">
                  <i class="fas fa-star"></i>
                </span>
              </div>
            </div>
          </div>
          {% unless forloop.last %}<hr class="my-2">{% endunless %}
          {% endfor %}
        </div>
      </div>
      {% endif %}
    </div>
  </div>
</div>

<!-- Include Blog Enhancements -->
{% include blog-enhancements.html %}

<!-- Include Blog Improvements -->
{% include blog-improvements.html %}

<!-- Enhanced CSS -->
<style>
/* Loading Skeleton Animations */
.skeleton-line {
  height: 1rem;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 2s infinite;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.skeleton-title { height: 1.5rem; width: 80%; }
.skeleton-subtitle { height: 1rem; width: 60%; }
.skeleton-content { height: 1rem; width: 100%; }
.skeleton-content.short { width: 70%; }

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Enhanced Filter Pills */
.filter-pills {
  border-bottom: 1px solid #dbdbdb;
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
}

.category-pill.is-active {
  background-color: #3273dc;
  color: white;
}

/* Stats Animation */
.stats-box .stat-number {
  font-size: 2rem;
  font-weight: bold;
  color: #3273dc;
  transition: all 0.3s ease;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  text-align: center;
}

.stat-item:hover .stat-number {
  transform: scale(1.1);
  color: #ff3860;
}

/* Enhanced Category List */
.category-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.category-item {
  border-radius: 6px;
  transition: background-color 0.2s ease;
}

.category-item:hover {
  background-color: #f5f5f5;
}

.category-filter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  color: inherit;
  text-decoration: none;
  width: 100%;
}

.category-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Timeline Styles */
.timeline {
  position: relative;
  padding-left: 1rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0.5rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: #dbdbdb;
}

.timeline-item {
  position: relative;
  margin-bottom: 1rem;
}

.timeline-marker {
  position: absolute;
  left: -0.25rem;
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background-color: #3273dc;
  border: 2px solid white;
  z-index: 1;
}

.timeline-content {
  margin-left: 1.5rem;
}

/* Post Card Enhancements */
.post-card {
  margin-bottom: 1.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.post-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
}

.category-tag:hover {
  background-color: #3273dc !important;
  color: white !important;
}

/* Search Results Info */
.search-results-info {
  margin-bottom: 1rem;
}

/* Empty State */
.empty-state {
  background-color: #fafafa;
  border-radius: 6px;
  padding: 2rem;
}

/* Responsive Improvements */
@media screen and (max-width: 768px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .category-pill {
    margin-bottom: 0.5rem;
    width: 100%;
  }
  
  .filter-pills .field.is-grouped.is-grouped-multiline {
    flex-direction: column;
  }
  
  .blog-controls {
    flex-direction: column;
    gap: 1rem;
  }
}

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
  .skeleton-line {
    background: linear-gradient(90deg, #2f2f2f 25%, #3f3f3f 50%, #2f2f2f 75%);
  }
  
  .empty-state {
    background-color: #1f1f1f;
  }
}
</style>

<!-- Enhanced JavaScript -->
<script>
document.addEventListener('DOMContentLoaded', function() {
  // Elements
  const searchInput = document.getElementById('blog-search');
  const clearSearchBtn = document.getElementById('clear-search');
  const postsContainer = document.getElementById('posts-container');
  const loadingElement = document.getElementById('loading-skeleton');
  const searchInfo = document.getElementById('search-info');
  const resultsText = document.getElementById('results-text');
  const emptyState = document.getElementById('empty-state');
  const sortSelect = document.getElementById('sort-posts');
  const postsTitle = document.getElementById('posts-section-title');
  
  const allPosts = Array.from(postsContainer.querySelectorAll('.post-card'));
  let currentCategory = 'all';
  let currentSort = 'newest';
  let visiblePosts = 6;
  
  // Animate stats numbers
  function animateStats() {
    const statNumbers = document.querySelectorAll('[data-count]');
    statNumbers.forEach(stat => {
      const target = parseInt(stat.dataset.count);
      const increment = target / 60; // 60 frames for smooth animation
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        stat.textContent = Math.floor(current);
      }, 16);
    });
  }
  
  // Initialize stats animation
  setTimeout(animateStats, 500);
  
  // Enhanced search functionality
  let searchTimeout;
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      clearTimeout(searchTimeout);
      const searchTerm = this.value.toLowerCase().trim();
      
      // Show loading state for longer searches
      if (searchTerm.length > 2) {
        showLoading(true);
        searchTimeout = setTimeout(() => {
          filterPosts(searchTerm, currentCategory);
          showLoading(false);
        }, 300);
      } else {
        filterPosts(searchTerm, currentCategory);
      }
    });
  }
  
  // Clear search
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', function() {
      searchInput.value = '';
      filterPosts('', currentCategory);
      searchInput.focus();
    });
  }
  
  // Category filter pills
  const categoryPills = document.querySelectorAll('.category-pill');
  categoryPills.forEach(pill => {
    pill.addEventListener('click', function(e) {
      e.preventDefault();
      currentCategory = this.dataset.category;
      
      // Update active state
      categoryPills.forEach(p => p.classList.remove('is-active'));
      this.classList.add('is-active');
      
      const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
      filterPosts(searchTerm, currentCategory);
      updatePostsTitle();
    });
  });
  
  // Sidebar category filters
  const sidebarFilters = document.querySelectorAll('.category-filter');
  sidebarFilters.forEach(filter => {
    filter.addEventListener('click', function(e) {
      e.preventDefault();
      const category = this.dataset.category;
      
      // Sync with pills
      categoryPills.forEach(p => {
        if (p.dataset.category === category) {
          p.click();
        }
      });
    });
  });
  
  // Tag filters
  const tagFilters = document.querySelectorAll('.category-tag');
  tagFilters.forEach(tag => {
    tag.addEventListener('click', function(e) {
      e.preventDefault();
      const category = this.dataset.category;
      
      // Sync with pills
      categoryPills.forEach(p => {
        if (p.dataset.category === category) {
          p.click();
        }
      });
      
      // Smooth scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
  
  // Sort functionality
  if (sortSelect) {
    sortSelect.addEventListener('change', function() {
      currentSort = this.value;
      sortPosts();
      updatePostsTitle();
    });
  }
  
  // Enhanced filter function
  function filterPosts(searchTerm, category) {
    let visibleCount = 0;
    
    allPosts.forEach(post => {
      const title = post.querySelector('.title a').textContent.toLowerCase();
      const content = post.querySelector('.content p').textContent.toLowerCase();
      const categories = post.dataset.categories.toLowerCase();
      
      const matchesSearch = searchTerm === '' || 
                           title.includes(searchTerm) || 
                           content.includes(searchTerm) ||
                           categories.includes(searchTerm);
      const matchesCategory = category === 'all' || categories.includes(category);
      
      if (matchesSearch && matchesCategory) {
        post.style.display = 'block';
        visibleCount++;
      } else {
        post.style.display = 'none';
      }
    });
    
    updateSearchInfo(searchTerm, category, visibleCount);
    
    // Show empty state if no posts visible
    if (visibleCount === 0) {
      emptyState.style.display = 'block';
      postsContainer.style.display = 'none';
    } else {
      emptyState.style.display = 'none';
      postsContainer.style.display = 'grid';
    }
  }
  
  // Sort posts
  function sortPosts() {
    const sortedPosts = [...allPosts].sort((a, b) => {
      switch (currentSort) {
        case 'oldest':
          return new Date(a.dataset.date) - new Date(b.dataset.date);
        case 'title':
          return a.dataset.title.localeCompare(b.dataset.title);
        default: // newest
          return new Date(b.dataset.date) - new Date(a.dataset.date);
      }
    });
    
    // Clear and re-append sorted posts
    postsContainer.innerHTML = '';
    sortedPosts.forEach(post => postsContainer.appendChild(post));
  }
  
  // Update search info
  function updateSearchInfo(searchTerm, category, count) {
    let message = '';
    
    if (searchTerm || category !== 'all') {
      message = `Found ${count} post${count !== 1 ? 's' : ''}`;
      
      if (searchTerm) {
        message += ` matching "${searchTerm}"`;
      }
      
      if (category !== 'all') {
        const categoryName = document.querySelector(`[data-category="${category}"]`)?.textContent?.trim() || category;
        message += ` in ${categoryName}`;
      }
      
      searchInfo.style.display = 'block';
      resultsText.textContent = message;
    } else {
      searchInfo.style.display = 'none';
    }
  }
  
  // Update posts section title
  function updatePostsTitle() {
    if (currentCategory === 'all' && currentSort === 'newest') {
      postsTitle.textContent = 'Recent Posts';
    } else {
      let title = '';
      if (currentCategory !== 'all') {
        const categoryName = document.querySelector(`[data-category="${currentCategory}"]`)?.textContent?.trim() || currentCategory;
        title = categoryName + ' Posts';
      } else {
        title = 'All Posts';
      }
      
      if (currentSort === 'oldest') {
        title = title.replace('Posts', 'Posts (Oldest First)');
      } else if (currentSort === 'title') {
        title = title.replace('Posts', 'Posts (A-Z)');
      }
      
      postsTitle.textContent = title;
    }
  }
  
  // Show/hide loading state
  function showLoading(show) {
    if (show) {
      loadingElement.style.display = 'block';
      postsContainer.style.display = 'none';
    } else {
      loadingElement.style.display = 'none';
      postsContainer.style.display = 'grid';
    }
  }
  
  // Clear all filters
  const clearFiltersBtn = document.getElementById('clear-filters');
  const resetFiltersBtn = document.getElementById('reset-filters');
  
  [clearFiltersBtn, resetFiltersBtn].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', function() {
        searchInput.value = '';
        currentCategory = 'all';
        currentSort = 'newest';
        
        // Reset UI
        categoryPills.forEach(p => p.classList.remove('is-active'));
        document.querySelector('[data-category="all"]').classList.add('is-active');
        sortSelect.value = 'newest';
        
        filterPosts('', 'all');
        sortPosts();
        updatePostsTitle();
      });
    }
  });
  
  // Enhanced Load More functionality
  const loadMoreBtn = document.getElementById('load-more-posts');
  const postsProgress = document.getElementById('posts-progress');
  let postsPerLoad = 6;
  
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function() {
      // Simulate loading
      this.classList.add('is-loading');
      
      setTimeout(() => {
        visiblePosts += postsPerLoad;
        updateProgress();
        this.classList.remove('is-loading');
        
        // Hide button if all posts are shown
        if (visiblePosts >= allPosts.length - 1) {
          this.style.display = 'none';
          postsProgress.textContent = `Showing all ${allPosts.length - 1} posts`;
        }
      }, 800);
    });
  }
  
  function updateProgress() {
    if (postsProgress) {
      const totalPosts = allPosts.length - 1; // Exclude featured post
      const showing = Math.min(visiblePosts, totalPosts);
      postsProgress.textContent = `Showing ${showing} of ${totalPosts} posts`;
    }
  }
  
  // Share functionality
  const shareButtons = document.querySelectorAll('.share-button');
  shareButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const title = this.dataset.title;
      const url = this.dataset.url;
      
      if (navigator.share) {
        navigator.share({ title, url });
      } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(url).then(() => {
          // Show temporary success message
          const originalText = this.innerHTML;
          this.innerHTML = '<span class="icon is-small"><i class="fas fa-check"></i></span>';
          setTimeout(() => {
            this.innerHTML = originalText;
          }, 2000);
        });
      }
    });
  });
  
  // Blog sharing
  const shareBlogBtns = document.querySelectorAll('.share-blog');
  shareBlogBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const platform = this.dataset.platform;
      const url = encodeURIComponent(window.location.href);
      const title = encodeURIComponent('Check out this robotics research blog');
      
      let shareUrl = '';
      switch (platform) {
        case 'twitter':
          shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
          break;
        case 'linkedin':
          shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
          break;
        case 'reddit':
          shareUrl = `https://reddit.com/submit?url=${url}&title=${title}`;
          break;
      }
      
      if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
      }
    });
  });
  
  // Bookmark functionality (using localStorage simulation - for demo purposes)
  const bookmarkButtons = document.querySelectorAll('.bookmark-button');
  bookmarkButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const postUrl = this.dataset.post;
      const icon = this.querySelector('i');
      
      // Toggle bookmark state
      if (icon.classList.contains('far')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        this.classList.add('has-text-warning');
        
        // Show success message
        showToast('Post bookmarked!', 'success');
      } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        this.classList.remove('has-text-warning');
        
        showToast('Bookmark removed', 'info');
      }
    });
  });
  
  // Toast notification system
  function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `notification is-${type} toast`;
    toast.innerHTML = `
      <button class="delete"></button>
      ${message}
    `;
    
    // Style the toast
    toast.style.position = 'fixed';
    toast.style.top = '20px';
    toast.style.right = '20px';
    toast.style.zIndex = '1000';
    toast.style.maxWidth = '300px';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'transform 0.3s ease';
    
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
      toast.style.transform = 'translateX(0)';
    }, 100);
    
    // Handle close button
    const closeBtn = toast.querySelector('.delete');
    closeBtn.addEventListener('click', () => {
      removeToast(toast);
    });
    
    // Auto remove after 3 seconds
    setTimeout(() => {
      removeToast(toast);
    }, 3000);
  }
  
  function removeToast(toast) {
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }
  
  // Intersection Observer for lazy loading and animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const postObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe all post cards
  allPosts.forEach(post => {
    post.style.opacity = '0';
    post.style.transform = 'translateY(20px)';
    post.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    postObserver.observe(post);
  });
  
  // Keyboard shortcuts
  document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      searchInput.focus();
    }
    
    // Escape to clear search
    if (e.key === 'Escape' && searchInput === document.activeElement) {
      searchInput.blur();
      if (searchInput.value) {
        clearSearchBtn.click();
      }
    }
  });
  
  // Add keyboard shortcut hint
  if (searchInput) {
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    const shortcut = isMac ? '⌘K' : 'Ctrl+K';
    searchInput.placeholder += ` (${shortcut})`;
  }
  
  // Performance optimization: Debounced scroll handler
  let scrollTimeout;
  window.addEventListener('scroll', function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      // Add header shadow when scrolled
      const header = document.querySelector('.blog-header');
      if (header) {
        if (window.scrollY > 50) {
          header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        } else {
          header.style.boxShadow = 'none';
        }
      }
    }, 16); // ~60fps
  });
  
  // Initialize
  updateProgress();
  updatePostsTitle();
  
  // Add smooth scrolling to all internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Handle URL hash on page load
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  }
  
  // Add reading time calculation for dynamically loaded content
  function calculateReadingTime(text) {
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    const readingTime = Math.ceil(words / wordsPerMinute);
    return readingTime < 1 ? 1 : readingTime;
  }
  
  // Update reading times if needed
  document.querySelectorAll('.post-card').forEach(post => {
    const content = post.querySelector('.content p').textContent;
    const readingTimeEl = post.querySelector('[data-reading-time]');
    if (readingTimeEl && content) {
      const time = calculateReadingTime(content);
      readingTimeEl.textContent = `${time} min read`;
    }
  });
  
  console.log('🚀 Enhanced blog loaded successfully!');
});

</script>

<!-- Additional CSS for toast notifications -->
<style>
.toast {
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

/* Enhanced responsive grid for posts */
.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

@media screen and (max-width: 768px) {
  .posts-grid {
    grid-template-columns: 1fr;
  }
}

/* Smooth transitions for all interactive elements */
.button, .card, .tag, .category-filter {
  transition: all 0.2s ease;
}

/* Focus states for accessibility */
.button:focus,
.input:focus,
.category-filter:focus,
.card:focus-within {
  outline: 2px solid #3273dc;
  outline-offset: 2px;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .tag.is-light {
    border: 1px solid currentColor;
  }
  
  .card {
    border: 1px solid #dbdbdb;
  }
}

/* Reduce motion for users who prefer it */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Print styles */
@media print {
  .blog-controls,
  .sidebar,
  .button,
  .toast {
    display: none !important;
  }
  
  .post-card {
    break-inside: avoid;
    page-break-inside: avoid;
  }
  
  .card {
    box-shadow: none !important;
    border: 1px solid #ccc;
  }
}
</style>