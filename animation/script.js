const boxes = document.querySelectorAll('.box')
window.addEventListener('scroll', checkboxes)
checkboxes()
function checkboxes() {
    const triggerBottom = window.innerHeight / 5 * 3
    boxes.forEach(box => {
        const boxtop = box.getboundinglientRect().top
        if (boxTop < triggerBottom) {
            box.classList.add('show')
        }
        else {
            box.classList.remove('show')

        }
    })

}