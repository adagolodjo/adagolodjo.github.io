---
layout: page
title: Logique Industrielle
subtitle: Approche par Compétences (APC)
permalink: /teaching/courses/modelisation-production/
---

<style>
:root {
  --teal:        #016064;
  --teal-dark:   #013A3C;
  --teal-light:  #48AAAD;
  --teal-pale:   #E0F7FA;
  --teal-mid:    #5CC8CB;
  --amber:       #f59e0b;
  --amber-pale:  #fffbeb;
  --card-radius: 14px;
  --shadow:      0 4px 18px rgba(1,96,100,0.10);
}

/* Hero */
.li-hero {
  background: linear-gradient(135deg, var(--teal-dark) 0%, var(--teal) 60%, var(--teal-light) 100%);
  color: white; padding: 2.5rem 2rem 2rem; border-radius: 0 0 2rem 2rem;
  margin-bottom: 2rem; text-align: center;
}
.li-hero h1 { color: white; font-size: 2rem; margin-bottom: .3rem; }
.li-hero .sub { color: var(--teal-mid); font-size: 1.05rem; margin-bottom: .8rem; }
.li-badges { display: flex; flex-wrap: wrap; gap: .5rem; justify-content: center; margin-top: .8rem; }
.li-badge {
  background: rgba(255,255,255,.15); color: white;
  padding: .3rem .85rem; border-radius: 20px; font-size: .8rem; font-weight: 600;
}

/* Info bar */
.li-infobar {
  display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center;
  background: white; border-radius: var(--card-radius); padding: 1.2rem 1.5rem;
  box-shadow: var(--shadow); margin-bottom: 2rem;
}
.li-info { text-align: center; }
.li-info-val { font-size: 1.5rem; font-weight: 700; color: var(--teal); }
.li-info-lbl { font-size: .75rem; color: #666; margin-top: .15rem; }

/* Section titles */
.li-section {
  display: flex; align-items: center; gap: .6rem;
  font-size: 1.2rem; font-weight: 700; color: var(--teal-dark);
  border-bottom: 2px solid var(--teal-light);
  padding-bottom: .4rem; margin: 2rem 0 1.2rem;
}

/* Competence cards */
.li-comp-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 1.5rem; }
.li-comp-card {
  background: white; border-radius: var(--card-radius); box-shadow: var(--shadow);
  padding: 1.3rem 1.5rem; border-top: 4px solid var(--teal-light);
}
.li-comp-card.c1 { border-top-color: #3b82f6; }
.li-comp-card.c2 { border-top-color: var(--teal); }
.li-comp-card.c3 { border-top-color: var(--amber); }
.li-comp-title { font-weight: 700; font-size: 1rem; color: var(--teal-dark); margin-bottom: .3rem; }
.li-comp-badge {
  display: inline-block; padding: .2rem .6rem; border-radius: 12px;
  font-size: .72rem; font-weight: 700; margin-bottom: .6rem;
}
.c1 .li-comp-badge { background: #dbeafe; color: #1d4ed8; }
.c2 .li-comp-badge { background: var(--teal-pale); color: var(--teal-dark); }
.c3 .li-comp-badge { background: var(--amber-pale); color: #92400e; }
.li-comp-verbs { font-size: .82rem; color: #555; font-style: italic; margin-bottom: .7rem; }
.li-comp-skills { margin: 0 0 0 1rem; padding: 0; }
.li-comp-skills li { font-size: .83rem; color: #444; line-height: 1.7; }

/* Sessions accordion-style */
.li-sessions { display: flex; flex-direction: column; gap: .6rem; }
.li-session {
  background: white; border-radius: 10px; box-shadow: var(--shadow);
  border-left: 4px solid var(--teal-light); padding: .9rem 1.2rem;
}
.li-session.c1 { border-left-color: #3b82f6; }
.li-session.c2 { border-left-color: var(--teal); }
.li-session.c3 { border-left-color: var(--amber); }
.li-session.c12 { border-left-color: #8b5cf6; }
.li-session.c23 { border-left-color: #10b981; }
.li-session-head { display: flex; align-items: center; gap: .7rem; margin-bottom: .35rem; }
.li-session-num { font-weight: 700; color: var(--teal-dark); font-size: .9rem; min-width: 50px; }
.li-session-title { font-weight: 600; color: #222; font-size: .92rem; }
.li-session-tag {
  margin-left: auto; font-size: .7rem; font-weight: 700; padding: .15rem .5rem;
  border-radius: 10px; white-space: nowrap;
}
.tag-c1  { background: #dbeafe; color: #1d4ed8; }
.tag-c2  { background: var(--teal-pale); color: var(--teal-dark); }
.tag-c3  { background: var(--amber-pale); color: #92400e; }
.tag-c12 { background: #ede9fe; color: #5b21b6; }
.tag-c23 { background: #d1fae5; color: #065f46; }
.li-session-obj { margin: 0 0 0 1.1rem; padding: 0; }
.li-session-obj li { font-size: .82rem; color: #555; line-height: 1.65; }

/* TP cards */
.li-tp-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; }
.li-tp-card {
  background: white; border-radius: var(--card-radius); box-shadow: var(--shadow);
  padding: 1.2rem 1.4rem; border-top: 4px solid var(--teal);
}
.li-tp-card.star { border-top-color: var(--amber); background: var(--amber-pale); }
.li-tp-num { font-size: .72rem; font-weight: 700; color: var(--teal); text-transform: uppercase; letter-spacing: .06em; margin-bottom: .3rem; }
.li-tp-card.star .li-tp-num { color: #92400e; }
.li-tp-title { font-weight: 700; color: var(--teal-dark); margin-bottom: .4rem; font-size: .95rem; }
.li-tp-context { font-size: .83rem; color: #666; font-style: italic; margin-bottom: .6rem; border-left: 3px solid var(--teal-light); padding-left: .6rem; }
.li-tp-obj { margin: 0 0 .7rem 1rem; padding: 0; }
.li-tp-obj li { font-size: .82rem; color: #444; line-height: 1.65; }
.li-tp-deliverable {
  background: var(--teal-pale); border-radius: 8px; padding: .45rem .7rem;
  font-size: .8rem; color: var(--teal-dark);
}
.li-tp-card.star .li-tp-deliverable { background: #fef3c7; }

/* Table */
.li-table { width: 100%; border-collapse: collapse; font-size: .85rem; margin-bottom: 1.5rem; }
.li-table th { background: var(--teal); color: white; padding: .6rem .8rem; text-align: left; }
.li-table td { padding: .55rem .8rem; border-bottom: 1px solid #e0f7fa; vertical-align: top; }
.li-table tr:hover td { background: var(--teal-pale); }
.li-table .star-row td { background: var(--amber-pale); font-weight: 600; }

/* Bridge box */
.li-bridge {
  background: linear-gradient(135deg, var(--teal-pale) 0%, #fff 100%);
  border: 2px solid var(--teal-light); border-radius: var(--card-radius);
  padding: 1.3rem 1.6rem; margin: 1.5rem 0;
}
.li-bridge h4 { color: var(--teal-dark); margin-bottom: .5rem; }
.li-bridge ul { margin: 0 0 0 1.1rem; }
.li-bridge li { font-size: .88rem; color: #444; line-height: 1.8; }

/* PDF links */
.li-pdf-btn {
  display: inline-flex; align-items: center; gap: .3rem;
  font-size: .72rem; font-weight: 600;
  padding: .2rem .65rem; border-radius: 8px;
  text-decoration: none; transition: background .2s, color .2s;
  border: 1.5px solid var(--teal-light);
  color: var(--teal); background: var(--teal-pale);
  white-space: nowrap;
}
.li-pdf-btn:hover { background: var(--teal); color: white; border-color: var(--teal); }
.li-pdf-btn.placeholder {
  border-style: dashed; opacity: .5;
  color: #888; background: #f5f5f5; border-color: #ccc;
  cursor: not-allowed; pointer-events: none;
}
/* Resources grid */
.li-resources {
  background: white; border-radius: var(--card-radius);
  box-shadow: var(--shadow); padding: 1.3rem 1.5rem;
  margin-bottom: 1.8rem;
}
.li-resources h4 { color: var(--teal-dark); font-size: .88rem; font-weight: 700; margin: .8rem 0 .5rem; }
.li-resources h4:first-child { margin-top: 0; }
.li-res-row { display: flex; flex-wrap: wrap; gap: .5rem; margin-bottom: .3rem; }

@media (max-width: 600px) {
  .li-comp-grid, .li-tp-grid { grid-template-columns: 1fr; }
  .li-infobar { gap: .7rem; }
}
</style>

<!-- Hero -->
<div class="li-hero">
  <h1><i class="fas fa-microchip"></i> Logique Industrielle</h1>
  <p class="sub">Approche par Compétences (APC)</p>
  <p style="color:rgba(255,255,255,.85); max-width:580px; margin:.5rem auto 0;">
    De l'algèbre de Boole aux systèmes automatisés — concevoir, simuler et implémenter la logique combinatoire et séquentielle, en Python et Logisim.
  </p>
  <div class="li-badges">
    <span class="li-badge"><i class="fas fa-graduation-cap"></i> Licence</span>
    <span class="li-badge"><i class="fas fa-calendar"></i> Semestre 2</span>
    <span class="li-badge"><i class="fab fa-python"></i> Python</span>
    <span class="li-badge">Logisim Evolution</span>
    <span class="li-badge">Passerelle SAP →</span>
  </div>
</div>

<!-- Info bar -->
<div class="li-infobar">
  <div class="li-info">
    <div class="li-info-val">10</div>
    <div class="li-info-lbl">séances CTD (×2h)</div>
  </div>
  <div class="li-info">
    <div class="li-info-val">4</div>
    <div class="li-info-lbl">séances TP (×2h)</div>
  </div>
  <div class="li-info">
    <div class="li-info-val">28h</div>
    <div class="li-info-lbl">volume total</div>
  </div>
  <div class="li-info">
    <div class="li-info-val">3</div>
    <div class="li-info-lbl">compétences (C1–C3)</div>
  </div>
</div>

<!-- ═══ RESSOURCES PDF — Remplacer href="#" par le lien Nextcloud ═══ -->
<div class="li-section"><i class="fas fa-folder-open"></i> Ressources du cours</div>
<div class="li-resources">
  <h4><i class="fas fa-chalkboard"></i> Supports CTD</h4>
  <div class="li-res-row">
    <a href="https://nextcloud.univ-lille.fr/index.php/s/RJqzWYwbwdLDW2o" target="_blank" rel="noopener" class="li-pdf-btn"><i class="fas fa-file-pdf"></i> CTD 1 — Numération</a>
    <a href="https://nextcloud.univ-lille.fr/index.php/s/qJCowwQea5NS5Qi" target="_blank" rel="noopener" class="li-pdf-btn"><i class="fas fa-file-pdf"></i> CTD 2 — Algèbre de Boole</a>
    <a href="https://nextcloud.univ-lille.fr/index.php/s/8xTnRDMctQwRqSm" target="_blank" rel="noopener" class="li-pdf-btn"><i class="fas fa-file-pdf"></i> CTD 3 — Karnaugh</a>
    <a href="https://nextcloud.univ-lille.fr/index.php/s/tSPnznqqpMEgWZN" target="_blank" rel="noopener" class="li-pdf-btn"><i class="fas fa-file-pdf"></i> CTD 4 — Circuits intégrés</a>
    <a href="https://nextcloud.univ-lille.fr/index.php/s/FRBHKLjYeZcjAQa" target="_blank" rel="noopener" class="li-pdf-btn"><i class="fas fa-file-pdf"></i> CTD 5 — Additionneurs</a>
    <a href="https://nextcloud.univ-lille.fr/index.php/s/ZPZtRzcCHSCWpFg" target="_blank" rel="noopener" class="li-pdf-btn"><i class="fas fa-file-pdf"></i> CTD 6 — Comparateurs</a>
    <a href="https://nextcloud.univ-lille.fr/index.php/s/xYCbyGAnHeqCadk" target="_blank" rel="noopener" class="li-pdf-btn"><i class="fas fa-file-pdf"></i> CTD 7 — Codeurs/Décodeurs</a>
    <a href="https://nextcloud.univ-lille.fr/index.php/s/ztmzaPWHwknEDPm" target="_blank" rel="noopener" class="li-pdf-btn"><i class="fas fa-file-pdf"></i> CTD 8 — MUX/DEMUX</a>
    <a href="#" class="li-pdf-btn placeholder"><i class="fas fa-file-pdf"></i> CTD 9 — Séquentiel</a>
    <a href="#" class="li-pdf-btn placeholder"><i class="fas fa-file-pdf"></i> CTD 10 — SAP & I4.0</a>
  </div>
  <h4><i class="fas fa-flask"></i> Sujets de TP</h4>
  <div class="li-res-row">
    <a href="https://nextcloud.univ-lille.fr/index.php/s/rtgM427ze9ACYPr" target="_blank" rel="noopener" class="li-pdf-btn"><i class="fas fa-file-pdf"></i> TP 1 — Python Portes</a>
    <a href="#" class="li-pdf-btn placeholder"><i class="fas fa-file-pdf"></i> TP 2 — Logisim</a>
    <a href="#" class="li-pdf-btn placeholder"><i class="fas fa-file-pdf"></i> TP 3 — Système de péage ⭐</a>
    <a href="#" class="li-pdf-btn placeholder"><i class="fas fa-file-pdf"></i> TP 4 — Bilan SAP</a>
  </div>
  <h4><i class="fas fa-book"></i> Documents complémentaires</h4>
  <div class="li-res-row">
    <a href="https://nextcloud.univ-lille.fr/index.php/s/tHfxQSpjAMSWJzL" target="_blank" rel="noopener" class="li-pdf-btn"><i class="fab fa-python"></i> Intro Python (pré-requis)</a>
    <a href="#" class="li-pdf-btn placeholder"><i class="fas fa-file-pdf"></i> Fiches de compétences APC</a>
    <a href="#" class="li-pdf-btn placeholder"><i class="fas fa-file-pdf"></i> Fiche mémo — Karnaugh</a>
    <a href="#" class="li-pdf-btn placeholder"><i class="fas fa-file-pdf"></i> Datasheets CI (7400, 7483, 7485…)</a>
  </div>
  <h4 style="color: var(--amber); margin-top: 1.2rem;"><i class="fas fa-file-alt"></i> DS passés (annales)</h4>
  <p style="font-size: .85rem; color: #666; margin: -.4rem 0 .7rem .25rem;">Sujets des contrôles écrits des années précédentes — utile pour la révision.</p>
  <div class="li-res-row">
    <a href="https://nextcloud.univ-lille.fr/index.php/s/Wwe8Y3NT2L6RZmG" target="_blank" rel="noopener" class="li-pdf-btn" style="border-color: var(--amber); color: var(--amber);"><i class="fas fa-file-pdf"></i> DS 2023–2024</a>
    <a href="https://nextcloud.univ-lille.fr/index.php/s/4jbKqYdcfaBxGXf" target="_blank" rel="noopener" class="li-pdf-btn" style="border-color: var(--amber); color: var(--amber);"><i class="fas fa-file-pdf"></i> DS 2024–2025</a>
  </div>
</div>
<!-- ═══════════════════════════════════════════════════════════════ -->

<!-- Situation cible -->
<div class="li-bridge">
  <h4><i class="fas fa-bullseye"></i> Situation professionnelle cible</h4>
  <p style="font-size:.9rem; color:#333;">Un technicien ou ingénieur doit <strong>concevoir, analyser et valider la partie commande d'un système automatisé numérique</strong> — de la spécification fonctionnelle jusqu'à l'implantation sur circuit intégré ou logiciel.</p>
</div>

<!-- Compétences -->
<div class="li-section"><i class="fas fa-trophy"></i> Les trois compétences du module</div>
<div class="li-comp-grid">

  <div class="li-comp-card c1">
    <div class="li-comp-badge">C1</div>
    <div class="li-comp-title">Modéliser et analyser des systèmes logiques combinatoires</div>
    <div class="li-comp-verbs">Traduire · Simplifier · Justifier · Vérifier</div>
    <ul class="li-comp-skills">
      <li>Systèmes de numération et codages (binaire, hexa, BCD)</li>
      <li>Algèbre de Boole : axiomes, De Morgan, consensus</li>
      <li>Tables de vérité et formes canoniques (SOP/POS)</li>
      <li>Tableaux de Karnaugh (2 à 4 variables)</li>
      <li>Technologie TTL/CMOS</li>
    </ul>
  </div>

  <div class="li-comp-card c2">
    <div class="li-comp-badge">C2</div>
    <div class="li-comp-title">Concevoir et simuler des circuits logiques combinatoires et séquentiels</div>
    <div class="li-comp-verbs">Assembler · Simuler · Déboguer · Implémenter</div>
    <ul class="li-comp-skills">
      <li>Additionneurs, comparateurs (7483, 7485)</li>
      <li>Codeurs, décodeurs (74LS138, 74LS139)</li>
      <li>Multiplexeurs / démultiplexeurs</li>
      <li>Simulation Logisim Evolution (chronogrammes)</li>
      <li>Implémentation Python avec tests unitaires</li>
    </ul>
  </div>

  <div class="li-comp-card c3">
    <div class="li-comp-badge">C3</div>
    <div class="li-comp-title">Décrire et préparer la commande d'un système automatisé</div>
    <div class="li-comp-verbs">Identifier · Distinguer · Décrire · Préparer</div>
    <ul class="li-comp-skills">
      <li>Logique combinatoire vs séquentielle</li>
      <li>Machine à états finis (FSM) — diagramme d'états</li>
      <li>Structure d'un système automatisé (PO / PC)</li>
      <li>Lien API → IoT → Jumeau numérique</li>
      <li><em>Passerelle vers le module SAP (S3)</em></li>
    </ul>
  </div>

</div>

<!-- CTD sessions -->
<div class="li-section"><i class="fas fa-chalkboard-teacher"></i> Cours-TD — 10 séances × 2h</div>
<div class="li-sessions">

  <div class="li-session c1">
    <div class="li-session-head">
      <span class="li-session-num">CTD 1</span>
      <span class="li-session-title">Systèmes de numération et codages</span>
      <span class="li-session-tag tag-c1">C1</span>
      <a href="#" class="li-pdf-btn placeholder"><i class="fas fa-file-pdf"></i> PDF</a>
    </div>
    <ol class="li-session-obj">
      <li>Convertir entre les bases 2, 10 et 16</li>
      <li>Coder en BCD et en complément à 2</li>
      <li>Justifier le choix d'un codage pour une application industrielle</li>
    </ol>
  </div>

  <div class="li-session c1">
    <div class="li-session-head">
      <span class="li-session-num">CTD 2</span>
      <span class="li-session-title">Algèbre de Boole & portes logiques</span>
      <span class="li-session-tag tag-c1">C1</span>
      <a href="#" class="li-pdf-btn placeholder"><i class="fas fa-file-pdf"></i> PDF</a>
    </div>
    <ol class="li-session-obj">
      <li>Appliquer les axiomes et théorèmes booléens</li>
      <li>Utiliser De Morgan et le consensus pour simplifier</li>
      <li>Construire la table de vérité d'une expression multi-variables</li>
    </ol>
  </div>

  <div class="li-session c1">
    <div class="li-session-head">
      <span class="li-session-num">CTD 3</span>
      <span class="li-session-title">Simplification par tableaux de Karnaugh</span>
      <span class="li-session-tag tag-c1">C1</span>
      <a href="#" class="li-pdf-btn placeholder"><i class="fas fa-file-pdf"></i> PDF</a>
    </div>
    <ol class="li-session-obj">
      <li>Simplifier 2 à 4 variables par tableau de Karnaugh</li>
      <li>Exploiter les cas indéterminés (<em>don't care</em>)</li>
      <li>Comparer résultat Karnaugh vs simplification algébrique</li>
    </ol>
  </div>

  <div class="li-session c12">
    <div class="li-session-head">
      <span class="li-session-num">CTD 4</span>
      <span class="li-session-title">Technologie des circuits intégrés</span>
      <span class="li-session-tag tag-c12">C1+C2</span>
      <a href="#" class="li-pdf-btn placeholder"><i class="fas fa-file-pdf"></i> PDF</a>
    </div>
    <ol class="li-session-obj">
      <li>Lire une datasheet (fan-out, niveaux logiques)</li>
      <li>Distinguer familles TTL et CMOS</li>
      <li>Réaliser une fonction avec portes NAND uniquement (CI 7400)</li>
    </ol>
  </div>

  <div class="li-session c2">
    <div class="li-session-head">
      <span class="li-session-num">CTD 5</span>
      <span class="li-session-title">Additionneurs binaires</span>
      <span class="li-session-tag tag-c2">C2</span>
      <a href="#" class="li-pdf-btn placeholder"><i class="fas fa-file-pdf"></i> PDF</a>
    </div>
    <ol class="li-session-obj">
      <li>Concevoir le demi-additionneur et l'additionneur complet 1 bit</li>
      <li>Cascader 4 additionneurs 1 bit → additionneur 4 bits</li>
      <li>Analyser le CI 7483 et vérifier par rapport à la conception manuelle</li>
    </ol>
  </div>

  <div class="li-session c2">
    <div class="li-session-head">
      <span class="li-session-num">CTD 6</span>
      <span class="li-session-title">Comparateurs</span>
      <span class="li-session-tag tag-c2">C2</span>
      <a href="#" class="li-pdf-btn placeholder"><i class="fas fa-file-pdf"></i> PDF</a>
    </div>
    <ol class="li-session-obj">
      <li>Concevoir un comparateur 1 bit (A=B, A&gt;B, A&lt;B)</li>
      <li>Analyser le CI 7485 (entrées de cascade, cas d'égalité)</li>
      <li>Identifier l'usage dans un système de contrôle (seuil)</li>
    </ol>
  </div>

  <div class="li-session c2">
    <div class="li-session-head">
      <span class="li-session-num">CTD 7</span>
      <span class="li-session-title">Codeurs & décodeurs</span>
      <span class="li-session-tag tag-c2">C2</span>
      <a href="#" class="li-pdf-btn placeholder"><i class="fas fa-file-pdf"></i> PDF</a>
    </div>
    <ol class="li-session-obj">
      <li>Concevoir et analyser un codeur/décodeur 2 bits</li>
      <li>Étudier les CI 74LS138 (3→8) et 74LS139 (2→4)</li>
      <li>Dimensionner un décodeur pour affichage ou sélection mémoire</li>
    </ol>
  </div>

  <div class="li-session c2">
    <div class="li-session-head">
      <span class="li-session-num">CTD 8</span>
      <span class="li-session-title">Multiplexeurs & démultiplexeurs</span>
      <span class="li-session-tag tag-c2">C2</span>
      <a href="#" class="li-pdf-btn placeholder"><i class="fas fa-file-pdf"></i> PDF</a>
    </div>
    <ol class="li-session-obj">
      <li>Concevoir un MUX 4→1 et un DEMUX 1→4 à partir de portes</li>
      <li>Réaliser une fonction combinatoire quelconque via MUX</li>
      <li>Associer MUX et décodeurs pour des fonctions complexes</li>
    </ol>
  </div>

  <div class="li-session c23">
    <div class="li-session-head">
      <span class="li-session-num">CTD 9</span>
      <span class="li-session-title">Introduction aux systèmes séquentiels</span>
      <span class="li-session-tag tag-c23">C2+C3</span>
      <a href="#" class="li-pdf-btn placeholder"><i class="fas fa-file-pdf"></i> PDF</a>
    </div>
    <ol class="li-session-obj">
      <li>Distinguer circuit combinatoire vs séquentiel (notion d'état)</li>
      <li>Décrire bascules RS, D et JK</li>
      <li>Modéliser un système simple (distributeur, feu bicolore) par diagramme d'états</li>
    </ol>
  </div>

  <div class="li-session c3">
    <div class="li-session-head">
      <span class="li-session-num">CTD 10</span>
      <span class="li-session-title">Systèmes automatisés & ouverture Industrie 4.0</span>
      <span class="li-session-tag tag-c3">C3</span>
      <a href="#" class="li-pdf-btn placeholder"><i class="fas fa-file-pdf"></i> PDF</a>
    </div>
    <ol class="li-session-obj">
      <li>Décrire la structure d'un système automatisé (PO / PC)</li>
      <li>Situer les circuits dans la chaîne API → IoT → Jumeau numérique</li>
      <li>Lier les séquences vues en cours aux outils futurs du module SAP</li>
    </ol>
  </div>

</div>

<!-- TP -->
<div class="li-section"><i class="fas fa-flask"></i> Travaux Pratiques — 4 séances × 2h</div>
<div class="li-tp-grid">

  <div class="li-tp-card">
    <div class="li-tp-num">TP 1 — C1 + C2</div>
    <div class="li-tp-title">Portes logiques et additionneurs en Python</div>
    <div class="li-tp-context">Sans bibliothèque externe, implémenter les briques de base de la logique numérique et valider par tests unitaires.</div>
    <ol class="li-tp-obj">
      <li>Implémenter AND, OR, NOT, NAND, NOR, XOR</li>
      <li>Construire demi-additionneur et additionneur 1 bit</li>
      <li>Cascader → additionneur 4 bits, vérifier les résultats</li>
      <li>Tests unitaires reproduisant les tables de vérité</li>
    </ol>
    <a href="#" class="li-pdf-btn placeholder" style="margin-bottom:.5rem;"><i class="fas fa-file-pdf"></i> Sujet PDF</a>
    <div class="li-tp-deliverable"><i class="fas fa-file-code"></i> Script Python commenté + rapport de tests (100% verts)</div>
  </div>

  <div class="li-tp-card">
    <div class="li-tp-num">TP 2 — C2</div>
    <div class="li-tp-title">Simulation de circuits sous Logisim Evolution</div>
    <div class="li-tp-context">Reproduire dans Logisim les circuits des CTD, exploiter la simulation et les chronogrammes.</div>
    <ol class="li-tp-obj">
      <li>Câbler et simuler un additionneur 4 bits à partir de portes</li>
      <li>Réaliser un décodeur 3→8 (équivalent 74LS138)</li>
      <li>Analyser les chronogrammes, identifier un dysfonctionnement</li>
      <li>Comparer câblage Logisim vs implémentation Python (TP 1)</li>
    </ol>
    <a href="#" class="li-pdf-btn placeholder" style="margin-bottom:.5rem;"><i class="fas fa-file-pdf"></i> Sujet PDF</a>
    <div class="li-tp-deliverable"><i class="fas fa-file-alt"></i> Fichier <code>.circ</code> + captures chronogrammes annotées</div>
  </div>

  <div class="li-tp-card star">
    <div class="li-tp-num">TP 3 ⭐ — C2 + C3 — TP INTÉGRATEUR</div>
    <div class="li-tp-title">Système de péage</div>
    <div class="li-tp-context">Péage routier : pièces acceptées 10c–2€, barrière s'ouvre dès paiement complet, affichage du reste à payer en temps réel.</div>
    <ol class="li-tp-obj">
      <li>Identifier entrées, sorties et états du système</li>
      <li>Concevoir le circuit de cumul (additionneur + registre) dans Logisim</li>
      <li>Concevoir le comparateur et la logique de déclenchement</li>
      <li>Simuler l'affichage du reste sur décodeur 7 segments</li>
      <li>Diagramme d'états + machine à états Python</li>
    </ol>
    <a href="#" class="li-pdf-btn placeholder" style="margin-bottom:.5rem;"><i class="fas fa-file-pdf"></i> Sujet PDF</a>
    <div class="li-tp-deliverable"><i class="fas fa-star"></i> Logisim + diagramme d'états + script Python + rapport 2 pages</div>
  </div>

  <div class="li-tp-card">
    <div class="li-tp-num">TP 4 — C3</div>
    <div class="li-tp-title">Bilan intégrateur & mise en perspective SAP</div>
    <div class="li-tp-context">Synthétiser les apprentissages et préparer conceptuellement la transition vers le module SAP (maquette train, ascenseur, tapis de tri, Robotinho).</div>
    <ol class="li-tp-obj">
      <li>Modéliser par diagramme d'états un système automatisé simple</li>
      <li>Distinguer commande (ce module) vs séquencement (SAP)</li>
      <li>Argumenter oralement : logique câblée vs logique programmée</li>
      <li>Positionner les compétences dans le contexte Industrie 4.0</li>
    </ol>
    <a href="#" class="li-pdf-btn placeholder" style="margin-bottom:.5rem;"><i class="fas fa-file-pdf"></i> Sujet PDF</a>
    <div class="li-tp-deliverable"><i class="fas fa-comments"></i> Présentation orale 10 min + diagramme d'états annoté</div>
  </div>

</div>

<!-- Tableau de bord -->
<div class="li-section"><i class="fas fa-table"></i> Tableau de bord — Vue d'ensemble</div>
<div style="overflow-x:auto;">
<table class="li-table">
  <thead>
    <tr><th>#</th><th>Thème principal</th><th>Objectif terminal</th><th>Comp.</th><th>Outil</th></tr>
  </thead>
  <tbody>
    <tr><td>CTD 1</td><td>Numération & codages</td><td>Convertir et justifier un codage</td><td>C1</td><td>Cours + TD</td></tr>
    <tr><td>CTD 2</td><td>Algèbre de Boole</td><td>Simplifier par algèbre + De Morgan</td><td>C1</td><td>Cours + TD</td></tr>
    <tr><td>CTD 3</td><td>Tableaux de Karnaugh</td><td>Simplifier 2–4 variables</td><td>C1</td><td>Cours + TD</td></tr>
    <tr><td>CTD 4</td><td>Circuits intégrés 7400</td><td>Réaliser une fonction avec NAND</td><td>C1+C2</td><td>Cours + TD</td></tr>
    <tr><td>CTD 5</td><td>Additionneurs binaires</td><td>Cascader des additionneurs 1 bit</td><td>C2</td><td>Cours + TD</td></tr>
    <tr><td>CTD 6</td><td>Comparateurs</td><td>Analyser le 7485, usage en contrôle</td><td>C2</td><td>Cours + TD</td></tr>
    <tr><td>CTD 7</td><td>Codeurs / Décodeurs</td><td>Dimensionner un décodeur 74LS138</td><td>C2</td><td>Cours + TD</td></tr>
    <tr><td>CTD 8</td><td>MUX / DEMUX</td><td>Réaliser une fonction via MUX</td><td>C2</td><td>Cours + TD</td></tr>
    <tr><td>CTD 9</td><td>Systèmes séquentiels</td><td>Modéliser par diagramme d'états</td><td>C2+C3</td><td>Cours + TD</td></tr>
    <tr><td>CTD 10</td><td>SAP & Industrie 4.0</td><td>Lien logique → API → IoT</td><td>C3</td><td>Cours + TD</td></tr>
    <tr><td>TP 1</td><td>Portes & additionneurs Python</td><td>Tests unitaires 100% verts</td><td>C1+C2</td><td>Python</td></tr>
    <tr><td>TP 2</td><td>Circuits Logisim</td><td>Déboguer par chronogrammes</td><td>C2</td><td>Logisim</td></tr>
    <tr class="star-row"><td>TP 3 ⭐</td><td>Système de péage</td><td>Intégrer C1+C2+C3 sur cas réel</td><td>C2+C3</td><td>Logisim + Python</td></tr>
    <tr><td>TP 4</td><td>Bilan & mise en perspective</td><td>Distinguer commande / séquencement</td><td>C3</td><td>Oral + schéma</td></tr>
  </tbody>
</table>
</div>

<!-- Passerelle SAP -->
<div class="li-bridge">
  <h4><i class="fas fa-arrow-right"></i> Continuité — Module SAP (S3)</h4>
  <p style="font-size:.88rem; color:#555; margin-bottom:.6rem;">Ce module pose les bases conceptuelles du module <strong>Logique Séquentielle – SAP et Grafcet</strong> du semestre suivant. Les systèmes travaillés incluent :</p>
  <ul>
    <li>Maquette train, ascenseur, tapis de tri</li>
    <li>Système de perçage Festo</li>
    <li>Robotinho</li>
  </ul>
</div>
