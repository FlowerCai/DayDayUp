var maxArea = function(height) {
  let len = height.length 
  let area = 0
  let left = 0, right = len-1
  while(left < right) {
    if(height[left] < height[right]){
      area = Math.max(area, height[left] * (right-left))
      left ++
    }else{
      area = Math.max(area, height[right] * (right-left))
      right --
    }
  }
  return area
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))