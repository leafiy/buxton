const b64toBlob = base64 => {
  return new Promise(resolve => {
    const sliceSize = 512
    const b64data = base64.split(',')
    let contentType = b64data[0].substring(
      'data:'.length,
      b64data[0].indexOf(';base64')
    )
    const byteCharacters = window.atob(b64data[1])
    const byteArrays = []
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize)
      const byteNumbers = new Array(slice.length)
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i)
      }
      const byteArray = new Uint8Array(byteNumbers)
      byteArrays.push(byteArray)
    }
    const blob = new window.Blob(byteArrays, { type: contentType })
    resolve(URL.createObjectURL(blob))
  })
}

export default b64toBlob
