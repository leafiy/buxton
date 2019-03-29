const isBottom = (el = window,offset = 0) => {
    return (window.innerHeight + Math.ceil(window.pageYOffset)) >= document.body.offsetHeight
}

export default isBottom