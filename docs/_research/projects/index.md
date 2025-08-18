---
layout: page
title: Research Projects
permalink: /research/projects/
---

# Current Research Projects

{% assign more_sep = '<' | append: '!--more-->' | append: '>' %}

<div class="projects-grid">
{% for project in site.projects %}
  {% if project.path contains "index.md" %}
    {% capture excerpt %}
      {% if project.content contains more_sep %}
        {{ project.content | split: more_sep | first | strip_html | truncatewords: 30 }}
      {% else %}
        {{ project.content | strip_html | truncatewords: 30 }}
      {% endif %}
    {% endcapture %}
    <div class="project-card" tabindex="0">
      <div class="project-image">
        {% if project.image %}
          <img src="{{ project.image | relative_url }}" alt="{{ project.title }}" loading="lazy" width="400" height="300">
        {% endif %}
      </div>
      <div class="project-card-content">
        <h2 class="project-title"><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h2>
        {% if project.subtitle %}<h3 class="project-subtitle">{{ project.subtitle }}</h3>{% endif %}
        {% if excerpt %}<p>{{ excerpt }}</p>{% endif %}
        <p><a href="{{ project.url | relative_url }}" class="button is-primary">Learn More</a></p>
      </div>
    </div>
  {% endif %}
{% endfor %}
</div>
