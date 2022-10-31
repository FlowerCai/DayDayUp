var longestValidParentheses = function(s) {
  const len = s.length
  let max = 0
  for(let i=0; i<len; i++ ) {


      if(s[i] === ')'){
          continue
      }
      let left = 0, right = 0
      for(let j=i; j<len; j++) {
          if(s[j] === '('){
              left++
          }else {
              right++
          }
          if(right == left){
              max = Math.max(max, right+ left )
          }else if(right > left){
              break
          }
      }
  }
  return max
};

console.log(longestValidParentheses('(()'))