---
layout: page
title: Curriculum Vitae
permalink: /cv/
subtitle: Academic and Professional Background
---

A full PDF version of my CV is available for download [here](/assets/files/cv.pdf).

## Education

- **Ph.D. in Computer Science**, University Name, Year
  - Dissertation: "Title of Dissertation"
  - Advisor: Prof. Name
- **M.S. in Computer Science**, University Name, Year
- **B.S. in Computer Science**, University Name, Year

## Academic Positions

- **Assistant Professor**, Department of Computer Science, University Name (Current)
- **Postdoctoral Researcher**, Department of Computer Science, University Name (Years)
- **Research Assistant**, Department of Computer Science, University Name (Years)

## Publications

### Journal Articles

{% for publication in site.data.publications %}
{% if publication.journal %}
- {{ publication.authors }} ({{ publication.year }}). "{{ publication.title }}." *{{ publication.journal }}*, {{ publication.volume }}({{ publication.issue }}), {{ publication.pages }}. DOI: {{ publication.doi }}
{% endif %}
{% endfor %}

### Conference Proceedings

{% for publication in site.data.publications %}
{% if publication.conference %}
- {{ publication.authors }} ({{ publication.year }}). "{{ publication.title }}." In *{{ publication.conference }}*, {{ publication.pages }}. DOI: {{ publication.doi }}
{% endif %}
{% endfor %}

## Teaching Experience

{% for course in site.data.courses %}
- {{ course.semester }}: {{ course.code }} - {{ course.title }} ({{ course.level }})
{% endfor %}

## Grants and Funding

- **Project Title**, Funding Agency, Amount, Years
- **Project Title**, Funding Agency, Amount, Years

## Professional Activities

### Editorial Boards
- Journal Name, Role, Years

### Conference Organization
- Conference Name, Role, Year

### Program Committees
- Conference Name, Year
- Conference Name, Year

## Skills

- **Programming Languages**: C++, Python, MATLAB
- **Frameworks & Libraries**: TensorFlow, PyTorch, OpenGL
- **Tools**: Git, LaTeX, Unity3D, SOFA Framework

