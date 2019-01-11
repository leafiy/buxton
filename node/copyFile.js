const copyFile = (path, newPath) => {
  return new Promise((resolve, reject) => {
    try {
      fs.createReadStream(path).pipe(fs.createWriteStream(newPath)).on('close', () => {
        resolve(newPath)
      })
    } catch (err) {
      reject(err)
    }
  })
}
exports.copyFile = copyFile
