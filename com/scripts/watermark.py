#!/usr/bin/env python3
"""Génère le PNG de watermark (« @Uhuru_Sim · adagolodjo.com ») à superposer avec ffmpeg.

Usage : python3 watermark.py [sortie.png] [--text "..."] [--width 1080]
Dépendance : Pillow (pip install pillow).
"""
import argparse
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

# Palette du site (docs/assets/css/partials/_variables.scss)
PRIMARY_DARK = (1, 58, 60)      # #013A3C
ACCENT = (92, 200, 203)         # #5CC8CB

FONT_CANDIDATES = [
    "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
    "/Library/Fonts/Arial Bold.ttf",
    "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
]


def load_font(size):
    for path in FONT_CANDIDATES:
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default(size)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("out", nargs="?", default="watermark.png")
    ap.add_argument("--text", default="@Uhuru_Sim · adagolodjo.com")
    ap.add_argument("--width", type=int, default=1080, help="largeur de la vidéo cible")
    args = ap.parse_args()

    size = max(18, args.width // 30)
    font = load_font(size)
    pad_x, pad_y = size, size // 2
    left, top, right, bottom = font.getbbox(args.text)
    w, h = right - left + 2 * pad_x, bottom - top + 2 * pad_y

    img = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    draw.rounded_rectangle((0, 0, w - 1, h - 1), radius=h // 2, fill=PRIMARY_DARK + (190,))
    draw.text((pad_x - left, pad_y - top), args.text, font=font, fill=ACCENT + (255,))
    img.save(args.out)
    print(f"{args.out} ({w}x{h})")


if __name__ == "__main__":
    main()
