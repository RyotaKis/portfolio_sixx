// Advanced Portfolio JavaScript with GSAP Animations

// Initialize GSAP
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// DOM Elements
const cursor = document.querySelector('.custom-cursor');
const cursorFollower = document.querySelector('.cursor-follower');
const themeToggle = document.querySelector('.theme-toggle');
const loading = document.querySelector('.loading');
const navbar = document.querySelector('.navbar');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    // Hide loading screen
    setTimeout(() => {
        loading.classList.add('hidden');
        setTimeout(() => loading.style.display = 'none', 500);
    }, 1000);

    // Initialize all features
    initializeCustomCursor();
    initializeThemeToggle();
    initializeSmoothScrolling();
    initializeParallaxEffects();
    initializeTextReveals();
    initializeMagneticEffects();
    initializeParticleEffects();
    initializeScrollAnimations();
    initializeTypingEffect();
    initializeNavbarEffects();
    initializeHoverEffects();
    initializeCounters();
    initializeFormEffects();
    initializePortfolioFiltering();
}

// Custom Cursor
function initializeCustomCursor() {
    if (!cursor || !cursorFollower) return;

    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX - 10,
            y: e.clientY - 10,
            duration: 0.1
        });

        gsap.to(cursorFollower, {
            x: e.clientX - 20,
            y: e.clientY - 20,
            duration: 0.3
        });
    });

    // Cursor hover effects
    const hoverElements = document.querySelectorAll('a, button, .card, .project-card');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            gsap.to(cursor, { scale: 2, duration: 0.3 });
            gsap.to(cursorFollower, { scale: 1.5, duration: 0.3 });
        });

        element.addEventListener('mouseleave', () => {
            gsap.to(cursor, { scale: 1, duration: 0.3 });
            gsap.to(cursorFollower, { scale: 1, duration: 0.3 });
        });
    });
}

// Theme Toggle
function initializeThemeToggle() {
    if (!themeToggle) return;

    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        
        // Animate theme transition
        gsap.to('body', {
            backgroundColor: newTheme === 'dark' ? '#0a0a0a' : '#ffffff',
            color: newTheme === 'dark' ? '#ffffff' : '#0f172a',
            duration: 0.5
        });
    });
}

function updateThemeIcon(theme) {
    const sunIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`;
    const moonIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>`;
    
    themeToggle.innerHTML = theme === 'dark' ? sunIcon : moonIcon;
}

// Smooth Scrolling
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                gsap.to(window, {
                    duration: 1.5,
                    scrollTo: { y: target, offsetY: 80 },
                    ease: "power2.inOut"
                });
            }
        });
    });
}

// Parallax Effects
function initializeParallaxEffects() {
    // Background parallax
    gsap.to('.geometric-flow', {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    gsap.to('.grid-animation', {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    // Element parallax
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(element => {
        gsap.to(element, {
            yPercent: -30,
            ease: "none",
            scrollTrigger: {
                trigger: element,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    });
}

// Text Reveal Animations
function initializeTextReveals() {
    // Split text for hero title
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.innerHTML = '';
        
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.opacity = '0';
            span.style.transform = 'translateY(50px)';
            heroTitle.appendChild(span);
            
            gsap.to(span, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                delay: index * 0.05,
                ease: "back.out(1.7)"
            });
        });
    }

    // Section titles reveal
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            },
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
    });
}

// Magnetic Effects
function initializeMagneticEffects() {
    const magneticElements = document.querySelectorAll('.magnetic');
    
    magneticElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            gsap.to(element, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        element.addEventListener('mouseleave', () => {
            gsap.to(element, {
                x: 0,
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
}

// Particle Effects
function initializeParticleEffects() {
    const particleContainer = document.querySelector('.background-animation');
    if (!particleContainer) return;

    // Create particles
    for (let i = 0; i < 50; i++) {
        createParticle(particleContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 3 + 's';
    particle.style.animationDuration = (Math.random() * 2 + 2) + 's';
    
    container.appendChild(particle);
}

// Scroll Animations
function initializeScrollAnimations() {
    // Fade in animations
    gsap.utils.toArray('.fade-in').forEach(element => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
    });

    // Slide animations
    gsap.utils.toArray('.slide-in-left').forEach(element => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play none none reverse"
            },
            x: -100,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
    });

    gsap.utils.toArray('.slide-in-right').forEach(element => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play none none reverse"
            },
            x: 100,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
    });

    // Scale animations
    gsap.utils.toArray('.scale-in').forEach(element => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play none none reverse"
            },
            scale: 0.5,
            opacity: 0,
            duration: 1,
            ease: "back.out(1.7)"
        });
    });
}

// Typing Effect
function initializeTypingEffect() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;

    const words = ['Développeur', 'Designer', 'Créatif', 'Innovateur'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 100 : 200;

        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    setTimeout(type, 1000);
}

// Navbar Effects
function initializeNavbarEffects() {
    if (!navbar) return;

    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down
            gsap.to(navbar, {
                y: -100,
                duration: 0.3,
                ease: "power2.out"
            });
        } else {
            // Scrolling up
            gsap.to(navbar, {
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        }
        
        lastScrollY = currentScrollY;
    });
}

// Hover Effects
function initializeHoverEffects() {
    // 3D hover effects
    const hover3dElements = document.querySelectorAll('.hover-3d');
    
    hover3dElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            gsap.to(element, {
                rotateX: rotateX,
                rotateY: rotateY,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        element.addEventListener('mouseleave', () => {
            gsap.to(element, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });

    // Glow effects
    const glowElements = document.querySelectorAll('.btn, .card, .project-card');
    
    glowElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            gsap.to(element, {
                boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)',
                duration: 0.3,
                ease: "power2.out"
            });
        });

        element.addEventListener('mouseleave', () => {
            gsap.to(element, {
                boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)',
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
}

// Counter Animation
function initializeCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2;
        
        ScrollTrigger.create({
            trigger: counter,
            start: "top 80%",
            onEnter: () => {
                gsap.to(counter, {
                    innerHTML: target,
                    duration: duration,
                    ease: "power2.out",
                    snap: { innerHTML: 1 },
                    onUpdate: function() {
                        counter.innerHTML = Math.ceil(counter.innerHTML);
                    }
                });
            }
        });
    });
}

// Form Effects
function initializeFormEffects() {
    const formInputs = document.querySelectorAll('.form-input, .form-textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            gsap.to(input, {
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        input.addEventListener('blur', () => {
            gsap.to(input, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name') || contactForm.querySelector('input[type="text"]')?.value;
            const email = formData.get('email') || contactForm.querySelector('input[type="email"]')?.value;
            const subject = formData.get('subject') || contactForm.querySelectorAll('input[type="text"]')[1]?.value;
            const message = formData.get('message') || contactForm.querySelector('textarea')?.value;
            
            showNotification('Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.', 'success');
            
            // Reset form
            contactForm.reset();
            
            // Animate form submission
            gsap.to(contactForm, {
                scale: 0.95,
                duration: 0.1,
                ease: "power2.out",
                yoyo: true,
                repeat: 1
            });
        });
    }
}

// Portfolio Filtering
function initializePortfolioFiltering() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    gsap.to(card, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.5,
                        ease: "power2.out"
                    });
                } else {
                    gsap.to(card, {
                        opacity: 0,
                        scale: 0.8,
                        duration: 0.3,
                        ease: "power2.in",
                        onComplete: () => {
                            card.style.display = 'none';
                        }
                    });
                }
            });
        });
    });
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    gsap.to(notification, {
        x: 0,
        duration: 0.5,
        ease: "back.out(1.7)"
    });
    
    setTimeout(() => {
        gsap.to(notification, {
            x: '100%',
            duration: 0.5,
            ease: "power2.in",
            onComplete: () => {
                document.body.removeChild(notification);
            }
        });
    }, 3000);
}

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'Escape':
            // Close any open modals or menus
            break;
        case 't':
            if (e.ctrlKey || e.metaKey) {
                e.preventDefault();
                themeToggle.click();
            }
            break;
    }
});

// Performance Optimization
let ticking = false;

function updateOnScroll() {
    if (!ticking) {
        requestAnimationFrame(() => {
            // Update scroll-based animations here
            ticking = false;
        });
        ticking = true;
    }
}

window.addEventListener('scroll', updateOnScroll);

// Intersection Observer for lazy loading
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
    animatedElements.forEach(el => observer.observe(el));
});

// Transition entre mes pages
window.addEventListener('beforeunload', () => {
    gsap.to('body', {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in"
    });
});

// initialisation après chargement total
window.addEventListener('load', () => {
    // Finale
    gsap.to('body', {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
    });
}); 

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.fade-in').forEach(el => {
    el.classList.add('visible');
  });
}); 