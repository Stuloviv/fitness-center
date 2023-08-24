import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import {initTabs} from './modules/tabs/init-tabs';
import './video';
import './price-shadow';
import {initCoachesSlider, initReviewsSlider} from './sliders';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();
  });
});

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initTabs();
    initCoachesSlider();
    initReviewsSlider();
  });
});
