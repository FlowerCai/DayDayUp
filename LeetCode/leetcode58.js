var lengthOfLastWord = function(s) {
  s = s.trim() 
  let arr = s.split(' ')
  const len = arr.length
  return arr[len-1].length
};