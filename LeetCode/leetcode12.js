var intToRoman = function(num) {
  const map = {
    1: 'I', 5: 'V', 10: 'X', 50: 'L', 100: 'C', 500: 'D', 1000: 'M',
    4: 'IV', 9: 'IX', 40:'XL', 90:'XC', 400: 'CD', 900:'CM',
  }
  let arr = Object.keys(map)
  let res = ''
  let len = arr.length
  for(let i=len-1; i>=0; i--){
    let times = ~~ (num / arr[i])
    num = num % arr[i]
    for(let j = 0; j< times; j++){
      res += map[arr[i]]
    }
  }
  return res
};
console.log(intToRoman(58))

