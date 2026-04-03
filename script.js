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

    // Multi-language system
    const translations = {
        en: {
            "nav-home": "Home", "nav-about": "About", "nav-projects": "Projects", "nav-skills": "Skills", "nav-contact": "Contact", "nav-resume": "Resume",
            "hero-hi": "HI, I'M",
            "hero-name": "Shawn Liu",
            "hero-im-a": "I'm a",
            "hero-learning": "Learning: AI Agents & LLM Fine-tuning",
            "hero-view-proj": "View Projects",
            "hero-contact-me": "Contact Me",
            "hero-location": "Vancouver, BC, Canada",
            "about-title": "About Me",
            "exp-title": "Experience",
            "exp-date-1": "Sept. 2020",
            "exp-title-1": "Computer Science at University of Waterloo",
            "exp-org-1": "University of Waterloo",
            "exp-desc-1": "Started my Computer Science degree at the University of Waterloo in the middle of the Covid pandemic 😷.",
            "exp-date-2": "Aug. 2021 - Dec. 2021",
            "exp-title-2": "Data Scientist Intern",
            "exp-org-2": "IQVIA",
            "exp-desc-2": "Wrote scripts for automating and improving software performance.",
            "exp-date-3": "Oct. 2025 - Present",
            "exp-title-3": "Full Stack Web Developer",
            "exp-org-3": "Fortinet",
            "exp-desc-3": "Building AI Agents for security solutions and high-performance full-stack web applications.",
            "nav-resume-url": "Files/Shawn_Liu_Resume.pdf",
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
            "footer-copy": "Built with Passion & Caffeine.",
            "hero-resume": "Resume",
            "nav-menu": "Menu",
            "nav-exp": "Experience"
        },
        cn: {
            "nav-home": "首页", "nav-about": "关于", "nav-projects": "项目", "nav-skills": "技能", "nav-contact": "联系", "nav-resume": "简历",
            "hero-hi": "你好，我是",
            "hero-name": "刘上达",
            "hero-im-a": "我是一名",
            "hero-learning": "正在学习：AI Agents 与 LLM 微调",
            "hero-view-proj": "查看项目",
            "hero-contact-me": "联系我",
            "hero-location": "加拿大 温哥华",
            "about-title": "关于我",
            "exp-title": "工作经历",
            "exp-date-1": "2020年9月",
            "exp-title-1": "滑铁卢大学计算机科学专业",
            "exp-org-1": "滑铁卢大学",
            "exp-desc-1": "在新冠疫情期间，我开始了在滑铁卢大学的计算机科学学习之旅 😷。",
            "exp-date-2": "2021年8月 - 2021年12月",
            "exp-title-2": "数据科学家实习生",
            "exp-org-2": "IQVIA",
            "exp-desc-2": "编写脚本用于自动化并提高软件性能。",
            "exp-date-3": "2025年10月 - 至今",
            "exp-title-3": "全栈 Web 开发人员",
            "exp-org-3": "Fortinet",
            "exp-desc-3": "致力于为安全解决方案构建 AI Agent 以及高性能的全栈 Web 应用程序。",
            "nav-resume-url": "Files/Shawn Liu Resume 中文.pdf",
            "about-p1": "你好！我是刘上达，目前在 <strong>Fortinet</strong> 担任全栈 Web 开发人员，2025 年毕业于<strong>University of Waterloo</strong>，获得计算机科学荣誉学士学位。我擅长构建可扩展的 Web 应用程序和高性能系统。",
            "about-p2": "我拥有扎实的系统编程（C++）与现代 Web 框架（React, Python）基础，喜欢解决全栈领域的复杂问题。我一直在寻找新的挑战和成长为优秀工程师的机会。",
            "about-p3": "在闲暇时间，我喜欢拉小提琴、阅读中国历史以及跑步。",
            "proj-title": "项目展示",
            "proj-soon": "项目即将上线",
            "proj-desc": "我目前正在整理最近的全栈和系统工程项目，敬请期待。",
            "skills-title": "技能专长",
            "skills-subtitle": "我擅长的工具和技术：",
            "footer-pill": "取得联系",
            "footer-desc": "期待与您的交流！如果您正在寻找开发人员或只是想打个招呼，欢迎随时联系我。",
            "footer-btn": "打个招呼",
            "footer-copy": "用热爱与咖啡构建。",
            "hero-resume": "简历",
            "nav-menu": "菜单",
            "nav-exp": "经历"
        }
    };

    // Status Pill Rotation
    const statusSpan = document.getElementById('status-text');
    const statusPhrases = {
        en: ["Learning AI Agents && LLM Fine-tuning", "Hope to travel to China in 2027", "Running around"],
        cn: ["正在学习 AI Agents && 大模型微调", "望 2027 年去中国旅游", "正在跑步"]
    };
    let statusIndex = 0;

    function updateStatusText() {
        if (!statusSpan) return;
        statusSpan.textContent = statusPhrases[currentLang][statusIndex];
    }

    function rotateStatus() {
        if (!statusSpan) return;
        statusSpan.style.opacity = 0;
        setTimeout(() => {
            statusIndex = (statusIndex + 1) % statusPhrases[currentLang].length;
            updateStatusText();
            statusSpan.style.opacity = 1;
        }, 500);
    }

    if (statusSpan) {
        statusSpan.style.transition = "opacity 0.5s ease-in-out";
        updateStatusText(); // Initial set
        setInterval(rotateStatus, 4000);
    }

    function updateLanguage(lang) {
        currentLang = lang; // Set this early so status updates correctly
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update hrefs
        document.querySelectorAll("[data-i18n-href]").forEach(el => {
            const key = el.getAttribute("data-i18n-href");
            if (translations[lang][key]) {
                el.href = translations[lang][key];
            }
        });

        // Update status pill text immediately on language change
        updateStatusText();

        localStorage.setItem("lang", lang);
        document.documentElement.lang = lang;
    }

    // Initialize language
    updateLanguage(currentLang);

    document.getElementById("lang-toggle").addEventListener("click", () => {
        const nextLang = currentLang === "en" ? "cn" : "en";
        updateLanguage(nextLang);
    });

    // Menu Toggle Logic
    const menuBtn = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            menuBtn.querySelector('i').classList.toggle('fa-chevron-up');
            menuBtn.querySelector('i').classList.toggle('fa-chevron-down');
        });

        // Close menu when clicking outside
        document.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuBtn.querySelector('i').classList.remove('fa-chevron-up');
            menuBtn.querySelector('i').classList.add('fa-chevron-down');
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuBtn.querySelector('i').classList.remove('fa-chevron-up');
                menuBtn.querySelector('i').classList.add('fa-chevron-down');
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
            typeSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % currentRoles.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    if (typingSpan) type();
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
