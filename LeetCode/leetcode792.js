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

  const res = []

  for (let i = 0; i < len2; i++) {
    let word = words[i]
    const len3 = word.length
    let cur = -1
    let sign = true
    // 每个单词
    for (let j = 0; j < len3; j++) {
      if (word[j] in dic) {
        let temp = dic[word[j]]
        let newCur = binarySearch(temp, cur)
        if (newCur == -1) {
          sign = false
          break
        } else {
          cur = newCur
        }
      } else {
        sign = false
        break
      }
    }

    if (sign) {
      res.push(word)
    }
  }

  return res.length
}
const binarySearch = function (arr, target) {
  if (arr.length == 1) {
    if (arr[0] > target) {
      return arr[0]
    } else {
      return -1
    }
  }
  if (arr[arr.length - 1] <= target) {
    return -1
  }
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    let middle = ~~((left + right) / 2)
    if (arr[middle] > target) {
      right = middle
    } else {
      left = middle + 1
    }
  }
  return arr[left]
}
