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
<script src="{{ '/assets/js/hal-publications.js' | relative_url }}"></script>

<style>
/* Variables CSS pour la cohérence */
:root {
  --primary-color:rgb(15, 129, 139);
  --success-color: #48c774;
  --info-color:rgb(33, 250, 243);
  --warning-color: #ffdd57;
  --card-bg: #ffffff;
  --text-color:rgb(33, 236, 236);
  --shadow: 0 2px 3px rgba(11, 131, 150, 0.1), 0 0 0 1px rgba(8, 137, 154, 0.1);
  --border-radius: 8px;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  :root {
    --card-bg:rgb(236, 241, 241);
    --text-color:rgb(21, 188, 210);
    --shadow: 0 2px 3px rgba(5, 152, 123, 0.1), 0 0 0 1px rgba(12, 168, 200, 0.1);
  }
}

/* Publications grid - 2 colonnes sur desktop, 1 sur mobile */
.publications-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 1.5rem;
}

@media (max-width: 1024px) {
  .publications-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

/* Styles des publications */
.publication-item {
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  border-left: 4px solid var(--primary-color);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  height: fit-content;
}

.publication-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(10,10,10,.15), 0 0 0 1px rgba(10,10,10,.1);
}

.publication-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--primary-color);
  line-height: 1.4;
}

.publication-authors {
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  color: var(--text-color);
  font-weight: 500;
}

.publication-venue {
  font-size: 0.9rem;
  color: var(--text-color);
  margin-bottom: 1rem;
  opacity: 0.8;
}

.publication-links {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: auto;
}

.publication-links .button {
  font-size: 0.8rem;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.publication-links .button:hover {
  transform: translateY(-1px);
}

/* Profile links styling */
.profile-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
}

.profile-links .button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: var(--border-radius);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
}

.profile-links .button:hover {
  transform: translateY(-2px);
}

/* Loader styles */
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

/* Responsive adjustments */
@media (max-width: 768px) {
  .publication-item {
    padding: 1rem;
  }
  
  .publication-title {
    font-size: 1.1rem;
  }
  
  .profile-links {
    flex-direction: column;
  }
  
  .profile-links .button {
    width: 100%;
    justify-content: center;
  }
}

/* Bulma button overrides pour une meilleure apparence */
.button.is-small {
  font-size: 0.8rem;
  padding: 0.4rem 0.6rem;
}

.button.is-primary {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  color: white;
}

.button.is-success {
  background-color: var(--success-color);
  border-color: var(--success-color);
  color: white;
}

.button.is-info {
  background-color: var(--info-color);
  border-color: var(--info-color);
  color: white;
}

.button.is-warning {
  background-color: var(--warning-color);
  border-color: var(--warning-color);
  color: rgba(0, 0, 0, 0.7);
}

/* Section spacing */
.section {
  padding: 2rem 0;
}

.section h2 {
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--primary-color);
}

#hal-publications {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 1.5rem;
}
@media (max-width: 1024px) {
  #hal-publications {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>