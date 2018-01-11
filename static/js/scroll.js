$('ul.nav').find('a').click(function() {
    var $href = $(this).attr('href');
    //var $anchor = $('#'+$href).offset();
    $('html, body').animate({
        scrollTop: $($href).offset().top
    }, 'slow');
    return false;
});
