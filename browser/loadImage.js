import race from '../promise/race.js'
const loadImage = function(src, timeout) {
  return new Promise((resolve, reject) => {
    let img = new Image()
    if (timeout) {
      race(timeout, new Promise((resolve, reject) => {
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
      }))
    } else {
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
    }

    img.src = src
  })
}

export default loadImage
