const setClass = (el, classList = []) => {
    if (!Array.isArray(classList)) {
        throw new Error('classList muse be an array')
    }

    if (el instanceof SVGElement) {
        el.setAttribute('class', classList.join(' '))
    } else {
        el.className = classList.join(' ')
    }
}

export default setClass