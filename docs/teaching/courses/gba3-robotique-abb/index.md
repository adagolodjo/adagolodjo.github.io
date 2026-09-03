---
layout: page
title: GBA3 - TP Robotique ABB IRB140 
subtitle: Simulation et Programmation Robotique Industrielle
permalink: /teaching/courses/gba3-robotique-abb/
image: /assets/images/projects/robotique.jpg
track: industrie
---


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
    <a href="#organisation" class="nav-link">📅 Organisation</a>
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
    
    <div style="margin-top: 1.5rem; padding: 1rem; background: rgba(230, 126, 34, 0.1); border-radius: 8px; border-left: 4px solid var(--course-accent);">
      <h5 style="color: var(--course-accent-ink); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
        📄 Document TP Complet
      </h5>
      <p style="margin-bottom: 1rem; font-size: 0.95rem;">Le document PDF détaillé avec toutes les étapes, captures d'écran et instructions complètes est disponible :</p>
      <a href="https://nextcloud.univ-lille.fr/index.php/s/9FB727j462rFDjE" 
         target="_blank" 
         rel="noopener noreferrer"
         style="display: inline-flex; align-items: center; gap: 0.5rem; background: #2c3e50; color: white; padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; font-weight: 600; transition: var(--course-transition); box-shadow: 0 2px 8px rgba(44, 62, 80, 0.3);"
         onmouseover="this.style.background='#1a252f'; this.style.transform='translateY(-2px)'" 
         onmouseout="this.style.background='#2c3e50'; this.style.transform='translateY(0)'">
        📥 Accéder au PDF du TP (Nextcloud)
      </a>
    </div>
  </div>

  <h3 style="color: var(--course-ink); margin-bottom: 1.5rem;">✅ Prérequis</h3>
  
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

  <h3 style="color: var(--course-ink); margin-bottom: 1.5rem;">🤖 Le robot IRB 140</h3>
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

<section id="organisation" class="section-card">
  <div class="section-header">
    <div class="section-icon">📅</div>
    <h2 class="section-title">Organisation du TP</h2>
  </div>

  <h3 style="color: var(--course-ink); margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;">
    🏢 Lieu et modalités
  </h3>
  
  <div class="objectives-grid">
    <div class="objective-card">
      <h4>📍 Salles</h4>
      <p>C301 / C302</p>
    </div>
    <div class="objective-card">
      <h4>👥 Format</h4>
      <p>Groupes de TP</p>
    </div>
    <div class="objective-card">
      <h4>🛠️ Matériel</h4>
      <p>Station RobotStudio + Robot ABB IRB 140</p>
    </div>
    <div class="objective-card">
      <h4>👨‍🏫 Encadrement</h4>
      <p>Enseignant</p>
    </div>
  </div>

  <div class="info-box">
    <h4>📋 Critères d'évaluation détaillés (4 notes)</h4>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-top: 1rem;">
      
      <div style="background: white; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #3498db; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
        <h5 style="color: #3498db; margin-bottom: 1rem; font-size: 1.1rem; font-weight: 600;">📄 Note 1 : Livrables (40%)</h5>
        <ul class="checklist" style="font-size: 0.95rem;">
          <li>Compte-rendu final (rendu dernière séance)</li>
          <li>GRAFCET complet et documenté</li>
          <li>Qualité de la documentation technique</li>
          <li>Réponses aux questions de réflexion</li>
        </ul>
      </div>
      
      <div style="background: white; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #27ae60; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
        <h5 style="color: #27ae60; margin-bottom: 1rem; font-size: 1.1rem; font-weight: 600;">🤝 Note 2 : Implication en séance (25%)</h5>
        <ul class="checklist" style="font-size: 0.95rem;">
          <li>Participation active aux activités</li>
          <li>Collaboration efficace au sein du groupe</li>
          <li>Concentration sur le TP</li>
        </ul>
        <div class="warning-box" style="margin-top: 1rem; font-size: 0.9rem;">
          <h6 style="color: var(--warning-color); margin: 0; font-size: 0.9rem;">⚠️ Attention</h6>
          <p style="margin: 0.5rem 0 0 0;">Le temps passé sur vos portables personnels = temps non consacré au TP</p>
        </div>
      </div>
      
      <div style="background: white; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #e67e22; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
        <h5 style="color: #e67e22; margin-bottom: 1rem; font-size: 1.1rem; font-weight: 600;">🎯 Note 3 : Réalisation finale (25%)</h5>
        <ul class="checklist" style="font-size: 0.95rem;">
          <li>Niveau de développement atteint</li>
          <li>Fonctionnalités implémentées</li>
          <li>Qualité de l'exécution (simulation + réel)</li>
          <li>Gestion des difficultés techniques</li>
        </ul>
        <p style="margin-top: 1rem; font-style: italic; color: #666; font-size: 0.9rem;">
          <strong>Note importante :</strong> Les pannes matérielles sont prises en compte dans l'évaluation
        </p>
      </div>
      
      <div style="background: white; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #9b59b6; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
        <h5 style="color: #9b59b6; margin-bottom: 1rem; font-size: 1.1rem; font-weight: 600;">💾 Note 4 : Sauvegarde et fermeture (10%)</h5>
        <ul class="checklist" style="font-size: 0.95rem;">
          <li>Sauvegarde correcte des fichiers de travail</li>
          <li>Fermeture propre des applications</li>
          <li>Arrêt correct de la station de travail</li>
          <li>Respect du matériel partagé</li>
        </ul>
      </div>
      
    </div>
  </div>

  <div class="safety-alert">
    <h4><span>🚨</span> Conséquences d'une mauvaise fermeture</h4>
    <ul class="checklist">
      <li>Perte de temps pour les étudiants suivants</li>
      <li>Risque de corruption des fichiers</li>
      <li>Dysfonctionnement des applications</li>
      <li>Impact sur la note de groupe</li>
    </ul>
  </div>

  <h3 style="color: var(--course-ink); margin: 2rem 0 1.5rem 0; display: flex; align-items: center; gap: 0.5rem;">
    ✅ Procédure de fin de séance
  </h3>
  
  <div style="background: linear-gradient(135deg, #f8f9fa, #e9ecef); padding: 2rem; border-radius: var(--course-radius); border-left: 4px solid var(--success-color); margin: 2rem 0;">
    <h4 style="color: var(--success-color); margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;">
      📋 Check-list obligatoire
    </h4>
    <ul class="checklist">
      <li><strong>Sauvegarder</strong> tous les fichiers dans le dossier dédié</li>
      <li><strong>Exporter</strong> les programmes vers le répertoire du groupe</li>
      <li><strong>Fermer</strong> RobotStudio proprement</li>
      <li><strong>Fermer</strong> Program Maker</li>
      <li><strong>Arrêter</strong> le contrôleur virtuel</li>
      <li><strong>Déconnecter</strong> le robot réel (si utilisé)</li>
      <li><strong>Éteindre</strong> l'écran et l'unité centrale</li>
      <li><strong>Ranger</strong> l'espace de travail</li>
    </ul>
  </div>

  <h4 style="color: var(--course-ink); margin: 2rem 0 1rem 0;">📁 Convention de nommage des fichiers</h4>
  <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; font-family: 'Courier New', monospace; font-size: 0.9rem; line-height: 1.6; border-left: 4px solid var(--course-accent);">
    Dossier principal : <strong>GBA3_TP_Robotique_Groupe[X]</strong><br>
    ├── Séance1/<br>
    │&nbsp;&nbsp;&nbsp;├── [Nom1]_[Nom2]_Exercice1.rspag<br>
    │&nbsp;&nbsp;&nbsp;└── [Nom1]_[Nom2]_Programme1.prg<br>
    └── Séance2/<br>
    &nbsp;&nbsp;&nbsp;&nbsp;├── [Nom1]_[Nom2]_Exercice2.rspag<br>
    &nbsp;&nbsp;&nbsp;&nbsp;├── [Nom1]_[Nom2]_Programme2.prg<br>
    &nbsp;&nbsp;&nbsp;&nbsp;└── [Nom1]_[Nom2]_GRAFCET.pdf
  </div>

  <h3 style="color: var(--course-ink); margin: 2rem 0 1.5rem 0; display: flex; align-items: center; gap: 0.5rem;">
    🌟 Conseils pour réussir
  </h3>
  
  <div class="objectives-grid">
    <div class="objective-card">
      <h4>📆 Avant le TP</h4>
      <ul class="checklist">
        <li>Relire les pré-requis</li>
        <li>Préparer ses questions</li>
        <li>Apporter une clé USB (sauvegarde supplémentaire)</li>
      </ul>
    </div>
    <div class="objective-card">
      <h4>⏳ Pendant le TP</h4>
      <ul class="checklist">
        <li>Écouter les consignes attentivement</li>
        <li>Poser des questions en cas de doute</li>
        <li>Documenter au fur et à mesure</li>
        <li>Tester régulièrement les programmes</li>
        <li>Sauvegarder fréquemment</li>
      </ul>
    </div>
    <div class="objective-card">
      <h4>✅ Après le TP</h4>
      <ul class="checklist">
        <li>Finaliser le compte-rendu</li>
        <li>Vérifier les fichiers sauvegardés</li>
        <li>Préparer les questions pour la séance suivante</li>
      </ul>
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
  
  <p style="color: var(--course-ink); font-weight: 600; margin-bottom: 1.5rem;">
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

  <h3 style="color: var(--course-ink); margin-bottom: 1.5rem;">Avant de commencer</h3>
  <ul class="checklist">
    <li>Vérifier que l'espace de travail du robot est dégagé</li>
    <li>Repérer les arrêts d'urgence (boutons rouges)</li>
    <li>S'assurer que le pupitre de commande est fonctionnel</li>
    <li>Valider TOUJOURS le programme en simulation avant l'exécution réelle</li>
  </ul>

  <h3 style="color: var(--course-ink); margin-bottom: 1.5rem;">Procédure de fin de séance</h3>
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
      <h4>📄 Document officiel du TP</h4>
      <p>Accédez au document PDF complet du TP avec toutes les étapes détaillées :</p>
      <a href="https://nextcloud.univ-lille.fr/index.php/s/9FB727j462rFDjE" 
         target="_blank" 
         rel="noopener noreferrer"
         style="display: inline-flex; align-items: center; gap: 0.5rem; background: #2c3e50; color: white; padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; font-weight: 600; margin-top: 1rem; transition: var(--course-transition); box-shadow: 0 2px 8px rgba(44, 62, 80, 0.2);"
         onmouseover="this.style.background='#1a252f'" 
         onmouseout="this.style.background='#2c3e50'">
        📥 Télécharger le PDF du TP
      </a>
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

<div style="background: var(--primary-color); color: white; padding: 2rem; border-radius: var(--course-radius); margin-top: 2rem;">
  <p><strong>👨‍🏫 Responsable du cours :</strong> Dr. Yinoussa Adagolodjo</p>
  <p><strong>✉️ Email :</strong> Remplir formulaire de contact sur la page d'accueil</p>
  <p><strong>🏢 Bureau :</strong> Bâtiment Polytech, Université de Lille</p>
  <p><strong>⏰ Permanence :</strong> Sur rendez-vous (contact par email)</p>
</div>

---

*Ce document présente les étapes fondamentales pour la programmation d'un robot ABB avec RobotStudio Pro. Pour des applications plus complexes, consulter la documentation officielle ABB et les manuels de référence RAPID.*