const request = require('request')

const getExifByUrl = function (url) {
  return new Promise((resolve, reject) => {
    request(`${url}?x-oss-process=image/info`, function (err, response, body) {
      if (!err) {
        if (body && JSON.parse(body)) {
          resolve(body && JSON.parse(body))
        }
      } else {
        reject()
      }
    })
  })
}

exports.getExifByUrl = getExifByUrl
