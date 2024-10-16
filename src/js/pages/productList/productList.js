import "../../../scss/components/pages/productList/index.scss";
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui';


/*-----------------Fancybox--------------------*/

    //FancyBox
    Fancybox.bind('[data-fancybox]', {
        infinite: true,
        keyboard: true,
        loop: true,

        buttons: [
            'zoom',
            'slideShow',
            'fullScreen',
            'download',
            'thumbs',
            'close'
        ],
        animationEffect: "zoom",
        transitionEffect: "slide",
        thumbs: {
            autoStart: true
        },
        keyboard: true,
        touch: true,
        protect: true,
        idleTime: false,
        smallBtn: true,
        toolbar: true,
        animationDuration: 500,
        transitionDuration: 600,
    });
/*-----------------accordion menu--------------------*/
window.addEventListener("load", () => {
    const filterItem = document.querySelectorAll("[filte_item]");

    filterItem.forEach((item) => {
        if (!item) return;

        const headItem = item.querySelector(".head");
        const lists = item.querySelector(".box");

        item.style.height = headItem.offsetHeight + "px";
        const boxHeight = lists.offsetHeight;

        headItem.addEventListener("click", () => {
            filterItem.forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                    otherItem.style.height = headItem.offsetHeight + "px";
                }
            });

            if (!item.classList.contains("active")) {
                item.classList.add("active");
                item.style.height = boxHeight + headItem.offsetHeight + "px";
            } else {
                item.classList.remove("active");
                item.style.height = headItem.offsetHeight + "px";
            }
        });
        filterItem[0].querySelector(".head").click();
    });

});
/*----------------------Checkbox----------------------*/
const filterItems = document.querySelectorAll('.item .box input[type="checkbox"]');

filterItems.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const box = checkbox.closest('.box');
        const group = box.querySelectorAll('input[type="checkbox"]');
        
        group.forEach(item => {
            if (item !== checkbox) {
                item.checked = false;
                item.closest('li').classList.remove('checked');
            }
        });
        
        if (checkbox.checked) {
            checkbox.closest('li').classList.add('checked');
        } else {
            checkbox.closest('li').classList.remove('checked');
        }
    });
});

/*------------------Modal Filter-----------------*/

window.addEventListener("DOMContentLoaded", () => {

    // const filterBtn = document.querySelector("#filterBtn");
    const filterBtn = document.querySelector(".filterBtn");
    const modalFilter = document.querySelector(".modalFilter");
    const overlay = document.querySelector(".overlay");
    filterBtn.addEventListener("click", () => {
        [overlay, modalFilter].forEach((item) => item.classList.toggle("active"));
    }
    );
    overlay.addEventListener("click", () => {
        [overlay, modalFilter].forEach((item) => item.classList.remove("active"));
    }
    );
}
)

