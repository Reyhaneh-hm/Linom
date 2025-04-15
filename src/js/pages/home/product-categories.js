// ---------------- Tab Content ----------------
window.addEventListener("load", () => {
    const tabs = document.querySelectorAll("[tab_content_title2]");
    const content = document.querySelectorAll("[tab_content_item2]");

    if (tabs.length && content.length) {
        tabs.forEach((tab) => {
            tab.addEventListener("click", () => {
                const tabId = tab.getAttribute("tab_content_title2");

                tabs.forEach(t => t.classList.remove("active"));
                tab.classList.add("active");

                content.forEach(c => c.classList.remove("active"));
                const selectedContent = document.querySelector(`[tab_content_item2="${tabId}"]`);
                if (selectedContent) selectedContent.classList.add("active");
            });
        });
    }
});

// ---------------- Scroll Slider with Arrows + Mouse Drag ----------------
document.addEventListener("DOMContentLoaded", () => {
    let left = document.querySelectorAll(".ArrowLeft2");
    let right = document.querySelectorAll(".ArrowRight2");

    left.forEach(leftItem => {
        if (!leftItem) return;
        leftItem.addEventListener("click", () => scrollSlider(-350));
    });

    right.forEach(rightItem => {
        if (!rightItem) return;
        rightItem.addEventListener("click", () => scrollSlider(350));
    });

    function scrollSlider(distance) {
        let slider1 = document.querySelector('.slider1');
        if (slider1) slider1.scrollLeft += distance;

        let slider2 = document.querySelector('.slider2');
        if (slider2) slider2.scrollLeft += distance;

        let slider3 = document.querySelector('.slider3');
        if (slider3) slider3.scrollLeft += distance;
    }



    document.querySelectorAll("[scroll_container2]").forEach(container => {
        let isDragging = false, startX, scrollLeft;

        container.addEventListener("mousedown", e => {
            isDragging = true;
            container.classList.add("dragging"); 
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        });

        container.addEventListener("mouseleave", () => {
            isDragging = false;
            container.classList.remove("dragging");
        });

        container.addEventListener("mouseup", () => {
            isDragging = false;
            container.classList.remove("dragging");
        });

        container.addEventListener("mousemove", e => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 1;
            container.scrollLeft = scrollLeft - walk;
        });

        container.addEventListener("touchstart", e => {
            isDragging = true;
            startX = e.touches[0].pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        });

        container.addEventListener("touchend", () => {
            isDragging = false;
        });

        container.addEventListener("touchmove", e => {
            if (!isDragging) return;
            const x = e.touches[0].pageX - container.offsetLeft;
            const walk = (x - startX) * 1;
            container.scrollLeft = scrollLeft - walk;
        });

        container.querySelectorAll("*").forEach(el => {
            el.setAttribute("draggable", "false");
        });
    });
});
