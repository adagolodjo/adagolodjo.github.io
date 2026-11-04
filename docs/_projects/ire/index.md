---
layout: page
title: IRE Project
subtitle: Intelligent Robotic Endoscopes
permalink: /research/projects/ire/
image: /assets/images/projects/colon.jpg
description: "European project on intelligent soft robotic endoscopes for minimally invasive surgery, combining real-time simulation, augmented reality guidance, computer vision and machine learning."
start_date: 2024-01-01
status: active
keywords: ["Robotic Endoscopy", "Soft Robotics", "Real-Time Simulation", "Augmented Reality"]
---

<div class="project-hero-section">
  <div class="project-hero-glow"></div>
  <div class="project-hero-grid">
    <div class="hero-left">
      <div class="project-badges">
        <span class="badge-glass active"><span style="display:inline-block;width:0.5em;height:0.5em;border-radius:50%;background:currentColor;margin-right:6px;position:relative;top:-1px;"></span> {{ page.status }}</span>
        <span class="badge-glass">Started 2024</span>
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

IRE (Intelligent Robotic Endoscopes) is a **European project** in which I take part as a team member of DEFROST (Inria / CRIStAL, University of Lille). The project targets soft robotic endoscopes for minimally invasive surgery, guided in real time by simulation, augmented reality, computer vision and machine learning.

<div class="features-grid">
  <div class="feature-glass-card">
    {%- include ph.html name="robot" class="feature-icon" -%}
    <h3>Soft Robotic Endoscopes</h3>
    <p>Modeling and control of flexible endoscopes navigating tortuous anatomical pathways.</p>
  </div>
  <div class="feature-glass-card">
    {%- include ph.html name="cube" class="feature-icon" -%}
    <h3>Real-time Simulation</h3>
    <p>Physics-based models of the endoscope and its environment (SOFA) running alongside the procedure.</p>
  </div>
  <div class="feature-glass-card">
    {%- include ph.html name="eyeglasses" class="feature-icon" -%}
    <h3>Augmented Reality</h3>
    <p>Visual guidance combining simulation, computer vision and machine learning.</p>
  </div>
</div>

{% include project-publications.html project="ire" %}

## Related Projects

- [ADAGIO](/research/projects/adagio/) — continuum robots for endoscopic gallbladder drainage
- [COSSEROOTS](/research/projects/cosseroots/) — Cosserat models for slender soft robots

[Contact me](/contact/) for more information about this project.
