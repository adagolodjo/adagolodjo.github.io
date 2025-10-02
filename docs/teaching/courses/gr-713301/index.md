---
layout: page
title: "GR-713301 Automatique: Régulation de Système"
subtitle: "Théorie du contrôle automatique et régulation de système"
permalink: /teaching/courses/gr-713301/
image: /assets/images/projects/automatique-regulation.jpg
---

<style>
:root {
  --primary-color: #2c3e50;
  --secondary-color: #3498db;
  --accent-color: #e74c3c;
  --success-color: #27ae60;
  --warning-color: #f39c12;
  --automation-color: #9b59b6;
  --light-bg: #f8f9fa;
  --card-shadow: 0 4px 20px rgba(0,0,0,0.08);
  --card-shadow-hover: 0 12px 40px rgba(0,0,0,0.15);
  --border-radius: 16px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.course-hero {
  background: linear-gradient(135deg, var(--automation-color) 0%, var(--secondary-color) 100%);
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
  color: var(--automation-color);
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

.info-box {
  background: linear-gradient(135deg, #fff3cd, #d1ecf1);
  border-left: 4px solid var(--automation-color);
  padding: 1.5rem;
  border-radius: 8px;
  margin: 2rem 0;
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
  background: linear-gradient(90deg, var(--automation-color), var(--secondary-color));
}

.eval-item:hover {
  transform: translateY(-8px);
  box-shadow: var(--card-shadow-hover);
}

.eval-percentage {
  font-size: 3rem;
  font-weight: 700;
  color: var(--automation-color);
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
  background: rgba(155, 89, 182, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid rgba(155, 89, 182, 0.2);
  transition: var(--transition);
}

.resource-card:hover {
  background: rgba(155, 89, 182, 0.2);
  transform: translateY(-5px);
}

.resource-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--automation-color);
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
  background: rgba(155, 89, 182, 0.1);
  border-radius: 12px;
  transition: var(--transition);
}

.contact-item:hover {
  background: rgba(155, 89, 182, 0.2);
}

.contact-icon {
  font-size: 1.5rem;
  color: var(--automation-color);
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
    <h1>Automatique: Régulation de Système</h1>
    <p class="subtitle">Théorie du contrôle automatique et régulation de système</p>
    <div class="hero-badges">
      <span class="hero-badge">🏭 GR-713301</span>
      <span class="hero-badge">⏱️ 32h TP</span>
      <span class="hero-badge">📅 Semestre 3</span>
      <span class="hero-badge">🔧 Niveau Graduate</span>
    </div>
  </div>
</div>

<nav class="course-nav">
  <div class="nav-links">
    <a href="#objectifs" class="nav-link">🎧 Objectifs</a>
    <a href="#programme" class="nav-link">📚 Programme</a>
    <a href="#evaluation" class="nav-link">📊 Évaluation</a>
    <a href="#ressources" class="nav-link">💾 Ressources</a>
    <a href="#contact" class="nav-link">📞 Contact</a>
  </div>
</nav>

<div class="section-card" id="description">
  <div class="section-header">
    <div class="section-icon">🎛️</div>
    <h2 class="section-title">Description du cours</h2>
  </div>
  
  <p class="lead">Ce cours couvre la théorie du contrôle automatique et la régulation de système avec des applications pratiques. Les étudiants acquerront les compétences nécessaires pour concevoir et implémenter des systèmes de régulation automatique dans un contexte industriel.</p>
  
  <div class="info-box">
    <strong>🎆 Prérequis:</strong> Connaissances de base en mathématiques appliquées, physique et traitement du signal. Une bonne maîtrise des outils informatiques est recommandée.
  </div>
</div>

<div class="section-card" id="objectifs">
  <div class="section-header">
    <div class="section-icon">🎧</div>
    <h2 class="section-title">Objectifs pédagogiques</h2>
  </div>
  
  <div class="objectives-grid">
    <div class="objective-card">
      <h4>🔧 Maîtrise des concepts</h4>
      <p>Comprendre les principes fondamentaux de la régulation automatique et les différents types de contrôleurs.</p>
    </div>
    
    <div class="objective-card">
      <h4>📊 Analyse de systèmes</h4>
      <p>Savoir analyser la stabilité et les performances d'un système bouclé à l'aide des outils appropriés.</p>
    </div>
    
    <div class="objective-card">
      <h4>🔧 Conception pratique</h4>
      <p>Dimensionner et implémenter des régulateurs adaptés aux spécifications du cahier des charges.</p>
    </div>
    
    <div class="objective-card">
      <h4>💻 Outils de simulation</h4>
      <p>Utiliser les logiciels de simulation (MATLAB/Simulink) pour la modélisation et la validation des systèmes.</p>
    </div>
  </div>
</div>

<div class="section-card" id="programme">
  <div class="section-header">
    <div class="section-icon">📚</div>
    <h2 class="section-title">Programme détaillé</h2>
  </div>
  
  <div class="timeline">
    <div class="timeline-item">
      <h4>🔍 TP 1-2: Introduction à l'automatique</h4>
      <ul>
        <li>Concepts de base : système, signal, boucle fermée</li>
        <li>Modélisation des systèmes linéaires</li>
        <li>Fonction de transfert et réponse temporelle</li>
        <li>Introduction à MATLAB/Simulink</li>
      </ul>
      <p><strong>Durée:</strong> 8h TP</p>
    </div>
    
    <div class="timeline-item">
      <h4>📊 TP 3-4: Analyse des systèmes</h4>
      <ul>
        <li>Stabilité des systèmes linéaires</li>
        <li>Critères de stabilité (Routh-Hurwitz, Nyquist)</li>
        <li>Marge de gain et marge de phase</li>
        <li>Réponse fréquentielle (Bode, Nyquist)</li>
      </ul>
      <p><strong>Durée:</strong> 8h TP</p>
    </div>
    
    <div class="timeline-item">
      <h4>🔧 TP 5-6: Synthèse des correcteurs</h4>
      <ul>
        <li>Régulateurs P, PI, PID</li>
        <li>Méthodes de réglage (Ziegler-Nichols, placement de pôles)</li>
        <li>Correction par avance de phase et retard de phase</li>
        <li>Régulateurs RST</li>
      </ul>
      <p><strong>Durée:</strong> 8h TP</p>
    </div>
    
    
    <div class="timeline-item">
      <h4>🎆 TP 7-8: Applications pratiques</h4>
      <ul>
        <li>Régulation de température</li>
        <li>Contrôle de position et vitesse</li>
        <li>Systèmes multi-variables</li>
        <li>Validation expérimentale sur maquettes</li>
      </ul>
      <p><strong>Durée:</strong> 8h TP</p>
    </div>
  </div>
</div>

<div class="section-card" id="evaluation">
  <div class="section-header">
    <div class="section-icon">📊</div>
    <h2 class="section-title">Modalités d'évaluation</h2>
  </div>
  
  <div class="evaluation-grid">
    <div class="eval-item">
      <span class="eval-percentage">60%</span>
      <h4 class="eval-title">Note de classe</h4>
      <p class="eval-description">Évaluations continues pendant les séances de TP, participation et compréhension</p>
    </div>
    
    <div class="eval-item">
      <span class="eval-percentage">40%</span>
      <h4 class="eval-title">Note de rapport</h4>
      <p class="eval-description">Rapport d'étude sur un projet de régulation automatique au choix</p>
    </div>
  </div>
</div>

<div class="section-card" id="ressources">
  <div class="section-header">
    <div class="section-icon">💾</div>
    <h2 class="section-title">Ressources pédagogiques</h2>
  </div>
  
  <div class="resources-grid">
    <div class="resource-card">
      <div class="resource-icon">📚</div>
      <h4>Documentation technique</h4>
      <ul>
        <li>Polycopié de cours et de TP</li>
        <li>Formulaires et aides-mémoires</li>
        <li>Fiches techniques des composants</li>
      </ul>
    </div>
    
    <div class="resource-card">
      <div class="resource-icon">💻</div>
      <h4>Logiciels et outils</h4>
      <ul>
        <li>MATLAB/Simulink (licence étudiante)</li>
        <li>Scilab (logiciel libre)</li>
        <li>Python (librairies de contrôle)</li>
        <li>Maquettes pédagogiques</li>
      </ul>
    </div>
    
    <div class="resource-card">
      <div class="resource-icon">📄</div>
      <h4>Ressources complémentaires</h4>
      <ul>
        <li>Bibliographie spécialisée</li>
        <li>Tutoriels vidéo</li>
        <li>Exercices supplémentaires</li>
        <li>Projets d'approfondissement</li>
      </ul>
    </div>
  </div>
</div>

<div class="section-card" id="contact">
  <div class="section-header">
    <div class="section-icon">📞</div>
    <h2 class="section-title">Informations de contact</h2>
  </div>
  
  <div class="contact-info">
    <div class="contact-item">
      <div class="contact-icon">👨‍🏫</div>
      <div>
        <strong>Enseignant responsable</strong><br>
        Dr. Yinoussa Adagolodjo
      </div>
    </div>
    
    <div class="contact-item">
      <div class="contact-icon">✉️</div>
      <div>
        <strong>Email</strong><br>
        Utiliser le formulaire de contact sur la page d'accueil
      </div>
    </div>
    
    <div class="contact-item">
      <div class="contact-icon">🏢</div>
      <div>
        <strong>Lieu des TP</strong><br>
        Laboratoire d'Automatique, UFR Sciences
      </div>
    </div>
    
    <div class="contact-item">
      <div class="contact-icon">🕰️</div>
      <div>
        <strong>Horaires</strong><br>
        Créneaux variables selon planning - Consulter l'emploi du temps
      </div>
    </div>
  </div>
</div>
