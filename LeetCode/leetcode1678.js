var interpret = function (command) {
  const arr = Array.from(command)
  let res = ""
  const len = arr.length
  let index = 0
  while (index < len) {
    if (arr[index] === "G") {
      res += "G"
      index++
    } else if (arr[index] === "(") {
      if (arr[index + 1] === ")") {
        res += "o"
        index = index + 2
      } else {
        res += "al"
        index = index + 4
      }
    }
  }
  return res
}

console.log(interpret("G()(al)"))
