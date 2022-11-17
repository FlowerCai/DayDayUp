var maxRotateFunction = function (nums) {
  let F = []
  const len = nums.length
  for (let i = 0; i < len; i++) {
    let res = 0
    for (let j = 0; j < len; j++) {
      res += ((i + j) % len) * nums[j]
    }
    F.push(res)
  }
  F.sort((a, b) => a - b)
  return F[len - 1]
}

var maxRotateFunction = function (nums) {
  const sum = nums.reduce((pre, cur) => pre + cur)
  const len = nums.length

  let nSum = 0
  for (let i = 0; i < len; i++) {
    nSum += i * nums[i]
  }
  const F = []
  F.push(nSum)
  for (let i = 1; i < len; i++) {
    F[i] = F[i - 1] + sum - len * nums[len - i]
  }
  F.sort((a, b) => a - b)
  return F[len - 1]
}
