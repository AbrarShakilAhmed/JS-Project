let img = document.querySelector('.img-section img')

let imgno = 1

function next() {
  imgno++
  if (imgno == 4) {
    imgno = 1
  }

  img.setAttribute('src', `images/${imgno}.jpg`)
}
function prev() {
  imgno--
  if (imgno == 0) {
    imgno = 3
  } else if (imgno == -1) {
    imgno = 2
  } else if (imgno == -2) {
    imgno = 1
  }

  img.setAttribute('src', `images/${imgno}.jpg`)
}
