var longestCommonPrefix = function(strs) {
  let str1 = strs[0]
  let len1 = str1.length, len = strs.length
  for(let i=len1-1; i>=0; i-- ){
    let matchStr = str1.slice(0, i+1)
    let sign = true
    for(let j=1; j<len; j++ ){
      let item = strs[j]
      if(matchStr == item.slice(0, i+1)){
        continue
      }else {
        sign = false
        break
      }
    }
    if(sign){
      return matchStr 
    }
  }
  return ''
};

console.log(longestCommonPrefix(["dog","racecar","car"]))

