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
var swapPairs = function (head) {
    // // Approach 1 -> recursion
    // if (!head || !head.next) return head
    // let l = head;
    // let r = head.next;
    // l.next = swapPairs(r.next);
    // r.next = l;
    // return r;


    // Approach 2 -> Iterative solution (same solution used for reverse nodes in k group here k = 2)

    if (!head) return head;

    let currLeft = head;
    let size = 2;
    let currRight = null;
    let nextLeft = null;
    let prevLeft = null;
    let ans = null;

    function reverse(head, times) {
        let curr = head;
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
            if (currRight === null) {
                break;
            }

            currRight = currRight.next;
        }

        if (currRight) {
            nextLeft = currRight.next; // saving for future left position

            reverse(currLeft, size);

            if (prevLeft) {
                prevLeft.next = currRight;
            }

            prevLeft = currLeft; // store currLeft value in prevLeft for future use

            currLeft = nextLeft;

            if (ans === null) {
                ans = currRight;
            }

        } else {
            // everything ends now
            if (prevLeft) {
                prevLeft.next = currLeft; // because there is no currRight
            }


            if (ans === null) {
                ans = currLeft; // if only node case then currLeft === currRight
            }
            break;
        }
    }

    return ans;
};