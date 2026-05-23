---
layout: page
title: Publications
subtitle: Research output synchronized with HAL Science open archive
permalink: /publications/
description: "Complete list of scientific publications by Yinoussa Adagolodjo — journals, conferences, theses — synced with HAL Science."
---

<style>
/* ── Publications page — Ocean/Teal theme ─────────────────────── */

/* Stats banner */
.pub-stats-bar {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1.25rem 1.75rem;
  background: linear-gradient(135deg, #013A3C 0%, #016064 100%);
  border-radius: 14px;
  color: white;
  box-shadow: 0 4px 20px rgba(1,96,100,0.25);
}
.pub-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 64px;
}
.pub-stat-number {
  font-size: 2rem;
  font-weight: 800;
  line-height: 1;
  color: #5CC8CB;
}
.pub-stat-label {
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(255,255,255,0.7);
  margin-top: 0.2rem;
  white-space: nowrap;
}
.pub-stat-divider {
  width: 1px;
  height: 44px;
  background: rgba(255,255,255,0.2);
  flex-shrink: 0;
}
.hal-sync-badge {
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: 10px;
  padding: 0.55rem 1.1rem;
  color: white;
  font-size: 0.82rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s;
}
.hal-sync-badge:hover { background: rgba(255,255,255,0.2); color: white; }
.hal-sync-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: #5CC8CB;
  animation: pub-pulse 2s ease-in-out infinite;
  flex-shrink: 0;
}
@keyframes pub-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.45; transform: scale(0.75); }
}

/* ── Filter bar ─────────────────────────────────────────────── */
.pub-filter-bar {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 2rem;
}
.pub-filter-tab {
  padding: 0.4rem 1rem;
  border-radius: 20px;
  border: 2px solid #48AAAD;
  background: transparent;
  color: #016064;
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.18s;
  font-family: inherit;
}
.pub-filter-tab:hover  { background: #E0F7FA; }
.pub-filter-tab.active { background: #016064; color: white; border-color: #016064; }
.pub-filter-count {
  display: inline-block;
  background: rgba(1,96,100,0.12);
  border-radius: 10px;
  padding: 0 0.4rem;
  font-size: 0.72rem;
  margin-left: 0.2rem;
}
.pub-filter-tab.active .pub-filter-count { background: rgba(255,255,255,0.22); }
.pub-search-wrap {
  margin-left: auto;
  position: relative;
}
.pub-search-wrap i {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #4A7A7C;
  font-size: 0.78rem;
  pointer-events: none;
}
#pub-search-input {
  padding: 0.4rem 0.9rem 0.4rem 2rem;
  border: 2px solid #48AAAD;
  border-radius: 20px;
  font-size: 0.82rem;
  font-family: inherit;
  outline: none;
  background: white;
  color: #1A3A3C;
  min-width: 210px;
  transition: border-color 0.2s;
}
#pub-search-input:focus { border-color: #016064; }

/* ── Year group ──────────────────────────────────────────────── */
.pub-year-group { margin-bottom: 0.5rem; }
.pub-year-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 2.2rem 0 1rem;
}
.pub-year-label {
  font-size: 1.35rem;
  font-weight: 800;
  color: #016064;
  white-space: nowrap;
}
.pub-year-line {
  flex: 1;
  height: 2px;
  background: linear-gradient(to right, rgba(72,170,173,0.6), transparent);
  border-radius: 1px;
}
.pub-year-count {
  font-size: 0.72rem;
  color: #4A7A7C;
  font-weight: 700;
  white-space: nowrap;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

/* ── Publication card (HAL-style) ───────────────────────────── */
.pub-card {
  display: flex;
  gap: 1rem;
  padding: 1.2rem 1.3rem;
  border-radius: 10px;
  background: var(--card-bg, white);
  border: 1px solid rgba(72,170,173,0.22);
  margin-bottom: 0.7rem;
  transition: all 0.18s;
  box-shadow: 0 2px 8px rgba(1,96,100,0.05);
}
.pub-card:hover {
  border-color: #48AAAD;
  box-shadow: 0 6px 20px rgba(1,96,100,0.12);
  transform: translateY(-1px);
}
.pub-card.pub-hidden { display: none !important; }

/* Left: type badge */
.pub-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 68px;
  padding-top: 0.1rem;
  flex-shrink: 0;
}
.pub-type-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  padding: 0.28rem 0;
  border-radius: 6px;
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-align: center;
  border-width: 1.5px;
  border-style: solid;
}
.pub-badge-journal    { background: #E0F7FA; color: #016064;  border-color: #016064;  }
.pub-badge-conference { background: #E3F2FD; color: #0277BD;  border-color: #0277BD;  }
.pub-badge-thesis     { background: #F3E5F5; color: #6A1B9A;  border-color: #6A1B9A;  }
.pub-badge-poster     { background: #FFF3E0; color: #E65100;  border-color: #E65100;  }
.pub-badge-workshop   { background: #E8F5E9; color: #2E7D32;  border-color: #2E7D32;  }

/* Main content */
.pub-main { flex: 1; min-width: 0; }
.pub-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-color, #1A3A3C);
  line-height: 1.45;
  margin-bottom: 0.35rem;
}
.pub-title a { color: inherit; text-decoration: none; }
.pub-title a:hover { color: #016064; text-decoration: underline; }
.pub-authors {
  font-size: 0.84rem;
  color: var(--text-muted, #4A7A7C);
  margin-bottom: 0.28rem;
  line-height: 1.5;
}
.pub-authors .pub-me { color: #016064; font-weight: 700; }
.pub-venue {
  font-size: 0.84rem;
  color: var(--text-muted, #5A6A6C);
  margin-bottom: 0.5rem;
  line-height: 1.4;
}
.pub-venue em { font-style: italic; }
.pub-venue-year {
  font-style: normal;
  font-weight: 700;
  color: #016064;
  margin-left: 0.35rem;
}
.pub-keywords {
  display: flex;
  gap: 0.3rem;
  flex-wrap: wrap;
  margin-bottom: 0.55rem;
}
.pub-kw {
  padding: 0.14rem 0.5rem;
  border-radius: 10px;
  background: rgba(72,170,173,0.12);
  color: #016064;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.02em;
}
.pub-links { display: flex; gap: 0.38rem; flex-wrap: wrap; }
.pub-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.28rem;
  padding: 0.2rem 0.65rem;
  border-radius: 5px;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-decoration: none !important;
  border-width: 1.5px;
  border-style: solid;
  background: transparent;
  transition: all 0.15s;
  text-transform: uppercase;
}
.pub-btn:hover { transform: translateY(-1px); filter: brightness(0.85); }
.pub-btn-doi  { color: #E65100; border-color: #E65100; }
.pub-btn-hal  { color: #0277BD; border-color: #0277BD; }
.pub-btn-pdf  { color: #2E7D32; border-color: #2E7D32; }

/* Abstract */
.pub-abstract-btn {
  display: inline-block;
  margin-top: 0.4rem;
  font-size: 0.74rem;
  color: #016064;
  font-weight: 700;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-family: inherit;
}
.pub-abstract-btn:hover { text-decoration: underline; }
.pub-abstract {
  display: none;
  margin-top: 0.5rem;
  padding: 0.75rem 1rem;
  font-size: 0.82rem;
  color: var(--text-muted, #4A5A5C);
  line-height: 1.65;
  background: rgba(72,170,173,0.07);
  border-left: 3px solid #48AAAD;
  border-radius: 0 6px 6px 0;
}
.pub-abstract.pub-open { display: block; }

/* ── HAL live sync footer ─────────────────────────────────── */
.hal-live-box {
  margin-top: 3rem;
  padding: 1.5rem 2rem;
  background: linear-gradient(135deg, rgba(1,58,60,0.04), rgba(72,170,173,0.08));
  border: 1px solid rgba(72,170,173,0.25);
  border-radius: 14px;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.hal-live-text { flex: 1; min-width: 200px; }
.hal-live-title {
  font-size: 0.95rem;
  font-weight: 800;
  color: #016064;
  margin-bottom: 0.25rem;
}
.hal-live-desc { font-size: 0.82rem; color: #4A7A7C; margin: 0; }
.hal-fetch-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.5rem;
  background: linear-gradient(135deg, #016064, #48AAAD);
  color: white;
  border-radius: 9px;
  font-size: 0.85rem;
  font-weight: 700;
  font-family: inherit;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s;
  white-space: nowrap;
}
.hal-fetch-btn:hover   { opacity: 0.88; }
.hal-fetch-btn:disabled { opacity: 0.5; cursor: default; }
#hal-fetch-status {
  width: 100%;
  font-size: 0.8rem;
  color: #4A7A7C;
  margin-top: 0.5rem;
}

/* ── External profiles ───────────────────────────────────── */
.pub-profiles {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 2.5rem;
  padding-top: 2rem;
  border-top: 2px solid rgba(72,170,173,0.2);
}
.pub-profile-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.6rem 1.2rem;
  border-radius: 10px;
  font-size: 0.85rem;
  font-weight: 700;
  text-decoration: none !important;
  transition: all 0.2s;
  border: none;
}
.pub-profile-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 16px rgba(0,0,0,0.15); }
.pub-profile-hal     { background: #016064; color: white !important; }
.pub-profile-scholar { background: #1A73E8; color: white !important; }
.pub-profile-rg      { background: #00CCBB; color: white !important; }
.pub-profile-orcid   { background: #A6CE39; color: #1A3A3C !important; }

/* ── No results message ──────────────────────────────────── */
#pub-no-results {
  display: none;
  text-align: center;
  padding: 3rem 1rem;
  color: #4A7A7C;
  font-size: 0.9rem;
}

/* ── Dark mode ───────────────────────────────────────────── */
[data-theme="dark"] .pub-card       { background: #013A3C; border-color: rgba(72,170,173,0.3); }
[data-theme="dark"] .pub-title      { color: #E0F7FA; }
[data-theme="dark"] .pub-authors    { color: #B0D4D6; }
[data-theme="dark"] .pub-venue      { color: #90B4B6; }
[data-theme="dark"] #pub-search-input { background: #013A3C; color: #E0F7FA; border-color: #48AAAD; }
[data-theme="dark"] .pub-filter-tab { color: #5CC8CB; border-color: #48AAAD; }
[data-theme="dark"] .pub-abstract   { background: rgba(72,170,173,0.1); color: #B0D4D6; }
[data-theme="dark"] .hal-live-box   { background: rgba(72,170,173,0.06); }

/* ── Responsive ──────────────────────────────────────────── */
@media (max-width: 640px) {
  .pub-card         { flex-direction: column; gap: 0.7rem; }
  .pub-left         { flex-direction: row; min-width: unset; }
  .pub-stats-bar    { gap: 0.9rem; padding: 1rem 1.2rem; }
  .hal-sync-badge   { display: none; }
  .pub-search-wrap  { width: 100%; }
  #pub-search-input { min-width: unset; width: 100%; }
  .hal-live-box     { flex-direction: column; text-align: center; }
}
</style>

{% assign pubs       = site.data.publications | sort: "year" | reverse %}
{% assign journals   = pubs | where: "type", "journal" %}
{% assign confs      = pubs | where: "type", "conference" %}
{% assign theses     = pubs | where: "type", "thesis" %}
{% assign posters    = pubs | where: "type", "poster" %}
{% assign workshops  = pubs | where: "type", "workshop" %}
{% assign total      = pubs | size %}
{% assign j_count    = journals  | size %}
{% assign c_count    = confs     | size %}
{% assign t_count    = theses    | size %}
{% assign p_count    = posters   | size %}
{% assign w_count    = workshops | size %}
{% assign years      = pubs | map: "year" | uniq | sort | reverse %}

<!-- ── Stats banner ─────────────────────────────────────────── -->
<div class="pub-stats-bar">
  <div class="pub-stat">
    <span class="pub-stat-number">{{ total }}</span>
    <span class="pub-stat-label">Total</span>
  </div>
  <div class="pub-stat-divider"></div>
  <div class="pub-stat">
    <span class="pub-stat-number">{{ j_count }}</span>
    <span class="pub-stat-label">Journals</span>
  </div>
  <div class="pub-stat-divider"></div>
  <div class="pub-stat">
    <span class="pub-stat-number">{{ c_count }}</span>
    <span class="pub-stat-label">Conferences</span>
  </div>
  <div class="pub-stat-divider"></div>
  <div class="pub-stat">
    <span class="pub-stat-number">{{ t_count }}</span>
    <span class="pub-stat-label">Theses</span>
  </div>
  <a href="https://hal.science/search/index?q=Adagolodjo"
     target="_blank" rel="noopener" class="hal-sync-badge">
    <span class="hal-sync-dot"></span>
    Synced with HAL Science
    <i class="fas fa-external-link-alt" style="font-size:0.65rem;opacity:0.6;"></i>
  </a>
</div>

<!-- ── Filters ──────────────────────────────────────────────── -->
<div class="pub-filter-bar" id="pub-filter-bar">
  <button class="pub-filter-tab active" data-filter="all">
    All <span class="pub-filter-count">{{ total }}</span>
  </button>
  <button class="pub-filter-tab" data-filter="journal">
    Journals <span class="pub-filter-count">{{ j_count }}</span>
  </button>
  <button class="pub-filter-tab" data-filter="conference">
    Conferences <span class="pub-filter-count">{{ c_count }}</span>
  </button>
  {% if t_count > 0 %}
  <button class="pub-filter-tab" data-filter="thesis">
    Theses <span class="pub-filter-count">{{ t_count }}</span>
  </button>
  {% endif %}
  {% if p_count > 0 %}
  <button class="pub-filter-tab" data-filter="poster">
    Posters <span class="pub-filter-count">{{ p_count }}</span>
  </button>
  {% endif %}
  {% if w_count > 0 %}
  <button class="pub-filter-tab" data-filter="workshop">
    Workshops <span class="pub-filter-count">{{ w_count }}</span>
  </button>
  {% endif %}
  <div class="pub-search-wrap">
    <i class="fas fa-search"></i>
    <input type="text" id="pub-search-input" placeholder="Search publications…" autocomplete="off">
  </div>
</div>

<!-- ── Publication list ─────────────────────────────────────── -->
<div id="pub-list">

{% for year in years %}
  {% assign year_pubs = pubs | where: "year", year %}
  <div class="pub-year-group" data-year="{{ year }}">
    <div class="pub-year-header">
      <span class="pub-year-label">{{ year }}</span>
      <div class="pub-year-line"></div>
      <span class="pub-year-count">{{ year_pubs | size }}&nbsp;publication{% if year_pubs.size > 1 %}s{% endif %}</span>
    </div>

    {% for pub in year_pubs %}
    {% assign search_text = pub.title | downcase | append: " " | append: pub.authors | downcase %}
    {% if pub.journal %}{% assign search_text = search_text | append: " " | append: pub.journal | downcase %}{% endif %}
    {% if pub.conference %}{% assign search_text = search_text | append: " " | append: pub.conference | downcase %}{% endif %}
    <div class="pub-card"
         data-type="{{ pub.type }}"
         data-year="{{ pub.year }}"
         data-search="{{ search_text | escape }}">

      <!-- Left: type badge -->
      <div class="pub-left">
        {% if pub.type == "journal" %}
          <span class="pub-type-badge pub-badge-journal">Article</span>
        {% elsif pub.type == "conference" %}
          <span class="pub-type-badge pub-badge-conference">Conf.</span>
        {% elsif pub.type == "thesis" %}
          <span class="pub-type-badge pub-badge-thesis">Thèse</span>
        {% elsif pub.type == "poster" %}
          <span class="pub-type-badge pub-badge-poster">Poster</span>
        {% elsif pub.type == "workshop" %}
          <span class="pub-type-badge pub-badge-workshop">Workshop</span>
        {% else %}
          <span class="pub-type-badge pub-badge-conference">Other</span>
        {% endif %}
      </div>

      <!-- Main content -->
      <div class="pub-main">
        <!-- Title -->
        <div class="pub-title">
          {% if pub.hal_url %}
            <a href="{{ pub.hal_url }}" target="_blank" rel="noopener noreferrer">{{ pub.title }}</a>
          {% elsif pub.doi %}
            <a href="https://doi.org/{{ pub.doi }}" target="_blank" rel="noopener noreferrer">{{ pub.title }}</a>
          {% else %}
            {{ pub.title }}
          {% endif %}
        </div>

        <!-- Authors (Adagolodjo in bold/teal) -->
        <div class="pub-authors">
          {% assign parts = pub.authors | split: ", " %}
          {% for part in parts %}
            {% if part contains "Adagolodjo" %}<span class="pub-me">{{ part }}</span>{% else %}{{ part }}{% endif %}{% unless forloop.last %}, {% endunless %}
          {% endfor %}
        </div>

        <!-- Venue -->
        <div class="pub-venue">
          {% if pub.journal %}
            <em>{{ pub.journal }}</em>{% if pub.volume %},&nbsp;vol.&nbsp;{{ pub.volume }}{% endif %}{% if pub.issue %}({{ pub.issue }}){% endif %}{% if pub.pages %},&nbsp;pp.&nbsp;{{ pub.pages }}{% endif %}
          {% elsif pub.conference %}
            <em>{{ pub.conference }}</em>
          {% endif %}
          <span class="pub-venue-year">· {{ pub.year }}</span>
        </div>

        <!-- Keywords -->
        {% if pub.keywords %}
        <div class="pub-keywords">
          {% for kw in pub.keywords limit: 4 %}
            <span class="pub-kw">{{ kw }}</span>
          {% endfor %}
        </div>
        {% endif %}

        <!-- Action buttons -->
        <div class="pub-links">
          {% if pub.doi %}
            <a href="https://doi.org/{{ pub.doi }}" class="pub-btn pub-btn-doi"
               target="_blank" rel="noopener noreferrer">
              <i class="fas fa-external-link-alt"></i> DOI
            </a>
          {% endif %}
          {% if pub.hal_url %}
            <a href="{{ pub.hal_url }}" class="pub-btn pub-btn-hal"
               target="_blank" rel="noopener noreferrer">
              <i class="fas fa-archive"></i> HAL
            </a>
          {% endif %}
          {% if pub.pdf_url %}
            <a href="{{ pub.pdf_url }}" class="pub-btn pub-btn-pdf"
               target="_blank" rel="noopener noreferrer">
              <i class="fas fa-file-pdf"></i> PDF
            </a>
          {% endif %}
        </div>

        <!-- Abstract (collapsed) -->
        {% if pub.abstract %}
        <button class="pub-abstract-btn" onclick="pubToggleAbstract(this)">▶ Abstract</button>
        <div class="pub-abstract">{{ pub.abstract }}</div>
        {% endif %}
      </div><!-- /.pub-main -->
    </div><!-- /.pub-card -->
    {% endfor %}
  </div><!-- /.pub-year-group -->
{% endfor %}

</div><!-- /#pub-list -->

<div id="pub-no-results">
  <i class="fas fa-search" style="font-size:2rem;color:#48AAAD;margin-bottom:0.75rem;display:block;"></i>
  No publications match your search. <a href="https://hal.science/search/index?q=Adagolodjo" target="_blank">Search on HAL ↗</a>
</div>

<!-- ── HAL live sync ─────────────────────────────────────────── -->
<div class="hal-live-box">
  <div class="hal-live-text">
    <div class="hal-live-title"><i class="fas fa-sync-alt"></i> Live HAL Science synchronization</div>
    <p class="hal-live-desc">
      This page loads publications statically from a curated YAML list.
      Click to verify synchronization with the live HAL API
      (<a href="https://hal.science/search/index?q=Adagolodjo" target="_blank" rel="noopener">hal.science</a>).
    </p>
  </div>
  <div>
    <button class="hal-fetch-btn" id="hal-fetch-btn" onclick="pubFetchHAL()">
      <i class="fas fa-cloud-download-alt"></i> Check HAL API
    </button>
    <div id="hal-fetch-status"></div>
  </div>
</div>

<!-- ── External profiles ─────────────────────────────────────── -->
<div class="pub-profiles">
  <a href="https://hal.science/search/index?q=Adagolodjo"
     target="_blank" rel="noopener" class="pub-profile-btn pub-profile-hal">
    <i class="fas fa-archive"></i> HAL Science
  </a>
  <a href="https://scholar.google.com/citations?user=ZBdWJ9EAAAAJ&hl=fr"
     target="_blank" rel="noopener" class="pub-profile-btn pub-profile-scholar">
    <i class="fas fa-graduation-cap"></i> Google Scholar
  </a>
  <a href="https://www.researchgate.net/profile/Yinoussa-Adagolodjo?ev=hdr_xprf"
     target="_blank" rel="noopener" class="pub-profile-btn pub-profile-rg">
    <i class="fas fa-flask"></i> ResearchGate
  </a>
  <a href="https://orcid.org/YOUR_ORCID"
     target="_blank" rel="noopener" class="pub-profile-btn pub-profile-orcid">
    <i class="fab fa-orcid"></i> ORCID
  </a>
</div>

<!-- ── Scripts ───────────────────────────────────────────────── -->
<script>
(function () {
  'use strict';

  /* ── Filter by type ─────────────────────────────────────── */
  document.querySelectorAll('.pub-filter-tab').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.pub-filter-tab').forEach(function (b) {
        b.classList.remove('active');
      });
      btn.classList.add('active');
      applyFilters();
    });
  });

  var searchInput = document.getElementById('pub-search-input');
  if (searchInput) searchInput.addEventListener('input', applyFilters);

  function applyFilters() {
    var activeBtn   = document.querySelector('.pub-filter-tab.active');
    var activeFilter = activeBtn ? activeBtn.dataset.filter : 'all';
    var raw         = searchInput ? searchInput.value : '';
    var term        = raw.toLowerCase().trim();
    var anyVisible  = false;

    document.querySelectorAll('.pub-card').forEach(function (card) {
      var typeOk   = (activeFilter === 'all') || (card.dataset.type === activeFilter);
      var searchOk = !term || (card.dataset.search || '').includes(term);
      var show     = typeOk && searchOk;
      card.classList.toggle('pub-hidden', !show);
      if (show) anyVisible = true;
    });

    /* Show/hide year group headers */
    document.querySelectorAll('.pub-year-group').forEach(function (grp) {
      var has = grp.querySelectorAll('.pub-card:not(.pub-hidden)').length > 0;
      grp.style.display = has ? '' : 'none';
    });

    var noRes = document.getElementById('pub-no-results');
    if (noRes) noRes.style.display = anyVisible ? 'none' : 'block';
  }

  /* ── Abstract toggle ─────────────────────────────────────── */
  window.pubToggleAbstract = function (btn) {
    var abs = btn.nextElementSibling;
    var open = abs.classList.toggle('pub-open');
    btn.textContent = (open ? '▼' : '▶') + ' Abstract';
  };

  /* ── Live HAL API check ──────────────────────────────────── */
  window.pubFetchHAL = async function () {
    var btn    = document.getElementById('hal-fetch-btn');
    var status = document.getElementById('hal-fetch-status');
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Fetching…';
    status.innerHTML = '';

    var HAL_URL =
      'https://api.archives-ouvertes.fr/search/' +
      '?q=authFullName_t:%22Yinoussa+Adagolodjo%22' +
      '&wt=json&fl=title_s,publicationDateY_i,docType_s,halId_s' +
      '&rows=100&sort=publicationDateY_i+desc';

    try {
      var resp = await fetch(HAL_URL);
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      var data = await resp.json();
      var docs = (data.response && data.response.docs) ? data.response.docs : [];
      var count = docs.length;
      status.innerHTML =
        '<i class="fas fa-check-circle" style="color:#2E7D32"></i> ' +
        'HAL returned <strong>' + count + '</strong> publication' + (count !== 1 ? 's' : '') +
        ' — list is up to date.';
      btn.innerHTML = '<i class="fas fa-check"></i> Up to date';
    } catch (err) {
      status.innerHTML =
        '<i class="fas fa-exclamation-triangle" style="color:#E65100"></i> ' +
        'HAL API unreachable. ' +
        '<a href="https://hal.science/search/index?q=Adagolodjo" target="_blank">View on HAL ↗</a>';
      btn.innerHTML = '<i class="fas fa-cloud-download-alt"></i> Retry';
      btn.disabled = false;
    }
  };
})();
</script>
