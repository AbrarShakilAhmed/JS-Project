let roll = document.getElementById('roll')

let btn = document.getElementById('btn')
let diceImg = document.getElementById('dice-img')
let diceText = document.getElementById('dice-total')

btn.onclick = () => {
  const num = document.getElementById('num').value
  const img = []
  const values = []
  let sum = 0
  for (i = 0; i < num; i++) {
    let value = Math.floor(Math.random() * 6) + 1
    values.push(value)
    img.push(`<img src='images/${value}.png'>`)
    sum += value
  }
  diceText.innerHTML = `<p>Total is : ${values.join('+')}  = ${sum}</p>`

  diceImg.innerHTML = `${img.join('')}`
}
