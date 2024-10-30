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
        checkbox.checked = false; // ریست کردن وضعیت چک‌باکس
    });

    document.querySelectorAll(".item").forEach((item) => {
        item.addEventListener("click", (event) => {
            event.stopPropagation();

            const submenu = item.querySelector(".submenu");
            const icon = item.querySelector(".icon");

            if (item.classList.contains("active")) {
                item.classList.remove("active");
                if (submenu) {
                    submenu.style.maxHeight = null;
                    submenu.style.marginTop = "0px";
                }
                if (icon) {
                    icon.style.transform = "rotate(0deg)";
                }
            } else {
                document.querySelectorAll(".item").forEach((el) => el.classList.remove("active"));
                document.querySelectorAll(".submenu").forEach((el) => {
                    el.style.maxHeight = null;
                    el.style.marginTop = "0px";
                });
                document.querySelectorAll(".icon").forEach((ic) => ic.style.transform = "rotate(0deg)");

                item.classList.add("active");
                if (submenu) {
                    submenu.style.maxHeight = submenu.scrollHeight + "px";
                    submenu.style.marginTop = "15px";
                }
                if (icon) {
                    icon.style.transform = "rotate(-90deg)";
                }
            }
        });
    });
});
