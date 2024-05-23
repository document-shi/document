$(function() {
    var timer = false;
    $(window).resize(function() {
        if(timer !== false){
            clearTimeout(timer);
        }
        timer = setTimeout(function() {
        }, 500);
    });
});

$(window).on("load resize", function() {
    setTimeout(function(){
        var winW = window.innerWidth;
        var winBP = 800; //ブレイクポイント
        if(winW < winBP) {
            $('body').addClass('s').removeClass('p');
            $('#menubar').addClass('dn').removeClass('db');
            $('#menubar_hdr').addClass('db').removeClass('dn').removeClass('ham');
        } else {
            $('body').addClass('p').removeClass('s');
            $('#menubar').addClass('db').removeClass('dn');
            $('#menubar_hdr').removeClass('db').addClass('dn');
        }
    }, 100);
});

$(function() {
    $('#menubar_hdr').click(function() {
        $(this).toggleClass('ham');
        if($(this).hasClass('ham')) {
            $('#menubar').addClass('db').removeClass('dn');
        } else {
            $('#menubar').addClass('dn').removeClass('db');
        }
    });
});

$(function() {
    $('#menubar a[href^="#"]').click(function() {
        $('#menubar').removeClass('db');
        $('#menubar_hdr').removeClass('ham');
    });
});

$(function() {
    $('#mainmenu a[href=""]').click(function() {
        return false;
    });
});

$(function(){
    $('#menubar li:has(ul)').addClass('ddmenu_parent');
    $('#mainmenu li:has(ul)').addClass('ddmenu_parent');
    $('.ddmenu_parent > a').addClass('ddmenu');
    $('.ddmenu').on('touchstart', function() {
        $(this).next('ul').stop().slideToggle();
        $('.ddmenu').not(this).next('ul').slideUp();
        return false;
    });
    $('.ddmenu_parent').hover(function() {
        $(this).children('ul').stop().slideToggle();
    });
});

$(function() {
    var scroll = $('.pagetop');
    var scrollShow = $('.pagetop-show');
    $(scroll).hide();
    $(window).scroll(function() {
        if($(this).scrollTop() >= 300) {
            $(scroll).fadeIn().addClass(scrollShow);
        } else {
            $(scroll).fadeOut().removeClass(scrollShow);
        }
    });
});

$(window).on('load', function() {
    var hash = location.hash;
    if(hash) {
        $('body,html').scrollTop(0);
        setTimeout(function() {
            var target = $(hash);
            var scroll = target.offset().top;
            $('body,html').animate({scrollTop:scroll},500);
        }, 100);
    }
});
$(window).on('load', function() {
    $('a[href^="#"]').click(function() {
        var href = $(this).attr('href');
        var target = href == '#' ? 0 : $(href).offset().top;
        $('body,html').animate({scrollTop:target},500);
        return false;
    });
});

$(function() {
    $('.openclose').next().hide();
    $('.openclose').click(function() {
        $(this).next().slideToggle();
        $('.openclose').not(this).next().slideUp();
    });
});

$(function() {
    $('main h2').wrapInner('<span class="uline">');
});
