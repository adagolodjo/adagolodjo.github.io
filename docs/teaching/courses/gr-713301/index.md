---
layout: page
title: "GR-713301 Automatique: Régulation de Système"
subtitle: "Théorie du contrôle automatique et régulation de système"
permalink: /teaching/courses/gr-713301/
image: /assets/images/projects/automatique-regulation.jpg
track: industrie
---


<div class="course-hero">
  <div class="course-hero-content">
    <h1>Automatique: Régulation de Système</h1>
    <p class="subtitle">Théorie du contrôle automatique et régulation de système</p>
    <div class="hero-badges">
      <span class="hero-badge">🏭 GR-713301</span>
      <span class="hero-badge">⏱️ 16h TP</span>
      <span class="hero-badge">📅 Semestre 3</span>
      <span class="hero-badge">🔧 Niveau Graduate</span>
    </div>
  </div>
</div>

<nav class="course-nav">
  <div class="nav-links">
    <a href="#objectifs" class="nav-link">🎧 Objectifs</a>
    <a href="#programme" class="nav-link">📚 Programme</a>
    <a href="#evaluation" class="nav-link">📊 Évaluation</a>
    <a href="#ressources" class="nav-link">💾 Ressources</a>
    <a href="#contact" class="nav-link">📞 Contact</a>
  </div>
</nav>

<div class="section-card" id="description">
  <div class="section-header">
    <div class="section-icon">🎛️</div>
    <h2 class="section-title">Description du cours</h2>
  </div>
  
  <p class="lead">Ce cours pratique d'automatique met l'accent sur l'identification paramétrique et la régulation temps réel de systèmes physiques. Les étudiants travaillent sur trois types de procédés industriels : thermique (chauffage d'air), hydraulique (régulation de niveau) et électromécanique (moteur CC).</p>
  
  <div class="info-box">
    <strong>🎯 Organisation :</strong> Formation en binômes avec rotation sur les 3 procédés. Première séance dédiée au développement d'outils MATLAB d'identification, puis 3 séances de TP temps réel sur maquettes industrielles avec système d'acquisition Speedgoat.
  </div>
</div>

<div class="section-card" id="objectifs">
  <div class="section-header">
    <div class="section-icon">🎧</div>
    <h2 class="section-title">Objectifs pédagogiques</h2>
  </div>
  
  <div class="objectives-grid">
    <div class="objective-card">
      <h4>🔧 Identification de systèmes</h4>
      <p>Développer et valider des méthodes d'identification paramétrique sur des systèmes physiques réels (thermique, hydraulique, électromécanique).</p>
    </div>
    
    <div class="objective-card">
      <h4>📊 Régulation temps réel</h4>
      <p>Concevoir et implémenter des régulateurs P, PI, PID sur des procédés industriels avec système d'acquisition Speedgoat.</p>
    </div>
    
    <div class="objective-card">
      <h4>🎛️ Analyse de performances</h4>
      <p>Évaluer la précision, rapidité, robustesse et stabilité des systèmes régulés en conditions réelles.</p>
    </div>
    
    <div class="objective-card">
      <h4>💻 Outils professionnels</h4>
      <p>Maîtriser MATLAB/Simulink pour l'identification, la simulation et la commande temps réel de systèmes automatiques.</p>
    </div>
  </div>
</div>

<div class="section-card" id="programme">
  <div class="section-header">
    <div class="section-icon">📚</div>
    <h2 class="section-title">Programme détaillé</h2>
  </div>
  
  <div class="timeline">
    <div class="timeline-item">
      <h4>🔍 TP 1: Identification et outils de simulation</h4>
      <ul>
        <li>Développement d'outils d'identification paramétrique en MATLAB</li>
        <li>Méthodes graphiques : premier ordre et méthode de Broïda</li>
        <li>Validation par simulation sous Simulink</li>
        <li>Functions : extract(), rech_ech(), interpole(), p_ordre(), broida()</li>
      </ul>
      <p><strong>Durée:</strong> 4h TP • <strong>Lieu:</strong> Salle B302 (simulation)</p>
    </div>
    
    <div class="timeline-item">
      <h4>🌡️ TP 2: Régulation thermique</h4>
      <ul>
        <li>Processus de chauffage d'air avec résistance et ventilation</li>
        <li>Identification avec retard pur et constante de temps</li>
        <li>Régulation analogique P et numérique PI</li>
        <li>Régulateur de Smith pour compensation du retard</li>
      </ul>
      <p><strong>Durée:</strong> 4h TP • <strong>Lieu:</strong> Salle C008 (temps réel)</p>
    </div>
    
    <div class="timeline-item">
      <h4>💧 TP 3: Régulation de niveau</h4>
      <ul>
        <li>Système hydraulique avec pompe et réservoirs</li>
        <li>Identification autour d'un point de fonctionnement</li>
        <li>Régulation PID avec analyse de robustesse</li>
        <li>Tests de rejet de perturbation et adaptabilité</li>
      </ul>
      <p><strong>Durée:</strong> 4h TP • <strong>Lieu:</strong> Salle C008 (temps réel)</p>
    </div>
    
    <div class="timeline-item">
      <h4>⚡ TP 4: Régulation de vitesse moteur</h4>
      <ul>
        <li>Moteur à courant continu avec génératrice tachymétrique</li>
        <li>Régulateurs proportionnel (P) et proportionnel-intégral (PI)</li>
        <li>Analyse de l'effet de la charge et tests de robustesse</li>
        <li>Validation théorique et optimisation des performances</li>
      </ul>
      <p><strong>Durée:</strong> 4h TP • <strong>Lieu:</strong> Salle C008 (temps réel)</p>
    </div>
  </div>
</div>

<div class="section-card" id="evaluation">
  <div class="section-header">
    <div class="section-icon">📊</div>
    <h2 class="section-title">Modalités d'évaluation</h2>
  </div>
  
  <div class="evaluation-grid">
    <div class="eval-item">
      <span class="eval-percentage">60%</span>
      <h4 class="eval-title">Évaluations pratiques</h4>
      <p class="eval-description">Validation des manipulations expérimentales et analyses de résultats (séances 2, 3, 4) - <strong>Note collective</strong></p>
    </div>
    
    <div class="eval-item">
      <span class="eval-percentage">25%</span>
      <h4 class="eval-title">Outils d'identification</h4>
      <p class="eval-description">Développement et validation des fonctions MATLAB (séance 1) - <strong>Note collective</strong></p>
    </div>
    
    <div class="eval-item">
      <span class="eval-percentage">15%</span>
      <h4 class="eval-title">Implication en séance</h4>
      <p class="eval-description">Participation active, collaboration efficace, concentration pendant le TP - <strong>Note individuelle</strong></p>
    </div>
  </div>
  
  <div class="info-box" style="margin-top: 1.5rem; background: linear-gradient(135deg, #fff3cd, #ffeaa7); border-left: 4px solid #e17055;">
    <strong>⚠️ Règles importantes :</strong><br>
    • <strong>Temps passé sur le téléphone = temps non consacré au TP</strong><br>
    • Interrogations possibles en début de séance pour vérifier la préparation<br>
    • Notes pratiques collectives par binôme, interrogations individuelles<br>
    • Participation active requise : collaboration efficace et concentration soutenue
  </div>
  
  <div class="info-box" style="margin-top: 1rem;">
    <strong>📋 Modalités spéciales :</strong> Les résultats d'identification de la séance 2 doivent être partagés sur Moodle® dès la fin de séance pour permettre aux autres binômes de paramétrer leurs régulateurs. Organisation en rotation : chaque binôme effectue l'identification sur un procédé et la régulation sur les deux autres.
  </div>
</div>

<div class="section-card" id="ressources">
  <div class="section-header">
    <div class="section-icon">💾</div>
    <h2 class="section-title">Ressources pédagogiques</h2>
  </div>
  
  <div class="resources-grid">
    <div class="resource-card">
      <div class="resource-icon">🔧</div>
      <h4>Systèmes expérimentaux</h4>
      <ul>
        <li><strong>Processus thermique :</strong> Chauffage d'air avec ventilation</li>
        <li><strong>Système hydraulique :</strong> Pompe, réservoirs et capteurs de niveau</li>
        <li><strong>Moteur électrique :</strong> Machine CC avec génératrice tachymétrique</li>
        <li><strong>Instrumentation :</strong> Capteurs 4-20mA, interface analogique</li>
      </ul>
    </div>
    
    <div class="resource-card">
      <div class="resource-icon">💻</div>
      <h4>Logiciels et acquisition</h4>
      <ul>
        <li><strong>MATLAB/Simulink :</strong> Identification et simulation temps réel</li>
        <li><strong>Speedgoat :</strong> Système d'acquisition et contrôle industriel</li>
        <li><strong>Carte SC-2345 :</strong> Interface analogique 4-20mA</li>
        <li><strong>Functions personnalisées :</strong> Outils d'identification développés</li>
      </ul>
    </div>
    
    <div class="resource-card">
      <div class="resource-icon">📄</div>
      <h4>Documentation TP</h4>
      <ul>
        <li><strong>Supports détaillés :</strong> 4 fascicules de TP complets</li>
        <li><strong>Procédures expérimentales :</strong> Protocoles step-by-step</li>
        <li><strong>Méthodes d'identification :</strong> Premier ordre et Broïda</li>
        <li><strong>Consignes sécurité :</strong> Manipulations en conditions réelles</li>
        <li><strong>📚 <a href="https://nextcloud.univ-lille.fr/index.php/s/QeEH255YiJeEMmT" target="_blank" rel="noopener" style="color: var(--course-accent-ink); text-decoration: none; font-weight: bold;">Rappels Matlab</a></strong> - Cours théorique de base</li>
        <li><strong>📥 <a href="https://nextcloud.univ-lille.fr/index.php/s/Cj6tFw3gFrspLkc" target="_blank" rel="noopener" style="color: var(--course-accent-ink); text-decoration: none; font-weight: bold;">Télécharger les supports PDF</a></strong></li>
      </ul>
    </div>
  </div>
</div>

<div class="section-card" id="contact">
  <div class="section-header">
    <div class="section-icon">📞</div>
    <h2 class="section-title">Informations de contact</h2>
  </div>
  
  <div class="contact-info">
    <div class="contact-item">
      <div class="contact-icon">👨‍🏫</div>
      <div>
        <strong>Équipe enseignante</strong><br>
        Prof. Jean-Yves Dieulot & Dr. Yinoussa Adagolodjo
      </div>
    </div>
    
    <div class="contact-item">
      <div class="contact-icon">✉️</div>
      <div>
        <strong>Email</strong><br>
        Utiliser le formulaire de contact sur la page d'accueil
      </div>
    </div>
    
    <div class="contact-item">
      <div class="contact-icon">🏢</div>
      <div>
        <strong>Lieux des TP</strong><br>
        Salle B302 (Simulation) et C008 (Temps réel)
      </div>
    </div>
    
    <div class="contact-item">
      <div class="contact-icon">🕰️</div>
      <div>
        <strong>Horaires</strong><br>
        Créneaux variables selon planning - Consulter l'emploi du temps
      </div>
    </div>
  </div>
</div>
