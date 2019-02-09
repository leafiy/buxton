const toArray = (value, split = " ") => {
    if (typeof value === 'string') {
        value = value.split(split)
    }
    if (Array.isArray(value)) {
        return value
    }
}


export default toArray