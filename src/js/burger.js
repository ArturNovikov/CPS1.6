let maxWidth = window.matchMedia('(max-width: 1439px)')
let headerBurger = document.querySelector('.header__burger')
let asideMenu = document.querySelector('.aside-menu')
let buttonCrossAll = document.querySelectorAll('.aside-menu__btn-cross')
let containerHidden = document.querySelector('.aside__container--hidden')
let modalfeedbackHidden = document.querySelector(
  '.modal-feedback__form-container'
)
let modalfeedbackContainerHidden = document.querySelector(
  '.modal-feedback__container'
)
let btnChatAll = document.querySelectorAll('.btn-chat')

let modalCallHidden = document.querySelector('.modal-call__form-container')
let modalCallContainerHidden = document.querySelector('.modal-call__container')
let btnCallAll = document.querySelectorAll('.btn-call')

for (let i = 0; i < btnCallAll.length; i++) {
  btnCallAll[i]
}

btnCallAll[0].onclick = function () {
  if (maxWidth) {
    modalCallHidden.classList.toggle('modal-call--hide')
    modalCallContainerHidden.classList.toggle('modal-call__container--hide')
  }
}

btnCallAll[1].onclick = function () {
  if (maxWidth) {
    modalCallHidden.classList.toggle('modal-call--hide')
    modalCallContainerHidden.classList.toggle('modal-call__container--hide')
  }
}

for (let i = 0; i < btnChatAll.length; i++) {
  btnChatAll[i]
}

btnChatAll[0].onclick = function () {
  if (maxWidth) {
    modalfeedbackHidden.classList.toggle('modal-feedback--hide')
    modalfeedbackContainerHidden.classList.toggle(
      'modal-feedback__container--hide'
    )
  }
}

btnChatAll[1].onclick = function () {
  if (maxWidth) {
    modalfeedbackHidden.classList.toggle('modal-feedback--hide')
    modalfeedbackContainerHidden.classList.toggle(
      'modal-feedback__container--hide'
    )
  }
}

headerBurger.onclick = function () {
  if (maxWidth) {
    asideMenu.classList.toggle('aside-menu--hidden')
    containerHidden.classList.toggle('aside__container--hidden')
  }
}

for (let i = 0; i < buttonCrossAll.length; i++) {
  buttonCrossAll[i]
}
buttonCrossAll[0].onclick = function () {
  if (maxWidth) {
    asideMenu.classList.toggle('aside-menu--hidden')
    containerHidden.classList.toggle('aside__container--hidden')
  }
}

buttonCrossAll[1].onclick = function () {
  if (maxWidth) {
    modalfeedbackHidden.classList.toggle('modal-feedback--hide')
    modalfeedbackContainerHidden.classList.toggle(
      'modal-feedback__container--hide'
    )
  }
}

buttonCrossAll[2].onclick = function () {
  if (maxWidth) {
    modalCallHidden.classList.toggle('modal-call--hide')
    modalCallContainerHidden.classList.toggle('modal-call__container--hide')
  }
}
