import "../../scss/components/public/navbar.scss";

/*---------------------Logo----------------------*/

window.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu");
    const logo = document.querySelector(".logo");


    window.addEventListener("scroll", () => {
        if (!menu.classList.contains("inner")) {

            if (window.pageYOffset >= 200) {

                logo.classList.add("showLogo")

            } else {

                logo.classList.remove("showLogo")

            }
        }
    });
});

/*-----------------------show filterProduct------------------------*/

window.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.querySelector("#checkbox");
    const filterProduct = document.querySelector(".filterProduct");
    const overlay = document.querySelector(".overlay");

    checkbox.addEventListener("change", () => {
        filterProduct.classList.toggle("active");
        overlay.classList.toggle("active");
    });

    overlay.addEventListener("click", () => {
        filterProduct.classList.remove("active");
        overlay.classList.remove("active");
        checkbox.checked = false;  // میاد وضعیت رو ریست میکنه
    });
});
