var permute = function (nums) {
  let res = []
  let len = nums.length
  let path = []
  let used = new Array(len).fill(false)
  dfs(nums, len, 0, path, used, res)
  return res
}

const dfs = function (nums, len, depth, path, used, res) {
  if (path.length == len) {
    res.push([...path])
    return
  }
  for (let i = 0; i < len; i++) {
    if (used[i] === true) {
      continue
    }
    used[i] = true
    path.push(nums[i])
    dfs(nums, len, depth + 1, path, used, res)
    used[i] = false
    path.pop()
  }
}

console.log(permute([1, 2, 3]))
