var threeSumClosest = function(nums, target) {
  let len = nums.length
  let sortNums = nums.sort( (a, b) => a-b)
  let res = nums[0] + nums[1] + nums[2], min = Math.abs(nums[0] + nums[1] + nums[2] - target )
  for(let i=0; i< len; i++) {
    let num = sortNums[i]
    if(i>0 && sortNums[i] == sortNums[i-1]){
      continue
    }
    let left = i+1, right = len-1
    while (left < right) {
      let sum = sortNums[i] + sortNums[left] + sortNums[right]
      let distance = Math.abs(sum -target)
      if(distance < min ){
        min = distance
        res = sum
      }
      if(sum -target > 0){
        right -- 
      }else if(sum == target){
        return sum
      }else {
        left ++
      }
    }
  }

  return res
};

console.log(threeSumClosest([0,1,2], 0))