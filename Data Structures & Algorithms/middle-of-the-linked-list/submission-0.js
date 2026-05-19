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
     * @return {ListNode}
     */
    middleNode(head) {
        let slow = head
        let fast = head
        while(fast !== null &&  fast.next !== null){
         fast = fast.next.next
         slow = slow.next
        }
        console.log(slow)
        return slow
    }
}
