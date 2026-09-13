/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let slow = head;
    let fast = head;
    let p1 = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {

            while (p1 !== slow) {
                p1 = p1.next;
                slow = slow.next
            }

            return p1

        }
    }

    return null;
};