// HAL Publications Fetcher
// This script fetches publications from HAL API for author "adagolodjo"

class HALPublicationsFetcher {
    constructor(options = {}) {
        this.baseURL = 'https://api.archives-ouvertes.fr/search/';
        this.author = options.author || 'adagolodjo';
        this.halId = options.halId || options.authorId || '';
        this.staticDataUrl = options.staticDataUrl || '/assets/data/hal-publications.json';
        this.publicationsContainer = document.getElementById(options.containerId || 'hal-publications')
            || document.getElementById('publications-list');
        this.loadingIndicator = document.getElementById(options.loadingId || 'publications-loading');
        this.filterYearId = options.filterYearId || 'filter-year';
        this.filterAuthorId = options.filterAuthorId || 'filter-author';
        this.filterKeywordId = options.filterKeywordId || 'filter-keyword';
        this.filterTypeId = options.filterTypeId || 'filter-type';
        this.docs = [];
        this.cacheKey = 'hal_publications_cache_v1';
        this.cacheTtlMs = 1000 * 60 * 60 * 24; // 24h
    }

    async fetchPublications() {
        try {
            // Show loading indicator
            if (this.loadingIndicator) {
                this.loadingIndicator.style.display = 'block';
            }
            // Serve from cache if fresh
            const cached = this.readCache();
            if (cached) {
                this.renderPublications(cached);
                // Also refresh in background
                this.refreshInBackground();
                return;
            }

            // Try prebuilt static JSON (built at CI time)
            try {
                const staticResp = await fetch(this.staticDataUrl, { cache: 'no-cache' });
                if (staticResp.ok) {
                    const staticData = await staticResp.json();
                    const docs = staticData?.response?.docs || staticData?.docs || [];
                    if (Array.isArray(docs) && docs.length > 0) {
                        this.docs = docs;
                        this.renderPublications(this.docs);
                        this.bindFilters();
                        // Refresh in background but don't block UI
                        this.refreshInBackground();
                        return;
                    }
                }
            } catch (_) { /* ignore and fallback to live */ }

            // HAL API query parameters
            const query = this.halId ? `authIdHal_s:${this.halId}` : `authFullName_t:${this.author}`;
            const params = new URLSearchParams({
                q: query,
                rows: 100, // Maximum number of results
                format: 'json',
                fl: 'title_s,authFullName_s,producedDate_s,journalTitle_s,bookTitle_s,conferenceTitle_s,doiId_s,halId_s,uri_s,abstract_s,keyword_s,publicationDate_s,docType_s,volume_s,issue_s,page_s,isbn_s,issn_s'
            });

            const response = await fetch(`${this.baseURL}?${params}`);
            const data = await response.json();

            if (data.response && data.response.docs) {
                this.writeCache(data.response.docs);
                this.docs = data.response.docs;
                this.renderPublications(this.docs);
                this.bindFilters();
            } else {
                this.showError('No publications found');
            }
        } catch (error) {
            console.error('Error fetching publications:', error);
            // Don't show error since we have fallback Jekyll publications
            // this.showError('Error loading publications');
        } finally {
            // Hide loading indicator
            if (this.loadingIndicator) {
                this.loadingIndicator.style.display = 'none';
            }
        }
    }

    readCache() {
        try {
            const raw = localStorage.getItem(this.cacheKey);
            if (!raw) return null;
            const parsed = JSON.parse(raw);
            if (Date.now() - parsed.time > this.cacheTtlMs) return null;
            return Array.isArray(parsed.data) ? parsed.data : null;
        } catch (_) { return null; }
    }

    writeCache(docs) {
        try {
            localStorage.setItem(this.cacheKey, JSON.stringify({ time: Date.now(), data: docs }));
        } catch (_) { /* ignore quota errors */ }
    }

    async refreshInBackground() {
        try {
            const query = this.halId ? `authIdHal_s:${this.halId}` : `authFullName_t:${this.author}`;
            const params = new URLSearchParams({
                q: query,
                rows: 100,
                format: 'json',
                fl: 'title_s,authFullName_s,producedDate_s,journalTitle_s,bookTitle_s,conferenceTitle_s,doiId_s,halId_s,uri_s,abstract_s,keyword_s,publicationDate_s,docType_s,volume_s,issue_s,page_s,isbn_s,issn_s'
            });
            const response = await fetch(`${this.baseURL}?${params}`);
            const data = await response.json();
            if (data.response && data.response.docs) {
                this.writeCache(data.response.docs);
            }
        } catch (_) {}
    }

    renderPublications(publications) {
        if (!this.publicationsContainer) return;

        // Sort publications by year (newest first)
        publications.sort((a, b) => {
            const yearA = this.extractYear(a.producedDate_s || a.publicationDate_s);
            const yearB = this.extractYear(b.producedDate_s || b.publicationDate_s);
            return yearB - yearA;
        });

        // Populate filter controls
        this.populateFilters(publications);

        // Group publications by type
        const grouped = this.groupPublicationsByType(publications);

        let html = '';

        // Journal Articles
        if (grouped.journal.length > 0) {
            html += '<h2>Journal Articles (from HAL)</h2>';
            grouped.journal.forEach(pub => {
                html += this.renderJournalArticle(pub);
            });
        }

        // Conference Papers
        if (grouped.conference.length > 0) {
            html += '<h2>Conference Papers (from HAL)</h2>';
            grouped.conference.forEach(pub => {
                html += this.renderConferencePaper(pub);
            });
        }

        // Book Chapters
        if (grouped.chapter.length > 0) {
            html += '<h2>Book Chapters (from HAL)</h2>';
            grouped.chapter.forEach(pub => {
                html += this.renderBookChapter(pub);
            });
        }

        // Other Publications
        if (grouped.other.length > 0) {
            html += '<h2>Other Publications (from HAL)</h2>';
            grouped.other.forEach(pub => {
                html += this.renderOtherPublication(pub);
            });
        }

        this.publicationsContainer.innerHTML = html;
        
        // Hide manual publications when HAL data is successfully loaded
        const manualPublications = document.getElementById('manual-publications');
        if (manualPublications && publications.length > 0) {
            manualPublications.style.display = 'none';
        }
    }

    populateFilters(publications) {
        const yearSelect = document.getElementById('filter-year');
        if (!yearSelect) return;
        const years = new Set();
        publications.forEach(p => years.add(this.extractYear(p.producedDate_s || p.publicationDate_s)));
        const sorted = [...years].filter(Boolean).sort((a,b)=>b-a);
        yearSelect.innerHTML = '<option value="">Filter by Year</option>' + sorted.map(y=>`<option value="${y}">${y}</option>`).join('');
    }

    bindFilters() {
        const year = document.getElementById(this.filterYearId);
        const author = document.getElementById(this.filterAuthorId);
        const keyword = document.getElementById(this.filterKeywordId);
        const type = document.getElementById(this.filterTypeId);
        const handler = () => this.applyFilters();
        [year, author, keyword, type].forEach(el => el && el.addEventListener('input', handler));
    }

    applyFilters() {
        let filtered = this.docs.slice();
        const yearVal = (document.getElementById(this.filterYearId)?.value || '').trim();
        const authorVal = (document.getElementById(this.filterAuthorId)?.value || '').toLowerCase();
        const keywordVal = (document.getElementById(this.filterKeywordId)?.value || '').toLowerCase();
        const typeVal = (document.getElementById(this.filterTypeId)?.value || '').toLowerCase();

        if (yearVal) {
            filtered = filtered.filter(d => String(this.extractYear(d.producedDate_s || d.publicationDate_s)) === String(yearVal));
        }
        if (authorVal) {
            filtered = filtered.filter(d => (d.authFullName_s || []).join(' ').toLowerCase().includes(authorVal));
        }
        if (keywordVal) {
            const fields = (d) => [d.title_s?.join(' '), d.abstract_s?.join(' '), (d.keyword_s || []).join(' ')].join(' ').toLowerCase();
            filtered = filtered.filter(d => fields(d).includes(keywordVal));
        }
        if (typeVal) {
            const typeMap = this.groupPublicationsByType([d]).journal.length ? 'journal' : this.groupPublicationsByType([d]).conference.length ? 'conference' : 'other';
            // The above is too heavy; instead infer quickly:
        }
        // Lightweight type check
        if (typeVal) {
            filtered = filtered.filter(pub => {
                const docType = (pub.docType_s || '').toLowerCase();
                if (typeVal === 'journal') return docType.includes('art') || !!pub.journalTitle_s;
                if (typeVal === 'conference') return docType.includes('comm') || !!pub.conferenceTitle_s;
                if (typeVal === 'workshop') return docType.includes('workshop');
                return true;
            });
        }

        this.renderPublications(filtered);
    }

    groupPublicationsByType(publications) {
        const grouped = {
            journal: [],
            conference: [],
            chapter: [],
            other: []
        };

        publications.forEach(pub => {
            const docType = pub.docType_s || '';
            
            if (docType.includes('ART') || pub.journalTitle_s) {
                grouped.journal.push(pub);
            } else if (docType.includes('COMM') || pub.conferenceTitle_s) {
                grouped.conference.push(pub);
            } else if (docType.includes('COUV') || pub.bookTitle_s) {
                grouped.chapter.push(pub);
            } else {
                grouped.other.push(pub);
            }
        });

        return grouped;
    }

    renderJournalArticle(pub) {
        const title = pub.title_s?.[0] || 'Untitled';
        const authors = this.formatAuthors(pub.authFullName_s);
        const year = this.extractYear(pub.producedDate_s || pub.publicationDate_s);
        const journal = pub.journalTitle_s?.[0] || '';
        const volume = pub.volume_s?.[0] || '';
        const issue = pub.issue_s?.[0] || '';
        const pages = pub.page_s?.[0] || '';
        const doi = pub.doiId_s?.[0] || '';
        const halId = pub.halId_s?.[0] || '';
        const uri = pub.uri_s?.[0] || '';

        return `
            <div class="publication-item">
                <h3 class="publication-title">${title}</h3>
                <p class="publication-authors">${authors}</p>
                <p class="publication-venue">
                    <em>${journal}</em> (${year})
                    ${volume ? `, Vol. ${volume}` : ''}
                    ${issue ? `, Issue ${issue}` : ''}
                    ${pages ? `, pp. ${pages}` : ''}
                </p>
                <div class="publication-links">
                    ${doi ? `<a href="https://doi.org/${doi}" class="button is-small is-primary" target="_blank">
                        <span class="icon"><i class="fas fa-external-link-alt"></i></span>
                        <span>DOI</span>
                    </a>` : ''}
                    ${uri ? `<a href="${uri}" class="button is-small is-info" target="_blank">
                        <span class="icon"><i class="fas fa-file-alt"></i></span>
                        <span>HAL</span>
                    </a>` : ''}
                    ${halId ? `<a href="https://hal.science/${halId}/bibtex" class="button is-small" target="_blank">
                        <span class="icon"><i class="fas fa-code"></i></span>
                        <span>BibTeX</span>
                    </a>` : ''}
                </div>
            </div>
        `;
    }

    renderConferencePaper(pub) {
        const title = pub.title_s?.[0] || 'Untitled';
        const authors = this.formatAuthors(pub.authFullName_s);
        const year = this.extractYear(pub.producedDate_s || pub.publicationDate_s);
        const conference = pub.conferenceTitle_s?.[0] || '';
        const doi = pub.doiId_s?.[0] || '';
        const uri = pub.uri_s?.[0] || '';

        return `
            <div class="publication-item">
                <h3 class="publication-title">${title}</h3>
                <p class="publication-authors">${authors}</p>
                <p class="publication-venue">
                    <em>${conference}</em> (${year})
                </p>
                <div class="publication-links">
                    ${doi ? `<a href="https://doi.org/${doi}" class="button is-small is-primary" target="_blank">
                        <span class="icon"><i class="fas fa-external-link-alt"></i></span>
                        <span>DOI</span>
                    </a>` : ''}
                    ${uri ? `<a href="${uri}" class="button is-small is-info" target="_blank">
                        <span class="icon"><i class="fas fa-file-alt"></i></span>
                        <span>HAL</span>
                    </a>` : ''}
                    ${halId ? `<a href="https://hal.science/${halId}/bibtex" class="button is-small" target="_blank">
                        <span class="icon"><i class="fas fa-code"></i></span>
                        <span>BibTeX</span>
                    </a>` : ''}
                </div>
            </div>
        `;
    }

    renderBookChapter(pub) {
        const title = pub.title_s?.[0] || 'Untitled';
        const authors = this.formatAuthors(pub.authFullName_s);
        const year = this.extractYear(pub.producedDate_s || pub.publicationDate_s);
        const book = pub.bookTitle_s?.[0] || '';
        const doi = pub.doiId_s?.[0] || '';
        const uri = pub.uri_s?.[0] || '';

        return `
            <div class="publication-item">
                <h3 class="publication-title">${title}</h3>
                <p class="publication-authors">${authors}</p>
                <p class="publication-venue">
                    In: <em>${book}</em> (${year})
                </p>
                <div class="publication-links">
                    ${doi ? `<a href="https://doi.org/${doi}" class="button is-small is-primary" target="_blank">
                        <span class="icon"><i class="fas fa-external-link-alt"></i></span>
                        <span>DOI</span>
                    </a>` : ''}
                    ${uri ? `<a href="${uri}" class="button is-small is-info" target="_blank">
                        <span class="icon"><i class="fas fa-file-alt"></i></span>
                        <span>HAL</span>
                    </a>` : ''}
                    ${halId ? `<a href="https://hal.science/${halId}/bibtex" class="button is-small" target="_blank">
                        <span class="icon"><i class="fas fa-code"></i></span>
                        <span>BibTeX</span>
                    </a>` : ''}
                </div>
            </div>
        `;
    }

    renderOtherPublication(pub) {
        const title = pub.title_s?.[0] || 'Untitled';
        const authors = this.formatAuthors(pub.authFullName_s);
        const year = this.extractYear(pub.producedDate_s || pub.publicationDate_s);
        const doi = pub.doiId_s?.[0] || '';
        const uri = pub.uri_s?.[0] || '';

        return `
            <div class="publication-item">
                <h3 class="publication-title">${title}</h3>
                <p class="publication-authors">${authors}</p>
                <p class="publication-venue">${year}</p>
                <div class="publication-links">
                    ${doi ? `<a href="https://doi.org/${doi}" class="button is-small is-primary" target="_blank">
                        <span class="icon"><i class="fas fa-external-link-alt"></i></span>
                        <span>DOI</span>
                    </a>` : ''}
                    ${uri ? `<a href="${uri}" class="button is-small is-info" target="_blank">
                        <span class="icon"><i class="fas fa-file-alt"></i></span>
                        <span>HAL</span>
                    </a>` : ''}
                    ${halId ? `<a href="https://hal.science/${halId}/bibtex" class="button is-small" target="_blank">
                        <span class="icon"><i class="fas fa-code"></i></span>
                        <span>BibTeX</span>
                    </a>` : ''}
                </div>
            </div>
        `;
    }

    formatAuthors(authors) {
        if (!authors || !Array.isArray(authors)) return '';
        
        // Highlight the main author (adagolodjo)
        return authors.map(author => {
            if (author.toLowerCase().includes('adagolodjo')) {
                return `<strong>${author}</strong>`;
            }
            return author;
        }).join(', ');
    }

    extractYear(dateString) {
        if (!dateString) return 0;
        const match = dateString.match(/\d{4}/);
        return match ? parseInt(match[0]) : 0;
    }

    showError(message) {
        if (this.publicationsContainer) {
            this.publicationsContainer.innerHTML = `
                <div class="notification is-danger">
                    <p>${message}</p>
                    <p>Please check your internet connection and try again.</p>
                </div>
            `;
        }
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    const fetcher = new HALPublicationsFetcher();
    fetcher.fetchPublications();
});
