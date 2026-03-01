---
layout: page
title: ROBOCOP Project
subtitle: Robotic Co-Manipulation for Prostate Biopsy
permalink: /research/projects/robocop/
image: /assets/images/projects/robocop.jpg
description: "The ROBOCOP project aims to develop a new generation of robotic assistants for prostate biopsy, enhancing accuracy while maintaining surgeon autonomy through shared control."
start_date: 2017-01-01
status: completed
keywords: ["Robotic Biopsy", "Co-Manipulation", "Prostate Cancer", "Shared Control", "Interventional Radiology"]
---

<div class="project-hero-section">
  <div class="project-hero-glow"></div>
  <div class="project-hero-grid">
    <div class="hero-left">
      <div class="project-badges">
        <span class="badge-glass"><i class="fas fa-check" style="font-size: 0.6rem; margin-right: 6px; position: relative; top: -2px;"></i> Completed</span>
        <span class="badge-glass">2017-2021</span>
      </div>
      <h1 class="project-title-hero">{{ page.title }}</h1>
      <p class="project-subtitle-hero">{{ page.description }}</p>
      
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 1rem;">
        {% for tag in page.keywords limit:3 %}
          <span style="background: rgba(255,255,255,0.1); padding: 4px 12px; border-radius: 4px; font-size: 0.8rem; color: #a5b4fc;">#{{ tag }}</span>
        {% endfor %}
      </div>
    </div>
    
    <div class="hero-right">
      <div class="project-hero-image-wrapper">
        <img src="{{ page.image }}" alt="{{ page.title }}">
      </div>
    </div>
  </div>
</div>

## Project Overview

The ROBOCOP project successfully developed a new generation of robotic assistants for prostate biopsy. The system uses a co-manipulation approach where the robot and the surgeon share control of the ultrasound probe, combining human expertise with robotic precision.

<div class="features-grid">
  <div class="feature-glass-card">
    <i class="fas fa-handshake feature-icon"></i>
    <h3>Co-Manipulation</h3>
    <p>Surgeon and robot share control of the ultrasound probe, maintaining physician autonomy while enhancing stability.</p>
  </div>
  <div class="feature-glass-card">
    <i class="fas fa-bullseye feature-icon"></i>
    <h3>Needle Guidance</h3>
    <p>Precise targeting mechanism for the biopsy needle ensures accurate sampling of suspected tumors.</p>
  </div>
  <div class="feature-glass-card">
    <i class="fas fa-layer-group feature-icon"></i>
    <h3>Image Fusion</h3>
    <p>Real-time elastic registration fuses pre-operative MRI with intra-operative ultrasound.</p>
  </div>
</div>

## Clinical Impact

- 🎯 **Targeting Accuracy**: improved from 10mm to 3mm
- 🧠 **Cognitive Load**: Significant reduction compared to cognitive fusion
- ⏳ **Procedure Time**: Maintained standard duration
- 👨‍⚕️ **Integration**: Seamless alignment with clinical workflow

## Technical Innovations

### Robotic Control Systems
- **Precision Manipulation**: Advanced control algorithms for delicate surgical procedures
- **Force Feedback**: Real-time haptic feedback for surgeon guidance
- **Path Planning**: Automated trajectory planning for optimal implant placement
- **Safety Protocols**: Multiple safety layers to ensure patient protection

### Surgical Assistance
- **Real-time Imaging**: Integration of medical imaging for surgical guidance
- **3D Visualization**: Advanced visualization systems for surgical planning
- **Instrument Tracking**: Real-time tracking of surgical instruments
- **Collision Avoidance**: Intelligent systems to prevent tissue damage

### Clinical Integration
- **Workflow Optimization**: Streamlined surgical procedures
- **Training Systems**: Virtual reality training for surgeons
- **Quality Assurance**: Automated quality checks during procedures
- **Data Collection**: Comprehensive data gathering for research and improvement

## Clinical Applications

### Primary Applications
- **Cochlear Implant Surgery**: Primary focus on hearing restoration
- **Otologic Procedures**: Various ear-related surgical interventions
- **Minimally Invasive Surgery**: Reduced trauma and faster recovery
- **Pediatric Cases**: Specialized approaches for children

### Future Applications
- **Other Implant Procedures**: Expanding to other types of implants
- **General Otolaryngology**: Broader applications in ear, nose, and throat surgery
- **Training and Education**: Medical education and surgical training
- **Research Platform**: Foundation for future medical robotics research

## Research Team

### Principal Investigator
- **Dr. Yinoussa Adagolodjo** - Assistant Professor, University of Lille

### Research Team
- **PhD Students**: Currently recruiting for advanced research positions
- **Research Engineers**: Specialized in robotics and medical applications
- **Clinical Partners**: Collaboration with medical professionals
- **Industry Partners**: Technology transfer and commercialization

### Collaborations
- **University of Lille**: Academic research and development
- **Medical Centers**: Clinical validation and testing
- **Industry Partners**: Technology development and commercialization
- **International Partners**: Global research network

## Publications

### Key Papers
{% for paper in site.data.publications %}
{% if paper.project == "robocop" %}
- {{ paper.authors }} ({{ paper.year }}). "{{ paper.title }}." *{{ paper.journal }}*.
{% endif %}
{% endfor %}

### Conference Presentations
- **2023**: IEEE International Conference on Medical Robotics
- **2022**: International Conference on Medical Image Computing
- **2021**: European Robotics Forum

## Current Status

### Development Phase
- **Phase 1**: System design and initial prototyping (Completed)
- **Phase 2**: Laboratory testing and validation (In Progress)
- **Phase 3**: Clinical trials and evaluation (Planned)
- **Phase 4**: Commercialization and deployment (Future)

### Achievements
- **Prototype Development**: Functional robotic system prototype
- **Laboratory Validation**: Successful testing in controlled environments
- **Patent Applications**: Intellectual property protection
- **Research Publications**: Peer-reviewed publications in leading journals

## Future Directions

### Short-term Goals (1-2 years)
- Complete clinical validation studies
- Obtain regulatory approvals
- Establish clinical partnerships
- Publish comprehensive results

### Long-term Vision (3-5 years)
- Commercial deployment in medical centers
- International expansion and adoption
- Development of next-generation systems
- Training and education programs

## Funding and Support

### Current Funding
- **Research Grants**: Multiple research funding sources
- **Industry Partnerships**: Collaborative funding arrangements
- **Academic Support**: University resources and facilities

### Future Funding Opportunities
- **Government Grants**: National and international funding programs
- **Industry Investment**: Commercial partnership opportunities
- **Philanthropic Support**: Foundation and charitable organization funding

## Get Involved

### For Researchers
- **PhD Positions**: Currently recruiting PhD students
- **Postdoctoral Opportunities**: Research positions available
- **Collaboration**: Open to research partnerships
- **Visiting Scholars**: Welcome visiting researchers

### For Medical Professionals
- **Clinical Trials**: Participate in validation studies
- **Training Programs**: Access to training and education
- **Consultation**: Expert consultation services
- **Partnership**: Clinical partnership opportunities

### For Industry Partners
- **Technology Transfer**: Licensing and commercialization
- **Joint Development**: Collaborative product development
- **Investment**: Investment and funding opportunities
- **Partnership**: Strategic partnership arrangements

## Roadmap

- [ ] Finaliser le système de retour haptique
- [ ] Lancer les essais cliniques
- [ ] Déposer un brevet sur l'algorithme de trajectoire
- [ ] Publier les résultats dans une revue internationale

[Contact us](/contact/) for more information about this project and opportunities for involvement.

