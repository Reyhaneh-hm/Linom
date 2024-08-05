import "../../../sass/components/pages/home/index.scss";


/*------------------------------------------*/
import WaveSurfer from "wavesurfer.js";

/*--------------slick slider---------------*/

$(document).ready(function () {
    $('#imageSlider').slick({
        rtl: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        // dots: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    });
})


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

            playBtn.classList.remove("active");

        });

        const playBtn = document.querySelector(item.getAttribute("btn_id"));

        playBtn.addEventListener("click", () => {

            wavesurfer.playPause();

            playBtn.classList.toggle("active");

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
            const walk = (x - startX) * 1;
            item.scrollLeft = scrollLeft - walk;
            item.classList.add("active");
        });
    });


    const prevButtons = document.querySelectorAll(".icon-Arrow-Left-2");
    const nextButtons = document.querySelectorAll(".icon-Arrow-Right-2");

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



/*-------------Time Audio--------------*/


var audio = document.getElementById("playsBtn");

// Countdown
audio.addEventListener("timeupdate", function () {
    var timeAudio = document.getElementById('timeAudio');
    var ml = parseInt((audio.duration / 60 - audio.currentTime / 60) % 60);
    var sl = parseInt(audio.duration % 60 - audio.currentTime);

    if (sl < 10) {
        timeAudio.innerHTML = ml + ':0' + sl;
    }
    else {
        timeAudio.innerHTML = '-' + ml + ':' + sl;
    }
}, false);

/*-----------------Scrool bottom----------------*/

$(document).ready(function () {
    $('.icon-Arrow-Down-2').click(function () {
        $('html, body').animate({
            scrollTop: $(window).scrollTop() + $(window).height()
        }, 'slow');
    });
});


/*-------------------------------------------*/

