const makePath = function (type = 'uploads') {
  let now = new Date()
  let year = now.getFullYear()
  let month = now.getMonth()
  let hash = crypto.createHash('md5')
  let folder = '' + year + month
  hash.update(folder)
  let hex = hash.digest('hex')
  return NODE_ENV === type + '/' + hex
}
exports.makePath = makePath
