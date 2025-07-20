let charcter = 'abcdefghijklmnopqrstuvwxyz'
let number = '1234567890'
let symbol = "!@#$%^&*()_+-='`[]{}.,<>/;:?="

function passGenarator() {
  let password = ''
  let allowedpass = ''
  let passLength = parseInt(document.getElementById('passlength').value)

  document.getElementById('uppercase').checked
    ? (allowedpass += charcter.toLocaleUpperCase())
    : ''
  document.getElementById('lowercase').checked ? (allowedpass += charcter) : ''
  document.getElementById('number').checked ? (allowedpass += number) : ''
  document.getElementById('symbol').checked ? (allowedpass += symbol) : ''

  for (i = 0; i < passLength; i++) {
    const ranPassIndex = Math.floor(Math.random() * allowedpass.length)
    password += allowedpass[ranPassIndex]
  }
  document.getElementById(
    'pass'
  ).innerText = `Your genarated password is : ${password}`
}
