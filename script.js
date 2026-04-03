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
    revealOnScroll(); // Initial check

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
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

    // Multi-language system
    const translations = {
        en: {
            "nav-home": "Home", "nav-about": "About", "nav-projects": "Projects", "nav-skills": "Skills", "nav-contact": "Contact",
            "hero-greeting": "Hey, I'm Shawn",
            "hero-desc": "Welcome to my website! I'm a dedicated full stack developer with a focus on creating exceptional digital experiences that are robust, accessible, responsive. I have been creating enterprise-level web applications for 2 years and strive to explore new ways of bringing creative digital solutions to life.",
            "hero-location": "Vancouver, BC, Canada",
            "hero-cta": "Get in Touch",
            "about-title": "About Me",
            "about-p1": "Hello! I'm Shawn, a <strong>Full Stack Web Developer at Fortinet</strong> and a 2025 Honors Computer Science graduate from the <strong>University of Waterloo</strong>. I specialize in building scalable web applications and high-performance systems.",
            "about-p2": "With a foundation in both low-level systems programming (C++) and modern web frameworks (React, Python), I enjoy solving complex problems across the entire stack. I'm always looking for new challenges and opportunities to learn and grow as an engineer.",
            "about-p3": "In my free time I like to play the violin, read Chinese history, and go out for a run.",
            "proj-title": "Projects",
            "proj-soon": "Projects Coming Soon",
            "proj-desc": "I'm currently curating my latest work for display. Stay tuned for updates on my recent full-stack and systems engineering projects.",
            "skills-title": "Skills",
            "skills-subtitle": "The tools and technologies I'm really good at:",
            "footer-pill": "Get in touch",
            "footer-desc": "What's next? Feel free to reach out to me if you're looking for a developer or simply want to connect.",
            "footer-btn": "Say Hello",
            "footer-copy": "Built with Passion & Caffeine."
        },
        cn: {
            "nav-home": "首页", "nav-about": "关于", "nav-projects": "项目", "nav-skills": "技能", "nav-contact": "联系",
            "hero-greeting": "你好，我是刘上达",
            "hero-desc": "欢迎来到我的网站！我是一名专注于打造卓越数字体验的全栈开发人员。两年来，我一直致力于开发企业级 Web 应用程序，并不断探索创新的数字解决方案。",
            "hero-location": "加拿大 温哥华",
            "hero-cta": "取得联系",
            "about-title": "关于我",
            "about-p1": "你好！我是刘上达，目前在 <strong>Fortinet</strong> 担任全栈 Web 开发人员，2025 年毕业于<strong>滑铁卢大学</strong>，获得计算机科学荣誉学士学位。我擅长构建可扩展的 Web 应用程序和高性能系统。",
            "about-p2": "我拥有扎实的系统编程（C++）和现代 Web 框架（React，Python）基础，喜欢解决全栈领域的复杂问题。我一直在寻找新的挑战和成长为优秀工程师的机会。",
            "about-p3": "在闲暇时间，我喜欢拉小提琴、阅读中国历史以及跑步。",
            "proj-title": "项目展示",
            "proj-soon": "项目即将上线",
            "proj-desc": "我目前正在整理最近的全栈和系统工程项目，敬请期待。",
            "skills-title": "技能专长",
            "skills-subtitle": "我擅长的工具和技术：",
            "footer-pill": "取得联系",
            "footer-desc": "期待与您的交流！如果您正在寻找开发人员或只是想打个招呼，欢迎随时联系我。",
            "footer-btn": "打个招呼",
            "footer-copy": "用热爱与咖啡构建。"
        }
    };

    let currentLang = "en";

    function updateLanguage(lang) {
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        localStorage.setItem("lang", lang);
        currentLang = lang;
        document.documentElement.lang = lang;
    }

    // Initialize language
    updateLanguage(currentLang);

    document.getElementById("lang-toggle").addEventListener("click", () => {
        const nextLang = currentLang === "en" ? "cn" : "en";
        updateLanguage(nextLang);
    });
});

function copyToClipboard(text, btn) {
    navigator.clipboard.writeText(text).then(() => {
        const icon = btn.querySelector('i');
        icon.className = 'fas fa-check';
        btn.style.color = '#64ffda';

        setTimeout(() => {
            icon.className = 'far fa-copy';
            btn.style.color = '';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
