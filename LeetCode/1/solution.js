var twoSum = function(nums, target) {
  let res = []
  for(let i=0; i<nums.length; i++ ){
    let num1 = target -nums[i]
    let arr = nums.slice(i+1)
    if(arr.indexOf(num1) != -1){
      res.push(i)
      res.push(i+arr.indexOf(num1)+1)
      return res
    }
  }
};

console.log(twoSum([2,7,11,15], 9))
