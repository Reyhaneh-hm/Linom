import "../../../scss/components/pages/list-blog/index.scss";

/*------------------------------------------------*/

const filterBtn = document.querySelector(".filterBtn");
const modalFilter = document.querySelector(".modalFilter");
const overlay = document.querySelector(".overlay");
filterBtn.addEventListener("click", () => {
    [overlay, modalFilter].forEach((item) => item.classList.add("active"));
});
overlay.addEventListener("click", () => {
    [overlay, modalFilter].forEach((item) => item.classList.remove("active"));
});


/*-----------------------show modalFilter------------------------*/
/*document.addEventListener("DOMContentLoaded", () => {
    const filterBtn = document.querySelector(".filterBtn");
    const modalFilter = document.querySelector(".modalFilter");
    const overlay2 = document.querySelector(".overlay2");

    filterBtn.addEventListener("click", () => {
        modalFilter.classList.toggle("active");
        overlay2.classList.toggle("active");
    });

    overlay2.addEventListener("click", () => {
        modalFilter.classList.remove("active");
        overlay2.classList.remove("active");
        filterBtn.checked = false; // ریست کردن وضعیت چک‌باکس
    });

    document.querySelectorAll(".itemSlider").forEach((item) => {
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
                document.querySelectorAll(".itemSlider").forEach((el) => el.classList.remove("active"));
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
});*/
