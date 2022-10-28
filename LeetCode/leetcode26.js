var removeDuplicates = function(nums) {
  const len = nums.length
  if(len == 0){
    return 0
  }
  let right = 1, left = 1
  for(; right< len; right++){
    if(nums[right] == nums[right-1]){
      continue
    }else {
      nums[left] = nums[right]
      left ++
    }
  }
  return left
};

console.log(removeDuplicates([1,2,3,4,4,4,5,5]))