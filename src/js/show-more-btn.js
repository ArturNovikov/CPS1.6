// const showMoreBtnFunc = function () {
//   let showMoreAll = document.querySelectorAll('.services__show-more-btn')
//   console.log(showMoreAll)
//   for (let i = 0; i < showMoreAll.length; i++) {
//     let showBtn = showMoreAll[i]
//     console.log(showBtn)

//     /* let showMore = document.querySelector('.services__show-more-btn') */

//     /* showMore */ showBtn.addEventListener('click', function () {
//       let showMoreBtn = document.querySelector('.services__show-more-btn')
//       let servicesMenu = document.querySelector('.services__menu')

//       if (!showMoreBtn.classList.contains('open', 'btn--rotate')) {
//         showMoreBtn.classList.add('open', 'btn--rotate')
//         showMoreBtn.textContent = 'Скрыть'
//         servicesMenu.classList.add('services__menu--open')
//         servicesMenu.classList.remove('services__menu--close')
//       } else {
//         showMoreBtn.classList.remove('open', 'btn--rotate')
//         showMoreBtn.textContent = 'Показать все'
//         servicesMenu.classList.add('services__menu--close')
//         servicesMenu.classList.remove('services__menu--open')
//       }
//     })
//   }
// }
// showMoreBtnFunc()

let aboutText = document.querySelector('.about__text')
let showButton = document.querySelector('.about__show-more-btn')
let showButtonOpen = document.querySelector('.about__show-more-btn')

showButton.onclick = function () {
  aboutText.classList.toggle('about__text--open')
  if (!showButtonOpen.classList.contains('about__show-more-btn--open')) {
    showButton.textContent = 'Скрыть'
    showButtonOpen.classList.add('about__show-more-btn--open')
  } else {
    showButton.textContent = 'Читать далее'
    showButtonOpen.classList.remove('about__show-more-btn--open')
  }
}
