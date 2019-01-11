const addEventToChild = (parent, eventName = 'click', childSelector, cb) => {
  parent.addEventListener(eventName, function (event) {
    const clickedElement = event.target

    const matchingChild = clickedElement.closest(childSelector)
    if (matchingChild) {
      cb(event)
    }
  })
}

export default addEventToChild
