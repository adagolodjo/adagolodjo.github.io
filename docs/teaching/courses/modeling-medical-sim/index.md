---
layout: page
title: Robotique médicale
subtitle: Applications robotiques et simulation pour la santé
permalink: /teaching/courses/modeling-medical-sim/
image: /assets/images/projects/modeling-medical-sim.jpg
track: medical
---


<div class="course-hero">
  <div class="course-hero-content">
    <h1>{% include ph.html name="hospital" %} Robotique médicale</h1>
    <p class="subtitle">Applications robotiques et simulation pour la santé</p>
    <div class="hero-badges">
      <span class="hero-badge">{% include ph.html name="graduation-cap" %} Niveau Graduate</span>
      <span class="hero-badge">{% include ph.html name="calendar-blank" %} 1er octobre 2024</span>
      <span class="hero-badge">{% include ph.html name="robot" %} Robotique médicale</span>
      <span class="hero-badge">{% include ph.html name="hospital" %} Applications médicales</span>
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
    Ce cours avancé explore les principes et applications de la robotique médicale : robots chirurgicaux, systèmes de rééducation et dispositifs d'assistance. Les étudiants apprendront comment modéliser, contrôler et simuler ces systèmes pour la formation médicale, la planification d'interventions et l'aide au geste thérapeutique.
  </p>

  <div class="info-box">
    <h4>{% include ph.html name="chart-bar" %} Informations générales</h4>
    <p><strong>Code du cours :</strong> ROBOTIQUE-MEDICALE<br>
    <strong>Niveau :</strong> Graduate<br>
    <strong>Semestre :</strong> Automne 2024<br>
    <strong>Date de début :</strong> 1er octobre 2024<br>
    <strong>Évaluation :</strong> Exposé, Note de Classe</p>
  </div>

  <h3 style="color: var(--course-ink); margin-bottom: 1.5rem;">{% include ph.html name="check-circle" %} Prérequis</h3>
  
  <div class="prerequisite-item">
    <div class="prerequisite-icon">{% include ph.html name="calculator" %}</div>
    <div>
      <strong>Solides bases mathématiques</strong>
      <p style="margin: 0; color: #666; font-size: 0.95rem;">Algèbre linéaire, calcul différentiel, méthodes numériques</p>
    </div>
  </div>
  
  <div class="prerequisite-item">
    <div class="prerequisite-icon">{% include ph.html name="desktop" %}</div>
    <div>
      <strong>Expérience en programmation</strong>
      <p style="margin: 0; color: #666; font-size: 0.95rem;">C++ de préférence, expérience en développement algorithmique</p>
    </div>
  </div>

  <div class="prerequisite-item">
    <div class="prerequisite-icon">{% include ph.html name="lightning" %}</div>
    <div>
      <strong>Connaissances en physique</strong>
      <p style="margin: 0; color: #666; font-size: 0.95rem;">Mécanique de base, principes physiques fondamentaux</p>
    </div>
  </div>

  <div class="prerequisite-item">
    <div class="prerequisite-icon">{% include ph.html name="game-controller" %}</div>
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
    <div class="section-icon">{% include ph.html name="target" %}</div>
    <h2 class="section-title">Objectifs pédagogiques</h2>
  </div>

  <p style="font-size: 1.05rem; margin-bottom: 2rem; color: #555;">
    <strong>À l'issue de ce cours, les étudiants seront capables de :</strong>
  </p>

  <div class="objectives-grid">
    <div class="objective-card">
      <h4>{% include ph.html name="hospital" %} Comprendre la robotique médicale</h4>
      <p>Maîtriser les principes fondamentaux des robots médicaux et de leurs domaines d'application.</p>
    </div>
    <div class="objective-card">
      <h4>{% include ph.html name="dna" %} Modéliser l'interaction avec le patient</h4>
      <p>Développer des modèles adaptés aux interactions robot–patient (tissus, mouvements, contraintes de sécurité).</p>
    </div>
    <div class="objective-card">
      <h4>{% include ph.html name="lightning" %} Concevoir des lois de commande</h4>
      <p>Concevoir et analyser des lois de commande pour des robots médicaux sûrs et performants.</p>
    </div>
    <div class="objective-card">
      <h4>{% include ph.html name="scales" %} Évaluer les compromis</h4>
      <p>Analyser les compromis entre précision, temps réel, ergonomie et sécurité dans les scénarios médicaux.</p>
    </div>
    <div class="objective-card">
      <h4>{% include ph.html name="target" %} Appliquer aux domaines médicaux</h4>
      <p>Mettre en œuvre des solutions robotiques en chirurgie, rééducation et assistance au geste.</p>
    </div>
    <div class="objective-card">
      <h4>{% include ph.html name="flask" %} Valider les systèmes</h4>
      <p>Développer des méthodes de test, validation et évaluation clinique de systèmes robotiques médicaux.</p>
    </div>
  </div>
</section>

<section id="planning" class="section-card">
  <div class="section-header">
    <div class="section-icon">{% include ph.html name="calendar-blank" %}</div>
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
    <div class="section-icon">{% include ph.html name="chart-bar" %}</div>
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
    <div class="section-icon">{% include ph.html name="books" %}</div>
    <h2 class="section-title">Ressources et outils</h2>
  </div>
  <div class="resources-grid">
    <div class="resource-card">
      <div class="resource-icon">{% include ph.html name="wrench" %}</div>
      <h4>Frameworks de simulation</h4>
      <ul>
        <li><a href="https://www.sofa-framework.org" target="_blank">SOFA Framework</a></li>
        <li><a href="#" target="_blank">FEBio (biomécanique)</a></li>
        <li><a href="#" target="_blank">Environnements simulation médicale</a></li>
      </ul>
    </div>
    <div class="resource-card">
      <div class="resource-icon">{% include ph.html name="book-open" %}</div>
      <h4>Matériel pédagogique</h4>
      <ul>
        <li><a href="https://www.notion.so/Simulation-M-dicale-1944d150dfba80f0a850cd2be969c1ff" target="_blank">Supports de cours sur Notion</a></li>
        <li><a href="#" target="_blank">Littérature scientifique</a></li>
        <li><a href="#" target="_blank">Documentation SOFA</a></li>
      </ul>
    </div>
    <div class="resource-card">
      <div class="resource-icon">{% include ph.html name="desktop" %}</div>
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
