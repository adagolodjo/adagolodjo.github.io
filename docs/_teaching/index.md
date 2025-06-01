---
layout: page
title: Teaching
permalink: /teaching/
subtitle: Courses, Philosophy, and Resources
---

## Teaching Philosophy

My teaching approach emphasizes hands-on learning, practical applications, and the development of critical thinking skills. I believe in creating an inclusive classroom environment where students from diverse backgrounds can thrive and contribute their unique perspectives.

In technical courses, I focus on balancing theoretical foundations with practical implementation, giving students the tools they need to apply concepts to real-world problems. I incorporate project-based learning and encourage collaboration, as these reflect the way computer science is practiced professionally.

I am committed to continually improving my teaching methods based on student feedback and educational research. I strive to stay current with developments in both computer science and pedagogical best practices.

## Current Courses

{% for course in site.data.courses %}
{% if course.semester contains "2024" %}
<div class="course">
  <h3>{{ course.code }}: {{ course.title }}</h3>
  <p><strong>Semester:</strong> {{ course.semester }}</p>
  <p><strong>Level:</strong> {{ course.level }}</p>
  <p>{{ course.description }}</p>
  <a href="/teaching/courses/{{ course.code | downcase }}/">Learn more</a>
</div>
{% endif %}
{% endfor %}

[View all courses](/teaching/courses/)

## Teaching Resources

I have compiled a variety of resources for students and fellow educators:

- [Programming guides and tutorials](/teaching/resources/#programming-resources)
- [Simulation and robotics resources](/teaching/resources/#simulation-and-robotics-resources)
- [Academic research resources](/teaching/resources/#academic-resources)
- [Tools and software](/teaching/resources/#tools-and-software)

[View all teaching resources](/teaching/resources/)

## Student Research Opportunities

I regularly mentor undergraduate and graduate students on research projects related to simulation, computer graphics, and robotics. If you are interested in getting involved in research, please [contact me](/contact/) to discuss potential opportunities.

Current research opportunities include:

- Real-time simulation algorithm development
- Machine learning for physics-based simulation
- Virtual reality interfaces for medical training
- Soft robotics control and simulation

## Teaching Awards and Recognition

- **Outstanding Teaching Award**, Department of Computer Science, 20XX
- **Innovative Course Design Award**, University Teaching Center, 20XX

## Student Testimonials

> "Professor Adagolodjo's course was challenging but incredibly rewarding. His hands-on approach to teaching computer graphics helped me understand complex concepts that I now use daily in my job." — Former Student, CS205

> "The medical simulation project in Professor Adagolodjo's class gave me real-world experience that helped me secure my internship. His mentorship was invaluable." — Former Student, CS301

