---
layout: page
title: Logique/Informatique Industrielle
subtitle: Systèmes logiques et informatiques pour l'automatisation
permalink: /teaching/courses/logique-industrielle/
image: /assets/images/projects/logique-industrielle.jpg
---

<style>
:root {
  --primary-color: #2c3e50;
  --secondary-color: #3498db;
  --accent-color: #e74c3c;
  --success-color: #27ae60;
  --warning-color: #f39c12;
  --industrial-color: #34495e;
  --light-bg: #f8f9fa;
  --card-shadow: 0 4px 20px rgba(0,0,0,0.08);
  --card-shadow-hover: 0 12px 40px rgba(0,0,0,0.15);
  --border-radius: 16px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.course-hero {
  background: linear-gradient(135deg, var(--industrial-color) 0%, var(--secondary-color) 100%);
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
  color: var(--industrial-color);
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
  color: var(--industrial-color);
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
  background: linear-gradient(90deg, var(--industrial-color), var(--secondary-color));
}

.eval-item:hover {
  transform: translateY(-8px);
  box-shadow: var(--card-shadow-hover);
}

.eval-percentage {
  font-size: 3rem;
  font-weight: 700;
  color: var(--industrial-color);
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

.resources-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 3rem;
  border-radius: var(--border-radius);
  margin: 3rem 0;
  text-align: center;
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

.resource-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  color: var(--industrial-color);
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  margin-top: 1rem;
  transition: var(--transition);
}

.resource-link:hover {
  background: #f0f0f0;
  transform: scale(1.05);
}

.contact-section {
  background: var(--primary-color);
  color: white;
  padding: 3rem;
  border-radius: var(--border-radius);
  margin-top: 3rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 2rem;
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

.office-hours {
  background: rgba(255,255,255,0.1);
  padding: 2rem;
  border-radius: 16px;
  border-left: 4px solid #ffd700;
}

.office-hours h4 {
  color: white;
  margin-bottom: 1rem;
}

.office-hours-list {
  list-style: none;
  padding: 0;
}

.office-hours-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.office-hours-list li:last-child {
  border-bottom: none;
}

.skills-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;
}

.skill-tag {
  background: var(--secondary-color);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.bibliography-section {
  background: var(--light-bg);
  padding: 2rem;
  border-radius: 12px;
  margin-top: 2rem;
}

.bibliography-section h4 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.bibliography-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.bibliography-category {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.bibliography-category h5 {
  color: var(--industrial-color);
  margin-bottom: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.bibliography-category ul {
  list-style: none;
  padding: 0;
}

.bibliography-category li {
  margin-bottom: 0.75rem;
  font-size: 0.95rem;
  line-height: 1.4;
  color: #555;
}

.info-box {
  background: linear-gradient(135deg, #e3f2fd, #bbdefb);
  border-left: 4px solid var(--secondary-color);
  padding: 1.5rem;
  border-radius: 8px;
  margin: 2rem 0;
}

.info-box h4 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.practical-info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.practical-card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: var(--card-shadow);
  transition: var(--transition);
}

.practical-card:hover {
  box-shadow: var(--card-shadow-hover);
}

.practical-card h4 {
  color: var(--industrial-color);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
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
  
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .timeline {
    padding-left: 1rem;
  }
  
  .timeline-item {
    margin-left: 1rem;
  }

  .bibliography-grid,
  .practical-info-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="course-hero">
  <div class="course-hero-content">
    <h1>⚙️ Logique/Informatique Industrielle</h1>
    <p class="subtitle">Systèmes logiques et informatiques pour l'automatisation industrielle</p>
    <div class="hero-badges">
      <span class="hero-badge">📚 Niveau Licence</span>
      <span class="hero-badge">⏱️ 27.5h CM + 12h TP</span>
      <span class="hero-badge">🎯 Automatisation</span>
      <span class="hero-badge">👥 Systèmes industriels</span>
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
    Ce cours présente les fondements de la logique industrielle et des systèmes informatiques dédiés à l'automatisation. Les étudiants découvriront les automates programmables industriels (API), les systèmes SCADA, et les protocoles de communication industriels. Une forte composante pratique permet de maîtriser les outils de programmation et de configuration des systèmes automatisés.
  </p>

  <div class="info-box">
    <h4>📊 Informations générales</h4>
    <p><strong>Durée :</strong> 27.5h de cours magistraux + 12h de travaux pratiques<br>
    <strong>Volume de travail personnel estimé :</strong> 40-50 heures<br>
    <strong>Langue d'enseignement :</strong> Français<br>
    <strong>Évaluation :</strong> DS, Note de Classe, Note de TP</p>
  </div>

  <h3 style="color: var(--primary-color); margin-bottom: 1.5rem;">✅ Prérequis</h3>
  
  <div class="prerequisite-item">
    <div class="prerequisite-icon">⚡</div>
    <div>
      <strong>Électrotechnique de base</strong>
      <p style="margin: 0; color: #666; font-size: 0.95rem;">Notions d'électricité, schémas électriques, composants de base</p>
    </div>
  </div>
  
  <div class="prerequisite-item">
    <div class="prerequisite-icon">💻</div>
    <div>
      <strong>Algorithmique</strong>
      <p style="margin: 0; color: #666; font-size: 0.95rem;">Bases de la programmation et de la logique algorithmique</p>
    </div>
  </div>

  <div class="prerequisite-item">
    <div class="prerequisite-icon">🏭</div>
    <div>
      <strong>Connaissances industrielles</strong>
      <p style="margin: 0; color: #666; font-size: 0.95rem;">Notions de base sur les processus industriels et la production</p>
    </div>
  </div>

  <div class="skills-tags">
    <span class="skill-tag">Automates programmables</span>
    <span class="skill-tag">SCADA</span>
    <span class="skill-tag">Ladder</span>
    <span class="skill-tag">Supervision industrielle</span>
    <span class="skill-tag">Protocoles de communication</span>
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
      <h4>🔧 Comprendre les systèmes automatisés</h4>
      <p>Maîtriser l'architecture et le fonctionnement des systèmes d'automatisation industrielle.</p>
    </div>
    <div class="objective-card">
      <h4>⚙️ Programmer des automates</h4>
      <p>Concevoir et implémenter des programmes pour automates programmables industriels (API/PLC).</p>
    </div>
    <div class="objective-card">
      <h4>📡 Configurer les communications</h4>
      <p>Mettre en œuvre les protocoles de communication industriels (Modbus, Profibus, Ethernet/IP).</p>
    </div>
    <div class="objective-card">
      <h4>🖥️ Développer des interfaces HMI</h4>
      <p>Créer des interfaces homme-machine pour la supervision et le contrôle des processus.</p>
    </div>
    <div class="objective-card">
      <h4>🔍 Diagnostiquer et maintenir</h4>
      <p>Identifier les pannes et assurer la maintenance préventive des systèmes automatisés.</p>
    </div>
    <div class="objective-card">
      <h4>📊 Optimiser les performances</h4>
      <p>Analyser et améliorer l'efficacité des systèmes de production automatisés.</p>
    </div>
  </div>
</section>

<section id="planning" class="section-card">
  <div class="section-header">
    <div class="section-icon">📅</div>
    <h2 class="section-title">Planning du cours</h2>
  </div>
  <div class="timeline">
    <div class="timeline-item">
      <div class="timeline-week">Semaines 1-2</div>
      <div class="timeline-content">
        <h4>Introduction aux systèmes automatisés</h4>
        <div class="timeline-details">Architecture des systèmes, capteurs, actionneurs, automates programmables.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-week">Semaines 3-4</div>
      <div class="timeline-content">
        <h4>Programmation Ladder et Grafcet</h4>
        <div class="timeline-details">Langages de programmation des API, structures de programmes, fonctions logiques.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-week">Semaines 5-6</div>
      <div class="timeline-content">
        <h4>Communications industrielles</h4>
        <div class="timeline-details">Protocoles Modbus, Profibus, Ethernet industriel, réseaux de terrain.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-week">Semaines 7-8</div>
      <div class="timeline-content">
        <h4>Supervision et HMI</h4>
        <div class="timeline-details">Systèmes SCADA, interfaces homme-machine, alarmes et historiques.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-week">Semaines 9-10</div>
      <div class="timeline-content">
        <h4>Projet pratique</h4>
        <div class="timeline-details">Conception et réalisation d'un système automatisé complet avec supervision.</div>
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
      <span class="eval-percentage">40%</span>
      <div class="eval-title">Devoir Surveillé (DS)</div>
      <div class="eval-description">Examen écrit sur les concepts théoriques et la programmation d'automates.</div>
    </div>
    <div class="eval-item">
      <span class="eval-percentage">35%</span>
      <div class="eval-title">Note de TP</div>
      <div class="eval-description">Évaluation des travaux pratiques, projets et réalisations techniques.</div>
    </div>
    <div class="eval-item">
      <span class="eval-percentage">25%</span>
      <div class="eval-title">Note de Classe</div>
      <div class="eval-description">Participation, interrogations, qualité du travail en séance.</div>
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
      <h4>Manuels de référence</h4>
      <ul>
        <li><a href="#" target="_blank">Automates programmables industriels - Dunod</a></li>
        <li><a href="#" target="_blank">Systèmes automatisés - Hachette Technique</a></li>
      </ul>
    </div>
    <div class="resource-card">
      <div class="resource-icon">💻</div>
      <h4>Logiciels utilisés</h4>
      <ul>
        <li><a href="#" target="_blank">TIA Portal (Siemens)</a></li>
        <li><a href="#" target="_blank">RSLogix 5000 (Rockwell)</a></li>
      </ul>
    </div>
    <div class="resource-card">
      <div class="resource-icon">🔧</div>
      <h4>Documentation technique</h4>
      <ul>
        <li><a href="#" target="_blank">Protocoles industriels</a></li>
        <li><a href="#" target="_blank">Normes IEC 61131</a></li>
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
