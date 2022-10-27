var letterCombinations = function(digits) {
  const map = {}
  if(digits.length == 0){
    return []
  }
  let arrStr = 'abcdefghijklmnopqrstuvwxyz'.split('')
  str = digits.split('')
  let res = []
  for(let i=2; i<7; i++){
      map[i] = arrStr.slice((i-2)*3, (i-1)*3)
  }
  map[7] = 'pqrs'.split('')
  map[8] = 'tuv'.split('')
  map[9] = 'wxyz'.split('')
  res = map[str[0]]
  for(let i=1; i< str.length; i++){
    res = combineStr(res,map[str[i]])
  }
  return res
};

const combineStr = function(arr1, arr2){
  let len1 = arr1.length
  let len2 = arr2.length
  let res = []
  for(let i=0; i<len1; i++){
    for(let j=0; j<len2; j++) {
      res.push('' + arr1[i] + arr2[j])
    }
  } 
  return res
}

console.log(letterCombinations("23"))