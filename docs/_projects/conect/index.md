---
layout: page
title: CONECT Project
subtitle: Control of Needle Insertion in Robotic Surgery
permalink: /research/projects/conect/
image: /assets/images/projects/conect.jpg
---

![CONECT Project](/assets/images/projects/conect.jpg)

## Project Overview

The CONECT project focuses on developing innovative solutions for robotic needle insertion procedures, combining real-time simulation with augmented reality guidance for enhanced surgical precision.

### Research Goals
- Improve accuracy in needle insertion procedures
- Develop real-time simulation for soft tissue deformation
- Create intuitive augmented reality surgical guidance
- Validate solutions in clinical settings

## Technical Innovations

### Real-time Simulation
- Advanced FEM algorithms for soft tissue modeling
- GPU-accelerated computation
- Interactive deformation simulation

### Robotic Control
- Precise needle manipulation
- Force feedback integration
- Automated path planning

### Augmented Reality
- Real-time surgical guidance
- 3D visualization of internal structures
- Interactive surgical planning

## Clinical Applications
- Minimally invasive surgery
- Biopsy procedures
- Targeted drug delivery
- Interventional radiology

## Publications

### Key Papers
{% for paper in site.data.publications %}
{% if paper.project == "conect" %}
- {{ paper.authors }} ({{ paper.year }}). "{{ paper.title }}." *{{ paper.journal }}*.
{% endif %}
{% endfor %}

## Team Members
- Principal Investigator: Dr. Yinoussa Adagolodjo
- Research Engineers
- PhD Students
- Clinical Partners

[Contact us](/contact/) for more information about this project.

## Roadmap

- [ ] Intégrer la réalité augmentée au prototype
- [ ] Tester la précision de l'insertion d'aiguille
- [ ] Rédiger un rapport de validation clinique
- [ ] Déployer le système en salle d'opération simulée

