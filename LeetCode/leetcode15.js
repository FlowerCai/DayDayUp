var threeSum = function(nums) {
  let sortArr = nums.sort( (a, b) => a-b) 
  let len = nums.length
  if(len <3){
    return []
  }
  let res = []
  for(let i=0; i<len-2; i++) {
    if(i>0 && sortArr[i-1] == sortArr[i]){
      continue
    }
    if(sortArr[i] > 0){
      break
    }
    let left = i+1, right = len-1
    let target = -sortArr[i]
    while(left < right){
      if(left> i+1 && sortArr[left] == sortArr[left -1]){
        left++
        continue
      }
      if(right < len-1 && sortArr[right] == sortArr[right+1]){
        right--
        continue
      }
      if(sortArr[left] + sortArr[right] < target){
        left ++
      }else if(sortArr[left] + sortArr[right] > target){
        right -- 
      }else {
        res.push([sortArr[i], sortArr[left], sortArr[right]])
        left ++ 
      }
    }
  }
  return res
};

console.log(threeSum([-4,2,2]))

