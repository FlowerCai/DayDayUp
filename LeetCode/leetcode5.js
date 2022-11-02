var longestPalindrome = function(s) {
  let maxStr = ''
  for (let center=0; center < s.length; center++ ) {
    let temp =0 
    for (let width=0; center+ width < s.length && center -width>=0; width++ ) {
      if(s[center+ width] == s[center-width]){
        temp = width
        continue;
      }else{
        break
      }
    }
    if(2 *temp+1 > maxStr.length ){
      maxStr = s.slice(center-temp, center+temp+1)
    }
  }

  for (let center=0; center+1 < s.length; center++ ) {
    let temp = -1
    for (let width=0; center+ width +1 < s.length && center -width>=0; width++ ) {
      if(s[center+ width +1] == s[center-width]){
        temp = width
        continue;
      }else{
        break
      }
    }
    if(2 *temp +2 > maxStr.length ){
      maxStr = s.slice(center-temp, center+1+temp+1)
    }
  }
  return maxStr
};

console.log(longestPalindrome("cbbd"))