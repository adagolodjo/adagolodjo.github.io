---
layout: page
title: Teaching
subtitle: Courses and Educational Resources
permalink: /teaching/
---

<!-- Modern Hero Section -->
<section class="universal-hero" style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%); color: white; padding: 3rem 0 2rem 0; text-align: center;">
  <div class="container">
    <img src="/assets/images/notion-face.png" alt="{{ site.author.name }}" class="profile-image" style="width:100px; height:100px; border-radius:50%; object-fit:cover; margin-bottom:1rem; box-shadow:0 4px 20px rgba(33,140,116,0.15);">
    <h1 class="title is-2" style="color:white; margin-bottom:0.5rem;">Teaching</h1>
    <p class="subtitle is-4" style="color: #64ffda; margin-bottom:0.5rem;">Courses, Resources & Student Opportunities</p>
    <p style="color:rgba(255,255,255,0.85); max-width:600px; margin:0 auto 1rem auto;">Explore my teaching activities at the University of Lille: hands-on courses, curated resources, and research opportunities for students in robotics, computer graphics, and simulation.</p>
  </div>
</section>

<style>
.teaching-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin: 2.5rem 0;
}
.teaching-card {
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
.teaching-card:hover {
  box-shadow: 0 8px 32px rgba(0,0,0,0.10);
}
.teaching-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #1a2540;
}
.teaching-meta {
  font-size: 0.98rem;
  color: #555;
  margin-bottom: 0.7rem;
}
.teaching-desc {
  font-size: 1.05rem;
  color: #333;
  margin-bottom: 1.1rem;
}
.teaching-links {
  margin-top: auto;
  display: flex;
  gap: 1rem;
}
@media (max-width: 900px) {
  .teaching-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="teaching-grid">
  <!-- Course blocks -->
  {% for course in site.data.courses %}
    <div class="teaching-card">
      <div>
        <div class="teaching-title">{{ course.code }}: {{ course.title }}</div>
        <div class="teaching-meta"><strong>Semester:</strong> {{ course.semester }}<br><strong>Level:</strong> {{ course.level }}</div>
        <div class="teaching-desc">{{ course.description }}</div>
      </div>
      <div class="teaching-links">
        {% if course.syllabus %}
          <a href="{{ course.syllabus }}" class="button is-small is-link" target="_blank">Syllabus</a>
        {% endif %}
        <a href="/teaching/courses/{{ course.code | downcase }}/" class="button is-small is-primary">Course Page</a>
      </div>
    </div>
  {% endfor %}
  <!-- Resources block -->
  <div class="teaching-card" style="background:linear-gradient(135deg,#e0f7fa 0%,#b2ebf2 100%);border:1.5px solid #b2ebf2;">
    <div>
      <div class="teaching-title"><i class="fas fa-book-open"></i> Teaching Resources</div>
      <div class="teaching-desc">Curated resources for students and educators: programming, simulation, research, and more.</div>
    </div>
    <div class="teaching-links">
      <a href="/teaching/resources/" class="button is-small is-info">View Resources</a>
    </div>
  </div>
</div>

<!-- Le reste du contenu pédagogique -->

## Teaching Philosophy

My teaching approach emphasizes:
- Hands-on practical experience
- Real-world applications
- Interactive learning
- Integration of research with teaching

[View all courses](/teaching/courses/)

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

