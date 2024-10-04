/*----------------Tab Content--------------------*/

window.addEventListener("load", () => {
    const tabs = document.querySelectorAll("[tab_content_title2]");
    const content = document.querySelectorAll("[tab_content_item2]");

    if (tabs && content) {

        for (let i = 0; i < tabs.length; i++) {
            tabs[0].click()
            tabs[0].classList.add('active')

            tabs[i].addEventListener("click", () => {
                tabs.forEach((item) => {
                    item.classList.remove("active");
                });
                tabs[i].classList.add("active");

                const contentId = tabs[i].getAttribute("tab_content_title2");

                content.forEach((item) => {
                    item.classList.remove("active");
                });

                const element = document.querySelector(
                    `[tab_content_item2="${contentId}"]`
                );
                element.classList.add("active");
            });
        }
    }
});

/*-----------------Scrool Slider------------------*/
document.addEventListener("DOMContentLoaded", () => {
    let left = document.querySelectorAll(".ArrowLeft");
    let right = document.querySelectorAll(".ArrowRight");

    left.forEach(leftItem => {
        if (!leftItem) return

        leftItem.addEventListener("click", () => {
            scrollSlider(-350)
        })
    })

    right.forEach(rightItem => {
        if (!rightItem) return

        rightItem.addEventListener("click", () => {
            scrollSlider(350)
        })
    })


    function scrollSlider(distance) {
        let slider1 = document.querySelector('.slider1');
        if (slider1) slider1.scrollLeft += distance;

        let slider2 = document.querySelector('.slider2');
        if (slider2) slider2.scrollLeft += distance;

        let slider3 = document.querySelector('.slider3');
        if (slider3) slider3.scrollLeft += distance;
    }
})
