$('main h2').on('inview', function() {
    $(this).addClass('linestyle');
});

$('.up').on('inview', function() {
    $(this).addClass('upstyle');
});

$('.down').on('inview', function() {
    $(this).addClass('downstyle');
});

$('.left').on('inview', function() {
    $(this).addClass('leftstyle');
});

$('.right').on('inview', function() {
    $(this).addClass('rightstyle');
});

$('.transform1').on('inview', function() {
    $(this).addClass('transform1style');
});

$('.transform2').on('inview', function() {
    $(this).addClass('transform2style');
});

$('.transform3').on('inview', function() {
    $(this).addClass('transform3style');
});

$('.blur').on('inview', function() {
    $(this).addClass('blurstyle');
});

$('.cracker').on('inview', function() {
    $('.cracker').append('<span class="crackerstyle"><img src="images/cracker.gif" alt=""><img src="images/cracker.gif" alt=""></span>');
});
