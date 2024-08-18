import "../../../sass/components/pages/list-blog/index.scss";
import "../../../sass/base/responsiv.scss"
/*------------------------------------------------*/

const filterBtn = document.querySelector("#filterBtn");
const modalFilter = document.querySelector(".modalFilter");
const overlay = document.querySelector(".overlay");
filterBtn.addEventListener("click", () => {
    [overlay, modalFilter].forEach((item) => item.classList.add("active"));
});
overlay.addEventListener("click", () => {
    [overlay, modalFilter].forEach((item) => item.classList.remove("active"));
});