---
layout: page
title: Initiation à la recherche
subtitle: Découverte de la démarche scientifique
permalink: /teaching/courses/initiation-recherche/
image: /assets/images/projects/initiation-recherche.jpg
---

<style>
:root {
  --primary-color: #2c3e50;
  --secondary-color: #3498db;
  --accent-color: #e74c3c;
  --success-color: #27ae60;
  --warning-color: #f39c12;
  --research-color: #8e44ad;
  --light-bg: #f8f9fa;
  --card-shadow: 0 4px 20px rgba(0,0,0,0.08);
  --card-shadow-hover: 0 12px 40px rgba(0,0,0,0.15);
  --border-radius: 16px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.course-hero {
  background: linear-gradient(135deg, var(--research-color) 0%, var(--secondary-color) 100%);
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
  color: var(--research-color);
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
  color: var(--research-color);
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
  background: linear-gradient(90deg, var(--research-color), var(--secondary-color));
}

.eval-item:hover {
  transform: translateY(-8px);
  box-shadow: var(--card-shadow-hover);
}

.eval-percentage {
  font-size: 3rem;
  font-weight: 700;
  color: var(--research-color);
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
  color: var(--research-color);
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
  color: var(--research-color);
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
  color: var(--research-color);
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
    <h1>🔬 Initiation à la recherche</h1>
    <p class="subtitle">Découverte de la démarche scientifique et méthodologie de recherche</p>
    <div class="hero-badges">
      <span class="hero-badge">📚 Niveau License</span>
      <span class="hero-badge">⏱️ 8 semaines</span>
      <span class="hero-badge">🎯 Méthodologie</span>
      <span class="hero-badge">👥 Travail collaboratif</span>
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
    Ce cours d'initiation à la recherche vise à familiariser les étudiants avec la démarche scientifique moderne. Il couvre l'ensemble du processus de recherche, depuis la formulation d'une question de recherche jusqu'à la communication des résultats. Les étudiants apprendront à naviguer dans l'écosystème de la recherche académique et à développer un esprit critique face à l'information scientifique.
  </p>

  <div class="info-box">
    <h4>📊 Informations générales</h4>
    <p><strong>Durée :</strong> 8 semaines (24h de cours magistraux + 16h de travaux dirigés)<br>
    <strong>Volume de travail personnel estimé :</strong> 40-50 heures<br>
    <strong>Langue d'enseignement :</strong> Français<br>
    <strong>Prérequis académiques :</strong> Niveau de français académique B2 minimum</p>
  </div>

  <h3 style="color: var(--primary-color); margin-bottom: 1.5rem;">✅ Prérequis</h3>
  
  <div class="prerequisite-item">
    <div class="prerequisite-icon">🧠</div>
    <div>
      <strong>Curiosité scientifique</strong>
      <p style="margin: 0; color: #666; font-size: 0.95rem;">Intérêt pour la découverte et l'exploration de nouvelles connaissances</p>
    </div>
  </div>
  
  <div class="prerequisite-item">
    <div class="prerequisite-icon">📝</div>
    <div>
      <strong>Bases en méthodologie</strong>
      <p style="margin: 0; color: #666; font-size: 0.95rem;">Notions élémentaires de rédaction académique et d'analyse critique</p>
    </div>
  </div>

  <div class="prerequisite-item">
    <div class="prerequisite-icon">💻</div>
    <div>
      <strong>Maîtrise informatique de base</strong>
      <p style="margin: 0; color: #666; font-size: 0.95rem;">Utilisation des outils bureautiques et de recherche en ligne</p>
    </div>
  </div>

  <div class="skills-tags">
    <span class="skill-tag">Recherche documentaire</span>
    <span class="skill-tag">Rédaction scientifique</span>
    <span class="skill-tag">Analyse critique</span>
    <span class="skill-tag">Présentation orale</span>
    <span class="skill-tag">Méthodologie</span>
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
      <h4>🔍 Comprendre le processus de recherche</h4>
      <p>Maîtriser les étapes clés de la démarche scientifique, de l'observation à la validation des résultats.</p>
    </div>
    <div class="objective-card">
      <h4>❓ Formuler une problématique</h4>
      <p>Apprendre à poser les bonnes questions et à définir un cadre de recherche cohérent et structuré.</p>
    </div>
    <div class="objective-card">
      <h4>📚 Maîtriser la recherche documentaire</h4>
      <p>Naviguer efficacement dans les bases de données académiques et évaluer la qualité des sources.</p>
    </div>
    <div class="objective-card">
      <h4>✍️ Rédiger un rapport scientifique</h4>
      <p>Structurer et rédiger un document respectant les standards académiques internationaux.</p>
    </div>
    <div class="objective-card">
      <h4>🗣️ Communiquer ses résultats</h4>
      <p>Présenter efficacement ses travaux à l'oral devant un public académique et défendre ses idées.</p>
    </div>
    <div class="objective-card">
      <h4>🔬 Développer l'esprit critique</h4>
      <p>Analyser et évaluer de manière objective la littérature scientifique et adopter une posture réflexive face aux résultats.</p>
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
      <div class="timeline-week">Semaine 1</div>
      <div class="timeline-content">
        <h4>Introduction à la recherche scientifique</h4>
        <div class="timeline-details">Présentation du cours, panorama de la recherche, attentes et organisation.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-week">Semaine 2</div>
      <div class="timeline-content">
        <h4>Formulation d’une problématique</h4>
        <div class="timeline-details">Comment trouver une question de recherche pertinente ? Exemples et exercices pratiques.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-week">Semaine 3</div>
      <div class="timeline-content">
        <h4>Recherche documentaire</h4>
        <div class="timeline-details">Bases de données, outils de veille, évaluation des sources, gestion bibliographique.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-week">Semaine 4</div>
      <div class="timeline-content">
        <h4>Méthodologie et expérimentation</h4>
        <div class="timeline-details">Types de méthodes, plan d’expérience, collecte et analyse de données.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-week">Semaine 5</div>
      <div class="timeline-content">
        <h4>Rédaction scientifique</h4>
        <div class="timeline-details">Structure d’un rapport, normes de rédaction, gestion des citations et plagiat.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-week">Semaine 6</div>
      <div class="timeline-content">
        <h4>Communication orale</h4>
        <div class="timeline-details">Préparer et réussir une présentation scientifique, gestion du stress, supports visuels.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-week">Semaine 7-8</div>
      <div class="timeline-content">
        <h4>Projet de recherche & soutenance</h4>
        <div class="timeline-details">Travail en groupe, rédaction du rapport final, soutenance orale devant un jury.</div>
      </div>
    </div>
  </div>
</section>

<section id="evaluation" class="section-card">
  <div class="section-header">
    <div class="section-icon">📊</div>
    <h2 class="section-title">Modalités d’évaluation</h2>
  </div>
  <div class="evaluation-grid">
    <div class="eval-item">
      <span class="eval-percentage">40%</span>
      <div class="eval-title">Projet de recherche</div>
      <div class="eval-description">Travail en groupe sur une problématique choisie, rédaction d’un rapport scientifique.</div>
    </div>
    <div class="eval-item">
      <span class="eval-percentage">30%</span>
      <div class="eval-title">Soutenance orale</div>
      <div class="eval-description">Présentation orale du projet devant un jury, réponses aux questions.</div>
    </div>
    <div class="eval-item">
      <span class="eval-percentage">20%</span>
      <div class="eval-title">Dossier individuel</div>
      <div class="eval-description">Compte-rendu personnel sur la démarche, difficultés rencontrées et apprentissages.</div>
    </div>
    <div class="eval-item">
      <span class="eval-percentage">10%</span>
      <div class="eval-title">Participation</div>
      <div class="eval-description">Implication, assiduité, travail collaboratif et interventions en classe.</div>
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
      <div class="resource-icon">🔎</div>
      <h4>Guides méthodologiques</h4>
      <ul>
        <li><a href="https://www.cairn.info/la-demarche-scientifique--9782100782342.htm" target="_blank">La démarche scientifique (Cairn)</a></li>
        <li><a href="https://www.sup-numerique.gouv.fr/pid33288/la-recherche-documentaire.html" target="_blank">Recherche documentaire (SupNumérique)</a></li>
      </ul>
    </div>
    <div class="resource-card">
      <div class="resource-icon">📝</div>
      <h4>Rédaction scientifique</h4>
      <ul>
        <li><a href="https://www.univ-lille.fr/formation/ressources/rediger-un-memoire-ou-un-rapport/" target="_blank">Rédiger un mémoire ou un rapport (Univ. Lille)</a></li>
        <li><a href="https://www.bib.umontreal.ca/ressources/guides/guide-redaction-scientifique.pdf" target="_blank">Guide de rédaction scientifique (UdeM)</a></li>
      </ul>
    </div>
    <div class="resource-card">
      <div class="resource-icon">🎤</div>
      <h4>Communication orale</h4>
      <ul>
        <li><a href="https://www.campusfrance.org/fr/news/comment-reussir-sa-presentation-orale" target="_blank">Réussir sa présentation orale (Campus France)</a></li>
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