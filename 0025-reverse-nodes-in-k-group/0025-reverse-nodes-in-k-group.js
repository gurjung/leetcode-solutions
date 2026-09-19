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
var reverseKGroup = function(head, k) {
    if (!head) return head;

    let size = k;
    let currLeft = head;
    let currRight = null;
    let prevLeft = null;
    let nextLeft = null;
    let res = null; // new head which needs to return as an final answer

    function reverse(currHead, times) {
        let curr = currHead;
        let prev = null;

        while (times > 0) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
            times--;
        }
        return;
    }

    while (1) {

        currRight = currLeft;
        for (let i = 0; i < size - 1; i++) {
            if (!currRight) break;
            currRight = currRight.next;
        }

        if (currRight) {
            // reverse
            nextLeft = currRight.next;
            reverse(currLeft, size);
            if (prevLeft) {
                prevLeft.next = currRight;
            }
            prevLeft = currLeft;
            currLeft = nextLeft;
            if (res === null) {
                res = currRight;
            }
        } else {
            if (prevLeft) {
                prevLeft.next = currLeft;
            }
            // if there is only one node as an input
            if (res === null) {
                res = currLeft;
            }

            break;
        }

    }

    return res
};