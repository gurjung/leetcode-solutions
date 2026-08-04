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

    // // Approach 1 -> recursion

    // // check whether k nodes exist or not
    // let temp = head, count = 0;
    // while (count < k) {
    //     if (temp === null) {
    //         return head;
    //     }
    //     temp = temp.next;
    //     count++;
    // }
    // // send temp as head in recursive call
    // let prevNode = reverseKGroup(temp, k);
    // // swap k group
    // let curr = head;
    // count = 0;
    // while (count < k) {
    //     let n = curr.next;
    //     curr.next = prevNode;
    //     prevNode = curr;
    //     curr = n;
    //     count++;
    // }
    // return prevNode;

    // Approach 2 -> Iterative solution (same as swap nodes in pair solution, here size is k )

    if (!head) return head;

    let currLeft = head;
    let size = k;
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