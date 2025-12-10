
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