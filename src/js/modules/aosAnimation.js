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
        if ( scrollTop > $('.contact').offset().top ) {
            tstScroll();
        }
        function tstScroll(){
            setTimeout(function() {
                $('.contact__img img:first-child').addClass('img-hidden');
                $('.contact__img img:last-child').removeClass('img-hidden');
            }, 2000);
        }

    })
};
