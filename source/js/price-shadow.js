let priceWrapperElements = document.querySelectorAll('.prices__card-price-wrapper');

function addPriceShadow() {
  priceWrapperElements.forEach((priceWrapperElement) => {
    let elementTextContent = priceWrapperElement.querySelector('span').textContent;
    let shadowStyle;
    if (window.innerWidth < 767) {
      shadowStyle = 'position: absolute; bottom: 49px; left: -17px; margin: 0; padding: 0; font-size: 80px; color: #e8e8e8; background-image: none;';
    } else {
      shadowStyle = 'position: absolute; bottom: 56px; left: -18px; margin: 0; padding: 0; font-size: 100px; color: #e8e8e8; background-image: none;';
    }
    priceWrapperElement.insertAdjacentHTML('afterbegin', `<span style="${shadowStyle}">${elementTextContent}</span>`);
  });
}

addPriceShadow();
