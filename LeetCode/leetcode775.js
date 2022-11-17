var isIdealPermutation = function (nums) {
  let all = 0
  let part = 0
  const len = nums.length
  let markAll = new Array(len).fill(0)
  let markPart = new Array(len).fill(0)
  if (len <= 1) {
    return true
  }
  for (let i = 0; i < len - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      markPart[i]++
    }
    let num = 0
    for (let j = i + 1; j < len; j++) {
      if (nums[i] > nums[j]) {
        num++
        markAll[i]++
      }
    }

    if (num > 1) {
      return false
    }
  }
  for (let i = 0; i < len; i++) {
    if (markAll[i] != markPart[i]) {
      return false
    }
  }
  return true
}

console.log(isIdealPermutation([1, 2, 0]))
