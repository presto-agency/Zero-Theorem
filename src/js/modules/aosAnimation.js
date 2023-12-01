import $ from "jquery";
import AOS from 'aos/dist/aos.js';

export const aosAnimation = () => {
    AOS.init({
        duration: 600,
        disable: 'mobile'
    });
    if ($(window).width() < 992) {
        $('.has-sub').on('click', function (e) {
            e.preventDefault();
        })
    }
    else {}

};
