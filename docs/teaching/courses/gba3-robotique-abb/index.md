---
layout: page
title: GBA3 - TP Robotique ABB IRB140 
subtitle: Simulation et Programmation Robotique Industrielle
permalink: /teaching/courses/gba3-robotique-abb/
image: /assets/images/projects/robotique.jpg
---

<style>
:root {
  --primary-color: #2c3e50;
  --secondary-color: #3498db;
  --accent-color: #e74c3c;
  --success-color: #27ae60;
  --warning-color: #f39c12;
  --robotics-color: #e67e22;
  --light-bg: #f8f9fa;
  --card-shadow: 0 4px 20px rgba(0,0,0,0.08);
  --card-shadow-hover: 0 12px 40px rgba(0,0,0,0.15);
  --border-radius: 16px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.course-hero {
  background: linear-gradient(135deg, var(--robotics-color) 0%, var(--secondary-color) 100%);
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
  color: var(--robotics-color);
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

.timeline-seance {
  font-weight: 600;
  color: var(--robotics-color);
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
  background: linear-gradient(90deg, var(--robotics-color), var(--secondary-color));
}

.eval-item:hover {
  transform: translateY(-8px);
  box-shadow: var(--card-shadow-hover);
}

.eval-percentage {
  font-size: 3rem;
  font-weight: 700;
  color: var(--robotics-color);
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

.info-box {
  background: linear-gradient(135deg, #e8f4f8, #d4edda);
  border-left: 4px solid var(--robotics-color);
  padding: 1.5rem;
  border-radius: 8px;
  margin: 2rem 0;
}

.info-box h4 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.warning-box {
  background: linear-gradient(135deg, #fff3e0, #ffecb3);
  border-left: 4px solid var(--warning-color);
  padding: 1.5rem;
  border-radius: 8px;
  margin: 2rem 0;
}

.warning-box h4 {
  color: var(--warning-color);
  margin-bottom: 1rem;
}

.exercise-card {
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  padding: 2rem;
  border-radius: var(--border-radius);
  border-left: 4px solid var(--robotics-color);
  margin: 2rem 0;
  transition: var(--transition);
}

.exercise-card:hover {
  transform: translateX(8px);
  box-shadow: var(--card-shadow);
}

.exercise-title {
  color: var(--robotics-color);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.safety-alert {
  background: linear-gradient(135deg, #ffebee, #ffcdd2);
  border-left: 4px solid var(--accent-color);
  padding: 1.5rem;
  border-radius: 8px;
  margin: 2rem 0;
}

.safety-alert h4 {
  color: var(--accent-color);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.checklist {
  list-style: none;
  padding: 0;
}

.checklist li {
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

.checklist li:last-child {
  border-bottom: none;
}

.checklist li::before {
  content: "✓";
  color: var(--success-color);
  font-weight: bold;
  margin-right: 0.5rem;
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
    <h1>🦾 TP Robotique ABB IRB140</h1>
    <p class="subtitle">Simulation et Programmation Robotique Industrielle - GBA3</p>
    <div class="hero-badges">
      <span class="hero-badge">🎓 GBA3</span>
      <span class="hero-badge">⏱️ 7h TP</span>
      <span class="hero-badge">🤖 ABB IRB140</span>
      <span class="hero-badge">💻 RobotStudio</span>
      <span class="hero-badge">📋 GRAFCET</span>
    </div>
  </div>
</div>

<nav class="course-nav">
  <div class="nav-links">
    <a href="#presentation" class="nav-link active">📋 Présentation</a>
    <a href="#objectifs" class="nav-link">🎯 Objectifs</a>
    <a href="#planning" class="nav-link">📅 Planning</a>
    <a href="#exercices" class="nav-link">🔧 Exercices</a>
    <a href="#evaluation" class="nav-link">📊 Évaluation</a>
    <a href="#securite" class="nav-link">⚠️ Sécurité</a>
    <a href="#ressources" class="nav-link">📚 Ressources</a>
  </div>
</nav>

<section id="presentation" class="section-card">
  <div class="section-header">
    <div class="section-icon">📋</div>
    <h2 class="section-title">Présentation du TP</h2>
  </div>
  
  <p style="font-size: 1.1rem; line-height: 1.7; color: #555; margin-bottom: 2rem;">
    Ce TP de robotique industrielle permet aux étudiants de découvrir la programmation et la simulation du robot <strong>ABB IRB140</strong>. À travers trois exercices progressifs, vous développerez les compétences nécessaires pour programmer des trajectoires robotiques, implémenter des automatismes avec GRAFCET, et transférer vos programmes vers un robot réel.
  </p>

  <div class="info-box">
    <h4>🏭 Contexte industriel en génie biologique et alimentaire</h4>
    <p>Dans l'industrie agroalimentaire et les laboratoires de biologie, la robotique industrielle joue un rôle croissant pour :</p>
    <ul>
      <li><strong>Conditionnement et emballage</strong> : manipulation d'emballages, étiquetage, palettisation</li>
      <li><strong>Contrôle qualité</strong> : prélèvement d'échantillons, manipulation d'éprouvettes</li>
      <li><strong>Processus stériles</strong> : manipulation d'objets sans contamination croisée</li>
      <li><strong>Traçabilité</strong> : gestion automatisée des lots et des références produits</li>
    </ul>
  </div>

  <div class="info-box">
    <h4>📊 Informations générales</h4>
    <p><strong>Durée :</strong> 7 heures de travaux pratiques (2 séances)<br>
    <strong>Lieu :</strong> Salles C301 / C302<br>
    <strong>Format :</strong> Groupes de TP<br>
    <strong>Matériel :</strong> Station RobotStudio + Robot ABB IRB 140</p>
  </div>

  <h3 style="color: var(--primary-color); margin-bottom: 1.5rem;">✅ Prérequis</h3>
  
  <div class="prerequisite-item">
    <div class="prerequisite-icon">🔧</div>
    <div>
      <strong>Notions de base en automatisme</strong>
      <p style="margin: 0; color: #666; font-size: 0.95rem;">Logique séquentielle, capteurs, actionneurs</p>
    </div>
  </div>
  
  <div class="prerequisite-item">
    <div class="prerequisite-icon">📐</div>
    <div>
      <strong>Coordonnées cartésiennes et repères orthonormés</strong>
      <p style="margin: 0; color: #666; font-size: 0.95rem;">Transformations géométriques, orientation dans l'espace</p>
    </div>
  </div>

  <div class="prerequisite-item">
    <div class="prerequisite-icon">💻</div>
    <div>
      <strong>Environnement Windows</strong>
      <p style="margin: 0; color: #666; font-size: 0.95rem;">Navigation dans l'interface, gestion des fichiers</p>
    </div>
  </div>

  <h3 style="color: var(--primary-color); margin-bottom: 1.5rem;">🤖 Le robot IRB 140</h3>
  <p>Le robot <strong>IRB 140</strong> est un robot manipulateur articulé à six degrés de liberté, caractérisé par sa robustesse et sa précision exceptionnelle de 0,03 mm. Compact (800 mm de hauteur, 98 kg), il s'intègre parfaitement aux espaces restreints et se prête idéalement aux applications de manutention, usinage et assemblage de précision.</p>
</section>

<section id="objectifs" class="section-card">
  <div class="section-header">
    <div class="section-icon">🎯</div>
    <h2 class="section-title">Objectifs pédagogiques</h2>
  </div>

  <p style="font-size: 1.05rem; margin-bottom: 2rem; color: #555;">
    <strong>À l'issue de ce TP, vous serez capable de :</strong>
  </p>

  <div class="objectives-grid">
    <div class="objective-card">
      <h4>🏗️ Modéliser un environnement robotique 3D</h4>
      <p>Importer et organiser les éléments d'une cellule robotique dans RobotStudio.</p>
    </div>
    <div class="objective-card">
      <h4>📍 Programmer des trajectoires robotiques</h4>
      <p>Créer des Targets, définir des Paths optimisés avec points d'approche et de retrait.</p>
    </div>
    <div class="objective-card">
      <h4>⚡ Utiliser le langage RAPID (ABB)</h4>
      <p>Comprendre et modifier les instructions de base : MoveJ, MoveL, Set, Reset.</p>
    </div>
    <div class="objective-card">
      <h4>📋 Concevoir un GRAFCET</h4>
      <p>Modéliser l'automatisation avec transitions, étapes et variables d'entrée/sortie.</p>
    </div>
    <div class="objective-card">
      <h4>🔄 Transférer vers un robot réel</h4>
      <p>Utiliser Program Maker et transférer les programmes vers le contrôleur S4C.</p>
    </div>
    <div class="objective-card">
      <h4>⚠️ Appliquer les principes de sécurité</h4>
      <p>Maîtriser les procédures sécurisées de programmation et d'exécution robotique.</p>
    </div>
  </div>
</section>

<section id="planning" class="section-card">
  <div class="section-header">
    <div class="section-icon">📅</div>
    <h2 class="section-title">Planification des séances</h2>
  </div>
  <div class="timeline">
    <div class="timeline-item">
      <div class="timeline-seance">Séance 1 (4 heures)</div>
      <div class="timeline-content">
        <h4>Exercice 1 : Simulation graphique + Début Exercice 2</h4>
        <div class="timeline-details">
          Importation de la cellule robotique, création des Targets et Paths, génération du programme RAPID, 
          premiers tests de simulation et introduction au transfert vers robot réel.
        </div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-seance">Séance 2 (3 heures)</div>
      <div class="timeline-content">
        <h4>Fin Exercice 2 + Exercice 3 : GRAFCET</h4>
        <div class="timeline-details">
          Finalisation de l'exécution sur robot réel, optimisation des trajectoires, 
          conception complète du GRAFCET pour l'automatisation de 4 plots.
        </div>
      </div>
    </div>
  </div>
</section>

<section id="exercices" class="section-card">
  <div class="section-header">
    <div class="section-icon">🔧</div>
    <h2 class="section-title">Structure des exercices</h2>
  </div>

  <div class="exercise-card">
    <div class="exercise-title">
      <span>🎮</span> Exercice 1 : Simulation graphique du robot IRB 140
    </div>
    <p><strong>Durée :</strong> 3 heures</p>
    <p><strong>Objectif :</strong> Maîtriser la simulation robotique dans RobotStudio</p>
    
    <h4>Étapes clés :</h4>
    <ul class="checklist">
      <li>Importation des éléments de la cellule robotique (.rlb)</li>
      <li>Création des points de destination (Targets) avec orientations</li>
      <li>Définition des trajectoires optimisées (Paths)</li>
      <li>Configuration du contrôleur virtuel et génération RAPID</li>
      <li>Utilisation de Program Maker pour l'optimisation</li>
      <li>Validation et simulation avec détection de collision</li>
    </ul>
  </div>

  <div class="exercise-card">
    <div class="exercise-title">
      <span>🤖</span> Exercice 2 : Passage à l'exécution du robot réel
    </div>
    <p><strong>Durée :</strong> 2 heures</p>
    <p><strong>Objectif :</strong> Transférer et exécuter le programme sur robot physique</p>
    
    <h4>Étapes clés :</h4>
    <ul class="checklist">
      <li>Validation complète en simulation avec I/O Simulator</li>
      <li>Sauvegarde sécurisée du programme (format prenom_Nom.prg)</li>
      <li>Transfert réseau via WS_FTP vers ABB1/ABB2</li>
      <li>Chargement et exécution depuis le pupitre mobile</li>
      <li>Tests en mode pas-à-pas puis continu</li>
      <li>Optimisation des trajectoires pour 3 plots supplémentaires</li>
    </ul>
  </div>

  <div class="exercise-card">
    <div class="exercise-title">
      <span>📋</span> Exercice 3 : Conception GRAFCET pour l'automatisation
    </div>
    <p><strong>Durée :</strong> 2 heures</p>
    <p><strong>Objectif :</strong> Modéliser l'automatisation complète du processus</p>
    
    <h4>Cahier des charges :</h4>
    <ul class="checklist">
      <li>4 plots à déplacer séquentiellement du Lieu A vers le Lieu B</li>
      <li>Un seul plot manipulé à la fois</li>
      <li>Cycle répétitif avec détection de présence</li>
      <li>Arrêt automatique après le 4ème plot</li>
      <li>Intégration des contraintes de sécurité</li>
      <li>Documentation complète avec nomenclature E/S</li>
    </ul>
  </div>
</section>

<section id="evaluation" class="section-card">
  <div class="section-header">
    <div class="section-icon">📊</div>
    <h2 class="section-title">Modalités d'évaluation</h2>
  </div>
  
  <p style="color: var(--primary-color); font-weight: 600; margin-bottom: 1.5rem;">
    Note collégiale par groupe avec possibilité de différenciation individuelle
  </p>

  <div class="evaluation-grid">
    <div class="eval-item">
      <span class="eval-percentage">40%</span>
      <div class="eval-title">Livrables</div>
      <div class="eval-description">Compte-rendu final, GRAFCET documenté, qualité technique, réponses aux questions</div>
    </div>
    <div class="eval-item">
      <span class="eval-percentage">25%</span>
      <div class="eval-title">Implication en séance</div>
      <div class="eval-description">Participation active, collaboration efficace, concentration sur le TP</div>
    </div>
    <div class="eval-item">
      <span class="eval-percentage">25%</span>
      <div class="eval-title">Réalisation finale</div>
      <div class="eval-description">Niveau atteint, fonctionnalités implémentées, qualité d'exécution, gestion des difficultés</div>
    </div>
    <div class="eval-item">
      <span class="eval-percentage">10%</span>
      <div class="eval-title">Sauvegarde et fermeture</div>
      <div class="eval-description">Sauvegarde correcte, fermeture des applications, respect du matériel partagé</div>
    </div>
  </div>

  <div class="warning-box">
    <h4>⚠️ Points d'attention</h4>
    <p>Le temps passé sur vos portables personnels = temps non consacré au TP et impacte la note d'implication.</p>
    <p>Les pannes matérielles sont prises en compte dans l'évaluation.</p>
  </div>
</section>

<section id="securite" class="section-card">
  <div class="section-header">
    <div class="section-icon">⚠️</div>
    <h2 class="section-title">Consignes de sécurité</h2>
  </div>

  <div class="safety-alert">
    <h4><span>🚨</span> Consignes impératives</h4>
    <ul class="checklist">
      <li><strong>JAMAIS</strong> à proximité du robot en mouvement</li>
      <li><strong>TOUJOURS</strong> utiliser le mode pas-à-pas pour les premiers tests</li>
      <li><strong>MAINTENIR</strong> la gâchette de validation enfoncée</li>
      <li><strong>ARRÊTER</strong> immédiatement en cas de comportement anormal</li>
    </ul>
  </div>

  <h3 style="color: var(--primary-color); margin-bottom: 1.5rem;">Avant de commencer</h3>
  <ul class="checklist">
    <li>Vérifier que l'espace de travail du robot est dégagé</li>
    <li>Repérer les arrêts d'urgence (boutons rouges)</li>
    <li>S'assurer que le pupitre de commande est fonctionnel</li>
    <li>Valider TOUJOURS le programme en simulation avant l'exécution réelle</li>
  </ul>

  <h3 style="color: var(--primary-color); margin-bottom: 1.5rem;">Procédure de fin de séance</h3>
  <ul class="checklist">
    <li>Sauvegarder tous les fichiers dans le dossier dédié</li>
    <li>Exporter les programmes vers le répertoire du groupe</li>
    <li>Fermer RobotStudio et Program Maker proprement</li>
    <li>Arrêter le contrôleur virtuel</li>
    <li>Déconnecter le robot réel (si utilisé)</li>
    <li>Éteindre l'écran et l'unité centrale</li>
    <li>Ranger l'espace de travail</li>
  </ul>
</section>

<section id="ressources" class="section-card">
  <div class="section-header">
    <div class="section-icon">📚</div>
    <h2 class="section-title">Ressources et outils</h2>
  </div>

  <div class="objectives-grid">
    <div class="objective-card">
      <h4>🛠️ Logiciels utilisés</h4>
      <ul>
        <li><strong>RobotStudio Pro</strong> : Environnement de simulation 3D</li>
        <li><strong>Program Maker</strong> : Éditeur de code RAPID</li>
        <li><strong>Contrôleur virtuel</strong> : Simulation comportement réel</li>
        <li><strong>I/O Simulator</strong> : Test des entrées/sorties</li>
      </ul>
    </div>
    <div class="objective-card">
      <h4>📁 Convention de nommage</h4>
      <div style="background: #f8f9fa; padding: 1rem; border-radius: 8px; font-family: monospace; font-size: 0.85rem;">
        GBA3_TP_Robotique_Groupe[X]<br>
        ├── Séance1/<br>
        │&nbsp;&nbsp;&nbsp;├── [Nom1]_[Nom2]_Exercice1.rspag<br>
        │&nbsp;&nbsp;&nbsp;└── [Nom1]_[Nom2]_Programme1.prg<br>
        └── Séance2/<br>
        &nbsp;&nbsp;&nbsp;&nbsp;├── [Nom1]_[Nom2]_Exercice2.rspag<br>
        &nbsp;&nbsp;&nbsp;&nbsp;├── [Nom1]_[Nom2]_Programme2.prg<br>
        &nbsp;&nbsp;&nbsp;&nbsp;└── [Nom1]_[Nom2]_GRAFCET.pdf
      </div>
    </div>
    <div class="objective-card">
      <h4>📖 Documentation</h4>
      <ul>
        <li>Manuel ABB IRB 140 : Spécifications techniques</li>
        <li>Guide RAPID : Référence du langage</li>
        <li>Documentation RobotStudio : Aide contextuelle (F1)</li>
        <li>Normes de sécurité : ISO 10218, EN 954</li>
      </ul>
    </div>
    <div class="objective-card">
      <h4>💡 Conseils pour réussir</h4>
      <ul>
        <li><strong>Avant :</strong> Relire les prérequis, préparer questions</li>
        <li><strong>Pendant :</strong> Écouter consignes, documenter, sauvegarder</li>
        <li><strong>Après :</strong> Finaliser CR, vérifier fichiers</li>
        <li><strong>Toujours :</strong> Poser des questions en cas de doute</li>
      </ul>
    </div>
  </div>

  <div class="info-box">
    <h4>🎯 Applications en génie biologique et alimentaire</h4>
    <p><strong>Secteurs d'application directe :</strong></p>
    <ul>
      <li>Laboratoires d'analyses : Manipulation d'échantillons</li>
      <li>Lignes de conditionnement : Emballage automatisé</li>
      <li>Contrôle qualité : Tri et inspection automatique</li>
      <li>Logistique : Gestion de stock et palettisation</li>
      <li>R&D alimentaire : Procédures répétitives</li>
    </ul>
  </div>
</section>

---

## 📞 Contact & encadrement

<div style="background: var(--primary-color); color: white; padding: 2rem; border-radius: var(--border-radius); margin-top: 2rem;">
  <p><strong>👨‍🏫 Responsable du cours :</strong> Dr. Yinoussa Adagolodjo</p>
  <p><strong>✉️ Email :</strong> Remplir formulaire de contact sur la page d'accueil</p>
  <p><strong>🏢 Bureau :</strong> Bâtiment Polytech, Université de Lille</p>
  <p><strong>⏰ Permanence :</strong> Sur rendez-vous (contact par email)</p>
</div>

---

*Ce document présente les étapes fondamentales pour la programmation d'un robot ABB avec RobotStudio Pro. Pour des applications plus complexes, consulter la documentation officielle ABB et les manuels de référence RAPID.*