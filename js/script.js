// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.sticky_header').addClass('sticky');
    } else {
        $('.sticky_header').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.sticky_header').hasClass('open-nav')) {
        $('.sticky_header').removeClass('open-nav');
    } else {
        $('.sticky_header').addClass('open-nav');
    }
});

$('.sticky_header li a').click(function () {
    if ($('.sticky_header').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.sticky_header').removeClass('open-nav');
    }
});

// navigation scroll lijepo radi materem
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});