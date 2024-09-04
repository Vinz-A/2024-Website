let slideIndex = 0;

function showslides() {
    const slides = document.queryselctorAll('.carousel-slide img');
    slides.forEach((slide, index) => {
        slide.style.display = "none"; });
    }