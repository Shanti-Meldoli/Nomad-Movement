'use strict'

// --- Burguer Menu ---

// When CLICK on .burger, to .header__links TOGGLE the class .active & to body TOGGLE the class .no-scrollbar
// When CLICK on .header__a, to .header__links REMOVE the class .active

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
// --- Burguer Menu ---

// --- FAQS ---

// When CLICK on .faqs__question, close all faqs__answer and remove .active from SVGs, then open faqs__answer and rotate the SVG by adding .active class to SVG
// If it is already open, close it and remove the .active class from the SVG

const faqsA = document.querySelectorAll('.faqs__answer')
const heightA = []
const faqsQ = document.querySelectorAll('.faqs__question')
const SVGs = document.querySelectorAll('.faqs__svg')

// Calculate and store the natural height for each answer, then set their height to 0
faqsA.forEach((eachA, index)=>{
  heightA.push(faqsA[index].offsetHeight) // Store the natural height
  faqsA[index].style.height = 0 // Initially hide the answer
})

// Create the accordeon effect
faqsQ.forEach ((eachQ, index)=>{
  faqsQ[index].addEventListener('click', ()=>{
    // Determine if the clicked question's answer is currently open
    const isOpen = faqsA[index].style.height !== '0px';
    // First, close all answers
    faqsA.forEach((eachA, index)=>{
      faqsA[index].style.height = 0
    })
    // If the answer was not already open (meaning it's closed), open it by setting its height
    if (!isOpen) {
      faqsA[index].style.height = heightA[index] + 'px';
    }
    // If it was open, it will be closed as its height was set to '0px' in the loop above
    
    // Finally, REMOVE the active class from all SVGs and rotate the SVG of the same index as the clicked question, also if clicked again on the quesiton, remove the active class from the SVG
    SVGs.forEach((eachSVG, index)=>{
      SVGs[index].classList.remove('active')
    })
    if (!isOpen) {
      SVGs[index].classList.add('active')
    }
  })
})
// --- FAQS ---
