const button_1 = document.querySelector('.frontBtn')
const button_2 = document.querySelector('.backBtn')
const button_3 = document.querySelector('.rightBtn')
const button_4 = document.querySelector('.leftBtn')
const button_5 = document.querySelector('.topBtn')
const button_6 = document.querySelector('.bottomBtn')
const cube = document.querySelector('.cube')

function removeClasses() {
    cube.classList.forEach(cls => {
        if(cls !== 'cube') {
            cube.classList.remove(cls)
        }
    })
}

button_1.addEventListener('click', () => {
    removeClasses()
    cube.classList.toggle('show-front')
})


button_2.addEventListener('click', () => {
    removeClasses()
    cube.classList.toggle('show-back')
})


button_3.addEventListener('click', () => {
    removeClasses()
    cube.classList.toggle('show-right')
})


button_4.addEventListener('click', () => {
    removeClasses()
    cube.classList.toggle('show-left')
})


button_5.addEventListener('click', () => {
    removeClasses()
    cube.classList.toggle('show-top')
})


button_6.addEventListener('click', () => {
    removeClasses()
    cube.classList.toggle('show-bottom')
})
