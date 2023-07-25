let section=document.querySelector('.content')

let menu=document.querySelector('.menu')
let box=document.querySelectorAll('.box')
let moonIcon=document.querySelector('.fas.fa-moon')

// Retrieve the mode from local storage
let mode = localStorage.getItem('mode');

// If mode exists in local storage, set it
if (mode === 'dark') {
  moonIcon.classList.add('mode')
  menu.classList.add('black')
  section.classList.add('black')
  box[0].classList.add('boxx')
  box[1].classList.add('boxx')
  box[2].classList.add('boxx')
  box[3].classList.add('boxx')
}

section.addEventListener('click',function (eo) {
  eo.preventDefault();
  if (eo.target.className === 'fas fa-moon') {
    eo.target.classList.add('mode')
    menu.classList.add('black')
    section.classList.add('black')
    box[0].classList.add('boxx')
    box[1].classList.add('boxx')
    box[2].classList.add('boxx')
    box[3].classList.add('boxx')

    // Store the mode in local storage
    localStorage.setItem('mode', 'dark');
  }
  else if (eo.target.className === 'fas fa-moon mode'){
    eo.target.classList.remove('mode')
    menu.classList.remove('black')
    section.classList.remove('black')
    box[0].classList.remove('boxx')
    box[1].classList.remove('boxx')
    box[2].classList.remove('boxx')
    box[3].classList.remove('boxx')

    // Remove the mode from local storage
    localStorage.removeItem('mode');
  }
})

