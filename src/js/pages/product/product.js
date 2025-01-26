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
        rtl: true,
        slidesToShow: 1,
        asNavFor: '.navSlider',
        arrows: true,
        prevArrow: $("#icon_right"),
        nextArrow: $("#icon_left"),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    focusOnSelect: true,
                    slidesToScroll: 1,
                    centerMode: true,
                },
                breakpoint: 425,
                settings: {
                    centerPadding: '20%',
                }
            }
        ]
    });

    $('.navSlider').slick({
        slidesToShow: 3,
        arrows: false,
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
const numberSpinner = document.querySelectorAll("#numberSpinner");
numberSpinner.forEach((item) => {
    const increament = item.querySelector(".increament");
    const decreament = item.querySelector(".decreament");
    const input = item.querySelector("input");
    const minValue = +input.getAttribute("min") || 1;
    const maxValue = +input.getAttribute("max") || 10;
    const stepValue = +input.getAttribute("step") || 1;

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

/*-------------------btn add product----------------------*/
document.addEventListener("DOMContentLoaded", function () {
    const addProductBtn = document.querySelector(".add-product");
    const productCount = document.querySelector(".product-count");
    const iconDelete = document.querySelector(".icon-Delete");

    addProductBtn.addEventListener("click", function () {
        addProductBtn.classList.toggle("d-flex");
        addProductBtn.classList.toggle("d-none");

        productCount.classList.toggle("d-none");
        productCount.classList.toggle("d-flex");
    });

    iconDelete.addEventListener("click", function () {
        productCount.classList.toggle("d-flex");
        productCount.classList.toggle("d-none");

        addProductBtn.classList.toggle("d-none");
        addProductBtn.classList.toggle("d-flex");
    });
});

/*-------------------opasity set product--------------------*/
document.addEventListener("scroll", function () {
    const setProduct = document.querySelector(".set-prodact");
    const scrollTop = window.scrollY;

    if (scrollTop >= 100 && scrollTop <= 200) {
        let opacityValue = 1 - (scrollTop - 100) / 100;
        setProduct.style.opacity = opacityValue.toString();
    } else if (scrollTop > 200) {
        setProduct.style.opacity = "0";
    } else {
        setProduct.style.opacity = "1";
    }
});


