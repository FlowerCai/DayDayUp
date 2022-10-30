var nextPermutation = function(nums) {
  const len = nums.length
  let i=len-2
  while(i>=0 && nums[i] >= nums[i+1]){
    i--
  }
  console.log(i)
  let j=len -1
  if(i>=0){
    let j = len -1 
    while(nums[j] <= nums[i]){
      j--
    }
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }
  console.log(nums)
  let left = i+1, right = len-1
  while(left< right){
    let temp = nums[left]
    nums[left] = nums[right]
    nums[right] = temp
    left ++ 
    right --
  }
  return nums
};

console.log(nextPermutation([4,5,7,6,5,3,4,2,1]))