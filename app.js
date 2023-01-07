const form = document.querySelector('form')
const submit = document.querySelector('.submit')
const email = document.querySelector('.email')
const errorMessage = document.querySelector('.error-message')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value))
  {
    console.log('valid y000000000')
    errorMessage.classList.remove('display-block')
    email.classList.remove('error')
    email.value = ''
  } else {
    errorMessage.classList.add('display-block')
    email.classList.add('error')
  }
    
})
