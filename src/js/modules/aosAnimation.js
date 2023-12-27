import $ from "jquery";
import AOS from 'aos/dist/aos.js';

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
            $('.contact__img svg').removeClass('start');
        }
        function tstScroll(){
            setTimeout(function() {
                $('.contact__img svg').addClass('start');

            }, 100);
        }

    })
    // $('.card__info').each(function (e) {
    //     $(window).on('scroll', () => {
    //         var scrollTop = $(window).scrollTop();
    //         if ( scrollTop > $(this).offset().top - 450) {
    //             $(this).addClass('open');
    //         }
    //     })
    // });
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
