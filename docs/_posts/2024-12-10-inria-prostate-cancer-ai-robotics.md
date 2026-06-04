---
layout: post
title: "Featured on Inria: Prostate Cancer Diagnosis and the Role of AI & Robotics"
date: 2024-12-10
categories: [news, press, research]
tags: [prostate-cancer, medical-robotics, ROBOCOP, DEFROST, inria, AI, soft-robotics, needle-insertion]
image: /assets/images/posts/inria-prostate-cancer-video.png
author: Adagolodjo Yinoussa
excerpt: "Inria published a feature on our work combining robotics, soft-body simulation and AI to improve prostate biopsy precision — part of the ROBOCOP project with the DEFROST team."
---

I am honoured to be featured in an article published by **Inria** on the use of digital sciences — AI, simulation and robotics — to improve the diagnosis of prostate cancer.

<!--more-->

## The Challenge: Precision in Prostate Biopsy

Prostate cancer is one of the most common cancers in men. Confirming the diagnosis often requires a **biopsy**: a needle is inserted into the prostate to collect tissue samples from suspicious regions identified by MRI. The procedure sounds simple, but performing it with sufficient precision — avoiding the urethra, hitting a millimetre-scale target, and accounting for the soft deformations of prostate tissue — is a significant engineering challenge.

## Our Contribution: Deformable Robotics meets Medical Imaging

As part of the [**ROBOCOP project**](/research/projects/robocop/) (2017–2021), our team at the [DEFROST group](https://team.inria.fr/defrost/) (Inria / CRIStAL UMR 9189 / University of Lille) developed a robotic system that carries a flexible ultrasound probe and biopsy needle. Because the robot's end-effector is itself **soft and deformable**, controlling it requires mathematical models that go beyond classical rigid-body robotics.

We used **Cosserat rod theory** and **finite element methods (FEM)** — implemented in the [SOFA framework](https://www.sofa-framework.org/) and our [Cosserat plugin](https://github.com/SofaDefrost/Cosserat) — to model the deformations in real time. These models allow the robot to:

- Account for the bending and twisting of the flexible probe
- Compensate for prostate tissue deformation during insertion
- Align the needle with targets identified in ultrasound or MRI imagery

## Video

<div class="video-wrapper" style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden; border-radius:0.75rem; margin:1.5rem 0; background:#000;">
  <iframe
    style="position:absolute;top:0;left:0;width:100%;height:100%;"
    src="https://mediatheque.inria.fr/Mediatheque/media/89377"
    title="Inria — Cancer de la prostate : les sciences du numérique au secours du diagnostic"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

<!-- Fallback card if the iframe is blocked by the browser -->
<noscript>
<div style="background:#f0f9f9; border:1px solid #b0d8d9; border-radius:0.75rem; padding:1.5rem; text-align:center; margin:1.5rem 0;">
  <p style="margin-bottom:1rem;">
    <i class="fas fa-play-circle fa-3x" style="color:#016064;"></i>
  </p>
  <p style="font-weight:600; color:#013A3C; margin-bottom:0.75rem;">
    Inria — Cancer de la prostate : les sciences du numérique au secours du diagnostic
  </p>
  <a href="https://mediatheque.inria.fr/Mediatheque/media/89377"
     target="_blank" rel="noopener"
     style="display:inline-flex; align-items:center; gap:0.5rem; background:#016064; color:#fff; padding:0.6rem 1.5rem; border-radius:0.5rem; text-decoration:none; font-weight:600;">
    <i class="fas fa-play"></i> Regarder la vidéo sur Inria Mediatheque
  </a>
</div>
</noscript>

<div style="text-align:center; margin-top:0.5rem;">
  <a href="https://mediatheque.inria.fr/Mediatheque/media/89377" target="_blank" rel="noopener"
     style="font-size:0.85rem; color:#016064;">
    <i class="fas fa-external-link-alt"></i> Ouvrir la vidéo sur la Mediatheque Inria
  </a>
</div>

## Read the Full Article

The Inria article gives an accessible overview of the multiple facets of this problem: machine learning for lesion detection, digital modelling for probe control, and the broader clinical context.

<div style="margin:1.5rem 0;">
  <a href="https://www.inria.fr/fr/cancer-prostate-diagnostic-ia-robotique"
     target="_blank" rel="noopener"
     class="button is-primary">
    <span class="icon"><i class="fas fa-external-link-alt"></i></span>
    <span>Read the Inria Article (FR)</span>
  </a>
  &nbsp;
  <a href="https://www.inria.fr/en/prostate-cancer-diagnosis-ai-robotics"
     target="_blank" rel="noopener"
     class="button is-outlined is-primary">
    <span class="icon"><i class="fas fa-external-link-alt"></i></span>
    <span>Read in English</span>
  </a>
</div>

## Related Research

This work connects to ongoing projects in the DEFROST team:

- 🔬 **[COSSEROOTS](/research/projects/cosseroots/)** — extending Cosserat-based control to growing soft robots
- 🤖 **[CONECT](/research/projects/conect/)** — autonomous needle insertion guidance
- 🧲 **[Active Prostate Phantom](/research/projects/active-prostate-phantom/)** — hardware phantom for validating biopsy robots

The [Cosserat plugin](https://github.com/SofaDefrost/Cosserat) and the [SoftRobots.Inverse plugin](https://github.com/SofaDefrost/SoftRobots.Inverse) are both open-source and freely available for the research community.
