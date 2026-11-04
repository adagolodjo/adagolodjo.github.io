# Workflow de production

```
Scène SOFA ─▶ Capture ─▶ Master 16:9 ─┬─▶ YouTube (long) / X
                                       ├─▶ 9:16 (scripts/reel.sh) ─▶ Reel IG + Short YT
                                       └─▶ Miniature / couverture
```

## 1. Préparer la scène

- **Fond uni et sombre** (proche de `#013A3C` ou noir) et caméra fixée à l'avance. Garder le sujet au centre : la version 9:16 recadre les côtés.
- **Rendu soigné** : modèle visuel lissé (pas le maillage de collision), couleurs contrastées sur le fond, statistiques et axes masqués si inutiles.
- **Version et paramètres notés** (version de SOFA, plugins, `dt`) pour la légende et pour le dépôt des tutos.
- Penser **vertical dès la capture** quand le reel est l'objectif principal : une fenêtre runSofa plus haute que large (proche de 9:16) évite de perdre de la résolution au recadrage.

## 2. Capturer

Deux approches :

| | Enregistrement d'écran (OBS, QuickTime) | Export d'images pas à pas |
|---|---|---|
| Montre | la vitesse réelle de calcul (honnête pour « temps réel ») | une vidéo parfaitement fluide, même si le calcul est lent |
| Quand | démos « temps réel », tutos (avec voix) | scènes lourdes, rendu « propre » pour un reel |
| Réglages | 1920×1080 ou plus, 60 fps, capture de la seule fenêtre runSofa | une image par pas (ou tous les N pas), PNG |

- **OBS Studio** : une source « capture de fenêtre » sur runSofa ; sortie MKV ou MP4 ; débit élevé (on recompresse ensuite).
- **Capture intégrée de runSofa** : selon la version et l'interface (Qt ou ImGui), runSofa propose captures d'écran et/ou enregistrement vidéo. Vérifie ce que ta version expose.
- **Export d'images en Python** : un `Sofa.Core.Controller` qui déclenche une capture d'écran à chaque `onAnimateEndEvent`, si l'API de capture est disponible dans ta version de SofaPython3. Assembler ensuite avec ffmpeg (voir plus bas).

> Si la vidéo publiée est accélérée, l'indiquer (« ×2 ») dans la vidéo ou la légende. Ne pas écrire « temps réel » pour une scène exportée image par image sans l'avoir vérifié.

## 3. Commandes ffmpeg

Les commandes ont été testées avec ffmpeg 9.0.2 (Homebrew) sur `docs/assets/images/forceView.mp4`, sauf l'incrustation `.srt` (section « Sous-titres »), qui demande un ffmpeg compilé avec libass.

### Images → vidéo

```bash
ffmpeg -framerate 60 -pattern_type glob -i 'captures/*.png' \
  -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" \
  -c:v libx264 -crf 18 -pix_fmt yuv420p -movflags +faststart master.mp4
```

### Couper un extrait

```bash
ffmpeg -ss 3 -to 18 -i capture.mp4 -c:v libx264 -crf 18 -pix_fmt yuv420p extrait.mp4
```

### 16:9 → 9:16 avec le script (recommandé)

```bash
# Watermark (une fois) ; env -u PYTHONPATH évite le conflit avec le PYTHONPATH SOFA
env -u PYTHONPATH python3.14 com/scripts/watermark.py com/watermark.png

# Vidéo entière sur fond flouté + watermark (rien n'est coupé)
com/scripts/reel.sh master.mp4 reel.mp4 --watermark com/watermark.png

# Recadrage plein écran, un peu à gauche, extrait 2–12 s, ×2, joué 3 fois
com/scripts/reel.sh master.mp4 reel.mp4 --mode crop --pos 0.3 --start 2 --end 12 --speed 2 --loops 2

# Aller-retour sans coupure (mouvement cyclique), extrait de 5 s
com/scripts/reel.sh master.mp4 reel.mp4 --start 0 --end 5 --pingpong --watermark com/watermark.png
```

`--mode crop` agrandit la bande centrale : sur une capture de 760 px de haut, l'image devient floue. Dans ce cas, préférer `--mode blur` ou capturer en plus haute résolution.

### Les mêmes opérations à la main

```bash
# Recadrage centré 9:16
ffmpeg -i in.mp4 -vf "crop='min(iw,ih*9/16)':ih,scale=1080:1920:flags=lanczos,setsar=1" \
  -an -c:v libx264 -crf 20 -pix_fmt yuv420p -movflags +faststart out.mp4

# Fond flouté
ffmpeg -i in.mp4 -filter_complex \
  "[0:v]split[a][b];[a]scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,gblur=sigma=40[bg];\
[b]scale=1080:-2[fg];[bg][fg]overlay=(W-w)/2:(H-h)/2,setsar=1" \
  -an -c:v libx264 -crf 20 -pix_fmt yuv420p -movflags +faststart out.mp4

# Accélérer ×2 (sans son)
ffmpeg -i in.mp4 -vf "setpts=PTS/2" -an -c:v libx264 -crf 20 -pix_fmt yuv420p out.mp4

# Boucler 3 fois (sans réencodage)
ffmpeg -stream_loop 2 -i in.mp4 -c copy out.mp4
```

### Titre incrusté les 3 premières secondes

Le ffmpeg installé n'a pas `drawtext` : on génère le titre en PNG puis on le superpose.

```bash
env -u PYTHONPATH python3.14 com/scripts/watermark.py titre.png --text "Cosserat rod · real time" --width 1500
ffmpeg -i reel.mp4 -i titre.png -filter_complex "[0:v][1:v]overlay=(W-w)/2:300:enable='between(t,0,3)'" \
  -c:v libx264 -crf 20 -pix_fmt yuv420p -movflags +faststart reel_titre.mp4
```

`--width 1500` donne un titre d'environ 860 px de large pour 32 caractères. Raccourcir le texte s'il dépasse 1000 px (le script affiche la taille).

### Version 16:9 pour X et YouTube (capture d'un autre ratio)

```bash
ffmpeg -i in.mp4 -vf "scale=1920:1080:force_original_aspect_ratio=decrease,\
pad=1920:1080:(ow-iw)/2:(oh-ih)/2:color=0x013A3C,setsar=1" \
  -an -c:v libx264 -preset slow -crf 20 -pix_fmt yuv420p -movflags +faststart x.mp4
```

### Miniature et couverture

```bash
ffmpeg -ss 5 -i master.mp4 -frames:v 1 -vf scale=1280:720 miniature.png   # YouTube
ffmpeg -ss 5 -i reel.mp4   -frames:v 1 couverture.png                       # Reel
```

### Compression finale (si un fichier est trop lourd)

```bash
ffmpeg -i in.mp4 -c:v libx264 -preset slow -crf 23 -maxrate 8M -bufsize 16M \
  -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 128k out.mp4
```

### Sous-titres

- **Reels de simulation sans voix** : un titre incrusté (ci-dessus) suffit, plus éventuellement 1 ou 2 cartons de texte avec `enable='between(t,a,b)'`.
- **Tutos avec voix** : importer un fichier `.srt` dans YouTube Studio (ou corriger les sous-titres automatiques). Une transcription locale avec Whisper (par exemple whisper.cpp) fournit un premier jet de `.srt`.
- **Incruster un `.srt`** demande un ffmpeg compilé avec libass. La formule Homebrew `ffmpeg-full` devrait l'inclure ; vérifie avec `ffmpeg -filters | grep subtitles`. Ensuite, aux couleurs du site :

```bash
ffmpeg -i reel.mp4 -vf "subtitles=sous-titres.srt:force_style='FontName=Arial,Bold=1,FontSize=14,\
PrimaryColour=&H00CBC85C,BackColour=&H603C3A01,BorderStyle=3,MarginV=140'" \
  -c:v libx264 -crf 20 -pix_fmt yuv420p reel_st.mp4
```

## 4. Publier

1. YouTube (long ou Short) : titre, description depuis le modèle, chapitres, miniature, playlist, écran de fin, sous-titres.
2. Instagram : Reel + couverture + légende + 3 à 5 hashtags. Éventuellement une musique depuis l'app.
3. X : version 16:9, post court, texte alternatif, puis réponse avec DOI/HAL et lien vers le site.
4. Le même jour : répondre aux premiers commentaires et épingler le lien (YouTube).

## Checklist par vidéo

**Contenu**
- [ ] Le sujet est publié ou déjà visible sur le site (sinon « work in progress », sans chiffres)
- [ ] Accord des co-auteur·es / partenaires si nécessaire ; aucune image patient
- [ ] Accélération signalée si la vidéo n'est pas en vitesse réelle
- [ ] Version de SOFA, plugins et papier (DOI/HAL) notés

**Fichiers**
- [ ] Master 16:9 (≥ 1080p, H.264, `+faststart`)
- [ ] Reel/Short 1080×1920, 15–45 s, sujet dans les zones sûres, watermark
- [ ] Version X 16:9, ≤ 2 min 20 s
- [ ] Miniature 1280×720 / couverture 9:16
- [ ] Titre incrusté ou sous-titres (lisible sans le son)

**Publication**
- [ ] Légende depuis le modèle, appel à l'action vers adagolodjo.com
- [ ] Hashtags : 3–5 (Instagram), 3 dans la description (YouTube), 1–2 (X)
- [ ] Texte alternatif (X), chapitres et playlist (YouTube)
- [ ] Mentions / tags des co-auteur·es et des labos (handles vérifiés)
- [ ] Lien du post ajouté au calendrier ([04-calendrier.md](04-calendrier.md))
