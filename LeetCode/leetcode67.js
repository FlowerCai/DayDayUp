var addBinary = function(a, b) {
    let arrA = a.split('').reverse()
    let arrB = b.split('').reverse()
    let max = Math.max(arrA.length, arrB.length)
    let sign = 0
    let res = []
    for(let i=0; i<max; i++){
        if(arrA[i] ==='1' && arrB[i] === '1'){
            if(sign){
                res.push('1')
            }else {
                res.push('0')
                sign = 1
            }
        }else if(arrA[i] === '1' || arrB[i] ==='1' ){
            if(sign){
                res.push('0')
            }else {
                res.push('1')
            }
        }else if(arrA[i]==='0' && arrA[i] ==='0'){
            if(sign){
                res.push('1')
                sign=0
            }else{
                res.push('0')
            }
        }else if(arrA[i] ===undefined || arrB[i]===undefined){
            
            let item = arrA[i] ===undefined ? arrB[i] : arrA[i]
            if(item === '0'){
                res.push(sign+'')
                sign = 0
            }else{
                if(sign){
                    res.push('0')
                    sign = 1
                }else {
                    res.push('1')
                }
            }
        }
    }
    if(sign){
        res.push('1')
    }

    return res.reverse().join('')
};

console.log(addBinary('11', '1001'))