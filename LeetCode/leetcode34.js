var searchRange = function(nums, target) {
    const len = nums.length
    let start = -1, end = -1
    let sign = false
    for(let i=0; i<len; i++) {
        if(nums[i] == target && !sign){
            start = i
            sign = !sign
        }
        if(nums[i] == target && sign){
            end = Math.max(end, i)
        }
    }
    let res = [start, end]
    return res
};
console.log(searchRange([5,6,7,7,8], 8))