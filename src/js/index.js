import '../scss/style.scss'

import Swiper, { Navigation, Pagination } from 'swiper'
Swiper.use([Navigation, Pagination])
;('use strict')

const showMoreBtnFunc = function () {
  let showMore = document.querySelector('.services__show-more-btn')

  showMore.addEventListener('click', function () {
    let showMoreBtn = document.querySelector('.services__show-more-btn')
    let servicesMenu = document.querySelector('.services__menu')

    if (!showMoreBtn.classList.contains('open', 'btn--rotate')) {
      showMoreBtn.classList.add('open', 'btn--rotate')
      showMoreBtn.textContent = 'Скрыть'
      servicesMenu.classList.add('services__menu--open')
      servicesMenu.classList.remove('services__menu--close')
    } else {
      showMoreBtn.classList.remove('open', 'btn--rotate')
      showMoreBtn.textContent = 'Показать все'
      servicesMenu.classList.add('services__menu--close')
      servicesMenu.classList.remove('services__menu--open')
    }
  })
}
showMoreBtnFunc()

let swiperSlideAll = document.querySelectorAll('.services__element')
let containerMenu = document.querySelector('.container__menu')
let servicesMenu = document.querySelector('.services__menu')
let x = window.matchMedia('(max-width: 767px)')
function myFunction(x) {
  if (x.matches) {
    for (let i = 0; i < swiperSlideAll.length; i++) {
      if (!swiperSlideAll[i].classList.contains('swiper-slide')) {
        swiperSlideAll[i].classList.add('swiper-slide')
      }
    }
    if (!servicesMenu.classList.contains('swiper-wrapper')) {
      servicesMenu.classList.add('swiper-wrapper')
    }
    if (!containerMenu.classList.contains('swiper')) {
      containerMenu.classList.add('swiper')
    }

    let swiper = new Swiper('.swiper', {
      spaceBetween: 16,
      slidesPerView: 1.18,
      allowTouchMove: true,
      speed: 400,
      height: 72,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
  } else {
    let swiper = new Swiper('.swiper', {})
    swiper.destroy()
    for (let i = 0; i < swiperSlideAll.length; i++) {
      if (swiperSlideAll[i].classList.contains('swiper-slide')) {
        swiperSlideAll[i].classList.remove('swiper-slide')
      }
    }
    servicesMenu.classList.remove('swiper-wrapper')
    containerMenu.classList.remove('swiper')
  }
}
myFunction(x)
x.addEventListener('change', myFunction)

/*  */

let typesSlideAll = document.querySelectorAll('.types__element')
let typesWrapper = document.querySelector('.types__wrapper')
let typesMenu = document.querySelector('.types__menu')
let y = window.matchMedia('(max-width: 767px)')
function myFunctionSecond(y) {
  if (x.matches) {
    for (let i = 0; i < typesSlideAll.length; i++) {
      if (!typesSlideAll[i].classList.contains('swiper-slide-types')) {
        typesSlideAll[i].classList.add('swiper-slide-types')
      }
    }
    if (!typesMenu.classList.contains('swiper-wrapper-types')) {
      typesMenu.classList.add('swiper-wrapper-types')
    }
    if (!typesWrapper.classList.contains('swiper-types')) {
      typesWrapper.classList.add('swiper-types')
    }

    let swiperTypes = new Swiper('.swiper-types', {
      spaceBetween: 16,
      slidesPerView: 1.18,
      allowTouchMove: true,
      speed: 400,
      height: 72,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
  } else {
    let swiperTypes = new Swiper('.swiper-types', {})
    swiperTypes.destroy()
    for (let i = 0; i < typesSlideAll.length; i++) {
      if (typesSlideAll[i].classList.contains('swiper-slide-types')) {
        typesSlideAll[i].classList.remove('swiper-slide-types')
      }
    }
    typesMenu.classList.remove('swiper-wrapper-types')
    typesWrapper.classList.remove('swiper-types')
  }
}
myFunctionSecond(y)
y.addEventListener('change', myFunction)
