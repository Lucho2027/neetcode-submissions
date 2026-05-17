// /**
//  * Definition for singly-linked list.
//  * class ListNode {
//  *     constructor(val = 0, next = null) {
//  *         this.val = val;
//  *         this.next = next;
//  *     }
//  * }
//  */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let curNode = null
        let next =null
        while( head !== null) {
            next = head.next
            head.next = curNode
            curNode = head
            head = next
        }

    
        return curNode
    }
}
