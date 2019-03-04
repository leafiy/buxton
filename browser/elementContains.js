const elementContains = (el, el2) => {
    if (typeof el.contains == 'function') {
        return el.contains(el2)
    }
    return false
}
export default elementContains