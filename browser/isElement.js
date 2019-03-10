const isElement = (el) => {
    return (el != null) &&
        (typeof el === 'object') &&
        (el.nodeType === Node.ELEMENT_NODE) &&
        (typeof el.style === 'object') &&
        (typeof el.ownerDocument === 'object');
}

export default isElement