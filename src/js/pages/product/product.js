import '../../../scss/components/pages/product/index.scss';
import '../home/new-product';
import $ from "jquery";
import "slick-carousel/slick/slick.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/*------------------slider mainImg------------------*/
$(document).ready(function () {
    $('.main-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        rtl: true,
        slidesToShow: 1,
        asNavFor: '.navSlider'
    });

    $('.navSlider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.main-img',
        focusOnSelect: true
    });
});
/*-------------------Slider Product-------------------*/
window.addEventListener("load", () => {
    document.querySelectorAll("[scroll_container]").forEach(t => {
        let e = !1, i, s;
        t.addEventListener("mousedown", n => {
            e = !0,
                i = n.pageX - t.offsetLeft,
                s = t.scrollLeft
        }),
            t.addEventListener("mouseleave", () => {
                e = !1,
                    t.classList.remove("active")
            }),
            t.addEventListener("mouseup", () => {
                e = !1,
                    t.classList.remove("active")
            }),
            t.addEventListener("mousemove", n => {
                if (!e)
                    return;
                n.preventDefault();
                const r = (n.pageX - t.offsetLeft - i) * 1;
                t.scrollLeft = s - r,
                    t.classList.add("active")
            }),
            t.addEventListener("touchstart", n => {
                e = !0,
                    i = n.touches[0].pageX - t.offsetLeft,
                    s = t.scrollLeft
            }),
            t.addEventListener("touchend", () => {
                e = !1,
                    t.classList.remove("active")
            }),
            t.addEventListener("touchmove", n => {
                if (!e)
                    return;
                const r = (n.touches[0].pageX - t.offsetLeft - i) * 1;
                t.scrollLeft = s - r,
                    t.classList.add("active")
            })
    })
});

/*-----------------number Spinner-------------------*/
const numberSpinner = document.querySelectorAll(".add-product");
numberSpinner.forEach((item) => {
    const increament = item.querySelector(".increament");
    const decreament = item.querySelector(".decreament");
    const input = item.querySelector("input");
    const minValue = +input.getAttribute("min");
    const maxValue = +input.getAttribute("max");
    const stepValue = +input.getAttribute("step");

    input.value = minValue;

    const updateDecrementIcon = () => {
        if (+input.value === minValue) {
            decreament.classList.add("icon-Delete");
            decreament.classList.remove("icon-Minus");
        } else {
            decreament.classList.add("icon-Minus");
            decreament.classList.remove("icon-Delete");
        }
    };

    updateDecrementIcon();

    increament.addEventListener("click", () => {
        if (+input.value < maxValue) {
            input.value = +input.value + stepValue;
            updateDecrementIcon();
        }
    });

    decreament.addEventListener("click", () => {
        if (+input.value > minValue) {
            input.value = +input.value - stepValue;
            updateDecrementIcon();
        }
    });
});

