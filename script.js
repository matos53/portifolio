// Criar estrelas no fundo
function criarEstrelas() {
    const starsContainer = document.getElementById('stars');
    const quantidade = 150;

    for (let i = 0; i < quantidade; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Posição aleatória
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        
        // Tamanho aleatório
        const size = Math.random() * 3 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        
        // Delay da animação
        star.style.animationDelay = Math.random() * 3 + 's';
        
        starsContainer.appendChild(star);
    }
}

// Rolagem suave no menu
function rolagemSuave() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const alvoId = this.getAttribute('href');
            const alvo = document.querySelector(alvoId);
            
            if (alvo) {
                alvo.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Formulário de contato
function enviarFormulario() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const botao = form.querySelector('.submit-btn');
        const textoOriginal = botao.textContent;
        
        botao.textContent = 'Enviando...';
        botao.disabled = true;
        
        setTimeout(() => {
            alert('Mensagem enviada com sucesso!');
            form.reset();
            botao.textContent = textoOriginal;
            botao.disabled = false;
        }, 2000);
    });
}

// Parallax das estrelas
function efeitoParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const stars = document.querySelectorAll('.star');
        
        stars.forEach((star, index) => {
            const velocidade = (index % 3 + 1) * 0.5;
            star.style.transform = `translateY(${scrolled * velocidade}px)`;
        });
    });
}

// Animação ao aparecer na tela
function animarScroll() {
    const observer = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.style.opacity = '1';
                entrada.target.style.transform = 'translateY(0)';
            }
        });
    });

    const elementos = document.querySelectorAll('.skill-card, .project-card');
    elementos.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    criarEstrelas();
    rolagemSuave();
    enviarFormulario();
    efeitoParallax();
    animarScroll();
});

// Adicionar estrelas extras
setInterval(() => {
    if (document.querySelectorAll('.star').length < 200) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = '0%';
        star.style.width = Math.random() * 2 + 1 + 'px';
        star.style.height = star.style.width;
        star.style.animationDelay = '0s';
        
        document.getElementById('stars').appendChild(star);
        
        setTimeout(() => {
            if (star.parentNode) {
                star.parentNode.removeChild(star);
            }
        }, 10000);
    }
}, 3000);
