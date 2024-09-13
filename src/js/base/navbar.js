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
