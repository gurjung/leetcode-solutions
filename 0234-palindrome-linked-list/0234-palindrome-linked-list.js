/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    // find middle
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // reverse the LL
    let newHead = slow;
    let curr = newHead;
    let prev = null;

    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    
    // compare values of both LL
    let p1 = head;
    let p2 = prev;

    while (p1 && p2) {
        if (p1.val !== p2.val) {
            return false;
        }
        p1 = p1.next;
        p2 = p2.next;
    }
    return true;
};