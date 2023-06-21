/* const log = console.log

let maxWidthFocus = window.matchMedia('(max-width: 767px)')
let focusRemoveButtons = document.querySelectorAll('.services__button')
log(focusRemoveButtons)

function matchesFocus(maxWidthFocus) {
  if (maxWidthFocus.matches) {
    for (let i = 0; i < focusRemoveButtons.length; i++) {
      focusRemoveButtons[i].classList.remove('services__button:focus')
      log('<767')
    }
    document.activeElement.blur()
  } else {
    log('>767')
  }
}

maxWidthFocus.onchange = function () {
  matchesFocus(maxWidthFocus)
}

document.activeElement.blur() */
/*   .services__show-more-btn:focus,
  .services__button:focus {
    outline: none;
    box-shadow: inset 0px 0px 6px 6px $border-bottom-color;
  }
  
  .services__show-more-btn:focus {
    box-shadow: inset 0px -6px 0px 0px $border-bottom-color;
  } */

/* maxWidthFocus.addEventListener('change', matchesFocus)
matchesFocus(maxWidthFocus) */

/* document.addEventListener('mousemove', () =>
  document.body.classList.remove('focus-visible')
)

document.addEventListener(
  'keydown',
  ({ key }) => key === 'Tab' && document.body.classList.add('focus-visible')
)
 */
