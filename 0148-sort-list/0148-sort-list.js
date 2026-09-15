/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {

    // 1. Base case
    if (!head || !head.next) return head;

    // 2. Find middle using slow/fast
    let slow = head;
    let fast = head;
    let prev = null;

    // 3. Cut into two lists
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    prev.next = null

    // prev = left list end = 4 -> 2 -> null

    // slow = right list start = 1 -> 3 -> null

    // 4. Recursively sort left
    // head -> points to left list
    let left = sortList(head)

    // 5. Recursively sort right
    // slow -> points to right list
    let right = sortList(slow)

    // 6. Merge the two sorted lists

    let dummy = new ListNode(0);
    let current = dummy;

    while (left && right) {
        // compare left.val and right.val
        if (left.val < right.val) {
            current.next = left;
            left = left.next;
        } else {
            current.next = right;
            right = right.next

        }

        current = current.next;

        // connect smaller node to current

        // move the pointer you selected

        // move current
    }

    while(left) {
        current.next = left;
        left = left.next;
        current = current.next;
    }

    while(right) {
        current.next = right;
        right = right.next;
        current = current.next;
    }

    // attach whatever remains

    return dummy.next;


};