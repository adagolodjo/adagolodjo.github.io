---
layout: page
title: Logique Séquentielle - SAP et Grafcet
subtitle: Description de la commande séquentielle des SAP
permalink: /teaching/courses/logique-industrielle/
image: /assets/images/projects/logique-industrielle.jpg
track: industrie   # accent colour — see partials/_courses.scss
---


<div class="course-hero">
<div class="course-hero-content">
<h1>{% include ph.html name="gear-six" %} Logique Séquentielle - SAP et Grafcet</h1>
<p class="subtitle">Description de la commande séquentielle des SAP </p>
<div class="hero-badges">
<span class="hero-badge">{% include ph.html name="books" %} Niveau Licence/BAC+4 </span>
<span class="hero-badge">{% include ph.html name="timer" %} 22h CMTD + 12h TP</span>
<span class="hero-badge">{% include ph.html name="gear-six" %} Automatisation</span>
<span class="hero-badge">{% include ph.html name="users" %} Systèmes industriels</span>
</div>
</div>
</div>

<nav class="course-nav">
<div class="nav-links">
<a href="#presentation" class="nav-link active">{% include ph.html name="clipboard-text" %} Présentation</a>
<a href="#objectifs" class="nav-link">{% include ph.html name="target" %} Objectifs</a>
<a href="#planning" class="nav-link">{% include ph.html name="calendar-blank" %} Planning</a>
<a href="#cas-pratiques" class="nav-link">{% include ph.html name="buildings" %} Cas pratiques</a>
<a href="#ressources" class="nav-link">{% include ph.html name="books" %} Ressources</a>
<a href="#evaluation" class="nav-link">{% include ph.html name="chart-bar" %} Évaluation</a>
<a href="#contact" class="nav-link">{% include ph.html name="phone" %} Contact</a>
</div>
</nav>

<section id="presentation" class="section-card">
<div class="section-header">
<div class="section-icon">{% include ph.html name="clipboard-text" %}</div>
<h2 class="section-title">Présentation du cours</h2>
</div>

<p style="font-size: 1.1rem; line-height: 1.7; color: #555; margin-bottom: 2rem;">
Ce cours aborde la <b>description de la commande séquentielle des Systèmes Automatisés de Production (SAP)</b>. Les étudiants découvriront l'outil <b>GRAFCET</b> pour la modélisation, apprendront à implémenter sur <b>Automates Programmables Industriels (API)</b>, et maîtriseront la gestion des <b>modes de fonctionnement</b> avec le guide GEMMA. Une approche pratique avec des études de cas industriels concrets permet d'acquérir les compétences essentielles de l'automatisation moderne.
</p>

<div class="info-box">
<h4>{% include ph.html name="chart-bar" %} Informations générales</h4>
<p><strong>Durée :</strong> 22h de CMTD  + 22h de travaux pratiques<br>
<strong>Volume de travail personnel estimé :</strong> = temps_consacré * attention<br>
<strong>Langue d'enseignement :</strong> Français<br>
<strong>Évaluation :</strong> DS, Note de Classe, Note de TP</p>
</div>

<h3 style="color: var(--course-ink); margin-bottom: 1.5rem;">{% include ph.html name="check-circle" %} Prérequis</h3>

<div class="prerequisite-item">
<div class="prerequisite-icon">{% include ph.html name="lightning" %}</div>
<div>
<strong>Algèbre de Boole</strong>
<p style="margin: 0; color: #666; font-size: 0.95rem;">Notions d'Algèbre de Boole, Tableau de Véritée, fonction cannonique, Tablea de Karneau</p>
</div>
</div>

<div class="prerequisite-item">
<div class="prerequisite-icon">{% include ph.html name="desktop" %}</div>
<div>
<strong>Algorithmique</strong>
<p style="margin: 0; color: #666; font-size: 0.95rem;">Bases de la programmation et de la logique algorithmique</p>
</div>
</div>

<div class="prerequisite-item">
<div class="prerequisite-icon">{% include ph.html name="factory" %}</div>
<div>
<strong>Connaissances industrielles</strong>
<p style="margin: 0; color: #666; font-size: 0.95rem;">Notions de base sur les processus industriels et la production</p>
</div>
</div>

<div class="skills-tags">
<span class="skill-tag">Automates programmables</span>
<span class="skill-tag">SCADA</span>
<span class="skill-tag">Ladder</span>
<span class="skill-tag">Supervision industrielle</span>
<span class="skill-tag">Protocoles de communication</span>
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
<h4>{% include ph.html name="buildings" %} Comprendre les Systèmes Automatisés de Production (SAP)</h4>
<p>Maîtriser l'architecture Partie Opérative / Partie Commande et les enjeux de l'automatisation industrielle.</p>
</div>
<div class="objective-card">
<h4>{% include ph.html name="trend-up" %} Maîtriser l'outil GRAFCET</h4>
<p>Concevoir et analyser des systèmes séquentiels avec l'outil GRAFCET (normes IEC 60848), structures parallèles et temporisations.</p>
</div>
<div class="objective-card">
<h4>{% include ph.html name="wrench" %} Implémenter sur Automates Programmables</h4>
<p>Programmer des API en Ladder et Structured Text, gérer les E/S analogiques et numériques.</p>
</div>
<div class="objective-card">
<h4>{% include ph.html name="broadcast" %} Appréhender les communications industrielles</h4>
<p>Mettre en œuvre les protocoles Modbus, Profibus et réseaux Ethernet industriels pour l'intégration système.</p>
</div>
<div class="objective-card">
<h4>{% include ph.html name="gear-six" %} Gérer les modes avec GEMMA</h4>
<p>Appliquer le guide GEMMA pour la gestion des modes de marche et d'arrêt, modes dégradés et sécurités.</p>
</div>
<div class="objective-card">
<h4>{% include ph.html name="chart-bar" %} Résoudre des cas industriels concrets</h4>
<p>Analyser et concevoir des solutions d'automatisation : station de lavage, ligne pharmaceutique, parking intelligent.</p>
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
<div class="timeline-week">Chapitre 1 : Systèmes Automatisés de Production</div>
<div class="timeline-content">
<h4>Introduction aux SAP et automatisation</h4>
<div class="timeline-details">Définition des SAP, architecture PO/PC, objectifs de l'automatisation, domaines d'application industriels.</div>
<ul>
<li><a href="https://nextcloud.univ-lille.fr/index.php/s/6KfTaK7roAG4PcL" target="_blank" rel="noopener noreferrer">{% include ph.html name="chart-bar" %} Parie 1-2 (PDF)</a></li>
</ul>
</div>
</div>
<div class="timeline-item">
<div class="timeline-week">Chapitre 2 : Logique Combinatoire vs Séquentielle</div>
<div class="timeline-content">
<h4>Algèbre de Boole et logique séquentielle</h4>
<div class="timeline-details">Rappels booléens, différences combinatoire/séquentiel, outils de description, chronogrammes.
<ul>
<li><a href=" https://nextcloud.univ-lille.fr/index.php/s/6KfTaK7roAG4PcL" target="_blank" rel="noopener noreferrer">{% include ph.html name="chart-bar" %} Parie 1-2 (PDF)</a></li>
</ul>
</div>
</div>
</div>
<div class="timeline-item">
<div class="timeline-week">Chapitre 3 : Les Bases du GRAFCET</div>
<div class="timeline-content">
<h4>Fondements du GRAFCET (IEC 60848)</h4>
<div class="timeline-details">Étapes, transitions, réceptivités, structures ET/OU, règles d'évolution, temporisations.</div>
<ul>
<li><a href="https://nextcloud.univ-lille.fr/index.php/s/dxX8YpFdkcbCrcw" target="_blank" rel="noopener noreferrer">{% include ph.html name="chart-bar" %} Parie 1-2 (PDF)</a></li>
</ul>
</div>
</div>
<div class="timeline-item">
<div class="timeline-week">Chapitre 4 : Concepts Avancés GRAFCET</div>
<div class="timeline-content">
<h4>Structures complexes et actions avancées</h4>
<div class="timeline-details">Parallélisme, compteurs, variables, actions conditionnelles, macro-étapes, forçage.</div>
</div>
</div>
<div class="timeline-item">
<div class="timeline-week">Chapitre 5 : Études de Cas Industrielles</div>
<div class="timeline-content">
<h4>Applications pratiques</h4>
<div class="timeline-details">Station de lavage, ligne pharmaceutique, parking intelligent, arbitrage de ressources.</div>
</div>
</div>
<div class="timeline-item">
<div class="timeline-week">Chapitre 6 : Automates Programmables (API)</div>
<div class="timeline-content">
<h4>Implémentation sur API</h4>
<div class="timeline-details">Architecture API, cycle de fonctionnement, programmation Ladder/ST, du GRAFCET au code.</div>
</div>
</div>
<div class="timeline-item">
<div class="timeline-week">Chapitre 7 : Sécurité et Normes</div>
<div class="timeline-content">
<h4>Sécurité fonctionnelle et SIL</h4>
<div class="timeline-details">Normes IEC 61508/61511, niveaux SIL, architectures redondantes, GRAFCET sécuritaire.</div>
</div>
</div>
<div class="timeline-item">
<div class="timeline-week">Chapitre 8 : Systèmes Complexes et GEMMA</div>
<div class="timeline-content">
<h4>Coordination et modes de fonctionnement</h4>
<div class="timeline-details">Structuration multi-niveaux, guide GEMMA, modes dégradés, synchronisation multi-postes.</div>
</div>
</div>
<div class="timeline-item">
<div class="timeline-week">Chapitre 9 : Industrie 4.0 et Intelligence</div>
<div class="timeline-content">
<h4>GRAFCET intelligent et maintenance prédictive</h4>
<div class="timeline-details">IoT, GRAFCET auto-adaptatif, maintenance prédictive, métriques TRS/OEE.</div>
</div>
</div>
<div class="timeline-item">
<div class="timeline-week">Chapitre 10 : Évaluation et Projets</div>
<div class="timeline-content">
<h4>Exercices pratiques et mini-projets</h4>
<div class="timeline-details">QCM, exercices porte de garage, projet ascenseur intelligent, auto-évaluation.</div>
</div>
</div>
</div>
</section>

<section id="cas-pratiques" class="section-card">
<div class="section-header">
<div class="section-icon">{% include ph.html name="buildings" %}</div>
<h2 class="section-title">Études de Cas Industrielles</h2>
</div>

<p style="font-size: 1.05rem; margin-bottom: 2rem; color: #555;">
Le cours s'appuie sur des <strong>études de cas réelles</strong> issues de l'industrie pour illustrer les concepts GRAFCET et d'automatisation. Ces exemples concrets permettent de comprendre les défis et solutions de l'automatisation moderne.
</p>

<div class="objectives-grid">
<div class="objective-card">
<h4>{% include ph.html name="car" %} Station de Lavage Automatique</h4>
<p><strong>Système sécurisé</strong> avec détection véhicule, cycle optimisé (5 min max), gestion modes économiques et interface client intuitive. GRAFCET complet avec phases brossage, rinçage, séchage.</p>
</div>
<div class="objective-card">
<h4>{% include ph.html name="pill" %} Ligne Pharmaceutique</h4>
<p><strong>Traçabilité complète</strong> (lot, date, heure), contrôle qualité à chaque étape, validation avant progression, rejet automatique des défauts. Contraintes réglementaires strictes.</p>
</div>
<div class="objective-card">
<h4>{% include ph.html name="car-simple" %} Parking Intelligent IoT</h4>
<p><strong>Innovations Industrie 4.0</strong> : capteurs IoT, IA intégrée, optimisation attribution place optimale, paiement connecté (QR code, NFC), analytics temps réel.</p>
</div>
<div class="objective-card">
<h4>{% include ph.html name="boat" %} Port Automatisé</h4>
<p><strong>Système complexe</strong> avec 3 grues, 20 AGV, 5 zones stockage. Algorithme d'optimisation avec gestion priorités dynamiques. Coût immobilisation : 5000€/heure. ROI < 18 mois.</p>
</div>
<div class="objective-card">
<h4>{% include ph.html name="car-profile" %} Ligne Automobile</h4>
<p><strong>Multi-postes synchronisés</strong> : 6 postes en série (soudage, assemblage, peinture), 2 robots mobiles partagés, 3 convoyeurs, système contrôle qualité global.</p>
</div>
<div class="objective-card">
<h4>{% include ph.html name="garage" %} Porte de Garage Intelligente</h4>
<p><strong>Projet pratique</strong> : télécommande, fins de course, sécurité photocellule, éclairage automatique 2 minutes, mode hiver avec préchauffage moteur. Exercice d'évaluation.</p>
</div>
</div>

<div class="info-box" style="margin-top: 2rem;">
<h4>{% include ph.html name="trend-up" %} Bénéfices Mesurés de l'Automatisation</h4>
<p>
<strong>Productivité</strong> : +15 à 30% en moyenne •
<strong>Qualité</strong> : Réduction erreurs humaines -40% •
<strong>Sécurité</strong> : -60% accidents industriels •
<strong>Disponibilité</strong> : 24h/24 fonctionnement possible •
<strong>ROI</strong> : Retour sur investissement < 3 ans typique
</p>
</div>
</section>

<section id="ressources" class="section-card">
<div class="section-header">
<div class="section-icon">{% include ph.html name="books" %}</div>
<h2 class="section-title">Ressources et bibliographie</h2>
</div>
<div class="resources-grid">
<div class="resource-card">
<div class="resource-icon">{% include ph.html name="file-text" %}</div>
<h4>Supports de cours</h4>
<ul>
<li><a href="https://nextcloud.univ-lille.fr/index.php/s/pqtkmsterkeYdJA" target="_blank" rel="noopener noreferrer">{% include ph.html name="chart-bar" %} Logique séquentielle et Grafcet (PDF)</a></li>
<li><a href="https://nextcloud.univ-lille.fr/index.php/s/KyQsrfbqgLCFf2s" target="_blank" rel="noopener noreferrer">{% include ph.html name="clipboard-text" %} TD Grafcet - Gestion de priorités (PDF)</a></li>
<li><a href="https://nextcloud.univ-lille.fr/index.php/s/AztKTgwstE5y4mq" target="_blank" rel="noopener noreferrer">{% include ph.html name="check-circle" %} Correction exercice 1 - Priorités (PDF)</a></li>
<li><a href="./exercice_cours_partie_3.pdf" target="_blank">{% include ph.html name="note-pencil" %} Exercices Cours Partie 3 (PDF)</a></li>
<li><a href="./sujets_grafcet_1.pdf" target="_blank">{% include ph.html name="clipboard-text" %} Sujets GRAFCET 1 (PDF)</a></li>
<li><a href="https://nextcloud.univ-lille.fr/index.php/s/y33aTe6XRxZrtjL" target="_blank" rel="noopener noreferrer">{% include ph.html name="ruler" %} Partie 5 : Grafcet - Structuration Systèmes complexes (PDF)</a></li>
<li><a href="https://nextcloud.univ-lille.fr/index.php/s/y33aTe6XRxZrtjL" target="_blank" rel="noopener noreferrer">{% include ph.html name="gear-six" %} Partie 6 : Grafcet - Mise en œuvre de la commande (PDF)</a></li>
</ul>
</div>
<div class="resource-card">
<div class="resource-icon">{% include ph.html name="flask" %}</div>
<h4>Documents de TP</h4>
<ul>
<li><strong>{% include ph.html name="elevator" %} Ascenseur</strong>
<ul style="margin-top: 0.5rem;">
<li><a href="https://nextcloud.univ-lille.fr/index.php/s/43itcnbmEodCske" target="_blank">Sujet TP Ascenseur (PDF)</a></li>
<li><a href="#" target="_blank">Cahier des charges Ascenseur (PDF)</a></li>
</ul>
</li>
<li><strong>{% include ph.html name="traffic-signal" %} Traffic Train</strong>
<ul style="margin-top: 0.5rem;">
<li><a href="https://nextcloud.univ-lille.fr/index.php/s/cXMy5XPnxaaZqe2" target="_blank">Sujet TP Traffic Train (PDF)</a></li>
<li><a href="#" target="_blank">Schéma réseau ferroviaire (PDF)</a></li>
</ul>
</li>
<li><strong>{% include ph.html name="gear-six" %} TP Festo Persage</strong>
<ul style="margin-top: 0.5rem;">
<li><a href="https://nextcloud.univ-lille.fr/index.php/s/cXMy5XPnxaaZqe2" target="_blank" rel="noopener noreferrer">{% include ph.html name="folder" %} Documents TP Festo Persage</a></li>
</ul>
</li>
<li><strong>{% include ph.html name="package" %} Tri de Caisses</strong>
<ul style="margin-top: 0.5rem;">
<li><a href="https://nextcloud.univ-lille.fr/index.php/s/GpCJMEAEMJH2jkH" target="_blank">Manuel de référence (PDF)</a></li>
<li><a href="#" target="_blank">Cahier des charges Tri (PDF)</a></li>
</ul>
</li>
<li><strong>Unity Pro</strong>
<ul style="margin-top: 0.5rem;">
<li><a href="https://nextcloud.univ-lille.fr/index.php/s/FKfop7bET8SdDpi" target="_blank">Sujet TP Tri de Caisses (PDF)</a></li>
<li><a href="https://nextcloud.univ-lille.fr/index.php/s/iwWdNAfMrjg2Bmc" target="_blank">Annex 1 - Programming PLCs with Unity Pro (PDF)</a></li>
</ul>
</li>
<li><strong>{% include ph.html name="robot" %} Robotino</strong>
<ul style="margin-top: 0.5rem;">
<li><a href="https://nextcloud.univ-lille.fr/index.php/s/PF6dff7Z8DBKkRE" target="_blank" rel="noopener noreferrer">Cours Robotino (PDF)</a></li>
<li><a href="https://nextcloud.univ-lille.fr/index.php/s/XLd68t4skomc2cE" target="_blank" rel="noopener noreferrer">Sujet TP Robotino (PDF)</a></li>
<li><a href="https://nextcloud.univ-lille.fr/index.php/s/YFS42JgSxKiYEnY" target="_blank" rel="noopener noreferrer">Data-sheet Robotino (PDF)</a></li>
<li><a href="https://nextcloud.univ-lille.fr/index.php/s/JMDBfGGDx5pNQGo" target="_blank" rel="noopener noreferrer">{% include ph.html name="video-camera" %} Vidéo tutoriel Robotino</a></li>
</ul>
</li>

</ul>
</div>
<div class="resource-card">
<div class="resource-icon">{% include ph.html name="books" %}</div>
<h4>Manuels de référence</h4>
<ul>
<li>Du Grafcet au réseau de Pétri (2° Ed.) - Claude Foulard, Hassane Alla, René David (1992)</li>
<li><a href="https://www.technologuepro.com/cours-automate-programmable-industriel/Cours-Grafcet-notions-de-base.htm" target="_blank">Cours Grafcet - Notions de base (TechnologuePro)</a></li>
<li><a href="https://www.technologuepro.com/cours-automate-programmable-industriel/Les-automates-programmables-industriels-API.htm" target="_blank">Les automates programmables industriels - API (TechnologuePro)</a></li>
<li><a href="http://robert.cireddu.free.fr/Ressources/AII/Rappels%20sur%20le%20GRAFCET/index.htm" target="_blank">Rappels sur le GRAFCET</a></li>
<li><a href="https://www.youtube.com/@prof_lepep" target="_blank">Quelques resources vidéo</a></li>

</ul>
</div>
<div class="resource-card">
<div class="resource-icon">{% include ph.html name="desktop" %}</div>
<h4>Logiciels et outils</h4>
<ul>
<li><a href="https://new.siemens.com/global/en/products/automation/industry-software/automation-software/tia-portal.html" target="_blank">TIA Portal (Siemens)</a></li>
<li><a href="https://www.rockwellautomation.com/en-us/products/software/factorytalk/designsuite/studio-5000.html" target="_blank">Studio 5000 (Rockwell)</a></li>
<li><a href="https://www.schneider-electric.com/en/product-range/1056-ecostruxure-machine-expert/" target="_blank">EcoStruxure Machine Expert (Schneider)</a></li>
</ul>
</div>
<div class="resource-card">
<div class="resource-icon">{% include ph.html name="wrench" %}</div>
<h4>Normes et standards</h4>
<ul>
<li><a href="https://webstore.iec.ch/publication/3684" target="_blank">IEC 60848 - GRAFCET</a></li>
<li><a href="https://webstore.iec.ch/publication/4552" target="_blank">IEC 61131 - Automates programmables</a></li>
<li><a href="https://webstore.iec.ch/publication/22273" target="_blank">IEC 61508 - Sécurité fonctionnelle</a></li>
<li><a href="https://www.afe.asso.fr/" target="_blank">AFCET - Association GRAFCET</a></li>
</ul>
</div>
<div class="resource-card">
<div class="resource-icon">{% include ph.html name="globe-hemisphere-west" %}</div>
<h4>Ressources industrielles</h4>
<ul>
<li><a href="https://www.siemens.com/global/en/products/automation.html" target="_blank">Siemens - Automation industrielle</a></li>
<li><a href="https://www.rockwellautomation.com/en-us.html" target="_blank">Rockwell Automation</a></li>
<li><a href="https://www.schneider-electric.com/en/work/solutions/for-business/industrial-automation/" target="_blank">Schneider Electric - Automation</a></li>
<li><a href="https://www.omron.com/global/en/products/category/automation-systems/" target="_blank">Omron - Automation Systems</a></li>
</ul>
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
<span class="eval-percentage">40%</span>
<div class="eval-title">Devoir Surveillé (DS)</div>
<div class="eval-description">Examen écrit sur les concepts théoriques et la programmation d'automates.</div>
</div>
<div class="eval-item">
<span class="eval-percentage">35%</span>
<div class="eval-title">Note de TP</div>
<div class="eval-description">Évaluation des travaux pratiques, projets et réalisations techniques.</div>
</div>
<div class="eval-item">
<span class="eval-percentage">25%</span>
<div class="eval-title">Note de Classe</div>
<div class="eval-description">Participation, interrogations, qualité du travail en séance.</div>
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
<span class="contact-icon">⏰</span>
<span><strong>Permanence :</strong> Sur rendez-vous (contact par email)</span>
</div>
</div>
</section>
