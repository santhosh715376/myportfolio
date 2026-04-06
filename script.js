// Dynamic Cursor Elements Creation
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

const follower = document.createElement('div');
follower.classList.add('cursor-follower');
document.body.appendChild(follower);

// Cursor Tracking Logic
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let followerX = window.innerWidth / 2;
let followerY = window.innerHeight / 2;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Immediate cursor update
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
    
    // Maximalist particle trail effect
    createParticle(mouseX, mouseY);
});

// Smooth follower animation
function animateFollower() {
    // easing formula
    followerX += (mouseX - followerX) * 0.15;
    followerY += (mouseY - followerY) * 0.15;
    
    follower.style.left = followerX + 'px';
    follower.style.top = followerY + 'px';
    
    requestAnimationFrame(animateFollower);
}
animateFollower();

// Click effects
document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.7)';
    follower.style.transform = 'translate(-50%, -50%) scale(1.5)';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    follower.style.transform = 'translate(-50%, -50%) scale(1)';
});

// Hover state for links and interactables
const links = document.querySelectorAll('a, .tag, .hamburger, .social-link');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        follower.classList.add('active');
        cursor.style.opacity = '0'; // Hide tiny dot on hover
    });
    link.addEventListener('mouseleave', () => {
        follower.classList.remove('active');
        cursor.style.opacity = '1';
    });
});

// Maximalist Particle Trail System
function createParticle(x, y) {
    if (Math.random() > 0.3) return; // limit particle spawn rate
    
    const particle = document.createElement('div');
    const size = Math.random() * 8 + 2;
    const colors = ['#00f3ff', '#ff00ea', '#39ff14', '#ffffff'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    particle.style.position = 'fixed';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.background = color;
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '9997';
    particle.style.boxShadow = `0 0 ${size * 2}px ${color}`;
    
    // random velocity
    const vx = (Math.random() - 0.5) * 10;
    const vy = (Math.random() - 0.5) * 10 + 2; // slight gravity
    
    document.body.appendChild(particle);
    
    let opacity = 1;
    let posX = x;
    let posY = y;
    
    function animateParticle() {
        opacity -= 0.02;
        posX += vx;
        posY += vy;
        
        particle.style.opacity = opacity;
        particle.style.left = posX + 'px';
        particle.style.top = posY + 'px';
        particle.style.transform = `scale(${opacity})`;
        
        if (opacity <= 0) {
            particle.remove();
        } else {
            requestAnimationFrame(animateParticle);
        }
    }
    
    requestAnimationFrame(animateParticle);
}


// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Hamburger menu toggle for mobile
const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        if (navLinksContainer.style.display === 'flex') {
            navLinksContainer.style.display = 'none';
        } else {
            navLinksContainer.style.display = 'flex';
            navLinksContainer.style.flexDirection = 'column';
            navLinksContainer.style.position = 'absolute';
            navLinksContainer.style.top = '70px';
            navLinksContainer.style.right = '20px';
            navLinksContainer.style.background = 'rgba(10, 10, 10, 0.9)';
            navLinksContainer.style.backdropFilter = 'blur(20px)';
            navLinksContainer.style.padding = '20px';
            navLinksContainer.style.borderRadius = '20px';
            navLinksContainer.style.border = '1px solid var(--neon-pink)';
            navLinksContainer.style.boxShadow = '0 0 30px var(--neon-pink)';
            navLinksContainer.style.zIndex = '1000';
        }
    });
}
