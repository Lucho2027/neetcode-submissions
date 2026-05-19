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
     * @return {number}
     */
    pairSum(head) {
        let curNode = head
        let result = [];

        while(curNode !== null){    
            result.push(curNode.val)
            curNode = curNode.next
        }
         const yeet = []
         while(result.length) {
             yeet.push(result[0]+result[result.length -1])
             result = result.slice(1,-1)
         }

        return Math.max(...yeet)
    }
}
