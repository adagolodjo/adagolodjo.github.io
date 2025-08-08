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
    {% include project-card.html 
      title=project.title 
      subtitle=project.subtitle 
      url=project.url 
      image=project.image 
      excerpt=excerpt %}
  {% endif %}
{% endfor %}
</div>