// Seleccionar elementos
const courseCards = document.querySelectorAll('.course-card');
const servicesButton = document.getElementById('servicesButton');
const courseSlider = document.getElementById('courseSlider');

// Animación de tarjetas al pasar el mouse
courseCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 8px 16px rgba(13, 71, 161, 0.3)';
        card.style.transition = 'all 0.3s ease';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });
});

// Iniciar carrusel automático
let slideIndex = 0;
function autoSlide() {
    const items = document.querySelectorAll('#courseSlider .carousel-item');
    slideIndex = (slideIndex + 1) % items.length;
    const bsCarousel = new bootstrap.Carousel(courseSlider);
    bsCarousel.to(slideIndex);
}
setInterval(autoSlide, 5000); // Cambia cada 5 segundos

// Efecto confeti al hacer clic en "Ver Servicios"
if (servicesButton) {
    servicesButton.addEventListener('click', () => {
        const confettiSettings = {
            target: 'body',
            max: 100,
            size: 1,
            animate: true,
            props: ['circle', 'square'],
            colors: ['#0d47a1', '#42a5f5', '#e3f2fd', '#fff'],
            clock: 20
        };
        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
        setTimeout(() => confetti.clear(), 2000); // Limpia después de 2 segundos
    });
}