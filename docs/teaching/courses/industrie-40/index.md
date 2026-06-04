---
layout: page
title: "Industrie 4.0"
subtitle: "Introduction aux concepts de l'Industrie 4.0, IoT et fabrication intelligente"
permalink: /teaching/courses/industrie-40/
image: /assets/images/projects/industrie-40.jpg
---

<style>
:root {
  --primary-color: #2c3e50;
  --secondary-color: #3498db;
  --accent-color: #e74c3c;
  --success-color: #27ae60;
  --warning-color: #f39c12;
  --industry-color: #e67e22;
  --tech-color: #1abc9c;
  --light-bg: #f8f9fa;
  --card-shadow: 0 4px 20px rgba(0,0,0,0.08);
  --card-shadow-hover: 0 12px 40px rgba(0,0,0,0.15);
  --border-radius: 16px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.course-hero {
  background: linear-gradient(135deg, var(--industry-color) 0%, var(--tech-color) 100%);
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
  color: var(--industry-color);
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
  border-left: 4px solid var(--industry-color);
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
  background: linear-gradient(90deg, var(--industry-color), var(--tech-color));
}

.eval-item:hover {
  transform: translateY(-8px);
  box-shadow: var(--card-shadow-hover);
}

.eval-percentage {
  font-size: 3rem;
  font-weight: 700;
  color: var(--industry-color);
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
  background: rgba(230, 126, 34, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid rgba(230, 126, 34, 0.2);
  transition: var(--transition);
}

.resource-card:hover {
  background: rgba(230, 126, 34, 0.2);
  transform: translateY(-5px);
}

.resource-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--industry-color);
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
  background: rgba(230, 126, 34, 0.1);
  border-radius: 12px;
  transition: var(--transition);
}

.contact-item:hover {
  background: rgba(230, 126, 34, 0.2);
}

.contact-icon {
  font-size: 1.5rem;
  color: var(--industry-color);
}

.tech-stack {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.tech-item {
  background: rgba(26, 188, 156, 0.1);
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  border: 1px solid rgba(26, 188, 156, 0.2);
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
    <h1>Industrie 4.0</h1>
    <p class="subtitle">Introduction aux concepts de l'Industrie 4.0, IoT et fabrication intelligente</p>
    <div class="hero-badges">
      <span class="hero-badge">🏭 INDUSTRIE-40</span>
      <span class="hero-badge">⏱️ 4.5h CM + 6h TP</span>
      <span class="hero-badge">🎆 Graduate</span>
      <span class="hero-badge">🔥 Technologies Avancées</span>
    </div>
  </div>
</div>

<nav class="course-nav">
  <div class="nav-links">
    <a href="#objectifs" class="nav-link">🎧 Objectifs</a>
    <a href="#programme" class="nav-link">📚 Programme</a>
    <a href="#ressources" class="nav-link">💾 Ressources</a>
    <a href="#evaluation" class="nav-link">📊 Évaluation</a>
    <a href="#technologies" class="nav-link">💻 Technologies</a>
    <a href="#contact" class="nav-link">📞 Contact</a>
  </div>
</nav>

<div class="section-card" id="description">
  <div class="section-header">
    <div class="section-icon">🏢</div>
    <h2 class="section-title">Description du cours</h2>
  </div>
  
  <p class="lead">Ce cours introduit les étudiants aux concepts et technologies qui propulsent la Quatrième Révolution Industrielle (Industrie 4.0). Les étudiants exploreront comment les systèmes cyber-physiques, l'Internet des Objets (IoT), l'intelligence artificielle et l'analyse de données transforment les processus de fabrication et industriels.</p>
  
  <div class="info-box">
    <strong>🎆 Prérequis:</strong> Connaissances de base des processus de fabrication, compétences en programmation (Python ou similaire), compréhension des réseaux informatiques et familiarité avec les concepts de bases de données.
  </div>
</div>

<div class="section-card" id="objectifs">
  <div class="section-header">
    <div class="section-icon">🎧</div>
    <h2 class="section-title">Objectifs pédagogiques</h2>
  </div>
  
  <div class="objectives-grid">
    <div class="objective-card">
      <h4>🔧 Principes fondamentaux</h4>
      <p>Comprendre les principes fondamentaux et les piliers de l'Industrie 4.0.</p>
    </div>
    
    <div class="objective-card">
      <h4>📊 Impact de la transformation</h4>
      <p>Analyser l'impact de la transformation numérique sur les processus de fabrication.</p>
    </div>
    
    <div class="objective-card">
      <h4>💻 Solutions IoT</h4>
      <p>Concevoir et implémenter des solutions IoT pour les applications industrielles.</p>
    </div>
    
    <div class="objective-card">
      <h4>🔍 Évaluation des systèmes</h4>
      <p>Évaluer les avantages et les défis des systèmes de fabrication intelligente.</p>
    </div>
  </div>
</div>

<div class="section-card" id="programme">
  <div class="section-header">
    <div class="section-icon">📚</div>
    <h2 class="section-title">Programme détaillé</h2>
  </div>
  
  <h3 style="color: var(--secondary-color); margin-bottom: 1rem;">🎧 Cours Magistraux (CM - 4.5h)</h3>
  
  <div class="timeline">
    <div class="timeline-item">
      <h4>🔍 Module 1: Introduction à l'Industrie 4.0</h4>
      <ul>
        <li>Contexte historique : De l'Industrie 1.0 à 4.0</li>
        <li>Technologies clés et facteurs facilitateurs</li>
        <li>Transformation numérique dans la fabrication</li>
      </ul>
      <p><strong>Durée:</strong> 1.5h CM</p>
    </div>
    
    <div class="timeline-item">
      <h4>📊 Module 2: Systèmes Cyber-Physiques (CPS)</h4>
      <ul>
        <li>Architecture et composants des CPS</li>
        <li>Intégration des systèmes physiques et numériques</li>
        <li>Surveillance et contrôle en temps réel</li>
      </ul>
      <p><strong>Durée:</strong> 1h CM</p>
    </div>
    
    <div class="timeline-item">
      <h4>💻 Module 3: Internet des Objets (IoT) Industriel</h4>
      <ul>
        <li>Fondamentaux de l'IoT industriel (IIoT)</li>
        <li>Réseaux de capteurs et collecte de données</li>
        <li>Protocoles de communication et standards</li>
      </ul>
      <p><strong>Durée:</strong> 1h CM</p>
    </div>
    
    <div class="timeline-item">
      <h4>🧠 Module 4: Analyse de données et IA</h4>
      <ul>
        <li>Big data dans la fabrication</li>
        <li>Applications de l'apprentissage automatique</li>
        <li>Maintenance prédictive et contrôle qualité</li>
      </ul>
      <p><strong>Durée:</strong> 1h CM</p>
    </div>
  </div>
  
  <h3 style="color: var(--tech-color); margin: 2rem 0 1rem;">🔧 Travaux Pratiques (TP - 6h)</h3>
  
  <div class="timeline">
    <div class="timeline-item">
      <h4>🔮 TP 1: Implémentation de capteurs IoT</h4>
      <ul>
        <li>Expérience pratique avec les capteurs industriels</li>
        <li>Acquisition et traitement des données</li>
        <li>Protocoles de communication (MQTT, OPC-UA)</li>
      </ul>
      <p><strong>Durée:</strong> 2h TP</p>
    </div>
    
    <div class="timeline-item">
      <h4>🎆 TP 2: Simulation de fabrication intelligente</h4>
      <ul>
        <li>Concepts de jumeaux numériques</li>
        <li>Simulation de processus de fabrication</li>
        <li>Optimisation des performances avec l'analyse de données</li>
      </ul>
      <p><strong>Durée:</strong> 2h TP</p>
    </div>
    
    <div class="timeline-item">
      <h4>📈 TP 3: Étude de cas Industrie 4.0</h4>
      <ul>
        <li>Analyse de projets de transformation industrielle réels</li>
        <li>Conception d'un concept d'usine intelligente</li>
        <li>Présentation des solutions proposées</li>
      </ul>
      <p><strong>Durée:</strong> 2h TP</p>
    </div>
  </div>
</div>

<div class="section-card" id="ressources">
  <div class="section-header">
    <div class="section-icon">💾</div>
    <h2 class="section-title">Ressources pédagogiques</h2>
  </div>
  
  <!-- Ressources du cours par partie -->
  <div style="margin-bottom: 3rem;">
    <h3 style="color: var(--industry-color); margin-bottom: 2rem; display: flex; align-items: center; gap: 0.5rem;">
      <span>📁</span> Supports de cours
    </h3>
    
    <div class="timeline" style="margin-left: 0; padding-left: 0;">
      <div class="timeline-item" style="margin-left: 0; border-left: 4px solid var(--industry-color); background: linear-gradient(135deg, rgba(230, 126, 34, 0.1), rgba(230, 126, 34, 0.05));">
        <h4 style="display: flex; align-items: center; gap: 0.5rem; color: var(--industry-color);">
          <span>📊</span> Partie 1 : Introduction à l'Industrie 4.0
        </h4>
        <p>Contexte historique, technologies clés et transformation numérique</p>
        <div style="margin-top: 1rem;">
          <a href="https://nextcloud.univ-lille.fr/index.php/s/PLiRRWmcHcE62jJ" 
             class="nav-link" 
             style="display: inline-flex; background: var(--industry-color); color: white; text-decoration: none; padding: 0.75rem 1.5rem; border-radius: 8px; font-weight: 500; transition: var(--transition);" 
             target="_blank" 
             rel="noopener noreferrer">
            <span style="margin-right: 0.5rem;">📥</span>
            Télécharger les supports (PDF + exercices)
          </a>
        </div>
      </div>
      
      <div class="timeline-item" style="margin-left: 0; border-left: 4px solid var(--industry-color); background: linear-gradient(135deg, rgba(230, 126, 34, 0.1), rgba(230, 126, 34, 0.05));">
        <h4 style="display: flex; align-items: center; gap: 0.5rem; color: var(--industry-color);">
          <span>🤖</span> IA Génératives et Automatisation
        </h4>
        <p>Applications des intelligences artificielles génératives dans l'industrie 4.0</p>
        <div style="margin-top: 1rem;">
          <a href="https://nextcloud.univ-lille.fr/index.php/s/EsZQd6gipb8dstp" 
             class="nav-link" 
             style="display: inline-flex; background: var(--industry-color); color: white; text-decoration: none; padding: 0.75rem 1.5rem; border-radius: 8px; font-weight: 500; transition: var(--transition);" 
             target="_blank" 
             rel="noopener noreferrer">
            <span style="margin-right: 0.5rem;">📥</span>
            Télécharger le document IA (PDF)
          </a>
        </div>
      </div>
      
      <div class="timeline-item" style="margin-left: 0; border-left: 4px solid #95a5a6; background: rgba(149, 165, 166, 0.1); opacity: 0.7;">
        <h4 style="display: flex; align-items: center; gap: 0.5rem; color: #7f8c8d;">
          <span>🔧</span> Partie 2 : Systèmes Cyber-Physiques (CPS)
        </h4>
        <p>Architecture, intégration et surveillance en temps réel</p>
        <div style="margin-top: 1rem;">
          <span style="display: inline-flex; background: #95a5a6; color: white; padding: 0.75rem 1.5rem; border-radius: 8px; font-weight: 500;">
            <span style="margin-right: 0.5rem;">⏳</span>
            Bientôt disponible
          </span>
        </div>
      </div>
      
      <div class="timeline-item" style="margin-left: 0; border-left: 4px solid #95a5a6; background: rgba(149, 165, 166, 0.1); opacity: 0.7;">
        <h4 style="display: flex; align-items: center; gap: 0.5rem; color: #7f8c8d;">
          <span>📡</span> Partie 3 : Internet des Objets (IoT) Industriel
        </h4>
        <p>IIoT, réseaux de capteurs et protocoles de communication</p>
        <div style="margin-top: 1rem;">
          <span style="display: inline-flex; background: #95a5a6; color: white; padding: 0.75rem 1.5rem; border-radius: 8px; font-weight: 500;">
            <span style="margin-right: 0.5rem;">⏳</span>
            Bientôt disponible
          </span>
        </div>
      </div>
      
      <div class="timeline-item" style="margin-left: 0; border-left: 4px solid #95a5a6; background: rgba(149, 165, 166, 0.1); opacity: 0.7;">
        <h4 style="display: flex; align-items: center; gap: 0.5rem; color: #7f8c8d;">
          <span>🧠</span> Partie 4 : Analyse de données et IA
        </h4>
        <p>Big data, apprentissage automatique et maintenance prédictive</p>
        <div style="margin-top: 1rem;">
          <span style="display: inline-flex; background: #95a5a6; color: white; padding: 0.75rem 1.5rem; border-radius: 8px; font-weight: 500;">
            <span style="margin-right: 0.5rem;">⏳</span>
            Bientôt disponible
          </span>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Section Projets et évaluations -->
  <div style="margin-bottom: 3rem;">
    <h3 style="color: var(--tech-color); margin-bottom: 2rem; display: flex; align-items: center; gap: 0.5rem;">
      <span>📁</span> Projets et évaluations
    </h3>
    
    <div class="timeline" style="margin-left: 0; padding-left: 0;">
      <div class="timeline-item" style="margin-left: 0; border-left: 4px solid var(--tech-color); background: linear-gradient(135deg, rgba(26, 188, 156, 0.1), rgba(26, 188, 156, 0.05));">
        <h4 style="display: flex; align-items: center; gap: 0.5rem; color: var(--tech-color);">
          <span>📝</span> Consignes pour le projet
        </h4>
        <p>Attendus, modalités et critères d'évaluation du projet final</p>
        <div style="margin-top: 1rem;">
          <a href="https://nextcloud.univ-lille.fr/index.php/s/JJE9imY56iZDwpx" 
             class="nav-link" 
             style="display: inline-flex; background: var(--tech-color); color: white; text-decoration: none; padding: 0.75rem 1.5rem; border-radius: 8px; font-weight: 500; transition: var(--transition);" 
             target="_blank" 
             rel="noopener noreferrer">
            <span style="margin-right: 0.5rem;">📥</span>
            Télécharger les consignes (PDF)
          </a>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Ressources complémentaires -->
  <div>
    <h3 style="color: var(--secondary-color); margin-bottom: 2rem; display: flex; align-items: center; gap: 0.5rem;">
      <span>📚</span> Ressources complémentaires
    </h3>
    
    <div class="resources-grid">
      <div class="resource-card">
        <div class="resource-icon">📚</div>
        <h4>Documentation technique</h4>
        <ul>
          <li>Études de cas industriels et livres blancs</li>
          <li>Documentation des plateformes Industrie 4.0</li>
          <li>Rapports professionnels de l'industrie</li>
        </ul>
      </div>
      
      <div class="resource-card">
        <div class="resource-icon">🔍</div>
        <h4>Recherche actuelle</h4>
        <ul>
          <li>Recherche actuelle en fabrication intelligente</li>
          <li>Articles scientifiques et publications</li>
          <li>Conférences et webinaires spécialisés</li>
        </ul>
      </div>
      
      <div class="resource-card">
        <div class="resource-icon">💼</div>
        <h4>Perspectives carrière</h4>
        <ul>
          <li>Conseil en digitalisation industrielle</li>
          <li>Conception d'usines intelligentes</li>
          <li>Développement de solutions IoT</li>
          <li>Gestion de la transformation digitale</li>
        </ul>
      </div>
    </div>
  </div>
  
  <div class="info-box" style="margin-top: 2rem;">
    <strong>📌 Note importante :</strong> Les ressources sont hébergées sur Nextcloud de l'Université de Lille. Vous aurez besoin de vos identifiants universitaires pour accéder aux contenus protégés. En cas de problème d'accès, contactez l'enseignant.
  </div>
</div>

<div class="section-card" id="evaluation">
  <div class="section-header">
    <div class="section-icon">📊</div>
    <h2 class="section-title">Modalités d'évaluation</h2>
  </div>
  
  <div class="evaluation-grid">
    <div class="eval-item">
      <span class="eval-percentage">70%</span>
      <h4 class="eval-title">Exposé</h4>
      <p class="eval-description">Présentation de projet final sur une stratégie d'implémentation Industrie 4.0</p>
    </div>
    
    <div class="eval-item">
      <span class="eval-percentage">30%</span>
      <h4 class="eval-title">Note de classe</h4>
      <p class="eval-description">Participation active en cours et séances pratiques, évaluations continues</p>
    </div>
  </div>
</div>

<div class="section-card" id="technologies">
  <div class="section-header">
    <div class="section-icon">💻</div>
    <h2 class="section-title">Technologies et outils</h2>
  </div>
  
  <div class="tech-stack">
    <div class="tech-item">
      <h5>📱 Plateformes IoT</h5>
      <p>Arduino, Raspberry Pi, Node-RED</p>
    </div>
    
    <div class="tech-item">
      <h5>🏭 Logiciels de simulation</h5>
      <p>Factory I/O, Plant Simulation</p>
    </div>
    
    <div class="tech-item">
      <h5>📊 Visualisation données</h5>
      <p>Grafana, Power BI, Tableau</p>
    </div>
    
    <div class="tech-item">
      <h5>🔗 Protocoles industriels</h5>
      <p>MQTT, OPC-UA, Modbus</p>
    </div>
    
    <div class="tech-item">
      <h5>☁️ Plateformes cloud</h5>
      <p>AWS IoT, Azure IoT, Google Cloud</p>
    </div>
    
    <div class="tech-item">
      <h5>🐍 Programmation</h5>
      <p>Python, JavaScript, C++</p>
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
        <a href="/contact/">Utiliser le formulaire de contact</a>
      </div>
    </div>
    
    <div class="contact-item">
      <div class="contact-icon">🏢</div>
      <div>
        <strong>Lieu des cours</strong><br>
        Laboratoire Technologies Avancées, UFR Sciences
      </div>
    </div>
    
    <div class="contact-item">
      <div class="contact-icon">🕰️</div>
      <div>
        <strong>Permanences</strong><br>
        Sur rendez-vous - Consulter la page de contact
      </div>
    </div>
  </div>
</div>
