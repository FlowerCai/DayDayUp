var reverse = function(x) {
  let res = 0
  let sign = x>0 ? 1: -1
  x = Math.abs(x)
  while(x != 0){
    let num = x % 10
    x = ~~ (x/10)
    res = res *10 + num
    if((res > Math.pow(2, 31) -1) || (res < Math.pow(-2, 31)) ){
      return 0
    }
  }
  return res * sign
};

console.log(reverse(-10))