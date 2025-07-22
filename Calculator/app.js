let dispaly = document.querySelector('.display')

function Addelement(e) {
  dispaly.value += e
}

function Clear() {
  dispaly.value = ''
}

function Ans() {
  try {
    dispaly.value = eval(dispaly.value).toFixed(2)
  } catch (error) {
    dispaly.value = 'Syntax Error'
  }
}
