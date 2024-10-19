import '../../../scss/components/pages/home/about-linom.scss';
import WaveSurfer from 'wavesurfer.js';

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

        function formatTime(seconds) {
            const h = Math.floor(seconds / 3600);
            const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
            const s = Math.floor(seconds % 60).toString().padStart(2, '0');
            if (h > 0) {
                return `${h}:${m}:${s}`;
            } else {
                return `${m}:${s}`;
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

                const formattedRemainingTime = formatTime(remainingTime);

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
