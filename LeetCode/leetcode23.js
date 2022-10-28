var mergeKLists = function(lists) {

  let res = null
  let len = lists.length

  for(let i=0; i< len; i++) {
    res = mergeTwo(res,lists[i] )
  }

  return res
};

const  mergeTwo = function(list1, list2){
  let res = new ListNode(0)
  let head = res
  if( list1 == null){
    return list2
  }

  if(list2 == null){
    return list1
  }

  while (list1 != null || list2 != null){
    if(list1.val > list2.val){
      res.next = list2 
      list2 = list2.next
    }else {
      res.next = list1
      list1 = list1.next
    }
    res = res.next

    if(list1 == null){
      res.next = list2
      break
    }

    if(list2 == null){
      res.next = list1
      break
    }

  }
  return head.next
}