
$(document).ready(function() {
    
    const $menuToggle = $('.menu-toggle');
    const $mainNav = $('.main-nav');

    $menuToggle.on('click', function() {
        
        $mainNav.toggleClass('active');
        
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