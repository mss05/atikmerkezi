const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
const slideInterval = 5000; // 5 saniyede bir otomatik değişir

// Slaytı Gösteren Fonksiyon
function showSlide(index) {
    // Tüm slaytları gizle
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // İstenen slaytı göster
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

// İleri Git
function nextSlide() {
    currentSlide++;
    if (currentSlide > slides.length - 1) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

// Geri Git
function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
}

// Noktaya Tıklayınca Git
function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

// Otomatik Döndürme
let autoSlide = setInterval(nextSlide, slideInterval);

// Kullanıcı ok tuşuna basarsa otomatiği sıfırla (Çatışma olmasın)
document.querySelectorAll('.slider-btn, .dot').forEach(btn => {
    btn.addEventListener('click', () => {
        clearInterval(autoSlide);
        autoSlide = setInterval(nextSlide, slideInterval);
    });
});
