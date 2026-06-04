---
layout: page
title: "DU-825250 Usine Connectée"
subtitle: "Concepts d'usine connectée et systèmes IoT industriels"
permalink: /teaching/courses/du-825250/
image: /assets/images/projects/usine-connectee.jpg
---

<style>
:root {
  --primary-color: #2c3e50;
  --secondary-color: #3498db;
  --accent-color: #e74c3c;
  --success-color: #27ae60;
  --warning-color: #f39c12;
  --smart-factory-color: #16a085;
  --iot-color: #2980b9;
  --light-bg: #f8f9fa;
  --card-shadow: 0 4px 20px rgba(0,0,0,0.08);
  --card-shadow-hover: 0 12px 40px rgba(0,0,0,0.15);
  --border-radius: 16px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.course-hero {
  background: linear-gradient(135deg, var(--smart-factory-color) 0%, var(--iot-color) 100%);
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
  color: var(--smart-factory-color);
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
  border-left: 4px solid var(--smart-factory-color);
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
  background: linear-gradient(90deg, var(--smart-factory-color), var(--iot-color));
}

.eval-item:hover {
  transform: translateY(-8px);
  box-shadow: var(--card-shadow-hover);
}

.eval-percentage {
  font-size: 3rem;
  font-weight: 700;
  color: var(--smart-factory-color);
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
  background: rgba(22, 160, 133, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid rgba(22, 160, 133, 0.2);
  transition: var(--transition);
}

.resource-card:hover {
  background: rgba(22, 160, 133, 0.2);
  transform: translateY(-5px);
}

.resource-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--smart-factory-color);
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
  background: rgba(22, 160, 133, 0.1);
  border-radius: 12px;
  transition: var(--transition);
}

.contact-item:hover {
  background: rgba(22, 160, 133, 0.2);
}

.contact-icon {
  font-size: 1.5rem;
  color: var(--smart-factory-color);
}

.themes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.theme-card {
  background: rgba(22, 160, 133, 0.05);
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid var(--smart-factory-color);
  transition: var(--transition);
}

.theme-card:hover {
  background: rgba(22, 160, 133, 0.1);
  transform: translateY(-3px);
}

.competences-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.competence-card {
  background: rgba(41, 128, 185, 0.05);
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid var(--iot-color);
  transition: var(--transition);
}

.competence-card:hover {
  background: rgba(41, 128, 185, 0.1);
  transform: translateX(8px);
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
    <h1>Usine Connectée</h1>
    <p class="subtitle">Concepts d'usine connectée et systèmes IoT industriels</p>
    <div class="hero-badges">
      <span class="hero-badge">🏢 DU-825250</span>
      <span class="hero-badge">⏱️ 10h CM</span>
      <span class="hero-badge">🎧 Graduate</span>
      <span class="hero-badge">📅 Semestre 5</span>
    </div>
  </div>
</div>

<nav class="course-nav">
  <div class="nav-links">
    <a href="#objectifs" class="nav-link">🎧 Objectifs</a>
    <a href="#programme" class="nav-link">📚 Programme</a>
    <a href="#themes" class="nav-link">📈 Thèmes</a>
    <a href="#competences" class="nav-link">🔧 Compétences</a>
    <a href="#evaluation" class="nav-link">📊 Évaluation</a>
    <a href="#ressources" class="nav-link">💾 Ressources</a>
    <a href="#contact" class="nav-link">📞 Contact</a>
  </div>
</nav>

<div class="section-card" id="description">
  <div class="section-header">
    <div class="section-icon">🏢</div>
    <h2 class="section-title">Description du cours</h2>
  </div>
  
  <p class="lead">Ce cours explore les concepts d'usine connectée, l'intégration IoT et les systèmes de fabrication intelligente avec un focus sur les applications industrielles. Les étudiants découvriront comment les technologies numériques transforment les processus de production et créent de nouvelles opportunités d'optimisation.</p>
  
  <div class="info-box">
    <strong>🎆 Prérequis:</strong> Connaissances de base en automatique, réseaux industriels et informatique. Une familiarité avec les concepts de l'Industrie 4.0 est recommandée.
  </div>
</div>

<div class="section-card" id="objectifs">
  <div class="section-header">
    <div class="section-icon">🎧</div>
    <h2 class="section-title">Objectifs pédagogiques</h2>
  </div>
  
  <div class="objectives-grid">
    <div class="objective-card">
      <h4>🏢 Concepts d'usine connectée</h4>
      <p>Maîtriser les principes fondamentaux des usines connectées et leur architecture technologique.</p>
    </div>
    
    <div class="objective-card">
      <h4>📱 Technologies IoT industrielles</h4>
      <p>Comprendre et appliquer les technologies IoT spécifiques au domaine industriel.</p>
    </div>
    
    <div class="objective-card">
      <h4>📊 Analyse de données</h4>
      <p>Analyser et exploiter les données générées par les systèmes industriels connectés.</p>
    </div>
    
    <div class="objective-card">
      <h4>🔒 Sécurité industrielle</h4>
      <p>Évaluer et intégrer les aspects de cybersécurité dans les environnements industriels connectés.</p>
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
      <h4>🔍 Séances 1-2: Fondamentaux de l'usine connectée</h4>
      <ul>
        <li>Evolution de l'industrie : de 1.0 à 4.0</li>
        <li>Architecture des systèmes industriels connectés</li>
        <li>Modèles de référence (RAMI 4.0, IIRA)</li>
        <li>Enjeux et bénéfices de la connectivité</li>
      </ul>
      <p><strong>Durée:</strong> 3h CM</p>
    </div>
    
    <div class="timeline-item">
      <h4>📱 Séances 3-4: IoT industriel (IIoT)</h4>
      <ul>
        <li>Capteurs et actionneurs intelligents</li>
        <li>Protocoles de communication industriels</li>
        <li>Gateways et edge computing</li>
        <li>Plateformes IoT et cloud industriel</li>
      </ul>
      <p><strong>Durée:</strong> 3h CM</p>
    </div>
    
    <div class="timeline-item">
      <h4>📊 Séances 5-6: Données et intelligence artificielle</h4>
      <ul>
        <li>Big data industriel et analytics</li>
        <li>Maintenance prédictive et qualité 4.0</li>
        <li>IA et apprentissage automatique</li>
        <li>Jumeaux numériques (Digital Twins)</li>
      </ul>
      <p><strong>Durée:</strong> 2h CM</p>
    </div>
    
    <div class="timeline-item">
      <h4>🔒 Séance 7: Sécurité et défis</h4>
      <ul>
        <li>Cybersécurité dans l'industrie 4.0</li>
        <li>Protection des données industrielles</li>
        <li>Défis organisationnels et humains</li>
        <li>Perspectives d'avenir et tendances</li>
      </ul>
      <p><strong>Durée:</strong> 2h CM</p>
    </div>
  </div>
</div>

<div class="section-card" id="themes">
  <div class="section-header">
    <div class="section-icon">📈</div>
    <h2 class="section-title">Thèmes abordés</h2>
  </div>
  
  <div class="themes-grid">
    <div class="theme-card">
      <h4>🏢 Concepts Industry 4.0</h4>
      <p>Principes fondamentaux, architectures de référence et modèles d'organisation des usines connectées.</p>
    </div>
    
    <div class="theme-card">
      <h4>📱 IoT industriel</h4>
      <p>Technologies, protocoles, capteurs intelligents et infrastructures de communication pour l'industrie.</p>
    </div>
    
    <div class="theme-card">
      <h4>🔗 Intégration systèmes</h4>
      <p>Méthodes d'intégration des systèmes de fabrication intelligente et interopérabilité.</p>
    </div>
    
    <div class="theme-card">
      <h4>📊 Analyse de données</h4>
      <p>Big data industriel, analytics avancés, machine learning et intelligence artificielle appliquée.</p>
    </div>
    
    <div class="theme-card">
      <h4>🔒 Cybersécurité</h4>
      <p>Sécurité des systèmes industriels connectés, protection des données et gestion des risques.</p>
    </div>
  </div>
</div>

<div class="section-card" id="competences">
  <div class="section-header">
    <div class="section-icon">🔧</div>
    <h2 class="section-title">Compétences développées</h2>
  </div>
  
  <div class="competences-grid">
    <div class="competence-card">
      <h4>🔧 Conception systèmes IoT</h4>
      <p>Capacité à concevoir et dimensionner des systèmes IoT industriels adaptés aux besoins spécifiques.</p>
    </div>
    
    <div class="competence-card">
      <h4>🔗 Intégration technologique</h4>
      <p>Maîtrise de l'intégration de capteurs, réseaux et systèmes dans l'environnement industriel.</p>
    </div>
    
    <div class="competence-card">
      <h4>📊 Analyse données production</h4>
      <p>Compétence en analyse et exploitation des données de production pour l'optimisation des processus.</p>
    </div>
    
    <div class="competence-card">
      <h4>⚙️ Optimisation processus</h4>
      <p>Capacité à optimiser les processus industriels grâce aux technologies de l'usine connectée.</p>
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
      <span class="eval-percentage">70%</span>
      <h4 class="eval-title">Exposé</h4>
      <p class="eval-description">Présentation d'un projet d'usine connectée ou d'étude de cas industriel</p>
    </div>
    
    <div class="eval-item">
      <span class="eval-percentage">30%</span>
      <h4 class="eval-title">Note de classe</h4>
      <p class="eval-description">Participation active, discussions et évaluations continues sur les concepts abordés</p>
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
      <h4>Documentation spécialisée</h4>
      <ul>
        <li>Guides et standards industriels (VDI, IEC)</li>
        <li>Livres blancs et rapports d'expertise</li>
        <li>Documentations techniques des solutions</li>
        <li>Études de cas réels d'usines connectées</li>
      </ul>
    </div>
    
    <div class="resource-card">
      <div class="resource-icon">💻</div>
      <h4>Outils et plateformes</h4>
      <ul>
        <li>Simulateurs d'usines connectées</li>
        <li>Plateformes IoT industrielles</li>
        <li>Outils de modélisation et jumeaux numériques</li>
        <li>Solutions d'analyse de données</li>
      </ul>
    </div>
    
    <div class="resource-card">
      <div class="resource-icon">🌐</div>
      <h4>Veille technologique</h4>
      <ul>
        <li>Actualités de l'industrie 4.0</li>
        <li>Retours d'expérience industriels</li>
        <li>Conférences et salons spécialisés</li>
        <li>Communautés professionnelles</li>
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
        <strong>Lieu des cours</strong><br>
        Centre de Recherche Industrie 4.0, UFR Sciences
      </div>
    </div>
    
    <div class="contact-item">
      <div class="contact-icon">🕰️</div>
      <div>
        <strong>Permanences</strong><br>
        Mardis 9h-11h ou sur rendez-vous par email
      </div>
    </div>
  </div>
</div>
