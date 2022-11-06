var sortColors = function (nums) {
  const len = nums.length
  const res = new Array()
  const dic = {
    0: 0,
    1: 0,
    2: 0,
  }
  for (let i = 0; i < len; i++) {
    let num = nums[i]
    dic[num]++
  }
  for (let i = 0; i < 3; i++) {
    let temp = new Array(dic[i]).fill(i)
    res.push(...temp)
  }
  for (let i = 0; i < len; i++) {
    nums[i] = res[i]
  }
  return nums
}
console.log(sortColors([2, 0, 2, 1, 1, 0]))
