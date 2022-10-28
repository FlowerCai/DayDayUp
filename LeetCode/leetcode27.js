var removeElement = function(nums, val) {
  let left = 0, right = 0
  let len = nums.length
  for(; right< len; right++){
    if(nums[right] == val){
      continue
    }else {
      nums[left] = nums[right]
      left++
    }
  }
  return left 
};

console.log(removeElement([3,2,2,3], 3))