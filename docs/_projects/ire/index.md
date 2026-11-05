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
        <span class="badge-glass active"><span class="badge-dot" aria-hidden="true"></span> {{ page.status }}</span>
        <span class="badge-glass">Started 2024</span>
      </div>
      <div class="project-hero-tags">
        {% for tag in page.keywords limit:3 %}
          <span class="project-hero-tag">#{{ tag }}</span>
        {% endfor %}
      </div>
    </div>
    
    <div class="hero-right">
      <div class="project-hero-image-wrapper">
        <img src="{{ page.image }}" alt="{{ page.title }}" loading="lazy">
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
