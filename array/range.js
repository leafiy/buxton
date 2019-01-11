Array.range = function (n) {
  // Array.range(5) --> [0,1,2,3,4]
  return Array.apply(null, Array(n)).map((x, i) => i)
}
