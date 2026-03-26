document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Active class
            document.querySelectorAll('.nav-link').forEach(link =>
                link.classList.remove('active')
            );
            this.classList.add('active');

            // Close mobile menu
            document.querySelector('.nav').classList.remove('mobile-open');
        }
    });
});

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('.nav');
if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('mobile-open');
    });
}

// Active nav on scroll (bonus)
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const link = document.querySelector(`a[href="#${section.id}"]`);
        if (link) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        }
    });
});