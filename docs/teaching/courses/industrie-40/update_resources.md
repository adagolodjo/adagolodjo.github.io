# Mise à jour des ressources du cours Industrie 4.0

Ce fichier contient les instructions pour mettre à jour les liens vers les ressources du cours.

## Links des ressources par partie

### Partie 1 : Introduction à l'Industrie 4.0 ✅
- **Lien actuel** : https://nextcloud.univ-lille.fr/index.php/s/PLiRRWmcHcE62jJ
- **Statut** : Disponible
- **Contenu** : PDF des supports + exercices

### Partie 2 : Systèmes Cyber-Physiques (CPS) ⏳
- **Lien futur** : À définir
- **Statut** : En préparation
- **Contenu prévu** : Architecture, intégration et surveillance en temps réel

### Partie 3 : Internet des Objets (IoT) Industriel ⏳
- **Lien futur** : À définir
- **Statut** : En préparation
- **Contenu prévu** : IIoT, réseaux de capteurs et protocoles de communication

### Partie 4 : Analyse de données et IA ⏳
- **Lien futur** : À définir
- **Statut** : En préparation
- **Contenu prévu** : Big data, apprentissage automatique et maintenance prédictive

## Comment mettre à jour

Pour ajouter un nouveau lien, remplacer dans le fichier `index.md` :

### Pour la partie 2 (exemple) :
```html
<!-- Remplacer cette section -->
<div class="timeline-item" style="margin-left: 0; border-left: 4px solid #95a5a6; background: rgba(149, 165, 166, 0.1); opacity: 0.7;">
  <h4 style="display: flex; align-items: center; gap: 0.5rem; color: #7f8c8d;">
    <span>🔧</span> Partie 2 : Systèmes Cyber-Physiques (CPS)
  </h4>
  <p>Architecture, intégration et surveillance en temps réel</p>
  <div style="margin-top: 1rem;">
    <span style="display: inline-flex; background: #95a5a6; color: white; padding: 0.75rem 1.5rem; border-radius: 8px; font-weight: 500;">
      <span style="margin-right: 0.5rem;">⏳</span>
      Bientôt disponible
    </span>
  </div>
</div>

<!-- Par cette section -->
<div class="timeline-item" style="margin-left: 0; border-left: 4px solid var(--industry-color); background: linear-gradient(135deg, rgba(230, 126, 34, 0.1), rgba(230, 126, 34, 0.05));">
  <h4 style="display: flex; align-items: center; gap: 0.5rem; color: var(--industry-color);">
    <span>🔧</span> Partie 2 : Systèmes Cyber-Physiques (CPS)
  </h4>
  <p>Architecture, intégration et surveillance en temps réel</p>
  <div style="margin-top: 1rem;">
    <a href="NOUVEAU_LIEN_ICI" 
       class="nav-link" 
       style="display: inline-flex; background: var(--industry-color); color: white; text-decoration: none; padding: 0.75rem 1.5rem; border-radius: 8px; font-weight: 500; transition: var(--transition);" 
       target="_blank" 
       rel="noopener noreferrer">
      <span style="margin-right: 0.5rem;">📥</span>
      Télécharger les supports (PDF + exercices)
    </a>
  </div>
</div>
```

## Format des liens Nextcloud

Les liens Nextcloud de l'Université de Lille suivent généralement ce format :
`https://nextcloud.univ-lille.fr/index.php/s/[CODE_DE_PARTAGE]`

Assurez-vous que les liens :
- Sont accessibles avec les identifiants universitaires
- Contiennent les ressources appropriées (PDF, exercices, données)
- Respectent les règles de confidentialité de l'université