---
layout: page
title: News
permalink: /news/
subtitle: Announcements, Updates, and Media Coverage
---

## Latest News

{% for post in site.news limit:10 %}
<div class="news-item">
  <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
  <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
  <p>{{ post.excerpt }}</p>
  <p><a href="{{ post.url }}">Read more →</a></p>
</div>
{% endfor %}

## Archives

{% assign newsByYear = site.news | group_by_exp: "post", "post.date | date: '%Y'" %}
{% for year in newsByYear %}
<h3>{{ year.name }}</h3>
<ul>
  {% for post in year.items %}
  <li><a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%B %d" }}</li>
  {% endfor %}
</ul>
{% endfor %}

## Press Coverage

### 2024
- **Publication Name**: "Article Title", Date
- **Publication Name**: "Article Title", Date

### 2023
- **Publication Name**: "Article Title", Date
- **Publication Name**: "Article Title", Date

## Media Resources

For media inquiries, please [contact me directly](/contact/). You can find high-resolution photos and biographical information on the [media resources page](/news/media-resources/).

