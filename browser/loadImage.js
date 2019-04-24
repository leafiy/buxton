const loadImage = function(src) {
  return new Promise((resolve, reject) => {
    let img = new Image()
    img.onload = function() {
      resolve({
        src: src,
        width: img.naturalWidth,
        height: img.naturalHeight
      })
    }
    img.onerror = function() {
      reject(src)
    }
    img.src = src
  })
}

export default loadImage
