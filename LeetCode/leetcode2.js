 function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
 }
var addTwoNumbers = function(l1, l2) {
  let head = null, tail = null
  let sign = 0
  while(l1 || l2){
    let val1 = l1 ? l1.val : 0
    let val2 = l2 ? l2.val : 0
    let num = val1 + val2 + sign
    if(!head){
      head = new ListNode(num %10)
      tail = head
    }else{
      tail.next = new ListNode(num %10)
      tail = tail.next 
    }
    sign = num >= 10 ? 1:0
    if(l1) {
      l1 = l1.next}

    if(l2) {
      l2= l2.next}
  }
  if(sign == 1){
    tail.next = new ListNode(1)
    tail = tail.next
  }
  return head
};

let l1 = new ListNode([1,2,3,4])
let l2 = new ListNode([1,2,3,4])

console.log(addTwoNumbers(l1, l2))