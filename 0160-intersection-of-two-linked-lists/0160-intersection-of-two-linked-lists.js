/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let visitedSet = new Set();

    let p1 = headA;

    while (p1) {
        visitedSet.add(p1);
        p1 = p1.next;

    }

    let p2 = headB;

    while (p2) {
        if (visitedSet.has(p2)) {
            return p2
        }
        p2 = p2.next;
    }

    return null
};