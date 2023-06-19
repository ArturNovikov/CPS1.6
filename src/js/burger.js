console.log('Hello!')

/* работает до ширины экрана 1439 px */

/* aside-menu--hidden - класс для toggle */
/* 
вашаем обработчие события на меню бургера

клик по бургеру - запускается проверка условия

если ширина экрана меньше 1439px тогда запускаеться 

classList.toggle('aside-menu--hidden');

 */

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
