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
var reverseKGroup = function (head, k) {

    // Approach 1 -> recursion

    // check whether k nodes exist or not
    let temp = head, count = 0;
    while (count < k) {
        if (temp === null) {
            return head;
        }
        temp = temp.next;
        count++;
    }
    // send temp as head in recursive call
    let prevNode = reverseKGroup(temp, k);
    // swap k group
    let curr = head;
    count = 0;
    while (count < k) {
        let n = curr.next;
        curr.next = prevNode;
        prevNode = curr;
        curr = n;
        count++;
    }
    return prevNode;
};