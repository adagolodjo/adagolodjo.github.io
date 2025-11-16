---
layout: page
title: DU-812170 - Culture Numérique et Sécurité des Données
subtitle: Culture numérique et sécurité des données
permalink: /teaching/courses/du-812170/
image: /assets/images/projects/robotique.jpg
---

<style>
:root {
  --primary-color: #2c3e50;
  --secondary-color: #3498db;
  --accent-color: #e74c3c;
  --success-color: #27ae60;
  --warning-color: #f39c12;
  --digital-color: #9b59b6;
  --light-bg: #f8f9fa;
  --card-shadow: 0 4px 20px rgba(0,0,0,0.08);
  --card-shadow-hover: 0 12px 40px rgba(0,0,0,0.15);
  --border-radius: 16px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.course-hero {
  background: linear-gradient(135deg, var(--digital-color) 0%, var(--secondary-color) 100%);
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

.course-nav {
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  padding: 1.5rem;
  margin-bottom: 2rem;
  position: sticky;
  top: 20px;
  z-index: 100;
}

.nav-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.nav-link {
  padding: 0.75rem 1.5rem;
  background: var(--light-bg);
  color: var(--primary-color);
  text-decoration: none;
  border-radius: 25px;
  font-weight: 500;
  transition: var(--transition);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-link:hover, .nav-link.active {
  background: var(--secondary-color);
  color: white;
  transform: translateY(-2px);
}

.section-card {
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  padding: 2.5rem;
  margin-bottom: 2rem;
  transition: var(--transition);
}

.section-card:hover {
  box-shadow: var(--card-shadow-hover);
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
  color: var(--digital-color);
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

.objective-card h4 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.module-card {
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  padding: 2rem;
  border-radius: var(--border-radius);
  border-left: 4px solid var(--digital-color);
  margin: 2rem 0;
  transition: var(--transition);
}

.module-card:hover {
  transform: translateX(8px);
  box-shadow: var(--card-shadow);
}

.module-title {
  color: var(--digital-color);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.info-box {
  background: linear-gradient(135deg, #e8f4f8, #d4edda);
  border-left: 4px solid var(--digital-color);
  padding: 1.5rem;
  border-radius: 8px;
  margin: 2rem 0;
}

.info-box h4 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.warning-box {
  background: linear-gradient(135deg, #fff3e0, #ffecb3);
  border-left: 4px solid var(--warning-color);
  padding: 1.5rem;
  border-radius: 8px;
  margin: 2rem 0;
}

.warning-box h4 {
  color: var(--warning-color);
  margin-bottom: 1rem;
}

.checklist {
  list-style: none;
  padding: 0;
}

.checklist li {
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

.checklist li:last-child {
  border-bottom: none;
}

.checklist li::before {
  content: "✓";
  color: var(--success-color);
  font-weight: bold;
  margin-right: 0.5rem;
}

@keyframes float {
  0% { transform: translateX(-50px); }
  100% { transform: translateX(calc(100vw + 50px)); }
}

@media (max-width: 768px) {
  .course-hero h1 {
    font-size: 2.5rem;
  }
  
  .nav-links {
    justify-content: flex-start;
    overflow-x: auto;
    padding-bottom: 0.5rem;
  }
}
</style>

<div class="course-hero">
  <div class="course-hero-content">
    <h1>💻 Culture Numérique et Sécurité des Données</h1>
    <p class="subtitle">DU-812170 - Formation Continue / Première année cycle ingénieur</p>
    <div class="hero-badges">
      <span class="hero-badge">📚 DU-812170</span>
      <span class="hero-badge">⏱️ 5h TP</span>
      <span class="hero-badge">📅 Semestre 2</span>
      <span class="hero-badge">🔒 Cybersécurité</span>
      <span class="hero-badge">🛡️ RGPD</span>
    </div>
  </div>
</div>

<nav class="course-nav">
  <div class="nav-links">
    <a href="#presentation" class="nav-link active">📋 Présentation</a>
    <a href="#objectifs" class="nav-link">🎯 Objectifs</a>
    <a href="#programme" class="nav-link">📚 Programme</a>
    <a href="#competences" class="nav-link">🔧 Compétences</a>
    <a href="#ressources" class="nav-link">📚 Ressources</a>
  </div>
</nav>

<section id="presentation" class="section-card">
  <div class="section-header">
    <div class="section-icon">📋</div>
    <h2 class="section-title">Présentation du cours</h2>
  </div>
  
  <p style="font-size: 1.1rem; line-height: 1.7; color: #555; margin-bottom: 2rem;">
    Ce cours vise à former les futurs ingénieurs aux enjeux essentiels de la <strong>culture numérique</strong> et de la <strong>sécurité des données</strong>. Dans un monde où les technologies numériques sont omniprésentes, il est crucial de comprendre les risques, les possibilités et les responsabilités liées à l'utilisation des outils numériques.
  </p>

  <div class="info-box">
    <h4>📊 Informations générales</h4>
    <p><strong>Code :</strong> DU-812170<br>
    <strong>Niveau :</strong> Formation Continue / Première année cycle ingénieur<br>
    <strong>Semestre :</strong> S2<br>
    <strong>Volume :</strong> 5 heures de travaux pratiques<br>
    <strong>Évaluation :</strong> Note de Projet et Évaluation en classe</p>
    
    <div style="margin-top: 1.5rem; padding: 1rem; background: rgba(155, 89, 182, 0.1); border-radius: 8px; border-left: 4px solid var(--digital-color);">
      <h5 style="color: var(--digital-color); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
        📄 Support de Cours Complet
      </h5>
      <p style="margin-bottom: 1rem; font-size: 0.95rem;">Le document PDF complet avec toutes les notions, exemples et exercices est disponible :</p>
      <a href="https://nextcloud.univ-lille.fr/index.php/s/ZzpAcRjbzEgeoYF" 
         target="_blank" 
         rel="noopener noreferrer"
         style="display: inline-flex; align-items: center; gap: 0.5rem; background: #2c3e50; color: white; padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; font-weight: 600; transition: var(--transition); box-shadow: 0 2px 8px rgba(44, 62, 80, 0.3);"
         onmouseover="this.style.background='#1a252f'; this.style.transform='translateY(-2px)'" 
         onmouseout="this.style.background='#2c3e50'; this.style.transform='translateY(0)'">
        📥 Accéder au PDF du cours (Nextcloud)
      </a>
    </div>
  </div>
</section>

<section id="objectifs" class="section-card">
  <div class="section-header">
    <div class="section-icon">🎯</div>
    <h2 class="section-title">Objectifs pédagogiques</h2>
  </div>

  <p style="font-size: 1.05rem; margin-bottom: 2rem; color: #555;">
    <strong>À l'issue de ce cours, vous serez capable de :</strong>
  </p>

  <div class="objectives-grid">
    <div class="objective-card">
      <h4>🛡️ Identifier les risques numériques</h4>
      <p>Être conscient des risques personnels, de confidentialité, économiques et sociétaux liés aux outils numériques.</p>
    </div>
    <div class="objective-card">
      <h4>💾 Comprendre les données</h4>
      <p>Appréhender la nature des données, leur cycle de vie et leur impact sur la société.</p>
    </div>
    <div class="objective-card">
      <h4>📜 Appliquer la charte SIAG</h4>
      <p>Connaître, comprendre et appliquer la charte de l'université sur les Systèmes d'Information.</p>
    </div>
    <div class="objective-card">
      <h4>🤖 Comprendre l'IA et les algorithmes</h4>
      <p>Disposer des connaissances pour appréhender le fonctionnement des ordinateurs, algorithmes et IA.</p>
    </div>
    <div class="objective-card">
      <h4>🔍 Choisir ses outils de manière raisonnée</h4>
      <p>Sélectionner des outils numériques adaptés et justifier ses choix de manière argumentée.</p>
    </div>
    <div class="objective-card">
      <h4>🧠 Développer son esprit critique</h4>
      <p>Reconnaître les biais cognitifs, la désinformation et adopter une posture critique face au numérique.</p>
    </div>
  </div>
</section>

<section id="programme" class="section-card">
  <div class="section-header">
    <div class="section-icon">📚</div>
    <h2 class="section-title">Programme du cours</h2>
  </div>

  <div class="module-card">
    <div class="module-title">
      <span>💻</span> Module 1 : Fondamentaux du Numérique et Nature des Données
    </div>
    <p><strong>Objectifs :</strong> Appréhender le fonctionnement des ordinateurs, des algorithmes et de l'IA. Comprendre la nature des données et leur impact.</p>
    
    <h4 style="color: var(--primary-color); margin-top: 1.5rem; margin-bottom: 1rem;">Contenu détaillé :</h4>
    
    <div style="margin-bottom: 1rem;">
      <h5 style="color: var(--digital-color); margin-bottom: 0.5rem;">1. Architecture et Systèmes</h5>
      <ul>
        <li>Composants d'un ordinateur (CPU, RAM, Stockage)</li>
        <li>Rôle du système d'exploitation (OS)</li>
        <li>Principes de base des réseaux (Internet, adresses IP, DNS)</li>
      </ul>
    </div>
    
    <div style="margin-bottom: 1rem;">
      <h5 style="color: var(--digital-color); margin-bottom: 0.5rem;">2. Algorithmique et Programmation</h5>
      <ul>
        <li>Qu'est-ce qu'un algorithme ?</li>
        <li>Exemples concrets et impact sur la vie quotidienne</li>
        <li>Introduction aux langages de programmation (sans programmation active)</li>
      </ul>
    </div>
    
    <div style="margin-bottom: 1rem;">
      <h5 style="color: var(--digital-color); margin-bottom: 0.5rem;">3. Introduction à l'Intelligence Artificielle</h5>
      <ul>
        <li>Définitions : IA, Machine Learning, Deep Learning</li>
        <li>Exemples d'applications (reconnaissance d'image, traduction)</li>
        <li>Limites et potentiels</li>
      </ul>
    </div>
    
    <div>
      <h5 style="color: var(--digital-color); margin-bottom: 0.5rem;">4. La Donnée</h5>
      <ul>
        <li>Cycle de vie d'une donnée (création, stockage, traitement, suppression)</li>
        <li>Données personnelles, sensibles, anonymes</li>
        <li>Notion de métadonnées</li>
      </ul>
    </div>
  </div>

  <div class="module-card">
    <div class="module-title">
      <span>⚠️</span> Module 2 : Risques, Menaces et Biais Cognitifs
    </div>
    <p><strong>Objectifs :</strong> Être conscient des risques (personnels, confidentialité, économiques, sociétaux) et de ses propres biais cognitifs.</p>
    
    <h4 style="color: var(--primary-color); margin-top: 1.5rem; margin-bottom: 1rem;">Contenu détaillé :</h4>
    
    <div style="margin-bottom: 1rem;">
      <h5 style="color: var(--digital-color); margin-bottom: 0.5rem;">1. Cybersécurité et Menaces</h5>
      <ul>
        <li>Ingénierie sociale et hameçonnage (phishing)</li>
        <li>Logiciels malveillants (virus, rançongiciels)</li>
        <li>Importance des mises à jour et des mots de passe robustes</li>
      </ul>
    </div>
    
    <div style="margin-bottom: 1rem;">
      <h5 style="color: var(--digital-color); margin-bottom: 0.5rem;">2. Protection de la Vie Privée</h5>
      <ul>
        <li>Identité numérique et empreinte digitale</li>
        <li>Modèles économiques des plateformes (capitalisme de surveillance)</li>
        <li>Paramétrage de la confidentialité sur les réseaux sociaux et navigateurs</li>
      </ul>
    </div>
    
    <div style="margin-bottom: 1rem;">
      <h5 style="color: var(--digital-color); margin-bottom: 0.5rem;">3. Désinformation et Esprit Critique</h5>
      <ul>
        <li>Reconnaître une fausse information (fake news)</li>
        <li>Bulles de filtres et chambres d'écho</li>
      </ul>
    </div>
    
    <div>
      <h5 style="color: var(--digital-color); margin-bottom: 0.5rem;">4. Biais Cognitifs</h5>
      <ul>
        <li>Présentation des biais courants (confirmation, disponibilité, etc.)</li>
        <li>Comment les algorithmes peuvent amplifier ces biais</li>
      </ul>
    </div>
  </div>

  <div class="module-card">
    <div class="module-title">
      <span>🔧</span> Module 3 : Outils Numériques et Responsabilité
    </div>
    <p><strong>Objectifs :</strong> Choisir de manière raisonnée ses outils numériques et être capable de justifier son choix.</p>
    
    <h4 style="color: var(--primary-color); margin-top: 1.5rem; margin-bottom: 1rem;">Contenu détaillé :</h4>
    
    <div style="margin-bottom: 1rem;">
      <h5 style="color: var(--digital-color); margin-bottom: 0.5rem;">1. Écosystèmes Logiciels</h5>
      <ul>
        <li>Logiciels libres (Open Source) vs. Logiciels propriétaires</li>
        <li>Licences et droits d'usage</li>
      </ul>
    </div>
    
    <div style="margin-bottom: 1rem;">
      <h5 style="color: var(--digital-color); margin-bottom: 0.5rem;">2. Services en Ligne (Cloud)</h5>
      <ul>
        <li>Analyse des offres GAFAM (Google, Apple, Facebook, Amazon, Microsoft)</li>
        <li>Alternatives respectueuses de la vie privée (Proton, Framasoft, etc.)</li>
      </ul>
    </div>
    
    <div>
      <h5 style="color: var(--digital-color); margin-bottom: 0.5rem;">3. Critères de Choix d'un Outil</h5>
      <ul>
        <li>Grille d'analyse : Sécurité, Pérennité, Interopérabilité, Éthique, Coût</li>
        <li>Mise en situation : choisir un outil pour un projet d'ingénieur</li>
      </ul>
    </div>
  </div>

  <div class="module-card">
    <div class="module-title">
      <span>📜</span> Module 4 : Cadre Légal et Charte Universitaire
    </div>
    <p><strong>Objectifs :</strong> Connaître, comprendre et appliquer la charte de l'université sur les SIAG.</p>
    
    <h4 style="color: var(--primary-color); margin-top: 1.5rem; margin-bottom: 1rem;">Contenu détaillé :</h4>
    
    <div style="margin-bottom: 1rem;">
      <h5 style="color: var(--digital-color); margin-bottom: 0.5rem;">1. Règlement Général sur la Protection des Données (RGPD)</h5>
      <ul>
        <li>Principes clés (consentement, droit à l'oubli, etc.)</li>
        <li>Impact pour l'utilisateur et le futur ingénieur</li>
      </ul>
    </div>
    
    <div>
      <h5 style="color: var(--digital-color); margin-bottom: 0.5rem;">2. Charte du bon usage des Systèmes d'Information et des Applications de Gestion (SIAG)</h5>
      <ul>
        <li>Lecture et analyse de la charte SIAG de l'Université de Lille</li>
        <li>Droits et devoirs de l'étudiant</li>
        <li>Études de cas pratiques sur l'usage des ressources informatiques de l'université</li>
      </ul>
    </div>
  </div>

  <div class="module-card">
    <div class="module-title">
      <span>🤖</span> Module 5 : Ma Minute Prompte - L'IA Générative pour l'Ingénieur de Demain
    </div>
    <p><strong>Objectifs :</strong> Maîtriser les fondamentaux de l'IA générative et du prompt engineering pour optimiser son usage professionnel des outils d'intelligence artificielle.</p>
    
    <h4 style="color: var(--primary-color); margin-top: 1.5rem; margin-bottom: 1rem;">Contenu détaillé :</h4>
    
    <div style="margin-bottom: 1rem;">
      <h5 style="color: var(--digital-color); margin-bottom: 0.5rem;">1. Introduction à l'IA Générative</h5>
      <ul>
        <li>Comprendre les modèles de langage (LLMs) et leur fonctionnement</li>
        <li>Panorama des outils d'IA générative (ChatGPT, Claude, Gemini, etc.)</li>
        <li>Applications concrètes dans l'ingénierie</li>
        <li>Limites et considérations éthiques</li>
      </ul>
    </div>
    
    <div style="margin-bottom: 1rem;">
      <h5 style="color: var(--digital-color); margin-bottom: 0.5rem;">2. Techniques de Prompt Engineering</h5>
      <ul>
        <li>Principes de base d'un prompt efficace</li>
        <li>Structure et formulation des requêtes</li>
        <li>Techniques avancées : few-shot learning, chain-of-thought</li>
        <li>Itération et raffinement des prompts</li>
      </ul>
    </div>
    
    <div style="margin-bottom: 1rem;">
      <h5 style="color: var(--digital-color); margin-bottom: 0.5rem;">3. Cas d'Usage pour l'Ingénieur</h5>
      <ul>
        <li>Aide à la rédaction technique et documentation</li>
        <li>Analyse et débogage de code</li>
        <li>Génération d'idées et brainstorming</li>
        <li>Résumé et synthèse d'informations techniques</li>
      </ul>
    </div>
    
    <div>
      <h5 style="color: var(--digital-color); margin-bottom: 0.5rem;">4. Bonnes Pratiques et Responsabilité</h5>
      <ul>
        <li>Vérification et validation des résultats</li>
        <li>Protection des données sensibles</li>
        <li>Propriété intellectuelle et droits d'auteur</li>
        <li>Usage éthique et transparent de l'IA</li>
      </ul>
    </div>
    
    <div style="margin-top: 1.5rem; padding: 1rem; background: rgba(155, 89, 182, 0.1); border-radius: 8px; border-left: 4px solid var(--digital-color);">
      <h5 style="color: var(--digital-color); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
        📄 Support de cours Module 5
      </h5>
      <p style="margin-bottom: 1rem; font-size: 0.95rem;">Document PDF détaillé sur l'IA générative et le prompt engineering :</p>
      <a href="https://nextcloud.univ-lille.fr/index.php/s/EsZQd6gipb8dstp" 
         target="_blank" 
         rel="noopener noreferrer"
         style="display: inline-flex; align-items: center; gap: 0.5rem; background: #9b59b6; color: white; padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; font-weight: 600; transition: var(--transition); box-shadow: 0 2px 8px rgba(155, 89, 182, 0.3);"
         onmouseover="this.style.background='#8e44ad'; this.style.transform='translateY(-2px)'" 
         onmouseout="this.style.background='#9b59b6'; this.style.transform='translateY(0)'">
        📥 Télécharger le PDF du Module 5
      </a>
    </div>
  </div>
</section>

<section id="competences" class="section-card">
  <div class="section-header">
    <div class="section-icon">🔧</div>
    <h2 class="section-title">Compétences développées</h2>
  </div>

  <div class="objectives-grid">
    <div class="objective-card">
      <h4>🌐 Écosystème numérique</h4>
      <p>Compréhension globale de l'environnement numérique et de ses enjeux techniques et sociétaux.</p>
    </div>
    <div class="objective-card">
      <h4>🔒 Sécurité des données</h4>
      <p>Maîtrise des enjeux de cybersécurité et protection des données personnelles.</p>
    </div>
    <div class="objective-card">
      <h4>📋 Application du RGPD</h4>
      <p>Connaissance pratique des principes de protection des données et conformité réglementaire.</p>
    </div>
    <div class="objective-card">
      <h4>✅ Bonnes pratiques</h4>
      <p>Adoption de comportements sécurisés et responsables dans l'usage du numérique.</p>
    </div>
    <div class="objective-card">
      <h4>🧠 Esprit critique</h4>
      <p>Capacité d'analyse et de discernement face à l'information numérique et aux biais.</p>
    </div>
    <div class="objective-card">
      <h4>🎯 Choix d'outils</h4>
      <p>Capacité à évaluer et sélectionner des outils numériques de manière éclairée et argumentée.</p>
    </div>
  </div>
</section>

<section id="ressources" class="section-card">
  <div class="section-header">
    <div class="section-icon">📚</div>
    <h2 class="section-title">Ressources et documents</h2>
  </div>

  <div class="objectives-grid">
    <div class="objective-card">
      <h4>📄 Support de cours officiel</h4>
      <p>Accédez au document PDF complet du cours avec toutes les notions détaillées :</p>
      <a href="https://nextcloud.univ-lille.fr/index.php/s/ZzpAcRjbzEgeoYF" 
         target="_blank" 
         rel="noopener noreferrer"
         style="display: inline-flex; align-items: center; gap: 0.5rem; background: #2c3e50; color: white; padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; font-weight: 600; margin-top: 1rem; transition: var(--transition); box-shadow: 0 2px 8px rgba(44, 62, 80, 0.2);"
         onmouseover="this.style.background='#1a252f'" 
         onmouseout="this.style.background='#2c3e50'">
        📥 Télécharger le PDF
      </a>
    </div>
    <div class="objective-card">
      <h4>📖 Références</h4>
      <ul>
        <li>Charte SIAG de l'Université de Lille</li>
        <li>Guide RGPD de la CNIL</li>
        <li>Ressources ANSSI (Agence Nationale de la Sécurité des Systèmes d'Information)</li>
        <li>Plateforme Pix pour l'évaluation des compétences numériques</li>
      </ul>
    </div>
    <div class="objective-card">
      <h4>🔗 Ressources complémentaires</h4>
      <ul>
        <li>CNIL : Comprendre le RGPD</li>
        <li>Cybermalveillance.gouv.fr</li>
        <li>Framasoft : Alternatives libres</li>
        <li>Privacy Tools : Outils de protection</li>
      </ul>
    </div>
    <div class="objective-card">
      <h4>💡 Conseils pratiques</h4>
      <ul>
        <li>Activer l'authentification à deux facteurs</li>
        <li>Utiliser un gestionnaire de mots de passe</li>
        <li>Vérifier les sources d'information</li>
        <li>Configurer la confidentialité de ses comptes</li>
      </ul>
    </div>
  </div>

  <div class="info-box">
    <h4>🎓 Applications pour les futurs ingénieurs</h4>
    <p><strong>Les compétences de ce cours sont essentielles pour :</strong></p>
    <ul>
      <li><strong>Projets industriels :</strong> Gérer la sécurité des données techniques et de production</li>
      <li><strong>Conformité :</strong> Respecter les normes RGPD dans les développements logiciels</li>
      <li><strong>Cybersécurité :</strong> Protéger les systèmes industriels et données sensibles</li>
      <li><strong>Innovation responsable :</strong> Concevoir des solutions éthiques et respectueuses de la vie privée</li>
      <li><strong>Management :</strong> Sensibiliser les équipes aux bonnes pratiques numériques</li>
    </ul>
  </div>
</section>

---

## 📞 Contact & encadrement

<div style="background: var(--primary-color); color: white; padding: 2rem; border-radius: var(--border-radius); margin-top: 2rem;">
  <p><strong>👨‍🏫 Responsable du cours :</strong> Dr. Yinoussa Adagolodjo</p>
  <p><strong>✉️ Email :</strong> Utiliser le formulaire de contact sur la page d'accueil</p>
  <p><strong>🏢 Bureau :</strong> Bâtiment Polytech, Université de Lille</p>
  <p><strong>⏰ Permanence :</strong> Sur rendez-vous (contact par email)</p>
</div>

---

*Ce cours constitue une base essentielle pour tout futur ingénieur évoluant dans un monde numérique. Les compétences acquises sont transversales et applicables dans tous les domaines de l'ingénierie moderne.*
