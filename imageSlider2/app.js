const slides = document.querySelectorAll('.slides img')
let slideIndex = 0
let intervalId = null

document.addEventListener('DOMContentLoaded', initializeSlider)

function initializeSlider() {
  slides[slideIndex].classList.add('displaySlide')
  intervalId = setInterval(nextSlide, 2000)
}

function showSlide(i) {
  if (i == slides.length) {
    slideIndex = 0
  } else if (i < 0) {
    slideIndex = slides.length - 1
  }
  slides.forEach((e) => {
    e.classList.remove('displaySlide')
  })
  slides[slideIndex].classList.add('displaySlide')
}

function nextSlide() {
  slideIndex++
  showSlide(slideIndex)
}
function prevSlide() {
  clearInterval(intervalId)

  slideIndex--
  showSlide(slideIndex)
}
