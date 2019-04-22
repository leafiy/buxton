const elementContains = (el, el2) => {
    if (el && typeof el.contains == 'function') {
        return el.contains(el2)
    }
    return false
}
export default elementContains