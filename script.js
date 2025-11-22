const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
const slideInterval = 5000;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

let autoSlide = setInterval(nextSlide, slideInterval);

document.querySelectorAll('.slider-btn, .dot').forEach(btn => {
    btn.addEventListener('click', () => {
        clearInterval(autoSlide);
        autoSlide = setInterval(nextSlide, slideInterval);
    });
});

// SCROLL REVEAL
window.addEventListener('scroll', reveal);
function reveal() {
    var reveals = document.querySelectorAll('.scroll-reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}
