/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    // first count length of LL
    if(!head) return head;
    
    let length = 0;
    let curr = head
    while (curr) {
        curr = curr.next;
        length++
    }
    k = k % length;
    // if no rotation return from here
    if (k === 0) return head;

    // move fast pointer to k positions
    let fast = head;
    let slow = head;

    for (let i = 0; i < k; i++) {
        fast = fast.next;
    }

    while(fast && fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    // arrange pointers
    let newHead = slow.next;
    fast.next = head;
    slow.next = null;

    return newHead;

};