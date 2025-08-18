---
layout: page
title: Publications
subtitle: Academic Publications and Research Output
permalink: /research/publications/
---

<div class="container">
  <div class="section">
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
      <div class="publications-grid">
        {% assign all_papers = site.data.publications | sort: "year" | reverse %}
        {% for paper in all_papers %}
          <div class="publication-item">
            <h4 class="publication-title">{{ paper.title }}</h4>
            <p class="publication-authors">{{ paper.authors }}</p>
            <p class="publication-venue">
              {% if paper.journal %}
                <em>{{ paper.journal }}</em>
              {% elsif paper.conference %}
                <em>{{ paper.conference }}</em>
              {% endif %}
              ({{ paper.year }})
              {% if paper.volume %}, Vol. {{ paper.volume }}{% endif %}
              {% if paper.issue %}, Issue {{ paper.issue }}{% endif %}
              {% if paper.pages %}, pp. {{ paper.pages }}{% endif %}
              {% if paper.location %}, {{ paper.location }}{% endif %}
            </p>
            
            <!-- Publication links with improved structure -->
            {% if paper.doi or paper.pdf_url or paper.hal_url or paper.arxiv_url %}
            <div class="publication-links">
              {% if paper.doi %}
                <a href="https://doi.org/{{ paper.doi }}" class="button is-small is-primary" target="_blank" rel="noopener noreferrer">
                  <span class="icon"><i class="fas fa-external-link-alt"></i></span>
                  <span>DOI</span>
                </a>
              {% endif %}
              {% if paper.pdf_url %}
                <a href="{{ paper.pdf_url }}" class="button is-small is-success" target="_blank" rel="noopener noreferrer">
                  <span class="icon"><i class="fas fa-file-pdf"></i></span>
                  <span>PDF</span>
                </a>
              {% endif %}
              {% if paper.hal_url %}
                <a href="{{ paper.hal_url }}" class="button is-small is-info" target="_blank" rel="noopener noreferrer">
                  <span class="icon"><i class="fas fa-archive"></i></span>
                  <span>HAL</span>
                </a>
              {% endif %}
              {% if paper.arxiv_url %}
                <a href="{{ paper.arxiv_url }}" class="button is-small is-warning" target="_blank" rel="noopener noreferrer">
                  <span class="icon"><i class="fas fa-file-alt"></i></span>
                  <span>arXiv</span>
                </a>
              {% endif %}
            </div>
            {% endif %}
          </div>
        {% endfor %}
      </div>
    </div>
    
    <!-- Links to external profiles -->
    <div class="section">
      <h2>External Profiles</h2>
      <div class="profile-links">
        <a href="https://hal.science/search/index?q=adagolodjo" class="button is-info" target="_blank" rel="noopener noreferrer">
          <span class="icon"><i class="fas fa-archive"></i></span>
          <span>HAL Profile</span>
        </a>
        <a href="https://scholar.google.com/citations?user=YOUR_ID" class="button is-primary" target="_blank" rel="noopener noreferrer">
          <span class="icon"><i class="fas fa-graduation-cap"></i></span>
          <span>Google Scholar</span>
        </a>
        <a href="https://www.researchgate.net/profile/YOUR_PROFILE" class="button is-success" target="_blank" rel="noopener noreferrer">
          <span class="icon"><i class="fas fa-flask"></i></span>
          <span>ResearchGate</span>
        </a>
        <a href="https://orcid.org/YOUR_ORCID" class="button is-warning" target="_blank" rel="noopener noreferrer">
          <span class="icon"><i class="fab fa-orcid"></i></span>
          <span>ORCID</span>
        </a>
      </div>
    </div>
  </div>
</div>

<!-- Load HAL publications script -->
<script src="{{ '/assets/js/hal-publications.js' | relative_url }}" defer></script>