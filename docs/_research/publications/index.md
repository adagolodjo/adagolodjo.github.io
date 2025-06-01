---
layout: page
title: Publications
permalink: /research/publications/
subtitle: Journal Articles, Conference Papers, and Book Chapters
---

## Journal Articles

{% for publication in site.data.publications %}
{% if publication.journal %}
<div class="publication">
  <h3>{{ publication.title }}</h3>
  <p class="authors">{{ publication.authors }}</p>
  <p class="venue"><em>{{ publication.journal }}</em>, {{ publication.year }}, Vol. {{ publication.volume }}, Issue {{ publication.issue }}, Pages {{ publication.pages }}</p>
  <p class="doi">DOI: <a href="https://doi.org/{{ publication.doi }}" target="_blank">{{ publication.doi }}</a></p>
  <p class="abstract"><strong>Abstract:</strong> {{ publication.abstract }}</p>
  <div class="tags">
    {% for tag in publication.tags %}
    <span class="tag">{{ tag }}</span>
    {% endfor %}
  </div>
  {% if publication.pdf %}
  <p class="pdf"><a href="{{ publication.pdf }}" target="_blank">[PDF]</a></p>
  {% endif %}
</div>
{% endif %}
{% endfor %}

## Conference Proceedings

{% for publication in site.data.publications %}
{% if publication.conference %}
<div class="publication">
  <h3>{{ publication.title }}</h3>
  <p class="authors">{{ publication.authors }}</p>
  <p class="venue"><em>{{ publication.conference }}</em>, {{ publication.year }}, Pages {{ publication.pages }}</p>
  <p class="doi">DOI: <a href="https://doi.org/{{ publication.doi }}" target="_blank">{{ publication.doi }}</a></p>
  <p class="abstract"><strong>Abstract:</strong> {{ publication.abstract }}</p>
  <div class="tags">
    {% for tag in publication.tags %}
    <span class="tag">{{ tag }}</span>
    {% endfor %}
  </div>
  {% if publication.pdf %}
  <p class="pdf"><a href="{{ publication.pdf }}" target="_blank">[PDF]</a></p>
  {% endif %}
</div>
{% endif %}
{% endfor %}

## Book Chapters

{% for publication in site.data.publications %}
{% if publication.book %}
<div class="publication">
  <h3>{{ publication.title }}</h3>
  <p class="authors">{{ publication.authors }}</p>
  <p class="venue">In <em>{{ publication.book }}</em>, {{ publication.editors }} (Eds.), {{ publication.publisher }}, {{ publication.year }}, Pages {{ publication.pages }}</p>
  <p class="doi">DOI: <a href="https://doi.org/{{ publication.doi }}" target="_blank">{{ publication.doi }}</a></p>
  <p class="abstract"><strong>Abstract:</strong> {{ publication.abstract }}</p>
  <div class="tags">
    {% for tag in publication.tags %}
    <span class="tag">{{ tag }}</span>
    {% endfor %}
  </div>
  {% if publication.pdf %}
  <p class="pdf"><a href="{{ publication.pdf }}" target="_blank">[PDF]</a></p>
  {% endif %}
</div>
{% endif %}
{% endfor %}

