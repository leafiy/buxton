const supportsPassive = function() {
  if (!inBrowser) return
  let support = false
  try {
    let opts = Object.defineProperty({}, 'passive', {
      get: function() {
        support = true
      }
    })
    window.addEventListener('test', null, opts)
  } catch (e) {}
  return support
}

export default supportsPassive