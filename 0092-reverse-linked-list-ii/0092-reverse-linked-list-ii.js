/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    if (!head) return null;
    let times = right - left + 1;
    let curr = head;
    let prev = null;

    while (left > 1) {
        prev = curr;
        curr = curr.next;
        left--;
    }

    let before = prev;
    let tail = curr;

    // reverse LL will remain same
    while (curr && times > 0) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
        times--;
    }

    if (before) {
        // left is not === 1
        before.next = prev;
    } else {
        head = prev
    }
    tail.next = curr;
    return head;

};