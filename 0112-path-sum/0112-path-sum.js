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
    if (!root) return false;

    function recur(node, remSum) {
        // base condition

        if (!node) return false;

        if (!node.left && !node.right) {
            if (remSum - node.val === 0) return true
            return false;
        }

        let left = recur(node.left, remSum - node.val);
        let right = recur(node.right, remSum - node.val);

        return left || right;
    }

    return recur(root, targetSum)

};