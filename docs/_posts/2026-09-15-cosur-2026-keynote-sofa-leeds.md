---
layout: post
title: "Keynote at COSUR 2026: What Does a Surgical Robot Really Need to Know About the Human Body?"
date: 2026-09-15
categories: [news, conference, education]
tags: [summer-school, surgical-robots, soft-robotics, sofa-framework, cosur, simulation]
author: Adagolodjo Yinoussa
image: /assets/images/posts/cosur-2026-group-photo.webp
excerpt: "Delivered a keynote — 'What Does a Surgical Robot Really Need to Know About the Human Body?' — at the COSUR 2026 Summer School on Control of Surgical Robots, hosted by the University of Leeds."
---

I had the pleasure of giving **Keynote 4** at the **COSUR 2026 Summer School on Control of Surgical Robots**, held **September 14–16, 2026** at the School of Electronic and Electrical Engineering, University of Leeds, UK — a pre-event of the [CRAS 2026 conference](https://cras-eu.org/cras-2026/).

<!--more-->

<figure style="margin: 1.5rem 0;">
  <img src="/assets/images/posts/cosur-2026-group-photo.webp" alt="Group photo of COSUR 2026 speakers and participants on the steps of the University of Leeds" loading="lazy" style="width: 100%; border-radius: 0.75rem;">
  <figcaption style="font-size: 0.85rem; color: var(--text-muted, #7a7a7a); margin-top: 0.5rem; text-align: center;">
    Speakers and participants of COSUR 2026, University of Leeds.
  </figcaption>
</figure>

## My Keynote

**Title**: *What Does a Surgical Robot Really Need to Know About the Human Body?*

The talk started from a simple framing question: not *how much* anatomy a surgical robot needs, but *what physical information* — geometry, stiffness, deformation, contact, friction, viscoelasticity, patient-specific anatomy, uncertainty — is actually necessary to perform a given task, and whether the answer changes depending on the task itself.

<figure style="margin: 1.5rem 0;">
  <img src="/assets/images/posts/cosur-2026-slide-question.webp" alt="Slide from the talk listing the physical properties a surgical robot may need to know about the human body: geometry, stiffness, deformation, contact, friction, viscoelasticity, patient-specific anatomy, uncertainty, boundary conditions, topology" loading="lazy" style="width: 100%; border-radius: 0.75rem;">
  <figcaption style="font-size: 0.85rem; color: var(--text-muted, #7a7a7a); margin-top: 0.5rem; text-align: center;">
    The real question: not how much anatomy, but what physical information is necessary for a given task.
  </figcaption>
</figure>

I used the [SOFA framework](https://www.sofa-framework.org/) and our [Cosserat plugin](https://github.com/SofaDefrost/Cosserat) to illustrate this, covering the Cosserat rod formulation, constraint-based control, and how these models support the kind of interactive, patient-specific simulation that surgical robotics increasingly relies on.

## About COSUR 2026

COSUR is a doctoral-level summer school on robot-assisted surgery, jointly organized by:

- ARISE and STORM labs at the University of Leeds
- Altair Robotics Lab, University of Verona
- Robot-Assisted Surgery research group, KU Leuven
- Multiple European research projects in medical robotics

The program combines technical tutorials and clinical perspectives spanning control, sensing, imaging, autonomy, and machine learning in surgical robotics. This year's speaker line-up also included Murilo Marinho (University of Manchester), Chris Fryer (CMR Surgical), Ilana Nisky (Ben-Gurion University), Peter Kazanzides (Johns Hopkins University), and Gerardo Loza (University of Leeds).

## Takeaways

Beyond the talk itself, it was a great opportunity to reconnect with the surgical robotics community and meet the next generation of PhD students working across control, AI, and clinical robotics. Always energizing to see how much the field moves between editions of COSUR.

**More information**: [https://cras-eu.org/cosur-2026/](https://cras-eu.org/cosur-2026/)
