var swapPairs = function(head) {
  if(head === null || head.next === null){
    return head
  }
  let left = head, right = head.next
  let res = new ListNode(0), cur = res
  res.next = head

  while( left != null && right != null){
    let temp = right.next

    res.next = right
    res.next.next = left 
    left.next = temp


    res = res.next.next
    if( res.next == null || res.next.next ==null) {
      break
    }else {
      left = res.next
      right = left.next
    }
  }
  return cur.next
};