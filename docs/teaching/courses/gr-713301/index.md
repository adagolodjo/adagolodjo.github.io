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
  
  <p class="lead">Ce cours pratique d'automatique met l'accent sur l'identification paramétrique et la régulation temps réel de systèmes physiques. Les étudiants travaillent sur trois types de procédés industriels : thermique (chauffage d'air), hydraulique (régulation de niveau) et électromécanique (moteur CC).</p>
  
  <div class="info-box">
    <strong>🎯 Organisation :</strong> Formation en binômes avec rotation sur les 3 procédés. Première séance dédiée au développement d'outils MATLAB d'identification, puis 3 séances de TP temps réel sur maquettes industrielles avec système d'acquisition Speedgoat.
  </div>
</div>

<div class="section-card" id="objectifs">
  <div class="section-header">
    <div class="section-icon">🎧</div>
    <h2 class="section-title">Objectifs pédagogiques</h2>
  </div>
  
  <div class="objectives-grid">
    <div class="objective-card">
      <h4>🔧 Identification de systèmes</h4>
      <p>Développer et valider des méthodes d'identification paramétrique sur des systèmes physiques réels (thermique, hydraulique, électromécanique).</p>
    </div>
    
    <div class="objective-card">
      <h4>📊 Régulation temps réel</h4>
      <p>Concevoir et implémenter des régulateurs P, PI, PID sur des procédés industriels avec système d'acquisition Speedgoat.</p>
    </div>
    
    <div class="objective-card">
      <h4>🎛️ Analyse de performances</h4>
      <p>Évaluer la précision, rapidité, robustesse et stabilité des systèmes régulés en conditions réelles.</p>
    </div>
    
    <div class="objective-card">
      <h4>💻 Outils professionnels</h4>
      <p>Maîtriser MATLAB/Simulink pour l'identification, la simulation et la commande temps réel de systèmes automatiques.</p>
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
      <h4>🔍 TP 1: Identification et outils de simulation</h4>
      <ul>
        <li>Développement d'outils d'identification paramétrique en MATLAB</li>
        <li>Méthodes graphiques : premier ordre et méthode de Broïda</li>
        <li>Validation par simulation sous Simulink</li>
        <li>Functions : extract(), rech_ech(), interpole(), p_ordre(), broida()</li>
      </ul>
      <p><strong>Durée:</strong> 8h TP • <strong>Lieu:</strong> Salle B302 (simulation)</p>
    </div>
    
    <div class="timeline-item">
      <h4>🌡️ TP 2: Régulation thermique</h4>
      <ul>
        <li>Processus de chauffage d'air avec résistance et ventilation</li>
        <li>Identification avec retard pur et constante de temps</li>
        <li>Régulation analogique P et numérique PI</li>
        <li>Régulateur de Smith pour compensation du retard</li>
      </ul>
      <p><strong>Durée:</strong> 8h TP • <strong>Lieu:</strong> Salle C008 (temps réel)</p>
    </div>
    
    <div class="timeline-item">
      <h4>💧 TP 3: Régulation de niveau</h4>
      <ul>
        <li>Système hydraulique avec pompe et réservoirs</li>
        <li>Identification autour d'un point de fonctionnement</li>
        <li>Régulation PID avec analyse de robustesse</li>
        <li>Tests de rejet de perturbation et adaptabilité</li>
      </ul>
      <p><strong>Durée:</strong> 8h TP • <strong>Lieu:</strong> Salle C008 (temps réel)</p>
    </div>
    
    <div class="timeline-item">
      <h4>⚡ TP 4: Régulation de vitesse moteur</h4>
      <ul>
        <li>Moteur à courant continu avec génératrice tachymétrique</li>
        <li>Régulateurs proportionnel (P) et proportionnel-intégral (PI)</li>
        <li>Analyse de l'effet de la charge et tests de robustesse</li>
        <li>Validation théorique et optimisation des performances</li>
      </ul>
      <p><strong>Durée:</strong> 8h TP • <strong>Lieu:</strong> Salle C008 (temps réel)</p>
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
      <h4 class="eval-title">Évaluations pratiques</h4>
      <p class="eval-description">Validation des manipulations expérimentales et analyses de résultats (séances 2, 3, 4) - <strong>Note collective</strong></p>
    </div>
    
    <div class="eval-item">
      <span class="eval-percentage">25%</span>
      <h4 class="eval-title">Outils d'identification</h4>
      <p class="eval-description">Développement et validation des fonctions MATLAB (séance 1) - <strong>Note collective</strong></p>
    </div>
    
    <div class="eval-item">
      <span class="eval-percentage">15%</span>
      <h4 class="eval-title">Implication en séance</h4>
      <p class="eval-description">Participation active, collaboration efficace, concentration pendant le TP - <strong>Note individuelle</strong></p>
    </div>
  </div>
  
  <div class="info-box" style="margin-top: 1.5rem; background: linear-gradient(135deg, #fff3cd, #ffeaa7); border-left: 4px solid #e17055;">
    <strong>⚠️ Règles importantes :</strong><br>
    • <strong>Temps passé sur le téléphone = temps non consacré au TP</strong><br>
    • Interrogations possibles en début de séance pour vérifier la préparation<br>
    • Notes pratiques collectives par binôme, interrogations individuelles<br>
    • Participation active requise : collaboration efficace et concentration soutenue
  </div>
  
  <div class="info-box" style="margin-top: 1rem;">
    <strong>📋 Modalités spéciales :</strong> Les résultats d'identification de la séance 2 doivent être partagés sur Moodle® dès la fin de séance pour permettre aux autres binômes de paramétrer leurs régulateurs. Organisation en rotation : chaque binôme effectue l'identification sur un procédé et la régulation sur les deux autres.
  </div>
</div>

<div class="section-card" id="ressources">
  <div class="section-header">
    <div class="section-icon">💾</div>
    <h2 class="section-title">Ressources pédagogiques</h2>
  </div>
  
  <div class="resources-grid">
    <div class="resource-card">
      <div class="resource-icon">🔧</div>
      <h4>Systèmes expérimentaux</h4>
      <ul>
        <li><strong>Processus thermique :</strong> Chauffage d'air avec ventilation</li>
        <li><strong>Système hydraulique :</strong> Pompe, réservoirs et capteurs de niveau</li>
        <li><strong>Moteur électrique :</strong> Machine CC avec génératrice tachymétrique</li>
        <li><strong>Instrumentation :</strong> Capteurs 4-20mA, interface analogique</li>
      </ul>
    </div>
    
    <div class="resource-card">
      <div class="resource-icon">💻</div>
      <h4>Logiciels et acquisition</h4>
      <ul>
        <li><strong>MATLAB/Simulink :</strong> Identification et simulation temps réel</li>
        <li><strong>Speedgoat :</strong> Système d'acquisition et contrôle industriel</li>
        <li><strong>Carte SC-2345 :</strong> Interface analogique 4-20mA</li>
        <li><strong>Functions personnalisées :</strong> Outils d'identification développés</li>
      </ul>
    </div>
    
    <div class="resource-card">
      <div class="resource-icon">📄</div>
      <h4>Documentation TP</h4>
      <ul>
        <li><strong>Supports détaillés :</strong> 4 fascicules de TP complets</li>
        <li><strong>Procédures expérimentales :</strong> Protocoles step-by-step</li>
        <li><strong>Méthodes d'identification :</strong> Premier ordre et Broïda</li>
        <li><strong>Consignes sécurité :</strong> Manipulations en conditions réelles</li>
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
        <strong>Lieux des TP</strong><br>
        Salle B302 (Simulation) et C008 (Temps réel)
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
