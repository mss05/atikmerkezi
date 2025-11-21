// Sayaç Animasyonu ve Progress Bar
function animateStats() {
    const counters = document.querySelectorAll('.count');
    const progressBars = document.querySelectorAll('.progress-bar');
    
    // Sayı Sayacı (61.500 TON için)
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 2000; // 2 saniye
        const increment = target / (duration / 16); // 60fps
        
        let current = 0;
        const updateCount = () => {
            current += increment;
            if (current < target) {
                counter.innerText = Math.ceil(current).toLocaleString('tr-TR'); // Binlik ayracı ekle
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target.toLocaleString('tr-TR');
            }
        };
        updateCount();
    });

    // Progress Bar (%82 için)
    progressBars.forEach(bar => {
        const target = bar.getAttribute('data-target');
        bar.style.width = target + '%';
    });
}

// Scroll tetikleyici (İstatistiklere gelince çalışsın)
let animated = false;
window.addEventListener('scroll', () => {
    const statsSection = document.getElementById('istatistikler');
    const sectionPos = statsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos && !animated) {
        animateStats();
        animated = true;
    }
});

// Hamburger Menü
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '70px';
    navLinks.style.right = '0';
    navLinks.style.backgroundColor = '#2e7d32';
    navLinks.style.width = '100%';
    navLinks.style.padding = '20px';
});
