---
layout: page
title: Robotique médicale
subtitle: Applications robotiques et simulation pour la santé
permalink: /teaching/courses/modeling-medical-sim/
image: /assets/images/projects/modeling-medical-sim.jpg
---

<style>
:root {
  --primary-color: #2c3e50;
  --secondary-color: #3498db;
  --accent-color: #e74c3c;
  --success-color: #27ae60;
  --warning-color: #f39c12;
  --simulation-color: #16a085;
  --light-bg: #f8f9fa;
  --card-shadow: 0 4px 20px rgba(0,0,0,0.08);
  --card-shadow-hover: 0 12px 40px rgba(0,0,0,0.15);
  --border-radius: 16px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.course-hero {
  background: linear-gradient(135deg, var(--simulation-color) 0%, var(--secondary-color) 100%);
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
  color: var(--simulation-color);
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
  color: var(--simulation-color);
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
  background: linear-gradient(90deg, var(--simulation-color), var(--secondary-color));
}

.eval-item:hover {
  transform: translateY(-8px);
  box-shadow: var(--card-shadow-hover);
}

.eval-percentage {
  font-size: 3rem;
  font-weight: 700;
  color: var(--simulation-color);
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
  color: var(--simulation-color);
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
  background: var(--simulation-color);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.info-box {
  background: linear-gradient(135deg, #e8f8f5, #d5f4e8);
  border-left: 4px solid var(--simulation-color);
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
    <h1>🏥 Robotique médicale</h1>
    <p class="subtitle">Applications robotiques et simulation pour la santé</p>
    <div class="hero-badges">
      <span class="hero-badge">🎓 Niveau Graduate</span>
      <span class="hero-badge">📅 1er octobre 2024</span>
      <span class="hero-badge">🤖 Robotique médicale</span>
      <span class="hero-badge">🏥 Applications médicales</span>
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
    Ce cours avancé explore les principes et applications de la robotique médicale : robots chirurgicaux, systèmes de rééducation et dispositifs d'assistance. Les étudiants apprendront comment modéliser, contrôler et simuler ces systèmes pour la formation médicale, la planification d'interventions et l'aide au geste thérapeutique.
  </p>

  <div class="info-box">
    <h4>📊 Informations générales</h4>
    <p><strong>Code du cours :</strong> ROBOTIQUE-MEDICALE<br>
    <strong>Niveau :</strong> Graduate<br>
    <strong>Semestre :</strong> Automne 2024<br>
    <strong>Date de début :</strong> 1er octobre 2024<br>
    <strong>Évaluation :</strong> Exposé, Note de Classe</p>
  </div>

  <h3 style="color: var(--primary-color); margin-bottom: 1.5rem;">✅ Prérequis</h3>
  
  <div class="prerequisite-item">
    <div class="prerequisite-icon">🧮</div>
    <div>
      <strong>Solides bases mathématiques</strong>
      <p style="margin: 0; color: #666; font-size: 0.95rem;">Algèbre linéaire, calcul différentiel, méthodes numériques</p>
    </div>
  </div>
  
  <div class="prerequisite-item">
    <div class="prerequisite-icon">💻</div>
    <div>
      <strong>Expérience en programmation</strong>
      <p style="margin: 0; color: #666; font-size: 0.95rem;">C++ de préférence, expérience en développement algorithmique</p>
    </div>
  </div>

  <div class="prerequisite-item">
    <div class="prerequisite-icon">⚡</div>
    <div>
      <strong>Connaissances en physique</strong>
      <p style="margin: 0; color: #666; font-size: 0.95rem;">Mécanique de base, principes physiques fondamentaux</p>
    </div>
  </div>

  <div class="prerequisite-item">
    <div class="prerequisite-icon">🎮</div>
    <div>
      <strong>Concepts d'infographie</strong>
      <p style="margin: 0; color: #666; font-size: 0.95rem;">Familiarité avec les concepts de base en infographie 3D</p>
    </div>
  </div>

  <div class="skills-tags">
    <span class="skill-tag">Robotique chirurgicale</span>
    <span class="skill-tag">Robots de rééducation</span>
    <span class="skill-tag">Contrôle et commande</span>
    <span class="skill-tag">Perception & vision</span>
    <span class="skill-tag">IA pour la santé</span>
    <span class="skill-tag">Simulation temps réel</span>
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
      <h4>🏥 Comprendre la robotique médicale</h4>
      <p>Maîtriser les principes fondamentaux des robots médicaux et de leurs domaines d'application.</p>
    </div>
    <div class="objective-card">
      <h4>🧬 Modéliser l'interaction avec le patient</h4>
      <p>Développer des modèles adaptés aux interactions robot–patient (tissus, mouvements, contraintes de sécurité).</p>
    </div>
    <div class="objective-card">
      <h4>⚡ Concevoir des lois de commande</h4>
      <p>Concevoir et analyser des lois de commande pour des robots médicaux sûrs et performants.</p>
    </div>
    <div class="objective-card">
      <h4>⚖️ Évaluer les compromis</h4>
      <p>Analyser les compromis entre précision, temps réel, ergonomie et sécurité dans les scénarios médicaux.</p>
    </div>
    <div class="objective-card">
      <h4>🎯 Appliquer aux domaines médicaux</h4>
      <p>Mettre en œuvre des solutions robotiques en chirurgie, rééducation et assistance au geste.</p>
    </div>
    <div class="objective-card">
      <h4>🔬 Valider les systèmes</h4>
      <p>Développer des méthodes de test, validation et évaluation clinique de systèmes robotiques médicaux.</p>
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
      <div class="timeline-week">Module 1</div>
      <div class="timeline-content">
        <h4>Fondements de la robotique médicale</h4>
        <div class="timeline-details">Typologie des robots médicaux, architecture générale, exigences cliniques et contraintes de sécurité.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-week">Module 2</div>
      <div class="timeline-content">
        <h4>Capteurs, perception et interaction</h4>
        <div class="timeline-details">Capteurs de position et d'effort, vision par ordinateur, interfaces homme–robot et retour haptique.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-week">Module 3</div>
      <div class="timeline-content">
        <h4>Commande et temps réel</h4>
        <div class="timeline-details">Loi de commande, contrôle en position/force, contraintes temps réel et sûreté de fonctionnement.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-week">Module 4</div>
      <div class="timeline-content">
        <h4>Applications cliniques et simulation</h4>
        <div class="timeline-details">Cas d'usage en chirurgie, rééducation et assistance, appui sur la simulation pour la conception et la formation.</div>
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
      <span class="eval-percentage">70%</span>
      <div class="eval-title">Exposé</div>
      <div class="eval-description">Présentation d'un sujet de recherche ou d'un projet lié à la robotique médicale avec démonstration technique.</div>
    </div>
    <div class="eval-item">
      <span class="eval-percentage">30%</span>
      <div class="eval-title">Note de Classe</div>
      <div class="eval-description">Participation active dans les discussions et séances pratiques, qualité des interventions.</div>
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
      <div class="resource-icon">🔧</div>
      <h4>Frameworks de simulation</h4>
      <ul>
        <li><a href="https://www.sofa-framework.org" target="_blank">SOFA Framework</a></li>
        <li><a href="#" target="_blank">FEBio (biomécanique)</a></li>
        <li><a href="#" target="_blank">Environnements simulation médicale</a></li>
      </ul>
    </div>
    <div class="resource-card">
      <div class="resource-icon">📖</div>
      <h4>Matériel pédagogique</h4>
      <ul>
        <li><a href="https://www.notion.so/Simulation-M-dicale-1944d150dfba80f0a850cd2be969c1ff" target="_blank">Supports de cours sur Notion</a></li>
        <li><a href="#" target="_blank">Littérature scientifique</a></li>
        <li><a href="#" target="_blank">Documentation SOFA</a></li>
      </ul>
    </div>
    <div class="resource-card">
      <div class="resource-icon">💻</div>
      <h4>Bibliothèques logicielles</h4>
      <ul>
        <li>Bibliothèques de calcul scientifique</li>
        <li>Outils de développement GPU</li>
        <li>Frameworks de visualisation 3D</li>
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
