# Formats, légendes et hashtags

> Les limites des plateformes changent souvent : vérifie-les dans l'interface d'upload en cas de doute. Les valeurs ci-dessous sont celles connues fin 2025 et les recommandations pratiques.

## Spécifications par format

| | YouTube (long) | YouTube Short | Instagram Reel | X (vidéo) |
|---|---|---|---|---|
| Ratio | 16:9 | 9:16 | 9:16 | 16:9 (1:1 et 9:16 acceptés) |
| Résolution | 1920×1080 (ou 3840×2160) | 1080×1920 | 1080×1920 | 1920×1080 (max 1920×1200) |
| Durée max | longue | 3 min | 3 min | 2 min 20 s (compte gratuit) |
| **Durée visée** | 8–20 min (tuto), 2–5 min (démo) | **15–45 s** | **15–45 s** | **10–45 s** |
| Cadence d'image | celle de la capture (30 ou 60) | 30 | 30 | 30 |
| Codec | H.264 High, yuv420p, AAC | idem | idem | idem, ≤ 512 Mo |
| Miniature | 1280×720, ≤ 2 Mo, JPG/PNG | image choisie dans la vidéo | couverture 1080×1920, sujet centré dans le 3:4 | — |
| Sous-titres | fichier SRT importé | texte incrusté | texte incrusté (ou sous-titres auto) | texte incrusté |
| Texte | titre ≤ 100 car., description ≤ 5000 | titre ≤ 100 car. | légende ≤ 2200 car. | 280 car. (compte gratuit) |
| Lien cliquable | description + commentaire épinglé | lien vers une vidéo associée | **lien en bio** uniquement | en **réponse** au post |

### Zones sûres en 9:16 (1080×1920)

Les interfaces recouvrent le haut (environ 250 px), le bas (environ 400 px : légende, nom du compte, musique) et le bord droit (environ 120 px : boutons). Il faut donc :

- garder le sujet de la simulation dans la bande centrale (environ y = 250 → 1500) ;
- placer un titre éventuel vers y = 300, et le watermark vers y = 1500 (le script le met à 420 px du bas) ;
- ne rien placer d'important sur la colonne de droite.

## Modèles de légende

### Reel / Short : simulation (EN par défaut + ligne FR)

```
{Accroche : ce qu'on voit, en une phrase}
{1 phrase : pourquoi c'est intéressant / quel modèle (Cosserat, FEM, contact…)}
{Si accéléré : "Video ×2."}

🇫🇷 {Résumé en une phrase}

🔗 More on adagolodjo.com (link in bio)
#SOFAFramework #SoftRobotics #MedicalRobotics #Simulation #{thème}
```

Exemple (Cosserat, sans aucun chiffre ni résultat) :

```
A slender soft robot modeled as a Cosserat rod, simulated in real time with SOFA.
Cosserat theory captures bending and twisting of thin structures with few degrees of freedom.

🇫🇷 Un robot souple modélisé par une poutre de Cosserat, simulé en temps réel avec SOFA.

🔗 Project page: adagolodjo.com (link in bio)
#SOFAFramework #SoftRobotics #Cosserat #ContinuumRobots #Simulation
```

### YouTube : tuto (titre + description)

```
Titre : SOFA #01 · Your first scene in Python (SofaPython3)

Description :
In this episode: {objectif en 1 phrase}.
Code: https://github.com/{dépôt}/tree/main/{dossier-épisode}
SOFA version: {vX.Y} · SofaPython3

00:00 Intro & final result
00:40 Scene setup
…     {chapitres : au moins 3, chacun ≥ 10 s}

📖 More tutorials & research: https://adagolodjo.com
🐦 X: https://x.com/Uhuru_Sim

#SOFAFramework #Simulation #Python
```

### YouTube Short / Reel : « papier en 30 s »

```
{Titre du papier}: {ce que montre la vidéo, en une phrase}.
📄 {Revue / conférence, année} · DOI {doi}
🔗 adagolodjo.com/publications
```

### X : post + réponse

Post (≤ 280 caractères, vidéo 16:9 jointe) :

```
{Accroche en 1 phrase}. Simulated in real time with #SOFAFramework.
{Mention des co-auteur·es / équipe si handles connus}
```

Réponse immédiate :

```
📄 Paper: https://doi.org/{doi}
🔗 Project: https://adagolodjo.com/research/projects/{slug}/
```

Pense au **texte alternatif** de la vidéo (accessibilité) : décris en une phrase ce que montre la simulation.

## Banque de hashtags

Instagram limite désormais fortement le nombre de hashtags par post (5 maximum depuis fin 2025, à vérifier dans l'app) : en choisir **3 à 5**, en commençant par les deux premiers ci-dessous. Sur YouTube, les 3 premiers hashtags de la description s'affichent au-dessus du titre. Sur X, en mettre 1 ou 2 au plus.

| Groupe | Hashtags |
|---|---|
| Socle (toujours) | `#SOFAFramework` `#SoftRobotics` |
| Thème | `#MedicalRobotics` `#SurgicalRobotics` `#Cosserat` `#ContinuumRobots` `#FEM` `#FiniteElements` `#RealTimeSimulation` `#Simulation` `#GrowingRobots` |
| Tutos | `#Python` `#OpenSource` `#ComputationalMechanics` `#RoboticsEducation` |
| FR (Instagram) | `#Robotique` `#RobotiqueMédicale` `#Recherche` `#Ingénierie` |

## Appel à l'action

- Partout : **adagolodjo.com**, en renvoyant si possible vers la page précise (projet, publication, tuto).
- Instagram : « link in bio » (bio = `https://adagolodjo.com`). Un lien de type « lien en bio » vers une page qui liste les contenus récents pourra venir plus tard avec la page Vidéos du site.
- YouTube : écran de fin (dernières 5–20 s) vers le prochain épisode et l'abonnement ; fiche (card) vers la playlist.
