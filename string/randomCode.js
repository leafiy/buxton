const genCode = function (len = 6) {
  let code = ''
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  for (let i = 0; i < len; i++) {
    code += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return code
}

export default genCode
