let app = document.querySelector('.container')
let x = 0
let y = 0
const move = 40
document.onkeydown = (e) => {
  switch (e.key) {
    case 'ArrowUp':
      x -= move
      break
    case 'ArrowDown':
      x += move
      break
    case 'ArrowLeft':
      y -= move
      break
    case 'ArrowRight':
      y += move
      break
  }
  app.style.top = `${x}px`
  app.style.left = `${y}px`
}
