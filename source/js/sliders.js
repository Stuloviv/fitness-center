import Swiper from './libs/swiper';

const initCoachesSlider = () => {
  const coachesSlider = new Swiper('.coaches__slider', {
    slidesPerView: 4,
    spaceBetween: 40,
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        // spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
  return coachesSlider;
};

const initReviewsSlider = () => {
  const reviewsSlider = new Swiper('.reviews__wrapper', {
    // slidesPerView: 1,
    spaceBetween: 100,
    loop: false,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // breakpoints: {
    //   320: {
    //     slidesPerView: 1,
    //     // spaceBetween: 0,
    //   },
    //   768: {
    //     slidesPerView: 2,
    //     spaceBetween: 30,
    //   },
    //   1200: {
    //     slidesPerView: 4,
    //     spaceBetween: 40,
    //   },
    // },
  });
  return reviewsSlider;
};

export {initCoachesSlider, initReviewsSlider};
