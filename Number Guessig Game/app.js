let min = 1
let max = 100
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
let attempts = 0

const btn = document.querySelector('.btn')
const message = document.getElementById('message')
const attemptsMsg = document.getElementById('attems')

btn.onclick = () => {
  let input = Number(document.getElementById('number').value)
  attempts++

  if (!input || input < min || input > max) {
    message.textContent = '❗ Please enter a number between 1 and 100'
    return
  }

  if (input === randomNum) {
    message.textContent = `🎉 Correct! The number was ${randomNum}`
    btn.disabled = true
  } else if (input > randomNum) {
    message.textContent = '📉 Too high!'
  } else if (input < randomNum) {
    message.textContent = '📈 Too low!'
  }

  attemptsMsg.textContent = `Attempts: ${attempts}`
}
