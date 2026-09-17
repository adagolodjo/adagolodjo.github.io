---
layout: page
title: Courses
permalink: /teaching/courses/
subtitle: Current and Past Courses
page_kind: courses-index
---


<!-- Breadcrumb Navigation -->
<nav class="breadcrumb-nav" style="margin-bottom: 2rem; padding: 1rem; background: var(--cidx-bg-soft); border-radius: 8px;">
  <ol style="list-style: none; padding: 0; margin: 0; display: flex; align-items: center; gap: 0.5rem;">
    <li><a href="/" style="color: var(--cidx-primary); text-decoration: none;">{% include ph.html name="house" %} Accueil</a></li>
    <li style="color: #999;">›</li>
    <li><a href="/teaching/" style="color: var(--cidx-primary); text-decoration: none;">{% include ph.html name="books" %} Enseignement</a></li>
    <li style="color: #999;">›</li>
    <li style="color: var(--cidx-ink); font-weight: 600;">Cours</li>
  </ol>
</nav>

<div class="page-header">
  <h1>{% include ph.html name="books" %} Enseignement & Cours</h1>
  <p class="subtitle">Formation académique et développement des compétences</p>
</div>

<div class="stats-bar">
  <div class="stat-item">
    <h3>15+</h3>
    <p>Cours enseignés</p>
  </div>
  <div class="stat-item">
    <h3>500+</h3>
    <p>Étudiants formés</p>
  </div>
  <div class="stat-item">
    <h3>5</h3>
    <p>Années d'expérience</p>
  </div>
  <div class="stat-item">
    <h3>3</h3>
    <p>Niveaux d'enseignement</p>
  </div>
</div>

<div class="section-header">
  <span class="icon">{% include ph.html name="target" %}</span>
  <h2>Cours Actuels</h2>
</div>

<!-- Bénéfices de recherche -->
<div class="search-section" style="margin-bottom: 2rem; padding: 1.5rem; background: white; border-radius: var(--cidx-radius); box-shadow: var(--cidx-shadow);">
  <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
    <div style="flex: 1; min-width: 250px;">
      <input type="text" id="courseSearch" placeholder="{% include ph.html name="magnifying-glass" %} Rechercher un cours..." 
             style="width: 100%; padding: 0.75rem 1rem; border: 2px solid var(--cidx-border); border-radius: 25px; font-size: 0.95rem; background: var(--cidx-bg-soft);" 
             onkeyup="searchCourses()">
    </div>
    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
      <select id="semesterFilter" onchange="applyCombinedFilters()" 
              style="padding: 0.5rem 1rem; border: 2px solid var(--cidx-border); border-radius: 8px; background: white;">
        <option value="all">{% include ph.html name="calendar-blank" %} Tous les semestres</option>
        <option value="S1">S1</option>
        <option value="S2">S2</option>
        <option value="S3">S3</option>
        <option value="Fall 2024">Fall 2024</option>
      </select>
      <select id="typeFilter" onchange="applyCombinedFilters()" 
              style="padding: 0.5rem 1rem; border: 2px solid var(--cidx-border); border-radius: 8px; background: white;">
        <option value="all">{% include ph.html name="target" %} Tous les types</option>
        <option value="CM">Cours Magistraux</option>
        <option value="TP">Travaux Pratiques</option>
        <option value="TD">Travaux Dirigés</option>
      </select>
    </div>
  </div>
</div>

<div class="filter-tabs">
  <button class="filter-tab active" onclick="filterCourses('all')">Tous</button>
  <button class="filter-tab" onclick="filterCourses('undergraduate')">Licence</button>
  <button class="filter-tab" onclick="filterCourses('graduate')">Master</button>
  <button class="filter-tab" onclick="filterCourses('formation continue')">Formation Continue</button>
  <button class="filter-tab" onclick="filterCourses('doctoral')">Doctorat</button>
</div>

<div class="courses-grid" id="current-courses">
{% for course in site.data.courses %}
{% if course.semester contains "2024" %}
  <div class="course-card" data-level="{{ course.level | downcase }}">
    <div>
      <div class="course-code">{{ course.code }}</div>
      <div class="course-title">{{ course.title }}</div>
      <div class="course-meta">
        <div class="meta-item">
          <span class="label">{% include ph.html name="calendar-blank" %} Semestre:</span>
          {{ course.semester }}
        </div>
        <div class="meta-item">
          <span class="level-badge level-{{ course.level | downcase }}">{{ course.level }}</span>
        </div>
      </div>
      <div class="course-desc">{{ course.description }}</div>
    </div>
    <div class="course-links">
      {% if course.syllabus %}
        <a href="{{ course.syllabus }}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
          {% include ph.html name="file-text" %} Syllabus
        </a>
      {% endif %}
      <a href="/teaching/courses/{{ course.code | downcase }}/" class="btn btn-primary">
        {% include ph.html name="link" %} Page du cours
      </a>
      {% if course.materials %}
        <a href="{{ course.materials }}" class="btn btn-outline" target="_blank" rel="noopener noreferrer">
          {% include ph.html name="books" %} Ressources
        </a>
      {% endif %}
    </div>
  </div>
{% endif %}
{% endfor %}
</div>

<div class="section-header">
  <span class="icon">{% include ph.html name="books" %}</span>
  <h2>Cours Précédents</h2>
</div>

<div class="courses-grid">
{% for course in site.data.courses %}
{% if course.semester contains "2023" %}
  <div class="course-card" data-level="{{ course.level | downcase }}">
    <div>
      <div class="course-code">{{ course.code }}</div>
      <div class="course-title">{{ course.title }}</div>
      <div class="course-meta">
        <div class="meta-item">
          <span class="label">{% include ph.html name="calendar-blank" %} Semestre:</span>
          {{ course.semester }}
        </div>
        <div class="meta-item">
          <span class="level-badge level-{{ course.level | downcase }}">{{ course.level }}</span>
        </div>
      </div>
      <div class="course-desc">{{ course.description }}</div>
    </div>
    <div class="course-links">
      {% if course.syllabus %}
        <a href="{{ course.syllabus }}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
          {% include ph.html name="file-text" %} Syllabus
        </a>
      {% endif %}
      <a href="/teaching/courses/{{ course.code | downcase }}/" class="btn btn-primary">
        {% include ph.html name="link" %} Page du cours
      </a>
    </div>
  </div>
{% endif %}
{% endfor %}
</div>

<div class="teaching-philosophy">
  <div class="section-header">
    <span class="icon">{% include ph.html name="lightbulb" %}</span>
    <h2>Philosophie Pédagogique</h2>
  </div>

  <p>Mon approche pédagogique privilégie l'apprentissage par la pratique, les applications concrètes et le développement de l'esprit critique. Je m'efforce de créer un environnement d'apprentissage inclusif où les étudiants de tous horizons peuvent s'épanouir et apporter leurs perspectives uniques.</p>

  <p>Dans les cours techniques, je m'attache à équilibrer les fondements théoriques avec la mise en pratique, donnant aux étudiants les outils nécessaires pour appliquer les concepts à des problèmes du monde réel. J'intègre l'apprentissage par projets et encourage la collaboration, car ces méthodes reflètent la pratique professionnelle de l'informatique.</p>

  <p>Je m'engage à améliorer continuellement mes méthodes d'enseignement en me basant sur les retours des étudiants et la recherche pédagogique. Je m'efforce de rester à jour avec les développements tant en informatique qu'en matière de meilleures pratiques pédagogiques.</p>

  <p><strong>Mes principes clés :</strong></p>
  <ul style="list-style: none; padding: 0;">
    <li>{% include ph.html name="target" %} <strong>Apprentissage centré sur l'étudiant</strong> - Adaptation aux différents styles d'apprentissage</li>
    <li>{% include ph.html name="flask" %} <strong>Approche expérimentale</strong> - Learning by doing et projets concrets</li>
    <li>{% include ph.html name="globe" %} <strong>Ouverture internationale</strong> - Perspectives globales et multiculturelles</li>
    <li>{% include ph.html name="arrows-clockwise" %} <strong>Amélioration continue</strong> - Évolution constante des méthodes pédagogiques</li>
  </ul>
</div>

<div class="section-header">
  <span class="icon">{% include ph.html name="toolbox" %}</span>
  <h2>Ressources Étudiants</h2>
</div>

<div class="resources-grid">
  <div class="resource-card">
    <div class="icon">{% include ph.html name="users" %}</div>
    <h3>Université de Lille</h3>
    <p>Portail étudiant et services pédagogiques</p>
    <a href="https://www.univ-lille.fr/etudes/" target="_blank" rel="noopener noreferrer">Accéder au portail →</a>
  </div>

  <div class="resource-card">
    <div class="icon">{% include ph.html name="desktop" %}</div>
    <h3>Polytech Lille</h3>
    <p>Ressources techniques et laboratoires</p>
    <a href="https://www.polytech-lille.fr/" target="_blank" rel="noopener noreferrer">Voir les ressources →</a>
  </div>

  <div class="resource-card">
    <div class="icon">{% include ph.html name="clipboard-text" %}</div>
    <h3>Moodle Lille</h3>
    <p>Plateforme de cours en ligne</p>
    <a href="https://moodle.univ-lille.fr/" target="_blank" rel="noopener noreferrer">Se connecter →</a>
  </div>

  <div class="resource-card">
    <div class="icon">{% include ph.html name="book-open" %}</div>
    <h3>Bibliothèque Universitaire</h3>
    <p>Ressources académiques et documentation</p>
    <a href="https://www.univ-lille.fr/bibliotheques/" target="_blank" rel="noopener noreferrer">Explorer →</a>
  </div>
</div>

<div class="french-courses">
  <div class="section-header">
    <span class="icon">🇫🇷</span>
    <h2>Catalogue Complet des Cours</h2>
  </div>

  <div class="french-courses-grid">
    <a href="/teaching/courses/initiation-recherche/" class="french-course-link">
      {% include ph.html name="magnifying-glass" %} Initiation à la recherche
    </a>
    <a href="/teaching/courses/logique-industrielle/" class="french-course-link">
      {% include ph.html name="gear-six" %} Logique Séquentielle – SAP et Grafcet
    </a>
    <a href="/teaching/courses/modelisation-production/" class="french-course-link">
      {% include ph.html name="factory" %} Modélisation des systèmes de production
    </a>
    <a href="/teaching/courses/gr-711302/" class="french-course-link">
      {% include ph.html name="robot" %} GR-711302 Automatique : Robotique
    </a>
    <a href="/teaching/courses/gba3-robotique-abb/" class="french-course-link">
      {% include ph.html name="robot" %} TP Robotique ABB IRB140 – GBA3
    </a>
    <a href="/teaching/courses/gr-712302/" class="french-course-link">
      {% include ph.html name="desktop" %} GR-712302 Programmation
    </a>
    <a href="/teaching/courses/gr-713301/" class="french-course-link">
      {% include ph.html name="sliders" %} GR-713301 Automatique : Régulation
    </a>
    <a href="/teaching/courses/analyse-numerique/" class="french-course-link">
      {% include ph.html name="chart-bar" %} Analyse numérique : Optimisation
    </a>
    <a href="/teaching/courses/industrie-40/" class="french-course-link">
      {% include ph.html name="factory" %} Usine Connectée &amp; Industrie 4.0
    </a>
    <a href="/teaching/courses/tests-maintenance/" class="french-course-link">
      {% include ph.html name="wrench" %} Tests et Maintenance
    </a>
    <a href="/teaching/courses/simulation-medicale/" class="french-course-link">
      {% include ph.html name="hospital" %} Simulation Médicale
    </a>
    <a href="/teaching/courses/robotique-medicale/" class="french-course-link">
      {% include ph.html name="robot" %} Module IA Robotique &amp; Santé
    </a>
    <a href="/teaching/courses/mathematiques-ingenieur/" class="french-course-link">
      {% include ph.html name="ruler" %} Mathématiques pour l'ingénieur
    </a>
    <a href="/teaching/courses/du-822160/" class="french-course-link">
      {% include ph.html name="lock-key" %} Sécurité Informatique
    </a>
    <a href="/teaching/courses/du-812170/" class="french-course-link">
      {% include ph.html name="floppy-disk" %} Culture Numérique &amp; Sécurité des Données
    </a>
    <a href="/teaching/courses/du-816260/" class="french-course-link">
      {% include ph.html name="factory" %} Usine Connectée (Formation Continue)
    </a>
  </div>
</div>

<script>
// Variables globales pour les filtres
let currentLevelFilter = 'all';
let currentSearchTerm = '';
let currentSemesterFilter = 'all';
let currentTypeFilter = 'all';

function filterCourses(level) {
  currentLevelFilter = level;
  const tabs = document.querySelectorAll('.filter-tab');

  // Update active tab
  tabs.forEach(tab => tab.classList.remove('active'));
  event.target.classList.add('active');

  applyCombinedFilters();
}

function searchCourses() {
  currentSearchTerm = document.getElementById('courseSearch').value.toLowerCase();
  applyCombinedFilters();
}

function applyCombinedFilters() {
  const cards = document.querySelectorAll('#current-courses .course-card');
  const allCards = document.querySelectorAll('.course-card'); // Inclut aussi les cours précédents
  
  currentSemesterFilter = document.getElementById('semesterFilter')?.value || 'all';
  currentTypeFilter = document.getElementById('typeFilter')?.value || 'all';
  
  let visibleCount = 0;
  
  allCards.forEach(card => {
    const cardLevel = card.getAttribute('data-level') || '';
    const cardTitle = card.querySelector('.course-title')?.textContent.toLowerCase() || '';
    const cardCode = card.querySelector('.course-code')?.textContent.toLowerCase() || '';
    const cardDesc = card.querySelector('.course-desc')?.textContent.toLowerCase() || '';
    const cardSemester = card.querySelector('[data-semester]')?.getAttribute('data-semester') || '';
    
    // Filtres de niveau
    const levelMatch = currentLevelFilter === 'all' || cardLevel === currentLevelFilter;
    
    // Filtre de recherche textuelle
    const searchMatch = currentSearchTerm === '' || 
                       cardTitle.includes(currentSearchTerm) || 
                       cardCode.includes(currentSearchTerm) ||
                       cardDesc.includes(currentSearchTerm);
    
    // Filtre de semestre
    const semesterMatch = currentSemesterFilter === 'all' || cardSemester.includes(currentSemesterFilter);
    
    if (levelMatch && searchMatch && semesterMatch) {
      card.style.display = 'flex';
      card.style.animation = 'fadeIn 0.3s ease-in';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });
  
  // Afficher un message si aucun résultat
  updateNoResultsMessage(visibleCount);
}

function updateNoResultsMessage(count) {
  let messageDiv = document.getElementById('no-results-message');
  
  if (count === 0) {
    if (!messageDiv) {
      messageDiv = document.createElement('div');
      messageDiv.id = 'no-results-message';
      messageDiv.style.cssText = `
        text-align: center;
        padding: 3rem;
        background: var(--cidx-bg-soft);
        border-radius: var(--cidx-radius);
        margin: 2rem 0;
        color: #666;
      `;
      messageDiv.innerHTML = `
        <div style="font-size: 3rem; margin-bottom: 1rem;">{% include ph.html name="magnifying-glass" %}</div>
        <h3 style="margin-bottom: 0.5rem;">Aucun cours trouvé</h3>
        <p>Essayez de modifier vos critères de recherche ou de filtrage.</p>
        <button onclick="clearAllFilters()" style="margin-top: 1rem; padding: 0.5rem 1rem; background: var(--cidx-primary); color: white; border: none; border-radius: 8px; cursor: pointer;">Réinitialiser les filtres</button>
      `;
      document.getElementById('current-courses').parentNode.appendChild(messageDiv);
    }
    messageDiv.style.display = 'block';
  } else {
    if (messageDiv) {
      messageDiv.style.display = 'none';
    }
  }
}

function clearAllFilters() {
  // Réinitialiser tous les filtres
  currentLevelFilter = 'all';
  currentSearchTerm = '';
  currentSemesterFilter = 'all';
  currentTypeFilter = 'all';
  
  // Réinitialiser les contrôles UI
  document.getElementById('courseSearch').value = '';
  if (document.getElementById('semesterFilter')) {
    document.getElementById('semesterFilter').value = 'all';
  }
  if (document.getElementById('typeFilter')) {
    document.getElementById('typeFilter').value = 'all';
  }
  
  // Réinitialiser les onglets
  const tabs = document.querySelectorAll('.filter-tab');
  tabs.forEach(tab => tab.classList.remove('active'));
  tabs[0].classList.add('active'); // Premier onglet "Tous"
  
  // Appliquer les filtres
  applyCombinedFilters();
}

// Fonction pour compter et afficher les statistiques
function updateCourseStats() {
  const allCourses = document.querySelectorAll('.course-card').length;
  const currentCourses = document.querySelectorAll('#current-courses .course-card').length;
  
  // Mettre à jour les statistiques si l'élément existe
  const statsElement = document.querySelector('.stat-item h3');
  if (statsElement && allCourses > 0) {
    statsElement.textContent = `${allCourses}+`;
  }
}

// Fonction pour ajouter des raccourcis clavier
function setupKeyboardShortcuts() {
  document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K pour focus sur la recherche
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      document.getElementById('courseSearch')?.focus();
    }
    
    // Echap pour clear la recherche
    if (e.key === 'Escape') {
      const searchInput = document.getElementById('courseSearch');
      if (searchInput && searchInput === document.activeElement) {
        clearAllFilters();
      }
    }
  });
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
  updateCourseStats();
  setupKeyboardShortcuts();
  
  // Ajouter des attributs de données pour faciliter le filtrage
  const courseCards = document.querySelectorAll('.course-card');
  courseCards.forEach(card => {
    const semesterText = card.querySelector('.meta-item')?.textContent || '';
    card.setAttribute('data-semester', semesterText);
  });
});

</script>

## Teaching Philosophy

My teaching approach emphasizes hands-on learning, practical applications, and the development of critical thinking skills. I believe in creating an inclusive classroom environment where students from diverse backgrounds can thrive and contribute their unique perspectives.

In technical courses, I focus on balancing theoretical foundations with practical implementation, giving students the tools they need to apply concepts to real-world problems. I incorporate project-based learning and encourage collaboration, as these reflect the way computer science is practiced professionally.

I am committed to continually improving my teaching methods based on student feedback and educational research. I strive to stay current with developments in both computer science and pedagogical best practices.

## Student Resources

- [Université de Lille - Études](https://www.univ-lille.fr/etudes/)
- [Polytech Lille - Ressources](https://www.polytech-lille.fr/)
- [Moodle Lille - Plateforme pédagogique](https://moodle.univ-lille.fr/)

## Cours disponibles

- [Initiation à la recherche](/teaching/courses/initiation-recherche/)
- [Logique Séquentielle – SAP et Grafcet](/teaching/courses/logique-industrielle/)
- [Modélisation des systèmes de production](/teaching/courses/modelisation-production/)
- [GR-711302 Automatique : Robotique](/teaching/courses/gr-711302/)
- [TP Robotique ABB IRB140 – GBA3](/teaching/courses/gba3-robotique-abb/)
- [GR-712302 Programmation](/teaching/courses/gr-712302/)
- [GR-713301 Automatique : Régulation de Système](/teaching/courses/gr-713301/)
- [GR-713302 Analyse numérique : Optimisation](/teaching/courses/analyse-numerique/)
- [Usine Connectée & Industrie 4.0](/teaching/courses/industrie-40/)
- [Tests et Maintenance](/teaching/courses/tests-maintenance/)
- [Simulation Médicale](/teaching/courses/simulation-medicale/)
- [Module IA Robotique & Santé](/teaching/courses/robotique-medicale/)
- [Mathématiques pour l'ingénieur](/teaching/courses/mathematiques-ingenieur/)
- [Introduction à la Sécurité Informatique](/teaching/courses/du-822160/)
- [Culture Numérique & Sécurité des Données](/teaching/courses/du-812170/)
- [Usine Connectée – Formation Continue](/teaching/courses/du-816260/)
