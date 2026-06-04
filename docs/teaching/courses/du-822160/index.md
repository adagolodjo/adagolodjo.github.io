---
layout: page
title: "DU-822160 Introduction à la Sécurité Informatique"
subtitle: "Fondamentaux de la cybersécurité et protection des données"
permalink: /teaching/courses/du-822160/
image: /assets/images/projects/securite-informatique.jpg
---

<style>
:root {
  --primary-color: #2c3e50;
  --secondary-color: #3498db;
  --accent-color: #e74c3c;
  --success-color: #27ae60;
  --warning-color: #f39c12;
  --security-color: #8e44ad;
  --danger-color: #e74c3c;
  --light-bg: #f8f9fa;
  --card-shadow: 0 4px 20px rgba(0,0,0,0.08);
  --card-shadow-hover: 0 12px 40px rgba(0,0,0,0.15);
  --border-radius: 16px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.course-hero {
  background: linear-gradient(135deg, var(--security-color) 0%, var(--danger-color) 100%);
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
  color: var(--security-color);
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
  border-left: 4px solid var(--security-color);
  padding: 1.5rem;
  border-radius: 8px;
  margin: 2rem 0;
}

.warning-box {
  background: linear-gradient(135deg, #f8d7da, #f5c6cb);
  border-left: 4px solid var(--danger-color);
  padding: 1.5rem;
  border-radius: 8px;
  margin: 2rem 0;
  border: 1px solid rgba(231, 76, 60, 0.2);
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
  background: linear-gradient(90deg, var(--security-color), var(--danger-color));
}

.eval-item:hover {
  transform: translateY(-8px);
  box-shadow: var(--card-shadow-hover);
}

.eval-percentage {
  font-size: 3rem;
  font-weight: 700;
  color: var(--security-color);
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
  background: rgba(142, 68, 173, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid rgba(142, 68, 173, 0.2);
  transition: var(--transition);
}

.resource-card:hover {
  background: rgba(142, 68, 173, 0.2);
  transform: translateY(-5px);
}

.resource-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--security-color);
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
  background: rgba(142, 68, 173, 0.1);
  border-radius: 12px;
  transition: var(--transition);
}

.contact-item:hover {
  background: rgba(142, 68, 173, 0.2);
}

.contact-icon {
  font-size: 1.5rem;
  color: var(--security-color);
}

.security-topics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.security-topic {
  background: rgba(142, 68, 173, 0.05);
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid var(--security-color);
  transition: var(--transition);
}

.security-topic:hover {
  background: rgba(142, 68, 173, 0.1);
  transform: translateY(-3px);
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
    <h1>Introduction à la Sécurité Informatique</h1>
    <p class="subtitle">Fondamentaux de la cybersécurité et protection des données</p>
    <div class="hero-badges">
      <span class="hero-badge">🔒 DU-822160</span>
      <span class="hero-badge">⏱️ 6h CM</span>
      <span class="hero-badge">🎧 Graduate</span>
      <span class="hero-badge">🔮 Semestre 2</span>
    </div>
  </div>
</div>

<nav class="course-nav">
  <div class="nav-links">
    <a href="#objectifs" class="nav-link">🎧 Objectifs</a>
    <a href="#programme" class="nav-link">📚 Programme</a>
    <a href="#themes" class="nav-link">🔮 Thèmes</a>
    <a href="#evaluation" class="nav-link">📊 Évaluation</a>
    <a href="#ressources" class="nav-link">💾 Ressources</a>
    <a href="#contact" class="nav-link">📞 Contact</a>
  </div>
</nav>

<div class="section-card" id="description">
  <div class="section-header">
    <div class="section-icon">🔒</div>
    <h2 class="section-title">Description du cours</h2>
  </div>
  
  <p class="lead">Ce cours propose une introduction aux fondamentaux de la cybersécurité, couvrant la protection des données, les systèmes d'authentification et les meilleures pratiques de sécurité informatique. Les étudiants acquerront les connaissances de base nécessaires pour comprendre et évaluer les risques de sécurité dans les environnements numériques.</p>
  
  <div class="warning-box">
    <strong>⚠️ Attention:</strong> Ce cours traite de concepts de sécurité à des fins éducatives uniquement. Toute utilisation malveillante des techniques présentées est strictement interdite et contraire à l'éthique professionnelle.
  </div>
  
  <div class="info-box">
    <strong>🎆 Prérequis:</strong> Connaissances de base en informatique, réseaux et systèmes d'exploitation. Une familiarité avec les concepts de programmation est recommandée.
  </div>
</div>

<div class="section-card" id="objectifs">
  <div class="section-header">
    <div class="section-icon">🎧</div>
    <h2 class="section-title">Objectifs pédagogiques</h2>
  </div>
  
  <div class="objectives-grid">
    <div class="objective-card">
      <h4>🔮 Comprendre les menaces</h4>
      <p>Identifier et analyser les principales menaces de sécurité informatique et leurs impacts potentiels.</p>
    </div>
    
    <div class="objective-card">
      <h4>🔐 Maîtriser l'authentification</h4>
      <p>Comprendre les mécanismes d'authentification, d'autorisation et de gestion des identités numériques.</p>
    </div>
    
    <div class="objective-card">
      <h4>🛡️ Appliquer la protection</h4>
      <p>Mettre en œuvre des mesures de protection des données et des systèmes d'information.</p>
    </div>
    
    <div class="objective-card">
      <h4>📈 Évaluer les risques</h4>
      <p>Effectuer des évaluations de risques de sécurité et proposer des solutions appropriées.</p>
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
      <h4>🔍 Séance 1: Introduction à la cybersécurité</h4>
      <ul>
        <li>Définitions et enjeux de la sécurité informatique</li>
        <li>Panorama des menaces actuelles</li>
        <li>Principaux acteurs et motivations</li>
        <li>Cadre légal et réglementaire (RGPD, etc.)</li>
      </ul>
      <p><strong>Durée:</strong> 2h CM</p>
    </div>
    
    <div class="timeline-item">
      <h4>🔐 Séance 2: Authentification et cryptographie</h4>
      <ul>
        <li>Principes de l'authentification forte</li>
        <li>Gestion des mots de passe et des clés</li>
        <li>Cryptographie symétrique et asymétrique</li>
        <li>Certificats numériques et PKI</li>
      </ul>
      <p><strong>Durée:</strong> 2h CM</p>
    </div>
    
    <div class="timeline-item">
      <h4>🛡️ Séance 3: Protection et bonnes pratiques</h4>
      <ul>
        <li>Sécurité des réseaux et pare-feu</li>
        <li>Détection d'intrusion et monitoring</li>
        <li>Sauvegarde et plan de continuité</li>
        <li>Bonnes pratiques organisationnelles</li>
      </ul>
      <p><strong>Durée:</strong> 2h CM</p>
    </div>
  </div>
</div>

<div class="section-card" id="themes">
  <div class="section-header">
    <div class="section-icon">🔮</div>
    <h2 class="section-title">Thèmes abordés</h2>
  </div>
  
  <div class="security-topics">
    <div class="security-topic">
      <h4>🛡️ Fondamentaux de la cybersécurité</h4>
      <p>Concepts de base, terminologie, enjeux économiques et stratégiques de la sécurité informatique.</p>
    </div>
    
    <div class="security-topic">
      <h4>📊 Protection des données</h4>
      <p>Confidentialité, intégrité, disponibilité, anonymisation, pseudonymisation et conformité RGPD.</p>
    </div>
    
    <div class="security-topic">
      <h4>🔑 Authentification et autorisation</h4>
      <p>Mécanismes d'authentification, gestion des identités, contrôle d'accès et single sign-on.</p>
    </div>
    
    <div class="security-topic">
      <h4>🔐 Cryptographie de base</h4>
      <p>Algorithmes de chiffrement, signatures numériques, hachage et applications pratiques.</p>
    </div>
    
    <div class="security-topic">
      <h4>🌐 Sécurité des réseaux</h4>
      <p>Protocoles sécurisés, VPN, pare-feu, détection d'intrusion et analyse de trafic.</p>
    </div>
    
    <div class="security-topic">
      <h4>✅ Bonnes pratiques</h4>
      <p>Politiques de sécurité, sensibilisation utilisateur, gestion des incidents et audits.</p>
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
      <h4 class="eval-title">Devoir Surveillé</h4>
      <p class="eval-description">Épreuve écrite portant sur l'ensemble des concepts abordés en cours</p>
    </div>
    
    <div class="eval-item">
      <span class="eval-percentage">30%</span>
      <h4 class="eval-title">Note de classe</h4>
      <p class="eval-description">Participation active, exercices pratiques et évaluations continues</p>
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
        <li>Supports de cours et présentations</li>
        <li>Guides de bonnes pratiques</li>
        <li>Référentiels de sécurité (ISO 27001, NIST)</li>
        <li>Veille sécurité et actualités</li>
      </ul>
    </div>
    
    <div class="resource-card">
      <div class="resource-icon">🔧</div>
      <h4>Outils et technologies</h4>
      <ul>
        <li>Simulateurs de cyberattaques</li>
        <li>Outils d'analyse de vulnérabilités</li>
        <li>Plateformes de test (machines virtuelles)</li>
        <li>Logiciels de cryptographie</li>
      </ul>
    </div>
    
    <div class="resource-card">
      <div class="resource-icon">📋</div>
      <h4>Ressources complémentaires</h4>
      <ul>
        <li>Études de cas réels d'incidents</li>
        <li>Rapports d'expert et analyses</li>
        <li>Formations en ligne et certifications</li>
        <li>Communautés et forums spécialisés</li>
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
        Amphithéâtre Informatique, UFR Math-Info
      </div>
    </div>
    
    <div class="contact-item">
      <div class="contact-icon">🕰️</div>
      <div>
        <strong>Permanences</strong><br>
        Après les cours ou sur rendez-vous par email
      </div>
    </div>
  </div>
</div>
