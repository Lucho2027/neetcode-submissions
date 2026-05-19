/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
       let slow = head;
       let fast = head;
       let result = false
       while(fast !== null && fast.next !== null){
            slow = slow.next;
            fast = fast.next.next
        if(slow === null || fast === null) {
            break
        }
        if(slow.val === fast.val){
            result = true
           break 
        }
       }
       console.log(result)
       return result
    }
}
