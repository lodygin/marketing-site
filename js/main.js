// popup
let overlay = document.querySelector('.js-block-popup__overlay');
let closeIcon = document.querySelector('.js-block-popup__close');
let popupContent = document.querySelector('.js-block-popup__content');
let linkPopup = document.querySelector('.js-offer-link');

linkPopup.addEventListener('click', () => {
  overlay.classList.toggle('active');
  closeIcon.classList.toggle('active');
  popupContent.classList.toggle('active');
  document.body.classList.toggle('body-lock');
})

closeIcon.addEventListener('click', () => {
  overlay.classList.toggle('active');
  closeIcon.classList.toggle('active');
  popupContent.classList.toggle('active');
  document.body.classList.toggle('body-lock');
})

overlay.addEventListener('click', () => {
  overlay.classList.toggle('active');
  closeIcon.classList.toggle('active');
  popupContent.classList.toggle('active');
  document.body.classList.toggle('body-lock');
})

// burger
let nav = document.querySelector('.menu-header__menu');
let burger = document.querySelector('.menu-header__icon');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  burger.classList.toggle('active');
  document.body.classList.toggle('body-lock');
})

// scrollLinks
let anchors = document.querySelectorAll('a[href^="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', event => {
    event.preventDefault();
    let blockId = anchor.getAttribute('href')
    document.querySelector(blockId).scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })

    if (nav.classList.contains('active') && burger.classList.contains('active')) {
      nav.classList.toggle('active');
      burger.classList.toggle('active');
      document.body.classList.toggle('body-lock');
    }
  })
}