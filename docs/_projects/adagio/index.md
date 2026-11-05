---
layout: page
title: ADAGIO Project
subtitle: Continuum Robots for Endoscopic Gallbladder Drainage
permalink: /research/projects/adagio/
image: /assets/images/projects/adagio.webp
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
        <span class="badge-glass active"><span class="badge-dot" aria-hidden="true"></span> {{ page.status }}</span>
        <span class="badge-glass">Started 2026</span>
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
