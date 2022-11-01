var permuteUnique = function (nums) {
  const len = nums.length
  nums = nums.sort((a, b) => a - b)
  let res = []
  let path = []
  let used = new Array(len).fill(false)
  dfs(nums, len, used, 0, path, res)
  return res
}
const dfs = function (nums, len, used, depth, path, res) {
  if (depth == len) {
    res.push([...path])
    return
  }

  for (let i = 0; i < len; i++) {
    if (used[i] == true) {
      continue
    }
    if (i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) {
      continue
    }
    path.push(nums[i])
    used[i] = true
    dfs(nums, len, used, depth + 1, path, res)
    used[i] = false
    path.pop()
  }
}

console.log(permuteUnique([1, 2, 4, 3, 3, 9]))
