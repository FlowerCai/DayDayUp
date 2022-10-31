var plusOne = function(digits) {
    const len = digits.length
    let sign = 0
    for(let i=len-1; i>=0; i--) {
        if(digits[i] != 9){
            digits[i] ++
            sign = 0
            break
        }else {
            sign = 1
            digits[i] = 0
        }
    }
    if(sign){
        digits.unshift(1)
    }

    return digits
};

console.log(plusOne([9,9,9,9]))