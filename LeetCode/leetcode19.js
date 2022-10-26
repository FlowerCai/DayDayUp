/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let res = new ListNode(0) 
    res.next = head
    let start = res, end = res
    for(let i=0; i<n; i++){
      end = end.next
    }
    while(true ){
      if(end.next != null){
        end = end.next
        start = start.next
      }else {
        start.next = start.next.next
        break
      }
    }
    return res.next
};
