const show = document.querySelector('#btn')
// const rem = document.querySelector('.opac')
const form = document.querySelector('.form_container')

show.addEventListener('click', () => {
    form.classList.toggle('opac')
})


const burger = document.querySelector('.burger')
const ham_burger = document.querySelector('.ham_burger')

burger.addEventListener('click', () => {
    ham_burger.classList.toggle('show_burger')
})



// function printName() {
//     console.log(12);
//     return 'Faizan Ahmad'
// }
// function findName() {
//     console.log('abc');
//     return printName()
// }
// function saveMyName() {
//     console.log('def');
//     return findName()
// }

// console.log(saveMyName());