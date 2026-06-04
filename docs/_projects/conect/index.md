---
layout: page
title: CONECT Project
subtitle: Control of Needle Insertion in Robotic Surgery
permalink: /research/projects/conect/
image: /assets/images/projects/conect-new.png
description: "The CONECT project focuses on developing innovative solutions for robotic needle insertion procedures, combining real-time simulation with augmented reality guidance for enhanced surgical precision."
start_date: 2020-01-01
status: completed
keywords: ["Needle Insertion", "Robotic Control", "Augmented Reality", "Medical Robotics", "FEM Simulation"]
---

<div class="project-hero-section">
  <div class="project-hero-glow"></div>
  <div class="project-hero-grid">
    <div class="hero-left">
      <div class="project-badges">
        <span class="badge-glass"><i class="fas fa-check" style="font-size: 0.6rem; margin-right: 6px; position: relative; top: -2px;"></i> Completed</span>
        <span class="badge-glass">2020-2023</span>
      </div>
      <h1 class="project-title-hero">{{ page.title }}</h1>
      <p class="project-subtitle-hero">{{ page.description }}</p>

      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 1rem;">
        {% for tag in page.keywords limit:3 %}
          <span style="background: rgba(255,255,255,0.1); padding: 4px 12px; border-radius: 4px; font-size: 0.8rem; color: #a5b4fc;">#{{ tag }}</span>
        {% endfor %}
      </div>
    </div>
    
    <div class="hero-right">
      <div class="project-hero-image-wrapper">
        <img src="{{ page.image }}" alt="{{ page.title }}">
      </div>
    </div>
  </div>
</div>

## Project Overview

The CONECT project brought together researchers from leading institutions to develop innovative solutions for robotic needle insertion procedures. By combining real-time simulation with augmented reality guidance, the project aimed to enhance surgical precision and reduce complications during minimally invasive interventions.

<div class="features-grid">
  <div class="feature-glass-card">
    <i class="fas fa-project-diagram feature-icon"></i>
    <h3>Real-time Simulation</h3>
    <p>Advanced FEM algorithms for interactive soft tissue modeling and GPU-accelerated computation.</p>
  </div>
  <div class="feature-glass-card">
    <i class="fas fa-robot feature-icon"></i>
    <h3>Robotic Control</h3>
    <p>Precise needle manipulation with force feedback integration and automated path planning.</p>
  </div>
  <div class="feature-glass-card">
    <i class="fas fa-glasses feature-icon"></i>
    <h3>Augmented Reality</h3>
    <p>Real-time surgical guidance with 3D visualization of internal structures and interactive planning.</p>
  </div>
</div>

## Clinical Applications

- 🏥 **Minimally invasive surgery**: Enhanced accuracy
- 🔬 **Biopsy procedures**: Targeted tissue sampling
- 💊 **Targeted drug delivery**: Precision treatment
- ☢️ **Interventional radiology**: Advanced guidance

## Publications

### Key Papers

{% for paper in site.data.publications %}
{% if paper.project == "conect" %}

- {{ paper.authors }} ({{ paper.year }}). "{{ paper.title }}." *{{ paper.journal }}*.
{% endif %}
{% endfor %}

## Team Members

- Principal Investigator: Dr. Yinoussa Adagolodjo
- Research Engineers
- PhD Students
- Clinical Partners

[Contact us](/contact/) for more information about this project.

## Roadmap

- [ ] Intégrer la réalité augmentée au prototype
- [ ] Tester la précision de l'insertion d'aiguille
- [ ] Rédiger un rapport de validation clinique
- [ ] Déployer le système en salle d'opération simulée
