import $ from "jquery";
import AOS from 'aos/dist/aos.js';
import * as LottiePlayer from "@lottiefiles/lottie-player";
export const aosAnimation = () => {
    AOS.init({
        duration: 600,
        disable: 'mobile'
    });
    if ($(window).width() < 992) {
        $('.menu-item-has-children a').on('click', function (e) {
            var $this = $(this);
            if($this.next('ul').length > 0){
                e.preventDefault();
                if($this.parent().hasClass('active')){
                    $this.parent().removeClass('active');
                }else{
                    $('.menu-item-has-children').removeClass('active');
                    $this.parent().addClass('active');
                }
            }else{
                $('.menu-item-has-children').removeClass('active');
            }
        });

    }
    else {}
    function popupOpen() {
        var $popupButton = $('.btn-popup');
        $popupButton.on('click', function (e) {
            var $this = $(this);
            var popupButtonData = $this.data('popup');
            $('.popup').removeClass('active');
            $('body').addClass('scroll');
            $('div[data-popup = '+popupButtonData+']').addClass('active');
            // $('body').addClass('scroll');
        });
    }
    popupOpen();
    $('.popup__close').on('click', function (e) {
        var $this = $(this);
        $this.parents('.popup').removeClass('active');
        $('.popup__overlay').removeClass('active');
        $('body').removeClass('scroll');
    });
    $('.popup__overlay').on('click', function (e) {
        var $this = $(this);
        $this.removeClass('active');
        $('.popup').removeClass('active');
        $('body').removeClass('scroll');
    });

    $(window).on('scroll', () => {
        var scrollTop = $(window).scrollTop();
        if ( scrollTop > $('.contact').offset().top - 150) {
            tstScroll();
        }else{
        }
        function tstScroll(){
            setTimeout(function() {

            }, 100);
        }
    });
    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementTop < viewportBottom;
    };

// Animate numbers when scrolled into view
    $(window).scroll(function() {
        $('.card__info > .h3  > span').each((i, el) => {
            var $counter = $(el);
            if (!$counter.isInViewport() || $counter.data('animation-started'))
                return;

            $counter.data('animation-started', true).prop('Counter', 0).animate({
                Counter: $counter.text()
            }, {
                duration: 3000,
                easing: 'swing',
                step: function(now) {
                    $counter.text(Math.ceil(now));
                }
            });
        });
    });
};



$(window).on('scroll', () => {
    var scrollTop = $(window).scrollTop();
    var parallaxElement  = $('.parallax-element');
    var parallaxElementNumber = scrollTop / 5;
    var parallaxElementNumberHalf = scrollTop / 15;
    $(parallaxElement).css('transform',  'translate(0, '+parallaxElementNumber+'px)');
    $('.span-parallax').css('transform',  'translate(0, '+parallaxElementNumber+'px)');
    $('.span-parallax-half').css('transform',  'translate(0, '+parallaxElementNumberHalf+'px)');
    if ( scrollTop >= 10 ){}else{}
});