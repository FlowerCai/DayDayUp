var numMatchingSubseq = function (s, words) {
  const dic = {}
  const len1 = s.length
  const len2 = words.length
  for (let i = 0; i < len1; i++) {
    if (s[i] in dic) {
      dic[s[i]].push(i)
    } else {
      dic[s[i]] = new Array()
      dic[s[i]].push(i)
    }
  }

  return 1
}

console.log(
  numMatchingSubseq("dsahjpjauf", ["ahjpjau", "ja", "ahbwzgqnuk", "tnmlanowax"])
)
