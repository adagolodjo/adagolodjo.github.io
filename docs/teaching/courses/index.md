---
layout: page
title: Courses
permalink: /teaching/courses/
subtitle: Current and Past Courses
---

<style>
.courses-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 2.5rem;
}
.course-card {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  padding: 1.5rem 2rem;
  border: 1.5px solid #ececec;
  transition: box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.course-card:hover {
  box-shadow: 0 8px 32px rgba(0,0,0,0.10);
}
.course-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #1a2540;
}
.course-meta {
  font-size: 0.98rem;
  color: #555;
  margin-bottom: 0.7rem;
}
.course-desc {
  font-size: 1.05rem;
  color: #333;
  margin-bottom: 1.1rem;
}
.course-links {
  margin-top: auto;
  display: flex;
  gap: 1rem;
}
@media (max-width: 900px) {
  .courses-grid {
    grid-template-columns: 1fr;
  }
}
</style>

## Current Courses

<div class="courses-grid">
{% for course in site.data.courses %}
{% if course.semester contains "2024" %}
  <div class="course-card">
    <div>
      <div class="course-title">{{ course.code }}: {{ course.title }}</div>
      <div class="course-meta"><strong>Semester:</strong> {{ course.semester }}<br><strong>Level:</strong> {{ course.level }}</div>
      <div class="course-desc">{{ course.description }}</div>
    </div>
    <div class="course-links">
      {% if course.syllabus %}
        <a href="{{ course.syllabus }}" class="button is-small is-link" target="_blank">Syllabus</a>
      {% endif %}
      <a href="/teaching/courses/{{ course.code | downcase }}/" class="button is-small is-primary">Course Page</a>
    </div>
  </div>
{% endif %}
{% endfor %}
</div>

## Past Courses

<div class="courses-grid">
{% for course in site.data.courses %}
{% if course.semester contains "2023" %}
  <div class="course-card">
    <div>
      <div class="course-title">{{ course.code }}: {{ course.title }}</div>
      <div class="course-meta"><strong>Semester:</strong> {{ course.semester }}<br><strong>Level:</strong> {{ course.level }}</div>
      <div class="course-desc">{{ course.description }}</div>
    </div>
    <div class="course-links">
      {% if course.syllabus %}
        <a href="{{ course.syllabus }}" class="button is-small is-link" target="_blank">Syllabus</a>
      {% endif %}
      <a href="/teaching/courses/{{ course.code | downcase }}/" class="button is-small is-primary">Course Page</a>
    </div>
  </div>
{% endif %}
{% endfor %}
</div>

## Teaching Philosophy

My teaching approach emphasizes hands-on learning, practical applications, and the development of critical thinking skills. I believe in creating an inclusive classroom environment where students from diverse backgrounds can thrive and contribute their unique perspectives.

In technical courses, I focus on balancing theoretical foundations with practical implementation, giving students the tools they need to apply concepts to real-world problems. I incorporate project-based learning and encourage collaboration, as these reflect the way computer science is practiced professionally.

I am committed to continually improving my teaching methods based on student feedback and educational research. I strive to stay current with developments in both computer science and pedagogical best practices.

## Student Resources

- [Department Tutoring Center](https://example.edu/tutoring)
- [Programming Help Sessions](https://example.edu/help-sessions)
- [Academic Advising](https://example.edu/advising)

