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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    // if (!root) return false

    // function recur(curr, sum) {
    //     if (!curr) return false;

    //     sum = sum + curr.val
    //     if (!curr.left && !curr.right) {
    //         return sum === targetSum
    //     }

    //     let leftPath = recur(curr.left, sum);
    //     let rightPath = recur(curr.right, sum);

    //     return leftPath || rightPath
    // }

    // return recur(root, 0)

    // approach 2 ->

    if (!root) return false

    function recur(curr, remSum) {
        if (!curr) return false;

        if (!curr.left && !curr.right) {
            return remSum === curr.val
        }

        let leftPath = recur(curr.left, remSum - curr.val);
        let rightPath = recur(curr.right, remSum - curr.val);

        return leftPath || rightPath
    }

    return recur(root, targetSum)
};