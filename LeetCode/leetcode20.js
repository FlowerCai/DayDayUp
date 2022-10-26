// 有漏洞的方案一
var isValid = function(s) {
  const sign = {'(': 0, '{': 0, '[':0}
  const dic = {')':'(', ']':'[', '}':'{'}
  let len = s.length
  if(len%2 == 1){
    return false
  }
  for(let i=0; i<len; i++) {
    let cur = s[i]
    if(Object.keys(sign).includes(cur)){
      sign[cur] ++ 
    }else if(Object.keys(dic).includes(cur)){
      sign[dic[cur]] --
      if(sign[dic[cur]] < 0){
        return false
      }
    }
  }
  let values = Object.values(sign).filter(v => v!= 0)
  if(values.length != 0){
    return false
  }else{
    return true
  }
};

var isValid2 = function(s) {
  const map = {
    '(': ')',
    '{': '}',
    '[': ']',
  }

  let stack = []
  for(let key of s){
    if(Object.keys(map).includes(key)){
      stack.push(key)
    }else {
      if(key == map[stack.pop()]){
        continue
      }else{
        return false
      }
    }
  }
  return stack.length == 0 ? true : false

}; 
console.log(isValid2("()"))