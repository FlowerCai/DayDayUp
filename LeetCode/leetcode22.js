var generateParenthesis = function(n) {
  let res = [], cur = ''
  backtrack(res, cur, 0, 0, n )
  return res
};

const backtrack = function(res, cur, left, right, n){
  if(cur.length == 2*n){
    res.push(cur)
    return 
  }

  if(left < n){
    cur = cur + '('
    backtrack(res, cur, left +1, right, n)
    cur = cur.slice(0, cur.length -1)
  }

  if(left > right){
    cur = cur + ')'
    backtrack(res, cur, left, right+1, n )
  }

}

console.log(generateParenthesis(3))