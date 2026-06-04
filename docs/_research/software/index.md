---
layout: page
title: Software & Open Source
subtitle: Contributions to the SOFA Ecosystem and Soft Robotics
permalink: /research/software/
description: "Open-source software contributions by Dr. Yinoussa Adagolodjo — Cosserat plugin, SoftRobots.Inverse, and SOFA Framework."
---

<style>
/* ── Software page ────────────────────────────────────────── */
.software-hero {
  background: linear-gradient(135deg, #013A3C 0%, #016064 60%, #48AAAD 100%);
  border-radius: 1rem;
  padding: 2.5rem 2rem;
  color: #fff;
  margin-bottom: 2.5rem;
  text-align: center;
}
.software-hero h2 { color: #fff; margin-bottom: 0.5rem; }
.software-hero p  { color: rgba(255,255,255,0.85); max-width: 680px; margin: 0 auto; }

.software-card {
  border-radius: 0.75rem;
  border: 1px solid #e4eaea;
  padding: 2rem;
  margin-bottom: 2rem;
  background: #fff;
  transition: box-shadow .25s, transform .25s;
  position: relative;
  overflow: hidden;
}
.software-card:hover {
  box-shadow: 0 8px 32px rgba(1,96,100,.12);
  transform: translateY(-2px);
}
.software-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 5px; height: 100%;
  background: linear-gradient(180deg, #016064, #48AAAD);
  border-radius: 0.75rem 0 0 0.75rem;
}

.sw-header {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}
.sw-icon {
  width: 56px; height: 56px;
  border-radius: 0.6rem;
  background: linear-gradient(135deg, #016064, #48AAAD);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.sw-icon i { color: #fff; font-size: 1.6rem; }
.sw-title-block { flex: 1; min-width: 200px; }
.sw-title-block h3 { margin-bottom: 0.15rem; color: #013A3C; font-size: 1.3rem; }
.sw-title-block .sw-org  { font-size: 0.82rem; color: #888; margin-bottom: 0; }

.sw-role-badge {
  display: inline-block;
  background: #e6f4f4;
  color: #016064;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.2rem 0.75rem;
  border-radius: 99px;
  border: 1px solid #b0d8d9;
  white-space: nowrap;
  align-self: flex-start;
  margin-top: 0.2rem;
}
.sw-role-badge.lead { background: #013A3C; color: #fff; border-color: #013A3C; }

.sw-description { color: #444; line-height: 1.7; margin-bottom: 1.25rem; }

.sw-features {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.6rem;
  margin-bottom: 1.5rem;
  list-style: none;
  padding: 0;
}
.sw-features li {
  background: #f5fafa;
  border: 1px solid #d3e9ea;
  border-radius: 0.5rem;
  padding: 0.45rem 0.85rem;
  font-size: 0.87rem;
  color: #2d6466;
  display: flex; align-items: center; gap: 0.5rem;
}
.sw-features li i { color: #48AAAD; font-size: 0.85rem; }

.sw-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; }
.sw-actions a {
  display: inline-flex; align-items: center; gap: 0.45rem;
  padding: 0.55rem 1.25rem;
  border-radius: 0.5rem;
  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: none;
  transition: background .2s, color .2s;
}
.sw-btn-primary {
  background: #016064;
  color: #fff !important;
  border: 2px solid #016064;
}
.sw-btn-primary:hover { background: #013A3C; border-color: #013A3C; }
.sw-btn-outline {
  background: transparent;
  color: #016064 !important;
  border: 2px solid #016064;
}
.sw-btn-outline:hover { background: #016064; color: #fff !important; }

.sw-stats {
  display: flex; gap: 1.5rem; flex-wrap: wrap;
  margin-bottom: 1rem;
}
.sw-stat { text-align: center; }
.sw-stat strong { display: block; font-size: 1.25rem; color: #016064; }
.sw-stat span   { font-size: 0.78rem; color: #888; }

.ecosystem-note {
  background: #f0f9f9;
  border-left: 4px solid #48AAAD;
  border-radius: 0 0.5rem 0.5rem 0;
  padding: 1rem 1.25rem;
  margin-bottom: 2rem;
  font-size: 0.92rem;
  color: #2d5e60;
}
.ecosystem-note strong { color: #016064; }
</style>

<!-- Hero -->
<div class="software-hero">
  <h2 class="title is-3">Open Source Contributions</h2>
  <p>
    Active developer and maintainer of several open-source plugins within the <strong>SOFA Framework</strong> ecosystem —
    widely used in simulation-based medical robotics research worldwide.
  </p>
</div>

<!-- Ecosystem context -->
<div class="ecosystem-note">
  <strong>About the SOFA Ecosystem:</strong>
  <a href="https://www.sofa-framework.org/" target="_blank" rel="noopener">SOFA (Simulation Open Framework Architecture)</a>
  is a leading open-source framework for real-time medical simulation and soft-body physics.
  The plugins below extend SOFA with Cosserat rod mechanics and inverse-kinematics solvers
  specifically designed for continuum and soft robots.
</div>

<!-- Card 1 — Cosserat Plugin -->
<div class="software-card">
  <div class="sw-header">
    <div class="sw-icon"><i class="fas fa-code-branch"></i></div>
    <div class="sw-title-block">
      <h3>Cosserat Plugin for SOFA</h3>
      <p class="sw-org">SofaDefrost · SOFA Framework ecosystem</p>
    </div>
    <span class="sw-role-badge lead">Lead Developer</span>
  </div>

  <p class="sw-description">
    A SOFA plugin implementing the <strong>Cosserat rod theory</strong> for real-time simulation of
    flexible, slender structures such as needles, catheters, and continuum robots.
    It provides accurate deformation models based on the geometric exact approach,
    enabling constraint-based control directly within the SOFA simulation pipeline.
    This plugin is the foundation of the needle-insertion and soft-robot guidance
    work carried out in the <a href="https://team.inria.fr/defrost/" target="_blank" rel="noopener">DEFROST team</a>.
  </p>

  <ul class="sw-features">
    <li><i class="fas fa-check"></i> Geometric-exact Cosserat rod model</li>
    <li><i class="fas fa-check"></i> Real-time FEM deformation</li>
    <li><i class="fas fa-check"></i> Needle &amp; catheter simulation</li>
    <li><i class="fas fa-check"></i> Continuum robot kinematics</li>
    <li><i class="fas fa-check"></i> SOFA constraint integration</li>
    <li><i class="fas fa-check"></i> Python scripting support</li>
  </ul>

  <div class="sw-actions">
    <a href="https://github.com/SofaDefrost/Cosserat" target="_blank" rel="noopener" class="sw-btn-primary">
      <i class="fab fa-github"></i> GitHub Repository
    </a>
    <a href="https://sofadefrost.github.io/Cosserat/" target="_blank" rel="noopener" class="sw-btn-outline">
      <i class="fas fa-book"></i> Documentation
    </a>
  </div>
</div>

<!-- Card 2 — SoftRobots.Inverse -->
<div class="software-card">
  <div class="sw-header">
    <div class="sw-icon"><i class="fas fa-robot"></i></div>
    <div class="sw-title-block">
      <h3>SoftRobots.Inverse Plugin</h3>
      <p class="sw-org">SofaDefrost · SOFA Framework ecosystem</p>
    </div>
    <span class="sw-role-badge">Contributor</span>
  </div>

  <p class="sw-description">
    A SOFA plugin that provides <strong>inverse-kinematics and inverse-simulation solvers</strong>
    for soft and continuum robots. It computes actuator commands (cable tensions, pneumatic pressures,
    rod curvatures) from desired end-effector positions or contact forces,
    bridging the gap between simulation and real-time robot control.
    Contributions focus on the integration of Cosserat-based kinematics into the inverse solver pipeline.
  </p>

  <ul class="sw-features">
    <li><i class="fas fa-check"></i> Inverse kinematics solver</li>
    <li><i class="fas fa-check"></i> Cable &amp; pneumatic actuators</li>
    <li><i class="fas fa-check"></i> Real-time control loop</li>
    <li><i class="fas fa-check"></i> Cosserat rod integration</li>
    <li><i class="fas fa-check"></i> Contact-based objectives</li>
    <li><i class="fas fa-check"></i> Compatible with SoftRobots plugin</li>
  </ul>

  <div class="sw-actions">
    <a href="https://github.com/SofaDefrost/SoftRobots.Inverse" target="_blank" rel="noopener" class="sw-btn-primary">
      <i class="fab fa-github"></i> GitHub Repository
    </a>
  </div>
</div>

<!-- Card 3 — SOFA Framework -->
<div class="software-card">
  <div class="sw-header">
    <div class="sw-icon"><i class="fas fa-cubes"></i></div>
    <div class="sw-title-block">
      <h3>SOFA Framework</h3>
      <p class="sw-org">sofa-framework · Open-source medical simulation</p>
    </div>
    <span class="sw-role-badge">Contributor</span>
  </div>

  <p class="sw-description">
    <a href="https://www.sofa-framework.org/" target="_blank" rel="noopener">SOFA</a> is the reference open-source
    framework for <strong>real-time simulation of deformable objects</strong>, used extensively in
    surgical robotics, medical training, and biomechanics research.
    Contributions include improvements to constraint-based simulation components,
    documentation, and Python-scripting interfaces used across the DEFROST team's research pipeline.
  </p>

  <ul class="sw-features">
    <li><i class="fas fa-check"></i> Real-time physics simulation</li>
    <li><i class="fas fa-check"></i> FEM &amp; constraint solvers</li>
    <li><i class="fas fa-check"></i> Medical robotics toolkit</li>
    <li><i class="fas fa-check"></i> Python &amp; C++ API</li>
    <li><i class="fas fa-check"></i> Cross-platform (Linux, macOS, Win)</li>
    <li><i class="fas fa-check"></i> Active international community</li>
  </ul>

  <div class="sw-actions">
    <a href="https://www.sofa-framework.org/" target="_blank" rel="noopener" class="sw-btn-primary">
      <i class="fas fa-globe"></i> Official Website
    </a>
    <a href="https://github.com/sofa-framework/sofa" target="_blank" rel="noopener" class="sw-btn-outline">
      <i class="fab fa-github"></i> GitHub Repository
    </a>
  </div>
</div>

<!-- GitHub profile CTA -->
<div class="card" style="margin-top:2rem; background:linear-gradient(135deg,#f0f9f9,#e6f4f4); border:1px solid #b0d8d9;">
  <div class="card-content" style="text-align:center; padding:2rem;">
    <span class="icon is-large" style="color:#016064;"><i class="fab fa-github fa-2x"></i></span>
    <h3 class="title is-5" style="margin-top:0.75rem; color:#013A3C;">More on GitHub</h3>
    <p style="color:#555; max-width:520px; margin:0 auto 1.25rem;">
      Additional repositories, experiment scripts, and teaching materials are available
      on my personal GitHub profile.
    </p>
    <a href="https://github.com/adagolodjo" target="_blank" rel="noopener"
       class="sw-btn-primary" style="display:inline-flex; align-items:center; gap:0.5rem; padding:0.65rem 1.75rem; border-radius:0.5rem; text-decoration:none; font-weight:600; background:#016064; color:#fff;">
      <i class="fab fa-github"></i> github.com/adagolodjo
    </a>
  </div>
</div>
