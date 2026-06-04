---
layout: page
title: Module IA Robotique & Santé
subtitle: Intelligence artificielle, robotique médicale et systèmes de rééducation
permalink: /teaching/courses/robotique-medicale/
image: /assets/images/projects/robotique-medicale.jpg
---

<style>
:root {
  --primary-color: #2c3e50;
  --secondary-color: #3498db;
  --accent-color: #e74c3c;
  --success-color: #27ae60;
  --warning-color: #f39c12;
  --medical-color: #e91e63;
  --light-bg: #f8f9fa;
  --card-shadow: 0 4px 20px rgba(0,0,0,0.08);
  --card-shadow-hover: 0 12px 40px rgba(0,0,0,0.15);
  --border-radius: 16px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.course-hero {
  background: linear-gradient(135deg, var(--medical-color) 0%, var(--secondary-color) 100%);
  color: white;
  padding: 4rem 2rem;
  border-radius: var(--border-radius);
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.course-hero::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v20h40V20c0-11.046-8.954-20-20-20z'/%3E%3C/g%3E%3C/svg%3E");
  animation: float 20s linear infinite;
  z-index: 1;
}

.course-hero-content {
  position: relative;
  z-index: 2;
}

.course-hero h1 {
  color: white;
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 300;
  text-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.course-hero .subtitle {
  font-size: 1.3rem;
  opacity: 0.95;
  margin-bottom: 2rem;
}

.hero-badges {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero-badge {
  background: rgba(255,255,255,0.2);
  backdrop-filter: blur(10px);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 500;
  border: 1px solid rgba(255,255,255,0.3);
}

.section-card {
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  padding: 2.5rem;
  margin-bottom: 2rem;
  transition: var(--transition);
}

.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--light-bg);
}

.section-icon {
  font-size: 2rem;
  margin-right: 1rem;
  color: var(--medical-color);
}

.section-title {
  color: var(--primary-color);
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
}

.objectives-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.objective-card {
  background: var(--light-bg);
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid var(--success-color);
  transition: var(--transition);
}

.objective-card:hover {
  transform: translateX(8px);
  background: #e8f5e8;
}

.info-box {
  background: linear-gradient(135deg, #fce4ec, #f3e5f5);
  border-left: 4px solid var(--medical-color);
  padding: 1.5rem;
  border-radius: 8px;
  margin: 2rem 0;
}

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--secondary-color);
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  margin-left: 2rem;
  border-left: 4px solid var(--secondary-color);
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -2.75rem;
  top: 1.5rem;
  width: 12px;
  height: 12px;
  background: var(--secondary-color);
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 0 0 3px var(--secondary-color);
}

@keyframes float {
  0% { transform: translateX(-50px); }
  100% { transform: translateX(calc(100vw + 50px)); }
}

@media (max-width: 768px) {
  .course-hero h1 {
    font-size: 2.5rem;
  }
  
  .timeline {
    padding-left: 1rem;
  }
  
  .timeline-item {
    margin-left: 1rem;
  }
}
</style>

<div class="course-hero">
  <div class="course-hero-content">
    <h1>🏥 Module IA Robotique & Santé</h1>
    <p class="subtitle">Intelligence artificielle, robotique médicale et systèmes de rééducation</p>
    <div class="hero-badges">
      <span class="hero-badge">🎓 Master</span>
      <span class="hero-badge">⏱️ 4h TD + 8h TP</span>
      <span class="hero-badge">🎯 S3</span>
      <span class="hero-badge">🏥 Médical</span>
    </div>
  </div>
</div>

<section class="section-card">
  <div class="section-header">
    <div class="section-icon">📋</div>
    <h2 class="section-title">Présentation du cours</h2>
  </div>
  
  <p style="font-size: 1.1rem; line-height: 1.7; color: #555; margin-bottom: 2rem;">
    Ce cours explore les applications avancées de la robotique et de l'intelligence artificielle dans le domaine médical, incluant les <strong>robots chirurgicaux</strong>, les <strong>systèmes de rééducation</strong> et les <strong>dispositifs d'assistance intelligents</strong>. Les étudiants découvriront les défis technologiques, éthiques et réglementaires de l'intégration conjointe IA–robotique en médecine, avec un focus sur la sécurité, la précision et l'interaction homme-robot dans un contexte médical.
  </p>

  <div class="info-box">
    <h4>📊 Informations générales</h4>
    <p><strong>Code :</strong> OA-ROBOTIQUE-MEDICALE<br>
    <strong>Durée :</strong> 4h de travaux dirigés + 8h de travaux pratiques<br>
    <strong>Semestre :</strong> S3<br>
    <strong>Niveau :</strong> Master<br>
    <strong>Évaluation :</strong> Note de Classe, Note de rapport</p>
  </div>
</section>

<section class="section-card">
  <div class="section-header">
    <div class="section-icon">🎯</div>
    <h2 class="section-title">Objectifs pédagogiques</h2>
  </div>

  <p style="font-size: 1.05rem; margin-bottom: 2rem; color: #555;">
    <strong>À l'issue de ce cours, les étudiants seront capables de :</strong>
  </p>

  <div class="objectives-grid">
    <div class="objective-card">
      <h4>🏥 Comprendre la robotique chirurgicale</h4>
      <p>Maîtriser les principes et technologies des robots chirurgicaux (Da Vinci, etc.) et leurs applications.</p>
    </div>
    <div class="objective-card">
      <h4>🦾 Concevoir des systèmes de rééducation</h4>
      <p>Développer des robots de rééducation pour la récupération motrice et cognitive des patients.</p>
    </div>
    <div class="objective-card">
      <h4>🧠 Intégrer l'IA médicale</h4>
      <p>Utiliser l'intelligence artificielle pour l'aide au diagnostic et la planification d'interventions.</p>
    </div>
    <div class="objective-card">
      <h4>🔒 Assurer la sécurité médicale</h4>
      <p>Implémenter les protocoles de sécurité et certification pour les dispositifs médicaux robotisés.</p>
    </div>
    <div class="objective-card">
      <h4>👥 Optimiser l'interaction patient-robot</h4>
      <p>Concevoir des interfaces intuitives et acceptables pour les patients et praticiens.</p>
    </div>
    <div class="objective-card">
      <h4>⚖️ Intégrer les aspects éthiques</h4>
      <p>Comprendre les enjeux éthiques et réglementaires de la robotique médicale.</p>
    </div>
  </div>
</section>

<section class="section-card">
  <div class="section-header">
    <div class="section-icon">📅</div>
    <h2 class="section-title">Programme détaillé</h2>
  </div>
  
  <div class="timeline">
    <div class="timeline-item">
      <div style="font-weight: 600; color: var(--medical-color); font-size: 1.1rem; margin-bottom: 0.5rem;">Module 1 : Introduction à la robotique médicale</div>
      <div>
        <h4>Panorama et enjeux</h4>
        <div style="color: #666; font-size: 0.95rem; margin-top: 0.5rem; font-style: italic;">Histoire, évolution, typologie des robots médicaux, réglementation et certification (FDA, CE).</div>
      </div>
    </div>
    
    <div class="timeline-item">
      <div style="font-weight: 600; color: var(--medical-color); font-size: 1.1rem; margin-bottom: 0.5rem;">Module 2 : Robotique chirurgicale</div>
      <div>
        <h4>Systèmes chirurgicaux assistés</h4>
        <div style="color: #666; font-size: 0.95rem; margin-top: 0.5rem; font-style: italic;">Da Vinci, ROSA, robodoc. Planification pré-opératoire, navigation chirurgicale, télé-chirurgie.</div>
      </div>
    </div>
    
    <div class="timeline-item">
      <div style="font-weight: 600; color: var(--medical-color); font-size: 1.1rem; margin-bottom: 0.5rem;">Module 3 : Robots de rééducation</div>
      <div>
        <h4>Thérapie robotique assistée</h4>
        <div style="color: #666; font-size: 0.95rem; margin-top: 0.5rem; font-style: italic;">Lokomat, ReWalk, exosquelettes. Rééducation motrice, cognitive, adaptation et personnalisation.</div>
      </div>
    </div>
    
    <div class="timeline-item">
      <div style="font-weight: 600; color: var(--medical-color); font-size: 1.1rem; margin-bottom: 0.5rem;">Module 4 : IA et robotique médicale</div>
      <div>
        <h4>Intelligence artificielle appliquée</h4>
        <div style="color: #666; font-size: 0.95rem; margin-top: 0.5rem; font-style: italic;">Vision par ordinateur pour la chirurgie, machine learning pour diagnostic, robots autonomes.</div>
      </div>
    </div>
    
    <div class="timeline-item">
      <div style="font-weight: 600; color: var(--medical-color); font-size: 1.1rem; margin-bottom: 0.5rem;">Module 5 : Projet pratique</div>
      <div>
        <h4>Développement d'un prototype</h4>
        <div style="color: #666; font-size: 0.95rem; margin-top: 0.5rem; font-style: italic;">Conception, simulation et test d'un système robotique médical simple (ex: bras de rééducation).</div>
      </div>
    </div>
  </div>
</section>

<section class="section-card">
  <div class="section-header">
    <div class="section-icon">📊</div>
    <h2 class="section-title">Modalités d'évaluation</h2>
  </div>
  
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-top: 1.5rem;">
    <div style="text-align: center; padding: 2rem 1rem; background: linear-gradient(135deg, var(--light-bg), white); border-radius: var(--border-radius); box-shadow: var(--card-shadow);">
      <span style="font-size: 3rem; font-weight: 700; color: var(--medical-color); display: block; margin-bottom: 0.5rem;">60%</span>
      <div style="font-weight: 600; color: var(--primary-color); margin-bottom: 0.5rem;">Note de rapport</div>
      <div style="font-size: 0.9rem; color: #666;">Projet pratique, analyse technique, documentation complète.</div>
    </div>
    
    <div style="text-align: center; padding: 2rem 1rem; background: linear-gradient(135deg, var(--light-bg), white); border-radius: var(--border-radius); box-shadow: var(--card-shadow);">
      <span style="font-size: 3rem; font-weight: 700; color: var(--medical-color); display: block; margin-bottom: 0.5rem;">40%</span>
      <div style="font-weight: 600; color: var(--primary-color); margin-bottom: 0.5rem;">Note de Classe</div>
      <div style="font-size: 0.9rem; color: #666;">Participation active, présentations, qualité des réalisations pratiques.</div>
    </div>
  </div>
</section>

<section class="section-card">
  <div class="section-header">
    <div class="section-icon">🔬</div>
    <h2 class="section-title">Applications pratiques</h2>
  </div>
  
  <div class="objectives-grid">
    <div class="objective-card" style="border-left-color: var(--medical-color);">
      <h4>🔬 Chirurgie mini-invasive</h4>
      <p>Simulation de procédures laparoscopiques avec robots Da Vinci, précision sub-millimétrique.</p>
    </div>
    <div class="objective-card" style="border-left-color: var(--medical-color);">
      <h4>🦴 Orthopédie robotisée</h4>
      <p>Planification et exécution robotisée de prothèses, robots de rééducation post-opératoire.</p>
    </div>
    <div class="objective-card" style="border-left-color: var(--medical-color);">
      <h4>🧠 Neurochirurgie assistée</h4>
      <p>Navigation stéréotaxique, stimulation cérébrale profonde, robots de biopsie.</p>
    </div>
    <div class="objective-card" style="border-left-color: var(--medical-color);">
      <h4>💊 Pharmacie automatisée</h4>
      <p>Robots de préparation et distribution médicamenteuse, traçabilité complète.</p>
    </div>
  </div>
</section>

<section class="section-card">
  <div class="section-header">
    <div class="section-icon">📚</div>
    <h2 class="section-title">Ressources et bibliographie</h2>
  </div>
  
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; margin-top: 2rem;">
    <div style="background: rgba(233, 30, 99, 0.1); backdrop-filter: blur(10px); padding: 2rem; border-radius: 16px; border: 1px solid rgba(233, 30, 99, 0.2);">
      <div style="font-size: 2.5rem; margin-bottom: 1rem; color: var(--medical-color);">📖</div>
      <h4 style="margin-bottom: 1rem; font-weight: 600;">Ouvrages spécialisés</h4>
      <ul>
        <li>Medical Robotics - Taylor & Stoianovici</li>
        <li>Handbook of Medical Robotics - Rosen & Hannaford</li>
        <li>Surgical Robotics - Troccaz</li>
      </ul>
    </div>
    
    <div style="background: rgba(233, 30, 99, 0.1); backdrop-filter: blur(10px); padding: 2rem; border-radius: 16px; border: 1px solid rgba(233, 30, 99, 0.2);">
      <div style="font-size: 2.5rem; margin-bottom: 1rem; color: var(--medical-color);">💻</div>
      <h4 style="margin-bottom: 1rem; font-weight: 600;">Outils de simulation</h4>
      <ul>
        <li>3D Slicer (imagerie médicale)</li>
        <li>SOFA (simulation soft robotics)</li>
        <li>CasADi (optimisation robotique)</li>
        <li>OpenIGTLink (communication temps réel)</li>
      </ul>
    </div>
    
    <div style="background: rgba(233, 30, 99, 0.1); backdrop-filter: blur(10px); padding: 2rem; border-radius: 16px; border: 1px solid rgba(233, 30, 99, 0.2);">
      <div style="font-size: 2.5rem; margin-bottom: 1rem; color: var(--medical-color);">🏛️</div>
      <h4 style="margin-bottom: 1rem; font-weight: 600;">Normes et certification</h4>
      <ul>
        <li>ISO 14155 (investigations cliniques)</li>
        <li>IEC 60601 (dispositifs médicaux électriques)</li>
        <li>FDA 510(k) (processus d'approbation)</li>
        <li>Marquage CE médical</li>
      </ul>
    </div>
  </div>
</section>

<section class="section-card">
  <div class="section-header">
    <div class="section-icon">📞</div>
    <h2 class="section-title">Contact & encadrement</h2>
  </div>
  
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: rgba(233, 30, 99, 0.1); border-radius: 12px;">
      <span style="font-size: 1.5rem; color: var(--medical-color);">👨‍🏫</span>
      <span><strong>Responsable du cours :</strong> Dr. Yinoussa Adagolodjo</span>
    </div>
    <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: rgba(233, 30, 99, 0.1); border-radius: 12px;">
      <span style="font-size: 1.5rem; color: var(--medical-color);">✉️</span>
      <span><strong>Email :</strong> Remplir formulaire de contact sur la page d'accueil</span>
    </div>
    <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: rgba(233, 30, 99, 0.1); border-radius: 12px;">
      <span style="font-size: 1.5rem; color: var(--medical-color);">🏢</span>
      <span><strong>Bureau :</strong> Bâtiment Polytech, Université de Lille</span>
    </div>
    <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: rgba(233, 30, 99, 0.1); border-radius: 12px;">
      <span style="font-size: 1.5rem; color: var(--medical-color);">⏰</span>
      <span><strong>Permanence :</strong> Sur rendez-vous (contact par email)</span>
    </div>
  </div>
</section>