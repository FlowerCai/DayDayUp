var lengthOfLongestSubstring = function(s) {
  const length = s.length
  const record = new Set()
  let right = 0, max = 0
  for (let i=0; i< length; i++) {
    if(i != 0 ){
      record.delete(s.charAt(i-1))
    }
    while(right <= length-1 && !record.has(s[right])){
      record.add(s[right])
      right ++ 
    }
    max = Math.max(max, right-i )
  }
  return max
};

console.log(lengthOfLongestSubstring('pwwkew'))

