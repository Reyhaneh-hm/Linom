import '../../../scss/components/pages/FAQ/FAQ.scss';

/*-----------------Tab Content-----------------*/
document.querySelector(".nav").addEventListener("click", (e) => {
  const tab = e.target.closest(".nav-link");
  if (!tab) return;

  document.querySelectorAll(".nav-link").forEach((t) => t.classList.remove("active"));
  tab.classList.add("active");

  const contentId = tab.getAttribute("data-target");
  document.querySelectorAll(".item").forEach((c) => c.classList.remove("active"));
  document.querySelector(`[item="${contentId}"]`).classList.add("active");
});

/*-----------------accordion menu--------------------*/
window.addEventListener("load", () => {
  const filterItem = document.querySelectorAll("[filte_item]");

  filterItem.forEach((item) => {
    if (!item) return;

    const headItem = item.querySelector(".accordion-button");
    const lists = item.querySelector(".accordion-collapse");

    item.style.height = headItem.offsetHeight + "px";
    const boxHeight = lists.offsetHeight;


    headItem.addEventListener("click", () => {
      filterItem.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          otherItem.style.height = headItem.offsetHeight + "px";
        }
      });

      if (!item.classList.contains("active")) {
        item.classList.add("active");
        item.style.height = boxHeight + headItem.offsetHeight + "px";
      } else {
        item.classList.remove("active");
        item.style.height = headItem.offsetHeight + "px";
      }
    });

    const firstActive = document.querySelector("[filte_item].active");
    if (firstActive) {
      const firstButton = firstActive.querySelector(".accordion-button");
      const firstLists = firstActive.querySelector(".accordion-collapse");
      firstActive.style.height = firstButton.offsetHeight + firstLists.scrollHeight + "px";
    }
    filterItem[0].querySelector(".accordion-button").click();

  });

});

