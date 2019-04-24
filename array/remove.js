const remove = function(arr, item) {
  if (!arr.length) return
  const index = arr.indexOf(item)
  if (index > -1) return arr.splice(index, 1)
}

export default remove
