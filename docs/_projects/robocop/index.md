---
layout: page
title: ROBOCOP Project
subtitle: Robotic Cochlear Implant Procedure
permalink: /research/projects/robocop/
image: /assets/images/projects/robocop_1.png
description: "Robotization of cochlear implant insertion: real-time FEM simulation of the electrode array, surgical navigation and safe, automated insertion."
start_date: 2019-01-01
status: completed
keywords: ["Cochlear Implant", "Real-time FEM", "Surgical Robotics", "Electroactive Polymer"]
venue: "IEEE MEMS 2023"
venue_url: "https://inria.hal.science/hal-03946253v1"
---

<div class="project-hero-section">
  <div class="project-hero-glow"></div>
  <div class="project-hero-grid">
    <div class="hero-left">
      <div class="project-badges">
        <span class="badge-glass">{%- include ph.html name="check" style="font-size: 0.6rem; margin-right: 6px; position: relative; top: -2px;" -%} Completed</span>
        <span class="badge-glass">2019-2023</span>
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

ROBOCOP (2019–2023) aimed at automating the insertion of cochlear implants. Inserting the electrode array into the cochlea is a delicate gesture: the array is flexible, the cochlea is a narrow spiral, and insertion forces can damage the inner-ear structures that preserve residual hearing.

The project combined **real-time finite element simulation** of the electrode array (SOFA), **surgical navigation** and **robotic control**, together with the design of an **actuated electrode array** based on electroactive polymer micro-actuators that can bend under electrical stimulation to reduce insertion trauma.

<div class="features-grid">
  <div class="feature-glass-card">
    {%- include ph.html name="cube" class="feature-icon" -%}
    <h3>Real-time FEM</h3>
    <p>Simulation of the flexible electrode array and its contacts with the cochlear walls during insertion.</p>
  </div>
  <div class="feature-glass-card">
    {%- include ph.html name="robot" class="feature-icon" -%}
    <h3>Automated Insertion</h3>
    <p>Robotic insertion driven by the simulation, with navigation and safety constraints.</p>
  </div>
  <div class="feature-glass-card">
    {%- include ph.html name="lightning" class="feature-icon" -%}
    <h3>Smart Electrode Array</h3>
    <p>Electroactive polymer micro-actuators to steer the array and limit trauma (IEEE MEMS 2023).</p>
  </div>
</div>

## My Role

- Postdoctoral researcher on the project from 2019, then **principal investigator** from 2022 after joining the University of Lille as Assistant Professor.
- Simulation and control of the electrode array insertion with SOFA.

{% include project-publications.html project="robocop" %}

## Follow-up: ACCESS (2024–present)

ROBOCOP ended in 2023. Its follow-up, **ACCESS**, builds a patient-specific digital twin for cochlear implant surgery: physical simulation of inner-ear structures, medical image processing and augmented reality for intraoperative guidance.

[Contact me](/contact/) for more information about this project.
