var divide = function(dividend, divisor) {
  const MAX_VALUE = 2 ** 31 -1, MIN_VALUE = - (2 ** 31)

  if(dividend === MIN_VALUE){
    if(divisor === -1){
      return MAX_VALUE
    }
    if(divisor === 1){
      return MIN_VALUE
    }
  }

  if(divisor == MIN_VALUE){
    return dividend === MIN_VALUE? 1: 0
  }

  if(dividend == 0){
    return 0
  }

  let sign = false

  if(dividend > 0){
    dividend = -dividend
    sign = !sign
  }

  if(divisor> 0){
    divisor = -divisor
    sign = !sign
  }

  let arr = [divisor]
  let index = 0
  while(arr[index]>= dividend - arr[index]){
    arr.push(arr[index] * 2)
    index++ 
  }

  const len = arr.length
  let res = 0
  for(let i=len-1; i>= 0; i--){
    if(arr[i] >=dividend){
      res += 1<<i
      dividend -= arr[i]
    }
  }
  return sign? -res : res
};

console.log(divide(-2147483648, 2))