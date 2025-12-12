// VARIABLES GLOBALES DEL CARRUSEL

let currentIndex = 0;

const slides = document.querySelectorAll('.slide');

const dots = document.querySelectorAll('.dot');

let autoSlideInterval;

// FUNCION PRINCIPAL: MOSTRAR UNA SLIDE

function showSlide(index){
    slides.forEach(slide => {
        slide.classList.remove('active')
    });

    dots.forEach(dot => {
        dot.classList.remove('active')
    });

    if (index >= slides.length){
        currentIndex = 0;
    }
    else if (index < 0){
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}

// FUNCION: CAMBIAR SLIDE CON BOTONES

function changeSlide(direction){
    showSlide(currentIndex + direction);
    resetAutoSlide();
}

// FUNCION: IR A UNA SLIDE ESPECIFICA (DOTS)

function currentSlide(index){
    showSlide(index);
    resetAutoSlide();
}

// FUNCION: INICIAR AUTO-SLIDE (AUTOMATICO)

function startAutoSlide(){
    autoSlideInterval = setInterval(() => {
        showSlide(currentIndex + 1);
    }, 5000);
}

// FUNCION: REINICIAL EL AUTO-SLIDE

function resetAutoSlide(){
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// INICIALIZACION AL CARGAR LA PAGINA

showSlide(0);
startAutoSlide();