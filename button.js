const button = document.querySelector('.wrapper')
const popUp = document.querySelector('#pop-up-message')
const container = document.querySelector('.form-container')
const cancel = document.querySelector('#buttonClose')
const cancelResponse = document.querySelector('#msgClose')
const formWindow = document.querySelector('.form-window')
const form = document.querySelector('#form-submit')
const formMsg = document.querySelector('#formMsg')

let statusForm = {
  enviado: false,
  loading: false
}

form.onsubmit = function(event) {
  event.preventDefault()
  statusForm = {
    ...statusForm,
    loading: true
  }
  setTimeout(() => {
    statusForm = {
      ...statusForm,
      loading: false,
      enviado: true
    }
    form.style.display = 'none'
    formMsg.removeAttribute('style')
    formMsg.onclick = function() {
      popUp.classList.remove('oculto')
      formWindow.classList.add('zero-height')
      container.classList.remove('mostrar')
      setTimeout(() => {
        formWindow.classList.remove('zero-height')
        button.classList.remove('expanded-height')
        button.classList.add('collapsed-height')
        container.style.display = 'none'
        popUp.removeAttribute('style')
        form.removeAttribute('style')
        formMsg.style.display = 'none'
      }, 500)
    }
  }, 1000)
}

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
