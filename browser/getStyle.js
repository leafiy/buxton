const getStyle = (el, prop) => {
  return typeof getComputedStyle !== 'undefined' ?
    getComputedStyle(el, null).getPropertyValue(prop) :
    el.style[prop]
}

export default getStyle
