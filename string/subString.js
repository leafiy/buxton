const subString = (str, len, hasDot = '...') => {
  if (str.length > len) { return hasDot ? str.substring(0, len) + hasDot : str.substring(0, len) } else return str
}

export default subString
