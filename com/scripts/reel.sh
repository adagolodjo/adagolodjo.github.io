#!/usr/bin/env bash
# Reformate une capture SOFA (16:9 ou autre) en Reel / Short 9:16 1080x1920 H.264.
#
# Usage :
#   reel.sh entree.mp4 sortie.mp4 [options]
#
# Options :
#   --mode crop|blur   crop = recadrage centré plein écran ; blur = vidéo entière sur fond flouté (défaut : blur)
#   --pos 0.5          position horizontale du recadrage en mode crop (0 = gauche, 1 = droite)
#   --start 3 --end 18 extrait [start, end] en secondes avant tout le reste
#   --speed 2          accélère (2 = x2 ; 0.5 = ralenti)
#   --loops 1          répète le clip N fois en plus (boucle)
#   --pingpong         ajoute le clip à l'envers (aller-retour sans coupure ; clips courts uniquement)
#   --watermark f.png  superpose un PNG (voir watermark.py), en bas à gauche, hors zone d'interface
#   --fps 30           cadence de sortie (défaut 30)
#   --crf 20           qualité x264 (18 = très bon, 23 = plus léger)
#
# Le son est supprimé (les captures SOFA n'en ont pas) : ajouter une musique dans l'app de publication.
set -euo pipefail

if [[ $# -lt 2 ]]; then
  sed -n '2,20p' "$0"; exit 1
fi

IN=$1; OUT=$2; shift 2
MODE=blur; POS=0.5; START=""; END=""; SPEED=1; LOOPS=0; PINGPONG=0; WM=""; FPS=30; CRF=20

while [[ $# -gt 0 ]]; do
  case $1 in
    --mode) MODE=$2; shift 2 ;;
    --pos) POS=$2; shift 2 ;;
    --start) START=$2; shift 2 ;;
    --end) END=$2; shift 2 ;;
    --speed) SPEED=$2; shift 2 ;;
    --loops) LOOPS=$2; shift 2 ;;
    --pingpong) PINGPONG=1; shift ;;
    --watermark) WM=$2; shift 2 ;;
    --fps) FPS=$2; shift 2 ;;
    --crf) CRF=$2; shift 2 ;;
    *) echo "Option inconnue : $1" >&2; exit 1 ;;
  esac
done

TRIM=()
[[ -n $START ]] && TRIM+=(-ss "$START")
[[ -n $END ]] && TRIM+=(-to "$END")

# 1. Vitesse puis cadrage 9:16
F="[0:v]setpts=PTS/${SPEED},fps=${FPS}"
if [[ $MODE == crop ]]; then
  F+=",crop='min(iw,ih*9/16)':ih:'(iw-min(iw,ih*9/16))*${POS}':0,scale=1080:1920:flags=lanczos,setsar=1[v0]"
else
  F+=",split[a][b];[a]scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,gblur=sigma=40,eq=brightness=-0.08[bg];"
  F+="[b]scale=1080:-2:flags=lanczos[fg];[bg][fg]overlay=(W-w)/2:(H-h)/2,setsar=1[v0]"
fi

# 2. Aller-retour
LAST=v0
if [[ $PINGPONG == 1 ]]; then
  F+=";[v0]split[p1][p2];[p2]reverse[r];[p1][r]concat=n=2:v=1:a=0[v1]"; LAST=v1
fi

# 3. Boucle
if [[ $LOOPS -gt 0 ]]; then
  F+=";[${LAST}]loop=loop=${LOOPS}:size=32767:start=0,setpts=N/(${FPS}*TB)[v2]"; LAST=v2
fi

# 4. Watermark (au-dessus de la barre de légende Instagram/Shorts, ~420 px du bas)
INPUTS=("${TRIM[@]}" -i "$IN")
if [[ -n $WM ]]; then
  INPUTS+=(-i "$WM")
  F+=";[${LAST}][1:v]overlay=48:H-h-420[v3]"; LAST=v3
fi

ffmpeg -hide_banner -loglevel warning -stats -y "${INPUTS[@]}" \
  -filter_complex "$F" -map "[${LAST}]" -an \
  -c:v libx264 -preset slow -crf "$CRF" -profile:v high -pix_fmt yuv420p -movflags +faststart \
  "$OUT"

ffprobe -v error -show_entries stream=width,height,r_frame_rate:format=duration,size -of compact "$OUT"
