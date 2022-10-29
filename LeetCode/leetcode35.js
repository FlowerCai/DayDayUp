var searchInsert = function(nums, target) {
  const len = nums.length
  for(let i=0; i<len; i++){
    if(nums[i] == target){
      return i
    }

    if(i == 0){
      if (nums[i]>target){
        return 0
      }
    }
    if(i == len-1){
      if(nums[i]< target){
        return len
      }else {
        return len-1
      }
    }
    
    if(nums[i]>target && nums[i-1]<target){
      return i
    }else {
      continue
    }
  }
};
console.log(searchInsert([1], 2))
