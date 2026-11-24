---
layout: page
title: Data-Driven Diagnosis
subtitle: Vision-Language Models — des pixels aux actions
permalink: /teaching/courses/data_driven_diagnosis/
track: numerique
# Documents à télécharger — coller le lien de partage Nextcloud dans `url`.
# Tant que `url` est vide, le bouton affiche « Bientôt disponible ».
downloads:
  - title: Slides du cours
    description: "Vision-Language Models — From Pixels to Actions (PDF)"
    icon: file-pdf
    url: ""
  - title: Notebook du TP
    description: "Lab A — notebook marimo (.py) à ouvrir avec marimo edit"
    icon: code
    url: ""
  - title: Sujet du TP
    description: "Énoncé du TP au format PDF"
    icon: file-text
    url: ""
  - title: Images d'exemple
    description: "Dossier de test pour démarrer sans caméra"
    icon: folder
    url: ""
  - title: Sujet du projet
    description: "Moniteur d'espace de travail avec un VLM (PDF)"
    icon: file-pdf
    url: ""
---

<div class="course-hero">
  <div class="course-hero-content">
    <h1>{% include ph.html name="eye" %} Data-Driven Diagnosis</h1>
    <p class="subtitle">Vision-Language Models — des pixels aux mots, et des mots aux actions du robot</p>
    <div class="hero-badges">
      <span class="hero-badge">{% include ph.html name="graduation-cap" %} Master</span>
      <span class="hero-badge">{% include ph.html name="timer" %} TP 8h + 6h perso</span>
      <span class="hero-badge">{% include ph.html name="users" %} Équipes de 3</span>
      <span class="hero-badge">{% include ph.html name="sparkle" %} VLM · CLIP · LoRA · VLA</span>
    </div>
  </div>
</div>

<nav class="course-nav">
  <div class="nav-links">
    <a href="#presentation" class="nav-link active">{% include ph.html name="clipboard-text" %} Présentation</a>
    <a href="#objectifs" class="nav-link">{% include ph.html name="target" %} Objectifs</a>
    <a href="#cours" class="nav-link">{% include ph.html name="books" %} Cours</a>
    <a href="#tp" class="nav-link">{% include ph.html name="flask" %} TP</a>
    <a href="#evaluation" class="nav-link">{% include ph.html name="chart-bar" %} Évaluation</a>
    <a href="#ressources" class="nav-link">{% include ph.html name="folder" %} Ressources</a>
    <a href="#lectures" class="nav-link">{% include ph.html name="file-text" %} Lectures</a>
  </div>
</nav>

<section id="presentation" class="section-card">
  <div class="section-header">
    <div class="section-icon">{% include ph.html name="clipboard-text" %}</div>
    <h2 class="section-title">Présentation du cours</h2>
  </div>

  <p class="lead">
    Les modèles vision-langage (VLM) prennent une image et une question en entrée et répondent en langage naturel : décrire une scène, répondre à une question, localiser un objet nommé. Le cours explique comment une image devient une suite de tokens lisible par un modèle de langage, de CLIP aux architectures récentes (LLaVA, BLIP-2, PaliGemma, Qwen-VL), puis comment ces modèles sont adaptés à une tâche précise avec LoRA et réutilisés pour piloter des robots (modèles vision-langage-action : RT-2, OpenVLA, π0, SmolVLA).
  </p>
  <p class="lead">
    Le fil conducteur est l'<strong>évaluation honnête</strong> : une ligne de base, une métrique fixée à l'avance, des conditions variées et une analyse des échecs, y compris des hallucinations.
  </p>

  <div class="info-box">
    <h4>{% include ph.html name="chart-bar" %} Informations générales</h4>
    <p><strong>Niveau :</strong> Master<br>
    <strong>TP :</strong> 8h en séance + 6h de travail personnel, par équipes de 3<br>
    <strong>Matériel :</strong> une webcam ou un téléphone par équipe ; un PC avec un GPU modeste (ou CPU, plus lent)<br>
    <strong>Outils :</strong> Python, notebook <a href="https://marimo.io" target="_blank" rel="noopener noreferrer">marimo</a>, PyTorch, Hugging Face<br>
    <strong>Langue des supports :</strong> anglais</p>
  </div>

  <h3>{% include ph.html name="check-circle" %} Prérequis</h3>

  <div class="prerequisite-item">
    <div class="prerequisite-icon">{% include ph.html name="brain" %}</div>
    <div>
      <strong>Réseaux de neurones</strong>
      <p>Rétropropagation, fonction de perte d'entropie croisée, réseaux convolutifs.</p>
    </div>
  </div>
  <div class="prerequisite-item">
    <div class="prerequisite-icon">{% include ph.html name="cube" %}</div>
    <div>
      <strong>Embeddings et transformers</strong>
      <p>L'idée d'un plongement vectoriel et d'un transformer. La partie 1 du cours sert de rappel.</p>
    </div>
  </div>
  <div class="prerequisite-item">
    <div class="prerequisite-icon">{% include ph.html name="code" %}</div>
    <div>
      <strong>Python</strong>
      <p>Environnement virtuel, installation de paquets, lecture de code PyTorch.</p>
    </div>
  </div>
</section>

<section id="objectifs" class="section-card">
  <div class="section-header">
    <div class="section-icon">{% include ph.html name="target" %}</div>
    <h2 class="section-title">Objectifs pédagogiques</h2>
  </div>

  <p class="lead"><strong>À l'issue du cours, les étudiants seront capables de :</strong></p>

  <div class="objectives-grid">
    <div class="objective-card">
      <h4>{% include ph.html name="cube" %} Expliquer comment une image devient des tokens</h4>
      <p>Découpage en patchs, Vision Transformer, coût de l'attention selon la résolution.</p>
    </div>
    <div class="objective-card">
      <h4>{% include ph.html name="list-checks" %} Lire une architecture de VLM</h4>
      <p>Encodeur visuel, connecteur, modèle de langage : ce qui est figé, ce qui est entraîné.</p>
    </div>
    <div class="objective-card">
      <h4>{% include ph.html name="eye" %} Utiliser CLIP et un petit VLM</h4>
      <p>Classification zero-shot, effet du prompt, questions-réponses visuelles et hallucinations.</p>
    </div>
    <div class="objective-card">
      <h4>{% include ph.html name="sliders" %} Adapter un modèle avec LoRA</h4>
      <p>Constituer un petit jeu de données, affiner un VLM, comparer à la ligne de base zero-shot.</p>
    </div>
    <div class="objective-card">
      <h4>{% include ph.html name="scales" %} Évaluer avec rigueur</h4>
      <p>Métrique fixée à l'avance, intervalle de confiance, analyse argumentée des échecs.</p>
    </div>
    <div class="objective-card">
      <h4>{% include ph.html name="robot" %} Comprendre le passage aux actions</h4>
      <p>Pourquoi les robots ont besoin de modèles vision-langage-action et de têtes d'action dédiées.</p>
    </div>
  </div>
</section>

<section id="cours" class="section-card">
  <div class="section-header">
    <div class="section-icon">{% include ph.html name="books" %}</div>
    <h2 class="section-title">Programme du cours</h2>
  </div>

  <div class="timeline">
    <div class="timeline-item">
      <div class="timeline-week">Partie 0 — Pourquoi les VLM ?</div>
      <div class="timeline-content">
        <h4>Motivation, vocabulaire, feuille de route</h4>
        <div class="timeline-details">Légendage, VQA, localisation, lecture de documents ; de la vision supervisée classique au vocabulaire ouvert.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-week">Partie 1 — Fondations</div>
      <div class="timeline-content">
        <h4>Tokens, attention, Vision Transformer</h4>
        <div class="timeline-details">Auto-attention, prédiction du token suivant, découpage en patchs et coût quadratique de l'attention.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-week">Partie 2 — Apprentissage contrastif</div>
      <div class="timeline-content">
        <h4>CLIP et ses descendants</h4>
        <div class="timeline-details">Perte contrastive, classification zero-shot, ingénierie de prompt, limites ; OpenCLIP, SigLIP.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-week">Partie 3 — Architectures de VLM</div>
      <div class="timeline-content">
        <h4>Relier un encodeur visuel à un modèle de langage</h4>
        <div class="timeline-details">Connecteurs (MLP, Q-Former, cross-attention) ; LLaVA, BLIP-2, PaliGemma ; résolution, vidéo et multi-images.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-week">Partie 4 — Entraînement et adaptation</div>
      <div class="timeline-content">
        <h4>Du pré-entraînement à votre tâche</h4>
        <div class="timeline-details">Alignement, pré-entraînement multimodal, instruction tuning ; LoRA et QLoRA, réglages pratiques.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-week">Partie 5 — Évaluation et limites</div>
      <div class="timeline-content">
        <h4>Ce que les VLM ratent, et comment le mesurer</h4>
        <div class="timeline-details">Benchmarks, hallucinations, comptage et relations spatiales, biais, protocole d'évaluation responsable.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-week">Partie 6 — Modèles vision-langage-action</div>
      <div class="timeline-content">
        <h4>Quand la sortie est un mouvement</h4>
        <div class="timeline-details">Apprentissage par imitation, représentation des actions, action chunking ; RT-2, OpenVLA, π0, SmolVLA ; LeRobot et bras SO-101 ; sécurité sur robot réel.</div>
      </div>
    </div>
  </div>
</section>

<section id="tp" class="section-card">
  <div class="section-header">
    <div class="section-icon">{% include ph.html name="flask" %}</div>
    <h2 class="section-title">TP — Vision-Language Models avec une caméra</h2>
  </div>

  <p class="lead">
    Le TP se fait dans un notebook marimo réactif. Chaque bloc suit la même logique : l'idée, l'expérience, ce qu'il faut observer, puis le livrable pour le rapport.
  </p>

  <div class="timeline">
    <div class="timeline-item">
      <div class="timeline-week">Mise en place (30 min)</div>
      <div class="timeline-content">
        <h4>Environnement, caméra, téléchargement des modèles</h4>
        <div class="timeline-details">Vérification du matériel (CUDA, Apple MPS ou CPU), pré-téléchargement des modèles, test de la caméra.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-week">Bloc A — CLIP (1h)</div>
      <div class="timeline-content">
        <h4>Zero-shot sur ses propres images</h4>
        <div class="timeline-details">Sensibilité au prompt, ensembles de prompts, classification en direct depuis la webcam.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-week">Bloc B — Questions-réponses visuelles (1h30)</div>
      <div class="timeline-content">
        <h4>Un petit VLM sur une scène contrôlée</h4>
        <div class="timeline-details">SmolVLM sur 15 à 20 photos ; comptage, couleur, position, existence ; annotation des réponses et taux d'hallucination.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-week">Bloc C — Détection (1h30)</div>
      <div class="timeline-content">
        <h4>Détecteur classique contre vocabulaire ouvert</h4>
        <div class="timeline-details">YOLOv8 et OWL-ViT ; IoU, précision, rappel ; mesure de latence.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-week">Bloc D — Mini-projet LoRA (1h30)</div>
      <div class="timeline-content">
        <h4>Son propre jeu de données</h4>
        <div class="timeline-details">Tâche étroite (tri, lecture d'un afficheur, état d'un objet) ; 100 à 200 photos découpées par session ; ligne de base puis affinage LoRA.</div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-week">Bloc E — Évaluation (30 min)</div>
      <div class="timeline-content">
        <h4>Tableaux, échecs, discussion</h4>
        <div class="timeline-details">Métrique, ligne de base, conditions variées, trois échecs analysés ; effectifs et intervalles de confiance.</div>
      </div>
    </div>
  </div>

  <div class="skills-tags">
    <span class="skill-tag">marimo</span>
    <span class="skill-tag">PyTorch</span>
    <span class="skill-tag">OpenCLIP</span>
    <span class="skill-tag">Transformers</span>
    <span class="skill-tag">SmolVLM</span>
    <span class="skill-tag">Ultralytics YOLO</span>
    <span class="skill-tag">OWL-ViT</span>
    <span class="skill-tag">PEFT / LoRA</span>
    <span class="skill-tag">OpenCV</span>
  </div>
</section>

<section id="evaluation" class="section-card">
  <div class="section-header">
    <div class="section-icon">{% include ph.html name="chart-bar" %}</div>
    <h2 class="section-title">Travail personnel et évaluation</h2>
  </div>

  <div class="info-box">
    <h4>{% include ph.html name="note-pencil" %} Travail personnel (6h)</h4>
    <ul>
      <li><strong>Rapport</strong> de 4 à 6 pages : mise en place, méthode, résultats, analyse des échecs.</li>
      <li><strong>Étude de robustesse</strong> : nouvelle évaluation en changeant l'éclairage, l'angle ou les distracteurs.</li>
      <li><strong>Comparaison critique</strong> : LoRA, zero-shot ou ligne de base classique — laquelle déployer, et pourquoi ?</li>
      <li><strong>Lecture</strong> : une page sur RT-2, OpenVLA, π0 ou SmolVLA et la réutilisation du VLM pour commander un robot.</li>
      <li><strong>À rendre</strong> : le jeu de données (ou un lien), l'adaptateur LoRA et le notebook.</li>
    </ul>
  </div>

  <p class="lead">Grille d'évaluation indicative :</p>

  <div class="evaluation-grid">
    <div class="eval-item">
      <span class="eval-percentage">30%</span>
      <div class="eval-title">Expériences</div>
      <div class="eval-description">Correctes et reproductibles</div>
    </div>
    <div class="eval-item">
      <span class="eval-percentage">30%</span>
      <div class="eval-title">Rigueur d'évaluation</div>
      <div class="eval-description">Ligne de base, métrique, conditions</div>
    </div>
    <div class="eval-item">
      <span class="eval-percentage">25%</span>
      <div class="eval-title">Analyse des échecs</div>
      <div class="eval-description">Et discussion critique</div>
    </div>
    <div class="eval-item">
      <span class="eval-percentage">15%</span>
      <div class="eval-title">Clarté du rapport</div>
      <div class="eval-description">Structure, figures, tableaux</div>
    </div>
  </div>
</section>

<section id="ressources" class="resources-section">
  <h2>{% include ph.html name="folder" %} Documents à télécharger</h2>
  <div class="resources-grid">
    {%- for d in page.downloads %}
    <div class="resource-card">
      <div class="resource-icon">{% include ph.html name=d.icon %}</div>
      <h4>{{ d.title }}</h4>
      <p>{{ d.description }}</p>
      {%- if d.url and d.url != "" %}
      <a class="resource-link" href="{{ d.url }}" target="_blank" rel="noopener noreferrer">{% include ph.html name="link" %} Télécharger</a>
      {%- else %}
      <span class="resource-link resource-link--pending">{% include ph.html name="timer" %} Bientôt disponible</span>
      {%- endif %}
    </div>
    {%- endfor %}
  </div>
</section>

<section id="lectures" class="section-card">
  <div class="section-header">
    <div class="section-icon">{% include ph.html name="file-text" %}</div>
    <h2 class="section-title">Lectures</h2>
  </div>

  <ul>
    <li>Dosovitskiy et al., <em>An Image is Worth 16x16 Words</em> (ViT), 2020</li>
    <li>Radford et al., <em>Learning Transferable Visual Models From Natural Language Supervision</em> (CLIP), 2021</li>
    <li>Hu et al., <em>LoRA: Low-Rank Adaptation of Large Language Models</em>, 2021</li>
    <li>Zhai et al., <em>Sigmoid Loss for Language Image Pre-Training</em> (SigLIP), 2023</li>
    <li>Li et al., <em>BLIP-2</em>, 2023 · Liu et al., <em>Visual Instruction Tuning</em> (LLaVA), 2023</li>
    <li>Zhao et al., <em>Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware</em> (ACT), 2023</li>
    <li>Brohan et al., <em>RT-2</em>, 2023 · Kim et al., <em>OpenVLA</em>, 2024</li>
    <li>Black et al., <em>π0</em>, 2024 · Shukor et al., <em>SmolVLA</em>, 2025</li>
  </ul>
</section>

<section id="contact" class="section-card">
  <div class="section-header">
    <div class="section-icon">{% include ph.html name="phone" %}</div>
    <h2 class="section-title">Contact</h2>
  </div>

  <div class="info-box">
    <p>{% include ph.html name="chalkboard-teacher" %} <strong>Responsable du cours :</strong> Dr. Yinoussa Adagolodjo<br>
    {% include ph.html name="envelope" %} <strong>Email :</strong> formulaire de contact sur la page d'accueil</p>
  </div>
</section>
