const hashTag = (tag) => {
    const url = ("" + window.location).replace(/#[A-Za-z0-9_]*$/, '')
    window.location = tag ? url + `#${tag}` : url
}

export default hashTag