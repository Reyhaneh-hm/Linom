/*-----------------Scroll Slider with Arrows + Mouse Drag------------------*/
document.addEventListener("DOMContentLoaded", () => {
    let left = document.querySelectorAll(".ArrowLeft3");
    let right = document.querySelectorAll(".ArrowRight3");

    left.forEach(leftItem => {
        if (!leftItem) return;

        leftItem.addEventListener("click", () => {
            scrollSlider(-300);
        });
    });

    right.forEach(rightItem => {
        if (!rightItem) return;

        rightItem.addEventListener("click", () => {
            scrollSlider(300);
        });
    });

    function scrollSlider(distance) {
        let slider1 = document.querySelector('.slider1');
        if (slider1) slider1.scrollLeft += distance;

        let slider2 = document.querySelector('.slider2');
        if (slider2) slider2.scrollLeft += distance;

        let slider3 = document.querySelector('.slider3');
        if (slider3) slider3.scrollLeft += distance;
    }

    document.querySelectorAll("[scroll_container3]").forEach(t => {
        let isDown = false, startX, scrollLeft;

        t.addEventListener("mousedown", e => {
            isDown = true;
            t.classList.add("active");
            startX = e.pageX - t.offsetLeft;
            scrollLeft = t.scrollLeft;
        });

        t.addEventListener("mouseleave", () => {
            isDown = false;
            t.classList.remove("active");
        });

        t.addEventListener("mouseup", () => {
            isDown = false;
            t.classList.remove("active");
        });

        t.addEventListener("mousemove", e => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - t.offsetLeft;
            const walk = (x - startX) * 1;
            t.scrollLeft = scrollLeft - walk;
        });

        t.addEventListener("touchstart", e => {
            isDown = true;
            startX = e.touches[0].pageX - t.target.offsetLeft;
            scrollLeft = t.scrollLeft;
        });

        t.addEventListener("touchend", () => {
            isDown = false;
        });

        t.addEventListener("touchmove", e => {
            if (!isDown) return;
            const x = e.touches[0].pageX - t.offsetLeft;
            const walk = (x - startX) * 1;
            t.scrollLeft = scrollLeft - walk;
        });

        t.querySelectorAll("*").forEach(el => el.setAttribute("draggable", "false"));
    });
});
