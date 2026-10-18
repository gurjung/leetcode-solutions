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
var removeNthFromEnd = function(head, n) {
    // use fast and slow pointer approach
    let sentinelNode = new ListNode();
    sentinelNode.next = head;

    let slow = sentinelNode;
    let fast = sentinelNode;

    for(let i = 0; i < n; i++) {
        fast = fast.next;
    }

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;
    return sentinelNode.next;
};