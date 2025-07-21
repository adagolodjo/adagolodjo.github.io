---
layout: page
title: Research Projects
permalink: /research/projects/
---

# Current Research Projects

<div class="projects-grid">
{% for project in site.projects %}
  {% if project.path contains "index.md" %}
    <div class="project-card">
      {% if project.image %}
        <img src="{{ project.image | relative_url }}" alt="{{ project.title }}">
      {% endif %}
      <div class="project-card-content">
        <h2><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h2>
        {% if project.subtitle %}
          <h3>{{ project.subtitle }}</h3>
        {% endif %}
        {% if project.content contains '<!--more-->' %}
          <p>{{ project.content | split:'<!--more-->' | first | strip_html | truncatewords: 30 }}</p>
        {% else %}
          <p>{{ project.content | strip_html | truncatewords: 30 }}</p>
        {% endif %}
      </div>
      <p><a href="{{ project.url | relative_url }}" class="button is-primary">Learn More</a></p>
    </div>
  {% endif %}
{% endfor %}
</div> 