// Advanced Research Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
  try {
    initializeAdvancedFeatures();
  } catch (error) {
    console.error('Error initializing research page features:', error);
  }
});

function initializeAdvancedFeatures() {
  // Only initialize features if elements exist
  if (document.querySelector('.citation-number, .stat-number, .pub-stat-number')) {
    animateCounters();
  }
  
  if (document.querySelector('.metric-card, .news-card, .resource-item, .publication-item')) {
    initializeScrollAnimations();
  }
  
  if (document.getElementById('publication-search') || document.getElementById('author-filter')) {
    initializeFiltering();
  }
  
  // Initialize other features only if their containers exist
  if (document.querySelector('.collaboration-network')) {
    initializeCollaborationNetwork();
  }
  
  if (document.querySelector('.publications-enhanced')) {
    initializePublicationsEnhanced();
  }
  
  if (document.querySelector('.resources-interactive')) {
    initializeResourcesInteractivity();
  }
  
  if (document.querySelector('.news-grid')) {
    loadResearchNews();
  }
  
  if (document.querySelector('.metrics-charts')) {
    setupMetricsCharts();
  }
}

// Counter Animation for Metrics
function animateCounters() {
  const counters = document.querySelectorAll('.citation-number, .stat-number, .pub-stat-number');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
  const target = parseInt(element.textContent) || 0;
  const duration = 2000;
  const increment = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

// Scroll Animations
function initializeScrollAnimations() {
  const animatedElements = document.querySelectorAll('.metric-card, .news-card, .resource-item, .publication-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(el => observer.observe(el));
}

// Enhanced Filtering
function initializeFiltering() {
  const searchInput = document.getElementById('publication-search');
  const authorFilter = document.getElementById('author-filter');
  const keywordFilter = document.getElementById('keyword-filter');
  const yearFilter = document.getElementById('year-filter');
  const typeFilter = document.getElementById('type-filter');

  if (searchInput) {
    searchInput.addEventListener('input', debounce(filterPublications, 300));
  }
  
  [authorFilter, keywordFilter, yearFilter, typeFilter].forEach(filter => {
    if (filter) {
      filter.addEventListener('change', filterPublications);
    }
  });
}

function filterPublications() {
  const searchTerm = document.getElementById('publication-search')?.value.toLowerCase() || '';
  const authorFilter = document.getElementById('author-filter')?.value || '';
  const keywordFilter = document.getElementById('keyword-filter')?.value || '';
  const yearFilter = document.getElementById('year-filter')?.value || '';
  const typeFilter = document.getElementById('type-filter')?.value || '';

  const publications = document.querySelectorAll('.publication-item');
  
  publications.forEach(pub => {
    const title = pub.querySelector('.publication-title')?.textContent.toLowerCase() || '';
    const authors = pub.querySelector('.publication-authors')?.textContent.toLowerCase() || '';
    const keywords = pub.dataset.keywords?.toLowerCase() || '';
    const year = pub.dataset.year || '';
    const type = pub.dataset.type || '';

    const matchesSearch = title.includes(searchTerm) || authors.includes(searchTerm);
    const matchesAuthor = !authorFilter || authors.includes(authorFilter.toLowerCase());
    const matchesKeyword = !keywordFilter || keywords.includes(keywordFilter.toLowerCase());
    const matchesYear = !yearFilter || year === yearFilter;
    const matchesType = !typeFilter || type === typeFilter;

    if (matchesSearch && matchesAuthor && matchesKeyword && matchesYear && matchesType) {
      pub.style.display = 'block';
      pub.classList.add('fade-in');
    } else {
      pub.style.display = 'none';
    }
  });
}

// Collaboration Network Visualization
function initializeCollaborationNetwork() {
  const networkChart = document.querySelector('.network-chart');
  if (networkChart) {
    renderCollaborationNetwork(networkChart);
  }
  
  // Animate collaboration strength bars
  const strengthBars = document.querySelectorAll('.strength-bar');
  strengthBars.forEach(bar => {
    const width = bar.dataset.strength || '0';
    setTimeout(() => {
      bar.style.width = width + '%';
    }, Math.random() * 1000);
  });
}

function renderCollaborationNetwork(container) {
  // Simple network visualization with D3-like approach using vanilla JS
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '100%');
  svg.setAttribute('height', '300');
  svg.style.position = 'absolute';
  svg.style.top = '0';
  svg.style.left = '0';
  
  // Sample network data
  const nodes = [
    { id: 'me', x: 250, y: 150, type: 'institution', label: 'Adagolodjo' },
    { id: 'collab1', x: 150, y: 100, type: 'collaborator', label: 'Dr. Smith' },
    { id: 'collab2', x: 350, y: 100, type: 'collaborator', label: 'Prof. Johnson' },
    { id: 'collab3', x: 100, y: 200, type: 'project', label: 'SOFA Project' },
    { id: 'collab4', x: 400, y: 200, type: 'project', label: 'ROS Medical' }
  ];
  
  const links = [
    { source: 'me', target: 'collab1' },
    { source: 'me', target: 'collab2' },
    { source: 'me', target: 'collab3' },
    { source: 'me', target: 'collab4' },
    { source: 'collab1', target: 'collab3' }
  ];
  
  // Draw links
  links.forEach(link => {
    const sourceNode = nodes.find(n => n.id === link.source);
    const targetNode = nodes.find(n => n.id === link.target);
    
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', sourceNode.x);
    line.setAttribute('y1', sourceNode.y);
    line.setAttribute('x2', targetNode.x);
    line.setAttribute('y2', targetNode.y);
    line.setAttribute('stroke', 'rgba(72,170,173,0.3)');
    line.setAttribute('stroke-width', '2');
    svg.appendChild(line);
  });
  
  // Draw nodes
  nodes.forEach(node => {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', node.x);
    circle.setAttribute('cy', node.y);
    circle.setAttribute('r', node.type === 'institution' ? '15' : '10');
    
    const colors = {
      institution: '#016064',   // Ocean primary
      collaborator: '#48AAAD',  // Teal
      project: '#5CC8CB'        // Light Teal
    };
    
    circle.setAttribute('fill', colors[node.type]);
    circle.style.cursor = 'pointer';
    
    // Add hover effect
    circle.addEventListener('mouseenter', () => {
      circle.setAttribute('r', parseInt(circle.getAttribute('r')) + 3);
    });
    
    circle.addEventListener('mouseleave', () => {
      circle.setAttribute('r', node.type === 'institution' ? '15' : '10');
    });
    
    svg.appendChild(circle);
    
    // Add labels
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', node.x);
    text.setAttribute('y', node.y + 25);
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('font-size', '12');
    text.setAttribute('fill', '#4A7A7C');
    text.textContent = node.label;
    svg.appendChild(text);
  });
  
  container.appendChild(svg);
}

// Enhanced Publications Management
function initializePublicationsEnhanced() {
  setupExportButtons();
  loadPublicationAnalytics();
  setupCitationTracking();
}

function setupExportButtons() {
  const exportBibtex = document.getElementById('export-bibtex');
  const exportCsv = document.getElementById('export-csv');
  const viewAnalytics = document.getElementById('view-analytics');
  
  if (exportBibtex) {
    exportBibtex.addEventListener('click', () => {
      exportPublications('bibtex');
    });
  }
  
  if (exportCsv) {
    exportCsv.addEventListener('click', () => {
      exportPublications('csv');
    });
  }
  
  if (viewAnalytics) {
    viewAnalytics.addEventListener('click', showPublicationAnalytics);
  }
}

function exportPublications(format) {
  const visiblePubs = document.querySelectorAll('.publication-item:not([style*="display: none"])');
  let content = '';
  
  if (format === 'bibtex') {
    content = generateBibtex(visiblePubs);
    downloadFile(content, 'publications.bib', 'text/plain');
  } else if (format === 'csv') {
    content = generateCSV(visiblePubs);
    downloadFile(content, 'publications.csv', 'text/csv');
  }
}

function generateBibtex(publications) {
  let bibtex = '';
  publications.forEach((pub, index) => {
    const title = pub.querySelector('.publication-title')?.textContent || '';
    const authors = pub.querySelector('.publication-authors')?.textContent || '';
    const year = pub.dataset.year || new Date().getFullYear();
    
    bibtex += `@article{pub${index + 1},
  title={${title}},
  author={${authors}},
  year={${year}}
}

`;
  });
  return bibtex;
}

function generateCSV(publications) {
  let csv = 'Title,Authors,Year,Type\n';
  publications.forEach(pub => {
    const title = pub.querySelector('.publication-title')?.textContent || '';
    const authors = pub.querySelector('.publication-authors')?.textContent || '';
    const year = pub.dataset.year || '';
    const type = pub.dataset.type || '';
    
    csv += `"${title}","${authors}","${year}","${type}"\n`;
  });
  return csv;
}

function downloadFile(content, filename, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Resources Interactivity
function initializeResourcesInteractivity() {
  const resourceItems = document.querySelectorAll('.resource-item');
  
  resourceItems.forEach(item => {
    const downloadBtn = item.querySelector('.btn-download');
    const githubBtn = item.querySelector('.btn-github');
    
    if (downloadBtn) {
      downloadBtn.addEventListener('click', () => {
        trackResourceDownload(item.dataset.resourceId);
        updateDownloadCount(item);
      });
    }
    
    if (githubBtn) {
      githubBtn.addEventListener('click', () => {
        trackResourceView(item.dataset.resourceId);
      });
    }
  });
}

function trackResourceDownload(resourceId) {
  // Simulate download tracking
  console.log(`Tracking download for resource: ${resourceId}`);
}

function trackResourceView(resourceId) {
  // Simulate view tracking
  console.log(`Tracking view for resource: ${resourceId}`);
}

function updateDownloadCount(item) {
  const countEl = item.querySelector('.download-count');
  if (countEl) {
    const currentCount = parseInt(countEl.textContent) || 0;
    countEl.textContent = currentCount + 1;
  }
}

// Research News Loading
function loadResearchNews() {
  // Simulate loading research news from an API
  const newsGrid = document.querySelector('.news-grid');
  if (!newsGrid) return;
  
  // Add loading animation
  newsGrid.classList.add('loading');
  
  setTimeout(() => {
    newsGrid.classList.remove('loading');
    animateNewsCards();
  }, 1000);
}

function animateNewsCards() {
  const newsCards = document.querySelectorAll('.news-card');
  newsCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('fade-in');
    }, index * 100);
  });
}

// Fallback functions for missing features
function initializeCollaborationNetwork() {
  // Placeholder for collaboration network feature
  console.log('Collaboration network feature not implemented yet');
}

function initializePublicationsEnhanced() {
  // Placeholder for enhanced publications feature
  console.log('Enhanced publications feature not implemented yet');
}

function initializeResourcesInteractivity() {
  // Placeholder for resources interactivity feature
  console.log('Resources interactivity feature not implemented yet');
}

function setupMetricsCharts() {
  // Placeholder for metrics charts feature
  console.log('Metrics charts feature not implemented yet');
}

// Metrics Charts Setup
function setupMetricsCharts() {
  const citationChart = document.querySelector('.citation-chart');
  const timelineChart = document.querySelector('.timeline-chart');
  
  if (citationChart) {
    renderCitationChart(citationChart);
  }
  
  if (timelineChart) {
    renderTimelineChart(timelineChart);
  }
}

function renderCitationChart(container) {
  // Simple bar chart for citations
  const data = [
    { year: '2019', citations: 45 },
    { year: '2020', citations: 67 },
    { year: '2021', citations: 89 },
    { year: '2022', citations: 124 },
    { year: '2023', citations: 156 },
    { year: '2024', citations: 98 }
  ];
  
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '100%');
  svg.setAttribute('height', '180');
  
  const maxCitations = Math.max(...data.map(d => d.citations));
  const barWidth = 40;
  const barSpacing = 50;
  const startX = 30;
  
  data.forEach((d, i) => {
    const barHeight = (d.citations / maxCitations) * 120;
    const x = startX + i * barSpacing;
    const y = 140 - barHeight;
    
    // Bar
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', x);
    rect.setAttribute('y', y);
    rect.setAttribute('width', barWidth);
    rect.setAttribute('height', barHeight);
    rect.setAttribute('fill', '#016064');
    rect.setAttribute('rx', '4');
    
    // Add animation
    rect.style.transformOrigin = 'bottom';
    rect.style.animation = `scaleUp 0.8s ease-out ${i * 0.1}s both`;
    
    svg.appendChild(rect);
    
    // Year label
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', x + barWidth / 2);
    text.setAttribute('y', 160);
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('font-size', '12');
    text.setAttribute('fill', '#4A7A7C');
    text.textContent = d.year;
    svg.appendChild(text);
    
    // Citation count
    const countText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    countText.setAttribute('x', x + barWidth / 2);
    countText.setAttribute('y', y - 5);
    countText.setAttribute('text-anchor', 'middle');
    countText.setAttribute('font-size', '11');
    countText.setAttribute('fill', '#1A3A3C');
    countText.textContent = d.citations;
    svg.appendChild(countText);
  });
  
  container.appendChild(svg);
}

function renderTimelineChart(container) {
  // Simple timeline visualization
  const events = [
    { year: '2018', event: 'PhD Started',        color: '#016064' },
    { year: '2020', event: 'First Publication',  color: '#48AAAD' },
    { year: '2022', event: 'PhD Defense',        color: '#0097A7' },
    { year: '2023', event: 'Assistant Professor', color: '#013A3C' },
    { year: '2024', event: 'Research Grant',     color: '#5CC8CB' }
  ];
  
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '100%');
  svg.setAttribute('height', '180');
  
  // Timeline line
  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line.setAttribute('x1', '50');
  line.setAttribute('y1', '90');
  line.setAttribute('x2', '350');
  line.setAttribute('y2', '90');
  line.setAttribute('stroke', '#e2e8f0');
  line.setAttribute('stroke-width', '3');
  svg.appendChild(line);
  
  events.forEach((event, i) => {
    const x = 50 + (i * 75);
    
    // Event circle
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', x);
    circle.setAttribute('cy', '90');
    circle.setAttribute('r', '8');
    circle.setAttribute('fill', event.color);
    circle.style.animation = `fadeIn 0.6s ease-out ${i * 0.2}s both`;
    svg.appendChild(circle);
    
    // Year
    const yearText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    yearText.setAttribute('x', x);
    yearText.setAttribute('y', '70');
    yearText.setAttribute('text-anchor', 'middle');
    yearText.setAttribute('font-size', '12');
    yearText.setAttribute('font-weight', '600');
    yearText.setAttribute('fill', '#1A3A3C');
    yearText.textContent = event.year;
    svg.appendChild(yearText);
    
    // Event
    const eventText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    eventText.setAttribute('x', x);
    eventText.setAttribute('y', '115');
    eventText.setAttribute('text-anchor', 'middle');
    eventText.setAttribute('font-size', '10');
    eventText.setAttribute('fill', '#4A7A7C');
    eventText.textContent = event.event;
    svg.appendChild(eventText);
  });
  
  container.appendChild(svg);
}

// Utility Functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function showPublicationAnalytics() {
  // Create modal or navigate to analytics page
  alert('Publication analytics would open here');
}

function loadPublicationAnalytics() {
  // Load analytics data
  console.log('Loading publication analytics...');
}

function setupCitationTracking() {
  // Setup citation tracking
  console.log('Setting up citation tracking...');
}

// Add CSS animations via JavaScript
const style = document.createElement('style');
style.textContent = `
  @keyframes scaleUp {
    from {
      transform: scaleY(0);
    }
    to {
      transform: scaleY(1);
    }
  }
`;
document.head.appendChild(style);
