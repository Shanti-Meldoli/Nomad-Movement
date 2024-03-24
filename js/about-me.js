'use strict'

// When i CLICK on .burger, to .header__links TOGGLE the class .active & to body TOGGLE the class .no-scrollbar
// When i CLICK on .header__a, to .header__links REMOVE the class .active

const burger = document.querySelector('.burger')
const headerLinks = document.querySelector('.header__links')
const headerA = document.querySelectorAll('.header__a')

burger.addEventListener('click', () => {
  headerLinks.classList.toggle('active')
  document.body.classList.toggle('no-scrollbar')
})

headerA.forEach(index => {
  index.addEventListener('click', () => {
    headerLinks.classList.remove('active')
  })
})