---
layout: page
title: IRE Project
subtitle: Intelligent Robotic Endoscopes
permalink: /research/projects/ire/
image: /assets/images/projects/ire.jpg
---

The IRE project focuses on developing innovative solutions for robotic endoscopy, combining real-time simulation with augmented reality guidance for enhanced surgical precision.

<!--more-->

![IRE Project](/assets/images/projects/ire.jpg)

## Project Overview

Our research aims to revolutionize minimally invasive surgery through intelligent robotic endoscopes. By integrating advanced computer vision, machine learning, and real-time simulation, we're creating next-generation surgical tools that enhance precision and patient outcomes.

## Publications

### Key Papers
{% for paper in site.data.publications %}
{% if paper.project == "ire" %}
- {{ paper.authors }} ({{ paper.year }}). "{{ paper.title }}." *{{ paper.journal }}*.
{% endif %}
{% endfor %}

[Contact us](/contact/) for more information about this project.

## Roadmap

- [ ] Optimize endoscopic navigation algorithm
- [ ] Integrate AI for tissue detection
- [ ] Conduct preclinical trials
- [ ] Present at medical conference

