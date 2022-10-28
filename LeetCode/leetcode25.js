var reverseKGroup = function(head, k) {

};

const reverseTwo  = function(head, k){
  if(head == null || head.next == null){
    return head
  }
  let newHead = new ListNode(0)
  newHead.next = head
  let left = newHead, right = head
  while(right.next != null ){
    let temp = right.next.next
    left.next = right.next
    right.next.next = right
    right.next = temp

  }
}