const projects = document.querySelectorAll(".swiper-projects");

projects.forEach((element) => {
  const swiper = new Swiper(element, {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    autoplay: { delay: 700 },
    spaceBetween: 0,
    allowTouchMove: false,
    disableOnInteraction: false,
    stopOnLastSlide: false,
    effect: "fade",
    fadeEffect: {
      crossFade: false,
    },
    on: {
      init: function () {
        this.autoplay.stop();
      },
    },
  });
  element.addEventListener("mouseenter", () => {
    swiper.autoplay.start();
  });
  element.addEventListener("mouseleave", () => {
    swiper.autoplay.stop();
    swiper.slideTo(1, 700, false);
  });
});

const swiperProject = new Swiper(".swiper-project", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
  
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
