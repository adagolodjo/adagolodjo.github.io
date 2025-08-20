---
layout: page
title: GR-712302 Programmation
subtitle: Concepts avancés de programmation pour l'ingénierie
permalink: /teaching/courses/gr-712302/
image: /assets/images/projects/programmation.jpg
---

<style>
:root {
  --primary-color: #2c3e50;
  --secondary-color: #3498db;
  --accent-color: #e74c3c;
  --success-color: #27ae60;
  --warning-color: #f39c12;
  --programming-color: #2ecc71;
  --light-bg: #f8f9fa;
  --card-shadow: 0 4px 20px rgba(0,0,0,0.08);
  --card-shadow-hover: 0 12px 40px rgba(0,0,0,0.15);
  --border-radius: 16px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.course-hero {
  background: linear-gradient(135deg, var(--programming-color) 0%, var(--secondary-color) 100%);
  color: white;
  padding: 4rem 2rem;
  border-radius: var(--border-radius);
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.course-hero::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v20h40V20c0-11.046-8.954-20-20-20z'/%3E%3C/g%3E%3C/svg%3E");
  animation: float 20s linear infinite;
  z-index: 1;
}

.course-hero-content {
  position: relative;
  z-index: 2;
}

.course-hero h1 {
  color: white;
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 300;
  text-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.course-hero .subtitle {
  font-size: 1.3rem;
  opacity: 0.95;
  margin-bottom: 2rem;
}

.hero-badges {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero-badge {
  background: rgba(255,255,255,0.2);
  backdrop-filter: blur(10px);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 500;
  border: 1px solid rgba(255,255,255,0.3);
}

.course-nav {
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  padding: 1.5rem;
  margin-bottom: 2rem;
  position: sticky;
  top: 20px;
  z-index: 100;
}

.nav-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.nav-link {
  padding: 0.75rem 1.5rem;
  background: var(--light-bg);
  color: var(--primary-color);
  text-decoration: none;
  border-radius: 25px;
  font-weight: 500;
  transition: var(--transition);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-link:hover, .nav-link.active {
  background: var(--secondary-color);
  color: white;
  transform: translateY(-2px);
}

.section-card {
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  padding: 2.5rem;
  margin-bottom: 2rem;
  transition: var(--transition);
}

.section-card:hover {
  box-shadow: var(--card-shadow-hover);
}

.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--light-bg);
}

.section-icon {
  font-size: 2rem;
  margin-right: 1rem;
  color: var(--programming-color);
}

.section-title {
  color: var(--primary-color);
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
}

.objectives-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.objective-card {
  background: var(--light-bg);
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid var(--success-color);
  transition: var(--transition);
}

.objective-card:hover {
  transform: translateX(8px);
  background: #e8f5e8;
}

.objective-card h4 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.prerequisite-item {
  display: flex;
  align-items: center;
  padding: 1rem;
  background: var(--light-bg);
  border-radius: 8px;
  margin-bottom: 1rem;
  transition: var(--transition);
}

.prerequisite-item:hover {
  background: #e3f2fd;
  transform: translateX(5px);
}

.prerequisite-icon {
  font-size: 1.5rem;
  margin-right: 1rem;
  color: var(--secondary-color);
}

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--secondary-color);
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  margin-left: 2rem;
  border-left: 4px solid var(--secondary-color);
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -2.75rem;
  top: 1.5rem;
  width: 12px;
  height: 12px;
  background: var(--secondary-color);
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 0 0 3px var(--secondary-color);
}

.timeline-week {
  font-weight: 600;
  color: var(--programming-color);
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.timeline-content h4 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.timeline-details {
  color: #666;
  font-size: 0.95rem;
  margin-top: 0.5rem;
  font-style: italic;
}

.evaluation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.eval-item {
  text-align: center;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, var(--light-bg), white);
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.eval-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--programming-color), var(--secondary-color));
}

.eval-item:hover {
  transform: translateY(-8px);
  box-shadow: var(--card-shadow-hover);
}

.eval-percentage {
  font-size: 3rem;
  font-weight: 700;
  color: var(--programming-color);
  display: block;
  margin-bottom: 0.5rem;
}

.eval-title {
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.eval-description {
  font-size: 0.9rem;
  color: #666;
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.resource-card {
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.2);
  transition: var(--transition);
  text-align: left;
}

.resource-card:hover {
  background: rgba(255,255,255,0.2);
  transform: translateY(-5px);
}

.resource-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #ffd700;
}

.resource-card h4 {
  color: white;
  margin-bottom: 1rem;
  font-weight: 600;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255,255,255,0.1);
  border-radius: 12px;
  transition: var(--transition);
}

.contact-item:hover {
  background: rgba(255,255,255,0.2);
}

.contact-icon {
  font-size: 1.5rem;
  color: #ffd700;
}

.skills-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;
}

.skill-tag {
  background: var(--programming-color);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.info-box {
  background: linear-gradient(135deg, #e8f8f5, #d4edda);
  border-left: 4px solid var(--programming-color);
  padding: 1.5rem;
  border-radius: 8px;
  margin: 2rem 0;
}

.info-box h4 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

@keyframes float {
  0% { transform: translateX(-50px); }
  100% { transform: translateX(calc(100vw + 50px)); }
}

@media (max-width: 768px) {
  .course-hero h1 {
    font-size: 2.5rem;
  }
  
  .nav-links {
    justify-content: flex-start;
    overflow-x: auto;
    padding-bottom: 0.5rem;
  }
  
  .timeline {
    padding-left: 1rem;
  }
  
  .timeline-item {
    margin-left: 1rem;
  }
}
</style>

<div class="course-hero">
  <div class="course-hero-content">
    <h1>💻 GR-712302 Programmation</h1>
    <p class="subtitle">Concepts avancés de programmation pour l'ingénierie</p>
    <div class="hero-badges">
      <span class="hero-badge">🎓 Niveau Graduate</span>
      <span class="hero-badge">⏱️ 20h TP</span>
      <span class="hero-badge">🎯 Programmation avancée</span>
      <span class="hero-badge">🔧 Travaux Pratiques</span>
    </div>
  </div>
</div>

<nav class="course-nav">
  <div class="nav-links">
    <a href="#presentation" class="nav-link active">📋 Présentation</a>
    <a href="#objectifs" class="nav-link">🎯 Objectifs</a>
    <a href="#planning" class="nav-link">📅 Planning</a>
    <a href="#evaluation" class="nav-link">📊 Évaluation</a>
    <a href="#ressources" class="nav-link">📚 Ressources</a>
    <a href="#contact" class="nav-link">📞 Contact</a>
  </div>
</nav>

<section id="presentation" class="section-card">
  <div class="section-header">
    <div class="section-icon">📋</div>
    <h2 class="section-title">Présentation du cours</h2>
  </div>
  
  <p style="font-size: 1.1rem; line-height: 1.7; color: #555; margin-bottom: 2rem;">
    Ce cours de travaux pratiques explore les concepts avancés de programmation appliqués aux domaines de l'ingénierie. Les étudiants approfondissent leurs compétences en développement logiciel avec un focus sur les architectures modernes, les patterns de design, et les techniques d'optimisation. Une approche pratique intégrant les dernières technologies prépare aux défis de l'ingénierie logicielle contemporaine.
  </p>

  <div class="info-box">
    <h4>📊 Informations générales</h4>
    <p><strong>Durée :</strong> 20h de travaux pratiques<br>
    <strong>Volume de travail personnel estimé :</strong> 30-35 heures<br>
    <strong>Langue d'enseignement :</strong> Français<br>
    <strong>Évaluation :</strong> Note de Classe, Note de rapport</p>
  </div>

  <h3 style="color: var(--primary-color); margin-bottom: 1.5rem;">✅ Prérequis</h3>
  
  <div class="prerequisite-item">
    <div class="prerequisite-icon">🏗️</div>
    <div>
      <strong>Programmation orientée objet</strong>
      <p style="margin: 0; color: #666; font-size: 0.95rem;">Maîtrise des concepts OOP, héritage, polymorphisme, encapsulation</p>
    </div>
  </div>
  
  <div class="prerequisite-item">
    <div class="prerequisite-icon">🗃️</div>
    <div>
      <strong>Structures de données</strong>
      <p style="margin: 0; color: #666; font-size: 0.95rem;">Listes, arbres, graphes, algorithmes de tri et recherche</p>
    </div>
  </div>

  <div class="prerequisite-item">
    <div class="prerequisite-icon">⚙️</div>
    <div>
      <strong>Génie logiciel</strong>
      <p style="margin: 0; color: #666; font-size: 0.95rem;">Cycle de développement, gestion de versions, tests unitaires</p>
    </div>
  </div>

  <div class="skills-tags">
    <span class="skill-tag">Design patterns</span>
    <span class="skill-tag">Architecture logicielle</span>
    <span class="skill-tag">Multi-threading</span>
    <span class="skill-tag">Optimisation</span>
    <span class="skill-tag">APIs REST</span>
    <span class="skill-tag">Microservices</span>
  </div>
</section>

<section id="objectifs" class="section-card">
  <div class="section-header">
    <div class="section-icon">🎯</div>
    <h2 class="section-title">Objectifs pédagogiques</h2>
  </div>

  <p style="font-size: 1.05rem; margin-bottom: 2rem; color: #555;">
    <strong>À l'issue de ce cours, les étudiants seront capables de :</strong>
  </p>

  <div class="objectives-grid">
    <div class="objective-card">
      <h4>🏗️ Concevoir des architectures robustes</h4>
      <p>Appliquer les principes de l'architecture logicielle et les patterns de conception.</p>
    </div>
    <div class="objective-card">
      <h4>⚡ Optimiser les performances</h4>
      <p>Implémenter des solutions efficaces, parallélisme et gestion mémoire optimale.</p>
    </div>
    <div class="objective-card">
      <h4>🔗 Développer des APIs modernes</h4>
      <p>Créer des services web RESTful et implémenter des architectures microservices.</p>
    </div>
    <div class="objective-card">
      <h4>🧪 Intégrer les tests avancés</h4>
      <p>Mettre en œuvre TDD, mocking, et tests d'intégration dans le cycle de développement.</p>
    </div>
    <div class="objective-card">
      <h4>🛠️ Utiliser des frameworks modernes</h4>
      <p>Maîtriser les frameworks et bibliothèques contemporains de l'écosystème de développement.</p>
    </div>
    <div class="objective-card">
      <h4>📊 Analyser et déboguer</h4>
      <p>Profiler les applications, identifier les goulots d'étranglement et résoudre les bugs complexes.</p>
    </div>
  </div>
</section>

<section id="planning" class="section-card">
  <div class="section-header">
    <div class="section-icon">📅</div>
    <h2 class="section-title">Planning des travaux pratiques</h2>
  </div>
  <div class="timeline">
    <div class="timeline-item">
      <div class="timeline-week">TP 1-2</div>
      <div class="timeline-content">
        <h4>Patterns de conception</h4>
        <div class="timeline-details">Singleton, Factory, Observer, Strategy - Implémentation et applications pratiques.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-week">TP 3-4</div>
      <div class="timeline-content">
        <h4>Architecture et SOLID</h4>
        <div class="timeline-details">Principes SOLID, architecture hexagonale, injection de dépendances.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-week">TP 5-6</div>
      <div class="timeline-content">
        <h4>Programmation concurrente</h4>
        <div class="timeline-details">Multi-threading, synchronisation, patterns concurrents, async/await.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-week">TP 7-8</div>
      <div class="timeline-content">
        <h4>APIs et services web</h4>
        <div class="timeline-details">REST APIs, authentification, sérialisation, documentation automatique.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-week">TP 9-10</div>
      <div class="timeline-content">
        <h4>Projet intégré</h4>
        <div class="timeline-details">Développement d'une application complète intégrant tous les concepts vus.</div>
      </div>
    </div>
  </div>
</section>

<section id="evaluation" class="section-card">
  <div class="section-header">
    <div class="section-icon">📊</div>
    <h2 class="section-title">Modalités d'évaluation</h2>
  </div>
  <div class="evaluation-grid">
    <div class="eval-item">
      <span class="eval-percentage">60%</span>
      <div class="eval-title">Note de rapport</div>
      <div class="eval-description">Projet final, qualité du code, documentation, respect des bonnes pratiques.</div>
    </div>
    <div class="eval-item">
      <span class="eval-percentage">40%</span>
      <div class="eval-title">Note de Classe</div>
      <div class="eval-description">Participation active, qualité des implémentations, progression dans les TPs.</div>
    </div>
  </div>
</section>

<section id="ressources" class="section-card">
  <div class="section-header">
    <div class="section-icon">📚</div>
    <h2 class="section-title">Ressources et outils</h2>
  </div>
  <div class="resources-grid">
    <div class="resource-card">
      <div class="resource-icon">📖</div>
      <h4>Littérature technique</h4>
      <ul>
        <li><a href="#" target="_blank">Clean Code - Robert Martin</a></li>
        <li><a href="#" target="_blank">Design Patterns - Gang of Four</a></li>
        <li><a href="#" target="_blank">Effective Java - Joshua Bloch</a></li>
      </ul>
    </div>
    <div class="resource-card">
      <div class="resource-icon">🛠️</div>
      <h4>Outils de développement</h4>
      <ul>
        <li>IDEs modernes (IntelliJ, VS Code)</li>
        <li>Git, GitHub/GitLab</li>
        <li>Docker, containerisation</li>
      </ul>
    </div>
    <div class="resource-card">
      <div class="resource-icon">🚀</div>
      <h4>Frameworks utilisés</h4>
      <ul>
        <li>Spring Boot, Django/Flask</li>
        <li>React/Vue.js pour les interfaces</li>
        <li>Databases: PostgreSQL, MongoDB</li>
      </ul>
    </div>
  </div>
</section>

<section id="contact" class="section-card">
  <div class="section-header">
    <div class="section-icon">📞</div>
    <h2 class="section-title">Contact & encadrement</h2>
  </div>
  <div class="contact-info">
    <div class="contact-item">
      <span class="contact-icon">👨‍🏫</span>
      <span><strong>Responsable du cours :</strong> Dr. Yinoussa Adagolodjo</span>
    </div>
    <div class="contact-item">
      <span class="contact-icon">✉️</span>
      <span><strong>Email :</strong> Remplir formulaire de contact sur la page d'accueil</span>
    </div>
    <div class="contact-item">
      <span class="contact-icon">🏢</span>
      <span><strong>Bureau :</strong> Bâtiment Polytech, Université de Lille</span>
    </div>
    <div class="contact-item">
      <span class="contact-icon">⏰</span>
      <span><strong>Permanence :</strong> Sur rendez-vous (contact par email)</span>
    </div>
  </div>
</section>
