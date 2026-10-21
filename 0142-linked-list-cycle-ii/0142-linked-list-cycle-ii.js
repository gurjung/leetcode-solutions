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
    // fast and slow pointer approach
    if (!head) return head;

    let slow = head;
    let fast = head;
    let p1 = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;

        if (fast === slow) {
            // cycle detected

            while (slow !== p1) {
                slow = slow.next;
                p1 = p1.next;
            }

            return slow;

        }
    }

    return null;
};