---
layout: page
title: News & Updates
subtitle: Latest News and Announcements
permalink: /news/
---

## Latest News

{% for post in site.posts limit:5 %}
### [{{ post.title }}]({{ post.url }})
*{{ post.date | date: "%B %d, %Y" }}*

{{ post.excerpt }}

[Read more]({{ post.url }})

---
{% endfor %}

[View all news posts](/news/archive/)

