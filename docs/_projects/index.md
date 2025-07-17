---
layout: page
title: Research Projects
subtitle: Current and Past Research Initiatives
permalink: /research/projects/
description: "Explore Dr. Yinoussa Adagolodjo's research projects in robotics, augmented reality, and healthcare technology."
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

## Current Research Projects

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

## Project Directory

<div style="max-width:1200px; margin:0 auto;">
  <div class="columns is-multiline">
    <div class="column is-6-tablet is-4-desktop">
      <ul style="margin-left:1rem;">
        <li><a href="/research/projects/conect/">CONECT Project</a></li>
        <li><a href="/research/projects/robocop/">ROBOCOP Project</a></li>
        <li><a href="/research/projects/cosseroots/">COSSEROOTS Project</a></li>
      </ul>
    </div>
    <div class="column is-6-tablet is-4-desktop">
      <ul style="margin-left:1rem;">
        <li><a href="/research/projects/adagio/">ADAGIO Project</a></li>
        <li><a href="/research/projects/ire/">IRE Project (Intelligent Robotic Endoscopes)</a></li>
        <li><a href="https://ire4health.eu/research/" target="_blank" rel="noopener">IRE Project (Official Website) <span style='font-size:0.9em;'>&#8599;</span></a></li>
      </ul>
    </div>
  </div>
</div>

## Research Focus Areas

<div style="max-width:1200px; margin:0 auto;">
  <div class="columns is-multiline">
    <div class="column is-4-tablet is-4-desktop">
      <div style="margin:0 1rem;">
        <h3><strong>Medical Robotics</strong></h3>
        <ul>
          <li>Surgical assistance systems</li>
          <li>Robotic guidance for minimally invasive procedures</li>
          <li>Haptic feedback and force control</li>
          <li>Real-time surgical planning</li>
        </ul>

        <h3><strong>Augmented Reality in Healthcare</strong></h3>
        <ul>
          <li>3D visualization for surgical guidance</li>
          <li>Real-time overlay of medical imaging</li>
          <li>Interactive surgical planning interfaces</li>
          <li>Training and education applications</li>
        </ul>
      </div>
    </div>
    
    <div class="column is-4-tablet is-4-desktop">
      <div style="margin:0 1rem;">
        <h3><strong>Soft Robotics</strong></h3>
        <ul>
          <li>Deformable object simulation</li>
          <li>Cosserat theory applications</li>
          <li>Control strategies for soft robots</li>
          <li>Medical applications of soft robotics</li>
        </ul>

        <h3><strong>Real-time Simulation</strong></h3>
        <ul>
          <li>Finite element modeling</li>
          <li>GPU-accelerated computation</li>
          <li>Interactive deformation simulation</li>
          <li>Surgical workflow optimization</li>
        </ul>
      </div>
    </div>
  </div>
</div>

## Research Impact

<div style="max-width:1200px; margin:0 auto;">
  <div class="columns is-multiline">
    <div class="column is-4-tablet is-4-desktop">
      <div style="margin:0 1rem;">
        <h3><strong>Publications</strong></h3>
        <p>My research has been published in leading journals and conferences in robotics and medical technology, with over 20 peer-reviewed publications contributing to the advancement of medical robotics and augmented reality applications.</p>
      </div>
    </div>
    
    <div class="column is-4-tablet is-4-desktop">
      <div style="margin:0 1rem;">
        <h3><strong>Clinical Applications</strong></h3>
        <p>The technologies developed in these projects have direct applications in:</p>
        <ul>
          <li>Minimally invasive surgery</li>
          <li>Surgical training and education</li>
          <li>Medical device development</li>
          <li>Healthcare workflow optimization</li>
        </ul>
      </div>
    </div>
    
    <div class="column is-4-tablet is-4-desktop">
      <div style="margin:0 1rem;">
        <h3><strong>Industry Collaboration</strong></h3>
        <p>I actively collaborate with industry partners to:</p>
        <ul>
          <li>Transfer technology from research to commercial applications</li>
          <li>Develop new medical devices and systems</li>
          <li>Create training and educational platforms</li>
          <li>Establish standards for medical robotics</li>
        </ul>
      </div>
    </div>
  </div>
</div>

## Get Involved

<div style="max-width:1200px; margin:0 auto;">
  <div class="columns is-multiline">
    <div class="column is-4-tablet is-4-desktop">
      <div style="margin:0 1rem;">
        <h3><strong>For Students</strong></h3>
        <p>I welcome inquiries from students interested in:</p>
        <ul>
          <li><strong>PhD Positions</strong>: Advanced research in robotics and medical applications</li>
          <li><strong>Master's Projects</strong>: Thesis projects in various research areas</li>
          <li><strong>Research Internships</strong>: Hands-on experience in cutting-edge research</li>
          <li><strong>Undergraduate Research</strong>: Introduction to robotics and healthcare technology</li>
        </ul>
      </div>
    </div>
    
    <div class="column is-4-tablet is-4-desktop">
      <div style="margin:0 1rem;">
        <h3><strong>For Researchers</strong></h3>
        <p>I'm open to research collaborations in:</p>
        <ul>
          <li>Joint research projects</li>
          <li>Conference organization</li>
          <li>Publication collaboration</li>
          <li>Technology development</li>
        </ul>
      </div>
    </div>
    
    <div class="column is-4-tablet is-4-desktop">
      <div style="margin:0 1rem;">
        <h3><strong>For Industry Partners</strong></h3>
        <p>I offer opportunities for:</p>
        <ul>
          <li>Technology transfer and licensing</li>
          <li>Joint product development</li>
          <li>Expert consultation services</li>
          <li>Research partnerships</li>
        </ul>
      </div>
    </div>
  </div>
</div>

## Current Openings

<div style="max-width:1000px; margin:0 auto; padding:0 1rem;">
  <div class="notification is-info">
    <h3><strong>PhD Position Available</strong></h3>
    <p>We are currently recruiting a PhD student for the COSSEROOTS project focusing on advanced control strategies for soft robots and real-time simulation of deformable objects.</p>
    
    <p><strong>Requirements:</strong></p>
    <ul>
      <li>Master's degree in Computer Science, Robotics, or related field</li>
      <li>Strong programming skills (C++, Python, MATLAB)</li>
      <li>Experience with robotics or simulation software</li>
      <li>Interest in medical applications</li>
    </ul>
    
    <p><a href="/contact/" class="button is-primary">Contact me</a> to discuss potential opportunities and learn more about these research projects.</p>
  </div>
</div>