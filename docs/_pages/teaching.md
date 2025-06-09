---
title: Teaching & Mentoring
layout: page
permalink: /teaching/
description: Teaching philosophy, courses, and student mentoring activities
---

# Teaching & Mentoring

As an Associate Professor, I am passionate about education and mentoring the next generation of computer scientists and robotics engineers.

## Teaching Philosophy

I believe in **hands-on learning** combined with solid theoretical foundations. My approach emphasizes:

- **Practical application** - Students work on real-world projects and problems
- **Interdisciplinary thinking** - Connecting computer science with other fields
- **Research integration** - Bringing cutting-edge research into the classroom
- **Individual mentoring** - Supporting each student's unique learning journey

---

## Quick Navigation

<div class="columns is-multiline">
  <div class="column is-4">
    <div class="card">
      <div class="card-content has-text-centered">
        <span class="icon is-large has-text-primary">
          <i class="fas fa-chalkboard-teacher fa-2x"></i>
        </span>
        <h3 class="title is-4">Courses</h3>
        <p>Current and past courses I teach, including syllabi and materials.</p>
        <a href="/teaching/courses/" class="button is-primary">View Courses</a>
      </div>
    </div>
  </div>
  
  <div class="column is-4">
    <div class="card">
      <div class="card-content has-text-centered">
        <span class="icon is-large has-text-info">
          <i class="fas fa-project-diagram fa-2x"></i>
        </span>
        <h3 class="title is-4">Student Projects</h3>
        <p>Showcase of outstanding student work and research projects.</p>
        <a href="/teaching/projects/" class="button is-primary">View Projects</a>
      </div>
    </div>
  </div>
  
  <div class="column is-4">
    <div class="card">
      <div class="card-content has-text-centered">
        <span class="icon is-large has-text-success">
          <i class="fas fa-user-graduate fa-2x"></i>
        </span>
        <h3 class="title is-4">Supervision</h3>
        <p>PhD, Master's, and undergraduate thesis supervision opportunities.</p>
        <a href="/teaching/supervision/" class="button is-primary">Learn More</a>
      </div>
    </div>
  </div>
</div>

---

## Current Courses (2024)

{% assign current_courses = site.data.courses | where_exp: "course", "course.semester contains '2024'" %}
{% if current_courses.size > 0 %}
<div class="columns is-multiline">
  {% for course in current_courses %}
  <div class="column is-6">
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-5">{{ course.code }}: {{ course.title }}</p>
            <p class="subtitle is-6">{{ course.semester }} • {{ course.level }}</p>
          </div>
        </div>
        <div class="content">
          {{ course.description }}
          {% if course.syllabus %}
          <br><a href="{{ course.syllabus }}" class="button is-small is-outlined">View Syllabus</a>
          {% endif %}
        </div>
      </div>
    </div>
  </div>
  {% endfor %}
</div>
{% else %}
<div class="notification is-info">
  <p>Course information is being updated. Please check back soon or contact me for current course details.</p>
</div>
{% endif %}

---

## Research Opportunities for Students

### 🎓 Thesis Topics Available

- **Medical Robotics Simulation** - Real-time simulation for surgical training
- **Soft Robot Control** - Bio-inspired control algorithms for continuum robots
- **Human-Robot Interaction** - Intuitive interfaces for medical robotic systems
- **Computer Vision for Robotics** - Visual perception for surgical navigation
- **Machine Learning in Healthcare** - AI applications in medical robotics

### 💼 Internship & Project Opportunities

- Collaborate on funded research projects
- Work with industry partners
- Participate in international collaborations
- Present at conferences and workshops

---

## Teaching Recognition

- **Excellence in Teaching Award** - University Recognition (Year)
- **Student Choice Award** - Voted by students (Year)
- **Innovation in Education** - Departmental Recognition (Year)

---

## For Prospective Students

### 🔍 What I Look For

- **Curiosity and passion** for robotics and computer science
- **Strong mathematical foundation** and programming skills
- **Collaborative spirit** and communication skills
- **Interest in interdisciplinary work**

### 📝 How to Apply

1. **Review my research areas** and current projects
2. **Check available positions** on the supervision page
3. **Prepare a thoughtful application** including:
   - CV/Resume
   - Statement of interest
   - Relevant coursework or experience
4. **Contact me directly** with your application

---

## Resources for Students

- **Programming Tutorials** - Getting started with robotics programming
- **Research Methodology** - Guide to conducting research in computer science
- **Writing Resources** - Tips for technical writing and presentations
- **Career Guidance** - Advice for academic and industry careers

*Visit the [Resources section](/resources/) for detailed guides and materials.*

---

**Interested in joining our research group or taking one of my courses?**  
[Contact me](/contact/) to discuss opportunities and learn more about our programs.

