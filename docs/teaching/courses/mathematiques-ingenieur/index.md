---
layout: page
title: Mathématiques pour l'ingénieur
subtitle: Mathématiques avancées avec applications pratiques en ingénierie
permalink: /teaching/courses/mathematiques-ingenieur/
image: /assets/images/projects/mathematiques-ingenieur.jpg
---

<style>
:root {
  --primary-color: #2c3e50;
  --secondary-color: #3498db;
  --accent-color: #e74c3c;
  --success-color: #27ae60;
  --warning-color: #f39c12;
  --math-color: #9b4dca;
  --light-bg: #f8f9fa;
  --card-shadow: 0 4px 20px rgba(0,0,0,0.08);
  --card-shadow-hover: 0 12px 40px rgba(0,0,0,0.15);
  --border-radius: 16px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.course-hero {
  background: linear-gradient(135deg, var(--math-color) 0%, var(--secondary-color) 100%);
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
  color: var(--math-color);
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
  background: linear-gradient(135deg, #e8f4f8, #d4edda);
  border-left: 4px solid var(--math-color);
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
    <h1>📐 Mathématiques pour l'ingénieur</h1>
    <p class="subtitle">Mathématiques avancées avec applications pratiques en ingénierie</p>
    <div class="hero-badges">
      <span class="hero-badge">🎓 Niveau Graduate</span>
      <span class="hero-badge">⏱️ 18.75h CM + 20h TP</span>
      <span class="hero-badge">🎯 Fondamentaux</span>
      <span class="hero-badge">📊 S2</span>
    </div>
  </div>
</div>

<section class="section-card">
  <div class="section-header">
    <div class="section-icon">📋</div>
    <h2 class="section-title">Présentation du cours</h2>
  </div>
  
  <p style="font-size: 1.1rem; line-height: 1.7; color: #555; margin-bottom: 2rem;">
    Ce cours propose une approche moderne des mathématiques avancées nécessaires à l'ingénieur, incluant les <strong>séries de Taylor</strong>, les <strong>équations différentielles</strong>, les <strong>séries de Fourier</strong> et les <strong>transformées de Fourier</strong>. L'accent est mis sur les applications pratiques en ingénierie, permettant aux étudiants de maîtriser les outils mathématiques essentiels pour la modélisation et l'analyse de systèmes complexes.
  </p>

  <div class="info-box">
    <h4>📊 Informations générales</h4>
    <p><strong>Code :</strong> DU-822110<br>
    <strong>Durée :</strong> 18.75h de cours magistraux + 20h de travaux pratiques<br>
    <strong>Semestre :</strong> S2<br>
    <strong>Niveau :</strong> Graduate<br>
    <strong>Évaluation :</strong> DS, Note de Classe, Note de TP</p>
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
      <h4>📈 Maîtriser les séries de Taylor</h4>
      <p>Développer et utiliser les séries de Taylor pour l'approximation de fonctions et l'analyse de comportements locaux.</p>
    </div>
    <div class="objective-card">
      <h4>🔍 Résoudre les équations différentielles</h4>
      <p>Appliquer les méthodes de résolution des équations différentielles ordinaires et aux dérivées partielles.</p>
    </div>
    <div class="objective-card">
      <h4>〰️ Utiliser les séries de Fourier</h4>
      <p>Décomposer des signaux périodiques en séries de Fourier et comprendre leurs applications en ingénierie.</p>
    </div>
    <div class="objective-card">
      <h4>🔄 Appliquer les transformées de Fourier</h4>
      <p>Utiliser les transformées de Fourier pour l'analyse fréquentielle et le traitement du signal.</p>
    </div>
    <div class="objective-card">
      <h4>🔧 Applications pratiques</h4>
      <p>Modéliser des problèmes d'ingénierie concrets : vibrations, circuits électriques, transfert de chaleur.</p>
    </div>
    <div class="objective-card">
      <h4>💻 Outils numériques</h4>
      <p>Utiliser MATLAB/Python pour les calculs mathématiques avancés et la visualisation.</p>
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
      <div style="font-weight: 600; color: var(--math-color); font-size: 1.1rem; margin-bottom: 0.5rem;">Chapitre 1 : Séries de Taylor et Applications</div>
      <div>
        <h4>Développements en série</h4>
        <div style="color: #666; font-size: 0.95rem; margin-top: 0.5rem; font-style: italic;">Théorème de Taylor, développements usuels, applications en approximation numérique, analyse d'erreurs.</div>
      </div>
    </div>
    
    <div class="timeline-item">
      <div style="font-weight: 600; color: var(--math-color); font-size: 1.1rem; margin-bottom: 0.5rem;">Chapitre 2 : Équations Différentielles Ordinaires</div>
      <div>
        <h4>Méthodes de résolution classiques</h4>
        <div style="color: #666; font-size: 0.95rem; margin-top: 0.5rem; font-style: italic;">EDO du 1er et 2nd ordre, méthodes de séparation des variables, équations linéaires, systèmes d'EDO.</div>
      </div>
    </div>
    
    <div class="timeline-item">
      <div style="font-weight: 600; color: var(--math-color); font-size: 1.1rem; margin-bottom: 0.5rem;">Chapitre 3 : Équations aux Dérivées Partielles</div>
      <div>
        <h4>EDP et applications physiques</h4>
        <div style="color: #666; font-size: 0.95rem; margin-top: 0.5rem; font-style: italic;">Équations de la chaleur, des ondes, de Laplace. Méthodes de séparation des variables.</div>
      </div>
    </div>
    
    <div class="timeline-item">
      <div style="font-weight: 600; color: var(--math-color); font-size: 1.1rem; margin-bottom: 0.5rem;">Chapitre 4 : Séries de Fourier</div>
      <div>
        <h4>Analyse harmonique</h4>
        <div style="color: #666; font-size: 0.95rem; margin-top: 0.5rem; font-style: italic;">Décomposition de signaux périodiques, convergence, applications en traitement du signal.</div>
      </div>
    </div>
    
    <div class="timeline-item">
      <div style="font-weight: 600; color: var(--math-color); font-size: 1.1rem; margin-bottom: 0.5rem;">Chapitre 5 : Transformées de Fourier</div>
      <div>
        <h4>Analyse fréquentielle</h4>
        <div style="color: #666; font-size: 0.95rem; margin-top: 0.5rem; font-style: italic;">Transformée de Fourier continue et discrète (FFT), applications en automatique et traitement d'images.</div>
      </div>
    </div>
    
    <div class="timeline-item">
      <div style="font-weight: 600; color: var(--math-color); font-size: 1.1rem; margin-bottom: 0.5rem;">Chapitre 6 : Applications en Ingénierie</div>
      <div>
        <h4>Cas d'études pratiques</h4>
        <div style="color: #666; font-size: 0.95rem; margin-top: 0.5rem; font-style: italic;">Modélisation de systèmes mécaniques, électriques, thermiques. Projets intégrés avec simulations numériques.</div>
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
      <span style="font-size: 3rem; font-weight: 700; color: var(--math-color); display: block; margin-bottom: 0.5rem;">40%</span>
      <div style="font-weight: 600; color: var(--primary-color); margin-bottom: 0.5rem;">Devoir Surveillé (DS)</div>
      <div style="font-size: 0.9rem; color: #666;">Examen écrit sur les concepts théoriques et exercices d'application.</div>
    </div>
    
    <div style="text-align: center; padding: 2rem 1rem; background: linear-gradient(135deg, var(--light-bg), white); border-radius: var(--border-radius); box-shadow: var(--card-shadow);">
      <span style="font-size: 3rem; font-weight: 700; color: var(--math-color); display: block; margin-bottom: 0.5rem;">35%</span>
      <div style="font-weight: 600; color: var(--primary-color); margin-bottom: 0.5rem;">Note de TP</div>
      <div style="font-size: 0.9rem; color: #666;">Travaux pratiques avec MATLAB/Python, projets numériques.</div>
    </div>
    
    <div style="text-align: center; padding: 2rem 1rem; background: linear-gradient(135deg, var(--light-bg), white); border-radius: var(--border-radius); box-shadow: var(--card-shadow);">
      <span style="font-size: 3rem; font-weight: 700; color: var(--math-color); display: block; margin-bottom: 0.5rem;">25%</span>
      <div style="font-weight: 600; color: var(--primary-color); margin-bottom: 0.5rem;">Note de Classe</div>
      <div style="font-size: 0.9rem; color: #666;">Participation, interrogations courtes, qualité du travail en séance.</div>
    </div>
  </div>
</section>

<section class="section-card">
  <div class="section-header">
    <div class="section-icon">📚</div>
    <h2 class="section-title">Ressources et bibliographie</h2>
  </div>
  
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; margin-top: 2rem;">
    <div style="background: rgba(155, 77, 202, 0.1); backdrop-filter: blur(10px); padding: 2rem; border-radius: 16px; border: 1px solid rgba(155, 77, 202, 0.2);">
      <div style="font-size: 2.5rem; margin-bottom: 1rem; color: var(--math-color);">📖</div>
      <h4 style="margin-bottom: 1rem; font-weight: 600;">Ouvrages de référence</h4>
      <ul>
        <li>Advanced Engineering Mathematics - Kreyszig</li>
        <li>Mathematical Methods for Engineers - Greenberg</li>
        <li>Fourier Analysis and Applications - Gasquet & Witomski</li>
      </ul>
    </div>
    
    <div style="background: rgba(155, 77, 202, 0.1); backdrop-filter: blur(10px); padding: 2rem; border-radius: 16px; border: 1px solid rgba(155, 77, 202, 0.2);">
      <div style="font-size: 2.5rem; margin-bottom: 1rem; color: var(--math-color);">💻</div>
      <h4 style="margin-bottom: 1rem; font-weight: 600;">Outils logiciels</h4>
      <ul>
        <li>MATLAB/Simulink (Symbolic Math Toolbox)</li>
        <li>Python (NumPy, SciPy, SymPy, Matplotlib)</li>
        <li>Mathematica (pour calcul symbolique)</li>
        <li>GeoGebra (visualisation)</li>
      </ul>
    </div>
    
    <div style="background: rgba(155, 77, 202, 0.1); backdrop-filter: blur(10px); padding: 2rem; border-radius: 16px; border: 1px solid rgba(155, 77, 202, 0.2);">
      <div style="font-size: 2.5rem; margin-bottom: 1rem; color: var(--math-color);">🔗</div>
      <h4 style="margin-bottom: 1rem; font-weight: 600;">Ressources en ligne</h4>
      <ul>
        <li>Khan Academy (Calculus & Differential Equations)</li>
        <li>MIT OpenCourseWare (18.03, 18.085)</li>
        <li>Paul's Online Math Notes</li>
        <li>Wolfram MathWorld</li>
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
    <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: rgba(155, 77, 202, 0.1); border-radius: 12px;">
      <span style="font-size: 1.5rem; color: var(--math-color);">👨‍🏫</span>
      <span><strong>Responsable du cours :</strong> Dr. Yinoussa Adagolodjo</span>
    </div>
    <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: rgba(155, 77, 202, 0.1); border-radius: 12px;">
      <span style="font-size: 1.5rem; color: var(--math-color);">✉️</span>
      <span><strong>Email :</strong> Remplir formulaire de contact sur la page d'accueil</span>
    </div>
    <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: rgba(155, 77, 202, 0.1); border-radius: 12px;">
      <span style="font-size: 1.5rem; color: var(--math-color);">🏢</span>
      <span><strong>Bureau :</strong> Bâtiment Polytech, Université de Lille</span>
    </div>
    <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: rgba(155, 77, 202, 0.1); border-radius: 12px;">
      <span style="font-size: 1.5rem; color: var(--math-color);">⏰</span>
      <span><strong>Permanence :</strong> Sur rendez-vous (contact par email)</span>
    </div>
  </div>
</section>