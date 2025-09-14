// ===== EFEITO DE DIGITAÇÃO =====
function typeWriter(element, text, speed = 100) {
    let i = 0;
    const typingInterval = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
        }
    }, speed);
}

document.addEventListener("DOMContentLoaded", () => {
    const typingElement = document.querySelector(".typing-text");
    if (typingElement) {
        const text = typingElement.getAttribute("data-text");
        typingElement.textContent = "";
        typeWriter(typingElement, text, 90);
    }
});

// ===== FUNDO ESTRELADO =====
const starsCanvas = document.querySelector(".stars");
if (starsCanvas) {
    const ctx = starsCanvas.getContext("2d");
    let starsArray = [];

    function resizeCanvas() {
        starsCanvas.width = window.innerWidth;
        starsCanvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    function createStars(count) {
        starsArray = [];
        for (let i = 0; i < count; i++) {
            starsArray.push({
                x: Math.random() * starsCanvas.width,
                y: Math.random() * starsCanvas.height,
                radius: Math.random() * 1.5,
                speed: Math.random() * 0.3 + 0.1,
            });
        }
    }
    createStars(150);

    function animateStars() {
        ctx.clearRect(0, 0, starsCanvas.width, starsCanvas.height);
        ctx.fillStyle = "white";
        starsArray.forEach((star) => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fill();
            star.y += star.speed;
            if (star.y > starsCanvas.height) {
                star.y = 0;
                star.x = Math.random() * starsCanvas.width;
            }
        });
        requestAnimationFrame(animateStars);
    }
    animateStars();
}

// ===== ANIMAÇÃO DAS BARRAS DE HABILIDADES =====
const aboutSection = document.getElementById("about");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

function animateSkills() {
    const skills = document.querySelectorAll(".skill-progress");
    skills.forEach((skill) => {
        const percent = skill.getAttribute("data-percent");
        skill.style.width = percent + "%";
    });
}

if (aboutSection) {
    observer.observe(aboutSection);
}

// ===== LÓGICA DO FORMULÁRIO DE CONTATO (WhatsApp) =====
document.addEventListener("DOMContentLoaded", () => {
    const whatsappButton = document.getElementById("send-whatsapp");

    if (whatsappButton) {
        whatsappButton.addEventListener("click", (event) => {
            event.preventDefault();

            // Pega os valores dos campos
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const subject = document.getElementById("subject").value;
            const message = document.getElementById("message").value;

            // Formata a mensagem para o WhatsApp
            const whatsappMessage = `Olá, meu nome é ${name}.\n\n` +
                                    `Assunto: ${subject}\n` +
                                    `Email: ${email}\n\n` +
                                    `Mensagem: ${message}`;

            // URL para o WhatsApp com a mensagem formatada
            const whatsappURL = `https://wa.me/5511964911244?text=${encodeURIComponent(whatsappMessage)}`;

            // Abre o WhatsApp em uma nova aba
            window.open(whatsappURL, '_blank');
        });
    }
});