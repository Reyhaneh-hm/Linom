
/*-----------------Scrool Slider------------------*/
document.addEventListener("DOMContentLoaded", () => {
    let left = document.querySelectorAll(".ArrowLeft");
    let right = document.querySelectorAll(".ArrowRight");

    left.forEach(leftItem => {
        if (!leftItem) return

        leftItem.addEventListener("click", () => {
            scrollSlider(-300)
        })
    })

    right.forEach(rightItem => {
        if (!rightItem) return

        rightItem.addEventListener("click", () => {
            scrollSlider(300)
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
