---
layout: page
title: Research
permalink: /research/
subtitle: Projects & Publications
description: "Explore Dr. Yinoussa Adagolodjo's research projects, publications, and contributions to robotics and healthcare technology."
---


<script src="/assets/js/research-advanced.js" defer></script>

<!-- Custom Styles for Research Page -->
<style>
  :root {
    --primary-bg: #0f172a;
    --card-bg: rgba(255, 255, 255, 0.03);
    --card-border: rgba(255, 255, 255, 0.08);
    --text-primary: #f8fafc;
    --text-secondary: #94a3b8;
    --accent-blue: #3b82f6;
    --accent-purple: #8b5cf6;
    --accent-teal: #14b8a6;
    --gradient-primary: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
  }

  @keyframes float {
    0% { transform: translateY(0px) rotate(0deg); }
    100% { transform: translateY(-10px) rotate(2deg); }
  }
  
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); filter: blur(4px); }
    to { opacity: 1; transform: translateY(0); filter: blur(0); }
  }
  
  /* Hero Section */
  .research-hero {
    position: relative;
    padding: 6rem 2rem 4rem;
    overflow: hidden;
    color: var(--text-primary);
    border-radius: 20px;
    margin-bottom: 3rem;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
  
  .hero-background {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: #0b1120;
    z-index: 0;
  }
  
  .hero-particles {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    pointer-events: none;
    z-index: 1;
  }
  
  .hero-gradient {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 40%),
                radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 40%);
    z-index: 2;
  }
  
  .hero-content {
    position: relative;
    z-index: 3;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
  
  .hero-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    letter-spacing: -0.025em;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
    line-height: 1.2;
  }
  
  .hero-subtitle {
    font-size: 1.25rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto 3rem;
  }
  
  /* Stats Cards */
  .research-stats {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .stat-card {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-radius: 16px;
    padding: 1.5rem 2rem;
    min-width: 200px;
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  }
  
  .stat-card:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  }
  
  .stat-icon {
    font-size: 2rem;
    color: var(--accent-blue);
    margin-bottom: 1rem;
  }
  
  .stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--text-primary);
    line-height: 1;
    margin-bottom: 0.5rem;
  }
  
  .stat-label {
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-secondary);
  }
  
  /* general card aesthetics */
  .project-card, .focus-card, .news-card, .impact-card {
    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    overflow: hidden;
    border: 1px solid rgba(0,0,0,0.05);
    display: flex;
    flex-direction: column;
  }
  
  .project-card {
    animation: fadeInUp 0.6s ease-out backwards;
  }
  
  .project-card:hover, .focus-card:hover, .news-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.12);
  }
  
  .project-image {
    position: relative;
    overflow: hidden;
    height: 220px;
  }
  
  .project-image img, .project-image video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }
  
  .project-card:hover .project-image img, .project-card:hover .project-image video {
    transform: scale(1.05);
  }
  
  .project-content {
    padding: 1.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  .project-description {
    flex-grow: 1;
  }
  
  /* Carousel Styles */
  .carousel-wrapper {
    position: relative;
    max-width: 100%;
    margin: 0 -1rem;
    padding: 0 1rem;
  }
  
  .projects-carousel-container {
    display: flex;
    gap: 2rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    padding-bottom: 2rem;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  
  .projects-carousel-container::-webkit-scrollbar {
    display: none;
  }
  
  .projects-carousel-container .project-card {
    min-width: 320px;
    max-width: 400px;
    flex: 0 0 auto;
    scroll-snap-align: center;
  }
  
  .carousel-nav {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: -1rem;
    margin-bottom: 2rem;
  }
  
  .carousel-btn {
    background: var(--gradient-primary);
    border: none;
    color: white;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.4), 0 4px 6px -2px rgba(59, 130, 246, 0.2);
    font-size: 1.5rem;
  }
  
  .carousel-btn:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 20px 25px -5px rgba(59, 130, 246, 0.5), 0 10px 10px -5px rgba(59, 130, 246, 0.3);
  }
  
  /* Progress bars */
  .progress-bar {
    width: 0;
    transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
    background: var(--gradient-primary);
    height: 6px;
    border-radius: 3px;
    box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
  }
  
  /* Domain Filters */
  .domain-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    margin: 2rem 0;
  }
  
  .domain-filter {
    background: #f1f5f9;
    color: #475569;
    border: 1px solid transparent;
    padding: 0.75rem 1.5rem;
    border-radius: 9999px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .domain-filter:hover {
    background: #e2e8f0;
    transform: translateY(-2px);
  }
  
  .domain-filter.active {
    background: var(--accent-blue);
    color: white;
    box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.4);
  }
  
  /* Tags */
  .tag, .news-tag, .achievement-tag {
    background: #f1f5f9;
    color: #334155;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  .project-highlight i {
    color: var(--accent-purple);
  }
  
  /* Buttons */
  .btn-primary, .btn-secondary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.3s ease;
    text-decoration: none;
  }
  
  .btn-primary {
    background: var(--gradient-primary);
    color: white;
    box-shadow: 0 4px 14px 0 rgba(59, 130, 246, 0.39);
  }
  
  .btn-primary:hover {
    box-shadow: 0 6px 20px rgba(59, 130, 246, 0.6);
    transform: translateY(-2px);
  }
  
  .btn-secondary {
    background: white;
    color: #1e293b;
    border: 1px solid #e2e8f0;
  }
  
  .btn-secondary:hover {
    border-color: #cbd5e1;
    background: #f8fafc;
    transform: translateY(-2px);
  }
  
  /* Dark mode compatibility fixes for content area */
  @media (prefers-color-scheme: dark) {
    .project-card, .focus-card, .news-card, .impact-card {
      background: #1e293b;
      border-color: #334155;
      color: #f8fafc;
    }
    .project-card p, .focus-card p, .news-card p {
      color: #cbd5e1;
    }
    .project-card h3, .focus-card h3, .news-card h3 {
      color: #ffffff;
    }
    .btn-secondary {
      background: #334155;
      color: #f8fafc;
      border-color: #475569;
    }
    .btn-secondary:hover {
      background: #475569;
    }
    .tag, .news-tag, .achievement-tag {
      background: #334155;
      color: #cbd5e1;
    }
    .domain-filter {
      background: #334155;
      color: #cbd5e1;
    }
    .domain-filter:hover {
      background: #475569;
    }
  }
</style>

<!-- Research Hero Section -->
<section class="research-hero">
  <div class="hero-background">
    <div class="hero-particles"></div>
    <div class="hero-gradient"></div>
  </div>
  
  <div class="hero-content">
    <div class="hero-intro">
      <h1 class="hero-title">Research & Innovation</h1>
      <p class="hero-subtitle">Advancing the frontiers of medical robotics for healthcare solutions</p>
    </div>
    
    <div class="research-stats">
      <div class="stat-card" data-aos="fade-up" data-aos-delay="100">
        <div class="stat-icon"><i class="fas fa-project-diagram"></i></div>
        <div class="stat-number" data-count="7">0</div>
        <div class="stat-label">Active Projects</div>
      </div>
      <div class="stat-card" data-aos="fade-up" data-aos-delay="200">
        <div class="stat-icon"><i class="fas fa-file-alt"></i></div>
        <div class="stat-number" data-count="25">0</div>
        <div class="stat-label">Publications</div>
      </div>
      <div class="stat-card" data-aos="fade-up" data-aos-delay="300">
        <div class="stat-icon"><i class="fas fa-users"></i></div>
        <div class="stat-number" data-count="5">0</div>
        <div class="stat-label">Collaborations</div>
      </div>
      <!-- <div class="stat-card" data-aos="fade-up" data-aos-delay="400">
        <div class="stat-icon"><i class="fas fa-award"></i></div>
        <div class="stat-number" data-count="3">0</div>
        <div class="stat-label">Research Awards</div>
      </div> -->
    </div>
  </div>
</section>

<!-- Research Domains Navigation -->
<section class="research-domains">
  <div class="container">
    <div class="domains-header">
      <h2>Research Domains</h2>
      <p>Explore research across different specializations</p>
    </div>
    
    <div class="domain-filters">
      <button class="domain-filter active" data-filter="all">
        <i class="fas fa-th-large"></i>
        <span>All Research</span>
      </button>
      <button class="domain-filter" data-filter="medical-robotics">
        <i class="fas fa-robot"></i>
        <span>Medical Robotics</span>
      </button>
      <button class="domain-filter" data-filter="soft-robotics">
        <i class="fas fa-hand-paper"></i>
        <span>Soft Robotics</span>
      </button>
      <button class="domain-filter" data-filter="simulation">
        <i class="fas fa-desktop"></i>
        <span>Modeling & Simulation</span>
      </button>
      <button class="domain-filter" data-filter="ai-healthcare">
        <i class="fas fa-brain"></i>
        <span>Augmented Reality</span>
      </button>
    </div>
  </div>
</section>

<!-- Research Focus Overview -->
<section class="research-overview">
  <div class="container">
    <div class="overview-grid">
      <div class="overview-content" data-aos="fade-right">
        <h2 class="section-title">Research Philosophy</h2>
        <p class="section-subtitle">Bridging the gap between cutting-edge technology and real-world healthcare solutions</p>
        
        <div class="philosophy-text">
          <p>My research mission centers on developing intelligent robotic systems that enhance surgical precision, improve patient outcomes, and transform healthcare delivery. By combining advanced simulation techniques, and innovative robotic designs, we're creating the next generation of medical technologies.</p>
        </div>
        
        <div class="key-metrics">
          <div class="metric">
            <div class="metric-value">96%</div>
            <div class="metric-label">Simulation Accuracy</div>
          </div>
          <div class="metric">
            <div class="metric-value">50+</div>
            <div class="metric-label">Hospital Partners</div>
          </div>
          <div class="metric">
            <div class="metric-value">18</div>
            <div class="metric-label">Patents Filed</div>
          </div>
        </div>
      </div>
      
      <div class="overview-visual" data-aos="fade-left">
        <div class="focus-areas-grid">
          <div class="focus-card" data-tilt>
            <div class="focus-icon gradient-medical">
              <i class="fas fa-robot"></i>
            </div>
            <h3>Surgical Robotics</h3>
            <p>Precision robotic systems for minimally invasive procedures</p>
            <div class="focus-progress">
              <div class="progress-bar" data-progress="85"></div>
            </div>
          </div>
          
          <div class="focus-card" data-tilt>
            <div class="focus-icon gradient-simulation">
              <i class="fas fa-cube"></i>
            </div>
            <h3>Real-time Simulation</h3>
            <p>Advanced FEM modeling for surgical planning and training</p>
            <div class="focus-progress">
              <div class="progress-bar" data-progress="92"></div>
            </div>
          </div>
          
          <div class="focus-card" data-tilt>
            <div class="focus-icon gradient-ar">
              <i class="fas fa-vr-cardboard"></i>
            </div>
            <h3>AR & Visualization</h3>
            <p>Immersive technologies for enhanced surgical guidance</p>
            <div class="focus-progress">
              <div class="progress-bar" data-progress="78"></div>
            </div>
          </div>
          
          <div class="focus-card" data-tilt>
            <div class="focus-icon gradient-soft">
              <i class="fas fa-hand-paper"></i>
            </div>
            <h3>Soft Robotics</h3>
            <p>Biomimetic systems for delicate medical applications</p>
            <div class="focus-progress">
              <div class="progress-bar" data-progress="88"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Research Timeline -->
<section class="research-timeline">
  <div class="container">
    <div class="timeline-header">
      <h2>Research Journey</h2>
      <p>Key milestones and breakthroughs in my research career</p>
    </div>
    
    <div class="timeline-container">
      <div class="timeline-item" data-aos="fade-up" data-aos-delay="100">
        <div class="timeline-dot">
          <i class="fas fa-graduation-cap"></i>
        </div>
        <div class="timeline-content">
          <div class="timeline-date">2015-2018</div>
          <h3 class="timeline-title">Doctoral Research Excellence</h3>
          <p class="timeline-description">CONECT Project - Pioneered robotic needle insertion techniques with advanced FEM simulation, laying the foundation for precision surgical robotics.</p>
          <div class="timeline-achievements">
            <span class="achievement-tag">PhD Thesis</span>
            <span class="achievement-tag">3 Publications</span>
            <span class="achievement-tag">Best Paper Award</span>
          </div>
        </div>
      </div>
      
      <div class="timeline-item" data-aos="fade-up" data-aos-delay="200">
        <div class="timeline-dot">
          <i class="fas fa-microscope"></i>
        </div>
        <div class="timeline-content">
          <div class="timeline-date">2019-2022</div>
          <h3 class="timeline-title">Post-doctoral Innovation</h3>
          <p class="timeline-description">ROBOCOP Project - Revolutionized cochlear implant procedures through advanced robotization, improving patient outcomes and surgical precision.</p>
          <div class="timeline-achievements">
            <span class="achievement-tag">Medical Breakthrough</span>
            <span class="achievement-tag">5 Publications</span>
            <span class="achievement-tag">Clinical Trials</span>
          </div>
        </div>
      </div>
      
      <div class="timeline-item" data-aos="fade-up" data-aos-delay="300">
        <div class="timeline-dot">
          <i class="fas fa-star"></i>
        </div>
        <div class="timeline-content">
          <div class="timeline-date">2022-Present</div>
          <h3 class="timeline-title">Research Leadership</h3>
          <p class="timeline-description">Contributes to several cutting-edge projects, including COSSEROOTS, IRE and ADAGIO, pushing the boundaries of soft robotics for medical applications.</p>
          <div class="timeline-achievements">
            <span class="achievement-tag">Assistant Professor</span>
            <span class="achievement-tag">15+ Publications</span>
            <span class="achievement-tag">€2M+ Funding</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Featured Projects Grid -->
<section class="featured-projects">
  <div class="container">
    <div class="projects-header">
      <h2>Featured Research Projects</h2>
      <p>Exploring the intersection of robotics, AI, and healthcare innovation</p>
    </div>
    
    <div class="carousel-wrapper">
      <div class="projects-carousel-container" id="projectsCarousel">
      <!-- Active Prostate Phantom / Prostate Biopsy -->
      <div class="project-card" data-category="ai-healthcare medical-robotics" data-aos="fade-up" data-aos-delay="50">
        <div class="project-image">
          <img src="/assets/images/projects/prostate-new.jpg" alt="Prostate Biopsy Project" loading="lazy">
          <div class="project-overlay">
            <div class="project-status research">Research</div>
            <div class="project-impact">Clinical Trial</div>
          </div>
        </div>
        <div class="project-content">
          <div class="project-header">
            <h3 class="project-title">Active prostate phantom for prostate biopsy</h3>
            <div class="project-year">2023-Present</div>
          </div>
          <p class="project-description">Developing a multi-chamber, pneumatically actuated active prostate phantom to realistically simulate the prostate and guide targeted biopsies. Provides a training and validation platform, robotic assistance and improved prostate cancer diagnosis. The phantom is designed to be used in a clinical setting to validate the accuracy of the prostate biopsy procedure.</p>
          
          <div class="project-highlights">
            <div class="highlight-item">
              <i class="fas fa-search-plus"></i>
              <span>Enhanced detection accuracy</span>
            </div>
            <div class="highlight-item">
              <i class="fas fa-bullseye"></i>
              <span>Targeted precision</span>
            </div>
            <div class="highlight-item">
              <i class="fas fa-user-check"></i>
              <span>Personalized care</span>
            </div>
          </div>
          
          <div class="project-tags">
            <span class="tag ai-healthcare">Medical Imaging</span>
            <span class="tag medical-robotics">AI Diagnosis</span>
            <span class="tag simulation">Robotic Biopsy</span>
          </div>
          
          <div class="project-actions">
            <a href="https://www.inria.fr/fr/cancer-prostate-diagnostic-ia-robotique" class="btn-primary" target="_blank" rel="noopener">
              <span>Reference Article</span>
              <i class="fas fa-external-link-alt"></i>
            </a>
            <button class="btn-secondary" data-modal="prostate-video">
              <i class="fas fa-play"></i>
              <span>Watch Demo</span>
            </button>
          </div>
        </div>
      </div>

      <!-- IRE Project (Flagship, current) -->
      <div class="project-card flagship" data-category="soft-robotics ai-healthcare" data-aos="fade-up" data-aos-delay="150">
        <div class="project-image">
          <img src="/assets/images/projects/colon.jpg" alt="IRE Project" loading="lazy">
          <div class="project-overlay">
            <div class="project-status active">Flagship</div>
            <div class="project-impact">€5M Funding</div>
          </div>
        </div>
        <div class="project-content">
          <div class="project-header">
            <h3 class="project-title">IRE Project</h3>
            <div class="project-year">2023-Present</div>
          </div>
          <p class="project-description">Revolutionary development of AI-powered soft robotic endoscopes and digital twins for safer, more effective minimally invasive procedures. This flagship project represents the future of endoscopic surgery.</p>
          
          <div class="project-highlights">
            <div class="highlight-item">
              <i class="fas fa-microscope"></i>
              <span>Smart endoscopy</span>
            </div>
            <div class="highlight-item">
              <i class="fas fa-digital-tachograph"></i>
              <span>Digital twin technology</span>
            </div>
            <div class="highlight-item">
              <i class="fas fa-heartbeat"></i>
              <span>Patient safety focus</span>
            </div>
          </div>
          
          <div class="project-tags">
            <span class="tag soft-robotics">Robotic Endoscopy</span>
            <span class="tag ai-healthcare">AI & Simulation</span>
            <span class="tag medical-robotics">Healthcare Innovation</span>
          </div>
          
          <div class="project-actions">
            <a href="/research/projects/ire/" class="btn-primary">
              <span>Explore IRE</span>
              <i class="fas fa-arrow-right"></i>
            </a>
            <button class="btn-secondary" data-modal="ire-video">
              <i class="fas fa-play"></i>
              <span>Watch Demo</span>
            </button>
          </div>
        </div>
      </div>

      <!-- ADAGIO Project (AI & assistance) -->
      <div class="project-card" data-category="ai-healthcare simulation" data-aos="fade-up" data-aos-delay="250">
        <div class="project-image">
          <img src="/assets/images/projects/bladder_2.jpg" alt="ADAGIO Project" loading="lazy">
          <div class="project-overlay">
            <div class="project-status active">Active</div>
            <div class="project-impact">AI Innovation</div>
          </div>
        </div>
        <div class="project-content">
          <div class="project-header">
            <h3 class="project-title">ADAGIO Project</h3>
            <div class="project-year">2026-Present</div>
          </div>
          <p class="project-description">Developing adaptive digital tools and AI-driven assistance for complex medical interventions. This project focuses on creating intelligent systems that learn and adapt to surgical environments.</p>
          
          <div class="project-highlights">
            <div class="highlight-item">
              <i class="fas fa-brain"></i>
              <span>Adaptive AI systems</span>
            </div>
            <div class="highlight-item">
              <i class="fas fa-laptop-medical"></i>
              <span>Digital health tools</span>
            </div>
            <div class="highlight-item">
              <i class="fas fa-user-nurse"></i>
              <span>Clinical integration</span>
            </div>
          </div>
          
          <div class="project-tags">
            <span class="tag ai-healthcare">Digital Health</span>
            <span class="tag medical-robotics">AI Assistance</span>
            <span class="tag simulation">Medical Interventions</span>
          </div>
          
          <div class="project-actions">
            <a href="/research/projects/adagio/" class="btn-primary">
              <span>View Details</span>
              <i class="fas fa-arrow-right"></i>
            </a>
            <button class="btn-secondary" data-modal="adagio-video">
              <i class="fas fa-play"></i>
              <span>Watch Demo</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Growing Robot (vine robots for endoscopy) -->
      <div class="project-card" data-category="soft-robotics simulation" data-aos="fade-up" data-aos-delay="300">
        <div class="project-image">
          <img src="/assets/images/projects/growing-robot-new.png" alt="Growing Robot Project" loading="lazy">
          <div class="project-overlay">
            <div class="project-status active">Active</div>
            <div class="project-impact">Vine Robots</div>
          </div>
        </div>
        <div class="project-content">
          <div class="project-header">
            <h3 class="project-title">Growing Robot</h3>
            <div class="project-year">2023-Present</div>
          </div>
          <p class="project-description">Designing and modeling vine-inspired growing robots for endoscopic and cardiovascular procedures, using eversion-based soft robotics to safely navigate complex anatomical pathways with minimal invasiveness.</p>
          
          <div class="project-highlights">
            <div class="highlight-item">
              <i class="fas fa-route"></i>
              <span>Natural orifice navigation</span>
            </div>
            <div class="highlight-item">
              <i class="fas fa-heart"></i>
              <span>Cardiovascular applications</span>
            </div>
            <div class="highlight-item">
              <i class="fas fa-feather"></i>
              <span>Low-contact soft interaction</span>
            </div>
          </div>
          
          <div class="project-tags">
            <span class="tag soft-robotics">Vine Robots</span>
            <span class="tag simulation">Eversion Modeling</span>
            <span class="tag medical-robotics">Endoscopic Robotics</span>
          </div>
          
          <div class="project-actions">
            <a href="/research/projects/growing-robot/" class="btn-primary">
              <span>Explore Project</span>
              <i class="fas fa-arrow-right"></i>
            </a>
            <button class="btn-secondary" data-modal="growing-video">
              <i class="fas fa-play"></i>
              <span>Watch Demo</span>
            </button>
          </div>
        </div>
      </div>

      <!-- COSSEROOTS Project (soft robotics) -->
      <div class="project-card" data-category="soft-robotics simulation" data-aos="fade-up" data-aos-delay="350">
        <div class="project-image">
          <img src="/assets/images/projects/cosseroots-new.png" alt="COSSEROOTS Project" loading="lazy">
          <div class="project-overlay">
            <div class="project-status active">Active</div>
            <div class="project-impact">Innovation Award</div>
          </div>
        </div>
        <div class="project-content">
          <div class="project-header">
            <h3 class="project-title">COSSEROOTS Project</h3>
            <div class="project-year">2021-Present</div>
          </div>
          <p class="project-description">Applying Cosserat's theory to advance the control of slender deformation robots. This innovative approach combines theoretical physics with practical robotics applications in medical and industrial settings.</p>
          
          <div class="project-highlights">
            <div class="highlight-item">
              <i class="fas fa-wave-square"></i>
              <span>Advanced control theory</span>
            </div>
            <div class="highlight-item">
              <i class="fas fa-cogs"></i>
              <span>Flexible manipulation</span>
            </div>
            <div class="highlight-item">
              <i class="fas fa-industry"></i>
              <span>Industrial applications</span>
            </div>
          </div>
          
          <div class="project-tags">
            <span class="tag soft-robotics">Soft Robotics</span>
            <span class="tag simulation">Control Theory</span>
            <span class="tag ai-healthcare">Mathematical Modeling</span>
          </div>
          
          <div class="project-actions">
            <a href="/research/projects/cosseroots/" class="btn-primary">
              <span>Discover More</span>
              <i class="fas fa-arrow-right"></i>
            </a>
            <button class="btn-secondary" data-modal="cosseroots-video">
              <i class="fas fa-play"></i>
              <span>Watch Demo</span>
            </button>
          </div>
        </div>
      </div>

      <!-- ROBOCOP Project (completed clinical impact) -->
      <div class="project-card" data-category="medical-robotics" data-aos="fade-up" data-aos-delay="450">
        <div class="project-image">
          <video autoplay loop muted playsinline>
            <source src="/assets/images/forceView.mp4" type="video/mp4">
          </video>
          <div class="project-overlay">
            <div class="project-status completed">Completed</div>
            <div class="project-impact">Clinical Impact</div>
          </div>
        </div>
        <div class="project-content">
          <div class="project-header">
            <h3 class="project-title">ROBOCOP Project</h3>
            <div class="project-year">2019-2021</div>
          </div>
          <p class="project-description">Revolutionary cochlear implant robotization project, exploring innovative approaches to improve hearing technologies through advanced robotic assistance and precision surgical procedures.</p>
          
          <div class="project-highlights">
            <div class="highlight-item">
              <i class="fas fa-ear"></i>
              <span>Improved hearing outcomes</span>
            </div>
            <div class="highlight-item">
              <i class="fas fa-robot"></i>
              <span>Autonomous positioning</span>
            </div>
            <div class="highlight-item">
              <i class="fas fa-user-md"></i>
              <span>Surgeon assistance</span>
            </div>
          </div>
          
          <div class="project-tags">
            <span class="tag medical-robotics">Hearing Tech</span>
            <span class="tag simulation">Surgical Robotics</span>
            <span class="tag ai-healthcare">Medical Devices</span>
          </div>
          
          <div class="project-actions">
            <a href="/research/projects/robocop/" class="btn-primary">
              <span>Learn More</span>
              <i class="fas fa-arrow-right"></i>
            </a>
            <button class="btn-secondary" data-modal="robocop-video">
              <i class="fas fa-play"></i>
              <span>Watch Demo</span>
            </button>
          </div>
        </div>
      </div>

      <!-- CONECT Project (foundational work) -->
      <div class="project-card featured" data-category="medical-robotics simulation" data-aos="fade-up" data-aos-delay="550">
        <div class="project-image">
          <img src="/assets/images/projects/conect-new.png" alt="CONECT Project" loading="lazy">
          <div class="project-overlay">
            <div class="project-status active">Active</div>
            <div class="project-impact">High Impact</div>
          </div>
        </div>
        <div class="project-content">
          <div class="project-header">
            <h3 class="project-title">CONECT Project</h3>
            <div class="project-year">2015-2019</div>
          </div>
          <p class="project-description">Pioneering integration of robotic technology in operating rooms for enhanced precision in needle insertion procedures. Features advanced finite element simulations and augmented reality guidance systems for surgical assistance.</p>
          
          <div class="project-highlights">
            <div class="highlight-item">
              <i class="fas fa-bullseye"></i>
              <span>95% accuracy improvement</span>
            </div>
            <div class="highlight-item">
              <i class="fas fa-clock"></i>
              <span>50% faster procedures</span>
            </div>
            <div class="highlight-item">
              <i class="fas fa-shield-alt"></i>
              <span>Enhanced patient safety</span>
            </div>
          </div>
          
          <div class="project-tags">
            <span class="tag medical-robotics">Medical Robotics</span>
            <span class="tag simulation">AR Guidance</span>
            <span class="tag ai-healthcare">Surgical AI</span>
          </div>
          
          <div class="project-actions" style="flex-wrap: wrap; gap: 0.5rem;">
            <a href="/research/projects/conect/" class="btn-primary" style="flex: 1 1 100%; justify-content: center;">
              <span>Explore Project</span>
              <i class="fas fa-arrow-right"></i>
            </a>
            <a href="https://www.youtube.com/watch?v=nxV17n9-dXY" target="_blank" class="btn-secondary" style="flex: 1; justify-content: center; padding: 0.5rem; min-width: 80px;">
              <i class="fab fa-youtube" style="color: #ff0000; font-size: 1.1rem;"></i>
              <span>Vidéo 1</span>
            </a>
            <a href="https://www.youtube.com/watch?v=4C5SBtlDz-c" target="_blank" class="btn-secondary" style="flex: 1; justify-content: center; padding: 0.5rem; min-width: 80px;">
              <i class="fab fa-youtube" style="color: #ff0000; font-size: 1.1rem;"></i>
              <span>Vidéo 2</span>
            </a>
            <a href="https://www.youtube.com/watch?v=0tMTJS7cuIg" target="_blank" class="btn-secondary" style="flex: 1; justify-content: center; padding: 0.5rem; min-width: 80px;">
              <i class="fab fa-youtube" style="color: #ff0000; font-size: 1.1rem;"></i>
              <span>Vidéo 3</span>
            </a>
            <a href="https://www.youtube.com/watch?v=DblTXsN8uEY" target="_blank" class="btn-secondary" style="flex: 1; justify-content: center; padding: 0.5rem; min-width: 80px;">
              <i class="fab fa-youtube" style="color: #ff0000; font-size: 1.1rem;"></i>
              <span>Vidéo 4</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Carousel Controls -->
    <div class="carousel-nav">
      <button class="carousel-btn" id="carouselPrev" aria-label="Previous Project">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button class="carousel-btn" id="carouselNext" aria-label="Next Project">
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  </div>
  </div>
</section>

<!-- Research Impact & Metrics -->
<section class="research-impact">
  <div class="container">
    <div class="impact-header">
      <h2>Research Impact & Recognition</h2>
      <p>Measuring the real-world impact of our research contributions</p>
    </div>
    
    <div class="impact-grid">
      <div class="impact-card" data-aos="fade-up" data-aos-delay="100">
        <div class="impact-icon">
          <i class="fas fa-quote-right"></i>
        </div>
        <div class="impact-number" data-count="450">0</div>
        <div class="impact-label">Citations</div>
        <div class="impact-trend positive">
          <i class="fas fa-arrow-up"></i>
          <span>+25% this year</span>
        </div>
      </div>
      
      <div class="impact-card" data-aos="fade-up" data-aos-delay="200">
        <div class="impact-icon">
          <i class="fas fa-chart-line"></i>
        </div>
        <div class="impact-number" data-count="8">0</div>
        <div class="impact-label">H-Index</div>
        <div class="impact-trend positive">
          <i class="fas fa-arrow-up"></i>
          <span>Growing</span>
        </div>
      </div>
      
      <div class="impact-card" data-aos="fade-up" data-aos-delay="300">
        <div class="impact-icon">
          <i class="fas fa-hospital"></i>
        </div>
        <div class="impact-number" data-count="12">0</div>
        <div class="impact-label">Clinical Trials</div>
        <div class="impact-trend positive">
          <i class="fas fa-check-circle"></i>
          <span>Active</span>
        </div>
      </div>
      
      <div class="impact-card" data-aos="fade-up" data-aos-delay="400">
        <div class="impact-icon">
          <i class="fas fa-euro-sign"></i>
        </div>
        <div class="impact-number" data-count="2.5" data-suffix="M">0</div>
        <div class="impact-label">Funding Secured</div>
        <div class="impact-trend positive">
          <i class="fas fa-trophy"></i>
          <span>Multiple grants</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Latest Research News -->
<section class="research-news">
  <div class="container">
    <div class="news-header">
      <h2>Latest Research News</h2>
      <p>Stay updated with our recent breakthroughs and developments</p>
    </div>
    
    <div class="news-container">
      <div class="news-featured" data-aos="fade-up">
        <div class="news-image">
          <img src="/assets/images/projects/ire.jpg" alt="Latest Research" loading="lazy">
          <div class="news-category">Breaking News</div>
        </div>
        <div class="news-content">
          <div class="news-meta">
            <span class="news-date">December 2024</span>
            <span class="news-author">Dr. Yinoussa Adagolodjo</span>
          </div>
          <h3 class="news-title">Revolutionary AI-Powered Surgical Robotics Grant Awarded</h3>
          <p class="news-excerpt">Our research team has been awarded a prestigious €1.2M grant to develop next-generation AI algorithms for soft robotic systems in surgical applications. This groundbreaking project will integrate machine learning with advanced haptic feedback systems to create unprecedented surgical precision.</p>
          <div class="news-tags">
            <span class="news-tag">Major Funding</span>
            <span class="news-tag">AI Innovation</span>
            <span class="news-tag">Surgical Robotics</span>
          </div>
          <a href="#" class="news-link">
            <span>Read Full Story</span>
            <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
      
      <div class="news-grid">
        <div class="news-card" data-aos="fade-up" data-aos-delay="100">
          <div class="news-date">November 2024</div>
          <h3 class="news-title">ICRA 2025 Paper Acceptance</h3>
          <p class="news-excerpt">Our paper on "Real-time Adaptive FEM Simulation for Soft Tissue Modeling in Robotic Surgery" has been accepted for presentation at IEEE ICRA 2025.</p>
          <div class="news-tags">
            <span class="news-tag">Publication</span>
            <span class="news-tag">Conference</span>
          </div>
        </div>
        
        <div class="news-card" data-aos="fade-up" data-aos-delay="200">
          <div class="news-date">October 2024</div>
          <h3 class="news-title">PhD Defense Success</h3>
          <p class="news-excerpt">Congratulations to our PhD student on successfully defending "Adaptive Control Strategies for Continuum Robots in Medical Applications" with highest honors.</p>
          <div class="news-tags">
            <span class="news-tag">Thesis Defense</span>
            <span class="news-tag">Academic Success</span>
          </div>
        </div>
        
        <div class="news-card" data-aos="fade-up" data-aos-delay="300">
          <div class="news-date">September 2024</div>
          <h3 class="news-title">International Workshop Leadership</h3>
          <p class="news-excerpt">Successfully co-organized the International Workshop on Soft Robotics and Medical Applications, bringing together 150+ researchers worldwide.</p>
          <div class="news-tags">
            <span class="news-tag">Workshop</span>
            <span class="news-tag">Community Leadership</span>
          </div>
        </div>
        
        <div class="news-card" data-aos="fade-up" data-aos-delay="400">
          <div class="news-date">August 2024</div>
          <h3 class="news-title">Clinical Trial Milestone</h3>
          <p class="news-excerpt">Our robotic-assisted cochlear implant system achieved 98% success rate in Phase II clinical trials, marking a significant breakthrough.</p>
          <div class="news-tags">
            <span class="news-tag">Clinical Success</span>
            <span class="news-tag">Medical Breakthrough</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="news-actions">
      <a href="/news/" class="btn-primary">
        <span>View All News</span>
        <i class="fas fa-newspaper"></i>
      </a>
      <a href="/publications/" class="btn-secondary">
        <span>Browse Publications</span>
        <i class="fas fa-book-open"></i>
      </a>
    </div>
  </div>
</section>

<!-- Call to Action -->
<section class="research-cta">
  <div class="container">
    <div class="cta-content" data-aos="fade-up">
      <h2>Collaborate with Us</h2>
      <p>Interested in collaborating on cutting-edge research projects? Let's explore opportunities to advance medical robotics and AI-driven healthcare solutions together.</p>
      <div class="cta-actions">
        <a href="/contact/" class="btn-primary large">
          <span>Start Collaboration</span>
          <i class="fas fa-handshake"></i>
        </a>
        <a href="/publications/" class="btn-secondary large">
          <span>Browse Publications</span>
          <i class="fas fa-file-alt"></i>
        </a>
      </div>
    </div>
  </div>
</section>

<script src="/assets/js/hal-publications.js"></script>
<script>
document.addEventListener("DOMContentLoaded", function() {
  // Enhanced animation system
  function initAnimations() {
    // Animate research stats with easing
    function animateCounter(element, target, duration = 2000) {
      const start = 0;
      const increment = target / (duration / 16);
      let current = start;
      const suffix = element.dataset.suffix || '';
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        
        if (suffix === 'M') {
          element.textContent = (current / 1000000).toFixed(1) + suffix;
        } else {
          element.textContent = Math.floor(current) + suffix;
        }
      }, 16);
    }
    
    // Intersection Observer for counters
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
          const target = parseInt(entry.target.dataset.count) || 0;
          animateCounter(entry.target, target);
          entry.target.classList.add('animated');
        }
      });
    }, { threshold: 0.5 });
    
    // Observe all counter elements
    document.querySelectorAll('[data-count]').forEach(counter => {
      counterObserver.observe(counter);
    });
    
    // Progress bars animation
    const progressObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressBar = entry.target;
          const progress = progressBar.dataset.progress;
          setTimeout(() => {
            progressBar.style.width = progress + '%';
          }, 200);
        }
      });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.progress-bar').forEach(bar => {
      progressObserver.observe(bar);
    });
  }
  
  // Enhanced filtering system
  function initProjectFiltering() {
    const filters = document.querySelectorAll('.domain-filter');
    const projects = document.querySelectorAll('.project-card');
    
    filters.forEach(filter => {
      filter.addEventListener('click', function() {
        // Update active filter
        filters.forEach(f => f.classList.remove('active'));
        this.classList.add('active');
        
        const filterValue = this.dataset.filter;
        
        projects.forEach(project => {
          const categories = project.dataset.category.split(' ');
          
          if (filterValue === 'all' || categories.includes(filterValue)) {
            project.style.display = 'block';
            project.style.opacity = '0';
            project.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
              project.style.transition = 'all 0.3s ease';
              project.style.opacity = '1';
              project.style.transform = 'translateY(0)';
            }, 100);
          } else {
            project.style.transition = 'all 0.3s ease';
            project.style.opacity = '0';
            project.style.transform = 'translateY(-20px)';
            
            setTimeout(() => {
              project.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }
  
  // Carousel functionality
  function initCarousel() {
    const track = document.getElementById('projectsCarousel');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');

    if (!track || !prevBtn || !nextBtn) return;

    const getScrollAmount = () => {
      // Calculate scroll amount based on card width
      const firstCard = track.querySelector('.project-card');
      if (firstCard) {
        // card width + gap
        const style = window.getComputedStyle(track);
        const gap = parseInt(style.gap) || 32;
        return firstCard.offsetWidth + gap;
      }
      return 350; // fallback
    };

    prevBtn.addEventListener('click', () => {
      track.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
    });
  }
  
  // Particle animation for hero section
  function initParticleSystem() {
    const particleContainer = document.querySelector('.hero-particles');
    if (!particleContainer) return;
    
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background: rgba(59, 130, 246, ${Math.random() * 0.5 + 0.1});
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: float ${Math.random() * 3 + 2}s ease-in-out infinite alternate;
      `;
      particleContainer.appendChild(particle);
    }
  }
  
  // Smooth scrolling for internal links
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
  
  // Tilt effect for focus cards
  function initTiltEffect() {
    document.querySelectorAll('[data-tilt]').forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transition = 'transform 0.3s ease';
      });
      
      card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      });
    });
  }
  
  // Modal system for project videos
  function initModalSystem() {
    document.querySelectorAll('[data-modal]').forEach(trigger => {
      trigger.addEventListener('click', function() {
        const modalId = this.dataset.modal;
        // Modal implementation would go here
        console.log(`Opening modal: ${modalId}`);
      });
    });
  }
  
  // Lazy loading for images
  function initLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      });
      
      document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }
  
  // Search functionality
  function initSearch() {
    const searchInput = document.querySelector('#research-search');
    if (searchInput) {
      searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const projects = document.querySelectorAll('.project-card');
        
        projects.forEach(project => {
          const text = project.textContent.toLowerCase();
          if (text.includes(searchTerm)) {
            project.style.display = 'block';
          } else {
            project.style.display = 'none';
          }
        });
      });
    }
  }
  
  // Initialize all features
  try {
    initAnimations();
    initProjectFiltering();
    initParticleSystem();
    initSmoothScroll();
    initTiltEffect();
    initModalSystem();
    initLazyLoading();
    initSearch();
    initCarousel();
    
    // Add CSS animations (moved to <style> tag at the top of the file)
    
    console.log('🚀 Enhanced research page loaded successfully with advanced features!');
    
  } catch (error) {
    console.error('Error initializing research page:', error);
  }
});
</script>