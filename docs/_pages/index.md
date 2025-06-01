---
layout: page
title: Yinoussa Adagolodjo
subtitle: Assistant Professor of Computer Science
hero_image: /assets/images/hero.jpg
hero_height: is-large
---

## Welcome to my academic website

I am an Assistant Professor in Computer Science specializing in simulation and soft robotics. My research focuses on developing novel computational methods for real-time simulation of deformable objects, with applications in medical training, surgical planning, and soft robotics.

### Research Highlights

My research team is currently working on several exciting projects:

- **Real-time Medical Simulation**: Developing fast and accurate methods for simulating soft tissue for surgical training
- **Soft Robotics Control**: Creating new algorithms for controlling soft robotic systems
- **Machine Learning for Physics Simulation**: Using neural networks to accelerate physics-based simulation

[Read more about my research](/research/)

### Recent News

{% for post in site.news limit:3 %}
- **{{ post.date | date: "%B %d, %Y" }}**: [{{ post.title }}]({{ post.url }})
{% endfor %}

[View all news](/news/)

### Teaching

This semester I am teaching:

{% for course in site.data.courses limit:2 %}
- {{ course.code }}: [{{ course.title }}](/teaching/courses/{{ course.code | downcase }}/)
{% endfor %}

[View all courses](/teaching/courses/)

### Recent Publications

{% for publication in site.data.publications limit:3 %}
- {{ publication.authors }} ({{ publication.year }}). "{{ publication.title }}." *{{ publication.journal }}*, {{ publication.volume }}({{ publication.issue }}).
{% endfor %}

[View all publications](/research/publications/)

