var reverseBetween = function(head, left, right) {
  let node1 = head
  for(let i=0; i<left-1; i++){
    node1 = node1.next
    if(node1 == null){
      return head
    }
  }
  let node2 = node1
  for(let j=left -1; j<right; j++){
    node2 = node2.next
    if(node2==null){
      return head
    }
  }
  let temp = node2.next
  [node1.next, tail] = reverseTwo(node1.next)
  tail.next = temp
  return head
};

const reverseTwo = function(head){
  let prev = null
  let curr = head, tail = head
  while( curr != null){
    let temp = curr.next 
    curr.next = prev
    prev = curr
    curr = temp
  }
  return prev, tail
}