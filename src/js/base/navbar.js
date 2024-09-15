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
const positions = [
    { x: -20, y: -75 },
    { x: 30, y: -80 },
    { x: 71, y: -53 },
    { x: 84, y: -5 },
    { x: 70, y: 44 }
];
const centerCircle = document.getElementById('centerCircle');

colors.forEach((color, index) => {
    const smallCircle = document.createElement('a');
    smallCircle.href = '#';
    smallCircle.classList.add('small-circle', `circle-${color}`);
    smallCircle.innerHTML = `<i class="${icons[index]}"></i>`;
    centerCircle.appendChild(smallCircle);

    smallCircle.addEventListener('mouseover', () => {
        smallCircle.style.transform += ' scale(1.12)';
    });

    smallCircle.addEventListener('mouseout', () => {
        smallCircle.style.transform = smallCircle.style.transform.replace(' scale(1.12)', '');
    });
});

let isExpanded = false;
const delay = 150;

centerCircle.addEventListener('click', () => {
    const smallCircles = document.querySelectorAll('.small-circle');
    
    if (!isExpanded) {
        smallCircles.forEach((circle, index) => {
            setTimeout(() => {
                const position = positions[index];
                circle.style.transform = `translate(${position.x}px, ${position.y}px)`;
                circle.style.opacity = '1';
                circle.style.zIndex = '60';
            }, index * delay);
        });
        isExpanded = true;
        centerCircle.style.background = "#cf5241";
    } else {
        smallCircles.forEach((circle, index) => {
            setTimeout(() => {
                circle.style.transform = 'translate(0px, 0px)';
                circle.style.opacity = '0';
                circle.style.zIndex = '-60';
            }, index * delay);
        });
        isExpanded = false;
        centerCircle.style.background = "#3d3c45";
    }
});
