---
layout: page
title: Courses
permalink: /teaching/courses/
subtitle: Current and Past Courses
---

<style>
:root {
  --primary-color: #2c3e50;
  --secondary-color: #3498db;
  --accent-color: #e74c3c;
  --success-color: #27ae60;
  --warning-color: #f39c12;
  --light-bg: #f8f9fa;
  --card-shadow: 0 4px 20px rgba(0,0,0,0.08);
  --card-shadow-hover: 0 12px 40px rgba(0,0,0,0.15);
  --border-radius: 16px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem 0;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  border-radius: var(--border-radius);
  margin: -1rem -1rem 3rem -1rem;
}

.page-header h1 {
  color: white;
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
  font-weight: 300;
}

.page-header .subtitle {
  opacity: 0.9;
  font-size: 1.2rem;
}

.section-header {
  display: flex;
  align-items: center;
  margin: 3rem 0 2rem 0;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--secondary-color);
}

.section-header h2 {
  margin: 0;
  color: var(--primary-color);
  font-weight: 600;
}

.section-header .icon {
  margin-right: 0.75rem;
  font-size: 1.5rem;
  color: var(--secondary-color);
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.course-card {
  background: #fff;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  padding: 2rem;
  border: 1px solid #e9ecef;
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
}

.course-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--secondary-color), var(--success-color));
  transform: scaleX(0);
  transition: var(--transition);
  transform-origin: left;
}

.course-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--card-shadow-hover);
}

.course-card:hover::before {
  transform: scaleX(1);
}

.course-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--primary-color);
  line-height: 1.3;
}

.course-code {
  background: var(--secondary-color);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 0.5rem;
}

.course-meta {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.meta-item {
  display: flex;
  align-items: center;
  color: #666;
}

.meta-item .label {
  font-weight: 600;
  color: var(--primary-color);
  margin-right: 0.5rem;
}

.level-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
}

.level-undergraduate { background: #e3f2fd; color: #1976d2; }
.level-graduate { background: #f3e5f5; color: #7b1fa2; }
.level-doctoral { background: #fff3e0; color: #f57c00; }

.course-desc {
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  flex-grow: 1;
}

.course-links {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: var(--transition);
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary {
  background: var(--secondary-color);
  color: white;
}

.btn-secondary {
  background: #6c757d;
  color: white;
}

.btn-outline {
  background: transparent;
  border: 2px solid var(--secondary-color);
  color: var(--secondary-color);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.btn-primary:hover { background: #2980b9; }
.btn-secondary:hover { background: #5a6268; }
.btn-outline:hover {
  background: var(--secondary-color);
  color: white;
}

.teaching-philosophy {
  background: var(--light-bg);
  padding: 2.5rem;
  border-radius: var(--border-radius);
  margin: 3rem 0;
  border-left: 5px solid var(--secondary-color);
}

.teaching-philosophy h2 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
}

.teaching-philosophy p {
  line-height: 1.7;
  margin-bottom: 1.2rem;
  color: #555;
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.resource-card {
  background: white;
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  transition: var(--transition);
  text-align: center;
}

.resource-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--card-shadow-hover);
}

.resource-card .icon {
  font-size: 2.5rem;
  color: var(--secondary-color);
  margin-bottom: 1rem;
}

.resource-card h3 {
  margin-bottom: 0.5rem;
  color: var(--primary-color);
}

.resource-card a {
  color: var(--secondary-color);
  text-decoration: none;
  font-weight: 500;
}

.french-courses {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2.5rem;
  border-radius: var(--border-radius);
  margin-top: 3rem;
}

.french-courses h2 {
  color: white;
  margin-bottom: 2rem;
  text-align: center;
}

.french-courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}

.french-course-link {
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
  padding: 1rem 1.5rem;
  border-radius: 12px;
  color: white;
  text-decoration: none;
  transition: var(--transition);
  border: 1px solid rgba(255,255,255,0.2);
}

.french-course-link:hover {
  background: rgba(255,255,255,0.2);
  transform: translateY(-2px);
  color: white;
}

.stats-bar {
  display: flex;
  justify-content: space-around;
  background: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  margin: 2rem 0;
  text-align: center;
}

.stat-item h3 {
  color: var(--secondary-color);
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.stat-item p {
  color: #666;
  font-weight: 500;
}

@media (max-width: 768px) {
  .courses-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .course-meta {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  .page-header {
    margin: -1rem -0.5rem 2rem -0.5rem;
    padding: 1.5rem 1rem;
  }

  .page-header h1 {
    font-size: 2rem;
  }

  .stats-bar {
    flex-direction: column;
    gap: 1rem;
  }
}

.filter-tabs {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.filter-tab {
  padding: 0.75rem 1.5rem;
  border: 2px solid var(--secondary-color);
  border-radius: 25px;
  background: transparent;
  color: var(--secondary-color);
  cursor: pointer;
  transition: var(--transition);
  font-weight: 500;
}

.filter-tab.active,
.filter-tab:hover {
  background: var(--secondary-color);
  color: white;
}
</style>

<div class="page-header">
  <h1>📚 Enseignement & Cours</h1>
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
  <span class="icon">🎯</span>
  <h2>Cours Actuels</h2>
</div>

<div class="filter-tabs">
  <button class="filter-tab active" onclick="filterCourses('all')">Tous</button>
  <button class="filter-tab" onclick="filterCourses('undergraduate')">Licence</button>
  <button class="filter-tab" onclick="filterCourses('graduate')">Master</button>
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
          <span class="label">📅 Semestre:</span>
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
        <a href="{{ course.syllabus }}" class="btn btn-secondary" target="_blank">
          📄 Syllabus
        </a>
      {% endif %}
      <a href="/teaching/courses/{{ course.code | downcase }}/" class="btn btn-primary">
        🔗 Page du cours
      </a>
      {% if course.materials %}
        <a href="{{ course.materials }}" class="btn btn-outline" target="_blank">
          📚 Ressources
        </a>
      {% endif %}
    </div>
  </div>
{% endif %}
{% endfor %}
</div>

<div class="section-header">
  <span class="icon">📚</span>
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
          <span class="label">📅 Semestre:</span>
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
        <a href="{{ course.syllabus }}" class="btn btn-secondary" target="_blank">
          📄 Syllabus
        </a>
      {% endif %}
      <a href="/teaching/courses/{{ course.code | downcase }}/" class="btn btn-primary">
        🔗 Page du cours
      </a>
    </div>
  </div>
{% endif %}
{% endfor %}
</div>

<div class="teaching-philosophy">
  <div class="section-header">
    <span class="icon">💡</span>
    <h2>Philosophie Pédagogique</h2>
  </div>

  <p>Mon approche pédagogique privilégie l'apprentissage par la pratique, les applications concrètes et le développement de l'esprit critique. Je m'efforce de créer un environnement d'apprentissage inclusif où les étudiants de tous horizons peuvent s'épanouir et apporter leurs perspectives uniques.</p>

  <p>Dans les cours techniques, je m'attache à équilibrer les fondements théoriques avec la mise en pratique, donnant aux étudiants les outils nécessaires pour appliquer les concepts à des problèmes du monde réel. J'intègre l'apprentissage par projets et encourage la collaboration, car ces méthodes reflètent la pratique professionnelle de l'informatique.</p>

  <p>Je m'engage à améliorer continuellement mes méthodes d'enseignement en me basant sur les retours des étudiants et la recherche pédagogique. Je m'efforce de rester à jour avec les développements tant en informatique qu'en matière de meilleures pratiques pédagogiques.</p>

  <p><strong>Mes principes clés :</strong></p>
  <ul style="list-style: none; padding: 0;">
    <li>🎯 <strong>Apprentissage centré sur l'étudiant</strong> - Adaptation aux différents styles d'apprentissage</li>
    <li>🔬 <strong>Approche expérimentale</strong> - Learning by doing et projets concrets</li>
    <li>🌐 <strong>Ouverture internationale</strong> - Perspectives globales et multiculturelles</li>
    <li>🔄 <strong>Amélioration continue</strong> - Évolution constante des méthodes pédagogiques</li>
  </ul>
</div>

<div class="section-header">
  <span class="icon">🛠️</span>
  <h2>Ressources Étudiants</h2>
</div>

<div class="resources-grid">
  <div class="resource-card">
    <div class="icon">👥</div>
    <h3>Centre de Tutorat</h3>
    <p>Aide personnalisée et sessions de groupe</p>
    <a href="https://example.edu/tutoring" target="_blank">Accéder au centre →</a>
  </div>

  <div class="resource-card">
    <div class="icon">💻</div>
    <h3>Sessions de Programmation</h3>
    <p>Aide technique et debugging</p>
    <a href="https://example.edu/help-sessions" target="_blank">Voir les créneaux →</a>
  </div>

  <div class="resource-card">
    <div class="icon">📋</div>
    <h3>Conseil Académique</h3>
    <p>Orientation et planification d'études</p>
    <a href="https://example.edu/advising" target="_blank">Prendre RDV →</a>
  </div>

  <div class="resource-card">
    <div class="icon">📖</div>
    <h3>Bibliothèque Numérique</h3>
    <p>Accès aux ressources académiques</p>
    <a href="https://example.edu/library" target="_blank">Explorer →</a>
  </div>
</div>

<div class="french-courses">
  <div class="section-header">
    <span class="icon">🇫🇷</span>
    <h2>Catalogue Complet des Cours</h2>
  </div>

  <div class="french-courses-grid">
    <a href="/teaching/courses/initiation-recherche/" class="french-course-link">
      🔍 Initiation à la recherche
    </a>
    <a href="/teaching/courses/logique-industrielle/" class="french-course-link">
      ⚙️ Logique Séquentielle - SAP et Grafcet
    </a>
    <a href="/teaching/courses/modelisation-production/" class="french-course-link">
      🏭 Modélisation des systèmes de production
    </a>
    <a href="/teaching/courses/gr711302/" class="french-course-link">
      🤖 GR-711302 Automatique : Robotique
    </a>
    <a href="/teaching/courses/gr712302/" class="french-course-link">
      💻 GR-712302 Programmation
    </a>
    <a href="/teaching/courses/regulation-systeme/" class="french-course-link">
      🎛️ Automatique : Régulation de Système
    </a>
    <a href="/teaching/courses/analyse-optimisation/" class="french-course-link">
      📊 Analyse numérique : Optimisation
    </a>
    <a href="/teaching/courses/industrie4/" class="french-course-link">
      🏭 Industrie 4.0
    </a>
    <a href="/teaching/courses/tests-maintenance/" class="french-course-link">
      🔧 Tests et Maintenance
    </a>
    <a href="/teaching/courses/simulation-medicale/" class="french-course-link">
      🏥 Simulation Médical et Robotique Médicale
    </a>
    <a href="/teaching/courses/modeling-simulation/" class="french-course-link">
      🧬 Modeling & Real-Time Medical Simulation
    </a>
    <a href="/teaching/courses/tp-robotino/" class="french-course-link">
      🤖 TP Robotino
    </a>
    <a href="/teaching/courses/culture-numerique/" class="french-course-link">
      💻 Culture numérique
    </a>
    <a href="/teaching/courses/maths-prod2a3/" class="french-course-link">
      📐 Cours de Maths Prod2A3
    </a>
  </div>
</div>

<script>
function filterCourses(level) {
  const cards = document.querySelectorAll('#current-courses .course-card');
  const tabs = document.querySelectorAll('.filter-tab');

  // Update active tab
  tabs.forEach(tab => tab.classList.remove('active'));
  event.target.classList.add('active');

  // Filter cards
  cards.forEach(card => {
    const cardLevel = card.getAttribute('data-level');
    if (level === 'all' || cardLevel === level) {
      card.style.display = 'flex';
      card.style.animation = 'fadeIn 0.3s ease-in';
    } else {
      card.style.display = 'none';
    }
  });
}

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);
</script>

## Teaching Philosophy

My teaching approach emphasizes hands-on learning, practical applications, and the development of critical thinking skills. I believe in creating an inclusive classroom environment where students from diverse backgrounds can thrive and contribute their unique perspectives.

In technical courses, I focus on balancing theoretical foundations with practical implementation, giving students the tools they need to apply concepts to real-world problems. I incorporate project-based learning and encourage collaboration, as these reflect the way computer science is practiced professionally.

I am committed to continually improving my teaching methods based on student feedback and educational research. I strive to stay current with developments in both computer science and pedagogical best practices.

## Student Resources

- [Department Tutoring Center](https://example.edu/tutoring)
- [Programming Help Sessions](https://example.edu/help-sessions)
- [Academic Advising](https://example.edu/advising)

## Cours disponibles

- [Initiation à la recherche](/teaching/courses/initiation-recherche/)
- [Logique/Informatique Industrielle](/teaching/courses/logique-industrielle/)
- [Modélisation des systèmes de production](/teaching/courses/modelisation-production/)
- [GR-711302 Automatique : Robotique](/teaching/courses/gr711302/)
- [GR-712302 Programmation](/teaching/courses/gr712302/)
- [Automatique : Régulation de Système](/teaching/courses/regulation-systeme/)
- [Analyse numérique : Optimisation](/teaching/courses/analyse-optimisation/)
- [Industrie 4.0](/teaching/courses/industrie4/)
- [Tests et Maintenance](/teaching/courses/tests-maintenance/)
- [Simulation Médical et Robotique Médicale](/teaching/courses/simulation-medicale/)
- [Modeling & Real-Time Medical Simulation](/teaching/courses/modeling-simulation/)
- [TP Robotino](/teaching/courses/tp-robotino/)
- [Culture numérique](/teaching/courses/culture-numerique/)
- [Cours de Maths Prod2A3](/teaching/courses/maths-prod2a3/)
