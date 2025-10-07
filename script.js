// ===== MENU MOBILE =====
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// ===== FORMULÁRIO DE CONTATO =====
function handleSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Monta a mensagem para WhatsApp
    const whatsappMessage = `Olá! Meu nome é ${name} (${email}). ${message}`;
    
    // Abre WhatsApp com a mensagem
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    
    // Limpa o formulário
    event.target.reset();
    
    // Opcional: Mostrar mensagem de sucesso
    alert('Redirecionando para o WhatsApp...');
}

// ===== SCROLL SUAVE =====
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os links que começam com #
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                // Scroll suave até a seção
                target.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
                
                // Fecha o menu mobile se estiver aberto
                const navLinks = document.getElementById('navLinks');
                if (navLinks) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });
});

// ===== ANIMAÇÃO DE ENTRADA DOS ELEMENTOS =====
// Opcional: Adiciona animação quando elementos entram na viewport
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Elementos para animar
    const animatedElements = document.querySelectorAll('.product-card, .value-card, .about-content');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Executa as animações quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', setupScrollAnimations);

// ===== DESTACAR LINK ATIVO NA NAVEGAÇÃO =====
function highlightActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Ativa o highlight de seção ativa
document.addEventListener('DOMContentLoaded', highlightActiveSection);