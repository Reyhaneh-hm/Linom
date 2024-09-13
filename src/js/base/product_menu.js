import "../../sass/components/Public/navbar.scss";

/*--------------------------------------------*/

window.addEventListener("load", () => {
    const burgger = document.querySelector(".burgger");
    const topHeader = document.querySelector("#topHeader");
    const itemManuCategories = document.querySelector(".text-menu");
    const productMenu = document.querySelector(".product_menu");
    const overlay2 = document.querySelector(".overlay2");


    itemManuCategories.addEventListener("click", () => {
        [overlay2, productMenu].forEach((item) => item.classList.toggle("active"));
    });
    overlay2.addEventListener("click", () => {
        [overlay2, productMenu].forEach((item) => item.classList.remove("active"));
    });

    if (window.innerWidth <= 991) {
        const productMenuSibeBarElement = document.querySelectorAll(".product_menu .sidebar .box li");
        const productMenuProductsElement = document.querySelectorAll(".product_menu .content_elem .main_elem");
        productMenuProductsElement.forEach((item) => item.classList.remove("active"));

        productMenuSibeBarElement.forEach((item) => item.classList.remove("active"));

        burgger.addEventListener("click", () => {
            [overlay2, productMenu, burgger].forEach((item) => item.classList.add("active"));
            topHeader.classList.add("hide");
        });

        overlay2.addEventListener("click", () => {
            [overlay2, productMenu, burgger].forEach((item) => item.classList.remove("active"));
            topHeader.classList.remove("hide");
        });
    }

    document.addEventListener("click", (e) => {
        if (e.target.tagName == "BODY" && productMenu.classList.contains('active')) {
            productMenu.classList.remove("active");
            document.body.classList.remove("active");
        }
    });
});

/*-------------------------------------------------*/


window.addEventListener("load", () => {
    const tabs = document.querySelectorAll("[tab_content_title]");
    const content = document.querySelectorAll("[tab_content_item]");
    const overlay2 = document.querySelector(".overlay2");

    if (tabs && content) {
        for (let tab of tabs) {
            tab.addEventListener("click", () => {
                tabs.forEach((item) => {
                    item.classList.remove("active");
                    overlay2.classList.remove("active");
                });

                tab.classList.add("active");
                overlay2.classList.add("active");

                const contentId = tab.getAttribute("tab_content_title");

                content.forEach((item) => {
                    item.classList.remove("active");
                    overlay2.classList.remove("active");
                });

                const element = document.querySelector(
                    `[tab_content_item="${contentId}"]`
                );
                element.classList.add("active");
                overlay2.classList.remove("active");
            });
        }
    }
});
