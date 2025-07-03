// Main JavaScript for Portfolio Site
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add loading animation to case study cards
    const caseStudyCards = document.querySelectorAll('.case-study-card:not(.placeholder)');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    caseStudyCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Add hover effects to skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click tracking for contact links
    const contactLinks = document.querySelectorAll('.contact-link');
    
    contactLinks.forEach(link => {
        link.addEventListener('click', function() {
            // You can add analytics tracking here
            console.log('Contact link clicked:', this.href);
        });
    });
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Escape key to close any open modals (future feature)
        if (e.key === 'Escape') {
            // Close any open modals or dropdowns
        }
        
        // Tab key navigation improvements
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    // Remove keyboard navigation class on mouse use
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // Add focus indicators for keyboard navigation
    const focusableElements = document.querySelectorAll(
        'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--color-accent-green)';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
    
    // Add scroll-based header effects
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Add loading state for images
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            this.style.display = 'none';
            console.warn('Image failed to load:', this.src);
        });
        
        // Set initial opacity
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
    
    // Add performance monitoring
    window.addEventListener('load', function() {
        if ('performance' in window) {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log('Page load time:', loadTime + 'ms');
        }
    });
    
    // Add error handling for broken links
    const allLinks = document.querySelectorAll('a[href]');
    
    allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip internal links and mailto links
            if (href.startsWith('#') || href.startsWith('mailto:')) {
                return;
            }
            
            // Add loading state for external links
            this.style.opacity = '0.7';
            this.style.pointerEvents = 'none';
            
            setTimeout(() => {
                this.style.opacity = '1';
                this.style.pointerEvents = 'auto';
            }, 1000);
        });
    });
    
    // Add print functionality (future enhancement)
    const printButton = document.createElement('button');
    printButton.textContent = 'Print Portfolio';
    printButton.className = 'print-button';
    printButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--color-accent-green);
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 25px;
        cursor: pointer;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        z-index: 1000;
        font-size: 14px;
    `;
    
    printButton.addEventListener('click', function() {
        window.print();
    });
    
    // Only show print button on desktop
    if (window.innerWidth > 768) {
        document.body.appendChild(printButton);
    }
    
    // Responsive print button
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            if (!document.querySelector('.print-button')) {
                document.body.appendChild(printButton);
            }
        } else {
            const existingButton = document.querySelector('.print-button');
            if (existingButton) {
                existingButton.remove();
            }
        }
    });
    
    // Add accessibility improvements
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    headings.forEach((heading, index) => {
        if (!heading.id) {
            heading.id = `heading-${index}`;
        }
    });
    
    // Add skip link for accessibility
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--color-accent-green);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1001;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content ID for skip link
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.id = 'main-content';
    }
    
    console.log('Portfolio site loaded successfully!');
    
    // Highlight active section in side-nav
    const sectionIds = [
        'about-me-section',
        'case-studies-section',
        'soft-skills-section',
        'technologies-section',
        'vlog',
        'courses-section'
    ];
    const sideNavLinks = Array.from(document.querySelectorAll('.side-nav a'));
    const sectionElements = sectionIds.map(id => document.getElementById(id));

    function setActiveNav() {
        let index = sectionElements.length - 1;
        for (let i = 0; i < sectionElements.length; i++) {
            const rect = sectionElements[i]?.getBoundingClientRect();
            if (rect && rect.top <= 120) {
                index = i;
            }
        }
        sideNavLinks.forEach(link => link.classList.remove('active'));
        if (sideNavLinks[index]) sideNavLinks[index].classList.add('active');
    }
    window.addEventListener('scroll', setActiveNav);
    window.addEventListener('resize', setActiveNav);
    document.addEventListener('DOMContentLoaded', setActiveNav);
    
    // PM Vlog Accordion
    function setupPMVlogAccordion() {
        const items = document.querySelectorAll('.pm-vlog-item');
        items.forEach((item, idx) => {
            const title = item.querySelector('.pm-vlog-title');
            // Click or keyboard
            item.addEventListener('click', (e) => {
                toggleAccordion(item, items);
            });
            item.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleAccordion(item, items);
                }
            });
        });
        function toggleAccordion(selected, all) {
            all.forEach((item) => {
                if (item === selected) {
                    const expanded = item.getAttribute('aria-expanded') === 'true';
                    item.setAttribute('aria-expanded', !expanded);
                } else {
                    item.setAttribute('aria-expanded', 'false');
                }
            });
        }
    }
    document.addEventListener('DOMContentLoaded', setupPMVlogAccordion);
}); 