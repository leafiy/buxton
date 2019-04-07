export default function(el) {
    if (!el.parentNode) return
    el.parentNode.removeChild(el);
}