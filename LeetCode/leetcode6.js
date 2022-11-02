var convert = function(s, numRows) {
  let res = {}
  if((numRows >=s.length) || numRows<= 1){
    return s;
  }
  let num = 2 * numRows -2
  let len = s.length
  for(let i=0; i < len; i++){
    let key = i%num
    if(key>=0 && key<= (numRows-1)){
      res[key] = res[key] ? res[key] + s[i] : s[i]
    }else{
      let temp = 2 * (numRows-1) - i%num
      res[temp] = res[temp] ? res[temp] + s[i] : s[i]
    }
  }
  let str = ''
  for(let i=0; i<numRows; i++){
    str = res[i] ? str + res[i] : str
  }
  return str
};

console.log(convert("PAYPALISHIRING", 3))