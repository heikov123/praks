$(document).ready(function(){
    $('#scrollBtn').click(function(){
        var scrollTo = $('#scrollTo');
        $('html,body').stop().animate({
           scrollTop: scrollTo.offset().top
       }, 1000);
    })
    $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
            $('#myTopnav').fadeIn(500);
        } else {
            $('#myTopnav').fadeOut(500);
        }
    });
})

