# Com « Uhuru Sim » : dossier de travail

Dossier hors `docs/` : il n'est pas publié par Jekyll.

| Fichier | Contenu |
|---|---|
| [01-strategie.md](01-strategie.md) | Rôle de chaque plateforme, ligne éditoriale, piliers, identité visuelle |
| [02-formats-legendes.md](02-formats-legendes.md) | Specs techniques par plateforme, modèles de légende, banque de hashtags |
| [03-workflow-production.md](03-workflow-production.md) | De la scène SOFA à la publication, commandes ffmpeg, checklist par vidéo |
| [04-calendrier.md](04-calendrier.md) | Calendrier éditorial : 8 semaines de publication (10 nov. 2026 → 14 janv. 2027, pause pendant les fêtes) |
| [05-tutos-sofa.md](05-tutos-sofa.md) | Trame d'un épisode, série proposée, dépôt des scènes |
| [scripts/reel.sh](scripts/reel.sh) | 16:9 → Reel/Short 9:16 (recadrage ou fond flouté, vitesse, boucle, watermark) |
| [scripts/watermark.py](scripts/watermark.py) | Génère le PNG « @Uhuru_Sim · adagolodjo.com » ou un titre |

## Comptes

| Plateforme | Compte | Statut site |
|---|---|---|
| YouTube | https://www.youtube.com/@Uhuru_Sim | intégré (header, footer, JSON-LD) |
| X | https://x.com/Uhuru_Sim | intégré (header, footer, JSON-LD, boutons de partage) |
| Instagram | **handle à fournir** | non intégré (ligne commentée dans `_config.yml`) |

## Hypothèses à valider

Ces points n'ont pas encore été confirmés. Les documents s'appuient dessus, mais tout est facile à ajuster :

- **Public** : d'abord la communauté SOFA et les chercheur·es en robotique souple ou médicale, ensuite les étudiant·es (tutos).
- **Langue** : anglais en premier (communauté internationale), avec une ligne de résumé en français sur Instagram et YouTube.
- **Rythme** : 1 reel par semaine (le même fichier sert de Reel Instagram et de Short YouTube, avec une déclinaison 16:9 pour X), puis 1 tuto long toutes les 2 semaines à partir de la semaine 4.
- **Vidéos disponibles** : à recenser. Chaque créneau du calendrier indique « source vidéo à identifier ».

## Questions ouvertes

1. Handle Instagram.
2. Les 4 vidéos YouTube liées dans `docs/_research/index.md` (`nxV17n9-dXY`, `4C5SBtlDz-c`, `0tMTJS7cuIg`, `DblTXsN8uEY`) : sur quelle chaîne sont-elles ? Peut-on les reprendre ou les republier ?
3. Contraintes de diffusion : validation par les financeurs ou partenaires, images cliniques, travaux non publiés.
4. Comptes à mentionner (SOFA, équipe DEFROST / Inria, Université de Lille, Polytech Lille) : donne-moi les handles exacts, je ne les invente pas.
5. Dépôt des tutos : nom et propriétaire (compte perso `adagolodjo` ou organisation).

## À noter

- La page Recherche affiche « 95% accuracy improvement » et « 50% faster procedures » (carte CONECT). Ne pas reprendre ces chiffres dans les posts sans pouvoir citer leur source.
- Le `PYTHONPATH` du shell (configuré pour SOFA) casse Pillow : lancer `watermark.py` avec `env -u PYTHONPATH python3.14 …`.
- Le ffmpeg Homebrew installé n'a ni `drawtext` ni `subtitles`. Voir la section « Sous-titres » de [03-workflow-production.md](03-workflow-production.md).
