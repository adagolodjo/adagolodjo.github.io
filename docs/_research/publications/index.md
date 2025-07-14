---
layout: page
title: Publications
subtitle: Academic Publications and Research Output
permalink: /research/publications/
---

<div class="container">
  <div class="section">
    <h1 class="title">Publications</h1>
    <p class="subtitle">Publications automatically fetched from HAL (Hyper Articles en Ligne)</p>
    
    <!-- Loading indicator -->
    <div id="publications-loading" class="has-text-centered" style="display: none;">
      <div class="loader"></div>
      <p>Loading publications from HAL...</p>
    </div>
    
    <!-- Publications container -->
    <div id="hal-publications">
      <!-- Publications will be loaded here by JavaScript -->
    </div>
    
    <!-- Fallback: Manual publications if HAL fails -->
    <div id="manual-publications" style="display: none;">
      <h2>Selected Publications</h2>
      
      <h3>Journal Articles</h3>
      {% assign journal_papers = site.data.publications | where: "type", "journal" | sort: "year" | reverse %}
      {% for paper in journal_papers %}
      <div class="publication-item">
        <h4 class="publication-title">{{ paper.title }}</h4>
        <p class="publication-authors">{{ paper.authors }}</p>
        <p class="publication-venue">
          <em>{{ paper.journal }}</em> ({{ paper.year }})
          {% if paper.volume %}, Vol. {{ paper.volume }}{% endif %}
          {% if paper.issue %}, Issue {{ paper.issue }}{% endif %}
          {% if paper.pages %}, pp. {{ paper.pages }}{% endif %}
        </p>
        {% if paper.doi %}
        <div class="publication-links">
          <a href="https://doi.org/{{ paper.doi }}" class="button is-small is-primary" target="_blank">
            <span class="icon"><i class="fas fa-external-link-alt"></i></span>
            <span>DOI</span>
          </a>
        </div>
        {% endif %}
      </div>
      {% endfor %}
      
      <h3>Conference Papers</h3>
      {% assign conference_papers = site.data.publications | where: "type", "conference" | sort: "year" | reverse %}
      {% for paper in conference_papers %}
      <div class="publication-item">
        <h4 class="publication-title">{{ paper.title }}</h4>
        <p class="publication-authors">{{ paper.authors }}</p>
        <p class="publication-venue">
          <em>{{ paper.conference }}</em> ({{ paper.year }})
          {% if paper.location %}, {{ paper.location }}{% endif %}
        </p>
        {% if paper.doi %}
        <div class="publication-links">
          <a href="https://doi.org/{{ paper.doi }}" class="button is-small is-primary" target="_blank">
            <span class="icon"><i class="fas fa-external-link-alt"></i></span>
            <span>DOI</span>
          </a>
        </div>
        {% endif %}
      </div>
      {% endfor %}
    </div>
    
    <!-- Links to external profiles -->
    <div class="section">
      <h2>External Profiles</h2>
      <div class="buttons">
        <a href="https://hal.science/search/index?q=adagolodjo" class="button is-info" target="_blank">
          <span class="icon"><i class="fas fa-archive"></i></span>
          <span>HAL Profile</span>
        </a>
        <a href="https://scholar.google.com/citations?user=YOUR_ID" class="button is-primary" target="_blank">
          <span class="icon"><i class="fas fa-graduation-cap"></i></span>
          <span>Google Scholar</span>
        </a>
        <a href="https://www.researchgate.net/profile/YOUR_PROFILE" class="button is-success" target="_blank">
          <span class="icon"><i class="fas fa-flask"></i></span>
          <span>ResearchGate</span>
        </a>
        <a href="https://orcid.org/YOUR_ORCID" class="button is-warning" target="_blank">
          <span class="icon"><i class="fab fa-orcid"></i></span>
          <span>ORCID</span>
        </a>
      </div>
    </div>
  </div>
</div>

<!-- Load HAL publications script -->
<script src="{{ '/assets/js/hal-publications.js' | relative_url }}"></script>

<style>
.publication-item {
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: var(--shadow);
  margin-bottom: 1.5rem;
  border-left: 4px solid var(--primary-color);
}

.publication-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--primary-color);
}

.publication-authors {
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

.publication-venue {
  font-size: 0.9rem;
  color: var(--text-color);
  margin-bottom: 1rem;
}

.publication-links {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid var(--primary-color);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>

