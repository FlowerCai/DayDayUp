var isPalindrome = function(x) {
  let s = '' + x
  let len = s.length
  if(len % 2 == 0){
    for(let i=0; i<parseInt(len/2); i++){
      if(s[i] == s[len-i-1]){
        continue
      }else {
        return false
      }
    }
  }else if(len % 2 ==1){
    for(let i=0; i<len/2; i++){
      if(s[i] == s[len-i-1]){
        continue
      }else{
        return false
      }
    }
  }
  return true
};