---
layout: page
title: Teaching
subtitle: Courses and Educational Resources
permalink: /teaching/
---

<style>
/* ── Ocean/Teal theme variables ── */
:root {
  --teal-dark:   #013A3C;
  --teal:        #016064;
  --teal-light:  #48AAAD;
  --teal-pale:   #E0F7FA;
  --teal-mid:    #5CC8CB;
  --card-radius: 14px;
  --shadow:      0 4px 18px rgba(1,96,100,0.10);
  --shadow-hover:0 10px 32px rgba(1,96,100,0.18);
}

/* ── Hero ── */
.teach-hero {
  background: linear-gradient(135deg, var(--teal-dark) 0%, var(--teal) 60%, var(--teal-light) 100%);
  color: white;
  padding: 3rem 1.5rem 2.5rem;
  text-align: center;
  border-radius: 0 0 2rem 2rem;
  margin-bottom: 2.5rem;
}
.teach-hero h1 { color: white; font-size: 2.2rem; margin-bottom: .4rem; }
.teach-hero .lead { color: var(--teal-mid); font-size: 1.15rem; margin-bottom: .7rem; }
.teach-hero p { color: rgba(255,255,255,.85); max-width: 620px; margin: 0 auto 1.4rem; line-height: 1.7; }

/* ── Stats bar ── */
.teach-stats {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  background: white;
  border-radius: var(--card-radius);
  padding: 1.4rem 2rem;
  box-shadow: var(--shadow);
  margin: 0 auto 2.5rem;
  max-width: 680px;
}
.teach-stat { text-align: center; }
.teach-stat-num { font-size: 2rem; font-weight: 700; color: var(--teal); line-height: 1; }
.teach-stat-lbl { font-size: .82rem; color: #666; margin-top: .25rem; }

/* ── Section titles ── */
.teach-section-title {
  display: flex;
  align-items: center;
  gap: .6rem;
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--teal-dark);
  border-bottom: 2px solid var(--teal-light);
  padding-bottom: .5rem;
  margin: 2.5rem 0 1.4rem;
}
.teach-section-title i { color: var(--teal); }

/* ── Level group headers ── */
.teach-level-header {
  background: var(--teal-pale);
  color: var(--teal-dark);
  font-weight: 600;
  font-size: .85rem;
  text-transform: uppercase;
  letter-spacing: .08em;
  padding: .45rem 1rem;
  border-radius: 6px;
  margin: 1.4rem 0 .8rem;
  border-left: 4px solid var(--teal);
}

/* ── Course grid ── */
.teach-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.1rem;
  margin-bottom: 1rem;
}
.teach-card {
  background: white;
  border-radius: var(--card-radius);
  box-shadow: var(--shadow);
  padding: 1.2rem 1.4rem;
  border: 1px solid #e0f7fa;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: box-shadow .25s, transform .25s;
}
.teach-card:hover { box-shadow: var(--shadow-hover); transform: translateY(-3px); }
.teach-card-code {
  display: inline-block;
  background: var(--teal);
  color: white;
  font-size: .72rem;
  font-weight: 600;
  padding: .18rem .65rem;
  border-radius: 20px;
  margin-bottom: .5rem;
  letter-spacing: .04em;
}
.teach-card-title { font-weight: 700; color: var(--teal-dark); margin-bottom: .35rem; font-size: 1rem; }
.teach-card-meta { font-size: .82rem; color: #666; margin-bottom: .6rem; line-height: 1.6; }
.teach-card-meta strong { color: var(--teal-dark); }
.teach-card-desc { font-size: .88rem; color: #555; line-height: 1.55; flex-grow: 1; margin-bottom: .85rem; }
.teach-card-links { display: flex; gap: .5rem; flex-wrap: wrap; }
.teach-btn {
  padding: .35rem .9rem;
  border-radius: 7px;
  font-size: .82rem;
  font-weight: 500;
  text-decoration: none;
  transition: background .2s, color .2s;
}
.teach-btn-primary { background: var(--teal); color: white; }
.teach-btn-primary:hover { background: var(--teal-dark); color: white; }
.teach-btn-outline { border: 1.5px solid var(--teal); color: var(--teal); background: transparent; }
.teach-btn-outline:hover { background: var(--teal-pale); }

/* ── Philosophy box ── */
.teach-philosophy {
  background: var(--teal-pale);
  border-left: 5px solid var(--teal);
  border-radius: var(--card-radius);
  padding: 1.6rem 2rem;
  margin: 2rem 0;
}
.teach-philosophy h3 { color: var(--teal-dark); margin-bottom: .8rem; }
.teach-philosophy ul { margin: .8rem 0 0 1.1rem; line-height: 1.9; color: #444; }

/* ── Activities ── */
.teach-activities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;
}
.teach-activity-card {
  background: white;
  border-radius: var(--card-radius);
  box-shadow: var(--shadow);
  padding: 1.1rem 1.3rem;
  border-top: 3px solid var(--teal-light);
}
.teach-activity-card h4 { color: var(--teal-dark); font-size: .95rem; margin-bottom: .4rem; }
.teach-activity-card p, .teach-activity-card li { font-size: .86rem; color: #555; line-height: 1.6; }
.teach-activity-card ul { margin-left: 1rem; }

/* ── CTA ── */
.teach-cta {
  text-align: center;
  background: linear-gradient(135deg, var(--teal) 0%, var(--teal-light) 100%);
  border-radius: var(--card-radius);
  padding: 2rem 1.5rem;
  margin: 2.5rem 0 1rem;
  color: white;
}
.teach-cta h3 { color: white; margin-bottom: .6rem; }
.teach-cta p  { color: rgba(255,255,255,.88); margin-bottom: 1.1rem; }
.teach-cta-btn {
  display: inline-block;
  background: white;
  color: var(--teal-dark);
  font-weight: 700;
  padding: .65rem 1.8rem;
  border-radius: 8px;
  text-decoration: none;
  font-size: .95rem;
  transition: transform .2s, box-shadow .2s;
}
.teach-cta-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 18px rgba(0,0,0,.18); }

@media (max-width: 600px) {
  .teach-stats { gap: 1rem; padding: 1rem; }
  .teach-grid { grid-template-columns: 1fr; }
  .teach-activities-grid { grid-template-columns: 1fr; }
}
</style>

<!-- Hero -->
<div class="teach-hero">
  <h1><i class="fas fa-chalkboard-teacher"></i> Enseignement</h1>
  <p class="lead">Cours, Ressources &amp; Opportunités étudiantes</p>
  <p>Activités d'enseignement à l'Université de Lille — Polytech Lille : cours pratiques en robotique, automatique, simulation médicale et informatique industrielle pour les filières Génie Industriel et Master Automatique/Robotique.</p>
  <a href="/teaching/courses/" class="teach-cta-btn" style="margin-top:.5rem;">
    <i class="fas fa-list"></i> Voir tous les cours
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
<div class="teach-section-title"><i class="fas fa-graduation-cap"></i> Licence</div>
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
        <a href="{{ course.syllabus }}" class="teach-btn teach-btn-primary"><i class="fas fa-file-alt"></i> Syllabus</a>
      {% endif %}
    </div>
  </div>
{% endif %}{% endfor %}
</div>

<!-- ── Master / Graduate ── -->
<div class="teach-section-title"><i class="fas fa-flask"></i> Master &amp; Ingénieur</div>
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
        <a href="{{ course.syllabus }}" class="teach-btn teach-btn-primary"><i class="fas fa-file-alt"></i> Syllabus</a>
      {% endif %}
      {% if course.resources %}
        <a href="{{ course.resources }}" class="teach-btn teach-btn-outline" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i> Ressources</a>
      {% endif %}
    </div>
  </div>
{% endif %}{% endfor %}
</div>

<!-- ── Formation Continue ── -->
<div class="teach-section-title"><i class="fas fa-briefcase"></i> Formation Continue</div>
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
        <a href="{{ course.syllabus }}" class="teach-btn teach-btn-primary"><i class="fas fa-file-alt"></i> Syllabus</a>
      {% endif %}
    </div>
  </div>
{% endif %}{% endfor %}
</div>

<!-- ── Activités complémentaires ── -->
<div class="teach-section-title"><i class="fas fa-tasks"></i> Activités complémentaires</div>
<div class="teach-activities-grid">
  <div class="teach-activity-card">
    <h4><i class="fas fa-user-graduate"></i> Encadrement étudiant</h4>
    <ul>
      <li>Stagiaires GBA4 &amp; GBA5 (6h chacun)</li>
      <li>Étudiants en alternance</li>
      <li>Responsabilité d'année (24h)</li>
    </ul>
  </div>
  <div class="teach-activity-card">
    <h4><i class="fas fa-wrench"></i> Ateliers pratiques</h4>
    <ul>
      <li>TP Robotino — plateforme robotique (6h)</li>
      <li>S5 TP Robotique</li>
      <li>S5 TP Automatique &amp; Régulation</li>
      <li>S5 TP Optimisation</li>
    </ul>
  </div>
  <div class="teach-activity-card">
    <h4><i class="fas fa-microscope"></i> Projets de recherche étudiants</h4>
    <p>Co-encadrement de projets M1/M2 en simulation médicale, robotique douce et IA pour la santé. Opportunités disponibles — <a href="/contact/" style="color:var(--teal);">me contacter</a>.</p>
  </div>
  <div class="teach-activity-card">
    <h4><i class="fas fa-laptop-code"></i> Outils utilisés</h4>
    <ul>
      <li><a href="https://www.sofa-framework.org/" target="_blank" rel="noopener" style="color:var(--teal);">SOFA</a> — simulation temps réel</li>
      <li>Notion — ressources &amp; suivi</li>
      <li>Moodle Lille</li>
      <li>RobotStudio / RAPID (ABB)</li>
    </ul>
  </div>
</div>

<!-- ── Philosophie pédagogique ── -->
<div class="teach-philosophy">
  <h3><i class="fas fa-lightbulb"></i> Philosophie pédagogique</h3>
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
    <i class="fas fa-book-open"></i> Voir tous les cours
  </a>
</div>
