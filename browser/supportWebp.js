const supportWebp = function () {
  if (!inBrowser) return false

  let support = true
  const d = document

  try {
    let el = d.createElement('object')
    el.type = 'image/webp'
    el.style.visibility = 'hidden'
    el.innerHTML = '!'
    d.body.appendChild(el)
    support = !el.offsetWidth
    d.body.removeChild(el)
  } catch (err) {
    support = false
  }

  return support
}


export default supportWebp