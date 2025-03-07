function initializeSlider(container) {
    const sliderContainer = document.querySelector(container);

    const slidesContainer = document.getElementById('slider-content');
    const slides = slidesContainer.querySelectorAll('.testimonial-item');    

    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    let currentIndex = 0;
    const totalSlides = slides.length;
    
    function showSlide(index) {
        if (index < 0)
            currentIndex = totalSlides - 1;
        else if (index >= totalSlides)
            currentIndex = 0;
        else
            currentIndex = index;

        const offset = -currentIndex * 100;
        slidesContainer.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);


    function handleKeyboardControls(e) {
        if (e.key === 'ArrowRight')
            nextSlide();
        else if (e.key === 'ArrowLeft')
            prevSlide();
    }


    
    document.addEventListener('keydown', handleKeyboardControls);

    showSlide(currentIndex);

}

initializeSlider('#testimonial-slider');
