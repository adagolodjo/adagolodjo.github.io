---
layout: page
title: Research
subtitle: Projects & Publications
permalink: /research/
description: "Explore Dr. Yinoussa Adagolodjo's research projects, publications, and contributions to robotics and healthcare technology."
---

<style>
.projects-section {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: #fafbfc;
  padding: 2rem 0;
}
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 2vw;
}
.project-card {
  display: flex;
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  padding: 2rem;
  align-items: center;
  gap: 2rem;
  border: 1.5px solid #ececec;
  transition: box-shadow 0.2s;
}
.project-card:hover {
  box-shadow: 0 8px 32px rgba(0,0,0,0.10);
}
.project-image img, .project-image video {
  width: 180px;
  height: 135px;
  object-fit: cover;
  border-radius: 16px;
  background: #f5f5f5;
}
.project-content {
  flex: 1;
}
.project-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
  color: #222;
}
.project-description {
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 1.2rem;
}
.project-tags {
  display: flex;
  gap: 1rem;
}
.tag {
  background: #fafbfc;
  border: 1.5px solid #dbe2ea;
  color: #444;
  border-radius: 12px;
  padding: 0.4em 1.2em;
  font-size: 1em;
  font-weight: 500;
}
.pub-tags {
  display: flex;
  gap: 1rem;
  margin-top: 0.7rem;
  flex-wrap: wrap;
}
.pub-tag {
  background: linear-gradient(135deg, #a3d8e6 0%, #7ba6c9 100%);
  color: #222;
  border-radius: 12px;
  padding: 0.6em 1.4em;
  font-size: 1.08em;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(50, 115, 220, 0.08);
  border: none;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
  display: inline-block;
}
.pub-tag:hover {
  background: linear-gradient(135deg, #7ba6c9 0%, #a3d8e6 100%);
  color: #0a2540;
}
@media (max-width: 900px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  .project-card {
    flex-direction: column;
    text-align: center;
    padding: 1.2rem;
  }
  .project-image img, .project-image video {
    width: 100%;
    height: 180px;
  }
}
</style>

## Research Projects

My research focuses on bridging the gap between advanced robotics technology and practical healthcare applications. Here are the key projects I'm currently working on:

<section class="projects-section">
<div class="projects-grid">
  <!-- CONECT Project -->
  <div class="project-card">
    <div class="project-image">
      <img src="/assets/images/projects/conect.jpg" alt="CONECT Project" style="width:100%;height:100%;object-fit:cover;border-radius:10px;aspect-ratio:4/3;">
    </div>
    <div class="project-content">
      <h2 class="project-title">CONECT Project</h2>
      <p class="project-description">My doctoral thesis project focused on integrating robotic technology in operating rooms for enhanced precision in needle insertion procedures. This work involves developing finite element simulations and augmented reality guidance systems for surgical assistance.</p>
      <div class="project-tags">
        <span class="tag">Medical Robotics</span>
        <span class="tag">Augmented Reality</span>
        <span class="tag">Surgical Assistance</span>
      </div>
      <div class="pub-tags">
        {% assign project_pubs = site.data.publications | where: "project", "conect" %}
        {% for paper in project_pubs %}
          <a href="https://doi.org/{{ paper.doi | strip }}" class="pub-tag" target="_blank" rel="noopener">{% if paper.journal contains "Robotics and Automation Letters" %}LRA{% elsif paper.journal contains "Medical Robotics and Bionics" %}TMRB{% elsif paper.journal contains "Health Technology and Informatics" %}SHTI{% else %}{{ paper.journal | split: ' ' | first }}{% endif %} {{ paper.year }}</a>
        {% endfor %}
      </div>
      <div style="margin-top:1rem;">
        <a href="/research/projects/conect/" class="button is-primary is-small" style="border-radius: 6px; font-weight: 500;">Learn More</a>
      </div>
    </div>
  </div>
  <!-- ROBOCOP Project -->
  <div class="project-card">
    <div class="project-image" style="aspect-ratio: 4/3; width: 200px; height: 150px; position: relative;">
      <video src="/assets/images/forceView.mp4" autoplay loop muted playsinline style="width:100%;height:100%;object-fit:cover;border-radius:10px; aspect-ratio: 4/3;"></video>
    </div>
    <div class="project-content">
      <h2 class="project-title">ROBOCOP Project</h2>
      <p class="project-description">Working on cochlear implant robotization, exploring innovative approaches to improve hearing technologies through advanced robotic assistance and precision surgical procedures.</p>
      <div class="project-tags">
        <span class="tag">Hearing Technology</span>
        <span class="tag">Surgical Robotics</span>
        <span class="tag">Medical Devices</span>
      </div>
      <div class="pub-tags">
        {% assign project_pubs = site.data.publications | where: "project", "robocop" %}
        {% for paper in project_pubs %}
          <a href="https://doi.org/{{ paper.doi | strip }}" class="pub-tag" target="_blank" rel="noopener">{% if paper.journal contains "Robotics and Automation Letters" %}LRA{% elsif paper.journal contains "Medical Robotics and Bionics" %}TMRB{% elsif paper.journal contains "Health Technology and Informatics" %}SHTI{% else %}{{ paper.journal | split: ' ' | first }}{% endif %} {{ paper.year }}</a>
        {% endfor %}
      </div>
      <div style="margin-top:1rem;">
        <a href="/research/projects/robocop/" class="button is-primary is-small" style="border-radius: 6px; font-weight: 500;">Learn More</a>
      </div>
    </div>
  </div>
  <!-- COSSEROOTS Project -->
  <div class="project-card">
    <div class="project-image">
      <img src="/assets/images/projects/cosseroots.jpg" alt="COSSEROOTS Project" style="width:100%;height:100%;object-fit:cover;border-radius:10px;aspect-ratio:4/3;">
    </div>
    <div class="project-content">
      <h2 class="project-title">COSSEROOTS Project</h2>
      <p class="project-description">Applying Cosserat's theory to advance the control of slender deformation robots. This innovative approach combines theoretical physics with practical robotics applications in medical and industrial settings.</p>
      <div class="project-tags">
        <span class="tag">Soft Robotics</span>
        <span class="tag">Control Theory</span>
        <span class="tag">Mathematical Modeling</span>
      </div>
      <div class="pub-tags">
        {% assign project_pubs = site.data.publications | where: "project", "cosseroots" %}
        {% for paper in project_pubs %}
          <a href="https://doi.org/{{ paper.doi | strip }}" class="pub-tag" target="_blank" rel="noopener">{% if paper.journal contains "Robotics and Automation Letters" %}LRA{% elsif paper.journal contains "Medical Robotics and Bionics" %}TMRB{% elsif paper.journal contains "Health Technology and Informatics" %}SHTI{% else %}{{ paper.journal | split: ' ' | first }}{% endif %} {{ paper.year }}</a>
        {% endfor %}
      </div>
      <div style="margin-top:1rem;">
        <a href="/research/projects/cosseroots/" class="button is-primary is-small" style="border-radius: 6px; font-weight: 500;">Learn More</a>
      </div>
    </div>
  </div>
  <!-- ADAGIO Project -->
  <div class="project-card">
    <div class="project-image">
      <img src="/assets/images/projects/bladder_2.jpg" alt="ADAGIO Project" style="width:100%;height:100%;object-fit:cover;border-radius:10px;aspect-ratio:4/3;">
    </div>
    <div class="project-content">
      <h2 class="project-title">ADAGIO Project</h2>
      <p class="project-description">The ADAGIO project focuses on developing adaptive digital tools and AI-driven assistance for complex medical interventions and operations. (Description à personnaliser)</p>
      <div class="project-tags">
        <span class="tag">Digital Health</span>
        <span class="tag">AI Assistance</span>
        <span class="tag">Medical Interventions</span>
      </div>
      <div style="margin-top:1rem;">
        <a href="/research/projects/adagio/" class="button is-primary is-small" style="border-radius: 6px; font-weight: 500;">Learn More</a>
      </div>
    </div>
  </div>
  <!-- IRE Project -->
  <div class="project-card">
    <div class="project-image">
      <img src="/assets/images/projects/colon.jpg" alt="IRE Project" style="width:100%;height:100%;object-fit:cover;border-radius:10px;aspect-ratio:4/3;">
    </div>
    <div class="project-content">
      <h2 class="project-title">IRE Project</h2>
      <p class="project-description">The IRE project develops AI-powered soft robotic endoscopes and digital twins for safer, more effective minimally invasive procedures. (Description à personnaliser)</p>
      <div class="project-tags">
        <span class="tag">Robotic Endoscopy</span>
        <span class="tag">AI & Simulation</span>
        <span class="tag">Healthcare Innovation</span>
      </div>
      <div style="margin-top:1rem;">
        <a href="/research/projects/ire/" class="button is-primary is-small" style="border-radius: 6px; font-weight: 500; margin-bottom:0.5rem;">Learn More</a>
        <a href="https://ire4health.eu/research/" class="button is-link is-small" target="_blank" rel="noopener">Official Website &#8599;</a>
      </div>
    </div>
  </div>
  <!-- Prostate Biopsy Project -->
  <div class="project-card">
    <div class="project-image">
      <img src="/assets/images/projects/image_foie.jpg" alt="Prostate Biopsy Project" style="width:100%;height:100%;object-fit:cover;border-radius:10px;aspect-ratio:4/3;">
    </div>
    <div class="project-content">
      <h2 class="project-title">Prostate Biopsy Project</h2>
      <p class="project-description">This project aims to improve the diagnosis of prostate cancer by combining AI-based image analysis and robotic assistance for targeted biopsies. The goal is to increase precision, reduce unnecessary interventions, and personalize patient care. (Description à personnaliser)</p>
      <div class="project-tags">
        <span class="tag">Medical Imaging</span>
        <span class="tag">AI Diagnosis</span>
        <span class="tag">Robotic Biopsy</span>
      </div>
      <div style="margin-top:1rem;">
        <a href="https://www.inria.fr/fr/cancer-prostate-diagnostic-ia-robotique" class="button is-link is-small" target="_blank" rel="noopener">Reference Article &#8599;</a>
      </div>
    </div>
  </div>
</div>
</section>

---

<style>
  .publication-container {
    max-width: 1200px;
    margin: 2rem auto;
    padding: 0 1rem;
  }
  .filters {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 2rem;
    align-items: center;
    flex-wrap: wrap;
  }
  .filters input, .filters select {
    padding: 0.6em 1em;
    border-radius: 8px;
    border: 1.5px solid #dbe2ea;
  }
  .publication-item {
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    border-radius: 12px;
    border: 1.5px solid #ececec;
    background: #fff;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  }
</style>

<div class="publication-container">
  <h2 class="title is-3" style="text-align:center; margin-bottom: 2rem;">Publications</h2>

  <div class="filters">
    <input type="text" id="filter-author" placeholder="Filter by author...">
    <input type="text" id="filter-keyword" placeholder="Filter by keyword...">
    <select id="filter-year">
      <option value="">Filter by Year</option>
    </select>
    <select id="filter-type">
      <option value="">Filter by Type</option>
      <option value="journal">Journal</option>
      <option value="conference">Conference</option>
      <option value="workshop">Workshop</option>
    </select>
  </div>

  <div id="publications-list">
    <!-- Publications will be loaded here by JavaScript -->
  </div>
</div>

<script src="/assets/js/hal-publications.js"></script>
<script>
  document.addEventListener("DOMContentLoaded", function() {
    const fetcher = new HALPublicationsFetcher({
      halId: 'yinoussa-adagolodjo',
      containerId: 'publications-list',
      filterYearId: 'filter-year',
      filterAuthorId: 'filter-author',
      filterKeywordId: 'filter-keyword',
      filterTypeId: 'filter-type'
    });
    fetcher.fetchPublications();
  });
  </script>