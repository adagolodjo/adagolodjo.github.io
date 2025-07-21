---
layout: page
title: IRE Project
subtitle: Intelligent Robotic Endoscopes
permalink: /research/projects/ire/
image: /assets/images/projects/conect.jpg
---

![IRE Project](/assets/images/projects/ire.jpg)

## Project Overview

The IRE project focuses on developing innovative solutions for robotic endoscopy, combining real-time simulation with augmented reality guidance for enhanced surgical precision.


## Publications

### Key Papers
{% for paper in site.data.publications %}
{% if paper.project == "ire" %}
- {{ paper.authors }} ({{ paper.year }}). "{{ paper.title }}." *{{ paper.journal }}*.
{% endif %}
{% endfor %}


[Contact us](/contact/) for more information about this project.

## Roadmap

- [ ] Optimiser l'algorithme de navigation endoscopique
- [ ] Intégrer l'IA pour la détection de tissus
- [ ] Réaliser des tests précliniques
- [ ] Présenter le projet à une conférence médicale

