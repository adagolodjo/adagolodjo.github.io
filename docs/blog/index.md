---
layout: page
title: Blog
permalink: /blog/
subtitle: Thoughts on Research, Teaching, and Technology
---

## Recent Posts

{% for post in site.blog limit:5 %}
<div class="post-preview">
  <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
  <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
  <p>{{ post.excerpt }}</p>
  <p><a href="{{ post.url }}">Read more →</a></p>
</div>
{% endfor %}

## Categories

<div class="tags">
  {% for category in site.categories %}
  <a href="/blog/categories/{{ category[0] | slugify }}/" class="tag">{{ category[0] }}</a>
  {% endfor %}
</div>

## Archives

{% assign postsByYear = site.blog | group_by_exp: "post", "post.date | date: '%Y'" %}
{% for year in postsByYear %}
<h3>{{ year.name }}</h3>
<ul>
  {% for post in year.items %}
  <li><a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%B %d" }}</li>
  {% endfor %}
</ul>
{% endfor %}

