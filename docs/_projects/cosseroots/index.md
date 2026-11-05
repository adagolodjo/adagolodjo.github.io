---
layout: page
title: COSSEROOTS Project
subtitle: Cosserat Theory for Soft Robotics Control
permalink: /research/projects/cosseroots/
image: /assets/images/projects/cosseroots-new.png
description: "Research project applying Cosserat rod theory to the modeling and control of slender, continuum soft robots."
start_date: 2021-01-01
end_date: 2022-12-31
status: completed
keywords: ["Cosserat Rod Theory", "Soft Robotics", "Real-Time Simulation", "FEM"]
venue: "RA-L 2021"
venue_url: "https://hal.science/hal-03192168v1"
---

<div class="project-hero-section">
  <div class="project-hero-glow"></div>
  <div class="project-hero-grid">
    <div class="hero-left">
      <div class="project-badges">
        <span class="badge-glass">{%- include ph.html name="check" class="badge-icon" -%} Completed</span>
        <span class="badge-glass">2021-2022</span>
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

COSSEROOTS (2021–2022) studied control strategies for **continuum soft robots** using **Cosserat rod theory**. Slender robots — catheters, continuum arms, cable-driven structures — undergo large deformations that classical rigid-body models cannot capture; Cosserat models describe them with few degrees of freedom while staying accurate enough for control.

<div class="features-grid">
  <div class="feature-glass-card">
    {%- include ph.html name="share-network" class="feature-icon" -%}
    <h3>Cosserat Modeling</h3>
    <p>Reduced-coordinate rod models for large deformations of slender robots.</p>
  </div>
  <div class="feature-glass-card">
    {%- include ph.html name="cube" class="feature-icon" -%}
    <h3>FEM Coupling</h3>
    <p>Coupling Cosserat rods (reduced coordinates) with FEM models (global coordinates) for direct and inverse kinematics.</p>
  </div>
  <div class="feature-glass-card">
    {%- include ph.html name="game-controller" class="feature-icon" -%}
    <h3>Inverse Control</h3>
    <p>Computing the actuator inputs that achieve a desired shape or trajectory.</p>
  </div>
</div>

## Software: the Cosserat Plugin for SOFA

The models developed in this line of work are available in the open-source [Cosserat plugin for SOFA](https://github.com/SofaDefrost/Cosserat) (C++ / Python), of which I am the lead developer. It is used by the soft robotics community to simulate rods, cables and continuum robots in real time.

{% include project-publications.html project="cosseroots" %}

[Contact me](/contact/) for more information about this project.
