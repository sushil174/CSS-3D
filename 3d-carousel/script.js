const scroller = (() => {
    const carousel = document.querySelector('.carousel')
    const prev = document.querySelector('.prev')
    const next = document.querySelector('.next')
    const cells = document.querySelectorAll('.cell')
    
    function calculateZ() {
        const scene = document.querySelector('.scene')
        const width = scene.clientWidth;
        var tz = Math.round( ( width / 2 ) / Math.tan( ( ( Math.PI * 2 ) / cells.length ) / 2 ) );
        return tz
    }

    function removeTransform() {
        carousel.style.transform = ''
        cells.forEach(cell => {
            cell.style.transform = ''
        })
    }

    function cellTransformHorizontal() {
        removeTransform()
        let addOnDeg = 0
        const deg = 360/cells.length
        const valueZ = calculateZ() 
    
        cells.forEach(cell => {
            cell.style.transform = `rotateY(${addOnDeg}deg) translateZ(${valueZ}px)`
            addOnDeg += deg
        })
    }
    
    function cellTransformVertical() {
        removeTransform()
        let addOnDeg = 0
        const deg = 360/cells.length
        const valueZ = calculateZ() 
    
        cells.forEach(cell => {
            cell.style.transform = `rotateX(${addOnDeg}deg) translateZ(${valueZ}px)`
            addOnDeg += deg
        })
    }
    
    function eventHandlerHorizontal() {
        let deg = 0
        prev.addEventListener('click', ()=> {
            deg += 40
            carousel.style.transform = `rotateY(${deg}deg)`
        })
    
    
        next.addEventListener('click', ()=> {
            deg -= 40
            carousel.style.transform = `rotateY(${deg}deg)`
        })
    }

    function eventHandlerVertical() {
        let deg = 0
        prev.addEventListener('click', ()=> {
            deg += 40
            carousel.style.transform = `rotateX(${deg}deg)`
        })
    
    
        next.addEventListener('click', ()=> {
            deg -= 40
            carousel.style.transform = `rotateX(${deg}deg)`
        })
    }


    return {
        cellTransformHorizontal,
        cellTransformVertical,
        eventHandlerHorizontal,
        eventHandlerVertical
    }
})();

const button = document.querySelector('.change')
button.addEventListener('click', ()=> {
    if(button.value === "horizontal") {
        button.value = "vertical"
        button.textContent = "change to change to horizontal"
        scroller.cellTransformVertical()
        scroller.eventHandlerVertical()
    }
    else {
        button.value = "horizontal"
        button.textContent = "change to change to vertical"
        scroller.cellTransformHorizontal()
        scroller.eventHandlerHorizontal()
    }
})
scroller.cellTransformHorizontal()
scroller.eventHandlerHorizontal()

