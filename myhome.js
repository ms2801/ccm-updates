$('.c-faderight').on('inview', function(event, isInView) {
    if(isInView){
    $(this).addClass('fadeRight');
    }else {
        $(this).removeClass('fadeRight');
    }
});

$('.c-fadeleft').on('inview', function(event, isInView) {
    if(isInView){
    $(this).addClass('fadeLeft');
    }else {
        $(this).removeClass('fadeLeft');
    }
});

$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});