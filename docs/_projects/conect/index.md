---
layout: page
title: CONECT Project
subtitle: Robotic Needle Insertion Guided by Real-time FEM Simulation
permalink: /research/projects/conect/
image: /assets/images/projects/conect-new.png
description: "My PhD project at ICube (University of Strasbourg): robotic insertion of flexible needles in deformable tissue using inverse real-time finite element simulation, and augmented reality for surgery."
start_date: 2015-01-01
status: completed
keywords: ["Needle Insertion", "Inverse FEM", "Augmented Reality", "Medical Robotics"]
venue: "IEEE T-RO 2019"
venue_url: "https://inria.hal.science/hal-02144487v1"
---

<div class="project-hero-section">
  <div class="project-hero-glow"></div>
  <div class="project-hero-grid">
    <div class="hero-left">
      <div class="project-badges">
        <span class="badge-glass">{%- include ph.html name="check" style="font-size: 0.6rem; margin-right: 6px; position: relative; top: -2px;" -%} Completed</span>
        <span class="badge-glass">2015-2018</span>
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

CONECT — *Couplage de la rObotique et de la simulatioN médicalE pour des proCédures automaTisées* — was my **PhD project** (2015–2018) at the ICube laboratory, University of Strasbourg, supervised by Dr. Hadrien Courtecuisse and Prof. Michel de Mathelin.

The goal was to control a robot inserting a **flexible needle** into **deformable tissue**. Both the needle and the tissue deform during insertion, so the target moves. A real-time finite element simulation, solved as an **inverse problem**, computes at each step the robot motion that keeps the needle on its planned trajectory.

<div class="features-grid">
  <div class="feature-glass-card">
    {%- include ph.html name="share-network" class="feature-icon" -%}
    <h3>Inverse FEM Simulation</h3>
    <p>Real-time finite element models of needle and tissue, inverted to compute robot commands.</p>
  </div>
  <div class="feature-glass-card">
    {%- include ph.html name="robot" class="feature-icon" -%}
    <h3>Robotic Needle Insertion</h3>
    <p>Constraint-based needle–tissue interaction, with corrective and predictive steps during insertion.</p>
  </div>
  <div class="feature-glass-card">
    {%- include ph.html name="eyeglasses" class="feature-icon" -%}
    <h3>Augmented Reality</h3>
    <p>Registration of deformable organ models for surgical AR, applied to open liver surgery.</p>
  </div>
</div>

{% include project-publications.html project="conect" %}

[Contact me](/contact/) for more information about this work.
