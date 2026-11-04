# Stratégie de com : Uhuru Sim

## Positionnement

**Uhuru Sim** est la vitrine vidéo du travail de Dr Yinoussa Adagolodjo : simulation temps réel de robots souples et de robotique médicale avec SOFA (modèles éléments finis, poutres de Cosserat, contact, problèmes inverses).

- **Promesse** : « voir la mécanique des robots souples en mouvement, et apprendre à la simuler soi-même ».
- **Ton** : précis, pédagogique, sans survente. On montre ce que fait la simulation, on cite le papier quand il existe, et on signale toute accélération vidéo (« ×2 »).
- **Point d'arrivée** : chaque contenu renvoie vers **adagolodjo.com** (projet, publication, tuto).

Bio suggérée (à adapter, environ 150 caractères) :

> Real-time simulation of soft & medical robots with SOFA 🧪🤖 · Tutorials & research by Dr Y. Adagolodjo (Univ. Lille) · adagolodjo.com

## Rôle de chaque plateforme

| Plateforme | Rôle | Format principal | Ce qu'on y met |
|---|---|---|---|
| **YouTube** | Bibliothèque de référence, référencement à long terme | Vidéos 16:9 + Shorts 9:16 | Tutos SOFA (8–20 min), démos longues de projets, Shorts = reels repris. Playlists par thème. |
| **Instagram** | Découverte visuelle, audience plus large et étudiante | Reels 9:16 | Le reel de la semaine, carrousels « coulisses » ou « papier en 5 images ». Lien en bio vers adagolodjo.com. |
| **X** | Conversation avec la communauté scientifique | Clip 16:9 natif (≤ 2:20) + texte court | Clip + une phrase sur l'idée clé, puis en réponse le lien HAL/DOI et la page du site (les liens dans le post principal réduisent la portée). Mentions des co-auteur·es et des labos. |

**Principe « 1 capture → 3 sorties »** : une capture SOFA donne un master 16:9 (YouTube, X), un 9:16 (Reel/Short) et une miniature. Voir [03-workflow-production.md](03-workflow-production.md).

## Piliers de contenu

| Pilier | Part | Exemples | Plateformes |
|---|---|---|---|
| 1. **Reels de simulation** | ~50 % | Cosserat qui se plie, robot à câbles, robot qui pousse par éversion, insertion d'aiguille | IG Reel, YT Short, X |
| 2. **Tutos SOFA** | ~20 % | Série « SOFA from scratch » (voir [05-tutos-sofa.md](05-tutos-sofa.md)) | YT long + extrait de 30 s en Short/Reel, X |
| 3. **Publications** | ~15 % | « Ce papier en 30 s » : vidéo + titre + lien DOI/HAL | X (fil), YT Short, IG carrousel |
| 4. **Coulisses** | ~15 % | Banc d'essai, prototype silicone, cours à Polytech, conférence | IG (stories/reels), X |

Règle de rédaction : on ne présente que des résultats publiés ou déjà visibles sur le site. Pour un travail en cours, on écrit « work in progress » et on ne donne aucun chiffre.

## Identité visuelle

Palette du site (`docs/assets/css/partials/_variables.scss`) :

| Rôle | Couleur |
|---|---|
| Fond sombre (bandeaux, cartouches) | `#013A3C` Dark Ocean |
| Primaire | `#016064` Ocean |
| Secondaire | `#48AAAD` Teal |
| Accent (textes, handle) | `#5CC8CB` Light Teal |

- **Watermark** : cartouche arrondi `#013A3C` (opacité ~75 %) avec le texte `@Uhuru_Sim · adagolodjo.com` en `#5CC8CB`, généré par `scripts/watermark.py`. Il se place en bas à gauche, au-dessus de la zone de légende des apps.
- **Fond des scènes SOFA** : uni et sombre, idéalement proche de `#013A3C` ou noir. Le logo SOFA en damier de l'interface reste acceptable, mais un fond uni est plus lisible en 9:16.
- **Miniatures YouTube** (1280×720) : une image forte de la simulation à gauche ; à droite, au plus 4 mots en `#5CC8CB` sur `#013A3C` ; le numéro d'épisode pour les tutos (« SOFA #03 »). Même gabarit pour toute la série.
- **Couverture des Reels** : première image lisible + titre court, centré dans la zone 3:4 (la grille Instagram recadre en 3:4).
- **Avatar** : le même sur les trois comptes. Le monogramme « YA » du site est une option.
- **Typographie** : sans empattement et grasse dans les vidéos (Arial Bold, utilisée par le script) pour la lisibilité sur mobile.

## Animation de la communauté

- Répondre aux commentaires dans les 48 h, surtout les questions techniques sur SOFA : elles fournissent des idées de tutos.
- Épingler en commentaire YouTube le lien vers la scène (dépôt GitHub) et vers la page du projet.
- Mentionner les co-auteur·es, l'équipe et les projets partenaires (handles à collecter, voir README).
- Recycler : chaque tuto long → 2 Shorts ; chaque papier → 1 reel + 1 fil X.

## Indicateurs (à relever une fois par mois)

- YouTube : vues, **durée moyenne de visionnage** et rétention à 30 s, abonné·es, clics vers le site (dans les fiches).
- Instagram : vues des Reels, partages, enregistrements, clics sur le lien en bio.
- X : impressions, engagements, clics sur le lien en réponse.
- Site : si un outil d'analyse est en place, suivre les visites avec des paramètres UTM, par exemple `?utm_source=youtube&utm_medium=social&utm_campaign=tuto01`.
