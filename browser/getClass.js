const getClass = (el) => {
    return el instanceof SVGElement ? el.getAttribute("class") : el.className
}
export default getClass