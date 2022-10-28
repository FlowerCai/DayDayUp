var findSubstring = function(s, words) {
  let lenOfWords = words.length, num = words[0].length * lenOfWords
  let lenOfStr = s.length
  words = words.sort()
  if(num >lenOfStr){
    return []
  }
  let res = []
  for(let i=0; i<lenOfStr; i++) {
    let subStr = s.slice(i, i+num)
    let arr = separateStr(subStr, words[0].length).sort().join()
    let arr2 = words.join()

    

    if(arr == arr2){
      res.push(i)
    }
  }
  return res
};

const separateStr = function(s, len){
  let res = []
  for(let i=0; i<s.length; i += len){
    res.push(s.slice(i, i+len))
  }
  return res
}

// console.log(findSubstring("goodgoodbestword", ["word","good","best","word"]))
// console.log(findSubstring("barfoothefoobarman", ["foo","bar"]))
console.log(findSubstring("bcabbcaabbccacacbabccacaababcbb",
["c","b","a","c","a","a","a","b","c"]))