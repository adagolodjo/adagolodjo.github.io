---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
title: Adagolodjo
subtitle: Assistant Professor at the University of Lille
hero_image: /assets/images/hero.jpg
hero_height: is-large
---
## Welcome

I am an Assistant Professor at the University of Lille and a full member of the DEFROST team since 2019. My research focuses on robotics and augmented reality applications in healthcare, combining advanced simulation techniques with practical medical applications.

### **Current Research Projects**

- **CONECT Project**: My doctoral thesis project focused on integrating robotic technology in operating rooms for enhanced precision in needle insertion procedures. This work involves developing finite element simulations and augmented reality guidance systems for surgical assistance.

- **ROBOCOP Project**: Working on cochlear implant robotization, exploring innovative approaches to improve hearing technologies.

- **COSSEROOTS Project**: Applying Cosserat's theory to advance the control of slender deformation robots.

My work bridges the gap between technology and healthcare, focusing on improving surgical outcomes and optimizing medical workflows through advanced simulation and robotic solutions.

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
