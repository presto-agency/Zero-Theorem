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
export const logoSlider = () => {
    $('.brands-slider').slick({
        speed: 300,
        variableWidth: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1200,
            settings: {
                variableWidth: false,
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay:  true,
                infinite: true,
            }

        }, {

            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                variableWidth: false,
                slidesToScroll: 1,
                autoplay:  true,
                infinite: true,
            }

        }, {

            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                variableWidth: false,
                slidesToScroll: 1,
                autoplay:  true,
                infinite: true,
            }

        },{

            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                variableWidth: true,
                slidesToScroll: 1,
                autoplay:  true,
                infinite: true,
                centerMode: true,
                centerPadding: 0,
                autoplaySpeed: 1500,
            }

        },

        ]
    });
};