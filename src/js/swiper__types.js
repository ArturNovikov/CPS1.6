;('use strict')

import Swiper, { Navigation, Pagination } from 'swiper'
Swiper.use([Navigation, Pagination])

let typesContainer = document.querySelector('.types__container')
let typesMenu = document.querySelector('.types__menu')
let typesSlidesAll = document.querySelectorAll('.types__element')

let event = window.matchMedia('(max-width: 767px)')
function myFunctionTypes(event) {
  if (event.matches) {
    for (let i = 0; i < typesSlidesAll.length; i++) {
      if (!typesSlidesAll[i].classList.contains('swiper-slide')) {
        typesSlidesAll[i].classList.add('swiper-slide')
      }
    }
    if (!typesMenu.classList.contains('swiper-wrapper')) {
      typesMenu.classList.add('swiper-wrapper')
    }
    if (!typesContainer.classList.contains('swiper')) {
      typesContainer.classList.add('swiper')
    }

    let swiper2 = new Swiper('.swiper-types', {
      spaceBetween: 16,
      slidesPerView: 1.18,
      allowTouchMove: true,
      speed: 400,
      height: 72,
      pagination: {
        el: '.swiper-pagination__types',
        clickable: true
      }
    })
  } else {
    let swiper2 = new Swiper('.swiper-types', {})
    swiper2.destroy()
    for (let i = 0; i < typesSlidesAll.length; i++) {
      if (typesSlidesAll[i].classList.contains('swiper-slide')) {
        typesSlidesAll[i].classList.remove('swiper-slide')
      }
    }
    typesMenu.classList.remove('swiper-wrapper')
    typesContainer.classList.remove('swiper')
  }
}
myFunctionTypes(event)
event.addEventListener('change', myFunctionTypes)
