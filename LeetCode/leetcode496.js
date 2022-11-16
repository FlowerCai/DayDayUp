var nextGreaterElement = function (nums1, nums2) {
  const len1 = nums1.length
  const len2 = nums2.length
  let res = new Array(len1).fill(-1)

  for (let i = 0; i < len1; i++) {
    const start = nums2.indexOf(nums1[i])
    for (let j = start + 1; j < len2; j++) {
      if (nums2[j] > nums1[i]) {
        res[i] = nums2[j]
        break
      }
    }
  }
  return res
}
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]))
