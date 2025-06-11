
// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 15, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(255, 0, 128, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 10, 15, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Scroll animations
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

// Add fade-in class to elements and observe them
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature-card, .character-card, .about-story, .download-content');
    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        const speed = scrolled * 0.5;
        heroImage.style.transform = `translateY(${speed}px)`;
    }
});

// Character card hover effects
document.querySelectorAll('.character-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Platform button hover effects
document.querySelectorAll('.platform-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.background = 'linear-gradient(135deg, rgba(255, 0, 128, 0.2), rgba(128, 0, 255, 0.2))';
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.background = 'var(--bg-tertiary)';
    });
});

// Add glow effect to title on scroll
window.addEventListener('scroll', () => {
    const heroTitle = document.querySelector('.title-main');
    if (heroTitle && window.scrollY < window.innerHeight) {
        const scrollPercent = window.scrollY / window.innerHeight;
        const glowIntensity = Math.max(0, 1 - scrollPercent * 2);
        heroTitle.style.filter = `drop-shadow(0 0 ${glowIntensity * 20}px rgba(255, 0, 128, ${glowIntensity}))`;
    }
});

// Typing effect for hero subtitle
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const subtitle = document.querySelector('.title-sub');
    if (subtitle) {
        const originalText = subtitle.textContent;
        setTimeout(() => {
            typeWriter(subtitle, originalText, 80);
        }, 1000);
    }
});

// Add particle effect to hero section
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(255, 0, 128, 0.8);
            border-radius: 50%;
            pointer-events: none;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        hero.appendChild(particle);
    }
}

// Initialize particles
document.addEventListener('DOMContentLoaded', createParticles);

// Add click effect to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    .particle {
        box-shadow: 0 0 6px rgba(255, 0, 128, 0.8);
    }
`;
document.head.appendChild(style);

// Preload images for better performance
function preloadImages() {
    const images = [
        'https://i.pinimg.com/originals/e7/4b/c0/e74bc0b281663ad9b9d28ee810e963fb.jpg',
        'https://i.pinimg.com/736x/47/71/76/47717653a84ce18500d1b6dd19d5ceaf.jpg',
        'https://i.ytimg.com/vi/MydqsnfK4dk/maxresdefault.jpg',
        'https://i.pinimg.com/originals/81/0e/40/810e40ad2784876b21fc04860ac625e4.jpg',
        'https://i.pinimg.com/736x/d6/dd/6c/d6dd6cdf91892c3ca5ce24e4def08c47.jpg'
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize preloading
document.addEventListener('DOMContentLoaded', preloadImages);

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
const throttledScroll = throttle(() => {
    // Navbar background change
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 15, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(255, 0, 128, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 10, 15, 0.95)';
        navbar.style.boxShadow = 'none';
    }
    
    // Parallax effect
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        const speed = scrolled * 0.5;
        heroImage.style.transform = `translateY(${speed}px)`;
    }
    
    // Title glow effect
    const heroTitle = document.querySelector('.title-main');
    if (heroTitle && window.scrollY < window.innerHeight) {
        const scrollPercent = window.scrollY / window.innerHeight;
        const glowIntensity = Math.max(0, 1 - scrollPercent * 2);
        heroTitle.style.filter = `drop-shadow(0 0 ${glowIntensity * 20}px rgba(255, 0, 128, ${glowIntensity}))`;
    }
}, 16); // ~60fps

window.addEventListener('scroll', throttledScroll);
