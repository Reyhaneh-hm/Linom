import "../../sass/components/Public/navbar.scss";

/*-------------------------------------------*/

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


/*--------------------------------------------*/

window.addEventListener("DOMContentLoaded", () => {

    const hambergerMuno2 = document.querySelector("#hambergerMuno2");
    const filterProduct = document.querySelector(".filterProduct");
    const overlay = document.querySelector(".overlay");
    hambergerMuno2.addEventListener("click", () => {
        [overlay, filterProduct].forEach((item) => item.classList.toggle("active"));
    });
    overlay.addEventListener("click", () => {
        [overlay, filterProduct].forEach((item) => item.classList.remove("active"));
    });

})