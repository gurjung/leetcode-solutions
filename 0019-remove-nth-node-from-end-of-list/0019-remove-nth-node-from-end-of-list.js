/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let dummyNode = new ListNode();
    dummyNode.next = head;

    let slow = dummyNode;
    let fast = dummyNode;

    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    while (fast && fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
  
    slow.next = slow.next.next;

    return dummyNode.next;
};