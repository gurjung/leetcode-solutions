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
 * @return {boolean}
 */
var isBalanced = function (root) {

    function recur(node) {
        if (!node) return 0;

        let left = recur(node.left);
        let right = recur(node.right);

        if (left === -1 || right === -1) return -1;

        if (Math.abs(left - right) > 1) {
            return -1;
        }
        return 1 + Math.max(left, right);

    }

    let ans = recur(root);
    if (ans === -1) return false;
    return true
};