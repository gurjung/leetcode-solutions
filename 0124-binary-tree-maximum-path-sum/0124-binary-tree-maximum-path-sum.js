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
var maxPathSum = function (root) {

    let maxSum = -Infinity;

    function recur(curr) {
        // base condition
        if (!curr) return 0;

        let left = Math.max(0, recur(curr.left));
        let right = Math.max(0, recur(curr.right));

        let temp = left + curr.val + right;

        maxSum = Math.max(maxSum, temp);

        return curr.val + Math.max(left, right)
    }

    recur(root)
    return maxSum
};