---
layout: page
title: GR-711302 Automatique - Robotique
subtitle: Systèmes de contrôle automatique appliqués à la robotique
permalink: /teaching/courses/gr-711302/
image: /assets/images/projects/robotique.jpg
track: industrie
---


<div class="course-hero">
  <div class="course-hero-content">
    <h1>{% include ph.html name="robot" %} GR-711302 Automatique : Robotique</h1>
    <p class="subtitle">Systèmes de contrôle automatique appliqués à la robotique</p>
    <div class="hero-badges">
      <span class="hero-badge">{% include ph.html name="graduation-cap" %} Niveau Graduate</span>
      <span class="hero-badge">{% include ph.html name="timer" %} 21h TP</span>
      <span class="hero-badge">{% include ph.html name="target" %} Robotique</span>
      <span class="hero-badge">{% include ph.html name="wrench" %} Travaux Pratiques</span>
    </div>
  </div>
</div>

<nav class="course-nav">
  <div class="nav-links">
    <a href="#presentation" class="nav-link active">{% include ph.html name="clipboard-text" %} Présentation</a>
    <a href="#objectifs" class="nav-link">{% include ph.html name="target" %} Objectifs</a>
    <a href="#planning" class="nav-link">{% include ph.html name="calendar-blank" %} Planning</a>
    <a href="#evaluation" class="nav-link">{% include ph.html name="chart-bar" %} Évaluation</a>
    <a href="#ressources" class="nav-link">{% include ph.html name="books" %} Ressources</a>
    <a href="#contact" class="nav-link">{% include ph.html name="phone" %} Contact</a>
  </div>
</nav>

<section id="presentation" class="section-card">
  <div class="section-header">
    <div class="section-icon">{% include ph.html name="clipboard-text" %}</div>
    <h2 class="section-title">Présentation du cours</h2>
  </div>
  
  <p style="font-size: 1.1rem; line-height: 1.7; color: #555; margin-bottom: 2rem;">
    Ce cours de travaux pratiques en robotique applique les concepts de l'automatique aux systèmes robotisés. Les étudiants développeront une compréhension pratique des mécanismes de contrôle, de la cinématique robotique et des algorithmes de commande. Grâce à des manipulations sur robots réels et simulateurs, ils acquièrent l'expérience nécessaire pour concevoir et implémenter des systèmes robotiques autonomes.
  </p>

  <div class="info-box">
    <h4>{% include ph.html name="chart-bar" %} Informations générales</h4>
    <p><strong>Durée :</strong> 21h de travaux pratiques<br>
    <strong>Volume de travail personnel estimé :</strong> 30-40 heures<br>
    <strong>Langue d'enseignement :</strong> Français<br>
    <strong>Évaluation :</strong> Note de Classe, Note de rapport</p>
  </div>

  <h3 style="color: var(--course-ink); margin-bottom: 1.5rem;">{% include ph.html name="check-circle" %} Prérequis</h3>
  
  <div class="prerequisite-item">
    <div class="prerequisite-icon">{% include ph.html name="ruler" %}</div>
    <div>
      <strong>Mathématiques appliquées</strong>
      <p style="margin: 0; color: #666; font-size: 0.95rem;">Algèbre linéaire, trigonométrie, matrices de transformation</p>
    </div>
  </div>
  
  <div class="prerequisite-item">
    <div class="prerequisite-icon">{% include ph.html name="gear-six" %}</div>
    <div>
      <strong>Bases de l'automatique</strong>
      <p style="margin: 0; color: #666; font-size: 0.95rem;">Théorie des systèmes, boucles de rétroaction, PID</p>
    </div>
  </div>

  <div class="prerequisite-item">
    <div class="prerequisite-icon">{% include ph.html name="desktop" %}</div>
    <div>
      <strong>Programmation</strong>
      <p style="margin: 0; color: #666; font-size: 0.95rem;">C/C++ ou Python, notions de programmation temps réel</p>
    </div>
  </div>

  <div class="skills-tags">
    <span class="skill-tag">Cinématique robotique</span>
    <span class="skill-tag">Contrôle de mouvement</span>
    <span class="skill-tag">Capteurs robotiques</span>
    <span class="skill-tag">ROS (Robot Operating System)</span>
    <span class="skill-tag">Simulation robotique</span>
  </div>
</section>

<section id="objectifs" class="section-card">
  <div class="section-header">
    <div class="section-icon">{% include ph.html name="target" %}</div>
    <h2 class="section-title">Objectifs pédagogiques</h2>
  </div>

  <p style="font-size: 1.05rem; margin-bottom: 2rem; color: #555;">
    <strong>À l'issue de ce cours, les étudiants seront capables de :</strong>
  </p>

  <div class="objectives-grid">
    <div class="objective-card">
      <h4>{% include ph.html name="arrows-clockwise" %} Maîtriser la cinématique robotique</h4>
      <p>Calculer et implémenter les transformations géométriques, cinématique directe et inverse.</p>
    </div>
    <div class="objective-card">
      <h4>{% include ph.html name="game-controller" %} Implémenter des lois de commande</h4>
      <p>Concevoir et programmer des contrôleurs PID, commande par retour d'état pour robots.</p>
    </div>
    <div class="objective-card">
      <h4>{% include ph.html name="broadcast" %} Intégrer les capteurs</h4>
      <p>Utiliser encodeurs, capteurs de force, vision par ordinateur pour la rétroaction.</p>
    </div>
    <div class="objective-card">
      <h4>{% include ph.html name="toolbox" %} Manipuler des robots réels</h4>
      <p>Programmer et commander des bras robotiques industriels et robots mobiles.</p>
    </div>
    <div class="objective-card">
      <h4>{% include ph.html name="lightbulb" %} Développer l'autonomie</h4>
      <p>Concevoir des comportements robotiques autonomes avec prise de décision.</p>
    </div>
    <div class="objective-card">
      <h4>{% include ph.html name="wrench" %} Diagnostiquer et optimiser</h4>
      <p>Analyser les performances, identifier les dysfonctionnements et optimiser le comportement.</p>
    </div>
  </div>
</section>

<section id="planning" class="section-card">
  <div class="section-header">
    <div class="section-icon">{% include ph.html name="calendar-blank" %}</div>
    <h2 class="section-title">Planning des travaux pratiques</h2>
  </div>
  <div class="timeline">
    <div class="timeline-item">
      <div class="timeline-week">TP 1-2</div>
      <div class="timeline-content">
        <h4>Introduction à la robotique et ROS</h4>
        <div class="timeline-details">Prise en main de l'environnement ROS, premiers programmes, télé-opération.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-week">TP 3-4</div>
      <div class="timeline-content">
        <h4>Cinématique et modélisation</h4>
        <div class="timeline-details">Calculs cinématiques, modèles géométriques, simulation de robots.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-week">TP 5-6</div>
      <div class="timeline-content">
        <h4>Contrôle en position et vitesse</h4>
        <div class="timeline-details">Implémentation de contrôleurs PID, asservissement de position articulaire.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-week">TP 7-8</div>
      <div class="timeline-content">
        <h4>Planification de trajectoires</h4>
        <div class="timeline-details">Génération de trajectoires lisses, interpolation, contraintes cinématiques.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-week">TP 9-10</div>
      <div class="timeline-content">
        <h4>Perception et navigation</h4>
        <div class="timeline-details">Integration capteurs, SLAM, navigation autonome pour robots mobiles.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-week">TP 11</div>
      <div class="timeline-content">
        <h4>Projet intégré</h4>
        <div class="timeline-details">Réalisation d'une tâche robotique complète combinant tous les concepts vus.</div>
      </div>
    </div>
  </div>
</section>

<section id="evaluation" class="section-card">
  <div class="section-header">
    <div class="section-icon">{% include ph.html name="chart-bar" %}</div>
    <h2 class="section-title">Modalités d'évaluation</h2>
  </div>
  <div class="evaluation-grid">
    <div class="eval-item">
      <span class="eval-percentage">60%</span>
      <div class="eval-title">Note de rapport</div>
      <div class="eval-description">Comptes-rendus de TP, analyse des résultats, qualité technique et rédactionnelle.</div>
    </div>
    <div class="eval-item">
      <span class="eval-percentage">40%</span>
      <div class="eval-title">Note de Classe</div>
      <div class="eval-description">Participation active, qualité des réalisations pratiques, projet final.</div>
    </div>
  </div>
</section>

<section id="ressources" class="section-card">
  <div class="section-header">
    <div class="section-icon">{% include ph.html name="books" %}</div>
    <h2 class="section-title">Ressources et matériel</h2>
  </div>
  <div class="resources-grid">
    <div class="resource-card">
      <div class="resource-icon">{% include ph.html name="robot" %}</div>
      <h4>Plateformes robotiques</h4>
      <ul>
        <li>Bras manipulateurs 6 DOF</li>
        <li>Robots mobiles TurtleBot</li>
        <li>Simulateur Gazebo/RViz</li>
      </ul>
    </div>
    <div class="resource-card">
      <div class="resource-icon">{% include ph.html name="book-open" %}</div>
      <h4>Documentation technique</h4>
      <ul>
        <li><a href="#" target="_blank">Introduction to Robotics - Craig</a></li>
        <li><a href="#" target="_blank">ROS Documentation officielle</a></li>
      </ul>
    </div>
    <div class="resource-card">
      <div class="resource-icon">{% include ph.html name="desktop" %}</div>
      <h4>Outils logiciels</h4>
      <ul>
        <li>ROS (Robot Operating System)</li>
        <li>MATLAB/Simulink Robotics Toolbox</li>
        <li>Python avec NumPy/SciPy</li>
      </ul>
    </div>
  </div>
</section>

<section id="contact" class="section-card">
  <div class="section-header">
    <div class="section-icon">{% include ph.html name="phone" %}</div>
    <h2 class="section-title">Contact & encadrement</h2>
  </div>
  <div class="contact-info">
    <div class="contact-item">
      <span class="contact-icon">{% include ph.html name="chalkboard-teacher" %}</span>
      <span><strong>Responsable du cours :</strong> Dr. Yinoussa Adagolodjo</span>
    </div>
    <div class="contact-item">
      <span class="contact-icon">{% include ph.html name="envelope" %}</span>
      <span><strong>Email :</strong> Remplir formulaire de contact sur la page d'accueil</span>
    </div>
    <div class="contact-item">
      <span class="contact-icon">{% include ph.html name="buildings" %}</span>
      <span><strong>Bureau :</strong> Bâtiment Polytech, Université de Lille</span>
    </div>
    <div class="contact-item">
      <span class="contact-icon">{% include ph.html name="alarm" %}</span>
      <span><strong>Permanence :</strong> Sur rendez-vous (contact par email)</span>
    </div>
  </div>
</section>
