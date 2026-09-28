---
layout: page
title: Mathématiques 1 — PeiP Semestre 2
subtitle: Vers les outils pour les sciences de l'ingénieur
permalink: /teaching/courses/peip-math1-s2/
track: maths
---

<div class="course-hero">
  <div class="course-hero-content">
    <h1>{% include ph.html name="compass" %} Mathématiques 1 — PeiP S2</h1>
    <p class="subtitle">Vers les outils pour les sciences de l'ingénieur</p>
    <div class="hero-badges">
      <span class="hero-badge">{% include ph.html name="graduation-cap" %} Niveau Undergraduate</span>
      <span class="hero-badge">{% include ph.html name="timer" %} 20h CTD</span>
      <span class="hero-badge">{% include ph.html name="target" %} Génie biologique & alimentaire</span>
      <span class="hero-badge">{% include ph.html name="chart-bar" %} S2</span>
    </div>
  </div>
</div>

<section class="section-card">
  <div class="section-header">
    <div class="section-icon">{% include ph.html name="clipboard-text" %}</div>
    <h2 class="section-title">Présentation du cours</h2>
  </div>

  <p style="font-size: 1.1rem; line-height: 1.7; color: #555; margin-bottom: 2rem;">
    Ce semestre s'appuie sur les acquis du Terminale et du S1 pour introduire des concepts mathématiques plus directement utiles à la modélisation et à la résolution de problèmes d'ingénierie, avec un ancrage fort dans le <strong>génie biologique et alimentaire</strong> : cinétique chimique, dynamique des populations, croissance microbienne, transferts thermiques, contrôle qualité.
  </p>

  <div class="info-box">
    <h4>{% include ph.html name="chart-bar" %} Informations générales</h4>
    <p><strong>Code :</strong> PEIP-MATH1-S2<br>
    <strong>Durée :</strong> 20h (Cours-TD)<br>
    <strong>Semestre :</strong> S2 — PeiP, Polytech Lille<br>
    <strong>Niveau :</strong> Undergraduate<br>
    <strong>Évaluation :</strong> DS (à confirmer)</p>
  </div>
</section>

<section class="section-card">
  <div class="section-header">
    <div class="section-icon">{% include ph.html name="target" %}</div>
    <h2 class="section-title">Objectifs pédagogiques</h2>
  </div>

  <p style="font-size: 1.05rem; margin-bottom: 2rem; color: #555;">
    <strong>À l'issue de ce semestre, les étudiants seront capables de :</strong>
  </p>

  <div class="objectives-grid">
    <div class="objective-card">
      <h4>{% include ph.html name="trend-up" %} Utiliser les développements limités</h4>
      <p>Formules de Taylor-Young, calcul de limites complexes, recherche d'asymptotes, analyse de position de courbe.</p>
    </div>
    <div class="objective-card">
      <h4>{% include ph.html name="broadcast" %} Résoudre des équations différentielles</h4>
      <p>Équations linéaires du 1er et 2nd ordre, systèmes 2×2 simples, modèles proie-prédateur et dynamique des populations.</p>
    </div>
    <div class="objective-card">
      <h4>{% include ph.html name="cube" %} Manipuler des fonctions de plusieurs variables</h4>
      <p>Dérivées partielles, gradient, recherche d'extrema, optimisation sous contraintes (Lagrange, niveau élémentaire).</p>
    </div>
    <div class="objective-card">
      <h4>{% include ph.html name="chart-bar" %} Analyser des données</h4>
      <p>Statistiques descriptives, probabilités élémentaires, loi normale, applications au contrôle qualité.</p>
    </div>
  </div>
</section>

<section class="section-card">
  <div class="section-header">
    <div class="section-icon">{% include ph.html name="calendar-blank" %}</div>
    <h2 class="section-title">Programme détaillé (20h)</h2>
  </div>

  <div class="timeline">
    <div class="timeline-item">
      <div style="font-weight: 600; color: var(--course-accent-ink); font-size: 1.1rem; margin-bottom: 0.5rem;">Module 4 — Développements limités (3h)</div>
      <div>
        <h4>Approximation polynomiale des fonctions</h4>
        <div style="color: #666; font-size: 0.95rem; margin-top: 0.5rem; font-style: italic;">Approximation d'une fonction complexe par un polynôme au voisinage d'un point. Formules de Taylor-Young : développements limités des fonctions usuelles (eˣ, sin(x), cos(x), ln(1+x), (1+x)^a). Applications : calcul de limites complexes, recherche d'asymptotes, analyse de position de courbe.</div>
      </div>
    </div>

    <div class="timeline-item">
      <div style="font-weight: 600; color: var(--course-accent-ink); font-size: 1.1rem; margin-bottom: 0.5rem;">Module 5 — Équations différentielles (7h)</div>
      <div>
        <h4>Modélisation de phénomènes biologiques et alimentaires</h4>
        <div style="color: #666; font-size: 0.95rem; margin-top: 0.5rem; font-style: italic;">
          Introduction : cinétique chimique, dynamique des populations, croissance microbienne, transferts thermiques.<br>
          Équations du 1er ordre : équations linéaires à coefficients constants, méthode de variation de la constante.<br>
          Équations du 2ᵉ ordre : équations linéaires à coefficients constants et second membre simple (constant, polynomial, exponentiel) ; résolution de l'équation caractéristique via les nombres complexes du S1.<br>
          Introduction aux systèmes d'équations différentielles : systèmes linéaires 2×2 simples, modèles proie-prédateur, compétition entre espèces.
        </div>
      </div>
    </div>

    <div class="timeline-item">
      <div style="font-weight: 600; color: var(--course-accent-ink); font-size: 1.1rem; margin-bottom: 0.5rem;">Module 6 — Fonctions de plusieurs variables (6h)</div>
      <div>
        <h4>Introduction et applications en génie biologique</h4>
        <div style="color: #666; font-size: 0.95rem; margin-top: 0.5rem; font-style: italic;">
          Définition et représentation : notion de fonction f(x, y), courbes de niveau, surfaces.<br>
          Dérivées partielles : calcul, signification géométrique, interprétation physique.<br>
          Notion de gradient : vecteur indiquant la direction de plus grande pente.<br>
          Recherche d'extrema : annulation du gradient.<br>
          Applications pratiques : optimisation de rendement/coût, modélisation dépendant de plusieurs paramètres (température, pH, concentration), introduction aux multiplicateurs de Lagrange (niveau élémentaire).
        </div>
      </div>
    </div>

    <div class="timeline-item">
      <div style="font-weight: 600; color: var(--course-accent-ink); font-size: 1.1rem; margin-bottom: 0.5rem;">Module 7 — Statistiques descriptives et probabilités élémentaires (4h)</div>
      <div>
        <h4>Analyse de données et contrôle qualité</h4>
        <div style="color: #666; font-size: 0.95rem; margin-top: 0.5rem; font-style: italic;">
          Statistiques descriptives : moyenne arithmétique, médiane, mode, variance, écart-type, histogrammes, boîtes à moustaches.<br>
          Probabilités élémentaires : notion de probabilité, événements, loi normale (propriétés de base et applications).<br>
          Applications en génie biologique et alimentaire : analyse de données expérimentales simples, introduction au contrôle qualité en industrie alimentaire.
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section-card">
  <div class="section-header">
    <div class="section-icon">{% include ph.html name="chart-bar" %}</div>
    <h2 class="section-title">Modalités d'évaluation</h2>
  </div>

  <div class="info-box">
    <p>Modalités à confirmer avec la coordination pédagogique du parcours PeiP.</p>
  </div>
</section>

<section class="section-card">
  <div class="section-header">
    <div class="section-icon">{% include ph.html name="phone" %}</div>
    <h2 class="section-title">Contact & encadrement</h2>
  </div>

  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: rgba(155, 77, 202, 0.1); border-radius: 12px;">
      <span style="font-size: 1.5rem; color: var(--course-accent-ink);">{% include ph.html name="chalkboard-teacher" %}</span>
      <span><strong>Responsable du cours :</strong> Dr. Yinoussa Adagolodjo</span>
    </div>
    <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: rgba(155, 77, 202, 0.1); border-radius: 12px;">
      <span style="font-size: 1.5rem; color: var(--course-accent-ink);">{% include ph.html name="envelope" %}</span>
      <span><strong>Email :</strong> Remplir formulaire de contact sur la page d'accueil</span>
    </div>
    <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: rgba(155, 77, 202, 0.1); border-radius: 12px;">
      <span style="font-size: 1.5rem; color: var(--course-accent-ink);">{% include ph.html name="buildings" %}</span>
      <span><strong>Bureau :</strong> Bâtiment Polytech, Université de Lille</span>
    </div>
  </div>
</section>
