var myAtoi = function(s) {
  s = s.trim()
  let len = s.length
  let res = 0
  let sign = 1
  let arr = '0123456789'.split('')
  for(let i=0; i< len; i++) {
    if(i==0){
      if( !arr.includes(s[i]) && s[i] !== '-' && s[i] !== '+'){
        return 0
      }
      if(s[i] === '-'){
        sign = -1
      }
    }

    if(arr.includes(s[i])){
      res = res +s[i]
    }else if(i == 0){
      continue
    }else{
      break
    }
  }
  let num = sign * parseInt(res)
  if(num < Math.pow(-2, 31)){
    return Math.pow(-2, 31)
  }else if(num >Math.pow(2, 31) -1){
    return Math.pow(2,31) -1
  }else{
    return num
  }
};

console.log(myAtoi(' +-12 '))