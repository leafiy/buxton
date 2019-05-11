const retry = (fn, ms = 10, max = 5) => new Promise((resolve, reject) => {
  var retries = 0;
  fn()
    .then(resolve)
    .catch(() => {
      setTimeout(() => {
        ++retries;
        if (retries == max) {
          return reject('maximum retries exceeded');
        }
        retry(fn, ms).then(resolve);
      }, ms);
    })
});

export default retry