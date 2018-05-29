$(document).ready(function(){
    scrolled();
    smoothScroll();
    closeNavMenu();
    
});

$(window).scroll(function(){
    scrolled();
});

function scrolled(){
    var navHeight = $('#main-nav').outerHeight();
    var scrolled = $(window).scrollTop();
    
    if(scrolled > navHeight){
        $('#main-nav').addClass('scrolled');
    } else {
        $('#main-nav').removeClass('scrolled');
    }
}

function smoothScroll(){
    $("a[href*=\\#]").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        } 
    });
}

function closeNavMenu(){
    $('.navbar-nav li a').click(function(){ 
        $('.navbar-collapse').collapse('hide');
    });
}

