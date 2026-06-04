// ===========================================
// HOME MODERN - INTERACTIONS JAVASCRIPT
// ===========================================

document.addEventListener('DOMContentLoaded', function() {

    // ===========================================
    // NAVIGATION SCROLL EFFECT
    // ===========================================

    const heroNav = document.querySelector('.hero-nav');
    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateNavigation() {
        const scrollY = window.scrollY;

        if (scrollY > 50) {
            heroNav?.classList.add('scrolled');
        } else {
            heroNav?.classList.remove('scrolled');
        }

        // Masquer/afficher la navigation au scroll
        if (scrollY > lastScrollY && scrollY > 200) {
            heroNav?.classList.add('nav-hidden');
        } else {
            heroNav?.classList.remove('nav-hidden');
        }

        lastScrollY = scrollY;
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateNavigation);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick, { passive: true });

    // ===========================================
    // THEME TOGGLE
    // ===========================================

    const themeToggle = document.getElementById('themeToggle');
    let isDark = localStorage.getItem('theme') === 'light' ? false : true;

    function toggleTheme() {
        isDark = !isDark;
        const icon = themeToggle?.querySelector('i');

        if (icon) {
            icon.className = isDark ? 'fas fa-moon' : 'fas fa-sun';
        }

        // Appliquer le thème
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');

        // Animation de transition
        document.body.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }

    // Initialiser le thème
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.className = isDark ? 'fas fa-moon' : 'fas fa-sun';
        }
        themeToggle.addEventListener('click', toggleTheme);
    }

    // ===========================================
    // PARALLAX EFFECT POUR DECORATIVE ELEMENTS
    // ===========================================

    let mouseX = 0;
    let mouseY = 0;
    let isMoving = false;

    function updateParallax() {
        const particles = document.querySelectorAll('.particle, .shape');
        const decorativeElements = document.querySelectorAll('.floating-bulb');

        particles.forEach((particle, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed * 10;
            const y = (mouseY - 0.5) * speed * 10;

            particle.style.transform = `translate(${x}px, ${y}px)`;
        });

        decorativeElements.forEach((element, index) => {
            const speed = (index + 1) * 0.3;
            const x = (mouseX - 0.5) * speed * 8;
            const y = (mouseY - 0.5) * speed * 8;

            element.style.transform = `translate(${x}px, ${y}px)`;
        });

        isMoving = false;
    }

    function onMouseMove(e) {
        if (!isMoving) {
            mouseX = e.clientX / window.innerWidth;
            mouseY = e.clientY / window.innerHeight;

            requestAnimationFrame(updateParallax);
            isMoving = true;
        }
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // ===========================================
    // INTERSECTION OBSERVER POUR ANIMATIONS
    // ===========================================

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');

                // Animation en cascade pour les cartes de projet
                if (entry.target.classList.contains('project-card')) {
                    const cards = document.querySelectorAll('.project-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('animate-in');
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);

    // Observer les éléments à animer
    const elementsToAnimate = document.querySelectorAll(
        '.hero-left, .hero-right, .featured-header, .project-card, .about-footer-main'
    );

    elementsToAnimate.forEach(el => {
        animateOnScroll.observe(el);
    });

    // ===========================================
    // GESTION DES VIDEOS DE PROJETS
    // ===========================================

    const projectVideos = document.querySelectorAll('.project-image video');

    projectVideos.forEach(video => {
        const card = video.closest('.project-card');

        if (card) {
            // Pause video quand elle sort de la vue
            const videoObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        video.play().catch(console.log);
                    } else {
                        video.pause();
                    }
                });
            });

            videoObserver.observe(card);

            // Contrôles au hover
            card.addEventListener('mouseenter', () => {
                video.play().catch(console.log);
            });

            card.addEventListener('mouseleave', () => {
                video.pause();
            });
        }
    });

    // ===========================================
    // SMOOTH SCROLLING POUR LES LIENS
    // ===========================================

    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===========================================
    // LOADING STATES POUR LES BOUTONS
    // ===========================================

    const ctaButtons = document.querySelectorAll('.cta-button');

    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Si c'est un lien externe, ajouter un état de chargement
            if (this.getAttribute('target') === '_blank') {
                this.classList.add('loading');
                this.style.pointerEvents = 'none';

                setTimeout(() => {
                    this.classList.remove('loading');
                    this.style.pointerEvents = '';
                }, 1000);
            }
        });
    });

    // ===========================================
    // TYPING EFFECT POUR LE TITRE
    // ===========================================

    function typeWriter() {
        const heroTitle = document.querySelector('.hero-main-name');
        if (!heroTitle) return;

        const text = heroTitle.textContent;
        const speed = 100; // ms par caractère
        let i = 0;

        // Masquer le texte initialement
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '2px solid currentColor';

        function type() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                // Supprimer le curseur après la frappe
                setTimeout(() => {
                    heroTitle.style.borderRight = 'none';
                }, 500);
            }
        }

        // Démarrer l'effet après un délai
        setTimeout(type, 1000);
    }

    // Activer l'effet de frappe seulement si préféré
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
        typeWriter();
    }

    // ===========================================
    // CURSOR TRAIL EFFECT
    // ===========================================

    function createCursorTrail() {
        if (prefersReducedMotion) return;

        let trail = [];
        const trailLength = 6;

        function updateTrail(e) {
            trail.push({ x: e.clientX, y: e.clientY, time: Date.now() });

            // Limiter la longueur du trail
            if (trail.length > trailLength) {
                trail.shift();
            }

            // Nettoyer les anciens points
            trail = trail.filter(point => Date.now() - point.time < 1000);
        }

        function renderTrail() {
            const existingTrails = document.querySelectorAll('.cursor-trail');
            existingTrails.forEach(t => t.remove());

            trail.forEach((point, index) => {
                const dot = document.createElement('div');
                dot.className = 'cursor-trail';
                dot.style.cssText = `
                    position: fixed;
                    width: ${4 + index}px;
                    height: ${4 + index}px;
                    background: radial-gradient(circle, rgba(100, 181, 246, ${0.8 - index * 0.1}), transparent);
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 9999;
                    left: ${point.x - (2 + index/2)}px;
                    top: ${point.y - (2 + index/2)}px;
                    transition: opacity 0.3s ease;
                `;

                document.body.appendChild(dot);

                // Fade out
                setTimeout(() => {
                    dot.style.opacity = '0';
                    setTimeout(() => dot.remove(), 300);
                }, 50);
            });

            requestAnimationFrame(renderTrail);
        }

        document.addEventListener('mousemove', updateTrail, { passive: true });
        renderTrail();
    }

    // Activer le trail du curseur sur desktop uniquement
    if (!window.matchMedia('(max-width: 768px)').matches && !prefersReducedMotion) {
        createCursorTrail();
    }

    // ===========================================
    // PROJECT CARD INTERACTIONS
    // ===========================================

    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        const overlay = card.querySelector('.project-overlay');
        const image = card.querySelector('.project-image img, .project-image video');

        // Effet de tilt 3D
        card.addEventListener('mousemove', function(e) {
            if (prefersReducedMotion) return;

            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-8px)
            `;
        });

        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });

        // Click analytics (si Google Analytics est présent)
        card.addEventListener('click', function() {
            const projectName = card.getAttribute('data-project');
            if (typeof gtag !== 'undefined' && projectName) {
                gtag('event', 'project_click', {
                    'project_name': projectName,
                    'event_category': 'engagement'
                });
            }
        });
    });

    // ===========================================
    // FORM VALIDATION ET FEEDBACK
    // ===========================================

    const contactForms = document.querySelectorAll('form[action*="contact"]');

    contactForms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea');

        inputs.forEach(input => {
            // Validation en temps réel
            input.addEventListener('blur', function() {
                validateField(this);
            });

            input.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    validateField(this);
                }
            });
        });

        // Soumission du formulaire
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            let isValid = true;
            inputs.forEach(input => {
                if (!validateField(input)) {
                    isValid = false;
                }
            });

            if (isValid) {
                submitForm(form);
            }
        });
    });

    function validateField(field) {
        const value = field.value.trim();
        const type = field.type;
        const required = field.hasAttribute('required');

        // Supprimer les anciennes erreurs
        field.classList.remove('error', 'success');
        const existingError = field.parentNode.querySelector('.error-message');
        if (existingError) existingError.remove();

        let isValid = true;
        let errorMessage = '';

        if (required && !value) {
            isValid = false;
            errorMessage = 'Ce champ est requis';
        } else if (value) {
            switch (type) {
                case 'email':
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(value)) {
                        isValid = false;
                        errorMessage = 'Adresse email invalide';
                    }
                    break;
                case 'tel':
                    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
                    if (!phoneRegex.test(value)) {
                        isValid = false;
                        errorMessage = 'Numéro de téléphone invalide';
                    }
                    break;
            }
        }

        if (!isValid) {
            field.classList.add('error');
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.textContent = errorMessage;
            field.parentNode.appendChild(errorDiv);
        } else if (value) {
            field.classList.add('success');
        }

        return isValid;
    }

    function submitForm(form) {
        const submitButton = form.querySelector('button[type="submit"], input[type="submit"]');
        const originalText = submitButton.textContent;

        // État de chargement
        submitButton.textContent = 'Envoi en cours...';
        submitButton.disabled = true;
        form.classList.add('loading');

        // Simulation d'envoi (remplacer par vraie logique)
        setTimeout(() => {
            // Succès
            showNotification('Message envoyé avec succès !', 'success');
            form.reset();
            form.classList.remove('loading');
            submitButton.textContent = originalText;
            submitButton.disabled = false;

            // Supprimer les états de validation
            form.querySelectorAll('.success, .error').forEach(el => {
                el.classList.remove('success', 'error');
            });
            form.querySelectorAll('.error-message').forEach(el => el.remove());
        }, 2000);
    }

    // ===========================================
    // SYSTÈME DE NOTIFICATIONS
    // ===========================================

    function showNotification(message, type = 'info', duration = 5000) {
        // Créer le conteneur de notifications s'il n'existe pas
        let container = document.querySelector('.notification-container');
        if (!container) {
            container = document.createElement('div');
            container.className = 'notification-container';
            container.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 10000;
                display: flex;
                flex-direction: column;
                gap: 10px;
            `;
            document.body.appendChild(container);
        }

        // Créer la notification
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.cssText = `
            background: ${getNotificationColor(type)};
            color: white;
            padding: 16px 24px;
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            transform: translateX(400px);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            max-width: 350px;
            word-wrap: break-word;
            font-weight: 500;
        `;

        notification.textContent = message;
        container.appendChild(notification);

        // Animation d'entrée
        requestAnimationFrame(() => {
            notification.style.transform = 'translateX(0)';
        });

        // Auto-suppression
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, duration);

        // Clic pour fermer
        notification.addEventListener('click', () => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        });
    }

    function getNotificationColor(type) {
        const colors = {
            success: 'linear-gradient(135deg, #4caf50, #45a049)',
            error: 'linear-gradient(135deg, #f44336, #d32f2f)',
            warning: 'linear-gradient(135deg, #ff9800, #f57c00)',
            info: 'linear-gradient(135deg, #2196f3, #1976d2)'
        };
        return colors[type] || colors.info;
    }

    // ===========================================
    // LAZY LOADING AMÉLIORÉ
    // ===========================================

    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;

                    // Créer une version haute qualité si elle existe
                    const src = img.getAttribute('src');
                    const hiResSrc = img.getAttribute('data-src-hires');

                    if (hiResSrc) {
                        const hiResImg = new Image();
                        hiResImg.onload = function() {
                            img.src = hiResSrc;
                            img.classList.add('loaded');
                        };
                        hiResImg.src = hiResSrc;
                    } else {
                        img.classList.add('loaded');
                    }

                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // ===========================================
    // PERFORMANCE MONITORING
    // ===========================================

    // Mesurer les métriques de performance
    function measurePerformance() {
        if ('performance' in window) {
            window.addEventListener('load', () => {
                setTimeout(() => {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
                    const domContentLoaded = perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart;

                    console.log('Performance Metrics:', {
                        loadTime: `${loadTime}ms`,
                        domContentLoaded: `${domContentLoaded}ms`,
                        totalLoadTime: `${perfData.loadEventEnd - perfData.fetchStart}ms`
                    });

                    // Envoyer à l'analytics si disponible
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'page_performance', {
                            'load_time': Math.round(loadTime),
                            'dom_load_time': Math.round(domContentLoaded)
                        });
                    }
                }, 0);
            });
        }
    }

    measurePerformance();

    // ===========================================
    // EASTER EGG - KONAMI CODE
    // ===========================================

    const konamiCode = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA'
    ];
    let konamiIndex = 0;

    document.addEventListener('keydown', function(e) {
        if (e.code === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                // Activer l'easter egg
                activateEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    function activateEasterEgg() {
        // Animation spéciale
        document.body.style.animation = 'rainbow 2s ease-in-out';
        showNotification('🎉 Easter egg activé ! Vous êtes un vrai geek !', 'success');

        // Ajouter des confettis
        createConfetti();

        // CSS pour l'animation rainbow
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                25% { filter: hue-rotate(90deg); }
                50% { filter: hue-rotate(180deg); }
                75% { filter: hue-rotate(270deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(style);

        setTimeout(() => {
            document.body.style.animation = '';
            document.head.removeChild(style);
        }, 2000);
    }

    function createConfetti() {
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b'];

        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                width: 10px;
                height: 10px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                top: -10px;
                left: ${Math.random() * 100}vw;
                z-index: 10000;
                pointer-events: none;
                border-radius: 50%;
            `;

            document.body.appendChild(confetti);

            // Animation de chute
            const animation = confetti.animate([
                { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
                { transform: `translateY(100vh) rotate(${Math.random() * 360}deg)`, opacity: 0 }
            ], {
                duration: Math.random() * 3000 + 2000,
                easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
            });

            animation.onfinish = () => confetti.remove();
        }
    }

    // ===========================================
    // CLEANUP ET OPTIMISATIONS
    // ===========================================

    // Nettoyer les event listeners au déchargement
    window.addEventListener('beforeunload', function() {
        // Cleanup si nécessaire
        document.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('scroll', requestTick);
    });

    // Débogage en mode développement
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('🚀 Home Modern JS loaded successfully!');
        console.log('Features enabled:', {
            smoothScrolling: true,
            parallaxEffects: !prefersReducedMotion,
            cursorTrail: !prefersReducedMotion && !window.matchMedia('(max-width: 768px)').matches,
            typeWriter: !prefersReducedMotion,
            themeToggle: !!themeToggle,
            performanceMonitoring: true,
            formValidation: contactForms.length > 0,
            easterEgg: true
        });
    }
});

// ===========================================
// UTILITAIRES GLOBAUX
// ===========================================

// Debounce function pour optimiser les performances
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

// Throttle function pour les événements fréquents
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Fonction pour détecter si un élément est visible
function isInViewport(element, threshold = 0) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= -threshold &&
        rect.left >= -threshold &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + threshold &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) + threshold
    );
}

// Export pour utilisation dans d'autres scripts si nécessaire
window.HomeModern = {
    showNotification,
    debounce,
    throttle,
    isInViewport
};
