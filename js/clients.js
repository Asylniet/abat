const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 500,
  },
  speed: 400,
  slidesPerView: 2,
  spaceBetween: 100,
  breakpoints: {
    600: {
      slidesPerView: 3,
      spaceBetween: 100,
    },
    800: {
      slidesPerView: 4,
      spaceBetween: 90,
    },
    1000: {
      slidesPerView: 5,
      spaceBetween: 100,
    },
    1300: {
      slidesPerView: 6,
      spaceBetween: 100,
    },
  },
});
