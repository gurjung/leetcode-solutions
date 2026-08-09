/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
    // let sum = 0;
    // let temp = ""
    // function recur(curr, temp) {
    //     // base condition
    //     if (!curr) return;

    //     if (!curr.left && !curr.right) {
    //         temp = temp + curr.val
    //         sum = sum + Number(temp);
    //         return;
    //     }

    //     recur(curr.left, temp + curr.val)
    //     recur(curr.right, temp + curr.val)
    // }

    // recur(root, temp)
    // return sum

    // Approach 2 ->

    let sum = 0;
    let temp = 0;
    function recur(curr, temp) {
        // base condition
        if (!curr) return;

        temp = temp * 10 + curr.val;

        if (!curr.left && !curr.right) {
            sum = sum + temp
            return;
        }

        recur(curr.left, temp)
        recur(curr.right, temp)
    }

    recur(root, temp)
    return sum
};