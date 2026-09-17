---
layout: page
title: Analyse numérique - Optimisation
subtitle: Méthodes numériques et d'optimisation pour l'ingénierie
permalink: /teaching/courses/analyse-numerique/
image: /assets/images/projects/analyse-numerique.jpg
track: maths
---


<div class="course-hero">
  <div class="course-hero-content">
    <h1>{% include ph.html name="chart-bar" %} Analyse numérique : Optimisation</h1>
    <p class="subtitle">Méthodes numériques et d'optimisation pour l'ingénierie</p>
    <div class="hero-badges">
      <span class="hero-badge">{% include ph.html name="graduation-cap" %} Niveau Graduate</span>
      <span class="hero-badge">{% include ph.html name="timer" %} 16h TP</span>
      <span class="hero-badge">{% include ph.html name="target" %} Optimisation</span>
      <span class="hero-badge">{% include ph.html name="hash" %} Méthodes numériques</span>
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
    Ce cours de travaux pratiques explore les méthodes d'analyse numérique et d'optimisation appliquées aux problèmes d'ingénierie. Les étudiants apprendront à résoudre numériquement des problèmes complexes, à implémenter des algorithmes d'optimisation et à analyser leur performance. Une approche pratique avec des applications concrètes permet de maîtriser les outils essentiels du calcul scientifique.
  </p>

  <div class="info-box">
    <h4>{% include ph.html name="chart-bar" %} Informations générales</h4>
    <p><strong>Durée :</strong> 16h de travaux pratiques<br>
    <strong>Volume de travail personnel estimé :</strong> 25-30 heures<br>
    <strong>Langue d'enseignement :</strong> Français<br>
    <strong>Évaluation :</strong> Note de Classe, Note de rapport</p>
  </div>

  <h3 style="color: var(--course-ink); margin-bottom: 1.5rem;">{% include ph.html name="check-circle" %} Prérequis</h3>
  
  <div class="prerequisite-item">
    <div class="prerequisite-icon">{% include ph.html name="ruler" %}</div>
    <div>
      <strong>Mathématiques avancées</strong>
      <p style="margin: 0; color: #666; font-size: 0.95rem;">Algèbre linéaire, calcul différentiel et intégral, équations différentielles</p>
    </div>
  </div>
  
  <div class="prerequisite-item">
    <div class="prerequisite-icon">{% include ph.html name="desktop" %}</div>
    <div>
      <strong>Programmation scientifique</strong>
      <p style="margin: 0; color: #666; font-size: 0.95rem;">Python ou MATLAB, manipulation de matrices, visualisation</p>
    </div>
  </div>

  <div class="prerequisite-item">
    <div class="prerequisite-icon">{% include ph.html name="hash" %}</div>
    <div>
      <strong>Méthodes numériques de base</strong>
      <p style="margin: 0; color: #666; font-size: 0.95rem;">Résolution d'équations, intégration numérique, approximation</p>
    </div>
  </div>

  <div class="skills-tags">
    <span class="skill-tag">Optimisation linéaire</span>
    <span class="skill-tag">Méthodes du gradient</span>
    <span class="skill-tag">Algorithmes génétiques</span>
    <span class="skill-tag">Analyse de sensibilité</span>
    <span class="skill-tag">MATLAB/Python</span>
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
      <h4>{% include ph.html name="magnifying-glass" %} Analyser les problèmes d'optimisation</h4>
      <p>Identifier et formuler mathématiquement les problèmes d'optimisation en ingénierie.</p>
    </div>
    <div class="objective-card">
      <h4>{% include ph.html name="gear-six" %} Implémenter des algorithmes</h4>
      <p>Programmer et utiliser des méthodes d'optimisation (gradient, Newton, génétiques).</p>
    </div>
    <div class="objective-card">
      <h4>{% include ph.html name="trend-up" %} Choisir les méthodes appropriées</h4>
      <p>Sélectionner l'algorithme optimal selon le type de problème et les contraintes.</p>
    </div>
    <div class="objective-card">
      <h4>{% include ph.html name="desktop" %} Utiliser des outils professionnels</h4>
      <p>Maîtriser MATLAB/Python et les bibliothèques d'optimisation (SciPy, cvxpy).</p>
    </div>
    <div class="objective-card">
      <h4>{% include ph.html name="chart-bar" %} Analyser les performances</h4>
      <p>Évaluer la convergence, la stabilité et la robustesse des solutions.</p>
    </div>
    <div class="objective-card">
      <h4>{% include ph.html name="target" %} Résoudre des cas concrets</h4>
      <p>Appliquer l'optimisation à des problèmes réels d'ingénierie et d'industrie.</p>
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
        <h4>Fondements de l'optimisation</h4>
        <div class="timeline-details">Introduction aux problèmes d'optimisation, formulation mathématique, contraintes.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-week">TP 3-4</div>
      <div class="timeline-content">
        <h4>Optimisation linéaire</h4>
        <div class="timeline-details">Méthode du simplexe, problèmes de transport, applications industrielles.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-week">TP 5-6</div>
      <div class="timeline-content">
        <h4>Méthodes du gradient</h4>
        <div class="timeline-details">Gradient descent, méthode de Newton, optimisation non-linéaire.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-week">TP 7-8</div>
      <div class="timeline-content">
        <h4>Optimisation sous contraintes</h4>
        <div class="timeline-details">Multiplicateurs de Lagrange, méthodes de pénalité, programmation quadratique.</div>
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
      <div class="eval-description">Comptes-rendus de TP, analyse des résultats, qualité des implémentations.</div>
    </div>
    <div class="eval-item">
      <span class="eval-percentage">40%</span>
      <div class="eval-title">Note de Classe</div>
      <div class="eval-description">Participation active, qualité des solutions proposées, présentation des résultats.</div>
    </div>
  </div>
</section>

<section id="ressources" class="section-card">
  <div class="section-header">
    <div class="section-icon">{% include ph.html name="books" %}</div>
    <h2 class="section-title">Ressources et bibliographie</h2>
  </div>
  <div class="resources-grid">
    <div class="resource-card">
      <div class="resource-icon">{% include ph.html name="book-open" %}</div>
      <h4>Ouvrages de référence</h4>
      <ul>
        <li><a href="#" target="_blank" rel="noopener noreferrer">Numerical Optimization - Nocedal & Wright</a></li>
        <li><a href="#" target="_blank" rel="noopener noreferrer">Convex Optimization - Boyd & Vandenberghe</a></li>
      </ul>
    </div>
    <div class="resource-card">
      <div class="resource-icon">{% include ph.html name="desktop" %}</div>
      <h4>Outils logiciels</h4>
      <ul>
        <li>MATLAB Optimization Toolbox</li>
        <li>Python SciPy, NumPy, CVXPY</li>
        <li>Gurobi, CPLEX (solveurs)</li>
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
