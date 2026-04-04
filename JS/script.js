document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;

        reveals.forEach(reveal => {
            const revealTop = reveal.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // Smooth scrolling
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Access global translations from window
    const translations = window.translations;
    const statusPhrases = window.statusPhrases;

    let currentLang = localStorage.getItem("lang") || "en";

    // Status Pill Rotation
    const statusSpan = document.getElementById('status-text');
    let statusIndex = 0;

    function updateStatusText() {
        if (!statusSpan || !statusPhrases) return;
        statusSpan.textContent = statusPhrases[currentLang][statusIndex];
    }

    function rotateStatus() {
        if (!statusSpan || !statusPhrases) return;
        statusSpan.style.opacity = 0;
        setTimeout(() => {
            statusIndex = (statusIndex + 1) % statusPhrases[currentLang].length;
            updateStatusText();
            statusSpan.style.opacity = 1;
        }, 500);
    }

    if (statusSpan) {
        statusSpan.style.transition = "opacity 0.5s ease-in-out";
        updateStatusText();
        setInterval(rotateStatus, 4000);
    }

    function updateLanguage(lang) {
        currentLang = lang;
        if (!translations || !translations[lang]) return;

        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        document.querySelectorAll("[data-i18n-href]").forEach(el => {
            const key = el.getAttribute("data-i18n-href");
            if (translations[lang][key]) {
                el.href = translations[lang][key];
            }
        });

        updateStatusText();
        localStorage.setItem("lang", lang);
        document.documentElement.lang = lang;
    }

    // Initialize
    updateLanguage(currentLang);

    document.getElementById("lang-toggle").addEventListener("click", () => {
        const nextLang = currentLang === "en" ? "cn" : "en";
        updateLanguage(nextLang);
    });

    // Menu Toggle
    const menuBtn = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            const icon = menuBtn.querySelector('i');
            icon.classList.toggle('fa-chevron-up');
            icon.classList.toggle('fa-chevron-down');
        });

        document.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = menuBtn.querySelector('i');
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            });
        });
    }

    // Typing Animation
    const typingSpan = document.getElementById('typing-text');
    const roles = {
        en: ["Full Stack Web Developer"],
        cn: ["全栈开发人员"]
    };
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        if (!typingSpan) return;
        const currentRoles = roles[currentLang];
        const currentRole = currentRoles[roleIndex];

        if (isDeleting) {
            typingSpan.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingSpan.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 100 : 200;

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typeSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % currentRoles.length;
            typeSpeed = 500;
        }
        setTimeout(type, typeSpeed);
    }
    if (typingSpan) type();
});

window.copyToClipboard = (text, btn) => {
    navigator.clipboard.writeText(text).then(() => {
        const icon = btn.querySelector('i');
        icon.className = 'fas fa-check';
        btn.style.color = '#64ffda';
        setTimeout(() => {
            icon.className = 'far fa-copy';
            btn.style.color = '';
        }, 2000);
    });
};
