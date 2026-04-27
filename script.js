// Smooth scroll para los links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .objective-card, .problem-item, .solution-item, .link-card').forEach(el => {
    observer.observe(el);
});

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
       
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const logos = document.querySelectorAll('.logo');
    logos.forEach(logo => {
        logo.style.cursor = 'pointer';
        logo.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    });
});

function getAppStoreURL() {
    
    return 'https://apps.apple.com/app/turngo-tu-turno-donde-estes/id1234567890';
}


function validateForm() {
    const inputs = document.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#EF4444';
            isValid = false;
        } else {
            input.style.borderColor = '';
        }
    });
    
    return isValid;
}

// Agregar validación en tiempo real
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('change', function() {
            if (this.value.trim()) {
                this.style.borderColor = '';
            }
        });
    });
});

// Función para hacer que los números se incrementen animadamente (útil para estadísticas)
function animateCounter(element, target, duration = 1000) {
    let current = 0;
    const increment = target / (duration / 16);
    
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

const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
});

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
   
}


function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Copiado:', text);
    }).catch(err => {
        console.error('Error al copiar:', err);
    });
}

// Manejar errores globales
window.addEventListener('error', function(e) {
    console.error('Error no manejado:', e.error);
});

window.addEventListener('unhandledrejection', function(event) {
    console.error('Promise rechazada no manejada:', event.reason);
});


console.log('TurnGo - Página cargada:', {
    url: window.location.href,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent
});

function mostrarSolucion() {
  document.getElementById("solucion").classList.remove("hidden");
  document.getElementById("solucion").scrollIntoView({ behavior: "smooth" });
}


const navLinks = document.querySelectorAll(".about-nav-fixed a");

window.addEventListener("scroll", () => {
let current = "";

sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;

    if (window.scrollY >= sectionTop) {
    current = section.getAttribute("id");
    }
});

navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
    link.classList.add("active");
    }
});
});



function toggleMenu() {
  const navmenu = document.getElementById("navMenu");
  const hamburger = document.getElementById("hamburger");

  navmenu.classList.toggle("active");
  hamburger.classList.toggle("active");
}

document.addEventListener('click', (e) => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const nav = document.querySelector('nav');
    
    if (!nav.contains(e.target)) {  
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

