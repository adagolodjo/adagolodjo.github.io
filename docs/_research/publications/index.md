---
layout: page
title: Publications
subtitle: Academic Publications and Research Output
permalink: /research/publications/
---

## Journal Articles

{% assign journal_papers = site.data.publications | where: "type", "journal" | sort: "year" | reverse %}
{% for paper in journal_papers %}
### {{ paper.title }}
**Authors:** {{ paper.authors }}  
*{{ paper.journal }}* ({{ paper.year }}){% if paper.volume %}, {{ paper.volume }}{% endif %}{% if paper.issue %}({{ paper.issue }}){% endif %}{% if paper.pages %}: {{ paper.pages }}{% endif %}  
{% if paper.doi %}[DOI: {{ paper.doi }}](https://doi.org/{{ paper.doi }}){% endif %}
{% endfor %}

## Conference Presentations

{% assign conference_papers = site.data.publications | where: "type", "conference" | sort: "year" | reverse %}
{% for paper in conference_papers %}
### {{ paper.title }}
**Authors:** {{ paper.authors }}  
*{{ paper.conference }}* ({{ paper.year }}){% if paper.location %}, {{ paper.location }}{% endif %}  
{% if paper.doi %}[DOI: {{ paper.doi }}](https://doi.org/{{ paper.doi }}){% endif %}
{% endfor %}

## Preprints and Technical Reports

{% assign preprints = site.data.publications | where: "type", "preprint" | sort: "year" | reverse %}
{% for paper in preprints %}
### {{ paper.title }}
**Authors:** {{ paper.authors }}  
*{{ paper.repository }}* ({{ paper.year }})  
{% if paper.url %}[Available here]({{ paper.url }}){% endif %}
{% endfor %}

