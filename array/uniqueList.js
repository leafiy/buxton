const uniqueArray = (arr, key) => {
  return arr.filter((obj, pos, arr) => {
    return arr.map(mapObj => mapObj[key]).indexOf(obj[key]) === pos
  })
}
export default uniqueArray
