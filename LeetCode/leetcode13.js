var romanToInt = function(s) {
  const dic = {
    'I': 1, 'V': 5, 'X':10, 'L': 50, 'C': 100, 'D': 500,'M': 1000,
    'IV': 4, 'IX': 9, 'XL': 40, 'XC':90, 'CD':400, 'CM':900,
  }
  const len = s.length
  const arr = Object.keys(dic)
  let res = 0
  for(let i=0; i<len; i++){
    let c = s[i]
    if(s[i+1]){
      if(arr.includes(s.slice(i, i+2))){
        res += dic[s.slice(i, i+2)]
        i++
      }else {
        res += dic[s[i]]
      }
    }else{
      res += dic[s[i]]
    }
  }
  return res
};

console.log(romanToInt("MCDLXXVI"))
// console.log(romanToInt("IV"))
// console.log(romanToInt("LVIII"))