---
title: Research
layout: page
permalink: /research/
description: Overview of my research activities in simulation and soft robotics
---

# Research Overview

Welcome to my research hub. My work focuses on **Simulation and Soft Robotics**, with applications in medical robotics and robotic-assisted surgery.

## Current Research Areas

### 🤖 Medical Robotics
- Robotic-assisted surgical interventions
- Real-time simulation for surgical navigation
- Constraint-based manipulation of deformable models

### 🧠 Simulation & Modeling
- Real-time deformation simulation
- Physics-based modeling for soft tissues
- Constraint-based approaches

### 🔬 Soft Robotics
- Continuum robots for medical applications
- Bio-inspired robotic systems
- Flexible and adaptive control systems

---

## Quick Navigation

<div class="columns is-multiline">
  <div class="column is-6">
    <div class="card">
      <div class="card-content">
        <h3 class="title is-4">🚀 Active Projects</h3>
        <p>Explore my current research projects including COSSEROOTS, ROBOCOP, and CONECT.</p>
        <a href="/research/projects/" class="button is-primary">View Projects</a>
      </div>
    </div>
  </div>
  
  <div class="column is-6">
    <div class="card">
      <div class="card-content">
        <h3 class="title is-4">📚 Publications & Papers</h3>
        <p>Browse my published research in journals, conferences, and collaborative works.</p>
        <a href="/research/publications/" class="button is-primary">View Publications</a>
      </div>
    </div>
  </div>
  
  <div class="column is-6">
    <div class="card">
      <div class="card-content">
        <h3 class="title is-4">🛠️ Software & Datasets</h3>
        <p>Access open-source tools, code repositories, and research datasets.</p>
        <a href="/research/software/" class="button is-primary">View Resources</a>
      </div>
    </div>
  </div>
  
  <div class="column is-6">
    <div class="card">
      <div class="card-content">
        <h3 class="title is-4">👥 Research Group</h3>
        <p>Meet our research team, collaborators, and ongoing partnerships.</p>
        <a href="/research/group/" class="button is-primary">Meet the Team</a>
      </div>
    </div>
  </div>
</div>

---

## Latest Updates

{% assign recent_news = site.news | where_exp: "item", "item.categories contains 'research'" | sort: 'date' | reverse | limit: 3 %}
{% if recent_news.size > 0 %}
<div class="content">
  {% for news in recent_news %}
  <div class="notification is-light">
    <strong>{{ news.date | date: "%B %d, %Y" }}</strong> - {{ news.title }}
    <p>{{ news.excerpt | strip_html | truncate: 150 }}</p>
  </div>
  {% endfor %}
</div>
{% endif %}

---

## Research Philosophy

My research bridges the gap between theoretical advances and practical applications, with a focus on developing robust, real-time solutions for medical robotics. I believe in:

- **Interdisciplinary collaboration** - Working across computer science, medicine, and engineering
- **Open science** - Sharing tools, datasets, and methodologies with the research community
- **Real-world impact** - Ensuring research translates into practical benefits for healthcare
- **Innovation in education** - Training the next generation of researchers and practitioners

---

*For collaboration opportunities or research inquiries, please [contact me](/contact/).*

