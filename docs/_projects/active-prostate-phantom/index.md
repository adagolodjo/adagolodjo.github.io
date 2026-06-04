---
layout: page
title: Active Prostate Phantom
subtitle: Multi-Chamber Pneumatically Actuated Prostate Phantom for Medical Training & Validation
permalink: /research/projects/active-prostate-phantom/
image: /assets/images/projects/active-prostate-phantom.png
description: "Development of a pneumatically actuated prostate phantom with multiple independently controlled chambers for realistic simulation-based medical training and robotic system validation."
start_date: 2023-11-01
status: active
keywords: ["Medical Simulation", "Robotic Surgery", "Phantom Development", "Prostate Cancer", "Haptic Feedback"]
---

<div class="project-hero-section">
  <div class="project-hero-glow"></div>
  <div class="project-hero-grid">
    <div class="hero-left">
      <div class="project-badges">
        <span class="badge-glass active"><i class="fas fa-circle" style="font-size: 0.6rem; margin-right: 6px; position: relative; top: -2px;"></i> {{ page.status }}</span>
        <span class="badge-glass">Started 2023</span>
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

The Active Prostate Phantom project focuses on developing an advanced pneumatically actuated prostate phantom with multiple independently controlled chambers. This innovative phantom allows for precise volumetric adjustments to replicate both asymmetric and symmetric benign prostatic hyperplasia (BPH), providing a realistic platform for medical training and robotic system validation.

<div class="features-grid">
  <div class="feature-glass-card">
    <i class="fas fa-lungs feature-icon"></i>
    <h3>Multiple Chambers</h3>
    <p>Independently controlled pneumatic chambers for precise volume adjustments and dynamic conditions.</p>
  </div>
  <div class="feature-glass-card">
    <i class="fas fa-user-md feature-icon"></i>
    <h3>Realistic Simulation</h3>
    <p>Based on MRI dataset analysis for accurate modeling of physical measurements and anatomy.</p>
  </div>
  <div class="feature-glass-card">
    <i class="fas fa-microscope feature-icon"></i>
    <h3>Validation Platform</h3>
    <p>Designed for testing robotic-assisted systems and training via accurate FEM integration.</p>
  </div>
</div>

## Technical Approach

- 📐 **Design Methodology**: Shape analysis of magnetic resonance imaging (MRI) datasets
- 💻 **Modeling**: Finite element method (FEM) for accurate simulation
- ✅ **Validation**: 3D reconstruction and physical measurement comparison
- ⚙️ **Control System**: Pneumatic actuation with independent chamber control

**Project Start Date:** November 2023

## Key Features

- **Multiple Chambers**: Independently controlled pneumatic chambers for precise volume adjustments
- **Realistic Simulation**: Based on MRI dataset analysis for anatomically accurate modeling
- **Dynamic Scenarios**: Ability to simulate various prostate conditions and sizes
- **Validation Platform**: Designed for testing robotic-assisted systems and medical procedures
- **Training Tool**: Suitable for medical education and surgical training applications

## Technical Approach

- **Design Methodology**: Shape analysis of magnetic resonance imaging (MRI) datasets
- **Modeling**: Finite element method (FEM) for accurate simulation
- **Validation**: 3D reconstruction and physical measurement comparison
- **Control System**: Pneumatic actuation with independent chamber control

## Research Results

The simulation results demonstrated strong agreement with physical measurements:

- **Forward Modeling**: Average error of 3.47%
- **Inverse Modeling**: Average error of 1.41%

These results validate the phantom's potential as a reliable platform for robotic system validation and medical training applications.

## Publications

### Conference Papers

- **"Active Prostate Phantom with Multiple Chambers"** (2025)
  - Authors: Sizhe Tian, Yinoussa Adagolodjo, Jeremie Dequidt
  - Conference: IROS 2025 (IEEE/RSJ International Conference on Intelligent Robots and Systems)
  - HAL ID: [hal-05216849](https://hal.science/hal-05216849)
  - Keywords: Simulation and Animation, Medical Robots and Systems, Soft Robot Applications

- **"Using Haptic Feedback in Digital Rectal Examination Training"**
  - Published during the project development phase
  - Focus on haptic feedback integration for medical training applications

## Applications

### Medical Training

- Digital rectal examination (DRE) training
- Prostate biopsy procedure training
- Medical student education
- Continuing medical education programs

### Robotic System Validation

- Calibration of robotic-assisted surgical systems
- Testing of medical robotic procedures
- Validation of haptic feedback systems
- Research platform for new medical technologies

### Research Applications

- Prostate cancer diagnosis research
- Benign prostatic hyperplasia (BPH) studies
- Medical simulation development
- Haptic technology advancement

## Technical Specifications

- **Actuation**: Pneumatic system with multiple independent chambers
- **Control**: Precise volumetric adjustments for various prostate conditions
- **Materials**: Medical-grade materials suitable for repeated use
- **Validation**: FEM modeling with experimental validation
- **Accuracy**: Sub-4% error in forward modeling, sub-2% in inverse modeling

## Future Developments

- **Enhanced Realism**: Integration of additional anatomical features
- **Haptic Integration**: Advanced haptic feedback systems
- **Multi-Modal Training**: Integration with imaging systems
- **Clinical Validation**: Testing with medical professionals
- **Commercial Applications**: Development for medical training institutions

## Collaborations

This project involves collaboration with:

- Research teams in medical robotics
- Medical training institutions
- Healthcare professionals specializing in urology
- Industry partners in medical device development

## Impact

The Active Prostate Phantom addresses critical needs in:

- **Medical Education**: Providing realistic training scenarios
- **Robotic Surgery**: Enabling precise system calibration and validation
- **Patient Safety**: Reducing risks through improved training
- **Healthcare Innovation**: Advancing simulation-based medical technologies

## Contact

For more information about the Active Prostate Phantom project, collaboration opportunities, or technical details, please [contact me](/contact/).

## Project Timeline

- **November 2023**: Project initiation
- **2024**: Development and prototyping phase
- **2025**: IROS 2025 publication and presentation
- **Ongoing**: Continued development and validation

## Related Projects

- [Prostate Biopsy Project](/research/projects/prostate-biopsy/) - AI & Robotic Assistance for Prostate Cancer Diagnosis
- Other medical robotics and simulation projects in the research portfolio
