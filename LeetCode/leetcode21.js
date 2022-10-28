var mergeTwoLists = function(list1, list2) {
  let head = new ListNode(0)
  let cur = head
  if(list1 == null ){
    return list2
  }
  if(list2 == null ){
     
    return list1
  }
  while( list1 != null | list2 != null){
    if(list1.val > list2.val ){
      cur.next = list2
      list2 = list2.next
    }else {
      cur.next = list1
      list1 = list1.next
    }
    cur = cur.next
    if(list1 == null){
      cur.next = list2
      break
    }
    if(list2 == null ){
      cur.next = list1
      break
    }
  }
  return head.next
};