---
layout: page
title: Enseignement
permalink: /fr/teaching/
lang: fr
---

<style>
:root {
  --primary-color: #2c3e50;
  --secondary-color: #3498db;
  --accent-color: #e74c3c;
  --success-color: #27ae60;
  --warning-color: #f39c12;
  --light-bg: #f8f9fa;
  --card-shadow: 0 4px 20px rgba(0,0,0,0.08);
  --card-shadow-hover: 0 12px 40px rgba(0,0,0,0.15);
  --border-radius: 16px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem 0;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  border-radius: var(--border-radius);
}

.page-header h1 {
  color: white;
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
  font-weight: 300;
}

.page-header .subtitle {
  opacity: 0.9;
  font-size: 1.2rem;
}

.stats-bar {
  display: flex;
  justify-content: space-around;
  background: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  margin: 2rem 0;
  text-align: center;
}

.stat-item h3 {
  color: var(--secondary-color);
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.stat-item p {
  color: #666;
  font-weight: 500;
}

.section-card {
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  padding: 2.5rem;
  margin-bottom: 2rem;
  transition: var(--transition);
}

.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--secondary-color);
}

.section-header h2 {
  margin: 0;
  color: var(--primary-color);
  font-weight: 600;
}

.section-header .icon {
  margin-right: 0.75rem;
  font-size: 1.5rem;
  color: var(--secondary-color);
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.course-card {
  background: #fff;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  padding: 2rem;
  border: 1px solid #e9ecef;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.course-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--secondary-color), var(--success-color));
  transform: scaleX(0);
  transition: var(--transition);
  transform-origin: left;
}

.course-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--card-shadow-hover);
}

.course-card:hover::before {
  transform: scaleX(1);
}

.course-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.course-code {
  background: var(--secondary-color);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 0.5rem;
}

.course-desc {
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.btn {
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary {
  background: var(--secondary-color);
  color: white;
}

.btn-primary:hover {
  background: #2980b9;
  transform: translateY(-2px);
  text-decoration: none;
  color: white;
}

.philosophy-section {
  background: var(--light-bg);
  padding: 2.5rem;
  border-radius: var(--border-radius);
  margin: 3rem 0;
  border-left: 5px solid var(--secondary-color);
}

.philosophy-section h2 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
}

.philosophy-section p {
  line-height: 1.7;
  margin-bottom: 1.2rem;
  color: #555;
}

@media (max-width: 768px) {
  .courses-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .stats-bar {
    flex-direction: column;
    gap: 1rem;
  }
  
  .page-header h1 {
    font-size: 2rem;
  }
}
</style>

<div class="page-header">
  <h1>📚 Enseignement & Pédagogie</h1>
  <p class="subtitle">Formation académique et développement des compétences en ingénierie</p>
</div>

<div class="stats-bar">
  <div class="stat-item">
    <h3>15+</h3>
    <p>Cours enseignés</p>
  </div>
  <div class="stat-item">
    <h3>500+</h3>
    <p>Étudiants formés</p>
  </div>
  <div class="stat-item">
    <h3>5</h3>
    <p>Années d'expérience</p>
  </div>
  <div class="stat-item">
    <h3>3</h3>
    <p>Niveaux d'enseignement</p>
  </div>
</div>

## 🎯 Approche Pédagogique

Ma philosophie d'enseignement s'articule autour de **l'apprentissage par la pratique** et **l'innovation pédagogique**. Je privilégie une approche moderne qui combine théorie solide et applications concrètes, permettant aux étudiants de développer les compétences essentielles pour l'industrie 4.0.

### Principes Fondamentaux

- **🔬 Apprentissage Expérientiel** : Learning by doing avec des projets industriels réels
- **🌐 Ouverture Internationale** : Perspectives globales et multiculturelles
- **💡 Innovation Technologique** : Intégration des dernières technologies (IA, IoT, robotique)
- **🔄 Amélioration Continue** : Évolution constante basée sur les retours étudiants

## 📖 Domaines d'Enseignement

<div class="section-card">
  <div class="section-header">
    <span class="icon">🤖</span>
    <h2>Automatique & Robotique</h2>
  </div>
  
  <div class="courses-grid">
    <div class="course-card">
      <div class="course-code">GR-711302</div>
      <div class="course-title">Automatique : Robotique</div>
      <div class="course-desc">Systèmes de contrôle automatique appliqués à la robotique avec travaux pratiques intensifs.</div>
      <a href="/teaching/courses/gr-711302/" class="btn btn-primary">📖 Détails du cours</a>
    </div>
    
    <div class="course-card">
      <div class="course-code">DU-823220</div>
      <div class="course-title">Logique Séquentielle - SAP et Grafcet</div>
      <div class="course-desc">Maîtrise des systèmes automatisés de production et programmation d'automates industriels.</div>
      <a href="/teaching/courses/logique-industrielle/" class="btn btn-primary">📖 Détails du cours</a>
    </div>
  </div>
</div>

<div class="section-card">
  <div class="section-header">
    <span class="icon">🏥</span>
    <h2>Simulation & Robotique Médicale</h2>
  </div>
  
  <div class="courses-grid">
    <div class="course-card">
      <div class="course-code">SIMULATION-MEDICALE</div>
      <div class="course-title">Simulation Médicale et Robotique Médicale</div>
      <div class="course-desc">Applications de la simulation et robotique en médecine, technologies de pointe pour la santé.</div>
      <a href="/teaching/courses/simulation-medicale/" class="btn btn-primary">📖 Détails du cours</a>
    </div>
    
    <div class="course-card">
      <div class="course-code">MODELING-MEDICAL-SIM</div>
      <div class="course-title">Modeling & Real-Time Medical Simulation</div>
      <div class="course-desc">Techniques avancées de modélisation pour les systèmes de simulation médicale temps réel.</div>
      <a href="/teaching/courses/modeling-medical-sim/" class="btn btn-primary">📖 Détails du cours</a>
    </div>
  </div>
</div>

<div class="section-card">
  <div class="section-header">
    <span class="icon">🏭</span>
    <h2>Industrie 4.0 & Innovation</h2>
  </div>
  
  <div class="courses-grid">
    <div class="course-card">
      <div class="course-code">GR-715201</div>
      <div class="course-title">Usine 4.0</div>
      <div class="course-desc">Introduction aux concepts Industrie 4.0, IoT et fabrication intelligente.</div>
      <a href="/teaching/courses/industrie-40/" class="btn btn-primary">📖 Détails du cours</a>
    </div>
    
    <div class="course-card">
      <div class="course-code">DU-822160</div>
      <div class="course-title">Introduction à la Sécurité Informatique</div>
      <div class="course-desc">Fondamentaux de la cybersécurité, protection des données et bonnes pratiques.</div>
      <a href="#" class="btn btn-primary">📖 Détails du cours</a>
    </div>
  </div>
</div>

## 🎓 Méthodologie Pédagogique

<div class="philosophy-section">
  <h2>💡 Innovation & Adaptation</h2>
  
  <p>Mon enseignement intègre les <strong>dernières avancées technologiques</strong> et s'adapte aux besoins évolutifs de l'industrie. J'utilise des outils numériques modernes, des simulateurs professionnels et des plateformes collaboratives pour enrichir l'expérience d'apprentissage.</p>
  
  <p><strong>Outils pédagogiques utilisés :</strong></p>
  <ul>
    <li>🔧 <strong>Simulateurs professionnels</strong> (MATLAB/Simulink, ROS, TIA Portal)</li>
    <li>📱 <strong>Plateformes interactives</strong> (Notion, GitHub, plateformes de cours en ligne)</li>
    <li>🤝 <strong>Projets collaboratifs</strong> avec l'industrie et laboratoires de recherche</li>
    <li>📊 <strong>Évaluation continue</strong> avec feedback personnalisé</li>
  </ul>
  
  <p>Cette approche permet aux étudiants de développer non seulement des <strong>compétences techniques solides</strong>, mais aussi des <strong>soft skills</strong> essentielles : travail en équipe, communication technique, résolution de problèmes complexes et adaptabilité.</p>
</div>

## 📚 Ressources & Support

### Pour les Étudiants
- **📖 Documentation complète** : Supports de cours, exercices et projets disponibles en ligne
- **🎯 Suivi personnalisé** : Permanences et accompagnement individuel
- **🔗 Réseau professionnel** : Connections avec l'industrie et opportunités de stage

### Pour les Enseignants
- **🤝 Collaboration pédagogique** : Partage d'expériences et bonnes pratiques
- **📈 Recherche en pédagogie** : Développement de nouvelles méthodes d'enseignement
- **🌍 Réseaux internationaux** : Partenariats avec universités européennes

---

## 🔗 Liens Utiles

- **[📚 Catalogue complet des cours](/teaching/courses/)** - Vue d'ensemble de tous les enseignements
- **[🎓 Formation continue](/)** - Programmes de formation pour professionnels
- **[🔬 Projets étudiants](/projects/)** - Travaux et réalisations des étudiants
- **[📞 Contact](/contact/)** - Pour questions et collaboration pédagogique

---

*« L'excellence en ingénierie naît de la combinaison entre une solide formation théorique et une expérience pratique riche. Mon rôle est de créer cet environnement d'apprentissage stimulant où chaque étudiant peut développer son potentiel. »*

**Dr. Yinoussa Adagolodjo**  
Maître de Conférences, Université de Lille

