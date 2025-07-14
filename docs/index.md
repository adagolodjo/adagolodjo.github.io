---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
title: Yinoussa Adagolodjo
subtitle: Assistant Professor at the University of Lille
hero_image: /assets/images/hero.jpg
hero_height: is-large
description: "Assistant Professor at the University of Lille and full member of the DEFROST team since 2019, specializing in robotics and augmented reality applications in healthcare."
---

## Welcome

Assistant Professor at the University of Lille and full member of the DEFROST team since 2019, I have actively contributed to advancing research in robotics and augmented reality applications in healthcare.

Throughout my academic career, I have been deeply involved in pioneering projects that reflect a commitment to cutting-edge exploration and impactful innovation. Among these, the CONECT project—my doctoral thesis—stands out as a cornerstone of my work. In this project, I focused on integrating robotic technology within the operating room to enhance precision in needle insertion procedures. My contributions included developing methodologies that leverage finite element simulations to assist surgeons during complex operations, using augmented reality to provide intuitive, real-time guidance.

In addition to CONECT, I have collaborated on several interdisciplinary projects that aim to bridge the gap between technology and healthcare, continually seeking ways to improve surgical outcomes and optimize medical workflows through advanced simulation and robotic solutions.

Notably, the ROBOCOP project focuses on the fascinating field of cochlear implant robotization, exploring new avenues to improve hearing technologies. In parallel, my involvement in the COSSEROOTS project focused on applying Cosserat's theory to advance the control of slender deformation robots, contributing to advances in the field.

I am excited to share more about my academic endeavors and research activities on this portfolio page. Welcome to my world of academic exploration and innovation!

## Current Research Projects

### **CONECT Project**
My doctoral thesis project focused on integrating robotic technology in operating rooms for enhanced precision in needle insertion procedures. This work involves developing finite element simulations and augmented reality guidance systems for surgical assistance.

[Learn more about CONECT](/research/projects/conect/)

### **ROBOCOP Project**
Working on cochlear implant robotization, exploring innovative approaches to improve hearing technologies.

[Learn more about ROBOCOP](/research/projects/robocop/)

### **COSSEROOTS Project**
Applying Cosserat's theory to advance the control of slender deformation robots.

[Learn more about COSSEROOTS](/research/projects/cosseroots/)

## Recent News

{% for post in site.news limit:3 %}
- **{{ post.date | date: "%B %d, %Y" }}**: [{{ post.title }}]({{ post.url }})
{% endfor %}

[View all news](/news/)

## Teaching

This semester I am teaching:

{% for course in site.data.courses limit:2 %}
- {{ course.code }}: [{{ course.title }}](/teaching/courses/{{ course.code | downcase }}/)
{% endfor %}

[View all courses](/teaching/courses/)

## Recent Publications

{% for publication in site.data.publications limit:3 %}
- {{ publication.authors }} ({{ publication.year }}). "{{ publication.title }}." *{{ publication.journal }}*, {{ publication.volume }}({{ publication.issue }}).
{% endfor %}

[View all publications](/research/publications/)

## Get in Touch

I welcome inquiries from students, researchers, and collaborators interested in robotics, medical applications, and augmented reality. Feel free to reach out to discuss potential opportunities.

[Contact me](/contact/)
