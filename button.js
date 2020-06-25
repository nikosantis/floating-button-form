const button = document.querySelector('.wrapper')
const popUp = document.querySelector('#pop-up-message')
const container = document.querySelector('.form-container')
const cancel = document.querySelector('.form-header-button')
const formWindow = document.querySelector('.form-window')

popUp.onclick = function() {
  popUp.classList.add('oculto')
  setTimeout(() => {
    popUp.style.display = 'none'
    button.classList.add('expanded-height')
    button.classList.remove('collapsed-height')
    container.removeAttribute('style')
    container.classList.add('mostrar')
  }, 500)
}

cancel.onclick = function() {
  popUp.classList.remove('oculto')
  formWindow.classList.add('zero-height')
  container.classList.remove('mostrar')
  setTimeout(() => {
    formWindow.classList.remove('zero-height')
    button.classList.remove('expanded-height')
    button.classList.add('collapsed-height')
    container.style.display = 'none'
    popUp.removeAttribute('style')
  }, 500)
}