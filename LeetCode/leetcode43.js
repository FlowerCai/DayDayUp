var multiply = function(num1, num2){
    let arr1 = num1.split('')
    let arr2 = num2.split('')
    let len1 = arr1.length, len2 = arr2.length
    let res = []
    if(num1 === '0' || num2 ==='0'){
        return '0'
    }
    
    for(let i=len1 -1; i>=0; i--){
        let temp = []
        let sign = 0
        if(arr1[i]-'0' === 0){/*  */
            continue
        }  
        for(let j=len2 -1; j>=0;j--){
            let num = arr1[i] * arr2[j] +sign -'0'
            sign = num >= 10 ? parseInt(num/10):0
            temp.push(num%10)
        }
        if(sign){
            temp.push(sign)
        }
        for(let k=1; k<=len1-i-1; k++){
            temp.unshift(0)
        }
        if(res.length != 0){
            res = add(res, temp)
        }else {
            res = temp
        }
    }
    if(res.length == 0){
        return '0'
    }
    return res.reverse().join('') 
};

const add = function(arr1, arr2){
    let len = Math.max(arr1.length, arr2.length)
    let sign = 0
    let res = []
    for(let i= 0; i<len; i++ ){
        let item1 = arr1[i] ===undefined ? 0 : arr1[i]
        let item2 = arr2[i] ===undefined ? 0 : arr2[i]
        let num = item1 + item2 +sign
        sign = num>=10 ? 1:0
        res.push(num % 10)
    }
    if(sign){
        res.push(1)
    }
    return res
}

console.log(multiply('140', '721'))
