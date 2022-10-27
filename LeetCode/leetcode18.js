var fourSum = function(nums, target) {
  if(nums.length < 4){
    return  []
  }
  let res = []
  let len = nums.length
  nums = nums.sort( (a, b) => a-b )
  for(let i=0; i<len-3; i++) {
    if(i > 0 && nums[i] == nums[i-1]){
      continue
    }
    for(let j = i+1; j<len-2; j++) {
      if(j > i+1 && nums[j-1] == nums[j]){
        continue
      }
      let left = j+1, right = len-1
      let tarNum = target - nums[i] - nums[j]
      while ( left < right){
        if(left > j+1){
          if(nums[left] == nums[left-1]){
            left++
            continue
          }
        }
        if(right < len-1){
          if(nums[right] == nums[right+1]){
            right -- 
            continue
          }
        }
        if(nums[left] + nums[right] < tarNum){
          left ++ 
        }else if(nums[left] + nums[right] == tarNum){
          res.push([nums[i],nums[j], nums[left], nums[right]])
          left ++
        }else {
          right -- 
        }
      }
    }
  }
  return res
};

console.log(fourSum([2,2,2,2,2],  8))