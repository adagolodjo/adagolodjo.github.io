---
layout: page
title: Mathématiques 1 — PeiP Semestre 3
subtitle: Modéliser, simuler et analyser
permalink: /teaching/courses/peip-math1-s3/
track: maths
---

<div class="course-hero">
  <div class="course-hero-content">
    <h1>{% include ph.html name="compass" %} Mathématiques 1 — PeiP S3</h1>
    <p class="subtitle">Modéliser, simuler et analyser</p>
    <div class="hero-badges">
      <span class="hero-badge">{% include ph.html name="graduation-cap" %} Niveau Undergraduate</span>
      <span class="hero-badge">{% include ph.html name="timer" %} 20h CTD</span>
      <span class="hero-badge">{% include ph.html name="target" %} Génie biologique & alimentaire</span>
      <span class="hero-badge">{% include ph.html name="chart-bar" %} S3</span>
    </div>
  </div>
</div>

<section class="section-card">
  <div class="section-header">
    <div class="section-icon">{% include ph.html name="clipboard-text" %}</div>
    <h2 class="section-title">Présentation du cours</h2>
  </div>

  <p style="font-size: 1.1rem; line-height: 1.7; color: #555; margin-bottom: 2rem;">
    Ce semestre donne les outils de modélisation directement utiles aux sciences de l'ingénieur en <strong>génie biologique et alimentaire</strong> : analyse de données expérimentales, approximation, équations différentielles, transformation de Laplace et analyse spectrale. Il s'appuie sur les complexes et les fractions rationnelles du S2 et se termine par une SAÉ autour d'un fermenteur.
  </p>

  <div class="info-box">
    <h4>{% include ph.html name="chart-bar" %} Informations générales</h4>
    <p><strong>Code :</strong> PEIP-MATH1-S3<br>
    <strong>Durée :</strong> 20h (Cours-TD)<br>
    <strong>Semestre :</strong> S3 — PeiP, Polytech Lille<br>
    <strong>Niveau :</strong> Undergraduate<br>
    <strong>Évaluation :</strong> contrôle individuel + SAÉ (à confirmer)</p>
  </div>

  <div class="info-box">
    <h4>{% include ph.html name="factory" %} Fil rouge : une laiterie</h4>
    <p>D'un module à l'autre et d'un semestre à l'autre, les exemples et les mises en situation s'appuient sur une même laiterie fictive : ligne de conditionnement, pasteurisateur, fermenteur, cuve agitée, contrôle qualité.</p>
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
      <h4>{% include ph.html name="chart-bar" %} Analyser des données</h4>
      <p>Résumer, représenter et interpréter des mesures ; raisonner avec l'incertitude ; suivre une production par carte de contrôle.</p>
    </div>
    <div class="objective-card">
      <h4>{% include ph.html name="trend-up" %} Approcher et linéariser</h4>
      <p>Utiliser les développements limités pour calculer des limites et simplifier un modèle.</p>
    </div>
    <div class="objective-card">
      <h4>{% include ph.html name="thermometer" %} Modéliser par des équations différentielles</h4>
      <p>Résoudre les équations linéaires du 1er et du 2nd ordre, à la main, par Laplace ou numériquement.</p>
    </div>
    <div class="objective-card">
      <h4>{% include ph.html name="heartbeat" %} Lire un spectre</h4>
      <p>Décomposer un signal périodique, identifier ses fréquences dominantes et interpréter un filtrage.</p>
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
      <div style="font-weight: 600; color: var(--course-accent-ink); font-size: 1.1rem; margin-bottom: 0.5rem;">S3-M1 — Statistiques et probabilités (4h)</div>
      <div>
        <h4>Analyser des données, contrôle qualité</h4>
        <div style="color: #666; font-size: 0.95rem; margin-top: 0.5rem; font-style: italic;">Statistiques descriptives (moyenne, médiane, variance, écart-type, histogrammes, boîtes à moustaches), probabilités élémentaires et loi normale, carte de contrôle ; rappels de dénombrement.<br>Laiterie : taux de matière grasse d'une série de bouteilles, carte de contrôle de la ligne. Analyse sur tableur ou Python.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div style="font-weight: 600; color: var(--course-accent-ink); font-size: 1.1rem; margin-bottom: 0.5rem;">S3-M2 — Équivalents et développements limités (3h)</div>
      <div>
        <h4>Approcher une fonction par un polynôme</h4>
        <div style="color: #666; font-size: 0.95rem; margin-top: 0.5rem; font-style: italic;">Équivalents, formule de Taylor-Young, développements limités usuels (eˣ, sin, cos, ln(1+x), (1+x)^α), opérations, calcul de limites.<br>Application : linéarisation d'un modèle, règle du Q₁₀ (effet de la température sur la fermentation).</div>
      </div>
    </div>
    <div class="timeline-item">
      <div style="font-weight: 600; color: var(--course-accent-ink); font-size: 1.1rem; margin-bottom: 0.5rem;">S3-M3 — Équations différentielles (4h)</div>
      <div>
        <h4>Modéliser une évolution</h4>
        <div style="color: #666; font-size: 0.95rem; margin-top: 0.5rem; font-style: italic;">Équations linéaires du 1er ordre à coefficients constants et second membre simple ; équations du 2nd ordre à coefficients constants (équation caractéristique via les complexes du S2) ; méthode d'Euler sur tableur ou Python.<br>Application : refroidissement du lait après pasteurisation (loi de Newton), croissance des ferments.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div style="font-weight: 600; color: var(--course-accent-ink); font-size: 1.1rem; margin-bottom: 0.5rem;">S3-M4 — Transformation de Laplace (3h)</div>
      <div>
        <h4>Résoudre autrement</h4>
        <div style="color: #666; font-size: 0.95rem; margin-top: 0.5rem; font-style: italic;">Définition, table des transformées, transformée d'une dérivée, résolution d'une équation différentielle, réponse à un échelon, inversion par éléments simples (S2).<br>Application : réponse de la température du pasteurisateur à un échelon de consigne.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div style="font-weight: 600; color: var(--course-accent-ink); font-size: 1.1rem; margin-bottom: 0.5rem;">S3-M5 — Signaux périodiques et spectre (3h30)</div>
      <div>
        <h4>Séries de Fourier, introduction à la transformée</h4>
        <div style="color: #666; font-size: 0.95rem; margin-top: 0.5rem; font-style: italic;">Coefficients de Fourier, spectre d'un signal périodique, idée de la transformée de Fourier, FFT numérique sur une mesure.<br>Application : vibrations de l'agitateur d'une cuve — fréquence dominante et filtrage.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div style="font-weight: 600; color: var(--course-accent-ink); font-size: 1.1rem; margin-bottom: 0.5rem;">SAÉ 2 — Concevoir et piloter un fermenteur (2h)</div>
      <div>
        <h4>Situation d'apprentissage et d'évaluation</h4>
        <div style="color: #666; font-size: 0.95rem; margin-top: 0.5rem; font-style: italic;">Travail en groupe préparé en autonomie, finalisé et présenté en séance : analyse statistique de mesures (S3-M1), linéarisation (S3-M2), modèle et simulation (S3-M3), réponse par Laplace (S3-M4), spectre de l'agitation (S3-M5), note de conception.</div>
      </div>
    </div>
  </div>

  <div class="info-box" style="margin-top: 1.5rem;">
    <h4>{% include ph.html name="lightbulb" %} Prérequis</h4>
    <p>La transformation de Laplace et l'analyse de Fourier s'appuient sur le calcul intégral (primitives usuelles, intégration par parties, intégrale sur [0, +∞[), traité dans le cours d'analyse du parcours. 30 min de marge sont réservées dans le semestre pour un rappel ou un retour sur contrôle.</p>
  </div>
</section>

<section class="section-card">
  <div class="section-header">
    <div class="section-icon">{% include ph.html name="chart-bar" %}</div>
    <h2 class="section-title">Modalités d'évaluation</h2>
  </div>

  <div class="info-box">
    <p>Organisation envisagée sur l'ensemble du parcours (S1 → S3), pondérations à confirmer avec la coordination pédagogique du parcours PeiP :</p>
    <ul>
      <li><strong>Positionnement</strong> (S1, première séance) : test de 20 min, non noté, qui oriente le travail personnel.</li>
      <li><strong>Contrôles individuels</strong> sur le noyau des modules : environ 50 %.</li>
      <li><strong>SAÉ 1</strong> (fin de S2) et <strong>SAÉ 2</strong> (fin de S3), en groupe : environ 25 % chacune. L'énoncé est distribué 3 à 4 semaines avant ; la séance de 2h sert à finaliser, rendre et présenter.</li>
    </ul>
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
