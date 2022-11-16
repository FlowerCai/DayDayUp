var findWords = function (words) {
  const dic = ["qwertyuiop", "asdfghjkl", "zxcvbnm"]
  const res = []
  for (let word of words) {
    let c = word[0]
    let num = 0
    for (let i = 0; i < 3; i++) {
      if (dic[i].includes(c.toLowerCase())) {
        num = i
        break
      }
    }
    let len = word.length
    let sign = true
    for (let i = 0; i < len; i++) {
      if (!dic[num].includes(word[i].toLowerCase())) {
        sign = false
        break
      }
    }
    if (sign) {
      res.push(word)
    }
  }
  return res
}

console.log(findWords(["adsdf", "sfd"]))
