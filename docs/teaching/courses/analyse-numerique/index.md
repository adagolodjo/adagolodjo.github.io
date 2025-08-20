---
layout: page
title: Analyse numérique - Optimisation
subtitle: Méthodes numériques et d'optimisation pour l'ingénierie
permalink: /teaching/courses/analyse-numerique/
image: /assets/images/projects/analyse-numerique.jpg
---

<style>
:root {
  --primary-color: #2c3e50;
  --secondary-color: #3498db;
  --accent-color: #e74c3c;
  --success-color: #27ae60;
  --warning-color: #f39c12;
  --math-color: #8b5cf6;
  --light-bg: #f8f9fa;
  --card-shadow: 0 4px 20px rgba(0,0,0,0.08);
  --card-shadow-hover: 0 12px 40px rgba(0,0,0,0.15);
  --border-radius: 16px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.course-hero {
  background: linear-gradient(135deg, var(--math-color) 0%, var(--secondary-color) 100%);
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
  color: var(--math-color);
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
  color: var(--math-color);
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
  background: linear-gradient(90deg, var(--math-color), var(--secondary-color));
}

.eval-item:hover {
  transform: translateY(-8px);
  box-shadow: var(--card-shadow-hover);
}

.eval-percentage {
  font-size: 3rem;
  font-weight: 700;
  color: var(--math-color);
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
  background: var(--math-color);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.info-box {
  background: linear-gradient(135deg, #f3f0ff, #e0e7ff);
  border-left: 4px solid var(--math-color);
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
    <h1>📊 Analyse numérique : Optimisation</h1>
    <p class="subtitle">Méthodes numériques et d'optimisation pour l'ingénierie</p>
    <div class="hero-badges">
      <span class="hero-badge">🎓 Niveau Graduate</span>
      <span class="hero-badge">⏱️ 16h TP</span>
      <span class="hero-badge">🎯 Optimisation</span>
      <span class="hero-badge">🔢 Méthodes numériques</span>
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
    Ce cours de travaux pratiques explore les méthodes d'analyse numérique et d'optimisation appliquées aux problèmes d'ingénierie. Les étudiants apprendront à résoudre numériquement des problèmes complexes, à implémenter des algorithmes d'optimisation et à analyser leur performance. Une approche pratique avec des applications concrètes permet de maîtriser les outils essentiels du calcul scientifique.
  </p>

  <div class="info-box">
    <h4>📊 Informations générales</h4>
    <p><strong>Durée :</strong> 16h de travaux pratiques<br>
    <strong>Volume de travail personnel estimé :</strong> 25-30 heures<br>
    <strong>Langue d'enseignement :</strong> Français<br>
    <strong>Évaluation :</strong> Note de Classe, Note de rapport</p>
  </div>

  <h3 style="color: var(--primary-color); margin-bottom: 1.5rem;">✅ Prérequis</h3>
  
  <div class="prerequisite-item">
    <div class="prerequisite-icon">📐</div>
    <div>
      <strong>Mathématiques avancées</strong>
      <p style="margin: 0; color: #666; font-size: 0.95rem;">Algèbre linéaire, calcul différentiel et intégral, équations différentielles</p>
    </div>
  </div>
  
  <div class="prerequisite-item">
    <div class="prerequisite-icon">💻</div>
    <div>
      <strong>Programmation scientifique</strong>
      <p style="margin: 0; color: #666; font-size: 0.95rem;">Python ou MATLAB, manipulation de matrices, visualisation</p>
    </div>
  </div>

  <div class="prerequisite-item">
    <div class="prerequisite-icon">🔢</div>
    <div>
      <strong>Méthodes numériques de base</strong>
      <p style="margin: 0; color: #666; font-size: 0.95rem;">Résolution d'équations, intégration numérique, approximation</p>
    </div>
  </div>

  <div class="skills-tags">
    <span class="skill-tag">Optimisation linéaire</span>
    <span class="skill-tag">Méthodes du gradient</span>
    <span class="skill-tag">Algorithmes génétiques</span>
    <span class="skill-tag">Analyse de sensibilité</span>
    <span class="skill-tag">MATLAB/Python</span>
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
      <h4>🔍 Analyser les problèmes d'optimisation</h4>
      <p>Identifier et formuler mathématiquement les problèmes d'optimisation en ingénierie.</p>
    </div>
    <div class="objective-card">
      <h4>⚙️ Implémenter des algorithmes</h4>
      <p>Programmer et utiliser des méthodes d'optimisation (gradient, Newton, génétiques).</p>
    </div>
    <div class="objective-card">
      <h4>📈 Choisir les méthodes appropriées</h4>
      <p>Sélectionner l'algorithme optimal selon le type de problème et les contraintes.</p>
    </div>
    <div class="objective-card">
      <h4>💻 Utiliser des outils professionnels</h4>
      <p>Maîtriser MATLAB/Python et les bibliothèques d'optimisation (SciPy, cvxpy).</p>
    </div>
    <div class="objective-card">
      <h4>📊 Analyser les performances</h4>
      <p>Évaluer la convergence, la stabilité et la robustesse des solutions.</p>
    </div>
    <div class="objective-card">
      <h4>🎯 Résoudre des cas concrets</h4>
      <p>Appliquer l'optimisation à des problèmes réels d'ingénierie et d'industrie.</p>
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
        <h4>Fondements de l'optimisation</h4>
        <div class="timeline-details">Introduction aux problèmes d'optimisation, formulation mathématique, contraintes.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-week">TP 3-4</div>
      <div class="timeline-content">
        <h4>Optimisation linéaire</h4>
        <div class="timeline-details">Méthode du simplexe, problèmes de transport, applications industrielles.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-week">TP 5-6</div>
      <div class="timeline-content">
        <h4>Méthodes du gradient</h4>
        <div class="timeline-details">Gradient descent, méthode de Newton, optimisation non-linéaire.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-week">TP 7-8</div>
      <div class="timeline-content">
        <h4>Optimisation sous contraintes</h4>
        <div class="timeline-details">Multiplicateurs de Lagrange, méthodes de pénalité, programmation quadratique.</div>
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
      <div class="eval-description">Comptes-rendus de TP, analyse des résultats, qualité des implémentations.</div>
    </div>
    <div class="eval-item">
      <span class="eval-percentage">40%</span>
      <div class="eval-title">Note de Classe</div>
      <div class="eval-description">Participation active, qualité des solutions proposées, présentation des résultats.</div>
    </div>
  </div>
</section>

<section id="ressources" class="section-card">
  <div class="section-header">
    <div class="section-icon">📚</div>
    <h2 class="section-title">Ressources et bibliographie</h2>
  </div>
  <div class="resources-grid">
    <div class="resource-card">
      <div class="resource-icon">📖</div>
      <h4>Ouvrages de référence</h4>
      <ul>
        <li><a href="#" target="_blank">Numerical Optimization - Nocedal & Wright</a></li>
        <li><a href="#" target="_blank">Convex Optimization - Boyd & Vandenberghe</a></li>
      </ul>
    </div>
    <div class="resource-card">
      <div class="resource-icon">💻</div>
      <h4>Outils logiciels</h4>
      <ul>
        <li>MATLAB Optimization Toolbox</li>
        <li>Python SciPy, NumPy, CVXPY</li>
        <li>Gurobi, CPLEX (solveurs)</li>
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
