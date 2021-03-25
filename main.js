import sass from './sass.sass'

text('.imported-sass', sass)



function text(el, text) {
  document.querySelector(el).textContent = text
}



