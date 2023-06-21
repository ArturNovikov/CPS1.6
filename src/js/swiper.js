;('use strict')

import Swiper, { Navigation, Pagination } from 'swiper'
Swiper.use([Navigation, Pagination])

let brandsContainer = document.querySelector('.brands__container')
let brandsMenu = document.querySelector('.brands__menu')
let brandsSlidesAll = document.querySelectorAll('.brands__element')

let x = window.matchMedia('(max-width: 767px)')
function myFunctionBrands(x) {
  if (x.matches) {
    for (let i = 0; i < brandsSlidesAll.length; i++) {
      if (!brandsSlidesAll[i].classList.contains('swiper-slide')) {
        brandsSlidesAll[i].classList.add('swiper-slide')
      }
    }
    if (!brandsMenu.classList.contains('swiper-wrapper')) {
      brandsMenu.classList.add('swiper-wrapper')
    }
    if (!brandsContainer.classList.contains('swiper')) {
      brandsContainer.classList.add('swiper')
    }

    let swiper1 = new Swiper('.swiper__brands', {
      spaceBetween: 16,
      slidesPerView: 1.18,
      allowTouchMove: true,
      speed: 400,
      height: 72,
      pagination: {
        el: '.swiper-pagination__brands',
        clickable: true
      }
    })
  } else {
    let swiper1 = new Swiper('.swiper__brands', {})
    swiper1.destroy()
    for (let i = 0; i < brandsSlidesAll.length; i++) {
      if (brandsSlidesAll[i].classList.contains('swiper-slide')) {
        brandsSlidesAll[i].classList.remove('swiper-slide')
      }
    }
    brandsMenu.classList.remove('swiper-wrapper')
    brandsContainer.classList.remove('swiper')
  }
}
myFunctionBrands(x)
x.addEventListener('change', myFunctionBrands)
