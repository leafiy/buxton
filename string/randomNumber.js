const randomNumber = (len = 1) => {
  return Math.random()
    .toString()
    .slice(-len)
}

export default randomNumber
