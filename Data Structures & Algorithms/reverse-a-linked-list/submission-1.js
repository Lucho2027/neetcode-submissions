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
        let prevNode = null
        let curNode = head 
        let next =null
        while( curNode !== null) {
            next = curNode.next
            curNode.next = prevNode
            prevNode = curNode
            curNode = next
        }

        console.log('curNode', curNode)
        console.log('prevNode', prevNode)
        console.log('next', next)
        return prevNode
    }
}
