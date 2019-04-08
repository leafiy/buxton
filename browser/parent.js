export default function(el) {
    if (el.parentNode) {
        return el.parentNode
    } else {
        return null
    }
}