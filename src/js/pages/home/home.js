import "../../../sass/components/pages/home/index.scss";
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

        wavesurfer.on("finish", function () {

            playBtn.classList.toggle("active");
            playBtn.classList.toggle("icon-Pause")
            playBtn.classList.toggle("icon-Play")

        });
        wavesurfer.on("audioprocess", function () {
            if (wavesurfer.isPlaying()) {

                var totalTime = wavesurfer.getDuration(),
                    currentTime = wavesurfer.getCurrentTime(),
                    remainingTime = totalTime - currentTime;
                document.getElementById("timeAudio").innerText = remainingTime.toFixed(1)
            }
        })
        const playBtn = document.querySelector(item.getAttribute("btn_id"));

        playBtn.addEventListener("click", () => {

            wavesurfer.playPause();

            playBtn.classList.toggle("active");
            playBtn.classList.toggle("icon-Pause")
            playBtn.classList.toggle("icon-Play")

        });



        // WaveSurfer.on("finish", function () {
        //     playBtn.classList.remove("active");
        // })




    });

});

/*--------------slider---------------*/

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

            const walk = (x - startX) * 1;

            item.scrollLeft = scrollLeft - walk;

            item.classList.add("active");

        });
    });


    //const prevButtons = document.querySelectorAll(".icon-Arrow-Left-2");
    //const nextButtons = document.querySelectorAll(".icon-Arrow-Right-2");

    // prevButtons.forEach((button) => {
    //     button.addEventListener("click", () => {
    //         const container = button.closest("[scroll_container]");
    //         console.log(container);
    //         container.scrollLeft -= container.offsetWidth;
    //     });
    // });

    // nextButtons.forEach((button) => {
    //     button.addEventListener("click", () => {
    //         const container = button.closest("[scroll_container]");
    //         container.scrollLeft += container.offsetWidth;
    //     });
    // });

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


    /*------------------Stop Btn Slider-------------------*/
    let currentSlide = 0;
    const slider = document.querySelectorAll('.slider');
    const totalslider = slider.length;

    function updateNavButtons() {
        const ArrowLeft = document.querySelector('.ArrowLeft');
        const ArrowRight = document.querySelector('.ArrowRight');

        ArrowLeft.classList.remove('disabled');
        ArrowRight.classList.remove('disabled');

        if (currentSlide === 0) {
            ArrowLeft.classList.add('disabled');
        }

        if (currentSlide === totalslider - 1) {
            ArrowRight.classList.add('disabled');
        }
    }

    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
        }
        updateNavButtons();
    }

    function nextSlide() {
        if (currentSlide < totalslider - 1) {
            currentSlide++;
        }
        updateNavButtons();
    }

    updateNavButtons();



});

/*---------------------------------*/
