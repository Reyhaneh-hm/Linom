import "../../sass/components/Public/navbar.scss";

/*-------------------------------------------*/

window.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu");
    const logo = document.querySelector(".logo");


    window.addEventListener("scroll", () => {
        if (!menu.classList.contains("inner")) {

            if (window.pageYOffset >= 200) {

                logo.classList.add("showLogo")

            } else {

                logo.classList.remove("showLogo")

            }
        }
    });

    /*-----------------------show filterProduct------------------------*/

    const hambergerMuno2 = document.querySelector("#hambergerMuno2");
    const filterProduct = document.querySelector(".filterProduct");
    const overlay = document.querySelector(".overlay");

    hambergerMuno2.addEventListener("click", () => {
        [overlay, filterProduct].forEach((item) => item.classList.add("active"));
    });
    overlay.addEventListener("click", () => {
        [overlay, filterProduct].forEach((item) => item.classList.remove("active"));
    });

});


/*-----------------Social Network---------------*/

const icons = ['icon-smallCircle icon-Telegram', 'icon-smallCircle icon-Instagram', 'icon-smallCircle icon-Facebook', 'icon-smallCircle icon-Whatsapp', 'icon-smallCircle icon-Twitter'];
const colors = ['Telegram', 'Instagram', 'Facebook', 'Whatsapp', 'Twitter'];
const centerCircle = document.getElementById('centerCircle');

colors.forEach((color, index) => {
    const smallCircle = document.createElement('a');
    smallCircle.href = '#';
    smallCircle.classList.add('small-circle', `circle-${color}`);
    smallCircle.innerHTML = `<i class="${icons[index]}"></i>`;
    centerCircle.appendChild(smallCircle);
});

let isExpanded = false;
const delay = 150;

centerCircle.addEventListener('click', () => {
    const smallCircles = document.querySelectorAll('.small-circle');
    // const circleTelegram = document.querySelector('.circle-Telegram');
    // const circleInstagram = document.querySelector('.circle-Instagram');
    // const circleFacebook = document.querySelector('.circle-Facebook');
    // const circleWhatsapp = document.querySelector('.circle-Whatsapp');
    // const circleTwitter = document.querySelector('.circle-Twitter');

    if (!isExpanded) {
        smallCircles.forEach((circle, index) => {
            setTimeout(() => {
                circle.style.opacity = '1';
                circle.style.zIndex = '61';
                // circle.style.transform = 'translate(0px, 0px)';
                // circleTelegram.style.transform = "translate(-20px,-75px)";
            }, index * delay);
        });
        isExpanded = true;
        centerCircle.style.background = "#cf5241";
    } else {
        smallCircles.forEach((circle, index) => {
            setTimeout(() => {
                circle.style.opacity = '0';
                circle.style.zIndex = '60';
            }, index * delay);
        });
        isExpanded = false;
        centerCircle.style.background = "#3d3c45";
    }
});
