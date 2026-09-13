---
layout: page
title: Teaching
subtitle: Courses and Educational Resources
permalink: /teaching/
page_kind: teaching-overview
---


<!-- Hero -->
<div class="teach-hero">
  <h1>{% include ph.html name="chalkboard-teacher" %} Enseignement</h1>
  <p class="lead">Cours, Ressources &amp; Opportunités étudiantes</p>
  <p>Activités d'enseignement à l'Université de Lille — Polytech Lille : cours pratiques en robotique, automatique, simulation médicale et informatique industrielle pour les filières Génie Industriel et Master Automatique/Robotique.</p>
  <a href="/teaching/courses/" class="teach-cta-btn" style="margin-top:.5rem;">
    {% include ph.html name="list" %} Voir tous les cours
  </a>
</div>

<!-- Stats -->
<div class="teach-stats">
  <div class="teach-stat">
    <div class="teach-stat-num">16</div>
    <div class="teach-stat-lbl">Cours enseignés</div>
  </div>
  <div class="teach-stat">
    <div class="teach-stat-num">130+</div>
    <div class="teach-stat-lbl">h / semestre</div>
  </div>
  <div class="teach-stat">
    <div class="teach-stat-num">3</div>
    <div class="teach-stat-lbl">Niveaux</div>
  </div>
  <div class="teach-stat">
    <div class="teach-stat-num">2022</div>
    <div class="teach-stat-lbl">Depuis</div>
  </div>
</div>

<!-- ── Licence / Undergraduate ── -->
<div class="teach-section-title">{% include ph.html name="graduation-cap" %} Licence</div>
<div class="teach-grid">
{% for course in site.data.courses %}{% if course.level == "Undergraduate" %}
  <div class="teach-card">
    <div>
      <span class="teach-card-code">{{ course.code }}</span>
      <div class="teach-card-title">{{ course.title }}</div>
      <div class="teach-card-meta">
        <strong>Semestre :</strong> {{ course.semester }}&nbsp;&nbsp;
        {% if course.hours_cm %}<strong>CM :</strong> {{ course.hours_cm }}h {% endif %}
        {% if course.hours_tp %}<strong>TP :</strong> {{ course.hours_tp }}h {% endif %}
        {% if course.hours_td %}<strong>TD :</strong> {{ course.hours_td }}h {% endif %}
        {% if course.evaluation %}<br><strong>Éval. :</strong> {{ course.evaluation }}{% endif %}
      </div>
      <div class="teach-card-desc">{{ course.description }}</div>
    </div>
    <div class="teach-card-links">
      {% if course.syllabus %}
        <a href="{{ course.syllabus }}" class="teach-btn teach-btn-primary">{% include ph.html name="file-text" %} Syllabus</a>
      {% endif %}
    </div>
  </div>
{% endif %}{% endfor %}
</div>

<!-- ── Master / Graduate ── -->
<div class="teach-section-title">{% include ph.html name="flask" %} Master &amp; Ingénieur</div>
<div class="teach-grid">
{% for course in site.data.courses %}{% if course.level == "Graduate" or course.level == "Master" %}
  <div class="teach-card">
    <div>
      <span class="teach-card-code">{{ course.code }}</span>
      <div class="teach-card-title">{{ course.title }}</div>
      <div class="teach-card-meta">
        <strong>Semestre :</strong> {{ course.semester }}&nbsp;&nbsp;
        {% if course.hours_cm %}<strong>CM :</strong> {{ course.hours_cm }}h {% endif %}
        {% if course.hours_tp %}<strong>TP :</strong> {{ course.hours_tp }}h {% endif %}
        {% if course.hours_td %}<strong>TD :</strong> {{ course.hours_td }}h {% endif %}
        {% if course.evaluation %}<br><strong>Éval. :</strong> {{ course.evaluation }}{% endif %}
      </div>
      <div class="teach-card-desc">{{ course.description }}</div>
    </div>
    <div class="teach-card-links">
      {% if course.syllabus %}
        <a href="{{ course.syllabus }}" class="teach-btn teach-btn-primary">{% include ph.html name="file-text" %} Syllabus</a>
      {% endif %}
      {% if course.resources %}
        <a href="{{ course.resources }}" class="teach-btn teach-btn-outline" target="_blank" rel="noopener">{% include ph.html name="arrow-square-out" %} Ressources</a>
      {% endif %}
    </div>
  </div>
{% endif %}{% endfor %}
</div>

<!-- ── Formation Continue ── -->
<div class="teach-section-title">{% include ph.html name="briefcase" %} Formation Continue</div>
<div class="teach-grid">
{% for course in site.data.courses %}{% if course.level == "Formation Continue" %}
  <div class="teach-card">
    <div>
      <span class="teach-card-code">{{ course.code }}</span>
      <div class="teach-card-title">{{ course.title }}</div>
      <div class="teach-card-meta">
        <strong>Semestre :</strong> {{ course.semester }}&nbsp;&nbsp;
        {% if course.hours_cm %}<strong>CM :</strong> {{ course.hours_cm }}h {% endif %}
        {% if course.hours_tp %}<strong>TP :</strong> {{ course.hours_tp }}h {% endif %}
        {% if course.hours_td %}<strong>TD :</strong> {{ course.hours_td }}h {% endif %}
        {% if course.evaluation %}<br><strong>Éval. :</strong> {{ course.evaluation }}{% endif %}
      </div>
      <div class="teach-card-desc">{{ course.description }}</div>
    </div>
    <div class="teach-card-links">
      {% if course.syllabus %}
        <a href="{{ course.syllabus }}" class="teach-btn teach-btn-primary">{% include ph.html name="file-text" %} Syllabus</a>
      {% endif %}
    </div>
  </div>
{% endif %}{% endfor %}
</div>

<!-- ── Activités complémentaires ── -->
<div class="teach-section-title">{% include ph.html name="list-checks" %} Activités complémentaires</div>
<div class="teach-activities-grid">
  <div class="teach-activity-card">
    <h4>{% include ph.html name="student" %} Encadrement étudiant</h4>
    <ul>
      <li>Stagiaires GBA4 &amp; GBA5 (6h chacun)</li>
      <li>Étudiants en alternance</li>
      <li>Responsabilité d'année (24h)</li>
    </ul>
  </div>
  <div class="teach-activity-card">
    <h4>{% include ph.html name="wrench" %} Ateliers pratiques</h4>
    <ul>
      <li>TP Robotino — plateforme robotique (6h)</li>
      <li>S5 TP Robotique</li>
      <li>S5 TP Automatique &amp; Régulation</li>
      <li>S5 TP Optimisation</li>
    </ul>
  </div>
  <div class="teach-activity-card">
    <h4>{% include ph.html name="microscope" %} Projets de recherche étudiants</h4>
    <p>Co-encadrement de projets M1/M2 en simulation médicale, robotique douce et IA pour la santé. Opportunités disponibles — <a href="/contact/" style="color:var(--teach-primary);">me contacter</a>.</p>
  </div>
  <div class="teach-activity-card">
    <h4>{% include ph.html name="code" %} Outils utilisés</h4>
    <ul>
      <li><a href="https://www.sofa-framework.org/" target="_blank" rel="noopener" style="color:var(--teach-primary);">SOFA</a> — simulation temps réel</li>
      <li>Notion — ressources &amp; suivi</li>
      <li>Moodle Lille</li>
      <li>RobotStudio / RAPID (ABB)</li>
    </ul>
  </div>
</div>

<!-- ── Philosophie pédagogique ── -->
<div class="teach-philosophy">
  <h3>{% include ph.html name="lightbulb" %} Philosophie pédagogique</h3>
  <p>Mon approche combine fondements théoriques et mise en pratique sur des problèmes réels issus de la recherche en robotique médicale et simulation. Je favorise l'apprentissage par projet, la collaboration et l'esprit critique.</p>
  <ul>
    <li><strong>Apprentissage par la pratique</strong> — TP et projets concrets avec des outils industriels</li>
    <li><strong>Lien recherche–enseignement</strong> — les cours s'appuient sur des travaux de recherche actuels</li>
    <li><strong>Accompagnement individualisé</strong> — disponibilité pour le suivi et l'orientation professionnelle</li>
    <li><strong>Amélioration continue</strong> — mise à jour régulière des contenus au fil des avancées du domaine</li>
  </ul>
</div>

<!-- ── CTA ── -->
<div class="teach-cta">
  <h3>Catalogue complet des cours</h3>
  <p>Retrouvez la liste détaillée avec recherche, filtres par niveau et semestre, et accès aux syllabus.</p>
  <a href="/teaching/courses/" class="teach-cta-btn">
    {% include ph.html name="book-open" %} Voir tous les cours
  </a>
</div>
