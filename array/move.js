const move = (from, to, ...array) => (array.splice(to, 0, ...array.splice(from, 1)), array)

export default move
