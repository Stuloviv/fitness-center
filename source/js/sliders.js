import Swiper from './libs/swiper';

const initCoachesSlider = () => {
  const coachesSlider = new Swiper('.coaches__slider', {
    slidesPerView: 4,
    spaceBetween: 40,
    loop: true,

    navigation: {
      nextEl: '.swiper-button-coaches-next',
      prevEl: '.swiper-button-coaches-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
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
    spaceBetween: 100,
    loop: false,

    navigation: {
      nextEl: '.swiper-button-reviews-next',
      prevEl: '.swiper-button-reviews-prev',
    },
  });
  return reviewsSlider;
};

export {initCoachesSlider, initReviewsSlider};
