let slideIndex = 0;

//slide show
function showslides() {
    const slides = document.querySelectorAll('.carousel-slide img');
    slides.forEach((slide, index) => {
        slide.style.display = "none"; });
     //Hide all images

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; //Reset to first Imaage
    }

    slides[slideIndex - 1].style.display = "block"; //Display current Image
    setTimeout(showslides, 2000); // Changes Image every 2 seconds

    }

    //Buttons
    function moveSlides(n) {
        slideIndex += n; 
        const slides = document.querySelectorAll('.carousel-slide img');
        if (slideIndex < 1) {
            slideIndex = slides.length;
        }
        else if (slideIndex > slides.length){
            slideIndex = 1;
        }
        slides.forEach((slide, index) =>{
            slide.style.display = "none"; //Hides all images
        });
        slides[slideIndex - 1].style.display = "block"; //Display the current image
    }

    showslides(); //Initilaze the slideshow