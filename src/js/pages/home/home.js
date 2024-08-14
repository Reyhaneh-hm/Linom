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


/*---------Tab Content-----------*/
// document.getElementById("defaultOpen").click();

// let defaultOpen = document.getElementById("defaultOpen");
// defaultOpen.onclick = function (event) { openItem(event, 'irani'); };

// let farangi = document.getElementById("farangi");
// farangi.onclick = function (event) { openItem(event, 'farangi'); };

// let cabinets = document.getElementById("cabinets");
// cabinets.onclick = function (event) { openItem(event, 'cabinets'); };

// let vanBath = document.getElementById("vanBath");
// vanBath.onclick = function (event) { openItem(event, 'vanBath'); };

// let doshBath = document.getElementById("doshBath");
// doshBath.onclick = function (event) { openItem(event, 'doshBath'); };


// function openItem(evt, itemName) {
//     var i, tabcontent, tablinks;

//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }

//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }

//     document.getElementById(itemName).style.display = "flex";
//     evt.currentTarget.className += " active";
// }

window.addEventListener("load", () => {
    const tabs = document.querySelectorAll("[tab_content_title2]");
    const content = document.querySelectorAll("[tab_content_item2]");

    if (tabs && content) {
        // if (tabs.length > 0 && content.length > 0) {
        //     tabs[0].classList.add("active");
        //     content[0].classList.add("active");
        //     content[0].style.display = "flex";
        // }
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
                    // item.style.display = "none";
                });

                const element = document.querySelector(
                    `[tab_content_item2="${contentId}"]`
                );
                element.classList.add("show");
                // element.style.display = "flex";
            });
        }
    }
});

/*---------audio-----------*/

// let number = 0;

// function voiceOnOff() {
//     number++
//     let playBtn = document.getElementById('playBtn');

//     if (number % 2 === 0) {
//         playBtn.classList = 'icon-Play'
//     } else {
//         playBtn.classList = 'icon-Pause'
//     }

// }

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

    // if (left && right) {
    //     left.onclick = function () { scrollSlider(-300); };
    //     right.onclick = function () { scrollSlider(300); };
    // }

    function scrollSlider(distance) {
        let slider1 = document.querySelector('.slider1');
        if (slider1) slider1.scrollLeft += distance;

        let slider2 = document.querySelector('.slider2');
        if (slider2) slider2.scrollLeft += distance;
    }
});
/*-----------------Scrool Slider Home------------------*/

// document.querySelector('.icon-Arrow-Left-2').addEventListener('click', function () {
//     document.querySelector('.slick-prev').click();
// });

// document.querySelector('.icon-Arrow-Right-2').addEventListener('click', function () {
//     document.querySelector('.slick-next').click();
// });

/*-----------------Timer------------------*/
var timerInterval;
var seconds = 0;
var isPlaying = false;

function updateTimer() {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;
    $("#timeAudio").text(("0" + minutes).slice(-2) + ":" + ("0" + remainingSeconds).slice(-2));

    // اگر زمان به 1 دقیقه و 37 ثانیه برسد، تایمر متوقف و بازنشانی می‌شود
    if (minutes === 1 && remainingSeconds === 37) {
        stopTimer();
        seconds = 0;
        updateTimer();
        $("#playBtn").removeClass("icon-Pause").addClass("icon-Play");
    }
}

function voiceOnOff() {
    if (!isPlaying) {
        startTimer();
        $("#playBtn").removeClass("icon-Play").addClass("icon-Pause");
    } else {
        stopTimer();
        $("#playBtn").removeClass("icon-Pause").addClass("icon-Play");
    }
    isPlaying = !isPlaying;
}

document.getElementById("playBtn").onclick = voiceOnOff;

function startTimer() {
    timerInterval = setInterval(function () {
        seconds++;
        updateTimer();
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    seconds = 0; // بازنشانی مقدار ثانیه‌ها
    updateTimer();
}

/*---------------------------------*/
