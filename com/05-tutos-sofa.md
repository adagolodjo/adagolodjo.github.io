# Tutos SOFA : format et série

## Trame type d'un épisode (8–15 min)

| Bloc | Durée | Contenu |
|---|---|---|
| 1. Résultat final | 0:00–0:30 | La scène terminée qui tourne. « À la fin de cet épisode, vous saurez… » |
| 2. Objectif et prérequis | 0:30–1:00 | Notion abordée, épisode précédent, version de SOFA et plugins nécessaires |
| 3. Scène de départ | 1:00–2:00 | Le fichier `start.py` (fourni dans le dépôt) lancé dans runSofa |
| 4. Étapes | 2:00–10:00 | 3 à 5 étapes. À chaque étape : ajouter quelques lignes, lancer, montrer le changement. Code à l'écran en gros (police ≥ 18 pt, thème sombre) |
| 5. Pièges fréquents | ~1 min | 1 ou 2 erreurs typiques et leur message (composant manquant, `RequiredPlugin` oublié, solveur instable…) |
| 6. Rendu final et suite | dernière min | Récap en 3 points, défi pour le spectateur, annonce de l'épisode suivant, lien vers le dépôt et adagolodjo.com |

**Avant le tournage** : la scène finale (`scene.py`) est dans le dépôt et passe en mode batch (voir CI plus bas). Le tuto suit le code, pas l'inverse.

**Tournage** : OBS avec deux sources (éditeur de code + fenêtre runSofa) ; micro-cravate ou micro USB ; 1920×1080 à 30 fps. Une prise par étape, montage simple (coupes franches).

**Après** : chapitres YouTube = les blocs ci-dessus ; un Short de 30 s avec le résultat final et « tuto complet sur la chaîne » ; un post X avec le GIF ou clip du rendu + le lien vers la vidéo.

## Série proposée : « SOFA from scratch »

Progression du plus simple aux thèmes de recherche (Cosserat, robots souples, médical) :

| # | Titre | Notions | Plugins |
|---|---|---|---|
| 00 | Installer SOFA et SofaPython3, lancer une scène | binaires, `runSofa`, `PYTHONPATH`, mode batch | — |
| 01 | Première scène en Python | `createScene(rootNode)`, `RequiredPlugin`, boucle d'animation, solveur implicite + linéaire, `MechanicalObject`, masse, gravité | — |
| 02 | Un objet déformable (FEM) | maillage tétraédrique, `TetrahedronFEMForceField` (module de Young, coefficient de Poisson), conditions aux limites, mapping visuel | — |
| 03 | Collision et contact | pipeline de collision, `FreeMotionAnimationLoop`, solveur de contraintes, frottement | — |
| 04 | Un doigt souple actionné par câble | actionneur câble, modélisation d'un doigt silicone | SoftRobots |
| 05 | Contrôle par modèle inverse | effecteur, actionneurs, résolution QP | SoftRobots.Inverse |
| 06 | Poutres de Cosserat | discrétisation d'une tige, loi de comportement, mapping vers l'espace 3D | Cosserat |
| 07 | Interagir avec la simulation en Python | `Sofa.Core.Controller`, `onAnimateBeginEvent`, clavier, export de données | — |
| 08 | Cosserat + contact : vers l'insertion d'outils flexibles | couplage tige de Cosserat et environnement déformable | Cosserat |

Indiquer dans chaque épisode la **version de SOFA** utilisée. Les noms de composants changent d'une version à l'autre (par exemple `FixedConstraint`, renommé `FixedProjectiveConstraint` en v24.06) : un commentaire épinglé « mise à jour vX.Y » évite des questions récurrentes.

Plus tard, si l'audience suit : un épisode par thème de recherche (robot qui grandit par éversion, fantôme actif, aiguille…), quand le code peut être publié.

## Dépôt des scènes

**Recommandation : un dépôt GitHub public dédié**, par exemple `adagolodjo/sofa-tutorials` (nom et propriétaire à confirmer : compte personnel ou organisation).

```
sofa-tutorials/
├── README.md              # versions testées, installation, index des épisodes + liens YouTube
├── LICENSE                # par ex. MIT pour les scènes
├── common/                # petits utilitaires partagés (fond, caméra, couleurs du thème)
├── 00-install/
├── 01-first-scene/
│   ├── README.md          # objectif, commande de lancement, lien vidéo, capture
│   ├── start.py           # scène de départ de l'épisode
│   ├── scene.py           # scène finale
│   └── media/thumbnail.png
├── 02-fem/
│   └── mesh/…
└── .github/workflows/check.yml   # optionnel : lance chaque scene.py en batch
```

- **Une branche ou un tag par version de SOFA** (`sofa-v25.06`…) pour que les anciens épisodes restent reproductibles.
- **Vérification** : `runSofa -g batch -n 100 scene.py` ouvre la scène sans interface et fait 100 pas. Pratique en local avant chaque tournage ; en CI, ça demande une installation de SOFA sur le runner (plus lourd, à envisager plus tard).
- **Liens croisés** : README d'épisode → vidéo YouTube ; description YouTube → dossier exact de l'épisode ; site → page « Teaching » ou future page « Vidéos ».
- Les scènes de recherche (Cosserat…) gagnent à renvoyer vers les dépôts existants plutôt qu'à les copier : [SofaDefrost/Cosserat](https://github.com/SofaDefrost/Cosserat), [SofaDefrost/SoftRobots.Inverse](https://github.com/SofaDefrost/SoftRobots.Inverse), [sofa-framework/sofa](https://github.com/sofa-framework/sofa).
