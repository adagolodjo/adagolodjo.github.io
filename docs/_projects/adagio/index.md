---
layout: page
title: ADAGIO Project
subtitle: Continuum Robots for Endoscopic Gallbladder Drainage
permalink: /research/projects/adagio/
image: /assets/images/projects/bladder_2.jpg
description: "National project on tendon-actuated continuum robots for the endoscopic drainage of the gallbladder in acute cholecystitis."
start_date: 2026-01-01
status: active
keywords: ["Continuum Robots", "Tendon Actuation", "Endoscopy", "Stent Placement"]
---

<div class="project-hero-section">
  <div class="project-hero-glow"></div>
  <div class="project-hero-grid">
    <div class="hero-left">
      <div class="project-badges">
        <span class="badge-glass active"><span style="display:inline-block;width:0.5em;height:0.5em;border-radius:50%;background:currentColor;margin-right:6px;position:relative;top:-1px;"></span> {{ page.status }}</span>
        <span class="badge-glass">Started 2026</span>
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

**ADAGIO** — *tendon-Actuated continuum robots for enDoscopic drAinage of the Gallbladder In acute chOlecystitis* — is a **national project** started in January 2026, in which I take part as a team member.

Acute cholecystitis can be treated by draining the gallbladder endoscopically, which requires placing a stent accurately through a flexible endoscope. My work in the project focuses on a **stabilization method for stent placement**, based on the precise control of tendon-actuated continuum robots.

<div class="features-grid">
  <div class="feature-glass-card">
    {%- include ph.html name="robot" class="feature-icon" -%}
    <h3>Continuum Robots</h3>
    <p>Tendon-actuated flexible robots compatible with endoscopic access.</p>
  </div>
  <div class="feature-glass-card">
    {%- include ph.html name="target" class="feature-icon" -%}
    <h3>Stabilized Stent Placement</h3>
    <p>Control strategies that keep the tool tip stable during stent deployment.</p>
  </div>
  <div class="feature-glass-card">
    {%- include ph.html name="cube" class="feature-icon" -%}
    <h3>Model-based Control</h3>
    <p>Mechanical models of the continuum robot for precise, real-time control.</p>
  </div>
</div>

{% include project-publications.html project="adagio" %}

## Related Projects

- [IRE Project](/research/projects/ire/) — intelligent soft robotic endoscopes
- [COSSEROOTS](/research/projects/cosseroots/) — Cosserat models for slender soft robots

[Contact me](/contact/) for more information about this project.
