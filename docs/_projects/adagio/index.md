---
layout: page
title: ADAGIO Project
subtitle: Adaptive Digital AI-Guided Interventions and Operations
permalink: /research/projects/adagio/
image: /assets/images/projects/bladder_2.jpg
description: "Research project developing adaptive digital tools and AI-driven assistance for complex medical interventions, with intelligent systems that learn and adapt to surgical environments."
start_date: 2026-01-01
status: active
keywords: ["AI", "Digital Health", "Medical Interventions", "Adaptive Systems", "Surgical Assistance"]
---

<div class="project-hero-section">
  <div class="project-hero-glow"></div>
  <div class="project-hero-grid">
    <div class="hero-left">
      <div class="project-badges">
        <span class="badge-glass active"><i class="fas fa-circle" style="font-size: 0.6rem; margin-right: 6px; position: relative; top: -2px;"></i> {{ page.status }}</span>
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

The **ADAGIO** project focuses on developing adaptive digital tools and AI-driven assistance systems for complex medical interventions. By combining machine learning, real-time simulation, and clinical expertise, ADAGIO creates intelligent systems that learn and adapt to diverse surgical environments, improving outcomes and safety for patients.

**Project Focus Areas:**
- Adaptive AI systems for surgical guidance
- Digital health tools for clinical integration
- Real-time learning from surgical data
- Intelligent decision support for medical interventions

## Key Innovations

<div class="features-grid">
  <div class="feature-glass-card">
    <i class="fas fa-brain feature-icon"></i>
    <h3>Context-Aware Guidance</h3>
    <p>Systems that adapt to the specific surgical context.</p>
  </div>
  <div class="feature-glass-card">
    <i class="fas fa-sync feature-icon"></i>
    <h3>Real-Time Learning</h3>
    <p>Continuous improvement from procedural feedback.</p>
  </div>
  <div class="feature-glass-card">
    <i class="fas fa-chart-line feature-icon"></i>
    <h3>Predictive Systems</h3>
    <p>Anticipating surgical needs before they arise.</p>
  </div>
  <div class="feature-glass-card">
    <i class="fas fa-laptop-medical feature-icon"></i>
    <h3>Digital Platform</h3>
    <p>Seamless embedding in existing OR environments.</p>
  </div>
</div>

## Medical Applications

- 🔬 **Minimally Invasive Surgery**: AI-guided endoscopic and laparoscopic procedures
- 🏥 **Complex Interventions**: Assistance in high-risk, multi-step procedures
- 👨‍🏫 **Training & Simulation**: Adaptive training platforms for surgical residents
- 📊 **Quality Monitoring**: Real-time quality control during procedures

## Research Approach

1. **Data Collection**: Gathering rich procedural datasets from clinical partners
2. **Model Development**: Building adaptive AI models trained on surgical data
3. **Simulation Validation**: Testing in high-fidelity simulation environments
4. **Clinical Trials**: Controlled validation in clinical settings

## Publications

### Key Papers
{% for paper in site.data.publications %}
{% if paper.project == "adagio" %}
- {{ paper.authors }} ({{ paper.year }}). "{{ paper.title }}." *{{ paper.journal }}*.
{% endif %}
{% endfor %}

## Team

- **Principal Investigator**: Dr. Yinoussa Adagolodjo
- **PhD Students**: Recruited for AI and medical robotics research
- **Clinical Partners**: Healthcare institutions for validation

## Related Projects

- [IRE Project](/research/projects/ire/) — Soft robotic endoscopes and digital twins
- [Growing Robot](/research/projects/growing-robot/) — Vine-inspired soft robotics
- [COSSEROOTS](/research/projects/cosseroots/) — Cosserat theory for soft robot control

[Contact us](/contact/) for collaboration opportunities.
