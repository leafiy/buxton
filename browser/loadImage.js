import race from '../promise/race.js'
const loadImage = function(src, timeout) {
  return new Promise((resolve, reject) => {

    let timer;
    let img = new Image()

    function clearTimer() {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
    }

    function handleFailed(err) {
      img.onload = img.onabort = img.onerror = function() {};
      clearTimeout(timer)
      reject(err instanceof Error ? err : new Error('failed'))
      img.src = ''
    }


    img.onerror = img.onabort = handleFailed;


    img.onload = function() {
      clearTimer();
      resolve({
        src: src,
        width: img.naturalWidth,
        height: img.naturalHeight
      })

    };
    img.src = src
    if (timeout) {
      timer = setTimeout(() => {
        handleFailed(new Error('timeout'))
      }, timeout);
    }



  })
}

export default loadImage
