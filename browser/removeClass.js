const removeClassByPrefix = function (el, prefix) {
  var regx = new RegExp('\\b' + prefix + '.*?\\b', 'g');
  [...el.classList].map(className => {
    regx.test(className) && el.classList.remove(className)
  })
}

export default removeClassByPrefix
