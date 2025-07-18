let min = 1
let max = 100
let randomNumber = Math.round(Math.random() * 100)
console.log(randomNumber)
let gusess
let attems = 0

while (true) {
  gusess = parseInt(prompt(`Enter a number Between ${min} - ${max}`))

  if (gusess > 100) {
    alert('Please enter a number between 100 ...')
    attems++
  } else if (gusess < 1) {
    alert('Please enter a number between 1 to  100 ...')
    attems++
  } else if (!gusess) {
    alert('enter a valid number')
    attems++
  } else {
    attems++
    if (gusess > randomNumber) {
      alert('Number is too big')
      console.log(gusess)
    } else if (gusess < randomNumber) {
      alert('Number is too low')
    } else {
      alert(`currect your ans was ${randomNumber} and attems is ${attems}`)
      break
    }
  }
}
