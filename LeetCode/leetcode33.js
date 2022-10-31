var search = function(nums, target) {
    const len = nums.length
    if(target < nums[0] && target > nums[len-1]){
        return -1
    }
    let left = 0, right = len-1
    while(left <= right){
        let mid = ~~ ((left + right)/2)
        if(target == nums[mid]){
            return mid
        }

        if(nums[0] <= nums[mid]){
            if(nums[0] <= target && target < nums[mid]){
                right = mid -1
            }else {
                left = mid +1
            }
        }else {
            if(target >nums[mid] && target <= nums[right]){
                left = mid +1
            }else {
                right = mid-1
            }
        }
    }
    return -1
};
console.log(search([3,5,1], 3))