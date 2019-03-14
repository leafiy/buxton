const imgToBase64 = (url) => {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = url
        img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            const dataURL = canvas.toDataURL("image/png");
            dataURL = dataURL.replace(/^data:image\/(png|jpg);base64,/, "")
            resolve(dataURL)
        }
        img.onerror = () => {
            reject(url)
        }
    })
}

export default imgToBase64