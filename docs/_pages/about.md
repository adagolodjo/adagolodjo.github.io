---
layout: page
title: About
subtitle: Professional Background
permalink: /about/
description: "Learn about Dr. Yinoussa Adagolodjo's academic background, research interests, and contributions to robotics and healthcare technology."
image: /assets/images/notion-face.png
---

<style>
/* ===== ABOUT PAGE STYLES ===== */
:root {
  --about-primary: #016064;
  --about-light: #48AAAD;
  --about-pale: #E8F6F7;
  --about-dark: #013A3C;
  --about-radius: 14px;
}

/* ---- Stats bar ---- */
.about-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 1rem;
  margin: 2rem 0 3rem;
}
.about-stat {
  text-align: center;
  background: var(--about-pale);
  border: 2px solid rgba(1,96,100,0.12);
  border-radius: var(--about-radius);
  padding: 1.2rem 0.8rem;
  transition: transform 0.2s, box-shadow 0.2s;
}
.about-stat:hover { transform: translateY(-3px); box-shadow: 0 6px 20px rgba(1,96,100,0.12); }
.about-stat-num {
  font-size: 2rem;
  font-weight: 900;
  color: var(--about-primary);
  line-height: 1;
  display: block;
}
.about-stat-label {
  font-size: 0.8rem;
  color: #555;
  margin-top: 0.3rem;
  font-weight: 500;
  display: block;
}

/* ---- Profile block ---- */
.about-profile {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 3rem;
  align-items: start;
  margin-bottom: 3rem;
}
@media (max-width: 768px) {
  .about-profile { grid-template-columns: 1fr; gap: 1.5rem; }
  .about-profile-img { text-align: center; }
}
.about-profile img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--about-light);
  box-shadow: 0 8px 32px rgba(1,96,100,0.2);
}
.about-profile-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}
.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.75rem;
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 600;
}
.badge-teal    { background: rgba(1,96,100,0.1);  color: var(--about-primary); border: 1px solid rgba(1,96,100,0.25); }
.badge-blue    { background: rgba(37,99,235,0.08); color: #1D4ED8;             border: 1px solid rgba(37,99,235,0.2); }
.badge-purple  { background: rgba(109,40,217,0.08); color: #6D28D9;            border: 1px solid rgba(109,40,217,0.2); }
.about-bio { font-size: 1.05rem; line-height: 1.75; color: #333; }
.about-bio p { margin-bottom: 1rem; }

/* ---- Section heading ---- */
.about-section-title {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--about-dark);
  margin: 2.5rem 0 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid var(--about-light);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.about-section-title i { color: var(--about-light); font-size: 1.1rem; }

/* ---- Timeline ---- */
.timeline {
  position: relative;
  padding-left: 2rem;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 0.55rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, var(--about-primary), var(--about-light), rgba(72,170,173,0.1));
  border-radius: 2px;
}
.timeline-item {
  position: relative;
  margin-bottom: 2rem;
}
.timeline-item::before {
  content: '';
  position: absolute;
  left: -1.68rem;
  top: 0.4rem;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--about-primary);
  border: 2px solid #fff;
  box-shadow: 0 0 0 2px var(--about-light);
}
.timeline-item.current::before {
  background: var(--about-light);
  box-shadow: 0 0 0 3px rgba(72,170,173,0.3);
  width: 14px;
  height: 14px;
  left: -1.75rem;
}
.timeline-period {
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--about-primary);
  text-transform: uppercase;
  letter-spacing: .06em;
  margin-bottom: 0.2rem;
}
.timeline-role {
  font-size: 1rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.1rem;
}
.timeline-place {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 0.5rem;
}
.timeline-place i { color: var(--about-light); margin-right: 0.3rem; }
.timeline-details {
  font-size: 0.88rem;
  color: #555;
  line-height: 1.6;
  margin: 0;
  padding-left: 1rem;
}
.timeline-details li { margin-bottom: 0.2rem; }

/* ---- Research cards ---- */
.research-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.2rem;
}
.research-card {
  background: #fff;
  border: 1px solid rgba(1,96,100,0.12);
  border-radius: var(--about-radius);
  padding: 1.4rem;
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
  overflow: hidden;
}
.research-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--about-primary), var(--about-light));
}
.research-card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(1,96,100,0.12); }
.research-card-icon {
  font-size: 1.6rem;
  margin-bottom: 0.7rem;
  color: var(--about-primary);
}
.research-card h3 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--about-dark);
  margin-bottom: 0.6rem;
}
.research-card ul {
  font-size: 0.85rem;
  color: #555;
  padding-left: 1rem;
  line-height: 1.6;
}

/* ---- Skills ---- */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;
}
.skill-group {
  background: var(--about-pale);
  border-radius: var(--about-radius);
  padding: 1.2rem;
}
.skill-group-title {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .08em;
  color: var(--about-primary);
  margin-bottom: 0.7rem;
}
.skill-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.skill-tag {
  background: #fff;
  border: 1px solid rgba(1,96,100,0.2);
  border-radius: 6px;
  padding: 0.2rem 0.6rem;
  font-size: 0.8rem;
  color: #333;
  font-weight: 500;
}

/* ---- Languages ---- */
.lang-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
.lang-item {
  background: #fff;
  border: 1px solid rgba(1,96,100,0.15);
  border-radius: 10px;
  padding: 0.6rem 1.1rem;
  text-align: center;
  min-width: 120px;
}
.lang-name { font-weight: 700; font-size: 0.95rem; color: var(--about-dark); }
.lang-level { font-size: 0.75rem; color: #777; margin-top: 0.1rem; }

/* ---- Service ---- */
.service-list { list-style: none; padding: 0; margin: 0; }
.service-list li {
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(1,96,100,0.08);
  font-size: 0.9rem;
  color: #444;
}
.service-list li:last-child { border-bottom: none; }
.service-list li::before {
  content: '';
  flex-shrink: 0;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--about-light);
  margin-top: 0.4rem;
}

/* ---- CTA ---- */
.about-cta {
  margin-top: 3rem;
  background: linear-gradient(135deg, var(--about-primary), var(--about-dark));
  border-radius: var(--about-radius);
  padding: 2.5rem 2rem;
  text-align: center;
  color: #fff;
}
.about-cta h3 { font-size: 1.4rem; font-weight: 800; margin-bottom: 0.5rem; color: #fff; }
.about-cta p  { color: rgba(255,255,255,0.75); margin-bottom: 1.5rem; }
.about-cta-btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
.btn-cta-primary {
  background: var(--about-light);
  color: #013A3C;
  padding: 0.65rem 1.5rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: background 0.2s;
}
.btn-cta-primary:hover { background: #5CC8CB; color: #013A3C; }
.btn-cta-secondary {
  border: 2px solid rgba(255,255,255,0.4);
  color: #fff;
  padding: 0.65rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: border-color 0.2s, background 0.2s;
}
.btn-cta-secondary:hover { border-color: var(--about-light); background: rgba(255,255,255,0.08); color: #fff; }
</style>

<!-- ===== PROFILE BLOCK ===== -->
<div class="about-profile">
  <div class="about-profile-img">
    <img src="/assets/images/notion-face.png" alt="Dr. Yinoussa Adagolodjo">
    <div class="about-profile-badges">
      <span class="badge badge-teal"><i class="fas fa-university"></i> Univ. Lille</span>
      <span class="badge badge-blue"><i class="fas fa-robot"></i> DEFROST / Inria</span>
      <span class="badge badge-purple"><i class="fas fa-flask"></i> CRIStAL UMR 9189</span>
    </div>
  </div>
  <div class="about-bio">
    <p>
      I am an <strong>Assistant Professor (Maître de Conférences) in Computer Science</strong> at the
      <a href="https://www.univ-lille.fr" target="_blank" rel="noopener">University of Lille</a>,
      and a permanent member of the
      <a href="https://team.inria.fr/defrost/" target="_blank" rel="noopener">DEFROST team</a>
      at <a href="https://www.inria.fr" target="_blank" rel="noopener">Inria</a> / CRIStAL UMR 9189.
    </p>
    <p>
      My research sits at the intersection of <strong>medical robotics</strong>,
      <strong>real-time finite element simulation</strong>, and
      <strong>augmented reality for healthcare</strong>.
      I develop constraint-based control methods for soft and continuum robots,
      with clinical applications ranging from cochlear implant surgery to
      minimally invasive endoscopy and prostate biopsy.
    </p>
    <p>
      Before joining Lille, I completed a <strong>postdoctoral fellowship at Inria DEFROST</strong>
      (2019–2022) and a <strong>PhD in Robotics & Computer Science</strong> at the
      University of Strasbourg / ICube Laboratory (2015–2018), under the supervision of
      Dr. Hadrien Courtecuisse and Prof. Michel de Mathelin.
    </p>
  </div>
</div>

<!-- ===== STATS BAR ===== -->
<div class="about-stats">
  <div class="about-stat">
    <span class="about-stat-num">18</span>
    <span class="about-stat-label">Publications</span>
  </div>
  <div class="about-stat">
    <span class="about-stat-num">9</span>
    <span class="about-stat-label">Active Projects</span>
  </div>
  <div class="about-stat">
    <span class="about-stat-num">200+</span>
    <span class="about-stat-label">Teaching Hours</span>
  </div>
  <div class="about-stat">
    <span class="about-stat-num">10+</span>
    <span class="about-stat-label">Years Research</span>
  </div>
  <div class="about-stat">
    <span class="about-stat-num">3</span>
    <span class="about-stat-label">PhD/Postdoc Supervised</span>
  </div>
</div>

---

<!-- ===== CAREER TIMELINE ===== -->
<h2 class="about-section-title"><i class="fas fa-briefcase"></i> Career</h2>

<div class="timeline">

  <div class="timeline-item current">
    <div class="timeline-period">2022 — Present</div>
    <div class="timeline-role">Assistant Professor (Maître de Conférences)</div>
    <div class="timeline-place"><i class="fas fa-map-marker-alt"></i> University of Lille · DEFROST Team, Inria · Villeneuve d'Ascq, France</div>
    <ul class="timeline-details">
      <li>Research in medical robotics and real-time simulation for healthcare</li>
      <li>PI on ANR projects: ProstateBot, Maestro, ACCESS</li>
      <li>Supervision of PhD students and postdoctoral researchers</li>
      <li>200+ contact hours/semester — 18 courses across 3 levels</li>
    </ul>
  </div>

  <div class="timeline-item">
    <div class="timeline-period">2019 — 2022</div>
    <div class="timeline-role">Postdoctoral Research Engineer</div>
    <div class="timeline-place"><i class="fas fa-map-marker-alt"></i> Inria · DEFROST Team · Lille, France</div>
    <ul class="timeline-details">
      <li>Constraint-based control for soft and hybrid robotic systems (ROBOCOP, COSSEROOTS)</li>
      <li>Real-time FEM simulation for robotic cochlear implant insertion</li>
      <li>Lead developer of the open-source <a href="https://github.com/SofaDefrost/Cosserat" target="_blank" rel="noopener">Cosserat plugin for SOFA</a></li>
    </ul>
  </div>

  <div class="timeline-item">
    <div class="timeline-period">2015 — 2018</div>
    <div class="timeline-role">Doctoral Researcher</div>
    <div class="timeline-place"><i class="fas fa-map-marker-alt"></i> ICube Laboratory · University of Strasbourg · Strasbourg, France</div>
    <ul class="timeline-details">
      <li>PhD: robotic needle insertion using inverse FEM simulation (CONECT project)</li>
      <li>Augmented reality for open liver surgery and deformable organ registration</li>
      <li>Advisors: Dr. Hadrien Courtecuisse · Prof. Michel de Mathelin</li>
    </ul>
  </div>

  <div class="timeline-item">
    <div class="timeline-period">2018</div>
    <div class="timeline-role">Ph.D. in Robotics & Computer Science</div>
    <div class="timeline-place"><i class="fas fa-graduation-cap"></i> University of Strasbourg · Strasbourg, France</div>
    <ul class="timeline-details">
      <li>Thesis: <em>« CONECT — Couplage de la Robotique et de la Simulation Médicale pour des Procédures Automatisées »</em></li>
    </ul>
  </div>

</div>

---

<!-- ===== RESEARCH INTERESTS ===== -->
<h2 class="about-section-title"><i class="fas fa-microscope"></i> Research Interests</h2>

<div class="research-grid">
  <div class="research-card">
    <div class="research-card-icon"><i class="fas fa-robot"></i></div>
    <h3>Medical Robotics</h3>
    <ul>
      <li>Robotic-assisted surgical interventions</li>
      <li>Constraint-based manipulation of deformable models</li>
      <li>Real-time simulation for surgical navigation</li>
    </ul>
  </div>
  <div class="research-card">
    <div class="research-card-icon"><i class="fas fa-cube"></i></div>
    <h3>Real-time FEM Simulation</h3>
    <ul>
      <li>Real-time deformation of soft tissues</li>
      <li>Physics-based modeling (SOFA framework)</li>
      <li>Cosserat rod theory for continuum robots</li>
    </ul>
  </div>
  <div class="research-card">
    <div class="research-card-icon"><i class="fas fa-hand-paper"></i></div>
    <h3>Soft & Continuum Robotics</h3>
    <ul>
      <li>Vine-inspired eversion robots</li>
      <li>Tendon-actuated continuum manipulators</li>
      <li>Bio-inspired adaptive control</li>
    </ul>
  </div>
  <div class="research-card">
    <div class="research-card-icon"><i class="fas fa-vr-cardboard"></i></div>
    <h3>Augmented Reality</h3>
    <ul>
      <li>Intraoperative AR guidance</li>
      <li>Patient-specific digital twins</li>
      <li>Organ deformation registration</li>
    </ul>
  </div>
</div>

---

<!-- ===== TECHNICAL SKILLS ===== -->
<h2 class="about-section-title"><i class="fas fa-code"></i> Technical Skills</h2>

<div class="skills-grid">
  <div class="skill-group">
    <div class="skill-group-title">Programming</div>
    <div class="skill-tags">
      <span class="skill-tag">C++</span>
      <span class="skill-tag">Python</span>
      <span class="skill-tag">MATLAB</span>
      <span class="skill-tag">JavaScript</span>
      <span class="skill-tag">LaTeX</span>
    </div>
  </div>
  <div class="skill-group">
    <div class="skill-group-title">Frameworks & Tools</div>
    <div class="skill-tags">
      <span class="skill-tag">SOFA</span>
      <span class="skill-tag">ROS</span>
      <span class="skill-tag">OpenGL / WebGL</span>
      <span class="skill-tag">Git</span>
      <span class="skill-tag">Docker</span>
    </div>
  </div>
  <div class="skill-group">
    <div class="skill-group-title">Methods</div>
    <div class="skill-tags">
      <span class="skill-tag">Finite Element Method</span>
      <span class="skill-tag">Cosserat Rod Theory</span>
      <span class="skill-tag">GPU Computing</span>
      <span class="skill-tag">Constraint-based Control</span>
    </div>
  </div>
  <div class="skill-group">
    <div class="skill-group-title">Languages</div>
    <div class="lang-grid" style="margin-top:0.2rem;">
      <div class="lang-item">
        <div class="lang-name">🇫🇷 Français</div>
        <div class="lang-level">Langue maternelle</div>
      </div>
      <div class="lang-item">
        <div class="lang-name">🇬🇧 English</div>
        <div class="lang-level">Fluent — C1</div>
      </div>
      <div class="lang-item">
        <div class="lang-name">🌍 Yoruba</div>
        <div class="lang-level">Langue maternelle</div>
      </div>
      <div class="lang-item">
        <div class="lang-name">🌍 Bassar</div>
        <div class="lang-level">Langue maternelle</div>
      </div>
    </div>
  </div>
</div>

---

<!-- ===== PROFESSIONAL SERVICE ===== -->
<h2 class="about-section-title"><i class="fas fa-users"></i> Professional Service</h2>

<ul class="service-list">
  <li>Reviewer — <em>IEEE Transactions on Robotics</em></li>
  <li>Reviewer — <em>IEEE Transactions on Medical Robotics and Bionics</em></li>
  <li>Reviewer — <em>IEEE Robotics and Automation Letters (RA-L)</em></li>
  <li>Reviewer — ICRA · IROS · International Conference on Medical Robotics</li>
  <li>Member — IEEE Robotics and Automation Society</li>
</ul>

---

<!-- ===== CTA ===== -->
<div class="about-cta">
  <h3>Interested in collaboration?</h3>
  <p>I am open to research collaborations, PhD/postdoc applications, and industrial partnerships in medical robotics and simulation.</p>
  <div class="about-cta-btns">
    <a href="/contact/" class="btn-cta-primary">
      <i class="fas fa-envelope"></i> Get in touch
    </a>
    <a href="/publications/" class="btn-cta-secondary">
      <i class="fas fa-book-open"></i> View Publications
    </a>
    <a href="/assets/cv_yinoussa_adagolodjo.pdf" class="btn-cta-secondary" target="_blank" rel="noopener">
      <i class="fas fa-file-alt"></i> Download CV
    </a>
  </div>
</div>
