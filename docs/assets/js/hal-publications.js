// HAL Publications Fetcher
// This script fetches publications from HAL API for author "adagolodjo"

class HALPublicationsFetcher {
    constructor() {
        this.baseURL = 'https://api.archives-ouvertes.fr/search/';
        this.author = 'adagolodjo';
        this.publicationsContainer = document.getElementById('hal-publications');
        this.loadingIndicator = document.getElementById('publications-loading');
    }

    async fetchPublications() {
        try {
            // Show loading indicator
            if (this.loadingIndicator) {
                this.loadingIndicator.style.display = 'block';
            }

            // HAL API query parameters
            const params = new URLSearchParams({
                q: `authFullName_t:${this.author}`,
                rows: 100, // Maximum number of results
                format: 'json',
                fl: 'title_s,authFullName_s,producedDate_s,journalTitle_s,bookTitle_s,conferenceTitle_s,doiId_s,halId_s,uri_s,abstract_s,keyword_s,publicationDate_s,docType_s,volume_s,issue_s,page_s,isbn_s,issn_s'
            });

            const response = await fetch(`${this.baseURL}?${params}`);
            const data = await response.json();

            if (data.response && data.response.docs) {
                this.renderPublications(data.response.docs);
            } else {
                this.showError('No publications found');
            }
        } catch (error) {
            console.error('Error fetching publications:', error);
            this.showError('Error loading publications');
        } finally {
            // Hide loading indicator
            if (this.loadingIndicator) {
                this.loadingIndicator.style.display = 'none';
            }
        }
    }

    renderPublications(publications) {
        if (!this.publicationsContainer) return;

        // Sort publications by year (newest first)
        publications.sort((a, b) => {
            const yearA = this.extractYear(a.producedDate_s || a.publicationDate_s);
            const yearB = this.extractYear(b.producedDate_s || b.publicationDate_s);
            return yearB - yearA;
        });

        // Group publications by type
        const grouped = this.groupPublicationsByType(publications);

        let html = '';

        // Journal Articles
        if (grouped.journal.length > 0) {
            html += '<h2>Journal Articles</h2>';
            grouped.journal.forEach(pub => {
                html += this.renderJournalArticle(pub);
            });
        }

        // Conference Papers
        if (grouped.conference.length > 0) {
            html += '<h2>Conference Papers</h2>';
            grouped.conference.forEach(pub => {
                html += this.renderConferencePaper(pub);
            });
        }

        // Book Chapters
        if (grouped.chapter.length > 0) {
            html += '<h2>Book Chapters</h2>';
            grouped.chapter.forEach(pub => {
                html += this.renderBookChapter(pub);
            });
        }

        // Other Publications
        if (grouped.other.length > 0) {
            html += '<h2>Other Publications</h2>';
            grouped.other.forEach(pub => {
                html += this.renderOtherPublication(pub);
            });
        }

        this.publicationsContainer.innerHTML = html;
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
