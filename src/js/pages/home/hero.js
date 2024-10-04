// import "../../../scss/components/pages/home/index.scss";
// import "../../../sass/base/fonts.scss";
// import WaveSurfer from "wavesurfer.js";

/*--------------slick slider---------------*/

import $ from "jquery";
import "slick-carousel/slick/slick.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

$(document).ready(function () {
    $('.boxSlider1').slick({
        rtl: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        // dots: true,
        arrows: true,
        prevArrow: $("#nextArrowHome"),
        nextArrow: $("#prevArrowHome"),
    });
});


$(document).ready(function () {
    $('.boxSlider2').slick({
        rtl: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1.2,
        slidesToScroll: 1,
        // dots: true,
        arrows: true,
        prevArrow: $("#prevArrowHome2"),
        nextArrow: $("#nextArrowHome2"),
    });
});


/*-----------------Scrool bottom----------------*/

$(document).ready(function () {
    $('.goNextSection').click(function () {
        $('html, body').animate({
            scrollTop: $(window).scrollTop() + $(window).height()
        }, 'slow');
    });
});