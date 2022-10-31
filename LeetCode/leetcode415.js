var addStrings = function(num1, num2) {
    let arr1 = num1.split('').reverse()
    let arr2 = num2.split('').reverse()
    let len = Math.max(arr1.length, arr2.length)
    let sign = 0, res = []
    for(let i=0; i<len; i++){
        let item1 = arr1[i] === undefined ? 0 : arr1[i]-'0'
        let item2 = arr2[i] ===undefined ? 0: arr2[i] -'0'
        let sum = item1 + item2 + sign
        if(sum >= 10){
            sign =1
        }else {
            sign = 0
        }
        res.push(sum%10) 
    }
    
    if(sign){
        res.push(1)
    }
    return res.reverse().join('')
};

console.log(addStrings('1', '9'))