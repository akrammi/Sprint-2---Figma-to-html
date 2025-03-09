function initializeSlider(container) {
    const sliderContainer = document.querySelector(container);
    const slidesContainer = document.getElementById('slider-content');
    let slides = slidesContainer.querySelectorAll('.testimonial-item');

    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    slides = slidesContainer.querySelectorAll('.testimonial-item'); 

    const isRTL = document.documentElement.dir === "rtl"; 

    let currentIndex = 1;
    const totalSlides = slides.length;

    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[totalSlides - 1].cloneNode(true);

    firstClone.id = 'first-clone';
    lastClone.id = 'last-clone';

    slidesContainer.appendChild(firstClone);
    slidesContainer.insertBefore(lastClone, slides[0]);


    slidesContainer.style.transform = `translateX(${isRTL ? 100 : -100}%)`; 

    function showSlide(index, animate = true) {
        slidesContainer.style.transition = animate ? 'transform 0.5s ease' : 'none';
        const offset = index * 100 * (isRTL ? 1 : -1); 
        slidesContainer.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        currentIndex++;
        showSlide(currentIndex);

        if (currentIndex === totalSlides + 1) {
            setTimeout(() => {
                slidesContainer.style.transition = 'none';
                currentIndex = 1;
                showSlide(currentIndex, false);
            }, 500);
        }
    }

    function prevSlide() {
        currentIndex--;
        showSlide(currentIndex);

        if (currentIndex === 0) {
            setTimeout(() => {
                slidesContainer.style.transition = 'none';
                currentIndex = totalSlides;
                showSlide(currentIndex, false);
            }, 500);
        }
    }

    prevBtn.addEventListener('click', isRTL ? nextSlide : prevSlide);
    nextBtn.addEventListener('click', isRTL ? prevSlide : nextSlide);

    function handleKeyboardControls(e) {
        if (e.key === 'ArrowRight') (isRTL ? prevSlide() : nextSlide());
        else if (e.key === 'ArrowLeft') (isRTL ? nextSlide() : prevSlide());
    }

    document.addEventListener('keydown', handleKeyboardControls);

    let autoSlideInterval = setInterval(nextSlide, 3000);

    sliderContainer.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));

    sliderContainer.addEventListener('mouseleave', () => {
        autoSlideInterval = setInterval(nextSlide, 3000);
    });

    showSlide(currentIndex, false);
}

initializeSlider('#testimonial-slider');
