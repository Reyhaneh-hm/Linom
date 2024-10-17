import "../../../scss/components/pages/list-blog/index.scss";

/*------------------------------------------------*/

const filterBtn = document.querySelector(".filterBtn");
const modalFilter = document.querySelector(".modalFilter");
const overlay = document.querySelector(".overlay");
filterBtn.addEventListener("click", () => {
    [overlay, modalFilter].forEach((item) => item.classList.add("active"));
});
overlay.addEventListener("click", () => {
    [overlay, modalFilter].forEach((item) => item.classList.remove("active"));
});