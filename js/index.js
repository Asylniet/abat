const swiper = new Swiper(".swiper-images", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-next-button",
    prevEl: ".swiper-prev-button",
  },
});

const swiperStaff = new Swiper(".swiper-staff", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  spaceBetween: 100,
  slidesPerView: 1,

  breakpoints: {
    900: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1150: {
      slidesPerView: 3,
      spaceBetween: 100,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-next-button",
    prevEl: ".swiper-prev-button",
  },
});
