$('ul.nav').find('a').click(function() {
    var $href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $($href).position().top
    }, 'slow')
    return false;
});
