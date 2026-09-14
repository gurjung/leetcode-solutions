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
var oddEvenList = function (head) {
    if(!head || !head.next) return head;
    
    let p1 = head;
    let p2 = head.next;
    let p2Cpy = head.next;
    while (p1.next && p2.next) {
        p1.next = p1.next.next;
        p2.next = p2.next.next;
        p1 = p1.next;
        p2 = p2.next;
    }
    p1.next = p2Cpy;
    return head;
};