import "../../../sass/components/pages/list-blog/index.scss";
import "../../../sass/base/responsiv.scss"
/*------------------------------------------------*/


window.addEventListener("load", () => {
    const tabs = document.querySelectorAll("[tab_content_title01]");
    const content = document.querySelectorAll("[tab_content_item01]");

    if (tabs && content) {
        for (let tab of tabs) {
            tab.addEventListener("click", () => {
                tabs.forEach((item) => {
                    item.classList.remove("active");
                });

                tab.classList.add("active");

                const contentId = tab.getAttribute("tab_content_title01");

                content.forEach((item) => {
                    item.classList.remove("active");
                });

                const element = document.querySelector(
                    `[tab_content_item01="${contentId}"]`
                );
                element.classList.add("active");
            });
        }
    }
});
