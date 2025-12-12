
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

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const btn = document.querySelector('.btn-submit');
        const originalText = btn.innerText;

        btn.innerText = 'Enviando...';
        btn.style.opacity = '0.7';

        setTimeout(function() {
            btn.innerText = '¡Mensaje Enviado!';
            btn.style.backgroundColor = '#27ae60';
            btn.style.opacity = '1';

            contactForm.reset();

            setTimeout(function() {
                btn.innerText = originalText;
                btn.style.backgroundColor = '';
            }, 3000);

        }, 1500);
    });
}

//CONTADOR
const mensajeInput = document.getElementById("mensaje");
const contadorOutput = document.getElementById("contador");

if (mensajeInput && contadorOutput) {
    
    mensajeInput.addEventListener("input", function() {
        let actual = mensajeInput.value.length;
        contadorOutput.textContent = actual + " / 300";
        
        if (actual === 300) {
            contadorOutput.style.color = "red";
        } else {
            contadorOutput.style.color = "#888";
        }
    });
}