import $ from "jquery";
import {slick} from "slick-carousel/slick/slick.min.js"

export const portfolioSlider = () => {
    $('.portfolio-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: $('.portfolio-button-next'),
        nextArrow: $('.portfolio-button-prev')
    });
};
