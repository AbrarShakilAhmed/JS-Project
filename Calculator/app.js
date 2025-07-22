let dispaly = document.querySelector('.display')

function Addelement(e) {
  dispaly.value += e
}

function Ans() {
  dispaly.value = eval(dispaly.value).toFixed(2)
}

function Clear() {
  dispaly.value = ''
}
