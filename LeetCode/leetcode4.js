var findMedianSortedArrays = function(nums1, nums2) {
  let arr = []
  let start1 = 0, start2 = 0
  let length = nums1.length + nums2.length
  if(nums1.length == 0){
    return findMiddle(nums2)
  }

  if(nums2.length == 0){
    return findMiddle(nums1)
  }
  
  for (let i=0; i< length; i++) {
    if(nums1[start1] >= nums2[start2]){
      arr.push(nums2[start2])
      start2++
    }else{
      arr.push(nums1[start1])
      start1++
    }
    if(nums1.length == start1){
      arr = [].concat(arr, nums2.slice(start2))
      break
    }
    if(nums2.length == start2){
      arr = [].concat(arr, nums1.slice(start1))
      break
    }
  }

  return findMiddle(arr)
};

function findMiddle(arr){
  let middleNum =0
  let length = arr.length
  if( length % 2 ==0 ){
    middleNum = (arr[length/2] + arr[length/2-1])/2
  }else{
    middleNum = arr[parseInt(length/2)]
  }
  return middleNum
}

console.log(findMedianSortedArrays([1,2,3], [4,5]))