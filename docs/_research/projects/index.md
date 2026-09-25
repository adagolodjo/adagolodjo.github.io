---
layout: page
title: Research Projects
permalink: /research/projects/
---

# Current Research Projects

{% assign more_sep = '<' | append: '!--more-->' | append: '>' %}

<div class="projects-filter-tabs" role="tablist" aria-label="Filter projects by status">
  <button class="projects-filter-tab active" data-filter="all">Tous</button>
  <button class="projects-filter-tab" data-filter="active">Actifs</button>
  <button class="projects-filter-tab" data-filter="completed">Terminés</button>
</div>

<div class="projects-grid" id="projects-grid">
{% for project in site.projects %}
  {% if project.path contains "index.md" %}
    {% capture excerpt %}
      {% if project.content contains more_sep %}
        {{ project.content | split: more_sep | first | strip_html | truncatewords: 30 }}
      {% else %}
        {{ project.content | strip_html | truncatewords: 30 }}
      {% endif %}
    {% endcapture %}
    <div class="project-card" tabindex="0" data-status="{{ project.status | default: 'active' }}">
      <div class="project-image">
        {% if project.image %}
          <img src="{{ project.image | relative_url }}" alt="{{ project.title }}" loading="lazy" width="400" height="300">
        {% endif %}
        {% if project.status %}
          <span class="project-status-badge {{ project.status }}">{{ project.status | capitalize }}</span>
        {% endif %}
      </div>
      <div class="project-header">
        <h2 class="project-title"><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h2>
        {% if project.subtitle %}<h3 class="project-subtitle">{{ project.subtitle }}</h3>{% endif %}
      </div>
      <div class="project-card-content">
        {% if excerpt %}<p>{{ excerpt }}</p>{% endif %}
      </div>
      {% if project.keywords %}
      <div class="project-tags">
        {% for kw in project.keywords limit: 3 %}<span class="tag">{{ kw }}</span>{% endfor %}
      </div>
      {% endif %}
      <div class="project-footer">
        <a href="{{ project.url | relative_url }}" class="button is-primary">Learn More →</a>
        {% if project.start_date %}<span class="project-year">Since {{ project.start_date | date: "%Y" }}</span>{% endif %}
      </div>
    </div>
  {% endif %}
{% endfor %}
</div>

<script>
document.addEventListener('DOMContentLoaded', function () {
  var tabs = document.querySelectorAll('.projects-filter-tab');
  var cards = document.querySelectorAll('#projects-grid .project-card');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');
      var filter = tab.getAttribute('data-filter');
      cards.forEach(function (card) {
        var match = filter === 'all' || card.getAttribute('data-status') === filter;
        card.hidden = !match;
      });
    });
  });
});
</script>
