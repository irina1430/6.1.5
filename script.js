var init = false;
var swiper;
function swiperCard() {
  if (window.innerWidth < 768) {
    if (!init) {
      init = true;
      swiper = new Swiper(".swiper", {
        slidesPerView: "auto",
        direction: "horizontal",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  } else if (init) {
    swiper.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);

const btnShowMore = document.querySelector(".btn__show-more");
const showBrands = document.querySelector(".swiper-wrapper");
const windowWidth = window.innerWidth;
console.log(showBrands.scrollHeight);
btnShowMore.addEventListener("click", () => {
  if (showBrands.classList.contains("expanded")) {
    showBrands.style.height = "160px";
    btnShowMore.textContent = "Показать все";
    btnShowMore.classList.remove("rotate");
    showBrands.classList.remove("expanded");
  } else {
    showBrands.style.height = `${showBrands.scrollHeight}px`;
    btnShowMore.textContent = "Скрыть";
    btnShowMore.classList.add("rotate");
    showBrands.classList.add("expanded");
  }
});
