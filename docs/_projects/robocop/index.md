---
layout: page
title: ROBOCOP / ACCESS
subtitle: Robotic Cochlear Implant Insertion and Patient-Specific Digital Twin
permalink: /research/projects/robocop/
image: /assets/images/projects/robocop_1.png
description: "Robotization of cochlear implant insertion (ROBOCOP, 2019–2023), continued by ACCESS (2024–2029): a patient-specific digital twin for cochlear implant surgery."
start_date: 2019-01-01
end_date: 2029-12-31
status: active
keywords: ["Cochlear Implant", "Real-time FEM", "Digital Twin", "Surgical Robotics"]
venue: "IEEE MEMS 2023"
venue_url: "https://inria.hal.science/hal-03946253v1"
---

<div class="project-hero-section">
  <div class="project-hero-glow"></div>
  <div class="project-hero-grid">
    <div class="hero-left">
      <div class="project-badges">
        <span class="badge-glass active"><span class="badge-dot" aria-hidden="true"></span> {{ page.status }}</span>
        <span class="badge-glass">2019-2029</span>
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

This line of research on **cochlear implant surgery** runs in two phases: **ROBOCOP** (2019–2023), on the robotization of the insertion, followed by **ACCESS** (2024–2029), on a patient-specific digital twin of the procedure.

Inserting the electrode array into the cochlea is a delicate gesture: the array is flexible, the cochlea is a narrow spiral, and insertion forces can damage the inner-ear structures that preserve residual hearing.

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
    {%- include ph.html name="ear" class="feature-icon" -%}
    <h3>Patient-Specific Digital Twin</h3>
    <p>Physical simulation of inner-ear structures from medical images, with augmented reality for intraoperative guidance.</p>
  </div>
</div>

## Phase 1 — ROBOCOP (2019–2023)

ROBOCOP aimed at automating cochlear implant insertion. It combined **real-time finite element simulation** of the electrode array (SOFA), **surgical navigation** and **robotic control**, together with the design of an **actuated electrode array** based on electroactive polymer micro-actuators that can bend under electrical stimulation to reduce insertion trauma (IEEE MEMS 2023).

## Phase 2 — ACCESS (2024–2029)

ACCESS continues ROBOCOP with a **patient-specific digital twin** for cochlear implant surgery: physical simulation of inner-ear structures, medical image processing and augmented reality for intraoperative guidance.

## My Role

- Postdoctoral researcher on ROBOCOP from 2019, then **principal investigator** from 2022 after joining the University of Lille as Assistant Professor.
- Principal investigator of ACCESS.

{% include project-publications.html project="robocop" %}

[Contact me](/contact/) for more information about this project.
