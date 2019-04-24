const race = function(timeout, cb) {
  return Promise.race([
    new Promise(cb),
    new Promise(function(resolve, reject) {
      setTimeout(function() { reject('Timed out'); }, timeout);
    })
  ]);
}

export default race
