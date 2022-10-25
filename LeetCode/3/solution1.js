var lengthOfLongestSubstring = function(s) {
  if(s.length == 0 || s.length == 1){
  console.log('2')

    return s.length;
  }
  let max = 2;
  let ch = s.charAt(0)
  let num = 0;
  for(let i=0; i<s.length; i++){
    if(s.charAt(i) === ch){
      num ++
    }
  }
  if(num == s.length) {
    return 1
  }
  for(let i=2; i<=s.length; i++ ) {
    for(let j=0; j<=s.length-i; j++ ) {
      let sign = false
      let s1 = s.slice(j, j+i).split('').sort()
      for(let k=0; k<i-1; k++){
        if(s1[k] == s1[k+1]){
          sign = !sign
          break
        }
      }

      if(sign){
        continue
      }else{
        max = i
        break
      }
    }
  }
  return max
};

console.log(lengthOfLongestSubstring('bwf'))