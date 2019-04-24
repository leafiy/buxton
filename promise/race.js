const race = function(timeout, cb) {
  return Promise.race([
    new Promise(cb),
    new Promise(function(resolve, reject) {
      setTimeout(function() {
        reject('Timed out');
      }, timeout);
    })
  ]);
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
