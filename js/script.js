
$(document).ready(function() {
    //menú hamburguesa
    const $menuToggle = $('.menu-toggle');
    const $mainNav = $('.main-nav');
    const $icon = $menuToggle.find('i'); 

    $menuToggle.on('click', function() {
        $mainNav.toggleClass('active');
        
        if ($mainNav.hasClass('active')) {
            $icon.removeClass('fa-bars').addClass('fa-xmark');
        } else {
            $icon.removeClass('fa-xmark').addClass('fa-bars');
        }
    });

    //animación scroll
    $('a[href*="#"]').on('click', function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

});


// SLIDE SHOW
let slideIndex = 1;
let autoSlideInterval;

showSlides(slideIndex);
startAutoSlide();

//FLECHAS
function plusSlides(n) {
    stopAutoSlide();
    showSlides(slideIndex += n);
    startAutoSlide();
}

//PUNTOS
function currentDotSlide(n) {
    stopAutoSlide();
    showSlides(slideIndex = n + 1);
    startAutoSlide();
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    if (slides.length === 0) return;

    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";  
    if (dots.length > 0) {
        dots[slideIndex-1].className += " active";
    }
}

function startAutoSlide() {
    clearInterval(autoSlideInterval); 
    autoSlideInterval = setInterval(function(){ 
        plusSlides(1); 
    }, 4000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// SLIDE TÁCTIL
let touchStartX = 0;
let touchEndX = 0;
const sliderContainer = document.querySelector('.hero-section');

sliderContainer.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

sliderContainer.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
});

function handleGesture() {
    //DESLIZAR IZQUIERDA
    if (touchEndX < touchStartX - 50) { 
        plusSlides(1);
    }
    //DESLIZAR DERECHA
    if (touchEndX > touchStartX + 50) {
        plusSlides(-1);
    }
}