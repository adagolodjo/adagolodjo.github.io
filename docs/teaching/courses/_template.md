---
layout: course
title: COURSE CODE — Course Title
permalink: /teaching/course-code/
credits: 3 ECTS
semester: Fall 2024
instructors:
  - Yinoussa Adagolodjo
description: >-
  One-paragraph summary of the course, audience, and key outcomes.
---

<section class="course-hero">
  <h1>{{ page.title }}</h1>
  <div class="badges">
    <span class="badge">{{ page.credits }}</span>
    <span class="badge">{{ page.semester }}</span>
  </div>
</section>

<nav class="course-nav">
  <a href="#overview">Overview</a>
  <a href="#objectives">Objectives</a>
  <a href="#planning">Planning</a>
  <a href="#evaluation">Evaluation</a>
  <a href="#resources">Resources</a>
  <a href="#contact">Contact</a>
  <a href="#faq">FAQ</a>
</nav>

<section id="overview" class="section-card">
  <h2>Overview</h2>
  <p>{{ page.description }}</p>
  <div class="info-box">Prerequisites: basic programming or math maturity.</div>
</section>

<section id="objectives" class="section-card">
  <h2>Learning Objectives</h2>
  <div class="objectives-grid">
    <div class="objective-item">Objective 1</div>
    <div class="objective-item">Objective 2</div>
    <div class="objective-item">Objective 3</div>
  </div>
</section>

<section id="planning" class="section-card">
  <h2>Planning</h2>
  <ol class="timeline">
    <li>Week 1 — Topic</li>
    <li>Week 2 — Topic</li>
    <li>Week 3 — Topic</li>
  </ol>
</section>

<section id="evaluation" class="section-card">
  <h2>Evaluation</h2>
  <div class="evaluation-grid">
    <div class="eval-item">Project — 40%</div>
    <div class="eval-item">Assignments — 30%</div>
    <div class="eval-item">Final Exam — 30%</div>
  </div>
</section>

<section id="resources" class="section-card">
  <h2>Resources</h2>
  <div class="resources-grid">
    <a class="teaching-link" href="#" target="_blank" rel="noopener">Syllabus (PDF)</a>
    <a class="teaching-link" href="#" target="_blank" rel="noopener">Slides</a>
    <a class="teaching-link teaching-link-accent" href="#" target="_blank" rel="noopener">Accès Nextcloud (privé)</a>
  </div>
  <p class="text-muted">Request access: <a href="mailto:{{ site.email }}?subject=Access%20Request%20{{ page.title | uri_escape }}">email us</a></p>
  <ul>
    <li>Use Nextcloud public link with password and expiration date.</li>
    <li>Rotate passwords each semester and avoid sharing in public pages.</li>
  </ul>
</section>

<section id="contact" class="section-card">
  <h2>Contact</h2>
  <p>Instructor: {{ page.instructors | join: ', ' }}</p>
  <p>Email: <a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
</section>

<section id="faq" class="section-card">
  <h2>FAQ</h2>
  <details><summary>How do I access Nextcloud?</summary>
    You will receive a password-protected link. Do not share access.
  </details>
</section>



