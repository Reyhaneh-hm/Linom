import "../../../sass/components/pages/home/index.scss";
import "../../../sass/base/fonts.scss"
import WaveSurfer from "wavesurfer.js";

/*--------------slick slider---------------*/

import $ from "jquery";
import "slick-carousel/slick/slick.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

$(document).ready(function () {
    $('#imageSlider').slick({
        rtl: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        // dots: true,
        arrows: true,
        prevArrow: $("#prevArrowHome"),
        nextArrow: $("#nextArrowHome"),
    });
});


$(document).ready(function () {
    $('#imageSlider2').slick({
        rtl: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1.2,
        slidesToScroll: 1,
        // dots: true,
        arrows: true,
        prevArrow: $("#prevArrowHome2"),
        nextArrow: $("#nextArrowHome2"),
    });
});


/*--------------audio---------------*/

window.addEventListener("load", () => {

    const audioTags = document.querySelectorAll("[audio_wave]");

    audioTags.forEach((item) => {

        if (!item) return;

        const wavesurfer = WaveSurfer.create({

            container: item,

            waveColor: "#DAEAFA",

            progressColor: "#CF5241",

            barWidth: 3,

            barGap: 5,

            responsive: true,

            height: 90,

            barRadius: 4,

            url: item.getAttribute("audio_src"),

            cursorWidth: 0,

        });

        // تابع کمکی برای تبدیل ثانیه به فرمت ساعت، دقیقه، ثانیه (در صورت وجود ساعت)
        function formatTime(seconds) {
            const h = Math.floor(seconds / 3600);
            const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
            const s = Math.floor(seconds % 60).toString().padStart(2, '0');
            if (h > 0) {
                return `${h}:${m}:${s}`;  // نمایش ساعت، دقیقه و ثانیه
            } else {
                return `${m}:${s}`;  // نمایش فقط دقیقه و ثانیه
            }
        }

        wavesurfer.on("finish", function () {

            playBtn.classList.toggle("active");
            playBtn.classList.toggle("icon-Pause");
            playBtn.classList.toggle("icon-Play");

        });

        wavesurfer.on("audioprocess", function () {
            if (wavesurfer.isPlaying()) {

                var totalTime = wavesurfer.getDuration(),
                    currentTime = wavesurfer.getCurrentTime(),
                    remainingTime = totalTime - currentTime;

                // تبدیل زمان باقی‌مانده به فرمت مناسب
                const formattedRemainingTime = formatTime(remainingTime);

                // نمایش زمان باقی‌مانده در عنصر HTML با ID "timeAudio"
                document.getElementById("timeAudio").innerText = formattedRemainingTime;

            }
        });

        const playBtn = document.querySelector(item.getAttribute("btn_id"));

        playBtn.addEventListener("click", () => {

            wavesurfer.playPause();

            playBtn.classList.toggle("active");
            playBtn.classList.toggle("icon-Pause");
            playBtn.classList.toggle("icon-Play");

        });
    });

});


/*--------------slider---------------*/

window.addEventListener("load", () => {
    const containers = document.querySelectorAll("[scroll_container]");

    containers.forEach((item) => {
        let isMouseDown = false;
        let startX, scrollLeft;

        item.addEventListener("mousedown", (e) => {
            isMouseDown = true;
            startX = e.pageX - item.offsetLeft;
            scrollLeft = item.scrollLeft;
        });

        item.addEventListener("mouseleave", () => {
            isMouseDown = false;
            item.classList.remove("active");
        });

        item.addEventListener("mouseup", () => {
            isMouseDown = false;
            item.classList.remove("active");
        });

        item.addEventListener("mousemove", (e) => {
            if (!isMouseDown) return;
            e.preventDefault();
            const x = e.pageX - item.offsetLeft;
            const walk = (x - startX) * 1; // سرعت اسکرول
            item.scrollLeft = scrollLeft - walk;

            item.classList.add("active");
        });
    });
});


window.addEventListener("load", () => {
    const containers = document.querySelectorAll("[scroll_container2]");

    containers.forEach((item) => {
        let isMouseDown = false;
        let startX, scrollLeft;

        item.addEventListener("mousedown", (e) => {
            isMouseDown = true;
            startX = e.pageX - item.offsetLeft;
            scrollLeft = item.scrollLeft;
        });

        item.addEventListener("mouseleave", () => {
            isMouseDown = false;
            item.classList.remove("active");
        });

        item.addEventListener("mouseup", () => {
            isMouseDown = false;
            item.classList.remove("active");
        });

        item.addEventListener("mousemove", (e) => {
            if (!isMouseDown) return;
            e.preventDefault();
            const x = e.pageX - item.offsetLeft;
            const walk = (x - startX) * 1; // سرعت اسکرول
            item.scrollLeft = scrollLeft - walk;

            item.classList.add("active");
        });
    });
});


/*-----------------Scrool bottom----------------*/

$(document).ready(function () {
    $('.icon-Arrow-Down-2').click(function () {
        $('html, body').animate({
            scrollTop: $(window).scrollTop() + $(window).height()
        }, 'slow');
    });
});


/*----------------Tab Content--------------------*/

window.addEventListener("load", () => {
    const tabs = document.querySelectorAll("[tab_content_title2]");
    const content = document.querySelectorAll("[tab_content_item2]");

    if (tabs && content) {

        for (let i = 0; i < tabs.length; i++) {
            tabs[0].click()
            tabs[0].classList.add('show')

            tabs[i].addEventListener("click", () => {
                tabs.forEach((item) => {
                    item.classList.remove("show");
                });
                tabs[i].classList.add("show");

                const contentId = tabs[i].getAttribute("tab_content_title2");

                content.forEach((item) => {
                    item.classList.remove("show");
                });

                const element = document.querySelector(
                    `[tab_content_item2="${contentId}"]`
                );
                element.classList.add("show");
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


/*-----------------Social Network---------------*/


// Create small circles with icons and append to the center circle
const icons = [ 'icon-smallCircle icon-Telegram', 'icon-smallCircle icon-Instagram', 'icon-smallCircle icon-Facebook', 'icon-smallCircle icon-Whatsapp', 'icon-smallCircle icon-Twitter'];
const colors = [ 'Telegram', 'Instagram', 'Facebook', 'Whatsapp', 'Twitter'];
const centerCircle = document.getElementById('centerCircle');

colors.forEach((color, index) => {
    const smallCircle = document.createElement('a');
    smallCircle.href = '#';
    smallCircle.classList.add('small-circle', `circle-${color}`);
    smallCircle.innerHTML = `<i class="${icons[index]}"></i>`;
    centerCircle.appendChild(smallCircle);
});

let isExpanded = false;
const delay = 150; // Delay between each circle

// Toggle visibility with sequential animation
centerCircle.addEventListener('click', () => {
    const smallCircles = document.querySelectorAll('.small-circle');

    if (!isExpanded) {
        smallCircles.forEach((circle, index) => {
            setTimeout(() => {
                circle.style.opacity = '1';
                circle.style.zIndex = '61';
            }, index * delay);
        });
        isExpanded = true;
        centerCircle.style.background= "#cf5241";
    } else {
        smallCircles.forEach((circle, index) => {
            setTimeout(() => {
                circle.style.opacity = '0';
                circle.style.zIndex = '60';
            }, index * delay);
        });
        isExpanded = false;
        centerCircle.style.background= "#3d3c45";
    }
});
