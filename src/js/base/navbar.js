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
// const filterBtn = document.querySelector("#filterBtn");
// const modalFilter = document.querySelector(".modalFilter");
// const overlay = document.querySelector(".overlay");
// filterBtn.addEventListener("click", () => {
//     [overlay, modalFilter].forEach((item) => item.classList.add("active"));
// });
// overlay.addEventListener("click", () => {
//     [overlay, modalFilter].forEach((item) => item.classList.remove("active"));
// });