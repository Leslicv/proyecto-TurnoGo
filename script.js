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

// Intersection Observer para animaciones fade-in
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

// Aplicar observador a elementos que tienen clases específicas
document.querySelectorAll('.feature-card, .objective-card, .problem-item, .solution-item, .link-card').forEach(el => {
    observer.observe(el);
});

// Cerrar menu si estaba abierto al hacer clic en un link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        // Aquí puedes agregar lógica adicional si necesitas
    });
});

// Hacer el logo clickeable
document.addEventListener('DOMContentLoaded', function() {
    const logos = document.querySelectorAll('.logo');
    logos.forEach(logo => {
        logo.style.cursor = 'pointer';
        logo.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    });
});

// Detectar si estamos en producción y cambiar URLs si es necesario
function getAppStoreURL() {
    // Reemplaza con tu URL real de App Store cuando esté lista
    return 'https://apps.apple.com/app/turngo-tu-turno-donde-estes/id1234567890';
}

// Analítica básica (comentada, descomentar si usas Google Analytics u otro servicio)
/*
window.addEventListener('load', function() {
    console.log('Página cargada:', window.location.pathname);
    // Aquí puedes enviar eventos de Analytics
});
*/

// Validación básica del formulario
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

// Detectar secciones visibles para resaltar nav
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
    
    // Aquí puedes agregar lógica para resaltar el nav item activo
});

// Dark mode toggle (opcional)
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Cargar preferencia de dark mode
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Detectar si el dispositivo prefiere dark mode
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // El usuario prefiere dark mode
}

// Service Worker (si quieres crear una PWA)
/*
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(reg => {
        console.log('Service Worker registrado:', reg);
    }).catch(err => {
        console.log('Error registrando Service Worker:', err);
    });
}
*/

// Función para copiar al portapapeles
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

// Log de PageView (útil para debugging)
console.log('TurnGo - Página cargada:', {
    url: window.location.href,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent
});

function mostrarSolucion() {
  document.getElementById("solucion").classList.remove("hidden");
  document.getElementById("solucion").scrollIntoView({ behavior: "smooth" });
}


const sections = document.querySelectorAll("section[id]");
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

