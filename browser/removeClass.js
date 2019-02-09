import toArray from '../array/toArray.js'
const removeClass = (el, classes) => {
    const newClasses = toArray(classes)
    let classList = toArray(el.className)
    newClasses.forEach((newClass) => {
        const index = classList.indexOf(newClass)
        if (index !== -1) {
            classList.splice(index, 1)
        }
    })
    if (el instanceof SVGElement) {
        el.setAttribute('class', classList.join(' '))
    } else {
        el.className = classList.join(' ')
    }
}

export default removeClass