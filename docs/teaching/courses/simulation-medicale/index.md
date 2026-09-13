---
layout: page
title: Simulation Médicale
subtitle: Applications de la simulation en médecine
permalink: /teaching/courses/simulation-medicale/
image: /assets/images/projects/simulation-medicale.jpg
track: medical
---


<div class="course-hero">
  <div class="course-hero-content">
    <h1>{% include ph.html name="hospital" %} Simulation Médicale</h1>
    <p class="subtitle">Applications avancées de la simulation en médecine</p>
    <div class="hero-badges">
      <span class="hero-badge">{% include ph.html name="graduation-cap" %} Niveau Graduate</span>
      <span class="hero-badge">{% include ph.html name="timer" %} 10h CM</span>
      <span class="hero-badge">{% include ph.html name="target" %} Médecine</span>
      <span class="hero-badge">{% include ph.html name="test-tube" %} Simulation numérique</span>
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
    Ce cours explore les applications de la simulation numérique dans le domaine médical. Les étudiants découvriront les enjeux spécifiques de la modélisation des tissus biologiques et des systèmes de simulation chirurgicale. Une approche pluridisciplinaire associe informatique, mécanique, et sciences biomédicales pour adresser les défis technologiques de la médecine moderne.
  </p>

  <div class="info-box">
    <h4>{% include ph.html name="chart-bar" %} Informations générales</h4>
    <p><strong>Durée :</strong> 10h de cours magistraux<br>
    <strong>Volume de travail personnel estimé :</strong> 25-30 heures<br>
    <strong>Langue d'enseignement :</strong> Français<br>
    <strong>Évaluation :</strong> Exposé, Note de Classe</p>
  </div>

  <h3 style="color: var(--course-ink); margin-bottom: 1.5rem;">{% include ph.html name="check-circle" %} Prérequis</h3>
  
  <div class="prerequisite-item">
    <div class="prerequisite-icon">{% include ph.html name="calculator" %}</div>
    <div>
      <strong>Mathématiques appliquées</strong>
      <p style="margin: 0; color: #666; font-size: 0.95rem;">Équations différentielles, méthodes numériques, mécanique des milieux continus</p>
    </div>
  </div>
  
  <div class="prerequisite-item">
    <div class="prerequisite-icon">{% include ph.html name="desktop" %}</div>
    <div>
      <strong>Programmation scientifique</strong>
      <p style="margin: 0; color: #666; font-size: 0.95rem;">C++, Python, notions d'algorithmique pour la simulation</p>
    </div>
  </div>

  <div class="prerequisite-item">
    <div class="prerequisite-icon">{% include ph.html name="flask" %}</div>
    <div>
      <strong>Bases en biomécanique</strong>
      <p style="margin: 0; color: #666; font-size: 0.95rem;">Propriétés des tissus biologiques, anatomie fonctionnelle</p>
    </div>
  </div>

  <div class="skills-tags">
    <span class="skill-tag">Simulation temps réel</span>
    <span class="skill-tag">SOFA Framework</span>
    <span class="skill-tag">Modélisation tissus</span>
    <span class="skill-tag">Planification chirurgicale</span>
    <span class="skill-tag">Interaction haptique</span>
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
      <h4>{% include ph.html name="hospital" %} Comprendre les enjeux médicaux</h4>
      <p>Identifier les besoins spécifiques de la simulation numérique en contexte médical.</p>
    </div>
    <div class="objective-card">
      <h4>{% include ph.html name="dna" %} Modéliser les tissus biologiques</h4>
      <p>Implémenter des modèles physiques réalistes pour différents types de tissus et organes.</p>
    </div>
    <div class="objective-card">
      <h4>{% include ph.html name="lightning" %} Optimiser pour le temps réel</h4>
      <p>Développer des algorithmes de simulation compatibles avec les contraintes temporelles.</p>
    </div>
    <div class="objective-card">
      <h4>{% include ph.html name="stethoscope" %} Concevoir des scénarios de formation</h4>
      <p>Définir et structurer des scénarios de simulation clinique pour la formation et l'entraînement.</p>
    </div>
    <div class="objective-card">
      <h4>{% include ph.html name="hand-waving" %} Développer l'interaction haptique</h4>
      <p>Implémenter des interfaces de retour de force pour la simulation médicale.</p>
    </div>
    <div class="objective-card">
      <h4>{% include ph.html name="chart-bar" %} Valider les modèles</h4>
      <p>Évaluer la précision et la pertinence clinique des simulations développées.</p>
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
      <div class="timeline-week">Séance 1</div>
      <div class="timeline-content">
        <h4>Introduction à la simulation médicale</h4>
        <div class="timeline-details">Enjeux, applications cliniques, état de l'art des simulateurs médicaux.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-week">Séance 2</div>
      <div class="timeline-content">
        <h4>Modélisation des tissus mous</h4>
        <div class="timeline-details">Méthodes des éléments finis, modèles mass-spring, co-rotated linear elasticity.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-week">Séance 3</div>
      <div class="timeline-content">
        <h4>Algorithmes temps réel</h4>
        <div class="timeline-details">Optimisations GPU, préconditionnement, méthodes multigrid, parallélisation.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-week">Séance 4</div>
      <div class="timeline-content">
        <h4>Cas d'étude en simulation chirurgicale</h4>
        <div class="timeline-details">Simulateurs chirurgicaux, scénarios de formation, analyse de cas cliniques.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-week">Séance 5</div>
      <div class="timeline-content">
        <h4>Validation et applications cliniques</h4>
        <div class="timeline-details">Métriques de validation, études utilisateurs, cas d'usage clinique, perspectives futures.</div>
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
      <div class="eval-description">Présentation d'un projet de recherche ou d'un cas d'étude en simulation médicale.</div>
    </div>
    <div class="eval-item">
      <span class="eval-percentage">30%</span>
      <div class="eval-title">Note de Classe</div>
      <div class="eval-description">Participation active, questions pertinentes, discussion des cas d'étude.</div>
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
        <li><a href="#" target="_blank">GMSH (maillage)</a></li>
      </ul>
    </div>
    <div class="resource-card">
      <div class="resource-icon">{% include ph.html name="book-open" %}</div>
      <h4>Documentation scientifique</h4>
      <ul>
        <li><a href="#" target="_blank">IEEE Transactions on Biomedical Engineering</a></li>
        <li><a href="#" target="_blank">Medical Image Analysis Journal</a></li>
        <li><a href="#" target="_blank">Computer Methods in Biomechanics</a></li>
      </ul>
    </div>
    <div class="resource-card">
      <div class="resource-icon">{% include ph.html name="target" %}</div>
      <h4>Cas d'étude</h4>
      <ul>
        <li>Simulation hépatique temps réel</li>
        <li>Entraînement chirurgie cardiaque</li>
        <li>Simulateurs de rééducation</li>
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
