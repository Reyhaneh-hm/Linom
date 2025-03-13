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

document.addEventListener("DOMContentLoaded", () => {
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
        checkbox.checked = false; // برای ریست کردن وضعیت چک‌باکس
    });
});
/*-------------------ghange lang------------------*/

// document.addEventListener("DOMContentLoaded", function () {
//     const flag = document.querySelector(".flag");
//     const langFa = document.getElementById("lang_fa");
//     const langEn = document.getElementById("lang_en");

//     flag.addEventListener("click", function () {
//         if (langFa.style.display === "block" || langFa.style.display === "") {
//             langFa.style.display = "none";
//             langEn.style.display = "block";
//         } else {
//             langFa.style.display = "block";
//             langEn.style.display = "none";
//         }
//     });
// });

/*-----------------------show search-box------------------------*/
document.addEventListener("DOMContentLoaded", () => {
    const searchIcon = document.getElementById("search");
    const searchBox = document.querySelector("#form");
    const overlay2 = document.querySelector(".overlay2");

    const toggleSearchBox = () => {
        searchBox.classList.toggle("active");
        overlay2.classList.toggle("active");
        searchBox.value = "";
    };

    searchIcon?.addEventListener("click", toggleSearchBox);

    overlay2?.addEventListener("click", () => {
        if (searchBox.classList.contains("active")) {
            toggleSearchBox();
        }
    });
});
