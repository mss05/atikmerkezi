document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.count');
    const bars = document.querySelectorAll('.progress-bar');

    // Sayı animasyonu
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 2000;
        const increment = target / (duration / 16);

        let current = 0;
        const updateCount = () => {
            current += increment;
            if (current < target) {
                counter.innerText = Math.ceil(current).toLocaleString('tr-TR');
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target.toLocaleString('tr-TR');
            }
        };
        updateCount();
    });

    // Progress bar animasyonu
    bars.forEach(bar => {
        const target = bar.getAttribute('data-target');
        bar.style.width = target + '%';
    });
});
