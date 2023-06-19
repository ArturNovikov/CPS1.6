let maxWidth = window.matchMedia('(max-width: 1439px)')
let headerBurger = document.querySelector('.header__burger')
let asideMenu = document.querySelector('.aside-menu')
let buttonCross = document.querySelector('.aside-menu__btn-cross')
let containerHidden = document.querySelector('.aside__container--hidden')

headerBurger.onclick = function () {
  if (maxWidth) {
    asideMenu.classList.toggle('aside-menu--hidden')
    containerHidden.classList.toggle('aside__container--hidden')
  }
}

buttonCross.onclick = function () {
  if (maxWidth) {
    asideMenu.classList.toggle('aside-menu--hidden')
    containerHidden.classList.toggle('aside__container--hidden')
  }
}
