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
      <p class="blog-description">Welcome to my blog where I share insights about robotics research, teaching experiences, and the latest developments in medical robotics and soft robotics technologies.</p>
    </div>
    
    <!-- Search and Filter Bar -->
    <div class="blog-controls">
      <div class="search-box">
        <input type="text" id="blog-search" placeholder="Search posts..." class="input">
        <span class="icon is-small is-left">
          <i class="fas fa-search"></i>
        </span>
      </div>
      <div class="filter-dropdown">
        <div class="dropdown">
          <div class="dropdown-trigger">
            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
              <span>Filter by Category</span>
              <span class="icon is-small">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <a href="#" class="dropdown-item" data-category="all">All Posts</a>
              {% for category in site.categories %}
              <a href="#" class="dropdown-item" data-category="{{ category[0] | slugify }}">{{ category[0] | capitalize }}</a>
              {% endfor %}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="columns">
    <!-- Main Content -->
    <div class="column is-8">
      <!-- Featured Post -->
      {% assign featured_post = site.posts.first %}
      {% if featured_post %}
      <div class="featured-post">
        <div class="card is-large">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">
                  <a href="{{ featured_post.url }}">{{ featured_post.title }}</a>
                </p>
                <p class="subtitle is-6">
                  <span class="icon is-small">
                    <i class="far fa-calendar-alt"></i>
                  </span>
                  {{ featured_post.date | date: "%B %d, %Y" }}
                  {% if featured_post.categories %}
                  <span class="ml-3">
                    <span class="icon is-small">
                      <i class="fas fa-tags"></i>
                    </span>
                    {% for category in featured_post.categories %}
                    <span class="tag is-primary is-light">{{ category }}</span>
                    {% endfor %}
                  </span>
                  {% endif %}
                </p>
              </div>
              <div class="media-right">
                <span class="tag is-success">Featured</span>
              </div>
            </div>
            <div class="content">
              <p>{{ featured_post.excerpt | truncatewords: 50 }}</p>
              <div class="buttons">
                <a href="{{ featured_post.url }}" class="button is-primary">
                  <span class="icon is-small">
                    <i class="fas fa-arrow-right"></i>
                  </span>
                  <span>Read Full Post</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {% endif %}

      <!-- Recent Posts -->
      <div class="recent-posts">
        <h2 class="title is-3">
          <span class="icon is-medium">
            <i class="fas fa-clock"></i>
          </span>
          Recent Posts
        </h2>
        
        <div class="posts-grid" id="posts-container">
          {% for post in site.posts offset:1 limit:6 %}
          <div class="post-card" data-categories="{% for category in post.categories %}{{ category | slugify }} {% endfor %}">
            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-5">
                      <a href="{{ post.url }}">{{ post.title }}</a>
                    </p>
                    <p class="subtitle is-6">
                      <span class="icon is-small">
                        <i class="far fa-calendar-alt"></i>
                      </span>
                      {{ post.date | date: "%B %d, %Y" }}
                    </p>
                  </div>
                </div>
                <div class="content">
                  <p>{{ post.excerpt | strip_html | truncatewords: 25 }}</p>
                  {% if post.categories %}
                  <div class="tags">
                    {% for category in post.categories %}
                    <span class="tag is-link is-light">{{ category }}</span>
                    {% endfor %}
                  </div>
                  {% endif %}
                </div>
                <footer class="card-footer">
                  <a href="{{ post.url }}" class="card-footer-item">
                    <span class="icon is-small">
                      <i class="fas fa-arrow-right"></i>
                    </span>
                    <span>Read More</span>
                  </a>
                </footer>
              </div>
            </div>
          </div>
          {% endfor %}
        </div>
        
        <!-- Load More Button -->
        {% if site.posts.size > 7 %}
        <div class="has-text-centered mt-5">
          <button class="button is-primary is-outlined" id="load-more-posts">
            <span class="icon is-small">
              <i class="fas fa-plus"></i>
            </span>
            <span>Load More Posts</span>
          </button>
        </div>
        {% endif %}
      </div>
    </div>

    <!-- Sidebar -->
    <div class="column is-4">
      <!-- Quick Stats -->
      <div class="box">
        <h3 class="title is-5">
          <span class="icon is-small">
            <i class="fas fa-chart-bar"></i>
          </span>
          Blog Stats
        </h3>
        <div class="stats-grid">
          <div class="stat-item">
            <span class="stat-number">{{ site.posts.size }}</span>
            <span class="stat-label">Total Posts</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">{{ site.categories.size }}</span>
            <span class="stat-label">Categories</span>
          </div>
          {% assign postsByYear = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
          <div class="stat-item">
            <span class="stat-number">{{ postsByYear.size }}</span>
            <span class="stat-label">Years Active</span>
          </div>
        </div>
      </div>

      <!-- Categories -->
      <div class="box">
        <h3 class="title is-5">
          <span class="icon is-small">
            <i class="fas fa-tags"></i>
          </span>
          Categories
        </h3>
        <div class="tags">
          {% for category in site.categories %}
          <a href="#" class="tag is-medium category-filter" data-category="{{ category[0] | slugify }}">
            {{ category[0] | capitalize }}
            <span class="tag is-light is-small ml-1">{{ category[1].size }}</span>
          </a>
          {% endfor %}
        </div>
      </div>

      <!-- Archives -->
      <div class="box">
        <h3 class="title is-5">
          <span class="icon is-small">
            <i class="fas fa-archive"></i>
          </span>
          Archives
        </h3>
        {% assign postsByYear = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
        {% for year in postsByYear %}
        <div class="archive-year">
          <h4 class="title is-6">{{ year.name }}</h4>
          <div class="archive-posts">
            {% for post in year.items limit:5 %}
            <div class="archive-post">
              <a href="{{ post.url }}">{{ post.title }}</a>
              <span class="has-text-grey is-size-7">{{ post.date | date: "%b %d" }}</span>
            </div>
            {% endfor %}
            {% if year.items.size > 5 %}
            <div class="archive-post">
              <a href="#" class="has-text-grey">... and {{ year.items.size | minus: 5 }} more</a>
            </div>
            {% endif %}
          </div>
        </div>
        {% endfor %}
      </div>

      <!-- Subscribe/Follow -->
      <div class="box has-text-centered">
        <h3 class="title is-5">
          <span class="icon is-small">
            <i class="fas fa-rss"></i>
          </span>
          Stay Updated
        </h3>
        <p class="mb-4">Follow my research and get notified about new posts.</p>
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
            <span>Contact</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Blog JavaScript -->
<script>
document.addEventListener('DOMContentLoaded', function() {
  // Search functionality
  const searchInput = document.getElementById('blog-search');
  const postsContainer = document.getElementById('posts-container');
  const allPosts = Array.from(postsContainer.querySelectorAll('.post-card'));
  
  // Search filter
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      filterPosts(searchTerm, getCurrentCategory());
    });
  }
  
  // Category filter
  const categoryFilters = document.querySelectorAll('.category-filter, .dropdown-item[data-category]');
  let currentCategory = 'all';
  
  function getCurrentCategory() {
    return currentCategory;
  }
  
  categoryFilters.forEach(filter => {
    filter.addEventListener('click', function(e) {
      e.preventDefault();
      currentCategory = this.dataset.category;
      filterPosts(searchInput ? searchInput.value.toLowerCase() : '', currentCategory);
      
      // Update active state
      categoryFilters.forEach(f => f.classList.remove('is-active'));
      this.classList.add('is-active');
    });
  });
  
  function filterPosts(searchTerm, category) {
    allPosts.forEach(post => {
      const title = post.querySelector('.title a').textContent.toLowerCase();
      const content = post.querySelector('.content p').textContent.toLowerCase();
      const categories = post.dataset.categories.toLowerCase();
      
      const matchesSearch = searchTerm === '' || title.includes(searchTerm) || content.includes(searchTerm);
      const matchesCategory = category === 'all' || categories.includes(category);
      
      if (matchesSearch && matchesCategory) {
        post.style.display = 'block';
      } else {
        post.style.display = 'none';
      }
    });
  }
  
  // Dropdown functionality
  const dropdown = document.querySelector('.dropdown');
  if (dropdown) {
    const trigger = dropdown.querySelector('.dropdown-trigger button');
    trigger.addEventListener('click', function() {
      dropdown.classList.toggle('is-active');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('is-active');
      }
    });
  }
});
</script>

