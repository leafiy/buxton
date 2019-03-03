const genCode = function(len = 6, content = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789") {
    let code = ''
    for (let i = 0; i < len; i++) {
        code += content.charAt(Math.floor(Math.random() * content.length))
    }
    return code
}

export default genCode