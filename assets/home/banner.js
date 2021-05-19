let pointTablette = 768;
let pointDesktop = 992;

$(function () {
    //Ecouteur d'événement sur la fenêtre
    $(window).on('resize', switchBanner);

    if (screen.width > pointTablette) {
        let src = $(".logoheader").data('desktop-image');
        $(".logoheader").attr('src', src);
    }

    $(".logoheader").on('resize', toogleLogo);

});


function toogleLogo() {
    let src;
    if (screen.width > pointTablette) {
        src = $(this).data('desktop-image');
    }else if(screen.width <= pointTablette){
        src = $(this).data('mobile-image');
    }
    $(".logoheader").attr('src', src);
}

function switchBanner(){
    if ($(window).width() > pointDesktop ) {
        $(".menuPrincipal").slideDown();
    } else {
        $(".menuPrincipal").slideUp();
    }
}