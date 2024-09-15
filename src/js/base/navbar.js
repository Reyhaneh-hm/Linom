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
});
/*-----------------------show filterProduct------------------------*/

window.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.querySelector("#checkbox");
    const filterProduct = document.querySelector(".filterProduct");
    const overlay = document.querySelector(".overlay");
  
    checkbox.addEventListener("change", () => {
      filterProduct.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  
    overlay.addEventListener("click", () => {
      filterProduct.classList.remove("active");
      overlay.classList.remove("active");
      checkbox.checked = false;  // میاد وضعیت رو ریست میکنه
    });
  });

/*-------------------------Social Network-----------------------------*/

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
centerCircle.style.zIndex = '61';


centerCircle.addEventListener('click', () => {
    const smallCircles = document.querySelectorAll('.small-circle');
    const circleTelegram = document.querySelector('.circle-Telegram');
    const circleInstagram = document.querySelector('.circle-Instagram');
    const circleFacebook = document.querySelector('.circle-Facebook');
    const circleWhatsapp = document.querySelector('.circle-Whatsapp');
    const circleTwitter = document.querySelector('.circle-Twitter');

    if (!isExpanded) {
        smallCircles.forEach((circle, index) => {
            setTimeout(() => {
                circleTelegram.style.transform = "translate(-20px,-75px)";
                circleInstagram.style.transform = "translate(30px,-80px)";
                circleFacebook.style.transform = "translate(71px,-53px)";
                circleWhatsapp.style.transform = "translate(84px,-5px)";
                circleTwitter.style.transform = "translate(70px,44px)";

                circle.style.opacity = '1';
                circle.style.zIndex = '-59';
            }, index * delay);
        });
        isExpanded = true;
        centerCircle.style.background = "#cf5241";
    } else {
        smallCircles.forEach((circle, index) => {
            setTimeout(() => {
                circle.style.opacity = '0';
                circle.style.zIndex = '-60';

                circleTelegram.style.transform = "translate(0,0)";
                circleInstagram.style.transform = "translate(0,0)";
                circleFacebook.style.transform = "translate(0,0)";
                circleWhatsapp.style.transform = "translate(0,0)";
                circleTwitter.style.transform = "translate(0,0)";

            }, index * delay);
        });
        isExpanded = false;
        centerCircle.style.background = "#3d3c45";
    }
});
