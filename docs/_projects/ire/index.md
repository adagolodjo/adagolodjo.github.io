---
layout: page
title: IRE Project
subtitle: Intelligent Robotic Endoscopes
permalink: /research/projects/ire/
image: /assets/images/projects/colon.jpg
description: "The IRE project focuses on developing innovative solutions for robotic endoscopy, combining real-time simulation with augmented reality guidance for enhanced surgical precision."
start_date: 2022-01-01
status: active
keywords: ["Robotic Endoscopy", "Soft Robotics", "Real-Time Simulation", "Augmented Reality", "Surgical Precision"]
---

<div class="project-hero-section">
  <div class="project-hero-glow"></div>
  <div class="project-hero-grid">
    <div class="hero-left">
      <div class="project-badges">
        <span class="badge-glass active"><i class="fas fa-circle" style="font-size: 0.6rem; margin-right: 6px; position: relative; top: -2px;"></i> {{ page.status }}</span>
        <span class="badge-glass">Started 2022</span>
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

Our research aims to revolutionize minimally invasive surgery through intelligent robotic endoscopes. By integrating advanced computer vision, machine learning, and real-time simulation, we're creating next-generation surgical tools that enhance precision and patient outcomes.

<div class="features-grid">
  <div class="feature-glass-card">
    <i class="fas fa-robot feature-icon"></i>
    <h3>Robotic Control</h3>
    <p>Advanced navigation algorithms for flexible robotic endoscopes covering tortuous pathways.</p>
  </div>
  <div class="feature-glass-card">
    <i class="fas fa-vr-cardboard feature-icon"></i>
    <h3>Augmented Reality</h3>
    <p>Real-time visual guidance enhancing the surgeon's perception during procedures.</p>
  </div>
  <div class="feature-glass-card">
    <i class="fas fa-laptop-code feature-icon"></i>
    <h3>Digital Twins</h3>
    <p>Real-time physics-based simulation models running parallel to physical procedures.</p>
  </div>
</div>

## Publications

### Key Papers

{% for paper in site.data.publications %}
{% if paper.project == "ire" %}

- {{ paper.authors }} ({{ paper.year }}). "{{ paper.title }}." *{{ paper.journal }}*.
{% endif %}
{% endfor %}

[Contact us](/contact/) for more information about this project.

## Roadmap

- [ ] Optimize endoscopic navigation algorithm
- [ ] Integrate AI for tissue detection
- [ ] Conduct preclinical trials
- [ ] Present at medical conference
