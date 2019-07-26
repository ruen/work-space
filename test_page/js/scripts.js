//header section menu
jQuery(function($){
    $('.header-section .menu-link').on('click', function(){
        $(this).toggleClass('active');
        $('.header-section nav').slideToggle();
    });
});
//end header section menu

//stylish select
jQuery(function($){
    $('select').sSelect({ddMaxHeight: '300px'});
});
//end stylish select

// checkbox  and radio
jQuery(function($){
    $('input[type=radio], input[type=checkbox]').iCheck();
});
// end checkbox and radio

// range slider
$(document).ready(function() {
    $( "#js-level-track" ).slider({
        range: "min",
        value: 3,
        min: 1,
        step: 1,
        max: 4,
        animate: true,
        slide: function( event, ui ) {
            $( "#slider-range-min .ui-slider-handle" ).html( ui.value );
        },
        change: function( event, ui ) {
            $( "#slider-range-min .ui-slider-handle" ).html('');
        }
    });
});
// end range slider

// scroll
jQuery(function($){
    var sections = $('.section'), nav = $('ul');
    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();
        sections.each(function() {
            var top = $(this).offset().top - 0, bottom = top + $(this).outerHeight();
            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
            }
        });
    });
    nav.find('.scroll-link').on('click', function () {
        var $el = $(this)
            , id = $el.attr('href');
        $('html, body').animate({
            scrollTop: $(id).offset().top - 0
        }, 500);
        return false;
    });
    $('.scroll-link-button').on('click', function () {
        var $el = $(this)
            , id = $el.attr('href');
        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 500);
        $('input.first-name').focus();
        return false;
    });
});
// end scroll