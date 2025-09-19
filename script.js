const carouselInner = document.querySelector('.carousel__inner');
const prevBtn = document.querySelector('.carousel__btn.prev');
const nextBtn = document.querySelector('.carousel__btn.next');

let currentSlide = 0;

function getVisibleCount() {
    if (window.innerWidth <= 720) {
        return 1; // по одной карточке
    }
    return 2; // во всех остальных случаях по 2 карточки
}

function getTotalSlides() {
    const items = document.querySelectorAll('.carousel__item').length;
    return Math.ceil(items / getVisibleCount());
}

function getStep() {
    return 100; 
}

function updateCarousel() {
    const step = getStep();
    carouselInner.style.transform = `translateX(-${currentSlide * step}%)`;
}

nextBtn.addEventListener('click', () => {
    if (currentSlide < getTotalSlides() - 1) {
        currentSlide++;
        updateCarousel();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateCarousel();
    }
});

window.addEventListener('resize', () => {
    currentSlide = 0;
    updateCarousel();
});


const buttons = document.querySelectorAll('.down'); 
const infos = document.querySelectorAll('.inf1, .inf2, .inf3, .inf4, .inf5'); 

buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const infp = infos[index]; 

        if (infp.style.display === 'block') {
            infp.style.display = 'none';
        } else {
            infp.style.display = 'block';
        }
    });
});
