---
layout: page
title: Courses
permalink: /teaching/courses/
subtitle: Current and Past Courses
---

## Current Courses

{% for course in site.data.courses %}
{% if course.semester contains "2024" %}
<div class="course">
  <h3>{{ course.code }}: {{ course.title }}</h3>
  <p><strong>Semester:</strong> {{ course.semester }}</p>
  <p><strong>Level:</strong> {{ course.level }}</p>
  <p>{{ course.description }}</p>
  {% if course.syllabus %}
  <p><a href="{{ course.syllabus }}" target="_blank">Course Syllabus</a></p>
  {% endif %}
  <a href="/teaching/courses/{{ course.code | downcase }}/">Course Page</a>
</div>
{% endif %}
{% endfor %}

## Past Courses

{% for course in site.data.courses %}
{% if course.semester contains "2023" %}
<div class="course">
  <h3>{{ course.code }}: {{ course.title }}</h3>
  <p><strong>Semester:</strong> {{ course.semester }}</p>
  <p><strong>Level:</strong> {{ course.level }}</p>
  <p>{{ course.description }}</p>
  {% if course.syllabus %}
  <p><a href="{{ course.syllabus }}" target="_blank">Course Syllabus</a></p>
  {% endif %}
  <a href="/teaching/courses/{{ course.code | downcase }}/">Course Page</a>
</div>
{% endif %}
{% endfor %}

## Teaching Philosophy

My teaching approach emphasizes hands-on learning, practical applications, and the development of critical thinking skills. I believe in creating an inclusive classroom environment where students from diverse backgrounds can thrive and contribute their unique perspectives.

In technical courses, I focus on balancing theoretical foundations with practical implementation, giving students the tools they need to apply concepts to real-world problems. I incorporate project-based learning and encourage collaboration, as these reflect the way computer science is practiced professionally.

I am committed to continually improving my teaching methods based on student feedback and educational research. I strive to stay current with developments in both computer science and pedagogical best practices.

## Student Resources

- [Department Tutoring Center](https://example.edu/tutoring)
- [Programming Help Sessions](https://example.edu/help-sessions)
- [Academic Advising](https://example.edu/advising)

