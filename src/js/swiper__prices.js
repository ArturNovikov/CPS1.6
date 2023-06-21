;('use strict')

import Swiper, { Navigation, Pagination } from 'swiper'
Swiper.use([Navigation, Pagination])

let pricesContainer = document.querySelector('.prices__container')
let pricesMenu = document.querySelector('.prices__menu')
let pricesSlidesAll = document.querySelectorAll('.prices__element')

let y = window.matchMedia('(max-width: 767px)')
function myFunction(y) {
  if (y.matches) {
    for (let i = 0; i < pricesSlidesAll.length; i++) {
      if (!pricesSlidesAll[i].classList.contains('swiper-slide')) {
        pricesSlidesAll[i].classList.add('swiper-slide')
      }
    }
    if (!pricesMenu.classList.contains('swiper-wrapper')) {
      pricesMenu.classList.add('swiper-wrapper')
    }
    if (!pricesContainer.classList.contains('swiper')) {
      pricesContainer.classList.add('swiper')
    }

    let swiper3 = new Swiper('.swiper-prices', {
      spaceBetween: 16,
      slidesPerView: 1.18,
      allowTouchMove: true,
      speed: 400,
      height: 72,
      pagination: {
        el: '.swiper-pagination__prices',
        clickable: true
      }
    })
  } else {
    let swiper3 = new Swiper('.swiper-prices', {})
    swiper3.destroy()
    for (let i = 0; i < pricesSlidesAll.length; i++) {
      if (pricesSlidesAll[i].classList.contains('swiper-slide')) {
        pricesSlidesAll[i].classList.remove('swiper-slide')
      }
    }
    pricesMenu.classList.remove('swiper-wrapper')
    pricesContainer.classList.remove('swiper')
  }
}
myFunction(y)
y.addEventListener('change', myFunction)
