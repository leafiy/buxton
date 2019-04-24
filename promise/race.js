const race = function(timeout, promise) {
  return new Promise(function(resolve, reject) {
    let timer = setTimeout(function() {
      reject(new Error("timeout"));
    }, timeout);

    promise
      .then(function(res) {
        clearTimeout(timer);
        resolve(res);
      })
      .catch(function(err) {
        clearTimeout(timer);
        reject(err);
      });
  });
}

export default race


// usage

// function delayedHello(cb) {
//   setTimeout(function() {
//     cb('Hello');
//   }, 1000);
// }

// Promise.timeout(800, delayedHello).then(function(data) {
//   console.log(data);
// }).catch(function(e) {
//   console.log(e);
// });

// Promise.timeout(1200, delayedHello).then(function(data) {
//   console.log(data);
// }).catch(function(e) {
//   console.log(e);
// });
