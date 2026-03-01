---
layout: page
title: Growing Robot
subtitle: Vine-Inspired Soft Robot for Endoscopic and Cardiovascular Procedures
permalink: /research/projects/growing-robot/
image: /assets/images/projects/growing-robot-new.png
description: "Development of innovative vine-inspired growing robots using eversion principles for endoscopic and cardiovascular medical applications, including TAVI procedures and minimally invasive interventions."
start_date: 2023-01-01
status: active
keywords: ["Growing Robots", "Soft Robotics", "Eversion", "TAVI", "Medical Robotics", "Kinematics", "Quasi-Statics"]
---

<div class="project-hero-section">
  <div class="project-hero-glow"></div>
  <div class="project-hero-grid">
    <div class="hero-left">
      <div class="project-badges">
        <span class="badge-glass active"><i class="fas fa-circle" style="font-size: 0.6rem; margin-right: 6px; position: relative; top: -2px;"></i> {{ page.status }}</span>
        <span class="badge-glass">Started 2024</span>
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

The Growing Robot project represents a paradigm shift in medical robotics, developing vine-like soft robots that "grow" through complex anatomical pathways. These everted pneumatic structures navigate delicate environments by extending from their tip rather than sliding, minimizing friction and tissue trauma.

<div class="features-grid">
  <div class="feature-glass-card">
    <i class="fas fa-leaf feature-icon"></i>
    <h3>Tip Extension</h3>
    <p>Navigates by everting material from the tip, completely eliminating sliding friction against surrounding tissue.</p>
  </div>
  <div class="feature-glass-card">
    <i class="fas fa-compass feature-icon"></i>
    <h3>Active Steering</h3>
    <p>Multi-chamber pneumatic steering allows precise navigation through complex bifurcating pathways.</p>
  </div>
  <div class="feature-glass-card">
    <i class="fas fa-cogs feature-icon"></i>
    <h3>Smart Materials</h3>
    <p>Variable stiffness capabilities adapt to the required mechanical properties of different anatomical regions.</p>
  </div>
</div>

## Target Applications

- 🧠 **Endovascular Surgery**: Navigation through tortuous brain vasculature
- 🫁 **Bronchoscopy**: Reaching deep peripheral lung nodules
- 🦠 **Gastroenterology**: Exploring narrow intestinal strictures
- 👶 **Pediatric Surgery**: Navigating extremely confined infantile anatomies
The technology has significant applications in cardiovascular interventions, particularly in Transcatheter Aortic Valve Implantation (TAVI) procedures.

**Project Focus Areas:**

- Eversion-based soft robotics
- 3D kinematics and quasi-static modeling
- Medical applications in cardiovascular surgery
- Material science for flexible robotic systems
- Minimally invasive surgical techniques

## Key Innovation: Eversion Principle

Growing robots operate on a unique eversion mechanism where:

- **Inflation**: The robot body is pressurized with fluid or gas
- **Eversion**: Material at the tip unfolds and extends the robot's length
- **Navigation**: The robot can traverse narrow and tortuous pathways
- **Safety**: Minimal contact forces reduce tissue damage risk

This approach enables deployment through complex anatomical structures while maintaining flexibility and safety.

## Technical Approach

### 3D Kinematics Modeling

- **Cosserat Rod Models**: Used for local coordinate systems
- **Complex Kinematic Simulation**: Understanding eversion behavior
- **Parameter Identification**: Factors affecting eversion process
- **External Response Analysis**: Robot behavior under external forces

### Quasi-Static Analysis

- **Finite Element Methods**: Advanced computational modeling
- **Combined Modeling**: Integration of kinematics and statics
- **Tip Behavior Prediction**: Understanding robot deployment
- **SOFA Framework Implementation**: Real-time simulation capabilities

### Material Innovation

- **Semi-Extensible Materials**: Enhanced flexibility and compliance
- **Silicone-Coated Ripstop Nylon**: Base material for robot body
- **Material Property Optimization**: Compliance studies for various materials
- **Biocompatible Solutions**: Safe materials for medical applications

## Medical Applications

### TAVI (Transcatheter Aortic Valve Implantation)

Growing robots offer revolutionary advantages for TAVI procedures:

- **Less Invasive Access**: Deployment from inside cardiovascular system
- **Patient-Specific Adaptation**: Flexibility for unique anatomical morphologies
- **Reduced Perforation Risk**: Soft deployment mechanism
- **Stenosis Navigation**: Capability to traverse narrow anatomical areas
- **Precision Positioning**: Accurate valve placement

### Other Medical Applications

- **Endoscopic Procedures**: Navigation through GI tract
- **Vascular Interventions**: Catheter-based treatments
- **Surgical Inspection**: Access to hard-to-reach anatomical areas
- **Archaeological Applications**: Non-medical exploration uses
- **Industrial Inspection**: Quality control in narrow spaces

## Research Results and Achievements

### Kinematic Understanding

- Successfully parameterized eversion starting conditions
- Identified critical factors affecting eversion process
- Developed predictive models for robot behavior
- Validated through SOFA framework simulations

### Clinical Testing

- **8mm Diameter Prototype**: Silicone-coated Ripstop Nylon construction
- **Iodine Solution Pressurization**: Biocompatible inflation medium
- **Cadaveric Trials**: Real anatomical testing environment
- **Navigation Challenges**: Identified stenosis traversal difficulties

### Material Compliance Studies

- Explored various semi-extensible materials
- Enhanced robot flexibility for tight anatomical passages
- Improved navigation through stenotic areas
- Optimized material properties for specific applications

## Publications

### Conference Papers

**"3D Kinematics and Quasi-Statics of a Growing Robot Eversion"** (2023)

- **Authors**: Flavie Przybylski, Yinoussa Adagolodjo, Anna Mîra, Giulio Cerruti, Jérémie Dequidt, Christian Duriez, Pierre Berthet-Rayne
- **Conference**: 2023 IEEE International Conference on Soft Robotics (RoboSoft)
- **DOI**: [10.1109/RoboSoft55895.2023.10122073](https://doi.org/10.1109/RoboSoft55895.2023.10122073)
- **HAL ID**: [hal-04390298](https://hal.science/hal-04390298v1)
- **Focus**: Computational modeling of eversion kinematics and robot tip behavior

**"Enhancing TAVI Robot Flexibility Using Semi-Extensible Materials"** (2024)

- **Authors**: Flavie Przybylski, Yinoussa Adagolodjo, Jérémie Dequidt, Christian Duriez, Pierre Berthet-Rayne
- **Conference**: HSMR 2024 - 16th Hamlyn Symposium on Medical Robotics
- **HAL ID**: [hal-04646160](https://hal.science/hal-04646160v1)
- **Focus**: Material science applications for improved TAVI robot performance

## Technical Specifications

### Robot Characteristics

- **Diameter**: 8mm (current prototype)
- **Material**: Silicone-coated Ripstop Nylon
- **Pressurization**: Iodine solution (biocompatible)
- **Deployment Method**: Internal eversion mechanism
- **Navigation**: Suitable for tortuous anatomical pathways

### Modeling Framework

- **Simulation Platform**: SOFA (Simulation Open Framework Architecture)
- **Kinematic Model**: Cosserat rod theory
- **Static Analysis**: Finite element methods
- **Integration**: Combined kinematic-static modeling approach

### Applications Scope

- **Primary**: TAVI cardiovascular procedures
- **Secondary**: General endoscopic applications
- **Research**: Archaeological and industrial inspection
- **Testing**: Narrow passage navigation scenarios

## Future Developments

### Enhanced Materials

- **Advanced Compliance**: New semi-extensible material formulations
- **Biocompatibility**: Improved materials for extended body contact
- **Durability**: Enhanced material strength and reusability
- **Smart Materials**: Responsive materials for adaptive behavior

### Advanced Control

- **Autonomous Navigation**: AI-guided pathway selection
- **Force Sensing**: Real-time tissue interaction monitoring
- **Adaptive Deployment**: Variable eversion based on anatomy
- **Multi-DOF Control**: Enhanced maneuverability

### Clinical Translation

- **Human Trials**: Progression from cadaveric to clinical studies
- **Regulatory Approval**: FDA/CE marking for medical use
- **Surgical Integration**: OR workflow optimization
- **Training Programs**: Surgeon education and certification

### Expanded Applications

- **Neurovascular Access**: Brain intervention applications
- **Pediatric Medicine**: Smaller diameter variants
- **Emergency Medicine**: Rapid deployment scenarios
- **Combination Devices**: Integration with imaging and therapy

## Collaborative Research

### Academic Partnerships

- University research collaborations in soft robotics
- Medical school partnerships for clinical validation
- International conferences and symposiums
- Cross-disciplinary research initiatives

### Industry Collaboration

- Medical device manufacturers
- Material science companies
- Simulation software developers
- Healthcare technology integrators

### Clinical Partnerships

- Cardiovascular surgery departments
- Interventional cardiology teams
- Medical device testing facilities
- Clinical trial coordination centers

## Impact and Significance

### Healthcare Innovation

- **Reduced Invasiveness**: Minimizing patient trauma
- **Improved Outcomes**: Enhanced precision and safety
- **Accessibility**: Procedures for high-risk patients
- **Cost Reduction**: Potential for outpatient procedures

### Scientific Advancement

- **Soft Robotics**: Advancing eversion-based robotics
- **Computational Modeling**: Novel kinematic approaches
- **Material Science**: New biocompatible materials
- **Medical Technology**: Next-generation surgical tools

### Global Health Impact

- **Aging Population**: Addressing demographic health challenges
- **Cardiovascular Disease**: Improving treatment options
- **Healthcare Access**: Enabling less invasive procedures
- **Training Reduction**: Simplified surgical techniques

## Project Timeline

- **2023**: Project initiation, concept development and early kinematic modeling
- **2024**: RoboSoft publication and advanced eversion modeling
- **2025**: Material studies and Hamlyn Symposium presentation
- **Ongoing**: Clinical validation and technology refinement
- **Future**: Regulatory approval and clinical implementation

## Contact

For more information about the Growing Robot project, collaboration opportunities, or technical details about eversion-based robotics, please [contact me](/contact/).

## Related Projects

- [Active Prostate Phantom](/research/projects/active-prostate-phantom/) - Medical simulation and training
- [IRE Project](/research/projects/ire/) - Soft robotic endoscopes and digital twins
- [ROBOCOP Project](/research/projects/robocop/) - Medical robotics for cochlear implants
